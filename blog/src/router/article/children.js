import List from '@/views/Article/List'
import Create from '@/views/Article/Create'
import Edit from '@/views/Article/Edit'

const articleChildren = [
  {
    path: 'create',
    name: 'Create',
    component: Create,
  },
  {
    path: 'list',
    name: 'List',
    component: List,
  },
  {
    path: 'edit/:id',
    name: 'Edit',
    component: Edit,
  },
]

export default articleChildren
