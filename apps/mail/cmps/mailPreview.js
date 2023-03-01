export default {
    props: ['email'],
    template: `
        <article class="email-preview">
            <input class="email-preview-chackbox" type="checkbox" id="mark" name="mark">
            <!-- <label for="mark"></label> -->
            <p>{{ email.title }}</p>
            <p class="email-content">{{ email.content }}</p>
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
            setTimeout(() => this.hover = false , 500)
        })
    }
}