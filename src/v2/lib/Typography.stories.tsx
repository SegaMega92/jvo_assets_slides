import type { Meta, StoryObj } from '@storybook/react';
import { Title, Body } from './primitives';
import { Backdrop } from './_preview';

/**
 * Типографика: Title (Unbounded) и Body (Manrope) — два текстовых примитива
 * с фиксированной шкалой размеров из токенов.
 */
const meta: Meta<typeof Title> = {
  title: 'Слайдкит/Примитивы/Типографика',
  component: Title,
  decorators: [Backdrop({ pad: 80 })],
  parameters: { docs: { description: { component: 'Заголовки (Title, Unbounded: display/section/title/card) и текст (Body, Manrope: lead/body/small/caption).' } } },
  argTypes: {
    level: { control: { type: 'inline-radio', options: ['display', 'section', 'title', 'card'] }, description: 'Размер заголовка' },
    color: { control: 'color' },
    align: { control: { type: 'inline-radio', options: ['left', 'center', 'right'] } },
  },
};
export default meta;
type S = StoryObj<typeof Title>;

export const Заголовок: S = { args: { level: 'title', children: 'AI-агенты для управления бизнесом' } };
export const Шкала: S = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 1200 }}>
      <Title level="display">Display 96</Title>
      <Title level="section">Section 75</Title>
      <Title level="title">Title 56</Title>
      <Title level="card">Card title 36</Title>
      <Body size="lead">Lead 36 — вводный абзац к слайду.</Body>
      <Body size="body">Body 28 — основной текст карточек и описаний.</Body>
      <Body size="small">Small 22 — подписи, мелкие пункты списков.</Body>
      <Body size="caption" color="#999">Caption 18 — источники, сноски.</Body>
    </div>
  ),
};
