/**
 * Created by john on 8/21/17.
 */
function gap(g, m, n) {
    // your code

    let arr= new Array(n-m +2);
    for (let i=m;i<=n;i++)
        if ( i%2===0 && i!==2){
          arr[i-m]=true;

        }
    for (let p=3;p*p<=n;p+=2)
        for (let i=m<p*p?p*p-1:m;i<=n;i++)
            if (i % p === 0 && i!==p)
                arr[i - m] = true;



    for (i=m;i<n;i++)
        if (!arr[i-m]) // if this is prime
            for(j=i+1;j<=n;j++)
                if (!arr[j-m]) { // count up to next prime
                    if (j - i === g) // if this fulfills the gap requirement return it
                        return [i, j]
                    else {
                        i=j-1;
                        break;
                    }
                }
return null;
}


ans=gap(2,10000000,11000000);

console.log(ans);