/* global require process */
import 'normalize.css';
import './css/style.css';
import smoothscroll from 'smoothscroll-polyfill';
import prerender from './prerender.js';
//import scrollMonitor from 'scrollmonitor';



function setObserver(){

    var observerOptions = {
          root: null,
          rootMargin: '0px 0px 0px 0px',
        },
        observer;

    function observerCallback(entries){
        
        entries.forEach(entry => {
            console.log(entry);
            if ( entry.isIntersecting ){
                let currentActive = document.querySelector('a.tablink.active');
                let newActive = document.querySelector('a[href="#' + entry.target.id + '"]');
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
    var headerHero = document.querySelector('.header-hero'),
        header = document.querySelector('.header'),
        nav = document.querySelector('.primary-navigation'),
        main = document.querySelector('.main-content'),
        wrapper = document.querySelector('.content-wrapper'),
        arrowDown = document.querySelector('.arrow-down'),
        observerOptions = {
          root: null,
          rootMargin: '0px 0px 0px 0px',
        },
        observer = new IntersectionObserver(observerCallback, observerOptions),
        anchor = document.querySelector('.observer-anchor');

        observer.observe(anchor);

    function observerCallback(entries){
        entries.forEach(entry => {
            console.log(entry);
            if ( entry.isIntersecting ){
                header.classList.add('visible');
                main.classList.add('visible');
                wrapper.classList.add('visible');
                arrowDown.classList.add('hidden');
                headerHero.classList.add('white');
                setTimeout(() => {
                    nav.classList.add('visible');
                }, 200);   
            } else {
                setTimeout(() => {
                    header.classList.remove('visible');
                }, 200);
                headerHero.classList.remove('white');
                nav.classList.remove('visible');
                main.classList.remove('visible');
                wrapper.classList.remove('visible');
                arrowDown.classList.remove('hidden');
            }
        });
    }
}
function scrollToSection(e, frag, behavior){
    behavior = behavior || 'smooth';
    console.log(frag);
    e.preventDefault();
    var anchor = document.querySelector(frag);
    anchor.scrollIntoView({behavior, block: 'start'});
}

function initButton(){
    document.querySelector('.btn--toggle').addEventListener('click', function(){
        document.querySelector('.primary-navigation').classList.toggle('is-open');
    });
}
function initNav(){
    document.querySelectorAll('.tablink').forEach(navItem => {
        navItem.addEventListener('click', function(e){
            var behavior = window.innerWidth <= 911 ? 'auto' : 'smooth';
            e.preventDefault();
            scrollToSection(e, '#section-' + navItem.href.match(/-(\d{2})/)[1], behavior);
            document.querySelector('.primary-navigation').classList.remove('is-open');
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
