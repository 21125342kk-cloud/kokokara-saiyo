const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3456;
const STATS_FILE = path.join(__dirname, 'data', 'stats.json');

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// .html なしのURLをリダイレクト
const pages = ['register', 'companies', 'company-detail', 'contact', 'tokusho', 'privacy', 'about'];
pages.forEach(p => {
  app.get(`/${p}`, (req, res) => res.redirect(`/${p}.html`));
});

// 掲載企業数を返す
app.get('/api/stats', (req, res) => {
  const stats = JSON.parse(fs.readFileSync(STATS_FILE, 'utf8'));
  res.json(stats);
});

// 掲載申し込みフォームの受け取り
app.post('/api/register', (req, res) => {
  const stats = JSON.parse(fs.readFileSync(STATS_FILE, 'utf8'));

  if (stats.registered >= stats.freeLimit) {
    // 無料枠が埋まっている場合
    return res.redirect('/register.html?status=full');
  }

  stats.registered += 1;
  fs.writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2), 'utf8');

  console.log(`[登録] ${req.body.company || '不明'} — 累計 ${stats.registered}社`);

  res.redirect('/register.html?status=success');
});

app.listen(PORT, () => {
  console.log(`✅ ここから採用 サーバー起動: http://localhost:${PORT}`);
});
