let screen = document.getElementById("display")
let clear = document.getElementById("clear")
let btns = document.querySelectorAll(".btn")
let equal = document.getElementById("equals")
    
equal.addEventListener('click', function() {
    let valu2 = screen.innerHTML.replace(/^0+/, '')
    screen.innerHTML = eval(valu2)
})

let numbers = []
let ind = 0;
numbers[ind] = ""
let operation = ['+', '-', '*', '/']

for(let i=0; i < btns.length; i++) {
    btns[i].addEventListener('click',() => {
        if(screen.innerHTML.length < 22) {
            let value1 = btns[i].getAttribute('data-num');
            screen.innerHTML = screen.innerHTML.replace(/^0+/, '');
            screen.innerHTML = screen.innerHTML.replace(/[.]+/g, '.')
            if(operation.indexOf(value1) !== -1){
              ind++
              numbers[ind] = "";
              screen.innerHTML += value1;
            } else if(value1 === ".") {
                if(numbers[ind].indexOf(".") === -1) {
                    numbers[ind] += value1
                    screen.innerHTML += value1;
                }
            }
            else {
              numbers[ind]+=value1
              screen.innerHTML += value1
            }
        }
    })
}


clear.addEventListener('click', function() {
    screen.innerHTML = '0'
    numbers = []
    ind = 0;
    numbers[ind] = ""
})

let counter = 0;
let text = "DIGIT LIMIT MET"

function timer() {
    counter++;
    document.getElementById("timer").innerHTML = counter + ' seconds';
}

setInterval(timer, 1000);

function check() {
    if(screen.innerHTML.length > 22) {
        screen.innerHTML = text;
    }
}

setInterval(check, 100);