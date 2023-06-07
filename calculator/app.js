let calString = "";
let calButton = document.querySelectorAll('button');
let InputCalculation = document.getElementById('input')

let btnArray = Array.from(calButton);

btnArray.forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == 'Enter') {
            calString = calString.replace('x', '*');
            calString = calString.replace('÷', ' /');
            calString = eval(calString);
            InputCalculation.value = calString

        } else if (e.target.innerHTML == 'clear') {
            calString = ''
            InputCalculation.value = calString
        }

        else if (e.target.innerHTML == 'del') {
            calString = calString.slice(0, -1)
            InputCalculation.value = calString
        }
        else if (e.target.innerHTML == '√') {
            const number = parseFloat(calString);
            if (!isNaN(number)) {
                calString = Math.sqrt(number).toString();
                InputCalculation.value = calString;
            }
        }

        else {
            calString = calString + e.target.innerHTML;
            InputCalculation.value = calString
        }

    })
})
