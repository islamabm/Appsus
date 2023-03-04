'use strict'

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'

_createNotes()

export const noteService = {
  query,
  get,
  remove,
  save,
  getEmptyTxtNote,
  getEmptyImgNote,
  getEmptyTodosNote,
}

function query(filterBy = {}) {
  return storageService.query(NOTE_KEY).then((notes) => {
    return notes
  })
}

function get(noteId) {
  return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
  return storageService.remove(NOTE_KEY, noteId)
}

// function save(note) {
//   if (note.id) {
//     return storageService.put(NOTE_KEY, note)
//   } else {
//     return storageService.post(NOTE_KEY, note)
//   }
// }
function save(note) {
  return note.id
    ? storageService.put(NOTE_KEY, note)
    : storageService.post(NOTE_KEY, note)
}

function getEmptyTxtNote(txt = '') {
  return {
    // id: utilService.makeId(),
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
      backgroundColor: '#FF6F61',
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
      todos: todos,
    },
  }
}

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTE_KEY)
  if (!notes || !notes.length) {
    notes = []
    notes.push(_createTxtNote())
    notes.push(_createTodosNote())
    notes.push(_createTodosNote())
    notes.push(_createImgNotes())
    notes.push(_createVideoNote())
    notes.push(_createAudioNote())
    utilService.saveToStorage(NOTE_KEY, notes)
  }
}

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
    style: {
      backgroundColor: 'yellow',
    },
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
  return {
    // id: utilService.makeId(),
    createdAt: Date.now(),
    // updatedAt: null,
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
      backgroundColor: '#F44336',
    },
    info: {
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      title: 'loli and me',
    },
  }
}

function _createAudioNote() {
  return {
    id: utilService.makeId(),
    createdAt: Date.now(),
    type: 'NoteAudio',
    isPinned: true,
    style: {
      backgroundColor: '#00BCD4',
    },
    info: {
      url: 'http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg',
      title: 'I Love Audio',
    },
  }
}
