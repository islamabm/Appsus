import LongTxt from './LongTxt.js';
import {svgService} from "../../../services/SVG.service.js"

export default {
    props: ['email'],
    template: `
        <article class="email-preview" >
            <input class="email-preview-chackbox" type="checkbox" id="mark" name="mark">
            
            <!-- <span className="inbox" 
                v-html="getSvg('inbox')">
                </span>
             -->
            <p class="email-subject">{{ email.from }}</p>
            <p class="email-content">
            <LongTxt :txt="email.body"/>
            </p> 
            <span class="email-sent-at">{{email.sentAt}}</span>

        </article>
    `,
    mathods: {
        getSvg(iconName) {
            return svgService.getMailSvg(iconName)
        },
    },
    components: {
        LongTxt,
        svgService,
    }

}