import LongTxt from './LongTxt.js';

export default {
    props: ['email'],
    template: `
        <article class="email-preview">
            <input class="email-preview-chackbox" type="checkbox" id="mark" name="mark">
            <p class="email-subject">{{ email.from }}</p>
            <p class="email-content">
            <LongTxt :txt="email.body"/>
            </p> 
            <span></span>

        </article>
    `,

    components: {
        LongTxt,
    }
}