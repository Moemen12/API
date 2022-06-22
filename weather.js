let cityName = document.querySelector('input');
let searchButton = document.querySelector('button');
let container = document.querySelector('.weatherHead');



  
searchButton.addEventListener('click', () => {

  var myrequest = new XMLHttpRequest();
  myrequest.open('GET', `https://api.weatherapi.com/v1/current.json?key=df54bc7bb4234f55af7234446222006&q=${cityName.value}&aqi=no`, true);
  myrequest.send();
  myrequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
       
      var myJsObj = JSON.parse(this.responseText);
      var weatherStatus = myJsObj.current.condition.text;
      var Temp = myJsObj.current.temp_c;
      var icon = myJsObj.current.condition.icon;
      var humidity = myJsObj.current.humidity;
      var capital = myJsObj.location.name;
      var country = myJsObj.location.country;
      var feelslike_c = myJsObj.current.feelslike_c;
     

      if (cityName.value !== '') {

        container.remove();
        let div = document.createElement('div');
        div.className = 'weatherResult';
        let span = document.createElement('span');
        span.className = 'head';
        let firstText = document.createTextNode('Weather App');
        span.appendChild(firstText);
        let img = document.createElement('img');
        img.setAttribute('src', `${icon}`);
        img.style.cssText = "width=80px";
        let h1 = document.createElement('h1');
        let txt = document.createTextNode(`${Temp} C`);
        h1.appendChild(txt);
        let hr = document.createElement('hr');
        let p1 = document.createElement('p');
        let secondTxt = document.createTextNode(`${weatherStatus}`);
        let p2 = document.createElement('p');
        let thirdTxt = document.createTextNode(`${capital},${country}`);
        let div1 = document.createElement('div');
        div1.className = 'all';
        let span1 = document.createElement('span');
        let span2 = document.createElement('span');
       
        //------------------------------
        p1.appendChild(secondTxt);
        p2.appendChild(thirdTxt);
        div.appendChild(span);
        div.appendChild(hr);
        div.appendChild(img);
        div.appendChild(h1);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(div1);
        div.appendChild(span1);
        div.appendChild(span2);
      
        document.body.appendChild(div);
        div1.innerHTML = `<span class="temperature">${feelslike_c} C <br>Feels like</span>
      <span class="humidity">${humidity}<br>Humidity</span>`;
         
      
    
      }
  
    }
  }
      
  
});
      
 












