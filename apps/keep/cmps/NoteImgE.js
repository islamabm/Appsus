// import { noteService } from '../service/note.service.js'

// export default {
//   props: ['info'],
//   template: `

//         <section class="note-img note">
//           <h1 @click="editTitle">{{(!isEdit)? title: info.title}}</h1>
//           <img :src="info.url" alt="book" />
//       </section>
//       <div class="back-drop" v-show="isEdit">
//       <div class="modal">
//          <div class="modal-content">
//            <h2>Edit Note Tilte:</h2>
//            <input type="text" v-model="title" placeholder="change the title.." />
//            <button @click="saveNote">Save</button>
//         </div>
//       </div>
//       </div>

//         `,

//   data() {
//     return {
//       title: '',
//       isEdit: false,
//     }
//   },
//   methods: {
//     editTitle() {
//       console.log(this.info)
//       this.isEdit = true
//     },
//     saveNote() {
//       this.isEdit = false
//       console.log(this.info)
//       this.info.title = this.title // update the info.txt property of this.info directly
//       noteService.save(this.info) // save the updated note
//     },
//   },
// }
// export default {
//   props: ['info'],
//   template: `
//             <section class="note-img">
//             <h1>{{info.title}}</h1>
//             <img :src="info.url" />
//             </section>
//         `,
// }
