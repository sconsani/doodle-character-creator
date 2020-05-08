console.log("sanity check- create a character")
// var domtoimage = require('dom-to-image');

$(document).ready(function(){
    $(".targetDiv").hide();
});


$(function(){
   $('#showall').click(function(){
      $('.targetDiv').show('.cnt');
   });
   $('#hideall').click(function() {
      $('.targetDiv').hide('.cnt');
   });
   
   $('.showSingle').click(function(){
      $('.targetDiv').hide('.cnt');
      $('#div'+$(this).attr('target')).toggle();

   }); 
});




























// 	// THIS WORKS
// 	let headsElements = document.getElementById('heads');
// 	let torsoElements = document.getElementById('torsos');

// // THIS WORKS
// function showElements() {
// 	// let headsElements = document.getElementById('heads');
// 	document.querySelector('.head1').addEventListener('click', handleHead)
// 	document.querySelector('.torso2').addEventListener('click', handleTorso)
// 	// document.querySelector('.legs3').addEventListener('click', handleLeg)

// 		let headContent = document.querySelector('.heads')
// 		let torsoContent = document.querySelector('.torsos')
// 		// let legContent = document.querySelector('.legs')
// // THIS WORKS
// 	function handleHead(event){
// 		if (headContent.style.display === "none") {
// 			headContent.style.display = "block"
// 			handleTorso();

// 		} else {
// 			headContent.style.display = "none"
// 		}

// }
// handleHead();
// // THIS WORKS
// 	function handleTorso(event) {
// 	if (torsoContent.style.display === "none") {
// 			torsoContent.style.display = "block"

// 		} else {
// 			torsoContent.style.display = "none"
// 		}


// 	}
// handleTorso();
// };
// // THIS WORKS
// showElements();
// });

