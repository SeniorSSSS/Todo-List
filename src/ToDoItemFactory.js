//This is a factory used to make "the to-do items" it has the properties & functions the individual objects would have 
export const ToDoItemFactory = (title,description,duedate,priority,ordervalue) => {
    return {
        title: title,
        description: description,
        duedate: duedate,
        priority: priority,
   } 
}
