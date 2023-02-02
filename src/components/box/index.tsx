import { ComponentProps, forwardRef, ReactNode } from 'react'

import clsxm from '@/lib/clsxm'

type BoxProps = {
  isActive?: boolean
  className?: string
  children?: ReactNode
} & ComponentProps<'div'>

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ isActive = false, className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        {...rest}
        className={clsxm(
          'flex flex-col items-start justify-between',
          'text-sm font-normal leading-5 text-dark-200',
          'border-2 border-gray-400 rounded',
          'px-3 py-3',
          'bg-gray-100',
          'active:border-blue-300 active:ring-2active:ring-blue-300',

          {
            'border-blue-300 active:ring-blue-300': isActive,
          },
          className
        )}
      >
        {children}
      </div>
    )
  }
)
Box.displayName = 'Box'
