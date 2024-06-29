 // saveNote Function
 function saveNotes() {
    let textArea = document.getElementById('textarea');
    let text = textArea.value.trim();
    
    // Check if the textarea is not empty
    if (text !== '') {
        if(text.length < 20 ){
            document.getElementById("span").innerText = "Character Length should be greater than 20";
        }
        else if(text.length > 70){
            document.getElementById("span").innerText = "character length should be less than 70";
        }
        else{
            document.getElementById("span").innerText = " ";
        // Get  notes from local storage or convert in array
        let textNotes = JSON.parse(localStorage.getItem('Secure Notes')) || [];
        
        // add new note in array using push method
        textNotes.push(text);
        
        // save updated textNotes to localstorage
        localStorage.setItem('Secure Notes', JSON.stringify(textNotes));
        
        // clear input field
        textArea.value = '';
        
        // update textNotes
        showNotes();
        }
    } else {
        document.getElementById("span").innerText = "Please Fill Out This Field";
    }
}

// removeNote Function
function removeNotes(index) {
     // Get  textNotes from local storage 
    let textNotes = JSON.parse(localStorage.getItem('Secure Notes'));
    
    // remove note on index
    textNotes.splice(index, 1);
    
    // save note on localstorage
    localStorage.setItem('Secure Notes', JSON.stringify(textNotes));
    
    // Update textNotes
    showNotes();
}

// showNote Function
function showNotes() {
    let textAreaa = document.getElementById('textContent');
    
    // Clear textNotes from textarea
    textAreaa.innerHTML = '';
    
    // // Get  textNotes from local storage or convert in array
    let textNotes = JSON.parse(localStorage.getItem('Secure Notes')) || [];
    
    // show each note 
    textNotes.forEach(function(note, index) {
        let textElement = document.createElement('div');
        textElement.classList.add('note');
        textElement.textContent = note;
        
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Remove';
        deleteButton.onclick = function() {
            removeNotes(index);
        };
        
        textElement.appendChild(deleteButton);
        textAreaa.appendChild(textElement);
    });
}

//when page reloads it initialize textNotes
showNotes();