// import { noteService } from '../service/note.service.js'

// export default {
//   template: `
//         <section class="note-edit">
//             <h2>Add a Txt</h2>
//             <form @submit.prevent="save">
//                 <input type="text" v-model="note.txt" placeholder="txt">
//                 <button>Save</button>
//             </form>
//         </section>
//     `,
//   data() {
//     return {
//       note: noteService.getEmptyTxtNote(),
//     }
//   },
//   methods: {
//     save() {
//       noteService.save(this.note).then((savedNote) => {
//         this.note = noteService.getEmptyTxtNote()
//         this.$emit('note-saved', savedNote)
//       })
//     },
//   },
// }
