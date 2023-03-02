export default {
  template: `
  
       <input type="text" v-model="todosStr" @input="AddTodos" placeholder="Enter a todos List" autofocus />

    `,
  data() {
    return {
      todosStr: '',
    }
  },
  methods: {
    AddTodos() {
      this.$emit('AddTodos', this.todosStr)
    },
  },
}
