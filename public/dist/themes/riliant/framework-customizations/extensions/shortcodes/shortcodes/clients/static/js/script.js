( function( $ )
{
	var options = {
		slidesToShow: 8,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 6
				}
			},
			{
				breakpoint: 968,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2
				}
			}
		]
	};

	if( $( 'html' ).attr( 'dir' ) === 'rtl' )
	{
		options.rtl = true;
	}

	$( '.shortcode-clients .client-slider' ).slick( options );
} ( jQuery ) );