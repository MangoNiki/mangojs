require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        "mango": "dist/mango",
        "index":"test/requireIndex"
    }　　
});
require(['mango','index'], function(mango,index) {
	
});
