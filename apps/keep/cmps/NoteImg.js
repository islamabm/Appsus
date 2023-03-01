export default {
  props: ['info'],
  template: `
          <section class="note-img">
          <!-- <input type="text" placeholder="Enter An Image url..." v-model="url"/> -->
          <!-- <button @click="onSave">save</button>     -->
          <h1>{{info.title}}</h1>
          <img src="sprint3image/nard.png" />
          </section>
      `,
  //   data() {
  //     return {
  //       url: '',
  //     }
  //   },
}
