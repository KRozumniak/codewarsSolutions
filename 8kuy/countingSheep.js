//https://www.codewars.com/kata/54edbc7200b811e956000556/

const countSheeps = arrayOfSheep => {
    let count = 0;
    for (let el of arrayOfSheep){
        if (el) count++;
    }
    return count;
}