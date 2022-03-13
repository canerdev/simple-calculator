const currentOperand = document.querySelector('#currentOperand')
const prevOperand = document.querySelector('#prevOperand')
const keys = document.querySelectorAll('.key')
const clear = document.querySelector('#clear')
const del = document.querySelector('#delete')
const equal = document.querySelector('#equal')

keys.forEach(key => {
    key.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                currentOperand.innerHTML = ''
                prevOperand.innerHTML = ''
                break;
            case '←':
                if(currentOperand.innerHTML) {
                    currentOperand.innerHTML = currentOperand.innerHTML.slice(0, -1)
                }       
                break
            case '=':
                try {
                    prevOperand.innerHTML = currentOperand.innerHTML + '='
                    currentOperand.innerHTML = eval(currentOperand.innerText)
                    // i could't delete the last '=' symbol :(
                } catch {
                    currentOperand.innerHTML = 'Error!'   
                }
            default:
                // only one dot must be allowed but :( ...
                currentOperand.innerHTML += e.target.innerHTML
                break;
        }
    })
})