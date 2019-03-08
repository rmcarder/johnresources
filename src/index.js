/* global require process */
import 'normalize.css';
import './css/style.css';
import smoothscroll from 'smoothscroll-polyfill';
import prerender from './prerender.js';
import scrollMonitor from 'scrollmonitor';



function setObserver(){

    var previousPositions = {},
        observerOptions = {
          root: null,
          rootMargin: '-250px 0px 0px 0px',
          threshold: 1.0
        },
        observer;

    function observerCallback(entries){
        
        entries.forEach(entry => {
        var direction;
        console.log(entry);
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
    observer = new IntersectionObserver(observerCallback, observerOptions);
    document.querySelectorAll('.anchor').forEach(anchor =>{
         if ( requestIdleCallback ){  // was being called while content was being painted, resulting in erroneous
                                     // active chapters. this should only be run run in prerender and in dev so back-up
                                     // is for good measure only (ie rquestIdleCallback should be available)
            requestIdleCallback(() => {
                observer.observe(anchor);
            }, {timeout: 1000});
        } else {
            observer.observe(anchor); 
        }
    });
}
function setScrollMonitor(){
    var element = document.querySelector('.content-wrapper'),
        watcher = scrollMonitor.create(element, {top: 75}),
        logo = document.querySelector('.logo'),
        header = document.querySelector('.header'),
        nav = document.querySelector('.primary-navigation');
console.log(watcher);
    watcher.fullyEnterViewport(() => {
        
            console.log(watcher);
            logo.classList.add('logo-small');
            header.classList.add('header-small');
            nav.classList.add('visible');
        
    });
    watcher.partiallyExitViewport(() => {
        if (watcher.isBelowViewport){
            logo.classList.remove('logo-small');
            header.classList.remove('header-small');
            nav.classList.remove('visible');
        }
    });
}   
function scrollToSection(e, frag){
    console.log(frag);
    e.preventDefault();
    document.querySelector(frag).scrollIntoView({behavior: 'smooth', block: 'start'});
}

function initButton(){
    document.querySelector('.btn--toggle').addEventListener('click', function(){
        document.querySelector('.primary-navigation').classList.toggle('is-open');
    });
}
function initNav(){
    document.querySelectorAll('.tablink').forEach(navItem => {
        navItem.addEventListener('click', function(e){
            e.preventDefault();
            scrollToSection(e, '#section-' + navItem.href.match(/-(\d{2})/)[1]);
        });
    });
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
smoothscroll.polyfill();
if ( window.IS_PRERENDERING || process.env.NODE_ENV === 'development' )
prerender(require.context('./pages/', true, /\.html$/));
setScrollMonitor();
setObserver();
initNav();    
initButton();
