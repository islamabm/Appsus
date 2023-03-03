import NoteTodos from './NoteTodos.js'
import NoteImg from './NoteImg.js'
import NoteTxt from './NoteTxt.js'
import NoteVideo from './NoteVideo.js'
import ColorPicker from './ColorPicker.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'
import { noteService } from '../service/note.service.js'
import { svgService } from '../../../services/SVG.service.js'
export default {
  props: ['notes'],
  template: `
        <!-- <section class="main-notes"> -->
        
          <ul class="clean-list notes-list ">
            <li :style="note.style" class="note-container" v-for="note in notes">
            <button class="remove-todo-btn" @click="remove(note.id)">
          <img class="trash-icon" src="icons/trash.png" /></button>
          <Component
          class="note"
					:is="note.type"
          :info="note.info"
					></Component>

          <button class="paint-icon" title="Change color">
          <i v-html="getSvg('paint')"></i>
          </button>
          <ColorPicker
         @selected="changeColor"
         >
        </li>
      </ul>
    `,
  methods: {
    remove(noteId) {
      console.log(noteId)
      noteService.remove(noteId).then(() => {
        const idx = this.notes.findIndex((note) => note.id === noteId)
        this.notes.splice(idx, 1)
        showSuccessMsg('Note Deleted')
      })
    },
    changeColor(noteId) {
      console.log(noteId)
    },

    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
  },

  components: {
    NoteTodos,
    NoteImg,
    NoteTxt,
    NoteVideo,
    ColorPicker,
  },
}
