import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Create from '@/components/Create'
import Update from '@/components/Update'
import List from '@/components/List'
import Delete from '@/components/Delete'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Delete/:id',
      name: 'Delete',
      component: Delete
    },
    {
      path: '/Update/:id',
      name: 'Update',
      component: Update
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create
    },
  ]
})
