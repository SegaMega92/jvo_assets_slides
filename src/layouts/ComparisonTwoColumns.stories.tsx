import type { Meta, StoryObj } from '@storybook/react';
import { ComparisonTwoColumns } from './ComparisonTwoColumns';
import { colors } from '../tokens';

const meta: Meta<typeof ComparisonTwoColumns> = {
  title: 'Лейауты/3 · ComparisonTwoColumns',
  component: ComparisonTwoColumns,
  argTypes: {
    theme: { control: 'select', options: ['light', 'eggplant', 'pinkPastel'] },
  },
};
export default meta;
type S = StoryObj<typeof ComparisonTwoColumns>;

export const РаньшеСейчас: S = {
  args: {
    title: 'Рынок изменился',
    lead: 'Маркетплейсы больше не прощают недоработки в карточках',
    left: {
      heading: 'Раньше',
      body: 'Кто больше продаёт, тот первый в выдаче. Высокая комиссия. Дешёвый трафик.',
      bg: colors.bg.softGray,
    },
    right: {
      heading: 'Сейчас',
      body: '100+ факторов ранжирования. Выдача персонализирована. Дорогой трафик.',
      bg: colors.brand.pinkLight,
    },
  },
};

export const МыИВы: S = {
  args: {
    title: 'Объединяйте силы с нами!',
    lead: 'Оставляйте команде только эффективные действия',
    left: {
      heading: 'Что будет делать платформа Дживио',
      body: '24/7 анализировать показатели · искать утечки · формулировать задачи',
    },
    right: {
      heading: 'Что будет на вашей команде',
      body: 'Вовремя выполнять задания · принимать стратегические решения',
    },
  },
};
