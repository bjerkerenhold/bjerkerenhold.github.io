"use strict";

( function( $ )
{
    var stickyOn = $( 'header.sticky-on' ),
		toTop = $( '#toTop' ),
		winObj = $( window ),
		bodyObj = $( 'body' ),
		headerObj = $( 'header' );

	/*----------------------------------------------------*/
	/* Smooth Scroll to Anchor
	/*----------------------------------------------------*/

	$( document ).on( 'click', function( event )
	{
		var hash = window.location.hash;
		if( hash )
		{
			event.preventDefault( );			

			$( 'html, body' ).animate( {
				scrollTop: $( hash ).offset( ).top
			}, 500 );
		}
	} );

	/*----------------------------------------------------*/
	/* Adaptive Menu Width
	/*----------------------------------------------------*/

	var ulMenu1 = $( 'ul.menu-1' );

	winObj.on( 'load', function()
	{
		if( winObj.width() > 992 )
		{
			ulMenu1.flexMenu( { showOnHover: true } );
		}
		else
		{
			ulMenu1.find( '.menu-item-has-children' ).on( 'click', function( event )
			{
				event.stopPropagation();
				$( this ).children( '.sub-menu, .mega-menu' ).toggle( 0 );
			} );
		}
	} );

	/**
	 * 
	 */
	ulMenu1.find( 'a' ).on( 'click', function( e )
	{
		if( !$( this ).attr( 'href' ) || $( this ).attr( 'href' ) === '#' )
		{
			e.preventDefault();
		}
	} );
	
	/*----------------------------------------------------*/
	/* Fixed Menu
	/*----------------------------------------------------*/
	var nav = $( 'header' ),
		navHide = $( '.affixed-hidden' );
		
	winObj.on( 'scroll', function()
	{		
		if( $( this ).scrollTop() > navHide.height() )
		{
			nav.addClass( 'affix-top' );
		}
		else
		{
			nav.removeClass( 'affix-top' );
		}
	} );

	/*----------------------------------------------------*/
	/* Toggle menu
	/*----------------------------------------------------*/
	headerObj.on( 'click', '.toggle_menu', function()
	{
		$( this ).toggleClass( 'open' );
		if( $( this ).hasClass( 'open' ) )
		{
			$( '.menu-1' ).addClass( 'open' );
			bodyObj.addClass('no-scroll');
		}
		else
		{
			$( '.menu-1' ).removeClass( 'open' );
			$( '.menu-item-has-children' ).removeClass( 'open-list' );
			bodyObj.removeClass( 'no-scroll' );
		}
	} );

	/*----------------------------------------------------*/
	/* Mobile Sub Menu
	/*----------------------------------------------------*/
	headerObj.on( 'click', '.menu-1.open a', function( e )
	{
		if( $( this ).siblings().length )
		{
			if( !$( this ).parent().hasClass( 'open-list' ) )
			{
				$( this ).parent().addClass( 'open-list' );
				e.preventDefault();
			}
			else
			{
				$( this ).parent().removeClass( 'open-list' );
			}
		}
	} );

	/*----------------------------------------------------*/
	/* Show/Hide Modal Window
	/*----------------------------------------------------*/
	$( '[data-target]' ).on( 'click', function( e )
	{
		e.preventDefault();

		var target = $( this ).data( 'target' );
		$( target ).addClass( 'show' );
	} );

	var modals = $( '.modal' );
	bodyObj.keydown( function( e )
	{
		if ( e.keyCode === 27 )
		{
			modals.removeClass( 'show' );
		}
	} );

	modals.on( 'click', function( e )
	{
		if( $( e.target ).hasClass( 'modal' ) )
		{
			modals.removeClass( 'show' );
		}
	} );

	// Disabled/Enabled Button in Registration Modal
	$( '.rules' ).on( 'click', '.chackbox_rules', function()
	{
		var btnReg = $( '.registration-modal .btn-reg' );
		$( this ).parent().toggleClass( 'checked' );
		if( $( this ).parent().hasClass( 'checked' ) )
		{
			btnReg.removeAttr( 'disabled' );
		}
		else
		{
			btnReg.attr( 'disabled', 'disabled' );
		}
	} );
	
	/**
	 * Function for setting size of the video background
	 */
	function backgroundVideoSize( selector, sizes )
	{
		if( !selector ) { return }

		selector.parent().addClass( 'background-video-parent' );

		selector.each( function()
		{
			var selfWidth = $( this ).width(),
				selfHeight = $( this ).height();

			if( sizes.width / selfWidth > sizes.height / selfHeight )
			{
				$( this ).css( {
					width: sizes.width + 2,
					height: 'auto'
				} );
			}
			else
			{
				$( this ).css( {
					width: 'auto',
					height: sizes.height + 2
				} );
			}
		} );
	}

	/**
	 * 
	 */
	function hidePreloader( )
	{
		var $preloader = $( '.loader-wrapper' );

		$preloader.find( '.e-loadholder' ).fadeOut( );
		$preloader.fadeOut( 400 );
	}

	/**
	 * 
	 */
    $( window ).load( function( )
    {
		var winWidth = $( window ).width( ),
			winHeight = $( window ).height( ),
			headerHeight = $( 'header' ).height( );

		stickyOn.next( ).css( {
			'margin-top': headerHeight
		} );

		/**
		 * Preloader
		 */																
		hidePreloader( );

		/**
		 * Gallery widget grid
		 */
		if( $( '.widget_media_gallery .gallery' ).length )
		{
			new Muuri( '.widget_media_gallery .gallery', {
				showDuration: 200,
				hideDuration: 100,
				showEasing: 'ease-out',
				layout: {
					rounding: false
				}
			} );
		}

		/**
		 * Instagram widget grid
		 */
		if( $( '.null-instagram-feed ul.instagram-pics' ).length )
		{
			new Muuri( '.null-instagram-feed ul.instagram-pics', {
				showDuration: 200,
				hideDuration: 100,
				showEasing: 'ease-out',
				layout: {
					rounding: false
				}
			} );
		}

		/**
		 * Portfolio widget grid
		 */
		if( $( '.widget_portfolio_widget ul.portfolio-list' ).length )
		{
			new Muuri( '.widget_portfolio_widget ul.portfolio-list', {
				showDuration: 200,
				hideDuration: 100,
				showEasing: 'ease-out',
				layout: {
					rounding: false
				}
			} );
		}

		/**
		 * Massonry grid
		 */
		var $masonry = $( '.masonry-grid' ),
			$grids = $masonry.find( '.row' ),
			$grids = ( $grids.length ) ? $grids : $masonry.find( '.item-container' );
			
		if( $grids.length )
		{
			var itemGrid = new Muuri( $grids.selector, {
				showDuration: 200,
				hideDuration: 100,
				showEasing: 'ease-out',
				layout: {
					rounding: false
				}
			} );

			var $filters = $masonry.find( '.filter-container' );

			if( $filters.length )
			{
				$filters.on( 'click', '.filter-item', function( )
				{
					var filterClass = $( this ).data( 'filter' );
					itemGrid.filter( filterClass === 'all' ? '.item' : '.' + filterClass );

					$filters.find( '.filter-item' ).removeClass( 'active' );
					$( this ).addClass( 'active' );
				} );
			}
		}

		/**
		 * Form 
		 */
		$( 'select' ).styler( { } );

		/**
		 * File Name for File Control
		 */
		$( '.file-field input[type="file"]' ).on( 'change', function()
		{			
			var files = this.files,
				filesNames = $( this ).siblings( '.file-name' ),
				filesList = [];

			for( var i = 0, filesLen = files.length; i < filesLen; i++ )
			{
				filesList.push( files[ i ].name );
			}

			filesNames.text( filesList.join() );
		} );

        /**
		 * Equal height initialization
		 */
        $( '.equal-height' ).matchHeight( );

        /**
		 * Parallax initialization
		 */
        $( '[data-paroller-factor]' ).paroller( );
		
		/**
		 * Sliders
		 */
		var options = {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: true,
			infinite: true,
			autoplay: true,
			adaptiveHeight: true,
			prevArrow: '<button class="prev" data-direction="left" type="button" aria-disabled="true"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
			nextArrow: '<button class="next" data-direction="left" type="button" aria-disabled="true"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
		};

		if( $( 'html' ).attr( 'dir' ) === 'rtl' )
		{
			options.rtl = true;
		}

		$( '.slider-gallery' ).slick( options );

        /**
		 * Animated Scroll To Top
		 */
        $( '#toTop' ).click( function( )
        {
            event.preventDefault();
            $( 'body, html' ).animate( { scrollTop:0 }, 800 );
        } );

        /**
		 * Block appearance animation
		 */
        $( '[data-animation-type]' ).on( 'inview', function( event, isInView )
        {
            if( isInView )
            {
                var context = $( this ),
                    delay = context.attr( 'data-delay' );

                if( !context.hasClass( 'animated' ) )
                {
                    setTimeout( function() 
					{
						context.addClass( context.data( 'animation-type' ) );
						context.addClass( 'animated' );
					}, delay ? delay : 0 );
                }
            }
        } );
		
		/**
		 * 
		 */
		backgroundVideoSize( $( '.background-video' ), { width: winWidth, height: winHeight } );
	} );
	
	$( window ).on( 'resize', function()
	{
		var winWidth = $( window ).width(),
			winHeight = $( window ).height();

		backgroundVideoSize( $( '.background-video' ), { width: winWidth, height: winHeight } );
	} );

    $( window ).on( 'scroll', function()
    {
        var scrollTop = $( this ).scrollTop();

		/**
		 * Show/Hide scroll to top button
		 */
        if( scrollTop != 0 )
        {
            toTop.fadeIn();
        }
        else
        {
            toTop.fadeOut();
        }
    } );

} ( jQuery ) );
