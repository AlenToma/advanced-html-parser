const IDOMParser = require("./../")

//const doc = IDOMParser.parse(require("./html"));
const should = require('should');
const fs = require('fs');
//const describe = require("mocha")
const page = `
<!DOCTYPE HTML>
<html class="" lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>Super God Gene - Novel Updates</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
    <meta name="referrer" content="unsafe-url">

	    <link rel="apple-touch-icon" href="/appicon.png"/>
   
<!-- UniConsent Cookies Consent Notice start -->
<script src="https://cmp.uniconsent.com/v2/stub.min.js"></script>
<script async src='https://cmp.uniconsent.com/v2/69a34e0934/cmp.js'></script>
<!-- UniConsent Cookies Consent Notice end -->
	
	<link rel='dns-prefetch' href='//www.novelupdates.com' />
<link rel='dns-prefetch' href='//www.google.com' />
<link rel='dns-prefetch' href='//cdn.novelupdates.com' />
<link rel='dns-prefetch' href='//ajax.googleapis.com' />
<link rel='dns-prefetch' href='//fonts.googleapis.com' />
<link rel='dns-prefetch' href='//s.w.org' />
<link rel="alternate" type="application/rss+xml" title="Novel Updates &raquo; Feed" href="https://www.novelupdates.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="Novel Updates &raquo; Comments Feed" href="https://www.novelupdates.com/comments/feed/" />
<link rel="alternate" type="application/rss+xml" title="Novel Updates &raquo; Super God Gene Comments Feed" href="https://www.novelupdates.com/series/super-god-gene/feed/" />
		<script type="text/javascript">
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/www.novelupdates.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.2.7"}};
			!function(a,b,c){function d(a,b){var c=String.fromCharCode;l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,a),0,0);var d=k.toDataURL();l.clearRect(0,0,k.width,k.height),l.fillText(c.apply(this,b),0,0);var e=k.toDataURL();return d===e}function e(a){var b;if(!l||!l.fillText)return!1;switch(l.textBaseline="top",l.font="600 32px Arial",a){case"flag":return!(b=d([55356,56826,55356,56819],[55356,56826,8203,55356,56819]))&&(b=d([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]),!b);case"emoji":return b=d([55357,56424,55356,57342,8205,55358,56605,8205,55357,56424,55356,57340],[55357,56424,55356,57342,8203,55358,56605,8203,55357,56424,55356,57340]),!b}return!1}function f(a){var c=b.createElement("script");c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var g,h,i,j,k=b.createElement("canvas"),l=k.getContext&&k.getContext("2d");for(j=Array("flag","emoji"),c.supports={everything:!0,everythingExceptFlag:!0},i=0;i<j.length;i++)c.supports[j[i]]=e(j[i]),c.supports.everything=c.supports.everything&&c.supports[j[i]],"flag"!==j[i]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[j[i]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(h=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",h,!1),a.addEventListener("load",h,!1)):(a.attachEvent("onload",h),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),g=c.source||{},g.concatemoji?f(g.concatemoji):g.wpemoji&&g.twemoji&&(f(g.twemoji),f(g.wpemoji)))}(window,document,window._wpemojiSettings);
		</script>
		<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
	<link rel='stylesheet' id='dashicons-css'  href='https://www.novelupdates.com/wp-includes/css/dashicons.min.css?ver=5.2.7' type='text/css' media='all' />
<link rel='stylesheet' id='theme-my-login-css'  href='https://www.novelupdates.com/wp-content/plugins/theme-my-login/theme-my-login.css?ver=6.4.10' type='text/css' media='all' />
<link rel='stylesheet' id='wp-block-library-css'  href='https://www.novelupdates.com/wp-includes/css/dist/block-library/style.min.css?ver=5.2.7' type='text/css' media='all' />
<link rel='stylesheet' id='bbspoiler-css'  href='https://www.novelupdates.com/wp-content/plugins/bbspoiler/inc/bbspoiler.css?ver=5.2.7' type='text/css' media='all' />
<link rel='stylesheet' id='cstmsrch_stylesheet-css'  href='https://www.novelupdates.com/wp-content/plugins/custom-search-plugin/css/style.css?ver=5.2.7' type='text/css' media='all' />
<link rel='stylesheet' id='yasrcss-css'  href='https://www.novelupdates.com/wp-content/plugins/yet-another-stars-rating/css/yasr.css' type='text/css' media='all' />
<link rel='stylesheet' id='yasrcsslightscheme-css'  href='https://www.novelupdates.com/wp-content/plugins/yet-another-stars-rating/css/yasr-table-light.css' type='text/css' media='all' />
<link rel='stylesheet' id='breadcrumbs-nu-css'  href='https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/breadcrumbs.css?ver=1.2.5' type='text/css' media='' />
<link rel='stylesheet' id='global-extras-css'  href='//cdn.novelupdates.com/js/global_extras.css?ver=1.0.6' type='text/css' media='' />
<link rel='stylesheet' id='ajax-search-posts-css-css'  href='//cdn.novelupdates.com/js/ajax_search.post.css?ver=1.3.5' type='text/css' media='' />
<link rel='stylesheet' id='alert-nu-css'  href='https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/alert_nu.css?ver=1.2.9' type='text/css' media='' />
<link rel='stylesheet' id='pagination-nu-css'  href='//cdn.novelupdates.com/js/pg/pagination.css?ver=1.1.1' type='text/css' media='' />
<link rel='stylesheet' id='com_mce-css'  href='//cdn.novelupdates.com/js/com_mce.css?ver=1.0.2' type='text/css' media='' />
<link rel='stylesheet' id='trumbowyg-css-css'  href='https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/trumbowyg.min.css?ver=1.0.2' type='text/css' media='all' />
<link rel='stylesheet' id='trumbowyg-color-css-css'  href='https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/plugins/colors/ui/trumbowyg.colors.min.css?ver=1.0.1' type='text/css' media='' />
<link rel='stylesheet' id='trumbowyg-table-css-css'  href='https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/plugins/table/ui/trumbowyg.table.min.css?ver=1.0.1' type='text/css' media='' />
<link rel='stylesheet' id='us-font-1-css'  href='https://fonts.googleapis.com/css?family=Noto+Sans%3A300%2C400%2C700&#038;subset=latin&#038;ver=5.2.7' type='text/css' media='all' />
<link rel='stylesheet' id='us-font-2-css'  href='https://fonts.googleapis.com/css?family=Open+Sans%3A400%2C400italic%2C700%2C700italic%2C300&#038;subset=latin&#038;ver=5.2.7' type='text/css' media='all' />
<link rel='stylesheet' id='us-motioncss-css'  href='https://www.novelupdates.com/wp-content/themes/ndupdates/css/motioncss.css?ver=4.4.2' type='text/css' media='all' />
<link rel='stylesheet' id='us-motioncss-responsive-css'  href='https://www.novelupdates.com/wp-content/themes/ndupdates/css/motioncss-responsive.css?ver=4.4.2' type='text/css' media='all' />
<link rel='stylesheet' id='us-font-awesome-css'  href='https://www.novelupdates.com/wp-content/themes/ndupdates/css/font-awesome.css?ver=4.7.1' type='text/css' media='all' />
<link rel='stylesheet' id='us-style-css'  href='https://www.novelupdates.com/wp-content/themes/ndupdates/css/style.css?ver=4.4.2' type='text/css' media='all' />
<link rel='stylesheet' id='us-responsive-css'  href='https://www.novelupdates.com/wp-content/themes/ndupdates/css/responsive.css?ver=4.4.2' type='text/css' media='all' />
<link rel='stylesheet' id='ndupdates-style-css'  href='//www.novelupdates.com/wp-content/themes/ndupdates-child/style.css?ver=4.4.2' type='text/css' media='all' />
<script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var title = {"unfolded":"Expand","folded":"Collapse"};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/plugins/bbspoiler/inc/bbspoiler.js?ver=5.2.7'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-includes/js/jquery/ui/core.min.js?ver=1.11.4'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-includes/js/jquery/ui/widget.min.js?ver=1.11.4'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-includes/js/jquery/ui/mouse.min.js?ver=1.11.4'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-includes/js/jquery/ui/sortable.min.js?ver=1.11.4'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/plugins/custom-search-plugin/js/script.js?ver=5.2.7'></script>
<script type='text/javascript' src='https://www.google.com/recaptcha/api.js?hl=en-US&#038;ver=5.2.7'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/plugins/theme-my-login/modules/themed-profiles/themed-profiles.js?ver=5.2.7'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/nu_extras_js.js?ver=1.0.4'></script>
<script type='text/javascript' src='//cdn.novelupdates.com/js/ajax_search_post.js?ver=1.3.5'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/alert_nu.js?ver=1.2.9'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/jquery.tablesorter.min.js?ver=1.0.1'></script>
<script type='text/javascript' src='//cdn.novelupdates.com/js/popoverlay/jquery.popupoverlay.js?ver=1.0.1'></script>
<script type='text/javascript' src='//cdn.novelupdates.com/js/pg/pagination.js?ver=1.0.2'></script>
<script type='text/javascript' src='//cdn.novelupdates.com/js/nuflinks.js?ver=1.1.1'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/seriesedit.js?ver=1.1.8'></script>
<script type='text/javascript' src='//cdn.novelupdates.com/js/series_extras.js?ver=1.2.0'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/nu_functions.js?ver=1.0.1'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/commentedit.js?ver=1.2.9'></script>
<script type='text/javascript' src='//cdn.novelupdates.com/js/jquery.textarea_autosize.js?ver=1.0.0'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/readinglist.js?ver=1.1.5'></script>
<script type='text/javascript' src='//cdn.novelupdates.com/js/fic_fix_editor.js?ver=1.0.1'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/trumbowyg.min.js?ver=1.0.2'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/plugins/colors/trumbowyg.colors.min.js?ver=1.0.1'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/plugins/table/trumbowyg.table.min.js?ver=1.0.1'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/chosen.jquery.min.js?ver=1.0.2'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/seriestagging.js?ver=1.0.2'></script>
<link rel='https://api.w.org/' href='https://www.novelupdates.com/wp-json/' />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.novelupdates.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://www.novelupdates.com/wp-includes/wlwmanifest.xml" /> 
<link rel='prev' title='29-Years-Old Bachelor Was&#8230; Brought to a Different World to Live Freely' href='https://www.novelupdates.com/series/29-years-old-bachelor-was-brought-to-a-different-world-to-live-freely/' />
<link rel='next' title='The Undying Drama' href='https://www.novelupdates.com/series/the-undying-drama/' />
<meta name="generator" content="WordPress 5.2.7" />
<link rel="canonical" href="https://www.novelupdates.com/series/super-god-gene/" />
<link rel='shortlink' href='https://www.novelupdates.com/?p=12963' />
<link rel="alternate" type="application/json+oembed" href="https://www.novelupdates.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.novelupdates.com%2Fseries%2Fsuper-god-gene%2F" />
<link rel="alternate" type="text/xml+oembed" href="https://www.novelupdates.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.novelupdates.com%2Fseries%2Fsuper-god-gene%2F&#038;format=xml" />
 
   
    

	<style id="us_fonts_inline">
body {
		font-family: 'Open Sans';
		font-size: 15px;
	line-height: 26px;
	font-weight: 400;
	}
.page-template-page-blank-php .l-main {
	font-size: 15px;
	}
	
.l-header .menu-item-language,
.l-header .w-nav-item {
		font-family: 'Open Sans';
		font-weight: 300;
	}
.type_desktop .menu-item-language > a,
.l-header .type_desktop .w-nav-anchor.level_1,
.type_desktop [class*="columns"] .menu-item-has-children .w-nav-anchor.level_2 {
	font-size: 16px;
	}
.type_desktop .submenu-languages .menu-item-language > a,
.l-header .type_desktop .w-nav-anchor.level_2,
.l-header .type_desktop .w-nav-anchor.level_3,
.l-header .type_desktop .w-nav-anchor.level_4 {
	font-size: 15px;
	}
.type_mobile .menu-item-language > a,
.l-header .type_mobile .w-nav-anchor.level_1 {
	font-size: 16px;
	}
.l-header .type_mobile .w-nav-anchor.level_2,
.l-header .type_mobile .w-nav-anchor.level_3,
.l-header .type_mobile .w-nav-anchor.level_4 {
	font-size: 15px;
	}

h1, h2, h3, h4, h5, h6,
.w-counter-number,
.w-logo-title,
.w-pricing-item-title,
.w-pricing-item-price,
.w-shortblog-entry-date-day,
.ult_price_figure,
.ult_countdown-amount,
.ultb3-box .ultb3-title,
.stats-block .stats-desc .stats-number {
		font-family: 'Noto Sans';
		font-weight: 300;
	}
h1 {
	font-size: 38px;
	}
h2 {
	font-size: 32px;
	}
h3 {
	font-size: 26px;
	}
h4,
.widgettitle,
.comment-reply-title,
.ultb3-box .ultb3-title,
.flip-box-wrap .flip-box .ifb-face h3,
.aio-icon-box .aio-icon-header h3.aio-icon-title {
	font-size: 20px;
	}
h5,
.w-portfolio-item-title {
	font-size: 20px;
	}
h6 {
	font-size: 18px;
	}
@media only screen and (max-width: 767px) {
body {
	font-size: 13px;
	line-height: 23px;
	}
h1 {
	font-size: 30px;
	}
h2 {
	font-size: 26px;
	}
h3 {
	font-size: 22px;
	}
h4,
.widgettitle,
.comment-reply-title,
.ultb3-box .ultb3-title,
.flip-box-wrap .flip-box .ifb-face h3,
.aio-icon-box .aio-icon-header h3.aio-icon-title {
	font-size: 20px;
	}
h5,
.w-portfolio-item-title {
	font-size: 18px;
	}
h6 {
	font-size: 16px;
	}
}

.l-body,
.headerpos_fixed .l-header {
	min-width: 1240px;
	}
.l-canvas.type_boxed,
.l-canvas.type_boxed .l-subheader,
.l-canvas.type_boxed ~ .l-footer .l-subfooter {
	max-width: 1240px;
	}
.l-subheader-h,
.l-submain-h,
.l-subfooter-h {
	max-width: 1140px;
	}
.l-sidebar {
	width: 25%;
	}
.l-content {
	width: 70%;
	}
@media only screen and (max-width: 767px) {
.g-cols.type_boxed,
.g-cols.type_boxed > div {
	display: block;
	}
.g-cols > div {
	width: 100% !important;
	margin-left: 0 !important;
	margin-bottom: 30px;
	}
.g-cols.offset_none > div,
.g-cols > div:last-child {
	margin-bottom: 0 !important;
	}
}

@media only screen and (min-width: 900px) {
.w-logo-img {
	height: 30px;
	}
.w-logo.with_transparent .w-logo-img > img.for_default {
	margin-bottom: -30px;
	}
.l-header.sticky .w-logo-img {
	height: 30px;
	}
.l-header.sticky .w-logo.with_transparent .w-logo-img > img.for_default {
	margin-bottom: -30px;
	}
}
@media only screen and (min-width: 600px) and (max-width: 899px) {
.w-logo-img {
	height: 30px;
	}
.w-logo.with_transparent .w-logo-img > img.for_default {
	margin-bottom: -30px;
	}
}
@media only screen and (max-width: 599px) {
.w-logo-img {
	height: 30px;
	}
.w-logo.with_transparent .w-logo-img > img.for_default {
	margin-bottom: -30px;
	}
}
</style>
<style id="us_colors_inline">
/*************************** BODY ***************************/

/* Body Background Color */
.l-body {
	background-color: #2c3e50;
	}

/*************************** HEADER ***************************/

/* Header Background Color */
.l-subheader.at_middle,
.l-subheader.at_middle .w-lang-list,
.l-subheader.at_middle .type_mobile .w-nav-list.level_1 {
	background-color: #2c3e50;
	}

/* Header Text Color */
.l-subheader.at_middle,
.transparent .l-subheader.at_middle .type_mobile .w-nav-list.level_1 {
	color: #edf0f2;
	}

/* Header Text Hover Color */
.no-touch .w-logo-link:hover,
.no-touch .l-subheader.at_middle .w-contacts-item-value a:hover,
.no-touch .l-subheader.at_middle .w-lang-item:hover,
.no-touch .transparent .l-subheader.at_middle .w-lang.active .w-lang-item:hover,
.no-touch .l-subheader.at_middle .w-cart:hover .w-cart-link,
.no-touch .l-subheader.at_middle .w-search-show:hover,
.l-subheader.at_middle .w-cart-quantity {
	color: #fc4349;
	}

/* Extended Header Background Color */
.l-subheader.at_top,
.l-subheader.at_top .w-lang-list,
.l-subheader.at_bottom,
.l-subheader.at_bottom .type_mobile .w-nav-list.level_1 {
	background-color: #384b5f;
	}

/* Extended Header Text Color */
.l-subheader.at_top,
.l-subheader.at_bottom,
.transparent .l-subheader.at_bottom .type_mobile .w-nav-list.level_1,
.w-lang.active .w-lang-item {
	color: #d3d8db;
	}

/* Extended Header Text Hover Color */
.no-touch .l-subheader.at_top .w-contacts-item-value a:hover,
.no-touch .l-subheader.at_top .w-lang-item:hover,
.no-touch .transparent .l-subheader.at_top .w-lang.active .w-lang-item:hover,
.no-touch .l-subheader.at_bottom .w-cart:hover .w-cart-link,
.no-touch .l-subheader.at_bottom .w-search-show:hover,
.l-subheader.at_bottom .w-cart-quantity {
	color: #fff;
	}
	
/* Transparent Header Text Color */
.l-header.transparent .l-subheader {
	color: #fff;
	}
	
/* Transparent Header Text Hover Color */
.no-touch .l-header.transparent .type_desktop .menu-item-language > a:hover,
.no-touch .l-header.transparent .type_desktop .menu-item-language:hover > a,
.no-touch .l-header.transparent .w-logo-link:hover,
.no-touch .l-header.transparent .l-subheader .w-contacts-item-value a:hover,
.no-touch .l-header.transparent .l-subheader .w-lang-item:hover,
.no-touch .l-header.transparent .l-subheader .w-search-show:hover,
.no-touch .l-header.transparent .l-subheader .w-cart-link:hover,
.l-header.transparent .l-subheader .w-cart-quantity,
.no-touch .l-header.transparent .type_desktop .w-nav-item.level_1:hover .w-nav-anchor.level_1 {
	color: #fc4349;
	}
.l-header.transparent .w-nav-title:after {
	background-color: #fc4349;
	}
	
/* Search Screen Background Color */
.l-subheader .w-search-form:before {
	background-color: #6dbcdb;
	}

/* Search Screen Text Color */
.l-subheader .w-search-form {
	color: #fff;
	}

/*************************** MAIN MENU ***************************/

/* Menu Hover Background Color */
.no-touch .l-header .menu-item-language > a:hover,
.no-touch .type_desktop .menu-item-language:hover > a,
.no-touch .l-header .w-nav-item.level_1:hover .w-nav-anchor.level_1 {
	background-color: #2c3e50;
	}

/* Menu Hover Text Color */
.no-touch .l-header .menu-item-language > a:hover,
.no-touch .type_desktop .menu-item-language:hover > a,
.no-touch .l-header .w-nav-item.level_1:hover .w-nav-anchor.level_1 {
	color: #fc4349;
	}
.w-nav-title:after {
	background-color: #fc4349;
	}

/* Menu Active Background Color */
.l-header .w-nav-item.level_1.current-menu-item .w-nav-anchor.level_1,
.l-header .w-nav-item.level_1.current-menu-ancestor .w-nav-anchor.level_1 {
	background-color: #2c3e50;
	}

/* Menu Active Text Color */
.l-header .w-nav-item.level_1.current-menu-item .w-nav-anchor.level_1,
.l-header .w-nav-item.level_1.current-menu-ancestor .w-nav-anchor.level_1 {
	color: #6dbcdb;
	}
	
/* Transparent Menu Active Text Color */
.l-header.transparent .type_desktop .w-nav-item.level_1.active .w-nav-anchor.level_1,
.l-header.transparent .type_desktop .w-nav-item.level_1.current-menu-item .w-nav-anchor.level_1,
.l-header.transparent .type_desktop .w-nav-item.level_1.current-menu-ancestor .w-nav-anchor.level_1 {
	color: #6dbcdb;
	}

/* Dropdown Background Color */
.type_desktop .submenu-languages,
.l-header .w-nav-list.level_2,
.l-header .w-nav-list.level_3,
.l-header .w-nav-list.level_4 {
	background-color: #2c3e50;
	}

/* Dropdown Text Color */
.type_desktop .submenu-languages,
.l-header .w-nav-anchor.level_2,
.l-header .w-nav-anchor.level_3,
.l-header .w-nav-anchor.level_4,
.type_desktop [class*="columns"] .w-nav-item.menu-item-has-children.current-menu-item .w-nav-anchor.level_2,
.type_desktop [class*="columns"] .w-nav-item.menu-item-has-children.current-menu-ancestor .w-nav-anchor.level_2,
.no-touch .type_desktop [class*="columns"] .w-nav-item.menu-item-has-children:hover .w-nav-anchor.level_2 {
	color: #edf0f2;
	}

/* Dropdown Hover Background Color */
.no-touch .type_desktop .submenu-languages .menu-item-language:hover > a,
.no-touch .l-header .w-nav-item.level_2:hover .w-nav-anchor.level_2,
.no-touch .l-header .w-nav-item.level_3:hover .w-nav-anchor.level_3,
.no-touch .l-header .w-nav-item.level_4:hover .w-nav-anchor.level_4 {
	background-color: #2c3e50;
	}

/* Dropdown Hover Text Color */
.no-touch .type_desktop .submenu-languages .menu-item-language:hover > a,
.no-touch .l-header .w-nav-item.level_2:hover .w-nav-anchor.level_2,
.no-touch .l-header .w-nav-item.level_3:hover .w-nav-anchor.level_3,
.no-touch .l-header .w-nav-item.level_4:hover .w-nav-anchor.level_4 {
	color: #fc4349;
	}

/* Dropdown Active Background Color */
.l-header .w-nav-item.level_2.current-menu-item .w-nav-anchor.level_2,
.l-header .w-nav-item.level_2.current-menu-ancestor .w-nav-anchor.level_2,
.l-header .w-nav-item.level_3.current-menu-item .w-nav-anchor.level_3,
.l-header .w-nav-item.level_3.current-menu-ancestor .w-nav-anchor.level_3,
.l-header .w-nav-item.level_4.current-menu-item .w-nav-anchor.level_4,
.l-header .w-nav-item.level_4.current-menu-ancestor .w-nav-anchor.level_4 {
	background-color: #2c3e50;
	}

/* Dropdown Active Text Color */
.l-header .w-nav-item.level_2.current-menu-item .w-nav-anchor.level_2,
.l-header .w-nav-item.level_2.current-menu-ancestor .w-nav-anchor.level_2,
.l-header .w-nav-item.level_3.current-menu-item .w-nav-anchor.level_3,
.l-header .w-nav-item.level_3.current-menu-ancestor .w-nav-anchor.level_3,
.l-header .w-nav-item.level_4.current-menu-item .w-nav-anchor.level_4,
.l-header .w-nav-item.level_4.current-menu-ancestor .w-nav-anchor.level_4 {
	color: #6dbcdb;
	}

/* Menu Button Background Color */
.btn.w-nav-item .w-nav-anchor.level_1,
.headerpos_fixed .transparent .btn.w-nav-item .w-nav-anchor.level_1 {
	background-color: #6dbcdb !important;
	}

/* Menu Button Text Color */
.btn.w-nav-item .w-nav-anchor.level_1 {
	color: #fff !important;
	}

/* Menu Button Hover Background Color */
.no-touch .btn.w-nav-item .w-nav-anchor.level_1:before {
	background-color: #fc4349 !important;
	}

/* Menu Button Hover Text Color */
.no-touch .btn.w-nav-item .w-nav-anchor.level_1:hover {
	color: #fff !important;
	}

/*************************** MAIN CONTENT ***************************/

/* Background Color */
.l-canvas,
.w-blog.type_masonry .w-blog-entry-preview:before,
.w-cart-dropdown,
.w-filters-item.active,
.no-touch .w-filters-item.active:hover,
.w-portfolio-item-anchor,
.w-tabs-item.active,
.no-touch .w-tabs-item.active:hover,
.w-timeline-item,
.w-timeline-section-title,
.w-timeline.type_vertical .w-timeline-section-content,
#lang_sel ul ul,
#lang_sel_click ul ul,
#lang_sel_footer,
.woocommerce div.product .woocommerce-tabs .tabs li.active,
.no-touch .woocommerce div.product .woocommerce-tabs .tabs li.active:hover,
.woocommerce .stars span:after,
.woocommerce .stars span a:after,
#bbp-user-navigation li.current,
.gform_wrapper .chosen-container .chosen-drop,
.gform_wrapper .chosen-container-multi .chosen-choices li.search-choice {
	background-color: #fff;
	}
.g-btn.color_contrast,
.no-touch .g-btn.color_contrast:hover,
.no-touch .g-btn.color_contrast.outlined:hover,
.w-icon.color_border.type_solid .w-icon-link,
.w-iconbox.color_contrast.type_solid .w-iconbox-icon {
	color: #fff;
	}

/* Alternate Background Color */
input[type="text"],
input[type="password"],
input[type="email"],
input[type="url"],
input[type="tel"],
input[type="number"],
input[type="date"],
input[type="search"],
textarea,
select,
.w-actionbox.color_alternate,
.w-author,
.w-blog.imgpos_atleft .w-blog-entry-preview-icon,
.w-filters,
.w-icon.color_text.type_solid .w-icon-link,
.w-icon.color_fade.type_solid .w-icon-link,
.w-pricing-item-title,
.w-pricing-item-price,
.w-progbar-bar,
.w-tabs-list,
.no-touch .widget_nav_menu .menu-item a:hover,
.no-touch #lang_sel a:hover,
.no-touch #lang_sel_click a:hover,
.woocommerce .quantity .plus,
.woocommerce .quantity .minus,
.woocommerce div.product .woocommerce-tabs .tabs,
.woocommerce table.shop_table .actions .coupon .input-text,
.woocommerce #payment .payment_box,
#bbp-user-navigation,
#subscription-toggle,
#favorite-toggle,
.bbp-row-actions #favorite-toggle a,
.bbp-row-actions #subscription-toggle a,
.gform_wrapper .chosen-container-single .chosen-single,
.gform_wrapper .chosen-container-multi .chosen-choices,
.select2-container a.select2-choice,
.smile-icon-timeline-wrap .timeline-wrapper .timeline-block,
.smile-icon-timeline-wrap .timeline-feature-item.feat-item {
	background-color: #f2f4f5;
	}
.woocommerce #payment .payment_box:after,
.timeline-wrapper .timeline-post-right .ult-timeline-arrow l,
.timeline-wrapper .timeline-post-left .ult-timeline-arrow l,
.timeline-feature-item.feat-item .ult-timeline-arrow l {
	border-color: #f2f4f5;
	}

/* Border Color */
.l-submain,
.g-cols > div,
.w-blog-entry,
.w-bloglist,
.w-blognav,
.w-comments,
.w-comments-item,
.w-pricing-item-h,
.w-profile,
.w-sharing.type_simple .w-sharing-item,
.w-tabs.layout_accordion,
.w-tabs.layout_accordion .w-tabs-section,
.w-timeline.type_vertical .w-timeline-section-content,
#wp-calendar thead th,
#wp-calendar tbody td,
#wp-calendar tfoot td,
.widget_nav_menu .menu-item a,
#lang_sel a,
#lang_sel_click a,
.woocommerce table th,
.woocommerce table td,
.woocommerce .login,
.woocommerce .checkout_coupon,
.woocommerce .register,
.woocommerce .cart.variations_form,
.woocommerce .commentlist,
.woocommerce .commentlist li,
.woocommerce .comment-respond,
.woocommerce .related,
.woocommerce .upsells,
.woocommerce .cross-sells,
.woocommerce .checkout #order_review,
.woocommerce ul.order_details li,
.woocommerce .shop_table.my_account_orders,
.widget_price_filter .ui-slider-handle,
.widget_layered_nav ul,
.widget_layered_nav ul li,
#bbpress-forums .bbp-body ul.forum,
#bbpress-forums .bbp-forums li.bbp-header,
#bbpress-forums .bbp-body ul.topic,
#bbpress-forums .bbp-topics li.bbp-header,
.bbp-replies .bbp-body,
div.bbp-forum-header,
div.bbp-topic-header,
div.bbp-reply-header,
.bbp-pagination-links a,
.bbp-pagination-links span.current,
span.bbp-topic-pagination a.page-numbers,
.bbp-logged-in,
fieldset,
.form_saved_message,
.gform_wrapper .gsection,
.gform_wrapper .gf_page_steps,
.gform_wrapper li.gfield_creditcard_warning,
.smile-icon-timeline-wrap .timeline-line,
.ult_pricing_table_wrap.ult_design_6 .ult_pricing_table {
	border-color: #e4e8eb;
	}
.g-hr-h i,
.w-icon.color_border .w-icon-link,
.w-iconbox.color_light .w-iconbox-icon {
	color: #e4e8eb;
	}
.g-hr-h:before,
.g-hr-h:after,
.g-btn.color_default,
.g-btn.color_default.outlined:before,
.w-icon.color_border.type_solid .w-icon-link,
.w-iconbox.color_light.type_solid .w-iconbox-icon,
.w-timeline-list:before,
.woocommerce .button,
.no-touch .woocommerce .quantity .plus:hover,
.no-touch .woocommerce .quantity .minus:hover,
.widget_price_filter .ui-slider,
.gform_wrapper .gform_page_footer .gform_previous_button {
	background-color: #e4e8eb;
	}
.g-btn.color_default.outlined,
.pagination .page-numbers,
.w-iconbox.color_light.type_outlined .w-iconbox-icon,
.w-socials-item-link,
.w-tags-item-link,
.w-team-links-item,
.w-testimonial,
.woocommerce-pagination a,
.woocommerce-pagination span {
	box-shadow: 0 0 0 2px #e4e8eb inset;
	}

/* Heading Color */
h1, h2, h3, h4, h5, h6,
input[type="text"],
input[type="password"],
input[type="email"],
input[type="url"],
input[type="tel"],
input[type="number"],
input[type="date"],
input[type="search"],
textarea,
select,
.w-form-field > i,
.no-touch .g-btn.color_default:hover,
.no-touch .g-btn.color_default.outlined:hover,
.g-btn.color_contrast.outlined,
.w-blog-entry-title,
.w-counter-number,
.w-iconbox.color_contrast .w-iconbox-icon,
.w-portfolio-item-anchor,
.no-touch a.w-portfolio-item-anchor:hover,
.l-submain.color_primary a.w-portfolio-item-anchor,
.l-submain.color_secondary a.w-portfolio-item-anchor,
.w-pricing-item-title,
.w-pricing-item-price,
.woocommerce .product .price {
	color: #292e33;
	}
.g-btn.color_contrast,
.g-btn.color_contrast.outlined:before,
.w-iconbox.color_contrast.type_solid .w-iconbox-icon,
.w-progbar.color_contrast .w-progbar-bar-h {
	background-color: #292e33;
	}
.g-btn.color_contrast.outlined,
.w-iconbox.color_contrast.type_outlined .w-iconbox-icon {
	box-shadow: 0 0 0 2px #292e33 inset;
	}

/* Text Color */
.l-canvas,
.g-btn.color_default,
.g-btn.color_default.outlined,
.w-cart-dropdown,
.w-icon.color_text .w-icon-link,
.w-iconbox.color_light.type_solid .w-iconbox-icon,
.color_primary .w-icon.color_text.type_solid .w-icon-link,
.woocommerce .button,
.l-subfooter.at_top .woocommerce .button {
	color: #5c6166;
	}

/* Primary Color */
a,
.g-html .highlight,
.g-btn.color_primary.outlined,
.no-touch .w-blog-entry-link:hover .w-blog-entry-title-h,
.no-touch .w-blog-entry-link:hover,
.l-main .w-contacts-item i,
.w-counter.color_primary .w-counter-number,
.w-filters-item.active,
.no-touch .w-filters-item.active:hover,
.w-form-field > input:focus + i,
.w-form-field > textarea:focus + i,
.w-icon.color_primary .w-icon-link,
.w-iconbox.color_primary .w-iconbox-icon,
.no-touch .w-iconbox-link:hover .w-iconbox-title,
.no-touch .w-pagehead-nav-item:hover,
.w-tabs-item.active,
.no-touch .w-tabs-item.active:hover,
.w-tabs.layout_accordion .w-tabs-section.active .w-tabs-section-header,
.no-touch .w-tags-item-link:hover,
.w-team-link .w-team-name,
.no-touch .w-clients .slick-prev:hover,
.no-touch .w-clients .slick-next:hover,
.woocommerce .products .product .button,
.no-touch .woocommerce .products .product .button.loading:hover,
.woocommerce .star-rating span:before,
.woocommerce-breadcrumb a,
.woocommerce div.product .woocommerce-tabs .tabs li.active,
.no-touch .woocommerce div.product .woocommerce-tabs .tabs li.active:hover,
.woocommerce .stars span a:after,
#subscription-toggle span.is-subscribed:before,
#favorite-toggle span.is-favorite:before {
	color: #6dbcdb;
	}
.l-submain.color_primary,
.w-actionbox.color_primary,
.g-btn.color_primary,
.g-btn.color_primary.outlined:before,
button,
input[type="submit"],
.no-touch .pagination .page-numbers:before,
.pagination .page-numbers.current,
.no-touch .w-iconbox.type_outlined .w-iconbox-icon:before,
.no-touch .w-iconbox.type_solid .w-iconbox-icon:before,
.w-iconbox.color_primary.type_solid .w-iconbox-icon,
.no-touch .w-filters-item:hover,
.w-icon.color_primary.type_solid .w-icon-link,
.w-pricing-item.type_featured .w-pricing-item-title,
.w-pricing-item.type_featured .w-pricing-item-price,
.w-progbar.color_primary .w-progbar-bar-h,
.no-touch .w-team-links,
.w-timeline-item:before,
.w-timeline.type_vertical .w-timeline-section:before,
.w-timeline-section-title:before,
.w-timeline-section.active .w-timeline-section-title:before,
.no-touch .w-toplink.active:hover,
.no-touch .tp-leftarrow.custom:before,
.no-touch .tp-rightarrow.custom:before,
.widget_nav_menu .menu-item.current-menu-item > a,
.no-touch .widget_nav_menu .menu-item.current-menu-item > a:hover,
p.demo_store,
.woocommerce .button.alt,
.woocommerce .button.checkout,
.no-touch .woocommerce .products .product .button:hover,
.no-touch .woocommerce-pagination a:hover,
.woocommerce-pagination span.current,
.woocommerce .onsale,
.widget_price_filter .ui-slider-range,
.widget_layered_nav ul li.chosen,
.widget_layered_nav_filters ul li a,
.no-touch .bbp-pagination-links a:hover,
.bbp-pagination-links span.current,
.no-touch span.bbp-topic-pagination a.page-numbers:hover,
.gform_wrapper .gf_progressbar_percentage,
.gform_wrapper .gform_page_footer .gform_next_button,
.gform_wrapper .chosen-container .chosen-results li.highlighted,
.smile-icon-timeline-wrap .timeline-separator-text .sep-text,
.smile-icon-timeline-wrap .timeline-wrapper .timeline-dot,
.smile-icon-timeline-wrap .timeline-feature-item .timeline-dot {
	background-color: #6dbcdb;
	}
.g-html blockquote,
.w-blog-entry.sticky,
.no-touch .w-clients-item-h:hover,
.w-filters-item.active,
.w-tabs-item.active,
.no-touch .w-tabs-item.active:hover,
.widget_nav_menu .menu-item.current-menu-item > a,
.fotorama__thumb-border,
.woocommerce div.product .woocommerce-tabs .tabs li.active,
.widget_layered_nav ul li.chosen,
.no-touch .bbp-pagination-links a:hover,
.bbp-pagination-links span.current,
.no-touch span.bbp-topic-pagination a.page-numbers:hover,
#bbp-user-navigation li.current {
	border-color: #6dbcdb;
	}
input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="tel"]:focus,
input[type="number"]:focus,
input[type="date"]:focus,
input[type="search"]:focus,
textarea:focus,
select:focus,
#bbpress-forums div.bbp-the-content-wrapper textarea:focus {
	box-shadow: 0 0 0 2px #6dbcdb;
	}
.g-btn.color_primary.outlined,
.l-main .w-contacts-item i,
.w-iconbox.color_primary.type_outlined .w-iconbox-icon,
.no-touch .w-pagehead-nav-item:hover,
.no-touch .w-tags-item-link:hover,
.no-touch .w-testimonial:hover,
.w-timeline-item,
.w-timeline-section-title,
.no-touch .w-clients .slick-prev:hover,
.no-touch .w-clients .slick-next:hover,
.woocommerce .products .product .button,
.no-touch .woocommerce .products .product .button.loading:hover {
	box-shadow: 0 0 0 2px #6dbcdb inset;
	}

/* Secondary Color */
.no-touch a:hover,
.g-btn.color_secondary.outlined,
.no-touch .w-blog.type_masonry .w-blog-meta a:hover,
.no-touch .w-blognav-prev:hover .w-blognav-title,
.no-touch .w-blognav-next:hover .w-blognav-title,
.w-counter.color_secondary .w-counter-number,
.w-icon.color_secondary .w-icon-link,
.w-iconbox.color_secondary .w-iconbox-icon,
.no-touch .w-team-link:hover .w-team-name,
.no-touch .widget_archive ul li a:hover,
.no-touch .widget_categories ul li a:hover,
.no-touch .widget_tag_cloud .tagcloud a:hover,
.no-touch .woocommerce-breadcrumb a:hover,
.no-touch .widget_product_tag_cloud .tagcloud a:hover,
.no-touch .bbp_widget_login a.button.logout-link:hover {
	color: #fc4349;
	}
.l-submain.color_secondary,
.w-actionbox.color_secondary,
.g-btn.color_secondary,
.g-btn.color_secondary.outlined:before,
.w-icon.color_secondary.type_solid .w-icon-link,
.w-iconbox.color_secondary.type_solid .w-iconbox-icon,
.w-progbar.color_secondary .w-progbar-bar-h,
.no-touch .button:hover,
.no-touch input[type="submit"]:hover,
.no-touch .woocommerce .button:hover,
.no-touch .woocommerce .button.alt:hover,
.no-touch .woocommerce .button.checkout:hover,
.no-touch .woocommerce .shop_table.cart .product-remove a:hover,
.no-touch .widget_layered_nav_filters ul li a:hover,
.no-touch .bbp-row-actions #favorite-toggle a:hover,
.no-touch .bbp-row-actions #subscription-toggle a:hover {
	background-color: #fc4349;
	}
.g-btn.color_secondary.outlined,
.w-iconbox.color_secondary.type_outlined .w-iconbox-icon {
	box-shadow: 0 0 0 2px #fc4349 inset;
	}

/* Fade Elements Color */
.w-blog-meta,
.w-blog-meta a,
.w-icon.color_fade .w-icon-link,
.no-touch .w-icon.color_fade.type_solid .w-icon-link:hover,
.w-profile-link.for_logout,
.widget_tag_cloud .tagcloud a,
.woocommerce-breadcrumb,
.woocommerce .star-rating:before,
.woocommerce .stars span:after,
.woocommerce table.shop_table .product-remove a.remove,
.widget_product_tag_cloud .tagcloud a,
p.bbp-topic-meta,
.bbp_widget_login a.button.logout-link {
	color: #a4abb3;
	}
.w-shortblog-entry-date {
	box-shadow: 0 0 0 2px #a4abb3 inset;
	}

/*************************** ALTERNATE CONTENT ***************************/

/* Background Color */
.l-submain.color_alternate,
.color_alternate .w-blog.type_masonry .w-blog-entry-preview:before,
.color_alternate .w-filters-item.active,
.no-touch .color_alternate .w-filters-item.active:hover,
.color_alternate .w-tabs-item.active,
.no-touch .color_alternate .w-tabs-item.active:hover,
.color_alternate .w-timeline-item,
.color_alternate .w-timeline-section-title,
.color_alternate .w-timeline.type_vertical .w-timeline-section-content {
	background-color: #f2f4f5;
	}
.color_alternate .g-btn.color_contrast,
.no-touch .color_alternate .g-btn.color_contrast:hover,
.no-touch .color_alternate .g-btn.color_contrast.outlined:hover,
.color_alternate .w-icon.color_border.type_solid .w-icon-link {
	color: #f2f4f5;
	}

/* Alternate Background Color */
.color_alternate input[type="text"],
.color_alternate input[type="password"],
.color_alternate input[type="email"],
.color_alternate input[type="url"],
.color_alternate input[type="tel"],
.color_alternate input[type="number"],
.color_alternate input[type="date"],
.color_alternate input[type="search"],
.color_alternate textarea,
.color_alternate select,
.color_alternate .w-blog.imgpos_atleft .w-blog-entry-preview-icon,
.color_alternate .w-filters,
.color_alternate .w-icon.color_text.type_solid .w-icon-link,
.color_alternate .w-icon.color_fade.type_solid .w-icon-link,
.color_alternate .w-pricing-item-title,
.color_alternate .w-pricing-item-price,
.color_alternate .w-tabs-list {
	background-color: #fff;
	}

/* Border Color */
.color_alternate .w-blog-entry,
.color_alternate .w-bloglist,
.color_alternate .w-comments-item,
.color_alternate .w-pricing-item-h,
.color_alternate .w-tabs.layout_accordion,
.color_alternate .w-tabs.layout_accordion .w-tabs-section,
.color_alternate .w-timeline.type_vertical .w-timeline-section-content {
	border-color: #e3e6e8;
	}
.color_alternate .g-hr-h i,
.color_alternate .page-404 i,
.color_alternate .w-icon.color_border .w-icon-link {
	color: #e3e6e8;
	}
.color_alternate .g-hr-h:before,
.color_alternate .g-hr-h:after,
.color_alternate .g-btn.color_default,
.color_alternate .g-btn.color_default.outlined:before,
.color_alternate .w-icon.color_border.type_solid .w-icon-link,
.color_alternate .w-timeline-list:before {
	background-color: #e3e6e8;
	}
.color_alternate .g-btn.color_default.outlined,
.color_alternate .pagination .page-numbers,
.color_alternate .w-socials-item-link,
.color_alternate .w-tags-item-link,
.color_alternate .w-team-links-item,
.color_alternate .w-testimonial {
	box-shadow: 0 0 0 2px #e3e6e8 inset;
	}

/* Heading Color */
.color_alternate h1,
.color_alternate h2,
.color_alternate h3,
.color_alternate h4,
.color_alternate h5,
.color_alternate h6,
.color_alternate input[type="text"],
.color_alternate input[type="password"],
.color_alternate input[type="email"],
.color_alternate input[type="url"],
.color_alternate input[type="tel"],
.color_alternate input[type="number"],
.color_alternate input[type="date"],
.color_alternate textarea,
.color_alternate select,
.color_alternate .w-form-field > i,
.no-touch .color_alternate .g-btn.color_default:hover,
.no-touch .color_alternate .g-btn.color_default.outlined:hover,
.color_alternate .g-btn.color_contrast.outlined,
.color_alternate .w-blog-entry-title,
.color_alternate .w-counter-number,
.color_alternate .w-pricing-item-title,
.color_alternate .w-pricing-item-price {
	color: #292e33;
	}
.color_alternate .g-btn.color_contrast,
.color_alternate .g-btn.color_contrast.outlined:before {
	background-color: #292e33;
	}
.color_alternate .g-btn.color_contrast.outlined {
	box-shadow: 0 0 0 2px #292e33 inset;
	}

/* Text Color */
.l-submain.color_alternate,
.color_alternate .g-btn.color_default,
.color_alternate .g-btn.color_default.outlined,
.color_alternate .w-icon.color_text .w-icon-link {
	color: #5c6166;
	}

/* Primary Color */
.color_alternate a,
.color_alternate .g-btn.color_primary.outlined,
.no-touch .color_alternate .w-blog-entry-link:hover .w-blog-entry-title-h,
.no-touch .color_alternate .w-blog-entry-link:hover,
.color_alternate .l-main .w-contacts-item i,
.color_alternate .w-counter.color_primary .w-counter-number,
.color_alternate .w-filters-item.active,
.no-touch .color_alternate .w-filters-item.active:hover,
.color_alternate .w-icon.color_primary .w-icon-link,
.color_alternate .w-iconbox-icon,
.no-touch .color_alternate .w-iconbox-link:hover .w-iconbox-title,
.no-touch .color_alternate .w-pagehead-nav-item:hover,
.color_alternate .w-tabs-item.active,
.no-touch .color_alternate .w-tabs-item.active:hover,
.color_alternate .w-tabs.layout_accordion .w-tabs-section.active .w-tabs-section-header,
.no-touch .color_alternate .w-tags-item-link:hover,
.color_alternate .w-team-link .w-team-name {
	color: #6dbcdb;
	}
.color_alternate .g-btn.color_primary,
.color_alternate .g-btn.color_primary.outlined:before,
.color_alternate input[type="submit"],
.no-touch .color_alternate .pagination .page-numbers:before,
.color_alternate .pagination .page-numbers.current,
.no-touch .color_alternate .w-filters-item:hover,
.color_alternate .w-icon.color_primary.type_solid .w-icon-link,
.color_alternate .w-pricing-item.type_featured .w-pricing-item-title,
.color_alternate .w-pricing-item.type_featured .w-pricing-item-price,
.no-touch .color_alternate .w-team-links,
.color_alternate .w-timeline-item:before,
.color_alternate .w-timeline.type_vertical .w-timeline-section:before,
.color_alternate .w-timeline-section-title:before,
.color_alternate .w-timeline-section.active .w-timeline-section-title:before {
	background-color: #6dbcdb;
	}
.color_alternate .g-html blockquote,
.color_alternate .w-blog-entry.sticky,
.color_alternate .w-filters-item.active,
.color_alternate .w-tabs-item.active,
.no-touch .color_alternate .w-tabs-item.active:hover {
	border-color: #6dbcdb;
	}
.color_alternate input[type="text"]:focus,
.color_alternate input[type="password"]:focus,
.color_alternate input[type="email"]:focus,
.color_alternate input[type="url"]:focus,
.color_alternate input[type="tel"]:focus,
.color_alternate input[type="number"]:focus,
.color_alternate input[type="date"]:focus,
.color_alternate input[type="search"]:focus,
.color_alternate textarea:focus,
.color_alternate select:focus {
	box-shadow: 0 0 0 2px #6dbcdb;
	}
.color_alternate .g-btn.color_primary.outlined,
.color_alternate .l-main .w-contacts-item i,
.no-touch .color_alternate .w-pagehead-nav-item:hover,
.no-touch .color_alternate .w-tags-item-link:hover,
.no-touch .color_alternate .w-testimonial:hover,
.color_alternate .w-timeline-item:before,
.color_alternate .w-timeline-section-title:before {
	box-shadow: 0 0 0 2px #6dbcdb inset;
	}

/* Secondary Color */
.no-touch .color_alternate a:hover,
.no-touch .color_alternate a:active,
.color_alternate .g-btn.color_secondary.outlined,
.no-touch .color_alternate .w-blog.type_masonry .w-blog-meta a:hover,
.color_alternate .w-counter.color_secondary .w-counter-number,
.color_alternate .w-icon.color_secondary .w-icon-link,
.no-touch .color_alternate .w-team-link:hover .w-team-name {
	color: #fc4349;
	}
.color_alternate .g-btn.color_secondary,
.color_alternate .g-btn.color_secondary.outlined:before,
.color_alternate .w-icon.color_secondary.type_solid .w-icon-link {
	background-color: #fc4349;
	}
.color_alternate .g-btn.color_secondary.outlined {
	box-shadow: 0 0 0 2px #fc4349 inset;
	}

/* Fade Elements Color */
.color_alternate .w-blog-meta,
.color_alternate .w-blog-meta a,
.color_alternate .w-bloglist-entry-date,
.color_alternate .w-bloglist-entry-author,
.color_alternate .w-icon.color_fade .w-icon-link {
	color: #a4abb3;
	}
.color_alternate .w-shortblog-entry-date {
	box-shadow: 0 0 0 2px #a4abb3 inset;
	}

/*************************** SUBFOOTER ***************************/

/* Background Color */
.l-subfooter.at_top,
.l-subfooter.at_top #lang_sel ul ul,
.l-subfooter.at_top #lang_sel_click ul ul {
	background-color: #2c3e50;
	}
	
/* Alternate Background Color */
.l-subfooter.at_top input[type="text"],
.l-subfooter.at_top input[type="password"],
.l-subfooter.at_top input[type="email"],
.l-subfooter.at_top input[type="url"],
.l-subfooter.at_top input[type="tel"],
.l-subfooter.at_top input[type="number"],
.l-subfooter.at_top input[type="date"],
.l-subfooter.at_top input[type="search"],
.l-subfooter.at_top textarea,
.l-subfooter.at_top select,
.no-touch .l-subfooter.at_top #lang_sel a:hover,
.no-touch .l-subfooter.at_top #lang_sel_click a:hover {
	background-color: #384b5f;
	}

/* Border Color */
.l-subfooter.at_top,
.l-subfooter.at_top #wp-calendar thead th,
.l-subfooter.at_top #wp-calendar tbody td,
.l-subfooter.at_top #wp-calendar tfoot td,
.l-subfooter.at_top #lang_sel a,
.l-subfooter.at_top #lang_sel_click a,
.l-subfooter.at_top .widget_nav_menu .menu-item a {
	border-color: #384b5f;
	}
.l-subfooter.at_top .w-socials-item-link {
	box-shadow: 0 0 0 2px #384b5f inset;
	}

/* Text Color */
.l-subfooter.at_top,
.l-subfooter.at_top .w-socials-item-link {
	color: #939da3;
	}

/* Heading Color */
.l-subfooter.at_top h1,
.l-subfooter.at_top h2,
.l-subfooter.at_top h3,
.l-subfooter.at_top h4,
.l-subfooter.at_top h5,
.l-subfooter.at_top h6,
.l-subfooter.at_top .w-form-field > i,
.l-subfooter.at_top input[type="text"],
.l-subfooter.at_top input[type="password"],
.l-subfooter.at_top input[type="email"],
.l-subfooter.at_top input[type="url"],
.l-subfooter.at_top input[type="tel"],
.l-subfooter.at_top input[type="number"],
.l-subfooter.at_top input[type="date"],
.l-subfooter.at_top input[type="search"],
.l-subfooter.at_top textarea,
.l-subfooter.at_top select {
	color: #d3d8db;
	}

/* Link Color */
.l-subfooter.at_top a,
.l-subfooter.at_top .widget_tag_cloud .tagcloud a,
.l-subfooter.at_top .widget_product_tag_cloud .tagcloud a {
	color: #6dbcdb;
	}

/* Link Hover Color */
.no-touch .l-subfooter.at_top a:hover,
.no-touch .l-subfooter.at_top .widget_tag_cloud .tagcloud a:hover,
.no-touch .l-subfooter.at_top .widget_product_tag_cloud .tagcloud a:hover {
	color: #fc4349;
	}

/*************************** FOOTER ***************************/

/* Background Color */
.l-subfooter.at_bottom {
	background-color: #ffffff;
	}

/* Text Color */
.l-subfooter.at_bottom {
	color: #939da3;
	}

/* Link Color */
.l-subfooter.at_bottom a {
	color: #d3d8db;
	}

/* Link Hover Color */
.no-touch .l-subfooter.at_bottom a:hover {
	color: #fc4349;
	}
</style>
</head>


<link rel='stylesheet' id='mesh-nightmode-css'  href='https://www.novelupdates.com/wp-content/themes/ndupdates-child/mystyles/Default.css?ver=2.1.1' type='text/css' media='all' /><body class="seriesplans-template-default single single-seriesplans postid-12963 l-body us-theme_nd_4-4-2">


<!-- CANVAS -->

<div class="l-canvas  col_contside">

	<!-- HEADER -->
	<div class="l-header">

		<div class="l-subheader at_top" style="line-height: 36px; ">
			<div class="l-subheader-h i-cf">
			</div>
		</div>
				<div class="l-subheader at_middle"  style="line-height: 60px;">
			<div class="l-subheader-h i-widgets i-cf">

				<div class="w-logo  with_title">
					<a class="w-logo-link" href="https://www.novelupdates.com/">
												<span class="w-logo-title">Novel Updates</span>
					</a>
				</div>

				                
                   
			    <script>$( document ).ready(function() {$.get( "https://forum.novelupdates.com/nufonline_guest.php" );});</script>                
                <span class="menu_username_right" id="menu_username_right"><span class="menu_right_icons notloggedin"><a class="menu_right_links" href="/register/">Register</a></span><span class="menu_right_icons notloggedin"><a class="menu_right_links" href="/login/">Login</a></span><span id="gs_menu" class="menu_right_icons search guest" onclick="toggleUserMenu();"><i id="gs_menu" class="fa fa-user-circle menu" aria-hidden="true" dp="yes"></i><i id="gs_menu" class="fa fa-angle-down menu" aria-hidden="true" dp="yes"></i></span><div title="Guest Menu" class="lo_main_themain guest" style="display: inline; position:relative;">
						<div class="lo_main">
						<div class="arrow-up_toc_username"></div>
						<div class="lo_box">
						<span><span class="user_menu_links atpmn" id="user_menu_links">Theme <select class="wi_themes" id="wi_themes" dp="yes" onchange="toggleTheme(this.value);"><option value="Default" dp="yes">Default</option><option value="Dark" dp="yes">Dark</option><option value="Dark - Crisp" dp="yes">Dark Crisp</option></select></span></span>
						</div></div>
						</div><span class="menu_right_icons search" title="Search" onclick="show_search_bar(this);"><i class="fa fa-search menu"></i></span><span class="menu_right_icons mobile" style="display:none;" onclick="toggleMobileMenu();"><i class="fa fa-bars menu" aria-hidden="true"></i></span><span class="nu_menu_search"><div class="ab_title" dp="yes">Search</div><form id="search_nu_novel" action="https://www.novelupdates.com/"><span class="w-search-input-h">
						<div class="srh_menu">
						<input id="searchme-rl newmenu" class="nusearchnovel" autocomplete="off" onkeyup="showSearch(this.value)" type="text" value="" name="s" placeholder="Search...">
						</div>
						<input type="hidden" name="post_type" value="seriesplans">
							
						<div class="w-search-submit">
						<span class="search_menu_right"><i class="fa fa-search btn" onclick="search_btn_click();"></i></span>
						
						<div class ="search_type">			
						<span style="padding-right: 35px;">
						<span onclick="g_checkmark(this);" id="rl_checkbox_main" class="s_series islbl" value="1"><i dp="yes" class="fa fa-check" value="1" aria-hidden="true"></i></span>
						<span onclick="g_check_lbl(this);" style="position: relative; top: -1px ;padding-left: 2px; cursor:pointer;">Series</span></span>
					
						<span>
						<span onclick="g_checkmark(this);" id="rl_checkbox_main" class="s_users islbl" value="0">
						<i class="fa fa-check icon-invisible" aria-hidden="true" value="0"></i></span>
						<span onclick="g_check_lbl(this);" style="position: relative; top: -1px ;padding-left: 2px; cursor:pointer;">Group</span></span>
						</div>
						
						<div style="font-size: 13px; padding-right:5px; position: relative; top: 15px;"><a href="https://www.novelupdates.com/series-finder/">Series Finder</a></div>
						</div>
							
						</span><div class="livesearchresult" style="display: none; z-index: 2;"></div></form></span></span>                
            
				<!-- NAV -->
				<nav class="w-nav layout_hor animation_">
					<ul class="w-nav-list level_1 ">

                        <div class="menu_items_display" style="display:none;"><li id="menu-item-73" class="menu-item menu-item-type-post_type menu-item-object-page w-nav-item menu-item-73"><a class="w-nav-anchor level_1" href="/login/"><span class="w-nav-title">Login</span><span class="w-nav-arrow"></span></a></li><li id="menu-item-73" class="menu-item menu-item-type-post_type menu-item-object-page w-nav-item menu-item-73"><a class="w-nav-anchor level_1" href="/register/"><span class="w-nav-title">Register</span><span class="w-nav-arrow"></span></a></li><li id="menu-item-73" class="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-73"><a class="w-nav-anchor level_1" href="http://forum.novelupdates.com/"><span class="w-nav-title">Forum</span><span class="w-nav-arrow"></span></a></li><li id="menu-item-73" class="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-73"><a class="w-nav-anchor level_1" href="//www.novelupdates.com/random-novel/"><span class="w-nav-title">Random Novel</span><span class="w-nav-arrow"></span></a></li><li id="menu-item-73" class="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-73"><a class="w-nav-anchor level_1" href="//www.novelupdates.com/series-finder/"><span class="w-nav-title">Series Finder</span><span class="w-nav-arrow"></span></a></li><li id="menu-item-73" class="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-73"><a class="w-nav-anchor level_1" href="//www.novelupdates.com/novelslisting/"><span class="w-nav-title">Series Listing</span><span class="w-nav-arrow"></span></a></li><li id="menu-item-73" class="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-73"><a class="w-nav-anchor level_1" href="//www.novelupdates.com/series-ranking/"><span class="w-nav-title">Series Ranking</span><span class="w-nav-arrow"></span></a></li><li id="menu-item-73" class="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-73"><a class="w-nav-anchor level_1" href="//www.novelupdates.com/latest-series/"><span class="w-nav-title">Latest Series</span><span class="w-nav-arrow"></span></a></li><li id="menu-item-73" class="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-73"><a class="w-nav-anchor level_1" href="https://www.novelupdates.com/recommendation-lists/"><span class="w-nav-title">Rec Lists</span><span class="w-nav-arrow"></span></a></li><li id="menu-item-73" class="menu-item menu-item-type-post_type menu-item-object-page w-nav-item level_1 menu-item-73"><span class="w-an_cus">Theme</span> <span class="c_theme"><select class="wi_themes" id="wi_themes" dp="yes" onchange="toggleTheme(this.value);"><option value="Default" dp="yes">Default</option><option value="Dark" dp="yes">Dark</option><option value="Dark - Crisp" dp="yes">Dark Crisp</option></select></span></li></div>                    </ul>
				</nav><!-- /NAV -->
				
							</div>
		</div>


	</div>
	<!-- /HEADER -->
    <div class="ol_account_main" style="position:relative; display: none;">
			<div class="ol_account"><span class="ol_title">Your changes has been saved.</span></div></div>	<!-- MAIN -->
	<div class="l-main">




<link rel="stylesheet" href="https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/gadient/style.css"><link rel="stylesheet" href="https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/chkstyle.css?ver=1.0.0"><link rel="stylesheet" href="https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/seriestagging.css?ver=1.1.0"><link rel="stylesheet" href="https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/chosen.min.css"><input type="hidden" id="mypostid" value="12963"><link rel="stylesheet" href="https://www.novelupdates.com/wp-content/themes/ndupdates-child/js/gh-buttons.css?ver=1.0.1"> 
<meta name="description" content="The future unfolded on a magnificent scale into the Interstellar Age. Humanity finally solved the space warp technology, but when humanity transported themselves into the other end, they discovered that place neither had a past nor future, nor was there any land under the starry skies……

The mysterious sanctuary was actually a world filled with countless tyrannical unusual organisms. Humanity faced their great leap in evolution, starting the most glorious and resplendant new era under the starry skies.

“Slaughtered the God Blood organism ‘Black Beetle’. Received the God Blood Black Beetle’s Beast Soul. Used the God Blood Black Beetle’s flesh. Randomly obtaining 0 to 10 points of God Gene(s).”>" />
<meta property="og:site_name" content="Novel Updates" />
<meta property="og:image" content="https://cdn.novelupdates.com/images/2017/09/Super-God-Gene.jpg" />
<meta property="og:type" content="books.book" />
<meta property="og:url" content="https://www.novelupdates.com/series/super-god-gene/" />
<meta property="og:title" content="Super God Gene" />
<meta property="og:description" content="The future unfolded on a magnificent scale into the Interstellar Age. Humanity finally solved the space warp technology, but when humanity transported themselves into the other end, they discovered that place neither had a past nor future, nor was there any land under the starry skies……

The mysterious sanctuary was actually a world filled with countless tyrannical unusual organisms. Humanity faced their great leap in evolution, starting the most glorious and resplendant new era under the starry skies.

“Slaughtered the God Blood organism ‘Black Beetle’. Received the God Blood Black Beetle’s Beast Soul. Used the God Blood Black Beetle’s flesh. Randomly obtaining 0 to 10 points of God Gene(s).”" />
<style>.chp-release.rand167{display:none;}</style>
<input type="hidden" id="grr_groups" value="0">
	







	<div class="l-submain">
		<div class="l-submain-h g-html i-cf" style="padding: 25px 0;">
			<div class="l-content">
				<div class="w-blog post-12963 seriesplans type-seriesplans status-publish has-post-thumbnail hentry genre-action genre-adventure genre-comedy genre-harem genre-martial-arts genre-mecha genre-school-life genre-sci-fi genre-xuanhuan stag-academy stag-adapted-to-manhua stag-adopted-children stag-aliens stag-archery stag-aristocracy stag-arrogant-characters stag-battle-academy stag-beautiful-female-lead stag-calm-protagonist stag-childcare stag-clever-protagonist stag-determined-protagonist stag-devoted-love-interests stag-enemies-become-allies stag-evolution stag-futuristic-setting stag-game-elements stag-genetic-modifications stag-genius-protagonist stag-hiding-true-abilities stag-loyal-subordinates stag-male-protagonist stag-marriage stag-monsters stag-multiple-realms stag-mutated-creatures stag-mysterious-family-background stag-pets stag-poor-to-rich stag-romantic-subplot stag-schemes-and-conspiracies stag-shameless-protagonist stag-strength-based-social-hierarchy stag-underestimated-protagonist stag-weak-to-strong stag-wealthy-characters nauthor-twelve-winged-dark-seraphim nauthor-15457 opublisher-qidian epublisher-webnovel language-chinese ntype-web-novel">

					<div class="w-blog-preview">

						
					</div>     
					<div class="w-blog-content">

  




<div class="seriestitlenu" style="font-size:18px; margin-top: 10px; color: #292e33;">Super God Gene</div>
<div class="breadcrumb_nu" style="margin: 2px auto;">
		<div id="Breadcrumb_Top" style="max-width:1420px; margin:0px auto;">
				<dl>
					<dd><a href="//www.novelupdates.com/" title="Home">Home</a>&nbsp;&gt;&nbsp;</dd>
                                        <dd><a href="//www.novelupdates.com/novelslisting/" title="Novel">Novel</a>&nbsp;&gt;&nbsp;</dd>
                              			<dd>Super God Gene</dd>
				</dl>
		</div>
</div>



<div style="padding-bottom: 15px;"></div>
  

<div class="g-cols wpb_row offset_default"><div class="one-third">
	<div class="wpb_text_column ">
<div class="wpb_wrapper">

<div class="seriesimg">
<img src="https://cdn.novelupdates.com/images/2017/09/Super-God-Gene.jpg">
</div>


<h5 class="seriesother">Type</h5>
<span class="typelmsg"></span>
<div id="edittype"></div>
<div id="showtype">
<a class="genre type" lid="2444" href="https://www.novelupdates.com/ntype/web-novel/" title="View All Series in Web Novel" >Web Novel</a> <span style="color:#8D8D8D;">(CN)</span><br></div>

<h5 class="seriesother">Genre</h5>
<span class="genremsg"></span>
<div id="editgenre"></div>
<div id="seriesgenre">
<a class="genre" gid="8" href="https://www.novelupdates.com/genre/action/" title="A work typically depicting fighting, violence, chaos, and fast paced motion." >Action</a> <a class="genre" gid="13" href="https://www.novelupdates.com/genre/adventure/" title="Exploring new places, environments or situations. This is often associated with people on long journeys to places far away encountering amazing things." >Adventure</a> <a class="genre" gid="17" href="https://www.novelupdates.com/genre/comedy/" title="A dramatic work that is light and often humorous or satirical in tone and that usually contains a happy resolution of the thematic conflict." >Comedy</a> <a class="genre" gid="3" href="https://www.novelupdates.com/genre/harem/" title="A series involving one male character and many female characters (usually attracted to the male character). A Reverse Harem is when the genders are reversed." >Harem</a> <a class="genre" gid="14" href="https://www.novelupdates.com/genre/martial-arts/" title="The novel has a focus on any of several arts of combat or self-defense. These may include aikido, karate, judo, or tae kwon do, kendo, fencing, and so on and so forth." >Martial Arts</a> <a class="genre" gid="10" href="https://www.novelupdates.com/genre/mecha/" title="A work involving and usually concentrating on all types of large robotic machines." >Mecha</a> <a class="genre" gid="6" href="https://www.novelupdates.com/genre/school-life/" title="Having a major setting of the story deal with some type of school." >School Life</a> <a class="genre" gid="11" href="https://www.novelupdates.com/genre/sci-fi/" title="Short for science fiction, these works involve twists on technology and other science related phenomena which are contrary or stretches of the modern day scientific world." >Sci-fi</a> <a class="genre" gid="3954" href="https://www.novelupdates.com/genre/xuanhuan/" title="Similar to xianxia, Xuanhuan may contain immortal cultivation. However, unlike xianxia, which is more focused on becoming immortal and tighter on chinese mythology, Xuanhuan is a broader, more loose genre. Basically, if it's a cultivation-based story, yet it contain elements of western fantasy, such as sci-fi, or magic that's not inherently eastern, then it is a xuanhuan." >Xuanhuan</a> </div>


<h5 class="seriesother">Tags<span style="font-size:15px; padding-left:5px;">[ <span id="nutaghider" style="cursor:pointer;" datahide="no" onclick="hidetags(this)"> <i class="fa fa-angle-double-up" aria-hidden="true" style="color: #1b98e0;" title="Hide Tags"></i></span> ]</span></h5>
<div class="editmsg stags"><i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Loading...</div>
<div class="editmsg tagsearch"><a href="https://www.novelupdates.com/list-tags/?limit=all&st=1&sort=abc&order=asc">Tags List</a> | <a href="https://www.novelupdates.com/request-tag/?sid=12963">Request Tag</a></div>
<div class="editmsg tagsearch"><input type="text" name="tagesearch" id="tagesearch" placeholder="Type for suggestions" autocomplete="off" onkeyup="showSearch_stag(this.value);"></div>
<div style="position:relative; top: -5px;"><div class="livesearchresult_stag"></div></div>
<div id="edittags"></div>
<div id="showtags">
	
<a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/academy/" title="Only to be used when the school is considered to be prestigious in reference to the story. Do not use this for schools famous for battle. Please refer to the [Battle Academy] tag." >Academy</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/adapted-to-manhua/" title="This tag is to be used ONLY if a manhua has been released based on the novel. By manhua, it refers to the Chinese equivalent of a comic book, provided it is an official publication. The tag is to be added only AFTER the release of the manhua." >Adapted to Manhua</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/adopted-children/" title="This tag is to be used ONLY when the protagonist adopts a child(children) during the course of the plot. Please note that adopting this child to become the 'master' of the child is not to be considered under this tag. Please refer to Master-Disciple Relationship." >Adopted Children</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/aliens/" title="As the name suggests, this tag is to be used when the story involves aliens. Here, the term alien should be used by the author/translator themselves." >Aliens</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/archery/" title="This tag is to be used ONLY when one of the protagonist, the antagonist or love interest of the protagonist is involved in archery. This tag was formerly under the bow wielder tag,which has been removed. A prerequisite for the addition of this tag is that who ever uses the bow should have some basic archery skills, and should not depend on some magical powers of the bow to fight.
" >Archery</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/aristocracy/" title="Tag is to be used when the novel features an aristocracy, the aristocracy is a social class that a particular social order considers the highest of that society." >Aristocracy</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/arrogant-characters/" title="This tag should be used when there is a frequent use of characters that have the Arrogance personality traits. It is recommended to use this tag only if at least some of these characters play a significant role in the plot." >Arrogant Characters</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/battle-academy/" title="This tag is to be used when the main protagonist of the story goes to a battle academy, a battle academy is an academy created for the purpose of training students in the art of battle, precise details may vary from story to story." >Battle Academy</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/beautiful-female-lead/" title="This tag is to be used if the female lead of the series is beautiful. 
The descriptions should be what the author has written, and not what the fans fantasize." >Beautiful Female Lead</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/calm-protagonist/" title="This tag is used when the protagonist is able to remain calm in difficult and dangerous situation." >Calm Protagonist</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/childcare/" title="Tag should be used when taking care of children plays an important part in the story." >Childcare</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/clever-protagonist/" title="This tag is used to define a protagonist who is very smart, witty, and bright and can easily pick up new things." >Clever Protagonist</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/determined-protagonist/" title="For protagonist who are resolute" >Determined Protagonist</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/devoted-love-interests/" title="Where one of the characters in a relationship remains in love with the other, despite various circumstances or/and obstacles that get in the way. can be mental (like social status and other similar circumstances) or physical(like distance)" >Devoted Love Interests</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/enemies-become-allies/" title="Tag to be used when an enemy of the main character becomes their ally." >Enemies Become Allies</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/evolution/" title="Ability for an entity to metamorphose into another form and acquiring new traits or abilities.
Generally requiring conditions or situations to be met." >Evolution</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/futuristic-setting/" title="The novel's storyline takes part in a high-tech future world, not necessarily our world. " >Futuristic Setting</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/game-elements/" title="Protagonist has a status screen or something similar to it." >Game Elements</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/genetic-modifications/" title="This tag is to be used ONLY if it is explicitly shown that the protagonist has gone through genetic modification. The exact term used by the author may be different. It can also be used if Genetic Modification plays a key role in the plot. Note that Genetic Modification is NOT the same as a change in bloodlines, for which the bloodlines tag is recommended. Also, a change in the being of the protagonist caused by body cultivation is not recommended to be used under this tag." >Genetic Modifications</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/genius-protagonist/" title="When the protagonist of a novel is considered a genius, either as mentioned by the narrator, or the people surrounding them." >Genius Protagonist</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/hiding-true-abilities/" title="This tag is to be used when the protagonist hides their real abilities/powers. Typically, it is to be used when they act weak when they are actually really badass. This tag is to be added only if the protagonist does it for a significant amount of time." >Hiding True Abilities</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/loyal-subordinates/" title="Where the protagonist has underlings that have a strong sense faith/devotion to the protagonist." >Loyal Subordinates</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/male-protagonist/" title="If the protagonist of the series is male, then this tag is to be used. By protagonist, it refers to the leading/main character.
 
Not to be used with: Female Protagonist " >Male Protagonist</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/marriage/" title="To be used if the protagonist gets married at any point of time in the series, due to mutual consent in a romantic manner.
" >Marriage</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/monsters/" title="Tag is to be used ONLY if the protagonist of the series is a Monster (definition may vary based on novel). If the series has multiple protagonists, only use this tag if being a Monster(s) is a prominent feature of one of them. Can ALSO be used if there being Monster(s) has a big impact on the story." >Monsters</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/multiple-realms/" title="This tag is used if there exists different realms other than the one which protagonist rises from." >Multiple Realms</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/mutated-creatures/" title="where creatures are changed in someway by a external force (radiation/magic/humans/aliens) to behave and/or look differently from how it was originally. Most common would be zombie-like creatures or hybrids." >Mutated Creatures</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/mysterious-family-background/" title="Where the protagonist has parents/family that play a major role in the story, but the protagonist doesn't know about it yet or is trying to find out." >Mysterious Family Background</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/pets/" title="Where the Main character keeps a animal, spirit or other lifeform as mascot/companion." >Pets</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/poor-to-rich/" title="This tag is used if the storyline features a monetarily poor main character working his/her way to obtain wealth. The 'Poor Protagonist' tag is usually also applied." >Poor to Rich</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/romantic-subplot/" title="When the story has some male-female or other similar couple relationships, but not enough to warrant a romance genre tag. Can be used in tandem with Harem. Usually for when relationships are created without any further growth or expansion of said relationship, though this isn't always the case." >Romantic Subplot</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/schemes-and-conspiracies/" title="Only to be used when Schemes, Conspiracies and Strategies are used as an integral part of the plot. These maybe employed by either the protagonist or by other significant characters. Please don't use this tag if only one (or very few) of the battles present in a series involve such intelligence-based methods." >Schemes And Conspiracies</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/shameless-protagonist/" title="Where the main character does actions that are deemed by the reader or characters in the novel to be unbefiting of their status. whether the Main character acts petty or without honor/dignity for gains of some sort." >Shameless Protagonist</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/strength-based-social-hierarchy/" title="This tag is to be used for a setting where strength/power determines the place of one's social status in the hierarchy, i.e. the Law of the Jungle." >Strength-based Social Hierarchy</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/underestimated-protagonist/" title="This tag is to be used if the protagonist of the story is thought by other characters to be weaker than they actually are, whether the protagonist does it on purpose or not. It must remain that way for a significant part of the story." >Underestimated Protagonist</a> <a class="genre" id="etagme" href="https://www.novelupdates.com/stag/weak-to-strong/" title="This TAG is used to indicate the stories in which the protagonist starts at a weak power level and becomes gradually strong as the story progresses." >Weak to Strong</a> <a class="genre odd" id="etagme" href="https://www.novelupdates.com/stag/wealthy-characters/" title="One or more of the main characters is rich in money, resources, or assets. " >Wealthy Characters</a> </div>
<div style="display:none;" id="taghidemsg">
[<i>Tags Hidden</i>]
</div>

<h5 class="seriesother">Rating<span class="uvotes">(3.4 / 5.0, 352 votes)</span></h5>
<table cellspacing="1" cellpadding="0" border="0" id="myrates">
<tbody><tr>
 <td>5&nbsp;&nbsp;</td>
 <td><span class="rating" style="width:18%; background-color: #00FF00"></span><span class="votetext">&nbsp;36% (128 votes)</span></td>
</tr>
<tr>
 <td>4&nbsp;&nbsp;</td>
 <td><span class="rating" style="width:8%; background-color: #66FF00"></span><span class="votetext">&nbsp;16% (58 votes)</span></td>
</tr>
<tr>
 <td>3&nbsp;&nbsp;</td>
 <td><span class="rating" style="width:7.5%; background-color: #CCFF00"></span><span class="votetext">&nbsp;15% (53 votes)</span></td>
</tr>
<tr>
 <td>2&nbsp;&nbsp;</td>
 <td><span class="rating" style="width:6%; background-color: #FFCC00"></span><span class="votetext">&nbsp;12% (42 votes)</span></td>
</tr>
<tr>
 <td>1&nbsp;&nbsp;</td>
 <td><span class="rating" style="width:10%; background-color: #FF6600"></span><span class="votetext">&nbsp;20% (71 votes)</span></td>
</tr>
</tbody></table>

<h5 class="seriesother" title="Original Language">Language</h5>

<div id="editlanguage"></div>
<span class="langlmsg"></span>
<div id="showlang">
<a class="genre lang" lid="495" href="https://www.novelupdates.com/language/chinese/" title="View All Series in Chinese" >Chinese</a><br></div>


<h5 class="seriesother">Author(s)</h5>
<span class="editmsg">One entry per line</span>
<div id="editauthors"></div>
<div id="showauthors">
<a class="genre" id="authtag" href="https://www.novelupdates.com/nauthor/twelve-winged-dark-seraphim/" title="View All Series by Twelve-Winged Dark Seraphim" >Twelve-Winged Dark Seraphim</a><br><a class="genre" id="authtag" href="https://www.novelupdates.com/nauthor/%e5%8d%81%e4%ba%8c%e7%bf%bc%e9%bb%91%e6%9a%97%e7%82%bd%e5%a4%a9%e4%bd%bf/" title="View All Series by 十二翼黑暗炽天使" >十二翼黑暗炽天使</a><br></div>         
         
<h5 class="seriesother">Artist(s)</h5>
<span class="editmsg">One entry per line</span>
<div id="editartists"></div>
<div id="showartists">
<span class="seriesna">N/A</span></div>

<h5 class="seriesother">Year</h5>
<span class="editmsg">Example: 2012</span>
<div id="edityear">
2016</div>

<h5 class="seriesother" title="Status in Country of Origin">Status in COO</h5>
<span class="editmsg">Status in Country of Origin. One entry per line</span>
<div id="editstatus">
3462 Chapters (Completed)<br />
2 Side Stories
</div>

<h5 class="seriesother" title="Licensed (in English)">Licensed</h5>
<div id="editlicensed"></div>
<div id="showlicensed">
Yes</div>
    
<h5 class="seriesother">Completely Translated</h5>
<div id="edittranslated"></div>
<div id="showtranslated">
<a class="genre" href="//www.novelupdates.com/completed-novels-listing/">Yes</a></div>

<h5 class="seriesother">Original Publisher</h5>
<span class="editmsg">One entry per line</span>
<div id="editopublisher"></div>
<div id="showopublisher">
<a class="genre" id="myopub" href="https://www.novelupdates.com/opublisher/qidian/" title="View All Series by Qidian" >Qidian</a><br></div>

<h5 class="seriesother">English Publisher</h5>
<span class="editmsg">One entry per line</span>
<div id="editepublisher"></div>
<div id="showepublisher">
<a class="genre" id="myepub" href="https://www.novelupdates.com/epublisher/webnovel/" title="View All Series by Webnovel" >Webnovel</a><br></div>

<h5 class="seriesother">Release Frequency</h5>
Every 213.7 Day(s)

<h5 class="seriesother">Activity Stats <div class="edit">[<span class="editme"><a href="//www.novelupdates.com/rank-graph/?pid=12963">Graph</a></span>]</div></h5>Weekly Rank: <span class="userrate rank">#2784</span><br>Monthly Rank: <span class="userrate rank">#2000</span><br>All Time Rank: <span class="userrate rank">#238</span><br>
<h5 class="seriesother">Reading List <div class="edit">[<span class="editme"><a href="//www.novelupdates.com/rank-graph/?pid=12963">Graph</a></span>]</div></h5>
On <b class="rlist">5054</b> Reading Lists

<br>Monthly Rank: <span class="userrate rank">#9222</span><br>All Time Rank: <span class="userrate rank">#1016</span>

</div> 
	</div> 
    
 </div><div class="two-thirds">
	<div class="wpb_text_column ">
		<div class="wpb_wrapper">
<h4 class="seriesinfo" style="font-size:18px;">Description</h4>
<span class="editmsg">Links are NOT allowed. Format your description nicely so people can easily read them. Please use proper spacing and paragraphs.</span>
<div id="editdescription"><p>The future unfolded on a magnificent scale into the Interstellar Age. Humanity finally solved the space warp technology, but when humanity transported themselves into the other end, they discovered that place neither had a past nor future, nor was there any land under the starry skies……</p>
<p>The mysterious sanctuary was actually a world filled with countless tyrannical unusual organisms. Humanity faced their great leap in evolution, starting the most glorious and resplendant new era under the starry skies.</p>
<p>“Slaughtered the God Blood organism ‘Black Beetle’. Received the God Blood Black Beetle’s Beast Soul. Used the God Blood Black Beetle’s flesh. Randomly obtaining 0 to 10 points of God Gene(s).”</p>
</div>

<div class="page-content-inner" vocab="http://schema.org/" typeof="Book"><span property="image" content="https://cdn.novelupdates.com/images/2017/09/Super-God-Gene.jpg"></span><meta property="name" content="Super God Gene"><div property="aggregateRating" typeof="AggregateRating">
<meta property="ratingValue" content="3.4" />
<meta property="bestRating" content="5" />
<meta property="ratingCount" content="352" />
</div><meta property="description" content="The future unfolded on a magnificent scale into the Interstellar Age. Humanity finally solved the space warp technology, but when humanity transported themselves into the other end, they discovered that place neither had a past nor future, nor was there any land under the starry skies……
The mysterious sanctuary was actually a world filled with countless tyrannical unusual organisms. Humanity faced their great leap in evolution, starting the most glorious and resplendant new era under the starry skies.
“Slaughtered the God Blood organism ‘Black Beetle’. Received the God Blood Black Beetle’s Beast Soul. Used the God Blood Black Beetle’s flesh. Randomly obtaining 0 to 10 points of God Gene(s).”"><meta property="genre" content="Action">
<meta property="genre" content="Adventure">
<meta property="genre" content="Comedy">
<meta property="genre" content="Harem">
<meta property="genre" content="Martial Arts">
<meta property="genre" content="Mecha">
<meta property="genre" content="School Life">
<meta property="genre" content="Sci-fi">
<meta property="genre" content="Xuanhuan">
<span property="author" typeof="Person">
						<meta property="name" href="https://www.novelupdates.com/nauthor/twelve-winged-dark-seraphim/" content="Twelve-Winged Dark Seraphim">
					</span><span property="author" typeof="Person">
						<meta property="name" href="https://www.novelupdates.com/nauthor/%e5%8d%81%e4%ba%8c%e7%bf%bc%e9%bb%91%e6%9a%97%e7%82%bd%e5%a4%a9%e4%bd%bf/" content="十二翼黑暗炽天使">
					</span><meta property="inLanguage" content="English"></div>			

<h5 class="seriesother associated">Associated Names</h5>
<span class="editmsg">One entry per line</span>
<div id="editassociated">SGG<br>Super Gene<br>超级神基因</div>

<h5 class="seriesother">Related Series</h5>
N/A
<h5 class="seriesother">Recommendations</h5>
<a class="genre" id="sid11480" href="https://www.novelupdates.com/series/the-strongest-gene/" title="Recommended by 7 users">The Strongest Gene</a> (7)<br /><a class="genre" id="sid12748" href="https://www.novelupdates.com/series/monster-paradise/" title="Recommended by 3 users">Monster Paradise</a> (3)<br /><a class="genre" id="sid15254" href="https://www.novelupdates.com/series/shadow-hack/" title="Recommended by 2 users">Shadow Hack</a> (2)<br /><a class="genre" id="sid8014" href="https://www.novelupdates.com/series/godly-model-creator/" title="Recommended by 1 users">Godly Model Creator</a> (1)<br /><a class="genre" id="sid1761" href="https://www.novelupdates.com/series/remonster/" title="Recommended by 1 users">Re:Monster</a> (1)<br /><a class="genre" id="sid246" href="https://www.novelupdates.com/series/tensei-shitara-slime-datta-ken/" title="Recommended by 1 users">Tensei Shitara Slime Datta Ken (WN)</a> (1)<br />
<h5 class="seriesother" title="Lists which contains this novel">Recommendation Lists <i onclick="toggleList();" style="margin-left: 1px;" class="fa fa-info-circle splan" title="Click for more info" aria-hidden="true"></i></h5>
<div class="lid_h_s" style="font-size:13px; display:none;">These are recommendation lists which contains <i><b>Super God Gene</b></i>. You should give them a visit if you're looking for similar novels to read. Alternatively, you can also <a href="https://www.novelupdates.com/userlist/">create your own list.</a></div>
<ol class="ulc_sp"><li><a href="https://www.novelupdates.com/viewlist/47845/">Ln/Wn without any harem</a></li><li><a href="https://www.novelupdates.com/viewlist/47040/">Best isekai genre novels ever ( transmigration / r...</a></li><li><a href="https://www.novelupdates.com/viewlist/46987/">EY: MC WITH MYSTERIOUS FAMILY BACKGROUND</a></li><li><a href="https://www.novelupdates.com/viewlist/46874/">The best game elements novels</a></li><li><a href="https://www.novelupdates.com/viewlist/45887/">Some of these may Tickle your Pickle</a></li></ol><div style="font-size:14px;"><a href="https://www.novelupdates.com/recommendation-lists/?st=1&ni=12963&h=1">More Lists >>></a></div>        


<div id="my_popupreading" class="mp_desktop"><div id="list_allchps"></div></div><div id="my_popupfilter" class="mp_desktop"><div id="groupsall"></div></div>


<div style="padding-top:20px;"><h4 class="seriesother" style="display:inline;"><span class="nuf_link" title="Super God Gene Discussion"><a href="https://forum.novelupdates.com/threads/super-god-gene.44134/unread"><i class="fa fa-comments" style="position: relative; top: -4px; font-size:18px;"></i></a></span>Latest Release </h4>
<span class="extra_chp_icons" style="float:right;">
		<a href="https://www.novelupdates.com/series/super-god-gene/?grr=1" title="[1] group(s) hidden due to dead links. Click to show all releases."><i class="fa fa-eye chp" aria-hidden="true"></i></a>
		<span class="my_popupfilter_open" title="Group filtering" onclick="lst_allgroupstwo();"><i class="fa fa-filter chp" aria-hidden="true"></i></span>
		<span class="my_popupreading_open" title="Show all chapters" onclick="list_allchpstwo();"><i class="fa fa-bars chp" aria-hidden="true"></i></span>
		</span></div>
         
 <table id="myTable" style="width:100%;"> 
	<thead>
	<tr class="tbl_sort">
	<th class="header" align="left" style="padding-left:5px;">Date</th>
	<th class="header" align="left">Group</th>
	<th class="header" align="left">Release</th>
	</tr>
	</thead>
	<tbody>

   
					    
		<tr>
		<td width="20%" style="padding-left:5px;">
		11/04/17</td>
		<td width="45%">
		<a href="https://www.novelupdates.com/group/webnovel/">Webnovel</a>		</td>
		<td width="20%">
		<a title="c39" class="chp-release" href="//www.novelupdates.com/extnu/982181/" rel="nofollow">c39</a>		</td>
		</tr>

			
					    
		<tr>
		<td width="20%" style="padding-left:5px;">
		11/03/17</td>
		<td width="45%">
		<a href="https://www.novelupdates.com/group/webnovel/">Webnovel</a>		</td>
		<td width="20%">
		<a title="c38" class="chp-release" href="//www.novelupdates.com/extnu/980309/" rel="nofollow">c38</a>		</td>
		</tr>

			
					    
		<tr>
		<td width="20%" style="padding-left:5px;">
		11/03/17</td>
		<td width="45%">
		<a href="https://www.novelupdates.com/group/webnovel/">Webnovel</a>		</td>
		<td width="20%">
		<a title="c37" class="chp-release" href="//www.novelupdates.com/extnu/980295/" rel="nofollow">c37</a>		</td>
		</tr>

			
					    
		<tr>
		<td width="20%" style="padding-left:5px;">
		11/02/17</td>
		<td width="45%">
		<a href="https://www.novelupdates.com/group/webnovel/">Webnovel</a>		</td>
		<td width="20%">
		<a title="c36" class="chp-release" href="//www.novelupdates.com/extnu/979448/" rel="nofollow">c36</a>		</td>
		</tr>

			
					    
		<tr>
		<td width="20%" style="padding-left:5px;">
		11/01/17</td>
		<td width="45%">
		<a href="https://www.novelupdates.com/group/webnovel/">Webnovel</a>		</td>
		<td width="20%">
		<a title="c35" class="chp-release" href="//www.novelupdates.com/extnu/977828/" rel="nofollow">c35</a>		</td>
		</tr>

			
					    
		<tr>
		<td width="20%" style="padding-left:5px;">
		11/01/17</td>
		<td width="45%">
		<a href="https://www.novelupdates.com/group/webnovel/">Webnovel</a>		</td>
		<td width="20%">
		<a title="c34" class="chp-release" href="//www.novelupdates.com/extnu/977827/" rel="nofollow">c34</a>		</td>
		</tr>

			
					    
		<tr>
		<td width="20%" style="padding-left:5px;">
		11/01/17</td>
		<td width="45%">
		<a href="https://www.novelupdates.com/group/webnovel/">Webnovel</a>		</td>
		<td width="20%">
		<a title="c33" class="chp-release" href="//www.novelupdates.com/extnu/977826/" rel="nofollow">c33</a>		</td>
		</tr>

			
					    
		<tr>
		<td width="20%" style="padding-left:5px;">
		11/01/17</td>
		<td width="45%">
		<a href="https://www.novelupdates.com/group/webnovel/">Webnovel</a>		</td>
		<td width="20%">
		<a title="c32" class="chp-release" href="//www.novelupdates.com/extnu/977825/" rel="nofollow">c32</a>		</td>
		</tr>

			
					    
		<tr>
		<td width="20%" style="padding-left:5px;">
		11/01/17</td>
		<td width="45%">
		<a href="https://www.novelupdates.com/group/webnovel/">Webnovel</a>		</td>
		<td width="20%">
		<a title="c31" class="chp-release" href="//www.novelupdates.com/extnu/977824/" rel="nofollow">c31</a>		</td>
		</tr>

			
					    
		<tr>
		<td width="20%" style="padding-left:5px;">
		11/01/17</td>
		<td width="45%">
		<a href="https://www.novelupdates.com/group/webnovel/">Webnovel</a>		</td>
		<td width="20%">
		<a title="c30" class="chp-release" href="//www.novelupdates.com/extnu/977823/" rel="nofollow">c30</a>		</td>
		</tr>

			
					    
		<tr>
		<td width="20%" style="padding-left:5px;">
		11/01/17</td>
		<td width="45%">
		<a href="https://www.novelupdates.com/group/webnovel/">Webnovel</a>		</td>
		<td width="20%">
		<a title="c29" class="chp-release" href="//www.novelupdates.com/extnu/977822/" rel="nofollow">c29</a>		</td>
		</tr>

			
					    
		<tr>
		<td width="20%" style="padding-left:5px;">
		11/01/17</td>
		<td width="45%">
		<a href="https://www.novelupdates.com/group/webnovel/">Webnovel</a>		</td>
		<td width="20%">
		<a title="c28" class="chp-release" href="//www.novelupdates.com/extnu/977821/" rel="nofollow">c28</a>		</td>
		</tr>

			
					    
		<tr>
		<td width="20%" style="padding-left:5px;">
		11/01/17</td>
		<td width="45%">
		<a href="https://www.novelupdates.com/group/webnovel/">Webnovel</a>		</td>
		<td width="20%">
		<a title="c27" class="chp-release" href="//www.novelupdates.com/extnu/977820/" rel="nofollow">c27</a>		</td>
		</tr>

			
					    
		<tr>
		<td width="20%" style="padding-left:5px;">
		11/01/17</td>
		<td width="45%">
		<a href="https://www.novelupdates.com/group/webnovel/">Webnovel</a>		</td>
		<td width="20%">
		<a title="c26" class="chp-release" href="//www.novelupdates.com/extnu/977819/" rel="nofollow">c26</a>		</td>
		</tr>

			
					    
		<tr>
		<td width="20%" style="padding-left:5px;">
		11/01/17</td>
		<td width="45%">
		<a href="https://www.novelupdates.com/group/webnovel/">Webnovel</a>		</td>
		<td width="20%">
		<a title="c25" class="chp-release" href="//www.novelupdates.com/extnu/977808/" rel="nofollow">c25</a>		</td>
		</tr>

			    </tbody>
	</table>               
        
  
           
<div class="digg_pagination" style=""><em class="current">1</em><a href="./?pg=2#myTable">2</a><a href="./?pg=3#myTable">3</a><a href="./?pg=2#myTable" rel="next" class="next_page"> →</a></div><div id="my_popup_b">
  	<div class="page_digg_bg">
  	<div class="page_digg_title">Go to Page...</div>
    <input type="text" name="p_num_b" id="p_num_b" onkeydown="if (event.keyCode == 13) { document.getElementById('mypu_b_button').click(); }">
    <button onclick="gotoPage_series('http://www.novelupdates.com/series/super-god-gene/','1');" class="my_popup_b_button" id="mypu_b_button">Go</button>
    </div>
  </div>
  
    <div id="my_popup_a">
  	<div class="page_digg_bg">
  	<div class="page_digg_title">Go to Page...</div>
    <input type="text" name="p_num_a" id="p_num_a" onkeydown="if (event.keyCode == 13) { document.getElementById('mypu_a_button').click(); }" >
    <button onclick="gotoPage_series('http://www.novelupdates.com/series/super-god-gene/','2');" class="my_popup_a_button" id="mypu_a_button">Go</button>
    </div>
  </div> 

</div> 
	</div>
    
     <div class="g-hr type_invisible no_icon">
						<span class="g-hr-h">
							<i class="fa fa-"></i>
						</span>
                        
                
					</div>
        
         </div></div>


								</div>
							</div>
                         
 	

				



<div id="comments" class="w-comments has_form">

 

    
    <a style="margin: 7px 10px; font-size: 14px; float: left;"href="/series/super-god-gene/#respond%20review">Write a Review</a>    
    <div class="btnrev-group sort-reviews pull-right">
		   <button data-filter="helpfulness" class="btnrev btnrev-inverse active" onclick="changesort('helpfulnew','https://www.novelupdates.com/series/super-god-gene//#comments');">Likes <i class="fa fa-angle-down" aria-hidden="true"></i></button>
		                <button data-filter="date" class="btnrev btnrev-inverse" onclick="changesort('datenew','https://www.novelupdates.com/series/super-god-gene//#comments');">Date <i class="fa fa-angle-down" aria-hidden="true"></i></button>
            </div><div class="review-count pull-right">82 Reviews sorted by</div><br><br><div class="r_line"></div>
	<div class="w-comments-list">
        
        


<div class="w-comments-item" id="comment-65410">
            <div class="rev_left">
            
            <img alt='Carnivalle' src='https://forum.novelupdates.com/styles/flatawesome/xenforo/avatars/avatar_m.png' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname65410" href="https://www.novelupdates.com/user/119336/Carnivalle/" title="View Carnivalle's Public Profile">Carnivalle</a> rated it <i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><br>
				                <div><a href="https://www.novelupdates.com/user/119336/Carnivalle/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">February 12, 2018</div>
							<div>Status: <span style="font-weight:bold;" id="stat65410">c196</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 119336">
                
        
        MC's personality - robot pretending to be human.<p></p>
Biography doesn't reveal why he exceptionaly talented in everything. Even without his "Dragon ball" he is OPAF. No fear. No pain. Submissive bootliker with one girl, Casanova with another. Explanation? Naaaaaaah, too boring. Characters - plain. Every male - petty. Every girl - pretty.<p></p>
Summary: Don't waste your time.        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_65410">74</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 65410">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=65410&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-50516">
            <div class="rev_left">
            
            <img alt='Stark3' src='https://forum.novelupdates.com/styles/flatawesome/xenforo/avatars/avatar_m.png' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname50516" href="https://www.novelupdates.com/user/7110/Stark3/" title="View Stark3's Public Profile">Stark3</a> rated it <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><br>
				                <div><a href="https://www.novelupdates.com/user/7110/Stark3/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">September 4, 2017</div>
							<div>Status: <span style="font-weight:bold;" id="stat50516">c1526</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 7110">
                
        
        
<div class="sp-wrap sp-wrap-yellow">
<div class="sp-head" title="Expand">
Spoiler
</div>
<div class="sp-body folded">
<p>FINAL:</p>
<p>I'm dropping my star rating on this to a 2, and dropping the series as well.</p>
<p>In my previous review, I mentioned that the quality of the story started declining around the 3rd phase of the sanctuary. I have to say now that that decline has turned into a steep nosedive. All the cons noticeable in the previous parts of the story seems to be highlighted (immersion breaking fillers, erratic / wandering storyline, super plot armor), while the stuff that made it good / bearable (the boss "raid" / "raid" preparation, interesting beast soul usage) are nowhere to be found.</p>
<p>SUMMARY:</p>
<p> - Kinda slow at first, school life is boring, but beastly soul usage is an interesting premise.</p>
<p> - Story hits the peak when MC starts encountering the super god gene / super god beasts. 4 rating.</p>
<p> - Story goes into a steady decline after MC gets to the 3rd phase of sanctuary. Not recommended to read at this point.</p>

<p>PREVIOUS:</p>
<p>Have read up to <del>the latest chapter of the RAWs </del>c1461. There's good news and bad news.</p>
<p>Good : The story becomes REAAALLY interesting once the MC starts encountering the titular Super God level of genes / beasts. From the name itself, it's a level up from the God level that was previously thought to be the top of the hill - encounters with them are incredibly hard, needs a lot of planning and luck. There's a lot of tension involved, and it sometimes reads like a fight against a raid boss.</p>
<p>Bad : By the 3rd level of the sanctuary, a lot of the tension just gets pulled out. Instead of hunting for the genes required to power up, the MC just gets them from plants. Plants! Eat a couple of fruits, and he's received benefits that he would have gotten from a satisfying fight from the previous levels of the sanctuary. The super god level that provides a lot of the tension gets trivialized as well.</p>
<p>More Bad : The author has this tendency to put in really annoying filler in between chapters, stuff that obviously doesn't further the plot in any way or build on the MCs character. Just. Annoying. Filler.</p>
<p>It's kind of a shame actually. With a bit more polish (and editing!), this would have been a really good story - personally I find the concept interesting.</p>
<p>
</p><div class="sp-wrap sp-wrap-yellow">
<div class="sp-head" title="Expand">
Spoiler
</div>
<div class="sp-body folded">
<p>
I would give the story up to the 2nd level of the sanctuary 4 stars. Once the MC gets to the 3rd level tho, it runs out of steam IMO, and I would rate it a 3.</p>
<div class="spdiv">[collapse]</div>
</div>
</div>
<div class="spdiv">[collapse]</div>
</div>
</div>
        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_50516">40</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 50516">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=50516&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-78126">
            <div class="rev_left">
            
            <img alt='Irisia' src='https://forum.novelupdates.com/data/avatars/m/72/72728.jpg?1504898058' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname78126" href="https://www.novelupdates.com/user/77071/Irisia/" title="View Irisia's Public Profile">Irisia</a> rated it <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><br>
				                <div><a href="https://www.novelupdates.com/user/77071/Irisia/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">June 25, 2018</div>
							<div>Status: <span style="font-weight:bold;" id="stat78126">c345</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 77071">
                
        
        I actually liked it very much. Some said that school arc was a con. The romance was good. Very realistic. I consider it a pro. It's just difference of opinion. Also filler chapters. If you get annoyed by that, you are basically dissing every novel. A novel cannot go only by plot. It will get boring, moreover where there is lots of angst. Filler chapters are good to improve and smoothen the mood.<p></p>
About plot armor (not just this novel) : there is no novel without it. It's a basic need<span class="dots">... </span><span class="morelink" href="#" onclick="showtext(this); return false;">more>></span><span style="display:none"> for a good novel. If there is no plot armor you'll get a boring story where the protagonist dies in the first 10 chapters. The end. Would you read it then?<p></p>
For the plot holes: people who read less than 200 chapters and said there are lots, how come I didn't find any??? Please elaborate on the plot holes you found. I read it in one go so plot holes would be very obvious. So where are they?<p></p>
And for those saying that it should end at second gods encampment. Would you read it if the story finishes in the middle basically, when nothing has been achieved? Also, once you become the strongest who are you going to fight then to improve. People gave bad reviews basically for too little fighting??? Then do you fight every day to make your world more colorful???<p></p>
If you quit novel after 20 chapters and say it's s***, without actually reading..... Those people should be banned from voting. Just because they prefare different types of novels, to diss a novel because of that....<p></p>
In any case I like this story very much. The romance is good so far. The MC is getting by, progressing steadily. Though the review had little to do with the novel itself, you should read it and make your own opinion.<p></p>
I actually wanted to read it half a year ago but couldn't get past the 1 chapter. At different times a novel can be good and bad. It mostly depends on yourself.<span class="morelink" href="#" onclick="hidetext(this); return false;"> &lt;&lt;less</span></span>        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_78126">25</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 78126">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=78126&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-56463">
            <div class="rev_left">
            
            <img alt='dwoolfy' src='https://forum.novelupdates.com/styles/flatawesome/xenforo/avatars/avatar_m.png' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname56463" href="https://www.novelupdates.com/user/63912/dwoolfy/" title="View dwoolfy's Public Profile">dwoolfy</a> rated it <i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><br>
				                <div><a href="https://www.novelupdates.com/user/63912/dwoolfy/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">November 8, 2017</div>
							<div>Status: <span style="font-weight:bold;" id="stat56463">c40</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 63912">
                
        
        So here we have a guy that gets on the 'wrong' side of a particular girl who has power in his community. He is made the target of everyone else there, and then he gets his lucky break and then things start to change for him.<p></p>
All of a sudden after being placed on this snobbish girl's torment list for what is probably 4 years all of a sudden she decides that he needs her attention in his torment. She is wowed by his sudden potential and decides to change and<span class="dots">... </span><span class="morelink" href="#" onclick="showtext(this); return false;">more>></span><span style="display:none"> make him one of her people.<p></p>
This story can be 'fun' to read as long as you ignore all the massive inconsistencies as well as ignoring the entire universe that it is placed in. The further I read the more I found that the story was a bad twist of some generally pretty decent story types.<span class="morelink" href="#" onclick="hidetext(this); return false;"> &lt;&lt;less</span></span>        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_56463">25</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 56463">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=56463&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-52533">
            <div class="rev_left">
            
            <img alt='ArgosYesu' src='https://forum.novelupdates.com/data/avatars/m/1/1529.jpg?1471123906' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname52533" href="https://www.novelupdates.com/user/3573/ArgosYesu/" title="View ArgosYesu's Public Profile">ArgosYesu</a> rated it <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><br>
				                <div><a href="https://www.novelupdates.com/user/3573/ArgosYesu/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">September 25, 2017</div>
							<div>Status: <span style="font-weight:bold;" id="stat52533">c200</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 3573">
                
        
        There isn't anything... bad with the novel. However, nothing sticks out either. Usually the MC would be someone who is unique in some way, but this MC is all too normal and all too boring.<p></p>
<span class="dots">... </span><span class="morelink" href="#" onclick="showtext(this); return false;">more>></span><span style="display:none">
<div class="sp-wrap sp-wrap-yellow">
<div class="sp-head" title="Expand">
Spoiler
</div>
<div class="sp-body folded">
<p>Everyone around can easily obtain god genes, so don't expect anything cool from the start. The only thing going for the MC for most of the 200 chapters I've read is a cultivation technique that isn't even unique considering he stole it off someone he killed. I'm not like @Stark3 and won't read it all just to find out if he finally gets the super god gene.</p>
<p>Probably the only thing I can see anyone following this for is the slightly original idea of killing beasts to acquire their beast souls and equip themselves with equipment. Everything else is rather boring and offers no 'replay value'. I don't see myself continuing this unless I have literally nothing else to read.</p>
<div class="spdiv">[collapse]</div>
</div>
</div>
<span class="morelink" href="#" onclick="hidetext(this); return false;"> &lt;&lt;less</span></span>        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_52533">21</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 52533">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=52533&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-86635">
            <div class="rev_left">
            
            <img alt='Slants Perpendicular' src='https://forum.novelupdates.com/data/avatars/m/121/121590.jpg?1522880183' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname86635" href="https://www.novelupdates.com/user/127937/Slants Perpendicular/" title="View Slants Perpendicular's Public Profile">Slants Perpendicular</a> rated it <i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><br>
				                <div><a href="https://www.novelupdates.com/user/127937/Slants Perpendicular/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">October 3, 2018</div>
							<div>Status: <span style="font-weight:bold;" id="stat86635">c3074</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 127937">
                
        
        Super God Gene's quality can most easily be understood when put in the perspective of a bad hand-job. For this novel has build up galore which if had been acted upon and brought to a logical crescendo would have garnered the novel a certain level of enjoyment only a few CN novels can match.<p></p>
 <p></p>
You see, I've always been under the opinion that CN novels are usually always terrible in any objective regard, and that their only value is the amount of 'enjoyment' they can ring out of their unique<span class="dots">... </span><span class="morelink" href="#" onclick="showtext(this); return false;">more>></span><span style="display:none"> publishing manner. Yet as it stands now this novel has neither 'objective' quality nor 'subjective' enjoyment.<p></p>
 <p></p>
To put it simply: the author strokes you to near climax, yet once nirvana is in reach he slaps you down and spits in your face while calling you a dirty slut; and while I don't doubt that they are some people out there who get of on such treatment I am not one of them.<p></p>
 <p></p>
There are, of course, some things I still enjoy even if the author never takes them to their most enjoyable climax. Such as his whole God B persona, which reminds me of the superhero genre and the idea that the 'title' is better than the 'person', of course the author simply treats it as a hidden identity motif and never comprehends the gold he left buried beneath his feet, which I find overwhelmingly egregious.<p></p>
 <p></p>
The idea of sanctuaries and genes is not new, yet still fresher than most other systems and worlds. Which would be nice, if it was placed in anything other than a web novel. For as it stands now, bad writing overwhelms the 'freshness' of the cultivation and world; since there's very little descriptive writing to give the 'fresh' world any life, and there's no good fights to highlight the novelty of the power-system. After all, bad writing out-shines the glow of minuscule originality.<p></p>
 <p></p>
The characters are simply caricatures seen a thousand times before. They have no life outside of their one-dimensional traits. All females are the same CN novel women and all males are the same CN novel man: there to be Yin and Yang, yet nothing more.<p></p>
Overall, I would recommend this novel if you want some enjoyment. Of course you must be prepared for the author to never take the enjoyment to its most ultimate zenith.<p></p>
Chinese 3/10.<span class="morelink" href="#" onclick="hidetext(this); return false;"> &lt;&lt;less</span></span>        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_86635">20</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 86635">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=86635&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-74183">
            <div class="rev_left">
            
            <img alt='Amaury1514' src='https://forum.novelupdates.com/data/avatars/m/17/17080.jpg?1511863673' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname74183" href="https://www.novelupdates.com/user/18706/Amaury1514/" title="View Amaury1514's Public Profile">Amaury1514</a><br>
				                <div><a href="https://www.novelupdates.com/user/18706/Amaury1514/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">May 17, 2018</div>
							<div>Status: <span style="font-weight:bold;" id="stat74183">--</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 18706">
                
        
        This novel has so much potential that's just wasted. I'm not even gonna go into it, it makes me mad just thinking about it.<p></p>
The number one thing in this novel that pisses me off is how the author does so much work just to make the MC look weak. The MC literally never tells anyone sh*t about his accomplishments he hides EVERYTHING, which I wouldn't be mad about if it made sense, BUT IT DOESNT. First there is dollar, who is basically the MC in disguise. Now at first I<span class="dots">... </span><span class="morelink" href="#" onclick="showtext(this); return false;">more>></span><span style="display:none"> thought Dollar was cool, and necessary because of his enemies. After like 200 chapters though it becomes nothing but an annoyance, he no longer has any enemies but still hides behind dollar. While the MC is getting sh*t on by everyone because they think he's weak, it's like really dude? That's the best you could come up with to force conflict? The worst part to me is how it's never even revealed that he's Dollar... Why? Is so f*cking unsatisfying.<p></p>
Then theres the God beast. The MC is the first human to kill god beast, to max out on god beast points, have god souls etc. but he doesn't tell any f*cking body. It's like why? For what reason? THERES NONE. I was annoyed at first about it but got over it. I thought maybe the author was just building up to some kinda dope reveal. NOPE. He continues to hide EVERY-f*ckING-THING. eventually some one else kills a god beast gets all the credit, is called the hero of the alliance etc, while the MC is just standing around playing with his d*ck while telling NO ONE as usual.<p></p>
Overall this story is like an itch you can't scratch or a piece of food stuck in your teeth. It so f*cking annoying and unsatisfying. The worst part is how it could all be avoided but the author for no reason decided to go this retarted ass route.<span class="morelink" href="#" onclick="hidetext(this); return false;"> &lt;&lt;less</span></span>        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_74183">17</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 74183">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=74183&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-98550">
            <div class="rev_left">
            
            <img alt='I like what i like' src='https://forum.novelupdates.com/styles/flatawesome/xenforo/avatars/avatar_m.png' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname98550" href="https://www.novelupdates.com/user/177536/I like what i like/" title="View I like what i like's Public Profile">I like what i like</a> rated it <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><br>
				                <div><a href="https://www.novelupdates.com/user/177536/I like what i like/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">February 26, 2019</div>
							<div>Status: <span style="font-weight:bold;" id="stat98550">c1246</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 177536">
                
        
        Oh well I like this<p></p>
I first found this novel through novelupdates and seeing all the negative reviews I was like "Oh dang this probably isnt that good, it even has 3 billion chapters like any other wuxia novel out there"<p></p>
I started to read and to be honest I didnt like the first 100 or so chapters very much, mainly because the translation was kinda weird and the MC was really angsty at the time, he got a lot better with time tho, I actually like him<p></p>
I kept reading since even<span class="dots">... </span><span class="morelink" href="#" onclick="showtext(this); return false;">more>></span><span style="display:none"> tho I wasnt thaat pleased I was still quite interested and oh god do I love this novel, literally created an account here just so I could give a good review, the number of bad reviews is insane and they're always at the top lol<span class="morelink" href="#" onclick="hidetext(this); return false;"> &lt;&lt;less</span></span>        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_98550">14</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 98550">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=98550&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-138302">
            <div class="rev_left">
            
            <img alt='simianpower' src='https://forum.novelupdates.com/styles/flatawesome/xenforo/avatars/avatar_m.png' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname138302" href="https://www.novelupdates.com/user/244518/simianpower/" title="View simianpower's Public Profile">simianpower</a> rated it <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><br>
				                <div><a href="https://www.novelupdates.com/user/244518/simianpower/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">April 3, 2020</div>
							<div>Status: <span style="font-weight:bold;" id="stat138302">c1043</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 244518">
                
        
        The worldbuilding for this story is great. The action is well written. The pace is pretty good. But. There are a lot of problems to go with it.<p></p>
<ol><li>Entire plot lines are dropped at random. Characters who were very important, and have pending actions just disappear.</li>
<li>The translation is... sometimes a bit inconsistent. For example, the often-used term Jadeskin randomly switches to Ice Skin, then later switches back. The term "primitive beast" switches to "ordinary beast". Names are misspelled or separated by syllable and then later put back the way they were before.</li>
<li>Sometimes there are wildly inconsistent bits within a few paragraphs of one another. For example, in the arc I'm reading now the MC has been carrying around a baby for quite a while, and then he finds a sword that's too heavy to lift with all his might. Ten paragraphs later he's carrying it like it's nothing. No scabbard, no effort, nothing, and it isn't even mentioned. And a chapter or two later he's fighting with that sword AND another one in his other hand, and the baby is... in the ether somewhere? He always has enough hands to do four or five things. Similarly, the author has no concept of scale. The MC WALKS hundreds of miles in an hour or two. He has a hard limit on some of his powers, sometimes a few minutes, sometimes a few hours, yet he chases people for DAYS with the active power the only thing letting him keep up. What happened to his limitations? Well, they were inconvenient for the scene, so they were ignored. They'll be back later.</li>
<li>The MC is hypercompetent. There's never a sense of challenge. Sure, he occasionally loses out on some treasure. It'll be taken by a companion and eaten, or he'll have to flee due to unforeseen circumstances. But in general, whenever there's a "he's going up against the best of the best" moment, I have zero doubt that he'll not only win, but win in a total curbstomp smackdown to make everyone ooh and aah about how awesome he is.</li>
<li>Similar to #3 above, there's some word-salad inconsistency. Sometimes the MC is overpowered because his "fitness" is so high that it doesn't matter how good someone else's skill level is. Then a chapter or two later he comes up against someone whose fitness is far higher than his, and he smacks them down because his skills are higher. Then later you add in other dimensions like super-spirit body, beast-soul armor or weapons, and so on, and basically he'll win in every instance because ONE element of his is better than his opponent's even though just a short while ago he's denigrating someone who has that element superior to him because he has a different element superior to them. It's rock/paper/scissors where he wins no matter what he casts.</li>
<li>Some/most of the characterization is very flat. Partially it's because of the MC's hypercompetence, but it's also because everyone else is very one dimensional. They are either good or evil, and everyone is VERY FAR toward the ends of those scales. For example, his girlfriend is a total b*tch... and then thanks to the story's inconsistency she's totally in love with him and Best Waifu with basically nothing in between. He doesn't see her for literally years at a time and yet nothing changes. She's a completely static prop, essentially a pet. Anyone who ever wrongs him (from his perspective) is an enemy forever, and so's the rest of their family, and when we see things from these enemy's perspectives they're always scheming villains.</li>
<li>It's repetitive. The first arc we see the MC go from wimp to superhero, starting out barely able to kill a primitive creature and later slaughtering stuff three tiers higher, something nobody has ever done before. And then he evolves/ascends to another plane and starts over from scratch. There are new elements in the second world. Spirit shelters, super plants, smarter beasts. But it's the same story. And then he ascends again, and starts over from scratch AGAIN. New elements again, but the same story. I'm assuming this will just continue. By the point I'm reading he's about 2/3 of the way through the third tier, with at least one and probably more tiers ahead of him.</li>
</ol>
The internal inconsistency is by far the biggest problem with the story. I almost dropped the story around chapter 150. But the worldbuilding really is interesting. It's basically Monster Hunter plus Warframe plus Dune plus every kung-fu cultivation story plus celestial Chinese philosophy plus aliens. Of COURSE some plot elements<span class="dots">... </span><span class="morelink" href="#" onclick="showtext(this); return false;">more>></span><span style="display:none"> will be lost over time. But that level of worldbuilding, with better care toward internal consistency, characterization, and less repetition of the same plot lines. This would be an absolutely AMAZING story if it were capped at around 500 chapters, or even 300, with all the repetition taken out and more care paid to writing a GOOD story rather than simply an endless one.<p></p>
Overall I give it 3 out of 5 because I spent a lot of time reading it, I'm still reading it, and despite all its flaws it's still interesting.<span class="morelink" href="#" onclick="hidetext(this); return false;"> &lt;&lt;less</span></span>        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_138302">9</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 138302">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=138302&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-103379">
            <div class="rev_left">
            
            <img alt='ResidentialPsycho' src='https://forum.novelupdates.com/styles/flatawesome/xenforo/avatars/avatar_m.png' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname103379" href="https://www.novelupdates.com/user/85035/ResidentialPsycho/" title="View ResidentialPsycho's Public Profile">ResidentialPsycho</a> rated it <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><br>
				                <div><a href="https://www.novelupdates.com/user/85035/ResidentialPsycho/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">April 22, 2019</div>
							<div>Status: <span style="font-weight:bold;" id="stat103379">c1362</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 85035">
                
        
        If you like action/adventure settings and can turn off your brain to enjoy them, then you may like this story. If you don't, then there isn't much here for you.<p></p>
The translation quality.... Let's just say when I see Nyoi-Bo Studio as the translator for a series, I will think twice about reading it after squirming my way through this one. The translations are inconsistent with occasional unreadable sentences. I often had to go to the comments to figure out what was going on or who was who. Random names appear,<span class="dots">... </span><span class="morelink" href="#" onclick="showtext(this); return false;">more>></span><span style="display:none"> such as Harry, Henry, Lindsay, Sam, Wendy, or Philip, none of which are the names usually used for these characters. Even though I will be wary of this translation group from now on, the quality is still better than with Transn, so they're not the worst I've seen. Most of the chapters are readable. Several chapters are even translated well.<p></p>
One of the biggest weaknesses here is the setting. It is an interesting setting, one that would make a fun game or fan fiction or something to play around in, but it isn't fleshed out at all. IT HAD SO MUCH POTENTIAL. It's sci-fi and fantasy, but hardly anything is described. Even the technology has barely any information provided.<p></p>
The story development is all over the place. There are more plot holes in this story than I can count, and they are incredibly distracting. These are not filled in and are often ignored. In a realm where guns do not work, then how can there be combustion to start a fire? How can just anyone be allowed into this realm? It sounds like an excellent escape for criminals. What is the voice in the MC’s head? I thought for sure it was an electronic chip until I remembered that electricity doesn’t work here. If electricity doesn’t work, then what about nervous systems..? Are there still thunderstorms in this world? If the government is in charge of this, then why do they let bullies run amok, and why don’t they put any effort into protecting or training their future heroes? Why is the person who teaches martial arts a hologram of a naked woman? Although this is a sci-fi world with spaceships, they still have paper books? Are they made from alien trees? Did people forget how to make snow shoes? Apparently, humans can travel in space without spacesuits. If the military is full of so many disobedient, arrogant, and law-breaking soldiers, then why haven’t the aliens killed off their disorganized and undisciplined forces yet? No one in this series acts like a real soldier at all. No one even has the slightest bit of patriotism. Honestly, the MC’s group is more like a band of pirates than trained soldiers. I have so many questions... At any rate, you definitely have to ignore the questions you have because they will not be filled in even 1, 000 chapters later. Even basic information about the world is not provided.<p></p>
Random plots appear out of nowhere and are often left dangling. Characters are randomly forgotten about for a couple of hundred chapters. There aren't even concluding sentences like "Xxxx stayed at Yyyy Base to look after the MC's mom" or anything like that. The characters and plot devices are completely dropped out of nowhere, often making the comments more entertaining than the story at times.<p></p>
The MC is a gambler who thinks rationally and makes decisions based on what he knows, but he throws out anyone who wants a reason for his instructions or goals. He only wants those with blind faith to follow him. HOWEVER, this is only his personality at the start of the story. He spontaneously becomes a generic shounen protagonist after this, and then his personality becomes weirdly forgiving... I really liked how he cared about his family at the beginning, but they get completely forgotten about for hundreds of chapters. Honestly, the MC's personality is rather inconsistent, leaving me wondering at times if his name was used on accident until I confirm it really is him. That said, the other characters' personalities are fairly consistent.<p></p>
For the most part, there is only limited character depth for anyone. The MC isn't all that smart, leaving people wondering why he didn't do such-and-such in the comments. (It looks like the author forgot about those plot devices.) Although he's depicted as a genius of combat, he really isn't all that cunning or impressive when it comes to his wits. HOWEVER, everyone else is even dumber than he is. For instance, no one seems to point out the obvious discrepancies in his test results or combat when he intentionally does worse than he would at full strength. Also, the MC is a Gary Stu who is an excellent fighter and researcher and pilot and all this other random stuff he has no time to practice, which doesn't make a lick of sense.<p></p>
I'm not sure why this is tagged as a harem, a tag which I usually avoid. The MC dates and marries only one girl. Sure, there are some people with crushes on him (quite a few of them are men) and there are plenty of female characters, but the MC doesn't have the habit of dating many people or sleeping around. Romance plays a role in a surprise high school arc that pops out of nowhere, but that's it.<p></p>
There are significant amounts of sexism at the beginning, but this improves as the series goes on.<p></p>
There is hardly any imagery in regards to the setting, monsters, environment, or people. All of the women look nearly identical if you compare the descriptions of them... I honestly just picture them as stick women with long legs, bulbous butts, and large breasts at this point. Are they all clones or what? This is still better than the amounts of description the male characters get, which consists of them either being muscular or fat or getting no description at all, which is what occurs most often.<p></p>
That said, for all of its faults, this is a fun series with incredibly short chapters. There is plenty of action, and the fantasy world is interesting. I enjoyed it as long as I reminded myself to not think about the numerous plot holes and dangling plot threads all over the place. If someone were to adapt this to a comic or animation, then they'd have to do a lot of reorganizing of the plot and clear characterization of the MC. They'd also have to use their imaginations to build what everything looks like from scratch.<span class="morelink" href="#" onclick="hidetext(this); return false;"> &lt;&lt;less</span></span>        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_103379">9</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 103379">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=103379&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-100729">
            <div class="rev_left">
            
            <img alt='Littledragonlady' src='https://forum.novelupdates.com/data/avatars/m/18/18838.jpg?1478013357' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname100729" href="https://www.novelupdates.com/user/20515/Littledragonlady/" title="View Littledragonlady's Public Profile">Littledragonlady</a> rated it <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><br>
				                <div><a href="https://www.novelupdates.com/user/20515/Littledragonlady/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">March 24, 2019</div>
							<div>Status: <span style="font-weight:bold;" id="stat100729">c1305</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 20515">
                
        
        The story is very wide encompassing! Lol<p></p>
From medieval like knight and lord setting, to interstellar travel, to mecha fight, to adventure in RPG style, all neatly packaged in one story! And lo and behold, the author managed it very well, at least enough to make the story not boring even at 1300ish chapter. It offer new kind of story at each arch, which is very unrepetitive, unlike many others webnovels.<p></p>
One more surprising thing: no harem in the story! Yay! Well, it is understandable since the setting is in modern world,<span class="dots">... </span><span class="morelink" href="#" onclick="showtext(this); return false;">more>></span><span style="display:none"> but even in the medieval styled world, the MC keeps faithful to his wife &lt;3<span class="morelink" href="#" onclick="hidetext(this); return false;"> &lt;&lt;less</span></span>        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_100729">9</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 100729">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=100729&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-90251">
            <div class="rev_left">
            
            <img alt='RegulusSSS' src='https://forum.novelupdates.com/styles/flatawesome/xenforo/avatars/avatar_m.png' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname90251" href="https://www.novelupdates.com/user/113913/RegulusSSS/" title="View RegulusSSS's Public Profile">RegulusSSS</a> rated it <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><br>
				                <div><a href="https://www.novelupdates.com/user/113913/RegulusSSS/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">November 18, 2018</div>
							<div>Status: <span style="font-weight:bold;" id="stat90251">c2807</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 113913">
                
        
        I really don't understand how this peak among peak level novel could be rated so low in the reviews. I doubt whether this is done on purpose or some people just cant see a masterpiece even when it hits them in the face xD. Even some with some fancy words that I am pretty sure they don't know what it even means xD (google it to make sure guys xD).<p></p>
Also for the people that say they don't understand where the system is and whatnot that they didn't understand. Its explained<span class="dots">... </span><span class="morelink" href="#" onclick="showtext(this); return false;">more>></span><span style="display:none"> later on since its part of the mystery and all xD Monster paradise also answers the question one way or another.<p></p>
Well enough of that, back to super gene.<p></p>
Super Gene is absolutely a god lv novel that is in my top 3 list of over 40 completed novels and 3 ongoing novels.<p></p>
This novel is just so amazing because of the following points <p></p>
<ol><li style="list-style-type:none;">
<ol><li>Mystery: Super Gene is actually a pretty slow starting novel. Even though it is still very awesome throughout it actually just starts moving at around c 1600 or so, with a small part of the mystery being uncovered. I really have to praise the author for how well this mystery plays out, like a tree growing and branching out throughout the novel flowing and connecting. When you think you understand something you actually didn't. This is not particularly rare in books however in this type of updating novel it is pretty rare and rarely as good as this.</li>
</ol></li>
</ol><ol><li style="list-style-type:none;">
<ol><li>Abilities: super important in a novel, cuz you can stand combat repeating itself the same way only so many times. Abilities in here are incredibly well done, its amazing how these abilities keep improving and even though some are the same abilities that he always had its done in a way that it never gets boring. The fights are also very well done. Overall not gona give more details xD</li>
</ol></li>
</ol><ol><li style="list-style-type:none;">
<ol><li>World build : is very well done as well, which is almost an infinite possibility world build. I say almost cuz its really hard to make an infinite possibility world build like for example Hunter X Hunter. Super gene is well done with all types of creatures all types of abilities with an amazing story and mystery flowing throughout.</li>
</ol></li>
</ol>
Bad Points <p></p>
<ol><li style="list-style-type:none;">
<ol><li>There are actually no bad points for me in this novel otherwise I would not rate it god lv or 5 stars. The MC's other identity not bringing glory to the MC seems to bug many people however in the novel you will be annoyed by that and happy about it at other times throughout the novel so far so it's just part of the novel just enjoy it xD</li>
</ol></li>
</ol><ol><li style="list-style-type:none;">
<ol><li>There is also a lot of hate cuz MC is good at everything xD for a period of time during the novel. There is actually reasons why this is the case. Anyways this is a fantasy novel I tolerate and deduce the possible reason so unless its its absolutely impossible or impossible is repeated over and over I usually ignore it. Show some tolerance, not to mention there is reason here.</li>
</ol></li>
</ol>
There are many more amazing things in this novel, these 3 however are the ones that I personally find more interesting.<p></p>
in all this novel is a MUST READ for any fan of cultivation novels. I must say however that you might wanne read other novels first because this one is so good it will influence how you see other cultivation novels, making them pale in comparison. Don't let low rating disturb you from reading the peak among novels.<span class="morelink" href="#" onclick="hidetext(this); return false;"> &lt;&lt;less</span></span>        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_90251">9</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 90251">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=90251&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-80273">
            <div class="rev_left">
            
            <img alt='Dante777' src='https://forum.novelupdates.com/styles/flatawesome/xenforo/avatars/avatar_m.png' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname80273" href="https://www.novelupdates.com/user/77400/Dante777/" title="View Dante777's Public Profile">Dante777</a> rated it <i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><br>
				                <div><a href="https://www.novelupdates.com/user/77400/Dante777/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">July 19, 2018</div>
							<div>Status: <span style="font-weight:bold;" id="stat80273">c1450</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 77400">
                
        
        I serious hate this MC and author. The author can't stop using the same damn sh*tty plot points by having him hide his identity over and over and over and then some? I have never seen an author play out the same bullsh*t over and over to the level this crappy author has. 
It was useful and amusing the first handful of times but, this is just getting f*****g ridiculous. Every 50 chapters is like the same crap over and over with him hiding things he has no reason to<span class="dots">... </span><span class="morelink" href="#" onclick="showtext(this); return false;">more>></span><span style="display:none"> hide. They can get away with it early because the MC does not have the strength or influence so he has to be a little careful. However, it gets to the point where his power and influence are far beyond others and he still keeps hiding like a *****. <br />
He runs into Beast and Spirits and he acts like a passive *****. Like before it was OK early but, it simply becomes annoying when the same crap happens over 100+ times late on in the book. On most occasions later on when he acts like a little pu**y there is simply no reason too but, the author is so used to writing him as such a coward that he just sticks to his guns. <br />
Its so bad that even at the current point of the book the hiding identity troupe is so overplayed that it becomes annoying even when it actually makes sense for him to be cautious. 
To top it off it only gets worse later on when he even takes on the identity of some Prince who he killed and absorbed. It's so s*upid to think he could just pretend to be the prince and everyone would just go along with it even after he starts showing power and strength he never showed before. 
Great world building but, the author writes to MC into a pu**y to often to enjoy this. If he would stop using the same crappy plot point over and over then maybe the book would be more readable. At this point I just roll my eyes and skip over any crap having to do with him hiding his identity because that plot point has already been used to death even after 2200+ chapters.<span class="morelink" href="#" onclick="hidetext(this); return false;"> &lt;&lt;less</span></span>        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_80273">9</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 80273">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=80273&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-81728">
            <div class="rev_left">
            
            <img alt='Wes' src='https://forum.novelupdates.com/styles/flatawesome/xenforo/avatars/avatar_m.png' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname81728" href="https://www.novelupdates.com/user/18892/Wes/" title="View Wes's Public Profile">Wes</a> rated it <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><br>
				                <div><a href="https://www.novelupdates.com/user/18892/Wes/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">August 5, 2018</div>
							<div>Status: <span style="font-weight:bold;" id="stat81728">c247</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 18892">
                
        
        I love the concept of this novel, gaining beast souls which can have different uses, I just wish the writer was better. The problem is that the author has the same repeat plot and s*upid MC and companions. What is written is very VERY inconsistent. Originally, in chapter 1 or 2, the MC is weak and has no talent then gains a stone which lets him get beast souls (basically)... suddenly the MC has loads of talent in EVERY SINGLE THING HE DOES!! It makes absolutely no sense. Some things<span class="dots">... </span><span class="morelink" href="#" onclick="showtext(this); return false;">more>></span><span style="display:none"> I can overlook like every game he's recommended to do ends up being a super important game with world-wide recognition or the fact that 
<div class="sp-wrap sp-wrap-yellow">
<div class="sp-head" title="Expand">
Spoiler
</div>
<div class="sp-body folded">
<p> he wins a girlfriend whom he has no knowledge of in a bet, then somehow they both are super in love.... they literally have spent maybe 3 hours together total at chapter 247 in the novel </p>
<div class="spdiv">[collapse]</div>
</div>
</div>
 or that the school seems to have no classes, only clubs, and lets their students be gone for half the school year, though I have no clue if there is a school year anymore.<p></p>
Basically Awesome idea, ruined by terrible plot and writing. The editor gets some flak as well, but not terrible. Also lots of people post in comments how it's becoming pay to read, not looking forward to that if I continue. I'm only reading since I've read my other things and I like the idea, read till like 50 and decide yourself.<span class="morelink" href="#" onclick="hidetext(this); return false;"> &lt;&lt;less</span></span>        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_81728">8</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 81728">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=81728&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-81516">
            <div class="rev_left">
            
            <img alt='genkigenki' src='https://forum.novelupdates.com/styles/flatawesome/xenforo/avatars/avatar_male_m.png' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname81516" href="https://www.novelupdates.com/user/123706/genkigenki/" title="View genkigenki's Public Profile">genkigenki</a> rated it <i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><br>
				                <div><a href="https://www.novelupdates.com/user/123706/genkigenki/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">August 3, 2018</div>
							<div>Status: <span style="font-weight:bold;" id="stat81516">c30</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 123706">
                
        
        The story starts out interesting. But I just can't continue after the bullsh*t with the female lead. She is just a complete b*tch. She basically says: Join my squad or ill beat you up everyday. And so he does. She tries to hypnotize him later-on and he still joins her army thingy as to protect his family. Then later or before that he meets a nice rich dude who he rescues, that maybe could have protected his family (he has money and influence enough), but then he tries to basically<span class="dots">... </span><span class="morelink" href="#" onclick="showtext(this); return false;">more>></span><span style="display:none"> scam his money for some water. So unlike your typical MC this guy repays kindness with sh*t and sh*t with kindness. Its really frustrating.<span class="morelink" href="#" onclick="hidetext(this); return false;"> &lt;&lt;less</span></span>        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_81516">8</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 81516">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=81516&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-77318">
            <div class="rev_left">
            
            <img alt='mechafanboy' src='https://forum.novelupdates.com/styles/flatawesome/xenforo/avatars/avatar_m.png' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname77318" href="https://www.novelupdates.com/user/47483/mechafanboy/" title="View mechafanboy's Public Profile">mechafanboy</a> rated it <i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><br>
				                <div><a href="https://www.novelupdates.com/user/47483/mechafanboy/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">June 17, 2018</div>
							<div>Status: <span style="font-weight:bold;" id="stat77318">c533</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 47483">
                
        
        Has a pretty decent start and a relatively interesting method of "cultivation" unfortunately, as the story goes on, inconsistencies in the plot (the bane of basically any Xianxia/webnovel) crop up and after just too many annoying points that start as important but later aren't even a talking point.<p></p>
<span class="dots">... </span><span class="morelink" href="#" onclick="showtext(this); return false;">more>></span><span style="display:none">
<div class="sp-wrap sp-wrap-yellow">
<div class="sp-head" title="Expand">
Spoiler
</div>
<div class="sp-body folded">
<p>Let's see... MC wants to get more points to be a special class cultivator so people would pay attention to him. We're told repeatedly that they are VERY limited in number and posses an extreme amount of power compared to normal people. In fact, his direct superior takes several years longer sitting in a lower realm just to obtain that status. Ostensibly all this is just so he can get a better life for his sister.</p>
<p>Tough luck, his sister's drama is handled through money instead (and he literally stresses he wants to be fast in order to make sure she gets into a good school and she's started schooling WELL before he decides to leave the first realm.) </p>
<p>Still acceptable. We're then told repeatedly (or rather during the debacle above) that stat levels exceeding 100 are incredibly rare and a vast majority of people will never achieve it. MC gets sent to a barren wasteland where it's hard to find any resources and there's 3 competing factions for the same resources.</p>
<p>MAGICALLY HE RUNS INTO GRUNTS. (Let me stress this again, GRUNT. They do not even get NAMES) that have over 100 stat points. What the absolute <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="92b3d2">[email&#160;protected]</a>#<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="597d7819">[email&#160;protected]</a>#<a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d4f594">[email&#160;protected]</a>@ author?</p>
<div class="spdiv">[collapse]</div>
</div>
</div>
<p></p>
I feel like getting hyped over the current "zomg super rare" thing is going to be dumb too when magically everyone has millions of them in the next few arcs anyway.<p></p>
I expect inconsistencies from Xianxia tropes, but this one doesn't even try to compensate for itself, it's clear that author didn't write up any form of a draft beforehand and is just writing new chapters based on what he feels is interesting leading to more and more plotholes over time.<span class="morelink" href="#" onclick="hidetext(this); return false;"> &lt;&lt;less</span></span>        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_77318">7</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 77318">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=77318&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-172500">
            <div class="rev_left">
            
            <img alt='Hikicarl' src='https://forum.novelupdates.com/styles/flatawesome/xenforo/avatars/avatar_male_m.png' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname172500" href="https://www.novelupdates.com/user/88348/Hikicarl/" title="View Hikicarl's Public Profile">Hikicarl</a> rated it <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><br>
				                <div><a href="https://www.novelupdates.com/user/88348/Hikicarl/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">October 3, 2020</div>
							<div>Status: <span style="font-weight:bold;" id="stat172500">c3008</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 88348">
                
        
        A novel for wasting time. This novel has a huge potential to be one of the greatest chinese webnovel ever. But like every chinese novels, this novel suffers the same ailment as every chinese novels. Rushed plot, a large number of chapters but nearly every chapters in the late phase of the novel is a summary.<p></p>
They are really bad in creating formulating their plots for the mid to end. They are only good in writing early chapters only to rush the story to finish it since they got themselves burned<span class="dots">... </span><span class="morelink" href="#" onclick="showtext(this); return false;">more>></span><span style="display:none"> out. I like the way jp authors do their story as they aren't rushing. But jp authors also suffer flaws like cliched story, dense, too childish or too beta.<p></p>
I say if you combined the good traits of chinese novels and of the jp novels... That will be the best novel ever.<p></p>
For this novel though... The plot is interesting but the way the author writes about it is not. There is a lot of writing materials if he only sticked writing this novel. <span class="morelink" href="#" onclick="hidetext(this); return false;"> &lt;&lt;less</span></span>        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_172500">6</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 172500">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=172500&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-128536">
            <div class="rev_left">
            
            <img alt='asi' src='https://forum.novelupdates.com/data/avatars/m/207/207776.jpg?1602570731' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname128536" href="https://www.novelupdates.com/user/217252/asi/" title="View asi's Public Profile">asi</a> rated it <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><br>
				                <div><a href="https://www.novelupdates.com/user/217252/asi/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">January 8, 2020</div>
							<div>Status: <span style="font-weight:bold;" id="stat128536">c932</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 217252">
                
        
        It's good at the start. But then it steadily declines throughout every single chapter, never once improving except for when god genes are introduced, then it declines at an even faster pace than before. The worst part is Dollar. Early chapters, he's necessary. Hiding your identity, a smart idea! Until it's not. As far as I'm aware, his identity as Dollar is never revealed in the entire ~3000+ chapters. Which royally pisses me off. It's fine for like a few hundred chapters to keep his identity as Dollar under wraps,<span class="dots">... </span><span class="morelink" href="#" onclick="showtext(this); return false;">more>></span><span style="display:none"> but it gets to be WAY too much and annoying when it's 1000 chapters in, and he has NO reason, literally NO reason AT ALL to hide his identity. It just becomes an eternal suspense of "oh, when is his identity revealed?" and it never is. Eventually I was forced to google when it's revealed, and found it never was. Immediately dropped the novel.<p></p>
Also, MC is generic as f*ck.<span class="morelink" href="#" onclick="hidetext(this); return false;"> &lt;&lt;less</span></span>        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_128536">6</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 128536">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=128536&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-96812">
            <div class="rev_left">
            
            <img alt='ziki' src='https://secure.gravatar.com/avatar/d753066c046075a6237cfcf97350e397?s=96&#038;d=https%3A%2F%2Fforum.novelupdates.com%2Fstyles%2Fflatawesome%2Fxenforo%2Favatars%2Favatar_m.png' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname96812" href="https://www.novelupdates.com/user/83511/ziki/" title="View ziki's Public Profile">ziki</a> rated it <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><br>
				                <div><a href="https://www.novelupdates.com/user/83511/ziki/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">February 7, 2019</div>
							<div>Status: <span style="font-weight:bold;" id="stat96812">c1101</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 83511">
                
        
        Hmm... I'm really surprised with being able to read over 1000 chapters of this novel. I guess it's not terrible but over all, it's basically the same thing over and over again.<p></p>
On the plus side, the world setting and leveling system is quite cool.<p></p>
The weakest point is definitely MC though and considering how we follow him the entire way, the annoyance with him slowly builds up until eventually you flip the table.        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_96812">6</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 96812">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=96812&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    


<div class="w-comments-item" id="comment-82004">
            <div class="rev_left">
            
            <img alt='niomich' src='https://forum.novelupdates.com/styles/flatawesome/xenforo/avatars/avatar_m.png' class='avatar avatar-50 photo' height='50' width='50' />            
                                                </div>
		<div class="w-comments-item-meta-new">
        
        
                        
                <table style="width: 89%; line-height: 23px; position: relative; top: 5px;">        <tbody>
        	<tr style="background-color:transparent;">
				<td valign="top">
				<div>
				<div>
				</div>
				</div>
                                				<a id="revname" class="revname82004" href="https://www.novelupdates.com/user/147315/niomich/" title="View niomich's Public Profile">niomich</a> rated it <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><br>
				                <div><a href="https://www.novelupdates.com/user/147315/niomich/?rv=1">Other reviews by this user</a></div>
                				</td>
                
                                        <td style="text-align: right;" valign="top"><div style="text-align: right;">August 9, 2018</div>
							<div>Status: <span style="font-weight:bold;" id="stat82004">c117</span></div>
						</td>
                            	</tr>
                </tbody>
                </table>
			<div class="w-comments-item-icon">
							</div>
            			<div class="w-comments-item-author"></div>
            
			
		</div>
		<div class="w-comments-item-text 147315">
                
        
        Another novel like 'Immortal Mortal'<p></p>
The personality of our MC is non-exist. This is basically Author is the MC aka MyFantasyWorldNovel.<p></p>
There is several references from other novel, that I found it good to implement. But suddenly it turns out dull because clearly the Author use Heaven-Defying means to continue the story.<p></p>
The interaction between Character is seriously dull. The dialog is always on face value. A sad*st use her cold gaze and command like a sad*st do. WOW what an accurate presentation that I found useless. This novel will have hard time<span class="dots">... </span><span class="morelink" href="#" onclick="showtext(this); return false;">more>></span><span style="display:none"> for character development, because it always falls on face value.<p></p>
The IDEA of the story using god gene is really unique. But there is no character in this novel. It just a waiting for the climax novel.<span class="morelink" href="#" onclick="hidetext(this); return false;"> &lt;&lt;less</span></span>        
             
                </div>

    </div>
    
    	<div class="rev_b1">
                <span class="rev_bar" title="Like this review"><span class="liked_82004">6</span> Likes · <a href="//www.novelupdates.com/login/" class="rev_help 82004">Like</a></span>
                
        <span style="float:right;"><a class="permrev" href="//www.novelupdates.com/fdrev/?comid=82004&sid=12963" style="color:#8D8D8D !important;">Permalink</a> | <a href="//www.novelupdates.com/login/" title="Report Review" style="color:#8D8D8D !important;" class="my_popupreport_open">Report</a></span>        
        
        </div>


    

    </div>
	<div class="mb_review_pagination">
	<div class="w-comments-pagination" style="padding-top:17px;">   
        <span aria-current='page' class='page-numbers current'>1</span>
<a class='page-numbers' href='https://www.novelupdates.com/series/super-god-gene/comment-page-2/#comments'>2</a>
<a class='page-numbers' href='https://www.novelupdates.com/series/super-god-gene/comment-page-3/#comments'>3</a>
<span class="page-numbers dots">&hellip;</span>
<a class='page-numbers' href='https://www.novelupdates.com/series/super-god-gene/comment-page-5/#comments'>5</a>
<a class="next page-numbers" href="https://www.novelupdates.com/series/super-god-gene/comment-page-2/#comments">Next &raquo;</a>        	  		
	</div>
	</div>
    

	
		<div id="respond review" class="w-comments-form">
			
        <div class="rev_leave">Leave a Review (<a href="//www.novelupdates.com/review-guidelines/">Guidelines</a>)</div>
        <div class="rf-comment">
       						            
                        <div class="w-comments-form-text">You must be <a href="https://www.novelupdates.com/login/?redirect_to=https%3A%2F%2Fwww.novelupdates.com%2Fseries%2Fsuper-god-gene%2F">logged in</a> to rate and post a review. <a href="https://www.novelupdates.com/register/">Register</a> an account to get started.</div>
            			
</div>
		</div>
	</div>

     	

			</div>

			<div class="l-sidebar at_right" style="padding-top: 25px;">
				

<!-- begin generated sidebar -->
<div id="text-2" class="widget widget_text"><h3 class="widgettitle">Novel Updates</h3>			<div class="textwidget"><ul>
<li><a href="https://forum.novelupdates.com/">Forum</a></li>
<li><a href="https://www.novelupdates.com/random-novel/">Random Novel</a></li>
<li><a href="https://www.novelupdates.com/series-finder/">Series Finder</a></li>
<li><a href="https://www.novelupdates.com/novelslisting/">Series Listing</a></li>
<li><a href="https://www.novelupdates.com/series-ranking/">Series Ranking</a></li>
<li><a href="https://www.novelupdates.com/latest-series/">Latest Series</a></li>
<li><a href="https://www.novelupdates.com/recommendation-lists/">Rec Lists</a></li>
</ul></div>
		</div><div id="text-3" class="widget widget_text"><h3 class="widgettitle">User Tools</h3>			<div class="textwidget"><ul>
<li><a href="https://www.novelupdates.com/reading-list/">Reading List</a></li>
<li><a href="https://www.novelupdates.com/release-filtering/">Release Filtering</a></li>
<li><a href="https://www.novelupdates.com/series-filtering/">Series Filtering</a></li>
</ul></div>
		</div><style>.search_img { float: left;}.search_img img { height: 71px; width: 50px; }</style><div style="margin-bottom: 25px;"><div class="search_main_box"><div class="search_img">
			<a href="https://www.scribblehub.com/series/420492/path-of-the-hive-queen/"><img src="https://cdn.scribblehub.com/seriesimg/mid/21/mid_420492.jpg"></a>
			</div><div class="search_body" style="line-height: 20px; margin-left: 55px;"><div style="font-size:14px; position: relative; top: -3px; max-height: 40px; overflow: hidden;"><a href="https://www.scribblehub.com/series/420492/path-of-the-hive-queen/">Path of the Hive Queen</a></div><div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></div></div></div><div style="clear: both;"></div><div class="search_main_box"><div class="search_img">
			<a href="https://www.scribblehub.com/series/73399/a-metaverse-dungeon--foodies-enigma/"><img src="https://cdn.scribblehub.com/seriesimg/mid/3/mid_73399.jpg"></a>
			</div><div class="search_body" style="line-height: 20px; margin-left: 55px;"><div style="font-size:14px; position: relative; top: -3px; max-height: 40px; overflow: hidden;"><a href="https://www.scribblehub.com/series/73399/a-metaverse-dungeon--foodies-enigma/">A Metaverse Dungeon – Foodie's Enigma</a></div><div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i></div></div></div><div style="clear: both;"></div><div class="search_main_box"><div class="search_img">
			<a href="https://www.scribblehub.com/series/413079/lord-of-fire-is-a-gamer/"><img src="https://cdn.scribblehub.com/seriesimg/mid/20/mid_413079.jpg"></a>
			</div><div class="search_body" style="line-height: 20px; margin-left: 55px;"><div style="font-size:14px; position: relative; top: -3px; max-height: 40px; overflow: hidden;"><a href="https://www.scribblehub.com/series/413079/lord-of-fire-is-a-gamer/">Lord of Fire is a Gamer</a></div><div><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i></div></div></div><div style="clear: both;"></div></div><h3 class="widgettitle_nuf" style="margin-bottom: 5px;">Latest Discussions</h3><div class="nuf_bd"><ul id="nuf_ul"><li id="nuf_li"><div class="messageInfo"><div class="nuf_msgcontent"><a title="Reincarnation Of The Strongest Sword God" class="nuftrend_link" href="http://forum.novelupdates.com/threads/46910/unread">Reincarnation Of The...</a></div><div class="additionalRow muted">0h, 7m ago</div></div></li><li id="nuf_li"><div class="messageInfo"><div class="nuf_msgcontent"><a title="I&#8217;m the Evil Lord of an Intergalactic Empire!" class="nuftrend_link" href="http://forum.novelupdates.com/threads/88933/unread">I&#8217;m the Evil...</a></div><div class="additionalRow muted">0h, 41m ago</div></div></li><li id="nuf_li"><div class="messageInfo"><div class="nuf_msgcontent"><a title="24 Hearts" class="nuftrend_link" href="http://forum.novelupdates.com/threads/118515/unread">24 Hearts</a></div><div class="additionalRow muted">3h, 59m ago</div></div></li><li id="nuf_li"><div class="messageInfo"><div class="nuf_msgcontent"><a title="Kidnapped Dragons" class="nuftrend_link" href="http://forum.novelupdates.com/threads/118155/unread">Kidnapped Dragons</a></div><div class="additionalRow muted">9h, 9m ago</div></div></li><li id="nuf_li"><div class="messageInfo"><div class="nuf_msgcontent"><a title="Kumo Desu ga, Nani ka?" class="nuftrend_link" href="http://forum.novelupdates.com/threads/28/unread">Kumo Desu ga,...</a></div><div class="additionalRow muted">17h, 44m ago</div></div></li><li id="nuf_li"><div class="messageInfo"><div class="nuf_msgcontent"><a title="Let Me Game in Peace" class="nuftrend_link" href="http://forum.novelupdates.com/threads/100794/unread">Let Me Game...</a></div><div class="additionalRow muted">1d, 1h, 32m ago</div></div></li><li id="nuf_li"><div class="messageInfo"><div class="nuf_msgcontent"><a title="Magical★Explorer" class="nuftrend_link" href="http://forum.novelupdates.com/threads/90637/unread">Magical★Explorer</a></div><div class="additionalRow muted">1d, 6h, 14m ago</div></div></li></ul></div>
<!-- end generated sidebar -->

			</div>
		</div>
	</div>



<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>
$(document).ready(function() 
    { 
 
				

    } 
); 

$(document).ready(function() {
      $('#my_popupreading').popup();
	  $('#my_popupfilter').popup();
});
	

</script>	

<style>
@media only screen and (max-width: 767px) 
{
	#editgenre .one-half
	{
		margin-bottom: 0px;
	}
}
@media only screen and (max-width: 540px) 
{
	#respond20 review {
    margin-top: 25px !important;
}
	.w-comments-pagination
	{
		float: none !important;
		 display: inline-block;
	}
	.mb_review_pagination
	{
		margin: auto;
		text-align:center;
	}
}
#my_popupnotes { max-width: 550px;}
#mceu_0,#mceu_6,#mceu_7,#mceu_8,#mceu_9,#mceu_10,#mceu_11,#mceu_12,#mceu_27, #mceu_67 {display:none;}
div.mce-toolbar-grp{border-bottom: none !important;}
.wp-editor-container{border: none !important;}
.dropbtn{
	position: absolute !important;
	left: -96px;
	z-index: 999;
	top: 29px !important; background-color: rgb(44, 62, 80); color: white;}
.dropdown-content
{
	position: absolute !important;
	left: -191px;
	z-index: 999;
	}
#wp-edit_mycontent_rlnotes-editor-container{border: 1px solid #e5e5e5 !important;}

.fic_button.savenotes{background-color: #2d3e4f !important;}
.fic_button.savenotes:hover { background-color: #374757 !important;}
</style>




</div>
<!-- /MAIN -->

</div>
<!-- /CANVAS -->

<!-- FOOTER -->
<div class="l-footer">
			<!-- subfooter: bottom -->
	<div class="l-subfooter at_bottom">
		<div class="l-subfooter-h i-cf">

									
			

			<div class="w-copyright"><script>
(function waitGEO() {
    var readyGEO;
    if (window['UnicI'] && window['UnicI'].geo && window['UnicI'].geo !== '-' ) {
        readyGEO = true;
        if (window['UnicI'].geo === 'EU') {
            if(document.getElementById("unic-gdpr")) {
              document.getElementById("unic-gdpr").style.display = 'inline-block';
            }
        }
        if (window['UnicI'].geo === 'CA') {
            if(document.getElementById("unic-ccpa")) {
              document.getElementById("unic-ccpa").style.display = 'inline-block';
            }
        }
    }
    if (!readyGEO) {
        setTimeout(waitGEO, 200);
    }
})();
</script>

<!-- Consent links -->

<a id='unic-gdpr' onclick='__tcfapi("openunic");return false;' style='display:none;cursor:pointer;'>Change Ad Consent</a>
<a id='unic-ccpa' onclick="window.__uspapi('openunic')" style='display:none;cursor:pointer;'>Do not sell my data</a> | <a href="https://www.novelupdates.com/privacy-policy/">Privacy Policy</a> | <a href="https://www.novelupdates.com/terms-of-service/">Terms of Service</a> | <a href="https://www.novelupdates.com/contact-us/">Contact Us</a></div>
					</div>
	</div>
	
</div>
<!-- /FOOTER -->
<a class="w-toplink" href="#"><i class="fa fa-angle-up"></i></a>
<script type="text/javascript">
	if (window.$us === undefined) window.$us = {};
	$us.canvasOptions = ($us.canvasOptions || {});
	$us.canvasOptions.headerDisableStickyHeaderWidth = parseInt('1000');
	$us.canvasOptions.headerDisableAnimationWidth = parseInt('900');
	$us.canvasOptions.headerMainHeight = parseInt('60');
	$us.canvasOptions.headerMainShrinkedHeight = parseInt('60');
	$us.canvasOptions.headerExtraHeight = parseInt('36');
	$us.canvasOptions.mobileNavWidth = parseInt('1000');

	$us.navOptions = ($us.navOptions || {});
	$us.navOptions.togglable = 1;

</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-66522525-1', 'auto');
  ga('send', 'pageview');

</script><script type='text/javascript' src='https://www.novelupdates.com/wp-content/plugins/user-meta-display/assets/js/scripts-user_meta_display.js?ver=1.2.2'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/plugins/yet-another-stars-rating/js/jquery.rateit.min.js?ver=1.0.22'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/plugins/yet-another-stars-rating/js/yasr-front.js?ver=1.0.1'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/themes/ndupdates/js/jquery.easing.min.js?ver=5.2.7'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/themes/ndupdates/js/us.core.js?ver=4.4.2'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-content/themes/ndupdates/js/us.widgets.js?ver=4.4.2'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-includes/js/comment-reply.min.js?ver=5.2.7'></script>
<script type='text/javascript' src='https://www.novelupdates.com/wp-includes/js/wp-embed.min.js?ver=5.2.7'></script>
</body>
</html>
`;
const textParser = require("he");
describe("speed test", function () {
    console.time('Function #1');
    const doc = IDOMParser.parse(page, {
        ignoreTags: ["script", "style"],
		onlyBody:true
    })
    console.timeEnd('Function #1')
	//console.log(doc.documentElement.outerHTML)
    console.log(doc.documentElement.querySelector(".seriesimg img").getAttribute("src"))
    
});
