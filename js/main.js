// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
});

// 掲載企業数 → 残り無料枠の自動表示
(async () => {
  try {
    const res = await fetch('/data/stats.json?_=' + Date.now());
    const { registered, freeLimit } = await res.json();
    const remain = Math.max(freeLimit - registered, 0);
    const pct = Math.min((registered / freeLimit) * 100, 100);

    document.querySelectorAll('.slots-remain').forEach(el => {
      el.textContent = remain;
    });
    document.querySelectorAll('.slots-count').forEach(el => {
      el.innerHTML = `<span class="slots-remain">${remain}</span> / ${freeLimit} 社`;
    });
    document.querySelectorAll('.slots-fill').forEach(el => {
      el.style.width = pct + '%';
    });
    document.querySelectorAll('.slots-registered').forEach(el => {
      el.textContent = registered;
    });
    // CTAの残り枠テキストも更新
    document.querySelectorAll('.cta-remain').forEach(el => {
      el.textContent = remain;
    });
  } catch (e) {
    // フォールバック：取得失敗時は表示そのまま
  }
})();
