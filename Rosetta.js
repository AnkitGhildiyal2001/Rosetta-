
let prev = "9Gods in Python";
var BikesByCompany = {
    "9 billion names of God the integer": ["9Gods in Python", "9Gods in JavaScript", "9Gods in C Language", "9Gods in C++", "9Gods in Java"],

    "99 bottles of beer": ["99 bottles of beer in Python", "99 bottles of beer in JavaScript", "99 bottles of beer in C Language", "99 bottles of beer in C++", "99 bottles of beer in Java"],

    "Almost prime": ["Almost prime in Python", "Almost prime in JavaScript", "Almost prime in C Language", "Almost prime in C++", "Almost prime in Java"],

    "Happy Numbers": ["Happy Numbers in Python", "Happy Numbers in JavaScript", "Happy Numbers in C Language", "Happy Numbers in C++", "Happy Numbers in Java"],

    "Kaprekar Numbers": ["Kaprekar Numbers in Python", "Kaprekar Numbers in JavaScript", "Kaprekar Numbers in C Language", "Kaprekar Numbers in C++", "Kaprekar Numbers in Java"],

    "LCM": ["LCM in Python", "LCM in JavaScript", "LCM in C Language", "LCM in C++", "LCM in Java"],

    "Integer sequence": ["Integer sequence in Python", "Integer sequence in JavaScript", "Integer sequence in C Language", "Integer sequence in C++", "Integer sequence in Java"],

    "Repeat string": ["Repeat string in Python", "Repeat string in JavaScript", "Repeat string in C Language", "Repeat string in C++", "Repeat string in Java"],

    "Root of polynomial": ["Root of polynomial in Python", "Root of polynomial in JavaScript", "Root of polynomial in C Language", "Root of polynomial in C++", "Root of polynomial in Java"],
    
    "Long year": ["Long year in Python", "Long year in JavaScript", "Long year in C# Language", "Long year in C++", "Long year in Java"],
}
function makeSubmenu(value) {
    if (value.length == 0) document.getElementById("BikeSelect").innerHTML = "<option></option>";

    else {
        var BikesOptions = "";
        for (BikeId in BikesByCompany[value]) {
            BikesOptions += "<option>" + BikesByCompany[value][BikeId] + "</option>";
        }
        document.getElementById("BikeSelect").innerHTML = BikesOptions;
    }
}
function removeSelected() {
    document.getElementById(prev).style.display = "none";
}
function displaySelected() {
    var Bike = document.getElementById("BikeSelect").value;

    document.getElementById(Bike).style.display = "block";
    prev = Bike;
}
function resetSelection() {
    document.getElementById("CompanySelect").selectedIndex = 0;
    document.getElementById("BikeSelect").selectedIndex = 0;
}
