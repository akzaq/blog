import Login from '@/views/Login'
import Register from '@/views/Register'
import Profile from '@/views/Profile'

const userRoutes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/profile',
    component: Profile,
  },
]

export default userRoutes
