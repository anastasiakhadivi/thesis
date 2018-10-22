console.log("working");
$(document).ready(function(){
	$("#container2").hide();
	$("#container3").hide();
	$("#container4").hide();
	$("#container5").hide();


	$("#word-allegiance").click(function(){
		$("#container2").toggle();
		// $("#container2").css("z-index", "-1");

	})
	$("#word-liberty").click(function(){
		$("#container3").toggle();
	})
	$("#word-justice").click(function(){
		$("#container4").toggle();
	})
	$("#word-all").click(function(){
		$("#container5").toggle();
	})

	// $("#container5 p").draggable({
	// 	drop: function(event){

	// 	}
	// })
	console.log("jquery is a go!");
})


console.log("i'm working");

