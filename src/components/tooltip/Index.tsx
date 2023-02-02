import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'

import clsxm from '@/lib/clsxm'

import { Text } from '../text/'

export enum SidesEnum {
  'top',
  'right',
  'bottom',
  'left',
}

type TooltipProps = {
  className?: string
  children?: ReactNode
  side?: keyof typeof SidesEnum
  content: string | undefined
} & ComponentProps<typeof Tooltip.Root>

export const ToolTip = ({ children, content, side = 'top' }: TooltipProps) => {
  return (
    <Tooltip.Provider delayDuration={100} skipDelayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger
          className={clsxm('cursor-default ', {
            'cursor-pointer': !!content,
          })}
        >
          {children}
        </Tooltip.Trigger>

        <Tooltip.Content
          side={side}
          className={clsxm(
            'rounded px-2 py-1 leading-short text-sm',
            'bg-dark-300 text-white',
            'animate-fade-in-down',

            [
              side === 'top' && 'animate-fade-in-down',
              side === 'right' && 'animate-fade-in-left',
              side === 'bottom' && 'animate-fade-in-up',
              side === 'left' && 'animate-fade-in-right',
            ]
          )}
        >
          {content && <Text className="text-white">{content}</Text>}
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

ToolTip.displayName = 'Tooltip'
