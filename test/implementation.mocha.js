'use strict';

var chai = require('chai');
chai.should();

var Plugin = require('./mocks/plugin');
var first, second;

describe('when instantiating 2 new objects', function() {

    before(function() {
        first = Plugin();
        first.init({
            msg: 'first msg'
        });
        second = Plugin();
    });

    it('second object should have same msg as first', function() {
        (second.getMsg()).should.equal('first msg');
    });

    it('second object should rewrite first objects options', function() {
        second.init({
            msg: 'second msg'
        });
        (first.getMsg()).should.equal('second msg');
    });

});
