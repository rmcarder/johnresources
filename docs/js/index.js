!function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=13)}([function(t,e,o){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var o,i=t.HTMLElement||t.Element,n=468,r={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:i.prototype.scroll||c,scrollIntoView:i.prototype.scrollIntoView},s=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,a=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?f.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):r.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(l(arguments[0])?r.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):f.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},i.prototype.scroll=i.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==l(arguments[0])){var t=arguments[0].left,e=arguments[0].top;f.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},i.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==l(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},i.prototype.scrollIntoView=function(){if(!0!==l(arguments[0])){var o=function(t){for(;t!==e.body&&!1===p(t);)t=t.parentNode||t.host;return t}(this),i=o.getBoundingClientRect(),n=this.getBoundingClientRect();o!==e.body?(f.call(this,o,o.scrollLeft+n.left-i.left,o.scrollTop+n.top-i.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})):t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(t,e){this.scrollLeft=t,this.scrollTop=e}function l(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function h(t,e){return"Y"===e?t.clientHeight+a<t.scrollHeight:"X"===e?t.clientWidth+a<t.scrollWidth:void 0}function u(e,o){var i=t.getComputedStyle(e,null)["overflow"+o];return"auto"===i||"scroll"===i}function p(t){var e=h(t,"Y")&&u(t,"Y"),o=h(t,"X")&&u(t,"X");return e||o}function d(e){var o,i,r,a,c=(s()-e.startTime)/n;a=c=c>1?1:c,o=.5*(1-Math.cos(Math.PI*a)),i=e.startX+(e.x-e.startX)*o,r=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,i,r),i===e.x&&r===e.y||t.requestAnimationFrame(d.bind(t,e))}function f(o,i,n){var a,l,h,u,p=s();o===e.body?(a=t,l=t.scrollX||t.pageXOffset,h=t.scrollY||t.pageYOffset,u=r.scroll):(a=o,l=o.scrollLeft,h=o.scrollTop,u=c),d({scrollable:a,method:u,startTime:p,startX:l,startY:h,x:i,y:n})}}}}()},function(t,e,o){t.exports=function(t){function e(i){if(o[i])return o[i].exports;var n=o[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){"use strict";var i=o(1),n=i.isInBrowser,r=o(2),s=new r(n?document.body:null);s.setStateFromDOM(null),s.listenToDOM(),n&&(window.scrollMonitor=s),t.exports=s},function(t,e){"use strict";e.VISIBILITYCHANGE="visibilityChange",e.ENTERVIEWPORT="enterViewport",e.FULLYENTERVIEWPORT="fullyEnterViewport",e.EXITVIEWPORT="exitViewport",e.PARTIALLYEXITVIEWPORT="partiallyExitViewport",e.LOCATIONCHANGE="locationChange",e.STATECHANGE="stateChange",e.eventTypes=[e.VISIBILITYCHANGE,e.ENTERVIEWPORT,e.FULLYENTERVIEWPORT,e.EXITVIEWPORT,e.PARTIALLYEXITVIEWPORT,e.LOCATIONCHANGE,e.STATECHANGE],e.isOnServer="undefined"==typeof window,e.isInBrowser=!e.isOnServer,e.defaultOffsets={top:0,bottom:0}},function(t,e,o){"use strict";function i(t){return a?0:t===document.body?window.innerHeight||document.documentElement.clientHeight:t.clientHeight}function n(t){return a?0:t===document.body?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight):t.scrollHeight}function r(t){return a?0:t===document.body?window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop}var s=o(1),a=s.isOnServer,c=s.isInBrowser,l=s.eventTypes,h=o(3),u=!1;if(c)try{var p=Object.defineProperty({},"passive",{get:function(){u=!0}});window.addEventListener("test",null,p)}catch(t){}var d=!!u&&{capture:!1,passive:!0},f=function(){function t(e,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var s,a,c,h=this;this.item=e,this.watchers=[],this.viewportTop=null,this.viewportBottom=null,this.documentHeight=n(e),this.viewportHeight=i(e),this.DOMListener=function(){t.prototype.DOMListener.apply(h,arguments)},this.eventTypes=l,o&&(this.containerWatcher=o.create(e)),this.update=function(){(function(){if(h.viewportTop=r(e),h.viewportBottom=h.viewportTop+h.viewportHeight,h.documentHeight=n(e),h.documentHeight!==s){for(a=h.watchers.length;a--;)h.watchers[a].recalculateLocation();s=h.documentHeight}})(),function(){for(c=h.watchers.length;c--;)h.watchers[c].update();for(c=h.watchers.length;c--;)h.watchers[c].triggerCallbacks()}()},this.recalculateLocations=function(){this.documentHeight=0,this.update()}}return t.prototype.listenToDOM=function(){c&&(window.addEventListener?(this.item===document.body?window.addEventListener("scroll",this.DOMListener,d):this.item.addEventListener("scroll",this.DOMListener,d),window.addEventListener("resize",this.DOMListener)):(this.item===document.body?window.attachEvent("onscroll",this.DOMListener):this.item.attachEvent("onscroll",this.DOMListener),window.attachEvent("onresize",this.DOMListener)),this.destroy=function(){window.addEventListener?(this.item===document.body?(window.removeEventListener("scroll",this.DOMListener,d),this.containerWatcher.destroy()):this.item.removeEventListener("scroll",this.DOMListener,d),window.removeEventListener("resize",this.DOMListener)):(this.item===document.body?(window.detachEvent("onscroll",this.DOMListener),this.containerWatcher.destroy()):this.item.detachEvent("onscroll",this.DOMListener),window.detachEvent("onresize",this.DOMListener))})},t.prototype.destroy=function(){},t.prototype.DOMListener=function(t){this.setStateFromDOM(t)},t.prototype.setStateFromDOM=function(t){var e=r(this.item),o=i(this.item),s=n(this.item);this.setState(e,o,s,t)},t.prototype.setState=function(t,e,o,i){var n=e!==this.viewportHeight||o!==this.contentHeight;if(this.latestEvent=i,this.viewportTop=t,this.viewportHeight=e,this.viewportBottom=t+e,this.contentHeight=o,n)for(var r=this.watchers.length;r--;)this.watchers[r].recalculateLocation();this.updateAndTriggerWatchers(i)},t.prototype.updateAndTriggerWatchers=function(t){for(var e=this.watchers.length;e--;)this.watchers[e].update();for(e=this.watchers.length;e--;)this.watchers[e].triggerCallbacks(t)},t.prototype.createCustomContainer=function(){return new t},t.prototype.createContainer=function(e){"string"==typeof e?e=document.querySelector(e):e&&e.length>0&&(e=e[0]);var o=new t(e,this);return o.setStateFromDOM(),o.listenToDOM(),o},t.prototype.create=function(t,e){"string"==typeof t?t=document.querySelector(t):t&&t.length>0&&(t=t[0]);var o=new h(this,t,e);return this.watchers.push(o),o},t.prototype.beget=function(t,e){return this.create(t,e)},t}();t.exports=f},function(t,e,o){"use strict";function i(t,e,o){function i(t,e){if(0!==t.length)for(v=t.length;v--;)(g=t[v]).callback.call(y,e,y),g.isOne&&t.splice(v,1)}var n,f,m,w,v,g,y=this;this.watchItem=e,this.container=t,this.offsets=o?o===+o?{top:o,bottom:o}:{top:o.top||d.top,bottom:o.bottom||d.bottom}:d,this.callbacks={};for(var b=0,E=p.length;b<E;b++)y.callbacks[p[b]]=[];this.locked=!1,this.triggerCallbacks=function(t){switch(this.isInViewport&&!n&&i(this.callbacks[s],t),this.isFullyInViewport&&!f&&i(this.callbacks[a],t),this.isAboveViewport!==m&&this.isBelowViewport!==w&&(i(this.callbacks[r],t),f||this.isFullyInViewport||(i(this.callbacks[a],t),i(this.callbacks[l],t)),n||this.isInViewport||(i(this.callbacks[s],t),i(this.callbacks[c],t))),!this.isFullyInViewport&&f&&i(this.callbacks[l],t),!this.isInViewport&&n&&i(this.callbacks[c],t),this.isInViewport!==n&&i(this.callbacks[r],t),!0){case n!==this.isInViewport:case f!==this.isFullyInViewport:case m!==this.isAboveViewport:case w!==this.isBelowViewport:i(this.callbacks[u],t)}n=this.isInViewport,f=this.isFullyInViewport,m=this.isAboveViewport,w=this.isBelowViewport},this.recalculateLocation=function(){if(!this.locked){var t=this.top,e=this.bottom;if(this.watchItem.nodeName){var o=this.watchItem.style.display;"none"===o&&(this.watchItem.style.display="");for(var n=0,r=this.container;r.containerWatcher;)n+=r.containerWatcher.top-r.containerWatcher.container.viewportTop,r=r.containerWatcher.container;var s=this.watchItem.getBoundingClientRect();this.top=s.top+this.container.viewportTop-n,this.bottom=s.bottom+this.container.viewportTop-n,"none"===o&&(this.watchItem.style.display=o)}else this.watchItem===+this.watchItem?this.watchItem>0?this.top=this.bottom=this.watchItem:this.top=this.bottom=this.container.documentHeight-this.watchItem:(this.top=this.watchItem.top,this.bottom=this.watchItem.bottom);this.top-=this.offsets.top,this.bottom+=this.offsets.bottom,this.height=this.bottom-this.top,void 0===t&&void 0===e||this.top===t&&this.bottom===e||i(this.callbacks[h],null)}},this.recalculateLocation(),this.update(),n=this.isInViewport,f=this.isFullyInViewport,m=this.isAboveViewport,w=this.isBelowViewport}var n=o(1),r=n.VISIBILITYCHANGE,s=n.ENTERVIEWPORT,a=n.FULLYENTERVIEWPORT,c=n.EXITVIEWPORT,l=n.PARTIALLYEXITVIEWPORT,h=n.LOCATIONCHANGE,u=n.STATECHANGE,p=n.eventTypes,d=n.defaultOffsets;i.prototype={on:function(t,e,o){switch(!0){case t===r&&!this.isInViewport&&this.isAboveViewport:case t===s&&this.isInViewport:case t===a&&this.isFullyInViewport:case t===c&&this.isAboveViewport&&!this.isInViewport:case t===l&&this.isInViewport&&this.isAboveViewport:if(e.call(this,this.container.latestEvent,this),o)return}if(!this.callbacks[t])throw new Error("Tried to add a scroll monitor listener of type "+t+". Your options are: "+p.join(", "));this.callbacks[t].push({callback:e,isOne:o||!1})},off:function(t,e){if(!this.callbacks[t])throw new Error("Tried to remove a scroll monitor listener of type "+t+". Your options are: "+p.join(", "));for(var o,i=0;o=this.callbacks[t][i];i++)if(o.callback===e){this.callbacks[t].splice(i,1);break}},one:function(t,e){this.on(t,e,!0)},recalculateSize:function(){this.height=this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom,this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<this.container.viewportTop,this.isBelowViewport=this.bottom>this.container.viewportBottom,this.isInViewport=this.top<this.container.viewportBottom&&this.bottom>this.container.viewportTop,this.isFullyInViewport=this.top>=this.container.viewportTop&&this.bottom<=this.container.viewportBottom||this.isAboveViewport&&this.isBelowViewport},destroy:function(){var t=this.container.watchers.indexOf(this);this.container.watchers.splice(t,1);for(var e=0,o=p.length;e<o;e++)this.callbacks[p[e]].length=0},lock:function(){this.locked=!0},unlock:function(){this.locked=!1}};for(var f=function(t){return function(e,o){this.on.call(this,t,e,o)}},m=0,w=p.length;m<w;m++){var v=p[m];i.prototype[v]=f(v)}t.exports=i}])},function(t,e,o){},function(t,e,o){},function(t,e,o){var i={"./01/introduction.html":5,"./02/strategic-communications.html":6,"./03/evaluation-learning.html":7,"./04/leadership-development.html":8,"./05/diversity-equity-inclusion.html":9,"./06/staff-retention.html":10,"./07/security.html":11,"./08/board-structure-role.html":12};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id=4},function(t,e){t.exports='\r\n\r\n<h1>Introduction</h1>\r\n                <p>Recognizing that our grantees are very diverse and no set of resources could possibly be applicable to all, the resources on this site are aimed at an introductory level; the kinds of things that might be useful to an organization just starting to think about a given topic. Some of you will be at much more advanced stages. Wherever you are on a given topic, please dont hesitate to reach out to your program officer if you would like to have a more in depth conversation around how we may be able to provide support.</p>\r\n                <p>The results of the first survey question are below. As each topic received at least a third of respondents rating additional resources as \'very useful,\' we have included resources on all topics. Navigate to each of them using the menu on the right.</p>\r\n                <h4>How useful would access to resources be for each area below?</h4>\r\n                <img src="/assets/OverallLegend.svg" width="100%" alt="">\r\n             \r\n \r\n\r\n\x3c!-- TODO  these should navigate --\x3e'},function(t,e){t.exports='<img src="/assets/icons/lock.svg" width="85" height="85" alt="">\r\n<h2>Strategic Communications</h2>\r\n            <p>Strategic Communications is the capital of Japan.</p>'},function(t,e){t.exports='<img src="/assets/icons/lock.svg" width="85" height="85" alt="">\r\n<h2>Evaluation and Learning</h2>\r\n            <p>Evaluation and Learning is the capital of Japan.</p>'},function(t,e){t.exports='<img src="/assets/icons/lock.svg" width="85" height="85" alt="">\r\n<h2>Leadership Development</h2>\r\n                <p>Leadership Development is the capital of Japan.</p>'},function(t,e){t.exports='<img src="/assets/icons/lock.svg" width="85" height="85" alt="">\r\n<h2>Diversity, Equity, and Inclusion</h2>\r\n            <p>Diversity, Equity, and Inclusion is the capital of Japan.</p>'},function(t,e){t.exports='<img src="/assets/icons/lock.svg" width="85" height="85" alt="">\r\n<h2>Staff Retention</h2>\r\n            <p>Staff Retention is the capital of France.</p>\r\n            <h3>Start Here</h3>\r\n            <p>Organizations new to thinking about staff retention should start here.\r\n                <ol>\r\n                    <li> </li>\r\n                    <li> </li>\r\n                    <li> </li>\r\n                </ol>'},function(t,e){t.exports='<h1>Security</h1>\r\n        \r\n<p>Organizations new to thinking about security should start with the resources below, which give a primer on physical and digital \'low hanging fruit\' concepts to keep in mind:</p>\r\n            <table class="table table-hover">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope="col"></th>\r\n                        <th scope="col">Resource Title</th>\r\n                        <th scope="col">Description</th>\r\n                        <th scope="col">Author</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <th class=\'fit\' scope="row">1</th>\r\n                        <td><a href=\'https://www.securityplanner.org/#/\'>Grantee Security Guide</td>\r\n                <td>A guide to help with the blueprints of Security</td>\r\n                <td>Alex Carle, Wellspring Staff</td>\r\n              </tr>\r\n              <tr>\r\n                <th scope="row">2</th>\r\n                <td colspan="2"><a href=\'https://www.securityplanner.org/#/\'>Security Checklist - Holistic</td>\r\n                  <td>Alex Carle, Wellspring Staff</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope="row">3</th>\r\n                  <td colspan="2"><a href=\'https://www.securityplanner.org/#/\'>Security Checklist - Digital</td>\r\n                    <td>Wellspring Staff</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th scope="row">4</th>\r\n                    <td><a href=\'https://www.securityplanner.org/#/\'>Security Planner</td>\r\n                      <td>Answer a few simple questions to get personalized online safety recommendations.</td>\r\n                      <td>Citizen Lab</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <h2>Support WPF Can Offer</h2>\r\n                <p>Wellspring would like to support your organization as you work to strengthen the security and safety of your staff.  Below are a few possible resources we can offer and/or connect you with:</p>\r\n                <h4>WPF Security Consultant</h4>\r\n                <p>Wellspring works closely with a security advisor, who is available to provide confidential and no-cost security guidance via phone, email, or Skype. We are happy to send an email introduction. </p>\r\n                <h4>Organizations that Provide Emergency Security Support</h4>\r\n                <p>As part of our work with other donors concerned about safety threats, the Human Rights Funders Network has developed a Directory of Emergency/Rapid Response Grants and a directory of Rest and Respite Programs. The directories contain grant guidelines and contact information for international organizations that support emergency HRD responses. </p>\r\n\r\n                <p>The European Commission provides small grants up to 10,000 euros for human rights defenders at risk. More information can be found on their website or by contacting your program officer who has a copy of the grant form you would need to submit. </p>\r\n\r\n                <p>The Digital Defenders Partnership provides 1) Emergency grants to Internet users facing urgent digital threats; 2) Grants for organizations seeking to improve their digital security apparatus, setting up temporary help desks or testing and researching specific threats, and 3) strategic grants to NGOs to strengthen their digital security over the longer-term. </p>\r\n\r\n                <p>Access Now runs a digital security Helpline that offers real-time, direct technical assistance and advice to activists, independent media, and civil society organizations, including: 24/7 emergency response, personalized recommendations, instruction, and follow-up support, guidance on security tools, support for securing technical infrastructure, websites, and social media, in-person consultations, including referrals, mitigation, capacity-building, and training, and resource materials in multiple languages. The Helpline can be contacted at the email: help@accessnow.org. </p>\r\n\r\n                <p>If a grantee believes they have been hacked by an adversary, or otherwise targeted with a digital attack and would like to understand the source of the attack, Citizen Lab researches information controls. This is not emergency support, but can help the broader field understand who the adversary is and how they are targeting human rights defenders.\r\n\r\n                </p>\r\n                <h3>East and Horn Region</h3>\r\n                <p>The East and Horn of Africa Human Rights Defenders Project works to ensure that HRDs receive the necessary support to mitigate the risks that they face and continue their work. You can contact them at protection@defenddefenders.org and they will assess your case. You can also contact them using a secure contact form found here or here. </p>\r\n                <h3>Uganda</h3>\r\n                <h3>Tanzania</h3>'},function(t,e){t.exports="<h1>Board Structure and Role</h1>\r\n<p>Board Structure and Role is the capital city of England.</p>"},function(t,e,o){"use strict";o.r(e);o(2),o(3);var i=o(0),n=o.n(i);var r,s,a,c,l,h,u,p,d=o(1),f=o.n(d);window.onbeforeunload=function(){window.scrollTo(0,0)},n.a.polyfill(),window.IS_PRERENDERING&&(r=o(4)).keys().forEach((t,e)=>{console.log(t),function(t,e,o){var i=document.createElement("section"),n=e.match(/\.\/(\d{2})/)[1],r=document.querySelector(".primary-navigation"),s=document.createElement("a"),a=document.createElement("a"),c=`#anchor-${n}`;s.classList.add("tablink"),0===o&&s.classList.add("active"),a.id=`anchor-${n}`,a.classList.add("anchor"),i.id="section-"+n,i.classList.add("section","tabcontent"),i.appendChild(a),i.insertAdjacentHTML("beforeend",t(e)),document.querySelector("main .container-inner").appendChild(i),i.querySelector("h1")?s.innerHTML=i.querySelector("h1").innerHTML:s.innerHTML=i.querySelector("h2").innerHTML,s.href=c,r.appendChild(s)}(r,t,e)}),s=document.querySelector(".main-content"),a=f.a.create(s),c=document.querySelector(".header"),l=document.querySelector(".primary-navigation"),h=document.querySelector(".main-content"),a.fullyEnterViewport(()=>{c.classList.add("visible"),h.classList.add("visible"),setTimeout(()=>{l.classList.add("visible")},200)}),a.partiallyExitViewport(()=>{a.isBelowViewport&&(setTimeout(()=>{c.classList.remove("visible")},200),l.classList.remove("visible"),h.classList.remove("visible"))}),p={},u=new IntersectionObserver(function(t){t.forEach(t=>{var e;if(console.log(t),e=null===p[t.target.id]||p[t.target.id]>t.boundingClientRect.y?"up":"down",p[t.target.id]=0===t.boundingClientRect.height?null:t.boundingClientRect.y,console.log(p,t,t.isIntersecting,e),"up"===e&&t.intersectionRatio>=.5||t.isIntersecting&&"down"===e){let e=document.querySelector("a.tablink.active"),o=document.querySelector('a[href="#'+t.target.id+'"');e!==o&&e.classList.remove("active"),o.classList.add("active")}if("down"===e&&t.intersectionRatio<=.5&&t.intersectionRatio>0){let e=document.querySelector("a.tablink.active"),o=document.querySelector('a[href="#'+t.target.id+'"').previousElementSibling;o&&e!==o&&(e.classList.remove("active"),o.classList.add("active"))}})},{root:null,rootMargin:"0px 0px 0px 0px",threshold:[.25,.5,.75,1]}),document.querySelectorAll(".anchor").forEach(t=>{requestIdleCallback?requestIdleCallback(()=>{u.observe(t)},{timeout:1e3}):u.observe(t)}),document.querySelectorAll(".tablink").forEach(t=>{t.addEventListener("click",function(e){e.preventDefault(),function(t,e){console.log(e),t.preventDefault(),document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}(e,"#section-"+t.href.match(/-(\d{2})/)[1])})}),document.querySelector(".btn--toggle").addEventListener("click",function(){document.querySelector(".primary-navigation").classList.toggle("is-open")})}]);
//# sourceMappingURL=index.js.map