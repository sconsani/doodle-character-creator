console.log("sanity check- create a character")
// var domtoimage = require('dom-to-image');

$(document).ready(function(){

	$(function(){
		console.log("running jquery functinon")

		$('#showall').on("click", function(event){
			console.log("running showall functinon")
			$('.targetDiv').show();
		});

		$('.showSingle').on("click", function(event){
			console.log("running show single functinon")

			$('targetDiv').hide();
			console.log("hide is working")

			$('#div' +$(this).attr('target')).show();
			console.log("this div is working")
			console.log($(this))
			
		});
	});


	

	// function showFeatures(){
	// 	console.log("running new functinon")
	// 	$('#showall').on("click", function(event){
	// 		console.log("running new functinon")
	// 		$('.targetDiv').show();
	// 	});

	// 	$('.showSingle').on("click", function(event){
	// 		console.log("running new functinon")
	// 		$('targetDiv').hide();
	// 		console.log("hide is working")
	// 		$('#div' +$(this).attr('target')).show();
	// 	});
	// };

	// showFeatures();

});


