// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment1() {
    count += 1
    countEl.textContent = count
}

function increment2() {
    count += 2
    countEl.textContent = count
}

function increment3() {
    count += 3
    countEl.textContent = count
}

function increment4() {
    count += 4
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}

function reset() {
    let countReset = count * 0
    count = countReset
    countEl.textContent = count

}