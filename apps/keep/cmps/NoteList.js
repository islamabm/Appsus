import NoteTodos from './NoteTodos.js'
import NoteImg from './NoteImg.js'
import NoteTxt from './NoteTxt.js'
import NoteVideo from './NoteVideo.js'
import NoteAudio from './NoteAudio.js'
import ColorPicker from './ColorPicker.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'
import { noteService } from '../service/note.service.js'
import { svgService } from '../../../services/SVG.service.js'
export default {
  props: ['notes'],
  template: `
        <!-- <section class="main-notes"> -->
        
          <ul class="clean-list notes-list ">
            <li :style="note.style" class="note-container" v-for="note in notes" :key="note.id">
            <button class="remove-todo-btn" @click="remove(note.id)">
          <img class="trash-icon" src="icons/trash.png" /></button>

          <!-- <button class="pin-todo-btn" @click="pin(note.id)">
          <span class="settings-icon" className="pin"  v-html="getSvg('pin')"></span></button> -->
               
          <Component
          class="note"
					:is="note.type"
          :info="note.info"
          @noteUpdated="updateNote($event, note.id)" 
					></Component>
          <button class="duplicate-todo-btn" @click="duplicate(note.id)">
          <span class="duplicate-icon" className="dup"  v-html="getSvg('dup')"></span></button>
          <ColorPicker 
          @selected="changeColor($event, note.id)"
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
    updateNote(updatedNote, noteId) {
      const idx = this.notes.findIndex((note) => note.id === noteId)
      this.$set(this.notes, idx, updatedNote) // use $set to update the note in the notes array
    },
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
    duplicate(noteId) {
      const note = this.notes.find((note) => note.id === noteId)
      noteService.save(note).then((duplicated) => {
        this.notes.push(duplicated)
        showSuccessMsg(`${note.type} Dublicated`)
      })
      // this.notes.push(note)
    },
    // addNote(note) {
    //   noteService.save(note).then((addedNote) => {
    //     this.notes.push(addedNote)
    //     console.log(note.type)
    //     showSuccessMsg(`${note.type} Addded`)
    //   })
    // },
    // pin(noteId){
    //   const note = this.notes.find((note) => note.id === noteId)
    //   this.notes.push(note)
    // },

    changeColor(newColor, noteId) {
      const note = this.notes.find((note) => note.id === noteId)
      note.style.backgroundColor = newColor
    },
  },

  components: {
    NoteTodos,
    NoteImg,
    NoteTxt,
    NoteVideo,
    NoteAudio,
    ColorPicker,
  },
}
