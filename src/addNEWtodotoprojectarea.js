
export function addtodotoprojectarea(projectarrayindex,ArrayforProjects) {
    let numberoftodosinproject =ArrayforProjects[projectarrayindex].length;
    let addedtodoitem = numberoftodosinproject - 1;

    //this is to find the desired project area
    const desiredprojectarea = document.querySelector('.projectarea' + projectarrayindex);

    let div = document.createElement('div');
    div.className = ("todoitem" + addedtodoitem);
    div.innerText = "Todo Item: " + addedtodoitem + '\n' + 'The Title: ' + ArrayforProjects[projectarrayindex][addedtodoitem].title + '\n' + 'The Description: ' + ArrayforProjects[projectarrayindex][addedtodoitem].description + '\n' + 'The DueDate: ' + ArrayforProjects[projectarrayindex][addedtodoitem].duedate + '\n' + 'The Priority: ' + ArrayforProjects[projectarrayindex][addedtodoitem].priority;

    desiredprojectarea.appendChild(div);
}
