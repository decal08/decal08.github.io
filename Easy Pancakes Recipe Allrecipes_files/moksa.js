/*! moksa.js v.3.14.2 2021-7-12 */
!function(){"use strict";window.aax=window.aax||{},window.aax.execute=window.aax.execute||[];let n={enabled:!1},e={enabled:!1},t=null,o=null;const a=["AT","BE","BG","CY","CZ","DE","DK","EE","ES","FI","FR","GB","GR","HR","HU","IE","IS","IT","LI","LT","LU","LV","MT","NL","NO","PL","PT","RO","SE","SI","SK"];function r(n){if(!navigator.cookieEnabled)return i(),!1;const e=n+"=";let t;return o=decodeURIComponent(document.cookie).split(";"),a=function(n){for(;" "===n.charAt(0);)n=n.substring(1);0===n.indexOf(e)&&(t=n.substring(e.length,n.length))},(o=null===(r=o)||"object"!=typeof r||Array.isArray(r)||NodeList.prototype.isPrototypeOf(r)?o:Object.keys(o)).forEach(a),t;var o,a,r}function i(n){console}function u(){let n=r("OptanonConsent");return n?(n=function(n,e){n=decodeURIComponent(n),e=void 0===e||e;const t={};return n.replace(/[?&]?([^=&]+)=([^&]*)/gi,(function(n,o,a){e?t[o.toLowerCase()]=a:t[o]=a})),t}(r("OptanonConsent"),!1),i(JSON.stringify(n)),n):null}function c(){return window.otStubData&&"object"==typeof window.otStubData.userLocation?window.otStubData.userLocation:null}function s(n){var e;return(n=n||c())&&n.hasOwnProperty("country")&&(e=n.country,t=e?-1!==a.indexOf(e):null),t}window.aax=window.aax||{};var l=window.aax;l.initTime=(new Date).getTime(),l.pubId="AAXV53D7Q",l.ver="1.2",l.hst=window.location.hostname;var d="https://c.aaxads.com/aax.js?pub="+l.pubId+"&hst="+l.hst+"&ver="+l.ver;!function(){const t=u(),a=c(),l=s(a),d=r("OptanonAlertBoxClosed")||null,w=t?!(!t.hasOwnProperty("isGpcEnabled")||1!==(p=t.isGpcEnabled,"string"==typeof p?p.match(/^[0-9]+$/)?function(n){return parseInt(n,10)}(p):function(n){return"string"==typeof n&&("true"===n||"false"===n||""===n)||null==n?"true"===n||!1:n}(p):p)):null;var p;if(l&&(e.enabled=!0),t){const r=!function(n,e){return(n=n||u())&&n.hasOwnProperty("groups")?!(-1!==n.groups.indexOf("4:0")):!s(e=e||c())}(t);n.enabled=!(!function(n){return(n=n||c())&&n.hasOwnProperty("country")&&(o="US"===n.country),o}(a)||!r||!w&&null===d),e.enabled=!(!l||!r)}l&&window.aax.execute.push((function(){window.aax.setGDPRApplicable(!0),i(),window.aax.consentExists(!e.enabled),i(e.enabled),window.aax.setNonPersonalizedAds(e.enabled),i(e.enabled)})),o&&window.aax.execute.push((function(){window.aax.limitDataProcessing(n.enabled),i(n.enabled)}))}(),function(n){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src=n,t.parentNode.insertBefore(e,t)}(d)}();
//# sourceMappingURL=moksa.js.map