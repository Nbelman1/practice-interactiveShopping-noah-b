
// 2. Core Features:
//     ● Add Items:
//     ○ When the user enters text in the input field and clicks the "Add"
//     button, a new list item is added to the.

    const unorderedList = document.querySelector("ul");
    const addItemButton = document.getElementById("add-item");
    const itemField = document.getElementById("item-field");
    let listItem = ""; // define variables on top of functions for global scope
    let textSpan = "";
    let userInput = ""; 

    addItemButton.addEventListener("click", function(event) { // clicking the button fires event
        event.preventDefault(); // stops page reload when button is pressed
        
        userInput = itemField.value; // stores user input in userInput variable

        function createListItem(userInput) { // create functions to keep code DRY
            textSpan = document.createElement("span");
            listItem = document.createElement("li"); 
            textSpan.innerHTML = userInput; // 
            listItem.appendChild(textSpan); // makes li a parent of span
            unorderedList.appendChild(listItem); // makes li a parent of ul

            createRemoveButton(listItem);
            createEditButton(listItem);

            return listItem;
        }

        function createRemoveButton(listItem) { 
            const removeItemButton = document.createElement("button"); // create element
            removeItemButton.setAttribute("type", "button"); // add attributes
            removeItemButton.setAttribute("name", "remove-item");
            removeItemButton.setAttribute("class", "remove-item");
            removeItemButton.textContent = "Remove Item"; // add label
            listItem.appendChild(removeItemButton); // append button to list item
            
            removeItemButton.addEventListener("click", function() {
                listItem.remove(); // remove list item from list
            });

            return removeItemButton; // button retains event listener
        }
        
        // add Edit Item button
        function createEditButton(listItem) {
            const editItemButton = document.createElement("button"); // create element
            editItemButton.setAttribute("type", "button"); // add attributes
            editItemButton.setAttribute("name", "edit-item");
            editItemButton.setAttribute("class", "edit-item");
            editItemButton.textContent = "Edit Item"; // add label
            listItem.appendChild(editItemButton); // append button to list item

            createEditEventListener(listItem, textSpan, editItemButton);
            return editItemButton;
        }

        // TODO: fix edit event listener - button currently does nothing when pressed
        // TODO: figure out how to incorporate createEditButton and createRemoveButton functions inside of the event handler

        function createEditEventListener(listItem, textSpan, editItemButton) {
            // when Edit Item button is clicked...
            editItemButton.addEventListener("click", function() {
                // create text input for new list item
                const editButtonInput = document.createElement("input"); // create input
                listItem = document.createElement("li");
                editButtonInput.setAttribute("type", "text"); 
                editButtonInput.setAttribute("name", "edit-input");
                editButtonInput.setAttribute("placeholder", "Enter new item");
                textSpan.replaceWith(editButtonInput); // delete text span (which contains list item), insert text input field

                // change the "edit" button to a "save" button
                const saveItemButton = document.createElement("button");
                saveItemButton.setAttribute("name", "save-item");
                saveItemButton.setAttribute("type", "button");
                saveItemButton.setAttribute("class", "save-item");
                saveItemButton.textContent = "Save Item";
                editItemButton.replaceWith(saveItemButton);
            }
        )}

            // when Save Item button is clicked...
            // saveItemButton.addEventListener("click", function() {
            //     createListItem();
            //     createRemoveButton();
            // })

        

        createListItem(userInput);
        
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