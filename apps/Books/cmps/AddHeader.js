export default {
  template: `
          <header class="app-header">
              <h1>Islam Books Store</h1>
              <nav class="main-menu">
                <RouterLink to="/" class="header-link">Home</RouterLink>
                <RouterLink to="/books" class="header-link">our Books</RouterLink>
                <RouterLink to="/books/bookAdd">Book Add</RouterLink>
              </nav>
          </header>
      `,
  methods: {
    setRoute(route) {
      this.$emit('set-route', route)
    },
  },
}
