// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl1 = document.getElementById("save-el1")
let saveEl2 = document.getElementById("save-el2")


let wrestler1El = document.getElementById("wrestler1")
let wrestler2El = document.getElementById("wrestler2")

let wrestlercount1 = 0
let wrestlercount2 = 0

let teamScore1 = document.getElementById("team-score1")
let teamScore2 = document.getElementById("team-score2")

let matchFinal = document.getElementById("match-final")

let teamCount1 = 0
let teamCount2 = 0

let resetMatchScores =
    wrestler1El.textContent = 0
    wrestler2El.textContent = 0
    wrestlercount1 = 0
    wrestlercount2 = 0

let matchScore = " { " + wrestlercount1 + " - " + wrestlercount2 +" } "

console.log(saveEl)

function pin1() {
    teamCount1 +=6
    teamScore1.textContent = teamCount1

    let matchScore = "{ " + wrestlercount1 + " - " + wrestlercount2 +"| P W1} "
    // matchScore += "| P W1} "
    matchFinal.textContent += matchScore
    wrestler1El.textContent = 0
    wrestler2El.textContent = 0
    wrestlercount1 = 0
    wrestlercount2 = 0
    
}

function pin2() {
    teamCount2 += 6
    teamScore2.textContent = teamCount2

    let matchScore = "{ " + wrestlercount1 + " - " + wrestlercount2 +"| P W2} "
    // matchScore += "| P W2} "
    matchFinal.textContent += matchScore
    wrestler1El.textContent = 0
    wrestler2El.textContent = 0
    wrestlercount1 = 0
    wrestlercount2 = 0
}

function saveMatch() { 

    if (wrestlercount1 >= wrestlercount2 + 15) {
        teamCount1 += 5
        teamScore1.textContent = teamCount1
    } else if (wrestlercount1 >= wrestlercount2 + 8) {
        teamCount1 += 4
        teamScore1.textContent = teamCount1 
    } else if (wrestlercount1 > wrestlercount2) {
        teamCount1 += 3
        teamScore1.textContent = teamCount1

    } else if (wrestlercount2 >= wrestlercount1 + 15) {
        teamCount2 += 5
        teamScore2.textContent = teamCount2
    } else if (wrestlercount2 >= wrestlercount1 + 8) {
        teamCount2 += 4
        teamScore2.textContent = teamCount2
    } else if (wrestlercount2 > wrestlercount1) {
        teamCount2 += 3
        teamScore2.textContent = teamCount2
    }

    let matchScore = "{ " + wrestlercount1 + " - " + wrestlercount2 +" } "
    matchFinal.textContent += matchScore
    wrestler1El.textContent = 0
    wrestler2El.textContent = 0
    wrestlercount1 = 0
    wrestlercount2 = 0

}

function reset(target) {
    if (target === "wrestler1") {
        wrestlercount1 = 0
        wrestler1El.textContent = wrestlercount1
    } else if (target === "wrestler2") {
        wrestlercount2 = 0
        wrestler2El.textContent = wrestlercount2
    }
}

function reset1() {
    let countReset = wrestlercount1 * 0
    wrestlercount1 = countReset
    wrestler1El.textContent = wrestlercount1
}

function reset2() {
    let countReset = wrestlercount2 * 0
    wrestlercount2 = countReset
    wrestler2El.textContent = wrestlercount2
}

function increment(target, value) {
    if (target === "wrestler1") {
        wrestlercount1 += value
        wrestler1El.textContent = wrestlercount1
    } else if (target === "wrestler2") {
        wrestlercount2 += value
        wrestler2El.textContent = wrestlercount2

    }
} 
