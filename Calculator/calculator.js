const currentInput = document.querySelector('.currentInput');
const answerScreen = document.querySelector('.answerScreen');
const buttons = document.querySelectorAll('button');
const eraseBtn = document.querySelector('#erase');
const clearBtn = document.querySelector('#clear');
const evaluate = document.querySelector('#evaluate');
let realTimeScreenValue = [];

clearBtn.addEventListener("click", () => {
    realTimeScreenValue = [];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = ' rgba(150, 150, 150, 0.87) ';
})

buttons.forEach((btn) => {

    btn.addEventListener("click", () => {
        if (!btn.id.match('erase')) {
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');
           
        if (btn.classList.contains('num_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }

        // When erase button is clicked
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        // When clicked button is evaluate button
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        // To prevent undefined error in screen
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        }
    })
    })
