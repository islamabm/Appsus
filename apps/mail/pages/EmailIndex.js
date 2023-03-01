import MailList from "../cmps/MailList.js"
import MailFilter from "../cmps/MailFilter.js"
import MailNav from "../cmps/MailNav.js"
import MailDetails from "./MailDetails.js"

import { mailService } from '../service/mail.service.js'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'

export default {
  template: `
        <header class="mail-header">
            <button>➕</button>
            <h1>
            <span class="blue">M</span>
            <span class="red">i</span>
            <span class="yellow">s</span>
            <span class="blue">t</span>
            <span class="green">e</span>
            <span class="red">r</span>
            <span class="blue">E</span>
            <span class="red">m</span>
            <span class="yellow">a</span>
            <span class="blue">i</span>
            <span class="green">l</span>
          </h1>

            <MailFilter @filter="setFilterBy"/>
        </header>
        <main class="mail-main-content">
          <MailNav/>  

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
      emails: [
        {
          id: "e101",
          subject: "Miss you!",
          body: "Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes",
          isRead: false,
          isStar: false,
          sentAt: 1551133930593,
          removedAt: null,
          from: "momo@momo.com",
          to: "user@appsus.com",
        },
        {
          id: "e102",
          subject: "Miss you!",
          body: "Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes",
          isRead: false,
          isStar: false,
          sentAt: 1551133930594,
          removedAt: null,
          from: "momo@momo.com",
          to: "user@appsus.com",
        },
        {
          id: "e103",
          subject: "Miss you!",
          body: "Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes",
          isRead: false,
          isStar: false,
          sentAt: 1551133930595,
          removedAt: null,
          from: "momo@momo.com",
          to: "user@appsus.com",
        },
        {
          id: "e104",
          subject: "Miss you!",
          body: "Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes",
          isRead: false,
          isStar: false,
          sentAt: 1551133930593,
          removedAt: null,
          from: "momo@momo.com",
          to: "user@appsus.com",
        },
        {
          id: "e105",
          subject: "Miss you!",
          body: "Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes",
          isRead: false,
          isStar: false,
          sentAt: 1551133930594,
          removedAt: null,
          from: "momo@momo.com",
          to: "user@appsus.com",
        },
        {
          id: "e106",
          subject: "Miss you!",
          body: "Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes",
          isRead: false,
          isStar: false,
          sentAt: 1551133930595,
          removedAt: null,
          from: "momo@momo.com",
          to: "user@appsus.com",
        },
        {
          id: "e107",
          subject: "Miss you!",
          body: "Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes",
          isRead: false,
          isStar: false,
          sentAt: 1551133930593,
          removedAt: null,
          from: "momo@momo.com",
          to: "user@appsus.com",
        },
        {
          id: "e108",
          subject: "Miss you!",
          body: "Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes",
          isRead: false,
          isStar: false,
          sentAt: 1551133930594,
          removedAt: null,
          from: "momo@momo.com",
          to: "user@appsus.com",
        },
        {
          id: "e109",
          subject: "Miss you!",
          body: "Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes",
          isRead: false,
          isStar: false,
          sentAt: 1551133930595,
          removedAt: null,
          from: "momo@momo.com",
          to: "user@appsus.com",
        },
      ],
      filterBy: { title: "" },
    }
  },
  methods: {

    setFilterBy(filterBy) {
      this.filterBy = filterBy
    },
    showEmailDetails(emailId) {
      console.log(emailId);
      this.selectedEmail = this.emails.find(email => email.id === emailId)
      console.log(this.selectedEmail);
  },
    removeEmail(emailId) {
    mailService.remove(emailId)
        .then(() => {
            const idx = this.emails.findIndex(email => email.id === emailId)
            this.emails.splice(idx, 1)
            showSuccessMsg('Email removed')
        })
        .catch(err => {
            showErrorMsg('Email remove failed')
        })
    },
    markAsUnRead(emailId) {
      console.log(emailId);
      this.email = this.emails.find(email => email.id === emailId)
      console.log(this.email);
      this.email.isRead = false
    },

  },
  computed: {
    filteredEmails() {
      const regex = new RegExp(this.filterBy.title, "i")
      return this.emails.filter((email) => regex.test(email.title))
    },
    

  },

  components: {
    MailList,
    MailFilter,
    MailNav,
    MailDetails,
  },
}
