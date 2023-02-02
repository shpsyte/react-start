import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Text, TextVariant } from './'

const options = Object.keys(TextVariant).filter((v) => isNaN(Number(v)))

export default {
  title: 'Components/Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    variant: 'md',
  },
  argTypes: {
    variant: {
      options,
      control: {
        type: 'select',
      },
      defaultValue: 'md',
      description: 'The size of the text',
    },
    children: {
      control: {
        type: 'text',
      },
      description: 'The text to display',
    },
    as: {
      control: {
        type: 'text',
      },
      description: 'pass `p`, `strong`, `em`, `span`, `div`... etc',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The default text is span, you can change it to `p`, `strong` ...  by passing it as `as`',
      },
    },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => {
  return <Text {...args}>{args.children}</Text>
}

export const Default = Template.bind({})
Default.args = {}

export const RenderParagraph = Template.bind({})
RenderParagraph.args = {
  as: 'p',
  variant: 'md',
  children: 'Lorem upsum as Paragraph',
}
RenderParagraph.argTypes = {
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

RenderParagraph.parameters = {
  docs: {
    description: {
      story:
        'The default text is span, you can change it to `p`, `strong` ...  by passing it as `as`',
    },
  },
}

export const RenderStrong = Template.bind({})
RenderStrong.args = {
  as: 'strong',
  variant: 'xl',
  children: 'Lorem upsum as strong',
}
RenderStrong.argTypes = {
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
RenderStrong.parameters = {
  docs: {
    description: {
      story:
        'The default text is span, you can change it to `p`, `strong` ...  by passing it as `as`',
    },
  },
}
