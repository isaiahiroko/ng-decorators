// usage: @Tick()
export function Tick (milliseconds: number = 100): MethodDecorator {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value
    descriptor.value = function (...args) {
      setInterval(() => {
        original.apply(this, args)
      }, milliseconds)
    }
    return descriptor
  }
}
