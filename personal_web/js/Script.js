$(function () { // Same as document.addEventListener("DOMContentLoaded"...)

	// Same as document.querySelector("#navbarToggle").addEventListener("blur",...
	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
		}
	});

	// For Firefox and Safari,
	$("#navbarToggle").click(function (event) {
		$(event.target).focus();
	});

	// To change the flag icon when you choose a different languange
	$("#lflag_ico").click(function (event) {
		$ajaxUtils.sendGetRequest(
		Latvianflag,
		function (responseText) {
			document.querySelector("#chosenflag")
				.innerHTML = responseText;
		},
		false);
	});
});


(function (global) {

/* Variables declaration */
var dc = {};
var homeHTML = "snippets/principal-snippet.html";
var Spanishflag = "img/Spanish_ico.html";
var Englishflag = "img/English_ico.html";
var Frenchflag = "img/French_ico.html";
var Latvianflag = "img/Latvian_ico.html";
/* Variables declaration */

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
	var targetElem = document.querySelector(selector);
	targetElem.innerHTML = html;
}


// Show loading icon inside element identified by 'selector'.
var ShowLoading = function (selector) {
	var html = "<div class='text-center'>";
	html += "<img src='img/ajax-loader.gif'></div>";
	insertHtml (selector, html);
}



// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function(event) {
	//On first load, show home view
	ShowLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		homeHTML,
		function (responseText) {
			document.querySelector("#main-content")
				.innerHTML = responseText;
		},
		false);

	$ajaxUtils.sendGetRequest(
		Spanishflag,
		function (responseText) {
			document.querySelector("#chosenflag")
				.innerHTML = responseText;
		},
		false);
});


// Expose utility to the global object
global.$dc = dc;

})(window);