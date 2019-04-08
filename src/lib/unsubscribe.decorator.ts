
// usage @Unsubscribe()
export function Unsubscribe (exceptions = []): ClassDecorator {
  return function (constructor: any) {
    const original = constructor.prototype.ngOnDestroy

    constructor.prototype.ngOnDestroy = function (...args: any[]) {
      for (let prop in this) {
        const property = this[prop]
        if (!exceptions[prop]) {
          if (property && (typeof property.unsubscribe === 'function')) {
            property.unsubscribe()
          }
        }
      }
      original && typeof original === 'function' && original.apply(this, args)
    }
  }
}
