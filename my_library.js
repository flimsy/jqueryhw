$(document).ready(function() {
	console.log('working well');

	// var my_anon_function = function(){ alert('HAR!'); }
	//hides the paragraph text
	$("li").hide();
	$("li").fadeIn(2000);
	$("img").hide();
	$(".nav").hide();	
	$(".nav").animate({
		width:'toggle'
	},800);
	$("h1").hide();
	$("h1").fadeIn(5000);
	$("h1").css("background-color", "red");
	$("h1").click(function(){
		var colors = ["red","blue","lime","black"];
		$("img").show();
		setInterval(function(){
			$("body").css("background-color", colors[Math.floor(Math.random()*colors.length)]);
			$("img").animate({
				left: "-=5"
			},100);
		}, 100);
		var spooky = "SPOOKY G00sts";
		for(i = 0; i < 50; i++) {
			spooky = spooky + " " + "SPOOKY G00sts";
		}
		$(".nav").hide();
		$("p").text(spooky);

		$("p").animate({
			fontSize: "45px",
		}, 4000);

		$("h1").text("You shouldn't have!");
		$("h1").fadeOut(500);
	})
	$("li").click(function(){
		console.log("going to google.com");
		location.href = 'http://google.com';

	});




	// my_anon_function();

})
