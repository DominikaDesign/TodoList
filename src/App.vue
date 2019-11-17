<template>
  <div id="app">
    <router-view />

    <div class="gitHub">
      <span>
        <a target="_blank" href="https://github.com/DominikaDesign/TodoList">
          <i class="fab fa-github fa-fw gitHub__logo"></i>
        </a>
      </span>
    </div>

    <div class="info">
      <p>Create your own "Todo list" by adding a title and task content.</p>
    </div>
  </div>
</template>

<script>
import mainpage from "@/views/mainpage.vue";
import home from "@/views/home.vue";
import work from "@/views/work.vue";

export default {
  name: "app",
  views: {
    mainpage,
    home,
    work
  }
};
</script>

<style lang="scss">
$lightblue: #547ab280;
$darkblue: #547ab2;

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-image: url("../public/img/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
  margin: 0px;
  padding: 0px;
}
.gitHub {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 28px;
  height: 28px;
  z-index: 1;

  &__logo {
    font-size: 28px;
    color: $lightblue;
    cursor: pointer;
  }
  &__logo:hover {
    color: $darkblue;
  }
}
.info p {
  color: #33333360;
  font-weight: bold;
}
</style>
