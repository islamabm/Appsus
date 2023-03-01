import { noteService } from '../service/note.service.js'

import NoteList from '../cmps/NoteList.js'

export default {
  template: `
        <section class="note-index">

            <NoteList/>
 
        </section>
    `,

  components: {
    NoteList,
  },
}
