/**
 * Created by john on 8/23/17.
 */
// function divisors(integer) {
//     let divs=[];
//     for (let i=2;i<integer;i++)
//         if (integer%i==0) divs.push(i);
//
//
//     if (divs.length <1) return `${integer} is prime`;
//     else return divs;
//
// };

function divisors(x) {
    var result = [];
    for (var a = 2; a*a <= x; ++a) {
        if (x%a == 0) {
            var b = x/a;
            result.push(a);
            if (b != a) {
                result.push(b);
            }
        }
    }
    if (result.length == 0) {
        return x+' is prime';
    }
    // result.sort(function (a, b) {
    //     return a - b;
    // });
    return result;
};
console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));