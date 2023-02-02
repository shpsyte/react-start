import * as SwitchPrimitive from '@radix-ui/react-switch'
import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  Ref,
} from 'react'

import clsxm from '@/lib/clsxm'

export type SwitchProps = {
  error?: boolean
  ref: Ref<HTMLButtonElement>
} & SwitchPrimitive.SwitchProps

const Switcher = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, ...rest }, ref) => {
    return (
      <SwitchPrimitive.Root
        className={clsxm(
          'group',
          'relative h-[14px] w-[34px]',
          'rounded-full',
          'transition-colors duration-300 ease-in-out',
          rest.checked ? 'bg-blue-300/40' : 'bg-gray-300',
          className
        )}
        {...rest}
        ref={ref}
      >
        <SwitchPrimitive.Thumb
          className={clsxm(
            'block absolute -translate-y-1/2 h-[20px] w-[20px] rounded-full bg-blue-300',
            'transition-colors duration-300 ease-in-out',
            'transition-transform duration-200 ease-in-out will-change-transform',
            [
              rest.checked
                ? 'translate-x-3/4'
                : ['-translate-x-0 bg-white shadow-md border border-gray-300'],
            ]
          )}
        />
      </SwitchPrimitive.Root>
    )
  }
)

Switcher.displayName = 'Switch.Switcher'

export type SwitchGroupProps = {
  children: ReactNode
  ref: ForwardedRef<HTMLButtonElement>
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const SwitchRoot = forwardRef<HTMLDivElement, SwitchGroupProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        className={clsxm('flex items-center gap-2', className)}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

SwitchRoot.displayName = 'Switch.Root'

type SwitchLabelProps = {
  children: ReactNode
  ref: Ref<HTMLSpanElement>
} & DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

const SwitchLabel = forwardRef<HTMLSpanElement, SwitchLabelProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <span
        className={clsxm('text-dark-200 text-sm', className)}
        {...rest}
        ref={ref}
      >
        {children}
      </span>
    )
  }
)

SwitchLabel.displayName = 'Switch.Label'

export const Switch = {
  Root: SwitchRoot,
  Switcher,
  Label: SwitchLabel,
}
