// ==UserScript==
// @name      Old Imgflip homepage
// @namespace N/A
// @version   1.0
// @description Redirects imgflip.com to imgflip.com/m/fun and replaces all "/" links with "/m/fun"
// @author    Kokonico
// @match     https://imgflip.com/*
// @grant     none
// ==/UserScript==

(function() {
 'use strict';

 // Check if the current URL is "https://imgflip.com/"
 if (window.location.href === "https://imgflip.com/") {
     // Redirect to "https://imgflip.com/m/fun"
     window.location.href = "https://imgflip.com/m/fun";
 }

 // Select all anchor elements on the page
 var anchors = document.getElementsByTagName("a");

 // Loop through each anchor element
 for (var i = 0; i < anchors.length; i++) {
     // If the href attribute is "/", change it to "/m/fun"
     if (anchors[i].getAttribute('href') === "/") {
         anchors[i].setAttribute('href', "/m/fun");
     }
 }
})();
