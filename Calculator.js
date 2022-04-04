let display = document.getElementById('display');
let results = document.getElementById('last-result');
let buttons = Array.from(document.getElementsByClassName('grid-button'));
let refresh = document.getElementById('refresh-results');

var resultsArray = []; 
resultsArray.length = 17;

function checkErrors() {
  if(display.innerText === 'Error' || display.innerText === 'undefined' || display.innerText === 'NaN'){
    display.innerText = '';
    return true;
  } 
  else return false;
}

buttons.map( button => {
  button.addEventListener('click', (e) => {

    switch(e.target.innerText){ 
        case 'AC':
            display.innerText = '';
        break;

        case '←':
          if(checkErrors() === true ){
            return null;}
              else display.innerText = display.innerText.slice(0, -1);             
        break;

        case '=':
            try{
              if(checkErrors() === true ){
                return null;
              }
              else
                checkErrors();
                display.innerText = eval(display.innerText);  
                resultsArray.unshift(display.innerText);
                results.innerText += resultsArray[0] + '\n'; 
                  
                  
            } catch{
            display.innerText = 'Error'
            }
        break;

      default:
          display.innerText += e.target.innerText;

          if(display.innerText.length>=30){
              display.innerText = '';
          }
    }
  });
});

refresh.addEventListener('click', (e) =>{
  results.innerText = '';
  resultsArray.splice(0,resultsArray.length);
  console.log(resultsArray);
})