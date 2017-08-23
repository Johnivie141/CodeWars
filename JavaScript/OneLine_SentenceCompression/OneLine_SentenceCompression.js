/**
 * Created by john on 7/27/17.
 */
sentenceCompression=s=>s.replace(/\W|\d/g,'');



// removes non letter characters from string
// remember comments must be removed to get below 47 characters.'


function palindrome(number,charset){
    var buf=[];
    while(number/2 >=1){

        var index = Math.floor(number/2) -1;
        console.log("index " +index);
        var value=charset[index];
        buf.push(value);
console.log(value);
        number-=2;
        console.log("number loop " +number);
    }
    var result;
    console.log("number now "+ number);
    if (number >0)
       result=buf.join('') + charset[0] + buf.reverse().join('');
    else
        result = buf.join('') + buf.reverse().join('');

    console.log("result " +result);
    return result;

}

// we know that the palindrome will use all the characters
therefore all the characters except the last one will be in the string
// valid palindrome would be [] + Unknown  + [].reverse()
// if n = 2*(s-1) +1 => [-1] +[0] + [-1]
if n >2*(s-1) then => [-1]  FILL (char[0])(n - 2*(s-1)) + [-1].reverse

//palindrome=(n,c)=>c.reduce((y,x)=>!n%2&&?x+y+x);

var ans=palindrome(2,['a','b']);
//console.log(ans);
