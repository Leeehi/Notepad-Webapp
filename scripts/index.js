import { notes } from "../data/save.js";

function Indexfunction() {
  // const button = document.quxerySelector('.create');

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

  // const button = document.querySelector('.create');
  // const overlay = document.querySelector('.modal-overlay');
  // const modal = document.querySelector('.modal');
  
  // button.addEventListener( 'click', () => {
  //   overlay.classList.add('visible');
  //   modal.classList.add('visible');
  // })


  // overlay.addEventListener( 'click', function(e) {
  //   if(e.target.classList.contains('modal-overlay')) {
  //     overlay.classList.remove('visible');
  //     modal.classList.remove('visible');
  //   }
  // })

  // document.addEventListener('keydown', (event) => {
  //   if (event.key === "Escape" || event.key === "Esc") {
  //     overlay.classList.remove('visible');
  //     modal.classList.remove('visible');
  //   }
  // })

  const modalBg = document.querySelector('.modal');
  const titleBg = document.querySelector('.note-title');
  const noteBg = document.querySelector('.note-body');

  document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', function() {
      let { color } = swatch.dataset;
      document.getElementById('color-btn').style.backgroundColor = color;
      modalBg.style.backgroundColor = color;
      titleBg.style.backgroundColor = color;
      noteBg.style.backgroundColor = color;
      // apply chosenColor to your note here
    });
  });

  const btn = document.getElementById('color-btn');
  const menu = document.querySelector('.dropdown-content');
  
  btn.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener( 'click', function(e) {
    if(e.target.classList.contains('color-swatch') && menu.style.display === 'block') {
      menu.style.display = 'none';
    }
    if (!e.target.closest('.dropdown') && menu.style.display === 'block') {
      menu.style.display = 'none';
    }
  })

}

Indexfunction();