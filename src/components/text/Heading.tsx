import { ComponentProps, ElementType, ReactNode } from 'react'

import clsxm from '@/lib/clsxm'

export enum HeadingVariant {
  'md',
  'lg',
  'xl',
  '2xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
}

type HeadingProps<Custom extends ElementType> = {
  variant?: keyof typeof HeadingVariant
  children: ReactNode
  as?: Custom
  className?: string
} & ComponentProps<Custom>

export function Heading<Custom extends ElementType>({
  variant = '2xl',
  children,
  as,
  className,
  ...rest
}: HeadingProps<Custom>) {
  const Component = as || 'h2'
  return (
    <>
      <Component
        {...rest}
        className={clsxm(
          'text-dark-100 font-sans text-sm leading-shorter',
          {
            'text-md': variant === 'md',
            'text-lg': variant === 'lg',
            'text-xl': variant === 'xl',
            'text-2xl': variant === '2xl',
            'text-4xl': variant === '4xl',
            'text-5xl': variant === '5xl',
            'text-6xl': variant === '6xl',
            'text-7xl': variant === '7xl',
            'text-8xl': variant === '8xl',
            'text-9xl': variant === '9xl',
          },
          className
        )}
      >
        {children}
      </Component>
    </>
  )
}
