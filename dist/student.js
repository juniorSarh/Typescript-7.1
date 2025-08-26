"use strict";
function displayStudentInfo(student) {
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.textContent = `Student: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`;
    }
}
const student1 = {
    name: "Alice",
    age: 20,
    grade: "A",
};
const student2 = {
    name: "Bob",
    age: 22,
    grade: "B",
};
displayStudentInfo(student2);
//TS Arrays
const fruits = ["mango", "banana", "apple", "orange", "kiwi"];
fruits.forEach((fruit) => {
    console.log(fruit.toUpperCase());
});
//TS Objects
const course = {
    title: "Typescript Basics",
    duration: 6,
    isActive: true,
};
function getCourseDescription() {
    return `Course: ${course.title}, Duration is: ${course.duration} and isActive: ${course.isActive}`;
}
console.log(getCourseDescription());
const books = [
    { title: "I Should Not Be Alive", author: "Sabelo Gumede", year: 2020 },
    { title: "It was not easy ", author: "Snethemba Ngubane", year: 2024 },
    { title: "The way of Life", author: "Chantela Noyila", year: 2025 },
];
function printBookTitles(bookArray) {
    bookArray.forEach((book) => console.log(book.title));
}
printBookTitles(books);
// function add numbers
function addNumbers(number1, number2) {
    return number1 + number2;
}
console.log(addNumbers(3, 2));
//DOM Access & Type Casting
const input = document.getElementById("nameInput");
const button = document.getElementById("greetBtn");
const output = document.getElementById("output");
button.addEventListener("click", () => {
    const name = input.value.trim();
    if (name) {
        output.textContent = `Hello, ${name} 👌👌!`;
    }
    else {
        output.textContent = "Hello, stranger!. You do not know your name🤣🤣";
    }
});
