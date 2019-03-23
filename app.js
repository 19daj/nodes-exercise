var content1 = document.getElementById("first-content");
var content2 = document.getElementById("second-content");
var content3 = document.getElementById("third-content");

var paragraph1Existent = content1.getElementsByTagName("p")[0];
var paragraph2Existent = content2.getElementsByTagName("p")[0];
var paragraph3Existent = content3.getElementsByTagName("p")[0];

var paragraph1Static = content1.getElementsByTagName("p")[1];
var paragraph2Static = content2.getElementsByTagName("p")[1];
var paragraph3Static = content3.getElementsByTagName("p")[1];

var paragraph1Change = content1.getElementsByTagName("p")[2];
var paragraph2Change = content2.getElementsByTagName("p")[2];
var paragraph3Change = content3.getElementsByTagName("p")[2];

var paragraphOne = createParagr("paragraph1");
var paragraphTwo = createParagr("paragraph2");
var paragraphThree = createParagr("paragraph3");

var buttons = document.getElementsByTagName("button");
for(var i = 0; i < buttons.length; i++) {
    buttons[i].style.border = "0";
    buttons[i].style.padding = "10px";
    buttons[i].style.marginRight = "20px";
    buttons[i].style.marginTop = "20px";
    buttons[i].style.backgroundColor = "pink";
}

var title = document.getElementsByTagName("h1");
for(var i = 0; i < title.length; i++) {
    title[i].style.color = "#fa8072";
}

function createParagr(nameVar) {
    var nameVar = document.createElement("p");
    var text = document.createTextNode("¡Hola!, ¡acabo de ser creado y tener texto, soy su nuevo hermano jaja!");
    return nameVar.appendChild(text);
}

function additionChild() {
    var option = prompt("Elige una opción: \n 1) Contenedor DIV \n 2) Contenedor SPAN \n 3) Contenerdor ARTICLE");
    switch (option) {
        case "1":
            content1.appendChild(paragraphOne);
            break;
        case "2":
            content2.appendChild(paragraphTwo);
            break;
        case "3":
            content3.appendChild(paragraphThree);
            break;
        default:
            break;
    }
}

function deleteChild() {
    var option = prompt("Elige una opción: \n 1) Contenedor DIV \n 2) Contenedor SPAN \n 3) Contenerdor ARTICLE");
    switch (option) {
        case "1":
            content1.removeChild(paragraph1Existent);
            break;
        case "2":
            content2.removeChild(paragraph2Existent);
            break;
        case "3":
            content3.removeChild(paragraph3Existent);
            break;
        default:
            break;
    }
}

function changingNodes() {
    var option = prompt("Elige una opción: \n 1) Contenedor DIV \n 2) Contenedor SPAN \n 3) Contenerdor ARTICLE");
    switch (option) {
        case "1":
            content1.removeChild(paragraph1Change);
            content1.insertBefore(paragraph1Change, paragraph1Static);
            break;
        case "2":
            content2.removeChild(paragraph2Change);
            content2.insertBefore(paragraph2Change, paragraph2Static);
            break;
        case "3":
            content3.removeChild(paragraph3Change);
            content3.insertBefore(paragraph3Change, paragraph3Static);
            break;
        default:
            break;
    }  
}
