const todoList = JSON.parse(localStorage.getItem('todo')) || [];
let displayBox = document.getElementById("outputList");
let addBtn = document.getElementById("addBtn");
let btnLogo = document.getElementById("btnLogo");

addBtn.addEventListener("click", addList)
function addListInLocal() {
    localStorage.setItem('todo',
        JSON.stringify(todoList))
}
function getListFromLocal() {
    let todo = JSON.parse(localStorage.getItem('todo'));
    return todo;
}
function addList() {
    todoData = document.getElementById("inputData").value;

    if (todoData.length == 0) {
       
        return;
    }
    else if (todoList.includes(todoData)) {
        alert("List Already Exists");
        return;
    }
    else {
        console.error("else Working");

        todoList.push(todoData);
        document.getElementById("inputData").value = '';


        addListInLocal()
        printList()
    }


}
addListInLocal()
getListFromLocal()
function printList() {
    console.info(todoList)
    displayBox.innerHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const element = todoList[i];
        displayBox.innerHTML += `
        <li class="todoElement"> ${element}<button onclick="updateList(${i})"><img src="/toDoList/sources/edit-4-svgrepo-com.svg" width="20px">
</button><button  onclick="deleteData(${i})"><img src="/toDoList/sources/trash-bin-icon.svg" width="25px" alt=""></button></li>
        `;
    }


}
function deleteData(index) {
    todoList.splice(index, 1);
    addListInLocal()
    printList()

}
function updateList(index) {
    document.getElementById("inputData").value = todoList[index];
    addBtn.setAttribute("onclick", `updateSelectedItems(${index})`)


}
printList()
function updateSelectedItems(index) {
    newData = document.getElementById("inputData").value;
    
    addBtn.setAttribute("onclick", "addList")
   
    if (newData.length==0) {
        alert("Please Enter Something");
        return;
    }
    else {
        console.error("else Working");

        todoList[index] = newData;
        addListInLocal()
        document.getElementById("inputData").value = '';
        printList()

    }
  
}
// document.getElementById("inputData").addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         addList();
//     }

// });
    // for light or dark mod
    const checkbox = document.getElementById("checkbox")
    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark")
    })