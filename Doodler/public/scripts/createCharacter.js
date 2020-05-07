console.log("sanity check- create a character")
// var domtoimage = require('dom-to-image');

$(document).ready(function(){

	// jQuery(function(){
	// 	jQuery('#showall').click(function(){
	// 		jQuery('.targetDiv').show();
	// 	});
	// 	jQuery('.showSingle').click(function(){
	// 		jQuery('targetDiv').hide();
	// 		jQuery('#div' +$(this).attr('target')).show();
	// 	});
	// });

	function showFeatures(){
		console.log("running new functinon")
		$('#showall').on("click", function(event){
			$('.targetDiv').show();
		});

		$('.showSingle').on("click", function(event){
			$('targetDiv').hide();
			$('#div' +$(this).attr('target')).show();
		});
	};

	showFeatures();

});




// 	function showRedHead() {

// 		$('#redheadthumb').on("click", function(event){
// 			$("#red-head-container").append(`<img id = "redhead" class = "center-block" src = "https://i.imgur.com/4MxsHVR.png">`)
		
// 			});
// };

// showRedHead();

// 	function replacewithother() {

// 	}



