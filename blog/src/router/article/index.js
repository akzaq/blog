import Children from './children'
import Article from '@/views/Article'

const articleRoute = {
  path: '/article',
  name: 'Article',
  component: Article,
  children: Children,
}

export default articleRoute
