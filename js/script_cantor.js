let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.3542;
let rateGBP = 5.0198;
let rateUSD = 3.975;
let rateCHF = 4.5175;
let rateCZK = 0.179;
let rateNOK = 0.3727;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = +amountElement.value;
  let currency = currencyElement.value;
  let result;

  switch (currency) {
    case "EUR":
      result = amount / rateEUR;
      break;
    case "GBP":
      result = amount / rateGBP;
      break;
    case "USD":
      result = amount / rateUSD;
      break;
    case "CHF":
      result = amount / rateCHF;
      break;
    case "CZK":
      result = amount / rateCZK;
      break;
    case "NOK":
      result = amount / rateNOK;
      break;
  }

  resultElement.innerHTML = `${amount.toFixed(
    2
  )} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
});
