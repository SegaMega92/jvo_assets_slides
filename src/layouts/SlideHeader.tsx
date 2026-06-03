import React from 'react';
import { type, layout } from '../tokens';

/**
 * Шапка слайда — title + optional lead.
 * Используется почти всеми лейаутами (кроме BigStatement).
 */

interface SlideHeaderProps {
  title?: React.ReactNode;
  lead?: React.ReactNode;
  titleColor?: string;
  leadColor?: string;
  maxWidth?: number;
}

export const SlideHeader: React.FC<SlideHeaderProps> = ({
  title,
  lead,
  titleColor,
  leadColor,
  maxWidth = layout.titleMaxW,
}) => {
  if (!title && !lead) return null;

  return (
    <div style={{
      position: 'absolute',
      left: layout.titleX,
      top: layout.titleY,
      maxWidth,
    }}>
      {title && (
        <div style={{
          ...type.title,
          color: titleColor ?? 'inherit',
        }}>
          {title}
        </div>
      )}
      {lead && (
        <div style={{
          ...type.body,
          color: leadColor ?? 'inherit',
          opacity: leadColor ? 1 : 0.75,
          marginTop: 24,
          maxWidth: maxWidth * 0.85,
        }}>
          {lead}
        </div>
      )}
    </div>
  );
};
