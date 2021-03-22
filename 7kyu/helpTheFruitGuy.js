// https://www.codewars.com/kata/557af4c6169ac832300000ba/

function removeRotten(bagOfFruits){
  if (!bagOfFruits) return [];
  const fruits = bagOfFruits.map(el => el.replace('rotten', '').toLowerCase());
  return fruits;
}