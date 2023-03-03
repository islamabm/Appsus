export default {
    props: ['email'],
    template: `
        <section class="email-details" >
            <h2>{{ email.title }}</h2>
            <p>{{ email.content }}</p>

        </section>
    `,

}