import MailList from '../cmps/MailList.js'
import MailFilter from '../cmps/MailFilter.js'

export default {
    template: `
        <header class="mail-header">
            <button>➕</button>
            <h1>misterEmail</h1>

            <MailFilter @filter="setFilterBy"/>
        </header>
        
        <main class="mail-main-content">
            
            <nav class="mail-nav">
            <RouterLink to="/sent"><li><a>Email sent</a></li></RouterLink>
		    <li><a href="#">About Us</a></li>
		    <li><a href="#">Projects</a></li>
		    <li><a href="#">Listings</a></li>
		    <li><a href="#">Staff Members</a></li>
		    <li><a href="#">Sometag</a></li>
		    <li><a href="#">Another Page</a></li>
		    <li><a href="#">Lorem Ipsum</a></li>
		    <li><a href="#">Last Page(maybe)</a></li>
        </nav>

        <MailList :emails="filteredEmails"/>
        
    </main> 
    
    `,
    data() {
        return {
            emails: [
                {id: 1,title: 'alo',content: 'sadsadsad'},
                {id: 2,title: 'banana',content: 'sadsadsad1'},
                {id: 3,title: 'david',content: 'sadsadsad2'},
                {id: 4,title: 'gamba',content: 'sadsadsad3'},
            ],
           filterBy: {title: ''},    
        }
    },
    methods: {
        setFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredEmails() {
            const regex = new RegExp(this.filterBy.title, 'i')
            return this.emails.filter(email => regex.test(email.title))
        }
    },
    components: {
        MailList,
        MailFilter,
    },
}

export const EmailSent = {
    template: `<section>
        <h3>Our Services are incredible!</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis enim rem porro delectus. Quos expedita ipsam repellendus voluptas quas, nam ea eligendi veniam ullam, modi impedit eveniet quia quaerat molestias?</p>
    </section>`
}
