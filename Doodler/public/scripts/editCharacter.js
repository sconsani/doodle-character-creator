console.log("testing edit character.js")


let selectedImg;
let divone = document.getElementById('div1')


function clearcontent() {
	console.log("clearcontent")
	$('#head1').empty();

};

function appendNewHead(targetid) {
	if(event.target.id === "redhead") {
		console.log("clearing content again")
		clearcontent();
		$('#head1').append(`<img src="https://i.imgur.com/thqi8Jj.png" class = "build-img">`)
		// dynamic- relating to data rather than hardcoded
		// $('#head1').append(`<img src=${}`)
	} 
	else if(event.target.id === "brain") {
		clearcontent();
		console.log("this is the brain dummy")
		$('#head1').append(`<img src="https://i.imgur.com/Zr0qWZC.png" class = "build-img">`)

	}

	else if (event.target.id === "painter") {
		clearcontent();
		$('#head1').append(`<img src="https://i.imgur.com/s87FwmW.png" class = "build-img">`)

	}

	else if (event.target.id === "tattoo") {
		clearcontent();
		$('#head1').append(`<img src="https://i.imgur.com/JxxEDgI.png" class = "build-img">`)

	}

	else {
		console.log("add more images")
	}

	console.log("append new head")
};

divone.onclick = function(event) {
	console.log(" on click")
	let target = event.target;
	let targetid = event.target.id
	console.log(event.target)
	console.log(event.target.id)

	if (target.tagName = 'img'){
	clearcontent();
}
	console.log("clear before appending")
	appendNewHead(targetid);
};





// 	if(targe)

// 	if (selectedImg) {
// 		$('#head1').append(`<div class = "empty"></div`)
// 	}
// 	selectedImg = img;
// 	selectedImg.append(``)
// }



// works but not dynamic
// $('#redhead').click(function() {


				// 	//clear contents
				// 	//click on bigger container/parents
				// 	//event.target (child elements)
				// 	//event delegation


// 	$('#head1').append(`<img src = "https://i.imgur.com/thqi8Jj.png" class = "char-head">`)
// 	console.log("running click")

// 	//save to an global object of finished doodle


// });

// // works but not dynamic
// $('#tattoo').click(function() {
// 	$('#head1').append(`<img src = "https://i.imgur.com/JxxEDgI.png" class = "char-head">`)
// 	console.log("running click")

// });


// $('#blackshirt').click(function() {
// 	$('#torso1').append(`<img src = "https://i.imgur.com/3QSSCSw.png" class = "char-head">`)
// 	console.log("running click")

// });








