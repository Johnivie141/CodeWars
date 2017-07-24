/**
 * Created by john on 7/23/17.
 */
/*
 A format for expressing an ordered list of integers is to use a comma separated list of either

 individual integers
 or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
 Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

 */

/*
 solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
 // returns "-6,-3-1,3-5,7-11,14,15,17-20"
 */


function solution(list){
    // TODO: complete solution
    var rangeList=[];
    var start=list[0];
    var end=list[0];
 for (var i=1;i<list.length;i++){
     if (list[i] > end+1){
         //Output Current Range
         if (end > start){
             if (end > start +1)
               rangeList.push(start + "-" + end);
             else {
                 rangeList.push(start);
                 rangeList.push(end);
             }
         }
         else{
             rangeList.push(start);
         }
         start = list[i];
         end=list[i];
     }
     else{
         end=list[i];

     }

 }
 if ( end > start){
     if (end > start +1)
         rangeList.push(start + "-" + end);
     else {
         rangeList.push(start);
         rangeList.push(end);
     }
 }
 else{
      rangeList.push(start);
 }
 return rangeList.join(",");


}

var ans=solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
console.log(ans);