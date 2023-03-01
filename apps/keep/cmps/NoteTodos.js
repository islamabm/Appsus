import TodosList from './TodosList.js'

export default {
  props: ['info'],
  template: `
        <section class="note-index">
        <TodosList
        :todos="info.todos"
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
