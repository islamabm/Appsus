import { noteService } from '../service/note.service.js'
import NoteTxtAdd from './AddNotes/NoteTxtAdd.js'
import NoteImgAdd from './AddNotes/NoteImgAdd.js'
import NoteVideoAdd from './AddNotes/NoteVideoAdd.js'
export default {
  template: `
<section class="add-note-component">
<!-- <form @submit.prevent="save">
                <input type="text" v-model="car.vendor" placeholder="Vendor">
                <input type="number" v-model.number="car.maxSpeed">
                <button>Save</button>
            </form> -->
    <div class="user-input-container">
    <form @submit.prevent="save">
          <Component
          class="note"
	      :is="selectedNote"
          :info="note.info"
		 ></Component>
         <button>Save</button>
         </form>
         <button title="image" class="user-btn" @click="selectedNote = 'NoteImgAdd'">📷</button>
          <button title="txt" class="user-btn" @click="selectedNote = 'NoteTxtAdd'">✏</button>
          <button title="video" class="user-btn" @click="selectedNote = 'NoteVideoAdd'">🎥</button>
         </div>
 </section>

    `,
  data() {
    return {
      note:
        this.selectedNote === 'NoteTxtAdd'
          ? noteService.getEmptyTxtNote()
          : noteService.getEmptyImgNote(),
      selectedNote: 'NoteTxtAdd',
    }
  },
  methods: {
    save() {
      noteService.save(this.note).then((savedNote) => {
        this.note = noteService.getEmptyTxtNote()
        this.$emit('note-saved', savedNote)
      })
    },
  },
  components: {
    NoteImgAdd,
    NoteTxtAdd,
    NoteVideoAdd,
  },
}
