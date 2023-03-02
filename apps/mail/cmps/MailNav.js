import {svgService} from "../../../services/SVG.service.js"

export default {
  template: `
        <nav class="mail-nav">
            <li @click="openCreateModal">
                <div className="compose" 
                v-html="getSvg('compose')">
                </div>
            </li>
            <RouterLink to="/sent"><li>
            <div className="inbox" 
                v-html="getSvg('inbox')">
                </div>
            </li></RouterLink>
		    <li>
            <div className="starFill" 
                v-html="getSvg('starFill')">
                </div>
            </li>
		    <li>
            <div className="sent" 
                v-html="getSvg('sent')">
                </div>
            </li>
		    <li>
            <div className="draftsFill" 
                v-html="getSvg('draftsFill')">
                </div>
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
  },
  components: {
    svgService,
  },
}
/* <div className="compose" 
    v-html="getSvg('compose')">
    </div>
    <span>Compose</span> */
