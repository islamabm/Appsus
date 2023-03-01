import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/async-storage.service.js"

const EMAIL_KEY = "mailDB"

_createEmails

export const mailService = {
    getMail,
    save,
}

function _createEmails() {
  let emails = utilService.loadFromStorage(EMAIL_KEY)
  if (!emails || !emails.length) {
    emails = []
    emails.push(_createEmail("audu"))
    emails.push(_createEmail("fiak"))
    emails.push(_createEmail("subali"))
    emails.push(_createEmail("mitsu"))
    utilService.saveToStorage(EMAIL_KEY, emails)
  }
}

function _createEmail(title, content = utilService.makeLorem()) {
  const email = getMail(title, content)
  email.id = utilService.makeId()
  return email
}

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