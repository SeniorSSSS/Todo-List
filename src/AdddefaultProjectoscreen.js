import { adddefaulttitledivfunc } from "./AddDeftitlediv";

export function AdddefaultProjecttoscreen(projectarrayindex) {
    adddefaulttitledivfunc(0);
    let i = projectarrayindex;

    const ProjectandTodoArea = document.querySelector('.ProjectandTodoArea');
    
    let div = document.createElement('div');
    div.className = ("projectarea" + i);
    ProjectandTodoArea.appendChild(div);
}
