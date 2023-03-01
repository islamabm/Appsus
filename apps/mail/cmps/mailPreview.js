import LongTxt from './LongTxt.js';


export default {
    props: ['email'],
    template: `
        <article class="email-preview" :class="counterClass">
            <input class="email-preview-chackbox" type="checkbox" id="mark" name="mark">
            <!-- <label for="mark"></label> -->
            <p>{{ email.subject }}</p>
            <p class="email-content">
            <LongTxt :txt="email.body"/>
            </p> 
            <div class="email-preview-buttons" v-if="hover">
                <button>📩</button>
                <button>🚮</button>
                <button>✉</button>
                <button>🕔</button>
            </div>    
        </article>
    `,

    data() {
        return {
            hover: false
        }
    },
    created() {
        addEventListener("mouseover", () => {
            this.hover = true
            // setTimeout(() => this.hover = false , 500)
        })
    },
    
    computed: {
        counterClass() {
            return {
                read: this.email.isRead,
            }
        },
    },

    components: {
        LongTxt,
    }
}