export default {
  props: ['info'],
  template: `
  

                  <section @click="noteClicked" class="note-txt note">
                 <p @click="editTxt">{{(isEdit)? txt: info.txt}}</p>
                 <!-- <button @click="editTxt">edit</button>  -->
                 </section>
                 <section v-if="isEdit" :class="editClass" class="edit-modal"> 
                 <input class="edit-modal" type="text"  v-model="txt" placeholder="change the text..">
                 </section> 

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
    noteClicked() {
      console.log('hi')
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
