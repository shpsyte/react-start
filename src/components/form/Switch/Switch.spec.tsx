import { fireEvent, render } from '@testing-library/react'

import { Switch } from '@/components/form/Switch'

describe('Testing switch component', () => {
  it('should be rendered on document', () => {
    const { getByText } = render(
      <Switch.Root>
        <Switch.Switcher />
        <Switch.Label>label</Switch.Label>
      </Switch.Root>
    )

    const element = getByText('label')

    expect(element).toBeInTheDocument()
  })

  it('should toggle', () => {
    const { getByTitle } = render(
      <Switch.Root>
        <Switch.Switcher title="test-switch" />
        <Switch.Label>label</Switch.Label>
      </Switch.Root>
    )

    const element = getByTitle('test-switch')

    fireEvent.click(element)

    expect(element).toBeChecked()

    fireEvent.click(element)

    expect(element).not.toBeChecked()
  })
})
