$(document).ready(function (){
    $("[data-toggle='popover']").popover({
        trigger: "hover"
    });

    $("#trabajos").justifiedGallery({
        rowHeight : 500,
        margins  : 3,
        cssAnimation : true
    });

    $("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic'
	});
});