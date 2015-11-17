// var docHeight = parseInt($('#_MoodSlider').css("height"));
// var scrollSpeed = docHeight / 100; // 1vh
// var mood1Height = parseInt($('#Mood1 img').css("height"));
// var mood2Height = parseInt($('#Mood2 img').css("height"));
// var mood3Height = parseInt($('#Mood3 img').css("height"));
// var mood4Height = parseInt($('#Mood4 img').css("height"));
// var passion_driftHeight = parseInt($('#passion_drift').css("height"));
// var dreams_flyHeight = parseInt($('#dreams_fly').css("height"));
// var fantasiesHeight = parseInt($('#fantasies').css("height"));
// var lastScroll = 0;
// var currentScroll = 0;



$(document).ready(function() {
	// old raw js code
		// docHeight = parseInt($('#_MoodSlider').css("height"));
		// scrollSpeed = docHeight / 100; // 1vh
		// currentScroll = $(window).scrollTop();

		// slide 2 image scrolling
		// $(window).scroll(function (event) {
		// 	// height changes
		// 	mood1Height = parseInt($('#mood1 img').css("height"));
		// 	mood2Height = parseInt($('#mood2 img').css("height"));
		// 	mood3Height = parseInt($('#mood3 img').css("height"));
		// 	mood4Height = parseInt($('#mood4 img').css("height"));
		// 	passion_driftHeight = parseInt($('#passion_drift').css("height"));
		// 	dreams_flyHeight = parseInt($('#dreams_fly').css("height"));
		// 	fantasiesHeight = parseInt($('#fantasies').css("height"));
		// 	// when u've scrolled the window 2/3 past the top of #_MoodSlider
		// 	if ( $(window).width() >= 768 ) {
		// 		// if ( $(window).scrollTop() > 2/5*docHeight && 
		// 		// $(window).scrollTop() < $('#_Pleasure').offset().top ) {
		// 			// if ( $(window).scrollTop() > 2/5*docHeight /*$('#_Parallax').offset().top*/) {
		// 			// 	// stop to give margin = 65px
		// 			// 	if ( $('#mood1').offset().top > docHeight + 65 ) {
		// 			// 		$('#mood1').css({
		// 			// 			'marginTop': parseInt( $('#mood1').css("marginTop") ) - scrollSpeed + 'px'
		// 			// 		});
		// 			// 	}
		// 			// }

		// 			// if ( $(window).scrollTop() > 3/5*docHeight) {
		// 			// 	if ( $('#passion_drift').offset().top > docHeight 
		// 			// 		+ 65 
		// 			// 		+ mood1Height ) {
		// 			// 		$('#passion_drift').css({
		// 			// 			'marginTop': parseInt( $('#passion_drift').css("marginTop") ) - scrollSpeed*3/4 + 'px'
		// 			// 		});
		// 			// 	}
		// 			// }

		// 			// if ( $(window).scrollTop() > (1/10+5/4)*docHeight) {
		// 			// 	if ( $('#mood2').offset().top > docHeight 
		// 			// 		+ 65 + mood1Height 
		// 			// 		+ passion_driftHeight ) {
		// 			// 		$('#mood2').css({
		// 			// 			'marginTop': parseInt( $('#mood2').css("marginTop") ) - scrollSpeed*5/4 + 'px'
		// 			// 		});
		// 			// 	}
		// 			// }

		// 			// if ( $(window).scrollTop() > 9/4*docHeight) {
		// 			// 	if ( $('#mood3').offset().top > docHeight 
		// 			// 	+ 65 
		// 			// 	+ mood1Height 
		// 			// 	+ passion_driftHeight 
		// 			// 	+ mood2Height ) {
		// 			// 		$('#mood3').css({
		// 			// 			'marginTop': parseInt( $('#mood3').css("marginTop") ) - scrollSpeed + 'px'
		// 			// 		});
		// 			// 	}
		// 			// }

		// 			// if ( $(window).scrollTop() > 23/8*docHeight) {
		// 			// 	if ( $('#dreams_fly').offset().top > docHeight 
		// 			// 	+ 65 
		// 			// 	+ mood1Height 
		// 			// 	+ passion_driftHeight 
		// 			// 	+ mood2Height 
		// 			// 	+ mood3Height ) {
		// 			// 		$('#dreams_fly').css({
		// 			// 			'marginTop': parseInt( $('#dreams_fly').css("marginTop") ) - scrollSpeed*3/4 + 'px'
		// 			// 		});
		// 			// 	}
		// 			// }

		// 			// if ( $(window).scrollTop() > 13/4*docHeight) {
		// 			// 	if ( $('#mood4').offset().top > docHeight 
		// 			// 	+ 65 
		// 			// 	+ mood1Height 
		// 			// 	+ passion_driftHeight 
		// 			// 	+ mood2Height 
		// 			// 	+ mood3Height 
		// 			// 	+ dreams_flyHeight ) {
		// 			// 		$('#mood4').css({
		// 			// 			'marginTop': parseInt( $('#mood4').css("marginTop") ) - scrollSpeed*5/4 + 'px'
		// 			// 		});
		// 			// 	}
		// 			// }

		// 			// if ( $(window).scrollTop() > 14/4*docHeight) {
		// 			// 	if ( $('#fantasies').offset().top > docHeight 
		// 			// 	+ 65 
		// 			// 	+ mood1Height 
		// 			// 	+ passion_driftHeight 
		// 			// 	+ mood2Height 
		// 			// 	+ mood3Height 
		// 			// 	+ dreams_flyHeight 
		// 			// 	+ mood4Height ) {
		// 			// 		$('#fantasies').css({
		// 			// 			'marginTop': parseInt( $('#fantasies').css("marginTop") ) - scrollSpeed*3/4 + 'px'
		// 			// 		});
		// 			// 	}


		// 			// }
		// 		//} // Section 2


		// 		if ( $(window).scrollTop() > (1/20*docHeight + $('#_Products').offset().top) && 
		// 		$('#_Products').hasClass('active') ) {
		// 			currentScroll = $(window).scrollTop();

		// 			// on Products section
		// 			// $('#product-' + skyProducts.productNumber + '-3').removeClass('hidden');
		// 			// $('#productDescription').addClass('notVisible');
		// 			// keeping everything in place even when not visible
		// 			// $('#productDescription').css({'padding-top': scrollSpeed * 30 + 'px' })
		// 			// $('#productSelectContainer').css({'position':'fixed'});
		// 			// remove margin top to image
		// 			// $('.product-shots').css({'margin-top': 400 + 'px'});

		// 			// now we can begin brining in the wireframe
		// 			if ( currentScroll > lastScroll ) {
		// 				// scroll down
		// 				console.log('scroll down');
		// 				// remember, scrollSpeed is 1vh
		// 				// if ( parseInt($('.wireframe_shots').css('height')) < 30*scrollSpeed ) {
		// 				// 	console.log('wireframe < 30vh');
		// 				// 	$('#wireframe_container').css({
		// 				// 		'top': parseInt( $('#wireframe_container').css('top') ) - scrollSpeed + 'px' 
		// 				// 	});
		// 				// 	$('.wireframe_shots').css({
		// 				// 		'height': parseInt( $('.wireframe_shots').css('height') ) + scrollSpeed + 'px'
		// 				// 	});
		// 				// 	$('.product-shots').css({
		// 				// 		'height': parseInt( $('.product-shots').css('height') ) - scrollSpeed + 'px'
		// 				// 	});
		// 				// }
		// 			} else {
		// 				// scroll up
		// 				console.log('scroll up');
		// 				// if ( parseInt($('.product-shots').css('height')) < 40*scrollSpeed ) {
		// 				// 	console.log('product img < 40vh');
		// 				// 	$('#wireframe_container').css({
		// 				// 		'top': parseInt( $('#wireframe_container').css('top') ) + scrollSpeed + 'px' 
		// 				// 	});
		// 				// 	$('.wireframe_shots').css({
		// 				// 		'height': parseInt( $('.wireframe_shots').css('height') ) - scrollSpeed + 'px'
		// 				// 	});
		// 				// 	$('.product-shots').css({
		// 				// 		'height': parseInt( $('.product-shots').css('height') ) + scrollSpeed + 'px'
		// 				// 	});
		// 				// }
		// 			}
		// 			lastScroll = currentScroll;

		// 		} else if ( $(window).scrollTop() + $(window).height() == $(document).height() ) {
		// 			// at bottom
		// 		} else if ( $(window).scrollTop() < $('#_Products').offset().top ) {
		// 			// NOT on Products section
		// 			// $('.wireframe_shots').addClass('hidden');
		// 			// $('#productDescription').removeClass('notVisible');
		// 			// keeping everything in place even when not visible
		// 			// $('#productDescription').css({'padding-top': 0 + 'px' })
		// 			// $('#productSelectContainer').css({'position':'relative'});
		// 			// remove margin top to image
		// 			// $('.product-shots').css({'margin-top': 200 + 'px'});

		// 		}

		// 	} // window.width
		// }); // window.scroll





	var magicController = new ScrollMagic.Controller();

	var scrollSpeed1 = 0.25;	// text
	var scrollSpeed2 = 0.50;	// mood1 & 3
	var scrollSpeed3 = 0.75;	// mood2 & 4

	// scene declarations
	if ( $(window).width() > 767 ) {
		// section 2
			var mood1Scroll = new ScrollMagic.Scene({
					triggerElement: '#mood1Trigger',
					duration: '35%'
				}).setTween("#mood1", scrollSpeed2, {marginTop: 0, ease: Cubic.easeOut})
				// .addIndicators({name: 'mood1 - duration 35%'})
				.addTo(magicController);

			var text1Scroll = new ScrollMagic.Scene({
					triggerElement: '#text1Trigger',
					duration: '25%'
				}).setTween("#passion_drift", scrollSpeed1, {marginTop: 0, ease: Cubic.easeOut})
				// .addIndicators({name: 'text1 - duration 25%'})
				.addTo(magicController);

			var mood2Scroll = new ScrollMagic.Scene({
					triggerElement: '#mood2Trigger',
					duration: '35%'
				}).setTween("#mood2", scrollSpeed3, {marginTop: 0, ease: Cubic.easeOut})
				// .addIndicators({name: 'mood2 - duration 35%'})
				.addTo(magicController);

			var mood3Scroll = new ScrollMagic.Scene({
					triggerElement: '#mood3Trigger',
					duration: '35%'
				}).setTween("#mood3", scrollSpeed2, {marginTop: 0, ease: Cubic.easeOut})
				// .addIndicators({name: 'mood3 - duration 35%'})
				.addTo(magicController);

			var text2Scroll = new ScrollMagic.Scene({
					triggerElement: '#text2Trigger',
					duration: '25%'
				}).setTween("#dreams_fly", scrollSpeed1, {marginTop: 0, ease: Cubic.easeOut})
				// .addIndicators({name: 'text2 - duration 25%'})
				.addTo(magicController);

			var mood4Scroll = new ScrollMagic.Scene({
					triggerElement: '#mood4Trigger',
					duration: '35%'
				}).setTween("#mood4", scrollSpeed3, {marginTop: 0, ease: Cubic.easeOut})
				// .addIndicators({name: 'mood4 - duration 35%'})
				.addTo(magicController);

			var text3Scroll = new ScrollMagic.Scene({
					triggerElement: '#text3Trigger',
					duration: '25%'
				}).setTween("#fantasies", scrollSpeed1, {marginTop: 0, ease: Cubic.easeOut})
				// .addIndicators({name: 'text3 - duration 25%'})
				.addTo(magicController);

		// images
			var hide_products = new ScrollMagic.Scene({
				triggerElement: '.grid_trigger',
				duration: '60%'
			}).setTween(".hide_products", scrollSpeed1, {height: 0})
			// .addIndicators({name: 'reduce product height - duration 75%'})
			.addTo(magicController);

			var show_grid = new ScrollMagic.Scene({
				triggerElement: '.grid_trigger',
				duration: '60%'
			}).setTween('#wf_grid', scrollSpeed2, {opacity: 1, ease: Cubic.easeOut})
			// .addIndicators({name: 'fade in grid - duration 60%'})
			.addTo(magicController);

		// fixed positions on buttons
			var fix_buttons = new ScrollMagic.Scene({
					triggerElement: '.products_trigger'
				}).setClassToggle('#productSelectContainer', 'fixed').setClassToggle('#productContainer', 'fixed').setClassToggle('#specifications', 'fixed')
				// .addIndicators({name: 'fixed buttons'})
				.addTo(magicController);

		// Update Nov 16 2015 - Client no longer wants fade effects for text
		// // hide about text
		// 	var fade_description = new ScrollMagic.Scene({
		// 		triggerElement: '.grid_trigger',
		// 		duration: '70%'
		// 	}).setClassToggle('#productDescription', 'notVisible')
		// 	// .addIndicators({name: 'fade about text - duration 70%'})
		// 	.addTo(magicController);

		// // scroll specs 'up'
		// 	var scroll_specs = new ScrollMagic.Scene({
		// 			triggerElement: '.grid_trigger',
		// 			duration: '20%'
		// 		}).setTween("#specifications", scrollSpeed2, {paddingBottom: '5%'})
		// 		// .addIndicators({name: 'show Specs - duration 20%'})
		// 		.addTo(magicController);
	}

	$(window).resize( function () {
		if ( $(window).width() > 767 && $(window).height() > 650 ) {
			// $('#specifications').css({
			// 	'margin-top' : '100vh'
			// });
			// magicController.enabled(true);
		} else {
			// magicController.enabled(false);
			// $('#specifications').css({
			// 	'margin-top' : '-30vh'
			// });
		}
	});
});
