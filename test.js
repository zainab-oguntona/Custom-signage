// "use strict";

function calculateCost() {
  // SELECT ALL THE NEEDED ELEMENTS
  const nameInput = document.getElementById("name").value.trim();

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
