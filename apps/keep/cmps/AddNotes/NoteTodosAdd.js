export default {
  template: `
  
       <input
        class="input-user-note-type" 
        type="text" 
        v-model="todosStr"
        @input="AddTodos" 
        placeholder="Enter Comma Seperated List"
        autofocus />

    `,
  data() {
    return {
      info: {
        title: '',
        todos: [],
      },
      todosStr: '',
    }
  },
  methods: {
    AddTodos() {
      this.info.todos = this.todosStr.split(',').map((todo) => {
        return { txt: todo, doneAt: Date.now() }
      })
      console.log(this.info.todos)
      this.$emit('updateInfo', this.info)
    },
  },
}
