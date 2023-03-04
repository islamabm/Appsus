import {svgService} from "../../../services/SVG.service.js"

export default {
  props: ['emails'],
  template: `
        <nav class="mail-nav">
            <li @click="openCreateModal">
                <span className="compose" 
                v-html="getSvg('compose')">
                </span>
              <span class="mail-nav-text">Compose</span>
            </li>
            
            <li @click="filter('inbox')">
            <span className="inbox" 
                v-html="getSvg('inbox')">
                </span>
                <span class="mail-nav-text">Inbox
                  <span class="email-num">{{getNumOfEmails('inbox')}}</span> 
                   </span>
            </li>
		    
            <li @click="filter('Starred')">
            <span className="starFill" 
                v-html="getSvg('starFill')">
                </span>
                <span class="mail-nav-text">Starred
                <span class="email-num">{{getNumOfEmails('starred')}}</span> 
                </span>
            </li>
		    
            <li @click="filter('sent')">
            <span className="sent" 
                v-html="getSvg('sent')">
                </span>
                <span class="mail-nav-text">Sent
                <span class="email-num">{{getNumOfEmails('sent')}}</span> 
                </span>
            </li>
		    
            <li @click="filter('drafts')">
            <span className="draftsFill" 
                v-html="getSvg('draftsFill')">
                </span>
                <span class="mail-nav-text">Drafts
                <span class="email-num">{{getNumOfEmails('drafts')}}</span> 
                </span>
            </li>
		    
            <li @click="filter('trash')">
            <span className="trash" 
                v-html="getSvg('trash')">
                </span>
                <span class="mail-nav-text">Trash
                  <span class="email-num">{{getNumOfEmails('trash')}}</span>
                </span>
              </li>
        </nav>
    `,
    data() {
      return {
        filterBy :{
          status: 'sent',
          txt: 'puki', // no need to support complex text search
          isRead: true, // (optional property, if missing: show all)
          isStared: true, // (optional property, if missing: show all)
          lables: ['important', 'romantic'] // has any of the labels
         },
      }
    },
  methods: {
    openCreateModal() {
      this.$emit("openCreateModal")
    },
    getSvg(iconName) {
        return svgService.getMailSvg(iconName)
    },
    filter(status){
      this.filterBy.status = status
      this.$emit('filter',this.filterBy.status)
    },
    getNumOfEmails(status) {
        let emailCount = this.emails.filter(email => email.status === status)
        return emailCount.length
    },  
  },
  components: {
    svgService,
  },
}
