// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/

function outed(meet, boss){
  return (Object.values(meet).reduce((a, b) => (a + b), 0) + (meet[boss]))
  / (Object.values(meet).length) > 5 ? 'Nice Work Champ!' : 'Get Out Now!';
}