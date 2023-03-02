export default {
  props: ['todo'],
  template: `
        <article class="todo-preview">
         <h5 @click="todoDone" :class="txtClass" class="todos-txt">{{todo.txt}}</h5>
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
