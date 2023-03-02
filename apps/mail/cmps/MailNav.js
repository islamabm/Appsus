export default {
    template: `
        <nav class="mail-nav">
            <li @click="openCreateModal">✏</li>
            <RouterLink to="/sent"><li><a>Email sent</a></li></RouterLink>
		    <li><a href="#">Compose</a></li>
		    <li><a href="#">Projects</a></li>
		    <li><a href="#">Listings</a></li>
		    <li><a href="#">Staff Members</a></li>
		    <li><a href="#">Sometag</a></li>
        </nav>
    `,
    methods: {
        openCreateModal(){
            this.$emit('openCreateModal')
        }
    },

}