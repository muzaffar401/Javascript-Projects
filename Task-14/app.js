
function generateCheckerBoard() {
    let rows = parseInt(document.getElementById('rows').value);
    let columns = parseInt(document.getElementById('columns').value);
    let lightColor = document.getElementById('lightColor').value;
    let darkColor = document.getElementById('darkColor').value;
    //if row input is blank
    if (!rows) {
        document.getElementById("span1").innerText = "Please Fill Out This Field"
        document.getElementById("span1").style.color = "red";
    }
    //if row less than zero
    else if (rows < 0) {
        document.getElementById("span1").innerText = "Negative Numbers Are Not Allowed"
        document.getElementById("span1").style.color = "red";
    }
    else {
        document.getElementById("span1").innerText = "";
    }
    //if column input is blank
    if (!columns) {
        document.getElementById("span2").innerText = "Please Fill Out This Field"
        document.getElementById("span2").style.color = "red";
    }
    //if column less than zero
    else if (columns < 0) {
        document.getElementById("span2").innerText = "Negative Numbers Are Not Allowed"
        document.getElementById("span2").style.color = "red";
    }
    else {
        document.getElementById("span2").innerText = "";
    }
    //if row and column greater than 0 then print
    if (rows > 0 && columns > 0) {
        //second if not a light color
        if (!isLightColor(lightColor) || !isDarkColor(darkColor)) {
            if (!isLightColor(lightColor)) {
                document.getElementById("span3").innerText = "Please choose a lighter color for the light squares";
                document.getElementById("span3").style.color = "red";
            }
            else {
                document.getElementById("span3").innerText = "";
            }
            //third if not a dark color
            if (!isDarkColor(darkColor)) {
                document.getElementById("span4").innerText = "Please choose a Dark color for the Dark squares";
                document.getElementById("span4").style.color = "red";
            }
            else {
                document.getElementById("span4").innerText = "";
            }
            return;
        }
        document.getElementById("span3").innerText = "";
        document.getElementById("span4").innerText = "";

        let checkerboardHTML = '';
        for (let i = 0; i < rows; i++) {
            checkerboardHTML += '<div class="row">';
            for (let j = 0; j < columns; j++) {
                let color = (i + j) % 2 === 0 ? lightColor : darkColor;
                checkerboardHTML += '<div class="square" style="background-color: ' + color + ';"></div>';
            }
            checkerboardHTML += '</div>';
        }

        document.getElementById('print').innerHTML = '<div class="board">' + checkerboardHTML + '</div>';
    }
}

// function to check if a color is light
function isLightColor(color) {
    // Convert color to RGB
    let rgb = hexToRgb(color);
    // Calculate luminance
    let luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    // Return true if luminance is greater than 0.5 (considered light)
    return luminance > 0.5;
}

// function to check if a color is dark
function isDarkColor(color) {
    // Convert color to RGB
    let rgb = hexToRgb(color);
    // Calculate luminance
    let luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    // Return true if luminance is less than 0.5 (considered dark)
    return luminance < 0.5;
}

// function to convert hex color to RGB
function hexToRgb(hex) {
    let bigint = parseInt(hex.substring(1), 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return { r: r, g: g, b: b };
}
