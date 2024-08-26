/*function addTodo(){
   var todo_input =document.getElementById("todo_input");
   var todotext=todo_input.value.trim();
   if(todotext !=="")
    {
    var li=document.createElement("li");
    li.textContent= todotext;//create list.....line by line
    var deleteButton=document.createElement("button");
    deleteButton.textContent="delete";
    deleteButton.classList.add("deletebtn");//like as css style
    deleteButton.onclick=function()
    {//click to delete the item
     li.remove();
     li.appendChild(deleteButton);//add delete button
     document.getElementById(todolist).appendChild(li);
     todo_input.value="";


    };

    

   }
}

*/
function addTodo() {
   var todo_input = document.getElementById("todo_input");
   var todotext = todo_input.value.trim();
   
   if (todotext !== "") {
       var li = document.createElement("li");
       li.textContent = todotext; // Create list item
       
       var deleteButton = document.createElement("button1");
       deleteButton.textContent = "Delete";
       deleteButton.classList.add("deletebtn"); // Add CSS style class
       
       // Add the delete button to the list item
       li.appendChild(deleteButton);
       
       // Add the list item to the todo list
       document.getElementById("todolist").appendChild(li);
       
       // Clear the input field
       todo_input.value = "";
       
       // Set the delete button's click event to remove the item
       deleteButton.onclick = function() {
           li.remove();
       };
   }
}
