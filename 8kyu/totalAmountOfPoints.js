//https://www.codewars.com/kata/5bb904724c47249b10000131/

function points(games) {
    let point = 0;
    for (let el of games){
        if (el[0] > el[2]) point += 3;
        else if (el[0] === el[2]) point += 1;
    }
    return point;
}