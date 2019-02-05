/* global require */
import 'normalize.css';
import './css/style.css';
import smoothscroll from 'smoothscroll-polyfill';

function scrollToSection(e, frag){
    e.preventDefault();
    document.querySelector(frag).scrollIntoView({behavior: 'smooth', block: 'start'});
}

function insertSection(r, key){
    var section = document.createElement('section'),
        id = key.match(/\.\/(\d{2})/)[1],
        nav = document.querySelector('.primary-navigation'),
        navItem = document.createElement('a'),
        frag = `#anchor-${ id }`;
        
        navItem.classList.add('tablink');
    
    // section

    section.id = id;
    section.classList.add('section','tabcontent');
    section.innerHTML = r(key);
    section.insertAdjacentHTML('afterbegin', `<a class="anchor" id="anchor-${ id }"></a>`)
    document.querySelector('main').appendChild(section);

    // nav
    navItem.innerHTML = section.querySelector('h2').innerHTML;
    navItem.href = frag;
    navItem.addEventListener('click', function(e){
        scrollToSection(e, frag);
    });
    nav.appendChild(navItem);

}


function importAll(r) {
  r.keys().forEach(key => {
    console.log(key);
    insertSection(r,key);
    //insertNavItem(r,key);
  });
  
}

smoothscroll.polyfill();
importAll(require.context('./pages/', true, /\.html$/));
