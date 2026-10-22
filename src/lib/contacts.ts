export type SocialId = "instagram" | "telegram" | "whatsapp";

export const STUDIO_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Brzeska+18,+Warszawa";

// Instagram — единственная соцсеть, подтверждённая на Taplink (ник без подчёркивания).
// TODO: Telegram (https://t.me/<username>) и WhatsApp (https://wa.me/<номер>) — получить у владельца;
// пока null, футер такие ссылки не показывает.
export const SOCIAL_LINKS: Record<SocialId, string | null> = {
  instagram: "https://www.instagram.com/verushkabonchinche/",
  telegram: null,
  whatsapp: null,
};

export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
