export default {
  template: `
       <input type="text" v-model="txt" @input="AddTxt" placeholder="Enter a text..." autofocus />
    `,
  data() {
    return {
      txt: '',
    }
  },
  methods: {
    AddTxt() {
      this.$emit('AddTxt', this.txt)
    },
  },
}
