const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = 'ここから採用 サービス提案資料';

// カラー定義
const C = {
  navy:    "0D1B2A",
  navy2:   "1B2D42",
  gold:    "C9A84C",
  goldLt:  "F0C96A",
  white:   "FFFFFF",
  off:     "F7F6F3",
  gray:    "888888",
  grayLt:  "CCCCCC",
  green:   "1A7A5A",
};

const makeShadow = () => ({ type: "outer", color: "000000", blur: 8, offset: 3, angle: 45, opacity: 0.12 });

// =============================================
// SLIDE 1: タイトル
// =============================================
{
  const s = pres.addSlide();
  s.background = { color: C.navy };

  // 背景装飾
  s.addShape(pres.shapes.OVAL, { x: 6.5, y: -1.5, w: 5, h: 5, fill: { color: C.gold, transparency: 88 }, line: { color: C.navy } });
  s.addShape(pres.shapes.OVAL, { x: -1, y: 3.5, w: 4, h: 4, fill: { color: C.green, transparency: 88 }, line: { color: C.navy } });

  // バッジ
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 1.0, w: 3.2, h: 0.38, fill: { color: C.gold, transparency: 0 }, rectRadius: 0.05, line: { color: C.gold } });
  s.addText("BtoB MATCHING PLATFORM", { x: 0.6, y: 1.0, w: 3.2, h: 0.38, fontSize: 9, bold: true, color: C.navy, align: "center", valign: "middle", charSpacing: 3, margin: 0 });

  // タイトル
  s.addText([
    { text: "ここから", options: { color: C.white, bold: true } },
    { text: "採用", options: { color: C.gold, bold: true } },
  ], { x: 0.6, y: 1.55, w: 8, h: 1.1, fontSize: 52, fontFace: "Calibri", margin: 0 });

  s.addText("サービス提案資料", { x: 0.6, y: 2.7, w: 7, h: 0.55, fontSize: 20, color: "AABBCC", fontFace: "Calibri", margin: 0 });

  // サブコピー
  s.addText("登録するだけで、売上が上がる。\n企業と企業をつなぐ、全業種対応BtoBマッチングプラットフォーム。", {
    x: 0.6, y: 3.35, w: 7.5, h: 1.1, fontSize: 13, color: "8899AA", fontFace: "Calibri", lineSpacingMultiple: 1.4,
  });

  // 日付・作成者
  s.addText("2025年　作成：島崎", { x: 0.6, y: 5.05, w: 5, h: 0.35, fontSize: 10, color: "445566", fontFace: "Calibri" });

  // 右側ビジュアル
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.8, y: 1.2, w: 2.7, h: 3.5, fill: { color: C.navy2 }, rectRadius: 0.12, line: { color: C.gold, width: 1 } });
  s.addText("ここから採用", { x: 6.8, y: 2.2, w: 2.7, h: 0.5, fontSize: 13, bold: true, color: C.gold, align: "center", fontFace: "Calibri" });
  s.addText("BtoB\nMatching\nPlatform", { x: 6.8, y: 2.75, w: 2.7, h: 1.2, fontSize: 15, bold: true, color: C.white, align: "center", fontFace: "Calibri", lineSpacingMultiple: 1.3 });

  s.addNotes("タイトルスライド。サービス名「ここから採用」はBtoBマッチングプラットフォームのサービス名。");
}

// =============================================
// SLIDE 2: 目次
// =============================================
{
  const s = pres.addSlide();
  s.background = { color: C.off };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.0, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("CONTENTS", { x: 0.5, y: 0, w: 3, h: 1.0, fontSize: 10, bold: true, color: C.gold, valign: "middle", charSpacing: 4, margin: 0 });
  s.addText("目次", { x: 3, y: 0, w: 6.5, h: 1.0, fontSize: 28, bold: true, color: C.white, valign: "middle", fontFace: "Calibri", margin: 0 });

  const items = [
    { num: "01", title: "現状の課題",       sub: "企業が抱えるビジネス上の問題" },
    { num: "02", title: "ここから採用とは", sub: "サービスの概要と仕組み" },
    { num: "03", title: "2つの利用シーン", sub: "発注企業・受注企業それぞれのメリット" },
    { num: "04", title: "料金プラン",       sub: "ライト・スタンダード・プレミアム" },
    { num: "05", title: "収益モデル",       sub: "掲載料による収益構造" },
    { num: "06", title: "今後の展開",       sub: "ロードマップと機能拡充計画" },
  ];

  items.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * 4.8;
    const y = 1.25 + row * 1.35;

    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 4.4, h: 1.15,
      fill: { color: C.white },
      shadow: makeShadow(),
      line: { color: C.border || "E8E8E8" }
    });
    s.addText(item.num, { x: x + 0.15, y: y + 0.12, w: 0.7, h: 0.4, fontSize: 11, bold: true, color: C.gold, fontFace: "Calibri", margin: 0 });
    s.addText(item.title, { x: x + 0.8, y: y + 0.1, w: 3.4, h: 0.45, fontSize: 14, bold: true, color: C.navy, fontFace: "Calibri", margin: 0 });
    s.addText(item.sub, { x: x + 0.8, y: y + 0.58, w: 3.4, h: 0.42, fontSize: 10, color: C.gray, fontFace: "Calibri", margin: 0 });
  });
}

// =============================================
// SLIDE 3: 課題
// =============================================
{
  const s = pres.addSlide();
  s.background = { color: C.navy };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.1, fill: { color: "0A1520" }, line: { color: "0A1520" } });
  s.addText("01", { x: 0.5, y: 0.05, w: 1, h: 0.5, fontSize: 11, bold: true, color: C.gold, charSpacing: 2, margin: 0 });
  s.addText("現状の課題", { x: 0.5, y: 0.52, w: 8, h: 0.45, fontSize: 22, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });

  s.addText("「売上を上げたい」企業が抱える3つの壁", {
    x: 0.5, y: 1.2, w: 9, h: 0.5, fontSize: 16, color: "8899AA", fontFace: "Calibri", margin: 0,
  });

  const issues = [
    { num: "01", title: "新規顧客の開拓が難しい",   body: "既存客への依存度が高く、営業活動に時間・コストがかかる。新しい取引先を見つけるチャンネルが限られている。" },
    { num: "02", title: "自社を知ってもらえない",    body: "WEBサイトはあるが集客できていない。自社のサービスを必要としている企業にリーチできていない。" },
    { num: "03", title: "BtoB営業コストが高い",      body: "展示会・広告・飛び込み営業など、新規顧客獲得にかかる費用対効果が悪く、費用を掛けられない。" },
  ];

  issues.forEach((issue, i) => {
    const x = 0.4 + i * 3.1;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.9, w: 2.9, h: 3.2, fill: { color: C.navy2 }, line: { color: C.navy2 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.9, w: 2.9, h: 0.5, fill: { color: C.gold, transparency: 0 }, line: { color: C.gold } });
    s.addText(issue.num, { x: x + 0.1, y: 1.9, w: 2.7, h: 0.5, fontSize: 13, bold: true, color: C.navy, align: "center", valign: "middle", fontFace: "Calibri", margin: 0 });
    s.addText(issue.title, { x: x + 0.15, y: 2.5, w: 2.6, h: 0.65, fontSize: 13, bold: true, color: C.white, fontFace: "Calibri", lineSpacingMultiple: 1.2, margin: 0 });
    s.addText(issue.body, { x: x + 0.15, y: 3.2, w: 2.6, h: 1.7, fontSize: 10.5, color: "8899AA", fontFace: "Calibri", lineSpacingMultiple: 1.5, margin: 0 });
  });

  s.addText("これらの課題を、ここから採用が一気に解決します。", {
    x: 0.5, y: 5.15, w: 9, h: 0.35, fontSize: 12, bold: true, color: C.gold, align: "center", fontFace: "Calibri", margin: 0,
  });
}

// =============================================
// SLIDE 4: ここから採用とは
// =============================================
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.1, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("02", { x: 0.5, y: 0.05, w: 1, h: 0.5, fontSize: 11, bold: true, color: C.gold, charSpacing: 2, margin: 0 });
  s.addText("ここから採用とは", { x: 0.5, y: 0.52, w: 8, h: 0.45, fontSize: 22, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });

  // キャッチコピー
  s.addText([
    { text: "登録するだけで、", options: { color: C.navy, bold: true } },
    { text: "売上が上がる。", options: { color: C.gold, bold: true } },
  ], { x: 0.5, y: 1.25, w: 9, h: 0.7, fontSize: 28, fontFace: "Calibri", margin: 0 });

  s.addText("ここから採用は、全業種対応のBtoBビジネスマッチングプラットフォームです。\n貴社のサービスを必要としている企業と、今すぐつながることができます。", {
    x: 0.5, y: 2.0, w: 9, h: 0.85, fontSize: 12, color: C.gray, fontFace: "Calibri", lineSpacingMultiple: 1.6, margin: 0,
  });

  // 3ステップ
  const steps = [
    { num: "STEP 01", title: "企業情報を登録",   body: "会社名・業種・サービスを入力するだけ。最短10分で掲載完了。" },
    { num: "STEP 02", title: "発注企業に発見される", body: "業種・エリア・キーワードで検索され、必要としている企業に見つけてもらえる。" },
    { num: "STEP 03", title: "問い合わせ・成約", body: "フォーム・チャット・電話で直接やりとり。スムーズに成約へ。" },
  ];

  steps.forEach((step, i) => {
    const x = 0.4 + i * 3.1;
    const arrowX = x + 2.9 + 0.05;

    s.addShape(pres.shapes.RECTANGLE, { x, y: 3.0, w: 2.9, h: 2.35, fill: { color: C.off }, line: { color: "E8E8E8" } });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x + 0.15, y: 3.12, w: 1.3, h: 0.32, fill: { color: C.gold }, rectRadius: 0.04, line: { color: C.gold } });
    s.addText(step.num, { x: x + 0.15, y: 3.12, w: 1.3, h: 0.32, fontSize: 9, bold: true, color: C.navy, align: "center", valign: "middle", charSpacing: 1, fontFace: "Calibri", margin: 0 });
    s.addText(step.title, { x: x + 0.15, y: 3.52, w: 2.6, h: 0.5, fontSize: 13, bold: true, color: C.navy, fontFace: "Calibri", lineSpacingMultiple: 1.2, margin: 0 });
    s.addText(step.body, { x: x + 0.15, y: 4.1, w: 2.6, h: 1.15, fontSize: 10.5, color: C.gray, fontFace: "Calibri", lineSpacingMultiple: 1.5, margin: 0 });

    if (i < 2) {
      s.addText("→", { x: arrowX, y: 3.9, w: 0.25, h: 0.4, fontSize: 18, bold: true, color: C.gold, align: "center", fontFace: "Calibri", margin: 0 });
    }
  });
}

// =============================================
// SLIDE 5: 2つの利用シーン
// =============================================
{
  const s = pres.addSlide();
  s.background = { color: C.off };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.1, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("03", { x: 0.5, y: 0.05, w: 1, h: 0.5, fontSize: 11, bold: true, color: C.gold, charSpacing: 2, margin: 0 });
  s.addText("2つの利用シーン", { x: 0.5, y: 0.52, w: 8, h: 0.45, fontSize: 22, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });

  // 左：発注側
  s.addShape(pres.shapes.RECTANGLE, { x: 0.3, y: 1.2, w: 4.4, h: 4.2, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("FOR BUYERS", { x: 0.5, y: 1.35, w: 4.0, h: 0.3, fontSize: 9, bold: true, color: C.gold, charSpacing: 3, fontFace: "Calibri", margin: 0 });
  s.addText("発注したい企業へ", { x: 0.5, y: 1.7, w: 4.0, h: 0.55, fontSize: 17, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
  s.addText("完全無料で、取引先を探せる", { x: 0.5, y: 2.28, w: 4.0, h: 0.4, fontSize: 12, color: "8899AA", fontFace: "Calibri", margin: 0 });

  const buyerItems = ["業種・エリア・キーワードで絞り込み検索", "企業の実績・サービス詳細を事前確認", "フォーム・チャット・電話で直接連絡", "完全無料で何社でも問い合わせ可能"];
  buyerItems.forEach((item, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.85 + i * 0.57, w: 3.8, h: 0.44, fill: { color: "142233" }, line: { color: "142233" } });
    s.addText("→  " + item, { x: 0.55, y: 2.85 + i * 0.57, w: 3.7, h: 0.44, fontSize: 10.5, color: "AABBCC", fontFace: "Calibri", valign: "middle", margin: 0 });
  });

  // 右：受注側
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 1.2, w: 4.4, h: 4.2, fill: { color: C.green }, line: { color: C.green } });
  s.addText("FOR SELLERS", { x: 5.5, y: 1.35, w: 4.0, h: 0.3, fontSize: 9, bold: true, color: "AADDCC", charSpacing: 3, fontFace: "Calibri", margin: 0 });
  s.addText("受注したい企業へ", { x: 5.5, y: 1.7, w: 4.0, h: 0.55, fontSize: 17, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
  s.addText("月額掲載料だけで新規顧客を獲得", { x: 5.5, y: 2.28, w: 4.0, h: 0.4, fontSize: 12, color: "AADDCC", fontFace: "Calibri", margin: 0 });

  const sellerItems = ["最短10分で掲載スタート", "月額5,000円から始められる", "全国の発注企業に見つけてもらえる", "問い合わせ・チャット・電話で受注"];
  sellerItems.forEach((item, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 5.5, y: 2.85 + i * 0.57, w: 3.8, h: 0.44, fill: { color: "155A42" }, line: { color: "155A42" } });
    s.addText("→  " + item, { x: 5.55, y: 2.85 + i * 0.57, w: 3.7, h: 0.44, fontSize: 10.5, color: "CCEEDC", fontFace: "Calibri", valign: "middle", margin: 0 });
  });

  // 中央の矢印
  s.addText("⇄", { x: 4.55, y: 2.7, w: 0.9, h: 0.7, fontSize: 26, bold: true, color: C.gold, align: "center", fontFace: "Calibri", margin: 0 });
  s.addText("マッチング", { x: 4.45, y: 3.3, w: 1.1, h: 0.4, fontSize: 9, bold: true, color: C.gold, align: "center", fontFace: "Calibri", charSpacing: 1, margin: 0 });
}

// =============================================
// SLIDE 6: 料金プラン
// =============================================
{
  const s = pres.addSlide();
  s.background = { color: C.navy };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.1, fill: { color: "0A1520" }, line: { color: "0A1520" } });
  s.addText("04", { x: 0.5, y: 0.05, w: 1, h: 0.5, fontSize: 11, bold: true, color: C.gold, charSpacing: 2, margin: 0 });
  s.addText("料金プラン", { x: 0.5, y: 0.52, w: 8, h: 0.45, fontSize: 22, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });

  const plans = [
    {
      name: "LITE", nameJp: "ライト",
      price: "¥5,000", cycle: "/ 月（税込 ¥5,500）",
      color: C.navy2,
      features: ["基本情報掲載", "サービス紹介文（500文字）", "写真 3枚まで", "問い合わせフォーム", "電話番号・メール掲載"],
      featured: false,
    },
    {
      name: "STANDARD", nameJp: "スタンダード",
      price: "¥12,000", cycle: "/ 月（税込 ¥13,200）",
      color: C.navy2,
      badge: "人気 No.1",
      features: ["ライトの全機能", "サービス紹介文（2,000文字）", "写真 10枚まで", "チャット・DM機能", "検索上位表示", "実績・事例掲載"],
      featured: true,
    },
    {
      name: "PREMIUM", nameJp: "プレミアム",
      price: "¥30,000", cycle: "/ 月（税込 ¥33,000）",
      color: C.navy2,
      features: ["スタンダードの全機能", "トップページ特集掲載", "検索最上位優先表示", "写真・動画 無制限", "専任サポート担当", "月次レポート提供"],
      featured: false,
    },
  ];

  plans.forEach((plan, i) => {
    const x = 0.35 + i * 3.15;
    const isFeatured = plan.featured;
    const borderColor = isFeatured ? C.gold : "2A3D52";

    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.25, w: 2.95, h: 4.15, fill: { color: isFeatured ? "162840" : C.navy2 }, line: { color: borderColor, width: isFeatured ? 2 : 1 } });

    if (isFeatured && plan.badge) {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x + 0.6, y: 1.05, w: 1.75, h: 0.32, fill: { color: C.gold }, rectRadius: 0.06, line: { color: C.gold } });
      s.addText(plan.badge, { x: x + 0.6, y: 1.05, w: 1.75, h: 0.32, fontSize: 10, bold: true, color: C.navy, align: "center", valign: "middle", fontFace: "Calibri", margin: 0 });
    }

    s.addText(plan.name, { x: x + 0.15, y: 1.38, w: 2.65, h: 0.3, fontSize: 9, bold: true, color: isFeatured ? C.gold : "6688AA", charSpacing: 3, fontFace: "Calibri", margin: 0 });
    s.addText(plan.nameJp, { x: x + 0.15, y: 1.68, w: 2.65, h: 0.38, fontSize: 16, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
    s.addText(plan.price, { x: x + 0.15, y: 2.1, w: 2.65, h: 0.62, fontSize: 30, bold: true, color: isFeatured ? C.gold : C.white, fontFace: "Calibri", margin: 0 });
    s.addText(plan.cycle, { x: x + 0.15, y: 2.72, w: 2.65, h: 0.28, fontSize: 9, color: "556677", fontFace: "Calibri", margin: 0 });

    s.addShape(pres.shapes.LINE, { x: x + 0.15, y: 3.08, w: 2.65, h: 0, line: { color: "2A3D52", width: 1 } });

    plan.features.forEach((feat, fi) => {
      s.addText("✓  " + feat, { x: x + 0.15, y: 3.2 + fi * 0.33, w: 2.65, h: 0.3, fontSize: 10, color: isFeatured ? "AABBCC" : "6688AA", fontFace: "Calibri", margin: 0 });
    });
  });

  s.addText("※ いつでもプラン変更・解約可能　／　初期費用・登録料は不要", {
    x: 0.5, y: 5.3, w: 9, h: 0.25, fontSize: 9.5, color: "445566", align: "center", fontFace: "Calibri", margin: 0,
  });
}

// =============================================
// SLIDE 7: 収益モデル
// =============================================
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.1, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("05", { x: 0.5, y: 0.05, w: 1, h: 0.5, fontSize: 11, bold: true, color: C.gold, charSpacing: 2, margin: 0 });
  s.addText("収益モデル", { x: 0.5, y: 0.52, w: 8, h: 0.45, fontSize: 22, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });

  // 収益構造
  s.addText("掲載料ベースのストック型収益モデル", { x: 0.5, y: 1.2, w: 9, h: 0.45, fontSize: 16, bold: true, color: C.navy, fontFace: "Calibri", margin: 0 });
  s.addText("登録企業の掲載料が毎月定額で積み上がる、安定した収益構造です。", { x: 0.5, y: 1.68, w: 9, h: 0.35, fontSize: 11, color: C.gray, fontFace: "Calibri", margin: 0 });

  // 収益シミュレーション
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 2.1, w: 9.2, h: 2.8, fill: { color: C.off }, line: { color: "E0E0E0" } });

  const simData = [
    { label: "ライト\n¥5,000/月", count: "10社", monthly: "¥50,000", color: "4A6882" },
    { label: "スタンダード\n¥12,000/月", count: "10社", monthly: "¥120,000", color: "2A5A82" },
    { label: "プレミアム\n¥30,000/月", count: "5社", monthly: "¥150,000", color: C.navy },
  ];

  s.addText("収益シミュレーション（例）", { x: 0.7, y: 2.22, w: 5, h: 0.35, fontSize: 11, bold: true, color: C.navy, fontFace: "Calibri", margin: 0 });

  simData.forEach((d, i) => {
    const x = 0.65 + i * 2.9;
    s.addShape(pres.shapes.RECTANGLE, { x, y: 2.68, w: 2.6, h: 1.85, fill: { color: d.color }, line: { color: d.color } });
    s.addText(d.label, { x: x + 0.1, y: 2.72, w: 2.4, h: 0.58, fontSize: 10, bold: true, color: C.white, fontFace: "Calibri", lineSpacingMultiple: 1.2, margin: 0 });
    s.addText(d.count + " 掲載", { x: x + 0.1, y: 3.33, w: 2.4, h: 0.35, fontSize: 12, color: C.goldLt, fontFace: "Calibri", margin: 0 });
    s.addText(d.monthly, { x: x + 0.1, y: 3.72, w: 2.4, h: 0.55, fontSize: 18, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });
  });

  // 合計
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 4.95, w: 9.2, h: 0.55, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("月額合計（例）：", { x: 0.7, y: 4.95, w: 3, h: 0.55, fontSize: 12, bold: true, color: "8899AA", valign: "middle", fontFace: "Calibri", margin: 0 });
  s.addText("¥320,000 / 月", { x: 3.5, y: 4.95, w: 4, h: 0.55, fontSize: 20, bold: true, color: C.gold, valign: "middle", fontFace: "Calibri", margin: 0 });
  s.addText("= 年間 ¥3,840,000", { x: 6.8, y: 4.95, w: 2.6, h: 0.55, fontSize: 11, color: "6688AA", valign: "middle", fontFace: "Calibri", margin: 0 });
}

// =============================================
// SLIDE 8: 今後の展開
// =============================================
{
  const s = pres.addSlide();
  s.background = { color: C.off };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 1.1, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText("06", { x: 0.5, y: 0.05, w: 1, h: 0.5, fontSize: 11, bold: true, color: C.gold, charSpacing: 2, margin: 0 });
  s.addText("今後の展開", { x: 0.5, y: 0.52, w: 8, h: 0.45, fontSize: 22, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });

  const phases = [
    {
      phase: "PHASE 01",
      period: "〜6ヶ月",
      title: "立ち上げ期",
      color: "2A4A6A",
      items: ["サイト公開・長崎エリアで展開", "手動運用で掲載企業を獲得", "Formspreeでフォーム受付", "目標：掲載50社"],
    },
    {
      phase: "PHASE 02",
      period: "6〜18ヶ月",
      title: "拡大期",
      color: "1A5A7A",
      items: ["九州全域へエリア拡大", "Stripeによる自動決済導入", "チャット機能追加", "目標：掲載200社"],
    },
    {
      phase: "PHASE 03",
      period: "18ヶ月〜",
      title: "全国展開",
      color: C.navy,
      items: ["全国47都道府県対応", "会員システム・マイページ開設", "AIマッチングレコメンド", "目標：掲載1,000社"],
    },
  ];

  // タイムラインライン
  s.addShape(pres.shapes.LINE, { x: 0.9, y: 3.15, w: 8.2, h: 0, line: { color: C.gold, width: 2 } });

  phases.forEach((ph, i) => {
    const x = 0.4 + i * 3.15;

    // フェーズカード
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.2, w: 2.95, h: 1.75, fill: { color: ph.color }, line: { color: ph.color }, shadow: makeShadow() });
    s.addText(ph.phase, { x: x + 0.12, y: 1.28, w: 2.71, h: 0.3, fontSize: 8.5, bold: true, color: C.gold, charSpacing: 2, fontFace: "Calibri", margin: 0 });
    s.addText(ph.period, { x: x + 0.12, y: 1.6, w: 2.71, h: 0.32, fontSize: 10, color: "8899AA", fontFace: "Calibri", margin: 0 });
    s.addText(ph.title, { x: x + 0.12, y: 1.95, w: 2.71, h: 0.45, fontSize: 17, bold: true, color: C.white, fontFace: "Calibri", margin: 0 });

    // ドット
    s.addShape(pres.shapes.OVAL, { x: x + 1.22, y: 2.98, w: 0.35, h: 0.35, fill: { color: C.gold }, line: { color: C.gold } });

    // 箇条書き
    ph.items.forEach((item, fi) => {
      s.addText("•  " + item, { x: x + 0.12, y: 3.45 + fi * 0.42, w: 2.71, h: 0.38, fontSize: 10, color: C.navy, fontFace: "Calibri", margin: 0 });
    });
  });
}

// =============================================
// SLIDE 9: まとめ・CTA
// =============================================
{
  const s = pres.addSlide();
  s.background = { color: C.navy };

  s.addShape(pres.shapes.OVAL, { x: 5.5, y: -1.5, w: 6, h: 6, fill: { color: C.gold, transparency: 90 }, line: { color: C.navy } });
  s.addShape(pres.shapes.OVAL, { x: -1.5, y: 3.0, w: 5, h: 5, fill: { color: C.green, transparency: 90 }, line: { color: C.navy } });

  s.addText("SUMMARY", { x: 0.6, y: 0.7, w: 4, h: 0.35, fontSize: 10, bold: true, color: C.gold, charSpacing: 4, fontFace: "Calibri", margin: 0 });
  s.addText([
    { text: "ここから採用で、\n", options: { color: C.white, bold: true } },
    { text: "ビジネスを次のステージへ。", options: { color: C.gold, bold: true } },
  ], { x: 0.6, y: 1.1, w: 8.5, h: 1.6, fontSize: 30, fontFace: "Calibri", lineSpacingMultiple: 1.3, margin: 0 });

  const points = [
    "全業種・全国対応のBtoBマッチングプラットフォーム",
    "登録するだけで新規顧客が見つかる仕組み",
    "月額5,000円〜の掲載料でストック型収益を構築",
    "発注企業は完全無料で取引先を探せる",
  ];
  points.forEach((p, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 2.85 + i * 0.52, w: 6.5, h: 0.42, fill: { color: "142233" }, line: { color: "1E3048" } });
    s.addText("→  " + p, { x: 0.75, y: 2.85 + i * 0.52, w: 6.2, h: 0.42, fontSize: 11, color: "AABBCC", valign: "middle", fontFace: "Calibri", margin: 0 });
  });

  // CTAボックス
  s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 5.0, w: 6.5, h: 0.42, fill: { color: C.gold }, line: { color: C.gold } });
  s.addText("まずは掲載のご相談・お問い合わせをお待ちしています", {
    x: 0.6, y: 5.0, w: 6.5, h: 0.42, fontSize: 11, bold: true, color: C.navy, align: "center", valign: "middle", fontFace: "Calibri", margin: 0,
  });

  // 右側情報
  s.addShape(pres.shapes.RECTANGLE, { x: 7.4, y: 1.1, w: 2.2, h: 4.6, fill: { color: "0A1520" }, line: { color: "1E3048" } });
  s.addText("CONTACT", { x: 7.5, y: 1.25, w: 2.0, h: 0.3, fontSize: 8, bold: true, color: C.gold, charSpacing: 3, align: "center", fontFace: "Calibri", margin: 0 });
  s.addShape(pres.shapes.LINE, { x: 7.55, y: 1.6, w: 1.9, h: 0, line: { color: "2A3D52", width: 1 } });
  s.addText("ここから採用", { x: 7.5, y: 1.72, w: 2.0, h: 0.42, fontSize: 12, bold: true, color: C.white, align: "center", fontFace: "Calibri", margin: 0 });
  s.addText("kokokara-saiyo.com", { x: 7.5, y: 2.2, w: 2.0, h: 0.3, fontSize: 8.5, color: C.gold, align: "center", fontFace: "Calibri", margin: 0 });
  s.addText("運営：島崎", { x: 7.5, y: 4.85, w: 2.0, h: 0.3, fontSize: 9, color: "445566", align: "center", fontFace: "Calibri", margin: 0 });
}

// 出力
const outPath = "C:\\Users\\nps\\Desktop\\nps\\kokokara-saiyo\\ここから採用_提案資料.pptx";
pres.writeFile({ fileName: outPath }).then(() => {
  console.log("✅ 生成完了:", outPath);
}).catch(e => {
  console.error("❌ エラー:", e);
});
