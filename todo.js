let savedTask = localStorage.getItem('task');
let arr;

if (savedTask === null) {
    arr = [
        { item: 'try this ToDo app', date: '2026-06-25',completed:'false' },
        { item: 'made by SAMARTH', date: '2026-06-25',completed:'false' },
        { item: 'Start small, stay consistent', date: '2026-06-25',completed:'false' },
        { item: 'One task at a time', date: '2026-06-25',completed:'true' }
    ];
    localStorage.setItem('task', JSON.stringify(arr));
} else {
    arr = JSON.parse(savedTask);
}


displayTodo();
saveTask();
function addTodo(){
    let todoInput = document.querySelector('#input-todo');
    let todoDate = document.querySelector('#date-todo');
    let Task = todoInput.value;
    let Date = todoDate.value;
    arr.push({item:Task, date:Date,completed:'false'})
    todoInput.value = '';
    todoDate.value = '';
    displayTodo();
    saveTask();
}

function displayTodo(){
    let display = document.querySelector('.display-container');
    let newHtml = '';
    for(let i = 0; i<arr.length; i++){
        let Task = arr[i].item;
        let Date = arr[i].date;
        let mark = 'checked';
        let classAdd = 'completed';

        if(arr[i].completed === 'true'){
            mark = 'checked';
            classAdd = 'completed';
        }else{
            mark = '';
            classAdd ='';
        }


        newHtml += `<div class="grid-container list-part">
                        <input type="checkbox" id="check-box" ${mark} onclick="marked(${i});">
                        <span class = "${classAdd}">${i+1}] ${Task}</span>
                        <span class = "${classAdd}">${Date}</span>
                        <button id="delete-button" class="btn" onclick="arr.splice(${i},1);displayTodo(); saveTask();">🗑️ Delete</button>
                    </div>`;
    }
    display.innerHTML = newHtml;
}

function saveTask(){
    localStorage.setItem('task',JSON.stringify(arr)); 
}

function marked(i){
    if(arr[i].completed=== 'false'){
        arr[i].completed='true';
    }else{
        arr[i].completed='false';
    }
    saveTask();
    displayTodo();
}

alert(`✨ Welcome to Samarth's ToDo App
      Features:
        • Add tasks with a due date
        • Mark tasks as completed
        • Delete unwanted tasks
        • Automatic saving using Local Storage
        • Data persists after page refresh

        Thanks for trying my project! 🚀
        Enjoy 😊.`)
