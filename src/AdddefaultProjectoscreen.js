import { adddefaulttitledivfunc } from "./AddDeftitlediv";

export function AdddefaultProjecttoscreen(projectarrayindex) {
    adddefaulttitledivfunc(0);
    console.log( 'This is the project array index' +projectarrayindex);
    let i = projectarrayindex;
    console.log('This is the project array index' + i);
    const ProjectandTodoArea = document.querySelector('.ProjectandTodoArea');
    let div = document.createElement('div');
    div.className = ("projectarea" + i);
    ProjectandTodoArea.appendChild(div);
}
