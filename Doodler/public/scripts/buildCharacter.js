console.log("sanity check- build a character")
// var domtoimage = require('dom-to-image');

$(document).ready(function(){
	let parts = ["head", "torso", "legs", "feet", "accessories", "background"]


	function renderBuilderParts(builderparts) {
		// let parts = ["head", "torso", "legs", "feet", "accessories", "background"]
		
		for (i=0; i<parts.length; i++ ) {
			$("#body-parts").append(`<div class = "body-btn" data-target = "acc" id = "${parts[i]}"><span><p>${parts[i]}</p></span></div>`)

			};
	};

renderBuilderParts();

	function onClickShow() {
		$('#head').on("click", function(event){
			// if(event.target.id.contains("head")) {}
			$()



			
		})
	}








});




