import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Heading, HeadingVariant } from './Heading'
const options = Object.keys(HeadingVariant).filter((v) => isNaN(Number(v)))

export default {
  title: 'Components/Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    variant: '2xl',
  },
  argTypes: {
    variant: {
      options,
      control: {
        type: 'select',
      },
      defaultValue: '2xl',
      description: 'The size of the text',
    },
    children: {
      control: {
        type: 'text',
      },
      description:
        'The text to display, you can pass `as` to display it as a child',
    },
    as: {
      control: {
        type: 'text',
      },
      description: 'pass `h1`, `h3`, `h4`, ... etc',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The default text is `h2`, you can change it to `h1`, `h3` ...  by passing it as `as`',
      },
    },
  },
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => {
  return <Heading {...args}>{args.children}</Heading>
}

export const Default = Template.bind({})
Default.args = {}

export const RenderH1 = Template.bind({})
RenderH1.args = {
  as: 'h1',
  children: 'Lorem upsum as H1',
}
RenderH1.argTypes = {
  as: {
    table: {
      disable: true,
    },
  },
  children: {
    table: {
      disable: true,
    },
  },
  variant: {
    options,
    control: {
      type: 'inline-radio',
    },
  },
}
RenderH1.parameters = {
  docs: {
    description: {
      story:
        'The default heading is h2, you can change it to `H1` by passing it as `a`',
    },
  },
}
