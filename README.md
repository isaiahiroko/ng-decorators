# NG Decorators

A collection of common decorators for use in angular applications.

+ @Default()
+ @Delay()
+ @Log()
+ @Tick()
+ @Track()
+ @Unsubscribe()

## Install

Run `npm install isaiahiroko/ng-decorators --save`

### @Default()

A Property Decorator, designed to be a companion of the popular angular @Input() decorator.

```
import { Default } from 'isaiahiroko/ng-decorators'

@Component({...})
class SampleComponent {

    // if color is not define, it gets a value of #AABBCC
    @Input() @Default('#AABBCC') color: string
    
    // if property is not defined, it gets the Object defined here
    // if property is defined, it is merge with the object defined here, 
    // with the former having a higher precedence
    @Input() @Default({
        name: '...',
        desc: '...',
        width: '50px',
        height: '100px',
    }) property: Object
    
    ...
}

```

### @Delay()
@Delay is a Method Decorator that that delays the execution of a method by an amount ot time when called.

```
import { Delay } from 'isaiahiroko/ng-decorators'

class SampleClass {

    ...

    // This method won't be executed until after 1000miliseconds anytime it is called
    @Delay(1000)
    public DoSomething(){ 
        console.log('I had a little delay...but here I am')
    }

    ...
}

```

### @Log()
@Log is a Class Decorator that logs (in console)  every actvity of the class .

```
import { Log } from 'isaiahiroko/ng-decorators'

// this decorator woudld log infomartion about Sit, Walk, Stand methods
// anything they are called

@Log()
class SampleClass {

    public Sit(){ 
        
    }

    public Walk(){ 
        
    }

    public Stand(){ 
        
    }
}
```

### @Tick()
@Tick is a Method Decorator that calls the corresponding method after every `interval` until a `limit` is reached. The first call to the method commences the process.

```
import { Delay } from 'isaiahiroko/ng-decorators'

class SampleClass {

    ...

    // After the first call,
    // `DoSomething` would be called every 1000ms for the next 5000ms.
    @Tick(1000, 5000)
    public DoSomething(){ 
        console.log('wait for me...i would be back soon...')
    }

    ...
}

```

### @Track()
[TODO]

### @Unsubscribe()
@Unsubscribe is a Class Decorator that unsubscribes existing subscriptions attached to a @Components before it is destroyed.

```
import { Delay } from 'isaiahiroko/ng-decorators'
import { Subscription } from 'rxjs'

@Unsubscribe()
class SampleClass {

    // won't work if the subscriotion
    // is not assigned to a class property
    subs: Subscription

    public constructor(){ 
        // this observer would be unsubscribed 
        // just before this component is destroyed
        // because of the attached decorator: @Unsubscribe()
        combineLatest(...).pipe(
          mergeMap((values) => {
            ...
          }),
          map((mergedValues) => {
            '''
          })
        ).subscribe((mappedValues) => {
            ...
        })
    }

    // No need to do this
    // ngOnDestroy () {
    //     this.subs.unsubscribe()
    // }

}

```

## [License](./LICENSE.md)