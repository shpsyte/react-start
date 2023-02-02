import { ComponentProps, ElementType, ReactNode } from 'react'

import clsxm from '@/lib/clsxm'

export enum TextVariant {
  'xxs',
  'xs',
  'sm',
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

type TextProps<Custom extends ElementType> = {
  variant?: keyof typeof TextVariant
  children: ReactNode
  className?: string
  as?: Custom
} & ComponentProps<Custom>

export function Text<Custom extends ElementType>({
  variant = 'md',
  children,
  className,
  as,
  ...rest
}: TextProps<Custom>) {
  const Component = as || 'span'
  return (
    <>
      <Component
        {...rest}
        className={clsxm(
          'text-dark-100 font-sans text-sm leading-base',
          {
            'text-xxs': variant === 'xxs',
            'text-xs': variant === 'xs',
            'text-sm': variant === 'sm',
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
