'use strict';

var Level = require('gpio').Level;
var mock = require('ruff-mock');

var when = mock.when;

var Device = require('../');

require('t');

describe('Template Driver', function () {
    var device;
    var gpio;

    before(function () {
        gpio = mock({}, true);
        device = new Device({
            gpio: gpio
        });
    });

    it('should write `Level.high`', function (done) {
        when(gpio)
            .write(Level.high, Function)
            .then(function (level, callback) {
                setImmediate(callback);
            });

        device.writeHigh(done);
    });
});
