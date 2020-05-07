console.log("sanity check- build a character")
// var domtoimage = require('dom-to-image');

// $(document).ready(function(){
// 	let parts = ["head", "torso", "legs", "feet", "accessories", "background"]
// //get these file sizes correct for both
// 	let heads = ["https://i.imgur.com/4MxsHVR.png", "https://i.imgur.com/QV3hLEX.png", "https://i.imgur.com/bzJwNOT.png", "https://i.imgur.com/lSoPalj.png"]
// 	let torso = ["", "", "", ""]
// 	let legs = ["", "", "", ""]
// 	let feet = ["", "", "", ""]
// 	let background = ["", "", "", ""]
// 	let accessories = ["", "", "", ""]

// get these file sizes correct for display- save smaller
	// let headsthumb = ["https://i.imgur.com/4MxsHVR.png", "https://i.imgur.com/QV3hLEX.png", "https://i.imgur.com/bzJwNOT.png", "https://i.imgur.com/lSoPalj.png"]
	// // let headsthumbID = ["readhead", "brainhead", "painter", "tattoo"]
	// let torsothumb = ["", "", "", ""]
	// let legsthumb = ["", "", "", ""]
	// let feetthumb = ["", "", "", ""]
	// let backgroundthumb = ["", "", "", ""]
	// let accessoriesthumb = ["", "", "", ""]

	// let headcoords = set coordinates here for each item, or set it in the css/javascript?



// 	function renderBuilderParts(builderparts) {
// 		// let parts = ["head", "torso", "legs", "feet", "accessories", "background"]
// 		console.log("renderBuilderParts");

// 		for (i=0; i<parts.length; i++ ) {
// 			$("#body-parts").append(`<div class = "body-btn" data-target = "acc" id = "${parts[i]}"><span><p class ="">${parts[i]}</p></span></div>`)

// 			};
// 	};

// renderBuilderParts();

								//THIS IS WORKING
// function headonClickShow() {

// 	function toggleHeads() {
// 		var x = document.getElementById("options-row-heads")
// 		if (x.style.display ==="none") {
// 			x.style.display = "block";
// 		}
// 		else {
// 			x.style.display = "none";
// 		}
// 	}

// 		// if data-target = "head" { then do this and set it to show, if a different one is 
// 		// 	clicked- then hide the previous and show the new one}
// 		console.log("headonClickShow- FUNCTION");

// 	$('#head').on("click", function(event){
// 		toggleHeads();
// 	});
// 	};

// headonClickShow();

// });
							//THIS ABOVE IS WORKING

							///the below is an attempt for the options for loop

///this was a function below to print out the options for the heads using a for loop
///i was trying to figure out how to use a toggle and also use a for loop. 

// 			for (i=0; i<headsthumb.length; i++){
// 			$("#options-row").append(`<div class="box col-6 col-sm-3">
// 									<img class = "thumb mt-2 mb-2" src ="${headsthumb[i]}" id = "${headsthumb[i]} alt = "" height = "100">
// 					 				</div> `)

// 			};
// 		});
// 	};
// 
								//ATTEMPT - multiple variables in one function
								// to do the same thing with toggling for each one
								// depending on what is active or not

// function bodypartClickShow() {

// 	function toggleChoices() {
// 		var h = document.getElementById("options-row-heads")
// 		if (h.style.display ==="none") {
// 			h.style.display = "block";
// 		}
// 		else {
// 			h.style.display = "none";
// 		}
// 	}

// 		// if data-target = "head" { then do this and set it to show, if a different one is 
// 		// 	clicked- then hide the previous and show the new one}
// 		console.log("headonClickShow- FUNCTION");

	// $('#head').on("click", function(event){
	// 	toggleChoices();
	// });


	// $('#torso').on("click", function(event){
	// var t = document.getElementById("options-row-torsos")
	// 	if(h.style.display ==="block"){
	// 		h.style.display = "none"
	// 		t.style.display = "block"
	// 	}
	// })
	// };

// bodypartClickShow();
