require.config({
    urlArgs: "t=" + (new Date()).getTime(),
    paths: {
        "mango": "dist/mango",
        "index":"test/requireIndex"
    }　　
});
require(['mango','index'], function(mango,index) {

});
