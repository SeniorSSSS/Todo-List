
//This overwrites original array
export function removeindividualtodofromarray(selectedprojectarrayvalue,posofchosentodoobject,ArrayforProjects) {
    ArrayforProjects[selectedprojectarrayvalue].splice(posofchosentodoobject,1);
}