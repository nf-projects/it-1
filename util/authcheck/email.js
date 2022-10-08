import React from 'react'

// I stole this code from https://www.w3resource.com/javascript/form/email-validation.php
// This function is not currently used because it's "cheating"
const checkEmailRegex = (val) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
    return (true)
  } else {
    return (false)
  }
}

const checkEmail = (val) => {
  let input = val.toLowerCase();

  // check if it ends in a tld
  let tlds = require("./tlds.json");
  if(!endsWithAny(tlds, input)) {
    return false
  }

  if(!input.includes("@")) return false
  if(input.length < 5) return false //min: a@a.a

  // if no "anti requirements" are met, email is valid
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