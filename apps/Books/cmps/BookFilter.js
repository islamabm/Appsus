export default {
  template: `
            <!-- <h3>Filter Books</h3> -->
            <button @click="onfilter" class="filter-btn">{{(isFilter)? 'Close' : 'Filter Books'}}</button>
          <section v-if="isFilter" class="book-filter">
          <img class="serach-book-icon" src="ICONS/search-icon.png" />
              <input 
                  v-model="filterBy.title"
                  @input="filter" 
                  placeholder="Search By Name"
                  type="text" />
                  <label>price</label>
                  <input 
                  v-model="filterBy.maxPrice"
                  @input="filter" 
                  placeholder="Search"
                  type="range" 
                  :title="this.filterBy.maxPrice"
                  />
          </section>
      `,
  data() {
    return {
      filterBy: { title: '', maxPrice: 500, createdAt: 2022 },
      isFilter: false,
    }
  },
  methods: {
    filter() {
      this.$emit('filter', { ...this.filterBy })
    },
    onfilter() {
      this.isFilter = !this.isFilter
    },
  },
}
