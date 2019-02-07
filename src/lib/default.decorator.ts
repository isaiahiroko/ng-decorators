/**
 * Default
 * Merges a component external input value with the one internally defined
 * Place after @Input() not before!
 * @param defaultValue 
 */
export function Default (defaultValue: any) {
  return function (target, key) {
    let value = target[key]

    //make use of the default value if no value provided
    // value = (value) ? value : defaultValue
    switch (typeof value) {
      //object and array
      case 'object':
        value = Array.isArray(value) ? [...defaultValue, ...value] :  {...defaultValue, ...value}
        break;
    
      //undefined, boolean, string, number, function, symbol
      default:
        break;
    }
    if (delete target[key]) {
      Object.defineProperty(target, key, { ...Object.getOwnPropertyDescriptor(target, key), ...{
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      }});
    }
  }
}
