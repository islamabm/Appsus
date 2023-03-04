import { noteService } from '../service/note.service.js'

import NoteList from '../cmps/NoteList.js'
import NoteHeader from '../cmps/NoteHeader.js'
import AddNote from '../cmps/AddNote.js'
// import NoteDetails from './NoteDetails.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'
// import NoteNav from '../cmps/NoteNav.js'
export default {
  template: `
  
        <NoteHeader></NoteHeader>


<!-- <NoteDetails
:notes="notes"
></NoteDetails> -->
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
      showModal: false,
      modalTitle: 'My Modal',
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
  },
  created() {
    noteService.query().then((notes) => (this.notes = notes))
  },

  components: {
    NoteList,
    NoteHeader,
    AddNote,
    // NoteDetails,

    // NoteNav,
  },
}
