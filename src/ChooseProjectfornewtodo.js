
export function ChooseProjectfornewtodo(ArrayforProjects) {
    alert('There are currently ' + (ArrayforProjects.length) + 'Projects');
    //if i is undefined it means that no project was selected and as such code that selects a project should be run.
    if (typeof i === 'undefined') {
        for (let i = 0; i < ArrayforProjects.length; i++) {
            alert("Project Number " + (i) + "currently has" + (ArrayforProjects[i].length) + "items");
            let choice = prompt('If you would like to choose project number' + (i) + 'type Y. If not type N or anything else.');
            if (choice === 'Y') {
                alert('Thank you for selecting project number' + (i) + '. The Created Todo Item will be added here.');
                return i;
            }
            else {
                alert ("On to the next project");
            }
        }
    }
}
