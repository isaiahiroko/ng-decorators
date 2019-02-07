
// usage @Unsubscribe()
export function Unsubscribe (exceptions = []) {
  return function (constructor) {
    const original = constructor.prototype.ngOnDestroy

    constructor.prototype.ngOnDestroy = function () {
      for (let prop in this) {
        const property = this[prop]
        if (!exceptions[prop]) {
          if (property && (typeof property.unsubscribe === 'function')) {
            property.unsubscribe()
          }
        }
      }
      original && typeof original === 'function' && original.apply(this, arguments)
    }
  }
}
