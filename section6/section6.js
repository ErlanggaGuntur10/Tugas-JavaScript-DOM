// mengubah warna teks
document.getElementById("hello").style.color = "green";

// menambahkan border
document.getElementById("image").style.border = "5px solid black";

// Contoh 3
var infoDiv = document.getElementById("info");
var styles = window.getComputedStyle(info);

console.log("Background color of div element: " + styles.backgroundColor);
console.log("Width of div element: " + styles.width);
console.log("Height of div element: " + styles.height);
