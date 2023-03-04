import { noteService } from '../service/note.service.js'

export default {
  props: ['info'],
  template: `

      <section class="note-txt note">
          <p  @click="editTxt">{{(isEdit)? txt: info.txt}}</p>
            <!-- <button @click="editTxt">edit</button> -->
      </section>
      <div class="back-drop"  v-show="isEdit">
      <div class="modal">
         <div class="modal-content">
           <h2>Edit Note Text:</h2>
           <input type="text" v-model="txt" placeholder="change the text.." />
           <button @click="saveNote">Save</button>
        </div>
      </div>
      </div>

 `,

  data() {
    return {
      txt: '',
      isEdit: false,
    }
  },
  methods: {
    editTxt() {
      this.isEdit = true
    },
    saveNote() {
      this.isEdit = false
      this.info.txt = this.txt // update the info.txt property of this.info directly
      noteService.save(this.info) // save the updated note
    },
  },
  computed: {
    editClass() {
      return {
        edit: this.isEdit,
      }
    },
  },
}
