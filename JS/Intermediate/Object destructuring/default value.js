// defautlt values
const user = {
    id: 339,
    name: 'Fred',
    age: 42,
    education: {
        school: 12
    }
};

const { data = "default" } = user;
console.log(data); // default
// Here equivalent code
// const identifier = expression.identifier === undefined ?
//     defaultValue : expression.identifier;


// If nested object will be missing we will get an error.
// For example:-
// const {education: {degree}} = user;  // TypeError: Cannot match against 'undefined' or 'null'.


// Using default value to prevent error in nested objects
const { education: { degree = "default in multiple object" } } = user;
console.log(degree); // default in multiple object