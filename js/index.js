$(document).ready(function() {

//social buttons up top
$("#header_social_buttons_wrapper a img").hover(
	function() { //hover in
		var img = $(this);
		img.attr('src', img.attr('src').replace('_off', '_on'));
	},
	function() { //hover out
		var img = $(this);
		img.attr('src', img.attr('src').replace('_on', '_off'));
	}
);

$("#main_content").on("oo.pageChange", function() {
	var div = $(this);
	if (div.find('.home_page') != []) {
		activateSlides();
	}
});

$("#header, #sidebar_nav, #main_wrapper").on("click", ".js_link", function() {
	var link = $(this);
	showPage(link.attr('title'));
});

showPage('home_page');

});

function showPage(pageName) {
	if (pageName == 'apply_page') {
		window.location = 'https://docs.google.com/spreadsheet/embeddedform?formkey=dENMRlJJdS1pYkM2YUdnYWVLN0hlckE6MQ';
		return;
	}
	
	//update sidebar nav
	$("#sidebar_nav .js_link").removeClass('selected');
	$("#sidebar_nav .js_link." + pageName + "_link").addClass('selected');
	
	//update content area
	var contentArea = $("#main_content");
	var newPage = $("#hidden_pages ." + pageName).clone();
	contentArea.hide().html(newPage).slideDown(600);
	$("#main_content").trigger("oo.pageChange");
}

function activateSlides() {
	$("#main_content .slides").slides({
		'generatePagination': false,
		'play': 5000,
		'slideSpeed': 1000
	});
}
