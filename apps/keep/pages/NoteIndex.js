import { noteService } from '../service/note.service.js'

import NoteList from '../cmps/NoteList.js'
import NoteHeader from '../cmps/NoteHeader.js'
import AddNote from '../cmps/AddNote.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'
// import NoteNav from '../cmps/NoteNav.js'
export default {
  template: `
        <NoteHeader></NoteHeader>
        <!-- <NoteNav></NoteNav> -->
        <AddNote 
        @saveNote="addNote"
         @note-saved="onSaveNote"
         @note-img-saved="onSaveImgNote"
         @note-todos-saved="onSaveTodosNote"
       
        />
        
        <!-- <section class="note-index"> -->

          <section class="notes-container">
             <NoteList 
             v-if="notes"
             :notes="notes" />
             </section>
             
        <!-- </section> -->
    `,
  data() {
    return {
      msg: 'Enter...',
      noteTxt: '',
      notes: [],
    }
  },
  methods: {
    addNote(note) {
      noteService.save(note).then((addedNote) => {
        this.notes.push(addedNote)
        console.log(note.type)
        showSuccessMsg(`${note.type} Addded`)
      })
    },
    // onSaveNote(txt) {
    //   const note = noteService.getEmptyTxtNote(txt)
    //   noteService.save(note).then((savedNote) => {
    //     this.notes.unshift(savedNote)
    //   })
    // },
    // onSaveImgNote(url) {
    //   const note = noteService.getEmptyImgNote(url)
    //   noteService.save(note).then((savedNote) => {
    //     this.notes.unshift(savedNote)
    //   })
    // },
    // onSaveTodosNote(todos) {
    //   const note = noteService.getEmptyTodosNote(todos)
    //   noteService.save(note).then((savedNote) => {
    //     this.notes.unshift(savedNote)
    //   })
    // },
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
// @note-saved="onSaveNote"
// @note-img-saved="onSaveImgNote"
// @note-todos-saved="onSaveTodosNote"
