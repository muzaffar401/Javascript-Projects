        //Generate Prime Numbers
        function prime() {
            const firstnumber = parseInt(document.getElementById("input1").value);
            const secondNumber = parseInt(document.getElementById("input2").value);

            if (firstnumber && secondNumber) {
                for (let i = firstnumber; i <= secondNumber; i++) {
                    let a = 0;

                    for (let j = 2; j < i; j++) {
                        if (i % j == 0) {
                            a = 1;
                            break;
                        }
                    }


                    if (i > 1 && a == 0) {
                        document.querySelector("#print").innerHTML += `<h1 style="text-align: center;">${i}</h1>`

                    }
                }


            } else {
                alert("Please Fill out Every Field");
            }
        }
