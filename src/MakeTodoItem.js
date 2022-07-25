import { ToDoItemFactory } from "./ToDoItemFactory";

export function MakeTodoItem() {
    let title = prompt("title");
    let description = prompt("description");
    let year = Number(prompt('Enter the Year in Number format e.g. 2022'));
    let Month = Number(prompt('Enter in Month with 0 being january and 11 being December'));
    let Day = Number(prompt('Enter in the day in number format e.g 23'));
    let dueDate = new Date(year, Month, Day);
    console.log(typeof dueDate);
    let priority = prompt("Add a priority value (SHould be a number)");
    console.log(typeof priority);
    var x = ToDoItemFactory(title, description, dueDate, priority)
    return x;
}

