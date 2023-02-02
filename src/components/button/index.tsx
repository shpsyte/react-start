import { ArrowPathIcon } from '@heroicons/react/20/solid'
import { ComponentPropsWithRef, forwardRef, ReactNode } from 'react'

import clsxm from '@/lib/clsxm'

export enum ButtonVariant {
  'solid',
  'outline',
  'ghost',
}

export enum ButtonSize {
  'sm',
  'md',
  'lg',
}

type ButtonProps = {
  isLoading?: boolean
  variant?: keyof typeof ButtonVariant
  size?: keyof typeof ButtonSize
  children: ReactNode
} & ComponentPropsWithRef<'button'>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'solid',
      size = 'md',
      color,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled

    const btnClasses = clsxm(
      'flex items-center justify-center rounded p-3 gap-2',
      'font-normal',
      'outline-none',
      // ring focus
      'focus:outline-none focus:ring focus:ring-solid-300',
      'shadow-sm',
      'transition-colors ease-in-out duration-100',
      'rounded-lg',
      // #region  //*=========== Variants ===========
      [
        size === 'sm' && ['text-sm min-w-[113px]'],
        size === 'md' && ['text-md min-w-[148px]'],
        size === 'lg' && ['text-lg px-5 py-6 min-w-[210px]'],
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
      isLoading && 'gap-2 disabled:cursor-wait',
      className,
      color
    )

    return (
      <button ref={ref} disabled={disabled} className={btnClasses} {...rest}>
        {isLoading && (
          <div className={clsxm('text-solid-500')}>
            <ArrowPathIcon
              className={clsxm('animate-spin h-5 w-5', {
                'h-6 w-6': size === 'md',
                'h-7 w-7': size === 'lg',
              })}
            />
          </div>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
