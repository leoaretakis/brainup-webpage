import React from 'react'

// import * as ROLES from '../../constants/authorization-rules'
// import { withAuthorization } from '../../components/session'

const AdminPage = () => (
  <div>
    <h1>Admin</h1>
    <p>Restricted area! Only users with the admin role are authorized.</p>
  </div>
)

// const condition = authUser => authUser && authUser.roles.includes(ROLES.ADMIN)

export default AdminPage
