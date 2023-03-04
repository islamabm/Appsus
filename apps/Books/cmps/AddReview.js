export default {
  template: `
            <section class="add-review">
              <h3 class="add-review-header">Add Review</h3>
               <form @submit.prevent="saveReview" class="form-review">
                   <input type="text" class="name-input" placeholder="fullname?" v-model=" review.fullname">
                   <input type="number" min="1" max="5" class="rate-input" placeholder="rate?" v-model=" review.rate">
                   <div class="rate-input">
                   <span v-html="starRating"></span>
                 <input type="number" min="1" max="5"  v-model="review.rate" style="display:none;">
                 </div>
                  <button>Add Review</button>
  
               </form>
             
            </section>
            <h1>Book Reviews</h1>
        `,

  data() {
    return {
      review: {
        fullname: '',
        rate: 1,
        readAt: '',
      },
    }
  },

  methods: {
    saveReview() {
      this.$emit('add-review', { ...this.review })
    },
  },

  computed: {
    starRating() {
      const fullStars = '★'.repeat(Math.floor(this.review.rate))
      const halfStars = this.review.rate % 1 !== 0 ? '☆' : ''
      const emptyStars = '☆'.repeat(Math.floor(5 - this.review.rate))
      return `${fullStars}${halfStars}${emptyStars}`
    },
  },
}
