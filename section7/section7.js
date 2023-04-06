document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        alert("Anda menekan tombol spasi!");
    }
});

document.addEventListener("keydown", function(event) {
    if (event.code === "ArrowRight") {
        document.getElementById("klikkanan").style.backgroundColor = "blue";
    }
});

document.getElementById("kliksaya").addEventListener("click", function() {
    this.style.backgroundColor = "blue";
});

document.getElementById("div").addEventListener("mouseover", function() {
    alert("Anda mengarahkan cursor mouse ke elemen ini!");
});