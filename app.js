let selectOne= document.getElementById('fromCurrency')
let selectTwo= document.getElementById('toCurrency')
  let getData = async ()=>{
    try{
    const res= await axios("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
    return res
    }
    catch(err){
        throw err;
} 
}
getData().then((res)=>{
  currency=res.data
  for (const key in currency) {
    selectOne.innerHTML+=`<option value="${key}">${currency[key]}</option>`
    selectTwo.innerHTML+=`<option value="${key}">${currency[key]}</option>`
    
  }
})
