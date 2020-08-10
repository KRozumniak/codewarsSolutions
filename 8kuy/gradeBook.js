// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/

function getGrade (s1, s2, s3) {
    let mean = Math.floor((s1 + s2 + s3) / 3);
    if (90 <= mean && mean <= 100) return 'A';
    else if (80 <= mean && mean < 90) return 'B';
    else if (70 <= mean && mean < 80) return 'C';
    else if (60 <= mean && mean < 70) return 'D';
    else return 'F';
}