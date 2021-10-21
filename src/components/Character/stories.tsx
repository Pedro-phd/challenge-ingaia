import { Story, Meta } from '@storybook/react/types-6-0'
import Character from '.'

export default {
  title: 'Character',
  component: Character
} as Meta

export const Default: Story = () => <Character />
