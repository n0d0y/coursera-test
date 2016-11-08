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
});


(function (global) {

/* Variables declaration */
var dc = {};
var homeHTML = "snippets/principal-snippet.html";
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

	document.querySelector("#chosenflag")
	.innerHTML = "<img src='img/Spanish_ico.ico' class='center-block pict_ico'>";
});


// To change the flag icon when you choose a different languange
	$("#sflag_ico").click(function (event) {
		document.querySelector("#chosenflag")
		.innerHTML = "<img src='img/Spanish_ico.ico' class='center-block pict_ico'>";
	});
	// To change the flag icon when you choose a different languange
	$("#eflag_ico").click(function (event) {
		document.querySelector("#chosenflag")
		.innerHTML = "<img src='img/English_ico.ico' class='center-block pict_ico'>";
	});
	// To change the flag icon when you choose a different languange
	$("#fflag_ico").click(function (event) {
		document.querySelector("#chosenflag")
		.innerHTML = "<img src='img/French_ico.ico' class='center-block pict_ico'>";
	});
// To change the flag icon when you choose a different languange
	$("#lflag_ico").click(function (event) {
		document.querySelector("#chosenflag")
		.innerHTML = "<img src='img/Latvian_ico.ico' class='center-block pict_ico'>";
	});


// Expose utility to the global object
global.$dc = dc;

})(window);