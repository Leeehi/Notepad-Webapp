export let notes = JSON.parse(localStorage.getItem('notes')) || 

[
  {
    id: "c3d4e5f6-3333-4444-5555-666677778888",
    title: "Coding Task",
    note: "Finish implementing the responsive grid layout for the notes app.",
    design: {
      colorApplied: "var(--warm-terracotta)",
      fontApplied: "Courier New",
    }
  },
  {
    id: "d4e5f6g7-9999-aaaa-bbbb-ccccdddd1111",
    title: "Workout Plan",
    note: "30 minutes cardio, 20 minutes strength training, 10 minutes stretching.",
    design: {
      colorApplied: "var(--dark-teal)",
      fontApplied: "Georgia",
    }
  }
];

function saveNote() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

export function addNote(Newtitle, Newnote, Newcolor, noteId) {

  if (!Newnote || Newnote.trim() === "") {
      return;
    }

  if (noteId) {

    const matchedNote = notes.find(note => note.id === noteId);

    if (matchedNote) {
      matchedNote.title = Newtitle;
      matchedNote.note = Newnote;
      matchedNote.design.colorApplied = Newcolor || "white";
      matchedNote.design.fontApplied = "Arial";
    }

  } else {
    const id = crypto.randomUUID();
    notes.push({
      id,
      title: Newtitle,
      note: Newnote,
      design: {
        colorApplied: Newcolor || "white",
        fontApplied: "Arial",
      }
    })
  }

  saveNote();
}

export function removeNote(id) {

  let newNotes = [];

  notes.forEach( (note) => {
    if (note.id !== id) {
      newNotes.push(note);
    }
  })

  notes = newNotes;
  saveNote();
}

export function getNote(noteId) {

  let matchedNote = {};

  notes.forEach( (note) => {

    if (note.id === noteId) {
      matchedNote = note;
    }
  })

  return matchedNote;
}

export function searchNotes(keyword) {

  let matchedNote = [];

  notes.forEach( (note) => {

    const matchingTitle = note.title.toLowerCase().includes(keyword.toLowerCase());

    const matchingNote = note.note.toLowerCase().includes(keyword.toLowerCase());

    if (matchingTitle || matchingNote) {
      matchedNote.push(note);
    }
  })

  return matchedNote;
}