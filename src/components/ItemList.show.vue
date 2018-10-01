<template id="item">
<div>
  <h2>{{ item.name }}</h2>
  <b>Description: </b>
  <div>{{ item.description }}</div>
  <br/>
  <a><router-link to="/">Back to item list</router-link></a>
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
  }
};
</script>