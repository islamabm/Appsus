import { noteService } from '../service/note.service.js'

import NoteList from '../cmps/NoteList.js'
import NoteHeader from '../cmps/NoteHeader.js'

export default {
  template: `
        <NoteHeader></NoteHeader>
        <section class="note-index">
          <!-- <header></header> -->

         
          <section class="user-field">
          <input class="user-input" type="text" :placeholder="msg">
          <!-- <button class="add-btn" @click="onAdd">ADD</button> -->
          </section>
  
          <section class="user-btns">
          <!-- <button class="add-btn user-btn" @click="onAdd">ADD</button> -->
          <button class="user-btn" @click="msg = 'Enter Img Url...'">I</button>
          <button class="user-btn" @click="msg = 'Enter txt...'">T</button>
          <button class="user-btn" @click="msg = 'Enter comma separated list...'">D</button>
          </section>
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
      notes: [],
      // notes: [
      //   {
      //     id: 'n102',
      //     type: 'NoteImg',
      //     isPinned: false,
      //     info: {
      //       url: 'sprint3image/boook.jpeg',
      //       title: 'Bobi and Me',
      //     },
      //     style: {
      //       backgroundColor: '#00d',
      //     },
      //   },
      //   {
      //     id: 'n101',
      //     createdAt: 1112222,
      //     type: 'NoteTxt',
      //     isPinned: true,
      //     style: {
      //       backgroundColor: '#00d',
      //     },
      //     info: {
      //       txt: 'Fullstack Me Baby!',
      //     },
      //   },
      //   {
      //     id: 'n101',
      //     createdAt: 1112222,
      //     type: 'NoteTxt',
      //     isPinned: true,
      //     style: {
      //       backgroundColor: '#00d',
      //     },
      //     info: {
      //       txt: 'Fullstack Me Baby!',
      //     },
      //   },
      //   {
      //     id: 'n102',
      //     type: 'NoteImg',
      //     isPinned: false,
      //     info: {
      //       url: 'sprint3image/boook.jpeg',
      //       title: 'Bobi and Me',
      //     },
      //     style: {
      //       backgroundColor: '#00d',
      //     },
      //   },
      //   {
      //     id: 'n102',
      //     type: 'NoteImg',
      //     isPinned: false,
      //     info: {
      //       url: 'sprint3image/boook.jpeg',
      //       title: 'Bobi and Me',
      //     },
      //     style: {
      //       backgroundColor: '#00d',
      //     },
      //   },
      //   {
      //     id: 'n103',
      //     type: 'NoteTodos',
      //     isPinned: false,
      //     info: {
      //       title: 'Get my stuff together',
      //       todos: [
      //         { txt: 'Driving license', doneAt: null },
      //         { txt: 'Coding power', doneAt: 187111111 },
      //       ],
      //     },
      //   },
      //   {
      //     id: 'n103',
      //     type: 'NoteTodos',
      //     isPinned: false,
      //     info: {
      //       title: 'Get my stuff together',
      //       todos: [
      //         { txt: 'learning javascript', doneAt: null },
      //         { txt: 'learning css', doneAt: 187111111 },
      //       ],
      //     },
      //   },
      // ],
    }
  },
  created() {
    noteService.query().then((notes) => (this.notes = notes))
  },

  components: {
    NoteList,
    NoteHeader,
  },
}
