import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/async-storage.service.js"

const EMAIL_KEY = "mailDB"

_createEmails()

export const mailService = {
    getMail,
    save,
    remove,
    query,
    get,
}

function query(filterBy = {}) {
  return storageService.query(EMAIL_KEY)
      .then(emails => {
          if (filterBy.txt) {
              const regex = new RegExp(filterBy.txt, 'i')
              emails = emails.filter(email => regex.test(email.title))
          }
          // if (filterBy.minSpeed) {
          //     emails = emails.filter(car => car.maxSpeed >= filterBy.minSpeed)
          // }
          return emails
      })
}

function get(emailId) {
  return storageService.get(EMAIL_KEY, emailId)
      .then(_setNextPrevEmailId)
}

function _createEmails() {
  let emails = utilService.loadFromStorage(EMAIL_KEY)
  if (!emails || !emails.length) {
    emails = [ {
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
  ]

  utilService.saveToStorage(EMAIL_KEY, emails)
}
}

// function _createEmail(title, content = utilService.makeLorem()) {
//   const email = getMail(title, content)
//   email.id = utilService.makeId()
//   return email
// }

function getMail(title = "", content = "") {
  return { id: "", title, content }
}


function save(email) {
    if (email.id) {
        return storageService.put(EMAIL_KEY, email)
    } else {
        return storageService.post(EMAIL_KEY, email)
    }
}


function remove(emailId) {
  return storageService.remove(EMAIL_KEY, emailId)
}
