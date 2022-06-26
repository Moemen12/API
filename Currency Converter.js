let amount = document.querySelector('input');
let submitButton = document.querySelector('button');
let selectBox1 = document.getElementById('cars');
let selectBox2 = document.getElementById('cars1');
let bold = document.querySelector('b');
let howMuch;
let value;
let value2;

submitButton.addEventListener('click', function () {
    value = selectBox1.options[selectBox1.selectedIndex].value;
    value2= selectBox2.options[selectBox2.selectedIndex].value;

    function convertor() {
        var myHeaders = new Headers();
    myHeaders.append("apikey", "PVtVM8X5G5SXhAIrvmOwYrqT9UmbXmPQ");
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
        };
        
    fetch(`https://api.apilayer.com/fixer/convert?to=${value2}&from=${value}&amount=${amount.value}`, requestOptions)
      .then(response => response.json()).then(response => wordDetails(response))
      .catch(error => console.log('error', error));
    }
    
    convertor();
   
})

function wordDetails(info) {
   howMuch = info.result;
    createNewInfo();
  
  }
function createNewInfo() {
    bold.innerText = `${amount.value} ${value} = ${howMuch} ${value2} `;
}
