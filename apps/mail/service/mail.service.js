import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const EMAIL_KEY = "mailDB"
const TRASH_KEY = "trashDB"

_createEmails()

export const mailService = {
  getMail,
  save,
  remove,
  query,
  get,
  saveTrash,
}

function query(filterBy = {}) {
  return storageService.query(EMAIL_KEY).then((emails) => {
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, "i")
      emails = emails.filter((email) => regex.test(email.title))
    }
    // if (filterBy.minSpeed) {
    //     emails = emails.filter(car => car.maxSpeed >= filterBy.minSpeed)
    // }
    return emails
  })
}

function get(emailId) {
  return storageService.get(EMAIL_KEY, emailId).then(_setNextPrevEmailId)
}

function _createEmails() {
  let emails = utilService.loadFromStorage(EMAIL_KEY)
  if (!emails || !emails.length) {
    let date = new Date
    const month = 'Mar'
    const day = date.getDay()
  
    emails = [
      {
      id: utilService.makeId(),
      subject: 'Hi! where are you?',
      body: 'I want to see youuuuuuu, where you at? aloooooooooooooo',
      isRead: false,
      isStar: false,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'inbox',
      },
      {
      id: utilService.makeId(),
      subject: 'My name is Son Goku',
      body: 'I want to chellenge you for a combat ya efes',
      isRead: false,
      isStar: false,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'trash',
      },
      {
      id: utilService.makeId(),
      subject: 'Peter Griffin',
      body: 'I drove drunk and i need you to get me out from prison',
      isRead: false,
      isStar: false,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'inbox',
      },
      {
      id: utilService.makeId(),
      subject: 'alo alo alo alo',
      body: 'Islam is the gever!',
      isRead: false,
      isStar: false,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'trash',
      },
      {
      id: utilService.makeId(),
      subject: 'rick',
      body: 'Hi Morty! i need to take you to an adventure',
      isRead: false,
      isStar: false,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'inbox',
      },
      {
      id: utilService.makeId(),
      subject: 'hi teacher',
      body: 'Hi Denis! my dog ate my homework, i told Adam already',
      isRead: false,
      isStar: false,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'sent',
      },
      {
      id: utilService.makeId(),
      subject: 'nunu',
      body: 'alo? eifo ata ? ata po? polopolopopopo',
      isRead: false,
      isStar: false,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'inbox',
      },
      {
      id: utilService.makeId(),
      subject: utilService.makeLorem(2),
      body: utilService.makeLorem(),
      isRead: false,
      isStar: false,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'sent',
      },
      {
      id: utilService.makeId(),
      subject: utilService.makeLorem(2),
      body: utilService.makeLorem(),
      isRead: false,
      isStar: false,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'trash',
      },
      {
      id: utilService.makeId(),
      subject: utilService.makeLorem(2),
      body: utilService.makeLorem(),
      isRead: false,
      isStar: true,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'starred',
      },
      {
      id: utilService.makeId(),
      subject: utilService.makeLorem(2),
      body: utilService.makeLorem(),
      isRead: false,
      isStar: true,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'starred',
      },
      {
      id: utilService.makeId(),
      subject: utilService.makeLorem(2),
      body: utilService.makeLorem(),
      isRead: false,
      isStar: false,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'inbox',
      },
      {
      id: utilService.makeId(),
      subject: utilService.makeLorem(2),
      body: utilService.makeLorem(),
      isRead: false,
      isStar: false,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'inbox',
      },
      {
      id: utilService.makeId(),
      subject: utilService.makeLorem(2),
      body: utilService.makeLorem(),
      isRead: false,
      isStar: false,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'inbox',
      },
      {
      id: utilService.makeId(),
      subject: utilService.makeLorem(2),
      body: utilService.makeLorem(),
      isRead: false,
      isStar: false,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'drafts',
      },
      {
      id: utilService.makeId(),
      subject: utilService.makeLorem(2),
      body: utilService.makeLorem(),
      isRead: false,
      isStar: false,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'inbox',
      },
      {
      id: utilService.makeId(),
      subject: utilService.makeLorem(2),
      body: utilService.makeLorem(),
      isRead: false,
      isStar: false,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'sent',
      },
      {
      id: utilService.makeId(),
      subject: utilService.makeLorem(2),
      body: utilService.makeLorem(),
      isRead: false,
      isStar: false,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'inbox',
      },
      {
      id: utilService.makeId(),
      subject: utilService.makeLorem(2),
      body: utilService.makeLorem(),
      isRead: false,
      isStar: false,
      sentAt: month + " " + day,
      removedAt: null,
      from: 'momo@momo.com',
      to: 'user@appsus.com',
      status: 'inbox',
      },
    ]
    
    utilService.saveToStorage(EMAIL_KEY, emails)
  }
}

// function _createEmail() {
//   let date = new Date()
//   const month = "Mar"
//   const day = date.getDay()

//   return {
//     id: utilService.makeId(),
//     subject: utilService.makeLorem(2),
//     body: utilService.makeLorem(),
//     isRead: false,
//     isStar: false,
//     sentAt: month + " " + day,
//     removedAt: null,
//     from: 'momo@momo.com',
//     to: 'user@appsus.com',
//   }
// }

function getMail(title = '', content = '') {
  return { id: '', title, content }
}

function save(email) {
  if (email.id) {
    return storageService.put(EMAIL_KEY, email)
  } else {
    return storageService.post(EMAIL_KEY, email)
  }
}
function saveTrash(email) {
  if (email.id) {
    return storageService.put(TRASH_KEY, email)
  } else {
    return storageService.post(TRASH_KEY, email)
  }
}

function remove(emailId) {
  return storageService.remove(EMAIL_KEY, emailId)
}
