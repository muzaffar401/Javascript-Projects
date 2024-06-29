function startCountdown() {
    // Get the input element and error message element
    var datetimeInput = document.getElementById("datetime");
    var errorMsg = document.getElementById("error-msg");

    // Check if datetime input is empty or not in correct format
    if (!datetimeInput.value) {
        // Display error message if input is empty
        errorMsg.textContent = "Please select a valid date and time.";
        return; // Exit function if input is invalid
    }

    // Convert input value to target date in milliseconds
    var targetDate = new Date(datetimeInput.value).getTime();


    // Update timer every second using setInterval
    var x = setInterval(function () {
        // Get the current time
        var now = new Date().getTime();
        // Calculate the remaining time
        var distance = targetDate - now;

        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the remaining time in the timer element
        document.getElementById("timer").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // Check if the countdown has expired
        if (distance < 0) {
            // Stop the timer
            clearInterval(x);
            // Display "EXPIRED" message in the timer element
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000); // Update timer every second

    // Clear error message when countdown starts
    errorMsg.textContent = "";
}
