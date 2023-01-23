let homeScore = 0

document.getElementById("home-score").textContent = homeScore

function addOne() {
    homeScore += 1;
    document.getElementById("home-score").textContent = homeScore 
}

function addTwo(){
    homeScore += 2;
    document.getElementById("home-score").textContent = homeScore
}

function addThree(){
    homeScore += 3;
    document.getElementById("home-score").textContent = homeScore
}



let guestScore = 0
document.getElementById("guest-score").textContent = guestScore

function addOneGuest() {
    guestScore += 1;
    document.getElementById("guest-score").textContent = guestScore
}

function addTwoGuest(){
    guestScore += 2;
    document.getElementById("guest-score").textContent = guestScore
}

function addThreeGuest(){
    guestScore += 3;
    document.getElementById("guest-score").textContent = guestScore
}

function reset(){
    document.getElementById("home-score").textContent = 0
    document.getElementById("guest-score").textContent = 0
}

function startClock()  