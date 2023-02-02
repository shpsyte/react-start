import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { AvatarSize } from '.'
import { MultiAvatar } from './Multiple'
import profile from './profile.jpeg'

const options = Object.keys(AvatarSize).filter((x) => isNaN(Number(x)))

const avatars = [
  {
    src: String(profile),
    alt: 'Colm Tuite',
    name: 'CT',
  },
  {
    src: String(profile),
    alt: 'Colm Tuite',
    name: 'CT',
  },
  {
    src: String(profile),
    alt: 'Colm Tuite',
    name: 'CT',
  },
  {
    src: String(profile),
    alt: 'Colm Tuite',
    name: 'CT',
  },
  {
    src: String(profile),
    alt: 'Colm Tuite',
    name: 'CT',
  },
]

export default {
  title: 'Components/Avatar/Multiple',
  component: MultiAvatar,
  args: {
    avatars,
  },
  argTypes: {
    avatars: {
      control: {
        disable: true,
      },
      description: 'Array of avatars',
    },
    size: {
      control: {
        type: 'select',
        options,
      },
      defaultValue: 'md',
    },
    maxItems: {
      control: {
        type: 'number',
      },
      defaultValue: 3,
      description: 'Max number of avatars to show',
    },
    addMoreControl: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
      description: 'Show the +x control',
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
} as ComponentMeta<typeof MultiAvatar>

const Template: ComponentStory<typeof MultiAvatar> = (args) => {
  return <MultiAvatar {...args} />
}

export const Default = Template.bind({})
export const Squared = Template.bind({})
Squared.args = {
  rootClassName: 'rounded-none',
}
Squared.parameters = {
  docs: {
    description: {
      story:
        'You can customize the border radius just passing it on rootClassName that will update the classname on radiix',
    },
  },
}

export const HalfSquared = Template.bind({})
HalfSquared.args = {
  rootClassName: 'rounded-l-none rounded-r-full',
  addMoreControl: false,
}
