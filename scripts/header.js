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
      <img class="mode" src="./images/icons/darkmode_${modes}.svg" alt="darkmode_off">
      <img src="./images/icons/profile.png" alt="profile">
      <div>Hello User!</div>
    </div>
  `;

  document.querySelector('.heade-content').innerHTML = HeaderHTML;

  if(modes === "on") {
    document.querySelector('body').style.backgroundColor = '#101212';
    document.querySelector('header').style.backgroundColor = '#101212';
    document.querySelector('header').style.color = 'white';
    document.querySelector('header a').style.color = 'white';

  } else {
    document.querySelector('body').style.backgroundColor = '#EDF6F9';
    document.querySelector('header').style.backgroundColor = '#EDF6F9';
    document.querySelector('header').style.color = 'black';
    document.querySelector('header a').style.color = 'black';

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
}

HeaderFunction();
