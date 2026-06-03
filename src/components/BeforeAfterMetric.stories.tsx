import type { Meta, StoryObj } from '@storybook/react';
import { BeforeAfterMetric } from './BeforeAfterMetric';
import { Stage } from './Stage';

const meta: Meta<typeof BeforeAfterMetric> = {
  title: 'Компоненты/BeforeAfterMetric',
  component: BeforeAfterMetric,
  decorators: [(Story) => <Stage bg="pink" width={420}>{Story()}</Stage>],
};
export default meta;
type S = StoryObj<typeof BeforeAfterMetric>;

export const Playground: S = {
  args: {
    label: 'Выручка',
    before: '2,8 млн ₽',
    after: '4,5 млн ₽',
    delta: '+ 60%',
    positive: true,
  },
};

export const НаборКейса: S = {
  decorators: [(Story) => <Stage bg="pink">{Story()}</Stage>],
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
      <BeforeAfterMetric label="Выручка" before="2,8 млн ₽" after="4,5 млн ₽" delta="+ 60%" positive />
      <BeforeAfterMetric label="CTR" before="0,7%" after="1,9%" delta="+ 1,2%" positive />
      <BeforeAfterMetric label="ДДР" before="35%" after="18%" delta="− 17%" positive={false} />
      <BeforeAfterMetric label="Средний чек" delta="+ 22%" positive />
    </div>
  ),
};
