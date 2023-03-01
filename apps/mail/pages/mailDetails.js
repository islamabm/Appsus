

export default {
    props: ['email'],
    template: `
        <section class="email-details" >
            <h2>{{ email.title }}</h2>
            <p>{{ email.content }}</p>
            <button @click="closeDetails(email.id)">Go back</button>

        </section>
    `,
    methods: {
        closeDetails(emailID){
            this.$emit('hide-details',emailID)
        }
    }
}