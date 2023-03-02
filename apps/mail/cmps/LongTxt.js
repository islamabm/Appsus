export default {
    props: {
      txt: {
        type: String,
        required: true,
      },
      length: {
        type: Number,
        required: false,
        default: 100,
      },
    },
    template: `
          <p> {{handelTxtLength}}</p>
      `,
    data() {
      return {
      }
    },
    methods: {

    },
    computed: {
      handelTxtLength() {
        if (this.txt.length > 110) {
          return this.txt.slice(0, 100) + '...'
        } else {return this.txt} 
      },
    },
  }
  