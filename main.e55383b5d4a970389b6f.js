(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),c=new O(r||[]);return a._invoke=function(t,e,n){var r=f;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return S()}for(n.method=o,n.arg=a;;){var c=n.delegate;if(c){var i=_(c,n);if(i){if(i===v)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?p:d,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(t,n,c),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={};function y(){}function m(){}function g(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(j([])));x&&x!==n&&r.call(x,a)&&(w=x);var L=g.prototype=y.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,a,c,i){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,i)}),(function(t){n("throw",t,c,i)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,i)}))}i(u.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function _(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,_(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function j(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:S}}function S(){return{value:e,done:!0}}return m.prototype=g,u(L,"constructor",g),u(g,"constructor",m),m.displayName=u(g,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,i,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},k(E.prototype),u(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var c=new E(s(e,n,r,o),a);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},k(L),u(L,i,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(D),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return i.type="throw",i.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),D(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;D(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,n,r,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void n(t)}i.done?e(u):Promise.resolve(u).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,a){var c=e.apply(n,r);function i(e){t(c,o,a,i,u,"next",e)}function u(e){t(c,o,a,i,u,"throw",e)}i(void 0)}))}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}var f=n(757),d=n.n(f);function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var p=function t(e,n,o,a){var c,i;r(this,t),this.element=document.createElement(n),(c=this.element.classList).add.apply(c,function(t){if(Array.isArray(t))return h(t)}(i=o)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(i)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a&&(this.element.innerText=a),e&&e.appendChild(this.element)},v="https://varankin_dev.elma365.ru/api/extensions/2a38760e-083a-4dd0-aebc-78b570bfd3c7/script",y=function(){var t=e(d().mark((function t(){var e,n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(v).concat("/users"));case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=e(d().mark((function t(){var e,n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(v).concat("/tasks"));case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();var g=function(t){i(a,t);var e,n,o=(e=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=l(e);if(n){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return s(this,t)});function a(t){var e;return r(this,a),(e=o.call(this,t,"input",["backlog__search"])).element.setAttribute("placeholder","Поиск"),e.element.setAttribute("type","text"),e}return a}(p);var w=function(t){i(a,t);var e,n,o=(e=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=l(e);if(n){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return s(this,t)});function a(t,e){var n;return r(this,a),n=o.call(this,t,"div",["backlog__task"]),new p(n.element,"p",["task__title"],"".concat(e)),n.element.setAttribute("draggable","true"),n}return a}(p);var b=function(t){i(f,t);var n,o,c,u=(o=f,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l(o);if(c){var n=l(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return s(this,t)});function f(t){var e;return r(this,f),e=u.call(this,t,"div",["backlog"]),new p(e.element,"h2",["backlog__title"],"Backlog"),new g(e.element),e}return a(f,[{key:"addTasks",value:(n=e(d().mark((function t(){var e=this;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return t.sent.forEach((function(t){if(null===t.executor){var n=new w(e.element,t.subject);n.element.setAttribute("data-default-start-date",t.planStartDate),n.element.setAttribute("data-default-end-date",t.planEndDate),new p(n.element,"div",["description"],"Описание: ".concat(t.description?t.description:"нет описания"))}})),t.abrupt("return",this);case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}]),f}(p);const x={today:new Date,weeks:2};var L=function(t){i(a,t);var e,n,o=(e=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=l(e);if(n){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return s(this,t)});function a(t){var e;return r(this,a),(e=o.call(this,t,"div",["calendar__controls"])).leftBtn=new p(e.element,"button",["control-btn"],"Left"),e.rightBtn=new p(e.element,"button",["control-btn"],"Right"),e}return a}(p),k=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Date(t.getTime()+864e5*e).getDate(),r=new Date(t.getTime()+864e5*e).getMonth()+1,o=new Date(t).getFullYear();n=E(n),r=E(r);var a="".concat(o,"-").concat(r,"-").concat(n);return{day:n,month:r,fullDate:a}},E=function(t){return+t<10?"0".concat(t):String(t)};var _=function(t){i(f,t);var n,o,c,u=(o=f,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l(o);if(c){var n=l(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return s(this,t)});function f(t,e){var n;return r(this,f),(n=u.call(this,t,"div",["date__col"])).newDate=k(x.today,e),new p(n.element,"span",["date"],"".concat(n.newDate.day,".").concat(n.newDate.month)),n}return a(f,[{key:"addDateColumn",value:(n=e(d().mark((function t(){var e,n,r=this;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:return e=t.sent,t.next=5,m();case 5:n=t.sent,e.forEach((function(t){var e=new p(r.element,"div",["task-cell"]);e.element.setAttribute("data-id","".concat(t.id)),e.element.setAttribute("data-cell-date","".concat(r.newDate.fullDate)),n.forEach((function(n){var o=k(new Date(n.planStartDate)),a=k(new Date(n.planEndDate));if(o.day===r.newDate.day&&o.month===r.newDate.month&&t.id===n.executor){var c=new p(e.element,"div",["task"],"".concat(n.subject));new p(c.element,"div",["description"],"Описание: ".concat(n.description?n.description:"нет описания"))}else a.day===r.newDate.day&&a.month===r.newDate.month&&t.id===n.executor&&new p(e.element,"div",["task","task-end"],"".concat(n.subject))}))}));case 7:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)})}]),f}(p);var R=function(t){i(f,t);var n,o,c,u=(o=f,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l(o);if(c){var n=l(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return s(this,t)});function f(t){return r(this,f),u.call(this,t,"div",["dates-field"])}return a(f,[{key:"addDates",value:(n=e(d().mark((function t(e){var n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=0;case 1:if(!(n<=7*e-1)){t.next=7;break}return t.next=4,new _(this.element,n).addDateColumn();case 4:n++,t.next=1;break;case 7:return t.abrupt("return",this);case 8:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})}]),f}(p);var D=function(t){i(c,t);var e,n,o=(e=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=l(e);if(n){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return s(this,t)});function c(t,e){return r(this,c),o.call(this,t,"div",["employee"],e)}return a(c,[{key:"addEmployeeFields",value:function(){for(var t=1;t<=14;t++)new p(this.element,"div",["employee__task"],"".concat(t))}}]),c}(p);var O=function(t){i(f,t);var n,o,c,u=(o=f,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l(o);if(c){var n=l(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return s(this,t)});function f(t){return r(this,f),u.call(this,t,"div",["calendar__employes"])}return a(f,[{key:"addEmployes",value:(n=e(d().mark((function t(){var e=this;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:return t.sent.forEach((function(t){new D(e.element,t.firstName).element.setAttribute("data-employee-id",t.id)})),t.abrupt("return",this);case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}]),f}(p);var j=function(t){i(f,t);var n,o,c,u=(o=f,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l(o);if(c){var n=l(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return s(this,t)});function f(t){var e;return r(this,f),(e=u.call(this,t,"div",["calendar"])).container=new p(e.element,"div",["calendar__container"]),e.controls=new L(e.container.element),e.employes=new O(e.container.element).addEmployes(),e.datesField=new R(e.element).addDates(x.weeks).then((function(t){return e.datesList=t.element,e.datesCount=e.datesList.querySelectorAll(".date__col").length,e.dateColWidth=e.datesList.querySelector(".date__col").offsetWidth,e.datesWidth=e.datesList.offsetWidth,e.gridGap=+window.getComputedStyle(e.datesList).gridColumnGap.replace("px",""),e.datesList})),e.slideIndex=0,e}return a(f,[{key:"getCalendarFields",value:(n=e(d().mark((function t(){var e,n;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.datesField;case 2:return e=t.sent,t.next=5,this.employes;case 5:return n=t.sent.element,t.abrupt("return",{dates:e,employes:n});case 7:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"nextDay",value:function(){var t=this;this.controls.rightBtn.element.addEventListener("click",e(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.slideIndex++,t.datesList.scrollTo((t.dateColWidth+t.gridGap)*t.slideIndex,0),t.slideIndex>t.datesCount-Math.floor(t.datesWidth/t.dateColWidth)&&(t.slideIndex-=1);case 3:case"end":return e.stop()}}),e)}))))}},{key:"prevDay",value:function(){var t=this;this.controls.leftBtn.element.addEventListener("click",e(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.slideIndex--,t.slideIndex<0&&(t.slideIndex=0),t.datesList.scrollTo((t.dateColWidth+t.gridGap)*t.slideIndex,0);case 3:case"end":return e.stop()}}),e)}))))}}]),f}(p),S=function(t,e,n,r){var o=function(){var t=this;setTimeout((function(){return t.classList.add("hide")}),0)},a=function(){this.classList.remove("hide")},c=function(t){t.preventDefault()},i=function(t){t.preventDefault(),this.classList.add("hovered")},u=function(){this.classList.remove("hovered")},s=function(){var t=this;e.forEach((function(e){t.classList.contains("employee")?n.forEach((function(n){n.dataset.cellDate===e.dataset.defaultStartDate&&t.dataset.employeeId===n.dataset.id&&(n.append(e),t.classList.remove("hovered"),e.classList.remove("backlog__task"),e.classList.add("task"),e.classList.add("draggable"))})):(t.append(e),t.classList.remove("hovered"),e.classList.remove("backlog__task"),e.classList.add("task"),e.classList.add("draggable"))}))};r.forEach((function(t){t.addEventListener("dragover",c),t.addEventListener("dragenter",i),t.addEventListener("dragleave",u),t.addEventListener("drop",s)})),n.forEach((function(t){t.addEventListener("dragover",c),t.addEventListener("dragenter",i),t.addEventListener("dragleave",u),t.addEventListener("drop",s)})),t.addEventListener("dragover",(function(t){t.preventDefault()})),t.addEventListener("dragenter",(function(t){t.preventDefault()})),t.addEventListener("drop",(function(){var t=this;e.forEach((function(e){t.append(e),e.classList.remove("task"),e.classList.remove("draggable"),e.classList.add("backlog__task")}))})),e.forEach((function(t){t.addEventListener("dragstart",o),t.addEventListener("dragend",a)}))};var B=function(t){i(f,t);var n,o,c,u=(o=f,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l(o);if(c){var n=l(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return s(this,t)});function f(t){var e;return r(this,f),(e=u.call(this,t,"div",["schedule"])).calendar=new j(e.element),e.calendar.nextDay(),e.calendar.prevDay(),e.backlog=new b(e.element),e.addDragAndDrop(),e}return a(f,[{key:"addDragAndDrop",value:(n=e(d().mark((function t(){var e,n,r,o;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.calendar.getCalendarFields();case 2:return e=t.sent.dates.querySelectorAll(".task-cell"),t.next=5,this.calendar.getCalendarFields();case 5:return n=t.sent.employes.querySelectorAll(".employee"),t.next=8,this.backlog.addTasks();case 8:r=t.sent.element,o=r.querySelectorAll(".backlog__task"),S(r,o,e,n);case 11:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}]),f}(p);window.addEventListener("load",(function(){var t=document.getElementById("app");new B(t)}))})()})();