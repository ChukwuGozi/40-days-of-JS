console.log("Day 02");

// Variables: Variables are used to store data in JavaScript

// - 'var': Function-scoped, can be redeclared (not recommended)
// - 'let': Block-scoped, can be reassigned
// - 'const': Block-scoped, **cannot** be reassigned

const address = "Surulere";

console.log(address);

let age = 23;

age = 57;



/*
- **Primitive Data Types:**
    - 'String' - Text values ('"Hello"')
    - 'Number' - Numeric values ('25', '3.14')
    - 'Boolean' - True/False ('true', 'false')
    - 'Undefined' - A variable declared but not assigned ('let x;')
    - 'Null' - Represents "nothing" ('let y = null;')
    - 'BigInt' - Large numbers ('BigInt(12345678901234567890)')
    - 'Symbol' - Unique identifiers ('Symbol("Id")')
- **Non-Primitive (Reference) Data Types:**
    - 'Object' - Collection of key-value pairs
    - 'Array' - Ordered list of values
    - 'Function' - Code that can be executed
    */

    console.log("student");
    
    let student = {
        name: "Chukwugozi",
        age: 27,
        isEnrolled: true
    };
    console.log(student.name);

    let arr = [1,2,3,4,5];

