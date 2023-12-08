// Complete Project Details at: https://RandomNerdTutorials.com/

//const { database } = require("firebase-admin");

// Database Paths
var dataFloatPath = 'test/float';
var dataIntPath = 'test/int';
var dataStrPath=  'test/str';

// Get a database reference 
const databaseFloat = database.ref(dataFloatPath);
const databaseInt = database.ref(dataIntPath);
const databaseStr=database.ref(dataStrPath);
// Variables to save database current values
var floatReading;
var intReading;
var strReading;


// Attach an asynchronous callback to read the data
databaseFloat.on('value', (snapshot) => {
    floatReading = snapshot.val();
    console.log(floatReading);
    document.getElementById("reading-float").innerHTML = floatReading;
}, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
});

databaseInt.on('value', (snapshot) => {
    intReading = snapshot.val();
    console.log(intReading);
    document.getElementById("reading-int").innerHTML = intReading;
}, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
});

databaseStr.on('value', (snapshot) => {
    strReading = snapshot.val();
    console.log(strReading);
    document.getElementById("reading-str").innerHTML = String(strReading);
}, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
});
