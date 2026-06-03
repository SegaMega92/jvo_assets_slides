import React from 'react';
import { type as typeScale, colors, fonts } from '../tokens';

/**
 * StepItem / ProcessSteps — пошаговый путь: номер-кружок + заголовок + текст,
 * шаги соединены коннектором.
 *
 * Источник: КП Дживио сл.10 («путь покупателя», 4 шага 1–4 с линиями).
 *
 * Слоты: steps[] = { heading, body }. orientation — ряд или колонка.
 */

export interface Step {
  heading: React.ReactNode;
  body?: React.ReactNode;
}

interface ProcessStepsProps {
  steps: Step[];
  orientation?: 'horizontal' | 'vertical';
  accent?: string;
}

const Badge: React.FC<{ n: number; accent: string }> = ({ n, accent }) => (
  <div
    style={{
      width: 72,
      height: 72,
      borderRadius: 999,
      background: accent,
      color: colors.bg.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: fonts.display,
      fontSize: 36,
      fontWeight: 600,
      flexShrink: 0,
    }}
  >
    {n}
  </div>
);

export const ProcessSteps: React.FC<ProcessStepsProps> = ({
  steps,
  orientation = 'horizontal',
  accent = colors.brand.pink,
}) => {
  if (orientation === 'vertical') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: 28 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Badge n={i + 1} accent={accent} />
              {i < steps.length - 1 && <div style={{ flex: 1, width: 3, background: colors.border.subtle, minHeight: 40 }} />}
            </div>
            <div style={{ paddingBottom: 48, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ ...typeScale.h4, color: colors.text.primary }}>{s.heading}</div>
              {s.body && <div style={{ ...typeScale.body, color: colors.text.primary, opacity: 0.8 }}>{s.body}</div>}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: 0 }}>
      {steps.map((s, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
            <Badge n={i + 1} accent={accent} />
            {i < steps.length - 1 && <div style={{ flex: 1, height: 3, background: colors.border.subtle }} />}
          </div>
          <div style={{ paddingRight: 40, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ ...typeScale.h4, color: colors.text.primary }}>{s.heading}</div>
            {s.body && <div style={{ ...typeScale.body, color: colors.text.primary, opacity: 0.8 }}>{s.body}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};
