import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    brand: "Vogue by Verushka Bonchinche",
    title: "Vogue by Verushka Bonchinche | Dance Studio in Warsaw & Online",
    description:
      "Vogue Femme with Verushka Bonchinche: vogue dance in Warsaw and online. House of Bonchinche group classes, masterclasses and online courses.",
  },
  nav: {
    brand: "Bonchinche",
    links: { about: "Bio", classes: "Classes", faq: "FAQ", contacts: "Contact" },
    cta: "Book",
    languageLabel: "Site language",
    languages: { ru: "RU", en: "EN" },
    newTabHint: "(opens in a new tab)",
  },
  hero: {
    metaTags: ["Vogue Femme", "Warsaw · Worldwide", "Studio / Online"],
    eyebrow: "Mother of the House of Bonchinche · Founder of Vogue in Belarus",
    titleWords: ["Vogue"],
    signature: "by Verushka Bonchinche",
    subtitle:
      "Lines. Presence. Confidence. Group classes in Warsaw, private coaching and online clubs — from your first Walk to tens across the board.",
    ctaPrimary: "Book",
    ctaSecondary: "Bio",
    newTabHint: "(opens in a new tab)",
    scrollHint: "Scroll",
    locationBadge: "Warszawa • Brzeska 18",
    seasonBadge: "Fall / Winter Season • Open Registration",
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
      "Founder of Vogue culture in Belarus. Mother of the House of Bonchinche. Now based in Warsaw, teaching in the studio and online to students worldwide.",
      "In Ballroom, a House is family. The Mother takes her children to the balls and passes on what matters: technique, style, character. The House of Bonchinche is a community where confidence and a signature style grow.",
      "Beyond the studio: artist, choreographer, director and producer — shows, music videos, campaigns, fashion shows. On the judging panel: competitions, festivals and Vogue balls.",
    ],
    factsTitle: "Dossier",
    facts: [
      { label: "Founder", value: "Vogue culture in Belarus" },
      { label: "House", value: "Mother of the House of Bonchinche" },
      { label: "Base", value: "Warsaw · Worldwide" },
      { label: "Roles", value: "Artist · Choreographer · Director · Producer" },
      { label: "Judging", value: "Competitions, festivals, Vogue balls" },
    ],
    gallery: ["Look 02 · Floor", "Look 03 · House of Bonchinche", "Look 04 · Arms"],
  },
  classes: {
    eyebrow: "Classes · Studio / Online",
    title: "Choose Your Category",
    intro: "Format, schedule, price — no fine print. Send a request and Verushka will help you pick your class.",
    scheduleLabel: "Schedule",
    pricesLabel: "Pricing",
    bookCta: "Book",
    newTabHint: "(opens in a new tab)",
    items: {
      "offline-beginners": {
        format: "Studio · Warsaw",
        level: "Beginners",
        title: "Vogue From Zero",
        description: "No experience needed. Culture, foundations and your first confident line — from day one.",
        schedule: ["Mon / Wed · 19:20–20:20", "Brzeska 18, Warsaw"],
        prices: [
          { label: "Drop-in", value: "90 PLN" },
          { label: "4 classes", value: "300 PLN" },
          { label: "8 classes", value: "450 PLN" },
        ],
      },
      "offline-middle": {
        format: "Studio · Warsaw",
        level: "Intermediate",
        title: "Level Up Your Vogue",
        description: "The basics are in your body — now we sharpen the lines and grow the style. Bring knee pads and indoor shoes.",
        schedule: ["Mon / Wed · 20:30–21:40", "Brzeska 18, Warsaw"],
        prices: [
          { label: "Drop-in", value: "90 PLN" },
          { label: "4 classes", value: "300 PLN" },
          { label: "8 classes", value: "450 PLN" },
        ],
      },
      individual: {
        format: "Studio / Online",
        level: "One-on-One",
        title: "Private Coaching",
        description: "Foundations, a substyle or choreography — built around you. Not sure where to start? Verushka will guide you.",
        schedule: ["By arrangement", "Brzeska 18 or online"],
        prices: [
          { label: "1 class", value: "280 PLN" },
          { label: "4 classes", value: "1000 PLN" },
        ],
      },
      "runway-club": {
        format: "Online · Telegram",
        level: "Beginners / Intermediate",
        title: "Runway Online Club",
        description:
          "European Runway walk and posing: hips in motion, confidence in heels, your best angles on camera — and walking the balls.",
        schedule: ["Recorded lessons + live sessions", "Next intake — confirmed on sign-up"],
        prices: [{ label: "1 month", value: "50 €" }],
      },
      "old-way-club": {
        format: "Online · Telegram",
        level: "Open Level",
        title: "Old Way Online Club",
        description: "Old Way — the first Vogue substyle, where it all began. Precision, grace, style. For beginners and returning dancers alike.",
        schedule: ["Recorded lessons + live sessions", "Next intake — confirmed on sign-up"],
        prices: [{ label: "2 months", value: "90 €" }],
      },
    },
  },
  faq: {
    eyebrow: "FAQ · First Timers",
    title: "Before Your First Walk",
    items: [
      {
        question: "Do I need experience?",
        answer:
          "No. The beginners level starts from zero: Mon / Wed, 19:20–20:20, Brzeska 18. Know the basics? Join intermediate: Mon / Wed, 20:30–21:40. Not sure? Start with a private class.",
      },
      {
        question: "What do I wear? Do I need heels?",
        answer:
          "Comfortable stretchy clothes you feel good in, plus clean indoor shoes — sneakers or socks. Heels are optional. At intermediate level, indoor shoes and knee pads are a must. Arrive 10 minutes early — we never skip the warm-up. Drinking water is available in the studio.",
      },
      {
        question: "How do the online clubs work?",
        answer:
          "A private Telegram group: recorded lessons, live sessions with lectures and practice, music for solo training and detailed homework feedback. Runway Online Club is 50 € per month, Old Way Online Club is 90 € for 2 months.",
      },
      {
        question: "How do I find the studio?",
        answer: "Brzeska 18, Warsaw. Tap “Directions” in the Contact block. Arrive 10 minutes before class.",
      },
      {
        question: "Can I gift a class?",
        answer: "Yes. Gift certificates cover any of Verushka's classes. Send a request through the form and she'll get in touch to sort the details.",
      },
    ],
  },
  footer: {
    eyebrow: "Contact · Location",
    title: "See You on the Runway",
    studio: {
      label: "Studio",
      address: "Brzeska 18",
      city: "Warszawa, Poland",
      note: "Group & private classes",
      bookCta: "Book",
      mapsCta: "Directions",
    },
    socialTitle: "Get in Touch",
    socials: {
      instagram: { label: "Instagram", handle: "@verushkabonchinche" },
      telegram: { label: "Telegram", handle: "@verushkabonchinche" },
    },
    collab: "Open to international projects and collaborations",
    wordmark: "Bonchinche",
    copyright: "© {year} House of Bonchinche. All rights reserved.",
    credits: [
      { role: "Mother · Choreography", name: "Verushka Bonchinche" },
      { role: "Photography", name: "Verushka Bonchinche archive" },
    ],
    backToTop: "Back to top",
    newTabHint: "(opens in a new tab)",
  },
};
