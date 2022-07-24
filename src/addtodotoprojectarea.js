export function addtodotoprojectarea(projectarrayindex,ArrayforProjects) {
    let numberoftodosinproject =ArrayforProjects[projectarrayindex].length;
    let addedtodoitem = numberoftodosinproject - 1;
    //this is to find the desired project area
    const desiredprojectarea = document.querySelector('.projectarea' + projectarrayindex);
    let div = document.createElement('div');
    div.className = "todoitem";
    div.innerText = 'The title: ' + ArrayforProjects[projectarrayindex][addedtodoitem].title + '\n' + 'The description: ' + ArrayforProjects[projectarrayindex][addedtodoitem].description + '\n' + 'The duedate: ' + ArrayforProjects[projectarrayindex][addedtodoitem].duedate + '\n' + 'The Priority:' + ArrayforProjects[projectarrayindex][addedtodoitem].priority;
    desiredprojectarea.appendChild(div);
}
