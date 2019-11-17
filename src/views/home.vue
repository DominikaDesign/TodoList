<template>
  <div class="todo__container">
    <listheader header="Home task list" />
    <todo storageKey="home" />
  </div>
</template>
<script>
import listheader from "@/components/listheader.vue";
import todo from "@/components/todo.vue";

export default {
  name: "home",
  components: {
    listheader,
    todo
  }
};
</script>
<style lang="scss">
.todo__container {
  justify-content: center;
  width: 80%;
  margin: 5% 10%;
}
</style>
