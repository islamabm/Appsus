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
            <li @click="filter('inbox')">
            <span className="inbox" 
                v-html="getSvg('inbox')">
                </span>
                <span class="mail-nav-text">Inbox</span>
            </li>
		    <li @click="filter('stars')">
            <span className="starFill" 
                v-html="getSvg('starFill')">
                </span>
                <span class="mail-nav-text">Starred</span>
            </li>
		    <li @click="filter('sent')">
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
		    <li @click="filter('trash')">
            <span className="trash" 
                v-html="getSvg('trash')">
                </span>
                <span class="mail-nav-text">Trash</span>
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
      console.log('clicked');
      this.$emit('filter',this.filterBy.status)
    }  
  },
  components: {
    svgService,
  },
}
