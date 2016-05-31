'use strict';

var assert = require('assert');
var path = require('path');
var when = require('ruff-mock').when;

var driverPath = path.join(__dirname, '..');
var runner = require('ruff-driver-runner');

require('t');

describe('Driver {driver-name}', function () {
    var device;
    var gpio;

    before(function (done) {
        runner.run(driverPath, function (createdDevice, context) {
            device = createdDevice;
            gpio = context.arg('gpio');
            done();
        });
    });

    it('should turn on', function (done) {
        when(gpio).write(1).then(done);
        device.turnOn();
    });

    it('should turn off', function (done) {
        when(gpio).write(0).then(done);
        device.turnOff();
    });
});
