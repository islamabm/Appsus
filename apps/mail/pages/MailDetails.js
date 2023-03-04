import { mailService } from "../service/mail.service.js"

export default {
    
    template: `
        <section class="email-details" >
            <p class="subject">{{email.subject}}</p> 
            <p>{{email.from}}</p>
            <p>{{email.body}}</p>
        </section>
    `,
    data() {
        return {
            email: none,
        }
    },
    created() {
        const { id } = this.$route.params
        mailService.get(id).then(email => this.email = email)
    },

}
