import LongTxt from '../cmps/LongTxt.js'
import { bookService } from '../services/book.service.js'
import AddReview from '../cmps/AddReview.js'

export default {
  template: `
        <section class="book-details" v-if="book">
            <h1>{{ book.title }}</h1>
            <h5  class="book-title">{{ book.subtitle }}</h5>
            <h5><span>Authors:</span> {{ authors }}</h5>
            <img class="book-img" :src="book.thumbnail" />
            <h5><span>published Date:</span> {{ book.publishedDate }}<span>{{setDate}}</span></h5>
            <h5><span> Pages:</span>{{ book.pageCount }} <span>{{setSentance}}</span></h5>
            <h5> <span>Book Categories:</span>{{ categories }}</h5>
            <h5><span>Lang Of Book:</span> {{ book.language }}</h5>
            <LongTxt :txt="book.description" />
            <h5 v-bind:class="PriceClass">{{formattedPrice}}</h5>
            <h5 v-if="book.listPrice.isOnSale">ON SALE📌</h5>

            <RouterLink :to="'/book/' + book.prevBookId">Previous Book</RouterLink> |
            <RouterLink :to="'/book/' + book.nextBookId">Next Book</RouterLink>
                <hr />
          <RouterLink to="/book">Go Back To Books</RouterLink>
       </section>
          <AddReview @add-review="onAddReview"/>
        <article  v-if=" book && book.reviews " v-for="review in book.reviews" :key="review.fullname">
  
          <ul class="clean-list">
          <li>{{review.fullname}}</li>
          <li><span  v-for="star in review.rate">⭐</span></li>
          <li>{{review.readAt}}</li>
          <button @click="onRemovePreview">delete review</button>
          </ul>
        </article>
    `,
  data() {
    return {
      book: null,
      sentance: '',
      date: '',
      sale: '',
    }
  },
  created() {
    this.loadBook()
    const { bookId } = this.$route.params
    bookService.get(bookId).then((book) => {
      this.book = book
    })
  },
  methods: {
    onAddReview(review) {
      const { bookId } = this.$route.params
      bookService.addReview(bookId, review)
    },
    // onRemovePreview() {},
    loadBook() {
      bookService.get(this.bookId).then((book) => (this.book = book))
    },
  },
  computed: {
    setSentance() {
      if (this.book.pageCount > 500) this.sentance = ' , Serious Reading'
      else if (this.book.pageCount > 200) this.sentance = ' , Descent Reading'
      else if (this.book.pageCount < 100) this.sentance = ' , Light Reading'
      return this.sentance
    },
    setDate() {
      const currYear = new Date().getFullYear()
      if (currYear - this.book.publishedDate > 10) return 'Vintage'
      else if (currYear - this.book.publishedDate <= 1) return 'New'
    },
    PriceClass() {
      return {
        red: this.book.listPrice.amount > 150,
        green: this.book.listPrice.amount < 20,
      }
    },
    authors() {
      return this.book.authors.join(', ')
    },
    categories() {
      return this.book.categories.join(', ')
    },
    formattedPrice() {
      const { amount, currencyCode } = this.book.listPrice
      return new Intl.NumberFormat('en', {
        style: 'currency',
        currency: currencyCode,
      }).format(amount)
    },
    bookId() {
      return this.$route.params.bookId
    },
  },
  watch: {
    bookId() {
      this.loadBook()
    },
  },
  components: {
    LongTxt,
    AddReview,
  },
}
