// script.js

// variables in global scope 
const unorderedList = document.querySelector("ul");
const addItemButton = document.getElementById("add-item");
const itemField = document.getElementById("item-field");

addItemButton.addEventListener("click", function(event) { // clicking the button fires event
    event.preventDefault(); // stops page from reloading when button is pressed
    
    const userInput = itemField.value; // stores user input in userInput variable
    if (!userInput) return; // stops function if input is empty

    createListItem(userInput);
});

function createListItem(text) { // use functions to keep code DRY
    const textSpan = document.createElement("span");
    const listItem = document.createElement("li"); 

    textSpan.textContent = text; // fills span with user input - use span for easier formatting
    listItem.appendChild(textSpan); // makes li a parent of span
    unorderedList.appendChild(listItem); // makes ul a parent of li

    const removeButton = createRemoveButton(listItem); // creates Remove Item button
    const editButton = createEditButton(textSpan); // creates Edit Item button

    listItem.appendChild(removeButton); // appends buttons to li
    listItem.appendChild(editButton);

    return listItem; // keeps elements' hierarchy when returning
}

function createRemoveButton(listItem) { 
    const removeItemButton = document.createElement("button"); // create element

    removeItemButton.setAttribute("type", "button"); // add attributes
    removeItemButton.setAttribute("class", "remove-item");
    removeItemButton.textContent = "Remove Item"; // add label
    
    removeItemButton.addEventListener("click", function() {
        listItem.remove(); // delete list item and buttons
    });

    return removeItemButton; // button retains event listener
}
    

function createEditButton(textSpan) {
    const editItemButton = document.createElement("button"); // create element

    editItemButton.setAttribute("type", "button"); // add attributes
    editItemButton.setAttribute("class", "edit-item");
    editItemButton.textContent = "Edit Item"; // add label

    editItemButton.addEventListener("click", function() {
        const editInput = replaceListItem(textSpan);
        createSaveButton(editItemButton, editInput); 
    })

    return editItemButton;
}

function replaceListItem(textSpan) {
    const editInput = document.createElement("input"); // create text input

    editInput.setAttribute("type", "text"); // add attributes
    editInput.setAttribute("class", "edit-input");
    editInput.setAttribute("name", "edit-input");
    editInput.setAttribute("placeholder", "Enter item here");

    textSpan.replaceWith(editInput);

    return editInput;
}

function createSaveButton(editItemButton, editInput) {
    const saveButton = document.createElement("button");

    saveButton.setAttribute("type", "button");
    saveButton.setAttribute("class", "save-item");
    saveButton.textContent = "Save Item";

    editItemButton.replaceWith(saveButton);

    saveButton.addEventListener("click", function() {
        const savedValue = editInput.value;
        const savedSpan = document.createElement("span");

        savedSpan.textContent = savedValue; // fills span with user input 
        editInput.replaceWith(savedSpan);

        saveButton.replaceWith(createEditButton(savedSpan));
    });
}