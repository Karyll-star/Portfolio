
window.onload = function () {
    // 若 body 上设置 data-light-enabled="false" 则禁用光效
    // 或在小屏幕（< 768px）上也禁用光效
    var body = document.body || document.getElementsByTagName('body')[0];
    var enabled = true;
    try { enabled = body.dataset.lightEnabled !== 'false'; } catch (e) { enabled = true; }

    // 获取 light 元素
    var light = document.getElementById("light");
    var fsright = document.querySelector(".fsright");

    // 函数：根据窗口大小管理小屏幕元素
    function manageSmallScreenElements() {
        var isSmallScreen = window.innerWidth < 768;
        
        if (isSmallScreen) {
            // 小屏幕：隐藏光效和 Spline 模型
            if (light) {
                light.style.display = 'none';
            }
            if (fsright) {
                fsright.style.display = 'none';
            }
            enabled = false;
        } else {
            // 大屏幕：显示光效和 Spline 模型
            if (light && enabled) {
                light.style.display = 'block';
            }
            if (fsright) {
                fsright.style.display = 'block';
            }
            enabled = true;
        }
    }

    // 页面加载时立即执行
    manageSmallScreenElements();

    // 如果不启用光效或小屏幕，直接返回
    if (!enabled || !light) return;

    // 使用 requestAnimationFrame 做节流，避免频繁重排
    var pos = { left: 0, top: 0 };
    var rafId = null;

    document.addEventListener('mousemove', function (event) {
        if (!enabled) return;
        pos.left = event.clientX - 285;
        pos.top = event.clientY - 255;
        if (!rafId) {
            rafId = window.requestAnimationFrame(function update() {
                if (light) {
                    light.style.left = pos.left + "px";
                    light.style.top = pos.top + "px";
                }
                rafId = null;
            });
        }
    }, { passive: true });

    // 监听窗口 resize，动态管理小屏幕元素
    window.addEventListener('resize', function () {
        manageSmallScreenElements();
    }, { passive: true });
};
