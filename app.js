var screen = document.getElementById('screen');
var operaters = ['+', '-', '*', '/', '%'];
var operaters1 = ['+', '-', '*', '/', '%', '('];
var error = document.getElementById('error')

function getValue(val) {
    var lastIndex = screen.value.length - 1;
    var lastChart = screen.value[lastIndex]
    // console.log(lastIndex);
    console.log(operaters.includes(lastChart));

    if (operaters.includes(val) && operaters.includes(lastChart)) {
        if (val !== lastChart) {
            var temp = screen.value.split('');
            temp.splice(lastIndex, 1, val);
            screen.value = temp.join('');
        }
    }
    else {
        screen.value += val
    }
}

function sum() {
    lastChart = screen.value[screen.value.length - 1]
    if (operaters1.includes(lastChart)) {
        error.innerHTML = 'Invalaid Experssion';
    }
    else {
        var answer = eval(screen.value)
        screen.value = answer
        error.innerHTML = '';

        if (answer == undefined) {
            screen.value = ''
        }

    }

}


function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}        