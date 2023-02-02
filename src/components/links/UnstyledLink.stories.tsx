import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { UnstyledLink } from './UnstyledLink'

export default {
  title: 'Components/Links/Unstyled Link',
  component: UnstyledLink,
  args: {
    children: 'Unstyled Link',
    openNewTab: false,
    href: '',
  },
} as ComponentMeta<typeof UnstyledLink>

const Template: ComponentStory<typeof UnstyledLink> = (args) => {
  return <UnstyledLink {...args}>{args.children}</UnstyledLink>
}

export const Default = Template.bind({})
