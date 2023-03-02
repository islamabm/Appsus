import MailList from "../cmps/MailList.js"
import MailFilter from "../cmps/MailFilter.js"
import MailNav from "../cmps/MailNav.js"
import MailDetails from "./MailDetails.js"
import MailCreate from "../cmps/MailCreate.js"

import { mailService } from '../service/mail.service.js'
import {
  showErrorMsg,
  showSuccessMsg,
} from '../../../services/event-bus.service.js'

export default {
  template: `
        <header class="mail-header">
            <button>➕</button>
            <h1>
              MisterEmail
            <!-- <span class="blue">M</span>
            <span class="red">i</span>
            <span class="yellow">s</span>
            <span class="blue">t</span>
            <span class="green">e</span>
            <span class="red">r</span>
            <span class="blue">E</span>
            <span class="red">m</span>
            <span class="yellow">a</span>
            <span class="blue">i</span>
            <span class="green">l</span> -->
          </h1>

            <MailFilter @filter="setFilterBy"/>
        </header>
        <main class="mail-main-content">
          <MailNav @openCreateModal="openCreateModal"/>  
          <MailCreate @addNewEmail="addNewEmail" @closeModal="closeModal" v-if="isModalOpen"/>

          <MailList
          @remove="removeEmail"
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
        id: "e109",
        subject: title,
        body:  body,
        isRead: false,
        isStar: false,
        sentAt: 1551133930595,
        removedAt: null,
        from: "momo@momo.com",
        to: to,
      }
      this.emails.push(newEmail)
      mailService.save(newEmail)
      .then(() => {
        showSuccessMsg('Email Added')
    })
    }

  },
  computed: {
    filteredEmails() {
      const regex = new RegExp(this.filterBy.title, 'i')
      return this.emails.filter((email) => regex.test(email.title))
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
  },
}
