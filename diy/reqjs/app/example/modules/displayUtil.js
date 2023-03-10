define(['counter'], function(counterModule) {
    'use strict';
    function printCount() {
        const count = counterModule.getCount();
        const res = `${count} time${count === 1 ? '' : 's'}`;
        console.log(`Count incremented: ${res}`);
    }

    function displayNewCount() {
        counterModule.incrementCount();
        this.printCount();
    }

    return {
        printCount,
        displayNewCount
    };
});