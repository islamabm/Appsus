import MailList from "../cmps/MailList.js"
import MailFilter from "../cmps/MailFilter.js"
import MailNav from "../cmps/MailNav.js"
import MailDetails from "./MailDetails.js"
import MailCreate from "../cmps/MailCreate.js"

import {svgService} from "../../../services/SVG.service.js"
import { mailService } from '../service/mail.service.js'
import {showSuccessMsg} from '../../../services/event-bus.service.js'
import { utilService } from "../../../services/util.service.js"

export default {
  template: `
        <header class="mail-header">
            <!-- <div className="location" 
                v-html="getSvg('location')">
                </div> -->
            <h1>MisterEmail</h1>

            <MailFilter @filter="setFilterBy"/>
        </header>
        <main class="mail-main-content">
          <MailNav @openCreateModal="openCreateModal"/>  
          <MailCreate @addNewEmail="addNewEmail" @closeModal="closeModal" v-if="isModalOpen"/>

          <MailList
          @deleteEmail="deleteEmail"
          @mark="markAsUnRead"
          :emails="filteredEmails"/>
          
        </main> 
        
        <MailDetails
        v-if="selectedEmail"
        :email="selectedEmail" 
        />
    
    `,
  data() {
    return {
      selectedEmail: null,
      isModalOpen: false,
      emails: [],
      filterBy: { title: "" },
    }
  },
  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName)
    },  
    setFilterBy(filterBy) {
      this.filterBy = filterBy
    },
    showEmailDetails(emailId) {
      console.log(emailId)
      this.selectedEmail = this.emails.find((email) => email.id === emailId)
      console.log(this.selectedEmail)
    },
    markAsUnRead(emailId) {
      console.log(emailId);
      this.email = this.emails.find(email => email.id === emailId)
      console.log(this.email);
      this.email.isRead = true
    },
    openCreateModal() {
      this.isModalOpen = true
    },
    closeModal () {
      this.isModalOpen = false
    },
    addNewEmail(to,title,body) {
      const newEmail = {
        id: utilService.makeId(),
        subject: title,
        body:  body,
        isRead: false,
        isStar: false,
        sentAt: Date.now(),
        removedAt: null,
        from: "momo@momo.com",
        to: to,
      }
      this.emails.push(newEmail)
      mailService.save(newEmail)
      .then(() => {
        showSuccessMsg('Email Added')
    })
    },
    deleteEmail(emailId) {
      mailService.remove(emailId).then(() => {
        const idx = this.emails.findIndex((email) => email.id === emailId)
        this.emails.splice(idx, 1)
       showSuccessMsg('Email Deleted')
    })
  },
  },
  computed: {
    filteredEmails() {
      const regex = new RegExp(this.filterBy.body, 'i')
      return this.emails.filter((email) => regex.test(email.body))
    },
  },
  created() {
    mailService.query().then((emails) => (this.emails = emails))
  },


  components: {
    MailList,
    MailFilter,
    MailNav,
    MailDetails,
    MailCreate,
    svgService,
  },
}
