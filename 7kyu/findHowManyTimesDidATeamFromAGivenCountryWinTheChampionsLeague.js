// https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9/

function countWins(winnerList, country) {
  let count = 0;
  winnerList.forEach(winner => {
    if (winner.country === country) count++;
  })
  return count;
}