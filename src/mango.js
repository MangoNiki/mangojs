;(function(window) {

    var Mango = {};
    Mango.addEvent = function(obj, event, callback) {
        try {
            obj.addEventListener(event, callback, false);
        } catch (e) {
            try {
                obj.attachEvent('on' + event, callback);
            } catch (e) {
                obj['on' + event] = callback;
            }
        }
    };
    window.mango = window.$ = Mango;
})(window);
