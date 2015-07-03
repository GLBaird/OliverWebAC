window.addEventListener("load", init, false);

var db;
var dbVersion = 1;

function init() {
    // setup Indexed DB
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    
    if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
    }
    
    openDatabase();
    
    document.getElementById("save").addEventListener("click", savePerson, false);
}

function openDatabase() {
    var request = window.indexedDB.open("MyTestDatabase", dbVersion);
    
    request.onerror = function(event) {
        // Do something with request.errorCode!
        alert("Database error: " + event.target.errorCode);
    };
    
    request.onsuccess = function(event) {
        // Do something with request.result!
        db = request.result;
        displayPeople();
    };
    
    // build a new database
    request.onupgradeneeded = function(event) { 
        var db = event.target.result;
      
        // Create an objectStore for this database
        var objectStore = db.createObjectStore("People", { keyPath: "id", autoIncrement: true });
        objectStore.createIndex("surname",  "surname",  { unique:false });
        objectStore.createIndex("forename", "forename", { unique:false });
        objectStore.createIndex("email",    "email",    { unique:true  });
    };
    
}

function addData(newPerson) {
    var transaction = db.transaction(["People"], "readwrite");
    
    transaction.oncomplete = function(event) {
        console.log("Transaction Complete")
    }
    
    transaction.onerror = function(event) {
        alert("Database error: " + event.target.errorCode);
    }
    
    var objectStore = transaction.objectStore("People");
    var request = objectStore.add(newPerson);
    request.onsuccess = function(event) {
        console.log("Data Added");
        console.log("Records added" +event.target.result);
        displayPeople();
    }
    
}

function displayPeople() {
    // get people from database
    var people = "";
    
    var objectStore = db.transaction("People").objectStore("People");
    objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
            var person = cursor.value;
            people += "<li>"+person.id+": "+person.surname+", "+person.forename+" - email: "+person.email+"</li>";
            cursor.continue();
        } else {
            document.getElementById("people").innerHTML = people;
        }
    }
}

function savePerson(event) {
    // pack data into an object
    var surname  = document.getElementById("surname").value;
    var forename = document.getElementById("forename").value;
    var email    = document.getElementById("email").value;
    
    var newPerson = {
         surname: surname,
        forename: forename,
           email: email
    }
    
    console.log(newPerson);
    
    addData(newPerson);
}