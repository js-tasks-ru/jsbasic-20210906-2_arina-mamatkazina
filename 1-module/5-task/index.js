function truncate(str, maxlength) {
  let s2 = str;
  if (str.length > maxlength) {
    s2 = str.slice(0, maxlength - 1) + "…";
  }
  return s2;
}
