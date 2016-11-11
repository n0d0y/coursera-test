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
var backgroundHTML = "snippets/background-snippet.html";
var certificationsHTML = "snippets/certifications-snippet.html";
var skillsHTML = "snippets/skills-snippet.html";
var languagesHTML = "snippets/languages-snippet.html";
var contactHTML = "snippets/contact-snippet.html";
var certificateHTML = "snippets/certificate-snippet.html";
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

////////////////////////////// nav-bar functionality ///////////////////////////////////
var MainSelected = function (tabSelected) {
	//On first load, show home view
	ShowLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		tabSelected,
		function (responseText) {
			document.querySelector("#main-content")
				.innerHTML = responseText;
		},
		false);
}

// To choose backgroundHTML
$("#background").click(function (event) {
	MainSelected(backgroundHTML);
});
// To choose certificationsHTML
$("#certifications").click(function (event) {
	MainSelected(certificationsHTML);
});
// To choose skillsHTML
$("#skills").click(function (event) {
	MainSelected(skillsHTML);
});
// To choose languagesHTML
$("#idioms").click(function (event) {
	MainSelected(languagesHTML);
});
// To choose contactHTML
$("#contact").click(function (event) {
	MainSelected(contactHTML);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
// To push the flag in medium and larges devices 'Spanish language'
$("#sflag").click(function (event) {
	/*console.log(event);
	prueba = document.querySelector("#sflag").className;
	console.log(prueba);
	prueba = prueba.replace(new RegExp("active", "g"), "");
	document.querySelector("#sflag").className = prueba;*/

	// Add 'active' to menu button if not already there
	prueba = document.querySelector("#sflag").className;
		if (prueba.indexOf("active") === -1) {
    		prueba += " active";
    		
    	document.querySelector("#sflag").className = prueba;
	}console.log(prueba);
});
// To push the flag in medium and larges devices 'English language'
$("#eflag").click(function (event) {
	icon = document.querySelector("#eflag").innerHTML;
	document.querySelector("#chosenflag").innerHTML = icon;
});
// To push the flag in medium and larges devices 'French language'

// To push the flag in medium and larges devices 'Latvian language'
/////////////////////////////////////////////////////////////////////////////////////////////////////////

// To change the flag icon when you choose Spanish languange
$("#sflag_ico").click(function (event) {
	icon = document.querySelector("#sflag_ico").innerHTML;
	document.querySelector("#chosenflag").innerHTML = icon;
});
// To change the flag icon when you choose English languange
$("#eflag_ico").click(function (event) {
	icon = document.querySelector("#eflag_ico").innerHTML;
	document.querySelector("#chosenflag").innerHTML = icon;
});
// To change the flag icon when you choose French languange
$("#fflag_ico").click(function (event) {
	icon = document.querySelector("#fflag_ico").innerHTML;
	document.querySelector("#chosenflag").innerHTML = icon;
});
// To change the flag icon when you choose Latvian languange
$("#lflag_ico").click(function (event) {
	icon = document.querySelector("#lflag_ico").innerHTML;
	document.querySelector("#chosenflag").innerHTML = icon;
});
////////////////////////////// nav-bar functionality ///////////////////////////////////


////////////////////////////CertificationsHTML PART ////////////////////////////////////
// To choose forWebDevelopers
dc.loadCertificate = function (event) {
	console.log(event);

	ShowLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		certificateHTML,
		function (responseText) {
			document.querySelector("#main-content")
				.innerHTML = responseText;
		},
		false);

		dc.loadCertificate.querySelector("#titlePicture")
		.innerHTML = "<img src='img/CHTML,CSS,JavaScript.jpg' class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>";
}

// To choose AndroidPart1
dc.loadCertificate = function (event) {
	console.log(event);

	ShowLoading("#main-content");
	$ajaxUtils.sendGetRequest(
		certificateHTML,
		function (responseText) {
			document.querySelector("#main-content")
				.innerHTML = responseText;
		},
		false);

		document.querySelector("#titlePicture")
		.innerHTML = "<img src='img/androidPart1.jpg' class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>";
}
////////////////////////////CertificationsHTML PART ////////////////////////////////////


// Expose utility to the global object
global.$dc = dc;

})(window);