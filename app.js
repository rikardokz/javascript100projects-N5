const buttons = document.querySelectorAll(".button");
const count = document.getElementById("count");



buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.classList.contains("lower-count")) {
            count.innerHTML = parseInt(count.innerHTML) - 1;
            updateColor()
        } else if (button.classList.contains("add-count")) {
            count.innerHTML = parseInt(count.innerHTML) + 1;
            updateColor()
        }
    })
})

function updateColor() {
    if(parseInt(count.innerHTML) > 0) {
        count.style.color = 'green';
    } else if(parseInt(count.innerHTML) < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'black';
    }
}
