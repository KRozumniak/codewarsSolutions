//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/

function rowWeights(array){
    let firstTeam = 0;
    let secondTeam = 0;
    for (let i = 0; i < array.length; i++){
        if (i % 2 !== 0) firstTeam += array[i];
        else if (i % 2 === 0) secondTeam += array[i];
    }
    return [secondTeam, firstTeam];
}