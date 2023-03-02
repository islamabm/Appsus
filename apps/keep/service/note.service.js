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
  return { id: utilService.makeId(), txt }
}

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
    notes.push(_createTxtNote())
    notes.push(_createTxtNote())
    notes.push(_createTxtNote())
    notes.push(_createTxtNote())
    notes.push(_createTxtNote())
    notes.push(_createTxtNote())
    notes.push(_createTxtNote())
    notes.push(_createTxtNote())
    notes.push(_createTodosNote())
    notes.push(_createTodosNote())
    notes.push(_createTxtNote())
    notes.push(_createTxtNote())
    notes.push(_createImgNotes())
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
      backgroundColor: '#00d',
    },
    info: {
      txt: 'Fullstack Me Baby!',
    },
  }
}
