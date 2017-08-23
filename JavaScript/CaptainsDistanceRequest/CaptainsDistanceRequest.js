/**
 * Created by john on 7/24/17.
 */
/*Ahoi!
 We are on a big sailing boat off the coast of Croatia. The captain, by the name of Haversine, wants you to help him out: "Arrr, we need to know the distance between these two points on the map, so I know how long we need to wait before we get to our beloved treasure!". As this is the fourth of such requests by your captain, you decide to write a function to calculate the distance between two coordinates.

 Complete the function so it returns the distance between two given coordinates. Examples of given coordinates are:

 48° 12′ 30″ N, 16° 22′ 23″ E
 23° 33′ 0″ S, 46° 38′ 0″ W
 58° 18′ 0″ N, 134° 25′ 0″ W
 33° 51′ 35″ S, 151° 12′ 40″ E

 The returned distance should be in kilometers.
 We think about the earth as a sphere with radius 6371 km.
 As our captain has a good binocular and the fact, that we are lazy, we don't take precision too serious. So it is sufficient for the result to be precise to 10 km. Round to the lower 10 km. So 6387 becomes 6380, 643 becomes 640 and 18299 becomes 18290.
 You can expect the delivered coordinates to be valid.
 The characters for minutes (′) and seconds (″) are not standard quotation marks. If you experience any encoding/escaping issues, you can get them as follows:

 unescape("%B0"); // °
 unescape("%u2032"); // ′
 unescape("%u2033"); // ″


 Examples of inputs and the expected outputs:

 distance("48° 12′ 30″ N, 16° 22′ 23″ E", "23° 33′ 0″ S, 46° 38′ 0″ W");
 // Returns 10130
 distance("48° 12′ 30″ N, 16° 22′ 23″ E", "58° 18′ 0″ N, 134° 25′ 0″ W");
 // Returns 7870
 distance("48° 12′ 30″ N, 16° 22′ 23″ E", "48° 12′ 30″ N, 16° 22′ 23″ E");
 // Returns 0

 As you try and try and just don't seem to be able to find the solution, the ship's first mate, an old white bearded man gives you a small hint: "There are many ways to tackle the problem. Guess which one's the captain's favourite! His name was not given to him by accident!"

 Good luck, navigator!*/



function getRadians(coord){


    // coordinate pattern 48° 12′ 30″ N, 16° 22′ 23″ E
    /*unescape("%B0"); // °
     unescape("%u2032"); // ′
     unescape("%u2033"); // ″

     */
    // split coord into Direction/Minus/Degree/Minute/Second


    //North and East are positive degrees
    // Negative Degrees are South and West Degrees.
    // latitude degrees are 90 based
    // x degrees N latitude is dependant on longitude
    //  case lat N long E  degrees
    //  case lat N long W  180 - degrees
    // case lat S long E 360 - degrees
    // case lat S long W 270 - degrees






}


// complete the function to calculate the distance between two coordinates.
// Input: the two coordinates
// Output: return the distance in kilometers
function distance(coord1, coord2) {
//DD = d + (min/60) + (sec/3600)
    var lat1,lat2,lon1,lon2;
    var coord1Array=coord1.split(',');
    var coord2Array=coord2.split(',');
    lat1=coord1Array[0];
    lat2=coord2Array[0];
    lon1=coord1Array[1];
    lon2=coord2Array[1];

    var R = 6371e3; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2-lat1).toRadians();
    var Δλ = (lon2-lon1).toRadians();

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;

    return d;
}







