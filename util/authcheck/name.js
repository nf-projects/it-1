import React from 'react'

const checkName = (val) => {

  if(val.length < 2) { return false; }

  // first char must be uppercase
  if(val[0] == val[0].toLowerCase()) { return false; } 

  return true;
}

export default checkName