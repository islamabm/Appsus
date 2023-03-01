import { noteService } from '../services/note.service.js'

import NoteList from '../cmps/NoteList.js'

export default {
  template: `
        <section class="note-index">

            <NoteList
                v-if="cars">
        </section>
    `,
  data() {
    return {
      cars: null,
    }
  },

  created() {
    noteService.query().then((notes) => (this.notes = notes))
  },
  components: {
    NoteList,
  },
}
