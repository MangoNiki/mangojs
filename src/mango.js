;(function(window) {
    var getType = Object.prototype.toString;

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
        getCharCode: function(event) {
            if (typeof event.charCode === 'number') {
                return event.charCode;
            } else {
                return event.keyCode;
            }
        },
        //是否存在原型链中
        hasPrototypeProperty: function(obj, key) {
            return !obj.hasOwnProperty(key) && (key in obj);
        },
        //是否是数组
        isArray: function(value) {
            return getType.call(value) === '[object Array]';
        },
        //是否是对象
        isObject: function(value) {
            return getType.call(value) === '[object Object]';
        },
        //是否为空
        isNull: function(value) {
            return getType.call(value) === '[object Null]';
        },
        //是否为document
        isDocument: function(value) {
            return getType.call(value) === '[object Document]' || '[object HTMLDocument]';
        },
        //是否为undefined
        isUndefined: function(value) {
            return getType.call(value) === '[object Undefined]';
        },
        //是否为数字
        isNumber: function(value) {
            return typeof value === 'number' && isFinite(value);
        },
        //是否为字符串
        isString: function(value) {
            return typeof value === 'string';
        },
        //是否为布尔值
        isBoolean: function(value) {
            return typeof value === 'boolean';
        },
        //是否是函数
        isFunction: function(value) {
            return getType.call(value) === '[object Function]';
        },
        //是否为日期
        isDate: function(value) {
            return getType.call(value) === '[object Date]';
        },
        //是否是正则
        isRegexp: function(value) {
            return getType.call(value) === '[object RegExp]';
        },
        //判断是否为空
        isEmpty: function(value, allowBlank) {
            return value === null || value === undefined || (this.isArray(value) && !value.length) || (!allowBlank ? value === '' : false);
        }
    };

    window.mango = window.$ = Mango;
})(window);
