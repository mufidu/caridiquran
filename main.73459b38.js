(()=>{var n,e={715:(n,e,t)=>{"use strict";t(39);var r=t(379),o=t.n(r),i=t(795),a=t.n(i),c=t(569),u=t.n(c),s=t(565),l=t.n(s),f=t(216),p=t.n(f),h=t(589),d=t.n(h),b=t(890),y={};function v(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}y.styleTagTransform=d(),y.setAttributes=l(),y.insert=u().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=p(),o()(b.Z,y),b.Z&&b.Z.locals&&b.Z.locals;var m=t(185);const g=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t;return e=n,t=[{key:"searchVerse",value:function(n){return m.get("https://api.alquran.cloud/v1/search/".concat(n,"/all/id.indonesian"))}}],null&&v(e.prototype,null),t&&v(e,t),n}();function w(n){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function x(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function O(n,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function _(n){var e="function"==typeof Map?new Map:void 0;return(_=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return k(n,arguments,j(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),S(r,n)})(n)}function k(n,e,t){return(k=R()?Reflect.construct:function(n,e,t){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(n,r));return t&&S(o,t.prototype),o}).apply(null,arguments)}function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function S(n,e){return(S=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function j(n){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}t(917),t(665);var E=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&S(n,e)}(a,n);var e,t,r,o,i=(e=a,t=R(),function(){var n,r=j(e);if(t){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)});function a(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this))._shadowRoot=n.attachShadow({mode:"open"}),n}return r=a,(o=[{key:"verses",set:function(n){this._verses=n,this.render()}},{key:"render",value:function(){var n=this;this._shadowRoot.innerHTML="",this._verses.forEach((function(e){var t=document.createElement("verse-item");t.verse=e,console.log(e),n._shadowRoot.appendChild(t)}))}},{key:"renderError",value:function(n){this._shadowRoot.innerHTML="",this._shadowRoot.innerHTML="\n                        <style>\n                            .placeholder {\n                                font-weight: lighter;\n                                color: rgba(0, 0, 0, 0.5);\n                                -webkit-user-select: none;\n                                -moz-user-select: none;\n                                -ms-user-select: none;\n                                user-select: none;\n                            }\n                        </style>",this._shadowRoot.innerHTML+='<h2 class="placeholder">'.concat(n,"</h2>")}}])&&x(r.prototype,o),a}(_(HTMLElement));function T(n,e,t,r,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void t(n)}c.done?e(u):Promise.resolve(u).then(r,o)}customElements.define("verses-list",E);document.addEventListener("DOMContentLoaded",(function(){var n=document.querySelector("search-bar"),e=document.querySelector("verses-list"),t=function(){var t,r=(t=regeneratorRuntime.mark((function t(r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.prev=1,t.next=4,g.searchVerse(n.value);case 4:o=(o=t.sent).data.data.matches,e.verses=o,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e.renderError("Maaf, ".concat(n.value," tidak ditemukan."));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})),function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function a(n){T(i,r,o,a,c,"next",n)}function c(n){T(i,r,o,a,c,"throw",n)}a(void 0)}))});return function(n){return r.apply(this,arguments)}}();n.clickEvent=t}))},917:()=>{function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}function e(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function t(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(e)}function r(n){var e="function"==typeof Map?new Map:void 0;return(r=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return o(n,arguments,c(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,n)})(n)}function o(n,e,t){return(o=i()?Reflect.construct:function(n,e,t){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(n,r));return t&&a(o,t.prototype),o}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function a(n,e){return(a=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function c(n){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var u=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&a(n,e)}(f,n);var r,o,u,s,l=(r=f,o=i(),function(){var n,e=c(r);if(o){var i=c(this).constructor;n=Reflect.construct(e,arguments,i)}else n=e.apply(this,arguments);return t(this,n)});function f(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(n=l.call(this))._shadowRoot=n.attachShadow({mode:"open"}),n}return u=f,(s=[{key:"connectedCallback",value:function(){this.render()}},{key:"clickEvent",set:function(n){this._clickEvent=n,this.render()}},{key:"value",get:function(){return this._shadowRoot.querySelector("#searchText").value}},{key:"render",value:function(){this._shadowRoot.innerHTML='\n            <style>\n                .search-box {\n                    max-width: 800px;\n                    box-shadow: 0 .2rem .3rem rgba(0, 0, 0, .2);\n                    padding: 1rem;\n                    border-radius: .5rem;\n                    display: flex;\n                    background-color: white;\n                    margin: 2rem auto;\n                }\n\n                .search-box > input {\n                    width: 75%;\n                    padding: .5rem;\n                    border: 0;\n                    border-bottom: 1px solid lightgrey;\n                    font-size: 1.2rem;\n                }\n\n                .search-box > input:focus {\n                    outline: 0;\n                    border-bottom: 2px solid lightgrey;\n                }\n\n                .search-box >  input::placeholder {\n                    color: lightgrey;\n                    font-weight: normal;\n                }\n\n                .search-box > button {\n                    width: 23%;\n                    cursor: pointer;\n                    margin-left: auto;\n                    padding: 1rem;\n                    font-size: 1.2rem;\n                    background-color: rgba(0, 0, 0, 0.7);\n                    color: white;\n                    border: 0;\n                    transition: all .2s ease-in-out;\n                }\n\n                .search-box > button:hover {\n                    background-color: rgba(0, 0, 0, 0.8);\n                    transform: scale(1.05);\n                    box-shadow: 0 .2rem .3rem rgba(0, 0, 0, .2);\n                }\n\n                .search-box > button:active {\n                    background-color: rgba(0, 0, 0, 0.9);\n                    transform: scale(1);\n                }    \n\n                @media screen and (max-width: 600px){\n                    .search-box {\n                        flex-direction: column;\n                        width: 85%;\n                    }\n\n                    .search-box > input {\n                        width: 100%;\n                        margin-bottom: 1rem;\n                    }\n\n                    .search-box > button {\n                        margin: 0 auto;\n                        width: 50%;\n                        padding: .5rem;\n                    }\n                }\n            </style>\n            <form id="search-box" class="search-box">\n                <input\n                    placeholder="Mau ayat tentang apa?"\n                    id="searchText"\n                    type="search"\n                />\n                <button id="searchButton" type="submit">Cari</button>\n            </form>\n        ',this._shadowRoot.querySelector("#searchButton").addEventListener("click",this._clickEvent)}}])&&e(u.prototype,s),f}(r(HTMLElement));customElements.define("search-bar",u)},665:(n,e,t)=>{function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,e,t,r,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void t(n)}c.done?e(u):Promise.resolve(u).then(r,o)}function i(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function a(n,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function c(n){var e="function"==typeof Map?new Map:void 0;return(c=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return u(n,arguments,f(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,n)})(n)}function u(n,e,t){return(u=s()?Reflect.construct:function(n,e,t){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(n,r));return t&&l(o,t.prototype),o}).apply(null,arguments)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function l(n,e){return(l=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function f(n){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var p=t(185),h=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&l(n,e)}(b,n);var e,t,r,c,u,h,d=(e=b,t=s(),function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)});function b(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,b),(n=d.call(this))._shadowRoot=n.attachShadow({mode:"open"}),n}return r=b,(c=[{key:"verse",set:function(n){return this.setter(n)}},{key:"setter",value:(u=regeneratorRuntime.mark((function n(e){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return this._verse=e,n.next=3,p.get("https://api.alquran.cloud/v1/ayah/".concat(this._verse.number));case 3:t=n.sent,this._arabText=t.data.data.text,console.log(this._arabText),this.render();case 7:case"end":return n.stop()}}),n,this)})),h=function(){var n=this,e=arguments;return new Promise((function(t,r){var i=u.apply(n,e);function a(n){o(i,t,r,a,c,"next",n)}function c(n){o(i,t,r,a,c,"throw",n)}a(void 0)}))},function(n){return h.apply(this,arguments)})},{key:"render",value:function(){this._shadowRoot.innerHTML='\n            <style>\n                .verse {\n                box-shadow: .2rem .2rem .3rem  rgba(0, 0, 0, 0.2);\n                border-radius: .5rem;\n                width: 50%;\n                margin-bottom: 2rem;\n                margin-left: auto;\n                margin-right: auto;\n                }\n\n                .verse-content {\n                    padding: 1.5rem;\n                }\n\n                .verse-content > p {\n                    margin-top: .5rem;\n                }\n\n                .arabText {\n                    text-align: right;\n                    font-size: 1.5rem;\n                }\n\n                audio {\n                    margin-left: 1rem;\n                    margin-bottom: 1rem;\n                }\n\n                @media screen and (max-width: 600px){\n                    .verse {\n                        width: 85%;\n                    }\n\n                    audio {\n                        margin-left: 0;\n                        margin-bottom: 0;\n                    }\n                }\n            </style>\n            <div class="verse">\n                <div class="verse-content">\n                    <p class="arabText">'.concat(this._arabText,"</p>\n                    <p>").concat(this._verse.text,"</p>\n                    <p><b>(Q.S. ").concat(this._verse.surah.englishName,":").concat(this._verse.numberInSurah,')</b></p>\n                </div>\n                \n                <audio controls preload="none">\n\n                <source src="https://cdn.islamic.network/quran/audio/128/ar.alafasy/').concat(this._verse.number,'.mp3" type="audio/mpeg">\n\n                Maaf, browser Anda tidak mendukung pemutaran audio.\n                </audio>\n            </div>\n        ')}}])&&i(r.prototype,c),b}(c(HTMLElement));customElements.define("verse-item",h)},890:(n,e,t)=>{"use strict";t.d(e,{Z:()=>l});var r=t(286),o=t.n(r),i=t(672),a=t.n(i),c=new URL(t(469),t.b),u=o()((function(n){return n[1]})),s=a()(c);u.push([n.id,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: sans-serif;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    background-color: lightblue;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0 10%;\n    color: white;\n    background-image: linear-gradient(\n            to right bottom,\n            rgba(0, 0, 0, 0.7),\n            rgba(0, 0, 0, 0.7)\n        ),\n        url("+s+");\n    height: 30vh;\n    background-size: cover;\n    background-position: center;\n}\n\nh1 {\n    font-weight: bold;\n    font-size: 2.5rem;\n    margin-top: 1rem;\n}\n\nmain {\n    min-height: 70vh;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.7);\n    color: white;\n    height: 2.5rem;\n    width: 100%;\n}\n\na {\n    color: white;\n    text-decoration: underline;\n}\n\na:hover {\n    text-decoration: none;\n}",""]);const l=u},469:(n,e,t)=>{"use strict";n.exports=t.p+"16314fc297ef37f17abb.webp"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n](i,i.exports,r),i.loaded=!0,i.exports}r.m=e,n=[],r.O=(e,t,o,i)=>{if(!t){var a=1/0;for(l=0;l<n.length;l++){for(var[t,o,i]=n[l],c=!0,u=0;u<t.length;u++)(!1&i||a>=i)&&Object.keys(r.O).every((n=>r.O[n](t[u])))?t.splice(u--,1):(c=!1,i<a&&(a=i));if(c){n.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[t,o,i]},r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{r.b=document.baseURI||self.location.href;var n={179:0};r.O.j=e=>0===n[e];var e=(e,t)=>{var o,i,[a,c,u]=t,s=0;for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(u)var l=u(r);for(e&&e(t);s<a.length;s++)i=a[s],r.o(n,i)&&n[i]&&n[i][0](),n[a[s]]=0;return r.O(l)},t=self.webpackChunkcaridiquran=self.webpackChunkcaridiquran||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})();var o=r.O(void 0,[306],(()=>r(715)));o=r.O(o)})();