document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const form = document.getElementById('form');
    const colorPickersContainer = document.getElementById('colorPickers');

    // Function to draw circles
    function drawCircles(count, colors) {
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const circleSpacing = Math.min(canvasWidth, canvasHeight) / (count + 1); // Adjusted spacing

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        for (let i = 1; i <= count; i++) { // Start at 1 to align circles properly
            ctx.beginPath();
            ctx.arc(i * circleSpacing, i * circleSpacing, 50, 0, Math.PI * 2);
            ctx.fillStyle = colors[i - 1] || '#000000'; // Default color is black if no color is selected
            ctx.fill();
            ctx.closePath();
        }
    }

    // Dynamically create color pickers based on circle count
    function createColorPickers(count) {
        colorPickersContainer.innerHTML = ''; // Clear existing pickers

        const numColorPickers = Math.min(count, 5); // Limit to 5 color pickers

        for (let i = 0; i < numColorPickers; i++) {
            const colorPicker = document.createElement('input');
            colorPicker.type = 'color';
            colorPicker.value = '#000000'; // Default color is black
            colorPicker.classList.add('color-picker');
            colorPickersContainer.appendChild(colorPicker);
        }
    }

    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const circleCount = parseInt(document.getElementById('inp').value);
        const colorPickers = colorPickersContainer.querySelectorAll('.color-picker');

        if (circleCount === 0) {
            document.getElementById("span1").innerText = "Please Fill Out This Field!"
            return;
        } else if (circleCount > 5) {
            document.getElementById("span1").innerText = "At least 5 Circles You Can Draw!";
            return;
        } else if (circleCount > colorPickers.length) {
            document.getElementById("span1").innerText = "Please Choose Colors for All Circles!";
            return;
        }

        document.getElementById("span1").innerText = "";
        const colors = [];
        colorPickers.forEach(picker => colors.push(picker.value));
        drawCircles(circleCount, colors);
    });

    // Event listener for circle count input change
    document.getElementById('inp').addEventListener('input', function () {
        const count = parseInt(this.value);
        createColorPickers(count);
    });

    // Initial setup
    createColorPickers(0);
});    