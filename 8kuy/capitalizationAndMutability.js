//https://www.codewars.com/kata/595970246c9b8fa0a8000086/

function capitalizeWord(word) {
    let str = word[0].toUpperCase() + word.slice(1, word.length);
    return str;
}