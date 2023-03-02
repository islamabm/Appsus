import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const EMAIL_KEY = 'mailDB'

_createEmails()

export const mailService = {
  getMail,
  save,
  remove,
  query,
  get,
}

function query(filterBy = {}) {
  return storageService.query(EMAIL_KEY).then((emails) => {
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
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
    emails = []
    for (var i = 0; i <= 12; i++) {
      emails.push(_createEmail())
    }
    utilService.saveToStorage(EMAIL_KEY, emails)
  }
}

function _createEmail() {
  return {
    id: utilService.makeId(),
    subject: utilService.makeLorem(2),
    body: utilService.makeLorem(),
    isRead: false,
    isStar: false,
    sentAt: Date.now().getDay(),
    removedAt: null,
    from: 'momo@momo.com',
    to: 'user@appsus.com',
  }
}

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

function remove(emailId) {
  return storageService.remove(EMAIL_KEY, emailId)
}
