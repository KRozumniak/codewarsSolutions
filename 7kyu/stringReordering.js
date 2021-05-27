// https://www.codewars.com/kata/5b047875de4c7f9af800011b/

const sentence = list => (
  list
    .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
    .map(obj => Object.values(obj)[0])
    .join(' ')
);