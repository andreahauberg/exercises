"use strict";

function momsBeregner (beloeb, moms = 25) {
    console.log(beloeb + (beloeb * moms) / 100);
}

momsBeregner(100);

//     Lav en funktion der modtager to argumenter, beloeb og moms. Funktionen skal console.logge beløbet med momsen lagt til. (moms er i procent)
// Lav moms som et default parameter sat til 25.

// function values(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// values(1,2,3);