import MailPreview from './MailPreview.js'

export default {
    props:['emails'],
    template: `   
            <ul class="mail-list" v-for="email in emails">
                <li @click="openDetails(email.id)" :class="counterClass">
                    <MailPreview :email="email"/>                
                <!-- <button hidden @click="showDetails(car.id)">Details</button> -->
                    <!-- <button @click="remove(car.id)">x</button> -->
                </li>
                 
            </ul>
    `,
    data() {
        return{
        }
    },
    methods: {
            openDetails(emailID){
            //    this.email.isRead = true
                this.$emit('show-details', emailID)
            }
    },
    computed: {

    },
    components: {
        MailPreview,
    }
}
