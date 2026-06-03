import type { Meta, StoryObj } from '@storybook/react';
import { StatCallout } from './cards';
import { Backdrop, Row } from './_preview';

const meta: Meta<typeof StatCallout> = {
  title: 'Слайдкит/Карточки/StatCallout',
  component: StatCallout,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Стат-callout: пилюля со значением + жирная подпись + описание. Блок результатов («что получают клиенты за 90 дней», Enterprise s11).' } } },
  argTypes: {
    value: { control: 'text' }, valueBg: { control: 'text', description: 'Фон пилюли' }, valueColor: { control: 'color' },
    label: { control: 'text' }, desc: { control: 'text' }, width: { control: 'number' },
  },
};
export default meta;
type S = StoryObj<typeof StatCallout>;

export const Playground: S = { args: { value: '+18%', label: 'к выручке за 90 дней', desc: 'За счёт устранения OOS на топ-SKU и разгона неликвида' } };
export const Варианты: S = {
  render: () => (
    <Row>
      <StatCallout width={500} value="−32%" label="ДРР в среднем" desc="Агент рекламы прекращает жечь бюджет на неэффективных кампаниях" />
      <StatCallout width={500} value="<1 мин" valueBg="linear-gradient(90deg,#FF8FDA,#FFCFEF)" valueColor="#410031" label="скорость реакции" desc="От обнаружения проблемы до корректирующего действия" />
    </Row>
  ),
};
