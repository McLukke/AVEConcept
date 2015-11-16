var productIndex = 2;
var colourIndex = 1;

function setProduct(p)
{
	if (p != productIndex)
	{
		$('.productBtnSet-'+productIndex).hide();
		$('.productBtnSet-'+p).show();
		productIndex = p;

		// $('.product-shot').css('background-image', "url('/images/product-"+productIndex+"-"+colourIndex+".png')");

		$('.product-shot.selected').velocity("fadeOut", { delay: 0, duration: 500 });
		$('.product-shot.selected').removeClass('selected');
		$("#product-"+productIndex+"-"+colourIndex+'.product-shot').addClass('selected');

		$('.product-shot.selected').velocity("fadeIn", { delay: 500, duration: 500 });

	}
}

function setColour(c)
{

	if (colourIndex != c)
	{
		$('.product-shot.selected').velocity("fadeOut", { delay: 0, duration: 500 });

		$('#productBG-'+colourIndex+'.product-background').velocity("fadeOut", { delay: 500, duration: 500 });

		colourIndex = c;

		$('#productBG-'+colourIndex+'.product-background').velocity("fadeIn", { delay: 500, duration: 500 });





		$('.product-shot.selected').removeClass('selected');
		$("#product-"+productIndex+"-"+colourIndex+'.product-shot').addClass('selected');

		$('.product-shot.selected').velocity("fadeIn", { delay: 1000, duration: 500 });

		

	}
}

var isNight = false;
var isDay = false;
function showNight()
{
	if (isNight)
	{
		showDayNight();
	}
	else
	{
		isNight = true;
		isDay = false;
		$('#dayNightSlide-1 #day').velocity({width: '5%'}, {duration: 500});
		$('#day .hidden-message').velocity("fadeOut", {duration: 500});
		$('#night .hidden-message').velocity("fadeIn", {delay: 1000, duration: 500});
	}

}

function showDay()
{
	if (isDay)
	{
		showDayNight();
	}
	else
	{
		isDay = true;
		isNight = false;
		$('#dayNightSlide-1 #day').velocity({width: '43%'}, {duration: 500});
		$('#night .hidden-message').velocity("fadeOut", {duration: 500});
		$('#day .hidden-message').velocity("fadeIn", {delay: 1000, duration: 500});
	}
}

function showDayNight()
{
	isNight = false;
	isDay = false;
	$('#night .hidden-message').velocity("fadeOut", {duration: 500});
	$('#day .hidden-message').velocity("fadeOut", {duration: 500});
	$('#dayNightSlide-1 #day').velocity({width: '25%'}, {delay: 1000, duration: 500});


}

// NEW SKY SCRIPT
//var chargerDisplayed = false;
var skyProducts = {};
skyProducts.currentId = 'productBtn1';
skyProducts.productNumber = 1;
skyProducts.colour = 1;

$(document).ready(function() {
	// pleasure scripts
	$('.pleasure_explore').on('click', function() {
		$('html, body').animate({
					 scrollTop: $('#_Products').offset().top + 'px'
		}, 'slow');

		// hide description
		$('#about_product' + skyProducts.productNumber).addClass('hidden');

		// remove old selected button
    $('#productBtn' + skyProducts.productNumber).removeClass('selected');

		// set globals
		var temp_id = $(this).parent().attr('id');
		skyProducts.productNumber = temp_id.slice(-1);
		skyProducts.currentId = "productBtn" + skyProducts.productNumber;
		skyProducts.colour = 1;

    // highlight selected button
    $('#productBtn' + skyProducts.productNumber).addClass('selected');

    // change background image - old
		$('#productBG-1').css({
			'display' : 'block',
			'opacity' : '1'});
		$('#productBG-2').css({
			'display' : 'none',
			'opacity' : '0'
		});

    // change background - current
    $('#_Products').css({
    	'background-color' : '#F7F6F7'
    });

    // show correct color set of buttons
    $('.productBtnSet-1').addClass('hidden');
    $('.productBtnSet-2').removeClass('hidden');

    // show product
    $('.product-shots').removeClass('selected default');
    $('#product-' + skyProducts.productNumber + '-1').addClass('selected default');
    $('.wireframe_shots').addClass('hidden');
    $('#product-' + skyProducts.productNumber + '-3').removeClass('hidden');

    // show description
		$('#about_product' + skyProducts.productNumber).removeClass('hidden');
	}); // pleasure_button

	// product select scripts
	$('.button').on('click', function (event){
		var itself = this;
		// grab the IMG tag's ID
		skyProducts.currentId = event.currentTarget.id;

		// grab product # from ID
		skyProducts.productNumber = skyProducts.currentId.substr(skyProducts.currentId.length - 1);

		// show specs / description
		$('.specs_anchor').addClass('hidden');
		$('.description').addClass('hidden');
		$('#description'+ skyProducts.productNumber + ' .description').removeClass('hidden');
		$('.wireframe_shots').addClass('hidden');
		$('#product-' + skyProducts.productNumber + '-3').removeClass('hidden');
		if (skyProducts.colour == 1) {
			$('#description'+ skyProducts.productNumber + ' .description .white_spec_img').removeClass('hidden');
		} else {
			$('#description'+ skyProducts.productNumber + ' .description .blue_spec_img').removeClass('hidden');
		}
		$('.about_product').addClass('hidden');
		$('#about_product' + skyProducts.productNumber).removeClass('hidden');

    $('.button').removeClass('selected');
    $(itself).addClass('selected');

    $('.product-shots').removeClass('selected default');
    $('#product-' + skyProducts.productNumber + '-' + skyProducts.colour).addClass('selected default');
	}); // button
}); // document
