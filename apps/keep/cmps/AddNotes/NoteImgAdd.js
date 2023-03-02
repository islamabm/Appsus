export default {
  template: `
         <input type="url" v-model="url" placeholder="Enter Image Url..." autofocus />
      `,
  data() {
    return {
      url: '',
    }
  },
}
