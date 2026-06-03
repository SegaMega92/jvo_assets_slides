import type { Meta, StoryObj } from '@storybook/react';
import { NumberedCard } from './NumberedCard';
import { Stage } from './Stage';
import { colors } from '../tokens';

const meta: Meta<typeof NumberedCard> = {
  title: 'Компоненты/NumberedCard',
  component: NumberedCard,
  decorators: [(Story) => <Stage width={460}>{Story()}</Stage>],
};
export default meta;
type S = StoryObj<typeof NumberedCard>;

export const Playground: S = {
  args: {
    number: '1',
    heading: 'Отсутствие выделенной команды',
    body: 'Успех в ecom зависит от слаженной команды профильных специалистов',
  },
};

export const Ряд: S = {
  decorators: [(Story) => <Stage>{Story()}</Stage>],
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
      <NumberedCard number="1" heading="Отсутствие выделенной команды" body="Успех в ecom зависит от слаженной команды" />
      <NumberedCard number="2" heading="Непонимание алгоритмов" body="Наши специалисты знают метрики и правила площадок" accent={colors.accent.purple} />
      <NumberedCard number="3" heading="Недостаток компетенций" body="Вашим продвижением будут заниматься эксперты" accent={colors.accent.limeDark} bg={colors.accent.limePale} />
      <NumberedCard number="4" heading="Ошибки в ecom-стратегии" body="ECOM — один из ключевых каналов продаж" accent={colors.brand.pink} bg={colors.brand.pinkLight} />
    </div>
  ),
};
