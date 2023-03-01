import NoteTodos from './NoteTodos.js'
import NoteImg from './NoteImg.js'
import NoteVideo from './NoteVideo.js'

export default {
  // props: ['todos'],
  template: `
        <section class="todo-list">
          <button @click="ActiveTab = 'NoteImg'">image</button>
          <button @click="ActiveTab = 'NoteTodos'">Todos</button>
          <button @click="ActiveTab = 'NoteVideo'">Video</button>
        <!-- <input @click="ImageChoosen" v-model="think" name="rate" type="radio" value="ImageNote">
				<label>Image</label>
				<input @click="TodosChoosen"   v-model="think" name="rate" type="radio" value="TodosNote">
				<label>Todos</label>
				<input @click="VideoChoosen"  v-model="think" name="rate" type="radio" value="VideoNote">
				<label>Video</label> -->
        <Component
					:is="ActiveTab"
          
					></Component>
        </section>
    `,
  data() {
    return {
      ActiveTab: 'NoteImg',
    }
  },

  components: {
    NoteTodos,
    NoteImg,
    NoteVideo,
  },
}
