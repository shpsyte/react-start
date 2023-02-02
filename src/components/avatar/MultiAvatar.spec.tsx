import { faker } from '@faker-js/faker'
import { render } from '@testing-library/react'
import React from 'react'

import { MultiAvatar, MultiAvatarProps } from './Multiple'

const mockAvatar = () => ({
  src: faker.internet.url(),
  alt: faker.lorem.words(),
})

const mockAvatars = (length = 5) => {
  return Array.from({ length }, mockAvatar)
}

const createTestObj = ({
  avatars = mockAvatars(),
  ...props
}: Partial<MultiAvatarProps> = {}) =>
  render(<MultiAvatar avatars={avatars} {...props} />)

describe('MultiAvatar maxItems', () => {
  it('should render with default number of maxItems', () => {
    const { getAllByTestId } = createTestObj()
    const elements = getAllByTestId('avatar-root')

    expect(elements).toHaveLength(3)
  })
  it('should render avatars with max items if maxItems is less than avatars length', () => {
    const length = faker.datatype.number({
      min: 2,
      max: 10,
    })
    const avatars = mockAvatars(length)
    const maxItems = faker.datatype.number({
      min: 1,
      max: length - 1,
    })

    const { getAllByTestId } = createTestObj({ avatars, maxItems })
    const elements = getAllByTestId('avatar-root')

    expect(elements).toHaveLength(maxItems)
  })
  it('should render avatars with avatars length if maxItems is greather than avatars length', () => {
    const length = faker.datatype.number({
      min: 2,
      max: 10,
    })
    const avatars = mockAvatars(length)
    const maxItems = faker.datatype.number()

    const { getAllByTestId } = createTestObj({ avatars, maxItems })
    const elements = getAllByTestId('avatar-root')

    expect(elements).not.toHaveLength(maxItems)
    expect(elements).toHaveLength(avatars.length)
  })
  it('should not show the indication if maxItems is greather than avatars length', () => {
    const length = faker.datatype.number({
      min: 2,
      max: 10,
    })
    const avatars = mockAvatars(length)
    const maxItems = faker.datatype.number({
      min: length + 1,
    })

    const { queryByTestId } = createTestObj({ avatars, maxItems })
    const element = queryByTestId('avatar-more')

    expect(element).not.toBeInTheDocument()
  })
  it('should show the indication if maxItems is less than avatars length', () => {
    const length = faker.datatype.number({
      min: 2,
      max: 10,
    })
    const avatars = mockAvatars(length)
    const maxItems = faker.datatype.number({
      min: 1,
      max: length - 1,
    })

    const { getByTestId } = createTestObj({ avatars, maxItems })
    const element = getByTestId('avatar-more')

    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent(`+${length - maxItems}`)
  })
  it('should not render avatar if maxItems is 0, but should render the indication', () => {
    const avatars = mockAvatars(
      faker.datatype.number({
        min: 2,
        max: 10,
      })
    )

    const { queryByTestId, queryAllByTestId } = createTestObj({
      avatars,
      maxItems: 0,
    })
    const elements = queryAllByTestId('avatar-root')

    expect(elements).toHaveLength(0)
    expect(queryByTestId('avatar-more')).toBeInTheDocument()
  })
})

describe('MultiAvatar addMoreControl', () => {
  it('should not render the addMoreControl if addMoreControl is false', () => {
    const { queryByTestId } = createTestObj({ addMoreControl: false })
    const element = queryByTestId('avatar-more')

    expect(element).not.toBeInTheDocument()
  })
  it('should render the addMoreControl if addMoreControl is true', () => {
    const { getByTestId } = createTestObj({ addMoreControl: true })
    const element = getByTestId('avatar-more')

    expect(element).toBeInTheDocument()
  })
  it('should render the addMoreControl if addMoreControl is not passed', () => {
    const { getByTestId } = createTestObj()
    const element = getByTestId('avatar-more')

    expect(element).toBeInTheDocument()
  })
})

describe('MultiAvatar more size', () => {
  it('should render with size sm', () => {
    const { getByTestId } = createTestObj({ size: 'sm' })
    const element = getByTestId('avatar-more')

    expect(element).toHaveClass('w-5 h-5')
  })
  it('should render with size md', () => {
    const { getByTestId } = createTestObj({ size: 'md' })
    const element = getByTestId('avatar-more')

    expect(element).toHaveClass('w-7 h-7')
  })
  it('should render with size lg', () => {
    const { getByTestId } = createTestObj({ size: 'lg' })
    const element = getByTestId('avatar-more')

    expect(element).toHaveClass('w-10 h-10')
  })
  it('should render with size xl', () => {
    const { getByTestId } = createTestObj({ size: 'xl' })
    const element = getByTestId('avatar-more')

    expect(element).toHaveClass('w-16 h-16')
  })
})
