import type { Meta, StoryObj } from '@storybook/react';
import { ContactItem, SocialRow } from './Contacts';
import { Stage } from './Stage';

const meta: Meta = {
  title: 'Компоненты/Контакты',
  decorators: [(Story) => <Stage width={760}>{Story()}</Stage>],
};
export default meta;
type S = StoryObj;

export const Контакты: S = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <ContactItem icon="🌐" label="Сайт:" value="jvo.ru" />
      <ContactItem icon="✉️" label="По общим вопросам:" value="hi@jvo.ru" />
      <ContactItem icon="📞" label="Звоните:" value="+7 499 322-09-33" />
    </div>
  ),
};

export const Соцсети: S = {
  render: () => (
    <SocialRow items={[{ icon: 'TG' }, { icon: 'VK' }, { icon: 'YT' }, { icon: 'IG' }]} />
  ),
};
