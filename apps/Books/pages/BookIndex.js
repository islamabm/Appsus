import { bookService } from '../services/book.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

import BookList from '../cmps/BookList.js'
import BookFilter from '../cmps/BookFilter.js'

export default {
  template: `
        <section class="book-index">
        <RouterLink to="/book/edit">Add a Book</RouterLink><img class="add-book-icon" src="/icons/add.png" />
        <BookFilter @filter="setFilterBy"/>
         <BookList
         :books="filteredBooks" 
         v-if="books"
         @remove="removeBook" /> 
        </section>
    `,
  data() {
    return {
      books: null,
      filterBy: { title: '', maxPrice: 500, rate: 0, createdAt: 2022 },
    }
  },
  methods: {
    removeBook(bookId) {
      bookService
        .remove(bookId)
        .then(() => {
          const idx = this.books.findIndex((book) => book.id === bookId)
          this.books.splice(idx, 1)
          eventBus.emit('show-msg', {
            txt: 'Book removed',
            type: 'success',
          })
        })
        .catch((err) => {
          eventBus.emit('show-msg', {
            txt: 'Book remove failed',
            type: 'error',
          })
        })
    },
    setFilterBy(filterBy) {
      this.filterBy = filterBy
    },
  },

  computed: {
    filteredBooks() {
      const regex = new RegExp(
        this.filterBy.title &&
          this.filterBy.maxPrice &&
          this.filterBy.createdAt,
        'i'
      )
      return this.books.filter(
        (book) =>
          regex.test(book.title) &&
          this.filterBy.maxPrice >= book.listPrice.amount &&
          this.filterBy.createdAt >= book.publishedDate
      )
    },
  },
  // filteredBooks() {
  //   return this.books
  //   const regex = new RegExp(
  //     this.filterBy.title &&
  //       this.filterBy.maxPrice &&
  //       this.filterBy.createdAt,
  //     'i'
  //   )
  //   return this.books.filter(
  //     (book) =>
  //       regex.test(book.title) &&
  //       this.filterBy.maxPrice >= book.listPrice.amount &&
  //       this.filterBy.createdAt >= book.publishedDate
  //   )
  // },

  created() {
    bookService.query().then((books) => {
      this.books = books
    })
  },
  components: {
    BookFilter,
    BookList,
  },
}
