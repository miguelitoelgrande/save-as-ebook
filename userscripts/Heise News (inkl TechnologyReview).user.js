// ==UserScript==
// @name         Heise News (inkl TechnologyReview)
// @version      1.0
// @description  Heise News - IT articles...
// @author       M.M.
// @include      *.heise.de/newsticker/*
// @include      *.heise.de/hintergrund/*
// @include      *.heise.de/developer/*
// @include      *.heise.de/ratgeber/*
// @include      *.heise.de/security/*
// @include      *.heise.de/autos/*
// @include      *.heise.de/make/*
// @include      *.heise.de/tr/artikel/*
// @grant        none
// ==/UserScript==

'use strict';

//// uncomment to debug:
// debugger;

var myCSS = window.document.createElement('style');
myCSS.innerHTML = `
/* -----------------------------
Name: Heise News
URL Regex: heise\.de\/(newsticker|hintergrund|developer)
-------------------------------- */
body {
  /* TODO: Removing default font so Kindle user can select needs to be done in js and/or save-as-ebook or calibre
  font-family: initial !important;
  */
  color: #010101 !important;  /* default text almost black for better readability */
  margin: 25px;
  background-color: white;
}

p:not([class]), p[class=""]
/* All paragraphs without specific formatting should
   use font of ebook readers choice */
{
  /* font-family: initial !important; */
  text-align: justify;
  text-justify: inter-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
   hyphens: auto;
}


/* TODO: Text color article-content>p  */

main {
	padding: 0 0 0 0 !important;
}

#container, #container_content, #mitte {
  width: 100% !important;
  min-width: 0px;
  min-height: 0px;
  margin: 1px;
  padding: 10px;
}

#mitte_links {
   width: 95% !important;
}

div#container{
	 margin: 1px 1px 1px 1px;
     padding-bottom: 0px;
}

span.initial {  /* Drop caps */
   float: left;
      font-weight:normal;
      font-size:320%  !important;
      float:left  !important;
      margin-top:-0.3225em  !important;
      margin-bottom:-0.3245em  !important;
  font-stretch: normal;
}

/* remove everything except plain article */
a-analytics,
body>footer, header>nav,
#cboxOverlay, #colorbox, #sitemap,
#navi_bottom, #breadcrumb_subnav, #mitte-rechts,
#tr-header, .shariff,
.header-main__content,
.header-main, .main-header, .breadcrumb,
.pre-akwa-toc, .a-button,
.topnavigation, .ad-container,
 /* keep "Kommentare"-Button */
 /* article>footer, .article-layout__footer, */
 /* keep paginating:  .seitenweise_navigation, .paginiert */
.navbar-nav,
.article-sidebar, .article-actions,
.ho-stage-container, .bottom_up,
.main-footer, .printversion--hide,
.mheise--preisvergleich-banner,
.btn-toolbar, .themenseiten,
aside
{
   display: none !important;
   width: 0% !important;
}
`;
document.getElementsByTagName("HEAD")[0].appendChild(myCSS);


