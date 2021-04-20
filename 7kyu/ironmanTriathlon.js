// https://www.codewars.com/kata/57d001b405c186ccb6000304/

function iTri(s){
  const distance = 140.6;
  if (s == 0) return 'Starting Line... Good Luck!';
  if (s <= 2.4) return {'Swim':`${(distance - s).toFixed(2)} to go!`};
  if (s <= 114.4) return {'Bike':`${(distance - s).toFixed(2)} to go!`};
  if (s <= 130.6) return {'Run':`${(distance - s).toFixed(2)} to go!`};
  if (s <= 140.6) return {'Run':'Nearly there!'};
  return "You're done! Stop running!"
}