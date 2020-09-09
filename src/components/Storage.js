Storage.prototype.getItemByName = function (name) {
  return JSON.parse(this.getItem(name))
}
Storage.prototype.setItemByName = function (name, payload) {
  this.setItem(name, JSON.stringify(payload))
}
