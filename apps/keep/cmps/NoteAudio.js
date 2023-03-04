export default {
  props: ['info'],
  template: `
              <section class="note-video">
              <h1>{{info.title}}</h1>
              <audio class="audio-display" controls>
              <source :src="info.url" type="audio/ogg">
                 </audio>
              </section>
          `,
}
