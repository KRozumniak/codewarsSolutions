//https://www.codewars.com/kata/58acfe4ae0201e1708000075/

function inviteMoreWomen(L) {
    let sumOfW = 0;
    let sumOfM = 0;
    for (let el of L){
        if (el > 0) sumOfM++;
        else sumOfW++;
    }
    return (sumOfW < sumOfM);
}