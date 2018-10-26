// test out convert object to JSON
var obj = {
    name: 'Jeff'
};
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

// test out convert JSON to object
var personString = '{"name": "Jeff", "age": 53}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);

// read/write JSON
const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
