console.log("sanity check- create a character")
// var domtoimage = require('dom-to-image');

$(document).ready(function(){

// function showhide() {
//     $('#showdiv1').on("click", function(event) {
//         console.log("click is working")
//         $('div[id^=div]').hide();
//         $('#div1').show();
//     });
//     $('#showdiv2').on("click", function(event) {
//         $('div[id^=div]').hide();
//         $('#div2').show();
//     });

//     $('#showdiv3').on("click",function(event) {
//         $('div[id^=div]').hide();
//         $('#div3').show();
//     });

    // $('#showdiv4').click(function() {
    //     $('div[id^=div]').hide();
    //     $('#div4').show();
    // });

    // $('#showdiv5').click(function() {
    //     $('div[id^=div]').hide();
    //     $('#div5').show();
    // });

    // $('#showdiv6').click(function() {
    //     $('div[id^=div]').hide();
    //     $('#div6').show();
    // });

// };

// showhide();
// });



	// THIS WORKS
	let headsElements = document.getElementById('heads');
	let torsoElements = document.getElementById('torsos');

// THIS WORKS
function showElements() {
	// let headsElements = document.getElementById('heads');
	document.querySelector('.head1').addEventListener('click', handleHead)
	document.querySelector('.torso2').addEventListener('click', handleTorso)
	// document.querySelector('.legs3').addEventListener('click', handleLeg)

		let headContent = document.querySelector('.heads')
		let torsoContent = document.querySelector('.torsos')
		// let legContent = document.querySelector('.legs')
// THIS WORKS
	function handleHead(event){
		if (headContent.style.display === "none") {
			headContent.style.display = "block"
			handleTorso();

		} else {
			headContent.style.display = "none"
		}

}
handleHead();
// THIS WORKS
	function handleTorso(event) {
	if (torsoContent.style.display === "none") {
			torsoContent.style.display = "block"

		} else {
			torsoContent.style.display = "none"
		}


	}
handleTorso();
};
// THIS WORKS
showElements();
});


















//THIS DOESNT WORK BUT IT MAKES SENSE

// var divs = ["all", "heads", "torsos", "legs", "feet", "backgrounds", "accessories"];
// var visibleDivId = null;

// function toggleVisibility(divId) {
// 	if(visibleDivId === divId) {
// 		visibleDivID = null;
// 	} else {
// 		visibleDivId = divId;
// 	}
// 	hideNonVisibleDivs();
// }
// function hideNonVisibleDivs() {
// 	var i, divId, div;
// 	for (i = 0; i <divs.length; i++) {
// 		divId = divs[i];
// 		div = document.getElementById(divId);
// 		if(visibleDivId === divId) {
// 			div.style.display = "block";
// 		} else {
// 			div.style.display = "none";
// 		}
// 	}
// }

// toggleVisibilty(divId);




