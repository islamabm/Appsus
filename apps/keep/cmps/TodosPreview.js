export default {
  props: ['todo'],
  template: `
        <article class="todo-preview">
         <h5 :class="txtClass" @click="todoDone">{{todo.txt}}</h5>
         <h5 v-if:="todo.doneAt">{{todo.doneAt}}</h5>
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
