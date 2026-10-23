export type ClassId =
  | "offline-beginners"
  | "offline-middle"
  | "individual"
  | "runway-club"
  | "old-way-club";

/** Single Google Form shared by every programme. */
export const BOOKING_FORM_URL = "https://forms.gle/5YLK9F4jTAg8kgQB9";

export const bookingLinkProps = {
  href: BOOKING_FORM_URL,
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
