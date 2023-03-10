requirejs.config({
    baseUrl: 'app/example',
    paths: {
        counter: 'modules/counter',
        util: 'modules/displayUtil'
    }
});

require(['util'], function(utilModule) {
    // increment 1st time
    utilModule.displayNewCount();
    // increment 2nd time
    utilModule.displayNewCount();
});