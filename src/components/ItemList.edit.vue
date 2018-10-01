<template id="item-edit">
  <div>
  <h2>Edit item</h2>
  <form v-on:submit="updateItem">
    <div>
      <label for="edit-name">Name</label>
      <input id="edit-name" v-model="item.name" required/>
    </div>
    <div>
      <label for="edit-description">Description</label>
      <textarea id="edit-description" rows="3" v-model="item.description"></textarea>
    </div>
    <button type="submit">Save</button>
    <a><router-link to="/">Cancel</router-link></a>
  </form>
  </div>
</template>

<script>
import { items } from "@/App.vue";

function findItem(itemId) {
  return items[findItemKey(itemId)];
}

function findItemKey(itemId) {
  for (var key = 0; key < items.length; key++) {
    if (items[key].id == itemId) {
      return key;
    }
  }
}

export default {
  data: function() {
    return { item: findItem(this.$route.params.item_id) };
  },
  methods: {
    updateItem: function() {
      let item = this.item;
      items[findItemKey(item.id)] = {
        id: item.id,
        name: item.name,
        description: item.description
      };
      this.$router.push("/");
    }
  }
};
</script>