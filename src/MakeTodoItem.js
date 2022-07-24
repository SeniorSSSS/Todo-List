import { ToDoItemFactory } from "./ToDoItemFactory";

export function MakeTodoItem() {
    let title = prompt("title");
    let description = prompt("description");
    let dueDate = prompt("duedate");
    let priority = prompt ("priority");
    var x = ToDoItemFactory(title,description,dueDate,priority)
    return x;
}

