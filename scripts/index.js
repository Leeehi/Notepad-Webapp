import { notes } from "../data/save.js";
import { addNote, removeNote, getNote, searchNotes } from "../data/save.js";

function Indexfunction() {
  let indexHTML = "";

  let toRenderNotes = notes;

  const url = new URL(window.location.href);
  const searchNote = url.searchParams.get("search");

  if (searchNote) {
    toRenderNotes = searchNotes(searchNote);
  }

  toRenderNotes.forEach((note) => {
    indexHTML += `
    <div class="sample-box js-sample-box" data-note-id="${note.id}" style="background-color: ${note.design.colorApplied};">
        <div class="title">${note.title}</div>
        <div class="note">${note.note}</div>
      <button class="delete-note js-delete-note" data-note-id="${note.id}"><img src="./images/icons/delete.svg" alt="delete"></button>
    </div>
    `;
  });

  if (toRenderNotes.length === 0) {
    indexHTML = `
    <div class="js-no-note">
      <p>No notes found for ${searchNote}</p>
    </div>`;
  }

  document.querySelector(".notes-grid").innerHTML = indexHTML;

  const button = document.querySelector(".create");
  const overlay = document.querySelector(".modal-overlay");
  const modal = document.querySelector(".modal");
  const titleBg = document.querySelector(".note-title");
  const noteBg = document.querySelector(".note-body");
  const btn = document.getElementById("color-btn");
  const menu = document.querySelector(".dropdown-content");
  const saveButton = document.querySelector(".save-note");
  const modalDelete = document.querySelector(".modal_delete");
  const modalOverlay = document.querySelector(".modal_overlay");
  const buttonNo = document.querySelector(".no");
  const buttonDelete = document.querySelector(".delete");

  button.addEventListener("click", () => {
    titleBg.value = "";
    noteBg.value = "";
    document.querySelector(".color-picked").textContent = "";
    [modal, titleBg, noteBg, btn].forEach(
      (bg) => (bg.style.backgroundColor = "white"),
    );
    delete saveButton.dataset.noteId;

    overlay.classList.add("visible");
    modal.classList.add("visible");
  });

  overlay.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal-overlay")) {
      overlay.classList.remove("visible");
      modal.classList.remove("visible");
      modalDelete.classList.remove("visible");

      let { noteId } = saveButton.dataset;

      const title = document.querySelector(".note-title").value;
      const note = document.querySelector(".note-body").value;
      const color = document.querySelector(".color-picked").textContent;

      addNote(title, note, color, noteId);
      location.reload();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" || event.key === "Esc") {
      overlay.classList.remove("visible");
      modal.classList.remove("visible");
      modalDelete.classList.remove("visible");
    }
  });

  document.addEventListener("keydown", (event) => {
  console.log(event.key);
});


  document.addEventListener("keydown", (event) => {
    if (event.altKey && event.key === "n") {
      event.preventDefault();
      // console.log("Hi");
      titleBg.value = "";
      noteBg.value = "";
      document.querySelector(".color-picked").textContent = "";
      [modal, titleBg, noteBg, btn].forEach(
        (bg) => (bg.style.backgroundColor = "white"),
      );
      delete saveButton.dataset.noteId;

      overlay.classList.add("visible");
      modal.classList.add("visible");
    }
  });

  document.querySelectorAll(".color-swatch").forEach((swatch) => {
    swatch.addEventListener("click", function () {
      let { color } = swatch.dataset;
      btn.style.backgroundColor = color;
      modal.style.backgroundColor = color;
      titleBg.style.backgroundColor = color;
      noteBg.style.backgroundColor = color;
      document.querySelector(".color-picked").textContent = color;
      // apply chosenColor to your note here
    });
  });

  btn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("color-swatch") &&
      menu.style.display === "block"
    ) {
      menu.style.display = "none";
    }
    if (!e.target.closest(".dropdown") && menu.style.display === "block") {
      menu.style.display = "none";
    }
  });

  saveButton.addEventListener("click", () => {
    let { noteId } = saveButton.dataset;

    const title = document.querySelector(".note-title").value;
    const note = document.querySelector(".note-body").value;
    const color = document.querySelector(".color-picked").textContent;

    addNote(title, note, color, noteId);
    overlay.classList.remove("visible");
    modal.classList.remove("visible");
    // Indexfunction();
    location.reload();
  });

  let currentNoteId = null;

  document.querySelectorAll(".js-delete-note").forEach((button) => {
    button.addEventListener("click", (event) => {
      let { noteId } = button.dataset;

      event.stopPropagation();
      currentNoteId = noteId;
      modalDelete.classList.add("visible");
      overlay.classList.add("visible");
      // modalOverlay.classList.add("visible");
    });
  });

  buttonNo.addEventListener("click", () => {
    modalDelete.classList.remove("visible");
    overlay.classList.remove("visible");
    // modalOverlay.classList.remove("visible");
    currentNoteId = null;
  });

  buttonDelete.addEventListener("click", () => {
    removeNote(currentNoteId);
    currentNoteId = null;
    modalDelete.classList.remove("visible");
    overlay.classList.remove("visible");
    Indexfunction();
    // modalOverlay.classList.remove("visible");
  });

  document.querySelectorAll(".js-sample-box").forEach((noteBox) => {
    noteBox.addEventListener("click", () => {
      let { noteId } = noteBox.dataset;

      let note = getNote(noteId);

      if (note) {
        document.querySelector(".note-title").value = note.title;
        document.querySelector(".note-body").value = note.note;
        titleBg.style.backgroundColor = note.design.colorApplied;
        noteBg.style.backgroundColor = note.design.colorApplied;
        btn.style.backgroundColor = note.design.colorApplied;
        modal.style.backgroundColor = note.design.colorApplied;
        document.querySelector(".color-picked").textContent =
          note.design.colorApplied;
        saveButton.dataset.noteId = note.id;

        overlay.classList.add("visible");
        modal.classList.add("visible");
      }
    });
  });
}

Indexfunction();
