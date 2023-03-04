import { svgService } from '../../../services/SVG.service.js'

export default {
  template: `
        <header class="note-header">
            <h1>
            <span class="blue">M</span>
            <span class="red">i</span>
            <span class="yellow">s</span>
            <span class="blue">t</span>
            <span class="green">e</span>
            <span class="red">r</span>
            <span class="blue">N</span>
            <span class="red">o</span>
            <span class="yellow">t</span>
            <span class="green">e</span>
            </h1>
            <div><input class="serch-input" type="text" placeholder="serch">
            <span className="search" 
                v-html="getSvg('search')">
                </span></div>
               
              
            <router-link to="/" class="back-home-button">Home</router-link>
            
</header>
    `,

  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
  },
}
