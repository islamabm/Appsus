export default {
  props: ['todo'],
  template: `
        <article class="todo-preview">
         <h5 @click="todoDone" :class="txtClass" class="todos-txt">{{todo.txt}}</h5>
         <button class="remove-todo-txt" @click.prevent="removeTodo">X</button>
        </article>
    `,
  data() {
    return {
      isDone: false,
    }
  },
  methods: {
    todoDone() {
      this.isDone = !this.isDone
    },

    removeTodo() {
      this.$emit('removeTodo', this.todo.id)
    },
  },

  computed: {
    txtClass() {
      return {
        'txt-done': this.isDone,
      }
    },
  },
}
