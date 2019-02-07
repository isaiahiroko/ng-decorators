
// usage @Log()
export function Log(exceptions: string[] = [], isProduction: boolean = false): ClassDecorator {
  return function (constructor: any) {
    if (!isProduction) {
      for(let prop in this) {
        const member = this[prop]
        if (!exceptions[prop]) {
          this[prop] = function (...args) {
            console.info(`%c ${constructor.name} - ${prop}`, `color: #4CAF50; font-weight: bold`, ...args)
            member && member.apply(this, args)
          }
        }
      }
    }
  }
}
