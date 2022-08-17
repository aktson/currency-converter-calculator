const swapBtn = document.querySelector(".swap-button");
const selectOne = document.querySelector(".select-one");
const selectTwo = document.querySelector(".select-two");
const amountOne = document.querySelector(".amount-one");
const amountTwo = document.querySelector(".amount-two");
const rateAmount = document.querySelector(".rate");

selectOne.addEventListener("change", getRates);
selectTwo.addEventListener("change", getRates);
amountOne.addEventListener("input", getRates);
amountTwo.addEventListener("input", getRates);
swapBtn.addEventListener("click", swapPlace);




//swap places between selects
function swapPlace() {
  const temp = selectOne.value;
  selectOne.value = selectTwo.value;
  selectTwo.value = temp;
  getRates();
}

//fetch exchange rates
function getRates() {
  const selectOneValue = selectOne.value;
  const selectTwoValue = selectTwo.value;
  console.log(selectOneValue, selectTwoValue);


  fetch(`https://v6.exchangerate-api.com/v6/4bfbe7556da5d07eb1f07361/latest/${selectOneValue}`)
    .then(res => res.json())
    .then(data => {

      const rate = data.conversion_rates[selectTwoValue];

      rateAmount.innerHTML = `1 ${selectOneValue} = ${rate} ${selectTwoValue}`;

      amountTwo.value = (amountOne.value * rate).toFixed(3);
      console.log(rate);
    })


}
