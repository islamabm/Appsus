export default {
  template: `
       <input  
       class="input-user-note-type"  
       type="text" 
       v-model="info.txt" 
       @input="AddTxt" 
       placeholder="Enter a text..." 
       autofocus />
    `,
  data() {
    return {
      info: {
        txt: '',
      },
    }
  },
  methods: {
    AddTxt() {
      this.$emit('updateInfo', this.info)
    },
  },
}
