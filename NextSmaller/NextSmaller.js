/**
 * Created by john on 7/28/17.
 */

/*
 Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.
 */
function nextSmaller(n) {
    var numArray=n.toString().split('');

    for (var i=numArray.length -2;i>=0;i--)
    {
        for (var j=i+1;j<numArray.length;j++)
            if (numArray[j]< numArray[i]){
             // we have found our swap point

                console.log("found smaller from " +i + " to "  +j);
             var max=0;
             var swap=j;
             for (var k=j;k<numArray.length;k++) {
                 if (Number(numArray[k] > max)) {
                     max = Number(numArray[k]);
                     swap = k;
                 }

             }

                var tmp = numArray[swap];
                numArray[swap]=numArray[i];
                numArray[i]=tmp;

                return Number(numArray.slice(0,i+1).join('') + Number(numArray.slice(i+1).sort(function(a,b){return b>a;}).join('')));
            }

    }
    return null;

}
/*

1027
=> 0127


*/

var ans=nextSmaller(1027);
console.log(ans);