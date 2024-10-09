function checkEvenOdd() {
    const number = document.getElementById('numberInput').value;
    const result = document.getElementById('result');

    if (number !== '') {
        if (!isNaN(number)) {
            if (number % 2 === 0) {
                result.textContent = 'The number is even.';
            } else {
                result.textContent = 'The number is odd.';
            }
        } else {
            result.textContent = 'Please enter a valid number.';
        }
    } else {
        result.textContent = 'Input cannot be empty.';
    }
}

function refresh() {
    const numberInput = document.getElementById('numberInput');
    const result = document.getElementById('result');

    numberInput.value = '';
    result.textContent = '';
}