
window.onload = function () {
    // 若 body 上设置 data-light-enabled="false" 则禁用光效
    var body = document.body || document.getElementsByTagName('body')[0];
    var enabled = true;
    try { enabled = body.dataset.lightEnabled !== 'false'; } catch (e) { enabled = true; }

    /* 获取 light 元素 */
    var light = document.getElementById("light");
    if (!light || !enabled) return;

    // 使用 requestAnimationFrame 做节流，避免频繁重排
    var pos = { left: 0, top: 0 };
    var rafId = null;

    document.addEventListener('mousemove', function (event) {
        pos.left = event.clientX - 285;
        pos.top = event.clientY - 255;
        if (!rafId) {
            rafId = window.requestAnimationFrame(function update() {
                light.style.left = pos.left + "px";
                light.style.top = pos.top + "px";
                rafId = null;
            });
        }
    }, { passive: true });
};
