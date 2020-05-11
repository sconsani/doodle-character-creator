console.log("testing edit character.js")

				////////DIV ONE	DIV ONE	DIV ONE	DIV ONE	DIV ONE ///////

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
	else if(event.target.id === "purple") {
		clearcontent();
		console.log("this is the brain dummy")
		$('#head1').append(`<img src="https://i.imgur.com/cSliq36.png" class = "build-img-purple">`)

	}

	else if (event.target.id === "blackhair") {
		clearcontent();
		$('#head1').append(`<img src="https://i.imgur.com/vSfyfQQ.png" class = "build-img-black">`)

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

					////////DIV TWO	DIV TWO	DIV TWO	DIV TWO	DIV TWO ///////

let divtwo = document.getElementById('div2')
console.log(divtwo)


function cleartorso() {
	console.log("clearcontent")
	$('#torso1').empty();

};

function appendNewTorso(targetid) {
	if(event.target.id === "purpleshirt") {
		console.log("clearing content again")
		cleartorso();
		$('#torso1').append(`<img src="https://i.imgur.com/Nyahg0z.png" class = "purple-shirt">`)

	} 
	else if(event.target.id === "blackshirt") {
		cleartorso();
		$('#torso1').append(`<img src="https://i.imgur.com/5zw38he.png" class = "purple-shirt">`)

	} 

	else if(event.target.id === "blueshirt") {
		cleartorso();
		$('#torso1').append(`<img src="https://i.imgur.com/t0KyFlZ.png" class = "blue-shirt">`)

	} 

	else {
		console.log("add more images")
	}

	console.log("append new head")
};

divtwo.onclick = function(event) {
	console.log(" on click")
	let target = event.target;
	let targetid = event.target.id
	console.log(event.target)
	console.log(event.target.id)

	if (target.tagName = 'img'){
	cleartorso();
}
	console.log("clear before appending")
	appendNewTorso(targetid);
};

			////////DIV THREE	DIV THREE	DIV THREE	DIV THREE	DIV THREE ///////

let divthree = document.getElementById('div3')
console.log(divthree)


function clearlegs() {
	console.log("clearcontent")
	$('#legs1').empty();

};

function appendNewLegs(targetid) {
	if(event.target.id === "purplepants") {
		console.log("clearing content again")
		clearlegs();
		$('#legs1').append(`<img src="https://i.imgur.com/wmtQalj.png" class = "purple-pants">`)

	} 
	else if(event.target.id === "blackshorts") {
		clearlegs();
		$('#legs1').append(`<img src="https://i.imgur.com/YAU0xgY.png" class = "black-shorts">`)

	} 
	
	else {
		console.log("add more images")
	}

	console.log("append new legs")
};

divthree.onclick = function(event) {
	console.log(" on click")
	let target = event.target;
	let targetid = event.target.id
	console.log(event.target)
	console.log(event.target.id)

	if (target.tagName = 'img'){
	clearlegs();
}
	console.log("clear before appending")
	appendNewLegs(targetid);
};

				//////DIV FOUR DIV FOUR DIV FOUR DIV FOUR //////////

let divfour = document.getElementById('div4')
console.log(divthree)


function clearfeet() {
	console.log("clearcontent")
	$('#feet1').empty();

};

function appendNewFeet(targetid) {
	if(event.target.id === "hiking") {
		console.log("clearing content again")
		clearlegs();
		$('#feet1').append(`<img src="https://i.imgur.com/QKo9vDT.png" class = "build-img">`)

	} 
	
	else {
		console.log("add more images")
	}

	console.log("append new legs")
};

divfour.onclick = function(event) {
	console.log(" on click")
	let target = event.target;
	let targetid = event.target.id
	console.log(event.target)
	console.log(event.target.id)

	if (target.tagName = 'img'){
	clearfeet();
}
	console.log("clear before appending")
	appendNewFeet(targetid);
};

