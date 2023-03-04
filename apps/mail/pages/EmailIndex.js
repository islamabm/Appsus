import MailList from "../cmps/MailList.js"
import MailFilter from "../cmps/MailFilter.js"
import MailNav from "../cmps/MailNav.js"
import MailDetails from "./MailDetails.js"
import MailCreate from "../cmps/MailCreate.js"

import { mailService } from '../service/mail.service.js'
import {showSuccessMsg,showErrorMsg} from '../../../services/event-bus.service.js'
import { utilService } from "../../../services/util.service.js"

export default {
  template: `
        <header class="mail-header">

            <h1>MisterEmail</h1>
            
            <MailFilter />
            <!-- @filter = "setFilterBy" -->

            <router-link to="/" class="back-button">Home</router-link>

        </header>
        <main class="mail-main-content">
          <MailNav @openCreateModal="openCreateModal"
          @filter = "setFilterBy"
          />

          <MailCreate @addNewEmail="addNewEmail" @closeModal="closeModal" v-if="isModalOpen"/>

          <MailList
          @mark="toggelMarked"
          @deleteEmail="deleteEmail"
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
      filterBy :{
        status: 'inbox',
        txt: 'puki', // no need to support complex text search
        isRead: true, // (optional property, if missing: show all)
        isStared: true, // (optional property, if missing: show all)
        lables: ['important', 'romantic'] // has any of the labels
       },
    }
  },
  methods: {

    setFilterBy(filterBy) {
      this.filterBy.status = filterBy
    },
    showEmailDetails(emailId) {
      this.selectedEmail = this.emails.find((email) => email.id === emailId)
    },
    toggelMarked(emailId) {
      this.email = this.emails.find(email => email.id === emailId)
      this.email.isRead = !this.email.isRead
      mailService.save(this.email)
    },
    openCreateModal() {
      this.isModalOpen = true
    },
    closeModal () {
      this.isModalOpen = false
    },
    addNewEmail(to,title,body) {
      if(!title || !body) return showErrorMsg('Error: Need to fill the lines')
      let date = new Date
      const month = 'Mar'
      const day = date.getDay()
    
      const newEmail = {
        id: utilService.makeId(),
        subject: title,
        body:  body,
        isRead: false,
        isStar: false,
        sentAt: month + ' ' + day,
        removedAt: null,
        from: "momo@momo.com",
        to: to,
        status: 'sent',
      }
      this.emails.unshift(newEmail)
      mailService.save(newEmail)
      .then(() => {
        showSuccessMsg('Email Added')
      })
    },
    deleteEmail(emailId) {
      mailService.remove(emailId).then(() => {
        const idx = this.emails.findIndex((email) => email.id === emailId)
        if(this.emails[idx].status !== 'trash'){
            this.emails[idx].status = 'trash'
        } else {
          this.emails.splice(idx, 1)
         showSuccessMsg('Email Deleted')
        }
      })
    },
  },
  computed: {
    filteredEmails() {
      const regex = new RegExp(this.filterBy.status, 'i')
      return this.emails.filter((email) => regex.test(email.status))
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
