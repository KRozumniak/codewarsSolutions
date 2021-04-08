// https://www.codewars.com/kata/582e0e592029ea10530009ce/

function duckDuckGoose(players, goose) {
  while (players.length < goose) {
    goose = goose - players.length
  }
  return players[goose - 1].name
}