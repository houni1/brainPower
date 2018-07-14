const checkMobile = function (str) {
  return /^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))\d{8}$/.test(str)
}

export default {
  checkMobile: checkMobile
}
