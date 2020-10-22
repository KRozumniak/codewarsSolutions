//https://www.codewars.com/kata/5865cff66b5699883f0001aa/

function toTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let theTime = Math.floor(minutes - hours * 60);
    return `${hours} hour(s) and ${theTime} minute(s)`;
}