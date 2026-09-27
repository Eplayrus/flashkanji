import { chromium } from "playwright";
import { preview } from "vite";
const server = await preview({ preview: { port: 4189, host: "127.0.0.1", strictPort: true } });
const browser = await chromium.launch();
try {
 for (const force of [true, false]) {
  const page = await browser.newPage({ viewport: { width: 393, height: 727 }, isMobile: true, hasTouch: true, serviceWorkers: "block" });
  await page.addInitScript(() => {
    const dueAt = new Date(Date.now()-60000).toISOString();
    localStorage.setItem("flashKanjiOnboardingCompleted.v3", "true");
    localStorage.setItem("flashKanji.changelog.lastSeenVersion", "2026.08.27");
    localStorage.setItem("flashKanji.progress.v2", JSON.stringify({ settings: { sound:false }, lessonCompletions: {"lesson-1":dueAt,"lesson-2":dueAt},
      cards:Object.fromEntries(["1","5","209","272","298"].map(id=>[id,{state:"Review",dueAt,reviewCount:1,correct:1,srsStep:1,history:[]}])),
      sentencePractice:{activeId:"sentence-auto-001",selected:[],checked:false,result:null,tileKeys:[],completed:{}}}));
    const events = window.scrollEvents = [];
    const log = (kind, detail) => events.push({kind,detail,y:scrollY,height:document.documentElement.scrollHeight,t:performance.now()});
    const scroll = window.scrollTo;
    window.scrollTo = (...args) => { log("scrollTo",args); return scroll.apply(window,args); };
    document.addEventListener("click", e=>log("click",e.target.closest("[data-action]")?.dataset.action),true);
    document.addEventListener("pointerdown", e=>log("pointer",e.target.closest("[data-action]")?.dataset.action),true);
  });
  await page.goto("http://127.0.0.1:4189/#review");
  const card=page.locator('.sentence-practice[data-section="sentence-practice"]');
  await card.waitFor();
  await page.evaluate(()=>{scrollTo(0,document.documentElement.scrollHeight);window.scrollEvents.length=0;});
  const before=await page.evaluate(()=>({y:scrollY,height:document.documentElement.scrollHeight}));
  const blanks=await card.locator('.sentence-slot').count();
  for(let i=0;i<blanks;i++) {
    const tile=card.locator('[data-action="insert-sentence-tile"]').nth(i);
    if(force) await tile.click({force:true}); else await tile.dispatchEvent("click");
  }
  await card.locator('[data-action="check-sentence"]').dispatchEvent("click");
  await page.waitForTimeout(950);
  console.log(JSON.stringify({force,before,after:await page.evaluate(()=>({y:scrollY,height:document.documentElement.scrollHeight,events:window.scrollEvents}))}));
  await page.close();
 }
} finally { await browser.close(); await new Promise(r=>server.httpServer.close(r)); }
