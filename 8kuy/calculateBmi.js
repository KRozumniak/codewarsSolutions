//https://www.codewars.com/kata/57a429e253ba3381850000fb/
//Calculate BMI

function bmi(weight, height) {
    let grade = weight / height ** 2;
    if (grade <= 18.5) return "Underweight";
    else if (grade > 18.5 && grade <= 25) return "Normal";
    else if (grade > 25 && grade <= 30) return "Overweight";
    else return "Obese";
    return ;
}