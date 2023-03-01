import TodosList from './TodosList.js'

export default {
  template: `
        <section class="note-index">
        <input type="text" placeholder="Enter comma separated list..." v-model="todosStr"/>
        <button @click="onSave">save</button>
        <TodosList
      :todos="todos"
      />
        </section>
    `,
  data() {
    return {
      todosStr: '',
      todos: [],
    }
  },
  methods: {
    onSave() {
      this.todos.push(...this.todosStr.split(','))
      console.log(this.todos)
      this.todosStr = ''
    },
  },
  components: {
    TodosList,
  },
}
