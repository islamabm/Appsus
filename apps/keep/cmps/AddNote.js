import { noteService } from '../service/note.service.js'
import NoteTxtAdd from './AddNotes/NoteTxtAdd.js'
import NoteImgAdd from './AddNotes/NoteImgAdd.js'
import NoteTodosAdd from './AddNotes/NoteTodosAdd.js'
import NoteVideoAdd from './AddNotes/NoteVideoAdd.js'
import NoteAudioAdd from './AddNotes/NoteAudioAdd.js'
import { svgService } from '../../../services/SVG.service.js'
export default {
  template: `
<section class="add-note-component">

    <div class="user-input-container">
    <form @submit.prevent="save">
          <Component
          @updateInfo="updateInfo"
	        :is="selectedNote + 'Add'"
          :info="note.info"
          :todosStr="todosStr"
		      ></Component>
          <button>Save</button>
    </form>

      <section class="display-btns">
          <button title="image" class="user-btn" @click="selectedNote='NoteImg'">📷</button>
          <button title="txt" class="user-btn" @click="selectedNote='NoteTxt'">✏</button>
          <button title="video" class="user-btn" @click="selectedNote='NoteVideo'">🎥</button>
          <button title="todos" class="user-btn" @click="selectedNote='NoteTodos'">📃</button>
          <button title="todos" class="user-btn" @click="selectedNote='NoteAudio'">a</button>
     </section>
    </div>
 </section>

    `,
  data() {
    return {
      selectedNote: 'NoteTxt',
      note: {
        type: 'NoteTxt',
        style: {},
        info: {},
        createdAt: {},
      },
    }
  },
  methods: {
    save() {
      console.log(this.note)
      this.$emit('saveNote', this.note)
    },
    updateInfo(info) {
      this.note.type = this.selectedNote
      console.log(this.note.type)
      this.note.info = info
    },
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
  },
  components: {
    NoteImgAdd,
    NoteTxtAdd,
    NoteTodosAdd,
    NoteVideoAdd,
    NoteAudioAdd,
  },
}
