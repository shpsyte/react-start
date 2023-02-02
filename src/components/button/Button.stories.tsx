import { CommandLineIcon } from '@heroicons/react/24/outline'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Button, ButtonSize, ButtonVariant } from './index'

const options = Object.keys(ButtonVariant).filter((x) => isNaN(Number(x)))
const sizes = Object.keys(ButtonSize).filter((x) => isNaN(Number(x)))

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  args: {
    children: 'Button Default',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      options,
      control: {
        type: 'select',
      },
      defaultValue: 'solid',
    },
    size: {
      options: sizes,
      control: {
        type: 'select',
      },
      defaultValue: 'md',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Button has a color-scheme, it means the color of the button is determined by passing it as className',
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>{args.children}</Button>
}

export const Default = Template.bind({})

export const Outline = Template.bind({})
Outline.args = {
  size: 'md',
  children: 'Button Outline',
  variant: 'outline',
}

export const Ghost = Template.bind({})
Ghost.args = {
  size: 'md',
  children: 'Ghost Button',
  variant: 'ghost',
}

export const Rounded = Template.bind({})
Rounded.args = {
  size: 'md',
  children: 'Rounded Button',
  className: 'rounded-full',
}
Rounded.parameters = {
  docs: {
    description: {
      story:
        'Rounded is not a property, it is className `rounded-full`, check the tawilwindcss to see how it works',
    },
  },
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  size: 'md',
  children: (
    <>
      With Icon
      <CommandLineIcon className="w-5 h-5" />
    </>
  ),
}
export const Danger = Template.bind({})
Danger.args = {
  size: 'md',
  children: 'Button Danger',
  variant: 'solid',
  className: 'red',
}

export const Warning = Template.bind({})
Warning.args = {
  size: 'md',
  children: 'Button Danger',
  variant: 'solid',
  className: 'yellow',
}

export const GhostAndDanger = Template.bind({})
GhostAndDanger.args = {
  size: 'md',
  children: 'Button Danger',
  variant: 'ghost',
  className: 'red',
}
