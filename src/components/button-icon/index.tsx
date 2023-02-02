import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react'

import clsxm from '@/lib/clsxm'

export enum ButtonVariant {
  'solid',
  'outline',
  'ghost',
}

type IconButtonProps = {
  variant?: keyof typeof ButtonVariant
  children: ReactNode
} & ComponentPropsWithRef<'button'>

export const ButtonIcon = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      variant = 'primary',
      color,
      ...rest
    },
    ref
  ) => {
    const disabled = buttonDisabled

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={clsxm(
          'flex items-center justify-center rounded p-1 font-medium',
          'font-normal',
          // ring focus
          'focus:outline-none focus:ring focus:ring-solid-300',
          'shadow-sm',
          'transition-colors ease-in-out duration-100',
          'rounded-full',
          'w-10 h-10',
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
          className,
          color
        )}
        {...rest}
      >
        {children}
      </button>
    )
  }
)

ButtonIcon.displayName = 'ButtonIcon'
