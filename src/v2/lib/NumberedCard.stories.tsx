import type { Meta, StoryObj } from '@storybook/react';
import { NumberedCard } from './cards';
import { Backdrop, Row } from './_preview';

const meta: Meta<typeof NumberedCard> = {
  title: 'Слайдкит/Карточки/NumberedCard',
  component: NumberedCard,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Нумерованная карточка-шаг: бейдж-номер + заголовок + разделитель + описание. «Путь пользователя» (КП s11), «Ключевые проблемы» (Студия s3).' } } },
  argTypes: { number: { control: 'text' }, title: { control: 'text' }, desc: { control: 'text' }, width: { control: 'number' } },
};
export default meta;
type S = StoryObj<typeof NumberedCard>;

export const Playground: S = { args: { number: 1, title: 'Покупатель должен найти товар на МП', desc: 'Формируем конкретные задачи, чтобы ваши карточки на 100% соответствовали алгоритмам' } };
export const Шаги: S = {
  render: () => (
    <Row>
      <NumberedCard width={360} number={1} title="Отсутствие выделенной команды" desc="Успех в ecom зависит от комплексной работы со всеми аспектами" />
      <NumberedCard width={360} number={2} title="Непонимание алгоритмов и метрик" desc="Наши специалисты изучили >5 000 000 SKU в 150+ нишах" />
    </Row>
  ),
};
