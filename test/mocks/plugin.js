'use strict';

var Hoek      = require('hoek');
var singleton = require('../../');

var defaultOptions = {
    msg: 'default msg'
};

var Plugin = function Plugin() {
    this.options = defaultOptions;

    return singleton.call(this, Plugin);
};

Plugin.prototype.init = function init(options) {
    this.options = Hoek.applyToDefaults(this.options, options);
};

Plugin.prototype.getMsg = function getMsg() {
    return this.options.msg;
};

module.exports = Plugin.bind({});
