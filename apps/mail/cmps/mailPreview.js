import LongTxt from './LongTxt.js';

export default {
    props: ['email'],
    template: `
        <article class="email-preview" :class="counterClass">
            <input class="email-preview-chackbox" type="checkbox" id="mark" name="mark">
            <p>{{ email.subject }}</p>
            <p class="email-content">
            <LongTxt :txt="email.body"/>
            </p> 

        </article>
    `,

    components: {
        LongTxt,
    }
}