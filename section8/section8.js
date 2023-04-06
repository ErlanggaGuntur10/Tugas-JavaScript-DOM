const maleRadio = document.getElementById("maleradio");
const femaleRadio = document.getElementById("femaleradio");

maleRadio.addEventListener("jenis kelamin", function() {
  if (maleRadio.checked) {
    console.log("Anda memilih laki-laki");
  }
});

femaleRadio.addEventListener("jenis kelamin", function() {
  if (femaleRadio.checked) {
    console.log("Anda memilih perempuan");
  }
});

// Contoh 2

var radios = document.getElementsByName('color');

for (var i = 0; i < radios.length; i++) {
	radios[i].addEventListener('change', function() {
		var selectedValue = document.querySelector('input[name="color"]:checked').value;
		console.log('Warna yang anda pilih:', selectedValue);
	});
}

// Contoh 3
const inputField = document.getElementById('masukkan');
const output = document.getElementById('output');

inputField.addEventListener('input', (event) => {
  const inputValue = event.target.value;
  output.innerText = `Kamu mengetik: ${inputValue}`;
  output.style.display = 'block';
});

// Contoh 4
const myInput = document.getElementById('myinput');
const myOutput = document.getElementById('myoutput');

myInput.addEventListener('input', (event) => {
  const inputValue = event.target.value;
  if (inputValue < 0) {
    myOutput.innerText = 'Masukan nilai minimal harus 0';
    myOutput.style.display = 'block';
  } else if (inputValue > 100) {
    myOutput.innerText = 'Masukan nilai maksimal 100';
    myOutput.style.display = 'block';
  } else {
    myOutput.style.display = 'none';
  }
});