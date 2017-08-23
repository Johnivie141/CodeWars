/**
 * Created by john on 8/22/17.
 */
function solve(map, miner, exit) {
    // TODO
    function subSolve(map, miner, exit, done) {
     console.log("strt");
        console.log(miner);

     console.log(map);
     console.log(done);
        done.indexOf("");
        if (miner.x === exit.x && miner.y === exit.y) {
            console.log("EXIT FOUND");
            return [];
        }
        let newDone = done.slice(0);
        let left = [];
        if (miner.x > 0 && map[miner.x-1][miner.y] !== false && done.indexOf("" +(miner.x - 1 ) + "," + miner.y) == -1) {
           console.log("LEFT");
           let keystr = "" + (miner.x -1) +"," + miner.y;
           console.log("keystr " + keystr);
           console.log(done);
           console.log("indexOf is " + done.indexOf("" +(miner.x - 1 ) + "," + miner.y) )
            newDone.push("" + (miner.x -1 ) + "," + (miner.y ));

            left = subSolve(map, {
                x: miner.x - 1,
                y: miner.y
            }, exit, newDone);
            console.log("PUSH LEFT")
            if (!left) left =[];
            else left.unshift("left");
        }

        let right = [];
        if (miner.x < map.length -1 && map[miner.x+1][miner.y] !== false && done.indexOf( "" + (miner.x +1) +"," + (miner.y)) == -1) {
            console.log("RIGHT");
            newDone.push("" + (miner.x +1) + "," + (miner.y));

            right = subSolve(map, {
                x: miner.x + 1,
                y: miner.y
            }, exit, newDone);
            console.log("PUSH RIGHT")
            if (!right) right =[];
            else right.unshift("right");

        }

        let down = [];

        if (miner.y < map[0].length -1 && map[miner.x][miner.y+1] !== false && done.indexOf("" +(miner.x ) + "," + (miner.y + 1)) == -1) {
          console.log("DOWN");
           newDone.push("" + (miner.x ) + "," + (miner.y + 1));
            down = subSolve(map, {
                x: miner.x,
                y: miner.y + 1
            }, exit, newDone);
            console.log("PUSH DOWN")
            if (!down) down =[];
            else down.unshift('down');
        }
        let up = [];
        if (miner.y > 0 && map[miner.x][miner.y-1] !== false && done.indexOf("" + (miner.x ) + "," + (miner.y - 1)) == -1) {
         console.log("UP");
            newDone.push("" + (miner.x ) + "," + (miner.y - 1));

            up = subSolve(map, {
                x: miner.x,
                y: miner.y - 1
            }, exit, newDone);
            console.log("PUSH UP");
            if (!up) up =[];
            else up.unshift("up");
        }


        if (left.length >0
            && (right.length <1 || left.length <= right.length)
            && (up.length <1 || left.length <= up.length)
            && (down.length <1 || left.length <= down.length)
        )return left;

        else if (right.length >0
            && (left.length <1 || right.length <= left.length)
            && (up.length <1 || right.length <= up.length)
            && (down.length <1 || right.length <= down.length)
        )return right;
        else if (up.length >0
            && (right.length <1 || up.length <= right.length)
            && (left.length <1 || up.length <= left.length)
            && (down.length <1 || up.length <= down.length)
        )return up;

        else if (down.length >0
            && (right.length <1 || down.length <= right.length)
            && (up.length <1 || down.length <= up.length)
            && (left.length <1 ||down.length <= left.length)
        )return down;


        else return null;


 return [];
    }
 let done=[];
    let ans = subSolve(map, miner, exit, ["" + miner.x +"," + miner.y]);

    return ans;



}



var map = [[true, true, true],
    [false, false, true],
    [true, true, true]];



let ans = solve(map,{x:0,y:0}, {x:2,y:0});
console.log("final ans")
console.log(ans);