import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/ItemList.index'
import Item from '@/components/ItemList.show'
import AddItem from '@/components/ItemList.create'
import ItemEdit from '@/components/ItemList.edit'
import ItemDelete from '@/components/ItemList.delete'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: List },
    { path: '/item/:item_id', component: Item, name: 'item' },
    { path: '/add-item', component: AddItem },
    { path: '/item/:item_id/edit', component: ItemEdit, name: 'item-edit' },
    { path: '/item/:item_id/delete', component: ItemDelete, name: 'item-delete' }
  ]
})
