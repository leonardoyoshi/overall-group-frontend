import { routes as login } from '../app/login'
import { routes as group } from '../app/group'

const root = [
  {path: '/', redirect: '/group'}
]

export default [...root, ...login, ...group]
