import clsxm from '@/lib/clsxm'

import { Text } from '@/components/text'

import { Avatar, AvatarProps } from '.'

export enum AvatarSize {
  'sm',
  'md',
  'lg',
  'xl',
}

export type MultiAvatarProps = {
  size?: keyof typeof AvatarSize
  avatars: AvatarProps[]
  imgClassName?: string
  rootClassName?: string
  maxItems?: number
  addMoreControl?: boolean
}

export const MultiAvatar = ({
  size = 'md',
  imgClassName,
  rootClassName,
  maxItems = 3,
  avatars,
  addMoreControl = true,
}: MultiAvatarProps) => (
  <div className="relative flex items-center -space-x-3 overflow-hidden">
    {avatars.slice(0, maxItems).map(({ alt, src, name }: AvatarProps) => {
      return (
        <Avatar
          key={`${src}+${alt}`}
          alt={alt}
          src={src}
          name={name}
          size={size}
          imgClassName={clsxm('inline-block ring-2 ring-white', imgClassName)}
          rootClassName={clsxm('border-2 border-white', rootClassName)}
        />
      )
    })}
    {addMoreControl && avatars.length > maxItems && (
      <div
        data-testid="avatar-more"
        className={clsxm(
          'flex items-center justify-center',
          'bg-gray-500 text-white !text-xs',
          'rounded-full ring-2 ring-white',
          'w-7 h-7',
          '-space-x-3',
          [size === 'sm' && 'w-5 h-5'],
          [size === 'md' && 'w-7 h-7'],
          [size === 'lg' && 'w-10 h-10'],
          [size === 'xl' && 'w-16 h-16'],
          rootClassName
        )}
      >
        <Text className="font-bold text-white">
          +{avatars.length - maxItems}
        </Text>
      </div>
    )}
  </div>
)
