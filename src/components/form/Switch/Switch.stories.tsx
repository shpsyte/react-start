import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Switch } from './'

export default {
  title: 'Components/Forms/Switch',
  component: Switch.Switcher,
  args: {
    checked: false,
    children: 'display text',
  },
} as ComponentMeta<typeof Switch.Switcher>

const Template: ComponentStory<typeof Switch.Switcher> = (args) => {
  return (
    <Switch.Root>
      <Switch.Switcher {...args} />
      <Switch.Label>{args.children}</Switch.Label>
    </Switch.Root>
  )
}

export const Default = Template.bind({})
export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

const TemplateLeft: ComponentStory<typeof Switch.Switcher> = (args) => {
  return (
    <Switch.Root>
      <Switch.Label>{args.children}</Switch.Label>
      <Switch.Switcher {...args} />
    </Switch.Root>
  )
}
export const LeftText = TemplateLeft.bind({})
