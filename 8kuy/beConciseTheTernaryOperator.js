// https://www.codewars.com/kata/56f3f6a82010832b02000f38/solutions/javascript

const describeAge = age => {
    let x = age <= 12 ? "kid" : age <= 17 ? "teenager" : age <= 64 ? "adult" : "elderly";
    return `You're a(n) ${x}`;
}