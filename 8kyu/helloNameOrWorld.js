//https://www.codewars.com/kata/57e3f79c9cb119374600046b/

function hello(name) {
    if (!name) return 'Hello, World!';
    let str = name.toLowerCase();
    str = str[0].toUpperCase() + str.slice(1);
    return `Hello, ${str}!`;
}