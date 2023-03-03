export default {
  template: `
         <input  
         class="input-user-note-type"  
         type="url" 
         v-model="info.url" 
         @input="AddVideoUrl" 
         placeholder="Enter Video Url..." 
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
    AddVideoUrl() {
      this.$emit('updateInfo', this.info)
    },
  },
}
