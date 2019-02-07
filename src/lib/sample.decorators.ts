// // declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;

// // declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;

// // declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;

// // declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;

// function logClass(target: any) {

//     // save a reference to the original constructor
//     var original = target;
  
//     // a utility function to generate instances of a class
//     function construct(constructor, args) {
//       var c : any = function () {
//         return constructor.apply(this, args);
//       }
//       c.prototype = constructor.prototype;
//       return new c();
//     }
  
//     // the new constructor behaviour
//     var f : any = function (...args) {
//       console.log("New: " + original.name); 
//       return construct(original, args);
//     }
  
//     // copy prototype so intanceof operator still works
//     f.prototype = original.prototype;
  
//     // return new constructor (will override original)
//     return f;
//   }

//   function logProperty(target: any, key: string) {

//     // property value
//     var _val = this[key];
  
//     // property getter
//     var getter = function () {
//       console.log(`Get: ${key} => ${_val}`);
//       return _val;
//     };
  
//     // property setter
//     var setter = function (newVal) {
//       console.log(`Set: ${key} => ${newVal}`);
//       _val = newVal;
//     };
  
//     // Delete property.
//     if (delete this[key]) {
  
//       // Create new property with getter and setter
//       Object.defineProperty(target, key, {
//         get: getter,
//         set: setter,
//         enumerable: true,
//         configurable: true
//       });
//     }
//   }

// function logMethod(target: Function, key: string, descriptor: any) {

//     // save a reference to the original method
//     // this way we keep the values currently in the 
//     // descriptor and don't overwrite what another 
//     // decorator might have done to the descriptor.
//     var originalMethod = descriptor.value; 
  
//     //editing the descriptor/value parameter
//     descriptor.value =  function (...args: any[]) {
//         var a = args.map(a => JSON.stringify(a)).join();
//         // note usage of originalMethod here
//         var result = originalMethod.apply(this, args);
//         var r = JSON.stringify(result);
//         console.log(`Call: ${key}(${a}) => ${r}`);
//         return result;
//     }
  
//     // return edited descriptor as opposed to overwriting 
//     // the descriptor by returning a new descriptor
//     return descriptor;
//   }

//   function logParameter(target: any, key : string, index : number) {
//     var metadataKey = `log_${key}_parameters`;
//     if (Array.isArray(target[metadataKey])) {
//       target[metadataKey].push(index);
//     }
//     else { 
//       target[metadataKey] = [index];
//     }
//   }

//   class Person { 

//     public name: string;
//     public surname: string;
  
//     constructor(name : string, surname : string) { 
//       this.name = name;
//       this.surname = surname;
//     }
  
//     @logMethod
//     public saySomething(@logParameter something : string) : string { 
//       return this.name + " " + this.surname + " says: " + something; 
//     }
//   }
  
//   function logMethod(target: Function, key: string, descriptor: any) {
//     var originalMethod = descriptor.value;
//     descriptor.value = function (...args: any[]) {
  
//       var metadataKey = `__log_${key}_parameters`;
//       var indices = target[metadataKey];
  
//       if (Array.isArray(indices)) { 
  
//         for (var i = 0; i < args.length; i++) { 
  
//           if (indices.indexOf(i) !== -1) { 
  
//             var arg = args[i];
//             var argStr = JSON.stringify(arg) || arg.toString();
//             console.log(`${key} arg[${i}]: ${argStr}`);
//           }
//         }
//         var result = originalMethod.apply(this, args);
//         return result;
//       }
//       else {
  
//         var a = args.map(a => (JSON.stringify(a) || a.toString())).join();
//         var result = originalMethod.apply(this, args);
//         var r = JSON.stringify(result);
//         console.log(`Call: ${key}(${a}) => ${r}`);
//         return result;
//       }
//     }
//     return descriptor;
//   }

// //   Facorty
// function logClassWithArgs(filter: Object) {
//     return (target: Object) => {
//         // implement class decorator here, the class decorator 
//         // will have access to the decorator arguments (filter) 
//         // because they are  stored in a closure 
//     }
// }
//   function log(...args : any[]) {
//     switch(args.length) {
//       case 1:
//         return logClass.apply(this, args);
//       case 2:
//         return logProperty.apply(this, args);
//       case 3:
//         if(typeof args[2] === "number") {
//           return logParameter.apply(this, args);
//         }
//         return logMethod.apply(this, args);
//       default:
//         throw new Error("Decorators are not valid here!");
//     }
//   }