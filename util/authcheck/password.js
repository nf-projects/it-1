import React from 'react'

const checkPassword = (val) => {
  if (val.length < 8) {
    return false;
  }

  //check if it contains a number
  var numbers = /\d/; //regex
  if (!numbers.test(val)) {
    return false;
  }

  //check if it contains a special character
  var special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (!special.test(val)) {
    return false;
  }

  return true;
}

export default checkPassword