<template>
  <div class="container">
    <div class="arrowBack">
      <router-link to="/">
        <i class="fas fa-chevron-left"></i>
      </router-link>
    </div>

    <h1>{{ header }}</h1>
  </div>
</template>
<script>
export default {
  name: "listheader",
  props: {
    header: String
  }
};
</script>

<style lang="scss">
.container {
  background-image: linear-gradient(#3eacab, #547ab2);
  border-radius: 30px 30px 0px 0px;
  font-size: 15px;
  position: relative;
  color: #eee;
  height: 54px;

  & > .arrowBack {
    font-size: 1.3em;
    top: 35%;
    left: 3%;
    position: absolute;

    & > a {
      color: #eee;
    }
  }
  & h1 {
    margin: 0;
    padding: 10px;
  }
}
</style>
