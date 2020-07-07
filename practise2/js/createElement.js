/**
 * Create a button
 */
let btn = document.createElement("Button");
btn.innerHTML = "Click Me";
btn.id = "btn";

/**
 * Append it to DOM
 */

document.body.appendChild(btn)

/**
 * On Click 
 */
btn
    .addEventListener("click", ()=>{
        console.log("Button has been clicked");
    })

/**
 * Create a breakline
 */
const breakLine = document.createElement("br");
document.body.appendChild(breakLine);

/**
 * Create paragraph
 */
let paragraph = document.createElement("paragraph");
paragraph.id = "para";

paragraph.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                       aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                       voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                       deserunt mollit anim id est laborum`;

document.body.appendChild(paragraph);

/**
 * create a delete function using ids
 */

document.body.appendChild(breakLine)

let deleteBtn = document.createElement("Button");
deleteBtn.innerHTML = "Delete";
deleteBtn.id = "deleteBtn";
document.body.appendChild(deleteBtn);

if(deleteBtn){
    deleteBtn
        .addEventListener("click", function(elementId){
            elementId = document.getElementById("delInputText").value;
            console.log("Deleted.....");
            var element = document.getElementById(elementId);
            element.parentNode.removeChild(element);
            
            /**
             * Clear the text box after submiT
             */
            document.getElementById("delInputText").value=""
    })
}
