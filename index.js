exports.start = require( 'edp-webserver/lib/start' );

// 自动引入mockserivce
global.ms = require( 'mockservice' );

exports.getDefaultConfig = function () {
    return require( 'edp-webserver/lib/config' );
};