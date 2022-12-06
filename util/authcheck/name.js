import React from 'react'

const checkName = (val) => {
  var lettersWithUmlauts = /^[A-Za-zäöüÄÖÜß]+$/; // the "+$" means "one or more of the preceding character"

  return (val.match(lettersWithUmlauts) && val.length >= 2) // also at least 2 characters long
}

export default checkName