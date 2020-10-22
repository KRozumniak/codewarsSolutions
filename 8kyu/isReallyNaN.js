//https://www.codewars.com/kata/56c24c58e0c0f741d4001aef/

const isReallyNaN = (val) => {
    return isNaN(val) && Number.isNaN(val);
};