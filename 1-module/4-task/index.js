function checkSpam(str) {
  str = str.toUpperCase();
  if(str.indexOf('1XBET') !== -1 || str.indexOf('XXX') !== -1)
  {
    return true;
  }
  return false;
}
