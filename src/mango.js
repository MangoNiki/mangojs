;
(function(window) {

    var Mango = {

        //绑定事件
        addHandler: function(element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        },
        //移除事件
        removeHandler: function(element, type, handler) {
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else if (element.detachEvent) {
                element.detachEvent("on" + type, handler);
            } else {
                element["on" + type] = null;
            }
        },
        //获取事件
        getEvent: function(event) {
            return event ? event : window.event;
        },
        //获取操作对象
        getTarget: function(event) {
            return event.target || event.srcElement;
        },
        //阻止默认行为
        preventDefault: function(event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        //阻止事件冒泡
        stopPropagation: function(event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        },
        //获取字符编码
        getCharCode : function(event){
            if(typeof event.charCode === 'number'){
                return event.charCode;
            }else{
                return event.keyCode;
            }
        },
        //是否存在原型链中
        hasPrototypeProperty : function(obj,key){
            return !obj.hasOwnProperty(key) && (key in obj);
        }
    };


    window.mango = window.$ = Mango;
})(window);
