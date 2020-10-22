

//https://www.codewars.com/kata/56530b444e831334c0000020/
// Determine offspring sex based on genes XX and XY chromosomes

function chromosomeCheck(sperm) {
    if (sperm === 'XY') return "Congratulations! You're going to have a son.";
    else return "Congratulations! You're going to have a daughter.";
}

//https://www.codewars.com/kata/57158fb92ad763bb180004e7/
//Fix your code before the garden dies!
function rainAmount(mm){
    if (mm < 40) {
        return "You need to give your plant " + (40 - mm) + "mm of water";
    } else {
        return "Your plant has had more than enough water for today!";
    }
}


//https://www.codewars.com/kata/574b3b1599d8f897470018f6/
// What's the real floor?
function getRealFloor(n) {
    if (n < 0 || n === 0) return n;
    else if (n === 15) return 13;
    else if (n > 0 && n < 13) return n - 1;
    else return n - 2;
}


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




//https://www.codewars.com/kata/57e921d8b36340f1fd000059/solutions/javascript
//Holiday VI - Shark Pontoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let sharkTime = sharkDistance / sharkSpeed;
    let myTime = pontoonDistance / youSpeed;
    if (dolphin) {
        sharkTime = sharkDistance / (sharkSpeed / 2);
    }
    if (sharkTime > myTime) return "Alive!";
    else return "Shark Bait!";
}


//https://www.codewars.com/kata/580a094553bd9ec5d800007d/
//Alan Partridge II - Apple Turnover
function apple(x){
    if ((x ** 2) > 1000) return "It's hotter than the sun!!";
    else return "Help yourself to a honeycomb Yorkie for the glovebox.";
}


//Simple multiplication
//https://www.codewars.com/kata/583710ccaa6717322c000105/solutions/javascript
function simpleMultiplication(number) {
    return number % 2? number * 9 : number * 8;
}

//https://www.codewars.com/kata/5ab6538b379d20ad880000ab/
//Area or Perimeter
const areaOrPerimeter = function(l , w) {
    if (l === w) return l * w;
    else return (l + w) * 2;
};
