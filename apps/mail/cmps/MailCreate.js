
export default {

    template: `
        <form @submit.prevent="addNewEmail"  class="create-mail-modal">
            <p> <span>New Message</span> <button @click="closeModal">x</button></p>
            <input v-model="to" type="text" placeholder="Recipients"/>
            <input v-model="title" type="text" placeholder="Subject"/>
            <input v-model="body" class="create-content" type="text"/>
            <br>
            <button>Send</button>

        </form>
    `,
    data() {
        return {
            title: '',
            body: '',
            to: '',
        }
    },
    methods: {
        addNewEmail() {
            this.$emit('addNewEmail',this.to,this.title,this.body)
            this.to = ''
            this.title = ''
            this.body = ''
            this.closeModal()
        },
        closeModal() {
            this.$emit('closeModal')
        }
    },
}