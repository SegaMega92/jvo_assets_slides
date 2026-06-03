import type { Meta, StoryObj } from '@storybook/react';
import { PriceList } from './tables';
import { Surface } from './primitives';
import { Backdrop, Row } from './_preview';

const meta: Meta<typeof PriceList> = {
  title: 'Слайдкит/Таблицы/PriceList',
  component: PriceList,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Прайс-лист «услуга … цена» с разделителями. Колонки тарификации Pay-as-you-go (КП s28–31). Есть приглушённый вариант для «дополнительных» позиций.' } } },
  argTypes: { rows: { control: 'object' }, muted: { control: 'boolean' }, labelColor: { control: 'color' }, width: { control: 'number' } },
};
export default meta;
type S = StoryObj<typeof PriceList>;

export const Playground: S = {
  args: { rows: [
    { label: 'Ценообразование от Дживио AI', value: '1 ₽' },
    { label: 'Ответы на отзыв с Дживио AI', value: '2 ₽' },
    { label: 'Инсайты по продукту AI', value: '100 ₽' },
    { label: 'Ответы по шаблону', value: '2 ₽' },
  ] },
};
export const ОсновнойИДоп: StoryObj = {
  name: 'Основной + приглушённый',
  render: () => (
    <Surface background="#FFFFFF" border="1px solid #E7DEF2" radius={24} padding={44} width={1300}>
      <Row gap={60}>
        <PriceList width={360} labelColor="#34034C" rows={[{ label: 'Ценообразование от AI', value: '1 ₽' }, { label: 'Ответы на отзыв с AI', value: '2 ₽' }, { label: 'Инсайты по продукту', value: '100 ₽' }]} />
        <PriceList width={360} muted rows={[{ label: '+ Кросс-продажи в ответах', value: '3 ₽' }, { label: '+ Определение тональности', value: '3 ₽' }, { label: '+ Анализ переходов', value: '3 ₽' }]} />
      </Row>
    </Surface>
  ),
};
