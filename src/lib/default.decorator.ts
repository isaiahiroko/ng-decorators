/**
 * Default
 * Merges a component external input value with the one internally defined
 * Place after @Input() not before!
 * @param defaultValue 
 */
export function Default (defaultValue: any): PropertyDecorator {
  return function (target: Object, key: string) {
    let value = target[key]

    //make use of the default value if no value provided
    switch (typeof value) {
      //object and array
      case 'object':
        value = Array.isArray(value) ? [...defaultValue, ...value] :  {...defaultValue, ...value}
        break;
    
      //undefined
      case 'undefined':
        value = defaultValue
        break;
    
      //boolean, string, number, function, symbol
      default:
        value = value
        break;
    }

    if (delete target[key]) {
      Object.defineProperty(
        target, 
        key, 
        { 
          ...Object.getOwnPropertyDescriptor(target, key), 
          ...{
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          }
        }
      );
    }
  }
}
