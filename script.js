document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('lang-toggle');
    let lang = 'en';
    toggle.addEventListener('click', () => {
        lang = lang === 'en' ? 'zh' : 'en';
        toggle.textContent = lang === 'en' ? '中文' : 'English';
        // Simple toggle: Replace text with zh versions (expand for full site)
        document.querySelector('h1').textContent = lang === 'en' ? '25 Years of Trusted Logistics in Hong Kong' : '香港信譽物流25年';
        // Add more translations here for other elements
    });
});
