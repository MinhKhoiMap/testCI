function adjacentElementsProduct(inputArray) {
  let max = -10e19;
  for (let i = 0; i < inputArray.length - 1; i++) {
    let temp = inputArray[i] * inputArray[i + 1];
    if (temp > max) max = temp;
  }
  return max;
}

const formBai1 = document.querySelector("form#bai1");
const inputArrayBai1 = document.querySelector("input#bai1");
const outputSectionBai1 = document.querySelector("span#bai1");

formBai1.onsubmit = (e) => {
  e.preventDefault();
  if (inputArrayBai1.value) {
      let inputNumber = [];
      let charNumbers = inputArrayBai1.value.split(",");
      charNumbers.map((number) => {
        inputNumber.push(Number(number.trim()));
      });
    
      handleShowOutputBai1(inputNumber);
  }
  else alert("Chưa nhập input bài 1");
};


function handleShowOutputBai1(inputNumber) {
    let output = adjacentElementsProduct(inputNumber);
    outputSectionBai1.innerText = `Output: ${output}`;
}
