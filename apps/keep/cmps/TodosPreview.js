export default {
  props: ['todo'],
  template: `
        <article class="todo-preview">
         <h1 :class="txtClass" @click="todoDone">{{todo.txt}}</h1>
         <h1 v-if:="todo.doneAt">{{todo.doneAt}}</h1>
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
  },
  computed: {
    txtClass() {
      return {
        'txt-done': this.isDone,
      }
    },
  },
}
