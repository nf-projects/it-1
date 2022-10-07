import React from 'react'

const checkEmail = (val) => {
  return (val.length > 3 && val.includes(".") && val.includes("@"))
}

export default checkEmail