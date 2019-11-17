<template>
  <div class="todo__container">
    <listheader header="Work task list" />
    <todo storageKey="work" />
  </div>
</template>
<script>
import listheader from "@/components/listheader.vue";
import todo from "@/components/todo.vue";

export default {
  name: "work",
  components: {
    listheader,
    todo
  }
};

//Styling in "task.vue" file.
</script>
