parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var r=0,e=4,t=4,n=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],o=document.querySelector(".game-field"),a=document.querySelector(".button"),i=document.querySelector(".message-start"),s=document.querySelector(".message-lose"),c=document.querySelector(".message-win"),f=document.querySelector(".game-score");function u(r,n){for(var o=0;o<e;o++)for(var a=0;a<t;a++)if(r[o][a]!==n[o][a])return!0;return!1}function d(){for(var r=0;r<e;r++)if(n[r].includes(0))return!0;return!1}function l(){for(var r=Math.floor(Math.random())<.9?2:4;d();){var o=Math.floor(Math.random()*e),a=Math.floor(Math.random()*t);if(0===n[o][a]){n[o][a]=r;break}}w()}function v(){r=0,n=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],c.classList.add("hidden"),i.classList.add("hidden"),s.classList.add("hidden"),a.classList.replace("start","restart"),a.innerText="Restart",l(),l()}function m(){if(d())return!1;for(var r=0;r<e;r++)for(var o=0;o<t-1;o++)if(n[r][o]===n[r][o+1])return!1;for(var a=0;a<e-1;a++)for(var i=0;i<t;i++)if(n[a][i]===n[a+1][i])return!1;return!0}function h(){n.some(function(r){return r.some(function(r){return 2048===r})})&&c.classList.remove("hidden")}function L(){f.innerHTML=r}function w(){for(var r=0;r<e;r++)for(var a=0;a<t;a++){var i=o.rows[r].cells[a],c=n[r][a];i.innerText="",i.classList.value="",i.classList.add("field-cell"),c>0&&(i.innerText=c,i.classList.add("field-cell--".concat(c)))}h(),L(),m()&&s.classList.remove("hidden")}function g(t){for(var n=t.filter(function(r){return 0!==r}),o=0;o<e-1;o++)n[o]===n[o+1]&&isFinite(n[o])&&(n[o]*=2,n[o+1]=0,r+=n[o]);for(n=n.filter(function(r){return 0!==r});n.length<e;)n.push(0);return n}function y(){for(var r=0;r<t;r++){var o=[n[0][r],n[1][r],n[2][r],n[3][r]];o=g(o);for(var a=0;a<e;a++)n[a][r]=o[a]}}function M(){for(var r=0;r<t;r++){var o=[n[0][r],n[1][r],n[2][r],n[3][r]];o.reverse(),(o=g(o)).reverse();for(var a=0;a<e;a++)n[a][r]=o[a]}}function k(){for(var r=0;r<e;r++){var t=n[r];t.reverse(),(t=g(t)).reverse(),n[r]=t}}function p(){for(var r=0;r<e;r++){var t=n[r];t=g(t),n[r]=t}}a.addEventListener("click",v),document.addEventListener("keyup",function(r){var e=n.map(function(r){return r.slice()});switch(r.preventDefault(),r.code){case"ArrowLeft":p();break;case"ArrowRight":k();break;case"ArrowUp":y();break;case"ArrowDown":M()}u(n,e)&&l(),w()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.bf59ad1b.js.map