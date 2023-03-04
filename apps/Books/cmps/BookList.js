import BookPreview from './BookPreview.js'

export default {
  props: ['books'],
  template: `
        <section class="book-list">
        <ul  class="clean-list">
                <li class="book-display"  v-for="book in books" :key="book.id">
                <BookPreview :book="book"/>
                <button class="details-btn"  class="glow-on-hover"> <RouterLink :to="'/book/'+book.id">Details</RouterLink></button>
                <RouterLink class="edit-book-btn" :to="'/book/edit/'+book.id">Edit</RouterLink> 
                <button class="remove-book-btn" @click="remove(book.id)"><img class="delete-book-icon" src="ICONS/trash.png" /></button>
                </li>
        </ul>
        </section>
    `,
  methods: {
    remove(bookId) {
      this.$emit('remove', bookId)
    },
    showDetails(bookId) {
      this.$emit('show-details', bookId)
    },
  },
  components: {
    BookPreview,
  },
}
