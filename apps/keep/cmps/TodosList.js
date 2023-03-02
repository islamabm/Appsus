import TodosPreview from './TodosPreview.js'

export default {
  props: ['todos'],
  template: `
        <section class="todo-list todo-container">
            <ul class="clean-list">
                <li v-for="todo in todos" :key="todo.id">
                  <TodosPreview :todo="todo"/> 
                </li>
            </ul>
        </section>
    `,
  methods: {
    remove(todoId) {
      this.$emit('remove', todoId)
    },
  },
  components: {
    TodosPreview,
  },
}
