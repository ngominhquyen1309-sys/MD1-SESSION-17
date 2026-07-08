let button = document.getElementById("btnToggle");
let body = document.body;

button.addEventListener("click", function () {
  if (body.style.backgroundColor === "black"&& body.style.color === "white") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } 
});

//ngắn hơn
// let button = document.getElementById("btnToggle");
// let body = document.body;

// button.addEventListener("click", function () {
//   if (body.style.backgroundColor === "black") {
//     body.style.backgroundColor = "white";
//     body.style.color = "black";
//   } else {
//     body.style.backgroundColor = "black";
//     body.style.color = "white";
//   } 
// });

// Chuẩn lập trình
// let button = document.getElementById("btnToggle");
// let body = document.body;

// button.addEventListener("click", function () {
//     if (body.style.backgroundColor === "black") {
//         body.style.backgroundColor = "white";
//         body.style.color = "black";
//         return;
//     }

//     body.style.backgroundColor = "black";
//     body.style.color = "white";
// });