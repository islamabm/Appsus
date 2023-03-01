// import CarPreview from './CarPreview.js'
import NotePreview from './NotePreview.js'
export default {
  props: ['notes'],
  template: `
        <section class="note-list">
            <ul>
                <li v-for="note in notes" :key="note.id">
                    <NotePreview :note="note"/>
                </li>
            </ul>
        </section>
    `,
  //   methods: {
  //     remove(carId) {
  //       this.$emit('remove', carId)
  //     },
  //     showDetails(carId) {
  //       this.$emit('show-details', carId)
  //     },
  //   },
  components: {
    NotePreview,
  },
}
