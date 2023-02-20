console.log("still hustling")



const first = document.getElementById("firstPerson");
const second = document.getElementById("secondPerson");
const result = document.getElementById("result");
// document.getElementById("result").innerHTML = result;


function calculator() {
    result.innerHTML = "Die Differenz ist " + (first.value - second.value);
}
calculator()

