const fs = require('fs')

const listNotes = () => {
    console.log('Your notes')
    const notes = loadNotes()
    notes.forEach(note => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find(note => note.title === title)   
    if(note) {
        console.log(note.title)
        console.log(note.body)
    } else {
        console.log('Note not found!')
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    debugger

    //console.log('duplicateNotes: ', duplicateNotes)
    
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        console.log('New note added!')
        saveNotes(notes)
    } else {    
        console.log('Note title taken!')    
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)
    if(notes.length > notesToKeep.length) {
        console.log('Note removed!')
    }
    else {
        console.log('No note found!')
    }
    saveNotes(notesToKeep)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)        
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}