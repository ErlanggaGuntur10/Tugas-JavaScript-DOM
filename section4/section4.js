// membuat elemen baru
var newListItem = document.createElement("li");
var textNode = document.createTextNode("Kata - kata 4");
newListItem.appendChild(textNode);
document.getElementById("list").appendChild(newListItem);

// membuat elemen image baru
var newImage = document.createElement("img");
newImage.setAttribute("src", "https://res.cloudinary.com/teepublic/image/private/s--TLzsjSTQ--/t_Preview/b_rgb:36538b,c_limit,f_jpg,h_630,q_90,w_630/v1523266999/production/designs/2572232_0.jpg");
document.getElementById("div").appendChild(newImage);

// membuat elemen button baru
var newButton = document.createElement("button");
var textNode = document.createTextNode("Klik Aku");
newButton.appendChild(textNode);
document.body.appendChild(newButton);