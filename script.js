/* Key Learnings:
    1. Convert HTMLCollection to Array
    2. eval() function (line:26)
    3. pseudo-class(:hover & :focus) in CSS
    4. attach Script tag before closing </body> tag...DOM manipulation problem
*/

let string = '';
let buttons = document.getElementsByClassName('num');
let input = document.querySelector('input');

let arr = Array.from(buttons);              // Convert HTMLCollection to Array

arr.forEach((button) => {                  // Loop through the array of buttons and add event listeners
    button.addEventListener('click', (e) => {
        //console.log(e.target.innerHTML);
        if(string == 'Syntax Error'){
            if(e.target.innerHTML == 'C'){
                string = '';
                input.value = string;
            }
        }
        else{
            if(e.target.innerHTML == '='){
                try{
                    string = eval(string);
                    input.value = string;
                }
                catch(err){
                    string  = 'Syntax Error';
                    input.value = string;
                }       
            }
            else if(e.target.innerHTML == 'C'){
                string = '';
                input.value = string;
            }
            else if(e.target.innerHTML == '+/-'){
                console.log(Number(string));
                if(Number(string)>0){
                    string = '-'+string;
                    input.value = string;
                }
                else{
                    string = string.replace('-','')
                    input.value = string;
                }
            }
            else{
                if(e.target.innerHTML == 'x'){
                  string = string + '*'; 
                }
                else{
                  string = string + e.target.innerHTML;  
                }
               input.value = string;
            }
        }   
    });
});

