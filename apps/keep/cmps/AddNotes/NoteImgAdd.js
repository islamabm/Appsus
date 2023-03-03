export default {
  template: `
         <input  
         class="input-user-note-type"  
         type="url" 
         v-model="info.url" 
         @input="AddUrl" 
         placeholder="Enter Image Url..." 
         autofocus />
      `,
  data() {
    return {
      info: {
        title: '',
        url: '',
      },
    }
  },
  methods: {
    AddUrl() {
      this.$emit('updateInfo', this.info)
    },
  },
}
