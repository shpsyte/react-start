import { CheckBadgeIcon, CheckIcon } from '@heroicons/react/20/solid'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Text } from '@/components/text'

import { CheckBox } from './index'

export default {
  title: 'Components/Forms/CheckBox',
  component: CheckBox.CheckBox,
  parameters: {
    docs: {
      description: {
        component:
          'It uses compositions, so you can customize the Icon, The side of the Text and the color.',
      },
    },
  },
} as ComponentMeta<typeof CheckBox.CheckBox>

const Template: ComponentStory<typeof CheckBox.CheckBox> = (args) => {
  return (
    <CheckBox.Root>
      <Text as="label" className="cursor-pointer flex gap-2">
        <CheckBox.CheckBox {...args}>
          <CheckIcon className="h-5 w-5 text-white" />
        </CheckBox.CheckBox>
        Check me
      </Text>
    </CheckBox.Root>
  )
}

export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

const WithIconTemplate: ComponentStory<typeof CheckBox.CheckBox> = (args) => {
  return (
    <CheckBox.Root>
      <Text as="label" className="cursor-pointer flex gap-2">
        <CheckBox.CheckBox {...args} className="rounded-full bg-orange-500">
          <CheckBadgeIcon className="h-5 w-5 text-white" />
        </CheckBox.CheckBox>
        Check me
      </Text>
    </CheckBox.Root>
  )
}

export const WithIconAndCustomBG = WithIconTemplate.bind({})
