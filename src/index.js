import './styles.css';
import { MakeTodoItem } from './MakeTodoItem';
import { MakeDefaultProject } from './MakeDefaultProject';
import {ChooseProjectfornewtodo} from './ChooseProjectfornewtodo';
import {addtodotoprojectarea} from './addtodotoprojectarea';
import {Addprojectstoscreen} from './Addprojecttoscreen';

// Project is given names;
// Todo Item is an object with properties: 
// Title, 
// Description i.e what you want to-do.
// dueDate -> Each duedate is given a corresponding value with an earlier duedate getting a lower value. Lower value=Displayed more to side.
// Priority -> A number value unique to each to-do in the list.
// Order value-> Default Number given which is equal to its position in the array. Is changed to equal the number calculated by priority, or dueDate.




//Stuff that makes the default project!
let ArrayforProjects = [];
MakeDefaultProject(ArrayforProjects);

//Stuff that adds a new todo in a project!
const AddTodoItemelem = document.getElementById('AddTodoItem');
AddTodoItemelem.addEventListener('click', AddTodoItemfunction);
function AddTodoItemfunction() {
    let projectarrayindex = ChooseProjectfornewtodo(ArrayforProjects);
    let newTodoItem = MakeTodoItem();
    ArrayforProjects[projectarrayindex].push(newTodoItem);
    addtodotoprojectarea(projectarrayindex,ArrayforProjects);
}

//Stuff to add a new project!
const AddProjectButtonelem = document.getElementById('AddProjectButton');
AddProjectButtonelem.addEventListener('click', AddProjectFunction);
function AddProjectFunction() {
    let projectname = [];
    ArrayforProjects.push(projectname);
    let length = ArrayforProjects.length;
    let position = length -1;
    Addprojectstoscreen(position);
}

