import React, { ComponentPropsWithRef, forwardRef, ReactNode } from 'react'

import clsxm from '@/lib/clsxm'

type InputProps = {
  prefix?: string
  icon?: ReactNode
  error?: boolean
  containerClassName?: string
  className?: string
} & ComponentPropsWithRef<'input'>

type InputRootProps = {
  error?: boolean
  containerClassName?: string
  disabled?: boolean
  children: ReactNode
}

const InputRoot = ({
  children,
  disabled,
  error,
  containerClassName,
}: InputRootProps) => {
  return (
    <div
      className={clsxm(
        'flex items-center bg-white rounded-lg px-3 py-3 gap-2',
        'border border-gray-400',
        'text-dark-400',
        'focus-within:ring focus-within:border-blue-300',
        'focus-within:ring-blue-200',
        'group-[disabled]:bg-gray-100',
        [disabled && ['bg-gray-100']],
        [
          error && [
            'border-red-200 focus-within:border-red-200 focus-within:ring-red-200',
          ],
        ],
        containerClassName
      )}
    >
      {children}
    </div>
  )
}

const InputInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, ...rest }, ref) => {
    return (
      <input
        {...rest}
        ref={ref}
        disabled={disabled}
        className={clsxm(
          'group text-sm font-normal bg-transparent',
          'border-none w-full ',
          'outline-none',
          'placeholder:text-dark-100',
          [
            disabled && [
              'bg-gray-100 group:bg-gray-100: placeholder:text-gray-500',
            ],
          ],
          className
        )}
      />
    )
  }
)

const InputIcon = ({ children }: { children: ReactNode }) => {
  return <div className="text-gray-400">{children}</div>
}

const InputPrefix = ({ children }: { children: ReactNode }) => {
  return <div className="leading-short text-sm text-gray-400">{children}</div>
}

InputRoot.displayName = 'Input.Root'
InputInput.displayName = 'Input.Input'
InputIcon.displayName = 'Input.Icon'
InputPrefix.displayName = 'Input.Prefix'

export const Input = {
  Root: InputRoot,
  Input: InputInput,
  Icon: InputIcon,
  Prefix: InputPrefix,
}
