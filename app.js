let selectOne = document.getElementById("fromCurrency");
let selectTwo = document.getElementById("toCurrency");
let resultBox = document.getElementById("resultBox");
let userInput = document.getElementById("input-1");
const marquee = document.getElementById("marquee");

let getData = async () => {
  try {
    const res = await axios(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
    );
    return res;
  } catch (err) {
    throw err;
  }
};

getData().then((res) => {
  let currency = res.data;
  for (const key in currency) {
    selectOne.innerHTML += `<option value="${key}">${currency[key]}</option>`;
    selectTwo.innerHTML += `<option value="${key}">${currency[key]}</option>`;
  }
});

function exchange() {
  let fromCurrency = selectOne.value;
  let toCurrency = selectTwo.value;
  if (userInput.value === "" || userInput.value < 0) {
    resultBox.innerText = "Please enter a valid amount amount.";
  } else {
    axios(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
    ).then((res) => {
      let rate = res.data[fromCurrency][toCurrency];
      let result = userInput.value * rate;
      resultBox.innerText = `${
        userInput.value
      } ${fromCurrency.toUpperCase()} = ${result.toFixed(
        2
      )} ${toCurrency.toUpperCase()}`;
    });
  }
}
async function marqueeText() {
  const response = axios(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`
  ).then((response) => {
    // console.log(response.data.usd);
    for (const key in response.data.usd) {
      // console.log(response.data.usd[key]);
      marquee.innerText += `  ${key.toUpperCase()}  ${String(
        response.data.usd[key]
      ).slice(0, 5)} `;
    }
  });
}

marqueeText();
