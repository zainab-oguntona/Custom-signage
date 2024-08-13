'use strict';

let showH = document.querySelector('.spn');
// let nameEntered = "";
// const costPerLetter = Number(5);

// function to calculate cost
const calculateCost = function (message, costPerLetter) {
  const numberOfLetters = message.length;
  const totalCost = numberOfLetters * costPerLetter;
  return totalCost;
}
let totalCost;
document.querySelector('.btn').addEventListener('click', function () {
  const search = document.querySelector('.search').value;

  // when is there is no input
  if (!search) {
    showH.classList.remove('spn')
    document.querySelector('.search').style.border = '1px solid red'
    // when a name is inputed
  } else if (search) {
    const newCost = function () {
      totalCost = calculateCost(search, Number(5));
    }
    console.log(`The total cost is ${totalCost}`)
  }





  // when a name is inputed ...  First trial
  // } else if (search === nameEntered) {
  //   const calculateCost = function () {
  //     // get the numer of letter in the input
  //     const numberOfLetters = nameEntered.length;
  //     // multiply by the cost per letter
  //     const totalCost = numberOfLetters * costPerLetter;

  //     return totalCost;

  //   };
  //   calculateCost();
  // console.log(`The total cost is ${nameEntered}`);

  console.log(value);
});

