export function getParam() {
    var pageObj = {};

    var url = decodeURI(location.search); //获取url中"?"符后的字串 ('?modFlag=business&role=1')
    if (url.indexOf("?") != -1) {
        var str = url.substr(1); //substr()方法返回从参数值开始到结束的字符串；
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            pageObj[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }

    return pageObj
}

export function addAnimate(name, animatedName) {
    var icon_name = document.getElementById(name);
    console.log("name", name)
    addClass(icon_name, animatedName);
}

export function removeAnimate(name, animatedName) {
    var icon_name = document.getElementById(name);
    removeClass(icon_name, animatedName);
}

export function hasClass(ele, cls) {
    console.log("ele", ele)
    cls = cls || "";
    if (cls.replace(/\s/g, "").length == 0) return false; //当cls没有参数时，返回false
    return new RegExp(" " + cls + " ").test(" " + ele.className + " ");
}

export function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
        ele.className = ele.className == "" ? cls : ele.className + " " + cls;
    }
}

export function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var newClass = " " + ele.className.replace(/[\t\r\n]/g, "") + " ";
        while (newClass.indexOf(" " + cls + " ") >= 0) {
            newClass = newClass.replace(" " + cls + " ", " ");
        }
        ele.className = newClass.replace(/^\s+|\s+$/g, "");
    }
}

