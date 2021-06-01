// https://www.codewars.com/kata/57ed4cef7b45ef8774000014/

function boredom(staff){
  const obj = {
    'accounts': 1,
    'finance': 2,
    'canteen': 10,
    'regulation': 3,
    'trading': 6,
    'change': 6,
    'IS': 8,
    'retail': 5,
    'cleaning': 4,
    'pissing about': 25,
  }
  let res = 0;
  const arr = Object.values(staff);
  for (let key in obj) {
    arr.forEach(el => {
      if (key === el) res += obj[key];
    })
  }
  if (res <= 80) return `kill me now`;
  else if (100 > res && res > 80) return 'i can handle this';
  else if (100 < res) return 'party time!!';
}