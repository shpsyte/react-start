import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Avatar, AvatarSize } from '.'
import profile from './profile.jpeg'

const options = Object.keys(AvatarSize).filter((x) => isNaN(Number(x)))

export default {
  title: 'Components/Avatar/Single',
  component: Avatar,
  args: {
    src: String(profile),
    alt: 'Colm Tuite',
    name: 'CT',
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The Fallback will render after 600ms when the img is not available, it uses the name to render as camelCase getting the first and last letter',
      },
    },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args} />
}

export const Default = Template.bind({})
export const Squared = Template.bind({})
Squared.args = {
  rootClassName: 'rounded-none',
}
