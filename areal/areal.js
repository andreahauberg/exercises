"use strict"
// Areal Reaktangel

function udregnRektangelAreal (width, height){
    return width * height;
}

let areal = udregnRektangelAreal(10,20);
console.log(areal);

// Omregn Areal

function convertSquareMToSquareFt(m2, sq = 10.7639104) {
    return m2 * sq;
  }
  
  const arealToSquareft = convertSquareMToSquareFt(100);
  console.log(convertSquareMToSquareFt(100));