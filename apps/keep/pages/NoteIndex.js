import { noteService } from '../service/note.service.js'

import NoteList from '../cmps/NoteList.js'

export default {
  template: `
        <section class="note-index">

            <NoteList
            :notes="notes" 
             v-if="notes">
              
        </section>
    `,
  data() {
    return {
      notes: [],
    }
  },

  created() {
    noteService.query().then((notes) => (this.notes = notes))
  },
  components: {
    NoteList,
  },
}
