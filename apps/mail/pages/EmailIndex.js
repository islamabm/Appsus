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

            <MailFilter @filter="setFilterBy"/>
        </header>
        <main class="mail-main-content">
          <MailNav @openCreateModal="openCreateModal"
          />
                    <!-- @filterByTrash = "filterByTrash" -->

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
      trash: [],
      filterBy: { title: "" , trash: this.trash },
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
      }
      this.emails.unshift(newEmail)
      mailService.save(newEmail)
      .then(() => {
        showSuccessMsg('Email Added')
      })
    },
    deleteEmail(emailId) {
      const emailDeleted = this.emails.find((email) => email.id === emailId)
      this.trash.push(emailDeleted)
      mailService.saveTrash(this.trash)

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
  },
}
