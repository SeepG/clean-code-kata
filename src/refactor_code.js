var body = $('body');

body.on('mouseover', '.additional_program a', function (e) {
	const $hoveredLink = $(this);
	toggleHoveredLink($hoveredLink);
})

function toggleHoveredLink($hoveredLink) {
	if (!$hoveredLink.hasClass('set')) {
		stopAnimate($hoveredLink,'135px').addClass('activate');
		animateParent($hoveredLink,'buZu','.buAb');
		animateParent($hoveredLink,'buAb','.buZu');
	}
};

function animateParent($element,className,parentClassName) {
	if ($element.hasClass(className)) {
		var parentClass = $element.parent().find(parentClassName);
		stopAnimate(parentClass, '15px');
	}
}

function stopAnimate($element, width) {
	return $element.stop(true, false).animate({
		width: width
	}, 100);
}
