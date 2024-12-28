// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl1 = document.getElementById("save-el1")
let saveEl2 = document.getElementById("save-el2")

let countEl1 = document.getElementById("count-el1")
let countEl2 = document.getElementById("count-el2")

let count1 = 0
let count2 = 0

console.log(saveEl)

function increment1a() {
    count1 += 1
    countEl1.textContent = count1
}

function increment2a() {
    count1 += 2
    countEl1.textContent = count1
}

function increment3a() {
    count1 += 3
    countEl1.textContent = count1
}

function increment4a() {
    count1 += 4
    countEl1.textContent = count1
}

function increment1b() {
    count2 += 1
    countEl2.textContent = count2
}

function increment2b() {
    count2 += 2
    countEl2.textContent = count2
}

function increment3b() {
    count2 += 3
    countEl2.textContent = count2
}

function increment4b() {
    count2 += 4
    countEl2.textContent = count2
}

function save1() {
    let countStr = count1 + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl1.textContent += countStr
    countEl1.textContent = 0
    count1 = 0
    // console.log(count)
}

function save2() {
    let countStr = count2 + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl2.textContent += countStr
    countEl2.textContent = 0
    count2 = 0
    // console.log(count)
}

function reset1() {
    let countReset = count1 * 0
    count1 = countReset
    countEl1.textContent = count1
}

function reset2() {
    let countReset = count2 * 0
    count2 = countReset
    countEl2.textContent = count2
}