function eligibilityCriteria() {
    // Target Input form html
    let age = parseInt(document.getElementById("inp").value);

    // Check Input Validation 
    if (isNaN(age) || age <= 0){
        document.getElementById("Print").innerText = "'Please Enter Valid Age!'";
    } else {
        // Check eligibility Criteria using If else condition!
        if (age > 100) {
            document.getElementById("Print").innerText = "'Invalid Age!'";
        }
        else if(age >= 18){
            document.getElementById("Print").innerText = "'You are Eligible For Vote'";
        }
         else {
            document.getElementById("Print").innerText = "'Sorry, You are not Eligible For Vote, Because Your Age is Less Than 18'";
        }
    }
}