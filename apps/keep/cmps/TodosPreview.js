export default {
  props: ['todo'],
  template: `
        <!-- <article class="todo-preview"> -->
         <div>
         <button class="remove-todo-txt" @click.prevent="removeTodo">X</button>
          <h5 @click="todoDone" :class="txtClass" class="todos-txt">{{todo.txt}}</h5>
         </div>
        <!-- </article> -->
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
