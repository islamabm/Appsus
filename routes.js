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
<<<<<<< HEAD
    {
      path: '/',
      component: AppBody,
    },
=======
>>>>>>> 49ed39dc3d00c230233c1ae256abb62ff1ef5241
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
<<<<<<< HEAD

=======
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
>>>>>>> 49ed39dc3d00c230233c1ae256abb62ff1ef5241
  ],
}

export const router = createRouter(routerOptions)
