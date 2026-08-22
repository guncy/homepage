// スムーズスクロール機能
document.addEventListener('DOMContentLoaded', function() {
    // ナビゲーションリンクのスムーズスクロール
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ヘッダーのスクロール時の背景変更
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#ffffff';
            header.style.backdropFilter = 'none';
        }
    });
    
    // サービスカードのアニメーション
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // サービスカードを監視対象に追加
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // 会社情報アイテムのアニメーション
    const infoItems = document.querySelectorAll('.info-item, .contact-item');
    infoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
    
    // モバイルメニューの実装（将来的な拡張用）
    const createMobileMenu = () => {
        const nav = document.querySelector('.nav');
        const navMenu = document.querySelector('.nav-menu');
        
        // モバイルメニューボタンを作成
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.style.display = 'none';
        mobileMenuBtn.style.background = 'none';
        mobileMenuBtn.style.border = 'none';
        mobileMenuBtn.style.fontSize = '24px';
        mobileMenuBtn.style.color = 'var(--primary-color)';
        mobileMenuBtn.style.cursor = 'pointer';
        
        // ナビゲーションコンテナに追加
        const navContainer = document.querySelector('.nav-container');
        navContainer.appendChild(mobileMenuBtn);
        
        // レスポンシブ表示の制御
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                mobileMenuBtn.style.display = 'block';
                navMenu.style.display = 'none';
            } else {
                mobileMenuBtn.style.display = 'none';
                navMenu.style.display = 'flex';
            }
        };
        
        // 初期化とリサイズイベント
        handleResize();
        window.addEventListener('resize', handleResize);
        
        // モバイルメニューの表示/非表示を切り替える関数
        const toggleMobileMenu = () => {
            if (navMenu.style.display === 'none' || navMenu.style.display === '') {
                // メニューを表示
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '60px';
                navMenu.style.left = '0';
                navMenu.style.right = '0';
                navMenu.style.background = 'rgba(255, 255, 255, 0.95)';
                navMenu.style.backdropFilter = 'blur(20px)';
                navMenu.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                navMenu.style.padding = '20px';
                navMenu.style.gap = '15px';
                navMenu.style.borderTop = '1px solid rgba(0, 0, 0, 0.1)';
                mobileMenuBtn.innerHTML = '✕';
            } else {
                // メニューを非表示
                navMenu.style.display = 'none';
                mobileMenuBtn.innerHTML = '☰';
            }
        };

        // モバイルメニューのトグル機能
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        
        // メニュー項目クリック時にメニューを閉じる
        const mobileNavLinks = navMenu.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navMenu.style.display = 'none';
                    mobileMenuBtn.innerHTML = '☰';
                }
            });
        });
    };
    
    // モバイルメニューを初期化
    createMobileMenu();
    
    // パフォーマンス最適化：スクロールイベントのスロットリング
    let ticking = false;
    
    const updateHeader = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        ticking = false;
    };
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });
});
