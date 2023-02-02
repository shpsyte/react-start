import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { Button } from '@/components/button'

describe('Test the click', () => {
  it('calls onClick when clicked', () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>)
    fireEvent.click(getByText('Click me'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})

describe('Test the button sate', () => {
  it('check is loading state', () => {
    const screen = render(<Button isLoading>Click me</Button>)
    const element = screen.getByText('Click me')

    expect(element).toHaveClass('gap-2 disabled:cursor-wait')
    expect(element).toHaveAttribute('disabled')
  })
})

// sm md lg
describe('Test the button size', () => {
  it('check the small size', () => {
    const screen = render(<Button size="sm">Click me</Button>)
    const element = screen.getByText('Click me')

    expect(element).toHaveClass('text-sm min-w-[113px]')
  })

  it('check the medium size', () => {
    const screen = render(<Button size="md">Click me</Button>)
    const element = screen.getByText('Click me')

    expect(element).toHaveClass('text-md min-w-[148px]')
  })

  it('check the large size', () => {
    const screen = render(<Button size="lg">Click me</Button>)
    const element = screen.getByText('Click me')

    expect(element).toHaveClass('text-lg px-5 py-6 min-w-[210px]')
  })
})

// solid outline ghost
describe('Test the button variant', () => {
  it('check the solid variant', () => {
    const screen = render(<Button variant="solid">Click me</Button>)
    const element = screen.getByText('Click me')

    expect(element).toHaveClass(
      'bg-solid-300 text-white border-none hover:bg-solid-400 active:bg-solid-500 disabled:bg-gray-200 disabled:text-gray-500'
    )
  })

  it('check the outline variant', () => {
    const screen = render(<Button variant="outline">Click me</Button>)
    const element = screen.getByText('Click me')

    expect(element).toHaveClass(
      'bg-white text-solid-300 border border-solid-300 hover:border-solid-400 hover:text-solid-400 active:bg-solid-400 active:text-white disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-300'
    )
  })

  it('check the ghost variant', () => {
    const screen = render(<Button variant="ghost">Click me</Button>)
    const element = screen.getByText('Click me')

    expect(element).toHaveClass(
      'text-solid-300 shadow-none hover:text-solid-400 active:text-solid-500 disabled:text-gray-500'
    )
  })
})
