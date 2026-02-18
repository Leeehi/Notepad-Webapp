export let notes = JSON.parse(localStorage.getItem('notes')) || [];

function saveNote() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

