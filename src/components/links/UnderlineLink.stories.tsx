import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { UnderlineLink } from './UnderlineLink'

export default {
  title: 'Components/Links/Underline Link',
  component: UnderlineLink,
  args: {
    children: 'Underline Link',
    openNewTab: true,
    href: '/s',
  },
} as ComponentMeta<typeof UnderlineLink>

const Template: ComponentStory<typeof UnderlineLink> = (args) => {
  return <UnderlineLink {...args}>{args.children}</UnderlineLink>
}

export const Default = Template.bind({})
