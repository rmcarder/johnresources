/* global require */
//import 'normalize.css';
import './css/style.css';

function importAll(r) {
  r.keys().forEach(key => {
    console.log(r,key,r(key));
  });
  
}
importAll(require.context('./pages/', false, /\.md$/));
