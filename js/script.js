"use strict";
// Get saved data from sessionStorage
var nameTheme = sessionStorage.getItem("myTheme");
console.log(nameTheme);
if (nameTheme) {
	$("body")
		.removeClass()
		.addClass(nameTheme);
}

var searchBox = document.querySelectorAll(
	'.search-box input[type="text"] + span',
);

searchBox.forEach((elm) => {
	elm.addEventListener("click", () => {
		console.log(elm.previousElementSibling.value);
		elm.previousElementSibling.value = "";
	});
});

$(".header .set-theme").on("click", function() {
	var classBody = $("body").attr("class");
	if (classBody === "dark-theme") {
		$("body")
			.removeClass("dark-theme")
			.addClass("light-theme");
		// Save data to sessionStorage
		sessionStorage.setItem("myTheme", "light-theme");
	} else {
		$("body")
			.removeClass("light-theme")
			.addClass("dark-theme");
		// Save data to sessionStorage
		sessionStorage.setItem("myTheme", "dark-theme");
	}
});

function myKeyPress(e) {
	var keynum;

	if (window.event) {
		// IE
		keynum = e.keyCode;
	} else if (e.which) {
		// Netscape/Firefox/Opera
		keynum = e.which;
	}

	console.log(keynum);
}
$(document).keydown(function(event) {
	myKeyPress(event);
});

var date = new Date();
var year = date.getFullYear();
$("#year-footer").text(year);
