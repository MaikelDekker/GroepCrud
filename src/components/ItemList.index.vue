<template id="item-list"><div>
  <table class="table">
    <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in items">
      <td>
        <a><router-link :to="{name: 'item', params: {item_id: item.id}}">{{ item.name }}</router-link></a>
      </td>
      <td>{{ item.description }}</td>
      <td>
	    <a><router-link :to="{name: 'item-edit', params: {item_id: item.id}}">Edit</router-link></a>
        <a><router-link :to="{name: 'item-delete', params: {item_id: item.id}}">Delete</router-link></a>
      </td>
    </tr>
    </tbody>
  </table>
      <router-link :to="{path: '/add-item'}">
        Add item
      </router-link>
</div></template>

<script>
import { items } from "@/App.vue";

export default {
  data: function() {
    return { items: items };
  }
};
</script>