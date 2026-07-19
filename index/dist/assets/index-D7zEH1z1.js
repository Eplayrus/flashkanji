(function(){const os=document.createElement("link").relList;if(os&&os.supports&&os.supports("modulepreload"))return;for(const oe of document.querySelectorAll('link[rel="modulepreload"]'))ir(oe);new MutationObserver(oe=>{for(const we of oe)if(we.type==="childList")for(const Ln of we.addedNodes)Ln.tagName==="LINK"&&Ln.rel==="modulepreload"&&ir(Ln)}).observe(document,{childList:!0,subtree:!0});function Cn(oe){const we={};return oe.integrity&&(we.integrity=oe.integrity),oe.referrerPolicy&&(we.referrerPolicy=oe.referrerPolicy),oe.crossOrigin==="use-credentials"?we.credentials="include":oe.crossOrigin==="anonymous"?we.credentials="omit":we.credentials="same-origin",we}function ir(oe){if(oe.ep)return;oe.ep=!0;const we=Cn(oe);fetch(oe.href,we)}})();(()=>{const xn="flashKanji.progress.v2",os="flashKanji.progress.v1",Cn="flashKanji.pwaInstallPrompt.v2",ir="flashKanji.pwaInstallPrompt.v1",oe="flashKanji.notificationPrompt.v1",we="flashkanji_customization",Ln="flashkanji_eva_state_v2",Ct="2026-07-13-textbook-tiles-v61",Ko=`flashKanji.hiddenMascotSpeeches:${Ct}`,Bo="moonfarm",or="flashKanji.appBuild.v1",Ta="flashKanji.pwaCacheReset.v1",Ra="flashKanji.bootRecovery.v1",dp=109492033,Fo={instagram:"https://www.instagram.com/fallinginto_silence?igsh=MWpzYW1ncTB1a3FuNw==",youtube:"https://youtube.com/@fallingintosilence?si=cJ97__ndJ1aaaMae"},_a="aleksey.lebedev606@gmail.com",up="Flash Kanji bug report",lr="flashKanji.forcePwaCacheReset.v1",K={lessons:"data/lessons.json",dialogues:"data/dialogues.json",i18n:"data/i18n.json",rewards:"data/rewards.json",kanjiMeta:"data/kanji/meta.json",kanjiHints:"data/kanji/hints.json",kanjiTranslations:"data/kanji/translations.json",kanjiStrokes:"data/kanji/stroke-order-kanjivg.json",kanjiPageSources:"data/sources/kanji-page-sources.json",lessonTranslations:"data/lessons/translations.json",vocabulary:"data/vocabulary/index.json",sentences:"data/sentences/index.json",achievements:"data/achievements/index.json",jlptCatalog:"data/jlpt/index.json",jlptLessons:"data/jlpt-lessons.json",jlptPracticeLessons:"data/jlpt-practice-lessons.json",n5Meta:"data/jlpt/n5/meta.json",n5Lessons:"data/jlpt/n5/lessons.json",n5Kanji:"data/jlpt/n5/kanji.json",n5Exercises:"data/jlpt/n5/exercises.json",n5FinalTest:"data/jlpt/n5/final-test.json",n5Reading:"data/jlpt/n5/reading.json",n4Meta:"data/jlpt/n4/meta.json",n4Lessons:"data/jlpt/n4/lessons.json",n4Kanji:"data/jlpt/n4/kanji.json",n4Grammar:"data/jlpt/n4/grammar.json",n4Exercises:"data/jlpt/n4/exercises.json",n4Reading:"data/jlpt/n4/reading.json",n4Listening:"data/jlpt/n4/listening.json",n4FinalTest:"data/jlpt/n4/final-test.json",n3Meta:"data/jlpt/n3/meta.json",n3Lessons:"data/jlpt/n3/lessons.json",n3Kanji:"data/jlpt/n3/kanji.json",n3Grammar:"data/jlpt/n3/grammar.json",n3Exercises:"data/jlpt/n3/exercises.json",n3Reading:"data/jlpt/n3/reading.json",n3Listening:"data/jlpt/n3/listening.json",n3FinalTest:"data/jlpt/n3/final-test.json",n2Meta:"data/jlpt/n2/meta.json",n2Lessons:"data/jlpt/n2/lessons.json",n2Kanji:"data/jlpt/n2/kanji.json",n2Grammar:"data/jlpt/n2/grammar.json",n2Exercises:"data/jlpt/n2/exercises.json",n2Reading:"data/jlpt/n2/reading.json",n2Listening:"data/jlpt/n2/listening.json",n2FinalTest:"data/jlpt/n2/final-test.json",n1Meta:"data/jlpt/n1/meta.json",n1Reading:"data/jlpt/n1/reading.json",jlptReadingMarkdown:"data/jlpt/reading-texts_N5_N1.md",jlptReadingTranslations:"data/jlpt/reading-texts_N5_N1.translations.json",monetization:"data/monetization/catalog.json",customizationShop:"data/customization-shop.json",evaBackgrounds:"data/eva-backgrounds.json",evaSprites:"data/eva-sprites.json",evaRoomDialogues:"data/eva-room-dialogues.json",evaAutonomyLines:"data/eva-autonomy-lines.json",evaExpandedDialogues:"data/eva-expanded-dialogues.json",evaFisPersonality:"data/eva-fis-personality.json",evaPresence:"data/eva-presence.json"},He={forgot:"Forgot",remember:"Remember",again:"Again",hard:"Hard",good:"Good",easy:"Easy"},pp={New:"New",Learning:"Learning",Review:"Review",Mastered:"Mastered",new:"New",learning:"Learning",review:"Review",mastered:"Mastered"},be=["N5","N4","N3","N2","N1"],ee=new Set,gp={nihon:"Japan",kyou:"today",getsuyoubi:"Monday",ichigatsu:"January",nihonjin:"Japanese person",hitori:"one person",honya:"bookstore",ichinichi:"one day",ichiban:"number one, the best",nigatsu:"February",futari:"two people",jikan:"time, hour",nanji:"what time",kotoshi:"this year",rainen:"next year",kaimono:"shopping",kounyuu:"purchase",baiten:"kiosk, shop stall",hatsubai:"release, sale",shiyou:"use",tsukaikata:"how to use",soushin:"message sending",housou:"broadcast",sekai:"world",sedai:"generation",gyoukai:"industry",toukou:"post, publication",toushi:"investment",jouhou:"information",houkoku:"report",kakunin:"confirmation, check",shounin:"approval",kaigi:"meeting",giron:"discussion",kengen:"access rights, permission",chosakuken:"copyright",eikyou:"influence",hibiku:"to sound, to resonate"},Jo={xp:12,coins:2},zo="flashKanjiOnboardingCompleted.v3",Uo="flashKanjiOnboardingCompleted",Go="flashKanjiOnboardingAudience.v1",mp=850,qo=450,fp=420,Ho=["home","learn","review","dictionary","about","kanji","stats","achievements","eva-room","jlpt-lesson","textbooks"],ls=72,hp=96,Xo=1,Qo="N5",cs="map",Lt="lesson",sn="legacy",le="intro-kanji",An="review-due",In="n5-checkpoint",vp=[le,"n5-lesson-1","n5-lesson-2","n5-lesson-3","n5-lesson-4","n5-lesson-5","n5-lesson-6","n5-lesson-7","n5-lesson-8","n5-lesson-9","n5-lesson-10",In],wp={"n5-lesson-1":"data/textbooks/n5/lesson-1.json"},bp=new Set(["lesson-1","lesson-2","bulk-n5-01"]),kp=7e3,Wo=8e3,yp=new Set(["review","dictionary","kanji","stats","jlpt-lesson","textbooks"]),r={route:rp(),lessons:[],cards:[],i18n:null,dialogues:null,rewards:null,kanjiMeta:{},kanjiHints:{},kanjiTranslations:{},kanjiStrokes:{},kanjiPageSources:{},lessonTranslations:{},vocabulary:[],sentenceExercises:[],achievements:[],achievementCategories:[],jlptCatalog:{version:1,generatedAt:null,items:[]},jlptLessons:[],jlptPracticeLessons:[],n5Meta:null,n5Textbook:null,n5KanjiCatalog:[],n5Exercises:null,n5FinalTest:null,n4Meta:null,n4Textbook:null,n4KanjiCatalog:[],n4Grammar:[],n4Exercises:null,n4Reading:[],n4Listening:[],n4FinalTest:null,n5Reading:[],n3Meta:null,n3Textbook:null,n3KanjiCatalog:[],n3Grammar:[],n3Exercises:null,n3Reading:[],n3Listening:[],n3FinalTest:null,n2Meta:null,n2Textbook:null,n2KanjiCatalog:[],n2Grammar:[],n2Exercises:null,n2Reading:[],n2Listening:[],n2FinalTest:null,n1Meta:null,n1Reading:[],jlptReadingMarkdown:"",jlptReadingByLevel:{N5:[],N4:[],N3:[],N2:[],N1:[]},jlptReadingTranslations:{},monetization:null,customizationCatalog:{categories:[],items:[]},customization:null,evaBackgrounds:[],evaSprites:{},evaRoomDialogues:[],evaRoomLines:[],evaAutonomyLines:[],evaFisPersonality:null,evaPresence:null,evaRuntime:null,evaRoomShopOpen:!1,progress:null,activeLessonId:null,activeJlptLesson:Oo()||null,activeTextbookLevel:ap()||null,activeTextbookSubroute:ip()||null,activeLearnView:op(),activeLearnNodeId:lp()||null,activeLearnLegacyLessonId:cp()||null,learningPathLessonPayloads:{},activeCardId:null,activeExerciseReviewId:null,activeExerciseReviewLevel:"",activeExerciseReviewSource:"",activeExerciseReviewSelection:[],activeExerciseReviewChoice:"",activeExerciseReviewTranslationOpen:!1,reviewQueueLastKind:"",kanjiPageId:Do(),revealed:!1,detailCardId:null,rewardModal:null,rewardQueue:[],finalTestModal:null,finalTestBusy:!1,contactModal:!1,pwaInstallHelpVisible:!1,charts:[],filters:{query:"",jlpt:"all",strokes:"all",radical:"all",favorites:"all"},dictionaryVisibleCount:ls,shopFilters:{category:"all",view:"all",sort:"featured"},sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[]},readingExercises:{},reviewExerciseResults:{},readingCheck:{cardId:null,value:"",status:null,message:""},writingStep:0,activeLearnJlpt:"all",navMenu:null,pendingFocus:null,pwaInstallPrompt:Ca(),notificationPrompt:nr(),notificationPromptVisible:!1,deferredDataLoaded:!1,deferredDataLoading:!1};let cr=null,Ae=null,Vo="",ds=0,Yo=0,Ma=0,rn=0,Pa=!1,an=0,Ea=!1,on=0,dr=!1,ur=!1,pr=null,At=null,Zo=0,Da=0,Tn=0,us=0,Oa=null,te=null,Ie=null,pe=null,st=-1,Xe=!1,ae="step",rt=null,el=null,$p=null,jp=null,gr=null,ps=null;const mr=new Map;let Ka=0,Ba=0,Fa=Math.floor(Date.now()/6e4),tl=0,fr="",Ja=[];const za=new Map,ln=new Map,Ua=Date.now();typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const B={cardId:null,strokes:[],currentStroke:[],drawing:!1,activePointerId:null,completed:!1,demoAnimationId:0},ge=(e,t=document)=>t.querySelector(e),Ga=(e,t=document)=>Array.from(t.querySelectorAll(e)),cn=ge("#app"),nl=ge("#progressImport");document.addEventListener("click",tm),document.addEventListener("pointerdown",nm),document.addEventListener("input",Jl),document.addEventListener("change",Jl),document.addEventListener("keydown",im),window.flashKanjiFarmMoon=(e=5e3)=>zl(e),window.startFlashKanjiOnboarding=hi,nl.addEventListener("change",y$),window.addEventListener("beforeinstallprompt",Q$),window.addEventListener("appinstalled",Ro),window.addEventListener("scroll",wi,{passive:!0}),window.addEventListener("resize",wi),window.addEventListener("eva:event",e=>{e.detail?.handledByFlashKanji||gc(e.detail||{})}),document.addEventListener("visibilitychange",()=>{document.hidden||Aa("usage"),!document.hidden&&r.route==="eva-room"&&$s("return")&&(N(),j()),document.hidden&&ai()}),window.addEventListener("pagehide",ai),window.addEventListener("beforeunload",ai),window.addEventListener("hashchange",()=>{const e=rp(),t=Do(),n=e==="textbooks"?ap():null,s=e==="textbooks"?ip():null,a=e==="jlpt-lesson"?Oo():null,o=e==="learn"?op():cs,l=e==="learn"?lp():null,c=e==="learn"?cp():null;(e!==r.route||e==="kanji"&&t!==r.kanjiPageId||e==="textbooks"&&n!==r.activeTextbookLevel||e==="textbooks"&&s!==r.activeTextbookSubroute||e==="jlpt-lesson"&&a!==r.activeJlptLesson||e==="learn"&&o!==r.activeLearnView||e==="learn"&&l!==r.activeLearnNodeId||e==="learn"&&c!==r.activeLearnLegacyLessonId)&&(r.route=e,r.kanjiPageId=e==="kanji"?t:null,r.activeTextbookLevel=e==="textbooks"?n:null,r.activeTextbookSubroute=e==="textbooks"?s:null,r.activeJlptLesson=e==="jlpt-lesson"?a:r.activeJlptLesson,r.activeLearnView=e==="learn"?o:cs,r.activeLearnNodeId=e==="learn"?l:null,r.activeLearnLegacyLessonId=e==="learn"?c:null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.pendingFocus=null,e!=="eva-room"&&(r.evaRoomShopOpen=!1),gt(),Ar(),j(),Lp(e)&&rl(),e==="eva-room"&&de("room_opened"))}),Sp();async function Sp(){if(!await Tp()&&!await Ip()){sl(!0),cn.innerHTML.trim()?cn.setAttribute("aria-busy","true"):cn.innerHTML=J$(),r.progress=Ng(),ns(),jo(),K$(),So(),xt();try{const[e,t,n,s,a,o,l]=await Promise.all([al({initialOnly:!0}),Qe(K.i18n),Qe(K.dialogues),Qe(K.rewards,Np),Qe(K.achievements,()=>({achievements:[],categories:[]})),Qe(K.jlptCatalog,()=>({version:1,generatedAt:null,items:[]})),Qe(K.jlptLessons,()=>({items:[]}))]),c=gl(a,s.achievements||[]);r.lessons=e.lessons,r.cards=e.cards,r.i18n=t,r.dialogues=n,r.rewards=s,r.achievements=c.items,r.achievementCategories=c.categories,r.jlptCatalog=Gp(o),r.jlptLessons=Up(l),r.rewards.achievements=r.achievements,jr(),mm(),hr(),Ig(),xt(),Z$();const d=pm(r.progress);Vk(),gm(d),ey(),U(),N(),j(),Cp(),rl(),H$(),fi(),$f(),uf(),Yu(),Mo();try{sessionStorage.removeItem(Ra)}catch(u){console.warn("Could not clear boot recovery marker after successful startup.",u)}}catch(e){console.error(e),await q$(e)||(cn.innerHTML=z$(e))}finally{sl(!1)}}}function sl(e){const t=document.querySelector(".app-shell");t&&(e?t.setAttribute("data-booting","true"):t.removeAttribute("data-booting")),cn&&cn.setAttribute("aria-busy",e?"true":"false")}function qa(e,t){return!e||t&&document.getElementById(t)?Promise.resolve():new Promise((n,s)=>{const a=document.createElement("script");t&&(a.id=t),a.src=e,a.defer=!0,a.onload=()=>n(),a.onerror=()=>s(new Error(`Cannot load ${e}`)),document.head.appendChild(a)})}function Ha(e){return`${e}?v=${encodeURIComponent(Ct)}`}function Np(){return{version:1,dailyGoals:[10,20,50],levelCurve:{baseXp:100,growth:1.35},lessonUnlocks:{"lesson-1":1,"lesson-2":2,"lesson-3":3,"lesson-4":5,"lesson-5":8,"bulk-n5-01":3,"bulk-n5-02":4,"bulk-n5-03":4,"bulk-n5-04":5,"bulk-n4-01":5,"bulk-n4-02":6,"bulk-n4-03":6,"bulk-n4-04":7,"bulk-n4-05":7,"bulk-n4-06":8,"bulk-n4-07":8,"bulk-n4-08":9,"bulk-n3-01":9,"bulk-n3-02":10,"bulk-n3-03":10,"bulk-n3-04":11,"bulk-n3-05":11,"bulk-n3-06":12,"bulk-n3-07":12,"bulk-n3-08":13,"bulk-n3-09":13,"bulk-n3-10":14,"bulk-n3-11":14,"bulk-n3-12":15,"bulk-n3-13":15,"bulk-n3-14":16,"bulk-n3-15":16,"bulk-n3-16":17,"bulk-n3-17":17,"bulk-n3-18":18,"bulk-n3-19":18,"bulk-n2-01":19,"bulk-n2-02":19,"bulk-n2-03":20,"bulk-n2-04":20,"bulk-n2-05":21,"bulk-n2-06":21,"bulk-n2-07":22,"bulk-n2-08":22,"bulk-n2-09":23,"bulk-n2-10":23,"bulk-n2-11":24,"bulk-n2-12":24,"bulk-n2-13":25,"bulk-n2-14":25,"bulk-n2-15":26,"bulk-n2-16":26,"bulk-n2-17":27,"bulk-n2-18":27,"bulk-n2-19":28,"bulk-n1-01":28,"bulk-n1-02":29,"bulk-n1-03":29,"bulk-n1-04":30,"bulk-n1-05":30,"bulk-n1-06":31,"bulk-n1-07":31,"bulk-n1-08":32,"bulk-n1-09":32,"bulk-n1-10":33,"bulk-n1-11":33},rewards:{correctXp:10,lessonCompleteXp:50,comboXp:15,dailyBonusXp:20,sentencePracticeXp:12,correctCoins:1,lessonCompleteCoins:8,achievementCoins:20,dailyBonusCoins:5,sentencePracticeCoins:2,streakCoins:10},shop:[{id:"frame_moon",type:"profileFrame",name:{ru:"Лунная рамка",en:"Moon frame"},cost:80},{id:"theme_gold",type:"theme",name:{ru:"Золотой акцент",en:"Gold accent"},cost:120},{id:"background_midnight",type:"background",name:{ru:"Полуночный фон",en:"Midnight background"},cost:150}],achievements:[{id:"first_lesson",name:{ru:"Первый урок",en:"First lesson"},description:{ru:"Завершить первый урок.",en:"Complete the first lesson."},kind:"lessonComplete",target:1,xp:50,coins:20},{id:"hundred_correct",name:{ru:"100 правильных ответов",en:"100 correct answers"},description:{ru:"Достичь 100 правильных ответов.",en:"Reach 100 correct answers."},kind:"correct",target:100,xp:120,coins:40},{id:"ten_kanji_learned",name:{ru:"10 изученных кандзи",en:"10 kanji learned"},description:{ru:"Начать изучать 10 кандзи.",en:"Start learning 10 kanji."},kind:"learned",target:10,xp:80,coins:30},{id:"seven_day_streak",name:{ru:"7-дневная серия",en:"7-day streak"},description:{ru:"Поддерживать серию 7 дней.",en:"Keep a streak for 7 days."},kind:"streak",target:7,xp:100,coins:35},{id:"jlpt_n5_done",name:{ru:"JLPT N5 пройден",en:"JLPT N5 complete"},description:{ru:"Освоить все карточки N5.",en:"Master every N5 card."},kind:"jlpt",jlpt:"N5",target:1,xp:180,coins:60},{id:"hundred_reviews",name:{ru:"100 повторений",en:"100 reviews"},description:{ru:"Выполнить 100 повторений.",en:"Complete 100 reviews."},kind:"reviews",target:100,xp:150,coins:55}]}}function xp(){return window.Chart?Promise.resolve():(el||=qa(Ha("vendor/chart.umd.min.js"),"flash-kanji-chartjs"),el)}function Cp(){window.setTimeout(()=>{$p||=qa(Ha("src/audio/soundManager.js"),"flash-kanji-sound-manager").then(()=>{ns(),x$()}).catch(e=>console.warn("UX sound module failed to load.",e)),jp||=qa(Ha("src/effects/cyberHudEffect.js"),"flash-kanji-cyber-hud").catch(e=>console.warn("Cyber HUD module failed to load.",e))},450)}function Lp(e=r.route){return yp.has(e)}function rl(){const e=()=>{Ap().catch(t=>console.warn("Deferred app data failed to load.",t))};window.setTimeout(()=>{"requestIdleCallback"in window?window.requestIdleCallback(e,{timeout:1800}):e()},kp)}async function Ap({renderAfter:e=!0}={}){if(!r.deferredDataLoaded)return gr||(r.deferredDataLoading=!0,gr=(async()=>{const[t,n,s]=await Promise.all([al(),_p([["kanjiMeta",K.kanjiMeta],["kanjiHints",K.kanjiHints],["kanjiTranslations",K.kanjiTranslations],["kanjiStrokes",K.kanjiStrokes],["kanjiPageSources",K.kanjiPageSources],["lessonTranslations",K.lessonTranslations],["vocabulary",K.vocabulary],["sentences",K.sentences],["jlptPracticeLessons",K.jlptPracticeLessons],["n5Meta",K.n5Meta],["n5Lessons",K.n5Lessons],["n5Kanji",K.n5Kanji],["n5Exercises",K.n5Exercises],["n5FinalTest",K.n5FinalTest],["n4Meta",K.n4Meta],["n4Lessons",K.n4Lessons],["n4Kanji",K.n4Kanji],["n4Grammar",K.n4Grammar],["n4Exercises",K.n4Exercises],["n4Reading",K.n4Reading],["n4Listening",K.n4Listening],["n4FinalTest",K.n4FinalTest],["n3Meta",K.n3Meta],["n3Lessons",K.n3Lessons],["n3Kanji",K.n3Kanji],["n3Grammar",K.n3Grammar],["n3Exercises",K.n3Exercises],["n3Reading",K.n3Reading],["n3Listening",K.n3Listening],["n3FinalTest",K.n3FinalTest],["n2Meta",K.n2Meta],["n2Lessons",K.n2Lessons],["n2Kanji",K.n2Kanji],["n2Grammar",K.n2Grammar],["n2Exercises",K.n2Exercises],["n2Reading",K.n2Reading],["n2Listening",K.n2Listening],["n2FinalTest",K.n2FinalTest],["n1Meta",K.n1Meta],["n1Reading",K.n1Reading],["jlptReadingTranslations",K.jlptReadingTranslations],["n5Reading",K.n5Reading],["monetization",K.monetization]]),Mp(K.jlptReadingMarkdown)]),{kanjiMeta:a,kanjiHints:o,kanjiTranslations:l,kanjiStrokes:c,kanjiPageSources:d,lessonTranslations:u,vocabulary:m,sentences:g,jlptPracticeLessons:w,n5Meta:v,n5Lessons:$,n5Kanji:y,n5Exercises:x,n5FinalTest:b,n4Meta:k,n4Lessons:D,n4Kanji:R,n4Grammar:ar,n4Exercises:J,n4Reading:uj,n4Listening:pj,n4FinalTest:gj,n3Meta:mj,n3Lessons:fj,n3Kanji:hj,n3Grammar:vj,n3Exercises:wj,n3Reading:bj,n3Listening:kj,n3FinalTest:yj,n2Meta:$j,n2Lessons:jj,n2Kanji:Sj,n2Grammar:Nj,n2Exercises:xj,n2Reading:Cj,n2Listening:Lj,n2FinalTest:Aj,n1Meta:Ij,n1Reading:Tj,jlptReadingTranslations:Rj,n5Reading:_j,monetization:Mj}=n;r.lessons=t.lessons,r.cards=t.cards,r.jlptPracticeLessons=qp(w),r.jlptReadingMarkdown=s||"",r.jlptReadingByLevel=Pp(s||""),r.n5Meta=Hp(v),r.n5Textbook=ll($),r.n5KanjiCatalog=Xp(y),Qp(),r.n5Exercises=Wp(x),r.n5FinalTest=Vp(b),r.n5Reading=Sg(_j),r.n4Meta=Yp(k),r.n4Textbook=Zp(D),r.n4KanjiCatalog=eg(R),r.n4Grammar=ng(ar),r.n4Exercises=sg(J),r.n4Reading=cl(uj),r.n4Listening=cl(pj),r.n4FinalTest=rg(gj),tg(),r.n3Meta=ag(mj),r.n3Textbook=ig(fj),r.n3KanjiCatalog=og(hj),r.n3Grammar=cg(vj),r.n3Exercises=dg(wj),r.n3Reading=dl(bj),r.n3Listening=dl(kj),r.n3FinalTest=ug(yj),lg(),r.n2Meta=pg($j),r.n2Textbook=gg(jj),r.n2KanjiCatalog=mg(Sj),r.n2Grammar=hg(Nj),r.n2Exercises=vg(xj),r.n2Reading=ul(Cj),r.n2Listening=ul(Lj),r.n2FinalTest=wg(Aj),fg(),r.n1Meta=bg(Ij),r.n1Reading=yg(Tj,"N1"),r.kanjiMeta=a.items||{},r.kanjiHints=o.items||{},r.kanjiTranslations=l.items||{},r.kanjiStrokes=Bp(c),r.kanjiPageSources=d.items||{},r.lessonTranslations=u.items||{},r.vocabulary=m.items||[],r.sentenceExercises=g.items||[],r.jlptReadingTranslations=Op(Rj),r.monetization=Mj,r.deferredDataLoaded=!0,r.deferredDataLoading=!1,r.progress&&(jr(),U(),N()),e&&j()})().finally(()=>{r.deferredDataLoading=!1}),gr)}async function Ip(){try{const e=localStorage.getItem(or);if(localStorage.setItem(or,Ct),!e||e===Ct)return!1;if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistrations();await Promise.all(t.map(async n=>{await n.update().catch(()=>null)}))}return!1}catch(e){return console.warn("App cache version check failed.",e),!1}}async function Tp(){try{const e=localStorage.getItem(lr),t=localStorage.getItem("flashKanji.lastForcedBuild");return e==="done"&&t===Ct||(localStorage.setItem(lr,"done"),localStorage.setItem("flashKanji.lastForcedBuild",Ct)),!1}catch(e){return console.warn("Force cache reset failed.",e),!1}}async function al({initialOnly:e=!1}={}){const t=await Qe(K.lessons),n=Array.isArray(t?.lessons)?t.lessons:[],s=e?Rp(n):n,a=await il(s,async d=>{try{return{manifestLesson:d,payload:await Qe(d.file)}}catch(u){return console.warn(`Skipping lesson data: ${d?.file||"unknown lesson file"}`,u),null}},e?s.length:3),o=new Map(a.filter(Boolean).map(d=>[d.manifestLesson.id,d])),l=n.map(d=>{const u=o.get(d.id);if(!u)return{...d,file:d.file,items:[]};const{payload:m}=u;return{...d,...m.lesson,file:d.file,items:Array.isArray(m.items)?m.items.map(g=>Kp(g,m.lesson.id)):[]}}),c=l.flatMap(d=>d.items.map(u=>({...u,lessonTitle:d.title,lessonOrder:d.order})));return{lessons:l,cards:c}}function Rp(e){return e.filter((t,n)=>bp.has(t.id)||n<2)}async function _p(e,t=3){const n=await il(e,async([s,a])=>[s,await Qe(a)],t);return Object.fromEntries(n)}async function il(e,t,n=6){const s=[],a=Math.max(1,Number(n)||1);for(let o=0;o<e.length;o+=a){const l=e.slice(o,o+a);s.push(...await Promise.all(l.map(t))),o+a<e.length&&await new Promise(c=>window.setTimeout(c,0))}return s}async function Qe(e,t=null){const n=ol(e);let s=null;for(const a of n)try{const o=typeof AbortController<"u"?new AbortController:null,l=o?window.setTimeout(()=>o.abort(),Wo):0;try{const c=await fetch(a,{cache:"no-store",signal:o?.signal});if(!c.ok){s=new Error(`Cannot load ${a}`);continue}const d=await c.text();try{return JSON.parse(d)}catch(u){s=u,console.warn(`Invalid JSON from ${a}. Trying fallback paths.`,u)}}finally{l&&window.clearTimeout(l)}}catch(o){s=o}return console.warn(`Falling back to empty data for ${e}.`,s),typeof t=="function"?t(s):t!==null?t:{version:1,languages:["ru","en"],ui:{},items:[],lessons:[],lesson:{},achievements:[],categories:[]}}async function Mp(e,t=""){const n=ol(e);let s=null;for(const a of n)try{const o=typeof AbortController<"u"?new AbortController:null,l=o?window.setTimeout(()=>o.abort(),Wo):0;try{const c=await fetch(a,{cache:"no-store",signal:o?.signal});if(!c.ok){s=new Error(`Cannot load ${a}`);continue}return await c.text()}finally{l&&window.clearTimeout(l)}}catch(o){s=o}return console.warn(`Falling back to empty text for ${e}.`,s),typeof t=="function"?t(s):t}function Pp(e){const t=Object.fromEntries(be.map(m=>[m,[]])),n=String(e||"").split(/\r?\n/);let s=null,a=null,o="idle",l=[],c=[];const d=()=>{!a||!s||(a.text=Ep(l.join(`
`)),a.questions=c.map(m=>m.trim()).filter(Boolean),t[s].push(a),a=null,l=[],c=[],o="idle")},u=m=>{const g=String(m||"").trim().toLowerCase();return g==="жанр"||g==="genre"?"genre":g==="опора"||g==="source"||g==="basis"?"source":g==="цель"||g==="goal"?"goal":g};for(const m of n){const g=String(m??""),w=g.trim(),v=w.match(/^#\s*JLPT\s*(N[1-5])\b/i);if(v){d(),s=v[1].toUpperCase();continue}const $=w.match(/^##\s*(N[1-5])\s*(.+)$/i);if($){d(),s=$[1].toUpperCase(),a={id:`${s.toLowerCase()}-reading-${String((t[s]||[]).length+1).padStart(2,"0")}`,level:s,title:Dp($[2]),genre:"",source:"",goal:"",text:"",questions:[]},o="meta";continue}if(/^#{1,2}(?!#)\s+/.test(w)&&!v&&!$){d(),s=null;continue}if(!a)continue;if(/^###\s*Проверочные вопросы/i.test(w)){o="questions";continue}if(o==="code"){/^```/.test(w)?o="body":l.push(g);continue}if(/^```/.test(w)){o="code";continue}if(o==="questions"){const x=w.match(/^[-*]\s+(.*)$/),b=w.match(/^\d+\.\s+(.*)$/);if(x){c.push(x[1]);continue}if(b){c.push(b[1]);continue}if(!w||/^---+$/.test(w))continue;c.push(w);continue}const y=w.match(/^\*\*(Жанр|Опора|Цель|Genre|Source|Goal)\:\*\*\s*(.*)$/i);if(y){const x=u(y[1]);a[x]=y[2].trim()}}return d(),t}function Ep(e){return String(e||"").replace(/^\s*\n+/,"").replace(/\n+\s*$/,"")}function Dp(e){return String(e||"").replace(/^[\s\-–—::]+/u,"").trim()}function Op(e){const t=e&&typeof e=="object"&&!Array.isArray(e)?e.items&&typeof e.items=="object"&&!Array.isArray(e.items)?e.items:e:{},n={};return Object.entries(t||{}).forEach(([s,a])=>{!s||!a||typeof a!="object"||(n[String(s)]={titleRu:String(a.titleRu||a.ruTitle||a.title_ru||"").trim(),titleEn:String(a.titleEn||a.enTitle||a.title_en||"").trim(),ru:String(a.ru||a.translationRu||a.translation_ru||"").trim(),en:String(a.en||a.translationEn||a.translation_en||"").trim()})}),n}function ol(e){const t=String(e||"").trim();if(!t)return[t];if(/^https?:\/\//i.test(t)||t.startsWith("file:"))return[t];const n=t.replace(/^\.\/+/,"").replace(/^\.\.\/+/,"").replace(/^\/+/,""),s=[t,`./${n}`,`../${n}`,`index/${n}`,`/index/${n}`,`/${n}`];return[...new Set(s.filter(Boolean))]}function Kp(e,t){return{...e,id:String(e.id),lessonId:t,examples:Array.isArray(e.examples)?e.examples:[],apps:Array.isArray(e.apps)?e.apps:[],stroke_order:Array.isArray(e.stroke_order)?e.stroke_order:[]}}function Bp(e){const t=e?.items&&typeof e.items=="object"?e.items:{};return Object.fromEntries(Object.entries(t).map(([n,s])=>{const a=Array.isArray(s?.strokeOrder)?s.strokeOrder.filter(o=>typeof o?.path=="string"&&o.path.trim()):[];return a.length?[n,{...s,kanji:s.kanji||n,strokes:Number(s.strokes||a.length),viewBox:s.viewBox||"0 0 109 109",strokeOrder:a}]:null}).filter(Boolean))}function dn(){return{owned:[],selected:{background:"bg_study_hub",outfit:"outfit_default_assassin",theme:"theme_default_dark",decoration:null,frame:null,effect:null},seen:[],updatedAt:new Date().toISOString()}}function Fp(){try{const e=localStorage.getItem(we);if(!e)return dn();const t=JSON.parse(e),n=dn();return{owned:Array.isArray(t.owned)?t.owned.map(String):n.owned,selected:{...n.selected,...t&&t.selected||{}},seen:Array.isArray(t.seen)?t.seen.map(String):n.seen,updatedAt:t.updatedAt||n.updatedAt}}catch(e){return console.warn("Customization storage failed.",e),dn()}}function Rn(){if(!r.customization)return!1;if(dr)return!0;dr=!0;const e=()=>{on=0,dr=!1,r.customization.updatedAt=new Date().toISOString();try{localStorage.setItem(we,JSON.stringify(r.customization))}catch(t){console.warn("Customization save failed.",t)}};return"requestIdleCallback"in window?on=window.requestIdleCallback(e,{timeout:1200}):on=window.setTimeout(e,160),!0}function Jp(){if(!r.customization)return!1;dr=!1,on&&("cancelIdleCallback"in window?window.cancelIdleCallback(on):window.clearTimeout(on),on=0),r.customization.updatedAt=new Date().toISOString();try{return localStorage.setItem(we,JSON.stringify(r.customization)),!0}catch(e){return console.warn("Customization save failed.",e),!1}}function hr(){const e=Fp(),t=new Set;(e.owned||[]).forEach(s=>{const a=ne(s)||un(s);a&&t.add(a.id)}),Oe().forEach(s=>{(s.defaultOwned||s.price===0)&&t.add(s.id)}),(r.progress.unlockedBackgrounds||[]).forEach(s=>{const a=ne(s)||un(s);a&&t.add(a.id)}),(r.progress.unlockedEvaSprites||[]).forEach(s=>{const a=pn(s);a&&t.add(a.id),r.progress.shop?.owned?.includes(`eva_sprite:${s}`)&&a&&t.add(a.id)}),(r.progress.shop?.owned||[]).forEach(s=>{const a=String(s),o=ne(a)||un(a);if(o&&t.add(o.id),!o&&a.startsWith("eva_sprite:")){const l=pn(a.replace("eva_sprite:",""));l&&t.add(l.id)}});const n=zp({...dn().selected,...e.selected||{}});r.progress.selectedEvaRoomBackground&&(n.background=ht(r.progress.selectedEvaRoomBackground)),r.progress.selectedEvaSprite&&(n.outfit=pn(r.progress.selectedEvaSprite)?.id||n.outfit),t.has(n.background)||(n.background="bg_study_hub"),t.has(n.outfit)||(n.outfit="outfit_default_assassin"),t.has(n.theme)||(n.theme="theme_default_dark"),n.decoration&&!t.has(n.decoration)&&(n.decoration=null),n.effect&&!t.has(n.effect)&&(n.effect=null),r.customization={owned:[...t],selected:n,seen:[...new Set([...e.seen||[],...t])],updatedAt:e.updatedAt||new Date().toISOString()},gs(),Rn()}function gs(){if(!r.customization||!r.progress)return;Y();const e=r.customization.selected||{};e.background&&(r.progress.selectedEvaRoomBackground=e.background);const t=ne(e.outfit);t?.spriteId&&(r.progress.selectedEvaSprite=t.spriteId),r.progress.unlockedBackgrounds=[...new Set([...r.progress.unlockedBackgrounds||[],...r.customization.owned.filter(n=>ne(n)?.type==="background")])],r.progress.unlockedEvaSprites=[...new Set([...r.progress.unlockedEvaSprites||[],...r.customization.owned.map(n=>ne(n)).filter(n=>n?.type==="outfit"&&n.spriteId).map(n=>n.spriteId)])],r.progress.shop||={owned:[],equipped:{}},r.progress.shop.owned=[...new Set([...r.progress.shop.owned||[],...r.customization.owned,...r.progress.unlockedEvaSprites.map(n=>`eva_sprite:${n}`)])],r.progress.shop.equipped={...r.progress.shop.equipped||{},background:e.background||null,outfit:e.outfit||null,theme:e.theme||null,decoration:e.decoration||e.frame||null,effect:e.effect||null}}function Oe(){return r.customizationCatalog?.items||[]}function ne(e){return Oe().find(t=>t.id===e)||null}function un(e){const t=String(e||"");return t&&Oe().find(n=>Array.isArray(n.legacyIds)&&n.legacyIds.map(String).includes(t))||null}function ht(e){return(ne(e)||un(e))?.id||e||null}function zp(e={}){return{background:ht(e.background),outfit:ht(e.outfit),theme:ht(e.theme),decoration:ht(e.decoration||e.frame),effect:ht(e.effect)}}function pn(e){const t=String(e||"");if(!t)return null;const n=`eva_sprite:${t}`;return Oe().find(s=>s.type!=="outfit"?!1:s.spriteId===t||s.legacySpriteId===t?!0:Array.isArray(s.legacyIds)&&s.legacyIds.map(String).includes(n))||null}function Up(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),title:n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},summary:n.summary||{ru:"",en:""},goals:Array.isArray(n.goals)?n.goals:[],sections:Array.isArray(n.sections)?n.sections:[],practice:Array.isArray(n.practice)?n.practice:[],checkpoint:Array.isArray(n.checkpoint)?n.checkpoint:[]})).filter(n=>n.jlpt)}function Gp(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[];return{version:Number(e?.version||1),generatedAt:e?.generatedAt||null,items:t.map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),slug:String(n.slug||String(n.jlpt||"").toLowerCase()),title:n.title||{ru:n.displayTitle?.ru||n.jlpt||"JLPT",en:n.displayTitle?.en||n.jlpt||"JLPT"},displayTitle:n.displayTitle||n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},description:n.description||{ru:"",en:""},goal:n.goal||{ru:"",en:""},recommendedCycle:n.recommendedCycle||{ru:"",en:""},previousLevels:Array.isArray(n.previousLevels)?n.previousLevels:[],nextLevels:Array.isArray(n.nextLevels)?n.nextLevels:[],lessonIds:Array.isArray(n.lessonIds)?n.lessonIds:[],files:n.files||{},lessonCount:Number(n.lessonCount||0),kanjiCount:Number(n.kanjiCount||0),cardCount:Number(n.cardCount||0)})).filter(n=>n.jlpt).sort((n,s)=>be.indexOf(n.jlpt)-be.indexOf(s.jlpt))}}function qp(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),apps:Array.isArray(n.apps)?n.apps:[],kana:n.kana||{hiragana:[],katakana:[]},kanjiFocus:Array.isArray(n.kanjiFocus)?n.kanjiFocus:[],drills:Array.isArray(n.drills)?n.drills:[],sources:Array.isArray(n.sources)?n.sources:[]})).filter(n=>n.jlpt)}function Hp(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"JLPT N5",en:"JLPT N5"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||80),lessonCount:Number(e?.lessonCount||10),kanjiPerLesson:Number(e?.kanjiPerLesson||8),pdfUrl:e?.pdfUrl||"docs/flashkanji_N5_expanded_textbook.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],rewards:{addToSrsXp:4,knowXp:6,hardXp:2,exerciseXp:7,exerciseMoon:1,lessonCompleteXp:45,lessonCompleteMoon:6,finalTestXp:120,finalTestMoon:20,...e?.rewards||{}}}}function ll(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N5",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n5-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30]})).filter(n=>n.kanji.length)}}function Xp(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),lessonId:n.lessonId||n.lesson_id||null,kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:[],jlpt:"N5"})).filter(n=>n.kanji)}function Qp(){if(!Array.isArray(r.n5KanjiCatalog)||!r.n5KanjiCatalog.length)return;const e=new Map(r.n5KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);if(!s)return n;const a=String(n.jlpt||s.jlpt||"").toUpperCase();return a&&a!=="N5"?n:(t.add(s.kanji),vr(n,s))}),r.n5KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(vr({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId||null,jlpt:"N5",examples:[],source:"n5-catalog"},n)),t.add(n.kanji))})}function vr(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:q(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,jlpt:"N5",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:q(s(n.onyomi)||e.onyomi||""),kunyomi:q(s(n.kunyomi)||e.kunyomi||""),hiragana:q((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n5Detail:t}}function Wp(e){return{version:Number(e?.version||1),level:"N5",types:Array.isArray(e?.types)?e.types:[],lessonQuestionCount:Number(e?.lessonQuestionCount||6),reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Vp(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"Финальный тест JLPT N5",en:"JLPT N5 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||24),passingPercent:Number(e?.passingPercent||80),types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","srs"],rewards:{completeXp:120,completeMoon:20,passXp:80,passMoon:12,...e?.rewards||{}}}}function Yp(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"JLPT N4",en:"JLPT N4"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||170),lessonCount:Number(e?.lessonCount||17),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||48),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N4_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:5,knowXp:7,hardXp:2,exerciseXp:9,exerciseMoon:1,grammarXp:10,grammarMoon:1,lessonCompleteXp:65,lessonCompleteMoon:8,readingXp:35,readingMoon:4,listeningXp:30,listeningMoon:3,finalTestXp:180,finalTestMoon:35,...e?.rewards||{}}}}function Zp(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N4",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n4-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45]})).filter(n=>n.kanji.length)}}function eg(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N4",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function tg(){if(!Array.isArray(r.n4KanjiCatalog)||!r.n4KanjiCatalog.length)return;const e=new Map(r.n4KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N4"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),wr(n,s))}),r.n4KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(wr({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[],source:"n4-catalog"},n)),t.add(n.kanji))})}function wr(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:q(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N4",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:q(s(n.onyomi)||e.onyomi||""),kunyomi:q(s(n.kunyomi)||e.kunyomi||""),hiragana:q((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n4Detail:t}}function ng(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-grammar-${String(s+1).padStart(2,"0")}`),level:"N4",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function sg(e){return{version:Number(e?.version||1),level:"N4",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function cl(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function rg(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"Финальный тест JLPT N4",en:"JLPT N4 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||32),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||180),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||35),passXp:Number(e?.rewards?.passXp||90),passMoon:Number(e?.rewards?.passMoon||15)}}}function ag(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"JLPT N3",en:"JLPT N3"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||370),lessonCount:Number(e?.lessonCount||37),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||80),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N3_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:6,knowXp:8,hardXp:2,exerciseXp:10,exerciseMoon:1,grammarXp:11,grammarMoon:1,lessonCompleteXp:75,lessonCompleteMoon:9,readingXp:38,readingMoon:4,listeningXp:34,listeningMoon:4,finalTestXp:220,finalTestMoon:40,...e?.rewards||{}}}}function ig(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N3",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n3-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45,60]})).filter(n=>n.kanji.length)}}function og(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N3",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function lg(){if(!Array.isArray(r.n3KanjiCatalog)||!r.n3KanjiCatalog.length)return;const e=new Map(r.n3KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N3"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),br(n,s))}),r.n3KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(br({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[],source:"n3-catalog"},n)),t.add(n.kanji))})}function br(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:q(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N3",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:q(s(n.onyomi)||e.onyomi||""),kunyomi:q(s(n.kunyomi)||e.kunyomi||""),hiragana:q((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n3Detail:t}}function cg(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-grammar-${String(s+1).padStart(2,"0")}`),level:"N3",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function dg(e){return{version:Number(e?.version||1),level:"N3",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function dl(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function ug(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"Финальный тест JLPT N3",en:"JLPT N3 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||220),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||40),passXp:Number(e?.rewards?.passXp||110),passMoon:Number(e?.rewards?.passMoon||18)}}}function pg(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"JLPT N2",en:"JLPT N2"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||380),lessonCount:Number(e?.lessonCount||38),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||120),readingCount:Number(e?.readingCount||46),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N2_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function gg(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N2",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n2-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function mg(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N2",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function fg(){if(!Array.isArray(r.n2KanjiCatalog)||!r.n2KanjiCatalog.length)return;const e=new Map(r.n2KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N2"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),kr(n,s))}),r.n2KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(kr({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[],source:"n2-catalog"},n)),t.add(n.kanji))})}function kr(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:q(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N2",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:q(s(n.onyomi)||e.onyomi||""),kunyomi:q(s(n.kunyomi)||e.kunyomi||""),hiragana:q((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n2Detail:t}}function hg(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-grammar-${String(s+1).padStart(2,"0")}`),level:"N2",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function vg(e){return{version:Number(e?.version||1),level:"N2",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function ul(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function wg(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"Финальный тест JLPT N2",en:"JLPT N2 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||260),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||48),passXp:Number(e?.rewards?.passXp||130),passMoon:Number(e?.rewards?.passMoon||20)}}}function bg(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"JLPT N1",en:"JLPT N1"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},lessonCount:Number(e?.lessonCount||0),kanjiCount:Number(e?.kanjiCount||0),readingCount:Number(e?.readingCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N1_textbook_flashkanji_space.pdf",rewards:{addToSrsXp:Number(e?.rewards?.addToSrsXp||8),knowXp:Number(e?.rewards?.knowXp||11),hardXp:Number(e?.rewards?.hardXp||2),exerciseXp:Number(e?.rewards?.exerciseXp||13),exerciseMoon:Number(e?.rewards?.exerciseMoon||1),readingXp:Number(e?.rewards?.readingXp||55),readingMoon:Number(e?.rewards?.readingMoon||5),finalTestXp:Number(e?.rewards?.finalTestXp||320),finalTestMoon:Number(e?.rewards?.finalTestMoon||60)}}}function pl(e){return Array.isArray(e)?e.map(t=>({value:String(t?.value||t?.id||""),label:t?.label||t?.title||t?.text||{ru:String(t?.labelRu||t?.ru||t?.value||""),en:String(t?.labelEn||t?.en||t?.value||"")}})).filter(t=>t.value):[]}function kg(e,t,n){return{id:String(e?.id||`${t.id}-q${n+1}`),prompt:e?.prompt||{ru:"",en:""},answer:String(e?.answer||""),options:pl(e?.options)}}function yg(e,t=""){const n=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[],s=String(t||e?.level||"").toUpperCase();return n.map((a,o)=>{const l=String(a.id||`${s.toLowerCase()||"reading"}-${o+1}`);return{...a,level:String(a.level||s||"").toUpperCase(),id:l,title:a.title||{ru:a.id||"",en:a.id||""},jp:String(a.jp||""),reading:String(a.reading||""),ru:String(a.ru||""),en:String(a.en||""),source:String(a.source||""),questions:Array.isArray(a.questions)?a.questions.map((c,d)=>kg(c,{id:l},d)):[]}}).filter(a=>a.id)}function $g(e){return Array.isArray(e)?e.map(t=>({answer:Array.isArray(t?.answer)?t.answer.map(String).filter(Boolean):[],reading:Array.isArray(t?.reading)?t.reading.map(n=>q(n)):[]})):[]}function jg(e,t){const n=Array.isArray(t)?t.flatMap(s=>Array.isArray(s?.answer)?s.answer.map((a,o)=>({kanji:String(a||""),reading:String(s?.reading?.[o]||"")})):[]):[];return[...Array.isArray(e)?e:[],...n].map(s=>({kanji:String(s?.kanji||""),reading:String(s?.reading||"")})).filter(s=>s.kanji).filter((s,a,o)=>o.findIndex(l=>l.kanji===s.kanji&&l.reading===s.reading)===a)}function Sg(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[],n=t.find(a=>String(a?.kind||"").toLowerCase()==="sentences")||t[0]||null;return(Array.isArray(n?.items)?n.items:[]).map((a,o)=>({id:String(a.id||`${String(n?.id||"reading-n5-sentence")}-${o+1}`),level:String(a.jlpt||n?.level||"N5").toUpperCase(),kind:"cloze",sourceKind:"sentences",sourceId:String(n?.id||"reading-n5-sentences"),sourceTitle:n?.title||{ru:"Предложения",en:"Sentences"},title:{ru:"Предложение",en:"Sentence"},sentence:String(a.sentence||""),reading:q(a.reading||""),translationRu:String(a.translationRu||a.translation_ru||a.ru||""),translationEn:String(a.translationEn||a.translation_en||a.en||""),blanks:$g(a.blanks),tiles:jg(a.tiles,a.blanks),source:"reading"})).filter(a=>a.id)}function gl(e,t=[]){const n=Array.isArray(e?.achievements)&&e.achievements.length?e.achievements:t,s=Array.isArray(e?.categories)?e.categories.map(l=>({id:String(l.id),title:l.title||{ru:l.id,en:l.id},icon:l.icon||"moon"})):[],a=n.map(l=>Xa(l)),o=new Set(s.map(l=>l.id));return a.forEach(l=>{o.has(l.category)||(o.add(l.category),s.push({id:l.category,title:{ru:l.category,en:l.category},icon:l.icon||"moon"}))}),{categories:s,items:a}}function Xa(e){const t=Number(e.rewardXp??e.xp??0),n=Number(e.rewardFragments??e.coins??0);return{...e,id:String(e.id),category:e.category||e.kind||"learning",title:e.title||e.name||{ru:e.id,en:e.id},description:e.description||{ru:"",en:""},icon:e.icon||"moon",kind:e.kind||"learned",target:Number(e.target||1),rewardXp:t,rewardFragments:n,unlocked:!!e.unlocked,secret:!!e.secret}}function ml(){return[navigator.language,...navigator.languages||[]].filter(Boolean).map(t=>String(t).toLowerCase()).some(t=>t==="ru"||t.startsWith("ru-")||t==="be"||t.startsWith("be-"))?"ru":"en"}function ms(){const e=ml();return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),settings:{theme:"dark",themeManuallySelected:!1,sound:!0,uxSound:!0,uxVolume:.75,language:e,languageAutoDetected:!0,languageManuallySelected:!1,dailyGoal:10},xp:0,level:1,moonFragments:0,totalCorrect:0,totalWrong:0,correctCombo:0,bestCorrectCombo:0,appOpens:0,totalMoonFragmentsEarned:0,cards:{},seenCards:{},seenKanji:{},daily:{},favorites:{},transactions:[],streakHistory:[],streak:{current:0,best:0,lastStudyDate:null,pendingReward:null},visits:{firstVisitDate:null,lastVisitDate:null,lastDailyBonusDate:null,streak:0,bestStreak:0},lessonCompletions:{},achievements:{},dailyBonuses:{},dailyBonusPending:null,lastOpenedJlptLesson:null,lastOpenedJlptLessons:{},viewedReadingLevels:{},writingPractice:{completed:0,cards:{}},secrets:{evaClicks:0,nightVisit:!1},learningPath:Wa(),jlptLessonStudy:Va(),sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[],completed:{},attempts:0,recentIds:[],recentAnswers:[],custom:[],customSentences:[],customEditingId:null,customDraft:{jp:"",hiragana:"",ru:"",en:""},customMessage:"",customStatus:""},jlptLessonPractice:{activeIds:{},selected:{},checked:{},results:{},completed:{}},readingExercises:{},n5Course:Za(),n4Course:ei(),n3Course:ti(),n2Course:ni(),unlockedJlptLevels:be.slice(),unlockedBackgrounds:["bg_study_hub"],selectedEvaRoomBackground:"bg_study_hub",unlockedEvaSprites:["idle","default"],selectedEvaSprite:"idle",evaRoomDialogueProgress:{currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]},evaRoomQuiz:{answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]},evaAutonomy:Ll(),evaRelationship:si(),shop:{owned:[],equipped:{}}}}function Ng(){const e=ms();try{const t=localStorage.getItem(xn)||localStorage.getItem(os);if(!t)return e;const n=JSON.parse(t);return fl(e,n.progress||n)}catch(t){return console.warn("Progress reset because stored JSON is invalid.",t),e}}function fl(e,t){return{...e,...t,version:3,settings:xg(e.settings,t.settings||{}),cards:{...e.cards,...t.cards||{}},seenCards:{...e.seenCards,...t.seenCards||{}},seenKanji:{...e.seenKanji,...t.seenKanji||{}},daily:{...e.daily,...t.daily||{}},favorites:{...e.favorites,...t.favorites||{}},transactions:Array.isArray(t.transactions)?t.transactions:e.transactions,streakHistory:Array.isArray(t.streakHistory)?t.streakHistory:e.streakHistory,streak:Lg(e.streak,t.streak||{}),visits:{...e.visits,...t.visits||{}},lessonCompletions:{...e.lessonCompletions,...t.lessonCompletions||{}},achievements:{...e.achievements,...t.achievements||{}},dailyBonuses:{...e.dailyBonuses,...t.dailyBonuses||{}},dailyBonusPending:yr(t.dailyBonusPending||null),lastOpenedJlptLesson:xe(t.lastOpenedJlptLesson||null),lastOpenedJlptLessons:s$(t.lastOpenedJlptLessons||{}),viewedReadingLevels:es(t.viewedReadingLevels||{}),appOpens:Number(t.appOpens||e.appOpens),totalMoonFragmentsEarned:Number(t.totalMoonFragmentsEarned||e.totalMoonFragmentsEarned),writingPractice:{...e.writingPractice,...t.writingPractice||{}},secrets:{...e.secrets,...t.secrets||{}},learningPath:yl(e.learningPath,t.learningPath||{}),jlptLessonStudy:kl(e.jlptLessonStudy,t.jlptLessonStudy||{}),sentencePractice:xl(e.sentencePractice,t.sentencePractice||{}),jlptLessonPractice:Cl(e.jlptLessonPractice,t.jlptLessonPractice||{}),readingExercises:{...e.readingExercises,...t.readingExercises||{}},n5Course:$l(e.n5Course,t.n5Course||{}),n4Course:jl(e.n4Course,t.n4Course||{}),n3Course:Sl(e.n3Course,t.n3Course||{}),n2Course:Nl(e.n2Course,t.n2Course||{}),unlockedJlptLevels:[...new Set([...Array.isArray(e.unlockedJlptLevels)?e.unlockedJlptLevels:[],...Array.isArray(t.unlockedJlptLevels)?t.unlockedJlptLevels:[],...be])],unlockedBackgrounds:[...new Set([...e.unlockedBackgrounds||[],...t.unlockedBackgrounds||[]])],selectedEvaRoomBackground:t.selectedEvaRoomBackground||e.selectedEvaRoomBackground,unlockedEvaSprites:[...new Set([...e.unlockedEvaSprites||[],...t.unlockedEvaSprites||[],...(t.shop&&t.shop.owned||[]).filter(n=>String(n).startsWith("eva_sprite:")).map(n=>String(n).replace("eva_sprite:",""))])],selectedEvaSprite:t.selectedEvaSprite||e.selectedEvaSprite,evaRoomDialogueProgress:{...e.evaRoomDialogueProgress,...t.evaRoomDialogueProgress||{},rewardsClaimed:{...e.evaRoomDialogueProgress.rewardsClaimed,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.rewardsClaimed||{}},visited:{...e.evaRoomDialogueProgress.visited,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.visited||{}},lineHistory:Array.isArray(t.evaRoomDialogueProgress?.lineHistory)?t.evaRoomDialogueProgress.lineHistory:e.evaRoomDialogueProgress.lineHistory||[]},evaRoomQuiz:{...e.evaRoomQuiz,...t.evaRoomQuiz||{},rewarded:{...e.evaRoomQuiz.rewarded,...t.evaRoomQuiz&&t.evaRoomQuiz.rewarded||{}},history:Array.isArray(t.evaRoomQuiz?.history)?t.evaRoomQuiz.history.slice(0,40):e.evaRoomQuiz.history},evaAutonomy:Il(e.evaAutonomy,t.evaAutonomy||{}),evaRelationship:Al(e.evaRelationship,t.evaRelationship||{}),shop:{owned:[...new Set([...e.shop.owned||[],...t.shop&&t.shop.owned||[]])],equipped:{...e.shop.equipped,...t.shop&&t.shop.equipped||{}}}}}function xg(e,t){const n={...e,...t||{}};return n.theme=Cg(n.theme,e.theme||"dark"),n.themeManuallySelected=It(n.themeManuallySelected,e.themeManuallySelected===!0),n.themeManuallySelected||(n.theme="dark"),n.sound=It(n.sound,e.sound!==!1),n.uxSound=n.sound!==!1,n.languageAutoDetected=It(n.languageAutoDetected,e.languageAutoDetected!==!1),n.languageManuallySelected=It(n.languageManuallySelected,e.languageManuallySelected===!0),n}function Cg(e,t="dark"){return e==="light"||e==="dark"?e:t}function Lg(e,t){const n={...e,...t||{}};return n.current=Qa(n.current,e.current||0),n.best=Qa(n.best,e.best||0),n.lastStudyDate=n.lastStudyDate||null,n.pendingReward=hl(n.pendingReward),n}function hl(e){if(!e||typeof e!="object")return null;const t=Qa(e.milestone,0),n=typeof e.availableOn=="string"?e.availableOn:"";return!t||!n?null:{milestone:t,availableOn:n}}function yr(e){if(!e||typeof e!="object")return null;const t=typeof e.availableOn=="string"?e.availableOn:"";return t?{availableOn:t}:null}function It(e,t=!0){if(typeof e=="boolean")return e;if(typeof e=="number")return e!==0;if(typeof e=="string"){const n=e.trim().toLowerCase();if(["false","0","off","no","disabled"].includes(n))return!1;if(["true","1","on","yes","enabled"].includes(n))return!0}return t}function Qa(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function Wa(){return{version:Xo,currentLevel:Qo,currentNodeId:le,completedNodes:{},unlockedNodes:{[le]:!0},activeSession:null,resultHistory:{},lastUpdatedAt:null}}function Va(){return{activeSessionKey:null,sessions:{},lastUpdatedAt:null}}function vl(){return{level:"",lessonId:"",currentIndex:0,answers:{},phase:"study",startedAt:null,updatedAt:null,completedAt:null,testOpenedAt:null}}function wl(e){const t=String(e||"").toLowerCase();return["study","test","done"].includes(t)?t:"study"}function bl(e,t){const n=vl(),s=t&&typeof t=="object"?t:{},a={...e?.answers||n.answers,...s.answers||{}};return{...n,...e||{},...s,level:String(s.level||e?.level||n.level||"").toUpperCase(),lessonId:String(s.lessonId||e?.lessonId||n.lessonId||""),currentIndex:Math.max(0,Number(s.currentIndex??e?.currentIndex??n.currentIndex??0)),answers:a,phase:wl(s.phase||e?.phase||n.phase),startedAt:s.startedAt||e?.startedAt||n.startedAt||null,updatedAt:s.updatedAt||e?.updatedAt||n.updatedAt||null,completedAt:s.completedAt||e?.completedAt||n.completedAt||null,testOpenedAt:s.testOpenedAt||e?.testOpenedAt||n.testOpenedAt||null}}function kl(e,t){const n=Va(),s=t&&typeof t=="object"?t:{},a={},o=e?.sessions||{},l=s.sessions||{};return Object.keys(o).forEach(c=>{a[c]=bl(o[c],l[c])}),Object.keys(l).forEach(c=>{a[c]||(a[c]=bl(null,l[c]))}),{...n,...e||{},...s||{},sessions:a,activeSessionKey:s.activeSessionKey||e?.activeSessionKey||n.activeSessionKey||null,lastUpdatedAt:s.lastUpdatedAt||e?.lastUpdatedAt||n.lastUpdatedAt||null}}function yl(e,t){return{...e,...t||{},version:Xo,currentLevel:String(t?.currentLevel||e.currentLevel||Qo).toUpperCase(),currentNodeId:String(t?.currentNodeId||e.currentNodeId||le),completedNodes:{...e.completedNodes,...t?.completedNodes||{}},unlockedNodes:{...e.unlockedNodes,...t?.unlockedNodes||{}},activeSession:Ya(t?.activeSession||e.activeSession||null),resultHistory:{...e.resultHistory,...t?.resultHistory||{}},lastUpdatedAt:t?.lastUpdatedAt||e.lastUpdatedAt||null}}function Ya(e){return!e||typeof e!="object"?null:{nodeId:String(e.nodeId||""),mode:String(e.mode||Lt),stepIndex:Math.max(0,Number(e.stepIndex||0)),answers:{...e.answers||{}},mistakes:Array.isArray(e.mistakes)?e.mistakes.slice(0,80):[],reviewStepIds:Array.isArray(e.reviewStepIds)?e.reviewStepIds.map(String).filter(Boolean).slice(0,80):[],score:Number(e.score||0),startedAt:e.startedAt||new Date().toISOString(),updatedAt:e.updatedAt||new Date().toISOString()}}function Za(){return{currentLessonId:"n5-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0,correctAnswers:0,incorrectAnswers:0,unansweredAnswers:0,totalQuestions:0,mistakeQuestionIds:[],bestScore:0,lastScore:0,passedAt:null,lastRewardXp:0,lastRewardMoon:0},customSentences:[]}}function $l(e,t){return{...e,...t||{},currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:es(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:oa(e.exerciseSrs,t?.exerciseSrs||{},"N5"),writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function ei(){return{opened:!1,currentLessonId:"n4-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function jl(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:es(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:oa(e.exerciseSrs,t?.exerciseSrs||{},"N4"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function ti(){return{opened:!1,currentLessonId:"n3-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Sl(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:es(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:oa(e.exerciseSrs,t?.exerciseSrs||{},"N3"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function ni(){return{opened:!1,currentLessonId:"n2-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Nl(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:es(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:oa(e.exerciseSrs,t?.exerciseSrs||{},"N2"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function xl(e,t){return{...e,...t,selected:Array.isArray(t.selected)?t.selected:e.selected,tileKeys:Array.isArray(t.tileKeys)?t.tileKeys:e.tileKeys,recentIds:Array.isArray(t.recentIds)?t.recentIds:e.recentIds,recentAnswers:Array.isArray(t.recentAnswers)?t.recentAnswers:e.recentAnswers,completed:{...e.completed,...t.completed||{}},custom:Array.isArray(t.custom)?t.custom.slice(0,80):e.custom,customSentences:Ag(t.customSentences,t.custom),customEditingId:typeof t.customEditingId=="string"?t.customEditingId:null,customDraft:$r(t.customDraft||e.customDraft),customMessage:typeof t.customMessage=="string"?t.customMessage:e.customMessage,customStatus:typeof t.customStatus=="string"?t.customStatus:e.customStatus}}function $r(e={}){return{jp:String(e.jp??e.sentence??""),hiragana:String(e.hiragana??e.reading??""),ru:String(e.ru??e.translationRu??""),en:String(e.en??e.translationEn??"")}}function Ag(e,t){const n=[],s=new Set,a=o=>{if(!o)return;const l=qt(o.jp||_d(o)),c=qn(l);if(!c||s.has(c))return;s.add(c);const d=String(o.id||"").startsWith("custom_")?String(o.id):`custom_${he(c).toString(36)}`;n.push({id:d,jp:l,hiragana:qt(o.hiragana||o.reading||""),ru:qt(o.ru||o.translationRu||""),en:qt(o.en||o.translationEn||""),source:"user"})};return(Array.isArray(e)?e:[]).forEach(a),(Array.isArray(t)?t:[]).forEach(a),n.slice(0,160)}function Cl(e,t){return{...e,...t,activeIds:{...e.activeIds,...t.activeIds||{}},selected:{...e.selected,...t.selected||{}},checked:{...e.checked,...t.checked||{}},results:{...e.results,...t.results||{}},completed:{...e.completed,...t.completed||{}}}}function si(){return{warmth:44,trust:40,discipline:35,curiosity:42,mood:"neutral",conversationCount:0,totalDialogueChoices:0,lastInteractionAt:null,lastInteractionDate:null,lastDecayDate:W(),lastKnown:{learned:0,mastered:0,reviews:0,lessons:0,streak:0,wrong:0,writing:0,sentence:0},history:[]}}function Ll(){return{enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",currentLine:null,currentQuestion:null,currentDecoration:null,currentEffect:null,mood:"neutral",emotion:"calm",lastSpokeAt:null,nextSpeakAt:null,recentLineIds:[],lastRoomId:null,lastSprite:null}}function Al(e,t){return{...e,...t,warmth:Z(Number(t.warmth??e.warmth),0,100),trust:Z(Number(t.trust??e.trust),0,100),discipline:Z(Number(t.discipline??e.discipline),0,100),curiosity:Z(Number(t.curiosity??e.curiosity),0,100),lastKnown:{...e.lastKnown,...t.lastKnown||{}},history:Array.isArray(t.history)?t.history.slice(0,40):e.history}}function Il(e,t){return{...e,...t,enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,32):e.recentLineIds,currentLine:t.currentLine&&typeof t.currentLine=="object"?t.currentLine:e.currentLine,currentQuestion:t.currentQuestion&&typeof t.currentQuestion=="object"?t.currentQuestion:e.currentQuestion,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:e.currentDecoration,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion}}function vt(){return{lastSeenDate:null,lastInteractionDate:null,lastRoute:null,recentLineIds:[],recentTopics:[],daysSinceReturn:0,lastPraiseAt:null,lastWarningAt:null,timesUserChoseTalkOverStudy:0,timesUserReturnedAfterGap:0,lastReturnCountedDate:null,preferredEvaRoomBackground:null,lastKnownMood:"neutral",recentProblemCluster:null}}function gn(e,t={}){return{...e,...t,recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,30):e.recentLineIds,recentTopics:Array.isArray(t.recentTopics)?t.recentTopics.slice(0,20):e.recentTopics,daysSinceReturn:Number(t.daysSinceReturn||e.daysSinceReturn||0),timesUserChoseTalkOverStudy:Number(t.timesUserChoseTalkOverStudy||e.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(t.timesUserReturnedAfterGap||e.timesUserReturnedAfterGap||0),lastKnownMood:typeof t.lastKnownMood=="string"?t.lastKnownMood:e.lastKnownMood}}function at(){return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),presenceState:"idle",mood:"neutral",emotion:"calm",currentPhrase:null,pendingQuestion:null,currentSkin:"idle",currentBackground:"bg_study_hub",currentDecoration:null,currentEffect:"none",activeSkin:"idle",activeBackground:"bg_study_hub",ownedSkins:["idle","default"],ownedBackgrounds:["bg_study_hub"],ownedEffects:[],ownedDecorations:[],lastEvent:null,lastQuestion:null,lastPhraseAt:0,lastEmotionChangeAt:0,lastQuestionAt:0,lastVisualChangeAt:0,lastPlayerActionAt:Date.now(),textRevealSkippedLineId:null,memory:vt(),questionHistory:[],clickCount:0,eventHistory:[],recentEvents:[],cooldowns:{emotion:18e3,phrase:65e3,question:24e4,visual:72e4}}}function Ig(){const e=at();let t=null;try{const n=localStorage.getItem(Ln);t=n?JSON.parse(n):null}catch(n){console.warn("Eva state reset because stored JSON is invalid.",n)}r.evaRuntime=_g(e,t||Rg()),Tg(),mn()}function Tg(){if(!r.evaRuntime)return;r.evaRuntime.memory=gn(vt(),r.evaRuntime.memory||{});const e=r.evaRuntime.memory,t=W(),n=e.lastSeenDate||null,s=n?Math.max(0,tn(n,t)):0;e.daysSinceReturn=s,s>0&&e.lastReturnCountedDate!==t&&(e.timesUserReturnedAfterGap=Number(e.timesUserReturnedAfterGap||0)+1,e.lastReturnCountedDate=t),e.lastSeenDate=t,e.lastRoute=r.route,e.preferredEvaRoomBackground=r.progress?.selectedEvaRoomBackground||e.preferredEvaRoomBackground||"bg_study_hub",e.lastKnownMood=r.evaRuntime.mood||e.lastKnownMood||"neutral"}function Rg(){const e=r.progress?.evaAutonomy||{};return{currentSkin:r.progress?.selectedEvaSprite||e.lastSprite||"idle",currentBackground:r.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",currentDecoration:r.customization?.selected?.decoration||r.customization?.selected?.frame||null,currentEffect:r.customization?.selected?.effect||"none",activeSkin:r.progress?.selectedEvaSprite||e.lastSprite||"idle",activeBackground:r.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",lastEvent:e.currentLine?.reason?{type:e.currentLine.reason,at:e.currentLine.at}:null}}function _g(e,t={}){return{...e,...t,version:3,updatedAt:new Date().toISOString(),presenceState:typeof t.presenceState=="string"?t.presenceState:e.presenceState,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion,currentPhrase:t.currentPhrase&&typeof t.currentPhrase=="object"?t.currentPhrase:e.currentPhrase,pendingQuestion:t.pendingQuestion&&typeof t.pendingQuestion=="object"?t.pendingQuestion:e.pendingQuestion,currentSkin:typeof t.currentSkin=="string"?t.currentSkin:e.currentSkin,currentBackground:typeof t.currentBackground=="string"?t.currentBackground:e.currentBackground,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:null,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,activeSkin:typeof t.activeSkin=="string"?t.activeSkin:t.currentSkin||e.activeSkin,activeBackground:typeof t.activeBackground=="string"?t.activeBackground:t.currentBackground||e.activeBackground,ownedSkins:Array.isArray(t.ownedSkins)?t.ownedSkins:e.ownedSkins,ownedBackgrounds:Array.isArray(t.ownedBackgrounds)?t.ownedBackgrounds:e.ownedBackgrounds,ownedEffects:Array.isArray(t.ownedEffects)?t.ownedEffects:e.ownedEffects,ownedDecorations:Array.isArray(t.ownedDecorations)?t.ownedDecorations:e.ownedDecorations,lastPhraseAt:Number(t.lastPhraseAt||e.lastPhraseAt||0),lastEmotionChangeAt:Number(t.lastEmotionChangeAt||e.lastEmotionChangeAt||0),lastQuestionAt:Number(t.lastQuestionAt||e.lastQuestionAt||0),lastVisualChangeAt:Number(t.lastVisualChangeAt||e.lastVisualChangeAt||0),lastPlayerActionAt:Number(t.lastPlayerActionAt||e.lastPlayerActionAt||Date.now()),textRevealSkippedLineId:typeof t.textRevealSkippedLineId=="string"?t.textRevealSkippedLineId:null,memory:gn(e.memory||vt(),t.memory||{}),questionHistory:Array.isArray(t.questionHistory)?t.questionHistory.slice(0,40):e.questionHistory,eventHistory:Array.isArray(t.eventHistory)?t.eventHistory.slice(0,80):e.eventHistory,recentEvents:Array.isArray(t.recentEvents)?t.recentEvents.slice(0,80):e.recentEvents,cooldowns:{...e.cooldowns,...t.cooldowns||{}},clickCount:Number(t.clickCount||e.clickCount||0)}}function ri(){if(!r.evaRuntime)return!1;Tl(),r.evaRuntime.updatedAt=new Date().toISOString(),Ea=!1,an&&("cancelIdleCallback"in window?window.cancelIdleCallback(an):window.clearTimeout(an),an=0);try{return localStorage.setItem(Ln,JSON.stringify(r.evaRuntime)),!0}catch(e){return console.warn("Eva state could not be saved.",e),!1}}function mn(e={}){if(!r.evaRuntime)return!1;if(e?.immediate)return ri();if(Ea)return!0;Ea=!0;const t=()=>{an=0,ri()};return"requestIdleCallback"in window?an=window.requestIdleCallback(t,{timeout:1200}):an=window.setTimeout(t,160),!0}function ai(){ii(),ri(),Jp()}function Tl(){if(!r.evaRuntime||!r.progress)return;const e=r.progress.selectedEvaRoomBackground||r.customization?.selected?.background||"bg_study_hub",t=Oe().filter(n=>ot(n.id));r.evaRuntime.ownedSkins=[...new Set(["idle","default",...r.progress.unlockedEvaSprites||[],...t.filter(n=>n.type==="outfit").map(n=>n.spriteId||n.id)].filter(Boolean))],r.evaRuntime.ownedBackgrounds=[...new Set(["bg_study_hub",...r.progress.unlockedBackgrounds||[],...t.filter(n=>n.type==="background").map(n=>n.id)].filter(Boolean))],r.evaRuntime.ownedEffects=[...new Set(t.filter(n=>n.type==="effect").map(n=>n.id))],r.evaRuntime.ownedDecorations=[...new Set(t.filter(n=>n.type==="decoration").map(n=>n.id))],r.evaRuntime.currentBackground=e,r.evaRuntime.activeSkin=r.evaRuntime.currentSkin||r.progress.selectedEvaSprite||"idle",r.evaRuntime.activeBackground=e}function ii(){if(!r.progress)return!1;r.progress.level=ya(r.progress.xp),r.progress.updatedAt=new Date().toISOString(),Pa=!1,rn&&("cancelIdleCallback"in window?window.cancelIdleCallback(rn):window.clearTimeout(rn),rn=0);try{return localStorage.setItem(xn,JSON.stringify(r.progress)),!0}catch(e){return console.warn("Progress could not be saved.",e),!1}}function N(e={}){if(!r.progress)return!1;if(e?.immediate)return ii();if(Pa)return!0;Pa=!0;const t=()=>{rn=0,ii()};return"requestIdleCallback"in window?rn=window.requestIdleCallback(t,{timeout:1200}):rn=window.setTimeout(t,120),!0}function jr(){r.cards.forEach(s=>A(s.id)),r.progress.level=ya(r.progress.xp),r.progress.totalMoonFragmentsEarned=Math.max(Number(r.progress.totalMoonFragmentsEarned||0),Number(r.progress.moonFragments||0),Ty()),Y(),ys(),Cs(),_i(),Di(),Fi(),typeof ensureN1CourseProgress=="function"&&ensureN1CourseProgress();const e=Hs(),t=[ca(z(),"N5"),ca(P(),"N4"),ca(_(),"N3"),ca(M(),"N2"),da(z(),"N5"),da(P(),"N4"),da(_(),"N3"),da(M(),"N2")].some(Boolean);[z(),P(),_(),M(),typeof n1Course=="function"?n1Course():null].filter(Boolean).forEach(s=>Mg(s)),(t||e)&&N(),Sr();const n=r.lessons.find(s=>ke(s));r.activeLessonId||(r.activeLessonId=n?.id||r.lessons[0]?.id||null)}function Mg(e){e&&(e.studiedKanji||={},e.srsKanji||={},e.viewedLessons=es(e.viewedLessons||{}),Object.entries(e.srsKanji).forEach(([t,n])=>{e.studiedKanji[t]||(e.studiedKanji[t]=n)}),Object.entries(e.studiedKanji).forEach(([t,n])=>{e.srsKanji[t]||(e.srsKanji[t]=n)}))}function fs(e,t,n=new Date().toISOString()){if(!e||!t)return"";e.studiedKanji||={},e.srsKanji||={};const s=e.studiedKanji[t],a=e.srsKanji[t],o=s||a||n;return e.studiedKanji[t]=o,e.srsKanji[t]=a||o,o}function Sr(){r.progress.learningPath=yl(Wa(),r.progress.learningPath||{});const e=r.progress.learningPath,t=e.completedNodes,n=e.unlockedNodes;n[le]=!0,(Object.keys(r.progress.seenKanji||{}).length>0||Object.keys(z().studiedKanji||{}).length>0||Object.keys(z().completedLessons||{}).length>0||Object.keys(r.progress.lessonCompletions||{}).length>0)&&!t[le]&&(t[le]=r.progress.visits?.firstVisitDate||new Date().toISOString()),oi().forEach((o,l)=>{z().completedLessons?.[o]&&!t[o]&&(t[o]=z().completedLessons[o]),n[o]=!0});const a=Rl();e.currentNodeId=a,n[a]=!0,e.activeSession?.nodeId&&t[e.activeSession.nodeId]&&(e.activeSession=null),e.lastUpdatedAt=new Date().toISOString()}function oi(){const e=(r.n5Textbook?.items||[]).map(t=>String(t.id||"")).filter(Boolean);return e.length?e:vp.filter(t=>/^n5-lesson-\d+$/i.test(t))}function Rl(){const e=r.progress?.learningPath||Wa(),t=[le,...oi(),In];return t.find(n=>!e.completedNodes?.[n])||t[t.length-1]||le}function li(){return r.n5Textbook?.items?.length?Promise.resolve(r.n5Textbook):ps||(ps=Qe(K.n5Lessons).then(e=>(r.n5Textbook=ll(e),Sr(),(r.route==="learn"||r.route==="home")&&j(),r.n5Textbook)).catch(e=>{throw ps=null,e}),ps)}function Pg(e){const t=String(e||"");if(!t)return Promise.resolve(null);if(r.learningPathLessonPayloads[t])return Promise.resolve(r.learningPathLessonPayloads[t]);const n=wp[t];if(!n){const a=js(t);return a&&(r.learningPathLessonPayloads[t]=a),Promise.resolve(a)}if(mr.has(t))return mr.get(t);const s=Qe(n).then(a=>(r.learningPathLessonPayloads[t]=a||js(t),r.route==="learn"&&r.activeLearnNodeId===t&&j(),r.learningPathLessonPayloads[t])).catch(a=>{const o=js(t);if(o)return r.learningPathLessonPayloads[t]=o,r.route==="learn"&&r.activeLearnNodeId===t&&j(),o;throw a}).finally(()=>{mr.delete(t)});return mr.set(t,s),s}function Tt(){return Sr(),r.progress.learningPath}function ci(){const e=Tt().activeSession;return!e?.nodeId||Tt().completedNodes?.[e.nodeId]?null:e}function _n(){const e=ci();return e?.nodeId?e.nodeId:Tt().currentNodeId||Rl()||le}function _l(e){const t=Mn(e);return t?h(t.title):Eg(e)}function Eg(e){const t=String(e||"");if(t===le)return p()==="ru"?"Введение в маршрут":"Route introduction";if(t===In)return p()==="ru"?"Контрольная точка N5":"N5 checkpoint";const n=Ze(t);if(n)return h(n.title);const s=t.match(/n5-lesson-(\d+)/i);return s?p()==="ru"?`N5 · Урок ${s[1]}`:`N5 · Lesson ${s[1]}`:t}function Dg(e){const t=Mn(e);return t?h(t.summary):""}function V(){return p()==="ru"?{route:"Маршрут обучения",intro:"Введение",checkpoint:"Контрольная точка",review:"Повторение",available:"доступно",current:"сейчас",completed:"завершено",locked:"закрыто",due:"нужно повторить",minutes:"мин",lessons:"уроки",start:"Начать учиться",resume:"Продолжить урок",next:"Следующий урок",reviewAction:"Повторить",reviewOld:"Повторить старое",continue:"Дальше",finish:"Завершить",backToMap:"К маршруту",openTextbook:"Открыть учебник",openCheckpoint:"К тесту",score:"Результат",mistakes:"Ошибки",retryMistakes:"Повторить ошибки",continuePath:"Продолжить путь",ready:"Готово",introTitle:"Как тут учиться",introSummary:"Кандзи идут по цепочке: знак -> смысл -> чтение -> пример -> повторение.",introBody:"Сначала берём один маленький блок, потом отправляем его в повторение. Не нужно держать всё в голове за раз.",introBridge:"Если что-то тяжело, это не провал. Значит, карточка просто раньше вернётся в повторение.",introQuestion:"Куда отправляются карточки после урока?",introQuestionHint:"Выбери правильный путь.",loading:"Подгружаю маршрут...",empty:"Маршрут скоро появится.",nextLesson:"Следующий шаг",lessonTrack:"Текущий уровень",reviewQueue:"К повторению",streak:"Стрик",level:"Уровень",xp:"XP",mapHint:"Сначала идём по текущему уровню. Остальные уровни остаются в учебниках.",step:"Шаг",finishHint:"После урока карточки попадут в повторение.",scoreHint:"Вернёмся к ошибкам или двинемся дальше."}:{route:"Learning path",intro:"Intro",checkpoint:"Checkpoint",review:"Review",available:"available",current:"current",completed:"done",locked:"locked",due:"review due",minutes:"min",lessons:"lessons",start:"Start learning",resume:"Resume lesson",next:"Next lesson",reviewAction:"Review",reviewOld:"Review old material",continue:"Next",finish:"Finish",backToMap:"Back to path",openTextbook:"Open textbook",openCheckpoint:"Open test",score:"Score",mistakes:"Ошибки",retryMistakes:"Retry mistakes",continuePath:"Continue path",ready:"Done",introTitle:"How this route works",introSummary:"Kanji move through a chain: sign -> meaning -> reading -> example -> review.",introBody:"Take one small block first, then send it into review. You do not need to hold everything at once.",introBridge:"If something feels hard, that is not failure. It only means the card should return sooner.",introQuestion:"Where do cards go after the lesson?",introQuestionHint:"Choose the correct path.",loading:"Loading the path...",empty:"The path will appear soon.",nextLesson:"Next step",lessonTrack:"Current level",reviewQueue:"Due now",streak:"Streak",level:"Level",xp:"XP",mapHint:"Stay on the current level here. The rest remains in textbooks.",step:"Шаг",finishHint:"After the lesson the cards move to review.",scoreHint:"Retry mistakes or keep moving."}}function Og(){const e=V();return{id:le,type:"lesson",level:"INTRO",title:{ru:e.introTitle,en:e.introTitle},summary:{ru:e.introSummary,en:e.introSummary},durationMinutes:3}}function Kg(){const e=Ne();return V(),{id:An,type:"review",level:"SRS",title:{ru:`Повторение: ${e}`,en:`Review: ${e}`},summary:{ru:e>0?"Карточки, которые уже нужно вернуть в память.":"Очередь пуста, можно идти дальше.",en:e>0?"Cards that should return now.":"Queue is empty, move on."},durationMinutes:Math.max(2,Math.min(12,e))}}function Bg(){return{id:In,type:"checkpoint",level:"N5",title:{ru:"Контрольная точка N5",en:"N5 checkpoint"},summary:{ru:"Повторение блока и переход к финальному тесту уровня.",en:"Review the block and move into the level final test."},durationMinutes:12}}function Fg(){return oi().map((e,t)=>({id:e,type:"lesson",level:"N5",title:{ru:`N5 · Урок ${t+1}`,en:`N5 · Lesson ${t+1}`},summary:t===0?{ru:"Первый интерактивный урок: 4 знака, чтения, примеры и мини-практика.",en:"First interactive lesson: 4 signs, readings, examples, and mini practice."}:{ru:"Откроем карточки урока прямо из учебника.",en:"Open this lesson directly from the textbook."},durationMinutes:t===0?12:10}))}function Ml(){const e=Og(),t=Kg(),n=Bg(),s=r.n5Textbook?.items?.length?r.n5Textbook.items.map((o,l)=>({id:o.id,type:"lesson",level:"N5",title:o.title,summary:o.goal||o.theme||{ru:"",en:""},durationMinutes:Number(o.durationMinutes||o.estimatedMinutes||10)})):Fg(),a=[e];return Ne()>0&&a.push(t),[...a,...s,n]}function Mn(e){const t=String(e||"");return t&&Ml().find(n=>n.id===t)||null}function Pl(e){if(!e)return"locked";if(e.id===An)return Ne()>0?"review":"available";const t=Tt();return t.completedNodes?.[e.id]?"completed":_n()===e.id?"current":t.unlockedNodes?.[e.id]?e.type==="checkpoint"?"checkpoint":"available":"locked"}function Jg(e){const t=V();return e==="completed"?t.completed:e==="current"?t.current:e==="available"?t.available:e==="review"?t.due:e==="checkpoint"?t.checkpoint:t.locked}function El(){const e=Tt(),t=Ne(),n=ci(),s=_n(),a=Mn(s),o=Number(yt().reviews||0)>=Number(r.progress.settings.dailyGoal||0);return!e.completedNodes?.[le]&&!n?{kind:"node",label:V().start,nodeId:le}:n?.nodeId?{kind:"node",label:V().resume,nodeId:n.nodeId}:t>0?{kind:"review",label:`${V().reviewAction}: ${t}`,nodeId:An}:o&&a?{kind:"node",label:V().next,nodeId:a.id}:a?{kind:"node",label:e.completedNodes?.[le]?V().resume:V().start,nodeId:a.id}:{kind:"review",label:V().reviewOld,nodeId:An}}function zg(){const e=V(),t=a$(),n=t?.level||Nt(),s=t?.lessonId||bo(n),a=jn(n),o=Ku(n);return{label:!!(t?.lessonId||a&&(Object.keys(a.completedLessons||{}).length>0||a.currentLessonId&&a.currentLessonId!==o))?e.resume:e.start,level:n,lessonId:s}}function Ug(){const e=jt(),t=Ne(),n=V();return[{label:n.streak,value:r.progress.streak.current},{label:n.level,value:r.progress.level},{label:n.xp,value:`${e.current}/${e.next}`},{label:n.reviewQueue,value:t}]}function Gg(e){return`
      <article class="metric home-summary-card">
        <span>${i(e.label)}</span>
        <strong>${i(e.value)}</strong>
      </article>
    `}function qg(){const e=p()==="ru",t=Ai();return be.map(n=>{const s=mt(n),a=ba(n),o=jn(n),l=n==="N5"?hn():Object.keys(o?.completedLessons||{}).length,c=Math.max(Number(s?.lessonCount||0),a.length||0),d=qe(n),u=Du(n),m=!u&&t===n,g=h(s?.displayTitle||s?.title||{ru:`Учебник ${n}`,en:`Textbook ${n}`}),w=c>0?`${l}/${c} ${e?"уроков":"lessons"}`:e?"Без уроков":"No lessons",v=u?e?"Пройдено":"Completed":m?`${w} · ${e?"сейчас":"now"}`:d?w:$t(n);return{level:n,title:g,note:v,status:u?"done":m?"current":d?"open":"locked"}})}function Hg(e){const t=`data-action="route" data-route="textbooks" data-subroute="${f(e.level)}"`;return`
      <button class="home-route-step is-${f(e.status)}" type="button" ${t} aria-label="${f((p()==="ru"?"Открыть учебник":"Open textbook")+` ${e.level} — ${e.title}`)}">
        <span class="home-route-step-icon home-route-step-icon--level" aria-hidden="true">${i(e.level)}</span>
        <strong>${i(e.title)}</strong>
        <small>${i(e.note)}</small>
      </button>
    `}function Xg(e){return`
      <button class="home-task-item" type="button" ${e.action==="route"?`data-action="route" data-route="${f(e.route||"")}"`:e.action==="home-lesson"?`data-action="home-lesson" data-level="${f(e.level||"")}" data-lesson-id="${f(e.lessonId||"")}"`:`data-action="${f(e.action)}"`}>
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.detail)}</p>
        </span>
        <span class="home-task-item-count" aria-hidden="true">${i(String(e.count??0))}</span>
      </button>
    `}function Dl(){const e=_n();return{title:_l(e),summary:Dg(e)}}function A(e){const t=String(e);r.progress.cards[t]||(r.progress.cards[t]={state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviews:0,lapses:0,correct:0,wrong:0,stage:"new",lastReview:null,nextReview:null,reviewCount:0,successRate:0,history:[]});const n=r.progress.cards[t];return n.stage||=Zs(n.state),n.lastReview||=n.lastReviewedAt||null,n.nextReview||=n.dueAt||null,n.reviewCount||=n.reviews||0,n.successRate=Lo(n),n.state=Xu(n.stage),n.dueAt=n.nextReview,n.lastReviewedAt=n.lastReview,Number.isFinite(Number(n.srsStep))?n.srsStep=Z(Math.trunc(Number(n.srsStep)),-1,63):n.srsStep=Nr(n),r.progress.cards[t]}function hs(e,t="seen"){if(!r.progress||!e?.id)return!1;Y();const n=new Date().toISOString();let s=!1;const a=String(e.id);return r.progress.seenCards[a]||(r.progress.seenCards[a]=n,s=!0),e.kanji&&!r.progress.seenKanji[e.kanji]&&(r.progress.seenKanji[e.kanji]={at:n,cardId:a,source:t,jlpt:e.jlpt||""},s=!0),s}function vs(e,t="seen"){hs(e,t)&&N()}const We=[5/1440,1/24,12/24,1,2,4],di=1;function Nr(e){const t=Number(e?.intervalDays||0);if(!(t>0))return-1;for(let s=0;s<We.length;s+=1)if(t<=We[s]*1.08)return s;const n=We[We.length-1];return We.length-1+Math.max(1,Math.round(Math.log2(t/n)))}function ws(e){const t=Math.trunc(e);return t<0?0:t<We.length?We[t]||We[0]:We[We.length-1]*2**(t-(We.length-1))}function Qg(e,t,n=di){const s=Array.isArray(e)?e.slice():[],a=Array.isArray(t)?t.slice():[],o=[],l=Math.max(1,Math.trunc(Number(n)||di));let c=0,d=0,u=0;for(;c<s.length||d<a.length;){if(u>=l&&d<a.length){o.push(a[d++]),u=0;continue}if(c<s.length){o.push(s[c++]),u+=1;continue}if(d<a.length){o.push(a[d++]),u=0;continue}break}return o}function Wg(e,t){const n=Nr(e);return t==="again"?0:t==="hard"?n<1?1:n:t==="easy"?n<0?2:n+2:n<0?0:n+1}function Vg(e){const t=Math.max(1,Math.round(e*24*60));if(t<60)return p()==="ru"?`${t} мин.`:`${t} min`;const n=Math.round(t/60);if(n<24)return p()==="ru"?`${n} ?.`:`${n} h`;const s=Math.round(n/24);return p()==="ru"?`${s} ??.`:`${s} d`}function xr(e){const t=e.state==="Learning"?3:e.state==="Review"?2:e.state==="Mastered"?1:0,n=Number(e.lapses||0),s=Number(e.wrong||0),a=Number(e.correct||0);return t+n*4+s*2-a*.05}function Rt(e,t,n="jlpt_lesson"){if(!t)return!1;const a=Ol(e,t).reduce((o,l)=>hs(l,n)||o,!1);return a&&N(),a}function Ol(e,t){const n=String(e||"").toUpperCase();return n==="N5"?Ot(t):n==="N4"?Ts(t):n==="N3"?_s(t):n==="N2"?Ps(t):(t?.kanji||[]).map(s=>r.cards.find(a=>a.kanji===s&&String(a.jlpt||"").toUpperCase()===n)).filter(Boolean)}function Yg(e){const t=r.progress?.cards?.[String(e?.id||"")];return t?t.state&&t.state!=="New"?!0:!!(t.lastReviewedAt||t.lastReview||Number(t.reviews||0)>0||Number(t.reviewCount||0)>0||Number(t.correct||0)>0||Number(t.wrong||0)>0||Number(t.lapses||0)>0):!1}function Kl(){return Y(),r.progress.evaRoomQuiz}function Bl(){const e=[r.cards||[],typeof lt=="function"?lt():[],typeof Re=="function"?Re():[],typeof Me=="function"?Me():[],typeof Ee=="function"?Ee():[]];return Fl(e.flat().filter(Boolean))}function Zg(){if(!r.progress)return[];Y();const e=new Set(Object.keys(r.progress.seenCards||{})),t=new Set(Object.keys(r.progress.seenKanji||{})),n=new Set(Object.keys(r.progress.lessonCompletions||{})),s=em(),a=Bl().filter(o=>{if(!o?.id||!o.kanji||!ye(o,"ru")||!ye(o,"en"))return!1;const l=String(o.jlpt||"").toUpperCase();return e.has(String(o.id))||t.has(o.kanji)||Yg(o)||n.has(o.lessonId)||s.has(`${l}:${o.kanji}`)||s.has(o.kanji)});return Fl(a)}function em(){const e=new Set,t=(n,s)=>{if(!s)return;const a=String(n||"").toUpperCase();e.add(String(s)),a&&e.add(`${a}:${s}`)};return ui().forEach(n=>{const s=n.course();Object.keys(s.studiedKanji||{}).forEach(a=>t(n.level,a)),Object.keys(s.completedLessons||{}).forEach(a=>{(n.lessonById(a)?.kanji||[]).forEach(l=>t(n.level,l))})}),e}function ui(){return[{level:"N5",course:z,lessonById:Ze,markStudied:Fn,markDifficult:As},{level:"N4",course:P,lessonById:Kt,markStudied:Jn,markDifficult:Rs},{level:"N3",course:_,lessonById:Ft,markStudied:zn,markDifficult:Ms},{level:"N2",course:M,lessonById:zt,markStudied:Un,markDifficult:Es}]}function Fl(e){const t=new Set;return e.filter(n=>{const s=`${n.kanji}:${ye(n,"ru")}:${ye(n,"en")}`;return t.has(s)?!1:(t.add(s),!0)})}function tm(e){if(e.target.classList?.contains("detail-backdrop")){C("menu_close"),r.detailCardId=null,Q();return}if(e.target.classList?.contains("final-test-backdrop")){r.finalTestModal=null,r.finalTestBusy=!1,Q();return}const t=e.target.closest(".nav-popover, .bottom-nav");if(r.navMenu&&!t&&!e.target.closest("[data-action]")){r.navMenu=null,Q();return}const n=e.target.closest("[data-action]");if(!n)return;const s=n.dataset.action,a=n.dataset.id;if(!(["eva-click","eva-autonomy-next","eva-question-answer"].includes(s)&&Date.now()-tl<280)){if(s&&s.endsWith("-complete-lesson")){const l=`${s.split("-")[0]}:${a||""}`;if(ee.has(l)){n&&(n.disabled=!0,n.textContent=p()==="ru"?"Урок завершён":"Lesson completed");return}}if(pi(s),requestAnimationFrame(()=>window.setTimeout(()=>rm(s,n),0)),s==="route"){const o=n.dataset.route;if(n.closest(".bottom-nav")&&Ir(o)){Lm(o);return}r.navMenu=null,o==="writing"&&r.detailCardId&&(r.activeCardId=r.detailCardId),Te(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="nav-menu-route"){const o=n.dataset.route;r.navMenu=null,o==="writing"&&r.detailCardId&&(r.activeCardId=r.detailCardId),Te(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="share-page"&&Fu(n.dataset.shareSection||r.route,n$(n)).catch(()=>E(p()==="ru"?"Не удалось поделиться":"Share failed")),s==="toggle-header-socials"&&qu(!No()),s==="notification-center"){if(r.notificationPromptVisible){Wu();return}(r.notificationPrompt?.docked||La("header"))&&Aa("header");return}if(s==="repeat-onboarding"){hi({force:!0});return}if(s==="onboarding-next"){Yl();return}if(s==="onboarding-prev"){Zl();return}if(s==="onboarding-continue"){Nm();return}if(s==="onboarding-close"||s==="onboarding-skip"){ks({completed:s==="onboarding-close"});return}if(s==="dismiss-mascot-speech"){Qd(n.dataset.speechKey||"");return}if(s==="contact-email"&&(r.navMenu=null,r.contactModal=!0,Q()),s==="copy-contact-email"&&Uu(_a).then(o=>{E(o?p()==="ru"?"Email скопирован":"Email copied":p()==="ru"?"Не удалось скопировать email":"Could not copy email")}),s==="close-contact-modal"&&(r.contactModal=!1,Q()),s==="close-pwa-install-help"&&(r.pwaInstallHelpVisible=!1,Q()),s==="close-nav-menu"&&(r.navMenu=null,Q()),s==="close-final-test-modal"&&(r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=null,Q()),s==="final-test-focus-missing"){const o=n.dataset.focus||r.finalTestModal?.focusSelector||null;r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=o,Q()}if(s==="final-test-force-submit"){const o=String(n.dataset.level||r.finalTestModal?.level||"N5").toUpperCase();o==="N4"?nd(!0):o==="N3"?md(!0):o==="N2"?xd(!0):o==="N1"?submitN1FinalTest(!0):Uc(!0)}if(s==="final-test-next-level"){const o=F(n.dataset.nextLevel||""),l=String(n.dataset.nextLesson||"");if(!o||!l)return;r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=null,ka(o,l);return}if(s==="scroll-page-edge"&&((n.dataset.direction||vi())==="up"?Ar():xm()),s==="theme"&&j$(),s==="language"&&S$(),s==="sound"&&Gu(),s==="toggle-ux-sound"&&N$(),s==="export"&&t$(),s==="import"&&nl.click(),s==="reset"&&$$(),s==="share-achievement"&&f$().catch(()=>E(S("shareFallback"))),s==="pwa-install"&&W$(),s==="pwa-later"&&_o(),s==="notification-allow"&&tj(),s==="notification-later"&&Ia(),s==="mascot-click"&&Yk(n.dataset.character),s==="eva-click"&&eu(),s==="eva-dialogue-skip"&&sm(n),s==="dictionary-favorites-tab"&&(r.filters.favorites=n.dataset.favorites||"all",r.dictionaryVisibleCount=ls,Q()),s==="set-learn-jlpt"){r.activeLearnJlpt=String(n.dataset.jlpt||"all").toUpperCase();const o=Li();xc(o),r.activeCardId=null,Q()}if(s==="dictionary-load-more"&&(r.dictionaryVisibleCount+=hp,Q()),s==="toggle-favorite"&&_y(a),s==="eva-room-choice"&&Df(n),s==="eva-question-answer"&&Lf(n),s==="eva-room-reset"&&Kf(),s==="toggle-eva-autonomy"&&Xf(),s==="cycle-eva-autonomy"&&Qf(),s==="eva-autonomy-room-mode"&&Wf(),s==="eva-autonomy-outfit-mode"&&Vf(),s==="eva-autonomy-next"&&Sc(),s==="eva-autonomy-clear"&&Yf(),s==="eva-room-shop-open"&&(r.evaRoomShopOpen=!0,de("shop_opened"),Q()),s==="eva-room-shop-close"&&(r.evaRoomShopOpen=!1,Q()),s==="eva-bg-buy"&&Bf(a),s==="eva-bg-select"&&Ff(a),s==="eva-sprite-buy"&&Jf(a),s==="eva-sprite-select"&&zf(a),s==="shop-category"&&(r.shopFilters.category=n.dataset.category||"all",Q()),s==="shop-filter"&&(r.shopFilters.view=n.dataset.filter||"all",Q()),s==="shop-sort"&&(r.shopFilters.sort=n.dataset.sort||"featured",Q()),s==="shop-buy"&&Br(a),s==="shop-select"&&Fr(a),s==="shop-clear-effect"&&jc(a),s==="shop-clear-item"&&qf(a),s==="clear-writing"&&cy(),s==="undo-writing"&&dy(),s==="check-writing"&&uy(!0),s==="replay-writing"&&au(),s==="play-writing-step"&&iu(),s==="writing-step-prev"&&ou(-1),s==="writing-step-next"&&ou(1),s==="select-writing-step"&&lu(Number(n.dataset.index||0),!0),s==="insert-sentence-tile"&&Db(Number(n.dataset.index)),s==="undo-sentence-tile"&&Ob(),s==="clear-sentence"&&Kb(),s==="check-sentence"&&Bb(),s==="next-sentence"&&Jb(),s==="reading-review-tile"&&Uh(Number(n.dataset.index)),s==="reading-review-undo"&&Gh(),s==="reading-review-clear"&&qh(),s==="reading-review-check"&&Bc(),s==="reading-review-answer"&&zh(n),s==="toggle-reading-translation"&&Hh(),s==="add-custom-sentence"&&$b(),s==="edit-custom-sentence"&&Sb(n.dataset.id),s==="delete-custom-sentence"&&Nb(n.dataset.id),s==="cancel-custom-sentence-edit"&&xb(),s==="insert-jlpt-tile"&&Wy(Number(n.dataset.index)),s==="undo-jlpt-tile"&&Vy(),s==="clear-jlpt-practice"&&Yy(),s==="check-jlpt-practice"&&Zy(),s==="next-jlpt-practice"&&e$(),s==="n5-open-lesson"&&Zh(a),s==="n5-overview"&&ev(),s==="n5-review"&&tv(n.dataset.mode||null),s==="n5-answer"&&Xh(n),s==="n5-check-input"&&Qh(a),s==="n5-srs"&&Jc(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n5-writing-done"&&Vh(a),s==="n5-complete-lesson"&&Yh(a),s==="jlpt-lesson-answer"&&Wh(n.dataset.level||"",n.dataset.lesson||n.dataset.lessonId||"",n.dataset.card||a,String(n.dataset.value||"")==="remember"),s==="n5-final-answer"&&rv(n),s==="n5-final-submit"&&Uc(),s==="n5-final-reset"&&av(),s==="n4-open-lesson"&&Iv(a),s==="n4-overview"&&Tv(),s==="n4-review"&&Rv(n.dataset.mode||null),s==="n4-kanji"&&_v(),s==="n4-grammar"&&Mv(),s==="n4-reading"&&Pv(),s==="n4-listening"&&Ev(),s==="n4-final"&&Dv(),s==="n4-answer"&&jv(n),s==="n4-check-input"&&Sv(a),s==="n4-srs"&&Zc(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n4-writing-done"&&Nv(a),s==="n4-complete-lesson"&&xv(a),s==="n4-grammar-complete"&&Cv(a,n.dataset.value||""),s==="n4-reading-complete"&&Lv(a,n.dataset.question||"",n.dataset.value||""),s==="n4-listening-complete"&&Av(a,n.dataset.question||"",n.dataset.value||""),s==="n4-final-answer"&&Bv(n),s==="n4-final-submit"&&nd(),s==="n4-final-reset"&&Fv(),s==="n3-open-lesson"&&gw(a),s==="n3-overview"&&mw(),s==="n3-review"&&fw(n.dataset.mode||null),s==="n3-kanji"&&hw(),s==="n3-grammar"&&vw(),s==="n3-reading"&&ww(),s==="n3-listening"&&bw(),s==="n3-final"&&kw(),s==="n3-answer"&&iw(n),s==="n3-check-input"&&ow(a),s==="n3-srs"&&ud(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n3-writing-done"&&lw(a),s==="n3-complete-lesson"&&cw(a),s==="n3-grammar-complete"&&dw(a,n.dataset.value||""),s==="n3-reading-complete"&&uw(a,n.dataset.question||"",n.dataset.value||""),s==="n3-listening-complete"&&pw(a,n.dataset.question||"",n.dataset.value||""),s==="n3-final-answer"&&jw(n),s==="n3-final-submit"&&md(),s==="n3-final-reset"&&Sw(),s==="n2-open-lesson"&&Ww(a),s==="n2-overview"&&Vw(),s==="n2-review"&&Yw(n.dataset.mode||null),s==="n2-kanji"&&Zw(),s==="n2-grammar"&&eb(),s==="n2-reading"&&tb(),s==="n2-listening"&&nb(),s==="n2-final"&&sb(),s==="n2-answer"&&zw(n),s==="n2-check-input"&&Uw(a),s==="n2-srs"&&jd(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n2-writing-done"&&Gw(a),s==="n2-complete-lesson"&&qw(a),s==="n2-grammar-complete"&&Hw(a,n.dataset.value||""),s==="n2-reading-complete"&&Xw(a,n.dataset.question||"",n.dataset.value||""),s==="n2-listening-complete"&&Qw(a,n.dataset.question||"",n.dataset.value||""),s==="n2-final-answer"&&ib(n),s==="n2-final-submit"&&xd(),s==="n2-final-reset"&&ob(),s==="review-exercise-next"){sa(),r.pendingFocus="__scroll-top__",j();return}if(s==="play-kanji-audio"){const o=X(a)||X(r.activeCardId);o&&Ru(o)}if(s==="open-jlpt-lesson"){const o=String(n.dataset.jlpt||"").toUpperCase();if(Yt(o)){if(!qe(o)){r.activeTextbookLevel=o,r.activeJlptLesson=o,Te("textbooks",null,o),E($t(o));return}r.activeJlptLesson=o,Te("jlpt-lesson",null,o)}}if(s==="open-jlpt-lesson-start"&&ka(n.dataset.jlpt||Nt()),s==="social-link"&&Zt(`social_${String(n.dataset.network||"").toLowerCase()}_opened`,{network:n.dataset.network||"",section:r.route}),s==="play-audio"&&Gy(n.dataset.audio,n.dataset.label),s==="close-reward"&&(r.rewardModal=r.rewardQueue.shift()||null,r.rewardModal&&nu(r.rewardModal),j()),s==="set-goal"&&(r.progress.settings.dailyGoal=Number(n.dataset.goal),N(),E(`${S("dailyGoal")}: ${r.progress.settings.dailyGoal}`),j()),s==="buy-shop"&&Br(a),s==="start-due"&&(Te("textbooks"),Ne()||E($e("eva","welcome"))),s==="home-lesson"){const o=F(n.dataset.level||"")||Nt(),l=String(n.dataset.lessonId||"");ka(o,l)}if(s==="home-review"&&(Ne()?Te("review"):E(p()==="ru"?"Пока нет повторений.":"No reviews are due right now.")),s==="home-primary"&&ih(),s==="learning-path-node"&&Cc(n.dataset.node||a),s==="learning-path-back"&&fn(),s==="learning-path-choice"){const o=String(n.dataset.node||""),l=String(n.dataset.step||""),c=String(n.dataset.value||""),d=Ss(o),u=d.steps.find(m=>m.id===l);if(!u||u.kind!=="quiz"||d.session.answers?.[l])return;d.session.answers[l]={selected:c,correct:c===u.answer,at:new Date().toISOString()},c===u.answer?d.session.score=Number(d.session.score||0)+1:d.session.mistakes=[...new Set([...d.session.mistakes||[],l])],d.session.updatedAt=new Date().toISOString(),N(),j()}if(s==="learning-path-step-next"){const o=String(n.dataset.node||r.activeLearnNodeId||""),l=Ss(o);if(!l.steps.length)return;const c=l.steps[l.session.stepIndex];if(c?.kind==="quiz"&&!l.session.answers?.[c.id])return;l.session.stepIndex=Math.min(l.session.stepIndex+1,l.steps.length),l.session.updatedAt=new Date().toISOString(),N(),j()}if(s==="learning-path-retry"){const o=String(n.dataset.node||r.activeLearnNodeId||""),c=(Ss(o).session.mistakes||[]).slice();Tt().activeSession=Ya({nodeId:o,mode:"mistakes",stepIndex:0,answers:{},mistakes:[],reviewStepIds:c,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),N(),j()}if(s==="learning-path-continue"){const o=String(n.dataset.node||r.activeLearnNodeId||""),l=Ss(o);uh(o,l.session,l.steps),fn();return}if(s==="start-lesson"||s==="select-lesson"){const o=r.lessons.find(l=>l.id===a);if(!o||!ke(o)){E(`${S("unlockedAt")} ${va(o)}`);return}if(r.activeLessonId=a,r.activeCardId=null,r.revealed=!1,gt(),s==="start-lesson"){de("lesson_start",{lessonId:a,jlpt:o.jlpt});const l=String(o.jlpt||"").toUpperCase();/^n[2-5]-lesson-\d+$/i.test(o.id)&&["N5","N4","N3","N2"].includes(l)?(Te("textbooks",null,l),r.activeTextbookSubroute=o.id,history.replaceState(null,"",`#textbooks/${encodeURIComponent(l)}/${encodeURIComponent(o.id)}`),j()):fn(sn,o.id)}else j()}if(s==="show-answer"&&(vs(X(r.activeCardId),"show_answer"),r.revealed=!0,gt(),j()),s==="check-reading"){const o=document.getElementById(`readingCheck-${a||r.activeCardId}`);o&&(r.readingCheck.value=o.value,r.readingCheck.cardId=a||r.activeCardId),bu()}if(s==="rate"&&qk(n.dataset.rating),s==="open-card"&&(vs(X(a),"card_details"),r.detailCardId=a,j()),s==="open-kanji-page"&&lm(a),s==="close-detail"&&(r.detailCardId=null,Q()),s==="study-card"){const o=X(a);if(!o)return;vs(o,"study_card"),r.activeLessonId=o.lessonId,r.activeCardId=o.id,r.revealed=!1,gt(o.id),r.detailCardId=null,fn(sn,o.lessonId)}}}function nm(e){const t=e.target.closest?.('[data-action="eva-click"], [data-action="eva-autonomy-next"]');if(!t||t.disabled)return;const n=t.dataset.action;tl=Date.now(),e.preventDefault(),pi(n),n==="eva-click"&&eu(),n==="eva-autonomy-next"&&Sc()}function pi(e="activity"){r.evaRuntime&&(r.evaRuntime.lastPlayerActionAt=Date.now(),r.evaRuntime.memory=gn(vt(),r.evaRuntime.memory||{}),r.evaRuntime.memory.lastRoute=r.route,e.startsWith("eva")&&(r.evaRuntime.memory.lastInteractionDate=W()),["eva-autonomy-next","eva-question-answer"].includes(e)&&(r.evaRuntime.lastPlayerActionAt=Date.now()))}function sm(e){if(!r.evaRuntime)return;const t=e?.dataset?.lineId||G().currentLine?.id||"";!t||r.evaRuntime.textRevealSkippedLineId===t||(r.evaRuntime.textRevealSkippedLineId=t,mn(),j())}function rm(e,t){if(!(!e||t?.disabled)&&!am(e,t)&&!["eva-room-choice","eva-bg-buy","eva-bg-select"].includes(e)){if(e==="eva-room-shop-open"){C("menu_open");return}if(e==="eva-room-shop-close"){C("menu_close");return}if(e==="route"){if(t?.closest(".bottom-nav")&&Ir(t.dataset.route)){C(r.navMenu===t.dataset.route?"menu_close":"menu_open");return}C("tab_switch");return}if(e==="nav-menu-route"){C("tab_switch");return}if(e==="close-nav-menu"){C("menu_close");return}if(e==="toggle-header-socials"){C(No()?"menu_close":"menu_open");return}if(e==="show-answer"||e==="open-card"){C("card_flip");return}if(["close-reward","close-detail","close-pwa-install-help","pwa-later","notification-later","dismiss-mascot-speech"].includes(e)){C("menu_close");return}if(e==="notification-center"){C("notification_soft");return}if(["start-lesson","select-lesson","next-sentence","study-card","rate","open-jlpt-lesson","n5-open-lesson","n5-overview","n5-review","n4-open-lesson","n4-overview","n4-review","n4-kanji","n4-grammar","n4-reading","n4-listening","n4-final","n3-open-lesson","n3-overview","n3-review","n3-kanji","n3-grammar","n3-reading","n3-listening","n3-final","n2-open-lesson","n2-overview","n2-review","n2-kanji","n2-grammar","n2-reading","n2-listening","n2-final"].includes(e)){C("page_turn");return}if(["n5-answer","n5-check-input","n5-srs","n5-writing-done","n5-complete-lesson","n5-final-answer","n5-final-submit","n4-answer","n4-check-input","n4-srs","n4-writing-done","n4-complete-lesson","n4-grammar-complete","n4-reading-complete","n4-listening-complete","n4-final-answer","n4-final-submit","n3-answer","n3-check-input","n3-srs","n3-writing-done","n3-complete-lesson","n3-grammar-complete","n3-reading-complete","n3-listening-complete","n3-final-answer","n3-final-submit","n2-answer","n2-check-input","n2-srs","n2-writing-done","n2-complete-lesson","n2-grammar-complete","n2-reading-complete","n2-listening-complete","n2-final-answer","n2-final-submit","n1-answer","n1-check-input","n1-srs","n1-writing-done","n1-complete-lesson","n1-grammar-complete","n1-reading-complete","n1-listening-complete","n1-final-answer","n1-final-submit","jlpt-lesson-answer"].includes(e)){C("button_click");return}if(["pwa-install","notification-allow","notification-center","set-goal"].includes(e)){C("notification_soft");return}t?.matches("button, .btn, [role='button']")&&C("button_click"),e!=="toggle-header-socials"&&qu(!1)}}function am(e,t){return["learn","review"].includes(r.route)?new Set(["show-answer","rate","check-reading","play-kanji-audio","start-lesson","select-lesson","study-card"]).has(e)||!!t?.closest(".study-card, .study-layout"):!1}function Jl(e){pi("input");const t=e.target.closest("[data-ux-volume]");if(t){I$(Number(t.value)/100);const c=document.querySelector("[data-ux-volume-label]");c&&(c.textContent=`${Math.round(Sa()*100)}%`);return}const n=e.target.closest("[data-reading-input]");if(n){r.readingCheck={cardId:n.dataset.id||r.activeCardId,value:n.value,status:null,message:""};return}const s=e.target.closest("[data-sentence-draft]");if(s){const c=fe(),d=s.dataset.sentenceDraft;c.customDraft=$r(c.customDraft||{}),d&&Object.prototype.hasOwnProperty.call(c.customDraft,d)&&(c.customDraft[d]=s.value,c.customMessage="",c.customStatus="",N());return}const a=e.target.closest("[data-filter]");if(!a)return;const o=a.dataset.filter,l=a.selectionStart;r.filters[o]=a.value,r.dictionaryVisibleCount=ls,j(),requestAnimationFrame(()=>{const c=document.getElementById(a.id);c&&(c.focus(),typeof l=="number"&&"setSelectionRange"in c&&c.setSelectionRange(l,l))})}function im(e){if(jm(e)||om(e))return;if(e.key==="Escape"&&(r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible||r.navMenu)){r.detailCardId=null,r.rewardModal=null,r.finalTestModal=null,r.contactModal=!1,r.pwaInstallHelpVisible=!1,r.navMenu=null,j();return}const t=e.target.closest?.("[data-reading-input]");!t||e.key!=="Enter"||(e.preventDefault(),r.readingCheck.value=t.value,r.readingCheck.cardId=t.dataset.id||r.activeCardId,bu())}function om(e){return e.target?.closest?.("input, textarea, select, [contenteditable='true']")||e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||(fr=`${fr}${e.key.toLowerCase()}`.slice(-Bo.length),fr!==Bo)?!1:(fr="",zl(5e3),!0)}function zl(e=5e3){const t=Math.max(1,Math.min(999999,Math.floor(Number(e)||5e3)));return r.progress?(O(0,t,"cheat:moon_farm"),U(),N(),C("moon_fragment_gain"),E(p()==="ru"?`Чит активирован: +${t} Moon`:`Cheat activated: +${t} Moon`),j(),r.progress.moonFragments):0}function fn(e=cs,t=null,n=null){r.route="learn",r.activeLearnView=e,r.activeLearnNodeId=e===Lt&&String(t||"")||null,r.activeLearnLegacyLessonId=e===sn&&String(t||"")||null;const s=e===Lt&&t?`#learn/lesson/${encodeURIComponent(String(t))}`:e===sn&&t?`#learn/legacy/${encodeURIComponent(String(t))}`:"#learn";location.hash!==s&&history.replaceState(null,"",s),r.activeTextbookLevel=null,r.activeTextbookSubroute=null,r.kanjiPageId=null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=n,r.evaRoomShopOpen=!1,gt(),Mt(),Q()}function Te(e,t=null,n=null){if(e==="learn"){fn(cs,null,t);return}r.route=Ho.includes(e)?e:"home",r.route==="textbooks"?(r.activeTextbookLevel=n?String(n).toUpperCase():r.activeTextbookLevel,r.activeTextbookSubroute=null):r.route==="jlpt-lesson"?r.activeJlptLesson=n?String(n).toUpperCase():r.activeJlptLesson||Oo()||null:(r.activeTextbookLevel=null,r.activeTextbookSubroute=null),r.route!=="review"&&sa();const s=r.route==="learn"?"#learn":r.route==="textbooks"&&r.activeTextbookLevel?`#textbooks/${encodeURIComponent(r.activeTextbookLevel)}`:r.route==="jlpt-lesson"&&r.activeJlptLesson?`#jlpt-lesson/${encodeURIComponent(r.activeJlptLesson)}`:`#${r.route}`;location.hash!==s&&history.replaceState(null,"",s),r.route!=="kanji"&&(r.kanjiPageId=null),r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=t,r.route!=="eva-room"&&(r.evaRoomShopOpen=!1),gt(),Mt(),Q(),r.route==="eva-room"&&de("room_opened")}function lm(e){const t=X(e);if(!t)return;r.route="kanji",r.kanjiPageId=t.id,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.pendingFocus=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.evaRoomShopOpen=!1,gt();const n=`#kanji/${encodeURIComponent(t.id)}`;location.hash!==n&&history.replaceState(null,"",n),Mt(),Q()}function cm(){ur=!0,pr=null,$y();try{Dm();let e="";r.route==="home"&&(e=Km()),r.route==="about"&&(e=Mm()),r.route==="learn"&&(e=ah(),r.pendingFocus!=="lesson-tabs"&&requestAnimationFrame(fo)),r.route==="review"&&(e=mb(),r.pendingFocus!=="sentence-practice"&&requestAnimationFrame(fo)),r.route==="dictionary"&&(e=ak()),r.route==="kanji"&&(e=dk()),r.route==="writing"&&(e=Lk(),requestAnimationFrame(ay)),r.route==="stats"&&(e=Tk(),requestAnimationFrame(su)),r.route==="achievements"&&(e=Mk()),r.route==="eva-room"&&(e=Um()),r.route==="jlpt-lesson"&&(e=mh()),r.route==="textbooks"&&(e=fh()),cn.innerHTML=`${e}${Rm()}${dm()}`,document.body.classList.toggle("modal-open",!!(r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible)),Uk(),requestAnimationFrame(()=>{Em(),wi(),km()})}finally{ur=!1}}function Q(){Ma||(Ma=requestAnimationFrame(()=>{Ma=0,cm()}))}function j(){Q()}function dm(){const e=`${Pm()}${Ik()}${Dk()}${qb()}${Ok()}${Kk()}${Bk()}${Fk()}${Cm()}`;return e?`<div class="modal-layer">${e}</div>`:""}function Ul(){return te?.isConnected?te:document.body?(te||(te=document.createElement("div"),te.className="flash-kanji-onboarding-root",te.setAttribute("role","presentation"),te.setAttribute("aria-hidden","false")),te.isConnected||document.body.appendChild(te),te):null}const gi=[{target:null,title:{ru:"Добро пожаловать",en:"Welcome"},text:{ru:"Привет! Я Ева. Быстро покажу, где что находится и как пользоваться Flash Kanji.",en:"Hi! I am Eva. I will quickly show you where everything is and how Flash Kanji works."}},{target:"[data-tour='home-lesson']",title:{ru:"Учебники",en:"Textbooks"},text:{ru:"Это главный вход в Flash Kanji. Здесь открываются учебники N5-N1 и путь к урокам каждого уровня.",en:"This is the main entrance to Flash Kanji. Open N5-N1 textbooks here and continue into each level's lessons."}},{target:"[data-tour='srs-review']",title:{ru:"Повторение",en:"Review"},text:{ru:"Изученные карточки возвращаются в повторение, чтобы закрепляться в памяти.",en:"Learned cards come back here for spaced repetition so they stay in memory."}},{target:"[data-tour='dictionary']",title:{ru:"Словарь",en:"Dictionary"},text:{ru:"В словаре можно посмотреть значения, чтения, примеры и подробности по каждому кандзи.",en:"The dictionary lets you check meanings, readings, examples, and kanji details."}},{target:["[data-tour='eva-room']","[data-tour='profile-progress']","[data-tour='profile-progress-nav']"],title:{ru:"Комната Евы",en:"Eva room"},text:e=>e?.dataset?.tour==="eva-room"?{ru:"Это моя комната. Здесь можно поговорить со мной, менять облик и тратить Moon Fragments.",en:"This is my room. You can talk to me here, change the look, and spend Moon Fragments."}:{ru:"Если комнаты Евы на этой странице нет, посмотри на стрик и статистику.",en:"If Eva Room is not on this page, check the streak and progress stats instead."}}],Cr={title:{ru:"Готово!",en:"All set!"},text:{ru:"Открой учебники и начни с N5. Я рядом.",en:"Open the textbooks and start with N5. I will be right here."},start:{ru:"Открыть учебники",en:"Open textbooks"},close:{ru:"Закрыть",en:"Close"}};function Gl(){try{return localStorage.getItem(zo)==="true"}catch{return!1}}function um(){try{return localStorage.getItem(Go)||""}catch{return""}}function Lr(e){try{localStorage.setItem(Go,e)}catch{}}function pm(e=r.progress){return e?Number(e.appOpens||0)>0||Object.keys(e.lessonCompletions||{}).length>0||Object.keys(e.cards||{}).length>0||Object.keys(e.seenKanji||{}).length>0||Object.keys(e.daily||{}).length>0||Object.keys(e.favorites||{}).length>0||Object.keys(e.transactions||{}).length>0||Number(e.totalMoonFragmentsEarned||0)>0||Number(e.secrets?.evaClicks||0)>0||(e.secrets?.nightVisit?1:0)>0||Number(e.visits?.streak||0)>0||Number(e.visits?.bestStreak||0)>0:!1}function gm(e=!1){const t=um();return t==="returning"||t==="completed"?t:Gl()?(Lr("completed"),"completed"):e?(Lr("returning"),"returning"):(Lr("new"),"new")}function ql(){return!Gl()}function mm(){try{localStorage.getItem(Uo)==="true"&&localStorage.removeItem(Uo)}catch{}}function fm(){try{localStorage.setItem(zo,"true"),Lr("completed")}catch{}}function Hl(){return Xe}function bs(){return gi.length}function mi(){return gi[Z(st,0,bs()-1)]||gi[0]}function hm(e=mi()){return e?.target?Array.isArray(e.target)?e.target:[e.target]:[]}function vm(e){if(!(e instanceof HTMLElement))return!1;const t=window.getComputedStyle(e);return t.display==="none"||t.visibility==="hidden"||Number(t.opacity||"1")<=0?!1:e.getClientRects().length>0}function Xl(e=mi()){for(const t of hm(e)){const s=Array.from(document.querySelectorAll(t)).find(a=>vm(a));if(s)return s}return null}function Ql(e,t=null){return typeof e=="function"?Ql(e(t),t):h(e||{ru:"",en:""})}function wm(){return typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function bm(){return!(Xe||!r.progress||!r.i18n||!r.lessons.length||!document.body||document.visibilityState!=="visible"||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.navMenu)}function fi(e=!1,t=mp){clearTimeout(Tn),!(!e&&!ql())&&(Tn=window.setTimeout(()=>{Tn=0,hi({force:e})},t))}function hi(e={}){const t=!!e.force;let n=!1;if(Xe){if(!t)return!0;ks({completed:!1,silent:!0})}if(!t&&!ql())return!1;if(!bm())return fi(t,qo),!1;clearTimeout(Tn);try{Oa=document.activeElement instanceof HTMLElement?document.activeElement:null,Xe=!0,ae="step",st=0,document.body.classList.add("onboarding-open");const s=document.querySelector(".app-shell");if(s){s.setAttribute("aria-hidden","true");try{s.inert=!0}catch{}}return Ul(),Pn(),Wl(),n=!0,window.addEventListener("scroll",_t,{passive:!0}),window.addEventListener("resize",_t),window.addEventListener("orientationchange",_t),_t(),Vl(),!0}catch(s){return console.error("Flash Kanji onboarding failed to start.",s),ks({completed:!1,silent:!0}),n||fi(t,qo),!1}}function ks(e={}){const{completed:t=!0,silent:n=!1,routeTo:s=null}=e;clearTimeout(Tn),Tn=0,cancelAnimationFrame(us),us=0,window.removeEventListener("scroll",_t),window.removeEventListener("resize",_t),window.removeEventListener("orientationchange",_t),rt&&rt.classList.remove("is-onboarding-target"),rt=null,Xe=!1,ae="step",st=0,te&&(te.remove(),te=null,Ie=null,pe=null),document.body.classList.remove("onboarding-open");const a=document.querySelector(".app-shell");if(a){a.removeAttribute("aria-hidden");try{a.inert=!1}catch{}}t&&fm(),n||(s?Te(s):j()),Oa?.focus&&requestAnimationFrame(()=>{try{Oa.focus()}catch{}})}function Pn(){if(!Ul())return;const e=ae==="final"?null:mi(),t=ae==="final"?null:Xl(e),n=ae==="final"?Cr.title:e.title,s=ae==="final"?Cr.text:Ql(e.text,t),a=ae==="final"?p()==="ru"?"Готово":"Done":`${st+1} ${p()==="ru"?"из":"of"} ${bs()}`,o=h(n),l=h(s),c=aa("eva","calm","welcome"),d=bs();te.classList.toggle("is-final",ae==="final"),te.classList.toggle("has-target",!!t),te.dataset.view=ae;const u=ae==="final"?`
        <button class="btn primary" type="button" data-action="onboarding-continue">${i(h(Cr.start))}</button>
        <button class="btn ghost" type="button" data-action="onboarding-close">${i(h(Cr.close))}</button>
      `:st===0?`
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Начать":"Start")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `:`
          <button class="btn ghost" type="button" data-action="onboarding-prev">${i(p()==="ru"?"Назад":"Back")}</button>
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Далее":"Next")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `;te.innerHTML=`
      ${ae==="final"?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      ${ae==="final"||t?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      <div class="flash-kanji-onboarding-spotlight${t?"":" is-hidden"}" data-onboarding-spotlight aria-hidden="true"></div>
      <section class="flash-kanji-onboarding-dialog${ae==="final"?" is-final":""}" role="dialog" aria-modal="true" aria-labelledby="flashKanjiOnboardingTitle" aria-describedby="flashKanjiOnboardingDesc" tabindex="-1">
        <div class="flash-kanji-onboarding-head">
          <span class="pill">${i(a)}</span>
          <span class="pill">${i(o)}</span>
        </div>
        <div class="flash-kanji-onboarding-body">
          <img class="flash-kanji-onboarding-eva" src="${f(c)}" alt="${f(p()==="ru"?"Ева":"Eva")}" loading="eager" decoding="async" />
          <div class="flash-kanji-onboarding-copy">
            <h2 id="flashKanjiOnboardingTitle">${i(o)}</h2>
            <p id="flashKanjiOnboardingDesc">${i(l)}</p>
          </div>
        </div>
        <div class="actions flash-kanji-onboarding-actions">${u}</div>
      </section>
    `,Ie=ge("[data-onboarding-spotlight]",te),pe=ge(".flash-kanji-onboarding-dialog",te),rt&&rt!==t&&rt.classList.remove("is-onboarding-target"),rt=t||null,rt&&rt.classList.add("is-onboarding-target"),pe&&(pe.dataset.totalSteps=String(d)),_t()}function _t(){Xe&&(us||(us=requestAnimationFrame(()=>{us=0,Wl()})))}function Wl(){if(!Xe||!te||!pe)return;const e=ae==="final"?null:rt||Xl();wm();const t=window.innerWidth,n=window.innerHeight;if(pe.style.maxWidth=`${Math.min(fp,Math.max(280,t-16))}px`,pe.style.maxHeight=`${Math.max(180,n-24)}px`,pe.style.left="50%",pe.style.top="50%",pe.style.transform="translate(-50%, -50%)",pe.dataset.placement="center",e){const s=e.isConnected?e.getBoundingClientRect():null;!!s&&s.top>=8&&s.bottom<=n-8&&s.left>=8&&s.right<=t-8&&Ie?(Ie.hidden=!1,Ie.style.left=`${Math.round(s.left-12)}px`,Ie.style.top=`${Math.round(s.top-12)}px`,Ie.style.width=`${Math.round(s.width+12*2)}px`,Ie.style.height=`${Math.round(s.height+12*2)}px`,Ie.style.borderRadius=`${Math.max(6,Math.round(parseFloat(getComputedStyle(e).borderRadius||"8")||8))}px`):Ie&&(Ie.hidden=!0)}else Ie&&(Ie.hidden=!0);te.style.visibility="visible",Vl()}function km(){Xe&&Pn()}function Vl(){if(!pe)return;const e=pe.querySelector('[data-action="onboarding-next"], [data-action="onboarding-continue"], [data-action="onboarding-start"], [data-action="onboarding-prev"]'),t=pe.querySelectorAll("button"),n=e||t[0]||pe;try{n.focus?.()}catch{}}function ym(){return pe?Array.from(pe.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')).filter(e=>e instanceof HTMLElement):[]}function $m(e=1){const t=ym();if(!t.length)return;const n=document.activeElement,s=t.indexOf(n),a=s===-1?e>0?0:t.length-1:(s+e+t.length)%t.length;t[a]?.focus?.()}function jm(e){return Xe?e.key==="Tab"?(e.preventDefault(),$m(e.shiftKey?-1:1),!0):e.key==="Escape"?(e.preventDefault(),ks({completed:ae==="final"}),!0):e.key==="ArrowRight"?(e.preventDefault(),Yl(),!0):e.key==="ArrowLeft"?(e.preventDefault(),Zl(),!0):!1:!1}function Yl(){if(!Xe)return;const e=bs()-1;if(ae!=="final"){if(st<e){st+=1,Pn();return}ae="final",Pn()}}function Zl(){if(Xe){if(ae==="final"){ae="step",st=bs()-1,Pn();return}st>0&&(st-=1,Pn())}}function Sm(e=null){ks({completed:!0,routeTo:e})}function Nm(){Sm("textbooks")}function Ar(){if(typeof window>"u")return;const e=document.scrollingElement||document.documentElement;e&&(e.scrollTop=0),document.body&&(document.body.scrollTop=0),window.scrollTo({top:0,left:0,behavior:"auto"})}function Mt(){typeof window>"u"||requestAnimationFrame(()=>requestAnimationFrame(()=>Ar()))}function xm(){if(typeof window>"u")return;const e=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({top:e,behavior:"auto"})}function ec(){return typeof window>"u"||!document.documentElement?!1:document.documentElement.scrollHeight>window.innerHeight+24}function vi(){return ec()?window.scrollY>32?"up":"down":null}function Cm(){const e=vi()||"down",t=ec()?"":" hidden",n=p()==="ru",s=e==="up"?n?"Наверх":"Scroll to top":n?"Вниз":"Scroll to bottom",a=e==="up"?"↑":"↓";return`
      <button class="scroll-position-toggle scroll-position-toggle-${e}" type="button" data-action="scroll-page-edge" data-direction="${e}" aria-label="${f(s)}" title="${f(s)}"${t}>
        <span class="scroll-position-toggle-icon" aria-hidden="true">${i(a)}</span>
        <span class="scroll-position-toggle-label">${i(s)}</span>
      </button>
    `}function wi(){const e=ge('[data-action="scroll-page-edge"]');if(!e)return;const t=vi();if(!t){e.hidden=!0;return}e.hidden=!1,e.dataset.direction=t,e.classList.toggle("scroll-position-toggle-up",t==="up"),e.classList.toggle("scroll-position-toggle-down",t==="down");const n=e.querySelector(".scroll-position-toggle-icon");n&&(n.textContent=t==="up"?"↑":"↓");const s=e.querySelector(".scroll-position-toggle-label");s&&(s.textContent=p()==="ru"?t==="up"?"Наверх":"Вниз":t==="up"?"Top":"Bottom");const a=p()==="ru"?t==="up"?"Подняться вверх":"Опуститься вниз":t==="up"?"Scroll to top":"Scroll to bottom";e.setAttribute("aria-label",a),e.setAttribute("title",a)}function Ir(e){return tc(e).length>1}function Lm(e){if(!Ir(e)){Te(e);return}r.navMenu=r.navMenu===e?null:e,Q()}function tc(e){const t=p()==="ru";return{learn:[{action:"open-jlpt-lesson-start",jlpt:Ai(),icon:"文",title:t?"Текущий урок":"Current lesson",text:t?"Открыть последний урок учебника.":"Open the latest lesson in the textbook."},{route:"review",focus:"review-card",icon:"↻",title:"SRS",text:t?"Перейти к повторениям.":"Go to review."},{route:"textbooks",focus:"textbook-grid",icon:"冊",title:t?"Учебники":"Textbooks",text:t?"Открыть страницы учебников JLPT.":"Open JLPT textbook pages."}],review:[{route:"review",focus:"review-card",icon:"↻",title:t?"Повторение":"Review cards",text:t?"Карточки повторения на сегодня.":"Today's review queue."},{route:"review",focus:"sentence-practice",icon:"文",title:t?"Практика предложений":"Sentence practice",text:t?"Вставь кандзи в пропуск.":"Fill kanji into blanks."}],stats:[{route:"stats",focus:"stats-top",icon:"в–Ґ",title:t?"Статистика":"Statistics",text:t?"Графики, XP и серия.":"Charts, XP, and streak."},{route:"achievements",focus:"achievements-top",icon:"月",title:t?"Достижения":"Achievements",text:t?"Галерея наград.":"Reward gallery."},{route:"stats",focus:"shop-panel",icon:"в—€",title:t?"Магазин":"Shop",text:t?"Moon Fragments и предметы.":"Moon Fragments and items."}],more:[{route:"writing",focus:"writing-canvas",icon:"筆",title:t?"Письмо":"Writing",text:t?"Практика написания.":"Writing practice."},{route:"stats",focus:"stats-top",icon:"в–Ґ",title:t?"Профиль":"Profile",text:t?"Статистика, награды и прогресс.":"Stats, achievements, and progress."},{route:"eva-room",focus:"eva-room",icon:"☾",title:t?"Комната Евы":"Eva room",text:t?"Диалоги и уютные фоны.":"Dialogue scenes and cozy rooms."},{route:"about",focus:"about",icon:"ℹ",title:t?"О проекте":"About",text:t?"Что такое Flash Kanji.":"What Flash Kanji is."}]}[e]||[]}function bi(e){return e==="more"?p()==="ru"?"Ещё":"More":e==="about"?p()==="ru"?"О проекте":"About":e==="stats"?p()==="ru"?"Профиль":"Profile":S(e)}function Am(){return["home","learn","review","dictionary","stats","about"]}function Im(e){return{home:"⌂",learn:"文",review:"↻",dictionary:"典",stats:"▥",about:"ℹ"}[e]||"?"}function Tm(e){return`
      <li class="site-footer-link-item">
        <button class="site-footer-link site-footer-link--nav" type="button" data-action="route" data-route="${f(e)}">
          <span class="site-footer-link-icon" aria-hidden="true">${i(Im(e))}</span>
          <span>${i(bi(e))}</span>
        </button>
      </li>
    `}function Rm(){const e=p()==="ru",t=new Date().getFullYear(),n=e?"Спокойная лунная комната для кандзи, уроков и повторений.":"A calm moonlit room for kanji, lessons, and steady reviews.",s=e?"Навигация":"Navigation",a=e?"Соцсети":"Social";return`
      <footer class="seo-footer site-footer" aria-label="${f(e?"Подвал сайта":"Site footer")}">
        <div class="site-footer-grid">
          <section class="site-footer-brand" aria-label="${f(e?"О проекте":"About Flash Kanji")}">
            <span class="pill">Flash Kanji</span>
            <p class="site-footer-blurb">${i(n)}</p>
          </section>
          <div class="site-footer-columns">
            <section class="site-footer-section">
              <h2>${i(s)}</h2>
              <ul class="site-footer-nav" aria-label="${f(s)}">
                ${Am().map(o=>Tm(o)).join("")}
              </ul>
            </section>
            <section class="site-footer-section">
              <h2>${i(a)}</h2>
              <div class="site-footer-socials" aria-label="${f(e?"Социальные ссылки":"Social links")}">
                <a class="btn ghost footer-social-link" href="${f(Fo.youtube)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${Bu("youtube")}</span>
                  <span>YouTube</span>
                </a>
                <a class="btn ghost footer-social-link" href="${f(Fo.instagram)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${Bu("instagram")}</span>
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
    `}function _m(){return p()==="ru"?{eyebrow:"О проекте",title:"О Flash Kanji",lead:"О Flash Kanji — это образовательный проект для изучения японского языка через кандзи, чтение, примеры и визуальную память.",heroTitle:"Спокойное пространство, куда хочется возвращаться каждый день",heroLead:"Идея проекта простая: сделать обучение японскому не сухой таблицей символов, а живым пространством, где кандзи складываются в привычку.",paragraphs:["Здесь кандзи изучаются постепенно — от базовых уровней до более сложных, с примерами, чтениями, ассоциациями и практикой.","Flash Kanji создан для тех, кто хочет учить японский с нуля или системно прокачивать уже имеющиеся знания.","Проект помогает запоминать иероглифы, понимать их значения, видеть реальные примеры использования и выстраивать привычку регулярного обучения.","В центре Flash Kanji — атмосфера спокойного цифрового кабинета, где обучение похоже не на экзамен, а на личный путь.","Здесь есть карточки, уроки, словарь, повторение, практика написания и визуальные элементы, которые помогают удерживать внимание."],sectionTitle:"Как устроен Flash Kanji",highlightTitle:"Что помогает удерживать ритм",highlightPoints:["Учебники JLPT N5-N1 с постепенным входом в материал.","Карточки с кандзи, чтениями и примерами.","SRS-повторение, чтобы не терять выученное.","Практика письма и тестовые упражнения.","Персонаж-наставник Eva и спокойная визуальная среда."],closing:"Flash Kanji — изучай японский в своей лунной комнате.",textbooks:"К учебникам",review:"К повторению",home:"На главную",evaRoom:"Комната Евы"}:{eyebrow:"About",title:"About Flash Kanji",lead:"Flash Kanji is an educational project for learning Japanese through kanji, readings, examples, and visual memory.",heroTitle:"A quiet place you will want to return to every day",heroLead:"The idea is simple: make Japanese feel less like a dry table of symbols and more like a living space where kanji turn into habit.",paragraphs:["Kanji are introduced gradually, from the basic levels to more advanced ones, with examples, readings, associations, and practice.","Flash Kanji is for people starting Japanese from zero and for learners who want a steady system to grow existing knowledge.","The project helps you remember characters, understand what they mean, see real usage, and build a consistent study routine.","At the center of Flash Kanji is the atmosphere of a calm digital study room, where learning feels like a personal journey rather than an exam.","You get cards, lessons, a dictionary, review, writing practice, and visual elements that help keep attention in place."],sectionTitle:"How Flash Kanji is built",highlightTitle:"What keeps the rhythm going",highlightPoints:["JLPT N5-N1 textbooks with a gradual path into the material.","Cards with kanji, readings, and examples.","SRS review so learned items stay in memory.","Writing practice and test exercises.","Eva as a mentor and a calm visual study space."],closing:"Flash Kanji — study Japanese in your own moonlit room.",textbooks:"Textbooks",review:"Review",home:"Home",evaRoom:"Eva room"}}function Mm(){const e=_m();return`
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
    `}function Pm(){const e=tc(r.navMenu);if(!e.length)return"";const t=r.navMenu,n=t?bi(t):"";return`
      <aside class="nav-popover" role="menu" aria-label="${f(n)}">
        <div class="nav-popover-head">
          <strong>${i(n)}</strong>
          <button class="icon-btn nav-popover-close" type="button" data-action="close-nav-menu" aria-label="${f(p()==="ru"?"Закрыть меню":"Close menu")}">✕</button>
        </div>
        <div class="nav-popover-list">
          ${e.map(s=>`
            <button class="nav-popover-item" type="button" role="menuitem" ${s.action?`data-action="${f(s.action)}"${s.jlpt?` data-jlpt="${f(s.jlpt)}"`:""}`:`data-action="nav-menu-route" data-route="${f(s.route)}" data-focus="${f(s.focus)}"`}>
              <span>${i(s.icon)}</span>
              <b>${i(s.title)}</b>
              <small>${i(s.text)}</small>
            </button>
          `).join("")}
        </div>
      </aside>
    `}function Em(){if(!r.pendingFocus)return;const e=r.pendingFocus;if(r.pendingFocus=null,e==="__scroll-top__"){Mt();return}const t={"lesson-card":".study-card, .daily-lesson-card","lesson-tabs":".lesson-tabs","review-card":"[data-section='review-card']","sentence-practice":"[data-section='sentence-practice']","writing-demo":"[data-section='writing-demo']","writing-canvas":"[data-section='writing-canvas']","eva-room":".eva-room-entry, .eva-room-page, .eva-room-shell",about:".about-page","stats-top":".metric-grid","achievements-top":".achievements-page .metric-grid","shop-panel":"[data-section='shop-panel']"},n=document.querySelector(t[e]||e);n&&(n.scrollIntoView({behavior:"smooth",block:"start"}),n.classList.add("is-focus-pulse"),window.setTimeout(()=>n.classList.remove("is-focus-pulse"),900))}function Dm(){Ga(".nav-btn").forEach(t=>{const n=t.dataset.route,s=n===r.route||n==="learn"&&r.route==="textbooks"||n==="stats"&&r.route==="achievements"||n==="dictionary"&&r.route==="kanji";t.classList.toggle("is-active",s),t.classList.toggle("has-menu",!!t.closest(".bottom-nav")&&Ir(n)),t.setAttribute("aria-expanded",r.navMenu===n?"true":"false"),s?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current");const a=t.querySelector("small");a&&n&&(a.textContent=bi(n))});const e=ge('[data-action="language"]');e&&(e.textContent=p().toUpperCase()),jo(),A$(),So(),Om()}function Om(){const e=ge("#sidebarProgressBar"),t=ge("#sidebarProgressLabel"),n=ge("#sidebarProgressPercent"),s=ge("#sidebarProgressNote"),a=ge("#sidebarUserAvatar"),o=ge("#sidebarUserTitle"),l=ge("#sidebarUserSubtitle"),c=jt(),d=Dl(),u=Ne(),m=Math.max(1,Number(r.progress?.level||1)),g=Math.max(0,Math.min(100,Math.round(c.percent||0)));e&&(e.max=100,e.value=g),t&&(t.textContent=`${p()==="ru"?"Уровень":"Level"} ${m}`),n&&(n.textContent=`${g}%`),s&&(s.textContent=u>0?`${u} ${V().reviewQueue} · ${d.title||V().mapHint}`:`${d.title||V().mapHint}${d.summary?` · ${d.summary}`:""}`),a&&(a.textContent=`N${m}`),o&&(o.textContent=(p()==="ru","Flash Kanji")),l&&(l.textContent=`${V().level} ${m} · ${r.progress?.streak?.current||0} ${V().streak}`)}function Km(){r.n5Textbook?.items?.length||li();const e=Bm(),t=zg(),n=Ne(),s=Dl(),a=Ug(),o=V(),l=jt(),c=Math.max(0,Math.min(100,Math.round(l.percent||0))),d=p()==="ru",u=d?[{action:"home-review",icon:"↻",title:"Повторение",detail:n>0?`${n} карточек ждут тебя.`:"Очередь пуста, но тренировка всегда под рукой.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:r.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Комната Евы",detail:"Диалоги, фон и Moon Fragments.",count:r.progress.moonFragments}]:[{action:"home-review",icon:"↻",title:"Review",detail:n>0?`${n} cards are waiting.`:"The queue is empty, but practice is always ready.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:r.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Eva Room",detail:"Dialogue, backgrounds, and Moon Fragments.",count:r.progress.moonFragments}],m=Qu();return`
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
              <button class="btn primary home-primary-cta" type="button" data-action="home-lesson" data-tour="home-lesson" data-level="${f(t.level)}" data-lesson-id="${f(t.lessonId||"")}">${i(t.label)}</button>
              ${n>0?`<button class="btn ghost home-primary-cta" type="button" data-action="home-review" data-tour="home-review">${i(d?`Повторить: ${n}`:`Review: ${n}`)}</button>`:""}
            </div>
            <div class="home-hero-progress" aria-label="${f(o.level)}">
              <progress class="progress-line" max="100" value="${f(String(c))}">0%</progress>
              <b>${i(`${c}%`)}</b>
            </div>
          </div>
        </article>
        <section class="metric-grid home-metrics" aria-label="${f(o.route)}">
          ${a.map(Gg).join("")}
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
                ${qg().map(Hg).join("")}
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
                ${u.map(Xg).join("")}
              </div>
            </article>
            ${tr()?"":`
              <article class="study-card home-install-card">
                <button class="btn ghost" type="button" data-action="pwa-install">${i(m.install)}</button>
                <p class="home-install-hint">${i(m.description)}${rs()?` ${i(m.iosInstruction)}`:""}</p>
              </article>
            `}
          </div>
          <aside class="home-dashboard-side">
            ${Jm(e)}
          </aside>
        </section>
      </section>
    `}function Bm(){Fm();const e=G(),t=e.currentLine||r.evaRuntime?.currentPhrase||null,n=Kr(),s=h(ss("eva").name||{ru:"Ева",en:"Eva"}),a=r.evaRuntime?.mood||e.mood||it().mood,o=r.evaRuntime?.emotion||e.emotion||t?.emotion||"calm",l=t?.state||r.evaRuntime?.presenceState||(n?"wait_choice":"speak"),c=Kn(t?.sprite||r.evaRuntime?.currentSkin||ki());return{line:t,question:n,speaker:s,mood:a,emotion:o,presenceState:l,sprite:c}}function Fm(){Y();const e=G();return e.currentLine?.text||r.evaRuntime?.currentPhrase?.text?e.currentLine||r.evaRuntime.currentPhrase:(Nc("manual"),G().currentLine||r.evaRuntime?.currentPhrase||null)}function Jm(e){const t=Et(),n=Pt(),s=e.question?p()==="ru"?"Вопрос":"Question":p()==="ru"?"Диалог":"Dialogue",a=e.line||{text:{ru:"Я здесь.",en:"I'm here."}},o=a.id||"home_eva_line";return`
      <section class="home-eva-vn" role="region" aria-label="${f(p()==="ru"?"Диалог Евы":"Eva dialogue")}" data-home-eva-mode="${f(e.question?"question":"dialogue")}" data-eva-state="${f(e.presenceState)}" data-eva-mood="${f(e.mood)}" data-eva-emotion="${f(e.emotion)}">
        <div class="home-eva-copy">
          <div class="home-eva-meta">
            <strong>${i(e.speaker)}</strong>
            <span class="pill">${i(s)}</span>
          </div>
          ${rc(h(a.text||{ru:"Я здесь.",en:"I'm here."}),o)}
          ${e.question?`
            <div class="eva-question-box home-eva-question">
              <span class="pill">${i(n.question)}</span>
              <strong>${i(h(e.question.text))}</strong>
              <div class="eva-choice-grid">
                ${e.question.options.map(l=>`
                  <button class="btn ${l.id===e.question.options[0]?.id?"primary":"ghost"}" type="button" data-action="eva-question-answer" data-option="${f(l.id)}">
                    ${i(h(l.text))}
                  </button>
                `).join("")}
              </div>
            </div>
          `:`
            <div class="home-eva-actions">
              <button class="btn primary" type="button" data-action="eva-autonomy-next" aria-label="${f(t.nextAutonomyLine)}" title="${f(t.nextAutonomyLine)}">→</button>
            </div>
          `}
        </div>
        <button class="home-eva-avatar" type="button" data-action="eva-click" data-character="eva" aria-label="${f(e.speaker)}">
          <img class="${f(sc({line:e.line,isAutonomy:!0}))}" src="${f(e.sprite)}" alt="${f(e.speaker)}" loading="eager" decoding="async" onerror="this.src='assets/mascots/eva_normal.webp'" />
        </button>
      </section>
    `}function nc(e){return e.line?.state||r.evaRuntime?.presenceState||(e.isAutonomy?"speak":"wait_choice")}function sc(e){const t=["eva-vn-sprite"],n=nc(e);return["speak","soften","warning"].includes(n)&&t.push("is-speaking"),(["react","warning"].includes(n)||Date.now()-Number(r.evaRuntime?.lastVisualChangeAt||0)<1400)&&t.push("is-reacting"),n==="quiet"&&t.push("is-quiet"),t.join(" ")}function zm(e){const t=String(e||"").trim();return t?(t.match(/[^.!?гЂ'пјЃпјџ]+[.!?гЂ'пјЃпјџ]?/g)||[t]).map(s=>s.trim()).filter(Boolean):[]}function rc(e,t=""){const n=zm(e),a=`eva-dialogue-text ${r.evaRuntime?.textRevealSkippedLineId===t?"is-skipped":""}`,o=n.length?n.map((l,c)=>`<span class="eva-line-piece" style="--i:${c}">${i(l)}</span>`).join(" "):i(e);return`<p class="${a}" data-action="eva-dialogue-skip" data-line-id="${f(t)}">${o}</p>`}function Um(){Y(),ys(),Cs(),U();const e=Ef(),t=e.node,n=wt()||e.bg||Dn(t.background),s=e.sprite||e.spriteSrc||Kn(e.spriteId||Dt(t.sprite)),a=Et(),o=Pt(),l=Array.isArray(t.choices)?t.choices:[],c=nc(e),d=e.line?.id||t.id||"eva_dialogue";return`
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

        ${af()}
        ${nf(e)}
        <article class="eva-vn-scene ${e.isAutonomy?"is-autonomous":""} is-${f(c)}" data-eva-state="${f(c)}" data-eva-mood="${f(e.mood||it().mood)}" data-eva-emotion="${f(e.emotion||"calm")}" style="--eva-bg:url('${f(n.file)}')">
          <div class="eva-vn-bg" aria-hidden="true"></div>
          <button class="eva-sprite-button" type="button" data-action="eva-click" aria-label="${f(h(t.speaker||{ru:"Ева",en:"Eva"}))}">
            <img class="${f(sc(e))}" src="${f(s)}" alt="${f(h(t.speaker||{ru:"Ева",en:"Eva"}))}" onerror="this.src='assets/mascots/eva_normal.webp'" />
          </button>
          ${qm(e)}
          <div class="eva-dialogue-box">
            <div class="eva-dialogue-meta">
              <strong>${i(h(t.speaker||{ru:"Ева",en:"Eva"}))}</strong>
              <span>${e.isAutonomy?`${i(o.badge)} · `:""}${i(h(n.title||{}))}</span>
            </div>
            ${rc(h(t.text||{}),d)}
            ${e.isAutonomy?sf(a):`
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

        ${r.evaRoomShopOpen?Gm():""}
      </section>
    `}function Gm(){const e=Et();return`
      <aside class="eva-shop-panel customization-shop-panel" role="dialog" aria-label="${f(e.shop)}">
        ${ac({closable:!0})}
      </aside>
    `}function qm(e={}){const t=Hm(e);return t?`
      <div class="eva-room-decoration deco-${f(t.id)}" aria-label="${f(Ve(t))}">
        <img src="${f(t.asset||t.preview)}" alt="" loading="lazy" />
      </div>
    `:""}function Hm(e={}){const t=e.decoration||G().currentDecoration||r.customization?.selected?.decoration||r.customization?.selected?.frame,n=ne(t);return!n||n.type!=="decoration"||!ot(n.id)?null:n}function ac(e={}){const t=En(),n=Vm(),s=Oe().filter(a=>ot(a.id)).length;return`
      <div class="custom-shop">
        <div class="custom-shop-hero">
          <div>
            <span class="pill">${i(t.subtitle)}</span>
            <h2>${i(t.title)}</h2>
            <p>${i(t.hint)}</p>
            <div class="custom-shop-stats">
              <span><b>${r.progress.moonFragments}</b> Moon</span>
              <span><b>${s}</b>/${Oe().length} ${i(t.ownedShort)}</span>
            </div>
          </div>
          ${e.closable?`<button class="icon-btn" type="button" data-action="eva-room-shop-close" aria-label="${f(Et().close)}">✕</button>`:""}
        </div>
        <div class="custom-shop-tabs" role="tablist" aria-label="${f(t.categories)}">
          ${Xm().map(a=>`
            <button class="${r.shopFilters.category===a.id?"is-active":""}" type="button" data-action="shop-category" data-category="${f(a.id)}">
              ${i(h({ru:a.title_ru,en:a.title_en}))}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls">
          ${Qm().map(a=>`
            <button class="${r.shopFilters.view===a.id?"is-active":""}" type="button" data-action="shop-filter" data-filter="${f(a.id)}">
              ${i(a.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls custom-shop-sort">
          ${Wm().map(a=>`
            <button class="${r.shopFilters.sort===a.id?"is-active":""}" type="button" data-action="shop-sort" data-sort="${f(a.id)}">
              ${i(a.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-grid">
          ${n.map(Ym).join("")||`<article class="empty-state"><h3>${i(t.empty)}</h3></article>`}
        </div>
        <div class="custom-shop-history">
          ${qd({limit:6})}
        </div>
      </div>
    `}function Xm(){return r.customizationCatalog?.categories?.length?r.customizationCatalog.categories:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}]}function Qm(){const e=p()==="ru";return[{id:"all",title:e?"Все":"All"},{id:"available",title:e?"Доступные":"Available"},{id:"owned",title:e?"Купленные":"Owned"},{id:"new",title:e?"Новые":"New"}]}function Wm(){const e=p()==="ru";return[{id:"featured",title:e?"Рекомендовано":"Featured"},{id:"price",title:e?"По цене":"By price"},{id:"rarity",title:e?"По редкости":"By rarity"}]}function Vm(){const e=r.shopFilters.category||"all",t=r.shopFilters.view||"all",n={common:1,rare:2,epic:3,legendary:4,mythic:5};let s=Oe().filter(a=>e==="all"||a.type===e);return t==="available"&&(s=s.filter(a=>$c(a)==="available")),t==="owned"&&(s=s.filter(a=>ot(a.id))),t==="new"&&(s=s.filter(a=>!r.customization?.seen?.includes(a.id))),r.shopFilters.sort==="price"&&(s=[...s].sort((a,o)=>a.price-o.price)),r.shopFilters.sort==="rarity"&&(s=[...s].sort((a,o)=>(n[o.rarity]||0)-(n[a.rarity]||0)||a.price-o.price)),s}function Ym(e){const t=$c(e),n=En(),s=n.status[t]||t,a=Hf(e),o=t==="available"?`<button class="btn primary" type="button" data-action="shop-buy" data-id="${f(e.id)}">${i(n.buy)}</button>`:t==="owned"?`<button class="btn" type="button" data-action="shop-select" data-id="${f(e.id)}">${i(n.select)}</button>`:t==="selected"?`<button class="btn warning" type="button" data-action="shop-clear-item" data-id="${f(e.id)}">${i(n.remove)}</button>`:`<button class="btn" type="button" disabled>${i(n.unavailable)}</button>`;return`
      <article class="custom-shop-card type-${f(e.type)} is-${f(t)} rarity-${f(e.rarity)}">
        <div class="custom-shop-preview">
          <img src="${f(e.preview||e.asset)}" alt="${f(Ve(e))}" loading="lazy" onerror="this.closest('.custom-shop-card').classList.add('is-missing')" />
          <span class="rarity-badge">${i(ef(e.rarity))}</span>
        </div>
        <div class="custom-shop-card-body">
          <div class="custom-shop-title-row">
            <strong>${i(Ve(e))}</strong>
            <span class="status-badge">${i(s)}</span>
          </div>
          ${e.stars?`<div class="custom-shop-stars" aria-label="${f(`${e.stars} stars`)}">${i("★".repeat(Math.max(1,Math.min(5,Number(e.stars)||1))))}</div>`:""}
          <p>${i(Zm(e))}</p>
          ${e.type==="outfit"&&ic(e)?`<blockquote class="custom-shop-phrase">${i(ic(e))}</blockquote>`:""}
          ${a?`<small class="custom-shop-unlock">${i(a)}</small>`:""}
          <div class="custom-shop-price">
            <span>${e.price?`${e.price} Moon`:n.free}</span>
            <small>${i(tf(e.type))}</small>
          </div>
          ${o}
        </div>
      </article>
    `}function En(){return p()==="ru"?{title:"Магазин кастомизации",subtitle:"Flash Kanji Custom",hint:"Фоны, образы Евы, декор, темы и эффекты за Moon Fragments.",categories:"Категории магазина",ownedShort:"куплено",buy:"Купить",select:"Выбрать",remove:"Убрать",selected:"Выбран",unavailable:"Недоступно",free:"Бесплатно",locked:"Предмет пока недоступен.",notEnough:"Не хватает Moon Fragments.",bought:"Куплено: {item}",selectedToast:"Выбрано: {item}",empty:"Нет предметов по этому фильтру.",status:{selected:"Выбран",owned:"Куплено",available:"Доступно",locked:"Закрыто"}}:{title:"Customization Shop",subtitle:"Flash Kanji Custom",hint:"Backgrounds, Eva outfits, room decor, themes, and effects for Moon Fragments.",categories:"Shop categories",ownedShort:"owned",buy:"Buy",select:"Select",remove:"Remove",selected:"Selected",unavailable:"Unavailable",free:"Free",locked:"This item is not available yet.",notEnough:"Not enough Moon Fragments.",bought:"Bought: {item}",selectedToast:"Selected: {item}",empty:"No items match this filter.",status:{selected:"Selected",owned:"Owned",available:"Available",locked:"Locked"}}}function Ve(e){return p()==="en"?e.title_en||e.title_ru||e.id:e.title_ru||e.title_en||e.id}function Zm(e){return p()==="en"?e.description_en||e.description_ru||"":e.description_ru||e.description_en||""}function ic(e){return p()==="en"?e.phrase_en||e.phrase_ru||"":e.phrase_ru||e.phrase_en||""}function ef(e){return{common:(p()==="ru","Common"),rare:(p()==="ru","Rare"),epic:(p()==="ru","Epic"),legendary:(p()==="ru","Legendary"),mythic:(p()==="ru","Mythic")}[e]||e}function tf(e){const t=p()==="ru";return{background:t?"Фон":"Background",outfit:t?"Образ":"Outfit",decoration:t?"Декор":"Decoration",theme:t?"Тема":"Theme",effect:t?"Эффект":"Effect"}[e]||e}function nf(e){Et();const t=Pt(),n=G(),s=e.bg||wt(),a=lc(e.spriteId||r.progress.selectedEvaSprite),o=ne(r.customization?.selected?.effect),l=ne(e.decoration||n.currentDecoration),c=rf(e.mood||n.mood),d=Kl();return`
      <aside class="eva-autonomy-panel eva-live-status" data-eva-lines="${r.evaAutonomyLines.length}" data-eva-current="${f(n.currentLine?.id||"")}">
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
          ${l?`<span>${i(Ve(l))}</span>`:""}
          ${o?`<span class="eva-active-effect-chip">${i(Ve(o))}<button type="button" class="eva-active-effect-clear" data-action="shop-clear-effect" data-id="${f(o.id)}" aria-label="${f(p()==="ru"?"Убрать эффект":"Remove effect")}">✕</button></span>`:""}
        </div>
      </aside>
    `}function sf(e){const t=Pt(),n=Kr();return n?.id?`
        <div class="eva-question-box">
          <span class="pill">${i(t.question)}</span>
          <strong>${i(h(n.text))}</strong>
          <div class="eva-choice-grid">
            ${n.options.map(s=>`
              <button class="btn ${s.id===n.options[0]?.id?"primary":"ghost"}" type="button" data-action="eva-question-answer" data-option="${f(s.id)}">
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
    `}function Pt(){return p()==="ru"?{badge:"Ева рядом",status:"Ева держит присутствие в комнате",hint:"Она помнит паузы, выбирает тон по контексту и реагирует открытыми образами без лишнего шума.",mood:"Настроение",quiz:"Вопросы",quizStreak:"Серия",question:"Вопрос Евы"}:{badge:"Eva nearby",status:"Eva keeps presence in the room",hint:"She remembers gaps, chooses tone from context, and reacts with unlocked looks without extra noise.",mood:"Mood",quiz:"Questions",quizStreak:"Streak",question:"Eva's question"}}function rf(e){const n=p()==="ru"?{neutral:"Ровное настроение",focused:"Собрана",soft:"Мягче обычного",strict:"Строгая",tired:"Немного устала",happy:"Довольна прогрессом",serious:"Серьёзна",mystic:"Лунное настроение",cyber:"Анализирует",travel:"Вспоминает дороги",quiet:"Молчит рядом",curious:"Заинтересована",close:"Близость",proud:"Гордится тобой",worried:"Беспокоится",reserved:"Держит дистанцию"}:{neutral:"Steady mood",focused:"Focused",soft:"Softer than usual",strict:"Strict",tired:"A little tired",happy:"Pleased with progress",serious:"Serious",mystic:"Moonlit mood",cyber:"Analyzing",travel:"Thinking of old roads",quiet:"Quiet nearby",curious:"Interested",close:"Close",proud:"Proud of you",worried:"Worried",reserved:"Reserved"};return n[e]||n.neutral}function af(){const e=it(),t=Et(),n=t.moods[e.mood]||t.moods.neutral,s=[["warmth",t.warmth,e.warmth],["trust",t.trust,e.trust],["discipline",t.discipline,e.discipline],["curiosity",t.curiosity,e.curiosity]];return`
      <aside class="eva-relationship-panel" aria-label="${f(t.relationship)}">
        <div class="eva-relationship-head">
          <span>${i(t.relationship)}</span>
          <strong>${i(n)}</strong>
        </div>
        <div class="eva-relationship-grid">
          ${s.map(([a,o,l])=>`
            <div class="eva-relationship-stat eva-stat-${a}">
              <div><span>${i(o)}</span><strong>${Math.round(l)}</strong></div>
              <i><b style="width:${Z(l,0,100)}%"></b></i>
            </div>
          `).join("")}
        </div>
      </aside>
    `}function Et(){return p()==="ru"?{back:"На главную",shop:"Магазин Евы",close:"Закрыть",shopHint:"Покупай комнаты и образы Евы за Moon Fragments.",buy:"Купить",select:"Выбрать",selected:"Выбран",free:"Открыто",restart:"Начать диалог заново",study:"К уроку",review:"К повтору",notEnough:"Не хватает Moon Fragments.",bought:"Фон открыт.",selectedToast:"Фон выбран.",reward:"Ева дала Moon Fragments.",roomShopTitle:"Комнаты",spriteShopTitle:"Образы Евы",spriteBought:"Образ Евы открыт.",spriteSelected:"Образ Евы выбран.",autonomyBadge:"Ева рядом",autonomyShortOn:"Ева · авто",autonomyShortOff:"Ева · тихо",autonomyOn:"Ева рядом",autonomyOff:"Ева рядом",autonomyHint:"Ева сама выбирает реплики, настроение, комнату и образ без спойлеров FIS.",autonomySettingsHint:"Самостоятельные реплики Евы в комнате, без раскрытия сюжета.",enableAutonomy:"Ева рядом",disableAutonomy:"Ева рядом",changeFrequency:"Статус Евы",frequency:"Частота",frequencies:{quiet:"тихо",normal:"нормально",active:"часто"},roomMode:"Комната",outfitMode:"Образ",roomModeButton:"Комната Евы",outfitModeButton:"Образ Евы",auto:"авто",manual:"ручной",nextAutonomyLine:"Ещё мысль.",storyDialogue:"Вернуться к диалогу.",relationship:"Отношения с Евой",warmth:"Тепло",trust:"Доверие",discipline:"Дисциплина",curiosity:"Интерес",moreTalk:"Ещё реплика",anotherTalk:"Другая тема",moods:{neutral:"Ровное настроение",close:"Близость",proud:"Гордится тобой",curious:"Заинтересована",worried:"Беспокоится",reserved:"Держит дистанцию"}}:{back:"Home",shop:"Eva Shop",close:"Close",shopHint:"Buy rooms and Eva looks with Moon Fragments.",buy:"Buy",select:"Select",selected:"Selected",free:"Unlocked",restart:"Restart dialogue",study:"Study",review:"Review",notEnough:"Not enough Moon Fragments.",bought:"Background unlocked.",selectedToast:"Background selected.",reward:"Eva gave you Moon Fragments.",roomShopTitle:"Rooms",spriteShopTitle:"Eva Looks",spriteBought:"Eva look unlocked.",spriteSelected:"Eva look selected.",autonomyBadge:"Eva nearby",autonomyShortOn:"Eva · auto",autonomyShortOff:"Eva · quiet",autonomyOn:"Eva nearby",autonomyOff:"Eva nearby",autonomyHint:"Eva chooses lines, mood, room, and look by herself without FIS spoilers.",autonomySettingsHint:"Independent Eva lines in her room, without story spoilers.",enableAutonomy:"Eva nearby",disableAutonomy:"Eva nearby",changeFrequency:"Eva status",frequency:"Frequency",frequencies:{quiet:"quiet",normal:"normal",active:"active"},roomMode:"Room",outfitMode:"Look",roomModeButton:"Eva room",outfitModeButton:"Eva look",auto:"auto",manual:"manual",nextAutonomyLine:"Another thought.",storyDialogue:"Back to dialogue.",relationship:"Relationship with Eva",warmth:"Warmth",trust:"Trust",discipline:"Discipline",curiosity:"Interest",moreTalk:"Another line",anotherTalk:"Different topic",moods:{neutral:"Steady mood",close:"Close",proud:"Proud of you",curious:"Interested",worried:"Worried",reserved:"Reserved"}}}function Y(){r.progress.seenCards||={},r.progress.seenKanji||={},r.progress.unlockedBackgrounds||=["bg_study_hub"],r.progress.unlockedBackgrounds.includes("bg_study_hub")||r.progress.unlockedBackgrounds.unshift("bg_study_hub"),r.progress.selectedEvaRoomBackground||="bg_study_hub",r.progress.unlockedEvaSprites||=["idle","default"],["idle","default"].forEach(t=>{r.progress.unlockedEvaSprites.includes(t)||r.progress.unlockedEvaSprites.push(t)}),r.progress.selectedEvaSprite||="idle";const e=Il(Ll(),r.progress.evaAutonomy||{});if(r.progress.evaAutonomy||={},Object.keys(r.progress.evaAutonomy).forEach(t=>delete r.progress.evaAutonomy[t]),Object.assign(r.progress.evaAutonomy,e),r.evaRuntime||=at(),r.progress.evaRoomDialogueProgress||={currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]},r.progress.evaRoomDialogueProgress.currentNode||="intro",r.progress.evaRoomDialogueProgress.rewardsClaimed||={},r.progress.evaRoomDialogueProgress.visited||={},r.progress.evaRoomDialogueProgress.lineHistory=Array.isArray(r.progress.evaRoomDialogueProgress.lineHistory)?r.progress.evaRoomDialogueProgress.lineHistory.slice(-24):[],r.progress.evaRoomQuiz||={answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]},r.progress.evaRoomQuiz.rewarded||={},r.progress.evaRoomQuiz.history=Array.isArray(r.progress.evaRoomQuiz.history)?r.progress.evaRoomQuiz.history.slice(0,40):[],!r.progress.evaRelationship)r.progress.evaRelationship=si();else{const t=Al(si(),r.progress.evaRelationship);Object.keys(r.progress.evaRelationship).forEach(n=>delete r.progress.evaRelationship[n]),Object.assign(r.progress.evaRelationship,t)}}function it(){return Y(),r.progress.evaRelationship}function ys(){if(!r.progress||!r.cards.length)return!1;Y();const e=r.progress.evaRelationship;let t=!1;const n=W(),s=e.lastDecayDate||n,a=Math.max(0,tn(s,n));if(a>0){const k=r.progress.streak?.lastStudyDate,D=k?tn(k,n):a+1;!k||D>1?(ce({warmth:-Math.min(10,a*1.2),trust:-Math.min(14,a*1.6),discipline:-Math.min(22,a*3.4)},"study_gap",{silent:!0}),t=!0):(r.progress.streak?.current||0)>0&&(ce({discipline:.8,trust:.4},"streak_kept",{silent:!0}),t=!0),e.lastDecayDate=n}const o=lo(),l={learned:o.learned,mastered:o.mastered,reviews:co(),lessons:Object.keys(r.progress.lessonCompletions||{}).length,streak:Math.max(r.progress.streak?.current||0,r.progress.streak?.best||0),wrong:r.progress.totalWrong||0,writing:r.progress.writingPractice?.completed||0,sentence:Object.keys(r.progress.sentencePractice?.completed||{}).length},c=e.lastKnown||{},d=k=>Math.max(0,Number(l[k]||0)-Number(c[k]||0)),u={},m=d("reviews"),g=d("learned"),w=d("mastered"),v=d("lessons"),$=d("streak"),y=d("wrong"),x=d("writing"),b=d("sentence");return m&&(u.discipline=(u.discipline||0)+Math.min(18,m*.08),u.trust=(u.trust||0)+Math.min(10,m*.04)),g&&(u.trust=(u.trust||0)+Math.min(20,g*.5),u.curiosity=(u.curiosity||0)+Math.min(16,g*.35)),w&&(u.trust=(u.trust||0)+Math.min(16,w*1.2),u.warmth=(u.warmth||0)+Math.min(8,w*.5)),v&&(u.warmth=(u.warmth||0)+Math.min(12,v*2),u.discipline=(u.discipline||0)+Math.min(10,v*1.5)),$&&(u.discipline=(u.discipline||0)+Math.min(15,$*3),u.warmth=(u.warmth||0)+Math.min(8,$)),x&&(u.curiosity=(u.curiosity||0)+Math.min(10,x*.8)),b&&(u.trust=(u.trust||0)+Math.min(10,b*.8)),y&&(u.discipline=(u.discipline||0)-Math.min(6,y*.12)),Object.keys(u).length&&(ce(u,"learning_progress",{silent:!0}),t=!0),e.lastKnown=l,oc(),t}function ce(e={},t="relationship",n={}){Y();const s=r.progress.evaRelationship;return["warmth","trust","discipline","curiosity"].forEach(a=>{typeof e[a]>"u"||(s[a]=as(Z(Number(s[a]||0)+Number(e[a]||0),0,100),1))}),oc(),n.silent||(s.history.unshift({at:new Date().toISOString(),reason:t,delta:e}),s.history=s.history.slice(0,40)),s}function oc(){const e=r.progress.evaRelationship;return e.discipline<25?e.mood="worried":e.trust<30?e.mood="reserved":e.warmth>=76&&e.trust>=68?e.mood="close":(r.progress.streak?.current||0)>=7&&e.discipline>=58?e.mood="proud":e.curiosity>=68?e.mood="curious":e.mood="neutral",e.mood}function ki(){const e=r.customization?.selected?.outfit||r.progress?.shop?.equipped?.outfit||null,n=ne(e)?.spriteId||r.progress?.selectedEvaSprite||"idle";return r.evaSprites?.[n]&&Rr(n)?n:"idle"}function of(e){const t=String(e||"");return new Set(["normal","neutral","idle","default","welcome","happy","soft_smile","gentle_smile","sad","angry","shy","think","thinking","focus","observe","observation","explain","teach","ready","reading","serious","strict","determined","tired","surprised","cold","proud","approve","confirm","achievement","reward","review","correct","levelup","writing","calm","tea","speaking"]).has(t)}function Dt(e,t=null){const n=e&&e!=="relationship"?String(e):null,s=ki(),a=of(n),o=n&&!a?n:s,l=r.evaRuntime?.mood||it().mood,c=t||(a?n:null)||r.evaRuntime?.emotion||{close:"shy",proud:"approve",curious:"thinking",worried:"sad",reserved:"idle",neutral:"idle"}[l]||"idle",d=pf(c),u=[...new Set([o,s].filter(Boolean))];return[...u.flatMap(w=>lf(w,d)),...u,...d,"idle","default"].filter(Boolean).find(w=>r.evaSprites?.[w]&&(Rr(w)||!o||Rr(o)))||"idle"}function lf(e,t=[]){const n=String(e||"");if(!n)return[];const s=t.map(o=>`${n}_${o}`).filter(o=>r.evaSprites?.[o]),a=pn(n);return!a||a.defaultOwned||s.length<=1?s:cf(s)}function cf(e=[]){const t=[...new Set(e.filter(Boolean))];if(t.length<=1)return t;const n=Fa%t.length;return[...t.slice(n),...t.slice(0,n)]}function df(){const e=ki(),t=pn(e);return!t||t.defaultOwned?!1:Object.keys(r.evaSprites||{}).some(n=>n.startsWith(`${e}_`))}function uf(){Ba&&window.clearInterval(Ba),Ba=window.setInterval(()=>{const e=Math.floor(Date.now()/6e4);e!==Fa&&(Fa=e,!(document.hidden||!df())&&(r.route==="home"||r.route==="eva-room")&&j())},3e4)}function pf(e){const t=String(e).toLowerCase(),n={normal:["soft_smile","neutral","observe","idle"],neutral:["neutral","idle","soft_smile"],idle:["neutral","idle"],welcome:["soft_smile","observe","neutral","idle"],happy:["happy","soft_smile","gentle_smile","encourage","approve","proud"],soft_smile:["soft_smile","gentle_smile","happy","shy","approve","neutral"],approve:["approve","confirm","correct","confident","ready","soft_smile"],correct:["correct","confirm","approve","confident","ready","soft_smile"],proud:["proud","confident","approve","determined","soft_smile"],achievement:["achievement","legendary","mythic","reward","proud","approve","ready"],levelup:["levelup","legendary","mythic","determined","proud","ready"],reward:["reward","blessing","soft_smile","happy","approve"],review:["review","reading","ready","explain","think","neutral"],explain:["explain","teach","review","think","reading"],think:["think","thinking","analyze","observe","reading","explain","serious"],thinking:["think","thinking","analyze","observe","reading","explain","serious"],observe:["observe","serious","think","neutral"],ready:["ready","determined","walk","neutral"],serious:["serious","strict","determined","neutral"],strict:["strict","command","angry","serious"],angry:["angry","strict","command","serious"],sad:["sad","tired","cold","serious","neutral"],tired:["tired","cold","neutral"],shy:["shy","soft_smile","gentle_smile","happy"],surprised:["surprised","think","observe"],writing:["writing","teach","explain","ready","think"],focus:["think","observe","ready","serious"],calm:["neutral","idle","soft_smile"]},s=gf(t);return[...new Set([...n[t]||[],t,s,"neutral","idle"].filter(Boolean))]}function gf(e){return{neutral:"idle",idle:"idle",normal:"idle",welcome:"happy",happy:"happy",soft_smile:"shy",thinking:"think",serious:"think",strict:"angry",sad:"sad",shy:"shy",surprised:"think",approve:"approve",explain:"review",ready:"review",tired:"idle",observe:"think",special:"levelup",proud:"proud",calm:"idle"}[e]||"idle"}function G(){return Y(),r.progress.evaAutonomy}function Tr(){const e=G();return e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",!0}function yi(){const e=r.evaBackgrounds?.length?r.evaBackgrounds:[{id:"bg_study_hub",title:{ru:"Учебная комната",en:"Study Hub"},file:"assets/bg/bg_study_hub.webp",price:0,defaultUnlocked:!0}],t=new Set(e.map(s=>s.id)),n=Oe().filter(s=>s.type==="background"&&!t.has(s.id)).map(s=>({id:s.id,title:{ru:s.title_ru,en:s.title_en},file:s.asset||s.preview,price:s.price,defaultUnlocked:s.defaultOwned}));return[...e,...n]}function Dn(e){return yi().find(t=>t.id===e)||yi()[0]}function wt(){Y();const e=r.progress.selectedEvaRoomBackground||r.customization?.selected?.background;return Dn(e)||Dn("bg_study_hub")}function mf(e){const t=Dn(e);return t?t.defaultUnlocked||t.price===0||r.progress.unlockedBackgrounds.includes(t.id):!1}function ff(){const e=Oe().filter(n=>n.type==="outfit").map(n=>({id:n.spriteId||n.id,shopId:n.id,title:{ru:n.title_ru,en:n.title_en},price:n.price,defaultUnlocked:n.defaultOwned})),t=[{id:"idle",title:{ru:"Ева: спокойная",en:"Eva: Calm"},price:0,defaultUnlocked:!0},{id:"default",title:{ru:"Ева: классика",en:"Eva: Classic"},price:0,defaultUnlocked:!0},{id:"think",title:{ru:"Ева: размышление",en:"Eva: Thinking"},price:25},{id:"happy",title:{ru:"Ева: тепло",en:"Eva: Warm"},price:35},{id:"approve",title:{ru:"Ева: наставник",en:"Eva: Mentor"},price:35},{id:"review",title:{ru:"Ева: повторение",en:"Eva: Review"},price:40},{id:"proud",title:{ru:"Ева: гордость",en:"Eva: Proud"},price:45},{id:"shy",title:{ru:"Ева: ближе",en:"Eva: Closer"},price:55},{id:"sad",title:{ru:"Ева: тревога",en:"Eva: Concerned"},price:30},{id:"reward",title:{ru:"Ева: награда",en:"Eva: Reward"},price:50},{id:"achievement",title:{ru:"Ева: достижение",en:"Eva: Achievement"},price:60},{id:"levelup",title:{ru:"Ева: уровень",en:"Eva: Level Up"},price:65}].filter(n=>r.evaSprites?.[n.id]&&!e.some(s=>s.id===n.id));return[...e,...t]}function lc(e){return ff().find(t=>t.id===e)}function Rr(e){if(!e)return!1;const t=lc(e);return!!(t?.defaultUnlocked||t?.price===0||r.progress.unlockedEvaSprites?.includes(e)||r.progress.shop?.owned?.includes(`eva_sprite:${e}`))}function _r(e){Y();const t=r.evaRuntime?.mood||bt(me()),n={close:["bg_cafe","bg_park","bg_eva_room","bg_study_hub"],proud:["bg_practice_room","bg_classroom","bg_moon_room","bg_study_hub"],curious:["bg_library","bg_cyber_room","bg_shrine","bg_study_hub"],worried:["bg_study_hub","bg_evening_street","bg_winter_city"],reserved:["bg_library","bg_silent_road","bg_study_hub"],focused:["bg_classroom","bg_practice_room","bg_study_hub"],soft:["bg_cafe","bg_park","bg_study_hub"],strict:["bg_classroom","bg_silent_road","bg_study_hub"],tired:["bg_cafe","bg_library","bg_study_hub"],happy:["bg_park","bg_cafe","bg_moon_room","bg_study_hub"],serious:["bg_silent_road","bg_library","bg_study_hub"],mystic:["bg_moon_room","bg_shrine","bg_study_hub"],cyber:["bg_cyber_room","bg_library","bg_study_hub"],travel:["bg_silent_road","bg_evening_street","bg_school_street","bg_study_hub"],quiet:["bg_library","bg_study_hub"],neutral:["bg_study_hub","bg_classroom","bg_library","bg_silent_road"]},s=[...e?.preferredBackgrounds||[],...n[t]||n.neutral],a=yi().filter(l=>mf(l.id));return s.map(l=>a.find(c=>c.id===l)).find(Boolean)||Le(a)||wt()}function Mr(e){Y();const t=r.evaRuntime?.mood||bt(me()),n={close:["casual_fox","librarian_eva","shy","idle","approve"],proud:["academy_instructor","moon_priestess","study_session","approve","proud","review"],curious:["librarian_eva","cyber_eva","think","review","idle"],worried:["winter_traveler","fis_mentor","sad","idle","think"],reserved:["silent_road","fis_mentor","idle","default"],focused:["study_session","academy_instructor","review","approve","idle"],soft:["librarian_eva","casual_fox","shy","approve","idle"],strict:["academy_instructor","fis_mentor","angry","think","idle"],tired:["winter_traveler","idle","default"],happy:["happy","proud","approve","casual_fox"],serious:["fis_mentor","silent_road","think","idle"],mystic:["moon_priestess","shrine_maiden","achievement","reward"],cyber:["cyber_eva","think","review"],travel:["silent_road","winter_traveler","fis_mentor"],quiet:["fis_mentor","idle","default"],neutral:["fis_mentor","study_session","librarian_eva","idle","think","review","default"]};return[e?.sprite,...n[t]||n.neutral].filter(Boolean).find(a=>Rr(a)&&r.evaSprites?.[a])||r.progress.selectedEvaSprite||"idle"}function hf(e){return e==="generated_line"?vf():r.evaRoomDialogues.find(t=>t.id===e)||r.evaRoomDialogues[0]||{id:"intro",background:"bg_study_hub",sprite:"relationship",speaker:{ru:"Ева",en:"Eva"},text:{ru:"С возвращением.",en:"Welcome back."},choices:[]}}function vf(){Y();const e=Et(),t=r.progress.evaRoomDialogueProgress.generatedLine||bc("adaptive");return r.progress.evaRoomDialogueProgress.generatedLine=t,{id:"generated_line",background:t.background||wt().id||"bg_study_hub",sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[{text:{ru:e.moreTalk,en:e.moreTalk},randomLine:t.category||"adaptive",relationshipDelta:{warmth:.6,curiosity:.4}},{text:{ru:e.anotherTalk,en:e.anotherTalk},next:"intro",relationshipDelta:{warmth:.2}},{text:{ru:e.study,en:e.study},next:"intro",route:"learn",relationshipDelta:{discipline:1.2,trust:.5}}]}}function Pr(){return Array.isArray(r.evaRoomLines)?r.evaRoomLines:[]}function wf(e="auto"){const t=r.evaPresence?.categoryMap?.[e];return Array.isArray(t)?t:[]}function cc(e){return typeof e>"u"||e===null?[]:Array.isArray(e)?e.map(String):[String(e)]}function bf(e,t=me()){const n=e?.conditions||{},s=(o,l)=>{const c=cc(l);return!c.length||c.includes(String(o))},a=(o,l)=>{const c=cc(l);return!c.length||c.some(d=>String(o||"").includes(d)||d===String(o))};return!(!s(t.route,n.route)||!s(t.timeOfDay,n.timeOfDay)||!a(t.activeSkin,n.activeSkin)||!a(t.activeBackground,n.activeBackground)||typeof n.minGapDays<"u"&&Number(t.daysSinceReturn||0)<Number(n.minGapDays)||typeof n.maxGapDays<"u"&&Number(t.daysSinceReturn||0)>Number(n.maxGapDays)||typeof n.minDueReviews<"u"&&Number(t.dueReviews||0)<Number(n.minDueReviews)||typeof n.maxDueReviews<"u"&&Number(t.dueReviews||0)>Number(n.maxDueReviews)||typeof n.minStreak<"u"&&Number(t.streak||0)<Number(n.minStreak)||typeof n.maxStreak<"u"&&Number(t.streak||0)>Number(n.maxStreak)||typeof n.minTalkOverStudy<"u"&&Number(t.timesUserChoseTalkOverStudy||0)<Number(n.minTalkOverStudy))}function kf(e="auto",t=me()){return null}function Er(e,t="auto",n=me()){if(!r.evaRuntime||!e?.id)return;r.evaRuntime.memory=gn(vt(),r.evaRuntime.memory||{});const s=r.evaRuntime.memory;s.recentLineIds=[e.id,...(s.recentLineIds||[]).filter(o=>o!==e.id)].slice(0,30);const a=e.category||t;s.recentTopics=[a,...(s.recentTopics||[]).filter(o=>o!==a)].slice(0,20),s.lastRoute=n.route||r.route,s.lastInteractionDate=W(),s.lastKnownMood=r.evaRuntime.mood||it().mood,(["warning","answer_wrong","idle_timeout"].includes(t)||String(e.category||"").includes("warning"))&&(s.lastWarningAt=new Date().toISOString()),(["answer_correct","lesson_complete","level_up","streak_up"].includes(t)||String(e.category||"").includes("reward"))&&(s.lastPraiseAt=new Date().toISOString())}function dc(e){if(!r.evaRuntime)return;r.evaRuntime.memory=gn(vt(),r.evaRuntime.memory||{});const t=r.evaRuntime.memory;t.lastRoute=r.route,["timer","idle_timeout"].includes(e.type)||(t.lastInteractionDate=W()),e.type==="answer_wrong"&&(t.recentProblemCluster=e.payload?.cardId||"reading"),e.type==="room_opened"&&(t.preferredEvaRoomBackground=r.progress?.selectedEvaRoomBackground||t.preferredEvaRoomBackground)}function yf(){return{quiet:12e4,normal:nn(45e3,12e4),active:45e3}}function $f(){Ka&&window.clearInterval(Ka),Ka=window.setInterval(jf,5e3)}function On(){const e=G(),t=yf()[e.frequency]||nn(45e3,12e4);e.nextSpeakAt=Date.now()+t}function jf(){if(document.hidden||!r.progress||!r.evaRuntime)return!1;const e=me(),t=r.evaRuntime,n=G(),s=Date.now();let a=!1;if(e.idleMs>9e4&&(!t.lastEvent||t.lastEvent.type!=="idle_timeout")&&s-Number(t.lastPhraseAt||0)>6e4)return de("idle_timeout",{idleMs:e.idleMs}),!0;if(s-Number(t.lastEmotionChangeAt||0)>=Number(t.cooldowns?.emotion||18e3)){const o=bt(e),l=Dr(e,o);(o!==t.mood||l!==t.emotion)&&(t.mood=o,t.emotion=l,n.mood=o,n.emotion=l,t.lastEmotionChangeAt=s,t.cooldowns.emotion=nn(15e3,3e4),a=!0)}return r.route==="eva-room"&&s>=Number(n.nextSpeakAt||0)&&(Math.random()<.14?(t.mood="quiet",t.emotion="observe",t.presenceState="quiet",n.mood="quiet",n.emotion="observe",On(),a=!0):$s("timer",{context:e})&&(a=!0)),a&&(mn(),N(),r.route==="eva-room"&&j()),a}function me(e={}){const t=r.progress?yt():{},n=r.evaRuntime||at(),s=gn(vt(),n.memory||{}),a=new Date().getHours();return Tl(),{route:r.route,hour:a,timeOfDay:a<5?"late_night":a<11?"morning":a<18?"day":a<23?"evening":"night",correctToday:Number(t.reviews||0)-Number(t.mistakes||0),mistakesToday:Number(t.mistakes||0),reviewsToday:Number(t.reviews||0),learnedToday:Number(t.learned||0),streak:Number(r.progress?.streak?.current||0),level:Number(r.progress?.level||1),moonFragments:Number(r.progress?.moonFragments||0),ownedSkins:n.ownedSkins||[],ownedBackgrounds:n.ownedBackgrounds||[],ownedEffects:n.ownedEffects||[],ownedDecorations:n.ownedDecorations||[],activeSkin:n.activeSkin||r.progress?.selectedEvaSprite||"idle",activeBackground:n.activeBackground||r.progress?.selectedEvaRoomBackground||"bg_study_hub",memory:s,daysSinceReturn:Number(s.daysSinceReturn||0),recentTopics:s.recentTopics||[],recentLineIds:s.recentLineIds||[],timesUserChoseTalkOverStudy:Number(s.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(s.timesUserReturnedAfterGap||0),idleMs:Date.now()-Number(n.lastPlayerActionAt||Date.now()),sessionMs:Date.now()-Ua,lastEvent:n.lastEvent,dueReviews:r.progress?Ne():0,shopOpen:!!r.evaRoomShopOpen,...e}}function bt(e=me()){const t=e.lastEvent?.type;return t==="level_up"||t==="lesson_complete"||t==="streak_up"?"happy":t==="item_bought"&&String(e.lastEvent?.payload?.itemId||"").includes("moon")?"mystic":e.shopOpen||t==="shop_opened"||t==="item_bought"?"curious":e.route==="learn"||e.route==="review"||e.dueReviews>0?"focused":e.mistakesToday>=4?e.correctToday>e.mistakesToday?"soft":"strict":e.hour>=23||e.hour<5?e.ownedEffects?.includes("effect_moon_particles")?"mystic":"quiet":e.sessionMs>35*60*1e3?"tired":e.activeSkin==="cyber_eva"||e.ownedSkins?.includes("cyber_eva")?"cyber":e.activeSkin==="silent_road"||e.ownedSkins?.includes("silent_road")?"travel":e.route==="eva-room"&&e.streak>=7?"soft":"neutral"}function Dr(e=me(),t=bt(e),n=e.lastEvent?.type||"auto"){if(n==="answer_correct")return Le(["approve","happy","soft_smile"]);if(n==="answer_wrong")return Le(["thinking","strict","serious"]);if(n==="lesson_complete")return"approve";if(n==="level_up")return"special";if(n==="item_bought"||n==="shop_opened")return"observe";if(n==="user_clicked_eva")return Le(["curious","shy","observe"]);if(n==="idle_timeout")return"observe";const s={neutral:["idle","observe"],focused:["ready","explain","thinking"],soft:["soft_smile","approve"],strict:["strict","serious"],tired:["tired","idle"],happy:["happy","approve"],serious:["serious","thinking"],mystic:["special","observe"],cyber:["observe","thinking"],travel:["ready","observe"],quiet:["observe","idle"],curious:["thinking","surprised","observe"]};return Le(s[t]||s.neutral)}function $s(e="auto",t={}){if(!r.progress||!Tr()||!t.force&&r.route!=="eva-room")return!1;const n=G(),s=Date.now();if(!t.force&&n.currentLine?.text&&n.nextSpeakAt&&s<Number(n.nextSpeakAt))return!1;const a=t.context||me({lastEvent:{type:e,payload:t.eventPayload||{}}}),o=bt(a),l=uc(e)||$i(e);if(!l)return!1;r.evaRuntime||=at(),r.evaRuntime.mood=o;const c=l.emotion||Dr(a,o,e),d=_r(l),u=Dt(Mr(l),c),m=ji(l),g=Si(l),w=hc(a,l);return n.currentLine={id:l.id,category:l.category||"mood",text:l.text,sprite:u,background:d.id,decoration:m,effect:g,emotion:c,state:l.state||"speak",at:new Date().toISOString(),reason:e},n.currentQuestion=w,n.currentDecoration=m,n.currentEffect=g,n.mood=o,n.emotion=c,n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=u,n.recentLineIds=[l.id,...(n.recentLineIds||[]).filter(v=>v!==l.id)].slice(0,32),r.evaRuntime||=at(),Object.assign(r.evaRuntime,{mood:o,emotion:c,presenceState:l.state||"speak",currentPhrase:n.currentLine,pendingQuestion:w,currentSkin:u,currentBackground:d.id,currentDecoration:m,currentEffect:g,activeSkin:u,activeBackground:d.id,lastPhraseAt:s,lastEmotionChangeAt:s,lastQuestionAt:w?s:Number(r.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:s,textRevealSkippedLineId:null,cooldowns:{...r.evaRuntime.cooldowns,emotion:nn(15e3,3e4),phrase:nn(45e3,12e4),question:nn(3*6e4,7*6e4),visual:nn(10*6e4,15*6e4)}}),Er(l,e,a),Ni(u,d.file),On(),ce(l.relationshipDelta||{warmth:.1},`eva_autonomy:${l.id}`,{silent:!0}),mn(),xt(),!0}function uc(e){const t=kf(e,me({lastEvent:{type:e}}));if(t)return t;const s={answer_correct:[{ru:"Верно.",en:"Correct."},{ru:"Хорошо.",en:"Good."},{ru:"Да. Именно так.",en:"Yes. Exactly."},{ru:"Ты начинаешь видеть структуру.",en:"You are starting to see the structure."},{ru:"Неплохо. Продолжай.",en:"Not bad. Continue."}],answer_wrong:[{ru:"Не совсем.",en:"Not quite."},{ru:"Посмотри ещё раз.",en:"Look again."},{ru:"Не угадывай. Разбери.",en:"Do not guess. Break it down."},{ru:"Запомни не ответ, а причину.",en:"Remember the reason, not just the answer."},{ru:"Это место стоит повторить.",en:"This part is worth repeating."}],user_clicked_eva:[{ru:"Да?",en:"Yes?"},{ru:"Что-то нужно?",en:"Need something?"},{ru:"Я слушаю.",en:"I'm listening."},{ru:"Не отвлекайся слишком часто.",en:"Don't distract yourself too often."},{ru:"Если нужен совет — спроси.",en:"If you need advice, ask."}],idle_timeout:[{ru:"Ты всё ещё здесь?",en:"Still here?"},{ru:"Сделаем короткий шаг?",en:"One short step?"},{ru:"Я подожду.",en:"I'll wait."},{ru:"Не исчезай надолго.",en:"Don't vanish for too long."}],manual:[{ru:"Один шаг всё ещё шаг.",en:"One step is still a step."},{ru:"Я рядом. Продолжай.",en:"I'm nearby. Continue."},{ru:"Кандзи не убегут. Но лучше не заставлять их ждать.",en:"The kanji won't run. Better not keep them waiting."},{ru:"Сначала форма. Потом смысл.",en:"Shape first. Meaning after."}],lesson_complete:[{ru:"Урок закрыт. След оставлен.",en:"Lesson complete. A mark is left."},{ru:"Хорошая работа. Теперь закрепи.",en:"Good work. Now reinforce it."}],level_up:[{ru:"Уровень выше. Дорога стала длиннее, не легче.",en:"Level up. The road is longer, not easier."},{ru:"Ты стал крепче. Это заметно.",en:"You got steadier. It shows."}],item_bought:[{ru:"Новая вещь. Посмотрим, приживётся ли.",en:"A new item. We'll see if it settles in."},{ru:"Комната меняется. Ты тоже.",en:"The room changes. So do you."}],room_opened:[{ru:"Я здесь.",en:"I'm here."},{ru:"Ты снова здесь. Это говорит больше, чем обещание.",en:"You're here again. That says more than a promise."},{ru:"Продолжай. Я посмотрю.",en:"Continue. I'll watch."}]}[e]||[],a=new Set(G().recentLineIds||[]),o=s.filter(c=>!a.has(`${e}_${he(`${c.ru||c.en}`)}`)),l=Le(o.length?o:s);return l?{id:`${e}_${he(`${l.ru||l.en}`)}`,category:e,text:l,relationshipDelta:{}}:null}function pc(){const e=G(),t=e.currentLine?.id;t&&(e.recentLineIds=[t,...(e.recentLineIds||[]).filter(n=>n!==t)].slice(0,32))}function Sf(e="auto"){const t=it(),n=new Date().getHours(),s=Ne(),a=yt(),o=[];return o.push(...wf(e)),(e==="return"||!t.lastInteractionDate&&r.progress.appOpens>1)&&o.push("fis_return","return"),e==="room_opened"&&o.push("fis_room","fis_observation","room"),(e==="shop_opened"||e==="item_bought"||e==="item_equipped")&&o.push("fis_room","fis_reward","reward"),e==="answer_correct"&&o.push("fis_focus","fis_short","study"),e==="answer_wrong"&&o.push("fis_guard","fis_focus","mood"),(e==="user_clicked_eva"||e==="eva_click")&&o.push("fis_observation","fis_short","mood"),e==="idle_timeout"&&o.push("fis_return","fis_short","return"),e==="user_answered_eva_question"&&o.push("fis_focus","fis_observation"),e==="lesson_start"&&o.push("fis_study","study","fis_focus"),(e==="lesson_complete"||e==="level_up"||e==="streak_up")&&o.push("fis_reward","reward","fis_streak"),(e==="writing_complete"||e==="sentence_complete"||e==="advanced_mode")&&o.push("fis_observation","fis_focus"),(n>=23||n<5)&&o.push("fis_night","night"),s>=8&&o.push("fis_review","review"),(a.reviews||0)===0&&o.push("fis_study","study"),(r.progress.streak?.current||0)>=3&&o.push("fis_streak","streak"),(r.progress.rewardHistory?.length||r.rewardModal)&&o.push("fis_reward","reward"),t.mood==="curious"&&o.push("fis_observation","fis_focus","fis_room","hint","room"),(t.mood==="worried"||t.mood==="reserved")&&o.push("fis_guard","fis_return","mood","return"),o.push("fis_observation","fis_road","fis_guard","fis_focus","fis_short","mood","study","short"),[...new Set(o)]}function $i(e="auto"){Y(),ys();const t=it(),n=me({lastEvent:{type:e}}),s=G().currentLine?.id,a=new Set([s,...G().recentLineIds||[],...r.evaRuntime?.memory?.recentLineIds||[]].filter(Boolean)),o=Array.isArray(r.evaAutonomyLines)?r.evaAutonomyLines:[],l=Sf(e),c=(u,m=!1)=>o.filter(g=>{if(!(g.category===u||(g.tags||[]).includes(u))||!m&&a.has(g.id)||!kc(g,t)||!bf(g,n))return!1;const v=Array.isArray(g.moods)?g.moods:[];return!v.length||v.includes(t.mood)});for(const u of l){const m=c(u);if(m.length)return Le(m)}for(const u of l){const m=c(u,!0);if(m.length)return Le(m)}const d=o.filter(u=>!a.has(u.id));return Le(d.length?d:o)}function de(e,t={}){if(!e)return;Cs(),U();const n={type:mc(e),payload:t||{},at:Date.now()};gc(n),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...n,handledByFlashKanji:!0}}))}Object.assign(window,{dispatchEvaEvent:de});function gc(e={}){if(!e.type||!r.progress)return;Y(),r.evaRuntime||=at();const t={type:mc(e.type),payload:e.payload||{},at:e.at||Date.now()};r.evaRuntime.lastEvent=t,r.evaRuntime.eventHistory=[t,...r.evaRuntime.eventHistory||[]].slice(0,80),r.evaRuntime.recentEvents=[t,...r.evaRuntime.recentEvents||[]].slice(0,80),dc(t),["timer","idle_timeout"].includes(t.type)||(r.evaRuntime.lastPlayerActionAt=Date.now());const n=Nf(t.type,t.payload);Object.keys(n).length&&ce(n,`eva_event:${t.type}`,{silent:!0});const s=G();pc(),s.nextSpeakAt=0;const a=$s(t.type,{force:!0,eventPayload:t.payload});mn(),N(),a&&r.route==="eva-room"&&j()}function mc(e){const t=String(e||"");return t==="eva_click"?"user_clicked_eva":t}function Nf(e,t={}){const s={...{room_opened:{warmth:.2,curiosity:.2},shop_opened:{curiosity:.4},item_bought:{warmth:.5,curiosity:.8},item_equipped:{curiosity:.3},eva_click:{warmth:.35,curiosity:.2},user_clicked_eva:{warmth:.35,curiosity:.2},answer_correct:{trust:.35,discipline:.2},answer_wrong:{discipline:-.45,trust:-.15,curiosity:.15},lesson_start:{discipline:.25},lesson_complete:{warmth:1.1,trust:1.2,discipline:1.1},level_up:{warmth:1,curiosity:.8},streak_up:{discipline:.8,trust:.4},writing_complete:{curiosity:.5,discipline:.3},sentence_complete:{trust:.45,curiosity:.3},advanced_mode:{curiosity:.5,discipline:.4}}[e]||{}};return e==="answer_wrong"&&t.comboLost&&(s.discipline=(s.discipline||0)-.25),s}function ji(e){const t=r.evaRuntime?.mood||bt(me()),n={close:["deco_tea_table","deco_lantern","deco_moon_frame"],proud:["deco_kanji_board","deco_bookshelf","deco_gold_accent"],curious:["deco_bookshelf","deco_kanji_board","deco_tea_table"],worried:["deco_lantern","deco_moon_frame"],reserved:["deco_lantern","deco_bookshelf"],focused:["deco_kanji_board","deco_bookshelf"],soft:["deco_tea_table","deco_lantern"],strict:["deco_kanji_board","deco_scroll"],tired:["deco_tea_table","deco_lantern"],happy:["deco_golden_accent","deco_moon_frame"],serious:["deco_scroll","deco_lantern"],mystic:["deco_moon_frame","deco_lantern"],cyber:["deco_kanji_board","deco_bookshelf"],travel:["deco_scroll","deco_lantern"],quiet:["deco_lantern","deco_bookshelf"],neutral:["deco_bookshelf","deco_tea_table","deco_lantern"]},s=[...e?.preferredDecorations||[],...n[t]||n.neutral];return fc("decoration",s)}function Si(e){const t=r.evaRuntime?.mood||bt(me()),n={close:["effect_golden_glow","effect_sakura_particles"],proud:["effect_golden_glow","effect_moon_particles"],curious:["effect_cyber_hud","effect_sakura_particles"],worried:["effect_snow_particles","effect_dust_particles"],reserved:["effect_dust_particles","effect_snow_particles"],focused:["effect_lesson_shine","effect_golden_glow"],soft:["effect_sakura_particles","effect_golden_glow"],strict:["effect_level_frame","effect_dust_particles"],tired:["effect_snow_particles","effect_dust_particles"],happy:["effect_golden_glow","effect_moon_particles"],serious:["effect_dust_particles","effect_level_frame"],mystic:["effect_moon_particles","effect_golden_glow"],cyber:["effect_cyber_hud","effect_lesson_shine"],travel:["effect_dust_particles","effect_snow_particles"],quiet:["effect_moon_particles","effect_snow_particles"],neutral:["effect_golden_glow","effect_moon_particles"]},s=[...e?.preferredEffects||[],...n[t]||n.neutral];return fc("effect",s)||"none"}function fc(e,t=[]){const n=Oe().filter(a=>a.type===e&&ot(a.id));return(t.map(a=>n.find(o=>o.id===a)).find(Boolean)||Le(n))?.id||null}function hc(e=me(),t=null){const n=G();if(n.currentQuestion?.id)return n.currentQuestion;if(r.evaRuntime?.pendingQuestion?.id)return n.currentQuestion=r.evaRuntime.pendingQuestion,n.currentQuestion;const s=e.lastEvent?.type||"auto",a=["user_clicked_eva","room_opened","manual"].includes(s),o=Date.now(),l=Number(r.evaRuntime?.lastQuestionAt||r.evaRuntime?.lastQuestion?.at||0),c=Number(r.evaRuntime?.cooldowns?.question||nn(3*6e4,7*6e4));if(!a&&o-l<c||!a&&Math.random()>.34)return null;const d=new Set(r.evaRuntime?.questionHistory?.slice(0,6).map(g=>g.id)),u=vc(s).filter(g=>!d.has(g.id)),m=Le(u.length?u:vc(s));return m?{...m,at:new Date().toISOString()}:null}function vc(e="auto"){const t=Zg();if(t.length<2)return[];const n=new Set((r.evaRuntime?.questionHistory||[]).slice(0,10).map(o=>o.cardId).filter(Boolean)),s=`${W()}:${e}:${r.progress?.totalCorrect||0}:${r.progress?.totalWrong||0}`;return[...t].sort((o,l)=>{const c=n.has(String(o.id))?1:0,d=n.has(String(l.id))?1:0;return c-d||he(`${s}:${o.id}`)-he(`${s}:${l.id}`)}).slice(0,18).map(o=>xf(o,t,e)).filter(Boolean)}function xf(e,t,n="auto"){const s=ye(e,"ru"),a=ye(e,"en");if(!s||!a)return null;const o=Cf(e,t);if(!o.length)return null;const l=String(e.jlpt||"").toUpperCase(),c=l||(p()==="ru"?"твоих карточек":"your cards"),d=wc(e,e,!0),u=[d,...o.map(m=>wc(m,e,!1))].sort((m,g)=>he(`${n}:${e.id}:${m.id}`)-he(`${n}:${e.id}:${g.id}`));return{id:`kanji_meaning_${e.id}_${he(`${s}:${a}`)}`,kind:"kanji_meaning",cardId:String(e.id),kanji:e.kanji,jlpt:l,answerId:d.id,answerText:{ru:s,en:a},text:{ru:`Что значит кандзи ${e.kanji} из ${c}?`,en:`What does the ${c} kanji ${e.kanji} mean?`},options:u,at:new Date().toISOString()}}function Cf(e,t){const n=Or(ye(e,"ru")),s=Or(ye(e,"en")),a=String(e.jlpt||"").toUpperCase(),l=[...t.filter(c=>{if(!c?.id||String(c.id)===String(e.id)||c.kanji===e.kanji)return!1;const d=Or(ye(c,"ru")),u=Or(ye(c,"en"));return!(!d||!u||d===n||u===s)})].sort((c,d)=>{const u=String(c.jlpt||"").toUpperCase()===a?0:1,m=String(d.jlpt||"").toUpperCase()===a?0:1;return u-m||he(`${e.id}:${c.id}`)-he(`${e.id}:${d.id}`)});return l.slice(0,Math.min(3,l.length))}function wc(e,t,n){const s=ye(e,"ru"),a=ye(e,"en"),o=ye(t,"ru"),l=ye(t,"en");return{id:`meaning_${he(`${t.id}:${e.id}:${s}:${a}`)}`,cardId:String(e.id),text:{ru:s,en:a},correct:n,delta:n?{trust:.7,discipline:.35,curiosity:.2}:{discipline:-.35,curiosity:.15},reply:n?{ru:`Верно. ${t.kanji}: ${o}.`,en:`Correct. ${t.kanji}: ${l}.`}:{ru:`Не совсем. ${t.kanji}: ${o}.`,en:`Not quite. ${t.kanji}: ${l}.`}}}function Or(e){return String(e||"").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US").replace(/[.,;:!?\s]+/g," ").trim()}function Lf(e){Y();const t=Kr();t?.id&&Af(t.id,e.dataset.option)}function Af(e,t){Y();const n=G(),s=Kr();if(!s?.id||s.id!==e)return;const a=s.options?.find(g=>g.id===t);if(!a)return;const l=s.options?.some(g=>g.correct||g.id===s.answerId)?!!(a.correct||a.id===s.answerId):null;r.evaRuntime||=at(),r.evaRuntime.pendingQuestion=null,n.currentQuestion=null,ce(a.delta||(l===!1?{discipline:-.2}:{warmth:.2}),`eva_question:${s.id}`),s.kind==="kanji_meaning"&&Tf(s,a,l);const c={id:s.id,kind:s.kind||"dialogue",cardId:s.cardId||null,kanji:s.kanji||"",option:a.id,correct:l,at:new Date().toISOString()};r.evaRuntime.lastQuestion={...c,at:Date.now()},r.evaRuntime.lastQuestionAt=Date.now(),r.evaRuntime.pendingQuestion=null,r.evaRuntime.questionHistory=[c,...r.evaRuntime.questionHistory||[]].slice(0,40);const d=_r({}),u=l===!1?"thinking":"approve",m=Dt(Mr({sprite:u}),u);n.currentLine={id:`question_reply_${s.id}_${a.id}`,category:"question_reply",text:a.reply||If(s,l),sprite:m,background:d.id,emotion:u,state:"react",at:new Date().toISOString(),reason:"question_answer"},r.evaRuntime.presenceState="react",r.evaRuntime.textRevealSkippedLineId=null,Er(n.currentLine,"question_answer",me({lastEvent:{type:"question_answer"}})),n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=m,On(),Pf(s,a,l),mn(),N(),C(l===!1?"answer_wrong":l===!0?"answer_correct":"notification_soft"),j()}function Kr(){const e=G(),t=e.currentQuestion?.id?e.currentQuestion:r.evaRuntime?.pendingQuestion;return t?.id?(e.currentQuestion=t,r.evaRuntime||=at(),r.evaRuntime.pendingQuestion=t,t):null}function If(e,t){return e.kind==="kanji_meaning"&&e.kanji&&e.answerText?t?{ru:`Верно. ${e.kanji}: ${e.answerText.ru||h(e.answerText)}.`,en:`Correct. ${e.kanji}: ${e.answerText.en||h(e.answerText)}.`}:{ru:`Не совсем. ${e.kanji}: ${e.answerText.ru||h(e.answerText)}.`,en:`Not quite. ${e.kanji}: ${e.answerText.en||h(e.answerText)}.`}:{ru:"Принято.",en:"Noted."}}function Tf(e,t,n){const s=Kl(),a=Rf(e);a&&hs(a,"eva_room_quiz"),s.answered=Number(s.answered||0)+1,s.correct=Number(s.correct||0)+(n?1:0),s.wrong=Number(s.wrong||0)+(n?0:1),s.streak=n?Number(s.streak||0)+1:0,s.history=[{id:e.id,cardId:e.cardId||null,kanji:e.kanji||"",jlpt:e.jlpt||"",selected:t.id,correct:n,answer:h(e.answerText||{}),at:new Date().toISOString()},...s.history||[]].slice(0,40);const o=yt();o.reviews=Number(o.reviews||0)+1,n?(r.progress.totalCorrect=Number(r.progress.totalCorrect||0)+1,a&&_f(a),a&&!s.rewarded[String(a.id)]&&(s.rewarded[String(a.id)]=new Date().toISOString(),O(2,s.streak>0&&s.streak%3===0?1:0,`eva_room_quiz:${a.id}`))):(r.progress.totalWrong=Number(r.progress.totalWrong||0)+1,o.mistakes=Number(o.mistakes||0)+1,a&&Mf(a)),o.minutes=as(Number(o.reviews||0)*.75+Number(o.learned||0)*1.25,1),r.progress.daily[W()]=o,ve(),so(),U()}function Rf(e){const t=String(e?.cardId||""),n=String(e?.kanji||""),s=String(e?.jlpt||"").toUpperCase();return(t?X(t):null)||Bl().find(a=>{if(!a)return!1;const o=t&&String(a.id)===t,l=n&&a.kanji===n,c=!s||String(a.jlpt||"").toUpperCase()===s;return o||l&&c})||(n?r.cards.find(a=>a.kanji===n):null)||null}function _f(e){const t=String(e?.jlpt||"").toUpperCase(),n=ui().find(s=>s.level===t);n&&n.markStudied(e.kanji,e.id)}function Mf(e){const t=String(e?.jlpt||"").toUpperCase(),n=ui().find(s=>s.level===t);n&&n.markDifficult(e.kanji,e.id)}function Pf(e,t,n){if(!r.evaRuntime)return;const s={type:"user_answered_eva_question",payload:{questionId:e.id,answerId:t.id,cardId:e.cardId||null,kanji:e.kanji||"",correct:n},at:Date.now()};r.evaRuntime.lastEvent=s,r.evaRuntime.eventHistory=[s,...r.evaRuntime.eventHistory||[]].slice(0,80),r.evaRuntime.recentEvents=[s,...r.evaRuntime.recentEvents||[]].slice(0,80),dc(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}function Ef(){Y(),Tr()&&$s("render");const e=yc();let t=G().currentLine;if(Tr()&&!t?.text&&r.evaAutonomyLines.length){const a=$i("render_fallback")||r.evaAutonomyLines[0],o=_r(a),l=me({lastEvent:{type:"render_fallback"}}),c=bt(l),d=ji(a),u=Si(a),m=a.emotion||Dr(l,c,"render_fallback"),g=Dt(Mr(a),m);t={id:a.id,category:a.category||"mood",text:a.text,sprite:g,background:o.id,decoration:d,effect:u,emotion:m,state:a.state||"observe",at:new Date().toISOString()},G().currentLine=t,G().currentDecoration=d,G().currentEffect=u,G().mood=c,G().emotion=m,G().lastSpokeAt=t.at,G().lastRoomId=o.id,G().lastSprite=g,r.evaRuntime.presenceState=t.state,r.evaRuntime.textRevealSkippedLineId=null,Er(a,"render_fallback",l),Ni(g,o.file),On(),N()}if(Tr()&&t?.text){const a=Dn(t.background)||wt(),o=Dt(t.sprite||"relationship",t.emotion||G().emotion);return{isAutonomy:!0,line:t,bg:a,spriteId:o,sprite:Kn(o),decoration:t.decoration||G().currentDecoration,effect:t.effect||G().currentEffect,mood:G().mood||it().mood,emotion:t.emotion||G().emotion||"calm",node:{id:"eva_autonomy_line",background:a.id,sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[]}}}const n=Dn(e.background)||wt(),s=Dt(e.sprite,G().emotion);return{isAutonomy:!1,line:null,bg:n,spriteId:s,sprite:Kn(s),decoration:G().currentDecoration,effect:G().currentEffect,mood:it().mood,emotion:G().emotion||"calm",node:e}}function bc(e="adaptive"){Y(),ys();const t=it(),n=new Set(r.progress.evaRoomDialogueProgress.lineHistory||[]),s=Pr().filter(d=>{const u=Array.isArray(d.tags)?d.tags:[];return!(e==="adaptive"||d.category===e||u.includes(e))||!kc(d,t)?!1:!n.has(d.id)}),a=Pr().filter(d=>e==="adaptive"||d.category===e||(d.tags||[]).includes(e)),o=s.length?s:a.length?a:Pr(),l=Le(o)||{id:"fallback",category:"adaptive",text:{ru:"Я рядом. Давай сделаем хотя бы один честный шаг.",en:"I'm here. Let's make one honest step."},sprite:"relationship",background:wt().id},c=r.progress.evaRoomDialogueProgress.lineHistory||[];return r.progress.evaRoomDialogueProgress.lineHistory=[l.id,...c.filter(d=>d!==l.id)].slice(0,24),{id:l.id,category:l.category||e,text:l.text||{ru:String(l.ru||""),en:String(l.en||l.ru||"")},sprite:l.sprite||"relationship",background:l.background||wt().id,relationshipDelta:l.relationshipDelta||{}}}function kc(e,t){return[["minWarmth",t.warmth,(s,a)=>s>=a],["maxWarmth",t.warmth,(s,a)=>s<=a],["minTrust",t.trust,(s,a)=>s>=a],["maxTrust",t.trust,(s,a)=>s<=a],["minDiscipline",t.discipline,(s,a)=>s>=a],["maxDiscipline",t.discipline,(s,a)=>s<=a],["minCuriosity",t.curiosity,(s,a)=>s>=a],["maxCuriosity",t.curiosity,(s,a)=>s<=a]].every(([s,a,o])=>typeof e[s]>"u"||o(a,Number(e[s])))}function yc(){Y();const e=hf(r.progress.evaRoomDialogueProgress.currentNode);return r.progress.evaRoomDialogueProgress.visited[e.id]=new Date().toISOString(),e}function Kn(e){return r.evaSprites?.[e]||r.evaSprites?.default||"assets/mascots/eva_normal.webp"}function Ni(e,t=""){[Kn(e),t].filter(Boolean).forEach(n=>{try{const s=new Image;s.src=n,s.decode&&s.decode().catch(()=>null)}catch(s){console.warn("Eva visual preload skipped.",s)}})}function Df(e){const n=yc().choices?.[Number(e.dataset.index||0)];if(!n)return;Y();const s=r.progress.evaRelationship;s.conversationCount=Number(s.conversationCount||0)+1,s.totalDialogueChoices=Number(s.totalDialogueChoices||0)+1,s.lastInteractionAt=new Date().toISOString(),s.lastInteractionDate=W(),Of(n),ce(n.relationshipDelta||{warmth:.4,curiosity:.2},"dialogue_choice");const a=Number(n.rewardMoonFragments||0),o=n.rewardOnceKey;if(a>0&&o&&!r.progress.evaRoomDialogueProgress.rewardsClaimed[o]&&(r.progress.evaRoomDialogueProgress.rewardsClaimed[o]=new Date().toISOString(),O(0,a,`eva_room:${o}`),E(Et().reward)),n.randomLine){const l=bc(n.randomLine);ce(l.relationshipDelta||{},`eva_line:${l.id}`,{silent:!0}),r.progress.evaRoomDialogueProgress.generatedLine=l,r.progress.evaRoomDialogueProgress.currentNode="generated_line"}else r.progress.evaRoomDialogueProgress.generatedLine=null,r.progress.evaRoomDialogueProgress.currentNode=n.next||"intro";if(n.openShop&&(r.evaRoomShopOpen=!0),N(),n.route){Te(n.route);return}C(n.openShop?"menu_open":"page_turn"),j()}function Of(e={}){if(!r.evaRuntime)return;r.evaRuntime.memory=gn(vt(),r.evaRuntime.memory||{});const t=r.evaRuntime.memory,n=!!(e.randomLine&&!e.route),s=["learn","review"].includes(e.route);n&&(t.timesUserChoseTalkOverStudy=Number(t.timesUserChoseTalkOverStudy||0)+1),s&&(t.timesUserChoseTalkOverStudy=Math.max(0,Number(t.timesUserChoseTalkOverStudy||0)-1)),t.lastInteractionDate=W(),t.lastRoute=r.route}function Kf(){Y(),r.progress.evaRoomDialogueProgress.currentNode="intro",r.progress.evaRoomDialogueProgress.generatedLine=null,r.evaRuntime&&(r.evaRuntime.presenceState="wait_choice",r.evaRuntime.textRevealSkippedLineId=null),N(),C("page_turn"),j()}function Bf(e){Br(e)}function Ff(e){Fr(e)}function Jf(e){const t=ne(e)||un(e)||pn(e);t&&Br(t.id)}function zf(e){const t=ne(e)||un(e)||pn(e);t&&Fr(t.id)}function ot(e){r.customization||hr();const t=ne(e)||un(e);return!!(t?.defaultOwned||t?.price===0||r.customization?.owned?.includes(t?.id||e))}function xi(e){return e?e.type==="background"?"background":e.type==="outfit"?"outfit":e.type==="theme"?"theme":e.type==="effect"?"effect":e.type==="decoration"?"decoration":e.type:null}function Uf(e){const t=xi(e);return!!(t&&r.customization?.selected?.[t]===e.id)}function $c(e){return!e||!Ci(e)?"locked":Uf(e)?"selected":ot(e.id)?"owned":"available"}function Gf(e={}){const t=[r.customization?.selected?.effect,e.effect,r.evaRuntime?.currentEffect,r.evaRuntime?.currentLine?.effect,r.progress?.evaAutonomy?.currentEffect,G().currentEffect];for(const n of t){const s=ht(n);if(!s||s==="none")continue;const a=ne(s);if(a?.type==="effect"&&ot(a.id))return a.id}return null}function jc(e=null){const t=ht(e||r.customization?.selected?.effect),n=ne(t);return!n||n.type!=="effect"||r.customization?.selected?.effect!==n.id?!1:(r.customization.selected.effect=null,r.progress?.evaAutonomy&&(r.progress.evaAutonomy.currentEffect=null),r.evaRuntime?.currentEffect===n.id&&(r.evaRuntime.currentEffect="none"),gs(),Rn(),N(),xt(),C("menu_close"),E(p()==="ru"?"Эффект убран.":"Effect removed."),j(),!0)}function qf(e=null){const t=ht(e||r.customization?.selected?.effect||r.customization?.selected?.decoration||r.customization?.selected?.frame||r.customization?.selected?.outfit||r.customization?.selected?.background||r.customization?.selected?.theme),n=ne(t);if(!n)return!1;if(n.type==="effect")return jc(n.id);r.customization||hr();const s=xi(n);if(!s)return!1;const a=dn().selected;return s==="background"?r.customization.selected.background=a.background:s==="outfit"?r.customization.selected.outfit=a.outfit:s==="theme"?r.customization.selected.theme=a.theme:s==="decoration"&&(r.customization.selected.decoration=a.decoration,r.customization.selected.frame=a.frame),gs(),Rn(),N(),xt(),C("menu_close"),E(p()==="ru"?"Выбор сброшен.":"Selection cleared."),j(),!0}function Hf(e){if(!e?.unlockCondition||Ci(e))return"";const t=e.unlockCondition,n=p()==="ru";if(t.type==="achievement"){const s=bn().find(o=>o.id===t.id),a=s?eo(s):t.id;return n?`Открывается за достижение: ${a}`:`Unlocks after achievement: ${a}`}return t.type==="level"?n?`Открывается на уровне ${t.value}`:`Unlocks at level ${t.value}`:t.type==="streak"?n?`Открывается за серию ${t.value} дн.`:`Unlocks at a ${t.value}-day streak`:""}function Ci(e){if(!e?.unlockCondition)return!0;const t=e.unlockCondition;return t.type==="level"?r.progress.level>=Number(t.value||0):t.type==="streak"?r.progress.streak.current>=Number(t.value||0):t.type==="achievement"?!!r.progress.achievements?.[t.id]?.unlockedAt:!0}function Br(e){const t=ne(e);if(t){if(!Ci(t)){C("purchase_failed"),E(En().locked);return}if(ot(t.id)){Fr(t.id);return}if(r.progress.moonFragments<t.price){C("purchase_failed"),E(En().notEnough);return}r.progress.moonFragments-=t.price,r.customization.owned=[...new Set([...r.customization.owned||[],t.id])],r.customization.seen=[...new Set([...r.customization.seen||[],t.id])],r.progress.transactions.unshift({at:new Date().toISOString(),reason:`customization:${t.type}:${t.id}`,label:Ve(t),xp:0,coins:-t.price,balance:r.progress.moonFragments}),r.progress.transactions=r.progress.transactions.slice(0,80),gs(),Rn(),U(),N(),C("purchase_success"),C("item_unlock"),de("item_bought",{itemId:t.id,type:t.type,title:Ve(t),price:t.price}),E(En().bought.replace("{item}",Ve(t))),j()}}function Fr(e){const t=ne(e);if(!t||!ot(t.id))return;const n=xi(t);n&&(r.customization.selected[n]=t.id,n==="decoration"&&(r.customization.selected.frame=t.id),t.type==="outfit"&&t.spriteId&&(r.progress.selectedEvaSprite=t.spriteId,r.progress.evaAutonomy.currentLine=null),t.type==="background"&&(r.progress.selectedEvaRoomBackground=t.id,r.evaRuntime&&(r.evaRuntime.currentBackground=t.id,r.evaRuntime.activeBackground=t.id,r.evaRuntime.memory||=vt(),r.evaRuntime.memory.preferredEvaRoomBackground=t.id),r.progress.evaAutonomy.currentLine=null),gs(),Rn(),N(),xt(),C("notification_soft"),de("item_equipped",{itemId:t.id,type:t.type,title:Ve(t)}),E(En().selectedToast.replace("{item}",Ve(t))),j())}function Xf(){const e=G();e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",e.nextSpeakAt=0,$s("toggle",{force:!0}),N(),C("notification_soft"),E(Pt().status),j()}function Qf(){const e=G();e.frequency="normal",On(),N(),C("notification_soft"),j()}function Wf(){const e=G();e.roomMode="auto",e.currentLine=null,N(),C("notification_soft"),j()}function Vf(){const e=G();e.outfitMode="auto",e.currentLine=null,N(),C("notification_soft"),j()}function Sc(){const e=G();e.enabled=!0,pc(),e.currentQuestion=null,e.currentLine=null,e.nextSpeakAt=0,Nc("manual"),N(),C("page_turn"),j()}function Nc(e="manual"){const t=uc(e)||$i(e);if(!t)return!1;const n=me({lastEvent:{type:e}}),s=bt(n),a=t.emotion||Dr(n,s,e),o=_r(t),l=Dt(Mr(t),a),c=ji(t),d=Si(t),u=G(),m=Date.now(),g=hc(n,t);return u.currentLine={id:t.id,category:t.category||e,text:t.text,sprite:l,background:o.id,decoration:c,effect:d,emotion:a,state:t.state||"speak",at:new Date(m).toISOString(),reason:e},u.currentDecoration=c,u.currentEffect=d,u.mood=s,u.emotion=a,u.lastSpokeAt=u.currentLine.at,u.lastRoomId=o.id,u.lastSprite=l,u.currentQuestion=g,u.recentLineIds=[t.id,...(u.recentLineIds||[]).filter(w=>w!==t.id)].slice(0,32),r.evaRuntime||=at(),Object.assign(r.evaRuntime,{mood:s,emotion:a,presenceState:t.state||"speak",currentPhrase:u.currentLine,pendingQuestion:g,currentSkin:l,currentBackground:o.id,currentDecoration:c,currentEffect:d,activeSkin:l,activeBackground:o.id,lastPhraseAt:m,lastEmotionChangeAt:m,lastQuestionAt:g?m:Number(r.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:m,textRevealSkippedLineId:null}),Er(t,e,n),Ni(l,o.file),On(),mn(),xt(),!0}function Yf(){G().currentLine=null,N(),C("menu_close"),j()}function T(e,t,n,s){return`
      <article class="metric">
        <span>${i(e)}</span>
        <strong>${i(t)}</strong>
        <div class="meter"><i style="width:${Z(s,0,100)}%"></i></div>
        <p class="label">${i(n)}</p>
      </article>
    `}function Zf(e){const t=uo(e.id),n=t.filter(d=>A(d.id).state!=="New").length,s=t.filter(d=>A(d.id).state==="Mastered").length,a=!ke(e),o=Mu(e),l=a?"鎖":t[0]?.kanji||"文",c=I(s,t.length);return`
      <button class="lesson-tile ${a?"is-locked":""} ${ho(o)}" type="button" id="textbook-lesson-${f(e.id)}" data-action="start-lesson" data-id="${f(e.id)}">
        <span class="lesson-glyph">${i(l)}</span>
        <span>
          <span class="pill">${i(e.jlpt)}</span>
          ${Hy(o)}
          <h3>${i(Vs(e))}</h3>
          <p>${i(_$(e))}</p>
          <span class="lesson-meta">
            <span class="pill">${n}/${t.length}</span>
            <span class="pill mastered">${s} ${i(S("mastered"))}</span>
            ${a?`<span class="pill danger-pill">${i(S("unlockedAt"))} ${va(e)}</span>`:""}
          </span>
          <span class="meter"><i style="width:${c}%"></i></span>
        </span>
      </button>
    `}function eh(e){const t=Mu(e),n=e.id===r.activeLessonId,s=!ke(e);return`
      <button class="btn ${n?"primary":"ghost"} ${s?"is-disabled":""} ${ho(t)}" type="button" data-action="select-lesson" data-id="${f(e.id)}" title="${f(vo(t))}">
        <span>${i(e.jlpt)}</span>
        ${qy(t)}
      </button>
    `}function Li(){const e=String(r.activeLearnJlpt||"all").toUpperCase();return r.lessons.filter(t=>e==="ALL"||String(t.jlpt||"").toUpperCase()===e)}function th(){const e=Li();return e.find(t=>t.id===r.activeLessonId)||e.find(t=>ke(t))||e[0]||r.lessons.find(t=>t.id===r.activeLessonId)||r.lessons.find(t=>ke(t))||r.lessons[0]||null}function Ai(){return F(th()?.jlpt)||Nt()}function xc(e){if(!e.length)return r.activeLessonId=null,null;const t=e.find(a=>a.id===r.activeLessonId);if(t&&ke(t))return t;const s=e.find(a=>ke(a))||e[0];return r.activeLessonId=s?.id||null,s||null}function nh(e){const t=e.length,n=e.filter(a=>ke(a)).length,s=["all",...be];return`
      <div class="jlpt-filter-bar" role="tablist" aria-label="${f(p()==="ru"?"Фильтр уровней JLPT":"JLPT level filter")}">
        ${s.map(a=>{const o=String(r.activeLearnJlpt||"all").toLowerCase()===String(a).toLowerCase(),l=a==="all"?p()==="ru"?"Все":"All":a,c=a==="all"?t:r.lessons.filter(d=>d.jlpt===a).length;return`
            <button class="btn jlpt-filter-chip ${o?"primary":"ghost"}" type="button" role="tab" aria-selected="${o?"true":"false"}" data-action="set-learn-jlpt" data-jlpt="${f(a)}">
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
    `}function sh(e){if(!e)return"";const t=e.textbook||e;return`
      <article class="learn-level-panel">
        <div class="learn-level-cover">
          <img src="${f(t.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
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
            <a class="btn primary" href="${f(t.pdfUrl||t.pdfFile||"")}" download="${f((t.pdfFile||t.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(p()==="ru"?"Скачать PDF":"Download PDF")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
          </div>
        </div>
      </article>
    `}function rh(e){const t=mt(e?.jlpt);return`
      <article class="lesson-locked-panel">
        <span class="pill danger-pill">${i(p()==="ru"?"Закрытый уровень":"Level locked")}</span>
        <h2>${i(e?Vs(e):"")}</h2>
        <p>${i(p()==="ru"?`Откроется на уровне ${va(e)}.`:`Unlocks at level ${va(e)}.`)}</p>
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
    `}function ah(){return r.activeLearnView===sn?gh():r.activeLearnView===Lt?ph():Ac()}function ih(){const e=El();if(e.kind==="review"){Te("review");return}if(r.route==="home"){ka(Ai());return}Cc(e.nodeId)}function Cc(e){const t=Mn(e);if(!t){fn();return}if(Pl(t)==="locked"){E(p()==="ru"?"Сначала закончи предыдущий шаг.":"Finish the previous step first.");return}if(t.id===An){Te("review");return}if(t.id===In){Is("final-test");return}if(t.type==="textbook"){Is(t.id);return}fn(Lt,t.id)}function Lc(e){const t=String(e||"");return t&&(X(t)||r.cards.find(n=>String(n.id)===t))||null}function oh(){const e=V();return[{id:"intro-1",kind:"info",eyebrow:e.intro,title:e.introTitle,text:e.introBody,note:e.finishHint},{id:"intro-2",kind:"info",eyebrow:e.route,title:e.nextLesson,text:e.introBridge,note:e.mapHint},{id:"intro-3",kind:"quiz",eyebrow:e.ready,title:e.introQuestion,text:e.introQuestionHint,answer:"review",options:[{value:"review",label:{ru:"В повторение",en:"Into review"}},{value:"memory",label:{ru:"В архив навсегда",en:"Into permanent archive"}},{value:"skip",label:{ru:"Никуда, пока не забудешь",en:"Nowhere, until you forget"}}]}]}function js(e){const t=Ze(e);if(!t)return null;const n=Ot(t);if(!n.length)return null;const s=Array.isArray(t.sentences)?t.sentences:[],a=n.map((o,l)=>{const c=et(o)[0]||null,d=s[l%Math.max(s.length,1)]||s[0]||null,u=c?{jp:c.word||o.kanji,hiragana:c.reading||o.hiragana||"",translation:c.translation||(d?{ru:d.ru||"",en:d.en||""}:"")}:d?{jp:d.jp||o.kanji,hiragana:q(d.reading||d.hiragana||o.hiragana||""),translation:{ru:d.ru||"",en:d.en||""}}:{jp:o.kanji,hiragana:o.hiragana||"",translation:{ru:L(o),en:L(o)}};return{cardId:o.id,sentence:u}});return{id:t.id,title:t.title,summary:t.goal||t.theme||t.title,objectives:[t.goal,t.theme].filter(Boolean),kanjiIds:n.map(o=>o.id),kanjiBlocks:a,exercises:Ls(t),source:"learning_path"}}function lh(e){if(e===le)return oh();const t=r.learningPathLessonPayloads[e]||js(e);if(!t)return[];const n=V(),s=[],a=(t.objectives||[]).map(h).filter(Boolean).slice(0,3).join(" • ");return s.push({id:`${e}-overview`,kind:"info",eyebrow:"N5",title:h(t.title),text:h(t.summary),note:a||n.finishHint}),(t.kanjiBlocks||[]).forEach((o,l)=>{const c=Lc(o.cardId);if(!c)return;const d=o.sentence||null;s.push({id:`${e}-kanji-${l+1}`,kind:"kanji",eyebrow:c.jlpt||"N5",title:`${c.kanji} · ${L(c)}`,text:Oh(c,{word:d?.jp||c.kanji,reading:d?.hiragana||c.hiragana||""}),note:d?.translation?h(d.translation):"",cardId:c.id,card:c,sentence:d})}),(t.exercises||[]).forEach(o=>{const l=(o.options||[]).map(c=>({value:String(c.value??c.id??c.label??c),label:h(c.label||c.text||c)}));s.push({id:String(o.id||`${e}-quiz-${s.length}`),kind:"quiz",eyebrow:"N5",title:h(o.prompt),text:h(o.promptHint||{ru:"",en:""}),answer:String(o.answer??""),options:l})}),s}function ch(e,t=null){const n=lh(e);if(!t||t.mode!=="mistakes"||!t.reviewStepIds?.length)return n;const s=new Set(t.reviewStepIds),a=n.filter(o=>o.kind==="quiz"&&s.has(o.id));return a.length?a:n.filter(o=>o.kind==="quiz")}function dh(e,t=Lt,n=[]){const s=Tt(),a=s.activeSession,o=n.map(String).filter(Boolean);return a?.nodeId===e&&a.mode===t&&JSON.stringify(a.reviewStepIds||[])===JSON.stringify(o)?a:(s.activeSession=Ya({nodeId:e,mode:t,stepIndex:0,answers:{},mistakes:[],reviewStepIds:o,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),s.lastUpdatedAt=s.activeSession.updatedAt,N(),s.activeSession)}function Ss(e){const t=ci(),n=t?.nodeId===e?t:dh(e),s=ch(e,n),a=s.filter(c=>c.kind==="quiz"),o=Object.keys(n.answers||{}).length,l=Math.max(0,Number(n.stepIndex||0));return{session:n,steps:s,quizSteps:a,answeredCount:o,stepIndex:l,currentStep:s[l]||null,isResult:l>=s.length&&s.length>0}}function uh(e,t,n){const s=Tt(),a=new Date().toISOString(),o=n.filter(c=>c.kind==="quiz"),l=Array.isArray(t.mistakes)&&t.mistakes.length>0;if(s.completedNodes[e]||=a,s.resultHistory[e]={completedAt:a,score:Number(t.score||0),totalQuestions:o.length,mistakes:(t.mistakes||[]).slice(0,24)},s.activeSession=null,e===le&&O(12,0,"learning_path:intro"),/^n5-lesson-\d+$/i.test(e)){const c=Ze(e),d=r.learningPathLessonPayloads[e]||js(e),u=[...new Set([...d?.kanjiIds||[],...(d?.kanjiBlocks||[]).map(g=>g.cardId),...Ot(c).map(g=>g.id)].map(String).filter(Boolean))],m=z();if(u.forEach(g=>{const w=Lc(g);if(!w)return;hs(w,"learning_path"),fs(m,w.kanji);const v=H(A(w.id));v.state==="New"&&(r.progress.cards[w.id]=ue(v,l?"hard":"good"))}),c){ee.add(`n5:${c.id}`),m.completedLessons[c.id]=a,m.currentLessonId=Se().find(v=>v.order===c.order+1)?.id||c.id;try{const v=xn,$=localStorage.getItem(v),y=$?JSON.parse($):{};y.n5Course||(y.n5Course={}),y.n5Course.completedLessons||(y.n5Course.completedLessons={}),y.n5Course.completedLessons[c.id]=a,localStorage.setItem(v,JSON.stringify(y)),r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.completedLessons=r.progress.n5Course.completedLessons||{},r.progress.n5Course.completedLessons[c.id]=a}catch(v){console.warn("N5 learning path persist failed",v)}hn()>=10&&Object.keys(m.studiedKanji||{}).length>=80&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N5")||r.progress.unlockedJlptLevels.push("N5"),r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"));const g=r.n5Meta?.rewards?.lessonCompleteXp||45,w=r.n5Meta?.rewards?.lessonCompleteMoon||6;O(g,w,`learning_path:${e}`),Ge({title:`${je().lessonComplete}: ${h(c.title)}`,message:je().lessonCompleteText,xp:g,coins:w,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),C("lesson_complete"),de("lesson_complete",{lessonId:e,jlpt:"N5"})}}Sr(),ve(),U(),N()}function Ac(){r.n5Textbook?.items?.length||li();const e=V(),t=Ml(),n=El(),s=Mn(_n()),a=jt();return`
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
            <h2>${i(_l(_n()))}</h2>
            <p>${i(e.mapHint)}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(V().reviewQueue)} · ${i(Ne())}</span>
            <span class="pill">${i(V().streak)} · ${i(r.progress.streak.current)}</span>
            <span class="pill">${i(V().xp)} · ${i(a.current)}</span>
          </div>
        </article>

        <div class="learning-path-timeline">
          ${t.length?t.map((o,l)=>{const c=Pl(o),d=c==="locked",u=h(o.summary)||"",m=o.id===An?e.reviewAction:o.id===In?e.openCheckpoint:o.type==="textbook"?e.openTextbook:c==="current"?e.resume:e.continue;return`
              <button class="learning-path-node is-${f(c)} is-${f(o.type||"lesson")}" type="button" data-action="learning-path-node" data-node="${f(o.id)}" ${d?'disabled aria-disabled="true"':""}>
                <span class="learning-path-node-index">${l+1}</span>
                <div class="learning-path-node-copy">
                  <div class="learning-path-node-meta">
                    <span class="pill">${i(o.level||"N5")}</span>
                    <span class="pill">${i(Jg(c))}</span>
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
    `}function ph(){const e=r.activeLearnNodeId||_n(),t=Mn(e),n=V();if(!t)return Ac();if(t.id!==le&&t.type==="lesson"&&!r.n5Textbook?.items?.length)return li(),`
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
      `;t.type==="lesson"&&Pg(e);const s=Ss(e),{session:a,steps:o,quizSteps:l,currentStep:c,isResult:d}=s;if(!o.length)return`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${i(h(t.title))}</h1>
                <p>${i(h(t.summary)||n.mapHint)}</p>
              </div>
              <button class="btn ghost" type="button" data-action="learning-path-node" data-node="${f(t.id)}">${i(t.type==="textbook"?n.openTextbook:n.backToMap)}</button>
            </div>
          </article>
        </section>
      `;const u=o.length,m=u?I(Math.min(a.stepIndex,u),u):0,g=a.answers?.[c?.id||""]||null,w=g?.selected||"",v=!!g?.correct,$=l.length?Math.round(Number(a.score||0)/Math.max(l.length,1)*100):100;return d?`
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
              <strong>${i($)}%</strong>
              <div class="meter"><i style="width:${$}%"></i></div>
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
              ${a.mistakes.length?`<button class="btn ghost" type="button" data-action="learning-path-retry" data-node="${f(e)}">${i(n.retryMistakes)}</button>`:""}
              <button class="btn primary" type="button" data-action="learning-path-continue" data-node="${f(e)}">${i(n.continuePath)}</button>
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
                    <span class="pill">${i(L(c.card))}</span>
                    ${c.card.hiragana?`<span class="pill">${i(q(c.card.hiragana))}</span>`:""}
                    ${c.card.onyomi?`<span class="pill">${i(q(c.card.onyomi))}</span>`:""}
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
                ${(c.options||[]).map(y=>{const x=w===y.value,b=y.value===c.answer;return`<button class="btn ${x?v?"success":"danger":g&&b?"ghost is-correct":"ghost"}" type="button" data-action="learning-path-choice" data-node="${f(e)}" data-step="${f(c.id)}" data-value="${f(y.value)}">${i(y.label)}</button>`}).join("")}
              </div>
              ${g?`<p class="lesson-player-feedback ${v?"is-good":"is-warning"}">${i(v?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Правильно":"Correct"}: ${(c.options||[]).find(y=>y.value===c.answer)?.label||c.answer}`)}</p>`:""}
            `:`
              <p>${i(c.text||"")}</p>
              ${c.note?`<small>${i(c.note)}</small>`:""}
            `}
          </div>
          <div class="lesson-player-actions">
            <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
            <button class="btn primary" type="button" data-action="learning-path-step-next" data-node="${f(e)}" ${c.kind==="quiz"&&!g?'disabled aria-disabled="true"':""}>${i(a.stepIndex+1>=u?n.finish:n.continue)}</button>
          </div>
        </article>
      </section>
    `}function gh(){const e=Li(),t=xc(e),n=!!(t&&ke(t)),s=n?jy(t.id):[];(!r.activeCardId||!s.some(l=>l.id===r.activeCardId))&&(r.activeCardId=s[0]?.id||null);const a=n&&r.activeCardId?X(r.activeCardId):null,o=r.activeLearnJlpt!=="all"?mt(r.activeLearnJlpt):null;return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(S("learn"))}</h1>
            <p>${i(t?Vs(t):"")}</p>
          </div>
          ${o?`<button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Учебники":"Textbooks")}</button>`:""}
        </div>
        ${nh(e)}
        ${o?sh(o):""}
        <div class="actions lesson-tabs">
          ${e.map(eh).join("")}
        </div>
        <div class="study-layout">
          ${n?a?Od(a):rk(t):rh(t)}
          ${n?Qi(a,s.length):Qi(null,0)}
        </div>
      </section>
    `}function mh(){const e=Yt(r.activeJlptLesson)||Yt(X(r.activeCardId)?.jlpt)||r.jlptLessons[0];if(!e)return`
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">JLPT</span>
            <h2>${i(p()==="ru"?"JLPT-уроки ещё не загружены":"JLPT lessons are not loaded yet")}</h2>
            <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(S("learn"))}</button>
          </article>
        </section>
      `;r.activeJlptLesson=e.jlpt;const t=mt(e.jlpt);if(!qe(e.jlpt))return Ic(t||e);const n=ko(e.jlpt),s=n.filter(l=>A(l.id).state==="Mastered").length,a=n.filter(l=>A(l.id).state!=="New").length,o={...$o(),...yo()};return`
      <section class="page jlpt-lesson-page">
        <div class="section-head">
          <div>
            <h1>${i(h(e.title))}</h1>
            <p>${i(h(e.summary))}</p>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${f(e.jlpt)}">${i(p()==="ru"?"Страница учебника":"Textbook page")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
            ${ts("lesson",{level:e.jlpt,lessonId:e.id})}
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks" data-subroute="${f(e.jlpt)}">${i(o.back)}</button>
          </div>
        </div>
        <div class="actions jlpt-switcher">
          ${r.jlptLessons.map(l=>{const c=qe(l.jlpt),d=l.jlpt===e.jlpt,u=f($t(l.jlpt));return c?`<button class="btn ${d?"primary":"ghost"}" type="button" data-action="open-jlpt-lesson" data-jlpt="${f(l.jlpt)}">${i(l.jlpt)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${u}">🔒 ${i(l.jlpt)}</button>`}).join("")}
        </div>
        ${t?`
          <article class="jlpt-textbook-hero">
            <img class="jlpt-textbook-cover" src="${f(t.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
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
                <a class="btn primary" href="${f(t.pdfUrl||t.pdfFile||"")}" download="${f((t.pdfFile||t.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(p()==="ru"?"Скачать PDF":"Download PDF")}</a>
                <button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${f(e.jlpt)}">${i(p()==="ru"?"К уроку":"Go to lesson")}</button>
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
            ${T(o.available,n.length,e.jlpt,I(n.length,Math.max(r.cards.length,1)))}
            ${T(o.learned,a,`${s} ${o.mastered}`,I(a,Math.max(n.length,1)))}
          </div>
        </article>
        ${Ld(e)}
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
    `}function fh(){const e=r.jlptCatalog?.items||[],t=String(r.activeTextbookLevel||"").toUpperCase(),n=t?mt(t):null;if(n)return r.activeTextbookLevel=n.jlpt,r.activeJlptLesson=n.jlpt,hh(n);const s=p()==="ru"?{title:"Учебники Flash Kanji",description:"Функциональные страницы учебников JLPT N5–N1 с переходом к урокам, повторению и материалам внутри уровня.",open:"Открыть страницу",pdf:"Скачать PDF",study:"К урокам"}:{title:"Flash Kanji Textbooks",description:"Functional JLPT N5-N1 textbook pages with lesson links, review entry points, and level materials.",open:"Open page",pdf:"Download PDF",study:"Go to lessons"};return`
      <section class="page textbooks-page">
        <div class="section-head">
          <div>
            <h1>${i(s.title)}</h1>
            <p>${i(s.description)}</p>
          </div>
          <div class="actions">
            ${ts("textbooks")}
            <button class="btn primary" type="button" data-action="open-jlpt-lesson-start" data-jlpt="${f(Nt())}">${i(s.study)}</button>
          </div>
        </div>
        <div class="textbook-grid" id="textbook-grid">
          ${e.map(a=>`
            <article class="textbook-card ${qe(a.jlpt)?"is-unlocked":"is-locked"}" id="textbook-${f(a.jlpt)}">
              <div class="textbook-cover-wrap">
                <img class="textbook-cover" src="${f(a.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
                <span class="pill textbook-level">${i(a.jlpt)}</span>
              </div>
              <div class="textbook-body">
                <h2>${i(h(a.displayTitle||a.title||{}))}</h2>
                <p>${i(h(a.description||{}))}</p>
                ${qe(a.jlpt)?"":`<p class="textbook-lock-note">${i($t(a.jlpt))}</p>`}
                <div class="textbook-meta">
                  <span class="pill">${i(a.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                  <span class="pill">${i(a.kanjiCount||0)} ${i(S("cardsToday"))}</span>
                  <span class="pill">${i(h(a.goal||{}))}</span>
                </div>
                <div class="textbook-actions">
                  <a class="btn primary" href="#textbooks/${f(a.jlpt)}">${i(s.open)}</a>
                  ${qe(a.jlpt)?`<a class="btn ghost" href="${f(a.pdfUrl||a.pdfFile||"")}" download="${f((a.pdfFile||a.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(s.pdf)}</a>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${f($t(a.jlpt))}">${i(p()==="ru"?"PDF закрыт":"PDF locked")}</button>`}
                  ${qe(a.jlpt)?`<button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${f(a.jlpt)}">${i(s.study)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${f($t(a.jlpt))}">${i(p()==="ru"?"Закрыто":"Locked")}</button>`}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Ic(e){const t=String(e?.jlpt||"").toUpperCase(),n=wo(t),s=n.map(o=>`<a class="pill" href="#textbooks/${f(o)}">${i(o)}</a>`).join(""),a=p()==="ru"?{title:"Учебник закрыт",back:"Все учебники",home:"Домой",hint:"Сначала заверши предыдущие уровни, чтобы открыть этот учебник."}:{title:"Textbook locked",back:"All textbooks",home:"Home",hint:"Finish the previous levels first to unlock this textbook."};return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(t||"JLPT")}</p>
            <h1>${i(h(e?.displayTitle||e?.title||{ru:a.title,en:a.title}))}</h1>
            <p>${i($t(t))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(a.back)}</button>
            <button class="btn ghost" type="button" data-action="route" data-route="home">${i(a.home)}</button>
          </div>
        </div>
        <article class="lesson-locked-panel textbook-locked-panel">
          <img class="jlpt-textbook-cover" src="${f(e?.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <div class="jlpt-textbook-body">
            <span class="pill danger-pill">${i(t||"JLPT")}</span>
            <h2>${i(h(e?.displayTitle||e?.title||{ru:a.title,en:a.title}))}</h2>
            <p>${i(a.hint)}</p>
            ${s?`<div class="tag-row">${s}</div>`:""}
            <div class="actions">
              <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(a.back)}</button>
              ${n.length?`<a class="btn ghost" href="#textbooks/${f(n[n.length-1])}">${i(n[n.length-1])}</a>`:""}
            </div>
          </div>
        </article>
      </section>
    `}function hh(e){const t=String(e?.jlpt||"").toUpperCase();if(!qe(t))return Ic(e);if(String(e?.jlpt||"").toUpperCase()==="N5"&&r.n5Textbook?.items?.length)return vh(e);if(String(e?.jlpt||"").toUpperCase()==="N4"&&r.n4Textbook?.items?.length)return iv(e);if(String(e?.jlpt||"").toUpperCase()==="N3"&&r.n3Textbook?.items?.length)return Jv(e);if(String(e?.jlpt||"").toUpperCase()==="N2"&&r.n2Textbook?.items?.length)return Nw(e);r.activeTextbookLevel=e.jlpt,r.activeJlptLesson=e.jlpt;const n=(e.lessonIds||[]).map(w=>r.lessons.find(v=>v.id===w)).filter(Boolean),s=r.lessons.filter(w=>String(w.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()&&!n.includes(w)),a=[...n,...s].slice(0,Math.max(e.lessonCount||n.length,n.length)),o=r.activeTextbookSubroute?a.find(w=>w.id===r.activeTextbookSubroute)||Yt(e.jlpt)||r.jlptLessons[0]:Yt(e.jlpt)||r.jlptLessons[0];r.activeTextbookSubroute&&o?.id&&ft(t,o.id,"textbook_page");const l=p()==="ru"?{title:"Страница учебника",back:"Все учебники",pdf:"Скачать PDF",lessonPage:"Страница урока",openLesson:"Открыть урок",outline:"Что внутри",practice:"Практика",lessons:"Уроки учебника",previous:"Предыдущие уровни",next:"Следующие уровни"}:{title:"Textbook page",back:"All textbooks",pdf:"Download PDF",lessonPage:"Lesson page",openLesson:"Open lesson",outline:"Inside the textbook",practice:"Practice",lessons:"Textbook lessons",previous:"Previous levels",next:"Next levels"},c=bo(e.jlpt)||e.lessonIds?.[0]||a[0]?.id||"",d=h(e.recommendedCycle||{}),u=h(e.goal||{}),m=(e.previousLevels||[]).map(w=>`<a class="pill" href="#textbooks/${f(w)}">${i(w)}</a>`).join(""),g=(e.nextLevels||[]).map(w=>`<a class="pill" href="#textbooks/${f(w)}">${i(w)}</a>`).join("");return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(e.jlpt)} · ${i(l.title)}</p>
            <h1>${i(h(e.displayTitle||e.title||{}))}</h1>
            <p>${i(h(e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(l.back)}</button>
            <a class="btn primary" href="${f(e.pdfUrl||e.pdfFile||"")}" download="${f((e.pdfFile||e.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(l.pdf)}</a>
            <button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${f(e.jlpt)}">${i(l.lessonPage)}</button>
            ${ts("textbook",{level:e.jlpt})}
          </div>
        </div>

        <article class="jlpt-textbook-hero">
          <img class="jlpt-textbook-cover" src="${f(e.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
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
              ${g?`<div><strong>${i(l.next)}</strong><div class="tag-row">${g}</div></div>`:""}
            </div>
          </div>
        </article>

        <div class="metric-grid">
          ${T(e.jlpt,e.lessonCount||0,u,I(e.lessonCount||0,Math.max(1,r.jlptLessons.length)))}
          ${T(p()==="ru"?"Кандзи":"Kanji",e.kanjiCount||0,p()==="ru"?"в учебнике":"in textbook",I(e.kanjiCount||0,Math.max(1,r.cards.length)))}
          ${T(p()==="ru"?"Уроки":"Lessons",a.length,l.practice,I(a.length,Math.max(1,r.lessons.filter(w=>String(w.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()).length)))}
          ${T(p()==="ru"?"Переход":"Jump",r.activeTextbookLevel===e.jlpt?1:0,l.lessonPage,r.activeTextbookLevel===e.jlpt?100:0)}
        </div>

        ${xs(e.jlpt)}

        ${o?`
          <article class="jlpt-lesson-hero">
            <div>
              <span class="pill">${i(e.jlpt)}</span>
              <h2>${i(l.outline)}</h2>
              <p>${i(h(o.summary||{}))}</p>
            </div>
            <div class="mini-stat-row">
              ${T(p()==="ru"?"Грамматика":"Grammar",o.sections?.length||0,l.outline,I(o.sections?.length||0,4))}
              ${T(p()==="ru"?"Практика":"Practice",o.practice?.length||0,l.practice,I(o.practice?.length||0,4))}
            </div>
          </article>
          ${Ld(o)}
          <div class="jlpt-section-grid">
            ${o.goals?.length?`
              <article class="jlpt-section-card">
                <h3>${i(p()==="ru"?"Цели уровня":"Level goals")}</h3>
                <ul>${o.goals.map(w=>`<li>${i(h(w))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${o.sections?.map(w=>`
              <article class="jlpt-section-card">
                <h3>${i(h(w.title))}</h3>
                <p>${i(h(w.body))}</p>
                ${Array.isArray(w.points)&&w.points.length?`<ul>${w.points.map(v=>`<li>${i(h(v))}</li>`).join("")}</ul>`:""}
              </article>
            `).join("")}
            ${o.practice?.length?`
              <article class="jlpt-section-card">
                <h3>${i(l.practice)}</h3>
                <ul>${o.practice.map(w=>`<li>${i(h(w))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${o.checkpoint?.length?`
              <article class="jlpt-section-card">
                <h3>${i(p()==="ru"?"Чекпоинт":"Checkpoint")}</h3>
                <ul>${o.checkpoint.map(w=>`<li>${i(h(w))}</li>`).join("")}</ul>
              </article>
            `:""}
          </div>
        `:""}

        <div class="section-head">
          <div>
            <h2>${i(l.lessons)}</h2>
            <p>${i(p()==="ru"?"Карточки, входящие в этот учебник, и быстрые переходы в урок.":"Cards included in this textbook, with quick jumps into lessons.")}</p>
          </div>
          ${c?`<button class="btn primary" type="button" data-action="open-jlpt-lesson-start" data-jlpt="${f(e.jlpt)}">${i(l.openLesson)}</button>`:""}
        </div>
        <div class="lesson-grid">
          ${a.map(w=>Zf(w)).join("")||`<article class="empty-state"><h3>${i(p()==="ru"?"Уроки скоро появятся":"Lessons will appear soon")}</h3></article>`}
        </div>
      </section>
    `}function vh(e){r.activeTextbookLevel="N5",r.activeJlptLesson="N5",Cs();const t=String(r.activeTextbookSubroute||"");if(t==="final-test")return Ih();if(t==="review")return Lh();const n=Ze(t);return n?(z().currentLessonId=n.id,ft("N5",n.id,"n5_lesson_page"),Rt("N5",n,"n5_lesson_page"),xh(e,n)):wh(e)}function wh(e){const t=Kh(),n=je(),s=Se(),a=Eh(),o=r.n5Meta||{},l=h(o.principle||{});return`
      <section class="page textbooks-page n5-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N5 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(h(o.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <a class="btn ghost" href="${f(o.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N5_expanded_textbook.pdf" target="_blank" rel="noopener">${i(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero">
          <div class="n5-hero-copy">
            <span class="pill">80 ${i(n.kanji)}</span>
            <h2>${i(n.courseMap)}</h2>
            <p>${i(l)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#textbooks/N5/${f(a?.id||"n5-lesson-1")}" data-action="n5-open-lesson" data-id="${f(a?.id||"n5-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n5-review" data-mode="due">${i(n.review)}</button>
              <a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>
            </div>
          </div>
          ${Qn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${T(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,I(t.studied,t.total))}
          ${T(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,I(t.completedLessons,s.length))}
          ${T(n.reviews,t.reviews,n.srs,I(t.reviews,Math.max(t.total,1)))}
          ${T(n.difficult,t.difficult,n.filterDifficult,I(t.difficult,Math.max(t.total,1)))}
        </div>

        <section class="n5-panel">
          <div>
            <h2>${i(n.lessonsTitle)}</h2>
            <p>${i(n.lessonsDescription)}</p>
          </div>
          <div class="n5-lesson-grid">
            ${s.map(c=>bh(c)).join("")}
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

        ${xs("N5")}
      </section>
    `}function bh(e){const t=Ti(e.id),n=je();let s=e.kanji.filter(a=>z().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#textbooks/N5/${f(e.id)}" data-action="n5-open-lesson" data-id="${f(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${f(`${s}/${e.kanji.length}`)}"><i style="width:${I(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Bh(t))}</small>
      </a>
    `}function Ns(){return r.progress.jlptLessonStudy=kl(Va(),r.progress.jlptLessonStudy||{}),r.progress.jlptLessonStudy}function kh(e,t){return`${String(e||"").toUpperCase()}:${String(t||"")}`}function Ye(e,t,n="player"){return`jlpt-${String(e||"").toLowerCase()}-${n}-${String(t||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Bn(e,t,n){const s=Ns(),a=kh(e,t?.id),o=vl();let l=s.sessions[a];l||(l={...o,level:String(e||"").toUpperCase(),lessonId:String(t?.id||""),startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()},s.sessions[a]=l),l.level=String(e||l.level||"").toUpperCase(),l.lessonId=String(t?.id||l.lessonId||""),l.answers||={},l.phase=wl(l.phase),l.startedAt||=new Date().toISOString(),l.updatedAt||=new Date().toISOString();const c=Array.isArray(n)?n.length:0,d=c?n.findIndex(m=>!l.answers[m.id]):-1,u=Object.keys(l.answers||{}).length;return l.completedAt?(l.phase="done",l.currentIndex=c):d<0?(l.currentIndex=c,l.phase="test",l.testOpenedAt||=l.updatedAt||new Date().toISOString()):(l.currentIndex=d,l.phase!=="test"&&(l.phase="study")),s.activeSessionKey=a,s.lastUpdatedAt=new Date().toISOString(),{session:l,key:a,answeredCount:u,currentIndex:l.currentIndex,total:c}}function yh(e,t){return!e||!Array.isArray(t)||!t.length||e.session?.phase!=="study"?null:t[Math.min(Math.max(Number(e.currentIndex||0),0),t.length-1)]||null}function $h(e){const t=Array.isArray(e)?e:[];return t.length?`
      <ul class="example-list lesson-study-example-list">
        ${t.slice(0,2).map(na).join("")}
      </ul>
    `:""}function jh(e){const t=Us(e),n=t.length>0;return`
      <details class="lesson-study-details">
        <summary>${i(p()==="ru"?"Показать подробнее":"Show details")}</summary>
        <div class="lesson-study-details-body">
          ${Zi(e)}
          ${n?`
            <div>
              <h3>${i(S("strokeOrder"))}</h3>
              <ol class="stroke-list lesson-study-strokes">${t.map(s=>`<li>${i(s)}</li>`).join("")}</ol>
            </div>
          `:""}
        </div>
      </details>
    `}function Sh(e,t,n,s,a,o,l={}){if(!n)return"";const c=typeof l.examples=="function"?l.examples(n,t)||[]:[],d=typeof l.sentence=="function"?l.sentence(n,t):"",u=typeof l.extra=="function"?l.extra(n,t):"",m=l.answerAction||"jlpt-lesson-answer",g=String(e||n.jlpt||"").toUpperCase(),w=Number(s||0),v=A(n.id),$=t?.id||"";return`
      <article class="lesson-player-card lesson-study-card">
        <div class="lesson-player-kanji">
          <div class="lesson-player-glyph">${i(n.kanji)}</div>
          <div class="lesson-player-kanji-copy">
            <div class="tag-row compact-tags">
              <span class="pill">${i(o.step)} ${i(w+1)}</span>
              <span class="pill">${i(v.state)}</span>
              ${n.jlpt?`<span class="pill">${i(n.jlpt)}</span>`:""}
              ${n.strokes?`<span class="pill">${i(n.strokes)} ${i(S("strokes"))}</span>`:""}
              ${Ed(n)}
            </div>
            <h2>${i(L(n))}</h2>
            <p class="label lesson-study-progress-label">${i(e||n.jlpt||"")} · ${i(p()==="ru"?`Кандзи ${Math.min(w+1,a)} из ${a}`:`Kanji ${Math.min(w+1,a)} of ${a}`)}</p>
            <dl class="n5-readings lesson-study-readings">
              <div><dt>${i(o.onyomi)}</dt><dd>${i(q(n.onyomi||"—"))}</dd></div>
              <div><dt>${i(o.kunyomi)}</dt><dd>${i(q(n.kunyomi||n.hiragana||"—"))}</dd></div>
            </dl>
            ${$h(c)}
            ${d}
            ${u?`<div class="lesson-study-extra">${u}</div>`:""}
            ${jh(n)}
          </div>
        </div>
        <div class="lesson-choice-grid lesson-study-actions">
          <button class="btn success" type="button" data-action="${f(m)}" data-level="${f(g)}" data-lesson="${f($)}" data-card="${f(n.id)}" data-value="remember">${i(o.remember)}<small>${i(p()==="ru"?"в повторение":"to review")}</small></button>
          <button class="btn danger" type="button" data-action="${f(m)}" data-level="${f(g)}" data-lesson="${f($)}" data-card="${f(n.id)}" data-value="forget">${i(o.notRemember)}<small>${i(p()==="ru"?"ещё раз":"show again")}</small></button>
        </div>
      </article>
    `}function Nh(e,t,n,s,a){return`
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
    `}function Jr(e,t,n,s,a={}){const o=Bn(e,t,n),l=yh(o,n),c=Number(o.answeredCount||0),d=Number(o.total||0),u=a.playerId||Ye(e,t?.id,"player"),m=d?I(c,d):0,g=l?`${p()==="ru"?"Кандзи":"Kanji"} ${Math.min(c+1,d)}/${d}`:o.session?.phase==="done"?p()==="ru"?"Урок завершён":"Lesson complete":p()==="ru"?"Тест открыт":"Test open",w=l?L(l):s.lessonComplete;return`
      <article class="study-card lesson-player lesson-study-player" id="${f(u)}">
        <div class="lesson-player-progress">
          <span>${i(g)}</span>
          <strong>${i(w)}</strong>
          <div class="meter"><i style="width:${m}%"></i></div>
        </div>
        ${l?Sh(e,t,l,o.currentIndex,d,s,a):Nh(e,t,s,d,c)}
      </article>
    `}function xh(e,t){const n=je(),s=Ot(t),a=Ls(t),o=Ti(t.id),l=Bn("N5",t,s);let c=o==="completed";const d=`n5:${t.id}`;ee.has(d)&&(c=!0);const u=c,m=a.filter(R=>Ri(R.id)?.correct).length,g=a.length>0&&m===a.length,w=s.filter(R=>z().studiedKanji[R.kanji]).length,v=t.kanji.length,$=w>=v,y=!c&&g&&$,x=t.kanji.filter(R=>z().difficultKanji[R]).join(" · "),b=Se().find(R=>R.order===t.order+1),k=Ye("N5",t.id,"player"),D=Ye("N5",t.id,"test");return`
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
            ${T(n.studiedKanji,`${Math.min(l.answeredCount,v)}/${v}`,n.kanji,I(l.answeredCount,v))}
            ${T(n.exercises,`${m}/${a.length}`,n.correct,I(m,a.length))}
          </div>
        </article>

        ${Jr("N5",t,s,n,{playerId:k,answerAction:"jlpt-lesson-answer",examples:R=>et(R),sentence:R=>Ch(R,t)})}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(R=>`
              <article>
                <strong>${i(R.jp)}</strong>
                <span>${i(q(R.reading||""))}</span>
                <small>${i(h({ru:R.ru,en:R.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${f(D)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(R=>Tc(R)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(R=>z().studiedKanji[R.kanji]).length}/8</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(x||n.none)}</span>
            </div>
            ${!c&&!y?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи (8/8) и упражнения урока.":"Complete all kanji (8/8) and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n5-complete-lesson" data-id="${f(t.id)}" ${u||!y?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n5-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#textbooks/N5/${f(b.id)}" data-action="n5-open-lesson" data-id="${f(b.id)}">${i(n.nextLesson)}</a>`:`<a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>`}
          </div>
        </section>
      </section>
    `}function Ch(e,t){const n=t.sentences.find(s=>s.jp.includes(e.kanji))||t.sentences[0];return n?`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(q(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
      </div>
    `:""}function Tc(e){const t=je(),n=Ri(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&vn("N5",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${f(Gc(e.id))}" type="text" maxlength="2" autocomplete="off" value="${f(n?.selected||"")}" aria-label="${f(h(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n5-check-input" data-id="${f(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n5-answer" data-id="${f(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Rc(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n5-answer" data-id="${f(e.id)}" data-value="${f(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Rc(e,n)}
      </article>
    `}function Rc(e,t){if(!t)return"";const n=je(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Lh(e){const t=je(),n=z().activeReviewMode||"due",s=nv(n);return`
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
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n5-review" data-mode="${f(a.id)}">${i(h(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>Ah(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Ah(e,t){const n=je(),s=A(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Nn(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(L(e))}</h3>
        <p>${i(et(e)[0]?.word||e.hiragana||"")} · ${i(et(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n5-srs" data-id="${f(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n5-srs" data-id="${f(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Ih(e){const t=je(),n=r.n5FinalTest||{},s=zc(),a=z().finalTest,o=Ht(a,s),l=o.answered,c=o.ready,d=r.finalTestBusy;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const g=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==g)&&(a.percent=g),a.completedAt||(a.completedAt=new Date().toISOString()),N()}const u=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,m=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
          ${T(t.questions,`${l}/${s.length}`,t.finalTest,I(l,s.length))}
          ${T(t.score,u||m>0?`${m}%`:"—",`${n.passingPercent||80}%`,u||m>0?m:0)}
          ${T(t.mistakes,u?(a.mistakes||[]).length:0,t.difficult,u?I((a.mistakes||[]).length,s.length):0)}
        </div>

        ${u?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n5-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${St("N5","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((g,w)=>Th(g,w)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n5-final-submit" ${d||u?"disabled":""}>${i(u?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${St("N5","btn ghost")}
          <button class="btn ghost" type="button" data-action="n5-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Th(e,t){const n=z().finalTest.answers?.[e.id],s=!!z().finalTest.completedAt,a=r.finalTestModal&&r.finalTestModal.level==="N5"&&r.finalTestModal.kind==="warning"?r.finalTestModal:null,o=!!(a&&Array.isArray(a.missingIds)&&a.missingIds.includes(e.id));return`
      <article id="${f(Os("n5",e.id))}" class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":o?"is-missing":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(l=>{const c=n===l.value;return`<button class="btn ${s&&l.value===e.answer?"success":c?"primary":"ghost"}" type="button" data-action="n5-final-answer" data-id="${f(e.id)}" data-value="${f(l.value)}">${i(l.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(je().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function je(){return p()==="ru"?{title:"JLPT N5",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",courseMap:"Полноценный интерактивный учебник N5",continue:"Продолжить",review:"Повторять N5",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",reviews:"Повторения",difficult:"Сложные",filterDifficult:"фильтр",srs:"Повторение",lessons:"уроков",lessonsTitle:"10 уроков по 8 кандзи",lessonsDescription:"Каждый урок ведёт от знака к слову, предложению, упражнению, письму и повторению.",reviewPlan:"План повторения на 30 дней",day:"день",lesson:"Урок",backToN5:"Рљ N5",lessonChain:"Кандзи -> слово -> предложение -> практика",lessonChainText:"Сначала узнаёшь знак, затем видишь чтение в слове, читаешь предложение, отвечаешь и отправляешь карточку в повторение.",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Читай вслух: так чтение перестаёт быть отдельной таблицей.",exercisesText:"Смешанная практика работает внутри урока и повторения.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока доступны в повторении.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда все 8 кандзи добавлены в повторение.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",remember:"Помню",notRemember:"Не помню",details:"Показать подробнее",completed:"Пройдено",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N5-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N5.",noReviewCards:"Сейчас нет карточек в этом фильтре.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N5",finalPassed:"N5 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N5",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",courseMap:"Full interactive N5 textbook",continue:"Continue",review:"Review N5",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",reviews:"Reviews",difficult:"Difficult",filterDifficult:"filter",srs:"Review",lessons:"lessons",lessonsTitle:"10 lessons, 8 kanji each",lessonsDescription:"Each lesson moves from sign to word, sentence, exercise, writing, and SRS.",reviewPlan:"30-day review plan",day:"day",lesson:"Lesson",backToN5:"To N5",lessonChain:"Kanji -> word -> sentence -> practice",lessonChainText:"First recognize the sign, then see the reading in a word, read a sentence, answer, and send the card to SRS.",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud so readings stop feeling like a separate table.",exercisesText:"Mixed practice works inside lessons and review.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N5 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when all 8 kanji are in review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N5 review",reviewDescription:"Review due cards, difficult kanji, or the full N5 set.",noReviewCards:"No cards in this filter right now.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N5",finalPassed:"N5 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function _c(){return p()==="ru"?{title:"Чтение и самопроверка",description:"Тексты из md-файла для чтения вслух и проверки понимания по вопросам ниже.",questions:"Проверочные вопросы",noQuestions:"В этом тексте пока нет вопросов.",texts:"текстов",genre:"Жанр",source:"Опора",goal:"Цель"}:{title:"Reading and self-check",description:"Texts from the md file for reading aloud and checking understanding with the questions below.",questions:"Check questions",noQuestions:"No questions are listed for this text.",texts:"texts",genre:"Genre",source:"Source",goal:"Goal"}}function Mc(e){return F(e)||String(e||"").toUpperCase()}function Pc(e){const t=Mc(e);return Array.isArray(r.jlptReadingByLevel?.[t])?r.jlptReadingByLevel[t]:[]}function Ii(e){const t=r.jlptReadingTranslations?.[String(e?.id||"")]||{};return{title:{ru:String(t.titleRu||e?.title||"").trim(),en:String(t.titleEn||e?.title||"").trim()},translation:{ru:String(t.ru||"").trim(),en:String(t.en||"").trim()}}}function Ec(e){return q(Ds(String(e?.text||"")).replace(/\s+/g," ").trim())}function Rh(e){const t=F(e);return t==="N5"?{maxBlanks:2,maxBlankChars:4}:t==="N4"?{maxBlanks:2,maxBlankChars:5}:t==="N3"?{maxBlanks:3,maxBlankChars:6}:t==="N2"?{maxBlanks:3,maxBlankChars:7}:{maxBlanks:4,maxBlankChars:8}}function _h(){const e=Array.isArray(r.cards)?r.cards:[];if(!e.length)return[];const t=[];return be.forEach(n=>{Pc(n).forEach((s,a)=>{const o=Ii(s),l=Ec(s),c=Hi({id:`jlpt-md-${s.id}`,jlpt:n,sentence:s.text||"",reading:l,translationRu:o.translation.ru,translationEn:o.translation.en,source:"markdown",sourceId:String(s.id||""),genre:s.genre||"",goal:s.goal||""},e,Rh(n));c&&(c.tiles=Gt(c,e),c.source="markdown",c.sourceId=String(s.id||""),c.sourceKind="markdown",c.sourceTitle=o.title,c.title=o.title,c.genre=s.genre||"",c.goal=s.goal||"",c.passageSource=s.source||"",c.questions=Array.isArray(s.questions)?s.questions:[],c.level=n,c.order=a+1,t.push(c))})}),t}function Mh(e){const t=Ii(e),n=Ec(e),s=n?Bd(n):"",a=h(t.translation);return`
      <details class="reading-translation-wrap jlpt-reading-translation">
        <summary class="btn ghost reading-translation-toggle" role="button">${i(Vi())}</summary>
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
            <span>${i(Vi())}</span>
            <strong>${i(a||(p()==="ru"?"Нет данных":"No data"))}</strong>
          </div>
        </div>
      </details>
    `}function xs(e){const t=Pc(e);if(!t.length)return"";const n=_c(),s=Mc(e),a=wa(s,"textbook_reading_block"),o=Hs(s);return(a||o)&&N(),`
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
          ${t.map((l,c)=>Ph(l,s,c)).join("")}
        </div>
      </section>
    `}function Ph(e,t,n){const s=_c(),a=Ii(e),o=Array.isArray(e?.questions)?e.questions:[];return`
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
        ${Mh(e)}
        <details class="jlpt-reading-questions">
          <summary>${i(s.questions)}${o.length?` · ${o.length}`:""}</summary>
          ${o.length?`<ol>${o.map(l=>`<li>${i(l)}</li>`).join("")}</ol>`:`<p>${i(s.noQuestions)}</p>`}
        </details>
      </article>
    `}function Cs(){r.progress.n5Course=$l(Za(),r.progress.n5Course||{});const e=Se();!Ze(r.progress.n5Course.currentLessonId)&&e[0]&&(r.progress.n5Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n5Course.completedLessons[s.id]);return!r.progress.n5Course.currentLessonId&&n&&(r.progress.n5Course.currentLessonId=n.id),r.progress.n5Course}function z(){return Cs()}function Se(){return r.n5Textbook?.items||[]}function Ze(e){const t=String(e||"");return t&&Se().find(n=>n.id===t||n.id===`n5-${t}`||n.id.endsWith(`-${t}`))||null}function Eh(){return Ze(z().currentLessonId)||Se().find(e=>!z().completedLessons[e.id])||Se()[0]||null}function Ot(e){return(e?.kanji||[]).map(t=>Dh(t,e)).filter(Boolean)}function lt(){const e=new Set;return Se().flatMap(t=>Ot(t)).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Dh(e,t=null){const n=String(e||""),s=r.n5KanjiCatalog?.find(l=>l.kanji===n)||null,a=r.cards.find(l=>l.kanji===n&&String(l.jlpt||"").toUpperCase()==="N5")||r.cards.find(l=>l.kanji===n)||null,o=t?.id||s?.lessonId||null;return a&&s?vr({...a,lessonId:a.lessonId||o},s):a||(s?vr({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:o,jlpt:"N5",examples:[]},s):null)}function zr(e,t=[]){const n=(Array.isArray(t)?t:[]).slice(0,3).map(s=>({...s,reading:q(s.reading||s.hiragana||s.kana||e.hiragana||"")}));return n.length?n:[{word:e.kanji,reading:q(e.hiragana||""),romaji:e.romaji||"",translation:L(e)}]}function et(e){return zr(e,e.examples)}function Oh(e,t){const n=t?.word||e.kanji,s=q(t?.reading||e.hiragana||"");return p()==="ru"?`Свяжи ${e.kanji} со значением «${L(e)}» и сразу проговори слово: ${n}${s?` (${s})`:""}.`:`Connect ${e.kanji} with "${L(e)}" and say the word right away: ${n}${s?` (${s})`:""}.`}function Kh(){const e=lt(),t=z(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{A(s.id).state!=="New"&&n.add(s.kanji)}),{total:r.n5Meta?.kanjiCount||e.length||80,studied:n.size,completedLessons:hn(),reviews:e.reduce((s,a)=>s+Number(A(a.id).reviews||A(a.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Ti(e){const t=z(),n=`n5:${e}`;return ee.has(n)||t.completedLessons[e]?"completed":Ze(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function Bh(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function hn(){return Se().filter(t=>Ti(t.id)==="completed").length}function Ls(e){const t=Ot(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n5Exercises?.types||[]).map(y=>[y.type,y.title])),a=Object.fromEntries((r.n5Exercises?.types||[]).map(y=>[y.type,y])),o=y=>a[y]||{rewardXp:r.n5Meta?.rewards?.exerciseXp||7,rewardMoon:r.n5Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:L(c),kanji:c.kanji,cardId:c.id,options:ct({value:c.id,label:L(c)},t.slice(1).map(y=>({value:y.id,label:L(y)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:L(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:ct({value:d.kanji,label:d.kanji},t.filter(y=>y.id!==d.id).map(y=>({value:y.kanji,label:y.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=et(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word,answer:m.reading,answerLabel:m.reading,kanji:u.kanji,cardId:u.id,options:ct({value:m.reading,label:m.reading},t.flatMap(y=>et(y).map(x=>({value:x.reading,label:x.reading}))).filter(y=>y.value!==m.reading),3),...o("reading")});const g=n[0];g&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:g.jp,answer:h({ru:g.ru,en:g.en}),answerLabel:h({ru:g.ru,en:g.en}),kanji:t[0].kanji,cardId:t[0].id,options:ct({value:h({ru:g.ru,en:g.en}),label:h({ru:g.ru,en:g.en})},n.slice(1).map(y=>({value:h({ru:y.ru,en:y.en}),label:h({ru:y.ru,en:y.en})})),1),...o("sentence")});const w=t[3]||t[0],v=et(w)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Insert the word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ce(v)}В»?`:`Which word matches "${Ce(v)}"?`,answer:v.word,answerLabel:v.word,kanji:w.kanji,cardId:w.id,options:ct({value:v.word,label:v.word},t.flatMap(y=>et(y).map(x=>({value:x.word,label:x.word}))).filter(y=>y.value!==v.word),2),...o("missing-word")});const $=t[4]||t[0];return l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${L($)}`:`Type the kanji for: ${L($)}`,answer:$.kanji,answerLabel:$.kanji,kanji:$.kanji,cardId:$.id,options:[],...o("active-recall")}),l.slice(0,r.n5Exercises?.lessonQuestionCount||6).map(y=>({...y,level:"N5",lessonId:e.id}))}function ct(e,t,n=0){const s=new Set([String(e.value)]),a=[e];if(t.forEach(c=>{const d=String(c.value||"");!d||s.has(d)||a.length>=4||(s.add(d),a.push(c))}),lt().forEach(c=>{if(a.length>=4)return;const d={value:c.id,label:c.kanji};s.has(String(d.value))||(s.add(String(d.value)),a.push(d))}),a.length<=1)return a;const l=n%a.length;return[...a.slice(l),...a.slice(0,l)]}function Dc(e){for(const t of Se()){const n=Ls(t).find(s=>s.id===e);if(n)return n}return null}function vn(e,t,n=""){return r.route==="review"&&r.activeExerciseReviewLevel===String(e||"").toUpperCase()&&String(r.activeExerciseReviewId||"")===String(t||"")&&(!n||String(r.activeExerciseReviewSource||"")===String(n||""))}function Ur(e,t,n){return vn(e,n)?r.reviewExerciseResults?.[String(n)]||null:t.exerciseResults?.[String(n)]||null}function Fh(e,t,n){const s=F(t);if(!e||!s||!n)return null;e.exerciseSrs||={};const a=e.exerciseSrs[String(n.id)]||null;if(a)return Xt(a,{level:s,lessonId:n.lessonId||a.lessonId||"",exerciseId:n.id,cardId:n.cardId||a.cardId||"",kanji:n.kanji||a.kanji||"",type:n.type||a.type||"",title:n.title||a.title||null,prompt:n.prompt||a.prompt||"",answer:n.answer||a.answer||"",answerLabel:n.answerLabel||a.answerLabel||""});const o=Wn(s,n.lessonId||"",n.id,n);return e.exerciseSrs[String(n.id)]=o,o}function Jh(e,t,n,s){if(!e||!n)return;const a=F(t);a&&(e.exerciseSrs||={},e.exerciseSrs[String(n.id)]=Xt(s,{level:a,lessonId:n.lessonId||s?.lessonId||"",exerciseId:n.id,cardId:n.cardId||s?.cardId||"",kanji:n.kanji||s?.kanji||"",type:n.type||s?.type||"",title:n.title||s?.title||null,prompt:n.prompt||s?.prompt||"",answer:n.answer||s?.answer||"",answerLabel:n.answerLabel||s?.answerLabel||""}))}function Gr(e,t,n,s,a,o={}){const l=F(e);if(!l||!t||!n)return;const c=new Date().toISOString(),d=vn(l,n.id);if(d&&r.reviewExerciseResults?.[n.id])return;const u={selected:s,correct:a,checkedAt:c};d?(r.reviewExerciseResults||={},r.reviewExerciseResults[n.id]=u,r.reviewQueueLastKind="exercise"):t.exerciseResults[n.id]=u;const m=H(Fh(t,l,n)||Wn(l,n.lessonId||"",n.id,n)),g=ue(m,a?"good":"again");if(Jh(t,l,n,g),Qt(m,g,a?"good":"again"),ve(),a){if(r.progress.totalCorrect+=1,!d&&!t.completedExercises[n.id]){t.completedExercises[n.id]=c,o.markCompleted?.(c),(o.markStudied||(()=>{}))();const v=Number(o.rewardXp||0),$=Number(o.rewardMoon||0);(v||$)&&O(v,$,o.rewardKey||`exercise:${n.id}`)}C("answer_correct")}else{if(r.progress.totalWrong+=1,o.markWrong?.(),(o.markDifficult||(()=>{}))(),n.type==="reading"||n.type==="missing-word"){const v=n.answerLabel||n.answer;v&&o.markWordMistake?.(v)}C("answer_wrong")}U(),N(),d&&(r.pendingFocus="__scroll-top__"),j()}function Oc(e){const t=F(e?.level||"");return t==="N5"?{xp:Number(r.n5Meta?.rewards?.exerciseXp||7),moon:Number(r.n5Meta?.rewards?.exerciseMoon||1)}:t==="N4"?{xp:Number(r.n4Meta?.rewards?.readingXp||r.n4Meta?.rewards?.exerciseXp||10),moon:Number(r.n4Meta?.rewards?.readingMoon||r.n4Meta?.rewards?.exerciseMoon||1)}:t==="N3"?{xp:Number(r.n3Meta?.rewards?.readingXp||r.n3Meta?.rewards?.exerciseXp||10),moon:Number(r.n3Meta?.rewards?.readingMoon||r.n3Meta?.rewards?.exerciseMoon||1)}:t==="N2"?{xp:Number(r.n2Meta?.rewards?.readingXp||r.n2Meta?.rewards?.exerciseXp||10),moon:Number(r.n2Meta?.rewards?.readingMoon||r.n2Meta?.rewards?.exerciseMoon||1)}:{xp:Number(r.n1Meta?.rewards?.readingXp||r.n1Meta?.rewards?.exerciseXp||10),moon:Number(r.n1Meta?.rewards?.readingMoon||r.n1Meta?.rewards?.exerciseMoon||1)}}function Kc(e,t,n,s={}){if(!e?.id)return;const a=new Date().toISOString(),o=vn(e.level,e.id,"reading"),l=H(pt(e)||ut(e));if(r.reviewExerciseResults||={},e.kind==="cloze"){l.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():l.selectedIndices||[],l.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(x=>({kanji:String(x?.kanji||""),reading:String(x?.reading||"")})).filter(x=>x.kanji):l.selectedTiles||[],l.selectedText=String(t||""),l.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.slice():l.wrongIndexes||[],l.completed=!0,l.completedAt=a,l.correct=!!n,l.answers={cloze:{selected:String(t||""),correct:!!n,checkedAt:a}},$n(e,l),r.reviewExerciseResults[e.id]=H(l),n?(r.progress.totalCorrect+=1,C("answer_correct")):(r.progress.totalWrong+=1,C("answer_wrong"));const v=H(l),$=ue(v,n?"good":"again");$.selectedIndices=l.selectedIndices,$.selectedTiles=l.selectedTiles,$.selectedText=l.selectedText,$.wrongIndexes=l.wrongIndexes,$.completed=!0,$.completedAt=a,$.correct=!!n,$.answers=l.answers,$n(e,$),r.reviewExerciseResults[e.id]=H($),Qt(v,$,n?"good":"again"),ve();const y=Oc(e);n?O(y.xp,y.moon,`reading:${e.id}`):O(Math.max(1,Math.round(y.xp*.35)),0,`reading:${e.id}:again`),U(),N(),o&&(r.pendingFocus="__scroll-top__"),j();return}const c=e.question||e.questions?.[0]||null,d=String(s.questionKey||c?.id||e.id);if(l.answers||={},l.answers[d])return;if(l.answers[d]={selected:String(t||""),correct:!!n,checkedAt:a},l.completed=!!d&&Object.keys(l.answers).length>=ao(),l.completedAt=l.completed?a:l.completedAt||null,l.correct=l.completed?Object.values(l.answers).every(v=>!!v?.correct):!1,l.selectedText=String(t||""),$n(e,l),r.reviewExerciseResults[e.id]=H(l),n?(r.progress.totalCorrect+=1,C("answer_correct")):(r.progress.totalWrong+=1,C("answer_wrong")),N(),!l.completed){j();return}const u=H(l),m=Object.values(l.answers).every(v=>!!v?.correct),g=ue(u,m?"good":"again");g.answers=l.answers,g.completed=!0,g.completedAt=a,g.correct=m,g.selectedText=String(t||""),g.wrongQuestions=Object.entries(l.answers).filter(([,v])=>!v?.correct).map(([v])=>v),$n(e,g),r.reviewExerciseResults[e.id]=H(g),Qt(u,g,m?"good":"again"),ve();const w=Oc(e);m?O(w.xp,w.moon,`reading:${e.id}`):O(Math.max(1,Math.round(w.xp*.25)),0,`reading:${e.id}:again`),U(),N(),o&&(r.pendingFocus="__scroll-top__"),j()}function zh(e){const t=Hn();if(!t||t.source!=="reading"||!t.exercise)return;const n=t.exercise.question||t.exercise.questions?.[0]||null;if(!n)return;const s=String(e.dataset.value||""),a=s===String(n.answer||"");Kc(t.exercise,s,a,{questionKey:String(e.dataset.question||n.id||t.exercise.id)})}function Uh(e){const t=Hn();if(!t||t.source!=="reading"||t.exercise?.kind!=="cloze")return;const n=t.exercise,s=H(pt(n)||ut(n));if(s.completed||s.selectedIndices?.includes(e))return;const a=Math.max(1,tt(n).length);if(s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():[],s.selectedIndices.length>=a){E(p()==="ru"?"Все пропуски уже заполнены.":"All blank slots are already filled.");return}if(s.selectedIndices.push(e),s.selectedTiles=s.selectedIndices.map(o=>n.tiles?.[o]).filter(Boolean),s.selectedText=s.selectedTiles.map(o=>o.kanji).join(""),$n(n,s),r.activeExerciseReviewSelection=s.selectedIndices.slice(),r.reviewExerciseResults[n.id]=H(s),N(),s.selectedIndices.length>=a){Bc();return}j()}function Gh(){const e=Hn();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=H(pt(t)||ut(t));n.completed||!n.selectedIndices?.length||(n.selectedIndices=n.selectedIndices.slice(0,-1),n.selectedTiles=n.selectedIndices.map(s=>t.tiles?.[s]).filter(Boolean),n.selectedText=n.selectedTiles.map(s=>s.kanji).join(""),r.activeExerciseReviewSelection=n.selectedIndices.slice(),r.reviewExerciseResults[t.id]=H(n),$n(t,n),N(),j())}function qh(){const e=Hn();if(!e||e.source!=="reading"||!e.exercise)return;const t=e.exercise,n=H(pt(t)||ut(t));n.completed||(n.selectedIndices=[],n.selectedTiles=[],n.selectedText="",n.wrongIndexes=[],r.activeExerciseReviewSelection=[],r.reviewExerciseResults[t.id]=H(n),$n(t,n),N(),j())}function Bc(){const e=Hn();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=tt(t),s=H(pt(t)||ut(t)),a=Array.isArray(s.selectedIndices)?s.selectedIndices:[];if(a.length<n.length){E(p()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.");return}const o=a.map(d=>t.tiles?.[d]).filter(Boolean),l=o.length===n.length&&o.every((d,u)=>d?.kanji===n[u]?.kanji),c=o.map((d,u)=>d?.kanji===n[u]?.kanji?-1:u).filter(d=>d>=0);Kc(t,o.map(d=>d.kanji).join(""),l,{selectedIndices:a,selectedTiles:o,wrongIndexes:c})}function Hh(){r.activeExerciseReviewTranslationOpen=!r.activeExerciseReviewTranslationOpen,j()}function Ri(e){return Ur("N5",z(),e)}function Xh(e){const t=Dc(e.dataset.id);if(!t)return;const n=e.dataset.value||"",s=n===t.answer;Fc(t,n,s)}function Qh(e){const t=Dc(e);if(!t)return;const n=document.getElementById(Gc(t.id)),s=n?String(n.value||"").trim():"";Fc(t,s,s===t.answer)}function Fc(e,t,n){const s=z();Gr("N5",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n5Meta?.rewards?.exerciseXp||7),rewardMoon:Number(e.rewardMoon||r.n5Meta?.rewards?.exerciseMoon||1),rewardKey:`n5_exercise:${e.id}`,markStudied:()=>Fn(e.kanji,e.cardId),markDifficult:()=>As(e.kanji,e.cardId),markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Wh(e,t,n,s){const a=F(e)||String(e||"").toUpperCase(),o=a==="N5"?Ze(t):a==="N4"?Kt(t):a==="N3"?Ft(t):a==="N2"?zt(t):null;if(!o)return;const l=Ol(a,o),c=l.find(g=>String(g.id)===String(n))||X(n);if(!c)return;const d=Bn(a,o,l);if(d.session.answers?.[c.id])return;const u=new Date().toISOString();d.session.answers[c.id]={remembered:!!s,rating:s?"good":"again",answeredAt:u};const m=l.findIndex(g=>String(g.id)===String(c.id));if(d.session.currentIndex=m>=0?m+1:Math.min(Number(d.session.currentIndex||0)+1,l.length),d.session.phase=d.session.currentIndex>=l.length?"test":"study",d.session.updatedAt=u,d.session.phase==="test"?(d.session.testOpenedAt||=u,r.pendingFocus=Ye(a,o.id,"test")):r.pendingFocus=Ye(a,o.id,"player"),a==="N5"){Jc(c.id,s?"good":"again","review");return}if(a==="N4"){Zc(c.id,s?"good":"again","review");return}if(a==="N3"){ud(c.id,s?"good":"again","review");return}a==="N2"&&jd(c.id,s?"good":"again","review")}function Jc(e,t,n="review"){const s=X(e);if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,l=a?"hard":t,c=H(A(s.id)),d=ue(c,o,l);r.progress.cards[s.id]=d,Qt(c,d,l),ve(),Fn(s.kanji,s.id),z().srsKanji[s.kanji]=new Date().toISOString(),a?(As(s.kanji,s.id,!1),r.progress.totalCorrect+=1,O(r.n5Meta?.rewards?.hardXp||2,1,`n5_srs_lesson_hard:${s.id}`),C("answer_correct")):kn(t)?(As(s.kanji,s.id),r.progress.totalWrong+=1,O(r.n5Meta?.rewards?.hardXp||2,0,`n5_srs_hard:${s.id}`),C("answer_wrong")):(r.progress.totalCorrect+=1,O(t==="easy"?r.n5Meta?.rewards?.knowXp||6:r.n5Meta?.rewards?.addToSrsXp||4,1,`n5_srs:${s.id}`),C("answer_correct")),U(),N(),j()}function Vh(e){const t=X(e);if(!t)return;const n=z();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Fn(t.kanji,t.id),O(8,1,`n5_writing:${t.id}`)),U(),N(),j()}function Yh(e){const t=Ze(e);if(!t)return;const n=z(),s=`n5:${t.id}`;if(ee.has(s)||n.completedLessons[t.id]){j();return}const a=Ot(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока (8/8).":"Study all kanji in the lesson first (8/8).";typeof E=="function"&&E(w);return}const l=Ls(t);if(!(l.length>0&&l.every(w=>Ri(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof E=="function"&&E(w);return}ee.add(s),Ot(t).forEach(w=>{Fn(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const v=A(w.id);v.state==="New"&&(r.progress.cards[w.id]=ue(H(v),"good"))}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=Se().find(w=>w.order===t.order+1)?.id||t.id;const d=Ns(),u=d.sessions[n5SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n5SessKey,d.lastUpdatedAt=w}z();try{const w=xn,v=localStorage.getItem(w),$=v?JSON.parse(v):{};$.n5Course||($.n5Course={}),$.n5Course.completedLessons||($.n5Course.completedLessons={}),$.n5Course.completedLessons[t.id]=new Date().toISOString(),localStorage.setItem(w,JSON.stringify($)),r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.completedLessons=r.progress.n5Course.completedLessons||{},r.progress.n5Course.completedLessons[t.id]=new Date().toISOString()}catch(w){console.warn("JLPT persist failed",w)}hn()>=10&&Object.keys(n.studiedKanji||{}).length>=80&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N5")||r.progress.unlockedJlptLevels.push("N5"),r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"));const m=r.n5Meta?.rewards?.lessonCompleteXp||45,g=r.n5Meta?.rewards?.lessonCompleteMoon||6;O(m,g,`n5_lesson:${t.id}`),Ge({title:`${je().lessonComplete}: ${h(t.title)}`,message:je().lessonCompleteText,xp:m,coins:g,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),C("lesson_complete"),U(),N(),j()}function Fn(e,t=null){if(!e)return;const n=z();fs(n,e)}function As(e,t=null,n=!0){if(e&&(z().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=A(t);s.state!=="New"&&(r.progress.cards[t]=ue(H(s),"again"))}}function Zh(e){const t=Ze(e);t&&(z().currentLessonId=t.id,ft("N5",t.id,"n5_lesson_open"),Rt("N5",t,"n5_lesson_open"),Is(t.id))}function ev(){Is("")}function tv(e=null){e&&(z().activeReviewMode=e),Is("review")}function Is(e){r.route="textbooks",r.activeTextbookLevel="N5",r.activeTextbookSubroute=e||null;const t=e?`#textbooks/N5/${encodeURIComponent(e)}`:"#textbooks/N5";location.hash!==t&&history.replaceState(null,"",t),N(),Q(),Mt()}function nv(e="due"){const t=Date.now(),n=z(),s=lt();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=A(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function zc(){const e=lt(),t=Se(),n=r.n5FinalTest?.types||["meaning","reading","sentence","kanji","word","srs"],s=Math.min(r.n5FinalTest?.questionCount||24,Math.max(e.length,1)),a=[];for(let o=0;o<s;o+=1){const l=e[o*7%e.length]||e[o%e.length],c=n[o%n.length],d=t.find(u=>u.kanji.includes(l.kanji))||t[0];a.push(sv(c,l,d,o))}return a.filter(Boolean)}function sv(e,t,n,s){const o=et(t)[0],l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:L(t),options:ct({value:t.id,label:L(t)},lt().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:L(c)})),s)};if(e==="reading")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word,answer:o.reading,answerLabel:o.reading,options:ct({value:o.reading,label:o.reading},lt().flatMap(c=>et(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:ct({value:c,label:c},Se().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word;return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ce(o),answer:c,answerLabel:c,options:ct({value:c,label:c},lt().flatMap(d=>et(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value!==c),s)}}return e==="srs"?{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${L(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${L(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n5-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:L(t),answer:t.kanji,answerLabel:t.kanji,options:ct({value:t.kanji,label:t.kanji},lt().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function rv(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(z().finalTest.answers[t]=n,N(),j())}function Uc(e=!1){if(r.finalTestBusy)return;const t=z().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){j();return}r.finalTestBusy=!0;try{const n=zc(),s=r.n5FinalTest||{},a=je(),o=Ht(t,n),l=Gb(s),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const k=o.firstMissingId?`#${Os("n5",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N5",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:k,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=k,N();return}let u=0;const m=[],g=[];n.forEach(k=>{const D=String(t.answers?.[k.id]||"").trim();D===k.answer?(u+=1,Fn(k.kanji,k.cardId)):(D||g.push(k),m.push({id:k.id,kanji:k.kanji,answer:k.answerLabel,selected:D}),As(k.kanji,k.cardId))});const w=n.length?Math.round(u/n.length*100):0,v=!!t.completedAt,$=!!t.passed,y=Math.max(0,m.length-g.length);let x=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=w,t.passed=w>=l,t.correctAnswers=u,t.incorrectAnswers=y,t.unansweredAnswers=g.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(k=>k.id),t.completedAt=d,t.lastScore=w,t.bestScore=Math.max(Number(t.bestScore||0),w),t.passedAt=t.passed?$&&t.passedAt||d:t.passedAt||null,!v){const k=Number(s?.rewards?.completeXp||120),D=Number(s?.rewards?.completeMoon||20);x+=k,b+=D,O(k,D,"n5_final_complete")}if(t.passed&&!$){const k=Number(s?.rewards?.passXp||80),D=Number(s?.rewards?.passMoon||12);x+=k,b+=D,O(k,D,"n5_final_pass")}t.lastRewardXp=x,t.lastRewardMoon=b,z();try{const k=xn,D=localStorage.getItem(k),R=D?JSON.parse(D):{};R.n5Course||(R.n5Course={}),R.n5Course.finalTest=R.n5Course.finalTest||{},Object.assign(R.n5Course.finalTest,{percent:t.percent,score:t.score,completedAt:t.completedAt,passed:t.passed,totalQuestions:t.totalQuestions,correctAnswers:t.correctAnswers||t.score}),localStorage.setItem(k,JSON.stringify(R)),r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.finalTest=r.progress.n5Course.finalTest||{},Object.assign(r.progress.n5Course.finalTest,{percent:t.percent,score:t.score,completedAt:t.completedAt,passed:t.passed})}catch(k){console.warn("JLPT test persist failed",k)}r.finalTestModal={kind:"result",level:"N5",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:w,correct:u,incorrect:y,unanswered:g.length,totalQuestions:n.length,rewardXp:x,rewardMoon:b,attempts:t.attempts,threshold:l,reviewAction:"n5-review",reviewAllAction:"n5-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},U(),N()}catch(n){console.error(n),E(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,j()}}function av(){z().finalTest=Za().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,N(),j()}function Gc(e){return`n5-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function iv(e){r.activeTextbookLevel="N4",r.activeJlptLesson="N4";const t=_i();t.opened||(t.opened=!0,U(),N());const n=String(r.activeTextbookSubroute||"");if(n==="final-test")return wv();if(n==="review")return pv();if(n==="kanji")return mv();if(n==="grammar")return fv();if(n==="reading")return hv();if(n==="listening")return vv();const s=Kt(n);return s?(P().currentLessonId=s.id,ft("N4",s.id,"n4_lesson_page"),Rt("N4",s,"n4_lesson_page"),cv(e,s)):ov(e)}function ov(e){const t=yv(),n=ie(),s=Ke(),a=kv(),o=r.n4Meta||{},l=h(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N4 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(h(o.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <a class="btn ghost" href="${f(o.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N4_textbook_flashkanji_space.pdf" target="_blank" rel="noopener">${i(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero n4-hero">
          <div class="n5-hero-copy">
            <span class="pill">170 ${i(n.kanji)} · 48 ${i(n.grammar)}</span>
            <h2>${i(n.courseMap)}</h2>
            <p>${i(l)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#jlpt/n4/${f(a?.id||"n4-lesson-1")}" data-action="n4-open-lesson" data-id="${f(a?.id||"n4-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n4-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n4-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n4-grammar">${i(n.grammarN4)}</button>
              <button class="btn ghost" type="button" data-action="n4-reading">${i(n.readingN4)}</button>
              <button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${Qn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${T(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,I(t.studied,t.total))}
          ${T(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,I(t.completedLessons,s.length))}
          ${T(n.completedGrammar,`${t.completedGrammar}/${r.n4Meta?.grammarCount||r.n4Grammar.length}`,n.grammar,I(t.completedGrammar,r.n4Meta?.grammarCount||r.n4Grammar.length))}
          ${T(n.reviews,t.reviews,n.srs,I(t.reviews,Math.max(t.total,1)))}
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
            ${s.map(c=>lv(c)).join("")}
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

        ${xs("N4")}
      </section>
    `}function lv(e){const t=Wc(e.id),n=ie();let s=e.kanji.filter(a=>P().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n4/${f(e.id)}" data-action="n4-open-lesson" data-id="${f(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip n4-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${f(`${s}/${e.kanji.length}`)}"><i style="width:${I(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i($v(t))}</small>
      </a>
    `}function cv(e,t){const n=ie(),s=Ts(t),a=qr(t),o=Wc(t.id),l=Bn("N4",t,s);let c=o==="completed";const d=`n4:${t.id}`;ee.has(d)&&(c=!0);const u=c,m=a.filter(R=>Pi(R.id)?.correct).length,g=a.length>0&&m===a.length,w=s.filter(R=>P().studiedKanji[R.kanji]).length,v=t.kanji.length,$=w>=v,y=!c&&g&&$,x=t.kanji.filter(R=>P().difficultKanji[R]).join(" · "),b=Ke().find(R=>R.order===t.order+1),k=Ye("N4",t.id,"player"),D=Ye("N4",t.id,"test");return`
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
              ${t.grammarFocus.map(R=>`<span class="pill">${i(R)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${T(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,I(l.answeredCount,t.kanji.length))}
            ${T(n.exercises,`${m}/${a.length}`,n.correct,I(m,a.length))}
          </div>
        </article>

        ${Jr("N4",t,s,n,{playerId:k,answerAction:"jlpt-lesson-answer",examples:R=>Be(R),sentence:R=>dv(R,t)})}

        ${uv(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(R=>`
              <article>
                <strong>${i(R.jp)}</strong>
                <span>${i(q(R.reading||""))}</span>
                <small>${i(h({ru:R.ru,en:R.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${f(D)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(R=>qc(R)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(R=>P().studiedKanji[R.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(x||n.none)}</span>
            </div>
            ${!c&&!y?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n4-complete-lesson" data-id="${f(t.id)}" ${u||!y?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#jlpt/n4/${f(b.id)}" data-action="n4-open-lesson" data-id="${f(b.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function dv(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(q(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(ie().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function uv(e){const t=ie(),n=(e.grammarFocus||[]).map(s=>Mi(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n4-grammar-complete" data-id="${f(s.id)}" data-value="${f(s.answer)}">${i(P().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function qc(e){const t=ie(),n=Pi(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&vn("N4",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${f(sd(e.id))}" type="text" maxlength="3" autocomplete="off" value="${f(n?.selected||"")}" aria-label="${f(h(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n4-check-input" data-id="${f(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n4-answer" data-id="${f(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Hc(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n4-answer" data-id="${f(e.id)}" data-value="${f(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Hc(e,n)}
      </article>
    `}function Hc(e,t){if(!t)return"";const n=ie(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function pv(e){const t=ie(),n=P().activeReviewMode||"due",s=Ov(n);return`
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
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n4-review" data-mode="${f(a.id)}">${i(h(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>gv(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function gv(e,t){const n=ie(),s=A(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Nn(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(L(e))}</h3>
        <p>${i(Be(e)[0]?.word||e.hiragana||"")} · ${i(Be(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n4-srs" data-id="${f(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n4-srs" data-id="${f(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function mv(e){const t=ie(),n=Re();return`
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
              <div class="n5-kanji-topline"><span class="pill">${a+1}/170</span><span class="pill">${i(A(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(L(s))}</h3>
              <p>${i(Be(s)[0]?.word||"")} · ${i(Be(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n4-srs" data-id="${f(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function fv(e){const t=ie();return`
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
          ${T(t.completedGrammar,`${Object.keys(P().completedGrammar||{}).length}/${r.n4Grammar.length}`,t.grammar,I(Object.keys(P().completedGrammar||{}).length,r.n4Grammar.length))}
          ${T(t.questions,r.n4Grammar.length,t.grammar,100)}
        </div>
        <div class="n4-section-grid">
          ${r.n4Grammar.map(n=>{const s=P().grammarResults?.[n.id];return`
              <article class="n4-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(h(n.title))}</h3>
                <p>${i(h(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(q(a.reading||""))}</span><small>${i(h({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(h(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(n.options.length?n.options:[n.answer]).map(a=>`
                    <button class="btn ${s?.selected===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n4-grammar-complete" data-id="${f(n.id)}" data-value="${f(a)}">${i(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${n.answer}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function hv(e){const t=ie(),n=wa("N4","n4_reading_page"),s=Hs("N4");return(n||s)&&N(),`
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
          ${r.n4Reading.map(a=>Xc(a,"reading")).join("")}
        </div>
      </section>
    `}function vv(e){const t=ie();return`
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
          ${r.n4Listening.map(n=>Xc(n,"listening")).join("")}
        </div>
      </section>
    `}function Xc(e,t){const n=ie(),s=t==="reading"?P().completedReading[e.id]:P().completedListening[e.id],a=t==="reading"?P().readingAnswers:P().listeningAnswers,o=t==="reading"?"n4-reading-complete":"n4-listening-complete";return`
      <article class="n4-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(h(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n4-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=a?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n4-question-block">
              <h3>${i(h(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(g=>`<button class="btn ${u?.selected===g.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${f(o)}" data-id="${f(e.id)}" data-question="${f(c)}" data-value="${f(g.value)}">${i(h(g.label||g))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function wv(e){const t=ie(),n=r.n4FinalTest||{},s=td(),a=P().finalTest,o=Ht(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),N()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
          ${T(t.questions,`${l}/${s.length}`,t.finalTest,I(l,s.length))}
          ${T(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${T(t.mistakes,d?(a.mistakes||[]).length:0,t.difficult,d?I((a.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n4-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${St("N4","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,g)=>bv(m,g)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n4-final-submit" ${r.finalTestBusy||d?"disabled":""}>${i(d?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${St("N4","btn ghost")}
          <button class="btn ghost" type="button" data-action="n4-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function bv(e,t){const n=P().finalTest.answers?.[e.id],s=!!P().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n4-final-answer" data-id="${f(e.id)}" data-value="${f(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(ie().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function ie(){return p()==="ru"?{title:"JLPT N4",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N4 после N5",continue:"Продолжить",review:"Повторять N4",openKanji:"Открыть список кандзи",grammarN4:"Грамматика N4",readingN4:"Чтение N4",listeningN4:"Аудирование N4",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"17 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, упражнение, письмо и повторение.",reviewPlan:"План повторения на 45 дней",day:"день",lesson:"Урок",backToN4:"К N4",n5Bridge:"N5 bridge",n5BridgeText:"Перед N4 полезно держать активной базу N5: она станет опорой для более длинных предложений.",reviewN5Base:"Повторить базу N5 перед N4",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> текст -> упражнение -> письмо -> повторение",lessonChainText:"N4 больше не живёт списком знаков: каждый знак сразу получает слово, грамматическую связку и контекст.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика держит смысл предложения.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции из примеров урока, чтобы кандзи сразу работали в предложении.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N4-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N4.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"170 кандзи N4",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"48 грамматических конструкций N4",grammarText:"Короткие рабочие карточки: функция, формула, пример и проверка понимания.",readingTitle:"Тексты для чтения N4",readingText:"Короткие тексты связывают кандзи, слова и грамматику в нормальный контекст.",listeningTitle:"Скрипты для аудирования N4",listeningText:"Диалоги можно читать вслух или использовать как основу для прослушивания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N4",finalPassed:"N4 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N4",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N4 textbook after N5",continue:"Continue",review:"Review N4",openKanji:"Open kanji list",grammarN4:"N4 grammar",readingN4:"N4 reading",listeningN4:"N4 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",reviews:"Reviews",difficult:"Difficult",srs:"Повторение",lessons:"lessons",lessonsTitle:"17 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, exercise, writing, and SRS.",reviewPlan:"45-day review plan",day:"day",lesson:"Lesson",backToN4:"To N4",n5Bridge:"N5 bridge",n5BridgeText:"Keep the N5 base active before N4; it supports longer sentences.",reviewN5Base:"Review N5 base before N4",lessonChain:"Kanji -> word -> grammar -> sentence -> text -> exercise -> writing -> SRS",lessonChainText:"N4 is not a bare list: each sign gets a word, grammar link, and context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries the sentence.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N4 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions from the lesson examples.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N4 review",reviewDescription:"Review due cards, difficult kanji, or the full N4 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"170 N4 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"48 N4 grammar constructions",grammarText:"Compact cards with function, formula, example, and check.",readingTitle:"N4 reading texts",readingText:"Short texts connect kanji, words, and grammar.",listeningTitle:"N4 listening scripts",listeningText:"Read dialogues aloud or use them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N4",finalPassed:"N4 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function _i(){r.progress.n4Course=jl(ei(),r.progress.n4Course||{});const e=Ke();!Kt(r.progress.n4Course.currentLessonId)&&e[0]&&(r.progress.n4Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n4Course.completedLessons[s.id]);return!r.progress.n4Course.currentLessonId&&n&&(r.progress.n4Course.currentLessonId=n.id),r.progress.n4Course}function P(){return _i()}function Ke(){return r.n4Textbook?.items||[]}function Kt(e){const t=String(e||"");return t&&Ke().find(n=>n.id===t||n.id===`n4-${t}`||n.id.endsWith(`-${t}`))||null}function kv(){return Kt(P().currentLessonId)||Ke().find(e=>!P().completedLessons[e.id])||Ke()[0]||null}function Ts(e){return(e?.kanji||[]).map(t=>Qc(t)).filter(Boolean)}function Re(){const e=new Set;return(r.n4KanjiCatalog||[]).map(t=>Qc(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Qc(e){const t=String(e||""),n=r.n4KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N4")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?wr(s,n):s||(n?wr({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[]},n):null)}function Mi(e){const t=String(e||"");return r.n4Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function Be(e){return zr(e,e.examples)}function yv(){const e=Re(),t=P(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{A(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of ee)if(a.startsWith("n4:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n4Meta?.kanjiCount||e.length||170,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,reviews:e.reduce((a,o)=>a+Number(A(o.id).reviews||A(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Wc(e){const t=P(),n=`n4:${e}`;return ee.has(n)||t.completedLessons[e]?"completed":Kt(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function $v(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function qr(e){const t=Ts(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n4Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n4Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n4Meta?.rewards?.exerciseXp||9,rewardMoon:r.n4Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:L(c),kanji:c.kanji,cardId:c.id,options:_e({value:c.id,label:L(c)},t.slice(1).map(b=>({value:b.id,label:L(b)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:L(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:_e({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=Be(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:_e({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>Be(b).map(k=>({value:k.reading,label:k.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const g=n[0];g&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:g.jp,answer:h({ru:g.ru,en:g.en}),answerLabel:h({ru:g.ru,en:g.en}),kanji:t[0].kanji,cardId:t[0].id,options:_e({value:h({ru:g.ru,en:g.en}),label:h({ru:g.ru,en:g.en})},n.slice(1).map(b=>({value:h({ru:b.ru,en:b.en}),label:h({ru:b.ru,en:b.en})})),1),...o("sentence")});const w=t[3]||t[0],v=Be(w)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ce(v)}В»?`:`Which word matches "${Ce(v)}"?`,answer:v.word||w.kanji,answerLabel:v.word||w.kanji,kanji:w.kanji,cardId:w.id,options:_e({value:v.word||w.kanji,label:v.word||w.kanji},t.flatMap(b=>Be(b).map(k=>({value:k.word,label:k.word}))).filter(b=>b.value&&b.value!==v.word),2),...o("missing-word")});const $=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${L($)}`:`Type the kanji for: ${L($)}`,answer:$.kanji,answerLabel:$.kanji,kanji:$.kanji,cardId:$.id,options:[],...o("active-recall")});const y=Mi(e.grammarFocus?.[0]);y&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:h(y.question||y.explanation),answer:y.answer,answerLabel:y.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:y.id,options:_e({value:y.answer,label:y.answer},y.options.filter(b=>b!==y.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const x=n[1]||n[0];return x&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:x.jp,answer:h({ru:x.ru,en:x.en}),answerLabel:h({ru:x.ru,en:x.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:_e({value:h({ru:x.ru,en:x.en}),label:h({ru:x.ru,en:x.en})},n.filter(b=>b.jp!==x.jp).map(b=>({value:h({ru:b.ru,en:b.en}),label:h({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),l.slice(0,r.n4Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N4",lessonId:e.id}))}function _e(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),Re().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function Vc(e){for(const t of Ke()){const n=qr(t).find(s=>s.id===e);if(n)return n}return null}function Pi(e){return Ur("N4",P(),e)}function jv(e){const t=Vc(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Yc(t,s,a)}function Sv(e){const t=Vc(e);if(!t)return;const n=document.getElementById(sd(t.id)),s=n?String(n.value||"").trim():"";Yc(t,s,s===t.answer)}function Yc(e,t,n){const s=P();Gr("N4",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n4Meta?.rewards?.exerciseXp||9),rewardMoon:Number(e.rewardMoon||r.n4Meta?.rewards?.exerciseMoon||1),rewardKey:`n4_exercise:${e.id}`,markStudied:()=>Jn(e.kanji,e.cardId),markDifficult:()=>Rs(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Zc(e,t,n="review"){const s=X(e)||Re().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,l=a?"hard":t,c=H(A(s.id)),d=ue(c,o,l);r.progress.cards[s.id]=d,Qt(c,d,l),ve(),Jn(s.kanji,s.id),P().srsKanji[s.kanji]=new Date().toISOString(),a?(Rs(s.kanji,s.id,!1),r.progress.totalCorrect+=1,O(r.n4Meta?.rewards?.hardXp||2,1,`n4_srs_lesson_hard:${s.id}`),C("answer_correct")):kn(t)?(Rs(s.kanji,s.id),r.progress.totalWrong+=1,O(r.n4Meta?.rewards?.hardXp||2,0,`n4_srs_hard:${s.id}`),C("answer_wrong")):(r.progress.totalCorrect+=1,O(t==="easy"?r.n4Meta?.rewards?.knowXp||7:r.n4Meta?.rewards?.addToSrsXp||5,1,`n4_srs:${s.id}`),C("answer_correct")),U(),N(),j()}function Nv(e){const t=X(e)||Re().find(s=>String(s.id)===String(e));if(!t)return;const n=P();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Jn(t.kanji,t.id),O(9,1,`n4_writing:${t.id}`)),U(),N(),j()}function xv(e){const t=Kt(e);if(!t)return;const n=P(),s=`n4:${t.id}`;if(ee.has(s)||n.completedLessons[t.id]){j();return}const a=Ts(t);if(a.filter(v=>n.studiedKanji[v.kanji]).length<t.kanji.length){const v=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof E=="function"&&E(v);return}const l=qr(t);if(!(l.length>0&&l.every(v=>Pi(v.id)?.correct))){const v=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof E=="function"&&E(v);return}ee.add(s),Ts(t).forEach(v=>{Jn(v.kanji,v.id),n.srsKanji[v.kanji]=n.srsKanji[v.kanji]||new Date().toISOString();const $=A(v.id);$.state==="New"&&(r.progress.cards[v.id]=ue(H($),"good"))}),(t.grammarFocus||[]).map(v=>Mi(v)).filter(Boolean).forEach(v=>{n.completedGrammar[v.id]=n.completedGrammar[v.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=Ke().find(v=>v.order===t.order+1)?.id||t.id;const d=Ns(),u=d.sessions[n4SessKey];if(u){const v=new Date().toISOString();u.phase="done",u.completedAt=v,u.updatedAt=v,u.currentIndex=a.length,d.activeSessionKey=n4SessKey,d.lastUpdatedAt=v}P(),Object.keys(n.completedLessons||{}).length>=9&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"),r.progress.unlockedJlptLevels.includes("N3")||r.progress.unlockedJlptLevels.push("N3"));const g=r.n4Meta?.rewards?.lessonCompleteXp||65,w=r.n4Meta?.rewards?.lessonCompleteMoon||8;O(g,w,`n4_lesson:${t.id}`),Ge({title:`${ie().lessonComplete}: ${h(t.title)}`,message:ie().lessonCompleteText,xp:g,coins:w,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),C("lesson_complete"),U(),N(),j()}function Jn(e,t=null){if(!e)return;const n=P();fs(n,e)}function Rs(e,t=null,n=!0){if(e&&(P().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=A(t);s.state!=="New"&&(r.progress.cards[t]=ue(H(s),"again"))}}function Cv(e,t=""){const n=r.n4Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=P();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),O(r.n4Meta?.rewards?.grammarXp||10,r.n4Meta?.rewards?.grammarMoon||1,`n4_grammar:${n.id}`),r.progress.totalCorrect+=1,C("answer_correct")):a||(r.progress.totalWrong+=1,C("answer_wrong")),ve(),U(),N(),j()}function Lv(e,t="0",n=""){ed("reading",e,t,n)}function Av(e,t="0",n=""){ed("listening",e,t,n)}function ed(e,t,n="0",s=""){const o=(e==="reading"?r.n4Reading:r.n4Listening).find(v=>v.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=P(),g=e==="reading"?m.readingAnswers:m.listeningAnswers,w=e==="reading"?m.completedReading:m.completedListening;if(g[u]={selected:s,correct:d,checkedAt:new Date().toISOString()},d&&!w[o.id]){w[o.id]=new Date().toISOString();const v=e==="reading"?r.n4Meta?.rewards?.readingXp||35:r.n4Meta?.rewards?.listeningXp||30,$=e==="reading"?r.n4Meta?.rewards?.readingMoon||4:r.n4Meta?.rewards?.listeningMoon||3;O(v,$,`n4_${e}:${o.id}`),r.progress.totalCorrect+=1,C("answer_correct")}else d||(r.progress.totalWrong+=1,C("answer_wrong"));ve(),U(),N(),j()}function Iv(e){const t=Kt(e);t&&(P().currentLessonId=t.id,ft("N4",t.id,"n4_lesson_open"),Rt("N4",t,"n4_lesson_open"),Bt(t.id))}function Tv(){Bt("")}function Rv(e=null){e&&(P().activeReviewMode=e),Bt("review")}function _v(){Bt("kanji")}function Mv(){Bt("grammar")}function Pv(){Bt("reading")}function Ev(){Bt("listening")}function Dv(){Bt("final-test")}function Bt(e){r.route="textbooks",r.activeTextbookLevel="N4",r.activeTextbookSubroute=e||null,P().opened=!0;const t=e?`#jlpt/n4/${encodeURIComponent(e)}`:"#jlpt/n4";location.hash!==t&&history.replaceState(null,"",t),U(),N(),Q(),Mt()}function Ov(e="due"){const t=Date.now(),n=P(),s=Re();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=A(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function td(){const e=Re();if(!e.length)return[];const t=r.n4FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n4FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=Ke().find(d=>d.kanji.includes(o.kanji))||Ke()[0];s.push(Kv(l,o,c,a))}return s.filter(Boolean)}function Kv(e,t,n,s){const o=Be(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:L(t),options:_e({value:t.id,label:L(t)},Re().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:L(c)})),s)};if(e==="reading")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:_e({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Re().flatMap(c=>Be(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:_e({value:c,label:c},Ke().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ce(o),answer:c,answerLabel:c,options:_e({value:c,label:c},Re().flatMap(d=>Be(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n4Grammar[s%Math.max(r.n4Grammar.length,1)];if(c)return{id:`n4-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${h(c.question||c.explanation)}`,answer:c.answer,answerLabel:c.answer,options:_e({value:c.answer,label:c.answer},c.options.filter(d=>d!==c.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n4Reading[s%Math.max(r.n4Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n4-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||h(c.title)} ${h(d.prompt)}`,answer:d.answer,answerLabel:h((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:h(u.label||u)}))}}return e==="srs"?{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${L(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${L(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n4-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:L(t),answer:t.kanji,answerLabel:t.kanji,options:_e({value:t.kanji,label:t.kanji},Re().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function Bv(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(P().finalTest.answers[t]=n,N(),j())}function nd(e=!1){if(r.finalTestBusy)return;const t=P().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){j();return}r.finalTestBusy=!0;try{const n=td(),s=r.n4FinalTest||{},a=ie(),o=Ht(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const k=o.firstMissingId?`#${Os("n4",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N4",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:k,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=k,N();return}let u=0;const m=[],g=[];n.forEach(k=>{const D=String(t.answers?.[k.id]||"").trim();if(D===k.answer){if(u+=1,k.kanji&&Jn(k.kanji,k.cardId),k.grammarId){const R=P();R.completedGrammar[k.grammarId]=R.completedGrammar[k.grammarId]||d}}else D||g.push(k),m.push({id:k.id,kanji:k.kanji||"",answer:k.answerLabel,selected:D}),k.kanji&&Rs(k.kanji,k.cardId)});const w=n.length?Math.round(u/n.length*100):0,v=!!t.completedAt,$=!!t.passed,y=Math.max(0,m.length-g.length);let x=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=w,t.passed=w>=l,t.correctAnswers=u,t.incorrectAnswers=y,t.unansweredAnswers=g.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(k=>k.id),t.completedAt=d,t.lastScore=w,t.bestScore=Math.max(Number(t.bestScore||0),w),t.passedAt=t.passed?$&&t.passedAt||d:t.passedAt||null,!v){const k=Number(s?.rewards?.completeXp||180),D=Number(s?.rewards?.completeMoon||35);x+=k,b+=D,O(k,D,"n4_final_complete")}if(t.passed&&!$){const k=Number(s?.rewards?.passXp||90),D=Number(s?.rewards?.passMoon||15);x+=k,b+=D,O(k,D,"n4_final_pass")}t.lastRewardXp=x,t.lastRewardMoon=b,P(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N4",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:w,correct:u,incorrect:y,unanswered:g.length,totalQuestions:n.length,rewardXp:x,rewardMoon:b,attempts:t.attempts,threshold:l,reviewAction:"n4-review",reviewAllAction:"n4-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},U(),N()}catch(n){console.error(n),E(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,j()}}function Fv(){P().finalTest=ei().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,N(),j()}function sd(e){return`n4-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Jv(e){r.activeTextbookLevel="N3",r.activeJlptLesson="N3";const t=Di();t.opened||(t.opened=!0,U(),N());const n=String(r.activeTextbookSubroute||"");if(n==="final-test")return tw();if(n==="review")return Qv();if(n==="kanji")return Vv();if(n==="grammar")return Yv();if(n==="reading")return Zv();if(n==="listening")return ew();const s=Ft(n);return s?(_().currentLessonId=s.id,ft("N3",s.id,"n3_lesson_page"),Rt("N3",s,"n3_lesson_page"),Gv(e,s)):zv(e)}function zv(e){const t=rw(),n=se(),s=Fe(),a=sw(),o=r.n3Meta||{},l=h(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N3 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(h(o.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <a class="btn ghost" href="${f(o.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N3_textbook_flashkanji_space.pdf" target="_blank" rel="noopener">${i(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero n3-hero">
          <div class="n5-hero-copy">
            <span class="pill">370 ${i(n.kanji)} · 80 ${i(n.grammar)}</span>
            <h2>${i(n.courseMap)}</h2>
            <p>${i(l)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#jlpt/n3/${f(a?.id||"n3-lesson-1")}" data-action="n3-open-lesson" data-id="${f(a?.id||"n3-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n3-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n3-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n3-grammar">${i(n.grammarN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-reading">${i(n.readingN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-listening">${i(n.listeningN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${Qn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${T(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,I(t.studied,t.total))}
          ${T(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,I(t.completedLessons,s.length))}
          ${T(n.completedGrammar,`${t.completedGrammar}/${r.n3Meta?.grammarCount||r.n3Grammar.length}`,n.grammar,I(t.completedGrammar,r.n3Meta?.grammarCount||r.n3Grammar.length))}
          ${T(n.completedReading,`${t.completedReading}/${r.n3Meta?.readingCount||r.n3Reading.length}`,n.readingN3,I(t.completedReading,r.n3Meta?.readingCount||r.n3Reading.length))}
          ${T(n.completedListening,`${t.completedListening}/${r.n3Meta?.listeningCount||r.n3Listening.length}`,n.listeningN3,I(t.completedListening,r.n3Meta?.listeningCount||r.n3Listening.length))}
          ${T(n.reviews,t.reviews,n.srs,I(t.reviews,Math.max(t.total,1)))}
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
            ${s.map(c=>Uv(c)).join("")}
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

        ${xs("N3")}
      </section>
    `}function Uv(e){const t=ld(e.id),n=se();let s=e.kanji.filter(a=>_().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n3/${f(e.id)}" data-action="n3-open-lesson" data-id="${f(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip n3-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${f(`${s}/${e.kanji.length}`)}"><i style="width:${I(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(aw(t))}</small>
      </a>
    `}function Gv(e,t){const n=se(),s=_s(t),a=Hr(t),o=ld(t.id),l=Bn("N3",t,s);let c=o==="completed";const d=`n3:${t.id}`;ee.has(d)&&(c=!0);const u=c,m=a.filter(J=>Ki(J.id)?.correct).length,g=a.length>0&&m===a.length,w=s.filter(J=>_().studiedKanji[J.kanji]).length,v=t.kanji.length,$=w>=v,y=!c&&g&&$,x=t.kanji.filter(J=>_().difficultKanji[J]).join(" · "),b=Fe().find(J=>J.order===t.order+1),k=rd(t),D=k?!!_().completedReading[k.id]:!1,R=Ye("N3",t.id,"player"),ar=Ye("N3",t.id,"test");return`
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
              ${t.grammarFocus.map(J=>`<span class="pill">${i(J)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${T(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,I(l.answeredCount,t.kanji.length))}
            ${T(n.exercises,`${m}/${a.length}`,n.correct,I(m,a.length))}
          </div>
        </article>

        ${Jr("N3",t,s,n,{playerId:R,answerAction:"jlpt-lesson-answer",examples:J=>Je(J),sentence:J=>Hv(J,t)})}

        ${Xv(t)}

        ${qv(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(J=>`
              <article>
                <strong>${i(J.jp)}</strong>
                <span>${i(q(J.reading||""))}</span>
                <small>${i(h({ru:J.ru,en:J.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${f(ar)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(J=>ad(J)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(J=>_().studiedKanji[J.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${k?`<span class="pill">${i(n.miniReadingTitle)}: ${i(D?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(x||n.none)}</span>
            </div>
            ${!c&&!y?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n3-complete-lesson" data-id="${f(t.id)}" ${u||!y?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#jlpt/n3/${f(b.id)}" data-action="n3-open-lesson" data-id="${f(b.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function rd(e){return e?.miniReadingId&&r.n3Reading.find(t=>t.id===e.miniReadingId)||null}function qv(e){const t=se(),n=rd(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Ei(n,"reading")}
      </section>
    `:""}function Hv(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(q(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(se().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Xv(e){const t=se(),n=(e.grammarFocus||[]).map(s=>Oi(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n3-grammar-complete" data-id="${f(s.id)}" data-value="${f(s.answer)}">${i(_().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function ad(e){const t=se(),n=Ki(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&vn("N3",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${f(fd(e.id))}" type="text" maxlength="3" autocomplete="off" value="${f(n?.selected||"")}" aria-label="${f(h(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n3-check-input" data-id="${f(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n3-answer" data-id="${f(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${id(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n3-answer" data-id="${f(e.id)}" data-value="${f(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${id(e,n)}
      </article>
    `}function id(e,t){if(!t)return"";const n=se(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Qv(e){const t=se(),n=_().activeReviewMode||"due",s=yw(n);return`
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
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n3-review" data-mode="${f(a.id)}">${i(h(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>Wv(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Wv(e,t){const n=se(),s=A(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Nn(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(L(e))}</h3>
        <p>${i(Je(e)[0]?.word||e.hiragana||"")} · ${i(Je(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n3-srs" data-id="${f(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n3-srs" data-id="${f(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Vv(e){const t=se(),n=Me();return`
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
              <div class="n5-kanji-topline"><span class="pill">${a+1}/370</span><span class="pill">${i(A(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(L(s))}</h3>
              <p>${i(Je(s)[0]?.word||"")} · ${i(Je(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n3-srs" data-id="${f(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Yv(e){const t=se();return`
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
          ${T(t.completedGrammar,`${Object.keys(_().completedGrammar||{}).length}/${r.n3Grammar.length}`,t.grammar,I(Object.keys(_().completedGrammar||{}).length,r.n3Grammar.length))}
          ${T(t.questions,r.n3Grammar.length,t.grammar,100)}
        </div>
        <div class="n3-section-grid">
          ${r.n3Grammar.map(n=>{const s=_().grammarResults?.[n.id];return`
              <article class="n3-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(h(n.title))}</h3>
                <p>${i(h(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(q(a.reading||""))}</span><small>${i(h({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(h(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(n.options.length?n.options:[n.answer]).map(a=>`
                    <button class="btn ${s?.selected===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n3-grammar-complete" data-id="${f(n.id)}" data-value="${f(a)}">${i(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${n.answer}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function Zv(e){const t=se(),n=wa("N3","n3_reading_page"),s=Hs("N3");return(n||s)&&N(),`
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
          ${r.n3Reading.map(a=>Ei(a,"reading")).join("")}
        </div>
      </section>
    `}function ew(e){const t=se();return`
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
          ${r.n3Listening.map(n=>Ei(n,"listening")).join("")}
        </div>
      </section>
    `}function Ei(e,t){const n=se(),s=t==="reading"?_().completedReading[e.id]:_().completedListening[e.id],a=t==="reading"?_().readingAnswers:_().listeningAnswers,o=t==="reading"?"n3-reading-complete":"n3-listening-complete";return`
      <article class="n3-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(h(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n3-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=a?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n3-question-block">
              <h3>${i(h(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(g=>`<button class="btn ${u?.selected===g.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${f(o)}" data-id="${f(e.id)}" data-question="${f(c)}" data-value="${f(g.value)}">${i(h(g.label||g))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function tw(e){const t=se(),n=r.n3FinalTest||{},s=gd(),a=_().finalTest,o=Ht(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),N()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
          ${T(t.questions,`${l}/${s.length}`,t.finalTest,I(l,s.length))}
          ${T(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${T(t.mistakes,d?(a.mistakes||[]).length:0,t.difficult,d?I((a.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n3-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${St("N3","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,g)=>nw(m,g)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n3-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${St("N3","btn ghost")}
          <button class="btn ghost" type="button" data-action="n3-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function nw(e,t){const n=_().finalTest.answers?.[e.id],s=!!_().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n3-final-answer" data-id="${f(e.id)}" data-value="${f(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(se().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function se(){return p()==="ru"?{title:"JLPT N3",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N3 как мост к среднему уровню",continue:"Продолжить",review:"Повторять N3",openKanji:"Открыть список кандзи",grammarN3:"Грамматика N3",readingN3:"Чтение N3",listeningN3:"Аудирование N3",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Listening",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"37 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, мини-текст, упражнения, письмо и повторение.",reviewPlan:"План повторения на 60 дней",day:"день",lesson:"Урок",backToN3:"К N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"Если база N5 и N4 дырявая, N3 будет ощущаться как стена. Сначала проверь частицы, базовые связки, условные формы и привычные повседневные конструкции.",reviewN5Base:"Повторить N5/N4 перед N3",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> абзац -> чтение -> вывод -> повторение",lessonChainText:"N3 больше не живёт списком знаков: каждый знак сразу входит в слово, грамматическую связку, мини-текст и повторение по смыслу.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, мини-чтение и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, кто, что, почему и к какому выводу ведёт короткий N3-текст.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N3-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N3.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"370 кандзи N3",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"80 грамматических конструкций N3",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном и разговорном контексте.",readingTitle:"Тексты для чтения N3",readingText:"Короткие тексты и lesson mini-readings связывают кандзи, слова, грамматику и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N3",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N3",finalPassed:"N3 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N3",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N3 textbook after N5",continue:"Continue",review:"Review N3",openKanji:"Open kanji list",grammarN3:"N3 grammar",readingN3:"N3 reading",listeningN3:"N3 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"Повторение",lessons:"lessons",lessonsTitle:"37 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, mini reading, exercises, writing, and SRS.",reviewPlan:"60-day review plan",day:"day",lesson:"Lesson",backToN3:"To N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"If the N5 and N4 base is shaky, N3 feels like a wall. Review particles, conditionals, and the everyday support grammar first.",reviewN5Base:"Review N5/N4 before N3",lessonChain:"Kanji -> word -> grammar -> sentence -> paragraph -> reading -> conclusion -> SRS",lessonChainText:"N3 is not a bare list: each sign gets a word, grammar link, mini text, and review context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, mini reading, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N3 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand who, what, why, and what conclusion the short N3 text points to.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N3 review",reviewDescription:"Review due cards, difficult kanji, or the full N3 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"370 N3 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"80 N3 grammar constructions",grammarText:"Compact cards with function, formula, example, and comprehension check.",readingTitle:"N3 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, and conclusions.",listeningTitle:"N3 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N3",finalPassed:"N3 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Di(){r.progress.n3Course=Sl(ti(),r.progress.n3Course||{});const e=Fe();!Ft(r.progress.n3Course.currentLessonId)&&e[0]&&(r.progress.n3Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n3Course.completedLessons[s.id]);return!r.progress.n3Course.currentLessonId&&n&&(r.progress.n3Course.currentLessonId=n.id),r.progress.n3Course}function _(){return Di()}function Fe(){return r.n3Textbook?.items||[]}function Ft(e){const t=String(e||"");return t&&Fe().find(n=>n.id===t||n.id===`n3-${t}`||n.id.endsWith(`-${t}`))||null}function sw(){return Ft(_().currentLessonId)||Fe().find(e=>!_().completedLessons[e.id])||Fe()[0]||null}function _s(e){return(e?.kanji||[]).map(t=>od(t)).filter(Boolean)}function Me(){const e=new Set;return(r.n3KanjiCatalog||[]).map(t=>od(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function od(e){const t=String(e||""),n=r.n3KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N3")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?br(s,n):s||(n?br({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[]},n):null)}function Oi(e){const t=String(e||"");return r.n3Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function Je(e){return zr(e,e.examples)}function rw(){const e=Me(),t=_(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{A(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of ee)if(a.startsWith("n3:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n3Meta?.kanjiCount||e.length||370,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,o)=>a+Number(A(o.id).reviews||A(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function ld(e){const t=_(),n=`n3:${e}`;return ee.has(n)||t.completedLessons[e]?"completed":Ft(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function aw(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Hr(e){const t=_s(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n3Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n3Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n3Meta?.rewards?.exerciseXp||10,rewardMoon:r.n3Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:L(c),kanji:c.kanji,cardId:c.id,options:Pe({value:c.id,label:L(c)},t.slice(1).map(b=>({value:b.id,label:L(b)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:L(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:Pe({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=Je(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:Pe({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>Je(b).map(k=>({value:k.reading,label:k.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const g=n[0];g&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:g.jp,answer:h({ru:g.ru,en:g.en}),answerLabel:h({ru:g.ru,en:g.en}),kanji:t[0].kanji,cardId:t[0].id,options:Pe({value:h({ru:g.ru,en:g.en}),label:h({ru:g.ru,en:g.en})},n.slice(1).map(b=>({value:h({ru:b.ru,en:b.en}),label:h({ru:b.ru,en:b.en})})),1),...o("sentence")});const w=t[3]||t[0],v=Je(w)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ce(v)}В»?`:`Which word matches "${Ce(v)}"?`,answer:v.word||w.kanji,answerLabel:v.word||w.kanji,kanji:w.kanji,cardId:w.id,options:Pe({value:v.word||w.kanji,label:v.word||w.kanji},t.flatMap(b=>Je(b).map(k=>({value:k.word,label:k.word}))).filter(b=>b.value&&b.value!==v.word),2),...o("missing-word")});const $=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${L($)}`:`Type the kanji for: ${L($)}`,answer:$.kanji,answerLabel:$.kanji,kanji:$.kanji,cardId:$.id,options:[],...o("active-recall")});const y=Oi(e.grammarFocus?.[0]);y&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:h(y.question||y.explanation),answer:y.answer,answerLabel:y.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:y.id,options:Pe({value:y.answer,label:y.answer},y.options.filter(b=>b!==y.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const x=n[1]||n[0];return x&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:x.jp,answer:h({ru:x.ru,en:x.en}),answerLabel:h({ru:x.ru,en:x.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:Pe({value:h({ru:x.ru,en:x.en}),label:h({ru:x.ru,en:x.en})},n.filter(b=>b.jp!==x.jp).map(b=>({value:h({ru:b.ru,en:b.en}),label:h({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),l.slice(0,r.n3Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N3",lessonId:e.id}))}function Pe(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),Me().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function cd(e){for(const t of Fe()){const n=Hr(t).find(s=>s.id===e);if(n)return n}return null}function Ki(e){return Ur("N3",_(),e)}function iw(e){const t=cd(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;dd(t,s,a)}function ow(e){const t=cd(e);if(!t)return;const n=document.getElementById(fd(t.id)),s=n?String(n.value||"").trim():"";dd(t,s,s===t.answer)}function dd(e,t,n){const s=_();Gr("N3",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n3Meta?.rewards?.exerciseXp||10),rewardMoon:Number(e.rewardMoon||r.n3Meta?.rewards?.exerciseMoon||1),rewardKey:`n3_exercise:${e.id}`,markStudied:()=>zn(e.kanji,e.cardId),markDifficult:()=>Ms(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function ud(e,t,n="review"){const s=X(e)||Me().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,l=a?"hard":t,c=H(A(s.id)),d=ue(c,o,l);r.progress.cards[s.id]=d,Qt(c,d,l),ve(),zn(s.kanji,s.id),_().srsKanji[s.kanji]=new Date().toISOString(),a?(Ms(s.kanji,s.id,!1),r.progress.totalCorrect+=1,O(r.n3Meta?.rewards?.hardXp||2,1,`n3_srs_lesson_hard:${s.id}`),C("answer_correct")):kn(t)?(Ms(s.kanji,s.id),r.progress.totalWrong+=1,O(r.n3Meta?.rewards?.hardXp||2,0,`n3_srs_hard:${s.id}`),C("answer_wrong")):(r.progress.totalCorrect+=1,O(t==="easy"?r.n3Meta?.rewards?.knowXp||8:r.n3Meta?.rewards?.addToSrsXp||6,1,`n3_srs:${s.id}`),C("answer_correct")),U(),N(),j()}function lw(e){const t=X(e)||Me().find(s=>String(s.id)===String(e));if(!t)return;const n=_();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},zn(t.kanji,t.id),O(9,1,`n3_writing:${t.id}`)),U(),N(),j()}function cw(e){const t=Ft(e);if(!t)return;const n=_(),s=`n3:${t.id}`;if(ee.has(s)||n.completedLessons[t.id]){j();return}const a=_s(t);if(a.filter(v=>n.studiedKanji[v.kanji]).length<t.kanji.length){const v=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof E=="function"&&E(v);return}const l=Hr(t);if(!(l.length>0&&l.every(v=>Ki(v.id)?.correct))){const v=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof E=="function"&&E(v);return}ee.add(s),_s(t).forEach(v=>{zn(v.kanji,v.id),n.srsKanji[v.kanji]=n.srsKanji[v.kanji]||new Date().toISOString();const $=A(v.id);$.state==="New"&&(r.progress.cards[v.id]=ue(H($),"good"))}),(t.grammarFocus||[]).map(v=>Oi(v)).filter(Boolean).forEach(v=>{n.completedGrammar[v.id]=n.completedGrammar[v.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=Fe().find(v=>v.order===t.order+1)?.id||t.id;const d=Ns(),u=d.sessions[n3SessKey];if(u){const v=new Date().toISOString();u.phase="done",u.completedAt=v,u.updatedAt=v,u.currentIndex=a.length,d.activeSessionKey=n3SessKey,d.lastUpdatedAt=v}_(),Object.keys(n.completedLessons||{}).length>=37&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],["N3","N2"].forEach(v=>{r.progress.unlockedJlptLevels.includes(v)||r.progress.unlockedJlptLevels.push(v)}));const g=r.n3Meta?.rewards?.lessonCompleteXp||75,w=r.n3Meta?.rewards?.lessonCompleteMoon||9;O(g,w,`n3_lesson:${t.id}`),Ge({title:`${se().lessonComplete}: ${h(t.title)}`,message:se().lessonCompleteText,xp:g,coins:w,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),C("lesson_complete"),U(),N(),j()}function zn(e,t=null){if(!e)return;const n=_();fs(n,e)}function Ms(e,t=null,n=!0){if(e&&(_().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=A(t);s.state!=="New"&&(r.progress.cards[t]=ue(H(s),"again"))}}function dw(e,t=""){const n=r.n3Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=_();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),O(r.n3Meta?.rewards?.grammarXp||11,r.n3Meta?.rewards?.grammarMoon||1,`n3_grammar:${n.id}`),r.progress.totalCorrect+=1,C("answer_correct")):a||(r.progress.totalWrong+=1,C("answer_wrong")),ve(),U(),N(),j()}function uw(e,t="0",n=""){pd("reading",e,t,n)}function pw(e,t="0",n=""){pd("listening",e,t,n)}function pd(e,t,n="0",s=""){const o=(e==="reading"?r.n3Reading:r.n3Listening).find(y=>y.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=_(),g=e==="reading"?m.readingAnswers:m.listeningAnswers,w=e==="reading"?m.completedReading:m.completedListening,v=!!w[o.id];g[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const $=(o.questions||[]).every((y,x)=>g[`${o.id}:${x}`]?.correct);if(d?(r.progress.totalCorrect+=1,C("answer_correct")):(r.progress.totalWrong+=1,C("answer_wrong")),$&&!v){w[o.id]=new Date().toISOString();const y=e==="reading"?r.n3Meta?.rewards?.readingXp||38:r.n3Meta?.rewards?.listeningXp||34,x=e==="reading"?r.n3Meta?.rewards?.readingMoon||4:r.n3Meta?.rewards?.listeningMoon||4;O(y,x,`n3_${e}:${o.id}`)}ve(),U(),N(),j()}function gw(e){const t=Ft(e);t&&(_().currentLessonId=t.id,ft("N3",t.id,"n3_lesson_open"),Rt("N3",t,"n3_lesson_open"),Jt(t.id))}function mw(){Jt("")}function fw(e=null){e&&(_().activeReviewMode=e),Jt("review")}function hw(){Jt("kanji")}function vw(){Jt("grammar")}function ww(){Jt("reading")}function bw(){Jt("listening")}function kw(){Jt("final-test")}function Jt(e){r.route="textbooks",r.activeTextbookLevel="N3",r.activeTextbookSubroute=e||null,_().opened=!0;const t=e?`#jlpt/n3/${encodeURIComponent(e)}`:"#jlpt/n3";location.hash!==t&&history.replaceState(null,"",t),U(),N(),Q(),Mt()}function yw(e="due"){const t=Date.now(),n=_(),s=Me();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=A(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function gd(){const e=Me();if(!e.length)return[];const t=r.n3FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n3FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=Fe().find(d=>d.kanji.includes(o.kanji))||Fe()[0];s.push($w(l,o,c,a))}return s.filter(Boolean)}function $w(e,t,n,s){const o=Je(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:L(t),options:Pe({value:t.id,label:L(t)},Me().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:L(c)})),s)};if(e==="reading")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:Pe({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Me().flatMap(c=>Je(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:Pe({value:c,label:c},Fe().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ce(o),answer:c,answerLabel:c,options:Pe({value:c,label:c},Me().flatMap(d=>Je(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n3Grammar[s%Math.max(r.n3Grammar.length,1)];if(c)return{id:`n3-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${h(c.question||c.explanation)}`,answer:c.answer,answerLabel:c.answer,options:Pe({value:c.answer,label:c.answer},c.options.filter(d=>d!==c.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n3Reading[s%Math.max(r.n3Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n3-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||h(c.title)} ${h(d.prompt)}`,answer:d.answer,answerLabel:h((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:h(u.label||u)}))}}return e==="srs"?{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${L(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${L(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n3-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:L(t),answer:t.kanji,answerLabel:t.kanji,options:Pe({value:t.kanji,label:t.kanji},Me().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function jw(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(_().finalTest.answers[t]=n,N(),j())}function md(e=!1){if(r.finalTestBusy)return;const t=_().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){j();return}r.finalTestBusy=!0;try{const n=gd(),s=r.n3FinalTest||{},a=se(),o=Ht(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const k=o.firstMissingId?`#${Os("n3",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N3",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:k,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=k,N();return}let u=0;const m=[],g=[];n.forEach(k=>{const D=String(t.answers?.[k.id]||"").trim();if(D===k.answer){if(u+=1,k.kanji&&zn(k.kanji,k.cardId),k.grammarId){const R=_();R.completedGrammar[k.grammarId]=R.completedGrammar[k.grammarId]||d}}else D||g.push(k),m.push({id:k.id,kanji:k.kanji||"",answer:k.answerLabel,selected:D}),k.kanji&&Ms(k.kanji,k.cardId)});const w=n.length?Math.round(u/n.length*100):0,v=!!t.completedAt,$=!!t.passed,y=Math.max(0,m.length-g.length);let x=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=w,t.passed=w>=l,t.correctAnswers=u,t.incorrectAnswers=y,t.unansweredAnswers=g.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(k=>k.id),t.completedAt=d,t.lastScore=w,t.bestScore=Math.max(Number(t.bestScore||0),w),t.passedAt=t.passed?$&&t.passedAt||d:t.passedAt||null,!v){const k=Number(s?.rewards?.completeXp||220),D=Number(s?.rewards?.completeMoon||40);x+=k,b+=D,O(k,D,"n3_final_complete")}if(t.passed&&!$){const k=Number(s?.rewards?.passXp||110),D=Number(s?.rewards?.passMoon||18);x+=k,b+=D,O(k,D,"n3_final_pass")}t.lastRewardXp=x,t.lastRewardMoon=b,_(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N3",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:w,correct:u,incorrect:y,unanswered:g.length,totalQuestions:n.length,rewardXp:x,rewardMoon:b,attempts:t.attempts,threshold:l,reviewAction:"n3-review",reviewAllAction:"n3-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},U(),N()}catch(n){console.error(n),E(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,j()}}function Sw(){_().finalTest=ti().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,N(),j()}function fd(e){return`n3-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Nw(e){r.activeTextbookLevel="N2",r.activeJlptLesson="N2";const t=Fi();t.opened||(t.opened=!0,U(),N());const n=String(r.activeTextbookSubroute||"");if(n==="final-test")return Ow();if(n==="review")return Rw();if(n==="kanji")return Mw();if(n==="grammar")return Pw();if(n==="reading")return Ew();if(n==="listening")return Dw();const s=zt(n);return s?(M().currentLessonId=s.id,ft("N2",s.id,"n2_lesson_page"),Rt("N2",s,"n2_lesson_page"),Lw(e,s)):xw(e)}function xw(e){const t=Fw(),n=re(),s=ze(),a=Bw(),o=r.n2Meta||{},l=h(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N2 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(h(o.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <a class="btn ghost" href="${f(o.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N2_textbook_flashkanji_space.pdf" target="_blank" rel="noopener">${i(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero n2-hero">
          <div class="n5-hero-copy">
            <span class="pill">${i(o.kanjiCount||380)} ${i(n.kanji)} · ${i(o.grammarCount||r.n2Grammar.length||120)} ${i(n.grammar)}</span>
            <h2>${i(n.courseMap)}</h2>
            <p>${i(l)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#jlpt/n2/${f(a?.id||"n2-lesson-1")}" data-action="n2-open-lesson" data-id="${f(a?.id||"n2-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n2-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n2-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n2-grammar">${i(n.grammarN2)}</button>
              <button class="btn ghost" type="button" data-action="n2-reading">${i(n.readingN2)}</button>
              <button class="btn ghost" type="button" data-action="n2-listening">${i(n.listeningN2)}</button>
              <button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${Qn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${T(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,I(t.studied,t.total))}
          ${T(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,I(t.completedLessons,s.length))}
          ${T(n.completedGrammar,`${t.completedGrammar}/${r.n2Meta?.grammarCount||r.n2Grammar.length}`,n.grammar,I(t.completedGrammar,r.n2Meta?.grammarCount||r.n2Grammar.length))}
          ${T(n.completedReading,`${t.completedReading}/${r.n2Meta?.readingCount||r.n2Reading.length}`,n.readingN2,I(t.completedReading,r.n2Meta?.readingCount||r.n2Reading.length))}
          ${T(n.completedListening,`${t.completedListening}/${r.n2Meta?.listeningCount||r.n2Listening.length}`,n.listeningN2,I(t.completedListening,r.n2Meta?.listeningCount||r.n2Listening.length))}
          ${T(n.reviews,t.reviews,n.srs,I(t.reviews,Math.max(t.total,1)))}
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
            ${s.map(c=>Cw(c)).join("")}
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

        ${xs("N2")}
      </section>
    `}function Cw(e){const t=kd(e.id),n=re();let s=e.kanji.filter(a=>M().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n2/${f(e.id)}" data-action="n2-open-lesson" data-id="${f(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(h(e.title))}</h3>
        <p>${i(h(e.goal))}</p>
        <div class="n5-kanji-strip n2-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${f(`${s}/${e.kanji.length}`)}"><i style="width:${I(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Jw(t))}</small>
      </a>
    `}function Lw(e,t){const n=re(),s=Ps(t),a=Xr(t),o=kd(t.id),l=Bn("N2",t,s);let c=o==="completed";const d=`n2:${t.id}`;ee.has(d)&&(c=!0);const u=c,m=a.filter(J=>zi(J.id)?.correct).length,g=a.length>0&&m===a.length,w=s.filter(J=>M().studiedKanji[J.kanji]).length,v=t.kanji.length,$=w>=v,y=!c&&g&&$,x=t.kanji.filter(J=>M().difficultKanji[J]).join(" · "),b=ze().find(J=>J.order===t.order+1),k=hd(t),D=k?!!M().completedReading[k.id]:!1,R=Ye("N2",t.id,"player"),ar=Ye("N2",t.id,"test");return`
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
              ${t.grammarFocus.map(J=>`<span class="pill">${i(J)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${T(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,I(l.answeredCount,t.kanji.length))}
            ${T(n.exercises,`${m}/${a.length}`,n.correct,I(m,a.length))}
          </div>
        </article>

        ${Jr("N2",t,s,n,{playerId:R,answerAction:"jlpt-lesson-answer",examples:J=>Ue(J),sentence:J=>Iw(J,t)})}

        ${Tw(t)}

        ${Aw(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(J=>`
              <article>
                <strong>${i(J.jp)}</strong>
                <span>${i(q(J.reading||""))}</span>
                <small>${i(h({ru:J.ru,en:J.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${f(ar)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(J=>vd(J)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(J=>M().studiedKanji[J.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${k?`<span class="pill">${i(n.miniReadingTitle)}: ${i(D?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(x||n.none)}</span>
            </div>
            ${!c&&!y?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n2-complete-lesson" data-id="${f(t.id)}" ${u||!y?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#jlpt/n2/${f(b.id)}" data-action="n2-open-lesson" data-id="${f(b.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function hd(e){return e?.miniReadingId&&r.n2Reading.find(t=>t.id===e.miniReadingId)||null}function Aw(e){const t=re(),n=hd(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Bi(n,"reading")}
      </section>
    `:""}function Iw(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(q(n.reading||""))}</span>
        <small>${i(h({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(re().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Tw(e){const t=re(),n=(e.grammarFocus||[]).map(s=>Ji(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n2-grammar-complete" data-id="${f(s.id)}" data-value="${f(s.answer)}">${i(M().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function vd(e){const t=re(),n=zi(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&vn("N2",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(h(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${f(Cd(e.id))}" type="text" maxlength="3" autocomplete="off" value="${f(n?.selected||"")}" aria-label="${f(h(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n2-check-input" data-id="${f(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n2-answer" data-id="${f(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${wd(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(h(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n2-answer" data-id="${f(e.id)}" data-value="${f(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${wd(e,n)}
      </article>
    `}function wd(e,t){if(!t)return"";const n=re(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Rw(e){const t=re(),n=M().activeReviewMode||"due",s=rb(n);return`
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
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n2-review" data-mode="${f(a.id)}">${i(h(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>_w(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function _w(e,t){const n=re(),s=A(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Nn(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(L(e))}</h3>
        <p>${i(Ue(e)[0]?.word||e.hiragana||"")} · ${i(Ue(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n2-srs" data-id="${f(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n2-srs" data-id="${f(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Mw(e){const t=re(),n=Ee();return`
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
              <div class="n5-kanji-topline"><span class="pill">${a+1}/380</span><span class="pill">${i(A(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(L(s))}</h3>
              <p>${i(Ue(s)[0]?.word||"")} · ${i(Ue(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n2-srs" data-id="${f(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Pw(e){const t=re();return`
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
          ${T(t.completedGrammar,`${Object.keys(M().completedGrammar||{}).length}/${r.n2Grammar.length}`,t.grammar,I(Object.keys(M().completedGrammar||{}).length,r.n2Grammar.length))}
          ${T(t.questions,r.n2Grammar.length,t.grammar,100)}
        </div>
        <div class="n2-section-grid">
          ${r.n2Grammar.map(n=>{const s=M().grammarResults?.[n.id];return`
              <article class="n2-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(h(n.title))}</h3>
                <p>${i(h(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(q(a.reading||""))}</span><small>${i(h({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(h(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(n.options.length?n.options:[n.answer]).map(a=>`
                    <button class="btn ${s?.selected===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n2-grammar-complete" data-id="${f(n.id)}" data-value="${f(a)}">${i(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${n.answer}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function Ew(e){const t=re(),n=wa("N2","n2_reading_page"),s=Hs("N2");return(n||s)&&N(),`
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
          ${r.n2Reading.map(a=>Bi(a,"reading")).join("")}
        </div>
      </section>
    `}function Dw(e){const t=re();return`
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
          ${r.n2Listening.map(n=>Bi(n,"listening")).join("")}
        </div>
      </section>
    `}function Bi(e,t){const n=re(),s=t==="reading"?M().completedReading[e.id]:M().completedListening[e.id],a=t==="reading"?M().readingAnswers:M().listeningAnswers,o=t==="reading"?"n2-reading-complete":"n2-listening-complete";return`
      <article class="n2-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(h(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n2-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=a?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n2-question-block">
              <h3>${i(h(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(g=>`<button class="btn ${u?.selected===g.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${f(o)}" data-id="${f(e.id)}" data-question="${f(c)}" data-value="${f(g.value)}">${i(h(g.label||g))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function Ow(e){const t=re(),n=r.n2FinalTest||{},s=Nd(),a=M().finalTest,o=Ht(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),N()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
          ${T(t.questions,`${l}/${s.length}`,t.finalTest,I(l,s.length))}
          ${T(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${T(t.mistakes,d?(a.mistakes||[]).length:0,t.difficult,d?I((a.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n2-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${St("N2","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,g)=>Kw(m,g)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n2-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${St("N2","btn ghost")}
          <button class="btn ghost" type="button" data-action="n2-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Kw(e,t){const n=M().finalTest.answers?.[e.id],s=!!M().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n2-final-answer" data-id="${f(e.id)}" data-value="${f(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(re().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function re(){return p()==="ru"?{title:"JLPT N2",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N2: абзацы, аргументы, выводы и позиция автора",continue:"Продолжить",review:"Повторять N2",openKanji:"Открыть список кандзи",grammarN2:"Грамматика N2",readingN2:"Чтение N2",listeningN2:"Аудирование N2",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"38 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, абзац, авторскую позицию, вывод, письмо и повторение.",reviewPlan:"План повторения на 90 дней",day:"день",lesson:"Урок",backToN2:"К N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"Если база N5, N4 или N3 дырявая, N2 будет ощущаться как стена. Перед стартом проверь частицы, связки, условные формы, N3-грамматику и навык видеть причину, уступку и вывод в абзаце.",reviewN5Base:"Повторить N5/N4/N3 перед N2",lessonChain:"Кандзи -> слово -> грамматика -> абзац -> позиция автора -> вывод -> повторение",lessonChainText:"N2 больше не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, о чём текст, где причина, где уступка, что противопоставлено и к какому выводу ведёт короткий N2-абзац.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N2-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N2.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"380 кандзи N2",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"120 грамматических конструкций N2",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе и живом контексте.",readingTitle:"Тексты для чтения N2",readingText:"Короткие тексты и mini-readings уроков связывают кандзи, слова, грамматику, авторскую позицию и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N2",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N2",finalPassed:"N2 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N2",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N2 textbook: paragraphs, arguments, conclusions, and author stance",continue:"Continue",review:"Review N2",openKanji:"Open kanji list",grammarN2:"N2 grammar",readingN2:"N2 reading",listeningN2:"N2 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"38 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, paragraph logic, author stance, writing, and SRS.",reviewPlan:"90-day review plan",day:"day",lesson:"Lesson",backToN2:"To N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"If the N5, N4, or N3 base is shaky, N2 feels like a wall. Review particles, support grammar, N3 connectors, and the habit of spotting cause, concession, and conclusion in a paragraph.",reviewN5Base:"Review N5/N4/N3 before N2",lessonChain:"Kanji -> word -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N2 is not a bare list: each sign gets a word, a formal link, a mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N2 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N2 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N2 review",reviewDescription:"Review due cards, difficult kanji, or the full N2 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"380 N2 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"120 N2 grammar constructions",grammarText:"Compact cards with function, formula, example, and a comprehension check for practical written Japanese.",readingTitle:"N2 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N2 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N2",finalPassed:"N2 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Fi(){r.progress.n2Course=Nl(ni(),r.progress.n2Course||{});const e=ze();!zt(r.progress.n2Course.currentLessonId)&&e[0]&&(r.progress.n2Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n2Course.completedLessons[s.id]);return!r.progress.n2Course.currentLessonId&&n&&(r.progress.n2Course.currentLessonId=n.id),r.progress.n2Course}function M(){return Fi()}function ze(){return r.n2Textbook?.items||[]}function zt(e){const t=String(e||"");return t&&ze().find(n=>n.id===t||n.id===`n2-${t}`||n.id.endsWith(`-${t}`))||null}function Bw(){return zt(M().currentLessonId)||ze().find(e=>!M().completedLessons[e.id])||ze()[0]||null}function Ps(e){return(e?.kanji||[]).map(t=>bd(t)).filter(Boolean)}function Ee(){const e=new Set;return(r.n2KanjiCatalog||[]).map(t=>bd(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function bd(e){const t=String(e||""),n=r.n2KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N2")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?kr(s,n):s||(n?kr({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[]},n):null)}function Ji(e){const t=String(e||"");return r.n2Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function Ue(e){return zr(e,e.examples)}function Fw(){const e=Ee(),t=M(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{A(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of ee)if(a.startsWith("n2:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n2Meta?.kanjiCount||e.length||380,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,o)=>a+Number(A(o.id).reviews||A(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function kd(e){const t=M(),n=`n2:${e}`;return ee.has(n)||t.completedLessons[e]?"completed":zt(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function Jw(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Xr(e){const t=Ps(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n2Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n2Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n2Meta?.rewards?.exerciseXp||11,rewardMoon:r.n2Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:L(c),kanji:c.kanji,cardId:c.id,options:De({value:c.id,label:L(c)},t.slice(1).map(b=>({value:b.id,label:L(b)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:L(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:De({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=Ue(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:De({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>Ue(b).map(k=>({value:k.reading,label:k.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const g=n[0];g&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:g.jp,answer:h({ru:g.ru,en:g.en}),answerLabel:h({ru:g.ru,en:g.en}),kanji:t[0].kanji,cardId:t[0].id,options:De({value:h({ru:g.ru,en:g.en}),label:h({ru:g.ru,en:g.en})},n.slice(1).map(b=>({value:h({ru:b.ru,en:b.en}),label:h({ru:b.ru,en:b.en})})),1),...o("sentence")});const w=t[3]||t[0],v=Ue(w)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ce(v)}В»?`:`Which word matches "${Ce(v)}"?`,answer:v.word||w.kanji,answerLabel:v.word||w.kanji,kanji:w.kanji,cardId:w.id,options:De({value:v.word||w.kanji,label:v.word||w.kanji},t.flatMap(b=>Ue(b).map(k=>({value:k.word,label:k.word}))).filter(b=>b.value&&b.value!==v.word),2),...o("missing-word")});const $=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${L($)}`:`Type the kanji for: ${L($)}`,answer:$.kanji,answerLabel:$.kanji,kanji:$.kanji,cardId:$.id,options:[],...o("active-recall")});const y=Ji(e.grammarFocus?.[0]);y&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:h(y.question||y.explanation),answer:y.answer,answerLabel:y.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:y.id,options:De({value:y.answer,label:y.answer},y.options.filter(b=>b!==y.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const x=n[1]||n[0];return x&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:x.jp,answer:h({ru:x.ru,en:x.en}),answerLabel:h({ru:x.ru,en:x.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:De({value:h({ru:x.ru,en:x.en}),label:h({ru:x.ru,en:x.en})},n.filter(b=>b.jp!==x.jp).map(b=>({value:h({ru:b.ru,en:b.en}),label:h({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),l.slice(0,r.n2Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N2",lessonId:e.id}))}function De(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),Ee().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function yd(e){for(const t of ze()){const n=Xr(t).find(s=>s.id===e);if(n)return n}return null}function zi(e){return Ur("N2",M(),e)}function zw(e){const t=yd(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;$d(t,s,a)}function Uw(e){const t=yd(e);if(!t)return;const n=document.getElementById(Cd(t.id)),s=n?String(n.value||"").trim():"";$d(t,s,s===t.answer)}function $d(e,t,n){const s=M();Gr("N2",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n2Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||r.n2Meta?.rewards?.exerciseMoon||1),rewardKey:`n2_exercise:${e.id}`,markStudied:()=>Un(e.kanji,e.cardId),markDifficult:()=>Es(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function jd(e,t,n="review"){const s=X(e)||Ee().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,l=a?"hard":t,c=H(A(s.id)),d=ue(c,o,l);r.progress.cards[s.id]=d,Qt(c,d,l),ve(),Un(s.kanji,s.id),M().srsKanji[s.kanji]=new Date().toISOString(),a?(Es(s.kanji,s.id,!1),r.progress.totalCorrect+=1,O(r.n2Meta?.rewards?.hardXp||2,1,`n2_srs_lesson_hard:${s.id}`),C("answer_correct")):kn(t)?(Es(s.kanji,s.id),r.progress.totalWrong+=1,O(r.n2Meta?.rewards?.hardXp||2,0,`n2_srs_hard:${s.id}`),C("answer_wrong")):(r.progress.totalCorrect+=1,O(t==="easy"?r.n2Meta?.rewards?.knowXp||9:r.n2Meta?.rewards?.addToSrsXp||7,1,`n2_srs:${s.id}`),C("answer_correct")),U(),N(),j()}function Gw(e){const t=X(e)||Ee().find(s=>String(s.id)===String(e));if(!t)return;const n=M();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Un(t.kanji,t.id),O(9,1,`n2_writing:${t.id}`)),U(),N(),j()}function qw(e){const t=zt(e);if(!t)return;const n=M(),s=`n2:${t.id}`;if(ee.has(s)||n.completedLessons[t.id]){j();return}const a=Ps(t);if(a.filter(v=>n.studiedKanji[v.kanji]).length<t.kanji.length){const v=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof E=="function"&&E(v);return}const l=Xr(t);if(!(l.length>0&&l.every(v=>zi(v.id)?.correct))){const v=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof E=="function"&&E(v);return}ee.add(s),Ps(t).forEach(v=>{Un(v.kanji,v.id),n.srsKanji[v.kanji]=n.srsKanji[v.kanji]||new Date().toISOString();const $=A(v.id);$.state==="New"&&(r.progress.cards[v.id]=ue(H($),"good"))}),(t.grammarFocus||[]).map(v=>Ji(v)).filter(Boolean).forEach(v=>{n.completedGrammar[v.id]=n.completedGrammar[v.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=ze().find(v=>v.order===t.order+1)?.id||t.id;const d=Ns(),u=d.sessions[n2SessKey];if(u){const v=new Date().toISOString();u.phase="done",u.completedAt=v,u.updatedAt=v,u.currentIndex=a.length,d.activeSessionKey=n2SessKey,d.lastUpdatedAt=v}M(),Object.keys(n.completedLessons||{}).length>=38&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],["N2","N1"].forEach(v=>{r.progress.unlockedJlptLevels.includes(v)||r.progress.unlockedJlptLevels.push(v)}));const g=r.n2Meta?.rewards?.lessonCompleteXp||85,w=r.n2Meta?.rewards?.lessonCompleteMoon||10;O(g,w,`n2_lesson:${t.id}`),Ge({title:`${re().lessonComplete}: ${h(t.title)}`,message:re().lessonCompleteText,xp:g,coins:w,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),C("lesson_complete"),U(),N(),j()}function Un(e,t=null){if(!e)return;const n=M();fs(n,e)}function Es(e,t=null,n=!0){if(e&&(M().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=A(t);s.state!=="New"&&(r.progress.cards[t]=ue(H(s),"again"))}}function Hw(e,t=""){const n=r.n2Grammar.find(l=>l.id===e||l.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=M();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),O(r.n2Meta?.rewards?.grammarXp||12,r.n2Meta?.rewards?.grammarMoon||1,`n2_grammar:${n.id}`),r.progress.totalCorrect+=1,C("answer_correct")):a||(r.progress.totalWrong+=1,C("answer_wrong")),ve(),U(),N(),j()}function Xw(e,t="0",n=""){Sd("reading",e,t,n)}function Qw(e,t="0",n=""){Sd("listening",e,t,n)}function Sd(e,t,n="0",s=""){const o=(e==="reading"?r.n2Reading:r.n2Listening).find(y=>y.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=M(),g=e==="reading"?m.readingAnswers:m.listeningAnswers,w=e==="reading"?m.completedReading:m.completedListening,v=!!w[o.id];g[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const $=(o.questions||[]).every((y,x)=>g[`${o.id}:${x}`]?.correct);if(d?(r.progress.totalCorrect+=1,C("answer_correct")):(r.progress.totalWrong+=1,C("answer_wrong")),$&&!v){w[o.id]=new Date().toISOString();const y=e==="reading"?r.n2Meta?.rewards?.readingXp||42:r.n2Meta?.rewards?.listeningXp||38,x=e==="reading"?r.n2Meta?.rewards?.readingMoon||4:r.n2Meta?.rewards?.listeningMoon||4;O(y,x,`n2_${e}:${o.id}`)}ve(),U(),N(),j()}function Ww(e){const t=zt(e);t&&(M().currentLessonId=t.id,ft("N2",t.id,"n2_lesson_open"),Rt("N2",t,"n2_lesson_open"),Ut(t.id))}function Vw(){Ut("")}function Yw(e=null){e&&(M().activeReviewMode=e),Ut("review")}function Zw(){Ut("kanji")}function eb(){Ut("grammar")}function tb(){Ut("reading")}function nb(){Ut("listening")}function sb(){Ut("final-test")}function Ut(e){r.route="textbooks",r.activeTextbookLevel="N2",r.activeTextbookSubroute=e||null,M().opened=!0;const t=e?`#jlpt/n2/${encodeURIComponent(e)}`:"#jlpt/n2";location.hash!==t&&history.replaceState(null,"",t),U(),N(),Q(),Mt()}function rb(e="due"){const t=Date.now(),n=M(),s=Ee();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=A(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Nd(){const e=Ee();if(!e.length)return[];const t=r.n2FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n2FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=ze().find(d=>d.kanji.includes(o.kanji))||ze()[0];s.push(ab(l,o,c,a))}return s.filter(Boolean)}function ab(e,t,n,s){const o=Ue(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:L(t),options:De({value:t.id,label:L(t)},Ee().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:L(c)})),s)};if(e==="reading")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:De({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Ee().flatMap(c=>Ue(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=h({ru:l.ru,en:l.en});return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:De({value:c,label:c},ze().flatMap(d=>d.sentences||[]).map(d=>({value:h({ru:d.ru,en:d.en}),label:h({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ce(o),answer:c,answerLabel:c,options:De({value:c,label:c},Ee().flatMap(d=>Ue(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n2Grammar[s%Math.max(r.n2Grammar.length,1)];if(c)return{id:`n2-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${h(c.question||c.explanation)}`,answer:c.answer,answerLabel:c.answer,options:De({value:c.answer,label:c.answer},c.options.filter(d=>d!==c.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n2Reading[s%Math.max(r.n2Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n2-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||h(c.title)} ${h(d.prompt)}`,answer:d.answer,answerLabel:h((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:h(u.label||u)}))}}return e==="srs"?{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${L(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${L(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n2-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:L(t),answer:t.kanji,answerLabel:t.kanji,options:De({value:t.kanji,label:t.kanji},Ee().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function ib(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(M().finalTest.answers[t]=n,N(),j())}function xd(e=!1){if(r.finalTestBusy)return;const t=M().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){j();return}r.finalTestBusy=!0;try{const n=Nd(),s=r.n2FinalTest||{},a=re(),o=Ht(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const k=o.firstMissingId?`#${Os("n2",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N2",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:k,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=k,N();return}let u=0;const m=[],g=[];n.forEach(k=>{const D=String(t.answers?.[k.id]||"").trim();if(D===k.answer){if(u+=1,k.kanji&&Un(k.kanji,k.cardId),k.grammarId){const R=M();R.completedGrammar[k.grammarId]=R.completedGrammar[k.grammarId]||d}}else D||g.push(k),m.push({id:k.id,kanji:k.kanji||"",answer:k.answerLabel,selected:D}),k.kanji&&Es(k.kanji,k.cardId)});const w=n.length?Math.round(u/n.length*100):0,v=!!t.completedAt,$=!!t.passed,y=Math.max(0,m.length-g.length);let x=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=w,t.passed=w>=l,t.correctAnswers=u,t.incorrectAnswers=y,t.unansweredAnswers=g.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(k=>k.id),t.completedAt=d,t.lastScore=w,t.bestScore=Math.max(Number(t.bestScore||0),w),t.passedAt=t.passed?$&&t.passedAt||d:t.passedAt||null,!v){const k=Number(s?.rewards?.completeXp||220),D=Number(s?.rewards?.completeMoon||40);x+=k,b+=D,O(k,D,"n2_final_complete")}if(t.passed&&!$){const k=Number(s?.rewards?.passXp||110),D=Number(s?.rewards?.passMoon||18);x+=k,b+=D,O(k,D,"n2_final_pass")}t.lastRewardXp=x,t.lastRewardMoon=b,M(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N2",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:w,correct:u,incorrect:y,unanswered:g.length,totalQuestions:n.length,rewardXp:x,rewardMoon:b,attempts:t.attempts,threshold:l,reviewAction:"n2-review",reviewAllAction:"n2-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},U(),N()}catch(n){console.error(n),E(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,j()}}function ob(){M().finalTest=ni().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,N(),j()}function Cd(e){return`n2-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Ld(e){const t=Yn(e.jlpt);if(!t)return"";const n={...$o(),...yo()};return`
      <div class="jlpt-practice-grid">
        ${lb(t,n)}
        ${cb(t,n)}
        ${db(t,n)}
        ${pb(t,n)}
      </div>
    `}function lb(e,t){return e.apps.length?`
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
    `:""}function cb(e,t){const n=Array.isArray(e.kana?.hiragana)?e.kana.hiragana:[],s=Array.isArray(e.kana?.katakana)?e.kana.katakana:[];return!n.length&&!s.length?"":`
      <article class="jlpt-practice-card">
        <h3>${i(t.kana)}</h3>
        <div class="kana-columns">
          ${Ad(t.hiragana,n)}
          ${Ad(t.katakana,s)}
        </div>
      </article>
    `}function Ad(e,t){return t.length?`
      <div class="kana-column">
        <strong>${i(e)}</strong>
        ${t.map(n=>`
          <span class="kana-chip">
            <b>${i(n.kana)}</b>
            <small>${i(n.romaji)} · ${i(h(n.note))}</small>
          </span>
        `).join("")}
      </div>
    `:""}function db(e,t){return e.kanjiFocus.length?`
      <article class="jlpt-practice-card jlpt-kanji-focus">
        <h3>${i(t.kanjiFocus)}</h3>
        <div class="jlpt-focus-grid">
          ${e.kanjiFocus.map(n=>`
            <div class="jlpt-focus-item">
              <span class="kanji-mini">${i(n.kanji)}</span>
              <div>
                <strong>${ub(n)}</strong>
                <small>${i(n.romaji)} · ${i(h(n.meaning))}</small>
                <p>${i(h(n.appUse))}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function ub(e){const t=Array.isArray(e.furigana)?e.furigana:[];return t.length?t.map(n=>n.rt?`<ruby>${i(n.text)}<rt>${i(n.rt)}</rt></ruby>`:i(n.text)).join(""):i(e.word||e.kanji||"")}function pb(e,t){const n=Zn(e);if(!n)return"";const s=Sn(),a=s.selected[n.id]||[],o=!!s.checked[n.id],l=s.results[n.id]||null,c=a.map(m=>n.tiles[m]).filter(Boolean),d=o&&l?.correct,u=o&&l?l.wrongIndexes||[]:[];return`
      <article class="jlpt-practice-card jlpt-drill-card">
        <div class="section-head compact-head">
          <div>
            <h3>${i(t.sentenceDrill)}</h3>
            <p>${i(h(n.translation))}</p>
          </div>
          <span class="pill">${i(e.jlpt)}</span>
        </div>
        <div class="jlpt-sentence-line">${gb(n,c,u)}</div>
        <p class="label">${i(q(n.reading))}</p>
        <div class="sentence-tiles jlpt-tiles">
          ${n.tiles.map((m,g)=>{const w=a.includes(g);return`
              <button class="sentence-tile ${w?"is-used":""}" type="button" data-action="insert-jlpt-tile" data-index="${g}" ${w||d?"disabled":""}>
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
    `}function gb(e,t,n){let s=0;return String(e.sentence||"").split("___").map((a,o,l)=>{if(o===l.length-1)return i(a);const d=(e.blanks[o]||{answer:[]}).answer.length||1,u=t.slice(s,s+d),m=u.some((w,v)=>n.includes(s+v));s+=d;const g=u.length?u.map(w=>`<span>${i(w.kanji)}</span>`).join(""):`<span>${i("в–Ў".repeat(d))}</span>`;return`${i(a)}<span class="sentence-blank ${m?"is-wrong":""}">${g}</span>`}).join("")}function mb(){const e=Cy(),t=Wb(e),n=e.length,s=t?.kind==="card"?t.card:t?.kind==="exercise"?t.card||X(t.cardId)||X(t.progress?.cardId||""):null;Qb(t);const a=t?t.kind==="card"?s?Od(s):ra():sk(t):ra();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(S("review"))}</h1>
            <p>${n} ${i(p()==="ru"?"в очереди":"in queue")}</p>
          </div>
          <div class="actions">
            ${ts("srs")}
          </div>
        </div>
        <div class="study-layout" data-section="review-card">
          ${a}
          ${Qi(s,n)}
        </div>
        ${fb()}
      </section>
    `}function fb(){const e=dt(),t=Wr(e),n={...Gn(),...Ui()},s=hb(e,n);if(!e.length)return`
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
      `;const a=qi(t,e);if(!a)return"";const{exercise:o,tiles:l,selectedTiles:c,answerFlat:d,wrongIndexes:u,complete:m,awarded:g}=a,w=new Set(r.progress.sentencePractice.selected),v=r.progress.sentencePractice.result||{};return`
      <article class="sentence-practice${r.progress.sentencePractice.checked?m?" is-success":" is-error":""}" data-section="sentence-practice" aria-live="polite">
        <div class="section-head sentence-head">
          <div>
            <h2>${i(n.title)}</h2>
            <p>${i(n.subtitle.replace("{learned}",e.length).replace("{total}",r.cards.length))}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(o.jlpt)}</span>
            ${o.source?`<span class="pill">${i(wb(o.source,n))}</span>`:""}
            <span class="pill">${i(n.progress.replace("{done}",Object.keys(r.progress.sentencePractice.completed||{}).length).replace("{total}",t.length))}</span>
          </div>
        </div>
        ${s}
        <div class="sentence-card">
          <div class="sentence-line">${Td(o,c,u)}</div>
          <p class="sentence-reading">${i(o.reading||"")}</p>
          <p class="sentence-translation">${i(bb(o))}</p>
        </div>
        <div class="sentence-tiles">
          ${l.map((y,x)=>{const b=w.has(x),k=u.includes(r.progress.sentencePractice.selected.indexOf(x));return`
              <button class="sentence-tile ${b?"is-used":""} ${k?"is-wrong":""}" type="button" data-action="insert-sentence-tile" data-index="${x}" ${b||m?"disabled":""}>
                <span>${i(y.reading)}</span>
                <strong>${i(y.kanji)}</strong>
              </button>
            `}).join("")}
        </div>
        <div class="sentence-feedback">
          ${i(v.message||n.tip.replace("{count}",d.length))}
          ${m&&!g?`<small>${i(n.completedBefore)}</small>`:""}
        </div>
        <div class="actions sentence-actions">
          <button class="btn primary" type="button" data-action="check-sentence">${i(n.check)}</button>
          <button class="btn" type="button" data-action="undo-sentence-tile" ${!r.progress.sentencePractice.selected.length||m?"disabled":""}>${i(n.undo)}</button>
          <button class="btn" type="button" data-action="clear-sentence" ${!r.progress.sentencePractice.selected.length||m?"disabled":""}>${i(n.clear)}</button>
          <button class="btn ghost" type="button" data-action="next-sentence">${i(n.next)}</button>
        </div>
      </article>
    `}function hb(e,t){const n=fe(),s=$r(n.customDraft||{}),a=Array.isArray(n.customSentences)?n.customSentences:[],o=a.length,l=!!n.customEditingId,c=n.customStatus?` is-${n.customStatus}`:"";return`
      <details class="sentence-builder" ${l||n.customMessage?"open":""}>
        <summary>
          <span>${i(t.customTitle)}</span>
          <small>${i(t.customCount.replace("{count}",o))}</small>
        </summary>
        <div class="sentence-builder-grid">
          <label class="field sentence-builder-wide">
            <span>${i(t.customSentence)}</span>
            <textarea data-sentence-draft="jp" rows="2" autocomplete="off" spellcheck="false" placeholder="${f(t.customSentencePlaceholder)}">${i(s.jp||"")}</textarea>
          </label>
          <label class="field sentence-builder-wide">
            <span>${i(t.customReading)}</span>
            <input data-sentence-draft="hiragana" type="text" autocomplete="off" spellcheck="false" value="${f(s.hiragana||"")}" placeholder="${f(t.customReadingPlaceholder)}" />
          </label>
          <label class="field">
            <span>${i(t.customTranslationRu)}</span>
            <input data-sentence-draft="ru" type="text" value="${f(s.ru||"")}" placeholder="${f(t.customTranslationRuPlaceholder)}" />
          </label>
          <label class="field">
            <span>${i(t.customTranslationEn)}</span>
            <input data-sentence-draft="en" type="text" value="${f(s.en||"")}" placeholder="${f(t.customTranslationEnPlaceholder)}" />
          </label>
        </div>
        <div class="sentence-builder-actions">
          <button class="btn primary" type="button" data-action="add-custom-sentence">${i(l?t.updateCustom:t.addCustom)}</button>
          ${l?`<button class="btn ghost" type="button" data-action="cancel-custom-sentence-edit">${i(t.cancelEdit)}</button>`:""}
          <span class="sentence-builder-message${c}">${i(n.customMessage||t.customHelp.replace("{learned}",e.length))}</span>
        </div>
        ${vb(a,e,t)}
      </details>
    `}function vb(e,t,n){return e.length?`
      <div class="sentence-custom-list">
        ${e.map(s=>{const a=Gi(s,t),o=!!(a&&Gt(a,t).length>=Math.max(4,tt(a).length)),l=p()==="en"?s.en||s.ru:s.ru||s.en;return`
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
                <button class="btn" type="button" data-action="edit-custom-sentence" data-id="${f(s.id)}">${i(n.editCustom)}</button>
                <button class="btn ghost" type="button" data-action="delete-custom-sentence" data-id="${f(s.id)}">${i(n.deleteCustom)}</button>
              </div>
            </article>
          `}).join("")}
      </div>
    `:`<p class="sentence-custom-empty">${i(n.customEmpty)}</p>`}function wb(e,t){return e==="user"||e==="custom"?t.userSource||t.customSource:e==="dynamic"?t.dynamicSource:e}function Gn(){return p()==="ru"?{title:"Практика предложений",subtitle:"Только из изученных кандзи: {learned}/{total}",progress:"{done}/{total} готово",noLearned:"Сначала изучи несколько кандзи в уроках или повторении. После этого появятся предложения.",notEnough:"Изучено {count} кандзи. Для упражнения нужно минимум 4 изученных кандзи, чтобы собрать варианты.",noExercise:"Изученные кандзи пока не складываются в доступные предложения. Продолжай уроки, и блок откроется.",tip:"Заполни {count} пропуск(а) плитками по порядку.",check:"Проверить",clear:"Очистить",next:"Следующее",undo:"Убрать",completedBefore:"Награда за это предложение уже получена.",fillAll:"Заполни все пропуски перед проверкой.",correct:"Верно. Предложение собрано правильно.",wrong:"Проверь красные места и попробуй ещё раз.",full:"Все пропуски уже заполнены.",inserted:"Плитка вставлена.",removed:"Последняя плитка убрана."}:{title:"Sentence practice",subtitle:"Only learned kanji: {learned}/{total}",progress:"{done}/{total} done",noLearned:"Study a few kanji first. Sentence practice will unlock after that.",notEnough:"{count} kanji learned. You need at least 4 learned kanji for tile choices.",noExercise:"Your learned kanji do not form an available sentence yet. Continue lessons to unlock this block.",tip:"Fill {count} blank slot(s) with tiles in order.",check:"Check",clear:"Clear",next:"Next",undo:"Undo",completedBefore:"Reward for this sentence was already claimed.",fillAll:"Fill every blank before checking.",correct:"Correct. The sentence is complete.",wrong:"Check the red slots and try again.",full:"All blank slots are already filled.",inserted:"Tile inserted.",removed:"Last tile removed."}}function Ui(){return p()==="ru"?{customTitle:"Своё предложение",customCount:"Своих: {count}",customSentence:"Японское предложение",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Чтение хираганой",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Перевод RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Добавить",customHelp:"Вставь фразу. Приложение спрячет только изученные кандзи: {learned}.",customAdded:"Предложение добавлено.",customNoSentence:"Вставь японское предложение.",customNoKnown:"В этом предложении нет изученных кандзи.",customNoTiles:"Нужно минимум 4 изученных кандзи для вариантов.",customDuplicate:"Такое предложение уже есть.",customUpdated:"Предложение обновлено.",customDeleted:"Предложение удалено.",customEmpty:"Свои предложения появятся здесь.",customReady:"Доступно",customLocked:"Позже",updateCustom:"Сохранить",cancelEdit:"Отмена",editCustom:"Редактировать",deleteCustom:"Удалить",customSource:"Своё",userSource:"USER",dynamicSource:"JSON"}:{customTitle:"Custom sentence",customCount:"Custom: {count}",customSentence:"Japanese sentence",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Hiragana reading",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Translation RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Add",customHelp:"Paste a phrase. The app will hide only learned kanji: {learned}.",customAdded:"Sentence added.",customNoSentence:"Paste a Japanese sentence.",customNoKnown:"No learned kanji found in this sentence.",customNoTiles:"You need at least 4 learned kanji for tile choices.",customDuplicate:"This sentence already exists.",customUpdated:"Sentence updated.",customDeleted:"Sentence deleted.",customEmpty:"Your sentences will appear here.",customReady:"Ready",customLocked:"Later",updateCustom:"Save",cancelEdit:"Cancel",editCustom:"Edit",deleteCustom:"Delete",customSource:"Custom",userSource:"USER",dynamicSource:"JSON"}}function bb(e){return p()==="en"?e.translationEn||e.translationRu||"":e.translationRu||e.translationEn||""}function Id(e=dt()){const t=kb(e),n=yb(e),s=new Set;return[...t,...n,...r.sentenceExercises].filter(a=>!a?.id||s.has(a.id)?!1:(s.add(a.id),!0))}function kb(e=dt()){return(fe().customSentences||[]).map(n=>Gi(n,e)).filter(Boolean)}function Gi(e,t=dt()){return e?.jp?Hi({id:e.id,jlpt:Mb(e.jp,t),sentence:e.jp,reading:e.hiragana||Ds(e.jp),translationRu:e.ru||"",translationEn:e.en||"",source:"user"},t,{maxBlanks:3,maxBlankChars:5}):null}function Td(e,t,n){const s=e.blanks||[],a=String(e.sentence||"").split("___");let o=0;return a.map((l,c)=>{const d=s[c];if(!d)return i(l);const u=d.answer||[],m=u.map((g,w)=>{const v=o+w,$=t[v],y=n.includes(v);return`<span class="sentence-slot ${$?"is-filled":""} ${y?"is-wrong":""}">${$?i($.kanji):""}</span>`}).join("");return o+=u.length,`${i(l)}<span class="sentence-blank">${m}</span>`}).join("")}function qi(e=Wr(),t=dt()){const n=fe();new Set(e.map(m=>m.id)).has(n.activeId)||Qr(Xi(e)?.id||null);const a=e.find(m=>m.id===r.progress.sentencePractice.activeId)||e[0];if(!a)return null;const o=tt(a);r.progress.sentencePractice.tileKeys?.length||(r.progress.sentencePractice.tileKeys=Gt(a,t).map(Zr));let l=r.progress.sentencePractice.tileKeys.map(Eb).filter(Boolean);const c=()=>o.every(m=>l.some(g=>g.kanji===m.kanji));(l.length<Math.max(4,o.length)||!c())&&(l=Gt(a,t),r.progress.sentencePractice.tileKeys=l.map(Zr),r.progress.sentencePractice.selected=[],r.progress.sentencePractice.checked=!1,r.progress.sentencePractice.result=null),r.progress.sentencePractice.selected=(r.progress.sentencePractice.selected||[]).filter((m,g,w)=>Number.isInteger(m)&&m>=0&&m<l.length&&w.indexOf(m)===g).slice(0,o.length);const d=r.progress.sentencePractice.selected.map(m=>l[m]).filter(Boolean),u=r.progress.sentencePractice.checked&&r.progress.sentencePractice.result?r.progress.sentencePractice.result.wrongIndexes||[]:[];return{exercise:a,tiles:l,selectedTiles:d,answerFlat:o,wrongIndexes:u,complete:!!(r.progress.sentencePractice.checked&&r.progress.sentencePractice.result?.correct),awarded:!!r.progress.sentencePractice.completed?.[a.id]}}function fe(){return r.progress.sentencePractice=xl(ms().sentencePractice,r.progress.sentencePractice||{}),r.progress.sentencePractice}function Qr(e){r.progress.sentencePractice={...fe(),activeId:e,selected:[],checked:!1,result:null,tileKeys:[]};const t=Id(dt()).find(n=>n.id===e);t&&Pd(t)}function dt(){return r.cards.filter(e=>{const t=r.lessons.find(s=>s.id===e.lessonId);if(t&&!ke(t))return!1;const n=A(e.id);return n.state!=="New"||n.reviewCount>0||n.lastReview||r.progress.lessonCompletions[e.lessonId]})}function Wr(e=dt()){const t=new Set(e.map(n=>n.kanji));return Id(e).filter(n=>{const s=tt(n);return!s.length||s.some(a=>!t.has(a.kanji))?!1:Gt(n,e).length>=Math.max(4,s.length)})}function tt(e){return(e.blanks||[]).flatMap(t=>(t.answer||[]).map((n,s)=>({kanji:n,reading:t.reading?.[s]||""})))}function Rd(e){return tt(e).map(t=>t.kanji).join("")}function Gt(e,t){const n=tt(e),s=new Set(n.map(g=>g.kanji)),a=new Set(t.map(g=>g.kanji)),o=new Map;[...e.tiles||[],...n].forEach(g=>{g?.kanji&&g?.reading&&o.set(g.kanji,g.reading)});const l=n.map(g=>({kanji:g.kanji,reading:g.reading||o.get(g.kanji)||kt(g.kanji)})),c=(e.tiles||[]).filter(g=>g?.kanji&&!s.has(g.kanji)&&a.has(g.kanji)).map(g=>({kanji:g.kanji,reading:g.reading||kt(g.kanji)})).filter((g,w,v)=>v.findIndex($=>$.kanji===g.kanji)===w),d=t.filter(g=>g.kanji&&!s.has(g.kanji)).map(g=>({kanji:g.kanji,reading:o.get(g.kanji)||kt(g.kanji,g)})).filter((g,w,v)=>v.findIndex($=>$.kanji===g.kanji)===w).sort((g,w)=>he(`${e.id}:${g.kanji}`)-he(`${e.id}:${w.kanji}`)),u=[...c,...d].filter(g=>!s.has(g.kanji)).filter((g,w,v)=>v.findIndex($=>$.kanji===g.kanji)===w),m=Math.min(Math.max(6,l.length+2),l.length+u.length);return Ub([...l,...u.slice(0,m-l.length)],e.id)}function yb(e){if(!e.length)return[];const t=new Set(e.map(o=>o.kanji)),n=new Set,s=[];return e.flatMap(o=>(o.examples||[]).map(l=>({...l,card:o}))).forEach((o,l)=>{const c=qn(o.word||"");if(!c||n.has(c)||!Pb(c)||Md(c).some(v=>!t.has(v)))return;n.add(c);const d=wn(o.reading||Ds(c)),u=o.translation||c,m=[{sentence:`今日は${c}をアプリで見ます。`,reading:`きょうは ${d}を あぷりで みます。`,translationRu:`Сегодня я смотрю в приложении: ${u}.`,translationEn:`Today I check ${c} in an app.`},{sentence:`駅で${c}について話します。`,reading:`えきで ${d}について はなします。`,translationRu:`На станции говорю про: ${u}.`,translationEn:`At the station, I talk about ${c}.`},{sentence:`メモに${c}を書きます。`,reading:`めもに ${d}を かきます。`,translationRu:`Я записываю в заметку: ${u}.`,translationEn:`I write ${c} in a memo.`}],g=m[l%m.length],w=Hi({id:`sentence-json-${he(`${c}:${g.sentence}`).toString(36)}`,jlpt:o.card?.jlpt||"N5",sentence:g.sentence,reading:g.reading,translationRu:g.translationRu,translationEn:g.translationEn,source:"dynamic"},e,{maxBlanks:2,maxBlankChars:4});w&&s.push(w)}),s.slice(0,160)}function $b(){const e=fe(),t={...Gn(),...Ui()},n=$r(jb()||e.customDraft||{}),s=dt(),a=qt(n.jp);if(!a){Vr(t.customNoSentence,"error");return}const o=e.customEditingId||null;if(Cb(a,o)){Vr(t.customDuplicate,"error");return}const c=fe(),d={id:o||`custom_${Date.now().toString(36)}_${he(a).toString(36)}`,jp:a,hiragana:wn(qt(n.hiragana)||Ds(a)),ru:qt(n.ru),en:qt(n.en),source:"user"},u=(c.customSentences||[]).findIndex(g=>g.id===d.id);u>=0?c.customSentences[u]=d:c.customSentences=[d,...c.customSentences||[]].slice(0,160),c.customDraft={jp:"",hiragana:"",ru:"",en:""},c.customEditingId=null,Vr(o?t.customUpdated:t.customAdded,"success",!1);const m=Gi(d,s);m&&Gt(m,s).length>=Math.max(4,tt(m).length)&&(Qr(m.id),r.progress.sentencePractice.tileKeys=Gt(m,s).map(Zr)),N(),j()}function jb(){const e=document.querySelector(".sentence-builder");if(!e)return null;const t=n=>e.querySelector(`[data-sentence-draft="${n}"]`)?.value||"";return{jp:t("jp"),hiragana:t("hiragana"),ru:t("ru"),en:t("en")}}function Sb(e){const t=fe(),n=(t.customSentences||[]).find(s=>s.id===e);n&&(t.customEditingId=n.id,t.customDraft={jp:n.jp||"",hiragana:n.hiragana||"",ru:n.ru||"",en:n.en||""},t.customMessage="",t.customStatus="",N(),j())}function Nb(e){const t=fe(),n={...Gn(),...Ui()},s=(t.customSentences||[]).length;if(t.customSentences=(t.customSentences||[]).filter(a=>a.id!==e),t.customSentences.length!==s){if(t.customEditingId===e&&(t.customEditingId=null,t.customDraft={jp:"",hiragana:"",ru:"",en:""}),t.completed?.[e]&&delete t.completed[e],t.recentIds=(t.recentIds||[]).filter(a=>a!==e),t.activeId===e){const a=dt(),o=Xi(Wr(a));Qr(o?.id||null)}Vr(n.customDeleted,"success",!1),N(),j()}}function xb(){const e=fe();e.customEditingId=null,e.customDraft={jp:"",hiragana:"",ru:"",en:""},e.customMessage="",e.customStatus="",N(),j()}function Cb(e,t=null){const n=qn(e);return(fe().customSentences||[]).some(a=>a.id!==t&&qn(a.jp)===n)?!0:r.sentenceExercises.some(a=>qn(_d(a))===n)}function Vr(e,t,n=!0){const s=fe();s.customMessage=e,s.customStatus=t,N(),n&&j()}function Hi(e,t,n={}){const s=qn(e.sentence||""),a=Lb(s,t).filter(u=>u.answer.length<=Number(n.maxBlankChars||5));if(!a.length)return null;const o=Ab(a,s,n);if(!o.length)return null;let l="",c=0;const d=o.map(u=>(l+=s.slice(c,u.start)+"___",c=u.end,{answer:u.answer,reading:Ib(u.text)}));return l+=s.slice(c),{id:e.id,jlpt:e.jlpt||"N5",sentence:l,originalSentence:s,reading:wn(e.reading||Ds(s)),translationRu:e.translationRu||"",translationEn:e.translationEn||"",blanks:d,tiles:d.flatMap(u=>u.answer.map((m,g)=>({kanji:m,reading:u.reading[g]||kt(m)}))),source:e.source||"custom",createdAt:e.createdAt}}function Lb(e,t){const n=new Map(t.map(o=>[o.kanji,o])),s=[];let a=null;return Array.from(e).forEach((o,l)=>{if(Yr(o)&&n.has(o)){a||={start:l,end:l,text:"",answer:[]},a.end=l+1,a.text+=o,a.answer.push(o);return}a&&s.push(a),a=null}),a&&s.push(a),s}function Ab(e,t,n={}){const s=Number(n.maxBlanks||2),a=Number(n.maxBlankChars||5),o=e.filter(m=>m.start>0&&m.end<t.length),l=e.filter(m=>m.start>0),c=(o.length?o:l.length?l:e).slice().sort((m,g)=>{const w=g.answer.length-m.answer.length;return w||Math.abs(m.start-t.length/2)-Math.abs(g.start-t.length/2)}),d=[];let u=0;return c.forEach(m=>{d.length>=s||u+m.answer.length>a||(d.push(m),u+=m.answer.length)}),d.sort((m,g)=>m.start-g.start)}function Ib(e){const t=Array.from(e),n=Tb(e);return n?Rb(t,wn(n)):t.map(s=>kt(s))}function Tb(e){for(const t of r.cards)for(const n of t.examples||[])if(n.word===e&&n.reading)return n.reading;return""}function Rb(e,t){const n=Array(e.length).fill("");let s=t;for(let a=e.length-1;a>0;a-=1){const l=_b(e[a]).sort((c,d)=>d.length-c.length).find(c=>c&&s.endsWith(c));l&&(n[a]=l,s=s.slice(0,-l.length))}return n[0]=s||kt(e[0]),n.map((a,o)=>a||kt(e[o]))}function _b(e){const t=r.cards.find(s=>s.kanji===e),n=[t?.hiragana,t?.onyomi,t?.kunyomi].flatMap(s=>String(s||"").split(/[\/,;гѓ»гЂЃ\s]+/)).map(s=>wn(s.trim())).filter(Boolean);return[...new Set(n)]}function Ds(e){return wn(Array.from(e).map(t=>Yr(t)?kt(t):t).join(""))}function Mb(e,t){const n=["N5","N4","N3","N2","N1"],s=new Map(t.map(o=>[o.kanji,o]));return Md(e).map(o=>s.get(o)?.jlpt).filter(Boolean).sort((o,l)=>n.indexOf(l)-n.indexOf(o))[0]||"N5"}function qn(e){return String(e||"").replace(/\s+/g,"").trim()}function qt(e){return String(e||"").replace(/\s+/g," ").trim()}function _d(e){if(!e)return"";if(e.jp)return e.jp;if(e.originalSentence)return e.originalSentence;let t=0;return String(e.sentence||"").replace(/___/g,()=>(e.blanks?.[t++]?.answer||[]).join(""))}function Pb(e){return Array.from(String(e||"")).some(Yr)}function Md(e){return Array.from(String(e||"")).filter(Yr)}function Yr(e){return/[㐀-鿿]/u.test(e)}function wn(e){return String(e||"").replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-96))}function q(e){return wn(String(e||""))}function kt(e,t=r.cards.find(n=>n.kanji===e)){const n=t?.onyomi||t?.kunyomi||t?.hiragana||"";return String(n).split("/")[0].trim()||"かな"}function Zr(e){return`${e.kanji}	${e.reading||""}`}function Eb(e){const[t,n]=String(e||"").split("	");return t?{kanji:t,reading:n||kt(t)}:null}function Db(e){const t=qi();if(!t||!Number.isInteger(e))return;const n=Gn(),s=r.progress.sentencePractice;if(!(s.result?.correct||s.selected.includes(e))){if(s.selected.length>=t.answerFlat.length){E(n.full);return}s.selected.push(e),s.checked=!1,s.result={correct:!1,message:n.inserted,wrongIndexes:[]},N(),j()}}function Ob(){const e=fe();!e.selected.length||e.result?.correct||(e.selected.pop(),e.checked=!1,e.result={correct:!1,message:Gn().removed,wrongIndexes:[]},N(),j())}function Kb(){const e=fe();e.result?.correct||(e.selected=[],e.checked=!1,e.result=null,N(),j())}function Bb(){const e=qi();if(!e)return;const t=Gn(),n=r.progress.sentencePractice;if(n.selected.length<e.answerFlat.length){n.checked=!0,n.result={correct:!1,message:t.fillAll,wrongIndexes:[]},N(),j();return}const s=e.answerFlat.map((o,l)=>e.selectedTiles[l]?.kanji===o.kanji?-1:l).filter(o=>o>=0),a=s.length===0;if(n.checked=!0,n.attempts=(n.attempts||0)+1,n.result={correct:a,wrongIndexes:s,message:a?t.correct:t.wrong},a)Fb(e.exercise),ce({trust:.8,curiosity:.5,discipline:.4},"sentence_correct"),de("sentence_complete",{exerciseId:e.exercise.id,source:e.exercise.source||"builtin"}),er("ok");else{r.progress.totalWrong+=1,r.progress.correctCombo=0,ce({discipline:-.6,curiosity:.2},"sentence_wrong"),de("answer_wrong",{exerciseId:e.exercise.id,mode:"sentence"});const o=yt();o.mistakes+=1,r.progress.daily[W()]=o,er("again")}N(),j()}function Fb(e){const t=fe();if(t.completed[e.id])return;const n=r.rewards?.rewards||{},s=n.sentencePracticeXp||Jo.xp,a=n.sentencePracticeCoins||Jo.coins;t.completed[e.id]=new Date().toISOString(),r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo);const o=yt();o.reviews+=1,o.minutes=as((o.minutes||0)+.8,1),r.progress.daily[W()]=o,O(s,a,`sentence:${e.id}`),ce({trust:.8,curiosity:.7},"sentence_complete"),ve(),so(),U()}function Jb(){const e=dt(),t=Wr(e);if(!t.length)return;const n=r.progress.sentencePractice?.activeId,s=t.find(o=>o.id===n);s&&Pd(s);const a=Xi(t,{excludeCurrent:!0,preferUncompleted:!0});Qr(a.id),r.progress.sentencePractice.tileKeys=Gt(a,e).map(Zr),N(),j()}function Xi(e,t={}){if(!e.length)return null;const n=fe(),s=n.activeId,a=new Set(n.recentIds||[]),o=new Set(n.recentAnswers||[]),l=$=>!t.excludeCurrent||e.length===1||$.id!==s,c=$=>!t.preferUncompleted||!n.completed?.[$.id],d=$=>!o.has(Rd($)),u=$=>!a.has($.id),g=[e.filter(l).filter(c).filter(d).filter(u),e.filter(l).filter(c).filter(d),e.filter(l).filter(d).filter(u),e.filter(l).filter(u),e.filter(l),e].find($=>$.length)||e,w=g.filter(zb),v=w.length?w:g;return v[Math.floor(Math.random()*v.length)]}function zb(e){return e.source==="user"||e.source==="custom"||e.source==="dynamic"||String(e.sentence||"").indexOf("___")>0}function Pd(e){const t=fe(),n=Rd(e);t.recentIds=[e.id,...(t.recentIds||[]).filter(s=>s!==e.id)].slice(0,14),t.recentAnswers=[n,...(t.recentAnswers||[]).filter(s=>s!==n)].slice(0,8)}function he(e){return String(e).split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0)>>>0}function Ub(e,t){return[...e].sort((n,s)=>he(`${t}:${n.kanji}:${n.reading}`)-he(`${t}:${s.kanji}:${s.reading}`))}function Ht(e,t=[]){const n=t.filter(a=>String(e?.answers?.[a.id]||"").trim()).length,s=t.filter(a=>!String(e?.answers?.[a.id]||"").trim());return{answered:n,missingCount:s.length,missingIds:s.map(a=>a.id),firstMissingId:s[0]?.id||null,totalQuestions:t.length,ready:t.length>0&&s.length===0}}function Os(e,t){const n=String(e||"n5").toLowerCase(),s=String(t||"").replace(/[^a-z0-9_-]+/gi,"-");return`${n}-final-question-${s}`}function Gb(e){return Number(e?.passingPercent??e?.passThreshold??70)}function qb(){const e=r.finalTestModal;if(!e)return"";const t=e.kind==="warning",n=t?"thinking":e.passed?"proud":"sad",s=t?"":St(e.level,"btn ghost");!t&&(!e.percent||e.percent===0)&&typeof e.correct=="number"&&e.totalQuestions>0&&(e.percent=Math.round(e.correct/e.totalQuestions*100));const a=t?[`<span>${i(p()==="ru"?"Вопросов":"Questions")} ${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Пропусков":"Missing")} ${e.missingCount}</span>`,`<span>${i(p()==="ru"?"Порог":"Pass")} ${e.threshold}%</span>`]:[`<span>${i(p()==="ru"?"Результат":"Score")} ${e.percent}%</span>`,`<span>${i(p()==="ru"?"Верно":"Correct")} ${e.correct}/${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Ошибки":"Errors")} ${e.incorrect}</span>`,`<span>${i(p()==="ru"?"Пропуски":"Missing")} ${e.unanswered}</span>`,`<span>+${e.rewardXp} XP</span>`,`<span>+${e.rewardMoon} ${i(S("coins"))}</span>`];return`
      <div class="reward-backdrop final-test-backdrop">
        <article class="reward-modal is-final-test ${t?"is-warning":"is-result"}" role="dialog" aria-modal="true">
          ${Qn("eva",n,t?"review":"achievement","reward-mascot")}
          <h2>${i(e.title)}</h2>
          <p>${i(e.message)}</p>
          <div class="reward-values">
            ${a.join("")}
          </div>
          <div class="actions final-test-modal-actions">
            ${t?`<button class="btn primary" type="button" data-action="final-test-focus-missing" data-focus="${f(e.focusSelector||"")}">${i(e.focusLabel||(p()==="ru"?"К пропуску":"Go to missing"))}</button>`:""}
            ${t&&e.allowIncomplete?`<button class="btn ghost" type="button" data-action="final-test-force-submit" data-level="${f(e.level||"N5")}">${i(e.forceLabel||(p()==="ru"?"Завершить без ответов":"Finish anyway"))}</button>`:""}
            ${!t&&e.reviewAction?`<button class="btn ghost" type="button" data-action="${f(e.reviewAction)}" data-mode="difficult">${i(e.repeatLabel||(p()==="ru"?"Повторить ошибки":"Repeat mistakes"))}</button>`:""}
            ${!t&&e.reviewAllAction?`<button class="btn ghost" type="button" data-action="${f(e.reviewAllAction)}" data-mode="all">${i(e.reviewAllLabel||(p()==="ru"?"Повторить весь тест":"Review all"))}</button>`:""}
            ${s}
            <button class="btn primary" type="button" data-action="close-final-test-modal">${i(e.closeLabel||"OK")}</button>
          </div>
        </article>
      </div>
    `}function Ed(e){return zy(e)?`
      <button class="audio-trigger" type="button" data-action="play-kanji-audio" data-id="${f(e.id)}" aria-label="${f(p()==="ru"?"Проиграть озвучку кандзи":"Play kanji audio")}" title="${f(p()==="ru"?"Озвучка":"Audio")}">🔊</button>
    `:""}function ea(e){const t=fa(e);return`
      <div class="reading-row reading-split">
        ${Dd(Cu("onyomi"),t.onyomi.kana,t.onyomi.romaji)}
        ${Dd(Cu("kunyomi"),t.kunyomi.kana,t.kunyomi.romaji)}
      </div>
    `}function Dd(e,t,n){return`
      <div class="reading-box">
        <span class="label">${i(e)}</span>
        <strong>${i(q(t)||"—")}</strong>
        <small>${i(n||"—")}</small>
      </div>
    `}function ta(e,t="btn ghost"){const n=Qy(e);if(!n)return"";const s=qe(n.jlpt),a=p()==="ru"?"JLPT урок":"JLPT lesson";return s?`<button class="${t}" type="button" data-action="open-jlpt-lesson" data-jlpt="${f(n.jlpt)}">${i(n.jlpt)} · ${i(a)}</button>`:`<button class="${t} is-disabled" type="button" disabled aria-disabled="true" title="${f($t(n.jlpt))}">🔒 ${i(n.jlpt)}</button>`}function Od(e){vs(e,"study_card");const t=A(e.id),n=r.revealed;My(e.id);const s=e.lessonTitle||xo(e.lessonId)||e.jlpt||"";return`
      <article class="study-card" data-review-card-id="${f(e.id)}">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(s)}</span>
            ${Na(t.state)}
          </div>
          ${Ed(e)}
        </div>
        <div class="kanji-focus" aria-label="${f(e.kanji)}">${i(e.kanji)}</div>
        <h2>${i(n?L(e):S("question"))}</h2>
        <p class="label">${i(e.jlpt)} · ${e.strokes} ${i(S("strokes"))} · ${i(Nn(t.dueAt))}</p>
        ${n?Xb(e):`
          ${Hb(e)}
          <div class="actions">
            <button class="btn primary" type="button" data-action="show-answer">${i(S("showAnswer"))}</button>
            ${ta(e)}
            <button class="btn" type="button" data-action="open-card" data-id="${f(e.id)}">⋯ ${i(S("details"))}</button>
          </div>
        `}
      </article>
    `}function Hb(e){const t=r.readingCheck.cardId===e.id?r.readingCheck:{value:"",status:null,message:""},n=t.status?` is-${t.status}`:"",s=t.message||(p()==="ru"?"Напиши любое чтение этого кандзи хираганой или катаканой.":"Type any reading for this kanji in hiragana or katakana.");return`
      <section class="reading-check${n}" aria-live="polite">
        <label class="label" for="readingCheck-${f(e.id)}">${i(p()==="ru"?"Проверка чтения":"Reading check")}</label>
        <div class="reading-check-row">
          <input id="readingCheck-${f(e.id)}" data-reading-input data-id="${f(e.id)}" type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" value="${f(t.value)}" placeholder="${f(p()==="ru"?"Например: にち или ニチ":"Example: にち or ニチ")}" />
          <button class="btn ghost" type="button" data-action="check-reading" data-id="${f(e.id)}">${i(p()==="ru"?"Проверить":"Check")}</button>
        </div>
        <p>${i(s)}</p>
      </section>
    `}function na(e){return`
      <li class="example-item">
        <div class="example-main">
          <b>${i(e.word)}</b>
          <span>${i(q(e.reading))}</span>
          <span class="example-romaji">${i(e.romaji)}</span>
        </div>
        <small class="example-translation">${i(Ce(e))}</small>
      </li>
    `}function Xb(e){return`
      <div class="answer-section">
        ${ea(e)}
        <strong>${i(S("examples"))}</strong>
        <ul class="example-list">
          ${e.examples.map(na).join("")}
        </ul>
        <strong>${i(S("apps"))}</strong>
        <p>${i(Ys(e))}</p>
        <ul class="app-list">${e.apps.map(t=>`<li>${i(t)}</li>`).join("")}</ul>
        <div class="actions compact-actions">
          ${ta(e)}
        </div>
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate" data-rating="forgot">${i(ia().forgot)} <small>${i(ia().forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate" data-rating="remember">${i(ia().remember)} <small>${i(Hk(e))}</small></button>
        </div>
      </div>
    `}function Qi(e,t){const n=r.progress.correctCombo>=3?"leya":"eva",s=n==="leya"?"combo":"welcome",a=r.route==="review"?Math.max(Ne(),1):Math.max(r.cards.length,1);return`
      <aside data-study-side-host>
        ${Jk(n,n==="leya"?"focus":"thinking",s)}
        <div class="mini-stat-row" style="margin-top:10px">
          ${T(S("review"),t,"queue",I(t,a))}
          ${T("Combo",r.progress.correctCombo,`${r.progress.bestCorrectCombo} best`,I(r.progress.correctCombo,10))}
        </div>
        ${e?`<article class="tool-panel profile-panel">
          <h3>${i(S("hint"))} · Leya</h3>
          <p>${i(ma(e.id).hint)}</p>
          <h3>${i(S("mnemonic"))}</h3>
          <p>${i(ma(e.id).mnemonic)}</p>
        </article>`:""}
      </aside>
    `}function sa(){r.reviewExerciseResults={},r.activeExerciseReviewId=null,r.activeExerciseReviewLevel="",r.activeExerciseReviewSource="",r.activeExerciseReviewSelection=[],r.activeExerciseReviewChoice="",r.activeExerciseReviewTranslationOpen=!1}function Qb(e){if(!e){r.activeCardId=null,sa();return}if(r.reviewQueueLastKind=e.kind,e.kind==="card"){r.activeCardId!==e.card.id&&(r.activeCardId=e.card.id,sa());return}if(e.kind==="exercise"){const t=r.activeExerciseReviewId===e.exerciseId&&r.activeExerciseReviewLevel===e.level&&r.activeExerciseReviewSource===String(e.source||"textbook");r.activeCardId=null,r.activeExerciseReviewId=e.exerciseId,r.activeExerciseReviewLevel=e.level,r.activeExerciseReviewSource=String(e.source||"textbook"),t||(r.reviewExerciseResults={}),t||(r.activeExerciseReviewSelection=[],r.activeExerciseReviewChoice="",r.activeExerciseReviewTranslationOpen=!1)}}function Wi(e,t,n="",s=null,a=null,o="textbook"){const l=F(e);if(!l||!t)return null;if(String(o||"textbook")==="reading"){const w=a||mu(t,l);if(!w)return null;const v=yn(s||{},w);return{kind:"exercise",source:"reading",key:`reading:${String(l)}:${t}`,level:l,exerciseId:t,lessonId:String(w.sourceId||n||v.lessonId||""),cardId:"",dueAt:v.dueAt?new Date(v.dueAt).getTime():0,progress:v,exercise:w,card:null}}const d=Xt(s||{},{level:l,lessonId:n,exerciseId:t,cardId:s?.cardId||"",kanji:s?.kanji||"",type:s?.type||"",title:s?.title||null,prompt:s?.prompt||"",answer:s?.answer||"",answerLabel:s?.answerLabel||""}),u=a||la(l,t,n||d.lessonId||"");if(!u)return null;const m=String(u.lessonId||d.lessonId||n||""),g=String(u.cardId||d.cardId||"");return{kind:"exercise",source:"textbook",key:`exercise:${l}:${t}`,level:l,exerciseId:t,lessonId:m,cardId:g,dueAt:d.dueAt?new Date(d.dueAt).getTime():0,progress:d,exercise:u,card:X(g)||X(d.cardId||"")}}function Hn(){if(!r.activeExerciseReviewId||!r.activeExerciseReviewLevel)return null;const e=r.activeExerciseReviewLevel,t=r.activeExerciseReviewId;if(String(r.activeExerciseReviewSource||"textbook")==="reading"){const o=mu(t,e),l=o?pt(o):r.progress.readingExercises?.[t]||null;return Wi(e,t,l?.lessonId||o?.sourceId||"",l,o,"reading")}const a=Xk(e)?.exerciseSrs?.[t]||null;return Wi(e,t,a?.lessonId||"",a,null,"textbook")}function Kd(e){return!e||e.kind!=="exercise"?null:Wi(e.level,e.exerciseId,e.lessonId||e.progress?.lessonId||"",e.progress,e.exercise||null,e.source||"textbook")}function Wb(e){const t=Hn();if(t&&r.reviewExerciseResults?.[t.exerciseId]||t&&!e.some(a=>a.kind==="exercise"&&a.exerciseId===t.exerciseId&&a.level===t.level))return t;const n=r.activeCardId?e.find(a=>a.kind==="card"&&a.card.id===r.activeCardId):null;if(n)return n;const s=r.reviewQueueLastKind==="card"?"exercise":r.reviewQueueLastKind==="exercise"?"card":"";if(s){const a=e.find(o=>o.kind===s);if(a)return a}return e[0]||t||null}function Vb(e,t){const n=F(e);return n==="N5"?Tc(t):n==="N4"?qc(t):n==="N3"?ad(t):n==="N2"?vd(t):""}function Yb(e){return p()==="ru"?e?.kind==="cloze"?"Предложение":"Вопрос":e?.kind==="cloze"?"Sentence":"Question"}function Vi(){return p()==="ru"?"Перевод":"Translation"}function Bd(e){const t=String(e||"").trim();return t?t.split(/([гЂ'пјЃпјџгЂЃ\n]+)/u).map(n=>{if(!n)return"";if(/^[гЂ'пјЃпјџгЂЃ\n]+$/u.test(n))return n===`
`?`
`:`${n} `;const s=Nu(n);return s?`${s} `:""}).join("").replace(/\s+\n/gu,`
`).replace(/[ \t]+/gu," ").replace(/\s+([гЂ'пјЃпјџгЂЃ])/gu,"$1 ").replace(/([гЂ'пјЃпјџгЂЃ])\s*$/gu,"$1").trim():""}function Zb(e){const t=!!r.activeExerciseReviewTranslationOpen,n=e?.reading?q(e.reading):"",s=e?.reading?Bd(e.reading):"",a=h({ru:e?.translationRu||e?.ru||"",en:e?.translationEn||e?.en||""});return`
      <div class="reading-translation-wrap">
        <button class="btn ghost reading-translation-toggle" type="button" data-action="toggle-reading-translation">${i(Vi())}</button>
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
    `}function ek(e){return r.reviewExerciseResults?.[e.exerciseId]||pt(e.exercise)||null}function tk(e,t){const n=(e?.options||[]).find(s=>String(s.value||"")===String(t||""));return n?h(n.label||n):String(t||"")}function nk(e){const t=Kd(e);if(!t||!t.exercise)return ra();const n=ek(t),s=!!n?.completed,a=t.progress||pt(t.exercise),o=Yb(t.exercise),l=h(t.exercise.sourceTitle||t.exercise.title||{}),c=t.exercise.kind==="question"?Object.keys(n?.answers||{}).length:s?1:Array.isArray(a?.selectedIndices)?a.selectedIndices.length:0,d=t.exercise.kind==="question"?1:Math.max(1,tt(t.exercise).length),u=Array.isArray(a?.selectedIndices)?a.selectedIndices:Array.isArray(r.activeExerciseReviewSelection)?r.activeExerciseReviewSelection:[],m=u.map(v=>t.exercise.tiles?.[v]).filter(Boolean),g=Array.isArray(a?.wrongIndexes)?a.wrongIndexes:[],w=Zb(t.exercise);return`
      <article class="study-card textbook-review-card reading-review-card ${s?n?.correct===!1?"is-wrong":"is-correct":""}" data-review-exercise-id="${f(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(l||o)}</span>
          <span class="pill">${i(a.state)} · ${i(Nn(a.dueAt))}</span>
          <span class="pill">${i(c)}/${i(d)}</span>
        </div>
        ${w}
        ${t.exercise.kind==="cloze"?`
          <div class="sentence-card reading-cloze-card">
            <div class="sentence-line">${Td(t.exercise,m,g)}</div>
            <p class="sentence-reading">${i(t.exercise.reading||"")}</p>
            <p class="sentence-translation">${i(h({ru:t.exercise.translationRu||t.exercise.ru||"",en:t.exercise.translationEn||t.exercise.en||""}))}</p>
          </div>
          <div class="sentence-tiles">
            ${(t.exercise.tiles||[]).map((v,$)=>{const y=u.includes($),x=g.includes($);return`
                <button class="sentence-tile ${y?"is-used":""} ${x?"is-wrong":""}" type="button" data-action="reading-review-tile" data-index="${$}" ${y||s?"disabled":""}>
                  <span>${i(v.reading||"")}</span>
                  <strong>${i(v.kanji)}</strong>
                </button>
              `}).join("")}
          </div>
          <div class="sentence-feedback">
            ${i(n?.completed?n.correct?p()==="ru"?"Верно. Предложение собрано правильно.":"Correct. The sentence is complete.":p()==="ru"?"Проверь красные места и попробуй ещё раз.":"Check the red slots and try again.":p()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.")}
          </div>
          <div class="actions sentence-actions">
            <button class="btn primary" type="button" data-action="reading-review-check" ${s?"disabled":""}>${i(p()==="ru"?"Проверить":"Check")}</button>
            <button class="btn" type="button" data-action="reading-review-undo" ${!u.length||s?"disabled":""}>${i(p()==="ru"?"Убрать":"Undo")}</button>
            <button class="btn" type="button" data-action="reading-review-clear" ${!u.length||s?"disabled":""}>${i(p()==="ru"?"Очистить":"Clear")}</button>
          </div>
        `:`
          <article class="n4-question-block reading-passage-block">
            <h3>${i(h(t.exercise.question?.prompt||{}))}</h3>
            <p class="n4-jp-text">${i(t.exercise.jp||"")}</p>
            ${t.exercise.reading?`<p class="n5-feedback">${i(t.exercise.reading)}</p>`:""}
            <div class="n5-option-grid">
              ${(t.exercise.question?.options||[]).map(v=>{const $=n?.answers?.[t.exercise.question.id]?.selected===v.value,y=n?.answers?.[t.exercise.question.id]?.correct&&v.value===t.exercise.question.answer,x=n?.answers?.[t.exercise.question.id]&&!n?.answers?.[t.exercise.question.id]?.correct&&v.value===t.exercise.question.answer;return`<button class="btn ${y||x?"success":$?"warning":"ghost"}" type="button" data-action="reading-review-answer" data-question="${f(t.exercise.question.id)}" data-value="${f(v.value)}" ${n?.answers?.[t.exercise.question.id]||s?"disabled":""}>${i(h(v.label||v))}</button>`}).join("")}
            </div>
            ${n?.answers?.[t.exercise.question.id]?`<p class="n5-feedback">${i(n.answers[t.exercise.question.id].correct?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Неверно":"Wrong"} · ${tk(t.exercise.question,t.exercise.question.answer)}`)}</p>`:""}
          </article>
        `}
        ${s?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function sk(e){const t=Kd(e);if(!t||!t.exercise)return ra();if(t.source==="reading")return nk(t);const n=!!r.reviewExerciseResults?.[t.exerciseId];return`
      <article class="study-card textbook-review-card" data-review-exercise-id="${f(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(t.lessonId||t.progress.lessonId||"")}</span>
          <span class="pill">${i(t.progress.state)} · ${i(Nn(t.progress.dueAt))}</span>
        </div>
        ${Vb(t.level,t.exercise)}
        ${n?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function rk(e){return`
      <article class="empty-state">
          <span class="kanji-char">⚠</span>
        <h2>${i($e("eva","lessonComplete"))}</h2>
        <p>${i(e?Vs(e):"")}</p>
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="review">↻ ${i(S("review"))}</button>
          <button class="btn" type="button" data-action="route" data-route="dictionary">文 ${i(S("dictionary"))}</button>
        </div>
      </article>
    `}function ra(){return`
      <article class="empty-state">
        <span class="kanji-char">休</span>
        <h2>${i(p()==="ru"?"Повторов сейчас нет":"No reviews right now")}</h2>
        <p>${i($e("leya","welcome"))}</p>
        <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(S("learn"))}</button>
      </article>
    `}function ak(){const e=Ay(),t=Math.max(ls,Number(r.dictionaryVisibleCount||ls)),n=e.slice(0,t),s=n.length<e.length,a=r.cards.filter(u=>!!r.progress.favorites[u.id]).length,o=["all",...new Set(r.cards.map(u=>u.jlpt))],l=["all",...new Set(r.cards.map(u=>Xs(u.id).radical).filter(Boolean))],c=p()==="ru"?`Показано ${n.length} из ${e.length}`:`Showing ${n.length} of ${e.length}`,d=p()==="ru"?"Показать ещё":"Show more";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(S("dictionary"))}</h1>
            <p>${i(c)} · ${e.length}/${r.cards.length}</p>
          </div>
        </div>
        ${ik(a)}
        <div class="filters">
          <div class="field">
            <label for="dictionarySearch">${i(S("search"))}</label>
            <input id="dictionarySearch" data-filter="query" type="search" value="${f(r.filters.query)}" placeholder="日, にち, sun" autocomplete="off" />
          </div>
          <div class="field">
            <label for="jlptFilter">JLPT</label>
            <select id="jlptFilter" data-filter="jlpt">
              ${o.map(u=>`<option value="${f(u)}" ${rr(u,r.filters.jlpt)}>${i(u==="all"?S("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="strokeFilter">${i(S("strokes"))}</label>
            <select id="strokeFilter" data-filter="strokes">
              ${[["all",S("all")],["1-4","1-4"],["5-8","5-8"],["9-12","9-12"],["13+","13+"]].map(([u,m])=>`<option value="${u}" ${rr(u,r.filters.strokes)}>${i(m)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="radicalFilter">${i(S("radical"))}</label>
            <select id="radicalFilter" data-filter="radical">
              ${l.map(u=>`<option value="${f(u)}" ${rr(u,r.filters.radical)}>${i(u==="all"?S("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="favoriteFilter">${i(S("favorites"))}</label>
            <select id="favoriteFilter" data-filter="favorites">
              <option value="all" ${rr("all",r.filters.favorites)}>${i(S("all"))}</option>
              <option value="yes" ${rr("yes",r.filters.favorites)}>★</option>
            </select>
          </div>
        </div>
        <div class="dictionary-grid" style="margin-top:12px">${n.map(ok).join("")||ck()}</div>
        ${s?`
          <div class="dictionary-load-more">
            <span>${i(c)}</span>
            <button class="btn primary" type="button" data-action="dictionary-load-more">${i(d)}</button>
          </div>
        `:""}
      </section>
    `}function ik(e){const t=r.filters.favorites==="yes",n=p()==="ru"?"Все кандзи":"All kanji",s=p()==="ru"?"Избранные":"Favorites";return`
      <div class="dictionary-tabs" role="tablist" aria-label="${f(S("dictionary"))}">
        <button class="btn ${t?"":"is-active"}" type="button" role="tab" aria-selected="${t?"false":"true"}" data-action="dictionary-favorites-tab" data-favorites="all">
          ${i(n)}
          <span class="dictionary-tab-count">${r.cards.length}</span>
        </button>
        <button class="btn ${t?"is-active":""}" type="button" role="tab" aria-selected="${t?"true":"false"}" data-action="dictionary-favorites-tab" data-favorites="yes">
          ★ ${i(s)}
          <span class="dictionary-tab-count">${e}</span>
        </button>
      </div>
    `}function ok(e){const t=A(e.id),n=Xs(e.id),s=!!r.progress.favorites[e.id];return`
      <button class="kanji-tile" type="button" data-action="open-card" data-id="${f(e.id)}">
        ${lk(e)}
        <div class="tag-row">
          ${Na(t.state)}
          <span class="pill">${i(e.jlpt)}</span>
          <span class="pill">${e.strokes} ${i(S("strokes"))}</span>
          <span class="pill">${i(S("radical"))}: ${i(n.radical||"-")}</span>
          <span class="pill">${i(S("learnedStatus"))}: ${i(t.stage)}</span>
          <span class="pill">${s?"★":"☆"}</span>
        </div>
      </button>
    `}function lk(e){return`
      <span class="kanji-line">
        <span class="kanji-char">${i(e.kanji)}</span>
        <span>
          <h3>${i(L(e))}</h3>
          <p>${i(po(e))}</p>
          <span class="label">${i(xo(e.lessonId))}</span>
        </span>
      </span>
    `}function ck(){const e=r.filters.favorites==="yes",t=e?p()==="ru"?"В избранном пока пусто":"No favorites yet":p()==="ru"?"Ничего не найдено":"Nothing found",n=e?p()==="ru"?"Открой кандзи и нажми звездочку, чтобы он появился здесь.":"Open a kanji and tap the star to keep it here.":"";return`<article class="empty-state"><span class="kanji-char">無</span><h2>${i(t)}</h2>${n?`<p>${i(n)}</p>`:""}</article>`}function dk(){const e=X(r.kanjiPageId||Do());if(!e)return`
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">無</span>
            <h1>${i(p()==="ru"?"Кандзи не найден":"Kanji not found")}</h1>
            <p>${i(p()==="ru"?"Открой словарь и выбери карточку заново.":"Open the dictionary and choose a card again.")}</p>
            <button class="btn primary" type="button" data-action="route" data-route="dictionary">⋯ ${i(S("dictionary"))}</button>
          </article>
        </section>
      `;const t=A(e.id),n=Xs(e.id),s=!!r.progress.favorites[e.id],a=xk(e,p()),o=uk(e),l=ro(e);return`
      <section class="page kanji-page">
        <div class="section-head kanji-page-head">
          <div>
            <button class="btn ghost" type="button" data-action="route" data-route="dictionary">← ${i(S("dictionary"))}</button>
            <h1>${i(o?`${e.kanji} — ${pk(o)}`:e.kanji)}</h1>
            <p>${i(o?gk(o):L(e))}</p>
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="study-card" data-id="${f(e.id)}">▶ ${i(S("study"))}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${f(e.id)}">${s?"★":"☆"} ${i(S("favorites"))}</button>
          </div>
        </div>

        <article class="kanji-profile-card">
          <div class="kanji-profile-hero">
            <div class="kanji-profile-char" aria-label="${f(e.kanji)}">${i(e.kanji)}</div>
            <div class="kanji-profile-summary">
              <div class="tag-row">
                ${Na(t.state)}
                <span class="pill">${i(e.jlpt)}</span>
                <span class="pill">${e.strokes} ${i(S("strokes"))}</span>
                <span class="pill">${i(S("radical"))}: ${i(n.radical||"-")} ${i(h(n.radicalMeaning||{}))}</span>
                ${o?`<span class="pill">Grade ${i(o.kanjidic2.grade||"-")}</span><span class="pill">Freq ${i(o.kanjidic2.freq||"-")}</span>`:""}
              </div>
              <h2>${i(L(e))}</h2>
              <p>${i(Ys(e))}</p>
              ${ea(e)}
              ${Zi(e)}
            </div>
          </div>
        </article>

        <div class="kanji-profile-grid">
          ${o?mk(o):""}
          ${o?fk(o):""}
          <article class="kanji-profile-card">
            <h2>${i(S("examples"))}</h2>
            <ul class="example-list">${e.examples.map(na).join("")||`<li>${i(p()==="ru"?"Примеры пока не добавлены.":"No examples yet.")}</li>`}</ul>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(p()==="ru"?"Предложения":"Sentences")}</h2>
            ${o?hk(o):yk(e)}
          </article>

          <article class="kanji-profile-card">
            <h2>${i(S("strokeOrder"))}</h2>
            <p class="label">${i(l?p()==="ru"?"Есть точные SVG-штрихи KanjiVG для практики.":"Precise KanjiVG SVG stroke data is available for practice.":p()==="ru"?"Точного SVG-пути пока нет, доступен полупрозрачный шаблон.":"Precise SVG paths are not available yet; template mode is available.")}</p>
            <ol class="stroke-list">${Us(e).map(c=>`<li>${i(c)}</li>`).join("")}</ol>
            <div class="actions compact-actions">
              ${ta(e)}
            </div>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(S("apps"))}</h2>
            <p>${i(Ys(e))}</p>
            <ul class="app-list">${e.apps.map(c=>`<li>${i(c)}</li>`).join("")}</ul>
            ${o?wk(o):""}
            <h3>${i(p()==="ru"?"SEO-страница":"SEO page")}</h3>
            <p class="label">${i(p()==="ru"?"Статическая HTML-страница для поисковиков и превью.":"Static HTML page for search engines and link previews.")}</p>
            <a class="btn primary" href="${f(a)}" target="_blank" rel="noopener">в†— ${i(p()==="ru"?"Публичная страница":"Public page")}</a>
          </article>
          ${o?bk(o):""}
        </div>
      </section>
    `}function uk(e){return r.kanjiPageSources?.[e?.kanji]||null}function pk(e){return Fd(e.meanings)[0]||e.literal}function Fd(e){return e?e[p()]||e.ru||e.en||[]:[]}function Xn(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function gk(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{};return[t.why,t.firstSeen].filter(Boolean).join(" ")}function mk(e){const t=e.kanjidic2||{},n=t.codepoints?.unicode||`U+${t.codepoints?.ucs||""}`;return`
      <article class="kanji-profile-card kanji-facts-card">
        <h2>${i(p()==="ru"?"Факты KANJIDIC2":"KANJIDIC2 facts")}</h2>
        <dl class="kanji-fact-grid">
          <div><dt>${i(p()==="ru"?"Значения":"Meanings")}</dt><dd>${i(Fd(e.meanings).join(", "))}</dd></div>
          <div><dt>Onyomi</dt><dd>${i((e.readings?.onyomi||[]).join(" / "))}</dd></div>
          <div><dt>Kunyomi</dt><dd>${i((e.readings?.kunyomi||[]).join(" / "))}</dd></div>
          <div><dt>JLPT</dt><dd>${i(e.jlpt)} <small>${i(Xn(e.modernJlptNote||{}))}</small></dd></div>
          <div><dt>${i(S("strokes"))}</dt><dd>${i(t.strokeCount||"-")}</dd></div>
          <div><dt>${i(S("radical"))}</dt><dd>${i(`${t.radical||"-"} ${t.radicalLiteral||""} ${Xn(t.radicalName||{})}`)}</dd></div>
          <div><dt>Grade</dt><dd>${i(t.grade||"-")}</dd></div>
          <div><dt>Unicode</dt><dd>${i(n)}</dd></div>
          <div><dt>Freq</dt><dd>${i(t.freq||"-")}</dd></div>
          <div><dt>${i(p()==="ru"?"Варианты":"Variants")}</dt><dd>${i((e.variants||[]).join(" / ")||"-")}</dd></div>
        </dl>
        <p class="source-note">${i(t.source||"KANJIDIC2 / EDRDG")}</p>
      </article>
    `}function fk(e){return`
      <article class="kanji-profile-card">
        <h2>${i(p()==="ru"?"Полезные слова JMdict":"Useful JMdict words")}</h2>
        <ul class="kanji-word-list">
          ${(e.commonWords||[]).slice(0,10).map(t=>`
            <li>
              <a href="${f(kk(t))}">
                <b>${Yi(t.surface,e.literal)}</b>
                <span>${i(t.reading)} · ${i(Xn(t.gloss||{}))}</span>
                <small>${i(t.partOfSpeech||"")} · JMdict ${i(t.jmdictSeq||"")}</small>
              </a>
            </li>
          `).join("")}
        </ul>
      </article>
    `}function hk(e){return`
      <ul class="kanji-sentence-list">
        ${vk(e).map(n=>`
          <li>
            <strong>${Yi(n.japanese,e.literal)}</strong>
            <small>${i(Xn(n.translation||{}))}</small>
            <span class="source-note">${i(`${n.sourceName||"Tatoeba"} #${n.sourceId}${n.author?` · ${n.author}`:""}${n.license?` · ${n.license}`:""}`)}</span>
          </li>
        `).join("")}
      </ul>
    `}function vk(e){const t=new Set,n=new Set((e.commonWords||[]).map(s=>s.surface));return(e.sentences||[]).filter(s=>{const a=s.japanese||"";if(!a.includes(e.literal)||t.has(a))return!1;t.add(a);const o=a.replace(/[\sгЂ'гЂЃпјЃпјџ!?гЂЊгЂЌгЂЋгЂЏпј€пј‰()гѓ»гЂњгѓј]/g,"").length;return!(o<3||o>44)}).sort((s,a)=>Number(Jd(a.japanese,n))-Number(Jd(s.japanese,n))).slice(0,8)}function Jd(e,t){return[...t].some(n=>e.includes(n))}function wk(e){return`
      <h3>${i(p()==="ru"?"В интерфейсах":"In interfaces")}</h3>
      <div class="interface-mock-grid">
        ${(e.interfaceContexts||[]).slice(0,6).map(t=>`
          <article class="interface-mock-card ${f(t.type||"card")}">
            <span>${i(Xn(t.title||{}))}</span>
            <strong>${Yi(t.japanese,e.literal)}</strong>
            <small>${i(Xn(t.translation||{}))}</small>
          </article>
        `).join("")}
      </div>
    `}function bk(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{},n=p()==="ru"?["Почему этот кандзи важен","Частая путаница","Где встретишь раньше всего","На что обратить внимание"]:["Why this kanji matters","Common confusion","Where you will meet it first","What to watch"],s=[t.why,t.confusion,t.firstSeen,t.focus];return`
      <article class="kanji-profile-card editorial-card">
        <h2>${i(p()==="ru"?"Заметки Flash Kanji":"Flash Kanji notes")}</h2>
        ${s.map((a,o)=>a?`<section><h3>${i(n[o])}</h3><p>${i(a)}</p></section>`:"").join("")}
      </article>
    `}function kk(e){return`../word/${encodeURIComponent(e.surface||"")}/`}function Yi(e,t){const n=String(t||""),s=String(e||"");return n?s.split(n).map(i).join(`<mark class="kanji-hit" data-kanji="${f(n)}">${i(n)}</mark>`):i(s)}function yk(e){const t=$k(e);return t.length?`
      <ul class="kanji-sentence-list">
        ${t.map(n=>`
          <li>
            <strong>${Nk(n)}</strong>
            <span>${i(jk(n))}</span>
            <small>${i(Sk(n))}</small>
          </li>
        `).join("")}
      </ul>
    `:`<p class="label">${i(p()==="ru"?"Подходящие предложения появятся, когда база практики содержит этот кандзи.":"Matching sentences will appear when the practice database contains this kanji.")}</p>`}function $k(e){const t=e?.kanji||"";return t?(r.sentenceExercises||[]).filter(n=>{const s=zd(n),a=(n.blanks||[]).flatMap(o=>o.answer||[]).join("");return s.includes(t)||a.includes(t)}).slice(0,6):[]}function zd(e){return e?.sentence||e?.jp||""}function jk(e){return e?.reading||e?.hiragana||""}function Sk(e){return p()==="en"?e?.translationEn||e?.en||e?.translationRu||e?.ru||"":e?.translationRu||e?.ru||e?.translationEn||e?.en||""}function Nk(e){let t=i(zd(e));return(e?.blanks||[]).map(s=>(s.answer||[]).join("")).forEach(s=>{t=t.replace("___",`<mark>${i(s)}</mark>`)}),t}function xk(e,t="ru"){return`../${t==="en"?"en":"ru"}/kanji/${Ck(e)}/`}function Ck(e){const t=String(e?.kanji||""),n=Array.from(t).map(o=>`u${o.codePointAt(0).toString(16).padStart(4,"0")}`).join("-"),a=(String(e?.romaji||e?.onyomi_romaji||e?.kunyomi_romaji||"kanji").toLowerCase().split(/[\/,;|()\s]+/).find(o=>/[a-z]/.test(o))||"kanji").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"kanji";return`${n||"kanji"}-${a}`}function Lk(){const e=X(r.activeCardId)||oo()[0]||r.cards[0];e&&(r.activeCardId=e.id,r.activeLessonId=e.lessonId,r.writingStep=Z(r.writingStep,0,Math.max(0,nt(e)-1)));const t=ro(e),n=nt(e),s=p()==="ru"?"Шаг":"Step",a=p()==="ru"?"Получилось":"Got it",o=p()==="ru"?"Показать образец":"Show sample",l=t?p()==="ru"?"Точные SVG-штрихи KanjiVG":"Precise KanjiVG SVG strokes":p()==="ru"?"Fallback: шаблон без фейковых штрихов":"Fallback: template without fake strokes";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(S("writingPractice"))}</h1>
            <p>${i(e?`${e.kanji} · ${L(e)}`:"")}</p>
          </div>
        </div>
        <div class="writing-layout">
          <article class="writing-card" data-section="writing-demo">
            <div class="kanji-focus writing-focus">${i(e?.kanji||"文")}</div>
            ${e?ea(e):""}
            ${e?`<div class="actions"><button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${f(e.id)}">🔊 ${i(S("audio"))}</button></div>`:""}
            <div class="stroke-demo">
              <canvas id="strokeCanvas" width="520" height="280" aria-label="stroke order animation"></canvas>
            </div>
            <div class="writing-step-panel">
              <div class="writing-step-head">
                <span class="pill" id="writingStepCounter">${s} ${r.writingStep+1}/${n}</span>
                <span class="label">${i(Us(e)[r.writingStep]||"")}</span>
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
            ${e?Ak(e):""}
            <h3>${i(S("hint"))}</h3>
            <p>${i(ma(e?.id).hint)}</p>
            <h3>${i(S("mnemonic"))}</h3>
            <p>${i(ma(e?.id).mnemonic)}</p>
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
    `}function Ak(e){return`
      <ol class="stroke-list writing-guide-list">
        ${Us(e).map((n,s)=>`
          <li class="${s===r.writingStep?"is-active":""}">
            <button type="button" data-action="select-writing-step" data-index="${s}">
              <b>${s+1}</b>
              <span>${i(n)}</span>
            </button>
          </li>
        `).join("")}
      </ol>
    `}function Ik(){if(!r.detailCardId)return"";const e=X(r.detailCardId);if(!e)return"";const t=A(e.id),n=Xs(e.id),s=!!r.progress.favorites[e.id];return`
      <div class="detail-backdrop">
        <article class="detail-sheet" role="dialog" aria-modal="true">
          <div class="detail-title">
            <span class="kanji-char">${i(e.kanji)}</span>
            <div>
              <span class="pill">${i(e.jlpt)}</span> ${Na(t.state)}
              <h2>${i(L(e))}</h2>
              <p>${i(po(e))} · ${e.strokes} ${i(S("strokes"))}</p>
              <p><span class="pill">${i(S("radical"))}: ${i(n.radical||"-")} ${i(h(n.radicalMeaning||{}))}</span></p>
            </div>
          </div>
          ${ea(e)}
          ${Zi(e)}
          <h3>${i(S("strokeOrder"))}</h3>
          <ol class="stroke-list">${e.stroke_order.map(a=>`<li>${i(a)}</li>`).join("")}</ol>
          <h3>${i(S("examples"))}</h3>
          <ul class="example-list">${e.examples.map(na).join("")}</ul>
          <h3>${i(S("apps"))}</h3>
          <p>${i(Ys(e))}</p>
          <ul class="app-list">${e.apps.map(a=>`<li>${i(a)}</li>`).join("")}</ul>
          <div class="actions" style="margin-top:14px">
            <button class="btn primary" type="button" data-action="study-card" data-id="${f(e.id)}">▶ ${i(S("study"))}</button>
            <button class="btn" type="button" data-action="open-kanji-page" data-id="${f(e.id)}">↗ ${i(p()==="ru"?"Страница":"Page")}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${f(e.id)}">${s?"★":"☆"} ${i(S("favorites"))}</button>
            ${ta(e)}
            <button class="btn" type="button" data-action="close-detail">OK</button>
          </div>
        </article>
      </div>
    `}function Zi(e){const t=go(e),n=!t&&mo(e);return`
      <section class="audio-panel">
        <h3>${i(S("audio"))}</h3>
        <div class="actions">
          ${t||n?`<button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${f(e.id)}">🔊 Kanji${n?" TTS":""}</button>`:`<span class="label">${i(p()==="ru"?"Озвучка для этой карточки пока не найдена.":"Audio for this card is not available yet.")}</span>`}
        </div>
      </section>
    `}function Tk(){const e=lo(),t=yt(),n=jt();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(S("stats"))}</h1>
            <p>${i(S("xp"))} · ${i(S("level"))} · ${i(S("coins"))}</p>
          </div>
          <div class="actions">
            ${ts("stats")}
            <button class="btn primary" type="button" data-action="route" data-route="achievements">в—ђ ${i(S("achievements"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${T(S("xp"),`${n.current}/${n.next}`,`${S("level")} ${r.progress.level}`,n.percent)}
          ${T(S("streak"),r.progress.streak.current,`${r.progress.streak.best} best`,I(r.progress.streak.current,30))}
          ${T(S("mastered"),e.mastered,`${e.total}`,I(e.mastered,e.total))}
          ${T(S("successRate"),`${hu()}%`,`${co()} reviews`,hu())}
          ${T(S("errors"),t.mistakes||0,`${r.progress.totalWrong} total`,I(t.mistakes||0,Math.max(t.reviews||1,1)))}
        </div>
        <div class="stats-grid" style="margin-top:12px">
          <article class="chart-panel"><h3>${i(S("activity"))}</h3><div class="chart-box"><canvas id="activityChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(S("streak"))}</h3><div class="chart-box"><canvas id="streakChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(S("jlptProgress"))}</h3><div class="chart-box"><canvas id="jlptChart"></canvas></div></article>
          <article class="chart-panel"><h3>Повторение</h3><div class="chart-box"><canvas id="stateChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(S("errors"))}</h3><div class="chart-box"><canvas id="mistakeChart"></canvas></div></article>
          <article class="tool-panel">${_k()}</article>
          <article class="tool-panel" data-section="shop-panel">${Pk()}</article>
          <article class="tool-panel">${qd()}</article>
          <article class="tool-panel">
            <h3>${i(S("settings"))}</h3>
            <div class="settings-list">
              <div class="settings-row">
                <span>
                  <strong>${i(Pt().badge)}</strong>
                  <small>${i(Pt().hint)}</small>
                </span>
                <span class="pill">${i(Pt().status)}</span>
              </div>
              <div class="settings-row">
                <span>
                  <strong>${i(p()==="ru"?"Звуки интерфейса":"UX sounds")}</strong>
                  <small>${i(p()==="ru"?"Клики, ответы, награды и уведомления.":"Clicks, answers, rewards, and in-app notices.")}</small>
                </span>
                <button class="btn ${ja()?"success":"ghost"}" type="button" data-action="toggle-ux-sound">${ja()?"On":"Off"}</button>
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
                <input class="ux-volume-slider" type="range" min="0" max="100" step="5" value="${Math.round(Sa()*100)}" data-ux-volume />
                <strong class="volume-value" data-ux-volume-label>${Math.round(Sa()*100)}%</strong>
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
    `}function bn(){return r.achievements?.length?r.achievements:r.rewards?.achievements||[]}function Rk(){return r.achievementCategories?.length?r.achievementCategories:[...new Set(bn().map(t=>t.category||"learning"))].map(t=>({id:t,title:{ru:t,en:t},icon:"moon"}))}function eo(e){return h(e.title||e.name||{ru:e.id,en:e.id})}function Ud(e){return h(e.description||{})}function to(e){return{moon:"月",book:"ж›ё",memory:"記",flame:"зЃ«",star:"星",brush:"з­†",text:"文",lock:"йЌµ",eye:"眼"}[e]||"в—†"}function _k(){return`<h3>${i(S("achievements"))}</h3><div class="achievement-grid compact">${bn().slice(0,8).map(Gd).join("")}</div>`}function Mk(){const e=bn(),t=dj(),n=e.reduce((s,a)=>({xp:s.xp+(a.rewardXp||0),coins:s.coins+(a.rewardFragments||0)}),{xp:0,coins:0});return`
      <section class="page achievements-page">
        <div class="section-head">
          <div>
            <h1>${i(S("achievements"))}</h1>
            <p>${i(p()==="ru"?"Лунные цели, секреты Евы и Леи, награды за прогресс.":"Moon goals, Eva and Leya secrets, and progress rewards.")}</p>
          </div>
          <div class="actions">
            ${ts("achievements")}
            <button class="btn" type="button" data-action="route" data-route="stats">в–Ґ ${i(S("stats"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${T(S("achievements"),`${t}/${e.length}`,p()==="ru"?"открыто":"unlocked",I(t,e.length))}
          ${T("XP",n.xp,p()==="ru"?"в наградах":"in rewards",I(t,e.length))}
          ${T(S("coins"),n.coins,p()==="ru"?"в наградах":"in rewards",I(t,e.length))}
          ${T(p()==="ru"?"Секреты":"Secrets",`${e.filter(s=>s.secret&&is(s.id)).length}/${e.filter(s=>s.secret).length}`,"Eva · Leya",I(e.filter(s=>s.secret&&is(s.id)).length,Math.max(1,e.filter(s=>s.secret).length)))}
        </div>
        <div class="achievement-category-list">
          ${Rk().map(s=>{const a=e.filter(l=>l.category===s.id);if(!a.length)return"";const o=a.filter(l=>is(l.id)).length;return`
              <section class="achievement-category">
                <div class="section-head compact-head">
                  <div>
                    <h2>${to(s.icon)} ${i(h(s.title))}</h2>
                    <p>${o}/${a.length}</p>
                  </div>
                  <span class="pill">${I(o,a.length)}%</span>
                </div>
                <div class="achievement-grid expanded">${a.map(l=>Gd(l,!0)).join("")}</div>
              </section>
            `}).join("")}
        </div>
      </section>
    `}function Gd(e,t=!1){const n=is(e.id),s=tu(e),a=Math.max(1,Number(e.target||1)),o=I(s,a),l=Math.min(s,a),c=e.secret&&!n&&!t?p()==="ru"?"Секретное достижение":"Secret achievement":eo(e),d=e.secret&&!n&&!t?p()==="ru"?"Откроется при необычном действии.":"Unlocked by an unusual action.":Ud(e);return`
      <div class="achievement ${n?"is-unlocked":""} ${e.secret?"is-secret":""}">
        <span class="achievement-icon">${to(e.icon)}</span>
        <strong>${i(c)}</strong>
        <small>${i(d)}</small>
        <div class="achievement-progress" aria-label="${f(`${l}/${a}`)}"><i style="width:${o}%"></i></div>
        <small class="achievement-reward">+${e.rewardXp||0} XP · +${e.rewardFragments||0} ${i(S("coins"))}</small>
      </div>
    `}function Pk(){return ac({closable:!1})}function qd(e={}){const t=e.limit||10,n=(r.progress.transactions||[]).slice(0,t);return`
      <h3>${i(S("transactions"))}</h3>
      <div class="transaction-list">
        ${n.map(s=>`
          <div class="transaction-row">
            <div>
              <strong>${i(Ek(s))}</strong>
              <small>${i(R$(s.at))}</small>
            </div>
            <span>${Number(s.coins||0)>=0?"+":""}${Number(s.coins||0)} Moon · ${Number(s.xp||0)>=0?"+":""}${Number(s.xp||0)} XP</span>
          </div>
        `).join("")||`<p>${i(p()==="ru"?"Пока нет операций.":"No transactions yet.")}</p>`}
      </div>
    `}function Ek(e){if(e.label)return e.label;const t=String(e.reason||""),n=t.match(/^customization:[^:]+:(.+)$/);if(n){const s=ne(n[1]);if(s)return Ve(s)}return t.startsWith("achievement:")?p()==="ru"?"Достижение":"Achievement":t.startsWith("daily_bonus")?p()==="ru"?"Ежедневный бонус":"Daily bonus":t.startsWith("sentence")?p()==="ru"?"Практика предложений":"Sentence practice":t.startsWith("writing")?p()==="ru"?"Практика письма":"Writing practice":t.startsWith("lesson")?p()==="ru"?"Урок":"Lesson":t.startsWith("review")?p()==="ru"?"Повторение":"Review":t.startsWith("shop:")?p()==="ru"?"Магазин":"Shop":p()==="ru"?"Операция":"Transaction"}function Dk(){if(!r.rewardModal)return"";const e=r.rewardModal,t=e.type==="level",n=e.type==="achievement",s=jt(),a=t?`${S("level")} ${r.progress.level} - ${s.current}/${s.next} XP - ${r.progress.moonFragments} ${S("coins")}`:e.message;return`
      <div class="reward-backdrop ${t?"is-level":""}">
        <article class="reward-modal ${t?"is-level":""} ${n?"is-achievement":""}">
          ${t?'<img class="reward-logo" src="assets/logo.webp" alt="Flash Kanji" />':""}
          ${n?`<div class="reward-achievement-icon">${to(e.icon)}</div>`:""}
          <div class="reward-modal-actions">
            ${t?`<button class="btn primary share-btn" type="button" data-action="share-achievement">${i(S("shareAchievement"))}</button>`:""}
            <button class="btn primary" type="button" data-action="close-reward">OK</button>
          </div>
          ${Qn(e.mascot||"eva",e.mood||"happy",e.dialog||"achievement","reward-mascot")}
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
    `}function Ok(){if(!r.contactModal)return"";const e=p()==="ru"?"Сообщить об ошибке":"Report a bug",t=p()==="ru"?"Если почтовое приложение не открывается, скопируй адрес и отправь сообщение вручную.":"If your mail app does not open, copy the address and send the message manually.",n=p()==="ru"?"Скопировать email":"Copy email",s=p()==="ru"?"Открыть почту":"Open email",a=p()==="ru"?"Закрыть":"Close",o=encodeURIComponent(up),l=encodeURIComponent(p()==="ru"?`Привет! Я нашел ошибку в Flash Kanji:

`:`Hi! I found an issue in Flash Kanji:

`),c=`mailto:${_a}?subject=${o}&body=${l}`;return`
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
            <strong>${i(_a)}</strong>
            <small>${i(p()==="ru"?"Для багов, багрепортов и ошибок интерфейса.":"For bugs, bug reports, and UI issues.")}</small>
          </div>
          <div class="actions contact-modal-actions">
            <button class="btn ghost" type="button" data-action="copy-contact-email">${i(n)}</button>
            <a class="btn primary" href="${f(c)}">${i(s)}</a>
            <button class="btn" type="button" data-action="close-contact-modal">${i(a)}</button>
          </div>
        </article>
      </div>
    `}function Kk(){if(!r.pwaInstallHelpVisible)return"";const e=rs(),t=p()==="ru"?"Как установить приложение":"How to install the app",n=p()==="ru"?"Кнопка открыла подсказку, потому что браузер ещё не показал системное окно установки.":"The button opened a quick guide because the browser has not yet shown the system install prompt.",s=p()==="ru"?"Понятно":"Got it",a=e?p()==="ru"?["Открой Flash Kanji в Safari.","Нажми “Поделиться”, затем “На экран Домой”.","Подтверди установку."]:["Open Flash Kanji in Safari.","Tap Share, then choose Add to Home Screen.","Confirm the install."]:p()==="ru"?["Открой меню браузера.","Найди пункт “Установить приложение” или “Установить Flash Kanji”.","Подтверди установку."]:["Open the browser menu.","Choose Install app or Install Flash Kanji.","Confirm the install."];return`
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
    `}function Bk(){if(Hl()||r.pwaInstallHelpVisible||!To()||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal)return"";const e=Qu(),t=!At&&rs();return`
      <aside class="pwa-install-banner" role="dialog" aria-modal="false" aria-label="${f(e.title)}">
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
    `}function Fk(){if(Hl()||!r.notificationPromptVisible||!La("visible")||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible||To())return"";const e=tp();return`
      <aside class="pwa-install-banner notification-permission-banner" role="dialog" aria-modal="false" aria-label="${f(e.title)}">
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
    `}function Jk(e,t,n){const s=ss(e),a=aa(e,t,n),o=Wd($e(e,n));return`
      <article class="sidekick mascot-${e} mood-${t}" data-action="mascot-click" data-character="${f(e)}">
        <img src="${f(a)}" alt="${f(h(s.name))}" />
        <div><strong>${i(h(s.name))}</strong><p>${i(o)}</p></div>
      </article>
    `}function Qn(e,t,n,s){const a=ss(e),o=aa(e,t,n),l=Wd($e(e,n)),c=`${s||"mascot"}:${e}:${n}:${r.route}:${r.activeTextbookLevel||r.activeJlptLesson||""}`.toLowerCase();return Xd(c)?`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${f(e)}">
        <img src="${f(o)}" alt="${f(h(a.name))}" />
      </div>
    `:`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${f(e)}">
        <img src="${f(o)}" alt="${f(h(a.name))}" />
        <div class="speech speech-dismissible" data-mascot-speech-key="${f(c)}" data-autohide-ms="7000">
          <button class="speech-close" type="button" data-action="dismiss-mascot-speech" data-speech-key="${f(c)}" aria-label="${f(p()==="ru"?"Закрыть облако":"Close speech bubble")}">✕</button>
          <span class="speech-text">${i(l)}</span>
        </div>
      </div>
    `}function Hd(){try{const e=sessionStorage.getItem(Ko);return e?JSON.parse(e)||{}:{}}catch{return{}}}function zk(e){try{sessionStorage.setItem(Ko,JSON.stringify(e||{}))}catch{}}function Xd(e){return e?!!Hd()[e]:!1}function Qd(e){if(!e)return;const t=Hd();t[e]=Date.now(),zk(t);const n=ln.get(e);n&&(clearTimeout(n),ln.delete(e)),j()}function Uk(){const e=new Set;Ga("[data-mascot-speech-key][data-autohide-ms]").forEach(t=>{const n=String(t.dataset.mascotSpeechKey||"");if(!n||Xd(n)||(e.add(n),ln.has(n)))return;const s=Number(t.dataset.autohideMs||0);if(!s)return;const a=window.setTimeout(()=>{ln.delete(n),Qd(n)},s);ln.set(n,a)});for(const[t,n]of ln)e.has(t)||(clearTimeout(n),ln.delete(t))}function aa(e,t="normal",n="welcome"){if(e==="eva")return Kn(Dt(null,Gk(t,n)));const s=ss(e);return s.sprites?.[t]||Object.values(s.sprites||{})[0]||""}function Gk(e="normal",t="welcome"){const n=String(t||"").toLowerCase(),s=String(e||"").toLowerCase(),a={welcome:"welcome",correct:"approve",wrong:"sad",progress:"observe",streakloss:"sad",lessoncomplete:"proud",masterymilestone:"proud",achievement:"achievement",goal:"reward",combo:"proud",hint:"think",dailybonus:"reward"},o={normal:"welcome",calm:"neutral",happy:"happy",proud:"proud",thinking:"think",focus:"think",sad:"sad",angry:"strict",shy:"shy"},l=o[s]&&!["normal","calm"].includes(s)?o[s]:null;return l&&(!n||n==="welcome")?l:a[n]||o[s]||s||"neutral"}function Wd(e){if(p()!=="ru")return e;const t="[А-Яа-яЁё]";return String(e||"").replace(new RegExp(`(^|\\s)(${t})\\s+(?=${t}{4,})`,"gu"),"$1$2 ")}function qk(e){const t=X(r.activeCardId);if(!t||!He[e])return;hs(t,"srs_rating"),Tu();const n=H(A(t.id)),s=ue(n,e);r.progress.cards[t.id]=s,Qt(n,s,e),ve();const a=Number(r.progress.correctCombo||0);kn(e)?(r.progress.totalWrong+=1,r.progress.correctCombo=0,ce({discipline:-.8,trust:-.2},"answer_again"),de("answer_wrong",{cardId:t.id,kanji:t.kanji,rating:e,comboLost:a>0}),er("again"),E($e("eva","wrong"))):(O(r.rewards.rewards.correctXp,r.rewards.rewards.correctCoins,"review_success"),r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo),ce({trust:.35,discipline:.25,curiosity:s.lastDecision==="Easy"?.2:0},`answer_${e}`),de("answer_correct",{cardId:t.id,kanji:t.kanji,rating:e,combo:r.progress.correctCombo}),er("ok"),E($e("eva","correct")),r.progress.correctCombo>0&&r.progress.correctCombo%5===0&&(O(r.rewards.rewards.comboXp,0,"combo_bonus"),Ge({title:"Combo",message:$e("leya","combo"),xp:r.rewards.rewards.comboXp,coins:0,mascot:"leya",mood:"proud",dialog:"combo"}))),ys(),Wk(t.lessonId),so(),U(),r.reviewQueueLastKind="card",N(),r.revealed=!1,r.activeCardId=null,gt(),r.pendingFocus="__scroll-top__",j()}function ia(){return p()==="ru"?{forgot:"Не помню",remember:"Помню",forgotHint:"вернём быстро",rememberHint:"Повторение выберет срок"}:{forgot:"Forgot",remember:"Remember",forgotHint:"review soon",rememberHint:"review decides"}}function Hk(e){const t=ia(),n=A(e.id),s=Vd(n,"remember"),a=Wg(n,s);return`${t.rememberHint}: ${Vg(ws(a))}`}function Vd(e,t){if(kn(t))return"again";if(t!=="remember")return t;const n=e.state||"New",s=Number(e.reviews||e.reviewCount||0),a=Number(e.correct||0),o=Number(e.wrong||0),l=Number(e.lapses||0),c=Number(e.successRate||(s?a/Math.max(a+o,1)*100:0));return n==="New"?"good":n==="Learning"?c>=70||a>=2?"good":"hard":c>=88&&a>=5&&l<=1?"easy":c<70||l>Math.max(1,Math.floor(a/3))?"hard":"good"}function kn(e){return e==="forgot"||e==="again"}function ue(e,t,n=t){const s=new Date,a=H(e),o=n,l=Vd(e,t);t=l;const c=e.state||"New";let d=Number(e.easeFactor||2.5),u=Number(e.intervalDays||0),m=Nr(e),g=c;return t==="again"?(d=Math.max(1.3,d-.2),m=0,u=ws(m),g="Learning",a.lapses+=c==="New"?0:1,a.wrong+=1):t==="hard"?(d=Math.max(1.3,d-.15),m=m<1?1:m,u=ws(m),g=u<1?"Learning":"Review",a.correct+=1):t==="good"?(m=m<0?0:m+1,u=ws(m),g=u<1?"Learning":"Review",a.correct+=1):t==="easy"&&(d=Math.min(3.2,d+.15),m=m<0?2:m+2,u=ws(m),g=u<1?"Learning":"Review",a.correct+=1),a.correct>=8&&u>=30&&(g="Mastered"),a.state=g,a.stage=Zs(g),a.easeFactor=as(d,2),a.intervalDays=as(u,6),a.srsStep=m,a.dueAt=np(s,u).toISOString(),a.nextReview=a.dueAt,a.lastReviewedAt=s.toISOString(),a.lastReview=a.lastReviewedAt,a.lastRating=He[o]||He[t],a.lastDecision=He[l]||He[t],a.reviews+=1,a.reviewCount=a.reviews,a.history=[...e.history||[],{at:s.toISOString(),rating:He[o]||He[t],inputRating:He[o]||He[t],decision:He[l]||He[t],from:c,to:g,intervalDays:a.intervalDays,srsStep:m}].slice(-120),a.successRate=Lo(a),a}function Wn(e="",t="",n="",s={}){return{level:String(e||"").toUpperCase(),lessonId:String(s.lessonId||t||""),exerciseId:String(s.exerciseId||n||""),cardId:String(s.cardId||""),kanji:String(s.kanji||""),type:String(s.type||""),title:s.title||null,prompt:String(s.prompt||""),answer:String(s.answer||""),answerLabel:String(s.answerLabel||""),state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviews:0,lapses:0,correct:0,wrong:0,stage:"new",lastReview:null,nextReview:null,reviewCount:0,successRate:0,history:[]}}function Xt(e,t={}){const s={...Wn(t.level||"",t.lessonId||"",t.exerciseId||"",t),...e||{}};if(s.level=String(t.level||s.level||"").toUpperCase(),s.lessonId=String(t.lessonId||s.lessonId||""),s.exerciseId=String(t.exerciseId||s.exerciseId||""),s.cardId=String(t.cardId||s.cardId||""),s.kanji=String(t.kanji||s.kanji||""),s.type=String(t.type||s.type||""),s.title=t.title||s.title||null,s.prompt=String(t.prompt||s.prompt||""),s.answer=String(t.answer||s.answer||""),s.answerLabel=String(t.answerLabel||s.answerLabel||""),s.stage||=Zs(s.state),s.lastReview||=s.lastReviewedAt||null,s.nextReview||=s.dueAt||null,s.reviewCount||=s.reviews||0,s.successRate=Lo(s),s.state=Xu(s.stage),s.dueAt=s.nextReview,s.lastReviewedAt=s.lastReview,Number.isFinite(Number(s.srsStep))?s.srsStep=Z(Math.trunc(Number(s.srsStep)),-1,63):s.srsStep=Nr(s),Number(s.reviews||0)===0&&!s.lastReview&&!s.lastReviewedAt&&(s.dueAt?new Date(s.dueAt).getTime():0)>Date.now()){const l=new Date().toISOString();s.state="Learning",s.stage="learning",s.intervalDays=0,s.srsStep=Math.max(0,Number.isFinite(Number(s.srsStep))?Math.trunc(Number(s.srsStep)):0),s.dueAt=l,s.nextReview=l}return s}function oa(e,t,n){const s={...e||{}};return Object.entries(t||{}).forEach(([a,o])=>{s[a]=Xt(o,{level:n,exerciseId:a,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""})}),s}function Xk(e){const t=F(e);return t==="N5"?z():t==="N4"?P():t==="N3"?_():t==="N2"?M():null}function no(e){const t=F(e);return t==="N5"?Se():t==="N4"?Ke():t==="N3"?Fe():t==="N2"?ze():[]}function Qk(e,t){const n=F(e),s=String(t||"");return!n||!s?null:no(n).find(a=>a.id===s||a.id===`${n.toLowerCase()}-${s}`||a.id.endsWith(`-${s}`))||null}function Yd(e){const t=F(e);return t==="N5"?Ls:t==="N4"?qr:t==="N3"?Hr:t==="N2"?Xr:null}function la(e,t,n=""){const s=Yd(e),a=F(e),o=String(t||"");if(!s||!a||!o)return null;const l=Qk(a,n);if(l){const c=s(l).find(d=>String(d.id)===o);if(c)return c}for(const c of no(a)){const d=s(c).find(u=>String(u.id)===o);if(d)return d}return null}function ca(e,t){const n=F(t);if(!e||!n)return!1;e.exerciseSrs||={};const s=new Set([...Object.keys(e.viewedLessons||{}),...Object.keys(e.completedLessons||{})]),a=new Set([...Object.keys(e.completedExercises||{}),...Object.keys(e.exerciseResults||{})]);let o=!1;return a.forEach(l=>{if(e.exerciseSrs[l])return;const c=la(n,l);if(!c||!s.has(String(c.lessonId||"")))return;const d=Wn(n,c.lessonId||"",c.id,c),u=e.exerciseResults?.[l]||null,m=!!e.completedExercises?.[l],g=ue(H(d),m||u?.correct?"good":"again");g.level=n,g.lessonId=String(c.lessonId||g.lessonId||""),g.exerciseId=String(c.id||l||""),g.cardId=String(c.cardId||g.cardId||""),g.kanji=String(c.kanji||g.kanji||""),g.type=String(c.type||g.type||""),g.title=c.title||g.title||null,g.prompt=String(c.prompt||g.prompt||""),g.answer=String(c.answer||g.answer||""),g.answerLabel=String(c.answerLabel||g.answerLabel||""),e.exerciseSrs[l]=g,o=!0}),o}function da(e,t){const n=F(t);if(!e||!n)return!1;const s=no(n),a=Yd(n);if(!a?.length&&!a)return!1;e.exerciseSrs||={};const o=new Set(Object.keys(e.completedLessons||{})),l=new Set([...Object.keys(e.viewedLessons||{}),...o]);let c=!1;return s.forEach(d=>{if(!l.has(d.id))return;(a(d)||[]).forEach(m=>{if(!m?.id||e.exerciseSrs[m.id])return;const g=Wn(n,d.id,m.id,{...m,lessonId:d.id}),w=new Date().toISOString();e.exerciseSrs[m.id]=Xt({...g,state:"Learning",stage:"learning",intervalDays:0,srsStep:0,dueAt:w,nextReview:w,lastReviewedAt:null,lastRating:null,reviews:0,lapses:0,correct:0,wrong:0,lastReview:null,reviewCount:0,history:[]},{level:n,lessonId:d.id,exerciseId:m.id,cardId:m.cardId||"",kanji:m.kanji||"",type:m.type||"",title:m.title||null,prompt:m.prompt||"",answer:m.answer||"",answerLabel:m.answerLabel||""}),c=!0})}),c}function Wk(e){if(r.progress.lessonCompletions[e])return;const t=uo(e);if(!(t.length>0&&t.every(o=>A(o.id).state!=="New")))return;const s=r.rewards.rewards.lessonCompleteXp,a=r.rewards.rewards.lessonCompleteCoins;r.progress.lessonCompletions[e]=new Date().toISOString(),C("lesson_complete"),O(s,a,"lesson_completion"),ce({warmth:2.4,trust:2,discipline:2.2,curiosity:.8},"lesson_completion"),de("lesson_complete",{lessonId:e,xp:s,coins:a}),Ge({title:h({ru:"Урок завершён",en:"Lesson complete"}),message:$e("eva","lessonComplete"),xp:s,coins:a,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),Aa("lesson_complete")}function so(){const e=W(),t=yt();if(t.goalClaimed||t.reviews<r.progress.settings.dailyGoal)return;t.goalClaimed=!0;const n=r.rewards.rewards.comboXp,s=r.rewards.rewards.streakCoins;O(n,s,"daily_goal"),Ge({title:S("dailyGoal"),message:$e("leya","goal"),xp:n,coins:s,mascot:"leya",mood:"happy",dialog:"goal"}),r.progress.daily[e]=t}function Vk(){const e=ua(),t=W();e.firstVisitDate||(e.firstVisitDate=t),e.lastVisitDate=t,r.progress.appOpens=Number(r.progress.appOpens||0)+1;const n=new Date().getHours();(n>=22||n<5)&&(r.progress.secrets.nightVisit=!0),Zd()}function Zd(){const e=r.progress.streak,t=hl(e.pendingReward);if(!t||W()<t.availableOn)return!1;e.pendingReward=null;const n=r.rewards.rewards.streakCoins;return C("streak_reward"),O(0,n,`streak:${t.milestone}:claim`),Ge({title:p()==="ru"?"Награда за стрик":"Streak reward",message:p()==="ru"?`Бонус за серию ${t.milestone} дней готов.`:`Your ${t.milestone}-day streak bonus is ready.`,xp:0,coins:n,mascot:"eva",mood:"achievement",dialog:"achievement"}),U(),N(),!0}function Yk(e){if(e==="eva"){r.progress.secrets.evaClicks=Number(r.progress.secrets.evaClicks||0)+1,ce({warmth:.2,curiosity:.1},"eva_click"),E($e("eva","welcome")),U(),N(),j();return}e==="leya"&&E($e("leya","combo"))}function eu(){Y(),r.progress.secrets.evaClicks=Number(r.progress.secrets.evaClicks||0)+1,r.evaRuntime||=at(),r.evaRuntime.clickCount=Number(r.evaRuntime.clickCount||0)+1,de("user_clicked_eva",{clickCount:r.evaRuntime.clickCount}),U(),C("notification_soft"),N(),j()}function Zk(){if(B.completed)return;B.completed=!0,r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,B.cardId&&(r.progress.writingPractice.cards[B.cardId]=(r.progress.writingPractice.cards[B.cardId]||0)+1),ce({curiosity:1,discipline:.8,trust:.4},"writing_complete"),de("writing_complete",{cardId:B.cardId});const e=U();N(),e&&j()}function ey(){const e=W();ua();const t=ty(),n=yr(r.progress.dailyBonusPending);n&&n.availableOn>e||(n&&n.availableOn<=e&&!t&&(r.progress.dailyBonusPending=null),r.progress.dailyBonusPending={availableOn:sp(e,1)},N())}function ty(){const e=W(),t=ua(),n=yr(r.progress.dailyBonusPending);if(!n||W()<n.availableOn||r.progress.dailyBonuses[e]||t.lastDailyBonusDate===e)return!1;r.progress.dailyBonusPending=null;const s=t.lastDailyBonusDate||t.firstVisitDate||t.lastVisitDate;return ny(s,e),t.lastVisitDate=e,t.lastDailyBonusDate=e,r.progress.dailyBonuses[e]=new Date().toISOString(),C("daily_bonus"),O(r.rewards.rewards.dailyBonusXp,r.rewards.rewards.dailyBonusCoins,"daily_bonus"),ce({warmth:1,discipline:.8},"daily_bonus"),Ge({title:S("dailyBonus"),message:$e("leya","welcome"),xp:r.rewards.rewards.dailyBonusXp,coins:r.rewards.rewards.dailyBonusCoins,mascot:"leya",mood:"calm",dialog:"welcome"}),U(),Mo(),!0}function ua(){r.progress.visits||={};const e=r.progress.visits;return e.firstVisitDate||=null,e.lastVisitDate||=null,e.lastDailyBonusDate||=null,e.streak=Number(e.streak||0),e.bestStreak=Number(e.bestStreak||0),e}function ny(e,t){const n=ua();n.streak=e&&tn(e,t)===1?n.streak+1:1,n.bestStreak=Math.max(n.bestStreak||0,n.streak);const s=r.progress.streak.lastStudyDate;s!==t&&(r.progress.streak.current=s&&tn(s,t)===1?r.progress.streak.current+1:1,r.progress.streak.lastStudyDate=t,r.progress.streak.best=Math.max(r.progress.streak.best||0,r.progress.streak.current),r.progress.streakHistory.push({date:t,value:r.progress.streak.current}),r.progress.streakHistory=r.progress.streakHistory.slice(-120))}function U(){if(!bn().length)return 0;let e=0;return bn().forEach(t=>{if(is(t.id)||!sy(t))return;e+=1;const n=t.rewardXp||0,s=t.rewardFragments||0;r.progress.achievements[t.id]={unlockedAt:new Date().toISOString(),rewardXp:n,rewardFragments:s},Ge({type:"achievement",title:eo(t),message:Ud(t),xp:n,coins:s,icon:t.icon,mascot:"eva",mood:"happy",dialog:"achievement"}),O(n,s,`achievement:${t.id}`)}),e}function sy(e){return tu(e)>=Number(e.target||1)}function tu(e){if(e.kind==="lessonComplete")return Object.keys(r.progress.lessonCompletions).length;if(e.kind==="correct")return r.progress.totalCorrect;if(e.kind==="learned")return lo().learned;if(e.kind==="reviews")return co();if(e.kind==="streak")return Math.max(r.progress.streak.current||0,r.progress.streak.best||0);if(e.kind==="level")return r.progress.level||1;if(e.kind==="moonFragments")return r.progress.totalMoonFragmentsEarned||0;if(e.kind==="writing")return r.progress.writingPractice?.completed||0;if(e.kind==="sentence")return Object.keys(r.progress.sentencePractice?.completed||{}).length;if(e.kind==="evaClicks")return r.progress.secrets?.evaClicks||0;if(e.kind==="nightVisit")return r.progress.secrets?.nightVisit?1:0;if(e.kind==="appOpens")return r.progress.appOpens||0;if(e.kind==="n5KanjiStudied")return Object.keys(z().studiedKanji||{}).length;if(e.kind==="n5LessonComplete"||e.kind==="n5LessonsComplete")return hn();if(e.kind==="n5Writing")return Object.keys(z().writingPractice||{}).length;if(e.kind==="n5SrsAll")return Object.keys(z().srsKanji||{}).length;if(e.kind==="n5FinalPass")return z().finalTest?.passed?1:0;if(e.kind==="n4Opened")return P().opened?1:0;if(e.kind==="n4LessonComplete")return Object.keys(P().completedLessons||{}).length;if(e.kind==="n4LessonsComplete")return Object.keys(P().completedLessons||{}).length;if(e.kind==="n4SrsAll")return Object.keys(P().srsKanji||{}).length;if(e.kind==="n4GrammarComplete")return Object.keys(P().completedGrammar||{}).length;if(e.kind==="n4ReadingComplete")return Object.keys(P().completedReading||{}).length;if(e.kind==="n4ListeningComplete")return Object.keys(P().completedListening||{}).length;if(e.kind==="n4Writing")return Object.keys(P().writingPractice||{}).length;if(e.kind==="n4FinalPass")return P().finalTest?.passed?1:0;if(e.kind==="n3Opened")return _().opened?1:0;if(e.kind==="n3LessonComplete")return Object.keys(_().completedLessons||{}).length;if(e.kind==="n3LessonsComplete")return Object.keys(_().completedLessons||{}).length;if(e.kind==="n3SrsAll")return Object.keys(_().srsKanji||{}).length;if(e.kind==="n3GrammarComplete")return Object.keys(_().completedGrammar||{}).length;if(e.kind==="n3ReadingComplete")return Object.keys(_().completedReading||{}).length;if(e.kind==="n3ListeningComplete")return Object.keys(_().completedListening||{}).length;if(e.kind==="n3Writing")return Object.keys(_().writingPractice||{}).length;if(e.kind==="n3ComprehensionAnswers")return Object.values(_().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n3FinalPass")return _().finalTest?.passed?1:0;if(e.kind==="n2Opened")return M().opened?1:0;if(e.kind==="n2LessonComplete")return Object.keys(M().completedLessons||{}).length;if(e.kind==="n2LessonsComplete")return Object.keys(M().completedLessons||{}).length;if(e.kind==="n2SrsAll")return Object.keys(M().srsKanji||{}).length;if(e.kind==="n2GrammarComplete")return Object.keys(M().completedGrammar||{}).length;if(e.kind==="n2ReadingComplete")return Object.keys(M().completedReading||{}).length;if(e.kind==="n2ListeningComplete")return Object.keys(M().completedListening||{}).length;if(e.kind==="n2Writing")return Object.keys(M().writingPractice||{}).length;if(e.kind==="n2ComprehensionAnswers")return Object.values(M().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n2FinalPass")return M().finalTest?.passed?1:0;if(e.kind==="shopComplete"){const t=Oe().filter(n=>!n.defaultOwned&&n.price>0);return t.length&&t.every(n=>ot(n.id))?1:0}if(e.kind==="jlpt"){const t=r.cards.filter(n=>n.jlpt===e.jlpt);return t.length>0&&t.every(n=>A(n.id).state==="Mastered")?1:0}return 0}function Ge(e){if(!r.rewardModal){r.rewardModal=e,nu(e);return}if(e.type==="level"){r.rewardQueue.unshift(e);return}r.rewardQueue.push(e)}function nu(e){if(F$(),e?.type==="achievement"){Ws()?C("achievement_unlock"):ja()&&B$();return}if(e?.type==="level"){C("level_up");return}((e?.xp||0)>0||(e?.coins||0)>0)&&C("notification_reward")}function O(e,t,n="reward"){const s=r.progress.level||ya(r.progress.xp);r.progress.xp+=e,r.progress.moonFragments+=t;const a=ry(n);if(!a&&e>0&&C("xp_gain"),!a&&t>0&&C("moon_fragment_gain"),t>0&&(r.progress.totalMoonFragmentsEarned=Number(r.progress.totalMoonFragmentsEarned||0)+t),r.progress.level=ya(r.progress.xp),(e||t)&&(r.progress.transactions.unshift({at:new Date().toISOString(),reason:n,xp:e,coins:t,balance:r.progress.moonFragments}),r.progress.transactions=r.progress.transactions.slice(0,80)),r.progress.level>s){C("level_up"),de("level_up",{level:r.progress.level,xp:r.progress.xp,moonFragments:r.progress.moonFragments});const o=jt();Ge({type:"level",title:S("levelUp"),message:`${S("level")} ${r.progress.level} - ${o.current}/${o.next} XP - ${r.progress.moonFragments} ${S("coins")}`,xp:0,coins:0,mascot:r.progress.level%2===0?"leya":"eva",mood:"happy",dialog:"achievement",level:r.progress.level,totalXp:r.progress.xp,moonFragments:r.progress.moonFragments})}}function ry(e){return["learn","review"].includes(r.route)&&["review_success","combo_bonus"].includes(e)}function Qt(e,t,n){const s=yt();s.reviews+=1,e.state==="New"&&t.state!=="New"&&(s.learned+=1),e.state!=="Mastered"&&t.state==="Mastered"&&(s.mastered+=1),kn(n)&&(s.mistakes+=1),s.minutes=as(s.reviews*.75+s.learned*1.25,1),r.progress.daily[W()]=s}function ve(){Zd();const e=W(),t=r.progress.streak.lastStudyDate;if(t===e)return;const n=!!(t&&tn(t,e)>1&&r.progress.streak.current>0);r.progress.streak.current=t&&tn(t,e)===1?r.progress.streak.current+1:1,r.progress.streak.lastStudyDate=e,r.progress.streak.best=Math.max(r.progress.streak.best,r.progress.streak.current),r.progress.streakHistory.push({date:e,value:r.progress.streak.current}),r.progress.streakHistory=r.progress.streakHistory.slice(-120),ce(n?{discipline:-3.5,trust:-1.4,warmth:-.8}:{discipline:1.4,trust:.8,warmth:.4},n?"streak_lost":"study_streak"),n&&E($e("eva","streakLoss")),[1,7,30,100].includes(r.progress.streak.current)&&(r.progress.streak.pendingReward={milestone:r.progress.streak.current,availableOn:sp(e,1)}),de("streak_up",{streak:r.progress.streak.current,lost:n}),N()}function su(){if(r.route!=="stats")return;if(!window.Chart){xp().then(()=>{r.route==="stats"&&su()}).catch(a=>console.warn("Chart.js failed to load.",a));return}const e=cj(10),t=e.map(a=>a.slice(5)),n=E$(),s=D$(n);Ks("activityChart",{type:"bar",data:{labels:t,datasets:[{label:S("learned"),data:e.map(a=>r.progress.daily[a]?.learned||0),backgroundColor:n.green},{label:S("review"),data:e.map(a=>r.progress.daily[a]?.reviews||0),backgroundColor:n.red}]},options:s}),Ks("jlptChart",{type:"bar",data:{labels:Object.keys(wu()),datasets:[{label:S("mastered"),data:Object.values(wu()),backgroundColor:n.yellow}]},options:s}),Ks("streakChart",{type:"line",data:{labels:t,datasets:[{label:S("streak"),data:e.map(a=>r.progress.streakHistory.find(o=>o.date===a)?.value||(r.progress.daily[a]?.reviews?1:0)),borderColor:n.blue,backgroundColor:n.blueSoft,fill:!0,tension:.35}]},options:s}),Ks("stateChart",{type:"doughnut",data:{labels:Object.keys(vu()),datasets:[{data:Object.values(vu()),backgroundColor:[n.blue,n.yellow,n.green,n.pink],borderColor:n.line}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:n.text}}}}}),Ks("mistakeChart",{type:"line",data:{labels:t,datasets:[{label:S("errors"),data:e.map(a=>r.progress.daily[a]?.mistakes||0),borderColor:n.danger,backgroundColor:n.dangerSoft,fill:!0,tension:.35}]},options:s})}function Ks(e,t){const n=document.getElementById(e);n&&r.charts.push(new Chart(n,t))}function ay(){const e=Wt();e&&(r.activeCardId=e.id,r.activeLessonId=e.lessonId,r.writingStep=Z(r.writingStep,0,Math.max(0,nt(e)-1)),B.cardId!==String(e.id)&&iy(e)),oy(),Fs(),pa(),Gs(Bs(!1)),window.setTimeout(au,120)}function Wt(){return X(r.activeCardId)||oo()[0]||r.cards[0]||null}function iy(e){B.cardId=String(e?.id||""),B.strokes=[],B.currentStroke=[],B.drawing=!1,B.activePointerId=null,B.completed=!1}function oy(){const e=document.getElementById("practiceCanvas");if(!e)return;Vn();const t=a=>{a.pointerType==="mouse"&&a.button!==0||(a.preventDefault(),e.setPointerCapture?.(a.pointerId),B.drawing=!0,B.activePointerId=a.pointerId,B.currentStroke=[ru(e,a)],B.completed=!1,Vn())},n=a=>{if(!B.drawing||a.pointerId!==B.activePointerId)return;a.preventDefault();const o=ru(e,a),l=B.currentStroke[B.currentStroke.length-1];(!l||gu(l,o)>1.4)&&(B.currentStroke.push(o),Vn())},s=a=>{if(!B.drawing||a.pointerId!==B.activePointerId)return;a.preventDefault();const o=ly(B.currentStroke);o.length&&B.strokes.push(o),B.currentStroke=[],B.drawing=!1,B.activePointerId=null,Vn(),Gs(Bs(!1))};e.onpointerdown=t,e.onpointermove=n,e.onpointerup=s,e.onpointercancel=s,e.onpointerleave=s,e.oncontextmenu=a=>a.preventDefault()}function ru(e,t){const n=e.getBoundingClientRect();return{x:Z((t.clientX-n.left)*(e.width/n.width),0,e.width),y:Z((t.clientY-n.top)*(e.height/n.height),0,e.height),pressure:t.pressure||.5,time:performance.now()}}function ly(e){if(!e.length)return[];const t=[e[0]];return e.slice(1).forEach(n=>{gu(t[t.length-1],n)>=2.6&&t.push(n)}),t.length===1?[t[0],{...t[0],x:t[0].x+.1,y:t[0].y+.1}]:t}function Vn(){const e=document.getElementById("practiceCanvas");if(!e)return;const t=e.getContext("2d"),n=Wt();pu(t,e),n&&py(t,e,n),B.strokes.forEach((s,a)=>uu(t,s,{color:getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),width:13,shadow:a===B.strokes.length-1})),B.currentStroke.length&&uu(t,B.currentStroke,{color:getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),width:13,shadow:!0})}function cy(){B.strokes=[],B.currentStroke=[],B.drawing=!1,B.completed=!1,Vn(),Gs(Bs(!1))}function dy(){B.strokes.pop(),B.currentStroke=[],B.completed=!1,Vn(),Gs(Bs(!1))}function uy(e=!1){const t=Bs(!0);Gs(t),e&&(er(t.success?"good":"again"),E(t.message),t.success&&Zk())}function Bs(e){const t=document.getElementById("practiceCanvas"),n=Wt(),s=nt(n);if(!t||!n)return{score:0,success:!1,expectedCount:s,message:""};const a=B.strokes;if(!a.length)return{score:0,success:!1,expectedCount:s,message:p()==="ru"?"Начни с первой черты.":"Start with the first stroke."};const o=Z(Math.round(Math.min(a.length,s)/s*100),0,100),l=e?100:o,c=!!(e&&a.length);let d=p()==="ru"?`Черты: ${a.length}/${s}. Самопроверка без распознавания.`:`Strokes: ${a.length}/${s}. Self-check without recognition.`;return!e&&a.length<s?d=p()==="ru"?`Черта ${a.length+1}/${s}: продолжай по образцу.`:`Stroke ${a.length+1}/${s}: keep following the guide.`:!e&&a.length>s?d=p()==="ru"?`Черты: ${a.length}/${s}. Если лишняя линия случайная, нажми «Отменить черту».`:`Strokes: ${a.length}/${s}. If one was accidental, tap "Undo stroke".`:e&&(d=ro(n)?p()==="ru"?"Записано. Сравни с жёлтым порядком KanjiVG и двигайся дальше.":"Saved. Compare it with the yellow KanjiVG order and move on.":p()==="ru"?"Записано. Для этого кандзи пока есть только шаблон, без точной схемы штрихов.":"Saved. This kanji currently has a template only, without exact stroke paths."),{score:l,success:c,expectedCount:s,message:d}}function au(){const e=document.getElementById("strokeCanvas"),t=Wt();if(!e||!t)return;cancelAnimationFrame(B.demoAnimationId);const n=nt(t),s=460,a=performance.now(),o=l=>{const c=l-a,d=Z(Math.floor(c/s),0,n-1),u=Z((c-d*s)/s,0,1);r.writingStep=d,Fs(d,u),pa(),c<n*s?B.demoAnimationId=requestAnimationFrame(o):(r.writingStep=n-1,Fs(r.writingStep,1),pa())};B.demoAnimationId=requestAnimationFrame(o)}function iu(){const e=document.getElementById("strokeCanvas"),t=Wt();if(!e||!t)return;cancelAnimationFrame(B.demoAnimationId);const n=performance.now(),s=520,a=Z(r.writingStep,0,Math.max(0,nt(t)-1)),o=l=>{const c=Z((l-n)/s,0,1);Fs(a,c),c<1&&(B.demoAnimationId=requestAnimationFrame(o))};B.demoAnimationId=requestAnimationFrame(o)}function ou(e){lu(r.writingStep+e,!1)}function lu(e,t){const n=Wt();n&&(r.writingStep=Z(e,0,Math.max(0,nt(n)-1)),pa(),t?iu():Fs(r.writingStep,1))}function pa(){const e=Wt();if(!e)return;const t=Us(e),n=p()==="ru"?"Шаг":"Step",s=document.getElementById("writingStepCounter");s&&(s.textContent=`${n} ${r.writingStep+1}/${nt(e)}`);const a=document.querySelector(".writing-step-head .label");a&&(a.textContent=t[r.writingStep]||""),Ga(".writing-guide-list li").forEach((o,l)=>o.classList.toggle("is-active",l===r.writingStep))}function Fs(e=r.writingStep,t=1){const n=document.getElementById("strokeCanvas"),s=Wt();if(!n||!s)return;const a=n.getContext("2d");pu(a,n);const o=Js(s);if(!o){du(a,n,s,e);return}cu(a,n,o,{activeIndex:e,progress:t,showFuture:!0,guideAlpha:1,showNumbers:!0})}function py(e,t,n){const s=Js(n);if(!s){du(e,t,n,r.writingStep);return}cu(e,t,s,{activeIndex:r.writingStep,progress:1,showFuture:!0,guideAlpha:.24,showNumbers:!1})}function Js(e){if(!e?.kanji)return null;const t=r.kanjiStrokes?.[e.kanji];return t?.strokeOrder?.length?t:null}function ro(e){return!!Js(e)}function nt(e){const t=Js(e);return Math.max(1,t?.strokeOrder?.length||Number(e?.strokes||1))}function zs(){const e=getComputedStyle(document.documentElement),t=n=>e.getPropertyValue(n).trim();return{paper:t("--writing-paper")||t("--surface")||"#ffffff",border:t("--writing-paper-border")||t("--line")||"#d0d5dd",grid:t("--writing-grid")||t("--line")||"#d0d5dd",gridStrong:t("--writing-grid-strong")||t("--line-strong")||"#98a2b3",ink:t("--writing-ink")||t("--text")||"#111014",guide:t("--writing-guide")||t("--muted")||"#5f6670",templateOpacity:Number(t("--writing-template-opacity")||"0.16")||.16}}function cu(e,t,n,s={}){const a=Z(Number(s.activeIndex||0),0,Math.max(0,n.strokeOrder.length-1)),o=gy(n,t,s.padding||22),l=zs(),c=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim(),d=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),u=l.guide;n.strokeOrder.forEach((m,g)=>{const w=g<a,v=g===a;g>a&&!s.showFuture||(e.save(),e.translate(o.x,o.y),e.scale(o.scale,o.scale),e.lineCap="round",e.lineJoin="round",e.strokeStyle=v?d:w?c:u,e.lineWidth=(v?8:5.5)/o.scale,e.globalAlpha=Number(s.guideAlpha??1)*(v?1:w?.86:.24),v&&s.progress<1&&(e.globalAlpha*=.45+Z(s.progress,0,1)*.55),v&&(e.shadowColor="rgba(248, 216, 74, 0.34)",e.shadowBlur=13/o.scale),e.stroke(new Path2D(m.path)),e.restore(),s.showNumbers&&fy(e,m,o,g+1,v))})}function gy(e,t,n=22){const s=my(e.viewBox),a=Math.min((t.width-n*2)/s.width,(t.height-n*2)/s.height),o=(t.width-s.width*a)/2-s.x*a,l=(t.height-s.height*a)/2-s.y*a;return{...s,scale:a,x:o,y:l}}function my(e){const t=String(e||"0 0 109 109").trim().split(/\s+/).map(Number),[n=0,s=0,a=109,o=109]=t;return{x:n,y:s,width:Math.max(1,a),height:Math.max(1,o)}}function fy(e,t,n,s,a){const o=hy(t.path);if(!o)return;const l=n.x+o.x*n.scale,c=n.y+o.y*n.scale;vy(e,l,c,s,a)}function hy(e){const t=String(e||"").match(/M\s*(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/i);return t?{x:Number(t[1]),y:Number(t[2])}:null}function vy(e,t,n,s,a){e.save(),e.fillStyle=a?getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim():getComputedStyle(document.documentElement).getPropertyValue("--surface-2").trim(),e.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue("--line-strong").trim(),e.lineWidth=1,e.beginPath(),e.arc(t,n,a?13:10,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=a?"#111014":getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),e.font="800 12px system-ui",e.textAlign="center",e.textBaseline="middle",e.fillText(String(s),t,n+.5),e.restore()}function du(e,t,n,s=0){const a=zs(),o=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim();e.save(),e.globalAlpha=a.templateOpacity,e.fillStyle=a.ink,e.font=`900 ${Math.floor(t.height*.7)}px "Noto Sans JP", "Yu Gothic", serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(n?.kanji||"文",t.width/2,t.height/2+t.height*.04),e.globalAlpha=1,e.fillStyle=o,e.font="800 15px system-ui",e.textAlign="left",e.textBaseline="top";const l=p()==="ru"?`Шаг ${s+1}/${nt(n)} · точной схемы пока нет`:`Step ${s+1}/${nt(n)} · exact paths not available yet`;e.fillText(l,18,16),e.restore()}function uu(e,t,n={}){const s=t.map(ky).filter(Boolean);if(!e||!s.length)return;const a=zs();if(e.save(),e.strokeStyle=n.color||a.ink,e.lineWidth=n.width||12,e.lineCap="round",e.lineJoin="round",e.imageSmoothingEnabled=!0,n.shadow&&(e.shadowColor="rgba(255, 48, 92, 0.36)",e.shadowBlur=12),e.beginPath(),e.moveTo(s[0].x,s[0].y),s.length===1){e.arc(s[0].x,s[0].y,e.lineWidth/2,0,Math.PI*2),e.fillStyle=e.strokeStyle,e.fill(),e.restore();return}if(s.length===2)e.lineTo(s[1].x,s[1].y);else{for(let l=1;l<s.length-1;l+=1){const c=yy(s[l],s[l+1]);e.quadraticCurveTo(s[l].x,s[l].y,c.x,c.y)}const o=s[s.length-1];e.lineTo(o.x,o.y)}e.stroke(),e.restore()}function pu(e,t){if(!e||!t)return;const n=zs();e.clearRect(0,0,t.width,t.height),e.fillStyle=n.paper,e.fillRect(0,0,t.width,t.height),wy(e,t)}function wy(e,t){const n=zs();e.save(),e.strokeStyle=n.grid,e.lineWidth=1,e.setLineDash([8,8]),e.beginPath(),e.moveTo(t.width/2,0),e.lineTo(t.width/2,t.height),e.moveTo(0,t.height/2),e.lineTo(t.width,t.height/2),e.moveTo(0,0),e.lineTo(t.width,t.height),e.moveTo(t.width,0),e.lineTo(0,t.height),e.stroke(),e.setLineDash([]),e.strokeStyle=n.gridStrong,e.strokeRect(.5,.5,t.width-1,t.height-1),e.restore()}function Us(e){const t=Js(e);if(t?.strokeOrder?.length)return t.strokeOrder.map((s,a)=>p()==="ru"?s.description_ru||`Штрих ${a+1} по данным KanjiVG`:s.description_en||`Stroke ${a+1} from KanjiVG data`);const n=Array.isArray(e?.stroke_order)?e.stroke_order:[];return Array.from({length:nt(e)},(s,a)=>n[a]||by(e,a))}function by(e,t){return p()!=="ru"?`Step ${t+1}: exact stroke paths are not available yet. Use the translucent ${e?.kanji||"kanji"} template.`:`Шаг ${t+1}: для этого кандзи пока нет точной схемы штрихов. Обводи полупрозрачный шаблон ${e?.kanji||""}.`}function Gs(e){const t=document.getElementById("writingStrokeCounter");t&&(t.textContent=`${B.strokes.length}/${e.expectedCount}`);const n=document.getElementById("writingScore");n&&(n.querySelector("span").textContent=`${e.score}%`,n.querySelector("i").style.width=`${e.score}%`);const s=document.getElementById("writingFeedback");s&&(s.textContent=e.message,s.classList.toggle("is-good",e.success),s.classList.toggle("is-warning",!e.success&&e.score>0))}function ky(e){return e?Array.isArray(e)?{x:e[0],y:e[1]}:{x:e.x,y:e.y}:null}function yy(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function gu(e,t){return Math.hypot((e?.x||0)-(t?.x||0),(e?.y||0)-(t?.y||0))}function $y(){r.charts.forEach(e=>e.destroy()),r.charts=[]}function jy(e,t){const n=new Date;return r.cards.filter(s=>!e||s.lessonId===e).filter(s=>{const a=r.lessons.find(l=>l.id===s.lessonId);if(a&&!ke(a))return!1;const o=A(s.id);return o.state==="New"?!0:o.dueAt&&new Date(o.dueAt)<=n}).sort(ga)}function Sy(){const e=new Date;return Ly().filter(t=>{const n=A(t.id);return n.state==="New"?!1:n.dueAt&&new Date(n.dueAt)<=e}).sort(ga)}function Ny(){const e=Date.now(),t=[];return[["N5",z()],["N4",P()],["N3",_()],["N2",M()]].forEach(([n,s])=>{Object.entries(s?.exerciseSrs||{}).forEach(([a,o])=>{const l=Xt(o,{level:n,exerciseId:a,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""});if(!l.dueAt)return;const c=la(n,a,l.lessonId||""),d=String(c?.lessonId||l.lessonId||"");if(!Pu(n,d))return;const u=new Date(l.dueAt).getTime();!u||u>e||t.push({kind:"exercise",source:"textbook",key:`exercise:${String(n).toUpperCase()}:${a}`,level:String(n||"").toUpperCase(),exerciseId:a,lessonId:d,cardId:String(l.cardId||""),dueAt:u,progress:l})})}),t.sort(io)}function qs(){const e=[];return r.n5Reading.forEach(t=>{t?.id&&e.push(t)}),[["N4",r.n4Reading],["N3",r.n3Reading],["N2",r.n2Reading],["N1",r.n1Reading]].forEach(([t,n])=>{(Array.isArray(n)?n:[]).forEach(s=>{(s.questions||[]).forEach((a,o)=>{const l={id:String(a.id||`${s.id}:${o}`),prompt:a.prompt||{ru:"",en:""},answer:String(a.answer||""),options:pl(a.options)};e.push({id:String(a.id||`${s.id}:${o}`),level:String(s.level||t||"").toUpperCase(),kind:"question",sourceKind:String(s.kind||"reading"),sourceId:String(s.id||""),sourceTitle:s.title||{ru:s.id||"",en:s.id||""},title:s.title||{ru:s.id||"",en:s.id||""},jp:String(s.jp||""),reading:String(s.reading||""),translationRu:String(s.ru||""),translationEn:String(s.en||""),passageSource:String(s.source||""),questionIndex:o,question:l,questions:[l]})})})}),[...e,..._h()]}function mu(e,t=""){const n=String(e||""),s=String(t||"").toUpperCase();return qs().find(a=>String(a.id||"")===n&&(!s||String(a.level||"").toUpperCase()===s))||qs().find(a=>String(a.id||"")===n)||null}function fu(e){const t=Array.isArray(e?.questions)?e.questions[0]||null:e?.question||null;return{level:String(e?.level||"").toUpperCase(),lessonId:String(e?.sourceId||""),exerciseId:String(e?.id||""),type:String(e?.kind||""),title:e?.sourceTitle||e?.title||null,prompt:String(e?.kind==="question"?h(t?.prompt||{}):e?.sentence||e?.jp||""),answer:String(e?.kind==="question"?t?.answer||"":tt(e).map(n=>n.kanji).join("")),answerLabel:String(e?.kind==="question"?t?.answer||"":tt(e).map(n=>n.kanji).join(""))}}function ao(e){return 1}function ut(e){const t=fu(e);return{...Wn(t.level,t.lessonId,t.exerciseId,t),sourceId:String(e?.sourceId||""),sourceKind:String(e?.sourceKind||""),sourceTitle:e?.sourceTitle||null,exerciseKind:String(e?.kind||""),questionCount:ao(),answers:{},selectedIndices:[],selectedTiles:[],selectedText:"",wrongIndexes:[],wrongQuestions:[],completed:!1,completedAt:null}}function yn(e,t){const n=ut(t),s=Xt({...n,...e||{}},fu(t));return s.sourceId=String(t?.sourceId||s.sourceId||""),s.sourceKind=String(t?.sourceKind||s.sourceKind||""),s.sourceTitle=t?.sourceTitle||s.sourceTitle||null,s.exerciseKind=String(t?.kind||s.exerciseKind||""),s.questionCount=ao(),s.answers=s.answers&&typeof s.answers=="object"&&!Array.isArray(s.answers)?{...s.answers}:{},s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.map(a=>Number(a)).filter(a=>Number.isInteger(a)&&a>=0):[],s.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(a=>({kanji:String(a?.kanji||""),reading:String(a?.reading||"")})).filter(a=>a.kanji):[],s.selectedText=String(s.selectedText||""),s.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.map(a=>Number(a)).filter(a=>Number.isInteger(a)&&a>=0):[],s.wrongQuestions=Array.isArray(s.wrongQuestions)?s.wrongQuestions.map(a=>String(a)).filter(Boolean):[],s.completed=!!s.completed,s.completedAt=s.completedAt||null,s}function pt(e){if(!e?.id)return null;r.progress.readingExercises||={};const t=r.progress.readingExercises[String(e.id)]||null;if(t){const s=yn(t,e);return r.progress.readingExercises[String(e.id)]=s,s}const n=ut(e);return r.progress.readingExercises[String(e.id)]=n,n}function $n(e,t){if(!e?.id)return null;r.progress.readingExercises||={};const n=yn(t||{},e);return r.progress.readingExercises[String(e.id)]=n,n}function Hs(e=""){if(!r.progress)return!1;const t=new Set([...Object.entries(r.progress.viewedReadingLevels||{}).filter(([,l])=>!!l).map(([l])=>F(l)).filter(Boolean)]),n=F(e);if(n&&t.add(n),!t.size)return!1;const s=qs().filter(l=>t.has(F(l.level)));if(!s.length)return!1;r.progress.readingExercises||={};const a=new Date().toISOString();let o=!1;return s.forEach(l=>{const c=String(l.id),d=r.progress.readingExercises[c];if(d){r.progress.readingExercises[c]=yn(d,l);return}r.progress.readingExercises[c]=yn({...ut(l),state:"Learning",stage:"learning",intervalDays:0,srsStep:0,dueAt:a,nextReview:a},l),o=!0}),o}function xy(){const e=Date.now();return qs().map(t=>{if(!Eu(t.level))return null;const n=pt(t),s=yn(n||ut(t),t),a=s.dueAt?new Date(s.dueAt).getTime():0;return!a||a>e?null:{kind:"exercise",source:"reading",key:`reading:${String(t.level||"").toUpperCase()}:${t.id}`,level:String(t.level||"").toUpperCase(),exerciseId:String(t.id||""),lessonId:String(t.sourceId||""),cardId:"",dueAt:a,progress:s,exercise:t,card:null}}).filter(Boolean).sort(io)}function Cy(){const e=Sy().map(n=>({kind:"card",key:`card:${n.id}`,card:n,dueAt:n.dueAt?new Date(n.dueAt).getTime():0,progress:A(n.id)})),t=[...Ny(),...xy()].sort(io);return Qg(e,t,di)}function Ne(){if(ur&&pr!==null)return pr;let e=0;const t=Date.now(),n=new Set;return be.forEach(s=>{ko(s).forEach(a=>{const o=String(a?.id||"");if(!o||n.has(o))return;n.add(o);const l=A(o);l.state!=="New"&&l.dueAt&&new Date(l.dueAt).getTime()<=t&&(e+=1)})}),[["N5",z()],["N4",P()],["N3",_()],["N2",M()]].forEach(([s,a])=>{Object.entries(a?.exerciseSrs||{}).forEach(([o,l])=>{const c=Xt(l,{level:s,exerciseId:o,lessonId:l?.lessonId||"",cardId:l?.cardId||"",kanji:l?.kanji||"",type:l?.type||"",title:l?.title||null,prompt:l?.prompt||"",answer:l?.answer||"",answerLabel:l?.answerLabel||""});if(!c.dueAt)return;const d=la(s,o,c.lessonId||""),u=String(d?.lessonId||c.lessonId||"");if(!Pu(s,u))return;const m=new Date(c.dueAt).getTime();m&&m<=t&&(e+=1)})}),qs().forEach(s=>{if(!Eu(s.level))return;const a=pt(s),o=yn(a||ut(s),s),l=o.dueAt?new Date(o.dueAt).getTime():0;l&&l<=t&&(e+=1)}),ur&&(pr=e),e}function io(e,t){if(e.dueAt!==t.dueAt)return e.dueAt-t.dueAt;const n=e.kind==="card"?A(e.card.id):e.progress,s=t.kind==="card"?A(t.card.id):t.progress,a=xr(n),o=xr(s);return a!==o?o-a:e.kind!==t.kind?e.kind==="card"?-1:1:e.kind==="card"&&t.kind==="card"?Number(e.card.id)-Number(t.card.id):String(e.key||"").localeCompare(String(t.key||""))}function Ly(){const e=new Set,t=[];return be.forEach(n=>{ko(n).forEach(s=>{const a=String(s?.id||"");!a||e.has(a)||(e.add(a),t.push(s))})}),t.sort(ga)}function oo(){const e=lj();return r.cards.filter(t=>{const n=r.lessons.find(a=>a.id===t.lessonId);if(n&&!ke(n))return!1;const s=A(t.id);return s.state==="New"||s.dueAt&&new Date(s.dueAt)<=e}).sort(ga)}function ga(e,t){const n=A(e.id),s=A(t.id),a=n.dueAt?new Date(n.dueAt).getTime():0,o=s.dueAt?new Date(s.dueAt).getTime():0;if(a!==o)return a-o;if(a>0){const l=xr(n),c=xr(s);if(l!==c)return c-l}return Number(e.id)-Number(t.id)}function Ay(){const e=r.filters.query.trim().toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return r.cards.filter(t=>{const n=Xs(t.id),s=[t.kanji,L(t),t.meaning_ru,t.hiragana,t.romaji,t.onyomi,t.onyomi_romaji,t.kunyomi,t.kunyomi_romaji,po(t),t.jlpt,xo(t.lessonId),Ys(t),n.radical,h(n.radicalMeaning||{}),...t.apps,...t.examples.flatMap(a=>[a.word,a.reading,a.romaji,a.translation,Ce(a)])].join(" ").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return(!e||s.includes(e))&&(r.filters.jlpt==="all"||t.jlpt===r.filters.jlpt)&&(r.filters.radical==="all"||n.radical===r.filters.radical)&&(r.filters.favorites==="all"||!!r.progress.favorites[t.id])&&Iy(t.strokes,r.filters.strokes)})}function Iy(e,t){if(t==="all")return!0;if(t==="13+")return e>=13;const[n,s]=t.split("-").map(Number);return e>=n&&e<=s}function lo(){const e=r.cards.length,t=r.cards.filter(s=>A(s.id).state!=="New").length,n=r.cards.filter(s=>A(s.id).state==="Mastered").length;return{total:e,learned:t,mastered:n,todayCards:oo().length,completion:I(n,e)}}function co(){return Object.values(r.progress.cards).reduce((e,t)=>e+(t.reviewCount||t.reviews||0),0)}function Ty(){return(r.progress.transactions||[]).reduce((e,t)=>e+Math.max(0,Number(t.coins||0)),0)}function hu(){const e=r.progress.totalCorrect+r.progress.totalWrong;return e?Math.round(r.progress.totalCorrect/e*100):0}function vu(){const e={New:0,Learning:0,Review:0,Mastered:0};return r.cards.forEach(t=>{e[A(t.id).state]+=1}),e}function wu(){const e={};return r.cards.forEach(t=>{e[t.jlpt]||=0,A(t.id).state==="Mastered"&&(e[t.jlpt]+=1)}),e}function yt(){const e=W();return r.progress.daily[e]||(r.progress.daily[e]={learned:0,reviews:0,mastered:0,mistakes:0,minutes:0,goalClaimed:!1}),r.progress.daily[e]}function uo(e){return r.cards.filter(t=>t.lessonId===e)}function Ry(){return r.cards.filter(e=>{const t=r.lessons.find(n=>n.id===e.lessonId);return(!t||ke(t))&&A(e.id).stage==="new"})}function X(e){return r.cards.find(t=>String(t.id)===String(e))}function Xs(e){return r.kanjiMeta[String(e)]||{}}function ma(e){const t=r.kanjiHints[String(e)]||{};return{hint:h(t.hint||{})||$e("leya","hint"),mnemonic:h(t.mnemonic||{})||""}}function _y(e){e&&(r.progress.favorites[e]?delete r.progress.favorites[e]:r.progress.favorites[e]=new Date().toISOString(),N(),j())}function gt(e=null){r.readingCheck={cardId:e?String(e):null,value:"",status:null,message:""}}function My(e){const t=String(e||"");r.readingCheck.cardId!==t&&gt(t)}function bu(){const e=X(r.readingCheck.cardId||r.activeCardId);if(!e)return;vs(e,"reading_check"),Tu();const t=Ey(r.readingCheck.value),n=Py(e),s=t.some(c=>n.normalized.has(c)),a=t.length>0,o=a&&s?"correct":"wrong",l=a?s?p()==="ru"?"Верно. Это чтение есть у карточки.":"Correct. This reading belongs to the card.":p()==="ru"?"Почти. Попробуй другое онъёми или кунъёми.":"Almost. Try another on'yomi or kun'yomi.":p()==="ru"?"Сначала напиши чтение хираганой или катаканой.":"Type a reading in hiragana or katakana first.";r.readingCheck={cardId:e.id,value:r.readingCheck.value,status:o,message:l},C(o==="correct"?"answer_correct":"answer_wrong"),j(),requestAnimationFrame(()=>{const c=document.getElementById(`readingCheck-${e.id}`);c&&(c.focus(),"setSelectionRange"in c&&c.setSelectionRange(c.value.length,c.value.length))})}function Py(e){const t=fa(e),n=[...Vt(t.onyomi.kana),...Vt(t.kunyomi.kana),...Vt(e.hiragana)].filter(Boolean),s=n.filter((a,o)=>n.indexOf(a)===o);return{normalized:new Set(s.map(ku).filter(Boolean))}}function Ey(e){return String(e||"").split(/[\/,гЂЃпјЊ\s]+/u).map(ku).filter(Boolean)}function ku(e){const t=yu(String(e||"").normalize("NFKC")).replace(/[гѓ»пЅҐ.\-]/gu,"").replace(/\s+/gu,"");return Dy(t).trim()}function yu(e){return[...String(e||"")].map(t=>{const n=t.charCodeAt(0);return n>=12449&&n<=12534?String.fromCharCode(n-96):t}).join("")}function Dy(e){let t="";for(const n of String(e||"")){if(n==="ー"){t+=Oy(t.slice(-1));continue}t+=n}return t}function Oy(e){return"あかさたなはまやらわがざだばぱゃぁ".includes(e)?"あ":"いきしちにひみりぎ�?ぢびぴぃ".includes(e)?"い":"うくすつぬふむゆるぐずづぶぷゅぅ".includes(e)?"う":"えけせてねへめれげぜでべぺぇ".includes(e)?"え":"おこそとのほもよろをごぞどぼぽょぉ".includes(e)?"お":""}function $u(e){if(!e)return null;const t=String(e.jlpt||"").toUpperCase();let n=null;return t==="N5"?n=r.n5KanjiCatalog:t==="N4"?n=r.n4KanjiCatalog:t==="N3"?n=r.n3KanjiCatalog:t==="N2"&&(n=r.n2KanjiCatalog),!n||!Array.isArray(n)?null:n.find(s=>s&&s.kanji===e.kanji)||null}const ju={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",ゐ:"i",ゑ:"e",を:"o",ん:"n",ゔ:"vu"},Su={きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ふぁ:"fa",ふぃ:"fi",ふぇ:"fe",ふぉ:"fo",しぇ:"she",じぇ:"je",ちぇ:"che",てぃ:"ti",でぃ:"di",とぅ:"tu",どぅ:"du",つぁ:"tsa",つぃ:"tsi",つぇ:"tse",つぉ:"tso",うぃ:"wi",うぇ:"we",うぉ:"wo",ゔぁ:"va",ゔぃ:"vi",ゔぇ:"ve",ゔぉ:"vo"};function fa(e){const t=$u(e);if(t&&t.readings){const a=t.readings,o=ha(a.onyomi,a.onyomi_romaji||e?.onyomi_romaji,e?.onyomi),l=ha(a.kunyomi,a.kunyomi_romaji||e?.kunyomi_romaji,e?.kunyomi);if(o.kana||l.kana)return{onyomi:o,kunyomi:l}}const n=ha(e?.onyomi,e?.onyomi_romaji),s=ha(e?.kunyomi,e?.kunyomi_romaji);return n.kana||s.kana||n.romaji||s.romaji?{onyomi:n,kunyomi:s}:{onyomi:{kana:"",romaji:""},kunyomi:{kana:"",romaji:""}}}function Vt(e){return(Array.isArray(e)?e.join(" / "):String(e||"")).split(/[\/пјЏ,пјЊгЂЃгѓ»пЅҐ;пј›]+/u).map(n=>n.trim()).filter(Boolean)}function ha(e,t="",n=""){const s=Vt(e).length?Vt(e):Vt(n),a=Vt(t),o=s.map((l,c)=>({kana:q(l),romaji:Ky(l,a[c])})).filter(l=>l.kana||l.romaji);return{kana:o.map(l=>l.kana).filter(Boolean).join(" / "),romaji:o.map(l=>l.romaji).filter(Boolean).join(" / ")}}function Ky(e,t){const n=Nu(e);return n?t&&xu(t)===xu(n)?t:n:t||""}function Nu(e){const t=[...By(e)];let n="",s=!1;for(let a=0;a<t.length;a+=1){const o=t[a],l=t[a+1]||"";if(o==="っ"){s=!0;continue}if(o==="ー"){const u=Fy(n);u&&(n+=u);continue}let c="";const d=o+l;if(Su[d])c=Su[d],a+=1;else if(ju[o])c=ju[o];else if(/[a-zA-Z0-9]/u.test(o))c=o.toLowerCase();else{s=!1;continue}if(s){const u=c.match(/^[bcdfghjklmnpqrstvwxyz]/u)?.[0]||"";u&&u!=="n"&&(n+=u),s=!1}n+=c}return n}function By(e){return yu(String(e||"").normalize("NFKC")).replace(/[()\[\]{}]/gu,"").replace(/[.\-‐-―\s]/gu,"").trim()}function Fy(e){return String(e||"").match(/[aeiou](?!.*[aeiou])/u)?.[0]||""}function xu(e){return String(e||"").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/gu,"").replace(/[^a-z0-9]+/gu,"")}function Cu(e){return e==="onyomi"?p()==="ru"?"Онъёми":"On'yomi":p()==="ru"?"Кунъёми":"Kun'yomi"}function Lu(e){return e==="onyomi"?p()==="ru"?"Он":"On":p()==="ru"?"Кун":"Kun"}function po(e){const t=fa(e);return[`${Lu("onyomi")}: ${t.onyomi.kana||"—"} (${t.onyomi.romaji||"—"})`,`${Lu("kunyomi")}: ${t.kunyomi.kana||"—"} (${t.kunyomi.romaji||"—"})`].join(" Р'· ")}function go(e){if(!e)return"";const t=e.audioSrc||e.audio||"";return Iu(t)||Au(e)}function Au(e){if(!e?.id||!e?.jlpt||!e?.lessonId)return"";const t=Jy(e.romaji);return t?`./audio/kanji/${String(e.jlpt).toLowerCase()}/${e.lessonId}/${e.id}-${t}.mp3`:""}function Iu(e){return e?e.startsWith("./")||e.startsWith("http")?e:e.startsWith("/")?`.${e}`:`./${e}`:""}function Jy(e){return String(e||"").split("/")[0].trim().toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function zy(e){return!!(go(e)||mo(e))}function mo(e){if(!e)return"";const t=fa(e);return t.onyomi.kana||t.kunyomi.kana||e.hiragana||e.kanji||""}function Uy(e){return Vt(e)[0]||String(e||"").trim()}function fo(){if(r.route!=="learn"&&r.route!=="review")return;const e=560-(Date.now()-ds);if(e>0){window.setTimeout(fo,e);return}const t=X(r.activeCardId),n=Iu(t?.audioSrc||t?.audio||"");if(!t||!n)return;const s=`${r.route}:${t.id}:${n}`;s!==Vo&&(Vo=s,Ru(t,{silent:!0}))}function Tu(){Ae&&(Ae.pause(),Ae.currentTime=0,Ae=null),"speechSynthesis"in window&&window.speechSynthesis.cancel()}function Ru(e,t={}){const n=go(e);return n?(Ae&&(Ae.pause(),Ae.currentTime=0),Ae=new Audio(n),Ae.preload="auto",Ae.onended=()=>{Ae=null},Ae.onerror=()=>{t.silent||console.warn("Kanji audio file could not be loaded.",{id:e?.id,audio:n})},Ae.play().then(()=>!0).catch(s=>!t.silent&&_u(e)?!0:(t.silent||console.warn("Kanji audio playback was blocked or failed.",{id:e?.id,audio:n,error:s}),!1))):Promise.resolve(t.silent?!1:_u(e))}function _u(e){const t=Uy(mo(e));if(!t||!("speechSynthesis"in window)||!("SpeechSynthesisUtterance"in window))return console.warn("Kanji audio is not available for this card.",{id:e?.id,expected:Au(e)}),!1;window.speechSynthesis.cancel();const n=new SpeechSynthesisUtterance(t);return n.lang="ja-JP",n.rate=.92,window.speechSynthesis.speak(n),!0}function Gy(e,t){E(e?`${t}: ${e}`:`${t}: ${p()==="ru"?"аудио пока не добавлено":"audio not added yet"}`)}function ke(e){return!!e}function va(e){return r.rewards?.lessonUnlocks?.[e?.id]||1}function Mu(e){if(!e||!ke(e))return"locked";const t=uo(e.id);return t.length?!!r.progress.lessonCompletions?.[e.id]||t.every(a=>{const o=A(a.id);return o.state!=="New"||o.reviewCount>0||o.lastReview})?"completed":t.some(a=>{const o=A(a.id);return o.state!=="New"||o.reviewCount>0||o.lastReview})?"started":"new":"new"}function ho(e){return e==="completed"?"is-completed":e==="started"?"is-started":""}function vo(e){const t=p()==="ru";return e==="completed"?t?"Урок пройден":"Lesson completed":e==="started"?t?"Урок начат":"Lesson started":t?"Не начат":"Not started"}function qy(e){return e!=="completed"&&e!=="started"?"":`<span class="lesson-status-dot" aria-label="${f(vo(e))}"></span>`}function Hy(e){return e!=="completed"&&e!=="started"?"":`<span class="pill lesson-status-pill ${ho(e)}">${i(vo(e))}</span>`}function Yt(e){const t=String(e||"").toUpperCase();return r.jlptLessons.find(n=>n.jlpt===t)||null}function mt(e){const t=String(e||"").toUpperCase();return r.jlptCatalog?.items?.find(n=>n.jlpt===t)||null}function jn(e){const t=String(e||"").toUpperCase();return t==="N5"?z():t==="N4"?P():t==="N3"?_():t==="N2"?M():null}function Xy(e,t,n="open"){const s=F(e),a=String(t||"");if(!s||!a)return!1;const o=jn(s);return!o||(o.viewedLessons||={},o.viewedLessons[a])?!1:(o.viewedLessons[a]=new Date().toISOString(),!0)}function Pu(e,t){const n=F(e),s=String(t||"");if(!n||!s)return!1;const a=jn(n);return a?!!(a.viewedLessons?.[s]||a.completedLessons?.[s]):!1}function wa(e,t="open"){const n=F(e);return!n||(r.progress.viewedReadingLevels||={},r.progress.viewedReadingLevels[n])?!1:(r.progress.viewedReadingLevels[n]=new Date().toISOString(),!0)}function Eu(e){const t=F(e);return t?!!r.progress.viewedReadingLevels?.[t]:!1}function wo(e){const t=mt(e);return Array.isArray(t?.previousLevels)?t.previousLevels.map(n=>String(n||"").toUpperCase()).filter(Boolean):[]}function Du(e){const t=String(e||"").toUpperCase(),n=jn(e);if(!n)return!1;if(n.finalTest?.passed)return!0;const a=mt(t)?.lessonCount||(t==="N5"?10:0);let o=0;if(t==="N5"){o=hn();const l=Object.keys(n.studiedKanji||{}).length;if(o>=10&&l>=80||o>=a)return!0}else if(o=Object.keys(n.completedLessons||{}).length,o>=a)return!0;return!1}function qe(e){const t=String(e||"").toUpperCase();if(be.includes(t)||r.progress.unlockedJlptLevels&&r.progress.unlockedJlptLevels.includes(t))return!0;if(!mt(t))return t==="N5";const s=wo(t);return s.length?s.every(a=>Du(a)):!0}function Ou(e=[]){const t=e.filter(Boolean);if(!t.length)return"";if(t.length===1)return t[0];const n=p()==="ru"?"Рё":"and";return t.length===2?`${t[0]} ${n} ${t[1]}`:`${t.slice(0,-1).join(", ")} ${n} ${t[t.length-1]}`}function $t(e){const t=wo(e);return t.length?p()==="ru"?`Откроется после завершения ${Ou(t)}.`:`Unlocks after completing ${Ou(t)}.`:p()==="ru"?"Откроется после учебника N5.":"Unlocks after the N5 textbook."}function ba(e){const t=F(e);if(!t)return[];const n=mt(t),s=r.lessons.filter(d=>String(d.jlpt||"").toUpperCase()===t),a=n?(n.lessonIds||[]).map(d=>r.lessons.find(u=>u.id===d)).filter(Boolean):s,o=new Set(a.map(d=>d.id)),l=s.filter(d=>!o.has(d.id)),c=Math.max(n?n.lessonCount||a.length:s.length,a.length);return[...a,...l].slice(0,c||s.length)}function bo(e){const t=F(e);if(!t)return"";const n=ba(t);if(!n.length)return"";const s=r$(t);if(s?.lessonId&&$a(t,s.lessonId))return s.lessonId;const a=jn(t)?.currentLessonId||"";if(a&&$a(t,a))return a;const o=t==="N5"?z().completedLessons||{}:t==="N4"?P().completedLessons||{}:t==="N3"?_().completedLessons||{}:t==="N2"?M().completedLessons||{}:r.progress.lessonCompletions||{},l=n.filter(c=>o[c.id]);return l.length?(l.sort((c,d)=>{const u=Date.parse(o[d.id]||"")||0,m=Date.parse(o[c.id]||"")||0;return u!==m?u-m:(d.order||0)-(c.order||0)}),l[0]?.id||n[0]?.id||""):n[0]?.id||""}function ka(e,t=""){const n=F(e);if(!n||!Yt(n))return;if(!qe(n)){r.activeTextbookLevel=n,r.activeJlptLesson=n,Te("textbooks",null,n),E($t(n));return}const s=r.route,a=String(t||"")||bo(n),o=["N5","N4","N3","N2"].includes(n),l=a?`#textbooks/${encodeURIComponent(n)}/${encodeURIComponent(a)}`:`#textbooks/${encodeURIComponent(n)}`;r.route="textbooks",r.activeTextbookLevel=n,r.activeJlptLesson=n,r.activeTextbookSubroute=a||null,r.kanjiPageId=null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=!o&&a?`#textbook-lesson-${a}`:null,s!=="eva-room"&&(r.evaRoomShopOpen=!1),a&&ft(n,a,"open_jlpt"),gt(),location.hash!==l&&history.replaceState(null,"",l),Ar(),j()}function Qy(e){return e?Yt(e.jlpt):null}function Yn(e){const t=String(e||"").toUpperCase();return r.jlptPracticeLessons.find(n=>n.jlpt===t)||null}function Sn(){return r.progress.jlptLessonPractice=Cl(ms().jlptLessonPractice,r.progress.jlptLessonPractice||{}),r.progress.jlptLessonPractice}function Zn(e){if(!e?.drills?.length)return null;const t=Sn(),n=t.activeIds[e.jlpt],s=e.drills.find(a=>a.id===n);return s||(t.activeIds[e.jlpt]=e.drills[0].id,e.drills[0])}function Wy(e){const t=Yn(r.activeJlptLesson),n=Zn(t);if(!n||!n.tiles[e])return;const s=Sn(),a=s.selected[n.id]||[],o=n.blanks.flatMap(l=>l.answer||[]).length;a.includes(e)||a.length>=o||(s.selected[n.id]=[...a,e],s.checked[n.id]=!1,s.results[n.id]=null,N(),j())}function Vy(){const e=Zn(Yn(r.activeJlptLesson));if(!e)return;const t=Sn();t.selected[e.id]=(t.selected[e.id]||[]).slice(0,-1),t.checked[e.id]=!1,t.results[e.id]=null,N(),j()}function Yy(){const e=Zn(Yn(r.activeJlptLesson));if(!e)return;const t=Sn();t.selected[e.id]=[],t.checked[e.id]=!1,t.results[e.id]=null,N(),j()}function Zy(){const e=Zn(Yn(r.activeJlptLesson));if(!e)return;const t={...$o(),...yo()},n=Sn(),s=n.selected[e.id]||[],a=e.blanks.flatMap(c=>c.answer||[]),o=a.reduce((c,d,u)=>{const m=e.tiles[s[u]];return(!m||m.kanji!==d)&&c.push(u),c},[]),l=s.length===a.length&&o.length===0;n.checked[e.id]=!0,n.results[e.id]={correct:l,wrongIndexes:o,message:l?t.correct:t.wrong},l&&!n.completed[e.id]?(n.completed[e.id]=new Date().toISOString(),O(8,1,`jlpt_practice:${e.id}`),C("answer_correct")):l||C("answer_wrong"),N(),j()}function e$(){const e=Yn(r.activeJlptLesson),t=Zn(e);if(!e||!t)return;const n=e.drills.findIndex(o=>o.id===t.id),s=e.drills[(n+1)%e.drills.length],a=Sn();a.activeIds[e.jlpt]=s.id,a.selected[s.id]||=[],a.checked[s.id]||=!1,a.results[s.id]||=null,N(),j()}function ko(e){const t=String(e||"").toUpperCase();return t?r.cards.filter(n=>String(n.jlpt||"").toUpperCase()===t):[]}function yo(){return p()==="ru"?{courseText:"Стратегия уровня, чтения, лексика, приложения и интерактивная практика. Контент хранится в JSON, поэтому урок можно расширять без изменения логики.",apps:"Приложения и интерфейсы",kana:"Хирагана и катакана",hiragana:"Хирагана",katakana:"Катакана",kanjiFocus:"Кандзи с фуриганой",sentenceDrill:"Поставь кандзи в пропуск",fillBlanks:"Заполни пропуск плитками по порядку.",check:"Проверить",undo:"Убрать",clear:"Очистить",next:"Следующее",correct:"Верно. +8 XP и +1 Moon Fragment.",wrong:"Почти. Проверь порядок плиток и попробуй ещё раз."}:{courseText:"Level strategy, readings, vocabulary, apps, and interactive practice. Content lives in JSON, so lessons can grow without changing app logic.",apps:"Apps and interfaces",kana:"Hiragana and katakana",hiragana:"Hiragana",katakana:"Katakana",kanjiFocus:"Kanji with furigana",sentenceDrill:"Place kanji into the blank",fillBlanks:"Fill the blank with tiles in order.",check:"Check",undo:"Undo",clear:"Clear",next:"Next",correct:"Correct. +8 XP and +1 Moon Fragment.",wrong:"Almost. Check the tile order and try again."}}function $o(){return p()==="ru"?{back:"К учебнику",courseMap:"Полноценный JLPT-модуль",courseText:"Краткая стратегия уровня, чтения, лексика и практика. Данные хранятся в JSON, поэтому урок можно расширять без изменения логики.",available:"кандзи уровня",learned:"изучено",mastered:"освоено",goals:"Цели уровня",practice:"Практика",checkpoint:"Чекпоинт"}:{back:"Back to textbook",courseMap:"Full JLPT module",courseText:"Level strategy, readings, vocabulary, and practice. The content lives in JSON, so lessons can grow without changing app logic.",available:"level kanji",learned:"learned",mastered:"mastered",goals:"Level goals",practice:"Practice",checkpoint:"Checkpoint"}}function ya(e){const t=r.rewards?.levelCurve||{baseXp:100,growth:1.35};let n=1,s=e;for(;s>=Qs(n,t)&&n<100;)s-=Qs(n,t),n+=1;return n}function jt(){const e=r.rewards?.levelCurve||{baseXp:100,growth:1.35};let t=1,n=r.progress.xp;for(;n>=Qs(t,e)&&t<100;)n-=Qs(t,e),t+=1;const s=Qs(t,e);return{current:n,next:s,toNext:Math.max(0,s-n),percent:I(n,s)}}function Qs(e,t){return Math.round(t.baseXp*Math.pow(t.growth,e-1))}function t$(){const e={app:"Flash Kanji",exportedAt:new Date().toISOString(),progress:r.progress,customization:r.customization},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`flash-kanji-progress-${W()}.json`,document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(n),E(S("export"))}function Zt(e,t={}){try{return typeof window.ym!="function"?!1:(window.ym(dp,"reachGoal",e,t),!0)}catch(n){return console.warn("Metric goal failed.",n),!1}}function n$(e){return{level:e.dataset.shareLevel||e.dataset.level||"",lessonId:e.dataset.shareLessonId||e.dataset.lessonId||e.dataset.lesson||"",toastKey:e.dataset.shareToastKey||"",reward:e.dataset.shareReward&&r.rewardModal||null}}function F(e){const t=String(e||"").toUpperCase();return be.includes(t)?t:""}function xe(e){if(!e||typeof e!="object")return null;const t=F(e.level),n=String(e.lessonId||"");if(!t||!n)return null;const s=typeof e.updatedAt=="string"&&e.updatedAt?e.updatedAt:new Date().toISOString();return{level:t,lessonId:n,updatedAt:s,source:typeof e.source=="string"&&e.source?e.source:"open"}}function s$(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const a=F(n),o=xe({...typeof s=="object"&&s?s:{},level:a||n});a&&o&&(t[a]=o)}),t}function es(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const a=String(n||"").trim();if(a){if(typeof s=="string"&&s.trim()){t[a]=s.trim();return}if(s&&typeof s=="object"){const o=typeof s.viewedAt=="string"&&s.viewedAt?s.viewedAt:typeof s.updatedAt=="string"&&s.updatedAt?s.updatedAt:new Date().toISOString();t[a]=o;return}s&&(t[a]=new Date().toISOString())}}),t}function $a(e,t){const n=F(e),s=String(t||"");return!n||!s?!1:ba(n).some(a=>a.id===s)}function Ku(e){return ba(e)[0]?.id||""}function r$(e=""){const t=F(e);if(t){const a=xe(r.progress.lastOpenedJlptLessons?.[t]||null)||(xe(r.progress.lastOpenedJlptLesson||null)?.level===t?xe(r.progress.lastOpenedJlptLesson||null):null);return a&&$a(t,a.lessonId)?a:null}const n=[xe(r.progress.lastOpenedJlptLesson||null),...Object.values(r.progress.lastOpenedJlptLessons||{}).map(a=>xe(a)).filter(Boolean)].filter(Boolean);return n.sort((a,o)=>(Date.parse(o.updatedAt||"")||0)-(Date.parse(a.updatedAt||"")||0)),n.find(a=>$a(a.level,a.lessonId))||null}function a$(e=""){const t=F(e);if(t)return xe(r.progress.lastOpenedJlptLessons?.[t]||null)||(xe(r.progress.lastOpenedJlptLesson||null)?.level===t?xe(r.progress.lastOpenedJlptLesson||null):null);const n=[xe(r.progress.lastOpenedJlptLesson||null),...Object.values(r.progress.lastOpenedJlptLessons||{}).map(s=>xe(s)).filter(Boolean)].filter(Boolean);return n.sort((s,a)=>(Date.parse(a.updatedAt||"")||0)-(Date.parse(s.updatedAt||"")||0)),n[0]||null}function i$(e){const t=F(e);if(!t)return"";const n=be.indexOf(t);return n>=0&&n<be.length-1?be[n+1]:""}function ft(e,t,n="open"){const s=F(e),a=String(t||"");if(!s||!a)return null;const o={level:s,lessonId:a,updatedAt:new Date().toISOString(),source:n},l=xe(r.progress.lastOpenedJlptLessons?.[s]||null),c=xe(r.progress.lastOpenedJlptLesson||null);r.progress.lastOpenedJlptLessons||={},r.progress.lastOpenedJlptLessons[s]=o,r.progress.lastOpenedJlptLesson=o;const d=Xy(s,a,n),u=jn(s);return u&&u.currentLessonId!==a&&(u.currentLessonId=a),(!l||l.lessonId!==a||l.level!==s||c?.lessonId!==a||c?.level!==s||d)&&N(),o}function St(e,t="btn ghost"){const n=F(e),s=i$(n);if(!n||!s)return"";const a=Ku(s);if(!a)return"";const o=p()==="ru"?`Первый урок ${s}`:`${s} lesson 1`;return`<button class="${f(t)}" type="button" data-action="final-test-next-level" data-level="${f(n)}" data-next-level="${f(s)}" data-next-lesson="${f(a)}">${i(o)}</button>`}function Nt(){return F(r.activeJlptLesson)||F(r.activeTextbookLevel)||F(r.jlptLessons.find(e=>qe(e.jlpt))?.jlpt)||F(r.jlptLessons[0]?.jlpt)||"N5"}function o$(e,t={}){const n=String(e||r.route||"home").toLowerCase();return n==="textbooks"?"textbooks":n==="textbook"?`textbooks/${encodeURIComponent(F(t.level||r.activeTextbookLevel||Nt())||Nt())}`:n==="lesson"?`jlpt-lesson/${encodeURIComponent(F(t.level||r.activeJlptLesson||Nt())||Nt())}`:n==="srs"?"review":n==="stats"?"stats":n==="achievements"?"achievements":n==="achievement"?r.route||"home":n||"home"}function l$(e=r.route,t={}){const n=new URL(location.href);return n.search="",n.hash=o$(e,t),n.href}function c$(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=F(t.level||r.activeJlptLesson||r.activeTextbookLevel||""),a=p()==="ru",o={textbooks:a?"Учебники Flash Kanji":"Flash Kanji textbooks",textbook:a?"Учебник Flash Kanji":"Flash Kanji textbook",lesson:a?"Урок Flash Kanji":"Flash Kanji lesson",srs:a?"Повторение Flash Kanji":"Flash Kanji review",stats:a?"Статистика Flash Kanji":"Flash Kanji stats",achievements:a?"Достижения Flash Kanji":"Flash Kanji achievements",achievement:"Flash Kanji"},l=o[n]||o.achievement;return s&&["textbook","lesson"].includes(n)?`${l} ${s}`:l}function d$(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=F(t.level||r.activeJlptLesson||r.activeTextbookLevel||""),a=s?mt(s):null,o=t.lesson||(s?Yt(s):null),l=p()==="ru";if(n==="textbooks")return l?"Функциональные учебники JLPT N5-N1 внутри Flash Kanji.":"Functional JLPT N5-N1 textbooks inside Flash Kanji.";if(n==="textbook"){const c=h(a?.displayTitle||a?.title||{}),d=Number(a?.lessonCount||0),u=Number(a?.kanjiCount||0);return l?`${c||"Учебник"}: ${d} уроков и ${u} кандзи.`:`${c||"Textbook"}: ${d} lessons and ${u} kanji.`}if(n==="lesson"){const c=h(o?.title||{}),d=h(o?.summary||{});return l?`${s?`${s} · `:""}${c||"Урок"} — ${d||"урок в Flash Kanji"}.`:`${s?`${s} · `:""}${c||"Lesson"} — ${d||"a Flash Kanji lesson"}.`}return n==="srs"?l?"Очередь повторений Flash Kanji.":"Flash Kanji review queue.":n==="stats"?l?"Моя статистика и прогресс во Flash Kanji.":"My Flash Kanji stats and progress.":n==="achievements"?l?"Достижения и секреты Flash Kanji.":"Flash Kanji achievements and secrets.":n==="achievement"?h$(t.reward||r.rewardModal||{}):"Flash Kanji."}function u$(){return p()==="ru"?"Поделиться":"Share"}function ts(e=r.route,t={}){const n=F(t.level||""),s=String(t.lessonId||t.lesson?.id||""),a=t.label||u$();return`
      <button class="btn ghost share-btn" type="button" data-action="share-page" data-share-section="${f(e)}" ${n?`data-share-level="${f(n)}"`:""} ${s?`data-share-lesson-id="${f(s)}"`:""} ${t.toastKey?`data-share-toast-key="${f(t.toastKey)}"`:""}>
        <span class="btn-icon" aria-hidden="true">${p$()}</span>
        <span>${i(a)}</span>
      </button>
    `}function p$(){return`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M15 5h4v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M10 14 19 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M19 14v5H5V5h5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>
    `}function Bu(e){return e==="youtube"?`
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
    `}async function g$(e,t={}){const n=t.toastKey||"shareLinkCopied",s={title:e.title,text:e.text,url:e.url};if(e.files?.length&&navigator.canShare?.({files:e.files})&&(s.files=e.files),navigator.share)try{return await navigator.share(s),"share"}catch(o){if(o&&o.name==="AbortError")return"abort"}return await k$(e.text,e.url,n)?"copy":"failed"}async function m$(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=t.reward||r.rewardModal||null,a={section:n,title:c$(n,t),text:d$(n,t),url:l$(n,t),files:[]};if(n==="achievement"||s){const o=await v$(s||{});o&&typeof File<"u"&&(a.files=[new File([o],`flash-kanji-achievement-${r.progress.level}.png`,{type:"image/png"})])}return a}async function Fu(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s={...t};s.level||(s.level=t.level||r.activeJlptLesson||r.activeTextbookLevel||""),Zt("share_opened",{section:n,level:F(s.level)||""});const a=await m$(n,s),o=await g$(a,{toastKey:t.toastKey||"shareLinkCopied"});return o==="share"?(Zt("share_completed",{section:n,method:a.files?.length?"file":"web_share"}),!0):o==="copy"?(Zt("share_link_copied",{section:n}),Zt("share_completed",{section:n,method:"copy"}),!0):(o==="abort"||E(p()==="ru"?"Не удалось поделиться":"Share failed"),!1)}async function f$(){await Fu("achievement",{reward:r.rewardModal||{},toastKey:"shareCopied"})}function h$(e={}){const t=S("shareFallback"),n=e.level||r.progress.level,s=jt(),a=e.type==="level"?`${s.current}/${s.next}`:e.totalXp||r.progress.xp,o=e.type==="level"?r.progress.moonFragments:e.moonFragments||r.progress.moonFragments;return`${t}: ${S("level")} ${n}, ${a} XP, ${o} Moon Fragments.`}async function v$(e={}){const s=document.createElement("canvas");s.width=1200,s.height=630;const a=s.getContext("2d");if(!a)return null;w$(a,1200,630);const o=e.level||r.progress.level,l=jt(),c=e.type==="level"?`${l.current}/${l.next}`:e.totalXp||r.progress.xp,d=e.type==="level"?r.progress.moonFragments:e.moonFragments||r.progress.moonFragments,u=e.mascot||(r.progress.level%2===0?"leya":"eva"),m=aa(u,e.mood||"happy",e.dialog||e.type||"achievement"),[g,w]=await Promise.all([Ju("assets/logo.webp"),m?Ju(m):Promise.resolve(null)]);return g&&zu(a,g,58,48,330,116),w&&zu(a,w,780,95,330,450),a.fillStyle="#f7f4ee",a.font="900 58px system-ui, sans-serif",a.fillText(S("levelUp"),64,230),a.font="900 110px 'Yu Mincho', serif",a.fillStyle="#ffe15a",a.fillText(`${S("level")} ${o}`,64,340),a.font="800 38px system-ui, sans-serif",a.fillStyle="#f7f4ee",a.fillText(`${c} XP`,70,425),a.fillText(`${d} Moon Fragments`,70,482),a.fillStyle="rgba(255,255,255,0.74)",a.font="700 28px system-ui, sans-serif",a.fillText("Flash Kanji | JLPT Japanese learning",70,558),a.strokeStyle="rgba(255, 225, 90, 0.7)",a.lineWidth=3,a.strokeRect(34,30,1132,570),b$(s)}function w$(e,t,n){const s=e.createLinearGradient(0,0,t,n);s.addColorStop(0,"#08080c"),s.addColorStop(.45,"#1c1018"),s.addColorStop(1,"#071a18"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255, 56, 92, 0.22)",e.beginPath(),e.moveTo(0,70),e.lineTo(720,0),e.lineTo(560,630),e.lineTo(0,630),e.closePath(),e.fill(),e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=1;for(let a=-t;a<t*2;a+=38)e.beginPath(),e.moveTo(a,0),e.lineTo(a+t,n),e.stroke()}function Ju(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=new URL(e,location.href).href})}function zu(e,t,n,s,a,o){const l=Math.min(a/t.naturalWidth,o/t.naturalHeight),c=t.naturalWidth*l,d=t.naturalHeight*l;e.drawImage(t,n+(a-c)/2,s+(o-d)/2,c,d)}function b$(e){return new Promise(t=>e.toBlob(t,"image/png",.94))}async function k$(e,t,n="shareLinkCopied"){const s=await Uu(`${e}
${t}`);return E(s?S(n):e),s}async function Uu(e){if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",document.body.append(t),t.focus(),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{t.remove()}}async function y$(e){const t=e.target.files?.[0];if(t)try{const n=JSON.parse(await t.text());r.progress=fl(ms(),n.progress||n),jr(),n.customization&&(r.customization={...dn(),...n.customization,selected:{...dn().selected,...n.customization.selected||{}}},Rn()),hr(),ns(),N(),xt(),E(S("import")),j()}catch(n){console.error(n),E("Invalid JSON")}finally{e.target.value=""}}function $$(){if(!confirm(p()==="ru"?"Сбросить прогресс?":"Reset progress?"))return;const e=r.progress.settings;r.progress=ms(),r.progress.settings=e,r.finalTestModal=null,r.finalTestBusy=!1,jr(),ns(),N(),j()}function j$(){r.progress.settings.theme=r.progress.settings.theme==="dark"?"light":"dark",r.progress.settings.themeManuallySelected=!0,xt(),N(),j()}function S$(){r.progress.settings.language=p()==="ru"?"en":"ru",r.progress.settings.languageAutoDetected=!1,r.progress.settings.languageManuallySelected=!0,N(),j()}function Gu(){r.progress.settings.sound=!It(r.progress.settings.sound,!0),r.progress.settings.uxSound=r.progress.settings.sound,ns(),jo(),N(),E(r.progress.settings.sound?"в™Є":"Г—")}function N$(){Gu()}function Ws(){return window.FlashKanjiSound||null}function x$(){try{Ws()?.preloadSounds?.()}catch(e){console.warn("UX sounds preload failed.",e)}}function ns(){const e=Ws();!e||!r.progress?.settings||(e.setSoundEnabled?.(It(r.progress?.settings?.sound,!0)),e.setSoundVolume?.(Sa()))}function ja(){return It(r.progress?.settings?.sound,!0)}function jo(){const e=ge('[data-action="sound"]');if(!e)return;const t=It(r.progress?.settings?.sound,!0),n=p()==="ru"?t?"Звук":"Звук выключен":t?"Sound":"Sound off";e.classList.toggle("is-muted",!t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",n),e.title=n,e.innerHTML=C$(t)}function C$(e){return e?`
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
      `}function L$(e){return e?`
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
      `}function A$(){const e=ge('[data-action="notification-center"]');if(!e)return;const t=r.notificationPrompt||nr(),n=!!(t.docked||r.notificationPromptVisible||La("header")),s=!!r.notificationPromptVisible,a=s?p()==="ru"?"Скрыть уведомление":"Hide notification":t.docked?p()==="ru"?"Открыть уведомление":"Open notification":p()==="ru"?"Уведомления":"Notifications";e.hidden=!n,e.classList.toggle("is-active",s),e.classList.toggle("has-prompt",!!(t.docked||s)),e.setAttribute("aria-pressed",String(s)),e.setAttribute("aria-label",a),e.title=a,e.innerHTML=L$(s)}function So(){const e=ge('[data-action="toggle-header-socials"]');if(!e)return;const t=No(),n=p()==="ru"?t?"Скрыть соцсети":"Открыть соцсети":t?"Hide social links":"Open social links";e.setAttribute("aria-expanded",String(t)),e.classList.toggle("is-active",t),e.setAttribute("aria-label",n),e.title=n}function qu(e){const t=document.querySelector(".app-header");t&&(t.classList.toggle("is-social-open",!!e),So())}function No(){return!!document.querySelector(".app-header")?.classList.contains("is-social-open")}function Sa(){const e=Number(r.progress?.settings?.uxVolume);return Number.isFinite(e)?Z(e,0,1):.75}function I$(e){const t=Z(Number(e),0,1);r.progress.settings.uxVolume=t,ns(),N()}function C(e){if(!ja())return!1;const t=()=>{try{if(!!Ws()?.playSound?.(e)){ds=Date.now();return}Ao(String(e))}catch(n){console.warn("UX sound failed.",n),Ao(String(e))}};return typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>window.setTimeout(t,0)):window.setTimeout(t,0),!0}function xt(){document.documentElement.dataset.theme=r.progress.settings.theme,document.documentElement.dataset.customTheme=r.customization?.selected?.theme||"theme_default_dark";const e=wt();document.documentElement.dataset.customRoom=e?.id||"bg_study_hub",document.documentElement.style.setProperty("--app-room-bg",T$(e?.file||"assets/bg/bg_study_hub.webp"));const t=Gf();document.documentElement.dataset.customEffect=t||"none",document.querySelector('meta[name="theme-color"]')?.setAttribute("content",r.progress.settings.theme==="light"?"#f8f7f2":"#08080c")}function T$(e){return`url("${String(e).replace(/["\\\n\r]/g,"")||"assets/bg/bg_study_hub.webp"}")`}function S(e){return r.i18n?.ui?.[e]?.[p()]||r.i18n?.ui?.[e]?.ru||e}function p(){return r.progress?.settings?.language||"ru"}function h(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function R$(e){if(!e)return"";try{return new Intl.DateTimeFormat(p()==="ru"?"ru-RU":"en-US",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch{return String(e).slice(0,16)}}function Vs(e){return p()==="en"&&r.lessonTranslations[e.id]?.title_en||e.title}function _$(e){return p()==="en"&&r.lessonTranslations[e.id]?.summary_en||e.summary}function xo(e){const t=r.lessons.find(n=>n.id===e);return t?Vs(t):""}function L(e){return ye(e,p())}function ye(e,t=p()){if(!e)return"";const n=$u(e);return n&&n.meaning?t==="en"?n.meaning.en||n.meaning.ru||e.meaning_en||r.kanjiTranslations[e.id]?.meaning_en||"":n.meaning.ru||e.meaning_ru||r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||"":t==="en"?r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||e.meaning_ru||"":e.meaning_ru||r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||""}function Ys(e){return p()==="en"?r.kanjiTranslations[e.id]?.interface_use_en||e.interface_use_en||e.interface_use||"":e.interface_use||e.interface_use_en||""}function Ce(e){if(p()!=="en")return e.translation_ru||e.translation||"";if(e.translation_en)return e.translation_en;const t=r.vocabulary.find(n=>n.word===e.word||Co(n.romaji)===Co(e.romaji));return t?.translation_en?t.translation_en:gp[Co(e.romaji)]||e.translation||""}function Co(e){return String(e||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function ss(e){return r.dialogues?.mascots?.[e]||{name:{ru:e,en:e},sprites:{},dialogs:{}}}function $e(e,t){const n=e==="eva"?M$(t):"";if(n)return n;const s=ss(e).dialogs?.[t]||ss(e).dialogs?.welcome||{},a=s[p()]||s.ru||[""];return Le(a)}function M$(e="welcome"){const t=String(e||"welcome").toLowerCase();if(!["welcome","progress","hint","lessoncomplete","masterymilestone","achievement"].includes(t))return"";const n=P$(t),s=[...r.evaAutonomyLines||[],...Pr()].filter(l=>{const c=h(l?.text||{});if(!c)return!1;const d=Array.isArray(l.tags)?l.tags:[];if(!(n.includes(l.category)||d.some(g=>n.includes(g))))return!1;const m=Hu(c);return m.length>=12&&m.length<=132}),a=s.filter(l=>!Ja.includes(l.id)),o=Le(a.length?a:s);return o?(o.id&&(Ja=[o.id,...Ja.filter(l=>l!==o.id)].slice(0,18)),Hu(h(o.text||{}))):""}function P$(e){return{welcome:["fis_study","fis_focus","fis_observation","fis_short","study","short","mood","room"],progress:["fis_reward","fis_streak","fis_review","reward","streak","review","progress"],hint:["fis_focus","fis_observation","hint","study"],lessoncomplete:["fis_reward","fis_streak","reward","study"],masterymilestone:["fis_reward","fis_streak","reward","progress"],achievement:["fis_reward","reward","achievement"]}[e]||["fis_study","study"]}function Hu(e){const t=String(e||"").replace(/\s+/g," ").trim();if(t.length<=132)return t;const n=t.match(/[^.!?гЂ'пјЃпјџ]+[.!?гЂ'пјЃпјџ]?/g)||[t];let s="";for(const a of n){const o=`${s} ${a.trim()}`.trim();if(o.length>132)break;s=o}return s.length>=12?s:`${t.slice(0,124).trimEnd()}...`}function Na(e){const t=Zs(e);return`<span class="pill ${t}">${i(pp[t]||"New")}</span>`}function Zs(e){const t=String(e||"new").toLowerCase();return t==="new"||t==="learning"||t==="review"||t==="mastered"?t:t==="New".toLowerCase()?"new":t.includes("master")?"mastered":t.includes("learn")?"learning":t.includes("review")?"review":"new"}function Xu(e){return{new:"New",learning:"Learning",review:"Review",mastered:"Mastered"}[Zs(e)]}function Lo(e){const t=(e.correct||0)+(e.wrong||0);return t?Math.round((e.correct||0)/t*100):0}function E$(){const e=getComputedStyle(document.documentElement);return{text:e.getPropertyValue("--text").trim(),muted:e.getPropertyValue("--muted").trim(),line:e.getPropertyValue("--line").trim(),red:e.getPropertyValue("--accent").trim(),yellow:e.getPropertyValue("--accent-2").trim(),green:e.getPropertyValue("--accent-3").trim(),blue:e.getPropertyValue("--accent-4").trim(),danger:e.getPropertyValue("--danger").trim(),pink:"#ff91d8",blueSoft:"rgba(67, 214, 255, 0.16)",dangerSoft:"rgba(255, 107, 95, 0.16)"}}function D$(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.text}}},scales:{x:{ticks:{color:e.muted},grid:{color:e.line}},y:{beginAtZero:!0,ticks:{color:e.muted,precision:0},grid:{color:e.line}}}}}function xa(){try{return cr||=new(window.AudioContext||window.webkitAudioContext),cr.state==="suspended"&&cr.resume().catch(()=>null),cr}catch(e){return console.warn("Audio context unavailable.",e),null}}function O$(e){const t=String(e||"").toLowerCase();return t.includes("wrong")||t.includes("failed")?{type:"triangle",frequencies:[180],duration:.22,peak:.12,interval:0}:t.includes("correct")||t.includes("success")?{type:"triangle",frequencies:[440,554.37],duration:.18,peak:.11,interval:.09}:t.includes("level")||t.includes("achievement")||t.includes("reward")||t.includes("xp")||t.includes("moon")||t.includes("unlock")?{type:"sine",frequencies:[523.25,659.25,783.99],duration:.26,peak:.1,interval:.08}:t.includes("close")?{type:"square",frequencies:[260],duration:.12,peak:.08,interval:0}:t.includes("open")||t.includes("button")||t.includes("click")||t.includes("tab")||t.includes("page")?{type:"sine",frequencies:[320],duration:.09,peak:.08,interval:0}:{type:"sine",frequencies:[360],duration:.16,peak:.08,interval:0}}function Ao(e){const t=xa();if(!t)return!1;try{const n=O$(e),s=t.currentTime+.01;return n.frequencies.forEach((a,o)=>{const l=t.createOscillator(),c=t.createGain();l.type=n.type,l.frequency.value=a;const d=s+n.interval*o;c.gain.setValueAtTime(1e-4,d),c.gain.exponentialRampToValueAtTime(n.peak,d+.02),c.gain.exponentialRampToValueAtTime(1e-4,d+n.duration),l.connect(c).connect(t.destination),l.start(d),l.stop(d+n.duration+.02)}),ds=Date.now(),!0}catch(n){return console.warn("Fallback UX tone failed.",n),!1}}window.FlashKanjiUxToneFallback=Ao;function K$(){const e=()=>{const t=xa();t?.state==="suspended"&&t.resume().catch(()=>null)};["pointerdown","touchstart","keydown","mousedown"].forEach(t=>{document.addEventListener(t,e,{once:!0,passive:!0,capture:!0})})}function er(e){if(r.progress.settings.sound){if(Ws()){C(e==="again"?"answer_wrong":"answer_correct");return}try{const t=xa();if(!t)return;ds=Date.now();const n=t.createOscillator(),s=t.createGain(),a=t.currentTime;n.type="triangle",n.frequency.value=e==="again"?180:480,s.gain.setValueAtTime(1e-4,a),s.gain.exponentialRampToValueAtTime(.13,a+.015),s.gain.exponentialRampToValueAtTime(1e-4,a+.18),n.connect(s).connect(t.destination),n.start(a),n.stop(a+.2)}catch(t){console.warn("Audio unavailable.",t)}}}function B$(){if(r.progress.settings.sound)try{const e=xa();if(!e)return;ds=Date.now();const t=e.currentTime;[523.25,659.25,783.99].forEach((n,s)=>{const a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.value=n;const l=t+s*.08;o.gain.setValueAtTime(1e-4,l),o.gain.exponentialRampToValueAtTime(.12,l+.02),o.gain.exponentialRampToValueAtTime(1e-4,l+.24),a.connect(o).connect(e.destination),a.start(l),a.stop(l+.26)})}catch(e){console.warn("Achievement sound unavailable.",e)}}function F$(){const e=document.createElement("div");e.className="confetti",e.innerHTML=Array.from({length:34},(t,n)=>`<i style="--x:${Math.random()*100}vw;--d:${Math.random()*.8+.8}s;--r:${Math.random()*360}deg;--c:${n%4}"></i>`).join(""),document.body.append(e),window.setTimeout(()=>e.remove(),1800)}function E(e){const t=ge("#toast");t.textContent=e,t.hidden=!1,clearTimeout(Yo),Yo=window.setTimeout(()=>{t.hidden=!0},2400)}function J$(){return`
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
      </section>`}function z$(e){return`<section class="empty-state" style="margin-top:24px"><span class="kanji-char">警</span><h1>Data error</h1><p>${i(e.message)}</p></section>`}function U$(){try{[or,Ta,lr,"flashKanji.lastForcedBuild"].forEach(t=>{try{localStorage.removeItem(t)}catch(n){console.warn(`Could not remove recovery key ${t}.`,n)}})}catch(e){console.warn("Could not clear Flash Kanji recovery markers during boot recovery.",e)}}async function G$(){if("caches"in window){const e=await caches.keys();await Promise.all(e.map(t=>caches.delete(t)))}if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(async t=>{try{await t.unregister()}catch(n){console.warn("Could not unregister service worker during boot recovery.",n)}}))}}async function q$(e){try{const t=Number(sessionStorage.getItem(Ra)||"0");if(t>=2)return!1;const n=t+1;sessionStorage.setItem(Ra,String(n)),console.warn(`[FlashKanji] Boot failed, attempting recovery stage ${n}.`,e),n>=2&&U$(),await G$();try{localStorage.removeItem(or),localStorage.removeItem(Ta),localStorage.removeItem(lr),localStorage.removeItem("flashKanji.lastForcedBuild")}catch(a){console.warn("Boot recovery marker cleanup failed.",a)}const s=new URL(location.href);return s.searchParams.set("cachebust",Date.now().toString()),s.searchParams.set("bootRecovery",String(n)),location.replace(s.toString()),!0}catch(t){return console.warn("Boot recovery failed.",t),!1}}function H$(){if(!("serviceWorker"in navigator)||location.protocol==="file:")return;let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,location.reload())}),navigator.serviceWorker.addEventListener("message",n=>{if(n.data?.type==="FLASH_KANJI_CACHE_RESET_DONE")try{localStorage.setItem(Ta,`${Ct}:done`)}catch(s){console.warn("Cannot save PWA cache reset marker.",s)}});const t=async()=>{try{const n=new URL("../service-worker.js",document.baseURI);n.searchParams.set("v",Ct);const s=await navigator.serviceWorker.register(n.href);X$(s),await s.update().catch(console.warn)}catch(n){console.warn(n)}};document.readyState==="loading"?window.addEventListener("load",()=>{t()},{once:!0}):t()}function X$(e){e&&e.addEventListener("updatefound",()=>{const t=e.installing;t&&t.addEventListener("statechange",()=>{(t.state==="installed"||t.state==="activated")&&e.update().catch(()=>null)})})}function Ca(){const e={declineCount:0,nextShowAt:0,neverShow:!1,installed:!1};try{const t=localStorage.getItem(Cn)||localStorage.getItem(ir);if(!t)return e;const n=JSON.parse(t),s={...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,installed:!!n.installed};return localStorage.getItem(Cn)||localStorage.setItem(Cn,JSON.stringify(s)),s}catch(t){return console.warn("PWA install prompt state reset.",t),e}}function Io(){try{localStorage.setItem(Cn,JSON.stringify(r.pwaInstallPrompt))}catch(e){console.warn("Cannot save PWA install prompt state.",e)}}function Q$(e){e.preventDefault(),At=e,r.progress&&r.i18n&&V$()}async function W$(){if(Zt("pwa_install_clicked",{available:!!At,ios:rs()}),tr()){Ro();return}if(!At){r.pwaInstallHelpVisible=!0,j();return}const e=At;At=null;try{if(await e.prompt(),(await e.userChoice)?.outcome==="accepted"){Ro();return}_o()}catch(t){console.warn("PWA install prompt failed.",t),_o()}}function tr(){return["standalone","fullscreen","minimal-ui"].some(t=>window.matchMedia?.(`(display-mode: ${t})`)?.matches)||Reflect.get(navigator,"standalone")===!0}function To(){const e=r.pwaInstallPrompt||Ca();if(tr()||e.installed||e.neverShow||Date.now()<Number(e.nextShowAt||0))return!1;const t=r.progress?.visits?.firstVisitDate;return!t||tn(t,W())<1?!1:!!At||rs()}function V$(){To()&&(Zt("pwa_prompt_shown",{source:At?"browser":"ios"}),C("notification_soft"),j())}function Ro(){r.pwaInstallPrompt={...Ca(),...r.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},r.pwaInstallHelpVisible=!1,Io(),Zt("pwa_installed",{platform:rs()?"ios":"browser"}),Yu(),r.progress&&r.i18n&&j()}function _o(){const e=r.pwaInstallPrompt||Ca(),t=Math.min(Number(e.declineCount||0)+1,5);r.pwaInstallPrompt={...e,declineCount:t,nextShowAt:Y$(t),neverShow:t>=5,installed:!1},Io(),j()}function Y$(e){const s={1:864e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||864e5)}function Z$(){!tr()||r.pwaInstallPrompt.installed||(r.pwaInstallPrompt={...r.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},Io())}function rs(){const e=navigator.userAgent||"",t=/iphone|ipad|ipod/i.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=/safari/i.test(e)&&!/(crios|fxios|edgios|opios|chrome|android)/i.test(e);return t&&n}function Qu(){return p()==="en"?{badge:"Offline PWA",title:"Install Flash Kanji on your home screen?",description:"Your progress, lessons and reviews will open like a real app.",iosInstruction:"Tap Share -> Add to Home Screen.",install:"Install app",later:"Later"}:{badge:"Offline PWA",title:"Установить Flash Kanji на главный экран?",description:"Так прогресс, уроки и повторения будут открываться как приложение.",iosInstruction:"Нажмите Поделиться → На экран Домой.",install:"установить приложение",later:"Позже"}}function nr(){const e={declineCount:0,nextShowAt:0,neverShow:!1,permission:typeof Notification>"u"?"unsupported":Notification.permission,enabled:!1,acceptedAt:null,lastAskedAt:0,lastShown:{},periodicSync:!1,docked:!1};try{const t=localStorage.getItem(oe);if(!t)return e;const n=JSON.parse(t);return{...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,enabled:!!n.enabled,lastShown:n.lastShown&&typeof n.lastShown=="object"?n.lastShown:{},docked:!!n.docked}}catch(t){return console.warn("Notification prompt state reset.",t),e}}function en(){try{localStorage.setItem(oe,JSON.stringify(r.notificationPrompt))}catch(e){console.warn("Cannot save notification prompt state.",e)}}function sr(){clearTimeout(Da),Da=0}function ej(){sr(),r.notificationPromptVisible&&(Da=window.setTimeout(()=>{r.notificationPromptVisible&&Wu()},5e3))}function Wu(){sr(),!(!r.notificationPromptVisible&&r.notificationPrompt?.docked)&&(r.notificationPromptVisible=!1,r.notificationPrompt={...r.notificationPrompt,docked:!0},en(),j())}function Vu(){return tr()||!!r.pwaInstallPrompt?.installed}function La(e="usage"){const t=r.notificationPrompt||nr();return!(!("Notification"in window)||t.neverShow||t.enabled||!Vu()||Notification.permission==="granted"||Notification.permission==="denied"||Date.now()<Number(t.nextShowAt||0)||e!=="lesson_complete"&&Date.now()-Ua<2*60*1e3)}function Aa(e="usage"){return La(e)?(r.notificationPromptVisible=!0,r.notificationPrompt={...r.notificationPrompt,docked:!1},en(),C("notification_soft"),ej(),j(),!0):("Notification"in window&&Notification.permission==="granted"&&Zu(),!1)}function Yu(){if(clearTimeout(Zo),!Vu())return;const e=Math.max(0,2*60*1e3-(Date.now()-Ua));Zo=window.setTimeout(()=>Aa("usage"),e)}async function tj(){if(r.notificationPromptVisible=!1,sr(),!("Notification"in window)){Ia();return}try{const e=Notification.permission==="granted"?"granted":await Notification.requestPermission();if(r.notificationPrompt.permission=e,r.notificationPrompt.lastAskedAt=Date.now(),e==="granted"){Zu(),E(tp().enabled),j();return}Ia()}catch(e){console.warn("Notification permission failed.",e),Ia()}}function Zu(){!("Notification"in window)||Notification.permission!=="granted"||(sr(),r.notificationPrompt={...nr(),...r.notificationPrompt,permission:"granted",enabled:!0,neverShow:!0,docked:!1,acceptedAt:r.notificationPrompt.acceptedAt||new Date().toISOString(),nextShowAt:0},en(),Mo())}function Ia(){const e=r.notificationPrompt||nr(),t=Math.min(Number(e.declineCount||0)+1,5);r.notificationPromptVisible=!1,sr(),r.notificationPrompt={...e,permission:"Notification"in window?Notification.permission:"unsupported",declineCount:t,nextShowAt:nj(t),neverShow:t>=5,enabled:!1,docked:!1,lastAskedAt:Date.now()},en(),j()}function nj(e){const s={1:432e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||12*36e5)}function Mo(){!("Notification"in window)||Notification.permission!=="granted"||(r.notificationPrompt.permission="granted",r.notificationPrompt.enabled=!0,en(),za.forEach(e=>clearTimeout(e)),za.clear(),[{type:"daily_bonus",hour:9,minute:0},{type:"lesson",hour:11,minute:30},{type:"review",hour:18,minute:0},{type:"streak",hour:20,minute:30}].forEach(e=>ep(e.type,sj(e.hour,e.minute))),oj())}function ep(e,t){const n=Math.max(1e3,Math.min(t.getTime()-Date.now(),2147483647)),s=window.setTimeout(async()=>{await rj(e),ep(e,np(t,1))},n);za.set(e,s)}function sj(e,t){const n=new Date;return n.setHours(e,t,0,0),n.getTime()<=Date.now()+60*1e3&&n.setDate(n.getDate()+1),n}async function rj(e){if(!aj(e))return!1;const t=ij(e);try{const n=await navigator.serviceWorker?.ready;return n?.showNotification?await n.showNotification(t.title,t.options):"Notification"in window&&Notification.permission==="granted"&&new Notification(t.title,t.options),C(e==="daily_bonus"?"notification_reward":"notification_reminder"),r.notificationPrompt.lastShown[e]=W(),en(),!0}catch(n){return console.warn("Notification show failed.",n),!1}}function aj(e){if(!("Notification"in window)||Notification.permission!=="granted"||r.notificationPrompt.lastShown?.[e]===W())return!1;if(e==="review")return Ne()>0;if(e==="daily_bonus"){const t=yr(r.progress.dailyBonusPending);return!!r.progress.visits?.firstVisitDate&&!!t&&t.availableOn<=W()&&!r.progress.dailyBonuses[W()]}return e==="lesson"?Ry().length>0:e==="streak"?(r.progress.streak.current||r.progress.visits?.streak||0)>0:!0}function ij(e){const t=p()==="ru",n={review:{title:"Flash Kanji",body:t?"Ваши кандзи ждут повторения.":"Your kanji are waiting for review.",url:"./index.html#review"},streak:{title:t?"Лея рядом 🌙":"Leya is nearby рџЊ™",body:t?"Не потеряйте свою серию дней.":"Do not lose your daily streak.",url:"./index.html#home"},daily_bonus:{title:t?"Ежедневный бонус":"Daily Bonus",body:t?"Заберите XP и Moon Fragments.":"Claim XP and Moon Fragments.",url:"./index.html#home"},lesson:{title:t?"Новые знания ждут":"New knowledge awaits",body:t?"Продолжите изучение кандзи.":"Continue learning kanji.",url:"./index.html#textbooks"}},s=n[e]||n.review;return{title:s.title,options:{body:s.body,tag:`flash-kanji-${e}`,renotify:!1,icon:"./assets/icon-192.png",badge:"./assets/icon-192.png",data:{url:s.url,type:e}}}}async function oj(){try{const e=await navigator.serviceWorker?.ready;if(!e?.periodicSync)return;await e.periodicSync.register("flash-kanji-daily",{minInterval:24*60*60*1e3}),r.notificationPrompt.periodicSync=!0,en()}catch{r.notificationPrompt.periodicSync=!1,en()}}function tp(){return p()==="en"?{badge:"PWA reminders",title:"Allow Flash Kanji notifications?",description:"We will remind you about reviews, streaks and daily bonuses.",allow:"Allow",later:"Later",enabled:"Notifications enabled"}:{badge:"PWA напоминания",title:"Разрешить уведомления Flash Kanji?",description:"Мы напомним о повторениях, серии и ежедневном бонусе.",allow:"Разрешить",later:"Позже",enabled:"Уведомления включены"}}function H(e){return{...e,history:[...e.history||[]]}}function np(e,t){return new Date(e.getTime()+t*24*60*60*1e3)}function lj(){const e=new Date;return e.setHours(23,59,59,999),e}function W(){return Po(new Date)}function Po(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Eo(e){const[t,n,s]=e.split("-").map(Number);return new Date(t,n-1,s)}function tn(e,t){return Math.round((Eo(t)-Eo(e))/864e5)}function sp(e,t){const n=Eo(e);return n.setDate(n.getDate()+t),Po(n)}function cj(e){return Array.from({length:e},(t,n)=>{const s=new Date;return s.setDate(s.getDate()-(e-1-n)),Po(s)})}function Nn(e){if(!e)return p()==="ru"?"сейчас":"now";const t=new Date(e).getTime()-Date.now();if(t<=0)return p()==="ru"?"сейчас":"now";const n=Math.ceil(t/6e4);if(n<60)return p()==="ru"?`через ${n} мин.`:`in ${n} min`;const s=Math.ceil(n/60);if(s<24)return p()==="ru"?`через ${s} ч.`:`in ${s} h`;const a=Math.ceil(s/24);return p()==="ru"?`через ${a} дн.`:`in ${a} d`}function I(e,t){return t?Z(Math.round(e/t*100),0,100):0}function Z(e,t,n){return Math.max(t,Math.min(n,e))}function as(e,t){const n=10**t;return Math.round(e*n)/n}function Le(e){return e[Math.floor(Math.random()*e.length)]}function nn(e,t){return Math.floor(Number(e)+Math.random()*(Number(t)-Number(e)))}function rr(e,t){return String(e)===String(t)?"selected":""}function rp(){const e=decodeURIComponent(location.hash.replace("#",""));if(/^jlpt\/n[1-5](?:\/|$)/i.test(e))return"textbooks";const t=e.split("/")[0];return Ho.includes(t)?t:"home"}function Do(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^kanji\/([^/?]+)/);return t?t[1]:""}function ap(){const e=decodeURIComponent(location.hash.replace("#","")),t=e.match(/^textbooks\/([^/?#]+)/i)||e.match(/^jlpt\/([^/?#]+)/i);return t?String(t[1]||"").toUpperCase():""}function ip(){const e=decodeURIComponent(location.hash.replace("#","")),t=e.match(/^textbooks\/[^/?#]+\/([^?#]+)/i)||e.match(/^jlpt\/[^/?#]+\/([^?#]+)/i);return t?String(t[1]||""):""}function op(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^learn(?:\/([^/?#]+))?/i),n=String(t?.[1]||"").toLowerCase();return n===Lt?Lt:n===sn?sn:cs}function lp(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^learn\/lesson\/([^/?#]+)/i);return t?String(t[1]||""):""}function cp(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^learn\/legacy\/([^/?#]+)/i);return t?String(t[1]||""):""}function Oo(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^jlpt-lesson\/([^/?#]+)/i);return t?String(t[1]||"").toUpperCase():""}function dj(){return bn().filter(e=>is(e.id)).length}function is(e){const t=r.progress?.achievements?.[e];return!!(t&&(t===!0||typeof t=="string"||t.unlockedAt||t.rewardXp!==void 0))}function i(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function f(e){return i(e)}})();
