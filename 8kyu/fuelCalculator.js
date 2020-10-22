//https://www.codewars.com/kata/57b58827d2a31c57720012e8/

//Fuel Calculator
function fuelPrice(litres, pricePerLiter) {
    if (litres > 0 && litres < 2) {
        return +((litres * pricePerLiter).toFixed(2));
    } else if (litres >= 2 && litres < 4) {
        return +((litres * (pricePerLiter - 0.05)).toFixed(2));
    } else if (litres >= 4 && litres < 6) {
        return +((litres * (pricePerLiter - 0.1)).toFixed(2));
    } else if (litres >= 6 && litres < 8) {
        return +((litres * (pricePerLiter - 0.15)).toFixed(2));
    } else if (litres >= 8 && litres < 10) {
        return +((litres * (pricePerLiter - 0.2)).toFixed(2));
    } else if (litres >= 10) {
        return +((litres * (pricePerLiter - 0.25)).toFixed(2));
    }
}