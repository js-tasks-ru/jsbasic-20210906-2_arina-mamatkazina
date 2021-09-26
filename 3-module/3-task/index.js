function camelize(str) {
  return str
    .split("-")
    .map((symbol, index) =>
      index == 0 ? symbol : symbol[0].toUpperCase() + symbol.slice(1)
    )
    .join("");
}
