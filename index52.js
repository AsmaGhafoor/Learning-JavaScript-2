console.log("Index 52");

// You have to crate an alarm clock in javascript (Use your creativity)
// Allow user to set alarm for a certain time

const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);
var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

// Function for play the ring tone
function ringBell() {
    Audio.play();
}

function setAlarm(e) {
    e.preventDefault(); // Page reload nhi hoga
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}`);
    now = new Date();

    // difference of mili seconds
    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if (timeToAlarm >= 0) {
        setTimeout(() => {
            console.log("Ringing Bell");
            ringBell();
        }, timeToAlarm);
    }

}
