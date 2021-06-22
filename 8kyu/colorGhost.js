// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a/

function ghost () {
  const arr = ["white", "yellow", "purple", "red"];
  const num = Math.floor(Math.random() * arr.length)
  const color = arr[num];
  return color;
}

class Ghost {
  constructor (){
    this.color = ghost();
  }
}