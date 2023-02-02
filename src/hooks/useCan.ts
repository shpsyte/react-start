import { useContext } from 'react'

import { AuthContext } from '@/contexts/auth/AuthContext'
import { validateUserPemissions } from '@/utils/validateUserPermissions'

type UseCanParams = {
  permissions?: string[]
  roles?: string[]
}

export function useCan({ permissions = [], roles = [] }: UseCanParams) {
  const { user, isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated || !user) {
    return false
  }

  const userHasValidPermissions = validateUserPemissions({
    user,
    permissions,
    roles,
  })

  return userHasValidPermissions
}
