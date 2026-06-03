import type { Meta, StoryObj } from '@storybook/react';
import { IconBadge } from './primitives';
import { Backdrop, Row } from './_preview';

const meta: Meta<typeof IconBadge> = {
  title: 'Слайдкит/Примитивы/IconBadge',
  component: IconBadge,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Иконка в цветной подложке (круг / скруглённый квадрат / без подложки). Используется в шапках секций и карточках-фичах. Принимает картинку (`src`) или символ (`glyph`).' } } },
  argTypes: {
    glyph: { control: 'text', description: 'Символ/эмодзи (если без картинки)' },
    src: { control: 'text', description: 'URL картинки-иконки' },
    size: { control: { type: 'range', min: 40, max: 160 }, description: 'Размер, px' },
    background: { control: 'color', description: 'Цвет подложки' },
    shape: { control: { type: 'inline-radio', options: ['circle', 'rounded', 'none'] }, description: 'Форма подложки' },
    glyphColor: { control: 'color', description: 'Цвет символа' },
  },
};
export default meta;
type S = StoryObj<typeof IconBadge>;

export const Playground: S = { args: { glyph: '★', size: 88, background: '#FF8FDA', shape: 'rounded', glyphColor: '#410031' } };
export const Формы: S = {
  render: () => (
    <Row align="center">
      <IconBadge glyph="🔍" shape="circle" background="#410031" />
      <IconBadge glyph="✓" shape="rounded" background="#D6FE9E" glyphColor="#1F2A09" />
      <IconBadge glyph="%" shape="circle" background="#FF8FDA" glyphColor="#410031" />
    </Row>
  ),
};
