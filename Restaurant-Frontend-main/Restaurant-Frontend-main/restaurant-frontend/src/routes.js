import { exact } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const User = React.lazy(()=> import('./views/management/contratapp/user/User'))
const UserForm = React.lazy(()=> import('./views/management/contratapp/user/UserForm'))
const UserUpdateForm = React.lazy(()=> import('./views/management/contratapp/user/UserUpdateForm'))

const Worker = React.lazy(()=> import('./views/management/contratapp/worker/Worker'))
const WorkerForm = React.lazy(()=> import('./views/management/contratapp/worker/WorkerForm'))
const WorkerUpdateForm = React.lazy(()=> import('./views/management/contratapp/worker/WorkerUpdateForm'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/contratapp', name: 'Contratapp', exact: true},

  { path: '/contratapp/user', name: 'User', element: User},
  { path: '/contratapp/userform', name: 'UserForm', element: UserForm},
  { path: '/contratapp/userupdateform/:userId', name: 'UserUpdateForm', element: UserUpdateForm},

  ///*
  { path: '/contratapp/worker', name: 'Worker', element: Worker},
  { path: '/contratapp/workerform', name: 'WorkerForm', element: WorkerForm},
  { path: '/contratapp/workerupdateform/:workerId', name: 'WorkerUpdateForm', element: WorkerUpdateForm}
  //*/
]

export default routes
