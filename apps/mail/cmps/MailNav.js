import {svgService} from "../../../services/SVG.service.js"

export default {
  template: `
        <nav class="mail-nav">
            <li @click="openCreateModal">
                <span className="compose" 
                v-html="getSvg('compose')">
                </span>
              <span class="mail-nav-text">Compose</span>
            </li>
            <RouterLink to="/sent"><li>
            <span className="inbox" 
                v-html="getSvg('inbox')">
                </span>
                <span class="mail-nav-text">Inbox</span>
            </li></RouterLink>
		    <li>
            <span className="starFill" 
                v-html="getSvg('starFill')">
                </span>
                <span class="mail-nav-text">Starred</span>
            </li>
		    <li>
            <span className="sent" 
                v-html="getSvg('sent')">
                </span>
                <span class="mail-nav-text">Sent</span>
            </li>
		    <li>
            <span className="draftsFill" 
                v-html="getSvg('draftsFill')">
                </span>
                <span class="mail-nav-text">Drafts</span>
            </li>
		    <li @click="filterByTrash">
            <span className="trash" 
                v-html="getSvg('trash')">
                </span>
                <span class="mail-nav-text">Trash</span>
            </li>
        </nav>
    `,
  methods: {
    openCreateModal() {
      this.$emit("openCreateModal")
    },
    getSvg(iconName) {
        return svgService.getMailSvg(iconName)
    },
    filterByTrash(){
      this.$emit('filterByTrash')
    }  
  },
  components: {
    svgService,
  },
}
