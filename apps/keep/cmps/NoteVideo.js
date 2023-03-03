export default {
  props: ['info'],
  template: `
            <section class="note-video">
            <h1>{{info.title}}</h1>
            <video autoplay loop muted width="150" height="150" controls>
            <source :src="info.url" type="video/mp4">
            </video>
            </section>
        `,
}
