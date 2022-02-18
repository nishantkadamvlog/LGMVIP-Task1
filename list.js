const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if(userData.trim() != 0) {
        addBtn.classList.add("active")  // activate the add button
    } 
    else {
        addBtn.classList.remove("active");  // deactivate the add button
    }
} 

showTasks();


addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo"); 

    if(getLocalStorage == null) {   
        listArr = [];       
    }
    else {
        listArr = JSON.parse(getLocalStorage);
    }

    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}


function showTasks() {
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null) {
        listArr = [];
    }
    else {
        listArr = JSON.parse(getLocalStorage);
    }

    let newLITag = '';
    listArr.forEach((element, index) => {
        newLITag += `<li> ${element} <span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLITag;  
    inputBox.value = "";    

}


function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);   

    localStorage.setItem("New Todo", JSON.stringify(listArr));  
    showTasks();
}

deleteAllBtn.onclick = () => {
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
} 