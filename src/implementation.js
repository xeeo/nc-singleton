'use strict';

module.exports = function(Constructor) {
    if (Constructor._instance) {
        return Constructor._instance;
    }
    if (!(this instanceof Constructor)) {
        return new Constructor();
    }
    Constructor._instance = this;
};
