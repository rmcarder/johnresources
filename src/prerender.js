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

    section.id = 'section-' + id;
    section.classList.add('section','tabcontent');
    section.appendChild(anchor);
    section.insertAdjacentHTML('beforeend', r(key));
    document.querySelector('main').appendChild(section);

    // nav
    navItem.innerHTML = section.querySelector('h2').innerHTML;
    navItem.href = frag;
    
    nav.appendChild(navItem);

}


export default function importAll(r) {
  r.keys().forEach((key, i) => {
    console.log(key);
    insertSection(r,key, i);
    //insertNavItem(r,key);
  });
}