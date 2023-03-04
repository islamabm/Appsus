// import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'
import AppBody from './cmps/AppBody.js'
import NoteIndex from './apps/keep/pages/NoteIndex.js'
import EmailIndex from './apps/mail/pages/EmailIndex.js'
import mailDetails from './apps/mail/pages/MailDetails.js'
import BookIndex from './apps/Books/pages/BookIndex.js'
import BookDetails from './apps/Books/pages/BookDetails.js'
import BookEdit from './apps/Books/pages/BookEdit.js'
import BookAdd from './apps/Books/pages/BookAdd.js'

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
  history: createWebHashHistory(),
  routes: [
    {
      path: '/about',
      component: AboutUs,
    },
    {
      path: '/gmail',
      component: EmailIndex,
      children: [
        {
          path: '/details/:id',
          component: mailDetails,
        },
      ],
    },
    {
      path: '/keep',
      component: NoteIndex,
    },
    {
      path: '/body',
      component: AppBody,
    },
    {
      path: '/books',
      component: BookIndex,
    },
    {
      path: '/books/:bookId',
      component: BookDetails,
    },
    {
      path: '/books/edit/:bookId?',
      component: BookEdit,
    },
    {
      path: '/books/bookAdd',
      component: BookAdd,
    },
    // Last fallback if no route was matched:
  ],
}

export const router = createRouter(routerOptions)
