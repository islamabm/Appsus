import { noteService } from '../service/note.service.js'
export default {
  props: ['info'],
  template: `
              <section @click="editTitle" class="note-Audio">
              <h1 >{{(!isEditT)?  info.title: title}}</h1>
              <audio class="audio-display" controls>
              <source :src="info.url" type="audio/ogg">
                 </audio>
              </section>
              <div class="back-drop" v-show="isEdit">
       <div class="modal">
          <div class="modal-content">
            <h2>Edit Note Tilte:</h2>
            <input type="text" v-model="title" placeholder="change the title.." />
            <button @click="saveNote">Save</button>
        </div>
       </div>
      </div>
          `,

  data() {
    return {
      title: '',
      isEdit: false,
    }
  },
  methods: {
    editTitle() {
      console.log(this.info)
      this.isEdit = true
    },
    saveNote() {
      this.isEdit = false
      console.log(this.info)
      this.info.title = this.title // update the info.txt property of this.info directly
      noteService.save(this.info) // save the updated note
    },
  },
}
