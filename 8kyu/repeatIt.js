//https://www.codewars.com/kata/557af9418895e44de7000053/

const repeatIt = (str, n) => {
    if (typeof str !== "string") return "Not a string";

    return str.repeat(n);
}