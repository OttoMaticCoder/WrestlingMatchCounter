// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl1 = document.getElementById("save-el1")
let saveEl2 = document.getElementById("save-el2")


let wrestler1El = document.getElementById("wrestler1")
let wrestler2El = document.getElementById("wrestler2")

let wrestlercount1 = 0
let wrestlercount2 = 0

let teamScoreEl1 = document.getElementById("team-score1")
let teamScoreEl2 = document.getElementById("team-score2")

let matchFinal = document.getElementById("match-final")

let teamScore1 = 0
let teamScore2 = 0

let resetMatchScores = matchFinal.textContent += matchScore
    wrestler1El.textContent = 0
    wrestler2El.textContent = 0
    wrestlercount1 = 0
    wrestlercount2 = 0

// let matchScore = " { " + wrestlercount1 + " - " + wrestlercount2 +" } "

function pin(target) {
    if (target === 'wrestler1') {
        teamScore1 += 6
        teamScoreEl1.textContent = teamScore1
    } else if(target === 'wrestler2') {
        teamScore2 += 6
        teamScoreEl2.textContent = teamScore2
    }

    let matchScore = "{ " + wrestlercount1 + " - " + wrestlercount2
        if (target === 'wrestler1') {
            matchScore += " | P W1} "
        } else if (target === 'wrestler2') {
            matchScore += " | P W2} "
        }

    matchFinal.textContent += matchScore
    wrestler1El.textContent = 0
    wrestler2El.textContent = 0
    wrestlercount1 = 0
    wrestlercount2 = 0
}

function saveMatch() { 

    if (wrestlercount1 >= wrestlercount2 + 15) {
        teamScore1 += 5
        teamScoreEl1.textContent = teamScore1
    } else if (wrestlercount1 >= wrestlercount2 + 8) {
        teamScore1 += 4
        teamScoreEl1.textContent = teamScore1 
    } else if (wrestlercount1 > wrestlercount2) {
        teamScore1 += 3
        teamScoreEl1.textContent = teamScore1

    } else if (wrestlercount2 >= wrestlercount1 + 15) {
        teamScore2 += 5
        teamScoreEl2.textContent = teamScore2
    } else if (wrestlercount2 >= wrestlercount1 + 8) {
        teamScore2 += 4
        teamScoreEl2.textContent = teamScore2
    } else if (wrestlercount2 > wrestlercount1) {
        teamScore2 += 3
        teamScoreEl2.textContent = teamScore2
    }

    let matchScore = "{ " + wrestlercount1 + " - " + wrestlercount2 +" } "
    let newEntry = document.createElement("p")
    newEntry.textContent = matchScore
    matchFinal.appendChild(newEntry)
    
    // matchFinal.textContent += matchScore
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

function increment(target, value) {
    if (target === "wrestler1") {
        wrestlercount1 += value
        wrestler1El.textContent = wrestlercount1
    } else if (target === "wrestler2") {
        wrestlercount2 += value
        wrestler2El.textContent = wrestlercount2

    }
} 
