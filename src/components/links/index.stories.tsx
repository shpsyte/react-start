import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { PrimaryLink } from './'

export default {
  title: 'Components/Links/Primary Link',
  component: PrimaryLink,
  args: {
    children: 'Primary Link',
    openNewTab: true,
    href: '/s',
  },
} as ComponentMeta<typeof PrimaryLink>

const Template: ComponentStory<typeof PrimaryLink> = (args) => {
  return <PrimaryLink {...args}>{args.children}</PrimaryLink>
}

export const Default = Template.bind({})
