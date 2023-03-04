export default {
  template: `
            <div class="search-div">
              <img class="search-img" src="/icons/search-icon.png">
              <input @input="filter" v-model="txt" type="text" name="search" placeholder="Search mail"/>
            </div>
            `,
  data() {
    return {
      txt: '',
    }
  },
  methods: {
    filterTxt() {
      this.$emit("filter",this.txt)
    },
  },
}


