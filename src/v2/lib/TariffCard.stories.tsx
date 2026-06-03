import type { Meta, StoryObj } from '@storybook/react';
import { TariffCard } from './cards';
import { Backdrop, Row } from './_preview';

const meta: Meta<typeof TariffCard> = {
  title: 'Слайдкит/Карточки/TariffCard',
  component: TariffCard,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Карточка тарифа: заголовок, чипы (API/пользователи), список параметров «название → значение», итоговая строка, цена за день и бонус-плашка. Пакеты «Стандарт»/«Премиум» (КП s25–26).' } } },
  argTypes: {
    title: { control: 'text' }, chips: { control: 'object' }, rows: { control: 'object' },
    total: { control: 'text' }, perDay: { control: 'text' }, bonus: { control: 'text' }, width: { control: 'number' },
  },
};
export default meta;
type S = StoryObj<typeof TariffCard>;

export const Playground: S = {
  args: {
    title: '«Стандарт»', chips: ['1 API', '1 Пользователь'],
    rows: [{ label: 'Подписка на 6 месяцев', value: '1 099 900 ₽' }, { label: 'SEO PRO, 100 SKU', value: 'вкл' }, { label: 'Внедрение', value: 'вкл' }, { label: 'Тех. поддержка', value: 'вкл' }],
    total: 'Итого: 1 099 900 ₽ / 6 мес.', perDay: 'Всего 6 110 ₽ / день', bonus: '25% на баланс Агента в виде бонусов',
  },
};
export const Пара: S = {
  render: () => (
    <Row>
      <TariffCard width={500} title="«Стандарт»" chips={['1 API', '1 Пользователь']}
        rows={[{ label: 'Подписка на 6 месяцев', value: '1 099 900 ₽' }, { label: 'Внедрение', value: 'вкл' }, { label: 'Тех. поддержка', value: 'вкл' }]}
        total="Итого: 1 099 900 ₽ / 6 мес." perDay="Всего 6 110 ₽ / день" />
      <TariffCard width={500} title="«Премиум»" chips={['3 API', '5 Пользователей']}
        rows={[{ label: 'Подписка на 12 месяцев', value: '1 899 900 ₽' }, { label: 'Персональный менеджер', value: 'вкл' }, { label: 'Ozon', value: 'вкл' }]}
        total="Итого: 1 899 900 ₽ / 12 мес." perDay="Всего 5 277 ₽ / день" bonus="50% на баланс Агента в виде бонусов" />
    </Row>
  ),
};
