export default {
  template: `
  
       <!-- <form @submit.prevent="save"> -->
       <input type="text" v-model="txt" placeholder="Enter a text..." />
       <!-- <button>Save</button>
          </form> -->
    `,
  data() {
    return {
      txt: '',
    }
  },
}
