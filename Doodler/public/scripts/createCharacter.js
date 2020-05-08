console.log("sanity check- create a character")
// var domtoimage = require('dom-to-image');

jQuery(document).ready(function(){
    $(".targetDiv").hide();
});


jQuery(function(){
   jQuery('#showall').click(function(){
      jQuery('.targetDiv').show('.cnt');
   });
   jQuery('#hideall').click(function() {
      jQuery('.targetDiv').hide('.cnt');
   });
   
   jQuery('.showSingle').click(function(){
      jQuery('.targetDiv').hide('.cnt');
      jQuery('#div'+$(this).attr('target')).toggle();

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

