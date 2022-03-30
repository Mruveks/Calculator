let dislpay = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('grid-button'));

buttons.map( button => {
  button.addEventListener('click', (e) => {

    switch(e.target.innerText){ 
        case 'AC':
            dislpay.innerText = '';
        break;

        case '←':
            if(display.innerText){
              display.innerText = display.innerText.slice(0, -1); 
            }
        break;

        case '=':
            try{
            if(display.innerText === 'Error'){
                display.innerText = '';
            }
            else
                dislpay.innerText = eval(display.innerText); 
            } catch{
            display.innerText = 'Error'
            }
        break;

      default:
          display.innerText += e.target.innerText;

          if(innerText.length>=30){
              display.innerText = '';
          }
    }
  });
});