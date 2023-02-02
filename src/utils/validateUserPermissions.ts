type User = {
  roles: string[]
  permissions: string[]
}

type ValidateUserPermissionsParms = {
  user: User | Partial<User>
  permissions: string[]
  roles: string[]
}

export function validateUserPemissions({
  user,
  permissions,
  roles,
}: ValidateUserPermissionsParms) {
  // admin can do anything ??
  if (roles?.includes('admin')) {
    return true
  }

  if (permissions?.length > 0) {
    const hasAllPermissions = permissions.every((permission) => {
      return user.permissions?.includes(permission)
    })

    if (!hasAllPermissions) {
      return false
    }
  }

  if (roles?.length > 0) {
    const hasAllRoles = roles.some((role) => {
      return user.roles?.includes(role)
    })

    if (!hasAllRoles) {
      return false
    }
  }

  return true
}
