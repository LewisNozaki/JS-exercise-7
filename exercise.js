"use strict";

// Solution 1
const isValidWalk = walk => {
  let myObj = new Object();
  myObj.n = 0;
  myObj.s = 0;
  myObj.e = 0;
  myObj.w = 0;
  
  if (walk.length !== 10) {
    return false;
  } else {
    for (let i = 0; i < walk.length; i++) {
      if (myObj.hasOwnProperty(walk[i])) {
        myObj[walk[i]] += 1;
      }
    }

    if (myObj["n"] - myObj["s"] === 0 && 
        myObj["w"] - myObj["e"] === 0) {
      return true;
    } else {
      return false;
    }
  }
};

// Solution 2
function isValidWalk(walk) {
  var dx = 0;
  var dy = 0;
  var dt = walk.length;
  
  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  };
  
  return dt === 10 && dx === 0 && dy === 0;
};