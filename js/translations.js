// 多言語対応データ
const translations = {
    ja: {
        // ナビゲーション
        nav_home: "ホーム",
        nav_services: "事業内容",
        nav_about: "会社概要",
        nav_contact: "お問い合わせ",
        
        // ヒーローセクション
        hero_title: "未来を創造する<br>ブロックチェーン・DXソリューション",
        hero_description: "Guncyは最新のブロックチェーン技術とDXソリューションで、<br>お客様のビジネスを次のステージへと導きます。",
        hero_btn_services: "事業内容を見る",
        hero_btn_contact: "お問い合わせ",
        
        // 事業内容
        services_title: "事業内容",
        service1_title: "ブロックチェーン関連開発",
        service1_desc: "最新のブロックチェーン技術を活用したシステム開発・コンサルティングサービスを提供します。",
        service2_title: "ブロックチェーンバリデータ事業",
        service2_desc: "安全で信頼性の高いバリデータサービスを通じて、ブロックチェーンネットワークの運営をサポートします。",
        service4_title: "DX関連サービス開発",
        service4_desc: "デジタルトランスフォーメーションを推進するためのシステム開発・導入支援を提供します。",
        
        // 会社概要
        about_title: "会社概要",
        about_subtitle: "Guncyについて",
        about_description: "Guncyは、ブロックチェーン技術とデジタルトランスフォーメーションの分野で革新的なソリューションを提供する企業です。最新技術を駆使し、お客様のビジネス成長をサポートいたします。",
        about_company_name: "会社名",
        about_established: "設立",
        about_established_year: "2024年",
        about_business: "事業内容",
        about_business_desc: "ブロックチェーン・DX関連サービス開発",
        
        // お問い合わせ
        contact_title: "お問い合わせ",
        contact_description: "サービスに関するご質問やご相談がございましたら、<br>お気軽にお問い合わせください。",
        contact_email: "Email",
        contact_hours: "営業時間",
        contact_hours_desc: "平日 9:00 - 18:00",
        
        // フッター
        footer_copyright: "© {year} Guncy. All rights reserved.",
        footer_language: "言語"
    },
    
    en: {
        // Navigation
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About",
        nav_contact: "Contact",
        
        // Hero Section
        hero_title: "Creating the Future with<br>Blockchain & DX Solutions",
        hero_description: "Guncy leads your business to the next stage with<br>cutting-edge blockchain technology and DX solutions.",
        hero_btn_services: "View Services",
        hero_btn_contact: "Contact Us",
        
        // Services
        services_title: "Our Services",
        service1_title: "Blockchain Development",
        service1_desc: "We provide system development and consulting services utilizing the latest blockchain technology.",
        service2_title: "Blockchain Validator Services",
        service2_desc: "We support blockchain network operations through secure and reliable validator services.",
        service4_title: "DX Service Development",
        service4_desc: "We provide system development and implementation support to promote digital transformation.",
        
        // About
        about_title: "About Us",
        about_subtitle: "About Guncy",
        about_description: "Guncy is a company that provides innovative solutions in the fields of blockchain technology and digital transformation. We support our clients' business growth by utilizing cutting-edge technology.",
        about_company_name: "Company Name",
        about_established: "Established",
        about_established_year: "2024",
        about_business: "Business",
        about_business_desc: "Blockchain & DX Related Service Development",
        
        // Contact
        contact_title: "Contact Us",
        contact_description: "If you have any questions or inquiries about our services,<br>please feel free to contact us.",
        contact_email: "Email",
        contact_hours: "Business Hours",
        contact_hours_desc: "Weekdays 9:00 - 18:00",
        
        // Footer
        footer_copyright: "© {year} Guncy. All rights reserved.",
        footer_language: "Language"
    },
    
    zh: {
        // 导航
        nav_home: "首页",
        nav_services: "业务内容",
        nav_about: "公司概况",
        nav_contact: "联系我们",
        
        // 主页横幅
        hero_title: "创造未来的<br>区块链・DX解决方案",
        hero_description: "Guncy运用最新的区块链技术和DX解决方案，<br>引领您的业务迈向下一个阶段。",
        hero_btn_services: "查看业务内容",
        hero_btn_contact: "联系我们",
        
        // 业务内容
        services_title: "业务内容",
        service1_title: "区块链相关开发",
        service1_desc: "提供运用最新区块链技术的系统开发和咨询服务。",
        service2_title: "区块链验证器业务",
        service2_desc: "通过安全可靠的验证器服务，支持区块链网络的运营。",
        service4_title: "DX相关服务开发",
        service4_desc: "提供推进数字化转型的系统开发和导入支持。",
        
        // 公司概况
        about_title: "公司概况",
        about_subtitle: "关于Guncy",
        about_description: "Guncy是在区块链技术和数字化转型领域提供创新解决方案的企业。运用最新技术，支持客户的业务增长。",
        about_company_name: "公司名称",
        about_established: "成立",
        about_established_year: "2024年",
        about_business: "业务内容",
        about_business_desc: "区块链・DX相关服务开发",
        
        // 联系我们
        contact_title: "联系我们",
        contact_description: "如果您对服务有任何疑问或咨询，<br>请随时联系我们。",
        contact_email: "邮箱",
        contact_hours: "营业时间",
        contact_hours_desc: "工作日 9:00 - 18:00",
        
        // 页脚
        footer_copyright: "© {year} Guncy. 版权所有。",
        footer_language: "语言"
    },
    
    ko: {
        // 내비게이션
        nav_home: "홈",
        nav_services: "사업내용",
        nav_about: "회사개요",
        nav_contact: "문의하기",
        
        // 히어로 섹션
        hero_title: "미래를 창조하는<br>블록체인・DX 솔루션",
        hero_description: "Guncy는 최신 블록체인 기술과 DX 솔루션으로<br>고객의 비즈니스를 다음 단계로 이끕니다.",
        hero_btn_services: "사업내용 보기",
        hero_btn_contact: "문의하기",
        
        // 사업내용
        services_title: "사업내용",
        service1_title: "블록체인 관련 개발",
        service1_desc: "최신 블록체인 기술을 활용한 시스템 개발・컨설팅 서비스를 제공합니다.",
        service2_title: "블록체인 밸리데이터 사업",
        service2_desc: "안전하고 신뢰성 높은 밸리데이터 서비스를 통해 블록체인 네트워크 운영을 지원합니다.",
        service4_title: "DX 관련 서비스 개발",
        service4_desc: "디지털 트랜스포메이션을 추진하기 위한 시스템 개발・도입 지원을 제공합니다.",
        
        // 회사개요
        about_title: "회사개요",
        about_subtitle: "Guncy에 대해",
        about_description: "Guncy는 블록체인 기술과 디지털 트랜스포메이션 분야에서 혁신적인 솔루션을 제공하는 기업입니다. 최신 기술을 구사하여 고객의 비즈니스 성장을 지원합니다.",
        about_company_name: "회사명",
        about_established: "설립",
        about_established_year: "2024년",
        about_business: "사업내용",
        about_business_desc: "블록체인・DX 관련 서비스 개발",
        
        // 문의하기
        contact_title: "문의하기",
        contact_description: "서비스에 관한 질문이나 상담이 있으시면<br>언제든지 문의해 주세요.",
        contact_email: "이메일",
        contact_hours: "영업시간",
        contact_hours_desc: "평일 9:00 - 18:00",
        
        // 푸터
        footer_copyright: "© {year} Guncy. All rights reserved.",
        footer_language: "언어"
    }
};

// 言語切り替え機能
class LanguageManager {
    constructor() {
        this.currentLanguage = this.getStoredLanguage() || this.getBrowserLanguage();
        this.init();
    }
    
    init() {
        this.createLanguageSelector();
        this.applyTranslations();
        this.bindEvents();
    }
    
    getStoredLanguage() {
        return localStorage.getItem('guncy_language');
    }
    
    setStoredLanguage(lang) {
        localStorage.setItem('guncy_language', lang);
    }
    
    getBrowserLanguage() {
        // ブラウザの言語設定を取得
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.toLowerCase();
        
        // 対応言語にマッピング
        if (langCode.startsWith('en')) {
            return 'en';
        } else if (langCode.startsWith('zh')) {
            return 'zh';
        } else if (langCode.startsWith('ko')) {
            return 'ko';
        } else if (langCode.startsWith('ja')) {
            return 'ja';
        } else {
            // デフォルトは日本語
            return 'ja';
        }
    }
    
    createLanguageSelector() {
        const footer = document.querySelector('.footer-content');
        if (!footer) return;
        
        const languageSelector = document.createElement('div');
        languageSelector.className = 'language-selector';
        languageSelector.innerHTML = `
            <span class="language-label" data-key="footer_language">言語</span>
            <select class="language-select">
                <option value="ja">日本語</option>
                <option value="en">English</option>
                <option value="zh">中文</option>
                <option value="ko">한국어</option>
            </select>
        `;
        
        footer.appendChild(languageSelector);
        
        // 現在の言語を選択状態にする
        const select = languageSelector.querySelector('.language-select');
        select.value = this.currentLanguage;
    }
    
    bindEvents() {
        const select = document.querySelector('.language-select');
        if (select) {
            select.addEventListener('change', (e) => {
                this.changeLanguage(e.target.value);
            });
        }
    }
    
    changeLanguage(lang) {
        this.currentLanguage = lang;
        this.setStoredLanguage(lang);
        this.applyTranslations();
    }
    
    applyTranslations() {
        const elements = document.querySelectorAll('[data-key]');
        const currentTranslations = translations[this.currentLanguage];
        const currentYear = new Date().getFullYear();
        
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (currentTranslations[key]) {
                let text = currentTranslations[key];
                // 年のプレースホルダーを現在の年に置換
                text = text.replace('{year}', currentYear);
                element.innerHTML = text;
            }
        });
        
        // ページタイトルも更新
        if (this.currentLanguage === 'en') {
            document.title = 'Guncy - Blockchain & DX Solutions';
        } else if (this.currentLanguage === 'zh') {
            document.title = 'Guncy - 区块链・DX解决方案';
        } else if (this.currentLanguage === 'ko') {
            document.title = 'Guncy - 블록체인・DX 솔루션';
        } else {
            document.title = 'Guncy - ブロックチェーン・DXソリューション';
        }
    }
}

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    new LanguageManager();
});
