Array.prototype.random = function (getIndex) {
  const index = (Math.random() * this.length) >> 0;
  return getIndex ? index : this[index];
}
