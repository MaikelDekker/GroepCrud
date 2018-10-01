<template><div class="container">
  <h1>Crud lijstje</h1>
  <main id="app">
    <router-view></router-view>
  </main>
</div>
</template>

<script>
export var items = [
  {
    id: 1,
    name: "Item 1",
    description: "Dit is item 1"
  },
  {
    id: 2,
    name: "Item 2",
    description: "Dit is item 2"
  },
  {
    id: 3,
    name: "Item 3",
    description: "Dit is item 3"
  }
];

export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container
{
  width: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
}
</style>
