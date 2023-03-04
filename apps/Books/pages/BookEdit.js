import { bookService } from '../services/book.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

export default {
  template: `

        <section class="book-edit">

        <h2>{{(book.id)? 'Edit' : 'Add'}} a Book</h2>
            <form @submit.prevent="save" class="add-book-form">
                <input type="text" v-model="book.title" placeholder="book name?">
                <input type="number" v-model.number="book.listPrice.amount" placeholder="Book Price">
                <input type="number" v-model.number="book.pageCount" placeholder="Book Pages count">
                <input type="text" v-model.number="book.language" placeholder="book language">
                <textarea name="w3review" v-model.number="book.description" rows="2" cols="10"  placeholder="short description"></textarea>
                <button>Save</button>

            </form>
        </section>
    `,
  data() {
    return {
      book: bookService.getEmptyBook(),
    }
  },
  created() {
    const { bookId } = this.$route.params
    if (bookId) {
      bookService.get(bookId).then((book) => (this.book = book))
    }
  },
  methods: {
    save() {
      bookService
        .save(this.book)
        .then((savedBook) => {
          eventBus.emit('show-msg', {
            txt: 'Book saved',
            type: 'success',
          })
          this.$router.push('/books')
        })

        .catch((err) => {
          eventBus.emit('show-msg', {
            txt: 'Book save failed',
            type: 'error',
          })
        })
    },
  },
}
