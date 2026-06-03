import React from 'react';
import { SlideFrame } from './SlideFrame';
import { type, layout, themes, type ThemeName } from '../tokens';

/**
 * Лейаут 1: Крупное утверждение / цитата / тезис.
 *
 * Слоты:
 *   - illustration (optional) — иллюстрация над текстом
 *   - statement (required) — крупный текст
 *   - decoration (optional) — нижний декор
 */

interface BigStatementProps {
  illustration?: React.ReactNode;
  statement: React.ReactNode;
  decoration?: React.ReactNode;
  theme?: ThemeName;
  statementColor?: string;
}

export const BigStatement: React.FC<BigStatementProps> = ({
  illustration,
  statement,
  decoration,
  theme = 'light',
  statementColor,
}) => {
  const t = themes[theme];
  return (
    <SlideFrame theme={theme}>
      <div style={{
        position: 'absolute',
        inset: 0,
        padding: `${layout.slidePadY * 4}px ${layout.slidePadX * 3}px`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {illustration && (
          <div style={{ marginBottom: 48 }}>
            {illustration}
          </div>
        )}
        <div style={{
          ...type.display,
          color: statementColor ?? t.text,
          maxWidth: '70%',
        }}>
          {statement}
        </div>
        {decoration && (
          <div style={{ marginTop: 48 }}>
            {decoration}
          </div>
        )}
      </div>
    </SlideFrame>
  );
};
