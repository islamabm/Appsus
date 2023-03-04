const { createApp } = Vue

import { router } from './routes.js'

import AppHeader from './cmps/AppHeader.js'
import AppFooter from './cmps/AppFooter.js'
import UserMsg from './cmps/UserMsg.js'
import AppBody from './cmps/AppBody.js'

const options = {
  template: `
        <!-- <section> -->
            <!-- <AppHeader /> -->
            <AppBody/>
            <RouterView />
            <!-- <AppFooter /> -->
            <UserMsg />
        <!-- </section> -->
    `,
  components: {
    AppHeader,
    AppFooter,
    UserMsg,
    AppBody,
  },
}

const app = createApp(options)
app.use(router)
app.mount('#app')
