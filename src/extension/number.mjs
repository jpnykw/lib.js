export const init = () => {
  Number.prototype.toDegree = function () {
    return this * 180 / Math.PI;
  }
  Number.prototype.toRadian = function () {
    return this * Math.PI / 180;
  }
};
