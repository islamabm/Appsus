import { bookService } from '../services/book.service.js'
import { googleBookService } from '../services/google-book.service.js'
export default {
  template: `
       <section class="back-to-books-from-add-book">
        <RouterLink to="/books">Go Back To Books</RouterLink>
      </section>
          <section class="home-page">
            <form  @submit.prevent="search">
                <input v-model="txt" class="search-api-input" type="text" placeholder="search">
                <button>search</button>

            <ul v-for="book in books" :key="book.id">
                <li class="clean-list new-book" >{{book.volumeInfo.title}}</li>
                <button class="add-g-book" @click="saveBook(book)"><img class="add-book-icon" src="/icons/add.png" /></button>
             </ul>
             </form>
          </section>
      `,

  data() {
    return {
      txt: '',
      books: null,
    }
  },

  methods: {
    search() {
      this.books = googleBookService.query(this.txt)
      console.log(this.books)

      this.txt = ''
    },
    saveBook(book) {
      const newBook = googleBookService.updateBook(book)
      bookService.addGoogleBook(newBook)
    },
  },
}
