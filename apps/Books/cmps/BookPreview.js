export default {
  props: ['book'],
  template: `
          <article class="book-preview">
              <h2>{{ book.title }}</h2>
              <h3>{{ book.listPrice.amount }}</h3>
              <img class="book-img" :src="book.thumbnail" />
          </article>
      `,
}
