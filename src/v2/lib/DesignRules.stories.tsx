import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { colors, fonts } from '../../tokens';

/**
 * 20 правил и эвристик дизайна презентаций JVO.
 * Источник: опыт воспроизведения деков 1:1, скил /frontend-slides и QA-находки.
 * Применяются ко всем презентациям проекта (см. AGENTS.md).
 */
const meta: Meta = {
  title: 'Слайдкит/Правила дизайна',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: '21 правило и эвристика дизайна презентаций JVO — единый чек-лист для сборки и ревью слайдов.' } },
  },
};
export default meta;

interface Rule { t: string; d: string }
interface Group { name: string; rules: Rule[] }

const GROUPS: Group[] = [
  {
    name: 'Композиция и экран',
    rules: [
      { t: 'Viewport-fit — закон', d: 'Всё умещается в 1920×1080 без скролла и обрезки. Не влезает → дели на слайды, не ужимай шрифт ниже читаемого.' },
      { t: 'Воздух важнее плотности', d: 'Поля ≥64px (≈3.5%) от краёв; отступы кратны 8; единый ритм между блоками.' },
      { t: 'Сетка и выравнивание', d: 'Всё по общей сетке, левый край контента единый. Абзацы — влево; по центру только заголовки и крупные числа.' },
      { t: 'Лимиты плотности', d: '≤6 карточек, ≤4–6 пунктов, ≤2 абзаца на слайд. Больше — следующий слайд.' },
      { t: 'Правило близости', d: 'Связанные элементы держи рядом, несвязанные — раздели пробелом. Расстояние внутри группы заметно меньше, чем между группами; группируй расстоянием, а не линиями и рамками.' },
    ],
  },
  {
    name: 'Иерархия и типографика',
    rules: [
      { t: 'Сильная иерархия размеров', d: 'Контраст заголовок/тело ≥2× (Unbounded 36pt+ / Manrope 14–16pt).' },
      { t: 'Максимум 2 шрифта', d: 'Дисплейный + текстовый, 2–3 начертания. Без «Arial/Inter на белом» по умолчанию.' },
      { t: 'Один акцент на слайд', d: 'Ведущий элемент держит 60–70% визуального веса, остальное — поддержка.' },
    ],
  },
  {
    name: 'Цвет и бренд',
    rules: [
      { t: 'Доминанта + поддержка + акцент', d: 'Один главный цвет, 1–2 поддерживающих, 1 акцентный. Не давать всем цветам равный вес.' },
      { t: 'Тёмный «сэндвич»', d: 'Тёмные титул/вывод, светлые контентные — или цельно-тёмный для премиум-тона. Фирменная палитра, не дженерик-градиенты.' },
      { t: 'Контраст по AA (~4.5:1)', d: 'Не светлый текст на светлом и не тёмный на тёмном. Иконкам тоже нужен контраст (тёмная — в светлом кружке).' },
      { t: 'Один повторяющийся мотив', d: 'Бейдж «J», скруглённые плашки, иконки в кружках — на всех слайдах ради узнаваемости.' },
    ],
  },
  {
    name: 'Данные и визуал',
    rules: [
      { t: 'Визуальный якорь на каждом слайде', d: 'Число-callout, график, иконка или плашка. Без «текст-онли».' },
      { t: 'Числа — крупно', d: 'Ключевую метрику callout-ом 60–72pt; единицу/подпись мельче, рядом или под числом.' },
      { t: 'Выравнивай число и подпись', d: 'Число и его единицу/подпись выравнивай осознанно по вертикали: однострочную единицу — по базовой линии числа, многострочную подпись — по вертикальному центру. Не оставляй подпись «плавающей» сбоку.' },
      { t: 'Данные → форма', d: 'Сравнение = колонки/таблица, процесс = шаги/стрелки, доля = диаграмма. Не описывай словами то, что лучше показать.' },
      { t: 'Лого-стены аккуратно', d: '≤8 в ряд, ряды балансируй (12 → 6+6), логотип крупно заполняет плитку (LogoBlock).' },
    ],
  },
  {
    name: 'Устойчивость',
    rules: [
      { t: 'Не фиксируй высоту жёстко', d: 'minHeight/flex вместо height; длинный текст переносится (break-word), а не вылезает и не обрезается.' },
      { t: 'Тестируй на граничных данных', d: 'Длинные имена, большие числа, пустые значения, много элементов — состояние не должно ломаться.' },
      { t: 'Не рви числа и заголовки', d: 'Неразрывный пробел в числах («19 900»), единица возле/под числом; заголовки не рвать по дефису («AI-агентами» цельно).' },
    ],
  },
  {
    name: 'Процесс',
    rules: [
      { t: 'Show-don’t-tell + цикл визуального QA', d: 'Скриншот → сверка с эталоном/макетом → правка до совпадения; «считай, что с первого раза криво». Анимация осмысленная (reveal-on-enter), уважай prefers-reduced-motion.' },
    ],
  },
];

const F = fonts;
const EGG = colors.brand.eggplant;
const PINK = colors.brand.pink;

export const Правила: StoryObj = {
  render: () => {
    let n = 0;
    return (
      <div style={{ minHeight: '100vh', background: '#F2F3FA', fontFamily: F.body, padding: '72px 80px 96px' }}>
        <div style={{ maxWidth: 1500, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', background: PINK, color: EGG, borderRadius: 999, padding: '10px 22px', fontFamily: F.body, fontWeight: 700, fontSize: 20 }}>21 правило</div>
          <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 64, color: EGG, lineHeight: 1.1, letterSpacing: '-0.01em', marginTop: 24 }}>
            Правила дизайна презентаций JVO
          </div>
          <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 26, color: '#666', marginTop: 18, maxWidth: 1100, lineHeight: 1.4 }}>
            Единый чек-лист для сборки и ревью слайдов. Основан на опыте воспроизведения деков 1:1,
            скиле <code>/frontend-slides</code> и наших QA-находках.
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48, marginTop: 56 }}>
            {GROUPS.map((g) => (
              <div key={g.name}>
                <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 30, color: EGG, marginBottom: 24 }}>{g.name}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
                  {g.rules.map((r) => {
                    n += 1;
                    return (
                      <div key={r.t} style={{ display: 'flex', gap: 24, background: '#FFFFFF', border: '1px solid #ECE3E9', borderRadius: 20, padding: 28 }}>
                        <div style={{ flex: '0 0 auto', width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg,#FFE4F6,#FF8FDA)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: F.display, fontWeight: 700, fontSize: 26, color: EGG }}>{n}</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 24, color: EGG, lineHeight: 1.2 }}>{r.t}</div>
                          <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 19, color: '#5A4A55', lineHeight: 1.4, marginTop: 10 }}>{r.d}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};
