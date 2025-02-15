// function checkEvenOdd(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }
// console.log(checkEvenOdd(4));
// console.log(checkEvenOdd(9));

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log("number is even");
  } else {
    console.log("number is odd");
  }
}
console.log(checkEvenOdd(0));

function increaseCounter() {
  let counterElement = document.getElementById("counter-value");
  let currentValue = parseInt(counterElement.textContent);
  counterElement.textContent = currentValue + 1;
}
function decreaseCounter() {
  let counterElement = document.getElementById("counter-value");
  let currentValue = parseInt(counterElement.textContent);
  counterElement.textContent = currentValue - 1;
}

function reverseString(str) {
  return str.split("").reverse("").join("");
}
console.log(reverseString("Hafsa"));

async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    document.getElementById("data-container").innerHTML = `
                    <h3>${data.title}</h3>
                    <p>${data.body}</p>
                `;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
