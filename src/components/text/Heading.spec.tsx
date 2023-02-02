import { render } from '@testing-library/react'
import React from 'react'

import { Heading } from '@/components/text/Heading'
// test if the link render correctly
describe('Render the default h2', () => {
  it('render as default', () => {
    const screen = render(<Heading>Heading</Heading>)

    // get the span element
    const element = screen.getByText('Heading')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toBe('H2')
    expect(element.tagName).not.toBe('H1')
  })

  it('render as strong', () => {
    const screen = render(<Heading as="h1">Heading</Heading>)

    // get the span element
    const element = screen.getByText('Heading')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toBe('H1')
  })
})
