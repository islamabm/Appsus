import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'
import NoteIndex from './apps/keep/pages/NoteIndex.js'
import EmailIndex, {EmailSent} from './apps/mail/pages/EmailIndex.js'



const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/about',
      component: AboutUs,
    },
    {
      path: '/gmail',
      component: EmailIndex,
      children: [
        {
            path: '/sent',
            component: EmailSent
        },
    ]
    },
    {
      path: '/keep',
      component: NoteIndex,
    },
  ],
}

export const router = createRouter(routerOptions)
