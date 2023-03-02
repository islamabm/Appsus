import { noteService } from '../service/note.service.js'

import NoteList from '../cmps/NoteList.js'
import NoteHeader from '../cmps/NoteHeader.js'
import AddNote from '../cmps/AddNote.js'
// import NoteNav from '../cmps/NoteNav.js'
export default {
  template: `
        <NoteHeader></NoteHeader>
        <!-- <NoteNav></NoteNav> -->
        <AddNote @note-saved="onSaveNote"/>
        
        <section class="note-index">
          <!-- <header></header> -->
          <!-- <i class="fa-solid fa-image"></i> -->
          <!-- <i class="fa-solid fa-paperclip"></i> -->
          <!-- <section class="user-field">
          <input class="user-input" type="text" :placeholder="msg"  v-model="noteTxt"> -->
          <!-- <button class="add-btn" @click="onAdd">ADD</button> -->
          <!-- </section> -->
  
          <!-- <section class="user-btns"> -->
          <!-- <button class="add-btn user-btn" @click="onAdd">ADD</button> -->
          <!-- <button class="user-btn" @click="msg = 'Enter Img Url...'">I</button>
          <button class="user-btn" @click="msg = 'Enter txt...'">T</button>
          <button class="user-btn" @click="msg = 'Enter comma separated list...'">D</button>
          </section> -->
          <section class="notes-container">
             <NoteList 
             v-if="notes"
             :notes="notes" />
             </section>
             
        </section>
    `,
  data() {
    return {
      msg: 'Enter...',
      noteTxt: '',
      notes: [],
    }
  },
  methods: {
    onSaveNote(newNote) {
      this.notes.unshift(newNote)
    },
  },

  created() {
    noteService.query().then((notes) => (this.notes = notes))
  },

  components: {
    NoteList,
    NoteHeader,
    AddNote,
    // NoteNav,
  },
}
