// function show(e){
// 	console.log(e);
// 	if(document.getElementById('About').style.display == "block")
// 		document.getElementById('About').style.display = "none";
// 	else
// 		document.getElementById('About').style.display = "block";

// };

function show(e){
	console.log(e);
	document.getElementById('BackContent').style.height = "100%";
	document.getElementById('Content').style.visibility = "hidden";
	document.getElementById('BackContent').style.visibility = "hidden";
	document.getElementById('About').style.display = "none";
	document.getElementById('CV').style.display = "none";
	document.getElementById('Projects').style.display = "none";
	document.getElementById('Contact').style.display = "none";
	document.getElementById('Deadpool').style.display = "none";
	var cont = document.getElementById('Content')

	if(e.target.innerText == 'Inicio'){
		document.getElementById('Content').style.visibility = "hidden";
		document.getElementById('BackContent').style.visibility = "hidden";
	}
	else if(e.target.innerText == 'Sobre'){
		document.getElementById('Content').style.visibility = "visible";
		document.getElementById('BackContent').style.visibility = "visible";
		if(document.getElementById('About').style.display == "block")
			document.getElementById('About').style.display = "none";
		else
			document.getElementById('About').style.display = "block";

		if(cont.scrollHeight > cont.clientHeight || cont.scrollWidth > cont.clientWidth){
			var alturaAtual = document.getElementById('About').offsetHeight;
			console.log(alturaAtual)
			document.getElementById('BackContent').style.height = alturaAtual+40;
		}
	}
	else if(e.target.innerText == 'Curriculo'){
		document.getElementById('Content').style.visibility = "visible";
		document.getElementById('BackContent').style.visibility = "visible";
		if(document.getElementById('CV').style.display == "block")
			document.getElementById('CV').style.display = "none";
		else
			document.getElementById('CV').style.display = "block";
		if(cont.scrollHeight > cont.clientHeight || cont.scrollWidth > cont.clientWidth){
			var alturaAtual = document.getElementById('CV').offsetHeight;
			console.log(alturaAtual)
			document.getElementById('BackContent').style.height = alturaAtual+40;
		}
	}
	else if(e.target.innerText == 'Projetos'){
		document.getElementById('Content').style.visibility = "visible";
		document.getElementById('BackContent').style.visibility = "visible";
		if(document.getElementById('Projects').style.display == "block")
			document.getElementById('Projects').style.display = "none";
		else
			document.getElementById('Projects').style.display = "block";
		if(cont.scrollHeight > cont.clientHeight || cont.scrollWidth > cont.clientWidth){
			var alturaAtual = document.getElementById('Projects').offsetHeight;
			console.log(alturaAtual)
			document.getElementById('BackContent').style.height = alturaAtual+40;
		}
	}
	else if(e.target.innerText == 'Contato'){
		document.getElementById('Content').style.visibility = "visible";
		document.getElementById('BackContent').style.visibility = "visible";
		if(document.getElementById('Contact').style.display == "block")
			document.getElementById('Contact').style.display = "none";
		else
			document.getElementById('Contact').style.display = "block";
		if(cont.scrollHeight > cont.clientHeight || cont.scrollWidth > cont.clientWidth){
			var alturaAtual = document.getElementById('Contact').offsetHeight;
			console.log(alturaAtual)
			document.getElementById('BackContent').style.height = alturaAtual+40;
		}
	}
	else if(e.target.nodeName == 'IMG'){
		document.getElementById('Content').style.visibility = "visible";
		document.getElementById('BackContent').style.visibility = "visible";
		if(document.getElementById('Deadpool').style.display == "block")
			document.getElementById('Deadpool').style.display = "none";
		else
			document.getElementById('Deadpool').style.display = "block";
		if(cont.scrollHeight > cont.clientHeight || cont.scrollWidth > cont.clientWidth){
			var alturaAtual = document.getElementById('Deadpool').offsetHeight;
			console.log(alturaAtual)
			document.getElementById('BackContent').style.height = alturaAtual+40;
		}
	}
}

function lightbox(l){
	console.log(1111);
	console.log(l);

	 if(l.target.attributes.nodeValue == 'AboutMe.png'){
	 	console.log(1234);
	 	document.getElementById('lightbox_content').innerHTML = '<img src="AboutMe.png">';
	 }

}

var b = document.getElementsByTagName("button");
console.log(b.length);
for (var i = 0; i < b.length; i++) {
	if(b[i].id == 'buttonBox'){
		b[i].addEventListener('click', lightbox, false);
	}
	else
		b[i].addEventListener('click', show, false);
}
