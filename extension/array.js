Array.prototype.last = function (getIndex) {
  return getIndex ? this.length - 1 : this[this.length - 1];
}

Array.prototype.random = function (getIndex) {
  const index = (Math.random() * this.length) >> 0;
  return getIndex ? index : this[index];
}
