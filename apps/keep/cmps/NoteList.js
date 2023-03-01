import NoteTodos from './NoteTodos.js'
import NoteImg from './NoteImg.js'
import NoteTxt from './NoteTxt.js'

export default {
  props: ['notes'],
  template: `
        <section >
          <ul class="clean-list notes-list ">
            <li class="note-container" v-for="note in notes">
            <button class="remove-todo-btn" @click="remove(note.id)">x</button>
    
          <Component
          class="note"
					:is="note.type"
          :info="note.info"
					></Component>
          </li>
          </ul>
        <!-- <button @click="ActiveTab = 'NoteImg'">image</button>
        <button @click="ActiveTab = 'NoteTodos'">Todos</button>
        <button @click="ActiveTab = 'NoteVideo'">Video</button> -->
        <!-- <input @click="ImageChoosen" v-model="think" name="rate" type="radio" value="ImageNote">
				<label>Image</label>
				<input @click="TodosChoosen"   v-model="think" name="rate" type="radio" value="TodosNote">
				<label>Todos</label>
				<input @click="VideoChoosen"  v-model="think" name="rate" type="radio" value="VideoNote">
				<label>Video</label> -->

        </section>
    `,
  // data() {
  //   return {

  //   }
  // },
  methods: {
    remove(noteId) {
      const noteIdx = this.notes.findIndex((note) => note.id === noteId)
      this.notes.splice(noteIdx, 1)
    },
  },

  components: {
    NoteTodos,
    NoteImg,
    NoteTxt,
  },
}
// setFilterBy(filterBy) {
//   this.filterBy = filterBy
// }
// },
