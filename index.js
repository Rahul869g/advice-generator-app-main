const numAdvice = document.getElementById("advice-num");
const elText = document.getElementById("advice-text");
const elBtn = document.getElementById("dice-btn");

const generateAdvice = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json"
      }
    };

    const res = await fetch("https://api.adviceslip.com/advice", setHeader);
    const data = await res.json();
    elText.innerText = data.slip.advice;
    numAdvice.innerText = data.slip.id;
  } catch (err) {
    console.log(err);
  }
};

elBtn.addEventListener("click", generateAdvice);
generateAdvice();
