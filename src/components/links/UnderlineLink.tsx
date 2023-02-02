import * as React from 'react'

import clsxm from '@/lib/clsxm'

import {
  UnstyledLink,
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink'

export const UnderlineLink = React.forwardRef<
  HTMLAnchorElement,
  UnstyledLinkProps
>(({ children, className, ...rest }, ref) => {
  return (
    <UnstyledLink
      ref={ref}
      {...rest}
      className={clsxm(
        'animated-underline custom-link inline-flex items-center font-medium',
        'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-offset-2',
        'border-b border-dotted border-blue-300 hover:border-blue/0',
        className
      )}
    >
      {children}
    </UnstyledLink>
  )
})

UnderlineLink.displayName = 'UnderlineLink'
