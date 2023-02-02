import { create } from '@storybook/theming'

const config = {
  brandTitle: 'Design System',
  brandUrl: 'https://localhost:3000',
  brandImage: 'https://avatars.githubusercontent.com/u/3891610?v=4',
  brandTarget: '_self',
}

export default create({
  base: 'dark',
  appBorderColor: 'grey',
  appBorderRadius: 4,
  textColor: 'white',
  ...config,
})
