import { faker } from '@faker-js/faker'
import { render } from '@testing-library/react'
import React from 'react'

import { Avatar, AvatarProps } from '.'

const createTestObj = ({
  src = faker.internet.url(),
  alt = faker.lorem.words(),
  ...props
}: Partial<AvatarProps> = {}) =>
  render(<Avatar src={src} alt={alt} {...props} />)

describe('Avatar rendering', () => {
  it('should render by default', () => {
    const { container } = createTestObj()

    expect(container).toBeInTheDocument()
  })
})

describe('Avatar size', () => {
  it('should render with size sm', () => {
    const { getByTestId } = createTestObj({ size: 'sm' })
    const element = getByTestId('avatar-root')

    expect(element).toHaveClass('w-6 h-6')
  })
  it('should render with size md', () => {
    const { getByTestId } = createTestObj({ size: 'md' })
    const element = getByTestId('avatar-root')

    expect(element).toHaveClass('w-8 h-8')
  })
  it('should render with size lg', () => {
    const { getByTestId } = createTestObj({ size: 'lg' })
    const element = getByTestId('avatar-root')

    expect(element).toHaveClass('w-12 h-12')
  })
  it('should render with size xl', () => {
    const { getByTestId } = createTestObj({ size: 'xl' })
    const element = getByTestId('avatar-root')

    expect(element).toHaveClass('w-16 h-16')
  })
})
