import { ToDoItemFactory } from './ToDoItemFactory';
import {AdddefaultProjecttoscreen} from './AdddefaultProjectoscreen';

//Make Default Project!
export function MakeDefaultProject(ArrayforProjects) {
    console.log("this");
    let DefaultProject = [];
    const defaulttodoitem1 = ToDoItemFactory('chickenmclicking', 'Eat The feathers of 300 chickens', '2022-07-22', '9');
    DefaultProject.push(defaulttodoitem1);
    ArrayforProjects.push(DefaultProject);
    //the following is to add a div with the defaults info
    AdddefaultProjecttoscreen(0);
    const desiredprojectarea = document.querySelector('.projectarea' + 0);
    let defaultdiv = document.createElement('div');
    defaultdiv.className = "todoitem";
    defaultdiv.innerText = 'The title: ' + ArrayforProjects[0][0].title + '\n' + 'The description: ' + ArrayforProjects[0][0].description + '\n' + 'The duedate: ' + ArrayforProjects[0][0].duedate + '\n' + 'The Priority:' + ArrayforProjects[0][0].priority;
    desiredprojectarea.appendChild(defaultdiv);
}
