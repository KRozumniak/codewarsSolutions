//https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/

function elevator(left, right, call){
    let lftCall = Math.abs(call - left);
    let rgtCall = Math.abs(call - right);
    return (lftCall >= rgtCall) ? 'right' : 'left';
}