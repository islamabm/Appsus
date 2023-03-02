export default {
  template: `
            <div class="search-div">
              
              <input v-model="filterBy.title" type="text" name="search" placeholder="Search mail"/>
            </div>
            `,
  data() {
    return {
      filterBy: { title: "" },
    }
  },
  methods: {
    filter(){
        this.$emit('filter', this.filterBy)
    }
}
}
