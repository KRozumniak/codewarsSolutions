//https://www.codewars.com/kata/581fc49b55c3d2d83c0000f8/

function array_diff_very_fast(a, b) {
    let filteredArray = b.filter(function(el, i){
        return b.indexOf(el) === i;
    });
    return a.filter(el => !filteredArray.includes(el));
}