import { addtitlediv } from "./Addtitletodiv";

export function Addprojectstoscreen(projectarrayindex) {
    
    let i = projectarrayindex;

    const ProjectandTodoArea = document.querySelector('.ProjectandTodoArea');

    let div = document.createElement('div');
    div.className = ("projectarea" + i);
    div.id = 'insideofprojectarea';
    addtitlediv(projectarrayindex);

    ProjectandTodoArea.appendChild(div);
}