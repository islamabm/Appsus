export default {
  template: `
            <!-- <label v-for="search"></label> -->
            <input @input="filter" v-model="filterBy.title" type="text" name="search" placeholder="Search mail"/>
            `,
  data() {
    return {
      filterBy: { title: "" },
    }
  },
  methods: {
    filter() {
        // console.log(this.filterBy.title);
      this.$emit("filter", this.filterBy)
    },
  },
}
