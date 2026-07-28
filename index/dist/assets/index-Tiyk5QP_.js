(function(){const C=document.createElement("link").relList;if(C&&C.supports&&C.supports("modulepreload"))return;for(const q of document.querySelectorAll('link[rel="modulepreload"]'))Y(q);new MutationObserver(q=>{for(const ee of q)if(ee.type==="childList")for(const M of ee.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&Y(M)}).observe(document,{childList:!0,subtree:!0});function F(q){const ee={};return q.integrity&&(ee.integrity=q.integrity),q.referrerPolicy&&(ee.referrerPolicy=q.referrerPolicy),q.crossOrigin==="use-credentials"?ee.credentials="include":q.crossOrigin==="anonymous"?ee.credentials="omit":ee.credentials="same-origin",ee}function Y(q){if(q.ep)return;q.ep=!0;const ee=F(q);fetch(q.href,ee)}})();const CS="modulepreload",LS=function(L,C){return new URL(L,C).href},Lp={},Ip=function(C,F,Y){let q=Promise.resolve();if(F&&F.length>0){const M=document.getElementsByTagName("link"),Z=document.querySelector("meta[property=csp-nonce]"),Ee=Z?.nonce||Z?.getAttribute("nonce");q=Promise.allSettled(F.map(fe=>{if(fe=LS(fe,Y),fe in Lp)return;Lp[fe]=!0;const dt=fe.endsWith(".css"),ks=dt?'[rel="stylesheet"]':"";if(!!Y)for(let Et=M.length-1;Et>=0;Et--){const Dt=M[Et];if(Dt.href===fe&&(!dt||Dt.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${fe}"]${ks}`))return;const ut=document.createElement("link");if(ut.rel=dt?"stylesheet":CS,dt||(ut.as="script"),ut.crossOrigin="",ut.href=fe,Ee&&ut.setAttribute("nonce",Ee),document.head.appendChild(ut),dt)return new Promise((Et,Dt)=>{ut.addEventListener("load",Et),ut.addEventListener("error",()=>Dt(new Error(`Unable to preload CSS for ${fe}`)))})}))}function ee(M){const Z=new Event("vite:preloadError",{cancelable:!0});if(Z.payload=M,window.dispatchEvent(Z),!Z.defaultPrevented)throw M}return q.then(M=>{for(const Z of M||[])Z.status==="rejected"&&ee(Z.reason);return C().catch(ee)})},_p=["home","learn","review","dictionary","download","about","kanji","stats","achievements","eva-room","jlpt-lesson","textbooks"];function rl(L){let C=L.replace(/^#/,"");try{C=decodeURIComponent(C)}catch{C=""}const F=C.split("/").filter(Boolean),Y=F[0]?.toLowerCase()||"home";return{route:Y==="jlpt"&&/^n[1-5]$/i.test(F[1]||"")?"textbooks":_p.includes(Y)?Y:"home",raw:C,segments:F}}function IS(){let L=0,C=null;return{begin(F){C?.abort(),C=new AbortController;const Y=++L,q=C;return{route:F,token:Y,signal:q.signal,isCurrent:()=>L===Y&&!q.signal.aborted}},abort(){C?.abort()}}}function TS(L){const C=()=>L(rl(window.location.hash));return window.addEventListener("hashchange",C),()=>window.removeEventListener("hashchange",C)}const $r=[5,60,12*60,24*60,2*24*60,4*24*60],sl={again:"Again",forgot:"Again",hard:"Hard",good:"Good",remember:"Good",easy:"Easy"};function Ua(L){const C=L&&typeof L=="object"?L:{},F=_S(C.state??C.stage),Y=MS(C.dueAt??C.nextReview),q=hn(C.reviewCount??C.reviews,0),ee=hn(C.correct,0),M=hn(C.wrong,0),Z={...C,state:F,dueAt:Y,reviewCount:q,intervalDays:hn(C.intervalDays,0),easeFactor:hn(C.easeFactor,2.5),srsStep:hn(C.srsStep,F==="New"?-1:0),lapses:hn(C.lapses,0),correct:ee,wrong:M,successRate:hn(C.successRate,ee+M?Math.round(ee/(ee+M)*100):0),history:Array.isArray(C.history)?C.history.slice(-120):[]};return delete Z.nextReview,delete Z.reviews,delete Z.stage,delete Z.lastReview,Z}function be(L,C,F=C,Y=new Date){const q=Ua(L),ee=RS(q,C),M={...q,history:[...q.history]};let Z=q.srsStep,Ee=q.easeFactor;ee==="again"?(Z=0,Ee=Math.max(1.3,Ee-.2),M.state="Learning",M.wrong+=1,q.state!=="New"&&(M.lapses+=1)):ee==="hard"?(Z=Math.max(1,Z),Ee=Math.max(1.3,Ee-.15),M.correct+=1):ee==="easy"?(Z=Z<0?2:Z+2,Ee=Math.min(3.2,Ee+.15),M.correct+=1):(Z=Z<0?0:Z+1,M.correct+=1);const fe=PS(Z)/1440;return ee!=="again"&&(M.state=fe<1?"Learning":"Review"),M.correct>=8&&fe>=30&&(M.state="Mastered"),M.srsStep=Z,M.easeFactor=Tp(Ee,2),M.intervalDays=Tp(fe,6),M.dueAt=new Date(Y.getTime()+fe*864e5).toISOString(),M.reviewCount+=1,M.successRate=Math.round(M.correct/Math.max(M.correct+M.wrong,1)*100),M.lastReviewedAt=Y.toISOString(),M.lastRating=sl[F]||sl[ee],M.lastDecision=sl[ee],M.history=[...M.history,{at:Y.toISOString(),rating:M.lastRating,decision:M.lastDecision,from:q.state,to:M.state,intervalDays:fe,srsStep:Z}].slice(-120),M}function RS(L,C){return C==="again"||C==="forgot"?"again":C!=="remember"?C:L.state==="New"?"good":L.state==="Learning"?L.successRate>=70||L.correct>=2?"good":"hard":L.successRate>=88&&L.correct>=5&&L.lapses<=1?"easy":L.successRate<70||L.lapses>Math.max(1,Math.floor(L.correct/3))?"hard":"good"}function _S(L){const C=String(L||"new").toLowerCase();return C.includes("master")?"Mastered":C.includes("learn")?"Learning":C.includes("review")?"Review":"New"}function MS(L){return typeof L!="string"||!Number.isFinite(Date.parse(L))?null:new Date(L).toISOString()}function hn(L,C){const F=Number(L);return Number.isFinite(F)&&F>=0?F:C}function Tp(L,C){const F=10**C;return Math.round(L*F)/F}function PS(L){return L<$r.length?$r[Math.max(0,L)]:$r[$r.length-1]*2**(L-($r.length-1))}const Mp="flashKanji.progress.v2",ES="flashKanji.progress.v1";function DS(L=localStorage){const C=L.getItem(Mp)||L.getItem(ES);if(!C)return null;try{const F=JSON.parse(C);if(!F||typeof F!="object")return null;const Y=F;return Y.progress&&typeof Y.progress=="object"?Y.progress:Y}catch(F){return console.warn("Flash Kanji ignored damaged LocalStorage progress.",F),null}}function KS(L){return!L||typeof L!="object"?{}:Object.fromEntries(Object.entries(L).map(([C,F])=>[C,Ua(F)]))}function OS(L,C=localStorage){try{return C.setItem(Mp,JSON.stringify(L)),!0}catch(F){return console.warn("Flash Kanji could not save LocalStorage progress.",F),!1}}const FS=/[\/／,、;；\s]+/u,BS=/[\u30a1-\u30f6]/g,zS=/[()[\]{}.\-‐-―]/gu;function JS(L){return String(L||"").normalize("NFKC").replace(BS,C=>String.fromCharCode(C.charCodeAt(0)-96))}function Pp(L){return(Array.isArray(L)?L.join(" / "):String(L||"")).split(FS).map(F=>JS(F).replace(zS,"").trim()).filter(Boolean)}function US(L){if(!L)return[];const C=[...Rp("onyomi","On",L.onyomi),...Rp("kunyomi","Kun",L.kunyomi)],F=new Set,Y=C.filter(M=>{const Z=M.kana;return!Z||F.has(Z)?!1:(F.add(Z),!0)});if(Y.length)return Y;const q=Pp(L.hiragana)[0];if(q)return[{kind:"hiragana",kana:q,label:"Kana"}];const ee=String(L.kanji||"").trim();return ee?[{kind:"kanji",kana:ee,label:"Kanji"}]:[]}function GS(L,C=-1,F=""){const Y=F&&F!=="cycle"?L.filter(ee=>ee.kind===F):L;if(!Y.length)return{item:null,cursor:-1};const q=(Number(C)+1)%Y.length;return{item:Y[q],cursor:q}}function qS(L,C={}){const F=String(L||"").trim(),Y=typeof window<"u"?window:void 0,q=C.synth||Y?.speechSynthesis,ee=C.Utterance||Y?.SpeechSynthesisUtterance;if(!F||!q||!ee)return!1;q.cancel();const M=new ee(F);M.lang="ja-JP",M.rate=C.rate??.92,M.voice=HS(q),M.onend=()=>C.onEnd?.(),M.onerror=Z=>C.onError?.(Z);try{return q.speak(M),!0}catch(Z){return C.onError?.(Z),!1}}function Rp(L,C,F){return Pp(F).map(Y=>({kind:L,kana:Y,label:C}))}function HS(L){const C=typeof L.getVoices=="function"?L.getVoices():[];return C.find(F=>/^ja[-_]?JP$/iu.test(F.lang))||C.find(F=>/^ja/iu.test(F.lang))||null}(()=>{const L="flashKanji.pwaInstallPrompt.v2",C="flashKanji.pwaInstallPrompt.v1",F="flashKanji.notificationPrompt.v1",Y="flashkanji_customization",q="flashkanji_eva_state_v2",M="local-1785229242149",Ee=`flashKanji.hiddenMascotSpeeches:${M}`,fe="moonfarm",dt="flashKanji.appBuild.v1",ks="flashKanji.pwaCacheReset.v1",jr="flashKanji.bootRecovery.v1",ut=109492033,Et={instagram:"https://www.instagram.com/fallinginto_silence?igsh=MWpzYW1ncTB1a3FuNw==",youtube:"https://youtube.com/@fallingintosilence?si=cJ97__ndJ1aaaMae"},Dt="aleksey.lebedev606@gmail.com",Ep="Flash Kanji bug report",Dp="https://drive.google.com/uc?export=download&id=1lIwF4vLq2DNAQ_Hufkmve7-m3bLWpvua",Kp="downloads/flash-kanji-android.apk",Op="assets/download/android-app-screenshot.png",Sr="flashKanji.forcePwaCacheReset.v1",J={lessons:"data/lessons.json",dialogues:"data/dialogues.json",i18n:"data/i18n.json",rewards:"data/rewards.json",kanjiMeta:"data/kanji/meta.json",kanjiHints:"data/kanji/hints.json",kanjiTranslations:"data/kanji/translations.json",kanjiStrokes:"data/kanji/stroke-order-kanjivg.json",kanjiPageSources:"data/sources/kanji-page-sources.json",lessonTranslations:"data/lessons/translations.json",vocabulary:"data/vocabulary/index.json",sentences:"data/sentences/index.json",achievements:"data/achievements/index.json",jlptCatalog:"data/jlpt/index.json",jlptLessons:"data/jlpt-lessons.json",jlptPracticeLessons:"data/jlpt-practice-lessons.json",n5Meta:"data/jlpt/n5/meta.json",n5Lessons:"data/jlpt/n5/lessons.json",n5Kanji:"data/jlpt/n5/kanji.json",n5Exercises:"data/jlpt/n5/exercises.json",n5FinalTest:"data/jlpt/n5/final-test.json",n5Reading:"data/jlpt/n5/reading.json",n4Meta:"data/jlpt/n4/meta.json",n4Lessons:"data/jlpt/n4/lessons.json",n4Kanji:"data/jlpt/n4/kanji.json",n4Grammar:"data/jlpt/n4/grammar.json",n4Exercises:"data/jlpt/n4/exercises.json",n4Reading:"data/jlpt/n4/reading.json",n4Listening:"data/jlpt/n4/listening.json",n4FinalTest:"data/jlpt/n4/final-test.json",n3Meta:"data/jlpt/n3/meta.json",n3Lessons:"data/jlpt/n3/lessons.json",n3Kanji:"data/jlpt/n3/kanji.json",n3Grammar:"data/jlpt/n3/grammar.json",n3Exercises:"data/jlpt/n3/exercises.json",n3Reading:"data/jlpt/n3/reading.json",n3Listening:"data/jlpt/n3/listening.json",n3FinalTest:"data/jlpt/n3/final-test.json",n2Meta:"data/jlpt/n2/meta.json",n2Lessons:"data/jlpt/n2/lessons.json",n2Kanji:"data/jlpt/n2/kanji.json",n2Grammar:"data/jlpt/n2/grammar.json",n2Exercises:"data/jlpt/n2/exercises.json",n2Reading:"data/jlpt/n2/reading.json",n2Listening:"data/jlpt/n2/listening.json",n2FinalTest:"data/jlpt/n2/final-test.json",n1Meta:"data/jlpt/n1/meta.json",n1Reading:"data/jlpt/n1/reading.json",jlptReadingMarkdown:"data/jlpt/reading-texts_N5_N1.md",jlptReadingTranslations:"data/jlpt/reading-texts_N5_N1.translations.json",monetization:"data/monetization/catalog.json",customizationShop:"data/customization-shop.json",evaBackgrounds:"data/eva-backgrounds.json",evaSprites:"data/eva-sprites.json",evaRoomDialogues:"data/eva-room-dialogues.json",evaAutonomyLines:"data/eva-autonomy-lines.json",evaExpandedDialogues:"data/eva-expanded-dialogues.json",evaFisPersonality:"data/eva-fis-personality.json",evaPresence:"data/eva-presence.json"},Fp={forgot:"Forgot",remember:"Remember",again:"Again",hard:"Hard",good:"Good",easy:"Easy"},Bp={New:"New",Learning:"Learning",Review:"Review",Mastered:"Mastered",new:"New",learning:"Learning",review:"Review",mastered:"Mastered"},Le=["N5","N4","N3","N2","N1"],le=new Set,zp={nihon:"Japan",kyou:"today",getsuyoubi:"Monday",ichigatsu:"January",nihonjin:"Japanese person",hitori:"one person",honya:"bookstore",ichinichi:"one day",ichiban:"number one, the best",nigatsu:"February",futari:"two people",jikan:"time, hour",nanji:"what time",kotoshi:"this year",rainen:"next year",kaimono:"shopping",kounyuu:"purchase",baiten:"kiosk, shop stall",hatsubai:"release, sale",shiyou:"use",tsukaikata:"how to use",soushin:"message sending",housou:"broadcast",sekai:"world",sedai:"generation",gyoukai:"industry",toukou:"post, publication",toushi:"investment",jouhou:"information",houkoku:"report",kakunin:"confirmation, check",shounin:"approval",kaigi:"meeting",giron:"discussion",kengen:"access rights, permission",chosakuken:"copyright",eikyou:"influence",hibiku:"to sound, to resonate"},al={xp:12,coins:2},il="flashKanjiOnboardingCompleted.v3",ol="flashKanjiOnboardingCompleted",ll="flashKanjiOnboardingAudience.v1",Jp=850,cl=450,Up=420,Gp=[..._p],ys=72,qp=96,dl=1,ul="N5",$s="map",Kt="lesson",vn="legacy",he="intro-kanji",On="review-due",Fn="n5-checkpoint",Hp=[he,"n5-lesson-1","n5-lesson-2","n5-lesson-3","n5-lesson-4","n5-lesson-5","n5-lesson-6","n5-lesson-7","n5-lesson-8","n5-lesson-9","n5-lesson-10",Fn],Wp={"n5-lesson-1":"data/textbooks/n5/lesson-1.json"},Qp=new Set(["lesson-1","lesson-2","bulk-n5-01"]),pl=7e3,gl=8e3,Xp=new Set(["dictionary","kanji","stats","jlpt-lesson","textbooks"]),r={route:Yo(),lessons:[],cards:[],i18n:null,dialogues:null,rewards:null,kanjiMeta:{},kanjiHints:{},kanjiTranslations:{},kanjiStrokes:{},kanjiPageSources:{},lessonTranslations:{},vocabulary:[],sentenceExercises:[],achievements:[],achievementCategories:[],jlptCatalog:{version:1,generatedAt:null,items:[]},jlptLessons:[],jlptPracticeLessons:[],n5Meta:null,n5Textbook:null,n5KanjiCatalog:[],n5Exercises:null,n5FinalTest:null,n4Meta:null,n4Textbook:null,n4KanjiCatalog:[],n4Grammar:[],n4Exercises:null,n4Reading:[],n4Listening:[],n4FinalTest:null,n5Reading:[],n3Meta:null,n3Textbook:null,n3KanjiCatalog:[],n3Grammar:[],n3Exercises:null,n3Reading:[],n3Listening:[],n3FinalTest:null,n2Meta:null,n2Textbook:null,n2KanjiCatalog:[],n2Grammar:[],n2Exercises:null,n2Reading:[],n2Listening:[],n2FinalTest:null,n1Meta:null,n1Reading:[],jlptReadingMarkdown:"",jlptReadingByLevel:{N5:[],N4:[],N3:[],N2:[],N1:[]},jlptReadingTranslations:{},monetization:null,customizationCatalog:{categories:[],items:[]},customization:null,evaBackgrounds:[],evaSprites:{},evaRoomDialogues:[],evaRoomLines:[],evaAutonomyLines:[],evaFisPersonality:null,evaPresence:null,evaRuntime:null,evaRoomShopOpen:!1,progress:null,activeLessonId:null,activeJlptLesson:nl()||null,activeTextbookLevel:el()||null,activeTextbookSubroute:tl()||null,activeLearnView:Ap(),activeLearnNodeId:xp()||null,activeLearnLegacyLessonId:Cp()||null,learningPathLessonPayloads:{},activeCardId:null,activeExerciseReviewId:null,activeExerciseReviewLevel:"",activeExerciseReviewSource:"",activeExerciseReviewSelection:[],activeExerciseReviewChoice:"",activeExerciseReviewTranslationOpen:!1,reviewQueueLastKind:"",reviewSession:null,kanjiPageId:Zo(),revealed:!1,detailCardId:null,rewardModal:null,rewardQueue:[],finalTestModal:null,finalTestBusy:!1,contactModal:!1,pwaInstallHelpVisible:!1,charts:[],filters:{query:"",jlpt:"all",strokes:"all",radical:"all",favorites:"all"},dictionaryVisibleCount:ys,shopFilters:{category:"all",view:"all",sort:"featured"},sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[]},readingExercises:{},reviewExerciseResults:{},readingCheck:{cardId:null,value:"",status:null,message:""},writingStep:0,activeLearnJlpt:"all",navMenu:null,pendingFocus:null,pwaInstallPrompt:Oa(),notificationPrompt:wr(),notificationPromptVisible:!1,deferredDataLoaded:!1,deferredDataLoading:!1};Yo()==="textbooks"&&Pt(Sp(el(),tl()));const Vp=IS();let Nr=null,pt=null,ml="",fl=new Map,js=0,hl=0,Bn=0,wn=0,Ga=!1,bn=0,qa=!1,kn=0,Ar=!1,xr=!1,Cr=null,Ot=null,vl=0,Ha=0,zn=0,Ss=0,Wa=null,ce=null,De=null,ke=null,gt=-1,tt=!1,ge="step",mt=null,wl=null,Yp=null,Zp=null,Ns=null,As=0,bl=0,xs=null;const Lr=new Map;let Qa=0,Xa=0,Va=Math.floor(Date.now()/6e4),kl=0,Ir="",Ya=[];const Za=new Map,yn=new Map,ei=Date.now();typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const U={cardId:null,strokes:[],currentStroke:[],drawing:!1,activePointerId:null,completed:!1,demoAnimationId:0},ye=(e,t=document)=>t.querySelector(e),ti=(e,t=document)=>Array.from(t.querySelectorAll(e)),Ft=ye("#app"),yl=ye("#progressImport");document.addEventListener("click",Mm),document.addEventListener("pointerdown",Pm),document.addEventListener("input",ac),document.addEventListener("change",ac),document.addEventListener("keydown",Om),window.flashKanjiFarmMoon=(e=5e3)=>ic(e),window.startFlashKanjiOnboarding=xi,yl.addEventListener("change",pj),window.addEventListener("beforeinstallprompt",Fj),window.addEventListener("appinstalled",Ho),window.addEventListener("scroll",Li,{passive:!0}),window.addEventListener("resize",Li),window.addEventListener("eva:event",e=>{e.detail?.handledByFlashKanji||Tc(e.detail||{})}),document.addEventListener("visibilitychange",()=>{document.hidden||Ba("usage"),!document.hidden&&r.route==="eva-room"&&Es("return")&&(j(),N()),document.hidden&&fi()}),window.addEventListener("pagehide",fi),window.addEventListener("beforeunload",fi),TS(()=>{const e=Yo(),t=Zo(),n=e==="textbooks"?el():null,s=e==="textbooks"?tl():null,a=e==="jlpt-lesson"?nl():null,o=e==="learn"?Ap():$s,l=e==="learn"?xp():null,c=e==="learn"?Cp():null;if(e!==r.route||e==="kanji"&&t!==r.kanjiPageId||e==="textbooks"&&n!==r.activeTextbookLevel||e==="textbooks"&&s!==r.activeTextbookSubroute||e==="jlpt-lesson"&&a!==r.activeJlptLesson||e==="learn"&&o!==r.activeLearnView||e==="learn"&&l!==r.activeLearnNodeId||e==="learn"&&c!==r.activeLearnLegacyLessonId){const d=r.route;r.route=e,d!==e&&(d==="review"||e==="review")&&(r.reviewSession=null),r.kanjiPageId=e==="kanji"?t:null,r.activeTextbookLevel=e==="textbooks"?n:null,r.activeTextbookSubroute=e==="textbooks"?s:null,r.activeJlptLesson=e==="jlpt-lesson"?a:r.activeJlptLesson,r.activeLearnView=e==="learn"?o:$s,r.activeLearnNodeId=e==="learn"?l:null,r.activeLearnLegacyLessonId=e==="learn"?c:null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.pendingFocus=null,e!=="eva-room"&&(r.evaRoomShopOpen=!1),yt(),Jr(),Oe(),Cs(e)&&ni({route:e,delay:0}),e==="eva-room"&&we("room_opened")}}),eg();async function eg(){if(!await lg()&&!await og()){$l(!0),Ft.innerHTML.trim()?Ft.setAttribute("aria-busy","true"):Ft.innerHTML=_j(),r.progress=nm(),hs(),Oo(),Ij(),Fo(),Mt();try{const[e,t,n,s,a,o,l]=await Promise.all([jl({initialOnly:!0}),nt(J.i18n),nt(J.dialogues),nt(J.rewards,sg),nt(J.achievements,()=>({achievements:[],categories:[]})),nt(J.jlptCatalog,()=>({version:1,generatedAt:null,items:[]})),nt(J.jlptLessons,()=>({items:[]}))]),c=Tl(a,s.achievements||[]);r.lessons=e.lessons,r.cards=e.cards,r.i18n=t,r.dialogues=n,r.rewards=s,r.achievements=c.items,r.achievementCategories=c.categories,r.jlptCatalog=$g(o),r.jlptLessons=yg(l),r.rewards.achievements=r.achievements,Kr(),Hm(),Tr(),om(),Mt(),Uj();const d=Gm(r.progress);Dy(),qm(d),Fy(),H(),j(),N(),ag(),ni({route:r.route,delay:Cs(r.route)?0:pl}),Kj(),Ai(),rh(),Hf(),bp(),Qo();try{sessionStorage.removeItem(jr)}catch(u){console.warn("Could not clear boot recovery marker after successful startup.",u)}}catch(e){console.error(e),await Dj(e)||(Ft.innerHTML=Mj(e))}finally{$l(!1)}}}function $l(e){const t=document.querySelector(".app-shell");t&&(e?t.setAttribute("data-booting","true"):t.removeAttribute("data-booting")),Ft&&Ft.setAttribute("aria-busy",e?"true":"false")}function tg(e,t){return document.getElementById(t)?Promise.resolve():new Promise((n,s)=>{const a=document.createElement("script");a.id=t,a.src=e,a.defer=!0,a.onload=()=>n(),a.onerror=()=>s(new Error(`Cannot load ${e}`)),document.head.appendChild(a)})}function ng(e,{timeout:t=1800}={}){if("requestIdleCallback"in window){window.requestIdleCallback(e,{timeout:t});return}window.setTimeout(e,0)}function sg(){return{version:1,dailyGoals:[10,20,50],levelCurve:{baseXp:100,growth:1.35},lessonUnlocks:{"lesson-1":1,"lesson-2":2,"lesson-3":3,"lesson-4":5,"lesson-5":8,"bulk-n5-01":3,"bulk-n5-02":4,"bulk-n5-03":4,"bulk-n5-04":5,"bulk-n4-01":5,"bulk-n4-02":6,"bulk-n4-03":6,"bulk-n4-04":7,"bulk-n4-05":7,"bulk-n4-06":8,"bulk-n4-07":8,"bulk-n4-08":9,"bulk-n3-01":9,"bulk-n3-02":10,"bulk-n3-03":10,"bulk-n3-04":11,"bulk-n3-05":11,"bulk-n3-06":12,"bulk-n3-07":12,"bulk-n3-08":13,"bulk-n3-09":13,"bulk-n3-10":14,"bulk-n3-11":14,"bulk-n3-12":15,"bulk-n3-13":15,"bulk-n3-14":16,"bulk-n3-15":16,"bulk-n3-16":17,"bulk-n3-17":17,"bulk-n3-18":18,"bulk-n3-19":18,"bulk-n2-01":19,"bulk-n2-02":19,"bulk-n2-03":20,"bulk-n2-04":20,"bulk-n2-05":21,"bulk-n2-06":21,"bulk-n2-07":22,"bulk-n2-08":22,"bulk-n2-09":23,"bulk-n2-10":23,"bulk-n2-11":24,"bulk-n2-12":24,"bulk-n2-13":25,"bulk-n2-14":25,"bulk-n2-15":26,"bulk-n2-16":26,"bulk-n2-17":27,"bulk-n2-18":27,"bulk-n2-19":28,"bulk-n1-01":28,"bulk-n1-02":29,"bulk-n1-03":29,"bulk-n1-04":30,"bulk-n1-05":30,"bulk-n1-06":31,"bulk-n1-07":31,"bulk-n1-08":32,"bulk-n1-09":32,"bulk-n1-10":33,"bulk-n1-11":33},rewards:{correctXp:10,lessonCompleteXp:50,comboXp:15,dailyBonusXp:20,sentencePracticeXp:12,correctCoins:1,lessonCompleteCoins:8,achievementCoins:20,dailyBonusCoins:5,sentencePracticeCoins:2,streakCoins:10},shop:[{id:"frame_moon",type:"profileFrame",name:{ru:"Лунная рамка",en:"Moon frame"},cost:80},{id:"theme_gold",type:"theme",name:{ru:"Золотой акцент",en:"Gold accent"},cost:120},{id:"background_midnight",type:"background",name:{ru:"Полуночный фон",en:"Midnight background"},cost:150}],achievements:[{id:"first_lesson",name:{ru:"Первый урок",en:"First lesson"},description:{ru:"Завершить первый урок.",en:"Complete the first lesson."},kind:"lessonComplete",target:1,xp:50,coins:20},{id:"hundred_correct",name:{ru:"100 правильных ответов",en:"100 correct answers"},description:{ru:"Достичь 100 правильных ответов.",en:"Reach 100 correct answers."},kind:"correct",target:100,xp:120,coins:40},{id:"ten_kanji_learned",name:{ru:"10 изученных кандзи",en:"10 kanji learned"},description:{ru:"Начать изучать 10 кандзи.",en:"Start learning 10 kanji."},kind:"learned",target:10,xp:80,coins:30},{id:"seven_day_streak",name:{ru:"7-дневная серия",en:"7-day streak"},description:{ru:"Поддерживать серию 7 дней.",en:"Keep a streak for 7 days."},kind:"streak",target:7,xp:100,coins:35},{id:"jlpt_n5_done",name:{ru:"JLPT N5 пройден",en:"JLPT N5 complete"},description:{ru:"Освоить все карточки N5.",en:"Master every N5 card."},kind:"jlpt",jlpt:"N5",target:1,xp:180,coins:60},{id:"hundred_reviews",name:{ru:"100 повторений",en:"100 reviews"},description:{ru:"Выполнить 100 повторений.",en:"Complete 100 reviews."},kind:"reviews",target:100,xp:150,coins:55}]}}function rg(){return window.Chart?Promise.resolve():(wl||(wl=tg("vendor/chart.umd.min.js","flash-kanji-chartjs")),wl)}function ag(){window.setTimeout(()=>{Yp||(Yp=Ip(()=>import("./soundManager-BXlc-2Gj.js"),[],import.meta.url).then(()=>{hs(),vj()}).catch(e=>console.warn("UX sound module failed to load.",e))),Zp||(Zp=Ip(()=>import("./cyberHudEffect-hOJcGtOP.js"),[],import.meta.url).catch(e=>console.warn("Cyber HUD module failed to load.",e)))},450)}function Cs(e=r.route){return Xp.has(e)}function ni({route:e=r.route,delay:t=pl,force:n=!1}={}){if(r.deferredDataLoaded||r.deferredDataLoading||Ns||!n&&!Cs(e))return;As&&(window.clearTimeout(As),As=0);const s=++bl,a=()=>{s===bl&&(!n&&!Cs(r.route)||ig().catch(o=>console.warn("Deferred app data failed to load.",o)))};As=window.setTimeout(()=>{As=0,ng(a,{timeout:1800})},Math.max(0,Number(t)||0))}async function ig({renderAfter:e=!0}={}){if(!r.deferredDataLoaded)return Ns||(r.deferredDataLoading=!0,Ns=(async()=>{const[t,n,s]=await Promise.all([jl(),dg([["kanjiMeta",J.kanjiMeta],["kanjiHints",J.kanjiHints],["kanjiTranslations",J.kanjiTranslations],["kanjiStrokes",J.kanjiStrokes],["kanjiPageSources",J.kanjiPageSources],["lessonTranslations",J.lessonTranslations],["vocabulary",J.vocabulary],["sentences",J.sentences],["jlptPracticeLessons",J.jlptPracticeLessons],["n5Meta",J.n5Meta],["n5Lessons",J.n5Lessons],["n5Kanji",J.n5Kanji],["n5Exercises",J.n5Exercises],["n5FinalTest",J.n5FinalTest],["n4Meta",J.n4Meta],["n4Lessons",J.n4Lessons],["n4Kanji",J.n4Kanji],["n4Grammar",J.n4Grammar],["n4Exercises",J.n4Exercises],["n4Reading",J.n4Reading],["n4Listening",J.n4Listening],["n4FinalTest",J.n4FinalTest],["n3Meta",J.n3Meta],["n3Lessons",J.n3Lessons],["n3Kanji",J.n3Kanji],["n3Grammar",J.n3Grammar],["n3Exercises",J.n3Exercises],["n3Reading",J.n3Reading],["n3Listening",J.n3Listening],["n3FinalTest",J.n3FinalTest],["n2Meta",J.n2Meta],["n2Lessons",J.n2Lessons],["n2Kanji",J.n2Kanji],["n2Grammar",J.n2Grammar],["n2Exercises",J.n2Exercises],["n2Reading",J.n2Reading],["n2Listening",J.n2Listening],["n2FinalTest",J.n2FinalTest],["n1Meta",J.n1Meta],["n1Reading",J.n1Reading],["jlptReadingTranslations",J.jlptReadingTranslations],["n5Reading",J.n5Reading],["monetization",J.monetization]]),ug(J.jlptReadingMarkdown)]),{kanjiMeta:a,kanjiHints:o,kanjiTranslations:l,kanjiStrokes:c,kanjiPageSources:d,lessonTranslations:u,vocabulary:m,sentences:v,jlptPracticeLessons:f,n5Meta:w,n5Lessons:y,n5Kanji:k,n5Exercises:A,n5FinalTest:b,n4Meta:$,n4Lessons:z,n4Kanji:D,n4Grammar:yr,n4Exercises:G,n4Reading:rS,n4Listening:aS,n4FinalTest:iS,n3Meta:oS,n3Lessons:lS,n3Kanji:cS,n3Grammar:dS,n3Exercises:uS,n3Reading:pS,n3Listening:gS,n3FinalTest:mS,n2Meta:fS,n2Lessons:hS,n2Kanji:vS,n2Grammar:wS,n2Exercises:bS,n2Reading:kS,n2Listening:yS,n2FinalTest:$S,n1Meta:jS,n1Reading:SS,jlptReadingTranslations:NS,n5Reading:AS,monetization:xS}=n;r.lessons=t.lessons,r.cards=t.cards,r.jlptPracticeLessons=jg(f),r.jlptReadingMarkdown=s||"",r.jlptReadingByLevel=pg(s||""),r.n5Meta=Sg(w),r.n5Textbook=Al(y),r.n5KanjiCatalog=Ng(k),Ag(),r.n5Exercises=xg(A),r.n5FinalTest=Cg(b),r.n5Reading=tm(AS),r.n4Meta=Lg($),r.n4Textbook=Ig(z),r.n4KanjiCatalog=Tg(D),r.n4Grammar=_g(yr),r.n4Exercises=Mg(G),r.n4Reading=xl(rS),r.n4Listening=xl(aS),r.n4FinalTest=Pg(iS),Rg(),r.n3Meta=Eg(oS),r.n3Textbook=Dg(lS),r.n3KanjiCatalog=Kg(cS),r.n3Grammar=Fg(dS),r.n3Exercises=Bg(uS),r.n3Reading=Cl(pS),r.n3Listening=Cl(gS),r.n3FinalTest=zg(mS),Og(),r.n2Meta=Jg(fS),r.n2Textbook=Ug(hS),r.n2KanjiCatalog=Gg(vS),r.n2Grammar=Hg(wS),r.n2Exercises=Wg(bS),r.n2Reading=Ll(kS),r.n2Listening=Ll(yS),r.n2FinalTest=Qg($S),qg(),r.n1Meta=Xg(jS),r.n1Reading=Yg(SS,"N1"),r.kanjiMeta=a.items||{},r.kanjiHints=o.items||{},r.kanjiTranslations=l.items||{},r.kanjiStrokes=vg(c),r.kanjiPageSources=d.items||{},r.lessonTranslations=u.items||{},r.vocabulary=m.items||[],r.sentenceExercises=v.items||[],r.jlptReadingTranslations=fg(NS),r.monetization=xS,r.deferredDataLoaded=!0,r.deferredDataLoading=!1,r.progress&&(Kr(),H(),j()),e&&N()})().finally(()=>{r.deferredDataLoading=!1}),Ns)}async function og(){try{const e=localStorage.getItem(dt);if(localStorage.setItem(dt,M),!e||e===M)return!1;if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistrations();await Promise.all(t.map(async n=>{await n.update().catch(()=>null)}))}return!1}catch(e){return console.warn("App cache version check failed.",e),!1}}async function lg(){try{const e=localStorage.getItem(Sr),t=localStorage.getItem("flashKanji.lastForcedBuild");return e==="done"&&t===M||(localStorage.setItem(Sr,"done"),localStorage.setItem("flashKanji.lastForcedBuild",M)),!1}catch(e){return console.warn("Force cache reset failed.",e),!1}}async function jl({initialOnly:e=!1}={}){const t=await nt(J.lessons),n=Array.isArray(t?.lessons)?t.lessons:[],s=e?cg(n):n,a=await Sl(s,async d=>{try{return{manifestLesson:d,payload:await nt(d.file)}}catch(u){return console.warn(`Skipping lesson data: ${d?.file||"unknown lesson file"}`,u),null}},e?s.length:3),o=new Map(a.filter(Boolean).map(d=>[d.manifestLesson.id,d])),l=n.map(d=>{const u=o.get(d.id);if(!u)return{...d,file:d.file,items:[]};const{payload:m}=u;return{...d,...m.lesson,file:d.file,items:Array.isArray(m.items)?m.items.map(v=>hg(v,m.lesson.id)):[]}}),c=l.flatMap(d=>d.items.map(u=>({...u,lessonTitle:d.title,lessonOrder:d.order})));return{lessons:l,cards:c}}function cg(e){return e.filter((t,n)=>Qp.has(t.id)||n<2)}async function dg(e,t=3){const n=await Sl(e,async([s,a])=>[s,await nt(a)],t);return Object.fromEntries(n)}async function Sl(e,t,n=6){const s=[],a=Math.max(1,Number(n)||1);for(let o=0;o<e.length;o+=a){const l=e.slice(o,o+a);s.push(...await Promise.all(l.map(t))),o+a<e.length&&await new Promise(c=>window.setTimeout(c,0))}return s}async function nt(e,t=null){const n=Nl(e);let s=null;for(const a of n)try{const o=typeof AbortController<"u"?new AbortController:null,l=o?window.setTimeout(()=>o.abort(),gl):0;try{const c=await fetch(a,{signal:o?.signal});if(!c.ok){s=new Error(`Cannot load ${a}`);continue}const d=await c.text();try{return JSON.parse(d)}catch(u){s=u,console.warn(`Invalid JSON from ${a}. Trying fallback paths.`,u)}}finally{l&&window.clearTimeout(l)}}catch(o){s=o}return console.warn(`Falling back to empty data for ${e}.`,s),typeof t=="function"?t(s):t!==null?t:{version:1,languages:["ru","en"],ui:{},items:[],lessons:[],lesson:{},achievements:[],categories:[]}}async function ug(e,t=""){const n=Nl(e);let s=null;for(const a of n)try{const o=typeof AbortController<"u"?new AbortController:null,l=o?window.setTimeout(()=>o.abort(),gl):0;try{const c=await fetch(a,{signal:o?.signal});if(!c.ok){s=new Error(`Cannot load ${a}`);continue}return await c.text()}finally{l&&window.clearTimeout(l)}}catch(o){s=o}return console.warn(`Falling back to empty text for ${e}.`,s),typeof t=="function"?t(s):t}function pg(e){const t=Object.fromEntries(Le.map(m=>[m,[]])),n=String(e||"").split(/\r?\n/);let s=null,a=null,o="idle",l=[],c=[];const d=()=>{!a||!s||(a.text=gg(l.join(`
`)),a.questions=c.map(m=>m.trim()).filter(Boolean),t[s].push(a),a=null,l=[],c=[],o="idle")},u=m=>{const v=String(m||"").trim().toLowerCase();return v==="жанр"||v==="genre"?"genre":v==="опора"||v==="source"||v==="basis"?"source":v==="цель"||v==="goal"?"goal":v};for(const m of n){const v=String(m??""),f=v.trim(),w=f.match(/^#\s*JLPT\s*(N[1-5])\b/i);if(w){d(),s=w[1].toUpperCase();continue}const y=f.match(/^##\s*(N[1-5])\s*(.+)$/i);if(y){d(),s=y[1].toUpperCase(),a={id:`${s.toLowerCase()}-reading-${String((t[s]||[]).length+1).padStart(2,"0")}`,level:s,title:mg(y[2]),genre:"",source:"",goal:"",text:"",questions:[]},o="meta";continue}if(/^#{1,2}(?!#)\s+/.test(f)&&!w&&!y){d(),s=null;continue}if(!a)continue;if(/^###\s*Проверочные вопросы/i.test(f)){o="questions";continue}if(o==="code"){/^```/.test(f)?o="body":l.push(v);continue}if(/^```/.test(f)){o="code";continue}if(o==="questions"){const A=f.match(/^[-*]\s+(.*)$/),b=f.match(/^\d+\.\s+(.*)$/);if(A){c.push(A[1]);continue}if(b){c.push(b[1]);continue}if(!f||/^---+$/.test(f))continue;c.push(f);continue}const k=f.match(/^\*\*(Жанр|Опора|Цель|Genre|Source|Goal)\:\*\*\s*(.*)$/i);if(k){const A=u(k[1]);a[A]=k[2].trim()}}return d(),t}function gg(e){return String(e||"").replace(/^\s*\n+/,"").replace(/\n+\s*$/,"")}function mg(e){return String(e||"").replace(/^[\s\-–—::]+/u,"").trim()}function fg(e){const t=e&&typeof e=="object"&&!Array.isArray(e)?e.items&&typeof e.items=="object"&&!Array.isArray(e.items)?e.items:e:{},n={};return Object.entries(t||{}).forEach(([s,a])=>{!s||!a||typeof a!="object"||(n[String(s)]={titleRu:String(a.titleRu||a.ruTitle||a.title_ru||"").trim(),titleEn:String(a.titleEn||a.enTitle||a.title_en||"").trim(),ru:String(a.ru||a.translationRu||a.translation_ru||"").trim(),en:String(a.en||a.translationEn||a.translation_en||"").trim()})}),n}function Nl(e){const t=String(e||"").trim();if(!t)return[t];if(/^https?:\/\//i.test(t)||t.startsWith("file:"))return[t];const n=t.replace(/^\.\/+/,"").replace(/^\.\.\/+/,"").replace(/^\/+/,""),s=[t,`./${n}`,`../${n}`,`index/${n}`,`/index/${n}`,`/${n}`];return[...new Set(s.filter(Boolean))]}function hg(e,t){return{...e,id:String(e.id),lessonId:t,examples:Array.isArray(e.examples)?e.examples:[],apps:Array.isArray(e.apps)?e.apps:[],stroke_order:Array.isArray(e.stroke_order)?e.stroke_order:[]}}function vg(e){const t=e?.items&&typeof e.items=="object"?e.items:{};return Object.fromEntries(Object.entries(t).map(([n,s])=>{const a=Array.isArray(s?.strokeOrder)?s.strokeOrder.filter(o=>typeof o?.path=="string"&&o.path.trim()):[];return a.length?[n,{...s,kanji:s.kanji||n,strokes:Number(s.strokes||a.length),viewBox:s.viewBox||"0 0 109 109",strokeOrder:a}]:null}).filter(Boolean))}function $n(){return{owned:[],selected:{background:"bg_study_hub",outfit:"outfit_default_assassin",theme:"theme_default_dark",decoration:null,frame:null,effect:null},seen:[],updatedAt:new Date().toISOString()}}function wg(){try{const e=localStorage.getItem(Y);if(!e)return $n();const t=JSON.parse(e),n=$n();return{owned:Array.isArray(t.owned)?t.owned.map(String):n.owned,selected:{...n.selected,...t&&t.selected||{}},seen:Array.isArray(t.seen)?t.seen.map(String):n.seen,updatedAt:t.updatedAt||n.updatedAt}}catch(e){return console.warn("Customization storage failed.",e),$n()}}function Jn(){if(!r.customization)return!1;if(Ar)return!0;Ar=!0;const e=()=>{kn=0,Ar=!1,r.customization.updatedAt=new Date().toISOString();try{localStorage.setItem(Y,JSON.stringify(r.customization))}catch(t){console.warn("Customization save failed.",t)}};return"requestIdleCallback"in window?kn=window.requestIdleCallback(e,{timeout:1200}):kn=window.setTimeout(e,160),!0}function bg(){if(!r.customization)return!1;Ar=!1,kn&&("cancelIdleCallback"in window?window.cancelIdleCallback(kn):window.clearTimeout(kn),kn=0),r.customization.updatedAt=new Date().toISOString();try{return localStorage.setItem(Y,JSON.stringify(r.customization)),!0}catch(e){return console.warn("Customization save failed.",e),!1}}function Tr(){const e=wg(),t=new Set;(e.owned||[]).forEach(s=>{const a=de(s)||jn(s);a&&t.add(a.id)}),qe().forEach(s=>{(s.defaultOwned||s.price===0)&&t.add(s.id)}),(r.progress.unlockedBackgrounds||[]).forEach(s=>{const a=de(s)||jn(s);a&&t.add(a.id)}),(r.progress.unlockedEvaSprites||[]).forEach(s=>{const a=Sn(s);a&&t.add(a.id),r.progress.shop?.owned?.includes(`eva_sprite:${s}`)&&a&&t.add(a.id)}),(r.progress.shop?.owned||[]).forEach(s=>{const a=String(s),o=de(a)||jn(a);if(o&&t.add(o.id),!o&&a.startsWith("eva_sprite:")){const l=Sn(a.replace("eva_sprite:",""));l&&t.add(l.id)}});const n=kg({...$n().selected,...e.selected||{}});r.progress.selectedEvaRoomBackground&&(n.background=St(r.progress.selectedEvaRoomBackground)),r.progress.selectedEvaSprite&&(n.outfit=Sn(r.progress.selectedEvaSprite)?.id||n.outfit),t.has(n.background)||(n.background="bg_study_hub"),t.has(n.outfit)||(n.outfit="outfit_default_assassin"),t.has(n.theme)||(n.theme="theme_default_dark"),n.decoration&&!t.has(n.decoration)&&(n.decoration=null),n.effect&&!t.has(n.effect)&&(n.effect=null),r.customization={owned:[...t],selected:n,seen:[...new Set([...e.seen||[],...t])],updatedAt:e.updatedAt||new Date().toISOString()},Ls(),Jn()}function Ls(){var n;if(!r.customization||!r.progress)return;ie();const e=r.customization.selected||{};e.background&&(r.progress.selectedEvaRoomBackground=e.background);const t=de(e.outfit);t?.spriteId&&(r.progress.selectedEvaSprite=t.spriteId),r.progress.unlockedBackgrounds=[...new Set([...r.progress.unlockedBackgrounds||[],...r.customization.owned.filter(s=>de(s)?.type==="background")])],r.progress.unlockedEvaSprites=[...new Set([...r.progress.unlockedEvaSprites||[],...r.customization.owned.map(s=>de(s)).filter(s=>s?.type==="outfit"&&s.spriteId).map(s=>s.spriteId)])],(n=r.progress).shop||(n.shop={owned:[],equipped:{}}),r.progress.shop.owned=[...new Set([...r.progress.shop.owned||[],...r.customization.owned,...r.progress.unlockedEvaSprites.map(s=>`eva_sprite:${s}`)])],r.progress.shop.equipped={...r.progress.shop.equipped||{},background:e.background||null,outfit:e.outfit||null,theme:e.theme||null,decoration:e.decoration||e.frame||null,effect:e.effect||null}}function qe(){return r.customizationCatalog?.items||[]}function de(e){return qe().find(t=>t.id===e)||null}function jn(e){const t=String(e||"");return t&&qe().find(n=>Array.isArray(n.legacyIds)&&n.legacyIds.map(String).includes(t))||null}function St(e){return(de(e)||jn(e))?.id||e||null}function kg(e={}){return{background:St(e.background),outfit:St(e.outfit),theme:St(e.theme),decoration:St(e.decoration||e.frame),effect:St(e.effect)}}function Sn(e){const t=String(e||"");if(!t)return null;const n=`eva_sprite:${t}`;return qe().find(s=>s.type!=="outfit"?!1:s.spriteId===t||s.legacySpriteId===t?!0:Array.isArray(s.legacyIds)&&s.legacyIds.map(String).includes(n))||null}function yg(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),title:n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},summary:n.summary||{ru:"",en:""},goals:Array.isArray(n.goals)?n.goals:[],sections:Array.isArray(n.sections)?n.sections:[],practice:Array.isArray(n.practice)?n.practice:[],checkpoint:Array.isArray(n.checkpoint)?n.checkpoint:[]})).filter(n=>n.jlpt)}function $g(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[];return{version:Number(e?.version||1),generatedAt:e?.generatedAt||null,items:t.map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),slug:String(n.slug||String(n.jlpt||"").toLowerCase()),title:n.title||{ru:n.displayTitle?.ru||n.jlpt||"JLPT",en:n.displayTitle?.en||n.jlpt||"JLPT"},displayTitle:n.displayTitle||n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},description:n.description||{ru:"",en:""},goal:n.goal||{ru:"",en:""},recommendedCycle:n.recommendedCycle||{ru:"",en:""},previousLevels:Array.isArray(n.previousLevels)?n.previousLevels:[],nextLevels:Array.isArray(n.nextLevels)?n.nextLevels:[],lessonIds:Array.isArray(n.lessonIds)?n.lessonIds:[],files:n.files||{},lessonCount:Number(n.lessonCount||0),kanjiCount:Number(n.kanjiCount||0),cardCount:Number(n.cardCount||0)})).filter(n=>n.jlpt).sort((n,s)=>Le.indexOf(n.jlpt)-Le.indexOf(s.jlpt))}}function jg(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),apps:Array.isArray(n.apps)?n.apps:[],kana:n.kana||{hiragana:[],katakana:[]},kanjiFocus:Array.isArray(n.kanjiFocus)?n.kanjiFocus:[],drills:Array.isArray(n.drills)?n.drills:[],sources:Array.isArray(n.sources)?n.sources:[]})).filter(n=>n.jlpt)}function Sg(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"JLPT N5",en:"JLPT N5"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||80),lessonCount:Number(e?.lessonCount||10),kanjiPerLesson:Number(e?.kanjiPerLesson||8),pdfUrl:e?.pdfUrl||"docs/flashkanji_N5_expanded_textbook.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],rewards:{addToSrsXp:4,knowXp:6,hardXp:2,exerciseXp:7,exerciseMoon:1,lessonCompleteXp:45,lessonCompleteMoon:6,finalTestXp:120,finalTestMoon:20,...e?.rewards||{}}}}function Al(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N5",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n5-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30]})).filter(n=>n.kanji.length)}}function Ng(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),lessonId:n.lessonId||n.lesson_id||null,kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:[],jlpt:"N5"})).filter(n=>n.kanji)}function Ag(){if(!Array.isArray(r.n5KanjiCatalog)||!r.n5KanjiCatalog.length)return;const e=new Map(r.n5KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);if(!s)return n;const a=String(n.jlpt||s.jlpt||"").toUpperCase();return a&&a!=="N5"?n:(t.add(s.kanji),Rr(n,s))}),r.n5KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(Rr({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId||null,jlpt:"N5",examples:[],source:"n5-catalog"},n)),t.add(n.kanji))})}function Rr(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:V(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,jlpt:"N5",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n5Detail:t}}function xg(e){return{version:Number(e?.version||1),level:"N5",types:Array.isArray(e?.types)?e.types:[],lessonQuestionCount:Number(e?.lessonQuestionCount||6),reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Cg(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"Финальный тест JLPT N5",en:"JLPT N5 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||24),passingPercent:Number(e?.passingPercent||80),types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","srs"],rewards:{completeXp:120,completeMoon:20,passXp:80,passMoon:12,...e?.rewards||{}}}}function Lg(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"JLPT N4",en:"JLPT N4"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||170),lessonCount:Number(e?.lessonCount||17),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||48),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N4_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:5,knowXp:7,hardXp:2,exerciseXp:9,exerciseMoon:1,grammarXp:10,grammarMoon:1,lessonCompleteXp:65,lessonCompleteMoon:8,readingXp:35,readingMoon:4,listeningXp:30,listeningMoon:3,finalTestXp:180,finalTestMoon:35,...e?.rewards||{}}}}function Ig(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N4",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n4-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45]})).filter(n=>n.kanji.length)}}function Tg(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N4",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Rg(){if(!Array.isArray(r.n4KanjiCatalog)||!r.n4KanjiCatalog.length)return;const e=new Map(r.n4KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N4"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),_r(n,s))}),r.n4KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(_r({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[],source:"n4-catalog"},n)),t.add(n.kanji))})}function _r(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:V(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N4",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n4Detail:t}}function _g(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-grammar-${String(s+1).padStart(2,"0")}`),level:"N4",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Mg(e){return{version:Number(e?.version||1),level:"N4",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function xl(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Pg(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"Финальный тест JLPT N4",en:"JLPT N4 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||32),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||180),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||35),passXp:Number(e?.rewards?.passXp||90),passMoon:Number(e?.rewards?.passMoon||15)}}}function Eg(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"JLPT N3",en:"JLPT N3"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||370),lessonCount:Number(e?.lessonCount||37),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||80),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N3_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:6,knowXp:8,hardXp:2,exerciseXp:10,exerciseMoon:1,grammarXp:11,grammarMoon:1,lessonCompleteXp:75,lessonCompleteMoon:9,readingXp:38,readingMoon:4,listeningXp:34,listeningMoon:4,finalTestXp:220,finalTestMoon:40,...e?.rewards||{}}}}function Dg(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N3",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n3-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45,60]})).filter(n=>n.kanji.length)}}function Kg(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N3",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Og(){if(!Array.isArray(r.n3KanjiCatalog)||!r.n3KanjiCatalog.length)return;const e=new Map(r.n3KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N3"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Mr(n,s))}),r.n3KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(Mr({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[],source:"n3-catalog"},n)),t.add(n.kanji))})}function Mr(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:V(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N3",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n3Detail:t}}function Fg(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-grammar-${String(s+1).padStart(2,"0")}`),level:"N3",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Bg(e){return{version:Number(e?.version||1),level:"N3",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Cl(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function zg(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"Финальный тест JLPT N3",en:"JLPT N3 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||220),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||40),passXp:Number(e?.rewards?.passXp||110),passMoon:Number(e?.rewards?.passMoon||18)}}}function Jg(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"JLPT N2",en:"JLPT N2"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||380),lessonCount:Number(e?.lessonCount||38),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||120),readingCount:Number(e?.readingCount||46),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N2_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function Ug(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N2",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n2-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function Gg(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N2",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function qg(){if(!Array.isArray(r.n2KanjiCatalog)||!r.n2KanjiCatalog.length)return;const e=new Map(r.n2KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N2"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Pr(n,s))}),r.n2KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(Pr({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[],source:"n2-catalog"},n)),t.add(n.kanji))})}function Pr(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:V(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N2",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:V(s(n.onyomi)||e.onyomi||""),kunyomi:V(s(n.kunyomi)||e.kunyomi||""),hiragana:V((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n2Detail:t}}function Hg(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-grammar-${String(s+1).padStart(2,"0")}`),level:"N2",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Wg(e){return{version:Number(e?.version||1),level:"N2",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Ll(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Qg(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"Финальный тест JLPT N2",en:"JLPT N2 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||260),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||48),passXp:Number(e?.rewards?.passXp||130),passMoon:Number(e?.rewards?.passMoon||20)}}}function Xg(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"JLPT N1",en:"JLPT N1"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},lessonCount:Number(e?.lessonCount||0),kanjiCount:Number(e?.kanjiCount||0),readingCount:Number(e?.readingCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N1_textbook_flashkanji_space.pdf",rewards:{addToSrsXp:Number(e?.rewards?.addToSrsXp||8),knowXp:Number(e?.rewards?.knowXp||11),hardXp:Number(e?.rewards?.hardXp||2),exerciseXp:Number(e?.rewards?.exerciseXp||13),exerciseMoon:Number(e?.rewards?.exerciseMoon||1),readingXp:Number(e?.rewards?.readingXp||55),readingMoon:Number(e?.rewards?.readingMoon||5),finalTestXp:Number(e?.rewards?.finalTestXp||320),finalTestMoon:Number(e?.rewards?.finalTestMoon||60)}}}function Il(e){return Array.isArray(e)?e.map(t=>({value:String(t?.value||t?.id||""),label:t?.label||t?.title||t?.text||{ru:String(t?.labelRu||t?.ru||t?.value||""),en:String(t?.labelEn||t?.en||t?.value||"")}})).filter(t=>t.value):[]}function Vg(e,t,n){return{id:String(e?.id||`${t.id}-q${n+1}`),prompt:e?.prompt||{ru:"",en:""},answer:String(e?.answer||""),options:Il(e?.options)}}function Yg(e,t=""){const n=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[],s=String(t||e?.level||"").toUpperCase();return n.map((a,o)=>{const l=String(a.id||`${s.toLowerCase()||"reading"}-${o+1}`);return{...a,level:String(a.level||s||"").toUpperCase(),id:l,title:a.title||{ru:a.id||"",en:a.id||""},jp:String(a.jp||""),reading:String(a.reading||""),ru:String(a.ru||""),en:String(a.en||""),source:String(a.source||""),questions:Array.isArray(a.questions)?a.questions.map((c,d)=>Vg(c,{id:l},d)):[]}}).filter(a=>a.id)}function Zg(e){return Array.isArray(e)?e.map(t=>({answer:Array.isArray(t?.answer)?t.answer.map(String).filter(Boolean):[],reading:Array.isArray(t?.reading)?t.reading.map(n=>V(n)):[]})):[]}function em(e,t){const n=Array.isArray(t)?t.flatMap(s=>Array.isArray(s?.answer)?s.answer.map((a,o)=>({kanji:String(a||""),reading:String(s?.reading?.[o]||"")})):[]):[];return[...Array.isArray(e)?e:[],...n].map(s=>({kanji:String(s?.kanji||""),reading:String(s?.reading||"")})).filter(s=>s.kanji).filter((s,a,o)=>o.findIndex(l=>l.kanji===s.kanji&&l.reading===s.reading)===a)}function tm(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[],n=t.find(a=>String(a?.kind||"").toLowerCase()==="sentences")||t[0]||null;return(Array.isArray(n?.items)?n.items:[]).map((a,o)=>({id:String(a.id||`${String(n?.id||"reading-n5-sentence")}-${o+1}`),level:String(a.jlpt||n?.level||"N5").toUpperCase(),kind:"cloze",sourceKind:"sentences",sourceId:String(n?.id||"reading-n5-sentences"),sourceTitle:n?.title||{ru:"Предложения",en:"Sentences"},title:{ru:"Предложение",en:"Sentence"},sentence:String(a.sentence||""),reading:V(a.reading||""),translationRu:String(a.translationRu||a.translation_ru||a.ru||""),translationEn:String(a.translationEn||a.translation_en||a.en||""),blanks:Zg(a.blanks),tiles:em(a.tiles,a.blanks),source:"reading"})).filter(a=>a.id)}function Tl(e,t=[]){const n=Array.isArray(e?.achievements)&&e.achievements.length?e.achievements:t,s=Array.isArray(e?.categories)?e.categories.map(l=>({id:String(l.id),title:l.title||{ru:l.id,en:l.id},icon:l.icon||"moon"})):[],a=n.map(l=>si(l)),o=new Set(s.map(l=>l.id));return a.forEach(l=>{o.has(l.category)||(o.add(l.category),s.push({id:l.category,title:{ru:l.category,en:l.category},icon:l.icon||"moon"}))}),{categories:s,items:a}}function si(e){const t=Number(e.rewardXp??e.xp??0),n=Number(e.rewardFragments??e.coins??0);return{...e,id:String(e.id),category:e.category||e.kind||"learning",title:e.title||e.name||{ru:e.id,en:e.id},description:e.description||{ru:"",en:""},icon:e.icon||"moon",kind:e.kind||"learned",target:Number(e.target||1),rewardXp:t,rewardFragments:n,unlocked:!!e.unlocked,secret:!!e.secret}}function Rl(){return[navigator.language,...navigator.languages||[]].filter(Boolean).map(t=>String(t).toLowerCase()).some(t=>t==="ru"||t.startsWith("ru-")||t==="be"||t.startsWith("be-"))?"ru":"en"}function Un(){const e=Rl();return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),settings:{theme:"dark",themeManuallySelected:!1,sound:!0,uxSound:!0,uxVolume:.75,language:e,languageAutoDetected:!0,languageManuallySelected:!1,dailyGoal:10},xp:0,level:1,moonFragments:0,totalCorrect:0,totalWrong:0,correctCombo:0,bestCorrectCombo:0,appOpens:0,totalMoonFragmentsEarned:0,cards:{},seenCards:{},seenKanji:{},daily:{},favorites:{},transactions:[],streakHistory:[],streak:{current:0,best:0,lastStudyDate:null,pendingReward:null},visits:{firstVisitDate:null,lastVisitDate:null,lastDailyBonusDate:null,streak:0,bestStreak:0},lessonCompletions:{},achievements:{},dailyBonuses:{},dailyBonusPending:null,lastOpenedJlptLesson:null,lastOpenedJlptLessons:{},viewedReadingLevels:{},writingPractice:{completed:0,cards:{}},secrets:{evaClicks:0,nightVisit:!1},learningPath:ai(),jlptLessonStudy:ii(),sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[],completed:{},attempts:0,recentIds:[],recentAnswers:[],custom:[],customSentences:[],customEditingId:null,customDraft:{jp:"",hiragana:"",ru:"",en:""},customMessage:"",customStatus:""},jlptLessonPractice:{activeIds:{},selected:{},checked:{},results:{},completed:{}},readingExercises:{},n5Course:li(),n4Course:ci(),n3Course:di(),n2Course:ui(),unlockedJlptLevels:Le.slice(),unlockedBackgrounds:["bg_study_hub"],selectedEvaRoomBackground:"bg_study_hub",unlockedEvaSprites:["idle","default"],selectedEvaSprite:"idle",evaRoomDialogueProgress:{currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]},evaRoomQuiz:{answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]},evaAutonomy:Gl(),evaRelationship:gi(),shop:{owned:[],equipped:{}}}}function nm(){const e=Un();try{const t=DS();return t?_l(e,t):e}catch(t){return console.warn("Progress reset because stored JSON is invalid.",t),e}}function _l(e,t){return{...e,...t,version:3,settings:sm(e.settings,t.settings||{}),cards:KS({...e.cards,...t.cards||{}}),seenCards:{...e.seenCards,...t.seenCards||{}},seenKanji:{...e.seenKanji,...t.seenKanji||{}},daily:{...e.daily,...t.daily||{}},favorites:{...e.favorites,...t.favorites||{}},transactions:Array.isArray(t.transactions)?t.transactions:e.transactions,streakHistory:Array.isArray(t.streakHistory)?t.streakHistory:e.streakHistory,streak:am(e.streak,t.streak||{}),visits:{...e.visits,...t.visits||{}},lessonCompletions:{...e.lessonCompletions,...t.lessonCompletions||{}},achievements:{...e.achievements,...t.achievements||{}},dailyBonuses:{...e.dailyBonuses,...t.dailyBonuses||{}},dailyBonusPending:Er(t.dailyBonusPending||null),lastOpenedJlptLesson:_e(t.lastOpenedJlptLesson||null),lastOpenedJlptLessons:W$(t.lastOpenedJlptLessons||{}),viewedReadingLevels:ms(t.viewedReadingLevels||{}),appOpens:Number(t.appOpens||e.appOpens),totalMoonFragmentsEarned:Number(t.totalMoonFragmentsEarned||e.totalMoonFragmentsEarned),writingPractice:{...e.writingPractice,...t.writingPractice||{}},secrets:{...e.secrets,...t.secrets||{}},learningPath:Ol(e.learningPath,t.learningPath||{}),jlptLessonStudy:Kl(e.jlptLessonStudy,t.jlptLessonStudy||{}),sentencePractice:pi(e.sentencePractice,t.sentencePractice||{}),jlptLessonPractice:Ul(e.jlptLessonPractice,t.jlptLessonPractice||{}),readingExercises:{...e.readingExercises,...t.readingExercises||{}},n5Course:Fl(e.n5Course,t.n5Course||{}),n4Course:Bl(e.n4Course,t.n4Course||{}),n3Course:zl(e.n3Course,t.n3Course||{}),n2Course:Jl(e.n2Course,t.n2Course||{}),unlockedJlptLevels:[...new Set([...Array.isArray(e.unlockedJlptLevels)?e.unlockedJlptLevels:[],...Array.isArray(t.unlockedJlptLevels)?t.unlockedJlptLevels:[],...Le])],unlockedBackgrounds:[...new Set([...e.unlockedBackgrounds||[],...t.unlockedBackgrounds||[]])],selectedEvaRoomBackground:t.selectedEvaRoomBackground||e.selectedEvaRoomBackground,unlockedEvaSprites:[...new Set([...e.unlockedEvaSprites||[],...t.unlockedEvaSprites||[],...(t.shop&&t.shop.owned||[]).filter(n=>String(n).startsWith("eva_sprite:")).map(n=>String(n).replace("eva_sprite:",""))])],selectedEvaSprite:t.selectedEvaSprite||e.selectedEvaSprite,evaRoomDialogueProgress:{...e.evaRoomDialogueProgress,...t.evaRoomDialogueProgress||{},rewardsClaimed:{...e.evaRoomDialogueProgress.rewardsClaimed,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.rewardsClaimed||{}},visited:{...e.evaRoomDialogueProgress.visited,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.visited||{}},lineHistory:Array.isArray(t.evaRoomDialogueProgress?.lineHistory)?t.evaRoomDialogueProgress.lineHistory:e.evaRoomDialogueProgress.lineHistory||[]},evaRoomQuiz:{...e.evaRoomQuiz,...t.evaRoomQuiz||{},rewarded:{...e.evaRoomQuiz.rewarded,...t.evaRoomQuiz&&t.evaRoomQuiz.rewarded||{}},history:Array.isArray(t.evaRoomQuiz?.history)?t.evaRoomQuiz.history.slice(0,40):e.evaRoomQuiz.history},evaAutonomy:Hl(e.evaAutonomy,t.evaAutonomy||{}),evaRelationship:ql(e.evaRelationship,t.evaRelationship||{}),shop:{owned:[...new Set([...e.shop.owned||[],...t.shop&&t.shop.owned||[]])],equipped:{...e.shop.equipped,...t.shop&&t.shop.equipped||{}}}}}function sm(e,t){const n={...e,...t||{}};return n.theme=rm(n.theme,e.theme||"dark"),n.themeManuallySelected=Bt(n.themeManuallySelected,e.themeManuallySelected===!0),n.themeManuallySelected||(n.theme="dark"),n.sound=Bt(n.sound,e.sound!==!1),n.uxSound=n.sound!==!1,n.languageAutoDetected=Bt(n.languageAutoDetected,e.languageAutoDetected!==!1),n.languageManuallySelected=Bt(n.languageManuallySelected,e.languageManuallySelected===!0),n}function rm(e,t="dark"){return e==="light"||e==="dark"?e:t}function am(e,t){const n={...e,...t||{}};return n.current=ri(n.current,e.current||0),n.best=ri(n.best,e.best||0),n.lastStudyDate=n.lastStudyDate||null,n.pendingReward=Ml(n.pendingReward),n}function Ml(e){if(!e||typeof e!="object")return null;const t=ri(e.milestone,0),n=typeof e.availableOn=="string"?e.availableOn:"";return!t||!n?null:{milestone:t,availableOn:n}}function Er(e){if(!e||typeof e!="object")return null;const t=typeof e.availableOn=="string"?e.availableOn:"";return t?{availableOn:t}:null}function Bt(e,t=!0){if(typeof e=="boolean")return e;if(typeof e=="number")return e!==0;if(typeof e=="string"){const n=e.trim().toLowerCase();if(["false","0","off","no","disabled"].includes(n))return!1;if(["true","1","on","yes","enabled"].includes(n))return!0}return t}function ri(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function ai(){return{version:dl,currentLevel:ul,currentNodeId:he,completedNodes:{},unlockedNodes:{[he]:!0},activeSession:null,resultHistory:{},lastUpdatedAt:null}}function ii(){return{activeSessionKey:null,sessions:{},lastUpdatedAt:null}}function Pl(){return{level:"",lessonId:"",currentIndex:0,answers:{},phase:"study",startedAt:null,updatedAt:null,completedAt:null,testOpenedAt:null}}function El(e){const t=String(e||"").toLowerCase();return["study","test","done"].includes(t)?t:"study"}function Dl(e,t){const n=Pl(),s=t&&typeof t=="object"?t:{},a={...e?.answers||n.answers,...s.answers||{}};return{...n,...e||{},...s,level:String(s.level||e?.level||n.level||"").toUpperCase(),lessonId:String(s.lessonId||e?.lessonId||n.lessonId||""),currentIndex:Math.max(0,Number(s.currentIndex??e?.currentIndex??n.currentIndex??0)),answers:a,phase:El(s.phase||e?.phase||n.phase),startedAt:s.startedAt||e?.startedAt||n.startedAt||null,updatedAt:s.updatedAt||e?.updatedAt||n.updatedAt||null,completedAt:s.completedAt||e?.completedAt||n.completedAt||null,testOpenedAt:s.testOpenedAt||e?.testOpenedAt||n.testOpenedAt||null}}function Kl(e,t){const n=ii(),s=t&&typeof t=="object"?t:{},a={},o=e?.sessions||{},l=s.sessions||{};return Object.keys(o).forEach(c=>{a[c]=Dl(o[c],l[c])}),Object.keys(l).forEach(c=>{a[c]||(a[c]=Dl(null,l[c]))}),{...n,...e||{},...s||{},sessions:a,activeSessionKey:s.activeSessionKey||e?.activeSessionKey||n.activeSessionKey||null,lastUpdatedAt:s.lastUpdatedAt||e?.lastUpdatedAt||n.lastUpdatedAt||null}}function Ol(e,t){return{...e,...t||{},version:dl,currentLevel:String(t?.currentLevel||e.currentLevel||ul).toUpperCase(),currentNodeId:String(t?.currentNodeId||e.currentNodeId||he),completedNodes:{...e.completedNodes,...t?.completedNodes||{}},unlockedNodes:{...e.unlockedNodes,...t?.unlockedNodes||{}},activeSession:oi(t?.activeSession||e.activeSession||null),resultHistory:{...e.resultHistory,...t?.resultHistory||{}},lastUpdatedAt:t?.lastUpdatedAt||e.lastUpdatedAt||null}}function oi(e){return!e||typeof e!="object"?null:{nodeId:String(e.nodeId||""),mode:String(e.mode||Kt),stepIndex:Math.max(0,Number(e.stepIndex||0)),answers:{...e.answers||{}},mistakes:Array.isArray(e.mistakes)?e.mistakes.slice(0,80):[],reviewStepIds:Array.isArray(e.reviewStepIds)?e.reviewStepIds.map(String).filter(Boolean).slice(0,80):[],score:Number(e.score||0),startedAt:e.startedAt||new Date().toISOString(),updatedAt:e.updatedAt||new Date().toISOString()}}function li(){return{currentLessonId:"n5-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0,correctAnswers:0,incorrectAnswers:0,unansweredAnswers:0,totalQuestions:0,mistakeQuestionIds:[],bestScore:0,lastScore:0,passedAt:null,lastRewardXp:0,lastRewardMoon:0},customSentences:[]}}function Fl(e,t){return{...e,...t||{},currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:ms(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:ba(e.exerciseSrs,t?.exerciseSrs||{},"N5"),writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function ci(){return{opened:!1,currentLessonId:"n4-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Bl(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:ms(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:ba(e.exerciseSrs,t?.exerciseSrs||{},"N4"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function di(){return{opened:!1,currentLessonId:"n3-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function zl(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:ms(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:ba(e.exerciseSrs,t?.exerciseSrs||{},"N3"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function ui(){return{opened:!1,currentLessonId:"n2-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Jl(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:ms(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:ba(e.exerciseSrs,t?.exerciseSrs||{},"N2"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function pi(e,t){return{...e,...t,selected:Array.isArray(t.selected)?t.selected:e.selected,tileKeys:Array.isArray(t.tileKeys)?t.tileKeys:e.tileKeys,recentIds:Array.isArray(t.recentIds)?t.recentIds:e.recentIds,recentAnswers:Array.isArray(t.recentAnswers)?t.recentAnswers:e.recentAnswers,completed:{...e.completed,...t.completed||{}},custom:Array.isArray(t.custom)?t.custom.slice(0,80):e.custom,customSentences:im(t.customSentences,t.custom),customEditingId:typeof t.customEditingId=="string"?t.customEditingId:null,customDraft:Dr(t.customDraft||e.customDraft),customMessage:typeof t.customMessage=="string"?t.customMessage:e.customMessage,customStatus:typeof t.customStatus=="string"?t.customStatus:e.customStatus}}function Dr(e={}){return{jp:String(e.jp??e.sentence??""),hiragana:String(e.hiragana??e.reading??""),ru:String(e.ru??e.translationRu??""),en:String(e.en??e.translationEn??"")}}function im(e,t){const n=[],s=new Set,a=o=>{if(!o)return;const l=sn(o.jp||Vd(o)),c=rs(l);if(!c||s.has(c))return;s.add(c);const d=String(o.id||"").startsWith("custom_")?String(o.id):`custom_${Se(c).toString(36)}`;n.push({id:d,jp:l,hiragana:sn(o.hiragana||o.reading||""),ru:sn(o.ru||o.translationRu||""),en:sn(o.en||o.translationEn||""),source:"user"})};return(Array.isArray(e)?e:[]).forEach(a),(Array.isArray(t)?t:[]).forEach(a),n.slice(0,160)}function Ul(e,t){return{...e,...t,activeIds:{...e.activeIds,...t.activeIds||{}},selected:{...e.selected,...t.selected||{}},checked:{...e.checked,...t.checked||{}},results:{...e.results,...t.results||{}},completed:{...e.completed,...t.completed||{}}}}function gi(){return{warmth:44,trust:40,discipline:35,curiosity:42,mood:"neutral",conversationCount:0,totalDialogueChoices:0,lastInteractionAt:null,lastInteractionDate:null,lastDecayDate:se(),lastKnown:{learned:0,mastered:0,reviews:0,lessons:0,streak:0,wrong:0,writing:0,sentence:0},history:[]}}function Gl(){return{enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",currentLine:null,currentQuestion:null,currentDecoration:null,currentEffect:null,mood:"neutral",emotion:"calm",lastSpokeAt:null,nextSpeakAt:null,recentLineIds:[],lastRoomId:null,lastSprite:null}}function ql(e,t){return{...e,...t,warmth:oe(Number(t.warmth??e.warmth),0,100),trust:oe(Number(t.trust??e.trust),0,100),discipline:oe(Number(t.discipline??e.discipline),0,100),curiosity:oe(Number(t.curiosity??e.curiosity),0,100),lastKnown:{...e.lastKnown,...t.lastKnown||{}},history:Array.isArray(t.history)?t.history.slice(0,40):e.history}}function Hl(e,t){return{...e,...t,enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,32):e.recentLineIds,currentLine:t.currentLine&&typeof t.currentLine=="object"?t.currentLine:e.currentLine,currentQuestion:t.currentQuestion&&typeof t.currentQuestion=="object"?t.currentQuestion:e.currentQuestion,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:e.currentDecoration,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion}}function Nt(){return{lastSeenDate:null,lastInteractionDate:null,lastRoute:null,recentLineIds:[],recentTopics:[],daysSinceReturn:0,lastPraiseAt:null,lastWarningAt:null,timesUserChoseTalkOverStudy:0,timesUserReturnedAfterGap:0,lastReturnCountedDate:null,preferredEvaRoomBackground:null,lastKnownMood:"neutral",recentProblemCluster:null}}function Nn(e,t={}){return{...e,...t,recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,30):e.recentLineIds,recentTopics:Array.isArray(t.recentTopics)?t.recentTopics.slice(0,20):e.recentTopics,daysSinceReturn:Number(t.daysSinceReturn||e.daysSinceReturn||0),timesUserChoseTalkOverStudy:Number(t.timesUserChoseTalkOverStudy||e.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(t.timesUserReturnedAfterGap||e.timesUserReturnedAfterGap||0),lastKnownMood:typeof t.lastKnownMood=="string"?t.lastKnownMood:e.lastKnownMood}}function ft(){return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),presenceState:"idle",mood:"neutral",emotion:"calm",currentPhrase:null,pendingQuestion:null,currentSkin:"idle",currentBackground:"bg_study_hub",currentDecoration:null,currentEffect:"none",activeSkin:"idle",activeBackground:"bg_study_hub",ownedSkins:["idle","default"],ownedBackgrounds:["bg_study_hub"],ownedEffects:[],ownedDecorations:[],lastEvent:null,lastQuestion:null,lastPhraseAt:0,lastEmotionChangeAt:0,lastQuestionAt:0,lastVisualChangeAt:0,lastPlayerActionAt:Date.now(),textRevealSkippedLineId:null,memory:Nt(),questionHistory:[],clickCount:0,eventHistory:[],recentEvents:[],cooldowns:{emotion:18e3,phrase:65e3,question:24e4,visual:72e4}}}function om(){const e=ft();let t=null;try{const n=localStorage.getItem(q);t=n?JSON.parse(n):null}catch(n){console.warn("Eva state reset because stored JSON is invalid.",n)}r.evaRuntime=dm(e,t||cm()),lm(),An()}function lm(){if(!r.evaRuntime)return;r.evaRuntime.memory=Nn(Nt(),r.evaRuntime.memory||{});const e=r.evaRuntime.memory,t=se(),n=e.lastSeenDate||null,s=n?Math.max(0,mn(n,t)):0;e.daysSinceReturn=s,s>0&&e.lastReturnCountedDate!==t&&(e.timesUserReturnedAfterGap=Number(e.timesUserReturnedAfterGap||0)+1,e.lastReturnCountedDate=t),e.lastSeenDate=t,e.lastRoute=r.route,e.preferredEvaRoomBackground=r.progress?.selectedEvaRoomBackground||e.preferredEvaRoomBackground||"bg_study_hub",e.lastKnownMood=r.evaRuntime.mood||e.lastKnownMood||"neutral"}function cm(){const e=r.progress?.evaAutonomy||{};return{currentSkin:r.progress?.selectedEvaSprite||e.lastSprite||"idle",currentBackground:r.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",currentDecoration:r.customization?.selected?.decoration||r.customization?.selected?.frame||null,currentEffect:r.customization?.selected?.effect||"none",activeSkin:r.progress?.selectedEvaSprite||e.lastSprite||"idle",activeBackground:r.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",lastEvent:e.currentLine?.reason?{type:e.currentLine.reason,at:e.currentLine.at}:null}}function dm(e,t={}){return{...e,...t,version:3,updatedAt:new Date().toISOString(),presenceState:typeof t.presenceState=="string"?t.presenceState:e.presenceState,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion,currentPhrase:t.currentPhrase&&typeof t.currentPhrase=="object"?t.currentPhrase:e.currentPhrase,pendingQuestion:t.pendingQuestion&&typeof t.pendingQuestion=="object"?t.pendingQuestion:e.pendingQuestion,currentSkin:typeof t.currentSkin=="string"?t.currentSkin:e.currentSkin,currentBackground:typeof t.currentBackground=="string"?t.currentBackground:e.currentBackground,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:null,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,activeSkin:typeof t.activeSkin=="string"?t.activeSkin:t.currentSkin||e.activeSkin,activeBackground:typeof t.activeBackground=="string"?t.activeBackground:t.currentBackground||e.activeBackground,ownedSkins:Array.isArray(t.ownedSkins)?t.ownedSkins:e.ownedSkins,ownedBackgrounds:Array.isArray(t.ownedBackgrounds)?t.ownedBackgrounds:e.ownedBackgrounds,ownedEffects:Array.isArray(t.ownedEffects)?t.ownedEffects:e.ownedEffects,ownedDecorations:Array.isArray(t.ownedDecorations)?t.ownedDecorations:e.ownedDecorations,lastPhraseAt:Number(t.lastPhraseAt||e.lastPhraseAt||0),lastEmotionChangeAt:Number(t.lastEmotionChangeAt||e.lastEmotionChangeAt||0),lastQuestionAt:Number(t.lastQuestionAt||e.lastQuestionAt||0),lastVisualChangeAt:Number(t.lastVisualChangeAt||e.lastVisualChangeAt||0),lastPlayerActionAt:Number(t.lastPlayerActionAt||e.lastPlayerActionAt||Date.now()),textRevealSkippedLineId:typeof t.textRevealSkippedLineId=="string"?t.textRevealSkippedLineId:null,memory:Nn(e.memory||Nt(),t.memory||{}),questionHistory:Array.isArray(t.questionHistory)?t.questionHistory.slice(0,40):e.questionHistory,eventHistory:Array.isArray(t.eventHistory)?t.eventHistory.slice(0,80):e.eventHistory,recentEvents:Array.isArray(t.recentEvents)?t.recentEvents.slice(0,80):e.recentEvents,cooldowns:{...e.cooldowns,...t.cooldowns||{}},clickCount:Number(t.clickCount||e.clickCount||0)}}function mi(){if(!r.evaRuntime)return!1;Wl(),r.evaRuntime.updatedAt=new Date().toISOString(),qa=!1,bn&&("cancelIdleCallback"in window?window.cancelIdleCallback(bn):window.clearTimeout(bn),bn=0);try{return localStorage.setItem(q,JSON.stringify(r.evaRuntime)),!0}catch(e){return console.warn("Eva state could not be saved.",e),!1}}function An(e={}){if(!r.evaRuntime)return!1;if(e?.immediate)return mi();if(qa)return!0;qa=!0;const t=()=>{bn=0,mi()};return"requestIdleCallback"in window?bn=window.requestIdleCallback(t,{timeout:1200}):bn=window.setTimeout(t,160),!0}function fi(){hi(),mi(),bg()}function Wl(){if(!r.evaRuntime||!r.progress)return;const e=r.progress.selectedEvaRoomBackground||r.customization?.selected?.background||"bg_study_hub",t=qe().filter(n=>vt(n.id));r.evaRuntime.ownedSkins=[...new Set(["idle","default",...r.progress.unlockedEvaSprites||[],...t.filter(n=>n.type==="outfit").map(n=>n.spriteId||n.id)].filter(Boolean))],r.evaRuntime.ownedBackgrounds=[...new Set(["bg_study_hub",...r.progress.unlockedBackgrounds||[],...t.filter(n=>n.type==="background").map(n=>n.id)].filter(Boolean))],r.evaRuntime.ownedEffects=[...new Set(t.filter(n=>n.type==="effect").map(n=>n.id))],r.evaRuntime.ownedDecorations=[...new Set(t.filter(n=>n.type==="decoration").map(n=>n.id))],r.evaRuntime.currentBackground=e,r.evaRuntime.activeSkin=r.evaRuntime.currentSkin||r.progress.selectedEvaSprite||"idle",r.evaRuntime.activeBackground=e}function hi(){return r.progress?(r.progress.level=_a(r.progress.xp),r.progress.updatedAt=new Date().toISOString(),Ga=!1,wn&&("cancelIdleCallback"in window?window.cancelIdleCallback(wn):window.clearTimeout(wn),wn=0),OS(r.progress)):!1}function j(e={}){if(!r.progress)return!1;if(e?.immediate)return hi();if(Ga)return!0;Ga=!0;const t=()=>{wn=0,hi()};return"requestIdleCallback"in window?wn=window.requestIdleCallback(t,{timeout:1200}):wn=window.setTimeout(t,120),!0}function Kr(){r.cards.forEach(s=>_(s.id)),r.progress.level=_a(r.progress.xp),r.progress.totalMoonFragmentsEarned=Math.max(Number(r.progress.totalMoonFragmentsEarned||0),Number(r.progress.moonFragments||0),w$()),ie(),Ps(),Bs(),Ui(),Wi(),Yi(),typeof ensureN1CourseProgress=="function"&&ensureN1CourseProgress();const e=cr(),t=[ka(Q(),"N5"),ka(K(),"N4"),ka(P(),"N3"),ka(E(),"N2"),ya(Q(),"N5"),ya(K(),"N4"),ya(P(),"N3"),ya(E(),"N2")].some(Boolean);[Q(),K(),P(),E(),typeof n1Course=="function"?n1Course():null].filter(Boolean).forEach(s=>um(s)),(t||e)&&j(),Or();const n=r.lessons.find(s=>Ae(s));r.activeLessonId||(r.activeLessonId=n?.id||r.lessons[0]?.id||null)}function um(e){e&&(e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={}),e.viewedLessons=ms(e.viewedLessons||{}),Object.entries(e.srsKanji).forEach(([t,n])=>{e.studiedKanji[t]||(e.studiedKanji[t]=n)}),Object.entries(e.studiedKanji).forEach(([t,n])=>{e.srsKanji[t]||(e.srsKanji[t]=n)}))}function Is(e,t,n=new Date().toISOString()){if(!e||!t)return"";e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={});const s=e.studiedKanji[t],a=e.srsKanji[t],o=s||a||n;return e.studiedKanji[t]=o,e.srsKanji[t]=a||o,o}function Or(){r.progress.learningPath=Ol(ai(),r.progress.learningPath||{});const e=r.progress.learningPath,t=e.completedNodes,n=e.unlockedNodes;n[he]=!0,(Object.keys(r.progress.seenKanji||{}).length>0||Object.keys(Q().studiedKanji||{}).length>0||Object.keys(Q().completedLessons||{}).length>0||Object.keys(r.progress.lessonCompletions||{}).length>0)&&!t[he]&&(t[he]=r.progress.visits?.firstVisitDate||new Date().toISOString()),vi().forEach((o,l)=>{Q().completedLessons?.[o]&&!t[o]&&(t[o]=Q().completedLessons[o]),n[o]=!0});const a=Ql();e.currentNodeId=a,n[a]=!0,e.activeSession?.nodeId&&t[e.activeSession.nodeId]&&(e.activeSession=null),e.lastUpdatedAt=new Date().toISOString()}function vi(){const e=(r.n5Textbook?.items||[]).map(t=>String(t.id||"")).filter(Boolean);return e.length?e:Hp.filter(t=>/^n5-lesson-\d+$/i.test(t))}function Ql(){const e=r.progress?.learningPath||ai(),t=[he,...vi(),Fn];return t.find(n=>!e.completedNodes?.[n])||t[t.length-1]||he}function wi(){return r.n5Textbook?.items?.length?Promise.resolve(r.n5Textbook):xs||(xs=nt(J.n5Lessons).then(e=>(r.n5Textbook=Al(e),Or(),(r.route==="learn"||r.route==="home")&&N(),r.n5Textbook)).catch(e=>{throw xs=null,e}),xs)}function pm(e){const t=String(e||"");if(!t)return Promise.resolve(null);if(r.learningPathLessonPayloads[t])return Promise.resolve(r.learningPathLessonPayloads[t]);const n=Wp[t];if(!n){const a=Ds(t);return a&&(r.learningPathLessonPayloads[t]=a),Promise.resolve(a)}if(Lr.has(t))return Lr.get(t);const s=nt(n).then(a=>(r.learningPathLessonPayloads[t]=a||Ds(t),r.route==="learn"&&r.activeLearnNodeId===t&&N(),r.learningPathLessonPayloads[t])).catch(a=>{const o=Ds(t);if(o)return r.learningPathLessonPayloads[t]=o,r.route==="learn"&&r.activeLearnNodeId===t&&N(),o;throw a}).finally(()=>{Lr.delete(t)});return Lr.set(t,s),s}function zt(){return Or(),r.progress.learningPath}function bi(){const e=zt().activeSession;return!e?.nodeId||zt().completedNodes?.[e.nodeId]?null:e}function Gn(){const e=bi();return e?.nodeId?e.nodeId:zt().currentNodeId||Ql()||he}function Xl(e){const t=qn(e);return t?h(t.title):gm(e)}function gm(e){const t=String(e||"");if(t===he)return p()==="ru"?"Введение в маршрут":"Route introduction";if(t===Fn)return p()==="ru"?"Контрольная точка N5":"N5 checkpoint";const n=it(t);if(n)return h(n.title);const s=t.match(/n5-lesson-(\d+)/i);return s?p()==="ru"?`N5 · Урок ${s[1]}`:`N5 · Lesson ${s[1]}`:t}function mm(e){const t=qn(e);return t?h(t.summary):""}function re(){return p()==="ru"?{route:"Маршрут обучения",intro:"Введение",checkpoint:"Контрольная точка",review:"Повторение",available:"доступно",current:"сейчас",completed:"завершено",locked:"закрыто",due:"нужно повторить",minutes:"мин",lessons:"уроки",start:"Начать учиться",resume:"Продолжить урок",next:"Следующий урок",reviewAction:"Повторить",reviewOld:"Повторить старое",continue:"Дальше",finish:"Завершить",backToMap:"К маршруту",openTextbook:"Открыть учебник",openCheckpoint:"К тесту",score:"Результат",mistakes:"Ошибки",retryMistakes:"Повторить ошибки",continuePath:"Продолжить путь",ready:"Готово",introTitle:"Как тут учиться",introSummary:"Кандзи идут по цепочке: знак -> смысл -> чтение -> пример -> повторение.",introBody:"Сначала берём один маленький блок, потом отправляем его в повторение. Не нужно держать всё в голове за раз.",introBridge:"Если что-то тяжело, это не провал. Значит, карточка просто раньше вернётся в повторение.",introQuestion:"Куда отправляются карточки после урока?",introQuestionHint:"Выбери правильный путь.",loading:"Подгружаю маршрут...",empty:"Маршрут скоро появится.",nextLesson:"Следующий шаг",lessonTrack:"Текущий уровень",reviewQueue:"К повторению",streak:"Стрик",level:"Уровень",xp:"XP",mapHint:"Сначала идём по текущему уровню. Остальные уровни остаются в учебниках.",step:"Шаг",finishHint:"После урока карточки попадут в повторение.",scoreHint:"Вернёмся к ошибкам или двинемся дальше."}:{route:"Learning path",intro:"Intro",checkpoint:"Checkpoint",review:"Review",available:"available",current:"current",completed:"done",locked:"locked",due:"review due",minutes:"min",lessons:"lessons",start:"Start learning",resume:"Resume lesson",next:"Next lesson",reviewAction:"Review",reviewOld:"Review old material",continue:"Next",finish:"Finish",backToMap:"Back to path",openTextbook:"Open textbook",openCheckpoint:"Open test",score:"Score",mistakes:"Ошибки",retryMistakes:"Retry mistakes",continuePath:"Continue path",ready:"Done",introTitle:"How this route works",introSummary:"Kanji move through a chain: sign -> meaning -> reading -> example -> review.",introBody:"Take one small block first, then send it into review. You do not need to hold everything at once.",introBridge:"If something feels hard, that is not failure. It only means the card should return sooner.",introQuestion:"Where do cards go after the lesson?",introQuestionHint:"Choose the correct path.",loading:"Loading the path...",empty:"The path will appear soon.",nextLesson:"Next step",lessonTrack:"Current level",reviewQueue:"Due now",streak:"Streak",level:"Level",xp:"XP",mapHint:"Stay on the current level here. The rest remains in textbooks.",step:"Шаг",finishHint:"After the lesson the cards move to review.",scoreHint:"Retry mistakes or keep moving."}}function fm(){const e=re();return{id:he,type:"lesson",level:"INTRO",title:{ru:e.introTitle,en:e.introTitle},summary:{ru:e.introSummary,en:e.introSummary},durationMinutes:3}}function hm(){const e=Re();return re(),{id:On,type:"review",level:"SRS",title:{ru:`Повторение: ${e}`,en:`Review: ${e}`},summary:{ru:e>0?"Карточки, которые уже нужно вернуть в память.":"Очередь пуста, можно идти дальше.",en:e>0?"Cards that should return now.":"Queue is empty, move on."},durationMinutes:Math.max(2,Math.min(12,e))}}function vm(){return{id:Fn,type:"checkpoint",level:"N5",title:{ru:"Контрольная точка N5",en:"N5 checkpoint"},summary:{ru:"Повторение блока и переход к финальному тесту уровня.",en:"Review the block and move into the level final test."},durationMinutes:12}}function wm(){return vi().map((e,t)=>({id:e,type:"lesson",level:"N5",title:{ru:`N5 · Урок ${t+1}`,en:`N5 · Lesson ${t+1}`},summary:t===0?{ru:"Первый интерактивный урок: 4 знака, чтения, примеры и мини-практика.",en:"First interactive lesson: 4 signs, readings, examples, and mini practice."}:{ru:"Откроем карточки урока прямо из учебника.",en:"Open this lesson directly from the textbook."},durationMinutes:t===0?12:10}))}function Vl(){const e=fm(),t=hm(),n=vm(),s=r.n5Textbook?.items?.length?r.n5Textbook.items.map((o,l)=>({id:o.id,type:"lesson",level:"N5",title:o.title,summary:o.goal||o.theme||{ru:"",en:""},durationMinutes:Number(o.durationMinutes||o.estimatedMinutes||10)})):wm(),a=[e];return Re()>0&&a.push(t),[...a,...s,n]}function qn(e){const t=String(e||"");return t&&Vl().find(n=>n.id===t)||null}function Yl(e){if(!e)return"locked";if(e.id===On)return Re()>0?"review":"available";const t=zt();return t.completedNodes?.[e.id]?"completed":Gn()===e.id?"current":t.unlockedNodes?.[e.id]?e.type==="checkpoint"?"checkpoint":"available":"locked"}function bm(e){const t=re();return e==="completed"?t.completed:e==="current"?t.current:e==="available"?t.available:e==="review"?t.due:e==="checkpoint"?t.checkpoint:t.locked}function Zl(){const e=zt(),t=Re(),n=bi(),s=Gn(),a=qn(s),o=Number(Lt().reviews||0)>=Number(r.progress.settings.dailyGoal||0);return!e.completedNodes?.[he]&&!n?{kind:"node",label:re().start,nodeId:he}:n?.nodeId?{kind:"node",label:re().resume,nodeId:n.nodeId}:t>0?{kind:"review",label:`${re().reviewAction}: ${t}`,nodeId:On}:o&&a?{kind:"node",label:re().next,nodeId:a.id}:a?{kind:"node",label:e.completedNodes?.[he]?re().resume:re().start,nodeId:a.id}:{kind:"review",label:re().reviewOld,nodeId:On}}function km(){const e=re(),t=X$(),n=t?.level||_t(),s=t?.lessonId||Eo(n),a=En(n),o=ap(n);return{label:!!(t?.lessonId||a&&(Object.keys(a.completedLessons||{}).length>0||a.currentLessonId&&a.currentLessonId!==o))?e.resume:e.start,level:n,lessonId:s}}function ym(){const e=Tt(),t=Re(),n=re();return[{label:n.streak,value:r.progress.streak.current},{label:n.level,value:r.progress.level},{label:n.xp,value:`${e.current}/${e.next}`},{label:n.reviewQueue,value:t}]}function $m(e){return`
      <article class="metric home-summary-card">
        <span>${i(e.label)}</span>
        <strong>${i(e.value)}</strong>
      </article>
    `}function jm(){const e=p()==="ru",t=Fi();return Le.map(n=>{const s=$t(n),a=Ta(n),o=En(n),l=n==="N5"?Cn():Object.keys(o?.completedLessons||{}).length,c=Math.max(Number(s?.lessonCount||0),a.length||0),d=et(n),u=np(n),m=!u&&t===n,v=h(s?.displayTitle||s?.title||{ru:`Учебник ${n}`,en:`Textbook ${n}`}),f=c>0?`${l}/${c} ${e?"уроков":"lessons"}`:e?"Без уроков":"No lessons",w=u?e?"Пройдено":"Completed":m?`${f} · ${e?"сейчас":"now"}`:d?f:It(n);return{level:n,title:v,note:w,status:u?"done":m?"current":d?"open":"locked"}})}function Sm(e){const t=`data-action="route" data-route="textbooks" data-subroute="${g(e.level)}"`;return`
      <button class="home-route-step is-${g(e.status)}" type="button" ${t} aria-label="${g((p()==="ru"?"Открыть учебник":"Open textbook")+` ${e.level} — ${e.title}`)}">
        <span class="home-route-step-icon home-route-step-icon--level" aria-hidden="true">${i(e.level)}</span>
        <strong>${i(e.title)}</strong>
        <small>${i(e.note)}</small>
      </button>
    `}function Nm(e){return`
      <button class="home-task-item" type="button" ${e.action==="route"?`data-action="route" data-route="${g(e.route||"")}"`:e.action==="home-lesson"?`data-action="home-lesson" data-level="${g(e.level||"")}" data-lesson-id="${g(e.lessonId||"")}"`:`data-action="${g(e.action)}"`}>
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.detail)}</p>
        </span>
        <span class="home-task-item-count" aria-hidden="true">${i(String(e.count??0))}</span>
      </button>
    `}function ec(){const e=Gn();return{title:Xl(e),summary:mm(e)}}function _(e){const t=String(e);r.progress.cards[t]||(r.progress.cards[t]={state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]});const n=Ua(r.progress.cards[t]);return n.successRate=fp(n),Number.isFinite(Number(n.srsStep))?n.srsStep=oe(Math.trunc(Number(n.srsStep)),-1,63):n.srsStep=yi(n),r.progress.cards[t]=n,n}function Ts(e,t="seen"){if(!r.progress||!e?.id)return!1;ie();const n=new Date().toISOString();let s=!1;const a=String(e.id);return r.progress.seenCards[a]||(r.progress.seenCards[a]=n,s=!0),e.kanji&&!r.progress.seenKanji[e.kanji]&&(r.progress.seenKanji[e.kanji]={at:n,cardId:a,source:t,jlpt:e.jlpt||""},s=!0),s}function Rs(e,t="seen"){Ts(e,t)&&j()}const st=[5/1440,1/24,12/24,1,2,4],ki=1;function yi(e){const t=Number(e?.intervalDays||0);if(!(t>0))return-1;for(let s=0;s<st.length;s+=1)if(t<=st[s]*1.08)return s;const n=st[st.length-1];return st.length-1+Math.max(1,Math.round(Math.log2(t/n)))}function Am(e){const t=Math.trunc(e);return t<0?0:t<st.length?st[t]||st[0]:st[st.length-1]*2**(t-(st.length-1))}function xm(e,t,n=ki){const s=Array.isArray(e)?e.slice():[],a=Array.isArray(t)?t.slice():[],o=[],l=Math.max(1,Math.trunc(Number(n)||ki));let c=0,d=0,u=0;for(;c<s.length||d<a.length;){if(u>=l&&d<a.length){o.push(a[d++]),u=0;continue}if(c<s.length){o.push(s[c++]),u+=1;continue}if(d<a.length){o.push(a[d++]),u=0;continue}break}return o}function Cm(e,t){const n=yi(e);return t==="again"?0:t==="hard"?n<1?1:n:t==="easy"?n<0?2:n+2:n<0?0:n+1}function Lm(e){const t=Math.max(1,Math.round(e*24*60));if(t<60)return p()==="ru"?`${t} мин.`:`${t} min`;const n=Math.round(t/60);if(n<24)return p()==="ru"?`${n} ?.`:`${n} h`;const s=Math.round(n/24);return p()==="ru"?`${s} ??.`:`${s} d`}function Fr(e){const t=e.state==="Learning"?3:e.state==="Review"?2:e.state==="Mastered"?1:0,n=Number(e.lapses||0),s=Number(e.wrong||0),a=Number(e.correct||0);return t+n*4+s*2-a*.05}function Jt(e,t,n="jlpt_lesson"){if(!t)return!1;const a=tc(e,t).reduce((o,l)=>Ts(l,n)||o,!1);return a&&j(),a}function tc(e,t){const n=String(e||"").toUpperCase();return n==="N5"?Qt(t):n==="N4"?Gs(t):n==="N3"?Hs(t):n==="N2"?Qs(t):(t?.kanji||[]).map(s=>r.cards.find(a=>a.kanji===s&&String(a.jlpt||"").toUpperCase()===n)).filter(Boolean)}function Im(e){const t=r.progress?.cards?.[String(e?.id||"")];return t?t.state&&t.state!=="New"?!0:!!(t.lastReviewedAt||t.lastReviewedAt||Number(t.reviewCount||0)>0||Number(t.correct||0)>0||Number(t.wrong||0)>0||Number(t.lapses||0)>0):!1}function nc(){return ie(),r.progress.evaRoomQuiz}function sc(){const e=[r.cards||[],typeof wt=="function"?wt():[],typeof Fe=="function"?Fe():[],typeof ze=="function"?ze():[],typeof Ue=="function"?Ue():[]];return rc(e.flat().filter(Boolean))}function Tm(){if(!r.progress)return[];ie();const e=new Set(Object.keys(r.progress.seenCards||{})),t=new Set(Object.keys(r.progress.seenKanji||{})),n=new Set(Object.keys(r.progress.lessonCompletions||{})),s=Rm(),a=sc().filter(o=>{if(!o?.id||!o.kanji||!xe(o,"ru")||!xe(o,"en"))return!1;const l=String(o.jlpt||"").toUpperCase();return e.has(String(o.id))||t.has(o.kanji)||Im(o)||n.has(o.lessonId)||s.has(`${l}:${o.kanji}`)||s.has(o.kanji)});return rc(a)}function Rm(){const e=new Set,t=(n,s)=>{if(!s)return;const a=String(n||"").toUpperCase();e.add(String(s)),a&&e.add(`${a}:${s}`)};return $i().forEach(n=>{const s=n.course();Object.keys(s.studiedKanji||{}).forEach(a=>t(n.level,a)),Object.keys(s.completedLessons||{}).forEach(a=>{(n.lessonById(a)?.kanji||[]).forEach(l=>t(n.level,l))})}),e}function $i(){return[{level:"N5",course:Q,lessonById:it,markStudied:Zn,markDifficult:Js},{level:"N4",course:K,lessonById:Xt,markStudied:es,markDifficult:qs},{level:"N3",course:P,lessonById:Yt,markStudied:ts,markDifficult:Ws},{level:"N2",course:E,lessonById:en,markStudied:ns,markDifficult:Xs}]}function rc(e){const t=new Set;return e.filter(n=>{const s=`${n.kanji}:${xe(n,"ru")}:${xe(n,"en")}`;return t.has(s)?!1:(t.add(s),!0)})}function _m(e){!(e instanceof HTMLElement)||e.hasAttribute("disabled")||(e.classList.add("is-action-pressed"),window.requestAnimationFrame(()=>{window.setTimeout(()=>e.classList.remove("is-action-pressed"),120)}))}function Mm(e){if(e.target.classList?.contains("detail-backdrop")){x("menu_close"),r.detailCardId=null,ae();return}if(e.target.classList?.contains("final-test-backdrop")){r.finalTestModal=null,r.finalTestBusy=!1,ae();return}const t=e.target.closest(".nav-popover, .bottom-nav");if(r.navMenu&&!t&&!e.target.closest("[data-action]")){r.navMenu=null,ae();return}const n=e.target.closest("[data-action]");if(!n)return;const s=n.dataset.action,a=n.dataset.id;if(_m(n),!(["eva-click","eva-autonomy-next","eva-question-answer"].includes(s)&&Date.now()-kl<280)){if(s&&s.endsWith("-complete-lesson")){const l=`${s.split("-")[0]}:${a||""}`;if(le.has(l)){n&&(n.disabled=!0,n.textContent=p()==="ru"?"Урок завершён":"Lesson completed");return}}if(ji(s),requestAnimationFrame(()=>window.setTimeout(()=>Dm(s,n),0)),s==="route"){const o=n.dataset.route;if(n.closest(".bottom-nav")&&Ur(o)){lf(o);return}r.navMenu=null,o==="writing"&&r.detailCardId&&(r.activeCardId=r.detailCardId),Ke(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="nav-menu-route"){const o=n.dataset.route;r.navMenu=null,o==="writing"&&r.detailCardId&&(r.activeCardId=r.detailCardId),Ke(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="share-page"&&op(n.dataset.shareSection||r.route,H$(n)).catch(()=>O(p()==="ru"?"Не удалось поделиться":"Share failed")),s==="toggle-header-socials"&&pp(!Bo()),s==="notification-center"){if(r.notificationPromptVisible){vp();return}(r.notificationPrompt?.docked||Fa("header"))&&Ba("header");return}if(s==="repeat-onboarding"){xi({force:!0});return}if(s==="onboarding-next"){hc();return}if(s==="onboarding-prev"){vc();return}if(s==="onboarding-continue"){rf();return}if(s==="onboarding-close"||s==="onboarding-skip"){Ms({completed:s==="onboarding-close"});return}if(s==="dismiss-mascot-speech"){mu(n.dataset.speechKey||"");return}if(s==="contact-email"&&(r.navMenu=null,r.contactModal=!0,ae()),s==="copy-contact-email"&&dp(Dt).then(o=>{O(o?p()==="ru"?"Email скопирован":"Email copied":p()==="ru"?"Не удалось скопировать email":"Could not copy email")}),s==="close-contact-modal"&&(r.contactModal=!1,ae()),s==="close-pwa-install-help"&&(r.pwaInstallHelpVisible=!1,ae()),s==="close-nav-menu"&&(r.navMenu=null,ae()),s==="close-final-test-modal"&&(r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=null,ae()),s==="final-test-focus-missing"){const o=n.dataset.focus||r.finalTestModal?.focusSelector||null;r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=o,ae()}if(s==="final-test-force-submit"){const o=String(n.dataset.level||r.finalTestModal?.level||"N5").toUpperCase();o==="N4"?kd(!0):o==="N3"?Rd(!0):o==="N2"?Ud(!0):o==="N1"?submitN1FinalTest(!0):ld(!0)}if(s==="final-test-next-level"){const o=W(n.dataset.nextLevel||""),l=String(n.dataset.nextLesson||"");if(!o||!l)return;r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=null,Ra(o,l);return}if(s==="scroll-page-edge"&&((n.dataset.direction||Ci())==="up"?Jr():af()),s==="theme"&&mj(),s==="language"&&fj(),s==="sound"&&up(),s==="toggle-ux-sound"&&hj(),s==="export"&&q$(),s==="import"&&yl.click(),s==="reset"&&gj(),s==="share-achievement"&&ij().catch(()=>O(S("shareFallback"))),s==="pwa-install"&&Bj(),s==="pwa-later"&&Wo(),s==="notification-allow"&&qj(),s==="notification-later"&&za(),s==="mascot-click"&&Ky(n.dataset.character),s==="eva-click"&&bu(),s==="eva-dialogue-skip"&&Em(n),s==="dictionary-favorites-tab"&&(r.filters.favorites=n.dataset.favorites||"all",r.dictionaryVisibleCount=ys,ae()),s==="set-learn-jlpt"){r.activeLearnJlpt=String(n.dataset.jlpt||"all").toUpperCase();const o=Oi();Uc(o),r.activeCardId=null,ae()}if(s==="dictionary-load-more"&&(r.dictionaryVisibleCount+=qp,ae()),s==="toggle-favorite"&&k$(a),s==="eva-room-choice"&&bh(n),s==="eva-question-answer"&&dh(n),s==="eva-room-reset"&&yh(),s==="toggle-eva-autonomy"&&Ih(),s==="cycle-eva-autonomy"&&Th(),s==="eva-autonomy-room-mode"&&Rh(),s==="eva-autonomy-outfit-mode"&&_h(),s==="eva-autonomy-next"&&zc(),s==="eva-autonomy-clear"&&Mh(),s==="eva-room-shop-open"&&(r.evaRoomShopOpen=!0,we("shop_opened"),ae()),s==="eva-room-shop-close"&&(r.evaRoomShopOpen=!1,ae()),s==="eva-bg-buy"&&$h(a),s==="eva-bg-select"&&jh(a),s==="eva-sprite-buy"&&Sh(a),s==="eva-sprite-select"&&Nh(a),s==="shop-category"&&(r.shopFilters.category=n.dataset.category||"all",ae()),s==="shop-filter"&&(r.shopFilters.view=n.dataset.filter||"all",ae()),s==="shop-sort"&&(r.shopFilters.sort=n.dataset.sort||"featured",ae()),s==="shop-buy"&&ea(a),s==="shop-select"&&ta(a),s==="shop-clear-effect"&&Bc(a),s==="shop-clear-item"&&Ch(a),s==="clear-writing"&&Qy(),s==="undo-writing"&&Xy(),s==="check-writing"&&Vy(!0),s==="replay-writing"&&Su(),s==="play-writing-step"&&Nu(),s==="writing-step-prev"&&Au(-1),s==="writing-step-next"&&Au(1),s==="select-writing-step"&&xu(Number(n.dataset.index||0),!0),s==="insert-sentence-tile"&&kk(Number(n.dataset.index)),s==="undo-sentence-tile"&&yk(),s==="clear-sentence"&&$k(),s==="check-sentence"&&jk(),s==="next-sentence"&&Nk(),s==="reading-review-tile"&&Av(Number(n.dataset.index)),s==="reading-review-undo"&&xv(),s==="reading-review-clear"&&Cv(),s==="reading-review-check"&&rd(),s==="reading-review-answer"&&Nv(n),s==="toggle-reading-translation"&&Lv(),s==="add-custom-sentence"&&ak(),s==="edit-custom-sentence"&&ok(n.dataset.id),s==="delete-custom-sentence"&&lk(n.dataset.id),s==="cancel-custom-sentence-edit"&&ck(),s==="insert-jlpt-tile"&&B$(Number(n.dataset.index)),s==="undo-jlpt-tile"&&z$(),s==="clear-jlpt-practice"&&J$(),s==="check-jlpt-practice"&&U$(),s==="next-jlpt-practice"&&G$(),s==="n5-open-lesson"&&Pv(a),s==="n5-overview"&&Ev(),s==="n5-review"&&Dv(n.dataset.mode||null),s==="n5-answer"&&Iv(n),s==="n5-check-input"&&Tv(a),s==="n5-srs"&&id(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n5-writing-done"&&_v(a),s==="n5-complete-lesson"&&Mv(a),s==="jlpt-lesson-answer"&&Rv(n.dataset.level||"",n.dataset.lesson||n.dataset.lessonId||"",n.dataset.card||a,String(n.dataset.value||"")==="remember"),s==="n5-final-answer"&&Fv(n),s==="n5-final-submit"&&ld(),s==="n5-final-reset"&&Bv(),s==="n4-open-lesson"&&pw(a),s==="n4-overview"&&gw(),s==="n4-review"&&mw(n.dataset.mode||null),s==="n4-kanji"&&fw(),s==="n4-grammar"&&hw(),s==="n4-reading"&&vw(),s==="n4-listening"&&ww(),s==="n4-final"&&bw(),s==="n4-answer"&&aw(n),s==="n4-check-input"&&iw(a),s==="n4-srs"&&vd(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n4-writing-done"&&ow(a),s==="n4-complete-lesson"&&lw(a),s==="n4-grammar-complete"&&cw(a,n.dataset.value||""),s==="n4-reading-complete"&&dw(a,n.dataset.question||"",n.dataset.value||""),s==="n4-listening-complete"&&uw(a,n.dataset.question||"",n.dataset.value||""),s==="n4-final-answer"&&$w(n),s==="n4-final-submit"&&kd(),s==="n4-final-reset"&&jw(),s==="n3-open-lesson"&&Qw(a),s==="n3-overview"&&Xw(),s==="n3-review"&&Vw(n.dataset.mode||null),s==="n3-kanji"&&Yw(),s==="n3-grammar"&&Zw(),s==="n3-reading"&&eb(),s==="n3-listening"&&tb(),s==="n3-final"&&nb(),s==="n3-answer"&&zw(n),s==="n3-check-input"&&Jw(a),s==="n3-srs"&&Ld(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n3-writing-done"&&Uw(a),s==="n3-complete-lesson"&&Gw(a),s==="n3-grammar-complete"&&qw(a,n.dataset.value||""),s==="n3-reading-complete"&&Hw(a,n.dataset.question||"",n.dataset.value||""),s==="n3-listening-complete"&&Ww(a,n.dataset.question||"",n.dataset.value||""),s==="n3-final-answer"&&ab(n),s==="n3-final-submit"&&Rd(),s==="n3-final-reset"&&ib(),s==="n2-open-lesson"&&Rb(a),s==="n2-overview"&&_b(),s==="n2-review"&&Mb(n.dataset.mode||null),s==="n2-kanji"&&Pb(),s==="n2-grammar"&&Eb(),s==="n2-reading"&&Db(),s==="n2-listening"&&Kb(),s==="n2-final"&&Ob(),s==="n2-answer"&&Nb(n),s==="n2-check-input"&&Ab(a),s==="n2-srs"&&Bd(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n2-writing-done"&&xb(a),s==="n2-complete-lesson"&&Cb(a),s==="n2-grammar-complete"&&Lb(a,n.dataset.value||""),s==="n2-reading-complete"&&Ib(a,n.dataset.question||"",n.dataset.value||""),s==="n2-listening-complete"&&Tb(a,n.dataset.question||"",n.dataset.value||""),s==="n2-final-answer"&&zb(n),s==="n2-final-submit"&&Ud(),s==="n2-final-reset"&&Jb(),s==="review-exercise-next"){Zs(),r.pendingFocus="__scroll-top__",N();return}if(s==="play-kanji-audio"){const o=te(a)||te(r.activeCardId);o&&(n.dataset.ttsText||n.dataset.ttsKind?ep(o,{text:n.dataset.ttsText||"",kind:n.dataset.ttsKind||"cycle",label:n.dataset.ttsLabel||"",fallback:()=>Zu(o)}):Yu(o))}if(s==="open-jlpt-lesson"){const o=String(n.dataset.jlpt||"").toUpperCase();if(un(o)){if(!et(o)){r.activeTextbookLevel=o,r.activeJlptLesson=o,Ke("textbooks",null,o),O(It(o));return}r.activeJlptLesson=o,Ke("jlpt-lesson",null,o)}}if(s==="open-jlpt-lesson-start"&&Ra(n.dataset.jlpt||_t()),s==="social-link"&&pn(`social_${String(n.dataset.network||"").toLowerCase()}_opened`,{network:n.dataset.network||"",section:r.route}),s==="play-audio"&&M$(n.dataset.audio,n.dataset.label),s==="close-reward"&&(r.rewardModal=r.rewardQueue.shift()||null,r.rewardModal&&yu(r.rewardModal),N()),s==="set-goal"&&(r.progress.settings.dailyGoal=Number(n.dataset.goal),j(),O(`${S("dailyGoal")}: ${r.progress.settings.dailyGoal}`),N()),s==="buy-shop"&&ea(a),s==="start-due"&&(Ke("textbooks"),Re()||O(Ce("eva","welcome"))),s==="home-lesson"){const o=W(n.dataset.level||"")||_t(),l=String(n.dataset.lessonId||"");Ra(o,l)}if(s==="home-review"&&(Re()?Ke("review"):O(p()==="ru"?"Пока нет повторений.":"No reviews are due right now.")),s==="home-primary"&&zh(),s==="learning-path-node"&&Gc(n.dataset.node||a),s==="learning-path-back"&&xn(),s==="learning-path-choice"){const o=String(n.dataset.node||""),l=String(n.dataset.step||""),c=String(n.dataset.value||""),d=Ks(o),u=d.steps.find(m=>m.id===l);if(!u||u.kind!=="quiz"||d.session.answers?.[l])return;d.session.answers[l]={selected:c,correct:c===u.answer,at:new Date().toISOString()},c===u.answer?d.session.score=Number(d.session.score||0)+1:d.session.mistakes=[...new Set([...d.session.mistakes||[],l])],d.session.updatedAt=new Date().toISOString(),j(),N()}if(s==="learning-path-step-next"){const o=String(n.dataset.node||r.activeLearnNodeId||""),l=Ks(o);if(!l.steps.length)return;const c=l.steps[l.session.stepIndex];if(c?.kind==="quiz"&&!l.session.answers?.[c.id])return;l.session.stepIndex=Math.min(l.session.stepIndex+1,l.steps.length),l.session.updatedAt=new Date().toISOString(),j(),N()}if(s==="learning-path-retry"){const o=String(n.dataset.node||r.activeLearnNodeId||""),c=(Ks(o).session.mistakes||[]).slice();zt().activeSession=oi({nodeId:o,mode:"mistakes",stepIndex:0,answers:{},mistakes:[],reviewStepIds:c,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),j(),N()}if(s==="learning-path-continue"){const o=String(n.dataset.node||r.activeLearnNodeId||""),l=Ks(o);Hh(o,l.session,l.steps),xn();return}if(s==="start-lesson"||s==="select-lesson"){const o=r.lessons.find(l=>l.id===a);if(!o||!Ae(o)){O(`${S("unlockedAt")} ${La(o)}`);return}if(r.activeLessonId=a,r.activeCardId=null,r.revealed=!1,yt(),s==="start-lesson"){we("lesson_start",{lessonId:a,jlpt:o.jlpt});const l=String(o.jlpt||"").toUpperCase();/^n[2-5]-lesson-\d+$/i.test(o.id)&&["N5","N4","N3","N2"].includes(l)?(Ke("textbooks",null,l),r.activeTextbookSubroute=o.id,history.replaceState(null,"",`#textbooks/${encodeURIComponent(l)}/${encodeURIComponent(o.id)}`),N()):xn(vn,o.id)}else N()}if(s==="show-answer"&&(Rs(te(r.activeCardId),"show_answer"),r.revealed=!0,yt(),Oe()),s==="check-reading"){const o=document.getElementById(`readingCheck-${a||r.activeCardId}`);o&&(r.readingCheck.value=o.value,r.readingCheck.cardId=a||r.activeCardId),Fu()}if(s==="rate"&&Ty(n.dataset.rating),s==="open-card"&&(Rs(te(a),"card_details"),r.detailCardId=a,N()),s==="open-kanji-page"&&Bm(a),s==="close-detail"&&(r.detailCardId=null,ae()),s==="study-card"){const o=te(a);if(!o)return;Rs(o,"study_card"),r.activeLessonId=o.lessonId,r.activeCardId=o.id,r.revealed=!1,yt(o.id),r.detailCardId=null,xn(vn,o.lessonId)}}}function Pm(e){const t=e.target.closest?.('[data-action="eva-click"], [data-action="eva-autonomy-next"]');if(!t||t.disabled)return;const n=t.dataset.action;kl=Date.now(),e.preventDefault(),ji(n),n==="eva-click"&&bu(),n==="eva-autonomy-next"&&zc()}function ji(e="activity"){r.evaRuntime&&(r.evaRuntime.lastPlayerActionAt=Date.now(),r.evaRuntime.memory=Nn(Nt(),r.evaRuntime.memory||{}),r.evaRuntime.memory.lastRoute=r.route,e.startsWith("eva")&&(r.evaRuntime.memory.lastInteractionDate=se()),["eva-autonomy-next","eva-question-answer"].includes(e)&&(r.evaRuntime.lastPlayerActionAt=Date.now()))}function Em(e){if(!r.evaRuntime)return;const t=e?.dataset?.lineId||X().currentLine?.id||"";!t||r.evaRuntime.textRevealSkippedLineId===t||(r.evaRuntime.textRevealSkippedLineId=t,An(),N())}function Dm(e,t){if(!(!e||t?.disabled)&&!Km(e,t)&&!["eva-room-choice","eva-bg-buy","eva-bg-select"].includes(e)){if(e==="eva-room-shop-open"){x("menu_open");return}if(e==="eva-room-shop-close"){x("menu_close");return}if(e==="route"){if(t?.closest(".bottom-nav")&&Ur(t.dataset.route)){x(r.navMenu===t.dataset.route?"menu_close":"menu_open");return}x("tab_switch");return}if(e==="nav-menu-route"){x("tab_switch");return}if(e==="close-nav-menu"){x("menu_close");return}if(e==="toggle-header-socials"){x(Bo()?"menu_close":"menu_open");return}if(e==="show-answer"||e==="open-card"){x("card_flip");return}if(["close-reward","close-detail","close-pwa-install-help","pwa-later","notification-later","dismiss-mascot-speech"].includes(e)){x("menu_close");return}if(e==="notification-center"){x("notification_soft");return}if(["start-lesson","select-lesson","next-sentence","study-card","rate","open-jlpt-lesson","n5-open-lesson","n5-overview","n5-review","n4-open-lesson","n4-overview","n4-review","n4-kanji","n4-grammar","n4-reading","n4-listening","n4-final","n3-open-lesson","n3-overview","n3-review","n3-kanji","n3-grammar","n3-reading","n3-listening","n3-final","n2-open-lesson","n2-overview","n2-review","n2-kanji","n2-grammar","n2-reading","n2-listening","n2-final"].includes(e)){x("page_turn");return}if(["n5-answer","n5-check-input","n5-srs","n5-writing-done","n5-complete-lesson","n5-final-answer","n5-final-submit","n4-answer","n4-check-input","n4-srs","n4-writing-done","n4-complete-lesson","n4-grammar-complete","n4-reading-complete","n4-listening-complete","n4-final-answer","n4-final-submit","n3-answer","n3-check-input","n3-srs","n3-writing-done","n3-complete-lesson","n3-grammar-complete","n3-reading-complete","n3-listening-complete","n3-final-answer","n3-final-submit","n2-answer","n2-check-input","n2-srs","n2-writing-done","n2-complete-lesson","n2-grammar-complete","n2-reading-complete","n2-listening-complete","n2-final-answer","n2-final-submit","n1-answer","n1-check-input","n1-srs","n1-writing-done","n1-complete-lesson","n1-grammar-complete","n1-reading-complete","n1-listening-complete","n1-final-answer","n1-final-submit","jlpt-lesson-answer"].includes(e)){x("button_click");return}if(["pwa-install","notification-allow","notification-center","set-goal"].includes(e)){x("notification_soft");return}t?.matches("button, .btn, [role='button']")&&x("button_click"),e!=="toggle-header-socials"&&pp(!1)}}function Km(e,t){return["learn","review"].includes(r.route)?new Set(["show-answer","rate","check-reading","play-kanji-audio","start-lesson","select-lesson","study-card"]).has(e)||!!t?.closest(".study-card, .study-layout"):!1}function ac(e){ji("input");const t=e.target.closest("[data-ux-volume]");if(t){yj(Number(t.value)/100);const c=document.querySelector("[data-ux-volume-label]");c&&(c.textContent=`${Math.round(Ea()*100)}%`);return}const n=e.target.closest("[data-reading-input]");if(n){r.readingCheck={cardId:n.dataset.id||r.activeCardId,value:n.value,status:null,message:""};return}const s=e.target.closest("[data-sentence-draft]");if(s){const c=je(),d=s.dataset.sentenceDraft;c.customDraft=Dr(c.customDraft||{}),d&&Object.prototype.hasOwnProperty.call(c.customDraft,d)&&(c.customDraft[d]=s.value,c.customMessage="",c.customStatus="",j());return}const a=e.target.closest("[data-filter]");if(!a)return;const o=a.dataset.filter,l=a.selectionStart;r.filters[o]=a.value,r.dictionaryVisibleCount=ys,N(),requestAnimationFrame(()=>{const c=document.getElementById(a.id);c&&(c.focus(),typeof l=="number"&&"setSelectionRange"in c&&c.setSelectionRange(l,l))})}function Om(e){if(nf(e)||Fm(e))return;if(e.key==="Escape"&&(r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible||r.navMenu)){r.detailCardId=null,r.rewardModal=null,r.finalTestModal=null,r.contactModal=!1,r.pwaInstallHelpVisible=!1,r.navMenu=null,N();return}const t=e.target.closest?.("[data-reading-input]");!t||e.key!=="Enter"||(e.preventDefault(),r.readingCheck.value=t.value,r.readingCheck.cardId=t.dataset.id||r.activeCardId,Fu())}function Fm(e){return e.target?.closest?.("input, textarea, select, [contenteditable='true']")||e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||(Ir=`${Ir}${e.key.toLowerCase()}`.slice(-fe.length),Ir!==fe)?!1:(Ir="",ic(5e3),!0)}function ic(e=5e3){const t=Math.max(1,Math.min(999999,Math.floor(Number(e)||5e3)));return r.progress?(B(0,t,"cheat:moon_farm"),H(),j(),x("moon_fragment_gain"),O(p()==="ru"?`Чит активирован: +${t} Moon`:`Cheat activated: +${t} Moon`),N(),r.progress.moonFragments):0}function xn(e=$s,t=null,n=null){r.route="learn",r.activeLearnView=e,r.activeLearnNodeId=e===Kt&&String(t||"")||null,r.activeLearnLegacyLessonId=e===vn&&String(t||"")||null;const s=e===Kt&&t?`#learn/lesson/${encodeURIComponent(String(t))}`:e===vn&&t?`#learn/legacy/${encodeURIComponent(String(t))}`:"#learn";location.hash!==s&&history.replaceState(null,"",s),r.activeTextbookLevel=null,r.activeTextbookSubroute=null,r.kanjiPageId=null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=n,r.evaRoomShopOpen=!1,yt(),Gt(),ae()}function Ke(e,t=null,n=null){if(e==="learn"){xn($s,null,t);return}const s=r.route;if(r.route=Gp.includes(e)?e:"home",s!==r.route&&(s==="review"||r.route==="review")&&(r.reviewSession=null),r.route==="textbooks"?(r.activeTextbookLevel=n?String(n).toUpperCase():null,r.activeTextbookSubroute=null):r.route==="jlpt-lesson"?r.activeJlptLesson=n?String(n).toUpperCase():r.activeJlptLesson||nl()||null:(r.activeTextbookLevel=null,r.activeTextbookSubroute=null),r.route!=="review"&&Zs(),r.route==="textbooks")Pt(Sp(r.activeTextbookLevel||"",r.activeTextbookSubroute||""));else{const a=r.route==="learn"?"#learn":r.route==="jlpt-lesson"&&r.activeJlptLesson?`#jlpt-lesson/${encodeURIComponent(r.activeJlptLesson)}`:`#${r.route}`;Pt(a)}r.route!=="kanji"&&(r.kanjiPageId=null),r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=t,r.route!=="eva-room"&&(r.evaRoomShopOpen=!1),yt(),Gt(),Oe(),Cs(r.route)&&ni({route:r.route,delay:0}),r.route==="eva-room"&&we("room_opened")}function Bm(e){const t=te(e);if(!t)return;r.route="kanji",r.kanjiPageId=t.id,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.pendingFocus=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.evaRoomShopOpen=!1,yt();const n=`#kanji/${encodeURIComponent(t.id)}`;Pt(n),Gt(),Oe()}function oc(){const e=Vp.begin(r.route);xr=!0,Cr=null,l$();try{kf();let t="";if(r.route==="home"&&(t=$f()),r.route==="download"&&(t=ff()),r.route==="about"&&(t=vf()),r.route==="learn"&&(t=Bh(),r.pendingFocus!=="lesson-tabs"&&requestAnimationFrame(To)),r.route==="review"&&(t=Xb(),r.pendingFocus!=="sentence-practice"&&requestAnimationFrame(To)),r.route==="dictionary"&&(t=Jk()),r.route==="kanji"&&(t=Wk()),r.route==="writing"&&(t=py(),requestAnimationFrame(Gy)),r.route==="stats"&&(t=hy(),requestAnimationFrame($u)),r.route==="achievements"&&(t=by()),r.route==="eva-room"&&(t=xf()),r.route==="jlpt-lesson"&&(t=Xh()),r.route==="textbooks"&&(t=Vh()),!e.isCurrent())return;Ft.innerHTML=`${t}${pf()}${Jm()}`,document.body.classList.toggle("modal-open",!!(r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible)),Ly(),requestAnimationFrame(()=>{bf(),Li(),Zm()})}catch(t){e.isCurrent()&&(console.error(`[Flash Kanji] route=${r.route} build=${M}`,t?.stack||t),Ft.innerHTML=zm(t))}finally{xr=!1}}function ae(){Bn||(Bn=requestAnimationFrame(()=>{Bn=0,oc()}))}function Oe(){Bn&&(cancelAnimationFrame(Bn),Bn=0),oc()}function N(){ae()}function zm(e){const t=e instanceof Error?e.message:String(e||"Unknown route error");return`<section class="page empty-state" data-route-error="${g(r.route)}"><h1>${i(p()==="ru"?"Не удалось открыть раздел":"Could not open this section")}</h1><p>${i(t)}</p><button class="btn primary" type="button" data-action="route" data-route="home">${i(p()==="ru"?"На главную":"Home")}</button></section>`}function Jm(){const e=`${wf()}${my()}${$y()}${Lk()}${jy()}${Sy()}${Ny()}${Ay()}${of()}`;return e?`<div class="modal-layer">${e}</div>`:""}function lc(){return ce?.isConnected?ce:document.body?(ce||(ce=document.createElement("div"),ce.className="flash-kanji-onboarding-root",ce.setAttribute("role","presentation"),ce.setAttribute("aria-hidden","false")),ce.isConnected||document.body.appendChild(ce),ce):null}const Si=[{target:null,title:{ru:"Добро пожаловать",en:"Welcome"},text:{ru:"Привет! Я Ева. Быстро покажу, где что находится и как пользоваться Flash Kanji.",en:"Hi! I am Eva. I will quickly show you where everything is and how Flash Kanji works."}},{target:"[data-tour='home-lesson']",title:{ru:"Учебники",en:"Textbooks"},text:{ru:"Это главный вход в Flash Kanji. Здесь открываются учебники N5-N1 и путь к урокам каждого уровня.",en:"This is the main entrance to Flash Kanji. Open N5-N1 textbooks here and continue into each level's lessons."}},{target:"[data-tour='srs-review']",title:{ru:"Повторение",en:"Review"},text:{ru:"Изученные карточки возвращаются в повторение, чтобы закрепляться в памяти.",en:"Learned cards come back here for spaced repetition so they stay in memory."}},{target:"[data-tour='dictionary']",title:{ru:"Словарь",en:"Dictionary"},text:{ru:"В словаре можно посмотреть значения, чтения, примеры и подробности по каждому кандзи.",en:"The dictionary lets you check meanings, readings, examples, and kanji details."}},{target:["[data-tour='eva-room']","[data-tour='profile-progress']","[data-tour='profile-progress-nav']"],title:{ru:"Комната Евы",en:"Eva room"},text:e=>e?.dataset?.tour==="eva-room"?{ru:"Это моя комната. Здесь можно поговорить со мной, менять облик и тратить Moon Fragments.",en:"This is my room. You can talk to me here, change the look, and spend Moon Fragments."}:{ru:"Если комнаты Евы на этой странице нет, посмотри на стрик и статистику.",en:"If Eva Room is not on this page, check the streak and progress stats instead."}}],Br={title:{ru:"Готово!",en:"All set!"},text:{ru:"Открой учебники и начни с N5. Я рядом.",en:"Open the textbooks and start with N5. I will be right here."},start:{ru:"Открыть учебники",en:"Open textbooks"},close:{ru:"Закрыть",en:"Close"}};function cc(){try{return localStorage.getItem(il)==="true"}catch{return!1}}function Um(){try{return localStorage.getItem(ll)||""}catch{return""}}function zr(e){try{localStorage.setItem(ll,e)}catch(t){console.warn("Could not save onboarding audience.",t)}}function Gm(e=r.progress){return e?Number(e.appOpens||0)>0||Object.keys(e.lessonCompletions||{}).length>0||Object.keys(e.cards||{}).length>0||Object.keys(e.seenKanji||{}).length>0||Object.keys(e.daily||{}).length>0||Object.keys(e.favorites||{}).length>0||Object.keys(e.transactions||{}).length>0||Number(e.totalMoonFragmentsEarned||0)>0||Number(e.secrets?.evaClicks||0)>0||(e.secrets?.nightVisit?1:0)>0||Number(e.visits?.streak||0)>0||Number(e.visits?.bestStreak||0)>0:!1}function qm(e=!1){const t=Um();return t==="returning"||t==="completed"?t:cc()?(zr("completed"),"completed"):e?(zr("returning"),"returning"):(zr("new"),"new")}function dc(){return!cc()}function Hm(){try{localStorage.getItem(ol)==="true"&&localStorage.removeItem(ol)}catch(e){console.warn("Could not clear legacy onboarding state.",e)}}function Wm(){try{localStorage.setItem(il,"true"),zr("completed")}catch(e){console.warn("Could not save onboarding completion.",e)}}function uc(){return tt}function _s(){return Si.length}function Ni(){return Si[oe(gt,0,_s()-1)]||Si[0]}function Qm(e=Ni()){return e?.target?Array.isArray(e.target)?e.target:[e.target]:[]}function Xm(e){if(!(e instanceof HTMLElement))return!1;const t=window.getComputedStyle(e);return t.display==="none"||t.visibility==="hidden"||Number(t.opacity||"1")<=0?!1:e.getClientRects().length>0}function pc(e=Ni()){for(const t of Qm(e)){const s=Array.from(document.querySelectorAll(t)).find(a=>Xm(a));if(s)return s}return null}function gc(e,t=null){return typeof e=="function"?gc(e(t),t):h(e||{ru:"",en:""})}function Vm(){return typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ym(){return!(tt||!r.progress||!r.i18n||!r.lessons.length||!document.body||document.visibilityState!=="visible"||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.navMenu)}function Ai(e=!1,t=Jp){clearTimeout(zn),!(!e&&!dc())&&(zn=window.setTimeout(()=>{zn=0,xi({force:e})},t))}function xi(e={}){const t=!!e.force;let n=!1;if(tt){if(!t)return!0;Ms({completed:!1,silent:!0})}if(!t&&!dc())return!1;if(!Ym())return Ai(t,cl),!1;clearTimeout(zn);try{Wa=document.activeElement instanceof HTMLElement?document.activeElement:null,tt=!0,ge="step",gt=0,document.body.classList.add("onboarding-open");const s=document.querySelector(".app-shell");if(s){s.setAttribute("aria-hidden","true");try{s.inert=!0}catch(a){console.warn("Could not make the app shell inert.",a)}}return lc(),Hn(),mc(),n=!0,window.addEventListener("scroll",Ut,{passive:!0}),window.addEventListener("resize",Ut),window.addEventListener("orientationchange",Ut),Ut(),fc(),!0}catch(s){return console.error("Flash Kanji onboarding failed to start.",s),Ms({completed:!1,silent:!0}),n||Ai(t,cl),!1}}function Ms(e={}){const{completed:t=!0,silent:n=!1,routeTo:s=null}=e;clearTimeout(zn),zn=0,cancelAnimationFrame(Ss),Ss=0,window.removeEventListener("scroll",Ut),window.removeEventListener("resize",Ut),window.removeEventListener("orientationchange",Ut),mt&&mt.classList.remove("is-onboarding-target"),mt=null,tt=!1,ge="step",gt=0,ce&&(ce.remove(),ce=null,De=null,ke=null),document.body.classList.remove("onboarding-open");const a=document.querySelector(".app-shell");if(a){a.removeAttribute("aria-hidden");try{a.inert=!1}catch(o){console.warn("Could not restore app shell interactivity.",o)}}t&&Wm(),n||(s?Ke(s):N()),Wa?.focus&&requestAnimationFrame(()=>{try{Wa.focus()}catch(o){console.warn("Could not restore onboarding focus.",o)}})}function Hn(){if(!lc())return;const e=ge==="final"?null:Ni(),t=ge==="final"?null:pc(e),n=ge==="final"?Br.title:e.title,s=ge==="final"?Br.text:gc(e.text,t),a=ge==="final"?p()==="ru"?"Готово":"Done":`${gt+1} ${p()==="ru"?"из":"of"} ${_s()}`,o=h(n),l=h(s),c=va("eva","calm","welcome"),d=_s();ce.classList.toggle("is-final",ge==="final"),ce.classList.toggle("has-target",!!t),ce.dataset.view=ge;const u=ge==="final"?`
        <button class="btn primary" type="button" data-action="onboarding-continue">${i(h(Br.start))}</button>
        <button class="btn ghost" type="button" data-action="onboarding-close">${i(h(Br.close))}</button>
      `:gt===0?`
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Начать":"Start")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `:`
          <button class="btn ghost" type="button" data-action="onboarding-prev">${i(p()==="ru"?"Назад":"Back")}</button>
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Далее":"Next")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `;ce.innerHTML=`
      ${ge==="final"?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      ${ge==="final"||t?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      <div class="flash-kanji-onboarding-spotlight${t?"":" is-hidden"}" data-onboarding-spotlight aria-hidden="true"></div>
      <section class="flash-kanji-onboarding-dialog${ge==="final"?" is-final":""}" role="dialog" aria-modal="true" aria-labelledby="flashKanjiOnboardingTitle" aria-describedby="flashKanjiOnboardingDesc" tabindex="-1">
        <div class="flash-kanji-onboarding-head">
          <span class="pill">${i(a)}</span>
          <span class="pill">${i(o)}</span>
        </div>
        <div class="flash-kanji-onboarding-body">
          <img class="flash-kanji-onboarding-eva" src="${g(c)}" alt="${g(p()==="ru"?"Ева":"Eva")}" loading="eager" decoding="async" />
          <div class="flash-kanji-onboarding-copy">
            <h2 id="flashKanjiOnboardingTitle">${i(o)}</h2>
            <p id="flashKanjiOnboardingDesc">${i(l)}</p>
          </div>
        </div>
        <div class="actions flash-kanji-onboarding-actions">${u}</div>
      </section>
    `,De=ye("[data-onboarding-spotlight]",ce),ke=ye(".flash-kanji-onboarding-dialog",ce),mt&&mt!==t&&mt.classList.remove("is-onboarding-target"),mt=t||null,mt&&mt.classList.add("is-onboarding-target"),ke&&(ke.dataset.totalSteps=String(d)),Ut()}function Ut(){tt&&(Ss||(Ss=requestAnimationFrame(()=>{Ss=0,mc()})))}function mc(){if(!tt||!ce||!ke)return;const e=ge==="final"?null:mt||pc();Vm();const t=window.innerWidth,n=window.innerHeight;if(ke.style.maxWidth=`${Math.min(Up,Math.max(280,t-16))}px`,ke.style.maxHeight=`${Math.max(180,n-24)}px`,ke.style.left="50%",ke.style.top="50%",ke.style.transform="translate(-50%, -50%)",ke.dataset.placement="center",e){const s=e.isConnected?e.getBoundingClientRect():null;!!s&&s.top>=8&&s.bottom<=n-8&&s.left>=8&&s.right<=t-8&&De?(De.hidden=!1,De.style.left=`${Math.round(s.left-12)}px`,De.style.top=`${Math.round(s.top-12)}px`,De.style.width=`${Math.round(s.width+12*2)}px`,De.style.height=`${Math.round(s.height+12*2)}px`,De.style.borderRadius=`${Math.max(6,Math.round(parseFloat(getComputedStyle(e).borderRadius||"8")||8))}px`):De&&(De.hidden=!0)}else De&&(De.hidden=!0);ce.style.visibility="visible",fc()}function Zm(){tt&&Hn()}function fc(){if(!ke)return;const e=ke.querySelector('[data-action="onboarding-next"], [data-action="onboarding-continue"], [data-action="onboarding-start"], [data-action="onboarding-prev"]'),t=ke.querySelectorAll("button"),n=e||t[0]||ke;try{n.focus?.()}catch(s){console.warn("Could not focus onboarding control.",s)}}function ef(){return ke?Array.from(ke.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')).filter(e=>e instanceof HTMLElement):[]}function tf(e=1){const t=ef();if(!t.length)return;const n=document.activeElement,s=t.indexOf(n),a=s===-1?e>0?0:t.length-1:(s+e+t.length)%t.length;t[a]?.focus?.()}function nf(e){return tt?e.key==="Tab"?(e.preventDefault(),tf(e.shiftKey?-1:1),!0):e.key==="Escape"?(e.preventDefault(),Ms({completed:ge==="final"}),!0):e.key==="ArrowRight"?(e.preventDefault(),hc(),!0):e.key==="ArrowLeft"?(e.preventDefault(),vc(),!0):!1:!1}function hc(){if(!tt)return;const e=_s()-1;if(ge!=="final"){if(gt<e){gt+=1,Hn();return}ge="final",Hn()}}function vc(){if(tt){if(ge==="final"){ge="step",gt=_s()-1,Hn();return}gt>0&&(gt-=1,Hn())}}function sf(e=null){Ms({completed:!0,routeTo:e})}function rf(){sf("textbooks")}function Jr(){if(typeof window>"u")return;const e=document.scrollingElement||document.documentElement;e&&(e.scrollTop=0),document.body&&(document.body.scrollTop=0),window.scrollTo({top:0,left:0,behavior:"auto"})}function Gt(){typeof window>"u"||requestAnimationFrame(()=>requestAnimationFrame(()=>Jr()))}function af(){if(typeof window>"u")return;const e=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({top:e,behavior:"auto"})}function wc(){return typeof window>"u"||!document.documentElement?!1:document.documentElement.scrollHeight>window.innerHeight+24}function Ci(){return wc()?window.scrollY>32?"up":"down":null}function of(){const e=Ci()||"down",t=wc()?"":" hidden",n=p()==="ru",s=e==="up"?n?"Наверх":"Scroll to top":n?"Вниз":"Scroll to bottom",a=e==="up"?"↑":"↓";return`
      <button class="scroll-position-toggle scroll-position-toggle-${e}" type="button" data-action="scroll-page-edge" data-direction="${e}" aria-label="${g(s)}" title="${g(s)}"${t}>
        <span class="scroll-position-toggle-icon" aria-hidden="true">${i(a)}</span>
        <span class="scroll-position-toggle-label">${i(s)}</span>
      </button>
    `}function Li(){const e=ye('[data-action="scroll-page-edge"]');if(!e)return;const t=Ci();if(!t){e.hidden=!0;return}e.hidden=!1,e.dataset.direction=t,e.classList.toggle("scroll-position-toggle-up",t==="up"),e.classList.toggle("scroll-position-toggle-down",t==="down");const n=e.querySelector(".scroll-position-toggle-icon");n&&(n.textContent=t==="up"?"↑":"↓");const s=e.querySelector(".scroll-position-toggle-label");s&&(s.textContent=p()==="ru"?t==="up"?"Наверх":"Вниз":t==="up"?"Top":"Bottom");const a=p()==="ru"?t==="up"?"Подняться вверх":"Опуститься вниз":t==="up"?"Scroll to top":"Scroll to bottom";e.setAttribute("aria-label",a),e.setAttribute("title",a)}function Ur(e){return e!=="review"&&bc(e).length>1}function lf(e){if(!Ur(e)){Ke(e);return}r.navMenu=r.navMenu===e?null:e,ae()}function bc(e){const t=p()==="ru";return{learn:[{action:"open-jlpt-lesson-start",jlpt:Fi(),icon:"文",title:t?"Текущий урок":"Current lesson",text:t?"Открыть последний урок учебника.":"Open the latest lesson in the textbook."},{route:"review",focus:"review-card",icon:"↻",title:"SRS",text:t?"Перейти к повторениям.":"Go to review."},{route:"textbooks",focus:"textbook-grid",icon:"冊",title:t?"Учебники":"Textbooks",text:t?"Открыть страницы учебников JLPT.":"Open JLPT textbook pages."}],review:[{route:"review",focus:"review-card",icon:"↻",title:t?"Повторение":"Review cards",text:t?"Карточки повторения на сегодня.":"Today's review queue."},{route:"review",focus:"sentence-practice",icon:"文",title:t?"Практика предложений":"Sentence practice",text:t?"Вставь кандзи в пропуск.":"Fill kanji into blanks."}],stats:[{route:"stats",focus:"stats-top",icon:"в–Ґ",title:t?"Статистика":"Statistics",text:t?"Графики, XP и серия.":"Charts, XP, and streak."},{route:"achievements",focus:"achievements-top",icon:"月",title:t?"Достижения":"Achievements",text:t?"Галерея наград.":"Reward gallery."},{route:"stats",focus:"shop-panel",icon:"в—€",title:t?"Магазин":"Shop",text:t?"Moon Fragments и предметы.":"Moon Fragments and items."}],more:[{route:"writing",focus:"writing-canvas",icon:"筆",title:t?"Письмо":"Writing",text:t?"Практика написания.":"Writing practice."},{route:"stats",focus:"stats-top",icon:"в–Ґ",title:t?"Профиль":"Profile",text:t?"Статистика, награды и прогресс.":"Stats, achievements, and progress."},{route:"eva-room",focus:"eva-room",icon:"☾",title:t?"Комната Евы":"Eva room",text:t?"Диалоги и уютные фоны.":"Dialogue scenes and cozy rooms."},{route:"download",focus:"download-top",icon:"⇩",title:t?"Скачать":"Download",text:t?"APK для Android и PWA-установка.":"Android APK and PWA install."},{route:"about",focus:"about",icon:"ℹ",title:t?"О проекте":"About",text:t?"Что такое Flash Kanji.":"What Flash Kanji is."}]}[e]||[]}function Ii(e){return e==="more"?p()==="ru"?"Ещё":"More":e==="about"?p()==="ru"?"О проекте":"About":e==="stats"?p()==="ru"?"Профиль":"Profile":e==="download"?p()==="ru"?"Скачать":"Download":e==="textbooks"||e==="learn"?p()==="ru"?"Учебники":"Textbooks":S(e)}function cf(){return["home","textbooks","review","dictionary","download","stats","about"]}function df(e){return{home:"⌂",textbooks:"文",learn:"文",review:"↻",dictionary:"典",download:"⇩",stats:"▥",about:"ℹ"}[e]||"•"}function uf(e){return`
      <li class="site-footer-link-item">
        <button class="site-footer-link site-footer-link--nav" type="button" data-action="route" data-route="${g(e)}">
          <span class="site-footer-link-icon" aria-hidden="true">${i(df(e))}</span>
          <span>${i(Ii(e))}</span>
        </button>
      </li>
    `}function pf(){const e=p()==="ru",t=new Date().getFullYear(),n=e?"Спокойная лунная комната для кандзи, уроков и повторений.":"A calm moonlit room for kanji, lessons, and steady reviews.",s=e?"Навигация":"Navigation",a=e?"Соцсети":"Social";return`
      <footer class="seo-footer site-footer" aria-label="${g(e?"Подвал сайта":"Site footer")}">
        <div class="site-footer-grid">
          <section class="site-footer-brand" aria-label="${g(e?"О проекте":"About Flash Kanji")}">
            <span class="pill">Flash Kanji</span>
            <p class="site-footer-blurb">${i(n)}</p>
          </section>
          <div class="site-footer-columns">
            <section class="site-footer-section">
              <h2>${i(s)}</h2>
              <ul class="site-footer-nav" aria-label="${g(s)}">
                ${cf().map(o=>uf(o)).join("")}
              </ul>
            </section>
            <section class="site-footer-section">
              <h2>${i(a)}</h2>
              <div class="site-footer-socials" aria-label="${g(e?"Социальные ссылки":"Social links")}">
                <a class="btn ghost footer-social-link" href="${g(Et.youtube)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${ip("youtube")}</span>
                  <span>YouTube</span>
                </a>
                <a class="btn ghost footer-social-link" href="${g(Et.instagram)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${ip("instagram")}</span>
                  <span>Instagram</span>
                </a>
              </div>
            </section>
          </div>
        </div>
        <div class="site-footer-bottom">
          <p class="site-footer-copy">© Flash Kanji ${t}</p>
        </div>
      </footer>
    `}function gf(){return p()==="ru"?{eyebrow:"Flash Kanji · Android",title:"Скачать Flash Kanji",accent:"и установить PWA",lead:"Та же оболочка Flash Kanji: JLPT-учебники, SRS-повторение, словарь и практика письма — на Android и в браузере.",note:"Официальная сборка Flash Kanji. Кнопка APK ведёт на файл в Google Drive, зеркало на сайте остаётся запасным вариантом.",apk:"Скачать APK",pwa:"Установить PWA",web:"Открыть веб-версию",meta:"Android 8.0+ · APK · бесплатно · 793 КБ",stepsTitle:"Как установить",stepsSubtitle:"Коротко и без лишних экранов.",infoTitle:"Что внутри",info:["JLPT N5–N1 учебники и маршрут уроков.","SRS-повторение и словарь кандзи.","Практика письма, импорт/экспорт прогресса и PWA-режим."],steps:[{icon:"1",title:"Скачайте APK",text:"Нажмите «Скачать APK» и дождитесь завершения загрузки."},{icon:"2",title:"Разрешите установку",text:"Если Android попросит, разрешите установку из этого источника."},{icon:"3",title:"Откройте Flash Kanji",text:"Запустите приложение и продолжайте учить кандзи где угодно."}],mirror:"Запасное зеркало APK",screenshotAlt:"Скриншот Flash Kanji на Android"}:{eyebrow:"Flash Kanji · Android",title:"Download Flash Kanji",accent:"and install the PWA",lead:"The same Flash Kanji shell: JLPT textbooks, SRS review, dictionary, and writing practice on Android and in the browser.",note:"Official Flash Kanji build. The APK button opens the Google Drive file; the site mirror is kept as a fallback.",apk:"Download APK",pwa:"Install PWA",web:"Open web version",meta:"Android 8.0+ · APK · free · 793 KB",stepsTitle:"How to install",stepsSubtitle:"Short and clean.",infoTitle:"What's inside",info:["JLPT N5–N1 textbooks and lesson route.","SRS review and kanji dictionary.","Writing practice, progress import/export, and PWA mode."],steps:[{icon:"1",title:"Download the APK",text:"Tap Download APK and wait for the file to finish."},{icon:"2",title:"Allow install",text:"If Android asks, allow installation from this source."},{icon:"3",title:"Open Flash Kanji",text:"Launch the app and keep studying kanji anywhere."}],mirror:"Fallback APK mirror",screenshotAlt:"Flash Kanji Android screenshot"}}function mf(e){return`
      <article class="home-task-item download-install-step">
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.text)}</p>
        </span>
      </article>
    `}function ff(){const e=gf();return`
      <section class="page home-shell download-page" data-section="download-page">
        <article class="home-hero-card download-hero-card" data-section="download-top" aria-labelledby="downloadTitle">
          <img class="home-hero-moon" src="assets/decor/elements/crescent-moon.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
          <div class="home-hero-copy download-hero-copy">
            <p class="eyebrow">${i(e.eyebrow)}</p>
            <h1 class="hero-title home-hero-title" id="downloadTitle">${i(e.title)}<br><em>${i(e.accent)}</em></h1>
            <p class="home-hero-note">${i(e.lead)}</p>
            <p class="hero-subtitle">${i(e.note)}</p>
            <div class="hero-actions home-hero-actions">
              <a class="btn primary home-primary-cta apk-download" href="${g(Dp)}" target="_blank" rel="noopener noreferrer">
                <span aria-hidden="true">⇩</span>
                <span>${i(e.apk)}</span>
              </a>
              <button class="btn ghost home-primary-cta" type="button" data-action="pwa-install">${i(e.pwa)}</button>
              <button class="btn ghost home-primary-cta" type="button" data-action="route" data-route="home">${i(e.web)}</button>
            </div>
            <p class="download-meta">${i(e.meta)}</p>
          </div>
          <figure class="download-app-preview">
            <img src="${g(Op)}" alt="${g(e.screenshotAlt)}" loading="eager" decoding="async" />
          </figure>
        </article>
        <section class="home-dashboard download-dashboard">
          <div class="home-dashboard-main">
            <article class="study-card home-task-card">
              <div class="section-head">
                <div>
                  <span class="eyebrow accent">Android</span>
                  <h2>${i(e.stepsTitle)}</h2>
                  <p>${i(e.stepsSubtitle)}</p>
                </div>
              </div>
              <div class="home-task-list download-install-list">
                ${e.steps.map(mf).join("")}
              </div>
            </article>
          </div>
          <aside class="home-dashboard-side">
            <article class="study-card home-install-card download-info-card">
              <span class="eyebrow accent">Flash Kanji</span>
              <h2>${i(e.infoTitle)}</h2>
              <ul>
                ${e.info.map(t=>`<li>${i(t)}</li>`).join("")}
              </ul>
              <a class="btn ghost" href="${g(Kp)}" download="flash-kanji-android.apk">${i(e.mirror)}</a>
            </article>
          </aside>
        </section>
      </section>
    `}function hf(){return p()==="ru"?{eyebrow:"О проекте",title:"О Flash Kanji",lead:"О Flash Kanji — это образовательный проект для изучения японского языка через кандзи, чтение, примеры и визуальную память.",heroTitle:"Спокойное пространство, куда хочется возвращаться каждый день",heroLead:"Идея проекта простая: сделать обучение японскому не сухой таблицей символов, а живым пространством, где кандзи складываются в привычку.",paragraphs:["Здесь кандзи изучаются постепенно — от базовых уровней до более сложных, с примерами, чтениями, ассоциациями и практикой.","Flash Kanji создан для тех, кто хочет учить японский с нуля или системно прокачивать уже имеющиеся знания.","Проект помогает запоминать иероглифы, понимать их значения, видеть реальные примеры использования и выстраивать привычку регулярного обучения.","В центре Flash Kanji — атмосфера спокойного цифрового кабинета, где обучение похоже не на экзамен, а на личный путь.","Здесь есть карточки, уроки, словарь, повторение, практика написания и визуальные элементы, которые помогают удерживать внимание."],sectionTitle:"Как устроен Flash Kanji",highlightTitle:"Что помогает удерживать ритм",highlightPoints:["Учебники JLPT N5-N1 с постепенным входом в материал.","Карточки с кандзи, чтениями и примерами.","SRS-повторение, чтобы не терять выученное.","Практика письма и тестовые упражнения.","Персонаж-наставник Eva и спокойная визуальная среда."],closing:"Flash Kanji — изучай японский в своей лунной комнате.",textbooks:"К учебникам",review:"К повторению",home:"На главную",evaRoom:"Комната Евы"}:{eyebrow:"About",title:"About Flash Kanji",lead:"Flash Kanji is an educational project for learning Japanese through kanji, readings, examples, and visual memory.",heroTitle:"A quiet place you will want to return to every day",heroLead:"The idea is simple: make Japanese feel less like a dry table of symbols and more like a living space where kanji turn into habit.",paragraphs:["Kanji are introduced gradually, from the basic levels to more advanced ones, with examples, readings, associations, and practice.","Flash Kanji is for people starting Japanese from zero and for learners who want a steady system to grow existing knowledge.","The project helps you remember characters, understand what they mean, see real usage, and build a consistent study routine.","At the center of Flash Kanji is the atmosphere of a calm digital study room, where learning feels like a personal journey rather than an exam.","You get cards, lessons, a dictionary, review, writing practice, and visual elements that help keep attention in place."],sectionTitle:"How Flash Kanji is built",highlightTitle:"What keeps the rhythm going",highlightPoints:["JLPT N5-N1 textbooks with a gradual path into the material.","Cards with kanji, readings, and examples.","SRS review so learned items stay in memory.","Writing practice and test exercises.","Eva as a mentor and a calm visual study space."],closing:"Flash Kanji — study Japanese in your own moonlit room.",textbooks:"Textbooks",review:"Review",home:"Home",evaRoom:"Eva room"}}function vf(){const e=hf();return`
      <section class="page about-page seo-textbook-shell">
        <div class="section-head about-head">
          <div>
            <p class="eyebrow">${i(e.eyebrow)}</p>
            <h1>${i(e.title)}</h1>
            <p>${i(e.lead)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="home">${i(e.home)}</button>
            <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(e.textbooks)}</button>
          </div>
        </div>

        <article class="seo-hero about-hero">
          <div class="about-hero-copy">
            <span class="pill">Flash Kanji</span>
            <h2>${i(e.heroTitle)}</h2>
            <p>${i(e.heroLead)}</p>
            <div class="tag-row">
              <span class="pill">JLPT N5-N1</span>
              <span class="pill">SRS</span>
              <span class="pill">Writing</span>
              <span class="pill">Eva Room</span>
            </div>
          </div>
          <div class="about-hero-art" aria-hidden="true">
            <img src="assets/bg/bg_study_hub.webp" alt="" loading="lazy" />
          </div>
        </article>

        <div class="seo-grid about-grid">
          <article class="seo-card about-card">
            <h2>${i(e.sectionTitle)}</h2>
            ${e.paragraphs.map(t=>`<p>${i(t)}</p>`).join("")}
          </article>
          <article class="seo-card about-card">
            <h2>${i(e.highlightTitle)}</h2>
            <ul>
              ${e.highlightPoints.map(t=>`<li>${i(t)}</li>`).join("")}
            </ul>
            <div class="seo-actions about-actions">
              <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(e.textbooks)}</button>
              <button class="btn ghost" type="button" data-action="route" data-route="review">${i(e.review)}</button>
              <button class="btn ghost" type="button" data-action="route" data-route="eva-room">${i(e.evaRoom)}</button>
            </div>
          </article>
        </div>

        <article class="seo-card about-claim">
          <p><strong>${i(e.closing)}</strong></p>
        </article>
      </section>
    `}function wf(){const e=bc(r.navMenu);if(!e.length)return"";const t=r.navMenu,n=t?Ii(t):"";return`
      <aside class="nav-popover" role="menu" aria-label="${g(n)}">
        <div class="nav-popover-head">
          <strong>${i(n)}</strong>
          <button class="icon-btn nav-popover-close" type="button" data-action="close-nav-menu" aria-label="${g(p()==="ru"?"Закрыть меню":"Close menu")}">✕</button>
        </div>
        <div class="nav-popover-list">
          ${e.map(s=>`
            <button class="nav-popover-item" type="button" role="menuitem" ${s.action?`data-action="${g(s.action)}"${s.jlpt?` data-jlpt="${g(s.jlpt)}"`:""}`:`data-action="nav-menu-route" data-route="${g(s.route)}" data-focus="${g(s.focus)}"`}>
              <span>${i(s.icon)}</span>
              <b>${i(s.title)}</b>
              <small>${i(s.text)}</small>
            </button>
          `).join("")}
        </div>
      </aside>
    `}function bf(){if(!r.pendingFocus)return;const e=r.pendingFocus;if(r.pendingFocus=null,e==="__scroll-top__"){Gt();return}const t={"lesson-card":".study-card, .daily-lesson-card","lesson-tabs":".lesson-tabs","review-card":"[data-section='review-card']","sentence-practice":"[data-section='sentence-practice']","writing-demo":"[data-section='writing-demo']","writing-canvas":"[data-section='writing-canvas']","eva-room":".eva-room-entry, .eva-room-page, .eva-room-shell",about:".about-page","download-top":"[data-section='download-top']","stats-top":".metric-grid","achievements-top":".achievements-page .metric-grid","shop-panel":"[data-section='shop-panel']"},n=document.querySelector(t[e]||e);n&&(n.scrollIntoView({behavior:"smooth",block:"start"}),n.classList.add("is-focus-pulse"),window.setTimeout(()=>n.classList.remove("is-focus-pulse"),900))}function kf(){ti(".nav-btn").forEach(t=>{const n=t.dataset.route,s=n===r.route||n==="learn"&&r.route==="textbooks"||n==="stats"&&r.route==="achievements"||n==="dictionary"&&r.route==="kanji";t.classList.toggle("is-active",s),t.classList.toggle("has-menu",!!t.closest(".bottom-nav")&&Ur(n)),t.setAttribute("aria-expanded",r.navMenu===n?"true":"false"),s?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current");const a=t.querySelector("small");a&&n&&(a.textContent=Ii(n))});const e=ye('[data-action="language"]');e&&(e.textContent=p().toUpperCase()),Oo(),kj(),Fo(),yf()}function yf(){const e=ye("#sidebarProgressBar"),t=ye("#sidebarProgressLabel"),n=ye("#sidebarProgressPercent"),s=ye("#sidebarProgressNote"),a=ye("#sidebarUserAvatar"),o=ye("#sidebarUserTitle"),l=ye("#sidebarUserSubtitle"),c=Tt(),d=ec(),u=Re(),m=Math.max(1,Number(r.progress?.level||1)),v=Math.max(0,Math.min(100,Math.round(c.percent||0)));e&&(e.max=100,e.value=v),t&&(t.textContent=`${p()==="ru"?"Уровень":"Level"} ${m}`),n&&(n.textContent=`${v}%`),s&&(s.textContent=u>0?`${u} ${re().reviewQueue} · ${d.title||re().mapHint}`:`${d.title||re().mapHint}${d.summary?` · ${d.summary}`:""}`),a&&(a.textContent=`N${m}`),o&&(o.textContent=(p()==="ru","Flash Kanji")),l&&(l.textContent=`${re().level} ${m} · ${r.progress?.streak?.current||0} ${re().streak}`)}function $f(){r.n5Textbook?.items?.length||wi();const e=jf(),t=km(),n=Re(),s=ec(),a=ym(),o=re(),l=Tt(),c=Math.max(0,Math.min(100,Math.round(l.percent||0))),d=p()==="ru",u=d?[{action:"home-review",icon:"↻",title:"Повторение",detail:n>0?`${n} карточек ждут тебя.`:"Очередь пуста, но тренировка всегда под рукой.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:r.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Комната Евы",detail:"Диалоги, фон и Moon Fragments.",count:r.progress.moonFragments}]:[{action:"home-review",icon:"↻",title:"Review",detail:n>0?`${n} cards are waiting.`:"The queue is empty, but practice is always ready.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:r.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Eva Room",detail:"Dialogue, backgrounds, and Moon Fragments.",count:r.progress.moonFragments}],m=hp();return`
      <section class="page home-shell">
        <article class="home-hero-card">
          <img class="home-hero-moon" src="assets/decor/elements/crescent-moon.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
          <div class="home-hero-copy">
            <p class="eyebrow">JLPT N5-N1 · ${i(d?"Учебники":"Textbooks")} · ${i(d?"Повторение":"Review")}</p>
            <h1 class="hero-title home-hero-title">${d?"Небольшой урок.<br><em>Большой шаг.</em>":"Small lesson.<br><em>Big step.</em>"}</h1>
            <p class="home-hero-note">${i(s.summary||(d?"Сегодня появится новый шаг вперед.":"Today brings a small but steady step forward."))}</p>
            <p class="hero-subtitle">${i(S("tagline"))}</p>
            <div class="home-next-lesson">
              <span class="pill">${i(o.nextLesson)}</span>
              <strong>${i(s.title)}</strong>
              <p>${i(s.summary||o.mapHint)}</p>
            </div>
            <div class="hero-actions home-hero-actions">
              <button class="btn primary home-primary-cta" type="button" data-action="home-lesson" data-tour="home-lesson" data-level="${g(t.level)}" data-lesson-id="${g(t.lessonId||"")}">${i(t.label)}</button>
              ${n>0?`<button class="btn ghost home-primary-cta" type="button" data-action="home-review" data-tour="home-review">${i(d?`Повторить: ${n}`:`Review: ${n}`)}</button>`:""}
              <button class="btn ghost home-primary-cta home-download-cta" type="button" data-action="route" data-route="download">${i(d?"Скачать APK / PWA":"Download APK / PWA")}</button>
            </div>
            <div class="home-hero-progress" aria-label="${g(o.level)}">
              <progress class="progress-line" max="100" value="${g(String(c))}">0%</progress>
              <b>${i(`${c}%`)}</b>
            </div>
          </div>
        </article>
        <section class="metric-grid home-metrics" aria-label="${g(o.route)}">
          ${a.map($m).join("")}
        </section>
        <section class="home-dashboard">
          <div class="home-dashboard-main">
            <article class="study-card home-route-card">
              <div class="section-head">
                <div>
                  <span class="eyebrow accent">${i(d?"Маршрут N5":"N5 route")}</span>
                  <h2>${i(d?"Твой путь сегодня":"Your path today")}</h2>
                </div>
                <button class="text-button" type="button" data-action="route" data-route="textbooks">${i(d?"Все учебники →":"All textbooks →")}</button>
              </div>
              <div class="home-route-track">
                ${jm().map(Sm).join("")}
              </div>
            </article>
            <article class="study-card home-task-card">
              <div class="section-head">
                <div>
                  <span class="eyebrow accent">${i(d?"На сегодня":"For today")}</span>
                  <h2>${i(d?"Короткие задачи":"Quick tasks")}</h2>
                </div>
              </div>
              <div class="home-task-list">
                ${u.map(Nm).join("")}
              </div>
            </article>
            ${vr()?"":`
              <article class="study-card home-install-card">
                <button class="btn ghost" type="button" data-action="pwa-install">${i(m.install)}</button>
                <p class="home-install-hint">${i(m.description)}${ws()?` ${i(m.iosInstruction)}`:""}</p>
              </article>
            `}
          </div>
          <aside class="home-dashboard-side">
            ${Nf(e)}
          </aside>
        </section>
      </section>
    `}function jf(){Sf();const e=X(),t=e.currentLine||r.evaRuntime?.currentPhrase||null,n=Zr(),s=h(vs("eva").name||{ru:"Ева",en:"Eva"}),a=r.evaRuntime?.mood||e.mood||ht().mood,o=r.evaRuntime?.emotion||e.emotion||t?.emotion||"calm",l=t?.state||r.evaRuntime?.presenceState||(n?"wait_choice":"speak"),c=Vn(t?.sprite||r.evaRuntime?.currentSkin||Ti());return{line:t,question:n,speaker:s,mood:a,emotion:o,presenceState:l,sprite:c}}function Sf(){ie();const e=X();return e.currentLine?.text||r.evaRuntime?.currentPhrase?.text?e.currentLine||r.evaRuntime.currentPhrase:(Jc("manual"),X().currentLine||r.evaRuntime?.currentPhrase||null)}function Nf(e){const t=Ht(),n=qt(),s=e.question?p()==="ru"?"Вопрос":"Question":p()==="ru"?"Диалог":"Dialogue",a=e.line||{text:{ru:"Я здесь.",en:"I'm here."}},o=a.id||"home_eva_line";return`
      <section class="home-eva-vn" role="region" aria-label="${g(p()==="ru"?"Диалог Евы":"Eva dialogue")}" data-home-eva-mode="${g(e.question?"question":"dialogue")}" data-eva-state="${g(e.presenceState)}" data-eva-mood="${g(e.mood)}" data-eva-emotion="${g(e.emotion)}">
        <div class="home-eva-copy">
          <div class="home-eva-meta">
            <strong>${i(e.speaker)}</strong>
            <span class="pill">${i(s)}</span>
          </div>
          ${$c(h(a.text||{ru:"Я здесь.",en:"I'm here."}),o)}
          ${e.question?`
            <div class="eva-question-box home-eva-question">
              <span class="pill">${i(n.question)}</span>
              <strong>${i(h(e.question.text))}</strong>
              <div class="eva-choice-grid">
                ${e.question.options.map(l=>`
                  <button class="btn ${l.id===e.question.options[0]?.id?"primary":"ghost"}" type="button" data-action="eva-question-answer" data-option="${g(l.id)}">
                    ${i(h(l.text))}
                  </button>
                `).join("")}
              </div>
            </div>
          `:`
            <div class="home-eva-actions">
              <button class="btn primary" type="button" data-action="eva-autonomy-next" aria-label="${g(t.nextAutonomyLine)}" title="${g(t.nextAutonomyLine)}">→</button>
            </div>
          `}
        </div>
        <button class="home-eva-avatar" type="button" data-action="eva-click" data-character="eva" aria-label="${g(e.speaker)}">
          <img class="${g(yc({line:e.line,isAutonomy:!0}))}" src="${g(e.sprite)}" alt="${g(e.speaker)}" loading="eager" decoding="async" onerror="this.src='assets/mascots/eva_normal.webp'" />
        </button>
      </section>
    `}function kc(e){return e.line?.state||r.evaRuntime?.presenceState||(e.isAutonomy?"speak":"wait_choice")}function yc(e){const t=["eva-vn-sprite"],n=kc(e);return["speak","soften","warning"].includes(n)&&t.push("is-speaking"),(["react","warning"].includes(n)||Date.now()-Number(r.evaRuntime?.lastVisualChangeAt||0)<1400)&&t.push("is-reacting"),n==="quiet"&&t.push("is-quiet"),t.join(" ")}function Af(e){const t=String(e||"").trim();return t?(t.match(/[^.!?гЂ'пјЃпјџ]+[.!?гЂ'пјЃпјџ]?/g)||[t]).map(s=>s.trim()).filter(Boolean):[]}function $c(e,t=""){const n=Af(e),a=`eva-dialogue-text ${r.evaRuntime?.textRevealSkippedLineId===t?"is-skipped":""}`,o=n.length?n.map((l,c)=>`<span class="eva-line-piece" style="--i:${c}">${i(l)}</span>`).join(" "):i(e);return`<p class="${a}" data-action="eva-dialogue-skip" data-line-id="${g(t)}">${o}</p>`}function xf(){ie(),Ps(),Bs(),H();const e=wh(),t=e.node,n=At()||e.bg||Qn(t.background),s=e.sprite||e.spriteSrc||Vn(e.spriteId||Wt(t.sprite)),a=Ht(),o=qt(),l=Array.isArray(t.choices)?t.choices:[],c=kc(e),d=e.line?.id||t.id||"eva_dialogue";return`
      <section class="page eva-room-page">
        <div class="eva-room-toolbar">
          <button class="btn ghost" type="button" data-action="route" data-route="home">← ${i(a.back)}</button>
          <div class="eva-room-currency">
            <span>Moon</span>
            <strong>${r.progress.moonFragments}</strong>
            <small>Moon Fragments</small>
          </div>
          <span class="eva-room-live-pill">${i(o.badge)}</span>
          <button class="btn primary" type="button" data-action="eva-room-shop-open">Shop · ${i(a.shop)}</button>
        </div>

        ${zf()}
        ${Of(e)}
        <article class="eva-vn-scene ${e.isAutonomy?"is-autonomous":""} is-${g(c)}" data-eva-state="${g(c)}" data-eva-mood="${g(e.mood||ht().mood)}" data-eva-emotion="${g(e.emotion||"calm")}" style="--eva-bg:url('${g(n.file)}')">
          <div class="eva-vn-bg" aria-hidden="true"></div>
          <button class="eva-sprite-button" type="button" data-action="eva-click" aria-label="${g(h(t.speaker||{ru:"Ева",en:"Eva"}))}">
            <img class="${g(yc(e))}" src="${g(s)}" alt="${g(h(t.speaker||{ru:"Ева",en:"Eva"}))}" onerror="this.src='assets/mascots/eva_normal.webp'" />
          </button>
          ${Lf(e)}
          <div class="eva-dialogue-box">
            <div class="eva-dialogue-meta">
              <strong>${i(h(t.speaker||{ru:"Ева",en:"Eva"}))}</strong>
              <span>${e.isAutonomy?`${i(o.badge)} · `:""}${i(h(n.title||{}))}</span>
            </div>
            ${$c(h(t.text||{}),d)}
            ${e.isAutonomy?Ff(a):`
              <div class="eva-choice-grid">
                ${l.map((u,m)=>`
                  <button class="btn ${m===0?"primary":"ghost"}" type="button" data-action="eva-room-choice" data-index="${m}">
                    ${i(h(u.text||{}))}
                    ${u.rewardMoonFragments?`<small>+${u.rewardMoonFragments} Moon</small>`:""}
                  </button>
                `).join("")}
              </div>
            `}
          </div>
        </article>

        <div class="eva-room-footer-actions">
          <button class="btn" type="button" data-action="eva-room-reset">${i(a.restart)}</button>
          <button class="btn" type="button" data-action="route" data-route="textbooks">${i(a.study)}</button>
          <button class="btn" type="button" data-action="route" data-route="review">${i(a.review)}</button>
        </div>

        ${r.evaRoomShopOpen?Cf():""}
      </section>
    `}function Cf(){const e=Ht();return`
      <aside class="eva-shop-panel customization-shop-panel" role="dialog" aria-label="${g(e.shop)}">
        ${jc({closable:!0})}
      </aside>
    `}function Lf(e={}){const t=If(e);return t?`
      <div class="eva-room-decoration deco-${g(t.id)}" aria-label="${g(rt(t))}">
        <img src="${g(t.asset||t.preview)}" alt="" loading="lazy" />
      </div>
    `:""}function If(e={}){const t=e.decoration||X().currentDecoration||r.customization?.selected?.decoration||r.customization?.selected?.frame,n=de(t);return!n||n.type!=="decoration"||!vt(n.id)?null:n}function jc(e={}){const t=Wn(),n=Mf(),s=qe().filter(a=>vt(a.id)).length;return`
      <div class="custom-shop">
        <div class="custom-shop-hero">
          <div>
            <span class="pill">${i(t.subtitle)}</span>
            <h2>${i(t.title)}</h2>
            <p>${i(t.hint)}</p>
            <div class="custom-shop-stats">
              <span><b>${r.progress.moonFragments}</b> Moon</span>
              <span><b>${s}</b>/${qe().length} ${i(t.ownedShort)}</span>
            </div>
          </div>
          ${e.closable?`<button class="icon-btn" type="button" data-action="eva-room-shop-close" aria-label="${g(Ht().close)}">✕</button>`:""}
        </div>
        <div class="custom-shop-tabs" role="tablist" aria-label="${g(t.categories)}">
          ${Tf().map(a=>`
            <button class="${r.shopFilters.category===a.id?"is-active":""}" type="button" data-action="shop-category" data-category="${g(a.id)}">
              ${i(h({ru:a.title_ru,en:a.title_en}))}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls">
          ${Rf().map(a=>`
            <button class="${r.shopFilters.view===a.id?"is-active":""}" type="button" data-action="shop-filter" data-filter="${g(a.id)}">
              ${i(a.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls custom-shop-sort">
          ${_f().map(a=>`
            <button class="${r.shopFilters.sort===a.id?"is-active":""}" type="button" data-action="shop-sort" data-sort="${g(a.id)}">
              ${i(a.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-grid">
          ${n.map(Pf).join("")||`<article class="empty-state"><h3>${i(t.empty)}</h3></article>`}
        </div>
        <div class="custom-shop-history">
          ${uu({limit:6})}
        </div>
      </div>
    `}function Tf(){return r.customizationCatalog?.categories?.length?r.customizationCatalog.categories:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}]}function Rf(){const e=p()==="ru";return[{id:"all",title:e?"Все":"All"},{id:"available",title:e?"Доступные":"Available"},{id:"owned",title:e?"Купленные":"Owned"},{id:"new",title:e?"Новые":"New"}]}function _f(){const e=p()==="ru";return[{id:"featured",title:e?"Рекомендовано":"Featured"},{id:"price",title:e?"По цене":"By price"},{id:"rarity",title:e?"По редкости":"By rarity"}]}function Mf(){const e=r.shopFilters.category||"all",t=r.shopFilters.view||"all",n={common:1,rare:2,epic:3,legendary:4,mythic:5};let s=qe().filter(a=>e==="all"||a.type===e);return t==="available"&&(s=s.filter(a=>Fc(a)==="available")),t==="owned"&&(s=s.filter(a=>vt(a.id))),t==="new"&&(s=s.filter(a=>!r.customization?.seen?.includes(a.id))),r.shopFilters.sort==="price"&&(s=[...s].sort((a,o)=>a.price-o.price)),r.shopFilters.sort==="rarity"&&(s=[...s].sort((a,o)=>(n[o.rarity]||0)-(n[a.rarity]||0)||a.price-o.price)),s}function Pf(e){const t=Fc(e),n=Wn(),s=n.status[t]||t,a=Lh(e),o=t==="available"?`<button class="btn primary" type="button" data-action="shop-buy" data-id="${g(e.id)}">${i(n.buy)}</button>`:t==="owned"?`<button class="btn" type="button" data-action="shop-select" data-id="${g(e.id)}">${i(n.select)}</button>`:t==="selected"?`<button class="btn warning" type="button" data-action="shop-clear-item" data-id="${g(e.id)}">${i(n.remove)}</button>`:`<button class="btn" type="button" disabled>${i(n.unavailable)}</button>`;return`
      <article class="custom-shop-card type-${g(e.type)} is-${g(t)} rarity-${g(e.rarity)}">
        <div class="custom-shop-preview">
          <img src="${g(e.preview||e.asset)}" alt="${g(rt(e))}" loading="lazy" onerror="this.closest('.custom-shop-card').classList.add('is-missing')" />
          <span class="rarity-badge">${i(Df(e.rarity))}</span>
        </div>
        <div class="custom-shop-card-body">
          <div class="custom-shop-title-row">
            <strong>${i(rt(e))}</strong>
            <span class="status-badge">${i(s)}</span>
          </div>
          ${e.stars?`<div class="custom-shop-stars" aria-label="${g(`${e.stars} stars`)}">${i("★".repeat(Math.max(1,Math.min(5,Number(e.stars)||1))))}</div>`:""}
          <p>${i(Ef(e))}</p>
          ${e.type==="outfit"&&Sc(e)?`<blockquote class="custom-shop-phrase">${i(Sc(e))}</blockquote>`:""}
          ${a?`<small class="custom-shop-unlock">${i(a)}</small>`:""}
          <div class="custom-shop-price">
            <span>${e.price?`${e.price} Moon`:n.free}</span>
            <small>${i(Kf(e.type))}</small>
          </div>
          ${o}
        </div>
      </article>
    `}function Wn(){return p()==="ru"?{title:"Магазин кастомизации",subtitle:"Flash Kanji Custom",hint:"Фоны, образы Евы, декор, темы и эффекты за Moon Fragments.",categories:"Категории магазина",ownedShort:"куплено",buy:"Купить",select:"Выбрать",remove:"Убрать",selected:"Выбран",unavailable:"Недоступно",free:"Бесплатно",locked:"Предмет пока недоступен.",notEnough:"Не хватает Moon Fragments.",bought:"Куплено: {item}",selectedToast:"Выбрано: {item}",empty:"Нет предметов по этому фильтру.",status:{selected:"Выбран",owned:"Куплено",available:"Доступно",locked:"Закрыто"}}:{title:"Customization Shop",subtitle:"Flash Kanji Custom",hint:"Backgrounds, Eva outfits, room decor, themes, and effects for Moon Fragments.",categories:"Shop categories",ownedShort:"owned",buy:"Buy",select:"Select",remove:"Remove",selected:"Selected",unavailable:"Unavailable",free:"Free",locked:"This item is not available yet.",notEnough:"Not enough Moon Fragments.",bought:"Bought: {item}",selectedToast:"Selected: {item}",empty:"No items match this filter.",status:{selected:"Selected",owned:"Owned",available:"Available",locked:"Locked"}}}function rt(e){return p()==="en"?e.title_en||e.title_ru||e.id:e.title_ru||e.title_en||e.id}function Ef(e){return p()==="en"?e.description_en||e.description_ru||"":e.description_ru||e.description_en||""}function Sc(e){return p()==="en"?e.phrase_en||e.phrase_ru||"":e.phrase_ru||e.phrase_en||""}function Df(e){return{common:(p()==="ru","Common"),rare:(p()==="ru","Rare"),epic:(p()==="ru","Epic"),legendary:(p()==="ru","Legendary"),mythic:(p()==="ru","Mythic")}[e]||e}function Kf(e){const t=p()==="ru";return{background:t?"Фон":"Background",outfit:t?"Образ":"Outfit",decoration:t?"Декор":"Decoration",theme:t?"Тема":"Theme",effect:t?"Эффект":"Effect"}[e]||e}function Of(e){Ht();const t=qt(),n=X(),s=e.bg||At(),a=Ac(e.spriteId||r.progress.selectedEvaSprite),o=de(r.customization?.selected?.effect),l=de(e.decoration||n.currentDecoration),c=Bf(e.mood||n.mood),d=nc();return`
      <aside class="eva-autonomy-panel eva-live-status" data-eva-lines="${r.evaAutonomyLines.length}" data-eva-current="${g(n.currentLine?.id||"")}">
        <div>
          <span class="pill">${i(t.badge)}</span>
          <strong>${i(t.status)}</strong>
          <small>${i(t.hint)}</small>
        </div>
        <div class="eva-autonomy-meta">
          <span>${i(t.mood)}: ${i(c)}</span>
          <span>${i(t.quiz)}: ${i(d.correct||0)}/${i(d.answered||0)}</span>
          ${d.streak?`<span>${i(t.quizStreak)}: ${i(d.streak)}</span>`:""}
          <span>${i(h(s.title||{}))}</span>
          <span>${i(h(a?.title||{ru:"Ева",en:"Eva"}))}</span>
          ${l?`<span>${i(rt(l))}</span>`:""}
          ${o?`<span class="eva-active-effect-chip">${i(rt(o))}<button type="button" class="eva-active-effect-clear" data-action="shop-clear-effect" data-id="${g(o.id)}" aria-label="${g(p()==="ru"?"Убрать эффект":"Remove effect")}">✕</button></span>`:""}
        </div>
      </aside>
    `}function Ff(e){const t=qt(),n=Zr();return n?.id?`
        <div class="eva-question-box">
          <span class="pill">${i(t.question)}</span>
          <strong>${i(h(n.text))}</strong>
          <div class="eva-choice-grid">
            ${n.options.map(s=>`
              <button class="btn ${s.id===n.options[0]?.id?"primary":"ghost"}" type="button" data-action="eva-question-answer" data-option="${g(s.id)}">
                ${i(h(s.text))}
              </button>
            `).join("")}
          </div>
        </div>
      `:`
      <div class="eva-choice-grid">
        <button class="btn primary" type="button" data-action="eva-autonomy-next">${i(e.nextAutonomyLine)}</button>
        <button class="btn ghost" type="button" data-action="eva-room-reset">${i(e.storyDialogue)}</button>
        <button class="btn" type="button" data-action="route" data-route="textbooks">${i(e.study)}</button>
      </div>
    `}function qt(){return p()==="ru"?{badge:"Ева рядом",status:"Ева держит присутствие в комнате",hint:"Она помнит паузы, выбирает тон по контексту и реагирует открытыми образами без лишнего шума.",mood:"Настроение",quiz:"Вопросы",quizStreak:"Серия",question:"Вопрос Евы"}:{badge:"Eva nearby",status:"Eva keeps presence in the room",hint:"She remembers gaps, chooses tone from context, and reacts with unlocked looks without extra noise.",mood:"Mood",quiz:"Questions",quizStreak:"Streak",question:"Eva's question"}}function Bf(e){const n=p()==="ru"?{neutral:"Ровное настроение",focused:"Собрана",soft:"Мягче обычного",strict:"Строгая",tired:"Немного устала",happy:"Довольна прогрессом",serious:"Серьёзна",mystic:"Лунное настроение",cyber:"Анализирует",travel:"Вспоминает дороги",quiet:"Молчит рядом",curious:"Заинтересована",close:"Близость",proud:"Гордится тобой",worried:"Беспокоится",reserved:"Держит дистанцию"}:{neutral:"Steady mood",focused:"Focused",soft:"Softer than usual",strict:"Strict",tired:"A little tired",happy:"Pleased with progress",serious:"Serious",mystic:"Moonlit mood",cyber:"Analyzing",travel:"Thinking of old roads",quiet:"Quiet nearby",curious:"Interested",close:"Close",proud:"Proud of you",worried:"Worried",reserved:"Reserved"};return n[e]||n.neutral}function zf(){const e=ht(),t=Ht(),n=t.moods[e.mood]||t.moods.neutral,s=[["warmth",t.warmth,e.warmth],["trust",t.trust,e.trust],["discipline",t.discipline,e.discipline],["curiosity",t.curiosity,e.curiosity]];return`
      <aside class="eva-relationship-panel" aria-label="${g(t.relationship)}">
        <div class="eva-relationship-head">
          <span>${i(t.relationship)}</span>
          <strong>${i(n)}</strong>
        </div>
        <div class="eva-relationship-grid">
          ${s.map(([a,o,l])=>`
            <div class="eva-relationship-stat eva-stat-${a}">
              <div><span>${i(o)}</span><strong>${Math.round(l)}</strong></div>
              <i><b style="width:${oe(l,0,100)}%"></b></i>
            </div>
          `).join("")}
        </div>
      </aside>
    `}function Ht(){return p()==="ru"?{back:"На главную",shop:"Магазин Евы",close:"Закрыть",shopHint:"Покупай комнаты и образы Евы за Moon Fragments.",buy:"Купить",select:"Выбрать",selected:"Выбран",free:"Открыто",restart:"Начать диалог заново",study:"К уроку",review:"К повтору",notEnough:"Не хватает Moon Fragments.",bought:"Фон открыт.",selectedToast:"Фон выбран.",reward:"Ева дала Moon Fragments.",roomShopTitle:"Комнаты",spriteShopTitle:"Образы Евы",spriteBought:"Образ Евы открыт.",spriteSelected:"Образ Евы выбран.",autonomyBadge:"Ева рядом",autonomyShortOn:"Ева · авто",autonomyShortOff:"Ева · тихо",autonomyOn:"Ева рядом",autonomyOff:"Ева рядом",autonomyHint:"Ева сама выбирает реплики, настроение, комнату и образ без спойлеров FIS.",autonomySettingsHint:"Самостоятельные реплики Евы в комнате, без раскрытия сюжета.",enableAutonomy:"Ева рядом",disableAutonomy:"Ева рядом",changeFrequency:"Статус Евы",frequency:"Частота",frequencies:{quiet:"тихо",normal:"нормально",active:"часто"},roomMode:"Комната",outfitMode:"Образ",roomModeButton:"Комната Евы",outfitModeButton:"Образ Евы",auto:"авто",manual:"ручной",nextAutonomyLine:"Ещё мысль.",storyDialogue:"Вернуться к диалогу.",relationship:"Отношения с Евой",warmth:"Тепло",trust:"Доверие",discipline:"Дисциплина",curiosity:"Интерес",moreTalk:"Ещё реплика",anotherTalk:"Другая тема",moods:{neutral:"Ровное настроение",close:"Близость",proud:"Гордится тобой",curious:"Заинтересована",worried:"Беспокоится",reserved:"Держит дистанцию"}}:{back:"Home",shop:"Eva Shop",close:"Close",shopHint:"Buy rooms and Eva looks with Moon Fragments.",buy:"Buy",select:"Select",selected:"Selected",free:"Unlocked",restart:"Restart dialogue",study:"Study",review:"Review",notEnough:"Not enough Moon Fragments.",bought:"Background unlocked.",selectedToast:"Background selected.",reward:"Eva gave you Moon Fragments.",roomShopTitle:"Rooms",spriteShopTitle:"Eva Looks",spriteBought:"Eva look unlocked.",spriteSelected:"Eva look selected.",autonomyBadge:"Eva nearby",autonomyShortOn:"Eva · auto",autonomyShortOff:"Eva · quiet",autonomyOn:"Eva nearby",autonomyOff:"Eva nearby",autonomyHint:"Eva chooses lines, mood, room, and look by herself without FIS spoilers.",autonomySettingsHint:"Independent Eva lines in her room, without story spoilers.",enableAutonomy:"Eva nearby",disableAutonomy:"Eva nearby",changeFrequency:"Eva status",frequency:"Frequency",frequencies:{quiet:"quiet",normal:"normal",active:"active"},roomMode:"Room",outfitMode:"Look",roomModeButton:"Eva room",outfitModeButton:"Eva look",auto:"auto",manual:"manual",nextAutonomyLine:"Another thought.",storyDialogue:"Back to dialogue.",relationship:"Relationship with Eva",warmth:"Warmth",trust:"Trust",discipline:"Discipline",curiosity:"Interest",moreTalk:"Another line",anotherTalk:"Different topic",moods:{neutral:"Steady mood",close:"Close",proud:"Proud of you",curious:"Interested",worried:"Worried",reserved:"Reserved"}}}function ie(){var t,n,s,a,o,l,c,d,u,m,v,f,w;(t=r.progress).seenCards||(t.seenCards={}),(n=r.progress).seenKanji||(n.seenKanji={}),(s=r.progress).unlockedBackgrounds||(s.unlockedBackgrounds=["bg_study_hub"]),r.progress.unlockedBackgrounds.includes("bg_study_hub")||r.progress.unlockedBackgrounds.unshift("bg_study_hub"),(a=r.progress).selectedEvaRoomBackground||(a.selectedEvaRoomBackground="bg_study_hub"),(o=r.progress).unlockedEvaSprites||(o.unlockedEvaSprites=["idle","default"]),["idle","default"].forEach(y=>{r.progress.unlockedEvaSprites.includes(y)||r.progress.unlockedEvaSprites.push(y)}),(l=r.progress).selectedEvaSprite||(l.selectedEvaSprite="idle");const e=Hl(Gl(),r.progress.evaAutonomy||{});if((c=r.progress).evaAutonomy||(c.evaAutonomy={}),Object.keys(r.progress.evaAutonomy).forEach(y=>delete r.progress.evaAutonomy[y]),Object.assign(r.progress.evaAutonomy,e),r.evaRuntime||(r.evaRuntime=ft()),(d=r.progress).evaRoomDialogueProgress||(d.evaRoomDialogueProgress={currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]}),(u=r.progress.evaRoomDialogueProgress).currentNode||(u.currentNode="intro"),(m=r.progress.evaRoomDialogueProgress).rewardsClaimed||(m.rewardsClaimed={}),(v=r.progress.evaRoomDialogueProgress).visited||(v.visited={}),r.progress.evaRoomDialogueProgress.lineHistory=Array.isArray(r.progress.evaRoomDialogueProgress.lineHistory)?r.progress.evaRoomDialogueProgress.lineHistory.slice(-24):[],(f=r.progress).evaRoomQuiz||(f.evaRoomQuiz={answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]}),(w=r.progress.evaRoomQuiz).rewarded||(w.rewarded={}),r.progress.evaRoomQuiz.history=Array.isArray(r.progress.evaRoomQuiz.history)?r.progress.evaRoomQuiz.history.slice(0,40):[],!r.progress.evaRelationship)r.progress.evaRelationship=gi();else{const y=ql(gi(),r.progress.evaRelationship);Object.keys(r.progress.evaRelationship).forEach(k=>delete r.progress.evaRelationship[k]),Object.assign(r.progress.evaRelationship,y)}}function ht(){return ie(),r.progress.evaRelationship}function Ps(){if(!r.progress||!r.cards.length)return!1;ie();const e=r.progress.evaRelationship;let t=!1;const n=se(),s=e.lastDecayDate||n,a=Math.max(0,mn(s,n));if(a>0){const $=r.progress.streak?.lastStudyDate,z=$?mn($,n):a+1;!$||z>1?(ve({warmth:-Math.min(10,a*1.2),trust:-Math.min(14,a*1.6),discipline:-Math.min(22,a*3.4)},"study_gap",{silent:!0}),t=!0):(r.progress.streak?.current||0)>0&&(ve({discipline:.8,trust:.4},"streak_kept",{silent:!0}),t=!0),e.lastDecayDate=n}const o=No(),l={learned:o.learned,mastered:o.mastered,reviews:Ao(),lessons:Object.keys(r.progress.lessonCompletions||{}).length,streak:Math.max(r.progress.streak?.current||0,r.progress.streak?.best||0),wrong:r.progress.totalWrong||0,writing:r.progress.writingPractice?.completed||0,sentence:Object.keys(r.progress.sentencePractice?.completed||{}).length},c=e.lastKnown||{},d=$=>Math.max(0,Number(l[$]||0)-Number(c[$]||0)),u={},m=d("reviews"),v=d("learned"),f=d("mastered"),w=d("lessons"),y=d("streak"),k=d("wrong"),A=d("writing"),b=d("sentence");return m&&(u.discipline=(u.discipline||0)+Math.min(18,m*.08),u.trust=(u.trust||0)+Math.min(10,m*.04)),v&&(u.trust=(u.trust||0)+Math.min(20,v*.5),u.curiosity=(u.curiosity||0)+Math.min(16,v*.35)),f&&(u.trust=(u.trust||0)+Math.min(16,f*1.2),u.warmth=(u.warmth||0)+Math.min(8,f*.5)),w&&(u.warmth=(u.warmth||0)+Math.min(12,w*2),u.discipline=(u.discipline||0)+Math.min(10,w*1.5)),y&&(u.discipline=(u.discipline||0)+Math.min(15,y*3),u.warmth=(u.warmth||0)+Math.min(8,y)),A&&(u.curiosity=(u.curiosity||0)+Math.min(10,A*.8)),b&&(u.trust=(u.trust||0)+Math.min(10,b*.8)),k&&(u.discipline=(u.discipline||0)-Math.min(6,k*.12)),Object.keys(u).length&&(ve(u,"learning_progress",{silent:!0}),t=!0),e.lastKnown=l,Nc(),t}function ve(e={},t="relationship",n={}){ie();const s=r.progress.evaRelationship;return["warmth","trust","discipline","curiosity"].forEach(a=>{typeof e[a]>"u"||(s[a]=Ja(oe(Number(s[a]||0)+Number(e[a]||0),0,100),1))}),Nc(),n.silent||(s.history.unshift({at:new Date().toISOString(),reason:t,delta:e}),s.history=s.history.slice(0,40)),s}function Nc(){const e=r.progress.evaRelationship;return e.discipline<25?e.mood="worried":e.trust<30?e.mood="reserved":e.warmth>=76&&e.trust>=68?e.mood="close":(r.progress.streak?.current||0)>=7&&e.discipline>=58?e.mood="proud":e.curiosity>=68?e.mood="curious":e.mood="neutral",e.mood}function Ti(){const e=r.customization?.selected?.outfit||r.progress?.shop?.equipped?.outfit||null,n=de(e)?.spriteId||r.progress?.selectedEvaSprite||"idle";return r.evaSprites?.[n]&&qr(n)?n:"idle"}function Jf(e){const t=String(e||"");return new Set(["normal","neutral","idle","default","welcome","happy","soft_smile","gentle_smile","sad","angry","shy","think","thinking","focus","observe","observation","explain","teach","ready","reading","serious","strict","determined","tired","surprised","cold","proud","approve","confirm","achievement","reward","review","correct","levelup","writing","calm","tea","speaking"]).has(t)}function Wt(e,t=null){const n=e&&e!=="relationship"?String(e):null,s=Ti(),a=Jf(n),o=n&&!a?n:s,l=r.evaRuntime?.mood||ht().mood,c=t||(a?n:null)||r.evaRuntime?.emotion||{close:"shy",proud:"approve",curious:"thinking",worried:"sad",reserved:"idle",neutral:"idle"}[l]||"idle",d=Wf(c),u=[...new Set([o,s].filter(Boolean))];return[...u.flatMap(f=>Uf(f,d)),...u,...d,"idle","default"].filter(Boolean).find(f=>r.evaSprites?.[f]&&(qr(f)||!o||qr(o)))||"idle"}function Uf(e,t=[]){const n=String(e||"");if(!n)return[];const s=t.map(o=>`${n}_${o}`).filter(o=>r.evaSprites?.[o]),a=Sn(n);return!a||a.defaultOwned||s.length<=1?s:Gf(s)}function Gf(e=[]){const t=[...new Set(e.filter(Boolean))];if(t.length<=1)return t;const n=Va%t.length;return[...t.slice(n),...t.slice(0,n)]}function qf(){const e=Ti(),t=Sn(e);return!t||t.defaultOwned?!1:Object.keys(r.evaSprites||{}).some(n=>n.startsWith(`${e}_`))}function Hf(){Xa&&window.clearInterval(Xa),Xa=window.setInterval(()=>{const e=Math.floor(Date.now()/6e4);e!==Va&&(Va=e,!(document.hidden||!qf())&&(r.route==="home"||r.route==="eva-room")&&N())},3e4)}function Wf(e){const t=String(e).toLowerCase(),n={normal:["soft_smile","neutral","observe","idle"],neutral:["neutral","idle","soft_smile"],idle:["neutral","idle"],welcome:["soft_smile","observe","neutral","idle"],happy:["happy","soft_smile","gentle_smile","encourage","approve","proud"],soft_smile:["soft_smile","gentle_smile","happy","shy","approve","neutral"],approve:["approve","confirm","correct","confident","ready","soft_smile"],correct:["correct","confirm","approve","confident","ready","soft_smile"],proud:["proud","confident","approve","determined","soft_smile"],achievement:["achievement","legendary","mythic","reward","proud","approve","ready"],levelup:["levelup","legendary","mythic","determined","proud","ready"],reward:["reward","blessing","soft_smile","happy","approve"],review:["review","reading","ready","explain","think","neutral"],explain:["explain","teach","review","think","reading"],think:["think","thinking","analyze","observe","reading","explain","serious"],thinking:["think","thinking","analyze","observe","reading","explain","serious"],observe:["observe","serious","think","neutral"],ready:["ready","determined","walk","neutral"],serious:["serious","strict","determined","neutral"],strict:["strict","command","angry","serious"],angry:["angry","strict","command","serious"],sad:["sad","tired","cold","serious","neutral"],tired:["tired","cold","neutral"],shy:["shy","soft_smile","gentle_smile","happy"],surprised:["surprised","think","observe"],writing:["writing","teach","explain","ready","think"],focus:["think","observe","ready","serious"],calm:["neutral","idle","soft_smile"]},s=Qf(t);return[...new Set([...n[t]||[],t,s,"neutral","idle"].filter(Boolean))]}function Qf(e){return{neutral:"idle",idle:"idle",normal:"idle",welcome:"happy",happy:"happy",soft_smile:"shy",thinking:"think",serious:"think",strict:"angry",sad:"sad",shy:"shy",surprised:"think",approve:"approve",explain:"review",ready:"review",tired:"idle",observe:"think",special:"levelup",proud:"proud",calm:"idle"}[e]||"idle"}function X(){return ie(),r.progress.evaAutonomy}function Gr(){const e=X();return e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",!0}function Ri(){const e=r.evaBackgrounds?.length?r.evaBackgrounds:[{id:"bg_study_hub",title:{ru:"Учебная комната",en:"Study Hub"},file:"assets/bg/bg_study_hub.webp",price:0,defaultUnlocked:!0}],t=new Set(e.map(s=>s.id)),n=qe().filter(s=>s.type==="background"&&!t.has(s.id)).map(s=>({id:s.id,title:{ru:s.title_ru,en:s.title_en},file:s.asset||s.preview,price:s.price,defaultUnlocked:s.defaultOwned}));return[...e,...n]}function Qn(e){return Ri().find(t=>t.id===e)||Ri()[0]}function At(){ie();const e=r.progress.selectedEvaRoomBackground||r.customization?.selected?.background;return Qn(e)||Qn("bg_study_hub")}function Xf(e){const t=Qn(e);return t?t.defaultUnlocked||t.price===0||r.progress.unlockedBackgrounds.includes(t.id):!1}function Vf(){const e=qe().filter(n=>n.type==="outfit").map(n=>({id:n.spriteId||n.id,shopId:n.id,title:{ru:n.title_ru,en:n.title_en},price:n.price,defaultUnlocked:n.defaultOwned})),t=[{id:"idle",title:{ru:"Ева: спокойная",en:"Eva: Calm"},price:0,defaultUnlocked:!0},{id:"default",title:{ru:"Ева: классика",en:"Eva: Classic"},price:0,defaultUnlocked:!0},{id:"think",title:{ru:"Ева: размышление",en:"Eva: Thinking"},price:25},{id:"happy",title:{ru:"Ева: тепло",en:"Eva: Warm"},price:35},{id:"approve",title:{ru:"Ева: наставник",en:"Eva: Mentor"},price:35},{id:"review",title:{ru:"Ева: повторение",en:"Eva: Review"},price:40},{id:"proud",title:{ru:"Ева: гордость",en:"Eva: Proud"},price:45},{id:"shy",title:{ru:"Ева: ближе",en:"Eva: Closer"},price:55},{id:"sad",title:{ru:"Ева: тревога",en:"Eva: Concerned"},price:30},{id:"reward",title:{ru:"Ева: награда",en:"Eva: Reward"},price:50},{id:"achievement",title:{ru:"Ева: достижение",en:"Eva: Achievement"},price:60},{id:"levelup",title:{ru:"Ева: уровень",en:"Eva: Level Up"},price:65}].filter(n=>r.evaSprites?.[n.id]&&!e.some(s=>s.id===n.id));return[...e,...t]}function Ac(e){return Vf().find(t=>t.id===e)}function qr(e){if(!e)return!1;const t=Ac(e);return!!(t?.defaultUnlocked||t?.price===0||r.progress.unlockedEvaSprites?.includes(e)||r.progress.shop?.owned?.includes(`eva_sprite:${e}`))}function Hr(e){ie();const t=r.evaRuntime?.mood||xt($e()),n={close:["bg_cafe","bg_park","bg_eva_room","bg_study_hub"],proud:["bg_practice_room","bg_classroom","bg_moon_room","bg_study_hub"],curious:["bg_library","bg_cyber_room","bg_shrine","bg_study_hub"],worried:["bg_study_hub","bg_evening_street","bg_winter_city"],reserved:["bg_library","bg_silent_road","bg_study_hub"],focused:["bg_classroom","bg_practice_room","bg_study_hub"],soft:["bg_cafe","bg_park","bg_study_hub"],strict:["bg_classroom","bg_silent_road","bg_study_hub"],tired:["bg_cafe","bg_library","bg_study_hub"],happy:["bg_park","bg_cafe","bg_moon_room","bg_study_hub"],serious:["bg_silent_road","bg_library","bg_study_hub"],mystic:["bg_moon_room","bg_shrine","bg_study_hub"],cyber:["bg_cyber_room","bg_library","bg_study_hub"],travel:["bg_silent_road","bg_evening_street","bg_school_street","bg_study_hub"],quiet:["bg_library","bg_study_hub"],neutral:["bg_study_hub","bg_classroom","bg_library","bg_silent_road"]},s=[...e?.preferredBackgrounds||[],...n[t]||n.neutral],a=Ri().filter(l=>Xf(l.id));return s.map(l=>a.find(c=>c.id===l)).find(Boolean)||Pe(a)||At()}function Wr(e){ie();const t=r.evaRuntime?.mood||xt($e()),n={close:["casual_fox","librarian_eva","shy","idle","approve"],proud:["academy_instructor","moon_priestess","study_session","approve","proud","review"],curious:["librarian_eva","cyber_eva","think","review","idle"],worried:["winter_traveler","fis_mentor","sad","idle","think"],reserved:["silent_road","fis_mentor","idle","default"],focused:["study_session","academy_instructor","review","approve","idle"],soft:["librarian_eva","casual_fox","shy","approve","idle"],strict:["academy_instructor","fis_mentor","angry","think","idle"],tired:["winter_traveler","idle","default"],happy:["happy","proud","approve","casual_fox"],serious:["fis_mentor","silent_road","think","idle"],mystic:["moon_priestess","shrine_maiden","achievement","reward"],cyber:["cyber_eva","think","review"],travel:["silent_road","winter_traveler","fis_mentor"],quiet:["fis_mentor","idle","default"],neutral:["fis_mentor","study_session","librarian_eva","idle","think","review","default"]};return[e?.sprite,...n[t]||n.neutral].filter(Boolean).find(a=>qr(a)&&r.evaSprites?.[a])||r.progress.selectedEvaSprite||"idle"}function Yf(e){return e==="generated_line"?Zf():r.evaRoomDialogues.find(t=>t.id===e)||r.evaRoomDialogues[0]||{id:"intro",background:"bg_study_hub",sprite:"relationship",speaker:{ru:"Ева",en:"Eva"},text:{ru:"С возвращением.",en:"Welcome back."},choices:[]}}function Zf(){ie();const e=Ht(),t=r.progress.evaRoomDialogueProgress.generatedLine||Dc("adaptive");return r.progress.evaRoomDialogueProgress.generatedLine=t,{id:"generated_line",background:t.background||At().id||"bg_study_hub",sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[{text:{ru:e.moreTalk,en:e.moreTalk},randomLine:t.category||"adaptive",relationshipDelta:{warmth:.6,curiosity:.4}},{text:{ru:e.anotherTalk,en:e.anotherTalk},next:"intro",relationshipDelta:{warmth:.2}},{text:{ru:e.study,en:e.study},next:"intro",route:"learn",relationshipDelta:{discipline:1.2,trust:.5}}]}}function Qr(){return Array.isArray(r.evaRoomLines)?r.evaRoomLines:[]}function eh(e="auto"){const t=r.evaPresence?.categoryMap?.[e];return Array.isArray(t)?t:[]}function xc(e){return typeof e>"u"||e===null?[]:Array.isArray(e)?e.map(String):[String(e)]}function th(e,t=$e()){const n=e?.conditions||{},s=(o,l)=>{const c=xc(l);return!c.length||c.includes(String(o))},a=(o,l)=>{const c=xc(l);return!c.length||c.some(d=>String(o||"").includes(d)||d===String(o))};return!(!s(t.route,n.route)||!s(t.timeOfDay,n.timeOfDay)||!a(t.activeSkin,n.activeSkin)||!a(t.activeBackground,n.activeBackground)||typeof n.minGapDays<"u"&&Number(t.daysSinceReturn||0)<Number(n.minGapDays)||typeof n.maxGapDays<"u"&&Number(t.daysSinceReturn||0)>Number(n.maxGapDays)||typeof n.minDueReviews<"u"&&Number(t.dueReviews||0)<Number(n.minDueReviews)||typeof n.maxDueReviews<"u"&&Number(t.dueReviews||0)>Number(n.maxDueReviews)||typeof n.minStreak<"u"&&Number(t.streak||0)<Number(n.minStreak)||typeof n.maxStreak<"u"&&Number(t.streak||0)>Number(n.maxStreak)||typeof n.minTalkOverStudy<"u"&&Number(t.timesUserChoseTalkOverStudy||0)<Number(n.minTalkOverStudy))}function nh(e="auto",t=$e()){return null}function Xr(e,t="auto",n=$e()){if(!r.evaRuntime||!e?.id)return;r.evaRuntime.memory=Nn(Nt(),r.evaRuntime.memory||{});const s=r.evaRuntime.memory;s.recentLineIds=[e.id,...(s.recentLineIds||[]).filter(o=>o!==e.id)].slice(0,30);const a=e.category||t;s.recentTopics=[a,...(s.recentTopics||[]).filter(o=>o!==a)].slice(0,20),s.lastRoute=n.route||r.route,s.lastInteractionDate=se(),s.lastKnownMood=r.evaRuntime.mood||ht().mood,(["warning","answer_wrong","idle_timeout"].includes(t)||String(e.category||"").includes("warning"))&&(s.lastWarningAt=new Date().toISOString()),(["answer_correct","lesson_complete","level_up","streak_up"].includes(t)||String(e.category||"").includes("reward"))&&(s.lastPraiseAt=new Date().toISOString())}function Cc(e){if(!r.evaRuntime)return;r.evaRuntime.memory=Nn(Nt(),r.evaRuntime.memory||{});const t=r.evaRuntime.memory;t.lastRoute=r.route,["timer","idle_timeout"].includes(e.type)||(t.lastInteractionDate=se()),e.type==="answer_wrong"&&(t.recentProblemCluster=e.payload?.cardId||"reading"),e.type==="room_opened"&&(t.preferredEvaRoomBackground=r.progress?.selectedEvaRoomBackground||t.preferredEvaRoomBackground)}function sh(){return{quiet:12e4,normal:fn(45e3,12e4),active:45e3}}function rh(){Qa&&window.clearInterval(Qa),Qa=window.setInterval(ah,5e3)}function Xn(){const e=X(),t=sh()[e.frequency]||fn(45e3,12e4);e.nextSpeakAt=Date.now()+t}function ah(){if(document.hidden||!r.progress||!r.evaRuntime)return!1;const e=$e(),t=r.evaRuntime,n=X(),s=Date.now();let a=!1;if(e.idleMs>9e4&&(!t.lastEvent||t.lastEvent.type!=="idle_timeout")&&s-Number(t.lastPhraseAt||0)>6e4)return we("idle_timeout",{idleMs:e.idleMs}),!0;if(s-Number(t.lastEmotionChangeAt||0)>=Number(t.cooldowns?.emotion||18e3)){const o=xt(e),l=Vr(e,o);(o!==t.mood||l!==t.emotion)&&(t.mood=o,t.emotion=l,n.mood=o,n.emotion=l,t.lastEmotionChangeAt=s,t.cooldowns.emotion=fn(15e3,3e4),a=!0)}return r.route==="eva-room"&&s>=Number(n.nextSpeakAt||0)&&(Math.random()<.14?(t.mood="quiet",t.emotion="observe",t.presenceState="quiet",n.mood="quiet",n.emotion="observe",Xn(),a=!0):Es("timer",{context:e})&&(a=!0)),a&&(An(),j(),r.route==="eva-room"&&N()),a}function $e(e={}){const t=r.progress?Lt():{},n=r.evaRuntime||ft(),s=Nn(Nt(),n.memory||{}),a=new Date().getHours();return Wl(),{route:r.route,hour:a,timeOfDay:a<5?"late_night":a<11?"morning":a<18?"day":a<23?"evening":"night",correctToday:Number(t.reviews||0)-Number(t.mistakes||0),mistakesToday:Number(t.mistakes||0),reviewsToday:Number(t.reviews||0),learnedToday:Number(t.learned||0),streak:Number(r.progress?.streak?.current||0),level:Number(r.progress?.level||1),moonFragments:Number(r.progress?.moonFragments||0),ownedSkins:n.ownedSkins||[],ownedBackgrounds:n.ownedBackgrounds||[],ownedEffects:n.ownedEffects||[],ownedDecorations:n.ownedDecorations||[],activeSkin:n.activeSkin||r.progress?.selectedEvaSprite||"idle",activeBackground:n.activeBackground||r.progress?.selectedEvaRoomBackground||"bg_study_hub",memory:s,daysSinceReturn:Number(s.daysSinceReturn||0),recentTopics:s.recentTopics||[],recentLineIds:s.recentLineIds||[],timesUserChoseTalkOverStudy:Number(s.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(s.timesUserReturnedAfterGap||0),idleMs:Date.now()-Number(n.lastPlayerActionAt||Date.now()),sessionMs:Date.now()-ei,lastEvent:n.lastEvent,dueReviews:r.progress?Re():0,shopOpen:!!r.evaRoomShopOpen,...e}}function xt(e=$e()){const t=e.lastEvent?.type;return t==="level_up"||t==="lesson_complete"||t==="streak_up"?"happy":t==="item_bought"&&String(e.lastEvent?.payload?.itemId||"").includes("moon")?"mystic":e.shopOpen||t==="shop_opened"||t==="item_bought"?"curious":e.route==="learn"||e.route==="review"||e.dueReviews>0?"focused":e.mistakesToday>=4?e.correctToday>e.mistakesToday?"soft":"strict":e.hour>=23||e.hour<5?e.ownedEffects?.includes("effect_moon_particles")?"mystic":"quiet":e.sessionMs>35*60*1e3?"tired":e.activeSkin==="cyber_eva"||e.ownedSkins?.includes("cyber_eva")?"cyber":e.activeSkin==="silent_road"||e.ownedSkins?.includes("silent_road")?"travel":e.route==="eva-room"&&e.streak>=7?"soft":"neutral"}function Vr(e=$e(),t=xt(e),n=e.lastEvent?.type||"auto"){if(n==="answer_correct")return Pe(["approve","happy","soft_smile"]);if(n==="answer_wrong")return Pe(["thinking","strict","serious"]);if(n==="lesson_complete")return"approve";if(n==="level_up")return"special";if(n==="item_bought"||n==="shop_opened")return"observe";if(n==="user_clicked_eva")return Pe(["curious","shy","observe"]);if(n==="idle_timeout")return"observe";const s={neutral:["idle","observe"],focused:["ready","explain","thinking"],soft:["soft_smile","approve"],strict:["strict","serious"],tired:["tired","idle"],happy:["happy","approve"],serious:["serious","thinking"],mystic:["special","observe"],cyber:["observe","thinking"],travel:["ready","observe"],quiet:["observe","idle"],curious:["thinking","surprised","observe"]};return Pe(s[t]||s.neutral)}function Es(e="auto",t={}){if(!r.progress||!Gr()||!t.force&&r.route!=="eva-room")return!1;const n=X(),s=Date.now();if(!t.force&&n.currentLine?.text&&n.nextSpeakAt&&s<Number(n.nextSpeakAt))return!1;const a=t.context||$e({lastEvent:{type:e,payload:t.eventPayload||{}}}),o=xt(a),l=Lc(e)||_i(e);if(!l)return!1;r.evaRuntime||(r.evaRuntime=ft()),r.evaRuntime.mood=o;const c=l.emotion||Vr(a,o,e),d=Hr(l),u=Wt(Wr(l),c),m=Mi(l),v=Pi(l),f=Mc(a,l);return n.currentLine={id:l.id,category:l.category||"mood",text:l.text,sprite:u,background:d.id,decoration:m,effect:v,emotion:c,state:l.state||"speak",at:new Date().toISOString(),reason:e},n.currentQuestion=f,n.currentDecoration=m,n.currentEffect=v,n.mood=o,n.emotion=c,n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=u,n.recentLineIds=[l.id,...(n.recentLineIds||[]).filter(w=>w!==l.id)].slice(0,32),r.evaRuntime||(r.evaRuntime=ft()),Object.assign(r.evaRuntime,{mood:o,emotion:c,presenceState:l.state||"speak",currentPhrase:n.currentLine,pendingQuestion:f,currentSkin:u,currentBackground:d.id,currentDecoration:m,currentEffect:v,activeSkin:u,activeBackground:d.id,lastPhraseAt:s,lastEmotionChangeAt:s,lastQuestionAt:f?s:Number(r.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:s,textRevealSkippedLineId:null,cooldowns:{...r.evaRuntime.cooldowns,emotion:fn(15e3,3e4),phrase:fn(45e3,12e4),question:fn(3*6e4,7*6e4),visual:fn(10*6e4,15*6e4)}}),Xr(l,e,a),Ei(u,d.file),Xn(),ve(l.relationshipDelta||{warmth:.1},`eva_autonomy:${l.id}`,{silent:!0}),An(),Mt(),!0}function Lc(e){const t=nh(e,$e({lastEvent:{type:e}}));if(t)return t;const s={answer_correct:[{ru:"Верно.",en:"Correct."},{ru:"Хорошо.",en:"Good."},{ru:"Да. Именно так.",en:"Yes. Exactly."},{ru:"Ты начинаешь видеть структуру.",en:"You are starting to see the structure."},{ru:"Неплохо. Продолжай.",en:"Not bad. Continue."}],answer_wrong:[{ru:"Не совсем.",en:"Not quite."},{ru:"Посмотри ещё раз.",en:"Look again."},{ru:"Не угадывай. Разбери.",en:"Do not guess. Break it down."},{ru:"Запомни не ответ, а причину.",en:"Remember the reason, not just the answer."},{ru:"Это место стоит повторить.",en:"This part is worth repeating."}],user_clicked_eva:[{ru:"Да?",en:"Yes?"},{ru:"Что-то нужно?",en:"Need something?"},{ru:"Я слушаю.",en:"I'm listening."},{ru:"Не отвлекайся слишком часто.",en:"Don't distract yourself too often."},{ru:"Если нужен совет — спроси.",en:"If you need advice, ask."}],idle_timeout:[{ru:"Ты всё ещё здесь?",en:"Still here?"},{ru:"Сделаем короткий шаг?",en:"One short step?"},{ru:"Я подожду.",en:"I'll wait."},{ru:"Не исчезай надолго.",en:"Don't vanish for too long."}],manual:[{ru:"Один шаг всё ещё шаг.",en:"One step is still a step."},{ru:"Я рядом. Продолжай.",en:"I'm nearby. Continue."},{ru:"Кандзи не убегут. Но лучше не заставлять их ждать.",en:"The kanji won't run. Better not keep them waiting."},{ru:"Сначала форма. Потом смысл.",en:"Shape first. Meaning after."}],lesson_complete:[{ru:"Урок закрыт. След оставлен.",en:"Lesson complete. A mark is left."},{ru:"Хорошая работа. Теперь закрепи.",en:"Good work. Now reinforce it."}],level_up:[{ru:"Уровень выше. Дорога стала длиннее, не легче.",en:"Level up. The road is longer, not easier."},{ru:"Ты стал крепче. Это заметно.",en:"You got steadier. It shows."}],item_bought:[{ru:"Новая вещь. Посмотрим, приживётся ли.",en:"A new item. We'll see if it settles in."},{ru:"Комната меняется. Ты тоже.",en:"The room changes. So do you."}],room_opened:[{ru:"Я здесь.",en:"I'm here."},{ru:"Ты снова здесь. Это говорит больше, чем обещание.",en:"You're here again. That says more than a promise."},{ru:"Продолжай. Я посмотрю.",en:"Continue. I'll watch."}]}[e]||[],a=new Set(X().recentLineIds||[]),o=s.filter(c=>!a.has(`${e}_${Se(`${c.ru||c.en}`)}`)),l=Pe(o.length?o:s);return l?{id:`${e}_${Se(`${l.ru||l.en}`)}`,category:e,text:l,relationshipDelta:{}}:null}function Ic(){const e=X(),t=e.currentLine?.id;t&&(e.recentLineIds=[t,...(e.recentLineIds||[]).filter(n=>n!==t)].slice(0,32))}function ih(e="auto"){const t=ht(),n=new Date().getHours(),s=Re(),a=Lt(),o=[];return o.push(...eh(e)),(e==="return"||!t.lastInteractionDate&&r.progress.appOpens>1)&&o.push("fis_return","return"),e==="room_opened"&&o.push("fis_room","fis_observation","room"),(e==="shop_opened"||e==="item_bought"||e==="item_equipped")&&o.push("fis_room","fis_reward","reward"),e==="answer_correct"&&o.push("fis_focus","fis_short","study"),e==="answer_wrong"&&o.push("fis_guard","fis_focus","mood"),(e==="user_clicked_eva"||e==="eva_click")&&o.push("fis_observation","fis_short","mood"),e==="idle_timeout"&&o.push("fis_return","fis_short","return"),e==="user_answered_eva_question"&&o.push("fis_focus","fis_observation"),e==="lesson_start"&&o.push("fis_study","study","fis_focus"),(e==="lesson_complete"||e==="level_up"||e==="streak_up")&&o.push("fis_reward","reward","fis_streak"),(e==="writing_complete"||e==="sentence_complete"||e==="advanced_mode")&&o.push("fis_observation","fis_focus"),(n>=23||n<5)&&o.push("fis_night","night"),s>=8&&o.push("fis_review","review"),(a.reviews||0)===0&&o.push("fis_study","study"),(r.progress.streak?.current||0)>=3&&o.push("fis_streak","streak"),(r.progress.rewardHistory?.length||r.rewardModal)&&o.push("fis_reward","reward"),t.mood==="curious"&&o.push("fis_observation","fis_focus","fis_room","hint","room"),(t.mood==="worried"||t.mood==="reserved")&&o.push("fis_guard","fis_return","mood","return"),o.push("fis_observation","fis_road","fis_guard","fis_focus","fis_short","mood","study","short"),[...new Set(o)]}function _i(e="auto"){ie(),Ps();const t=ht(),n=$e({lastEvent:{type:e}}),s=X().currentLine?.id,a=new Set([s,...X().recentLineIds||[],...r.evaRuntime?.memory?.recentLineIds||[]].filter(Boolean)),o=Array.isArray(r.evaAutonomyLines)?r.evaAutonomyLines:[],l=ih(e),c=(u,m=!1)=>o.filter(v=>{if(!(v.category===u||(v.tags||[]).includes(u))||!m&&a.has(v.id)||!Kc(v,t)||!th(v,n))return!1;const w=Array.isArray(v.moods)?v.moods:[];return!w.length||w.includes(t.mood)});for(const u of l){const m=c(u);if(m.length)return Pe(m)}for(const u of l){const m=c(u,!0);if(m.length)return Pe(m)}const d=o.filter(u=>!a.has(u.id));return Pe(d.length?d:o)}function we(e,t={}){if(!e)return;Bs(),H();const n={type:Rc(e),payload:t||{},at:Date.now()};Tc(n),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...n,handledByFlashKanji:!0}}))}Object.assign(window,{dispatchEvaEvent:we});function Tc(e={}){if(!e.type||!r.progress)return;ie(),r.evaRuntime||(r.evaRuntime=ft());const t={type:Rc(e.type),payload:e.payload||{},at:e.at||Date.now()};r.evaRuntime.lastEvent=t,r.evaRuntime.eventHistory=[t,...r.evaRuntime.eventHistory||[]].slice(0,80),r.evaRuntime.recentEvents=[t,...r.evaRuntime.recentEvents||[]].slice(0,80),Cc(t),["timer","idle_timeout"].includes(t.type)||(r.evaRuntime.lastPlayerActionAt=Date.now());const n=oh(t.type,t.payload);Object.keys(n).length&&ve(n,`eva_event:${t.type}`,{silent:!0});const s=X();Ic(),s.nextSpeakAt=0;const a=Es(t.type,{force:!0,eventPayload:t.payload});An(),j(),a&&r.route==="eva-room"&&N()}function Rc(e){const t=String(e||"");return t==="eva_click"?"user_clicked_eva":t}function oh(e,t={}){const s={...{room_opened:{warmth:.2,curiosity:.2},shop_opened:{curiosity:.4},item_bought:{warmth:.5,curiosity:.8},item_equipped:{curiosity:.3},eva_click:{warmth:.35,curiosity:.2},user_clicked_eva:{warmth:.35,curiosity:.2},answer_correct:{trust:.35,discipline:.2},answer_wrong:{discipline:-.45,trust:-.15,curiosity:.15},lesson_start:{discipline:.25},lesson_complete:{warmth:1.1,trust:1.2,discipline:1.1},level_up:{warmth:1,curiosity:.8},streak_up:{discipline:.8,trust:.4},writing_complete:{curiosity:.5,discipline:.3},sentence_complete:{trust:.45,curiosity:.3},advanced_mode:{curiosity:.5,discipline:.4}}[e]||{}};return e==="answer_wrong"&&t.comboLost&&(s.discipline=(s.discipline||0)-.25),s}function Mi(e){const t=r.evaRuntime?.mood||xt($e()),n={close:["deco_tea_table","deco_lantern","deco_moon_frame"],proud:["deco_kanji_board","deco_bookshelf","deco_gold_accent"],curious:["deco_bookshelf","deco_kanji_board","deco_tea_table"],worried:["deco_lantern","deco_moon_frame"],reserved:["deco_lantern","deco_bookshelf"],focused:["deco_kanji_board","deco_bookshelf"],soft:["deco_tea_table","deco_lantern"],strict:["deco_kanji_board","deco_scroll"],tired:["deco_tea_table","deco_lantern"],happy:["deco_golden_accent","deco_moon_frame"],serious:["deco_scroll","deco_lantern"],mystic:["deco_moon_frame","deco_lantern"],cyber:["deco_kanji_board","deco_bookshelf"],travel:["deco_scroll","deco_lantern"],quiet:["deco_lantern","deco_bookshelf"],neutral:["deco_bookshelf","deco_tea_table","deco_lantern"]},s=[...e?.preferredDecorations||[],...n[t]||n.neutral];return _c("decoration",s)}function Pi(e){const t=r.evaRuntime?.mood||xt($e()),n={close:["effect_golden_glow","effect_sakura_particles"],proud:["effect_golden_glow","effect_moon_particles"],curious:["effect_cyber_hud","effect_sakura_particles"],worried:["effect_snow_particles","effect_dust_particles"],reserved:["effect_dust_particles","effect_snow_particles"],focused:["effect_lesson_shine","effect_golden_glow"],soft:["effect_sakura_particles","effect_golden_glow"],strict:["effect_level_frame","effect_dust_particles"],tired:["effect_snow_particles","effect_dust_particles"],happy:["effect_golden_glow","effect_moon_particles"],serious:["effect_dust_particles","effect_level_frame"],mystic:["effect_moon_particles","effect_golden_glow"],cyber:["effect_cyber_hud","effect_lesson_shine"],travel:["effect_dust_particles","effect_snow_particles"],quiet:["effect_moon_particles","effect_snow_particles"],neutral:["effect_golden_glow","effect_moon_particles"]},s=[...e?.preferredEffects||[],...n[t]||n.neutral];return _c("effect",s)||"none"}function _c(e,t=[]){const n=qe().filter(a=>a.type===e&&vt(a.id));return(t.map(a=>n.find(o=>o.id===a)).find(Boolean)||Pe(n))?.id||null}function Mc(e=$e(),t=null){const n=X();if(n.currentQuestion?.id)return n.currentQuestion;if(r.evaRuntime?.pendingQuestion?.id)return n.currentQuestion=r.evaRuntime.pendingQuestion,n.currentQuestion;const s=e.lastEvent?.type||"auto",a=["user_clicked_eva","room_opened","manual"].includes(s),o=Date.now(),l=Number(r.evaRuntime?.lastQuestionAt||r.evaRuntime?.lastQuestion?.at||0),c=Number(r.evaRuntime?.cooldowns?.question||fn(3*6e4,7*6e4));if(!a&&o-l<c||!a&&Math.random()>.34)return null;const d=new Set(r.evaRuntime?.questionHistory?.slice(0,6).map(v=>v.id)),u=Pc(s).filter(v=>!d.has(v.id)),m=Pe(u.length?u:Pc(s));return m?{...m,at:new Date().toISOString()}:null}function Pc(e="auto"){const t=Tm();if(t.length<2)return[];const n=new Set((r.evaRuntime?.questionHistory||[]).slice(0,10).map(o=>o.cardId).filter(Boolean)),s=`${se()}:${e}:${r.progress?.totalCorrect||0}:${r.progress?.totalWrong||0}`;return[...t].sort((o,l)=>{const c=n.has(String(o.id))?1:0,d=n.has(String(l.id))?1:0;return c-d||Se(`${s}:${o.id}`)-Se(`${s}:${l.id}`)}).slice(0,18).map(o=>lh(o,t,e)).filter(Boolean)}function lh(e,t,n="auto"){const s=xe(e,"ru"),a=xe(e,"en");if(!s||!a)return null;const o=ch(e,t);if(!o.length)return null;const l=String(e.jlpt||"").toUpperCase(),c=l||(p()==="ru"?"твоих карточек":"your cards"),d=Ec(e,e,!0),u=[d,...o.map(m=>Ec(m,e,!1))].sort((m,v)=>Se(`${n}:${e.id}:${m.id}`)-Se(`${n}:${e.id}:${v.id}`));return{id:`kanji_meaning_${e.id}_${Se(`${s}:${a}`)}`,kind:"kanji_meaning",cardId:String(e.id),kanji:e.kanji,jlpt:l,answerId:d.id,answerText:{ru:s,en:a},text:{ru:`Что значит кандзи ${e.kanji} из ${c}?`,en:`What does the ${c} kanji ${e.kanji} mean?`},options:u,at:new Date().toISOString()}}function ch(e,t){const n=Yr(xe(e,"ru")),s=Yr(xe(e,"en")),a=String(e.jlpt||"").toUpperCase(),l=[...t.filter(c=>{if(!c?.id||String(c.id)===String(e.id)||c.kanji===e.kanji)return!1;const d=Yr(xe(c,"ru")),u=Yr(xe(c,"en"));return!(!d||!u||d===n||u===s)})].sort((c,d)=>{const u=String(c.jlpt||"").toUpperCase()===a?0:1,m=String(d.jlpt||"").toUpperCase()===a?0:1;return u-m||Se(`${e.id}:${c.id}`)-Se(`${e.id}:${d.id}`)});return l.slice(0,Math.min(3,l.length))}function Ec(e,t,n){const s=xe(e,"ru"),a=xe(e,"en"),o=xe(t,"ru"),l=xe(t,"en");return{id:`meaning_${Se(`${t.id}:${e.id}:${s}:${a}`)}`,cardId:String(e.id),text:{ru:s,en:a},correct:n,delta:n?{trust:.7,discipline:.35,curiosity:.2}:{discipline:-.35,curiosity:.15},reply:n?{ru:`Верно. ${t.kanji}: ${o}.`,en:`Correct. ${t.kanji}: ${l}.`}:{ru:`Не совсем. ${t.kanji}: ${o}.`,en:`Not quite. ${t.kanji}: ${l}.`}}}function Yr(e){return String(e||"").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US").replace(/[.,;:!?\s]+/g," ").trim()}function dh(e){ie();const t=Zr();t?.id&&uh(t.id,e.dataset.option)}function uh(e,t){ie();const n=X(),s=Zr();if(!s?.id||s.id!==e)return;const a=s.options?.find(v=>v.id===t);if(!a)return;const l=s.options?.some(v=>v.correct||v.id===s.answerId)?!!(a.correct||a.id===s.answerId):null;r.evaRuntime||(r.evaRuntime=ft()),r.evaRuntime.pendingQuestion=null,n.currentQuestion=null,ve(a.delta||(l===!1?{discipline:-.2}:{warmth:.2}),`eva_question:${s.id}`),s.kind==="kanji_meaning"&&gh(s,a,l);const c={id:s.id,kind:s.kind||"dialogue",cardId:s.cardId||null,kanji:s.kanji||"",option:a.id,correct:l,at:new Date().toISOString()};r.evaRuntime.lastQuestion={...c,at:Date.now()},r.evaRuntime.lastQuestionAt=Date.now(),r.evaRuntime.pendingQuestion=null,r.evaRuntime.questionHistory=[c,...r.evaRuntime.questionHistory||[]].slice(0,40);const d=Hr({}),u=l===!1?"thinking":"approve",m=Wt(Wr({sprite:u}),u);n.currentLine={id:`question_reply_${s.id}_${a.id}`,category:"question_reply",text:a.reply||ph(s,l),sprite:m,background:d.id,emotion:u,state:"react",at:new Date().toISOString(),reason:"question_answer"},r.evaRuntime.presenceState="react",r.evaRuntime.textRevealSkippedLineId=null,Xr(n.currentLine,"question_answer",$e({lastEvent:{type:"question_answer"}})),n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=m,Xn(),vh(s,a,l),An(),j(),x(l===!1?"answer_wrong":l===!0?"answer_correct":"notification_soft"),N()}function Zr(){const e=X(),t=e.currentQuestion?.id?e.currentQuestion:r.evaRuntime?.pendingQuestion;return t?.id?(e.currentQuestion=t,r.evaRuntime||(r.evaRuntime=ft()),r.evaRuntime.pendingQuestion=t,t):null}function ph(e,t){return e.kind==="kanji_meaning"&&e.kanji&&e.answerText?t?{ru:`Верно. ${e.kanji}: ${e.answerText.ru||h(e.answerText)}.`,en:`Correct. ${e.kanji}: ${e.answerText.en||h(e.answerText)}.`}:{ru:`Не совсем. ${e.kanji}: ${e.answerText.ru||h(e.answerText)}.`,en:`Not quite. ${e.kanji}: ${e.answerText.en||h(e.answerText)}.`}:{ru:"Принято.",en:"Noted."}}function gh(e,t,n){const s=nc(),a=mh(e);a&&Ts(a,"eva_room_quiz"),s.answered=Number(s.answered||0)+1,s.correct=Number(s.correct||0)+(n?1:0),s.wrong=Number(s.wrong||0)+(n?0:1),s.streak=n?Number(s.streak||0)+1:0,s.history=[{id:e.id,cardId:e.cardId||null,kanji:e.kanji||"",jlpt:e.jlpt||"",selected:t.id,correct:n,answer:h(e.answerText||{}),at:new Date().toISOString()},...s.history||[]].slice(0,40);const o=Lt();o.reviews=Number(o.reviews||0)+1,n?(r.progress.totalCorrect=Number(r.progress.totalCorrect||0)+1,a&&fh(a),a&&!s.rewarded[String(a.id)]&&(s.rewarded[String(a.id)]=new Date().toISOString(),B(2,s.streak>0&&s.streak%3===0?1:0,`eva_room_quiz:${a.id}`))):(r.progress.totalWrong=Number(r.progress.totalWrong||0)+1,o.mistakes=Number(o.mistakes||0)+1,a&&hh(a)),o.minutes=Ja(Number(o.reviews||0)*.75+Number(o.learned||0)*1.25,1),r.progress.daily[se()]=o,Ne(),wo(),H()}function mh(e){const t=String(e?.cardId||""),n=String(e?.kanji||""),s=String(e?.jlpt||"").toUpperCase();return(t?te(t):null)||sc().find(a=>{if(!a)return!1;const o=t&&String(a.id)===t,l=n&&a.kanji===n,c=!s||String(a.jlpt||"").toUpperCase()===s;return o||l&&c})||(n?r.cards.find(a=>a.kanji===n):null)||null}function fh(e){const t=String(e?.jlpt||"").toUpperCase(),n=$i().find(s=>s.level===t);n&&n.markStudied(e.kanji,e.id)}function hh(e){const t=String(e?.jlpt||"").toUpperCase(),n=$i().find(s=>s.level===t);n&&n.markDifficult(e.kanji,e.id)}function vh(e,t,n){if(!r.evaRuntime)return;const s={type:"user_answered_eva_question",payload:{questionId:e.id,answerId:t.id,cardId:e.cardId||null,kanji:e.kanji||"",correct:n},at:Date.now()};r.evaRuntime.lastEvent=s,r.evaRuntime.eventHistory=[s,...r.evaRuntime.eventHistory||[]].slice(0,80),r.evaRuntime.recentEvents=[s,...r.evaRuntime.recentEvents||[]].slice(0,80),Cc(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}function wh(){ie(),Gr()&&Es("render");const e=Oc();let t=X().currentLine;if(Gr()&&!t?.text&&r.evaAutonomyLines.length){const a=_i("render_fallback")||r.evaAutonomyLines[0],o=Hr(a),l=$e({lastEvent:{type:"render_fallback"}}),c=xt(l),d=Mi(a),u=Pi(a),m=a.emotion||Vr(l,c,"render_fallback"),v=Wt(Wr(a),m);t={id:a.id,category:a.category||"mood",text:a.text,sprite:v,background:o.id,decoration:d,effect:u,emotion:m,state:a.state||"observe",at:new Date().toISOString()},X().currentLine=t,X().currentDecoration=d,X().currentEffect=u,X().mood=c,X().emotion=m,X().lastSpokeAt=t.at,X().lastRoomId=o.id,X().lastSprite=v,r.evaRuntime.presenceState=t.state,r.evaRuntime.textRevealSkippedLineId=null,Xr(a,"render_fallback",l),Ei(v,o.file),Xn(),j()}if(Gr()&&t?.text){const a=Qn(t.background)||At(),o=Wt(t.sprite||"relationship",t.emotion||X().emotion);return{isAutonomy:!0,line:t,bg:a,spriteId:o,sprite:Vn(o),decoration:t.decoration||X().currentDecoration,effect:t.effect||X().currentEffect,mood:X().mood||ht().mood,emotion:t.emotion||X().emotion||"calm",node:{id:"eva_autonomy_line",background:a.id,sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[]}}}const n=Qn(e.background)||At(),s=Wt(e.sprite,X().emotion);return{isAutonomy:!1,line:null,bg:n,spriteId:s,sprite:Vn(s),decoration:X().currentDecoration,effect:X().currentEffect,mood:ht().mood,emotion:X().emotion||"calm",node:e}}function Dc(e="adaptive"){ie(),Ps();const t=ht(),n=new Set(r.progress.evaRoomDialogueProgress.lineHistory||[]),s=Qr().filter(d=>{const u=Array.isArray(d.tags)?d.tags:[];return!(e==="adaptive"||d.category===e||u.includes(e))||!Kc(d,t)?!1:!n.has(d.id)}),a=Qr().filter(d=>e==="adaptive"||d.category===e||(d.tags||[]).includes(e)),o=s.length?s:a.length?a:Qr(),l=Pe(o)||{id:"fallback",category:"adaptive",text:{ru:"Я рядом. Давай сделаем хотя бы один честный шаг.",en:"I'm here. Let's make one honest step."},sprite:"relationship",background:At().id},c=r.progress.evaRoomDialogueProgress.lineHistory||[];return r.progress.evaRoomDialogueProgress.lineHistory=[l.id,...c.filter(d=>d!==l.id)].slice(0,24),{id:l.id,category:l.category||e,text:l.text||{ru:String(l.ru||""),en:String(l.en||l.ru||"")},sprite:l.sprite||"relationship",background:l.background||At().id,relationshipDelta:l.relationshipDelta||{}}}function Kc(e,t){return[["minWarmth",t.warmth,(s,a)=>s>=a],["maxWarmth",t.warmth,(s,a)=>s<=a],["minTrust",t.trust,(s,a)=>s>=a],["maxTrust",t.trust,(s,a)=>s<=a],["minDiscipline",t.discipline,(s,a)=>s>=a],["maxDiscipline",t.discipline,(s,a)=>s<=a],["minCuriosity",t.curiosity,(s,a)=>s>=a],["maxCuriosity",t.curiosity,(s,a)=>s<=a]].every(([s,a,o])=>typeof e[s]>"u"||o(a,Number(e[s])))}function Oc(){ie();const e=Yf(r.progress.evaRoomDialogueProgress.currentNode);return r.progress.evaRoomDialogueProgress.visited[e.id]=new Date().toISOString(),e}function Vn(e){return r.evaSprites?.[e]||r.evaSprites?.default||"assets/mascots/eva_normal.webp"}function Ei(e,t=""){[Vn(e),t].filter(Boolean).forEach(n=>{try{const s=new Image;s.src=n,s.decode&&s.decode().catch(()=>null)}catch(s){console.warn("Eva visual preload skipped.",s)}})}function bh(e){const n=Oc().choices?.[Number(e.dataset.index||0)];if(!n)return;ie();const s=r.progress.evaRelationship;s.conversationCount=Number(s.conversationCount||0)+1,s.totalDialogueChoices=Number(s.totalDialogueChoices||0)+1,s.lastInteractionAt=new Date().toISOString(),s.lastInteractionDate=se(),kh(n),ve(n.relationshipDelta||{warmth:.4,curiosity:.2},"dialogue_choice");const a=Number(n.rewardMoonFragments||0),o=n.rewardOnceKey;if(a>0&&o&&!r.progress.evaRoomDialogueProgress.rewardsClaimed[o]&&(r.progress.evaRoomDialogueProgress.rewardsClaimed[o]=new Date().toISOString(),B(0,a,`eva_room:${o}`),O(Ht().reward)),n.randomLine){const l=Dc(n.randomLine);ve(l.relationshipDelta||{},`eva_line:${l.id}`,{silent:!0}),r.progress.evaRoomDialogueProgress.generatedLine=l,r.progress.evaRoomDialogueProgress.currentNode="generated_line"}else r.progress.evaRoomDialogueProgress.generatedLine=null,r.progress.evaRoomDialogueProgress.currentNode=n.next||"intro";if(n.openShop&&(r.evaRoomShopOpen=!0),j(),n.route){Ke(n.route);return}x(n.openShop?"menu_open":"page_turn"),N()}function kh(e={}){if(!r.evaRuntime)return;r.evaRuntime.memory=Nn(Nt(),r.evaRuntime.memory||{});const t=r.evaRuntime.memory,n=!!(e.randomLine&&!e.route),s=["learn","review"].includes(e.route);n&&(t.timesUserChoseTalkOverStudy=Number(t.timesUserChoseTalkOverStudy||0)+1),s&&(t.timesUserChoseTalkOverStudy=Math.max(0,Number(t.timesUserChoseTalkOverStudy||0)-1)),t.lastInteractionDate=se(),t.lastRoute=r.route}function yh(){ie(),r.progress.evaRoomDialogueProgress.currentNode="intro",r.progress.evaRoomDialogueProgress.generatedLine=null,r.evaRuntime&&(r.evaRuntime.presenceState="wait_choice",r.evaRuntime.textRevealSkippedLineId=null),j(),x("page_turn"),N()}function $h(e){ea(e)}function jh(e){ta(e)}function Sh(e){const t=de(e)||jn(e)||Sn(e);t&&ea(t.id)}function Nh(e){const t=de(e)||jn(e)||Sn(e);t&&ta(t.id)}function vt(e){r.customization||Tr();const t=de(e)||jn(e);return!!(t?.defaultOwned||t?.price===0||r.customization?.owned?.includes(t?.id||e))}function Di(e){return e?e.type==="background"?"background":e.type==="outfit"?"outfit":e.type==="theme"?"theme":e.type==="effect"?"effect":e.type==="decoration"?"decoration":e.type:null}function Ah(e){const t=Di(e);return!!(t&&r.customization?.selected?.[t]===e.id)}function Fc(e){return!e||!Ki(e)?"locked":Ah(e)?"selected":vt(e.id)?"owned":"available"}function xh(e={}){const t=[r.customization?.selected?.effect,e.effect,r.evaRuntime?.currentEffect,r.evaRuntime?.currentLine?.effect,r.progress?.evaAutonomy?.currentEffect,X().currentEffect];for(const n of t){const s=St(n);if(!s||s==="none")continue;const a=de(s);if(a?.type==="effect"&&vt(a.id))return a.id}return null}function Bc(e=null){const t=St(e||r.customization?.selected?.effect),n=de(t);return!n||n.type!=="effect"||r.customization?.selected?.effect!==n.id?!1:(r.customization.selected.effect=null,r.progress?.evaAutonomy&&(r.progress.evaAutonomy.currentEffect=null),r.evaRuntime?.currentEffect===n.id&&(r.evaRuntime.currentEffect="none"),Ls(),Jn(),j(),Mt(),x("menu_close"),O(p()==="ru"?"Эффект убран.":"Effect removed."),N(),!0)}function Ch(e=null){const t=St(e||r.customization?.selected?.effect||r.customization?.selected?.decoration||r.customization?.selected?.frame||r.customization?.selected?.outfit||r.customization?.selected?.background||r.customization?.selected?.theme),n=de(t);if(!n)return!1;if(n.type==="effect")return Bc(n.id);r.customization||Tr();const s=Di(n);if(!s)return!1;const a=$n().selected;return s==="background"?r.customization.selected.background=a.background:s==="outfit"?r.customization.selected.outfit=a.outfit:s==="theme"?r.customization.selected.theme=a.theme:s==="decoration"&&(r.customization.selected.decoration=a.decoration,r.customization.selected.frame=a.frame),Ls(),Jn(),j(),Mt(),x("menu_close"),O(p()==="ru"?"Выбор сброшен.":"Selection cleared."),N(),!0}function Lh(e){if(!e?.unlockCondition||Ki(e))return"";const t=e.unlockCondition,n=p()==="ru";if(t.type==="achievement"){const s=Rn().find(o=>o.id===t.id),a=s?mo(s):t.id;return n?`Открывается за достижение: ${a}`:`Unlocks after achievement: ${a}`}return t.type==="level"?n?`Открывается на уровне ${t.value}`:`Unlocks at level ${t.value}`:t.type==="streak"?n?`Открывается за серию ${t.value} дн.`:`Unlocks at a ${t.value}-day streak`:""}function Ki(e){if(!e?.unlockCondition)return!0;const t=e.unlockCondition;return t.type==="level"?r.progress.level>=Number(t.value||0):t.type==="streak"?r.progress.streak.current>=Number(t.value||0):t.type==="achievement"?!!r.progress.achievements?.[t.id]?.unlockedAt:!0}function ea(e){const t=de(e);if(t){if(!Ki(t)){x("purchase_failed"),O(Wn().locked);return}if(vt(t.id)){ta(t.id);return}if(r.progress.moonFragments<t.price){x("purchase_failed"),O(Wn().notEnough);return}r.progress.moonFragments-=t.price,r.customization.owned=[...new Set([...r.customization.owned||[],t.id])],r.customization.seen=[...new Set([...r.customization.seen||[],t.id])],r.progress.transactions.unshift({at:new Date().toISOString(),reason:`customization:${t.type}:${t.id}`,label:rt(t),xp:0,coins:-t.price,balance:r.progress.moonFragments}),r.progress.transactions=r.progress.transactions.slice(0,80),Ls(),Jn(),H(),j(),x("purchase_success"),x("item_unlock"),we("item_bought",{itemId:t.id,type:t.type,title:rt(t),price:t.price}),O(Wn().bought.replace("{item}",rt(t))),N()}}function ta(e){var s;const t=de(e);if(!t||!vt(t.id))return;const n=Di(t);n&&(r.customization.selected[n]=t.id,n==="decoration"&&(r.customization.selected.frame=t.id),t.type==="outfit"&&t.spriteId&&(r.progress.selectedEvaSprite=t.spriteId,r.progress.evaAutonomy.currentLine=null),t.type==="background"&&(r.progress.selectedEvaRoomBackground=t.id,r.evaRuntime&&(r.evaRuntime.currentBackground=t.id,r.evaRuntime.activeBackground=t.id,(s=r.evaRuntime).memory||(s.memory=Nt()),r.evaRuntime.memory.preferredEvaRoomBackground=t.id),r.progress.evaAutonomy.currentLine=null),Ls(),Jn(),j(),Mt(),x("notification_soft"),we("item_equipped",{itemId:t.id,type:t.type,title:rt(t)}),O(Wn().selectedToast.replace("{item}",rt(t))),N())}function Ih(){const e=X();e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",e.nextSpeakAt=0,Es("toggle",{force:!0}),j(),x("notification_soft"),O(qt().status),N()}function Th(){const e=X();e.frequency="normal",Xn(),j(),x("notification_soft"),N()}function Rh(){const e=X();e.roomMode="auto",e.currentLine=null,j(),x("notification_soft"),N()}function _h(){const e=X();e.outfitMode="auto",e.currentLine=null,j(),x("notification_soft"),N()}function zc(){const e=X();e.enabled=!0,Ic(),e.currentQuestion=null,e.currentLine=null,e.nextSpeakAt=0,Jc("manual"),j(),x("page_turn"),N()}function Jc(e="manual"){const t=Lc(e)||_i(e);if(!t)return!1;const n=$e({lastEvent:{type:e}}),s=xt(n),a=t.emotion||Vr(n,s,e),o=Hr(t),l=Wt(Wr(t),a),c=Mi(t),d=Pi(t),u=X(),m=Date.now(),v=Mc(n,t);return u.currentLine={id:t.id,category:t.category||e,text:t.text,sprite:l,background:o.id,decoration:c,effect:d,emotion:a,state:t.state||"speak",at:new Date(m).toISOString(),reason:e},u.currentDecoration=c,u.currentEffect=d,u.mood=s,u.emotion=a,u.lastSpokeAt=u.currentLine.at,u.lastRoomId=o.id,u.lastSprite=l,u.currentQuestion=v,u.recentLineIds=[t.id,...(u.recentLineIds||[]).filter(f=>f!==t.id)].slice(0,32),r.evaRuntime||(r.evaRuntime=ft()),Object.assign(r.evaRuntime,{mood:s,emotion:a,presenceState:t.state||"speak",currentPhrase:u.currentLine,pendingQuestion:v,currentSkin:l,currentBackground:o.id,currentDecoration:c,currentEffect:d,activeSkin:l,activeBackground:o.id,lastPhraseAt:m,lastEmotionChangeAt:m,lastQuestionAt:v?m:Number(r.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:m,textRevealSkippedLineId:null}),Xr(t,e,n),Ei(l,o.file),Xn(),An(),Mt(),!0}function Mh(){X().currentLine=null,j(),x("menu_close"),N()}function T(e,t,n,s){return`
      <article class="metric">
        <span>${i(e)}</span>
        <strong>${i(t)}</strong>
        <div class="meter"><i style="width:${oe(s,0,100)}%"></i></div>
        <p class="label">${i(n)}</p>
      </article>
    `}function Ph(e){const t=xo(e.id),n=t.filter(d=>_(d.id).state!=="New").length,s=t.filter(d=>_(d.id).state==="Mastered").length,a=!Ae(e),o=tp(e),l=a?"鎖":t[0]?.kanji||"文",c=R(s,t.length);return`
      <button class="lesson-tile ${a?"is-locked":""} ${_o(o)}" type="button" id="textbook-lesson-${g(e.id)}" data-action="start-lesson" data-id="${g(e.id)}">
        <span class="lesson-glyph">${i(l)}</span>
        <span>
          <span class="pill">${i(e.jlpt)}</span>
          ${E$(o)}
          <h3>${i(mr(e))}</h3>
          <p>${i(Sj(e))}</p>
          <span class="lesson-meta">
            <span class="pill">${n}/${t.length}</span>
            <span class="pill mastered">${s} ${i(S("mastered"))}</span>
            ${a?`<span class="pill danger-pill">${i(S("unlockedAt"))} ${La(e)}</span>`:""}
          </span>
          <span class="meter"><i style="width:${c}%"></i></span>
        </span>
      </button>
    `}function Eh(e){const t=tp(e),n=e.id===r.activeLessonId,s=!Ae(e);return`
      <button class="btn ${n?"primary":"ghost"} ${s?"is-disabled":""} ${_o(t)}" type="button" data-action="select-lesson" data-id="${g(e.id)}" title="${g(Mo(t))}">
        <span>${i(e.jlpt)}</span>
        ${P$(t)}
      </button>
    `}function Oi(){const e=String(r.activeLearnJlpt||"all").toUpperCase();return r.lessons.filter(t=>e==="ALL"||String(t.jlpt||"").toUpperCase()===e)}function Dh(){const e=Oi();return e.find(t=>t.id===r.activeLessonId)||e.find(t=>Ae(t))||e[0]||r.lessons.find(t=>t.id===r.activeLessonId)||r.lessons.find(t=>Ae(t))||r.lessons[0]||null}function Fi(){return W(Dh()?.jlpt)||_t()}function Uc(e){if(!e.length)return r.activeLessonId=null,null;const t=e.find(a=>a.id===r.activeLessonId);if(t&&Ae(t))return t;const s=e.find(a=>Ae(a))||e[0];return r.activeLessonId=s?.id||null,s||null}function Kh(e){const t=e.length,n=e.filter(a=>Ae(a)).length,s=["all",...Le];return`
      <div class="jlpt-filter-bar" role="tablist" aria-label="${g(p()==="ru"?"Фильтр уровней JLPT":"JLPT level filter")}">
        ${s.map(a=>{const o=String(r.activeLearnJlpt||"all").toLowerCase()===String(a).toLowerCase(),l=a==="all"?p()==="ru"?"Все":"All":a,c=a==="all"?t:r.lessons.filter(d=>d.jlpt===a).length;return`
            <button class="btn jlpt-filter-chip ${o?"primary":"ghost"}" type="button" role="tab" aria-selected="${o?"true":"false"}" data-action="set-learn-jlpt" data-jlpt="${g(a)}">
              <span>${i(l)}</span>
              <small>${c}</small>
            </button>
          `}).join("")}
      </div>
      <div class="learn-level-strip">
        <span class="pill">${i(p()==="ru"?"Уроки":"Lessons")}: ${t}</span>
        <span class="pill">${i(p()==="ru"?"Открыто":"Unlocked")}: ${n}</span>
        <button class="btn ghost learn-textbook-link" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Учебники Flash Kanji":"Flash Kanji textbooks")}</button>
      </div>
    `}function Oh(e){if(!e)return"";const t=e.textbook||e;return`
      <article class="learn-level-panel">
        <div class="learn-level-cover">
          <img src="${g(t.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <span class="pill">${i(t.jlpt||"")}</span>
        </div>
        <div class="learn-level-copy">
          <h3>${i(h(t.displayTitle||t.title||{}))}</h3>
          <p>${i(h(t.description||{}))}</p>
          <div class="tag-row">
            <span class="pill">${i(t.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
            <span class="pill">${i(t.kanjiCount||0)} ${i(S("cardsToday"))}</span>
            <span class="pill">${i(h(t.recommendedCycle||{}))}</span>
          </div>
          <div class="actions">
            <a class="btn primary" href="${g(t.pdfUrl||t.pdfFile||"")}" download="${g((t.pdfFile||t.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(p()==="ru"?"Скачать PDF":"Download PDF")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
          </div>
        </div>
      </article>
    `}function Fh(e){const t=$t(e?.jlpt);return`
      <article class="lesson-locked-panel">
        <span class="pill danger-pill">${i(p()==="ru"?"Закрытый уровень":"Level locked")}</span>
        <h2>${i(e?mr(e):"")}</h2>
        <p>${i(p()==="ru"?`Откроется на уровне ${La(e)}.`:`Unlocks at level ${La(e)}.`)}</p>
        <div class="learn-level-lock-meta">
          <span class="pill">${i(e?.jlpt||"")}</span>
          <span class="pill">${i(p()==="ru"?"Закрыт":"Locked")}</span>
          <span class="pill">${i(t?.lessonCount||0)} ${i(p()==="ru"?"уроков в учебнике":"lessons in textbook")}</span>
        </div>
        <div class="actions">
          <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Просмотреть учебник":"View textbook")}</button>
          <button class="btn ghost" type="button" data-action="route" data-route="home">${i(p()==="ru"?"Домой":"Home")}</button>
        </div>
      </article>
    `}function Bh(){return r.activeLearnView===vn?Qh():r.activeLearnView===Kt?Wh():Hc()}function zh(){const e=Zl();if(e.kind==="review"){Ke("review");return}if(r.route==="home"){Ra(Fi());return}Gc(e.nodeId)}function Gc(e){const t=qn(e);if(!t){xn();return}if(Yl(t)==="locked"){O(p()==="ru"?"Сначала закончи предыдущий шаг.":"Finish the previous step first.");return}if(t.id===On){Ke("review");return}if(t.id===Fn){Us("final-test");return}if(t.type==="textbook"){Us(t.id);return}xn(Kt,t.id)}function qc(e){const t=String(e||"");return t&&(te(t)||r.cards.find(n=>String(n.id)===t))||null}function Jh(){const e=re();return[{id:"intro-1",kind:"info",eyebrow:e.intro,title:e.introTitle,text:e.introBody,note:e.finishHint},{id:"intro-2",kind:"info",eyebrow:e.route,title:e.nextLesson,text:e.introBridge,note:e.mapHint},{id:"intro-3",kind:"quiz",eyebrow:e.ready,title:e.introQuestion,text:e.introQuestionHint,answer:"review",options:[{value:"review",label:{ru:"В повторение",en:"Into review"}},{value:"memory",label:{ru:"В архив навсегда",en:"Into permanent archive"}},{value:"skip",label:{ru:"Никуда, пока не забудешь",en:"Nowhere, until you forget"}}]}]}function Ds(e){const t=it(e);if(!t)return null;const n=Qt(t);if(!n.length)return null;const s=Array.isArray(t.sentences)?t.sentences:[],a=n.map((o,l)=>{const c=ot(o)[0]||null,d=s[l%Math.max(s.length,1)]||s[0]||null,u=c?{jp:c.word||o.kanji,hiragana:c.reading||o.hiragana||"",translation:c.translation||(d?{ru:d.ru||"",en:d.en||""}:"")}:d?{jp:d.jp||o.kanji,hiragana:V(d.reading||d.hiragana||o.hiragana||""),translation:{ru:d.ru||"",en:d.en||""}}:{jp:o.kanji,hiragana:o.hiragana||"",translation:{ru:I(o),en:I(o)}};return{cardId:o.id,sentence:u}});return{id:t.id,title:t.title,summary:t.goal||t.theme||t.title,objectives:[t.goal,t.theme].filter(Boolean),kanjiIds:n.map(o=>o.id),kanjiBlocks:a,exercises:zs(t),source:"learning_path"}}function Uh(e){if(e===he)return Jh();const t=r.learningPathLessonPayloads[e]||Ds(e);if(!t)return[];const n=re(),s=[],a=(t.objectives||[]).map(h).filter(Boolean).slice(0,3).join(" • ");return s.push({id:`${e}-overview`,kind:"info",eyebrow:"N5",title:h(t.title),text:h(t.summary),note:a||n.finishHint}),(t.kanjiBlocks||[]).forEach((o,l)=>{const c=qc(o.cardId);if(!c)return;const d=o.sentence||null;s.push({id:`${e}-kanji-${l+1}`,kind:"kanji",eyebrow:c.jlpt||"N5",title:`${c.kanji} · ${I(c)}`,text:kv(c,{word:d?.jp||c.kanji,reading:d?.hiragana||c.hiragana||""}),note:d?.translation?h(d.translation):"",cardId:c.id,card:c,sentence:d})}),(t.exercises||[]).forEach(o=>{const l=(o.options||[]).map(c=>({value:String(c.value??c.id??c.label??c),label:h(c.label||c.text||c)}));s.push({id:String(o.id||`${e}-quiz-${s.length}`),kind:"quiz",eyebrow:"N5",title:h(o.prompt),text:h(o.promptHint||{ru:"",en:""}),answer:String(o.answer??""),options:l})}),s}function Gh(e,t=null){const n=Uh(e);if(!t||t.mode!=="mistakes"||!t.reviewStepIds?.length)return n;const s=new Set(t.reviewStepIds),a=n.filter(o=>o.kind==="quiz"&&s.has(o.id));return a.length?a:n.filter(o=>o.kind==="quiz")}function qh(e,t=Kt,n=[]){const s=zt(),a=s.activeSession,o=n.map(String).filter(Boolean);return a?.nodeId===e&&a.mode===t&&JSON.stringify(a.reviewStepIds||[])===JSON.stringify(o)?a:(s.activeSession=oi({nodeId:e,mode:t,stepIndex:0,answers:{},mistakes:[],reviewStepIds:o,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),s.lastUpdatedAt=s.activeSession.updatedAt,j(),s.activeSession)}function Ks(e){const t=bi(),n=t?.nodeId===e?t:qh(e),s=Gh(e,n),a=s.filter(c=>c.kind==="quiz"),o=Object.keys(n.answers||{}).length,l=Math.max(0,Number(n.stepIndex||0));return{session:n,steps:s,quizSteps:a,answeredCount:o,stepIndex:l,currentStep:s[l]||null,isResult:l>=s.length&&s.length>0}}function Hh(e,t,n){var c;const s=zt(),a=new Date().toISOString(),o=n.filter(d=>d.kind==="quiz"),l=Array.isArray(t.mistakes)&&t.mistakes.length>0;if((c=s.completedNodes)[e]||(c[e]=a),s.resultHistory[e]={completedAt:a,score:Number(t.score||0),totalQuestions:o.length,mistakes:(t.mistakes||[]).slice(0,24)},s.activeSession=null,e===he&&B(12,0,"learning_path:intro"),/^n5-lesson-\d+$/i.test(e)){const d=it(e),u=r.learningPathLessonPayloads[e]||Ds(e),m=[...new Set([...u?.kanjiIds||[],...(u?.kanjiBlocks||[]).map(f=>f.cardId),...Qt(d).map(f=>f.id)].map(String).filter(Boolean))],v=Q();if(m.forEach(f=>{const w=qc(f);if(!w)return;Ts(w,"learning_path"),Is(v,w.kanji);const y=ne(_(w.id));y.state==="New"&&(r.progress.cards[w.id]=be(y,l?"hard":"good"))}),d){le.add(`n5:${d.id}`),v.completedLessons[d.id]=a,v.currentLessonId=Te().find(y=>y.order===d.order+1)?.id||d.id,r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.completedLessons=r.progress.n5Course.completedLessons||{},r.progress.n5Course.completedLessons[d.id]=a,j({immediate:!0}),Cn()>=10&&Object.keys(v.studiedKanji||{}).length>=80&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N5")||r.progress.unlockedJlptLevels.push("N5"),r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"));const f=r.n5Meta?.rewards?.lessonCompleteXp||45,w=r.n5Meta?.rewards?.lessonCompleteMoon||6;B(f,w,`learning_path:${e}`),Ze({title:`${Ie().lessonComplete}: ${h(d.title)}`,message:Ie().lessonCompleteText,xp:f,coins:w,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),x("lesson_complete"),we("lesson_complete",{lessonId:e,jlpt:"N5"})}}Or(),Ne(),H(),j()}function Hc(){r.n5Textbook?.items?.length||wi();const e=re(),t=Vl(),n=Zl(),s=qn(Gn()),a=Tt();return`
      <section class="page learning-path-page">
        <div class="section-head">
          <div>
            <h1>${i(e.route)}</h1>
            <p>${i(s?h(s.summary)||e.mapHint:e.loading)}</p>
          </div>
          <button class="btn primary" type="button" data-action="home-primary">${i(n.label)}</button>
        </div>

        <article class="learning-path-hero">
          <div>
            <span class="pill">${i(e.lessonTrack)}</span>
            <h2>${i(Xl(Gn()))}</h2>
            <p>${i(e.mapHint)}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(re().reviewQueue)} · ${i(Re())}</span>
            <span class="pill">${i(re().streak)} · ${i(r.progress.streak.current)}</span>
            <span class="pill">${i(re().xp)} · ${i(a.current)}</span>
          </div>
        </article>

        <div class="learning-path-timeline">
          ${t.length?t.map((o,l)=>{const c=Yl(o),d=c==="locked",u=h(o.summary)||"",m=o.id===On?e.reviewAction:o.id===Fn?e.openCheckpoint:o.type==="textbook"?e.openTextbook:c==="current"?e.resume:e.continue;return`
              <button class="learning-path-node is-${g(c)} is-${g(o.type||"lesson")}" type="button" data-action="learning-path-node" data-node="${g(o.id)}" ${d?'disabled aria-disabled="true"':""}>
                <span class="learning-path-node-index">${l+1}</span>
                <div class="learning-path-node-copy">
                  <div class="learning-path-node-meta">
                    <span class="pill">${i(o.level||"N5")}</span>
                    <span class="pill">${i(bm(c))}</span>
                  </div>
                  <h2>${i(h(o.title))}</h2>
                  <p>${i(u)}</p>
                  <div class="learning-path-node-foot">
                    <small>${i(o.durationMinutes||0)} ${i(e.minutes)}</small>
                    <strong>${i(m)}</strong>
                  </div>
                </div>
              </button>
            `}).join(""):`<article class="empty-state"><h2>${i(e.empty)}</h2></article>`}
        </div>
      </section>
    `}function Wh(){const e=r.activeLearnNodeId||Gn(),t=qn(e),n=re();if(!t)return Hc();if(t.id!==he&&t.type==="lesson"&&!r.n5Textbook?.items?.length)return wi(),`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${i(h(t.title))}</h1>
                <p>${i(n.loading)}</p>
              </div>
              <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
            </div>
          </article>
        </section>
      `;t.type==="lesson"&&pm(e);const s=Ks(e),{session:a,steps:o,quizSteps:l,currentStep:c,isResult:d}=s;if(!o.length)return`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${i(h(t.title))}</h1>
                <p>${i(h(t.summary)||n.mapHint)}</p>
              </div>
              <button class="btn ghost" type="button" data-action="learning-path-node" data-node="${g(t.id)}">${i(t.type==="textbook"?n.openTextbook:n.backToMap)}</button>
            </div>
          </article>
        </section>
      `;const u=o.length,m=u?R(Math.min(a.stepIndex,u),u):0,v=a.answers?.[c?.id||""]||null,f=v?.selected||"",w=!!v?.correct,y=l.length?Math.round(Number(a.score||0)/Math.max(l.length,1)*100):100;return d?`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${i(h(t.title))}</h1>
                <p>${i(n.scoreHint)}</p>
              </div>
              <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
            </div>
            <div class="lesson-player-progress">
              <span>${i(n.score)}</span>
              <strong>${i(y)}%</strong>
              <div class="meter"><i style="width:${y}%"></i></div>
            </div>
            <div class="lesson-result-panel">
              <article class="home-summary-card">
                <span>${i(n.score)}</span>
                <strong>${i(`${a.score}/${Math.max(l.length,1)}`)}</strong>
              </article>
              <article class="home-summary-card">
                <span>${i(n.mistakes)}</span>
                <strong>${i(a.mistakes.length)}</strong>
              </article>
            </div>
            <div class="lesson-player-actions">
              ${a.mistakes.length?`<button class="btn ghost" type="button" data-action="learning-path-retry" data-node="${g(e)}">${i(n.retryMistakes)}</button>`:""}
              <button class="btn primary" type="button" data-action="learning-path-continue" data-node="${g(e)}">${i(n.continuePath)}</button>
            </div>
          </article>
        </section>
      `:`
      <section class="page learning-path-page">
        <article class="study-card lesson-player">
          <div class="section-head">
            <div>
              <h1>${i(h(t.title))}</h1>
              <p>${i(h(t.summary)||n.mapHint)}</p>
            </div>
            <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
          </div>
          <div class="lesson-player-progress">
            <span>${i(n.step)} ${i(Math.min(a.stepIndex+1,u))}/${i(u)}</span>
            <strong>${i(c.eyebrow||t.level||"N5")}</strong>
            <div class="meter"><i style="width:${m}%"></i></div>
          </div>
          <div class="lesson-player-card">
            <span class="pill">${i(c.eyebrow||t.level||"N5")}</span>
            <h2>${i(c.title||"")}</h2>
            ${c.kind==="kanji"&&c.card?`
              <div class="lesson-player-kanji">
                <div class="lesson-player-glyph">${i(c.card.kanji)}</div>
                <div class="lesson-player-kanji-copy">
                  <p>${i(c.text||"")}</p>
                  <div class="tag-row">
                    <span class="pill">${i(I(c.card))}</span>
                    ${c.card.hiragana?`<span class="pill">${i(V(c.card.hiragana))}</span>`:""}
                    ${c.card.onyomi?`<span class="pill">${i(V(c.card.onyomi))}</span>`:""}
                  </div>
                  ${c.sentence?`
                    <div class="lesson-player-sentence">
                      <strong>${i(c.sentence.jp||"")}</strong>
                      <p>${i(c.sentence.hiragana||"")}</p>
                      <small>${i(h(c.sentence.translation||{}))}</small>
                    </div>
                  `:""}
                </div>
              </div>
            `:c.kind==="quiz"?`
              <p>${i(c.text||"")}</p>
              <div class="lesson-choice-grid">
                ${(c.options||[]).map(k=>{const A=f===k.value,b=k.value===c.answer;return`<button class="btn ${A?w?"success":"danger":v&&b?"ghost is-correct":"ghost"}" type="button" data-action="learning-path-choice" data-node="${g(e)}" data-step="${g(c.id)}" data-value="${g(k.value)}">${i(k.label)}</button>`}).join("")}
              </div>
              ${v?`<p class="lesson-player-feedback ${w?"is-good":"is-warning"}">${i(w?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Правильно":"Correct"}: ${(c.options||[]).find(k=>k.value===c.answer)?.label||c.answer}`)}</p>`:""}
            `:`
              <p>${i(c.text||"")}</p>
              ${c.note?`<small>${i(c.note)}</small>`:""}
            `}
          </div>
          <div class="lesson-player-actions">
            <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
            <button class="btn primary" type="button" data-action="learning-path-step-next" data-node="${g(e)}" ${c.kind==="quiz"&&!v?'disabled aria-disabled="true"':""}>${i(a.stepIndex+1>=u?n.finish:n.continue)}</button>
          </div>
        </article>
      </section>
    `}function Qh(){const e=Oi(),t=Uc(e),n=!!(t&&Ae(t)),s=n?c$(t.id):[];(!r.activeCardId||!s.some(l=>l.id===r.activeCardId))&&(r.activeCardId=s[0]?.id||null);const a=n&&r.activeCardId?te(r.activeCardId):null,o=r.activeLearnJlpt!=="all"?$t(r.activeLearnJlpt):null;return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(S("learn"))}</h1>
            <p>${i(t?mr(t):"")}</p>
          </div>
          ${o?`<button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Учебники":"Textbooks")}</button>`:""}
        </div>
        ${Kh(e)}
        ${o?Oh(o):""}
        <div class="actions lesson-tabs">
          ${e.map(Eh).join("")}
        </div>
        <div class="study-layout">
          ${n?a?ru(a):zk(t):Fh(t)}
          ${n?io(a,s.length):io(null,0)}
        </div>
      </section>
    `}function Xh(){const e=un(r.activeJlptLesson)||un(te(r.activeCardId)?.jlpt)||r.jlptLessons[0];if(!e)return`
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">JLPT</span>
            <h2>${i(p()==="ru"?"JLPT-уроки ещё не загружены":"JLPT lessons are not loaded yet")}</h2>
            <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(S("learn"))}</button>
          </article>
        </section>
      `;r.activeJlptLesson=e.jlpt;const t=$t(e.jlpt);if(!et(e.jlpt))return Wc(t||e);const n=rp(e.jlpt),s=n.filter(l=>_(l.id).state==="Mastered").length,a=n.filter(l=>_(l.id).state!=="New").length,o={...Ko(),...Do()};return`
      <section class="page jlpt-lesson-page">
        <div class="section-head">
          <div>
            <h1>${i(h(e.title))}</h1>
            <p>${i(h(e.summary))}</p>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${g(e.jlpt)}">${i(p()==="ru"?"Страница учебника":"Textbook page")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
            ${fs("lesson",{level:e.jlpt,lessonId:e.id})}
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks" data-subroute="${g(e.jlpt)}">${i(o.back)}</button>
          </div>
        </div>
        <div class="actions jlpt-switcher">
          ${r.jlptLessons.map(l=>{const c=et(l.jlpt),d=l.jlpt===e.jlpt,u=g(It(l.jlpt));return c?`<button class="btn ${d?"primary":"ghost"}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(l.jlpt)}">${i(l.jlpt)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${u}">🔒 ${i(l.jlpt)}</button>`}).join("")}
        </div>
        ${t?`
          <article class="jlpt-textbook-hero">
            <img class="jlpt-textbook-cover" src="${g(t.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
            <div class="jlpt-textbook-body">
              <span class="pill">${i(t.jlpt)}</span>
              <h2>${i(h(t.displayTitle||t.title||{}))}</h2>
              <p>${i(h(t.description||{}))}</p>
              <div class="tag-row">
                <span class="pill">${i(t.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                <span class="pill">${i(t.kanjiCount||0)} ${i(S("cardsToday"))}</span>
                <span class="pill">${i(h(t.goal||{}))}</span>
                <span class="pill">${i(h(t.recommendedCycle||{}))}</span>
              </div>
              <div class="actions">
                <a class="btn primary" href="${g(t.pdfUrl||t.pdfFile||"")}" download="${g((t.pdfFile||t.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(p()==="ru"?"Скачать PDF":"Download PDF")}</a>
                <button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(e.jlpt)}">${i(p()==="ru"?"К уроку":"Go to lesson")}</button>
              </div>
            </div>
          </article>
        `:""}
        <article class="jlpt-lesson-hero">
          <div>
            <span class="pill">${i(e.jlpt)}</span>
            <h2>${i(o.courseMap)}</h2>
            <p>${i(o.courseText)}</p>
          </div>
          <div class="mini-stat-row">
            ${T(o.available,n.length,e.jlpt,R(n.length,Math.max(r.cards.length,1)))}
            ${T(o.learned,a,`${s} ${o.mastered}`,R(a,Math.max(n.length,1)))}
          </div>
        </article>
        ${qd(e)}
        <div class="jlpt-section-grid">
          ${e.goals.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.goals)}</h3>
              <ul>${e.goals.map(l=>`<li>${i(h(l))}</li>`).join("")}</ul>
            </article>
          `:""}
          ${e.sections.map(l=>`
            <article class="jlpt-section-card">
              <h3>${i(h(l.title))}</h3>
              <p>${i(h(l.body))}</p>
              ${Array.isArray(l.points)&&l.points.length?`<ul>${l.points.map(c=>`<li>${i(h(c))}</li>`).join("")}</ul>`:""}
            </article>
          `).join("")}
          ${e.practice.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.practice)}</h3>
              <ul>${e.practice.map(l=>`<li>${i(h(l))}</li>`).join("")}</ul>
            </article>
          `:""}
          ${e.checkpoint.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.checkpoint)}</h3>
              <ul>${e.checkpoint.map(l=>`<li>${i(h(l))}</li>`).join("")}</ul>
            </article>
          `:""}
        </div>
      </section>
    `}function Vh(){const e=r.jlptCatalog?.items||[],t=String(r.activeTextbookLevel||"").toUpperCase(),n=t?$t(t):null;if(n)return r.activeTextbookLevel=n.jlpt,r.activeJlptLesson=n.jlpt,Yh(n);const s=p()==="ru"?{title:"Учебники Flash Kanji",description:"Функциональные страницы учебников JLPT N5–N1 с переходом к урокам, повторению и материалам внутри уровня.",open:"Открыть страницу",pdf:"Скачать PDF",study:"К урокам"}:{title:"Flash Kanji Textbooks",description:"Functional JLPT N5-N1 textbook pages with lesson links, review entry points, and level materials.",open:"Open page",pdf:"Download PDF",study:"Go to lessons"};return`
      <section class="page textbooks-page">
        <div class="section-head">
          <div>
            <h1>${i(s.title)}</h1>
            <p>${i(s.description)}</p>
          </div>
          <div class="actions">
            ${fs("textbooks")}
            <button class="btn primary" type="button" data-action="open-jlpt-lesson-start" data-jlpt="${g(_t())}">${i(s.study)}</button>
          </div>
        </div>
        <div class="textbook-grid" id="textbook-grid">
          ${e.map(a=>`
            <article class="textbook-card ${et(a.jlpt)?"is-unlocked":"is-locked"}" id="textbook-${g(a.jlpt)}">
              <div class="textbook-cover-wrap">
                <img class="textbook-cover" src="${g(a.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
                <span class="pill textbook-level">${i(a.jlpt)}</span>
              </div>
              <div class="textbook-body">
                <h2>${i(h(a.displayTitle||a.title||{}))}</h2>
                <p>${i(h(a.description||{}))}</p>
                ${et(a.jlpt)?"":`<p class="textbook-lock-note">${i(It(a.jlpt))}</p>`}
                <div class="textbook-meta">
                  <span class="pill">${i(a.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                  <span class="pill">${i(a.kanjiCount||0)} ${i(S("cardsToday"))}</span>
                  <span class="pill">${i(h(a.goal||{}))}</span>
                </div>
                <div class="textbook-actions">
                  <a class="btn primary" href="#textbooks/${g(a.jlpt)}">${i(s.open)}</a>
                  ${et(a.jlpt)?`<a class="btn ghost" href="${g(a.pdfUrl||a.pdfFile||"")}" download="${g((a.pdfFile||a.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(s.pdf)}</a>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g(It(a.jlpt))}">${i(p()==="ru"?"PDF закрыт":"PDF locked")}</button>`}
                  ${et(a.jlpt)?`<button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(a.jlpt)}">${i(s.study)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g(It(a.jlpt))}">${i(p()==="ru"?"Закрыто":"Locked")}</button>`}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Wc(e){const t=String(e?.jlpt||"").toUpperCase(),n=Po(t),s=n.map(o=>`<a class="pill" href="#textbooks/${g(o)}">${i(o)}</a>`).join(""),a=p()==="ru"?{title:"Учебник закрыт",back:"Все учебники",home:"Домой",hint:"Сначала заверши предыдущие уровни, чтобы открыть этот учебник."}:{title:"Textbook locked",back:"All textbooks",home:"Home",hint:"Finish the previous levels first to unlock this textbook."};return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(t||"JLPT")}</p>
            <h1>${i(h(e?.displayTitle||e?.title||{ru:a.title,en:a.title}))}</h1>
            <p>${i(It(t))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(a.back)}</button>
            <button class="btn ghost" type="button" data-action="route" data-route="home">${i(a.home)}</button>
          </div>
        </div>
        <article class="lesson-locked-panel textbook-locked-panel">
          <img class="jlpt-textbook-cover" src="${g(e?.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <div class="jlpt-textbook-body">
            <span class="pill danger-pill">${i(t||"JLPT")}</span>
            <h2>${i(h(e?.displayTitle||e?.title||{ru:a.title,en:a.title}))}</h2>
            <p>${i(a.hint)}</p>
            ${s?`<div class="tag-row">${s}</div>`:""}
            <div class="actions">
              <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(a.back)}</button>
              ${n.length?`<a class="btn ghost" href="#textbooks/${g(n[n.length-1])}">${i(n[n.length-1])}</a>`:""}
            </div>
          </div>
        </article>
      </section>
    `}function Yh(e){const t=String(e?.jlpt||"").toUpperCase();if(!et(t))return Wc(e);if(String(e?.jlpt||"").toUpperCase()==="N5"&&r.n5Textbook?.items?.length)return Zh(e);if(String(e?.jlpt||"").toUpperCase()==="N4"&&r.n4Textbook?.items?.length)return zv(e);if(String(e?.jlpt||"").toUpperCase()==="N3"&&r.n3Textbook?.items?.length)return Sw(e);if(String(e?.jlpt||"").toUpperCase()==="N2"&&r.n2Textbook?.items?.length)return ob(e);r.activeTextbookLevel=e.jlpt,r.activeJlptLesson=e.jlpt;const n=(e.lessonIds||[]).map(f=>r.lessons.find(w=>w.id===f)).filter(Boolean),s=r.lessons.filter(f=>String(f.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()&&!n.includes(f)),a=[...n,...s].slice(0,Math.max(e.lessonCount||n.length,n.length)),o=r.activeTextbookSubroute?a.find(f=>f.id===r.activeTextbookSubroute)||un(e.jlpt)||r.jlptLessons[0]:un(e.jlpt)||r.jlptLessons[0];r.activeTextbookSubroute&&o?.id&&jt(t,o.id,"textbook_page");const l=p()==="ru"?{title:"Страница учебника",back:"Все учебники",pdf:"Скачать PDF",lessonPage:"Страница урока",openLesson:"Открыть урок",outline:"Что внутри",practice:"Практика",lessons:"Уроки учебника",previous:"Предыдущие уровни",next:"Следующие уровни"}:{title:"Textbook page",back:"All textbooks",pdf:"Download PDF",lessonPage:"Lesson page",openLesson:"Open lesson",outline:"Inside the textbook",practice:"Practice",lessons:"Textbook lessons",previous:"Previous levels",next:"Next levels"},c=Eo(e.jlpt)||e.lessonIds?.[0]||a[0]?.id||"",d=h(e.recommendedCycle||{}),u=h(e.goal||{}),m=(e.previousLevels||[]).map(f=>`<a class="pill" href="#textbooks/${g(f)}">${i(f)}</a>`).join(""),v=(e.nextLevels||[]).map(f=>`<a class="pill" href="#textbooks/${g(f)}">${i(f)}</a>`).join("");return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(e.jlpt)} · ${i(l.title)}</p>
            <h1>${i(h(e.displayTitle||e.title||{}))}</h1>
            <p>${i(h(e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(l.back)}</button>
            <a class="btn primary" href="${g(e.pdfUrl||e.pdfFile||"")}" download="${g((e.pdfFile||e.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(l.pdf)}</a>
            <button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(e.jlpt)}">${i(l.lessonPage)}</button>
            ${fs("textbook",{level:e.jlpt})}
          </div>
        </div>

        <article class="jlpt-textbook-hero">
          <img class="jlpt-textbook-cover" src="${g(e.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <div class="jlpt-textbook-body">
            <span class="pill">${i(e.jlpt)}</span>
            <h2>${i(h(e.displayTitle||e.title||{}))}</h2>
            <p>${i(h(e.description||{}))}</p>
            <div class="tag-row">
              <span class="pill">${i(e.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
              <span class="pill">${i(e.kanjiCount||0)} ${i(S("cardsToday"))}</span>
              <span class="pill">${i(u)}</span>
              <span class="pill">${i(d)}</span>
            </div>
            <div class="textbook-route-links">
              ${m?`<div><strong>${i(l.previous)}</strong><div class="tag-row">${m}</div></div>`:""}
              ${v?`<div><strong>${i(l.next)}</strong><div class="tag-row">${v}</div></div>`:""}
            </div>
          </div>
        </article>

        <div class="metric-grid">
          ${T(e.jlpt,e.lessonCount||0,u,R(e.lessonCount||0,Math.max(1,r.jlptLessons.length)))}
          ${T(p()==="ru"?"Кандзи":"Kanji",e.kanjiCount||0,p()==="ru"?"в учебнике":"in textbook",R(e.kanjiCount||0,Math.max(1,r.cards.length)))}
          ${T(p()==="ru"?"Уроки":"Lessons",a.length,l.practice,R(a.length,Math.max(1,r.lessons.filter(f=>String(f.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()).length)))}
          ${T(p()==="ru"?"Переход":"Jump",r.activeTextbookLevel===e.jlpt?1:0,l.lessonPage,r.activeTextbookLevel===e.jlpt?100:0)}
        </div>

        ${Fs(e.jlpt)}

        ${o?`
          <article class="jlpt-lesson-hero">
            <div>
              <span class="pill">${i(e.jlpt)}</span>
              <h2>${i(l.outline)}</h2>
              <p>${i(h(o.summary||{}))}</p>
            </div>
            <div class="mini-stat-row">
              ${T(p()==="ru"?"Грамматика":"Grammar",o.sections?.length||0,l.outline,R(o.sections?.length||0,4))}
              ${T(p()==="ru"?"Практика":"Practice",o.practice?.length||0,l.practice,R(o.practice?.length||0,4))}
            </div>
          </article>
          ${qd(o)}
          <div class="jlpt-section-grid">
            ${o.goals?.length?`
              <article class="jlpt-section-card">
                <h3>${i(p()==="ru"?"Цели уровня":"Level goals")}</h3>
                <ul>${o.goals.map(f=>`<li>${i(h(f))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${o.sections?.map(f=>`
              <article class="jlpt-section-card">
                <h3>${i(h(f.title))}</h3>
                <p>${i(h(f.body))}</p>
                ${Array.isArray(f.points)&&f.points.length?`<ul>${f.points.map(w=>`<li>${i(h(w))}</li>`).join("")}</ul>`:""}
              </article>
            `).join("")}
            ${o.practice?.length?`
              <article class="jlpt-section-card">
                <h3>${i(l.practice)}</h3>
                <ul>${o.practice.map(f=>`<li>${i(h(f))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${o.checkpoint?.length?`
              <article class="jlpt-section-card">
                <h3>${i(p()==="ru"?"Чекпоинт":"Checkpoint")}</h3>
                <ul>${o.checkpoint.map(f=>`<li>${i(h(f))}</li>`).join("")}</ul>
              </article>
            `:""}
          </div>
        `:""}

        <div class="section-head">
          <div>
            <h2>${i(l.lessons)}</h2>
            <p>${i(p()==="ru"?"Карточки, входящие в этот учебник, и быстрые переходы в урок.":"Cards included in this textbook, with quick jumps into lessons.")}</p>
          </div>
          ${c?`<button class="btn primary" type="button" data-action="open-jlpt-lesson-start" data-jlpt="${g(e.jlpt)}">${i(l.openLesson)}</button>`:""}
        </div>
        <div class="lesson-grid">
          ${a.map(f=>Ph(f)).join("")||`<article class="empty-state"><h3>${i(p()==="ru"?"Уроки скоро появятся":"Lessons will appear soon")}</h3></article>`}
        </div>
      </section>
    `}function Zh(e){r.activeTextbookLevel="N5",r.activeJlptLesson="N5",Bs();const t=String(r.activeTextbookSubroute||"");if(t==="final-test")return pv();if(t==="review")return dv();const n=it(t);return n?(Q().currentLessonId=n.id,jt("N5",n.id,"n5_lesson_page"),Jt("N5",n,"n5_lesson_page"),lv(e,n)):ev(e)}function ev(e){const t=yv(),n=Ie(),s=Te(),a=wv(),o=r.n5Meta||{},l=h(o.principle||{});return`
      <section class="page textbooks-page n5-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N5 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(h(o.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <a class="btn ghost" href="${g(o.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N5_expanded_textbook.pdf" target="_blank" rel="noopener">${i(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero">
          <div class="n5-hero-copy">
            <span class="pill">80 ${i(n.kanji)}</span>
            <h2>${i(n.courseMap)}</h2>
            <p>${i(l)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#textbooks/N5/${g(a?.id||"n5-lesson-1")}" data-action="n5-open-lesson" data-id="${g(a?.id||"n5-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n5-review" data-mode="due">${i(n.review)}</button>
              <a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>
            </div>
          </div>
          ${ls("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${T(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,R(t.studied,t.total))}
          ${T(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,R(t.completedLessons,s.length))}
          ${T(n.reviews,t.reviews,n.srs,R(t.reviews,Math.max(t.total,1)))}
          ${T(n.difficult,t.difficult,n.filterDifficult,R(t.difficult,Math.max(t.total,1)))}
        </div>

        <section class="n5-panel">
          <div>
            <h2>${i(n.lessonsTitle)}</h2>
            <p>${i(n.lessonsDescription)}</p>
          </div>
          <div class="n5-lesson-grid">
            ${s.map(c=>tv(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(h((r.n5Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(h(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${Fs("N5")}
      </section>
    `}function tv(e){const t=zi(e.id),n=Ie();let s=e.kanji.filter(a=>Q().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#textbooks/N5/${g(e.id)}" data-action="n5-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${R(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i($v(t))}</small>
      </a>
    `}function Os(){return r.progress.jlptLessonStudy=Kl(ii(),r.progress.jlptLessonStudy||{}),r.progress.jlptLessonStudy}function nv(e,t){return`${String(e||"").toUpperCase()}:${String(t||"")}`}function at(e,t,n="player"){return`jlpt-${String(e||"").toLowerCase()}-${n}-${String(t||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Yn(e,t,n){const s=Os(),a=nv(e,t?.id),o=Pl();let l=s.sessions[a];l||(l={...o,level:String(e||"").toUpperCase(),lessonId:String(t?.id||""),startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()},s.sessions[a]=l),l.level=String(e||l.level||"").toUpperCase(),l.lessonId=String(t?.id||l.lessonId||""),l.answers||(l.answers={}),l.phase=El(l.phase),l.startedAt||(l.startedAt=new Date().toISOString()),l.updatedAt||(l.updatedAt=new Date().toISOString());const c=Array.isArray(n)?n.length:0,d=c?n.findIndex(m=>!l.answers[m.id]):-1,u=Object.keys(l.answers||{}).length;return l.completedAt?(l.phase="done",l.currentIndex=c):d<0?(l.currentIndex=c,l.phase="test",l.testOpenedAt||(l.testOpenedAt=l.updatedAt||new Date().toISOString())):(l.currentIndex=d,l.phase!=="test"&&(l.phase="study")),s.activeSessionKey=a,s.lastUpdatedAt=new Date().toISOString(),{session:l,key:a,answeredCount:u,currentIndex:l.currentIndex,total:c}}function sv(e,t){return!e||!Array.isArray(t)||!t.length||e.session?.phase!=="study"?null:t[Math.min(Math.max(Number(e.currentIndex||0),0),t.length-1)]||null}function rv(e){const t=Array.isArray(e)?e:[];return t.length?`
      <ul class="example-list lesson-study-example-list">
        ${t.slice(0,2).map(ha).join("")}
      </ul>
    `:""}function av(e){const t=ir(e),n=t.length>0;return`
      <details class="lesson-study-details">
        <summary>${i(p()==="ru"?"Показать подробнее":"Show details")}</summary>
        <div class="lesson-study-details-body">
          ${po(e)}
          ${n?`
            <div>
              <h3>${i(S("strokeOrder"))}</h3>
              <ol class="stroke-list lesson-study-strokes">${t.map(s=>`<li>${i(s)}</li>`).join("")}</ol>
            </div>
          `:""}
        </div>
      </details>
    `}function iv(e,t,n,s,a,o,l={}){if(!n)return"";const c=typeof l.examples=="function"?l.examples(n,t)||[]:[],d=typeof l.sentence=="function"?l.sentence(n,t):"",u=typeof l.extra=="function"?l.extra(n,t):"",m=l.answerAction||"jlpt-lesson-answer",v=String(e||n.jlpt||"").toUpperCase(),f=Number(s||0),w=_(n.id),y=t?.id||"";return`
      <article class="lesson-player-card lesson-study-card">
        <div class="lesson-player-kanji">
          <div class="lesson-player-glyph">${i(n.kanji)}</div>
          <div class="lesson-player-kanji-copy">
            <div class="tag-row compact-tags">
              <span class="pill">${i(o.step)} ${i(f+1)}</span>
              <span class="pill">${i(w.state)}</span>
              ${n.jlpt?`<span class="pill">${i(n.jlpt)}</span>`:""}
              ${n.strokes?`<span class="pill">${i(n.strokes)} ${i(S("strokes"))}</span>`:""}
              ${eu(n)}
            </div>
            <h2>${i(I(n))}</h2>
            <p class="label lesson-study-progress-label">${i(e||n.jlpt||"")} · ${i(p()==="ru"?`Кандзи ${Math.min(f+1,a)} из ${a}`:`Kanji ${Math.min(f+1,a)} of ${a}`)}</p>
            <dl class="n5-readings lesson-study-readings">
              ${nu(n,"onyomi",o.onyomi,n.onyomi)}
              ${nu(n,"kunyomi",o.kunyomi,n.kunyomi||n.hiragana)}
            </dl>
            ${rv(c)}
            ${d}
            ${u?`<div class="lesson-study-extra">${u}</div>`:""}
            ${av(n)}
          </div>
        </div>
        <div class="lesson-choice-grid lesson-study-actions">
          <button class="btn success" type="button" data-action="${g(m)}" data-level="${g(v)}" data-lesson="${g(y)}" data-card="${g(n.id)}" data-value="remember">${i(o.remember)}<small>${i(p()==="ru"?"в повторение":"to review")}</small></button>
          <button class="btn danger" type="button" data-action="${g(m)}" data-level="${g(v)}" data-lesson="${g(y)}" data-card="${g(n.id)}" data-value="forget">${i(o.notRemember)}<small>${i(p()==="ru"?"ещё раз":"show again")}</small></button>
        </div>
      </article>
    `}function ov(e,t,n,s,a){return`
      <article class="lesson-player-card lesson-study-complete">
        <div class="lesson-study-complete-copy">
          <span class="pill">${i(p()==="ru"?"Карточки пройдены":"Cards completed")}</span>
          <h2>${i(n.lessonComplete)}</h2>
          <p>${i(p()==="ru"?"Все карточки урока уже отвечены. Тест открыт ниже.":"All lesson cards are answered. The test is open below.")}</p>
          <div class="tag-row">
            <span class="pill">${i(p()==="ru"?`Кандзи ${a}/${s}`:`Kanji ${a}/${s}`)}</span>
            <span class="pill">${i(n.completed)}</span>
          </div>
        </div>
      </article>
    `}function na(e,t,n,s,a={}){const o=Yn(e,t,n),l=sv(o,n),c=Number(o.answeredCount||0),d=Number(o.total||0),u=a.playerId||at(e,t?.id,"player"),m=d?R(c,d):0,v=l?`${p()==="ru"?"Кандзи":"Kanji"} ${Math.min(c+1,d)}/${d}`:o.session?.phase==="done"?p()==="ru"?"Урок завершён":"Lesson complete":p()==="ru"?"Тест открыт":"Test open",f=l?I(l):s.lessonComplete;return`
      <article class="study-card lesson-player lesson-study-player" id="${g(u)}">
        <div class="lesson-player-progress">
          <span>${i(v)}</span>
          <strong>${i(f)}</strong>
          <div class="meter"><i style="width:${m}%"></i></div>
        </div>
        ${l?iv(e,t,l,o.currentIndex,d,s,a):ov(e,t,s,d,c)}
      </article>
    `}function lv(e,t){const n=Ie(),s=Qt(t),a=zs(t),o=zi(t.id),l=Yn("N5",t,s);let c=o==="completed";const d=`n5:${t.id}`;le.has(d)&&(c=!0);const u=c,m=a.filter(D=>Ji(D.id)?.correct).length,v=a.length>0&&m===a.length,f=s.filter(D=>Q().studiedKanji[D.kanji]).length,w=t.kanji.length,y=f>=w,k=!c&&v&&y,A=t.kanji.filter(D=>Q().difficultKanji[D]).join(" · "),b=Te().find(D=>D.order===t.order+1),$=at("N5",t.id,"player"),z=at("N5",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N5 · ${i(n.lesson)} ${t.order}/10</p>
            <h1>${i(h(t.title))}</h1>
            <p>${i(h(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n5-overview">${i(n.backToN5)}</button>
            <button class="btn" type="button" data-action="n5-review" data-mode="difficult">${i(n.difficult)}</button>
            <a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(h(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
          </div>
          <div class="mini-stat-row">
            ${T(n.studiedKanji,`${Math.min(l.answeredCount,w)}/${w}`,n.kanji,R(l.answeredCount,w))}
            ${T(n.exercises,`${m}/${a.length}`,n.correct,R(m,a.length))}
          </div>
        </article>

        ${na("N5",t,s,n,{playerId:$,answerAction:"jlpt-lesson-answer",examples:D=>ot(D),sentence:D=>cv(D,t)})}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(D=>`
              <article>
                <strong>${i(D.jp)}</strong>
                <span>${i(V(D.reading||""))}</span>
                <small>${i(h({ru:D.ru,en:D.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(z)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(D=>Qc(D)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(D=>Q().studiedKanji[D.kanji]).length}/8</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(A||n.none)}</span>
            </div>
            ${!c&&!k?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи (8/8) и упражнения урока.":"Complete all kanji (8/8) and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n5-complete-lesson" data-id="${g(t.id)}" ${u||!k?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n5-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#textbooks/N5/${g(b.id)}" data-action="n5-open-lesson" data-id="${g(b.id)}">${i(n.nextLesson)}</a>`:`<a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>`}
          </div>
        </section>
      </section>
    `}function cv(e,t){const n=t.sentences.find(s=>s.jp.includes(e.kanji))||t.sentences[0];return n?`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
      </div>
    `:""}function Qc(e){const t=Ie(),n=Ji(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&Ln("N5",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(cd(e.id))}" type="text" maxlength="2" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(h(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n5-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Xc(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Xc(e,n)}
      </article>
    `}function Xc(e,t){if(!t)return"";const n=Ie(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function dv(e){const t=Ie(),n=Q().activeReviewMode||"due",s=Kv(n);return`
      <section class="page textbooks-page n5-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N5 · Повторение</p>
            <h1>${i(t.reviewTitle)}</h1>
            <p>${i(t.reviewDescription)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n5-overview">${i(t.backToN5)}</button>
            <a class="btn ghost" href="#textbooks/N5/final-test">${i(t.finalTest)}</a>
          </div>
        </div>
        <div class="jlpt-filter-bar" role="tablist" aria-label="N5 review modes">
          ${(r.n5Exercises?.reviewModes||[]).map(a=>`
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n5-review" data-mode="${g(a.id)}">${i(h(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>uv(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function uv(e,t){const n=Ie(),s=_(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Kn(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(I(e))}</h3>
        <p>${i(ot(e)[0]?.word||e.hiragana||"")} · ${i(ot(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function pv(e){const t=Ie(),n=r.n5FinalTest||{},s=od(),a=Q().finalTest,o=rn(a,s),l=o.answered,c=o.ready,d=r.finalTestBusy;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const v=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==v)&&(a.percent=v),a.completedAt||(a.completedAt=new Date().toISOString()),j()}const u=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,m=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N5 · Final</p>
            <h1>${i(h(n.title||{}))}</h1>
            <p>${i(h(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n5-overview">${i(t.backToN5)}</button>
            <button class="btn" type="button" data-action="n5-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${T(t.questions,`${l}/${s.length}`,t.finalTest,R(l,s.length))}
          ${T(t.score,u||m>0?`${m}%`:"—",`${n.passingPercent||80}%`,u||m>0?m:0)}
          ${T(t.mistakes,u?(a.mistakes||[]).length:0,t.difficult,u?R((a.mistakes||[]).length,s.length):0)}
        </div>

        ${u?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n5-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${Rt("N5","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((v,f)=>gv(v,f)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n5-final-submit" ${d||u?"disabled":""}>${i(u?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Rt("N5","btn ghost")}
          <button class="btn ghost" type="button" data-action="n5-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function gv(e,t){const n=Q().finalTest.answers?.[e.id],s=!!Q().finalTest.completedAt,a=r.finalTestModal&&r.finalTestModal.level==="N5"&&r.finalTestModal.kind==="warning"?r.finalTestModal:null,o=!!(a&&Array.isArray(a.missingIds)&&a.missingIds.includes(e.id));return`
      <article id="${g(Ys("n5",e.id))}" class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":o?"is-missing":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(l=>{const c=n===l.value;return`<button class="btn ${s&&l.value===e.answer?"success":c?"primary":"ghost"}" type="button" data-action="n5-final-answer" data-id="${g(e.id)}" data-value="${g(l.value)}">${i(l.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Ie().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Ie(){return p()==="ru"?{title:"JLPT N5",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",courseMap:"Полноценный интерактивный учебник N5",continue:"Продолжить",review:"Повторять N5",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",reviews:"Повторения",difficult:"Сложные",filterDifficult:"фильтр",srs:"Повторение",lessons:"уроков",lessonsTitle:"10 уроков по 8 кандзи",lessonsDescription:"Каждый урок ведёт от знака к слову, предложению, упражнению, письму и повторению.",reviewPlan:"План повторения на 30 дней",day:"день",lesson:"Урок",backToN5:"Рљ N5",lessonChain:"Кандзи -> слово -> предложение -> практика",lessonChainText:"Сначала узнаёшь знак, затем видишь чтение в слове, читаешь предложение, отвечаешь и отправляешь карточку в повторение.",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Читай вслух: так чтение перестаёт быть отдельной таблицей.",exercisesText:"Смешанная практика работает внутри урока и повторения.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока доступны в повторении.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда все 8 кандзи добавлены в повторение.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",remember:"Помню",notRemember:"Не помню",details:"Показать подробнее",completed:"Пройдено",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N5-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N5.",noReviewCards:"Сейчас нет карточек в этом фильтре.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N5",finalPassed:"N5 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N5",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",courseMap:"Full interactive N5 textbook",continue:"Continue",review:"Review N5",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",reviews:"Reviews",difficult:"Difficult",filterDifficult:"filter",srs:"Review",lessons:"lessons",lessonsTitle:"10 lessons, 8 kanji each",lessonsDescription:"Each lesson moves from sign to word, sentence, exercise, writing, and SRS.",reviewPlan:"30-day review plan",day:"day",lesson:"Lesson",backToN5:"To N5",lessonChain:"Kanji -> word -> sentence -> practice",lessonChainText:"First recognize the sign, then see the reading in a word, read a sentence, answer, and send the card to SRS.",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud so readings stop feeling like a separate table.",exercisesText:"Mixed practice works inside lessons and review.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N5 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when all 8 kanji are in review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N5 review",reviewDescription:"Review due cards, difficult kanji, or the full N5 set.",noReviewCards:"No cards in this filter right now.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N5",finalPassed:"N5 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Vc(){return p()==="ru"?{title:"Чтение и самопроверка",description:"Тексты из md-файла для чтения вслух и проверки понимания по вопросам ниже.",questions:"Проверочные вопросы",noQuestions:"В этом тексте пока нет вопросов.",texts:"текстов",genre:"Жанр",source:"Опора",goal:"Цель"}:{title:"Reading and self-check",description:"Texts from the md file for reading aloud and checking understanding with the questions below.",questions:"Check questions",noQuestions:"No questions are listed for this text.",texts:"texts",genre:"Genre",source:"Source",goal:"Goal"}}function Yc(e){return W(e)||String(e||"").toUpperCase()}function Zc(e){const t=Yc(e);return Array.isArray(r.jlptReadingByLevel?.[t])?r.jlptReadingByLevel[t]:[]}function Bi(e){const t=r.jlptReadingTranslations?.[String(e?.id||"")]||{};return{title:{ru:String(t.titleRu||e?.title||"").trim(),en:String(t.titleEn||e?.title||"").trim()},translation:{ru:String(t.ru||"").trim(),en:String(t.en||"").trim()}}}function ed(e){return V(Vs(String(e?.text||"")).replace(/\s+/g," ").trim())}function mv(e){const t=W(e);return t==="N5"?{maxBlanks:2,maxBlankChars:4}:t==="N4"?{maxBlanks:2,maxBlankChars:5}:t==="N3"?{maxBlanks:3,maxBlankChars:6}:t==="N2"?{maxBlanks:3,maxBlankChars:7}:{maxBlanks:4,maxBlankChars:8}}function fv(){const e=Array.isArray(r.cards)?r.cards:[];if(!e.length)return[];const t=[];return Le.forEach(n=>{Zc(n).forEach((s,a)=>{const o=Bi(s),l=ed(s),c=ro({id:`jlpt-md-${s.id}`,jlpt:n,sentence:s.text||"",reading:l,translationRu:o.translation.ru,translationEn:o.translation.en,source:"markdown",sourceId:String(s.id||""),genre:s.genre||"",goal:s.goal||""},e,mv(n));c&&(c.kind="cloze",c.tiles=nn(c,e),c.source="markdown",c.sourceId=String(s.id||""),c.sourceKind="markdown",c.sourceTitle=o.title,c.title=o.title,c.genre=s.genre||"",c.goal=s.goal||"",c.passageSource=s.source||"",c.questions=Array.isArray(s.questions)?s.questions:[],c.level=n,c.order=a+1,t.push(c))})}),t}function hv(e){const t=Bi(e),n=ed(e),s=n?au(n):"",a=h(t.translation);return`
      <details class="reading-translation-wrap jlpt-reading-translation">
        <summary class="btn ghost reading-translation-toggle" role="button">${i(co())}</summary>
        <div class="reading-translation-panel">
          <div class="reading-translation-row">
            <span>${i(p()==="ru"?"Хирагана":"Hiragana")}</span>
            <strong>${i(n||(p()==="ru"?"Нет данных":"No data"))}</strong>
          </div>
          <div class="reading-translation-row">
            <span>Romaji</span>
            <strong>${i(s||(p()==="ru"?"Нет данных":"No data"))}</strong>
          </div>
          <div class="reading-translation-row">
            <span>${i(co())}</span>
            <strong>${i(a||(p()==="ru"?"Нет данных":"No data"))}</strong>
          </div>
        </div>
      </details>
    `}function Fs(e){const t=Zc(e);if(!t.length)return"";const n=Vc(),s=Yc(e),a=Ia(s,"textbook_reading_block"),o=cr(s);return(a||o)&&j(),`
      <section class="n5-panel jlpt-reading-panel">
        <div class="n5-panel-head jlpt-reading-head">
          <div>
            <p class="eyebrow">${i(s)} · ${i(n.title)}</p>
            <h2>${i(n.title)}</h2>
            <p>${i(n.description)}</p>
          </div>
          <span class="pill">${i(t.length)} ${i(n.texts)}</span>
        </div>
        <div class="jlpt-reading-grid">
          ${t.map((l,c)=>vv(l,s,c)).join("")}
        </div>
      </section>
    `}function vv(e,t,n){const s=Vc(),a=Bi(e),o=Array.isArray(e?.questions)?e.questions:[];return`
      <article class="jlpt-reading-card">
        <div class="jlpt-reading-card-head">
          <div class="tag-row compact-tags">
            <span class="pill">${i(t)}</span>
            <span class="pill">${i(n+1)}</span>
            ${e.genre?`<span class="pill">${i(e.genre)}</span>`:""}
          </div>
          <h3>${i(e.title||`${t}-${n+1}`)}</h3>
          ${a.title.ru||a.title.en?`<p class="jlpt-reading-meta">${i(h(a.title))}</p>`:""}
          ${e.goal?`<p class="jlpt-reading-meta">${i(s.goal)}: ${i(e.goal)}</p>`:""}
          ${e.source?`<p class="jlpt-reading-meta">${i(s.source)}: ${i(e.source)}</p>`:""}
        </div>
        <div class="jlpt-reading-text">${i(e.text||"")}</div>
        ${hv(e)}
        <details class="jlpt-reading-questions">
          <summary>${i(s.questions)}${o.length?` · ${o.length}`:""}</summary>
          ${o.length?`<ol>${o.map(l=>`<li>${i(l)}</li>`).join("")}</ol>`:`<p>${i(s.noQuestions)}</p>`}
        </details>
      </article>
    `}function Bs(){r.progress.n5Course=Fl(li(),r.progress.n5Course||{});const e=Te();!it(r.progress.n5Course.currentLessonId)&&e[0]&&(r.progress.n5Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n5Course.completedLessons[s.id]);return!r.progress.n5Course.currentLessonId&&n&&(r.progress.n5Course.currentLessonId=n.id),r.progress.n5Course}function Q(){return Bs()}function Te(){return r.n5Textbook?.items||[]}function it(e){const t=String(e||"");return t&&Te().find(n=>n.id===t||n.id===`n5-${t}`||n.id.endsWith(`-${t}`))||null}function wv(){return it(Q().currentLessonId)||Te().find(e=>!Q().completedLessons[e.id])||Te()[0]||null}function Qt(e){return(e?.kanji||[]).map(t=>bv(t,e)).filter(Boolean)}function wt(){const e=new Set;return Te().flatMap(t=>Qt(t)).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function bv(e,t=null){const n=String(e||""),s=r.n5KanjiCatalog?.find(l=>l.kanji===n)||null,a=r.cards.find(l=>l.kanji===n&&String(l.jlpt||"").toUpperCase()==="N5")||r.cards.find(l=>l.kanji===n)||null,o=t?.id||s?.lessonId||null;return a&&s?Rr({...a,lessonId:a.lessonId||o},s):a||(s?Rr({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:o,jlpt:"N5",examples:[]},s):null)}function sa(e,t=[]){const n=(Array.isArray(t)?t:[]).slice(0,3).map(s=>({...s,reading:V(s.reading||s.hiragana||s.kana||e.hiragana||"")}));return n.length?n:[{word:e.kanji,reading:V(e.hiragana||""),romaji:e.romaji||"",translation:I(e)}]}function ot(e){return sa(e,e.examples)}function kv(e,t){const n=t?.word||e.kanji,s=V(t?.reading||e.hiragana||"");return p()==="ru"?`Свяжи ${e.kanji} со значением «${I(e)}» и сразу проговори слово: ${n}${s?` (${s})`:""}.`:`Connect ${e.kanji} with "${I(e)}" and say the word right away: ${n}${s?` (${s})`:""}.`}function yv(){const e=wt(),t=Q(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{_(s.id).state!=="New"&&n.add(s.kanji)}),{total:r.n5Meta?.kanjiCount||e.length||80,studied:n.size,completedLessons:Cn(),reviews:e.reduce((s,a)=>s+Number(_(a.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function zi(e){const t=Q(),n=`n5:${e}`;return le.has(n)||t.completedLessons[e]?"completed":it(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function $v(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Cn(){return Te().filter(t=>zi(t.id)==="completed").length}function zs(e){const t=Qt(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n5Exercises?.types||[]).map(k=>[k.type,k.title])),a=Object.fromEntries((r.n5Exercises?.types||[]).map(k=>[k.type,k])),o=k=>a[k]||{rewardXp:r.n5Meta?.rewards?.exerciseXp||7,rewardMoon:r.n5Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:I(c),kanji:c.kanji,cardId:c.id,options:bt({value:c.id,label:I(c)},t.slice(1).map(k=>({value:k.id,label:I(k)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:I(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:bt({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=ot(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word,answer:m.reading,answerLabel:m.reading,kanji:u.kanji,cardId:u.id,options:bt({value:m.reading,label:m.reading},t.flatMap(k=>ot(k).map(A=>({value:A.reading,label:A.reading}))).filter(k=>k.value!==m.reading),3),...o("reading")});const v=n[0];v&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:v.jp,answer:h({ru:v.ru,en:v.en}),answerLabel:h({ru:v.ru,en:v.en}),kanji:t[0].kanji,cardId:t[0].id,options:bt({value:h({ru:v.ru,en:v.en}),label:h({ru:v.ru,en:v.en})},n.slice(1).map(k=>({value:h({ru:k.ru,en:k.en}),label:h({ru:k.ru,en:k.en})})),1),...o("sentence")});const f=t[3]||t[0],w=ot(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Insert the word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Me(w)}В»?`:`Which word matches "${Me(w)}"?`,answer:w.word,answerLabel:w.word,kanji:f.kanji,cardId:f.id,options:bt({value:w.word,label:w.word},t.flatMap(k=>ot(k).map(A=>({value:A.word,label:A.word}))).filter(k=>k.value!==w.word),2),...o("missing-word")});const y=t[4]||t[0];return l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${I(y)}`:`Type the kanji for: ${I(y)}`,answer:y.kanji,answerLabel:y.kanji,kanji:y.kanji,cardId:y.id,options:[],...o("active-recall")}),l.slice(0,r.n5Exercises?.lessonQuestionCount||6).map(k=>({...k,level:"N5",lessonId:e.id}))}function bt(e,t,n=0){const s=new Set([String(e.value)]),a=[e];if(t.forEach(c=>{const d=String(c.value||"");!d||s.has(d)||a.length>=4||(s.add(d),a.push(c))}),wt().forEach(c=>{if(a.length>=4)return;const d={value:c.id,label:c.kanji};s.has(String(d.value))||(s.add(String(d.value)),a.push(d))}),a.length<=1)return a;const l=n%a.length;return[...a.slice(l),...a.slice(0,l)]}function td(e){for(const t of Te()){const n=zs(t).find(s=>s.id===e);if(n)return n}return null}function Ln(e,t,n=""){return r.route==="review"&&r.activeExerciseReviewLevel===String(e||"").toUpperCase()&&String(r.activeExerciseReviewId||"")===String(t||"")&&(!n||String(r.activeExerciseReviewSource||"")===String(n||""))}function ra(e,t,n){return Ln(e,n)?r.reviewExerciseResults?.[String(n)]||null:t.exerciseResults?.[String(n)]||null}function jv(e,t,n){const s=W(t);if(!e||!s||!n)return null;e.exerciseSrs||(e.exerciseSrs={});const a=e.exerciseSrs[String(n.id)]||null;if(a)return Mn(a,{level:s,lessonId:n.lessonId||a.lessonId||"",exerciseId:n.id,cardId:n.cardId||a.cardId||"",kanji:n.kanji||a.kanji||"",type:n.type||a.type||"",title:n.title||a.title||null,prompt:n.prompt||a.prompt||"",answer:n.answer||a.answer||"",answerLabel:n.answerLabel||a.answerLabel||""});const o=cs(s,n.lessonId||"",n.id,n);return e.exerciseSrs[String(n.id)]=o,o}function Sv(e,t,n,s){if(!e||!n)return;const a=W(t);a&&(e.exerciseSrs||(e.exerciseSrs={}),e.exerciseSrs[String(n.id)]=Mn(s,{level:a,lessonId:n.lessonId||s?.lessonId||"",exerciseId:n.id,cardId:n.cardId||s?.cardId||"",kanji:n.kanji||s?.kanji||"",type:n.type||s?.type||"",title:n.title||s?.title||null,prompt:n.prompt||s?.prompt||"",answer:n.answer||s?.answer||"",answerLabel:n.answerLabel||s?.answerLabel||""}))}function aa(e,t,n,s,a,o={}){const l=W(e);if(!l||!t||!n)return;const c=new Date().toISOString(),d=Ln(l,n.id);if(d&&r.reviewExerciseResults?.[n.id])return;const u={selected:s,correct:a,checkedAt:c};d?(r.reviewExerciseResults||(r.reviewExerciseResults={}),r.reviewExerciseResults[n.id]=u,r.reviewQueueLastKind="exercise"):t.exerciseResults[n.id]=u;const m=ne(jv(t,l,n)||cs(l,n.lessonId||"",n.id,n)),v=be(m,a?"good":"again");if(Sv(t,l,n,v),an(m,v,a?"good":"again"),Ne(),a){if(r.progress.totalCorrect+=1,!d&&!t.completedExercises[n.id]){t.completedExercises[n.id]=c,o.markCompleted?.(c),(o.markStudied||(()=>{}))();const w=Number(o.rewardXp||0),y=Number(o.rewardMoon||0);(w||y)&&B(w,y,o.rewardKey||`exercise:${n.id}`)}x("answer_correct")}else{if(r.progress.totalWrong+=1,o.markWrong?.(),(o.markDifficult||(()=>{}))(),n.type==="reading"||n.type==="missing-word"){const w=n.answerLabel||n.answer;w&&o.markWordMistake?.(w)}x("answer_wrong")}H(),j(),d&&(r.pendingFocus="__scroll-top__"),N()}function nd(e){const t=W(e?.level||"");return t==="N5"?{xp:Number(r.n5Meta?.rewards?.exerciseXp||7),moon:Number(r.n5Meta?.rewards?.exerciseMoon||1)}:t==="N4"?{xp:Number(r.n4Meta?.rewards?.readingXp||r.n4Meta?.rewards?.exerciseXp||10),moon:Number(r.n4Meta?.rewards?.readingMoon||r.n4Meta?.rewards?.exerciseMoon||1)}:t==="N3"?{xp:Number(r.n3Meta?.rewards?.readingXp||r.n3Meta?.rewards?.exerciseXp||10),moon:Number(r.n3Meta?.rewards?.readingMoon||r.n3Meta?.rewards?.exerciseMoon||1)}:t==="N2"?{xp:Number(r.n2Meta?.rewards?.readingXp||r.n2Meta?.rewards?.exerciseXp||10),moon:Number(r.n2Meta?.rewards?.readingMoon||r.n2Meta?.rewards?.exerciseMoon||1)}:{xp:Number(r.n1Meta?.rewards?.readingXp||r.n1Meta?.rewards?.exerciseXp||10),moon:Number(r.n1Meta?.rewards?.readingMoon||r.n1Meta?.rewards?.exerciseMoon||1)}}function sd(e,t,n,s={}){if(!e?.id)return;const a=new Date().toISOString(),o=Ln(e.level,e.id,"reading"),l=ne(cn(e)||ln(e));if(r.reviewExerciseResults||(r.reviewExerciseResults={}),e.kind==="cloze"){l.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():l.selectedIndices||[],l.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(A=>({kanji:String(A?.kanji||""),reading:String(A?.reading||"")})).filter(A=>A.kanji):l.selectedTiles||[],l.selectedText=String(t||""),l.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.slice():l.wrongIndexes||[],l.completed=!0,l.completedAt=a,l.correct=!!n,l.answers={cloze:{selected:String(t||""),correct:!!n,checkedAt:a}},Pn(e,l),r.reviewExerciseResults[e.id]=ne(l),n?(r.progress.totalCorrect+=1,x("answer_correct")):(r.progress.totalWrong+=1,x("answer_wrong"));const w=ne(l),y=be(w,n?"good":"again");y.selectedIndices=l.selectedIndices,y.selectedTiles=l.selectedTiles,y.selectedText=l.selectedText,y.wrongIndexes=l.wrongIndexes,y.completed=!0,y.completedAt=a,y.correct=!!n,y.answers=l.answers,Pn(e,y),r.reviewExerciseResults[e.id]=ne(y),an(w,y,n?"good":"again"),Ne();const k=nd(e);n?B(k.xp,k.moon,`reading:${e.id}`):B(Math.max(1,Math.round(k.xp*.35)),0,`reading:${e.id}:again`),H(),j(),o&&(r.pendingFocus="__scroll-top__"),N();return}const c=e.question||e.questions?.[0]||null,d=String(s.questionKey||c?.id||e.id);if(l.answers||(l.answers={}),l.answers[d])return;if(l.answers[d]={selected:String(t||""),correct:!!n,checkedAt:a},l.completed=!!d&&Object.keys(l.answers).length>=ko(),l.completedAt=l.completed?a:l.completedAt||null,l.correct=l.completed?Object.values(l.answers).every(w=>!!w?.correct):!1,l.selectedText=String(t||""),Pn(e,l),r.reviewExerciseResults[e.id]=ne(l),n?(r.progress.totalCorrect+=1,x("answer_correct")):(r.progress.totalWrong+=1,x("answer_wrong")),j(),!l.completed){N();return}const u=ne(l),m=Object.values(l.answers).every(w=>!!w?.correct),v=be(u,m?"good":"again");v.answers=l.answers,v.completed=!0,v.completedAt=a,v.correct=m,v.selectedText=String(t||""),v.wrongQuestions=Object.entries(l.answers).filter(([,w])=>!w?.correct).map(([w])=>w),Pn(e,v),r.reviewExerciseResults[e.id]=ne(v),an(u,v,m?"good":"again"),Ne();const f=nd(e);m?B(f.xp,f.moon,`reading:${e.id}`):B(Math.max(1,Math.round(f.xp*.25)),0,`reading:${e.id}:again`),H(),j(),o&&(r.pendingFocus="__scroll-top__"),N()}function Nv(e){const t=as();if(!t||t.source!=="reading"||!t.exercise)return;const n=t.exercise.question||t.exercise.questions?.[0]||null;if(!n)return;const s=String(e.dataset.value||""),a=s===String(n.answer||"");sd(t.exercise,s,a,{questionKey:String(e.dataset.question||n.id||t.exercise.id)})}function Av(e){const t=as();if(!t||t.source!=="reading"||t.exercise?.kind!=="cloze")return;const n=t.exercise,s=ne(cn(n)||ln(n));if(s.completed||s.selectedIndices?.includes(e))return;const a=Math.max(1,lt(n).length);if(s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():[],s.selectedIndices.length>=a){O(p()==="ru"?"Все пропуски уже заполнены.":"All blank slots are already filled.");return}if(s.selectedIndices.push(e),s.selectedTiles=s.selectedIndices.map(o=>n.tiles?.[o]).filter(Boolean),s.selectedText=s.selectedTiles.map(o=>o.kanji).join(""),Pn(n,s),r.activeExerciseReviewSelection=s.selectedIndices.slice(),r.reviewExerciseResults[n.id]=ne(s),j(),s.selectedIndices.length>=a){rd();return}N()}function xv(){const e=as();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=ne(cn(t)||ln(t));n.completed||!n.selectedIndices?.length||(n.selectedIndices=n.selectedIndices.slice(0,-1),n.selectedTiles=n.selectedIndices.map(s=>t.tiles?.[s]).filter(Boolean),n.selectedText=n.selectedTiles.map(s=>s.kanji).join(""),r.activeExerciseReviewSelection=n.selectedIndices.slice(),r.reviewExerciseResults[t.id]=ne(n),Pn(t,n),j(),N())}function Cv(){const e=as();if(!e||e.source!=="reading"||!e.exercise)return;const t=e.exercise,n=ne(cn(t)||ln(t));n.completed||(n.selectedIndices=[],n.selectedTiles=[],n.selectedText="",n.wrongIndexes=[],r.activeExerciseReviewSelection=[],r.reviewExerciseResults[t.id]=ne(n),Pn(t,n),j(),N())}function rd(){const e=as();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=lt(t),s=ne(cn(t)||ln(t)),a=Array.isArray(s.selectedIndices)?s.selectedIndices:[];if(a.length<n.length){O(p()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.");return}const o=a.map(d=>t.tiles?.[d]).filter(Boolean),l=o.length===n.length&&o.every((d,u)=>d?.kanji===n[u]?.kanji),c=o.map((d,u)=>d?.kanji===n[u]?.kanji?-1:u).filter(d=>d>=0);sd(t,o.map(d=>d.kanji).join(""),l,{selectedIndices:a,selectedTiles:o,wrongIndexes:c})}function Lv(){r.activeExerciseReviewTranslationOpen=!r.activeExerciseReviewTranslationOpen,N()}function Ji(e){return ra("N5",Q(),e)}function Iv(e){const t=td(e.dataset.id);if(!t)return;const n=e.dataset.value||"",s=n===t.answer;ad(t,n,s)}function Tv(e){const t=td(e);if(!t)return;const n=document.getElementById(cd(t.id)),s=n?String(n.value||"").trim():"";ad(t,s,s===t.answer)}function ad(e,t,n){const s=Q();aa("N5",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n5Meta?.rewards?.exerciseXp||7),rewardMoon:Number(e.rewardMoon||r.n5Meta?.rewards?.exerciseMoon||1),rewardKey:`n5_exercise:${e.id}`,markStudied:()=>Zn(e.kanji,e.cardId),markDifficult:()=>Js(e.kanji,e.cardId),markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Rv(e,t,n,s){var v;const a=W(e)||String(e||"").toUpperCase(),o=a==="N5"?it(t):a==="N4"?Xt(t):a==="N3"?Yt(t):a==="N2"?en(t):null;if(!o)return;const l=tc(a,o),c=l.find(f=>String(f.id)===String(n))||te(n);if(!c)return;const d=Yn(a,o,l);if(d.session.answers?.[c.id])return;const u=new Date().toISOString();d.session.answers[c.id]={remembered:!!s,rating:s?"good":"again",answeredAt:u};const m=l.findIndex(f=>String(f.id)===String(c.id));if(d.session.currentIndex=m>=0?m+1:Math.min(Number(d.session.currentIndex||0)+1,l.length),d.session.phase=d.session.currentIndex>=l.length?"test":"study",d.session.updatedAt=u,d.session.phase==="test"?((v=d.session).testOpenedAt||(v.testOpenedAt=u),r.pendingFocus=at(a,o.id,"test")):r.pendingFocus=at(a,o.id,"player"),a==="N5"){id(c.id,s?"good":"again","review");return}if(a==="N4"){vd(c.id,s?"good":"again","review");return}if(a==="N3"){Ld(c.id,s?"good":"again","review");return}a==="N2"&&Bd(c.id,s?"good":"again","review")}function id(e,t,n="review"){const s=te(e);if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,l=a?"hard":t,c=ne(_(s.id)),d=be(c,o,l);r.progress.cards[s.id]=d,an(c,d,l),Ne(),Zn(s.kanji,s.id),Q().srsKanji[s.kanji]=new Date().toISOString(),a?(Js(s.kanji,s.id,!1),r.progress.totalCorrect+=1,B(r.n5Meta?.rewards?.hardXp||2,1,`n5_srs_lesson_hard:${s.id}`),x("answer_correct")):_n(t)?(Js(s.kanji,s.id),r.progress.totalWrong+=1,B(r.n5Meta?.rewards?.hardXp||2,0,`n5_srs_hard:${s.id}`),x("answer_wrong")):(r.progress.totalCorrect+=1,B(t==="easy"?r.n5Meta?.rewards?.knowXp||6:r.n5Meta?.rewards?.addToSrsXp||4,1,`n5_srs:${s.id}`),x("answer_correct")),H(),j(),Oe()}function _v(e){const t=te(e);if(!t)return;const n=Q();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Zn(t.kanji,t.id),B(8,1,`n5_writing:${t.id}`)),H(),j(),N()}function Mv(e){const t=it(e);if(!t)return;const n=Q(),s=`n5:${t.id}`;if(le.has(s)||n.completedLessons[t.id]){N();return}const a=Qt(t);if(a.filter(f=>n.studiedKanji[f.kanji]).length<t.kanji.length){const f=p()==="ru"?"Сначала изучите все кандзи урока (8/8).":"Study all kanji in the lesson first (8/8).";typeof O=="function"&&O(f);return}const l=zs(t);if(!(l.length>0&&l.every(f=>Ji(f.id)?.correct))){const f=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof O=="function"&&O(f);return}le.add(s),Qt(t).forEach(f=>{Zn(f.kanji,f.id),n.srsKanji[f.kanji]=n.srsKanji[f.kanji]||new Date().toISOString();const w=_(f.id);w.state==="New"&&(r.progress.cards[f.id]=be(ne(w),"good"))}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=Te().find(f=>f.order===t.order+1)?.id||t.id;const d=Os(),u=d.sessions[n5SessKey];if(u){const f=new Date().toISOString();u.phase="done",u.completedAt=f,u.updatedAt=f,u.currentIndex=a.length,d.activeSessionKey=n5SessKey,d.lastUpdatedAt=f}Q(),r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.completedLessons=r.progress.n5Course.completedLessons||{},r.progress.n5Course.completedLessons[t.id]=new Date().toISOString(),j({immediate:!0}),Cn()>=10&&Object.keys(n.studiedKanji||{}).length>=80&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N5")||r.progress.unlockedJlptLevels.push("N5"),r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"));const m=r.n5Meta?.rewards?.lessonCompleteXp||45,v=r.n5Meta?.rewards?.lessonCompleteMoon||6;B(m,v,`n5_lesson:${t.id}`),Ze({title:`${Ie().lessonComplete}: ${h(t.title)}`,message:Ie().lessonCompleteText,xp:m,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),x("lesson_complete"),H(),j(),N()}function Zn(e,t=null){if(!e)return;const n=Q();Is(n,e)}function Js(e,t=null,n=!0){if(e&&(Q().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=_(t);s.state!=="New"&&(r.progress.cards[t]=be(ne(s),"again"))}}function Pv(e){const t=it(e);t&&(Q().currentLessonId=t.id,jt("N5",t.id,"n5_lesson_open"),Jt("N5",t,"n5_lesson_open"),Us(t.id))}function Ev(){Us("")}function Dv(e=null){e&&(Q().activeReviewMode=e),Us("review")}function Us(e){r.route="textbooks",r.activeTextbookLevel="N5",r.activeTextbookSubroute=e||null;const t=e?`#textbooks/N5/${encodeURIComponent(e)}`:"#textbooks/N5";Pt(t),j(),ae(),Gt()}function Kv(e="due"){const t=Date.now(),n=Q(),s=wt();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=_(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function od(){const e=wt(),t=Te(),n=r.n5FinalTest?.types||["meaning","reading","sentence","kanji","word","srs"],s=Math.min(r.n5FinalTest?.questionCount||24,Math.max(e.length,1)),a=[];for(let o=0;o<s;o+=1){const l=e[o*7%e.length]||e[o%e.length],c=n[o%n.length],d=t.find(u=>u.kanji.includes(l.kanji))||t[0];a.push(Ov(c,l,d,o))}return a.filter(Boolean)}function Ov(e,t,n,s){const o=ot(t)[0],l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:I(t),options:bt({value:t.id,label:I(t)},wt().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:I(c)})),s)};if(e==="reading")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word,answer:o.reading,answerLabel:o.reading,options:bt({value:o.reading,label:o.reading},wt().flatMap(c=>ot(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:bt({value:c,label:c},Te().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word;return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Me(o),answer:c,answerLabel:c,options:bt({value:c,label:c},wt().flatMap(d=>ot(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value!==c),s)}}return e==="srs"?{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${I(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${I(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n5-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:I(t),answer:t.kanji,answerLabel:t.kanji,options:bt({value:t.kanji,label:t.kanji},wt().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function Fv(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(Q().finalTest.answers[t]=n,j(),N())}function ld(e=!1){if(r.finalTestBusy)return;const t=Q().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){N();return}r.finalTestBusy=!0;try{const n=od(),s=r.n5FinalTest||{},a=Ie(),o=rn(t,n),l=Ck(s),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const $=o.firstMissingId?`#${Ys("n5",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N5",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:$,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=$,j();return}let u=0;const m=[],v=[];n.forEach($=>{const z=String(t.answers?.[$.id]||"").trim();z===$.answer?(u+=1,Zn($.kanji,$.cardId)):(z||v.push($),m.push({id:$.id,kanji:$.kanji,answer:$.answerLabel,selected:z}),Js($.kanji,$.cardId))});const f=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,y=!!t.passed,k=Math.max(0,m.length-v.length);let A=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=f,t.passed=f>=l,t.correctAnswers=u,t.incorrectAnswers=k,t.unansweredAnswers=v.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map($=>$.id),t.completedAt=d,t.lastScore=f,t.bestScore=Math.max(Number(t.bestScore||0),f),t.passedAt=t.passed?y&&t.passedAt||d:t.passedAt||null,!w){const $=Number(s?.rewards?.completeXp||120),z=Number(s?.rewards?.completeMoon||20);A+=$,b+=z,B($,z,"n5_final_complete")}if(t.passed&&!y){const $=Number(s?.rewards?.passXp||80),z=Number(s?.rewards?.passMoon||12);A+=$,b+=z,B($,z,"n5_final_pass")}t.lastRewardXp=A,t.lastRewardMoon=b,Q(),r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.finalTest=r.progress.n5Course.finalTest||{},Object.assign(r.progress.n5Course.finalTest,{percent:t.percent,score:t.score,completedAt:t.completedAt,passed:t.passed,totalQuestions:t.totalQuestions,correctAnswers:t.correctAnswers||t.score}),j({immediate:!0}),r.finalTestModal={kind:"result",level:"N5",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:f,correct:u,incorrect:k,unanswered:v.length,totalQuestions:n.length,rewardXp:A,rewardMoon:b,attempts:t.attempts,threshold:l,reviewAction:"n5-review",reviewAllAction:"n5-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},H(),j()}catch(n){console.error(n),O(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,N()}}function Bv(){Q().finalTest=li().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,j(),N()}function cd(e){return`n5-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function zv(e){r.activeTextbookLevel="N4",r.activeJlptLesson="N4";const t=Ui();t.opened||(t.opened=!0,H(),j());const n=String(r.activeTextbookSubroute||"");if(n==="final-test")return ew();if(n==="review")return Wv();if(n==="kanji")return Xv();if(n==="grammar")return Vv();if(n==="reading")return Yv();if(n==="listening")return Zv();const s=Xt(n);return s?(K().currentLessonId=s.id,jt("N4",s.id,"n4_lesson_page"),Jt("N4",s,"n4_lesson_page"),Gv(e,s)):Jv(e)}function Jv(e){const t=sw(),n=me(),s=He(),a=nw(),o=r.n4Meta||{},l=h(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N4 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(h(o.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <a class="btn ghost" href="${g(o.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N4_textbook_flashkanji_space.pdf" target="_blank" rel="noopener">${i(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero n4-hero">
          <div class="n5-hero-copy">
            <span class="pill">170 ${i(n.kanji)} · 48 ${i(n.grammar)}</span>
            <h2>${i(n.courseMap)}</h2>
            <p>${i(l)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#jlpt/n4/${g(a?.id||"n4-lesson-1")}" data-action="n4-open-lesson" data-id="${g(a?.id||"n4-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n4-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n4-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n4-grammar">${i(n.grammarN4)}</button>
              <button class="btn ghost" type="button" data-action="n4-reading">${i(n.readingN4)}</button>
              <button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${ls("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${T(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,R(t.studied,t.total))}
          ${T(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,R(t.completedLessons,s.length))}
          ${T(n.completedGrammar,`${t.completedGrammar}/${r.n4Meta?.grammarCount||r.n4Grammar.length}`,n.grammar,R(t.completedGrammar,r.n4Meta?.grammarCount||r.n4Grammar.length))}
          ${T(n.reviews,t.reviews,n.srs,R(t.reviews,Math.max(t.total,1)))}
        </div>

        <section class="n5-panel n4-bridge">
          <div>
            <h2>${i(n.n5Bridge)}</h2>
            <p>${i(n.n5BridgeText)}</p>
          </div>
          <div class="n4-bridge-grid">
            ${(o.n5Bridge||[]).map(c=>`<span class="pill">${i(c)}</span>`).join("")}
          </div>
          <div class="textbook-actions">
            <a class="btn ghost" href="#textbooks/N5">${i(n.reviewN5Base)}</a>
          </div>
        </section>

        <section class="n5-panel">
          <div>
            <h2>${i(n.lessonsTitle)}</h2>
            <p>${i(n.lessonsDescription)}</p>
          </div>
          <div class="n5-lesson-grid">
            ${s.map(c=>Uv(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(h((r.n4Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(h(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${Fs("N4")}
      </section>
    `}function Uv(e){const t=md(e.id),n=me();let s=e.kanji.filter(a=>K().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n4/${g(e.id)}" data-action="n4-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip n4-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${R(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(rw(t))}</small>
      </a>
    `}function Gv(e,t){const n=me(),s=Gs(t),a=ia(t),o=md(t.id),l=Yn("N4",t,s);let c=o==="completed";const d=`n4:${t.id}`;le.has(d)&&(c=!0);const u=c,m=a.filter(D=>qi(D.id)?.correct).length,v=a.length>0&&m===a.length,f=s.filter(D=>K().studiedKanji[D.kanji]).length,w=t.kanji.length,y=f>=w,k=!c&&v&&y,A=t.kanji.filter(D=>K().difficultKanji[D]).join(" · "),b=He().find(D=>D.order===t.order+1),$=at("N4",t.id,"player"),z=at("N4",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n4-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · ${i(n.lesson)} ${t.order}/17</p>
            <h1>${i(h(t.title))}</h1>
            <p>${i(h(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${i(n.backToN4)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(h(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.duration)}: ${i(t.durationMinutes||30)} ${i(n.minutes)}</span>
              ${t.grammarFocus.map(D=>`<span class="pill">${i(D)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${T(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,R(l.answeredCount,t.kanji.length))}
            ${T(n.exercises,`${m}/${a.length}`,n.correct,R(m,a.length))}
          </div>
        </article>

        ${na("N4",t,s,n,{playerId:$,answerAction:"jlpt-lesson-answer",examples:D=>We(D),sentence:D=>qv(D,t)})}

        ${Hv(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(D=>`
              <article>
                <strong>${i(D.jp)}</strong>
                <span>${i(V(D.reading||""))}</span>
                <small>${i(h({ru:D.ru,en:D.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(z)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(D=>dd(D)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(D=>K().studiedKanji[D.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(A||n.none)}</span>
            </div>
            ${!c&&!k?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n4-complete-lesson" data-id="${g(t.id)}" ${u||!k?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#jlpt/n4/${g(b.id)}" data-action="n4-open-lesson" data-id="${g(b.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function qv(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(me().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Hv(e){const t=me(),n=(e.grammarFocus||[]).map(s=>Gi(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n4-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n4-section-grid">
          ${n.map(s=>`
            <article class="n4-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(h(s.title))}</h3>
              <p>${i(h(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(h({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n4-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(K().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function dd(e){const t=me(),n=qi(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&Ln("N4",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(yd(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(h(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n4-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${ud(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${ud(e,n)}
      </article>
    `}function ud(e,t){if(!t)return"";const n=me(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Wv(e){const t=me(),n=K().activeReviewMode||"due",s=kw(n);return`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · Повторение</p>
            <h1>${i(t.reviewTitle)}</h1>
            <p>${i(t.reviewDescription)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${i(t.backToN4)}</button>
            <button class="btn ghost" type="button" data-action="n4-final">${i(t.finalTest)}</button>
          </div>
        </div>
        <div class="jlpt-filter-bar" role="tablist" aria-label="N4 review modes">
          ${(r.n4Exercises?.reviewModes||[]).map(a=>`
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n4-review" data-mode="${g(a.id)}">${i(h(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>Qv(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Qv(e,t){const n=me(),s=_(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Kn(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(I(e))}</h3>
        <p>${i(We(e)[0]?.word||e.hiragana||"")} · ${i(We(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Xv(e){const t=me(),n=Fe();return`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · 170</p>
            <h1>${i(t.kanjiListTitle)}</h1>
            <p>${i(t.kanjiListText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${i(t.backToN4)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="all">${i(t.reviewAll)}</button>
          </div>
        </div>
        <div class="n5-kanji-grid n4-kanji-catalog">
          ${n.map((s,a)=>`
            <article class="n5-kanji-card">
              <div class="n5-kanji-topline"><span class="pill">${a+1}/170</span><span class="pill">${i(_(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(I(s))}</h3>
              <p>${i(We(s)[0]?.word||"")} · ${i(We(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n4-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Vv(e){const t=me();return`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · Grammar</p>
            <h1>${i(t.grammarTitle)}</h1>
            <p>${i(t.grammarText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${i(t.backToN4)}</button>
            <button class="btn ghost" type="button" data-action="n4-reading">${i(t.readingN4)}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${T(t.completedGrammar,`${Object.keys(K().completedGrammar||{}).length}/${r.n4Grammar.length}`,t.grammar,R(Object.keys(K().completedGrammar||{}).length,r.n4Grammar.length))}
          ${T(t.questions,r.n4Grammar.length,t.grammar,100)}
        </div>
        <div class="n4-section-grid">
          ${r.n4Grammar.map(n=>{const s=K().grammarResults?.[n.id];return`
              <article class="n4-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(h(n.title))}</h3>
                <p>${i(h(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(V(a.reading||""))}</span><small>${i(h({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(h(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(n.options.length?n.options:[n.answer]).map(a=>`
                    <button class="btn ${s?.selected===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n4-grammar-complete" data-id="${g(n.id)}" data-value="${g(a)}">${i(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${n.answer}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function Yv(e){const t=me(),n=Ia("N4","n4_reading_page"),s=cr("N4");return(n||s)&&j(),`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · Reading</p>
            <h1>${i(t.readingTitle)}</h1>
            <p>${i(t.readingText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${i(t.backToN4)}</button>
            <button class="btn ghost" type="button" data-action="n4-listening">${i(t.listeningN4)}</button>
          </div>
        </div>
        <div class="n4-section-grid">
          ${r.n4Reading.map(a=>pd(a,"reading")).join("")}
        </div>
      </section>
    `}function Zv(e){const t=me();return`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · Listening</p>
            <h1>${i(t.listeningTitle)}</h1>
            <p>${i(t.listeningText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${i(t.backToN4)}</button>
            <button class="btn ghost" type="button" data-action="n4-final">${i(t.finalTest)}</button>
          </div>
        </div>
        <div class="n4-section-grid">
          ${r.n4Listening.map(n=>pd(n,"listening")).join("")}
        </div>
      </section>
    `}function pd(e,t){const n=me(),s=t==="reading"?K().completedReading[e.id]:K().completedListening[e.id],a=t==="reading"?K().readingAnswers:K().listeningAnswers,o=t==="reading"?"n4-reading-complete":"n4-listening-complete";return`
      <article class="n4-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(h(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n4-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=a?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n4-question-block">
              <h3>${i(h(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(v=>`<button class="btn ${u?.selected===v.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(v.value)}">${i(h(v.label||v))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function ew(e){const t=me(),n=r.n4FinalTest||{},s=bd(),a=K().finalTest,o=rn(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),j()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n4-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · Final</p>
            <h1>${i(h(n.title||{}))}</h1>
            <p>${i(h(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${i(t.backToN4)}</button>
            <button class="btn" type="button" data-action="n4-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${T(t.questions,`${l}/${s.length}`,t.finalTest,R(l,s.length))}
          ${T(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${T(t.mistakes,d?(a.mistakes||[]).length:0,t.difficult,d?R((a.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n4-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${Rt("N4","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,v)=>tw(m,v)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n4-final-submit" ${r.finalTestBusy||d?"disabled":""}>${i(d?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Rt("N4","btn ghost")}
          <button class="btn ghost" type="button" data-action="n4-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function tw(e,t){const n=K().finalTest.answers?.[e.id],s=!!K().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n4-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(me().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function me(){return p()==="ru"?{title:"JLPT N4",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N4 после N5",continue:"Продолжить",review:"Повторять N4",openKanji:"Открыть список кандзи",grammarN4:"Грамматика N4",readingN4:"Чтение N4",listeningN4:"Аудирование N4",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"17 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, упражнение, письмо и повторение.",reviewPlan:"План повторения на 45 дней",day:"день",lesson:"Урок",backToN4:"К N4",n5Bridge:"N5 bridge",n5BridgeText:"Перед N4 полезно держать активной базу N5: она станет опорой для более длинных предложений.",reviewN5Base:"Повторить базу N5 перед N4",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> текст -> упражнение -> письмо -> повторение",lessonChainText:"N4 больше не живёт списком знаков: каждый знак сразу получает слово, грамматическую связку и контекст.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика держит смысл предложения.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции из примеров урока, чтобы кандзи сразу работали в предложении.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N4-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N4.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"170 кандзи N4",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"48 грамматических конструкций N4",grammarText:"Короткие рабочие карточки: функция, формула, пример и проверка понимания.",readingTitle:"Тексты для чтения N4",readingText:"Короткие тексты связывают кандзи, слова и грамматику в нормальный контекст.",listeningTitle:"Скрипты для аудирования N4",listeningText:"Диалоги можно читать вслух или использовать как основу для прослушивания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N4",finalPassed:"N4 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N4",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N4 textbook after N5",continue:"Continue",review:"Review N4",openKanji:"Open kanji list",grammarN4:"N4 grammar",readingN4:"N4 reading",listeningN4:"N4 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",reviews:"Reviews",difficult:"Difficult",srs:"Повторение",lessons:"lessons",lessonsTitle:"17 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, exercise, writing, and SRS.",reviewPlan:"45-day review plan",day:"day",lesson:"Lesson",backToN4:"To N4",n5Bridge:"N5 bridge",n5BridgeText:"Keep the N5 base active before N4; it supports longer sentences.",reviewN5Base:"Review N5 base before N4",lessonChain:"Kanji -> word -> grammar -> sentence -> text -> exercise -> writing -> SRS",lessonChainText:"N4 is not a bare list: each sign gets a word, grammar link, and context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries the sentence.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N4 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions from the lesson examples.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N4 review",reviewDescription:"Review due cards, difficult kanji, or the full N4 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"170 N4 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"48 N4 grammar constructions",grammarText:"Compact cards with function, formula, example, and check.",readingTitle:"N4 reading texts",readingText:"Short texts connect kanji, words, and grammar.",listeningTitle:"N4 listening scripts",listeningText:"Read dialogues aloud or use them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N4",finalPassed:"N4 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Ui(){r.progress.n4Course=Bl(ci(),r.progress.n4Course||{});const e=He();!Xt(r.progress.n4Course.currentLessonId)&&e[0]&&(r.progress.n4Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n4Course.completedLessons[s.id]);return!r.progress.n4Course.currentLessonId&&n&&(r.progress.n4Course.currentLessonId=n.id),r.progress.n4Course}function K(){return Ui()}function He(){return r.n4Textbook?.items||[]}function Xt(e){const t=String(e||"");return t&&He().find(n=>n.id===t||n.id===`n4-${t}`||n.id.endsWith(`-${t}`))||null}function nw(){return Xt(K().currentLessonId)||He().find(e=>!K().completedLessons[e.id])||He()[0]||null}function Gs(e){return(e?.kanji||[]).map(t=>gd(t)).filter(Boolean)}function Fe(){const e=new Set;return(r.n4KanjiCatalog||[]).map(t=>gd(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function gd(e){const t=String(e||""),n=r.n4KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N4")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?_r(s,n):s||(n?_r({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[]},n):null)}function Gi(e){const t=String(e||"");return r.n4Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function We(e){return sa(e,e.examples)}function sw(){const e=Fe(),t=K(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{_(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of le)if(a.startsWith("n4:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n4Meta?.kanjiCount||e.length||170,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,reviews:e.reduce((a,o)=>a+Number(_(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function md(e){const t=K(),n=`n4:${e}`;return le.has(n)||t.completedLessons[e]?"completed":Xt(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function rw(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function ia(e){const t=Gs(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n4Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n4Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n4Meta?.rewards?.exerciseXp||9,rewardMoon:r.n4Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:I(c),kanji:c.kanji,cardId:c.id,options:Be({value:c.id,label:I(c)},t.slice(1).map(b=>({value:b.id,label:I(b)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:I(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:Be({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=We(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:Be({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>We(b).map($=>({value:$.reading,label:$.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const v=n[0];v&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:v.jp,answer:h({ru:v.ru,en:v.en}),answerLabel:h({ru:v.ru,en:v.en}),kanji:t[0].kanji,cardId:t[0].id,options:Be({value:h({ru:v.ru,en:v.en}),label:h({ru:v.ru,en:v.en})},n.slice(1).map(b=>({value:h({ru:b.ru,en:b.en}),label:h({ru:b.ru,en:b.en})})),1),...o("sentence")});const f=t[3]||t[0],w=We(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Me(w)}В»?`:`Which word matches "${Me(w)}"?`,answer:w.word||f.kanji,answerLabel:w.word||f.kanji,kanji:f.kanji,cardId:f.id,options:Be({value:w.word||f.kanji,label:w.word||f.kanji},t.flatMap(b=>We(b).map($=>({value:$.word,label:$.word}))).filter(b=>b.value&&b.value!==w.word),2),...o("missing-word")});const y=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${I(y)}`:`Type the kanji for: ${I(y)}`,answer:y.kanji,answerLabel:y.kanji,kanji:y.kanji,cardId:y.id,options:[],...o("active-recall")});const k=Gi(e.grammarFocus?.[0]);k&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:h(k.question||k.explanation),answer:k.answer,answerLabel:k.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:k.id,options:Be({value:k.answer,label:k.answer},k.options.filter(b=>b!==k.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const A=n[1]||n[0];return A&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:A.jp,answer:h({ru:A.ru,en:A.en}),answerLabel:h({ru:A.ru,en:A.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:Be({value:h({ru:A.ru,en:A.en}),label:h({ru:A.ru,en:A.en})},n.filter(b=>b.jp!==A.jp).map(b=>({value:h({ru:b.ru,en:b.en}),label:h({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),l.slice(0,r.n4Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N4",lessonId:e.id}))}function Be(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),Fe().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function fd(e){for(const t of He()){const n=ia(t).find(s=>s.id===e);if(n)return n}return null}function qi(e){return ra("N4",K(),e)}function aw(e){const t=fd(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;hd(t,s,a)}function iw(e){const t=fd(e);if(!t)return;const n=document.getElementById(yd(t.id)),s=n?String(n.value||"").trim():"";hd(t,s,s===t.answer)}function hd(e,t,n){const s=K();aa("N4",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n4Meta?.rewards?.exerciseXp||9),rewardMoon:Number(e.rewardMoon||r.n4Meta?.rewards?.exerciseMoon||1),rewardKey:`n4_exercise:${e.id}`,markStudied:()=>es(e.kanji,e.cardId),markDifficult:()=>qs(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function vd(e,t,n="review"){const s=te(e)||Fe().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,l=a?"hard":t,c=ne(_(s.id)),d=be(c,o,l);r.progress.cards[s.id]=d,an(c,d,l),Ne(),es(s.kanji,s.id),K().srsKanji[s.kanji]=new Date().toISOString(),a?(qs(s.kanji,s.id,!1),r.progress.totalCorrect+=1,B(r.n4Meta?.rewards?.hardXp||2,1,`n4_srs_lesson_hard:${s.id}`),x("answer_correct")):_n(t)?(qs(s.kanji,s.id),r.progress.totalWrong+=1,B(r.n4Meta?.rewards?.hardXp||2,0,`n4_srs_hard:${s.id}`),x("answer_wrong")):(r.progress.totalCorrect+=1,B(t==="easy"?r.n4Meta?.rewards?.knowXp||7:r.n4Meta?.rewards?.addToSrsXp||5,1,`n4_srs:${s.id}`),x("answer_correct")),H(),j(),Oe()}function ow(e){const t=te(e)||Fe().find(s=>String(s.id)===String(e));if(!t)return;const n=K();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},es(t.kanji,t.id),B(9,1,`n4_writing:${t.id}`)),H(),j(),N()}function lw(e){const t=Xt(e);if(!t)return;const n=K(),s=`n4:${t.id}`;if(le.has(s)||n.completedLessons[t.id]){N();return}const a=Gs(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof O=="function"&&O(w);return}const l=ia(t);if(!(l.length>0&&l.every(w=>qi(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof O=="function"&&O(w);return}le.add(s),Gs(t).forEach(w=>{es(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const y=_(w.id);y.state==="New"&&(r.progress.cards[w.id]=be(ne(y),"good"))}),(t.grammarFocus||[]).map(w=>Gi(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=He().find(w=>w.order===t.order+1)?.id||t.id;const d=Os(),u=d.sessions[n4SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n4SessKey,d.lastUpdatedAt=w}K(),Object.keys(n.completedLessons||{}).length>=9&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"),r.progress.unlockedJlptLevels.includes("N3")||r.progress.unlockedJlptLevels.push("N3"));const v=r.n4Meta?.rewards?.lessonCompleteXp||65,f=r.n4Meta?.rewards?.lessonCompleteMoon||8;B(v,f,`n4_lesson:${t.id}`),Ze({title:`${me().lessonComplete}: ${h(t.title)}`,message:me().lessonCompleteText,xp:v,coins:f,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),x("lesson_complete"),H(),j(),N()}function es(e,t=null){if(!e)return;const n=K();Is(n,e)}function qs(e,t=null,n=!0){if(e&&(K().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=_(t);s.state!=="New"&&(r.progress.cards[t]=be(ne(s),"again"))}}function cw(e,t=""){const n=r.n4Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=K();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),B(r.n4Meta?.rewards?.grammarXp||10,r.n4Meta?.rewards?.grammarMoon||1,`n4_grammar:${n.id}`),r.progress.totalCorrect+=1,x("answer_correct")):a||(r.progress.totalWrong+=1,x("answer_wrong")),Ne(),H(),j(),N()}function dw(e,t="0",n=""){wd("reading",e,t,n)}function uw(e,t="0",n=""){wd("listening",e,t,n)}function wd(e,t,n="0",s=""){const o=(e==="reading"?r.n4Reading:r.n4Listening).find(w=>w.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=K(),v=e==="reading"?m.readingAnswers:m.listeningAnswers,f=e==="reading"?m.completedReading:m.completedListening;if(v[u]={selected:s,correct:d,checkedAt:new Date().toISOString()},d&&!f[o.id]){f[o.id]=new Date().toISOString();const w=e==="reading"?r.n4Meta?.rewards?.readingXp||35:r.n4Meta?.rewards?.listeningXp||30,y=e==="reading"?r.n4Meta?.rewards?.readingMoon||4:r.n4Meta?.rewards?.listeningMoon||3;B(w,y,`n4_${e}:${o.id}`),r.progress.totalCorrect+=1,x("answer_correct")}else d||(r.progress.totalWrong+=1,x("answer_wrong"));Ne(),H(),j(),N()}function pw(e){const t=Xt(e);t&&(K().currentLessonId=t.id,jt("N4",t.id,"n4_lesson_open"),Jt("N4",t,"n4_lesson_open"),Vt(t.id))}function gw(){Vt("")}function mw(e=null){e&&(K().activeReviewMode=e),Vt("review")}function fw(){Vt("kanji")}function hw(){Vt("grammar")}function vw(){Vt("reading")}function ww(){Vt("listening")}function bw(){Vt("final-test")}function Vt(e){r.route="textbooks",r.activeTextbookLevel="N4",r.activeTextbookSubroute=e||null,K().opened=!0;const t=e?`#jlpt/n4/${encodeURIComponent(e)}`:"#jlpt/n4";Pt(t),H(),j(),ae(),Gt()}function kw(e="due"){const t=Date.now(),n=K(),s=Fe();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=_(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function bd(){const e=Fe();if(!e.length)return[];const t=r.n4FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n4FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=He().find(d=>d.kanji.includes(o.kanji))||He()[0];s.push(yw(l,o,c,a))}return s.filter(Boolean)}function yw(e,t,n,s){const o=We(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:I(t),options:Be({value:t.id,label:I(t)},Fe().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:I(c)})),s)};if(e==="reading")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:Be({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Fe().flatMap(c=>We(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:Be({value:c,label:c},He().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Me(o),answer:c,answerLabel:c,options:Be({value:c,label:c},Fe().flatMap(d=>We(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n4Grammar[s%Math.max(r.n4Grammar.length,1)];if(c)return{id:`n4-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${h(c.question||c.explanation)}`,answer:c.answer,answerLabel:c.answer,options:Be({value:c.answer,label:c.answer},c.options.filter(d=>d!==c.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n4Reading[s%Math.max(r.n4Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n4-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||h(c.title)} ${h(d.prompt)}`,answer:d.answer,answerLabel:h((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:h(u.label||u)}))}}return e==="srs"?{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${I(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${I(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n4-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:I(t),answer:t.kanji,answerLabel:t.kanji,options:Be({value:t.kanji,label:t.kanji},Fe().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function $w(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(K().finalTest.answers[t]=n,j(),N())}function kd(e=!1){if(r.finalTestBusy)return;const t=K().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){N();return}r.finalTestBusy=!0;try{const n=bd(),s=r.n4FinalTest||{},a=me(),o=rn(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const $=o.firstMissingId?`#${Ys("n4",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N4",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:$,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=$,j();return}let u=0;const m=[],v=[];n.forEach($=>{const z=String(t.answers?.[$.id]||"").trim();if(z===$.answer){if(u+=1,$.kanji&&es($.kanji,$.cardId),$.grammarId){const D=K();D.completedGrammar[$.grammarId]=D.completedGrammar[$.grammarId]||d}}else z||v.push($),m.push({id:$.id,kanji:$.kanji||"",answer:$.answerLabel,selected:z}),$.kanji&&qs($.kanji,$.cardId)});const f=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,y=!!t.passed,k=Math.max(0,m.length-v.length);let A=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=f,t.passed=f>=l,t.correctAnswers=u,t.incorrectAnswers=k,t.unansweredAnswers=v.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map($=>$.id),t.completedAt=d,t.lastScore=f,t.bestScore=Math.max(Number(t.bestScore||0),f),t.passedAt=t.passed?y&&t.passedAt||d:t.passedAt||null,!w){const $=Number(s?.rewards?.completeXp||180),z=Number(s?.rewards?.completeMoon||35);A+=$,b+=z,B($,z,"n4_final_complete")}if(t.passed&&!y){const $=Number(s?.rewards?.passXp||90),z=Number(s?.rewards?.passMoon||15);A+=$,b+=z,B($,z,"n4_final_pass")}t.lastRewardXp=A,t.lastRewardMoon=b,K(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N4",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:f,correct:u,incorrect:k,unanswered:v.length,totalQuestions:n.length,rewardXp:A,rewardMoon:b,attempts:t.attempts,threshold:l,reviewAction:"n4-review",reviewAllAction:"n4-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},H(),j()}catch(n){console.error(n),O(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,N()}}function jw(){K().finalTest=ci().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,j(),N()}function yd(e){return`n4-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Sw(e){r.activeTextbookLevel="N3",r.activeJlptLesson="N3";const t=Wi();t.opened||(t.opened=!0,H(),j());const n=String(r.activeTextbookSubroute||"");if(n==="final-test")return Dw();if(n==="review")return Tw();if(n==="kanji")return _w();if(n==="grammar")return Mw();if(n==="reading")return Pw();if(n==="listening")return Ew();const s=Yt(n);return s?(P().currentLessonId=s.id,jt("N3",s.id,"n3_lesson_page"),Jt("N3",s,"n3_lesson_page"),xw(e,s)):Nw(e)}function Nw(e){const t=Fw(),n=ue(),s=Qe(),a=Ow(),o=r.n3Meta||{},l=h(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N3 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(h(o.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <a class="btn ghost" href="${g(o.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N3_textbook_flashkanji_space.pdf" target="_blank" rel="noopener">${i(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero n3-hero">
          <div class="n5-hero-copy">
            <span class="pill">370 ${i(n.kanji)} · 80 ${i(n.grammar)}</span>
            <h2>${i(n.courseMap)}</h2>
            <p>${i(l)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#jlpt/n3/${g(a?.id||"n3-lesson-1")}" data-action="n3-open-lesson" data-id="${g(a?.id||"n3-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n3-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n3-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n3-grammar">${i(n.grammarN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-reading">${i(n.readingN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-listening">${i(n.listeningN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${ls("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${T(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,R(t.studied,t.total))}
          ${T(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,R(t.completedLessons,s.length))}
          ${T(n.completedGrammar,`${t.completedGrammar}/${r.n3Meta?.grammarCount||r.n3Grammar.length}`,n.grammar,R(t.completedGrammar,r.n3Meta?.grammarCount||r.n3Grammar.length))}
          ${T(n.completedReading,`${t.completedReading}/${r.n3Meta?.readingCount||r.n3Reading.length}`,n.readingN3,R(t.completedReading,r.n3Meta?.readingCount||r.n3Reading.length))}
          ${T(n.completedListening,`${t.completedListening}/${r.n3Meta?.listeningCount||r.n3Listening.length}`,n.listeningN3,R(t.completedListening,r.n3Meta?.listeningCount||r.n3Listening.length))}
          ${T(n.reviews,t.reviews,n.srs,R(t.reviews,Math.max(t.total,1)))}
        </div>

        <section class="n5-panel n3-bridge">
          <div>
            <h2>${i(n.n5Bridge)}</h2>
            <p>${i(n.n5BridgeText)}</p>
          </div>
          <div class="n3-bridge-grid">
            ${(o.n5Bridge||[]).map(c=>`<span class="pill">${i(c)}</span>`).join("")}
          </div>
          <div class="textbook-actions">
            <a class="btn ghost" href="#jlpt/n4">${i(n.reviewN5Base)}</a>
          </div>
        </section>

        <section class="n5-panel">
          <div>
            <h2>${i(n.lessonsTitle)}</h2>
            <p>${i(n.lessonsDescription)}</p>
          </div>
          <div class="n5-lesson-grid">
            ${s.map(c=>Aw(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(h((r.n3Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(h(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${Fs("N3")}
      </section>
    `}function Aw(e){const t=Ad(e.id),n=ue();let s=e.kanji.filter(a=>P().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n3/${g(e.id)}" data-action="n3-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip n3-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${R(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Bw(t))}</small>
      </a>
    `}function xw(e,t){const n=ue(),s=Hs(t),a=oa(t),o=Ad(t.id),l=Yn("N3",t,s);let c=o==="completed";const d=`n3:${t.id}`;le.has(d)&&(c=!0);const u=c,m=a.filter(G=>Xi(G.id)?.correct).length,v=a.length>0&&m===a.length,f=s.filter(G=>P().studiedKanji[G.kanji]).length,w=t.kanji.length,y=f>=w,k=!c&&v&&y,A=t.kanji.filter(G=>P().difficultKanji[G]).join(" · "),b=Qe().find(G=>G.order===t.order+1),$=$d(t),z=$?!!P().completedReading[$.id]:!1,D=at("N3",t.id,"player"),yr=at("N3",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n3-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · ${i(n.lesson)} ${t.order}/37</p>
            <h1>${i(h(t.title))}</h1>
            <p>${i(h(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${i(n.backToN3)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(h(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.duration)}: ${i(t.durationMinutes||30)} ${i(n.minutes)}</span>
              ${t.grammarFocus.map(G=>`<span class="pill">${i(G)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${T(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,R(l.answeredCount,t.kanji.length))}
            ${T(n.exercises,`${m}/${a.length}`,n.correct,R(m,a.length))}
          </div>
        </article>

        ${na("N3",t,s,n,{playerId:D,answerAction:"jlpt-lesson-answer",examples:G=>Xe(G),sentence:G=>Lw(G,t)})}

        ${Iw(t)}

        ${Cw(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(G=>`
              <article>
                <strong>${i(G.jp)}</strong>
                <span>${i(V(G.reading||""))}</span>
                <small>${i(h({ru:G.ru,en:G.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(yr)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(G=>jd(G)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(G=>P().studiedKanji[G.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${$?`<span class="pill">${i(n.miniReadingTitle)}: ${i(z?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(A||n.none)}</span>
            </div>
            ${!c&&!k?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n3-complete-lesson" data-id="${g(t.id)}" ${u||!k?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#jlpt/n3/${g(b.id)}" data-action="n3-open-lesson" data-id="${g(b.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function $d(e){return e?.miniReadingId&&r.n3Reading.find(t=>t.id===e.miniReadingId)||null}function Cw(e){const t=ue(),n=$d(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Hi(n,"reading")}
      </section>
    `:""}function Lw(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(ue().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Iw(e){const t=ue(),n=(e.grammarFocus||[]).map(s=>Qi(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n3-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n3-section-grid">
          ${n.map(s=>`
            <article class="n3-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(h(s.title))}</h3>
              <p>${i(h(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(h({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n3-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(P().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function jd(e){const t=ue(),n=Xi(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&Ln("N3",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(_d(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(h(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n3-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Sd(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Sd(e,n)}
      </article>
    `}function Sd(e,t){if(!t)return"";const n=ue(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Tw(e){const t=ue(),n=P().activeReviewMode||"due",s=sb(n);return`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · Повторение</p>
            <h1>${i(t.reviewTitle)}</h1>
            <p>${i(t.reviewDescription)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${i(t.backToN3)}</button>
            <button class="btn ghost" type="button" data-action="n3-final">${i(t.finalTest)}</button>
          </div>
        </div>
        <div class="jlpt-filter-bar" role="tablist" aria-label="N3 review modes">
          ${(r.n3Exercises?.reviewModes||[]).map(a=>`
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n3-review" data-mode="${g(a.id)}">${i(h(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>Rw(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Rw(e,t){const n=ue(),s=_(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Kn(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(I(e))}</h3>
        <p>${i(Xe(e)[0]?.word||e.hiragana||"")} · ${i(Xe(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function _w(e){const t=ue(),n=ze();return`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · 370</p>
            <h1>${i(t.kanjiListTitle)}</h1>
            <p>${i(t.kanjiListText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${i(t.backToN3)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="all">${i(t.reviewAll)}</button>
          </div>
        </div>
        <div class="n5-kanji-grid n3-kanji-catalog">
          ${n.map((s,a)=>`
            <article class="n5-kanji-card">
              <div class="n5-kanji-topline"><span class="pill">${a+1}/370</span><span class="pill">${i(_(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(I(s))}</h3>
              <p>${i(Xe(s)[0]?.word||"")} · ${i(Xe(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n3-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Mw(e){const t=ue();return`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · Grammar</p>
            <h1>${i(t.grammarTitle)}</h1>
            <p>${i(t.grammarText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${i(t.backToN3)}</button>
            <button class="btn ghost" type="button" data-action="n3-reading">${i(t.readingN3)}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${T(t.completedGrammar,`${Object.keys(P().completedGrammar||{}).length}/${r.n3Grammar.length}`,t.grammar,R(Object.keys(P().completedGrammar||{}).length,r.n3Grammar.length))}
          ${T(t.questions,r.n3Grammar.length,t.grammar,100)}
        </div>
        <div class="n3-section-grid">
          ${r.n3Grammar.map(n=>{const s=P().grammarResults?.[n.id];return`
              <article class="n3-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(h(n.title))}</h3>
                <p>${i(h(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(V(a.reading||""))}</span><small>${i(h({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(h(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(n.options.length?n.options:[n.answer]).map(a=>`
                    <button class="btn ${s?.selected===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n3-grammar-complete" data-id="${g(n.id)}" data-value="${g(a)}">${i(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${n.answer}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function Pw(e){const t=ue(),n=Ia("N3","n3_reading_page"),s=cr("N3");return(n||s)&&j(),`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · Reading</p>
            <h1>${i(t.readingTitle)}</h1>
            <p>${i(t.readingText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${i(t.backToN3)}</button>
            <button class="btn ghost" type="button" data-action="n3-listening">${i(t.listeningN3)}</button>
          </div>
        </div>
        <div class="n3-section-grid">
          ${r.n3Reading.map(a=>Hi(a,"reading")).join("")}
        </div>
      </section>
    `}function Ew(e){const t=ue();return`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · Listening</p>
            <h1>${i(t.listeningTitle)}</h1>
            <p>${i(t.listeningText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${i(t.backToN3)}</button>
            <button class="btn ghost" type="button" data-action="n3-final">${i(t.finalTest)}</button>
          </div>
        </div>
        <div class="n3-section-grid">
          ${r.n3Listening.map(n=>Hi(n,"listening")).join("")}
        </div>
      </section>
    `}function Hi(e,t){const n=ue(),s=t==="reading"?P().completedReading[e.id]:P().completedListening[e.id],a=t==="reading"?P().readingAnswers:P().listeningAnswers,o=t==="reading"?"n3-reading-complete":"n3-listening-complete";return`
      <article class="n3-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(h(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n3-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=a?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n3-question-block">
              <h3>${i(h(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(v=>`<button class="btn ${u?.selected===v.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(v.value)}">${i(h(v.label||v))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function Dw(e){const t=ue(),n=r.n3FinalTest||{},s=Td(),a=P().finalTest,o=rn(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),j()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n3-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · Final</p>
            <h1>${i(h(n.title||{}))}</h1>
            <p>${i(h(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${i(t.backToN3)}</button>
            <button class="btn" type="button" data-action="n3-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${T(t.questions,`${l}/${s.length}`,t.finalTest,R(l,s.length))}
          ${T(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${T(t.mistakes,d?(a.mistakes||[]).length:0,t.difficult,d?R((a.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n3-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${Rt("N3","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,v)=>Kw(m,v)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n3-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Rt("N3","btn ghost")}
          <button class="btn ghost" type="button" data-action="n3-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Kw(e,t){const n=P().finalTest.answers?.[e.id],s=!!P().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n3-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(ue().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function ue(){return p()==="ru"?{title:"JLPT N3",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N3 как мост к среднему уровню",continue:"Продолжить",review:"Повторять N3",openKanji:"Открыть список кандзи",grammarN3:"Грамматика N3",readingN3:"Чтение N3",listeningN3:"Аудирование N3",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Listening",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"37 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, мини-текст, упражнения, письмо и повторение.",reviewPlan:"План повторения на 60 дней",day:"день",lesson:"Урок",backToN3:"К N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"Если база N5 и N4 дырявая, N3 будет ощущаться как стена. Сначала проверь частицы, базовые связки, условные формы и привычные повседневные конструкции.",reviewN5Base:"Повторить N5/N4 перед N3",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> абзац -> чтение -> вывод -> повторение",lessonChainText:"N3 больше не живёт списком знаков: каждый знак сразу входит в слово, грамматическую связку, мини-текст и повторение по смыслу.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, мини-чтение и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, кто, что, почему и к какому выводу ведёт короткий N3-текст.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N3-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N3.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"370 кандзи N3",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"80 грамматических конструкций N3",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном и разговорном контексте.",readingTitle:"Тексты для чтения N3",readingText:"Короткие тексты и lesson mini-readings связывают кандзи, слова, грамматику и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N3",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N3",finalPassed:"N3 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N3",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N3 textbook after N5",continue:"Continue",review:"Review N3",openKanji:"Open kanji list",grammarN3:"N3 grammar",readingN3:"N3 reading",listeningN3:"N3 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"Повторение",lessons:"lessons",lessonsTitle:"37 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, mini reading, exercises, writing, and SRS.",reviewPlan:"60-day review plan",day:"day",lesson:"Lesson",backToN3:"To N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"If the N5 and N4 base is shaky, N3 feels like a wall. Review particles, conditionals, and the everyday support grammar first.",reviewN5Base:"Review N5/N4 before N3",lessonChain:"Kanji -> word -> grammar -> sentence -> paragraph -> reading -> conclusion -> SRS",lessonChainText:"N3 is not a bare list: each sign gets a word, grammar link, mini text, and review context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, mini reading, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N3 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand who, what, why, and what conclusion the short N3 text points to.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N3 review",reviewDescription:"Review due cards, difficult kanji, or the full N3 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"370 N3 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"80 N3 grammar constructions",grammarText:"Compact cards with function, formula, example, and comprehension check.",readingTitle:"N3 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, and conclusions.",listeningTitle:"N3 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N3",finalPassed:"N3 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Wi(){r.progress.n3Course=zl(di(),r.progress.n3Course||{});const e=Qe();!Yt(r.progress.n3Course.currentLessonId)&&e[0]&&(r.progress.n3Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n3Course.completedLessons[s.id]);return!r.progress.n3Course.currentLessonId&&n&&(r.progress.n3Course.currentLessonId=n.id),r.progress.n3Course}function P(){return Wi()}function Qe(){return r.n3Textbook?.items||[]}function Yt(e){const t=String(e||"");return t&&Qe().find(n=>n.id===t||n.id===`n3-${t}`||n.id.endsWith(`-${t}`))||null}function Ow(){return Yt(P().currentLessonId)||Qe().find(e=>!P().completedLessons[e.id])||Qe()[0]||null}function Hs(e){return(e?.kanji||[]).map(t=>Nd(t)).filter(Boolean)}function ze(){const e=new Set;return(r.n3KanjiCatalog||[]).map(t=>Nd(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Nd(e){const t=String(e||""),n=r.n3KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N3")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Mr(s,n):s||(n?Mr({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[]},n):null)}function Qi(e){const t=String(e||"");return r.n3Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function Xe(e){return sa(e,e.examples)}function Fw(){const e=ze(),t=P(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{_(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of le)if(a.startsWith("n3:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n3Meta?.kanjiCount||e.length||370,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,o)=>a+Number(_(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Ad(e){const t=P(),n=`n3:${e}`;return le.has(n)||t.completedLessons[e]?"completed":Yt(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function Bw(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function oa(e){const t=Hs(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n3Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n3Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n3Meta?.rewards?.exerciseXp||10,rewardMoon:r.n3Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:I(c),kanji:c.kanji,cardId:c.id,options:Je({value:c.id,label:I(c)},t.slice(1).map(b=>({value:b.id,label:I(b)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:I(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:Je({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=Xe(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:Je({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>Xe(b).map($=>({value:$.reading,label:$.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const v=n[0];v&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:v.jp,answer:h({ru:v.ru,en:v.en}),answerLabel:h({ru:v.ru,en:v.en}),kanji:t[0].kanji,cardId:t[0].id,options:Je({value:h({ru:v.ru,en:v.en}),label:h({ru:v.ru,en:v.en})},n.slice(1).map(b=>({value:h({ru:b.ru,en:b.en}),label:h({ru:b.ru,en:b.en})})),1),...o("sentence")});const f=t[3]||t[0],w=Xe(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Me(w)}В»?`:`Which word matches "${Me(w)}"?`,answer:w.word||f.kanji,answerLabel:w.word||f.kanji,kanji:f.kanji,cardId:f.id,options:Je({value:w.word||f.kanji,label:w.word||f.kanji},t.flatMap(b=>Xe(b).map($=>({value:$.word,label:$.word}))).filter(b=>b.value&&b.value!==w.word),2),...o("missing-word")});const y=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${I(y)}`:`Type the kanji for: ${I(y)}`,answer:y.kanji,answerLabel:y.kanji,kanji:y.kanji,cardId:y.id,options:[],...o("active-recall")});const k=Qi(e.grammarFocus?.[0]);k&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:h(k.question||k.explanation),answer:k.answer,answerLabel:k.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:k.id,options:Je({value:k.answer,label:k.answer},k.options.filter(b=>b!==k.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const A=n[1]||n[0];return A&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:A.jp,answer:h({ru:A.ru,en:A.en}),answerLabel:h({ru:A.ru,en:A.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:Je({value:h({ru:A.ru,en:A.en}),label:h({ru:A.ru,en:A.en})},n.filter(b=>b.jp!==A.jp).map(b=>({value:h({ru:b.ru,en:b.en}),label:h({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),l.slice(0,r.n3Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N3",lessonId:e.id}))}function Je(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),ze().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function xd(e){for(const t of Qe()){const n=oa(t).find(s=>s.id===e);if(n)return n}return null}function Xi(e){return ra("N3",P(),e)}function zw(e){const t=xd(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Cd(t,s,a)}function Jw(e){const t=xd(e);if(!t)return;const n=document.getElementById(_d(t.id)),s=n?String(n.value||"").trim():"";Cd(t,s,s===t.answer)}function Cd(e,t,n){const s=P();aa("N3",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n3Meta?.rewards?.exerciseXp||10),rewardMoon:Number(e.rewardMoon||r.n3Meta?.rewards?.exerciseMoon||1),rewardKey:`n3_exercise:${e.id}`,markStudied:()=>ts(e.kanji,e.cardId),markDifficult:()=>Ws(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Ld(e,t,n="review"){const s=te(e)||ze().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,l=a?"hard":t,c=ne(_(s.id)),d=be(c,o,l);r.progress.cards[s.id]=d,an(c,d,l),Ne(),ts(s.kanji,s.id),P().srsKanji[s.kanji]=new Date().toISOString(),a?(Ws(s.kanji,s.id,!1),r.progress.totalCorrect+=1,B(r.n3Meta?.rewards?.hardXp||2,1,`n3_srs_lesson_hard:${s.id}`),x("answer_correct")):_n(t)?(Ws(s.kanji,s.id),r.progress.totalWrong+=1,B(r.n3Meta?.rewards?.hardXp||2,0,`n3_srs_hard:${s.id}`),x("answer_wrong")):(r.progress.totalCorrect+=1,B(t==="easy"?r.n3Meta?.rewards?.knowXp||8:r.n3Meta?.rewards?.addToSrsXp||6,1,`n3_srs:${s.id}`),x("answer_correct")),H(),j(),Oe()}function Uw(e){const t=te(e)||ze().find(s=>String(s.id)===String(e));if(!t)return;const n=P();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},ts(t.kanji,t.id),B(9,1,`n3_writing:${t.id}`)),H(),j(),N()}function Gw(e){const t=Yt(e);if(!t)return;const n=P(),s=`n3:${t.id}`;if(le.has(s)||n.completedLessons[t.id]){N();return}const a=Hs(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof O=="function"&&O(w);return}const l=oa(t);if(!(l.length>0&&l.every(w=>Xi(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof O=="function"&&O(w);return}le.add(s),Hs(t).forEach(w=>{ts(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const y=_(w.id);y.state==="New"&&(r.progress.cards[w.id]=be(ne(y),"good"))}),(t.grammarFocus||[]).map(w=>Qi(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=Qe().find(w=>w.order===t.order+1)?.id||t.id;const d=Os(),u=d.sessions[n3SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n3SessKey,d.lastUpdatedAt=w}P(),Object.keys(n.completedLessons||{}).length>=37&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],["N3","N2"].forEach(w=>{r.progress.unlockedJlptLevels.includes(w)||r.progress.unlockedJlptLevels.push(w)}));const v=r.n3Meta?.rewards?.lessonCompleteXp||75,f=r.n3Meta?.rewards?.lessonCompleteMoon||9;B(v,f,`n3_lesson:${t.id}`),Ze({title:`${ue().lessonComplete}: ${h(t.title)}`,message:ue().lessonCompleteText,xp:v,coins:f,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),x("lesson_complete"),H(),j(),N()}function ts(e,t=null){if(!e)return;const n=P();Is(n,e)}function Ws(e,t=null,n=!0){if(e&&(P().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=_(t);s.state!=="New"&&(r.progress.cards[t]=be(ne(s),"again"))}}function qw(e,t=""){const n=r.n3Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=P();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),B(r.n3Meta?.rewards?.grammarXp||11,r.n3Meta?.rewards?.grammarMoon||1,`n3_grammar:${n.id}`),r.progress.totalCorrect+=1,x("answer_correct")):a||(r.progress.totalWrong+=1,x("answer_wrong")),Ne(),H(),j(),N()}function Hw(e,t="0",n=""){Id("reading",e,t,n)}function Ww(e,t="0",n=""){Id("listening",e,t,n)}function Id(e,t,n="0",s=""){const o=(e==="reading"?r.n3Reading:r.n3Listening).find(k=>k.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=P(),v=e==="reading"?m.readingAnswers:m.listeningAnswers,f=e==="reading"?m.completedReading:m.completedListening,w=!!f[o.id];v[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const y=(o.questions||[]).every((k,A)=>v[`${o.id}:${A}`]?.correct);if(d?(r.progress.totalCorrect+=1,x("answer_correct")):(r.progress.totalWrong+=1,x("answer_wrong")),y&&!w){f[o.id]=new Date().toISOString();const k=e==="reading"?r.n3Meta?.rewards?.readingXp||38:r.n3Meta?.rewards?.listeningXp||34,A=e==="reading"?r.n3Meta?.rewards?.readingMoon||4:r.n3Meta?.rewards?.listeningMoon||4;B(k,A,`n3_${e}:${o.id}`)}Ne(),H(),j(),N()}function Qw(e){const t=Yt(e);t&&(P().currentLessonId=t.id,jt("N3",t.id,"n3_lesson_open"),Jt("N3",t,"n3_lesson_open"),Zt(t.id))}function Xw(){Zt("")}function Vw(e=null){e&&(P().activeReviewMode=e),Zt("review")}function Yw(){Zt("kanji")}function Zw(){Zt("grammar")}function eb(){Zt("reading")}function tb(){Zt("listening")}function nb(){Zt("final-test")}function Zt(e){r.route="textbooks",r.activeTextbookLevel="N3",r.activeTextbookSubroute=e||null,P().opened=!0;const t=e?`#jlpt/n3/${encodeURIComponent(e)}`:"#jlpt/n3";Pt(t),H(),j(),ae(),Gt()}function sb(e="due"){const t=Date.now(),n=P(),s=ze();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=_(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Td(){const e=ze();if(!e.length)return[];const t=r.n3FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n3FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=Qe().find(d=>d.kanji.includes(o.kanji))||Qe()[0];s.push(rb(l,o,c,a))}return s.filter(Boolean)}function rb(e,t,n,s){const o=Xe(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:I(t),options:Je({value:t.id,label:I(t)},ze().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:I(c)})),s)};if(e==="reading")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:Je({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},ze().flatMap(c=>Xe(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:Je({value:c,label:c},Qe().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Me(o),answer:c,answerLabel:c,options:Je({value:c,label:c},ze().flatMap(d=>Xe(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n3Grammar[s%Math.max(r.n3Grammar.length,1)];if(c)return{id:`n3-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${h(c.question||c.explanation)}`,answer:c.answer,answerLabel:c.answer,options:Je({value:c.answer,label:c.answer},c.options.filter(d=>d!==c.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n3Reading[s%Math.max(r.n3Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n3-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||h(c.title)} ${h(d.prompt)}`,answer:d.answer,answerLabel:h((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:h(u.label||u)}))}}return e==="srs"?{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${I(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${I(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n3-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:I(t),answer:t.kanji,answerLabel:t.kanji,options:Je({value:t.kanji,label:t.kanji},ze().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function ab(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(P().finalTest.answers[t]=n,j(),N())}function Rd(e=!1){if(r.finalTestBusy)return;const t=P().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){N();return}r.finalTestBusy=!0;try{const n=Td(),s=r.n3FinalTest||{},a=ue(),o=rn(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const $=o.firstMissingId?`#${Ys("n3",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N3",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:$,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=$,j();return}let u=0;const m=[],v=[];n.forEach($=>{const z=String(t.answers?.[$.id]||"").trim();if(z===$.answer){if(u+=1,$.kanji&&ts($.kanji,$.cardId),$.grammarId){const D=P();D.completedGrammar[$.grammarId]=D.completedGrammar[$.grammarId]||d}}else z||v.push($),m.push({id:$.id,kanji:$.kanji||"",answer:$.answerLabel,selected:z}),$.kanji&&Ws($.kanji,$.cardId)});const f=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,y=!!t.passed,k=Math.max(0,m.length-v.length);let A=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=f,t.passed=f>=l,t.correctAnswers=u,t.incorrectAnswers=k,t.unansweredAnswers=v.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map($=>$.id),t.completedAt=d,t.lastScore=f,t.bestScore=Math.max(Number(t.bestScore||0),f),t.passedAt=t.passed?y&&t.passedAt||d:t.passedAt||null,!w){const $=Number(s?.rewards?.completeXp||220),z=Number(s?.rewards?.completeMoon||40);A+=$,b+=z,B($,z,"n3_final_complete")}if(t.passed&&!y){const $=Number(s?.rewards?.passXp||110),z=Number(s?.rewards?.passMoon||18);A+=$,b+=z,B($,z,"n3_final_pass")}t.lastRewardXp=A,t.lastRewardMoon=b,P(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N3",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:f,correct:u,incorrect:k,unanswered:v.length,totalQuestions:n.length,rewardXp:A,rewardMoon:b,attempts:t.attempts,threshold:l,reviewAction:"n3-review",reviewAllAction:"n3-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},H(),j()}catch(n){console.error(n),O(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,N()}}function ib(){P().finalTest=di().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,j(),N()}function _d(e){return`n3-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function ob(e){r.activeTextbookLevel="N2",r.activeJlptLesson="N2";const t=Yi();t.opened||(t.opened=!0,H(),j());const n=String(r.activeTextbookSubroute||"");if(n==="final-test")return kb();if(n==="review")return mb();if(n==="kanji")return hb();if(n==="grammar")return vb();if(n==="reading")return wb();if(n==="listening")return bb();const s=en(n);return s?(E().currentLessonId=s.id,jt("N2",s.id,"n2_lesson_page"),Jt("N2",s,"n2_lesson_page"),db(e,s)):lb(e)}function lb(e){const t=jb(),n=pe(),s=Ve(),a=$b(),o=r.n2Meta||{},l=h(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N2 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(h(o.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <a class="btn ghost" href="${g(o.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N2_textbook_flashkanji_space.pdf" target="_blank" rel="noopener">${i(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero n2-hero">
          <div class="n5-hero-copy">
            <span class="pill">${i(o.kanjiCount||380)} ${i(n.kanji)} · ${i(o.grammarCount||r.n2Grammar.length||120)} ${i(n.grammar)}</span>
            <h2>${i(n.courseMap)}</h2>
            <p>${i(l)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#jlpt/n2/${g(a?.id||"n2-lesson-1")}" data-action="n2-open-lesson" data-id="${g(a?.id||"n2-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n2-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n2-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n2-grammar">${i(n.grammarN2)}</button>
              <button class="btn ghost" type="button" data-action="n2-reading">${i(n.readingN2)}</button>
              <button class="btn ghost" type="button" data-action="n2-listening">${i(n.listeningN2)}</button>
              <button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${ls("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${T(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,R(t.studied,t.total))}
          ${T(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,R(t.completedLessons,s.length))}
          ${T(n.completedGrammar,`${t.completedGrammar}/${r.n2Meta?.grammarCount||r.n2Grammar.length}`,n.grammar,R(t.completedGrammar,r.n2Meta?.grammarCount||r.n2Grammar.length))}
          ${T(n.completedReading,`${t.completedReading}/${r.n2Meta?.readingCount||r.n2Reading.length}`,n.readingN2,R(t.completedReading,r.n2Meta?.readingCount||r.n2Reading.length))}
          ${T(n.completedListening,`${t.completedListening}/${r.n2Meta?.listeningCount||r.n2Listening.length}`,n.listeningN2,R(t.completedListening,r.n2Meta?.listeningCount||r.n2Listening.length))}
          ${T(n.reviews,t.reviews,n.srs,R(t.reviews,Math.max(t.total,1)))}
        </div>

        <section class="n5-panel n2-bridge">
          <div>
            <h2>${i(n.n5Bridge)}</h2>
            <p>${i(n.n5BridgeText)}</p>
          </div>
          <div class="n2-bridge-grid">
            ${(o.n5Bridge||[]).map(c=>`<span class="pill">${i(c)}</span>`).join("")}
          </div>
          <div class="textbook-actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${i(n.reviewN5Base)}</button>
          </div>
        </section>

        <section class="n5-panel">
          <div>
            <h2>${i(n.lessonsTitle)}</h2>
            <p>${i(n.lessonsDescription)}</p>
          </div>
          <div class="n5-lesson-grid">
            ${s.map(c=>cb(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(h((r.n2Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(h(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${Fs("N2")}
      </section>
    `}function cb(e){const t=Kd(e.id),n=pe();let s=e.kanji.filter(a=>E().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n2/${g(e.id)}" data-action="n2-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip n2-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${R(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Sb(t))}</small>
      </a>
    `}function db(e,t){const n=pe(),s=Qs(t),a=la(t),o=Kd(t.id),l=Yn("N2",t,s);let c=o==="completed";const d=`n2:${t.id}`;le.has(d)&&(c=!0);const u=c,m=a.filter(G=>eo(G.id)?.correct).length,v=a.length>0&&m===a.length,f=s.filter(G=>E().studiedKanji[G.kanji]).length,w=t.kanji.length,y=f>=w,k=!c&&v&&y,A=t.kanji.filter(G=>E().difficultKanji[G]).join(" · "),b=Ve().find(G=>G.order===t.order+1),$=Md(t),z=$?!!E().completedReading[$.id]:!1,D=at("N2",t.id,"player"),yr=at("N2",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n2-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · ${i(n.lesson)} ${t.order}/38</p>
            <h1>${i(h(t.title))}</h1>
            <p>${i(h(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${i(n.backToN2)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(h(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.duration)}: ${i(t.durationMinutes||30)} ${i(n.minutes)}</span>
              ${t.grammarFocus.map(G=>`<span class="pill">${i(G)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${T(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,R(l.answeredCount,t.kanji.length))}
            ${T(n.exercises,`${m}/${a.length}`,n.correct,R(m,a.length))}
          </div>
        </article>

        ${na("N2",t,s,n,{playerId:D,answerAction:"jlpt-lesson-answer",examples:G=>Ye(G),sentence:G=>pb(G,t)})}

        ${gb(t)}

        ${ub(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(G=>`
              <article>
                <strong>${i(G.jp)}</strong>
                <span>${i(V(G.reading||""))}</span>
                <small>${i(h({ru:G.ru,en:G.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(yr)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(G=>Pd(G)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(G=>E().studiedKanji[G.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${$?`<span class="pill">${i(n.miniReadingTitle)}: ${i(z?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(A||n.none)}</span>
            </div>
            ${!c&&!k?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n2-complete-lesson" data-id="${g(t.id)}" ${u||!k?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#jlpt/n2/${g(b.id)}" data-action="n2-open-lesson" data-id="${g(b.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function Md(e){return e?.miniReadingId&&r.n2Reading.find(t=>t.id===e.miniReadingId)||null}function ub(e){const t=pe(),n=Md(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Vi(n,"reading")}
      </section>
    `:""}function pb(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(V(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(pe().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function gb(e){const t=pe(),n=(e.grammarFocus||[]).map(s=>Zi(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n2-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n2-section-grid">
          ${n.map(s=>`
            <article class="n2-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(h(s.title))}</h3>
              <p>${i(h(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(h({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n2-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(E().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function Pd(e){const t=pe(),n=eo(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&Ln("N2",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(Gd(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(h(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n2-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Ed(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Ed(e,n)}
      </article>
    `}function Ed(e,t){if(!t)return"";const n=pe(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function mb(e){const t=pe(),n=E().activeReviewMode||"due",s=Fb(n);return`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · Повторение</p>
            <h1>${i(t.reviewTitle)}</h1>
            <p>${i(t.reviewDescription)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${i(t.backToN2)}</button>
            <button class="btn ghost" type="button" data-action="n2-final">${i(t.finalTest)}</button>
          </div>
        </div>
        <div class="jlpt-filter-bar" role="tablist" aria-label="N2 review modes">
          ${(r.n2Exercises?.reviewModes||[]).map(a=>`
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n2-review" data-mode="${g(a.id)}">${i(h(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>fb(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function fb(e,t){const n=pe(),s=_(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Kn(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(I(e))}</h3>
        <p>${i(Ye(e)[0]?.word||e.hiragana||"")} · ${i(Ye(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function hb(e){const t=pe(),n=Ue();return`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · 380</p>
            <h1>${i(t.kanjiListTitle)}</h1>
            <p>${i(t.kanjiListText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${i(t.backToN2)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="all">${i(t.reviewAll)}</button>
          </div>
        </div>
        <div class="n5-kanji-grid n2-kanji-catalog">
          ${n.map((s,a)=>`
            <article class="n5-kanji-card">
              <div class="n5-kanji-topline"><span class="pill">${a+1}/380</span><span class="pill">${i(_(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(I(s))}</h3>
              <p>${i(Ye(s)[0]?.word||"")} · ${i(Ye(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n2-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function vb(e){const t=pe();return`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · Grammar</p>
            <h1>${i(t.grammarTitle)}</h1>
            <p>${i(t.grammarText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${i(t.backToN2)}</button>
            <button class="btn ghost" type="button" data-action="n2-reading">${i(t.readingN2)}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${T(t.completedGrammar,`${Object.keys(E().completedGrammar||{}).length}/${r.n2Grammar.length}`,t.grammar,R(Object.keys(E().completedGrammar||{}).length,r.n2Grammar.length))}
          ${T(t.questions,r.n2Grammar.length,t.grammar,100)}
        </div>
        <div class="n2-section-grid">
          ${r.n2Grammar.map(n=>{const s=E().grammarResults?.[n.id];return`
              <article class="n2-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(h(n.title))}</h3>
                <p>${i(h(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(V(a.reading||""))}</span><small>${i(h({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(h(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(n.options.length?n.options:[n.answer]).map(a=>`
                    <button class="btn ${s?.selected===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n2-grammar-complete" data-id="${g(n.id)}" data-value="${g(a)}">${i(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${n.answer}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function wb(e){const t=pe(),n=Ia("N2","n2_reading_page"),s=cr("N2");return(n||s)&&j(),`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · Reading</p>
            <h1>${i(t.readingTitle)}</h1>
            <p>${i(t.readingText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${i(t.backToN2)}</button>
            <button class="btn ghost" type="button" data-action="n2-listening">${i(t.listeningN2)}</button>
          </div>
        </div>
        <div class="n2-section-grid">
          ${r.n2Reading.map(a=>Vi(a,"reading")).join("")}
        </div>
      </section>
    `}function bb(e){const t=pe();return`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · Listening</p>
            <h1>${i(t.listeningTitle)}</h1>
            <p>${i(t.listeningText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${i(t.backToN2)}</button>
            <button class="btn ghost" type="button" data-action="n2-final">${i(t.finalTest)}</button>
          </div>
        </div>
        <div class="n2-section-grid">
          ${r.n2Listening.map(n=>Vi(n,"listening")).join("")}
        </div>
      </section>
    `}function Vi(e,t){const n=pe(),s=t==="reading"?E().completedReading[e.id]:E().completedListening[e.id],a=t==="reading"?E().readingAnswers:E().listeningAnswers,o=t==="reading"?"n2-reading-complete":"n2-listening-complete";return`
      <article class="n2-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(h(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n2-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=a?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n2-question-block">
              <h3>${i(h(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(v=>`<button class="btn ${u?.selected===v.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(v.value)}">${i(h(v.label||v))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function kb(e){const t=pe(),n=r.n2FinalTest||{},s=Jd(),a=E().finalTest,o=rn(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),j()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n2-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · Final</p>
            <h1>${i(h(n.title||{}))}</h1>
            <p>${i(h(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${i(t.backToN2)}</button>
            <button class="btn" type="button" data-action="n2-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${T(t.questions,`${l}/${s.length}`,t.finalTest,R(l,s.length))}
          ${T(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${T(t.mistakes,d?(a.mistakes||[]).length:0,t.difficult,d?R((a.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n2-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${Rt("N2","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,v)=>yb(m,v)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n2-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Rt("N2","btn ghost")}
          <button class="btn ghost" type="button" data-action="n2-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function yb(e,t){const n=E().finalTest.answers?.[e.id],s=!!E().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n2-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(pe().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function pe(){return p()==="ru"?{title:"JLPT N2",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N2: абзацы, аргументы, выводы и позиция автора",continue:"Продолжить",review:"Повторять N2",openKanji:"Открыть список кандзи",grammarN2:"Грамматика N2",readingN2:"Чтение N2",listeningN2:"Аудирование N2",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"38 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, абзац, авторскую позицию, вывод, письмо и повторение.",reviewPlan:"План повторения на 90 дней",day:"день",lesson:"Урок",backToN2:"К N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"Если база N5, N4 или N3 дырявая, N2 будет ощущаться как стена. Перед стартом проверь частицы, связки, условные формы, N3-грамматику и навык видеть причину, уступку и вывод в абзаце.",reviewN5Base:"Повторить N5/N4/N3 перед N2",lessonChain:"Кандзи -> слово -> грамматика -> абзац -> позиция автора -> вывод -> повторение",lessonChainText:"N2 больше не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, о чём текст, где причина, где уступка, что противопоставлено и к какому выводу ведёт короткий N2-абзац.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N2-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N2.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"380 кандзи N2",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"120 грамматических конструкций N2",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе и живом контексте.",readingTitle:"Тексты для чтения N2",readingText:"Короткие тексты и mini-readings уроков связывают кандзи, слова, грамматику, авторскую позицию и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N2",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N2",finalPassed:"N2 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N2",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N2 textbook: paragraphs, arguments, conclusions, and author stance",continue:"Continue",review:"Review N2",openKanji:"Open kanji list",grammarN2:"N2 grammar",readingN2:"N2 reading",listeningN2:"N2 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"38 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, paragraph logic, author stance, writing, and SRS.",reviewPlan:"90-day review plan",day:"day",lesson:"Lesson",backToN2:"To N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"If the N5, N4, or N3 base is shaky, N2 feels like a wall. Review particles, support grammar, N3 connectors, and the habit of spotting cause, concession, and conclusion in a paragraph.",reviewN5Base:"Review N5/N4/N3 before N2",lessonChain:"Kanji -> word -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N2 is not a bare list: each sign gets a word, a formal link, a mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N2 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N2 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N2 review",reviewDescription:"Review due cards, difficult kanji, or the full N2 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"380 N2 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"120 N2 grammar constructions",grammarText:"Compact cards with function, formula, example, and a comprehension check for practical written Japanese.",readingTitle:"N2 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N2 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N2",finalPassed:"N2 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Yi(){r.progress.n2Course=Jl(ui(),r.progress.n2Course||{});const e=Ve();!en(r.progress.n2Course.currentLessonId)&&e[0]&&(r.progress.n2Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n2Course.completedLessons[s.id]);return!r.progress.n2Course.currentLessonId&&n&&(r.progress.n2Course.currentLessonId=n.id),r.progress.n2Course}function E(){return Yi()}function Ve(){return r.n2Textbook?.items||[]}function en(e){const t=String(e||"");return t&&Ve().find(n=>n.id===t||n.id===`n2-${t}`||n.id.endsWith(`-${t}`))||null}function $b(){return en(E().currentLessonId)||Ve().find(e=>!E().completedLessons[e.id])||Ve()[0]||null}function Qs(e){return(e?.kanji||[]).map(t=>Dd(t)).filter(Boolean)}function Ue(){const e=new Set;return(r.n2KanjiCatalog||[]).map(t=>Dd(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Dd(e){const t=String(e||""),n=r.n2KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N2")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Pr(s,n):s||(n?Pr({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[]},n):null)}function Zi(e){const t=String(e||"");return r.n2Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function Ye(e){return sa(e,e.examples)}function jb(){const e=Ue(),t=E(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{_(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of le)if(a.startsWith("n2:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n2Meta?.kanjiCount||e.length||380,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,o)=>a+Number(_(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Kd(e){const t=E(),n=`n2:${e}`;return le.has(n)||t.completedLessons[e]?"completed":en(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function Sb(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function la(e){const t=Qs(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n2Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n2Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n2Meta?.rewards?.exerciseXp||11,rewardMoon:r.n2Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:I(c),kanji:c.kanji,cardId:c.id,options:Ge({value:c.id,label:I(c)},t.slice(1).map(b=>({value:b.id,label:I(b)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:I(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:Ge({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=Ye(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:Ge({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>Ye(b).map($=>({value:$.reading,label:$.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const v=n[0];v&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:v.jp,answer:h({ru:v.ru,en:v.en}),answerLabel:h({ru:v.ru,en:v.en}),kanji:t[0].kanji,cardId:t[0].id,options:Ge({value:h({ru:v.ru,en:v.en}),label:h({ru:v.ru,en:v.en})},n.slice(1).map(b=>({value:h({ru:b.ru,en:b.en}),label:h({ru:b.ru,en:b.en})})),1),...o("sentence")});const f=t[3]||t[0],w=Ye(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Me(w)}В»?`:`Which word matches "${Me(w)}"?`,answer:w.word||f.kanji,answerLabel:w.word||f.kanji,kanji:f.kanji,cardId:f.id,options:Ge({value:w.word||f.kanji,label:w.word||f.kanji},t.flatMap(b=>Ye(b).map($=>({value:$.word,label:$.word}))).filter(b=>b.value&&b.value!==w.word),2),...o("missing-word")});const y=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${I(y)}`:`Type the kanji for: ${I(y)}`,answer:y.kanji,answerLabel:y.kanji,kanji:y.kanji,cardId:y.id,options:[],...o("active-recall")});const k=Zi(e.grammarFocus?.[0]);k&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:h(k.question||k.explanation),answer:k.answer,answerLabel:k.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:k.id,options:Ge({value:k.answer,label:k.answer},k.options.filter(b=>b!==k.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const A=n[1]||n[0];return A&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:A.jp,answer:h({ru:A.ru,en:A.en}),answerLabel:h({ru:A.ru,en:A.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:Ge({value:h({ru:A.ru,en:A.en}),label:h({ru:A.ru,en:A.en})},n.filter(b=>b.jp!==A.jp).map(b=>({value:h({ru:b.ru,en:b.en}),label:h({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),l.slice(0,r.n2Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N2",lessonId:e.id}))}function Ge(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),Ue().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function Od(e){for(const t of Ve()){const n=la(t).find(s=>s.id===e);if(n)return n}return null}function eo(e){return ra("N2",E(),e)}function Nb(e){const t=Od(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Fd(t,s,a)}function Ab(e){const t=Od(e);if(!t)return;const n=document.getElementById(Gd(t.id)),s=n?String(n.value||"").trim():"";Fd(t,s,s===t.answer)}function Fd(e,t,n){const s=E();aa("N2",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n2Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||r.n2Meta?.rewards?.exerciseMoon||1),rewardKey:`n2_exercise:${e.id}`,markStudied:()=>ns(e.kanji,e.cardId),markDifficult:()=>Xs(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Bd(e,t,n="review"){const s=te(e)||Ue().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,l=a?"hard":t,c=ne(_(s.id)),d=be(c,o,l);r.progress.cards[s.id]=d,an(c,d,l),Ne(),ns(s.kanji,s.id),E().srsKanji[s.kanji]=new Date().toISOString(),a?(Xs(s.kanji,s.id,!1),r.progress.totalCorrect+=1,B(r.n2Meta?.rewards?.hardXp||2,1,`n2_srs_lesson_hard:${s.id}`),x("answer_correct")):_n(t)?(Xs(s.kanji,s.id),r.progress.totalWrong+=1,B(r.n2Meta?.rewards?.hardXp||2,0,`n2_srs_hard:${s.id}`),x("answer_wrong")):(r.progress.totalCorrect+=1,B(t==="easy"?r.n2Meta?.rewards?.knowXp||9:r.n2Meta?.rewards?.addToSrsXp||7,1,`n2_srs:${s.id}`),x("answer_correct")),H(),j(),Oe()}function xb(e){const t=te(e)||Ue().find(s=>String(s.id)===String(e));if(!t)return;const n=E();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},ns(t.kanji,t.id),B(9,1,`n2_writing:${t.id}`)),H(),j(),N()}function Cb(e){const t=en(e);if(!t)return;const n=E(),s=`n2:${t.id}`;if(le.has(s)||n.completedLessons[t.id]){N();return}const a=Qs(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof O=="function"&&O(w);return}const l=la(t);if(!(l.length>0&&l.every(w=>eo(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof O=="function"&&O(w);return}le.add(s),Qs(t).forEach(w=>{ns(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const y=_(w.id);y.state==="New"&&(r.progress.cards[w.id]=be(ne(y),"good"))}),(t.grammarFocus||[]).map(w=>Zi(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=Ve().find(w=>w.order===t.order+1)?.id||t.id;const d=Os(),u=d.sessions[n2SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n2SessKey,d.lastUpdatedAt=w}E(),Object.keys(n.completedLessons||{}).length>=38&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],["N2","N1"].forEach(w=>{r.progress.unlockedJlptLevels.includes(w)||r.progress.unlockedJlptLevels.push(w)}));const v=r.n2Meta?.rewards?.lessonCompleteXp||85,f=r.n2Meta?.rewards?.lessonCompleteMoon||10;B(v,f,`n2_lesson:${t.id}`),Ze({title:`${pe().lessonComplete}: ${h(t.title)}`,message:pe().lessonCompleteText,xp:v,coins:f,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),x("lesson_complete"),H(),j(),N()}function ns(e,t=null){if(!e)return;const n=E();Is(n,e)}function Xs(e,t=null,n=!0){if(e&&(E().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=_(t);s.state!=="New"&&(r.progress.cards[t]=be(ne(s),"again"))}}function Lb(e,t=""){const n=r.n2Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=E();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),B(r.n2Meta?.rewards?.grammarXp||12,r.n2Meta?.rewards?.grammarMoon||1,`n2_grammar:${n.id}`),r.progress.totalCorrect+=1,x("answer_correct")):a||(r.progress.totalWrong+=1,x("answer_wrong")),Ne(),H(),j(),N()}function Ib(e,t="0",n=""){zd("reading",e,t,n)}function Tb(e,t="0",n=""){zd("listening",e,t,n)}function zd(e,t,n="0",s=""){const o=(e==="reading"?r.n2Reading:r.n2Listening).find(k=>k.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=E(),v=e==="reading"?m.readingAnswers:m.listeningAnswers,f=e==="reading"?m.completedReading:m.completedListening,w=!!f[o.id];v[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const y=(o.questions||[]).every((k,A)=>v[`${o.id}:${A}`]?.correct);if(d?(r.progress.totalCorrect+=1,x("answer_correct")):(r.progress.totalWrong+=1,x("answer_wrong")),y&&!w){f[o.id]=new Date().toISOString();const k=e==="reading"?r.n2Meta?.rewards?.readingXp||42:r.n2Meta?.rewards?.listeningXp||38,A=e==="reading"?r.n2Meta?.rewards?.readingMoon||4:r.n2Meta?.rewards?.listeningMoon||4;B(k,A,`n2_${e}:${o.id}`)}Ne(),H(),j(),N()}function Rb(e){const t=en(e);t&&(E().currentLessonId=t.id,jt("N2",t.id,"n2_lesson_open"),Jt("N2",t,"n2_lesson_open"),tn(t.id))}function _b(){tn("")}function Mb(e=null){e&&(E().activeReviewMode=e),tn("review")}function Pb(){tn("kanji")}function Eb(){tn("grammar")}function Db(){tn("reading")}function Kb(){tn("listening")}function Ob(){tn("final-test")}function tn(e){r.route="textbooks",r.activeTextbookLevel="N2",r.activeTextbookSubroute=e||null,E().opened=!0;const t=e?`#jlpt/n2/${encodeURIComponent(e)}`:"#jlpt/n2";Pt(t),H(),j(),ae(),Gt()}function Fb(e="due"){const t=Date.now(),n=E(),s=Ue();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=_(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Jd(){const e=Ue();if(!e.length)return[];const t=r.n2FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n2FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=Ve().find(d=>d.kanji.includes(o.kanji))||Ve()[0];s.push(Bb(l,o,c,a))}return s.filter(Boolean)}function Bb(e,t,n,s){const o=Ye(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:I(t),options:Ge({value:t.id,label:I(t)},Ue().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:I(c)})),s)};if(e==="reading")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:Ge({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Ue().flatMap(c=>Ye(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:Ge({value:c,label:c},Ve().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Me(o),answer:c,answerLabel:c,options:Ge({value:c,label:c},Ue().flatMap(d=>Ye(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n2Grammar[s%Math.max(r.n2Grammar.length,1)];if(c)return{id:`n2-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${h(c.question||c.explanation)}`,answer:c.answer,answerLabel:c.answer,options:Ge({value:c.answer,label:c.answer},c.options.filter(d=>d!==c.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n2Reading[s%Math.max(r.n2Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n2-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||h(c.title)} ${h(d.prompt)}`,answer:d.answer,answerLabel:h((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:h(u.label||u)}))}}return e==="srs"?{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${I(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${I(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n2-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:I(t),answer:t.kanji,answerLabel:t.kanji,options:Ge({value:t.kanji,label:t.kanji},Ue().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function zb(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(E().finalTest.answers[t]=n,j(),N())}function Ud(e=!1){if(r.finalTestBusy)return;const t=E().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){N();return}r.finalTestBusy=!0;try{const n=Jd(),s=r.n2FinalTest||{},a=pe(),o=rn(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const $=o.firstMissingId?`#${Ys("n2",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N2",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:$,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=$,j();return}let u=0;const m=[],v=[];n.forEach($=>{const z=String(t.answers?.[$.id]||"").trim();if(z===$.answer){if(u+=1,$.kanji&&ns($.kanji,$.cardId),$.grammarId){const D=E();D.completedGrammar[$.grammarId]=D.completedGrammar[$.grammarId]||d}}else z||v.push($),m.push({id:$.id,kanji:$.kanji||"",answer:$.answerLabel,selected:z}),$.kanji&&Xs($.kanji,$.cardId)});const f=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,y=!!t.passed,k=Math.max(0,m.length-v.length);let A=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=f,t.passed=f>=l,t.correctAnswers=u,t.incorrectAnswers=k,t.unansweredAnswers=v.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map($=>$.id),t.completedAt=d,t.lastScore=f,t.bestScore=Math.max(Number(t.bestScore||0),f),t.passedAt=t.passed?y&&t.passedAt||d:t.passedAt||null,!w){const $=Number(s?.rewards?.completeXp||220),z=Number(s?.rewards?.completeMoon||40);A+=$,b+=z,B($,z,"n2_final_complete")}if(t.passed&&!y){const $=Number(s?.rewards?.passXp||110),z=Number(s?.rewards?.passMoon||18);A+=$,b+=z,B($,z,"n2_final_pass")}t.lastRewardXp=A,t.lastRewardMoon=b,E(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N2",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:f,correct:u,incorrect:k,unanswered:v.length,totalQuestions:n.length,rewardXp:A,rewardMoon:b,attempts:t.attempts,threshold:l,reviewAction:"n2-review",reviewAllAction:"n2-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},H(),j()}catch(n){console.error(n),O(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,N()}}function Jb(){E().finalTest=ui().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,j(),N()}function Gd(e){return`n2-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function qd(e){const t=ps(e.jlpt);if(!t)return"";const n={...Ko(),...Do()};return`
      <div class="jlpt-practice-grid">
        ${Ub(t,n)}
        ${Gb(t,n)}
        ${qb(t,n)}
        ${Wb(t,n)}
      </div>
    `}function Ub(e,t){return e.apps.length?`
      <article class="jlpt-practice-card">
        <h3>${i(t.apps)}</h3>
        <div class="jlpt-app-grid">
          ${e.apps.map(n=>`
            <div class="jlpt-app-chip">
              <strong>${i(n.name)}</strong>
              <span>${i(h(n.context))}</span>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function Gb(e,t){const n=Array.isArray(e.kana?.hiragana)?e.kana.hiragana:[],s=Array.isArray(e.kana?.katakana)?e.kana.katakana:[];return!n.length&&!s.length?"":`
      <article class="jlpt-practice-card">
        <h3>${i(t.kana)}</h3>
        <div class="kana-columns">
          ${Hd(t.hiragana,n)}
          ${Hd(t.katakana,s)}
        </div>
      </article>
    `}function Hd(e,t){return t.length?`
      <div class="kana-column">
        <strong>${i(e)}</strong>
        ${t.map(n=>`
          <span class="kana-chip">
            <b>${i(n.kana)}</b>
            <small>${i(n.romaji)} · ${i(h(n.note))}</small>
          </span>
        `).join("")}
      </div>
    `:""}function qb(e,t){return e.kanjiFocus.length?`
      <article class="jlpt-practice-card jlpt-kanji-focus">
        <h3>${i(t.kanjiFocus)}</h3>
        <div class="jlpt-focus-grid">
          ${e.kanjiFocus.map(n=>`
            <div class="jlpt-focus-item">
              <span class="kanji-mini">${i(n.kanji)}</span>
              <div>
                <strong>${Hb(n)}</strong>
                <small>${i(n.romaji)} · ${i(h(n.meaning))}</small>
                <p>${i(h(n.appUse))}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function Hb(e){const t=Array.isArray(e.furigana)?e.furigana:[];return t.length?t.map(n=>n.rt?`<ruby>${i(n.text)}<rt>${i(n.rt)}</rt></ruby>`:i(n.text)).join(""):i(e.word||e.kanji||"")}function Wb(e,t){const n=gs(e);if(!n)return"";const s=Dn(),a=s.selected[n.id]||[],o=!!s.checked[n.id],l=s.results[n.id]||null,c=a.map(m=>n.tiles[m]).filter(Boolean),d=o&&l?.correct,u=o&&l?l.wrongIndexes||[]:[];return`
      <article class="jlpt-practice-card jlpt-drill-card">
        <div class="section-head compact-head">
          <div>
            <h3>${i(t.sentenceDrill)}</h3>
            <p>${i(h(n.translation))}</p>
          </div>
          <span class="pill">${i(e.jlpt)}</span>
        </div>
        <div class="jlpt-sentence-line">${Qb(n,c,u)}</div>
        <p class="label">${i(V(n.reading))}</p>
        <div class="sentence-tiles jlpt-tiles">
          ${n.tiles.map((m,v)=>{const f=a.includes(v);return`
              <button class="sentence-tile ${f?"is-used":""}" type="button" data-action="insert-jlpt-tile" data-index="${v}" ${f||d?"disabled":""}>
                <small>${i(m.reading)}</small>
                <strong>${i(m.kanji)}</strong>
              </button>
            `}).join("")}
        </div>
        <p class="sentence-result ${o?d?"is-success":"is-error":""}">
          ${i(l?.message||t.fillBlanks)}
        </p>
        <div class="actions">
          <button class="btn primary" type="button" data-action="check-jlpt-practice" ${d?"disabled":""}>${i(t.check)}</button>
          <button class="btn" type="button" data-action="undo-jlpt-tile" ${!a.length||d?"disabled":""}>${i(t.undo)}</button>
          <button class="btn" type="button" data-action="clear-jlpt-practice" ${!a.length||d?"disabled":""}>${i(t.clear)}</button>
          <button class="btn" type="button" data-action="next-jlpt-practice">${i(t.next)}</button>
        </div>
      </article>
    `}function Qb(e,t,n){let s=0;return String(e.sentence||"").split("___").map((a,o,l)=>{if(o===l.length-1)return i(a);const d=(e.blanks[o]||{answer:[]}).answer.length||1,u=t.slice(s,s+d),m=u.some((f,w)=>n.includes(s+w));s+=d;const v=u.length?u.map(f=>`<span>${i(f.kanji)}</span>`).join(""):`<span>${i("в–Ў".repeat(d))}</span>`;return`${i(a)}<span class="sentence-blank ${m?"is-wrong":""}">${v}</span>`}).join("")}function Xb(){const e=er(g$()),t=Mk(e),n=e.length,s=t?.kind==="card"?t.card:t?.kind==="exercise"?te(t.card?.id||t.cardId||t.progress?.cardId||""):null;Rk(t);const a=t?t.kind==="card"?s?ru(s):is():Bk(t):is();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(S("review"))}</h1>
            <p>${n} ${i(p()==="ru"?"в очереди":"in queue")}</p>
            <div class="mini-stat-row">
              ${T(p()==="ru"?"Сейчас":"Due now",Re(),"due")}
              ${T(p()==="ru"?"В сессии":"Remaining",n,"session")}
              ${T(p()==="ru"?"Позже":"Learning later",m$(),"learning")}
              ${T(p()==="ru"?"Всего SRS":"Total SRS",f$(),"cards")}
            </div>
          </div>
          <div class="actions">
            ${fs("srs")}
          </div>
        </div>
        <div class="study-layout" data-section="review-card">
          ${a}
          ${io(s,n)}
        </div>
        ${Vb()}
      </section>
    `}function Vb(){try{return Yb()}catch(e){return console.warn("[Flash Kanji] sentence practice skipped after stale saved progress.",e),r.progress&&(r.progress.sentencePractice=pi(Un().sentencePractice,{})),""}}function Yb(){const e=kt(),t=da(e),n={...ss(),...to()},s=Zb(e,n);if(!e.length)return`
      <article class="sentence-practice empty-state" data-section="sentence-practice">
          <span class="kanji-char">文</span>
          <h2>${i(n.title)}</h2>
          <p>${i(n.noLearned)}</p>
          ${s}
          <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(S("learn"))}</button>
        </article>
      `;if(e.length<4)return`
        <article class="sentence-practice empty-state" data-section="sentence-practice">
          <span class="kanji-char">文</span>
          <h2>${i(n.title)}</h2>
          <p>${i(n.notEnough.replace("{count}",e.length))}</p>
          ${s}
        </article>
      `;if(!t.length)return`
        <article class="sentence-practice empty-state" data-section="sentence-practice">
          <span class="kanji-char">文</span>
          <h2>${i(n.title)}</h2>
          <p>${i(n.noExercise)}</p>
          ${s}
        </article>
      `;const a=so(t,e);if(!a)return"";const{exercise:o,tiles:l,selectedTiles:c,answerFlat:d,wrongIndexes:u,complete:m,awarded:v}=a,f=new Set(r.progress.sentencePractice.selected),w=r.progress.sentencePractice.result||{};return`
      <article class="sentence-practice${r.progress.sentencePractice.checked?m?" is-success":" is-error":""}" data-section="sentence-practice" aria-live="polite">
        <div class="section-head sentence-head">
          <div>
            <h2>${i(n.title)}</h2>
            <p>${i(n.subtitle.replace("{learned}",e.length).replace("{total}",r.cards.length))}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(o.jlpt)}</span>
            ${o.source?`<span class="pill">${i(tk(o.source,n))}</span>`:""}
            <span class="pill">${i(n.progress.replace("{done}",Object.keys(r.progress.sentencePractice.completed||{}).length).replace("{total}",t.length))}</span>
          </div>
        </div>
        ${s}
        <div class="sentence-card">
          <div class="sentence-line">${Qd(o,c,u)}</div>
          <p class="sentence-reading">${i(o.reading||"")}</p>
          <p class="sentence-translation">${i(nk(o))}</p>
        </div>
        <div class="sentence-tiles">
          ${l.map((k,A)=>{const b=f.has(A),$=u.includes(r.progress.sentencePractice.selected.indexOf(A));return`
              <button class="sentence-tile ${b?"is-used":""} ${$?"is-wrong":""}" type="button" data-action="insert-sentence-tile" data-index="${A}" ${b||m?"disabled":""}>
                <span>${i(k.reading)}</span>
                <strong>${i(k.kanji)}</strong>
              </button>
            `}).join("")}
        </div>
        <div class="sentence-feedback">
          ${i(w.message||n.tip.replace("{count}",d.length))}
          ${m&&!v?`<small>${i(n.completedBefore)}</small>`:""}
        </div>
        <div class="actions sentence-actions">
          <button class="btn primary" type="button" data-action="check-sentence">${i(n.check)}</button>
          <button class="btn" type="button" data-action="undo-sentence-tile" ${!r.progress.sentencePractice.selected.length||m?"disabled":""}>${i(n.undo)}</button>
          <button class="btn" type="button" data-action="clear-sentence" ${!r.progress.sentencePractice.selected.length||m?"disabled":""}>${i(n.clear)}</button>
          <button class="btn ghost" type="button" data-action="next-sentence">${i(n.next)}</button>
        </div>
      </article>
    `}function Zb(e,t){const n=je(),s=Dr(n.customDraft||{}),a=Array.isArray(n.customSentences)?n.customSentences:[],o=a.length,l=!!n.customEditingId,c=n.customStatus?` is-${n.customStatus}`:"";return`
      <details class="sentence-builder" ${l||n.customMessage?"open":""}>
        <summary>
          <span>${i(t.customTitle)}</span>
          <small>${i(t.customCount.replace("{count}",o))}</small>
        </summary>
        <div class="sentence-builder-grid">
          <label class="field sentence-builder-wide">
            <span>${i(t.customSentence)}</span>
            <textarea data-sentence-draft="jp" rows="2" autocomplete="off" spellcheck="false" placeholder="${g(t.customSentencePlaceholder)}">${i(s.jp||"")}</textarea>
          </label>
          <label class="field sentence-builder-wide">
            <span>${i(t.customReading)}</span>
            <input data-sentence-draft="hiragana" type="text" autocomplete="off" spellcheck="false" value="${g(s.hiragana||"")}" placeholder="${g(t.customReadingPlaceholder)}" />
          </label>
          <label class="field">
            <span>${i(t.customTranslationRu)}</span>
            <input data-sentence-draft="ru" type="text" value="${g(s.ru||"")}" placeholder="${g(t.customTranslationRuPlaceholder)}" />
          </label>
          <label class="field">
            <span>${i(t.customTranslationEn)}</span>
            <input data-sentence-draft="en" type="text" value="${g(s.en||"")}" placeholder="${g(t.customTranslationEnPlaceholder)}" />
          </label>
        </div>
        <div class="sentence-builder-actions">
          <button class="btn primary" type="button" data-action="add-custom-sentence">${i(l?t.updateCustom:t.addCustom)}</button>
          ${l?`<button class="btn ghost" type="button" data-action="cancel-custom-sentence-edit">${i(t.cancelEdit)}</button>`:""}
          <span class="sentence-builder-message${c}">${i(n.customMessage||t.customHelp.replace("{learned}",e.length))}</span>
        </div>
        ${ek(a,e,t)}
      </details>
    `}function ek(e,t,n){return e.length?`
      <div class="sentence-custom-list">
        ${e.map(s=>{const a=no(s,t),o=!!(a&&nn(a,t).length>=Math.max(4,lt(a).length)),l=p()==="en"?s.en||s.ru:s.ru||s.en;return`
            <article class="sentence-custom-item">
              <div class="sentence-custom-copy">
                <div class="tag-row">
                  <span class="pill">${i(n.userSource)}</span>
                  <span class="pill ${o?"success":""}">${i(o?n.customReady:n.customLocked)}</span>
                </div>
                <strong>${i(s.jp)}</strong>
                ${s.hiragana?`<small>${i(s.hiragana)}</small>`:""}
                ${l?`<small>${i(l)}</small>`:""}
              </div>
              <div class="sentence-custom-actions">
                <button class="btn" type="button" data-action="edit-custom-sentence" data-id="${g(s.id)}">${i(n.editCustom)}</button>
                <button class="btn ghost" type="button" data-action="delete-custom-sentence" data-id="${g(s.id)}">${i(n.deleteCustom)}</button>
              </div>
            </article>
          `}).join("")}
      </div>
    `:`<p class="sentence-custom-empty">${i(n.customEmpty)}</p>`}function tk(e,t){return e==="user"||e==="custom"?t.userSource||t.customSource:e==="dynamic"?t.dynamicSource:e}function ss(){return p()==="ru"?{title:"Практика предложений",subtitle:"Только из изученных кандзи: {learned}/{total}",progress:"{done}/{total} готово",noLearned:"Сначала изучи несколько кандзи в уроках или повторении. После этого появятся предложения.",notEnough:"Изучено {count} кандзи. Для упражнения нужно минимум 4 изученных кандзи, чтобы собрать варианты.",noExercise:"Изученные кандзи пока не складываются в доступные предложения. Продолжай уроки, и блок откроется.",tip:"Заполни {count} пропуск(а) плитками по порядку.",check:"Проверить",clear:"Очистить",next:"Следующее",undo:"Убрать",completedBefore:"Награда за это предложение уже получена.",fillAll:"Заполни все пропуски перед проверкой.",correct:"Верно. Предложение собрано правильно.",wrong:"Проверь красные места и попробуй ещё раз.",full:"Все пропуски уже заполнены.",inserted:"Плитка вставлена.",removed:"Последняя плитка убрана."}:{title:"Sentence practice",subtitle:"Only learned kanji: {learned}/{total}",progress:"{done}/{total} done",noLearned:"Study a few kanji first. Sentence practice will unlock after that.",notEnough:"{count} kanji learned. You need at least 4 learned kanji for tile choices.",noExercise:"Your learned kanji do not form an available sentence yet. Continue lessons to unlock this block.",tip:"Fill {count} blank slot(s) with tiles in order.",check:"Check",clear:"Clear",next:"Next",undo:"Undo",completedBefore:"Reward for this sentence was already claimed.",fillAll:"Fill every blank before checking.",correct:"Correct. The sentence is complete.",wrong:"Check the red slots and try again.",full:"All blank slots are already filled.",inserted:"Tile inserted.",removed:"Last tile removed."}}function to(){return p()==="ru"?{customTitle:"Своё предложение",customCount:"Своих: {count}",customSentence:"Японское предложение",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Чтение хираганой",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Перевод RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Добавить",customHelp:"Вставь фразу. Приложение спрячет только изученные кандзи: {learned}.",customAdded:"Предложение добавлено.",customNoSentence:"Вставь японское предложение.",customNoKnown:"В этом предложении нет изученных кандзи.",customNoTiles:"Нужно минимум 4 изученных кандзи для вариантов.",customDuplicate:"Такое предложение уже есть.",customUpdated:"Предложение обновлено.",customDeleted:"Предложение удалено.",customEmpty:"Свои предложения появятся здесь.",customReady:"Доступно",customLocked:"Позже",updateCustom:"Сохранить",cancelEdit:"Отмена",editCustom:"Редактировать",deleteCustom:"Удалить",customSource:"Своё",userSource:"USER",dynamicSource:"JSON"}:{customTitle:"Custom sentence",customCount:"Custom: {count}",customSentence:"Japanese sentence",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Hiragana reading",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Translation RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Add",customHelp:"Paste a phrase. The app will hide only learned kanji: {learned}.",customAdded:"Sentence added.",customNoSentence:"Paste a Japanese sentence.",customNoKnown:"No learned kanji found in this sentence.",customNoTiles:"You need at least 4 learned kanji for tile choices.",customDuplicate:"This sentence already exists.",customUpdated:"Sentence updated.",customDeleted:"Sentence deleted.",customEmpty:"Your sentences will appear here.",customReady:"Ready",customLocked:"Later",updateCustom:"Save",cancelEdit:"Cancel",editCustom:"Edit",deleteCustom:"Delete",customSource:"Custom",userSource:"USER",dynamicSource:"JSON"}}function nk(e){return p()==="en"?e?.translationEn||e?.translationRu||"":e?.translationRu||e?.translationEn||""}function Wd(e=kt()){const t=sk(e),n=rk(e),s=Array.isArray(r.sentenceExercises)?r.sentenceExercises:[],a=new Set;return[...t,...n,...s].filter(o=>!o?.id||a.has(o.id)?!1:(a.add(o.id),!0))}function sk(e=kt()){const t=je();return(Array.isArray(t.customSentences)?t.customSentences:[]).map(s=>no(s,e)).filter(Boolean)}function no(e,t=kt()){return e?.jp?ro({id:e.id,jlpt:vk(e.jp,t),sentence:e.jp,reading:e.hiragana||Vs(e.jp),translationRu:e.ru||"",translationEn:e.en||"",source:"user"},t,{maxBlanks:3,maxBlankChars:5}):null}function Qd(e,t,n){const s=e?.blanks||[],a=String(e?.sentence||"").split("___");let o=0;return a.map((l,c)=>{const d=s[c];if(!d)return i(l);const u=d.answer||[],m=u.map((v,f)=>{const w=o+f,y=t[w],k=n.includes(w);return`<span class="sentence-slot ${y?"is-filled":""} ${k?"is-wrong":""}">${y?i(y.kanji):""}</span>`}).join("");return o+=u.length,`${i(l)}<span class="sentence-blank">${m}</span>`}).join("")}function so(e=da(),t=kt()){const n=In(t),s=(Array.isArray(e)?e:[]).filter(y=>y?.id),a=je();new Set(s.map(y=>y.id)).has(a.activeId)||ca(ao(s)?.id||null);const l=s.find(y=>y.id===r.progress.sentencePractice.activeId)||s[0];if(!l)return null;const c=lt(l);(!Array.isArray(r.progress.sentencePractice.tileKeys)||!r.progress.sentencePractice.tileKeys.length)&&(r.progress.sentencePractice.tileKeys=nn(l,n).map(ga));let d=(Array.isArray(r.progress.sentencePractice.tileKeys)?r.progress.sentencePractice.tileKeys:[]).map(bk).filter(Boolean);const u=()=>c.every(y=>d.some(k=>k.kanji===y.kanji));(d.length<Math.max(4,c.length)||!u())&&(d=nn(l,n),r.progress.sentencePractice.tileKeys=d.map(ga),r.progress.sentencePractice.selected=[],r.progress.sentencePractice.checked=!1,r.progress.sentencePractice.result=null);const m=Array.isArray(r.progress.sentencePractice.selected)?r.progress.sentencePractice.selected:[];r.progress.sentencePractice.selected=m.filter((y,k,A)=>Number.isInteger(y)&&y>=0&&y<d.length&&A.indexOf(y)===k).slice(0,c.length);const v=r.progress.sentencePractice.selected.map(y=>d[y]).filter(Boolean),f=r.progress.sentencePractice.checked&&r.progress.sentencePractice.result?r.progress.sentencePractice.result.wrongIndexes:[],w=Array.isArray(f)?f.filter(y=>Number.isInteger(y)&&y>=0&&y<c.length):[];return{exercise:l,tiles:d,selectedTiles:v,answerFlat:c,wrongIndexes:w,complete:!!(r.progress.sentencePractice.checked&&r.progress.sentencePractice.result?.correct),awarded:!!r.progress.sentencePractice.completed?.[l.id]}}function je(){return r.progress.sentencePractice=pi(Un().sentencePractice,r.progress.sentencePractice||{}),r.progress.sentencePractice}function ca(e){r.progress.sentencePractice={...je(),activeId:e,selected:[],checked:!1,result:null,tileKeys:[]};const t=Wd(kt()).find(n=>n?.id===e);t&&Zd(t)}function In(e){return(Array.isArray(e)?e:[]).filter(t=>t?.id&&t.kanji)}function kt(){return In(r.cards).filter(e=>{const t=r.lessons.find(s=>s.id===e.lessonId);if(t&&!Ae(t))return!1;const n=_(e.id);return n.state!=="New"||n.reviewCount>0||n.lastReviewedAt||r.progress.lessonCompletions[e.lessonId]})}function da(e=kt()){const t=In(e),n=new Set(t.map(s=>s.kanji));return Wd(t).filter(s=>{if(!s?.id)return!1;const a=lt(s);return!a.length||a.some(o=>!n.has(o.kanji))?!1:nn(s,t).length>=Math.max(4,a.length)})}function lt(e){return(e?.blanks||[]).flatMap(t=>(t.answer||[]).map((n,s)=>({kanji:n,reading:t.reading?.[s]||""})))}function Xd(e){return lt(e).map(t=>t.kanji).join("")}function nn(e,t){if(!e?.id)return[];const n=In(t),s=lt(e),a=new Set(s.map(f=>f.kanji)),o=new Set(n.map(f=>f.kanji)),l=new Map;[...e.tiles||[],...s].forEach(f=>{f?.kanji&&f?.reading&&l.set(f.kanji,f.reading)});const c=s.map(f=>({kanji:f.kanji,reading:f.reading||l.get(f.kanji)||Ct(f.kanji)})),d=(e.tiles||[]).filter(f=>f?.kanji&&!a.has(f.kanji)&&o.has(f.kanji)).map(f=>({kanji:f.kanji,reading:f.reading||Ct(f.kanji)})).filter((f,w,y)=>y.findIndex(k=>k.kanji===f.kanji)===w),u=n.filter(f=>f.kanji&&!a.has(f.kanji)).map(f=>({kanji:f.kanji,reading:l.get(f.kanji)||Ct(f.kanji,f)})).filter((f,w,y)=>y.findIndex(k=>k.kanji===f.kanji)===w).sort((f,w)=>Se(`${e.id}:${f.kanji}`)-Se(`${e.id}:${w.kanji}`)),m=[...d,...u].filter(f=>!a.has(f.kanji)).filter((f,w,y)=>y.findIndex(k=>k.kanji===f.kanji)===w),v=Math.min(Math.max(6,c.length+2),c.length+m.length);return xk([...c,...m.slice(0,v-c.length)],e.id)}function rk(e){const t=In(e);if(!t.length)return[];const n=new Set(t.map(l=>l.kanji)),s=new Set,a=[];return t.flatMap(l=>(l.examples||[]).map(c=>({...c,card:l}))).forEach((l,c)=>{const d=rs(l.word||"");if(!d||s.has(d)||!wk(d)||Yd(d).some(y=>!n.has(y)))return;s.add(d);const u=Tn(l.reading||Vs(d)),m=l.translation||d,v=[{sentence:`今日は${d}をアプリで見ます。`,reading:`きょうは ${u}を あぷりで みます。`,translationRu:`Сегодня я смотрю в приложении: ${m}.`,translationEn:`Today I check ${d} in an app.`},{sentence:`駅で${d}について話します。`,reading:`えきで ${u}について はなします。`,translationRu:`На станции говорю про: ${m}.`,translationEn:`At the station, I talk about ${d}.`},{sentence:`メモに${d}を書きます。`,reading:`めもに ${u}を かきます。`,translationRu:`Я записываю в заметку: ${m}.`,translationEn:`I write ${d} in a memo.`}],f=v[c%v.length],w=ro({id:`sentence-json-${Se(`${d}:${f.sentence}`).toString(36)}`,jlpt:l.card?.jlpt||"N5",sentence:f.sentence,reading:f.reading,translationRu:f.translationRu,translationEn:f.translationEn,source:"dynamic"},t,{maxBlanks:2,maxBlankChars:4});w&&a.push(w)}),a.slice(0,160)}function ak(){const e=je(),t={...ss(),...to()},n=Dr(ik()||e.customDraft||{}),s=kt(),a=sn(n.jp);if(!a){ua(t.customNoSentence,"error");return}const o=e.customEditingId||null;if(dk(a,o)){ua(t.customDuplicate,"error");return}const c=je(),d={id:o||`custom_${Date.now().toString(36)}_${Se(a).toString(36)}`,jp:a,hiragana:Tn(sn(n.hiragana)||Vs(a)),ru:sn(n.ru),en:sn(n.en),source:"user"},u=(c.customSentences||[]).findIndex(v=>v.id===d.id);u>=0?c.customSentences[u]=d:c.customSentences=[d,...c.customSentences||[]].slice(0,160),c.customDraft={jp:"",hiragana:"",ru:"",en:""},c.customEditingId=null,ua(o?t.customUpdated:t.customAdded,"success",!1);const m=no(d,s);m&&nn(m,s).length>=Math.max(4,lt(m).length)&&(ca(m.id),r.progress.sentencePractice.tileKeys=nn(m,s).map(ga)),j(),N()}function ik(){const e=document.querySelector(".sentence-builder");if(!e)return null;const t=n=>e.querySelector(`[data-sentence-draft="${n}"]`)?.value||"";return{jp:t("jp"),hiragana:t("hiragana"),ru:t("ru"),en:t("en")}}function ok(e){const t=je(),n=(t.customSentences||[]).find(s=>s.id===e);n&&(t.customEditingId=n.id,t.customDraft={jp:n.jp||"",hiragana:n.hiragana||"",ru:n.ru||"",en:n.en||""},t.customMessage="",t.customStatus="",j(),N())}function lk(e){const t=je(),n={...ss(),...to()},s=(t.customSentences||[]).length;if(t.customSentences=(t.customSentences||[]).filter(a=>a.id!==e),t.customSentences.length!==s){if(t.customEditingId===e&&(t.customEditingId=null,t.customDraft={jp:"",hiragana:"",ru:"",en:""}),t.completed?.[e]&&delete t.completed[e],t.recentIds=(t.recentIds||[]).filter(a=>a!==e),t.activeId===e){const a=kt(),o=ao(da(a));ca(o?.id||null)}ua(n.customDeleted,"success",!1),j(),N()}}function ck(){const e=je();e.customEditingId=null,e.customDraft={jp:"",hiragana:"",ru:"",en:""},e.customMessage="",e.customStatus="",j(),N()}function dk(e,t=null){const n=rs(e);return(je().customSentences||[]).some(a=>a.id!==t&&rs(a.jp)===n)?!0:r.sentenceExercises.some(a=>rs(Vd(a))===n)}function ua(e,t,n=!0){const s=je();s.customMessage=e,s.customStatus=t,j(),n&&N()}function ro(e,t,n={}){if(!e||typeof e!="object")return null;const s=In(t),a=rs(e.sentence||"");if(!a||!e.id||!s.length)return null;const o=uk(a,s).filter(m=>m.answer.length<=Number(n.maxBlankChars||5));if(!o.length)return null;const l=pk(o,a,n);if(!l.length)return null;let c="",d=0;const u=l.map(m=>(c+=a.slice(d,m.start)+"___",d=m.end,{answer:m.answer,reading:gk(m.text)}));return c+=a.slice(d),{id:e.id,kind:e.kind||"cloze",jlpt:e.jlpt||"N5",sentence:c,originalSentence:a,reading:Tn(e.reading||Vs(a)),translationRu:e.translationRu||"",translationEn:e.translationEn||"",blanks:u,tiles:u.flatMap(m=>m.answer.map((v,f)=>({kanji:v,reading:m.reading[f]||Ct(v)}))),source:e.source||"custom",createdAt:e.createdAt}}function uk(e,t){const n=new Map(In(t).map(o=>[o.kanji,o])),s=[];let a=null;return Array.from(e).forEach((o,l)=>{if(pa(o)&&n.has(o)){a||(a={start:l,end:l,text:"",answer:[]}),a.end=l+1,a.text+=o,a.answer.push(o);return}a&&s.push(a),a=null}),a&&s.push(a),s}function pk(e,t,n={}){const s=Number(n.maxBlanks||2),a=Number(n.maxBlankChars||5),o=e.filter(m=>m.start>0&&m.end<t.length),l=e.filter(m=>m.start>0),c=(o.length?o:l.length?l:e).slice().sort((m,v)=>{const f=v.answer.length-m.answer.length;return f||Math.abs(m.start-t.length/2)-Math.abs(v.start-t.length/2)}),d=[];let u=0;return c.forEach(m=>{d.length>=s||u+m.answer.length>a||(d.push(m),u+=m.answer.length)}),d.sort((m,v)=>m.start-v.start)}function gk(e){const t=Array.from(e),n=mk(e);return n?fk(t,Tn(n)):t.map(s=>Ct(s))}function mk(e){for(const t of r.cards)for(const n of t.examples||[])if(n.word===e&&n.reading)return n.reading;return""}function fk(e,t){const n=Array(e.length).fill("");let s=t;for(let a=e.length-1;a>0;a-=1){const l=hk(e[a]).sort((c,d)=>d.length-c.length).find(c=>c&&s.endsWith(c));l&&(n[a]=l,s=s.slice(0,-l.length))}return n[0]=s||Ct(e[0]),n.map((a,o)=>a||Ct(e[o]))}function hk(e){const t=r.cards.find(s=>s.kanji===e),n=[t?.hiragana,t?.onyomi,t?.kunyomi].flatMap(s=>String(s||"").split(/[\/,;гѓ»гЂЃ\s]+/)).map(s=>Tn(s.trim())).filter(Boolean);return[...new Set(n)]}function Vs(e){return Tn(Array.from(e).map(t=>pa(t)?Ct(t):t).join(""))}function vk(e,t){const n=["N5","N4","N3","N2","N1"],s=new Map(t.map(o=>[o.kanji,o]));return Yd(e).map(o=>s.get(o)?.jlpt).filter(Boolean).sort((o,l)=>n.indexOf(l)-n.indexOf(o))[0]||"N5"}function rs(e){return String(e||"").replace(/\s+/g,"").trim()}function sn(e){return String(e||"").replace(/\s+/g," ").trim()}function Vd(e){if(!e)return"";if(e.jp)return e.jp;if(e.originalSentence)return e.originalSentence;let t=0;return String(e.sentence||"").replace(/___/g,()=>(e.blanks?.[t++]?.answer||[]).join(""))}function wk(e){return Array.from(String(e||"")).some(pa)}function Yd(e){return Array.from(String(e||"")).filter(pa)}function pa(e){return/[㐀-鿿]/u.test(e)}function Tn(e){return String(e||"").replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-96))}function V(e){return Tn(String(e||""))}function Ct(e,t=r.cards.find(n=>n.kanji===e)){const n=t?.onyomi||t?.kunyomi||t?.hiragana||"";return String(n).split("/")[0].trim()||"かな"}function ga(e){return`${e.kanji}	${e.reading||""}`}function bk(e){const[t,n]=String(e||"").split("	");return t?{kanji:t,reading:n||Ct(t)}:null}function kk(e){const t=so();if(!t||!Number.isInteger(e))return;const n=ss(),s=r.progress.sentencePractice;if(!(s.result?.correct||s.selected.includes(e))){if(s.selected.length>=t.answerFlat.length){O(n.full);return}s.selected.push(e),s.checked=!1,s.result={correct:!1,message:n.inserted,wrongIndexes:[]},j(),N()}}function yk(){const e=je();!e.selected.length||e.result?.correct||(e.selected.pop(),e.checked=!1,e.result={correct:!1,message:ss().removed,wrongIndexes:[]},j(),N())}function $k(){const e=je();e.result?.correct||(e.selected=[],e.checked=!1,e.result=null,j(),N())}function jk(){const e=so();if(!e)return;const t=ss(),n=r.progress.sentencePractice;if(n.selected.length<e.answerFlat.length){n.checked=!0,n.result={correct:!1,message:t.fillAll,wrongIndexes:[]},j(),N();return}const s=e.answerFlat.map((o,l)=>e.selectedTiles[l]?.kanji===o.kanji?-1:l).filter(o=>o>=0),a=s.length===0;if(n.checked=!0,n.attempts=(n.attempts||0)+1,n.result={correct:a,wrongIndexes:s,message:a?t.correct:t.wrong},a)Sk(e.exercise),ve({trust:.8,curiosity:.5,discipline:.4},"sentence_correct"),we("sentence_complete",{exerciseId:e.exercise.id,source:e.exercise.source||"builtin"}),hr("ok");else{r.progress.totalWrong+=1,r.progress.correctCombo=0,ve({discipline:-.6,curiosity:.2},"sentence_wrong"),we("answer_wrong",{exerciseId:e.exercise.id,mode:"sentence"});const o=Lt();o.mistakes+=1,r.progress.daily[se()]=o,hr("again")}j(),N()}function Sk(e){const t=je();if(t.completed[e.id])return;const n=r.rewards?.rewards||{},s=n.sentencePracticeXp||al.xp,a=n.sentencePracticeCoins||al.coins;t.completed[e.id]=new Date().toISOString(),r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo);const o=Lt();o.reviews+=1,o.minutes=Ja((o.minutes||0)+.8,1),r.progress.daily[se()]=o,B(s,a,`sentence:${e.id}`),ve({trust:.8,curiosity:.7},"sentence_complete"),Ne(),wo(),H()}function Nk(){const e=kt(),t=da(e);if(!t.length)return;const n=r.progress.sentencePractice?.activeId,s=t.find(o=>o?.id===n);s&&Zd(s);const a=ao(t,{excludeCurrent:!0,preferUncompleted:!0});a?.id&&(ca(a.id),r.progress.sentencePractice.tileKeys=nn(a,e).map(ga),j(),N())}function ao(e,t={}){const n=(Array.isArray(e)?e:[]).filter(k=>k?.id);if(!n.length)return null;const s=je(),a=s.activeId,o=new Set(s.recentIds||[]),l=new Set(s.recentAnswers||[]),c=k=>!t.excludeCurrent||n.length===1||k.id!==a,d=k=>!t.preferUncompleted||!s.completed?.[k.id],u=k=>!l.has(Xd(k)),m=k=>!o.has(k.id),f=[n.filter(c).filter(d).filter(u).filter(m),n.filter(c).filter(d).filter(u),n.filter(c).filter(u).filter(m),n.filter(c).filter(m),n.filter(c),n].find(k=>k.length)||n,w=f.filter(Ak),y=w.length?w:f;return y[Math.floor(Math.random()*y.length)]}function Ak(e){return e?.source==="user"||e?.source==="custom"||e?.source==="dynamic"||String(e?.sentence||"").indexOf("___")>0}function Zd(e){if(!e?.id)return;const t=je(),n=Xd(e),s=Array.isArray(t.recentIds)?t.recentIds:[],a=Array.isArray(t.recentAnswers)?t.recentAnswers:[];t.recentIds=[e.id,...s.filter(o=>o!==e.id)].slice(0,14),t.recentAnswers=[n,...a.filter(o=>o!==n)].slice(0,8)}function Se(e){return String(e).split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0)>>>0}function xk(e,t){return[...e].sort((n,s)=>Se(`${t}:${n.kanji}:${n.reading}`)-Se(`${t}:${s.kanji}:${s.reading}`))}function rn(e,t=[]){const n=t.filter(a=>String(e?.answers?.[a.id]||"").trim()).length,s=t.filter(a=>!String(e?.answers?.[a.id]||"").trim());return{answered:n,missingCount:s.length,missingIds:s.map(a=>a.id),firstMissingId:s[0]?.id||null,totalQuestions:t.length,ready:t.length>0&&s.length===0}}function Ys(e,t){const n=String(e||"n5").toLowerCase(),s=String(t||"").replace(/[^a-z0-9_-]+/gi,"-");return`${n}-final-question-${s}`}function Ck(e){return Number(e?.passingPercent??e?.passThreshold??70)}function Lk(){const e=r.finalTestModal;if(!e)return"";const t=e.kind==="warning",n=t?"thinking":e.passed?"proud":"sad",s=t?"":Rt(e.level,"btn ghost");!t&&(!e.percent||e.percent===0)&&typeof e.correct=="number"&&e.totalQuestions>0&&(e.percent=Math.round(e.correct/e.totalQuestions*100));const a=t?[`<span>${i(p()==="ru"?"Вопросов":"Questions")} ${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Пропусков":"Missing")} ${e.missingCount}</span>`,`<span>${i(p()==="ru"?"Порог":"Pass")} ${e.threshold}%</span>`]:[`<span>${i(p()==="ru"?"Результат":"Score")} ${e.percent}%</span>`,`<span>${i(p()==="ru"?"Верно":"Correct")} ${e.correct}/${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Ошибки":"Errors")} ${e.incorrect}</span>`,`<span>${i(p()==="ru"?"Пропуски":"Missing")} ${e.unanswered}</span>`,`<span>+${e.rewardXp} XP</span>`,`<span>+${e.rewardMoon} ${i(S("coins"))}</span>`];return`
      <div class="reward-backdrop final-test-backdrop">
        <article class="reward-modal is-final-test ${t?"is-warning":"is-result"}" role="dialog" aria-modal="true">
          ${ls("eva",n,t?"review":"achievement","reward-mascot")}
          <h2>${i(e.title)}</h2>
          <p>${i(e.message)}</p>
          <div class="reward-values">
            ${a.join("")}
          </div>
          <div class="actions final-test-modal-actions">
            ${t?`<button class="btn primary" type="button" data-action="final-test-focus-missing" data-focus="${g(e.focusSelector||"")}">${i(e.focusLabel||(p()==="ru"?"К пропуску":"Go to missing"))}</button>`:""}
            ${t&&e.allowIncomplete?`<button class="btn ghost" type="button" data-action="final-test-force-submit" data-level="${g(e.level||"N5")}">${i(e.forceLabel||(p()==="ru"?"Завершить без ответов":"Finish anyway"))}</button>`:""}
            ${!t&&e.reviewAction?`<button class="btn ghost" type="button" data-action="${g(e.reviewAction)}" data-mode="difficult">${i(e.repeatLabel||(p()==="ru"?"Повторить ошибки":"Repeat mistakes"))}</button>`:""}
            ${!t&&e.reviewAllAction?`<button class="btn ghost" type="button" data-action="${g(e.reviewAllAction)}" data-mode="all">${i(e.reviewAllLabel||(p()==="ru"?"Повторить весь тест":"Review all"))}</button>`:""}
            ${s}
            <button class="btn primary" type="button" data-action="close-final-test-modal">${i(e.closeLabel||"OK")}</button>
          </div>
        </article>
      </div>
    `}function eu(e){const t=R$(e);if(!t&&!I$(e))return"";const n=t?p()==="ru"?"Озвучить следующее чтение кандзи":"Speak the next kanji reading":p()==="ru"?"Проиграть озвучку кандзи":"Play kanji audio";return`
      <button class="audio-trigger" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" ${t?'data-tts-kind="cycle"':""} aria-label="${g(n)}" title="${g(t?"TTS":p()==="ru"?"Озвучка":"Audio")}">🔊</button>
    `}function ma(e){const t=ur(e);return`
      <div class="reading-row reading-split">
        ${tu(e,"onyomi",Wu("onyomi"),t.onyomi.kana,t.onyomi.romaji)}
        ${tu(e,"kunyomi",Wu("kunyomi"),t.kunyomi.kana,t.kunyomi.romaji)}
      </div>
    `}function tu(e,t,n,s,a){const o=su(e,t,n);return`
      <div class="reading-box">
        <div class="reading-box-head">
          <span class="label">${i(n)}</span>
          ${o}
        </div>
        <strong>${i(V(s)||"—")}</strong>
        <small>${i(a||"—")}</small>
      </div>
    `}function nu(e,t,n,s){return`
          <div>
            <dt class="reading-def-head">
              <span>${i(n)}</span>
              ${su(e,t,n)}
            </dt>
            <dd>${i(V(s||"—"))}</dd>
          </div>
        `}function su(e,t,n){return us(e,t).length?`<button class="reading-tts-button" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-kind="${g(t)}" aria-label="${g(`${n} TTS`)}" title="TTS">🔊</button>`:""}function fa(e,t="btn ghost"){const n=F$(e);if(!n)return"";const s=et(n.jlpt),a=p()==="ru"?"JLPT урок":"JLPT lesson";return s?`<button class="${t}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(n.jlpt)}">${i(n.jlpt)} · ${i(a)}</button>`:`<button class="${t} is-disabled" type="button" disabled aria-disabled="true" title="${g(It(n.jlpt))}">🔒 ${i(n.jlpt)}</button>`}function ru(e){if(!e?.id)return is();Rs(e,"study_card");const t=_(e.id),n=r.revealed;y$(e.id);const s=e.lessonTitle||zo(e.lessonId)||e.jlpt||"";return`
      <article class="study-card" data-review-card-id="${g(e.id)}">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(s)}</span>
            ${Da(t.state)}
          </div>
          ${eu(e)}
        </div>
        <div class="kanji-focus" aria-label="${g(e.kanji)}">${i(e.kanji)}</div>
        <h2>${i(n?I(e):S("question"))}</h2>
        <p class="label">${i(e.jlpt)} · ${e.strokes} ${i(S("strokes"))} · ${i(Kn(t.dueAt))}</p>
        ${n?Tk(e):`
          ${Ik(e)}
          <div class="actions">
            <button class="btn primary" type="button" data-action="show-answer">${i(S("showAnswer"))}</button>
            ${fa(e)}
            <button class="btn" type="button" data-action="open-card" data-id="${g(e.id)}">⋯ ${i(S("details"))}</button>
          </div>
        `}
      </article>
    `}function Ik(e){const t=r.readingCheck.cardId===e.id?r.readingCheck:{value:"",status:null,message:""},n=t.status?` is-${t.status}`:"",s=t.message||(p()==="ru"?"Напиши любое чтение этого кандзи хираганой или катаканой.":"Type any reading for this kanji in hiragana or katakana.");return`
      <section class="reading-check${n}" aria-live="polite">
        <label class="label" for="readingCheck-${g(e.id)}">${i(p()==="ru"?"Проверка чтения":"Reading check")}</label>
        <div class="reading-check-row">
          <input id="readingCheck-${g(e.id)}" data-reading-input data-id="${g(e.id)}" type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" value="${g(t.value)}" placeholder="${g(p()==="ru"?"Например: にち или ニチ":"Example: にち or ニチ")}" />
          <button class="btn ghost" type="button" data-action="check-reading" data-id="${g(e.id)}">${i(p()==="ru"?"Проверить":"Check")}</button>
        </div>
        <p>${i(s)}</p>
      </section>
    `}function ha(e){return`
      <li class="example-item">
        <div class="example-main">
          <b>${i(e.word)}</b>
          <span>${i(V(e.reading))}</span>
          <span class="example-romaji">${i(e.romaji)}</span>
        </div>
        <small class="example-translation">${i(Me(e))}</small>
      </li>
    `}function Tk(e){return`
      <div class="answer-section">
        ${ma(e)}
        <strong>${i(S("examples"))}</strong>
        <ul class="example-list">
          ${e.examples.map(ha).join("")}
        </ul>
        <strong>${i(S("apps"))}</strong>
        <p>${i(fr(e))}</p>
        <ul class="app-list">${e.apps.map(t=>`<li>${i(t)}</li>`).join("")}</ul>
        <div class="actions compact-actions">
          ${fa(e)}
        </div>
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate" data-rating="forgot">${i(wa().forgot)} <small>${i(wa().forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate" data-rating="remember">${i(wa().remember)} <small>${i(Ry(e))}</small></button>
        </div>
      </div>
    `}function io(e,t){const n=r.progress.correctCombo>=3?"leya":"eva",s=n==="leya"?"combo":"welcome",a=r.route==="review"?Math.max(r.reviewSession?.initialSize||t,1):Math.max(r.cards.length,1),o=!!e?.id;return`
      <aside data-study-side-host>
        ${xy(n,n==="leya"?"focus":"thinking",s)}
        <div class="mini-stat-row" style="margin-top:10px">
          ${T(S("review"),t,"queue",R(t,a))}
          ${T("Combo",r.progress.correctCombo,`${r.progress.bestCorrectCombo} best`,R(r.progress.correctCombo,10))}
        </div>
        ${o?`<article class="tool-panel profile-panel">
          <h3>${i(S("hint"))} · Leya</h3>
          <p>${i(Aa(e.id).hint)}</p>
          <h3>${i(S("mnemonic"))}</h3>
          <p>${i(Aa(e.id).mnemonic)}</p>
        </article>`:""}
      </aside>
    `}function Zs(){r.reviewExerciseResults={},r.activeExerciseReviewId=null,r.activeExerciseReviewLevel="",r.activeExerciseReviewSource="",r.activeExerciseReviewSelection=[],r.activeExerciseReviewChoice="",r.activeExerciseReviewTranslationOpen=!1}function Rk(e){if(!e){r.activeCardId=null,Zs();return}if(r.reviewQueueLastKind=e.kind,e.kind==="card"){const t=te(e.card?.id||e.cardId||e.progress?.cardId||"");if(!t?.id){r.activeCardId=null,Zs();return}r.activeCardId!==t.id&&(r.activeCardId=t.id,Zs());return}if(e.kind==="exercise"){const t=r.activeExerciseReviewId===e.exerciseId&&r.activeExerciseReviewLevel===e.level&&r.activeExerciseReviewSource===String(e.source||"textbook");r.activeCardId=null,r.activeExerciseReviewId=e.exerciseId,r.activeExerciseReviewLevel=e.level,r.activeExerciseReviewSource=String(e.source||"textbook"),t||(r.reviewExerciseResults={}),t||(r.activeExerciseReviewSelection=[],r.activeExerciseReviewChoice="",r.activeExerciseReviewTranslationOpen=!1)}}function oo(e,t,n="",s=null,a=null,o="textbook"){const l=W(e);if(!l||!t)return null;if(String(o||"textbook")==="reading"){const f=a||_u(t,l);if(!f)return null;const w=lr(s||{},f);return{kind:"exercise",source:"reading",key:`reading:${String(l)}:${t}`,level:l,exerciseId:t,lessonId:String(f.sourceId||n||w.lessonId||""),cardId:"",dueAt:w.dueAt?new Date(w.dueAt).getTime():0,progress:w,exercise:f,card:null}}const d=Mn(s||{},{level:l,lessonId:n,exerciseId:t,cardId:s?.cardId||"",kanji:s?.kanji||"",type:s?.type||"",title:s?.title||null,prompt:s?.prompt||"",answer:s?.answer||"",answerLabel:s?.answerLabel||""}),u=a||vo(l,t,n||d.lessonId||"");if(!u)return null;const m=String(u.lessonId||d.lessonId||n||""),v=String(u.cardId||d.cardId||"");return{kind:"exercise",source:"textbook",key:`exercise:${l}:${t}`,level:l,exerciseId:t,lessonId:m,cardId:v,dueAt:d.dueAt?new Date(d.dueAt).getTime():0,progress:d,exercise:u,card:te(v)||te(d.cardId||"")}}function as(){if(!r.activeExerciseReviewId||!r.activeExerciseReviewLevel)return null;const e=r.activeExerciseReviewLevel,t=r.activeExerciseReviewId;if(String(r.activeExerciseReviewSource||"textbook")==="reading"){const o=_u(t,e),l=o?cn(o):r.progress.readingExercises?.[t]||null;return oo(e,t,l?.lessonId||o?.sourceId||"",l,o,"reading")}const a=My(e)?.exerciseSrs?.[t]||null;return oo(e,t,a?.lessonId||"",a,null,"textbook")}function lo(e){return!e||e.kind!=="exercise"?null:oo(e.level,e.exerciseId,e.lessonId||e.progress?.lessonId||"",e.progress,e.exercise||null,e.source||"textbook")}function _k(e){if(!e||typeof e!="object")return null;if(e.kind==="card"){const t=String(e.card?.id||e.cardId||e.progress?.cardId||""),n=te(t);if(!n?.id)return null;const s=e.progress||_(n.id);return{...e,kind:"card",key:e.key||`card:${n.id}`,card:n,cardId:String(n.id),progress:s,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}}return e.kind==="exercise"?lo(e):null}function er(e){return(Array.isArray(e)?e:[]).map(_k).filter(Boolean)}function Mk(e){const t=er(e),n=as();if(n&&r.reviewExerciseResults?.[n.exerciseId]||n&&!t.some(o=>o.kind==="exercise"&&o.exerciseId===n.exerciseId&&o.level===n.level))return n;const s=r.activeCardId?t.find(o=>o.kind==="card"&&o.card?.id===r.activeCardId):null;if(s)return s;const a=r.reviewQueueLastKind==="card"?"exercise":r.reviewQueueLastKind==="exercise"?"card":"";if(a){const o=t.find(l=>l.kind===a);if(o)return o}return t[0]||n||null}function Pk(e,t){const n=W(e);return n==="N5"?Qc(t):n==="N4"?dd(t):n==="N3"?jd(t):n==="N2"?Pd(t):""}function Ek(e){return p()==="ru"?e?.kind==="cloze"?"Предложение":"Вопрос":e?.kind==="cloze"?"Sentence":"Question"}function co(){return p()==="ru"?"Перевод":"Translation"}function au(e){const t=String(e||"").trim();return t?t.split(/([гЂ'пјЃпјџгЂЃ\n]+)/u).map(n=>{if(!n)return"";if(/^[гЂ'пјЃпјџгЂЃ\n]+$/u.test(n))return n===`
`?`
`:`${n} `;const s=qu(n);return s?`${s} `:""}).join("").replace(/\s+\n/gu,`
`).replace(/[ \t]+/gu," ").replace(/\s+([гЂ'пјЃпјџгЂЃ])/gu,"$1 ").replace(/([гЂ'пјЃпјџгЂЃ])\s*$/gu,"$1").trim():""}function Dk(e){const t=!!r.activeExerciseReviewTranslationOpen,n=e?.reading?V(e.reading):"",s=e?.reading?au(e.reading):"",a=h({ru:e?.translationRu||e?.ru||"",en:e?.translationEn||e?.en||""});return`
      <div class="reading-translation-wrap">
        <button class="btn ghost reading-translation-toggle" type="button" data-action="toggle-reading-translation">${i(co())}</button>
        ${t?`
          <div class="reading-translation-panel">
            <div class="reading-translation-row">
              <span>${i(p()==="ru"?"Хирагана":"Hiragana")}</span>
              <strong>${i(n||(p()==="ru"?"Нет данных":"No data"))}</strong>
            </div>
            <div class="reading-translation-row">
              <span>Romaji</span>
              <strong>${i(s||(p()==="ru"?"Нет данных":"No data"))}</strong>
            </div>
            <div class="reading-translation-row">
              <span>${i(p()==="ru"?"Перевод":"Translation")}</span>
              <strong>${i(a||(p()==="ru"?"Нет данных":"No data"))}</strong>
            </div>
          </div>
        `:""}
      </div>
    `}function Kk(e){return r.reviewExerciseResults?.[e.exerciseId]||cn(e.exercise)||null}function Ok(e,t,n,s){const a=String(t?.id||n),o=s?.answers?.[a]||null,l=Array.isArray(t?.options)?t.options:[],c=l.find(u=>String(u.value||"")===String(t?.answer||"")),d=c?h(c.label||c):String(t?.answer||"");return`
      <div class="n4-question-block reading-question-block">
        <h3>${i(h(t?.prompt||e.exercise.question?.prompt||{}))}</h3>
        <div class="n5-option-grid">
          ${l.map(u=>{const m=o?.selected===u.value,v=o?.correct&&u.value===t.answer,f=o&&!o.correct&&u.value===t.answer;return`<button class="btn ${v||f?"success":m?"warning":"ghost"}" type="button" data-action="reading-review-answer" data-question="${g(a)}" data-value="${g(u.value)}" ${o||s?.completed?"disabled":""}>${i(h(u.label||u))}</button>`}).join("")}
        </div>
        ${o?`<p class="n5-feedback">${i(o.correct?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Неверно":"Wrong"} · ${d}`)}</p>`:""}
      </div>
    `}function Fk(e){const t=lo(e);if(!t||!t.exercise)return is();const n=Kk(t),s=!!n?.completed,a=t.progress||cn(t.exercise),o=Ek(t.exercise),l=h(t.exercise.sourceTitle||t.exercise.title||{}),c=lt(t.exercise),d=(t.exercise.kind==="question"?[t.exercise.question||t.exercise.questions?.[0]]:[]).filter(A=>A?.id),u=t.exercise.kind==="cloze"||!d.length&&c.length>0;if(!u&&!d.length)return is();const m=u?s?1:Array.isArray(a?.selectedIndices)?a.selectedIndices.length:0:Object.keys(n?.answers||{}).length,v=u?Math.max(1,c.length):Math.max(1,d.length),f=Array.isArray(a?.selectedIndices)?a.selectedIndices:Array.isArray(r.activeExerciseReviewSelection)?r.activeExerciseReviewSelection:[],w=f.map(A=>t.exercise.tiles?.[A]).filter(Boolean),y=Array.isArray(a?.wrongIndexes)?a.wrongIndexes:[],k=Dk(t.exercise);return`
      <article class="study-card textbook-review-card reading-review-card ${s?n?.correct===!1?"is-wrong":"is-correct":""}" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(l||o)}</span>
          <span class="pill">${i(a.state)} · ${i(Kn(a.dueAt))}</span>
          <span class="pill">${i(m)}/${i(v)}</span>
        </div>
        ${k}
        ${u?`
          <div class="sentence-card reading-cloze-card">
            <div class="sentence-line">${Qd(t.exercise,w,y)}</div>
            <p class="sentence-reading">${i(t.exercise.reading||"")}</p>
            <p class="sentence-translation">${i(h({ru:t.exercise.translationRu||t.exercise.ru||"",en:t.exercise.translationEn||t.exercise.en||""}))}</p>
          </div>
          <div class="sentence-tiles">
            ${(t.exercise.tiles||[]).map((A,b)=>{const $=f.includes(b),z=y.includes(b);return`
                <button class="sentence-tile ${$?"is-used":""} ${z?"is-wrong":""}" type="button" data-action="reading-review-tile" data-index="${b}" ${$||s?"disabled":""}>
                  <span>${i(A.reading||"")}</span>
                  <strong>${i(A.kanji)}</strong>
                </button>
              `}).join("")}
          </div>
          <div class="sentence-feedback">
            ${i(n?.completed?n.correct?p()==="ru"?"Верно. Предложение собрано правильно.":"Correct. The sentence is complete.":p()==="ru"?"Проверь красные места и попробуй ещё раз.":"Check the red slots and try again.":p()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.")}
          </div>
          <div class="actions sentence-actions">
            <button class="btn primary" type="button" data-action="reading-review-check" ${s?"disabled":""}>${i(p()==="ru"?"Проверить":"Check")}</button>
            <button class="btn" type="button" data-action="reading-review-undo" ${!f.length||s?"disabled":""}>${i(p()==="ru"?"Убрать":"Undo")}</button>
            <button class="btn" type="button" data-action="reading-review-clear" ${!f.length||s?"disabled":""}>${i(p()==="ru"?"Очистить":"Clear")}</button>
          </div>
        `:d.map((A,b)=>Ok(t,A,b,n)).join("")}
        ${s?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function Bk(e){const t=lo(e);if(!t||!t.exercise)return is();if(t.source==="reading")return Fk(t);const n=!!r.reviewExerciseResults?.[t.exerciseId];return`
      <article class="study-card textbook-review-card" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(t.lessonId||t.progress.lessonId||"")}</span>
          <span class="pill">${i(t.progress.state)} · ${i(Kn(t.progress.dueAt))}</span>
        </div>
        ${Pk(t.level,t.exercise)}
        ${n?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function zk(e){return`
      <article class="empty-state">
          <span class="kanji-char">⚠</span>
        <h2>${i(Ce("eva","lessonComplete"))}</h2>
        <p>${i(e?mr(e):"")}</p>
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="review">↻ ${i(S("review"))}</button>
          <button class="btn" type="button" data-action="route" data-route="dictionary">文 ${i(S("dictionary"))}</button>
        </div>
      </article>
    `}function is(){return`
      <article class="empty-state">
        <span class="kanji-char">休</span>
        <h2>${i(p()==="ru"?"Повторов сейчас нет":"No reviews right now")}</h2>
        <p>${i(Ce("leya","welcome"))}</p>
        <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(S("learn"))}</button>
      </article>
    `}function Jk(){const e=h$(),t=Math.max(ys,Number(r.dictionaryVisibleCount||ys)),n=e.slice(0,t),s=n.length<e.length,a=r.cards.filter(u=>!!r.progress.favorites[u.id]).length,o=["all",...new Set(r.cards.map(u=>u.jlpt))],l=["all",...new Set(r.cards.map(u=>dr(u.id).radical).filter(Boolean))],c=p()==="ru"?`Показано ${n.length} из ${e.length}`:`Showing ${n.length} of ${e.length}`,d=p()==="ru"?"Показать ещё":"Show more";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(S("dictionary"))}</h1>
            <p>${i(c)} · ${e.length}/${r.cards.length}</p>
          </div>
        </div>
        ${Uk(a)}
        <div class="filters">
          <div class="field">
            <label for="dictionarySearch">${i(S("search"))}</label>
            <input id="dictionarySearch" data-filter="query" type="search" value="${g(r.filters.query)}" placeholder="日, にち, sun" autocomplete="off" />
          </div>
          <div class="field">
            <label for="jlptFilter">JLPT</label>
            <select id="jlptFilter" data-filter="jlpt">
              ${o.map(u=>`<option value="${g(u)}" ${kr(u,r.filters.jlpt)}>${i(u==="all"?S("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="strokeFilter">${i(S("strokes"))}</label>
            <select id="strokeFilter" data-filter="strokes">
              ${[["all",S("all")],["1-4","1-4"],["5-8","5-8"],["9-12","9-12"],["13+","13+"]].map(([u,m])=>`<option value="${u}" ${kr(u,r.filters.strokes)}>${i(m)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="radicalFilter">${i(S("radical"))}</label>
            <select id="radicalFilter" data-filter="radical">
              ${l.map(u=>`<option value="${g(u)}" ${kr(u,r.filters.radical)}>${i(u==="all"?S("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="favoriteFilter">${i(S("favorites"))}</label>
            <select id="favoriteFilter" data-filter="favorites">
              <option value="all" ${kr("all",r.filters.favorites)}>${i(S("all"))}</option>
              <option value="yes" ${kr("yes",r.filters.favorites)}>★</option>
            </select>
          </div>
        </div>
        <div class="dictionary-grid" style="margin-top:12px">${n.map(Gk).join("")||Hk()}</div>
        ${s?`
          <div class="dictionary-load-more">
            <span>${i(c)}</span>
            <button class="btn primary" type="button" data-action="dictionary-load-more">${i(d)}</button>
          </div>
        `:""}
      </section>
    `}function Uk(e){const t=r.filters.favorites==="yes",n=p()==="ru"?"Все кандзи":"All kanji",s=p()==="ru"?"Избранные":"Favorites";return`
      <div class="dictionary-tabs" role="tablist" aria-label="${g(S("dictionary"))}">
        <button class="btn ${t?"":"is-active"}" type="button" role="tab" aria-selected="${t?"false":"true"}" data-action="dictionary-favorites-tab" data-favorites="all">
          ${i(n)}
          <span class="dictionary-tab-count">${r.cards.length}</span>
        </button>
        <button class="btn ${t?"is-active":""}" type="button" role="tab" aria-selected="${t?"true":"false"}" data-action="dictionary-favorites-tab" data-favorites="yes">
          ★ ${i(s)}
          <span class="dictionary-tab-count">${e}</span>
        </button>
      </div>
    `}function Gk(e){const t=_(e.id),n=dr(e.id),s=!!r.progress.favorites[e.id];return`
      <button class="kanji-tile" type="button" data-action="open-card" data-id="${g(e.id)}">
        ${qk(e)}
        <div class="tag-row">
          ${Da(t.state)}
          <span class="pill">${i(e.jlpt)}</span>
          <span class="pill">${e.strokes} ${i(S("strokes"))}</span>
          <span class="pill">${i(S("radical"))}: ${i(n.radical||"-")}</span>
          <span class="pill">${i(S("learnedStatus"))}: ${i(mp(t.state))}</span>
          <span class="pill">${s?"★":"☆"}</span>
        </div>
      </button>
    `}function qk(e){return`
      <span class="kanji-line">
        <span class="kanji-char">${i(e.kanji)}</span>
        <span>
          <h3>${i(I(e))}</h3>
          <p>${i(Co(e))}</p>
          <span class="label">${i(zo(e.lessonId))}</span>
        </span>
      </span>
    `}function Hk(){const e=r.filters.favorites==="yes",t=e?p()==="ru"?"В избранном пока пусто":"No favorites yet":p()==="ru"?"Ничего не найдено":"Nothing found",n=e?p()==="ru"?"Открой кандзи и нажми звездочку, чтобы он появился здесь.":"Open a kanji and tap the star to keep it here.":"";return`<article class="empty-state"><span class="kanji-char">無</span><h2>${i(t)}</h2>${n?`<p>${i(n)}</p>`:""}</article>`}function Wk(){const e=te(r.kanjiPageId||Zo());if(!e)return`
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">無</span>
            <h1>${i(p()==="ru"?"Кандзи не найден":"Kanji not found")}</h1>
            <p>${i(p()==="ru"?"Открой словарь и выбери карточку заново.":"Open the dictionary and choose a card again.")}</p>
            <button class="btn primary" type="button" data-action="route" data-route="dictionary">⋯ ${i(S("dictionary"))}</button>
          </article>
        </section>
      `;const t=_(e.id),n=dr(e.id),s=!!r.progress.favorites[e.id],a=dy(e,p()),o=Qk(e),l=bo(e);return`
      <section class="page kanji-page">
        <div class="section-head kanji-page-head">
          <div>
            <button class="btn ghost" type="button" data-action="route" data-route="dictionary">← ${i(S("dictionary"))}</button>
            <h1>${i(o?`${e.kanji} — ${Xk(o)}`:e.kanji)}</h1>
            <p>${i(o?Vk(o):I(e))}</p>
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="study-card" data-id="${g(e.id)}">▶ ${i(S("study"))}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${g(e.id)}">${s?"★":"☆"} ${i(S("favorites"))}</button>
          </div>
        </div>

        <article class="kanji-profile-card">
          <div class="kanji-profile-hero">
            <div class="kanji-profile-char" aria-label="${g(e.kanji)}">${i(e.kanji)}</div>
            <div class="kanji-profile-summary">
              <div class="tag-row">
                ${Da(t.state)}
                <span class="pill">${i(e.jlpt)}</span>
                <span class="pill">${e.strokes} ${i(S("strokes"))}</span>
                <span class="pill">${i(S("radical"))}: ${i(n.radical||"-")} ${i(h(n.radicalMeaning||{}))}</span>
                ${o?`<span class="pill">Grade ${i(o.kanjidic2.grade||"-")}</span><span class="pill">Freq ${i(o.kanjidic2.freq||"-")}</span>`:""}
              </div>
              <h2>${i(I(e))}</h2>
              <p>${i(fr(e))}</p>
              ${ma(e)}
              ${po(e)}
            </div>
          </div>
        </article>

        <div class="kanji-profile-grid">
          ${o?Yk(o):""}
          ${o?Zk(o):""}
          <article class="kanji-profile-card">
            <h2>${i(S("examples"))}</h2>
            <ul class="example-list">${e.examples.map(ha).join("")||`<li>${i(p()==="ru"?"Примеры пока не добавлены.":"No examples yet.")}</li>`}</ul>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(p()==="ru"?"Предложения":"Sentences")}</h2>
            ${o?ey(o):ay(e)}
          </article>

          <article class="kanji-profile-card">
            <h2>${i(S("strokeOrder"))}</h2>
            <p class="label">${i(l?p()==="ru"?"Есть точные SVG-штрихи KanjiVG для практики.":"Precise KanjiVG SVG stroke data is available for practice.":p()==="ru"?"Точного SVG-пути пока нет, доступен полупрозрачный шаблон.":"Precise SVG paths are not available yet; template mode is available.")}</p>
            <ol class="stroke-list">${ir(e).map(c=>`<li>${i(c)}</li>`).join("")}</ol>
            <div class="actions compact-actions">
              ${fa(e)}
            </div>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(S("apps"))}</h2>
            <p>${i(fr(e))}</p>
            <ul class="app-list">${e.apps.map(c=>`<li>${i(c)}</li>`).join("")}</ul>
            ${o?ny(o):""}
            <h3>${i(p()==="ru"?"SEO-страница":"SEO page")}</h3>
            <p class="label">${i(p()==="ru"?"Статическая HTML-страница для поисковиков и превью.":"Static HTML page for search engines and link previews.")}</p>
            <a class="btn primary" href="${g(a)}" target="_blank" rel="noopener">в†— ${i(p()==="ru"?"Публичная страница":"Public page")}</a>
          </article>
          ${o?sy(o):""}
        </div>
      </section>
    `}function Qk(e){return r.kanjiPageSources?.[e?.kanji]||null}function Xk(e){return iu(e.meanings)[0]||e.literal}function iu(e){return e?e[p()]||e.ru||e.en||[]:[]}function os(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function Vk(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{};return[t.why,t.firstSeen].filter(Boolean).join(" ")}function Yk(e){const t=e.kanjidic2||{},n=t.codepoints?.unicode||`U+${t.codepoints?.ucs||""}`;return`
      <article class="kanji-profile-card kanji-facts-card">
        <h2>${i(p()==="ru"?"Факты KANJIDIC2":"KANJIDIC2 facts")}</h2>
        <dl class="kanji-fact-grid">
          <div><dt>${i(p()==="ru"?"Значения":"Meanings")}</dt><dd>${i(iu(e.meanings).join(", "))}</dd></div>
          <div><dt>Onyomi</dt><dd>${i((e.readings?.onyomi||[]).join(" / "))}</dd></div>
          <div><dt>Kunyomi</dt><dd>${i((e.readings?.kunyomi||[]).join(" / "))}</dd></div>
          <div><dt>JLPT</dt><dd>${i(e.jlpt)} <small>${i(os(e.modernJlptNote||{}))}</small></dd></div>
          <div><dt>${i(S("strokes"))}</dt><dd>${i(t.strokeCount||"-")}</dd></div>
          <div><dt>${i(S("radical"))}</dt><dd>${i(`${t.radical||"-"} ${t.radicalLiteral||""} ${os(t.radicalName||{})}`)}</dd></div>
          <div><dt>Grade</dt><dd>${i(t.grade||"-")}</dd></div>
          <div><dt>Unicode</dt><dd>${i(n)}</dd></div>
          <div><dt>Freq</dt><dd>${i(t.freq||"-")}</dd></div>
          <div><dt>${i(p()==="ru"?"Варианты":"Variants")}</dt><dd>${i((e.variants||[]).join(" / ")||"-")}</dd></div>
        </dl>
        <p class="source-note">${i(t.source||"KANJIDIC2 / EDRDG")}</p>
      </article>
    `}function Zk(e){return`
      <article class="kanji-profile-card">
        <h2>${i(p()==="ru"?"Полезные слова JMdict":"Useful JMdict words")}</h2>
        <ul class="kanji-word-list">
          ${(e.commonWords||[]).slice(0,10).map(t=>`
            <li>
              <a href="${g(ry(t))}">
                <b>${uo(t.surface,e.literal)}</b>
                <span>${i(t.reading)} · ${i(os(t.gloss||{}))}</span>
                <small>${i(t.partOfSpeech||"")} · JMdict ${i(t.jmdictSeq||"")}</small>
              </a>
            </li>
          `).join("")}
        </ul>
      </article>
    `}function ey(e){return`
      <ul class="kanji-sentence-list">
        ${ty(e).map(n=>`
          <li>
            <strong>${uo(n.japanese,e.literal)}</strong>
            <small>${i(os(n.translation||{}))}</small>
            <span class="source-note">${i(`${n.sourceName||"Tatoeba"} #${n.sourceId}${n.author?` · ${n.author}`:""}${n.license?` · ${n.license}`:""}`)}</span>
          </li>
        `).join("")}
      </ul>
    `}function ty(e){const t=new Set,n=new Set((e.commonWords||[]).map(s=>s.surface));return(e.sentences||[]).filter(s=>{const a=s.japanese||"";if(!a.includes(e.literal)||t.has(a))return!1;t.add(a);const o=a.replace(/[\sгЂ'гЂЃпјЃпјџ!?гЂЊгЂЌгЂЋгЂЏпј€пј‰()гѓ»гЂњгѓј]/g,"").length;return!(o<3||o>44)}).sort((s,a)=>Number(ou(a.japanese,n))-Number(ou(s.japanese,n))).slice(0,8)}function ou(e,t){return[...t].some(n=>e.includes(n))}function ny(e){return`
      <h3>${i(p()==="ru"?"В интерфейсах":"In interfaces")}</h3>
      <div class="interface-mock-grid">
        ${(e.interfaceContexts||[]).slice(0,6).map(t=>`
          <article class="interface-mock-card ${g(t.type||"card")}">
            <span>${i(os(t.title||{}))}</span>
            <strong>${uo(t.japanese,e.literal)}</strong>
            <small>${i(os(t.translation||{}))}</small>
          </article>
        `).join("")}
      </div>
    `}function sy(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{},n=p()==="ru"?["Почему этот кандзи важен","Частая путаница","Где встретишь раньше всего","На что обратить внимание"]:["Why this kanji matters","Common confusion","Where you will meet it first","What to watch"],s=[t.why,t.confusion,t.firstSeen,t.focus];return`
      <article class="kanji-profile-card editorial-card">
        <h2>${i(p()==="ru"?"Заметки Flash Kanji":"Flash Kanji notes")}</h2>
        ${s.map((a,o)=>a?`<section><h3>${i(n[o])}</h3><p>${i(a)}</p></section>`:"").join("")}
      </article>
    `}function ry(e){return`../word/${encodeURIComponent(e.surface||"")}/`}function uo(e,t){const n=String(t||""),s=String(e||"");return n?s.split(n).map(i).join(`<mark class="kanji-hit" data-kanji="${g(n)}">${i(n)}</mark>`):i(s)}function ay(e){const t=iy(e);return t.length?`
      <ul class="kanji-sentence-list">
        ${t.map(n=>`
          <li>
            <strong>${cy(n)}</strong>
            <span>${i(oy(n))}</span>
            <small>${i(ly(n))}</small>
          </li>
        `).join("")}
      </ul>
    `:`<p class="label">${i(p()==="ru"?"Подходящие предложения появятся, когда база практики содержит этот кандзи.":"Matching sentences will appear when the practice database contains this kanji.")}</p>`}function iy(e){const t=e?.kanji||"";return t?(r.sentenceExercises||[]).filter(n=>{const s=lu(n),a=(n.blanks||[]).flatMap(o=>o.answer||[]).join("");return s.includes(t)||a.includes(t)}).slice(0,6):[]}function lu(e){return e?.sentence||e?.jp||""}function oy(e){return e?.reading||e?.hiragana||""}function ly(e){return p()==="en"?e?.translationEn||e?.en||e?.translationRu||e?.ru||"":e?.translationRu||e?.ru||e?.translationEn||e?.en||""}function cy(e){let t=i(lu(e));return(e?.blanks||[]).map(s=>(s.answer||[]).join("")).forEach(s=>{t=t.replace("___",`<mark>${i(s)}</mark>`)}),t}function dy(e,t="ru"){return`../${t==="en"?"en":"ru"}/kanji/${uy(e)}/`}function uy(e){const t=String(e?.kanji||""),n=Array.from(t).map(o=>`u${o.codePointAt(0).toString(16).padStart(4,"0")}`).join("-"),a=(String(e?.romaji||e?.onyomi_romaji||e?.kunyomi_romaji||"kanji").toLowerCase().split(/[\/,;|()\s]+/).find(o=>/[a-z]/.test(o))||"kanji").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"kanji";return`${n||"kanji"}-${a}`}function py(){const e=te(r.activeCardId)||So()[0]||r.cards[0];e&&(r.activeCardId=e.id,r.activeLessonId=e.lessonId,r.writingStep=oe(r.writingStep,0,Math.max(0,ct(e)-1)));const t=bo(e),n=ct(e),s=p()==="ru"?"Шаг":"Step",a=p()==="ru"?"Получилось":"Got it",o=p()==="ru"?"Показать образец":"Show sample",l=t?p()==="ru"?"Точные SVG-штрихи KanjiVG":"Precise KanjiVG SVG strokes":p()==="ru"?"Fallback: шаблон без фейковых штрихов":"Fallback: template without fake strokes";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(S("writingPractice"))}</h1>
            <p>${i(e?`${e.kanji} · ${I(e)}`:"")}</p>
          </div>
        </div>
        <div class="writing-layout">
          <article class="writing-card" data-section="writing-demo">
            <div class="kanji-focus writing-focus">${i(e?.kanji||"文")}</div>
            ${e?ma(e):""}
            ${e?`<div class="actions"><button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 ${i(S("audio"))}</button></div>`:""}
            <div class="stroke-demo">
              <canvas id="strokeCanvas" width="520" height="280" aria-label="stroke order animation"></canvas>
            </div>
            <div class="writing-step-panel">
              <div class="writing-step-head">
                <span class="pill" id="writingStepCounter">${s} ${r.writingStep+1}/${n}</span>
                <span class="label">${i(ir(e)[r.writingStep]||"")}</span>
                <span class="writing-mode-note">${i(l)}</span>
              </div>
              <div class="writing-step-actions">
                <button class="btn" type="button" data-action="writing-step-prev">←</button>
                <button class="btn primary" type="button" data-action="play-writing-step">${i(o)}</button>
                <button class="btn" type="button" data-action="writing-step-next">→</button>
              </div>
            </div>
            <div class="actions">
              <button class="btn primary" type="button" data-action="replay-writing">${i(S("replay"))}</button>
            </div>
          </article>
          <article class="writing-card">
            <h3>${i(S("strokeOrder"))}</h3>
            ${e?gy(e):""}
            <h3>${i(S("hint"))}</h3>
            <p>${i(Aa(e?.id).hint)}</p>
            <h3>${i(S("mnemonic"))}</h3>
            <p>${i(Aa(e?.id).mnemonic)}</p>
          </article>
          <article class="writing-card writing-practice" data-section="writing-canvas">
            <h3>${i(p()==="ru"?"Поле письма":"Writing area")}</h3>
            <div class="writing-practice-head">
              <span class="pill" id="writingStrokeCounter">0/${n}</span>
            </div>
            <div class="writing-score" id="writingScore">
              <span>0%</span>
              <i style="width:0%"></i>
            </div>
            <canvas id="practiceCanvas" width="520" height="360" aria-label="writing canvas"></canvas>
            <div class="actions writing-practice-actions">
              <button class="btn primary" type="button" data-action="check-writing">${i(a)}</button>
              <button class="btn" type="button" data-action="undo-writing">${i(p()==="ru"?"Отменить черту":"Undo stroke")}</button>
              <button class="btn" type="button" data-action="clear-writing">${i(S("clear"))}</button>
              <button class="btn" type="button" data-action="replay-writing">${i(S("replay"))}</button>
            </div>
            <div class="writing-feedback" id="writingFeedback">${i(p()==="ru"?"Напиши кандзи поверх образца и нажми «Получилось» для самопроверки.":"Write over the guide and tap 'Got it' for self-check.")}</div>
          </article>
        </div>
      </section>
    `}function gy(e){return`
      <ol class="stroke-list writing-guide-list">
        ${ir(e).map((n,s)=>`
          <li class="${s===r.writingStep?"is-active":""}">
            <button type="button" data-action="select-writing-step" data-index="${s}">
              <b>${s+1}</b>
              <span>${i(n)}</span>
            </button>
          </li>
        `).join("")}
      </ol>
    `}function my(){if(!r.detailCardId)return"";const e=te(r.detailCardId);if(!e)return"";const t=_(e.id),n=dr(e.id),s=!!r.progress.favorites[e.id];return`
      <div class="detail-backdrop">
        <article class="detail-sheet" role="dialog" aria-modal="true">
          <div class="detail-title">
            <span class="kanji-char">${i(e.kanji)}</span>
            <div>
              <span class="pill">${i(e.jlpt)}</span> ${Da(t.state)}
              <h2>${i(I(e))}</h2>
              <p>${i(Co(e))} · ${e.strokes} ${i(S("strokes"))}</p>
              <p><span class="pill">${i(S("radical"))}: ${i(n.radical||"-")} ${i(h(n.radicalMeaning||{}))}</span></p>
            </div>
          </div>
          ${ma(e)}
          ${po(e)}
          <h3>${i(S("strokeOrder"))}</h3>
          <ol class="stroke-list">${e.stroke_order.map(a=>`<li>${i(a)}</li>`).join("")}</ol>
          <h3>${i(S("examples"))}</h3>
          <ul class="example-list">${e.examples.map(ha).join("")}</ul>
          <h3>${i(S("apps"))}</h3>
          <p>${i(fr(e))}</p>
          <ul class="app-list">${e.apps.map(a=>`<li>${i(a)}</li>`).join("")}</ul>
          <div class="actions" style="margin-top:14px">
            <button class="btn primary" type="button" data-action="study-card" data-id="${g(e.id)}">▶ ${i(S("study"))}</button>
            <button class="btn" type="button" data-action="open-kanji-page" data-id="${g(e.id)}">↗ ${i(p()==="ru"?"Страница":"Page")}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${g(e.id)}">${s?"★":"☆"} ${i(S("favorites"))}</button>
            ${fa(e)}
            <button class="btn" type="button" data-action="close-detail">OK</button>
          </div>
        </article>
      </div>
    `}function po(e){const t=Lo(e),n=us(e);return`
      <section class="audio-panel">
        <h3>${i(S("audio"))}</h3>
        <div class="actions">
          ${t?`<button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 Kanji</button>`:""}
          ${fy(e,n)}
          ${!t&&!n.length?`<span class="label">${i(p()==="ru"?"Озвучка для этой карточки пока не найдена.":"Audio for this card is not available yet.")}</span>`:""}
        </div>
      </section>
    `}function fy(e,t=us(e)){return t.length?`
          <div class="reading-tts-list" aria-label="${g(p()==="ru"?"Системная озвучка чтений":"System reading TTS")}">
            ${t.map(n=>`
              <button class="btn ghost reading-tts-choice" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-text="${g(n.kana)}" data-tts-label="${g(go(n))}">
                <span>${i(go(n))}</span>
                ${i(n.kana)}
              </button>
            `).join("")}
          </div>
        `:""}function go(e){return e.kind==="onyomi"?Ca("onyomi"):e.kind==="kunyomi"?Ca("kunyomi"):e.label||"TTS"}function hy(){const e=No(),t=Lt(),n=Tt();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(S("stats"))}</h1>
            <p>${i(S("xp"))} · ${i(S("level"))} · ${i(S("coins"))}</p>
          </div>
          <div class="actions">
            ${fs("stats")}
            <button class="btn primary" type="button" data-action="route" data-route="achievements">в—ђ ${i(S("achievements"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${T(S("xp"),`${n.current}/${n.next}`,`${S("level")} ${r.progress.level}`,n.percent)}
          ${T(S("streak"),r.progress.streak.current,`${r.progress.streak.best} best`,R(r.progress.streak.current,30))}
          ${T(S("mastered"),e.mastered,`${e.total}`,R(e.mastered,e.total))}
          ${T(S("successRate"),`${Du()}%`,`${Ao()} reviews`,Du())}
          ${T(S("errors"),t.mistakes||0,`${r.progress.totalWrong} total`,R(t.mistakes||0,Math.max(t.reviews||1,1)))}
        </div>
        <div class="stats-grid" style="margin-top:12px">
          <article class="chart-panel"><h3>${i(S("activity"))}</h3><div class="chart-box"><canvas id="activityChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(S("streak"))}</h3><div class="chart-box"><canvas id="streakChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(S("jlptProgress"))}</h3><div class="chart-box"><canvas id="jlptChart"></canvas></div></article>
          <article class="chart-panel"><h3>Повторение</h3><div class="chart-box"><canvas id="stateChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(S("errors"))}</h3><div class="chart-box"><canvas id="mistakeChart"></canvas></div></article>
          <article class="tool-panel">${wy()}</article>
          <article class="tool-panel" data-section="shop-panel">${ky()}</article>
          <article class="tool-panel">${uu()}</article>
          <article class="tool-panel">
            <h3>${i(S("settings"))}</h3>
            <div class="settings-list">
              <div class="settings-row">
                <span>
                  <strong>${i(qt().badge)}</strong>
                  <small>${i(qt().hint)}</small>
                </span>
                <span class="pill">${i(qt().status)}</span>
              </div>
              <div class="settings-row">
                <span>
                  <strong>${i(p()==="ru"?"Звуки интерфейса":"UX sounds")}</strong>
                  <small>${i(p()==="ru"?"Клики, ответы, награды и уведомления.":"Clicks, answers, rewards, and in-app notices.")}</small>
                </span>
                <button class="btn ${Pa()?"success":"ghost"}" type="button" data-action="toggle-ux-sound">${Pa()?"On":"Off"}</button>
              </div>
              <div class="settings-row">
                <span>
                  <strong>${i(p()==="ru"?"Экскурсия":"Onboarding")}</strong>
                  <small>${i(p()==="ru"?"Повторить первое знакомство СЃ Flash Kanji.":"Replay the first-time tour.")}</small>
                </span>
                <button class="btn ghost" type="button" data-action="repeat-onboarding">${i(p()==="ru"?"Повторить":"Repeat tour")}</button>
              </div>
              <label class="settings-row settings-row-range">
                <span>
                  <strong>${i(p()==="ru"?"Громкость UX":"UX volume")}</strong>
                  <small>${i(p()==="ru"?"Не влияет на озвучку кандзи и музыку.":"Does not affect kanji voice or music.")}</small>
                </span>
                <input class="ux-volume-slider" type="range" min="0" max="100" step="5" value="${Math.round(Ea()*100)}" data-ux-volume />
                <strong class="volume-value" data-ux-volume-label>${Math.round(Ea()*100)}%</strong>
              </label>
            </div>
            <div class="actions">
              <button class="btn primary" type="button" data-action="export">⬇ ${i(S("export"))}</button>
              <button class="btn" type="button" data-action="import">⬆ ${i(S("import"))}</button>
              <button class="btn danger" type="button" data-action="reset">↺ ${i(S("reset"))}</button>
            </div>
          </article>
        </div>
      </section>
    `}function Rn(){return r.achievements?.length?r.achievements:r.rewards?.achievements||[]}function vy(){return r.achievementCategories?.length?r.achievementCategories:[...new Set(Rn().map(t=>t.category||"learning"))].map(t=>({id:t,title:{ru:t,en:t},icon:"moon"}))}function mo(e){return h(e.title||e.name||{ru:e.id,en:e.id})}function cu(e){return h(e.description||{})}function fo(e){return{moon:"月",book:"ж›ё",memory:"記",flame:"зЃ«",star:"星",brush:"з­†",text:"文",lock:"йЌµ",eye:"眼"}[e]||"в—†"}function wy(){return`<h3>${i(S("achievements"))}</h3><div class="achievement-grid compact">${Rn().slice(0,8).map(du).join("")}</div>`}function by(){const e=Rn(),t=sS(),n=e.reduce((s,a)=>({xp:s.xp+(a.rewardXp||0),coins:s.coins+(a.rewardFragments||0)}),{xp:0,coins:0});return`
      <section class="page achievements-page">
        <div class="section-head">
          <div>
            <h1>${i(S("achievements"))}</h1>
            <p>${i(p()==="ru"?"Лунные цели, секреты Евы и Леи, награды за прогресс.":"Moon goals, Eva and Leya secrets, and progress rewards.")}</p>
          </div>
          <div class="actions">
            ${fs("achievements")}
            <button class="btn" type="button" data-action="route" data-route="stats">в–Ґ ${i(S("stats"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${T(S("achievements"),`${t}/${e.length}`,p()==="ru"?"открыто":"unlocked",R(t,e.length))}
          ${T("XP",n.xp,p()==="ru"?"в наградах":"in rewards",R(t,e.length))}
          ${T(S("coins"),n.coins,p()==="ru"?"в наградах":"in rewards",R(t,e.length))}
          ${T(p()==="ru"?"Секреты":"Secrets",`${e.filter(s=>s.secret&&bs(s.id)).length}/${e.filter(s=>s.secret).length}`,"Eva · Leya",R(e.filter(s=>s.secret&&bs(s.id)).length,Math.max(1,e.filter(s=>s.secret).length)))}
        </div>
        <div class="achievement-category-list">
          ${vy().map(s=>{const a=e.filter(l=>l.category===s.id);if(!a.length)return"";const o=a.filter(l=>bs(l.id)).length;return`
              <section class="achievement-category">
                <div class="section-head compact-head">
                  <div>
                    <h2>${fo(s.icon)} ${i(h(s.title))}</h2>
                    <p>${o}/${a.length}</p>
                  </div>
                  <span class="pill">${R(o,a.length)}%</span>
                </div>
                <div class="achievement-grid expanded">${a.map(l=>du(l,!0)).join("")}</div>
              </section>
            `}).join("")}
        </div>
      </section>
    `}function du(e,t=!1){const n=bs(e.id),s=ku(e),a=Math.max(1,Number(e.target||1)),o=R(s,a),l=Math.min(s,a),c=e.secret&&!n&&!t?p()==="ru"?"Секретное достижение":"Secret achievement":mo(e),d=e.secret&&!n&&!t?p()==="ru"?"Откроется при необычном действии.":"Unlocked by an unusual action.":cu(e);return`
      <div class="achievement ${n?"is-unlocked":""} ${e.secret?"is-secret":""}">
        <span class="achievement-icon">${fo(e.icon)}</span>
        <strong>${i(c)}</strong>
        <small>${i(d)}</small>
        <div class="achievement-progress" aria-label="${g(`${l}/${a}`)}"><i style="width:${o}%"></i></div>
        <small class="achievement-reward">+${e.rewardXp||0} XP · +${e.rewardFragments||0} ${i(S("coins"))}</small>
      </div>
    `}function ky(){return jc({closable:!1})}function uu(e={}){const t=e.limit||10,n=(r.progress.transactions||[]).slice(0,t);return`
      <h3>${i(S("transactions"))}</h3>
      <div class="transaction-list">
        ${n.map(s=>`
          <div class="transaction-row">
            <div>
              <strong>${i(yy(s))}</strong>
              <small>${i(jj(s.at))}</small>
            </div>
            <span>${Number(s.coins||0)>=0?"+":""}${Number(s.coins||0)} Moon · ${Number(s.xp||0)>=0?"+":""}${Number(s.xp||0)} XP</span>
          </div>
        `).join("")||`<p>${i(p()==="ru"?"Пока нет операций.":"No transactions yet.")}</p>`}
      </div>
    `}function yy(e){if(e.label)return e.label;const t=String(e.reason||""),n=t.match(/^customization:[^:]+:(.+)$/);if(n){const s=de(n[1]);if(s)return rt(s)}return t.startsWith("achievement:")?p()==="ru"?"Достижение":"Achievement":t.startsWith("daily_bonus")?p()==="ru"?"Ежедневный бонус":"Daily bonus":t.startsWith("sentence")?p()==="ru"?"Практика предложений":"Sentence practice":t.startsWith("writing")?p()==="ru"?"Практика письма":"Writing practice":t.startsWith("lesson")?p()==="ru"?"Урок":"Lesson":t.startsWith("review")?p()==="ru"?"Повторение":"Review":t.startsWith("shop:")?p()==="ru"?"Магазин":"Shop":p()==="ru"?"Операция":"Transaction"}function $y(){if(!r.rewardModal)return"";const e=r.rewardModal,t=e.type==="level",n=e.type==="achievement",s=Tt(),a=t?`${S("level")} ${r.progress.level} - ${s.current}/${s.next} XP - ${r.progress.moonFragments} ${S("coins")}`:e.message;return`
      <div class="reward-backdrop ${t?"is-level":""}">
        <article class="reward-modal ${t?"is-level":""} ${n?"is-achievement":""}">
          ${t?'<img class="reward-logo" src="assets/logo.webp" alt="Flash Kanji" />':""}
          ${n?`<div class="reward-achievement-icon">${fo(e.icon)}</div>`:""}
          <div class="reward-modal-actions">
            ${t?`<button class="btn primary share-btn" type="button" data-action="share-achievement">${i(S("shareAchievement"))}</button>`:""}
            <button class="btn primary" type="button" data-action="close-reward">OK</button>
          </div>
          ${ls(e.mascot||"eva",e.mood||"happy",e.dialog||"achievement","reward-mascot")}
          <h2>${i(e.title)}</h2>
          <p>${i(a)}</p>
          <div class="reward-values">
            ${t?`<span>${i(S("level"))} ${r.progress.level}</span>`:""}
            ${e.xp?`<span>+${e.xp} XP</span>`:""}
            ${t?`<span>${s.current}/${s.next} XP</span>`:""}
            ${e.coins?`<span>+${e.coins} ${i(S("coins"))}</span>`:""}
            ${t?`<span>${r.progress.moonFragments} ${i(S("coins"))}</span>`:""}
          </div>
        </article>
      </div>
    `}function jy(){if(!r.contactModal)return"";const e=p()==="ru"?"Сообщить об ошибке":"Report a bug",t=p()==="ru"?"Если почтовое приложение не открывается, скопируй адрес и отправь сообщение вручную.":"If your mail app does not open, copy the address and send the message manually.",n=p()==="ru"?"Скопировать email":"Copy email",s=p()==="ru"?"Открыть почту":"Open email",a=p()==="ru"?"Закрыть":"Close",o=encodeURIComponent(Ep),l=encodeURIComponent(p()==="ru"?`Привет! Я нашел ошибку в Flash Kanji:

`:`Hi! I found an issue in Flash Kanji:

`),c=`mailto:${Dt}?subject=${o}&body=${l}`;return`
      <div class="reward-backdrop contact-backdrop">
        <article class="reward-modal contact-modal" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle" aria-describedby="contactModalDesc">
          <div class="contact-modal-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <rect x="3" y="5" width="18" height="14" rx="3" ry="3" fill="none" stroke="currentColor" stroke-width="2" />
              <path d="M4 7.5 12 13l8-5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </svg>
          </div>
          <h2 id="contactModalTitle">${i(e)}</h2>
          <p id="contactModalDesc">${i(t)}</p>
          <div class="contact-email-block">
            <strong>${i(Dt)}</strong>
            <small>${i(p()==="ru"?"Для багов, багрепортов и ошибок интерфейса.":"For bugs, bug reports, and UI issues.")}</small>
          </div>
          <div class="actions contact-modal-actions">
            <button class="btn ghost" type="button" data-action="copy-contact-email">${i(n)}</button>
            <a class="btn primary" href="${g(c)}">${i(s)}</a>
            <button class="btn" type="button" data-action="close-contact-modal">${i(a)}</button>
          </div>
        </article>
      </div>
    `}function Sy(){if(!r.pwaInstallHelpVisible)return"";const e=ws(),t=p()==="ru"?"Как установить приложение":"How to install the app",n=p()==="ru"?"Кнопка открыла подсказку, потому что браузер ещё не показал системное окно установки.":"The button opened a quick guide because the browser has not yet shown the system install prompt.",s=p()==="ru"?"Понятно":"Got it",a=e?p()==="ru"?["Открой Flash Kanji в Safari.","Нажми “Поделиться”, затем “На экран Домой”.","Подтверди установку."]:["Open Flash Kanji in Safari.","Tap Share, then choose Add to Home Screen.","Confirm the install."]:p()==="ru"?["Открой меню браузера.","Найди пункт “Установить приложение” или “Установить Flash Kanji”.","Подтверди установку."]:["Open the browser menu.","Choose Install app or Install Flash Kanji.","Confirm the install."];return`
      <div class="reward-backdrop contact-backdrop pwa-install-help-backdrop">
        <article class="reward-modal contact-modal pwa-install-help-modal" role="dialog" aria-modal="true" aria-labelledby="pwaInstallHelpTitle">
          <div class="contact-modal-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M12 4v9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
              <path d="M8.5 9.5 12 13l3.5-3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              <path d="M5 16.5h14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
            </svg>
          </div>
          <h2 id="pwaInstallHelpTitle">${i(t)}</h2>
          <p>${i(n)}</p>
          <ul class="pwa-install-help-list">
            ${a.map(o=>`<li>${i(o)}</li>`).join("")}
          </ul>
          <div class="actions contact-modal-actions">
            <button class="btn primary" type="button" data-action="close-pwa-install-help">${i(s)}</button>
          </div>
        </article>
      </div>
    `}function Ny(){if(uc()||r.pwaInstallHelpVisible||!qo()||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal)return"";const e=hp(),t=!Ot&&ws();return`
      <aside class="pwa-install-banner" role="dialog" aria-modal="false" aria-label="${g(e.title)}">
        <div class="pwa-install-logo"><img src="assets/logo.webp" alt="Flash Kanji" /></div>
        <div class="pwa-install-copy">
          <span class="pill">${i(e.badge)}</span>
          <h2>${i(e.title)}</h2>
          <p>${i(e.description)}</p>
          ${t?`<p class="pwa-install-instruction">${i(e.iosInstruction)}</p>`:""}
        </div>
        <div class="pwa-install-actions">
          <button class="btn primary" type="button" data-action="pwa-install">${i(e.install)}</button>
          <button class="btn ghost" type="button" data-action="pwa-later">${i(e.later)}</button>
        </div>
      </aside>
    `}function Ay(){if(uc()||!r.notificationPromptVisible||!Fa("visible")||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible||qo())return"";const e=$p();return`
      <aside class="pwa-install-banner notification-permission-banner" role="dialog" aria-modal="false" aria-label="${g(e.title)}">
        <div class="pwa-install-logo notification-bell">月</div>
        <div class="pwa-install-copy">
          <span class="pill">${i(e.badge)}</span>
          <h2>${i(e.title)}</h2>
          <p>${i(e.description)}</p>
        </div>
        <div class="pwa-install-actions">
          <button class="btn primary" type="button" data-action="notification-allow">${i(e.allow)}</button>
          <button class="btn ghost" type="button" data-action="notification-later">${i(e.later)}</button>
        </div>
      </aside>
    `}function xy(e,t,n){const s=vs(e),a=va(e,t,n),o=fu(Ce(e,n));return`
      <article class="sidekick mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(a)}" alt="${g(h(s.name))}" />
        <div><strong>${i(h(s.name))}</strong><p>${i(o)}</p></div>
      </article>
    `}function ls(e,t,n,s){const a=vs(e),o=va(e,t,n),l=fu(Ce(e,n)),c=`${s||"mascot"}:${e}:${n}:${r.route}:${r.activeTextbookLevel||r.activeJlptLesson||""}`.toLowerCase();return gu(c)?`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(o)}" alt="${g(h(a.name))}" />
      </div>
    `:`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(o)}" alt="${g(h(a.name))}" />
        <div class="speech speech-dismissible" data-mascot-speech-key="${g(c)}" data-autohide-ms="7000">
          <button class="speech-close" type="button" data-action="dismiss-mascot-speech" data-speech-key="${g(c)}" aria-label="${g(p()==="ru"?"Закрыть облако":"Close speech bubble")}">✕</button>
          <span class="speech-text">${i(l)}</span>
        </div>
      </div>
    `}function pu(){try{const e=sessionStorage.getItem(Ee);return e?JSON.parse(e)||{}:{}}catch{return{}}}function Cy(e){try{sessionStorage.setItem(Ee,JSON.stringify(e||{}))}catch{}}function gu(e){return e?!!pu()[e]:!1}function mu(e){if(!e)return;const t=pu();t[e]=Date.now(),Cy(t);const n=yn.get(e);n&&(clearTimeout(n),yn.delete(e)),N()}function Ly(){const e=new Set;ti("[data-mascot-speech-key][data-autohide-ms]").forEach(t=>{const n=String(t.dataset.mascotSpeechKey||"");if(!n||gu(n)||(e.add(n),yn.has(n)))return;const s=Number(t.dataset.autohideMs||0);if(!s)return;const a=window.setTimeout(()=>{yn.delete(n),mu(n)},s);yn.set(n,a)});for(const[t,n]of yn)e.has(t)||(clearTimeout(n),yn.delete(t))}function va(e,t="normal",n="welcome"){if(e==="eva")return Vn(Wt(null,Iy(t,n)));const s=vs(e);return s.sprites?.[t]||Object.values(s.sprites||{})[0]||""}function Iy(e="normal",t="welcome"){const n=String(t||"").toLowerCase(),s=String(e||"").toLowerCase(),a={welcome:"welcome",correct:"approve",wrong:"sad",progress:"observe",streakloss:"sad",lessoncomplete:"proud",masterymilestone:"proud",achievement:"achievement",goal:"reward",combo:"proud",hint:"think",dailybonus:"reward"},o={normal:"welcome",calm:"neutral",happy:"happy",proud:"proud",thinking:"think",focus:"think",sad:"sad",angry:"strict",shy:"shy"},l=o[s]&&!["normal","calm"].includes(s)?o[s]:null;return l&&(!n||n==="welcome")?l:a[n]||o[s]||s||"neutral"}function fu(e){if(p()!=="ru")return e;const t="[А-Яа-яЁё]";return String(e||"").replace(new RegExp(`(^|\\s)(${t})\\s+(?=${t}{4,})`,"gu"),"$1$2 ")}function Ty(e){const t=te(r.activeCardId);if(!t||!Fp[e])return;Ts(t,"srs_rating"),Vu();const n=ne(_(t.id)),s=be(n,e);r.progress.cards[t.id]=s,an(n,s,e),Ne();const a=Number(r.progress.correctCombo||0);_n(e)?(r.progress.totalWrong+=1,r.progress.correctCombo=0,ve({discipline:-.8,trust:-.2},"answer_again"),we("answer_wrong",{cardId:t.id,kanji:t.kanji,rating:e,comboLost:a>0}),hr("again"),O(Ce("eva","wrong"))):(B(r.rewards.rewards.correctXp,r.rewards.rewards.correctCoins,"review_success"),r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo),ve({trust:.35,discipline:.25,curiosity:s.lastDecision==="Easy"?.2:0},`answer_${e}`),we("answer_correct",{cardId:t.id,kanji:t.kanji,rating:e,combo:r.progress.correctCombo}),hr("ok"),O(Ce("eva","correct")),r.progress.correctCombo>0&&r.progress.correctCombo%5===0&&(B(r.rewards.rewards.comboXp,0,"combo_bonus"),Ze({title:"Combo",message:Ce("leya","combo"),xp:r.rewards.rewards.comboXp,coins:0,mascot:"leya",mood:"proud",dialog:"combo"}))),Ps(),Ey(t.lessonId),wo(),H(),r.reviewQueueLastKind="card",j(),r.revealed=!1,r.activeCardId=null,yt(),r.pendingFocus="__scroll-top__",Oe()}function wa(){return p()==="ru"?{forgot:"Не помню",remember:"Помню",forgotHint:"вернём быстро",rememberHint:"Повторение выберет срок"}:{forgot:"Forgot",remember:"Remember",forgotHint:"review soon",rememberHint:"review decides"}}function Ry(e){const t=wa(),n=_(e.id),s=_y(n,"remember"),a=Cm(n,s);return`${t.rememberHint}: ${Lm(Am(a))}`}function _y(e,t){if(_n(t))return"again";const n=e.state||"New",s=Number(e.reviewCount||0),a=Number(e.correct||0),o=Number(e.wrong||0),l=Number(e.lapses||0),c=Number(e.successRate||(s?a/Math.max(a+o,1)*100:0));return n==="New"?"good":n==="Learning"?c>=70||a>=2?"good":"hard":c>=88&&a>=5&&l<=1?"easy":c<70||l>Math.max(1,Math.floor(a/3))?"hard":"good"}function _n(e){return e==="forgot"||e==="again"}function cs(e="",t="",n="",s={}){return{level:String(e||"").toUpperCase(),lessonId:String(s.lessonId||t||""),exerciseId:String(s.exerciseId||n||""),cardId:String(s.cardId||""),kanji:String(s.kanji||""),type:String(s.type||""),title:s.title||null,prompt:String(s.prompt||""),answer:String(s.answer||""),answerLabel:String(s.answerLabel||""),state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]}}function Mn(e,t={}){const s={...cs(t.level||"",t.lessonId||"",t.exerciseId||"",t),...Ua(e||{})};return s.level=String(t.level||s.level||"").toUpperCase(),s.lessonId=String(t.lessonId||s.lessonId||""),s.exerciseId=String(t.exerciseId||s.exerciseId||""),s.cardId=String(t.cardId||s.cardId||""),s.kanji=String(t.kanji||s.kanji||""),s.type=String(t.type||s.type||""),s.title=t.title||s.title||null,s.prompt=String(t.prompt||s.prompt||""),s.answer=String(t.answer||s.answer||""),s.answerLabel=String(t.answerLabel||s.answerLabel||""),s.successRate=fp(s),Number.isFinite(Number(s.srsStep))?s.srsStep=oe(Math.trunc(Number(s.srsStep)),-1,63):s.srsStep=yi(s),hu(s)?s:cs(s.level,s.lessonId,s.exerciseId,s)}function hu(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.lastRating||Number(e.correct||0)>0||Number(e.wrong||0)>0||Array.isArray(e.history)&&e.history.length)}function ba(e,t,n){const s={...e||{}};return Object.entries(t||{}).forEach(([a,o])=>{s[a]=Mn(o,{level:n,exerciseId:a,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""})}),s}function My(e){const t=W(e);return t==="N5"?Q():t==="N4"?K():t==="N3"?P():t==="N2"?E():null}function ho(e){const t=W(e);return t==="N5"?Te():t==="N4"?He():t==="N3"?Qe():t==="N2"?Ve():[]}function Py(e,t){const n=W(e),s=String(t||"");return!n||!s?null:ho(n).find(a=>a.id===s||a.id===`${n.toLowerCase()}-${s}`||a.id.endsWith(`-${s}`))||null}function vu(e){const t=W(e);return t==="N5"?zs:t==="N4"?ia:t==="N3"?oa:t==="N2"?la:null}function vo(e,t,n=""){const s=vu(e),a=W(e),o=String(t||"");if(!s||!a||!o)return null;const l=Py(a,n);if(l){const c=s(l).find(d=>String(d.id)===o);if(c)return c}for(const c of ho(a)){const d=s(c).find(u=>String(u.id)===o);if(d)return d}return null}function ka(e,t){const n=W(t);if(!e||!n)return!1;e.exerciseSrs||(e.exerciseSrs={});const s=new Set([...Object.keys(e.viewedLessons||{}),...Object.keys(e.completedLessons||{})]),a=new Set([...Object.keys(e.completedExercises||{}),...Object.keys(e.exerciseResults||{})]);let o=!1;return a.forEach(l=>{if(e.exerciseSrs[l])return;const c=vo(n,l);if(!c||!s.has(String(c.lessonId||"")))return;const d=cs(n,c.lessonId||"",c.id,c),u=e.exerciseResults?.[l]||null,m=!!e.completedExercises?.[l],v=be(ne(d),m||u?.correct?"good":"again");v.level=n,v.lessonId=String(c.lessonId||v.lessonId||""),v.exerciseId=String(c.id||l||""),v.cardId=String(c.cardId||v.cardId||""),v.kanji=String(c.kanji||v.kanji||""),v.type=String(c.type||v.type||""),v.title=c.title||v.title||null,v.prompt=String(c.prompt||v.prompt||""),v.answer=String(c.answer||v.answer||""),v.answerLabel=String(c.answerLabel||v.answerLabel||""),e.exerciseSrs[l]=v,o=!0}),o}function ya(e,t){const n=W(t);if(!e||!n)return!1;const s=ho(n),a=vu(n);if(!a?.length&&!a)return!1;e.exerciseSrs||(e.exerciseSrs={});const o=new Map;s.forEach(c=>{(a(c)||[]).forEach(d=>{d?.id&&o.set(String(d.id),{exercise:d,lesson:c})})});let l=!1;return Object.entries(e.exerciseSrs).forEach(([c,d])=>{const u=o.get(String(c));if(!u)return;const{exercise:m,lesson:v}=u,f=Mn(d,{level:n,lessonId:v.id,exerciseId:m.id,cardId:m.cardId||"",kanji:m.kanji||"",type:m.type||"",title:m.title||null,prompt:m.prompt||"",answer:m.answer||"",answerLabel:m.answerLabel||""});JSON.stringify(d)!==JSON.stringify(f)&&(e.exerciseSrs[c]=f,l=!0)}),l}function Ey(e){if(r.progress.lessonCompletions[e])return;const t=xo(e);if(!(t.length>0&&t.every(o=>_(o.id).state!=="New")))return;const s=r.rewards.rewards.lessonCompleteXp,a=r.rewards.rewards.lessonCompleteCoins;r.progress.lessonCompletions[e]=new Date().toISOString(),x("lesson_complete"),B(s,a,"lesson_completion"),ve({warmth:2.4,trust:2,discipline:2.2,curiosity:.8},"lesson_completion"),we("lesson_complete",{lessonId:e,xp:s,coins:a}),Ze({title:h({ru:"Урок завершён",en:"Lesson complete"}),message:Ce("eva","lessonComplete"),xp:s,coins:a,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),Ba("lesson_complete")}function wo(){const e=se(),t=Lt();if(t.goalClaimed||t.reviews<r.progress.settings.dailyGoal)return;t.goalClaimed=!0;const n=r.rewards.rewards.comboXp,s=r.rewards.rewards.streakCoins;B(n,s,"daily_goal"),Ze({title:S("dailyGoal"),message:Ce("leya","goal"),xp:n,coins:s,mascot:"leya",mood:"happy",dialog:"goal"}),r.progress.daily[e]=t}function Dy(){const e=$a(),t=se();e.firstVisitDate||(e.firstVisitDate=t),e.lastVisitDate=t,r.progress.appOpens=Number(r.progress.appOpens||0)+1;const n=new Date().getHours();(n>=22||n<5)&&(r.progress.secrets.nightVisit=!0),wu()}function wu(){const e=r.progress.streak,t=Ml(e.pendingReward);if(!t||se()<t.availableOn)return!1;e.pendingReward=null;const n=r.rewards.rewards.streakCoins;return x("streak_reward"),B(0,n,`streak:${t.milestone}:claim`),Ze({title:p()==="ru"?"Награда за стрик":"Streak reward",message:p()==="ru"?`Бонус за серию ${t.milestone} дней готов.`:`Your ${t.milestone}-day streak bonus is ready.`,xp:0,coins:n,mascot:"eva",mood:"achievement",dialog:"achievement"}),H(),j(),!0}function Ky(e){if(e==="eva"){r.progress.secrets.evaClicks=Number(r.progress.secrets.evaClicks||0)+1,ve({warmth:.2,curiosity:.1},"eva_click"),O(Ce("eva","welcome")),H(),j(),N();return}e==="leya"&&O(Ce("leya","combo"))}function bu(){ie(),r.progress.secrets.evaClicks=Number(r.progress.secrets.evaClicks||0)+1,r.evaRuntime||(r.evaRuntime=ft()),r.evaRuntime.clickCount=Number(r.evaRuntime.clickCount||0)+1,we("user_clicked_eva",{clickCount:r.evaRuntime.clickCount}),H(),x("notification_soft"),j(),N()}function Oy(){if(U.completed)return;U.completed=!0,r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,U.cardId&&(r.progress.writingPractice.cards[U.cardId]=(r.progress.writingPractice.cards[U.cardId]||0)+1),ve({curiosity:1,discipline:.8,trust:.4},"writing_complete"),we("writing_complete",{cardId:U.cardId});const e=H();j(),e&&N()}function Fy(){const e=se();$a();const t=By(),n=Er(r.progress.dailyBonusPending);n&&n.availableOn>e||(n&&n.availableOn<=e&&!t&&(r.progress.dailyBonusPending=null),r.progress.dailyBonusPending={availableOn:jp(e,1)},j())}function By(){const e=se(),t=$a(),n=Er(r.progress.dailyBonusPending);if(!n||se()<n.availableOn||r.progress.dailyBonuses[e]||t.lastDailyBonusDate===e)return!1;r.progress.dailyBonusPending=null;const s=t.lastDailyBonusDate||t.firstVisitDate||t.lastVisitDate;return zy(s,e),t.lastVisitDate=e,t.lastDailyBonusDate=e,r.progress.dailyBonuses[e]=new Date().toISOString(),x("daily_bonus"),B(r.rewards.rewards.dailyBonusXp,r.rewards.rewards.dailyBonusCoins,"daily_bonus"),ve({warmth:1,discipline:.8},"daily_bonus"),Ze({title:S("dailyBonus"),message:Ce("leya","welcome"),xp:r.rewards.rewards.dailyBonusXp,coins:r.rewards.rewards.dailyBonusCoins,mascot:"leya",mood:"calm",dialog:"welcome"}),H(),Qo(),!0}function $a(){var t;(t=r.progress).visits||(t.visits={});const e=r.progress.visits;return e.firstVisitDate||(e.firstVisitDate=null),e.lastVisitDate||(e.lastVisitDate=null),e.lastDailyBonusDate||(e.lastDailyBonusDate=null),e.streak=Number(e.streak||0),e.bestStreak=Number(e.bestStreak||0),e}function zy(e,t){const n=$a();n.streak=e&&mn(e,t)===1?n.streak+1:1,n.bestStreak=Math.max(n.bestStreak||0,n.streak);const s=r.progress.streak.lastStudyDate;s!==t&&(r.progress.streak.current=s&&mn(s,t)===1?r.progress.streak.current+1:1,r.progress.streak.lastStudyDate=t,r.progress.streak.best=Math.max(r.progress.streak.best||0,r.progress.streak.current),r.progress.streakHistory.push({date:t,value:r.progress.streak.current}),r.progress.streakHistory=r.progress.streakHistory.slice(-120))}function H(){if(!Rn().length)return 0;let e=0;return Rn().forEach(t=>{if(bs(t.id)||!Jy(t))return;e+=1;const n=t.rewardXp||0,s=t.rewardFragments||0;r.progress.achievements[t.id]={unlockedAt:new Date().toISOString(),rewardXp:n,rewardFragments:s},Ze({type:"achievement",title:mo(t),message:cu(t),xp:n,coins:s,icon:t.icon,mascot:"eva",mood:"happy",dialog:"achievement"}),B(n,s,`achievement:${t.id}`)}),e}function Jy(e){return ku(e)>=Number(e.target||1)}function ku(e){if(e.kind==="lessonComplete")return Object.keys(r.progress.lessonCompletions).length;if(e.kind==="correct")return r.progress.totalCorrect;if(e.kind==="learned")return No().learned;if(e.kind==="reviews")return Ao();if(e.kind==="streak")return Math.max(r.progress.streak.current||0,r.progress.streak.best||0);if(e.kind==="level")return r.progress.level||1;if(e.kind==="moonFragments")return r.progress.totalMoonFragmentsEarned||0;if(e.kind==="writing")return r.progress.writingPractice?.completed||0;if(e.kind==="sentence")return Object.keys(r.progress.sentencePractice?.completed||{}).length;if(e.kind==="evaClicks")return r.progress.secrets?.evaClicks||0;if(e.kind==="nightVisit")return r.progress.secrets?.nightVisit?1:0;if(e.kind==="appOpens")return r.progress.appOpens||0;if(e.kind==="n5KanjiStudied")return Object.keys(Q().studiedKanji||{}).length;if(e.kind==="n5LessonComplete"||e.kind==="n5LessonsComplete")return Cn();if(e.kind==="n5Writing")return Object.keys(Q().writingPractice||{}).length;if(e.kind==="n5SrsAll")return Object.keys(Q().srsKanji||{}).length;if(e.kind==="n5FinalPass")return Q().finalTest?.passed?1:0;if(e.kind==="n4Opened")return K().opened?1:0;if(e.kind==="n4LessonComplete")return Object.keys(K().completedLessons||{}).length;if(e.kind==="n4LessonsComplete")return Object.keys(K().completedLessons||{}).length;if(e.kind==="n4SrsAll")return Object.keys(K().srsKanji||{}).length;if(e.kind==="n4GrammarComplete")return Object.keys(K().completedGrammar||{}).length;if(e.kind==="n4ReadingComplete")return Object.keys(K().completedReading||{}).length;if(e.kind==="n4ListeningComplete")return Object.keys(K().completedListening||{}).length;if(e.kind==="n4Writing")return Object.keys(K().writingPractice||{}).length;if(e.kind==="n4FinalPass")return K().finalTest?.passed?1:0;if(e.kind==="n3Opened")return P().opened?1:0;if(e.kind==="n3LessonComplete")return Object.keys(P().completedLessons||{}).length;if(e.kind==="n3LessonsComplete")return Object.keys(P().completedLessons||{}).length;if(e.kind==="n3SrsAll")return Object.keys(P().srsKanji||{}).length;if(e.kind==="n3GrammarComplete")return Object.keys(P().completedGrammar||{}).length;if(e.kind==="n3ReadingComplete")return Object.keys(P().completedReading||{}).length;if(e.kind==="n3ListeningComplete")return Object.keys(P().completedListening||{}).length;if(e.kind==="n3Writing")return Object.keys(P().writingPractice||{}).length;if(e.kind==="n3ComprehensionAnswers")return Object.values(P().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n3FinalPass")return P().finalTest?.passed?1:0;if(e.kind==="n2Opened")return E().opened?1:0;if(e.kind==="n2LessonComplete")return Object.keys(E().completedLessons||{}).length;if(e.kind==="n2LessonsComplete")return Object.keys(E().completedLessons||{}).length;if(e.kind==="n2SrsAll")return Object.keys(E().srsKanji||{}).length;if(e.kind==="n2GrammarComplete")return Object.keys(E().completedGrammar||{}).length;if(e.kind==="n2ReadingComplete")return Object.keys(E().completedReading||{}).length;if(e.kind==="n2ListeningComplete")return Object.keys(E().completedListening||{}).length;if(e.kind==="n2Writing")return Object.keys(E().writingPractice||{}).length;if(e.kind==="n2ComprehensionAnswers")return Object.values(E().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n2FinalPass")return E().finalTest?.passed?1:0;if(e.kind==="shopComplete"){const t=qe().filter(n=>!n.defaultOwned&&n.price>0);return t.length&&t.every(n=>vt(n.id))?1:0}if(e.kind==="jlpt"){const t=r.cards.filter(n=>n.jlpt===e.jlpt);return t.length>0&&t.every(n=>_(n.id).state==="Mastered")?1:0}return 0}function Ze(e){if(!r.rewardModal){r.rewardModal=e,yu(e);return}if(e.type==="level"){r.rewardQueue.unshift(e);return}r.rewardQueue.push(e)}function yu(e){if(Rj(),e?.type==="achievement"){gr()?x("achievement_unlock"):Pa()&&Tj();return}if(e?.type==="level"){x("level_up");return}((e?.xp||0)>0||(e?.coins||0)>0)&&x("notification_reward")}function B(e,t,n="reward"){const s=r.progress.level||_a(r.progress.xp);r.progress.xp+=e,r.progress.moonFragments+=t;const a=Uy(n);if(!a&&e>0&&x("xp_gain"),!a&&t>0&&x("moon_fragment_gain"),t>0&&(r.progress.totalMoonFragmentsEarned=Number(r.progress.totalMoonFragmentsEarned||0)+t),r.progress.level=_a(r.progress.xp),(e||t)&&(r.progress.transactions.unshift({at:new Date().toISOString(),reason:n,xp:e,coins:t,balance:r.progress.moonFragments}),r.progress.transactions=r.progress.transactions.slice(0,80)),r.progress.level>s){x("level_up"),we("level_up",{level:r.progress.level,xp:r.progress.xp,moonFragments:r.progress.moonFragments});const o=Tt();Ze({type:"level",title:S("levelUp"),message:`${S("level")} ${r.progress.level} - ${o.current}/${o.next} XP - ${r.progress.moonFragments} ${S("coins")}`,xp:0,coins:0,mascot:r.progress.level%2===0?"leya":"eva",mood:"happy",dialog:"achievement",level:r.progress.level,totalXp:r.progress.xp,moonFragments:r.progress.moonFragments})}}function Uy(e){return["learn","review"].includes(r.route)&&["review_success","combo_bonus"].includes(e)}function an(e,t,n){const s=Lt();s.reviews+=1,e.state==="New"&&t.state!=="New"&&(s.learned+=1),e.state!=="Mastered"&&t.state==="Mastered"&&(s.mastered+=1),_n(n)&&(s.mistakes+=1),s.minutes=Ja(s.reviews*.75+s.learned*1.25,1),r.progress.daily[se()]=s}function Ne(){wu();const e=se(),t=r.progress.streak.lastStudyDate;if(t===e)return;const n=!!(t&&mn(t,e)>1&&r.progress.streak.current>0);r.progress.streak.current=t&&mn(t,e)===1?r.progress.streak.current+1:1,r.progress.streak.lastStudyDate=e,r.progress.streak.best=Math.max(r.progress.streak.best,r.progress.streak.current),r.progress.streakHistory.push({date:e,value:r.progress.streak.current}),r.progress.streakHistory=r.progress.streakHistory.slice(-120),ve(n?{discipline:-3.5,trust:-1.4,warmth:-.8}:{discipline:1.4,trust:.8,warmth:.4},n?"streak_lost":"study_streak"),n&&O(Ce("eva","streakLoss")),[1,7,30,100].includes(r.progress.streak.current)&&(r.progress.streak.pendingReward={milestone:r.progress.streak.current,availableOn:jp(e,1)}),we("streak_up",{streak:r.progress.streak.current,lost:n}),j()}function $u(){if(r.route!=="stats")return;if(!window.Chart){rg().then(()=>{r.route==="stats"&&$u()}).catch(a=>console.warn("Chart.js failed to load.",a));return}const e=tS(10),t=e.map(a=>a.slice(5)),n=xj(),s=Cj(n);tr("activityChart",{type:"bar",data:{labels:t,datasets:[{label:S("learned"),data:e.map(a=>r.progress.daily[a]?.learned||0),backgroundColor:n.green},{label:S("review"),data:e.map(a=>r.progress.daily[a]?.reviews||0),backgroundColor:n.red}]},options:s}),tr("jlptChart",{type:"bar",data:{labels:Object.keys(Ou()),datasets:[{label:S("mastered"),data:Object.values(Ou()),backgroundColor:n.yellow}]},options:s}),tr("streakChart",{type:"line",data:{labels:t,datasets:[{label:S("streak"),data:e.map(a=>r.progress.streakHistory.find(o=>o.date===a)?.value||(r.progress.daily[a]?.reviews?1:0)),borderColor:n.blue,backgroundColor:n.blueSoft,fill:!0,tension:.35}]},options:s}),tr("stateChart",{type:"doughnut",data:{labels:Object.keys(Ku()),datasets:[{data:Object.values(Ku()),backgroundColor:[n.blue,n.yellow,n.green,n.pink],borderColor:n.line}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:n.text}}}}}),tr("mistakeChart",{type:"line",data:{labels:t,datasets:[{label:S("errors"),data:e.map(a=>r.progress.daily[a]?.mistakes||0),borderColor:n.danger,backgroundColor:n.dangerSoft,fill:!0,tension:.35}]},options:s})}function tr(e,t){const n=document.getElementById(e);n&&r.charts.push(new Chart(n,t))}function Gy(){const e=on();e&&(r.activeCardId=e.id,r.activeLessonId=e.lessonId,r.writingStep=oe(r.writingStep,0,Math.max(0,ct(e)-1)),U.cardId!==String(e.id)&&qy(e)),Hy(),sr(),ja(),or(nr(!1)),window.setTimeout(Su,120)}function on(){return te(r.activeCardId)||So()[0]||r.cards[0]||null}function qy(e){U.cardId=String(e?.id||""),U.strokes=[],U.currentStroke=[],U.drawing=!1,U.activePointerId=null,U.completed=!1}function Hy(){const e=document.getElementById("practiceCanvas");if(!e)return;ds();const t=a=>{a.pointerType==="mouse"&&a.button!==0||(a.preventDefault(),e.setPointerCapture?.(a.pointerId),U.drawing=!0,U.activePointerId=a.pointerId,U.currentStroke=[ju(e,a)],U.completed=!1,ds())},n=a=>{if(!U.drawing||a.pointerId!==U.activePointerId)return;a.preventDefault();const o=ju(e,a),l=U.currentStroke[U.currentStroke.length-1];(!l||Ru(l,o)>1.4)&&(U.currentStroke.push(o),ds())},s=a=>{if(!U.drawing||a.pointerId!==U.activePointerId)return;a.preventDefault();const o=Wy(U.currentStroke);o.length&&U.strokes.push(o),U.currentStroke=[],U.drawing=!1,U.activePointerId=null,ds(),or(nr(!1))};e.onpointerdown=t,e.onpointermove=n,e.onpointerup=s,e.onpointercancel=s,e.onpointerleave=s,e.oncontextmenu=a=>a.preventDefault()}function ju(e,t){const n=e.getBoundingClientRect();return{x:oe((t.clientX-n.left)*(e.width/n.width),0,e.width),y:oe((t.clientY-n.top)*(e.height/n.height),0,e.height),pressure:t.pressure||.5,time:performance.now()}}function Wy(e){if(!e.length)return[];const t=[e[0]];return e.slice(1).forEach(n=>{Ru(t[t.length-1],n)>=2.6&&t.push(n)}),t.length===1?[t[0],{...t[0],x:t[0].x+.1,y:t[0].y+.1}]:t}function ds(){const e=document.getElementById("practiceCanvas");if(!e)return;const t=e.getContext("2d"),n=on();Tu(t,e),n&&Yy(t,e,n),U.strokes.forEach((s,a)=>Iu(t,s,{color:getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),width:13,shadow:a===U.strokes.length-1})),U.currentStroke.length&&Iu(t,U.currentStroke,{color:getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),width:13,shadow:!0})}function Qy(){U.strokes=[],U.currentStroke=[],U.drawing=!1,U.completed=!1,ds(),or(nr(!1))}function Xy(){U.strokes.pop(),U.currentStroke=[],U.completed=!1,ds(),or(nr(!1))}function Vy(e=!1){const t=nr(!0);or(t),e&&(hr(t.success?"good":"again"),O(t.message),t.success&&Oy())}function nr(e){const t=document.getElementById("practiceCanvas"),n=on(),s=ct(n);if(!t||!n)return{score:0,success:!1,expectedCount:s,message:""};const a=U.strokes;if(!a.length)return{score:0,success:!1,expectedCount:s,message:p()==="ru"?"Начни с первой черты.":"Start with the first stroke."};const o=oe(Math.round(Math.min(a.length,s)/s*100),0,100),l=e?100:o,c=!!(e&&a.length);let d=p()==="ru"?`Черты: ${a.length}/${s}. Самопроверка без распознавания.`:`Strokes: ${a.length}/${s}. Self-check without recognition.`;return!e&&a.length<s?d=p()==="ru"?`Черта ${a.length+1}/${s}: продолжай по образцу.`:`Stroke ${a.length+1}/${s}: keep following the guide.`:!e&&a.length>s?d=p()==="ru"?`Черты: ${a.length}/${s}. Если лишняя линия случайная, нажми «Отменить черту».`:`Strokes: ${a.length}/${s}. If one was accidental, tap "Undo stroke".`:e&&(d=bo(n)?p()==="ru"?"Записано. Сравни с жёлтым порядком KanjiVG и двигайся дальше.":"Saved. Compare it with the yellow KanjiVG order and move on.":p()==="ru"?"Записано. Для этого кандзи пока есть только шаблон, без точной схемы штрихов.":"Saved. This kanji currently has a template only, without exact stroke paths."),{score:l,success:c,expectedCount:s,message:d}}function Su(){const e=document.getElementById("strokeCanvas"),t=on();if(!e||!t)return;cancelAnimationFrame(U.demoAnimationId);const n=ct(t),s=460,a=performance.now(),o=l=>{const c=l-a,d=oe(Math.floor(c/s),0,n-1),u=oe((c-d*s)/s,0,1);r.writingStep=d,sr(d,u),ja(),c<n*s?U.demoAnimationId=requestAnimationFrame(o):(r.writingStep=n-1,sr(r.writingStep,1),ja())};U.demoAnimationId=requestAnimationFrame(o)}function Nu(){const e=document.getElementById("strokeCanvas"),t=on();if(!e||!t)return;cancelAnimationFrame(U.demoAnimationId);const n=performance.now(),s=520,a=oe(r.writingStep,0,Math.max(0,ct(t)-1)),o=l=>{const c=oe((l-n)/s,0,1);sr(a,c),c<1&&(U.demoAnimationId=requestAnimationFrame(o))};U.demoAnimationId=requestAnimationFrame(o)}function Au(e){xu(r.writingStep+e,!1)}function xu(e,t){const n=on();n&&(r.writingStep=oe(e,0,Math.max(0,ct(n)-1)),ja(),t?Nu():sr(r.writingStep,1))}function ja(){const e=on();if(!e)return;const t=ir(e),n=p()==="ru"?"Шаг":"Step",s=document.getElementById("writingStepCounter");s&&(s.textContent=`${n} ${r.writingStep+1}/${ct(e)}`);const a=document.querySelector(".writing-step-head .label");a&&(a.textContent=t[r.writingStep]||""),ti(".writing-guide-list li").forEach((o,l)=>o.classList.toggle("is-active",l===r.writingStep))}function sr(e=r.writingStep,t=1){const n=document.getElementById("strokeCanvas"),s=on();if(!n||!s)return;const a=n.getContext("2d");Tu(a,n);const o=rr(s);if(!o){Lu(a,n,s,e);return}Cu(a,n,o,{activeIndex:e,progress:t,showFuture:!0,guideAlpha:1,showNumbers:!0})}function Yy(e,t,n){const s=rr(n);if(!s){Lu(e,t,n,r.writingStep);return}Cu(e,t,s,{activeIndex:r.writingStep,progress:1,showFuture:!0,guideAlpha:.24,showNumbers:!1})}function rr(e){if(!e?.kanji)return null;const t=r.kanjiStrokes?.[e.kanji];return t?.strokeOrder?.length?t:null}function bo(e){return!!rr(e)}function ct(e){const t=rr(e);return Math.max(1,t?.strokeOrder?.length||Number(e?.strokes||1))}function ar(){const e=getComputedStyle(document.documentElement),t=n=>e.getPropertyValue(n).trim();return{paper:t("--writing-paper")||t("--surface")||"#ffffff",border:t("--writing-paper-border")||t("--line")||"#d0d5dd",grid:t("--writing-grid")||t("--line")||"#d0d5dd",gridStrong:t("--writing-grid-strong")||t("--line-strong")||"#98a2b3",ink:t("--writing-ink")||t("--text")||"#111014",guide:t("--writing-guide")||t("--muted")||"#5f6670",templateOpacity:Number(t("--writing-template-opacity")||"0.16")||.16}}function Cu(e,t,n,s={}){const a=oe(Number(s.activeIndex||0),0,Math.max(0,n.strokeOrder.length-1)),o=Zy(n,t,s.padding||22),l=ar(),c=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim(),d=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),u=l.guide;n.strokeOrder.forEach((m,v)=>{const f=v<a,w=v===a;v>a&&!s.showFuture||(e.save(),e.translate(o.x,o.y),e.scale(o.scale,o.scale),e.lineCap="round",e.lineJoin="round",e.strokeStyle=w?d:f?c:u,e.lineWidth=(w?8:5.5)/o.scale,e.globalAlpha=Number(s.guideAlpha??1)*(w?1:f?.86:.24),w&&s.progress<1&&(e.globalAlpha*=.45+oe(s.progress,0,1)*.55),w&&(e.shadowColor="rgba(248, 216, 74, 0.34)",e.shadowBlur=13/o.scale),e.stroke(new Path2D(m.path)),e.restore(),s.showNumbers&&t$(e,m,o,v+1,w))})}function Zy(e,t,n=22){const s=e$(e.viewBox),a=Math.min((t.width-n*2)/s.width,(t.height-n*2)/s.height),o=(t.width-s.width*a)/2-s.x*a,l=(t.height-s.height*a)/2-s.y*a;return{...s,scale:a,x:o,y:l}}function e$(e){const t=String(e||"0 0 109 109").trim().split(/\s+/).map(Number),[n=0,s=0,a=109,o=109]=t;return{x:n,y:s,width:Math.max(1,a),height:Math.max(1,o)}}function t$(e,t,n,s,a){const o=n$(t.path);if(!o)return;const l=n.x+o.x*n.scale,c=n.y+o.y*n.scale;s$(e,l,c,s,a)}function n$(e){const t=String(e||"").match(/M\s*(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/i);return t?{x:Number(t[1]),y:Number(t[2])}:null}function s$(e,t,n,s,a){e.save(),e.fillStyle=a?getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim():getComputedStyle(document.documentElement).getPropertyValue("--surface-2").trim(),e.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue("--line-strong").trim(),e.lineWidth=1,e.beginPath(),e.arc(t,n,a?13:10,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=a?"#111014":getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),e.font="800 12px system-ui",e.textAlign="center",e.textBaseline="middle",e.fillText(String(s),t,n+.5),e.restore()}function Lu(e,t,n,s=0){const a=ar(),o=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim();e.save(),e.globalAlpha=a.templateOpacity,e.fillStyle=a.ink,e.font=`900 ${Math.floor(t.height*.7)}px "Noto Sans JP", "Yu Gothic", serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(n?.kanji||"文",t.width/2,t.height/2+t.height*.04),e.globalAlpha=1,e.fillStyle=o,e.font="800 15px system-ui",e.textAlign="left",e.textBaseline="top";const l=p()==="ru"?`Шаг ${s+1}/${ct(n)} · точной схемы пока нет`:`Step ${s+1}/${ct(n)} · exact paths not available yet`;e.fillText(l,18,16),e.restore()}function Iu(e,t,n={}){const s=t.map(i$).filter(Boolean);if(!e||!s.length)return;const a=ar();if(e.save(),e.strokeStyle=n.color||a.ink,e.lineWidth=n.width||12,e.lineCap="round",e.lineJoin="round",e.imageSmoothingEnabled=!0,n.shadow&&(e.shadowColor="rgba(255, 48, 92, 0.36)",e.shadowBlur=12),e.beginPath(),e.moveTo(s[0].x,s[0].y),s.length===1){e.arc(s[0].x,s[0].y,e.lineWidth/2,0,Math.PI*2),e.fillStyle=e.strokeStyle,e.fill(),e.restore();return}if(s.length===2)e.lineTo(s[1].x,s[1].y);else{for(let l=1;l<s.length-1;l+=1){const c=o$(s[l],s[l+1]);e.quadraticCurveTo(s[l].x,s[l].y,c.x,c.y)}const o=s[s.length-1];e.lineTo(o.x,o.y)}e.stroke(),e.restore()}function Tu(e,t){if(!e||!t)return;const n=ar();e.clearRect(0,0,t.width,t.height),e.fillStyle=n.paper,e.fillRect(0,0,t.width,t.height),r$(e,t)}function r$(e,t){const n=ar();e.save(),e.strokeStyle=n.grid,e.lineWidth=1,e.setLineDash([8,8]),e.beginPath(),e.moveTo(t.width/2,0),e.lineTo(t.width/2,t.height),e.moveTo(0,t.height/2),e.lineTo(t.width,t.height/2),e.moveTo(0,0),e.lineTo(t.width,t.height),e.moveTo(t.width,0),e.lineTo(0,t.height),e.stroke(),e.setLineDash([]),e.strokeStyle=n.gridStrong,e.strokeRect(.5,.5,t.width-1,t.height-1),e.restore()}function ir(e){const t=rr(e);if(t?.strokeOrder?.length)return t.strokeOrder.map((s,a)=>p()==="ru"?s.description_ru||`Штрих ${a+1} по данным KanjiVG`:s.description_en||`Stroke ${a+1} from KanjiVG data`);const n=Array.isArray(e?.stroke_order)?e.stroke_order:[];return Array.from({length:ct(e)},(s,a)=>n[a]||a$(e,a))}function a$(e,t){return p()!=="ru"?`Step ${t+1}: exact stroke paths are not available yet. Use the translucent ${e?.kanji||"kanji"} template.`:`Шаг ${t+1}: для этого кандзи пока нет точной схемы штрихов. Обводи полупрозрачный шаблон ${e?.kanji||""}.`}function or(e){const t=document.getElementById("writingStrokeCounter");t&&(t.textContent=`${U.strokes.length}/${e.expectedCount}`);const n=document.getElementById("writingScore");n&&(n.querySelector("span").textContent=`${e.score}%`,n.querySelector("i").style.width=`${e.score}%`);const s=document.getElementById("writingFeedback");s&&(s.textContent=e.message,s.classList.toggle("is-good",e.success),s.classList.toggle("is-warning",!e.success&&e.score>0))}function i$(e){return e?Array.isArray(e)?{x:e[0],y:e[1]}:{x:e.x,y:e.y}:null}function o$(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function Ru(e,t){return Math.hypot((e?.x||0)-(t?.x||0),(e?.y||0)-(t?.y||0))}function l$(){r.charts.forEach(e=>e.destroy()),r.charts=[]}function c$(e,t){const n=new Date;return r.cards.filter(s=>!e||s.lessonId===e).filter(s=>{const a=r.lessons.find(l=>l.id===s.lessonId);if(a&&!Ae(a))return!1;const o=_(s.id);return o.state==="New"?!0:o.dueAt&&new Date(o.dueAt)<=n}).sort(Na)}function d$(){const e=new Date;return jo().filter(t=>{const n=_(t.id);return n.state==="New"?!1:n.dueAt&&new Date(n.dueAt)<=e}).sort(Na)}function u$(){const e=Date.now(),t=[];return[["N5",Q()],["N4",K()],["N3",P()],["N2",E()]].forEach(([n,s])=>{Object.entries(s?.exerciseSrs||{}).forEach(([a,o])=>{const l=Mn(o,{level:n,exerciseId:a,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""});if(!l.dueAt||!hu(l))return;const c=vo(n,a,l.lessonId||"");if(!c)return;const d=String(c?.lessonId||l.lessonId||"");if(!K$(n,d))return;const u=new Date(l.dueAt).getTime();!u||u>e||t.push({kind:"exercise",source:"textbook",key:`exercise:${String(n).toUpperCase()}:${a}`,level:String(n||"").toUpperCase(),exerciseId:a,lessonId:d,cardId:String(l.cardId||""),dueAt:u,progress:l})})}),t.sort($o)}function Sa(){const e=[];return r.n5Reading.forEach(t=>{t?.id&&e.push(t)}),[["N4",r.n4Reading],["N3",r.n3Reading],["N2",r.n2Reading],["N1",r.n1Reading]].forEach(([t,n])=>{(Array.isArray(n)?n:[]).forEach(s=>{(s.questions||[]).forEach((a,o)=>{const l={id:String(a.id||`${s.id}:${o}`),prompt:a.prompt||{ru:"",en:""},answer:String(a.answer||""),options:Il(a.options)};e.push({id:String(a.id||`${s.id}:${o}`),level:String(s.level||t||"").toUpperCase(),kind:"question",sourceKind:String(s.kind||"reading"),sourceId:String(s.id||""),sourceTitle:s.title||{ru:s.id||"",en:s.id||""},title:s.title||{ru:s.id||"",en:s.id||""},jp:String(s.jp||""),reading:String(s.reading||""),translationRu:String(s.ru||""),translationEn:String(s.en||""),passageSource:String(s.source||""),questionIndex:o,question:l,questions:[l]})})})}),[...e,...fv()]}function _u(e,t=""){const n=String(e||""),s=String(t||"").toUpperCase();return Sa().find(a=>String(a.id||"")===n&&(!s||String(a.level||"").toUpperCase()===s))||Sa().find(a=>String(a.id||"")===n)||null}function Mu(e){const t=Array.isArray(e?.questions)?e.questions[0]||null:e?.question||null;return{level:String(e?.level||"").toUpperCase(),lessonId:String(e?.sourceId||""),exerciseId:String(e?.id||""),type:String(e?.kind||""),title:e?.sourceTitle||e?.title||null,prompt:String(e?.kind==="question"?h(t?.prompt||{}):e?.sentence||e?.jp||""),answer:String(e?.kind==="question"?t?.answer||"":lt(e).map(n=>n.kanji).join("")),answerLabel:String(e?.kind==="question"?t?.answer||"":lt(e).map(n=>n.kanji).join(""))}}function ko(e){return 1}function ln(e){const t=Mu(e);return{...cs(t.level,t.lessonId,t.exerciseId,t),sourceId:String(e?.sourceId||""),sourceKind:String(e?.sourceKind||""),sourceTitle:e?.sourceTitle||null,exerciseKind:String(e?.kind||""),questionCount:ko(),answers:{},selectedIndices:[],selectedTiles:[],selectedText:"",wrongIndexes:[],wrongQuestions:[],completed:!1,completedAt:null}}function lr(e,t){const n=ln(t),s=Mn({...n,...e||{}},Mu(t));return s.sourceId=String(t?.sourceId||s.sourceId||""),s.sourceKind=String(t?.sourceKind||s.sourceKind||""),s.sourceTitle=t?.sourceTitle||s.sourceTitle||null,s.exerciseKind=String(t?.kind||s.exerciseKind||""),s.questionCount=ko(),s.answers=s.answers&&typeof s.answers=="object"&&!Array.isArray(s.answers)?{...s.answers}:{},s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.map(a=>Number(a)).filter(a=>Number.isInteger(a)&&a>=0):[],s.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(a=>({kanji:String(a?.kanji||""),reading:String(a?.reading||"")})).filter(a=>a.kanji):[],s.selectedText=String(s.selectedText||""),s.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.map(a=>Number(a)).filter(a=>Number.isInteger(a)&&a>=0):[],s.wrongQuestions=Array.isArray(s.wrongQuestions)?s.wrongQuestions.map(a=>String(a)).filter(Boolean):[],s.completed=!!s.completed,s.completedAt=s.completedAt||null,s}function cn(e){var s;if(!e?.id)return null;(s=r.progress).readingExercises||(s.readingExercises={});const t=r.progress.readingExercises[String(e.id)]||null;if(t){const a=lr(t,e);return r.progress.readingExercises[String(e.id)]=a,a}const n=ln(e);return r.progress.readingExercises[String(e.id)]=n,n}function Pn(e,t){var s;if(!e?.id)return null;(s=r.progress).readingExercises||(s.readingExercises={});const n=lr(t||{},e);return r.progress.readingExercises[String(e.id)]=n,n}function Pu(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.completedAt||e.completed||e.answers&&typeof e.answers=="object"&&Object.keys(e.answers).length||Array.isArray(e.selectedIndices)&&e.selectedIndices.length||Array.isArray(e.selectedTiles)&&e.selectedTiles.length||String(e.selectedText||"").trim())}function cr(e=""){var a;if(!r.progress)return!1;const t=W(e);(a=r.progress).readingExercises||(a.readingExercises={});const n=new Map(Sa().filter(o=>!t||W(o.level)===t).map(o=>[String(o.id),o]));let s=!1;return Object.entries(r.progress.readingExercises).forEach(([o,l])=>{const c=n.get(String(o));if(!c)return;const d=lr(l,c),u=Pu(d)?d:ln(c);JSON.stringify(l)!==JSON.stringify(u)&&(r.progress.readingExercises[String(o)]=u,s=!0)}),s}function p$(){const e=Date.now();return Sa().map(t=>{if(!O$(t.level))return null;const n=r.progress.readingExercises?.[String(t.id)]||null;if(!n)return null;const s=lr(n,t);if(r.progress.readingExercises[String(t.id)]=s,!Pu(s))return null;const a=s.dueAt?new Date(s.dueAt).getTime():0;return!a||a>e?null:{kind:"exercise",source:"reading",key:`reading:${String(t.level||"").toUpperCase()}:${t.id}`,level:String(t.level||"").toUpperCase(),exerciseId:String(t.id||""),lessonId:String(t.sourceId||""),cardId:"",dueAt:a,progress:s,exercise:t,card:null}}).filter(Boolean).sort($o)}function yo(){const e=d$().map(n=>{if(!n?.id)return null;const s=_(n.id);return{kind:"card",key:`card:${n.id}`,card:n,cardId:String(n.id),dueAt:s.dueAt?new Date(s.dueAt).getTime():0,progress:s}}).filter(Boolean),t=[...u$(),...p$()].sort($o);return er(xm(e,t,ki))}function Eu(e=yo()){const t=Object.freeze(er(e).map(n=>n.key).filter(Boolean));r.reviewSession={keys:t,initialSize:t.length,startedAt:new Date().toISOString()}}function g$(){const e=yo();if(r.route!=="review")return e;r.reviewSession||Eu(e);const t=new Map(e.map(a=>[a.key,a])),n=Array.isArray(r.reviewSession?.keys)?r.reviewSession.keys:[],s=n.map(a=>t.get(a)).filter(Boolean);return s.length!==n.length||!s.length&&e.length?(Eu(e),e):er(s)}function m$(){const e=Date.now();return jo().filter(t=>{const n=_(t.id),s=n.dueAt?new Date(n.dueAt).getTime():0;return n.state==="Learning"&&s>e}).length}function f$(){return jo().filter(e=>_(e.id).state!=="New").length}function Re(){if(xr&&Cr!==null)return Cr;const e=yo().length;return xr&&(Cr=e),e}function $o(e,t){if(e.dueAt!==t.dueAt)return e.dueAt-t.dueAt;const n=e.kind==="card"&&e.card?.id?_(e.card.id):e.progress,s=t.kind==="card"&&t.card?.id?_(t.card.id):t.progress,a=Fr(n),o=Fr(s);return a!==o?o-a:e.kind!==t.kind?e.kind==="card"?-1:1:e.kind==="card"&&t.kind==="card"?Number(e.card?.id||0)-Number(t.card?.id||0):String(e.key||"").localeCompare(String(t.key||""))}function jo(){const e=new Set,t=[];return Le.forEach(n=>{rp(n).forEach(s=>{const a=String(s?.id||"");!a||e.has(a)||(e.add(a),t.push(s))})}),t.sort(Na)}function So(){const e=eS();return r.cards.filter(t=>{const n=r.lessons.find(a=>a.id===t.lessonId);if(n&&!Ae(n))return!1;const s=_(t.id);return s.state==="New"||s.dueAt&&new Date(s.dueAt)<=e}).sort(Na)}function Na(e,t){const n=_(e.id),s=_(t.id),a=n.dueAt?new Date(n.dueAt).getTime():0,o=s.dueAt?new Date(s.dueAt).getTime():0;if(a!==o)return a-o;if(a>0){const l=Fr(n),c=Fr(s);if(l!==c)return c-l}return Number(e.id)-Number(t.id)}function h$(){const e=r.filters.query.trim().toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return r.cards.filter(t=>{const n=dr(t.id),s=[t.kanji,I(t),t.meaning_ru,t.hiragana,t.romaji,t.onyomi,t.onyomi_romaji,t.kunyomi,t.kunyomi_romaji,Co(t),t.jlpt,zo(t.lessonId),fr(t),n.radical,h(n.radicalMeaning||{}),...t.apps,...t.examples.flatMap(a=>[a.word,a.reading,a.romaji,a.translation,Me(a)])].join(" ").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return(!e||s.includes(e))&&(r.filters.jlpt==="all"||t.jlpt===r.filters.jlpt)&&(r.filters.radical==="all"||n.radical===r.filters.radical)&&(r.filters.favorites==="all"||!!r.progress.favorites[t.id])&&v$(t.strokes,r.filters.strokes)})}function v$(e,t){if(t==="all")return!0;if(t==="13+")return e>=13;const[n,s]=t.split("-").map(Number);return e>=n&&e<=s}function No(){const e=r.cards.length,t=r.cards.filter(s=>_(s.id).state!=="New").length,n=r.cards.filter(s=>_(s.id).state==="Mastered").length;return{total:e,learned:t,mastered:n,todayCards:So().length,completion:R(n,e)}}function Ao(){return Object.values(r.progress.cards).reduce((e,t)=>e+(t.reviewCount||0),0)}function w$(){return(r.progress.transactions||[]).reduce((e,t)=>e+Math.max(0,Number(t.coins||0)),0)}function Du(){const e=r.progress.totalCorrect+r.progress.totalWrong;return e?Math.round(r.progress.totalCorrect/e*100):0}function Ku(){const e={New:0,Learning:0,Review:0,Mastered:0};return r.cards.forEach(t=>{e[_(t.id).state]+=1}),e}function Ou(){const e={};return r.cards.forEach(t=>{var n;e[n=t.jlpt]||(e[n]=0),_(t.id).state==="Mastered"&&(e[t.jlpt]+=1)}),e}function Lt(){const e=se();return r.progress.daily[e]||(r.progress.daily[e]={learned:0,reviews:0,mastered:0,mistakes:0,minutes:0,goalClaimed:!1}),r.progress.daily[e]}function xo(e){return r.cards.filter(t=>t.lessonId===e)}function b$(){return r.cards.filter(e=>{const t=r.lessons.find(n=>n.id===e.lessonId);return(!t||Ae(t))&&_(e.id).state==="New"})}function te(e){return r.cards.find(t=>String(t.id)===String(e))}function dr(e){return r.kanjiMeta[String(e)]||{}}function Aa(e){const t=r.kanjiHints[String(e)]||{};return{hint:h(t.hint||{})||Ce("leya","hint"),mnemonic:h(t.mnemonic||{})||""}}function k$(e){e&&(r.progress.favorites[e]?delete r.progress.favorites[e]:r.progress.favorites[e]=new Date().toISOString(),j(),N())}function yt(e=null){r.readingCheck={cardId:e?String(e):null,value:"",status:null,message:""}}function y$(e){const t=String(e||"");r.readingCheck.cardId!==t&&yt(t)}function Fu(){const e=te(r.readingCheck.cardId||r.activeCardId);if(!e)return;Rs(e,"reading_check"),Vu();const t=j$(r.readingCheck.value),n=$$(e),s=t.some(c=>n.normalized.has(c)),a=t.length>0,o=a&&s?"correct":"wrong",l=a?s?p()==="ru"?"Верно. Это чтение есть у карточки.":"Correct. This reading belongs to the card.":p()==="ru"?"Почти. Попробуй другое онъёми или кунъёми.":"Almost. Try another on'yomi or kun'yomi.":p()==="ru"?"Сначала напиши чтение хираганой или катаканой.":"Type a reading in hiragana or katakana first.";r.readingCheck={cardId:e.id,value:r.readingCheck.value,status:o,message:l},x(o==="correct"?"answer_correct":"answer_wrong"),Oe(),requestAnimationFrame(()=>{const c=document.getElementById(`readingCheck-${e.id}`);c&&(c.focus(),"setSelectionRange"in c&&c.setSelectionRange(c.value.length,c.value.length))})}function $$(e){const t=ur(e),n=[...dn(t.onyomi.kana),...dn(t.kunyomi.kana),...dn(e.hiragana)].filter(Boolean),s=n.filter((a,o)=>n.indexOf(a)===o);return{normalized:new Set(s.map(Bu).filter(Boolean))}}function j$(e){return String(e||"").split(/[\/,гЂЃпјЊ\s]+/u).map(Bu).filter(Boolean)}function Bu(e){const t=zu(String(e||"").normalize("NFKC")).replace(/[гѓ»пЅҐ.\-]/gu,"").replace(/\s+/gu,"");return S$(t).trim()}function zu(e){return[...String(e||"")].map(t=>{const n=t.charCodeAt(0);return n>=12449&&n<=12534?String.fromCharCode(n-96):t}).join("")}function S$(e){let t="";for(const n of String(e||"")){if(n==="ー"){t+=N$(t.slice(-1));continue}t+=n}return t}function N$(e){return"あかさたなはまやらわがざだばぱゃぁ".includes(e)?"あ":"いきしちにひみりぎ�?ぢびぴぃ".includes(e)?"い":"うくすつぬふむゆるぐずづぶぷゅぅ".includes(e)?"う":"えけせてねへめれげぜでべぺぇ".includes(e)?"え":"おこそとのほもよろをごぞどぼぽょぉ".includes(e)?"お":""}function Ju(e){if(!e)return null;const t=String(e.jlpt||"").toUpperCase();let n=null;return t==="N5"?n=r.n5KanjiCatalog:t==="N4"?n=r.n4KanjiCatalog:t==="N3"?n=r.n3KanjiCatalog:t==="N2"&&(n=r.n2KanjiCatalog),!n||!Array.isArray(n)?null:n.find(s=>s&&s.kanji===e.kanji)||null}const Uu={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",ゐ:"i",ゑ:"e",を:"o",ん:"n",ゔ:"vu"},Gu={きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ふぁ:"fa",ふぃ:"fi",ふぇ:"fe",ふぉ:"fo",しぇ:"she",じぇ:"je",ちぇ:"che",てぃ:"ti",でぃ:"di",とぅ:"tu",どぅ:"du",つぁ:"tsa",つぃ:"tsi",つぇ:"tse",つぉ:"tso",うぃ:"wi",うぇ:"we",うぉ:"wo",ゔぁ:"va",ゔぃ:"vi",ゔぇ:"ve",ゔぉ:"vo"};function ur(e){const t=Ju(e);if(t&&t.readings){const a=t.readings,o=xa(a.onyomi,a.onyomi_romaji||e?.onyomi_romaji,e?.onyomi),l=xa(a.kunyomi,a.kunyomi_romaji||e?.kunyomi_romaji,e?.kunyomi);if(o.kana||l.kana)return{onyomi:o,kunyomi:l}}const n=xa(e?.onyomi,e?.onyomi_romaji),s=xa(e?.kunyomi,e?.kunyomi_romaji);return n.kana||s.kana||n.romaji||s.romaji?{onyomi:n,kunyomi:s}:{onyomi:{kana:"",romaji:""},kunyomi:{kana:"",romaji:""}}}function dn(e){return(Array.isArray(e)?e.join(" / "):String(e||"")).split(/[\/пјЏ,пјЊгЂЃгѓ»пЅҐ;пј›]+/u).map(n=>n.trim()).filter(Boolean)}function xa(e,t="",n=""){const s=dn(e).length?dn(e):dn(n),a=dn(t),o=s.map((l,c)=>({kana:V(l),romaji:A$(l,a[c])})).filter(l=>l.kana||l.romaji);return{kana:o.map(l=>l.kana).filter(Boolean).join(" / "),romaji:o.map(l=>l.romaji).filter(Boolean).join(" / ")}}function A$(e,t){const n=qu(e);return n?t&&Hu(t)===Hu(n)?t:n:t||""}function qu(e){const t=[...x$(e)];let n="",s=!1;for(let a=0;a<t.length;a+=1){const o=t[a],l=t[a+1]||"";if(o==="っ"){s=!0;continue}if(o==="ー"){const u=C$(n);u&&(n+=u);continue}let c="";const d=o+l;if(Gu[d])c=Gu[d],a+=1;else if(Uu[o])c=Uu[o];else if(/[a-zA-Z0-9]/u.test(o))c=o.toLowerCase();else{s=!1;continue}if(s){const u=c.match(/^[bcdfghjklmnpqrstvwxyz]/u)?.[0]||"";u&&u!=="n"&&(n+=u),s=!1}n+=c}return n}function x$(e){return zu(String(e||"").normalize("NFKC")).replace(/[()\[\]{}]/gu,"").replace(/[.\-‐-―\s]/gu,"").trim()}function C$(e){return String(e||"").match(/[aeiou](?!.*[aeiou])/u)?.[0]||""}function Hu(e){return String(e||"").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/gu,"").replace(/[^a-z0-9]+/gu,"")}function Wu(e){return e==="onyomi"?p()==="ru"?"Онъёми":"On'yomi":p()==="ru"?"Кунъёми":"Kun'yomi"}function Ca(e){return e==="onyomi"?p()==="ru"?"Он":"On":p()==="ru"?"Кун":"Kun"}function Co(e){const t=ur(e);return[`${Ca("onyomi")}: ${t.onyomi.kana||"—"} (${t.onyomi.romaji||"—"})`,`${Ca("kunyomi")}: ${t.kunyomi.kana||"—"} (${t.kunyomi.romaji||"—"})`].join(" Р'· ")}function Lo(e){if(!e)return"";const t=e.audioSrc||e.audio||"";return Xu(t)||Qu(e)}function Qu(e){if(!e?.id||!e?.jlpt||!e?.lessonId)return"";const t=L$(e.romaji);return t?`./audio/kanji/${String(e.jlpt).toLowerCase()}/${e.lessonId}/${e.id}-${t}.mp3`:""}function Xu(e){return e?e.startsWith("./")||e.startsWith("http")?e:e.startsWith("/")?`.${e}`:`./${e}`:""}function L$(e){return String(e||"").split("/")[0].trim().toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function I$(e){return!!(Lo(e)||Io(e))}function Io(e){if(!e)return"";const t=ur(e);return t.onyomi.kana||t.kunyomi.kana||e.hiragana||e.kanji||""}function T$(e){const t=ur(e);return{kanji:e?.kanji||"",onyomi:t.onyomi.kana,kunyomi:t.kunyomi.kana,hiragana:e?.hiragana||""}}function us(e,t=""){const n=US(T$(e));return!t||t==="cycle"?n:n.filter(s=>s.kind===t)}function R$(e){return us(e).length>0}function _$(e){return dn(e)[0]||String(e||"").trim()}function To(){if(r.route!=="learn"&&r.route!=="review")return;const e=560-(Date.now()-js);if(e>0){window.setTimeout(To,e);return}const t=te(r.activeCardId);if(!t)return;const n=us(t).map(o=>`${o.kind}:${o.kana}`).join("|")||Io(t),s=Xu(t?.audioSrc||t?.audio||"");if(!n&&!s)return;const a=`${r.route}:${t.id}:${n||s}`;a!==ml&&(ml=a,Yu(t,{silent:!0}))}function Vu(){Ro(),"speechSynthesis"in window&&window.speechSynthesis.cancel()}function Ro(){pt&&(pt.pause(),pt.currentTime=0,pt=null)}function Yu(e,t={}){let n=null;const s=()=>(n||(n=Zu(e,t)),n);return ep(e,{kind:"cycle",silent:t.silent,fallback:s})?Promise.resolve(!0):s()}function Zu(e,t={}){const n=Lo(e);return n?(Ro(),pt=new Audio(n),pt.preload="auto",pt.onended=()=>{pt=null},pt.onerror=()=>{t.silent||console.warn("Kanji audio file could not be loaded.",{id:e?.id,audio:n})},pt.play().then(()=>!0).catch(s=>(t.silent||console.warn("Kanji audio playback was blocked or failed.",{id:e?.id,audio:n,error:s}),!1))):Promise.resolve(!1)}function ep(e,t={}){Ro();let n=null;const s=typeof t.fallback=="function"?()=>(n||(n=t.fallback()),n):null,a=V(t.text||""),o=t.kind||"cycle",l=`${e?.id||e?.kanji||"kanji"}:${o}`,c=us(e);let d=null;if(!a){const f=GS(c,fl.get(l)??-1,o);d=f.item,fl.set(l,f.cursor)}const u=a||d?.kana||_$(Io(e));if(!qS(u,{onError:f=>{t.silent||console.warn("System kanji TTS failed; trying prepared audio fallback.",{id:e?.id,error:f}),s?.()}}))return s?.(),!s&&!t.silent&&console.warn("Kanji audio is not available for this card.",{id:e?.id,expected:Qu(e)}),!1;const v=t.label||(d?go(d):"TTS");return t.silent||O(`${e?.kanji||""} ${v}: ${u}`.trim()),!0}function M$(e,t){O(e?`${t}: ${e}`:`${t}: ${p()==="ru"?"аудио пока не добавлено":"audio not added yet"}`)}function Ae(e){return!!e}function La(e){return r.rewards?.lessonUnlocks?.[e?.id]||1}function tp(e){if(!e||!Ae(e))return"locked";const t=xo(e.id);return t.length?!!r.progress.lessonCompletions?.[e.id]||t.every(a=>{const o=_(a.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"completed":t.some(a=>{const o=_(a.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"started":"new":"new"}function _o(e){return e==="completed"?"is-completed":e==="started"?"is-started":""}function Mo(e){const t=p()==="ru";return e==="completed"?t?"Урок пройден":"Lesson completed":e==="started"?t?"Урок начат":"Lesson started":t?"Не начат":"Not started"}function P$(e){return e!=="completed"&&e!=="started"?"":`<span class="lesson-status-dot" aria-label="${g(Mo(e))}"></span>`}function E$(e){return e!=="completed"&&e!=="started"?"":`<span class="pill lesson-status-pill ${_o(e)}">${i(Mo(e))}</span>`}function un(e){const t=String(e||"").toUpperCase();return r.jlptLessons.find(n=>n.jlpt===t)||null}function $t(e){const t=String(e||"").toUpperCase();return r.jlptCatalog?.items?.find(n=>n.jlpt===t)||null}function En(e){const t=String(e||"").toUpperCase();return t==="N5"?Q():t==="N4"?K():t==="N3"?P():t==="N2"?E():null}function D$(e,t,n="open"){const s=W(e),a=String(t||"");if(!s||!a)return!1;const o=En(s);return!o||(o.viewedLessons||(o.viewedLessons={}),o.viewedLessons[a])?!1:(o.viewedLessons[a]=new Date().toISOString(),!0)}function K$(e,t){const n=W(e),s=String(t||"");if(!n||!s)return!1;const a=En(n);return a?!!(a.viewedLessons?.[s]||a.completedLessons?.[s]):!1}function Ia(e,t="open"){var s;const n=W(e);return!n||((s=r.progress).viewedReadingLevels||(s.viewedReadingLevels={}),r.progress.viewedReadingLevels[n])?!1:(r.progress.viewedReadingLevels[n]=new Date().toISOString(),!0)}function O$(e){const t=W(e);return t?!!r.progress.viewedReadingLevels?.[t]:!1}function Po(e){const t=$t(e);return Array.isArray(t?.previousLevels)?t.previousLevels.map(n=>String(n||"").toUpperCase()).filter(Boolean):[]}function np(e){const t=String(e||"").toUpperCase(),n=En(e);if(!n)return!1;if(n.finalTest?.passed)return!0;const a=$t(t)?.lessonCount||(t==="N5"?10:0);let o=0;if(t==="N5"){o=Cn();const l=Object.keys(n.studiedKanji||{}).length;if(o>=10&&l>=80||o>=a)return!0}else if(o=Object.keys(n.completedLessons||{}).length,o>=a)return!0;return!1}function et(e){const t=String(e||"").toUpperCase();if(Le.includes(t)||r.progress.unlockedJlptLevels&&r.progress.unlockedJlptLevels.includes(t))return!0;if(!$t(t))return t==="N5";const s=Po(t);return s.length?s.every(a=>np(a)):!0}function sp(e=[]){const t=e.filter(Boolean);if(!t.length)return"";if(t.length===1)return t[0];const n=p()==="ru"?"Рё":"and";return t.length===2?`${t[0]} ${n} ${t[1]}`:`${t.slice(0,-1).join(", ")} ${n} ${t[t.length-1]}`}function It(e){const t=Po(e);return t.length?p()==="ru"?`Откроется после завершения ${sp(t)}.`:`Unlocks after completing ${sp(t)}.`:p()==="ru"?"Откроется после учебника N5.":"Unlocks after the N5 textbook."}function Ta(e){const t=W(e);if(!t)return[];const n=$t(t),s=r.lessons.filter(d=>String(d.jlpt||"").toUpperCase()===t),a=n?(n.lessonIds||[]).map(d=>r.lessons.find(u=>u.id===d)).filter(Boolean):s,o=new Set(a.map(d=>d.id)),l=s.filter(d=>!o.has(d.id)),c=Math.max(n?n.lessonCount||a.length:s.length,a.length);return[...a,...l].slice(0,c||s.length)}function Eo(e){const t=W(e);if(!t)return"";const n=Ta(t);if(!n.length)return"";const s=Q$(t);if(s?.lessonId&&Ma(t,s.lessonId))return s.lessonId;const a=En(t)?.currentLessonId||"";if(a&&Ma(t,a))return a;const o=t==="N5"?Q().completedLessons||{}:t==="N4"?K().completedLessons||{}:t==="N3"?P().completedLessons||{}:t==="N2"?E().completedLessons||{}:r.progress.lessonCompletions||{},l=n.filter(c=>o[c.id]);return l.length?(l.sort((c,d)=>{const u=Date.parse(o[d.id]||"")||0,m=Date.parse(o[c.id]||"")||0;return u!==m?u-m:(d.order||0)-(c.order||0)}),l[0]?.id||n[0]?.id||""):n[0]?.id||""}function Ra(e,t=""){const n=W(e);if(!n||!un(n))return;if(!et(n)){r.activeTextbookLevel=n,r.activeJlptLesson=n,Ke("textbooks",null,n),O(It(n));return}const s=r.route,a=String(t||"")||Eo(n),o=["N5","N4","N3","N2"].includes(n),l=a?`#textbooks/${encodeURIComponent(n)}/${encodeURIComponent(a)}`:`#textbooks/${encodeURIComponent(n)}`;r.route="textbooks",r.activeTextbookLevel=n,r.activeJlptLesson=n,r.activeTextbookSubroute=a||null,r.kanjiPageId=null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=!o&&a?`#textbook-lesson-${a}`:null,s!=="eva-room"&&(r.evaRoomShopOpen=!1),a&&jt(n,a,"open_jlpt"),yt(),Pt(l),Jr(),N()}function F$(e){return e?un(e.jlpt):null}function ps(e){const t=String(e||"").toUpperCase();return r.jlptPracticeLessons.find(n=>n.jlpt===t)||null}function Dn(){return r.progress.jlptLessonPractice=Ul(Un().jlptLessonPractice,r.progress.jlptLessonPractice||{}),r.progress.jlptLessonPractice}function gs(e){if(!e?.drills?.length)return null;const t=Dn(),n=t.activeIds[e.jlpt],s=e.drills.find(a=>a.id===n);return s||(t.activeIds[e.jlpt]=e.drills[0].id,e.drills[0])}function B$(e){const t=ps(r.activeJlptLesson),n=gs(t);if(!n||!n.tiles[e])return;const s=Dn(),a=s.selected[n.id]||[],o=n.blanks.flatMap(l=>l.answer||[]).length;a.includes(e)||a.length>=o||(s.selected[n.id]=[...a,e],s.checked[n.id]=!1,s.results[n.id]=null,j(),N())}function z$(){const e=gs(ps(r.activeJlptLesson));if(!e)return;const t=Dn();t.selected[e.id]=(t.selected[e.id]||[]).slice(0,-1),t.checked[e.id]=!1,t.results[e.id]=null,j(),N()}function J$(){const e=gs(ps(r.activeJlptLesson));if(!e)return;const t=Dn();t.selected[e.id]=[],t.checked[e.id]=!1,t.results[e.id]=null,j(),N()}function U$(){const e=gs(ps(r.activeJlptLesson));if(!e)return;const t={...Ko(),...Do()},n=Dn(),s=n.selected[e.id]||[],a=e.blanks.flatMap(c=>c.answer||[]),o=a.reduce((c,d,u)=>{const m=e.tiles[s[u]];return(!m||m.kanji!==d)&&c.push(u),c},[]),l=s.length===a.length&&o.length===0;n.checked[e.id]=!0,n.results[e.id]={correct:l,wrongIndexes:o,message:l?t.correct:t.wrong},l&&!n.completed[e.id]?(n.completed[e.id]=new Date().toISOString(),B(8,1,`jlpt_practice:${e.id}`),x("answer_correct")):l||x("answer_wrong"),j(),N()}function G$(){var o,l,c,d,u,m;const e=ps(r.activeJlptLesson),t=gs(e);if(!e||!t)return;const n=e.drills.findIndex(v=>v.id===t.id),s=e.drills[(n+1)%e.drills.length],a=Dn();a.activeIds[e.jlpt]=s.id,(o=a.selected)[l=s.id]||(o[l]=[]),(c=a.checked)[d=s.id]||(c[d]=!1),(u=a.results)[m=s.id]||(u[m]=null),j(),N()}function rp(e){const t=String(e||"").toUpperCase();return t?r.cards.filter(n=>String(n.jlpt||"").toUpperCase()===t):[]}function Do(){return p()==="ru"?{courseText:"Стратегия уровня, чтения, лексика, приложения и интерактивная практика. Контент хранится в JSON, поэтому урок можно расширять без изменения логики.",apps:"Приложения и интерфейсы",kana:"Хирагана и катакана",hiragana:"Хирагана",katakana:"Катакана",kanjiFocus:"Кандзи с фуриганой",sentenceDrill:"Поставь кандзи в пропуск",fillBlanks:"Заполни пропуск плитками по порядку.",check:"Проверить",undo:"Убрать",clear:"Очистить",next:"Следующее",correct:"Верно. +8 XP и +1 Moon Fragment.",wrong:"Почти. Проверь порядок плиток и попробуй ещё раз."}:{courseText:"Level strategy, readings, vocabulary, apps, and interactive practice. Content lives in JSON, so lessons can grow without changing app logic.",apps:"Apps and interfaces",kana:"Hiragana and katakana",hiragana:"Hiragana",katakana:"Katakana",kanjiFocus:"Kanji with furigana",sentenceDrill:"Place kanji into the blank",fillBlanks:"Fill the blank with tiles in order.",check:"Check",undo:"Undo",clear:"Clear",next:"Next",correct:"Correct. +8 XP and +1 Moon Fragment.",wrong:"Almost. Check the tile order and try again."}}function Ko(){return p()==="ru"?{back:"К учебнику",courseMap:"Полноценный JLPT-модуль",courseText:"Краткая стратегия уровня, чтения, лексика и практика. Данные хранятся в JSON, поэтому урок можно расширять без изменения логики.",available:"кандзи уровня",learned:"изучено",mastered:"освоено",goals:"Цели уровня",practice:"Практика",checkpoint:"Чекпоинт"}:{back:"Back to textbook",courseMap:"Full JLPT module",courseText:"Level strategy, readings, vocabulary, and practice. The content lives in JSON, so lessons can grow without changing app logic.",available:"level kanji",learned:"learned",mastered:"mastered",goals:"Level goals",practice:"Practice",checkpoint:"Checkpoint"}}function _a(e){const t=r.rewards?.levelCurve||{baseXp:100,growth:1.35};let n=1,s=e;for(;s>=pr(n,t)&&n<100;)s-=pr(n,t),n+=1;return n}function Tt(){const e=r.rewards?.levelCurve||{baseXp:100,growth:1.35};let t=1,n=r.progress.xp;for(;n>=pr(t,e)&&t<100;)n-=pr(t,e),t+=1;const s=pr(t,e);return{current:n,next:s,toNext:Math.max(0,s-n),percent:R(n,s)}}function pr(e,t){return Math.round(t.baseXp*Math.pow(t.growth,e-1))}function q$(){const e={app:"Flash Kanji",exportedAt:new Date().toISOString(),progress:r.progress,customization:r.customization},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`flash-kanji-progress-${se()}.json`,document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(n),O(S("export"))}function pn(e,t={}){try{return typeof window.ym!="function"?!1:(window.ym(ut,"reachGoal",e,t),!0)}catch(n){return console.warn("Metric goal failed.",n),!1}}function H$(e){return{level:e.dataset.shareLevel||e.dataset.level||"",lessonId:e.dataset.shareLessonId||e.dataset.lessonId||e.dataset.lesson||"",toastKey:e.dataset.shareToastKey||"",reward:e.dataset.shareReward&&r.rewardModal||null}}function W(e){const t=String(e||"").toUpperCase();return Le.includes(t)?t:""}function _e(e){if(!e||typeof e!="object")return null;const t=W(e.level),n=String(e.lessonId||"");if(!t||!n)return null;const s=typeof e.updatedAt=="string"&&e.updatedAt?e.updatedAt:new Date().toISOString();return{level:t,lessonId:n,updatedAt:s,source:typeof e.source=="string"&&e.source?e.source:"open"}}function W$(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const a=W(n),o=_e({...typeof s=="object"&&s?s:{},level:a||n});a&&o&&(t[a]=o)}),t}function ms(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const a=String(n||"").trim();if(a){if(typeof s=="string"&&s.trim()){t[a]=s.trim();return}if(s&&typeof s=="object"){const o=typeof s.viewedAt=="string"&&s.viewedAt?s.viewedAt:typeof s.updatedAt=="string"&&s.updatedAt?s.updatedAt:new Date().toISOString();t[a]=o;return}s&&(t[a]=new Date().toISOString())}}),t}function Ma(e,t){const n=W(e),s=String(t||"");return!n||!s?!1:Ta(n).some(a=>a.id===s)}function ap(e){return Ta(e)[0]?.id||""}function Q$(e=""){const t=W(e);if(t){const a=_e(r.progress.lastOpenedJlptLessons?.[t]||null)||(_e(r.progress.lastOpenedJlptLesson||null)?.level===t?_e(r.progress.lastOpenedJlptLesson||null):null);return a&&Ma(t,a.lessonId)?a:null}const n=[_e(r.progress.lastOpenedJlptLesson||null),...Object.values(r.progress.lastOpenedJlptLessons||{}).map(a=>_e(a)).filter(Boolean)].filter(Boolean);return n.sort((a,o)=>(Date.parse(o.updatedAt||"")||0)-(Date.parse(a.updatedAt||"")||0)),n.find(a=>Ma(a.level,a.lessonId))||null}function X$(e=""){const t=W(e);if(t)return _e(r.progress.lastOpenedJlptLessons?.[t]||null)||(_e(r.progress.lastOpenedJlptLesson||null)?.level===t?_e(r.progress.lastOpenedJlptLesson||null):null);const n=[_e(r.progress.lastOpenedJlptLesson||null),...Object.values(r.progress.lastOpenedJlptLessons||{}).map(s=>_e(s)).filter(Boolean)].filter(Boolean);return n.sort((s,a)=>(Date.parse(a.updatedAt||"")||0)-(Date.parse(s.updatedAt||"")||0)),n[0]||null}function V$(e){const t=W(e);if(!t)return"";const n=Le.indexOf(t);return n>=0&&n<Le.length-1?Le[n+1]:""}function jt(e,t,n="open"){var v;const s=W(e),a=String(t||"");if(!s||!a)return null;const o={level:s,lessonId:a,updatedAt:new Date().toISOString(),source:n},l=_e(r.progress.lastOpenedJlptLessons?.[s]||null),c=_e(r.progress.lastOpenedJlptLesson||null);(v=r.progress).lastOpenedJlptLessons||(v.lastOpenedJlptLessons={}),r.progress.lastOpenedJlptLessons[s]=o,r.progress.lastOpenedJlptLesson=o;const d=D$(s,a,n),u=En(s);return u&&u.currentLessonId!==a&&(u.currentLessonId=a),(!l||l.lessonId!==a||l.level!==s||c?.lessonId!==a||c?.level!==s||d)&&j(),o}function Rt(e,t="btn ghost"){const n=W(e),s=V$(n);if(!n||!s)return"";const a=ap(s);if(!a)return"";const o=p()==="ru"?`Первый урок ${s}`:`${s} lesson 1`;return`<button class="${g(t)}" type="button" data-action="final-test-next-level" data-level="${g(n)}" data-next-level="${g(s)}" data-next-lesson="${g(a)}">${i(o)}</button>`}function _t(){return W(r.activeJlptLesson)||W(r.activeTextbookLevel)||W(r.jlptLessons.find(e=>et(e.jlpt))?.jlpt)||W(r.jlptLessons[0]?.jlpt)||"N5"}function Y$(e,t={}){const n=String(e||r.route||"home").toLowerCase();return n==="textbooks"?"textbooks":n==="textbook"?`textbooks/${encodeURIComponent(W(t.level||r.activeTextbookLevel||_t())||_t())}`:n==="lesson"?`jlpt-lesson/${encodeURIComponent(W(t.level||r.activeJlptLesson||_t())||_t())}`:n==="srs"?"review":n==="stats"?"stats":n==="achievements"?"achievements":n==="achievement"?r.route||"home":n||"home"}function Z$(e=r.route,t={}){const n=new URL(location.href);return n.search="",n.hash=Y$(e,t),n.href}function ej(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=W(t.level||r.activeJlptLesson||r.activeTextbookLevel||""),a=p()==="ru",o={textbooks:a?"Учебники Flash Kanji":"Flash Kanji textbooks",textbook:a?"Учебник Flash Kanji":"Flash Kanji textbook",lesson:a?"Урок Flash Kanji":"Flash Kanji lesson",srs:a?"Повторение Flash Kanji":"Flash Kanji review",stats:a?"Статистика Flash Kanji":"Flash Kanji stats",achievements:a?"Достижения Flash Kanji":"Flash Kanji achievements",achievement:"Flash Kanji"},l=o[n]||o.achievement;return s&&["textbook","lesson"].includes(n)?`${l} ${s}`:l}function tj(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=W(t.level||r.activeJlptLesson||r.activeTextbookLevel||""),a=s?$t(s):null,o=t.lesson||(s?un(s):null),l=p()==="ru";if(n==="textbooks")return l?"Функциональные учебники JLPT N5-N1 внутри Flash Kanji.":"Functional JLPT N5-N1 textbooks inside Flash Kanji.";if(n==="textbook"){const c=h(a?.displayTitle||a?.title||{}),d=Number(a?.lessonCount||0),u=Number(a?.kanjiCount||0);return l?`${c||"Учебник"}: ${d} уроков и ${u} кандзи.`:`${c||"Textbook"}: ${d} lessons and ${u} kanji.`}if(n==="lesson"){const c=h(o?.title||{}),d=h(o?.summary||{});return l?`${s?`${s} · `:""}${c||"Урок"} — ${d||"урок в Flash Kanji"}.`:`${s?`${s} · `:""}${c||"Lesson"} — ${d||"a Flash Kanji lesson"}.`}return n==="srs"?l?"Очередь повторений Flash Kanji.":"Flash Kanji review queue.":n==="stats"?l?"Моя статистика и прогресс во Flash Kanji.":"My Flash Kanji stats and progress.":n==="achievements"?l?"Достижения и секреты Flash Kanji.":"Flash Kanji achievements and secrets.":n==="achievement"?oj(t.reward||r.rewardModal||{}):"Flash Kanji."}function nj(){return p()==="ru"?"Поделиться":"Share"}function fs(e=r.route,t={}){const n=W(t.level||""),s=String(t.lessonId||t.lesson?.id||""),a=t.label||nj();return`
      <button class="btn ghost share-btn" type="button" data-action="share-page" data-share-section="${g(e)}" ${n?`data-share-level="${g(n)}"`:""} ${s?`data-share-lesson-id="${g(s)}"`:""} ${t.toastKey?`data-share-toast-key="${g(t.toastKey)}"`:""}>
        <span class="btn-icon" aria-hidden="true">${sj()}</span>
        <span>${i(a)}</span>
      </button>
    `}function sj(){return`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M15 5h4v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M10 14 19 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M19 14v5H5V5h5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>
    `}function ip(e){return e==="youtube"?`
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="3" y="6" width="18" height="12" rx="3" ry="3" fill="none" stroke="currentColor" stroke-width="2"/>
          <path d="M10 9.5 15 12 10 14.5Z" fill="currentColor"/>
        </svg>
      `:`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="4" y="4" width="16" height="16" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="17" cy="7" r="1.2" fill="currentColor"/>
      </svg>
    `}async function rj(e,t={}){const n=t.toastKey||"shareLinkCopied",s={title:e.title,text:e.text,url:e.url};if(e.files?.length&&navigator.canShare?.({files:e.files})&&(s.files=e.files),navigator.share)try{return await navigator.share(s),"share"}catch(o){if(o&&o.name==="AbortError")return"abort"}return await uj(e.text,e.url,n)?"copy":"failed"}async function aj(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=t.reward||r.rewardModal||null,a={section:n,title:ej(n,t),text:tj(n,t),url:Z$(n,t),files:[]};if(n==="achievement"||s){const o=await lj(s||{});o&&typeof File<"u"&&(a.files=[new File([o],`flash-kanji-achievement-${r.progress.level}.png`,{type:"image/png"})])}return a}async function op(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s={...t};s.level||(s.level=t.level||r.activeJlptLesson||r.activeTextbookLevel||""),pn("share_opened",{section:n,level:W(s.level)||""});const a=await aj(n,s),o=await rj(a,{toastKey:t.toastKey||"shareLinkCopied"});return o==="share"?(pn("share_completed",{section:n,method:a.files?.length?"file":"web_share"}),!0):o==="copy"?(pn("share_link_copied",{section:n}),pn("share_completed",{section:n,method:"copy"}),!0):(o==="abort"||O(p()==="ru"?"Не удалось поделиться":"Share failed"),!1)}async function ij(){await op("achievement",{reward:r.rewardModal||{},toastKey:"shareCopied"})}function oj(e={}){const t=S("shareFallback"),n=e.level||r.progress.level,s=Tt(),a=e.type==="level"?`${s.current}/${s.next}`:e.totalXp||r.progress.xp,o=e.type==="level"?r.progress.moonFragments:e.moonFragments||r.progress.moonFragments;return`${t}: ${S("level")} ${n}, ${a} XP, ${o} Moon Fragments.`}async function lj(e={}){const s=document.createElement("canvas");s.width=1200,s.height=630;const a=s.getContext("2d");if(!a)return null;cj(a,1200,630);const o=e.level||r.progress.level,l=Tt(),c=e.type==="level"?`${l.current}/${l.next}`:e.totalXp||r.progress.xp,d=e.type==="level"?r.progress.moonFragments:e.moonFragments||r.progress.moonFragments,u=e.mascot||(r.progress.level%2===0?"leya":"eva"),m=va(u,e.mood||"happy",e.dialog||e.type||"achievement"),[v,f]=await Promise.all([lp("assets/logo.webp"),m?lp(m):Promise.resolve(null)]);return v&&cp(a,v,58,48,330,116),f&&cp(a,f,780,95,330,450),a.fillStyle="#f7f4ee",a.font="900 58px system-ui, sans-serif",a.fillText(S("levelUp"),64,230),a.font="900 110px 'Yu Mincho', serif",a.fillStyle="#ffe15a",a.fillText(`${S("level")} ${o}`,64,340),a.font="800 38px system-ui, sans-serif",a.fillStyle="#f7f4ee",a.fillText(`${c} XP`,70,425),a.fillText(`${d} Moon Fragments`,70,482),a.fillStyle="rgba(255,255,255,0.74)",a.font="700 28px system-ui, sans-serif",a.fillText("Flash Kanji | JLPT Japanese learning",70,558),a.strokeStyle="rgba(255, 225, 90, 0.7)",a.lineWidth=3,a.strokeRect(34,30,1132,570),dj(s)}function cj(e,t,n){const s=e.createLinearGradient(0,0,t,n);s.addColorStop(0,"#08080c"),s.addColorStop(.45,"#1c1018"),s.addColorStop(1,"#071a18"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255, 56, 92, 0.22)",e.beginPath(),e.moveTo(0,70),e.lineTo(720,0),e.lineTo(560,630),e.lineTo(0,630),e.closePath(),e.fill(),e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=1;for(let a=-t;a<t*2;a+=38)e.beginPath(),e.moveTo(a,0),e.lineTo(a+t,n),e.stroke()}function lp(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=new URL(e,location.href).href})}function cp(e,t,n,s,a,o){const l=Math.min(a/t.naturalWidth,o/t.naturalHeight),c=t.naturalWidth*l,d=t.naturalHeight*l;e.drawImage(t,n+(a-c)/2,s+(o-d)/2,c,d)}function dj(e){return new Promise(t=>e.toBlob(t,"image/png",.94))}async function uj(e,t,n="shareLinkCopied"){const s=await dp(`${e}
${t}`);return O(s?S(n):e),s}async function dp(e){if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",document.body.append(t),t.focus(),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{t.remove()}}async function pj(e){const t=e.target.files?.[0];if(t)try{const n=JSON.parse(await t.text());r.progress=_l(Un(),n.progress||n),Kr(),n.customization&&(r.customization={...$n(),...n.customization,selected:{...$n().selected,...n.customization.selected||{}}},Jn()),Tr(),hs(),j(),Mt(),O(S("import")),N()}catch(n){console.error(n),O("Invalid JSON")}finally{e.target.value=""}}function gj(){if(!confirm(p()==="ru"?"Сбросить прогресс?":"Reset progress?"))return;const e=r.progress.settings;r.progress=Un(),r.progress.settings=e,r.finalTestModal=null,r.finalTestBusy=!1,Kr(),hs(),j(),N()}function mj(){r.progress.settings.theme=r.progress.settings.theme==="dark"?"light":"dark",r.progress.settings.themeManuallySelected=!0,Mt(),j(),N()}function fj(){r.progress.settings.language=p()==="ru"?"en":"ru",r.progress.settings.languageAutoDetected=!1,r.progress.settings.languageManuallySelected=!0,j(),N()}function up(){r.progress.settings.sound=!Bt(r.progress.settings.sound,!0),r.progress.settings.uxSound=r.progress.settings.sound,hs(),Oo(),j(),O(r.progress.settings.sound?"в™Є":"Г—")}function hj(){up()}function gr(){return window.FlashKanjiSound||null}function vj(){try{gr()?.preloadSounds?.()}catch(e){console.warn("UX sounds preload failed.",e)}}function hs(){const e=gr();!e||!r.progress?.settings||(e.setSoundEnabled?.(Bt(r.progress?.settings?.sound,!0)),e.setSoundVolume?.(Ea()))}function Pa(){return Bt(r.progress?.settings?.sound,!0)}function Oo(){const e=ye('[data-action="sound"]');if(!e)return;const t=Bt(r.progress?.settings?.sound,!0),n=p()==="ru"?t?"Звук":"Звук выключен":t?"Sound":"Sound off";e.classList.toggle("is-muted",!t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",n),e.title=n,e.innerHTML=wj(t)}function wj(e){return e?`
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 10v4h4l6 4V6l-6 4H4Z" fill="currentColor" />
          <path d="M16 9c1 1 1.5 2 1.5 3s-.5 2-1.5 3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
          <path d="M18.5 6.5c2 1.9 2.5 4.1 2.5 5.5s-.5 3.6-2.5 5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
        </svg>
      `:`
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 10v4h4l6 4V6l-6 4H4Z" fill="currentColor" />
          <path d="M16 8 20 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
        </svg>
      `}function bj(e){return e?`
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 4.25a4.25 4.25 0 0 0-4.25 4.25v2.12c0 .79-.18 1.56-.53 2.25L6 15.56c-.2.4.09.87.54.87h10.92c.45 0 .74-.47.54-.87l-1.22-2.69a4.75 4.75 0 0 1-.53-2.25V8.5A4.25 4.25 0 0 0 12 4.25Z" fill="currentColor" />
          <path d="M9.65 18.5a2.4 2.4 0 0 0 4.7 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
          <circle cx="17.5" cy="6.5" r="2" fill="currentColor" />
        </svg>
      `:`
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 4.25a4.25 4.25 0 0 0-4.25 4.25v2.12c0 .79-.18 1.56-.53 2.25L6 15.56c-.2.4.09.87.54.87h10.92c.45 0 .74-.47.54-.87l-1.22-2.69a4.75 4.75 0 0 1-.53-2.25V8.5A4.25 4.25 0 0 0 12 4.25Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" />
          <path d="M9.65 18.5a2.4 2.4 0 0 0 4.7 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
        </svg>
      `}function kj(){const e=ye('[data-action="notification-center"]');if(!e)return;const t=r.notificationPrompt||wr(),n=!!(t.docked||r.notificationPromptVisible||Fa("header")),s=!!r.notificationPromptVisible,a=s?p()==="ru"?"Скрыть уведомление":"Hide notification":t.docked?p()==="ru"?"Открыть уведомление":"Open notification":p()==="ru"?"Уведомления":"Notifications";e.hidden=!n,e.classList.toggle("is-active",s),e.classList.toggle("has-prompt",!!(t.docked||s)),e.setAttribute("aria-pressed",String(s)),e.setAttribute("aria-label",a),e.title=a,e.innerHTML=bj(s)}function Fo(){const e=ye('[data-action="toggle-header-socials"]');if(!e)return;const t=Bo(),n=p()==="ru"?t?"Скрыть соцсети":"Открыть соцсети":t?"Hide social links":"Open social links";e.setAttribute("aria-expanded",String(t)),e.classList.toggle("is-active",t),e.setAttribute("aria-label",n),e.title=n}function pp(e){const t=document.querySelector(".app-header");t&&(t.classList.toggle("is-social-open",!!e),Fo())}function Bo(){return!!document.querySelector(".app-header")?.classList.contains("is-social-open")}function Ea(){const e=Number(r.progress?.settings?.uxVolume);return Number.isFinite(e)?oe(e,0,1):.75}function yj(e){const t=oe(Number(e),0,1);r.progress.settings.uxVolume=t,hs(),j()}function x(e){if(!Pa())return!1;const t=()=>{try{if(!!gr()?.playSound?.(e)){js=Date.now();return}Uo(String(e))}catch(n){console.warn("UX sound failed.",n),Uo(String(e))}};return typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>window.setTimeout(t,0)):window.setTimeout(t,0),!0}function Mt(){document.documentElement.dataset.theme=r.progress.settings.theme,document.documentElement.dataset.customTheme=r.customization?.selected?.theme||"theme_default_dark";const e=At();document.documentElement.dataset.customRoom=e?.id||"bg_study_hub",document.documentElement.style.setProperty("--app-room-bg",$j(e?.file||"assets/bg/bg_study_hub.webp"));const t=xh();document.documentElement.dataset.customEffect=t||"none",document.querySelector('meta[name="theme-color"]')?.setAttribute("content",r.progress.settings.theme==="light"?"#f8f7f2":"#08080c")}function $j(e){const t=String(e).replace(/["\\\n\r]/g,"");return`url("${t.startsWith("assets/")?`../${t}`:t}")`}function S(e){return r.i18n?.ui?.[e]?.[p()]||r.i18n?.ui?.[e]?.ru||e}function p(){return r.progress?.settings?.language||"ru"}function h(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function jj(e){if(!e)return"";try{return new Intl.DateTimeFormat(p()==="ru"?"ru-RU":"en-US",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch{return String(e).slice(0,16)}}function mr(e){return p()==="en"&&r.lessonTranslations[e.id]?.title_en||e.title}function Sj(e){return p()==="en"&&r.lessonTranslations[e.id]?.summary_en||e.summary}function zo(e){const t=r.lessons.find(n=>n.id===e);return t?mr(t):""}function I(e){return xe(e,p())}function xe(e,t=p()){if(!e)return"";const n=Ju(e);return n&&n.meaning?t==="en"?n.meaning.en||n.meaning.ru||e.meaning_en||r.kanjiTranslations[e.id]?.meaning_en||"":n.meaning.ru||e.meaning_ru||r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||"":t==="en"?r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||e.meaning_ru||"":e.meaning_ru||r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||""}function fr(e){return p()==="en"?r.kanjiTranslations[e.id]?.interface_use_en||e.interface_use_en||e.interface_use||"":e.interface_use||e.interface_use_en||""}function Me(e){if(p()!=="en")return e.translation_ru||e.translation||"";if(e.translation_en)return e.translation_en;const t=r.vocabulary.find(n=>n.word===e.word||Jo(n.romaji)===Jo(e.romaji));return t?.translation_en?t.translation_en:zp[Jo(e.romaji)]||e.translation||""}function Jo(e){return String(e||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function vs(e){return r.dialogues?.mascots?.[e]||{name:{ru:e,en:e},sprites:{},dialogs:{}}}function Ce(e,t){const n=e==="eva"?Nj(t):"";if(n)return n;const s=vs(e).dialogs?.[t]||vs(e).dialogs?.welcome||{},a=s[p()]||s.ru||[""];return Pe(a)}function Nj(e="welcome"){const t=String(e||"welcome").toLowerCase();if(!["welcome","progress","hint","lessoncomplete","masterymilestone","achievement"].includes(t))return"";const n=Aj(t),s=[...r.evaAutonomyLines||[],...Qr()].filter(l=>{const c=h(l?.text||{});if(!c)return!1;const d=Array.isArray(l.tags)?l.tags:[];if(!(n.includes(l.category)||d.some(v=>n.includes(v))))return!1;const m=gp(c);return m.length>=12&&m.length<=132}),a=s.filter(l=>!Ya.includes(l.id)),o=Pe(a.length?a:s);return o?(o.id&&(Ya=[o.id,...Ya.filter(l=>l!==o.id)].slice(0,18)),gp(h(o.text||{}))):""}function Aj(e){return{welcome:["fis_study","fis_focus","fis_observation","fis_short","study","short","mood","room"],progress:["fis_reward","fis_streak","fis_review","reward","streak","review","progress"],hint:["fis_focus","fis_observation","hint","study"],lessoncomplete:["fis_reward","fis_streak","reward","study"],masterymilestone:["fis_reward","fis_streak","reward","progress"],achievement:["fis_reward","reward","achievement"]}[e]||["fis_study","study"]}function gp(e){const t=String(e||"").replace(/\s+/g," ").trim();if(t.length<=132)return t;const n=t.match(/[^.!?гЂ'пјЃпјџ]+[.!?гЂ'пјЃпјџ]?/g)||[t];let s="";for(const a of n){const o=`${s} ${a.trim()}`.trim();if(o.length>132)break;s=o}return s.length>=12?s:`${t.slice(0,124).trimEnd()}...`}function Da(e){const t=mp(e);return`<span class="pill ${t}">${i(Bp[t]||"New")}</span>`}function mp(e){const t=String(e||"new").toLowerCase();return t==="new"||t==="learning"||t==="review"||t==="mastered"?t:t==="New".toLowerCase()?"new":t.includes("master")?"mastered":t.includes("learn")?"learning":t.includes("review")?"review":"new"}function fp(e){const t=(e.correct||0)+(e.wrong||0);return t?Math.round((e.correct||0)/t*100):0}function xj(){const e=getComputedStyle(document.documentElement);return{text:e.getPropertyValue("--text").trim(),muted:e.getPropertyValue("--muted").trim(),line:e.getPropertyValue("--line").trim(),red:e.getPropertyValue("--accent").trim(),yellow:e.getPropertyValue("--accent-2").trim(),green:e.getPropertyValue("--accent-3").trim(),blue:e.getPropertyValue("--accent-4").trim(),danger:e.getPropertyValue("--danger").trim(),pink:"#ff91d8",blueSoft:"rgba(67, 214, 255, 0.16)",dangerSoft:"rgba(255, 107, 95, 0.16)"}}function Cj(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.text}}},scales:{x:{ticks:{color:e.muted},grid:{color:e.line}},y:{beginAtZero:!0,ticks:{color:e.muted,precision:0},grid:{color:e.line}}}}}function Ka(){try{return Nr||(Nr=new(window.AudioContext||window.webkitAudioContext)),Nr.state==="suspended"&&Nr.resume().catch(()=>null),Nr}catch(e){return console.warn("Audio context unavailable.",e),null}}function Lj(e){const t=String(e||"").toLowerCase();return t.includes("wrong")||t.includes("failed")?{type:"triangle",frequencies:[180],duration:.22,peak:.12,interval:0}:t.includes("correct")||t.includes("success")?{type:"triangle",frequencies:[440,554.37],duration:.18,peak:.11,interval:.09}:t.includes("level")||t.includes("achievement")||t.includes("reward")||t.includes("xp")||t.includes("moon")||t.includes("unlock")?{type:"sine",frequencies:[523.25,659.25,783.99],duration:.26,peak:.1,interval:.08}:t.includes("close")?{type:"square",frequencies:[260],duration:.12,peak:.08,interval:0}:t.includes("open")||t.includes("button")||t.includes("click")||t.includes("tab")||t.includes("page")?{type:"sine",frequencies:[320],duration:.09,peak:.08,interval:0}:{type:"sine",frequencies:[360],duration:.16,peak:.08,interval:0}}function Uo(e){const t=Ka();if(!t)return!1;try{const n=Lj(e),s=t.currentTime+.01;return n.frequencies.forEach((a,o)=>{const l=t.createOscillator(),c=t.createGain();l.type=n.type,l.frequency.value=a;const d=s+n.interval*o;c.gain.setValueAtTime(1e-4,d),c.gain.exponentialRampToValueAtTime(n.peak,d+.02),c.gain.exponentialRampToValueAtTime(1e-4,d+n.duration),l.connect(c).connect(t.destination),l.start(d),l.stop(d+n.duration+.02)}),js=Date.now(),!0}catch(n){return console.warn("Fallback UX tone failed.",n),!1}}window.FlashKanjiUxToneFallback=Uo;function Ij(){const e=()=>{const t=Ka();t?.state==="suspended"&&t.resume().catch(()=>null)};["pointerdown","touchstart","keydown","mousedown"].forEach(t=>{document.addEventListener(t,e,{once:!0,passive:!0,capture:!0})})}function hr(e){if(r.progress.settings.sound){if(gr()){x(e==="again"?"answer_wrong":"answer_correct");return}try{const t=Ka();if(!t)return;js=Date.now();const n=t.createOscillator(),s=t.createGain(),a=t.currentTime;n.type="triangle",n.frequency.value=e==="again"?180:480,s.gain.setValueAtTime(1e-4,a),s.gain.exponentialRampToValueAtTime(.13,a+.015),s.gain.exponentialRampToValueAtTime(1e-4,a+.18),n.connect(s).connect(t.destination),n.start(a),n.stop(a+.2)}catch(t){console.warn("Audio unavailable.",t)}}}function Tj(){if(r.progress.settings.sound)try{const e=Ka();if(!e)return;js=Date.now();const t=e.currentTime;[523.25,659.25,783.99].forEach((n,s)=>{const a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.value=n;const l=t+s*.08;o.gain.setValueAtTime(1e-4,l),o.gain.exponentialRampToValueAtTime(.12,l+.02),o.gain.exponentialRampToValueAtTime(1e-4,l+.24),a.connect(o).connect(e.destination),a.start(l),a.stop(l+.26)})}catch(e){console.warn("Achievement sound unavailable.",e)}}function Rj(){const e=document.createElement("div");e.className="confetti",e.innerHTML=Array.from({length:34},(t,n)=>`<i style="--x:${Math.random()*100}vw;--d:${Math.random()*.8+.8}s;--r:${Math.random()*360}deg;--c:${n%4}"></i>`).join(""),document.body.append(e),window.setTimeout(()=>e.remove(),1800)}function O(e){const t=ye("#toast");t.textContent=e,t.hidden=!1,clearTimeout(hl),hl=window.setTimeout(()=>{t.hidden=!0},2400)}function _j(){return`
      <section class="boot-screen loading" aria-label="Flash Kanji loading">
        <div class="boot-panel">
          <div class="boot-panel-brand">
            <img class="boot-brand-logo" src="assets/brand/flash-kanji-logo.webp" alt="Flash Kanji" loading="eager" decoding="async" />
            <div>
              <p class="eyebrow">JLPT N5-N1 · ${i(p()==="ru"?"Учебники":"Textbooks")} · ${i(p()==="ru"?"Повторение":"Review")}</p>
              <h1 class="hero-title">Flash Kanji</h1>
            </div>
          </div>
          <p class="hero-subtitle">${i(p()==="ru"?"Кандзи через учебники и SRS-повторение.":"Kanji through textbooks and SRS review.")}</p>
          <div class="hero-actions" aria-hidden="true">
            <button class="btn primary" type="button" disabled>冊 ${i(p()==="ru"?"Учебники":"Textbooks")}</button>
            <button class="btn" type="button" disabled>文 ${i(p()==="ru"?"Словарь":"Dictionary")}</button>
            <button class="btn ghost" type="button" disabled>↻ ${i(p()==="ru"?"Повторение":"Review")}</button>
          </div>
          <div class="boot-status" role="status">${i(p()==="ru"?"Загрузка Flash Kanji...":"Loading Flash Kanji...")}</div>
        </div>
      </section>`}function Mj(e){return`<section class="empty-state" style="margin-top:24px"><span class="kanji-char">警</span><h1>Data error</h1><p>${i(e.message)}</p></section>`}function Pj(){try{[dt,ks,Sr,"flashKanji.lastForcedBuild"].forEach(t=>{try{localStorage.removeItem(t)}catch(n){console.warn(`Could not remove recovery key ${t}.`,n)}})}catch(e){console.warn("Could not clear Flash Kanji recovery markers during boot recovery.",e)}}async function Ej(){if("caches"in window){const e=await caches.keys();await Promise.all(e.map(t=>caches.delete(t)))}if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(async t=>{try{await t.unregister()}catch(n){console.warn("Could not unregister service worker during boot recovery.",n)}}))}}async function Dj(e){try{const t=Number(sessionStorage.getItem(jr)||"0");if(t>=2)return!1;const n=t+1;sessionStorage.setItem(jr,String(n)),console.warn(`[FlashKanji] Boot failed, attempting recovery stage ${n}.`,e),n>=2&&Pj(),await Ej();try{localStorage.removeItem(dt),localStorage.removeItem(ks),localStorage.removeItem(Sr),localStorage.removeItem("flashKanji.lastForcedBuild")}catch(a){console.warn("Boot recovery marker cleanup failed.",a)}const s=new URL(location.href);return s.searchParams.set("cachebust",Date.now().toString()),s.searchParams.set("bootRecovery",String(n)),location.replace(s.toString()),!0}catch(t){return console.warn("Boot recovery failed.",t),!1}}function Kj(){if(!("serviceWorker"in navigator)||location.protocol==="file:")return;let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,location.reload())}),navigator.serviceWorker.addEventListener("message",n=>{if(n.data?.type==="FLASH_KANJI_CACHE_RESET_DONE")try{localStorage.setItem(ks,`${M}:done`)}catch(s){console.warn("Cannot save PWA cache reset marker.",s)}});const t=async()=>{try{const n=new URL("service-worker.js",document.baseURI),s=await navigator.serviceWorker.register(n.href);Oj(s),await s.update().catch(console.warn)}catch(n){console.warn(n)}};document.readyState==="loading"?window.addEventListener("load",()=>{t()},{once:!0}):t()}function Oj(e){e&&e.addEventListener("updatefound",()=>{const t=e.installing;t&&t.addEventListener("statechange",()=>{(t.state==="installed"||t.state==="activated")&&e.update().catch(()=>null)})})}function Oa(){const e={declineCount:0,nextShowAt:0,neverShow:!1,installed:!1};try{const t=localStorage.getItem(L)||localStorage.getItem(C);if(!t)return e;const n=JSON.parse(t),s={...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,installed:!!n.installed};return localStorage.getItem(L)||localStorage.setItem(L,JSON.stringify(s)),s}catch(t){return console.warn("PWA install prompt state reset.",t),e}}function Go(){try{localStorage.setItem(L,JSON.stringify(r.pwaInstallPrompt))}catch(e){console.warn("Cannot save PWA install prompt state.",e)}}function Fj(e){e.preventDefault(),Ot=e,r.progress&&r.i18n&&zj()}async function Bj(){if(pn("pwa_install_clicked",{available:!!Ot,ios:ws()}),vr()){Ho();return}if(!Ot){r.pwaInstallHelpVisible=!0,Oe();return}const e=Ot;Ot=null;try{if(await e.prompt(),(await e.userChoice)?.outcome==="accepted"){Ho();return}Wo()}catch(t){console.warn("PWA install prompt failed.",t),Wo()}}function vr(){return["standalone","fullscreen","minimal-ui"].some(t=>window.matchMedia?.(`(display-mode: ${t})`)?.matches)||Reflect.get(navigator,"standalone")===!0}function qo(){const e=r.pwaInstallPrompt||Oa();if(vr()||e.installed||e.neverShow||Date.now()<Number(e.nextShowAt||0))return!1;const t=r.progress?.visits?.firstVisitDate;return!t||mn(t,se())<1?!1:!!Ot||ws()}function zj(){qo()&&(pn("pwa_prompt_shown",{source:Ot?"browser":"ios"}),x("notification_soft"),N())}function Ho(){r.pwaInstallPrompt={...Oa(),...r.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},r.pwaInstallHelpVisible=!1,Go(),pn("pwa_installed",{platform:ws()?"ios":"browser"}),bp(),r.progress&&r.i18n&&N()}function Wo(){const e=r.pwaInstallPrompt||Oa(),t=Math.min(Number(e.declineCount||0)+1,5);r.pwaInstallPrompt={...e,declineCount:t,nextShowAt:Jj(t),neverShow:t>=5,installed:!1},Go(),N()}function Jj(e){const s={1:864e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||864e5)}function Uj(){!vr()||r.pwaInstallPrompt.installed||(r.pwaInstallPrompt={...r.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},Go())}function ws(){const e=navigator.userAgent||"",t=/iphone|ipad|ipod/i.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=/safari/i.test(e)&&!/(crios|fxios|edgios|opios|chrome|android)/i.test(e);return t&&n}function hp(){return p()==="en"?{badge:"Offline PWA",title:"Install Flash Kanji on your home screen?",description:"Your progress, lessons and reviews will open like a real app.",iosInstruction:"Tap Share -> Add to Home Screen.",install:"Install app",later:"Later"}:{badge:"Offline PWA",title:"Установить Flash Kanji на главный экран?",description:"Так прогресс, уроки и повторения будут открываться как приложение.",iosInstruction:"Нажмите Поделиться → На экран Домой.",install:"установить приложение",later:"Позже"}}function wr(){const e={declineCount:0,nextShowAt:0,neverShow:!1,permission:typeof Notification>"u"?"unsupported":Notification.permission,enabled:!1,acceptedAt:null,lastAskedAt:0,lastShown:{},periodicSync:!1,docked:!1};try{const t=localStorage.getItem(F);if(!t)return e;const n=JSON.parse(t);return{...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,enabled:!!n.enabled,lastShown:n.lastShown&&typeof n.lastShown=="object"?n.lastShown:{},docked:!!n.docked}}catch(t){return console.warn("Notification prompt state reset.",t),e}}function gn(){try{localStorage.setItem(F,JSON.stringify(r.notificationPrompt))}catch(e){console.warn("Cannot save notification prompt state.",e)}}function br(){clearTimeout(Ha),Ha=0}function Gj(){br(),r.notificationPromptVisible&&(Ha=window.setTimeout(()=>{r.notificationPromptVisible&&vp()},5e3))}function vp(){br(),!(!r.notificationPromptVisible&&r.notificationPrompt?.docked)&&(r.notificationPromptVisible=!1,r.notificationPrompt={...r.notificationPrompt,docked:!0},gn(),N())}function wp(){return vr()||!!r.pwaInstallPrompt?.installed}function Fa(e="usage"){const t=r.notificationPrompt||wr();return!(!("Notification"in window)||t.neverShow||t.enabled||!wp()||Notification.permission==="granted"||Notification.permission==="denied"||Date.now()<Number(t.nextShowAt||0)||e!=="lesson_complete"&&Date.now()-ei<2*60*1e3)}function Ba(e="usage"){return Fa(e)?(r.notificationPromptVisible=!0,r.notificationPrompt={...r.notificationPrompt,docked:!1},gn(),x("notification_soft"),Gj(),N(),!0):("Notification"in window&&Notification.permission==="granted"&&kp(),!1)}function bp(){if(clearTimeout(vl),!wp())return;const e=Math.max(0,2*60*1e3-(Date.now()-ei));vl=window.setTimeout(()=>Ba("usage"),e)}async function qj(){if(r.notificationPromptVisible=!1,br(),!("Notification"in window)){za();return}try{const e=Notification.permission==="granted"?"granted":await Notification.requestPermission();if(r.notificationPrompt.permission=e,r.notificationPrompt.lastAskedAt=Date.now(),e==="granted"){kp(),O($p().enabled),Oe();return}za()}catch(e){console.warn("Notification permission failed.",e),za()}}function kp(){!("Notification"in window)||Notification.permission!=="granted"||(br(),r.notificationPrompt={...wr(),...r.notificationPrompt,permission:"granted",enabled:!0,neverShow:!0,docked:!1,acceptedAt:r.notificationPrompt.acceptedAt||new Date().toISOString(),nextShowAt:0},gn(),Qo())}function za(){const e=r.notificationPrompt||wr(),t=Math.min(Number(e.declineCount||0)+1,5);r.notificationPromptVisible=!1,br(),r.notificationPrompt={...e,permission:"Notification"in window?Notification.permission:"unsupported",declineCount:t,nextShowAt:Hj(t),neverShow:t>=5,enabled:!1,docked:!1,lastAskedAt:Date.now()},gn(),Oe()}function Hj(e){const s={1:432e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||12*36e5)}function Qo(){!("Notification"in window)||Notification.permission!=="granted"||(r.notificationPrompt.permission="granted",r.notificationPrompt.enabled=!0,gn(),Za.forEach(e=>clearTimeout(e)),Za.clear(),[{type:"daily_bonus",hour:9,minute:0},{type:"lesson",hour:11,minute:30},{type:"review",hour:18,minute:0},{type:"streak",hour:20,minute:30}].forEach(e=>yp(e.type,Wj(e.hour,e.minute))),Yj())}function yp(e,t){const n=Math.max(1e3,Math.min(t.getTime()-Date.now(),2147483647)),s=window.setTimeout(async()=>{await Qj(e),yp(e,Zj(t,1))},n);Za.set(e,s)}function Wj(e,t){const n=new Date;return n.setHours(e,t,0,0),n.getTime()<=Date.now()+60*1e3&&n.setDate(n.getDate()+1),n}async function Qj(e){if(!Xj(e))return!1;const t=Vj(e);try{const n=await navigator.serviceWorker?.ready;return n?.showNotification?await n.showNotification(t.title,t.options):"Notification"in window&&Notification.permission==="granted"&&new Notification(t.title,t.options),x(e==="daily_bonus"?"notification_reward":"notification_reminder"),r.notificationPrompt.lastShown[e]=se(),gn(),!0}catch(n){return console.warn("Notification show failed.",n),!1}}function Xj(e){if(!("Notification"in window)||Notification.permission!=="granted"||r.notificationPrompt.lastShown?.[e]===se())return!1;if(e==="review")return Re()>0;if(e==="daily_bonus"){const t=Er(r.progress.dailyBonusPending);return!!r.progress.visits?.firstVisitDate&&!!t&&t.availableOn<=se()&&!r.progress.dailyBonuses[se()]}return e==="lesson"?b$().length>0:e==="streak"?(r.progress.streak.current||r.progress.visits?.streak||0)>0:!0}function Vj(e){const t=p()==="ru",n={review:{title:"Flash Kanji",body:t?"Ваши кандзи ждут повторения.":"Your kanji are waiting for review.",url:"./index.html#review"},streak:{title:t?"Лея рядом 🌙":"Leya is nearby рџЊ™",body:t?"Не потеряйте свою серию дней.":"Do not lose your daily streak.",url:"./index.html#home"},daily_bonus:{title:t?"Ежедневный бонус":"Daily Bonus",body:t?"Заберите XP и Moon Fragments.":"Claim XP and Moon Fragments.",url:"./index.html#home"},lesson:{title:t?"Новые знания ждут":"New knowledge awaits",body:t?"Продолжите изучение кандзи.":"Continue learning kanji.",url:"./index.html#textbooks"}},s=n[e]||n.review;return{title:s.title,options:{body:s.body,tag:`flash-kanji-${e}`,renotify:!1,icon:"./assets/icon-192.png",badge:"./assets/icon-192.png",data:{url:s.url,type:e}}}}async function Yj(){try{const e=await navigator.serviceWorker?.ready;if(!e?.periodicSync)return;await e.periodicSync.register("flash-kanji-daily",{minInterval:24*60*60*1e3}),r.notificationPrompt.periodicSync=!0,gn()}catch{r.notificationPrompt.periodicSync=!1,gn()}}function $p(){return p()==="en"?{badge:"PWA reminders",title:"Allow Flash Kanji notifications?",description:"We will remind you about reviews, streaks and daily bonuses.",allow:"Allow",later:"Later",enabled:"Notifications enabled"}:{badge:"PWA напоминания",title:"Разрешить уведомления Flash Kanji?",description:"Мы напомним о повторениях, серии и ежедневном бонусе.",allow:"Разрешить",later:"Позже",enabled:"Уведомления включены"}}function ne(e){return{...e,history:[...e.history||[]]}}function Zj(e,t){return new Date(e.getTime()+t*24*60*60*1e3)}function eS(){const e=new Date;return e.setHours(23,59,59,999),e}function se(){return Xo(new Date)}function Xo(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Vo(e){const[t,n,s]=e.split("-").map(Number);return new Date(t,n-1,s)}function mn(e,t){return Math.round((Vo(t)-Vo(e))/864e5)}function jp(e,t){const n=Vo(e);return n.setDate(n.getDate()+t),Xo(n)}function tS(e){return Array.from({length:e},(t,n)=>{const s=new Date;return s.setDate(s.getDate()-(e-1-n)),Xo(s)})}function Kn(e){if(!e)return p()==="ru"?"сейчас":"now";const t=new Date(e).getTime()-Date.now();if(t<=0)return p()==="ru"?"сейчас":"now";const n=Math.ceil(t/6e4);if(n<60)return p()==="ru"?`через ${n} мин.`:`in ${n} min`;const s=Math.ceil(n/60);if(s<24)return p()==="ru"?`через ${s} ч.`:`in ${s} h`;const a=Math.ceil(s/24);return p()==="ru"?`через ${a} дн.`:`in ${a} d`}function R(e,t){return t?oe(Math.round(e/t*100),0,100):0}function oe(e,t,n){return Math.max(t,Math.min(n,e))}function Ja(e,t){const n=10**t;return Math.round(e*n)/n}function Pe(e){return e[Math.floor(Math.random()*e.length)]}function fn(e,t){return Math.floor(Number(e)+Math.random()*(Number(t)-Number(e)))}function kr(e,t){return String(e)===String(t)?"selected":""}function nS(){const e=decodeURIComponent(location.pathname||"/"),t=e.replace(/\/textbooks(?:\/[^/?#]*)*\/?$/i,"/")||"/";if(t!==e||/^\/?textbooks(?:\/|$)/i.test(e))return t.endsWith("/")?t:`${t}/`;if(/\/[^/]+\.html$/i.test(e)){const n=e.replace(/[^/]+\.html$/i,"")||"/";return n.endsWith("/")?n:`${n}/`}return e.endsWith("/")?e:`${e}/`}function Sp(e="",t=""){const n=String(e||"").trim().toUpperCase(),s=String(t||"").trim(),a=n?`#textbooks/${encodeURIComponent(n)}`:"#textbooks/";return s?`${a}/${encodeURIComponent(s)}`:a}function Pt(e=""){const t=String(e||"").trim(),n=t?t.startsWith("#")?t:`#${t.replace(/^#/,"")}`:"",s=`${nS()}${location.search||""}${n}`;`${location.pathname}${location.search||""}${location.hash||""}`!==s&&history.replaceState(null,"",s)}function Np(){return rl(location.hash).raw}function Yo(){return rl(location.hash).route}function Zo(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^kanji\/([^/?]+)/);return t?t[1]:""}function el(){const e=Np(),t=e.match(/^textbooks\/([^/?#]+)/i)||e.match(/^jlpt\/([^/?#]+)/i);return t?String(t[1]||"").toUpperCase():""}function tl(){const e=Np(),t=e.match(/^textbooks\/[^/?#]+\/([^?#]+)/i)||e.match(/^jlpt\/[^/?#]+\/([^?#]+)/i);return t?String(t[1]||""):""}function Ap(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^learn(?:\/([^/?#]+))?/i),n=String(t?.[1]||"").toLowerCase();return n===Kt?Kt:n===vn?vn:$s}function xp(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^learn\/lesson\/([^/?#]+)/i);return t?String(t[1]||""):""}function Cp(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^learn\/legacy\/([^/?#]+)/i);return t?String(t[1]||""):""}function nl(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^jlpt-lesson\/([^/?#]+)/i);return t?String(t[1]||"").toUpperCase():""}function sS(){return Rn().filter(e=>bs(e.id)).length}function bs(e){const t=r.progress?.achievements?.[e];return!!(t&&(t===!0||typeof t=="string"||t.unlockedAt||t.rewardXp!==void 0))}function i(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function g(e){return i(e)}})();
