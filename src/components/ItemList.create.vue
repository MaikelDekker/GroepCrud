<template id="add-item">
  <div>
  <h2>Add new item</h2>
  <form v-on:submit="createItem">
    <div>
      <label for="add-name">Name</label>
      <input id="add-name" v-model="item.name" required/>
    </div>
    <div>
      <label for="add-description">Description</label>
      <textarea id="add-description" rows="10" v-model="item.description"></textarea>
    </div>
    <button type="submit">Create</button>
    <a><router-link to="/">Cancel</router-link></a>
  </form>
  </div>
</template>

<script>
import { items } from "@/App.vue";
export default {
  data: function() {
    return {
      item: { name: "", description: "" }
    };
  },
  methods: {
    createItem: function() {
      let item = this.item;
      items.push({
        id: Math.random()
          .toString()
          .split(".")[1],
        name: item.name,
        description: item.description
      });
      this.$router.push("/");
    }
  }
};
</script>