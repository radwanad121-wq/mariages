/* Wedding site engine by Redone. Four layouts: royal, editorial, bold, minimal. */
(function () {
  const S = window.SITE, T = S.theme, L = S.layout, root = document.documentElement;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) root.classList.add("motion");
  document.body.className = "L-" + L;
  document.head.insertAdjacentHTML("beforeend", `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?${T.fonts}&display=swap"><link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${S.emoji}</text></svg>">`);
  const dark = !!T.dark;
  const css = `
:root{--bg:${T.bg};--bg2:${T.bg2};--ink:${T.ink};--muted:${T.muted};--line:${T.line};--acc:${T.acc};--acc2:${T.acc2};--on:${T.on};--card:${T.card};--fd:${T.fd};--fb:${T.fb}}
*,*::before,*::after{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:80px}
body{margin:0;background:var(--bg);color:var(--ink);font:400 17px/1.7 var(--fb);overflow-x:hidden;-webkit-font-smoothing:antialiased}
a{color:inherit}h1,h2,h3{min-width:0;font-family:var(--fd);font-weight:${T.fw || 500};margin:0;line-height:1.05;letter-spacing:${T.track || "0"}}
:focus-visible{outline:2px solid var(--acc);outline-offset:3px}
.wrap{max-width:1200px;margin:0 auto;padding:0 24px}
.motion .rv{opacity:0;transform:translateY(36px)}
.w{display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:.1em}.w>span{display:inline-block}
.kick{display:inline-flex;align-items:center;gap:12px;font:600 12px/1 var(--fb);letter-spacing:.24em;text-transform:uppercase;color:var(--acc)}
.kick::before,.kick::after{content:"";width:26px;height:1px;background:currentColor;opacity:.6}
.btn{display:inline-flex;align-items:center;gap:10px;padding:16px 28px;border-radius:${T.radius};font:600 15px/1 var(--fb);letter-spacing:.04em;text-decoration:none;border:1px solid transparent;cursor:pointer;transition:transform .25s,background .25s,color .25s}
.btn:hover{transform:translateY(-2px)}
.btn-a{background:var(--acc);color:var(--on)}.btn-o{border-color:var(--line);color:var(--ink)}.btn-o:hover{border-color:var(--acc);color:var(--acc)}
header{position:fixed;inset:0 0 auto;z-index:50;transition:background .35s,border-color .35s;border-bottom:1px solid transparent}
header.solid{background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-color:var(--line)}
.bar{height:78px;display:flex;align-items:center;justify-content:space-between;gap:16px}
.logo{text-decoration:none;font:500 22px/1 var(--fd);letter-spacing:.02em;display:flex;align-items:center;gap:10px}
.logo svg{color:var(--acc)}
nav{display:flex;gap:30px;font-size:14px;letter-spacing:.06em}nav a{text-decoration:none;color:var(--muted)}nav a:hover{color:var(--acc)}
@media (max-width:900px){nav{display:none}.bar .btn{padding:12px 16px;font-size:13px}.logo{font-size:18px}}
.hero{position:relative;min-height:100svh;display:flex;align-items:center;overflow:hidden;padding:110px 0 70px}
.hero h1 em{font-style:italic;color:var(--acc)}
.hero .lead{color:var(--muted);font-size:clamp(17px,1.4vw,20px);max-width:34em}
.ctas{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
.trust{display:flex;align-items:center;gap:10px;margin-top:26px;font-size:14px;color:var(--muted)}.trust b{color:var(--ink)}.stars{color:var(--acc);letter-spacing:3px}
.art svg{width:100%;height:100%;overflow:visible}
.draw{stroke-dasharray:var(--len,1200);stroke-dashoffset:var(--len,1200)}
.spin{transform-box:fill-box;transform-origin:center;animation:spin 60s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}
.spin.f{animation-duration:24s}.spin.r{animation-direction:reverse}
.sway{transform-box:fill-box;transform-origin:50% 0;animation:sway 5s ease-in-out infinite}@keyframes sway{50%{transform:rotate(4deg)}}
.glow{animation:glow 3s ease-in-out infinite}@keyframes glow{50%{opacity:.35}}
.tw{transform-box:fill-box;transform-origin:center;animation:tw 2.6s ease-in-out infinite}.tw.d2{animation-delay:.9s}.tw.d3{animation-delay:1.7s}@keyframes tw{0%,100%{transform:scale(.4);opacity:.3}50%{transform:scale(1);opacity:1}}
.steam{animation:st 3.4s ease-in-out infinite;opacity:0}.steam.d2{animation-delay:1.1s}.steam.d3{animation-delay:2.2s}@keyframes st{0%{opacity:0;transform:translateY(16px)}40%{opacity:.7}100%{opacity:0;transform:translateY(-36px)}}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.draw{stroke-dashoffset:0}}
section{padding:120px 0}
.sh{max-width:760px;margin:0 auto 60px;text-align:center}.sh h2{font-size:clamp(40px,5.4vw,72px);margin:18px 0 16px}.sh p{color:var(--muted);margin:0;font-size:18px}
.svc{display:grid;grid-template-columns:repeat(${S.services.length > 3 ? 4 : 3},1fr);gap:18px}
.sv{position:relative;padding:34px 28px;background:var(--card);border:1px solid var(--line);border-radius:${T.cardR};transition:transform .4s,border-color .4s;overflow:hidden}
.sv:hover{transform:translateY(-6px);border-color:var(--acc)}
.sv .n{font:500 14px var(--fd);color:var(--acc);letter-spacing:.1em}
.sv h3{font-size:28px;margin:16px 0 10px}.sv p{margin:0;color:var(--muted);font-size:16px}
.sv .ic{width:50px;height:50px;color:var(--acc);margin-bottom:6px}
@media (max-width:1000px){.svc{grid-template-columns:1fr 1fr}}@media (max-width:620px){.svc{grid-template-columns:1fr}}
.band{background:var(--bg2);color:${T.bandInk || "var(--ink)"}}
.day{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border-top:1px solid var(--line)}
.dt{padding:34px 26px 0 0;position:relative}
.dt::before{content:"";position:absolute;top:-6px;left:0;width:11px;height:11px;border-radius:50%;background:var(--acc)}
.dt .k{font:italic 400 15px var(--fd);color:var(--acc);letter-spacing:.06em}
.dt h3{font-size:26px;margin:10px 0 8px}.dt p{margin:0;color:var(--muted);font-size:16px}
@media (max-width:900px){.day{grid-template-columns:1fr 1fr;gap:20px}}@media (max-width:560px){.day{grid-template-columns:1fr}}
.stats{display:flex;justify-content:center;flex-wrap:wrap;gap:60px;margin-top:70px;text-align:center}
.stats b{display:block;font:500 clamp(52px,6vw,84px)/1 var(--fd);color:var(--acc)}.stats span{color:var(--muted);font-size:14px;letter-spacing:.08em;text-transform:uppercase}
.revs{display:grid;grid-template-columns:repeat(${Math.min(3, S.reviews.length)},1fr);gap:20px}
.rev{padding:36px 30px;border:1px solid var(--line);border-radius:${T.cardR};background:var(--card);position:relative}
.rev::before{content:"“";position:absolute;top:-8px;left:24px;font:400 110px/1 var(--fd);color:var(--acc);opacity:.35}
.rev p{margin:24px 0 18px;font:${T.revFont ? '400 18px/1.65 var(--fb)' : 'italic 400 20px/1.55 var(--fd)'}}
.rev small{color:var(--muted);font-size:13px;letter-spacing:.06em}
@media (max-width:960px){.revs{grid-template-columns:1fr}}
.gal{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.ph{aspect-ratio:3/4;border-radius:${T.cardR};position:relative;overflow:hidden;display:flex;align-items:flex-end;padding:22px;color:#fff;isolation:isolate}
.ph::before{content:"";position:absolute;inset:-30%;z-index:-2;background:var(--g);animation:spin 30s linear infinite}
.ph::after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,transparent 45%,rgba(0,0,0,.55))}
.ph svg{position:absolute;inset:0;width:100%;height:100%;opacity:.22;z-index:-1}
.ph b{font:500 24px/1.1 var(--fd)}
@media (max-width:900px){.gal{grid-template-columns:1fr 1fr}}
.faq{max-width:860px;margin:0 auto}.qa{border-bottom:1px solid var(--line)}
.qa button{all:unset;box-sizing:border-box;width:100%;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:24px 0;cursor:pointer;font:500 clamp(20px,2.2vw,26px)/1.3 var(--fd)}
.qa .pm{flex:none;width:36px;height:36px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;transition:transform .3s,background .3s,color .3s}
.qa.open .pm{transform:rotate(45deg);background:var(--acc);color:var(--on);border-color:var(--acc)}
.ans{display:grid;grid-template-rows:0fr;transition:grid-template-rows .4s}.qa.open .ans{grid-template-rows:1fr}.ans>div{overflow:hidden}.ans p{margin:0 0 24px;color:var(--muted)}
.contact .wrap{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}.contact .wrap>*{min-width:0}.info a{overflow-wrap:anywhere}
.contact h2{font-size:clamp(42px,5.4vw,74px)}
.info{display:grid;gap:18px;margin-top:30px}.info div{display:flex;gap:14px;min-width:0}.info div>*{min-width:0}.info svg{flex:none;color:var(--acc);margin-top:3px}.info b{display:block}.info span{color:var(--muted)}
.hours{display:grid;grid-template-columns:auto 1fr;gap:2px 16px;color:var(--muted);font-size:15px}
form{display:grid;gap:14px;padding:34px;border:1px solid var(--line);border-radius:${T.cardR};background:var(--card)}
form h3{font-size:30px}
label{display:grid;gap:6px;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
input,select,textarea{font:inherit;font-size:16px;color:var(--ink);background:transparent;border:0;border-bottom:1px solid var(--line);padding:10px 0;border-radius:0;width:100%}
select option{color:#111}
input:focus,select:focus,textarea:focus{outline:none;border-color:var(--acc)}
.r2{display:grid;grid-template-columns:1fr 1fr;gap:16px}.err{margin:0;color:#d9534f;font-size:14px;min-height:1.2em}
@media (max-width:900px){.contact .wrap{grid-template-columns:1fr}}@media (max-width:480px){.r2{grid-template-columns:1fr}}
footer{padding:36px 0 50px;border-top:1px solid var(--line);color:var(--muted);font-size:14px}footer .wrap{display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px}
.wa{position:fixed;right:20px;bottom:calc(20px + env(safe-area-inset-bottom,0px));z-index:60;width:60px;height:60px;border-radius:50%;background:#25D366;display:grid;place-items:center;box-shadow:0 10px 30px rgba(37,211,102,.4)}
.marq{overflow:hidden;border-block:1px solid var(--line);padding:20px 0}.marq .tr{display:flex;width:max-content;animation:mq 36s linear infinite}
.marq span{display:flex;align-items:center;gap:36px;padding-right:36px;white-space:nowrap;font:italic 400 clamp(26px,3vw,40px)/1 var(--fd)}.marq span::after{content:"✦";font-size:16px;color:var(--acc);font-style:normal}
@keyframes mq{to{transform:translateX(-50%)}}

/* ROYAL: centered, ornamental, dark */
.L-royal .hero{text-align:center;justify-content:center}
.L-royal .hero .wrap{position:relative;z-index:2;max-width:980px;width:100%;min-width:0}
.L-royal .hero .art{position:absolute;inset:50% auto auto 50%;width:min(940px,150vw);aspect-ratio:1;transform:translate(-50%,-50%);opacity:.3;z-index:1}
.L-royal .hero h1{font-size:clamp(44px,6.6vw,100px);margin:24px 0 22px}.L-royal .hero .lead{text-shadow:0 1px 12px var(--bg)}
.L-royal .hero .lead{margin:0 auto}.L-royal .ctas,.L-royal .trust{justify-content:center}
.L-royal .hero::after{content:"";position:absolute;inset:0;background:radial-gradient(closest-side,transparent 30%,var(--bg) 100%);z-index:1;pointer-events:none}

/* EDITORIAL: light, asymmetric, arch frame */
.L-editorial .hero .wrap{display:grid;grid-template-columns:1.15fr .85fr;gap:60px;align-items:center;width:100%}
.L-editorial .hero h1{font-size:clamp(54px,7.4vw,112px);margin:22px 0 24px}
.L-editorial .frame{position:relative;aspect-ratio:3/4.2;border-radius:999px 999px 0 0;overflow:hidden;background:var(--bg2);border:1px solid var(--line)}
.L-editorial .frame .art{position:absolute;inset:8% 6% 0}
.L-editorial .frame::after{content:"";position:absolute;inset:14px;border:1px solid color-mix(in srgb,var(--acc) 55%,transparent);border-radius:999px 999px 0 0;pointer-events:none}
.L-editorial .vtx{position:absolute;right:-34px;top:50%;transform:rotate(90deg) translateX(-50%);transform-origin:right top;font:600 11px var(--fb);letter-spacing:.4em;text-transform:uppercase;color:var(--muted);white-space:nowrap}
.L-editorial .sh{text-align:left;margin-left:0}
@media (max-width:900px){.L-editorial .hero .wrap{grid-template-columns:1fr}.L-editorial .frame{max-width:min(230px,60vw);order:-1}.L-editorial .vtx{display:none}}

/* BOLD: huge type, colour blocks */
.L-bold .hero .wrap{position:relative;z-index:2;width:100%}
.L-bold .hero h1{font-size:clamp(52px,8.2vw,140px);line-height:.92;margin:20px 0 26px;max-width:11ch}@media (min-width:901px){.L-bold .hero .wrap>*{max-width:60%}}
.L-bold .hero .art{position:absolute;right:-3vw;top:50%;width:min(540px,42vw);aspect-ratio:1;transform:translateY(-50%);z-index:1;opacity:.95}
.L-bold .hero .lead{max-width:30em}
.L-bold .band{background:var(--acc);color:var(--on)}.L-bold .band .dt p,.L-bold .band .sh p,.L-bold .band .dt .k{color:color-mix(in srgb,var(--on) 75%,transparent)}.L-bold .band .dt::before{background:var(--on)}.L-bold .band .day{border-color:color-mix(in srgb,var(--on) 30%,transparent)}.L-bold .band .kick{color:var(--on)}
.L-bold .sh{text-align:left;margin-left:0}
@media (max-width:900px){.L-bold .hero .art{position:relative;right:auto;top:auto;transform:none;width:70vw;margin:-10px 0 0 auto;opacity:.9}.L-bold .hero{flex-direction:column}}

/* MINIMAL: thin lines, split hero, numbers */
.L-minimal .hero .wrap{display:grid;grid-template-columns:1fr 1fr;gap:0;width:100%;border:1px solid var(--line)}
.L-minimal .hero .txt{padding:clamp(28px,5vw,64px);border-right:1px solid var(--line)}
.L-minimal .hero .art{padding:clamp(20px,4vw,50px);display:grid;place-items:center}
.L-minimal .hero h1{font-size:clamp(48px,6vw,92px);margin:22px 0 22px}
.L-minimal .sv{border-radius:0;background:transparent}.L-minimal .svc{gap:0;border:1px solid var(--line)}.L-minimal .sv{border:0;border-right:1px solid var(--line)}.L-minimal .sv:last-child{border-right:0}
@media (max-width:900px){.L-minimal .hero .wrap{grid-template-columns:1fr}.L-minimal .hero .txt{border-right:0;border-bottom:1px solid var(--line)}.L-minimal .hero .art{max-height:360px}.L-minimal .sv{border-right:0;border-bottom:1px solid var(--line)}}
`;
  document.head.insertAdjacentHTML("beforeend", `<style>${css}</style>`);

  /* ---------- art ---------- */
  const A = T.acc, B = T.acc2, I = T.ink;
  const star8 = (cx, cy, r, extra = "") => { const p = []; for (let i = 0; i < 16; i++) { const a = Math.PI / 8 * i - Math.PI / 2, rr = i % 2 ? r * .62 : r; p.push((cx + rr * Math.cos(a)).toFixed(1) + "," + (cy + rr * Math.sin(a)).toFixed(1)); } return `<polygon points="${p.join(" ")}" ${extra}/>`; };
  const arts = {
    arch: `<g fill="none" stroke="${A}" stroke-width="2.2"><path class="draw" style="--len:1500" d="M90 470 V230 C90 120 150 60 250 60 C350 60 410 120 410 230 V470"/><path class="draw" style="--len:1300" d="M120 470 V236 C120 140 172 92 250 92 C328 92 380 140 380 236 V470" opacity=".6"/><path class="draw" style="--len:900" d="M180 470 V300 C180 250 210 220 250 220 C290 220 320 250 320 300 V470" opacity=".5"/></g>
      <g class="spin" >${star8(250, 160, 46, `fill="none" stroke="${A}" stroke-width="2"`)}${star8(250, 160, 26, `fill="${A}" opacity=".25"`)}</g>
      <path class="tw" d="M70 110 l6 16 16 6 -16 6 -6 16 -6 -16 -16 -6 16 -6z" fill="${A}"/><path class="tw d2" d="M430 150 l5 13 13 5 -13 5 -5 13 -5 -13 -13 -5 13 -5z" fill="${B}"/><path class="tw d3" d="M440 400 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4z" fill="${A}"/>`,
    zellige: (() => { let g = ""; for (let y = 0; y < 5; y++) for (let x = 0; x < 5; x++) g += star8(50 + x * 100, 50 + y * 100, 46, `fill="none" stroke="${(x + y) % 2 ? A : B}" stroke-width="1.6" opacity="${.35 + ((x * 7 + y * 3) % 5) / 10}"`); return `<g class="spin">${g}</g><g class="spin f r">${star8(250, 250, 120, `fill="none" stroke="${A}" stroke-width="2.4"`)}${star8(250, 250, 74, `fill="${A}" opacity=".18"`)}</g>`; })(),
    lantern: `<line x1="250" y1="0" x2="250" y2="70" stroke="${A}" stroke-width="2"/><g class="sway" style="transform-origin:250px 0"><path d="M215 70 h70 l12 30 h-94z" fill="${A}"/><path d="M200 100 h100 l26 70 v140 l-26 60 h-100 l-26 -60 v-140z" fill="none" stroke="${A}" stroke-width="3"/>
      <path d="M200 100 l-26 70 v140 l26 60 M300 100 l26 70 v140 l-26 60 M250 100 v270" stroke="${A}" stroke-width="1.4" fill="none" opacity=".6"/>${star8(250, 240, 34, `fill="${A}" opacity=".9"`)}<circle class="glow" cx="250" cy="240" r="90" fill="${A}" opacity=".18"/><path d="M215 370 h70 l-12 26 h-46z" fill="${A}"/><circle cx="250" cy="410" r="8" fill="${A}"/></g>
      <path class="tw" d="M90 160 l6 16 16 6 -16 6 -6 16 -6 -16 -16 -6 16 -6z" fill="${A}"/><path class="tw d2" d="M410 300 l5 13 13 5 -13 5 -5 13 -5 -13 -13 -5 13 -5z" fill="${B}"/>`,
    amariya: `<g fill="none" stroke="${A}" stroke-width="2.4"><path class="draw" style="--len:900" d="M130 250 C130 150 190 96 250 70 C310 96 370 150 370 250"/><path class="draw" style="--len:600" d="M120 250 h260 v130 h-260z"/><path class="draw" style="--len:500" d="M160 380 v-90 a30 30 0 0 1 60 0 v90 M280 380 v-90 a30 30 0 0 1 60 0 v90"/><path d="M90 400 h320" stroke-width="5"/><path d="M60 420 h380" stroke-width="2" opacity=".6"/></g>
      <circle cx="250" cy="62" r="10" fill="${A}"/><g class="spin f">${star8(250, 180, 34, `fill="${A}" opacity=".3"`)}</g>
      <path class="tw" d="M70 140 l6 16 16 6 -16 6 -6 16 -6 -16 -16 -6 16 -6z" fill="${A}"/><path class="tw d2" d="M430 120 l5 13 13 5 -13 5 -5 13 -5 -13 -13 -5 13 -5z" fill="${B}"/><path class="tw d3" d="M420 330 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4z" fill="${A}"/>`,
    cloche: `<path class="steam" d="M200 120 q-14 -24 0 -48 q14 -24 0 -48" stroke="${A}" stroke-width="4" fill="none" stroke-linecap="round"/><path class="steam d2" d="M250 112 q-14 -24 0 -48 q14 -24 0 -48" stroke="${A}" stroke-width="4" fill="none" stroke-linecap="round"/><path class="steam d3" d="M300 120 q-14 -24 0 -48 q14 -24 0 -48" stroke="${A}" stroke-width="4" fill="none" stroke-linecap="round"/>
      <g class="sway" style="transform-origin:250px 330px;animation-duration:6s"><path d="M110 320 C110 220 175 160 250 160 C325 160 390 220 390 320z" fill="none" stroke="${A}" stroke-width="3"/><path d="M140 300 C150 240 190 200 240 192" stroke="${A}" stroke-width="2" fill="none" opacity=".5"/><circle cx="250" cy="148" r="14" fill="${A}"/></g>
      <path d="M70 330 h360" stroke="${A}" stroke-width="6" stroke-linecap="round"/><ellipse cx="250" cy="350" rx="150" ry="14" fill="${A}" opacity=".15"/>
      <g class="spin f" opacity=".7">${star8(400, 120, 18, `fill="${B}"`)}</g><path class="tw" d="M90 170 l6 16 16 6 -16 6 -6 16 -6 -16 -16 -6 16 -6z" fill="${A}"/>`
  };
  const ic = {
    gown: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M18 6h12l-2 8 6 28H14l6-28z"/><path d="M18 14h12"/></svg>`,
    crown: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 34l4-20 8 10 4-14 4 14 8-10 4 20z"/><path d="M8 40h32"/></svg>`,
    hand: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M16 42V20a3 3 0 0 1 6 0v8M22 26V14a3 3 0 0 1 6 0v12M28 24V16a3 3 0 0 1 6 0v12c0 8-5 14-12 14h-2a10 10 0 0 1-8-4l-4-6a3 3 0 0 1 5-3l3 3"/><circle cx="25" cy="34" r="2"/></svg>`,
    star: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6">${star8(24, 24, 18, "")}</svg>`,
    plate: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 32h36M10 32c0-9 6-16 14-16s14 7 14 16"/><circle cx="24" cy="13" r="2"/></svg>`,
    cake: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M10 40h28V28H10zM14 28v-8h20v8M18 20v-6h12v6M24 14V9"/></svg>`,
    team: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="17" cy="16" r="5"/><circle cx="31" cy="16" r="5"/><path d="M8 38c0-6 4-10 9-10s9 4 9 10M22 38c0-6 4-10 9-10s9 4 9 10"/></svg>`,
    flower: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="24" cy="20" r="4"/><path d="M24 16c0-6 6-8 6-2s-6 6-6 6M24 16c0-6-6-8-6-2s6 6 6 6M28 20c6 0 8 6 2 6s-6-6-6-6M20 20c-6 0-8 6-2 6s6-6 6-6M24 26v16"/></svg>`
  };
  const pin = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>`;
  const clock = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`;
  const tel = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>`;
  const waI = `<svg width="30" height="30" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4a.5.5 0 0 0 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z"/></svg>`;
  const maps = `https://www.google.com/maps/place/?q=place_id:${S.placeId}`;
  const wa = t => `https://wa.me/${S.wa}${t ? "?text=" + encodeURIComponent(t) : ""}`;
  const today = new Date(Date.now() + 864e5 * 30).toISOString().slice(0, 10);
  const artSvg = `<div class="art" aria-hidden="true"><svg viewBox="0 0 500 500">${arts[S.art]}</svg></div>`;
  const heroText = `<span class="kick hero-in">${esc(S.kicker)}</span><h1 class="split">${S.h1}</h1><p class="lead hero-in">${esc(S.lead)}</p>
    <div class="ctas hero-in"><a class="btn btn-a" href="#contact">${esc(S.cta)}</a><a class="btn btn-o" href="tel:+${S.wa}">${esc(S.phone)}</a></div>
    ${S.rating ? `<div class="trust hero-in"><span class="stars">★★★★★</span><b>${String(S.rating).replace(".", ",")}/5</b><span>· ${S.reviewCount} avis Google</span></div>` : ""}`;
  const hero = L === "editorial" ? `<section class="hero"><div class="wrap"><div>${heroText}</div><div class="frame hero-in">${artSvg}<span class="vtx">${esc(S.city)} · Maroc</span></div></div></section>`
    : L === "minimal" ? `<section class="hero"><div class="wrap"><div class="txt">${heroText}</div>${artSvg}</div></section>`
    : `<section class="hero">${artSvg}<div class="wrap">${heroText}</div></section>`;
  const logoMark = `<svg width="26" height="26" viewBox="0 0 48 48" fill="currentColor">${star8(24, 24, 20, "")}</svg>`;
  const gGrad = (i) => [`conic-gradient(from 0deg,${A},${B},${A})`, `conic-gradient(from 90deg,${B},${T.bg2},${A},${B})`, `conic-gradient(from 180deg,${A},${T.ink},${B},${A})`, `conic-gradient(from 45deg,${T.bg2},${A},${B},${T.bg2})`][i % 4];

  document.body.innerHTML = `
<header id="hdr"><div class="wrap bar"><a class="logo" href="#top">${logoMark}${esc(S.short)}</a>
<nav aria-label="Navigation"><a href="#services">${esc(S.navSvc)}</a><a href="#jour">Le jour J</a><a href="#avis">Avis</a><a href="#contact">Contact</a></nav>
<a class="btn btn-a" href="#contact">${esc(S.navCta)}</a></div></header>
<main id="top">
${hero}
<div class="marq" aria-hidden="true"><div class="tr">${[...S.marquee, ...S.marquee].map(m => `<span>${esc(m)}</span>`).join("")}</div></div>
<section id="services"><div class="wrap"><div class="sh"><span class="kick">${esc(S.svcKick)}</span><h2 class="split">${esc(S.svcTitle)}</h2><p class="rv">${esc(S.svcSub)}</p></div>
<div class="svc">${S.services.map((s, i) => `<article class="sv rv"><div class="ic">${ic[s.i]}</div><span class="n">0${i + 1}</span><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></article>`).join("")}</div></div></section>
<section class="band" id="jour"><div class="wrap"><div class="sh"><span class="kick">Le jour J</span><h2 class="split">${esc(S.dayTitle)}</h2><p class="rv">${esc(S.daySub)}</p></div>
<div class="day">${S.steps.map((s, i) => `<div class="dt rv"><span class="k">Étape 0${i + 1}</span><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></div>`).join("")}</div>
${S.rating ? `<div class="stats rv"><div><b>${String(S.rating).replace(".", ",")}</b><span>Note Google</span></div><div><b>${S.reviewCount}</b><span>Avis clients</span></div><div><b>${esc(S.city)}</b><span>${esc(S.cityNote)}</span></div></div>` : ""}
</div></section>
<section><div class="wrap"><div class="gal">${S.looks.map((l, i) => `<div class="ph rv" style="--g:${gGrad(i)}"><svg viewBox="0 0 100 100">${star8(50, 50, 40, 'fill="none" stroke="#fff" stroke-width="1"')}</svg><b>${esc(l)}</b></div>`).join("")}</div></div></section>
${S.reviews.length ? `<section id="avis" style="padding-top:20px"><div class="wrap"><div class="sh"><span class="kick">Avis Google</span><h2 class="split">${esc(S.revTitle)}</h2><p class="rv">Extraits d'avis laissés par des clients sur Google${S.translated ? ", traduits en français" : ""}.</p></div>
<div class="revs">${S.reviews.map(r => `<figure class="rev rv" style="margin:0"><span class="stars">★★★★★</span><p>${esc(r)}</p><small>AVIS GOOGLE</small></figure>`).join("")}</div>
<p style="text-align:center;margin-top:34px" class="rv"><a class="btn btn-o" href="${maps}" target="_blank" rel="noopener">Voir tous les avis sur Google</a></p></div></section>` : ""}
<section style="padding-top:20px"><div class="wrap"><div class="sh"><span class="kick">Questions</span><h2 class="split">Avant de réserver.</h2></div>
<div class="faq">${S.faq.map(f => `<div class="qa rv"><button type="button" aria-expanded="false"><span>${esc(f.q)}</span><span class="pm" aria-hidden="true">+</span></button><div class="ans"><div><p>${esc(f.a)}</p></div></div></div>`).join("")}</div></div></section>
<section class="contact band" id="contact"><div class="wrap"><div><span class="kick">Réservation</span><h2 class="split" style="margin-top:18px">${esc(S.contactTitle)}</h2><p class="rv" style="color:inherit;opacity:.75;font-size:18px;margin:20px 0 0">${esc(S.contactSub)}</p>
<div class="info rv"><div>${pin}<p style="margin:0"><b>${esc(S.address)}</b><span><a href="${maps}" target="_blank" rel="noopener">Itinéraire sur Google Maps</a></span></p></div>
${S.hours.length ? `<div>${clock}<div><b>Horaires</b><div class="hours">${S.hours.map(h => `<span>${esc(h[0])}</span><span>${esc(h[1])}</span>`).join("")}</div></div></div>` : ""}
<div>${tel}<p style="margin:0"><b><a href="tel:+${S.wa}">${esc(S.phone)}</a></b><span>Appel ou WhatsApp</span></p></div></div></div>
<form id="f" novalidate class="rv"><h3>${esc(S.formTitle)}</h3>
<div class="r2"><label>Nom<input id="fn" autocomplete="name" placeholder="Votre nom"></label><label>Téléphone<input id="fp" type="tel" autocomplete="tel" placeholder="06 00 00 00 00"></label></div>
<label>${esc(S.svcLabel)}<select id="fs">${S.services.map(s => `<option>${esc(s.t)}</option>`).join("")}<option>Autre demande</option></select></label>
<div class="r2"><label>Date de l'événement<input id="fd" type="date" min="${new Date().toISOString().slice(0, 10)}" value="${today}"></label><label>${esc(S.extraLabel)}<input id="fx" inputmode="numeric" placeholder="${esc(S.extraHint)}"></label></div>
<label>Message (optionnel)<textarea id="fm" rows="3" placeholder="${esc(S.msgHint)}"></textarea></label>
<p class="err" id="err" role="alert"></p><button class="btn btn-a" type="submit">Envoyer sur WhatsApp</button></form></div></section>
</main>
<footer><div class="wrap"><span>© ${esc(S.name)} · ${esc(S.city)}</span><span>Site réalisé par Redone</span></div></footer>
<a class="wa" href="${wa()}" target="_blank" rel="noopener" aria-label="Écrire sur WhatsApp">${waI}</a>`;

  const fit = () => document.querySelectorAll("h1,h2,h3").forEach(h => { h.style.fontSize = ""; for (let i = 0; i < 14 && h.scrollWidth > h.clientWidth + 1; i++) h.style.fontSize = (parseFloat(getComputedStyle(h).fontSize) * .93) + "px"; });
  fit(); document.fonts && document.fonts.ready.then(fit); let rz; addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(fit, 150); });
  const $ = id => document.getElementById(id);
  const hdr = $("hdr"); addEventListener("scroll", () => hdr.classList.toggle("solid", scrollY > 40), { passive: true });
  document.querySelectorAll(".qa").forEach(q => { const b = q.querySelector("button"); b.addEventListener("click", () => { const o = !q.classList.contains("open"); q.classList.toggle("open", o); b.setAttribute("aria-expanded", o); }); });
  $("f").addEventListener("submit", e => {
    e.preventDefault(); const n = $("fn").value.trim(), p = $("fp").value.trim();
    if (!n || p.replace(/\D/g, "").length < 9) { $("err").textContent = "Ajoutez votre nom et un numéro valide pour qu'on puisse vous répondre."; return; }
    $("err").textContent = ""; const m = $("fm").value.trim(), x = $("fx").value.trim();
    window.open(wa(`${S.msgIntro}\nNom : ${n}\nTéléphone : ${p}\n${S.svcLabel} : ${$("fs").value}\nDate : ${$("fd").value}${x ? "\n" + S.extraLabel + " : " + x : ""}${m ? "\nMessage : " + m : ""}`), "_blank", "noopener");
  });
  const unhide = () => { root.classList.remove("motion"); document.querySelectorAll(".split").forEach(e => e.style.visibility = "visible"); document.querySelectorAll(".draw").forEach(p => p.style.strokeDashoffset = 0); };
  if (reduce) return unhide();
  const load = src => new Promise((ok, ko) => { const s = document.createElement("script"); s.src = src; s.onload = ok; s.onerror = ko; document.head.appendChild(s); });
  const safety = setTimeout(unhide, 4000);
  load("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js").then(() => load("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js")).then(run).catch(unhide);
  function split(el) { const walk = n => [...n.childNodes].map(c => c.nodeType === 3 ? c.textContent.split(/(\s+)/).map(t => t.trim() ? `<span class="w"><span>${t}</span></span>` : t).join("") : `<${c.tagName.toLowerCase()}>${walk(c)}</${c.tagName.toLowerCase()}>`).join(""); el.innerHTML = walk(el); return el.querySelectorAll(".w>span"); }
  function run() {
    clearTimeout(safety); gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.from(split(document.querySelector(".hero h1")), { yPercent: 120, duration: 1.4, stagger: .07 })
      .from(".hero-in", { opacity: 0, y: 26, duration: 1.1, stagger: .12 }, "-=1.1")
      .from(".hero .art", { opacity: 0, scale: .9, duration: 1.8 }, .1)
      .to(".hero .draw", { strokeDashoffset: 0, duration: 2.6, ease: "power2.inOut", stagger: .2 }, .2);
    gsap.to(".hero .art", { yPercent: L === "royal" ? 8 : 14, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    document.querySelectorAll("section:not(.hero) .split").forEach(h => gsap.from(split(h), { yPercent: 120, duration: 1.1, ease: "expo.out", stagger: .05, scrollTrigger: { trigger: h, start: "top 86%" } }));
    ScrollTrigger.batch(".rv", { start: "top 90%", onEnter: els => gsap.to(els, { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: .1 }) });
    gsap.utils.toArray(".dt").forEach((d, i) => gsap.from(d, { "--x": 0, scrollTrigger: { trigger: d, start: "top 85%" } }));
    fit(); addEventListener("load", () => { fit(); ScrollTrigger.refresh(); });
  }
})();
