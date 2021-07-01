//arrow functions 

//older function code
let studentList = function (students) {
    console.log(students);
};

studentList(["A", "B", "C"]);

//this is ES6 with newer syntax BUT it has only One Statement CONSOLE.LOG
let studentList = (students) => {
    console.log(students);
}

studentList(["A", "B", "C"]);

// removed the {} since there is only one statement
let studentList = (students) => 
    console.log(students);

    
studentList(["A", "B", "C"]);

// Mapping over items

let list = ["apple", "bannana", "cherry"];
list.map((item) => console.log(item));