import { timeout } from "q";

// usage: @Tick()
export function Tick (interval: number = 100, limit: number = 100): MethodDecorator {
  let timer: any = null
  return function (target: Object, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value
    descriptor.value = function (...args: any[]) {
      timer = setInterval((limit) => {
        if(limit >= interval){
          limit -= interval
          original.apply(this, args)
        } else{
          timer && timer.clear()
        }
      }, interval, limit)
    }
    return descriptor
  }
}
