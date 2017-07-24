/**
 * Created by john on 7/23/17.
 */
/*Let's define increasing numbers as the numbers whose digits, read from left to right, are never less than the previous ones: 234559 is an example of increasing number.

 Conversely, decreasing numbers have all the digits read from left to right so that no digits is bigger than the previous one: 97732 is an example of decreasing number.

 You do not need to be the next Gauss to figure that all numbers with 1 or 2 digits are either increasing or decreasing: 00, 01, 02, ..., 98, 99 are all belonging to one of this categories (if not both, like 22 or 55): 101 is indeed the first number which does NOT fall into either of the categories. Same goes for all the numbers up to 109, while 110 is again a decreasing number.

 Now your task is rather easy to declare (a bit less to perform): you have to build a function to return the total occurrences of all the increasing or decreasing numbers below 10 raised to the xth power (x will always be >= 0).

 To give you a starting point, there are a grand total of increasing and decreasing numbers as shown in the table:

 */
var incHash = {};
var decHash = {};

function totalIncDec(x) {


    if (x <= 0) return 1;

    var sum = 1;

    for (var length = 1; length <= x; length++) {

        for (var i = 1; i <= 9; i++) {

            sum += IncNumbers(length, i);

            sum += DecNumbers(length, i);
        }
    }

    console.log("sum total now " +sum);

    if (x > 0)
        sum -= 9 * (x);

    return sum;




}


function IncNumbers(length,digit){

    if (length===1){
      return 1;
    }

    var lenkey=length;
    lenkey--;

    var total=0;
    if (incHash.hasOwnProperty(digit +"-" + lenkey   )){
        return incHash[digit +"-" + lenkey ];

    }

    for (var j=digit;j<=9;j++){
        total+=IncNumbers(length -1,j);
    }
    incHash[digit +"-" + lenkey]=total;

    return total;
}


function DecNumbers(length,digit){


    if (length===1) return 1;

    var lenkey=length;
    lenkey--;
    if (decHash.hasOwnProperty(digit +"-" + lenkey)){

        return decHash[digit +"-" + lenkey];
    }
    var total=0;
    for (var j=digit;j>=0;j--)
    {

        total+=DecNumbers(length -1,j);


    }

    decHash[digit +"-" + lenkey]=total;
    return total;


}







var ans=totalIncDec(3);
console.log(ans);

100
110
111
