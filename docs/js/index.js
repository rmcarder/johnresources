!function(t){var e={};function o(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=13)}([function(t,e,o){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var o,n=t.HTMLElement||t.Element,a=468,i={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:n.prototype.scroll||l,scrollIntoView:n.prototype.scrollIntoView},r=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,s=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?f.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):i.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?i.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):f.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,e=arguments[0].top;f.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var o=function(t){var o;do{o=(t=t.parentNode)===e.body}while(!1===o&&!1===u(t));return o=null,t}(this),n=o.getBoundingClientRect(),a=this.getBoundingClientRect();o!==e.body?(f.call(this,o,o.scrollLeft+a.left-n.left,o.scrollTop+a.top-n.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):t.scrollBy({left:a.left,top:a.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(t,e){this.scrollLeft=t,this.scrollTop=e}function c(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function d(t,e){return"Y"===e?t.clientHeight+s<t.scrollHeight:"X"===e?t.clientWidth+s<t.scrollWidth:void 0}function h(e,o){var n=t.getComputedStyle(e,null)["overflow"+o];return"auto"===n||"scroll"===n}function u(t){var e=d(t,"Y")&&h(t,"Y"),o=d(t,"X")&&h(t,"X");return e||o}function p(e){var o,n,i,s,l=(r()-e.startTime)/a;s=l=l>1?1:l,o=.5*(1-Math.cos(Math.PI*s)),n=e.startX+(e.x-e.startX)*o,i=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,n,i),n===e.x&&i===e.y||t.requestAnimationFrame(p.bind(t,e))}function f(o,n,a){var s,c,d,h,u=r();o===e.body?(s=t,c=t.scrollX||t.pageXOffset,d=t.scrollY||t.pageYOffset,h=i.scroll):(s=o,c=o.scrollLeft,d=o.scrollTop,h=l),p({scrollable:s,method:h,startTime:u,startX:c,startY:d,x:n,y:a})}}}}()},function(t,e,o){},function(t,e,o){},function(t,e,o){var n={"./01/introduction.html":4,"./02/board-structure-role.html":5,"./03/staff-retention.html":6,"./04/strategic-communications.html":7,"./05/evaluation-learning.html":8,"./06/diversity-equity-inclusion.html":9,"./07/security.html":10,"./08/leadership-development.html":11,"./09/data.html":12};function a(t){var e=i(t);return o(e)}function i(t){if(!o.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=i,t.exports=a,a.id=3},function(t,e){t.exports='<img src="/assets/icons/lock.svg" width="85" height="85" alt="">\n<h2>Introduction</h2>\n<p>In 2018, Wellspring undertook a grantee survey around non-financial assistance. Some of you expressed strong interest in some topics, but not others. There was not a topic on the survey that did not receive strong interest from at least some of you. Therefore, we created this site to provide resources around all topics, knowing that will be at varying levels of knowledge and capacity around these topics; the resources here are tailored toward the __ end of the spectrum. For more information or to request further assistance on any of these topics, please contact your program officer.</p>\n<h2>Topics</h2>\n<p>Wellspring would like to support your organization as you work to strengthen the security and safety of your staff. Below are a few possible resources we can offer and/or connect you with:</p>\n\x3c!-- TODO  these should navigate --\x3e\n<ul class="inline-nav-list" role="navigation" aria-label="duplicate navigation">\n    <li>Board Structure and Role</li>\n    <li>Staff Retention</li>\n    <li>Strategic Communications</li>\n    <li>Evaluation and Learning</li>\n    <li>Diversity, Equity, and Inclusion</li>\n    <li>Security: Physical and Digital</li>\n    <li>Leadership Development</li>\n</ul>\n'},function(t,e){t.exports='<img src="/assets/icons/lock.svg" width="85" height="85" alt="">\n<h2>Board Structure and Role</h2>\n<p>Board Structure and Role is the capital city of England.</p>'},function(t,e){t.exports='<img src="/assets/icons/lock.svg" width="85" height="85" alt="">\n<h2>Staff Retention</h2>\n            <p>Staff Retention is the capital of France.</p>\n            <h3>Start Here</h3>\n            <p>Organizations new to thinking about staff retention should start here.\n                <ol>\n                    <li> </li>\n                    <li> </li>\n                    <li> </li>\n                </ol>'},function(t,e){t.exports='<img src="/assets/icons/lock.svg" width="85" height="85" alt="">\n<h2>Strategic Communications</h2>\n            <p>Strategic Communications is the capital of Japan.</p>'},function(t,e){t.exports='<img src="/assets/icons/lock.svg" width="85" height="85" alt="">\n<h2>Evaluation and Learning</h2>\n            <p>Evaluation and Learning is the capital of Japan.</p>'},function(t,e){t.exports='<img src="/assets/icons/lock.svg" width="85" height="85" alt="">\n<h2>Diversity, Equity, and Inclusion</h2>\n            <p>Diversity, Equity, and Inclusion is the capital of Japan.</p>'},function(t,e){t.exports='<img src="/assets/icons/lock.svg" width="85" height="85" alt="">\n<h2>Security: Physical and Digital</h2>\n            <p>Physical and Digital Security.......Important because....</p>\n            <h3>Start Here</h3>\n            <p>Organizations new to thinking about physical and digital security should start with these resources.</p>\n            <table class="table table-hover">\n                <thead>\n                    <tr>\n                        <th scope="col"></th>\n                        <th scope="col">Resource Title</th>\n                        <th scope="col">Description</th>\n                        <th scope="col">Author</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <th class=\'fit\' scope="row">1</th>\n                        <td><a href=\'https://www.securityplanner.org/#/\'>Grantee Security Guide</td>\n                <td>A guide to help with the blueprints of Security</td>\n                <td>Alex Carle, Wellspring Staff</td>\n              </tr>\n              <tr>\n                <th scope="row">2</th>\n                <td colspan="2"><a href=\'https://www.securityplanner.org/#/\'>Security Checklist - Holistic</td>\n                  <td>Alex Carle, Wellspring Staff</td>\n                </tr>\n                <tr>\n                  <th scope="row">3</th>\n                  <td colspan="2"><a href=\'https://www.securityplanner.org/#/\'>Security Checklist - Digital</td>\n                    <td>Wellspring Staff</td>\n                  </tr>\n                  <tr>\n                    <th scope="row">4</th>\n                    <td><a href=\'https://www.securityplanner.org/#/\'>Security Planner</td>\n                      <td>Answer a few simple questions to get personalized online safety recommendations.</td>\n                      <td>Citizen Lab</td>\n                    </tr>\n                  </tbody>\n                </table>\n                <h3>Support WPF Can Offer</h3>\n                <p>Wellspring would like to support your organization as you work to strengthen the security and safety of your staff.  Below are a few possible resources we can offer and/or connect you with:</p>\n                <h4>WPF Security Consultant</h4>\n                <p>Wellspring works closely with a security advisor, Alex Carle, who is available to provide confidential and no-cost security guidance via phone, email, or Skype. We are happy to send an email introduction. Though he is based in London, Alex travels regularly and was for many years the Africa Security Advisor for Care International, based in Nairobi.  He is very quick to respond to emails and has a lot of helpful advice.</p>\n                <h4>Organizations that Provide Emergency Security Support</h4>\n                <p>As part of our work with other donors concerned about safety threats, the Human Rights Funders Network has developed a Directory of Emergency/Rapid Response Grants and a directory of Rest and Respite Programs. The directories contain grant guidelines and contact information for international organizations that support emergency HRD responses. </p>\n\n                <p>The European Commission provides small grants up to 10,000 euros for human rights defenders at risk. More information can be found on their website or by contacting your program officer who has a copy of the grant form you would need to submit. </p>\n\n                <p>The Digital Defenders Partnership provides 1) Emergency grants to Internet users facing urgent digital threats; 2) Grants for organizations seeking to improve their digital security apparatus, setting up temporary help desks or testing and researching specific threats, and 3) strategic grants to NGOs to strengthen their digital security over the longer-term. </p>\n\n                <p>Access Now runs a digital security Helpline that offers real-time, direct technical assistance and advice to activists, independent media, and civil society organizations, including: 24/7 emergency response, personalized recommendations, instruction, and follow-up support, guidance on security tools, support for securing technical infrastructure, websites, and social media, in-person consultations, including referrals, mitigation, capacity-building, and training, and resource materials in multiple languages. The Helpline can be contacted at the email: help@accessnow.org. </p>\n\n                <p>If a grantee believes they have been hacked by an adversary, or otherwise targeted with a digital attack and would like to understand the source of the attack, Citizen Lab researches information controls. This is not emergency support, but can help the broader field understand who the adversary is and how they are targeting human rights defenders.\n\n                </p>\n                <h3>East and Horn Region</h3>\n                <p>The East and Horn of Africa Human Rights Defenders Project works to ensure that HRDs receive the necessary support to mitigate the risks that they face and continue their work. You can contact them at protection@defenddefenders.org and they will assess your case. You can also contact them using a secure contact form found here or here. </p>\n                <h3>Uganda</h3>\n                <h3>Tanzania</h3>'},function(t,e){t.exports='<img src="/assets/icons/lock.svg" width="85" height="85" alt="">\n<h2>Leadership Development</h2>\n                <p>Leadership Development is the capital of Japan.</p>'},function(t,e){t.exports='<img src="/assets/icons/lock.svg" width="85" height="85" alt="">\n<h2>Data Collection and Analysis</h3>\n                  <p>Data can be an important component of other focus areas on this website. Field data collection and analysis to inform evaluation and learning, effective data visualization as an advocacy tool, and  are all examples of ways an organization\'s data capacity can advance other capacity areas.</p>\n                </div>\n              </div>\n            </div>\n            <h3>Start Here</h3>\n            <p>Organizations at different levels of data maturity face different barriers.\n              For those on the less mature end of the spectrum, it can to be a combination of gaps in awareness,\n              skills, data quality, and analysis tools. Sometimes it’s about\n              the attitude and willingness of leaders; and sometimes it’s about not\n              having the capacity/resources to move beyond the data requirements\n            being externally dictated by funders and boards. Starting with an assessment of data maturity can be a helpful place to start by identifying current strengths and areas to focus on for improvement. Two such assessments are provided below. </p>\n            <table class="table table-hover">\n              <thead>\n                <tr>\n                  <th scope="col"></th>\n                  <th scope="col">Resource Title</th>\n                  <th scope="col">Description</th>\n                  <th scope="col">Author</th>\n                </tr>\n              </thead>\n              <tbody>\n\n                <tr>\n                  <th class=\'fit\' scope="row">1</th>\n                  <td><a href=\'https://dsapp.uchicago.edu/wp-content/uploads/2018/05/Data_Maturity_Framework_4.28.16.pdf\'>Data Maturity Framework Questionnaire</td>\n                    <td> See where you are in the data maturity framework and how to improve your organizational, tech, and data readiness.</td>\n                    <td>Center for Data Science & Public Policy, University of Chicago</td>\n                  </tr>\n                  <tr>\n                    <th class=\'fit\' scope="row">2</th>\n                    <td><a href=\'http://dataevolution.org.uk/wp-content/uploads/sites/8/2017/01/Summary-Designed-Data-Maturity-Framework-Social-Sector-FINAL-v1.pdf\'>Social Sector Data Maturity Framework</td>\n                      <td>Similar to the above, but a different take. This resource maps out stages of maturity in five areas: Leadership, Skills, Culture, Data, Tools, Uses, Analysis.</td>\n                      <td>Datakind UK</td>\n                    </tr>\n\n                  </tbody>\n                </table>\n                <h2>Data Collection and Analysis Tools</h2>\n                <table class="table table-hover">\n                  <thead>\n                    <tr>\n                      <th scope="col"></th>\n                      <th scope="col">Tool (linked to website)</th>\n                      <th scope="col">Description</th>\n                      <th scope="col">In Action</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                   <tr>\n                    <th class=\'fit\' scope="row">1</th>\n                    <td><a href=\'https://www.kobotoolbox.org/\'><img src="http://www.elrha.org/wp-content/uploads/2016/07/kobo_logo_dark1.2.png" width="115" height="40" alt=""></td>\n                      <td>KoBoToolbox is a suite of tools for field data collection for use in challenging environments</td>\n                      <td>Using Kobo in the Field</td>\n                    </tr>\n\n                    <tr>\n                      <th class=\'fit\' scope="row">2</th>\n                      <td><a href=\'https://www.tableau.com/foundation/license-donations\'><img src="https://automatedinsights.com/wp-content/uploads/2018/05/quote-logo-tableau.png" width="120" height="40" alt=""></td>\n                        <td>Small non-profits and NGOs anywhere in the world can request donations of Tableau Desktop. Tableau is an intuitive data analysis and visualization tool.</td>\n                        <td><a href=\'https://www.youtube.com/watch?v=bs6gpFjU1d4\'>Using Tableau for Data Visualization - A Tech Soup Webinar</a></td>\n                    </tr>\n                </tbody>\n            </table>\n            <h2>Additional Support</h2>\n            <p>Please contact your program officer if you would like additional support around data collection and use. If your oganization already has data and needs help with the analysis piece, we can make an introduction to DataKind, which provides pro bono data science assistance to mission-driven organizations.</p>'},function(t,e,o){"use strict";o.r(e);o(1),o(2);var n,a,i,r=o(0),s=o.n(r);window.onbeforeunload=function(){window.scrollTo(0,0)},s.a.polyfill(),window.IS_PRERENDERING&&(n=o(3)).keys().forEach((t,e)=>{console.log(t),function(t,e,o){var n=document.createElement("section"),a=e.match(/\.\/(\d{2})/)[1],i=document.querySelector(".primary-navigation"),r=document.createElement("a"),s=document.createElement("a"),l=`#anchor-${a}`;r.classList.add("tablink"),0===o&&r.classList.add("active"),s.id=`anchor-${a}`,s.classList.add("anchor"),n.id="section-"+a,n.classList.add("section","tabcontent"),n.appendChild(s),n.insertAdjacentHTML("beforeend",t(e)),document.querySelector("main").appendChild(n),r.innerHTML=n.querySelector("h2").innerHTML,r.href=l,i.appendChild(r)}(n,t,e)}),i={},a=new IntersectionObserver(function(t){t.forEach(t=>{var e;if(console.log(t),e=null===i[t.target.id]||i[t.target.id]>t.boundingClientRect.y?"up":"down",i[t.target.id]=0===t.boundingClientRect.height?null:t.boundingClientRect.y,console.log(i,t,t.isIntersecting,e),!t.isIntersecting&&"up"===e||t.isIntersecting&&"down"===e){let e=document.querySelector("a.tablink.active"),o=document.querySelector('a[href="#'+t.target.id+'"');e!==o&&e.classList.remove("active"),o.classList.add("active")}})},{root:null,rootMargin:"-250px 0px 0px 0px",threshold:1}),document.querySelectorAll(".anchor").forEach(t=>{requestIdleCallback?requestIdleCallback(()=>{a.observe(t)},{timeout:1e3}):a.observe(t)}),document.querySelectorAll(".tablink").forEach(t=>{t.addEventListener("click",function(e){e.preventDefault(),function(t,e){console.log(e),t.preventDefault(),document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}(e,"#section-"+t.href.match(/-(\d{2})/)[1])})}),document.querySelector(".btn--toggle").addEventListener("click",function(){document.querySelector(".primary-navigation").classList.toggle("is-open")})}]);
//# sourceMappingURL=index.js.map