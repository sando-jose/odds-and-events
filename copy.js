document.addEventListener("DOMContentLoaded", function () {
  const numberBankOutput = document.querySelector("#numberBank output");
  const addButton = document.querySelector("button");
  const numberInput = document.querySelector('input[name="number"]');
  const sortOneButton = document.querySelector("#sortOne");
  const sortAllButton = document.querySelector("#sortAll");
  const oddsOutput = document.querySelector("#odds output");
  const evensOutput = document.querySelector("#evens output");

  let numbers = []; // Array to store entered numbers

  // Function to handle click on "Add Number" button
  function displaySelectedNumber() {
    // Get the value entered in the input field
    const enteredNumber = parseInt(numberInput.value);

    // Check if entered value is a valid number
    if (!isNaN(enteredNumber)) {
      // Add the number to the number bank array
      numbers.push(enteredNumber);

      // Update the number bank display
      updateNumberBank();

      // Clear the input field for the next number entry
      numberInput.value = "";
    } else {
      // Inform the user to enter a valid number (optional)
      alert("Please enter a valid number.");
    }
  }

  // Function to update the number bank display
  function updateNumberBank() {
    numberBankOutput.textContent = numbers.join(", ");
  }

  // Function to handle click on "Sort 1" button
  function sortOneNumber() {
    if (numbers.length > 0) {
      const firstNumber = numbers.shift(); // Remove the first number from the number bank
      classifyNumber(firstNumber); // Classify the removed number (odd or even)
      updateNumberBank(); // Update the number bank display
    }
  }

  // Function to handle click on "Sort All" button
  function sortAllNumbers() {
    while (numbers.length > 0) {
      const number = numbers.shift();
      classifyNumber(number); // Classify each number (odd or even)
    }
    updateNumberBank(); // Update the number bank display
  }

  // Function to classify a number as odd or even and update the respective output
  function classifyNumber(number) {
    const isOdd = number % 2 !== 0;
    if (isOdd) {
      oddsOutput.textContent += number + " ";
    } else {
      evensOutput.textContent += number + " ";
    }
  }

  // Event listeners
  addButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    displaySelectedNumber();
  });

  sortOneButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    sortOneNumber();
  });

  sortAllButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    sortAllNumbers();
  });
});
