function startCountdown() {
    var datetimeInput = document.getElementById("datetime");
    var errorMsg = document.getElementById("error-msg");

    // Check if datetime input is empty or not in correct format
    if (!datetimeInput.value) {
        errorMsg.textContent = "Please select a valid date and time.";
        return;
    }

    var targetDate = new Date(datetimeInput.value).getTime();

    if (isNaN(targetDate)) {
        errorMsg.textContent = "Invalid date and time format.";
        return;
    }

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = targetDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update digital timer
        var digitalTimerElement = document.getElementById("digital-timer");
        digitalTimerElement.innerHTML = `<span>${days < 10 ? '0' + days : days}</span> :
                                        <span>${hours < 10 ? '0' + hours : hours}</span> :
                                        <span>${minutes < 10 ? '0' + minutes : minutes}</span> :
                                        <span>${seconds < 10 ? '0' + seconds : seconds}</span>`;

        var timerElement = document.getElementById("timer");
        var progress = (distance / (24 * 60 * 60 * 1000)) * 100; // Calculate progress in percentage

        // Apply styles for circular progress
        timerElement.style.backgroundImage = `conic-gradient(#007bff ${100 - progress}%, #f0f0f0 0)`;

        if (distance < 0) {
            clearInterval(x);
            digitalTimerElement.innerHTML = "EXPIRED";
        }
    }, 1000);

    // Clear error message when countdown starts
    errorMsg.textContent = "";
}