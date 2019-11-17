<template>
  <div class="categories">
    <router-link to="/home">
      <div class="categories__label">
        <div class="hover-bg"></div>
        <div class="categories__label__header">
          <p>Home</p>
        </div>
        <div class="arrowNext">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </router-link>

    <router-link to="/work">
      <div class="categories__label">
        <div class="hover-bg"></div>
        <div class="categories__label__header">
          <p>Work</p>
        </div>
        <div class="arrowNext">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "categories"
};
</script>
<style lang="scss" scooped>
.categories {
  padding: 10px;
  background: #eee;
  border-radius: 0px 0px 30px 30px;
  font-size: 24px;

  &__label {
    margin: 10px;
    position: relative;
    color: #547ab2;
    height: 54px;
    border-radius: 50px;
    vertical-align: middle;
    border: 1px solid #ccc;
    overflow: hidden;

    &__header {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 90%;
      display: inline-block;
      text-align: left;

      & > p {
        margin: 13px 0;
        font-size: 1em;
      }
    }

    & > .arrowNext {
      margin: 0;
      padding: 0;
      font-size: 0.9em;
      position: absolute;
      display: inline-block;
      width: 10%;
      top: 25%;
      right: 0%;
    }
  }
}

.hover-bg {
  position: absolute;
  height: 100%;
  width: 0;
  background-color: #5a505010;
  transition: width 0.5s;
}
.categories__label:hover .hover-bg {
  width: 100%;
}
</style>
