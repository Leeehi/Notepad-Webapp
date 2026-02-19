export let notes = JSON.parse(localStorage.getItem('notes')) || [];

function saveNote() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

export function addNote(title, note, color) {
  const id = crypto.randomUUID();
  notes.push({
    id,
    title,
    note,
    design: {
      colorApplied: color,
      fontApplied: "Arial",
    }
  })

  saveNote();
}