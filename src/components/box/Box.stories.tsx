import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Box } from './'
import { Text } from '../text/'

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    isActive: false,
    children: <Text>This is an exemple of boxing</Text>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Box>

const Template: ComponentStory<typeof Box> = (args) => {
  return <Box {...args}>{args.children}</Box>
}

export const Default = Template.bind({})
export const Active = Template.bind({})
Active.args = {
  isActive: true,
}
export const ColoredBackground = Template.bind({})
ColoredBackground.args = {
  className: 'bg-blue-300',
  children: <Text className="text-white">This is an exemple of boxing</Text>,
}
