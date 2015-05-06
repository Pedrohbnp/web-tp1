// function show(e){
// 	console.log(e);
// 	if(document.getElementById('About').style.display == "block")
// 		document.getElementById('About').style.display = "none";
// 	else
// 		document.getElementById('About').style.display = "block";

// };

function show(e){
	console.log(e);
	document.getElementById('Content').style.visibility = "hidden";
	document.getElementById('About').style.display = "none";
	document.getElementById('CV').style.display = "none";
	document.getElementById('Projects').style.display = "none";
	document.getElementById('Contact').style.display = "none";

	if(e.target.innerText == 'Inicio'){
		document.getElementById('Content').style.visibility = "hidden";
	}
	else if(e.target.innerText == 'Sobre'){
		document.getElementById('Content').style.visibility = "visible";
		if(document.getElementById('About').style.display == "block")
			document.getElementById('About').style.display = "none";
		else
			document.getElementById('About').style.display = "block";
	}
	else if(e.target.innerText == 'Curriculo'){
		document.getElementById('Content').style.visibility = "visible";
		if(document.getElementById('CV').style.display == "block")
			document.getElementById('CV').style.display = "none";
		else
			document.getElementById('CV').style.display = "block";
	}
	else if(e.target.innerText == 'Projetos'){
		document.getElementById('Content').style.visibility = "visible";
		if(document.getElementById('Projects').style.display == "block")
			document.getElementById('Projects').style.display = "none";
		else
			document.getElementById('Projects').style.display = "block";
	}
	else if(e.target.innerText == 'Contato'){
		document.getElementById('Content').style.visibility = "visible";
		if(document.getElementById('Contact').style.display == "block")
			document.getElementById('Contact').style.display = "none";
		else
			document.getElementById('Contact').style.display = "block";
	}

	
}

var b = document.getElementsByTagName("button");
console.log(b.length);
 for (var i = 0; i < b.length; i++) {
    b[i].addEventListener('click', show, false);
 }
