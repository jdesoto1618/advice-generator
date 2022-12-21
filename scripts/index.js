window.addEventListener("DOMContentLoaded", () => {
  const adviceGenerator = document.querySelector(".advice-generator-button");
  const BASE_URL = "https://api.adviceslip.com/advice";
  const adviceId = document.querySelector(".advice-number");
  const adviceTextElement = document.querySelector(".advice-text");

  const getAdvice = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        adviceId.innerHTML = data.slip.id;
        adviceTextElement.innerHTML = data.slip.advice;
      });
  };

  getAdvice(BASE_URL);

  adviceGenerator.addEventListener("click", () => {
    getAdvice(BASE_URL);
  });
});
