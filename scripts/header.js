import { modes, turnNightMode } from "../data/save.js";


function HeaderFunction() {

  let HeaderHTML = "";

  HeaderHTML += `
    <div class="left-side">
      <!-- <img src="./images/icons/hamburger.svg" alt="menu"> -->
        <a href="index.html">
          Notepad
        </a>
    </div>
    <div class="middle">
      <input type="text" class="search-input js-search-input" placeholder="Search">
      <!-- <img src="./images/icons/search.svg" alt="search"> -->
    </div>
    <div class="right-side">
      <img class="mode" src="./images/icons/darkmode_${modes}.svg" alt="darkmode_${modes}">
      <img src="./images/icons/profile.png" alt="profile">
      <div>Hello User!</div>
    </div>
  `;

  document.querySelector('.header-content').innerHTML = HeaderHTML;

  if(modes === "on") {
    document.querySelector('body').classList.add('dark-mode');
    document.querySelector('.header-content').classList.add('dark-mode');
  } else {
    document.querySelector('body').classList.remove('dark-mode');
    document.querySelector('.header-content').classList.remove('dark-mode');
  }

  const mode = document.querySelector('.mode');

  document.querySelector('.js-search-input').addEventListener( 'keypress', (event) => {

    if(event.key === "Enter") {
      const search = event.target.value;
      window.location.href = `index.html?search=${encodeURIComponent(search)}`;
    }
  })

  mode.addEventListener('click', () => {
    turnNightMode();
    HeaderFunction();
  })

  function Testing() {

    for(let i = 0; i < 50; i++) {
      // console.log(i % 3 === 0 ? "Koo" : `i`);
      if(i % 3 === 0 && i % 5 === 0) {
        console.log("KooApps");
      } else if (i % 3 === 0) {
        console.log("Koo");
      } else if (i % 5 === 0) {
        console.log("Apps");
      }else {
        console.log(`i`);
      }
    }
  }

  // Testing();
}

HeaderFunction();
