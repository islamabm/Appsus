import MailPreview from "./MailPreview.js"
import MailCreate from "./MailCreate.js"

export default {
  props: ["emails"],
  template: `   
            <ul class="mail-list" v-for="email in emails">
                <li @click="mark(email.id)">
                    <MailPreview :email="email"/>
                <div class="email-preview-buttons">
                <button>📩</button>
                <button @click="deleteEmail(email.id)">🚮</button>
                <button @click="mark(email.id)">✉</button>
                <button>🕔</button>
            </div>    
                </li>
                 
            </ul>
    `,

  methods: {
    deleteEmail(emailId) {
      console.log(emailId)
      this.$emit("remove", emailId)
    },
    mark(emailId) {
      const email = this.emails.filter((email) => email.id === emailId)
      email.isRead = true
      console.log(emailId)
      this.$emit("mark", emailId)
    },
    openCloseModal() {
        console.log('hi');
    },
  },
  computed: {
    counterClass() {
      return {
        read: this.email.isRead,
      }
    },
  },

  components: {
    MailPreview,
    MailCreate,
  },
}
