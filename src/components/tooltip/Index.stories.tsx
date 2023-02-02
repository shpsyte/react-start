import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Text } from '@/components/text'

import { SidesEnum, ToolTip } from './Index'

const options = Object.keys(SidesEnum).filter((x) => isNaN(Number(x)))

export default {
  title: 'Components/Tooltip',
  component: ToolTip,
  args: {
    children: <Text>This is an exemple of boxing</Text>,
    content: 'This is a ToolTip',
  },
  argTypes: {
    side: {
      control: {
        type: 'select',
        options,
      },
      defaultValue: 'top',
    },
    children: {
      table: {
        disable: true,
      },
    },
    content: {
      control: {
        type: 'text',
      },
      description: 'String: The content of the tooltip',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'The children can be any component, the content is a string',
      },
    },
  },
} as ComponentMeta<typeof ToolTip>

const Template: ComponentStory<typeof ToolTip> = (args) => {
  return <ToolTip {...args}>{args.children}</ToolTip>
}

export const Default = Template.bind({})
