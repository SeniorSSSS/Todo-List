import './styles.css';
import { MakeTodoItem } from './MakeTodoItem';
import { MakeDefaultProject } from './MakeDefaultProject';
import {ChooseProjectfornewtodo} from './ChooseProjectfornewtodo';
import {addtodotoprojectarea} from './addNEWtodotoprojectarea';
import {Addprojectstoscreen} from './Addprojecttoscreen';
import { removeprojecttodosdivs } from './removeprojecttododivs';
import { sortData } from './sortobjectsinarrayinanotherarray';
import {addmodifiedtodostoprojectarea} from './addAllmodifiedTodotoprojectArea';
import {sortDatabyDueDate} from './SortDatabyDuedate';
import { HasProjectBeenSelected } from './Hasprojectbeenselected';

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

//Stuff for the Select Project Button.
const SelectProjectelem = document.getElementById('SelectProjectButton');
SelectProjectelem.addEventListener('click',SelectProject);
let selectedprojectarrayvalue;
function SelectProject() {
    alert('There is/are currently ' + (ArrayforProjects.length) + ' Project(s)');
    //if spva is undefined it means that no project was selected and as such code that selects a project should be run.
    //THe if loop only checks condition at first
    //See if spva is defined(asnum).Say Project #. Give chance to choice. or move on in loop.
    //replace for loop by typing in projectarray value yourself.
        selectedprojectarrayvalue = prompt('Type in the number of the project you would like to rearrange. This number is beside the Project Title.');
        alert('You have selected project number ' + (selectedprojectarrayvalue) + ' .Now you can rearrange it by DueDate or Priority Level');
        return selectedprojectarrayvalue;
    
}

//Stuff for the button that rearranges by priority level.
const RearrangePrioButtelem = document.getElementById('RearrangePriorityButton');
RearrangePrioButtelem.addEventListener('click',RearrangebyPrio);
function RearrangebyPrio() {
HasProjectBeenSelected(selectedprojectarrayvalue);
//This sorts array->
sortData('priority',ArrayforProjects[selectedprojectarrayvalue]);
//Now do something to remove div content
removeprojecttodosdivs(selectedprojectarrayvalue);
//NOw do something to readd the content
addmodifiedtodostoprojectarea(selectedprojectarrayvalue,ArrayforProjects);
}

//Stuff for Rearrange Button.
const RearrangeDueDateButtonelem = document.getElementById('RearrangeDueDateButton');
RearrangeDueDateButtonelem.addEventListener('click',RearrangebyDueDate);
function RearrangebyDueDate() {
HasProjectBeenSelected(selectedprojectarrayvalue);
//This sorts & changes the original array by duedate property
sortDatabyDueDate('duedate', ArrayforProjects[selectedprojectarrayvalue]);
//Now do something to remove div content
removeprojecttodosdivs(selectedprojectarrayvalue);
//NOw do something to read the content
addmodifiedtodostoprojectarea(selectedprojectarrayvalue,ArrayforProjects);
}



// NEXT UP ON THE TODO LIST!

//what happens if not everything provided for add todoitem..should say nothing will be added. Follow instructions.

//What happens if you you want to rearrange by dueDate & Priority Level. 

//It needs to give error when you click select project & give a number higher than the actual number of projects.

//IT should say rearrange by priority level (H->L);

//when you make a project you could add in a fake todo so it doesnt look empty. This todo would disappear after. 

//Fix rearrange priority levels so that it works with non-number values or make it so that priority only accepts numbers.

//you can add project with null/no name fix that
//If either rearrange is clicked without doing select project first then say HEY! select a project to rearrange. if it is then say hey do you want to change it.

//you have to rerun rearrange by priority level lol every time new one added->Maybe do something about that.
