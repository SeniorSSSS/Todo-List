import './styles.css';
import { MakeTodoItem } from './MakeTodoItem';
import { MakeDefaultProject } from './MakeDefaultProject';
import { ChooseProjectfornewtodo } from './ChooseProjectfornewtodo';
import { addtodotoprojectarea } from './addNEWtodotoprojectarea';
import { Addprojectstoscreen } from './Addprojecttoscreen';
import { removeprojecttodosdivs } from './removeprojecttododivs';
import { sortData } from './sortobjectsinarrayinanotherarray';
import { addmodifiedtodostoprojectarea } from './addAllmodifiedTodotoprojectArea';
import { sortDatabyDueDate } from './SortDatabyDuedate';
import { HasProjectBeenSelected } from './Hasprojectbeenselected';
import { removeindividualtodofromarray } from './removeindividualtodofromarray';

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
    addtodotoprojectarea(projectarrayindex, ArrayforProjects);
}

//Stuff to add a new project!
const AddProjectButtonelem = document.getElementById('AddProjectButton');
AddProjectButtonelem.addEventListener('click', AddProjectFunction);
function AddProjectFunction() {
    let projectname = [];
    ArrayforProjects.push(projectname);
    let length = ArrayforProjects.length;
    let position = length - 1;
    Addprojectstoscreen(position);
}

//Stuff for the Select Project Button.
const SelectProjectelem = document.getElementById('SelectProjectButton');
SelectProjectelem.addEventListener('click', SelectProject);
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
RearrangePrioButtelem.addEventListener('click', RearrangebyPrio);
function RearrangebyPrio() {
    HasProjectBeenSelected(selectedprojectarrayvalue);
    //This sorts array->
    sortData('priority', ArrayforProjects[selectedprojectarrayvalue]);
    //Now do something to remove div content
    removeprojecttodosdivs(selectedprojectarrayvalue);
    //NOw do something to readd the content
    addmodifiedtodostoprojectarea(selectedprojectarrayvalue, ArrayforProjects);
}

//Stuff for Rearrange Button.
const RearrangeDueDateButtonelem = document.getElementById('RearrangeDueDateButton');
RearrangeDueDateButtonelem.addEventListener('click', RearrangebyDueDate);
function RearrangebyDueDate() {
    HasProjectBeenSelected(selectedprojectarrayvalue);
    //This sorts & changes the original array by duedate property
    sortDatabyDueDate('duedate', ArrayforProjects[selectedprojectarrayvalue]);
    //Now do something to remove div content
    removeprojecttodosdivs(selectedprojectarrayvalue);
    //NOw do something to read the content
    addmodifiedtodostoprojectarea(selectedprojectarrayvalue, ArrayforProjects);
}


//Stuff for Delete Button.
const DeleteTodoButtonelem = document.getElementById('DeleteTodoButton');
DeleteTodoButtonelem.addEventListener('click', DeleteTodo);
console.log(ArrayforProjects);
function DeleteTodo() {
    HasProjectBeenSelected(selectedprojectarrayvalue);
    let posofchosentodoarray = prompt('Please enter the number for the todo item you wish to delete');
    //now you have inner array position and main array position so remove the bject and chnage original array.
    removeindividualtodofromarray(selectedprojectarrayvalue, posofchosentodoarray, ArrayforProjects);
    //Now do something to remove div content
    removeprojecttodosdivs(selectedprojectarrayvalue);
    //NOw do something to read the content
    addmodifiedtodostoprojectarea(selectedprojectarrayvalue, ArrayforProjects);
}


//Stuff to hide all but one project
const OnlyshowcertainProjectselem = document.getElementById('Onlyshowcertainprojects');
OnlyshowcertainProjectselem.addEventListener('click', OnlyshowCertainProjects);
function OnlyshowCertainProjects() {
    //Selects a project
    HasProjectBeenSelected(selectedprojectarrayvalue);
    //Makes the non selected projects title element invisible.
    maketitleelementInvisible(selectedprojectarrayvalue);
    //makes the non selected projects todoitems invisible.
    makeTodoelementinvisible(selectedprojectarrayvalue);
}
function maketitleelementInvisible(selectedprojectarrayvalue) {
    //the selected project array value has same number as the title so:
    console.log('step1reached');
    //the value of the array should match the value of the project chosen to not get the invisbile thing.
    let titletonotmakeinvisible = selectedprojectarrayvalue;
    console.log('The vlaue of this is the title number that will remain visible->' + titletonotmakeinvisible);

    //to get # of children elems.
    let numberofchildreninpa = document.querySelectorAll('#insideofprojectarea');
    let nummer = numberofchildreninpa.length;
    
 

    for (let i = 0; i <= nummer; i++)

        if (i == titletonotmakeinvisible) {
            console.log('We have reached the project to not be invisible.->' + titletonotmakeinvisible);
        }
        else {
            console.log('THis item should be invis->' + i);
            //find the thing of interest
            let classname = "Title" + i;
            let title = document.querySelector('.' + classname);
            console.log(title);
            if (title) {
            title.setAttribute("id", "invisible");
            }
            console.log('this is a project which is ignored');
            //k now we have the title next is to add id to it.
            
        }
}
function makeTodoelementinvisible(selectedprojectarrayvalue) {
    let todotonotmakeinvisible = selectedprojectarrayvalue;
    console.log('The vlaue of this is the projectarea that contains the todos that should Not invis' + todotonotmakeinvisible);

     //to get # of children elems.
     let numberofchildreninpa = document.querySelectorAll('#insideofprojectarea');
     let nummer = numberofchildreninpa.length;
     
     //now that we know the # of children we can use it to go over the same # of elements & set the prject area ones ivnisble

    for (let i = 0; i <= nummer; i++)

    if (i == todotonotmakeinvisible) {
        console.log('We have reached the project to not be invisible.->' + todotonotmakeinvisible);
    }
    else {
        console.log('THis item should be invis->' + i);
        //find the thing of interest
        let classname = "projectarea" + i;
        let projectareatomakeinvis = document.querySelector('.' + classname);
        if (projectareatomakeinvis) {
           projectareatomakeinvis.setAttribute("id", "invisible"); 
        }
        //k now we have the title next is to add id to it.
        console.log('this title which is ignored');
    }
  
}

//Stuff for Showallprojects Buttons
const ShowAllProjectselem = document.getElementById('Showallprojects');
ShowAllProjectselem.addEventListener('click', Showallprojects);
function Showallprojects() {
    var makevisible = document.querySelectorAll("[id='invisible']");

    for(var i = 0; i <= makevisible.length; i++) 
    makevisible[i].setAttribute("id", "insideofprojectarea");

}


// Area for FUture expand stuff if I add it
// const ExpandTodo = document.getElementById('');
//if you want the button for expand/minimize todo to work then you can just mod the delete todo one to select a todo and then changes it 
//element.style.visibility = 'hidden';      // Hide
//element.style.visibility = 'visible';     // Show




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


//expand a single todo to see/edit its details.
//update the hasprjectbeen selected functo say modified not rearranged.

//local storage

//fix the error for show all when setattribute fails
//Also remove the console.logs in all the modules.
//give the title/todo invis functions their own modules.