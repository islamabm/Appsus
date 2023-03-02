export default {
  template: `
         <input type="url" v-model="url" @input="AddUrl" placeholder="Enter Image Url..." autofocus />
      `,
  data() {
    return {
      url: '',
    }
  },
  methods: {
    AddUrl() {
      this.$emit('AddUrl', this.url)
      this.url = ''
    },
  },
}
