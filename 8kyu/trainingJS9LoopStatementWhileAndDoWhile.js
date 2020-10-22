//https://www.codewars.com/kata/57216d4bcdd71175d6000560/

function padIt(str,n){
    let i = 1;
    do {
        i++;
        if (i % 2 !== 0) {
            str += '*';
        } else if (i % 2 === 0) {
            str = '*' + str;
        }
    } while (i <= n);
    return str;
}