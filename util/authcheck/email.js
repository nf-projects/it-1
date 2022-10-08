import React from 'react'

const checkEmailRegex = (val) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
    // I stole this code from https://www.w3resource.com/javascript/form/email-validation.php
    return (true)
  } else {
    return (false)
  }
}

const checkEmail = (val) => {
  let input = val.toLowerCase()
  
}

export default checkEmail