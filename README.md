# JVO Slides — Storybook

Дизайн-система и презентации ДЖИВИО на React + Storybook.

- **Презентации** — слайды трёх деков (Enterprise, КП Дживио, Студия) + One Pager, воспроизведённые 1:1 из PPTX.
- **Слайдкит** — библиотека автономных компонентов (примитивы, карточки, списки, таблицы, бренд, LogoBlock) с autodocs.
- **Слайдкит/Правила дизайна** — 21 правило и эвристика дизайна презентаций.

## Запуск

```bash
npm install
npm run storybook   # http://localhost:6006
```

Node 22+. Шрифты Unbounded / Manrope подключены (Google Fonts + self-host в `public/fonts`).

## Сборка статики

```bash
npm run build-storybook   # → storybook-static/ (можно отдать на GitHub Pages / любой静ик-хостинг)
```

## Структура

- `src/v2/SlideStage.tsx` — холст слайда 1920×1080 (масштабируется под окно).
- `src/v2/lib/` — библиотека компонентов «Слайдкит» (+ `DesignRules` — правила).
- `src/v2/slides/` — слайды презентаций.
- `src/components/`, `src/layouts/` — компоненты/лейауты v1.
- `v2assets/`, `backgrounds/`, `clients/`, `illustration/`, `logo/`, `procuts/` — ассеты (смонтированы как staticDirs).

Точка входа для агента-сборщика — `AGENTS.md`.
