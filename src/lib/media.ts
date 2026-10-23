/**
 * Photo registry. Alt text is intentionally English in every locale:
 * it targets screen readers and Google Images rather than the UI language.
 */
export const MEDIA = {
  hero: {
    src: "/assets/optimized/verushka-hero.webp",
    alt: "Verushka Bonchinche, Mother of the House of Bonchinche, holding a sculptural Vogue Femme pose in a red couture look and stiletto heels",
  },
  hands: {
    src: "/assets/optimized/verushka-hands.webp",
    alt: "Verushka Bonchinche in a red bodysuit, hands sweeping through her hair in a Vogue hands performance",
  },
  arch: {
    src: "/assets/optimized/verushka-arch.webp",
    alt: "Verushka Bonchinche mid-movement, one arm arched overhead in a sharp Vogue line",
  },
  portraitBw: {
    src: "/assets/optimized/verushka-portrait-bw.webp",
    alt: "Black-and-white over-the-shoulder portrait of Vogue dancer Verushka Bonchinche",
  },
  raise: {
    src: "/assets/optimized/verushka-raise.webp",
    alt: "Full-length shot of Verushka Bonchinche with one arm raised high, posing with runway confidence",
  },
  floorBw: {
    src: "/assets/optimized/verushka-floor-bw.webp",
    alt: "Black-and-white photo of Verushka Bonchinche lying on the floor in a Vogue floor performance pose",
  },
  floor: {
    src: "/assets/optimized/verushka-floor.webp",
    alt: "Verushka Bonchinche in a red look, posed low to the ground in a Vogue floor performance",
  },
  house: {
    src: "/assets/optimized/house-of-bonchinche.webp",
    alt: "Verushka Bonchinche seen from behind with the House of Bonchinche logo",
  },
} as const;

export type MediaItem = (typeof MEDIA)[keyof typeof MEDIA];
