import MailPreview from './MailPreview.js'

export default {
    props:['emails'],
    template: `   
            <ul class="mail-list">
                <li v-for="email in emails">
                    <MailPreview :email="email"/>
                    <!-- <button hidden @click="showDetails(car.id)">Details</button> -->
                    <!-- <button @click="remove(car.id)">x</button> -->
                </li>
            </ul>
    `,
    components: {
        MailPreview,
    }
}
