( function( $ )
{
	var shortcodeTeam = $( '.shortcode-team' );

	if( shortcodeTeam.hasClass( 'type_1' ) )
	{
		var sliderRow = shortcodeTeam.find( '.slider' );

		if( sliderRow.length )
		{
			sliderRow.each( function()
			{
				var controls = $( this ).closest( '.shortcode-team' ).find( '.slider-controls' ),
					options = {
						prevArrow: controls.children( '.prev' ),
						nextArrow: controls.children( '.next' ),
						infinite: true,
						swipeToSlide: true,
						slidesToShow: 3,
						responsive: [
							{
								breakpoint: 992,
								settings: {
									slidesToShow: 2,
								}
							},
							{
								breakpoint: 768,
								settings: {
									slidesToShow: 1,
								}
							}
						]
					};

				if( $( 'html' ).attr( 'dir' ) === 'rtl' )
				{
					options.rtl = true;
				}

				$( this ).slick( options );
			} );
		}
	}
	
	if( shortcodeTeam.hasClass( 'type_2' ) )
	{
		var shortcodeTeamAvatars = shortcodeTeam.find( '.team-avatar-list li' ),
		shortcodeTeamLength = shortcodeTeamAvatars.length,
		listOptions = {
			slidesToShow: 6,
			slidesToScroll: 1,
			asNavFor: '.team-content',
			dots: false,
			arrows: false,
			focusOnSelect: true,
			autoplay: false,
			autoplaySpeed: 3000,
			infinite: true,
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 700,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
					}
				},
			]
		},
		contentOptions = {
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: shortcodeTeamLength > 6 ? '.team-avatar-list' : '',
			fade: true,
			prevArrow: shortcodeTeam.find( 'button.prev' ),
			nextArrow: shortcodeTeam.find( 'button.next' ),
			arrows: true,
			dots: false
		};

		if( $( 'html' ).attr( 'dir' ) === 'rtl' )
		{
			listOptions.rtl 	= true;
			contentOptions.rtl 	= true;
		}

		var avatarSlider = $( '.shortcode-team .team-avatar-list' ).slick( listOptions ),
			contentSlider = $( '.shortcode-team .team-content' ).slick( contentOptions );
		
		contentSlider.on( 'beforeChange', function( event, slick, currentSlide, nextSlide )
		{
			if( shortcodeTeamLength > 6 )
			{
				avatarSlider.slick( 'slickGoTo', nextSlide );
			}
			else
			{
				shortcodeTeamAvatars.removeClass( 'slick-current' );
				shortcodeTeamAvatars.eq( nextSlide ).addClass( 'slick-current' );
			}
		} );
	}
} ( jQuery ) );