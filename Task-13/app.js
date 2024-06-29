function ranbowFunc() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');



    // get colors from input with unique id
    let colors = [
        document.getElementById('color1').value,
        document.getElementById('color2').value,
        document.getElementById('color3').value,
        document.getElementById('color4').value,
        document.getElementById('color5').value
    ];
    //hold colors in different variable name
    let color1 = document.getElementById('color1').value;
    let color2 = document.getElementById('color2').value;
    let color3 = document.getElementById('color3').value;
    let color4 = document.getElementById('color4').value;
    let color5 = document.getElementById('color5').value;

    //extra validations
    if (color1 === '#000000') {
        document.getElementById("span1").innerText = "Please Pick This Color!"
    }
    else {
        document.getElementById("span1").innerText = "";
    }
    if (color2 === '#000000') {
        document.getElementById("span2").innerText = "Please Pick This Color!"
    }
    else {
        document.getElementById("span2").innerText = "";
    }
    if (color3 === '#000000') {
        document.getElementById("span3").innerText = "Please Pick This Color!"
    }
    else {
        document.getElementById("span3").innerText = "";
    }
    if (color4 === '#000000') {
        document.getElementById("span4").innerText = "Please Pick This Color!"
    }
    else {
        document.getElementById("span4").innerText = "";
    }
    if (color5 === '#000000') {
        document.getElementById("span5").innerText = "Please Pick This Color!"
    }
    else {
        document.getElementById("span5").innerText = "";
    }


    // validate colors
    for (let i = 0; i < colors.length; i++) {
        if (colors[i] === '#000000') {
            document.getElementById("span" + (i + 1)).innerText = "Please Pick This Color!";
            return;
        }
    }
    if (color1 != '#000000' && color2 != '#000000' && color3 != '#000000' && color4 != '#000000' && color5 != '#000000') {

        // draw rainbow
        let centerX = canvas.width / 2;
        let centerY = canvas.height;
        let radius = canvas.height;
        context.clearRect(0, 0, canvas.width, canvas.height);

        let angleStep = Math.PI / (colors.length - 1);
        for (let i = 0; i < colors.length; i++) {
            context.beginPath();
            context.arc(centerX, centerY, radius - i * 20, Math.PI, 0, false);
            context.fillStyle = colors[i];
            context.fill();
            context.closePath();
        }
    }
}