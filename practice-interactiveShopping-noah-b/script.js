
// 2. Core Features:
//     ● Add Items:
//     ○ When the user enters text in the input field and clicks the "Add"
//     button, a new list item is added to the.

    const unorderedList = document.querySelector("ul");
    const addItemButton = document.getElementById("add-item");
    const itemField = document.getElementById("item-field"); 

    

    addItemButton.addEventListener("click", function(event) { // clicking the button fires event
        event.preventDefault(); // stops page reload when button is pressed
        
        const listItem = document.createElement("li"); // creates li tag
        const userInput = itemField.value; // stores user input in userInput variable
        listItem.innerHTML = userInput; // fills li with user input
        unorderedList.appendChild(listItem); // makes ul a parent of li
    });

//     ○ Each list item should include:
//     ■ The item text.
//     ■ A "Remove" button to delete the item.
//     ■ A "Edit" button to modify the item text.
//     ● Remove Items:
//     ○ When the "Remove" button is clicked, the corresponding list item is
//     deleted from the.
//     ● Edit Items:
//     ○ When the "Edit" button is clicked:
//     1
//     ■ Replace the item text with an input field containing the current
//     text.
//     ■ Change the "Edit" button to a "Save" button.
//     ■ When "Save" is clicked, update the text with the new input value
//     and revert the button back to "Edit".