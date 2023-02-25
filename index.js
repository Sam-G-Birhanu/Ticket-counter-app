let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function getVal() {
    count = parseInt(document.querySelector('input').value);
}
function increment() {
    count += 1
//     countEl.textContent = count
}
function save() {
    let countStr = count + " - "
//     saveEl.textContent += countStr
    saveEl.textContent += count

//     countEl.textContent = 0
    count = 0
}
