import { noteService } from '../service/note.service.js'
import NoteTxtAdd from './AddNotes/NoteTxtAdd.js'
import NoteImgAdd from './AddNotes/NoteImgAdd.js'
import NoteTodosAdd from './AddNotes/NoteTodosAdd.js'
import NoteVideoAdd from './AddNotes/NoteVideoAdd.js'

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
     </section>
    </div>
 </section>

    `,
  data() {
    return {
      // txt: '',
      // url: '',
      // todosStr: '',
      // todos: [],
      // vUrl: '',
      selectedNote: 'NoteTxt',
      note: {
        type: 'NoteTxt',
        style: {},
        info: {},
        createdAt: {},
      },
      // this.selectedNote === 'NoteTxtAdd'
      //   ? noteService.getEmptyTxtNote()
      // : noteService.getEmptyTodosNote(),
    }
  },
  methods: {
    save() {
      console.log(this.note)
      this.$emit('saveNote', this.note)
      // this.todos.push(...this.todosStr.split(','))
      // this.$emit('note-img-saved', this.url)
      // this.$emit('note-saved', this.txt)
      // this.$emit('note-todos-saved', this.todos)
      // this.$emit('note-video-saved', this.vUrl)
    },
    updateInfo(info) {
      this.note.type = this.selectedNote
      console.log(this.note.type)
      this.note.info = info
    },
    // onAddTxt(txt) {
    //   this.txt = txt
    // },
    // onAddUrl(url) {
    //   this.url = url
    // },
    // onAddTodos(todosStr) {
    //   this.todosStr = todosStr
    // },
    // onAddVideoUrl(vUrl) {
    //   this.vUrl = vUrl
    // },
  },
  components: {
    NoteImgAdd,
    NoteTxtAdd,
    NoteTodosAdd,
    NoteVideoAdd,
  },
}
