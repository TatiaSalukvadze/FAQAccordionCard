// document.addEventListener("DOMContentLoaded", function () {
//   var qandarElements = document.querySelectorAll(".qandar");

//   qandarElements.forEach(function (qandar) {
//     qandar.addEventListener("click", function () {
//       var answer = qandar.nextElementSibling;
//       answer.classList.toggle("show");
//     });
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  let qs = document.querySelectorAll(".question");
  for (let q of qs) {
    let qandar = q.querySelector(".qandar");
    let img = qandar.querySelector("img");
    let p = q.querySelector("p");
    qandar.addEventListener("click", function () {
      qandar.classList.toggle("change");
      img.classList.toggle("rotate");
      p.classList.toggle("show"); // 'this' refers to the button element
    });
  }
});
