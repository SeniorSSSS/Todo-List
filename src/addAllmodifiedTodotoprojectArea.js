
export function addmodifiedtodostoprojectarea(projectarrayindex,ArrayforProjects) {
    //this is to find the desired project area so that we can add 2 it.
    const desiredprojectarea = document.querySelector('.projectarea' + projectarrayindex);
    //loop is so it can repeat for all todos in the project
    for (let index = 0; index < ArrayforProjects[projectarrayindex].length; index++) {
    //makes the div stuff
    let div = document.createElement('div');
    div.className = "todoitem";
    //adds the text
    div.innerText = 'The title: ' + ArrayforProjects[projectarrayindex][index].title + '\n' + 'The description: ' + ArrayforProjects[projectarrayindex][index].description + '\n' + 'The duedate: ' + ArrayforProjects[projectarrayindex][index].duedate + '\n' + 'The Priority:' + ArrayforProjects[projectarrayindex][index].priority;
    //apendsit
    desiredprojectarea.appendChild(div);
    }
}