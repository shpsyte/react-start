import * as AvatarPrimitive from '@radix-ui/react-avatar'
import React from 'react'

import clsxm from '@/lib/clsxm'
import getInitials from '@/lib/initials'

import { Text } from '@/components/text'
import { ToolTip } from '@/components/tooltip/Index'
export enum AvatarSize {
  'sm',
  'md',
  'lg',
  'xl',
}

export type AvatarProps = {
  size?: keyof typeof AvatarSize
  src: string
  alt: string
  name?: string
  imgClassName?: string
  rootClassName?: string
} & React.ComponentProps<typeof AvatarPrimitive.AvatarImage>

export const Avatar = ({
  size = 'md',
  src,
  alt,
  imgClassName,
  rootClassName,
  name,
}: AvatarProps) => (
  <ToolTip content={name}>
    <AvatarPrimitive.Root
      data-testid="avatar-root"
      className={clsxm(
        'flex items-center justify-center overflow-hidden select-none',
        'bg-white',
        'rounded-full',
        'w-8 h-8',
        [size === 'sm' && 'w-6 h-6'],
        [size === 'md' && 'w-8 h-8'],
        [size === 'lg' && 'w-12 h-12'],
        [size === 'xl' && 'w-16 h-16'],
        rootClassName
      )}
    >
      <AvatarPrimitive.Image
        className={clsxm('w-full h-full object-cover', imgClassName)}
        src={src}
        alt={alt}
      />
      {!!name && (
        <AvatarPrimitive.Fallback delayMs={600}>
          <Text>{getInitials(name)}</Text>
        </AvatarPrimitive.Fallback>
      )}
    </AvatarPrimitive.Root>
  </ToolTip>
)
