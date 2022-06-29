<template>
  <div>
    <input
      class="new-todo"
      placeholder="你接下来要做什么"
      v-model="newTodo"
      v-on:keyup.enter="addTodo"
    />
  </div>
</template>

<script>
  let id=1;
  export default {
    name:'TodoList',
    data() {
      return {
        todos: [],
        newTodo: '',
        editTodo: {}
      }
    },
    methods: {
      addTodo() {
        // 如果没有输入，则什么都不做
        if (!this.newTodo) return;

        // 新添加的备忘录，添加在列表的前面
        this.todos.unshift({
          id: id++,
          complete: false,
          title: this.newTodo
        });

        // 备忘项添加到列表后，清空接收项
        this.newTodo = '';
      }
    }
  }
</script>

<style scoped>
  @import "https://unpkg.com/todomvc-app-css@2.1.0/index.css";
</style>
