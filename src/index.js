/*!
 * Copyright (c) 2016 Nanchao Inc.
 * All rights reserved.
 */

'use strict';

var Level = require('gpio').Level;
var driver = require('ruff-driver');

module.exports = driver({
    attach: function (inputs) {
        this._gpio = inputs['gpio'];
    },
    exports: {
        writeHigh: function (callback) {
            this._gpio.write(Level.high, callback);
        }
    }
});
