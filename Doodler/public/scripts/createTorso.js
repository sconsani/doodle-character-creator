console.log("testing create torso.js")

let divtwo = document.getElementById('div2')
console.log(divtwo)


function clearcontent() {
	console.log("clearcontent")
	$('#torso1').empty();

};

function appendNewTorso(targetid) {
	if(event.target.id === "blackshirt") {
		console.log("clearing content again")
		clearcontent();
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
	clearcontent();
}
	console.log("clear before appending")
	appendNewTorso(targetid);
};


