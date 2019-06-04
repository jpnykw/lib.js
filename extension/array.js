Array.prototype.last = function (status = {}) {
  const getIndex = status.index || false;
  return getIndex ? this.length - 1 : this[this.length - 1];
}

Array.prototype.random = function (status = {}) {
  const getIndex = status.index || false;
  const index = (Math.random() * this.length) >> 0;
  return getIndex ? index : this[index];
}

Array.prototype.shuffle = function (status = {}) {
  const generate = status.generate;
  const count = status.count || 10;
  const _this = [...this];

	for (let i = 0; i < count; i++) {
		let x = (Math.random() * this.length) >> 0;
		let y = (Math.random() * this.length) >> 0;

		while (x === y) {
			y = (Math.random() * this.length) >> 0;
		}

		generate ?
			[_this[x], _this[y]] = [_this[y], _this[x]] :
			[this[x], this[y]] = [this[y], this[x]];
	}

	return generate ? _this : this;
}
