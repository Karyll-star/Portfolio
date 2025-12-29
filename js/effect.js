
window.onload = function () {
    // 若 body 上设置 data-light-enabled="false" 则禁用光效
    var body = document.body || document.getElementsByTagName('body')[0];
    var enabled = true;
    try { enabled = body.dataset.lightEnabled !== 'false'; } catch (e) { enabled = true; }

    /* 获取 light 元素 */
    var light = document.getElementById("light");
    
    // 只有在光效元素存在且启用且非移动端时运行鼠标跟随
    if (light && enabled && window.innerWidth > 768) {
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
    }

    // --- Scrollytelling Logic (Mobile Only - Safer Implementation) ---
    if (window.innerWidth <= 768 && 'IntersectionObserver' in window) {
        
        // 1. 定义我们想要产生动画的元素选择器
        var selector = '.firstScreen h1, .firstScreen h3, .firstScreen p, .firstScreen .link, ' +
                       '.portfolio h1, .portfoliocard, ' +
                       '.chips h1, .chips .fl, .chips .fr, ' +
                       '.brain h1, .brainimg, .brain p, .brain a, ' +
                       '.album h1, .album .desc, ' +
                       '.about h1, .about p, .contact h1, .contact .link';
                       
        var targets = document.querySelectorAll(selector);

        // 2. 初始化：给所有目标加上 'st-hidden' 类，使其进入待动画状态
        // 这样如果 JS 挂了，CSS 不会默认隐藏它们
        targets.forEach(function(el) {
            el.classList.add('st-hidden');
        });

        // 3. 定义观察者
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // 进入视口：移除隐藏类，添加可见类
                    entry.target.classList.remove('st-hidden');
                    entry.target.classList.add('st-visible');
                } else {
                    // 离开视口（可选）：恢复隐藏类以重复动画
                    // entry.target.classList.add('st-hidden');
                    // entry.target.classList.remove('st-visible'); 
                }
            });
        }, {
            root: null, 
            rootMargin: '0px',
            threshold: 0.1 // 稍微降低阈值，确保更容易触发
        });

        // 4. 开始观察
        targets.forEach(function(el) {
            observer.observe(el);
        });
        
        // 5. 导航栏滚动交互
        var nav = document.querySelector('nav');
        var lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop && st > 100) {
                nav.style.transform = 'translateY(-100%)';
                nav.style.transition = 'transform 0.3s ease';
            } else {
                nav.style.transform = 'translateY(0)';
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }, { passive: true });
    }
};
