// Analog Clock Variables 
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const sound = document.querySelector('.tick_sound');
const hourSound = document.querySelector('.hour_sound');
const greeting = document.querySelector('.greeting');

// Digital Clock Variables
const timeInHours = document.querySelector('.time-hours');
const timeInMinutes = document.querySelector('.time-minutes');
const timeInSeconds = document.querySelector('.time-seconds');

// Facts About Time 

const facts = ['The leap year was invented by Julius Caesar in 46 BC.',
        'The longest possible eclipse of the sun is 7.31 minutes.',
        'The first modern clock was created by Peter Henle in around 1511.',
        'On Mercury, a day is two years long.',
        'One gigayear is equal to 1,000,000,000,000 years.',
        'Until the 1800s, every village lived in its own little time zone, with clocks synchronized to the local solar noon.',
        'A time period feels longer if it’s full of new impressions.',
        'Time moves too quickly when we do the same things every day.',
        'Planck time is the smallest standard of the scientific measurement of time.',
        'According to Einstein, the distinction between past and present and future is only an illusion, however persistent.',
        'The strontium atomic clock is the most accurate clock ever built. It’s accurate to within a second over 15 billion years.',
        'Despite what we’ve been taught, a day isn’t a full 24 hours. It actually takes 23 hours, 56 minutes, and 4.2 seconds for the earth to rotate once.',
        'There are 31,556,926 seconds in a year.',
        'The sun is estimated to be around five billion years old. Earth is slightly younger than that at about 4,540,000,000 years old.',
        'In the Roman calendar, winter was not assigned to any month. This made the entire year 304 days long, with 61 days unaccounted for in the winter.',
        'A Julian year is 365 days and 12 months, with an extra day added to February once every four years.',
        'In 2011, the Population Reference Bureau estimated that 250 babies are born around the world every minute.'];        

const fact = document.querySelector('.fact');        

// Morning, Evening, Afternoon, Night Message 
function setGreeting(x, y) {

    if (x >= 16 && x <= 11 && y == 'am') {
        greeting.innerHTML = `good morning! 🌅`;
        document.body.style.backgroundColor = "#FFCC33";
    }

    else if (x >= 12 && x < 17 && y == 'pm') {
        greeting.innerHTML = `good afternoon! 🌞`;
        document.body.style.backgroundColor = "#FFE484";
    }

    else if (x >= 17 && x <= 20 && y == 'pm'){
        greeting.innerHTML = `good evening! 🌇`;     
        document.body.style.backgroundColor = "#e2e8f0";
    }
    
    else {
        greeting.innerHTML = `good night! 🌃`;     
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

    // Clock Hour Sound 
    if (mins === 0 && seconds === 0)
        hourSound.play();
        
    // Clock Ticking Sound 
    sound.currentTime = 0;
    sound.play();

    //Remove Jank when seconds reaches 60
    if (seconds === 0) {
        hourHand.style.transition = "none";
        minuteHand.style.transition = "none";
        secondHand.style.transition = "none";    
    }

    // Set Greeting Function Call     
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

    document.title = `${hour}:${mins}:${seconds} 🕒`;
}

function generateFacts() {
    let randomFact = Math.floor(Math.random() * facts.length);
    fact.innerHTML = facts[randomFact];
}

generateFacts();
setInterval(setDate, 1000);
setInterval(generateFacts, 10000);