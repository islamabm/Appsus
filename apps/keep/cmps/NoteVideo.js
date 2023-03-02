export default {
  props: ['info'],
  template: `
            <section class="note-img">
            <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">

            </video>
            </section>
        `,
  //   data() {
  //     return {
  //       url: '',
  //     }
  //   },
}
