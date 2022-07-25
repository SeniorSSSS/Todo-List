//Note:This changes original array. Sort from highest to lowest ->descend?
//Also note if you spell the object property wrong you aint getting an error but just the returned array so watch out!

export function sortDatabyDueDate(type,ArrayofobjectsIwanttosort) {
    var items = ArrayofobjectsIwanttosort;
    items.sort(function(obj1,obj2) {
        console.log(obj2[type]);
        console.log(typeof obj2);
        console.log(typeof obj2[type]);
        return (obj2[type] - obj1[type]);   
    })
    console.log(items);
}