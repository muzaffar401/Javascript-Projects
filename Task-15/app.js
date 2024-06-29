document.getElementById("drawing-form").addEventListener("submit", function (event) {
    event.preventDefault();
    drawName();
});

function drawName() {
    let empty = document.getElementById("font-style").value; // Get the value of the font style select
    let input = document.getElementById("name").value.trim(); // Get the name input value

    // Regular expression to match only letters
    let lettersOnly = /^[a-zA-Z\s]+$/;
    //check if the input field is blank
    if (input === "") {
        document.getElementById("span2").innerText = "Please Fill Out This Field!";
        document.getElementById("span2").style.color = "red";
        document.getElementById("span1").innerText = "";
        return false;
    } else if (!input.match(lettersOnly)) { // Check if the name contains only letters
        document.getElementById("span2").innerText = "Only Alphabets are Allowed";
        document.getElementById("span2").style.color = "red";
        document.getElementById("span1").innerText = "";
        return false;
    } else if (empty === "") { // Check if the font style is selected
        document.getElementById("span2").innerText = "";
        document.getElementById("span1").innerText = "Please Select Font Style"
        document.getElementById("span1").style.color = "red";
    } else {
        document.getElementById("span2").innerText = "";
        document.getElementById("span1").innerText = "";
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let name = input; // Use the validated name input
        let fontStyle = document.getElementById("font-style").value;
        let color = document.getElementById("color").value;

        ctx.font = "30px " + fontStyle;
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Center the text horizontally and vertically
        let x = canvas.width / 2;
        let y = canvas.height / 2;
        ctx.fillText(name, x, y);
    }
}
