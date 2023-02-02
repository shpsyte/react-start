import { render } from '@testing-library/react'
import React from 'react'

import { Text } from '@/components/text'
// test if the link render correctly
describe('Render the default text', () => {
  it('render as default', () => {
    const screen = render(<Text>text</Text>)

    // get the span element
    const element = screen.getByText('text')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toBe('SPAN')
    expect(element.tagName).not.toBe('H1')
  })

  it('render as strong', () => {
    const screen = render(<Text as="strong">text</Text>)

    // get the span element
    const element = screen.getByText('text')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toBe('STRONG')
  })
})
