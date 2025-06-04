// 漢堡選單功能
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
// 關閉選單當點擊連結時
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));
// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// 滾動時導航欄背景變化
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});
// 滾動動畫觀察器
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);
// 觀察所有需要動畫的元素
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.tour-card, .service-item, .stat');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
});
// 表單提交處理
document.querySelector('.contact-form form').addEventListener('submit', (e) => {
    e.preventDefault();
    // 收集表單資料
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    // 模擬預約確認
    const selectedExperience = e.target.querySelector('select').value;
    const experienceNames = {
        'paris': '巴黎文化巡禮',
        'kyoto': '京都古寺探索',
        'rome': '羅馬古蹟之旅',
        'custom': '客製化體驗'
    };
    const experienceName = experienceNames[selectedExperience] || 'VR體驗';
    alert(`感謝您預約「${experienceName}」！我們將盡快與您聯繫確認體驗時間。`);
    e.target.reset();
});
// VR體驗卡片互動效果
document.querySelectorAll('.tour-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const tourTitle = e.target.closest('.tour-card').querySelector('h3').textContent;
        alert(`歡迎體驗「${tourTitle}」！請撥打預約專線 (02) 2567-8900 或填寫表單預約。`);
    });
});
// CTA 按鈕點擊事件
document.querySelector('.cta-button').addEventListener('click', () => {
    const toursSection = document.querySelector('#tours');
    toursSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
// 載入時的歡迎動畫
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.animation = 'fadeInUp 1s ease-out';
});
// 數字計數動畫
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start) + '+';
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        }
    }, 16);
}
// 當統計數字出現在視窗中時開始計數
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('h3');
            const targetNumber = parseInt(statNumber.textContent);
            animateCounter(statNumber, targetNumber);
            statsObserver.unobserve(entry.target);
        }
    });
});
document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});
// VR主題特效
document.addEventListener('DOMContentLoaded', () => {
    // 為VR體驗卡片添加特殊效果
    const vrCards = document.querySelectorAll('.tour-card');
    vrCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) rotateX(5deg)';
            card.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0deg)';
            card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        });
    });
});