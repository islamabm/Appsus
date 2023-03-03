'use strict'

// import { utilService } from '../services/util.service.js'
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'

_createNotes()

export const noteService = {
  query,
  get,
  remove,
  save,
  // getEmptyNote,
  getEmptyTxtNote,
  getEmptyImgNote,
  getEmptyTodosNote,
}

function query(filterBy = {}) {
  return storageService.query(NOTE_KEY).then((notes) => {
    // if (filterBy.txt) {
    //   const regex = new RegExp(filterBy.txt, 'i')
    //   cars = cars.filter((car) => regex.test(car.vendor))
    // }
    // if (filterBy.minSpeed) {
    //     notes = notes.filter((note) => note.maxSpeed >= filterBy.minSpeed)
    // }
    return notes
  })
}

function get(noteId) {
  return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
  return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
  if (note.id) {
    return storageService.put(NOTE_KEY, note)
  } else {
    return storageService.post(NOTE_KEY, note)
  }
}
// id: utilService.makeId(),
// createdAt: Date.now(),
// type: 'NoteTxt',
// isPinned: true,
// style: {
//   backgroundColor: '#00d',
// },
// info: {
//   txt: 'Fullstack Me Baby!',
// },
function getEmptyTxtNote(txt = '') {
  return {
    id: utilService.makeId(),
    createdAt: Date.now(),
    type: 'NoteTxt',
    isPinned: true,
    style: {
      backgroundColor: 'pink',
    },
    info: {
      txt: txt,
    },
  }
}
function getEmptyImgNote(url = '') {
  return {
    id: utilService.makeId(),
    createdAt: Date.now(),
    type: 'NoteImg',
    isPinned: true,
    style: {
      backgroundColor: '#00d',
    },
    info: {
      url: url,
      title: 'Bobi and Me',
    },
  }
}
function getEmptyTodosNote(todos = []) {
  return {
    id: utilService.makeId(),
    createdAt: Date.now(),
    type: 'NoteTodos',
    isPinned: true,
    info: {
      // title: 'Get my stuff together',
      todos: todos,
    },
  }
}
// function getEmptyTodosNote(todos = '') {
//   return {
//     id: utilService.makeId(),
//     createdAt: Date.now(),
//     type: 'NoteTodos',
//     isPinned: true,
//     info: {
//       title: 'Get my stuff together',
//       todos: [
//         { txt: 'Driving license', doneAt: null },
//         { txt: 'Coding power', doneAt: 187111111 },
//       ],
//     },
//   }
// }

// function _createNotes() {
//   let notes = utilService.loadFromStorage(NOTE_KEY)
//   if (!notes || !notes.length) {
//     notes = []
//     notes.push(_createNote('txt', 300))
//     notes.push(_createNote('canvas', 120))
//     notes.push(_createNote('audio', 100))
//     notes.push(_createNote('video', 150))
//     utilService.saveToStorage(NOTE_KEY, notes)
//   }
// }

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTE_KEY)
  if (!notes || !notes.length) {
    notes = []
    // notes.push(_createTxtNote())
    // notes.push(_createTxtNote())
    // notes.push(_createTxtNote())
    // notes.push(_createTxtNote())
    // notes.push(_createTxtNote())
    // notes.push(_createTxtNote())
    notes.push(_createTxtNote())
    notes.push(_createTxtNote())
    notes.push(_createTodosNote())
    notes.push(_createTodosNote())
    notes.push(_createTxtNote())
    notes.push(_createTxtNote())
    notes.push(_createImgNotes())
    notes.push(_createVideoNote())
    utilService.saveToStorage(NOTE_KEY, notes)
  }
}

// function _createNote(title, importance = 250) {
//   const note = getEmptyNote(title, importance)
//   note.id = utilService.makeId()
//   return note
// }

function _createImgNotes() {
  return {
    id: utilService.makeId(),
    createdAt: Date.now(),
    type: 'NoteImg',
    isPinned: true,
    style: {
      backgroundColor: '#00d',
    },
    info: {
      url: 'https://sb.kaleidousercontent.com/67418/992x558/7632960ff9/people.png',
      title: 'Bobi and Me',
    },
  }
}

function _createTodosNote() {
  return {
    id: utilService.makeId(),
    createdAt: Date.now(),
    type: 'NoteTodos',
    isPinned: true,
    info: {
      title: 'Get my stuff together',
      todos: [
        { txt: 'Driving license', doneAt: null },
        { txt: 'Coding power', doneAt: 187111111 },
      ],
    },
  }
}

function _createTxtNote() {
  // const note ={

  //   note.id = utilService.makeId(),
  // }

  return {
    id: utilService.makeId(),
    createdAt: Date.now(),
    type: 'NoteTxt',
    isPinned: true,
    style: {
      backgroundColor: 'pink',
    },
    info: {
      txt: 'Fullstack Me Baby!',
    },
  }
}

function _createVideoNote() {
  return {
    id: utilService.makeId(),
    createdAt: Date.now(),
    type: 'NoteVideo',
    isPinned: true,
    style: {
      backgroundColor: '#00d',
    },
    info: {
      url: 'https://www.google.com/search?q=video+url&sxsrf=AJOqlzVUy_6QWyr4Il6irPLaB_R15h2R-A%3A1677840423825&source=hp&ei=J9ABZPG8MIubgQacr7ToAg&iflsig=AK50M_UAAAAAZAHeN-9NHzjNdqmNHgsy--UiBh0tZtep&ved=0ahUKEwix7MzTyr_9AhWLTcAKHZwXDS0Q4dUDCAg&uact=5&oq=video+url&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIIxDqAhAnOgQIIxAnOggILhCABBCxAzoOCC4QgAQQsQMQxwEQ0QM6EQguEIAEELEDEIMBEMcBENEDOggIABCABBCxAzoLCAAQgAQQsQMQgwE6CwguEIAEEMcBENEDOgQIABADOgcIABCABBAKOgoIABCABBCxAxAKOg0IABCABBCxAxCDARAKULASWIAmYOLCAWgBcAB4AIABkwGIAckJkgEDMC45mAEAoAEBsAEK&sclient=gws-wiz#fpstate=ive&vld=cid:1af8599b,vid:zWh3CShX_do',
      title: 'loli and me',
    },
  }
}
