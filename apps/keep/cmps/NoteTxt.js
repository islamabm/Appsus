export default {
  props: ['info'],
  template: `
                 <section  :class="editClass" class="edit-modal">
                 <button @click="editTxt">edit</button>
                  <input type="text" v-if="isEdit" v-model="txt" placeholder="change the text..">

                  </section>
                 <section class="note-txt note">
                 <p>{{(isEdit)? txt:info.txt}}</p>
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
      console.log(info.style.backgroundColor)
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
