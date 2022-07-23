function alternatingSums(inputArray) {
  let weightOfTeams = [0, 0];
  inputArray.map((input, index) => {
    if (index % 2 === 0) weightOfTeams[0] += input;
    else weightOfTeams[1] += input;
  });

  return weightOfTeams;
}

const inputArrayBai2 = document.querySelector("input#bai2");
const formBai2 = document.querySelector("form#bai2");
const outputSectionBai2 = document.querySelector("span#bai2");

formBai2.onsubmit = (e) => {
  e.preventDefault();
  if (inputArrayBai2.value) {
    let inputNumber = [];
    let charNumbers = inputArrayBai2.value.split(",");
    charNumbers.map((number) => {
      inputNumber.push(Number(number.trim()));
    });
    console.log(inputNumber);

    handleShowOutputBai2(inputNumber);
  } else alert("Chưa nhập input bài 2");
};

const handleShowOutputBai2 = (inputNumber) => {
  let output = alternatingSums(inputNumber);
  outputSectionBai2.innerText = `Output: [${output[0]}, ${output[1]}]`;
};
