import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './StatCard';
import { Stage } from './Stage';
import { colors } from '../tokens';

const meta: Meta<typeof StatCard> = {
  title: 'Компоненты/StatCard',
  component: StatCard,
  decorators: [(Story) => <Stage width={520}>{Story()}</Stage>],
};
export default meta;
type S = StoryObj<typeof StatCard>;

export const Playground: S = {
  args: {
    value: '150+',
    label: 'ниш',
    description: 'Успешный опыт ведения 150+ ниш на маркетплейсах',
  },
};

export const Сетка: S = {
  decorators: [(Story) => <Stage>{Story()}</Stage>],
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
      <StatCard value="150+" label="ниш" description="Успешный опыт ведения 150+ ниш" />
      <StatCard value="40+" label="специалистов" description="С опытом развития продаж во всех категориях" accent={colors.accent.purple} />
      <StatCard value="5 млн" label="SKU" description="Изучено и проанализировано экспертами" accent={colors.accent.limeDark} bg={colors.accent.limePale} />
      <StatCard value="100%" label="команды" description="Каждый сотрудник сертифицирован" />
      <StatCard value="ТОП-10" label="рейтинг" description="В списке лучших сертифицированных агентств" accent={colors.accent.purple} />
      <StatCard value="WB" label="партнёр" description="Официальная аккредитация" accent={colors.accent.limeDark} bg={colors.accent.limePale} />
    </div>
  ),
};
