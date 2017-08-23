/**
 * Created by john on 7/28/17.
 */
/*
A perfect power is a classification of positive integers:

    In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.
    Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with m^k = n as a proof. Otherwise return Nothing, Nil, null, None or your language's equivalent.

Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.
*/


var isPP = function(n){


    for (var i=2;i*i<=n;i++){
        var m=n;
        var power=0;
        if (m%i===0)
            while (m>1){
            m/=i;
            power++;
            }
        if (m===1) return [i,power] ;
    }

    return null; // fix me
}

var ans=isPP(9);
console.log(ans);