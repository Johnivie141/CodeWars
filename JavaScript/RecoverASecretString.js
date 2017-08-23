/**
 * Created by john on 8/5/17.
 */
var recoverSecret = function(triplets) {

    let letters=[triplets[0][0],triplets[0][1],triplets[0][2]];
// create all the letters.

    while(triplets.length>0)
    {
        for (let i=0;i<triplets.length;i++){
            let count=0;
            let pos=-1;
            for (let j=0;j<3;j++)
                if (letters.indexOf(triplets[j])!==-1) count++;
                else pos=j;
            if (count==3)
            {
                triplets.splice(i,1);
                i--;
            }
            if (count ==2)
            {
                //  gather all the new letters we can sort through
                // use every triplet for that letter to see where exactly it goes.
                let letter = triplets[i][pos];
                //check when letter comes in the beginning.
                if (pos ===0){
                    // pos occurs before other letters
                    // all we know is that pos is less than the second letter
                    if (min.hasOwnProperty(letter)){
                        if (min[letter] < letters.indexOf(triplets[i][1]) - 1)
                            min[letter]=letters.indexOf(triplets[i][1]) -1;
                    }
                    else min[letter]=letters.indexOf(triplets[i][1]) -1;
                }// end of check pos 0
                // check when letter comes in the middle
                if (pos ===1)
                {
                    if (min.hasOwnProperty(letter)){
                        if (min[letter] < letters.indexOf(triplets[i][2]) - 1)
                            min[letter]=letters.indexOf(triplets[i][2]) -1;
                    }
                    else min[letter]=letters.indexOf(triplets[i][2]) -1;

                    if (max.hasOwnProperty(letter)){
                        if (max[letter] > letters.indexOf(triplets[i][0]) + 1)
                            max[letter]=letters.indexOf(triplets[i][0]) +1;
                    }
                    else max[letter]=letters.indexOf(triplets[i][0]) +1;
                } // end pos ==1

                // checks when new letter comes last
                if (pos ===2){
                    if (max.hasOwnProperty(letter)){
                        if (max[letter] > letters.indexOf(triplets[i][2]) + 1)
                            max[letter]=letters.indexOf(triplets[i][2]) +1;
                    }
                    else max[letter]=letters.indexOf(triplets[i][2]) +1;

                } // end pos ==2 check
                // if (min <0 || max >length we can push this to the ends of the new array.


            }


            }// END of Triplets loop

        }







    }