export default {
  template: `
            <!-- <label v-for="search"></label> -->
            <input v-model="filterBy.title" type="text" name="search" placeholder="Search mail"/>
            `,
  data() {
    return {
      filterBy: { title: "" },
    }
  },
}
