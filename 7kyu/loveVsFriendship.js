//https://www.codewars.com/kata/59706036f6e5d1e22d000016/

function wordsToMarks(string){
    const str = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return string.split('').map(el => str.findIndex(letter => letter === el) + 1)
        .reduce((total, value) => total + value, 0);
}