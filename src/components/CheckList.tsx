import React from 'react';
import { type as typeScale, colors } from '../tokens';

/**
 * CheckList — список с маркерами ✓ (и опционально ✗).
 *
 * Источник: КП Дживио сл.8 («что будет делать платформа» с галочками,
 * «что будет на вашей команде»). Подходит для «входит / не входит».
 *
 * Слоты: heading (optional), items[] = строка | { text, ok }.
 */

export type CheckItem = React.ReactNode | { text: React.ReactNode; ok?: boolean };

interface CheckListProps {
  heading?: React.ReactNode;
  items: CheckItem[];
  okColor?: string;
  noColor?: string;
  headingColor?: string;
  itemColor?: string;
}

const norm = (it: CheckItem): { text: React.ReactNode; ok: boolean } =>
  it !== null && typeof it === 'object' && 'text' in (it as any)
    ? { text: (it as any).text, ok: (it as any).ok !== false }
    : { text: it as React.ReactNode, ok: true };

export const CheckList: React.FC<CheckListProps> = ({
  heading,
  items,
  okColor = colors.semantic.success,
  noColor = colors.text.muted,
  headingColor = colors.text.primary,
  itemColor = colors.text.primary,
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
    {heading && <div style={{ ...typeScale.h4, color: headingColor }}>{heading}</div>}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {items.map((raw, i) => {
        const { text, ok } = norm(raw);
        return (
          <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
            <span
              style={{
                flexShrink: 0,
                width: 40,
                height: 40,
                borderRadius: 999,
                background: ok ? okColor : 'transparent',
                border: ok ? 'none' : `2px solid ${noColor}`,
                color: ok ? colors.bg.white : noColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              {ok ? '✓' : '✕'}
            </span>
            <span style={{ ...typeScale.body, color: itemColor, opacity: ok ? 0.9 : 0.6, paddingTop: 2 }}>{text}</span>
          </div>
        );
      })}
    </div>
  </div>
);
