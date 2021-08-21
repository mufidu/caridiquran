(()=>{var n,t={586:(n,t,e)=>{"use strict";e(39);var r=e(379),o=e.n(r),i=e(795),c=e.n(i),u=e(569),a=e.n(u),l=e(565),s=e.n(l),f=e(216),p=e.n(f),h=e(589),b=e.n(h),d=e(890),y={};function m(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}y.styleTagTransform=b(),y.setAttributes=s(),y.insert=a().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=p(),o()(d.Z,y),d.Z&&d.Z.locals&&d.Z.locals;const v=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}var t,e;return t=n,e=[{key:"searchClub",value:function(n){return fetch("https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=".concat(n)).then((function(n){return n.json()})).then((function(t){return t.teams?Promise.resolve(t.teams):Promise.reject("".concat(n," is not found"))}))}}],null&&m(t.prototype,null),e&&m(t,e),n}();function w(n){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function g(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function x(n,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function O(n){var t="function"==typeof Map?new Map:void 0;return(O=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return _(n,arguments,E(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),k(r,n)})(n)}function _(n,t,e){return(_=j()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&k(o,e.prototype),o}).apply(null,arguments)}function j(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function k(n,t){return(k=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function E(n){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}e(917),e(699);var R=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&k(n,t)}(c,n);var t,e,r,o,i=(t=c,e=j(),function(){var n,r=E(t);if(e){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)});function c(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this))._shadowRoot=n.attachShadow({mode:"open"}),n}return r=c,(o=[{key:"clubs",set:function(n){this._clubs=n,this.render()}},{key:"render",value:function(){var n=this;this._shadowRoot.innerHTML="",this._clubs.forEach((function(t){var e=document.createElement("club-item");e.club=t,n._shadowRoot.appendChild(e)}))}},{key:"renderError",value:function(n){this._shadowRoot.innerHTML="\n                        .placeholder {\n                            font-weight: lighter;\n                            color: rgba(0, 0, 0, 0.5);\n                            -webkit-user-select: none;\n                            -moz-user-select: none;\n                            -ms-user-select: none;\n                            user-select: none;\n                        }",this._shadowRoot.innerHTML="",this._shadowRoot.innerHTML+='<h2 class="placeholder">'.concat(n,"</h2>")}}])&&g(r.prototype,o),c}(O(HTMLElement));function S(n,t,e,r,o,i,c){try{var u=n[i](c),a=u.value}catch(n){return void e(n)}u.done?t(a):Promise.resolve(a).then(r,o)}customElements.define("club-list",R);document.addEventListener("DOMContentLoaded",(function(){var n=document.querySelector("search-bar"),t=document.querySelector("club-list"),e=function(){var t,e=(t=regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.searchClub(n.value);case 3:e=t.sent,r(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),o("".concat(n.value," is not a valid club name, or error"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function c(n){S(i,r,o,c,u,"next",n)}function u(n){S(i,r,o,c,u,"throw",n)}c(void 0)}))});return function(){return e.apply(this,arguments)}}(),r=function(n){t.clubs=n},o=function(n){t.renderError(n)};n.clickEvent=e}))},699:()=>{function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}function t(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function e(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)}function r(n){var t="function"==typeof Map?new Map:void 0;return(r=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return o(n,arguments,u(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,n)})(n)}function o(n,t,e){return(o=i()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&c(o,e.prototype),o}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function c(n,t){return(c=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function u(n){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var a=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&c(n,t)}(f,n);var r,o,a,l,s=(r=f,o=i(),function(){var n,t=u(r);if(o){var i=u(this).constructor;n=Reflect.construct(t,arguments,i)}else n=t.apply(this,arguments);return e(this,n)});function f(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(n=s.call(this))._shadowRoot=n.attachShadow({mode:"open"}),n}return a=f,(l=[{key:"club",set:function(n){this._club=n,this.render()}},{key:"render",value:function(){this._shadowRoot.innerHTML='\n            <style>\n            .club {\n                margin-bottom: 18px;\n                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                border-radius: 10px;\n                overflow: hidden;\n            }\n\n            .club .fan-art-club {\n                width: 100%;\n                max-height: 300px;\n                object-fit: cover;\n                object-position: center;\n            }\n\n            .club-info {\n                padding: 24px;\n            }\n\n            .club-info > h2 {\n                font-weight: lighter;\n            }\n\n            .club-info > p {\n                margin-top: 10px;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                display: -webkit-box;\n                -webkit-box-orient: vertical;\n                -webkit-line-clamp: 10; /* number of lines to show */\n            }\n            </style>\n            <div class="club">\n            <img class="fan-art-club" src="'.concat(this._club.strTeamBadge,'" alt="Fan Art">\n                <div class="club-info">\n                <h2>').concat(this._club.strTeam,"</h2>\n                <p>").concat(this._club.strDescriptionEN,"</p></div>\n            </div>\n        ")}}])&&t(a.prototype,l),f}(r(HTMLElement));customElements.define("club-item",a)},917:()=>{function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}function t(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function e(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)}function r(n){var t="function"==typeof Map?new Map:void 0;return(r=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return o(n,arguments,u(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,n)})(n)}function o(n,t,e){return(o=i()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&c(o,e.prototype),o}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function c(n,t){return(c=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function u(n){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var a=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&c(n,t)}(f,n);var r,o,a,l,s=(r=f,o=i(),function(){var n,t=u(r);if(o){var i=u(this).constructor;n=Reflect.construct(t,arguments,i)}else n=t.apply(this,arguments);return e(this,n)});function f(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(n=s.call(this))._shadowRoot=n.attachShadow({mode:"open"}),n}return a=f,(l=[{key:"connectedCallback",value:function(){this.render()}},{key:"clickEvent",set:function(n){this._clickEvent=n,this.render()}},{key:"value",get:function(){return this._shadowRoot.querySelector("#searchText").value}},{key:"render",value:function(){this._shadowRoot.innerHTML='\n            <style>\n            .search-box {\n                max-width: 800px;\n                box-shadow: 0 .2rem .3rem rgba(0, 0, 0, .2);\n                padding: 1rem;\n                border-radius: .5rem;\n                display: flex;\n                background-color: white;\n                margin: 0 auto;\n            }\n\n            .search-box > input {\n                width: 75%;\n                padding: .5rem;\n                border: 0;\n                border-bottom: 1px solid lightgrey;\n                font-size: 1.2rem;\n            }\n\n            .search-box > input:focus {\n                outline: 0;\n                border-bottom: 2px solid lightgrey;\n            }\n\n            .search-box >  input::placeholder {\n                color: lightgrey;\n                font-weight: normal;\n            }\n\n            .search-box > button {\n                width: 23%;\n                cursor: pointer;\n                margin-left: auto;\n                padding: 1rem;\n                font-size: 1.2rem;\n                background-color: rgba(0, 0, 0, 0.7);\n                color: white;\n                border: 0;\n                transition: all .2s ease-in-out;\n            }\n\n            .search-box > button:hover {\n                background-color: rgba(0, 0, 0, 0.8);\n                transform: scale(1.05);\n                box-shadow: 0 .2rem .3rem rgba(0, 0, 0, .2);\n            }\n\n            .search-box > button:active {\n                background-color: rgba(0, 0, 0, 0.9);\n                transform: scale(1);\n            }    \n\n            @media screen and (max-width: 550px){\n                .search-box {\n                    flex-direction: column;\n                }\n\n                .search-box > input {\n                    width: 100%;\n                    margin-bottom: 1rem;\n                }\n\n                .search-box > button {\n                    margin: 0 auto;\n                    width: 50%;\n                }\n            }\n            </style>\n            <div id="search-box" class="search-box">\n                <input\n                    placeholder="Mau ayat tentang apa?"\n                    id="searchText"\n                    type="search"\n                />\n                <button id="searchButton" type="submit">Cari</button>\n            </div>\n        ',this._shadowRoot.querySelector("#searchButton").addEventListener("click",this._clickEvent)}}])&&t(a.prototype,l),f}(r(HTMLElement));customElements.define("search-bar",a)},890:(n,t,e)=>{"use strict";e.d(t,{Z:()=>s});var r=e(286),o=e.n(r),i=e(672),c=e.n(i),u=new URL(e(469),e.b),a=o()((function(n){return n[1]})),l=c()(u);a.push([n.id,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: sans-serif;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    background-color: lightblue;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0 10%;\n    color: white;\n    background-image: linear-gradient(\n            to right bottom,\n            rgba(0, 0, 0, 0.7),\n            rgba(0, 0, 0, 0.7)\n        ),\n        url("+l+");\n    height: 30vh;\n    background-size: cover;\n    background-position: center;\n    margin-bottom: 1rem;\n}\n\nh1 {\n    font-weight: bold;\n    font-size: 2.5rem;\n    margin-top: 1rem;\n}\n\nmain {\n    \n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.7);\n    color: white;\n    height: 2.5rem;\n    position: relative;\n    clear: both;\n    margin-top: auto;\n    width: 100%;\n}\n\na {\n    color: white;\n    text-decoration: underline;\n}\n\na:hover {\n    text-decoration: none;\n}",""]);const s=a},469:(n,t,e)=>{"use strict";n.exports=e.p+"16314fc297ef37f17abb.webp"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,loaded:!1,exports:{}};return t[n](i,i.exports,r),i.loaded=!0,i.exports}r.m=t,n=[],r.O=(t,e,o,i)=>{if(!e){var c=1/0;for(s=0;s<n.length;s++){for(var[e,o,i]=n[s],u=!0,a=0;a<e.length;a++)(!1&i||c>=i)&&Object.keys(r.O).every((n=>r.O[n](e[a])))?e.splice(a--,1):(u=!1,i<c&&(c=i));if(u){n.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[e,o,i]},r.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var t=r.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var e=t.getElementsByTagName("script");e.length&&(n=e[e.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{r.b=document.baseURI||self.location.href;var n={179:0};r.O.j=t=>0===n[t];var t=(t,e)=>{var o,i,[c,u,a]=e,l=0;for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(a)var s=a(r);for(t&&t(e);l<c.length;l++)i=c[l],r.o(n,i)&&n[i]&&n[i][0](),n[c[l]]=0;return r.O(s)},e=self.webpackChunkcaridiquran=self.webpackChunkcaridiquran||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))})();var o=r.O(void 0,[123],(()=>r(586)));o=r.O(o)})();