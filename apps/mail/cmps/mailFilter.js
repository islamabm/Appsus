export default {
  template: `
            <div class="search-div">
              <img class="search-img" src="/icons/search-icon.png">
              <input @input="filter" v-model="filterBy.body" type="text" name="search" placeholder="Search mail"/>
            </div>
            `,
  data() {
    return {
      filterBy: { body: "" },
    }
  },
  methods: {
    filter(){
        this.$emit('filter', this.filterBy)
    }
}
}
