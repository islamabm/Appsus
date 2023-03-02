export default {
  template: `
           <input type="url" v-model=" vUrl" @input="AddVideoUrl" placeholder="Enter Image Url..." autofocus />
        `,
  data() {
    return {
      vUrl: '',
    }
  },
  methods: {
    AddVideoUrl() {
      this.$emit('AddVideoUrl', this.vUrl)
    },
  },
}
