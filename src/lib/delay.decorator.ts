
// usage: @delay()
export function Delay (milliseconds: number = 0): MethodDecorator {
  return function (target: Object, key: string, descriptor: PropertyDescriptor) {
    var original = descriptor.value
    descriptor.value = function (...args:any[]) {
      setTimeout(() => {
        original.apply(this, args)
      }, milliseconds)
    }
    return descriptor
  }
}
