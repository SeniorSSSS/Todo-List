export function addtodotoprojectarea() {
    for (let i = 0; i < DefaultProject.length; i++) {
        const ProjectandTodoArea = document.querySelector('.ProjectandTodoArea');
        let div = document.createElement('div');
        //div.id = "";
        //div.className = "";
        div.innerText = 'The title: ' + DefaultProject[i].title + '\n' + 'The description: ' + DefaultProject[i].description + '\n' + 'The duedate: ' + DefaultProject[i].duedate + '\n' + 'The Priority:' + DefaultProject[i].priority;
        ProjectandTodoArea.appendChild(div);
        console.log(i);
}    }