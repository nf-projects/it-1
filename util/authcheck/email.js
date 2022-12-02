import React from 'react'

const checkEmail = (val) => {
  let input = val.toLowerCase();

  // check if it ends in a tld
  let tlds = require("./tlds.json");
  if(!endsWithAny(tlds, input)) return false;

  if(!input.includes("@")) return false
  if(input.length < 6) return false //min: a@a.aa

  return true;
}

//this helper function loops through the input to check if it matches any of the TLDS in tlds.json 
function endsWithAny(suffixes, string) {
  for (let i = 0; i < suffixes.length; i++) {
    if (string.endsWith(suffixes[i])) return true;
  }
  
  return false;
}

export default checkEmail
