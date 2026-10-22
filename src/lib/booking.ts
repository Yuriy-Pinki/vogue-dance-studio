export type ClassId =
  | "offline-beginners"
  | "offline-middle"
  | "individual"
  | "runway-club"
  | "old-way-club";

// Формы из Taplink (docs/taplink-audit.md). Индивидуальные офлайн/онлайн и оба клуба делят одну форму.
const BOOKING_FORMS: Record<ClassId, string> = {
  "offline-beginners": "https://forms.gle/rFXgjyRwcpvzJUte6",
  "offline-middle": "https://forms.gle/u6RD2BkUhWSqWwgB6",
  individual: "https://forms.gle/FUHwDwXEFZRy7FUD9",
  "runway-club": "https://forms.gle/sxxZLGjziErpWQ199",
  "old-way-club": "https://forms.gle/sxxZLGjziErpWQ199",
};

// TODO: pre-fill требует полного URL `https://docs.google.com/forms/d/e/<id>/viewform`
// и ID полей `entry.*` — получить у владельца. Короткие forms.gle параметры не принимают.
const PREFILL_FORMS: Partial<Record<ClassId, { viewformUrl: string; entries: Record<string, string> }>> = {};

export const bookingLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export function buildBookingUrl(classId: ClassId, values: Record<string, string> = {}): string {
  const prefill = PREFILL_FORMS[classId];
  if (!prefill) return BOOKING_FORMS[classId];

  const url = new URL(prefill.viewformUrl);
  url.searchParams.set("usp", "pp_url");
  for (const [field, value] of Object.entries(values)) {
    const entryId = prefill.entries[field];
    if (entryId) url.searchParams.set(entryId, value);
  }
  return url.toString();
}
