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

					////////DIV TWO	DIV TWO	DIV TWO	DIV TWO	DIV TWO ///////

let divtwo = document.getElementById('div2')
console.log(divtwo)


function cleartorso() {
	console.log("clearcontent")
	$('#torso1').empty();

};

function appendNewTorso(targetid) {
	if(event.target.id === "blackshirt") {
		console.log("clearing content again")
		cleartorso();
		$('#torso1').append(`<img src="https://i.imgur.com/3QSSCSw.png" class = "build-img">`)

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
	if(event.target.id === "greenpants") {
		console.log("clearing content again")
		clearlegs();
		$('#legs1').append(`<img src="https://i.imgur.com/QKo9vDT.png" class = "build-img">`)

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
