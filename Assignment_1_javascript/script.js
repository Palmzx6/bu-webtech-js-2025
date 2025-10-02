window.onload = function() {
  let input = prompt("Input integer number");

  let num = parseInt(input);

  if (isNaN(num)) {
    alert("Please enter a valid integer number!");
  } else {
    if (num === 0) {
      alert("zero integer number");
    } else if (num % 2 === 0) {
      alert("even integer number");
    } else {
      alert("odd integer number");
    }
  }
};
