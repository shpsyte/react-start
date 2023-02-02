import { PlusIcon } from '@heroicons/react/24/outline'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ButtonIcon, ButtonVariant } from './'

const options = Object.keys(ButtonVariant).filter((x) => isNaN(Number(x)))

export default {
  title: 'Components/Buttons/Button-Icon',
  component: ButtonIcon,
  args: {
    children: <PlusIcon className="h-40 w-h-40 " />,
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
    children: {
      table: {
        disable: true,
      },
    },

    disabled: {
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
} as ComponentMeta<typeof ButtonIcon>

const Template: ComponentStory<typeof ButtonIcon> = (args) => {
  return <ButtonIcon {...args}>{args.children}</ButtonIcon>
}

export const Default = Template.bind({})

export const Outline = Template.bind({})
Outline.args = {
  children: <PlusIcon className="h-40 w-h-40 " />,
  variant: 'outline',
}

export const Ghost = Template.bind({})
Ghost.args = {
  children: <PlusIcon className="h-40 w-h-40 " />,
  variant: 'ghost',
}

export const Danger = Template.bind({})
Danger.args = {
  children: <PlusIcon className="h-40 w-h-40 " />,
  variant: 'solid',
  color: 'red',
}
