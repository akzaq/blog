import ArticleList from '@/views/ArticleList'
import CreateArticle from '@/views/CreateArticle'
import EditArticle from '@/views/EditArticle'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Profile from '@/views/Profile'

const articleRoutes = [
  {
    path: '/',
    redirect: '/articles',
  },
  {
    path: '/articles',
    component: ArticleList,
  },
  {
    path: '/create',
    component: CreateArticle,
  },
  {
    path: '/edit/:id',
    component: EditArticle,
  },
]

export default articleRoutes
