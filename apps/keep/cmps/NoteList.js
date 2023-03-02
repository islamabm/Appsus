import NoteTodos from './NoteTodos.js'
import NoteImg from './NoteImg.js'
import NoteTxt from './NoteTxt.js'

import { noteService } from '../service/note.service.js'
export default {
  props: ['notes'],
  template: `
        <section class="main-notes">
          <ul class="clean-list notes-list ">
            <li class="note-container" v-for="note in notes">
            <button class="remove-todo-btn" @click="remove(note.id)">
              <img class="trash-icon" src="icons/trash.png" /></button>
         <article class="note-container" :style="note.style">
          <Component
          class="note"
					:is="note.type"
          :info="note.info"
					></Component>
          </li>
          </ul>
          </article>
         </section>
    `,
  methods: {
    remove(noteId) {
      console.log(noteId)
      noteService.remove(noteId).then(() => {
        const idx = this.notes.findIndex((note) => note.id === noteId)
        this.notes.splice(idx, 1)
      })
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
