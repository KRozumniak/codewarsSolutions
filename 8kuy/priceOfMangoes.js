//https://www.codewars.com/kata/57a77726bb9944d000000b06/

const mango = (q, price) => {
    return (q - Math.floor(q / 3)) * price;
}