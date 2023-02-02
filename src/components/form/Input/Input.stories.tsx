import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Text } from '@/components/text'

import { Input } from './index'

export default {
  title: 'Components/Forms/Input',
  component: Input.Input,
  args: {
    // prefix: 'prefix/',
    placeholder: 'Placeholder',
  },
  argTypes: {
    error: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  // decorators: [
  //   (Story) => (
  //     <div className="flex flex-col gap-1 ">
  //       <Text as="label">
  //         Email address
  //         {Story()}
  //       </Text>
  //     </div>
  //   ),
  // ],
} as ComponentMeta<typeof Input.Input>

const Template: ComponentStory<typeof Input.Input> = (args) => {
  return (
    <Input.Root>
      <Input.Input {...args} />
    </Input.Root>
  )
}

export const Default = Template.bind({})
export const Disabled: ComponentStory<typeof Input.Input> = (args) => {
  return (
    <Input.Root disabled>
      <Input.Input {...args} disabled />
    </Input.Root>
  )
}

export const WithPrefix: ComponentStory<typeof Input.Input> = (args) => {
  return (
    <Input.Root>
      <Input.Prefix>Name:</Input.Prefix>
      <Input.Input {...args} placeholder="" />
    </Input.Root>
  )
}

export const WithIcon: ComponentStory<typeof Input.Input> = (args) => {
  return (
    <Input.Root>
      <Input.Icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </Input.Icon>
      <Input.Input {...args} placeholder="username" />
    </Input.Root>
  )
}

export const WithLabel: ComponentStory<typeof Input.Input> = (args) => {
  return (
    <div className="flex flex-col gap-1 ">
      <Text as="label">
        Email
        <Input.Root>
          <Input.Input {...args} placeholder="Email" />
        </Input.Root>
      </Text>
    </div>
  )
}

export const WithPasswordType = Template.bind({})
WithPasswordType.args = {
  placeholder: 'Type your password',
  type: 'password',
}

export const ComplexOne: ComponentStory<typeof Input.Input> = (args) => {
  return (
    <div className="flex flex-col gap-1 ">
      <Text as="label">
        Url:
        <Input.Root>
          <Input.Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
              />
            </svg>
          </Input.Icon>
          <Input.Prefix>https://</Input.Prefix>
          <Input.Input {...args} placeholder="url" type="url" />
          <Input.Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </Input.Icon>
        </Input.Root>
      </Text>
    </div>
  )
}
