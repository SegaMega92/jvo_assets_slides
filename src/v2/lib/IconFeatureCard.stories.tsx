import type { Meta, StoryObj } from '@storybook/react';
import { IconFeatureCard } from './cards';
import { Backdrop, Row } from './_preview';

const meta: Meta<typeof IconFeatureCard> = {
  title: 'Слайдкит/Карточки/IconFeatureCard',
  component: IconFeatureCard,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Карточка-фича: иконка в бейдже + заголовок + описание. Светлая/тёмная/лаймовая/розовая темы. Тул-слайды (Дашборд, SEO PRO…), «Единый центр управления».' } } },
  argTypes: {
    icon: { control: 'text', description: 'Символ/эмодзи' },
    iconSrc: { control: 'text', description: 'URL картинки (приоритет над icon)' },
    title: { control: 'text' }, desc: { control: 'text' },
    theme: { control: { type: 'inline-radio', options: ['light', 'dark', 'lime', 'pink'] }, description: 'Тема' },
    accent: { control: 'color', description: 'Цвет заголовка (override)' },
  },
};
export default meta;
type S = StoryObj<typeof IconFeatureCard>;

export const Playground: S = { args: { icon: '🔍', title: 'Находит', desc: 'Система видит утечки выручки и точки роста в реальном времени по всей вашей матрице', theme: 'dark' } };
export const Темы: S = {
  render: () => (
    <Row>
      <IconFeatureCard width={420} height={420} theme="light" icon="📊" title="Данные" desc="API Wildberries и Ozon + ваши данные о марже и остатках" />
      <IconFeatureCard width={420} height={420} theme="dark" icon="🤖" title="ИИ" desc="Каскад нейросетей анализирует 70 000+ микро-решений в неделю" />
      <IconFeatureCard width={420} height={420} theme="lime" icon="⚡" title="Действия" desc="Агенты вносят изменения через официальный API" accent="#1F2A09" />
    </Row>
  ),
};
