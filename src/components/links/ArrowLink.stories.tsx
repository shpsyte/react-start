import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ArrowLink } from './ArrowLink'

export default {
  title: 'Components/Links/Arrow Link',
  component: ArrowLink,
  args: {
    children: 'Arrow Link',
    href: '/s',
    direction: 'right',
  },
  argTypes: {
    href: {
      control: {
        type: 'text',
      },
    },
    direction: {
      control: {
        type: 'select',
        options: ['right', 'left'],
      },
    },
  },
} as ComponentMeta<typeof ArrowLink>

const Template: ComponentStory<typeof ArrowLink> = (args) => {
  return <ArrowLink {...args}>{args.children}</ArrowLink>
}

export const Default = Template.bind({})

export const LeftArrow = Template.bind({})
LeftArrow.args = {
  ...Template.args,
  direction: 'left',
}
