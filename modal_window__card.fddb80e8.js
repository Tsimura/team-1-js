parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SIg6":[function(require,module,exports) {
const d=document.querySelector("modal_window__card"),e=document.querySelector("modal-window-title"),o={openModalCardBtn:document.querySelector("[data-modal-card-open]"),closeModalCardBtn:document.querySelector("[data-modal-card-close]"),modalCard:document.querySelector("[data-modal-card]")};function n(){o.modalCard.classList.contains("is-hidden")?c():l()}function a(d){o.modalCard.classList.contains("is-hidden")?c():(console.log(d.keyCode),l())}function t(d){27===d.keyCode&&(l(),document.removeEventListener("keydown",t)),document.addEventListener("keydown",t)}function c(){console.log("Модалка с карточкой фильма открыта"),o.modalCard.classList.remove("is-hidden")}function l(){console.log("Модалка с карточкой фильма закрыта"),o.modalCard.classList.add("is-hidden")}o.openModalCardBtn.addEventListener("click",n),o.closeModalCardBtn.addEventListener("click",a),document.addEventListener("keydown",t);
},{}]},{},["SIg6"], null)
//# sourceMappingURL=/team-1-js/modal_window__card.fddb80e8.js.map