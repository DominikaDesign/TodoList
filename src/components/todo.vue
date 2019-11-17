<template>
  <div class="list">
    <div class="list__control">
      <input type="text" v-model="title" placeholder="Write in the task title" />

      <input type="text" v-model="task" placeholder="Write in the task" />

      <button class="addBtn" @click="!title ? (alertAppear = true) : addItem()">ADD</button>
    </div>

    <div class="list__todo">
      <div
        class="item"
        v-for="(item, index) in items"
        :key="index"
        :class="{ checked: item.completed }"
      >
        <div class="item__box">
          <div class="item__box__checkbox">
            <label class="checkbox-label">
              <input
                type="checkbox"
                @change="
                  item.completed = !item.completed;
                  saveItems();
                "
                :checked="item.completed"
              />
              <span class="checkbox-custom rectangular"></span>
            </label>
          </div>

          <div class="item__box__title" @click="item.show = !item.show">
            <p>{{ item.name }}</p>
          </div>

          <div class="item__box__task" v-if="item.show">
            <p>{{ item.task }}</p>
            <div class="newTask" v-if="item.editingTheTaskApear">
              <input type="text" v-model="item.task" />
              <i
                class="fas fa-check acceptTask"
                @click="(item.editingTheTaskApear = false), saveItems()"
                title="Press to save the task."
              ></i>
            </div>
            <i
              class="far fa-edit editTask"
              @click="item.editingTheTaskApear = true"
              title="Press to edit the task."
            ></i>
          </div>
          <div class="item__box__del">
            <i class="fas fa-ban delBtn" @click="deleteItem(index)"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="alert" v-if="alertAppear">
      <div class="img">
        <div class="img-cross">X</div>
        <div class="img-circle circle1"></div>
        <div class="img-circle circle2"></div>
        <div class="img-circle circle3"></div>
        <div class="img-circle circle4"></div>
        <div class="img-circle circle5"></div>
        <div class="img-circle circle6"></div>
      </div>
      <h1>Error!</h1>
      <p>You must write at least a title.</p>
      <button @click="alertAppear = false">
        <span>Ok</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "todo",
  data() {
    return {
      items: [],
      title: "",
      task: "",
      alertAppear: false
    };
  },
  props: {
    storageKey: {
      type: String,
      default: ""
    }
  },
  methods: {
    deleteItem(index) {
      this.items.splice(index, 1);

      this.saveItems();
    },

    addItem() {
      this.items.push({
        name: this.title,
        task: this.task,
        completed: false,
        show: false,
        editingTheTaskApear: false
      });

      this.saveItems();
      this.title = "";
      this.task = "";
    },
    saveItems() {
      localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    }
  },
  mounted() {
    let savedItems = JSON.parse(localStorage.getItem(this.storageKey));
    if (savedItems) this.items = savedItems;
  }
};
</script>
<style lang="scss">
$lightblue: #547ab280;
$darkblue: #547ab2;

input {
  background-color: transparent;
  color: $darkblue;
  border: none;
  border-bottom: 2px $darkblue solid;
  font-size: 15px;
  padding: 10px 0;
}
.list {
  /* list control */
  &__control {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background: #eee;

    & input {
      margin: 5px;
      width: 90%;
      padding: 10px;
      outline: none;
    }
  }
  &__todo {
    padding: 20px;
    background: #eee;
    border-radius: 0px 0px 30px 30px;
  }
}
button {
  background: none;
  color: $darkblue;
  border: 2px solid $darkblue;
  border-radius: 5px;
  margin: 5px;
  width: 100px;
  height: 30px;
  cursor: pointer;

  &:hover {
    background-color: #cfcfcf70;
  }
}
.checked {
  text-decoration: line-through;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 63px;
  position: relative;
  color: #383838;

  &__box {
    min-height: 30px;
    width: 94%;
    margin: 10px auto;
    border: 2px solid $darkblue;
    text-align: center;
    justify-content: center;
    position: relative;

    &__title > p {
      width: 80%;
      margin: 10px auto;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
    }
    /* todo task */
    &__task {
      & > p {
        width: 90%;
        margin: 20px auto;
      }
      & > .newTask {
        width: 100%;
        & > input {
          width: 70%;
          margin: 20px 5%;
        }
        & > .acceptTask {
          color: $lightblue;
          cursor: pointer;

          &:hover {
            color: $darkblue;
          }
        }
      }

      & > .editTask {
        font-size: 20px;
        margin: 7px;
        float: right;
        color: #38383855;
        cursor: pointer;

        &:hover {
          color: #38383880;
        }
      }
    }

    &__checkbox {
      position: absolute;
      top: 15%;
      left: 0;
      margin-left: -15px;
    }
    &__del {
      position: absolute;
      top: 15%;
      right: 0;
      margin-right: -15px;
    }
  }
} /* delete button */
.delBtn {
  color: $lightblue;
  font-size: 28px;
  cursor: pointer;
  background-color: #eee;
  border-radius: 28px;
} /* checkbox */
.checkbox-label {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  line-height: 24px;
  height: 24px;
  width: 24px;
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ .checkbox-custom {
      background-color: $darkblue;
      border-radius: 5px;
      opacity: 1;
      border: 2px solid $darkblue;
      border-radius: 50%;
      transform: rotate(0deg) scale(1);
    }

    &:checked ~ .checkbox-custom::after {
      transform: rotate(45deg) scale(1);
      opacity: 1;
      left: 8px;
      top: 3px;
      width: 6px;
      height: 12px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      background-color: transparent;
      border-radius: 0;
    }

    &:checked ~ .checkbox-custom::before {
      left: -3px;
      top: -3px;
      width: 24px;
      height: 24px;
      border-radius: 5px;
      border-radius: 50%;
      opacity: 0;
      z-index: 1;
      transform: scale(3);
      transition: all 0.3s ease-out;
    }
  }
  & > .checkbox-custom {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 24px;
    width: 24px;
    background-color: #eee;
    border-radius: 5px;
    border: 2px solid $darkblue;
    border-radius: 50%;
    transition: all 0.3s ease-out;

    &::after {
      position: absolute;
      content: "";
      left: 12px;
      top: 12px;
      height: 0px;
      width: 0px;
      border-radius: 5px;
      border: solid #fff;
      border-width: 0 3px 3px 0;
      opacity: 1;
      transition: all 0.3s ease-out;
      transform: rotate(0deg) scale(0);
    }
    &::before {
      position: absolute;
      content: "";
      left: 10px;
      top: 10px;
      border-radius: 5px;
      border: 2px solid $darkblue;
      transform: scale(0);
      width: 0px;
      height: 0px;
    }
  }
}
.alert {
  position: absolute;
  width: 240px;
  height: 250px;
  top: 10%;
  right: 0;
  left: 0;
  margin: auto;
  border-radius: 30px;
  background: #fff;
  color: #979797;
  font-size: 15px;
  z-index: 10;
  overflow: hidden;
  box-shadow: 0px 0px 20px 2px #000000bf;

  & h1 {
    margin: 10px;
  }
  & p {
    margin: 5px;
  }
  & button {
    margin: 25px;
  }
}
.img {
  margin: auto;
  width: 100px;
  height: 100px;
  position: relative;

  &-cross {
    font-family: "Yeon Sung", cursive;
    z-index: 1;
    position: absolute;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &-circle {
    background-color: $darkblue;
    position: absolute;
    border-radius: 100%;
  }
  .circle1 {
    width: 65px;
    height: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .circle2 {
    width: 5px;
    height: 5px;
    top: 20px;
    right: 22px;
  }
  .circle3 {
    width: 10px;
    height: 10px;
    top: 28px;
    right: 17px;
  }
  .circle4 {
    width: 22px;
    height: 20px;
    bottom: 13px;
    right: 35px;
  }
  .circle5 {
    width: 4px;
    height: 4px;
    bottom: 15px;
    left: 37px;
  }
  .circle6 {
    width: 8px;
    height: 8px;
    bottom: 10px;
    right: 25px;
  }
}
</style>
