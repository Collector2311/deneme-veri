// Database Paths
var dataFloatPath = 'test/float';
var dataIntPath = 'test/int';
var dataStrPath = 'test/str';

// Get a database reference 
const databaseFloat = firebase.database().ref(dataFloatPath);
const databaseInt = firebase.database().ref(dataIntPath);
const databaseStr = firebase.database().ref(dataStrPath);

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

function writeData() {
    // Get user input from input fields
    var floatInput = document.getElementById("input-float").value;
    var intInput = document.getElementById("input-int").value;
    var strInput = document.getElementById("input-str").value;

    // Write data to Firebase
    databaseFloat.set(parseFloat(floatInput));
    databaseInt.set(parseInt(intInput, 10));
    databaseStr.set(strInput);
}
