// Analog Clock Variables 
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const greeting = document.querySelector('.greeting');

// Digital Clock Variables 
const timeInHours = document.querySelector('.time-hours');
const timeInMinutes = document.querySelector('.time-minutes');
const timeInSeconds = document.querySelector('.time-seconds');

// Morning, Evening, Afternoon, Night Message 
function setGreeting(x, y) {

    if (x > 16 && x < 11 && y == 'am') {
        greeting.innerHTML = `good morning!`;
        document.body.style.backgroundColor = "#FFCC33";
    }

    else if (x > 12 && x < 17 && y == 'pm') {
        greeting.innerHTML = `good afternoon!`;
        document.body.style.backgroundColor = "#FFE484";
    }

    else if (x > 17 && x < 20 && y == 'pm'){
        greeting.innerHTML = `good evening!`;     
        document.body.style.backgroundColor = "#e2e8f0";
    }
    
    else {
        greeting.innerHTML = `good night!`;     
        document.body.style.backgroundColor = "#000";
    }
}

//Analog Clock Functioning
function setDate() {
    const now = new Date();
    const hour = now.getHours();
    let mins = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hour >= 12 ? 'pm' : 'am';
    
    setGreeting(hour, ampm);

    if (mins < 10)
      mins = '0' + mins; 
    
    if (seconds < 10)
        seconds = '0' + seconds;
    
    const hourDegrees = ((hour/ 12) * 360) + 90;
    const minsDegrees = ((mins/ 60) * 360) + 90;
    const secondDegrees = ((seconds / 60) * 360) + 90;

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    // Display Time 
    timeInHours.innerHTML = `${hour}<span class="text-xl p-1">hrs</span>:`;
    timeInMinutes.innerHTML = `${mins}<span class="text-xl p-1">min</span>:`;
    timeInSeconds.innerHTML = `${seconds}<span class="text-xl p-1">sec</span>`;

    document.title = `${hour}:${mins}:${seconds} Clock!`;
}

setInterval(setDate, 1000);