
window.onload = function () {

    /*使div可以跟随鼠标移动 */

    /*获取box*/
    var light = document.getElementById("light");
    //绑定鼠标移动事件
    document.onmousemove = function (event) {
        /*获取到鼠标的坐标 */
        var left = event.clientX - 285;
        var top = event.clientY - 255;
        //设置div的偏移量
        light.style.left = left + "px";
        light.style.top = top + "px";
        /*必须要加单位px,否则显示不出来*/

    };
};
