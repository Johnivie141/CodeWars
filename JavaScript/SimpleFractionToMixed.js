/**
 * Created by john on 8/5/17.
 */

function mixedFraction(s){
    console.log("s is " + s);
    return s.replace(/([\+\-]?) *([0-9]+) *\/ *([0-9]+)/,function(match,sign,numerator,denominator){

        let commonfactors=[];

        let wholenumber=Math.floor(numerator/denominator);
        numerator-=wholenumber * denominator;
        for (let i=2;i<= numerator && i <=denominator;i++)
        {
            while(numerator%i==0 && denominator%i==0){
                numerator/=i ;
                denominator/=i;
            }
        }
        var ans;
        var fraction = "";
        if (numerator==0) fraction="";
        else fraction = numerator + '/' + denominator;

        if (wholenumber)
            wholenumber=wholenumber + " ";
        else wholenumber="";

        ans= sign +wholenumber + fraction;


        console.log("ans " + ans);
        return ans;
    })
}

var ans=mixedFraction("6/3");
console.log(typeof ans);