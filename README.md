# nc-singleton

A simple singleton module to be used inside your constructor.

## Usage

Let's assume you are working on a module. You use prototype and you want that all your new statements return the same instance.
 
```javascript
var singleton = require('nc-singleton');

var defaultOptions = {
    msg: 'default msg'
};

var Plugin = function Plugin() {
    this.options = defaultOptions;
    return singleton.call(this, Plugin);
};

Plugin.prototype.init = function init(options) {
    this.options = options || this.options;
};

Plugin.prototype.getMsg = function getMsg() {
    return this.options.msg;
};

module.exports = Plugin;
```

For testing just npm test :)

That's it. 
