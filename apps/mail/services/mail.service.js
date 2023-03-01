'use strict'

import { utilService } from '../services/util.service.js'
import { storageService } from '../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'

_createCars()

export const noteService = {
  query,
  get,
  remove,
  save,
  getEmptyNote,
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

function getEmptyNote(title = '', importance = 250) {
  return { id: '', title, importance }
}

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTE_KEY)
  if (!notes || !notes.length) {
    notes = []
    notes.push(_createNote('audu', 300))
    notes.push(_createNote('fiak', 120))
    notes.push(_createNote('subali', 100))
    notes.push(_createNote('mitsu', 150))
    utilService.saveToStorage(NOTE_KEY, notes)
  }
}

function _createNote(title, importance = 250) {
  const note = getEmptyNote(title, importance)
  note.id = utilService.makeId()
  return note
}
