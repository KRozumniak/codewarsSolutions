// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/

function DNAStrand(dna){
  let res = '';
  for (el of dna) {
    if (el === 'A') res += 'T';
    else if (el === 'T') res += 'A';
    else if (el === 'G') res += 'C';
    else if (el === 'C') res += 'G';
  }
  return res;
}