import MailPreview from "./MailPreview.js"
import MailCreate from "./MailCreate.js"
import {svgService} from "../../../services/SVG.service.js"

export default {
  props: ["emails"],
  template: `   
            <ul class="mail-list" v-for="email in emails" :class="{'read':!email.isRead}">
                <li @click="mark(email.id)">
                    <MailPreview :email="email"/>
                <div class="email-preview-buttons">
                <button @click.stop="deleteEmail(email.id)">
                  <div className="trash" 
                  v-html="getSvg('trash')">
                  </div>
                </button>
                <button @click.stop="mark(email.id)">✉</button>
                </div>    
                </li>
                 
            </ul>
    `,

  methods: {
    deleteEmail(emailId) {
      this.$emit("deleteEmail", emailId)
    },
    mark(emailId) {
      this.$emit("mark", emailId)
    },
    getSvg(iconName) {
      return svgService.getMailSvg(iconName)
    },
  },
  components: {
    MailPreview,
    MailCreate,
    svgService,

  },
}
