// export default {
//   template: `
//         <section class="note-filter">
//             <input
//                 v-model="filterBy.type"
//                 @input="filter"
//                 placeholder="Search"
//                 type="text" />
//         </section>
//     `,
//   data() {
//     return {
//       filterBy: { type: '' },
//     }
//   },
//   methods: {
//     filter() {
//       this.$emit('filter', { ...this.filterBy })
//     },
//   },
// }
