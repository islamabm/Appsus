export default {
  props: ['note'],
  template: `
        <article class="note-preview">
            <h2>{{ note.title }}</h2>
            <h3>{{ note.importance }}</h3>
            <h3>{{ note.id }}</h3>
        </article>
    `,
}
