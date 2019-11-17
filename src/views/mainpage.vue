<template>
  <div class="mainpage">
    <menuheader header="Categories" />
    <categories />
  </div>
</template>
<script>
import menuheader from "@/components/menuheader.vue";
import categories from "@/components/categories.vue";

export default {
  name: "mainpage",
  components: {
    menuheader,
    categories
  }
};
</script>
<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
}
.mainpage {
  justify-content: center;
  width: 80%;
  margin: 5% 10%;
}
</style>
