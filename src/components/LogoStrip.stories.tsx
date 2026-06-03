import type { Meta, StoryObj } from '@storybook/react';
import { BadgeRow, LogoStrip } from './LogoStrip';
import { Stage } from './Stage';

const meta: Meta = {
  title: 'Компоненты/Логотипы и регалии',
  decorators: [(Story) => <Stage width={1500}>{Story()}</Stage>],
};
export default meta;
type S = StoryObj;

export const Регалии: S = {
  render: () => (
    <BadgeRow
      badges={[
        { icon: '🏅', text: 'Резидент Сколково' },
        { icon: '🛡️', text: 'IT-аккредитация' },
        { icon: '⭐', text: 'Победитель «Большой Оборот»' },
        { icon: '🚀', text: 'STARTECH Awards' },
      ]}
    />
  ),
};

const clients = [
  'Рив Гош.png', 'Вкуссвил.png', 'Ортека.png', 'Эксмо.png',
  'Синергетик.png', 'BBK.png', 'Май.png', 'Красная Линия.png',
].map((f) => ({ src: `/assets/clients/${encodeURIComponent(f)}`, alt: f.replace('.png', '') }));

export const ЛоготипыКлиентов: S = {
  render: () => <LogoStrip logos={clients} columns={4} />,
};

export const ЛентаБезКарточек: S = {
  render: () => <LogoStrip logos={clients} card={false} height={120} />,
};
