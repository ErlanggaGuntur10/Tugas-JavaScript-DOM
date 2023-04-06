// getElementById() 
const element = document.getElementById("header");
element.style.color = "blue";

let paragraph = document.getElementById("paragraph");
paragraph.innerHTML = "Teks sudah diubah!";

let myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  alert("Tombol diklik!");
});

// ===================================================================================

//getElementsByClassName()
var tombol = document.getElementsByClassName("tombol")[0];

tombol.addEventListener("click", function() {
	var mhs = document.getElementsByClassName("mhs");
	for (var i = 0; i < mhs.length; i++) {
		alert(mhs[i].innerText);
	}
});

// ===================================================================================

//querySelector()
var tombol = document.querySelector("#tombol1");

tombol.addEventListener("click", function() {
	var h1 = document.querySelector("#h1-awal");
	h1.classList.add("teks-biru");
	var p = document.querySelector("#p-awal;");
	p.style.fontSize = "20px";
});