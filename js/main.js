let screenWidth = $(window).width();
	let positionElements = '';
	const check1 = 'navThirdSidenavFirstSidenavSecondSide';
	const check2 = 'navFirstSidenavSecondSidenavThirdSide';
	const tabletWidth = 768;

	if (screenWidth < tabletWidth) {
		$('#navThirdSide').each(function () {
			let div = $(this).parent('div');
			div.find(this).insertBefore($('#navSecondSide'));
			div.find('#navFirstSide').insertBefore($('#navSecondSide'));
		});
	}

	$(window).resize(function() {
		$('#myNavbar > div > ul').each( function( index, element) {
		    positionElements += $(element).attr( "id");
		});

		if ($(window).width() < tabletWidth && positionElements !== check1) {
			$('#navThirdSide').each(function () {
				let div = $(this).parent('div');
				div.find(this).insertBefore($('#navSecondSide'));
				div.find('#navFirstSide').insertBefore($('#navSecondSide'));
			});
		} 
		if ($(window).width() >= tabletWidth && positionElements !== check2) {
			$('#navThirdSide').each(function () {
				let div = $(this).parent('div');
				div.find('#navThirdSide').insertAfter($('#navSecondSide'));
			});
		}
		positionElements = '';
	});


$(document).ready(function () {
	ToxProgress.create();
	ToxProgress.animate();
});