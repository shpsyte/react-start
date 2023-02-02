import * as React from 'react'

import clsxm from '@/lib/clsxm'

import {
  UnstyledLink,
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink'

export enum ButtonVariant {
  'solid',
  'outline',
  'ghost',
}

type ButtonLinkProps = {
  variant?: keyof typeof ButtonVariant
} & UnstyledLinkProps

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ children, className, variant = 'solid', ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'inline-flex items-center justify-center rounded p-3 gap-2',
          'font-normal',
          'outline-none',
          // ring focus
          'focus:outline-none focus:ring focus:ring-solid-300',
          'shadow-sm',
          'transition-colors ease-in-out duration-100',
          'rounded-lg',
          // #region  //*=========== Variants ===========
          [
            variant === 'solid' && [
              'bg-solid-300 text-white',
              'border-none',
              'hover:bg-solid-400',
              'active:bg-solid-500',
              'disabled:bg-gray-200 disabled:text-gray-500 ',
            ],
            variant === 'outline' && [
              'bg-white',
              'text-solid-300',
              'border border-solid-300',
              'hover:border-solid-400 hover:text-solid-400',
              'active:bg-solid-400 active:text-white',
              'disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-300',
            ],
            variant === 'ghost' && [
              'text-solid-300',
              'shadow-none',
              'hover:text-solid-400',
              'active:text-solid-500',
              'disabled:text-gray-500',
            ],
          ],
          // #endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          className
        )}
      >
        {children}
      </UnstyledLink>
    )
  }
)

ButtonLink.displayName = 'ButtonLink'
