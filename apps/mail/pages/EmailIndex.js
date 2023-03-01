import MailList from '../cmps/MailList.js'
import MailFilter from '../cmps/MailFilter.js'
import MailNav from '../cmps/MailNav.js'
import MailDetails from './MailDetails.js'

export default {
  template: `
        <header class="mail-header">
            <button>➕</button>
            <h1>misterEmail</h1>

            <MailFilter @filter="setFilterBy"/>
        </header>
        <main class="mail-main-content">
          <MailNav/>  

          <MailList
          v-if="!selectedEmail"
          :emails="filteredEmails"
          @show-details="showEmailDetails"/>
          
        </main> 
        
        <MailDetails
         v-if="selectedEmail"
         :email="selectedEmail" 
         @hide-details="selectedEmail = null"
         />
    
    `,
  data() {
    return {
      selectedEmail: null,
      emails: [
        {
          id: 'e101',
          subject: 'Miss you!',
          body: 'Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes',
          isRead: false,
          isStar: false,
          sentAt: 1551133930593,
          removedAt: null,
          from: 'momo@momo.com',
          to: 'user@appsus.com',
        },
        {
          id: 'e102',
          subject: 'Miss you!',
          body: 'Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes',
          isRead: false,
          isStar: false,
          sentAt: 1551133930594,
          removedAt: null,
          from: 'momo@momo.com',
          to: 'user@appsus.com',
        },
        {
          id: 'e103',
          subject: 'Miss you!',
          body: 'Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes Would love to catch up sometimes',
          isRead: false,
          isStar: false,
          sentAt: 1551133930595,
          removedAt: null,
          from: 'momo@momo.com',
          to: 'user@appsus.com',
        },
      ],
      filterBy: { title: '' },
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
  },
  computed: {
    filteredEmails() {
      const regex = new RegExp(this.filterBy.title, 'i')
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

export const EmailSent = {
  template: `<section>
        <h3>Our Services are incredible!</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis enim rem porro delectus. Quos expedita ipsam repellendus voluptas quas, nam ea eligendi veniam ullam, modi impedit eveniet quia quaerat molestias?</p>
    </section>`,
}
