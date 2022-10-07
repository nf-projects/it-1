import React from 'react'

const checkEmail = (val) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
    // I stole this code from https://www.w3resource.com/javascript/form/email-validation.php
    return (true)
  } else {
    return (false)
  }
}

export default checkEmail