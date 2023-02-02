import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ButtonLink, ButtonVariant } from './ButtonLink'

const options = Object.keys(ButtonVariant).filter((x) => !(parseInt(x) >= 0))

export default {
  title: 'Components/Links/Button Link',
  component: ButtonLink,
  args: {
    children: 'Button Link',
    href: '/s',
  },
  argTypes: {
    variant: {
      options,
      control: {
        type: 'select',
      },
      defaultValue: 'solid',
    },
  },
} as ComponentMeta<typeof ButtonLink>

const Template: ComponentStory<typeof ButtonLink> = (args) => {
  return <ButtonLink {...args}>{args.children}</ButtonLink>
}

export const Default = Template.bind({})

export const Outline = Template.bind({})
Outline.args = {
  ...Template.args,
  variant: 'outline',
}
