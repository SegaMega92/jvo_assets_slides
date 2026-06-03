import type { Meta, StoryObj } from '@storybook/react';
import { Wordmark, JBadge, Frame, LogoStrip, LogoBlock } from './brand';
import { Title } from './primitives';
import { Backdrop, Row } from './_preview';

/** Бренд-элементы: Wordmark, JBadge, Frame, LogoStrip. */
const meta: Meta<typeof Wordmark> = {
  title: 'Слайдкит/Бренд/Бренд',
  component: Wordmark,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Бренд-элементы JVO: текстовый логотип Wordmark, бейдж JBadge, фирменная рамка Frame (Студия) и сетка логотипов LogoStrip.' } } },
  argTypes: {
    suffix: { control: 'text' }, theme: { control: { type: 'inline-radio', options: ['dark', 'light'] } }, size: { control: { type: 'range', min: 20, max: 80 } },
  },
};
export default meta;
type S = StoryObj<typeof Wordmark>;

export const Wordmark_: S = { name: 'Wordmark', args: { suffix: 'студия', theme: 'dark', size: 44 } };

export const JBadge_: StoryObj = {
  name: 'JBadge',
  render: () => <Row align="center"><JBadge variant="pink" /><JBadge variant="dark" /></Row>,
};

export const Frame_: StoryObj = {
  name: 'Frame (Студия)',
  render: () => (
    <Frame width={760} height={428} background="#FFFFFF">
      <div style={{ padding: 48 }}><Title level="title">Комплексное<br />ведение кабинета</Title></div>
    </Frame>
  ),
};

export const LogoStrip_: StoryObj = {
  name: 'LogoStrip',
  render: () => <LogoStrip columns={5} logos={['SOKOLOV', 'FEELZ', 'LARETTO', 'SPLAT', 'GSS', 'LAMODA', 'OPTIMA', 'durex', 'PALMOLIVE', 'CURTIS']} />,
};

const MANY = ['Рив Гош', 'Вкуссвил', 'Эксмо', 'Ортека', 'Grass', 'Mixit', 'Splat', 'Polaris', 'Likato', 'Luxvisage', 'Leomax', 'Май', 'Sokolov', 'Feelz', 'Optima', 'Curtis', 'Lamoda', 'Palmolive', 'Defender', 'GSS', 'Morbeng', 'Cosmo'];
export const LogoBlock_: StoryObj = {
  name: 'LogoBlock (≤8 в ряд)',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 64, width: 1500 }}>
      {/* 12 логотипов → сбалансированно 6 + 6 */}
      <LogoBlock title="+250 компаний" caption="топ-уровня нам доверяют" width={1500} logos={MANY.slice(0, 12)} />
      {/* 22 логотипа → 8 + 7 + 7 */}
      <LogoBlock width={1500} logos={MANY} />
    </div>
  ),
};
