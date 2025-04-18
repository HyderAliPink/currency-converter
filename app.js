// const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${result}`;
const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`;
fetch(url)
  .then((Response) => {
    if (!Response.ok) {
      console.log(Response);
      throw new Error("respone was not ok");
    }
    return Response.json();
  })
  .then((Response) => {
    console.log(Response);
    const CurrencyList = Response;
    for (const code in CurrencyList) {
      console.log(code);
      const CurrencyList = code;
      const option = document.createElement("option");
      option.value = code;
      option.textContent = `${code}`;
      fromCurrency.appendChild(option);
    }
    for (const code in CurrencyList) {
      console.log(code);
      const currecy = CurrencyList[code];
      const option = document.createElement("option");
      option.value = code;
      option.textContent = `${code}`;
      toCurrency.appendChild(option);
    }
  })
  .catch((Error) => {
    console.error(Error);
  });
