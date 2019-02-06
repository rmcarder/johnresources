/* global require */
import 'normalize.css';
import './css/style.css';
import smoothscroll from 'smoothscroll-polyfill';

var previousPositions = {};

function observerCallback(entries){
    
    entries.forEach(entry => {
    var direction;
    if ( previousPositions[entry.target.id] === null || previousPositions[entry.target.id] > entry.boundingClientRect.y ){
        direction = 'up';
    } else {
        direction = 'down';
    }

    previousPositions[entry.target.id] = entry.boundingClientRect.height === 0 ? null : entry.boundingClientRect.y;
    console.log(previousPositions, entry, entry.isIntersecting, direction)
        if ( (!entry.isIntersecting && direction === 'up') || (entry.isIntersecting && direction === 'down') ){ // moving up out of viewport
            let currentActive = document.querySelector('a.tablink.active');
            let newActive = document.querySelector('a[href="#' + entry.target.id + '"');
            if ( currentActive !== newActive ){
                currentActive.classList.remove('active');
            }
            newActive.classList.add('active');
        } 
    });
}

var observerOptions = {
  root: null,
  rootMargin: '-50px 0px 0px 0px',
  threshold: 1.0
}

var observer = new IntersectionObserver(observerCallback, observerOptions);

function scrollToSection(e, frag){
    e.preventDefault();
    document.querySelector(frag).scrollIntoView({behavior: 'smooth', block: 'start'});
}

function insertSection(r, key, i){
    var section = document.createElement('section'),
        id = key.match(/\.\/(\d{2})/)[1],
        nav = document.querySelector('.primary-navigation'),
        navItem = document.createElement('a'),
        anchor = document.createElement('a'),
        frag = `#anchor-${ id }`;
        
        navItem.classList.add('tablink');
        if ( i === 0 ){
            navItem.classList.add('active');
        }
        anchor.id = `anchor-${ id }`;
        anchor.classList.add('anchor');

    
    // section

    section.id = id;
    section.classList.add('section','tabcontent');
    section.appendChild(anchor);
    observer.observe(anchor);
    section.insertAdjacentHTML('beforeend', r(key));
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
  r.keys().forEach((key, i) => {
    console.log(key);
    insertSection(r,key, i);
    //insertNavItem(r,key);
  });
  
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
smoothscroll.polyfill();
importAll(require.context('./pages/', true, /\.html$/));
