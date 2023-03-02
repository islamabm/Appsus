import TodosPreview from './TodosPreview.js'

export default {
  props: ['todos'],
  template: `
        <section class="todo-list todo-container">
            <ul class="clean-list">
                <li v-for="todo in todos" :key="todo.id">
                   <article class="todos-articale">
                    <TodosPreview :todo="todo"/> 
                    </article>  
                </li>
                <!-- <button class="remove-todo-btn" @click="remove(todo.id)">x</button> -->
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
