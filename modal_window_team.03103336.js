parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tLT9":[function(require,module,exports) {
(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function e(){o.modal.classList.contains("is-hidden")?(console.log("Модалка з командою відкрита"),o.modal.classList.remove("is-hidden")):(console.log("Модалка з командою закрита"),o.modal.classList.add("is-hidden"))}o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e),document.addEventListener("keydown",function(e){27===e.keyCode&&(console.log('Модалка з командою закрита кнопкою "Esc"'),o.modal.classList.toggle("is-hidden"))})})();
},{}]},{},["tLT9"], null)
//# sourceMappingURL=/team-1-js/modal_window_team.03103336.js.map