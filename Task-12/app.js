document.addEventListener("DOMContentLoaded", function () {
    let recipeForm = document.getElementById("recipeForm");
    let recipeList = document.getElementById("recipeList");

    // load recipes from localStorage on page load
    loadRecipes();

    // event listener for form submission
    recipeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addRecipe();
    });

    // function to add recipe
    function addRecipe() {
        let recipeName = document.getElementById("recipeName").value;
        let ingredients = document.getElementById("ingredients").value;
        let instructions = document.getElementById("instructions").value;

        //if not recipe name and else if not match with alphabets
        if (!recipeName) {
            document.getElementById("span1").innerText = "Please Fill Out This Field";
            document.getElementById("span1").style.color = "red";
        } else if (!(/^[a-zA-Z\s]+$/.test(recipeName) || recipeName.length == 0)) {
            document.getElementById("span1").innerText = "Only Alphabets are Allowed";
            document.getElementById("span1").style.color = "red";
        } else {
            document.getElementById("span1").innerText = "";
        }
        //if not ingredients 
        if (!ingredients) {
            document.getElementById("span2").innerText = "Please Fill Out This Field";
            document.getElementById("span2").style.color = "red";
        } else {
            document.getElementById("span2").innerText = "";
        }
        //if not instructions
        if (!instructions) {
            document.getElementById("span3").innerText = "Please Fill Out This Field";
            document.getElementById("span3").style.color = "red";
        } else {
            document.getElementById("span3").innerText = "";
        }
        //if all conditions are true then print 
        if (recipeName.match(/^[a-zA-Z\s]+$/) && ingredients && instructions) {
            let recipe = {

                name: recipeName,
                ingredients: ingredients,
                instructions: instructions,
            };


            // Save recipe to 

            if (localStorage.getItem("recipies") == null) {
                localStorage.setItem("recipies", '[]')
            }
            let data = JSON.parse(localStorage.getItem("recipies"));
            // console.log(data)
            data.push(recipe);
            localStorage.setItem("recipies", JSON.stringify(data));
            window.location.assign('index.html')


            // Refresh recipe list
            // loadRecipes();

            // Clear form fields
            recipeForm.reset();
        }
    }

    // function to load recipes from localStorage
    function loadRecipes() {
        let retriveData = JSON.parse(localStorage.getItem("recipies"));
        // console.log(retriveData.length)
        if (retriveData != null) {
            // console.log(retrive)
            // recipeList.innerHTML = "<h2>Recipes</h2>";
            let recipeItem = "";
            for (let items of retriveData) {
                // let recipeItem = document.createElement("div");
                recipeItem += `
          <div class="col-lg-4 mt-3">
          <div class="card">
          <img src="css/images.jfif" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Recipe Name:<br>${items.name}</h5>
            <p class="card-text"><strong>Ingredients:</strong><br>${items.ingredients}</p>
            <p class="card-text"><strong>Instructions:</strong><br>${items.instructions}</p>
            <button class="btn btn-primary" onclick="removeRecipe('${items.name}')">Delete</button>
          </div>
        </div>
        </div>
    `;


            }
            document.querySelector("#recipeList").innerHTML = recipeItem;
        }
    }





});
function removeRecipe(itemsname) {

    let recipes = JSON.parse(localStorage.getItem("recipies"));
    for (let i = 0; i < recipes.length; i++) {
        // console.log(recipes[i].name)
        if (recipes[i].name === itemsname) {
            console.log(recipes[i].name)
            recipes.splice(i, 1);
            localStorage.setItem("recipies", JSON.stringify(recipes));
            window.location.assign('index.html')

            break; // Exit the loop once the recipe is found and removed
        }
    }



}
