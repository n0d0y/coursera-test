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
		Chagneicon("#chosenflag");
	});
});


(function (global) {

/* Variables declaration */
var dc = {};
var homeHTML = "snippets/principal-snippet.html";
var Latvianflag = "img/Latvian_ico.html";
/* Variables declaration */

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
	var targetElem = document.querySelector(selector);
	targetElem.innerHTML = html;
}


/* Function to change the icon of the DropMenu button in xs devices */
var Chagneicon = function (selector) {
	var html = "<img src='img/Spanish_ico.ico' class='center-block pict_ico'>";
	insertHtml (selector, html);
}


/* Function to change the icon of the DropMenu button in xs devices */

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
		Latvianflag,
		function (responseText) {
			document.querySelector("#chosenflag")
				.innerHTML = responseText;
		},
		false);
});


// Expose utility to the global object
global.$dc = dc;

})(window);