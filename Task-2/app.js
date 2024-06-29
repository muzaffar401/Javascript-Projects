        //Word counter program
        function counter() {
            //Target input from html
            const str = document.querySelector("#input").value;
            //value assign in object 
            const chars = {}
            //split our string which is given by user
            const arr = str.split(' ');
            // console.log(arr)
            if (str) {
                for (let word of arr) {
                    console.log(word)
                    if (!chars[word]) {
                        chars[word] = 1;
                    } else {
                        chars[word]++;
                    }
                }
                console.log(chars)
                //Target keys from object which is built in method
                Object.keys(chars).forEach(key => {
                    // console.log(key, chars[key]);
                    // print our keys in paragraph
                    document.getElementById("para").innerHTML += key + " : " + chars[key] + "<br>";

                })
            } else {
                alert("please fill the input box")
            }

        }
