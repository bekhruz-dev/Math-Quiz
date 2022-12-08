const qesions = document.querySelector(".inputAnswer");

const btn = document.querySelector(".btn");

// const input1 = document.querySelector(".input1").value = a1;
// const input2 = document.querySelector(".input2").value = a2;

let a1 = Math.floor(Math.random() * 10 + 1);
let a2 = Math.floor(Math.random() * 10 + 1);

document.querySelector(".input1").value = a1;
document.querySelector(".input2").value = a2;

let asa = a1 + a2;
console.log(asa);

btn.addEventListener("click", () => {
  const user = document.querySelector(".inputAnswer").value;

  if (user == asa) {
    alert("Well Done! Your Answer is correct!");
  } else {
    alert(`Mistake, correct answer is : ${asa}`);
  }
  console.log(asa);
});

// const jsGame = () => {};
