/**
 * Created by john on 7/23/17.
 */
/*Make a program that filters a list of strings and returns a list with only your friends name in it.

 If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!

 Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] */


/*
Test.assertSimilar(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
*/


function friend(friends){
    //your code here

    return friends.filter((name) =>{
        return name.length==4;
    });


}

var ans=friend(["Ryan", "Kieran", "Mark"]);

console.log(ans);