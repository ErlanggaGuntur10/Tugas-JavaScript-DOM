var childElement = document.getElementsByTagName("p")[0];
var parentElement = childElement.parentNode;
parentElement.innerHTML = "Ini merupakan sebuah kata baru";


var listItems = document.getElementById("list").childNodes;
for(var i = 0; i < listItems.length; i++) {
  if (listItems[i].nodeName == "LI") {
    listItems[i].innerHTML = "Kata halo " + (i+1) + " sudah diubah!";
  }
}

var selectedElement = document.getElementById("parent2");
var childElements = selectedElement.childNodes;
for(var i = 0; i < childElements.length; i++) {
  if (childElements[i].nodeName == "P") {
    childElements[i].innerHTML = "Kalimat ini " + (i+1);
  }
}

var targetElement = document.querySelector('.target');
var siblings = Array.from(targetElement.parentNode.childNodes)
  .filter(node => node.nodeType === Node.ELEMENT_NODE && node !== targetElement);
console.log(siblings);