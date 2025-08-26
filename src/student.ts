type Grade = 'A'|'B'|'C'|'D'|'E'|'F';

interface Student {
  name: string;
  age: number;
  grade: Grade;
}

function displayStudentInfo(student: Student): void {
  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.textContent = `Student: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`;
  }
}

const student1: Student = {
  name: "Alice",
  age: 20,
  grade: "A",
};

const student2: Student = {
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
const course: { title: string; duration: number; isActive: boolean } = {
  title: "Typescript Basics",
  duration: 6,
  isActive: true,
};

function getCourseDescription(): string {
  return `Course: ${course.title}, Duration is: ${course.duration} and isActive: ${course.isActive}`;
}

console.log(getCourseDescription()); 

//Interfaces and Arrays of Object

interface Book {
  title: string;
  author: string;
  year: number;
}

const books: Book[] = [
  { title: "I Should Not Be Alive", author: "Sabelo Gumede", year: 2020 },
  { title: "It was not easy ", author: "Snethemba Ngubane", year: 2024 },
  { title: "The way of Life", author: "Chantela Noyila", year: 2025 },
];

function printBookTitles(bookArray: Book[]): void {
  bookArray.forEach((book) => console.log(book.title));
}

printBookTitles(books)


// function add numbers

function addNumbers(number1:number, number2:number){

    return number1+number2;
}

console.log(addNumbers(3,2));

//DOM Access & Type Casting
 const input = document.getElementById("nameInput") as HTMLInputElement;
 const button = document.getElementById("greetBtn") as HTMLButtonElement;
 const output = document.getElementById("output") as HTMLParagraphElement;

 button.addEventListener("click", () => {
   const name = input.value.trim();
   if (name) {
     output.textContent = `Hello, ${name} 👌👌!`;
   } else {
     output.textContent = "Hello, stranger!. You do not know your name🤣🤣";
   }
 });