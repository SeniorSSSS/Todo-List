import { ToDoItemFactory } from './ToDoItemFactory';
import {AdddefaultProjecttoscreen} from './AdddefaultProjectoscreen';

//Make Default Project!
export function MakeDefaultProject(ArrayforProjects) {
    let DefaultProject = [];

    const defaulttodoitem1 = ToDoItemFactory('This Project SHould be 1st', 'NUMBA 1', new Date(2020,9,1), '7');
    const defaulttodoitem2 = ToDoItemFactory('This project should be 2nd', 'NUmba 2', new Date(2028,9,1), '8');

    DefaultProject.push(defaulttodoitem1);
    DefaultProject.push(defaulttodoitem2);

    ArrayforProjects.push(DefaultProject);

    //the following is to add a div with the defaults info
    AdddefaultProjecttoscreen(0);

    const desiredprojectarea = document.querySelector('.projectarea' + 0);

    let defaultdiv = document.createElement('div');
    defaultdiv.className = "todoitem"+0;
    
    defaultdiv.innerText = "Todo Item:" + 0 + '\n' +'The title: ' + ArrayforProjects[0][0].title + '\n' + 'The description: ' + ArrayforProjects[0][0].description + '\n' + 'The duedate: ' + ArrayforProjects[0][0].duedate + '\n' + 'The Priority: ' + ArrayforProjects[0][0].priority;
    desiredprojectarea.appendChild(defaultdiv);

    let defaultdiv2 = document.createElement('div');
    defaultdiv2.className = "todoitem"+1;
  
    defaultdiv2.innerText = "Todo Item:" + 1 + '\n' + 'The title: ' + ArrayforProjects[0][1].title + '\n' + 'The description: ' + ArrayforProjects[0][1].description + '\n' + 'The duedate: ' + ArrayforProjects[0][1].duedate + '\n' + 'The Priority: ' + ArrayforProjects[0][1].priority;
    desiredprojectarea.appendChild(defaultdiv2);
}

