console.log("next level")

// function calculateAge() {
//     const birthYearInput = document.getElementById("birth-year").value;
//     const currentYear = newDate().getFullYear();
//     const age = currentYear - birthYear;
//     const result = document.getElementById("ageResult").value;
//     result.innerHTML = "Du bist " + age + " Jahre alt";
// }

const Input = document.getElementById("birth-year");
const ageResult = document.getElementById("ageResult");

function calculator() {
    ageResult.innerHTML = 2023 - Input.value;
}
calculator();
