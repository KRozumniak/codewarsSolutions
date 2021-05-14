// https://www.codewars.com/kata/5bf774a81505a7413400006a/

function fix(paragraph){
  return paragraph.slice(0, 1).toUpperCase() + paragraph
    .replace(/\. \w/g, v => v.toUpperCase()).slice(1)
}