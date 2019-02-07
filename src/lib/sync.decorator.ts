
// usage @Sync()
export function Sync (constructor): ClassDecorator {
  return null

  // const original = constructor.prototype.ngOnDestroy;

  // constructor.prototype.ngOnDestroy = function () {
  //   for ( let prop in this ) {
  //     const property = this[ prop ];
  //     if ( property && (typeof property.unsubscribe === "function") ) {
  //       property.unsubscribe();
  //     }
  //   }
  //   original && typeof original === "function" && original.apply(this, arguments);
  // };
}
