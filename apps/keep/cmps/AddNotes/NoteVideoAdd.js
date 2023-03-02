export default {
  template: `
         <input type="url" v-model="url" placeholder="Enter Video Url..." autofocus/>
      `,
  data() {
    return {
      url: '',
    }
  },
}
