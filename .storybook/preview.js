import '../src/styles/globals.css'
import * as NextImage from 'next/image'

import { themes } from '@storybook/theming'
const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  docs: {
    theme: themes.light,
  },
  options: {
    storySort: {
      order: [
        'Pages',
        ['Home'],
        'Tokens',
        [
          'Colors',
          'Space',
          'Font Family',
          'Font Size',
          'Font Weight',
          'Line Height',
          'Screen',
          'Icon',
        ],
        'Components',
        [
          'Forms',
          'Buttons',
          'Links',
          'Avatar',
          'Icon-Button',
          'Text',
          'Heading',
        ],
      ],
    },
  },
}
