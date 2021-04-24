// https://www.codewars.com/kata/5b16490986b6d336c900007d/

function myLanguages(results) {
  return Object.keys(results)
    .filter(el => results[el] >= 60)
    .sort((a, b) => results[b] - results[a]);
}