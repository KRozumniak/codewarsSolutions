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