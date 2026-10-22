import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Vogue by Verushka Bonchinche — Vogue & Ballroom Studio",
    description:
      "Group classes, private coaching and online clubs with Verushka Bonchinche — Mother of the House of Bonchinche and founder of Vogue culture in Belarus. Warsaw & online.",
  },
  nav: {
    brand: "Bonchinche",
    links: { about: "The Mother & The House", classes: "Classes" },
    cta: "Book",
    languageLabel: "Site language",
    languages: { ru: "RU", en: "EN" },
  },
  hero: {
    metaTags: ["Vogue Femme", "Warsaw · Worldwide", "Studio / Online"],
    eyebrow: "Mother of the House of Bonchinche · Founder of Vogue culture in Belarus",
    titleWords: ["Vogue"],
    signature: "by Verushka Bonchinche",
    subtitle:
      "Group classes in Warsaw, private coaching and online clubs — from your first Walk to tens across the board in your category.",
    ctaPrimary: "Book a Class",
    ctaSecondary: "Meet Verushka",
    scrollHint: "Scroll",
    locationBadge: "Warszawa • Brzeska 18",
    seasonBadge: "Fall / Winter Season • Open Registration",
    imageAlt: "Verushka Bonchinche in a sculptural red look, full length",
    imageCaption: "Look 01 · Verushka Bonchinche",
    marquee: [
      "Hands Performance",
      "Catwalk",
      "Duckwalk",
      "Spin & Dip",
      "Floor Performance",
      "Tens Across the Board",
    ],
  },
  about: {
    eyebrow: "The Mother & The House",
    title: "The Mother & The House",
    quote:
      "My classes are not only about dance and culture — they are about a warm, supportive community.",
    quoteAuthor: "Verushka Bonchinche",
    story: [
      "Verushka Bonchinche is the founder of Vogue culture in Belarus and the Mother of the House of Bonchinche. Today she is based in Warsaw and teaches Vogue in the studio and online — to students all over the world.",
      "In Ballroom culture a House is a family: the Mother takes her children to the balls and passes on technique, style and character. The House of Bonchinche stands on the same thing — a community where confidence and a signature style can grow.",
      "Beyond teaching, she works as an artist, choreographer, director and producer — shows, music videos, campaigns and fashion shows — and judges dance competitions, festivals and Vogue balls.",
    ],
    factsTitle: "Dossier",
    facts: [
      { label: "Founder", value: "Vogue culture in Belarus" },
      { label: "House", value: "Mother of the House of Bonchinche" },
      { label: "Base", value: "Warsaw, Poland · working worldwide" },
      { label: "Roles", value: "Artist · Choreographer · Director · Producer" },
      { label: "Judging", value: "Competitions, festivals & Vogue balls" },
    ],
    gallery: [
      { alt: "Verushka Bonchinche posing on the floor in a red look", caption: "Look 02 · Floor" },
      { alt: "Verushka Bonchinche from behind with the House of Bonchinche logo", caption: "Look 03 · House of Bonchinche" },
      { alt: "Verushka Bonchinche mid-movement, arm arched overhead", caption: "Look 04 · Arms" },
    ],
  },
  classes: {
    eyebrow: "Classes · Studio / Online",
    title: "Choose Your Category",
    intro:
      "Real formats, schedules and prices. Fill in the form and Verushka will get in touch to confirm the details and format.",
    scheduleLabel: "Schedule",
    pricesLabel: "Pricing",
    bookCta: "Book",
    newTabHint: "(opens in a new tab)",
    items: {
      "offline-beginners": {
        format: "Studio · Warsaw",
        level: "Beginners",
        title: "Vogue From Zero",
        description:
          "A group where Verushka introduces Vogue culture from scratch. Just starting out? Perfect — this group is made for you.",
        schedule: ["Mon / Wed · 19:20–20:20", "Brzeska 18, Warsaw"],
        prices: [
          { label: "Drop-in", value: "90 PLN" },
          { label: "4 classes", value: "300 PLN" },
          { label: "8 classes", value: "450 PLN" },
        ],
        imageAlt: "Verushka Bonchinche with hands in her hair, red bodysuit",
      },
      "offline-middle": {
        format: "Studio · Warsaw",
        level: "Intermediate",
        title: "Level Up Your Vogue",
        description:
          "For those who already know the Vogue basics and keep growing in the style. Bring knee pads and indoor shoes.",
        schedule: ["Mon / Wed · 20:30–21:40", "Brzeska 18, Warsaw"],
        prices: [
          { label: "Drop-in", value: "90 PLN" },
          { label: "4 classes", value: "300 PLN" },
          { label: "8 classes", value: "450 PLN" },
        ],
        imageAlt: "Verushka Bonchinche mid-movement, arm arched overhead",
      },
      individual: {
        format: "Studio / Online",
        level: "One-on-One",
        title: "Private Coaching",
        description:
          "Learn the foundations, explore a substyle, learn or create choreography — built around your request. Not sure what you need? Verushka will help.",
        schedule: ["By arrangement", "Brzeska 18 or online"],
        prices: [
          { label: "1 class", value: "280 PLN" },
          { label: "4 classes", value: "1000 PLN" },
        ],
        imageAlt: "Black-and-white over-the-shoulder portrait of Verushka Bonchinche",
      },
      "runway-club": {
        format: "Online · Telegram",
        level: "Beginners / Intermediate",
        title: "Runway Online Club",
        description:
          "Walk and posing in the European Runway style: a feminine walk driven by the hips, confidence in heels, your best angles on camera — and walking the balls.",
        schedule: ["Recorded lessons + live sessions", "Next intake — confirmed on sign-up"],
        prices: [{ label: "1 month", value: "50 €" }],
        imageAlt: "Verushka Bonchinche full length, arm raised high",
      },
      "old-way-club": {
        format: "Online · Telegram",
        level: "Open Level",
        title: "Old Way Online Club",
        description:
          "A club devoted to Old Way, the first Vogue substyle — the foundation it all started from. Precision, grace and style. For beginners and returning dancers alike.",
        schedule: ["Recorded lessons + live sessions", "Next intake — confirmed on sign-up"],
        prices: [{ label: "2 months", value: "90 €" }],
        imageAlt: "Black-and-white photo of Verushka Bonchinche lying on the floor",
      },
    },
  },
};
