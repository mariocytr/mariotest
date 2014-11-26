/*jslint node: true, nomen: true*/
'use strict';

function add(arg) {
    var sum = 0;
    function _add(arg1) {
        if (!arg1) {
            return sum;
        }
        sum += arg1;
        return _add;
    }
    return _add(arg);
}

module.exports = {
    add: add
};