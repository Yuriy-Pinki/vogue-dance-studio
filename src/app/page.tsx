import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { LocaleProvider } from "@/components/LocaleProvider";
import { defaultLocale, getDictionary } from "@/dictionaries";
import { BOOKING_FORM_URL } from "@/lib/booking";
import { SOCIAL_LINKS, STUDIO_MAPS_URL } from "@/lib/contacts";
import { MEDIA } from "@/lib/media";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { ru: "/", "x-default": "/" },
  },
};

const absolute = (path: string) => new URL(path.replace(/^\//, ""), SITE_URL).toString();

const founder = {
  "@type": "Person",
  "@id": `${SITE_URL}#verushka`,
  name: "Verushka Bonchinche",
  jobTitle: "Mother of the House of Bonchinche",
  image: absolute(MEDIA.portraitBw.src),
  knowsAbout: ["Vogue Femme", "Old Way", "European Runway", "Catwalk", "Hands Performance", "Ballroom culture"],
  memberOf: { "@type": "Organization", name: "House of Bonchinche" },
  sameAs: Object.values(SOCIAL_LINKS),
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["SportsActivityLocation", "LocalBusiness"],
      "@id": `${SITE_URL}#studio`,
      name: dict.meta.brand,
      description: dict.meta.description,
      url: SITE_URL,
      image: absolute(OG_IMAGE.path),
      address: {
        "@type": "PostalAddress",
        streetAddress: "Brzeska 18",
        addressLocality: "Warszawa",
        addressCountry: "PL",
      },
      hasMap: STUDIO_MAPS_URL,
      founder: { "@id": founder["@id"] },
      sameAs: Object.values(SOCIAL_LINKS),
      potentialAction: { "@type": "ReserveAction", target: BOOKING_FORM_URL },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: dict.classes.title,
        itemListElement: Object.values(dict.classes.items).map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item.title, description: item.description },
        })),
      },
    },
    founder,
  ],
};

function getCurrentYear() {
  return new Date().getFullYear();
}

export default async function Home() {
  const year = await getCurrentYear();

  return (
    <LocaleProvider>
      <script
        type="application/ld+json"
        // Escape "<" so dictionary content can never close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <HomeContent year={year} />
    </LocaleProvider>
  );
}
