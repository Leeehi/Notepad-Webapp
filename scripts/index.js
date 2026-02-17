import { notes } from "../data/notes.js";

function Indexfunction() {
  // const button = document.querySelector('.create');

  // button.addEventListener( 'click', () => {
  //   console.log(`Hi Lehi!`);
  // })

  let indexHTML = '';

  notes.forEach( (notes) => {
    indexHTML += `
    <a href="index.html?id=${notes.id}">
      <div class="sample-box" style="background-color: ${notes.design.colorApplied};">
        <div class="title">${notes.title}</div>
        <div class="note">${notes.note}</div>
      </div>
    </a>
    `;
  })

  document.querySelector('.notes-grid').innerHTML = indexHTML;
}

Indexfunction();