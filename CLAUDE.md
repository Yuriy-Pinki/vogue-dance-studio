# Vogue Studio: Verushka Bonchinche — Project Core

## 1. Brand Identity & Source of Truth
- **Source Link:** https://vogue-by-verushka-bonchinche.taplink.ws/
- **Key Figure:** Verushka Bonchinche — Iconic Mother of the Legendary House of Bonchinche, амбассадор и пионер российской и международной Ballroom-культуры.
- **Brand Aesthetic:** Редакционный глянец, подиумный минимализм (Haute Couture), резкие стаккато-линии, клубная культура Ballroom 1970s–наши дни.
- **Mission:** Трансформировать линейный контент Taplink (базовые курсы, интенсивы, подготовка к балам, мастер-классы) в интерактивный иммерсивный веб-опыт мирового уровня.

## 2. Design System & Aesthetics
- **Color Palette:**
  - Background: Obsidian Black (`#080808`), Surface Charcoal (`#121212`)
  - Typography: Pure Chalk (`#F5F5F7`), Editorial Silver (`#8E8E93`)
  - Accents: Haute Fuchsia (`#E1005A`), Electric Violet (`#7B2CBF`), Champagne Gold (`#D4AF37`)
- **Typography:**
  - Headers: High-fashion Editorial Display Serif (Cinzel, Playfair Display или Syne с широким кернингом `tracking-widest`).
  - Body & UI: Clean Minimal Sans (Geist, Inter) + Brutalist Mono для мета-тегов и расписания.
- **Motion (Framer Motion):**
  - Staccato poses, резкие snaps, плавный параллакс-скролл, бесконечная подиумная бегущая строка (Marquee).

## 3. Technology Stack & Architecture
- Next.js (App Router, TypeScript, React Server Components)
- Tailwind CSS + Lucide React
- Framer Motion
- Стейт языка: React Context / хук локализации через словари

## 4. Internationalization (i18n) Rules
- **Языки:** Русский (`ru`, по умолчанию) и Английский (`en`).
- **Словари:** `src/dictionaries/ru.ts` и `src/dictionaries/en.ts` (строго синхронизированные ключи через TypeScript интерфейс).
- **Zero Hardcoded Strings:** Запрещено писать сырой текст в `.tsx` компонентах. Все текстовые блоки, кнопки и бейджи тянутся из словаря.
- **Терминология:**
  - EN: Authentic Ballroom terminology (*Tens across the board, Dip, Walk, Categories, House Mother*).
  - RU: Профессиональный вог-сленг без дословного машинного перевода (*«Выход в категорию»*, *«Селекшн»*, *«Элементы Vogue Femme»*).

## 5. Booking & Form Integration
- Кнопки записи ведут на внешнюю Google Форму с передачей pre-filled параметров через хелпер `src/lib/booking.ts`.
- Формат ссылки: `https://docs.google.com/forms/d/e/.../viewform?usp=pp_url&<entry_id>=<encoded_value>`.
- Все ссылки открываются в новой вкладке с атрибутами `target="_blank" rel="noopener noreferrer"`.

## 6. Token Optimization & Code Hygiene
- **Минимальный вывод:** Не перепечатывать файлы целиком, если меняется пара строк. Использовать компактные точечные правки.
- **Без лишнего шума:** Никаких вводных приветствий и очевидных пересказов. Переходить прямо к делу и коду.
- **Проверка перед сдачей:** Обязательный запуск `npm run build` или `npx tsc --noEmit` перед фиксацией изменений.
