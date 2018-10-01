<template>
<div>
<h1>Weet u zeker dat u {{ item.name }} wilt verwijderen?</h1>
  <form v-on:submit="deleteItem">
    <button type="submit">Delete</button>
    <button><router-link to="/">Cancel</router-link></button>
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
    deleteItem: function() {
      items.splice(findItemKey(this.item.id), 1);
      this.$router.push("/");
    }
  }
};
</script>