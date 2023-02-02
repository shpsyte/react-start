import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { ButtonIcon } from '@/components/button-icon'

describe('Test the click', () => {
  it('calls onClick when clicked', () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <ButtonIcon onClick={onClick}>Click me</ButtonIcon>
    )
    fireEvent.click(getByText('Click me'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})

// solid outline ghost
describe('Test the button variant', () => {
  it('check the solid variant', () => {
    const screen = render(<ButtonIcon variant="solid">Click me</ButtonIcon>)
    const element = screen.getByText('Click me')

    expect(element).toHaveClass(
      'bg-solid-300 text-white border-none hover:bg-solid-400 active:bg-solid-500 disabled:bg-gray-200 disabled:text-gray-500'
    )
  })

  it('check the outline variant', () => {
    const screen = render(<ButtonIcon variant="outline">Click me</ButtonIcon>)
    const element = screen.getByText('Click me')

    expect(element).toHaveClass(
      'bg-white text-solid-300 border border-solid-300 hover:border-solid-400 hover:text-solid-400 active:bg-solid-400 active:text-white disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-300'
    )
  })

  it('check the ghost variant', () => {
    const screen = render(<ButtonIcon variant="ghost">Click me</ButtonIcon>)
    const element = screen.getByText('Click me')

    expect(element).toHaveClass(
      'text-solid-300',
      'shadow-none',
      'hover:text-solid-400',
      'active:text-solid-500',
      'disabled:text-gray-500'
    )
  })
})
