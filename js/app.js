var input = document.querySelector("#inputTaker");

function enterOddEven() {
    if (input.value % 2 == 0) {
        alert("It is a Even Number");
    } else {
        alert("It is a Odd Number");
    }
}