console.log("sanity check- build a character")
// var domtoimage = require('dom-to-image');




$(document).ready(function(){
	let parts = ["head", "torso", "legs", "feet", "accessories", "background"]
//get these file sizes correct for both
	let heads = ["https://i.imgur.com/4MxsHVR.png", "https://i.imgur.com/QV3hLEX.png", "https://i.imgur.com/bzJwNOT.png", "https://i.imgur.com/lSoPalj.png"]
	let torso = ["", "", "", ""]
	let legs = ["", "", "", ""]
	let feet = ["", "", "", ""]
	let background = ["", "", "", ""]
	let accessories = ["", "", "", ""]

// get these file sizes correct for display- save smaller
	let headsthumb = ["https://i.imgur.com/4MxsHVR.png", "https://i.imgur.com/QV3hLEX.png", "https://i.imgur.com/bzJwNOT.png", "https://i.imgur.com/lSoPalj.png"]
	// let headsthumbID = ["readhead", "brainhead", "painter", "tattoo"]
	let torsothumb = ["", "", "", ""]
	let legsthumb = ["", "", "", ""]
	let feetthumb = ["", "", "", ""]
	let backgroundthumb = ["", "", "", ""]
	let accessoriesthumb = ["", "", "", ""]

	// let headcoords = set coordinates here for each item, or set it in the css/javascript?



	function renderBuilderParts(builderparts) {
		// let parts = ["head", "torso", "legs", "feet", "accessories", "background"]
		console.log("renderBuilderParts- FUNCTION");

		for (i=0; i<parts.length; i++ ) {
			$("#body-parts").append(`<div class = "body-btn" data-target = "acc" id = "${parts[i]}"><span><p>${parts[i]}</p></span></div>`)

			};
	};

renderBuilderParts();

	function headonClickShow() {

		// if data-target = "head" { then do this and set it to show, if a different one is 
		// 	clicked- then hide the previous and show the new one}
		console.log("headonClickShow- FUNCTION");

		$('#head').on("click", function(event){
			for (i=0; i<headsthumb.length; i++){
			$("#options-row").append(`<div class="box col-6 col-sm-3">
									<img class = "thumb mt-2 mb-2" src ="${headsthumb[i]}" id = "${headsthumb[i]} alt = "" height = "100">
					 				</div> `)

			// headsthumb[i].style.display = "show";
			};
		});
	};

headonClickShow();

	function headClicked() {
		console.log(headsthumb[i])
		console.log("headClicked- FUNCTION");

		if (headsthumb[0].style.display == "show") {
			$(`#${headsthumb[i]}`).on("click", function (event){
				$("dooodle-container").append(`<div class = "head-image-active">
												<img class = "thumb" src = ${headsthumb[i]} alt ="testing head show" height = "100">
												</div>`)
																});
												}

							};
headClicked();

});

