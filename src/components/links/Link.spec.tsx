import { render } from '@testing-library/react'
import React from 'react'

import { PrimaryLink } from '@/components/links/'
// test if the link render correctly
describe('PrimaryLink Render', () => {
  it('render as default', () => {
    const screen = render(
      <PrimaryLink href="/test">link as default</PrimaryLink>
    )

    const element = screen.getByText('link as default')
    // expect to be rendered
    expect(element).toBeInTheDocument()
  })
})

// check href attribute
describe('PrimaryLink href', () => {
  it('check href attribute', () => {
    const screen = render(<PrimaryLink href="#">link as default</PrimaryLink>)

    const element = screen.getByText('link as default')
    // expect to be rendered
    expect(element).toHaveAttribute('href', '#')
  })

  it('check openNewTab attribute', () => {
    const screen = render(
      <PrimaryLink openNewTab href="/test">
        link as default
      </PrimaryLink>
    )

    const element = screen.getByText('link as default')
    // expect to be rendered
    expect(element).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
