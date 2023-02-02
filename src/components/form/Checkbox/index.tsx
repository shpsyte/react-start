import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import React, { forwardRef, Ref } from 'react'

import clsxm from '@/lib/clsxm'

type CheckBoxProps = {
  error?: boolean
  ref: Ref<HTMLButtonElement>
  children?: React.ReactNode
  className?: string
} & CheckboxPrimitive.CheckboxProps

type CheckBoxRootProps = {
  children: React.ReactNode
}
const CheckBoxRoot = ({ children }: CheckBoxRootProps) => {
  return <div className="flex items-center gap-2">{children}</div>
}
CheckBoxRoot.displayName = 'CheckBox.Root'

const CheckBoxBox = forwardRef<HTMLButtonElement, CheckBoxProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <>
        <CheckboxPrimitive.Root
          className={clsxm(
            'w-6 h-6 p=[2px] bg-blue-300 rounded flex items-center justify-center',
            'disabled:bg-gray-300 disabled:cursor-not-allowed',
            className
          )}
          {...rest}
          // checked={checked}
          ref={ref}
        >
          <CheckboxPrimitive.Indicator asChild>
            {children}
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      </>
    )
  }
)
CheckBoxBox.displayName = 'CheckBox.Box'

type CheckBoxIconProps = {
  children: React.ReactNode
}
const CheckBoxIcon = ({ children }: CheckBoxIconProps) => {
  return (
    <CheckboxPrimitive.Indicator asChild>
      {children}
    </CheckboxPrimitive.Indicator>
  )
}
CheckBoxIcon.displayName = 'CheckBox.Icon'

export const CheckBox = {
  Root: CheckBoxRoot,
  CheckBox: CheckBoxBox,
  Icon: CheckBoxIcon,
}
