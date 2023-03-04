import LongTxt from './LongTxt.js';
import {svgService} from "../../../services/SVG.service.js"
import { mailService } from '../service/mail.service.js';

export default {
    props: ['email'],
    template: `
        <article class="email-preview" >
            <input class="email-preview-chackbox" type="checkbox" id="mark" name="mark">
            
            <span @click.stop="starEmail" :class="{'starred':email.isStar}" className="star" 
                v-html="getSvg('star')">
                </span>
            
            <p class="email-subject">{{ email.subject }}</p>
            <p class="email-content">
            <LongTxt :txt="email.body"/>
            </p> 
            <span class="email-sent-at">{{email.sentAt}}</span>

        </article>
    `,

    methods: {
        getSvg(iconName) {
            return svgService.getMailSvg(iconName)
        },
        starEmail() {    
            this.email.isStar = !this.email.isStar

            if(this.email.isStar) {
                this.email.status = 'starred'
            }else this.email.status = 'inbox'
            mailService.save(this.email)
        }
    },
    // computed: {
    //     emailStarClass() {
    //         return {
    //             starred : this.email.isStar,
    //         }
    //     }
    // },
    components: {
        LongTxt,
        svgService,
    },


}
