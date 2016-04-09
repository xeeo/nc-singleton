# nc-singleton

A simple singleton module to be used inside your constructor.

## Usage

Let's assume you are working on a module. You use prototype and you want that all your new statements return the same instance.

```javascript
'use strict';

var singleton = require('nc-singleton');

var Cache = function Cache() {
    return singleton.call(this, Cache);
};

Cache.prototype.setTime = function() {
    this.time = new Date();
};

Cache.prototype.getTime = function() {
    return this.time;
};


var cache = new Cache()
cache.setTime();
console.log(cache.getTime());

setTimeout(function(){
  var cache = new Cache();
  console.log(cache.getTime());
}, 4000);

```

It also works with ES6

```javascript
'use strict';

var singleton = require('nc-singleton');

let instance = null;

class Cache {
      constructor() {
        return singleton.call(this, Cache);
      }

      setTime() {
          this.time = new Date();
      }

      getTime() {
          return this.time;
      }
}

let cache = new Cache()
cache.setTime();
console.log(cache.getTime());

setTimeout(function(){
  let cache = new Cache();
  console.log(cache.getTime());
}, 4000);

```

For testing just npm test :)

That's it.
