//Note:This changes original array. Sort from highest to lowest
//Also note if you spell the object property wrong you aint getting an error but just the returned array so watch out!
export function sortData(type,ArrayofobjectsIwanttosort) {
    var items = ArrayofobjectsIwanttosort;
    items.sort(function(obj1,obj2) {
        return (obj2[type] - obj1[type]);   
    })
    console.log(items);
}