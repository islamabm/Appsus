export default {
  template: `
            <div class="search-div">
              <img class="search-img" src="/icons/search-icon.png">
              <input @input="filter" type="text" name="search" placeholder="Search mail"/>
            </div>
            `,
  data() {
    return {
    }
  },
  methods: {
    filter(){
        this.$emit('filter', this.filterBy)
    }
}
}
