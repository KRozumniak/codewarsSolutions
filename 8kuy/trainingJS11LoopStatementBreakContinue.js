//https://www.codewars.com/kata/5721c189cdd71194c1000b9b/

function grabDoll(dolls){
    const bag = [];
    for (let i = 0; i < dolls.length; i++) {
        if (bag.length >= 3) break;
        if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
            bag.push(dolls[i]);
        } else {
            continue;
        }
    }
    return bag;
}