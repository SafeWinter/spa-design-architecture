define(function() {
    'use strict';
    let count = 0;
    
    function incrementCount() {
        ++count;
    }

    function getCount() {
        return count;
    }

    return {
        incrementCount,
        getCount
    };
});