// https://www.codewars.com/kata/5b358a1e228d316283001892/

function getStrings(city){
  city = city.toLowerCase().replace(/[^a-z]/gi, "")
  const arr = [...new Set(city)]
  return arr.map(el => {
    const l = city.length;
    const count = city.replace(new RegExp(`${el}`,'g'), "").length
    return `${el}:`+'*'.repeat(l-count)
  }).join`,`;
}