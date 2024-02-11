var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;

function timer() {
    // Set the target date and time
    var targetDate = new Date(2022, 6, 29, 19, 0, 0); // July is 6th month (0-indexed), 19:00 is 7 PM

    // Get the current date and time
    var currentDate = new Date();

    // Calculate the difference between the target date and the current date
    var t = targetDate - currentDate;

    // Check if the target date has passed
    if (t < 0) {
        // If the target date has passed, display 0 for all values
        document.getElementById("d").innerHTML = "00";
        document.getElementById("h").innerHTML = "00";
        document.getElementById("m").innerHTML = "00";
        document.getElementById("s").innerHTML = "00";
        return; // Exit the function
    }

    // Calculate the remaining days, hours, minutes, and seconds
    var d = Math.floor(t / (1000 * 60 * 60 * 24));
    var h = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((t % (1000 * 60)) / 1000);

    // Format hours, minutes, and seconds with leading zeros if needed
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Display the remaining days, hours, minutes, and seconds
    document.getElementById("d").innerHTML = d;
    document.getElementById("h").innerHTML = h;
    document.getElementById("m").innerHTML = m;
    document.getElementById("s").innerHTML = s;

    // Update the timer every second
    setTimeout(timer, 1000);
}

// Call the timer function to start the countdown
timer();


function fadein(){
	if(val < 1){
		val += 0.025;
		dv.style.opacity = val;
	}
	else{
		clearInterval(fadeinInterval);
		if(ok == 2){
			ok += 1;
		}
	}
}

var fadeInterval;
var fadeinInterval;

timer();
setInterval(timer, 1000);
fadeInterval = setInterval(function(){
	if(ok == 2){
		clearInterval(fadeInterval);
		fadeinInterval = setInterval(fadein, 50);
	}
}, 50)