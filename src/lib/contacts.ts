export type SocialId = "instagram" | "telegram";

export const STUDIO_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Brzeska+18,+Warszawa";

export const SOCIAL_LINKS: Record<SocialId, string> = {
  instagram: "https://www.instagram.com/verushkabonchinche",
  telegram: "https://t.me/verushkabonchinche",
};

export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
