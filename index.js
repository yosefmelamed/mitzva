let number = 0;
const num = document.querySelector(".container h3")
const firstBtn = document.querySelector(".one");
const secondBtn = document.querySelector(".two");
firstBtn.addEventListener("click", (event)=>{
    number += 1;
  num.innerText = `You have done ${number} mitzvos`
  })
 
secondBtn.addEventListener("click", (event)=>{
    number -= 1;
  num.innerText = `You have done ${number} mitzvos`
  })
