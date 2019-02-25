// ==UserScript==
// @name         PowerPivotPro
// @version      0.1
// @description  Power BI, Power Query and DAX related posts
// @author       M.M.
// @include      https://powerpivotpro.com/*/*/*
// @grant        none
// ==/UserScript==

'use strict';

//// uncomment to debug:
// debugger;

/* probably again a wordpress based blog? */


var myCSS = window.document.createElement('style');
myCSS.innerHTML = `
/* -----------------------------
Name: Chris Webb's BI Blog
URL Regex: https://blog.crossjoin.co.uk/*
-------------------------------- */

header#branding, footer#colophon,
div#secondary, div#actionbar,
div.sd-social, div.sharedaddy,
.post-format-icon,
article ~ *,
div#wpex-mobile-menu-fixed-top,
div.post-pagination-wrap,
div#footer-inner, div#respond,
header#site-header, aside#sidebar,
#top-bar, .wpex-social-share {
 display:none !important;
}

#page, #primary {
  width: 100% !important;
  max-width: 100% !important;
  padding: 0px !important;
  margin: 0px !important;
  border: none;

}

#page:before, #page:after { /* remove box-shadow of page... */
   display:none !important;
}

#content, .entry-title, .post-content, #content .post {
  margin: 0px !important;
  padding: 0px !important;
}

.content-area {
  float: none;
}

.entry-meta {
  position: relative;
  width: 100%;
  top: 0px;
}

.syntaxhighlighter table td.gutter .line {
    text-align: left !important;  /* line numbers in Code snippets... */
}

.entry-meta .entry-date, .entry-meta .byline, .entry-meta .entry-categories,
.entry-meta .entry-tags, .entry-meta .edit-link, .entry-meta .comments-link,
.entry-meta .image-info {
    text-align: left  !important;
}

img {
  align: center;
}

/* All paragraphs without specific formatting should
   use font of ebook readers choice */
p:not([class]), p[class=""]
{
  text-align: justify;
  text-justify: inter-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
   hyphens: auto;
}

body {
    padding: 15px !important;
    background: none;
    background-color: white;
    color: #010101;  /* default text almost black for better readability */
}

`;
document.getElementsByTagName("HEAD")[0].appendChild(myCSS);



