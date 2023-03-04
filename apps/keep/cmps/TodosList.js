import TodosPreview from './TodosPreview.js'

export default {
  props: ['todos'],
  template: `
        <section class="todo-list todo-container">
            <ul class="clean-list">
                <li v-for="todo in todos" :key="todo.id">
                  <TodosPreview :todo="todo" @removeTodo="onRemoveTodo"/> 
                </li>
            </ul>
        </section>
    `,
  methods: {
    remove(todoId) {
      this.$emit('remove', todoId)
    },
    onRemoveTodo(todoId) {
      console.log(todoId)
      const index = this.todos.findIndex((todo) => todo.id === todoId)
      if (index !== -1) {
        this.todos.splice(index, 1)
      }
    },
  },
  components: {
    TodosPreview,
  },
}
