// When "Add Number" is clicked, it should move the number to the Number Bank
const numbersinsideNumberBank = [];

//grab the form
const form = document.querySelector("form");
console.log(form);

//add event listener for when the form is submitted
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector("input");

  //get the value of what is typed into the input
  const userInputNumber = input.value;

  //get the input element
  numbersinsideNumberBank.push(userInputNumber);

  //get the value off of the input
  const numberBankOutput = document.querySelector("#numberBank output");

  //grab the number bank
  numberBankOutput.value = numbersinsideNumberBank;

  //grab the output inside the section with an id of numberBank
  input.value = "";

  //set the value inside of the number bank output to the value of the user input
  const sortOneButton = document.querySelector("#sortOne");
  function sortOne() {
    if (numbersinsideNumberBank.length > 0) {
      const firstNumber = numbersinsideNumberBank.shift(); // Remove the first number from the number bank
      classifyNumber(firstNumber); // Classify the removed number (odd or even)
      updateNumberBank(); // Update the number bank display
    }
  }

  const sortAllButton = document.querySelector("#sortAll");
  function sortAll() {
    while (numbersinsideNumberBank.length > 0) {
      const number = numbersinsideNumberBank.shift();
      classifyNumber(number); // Classify each number (odd or even)
    }
    updateNumberBank(); // Update the number bank display
  }

  sortOneButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    sortOne();
  });

  sortAllButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    sortAll();
  });
});
