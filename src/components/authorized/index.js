import { useContext } from 'react'
import AuthContext from '../authentication/context'

import rules from '../../constants/authorization-rules'

const check = (role, action, data) => {
  const permissions = rules[role]
  if (!permissions) {
    // role is not present in the rules
    return false
  }

  const staticPermissions = permissions.static

  if (staticPermissions && staticPermissions.includes(action)) {
    // static rule not provided for action
    return true
  }

  const dynamicPermissions = permissions.dynamic

  if (dynamicPermissions) {
    const permissionCondition = dynamicPermissions[action]
    if (!permissionCondition) {
      // dynamic rule not provided for action
      return false
    }

    return permissionCondition(data)
  }
  return false
}

const noop = () => null
const Authorized = ({ perform, data, yes = noop, no = noop }) => {
  const authUser = useContext(AuthContext)
  const role = authUser ? 'admin' : 'visitor'

  return check(role, perform, data) ? yes() : no()
}

export default Authorized
