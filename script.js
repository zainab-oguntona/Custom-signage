// "use strict";

function calculateCost() {
  // SELECT ALL THE NEEDED ELEMENTS
  const nameInput = document.getElementById("nameInput").value.trim();

  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");

  // console.log(errorDiv);

  // Clear previous results and errors
  resultDiv.innerHTML = "";
  errorDiv.innerHTML = "";

  // Check if the user entered a value
  if (nameInput === "") {
    errorDiv.innerHTML = "Please enter a name below...";
    console.log("yooo, caant be empty");
    return;
  }

  // Calculate the cost
  const costPerLetter = 5;
  const nameLength = nameInput.length;
  const totalCost = nameLength * costPerLetter;

  // Show the result
  resultDiv.innerHTML = `<p>${nameInput
    .split("")
    .join(" ")}</p><div class="resultf">$${totalCost}</div>`;
}

// calculateCost();

// let showH = document.querySelector(".spn");
// // let nameEntered = "";
// // const costPerLetter = Number(5);

// // function to calculate cost
// const calculateCost = function (message, costPerLetter) {
//   const numberOfLetters = message.length;
//   const totalCost = numberOfLetters * costPerLetter;
//   return totalCost;
// };
// let totalCost;
// document.querySelector(".btn").addEventListener("click", function () {
//   const search = document.querySelector(".search").value.trim();

//   // when is there is no input
//   if (!search) {
//     showH.classList.remove("spn");
//     document.querySelector(".search").style.border = "1px solid red";
//     // when a name is inputed
//   } else if (search) {
//     const newCost = function () {
//       totalCost = calculateCost(search, Number(5));
//       return totalCost;
//     };
//     console.log(`The total cost is ${newCost}`);
//   }

//   // when a name is inputed ...  First trial
//   // } else if (search === nameEntered) {
//   //   const calculateCost = function () {
//   //     // get the numer of letter in the input
//   //     const numberOfLetters = nameEntered.length;
//   //     // multiply by the cost per letter
//   //     const totalCost = numberOfLetters * costPerLetter;

//   //     return totalCost;

//   //   };
//   //   calculateCost();
//   // console.log(`The total cost is ${nameEntered}`);
// });
