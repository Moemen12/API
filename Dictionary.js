let searchInput = document.querySelector('input');
let divOne = document.querySelector('.divOne');
let strangeText;



searchInput.addEventListener('keyup', e => {

  if (e.key === "Enter" && searchInput.value != "") {
    requestApi(searchInput.value);
    
    
  }
})
function requestApi(word) {
  let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  fetch(api).then(response => response.json()).then(response => wordDetails(response));

}

function wordDetails(info) {

  strangeText = info[0].phonetics[1].text;
  textType = info[0].meanings[0].partOfSpeech;
  meaningTxt = info[0].meanings[0].definitions[0].definition;
  example=info[0].meanings[2].definitions[4].example;
  createNewInfo();
  
}

function createNewInfo() {
   divOne.innerHTML = "";
    divOne.className = 'two';
    divOne.innerHTML = `<h4>${searchInput.value}</h4>
      <span class='size'>${textType} ${strangeText}</span><div class='line'></div><div class="line2">Meaning</div>
     <span class='size'>${meaningTxt}</span><div class='line'></div><div class="line2">Example</div>
     <span class='size'>${example}</span><div class='line'></div><div class="line2">Synonyms</div>
     <span class='size'>hsvdgt hctfa</span>`;
     searchInput.value = "";
     
}

