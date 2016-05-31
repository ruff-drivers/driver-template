/*!
 * Copyright (c) 2016 Nanchao Inc.
 * All rights reserved.
 */

'use strict';

var driver = require('ruff-driver');
var GPIO = require('gpio');

module.exports = driver({
    attach: function (inputs) {
        this.gpio = inputs.getRequired('gpio');
        this.gpio.setDirection(GPIO.OUT_LOW);
        this._isOn = false;
    },
    exports: {
        turnOn: function () {
            if (!this._isOn) {
                this.gpio.write(1);
                this._isOn = true;
            }
        },
        turnOff: function () {
            if (this._isOn) {
                this.gpio.write(0);
                this._isOn = false;
            }
        },
        isOn: function () {
            return this._isOn;
        }
    }
});
