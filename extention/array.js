Array.prototype.random = function (isIndex) {
  const index = (Math.random() * this.length) >> 0;
  return isIndex ? index : this[index];
}
