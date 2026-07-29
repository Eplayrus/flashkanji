(function(){const N=document.createElement("link").relList;if(N&&N.supports&&N.supports("modulepreload"))return;for(const B of document.querySelectorAll('link[rel="modulepreload"]'))W(B);new MutationObserver(B=>{for(const ee of B)if(ee.type==="childList")for(const G of ee.addedNodes)G.tagName==="LINK"&&G.rel==="modulepreload"&&W(G)}).observe(document,{childList:!0,subtree:!0});function _(B){const ee={};return B.integrity&&(ee.integrity=B.integrity),B.referrerPolicy&&(ee.referrerPolicy=B.referrerPolicy),B.crossOrigin==="use-credentials"?ee.credentials="include":B.crossOrigin==="anonymous"?ee.credentials="omit":ee.credentials="same-origin",ee}function W(B){if(B.ep)return;B.ep=!0;const ee=_(B);fetch(B.href,ee)}})();const AN="modulepreload",CN=function(C,N){return new URL(C,N).href},Tg={},Ig=function(N,_,W){let B=Promise.resolve();if(_&&_.length>0){const G=document.getElementsByTagName("link"),te=document.querySelector("meta[property=csp-nonce]"),Le=te?.nonce||te?.getAttribute("nonce");B=Promise.allSettled(_.map(be=>{if(be=CN(be,W),be in Tg)return;Tg[be]=!0;const wt=be.endsWith(".css"),Es=wt?'[rel="stylesheet"]':"";if(!!W)for(let Xt=G.length-1;Xt>=0;Xt--){const Qt=G[Xt];if(Qt.href===be&&(!wt||Qt.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${be}"]${Es}`))return;const bt=document.createElement("link");if(bt.rel=wt?"stylesheet":AN,wt||(bt.as="script"),bt.crossOrigin="",bt.href=be,Le&&bt.setAttribute("nonce",Le),document.head.appendChild(bt),wt)return new Promise((Xt,Qt)=>{bt.addEventListener("load",Xt),bt.addEventListener("error",()=>Qt(new Error(`Unable to preload CSS for ${be}`)))})}))}function ee(G){const te=new Event("vite:preloadError",{cancelable:!0});if(te.payload=G,window.dispatchEvent(te),!te.defaultPrevented)throw G}return B.then(G=>{for(const te of G||[])te.status==="rejected"&&ee(te.reason);return N().catch(ee)})},Kg=["home","learn","review","dictionary","download","about","kanji","stats","achievements","eva-room","jlpt-lesson","textbooks"];function El(C){let N=C.replace(/^#/,"");try{N=decodeURIComponent(N)}catch{N=""}const _=N.split("/").filter(Boolean),W=_[0]?.toLowerCase()||"home";return{route:W==="jlpt"&&/^n[1-5]$/i.test(_[1]||"")?"textbooks":Kg.includes(W)?W:"home",raw:N,segments:_}}function LN(){let C=0,N=null;return{begin(_){N?.abort(),N=new AbortController;const W=++C,B=N;return{route:_,token:W,signal:B.signal,isCurrent:()=>C===W&&!B.signal.aborted}},abort(){N?.abort()}}}function TN(C){const N=()=>C(El(window.location.hash));return window.addEventListener("hashchange",N),()=>window.removeEventListener("hashchange",N)}const Br=[5,60,12*60,24*60,2*24*60,4*24*60],Pl={again:"Again",forgot:"Again",hard:"Hard",good:"Good",remember:"Good",easy:"Easy"};function gi(C){const N=C&&typeof C=="object"?C:{},_=RN(N.state??N.stage),W=_N(N.dueAt??N.nextReview),B=Ln(N.reviewCount??N.reviews,0),ee=Ln(N.correct,0),G=Ln(N.wrong,0),te={...N,state:_,dueAt:W,reviewCount:B,intervalDays:Ln(N.intervalDays,0),easeFactor:Ln(N.easeFactor,2.5),srsStep:Ln(N.srsStep,_==="New"?-1:0),lapses:Ln(N.lapses,0),correct:ee,wrong:G,successRate:Ln(N.successRate,ee+G?Math.round(ee/(ee+G)*100):0),history:Array.isArray(N.history)?N.history.slice(-120):[]};return delete te.nextReview,delete te.reviews,delete te.stage,delete te.lastReview,te}function ue(C,N,_=N,W=new Date){const B=gi(C),ee=IN(B,N),G={...B,history:[...B.history]};let te=B.srsStep,Le=B.easeFactor;ee==="again"?(te=0,Le=Math.max(1.3,Le-.2),G.state="Learning",G.wrong+=1,B.state!=="New"&&(G.lapses+=1)):ee==="hard"?(te=Math.max(1,te),Le=Math.max(1.3,Le-.15),G.correct+=1):ee==="easy"?(te=te<0?2:te+2,Le=Math.min(3.2,Le+.15),G.correct+=1):(te=te<0?0:te+1,G.correct+=1);const be=MN(te)/1440;return ee!=="again"&&(G.state=be<1?"Learning":"Review"),G.correct>=8&&be>=30&&(G.state="Mastered"),G.srsStep=te,G.easeFactor=Rg(Le,2),G.intervalDays=Rg(be,6),G.dueAt=new Date(W.getTime()+be*864e5).toISOString(),G.reviewCount+=1,G.successRate=Math.round(G.correct/Math.max(G.correct+G.wrong,1)*100),G.lastReviewedAt=W.toISOString(),G.lastRating=Pl[_]||Pl[ee],G.lastDecision=Pl[ee],G.history=[...G.history,{at:W.toISOString(),rating:G.lastRating,decision:G.lastDecision,from:B.state,to:G.state,intervalDays:be,srsStep:te}].slice(-120),G}function IN(C,N){return N==="again"||N==="forgot"?"again":N!=="remember"?N:C.state==="New"?"good":C.state==="Learning"?C.successRate>=70||C.correct>=2?"good":"hard":C.successRate>=88&&C.correct>=5&&C.lapses<=1?"easy":C.successRate<70||C.lapses>Math.max(1,Math.floor(C.correct/3))?"hard":"good"}function RN(C){const N=String(C||"new").toLowerCase();return N.includes("master")?"Mastered":N.includes("learn")?"Learning":N.includes("review")?"Review":"New"}function _N(C){return typeof C!="string"||!Number.isFinite(Date.parse(C))?null:new Date(C).toISOString()}function Ln(C,N){const _=Number(C);return Number.isFinite(_)&&_>=0?_:N}function Rg(C,N){const _=10**N;return Math.round(C*_)/_}function MN(C){return C<Br.length?Br[Math.max(0,C)]:Br[Br.length-1]*2**(C-(Br.length-1))}const Dg="flashKanji.progress.v2",PN="flashKanji.progress.v1";function EN(C=localStorage){const N=C.getItem(Dg)||C.getItem(PN);if(!N)return null;try{const _=JSON.parse(N);if(!_||typeof _!="object")return null;const W=_;return W.progress&&typeof W.progress=="object"?W.progress:W}catch(_){return console.warn("Flash Kanji ignored damaged LocalStorage progress.",_),null}}function KN(C){return!C||typeof C!="object"?{}:Object.fromEntries(Object.entries(C).map(([N,_])=>[N,gi(_)]))}function DN(C,N=localStorage){try{return N.setItem(Dg,JSON.stringify(C)),!0}catch(_){return console.warn("Flash Kanji could not save LocalStorage progress.",_),!1}}const ON=/[\/／,、;；\s]+/u,FN=/[\u30a1-\u30f6]/g,BN=/[()[\]{}.\-‐-―]/gu;function GN(C){return String(C||"").normalize("NFKC").replace(FN,N=>String.fromCharCode(N.charCodeAt(0)-96))}function Og(C){return(Array.isArray(C)?C.join(" / "):String(C||"")).split(ON).map(_=>GN(_).replace(BN,"").trim()).filter(Boolean)}function zN(C){if(!C)return[];const N=[..._g("onyomi","On",C.onyomi),..._g("kunyomi","Kun",C.kunyomi)],_=new Set,W=N.filter(G=>{const te=G.kana;return!te||_.has(te)?!1:(_.add(te),!0)});if(W.length)return W;const B=Og(C.hiragana)[0];if(B)return[{kind:"hiragana",kana:B,label:"Kana"}];const ee=String(C.kanji||"").trim();return ee?[{kind:"kanji",kana:ee,label:"Kanji"}]:[]}function JN(C,N=-1,_=""){const W=_&&_!=="cycle"?C.filter(ee=>ee.kind===_):C;if(!W.length)return{item:null,cursor:-1};const B=(Number(N)+1)%W.length;return{item:W[B],cursor:B}}function UN(C,N={}){const _=String(C||"").trim(),W=typeof window<"u"?window:void 0,B=N.synth||W?.speechSynthesis,ee=N.Utterance||W?.SpeechSynthesisUtterance;if(!_||!B||!ee)return!1;B.cancel();const G=new ee(_);G.lang="ja-JP",G.rate=N.rate??.92,G.voice=qN(B),G.onend=()=>N.onEnd?.(),G.onerror=te=>N.onError?.(te);try{return B.speak(G),!0}catch(te){return N.onError?.(te),!1}}function _g(C,N,_){return Og(_).map(W=>({kind:C,kana:W,label:N}))}function qN(C){const N=typeof C.getVoices=="function"?C.getVoices():[];return N.find(_=>/^ja[-_]?JP$/iu.test(_.lang))||N.find(_=>/^ja/iu.test(_.lang))||null}const mi="flashKanji.hasVisited",fi="flashKanji.changelog.lastSeenVersion",Fg=new Set;function HN(C){if(!C||typeof C!="object")return null;const N=C,_=String(N.currentVersion||"").trim();if(!_)return null;const W=Array.isArray(N.entries)?N.entries.map(QN).filter(B=>!!B):[];return W.length?{currentVersion:_,entries:W}:null}function WN(C,N,_,W={}){const B=C?.currentVersion||"",ee=C?.entries.find(Le=>Le.version===B)||C?.entries[0]||null;return!C||!B||!ee||Fg.has(B)?{currentVersion:B,shouldShow:!1,shouldMarkHandled:!1,entry:null}:Pg(_,fi)===B?{currentVersion:B,shouldShow:!1,shouldMarkHandled:!1,entry:null}:!(W.hadPriorVisit||Pg(_,mi)==="true"||W.useProgressSignals!==!1&&XN(N))?{currentVersion:B,shouldShow:!1,shouldMarkHandled:!0,entry:null}:{currentVersion:B,shouldShow:!0,shouldMarkHandled:!1,entry:ee}}function Mg(C,N){const _=String(C||"").trim();_&&(Fg.add(_),Eg(N,mi,"true"),Eg(N,fi,_))}function XN(C){if(!C||typeof C!="object")return!1;const N=C;return!!(zr(N.appOpens)>0||Gr(N.lessonCompletions)>0||Gr(N.cards)>0||Gr(N.seenKanji)>0||Gr(N.daily)>0||Gr(N.favorites)>0||ZN(N.transactions)>0||zr(N.totalMoonFragmentsEarned)>0||zr(N.secrets?.evaClicks)>0||N.secrets?.nightVisit||zr(N.visits?.streak)>0||zr(N.visits?.bestStreak)>0)}function QN(C){if(!C||typeof C!="object")return null;const N=C,_=String(N.version||"").trim();return _?{version:_,date:String(N.date||"").trim(),title:VN(N.title),items:YN(N.items)}:null}function VN(C){const N=C&&typeof C=="object"?C:{};return{ru:String(N.ru||N.en||"").trim(),en:String(N.en||N.ru||"").trim()}}function YN(C){const N=C&&typeof C=="object"?C:{},_=Array.isArray(N.ru)?N.ru.map(B=>String(B||"").trim()).filter(Boolean):[],W=Array.isArray(N.en)?N.en.map(B=>String(B||"").trim()).filter(Boolean):[];return{ru:_.length?_:W,en:W.length?W:_}}function Pg(C,N){try{return C?.getItem(N)||""}catch{return""}}function Eg(C,N,_){try{C?.setItem(N,_)}catch{}}function Gr(C){return C&&typeof C=="object"&&!Array.isArray(C)?Object.keys(C).length:0}function ZN(C){return Array.isArray(C)?C.length:0}function zr(C){const N=Number(C||0);return Number.isFinite(N)?N:0}(()=>{const C="flashKanji.pwaInstallPrompt.v2",N="flashKanji.pwaInstallPrompt.v1",_="flashKanji.notificationPrompt.v1",W="flashkanji_customization",B="flashkanji_eva_state_v2",G="local-1785328212278",Le=`flashKanji.hiddenMascotSpeeches:${G}`,be="moonfarm",wt="flashKanji.appBuild.v1",Es="flashKanji.pwaCacheReset.v1",Jr="flashKanji.bootRecovery.v1",bt=109492033,Xt={instagram:"https://www.instagram.com/fallinginto_silence?igsh=MWpzYW1ncTB1a3FuNw==",youtube:"https://youtube.com/@fallingintosilence?si=cJ97__ndJ1aaaMae"},Qt="aleksey.lebedev606@gmail.com",Bg="Flash Kanji bug report",Gg="https://drive.google.com/uc?export=download&id=1lIwF4vLq2DNAQ_Hufkmve7-m3bLWpvua",zg="downloads/flash-kanji-android.apk",Jg="assets/download/android-app-screenshot.png",Ur="flashKanji.forcePwaCacheReset.v1",E={lessons:"data/lessons.json",dialogues:"data/dialogues.json",i18n:"data/i18n.json",rewards:"data/rewards.json",kanjiMeta:"data/kanji/meta.json",kanjiHints:"data/kanji/hints.json",kanjiTranslations:"data/kanji/translations.json",kanjiStrokes:"data/kanji/stroke-order-kanjivg.json",kanjiPageSources:"data/sources/kanji-page-sources.json",lessonTranslations:"data/lessons/translations.json",vocabulary:"data/vocabulary/index.json",sentences:"data/sentences/index.json",achievements:"data/achievements/index.json",jlptCatalog:"data/jlpt/index.json",jlptLessons:"data/jlpt-lessons.json",jlptPracticeLessons:"data/jlpt-practice-lessons.json",n5Meta:"data/jlpt/n5/meta.json",n5Lessons:"data/jlpt/n5/lessons.json",n5Kanji:"data/jlpt/n5/kanji.json",n5Exercises:"data/jlpt/n5/exercises.json",n5FinalTest:"data/jlpt/n5/final-test.json",n5Reading:"data/jlpt/n5/reading.json",n4Meta:"data/jlpt/n4/meta.json",n4Lessons:"data/jlpt/n4/lessons.json",n4Kanji:"data/jlpt/n4/kanji.json",n4Grammar:"data/jlpt/n4/grammar.json",n4Exercises:"data/jlpt/n4/exercises.json",n4Reading:"data/jlpt/n4/reading.json",n4Listening:"data/jlpt/n4/listening.json",n4FinalTest:"data/jlpt/n4/final-test.json",n3Meta:"data/jlpt/n3/meta.json",n3Lessons:"data/jlpt/n3/lessons.json",n3Kanji:"data/jlpt/n3/kanji.json",n3Grammar:"data/jlpt/n3/grammar.json",n3Exercises:"data/jlpt/n3/exercises.json",n3Reading:"data/jlpt/n3/reading.json",n3Listening:"data/jlpt/n3/listening.json",n3FinalTest:"data/jlpt/n3/final-test.json",n2Meta:"data/jlpt/n2/meta.json",n2Lessons:"data/jlpt/n2/lessons.json",n2Kanji:"data/jlpt/n2/kanji.json",n2Grammar:"data/jlpt/n2/grammar.json",n2Exercises:"data/jlpt/n2/exercises.json",n2Reading:"data/jlpt/n2/reading.json",n2Listening:"data/jlpt/n2/listening.json",n2FinalTest:"data/jlpt/n2/final-test.json",n1Meta:"data/jlpt/n1/meta.json",n1Lessons:"data/jlpt/n1/lessons.json",n1Kanji:"data/jlpt/n1/kanji.json",n1Grammar:"data/jlpt/n1/grammar.json",n1Exercises:"data/jlpt/n1/exercises.json",n1Reading:"data/jlpt/n1/reading.json",n1Listening:"data/jlpt/n1/listening.json",n1FinalTest:"data/jlpt/n1/final-test.json",jlptReadingMarkdown:"data/jlpt/reading-texts_N5_N1.md",jlptReadingTranslations:"data/jlpt/reading-texts_N5_N1.translations.json",monetization:"data/monetization/catalog.json",customizationShop:"data/customization-shop.json",evaBackgrounds:"data/eva-backgrounds.json",evaSprites:"data/eva-sprites.json",evaRoomDialogues:"data/eva-room-dialogues.json",evaAutonomyLines:"data/eva-autonomy-lines.json",evaExpandedDialogues:"data/eva-expanded-dialogues.json",evaFisPersonality:"data/eva-fis-personality.json",evaPresence:"data/eva-presence.json",changelog:"data/changelog.json"},Ug={forgot:"Forgot",remember:"Remember",again:"Again",hard:"Hard",good:"Good",easy:"Easy"},qg={New:"New",Learning:"Learning",Review:"Review",Mastered:"Mastered",new:"New",learning:"Learning",review:"Review",mastered:"Mastered"},_e=["N5","N4","N3","N2","N1"],ae=new Set,Hg={nihon:"Japan",kyou:"today",getsuyoubi:"Monday",ichigatsu:"January",nihonjin:"Japanese person",hitori:"one person",honya:"bookstore",ichinichi:"one day",ichiban:"number one, the best",nigatsu:"February",futari:"two people",jikan:"time, hour",nanji:"what time",kotoshi:"this year",rainen:"next year",kaimono:"shopping",kounyuu:"purchase",baiten:"kiosk, shop stall",hatsubai:"release, sale",shiyou:"use",tsukaikata:"how to use",soushin:"message sending",housou:"broadcast",sekai:"world",sedai:"generation",gyoukai:"industry",toukou:"post, publication",toushi:"investment",jouhou:"information",houkoku:"report",kakunin:"confirmation, check",shounin:"approval",kaigi:"meeting",giron:"discussion",kengen:"access rights, permission",chosakuken:"copyright",eikyou:"influence",hibiku:"to sound, to resonate"},Kl={xp:12,coins:2},Dl="flashKanjiOnboardingCompleted.v3",Ol="flashKanjiOnboardingCompleted",Fl="flashKanjiOnboardingAudience.v1",Wg=850,Bl=450,Xg=420,Qg=[...Kg],Ks=72,Vg=96,Gl=1,zl="N5",Ds="map",Vt="lesson",Tn="legacy",ke="intro-kanji",Zn="review-due",es="n5-checkpoint",Yg=[ke,"n5-lesson-1","n5-lesson-2","n5-lesson-3","n5-lesson-4","n5-lesson-5","n5-lesson-6","n5-lesson-7","n5-lesson-8","n5-lesson-9","n5-lesson-10",es],Zg={"n5-lesson-1":"data/textbooks/n5/lesson-1.json"},em=new Set(["lesson-1","lesson-2","bulk-n5-01"]),Jl=7e3,Ul=8e3,tm=new Set(["dictionary","kanji","stats","jlpt-lesson","textbooks"]),r={route:Tl(),lessons:[],cards:[],i18n:null,dialogues:null,rewards:null,kanjiMeta:{},kanjiHints:{},kanjiTranslations:{},kanjiStrokes:{},kanjiPageSources:{},lessonTranslations:{},vocabulary:[],sentenceExercises:[],achievements:[],achievementCategories:[],jlptCatalog:{version:1,generatedAt:null,items:[]},jlptLessons:[],jlptPracticeLessons:[],n5Meta:null,n5Textbook:null,n5KanjiCatalog:[],n5Exercises:null,n5FinalTest:null,n4Meta:null,n4Textbook:null,n4KanjiCatalog:[],n4Grammar:[],n4Exercises:null,n4Reading:[],n4Listening:[],n4FinalTest:null,n5Reading:[],n3Meta:null,n3Textbook:null,n3KanjiCatalog:[],n3Grammar:[],n3Exercises:null,n3Reading:[],n3Listening:[],n3FinalTest:null,n2Meta:null,n2Textbook:null,n2KanjiCatalog:[],n2Grammar:[],n2Exercises:null,n2Reading:[],n2Listening:[],n2FinalTest:null,n1Meta:null,n1Textbook:null,n1KanjiCatalog:[],n1Grammar:[],n1Exercises:null,n1Reading:[],n1Listening:[],n1FinalTest:null,jlptReadingMarkdown:"",jlptReadingByLevel:{N5:[],N4:[],N3:[],N2:[],N1:[]},jlptReadingTranslations:{},monetization:null,customizationCatalog:{categories:[],items:[]},customization:null,evaBackgrounds:[],evaSprites:{},evaRoomDialogues:[],evaRoomLines:[],evaAutonomyLines:[],evaFisPersonality:null,evaPresence:null,evaRuntime:null,evaRoomShopOpen:!1,progress:null,activeLessonId:null,activeJlptLesson:Ml()||null,activeTextbookLevel:Rl()||null,activeTextbookSubroute:_l()||null,activeLearnView:Ag(),activeLearnNodeId:Cg()||null,activeLearnLegacyLessonId:Lg()||null,learningPathLessonPayloads:{},activeCardId:null,activeExerciseReviewId:null,activeExerciseReviewLevel:"",activeExerciseReviewSource:"",activeExerciseReviewSelection:[],activeExerciseReviewChoice:"",activeExerciseReviewTranslationOpen:!1,reviewQueueLastKind:"",reviewSession:null,kanjiPageId:Il(),revealed:!1,detailCardId:null,rewardModal:null,rewardQueue:[],finalTestModal:null,finalTestBusy:!1,contactModal:!1,pwaInstallHelpVisible:!1,charts:[],filters:{query:"",jlpt:"all",strokes:"all",radical:"all",favorites:"all"},dictionaryVisibleCount:Ks,shopFilters:{category:"all",view:"all",sort:"featured"},sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[]},readingExercises:{},reviewExerciseResults:{},readingCheck:{cardId:null,value:"",status:null,message:""},writingStep:0,activeLearnJlpt:"all",navMenu:null,pendingFocus:null,pwaInstallPrompt:li(),notificationPrompt:Dr(),notificationPromptVisible:!1,changelog:null,changelogModal:null,deferredDataLoaded:!1,deferredDataLoading:!1};Tl()==="textbooks"&&Pt(Ng(Rl(),_l()));const nm=LN();let qr=null,kt=null,ql="",Hl=new Map,Os=0,Wl=0,ts=0,In=0,hi=!1,Rn=0,vi=!1,_n=0,Hr=!1,Xl=!1,Ql=!1,Wr=0,Xr=!1,Qr=null,Yt=null,Vl=0,wi=0,ns=0,Fs=0,bi=null,de=null,Fe=null,je=null,yt=-1,lt=!1,ve="step",$t=null,Yl=null,sm=null,rm=null,Bs=null,Gs=0,Zl=0,zs=null,Vr=null,Js=null;const Yr=new Map;let ki=0,yi=0,$i=Math.floor(Date.now()/6e4),ec=0,Zr="",ji=[];const Si=new Map,Mn=new Map,Ni=new Set,xi=Date.now();typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const X={cardId:null,strokes:[],currentStroke:[],drawing:!1,activePointerId:null,completed:!1,demoAnimationId:0},Se=(e,t=document)=>t.querySelector(e),Ai=(e,t=document)=>Array.from(t.querySelectorAll(e)),Zt=Se("#app"),tc=Se("#progressImport");document.addEventListener("click",zf),document.addEventListener("pointerdown",Jf),document.addEventListener("input",Wc),document.addEventListener("change",Wc),document.addEventListener("keydown",Wf),window.flashKanjiFarmMoon=(e=5e3)=>Xc(e),window.startFlashKanjiOnboarding=no,tc.addEventListener("change",a0),window.addEventListener("beforeinstallprompt",_0),window.addEventListener("appinstalled",Nl),window.addEventListener("scroll",ro,{passive:!0}),window.addEventListener("resize",ro),window.addEventListener("eva:event",e=>{e.detail?.handledByFlashKanji||yd(e.detail||{})}),document.addEventListener("visibilitychange",()=>{document.hidden||di("usage"),!document.hidden&&r.route==="eva-room"&&er("return")&&(j(),x()),document.hidden&&Ji()}),window.addEventListener("pagehide",Ji),window.addEventListener("beforeunload",Ji),TN(()=>{const e=Tl(),t=Il(),n=e==="textbooks"?Rl():null,s=e==="textbooks"?_l():null,a=e==="jlpt-lesson"?Ml():null,o=e==="learn"?Ag():Ds,c=e==="learn"?Cg():null,l=e==="learn"?Lg():null;if(e!==r.route||e==="kanji"&&t!==r.kanjiPageId||e==="textbooks"&&n!==r.activeTextbookLevel||e==="textbooks"&&s!==r.activeTextbookSubroute||e==="jlpt-lesson"&&a!==r.activeJlptLesson||e==="learn"&&o!==r.activeLearnView||e==="learn"&&c!==r.activeLearnNodeId||e==="learn"&&l!==r.activeLearnLegacyLessonId){const d=r.route;r.route=e,d!==e&&(d==="review"||e==="review")&&(r.reviewSession=null),r.kanjiPageId=e==="kanji"?t:null,r.activeTextbookLevel=e==="textbooks"?n:null,r.activeTextbookSubroute=e==="textbooks"?s:null,r.activeJlptLesson=e==="jlpt-lesson"?a:r.activeJlptLesson,r.activeLearnView=e==="learn"?o:Ds,r.activeLearnNodeId=e==="learn"?c:null,r.activeLearnLegacyLessonId=e==="learn"?l:null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.pendingFocus=null,e!=="eva-room"&&(r.evaRoomShopOpen=!1),_t(),ga(),xt(),Us(e)&&Ti({route:e,delay:0}),e==="eva-room"&&$e("room_opened")}}),am();async function am(){if(!await vm()&&!await hm()){nc(!0),Zt.innerHTML.trim()?Zt.setAttribute("aria-busy","true"):Zt.innerHTML=x0(),r.progress=cf(),Rs(),vl(),j0(),wl(),Wt();try{const[e,t,n,s,a,o,c]=await Promise.all([sc({initialOnly:!0}),Qe(E.i18n),Qe(E.dialogues),Qe(E.rewards,um),Qe(E.achievements,()=>({achievements:[],categories:[]})),Qe(E.jlptCatalog,()=>({version:1,generatedAt:null,items:[]})),Qe(E.jlptLessons,()=>({items:[]}))]),l=wc(a,s.achievements||[]);r.lessons=e.lessons,r.cards=e.cards,r.i18n=t,r.dialogues=n,r.rewards=s,r.achievements=l.items,r.achievementCategories=l.categories,r.jlptCatalog=Tm(o),r.jlptLessons=Lm(c),r.rewards.achievements=r.achievements;const d=Zf(r.progress);Hs(),th(),ea(),mf(),Wt(),K0(),Tj(),eh(d),_j(),q(),j(),x(),im(d),gm(),Ti({route:r.route,delay:Us(r.route)?0:Jl}),I0(),to(),uv(),ev(),kg(),Al();try{sessionStorage.removeItem(Jr)}catch(u){console.warn("Could not clear boot recovery marker after successful startup.",u)}}catch(e){console.error(e),await T0(e)||(Zt.innerHTML=A0(e))}finally{nc(!1)}}}function nc(e){const t=document.querySelector(".app-shell");t&&(e?t.setAttribute("data-booting","true"):t.removeAttribute("data-booting")),Zt&&Zt.setAttribute("aria-busy",e?"true":"false")}function im(e=!1){Ql=!!e,!Xl&&(Xl=!0,requestAnimationFrame(()=>{window.setTimeout(()=>{om().catch(t=>console.warn("Flash Kanji changelog failed to load.",t))},0)}))}async function om(){const e=await Qe(E.changelog,()=>null),t=HN(e);if(!t)return;r.changelog=t;const n=WN(t,r.progress,Ci(),{hadPriorVisit:Ql,useProgressSignals:!1});if(n.shouldMarkHandled){Mg(n.currentVersion,Ci());return}!n.shouldShow||!n.entry||(r.changelogModal={version:n.currentVersion,entry:n.entry},x(),lm())}function Ci(){try{return window.localStorage}catch{return null}}function lm(){Wr&&window.clearTimeout(Wr),Wr=window.setTimeout(()=>{Wr=0;const e=document.querySelector('[data-action="close-changelog"]');e instanceof HTMLElement&&e.focus({preventScroll:!0})},0)}function Li(){const e=r.changelogModal?.version||r.changelog?.currentVersion||"";Mg(e,Ci()),r.changelogModal=null,x()}function cm(e,t){return document.getElementById(t)?Promise.resolve():new Promise((n,s)=>{const a=document.createElement("script");a.id=t,a.src=e,a.defer=!0,a.onload=()=>n(),a.onerror=()=>s(new Error(`Cannot load ${e}`)),document.head.appendChild(a)})}function dm(e,{timeout:t=1800}={}){if("requestIdleCallback"in window){window.requestIdleCallback(e,{timeout:t});return}window.setTimeout(e,0)}function um(){return{version:1,dailyGoals:[10,20,50],levelCurve:{baseXp:100,growth:1.35},lessonUnlocks:{"lesson-1":1,"lesson-2":2,"lesson-3":3,"lesson-4":5,"lesson-5":8,"bulk-n5-01":3,"bulk-n5-02":4,"bulk-n5-03":4,"bulk-n5-04":5,"bulk-n4-01":5,"bulk-n4-02":6,"bulk-n4-03":6,"bulk-n4-04":7,"bulk-n4-05":7,"bulk-n4-06":8,"bulk-n4-07":8,"bulk-n4-08":9,"bulk-n3-01":9,"bulk-n3-02":10,"bulk-n3-03":10,"bulk-n3-04":11,"bulk-n3-05":11,"bulk-n3-06":12,"bulk-n3-07":12,"bulk-n3-08":13,"bulk-n3-09":13,"bulk-n3-10":14,"bulk-n3-11":14,"bulk-n3-12":15,"bulk-n3-13":15,"bulk-n3-14":16,"bulk-n3-15":16,"bulk-n3-16":17,"bulk-n3-17":17,"bulk-n3-18":18,"bulk-n3-19":18,"bulk-n2-01":19,"bulk-n2-02":19,"bulk-n2-03":20,"bulk-n2-04":20,"bulk-n2-05":21,"bulk-n2-06":21,"bulk-n2-07":22,"bulk-n2-08":22,"bulk-n2-09":23,"bulk-n2-10":23,"bulk-n2-11":24,"bulk-n2-12":24,"bulk-n2-13":25,"bulk-n2-14":25,"bulk-n2-15":26,"bulk-n2-16":26,"bulk-n2-17":27,"bulk-n2-18":27,"bulk-n2-19":28,"bulk-n1-01":28,"bulk-n1-02":29,"bulk-n1-03":29,"bulk-n1-04":30,"bulk-n1-05":30,"bulk-n1-06":31,"bulk-n1-07":31,"bulk-n1-08":32,"bulk-n1-09":32,"bulk-n1-10":33,"bulk-n1-11":33},rewards:{correctXp:10,lessonCompleteXp:50,comboXp:15,dailyBonusXp:20,sentencePracticeXp:12,correctCoins:1,lessonCompleteCoins:8,achievementCoins:20,dailyBonusCoins:5,sentencePracticeCoins:2,streakCoins:10},shop:[{id:"frame_moon",type:"profileFrame",name:{ru:"Лунная рамка",en:"Moon frame"},cost:80},{id:"theme_gold",type:"theme",name:{ru:"Золотой акцент",en:"Gold accent"},cost:120},{id:"background_midnight",type:"background",name:{ru:"Полуночный фон",en:"Midnight background"},cost:150}],achievements:[{id:"first_lesson",name:{ru:"Первый урок",en:"First lesson"},description:{ru:"Завершить первый урок.",en:"Complete the first lesson."},kind:"lessonComplete",target:1,xp:50,coins:20},{id:"hundred_correct",name:{ru:"100 правильных ответов",en:"100 correct answers"},description:{ru:"Достичь 100 правильных ответов.",en:"Reach 100 correct answers."},kind:"correct",target:100,xp:120,coins:40},{id:"ten_kanji_learned",name:{ru:"10 изученных кандзи",en:"10 kanji learned"},description:{ru:"Начать изучать 10 кандзи.",en:"Start learning 10 kanji."},kind:"learned",target:10,xp:80,coins:30},{id:"seven_day_streak",name:{ru:"7-дневная серия",en:"7-day streak"},description:{ru:"Поддерживать серию 7 дней.",en:"Keep a streak for 7 days."},kind:"streak",target:7,xp:100,coins:35},{id:"jlpt_n5_done",name:{ru:"JLPT N5 пройден",en:"JLPT N5 complete"},description:{ru:"Освоить все карточки N5.",en:"Master every N5 card."},kind:"jlpt",jlpt:"N5",target:1,xp:180,coins:60},{id:"hundred_reviews",name:{ru:"100 повторений",en:"100 reviews"},description:{ru:"Выполнить 100 повторений.",en:"Complete 100 reviews."},kind:"reviews",target:100,xp:150,coins:55}]}}function pm(){return window.Chart?Promise.resolve():(Yl||(Yl=cm("vendor/chart.umd.min.js","flash-kanji-chartjs")),Yl)}function gm(){window.setTimeout(()=>{sm||(sm=Ig(()=>import("./soundManager-BXlc-2Gj.js"),[],import.meta.url).then(()=>{Rs(),d0()}).catch(e=>console.warn("UX sound module failed to load.",e))),rm||(rm=Ig(()=>import("./cyberHudEffect-hOJcGtOP.js"),[],import.meta.url).catch(e=>console.warn("Cyber HUD module failed to load.",e)))},450)}function Us(e=r.route){return tm.has(e)}function Ti({route:e=r.route,delay:t=Jl,force:n=!1}={}){if(r.deferredDataLoaded||r.deferredDataLoading||Bs||!n&&!Us(e))return;Gs&&(window.clearTimeout(Gs),Gs=0);const s=++Zl,a=()=>{s===Zl&&(!n&&!Us(r.route)||mm().catch(o=>console.warn("Deferred app data failed to load.",o)))};Gs=window.setTimeout(()=>{Gs=0,dm(a,{timeout:1800})},Math.max(0,Number(t)||0))}async function mm({renderAfter:e=!0}={}){if(!r.deferredDataLoaded)return Bs||(r.deferredDataLoading=!0,Bs=(async()=>{const[t,n,s]=await Promise.all([sc(),rc([["kanjiMeta",E.kanjiMeta],["kanjiHints",E.kanjiHints],["kanjiTranslations",E.kanjiTranslations],["kanjiStrokes",E.kanjiStrokes],["kanjiPageSources",E.kanjiPageSources],["lessonTranslations",E.lessonTranslations],["vocabulary",E.vocabulary],["sentences",E.sentences],["jlptPracticeLessons",E.jlptPracticeLessons],["n5Meta",E.n5Meta],["n5Lessons",E.n5Lessons],["n5Kanji",E.n5Kanji],["n5Exercises",E.n5Exercises],["n5FinalTest",E.n5FinalTest],["n4Meta",E.n4Meta],["n4Lessons",E.n4Lessons],["n4Kanji",E.n4Kanji],["n4Grammar",E.n4Grammar],["n4Exercises",E.n4Exercises],["n4Reading",E.n4Reading],["n4Listening",E.n4Listening],["n4FinalTest",E.n4FinalTest],["n3Meta",E.n3Meta],["n3Lessons",E.n3Lessons],["n3Kanji",E.n3Kanji],["n3Grammar",E.n3Grammar],["n3Exercises",E.n3Exercises],["n3Reading",E.n3Reading],["n3Listening",E.n3Listening],["n3FinalTest",E.n3FinalTest],["n2Meta",E.n2Meta],["n2Lessons",E.n2Lessons],["n2Kanji",E.n2Kanji],["n2Grammar",E.n2Grammar],["n2Exercises",E.n2Exercises],["n2Reading",E.n2Reading],["n2Listening",E.n2Listening],["n2FinalTest",E.n2FinalTest],["n1Meta",E.n1Meta],["n1Lessons",E.n1Lessons],["n1Kanji",E.n1Kanji],["n1Grammar",E.n1Grammar],["n1Exercises",E.n1Exercises],["n1Reading",E.n1Reading],["n1Listening",E.n1Listening],["n1FinalTest",E.n1FinalTest],["jlptReadingTranslations",E.jlptReadingTranslations],["n5Reading",E.n5Reading],["monetization",E.monetization]]),bm(E.jlptReadingMarkdown)]),{kanjiMeta:a,kanjiHints:o,kanjiTranslations:c,kanjiStrokes:l,kanjiPageSources:d,lessonTranslations:u,vocabulary:m,sentences:h,jlptPracticeLessons:v,n5Meta:w,n5Lessons:$,n5Kanji:y,n5Exercises:S,n5FinalTest:b,n4Meta:k,n4Lessons:K,n4Kanji:D,n4Grammar:Yn,n4Exercises:P,n4Reading:V0,n4Listening:Y0,n4FinalTest:Z0,n3Meta:eN,n3Lessons:tN,n3Kanji:nN,n3Grammar:sN,n3Exercises:rN,n3Reading:aN,n3Listening:iN,n3FinalTest:oN,n2Meta:lN,n2Lessons:cN,n2Kanji:dN,n2Grammar:uN,n2Exercises:pN,n2Reading:gN,n2Listening:mN,n2FinalTest:fN,n1Meta:hN,n1Lessons:vN,n1Kanji:wN,n1Grammar:bN,n1Exercises:kN,n1Reading:yN,n1Listening:$N,n1FinalTest:jN,jlptReadingTranslations:SN,n5Reading:NN,monetization:xN}=n;r.lessons=t.lessons,r.cards=t.cards,r.jlptPracticeLessons=Im(v),r.jlptReadingMarkdown=s||"",r.jlptReadingByLevel=km(s||""),r.n5Meta=Rm(w),r.n5Textbook=oc($),r.n5KanjiCatalog=_m(y),Mm(),r.n5Exercises=Pm(S),r.n5FinalTest=Em(b),r.n5Reading=lf(NN),r.n4Meta=Km(k),r.n4Textbook=Dm(K),r.n4KanjiCatalog=Om(D),r.n4Grammar=Bm(Yn),r.n4Exercises=Gm(P),r.n4Reading=lc(V0),r.n4Listening=lc(Y0),r.n4FinalTest=zm(Z0),Fm(),r.n3Meta=Jm(eN),r.n3Textbook=Um(tN),r.n3KanjiCatalog=qm(nN),r.n3Grammar=Wm(sN),r.n3Exercises=Xm(rN),r.n3Reading=cc(aN),r.n3Listening=cc(iN),r.n3FinalTest=Qm(oN),Hm(),r.n2Meta=Vm(lN),r.n2Textbook=Ym(cN),r.n2KanjiCatalog=Zm(dN),r.n2Grammar=tf(uN),r.n2Exercises=nf(pN),r.n2Reading=dc(gN),r.n2Listening=dc(mN),r.n2FinalTest=sf(fN),ef(),r.n1Meta=uc(hN),r.n1Textbook=pc(vN),r.n1KanjiCatalog=gc(wN),r.n1Grammar=fc(bN),r.n1Exercises=hc(kN),r.n1Reading=ia(yN),r.n1Listening=ia($N),r.n1FinalTest=vc(jN),mc(),r.kanjiMeta=a.items||{},r.kanjiHints=o.items||{},r.kanjiTranslations=c.items||{},r.kanjiStrokes=Nm(l),r.kanjiPageSources=d.items||{},r.lessonTranslations=u.items||{},r.vocabulary=m.items||[],r.sentenceExercises=h.items||[],r.jlptReadingTranslations=jm(SN),r.monetization=xN,r.deferredDataLoaded=!0,r.deferredDataLoading=!1,r.progress&&(Hs(),q(),j()),e&&x()})().finally(()=>{r.deferredDataLoading=!1}),Bs)}async function fm({renderAfter:e=!0}={}){return r.n1Textbook?.items?.length&&r.n1KanjiCatalog?.length?r.n1Textbook:zs||(Vr=null,zs=rc([["n1Meta",E.n1Meta],["n1Lessons",E.n1Lessons],["n1Kanji",E.n1Kanji],["n1Grammar",E.n1Grammar],["n1Exercises",E.n1Exercises],["n1Reading",E.n1Reading],["n1Listening",E.n1Listening],["n1FinalTest",E.n1FinalTest]],4).then(t=>(r.n1Meta=uc(t.n1Meta),r.n1Textbook=pc(t.n1Lessons),r.n1KanjiCatalog=gc(t.n1Kanji),r.n1Grammar=fc(t.n1Grammar),r.n1Exercises=hc(t.n1Exercises),r.n1Reading=ia(t.n1Reading),r.n1Listening=ia(t.n1Listening),r.n1FinalTest=vc(t.n1FinalTest),mc(),r.progress&&(Hs(),j()),e&&r.route==="textbooks"&&r.activeTextbookLevel==="N1"&&x(),r.n1Textbook)).catch(t=>{throw Vr=t,console.warn("N1 textbook data failed to load.",t),e&&r.route==="textbooks"&&r.activeTextbookLevel==="N1"&&x(),t}).finally(()=>{zs=null}),zs)}async function hm(){try{const e=localStorage.getItem(wt);if(localStorage.setItem(wt,G),!e||e===G)return!1;if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistrations();await Promise.all(t.map(async n=>{await n.update().catch(()=>null)}))}return!1}catch(e){return console.warn("App cache version check failed.",e),!1}}async function vm(){try{const e=localStorage.getItem(Ur),t=localStorage.getItem("flashKanji.lastForcedBuild");return e==="done"&&t===G||(localStorage.setItem(Ur,"done"),localStorage.setItem("flashKanji.lastForcedBuild",G)),!1}catch(e){return console.warn("Force cache reset failed.",e),!1}}async function sc({initialOnly:e=!1}={}){const t=await Qe(E.lessons),n=Array.isArray(t?.lessons)?t.lessons:[],s=e?wm(n):n,a=await ac(s,async d=>{try{return{manifestLesson:d,payload:await Qe(d.file)}}catch(u){return console.warn(`Skipping lesson data: ${d?.file||"unknown lesson file"}`,u),null}},e?s.length:3),o=new Map(a.filter(Boolean).map(d=>[d.manifestLesson.id,d])),c=n.map(d=>{const u=o.get(d.id);if(!u)return{...d,file:d.file,items:[]};const{payload:m}=u;return{...d,...m.lesson,file:d.file,items:Array.isArray(m.items)?m.items.map(h=>Sm(h,m.lesson.id)):[]}}),l=c.flatMap(d=>d.items.map(u=>({...u,lessonTitle:d.title,lessonOrder:d.order})));return{lessons:c,cards:l}}function wm(e){return e.filter((t,n)=>em.has(t.id)||n<2)}async function rc(e,t=3){const n=await ac(e,async([s,a])=>[s,await Qe(a)],t);return Object.fromEntries(n)}async function ac(e,t,n=6){const s=[],a=Math.max(1,Number(n)||1);for(let o=0;o<e.length;o+=a){const c=e.slice(o,o+a);s.push(...await Promise.all(c.map(t))),o+a<e.length&&await new Promise(l=>window.setTimeout(l,0))}return s}async function Qe(e,t=null){const n=ic(e);let s=null;for(const a of n)try{const o=typeof AbortController<"u"?new AbortController:null,c=o?window.setTimeout(()=>o.abort(),Ul):0;try{const l=await fetch(a,{signal:o?.signal});if(!l.ok){s=new Error(`Cannot load ${a}`);continue}const d=await l.text();try{return JSON.parse(d)}catch(u){s=u,console.warn(`Invalid JSON from ${a}. Trying fallback paths.`,u)}}finally{c&&window.clearTimeout(c)}}catch(o){s=o}return console.warn(`Falling back to empty data for ${e}.`,s),typeof t=="function"?t(s):t!==null?t:{version:1,languages:["ru","en"],ui:{},items:[],lessons:[],lesson:{},achievements:[],categories:[]}}async function bm(e,t=""){const n=ic(e);let s=null;for(const a of n)try{const o=typeof AbortController<"u"?new AbortController:null,c=o?window.setTimeout(()=>o.abort(),Ul):0;try{const l=await fetch(a,{signal:o?.signal});if(!l.ok){s=new Error(`Cannot load ${a}`);continue}return await l.text()}finally{c&&window.clearTimeout(c)}}catch(o){s=o}return console.warn(`Falling back to empty text for ${e}.`,s),typeof t=="function"?t(s):t}function km(e){const t=Object.fromEntries(_e.map(m=>[m,[]])),n=String(e||"").split(/\r?\n/);let s=null,a=null,o="idle",c=[],l=[];const d=()=>{!a||!s||(a.text=ym(c.join(`
`)),a.questions=l.map(m=>m.trim()).filter(Boolean),t[s].push(a),a=null,c=[],l=[],o="idle")},u=m=>{const h=String(m||"").trim().toLowerCase();return h==="жанр"||h==="genre"?"genre":h==="опора"||h==="source"||h==="basis"?"source":h==="цель"||h==="goal"?"goal":h};for(const m of n){const h=String(m??""),v=h.trim(),w=v.match(/^#\s*JLPT\s*(N[1-5])\b/i);if(w){d(),s=w[1].toUpperCase();continue}const $=v.match(/^##\s*(N[1-5])\s*(.+)$/i);if($){d(),s=$[1].toUpperCase(),a={id:`${s.toLowerCase()}-reading-${String((t[s]||[]).length+1).padStart(2,"0")}`,level:s,title:$m($[2]),genre:"",source:"",goal:"",text:"",questions:[]},o="meta";continue}if(/^#{1,2}(?!#)\s+/.test(v)&&!w&&!$){d(),s=null;continue}if(!a)continue;if(/^###\s*Проверочные вопросы/i.test(v)){o="questions";continue}if(o==="code"){/^```/.test(v)?o="body":c.push(h);continue}if(/^```/.test(v)){o="code";continue}if(o==="questions"){const S=v.match(/^[-*]\s+(.*)$/),b=v.match(/^\d+\.\s+(.*)$/);if(S){l.push(S[1]);continue}if(b){l.push(b[1]);continue}if(!v||/^---+$/.test(v))continue;l.push(v);continue}const y=v.match(/^\*\*(Жанр|Опора|Цель|Genre|Source|Goal)\:\*\*\s*(.*)$/i);if(y){const S=u(y[1]);a[S]=y[2].trim()}}return d(),t}function ym(e){return String(e||"").replace(/^\s*\n+/,"").replace(/\n+\s*$/,"")}function $m(e){return String(e||"").replace(/^[\s\-–—::]+/u,"").trim()}function jm(e){const t=e&&typeof e=="object"&&!Array.isArray(e)?e.items&&typeof e.items=="object"&&!Array.isArray(e.items)?e.items:e:{},n={};return Object.entries(t||{}).forEach(([s,a])=>{!s||!a||typeof a!="object"||(n[String(s)]={titleRu:String(a.titleRu||a.ruTitle||a.title_ru||"").trim(),titleEn:String(a.titleEn||a.enTitle||a.title_en||"").trim(),ru:String(a.ru||a.translationRu||a.translation_ru||"").trim(),en:String(a.en||a.translationEn||a.translation_en||"").trim()})}),n}function ic(e){const t=String(e||"").trim();if(!t)return[t];if(/^https?:\/\//i.test(t)||t.startsWith("file:"))return[t];const n=t.replace(/^\.\/+/,"").replace(/^\.\.\/+/,"").replace(/^\/+/,""),s=[t,`./${n}`,`../${n}`,`index/${n}`,`/index/${n}`,`/${n}`];return[...new Set(s.filter(Boolean))]}function Sm(e,t){return{...e,id:String(e.id),lessonId:t,examples:Array.isArray(e.examples)?e.examples:[],apps:Array.isArray(e.apps)?e.apps:[],stroke_order:Array.isArray(e.stroke_order)?e.stroke_order:[]}}function Nm(e){const t=e?.items&&typeof e.items=="object"?e.items:{};return Object.fromEntries(Object.entries(t).map(([n,s])=>{const a=Array.isArray(s?.strokeOrder)?s.strokeOrder.filter(o=>typeof o?.path=="string"&&o.path.trim()):[];return a.length?[n,{...s,kanji:s.kanji||n,strokes:Number(s.strokes||a.length),viewBox:s.viewBox||"0 0 109 109",strokeOrder:a}]:null}).filter(Boolean))}function Pn(){return{owned:[],selected:{background:"bg_study_hub",outfit:"outfit_default_assassin",theme:"theme_default_dark",decoration:null,frame:null,effect:null},seen:[],updatedAt:new Date().toISOString()}}function xm(){try{const e=localStorage.getItem(W);if(!e)return Pn();const t=JSON.parse(e),n=Pn();return{owned:Array.isArray(t.owned)?t.owned.map(String):n.owned,selected:{...n.selected,...t&&t.selected||{}},seen:Array.isArray(t.seen)?t.seen.map(String):n.seen,updatedAt:t.updatedAt||n.updatedAt}}catch(e){return console.warn("Customization storage failed.",e),Pn()}}function ss(){if(!r.customization)return!1;if(Hr)return!0;Hr=!0;const e=()=>{_n=0,Hr=!1,r.customization.updatedAt=new Date().toISOString();try{localStorage.setItem(W,JSON.stringify(r.customization))}catch(t){console.warn("Customization save failed.",t)}};return"requestIdleCallback"in window?_n=window.requestIdleCallback(e,{timeout:1200}):_n=window.setTimeout(e,160),!0}function Am(){if(!r.customization)return!1;Hr=!1,_n&&("cancelIdleCallback"in window?window.cancelIdleCallback(_n):window.clearTimeout(_n),_n=0),r.customization.updatedAt=new Date().toISOString();try{return localStorage.setItem(W,JSON.stringify(r.customization)),!0}catch(e){return console.warn("Customization save failed.",e),!1}}function ea(){const e=xm(),t=new Set;(e.owned||[]).forEach(s=>{const a=pe(s)||En(s);a&&t.add(a.id)}),Ve().forEach(s=>{(s.defaultOwned||s.price===0)&&t.add(s.id)}),(r.progress.unlockedBackgrounds||[]).forEach(s=>{const a=pe(s)||En(s);a&&t.add(a.id)}),(r.progress.unlockedEvaSprites||[]).forEach(s=>{const a=Kn(s);a&&t.add(a.id),r.progress.shop?.owned?.includes(`eva_sprite:${s}`)&&a&&t.add(a.id)}),(r.progress.shop?.owned||[]).forEach(s=>{const a=String(s),o=pe(a)||En(a);if(o&&t.add(o.id),!o&&a.startsWith("eva_sprite:")){const c=Kn(a.replace("eva_sprite:",""));c&&t.add(c.id)}});const n=Cm({...Pn().selected,...e.selected||{}});r.progress.selectedEvaRoomBackground&&(n.background=Et(r.progress.selectedEvaRoomBackground)),r.progress.selectedEvaSprite&&(n.outfit=Kn(r.progress.selectedEvaSprite)?.id||n.outfit),t.has(n.background)||(n.background="bg_study_hub"),t.has(n.outfit)||(n.outfit="outfit_default_assassin"),t.has(n.theme)||(n.theme="theme_default_dark"),n.decoration&&!t.has(n.decoration)&&(n.decoration=null),n.effect&&!t.has(n.effect)&&(n.effect=null),r.customization={owned:[...t],selected:n,seen:[...new Set([...e.seen||[],...t])],updatedAt:e.updatedAt||new Date().toISOString()},qs(),ss()}function qs(){var n;if(!r.customization||!r.progress)return;le();const e=r.customization.selected||{};e.background&&(r.progress.selectedEvaRoomBackground=e.background);const t=pe(e.outfit);t?.spriteId&&(r.progress.selectedEvaSprite=t.spriteId),r.progress.unlockedBackgrounds=[...new Set([...r.progress.unlockedBackgrounds||[],...r.customization.owned.filter(s=>pe(s)?.type==="background")])],r.progress.unlockedEvaSprites=[...new Set([...r.progress.unlockedEvaSprites||[],...r.customization.owned.map(s=>pe(s)).filter(s=>s?.type==="outfit"&&s.spriteId).map(s=>s.spriteId)])],(n=r.progress).shop||(n.shop={owned:[],equipped:{}}),r.progress.shop.owned=[...new Set([...r.progress.shop.owned||[],...r.customization.owned,...r.progress.unlockedEvaSprites.map(s=>`eva_sprite:${s}`)])],r.progress.shop.equipped={...r.progress.shop.equipped||{},background:e.background||null,outfit:e.outfit||null,theme:e.theme||null,decoration:e.decoration||e.frame||null,effect:e.effect||null}}function Ve(){return r.customizationCatalog?.items||[]}function pe(e){return Ve().find(t=>t.id===e)||null}function En(e){const t=String(e||"");return t&&Ve().find(n=>Array.isArray(n.legacyIds)&&n.legacyIds.map(String).includes(t))||null}function Et(e){return(pe(e)||En(e))?.id||e||null}function Cm(e={}){return{background:Et(e.background),outfit:Et(e.outfit),theme:Et(e.theme),decoration:Et(e.decoration||e.frame),effect:Et(e.effect)}}function Kn(e){const t=String(e||"");if(!t)return null;const n=`eva_sprite:${t}`;return Ve().find(s=>s.type!=="outfit"?!1:s.spriteId===t||s.legacySpriteId===t?!0:Array.isArray(s.legacyIds)&&s.legacyIds.map(String).includes(n))||null}function Lm(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),title:n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},summary:n.summary||{ru:"",en:""},goals:Array.isArray(n.goals)?n.goals:[],sections:Array.isArray(n.sections)?n.sections:[],practice:Array.isArray(n.practice)?n.practice:[],checkpoint:Array.isArray(n.checkpoint)?n.checkpoint:[]})).filter(n=>n.jlpt)}function Tm(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[];return{version:Number(e?.version||1),generatedAt:e?.generatedAt||null,items:t.map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),slug:String(n.slug||String(n.jlpt||"").toLowerCase()),title:n.title||{ru:n.displayTitle?.ru||n.jlpt||"JLPT",en:n.displayTitle?.en||n.jlpt||"JLPT"},displayTitle:n.displayTitle||n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},description:n.description||{ru:"",en:""},goal:n.goal||{ru:"",en:""},recommendedCycle:n.recommendedCycle||{ru:"",en:""},previousLevels:Array.isArray(n.previousLevels)?n.previousLevels:[],nextLevels:Array.isArray(n.nextLevels)?n.nextLevels:[],lessonIds:Array.isArray(n.lessonIds)?n.lessonIds:[],files:n.files||{},lessonCount:Number(n.lessonCount||0),kanjiCount:Number(n.kanjiCount||0),cardCount:Number(n.cardCount||0)})).filter(n=>n.jlpt).sort((n,s)=>_e.indexOf(n.jlpt)-_e.indexOf(s.jlpt))}}function Im(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),apps:Array.isArray(n.apps)?n.apps:[],kana:n.kana||{hiragana:[],katakana:[]},kanjiFocus:Array.isArray(n.kanjiFocus)?n.kanjiFocus:[],drills:Array.isArray(n.drills)?n.drills:[],sources:Array.isArray(n.sources)?n.sources:[]})).filter(n=>n.jlpt)}function Rm(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"JLPT N5",en:"JLPT N5"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||80),lessonCount:Number(e?.lessonCount||10),kanjiPerLesson:Number(e?.kanjiPerLesson||8),pdfUrl:e?.pdfUrl||"docs/flashkanji_N5_expanded_textbook.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],rewards:{addToSrsXp:4,knowXp:6,hardXp:2,exerciseXp:7,exerciseMoon:1,lessonCompleteXp:45,lessonCompleteMoon:6,finalTestXp:120,finalTestMoon:20,...e?.rewards||{}}}}function oc(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N5",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n5-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30]})).filter(n=>n.kanji.length)}}function _m(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),lessonId:n.lessonId||n.lesson_id||null,kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:[],jlpt:"N5"})).filter(n=>n.kanji)}function Mm(){if(!Array.isArray(r.n5KanjiCatalog)||!r.n5KanjiCatalog.length)return;const e=new Map(r.n5KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);if(!s)return n;const a=String(n.jlpt||s.jlpt||"").toUpperCase();return a&&a!=="N5"?n:(t.add(s.kanji),ta(n,s))}),r.n5KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(ta({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId||null,jlpt:"N5",examples:[],source:"n5-catalog"},n)),t.add(n.kanji))})}function ta(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),a=(t.examples||[]).map(l=>({...l,reading:H(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||""})),o=a[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,jlpt:"N5",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:H(s(n.onyomi)||e.onyomi||""),kunyomi:H(s(n.kunyomi)||e.kunyomi||""),hiragana:H((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n5Detail:t}}function Pm(e){return{version:Number(e?.version||1),level:"N5",types:Array.isArray(e?.types)?e.types:[],lessonQuestionCount:Number(e?.lessonQuestionCount||6),reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Em(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"Финальный тест JLPT N5",en:"JLPT N5 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||24),passingPercent:Number(e?.passingPercent||80),types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","srs"],rewards:{completeXp:120,completeMoon:20,passXp:80,passMoon:12,...e?.rewards||{}}}}function Km(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"JLPT N4",en:"JLPT N4"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||170),lessonCount:Number(e?.lessonCount||17),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||48),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N4_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:5,knowXp:7,hardXp:2,exerciseXp:9,exerciseMoon:1,grammarXp:10,grammarMoon:1,lessonCompleteXp:65,lessonCompleteMoon:8,readingXp:35,readingMoon:4,listeningXp:30,listeningMoon:3,finalTestXp:180,finalTestMoon:35,...e?.rewards||{}}}}function Dm(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N4",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n4-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45]})).filter(n=>n.kanji.length)}}function Om(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N4",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Fm(){if(!Array.isArray(r.n4KanjiCatalog)||!r.n4KanjiCatalog.length)return;const e=new Map(r.n4KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N4"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),na(n,s))}),r.n4KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(na({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[],source:"n4-catalog"},n)),t.add(n.kanji))})}function na(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),a=(t.examples||[]).map(l=>({...l,reading:H(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=a[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N4",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:H(s(n.onyomi)||e.onyomi||""),kunyomi:H(s(n.kunyomi)||e.kunyomi||""),hiragana:H((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n4Detail:t}}function Bm(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-grammar-${String(s+1).padStart(2,"0")}`),level:"N4",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Gm(e){return{version:Number(e?.version||1),level:"N4",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function lc(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function zm(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"Финальный тест JLPT N4",en:"JLPT N4 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||32),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||180),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||35),passXp:Number(e?.rewards?.passXp||90),passMoon:Number(e?.rewards?.passMoon||15)}}}function Jm(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"JLPT N3",en:"JLPT N3"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||370),lessonCount:Number(e?.lessonCount||37),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||80),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N3_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:6,knowXp:8,hardXp:2,exerciseXp:10,exerciseMoon:1,grammarXp:11,grammarMoon:1,lessonCompleteXp:75,lessonCompleteMoon:9,readingXp:38,readingMoon:4,listeningXp:34,listeningMoon:4,finalTestXp:220,finalTestMoon:40,...e?.rewards||{}}}}function Um(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N3",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n3-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45,60]})).filter(n=>n.kanji.length)}}function qm(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N3",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Hm(){if(!Array.isArray(r.n3KanjiCatalog)||!r.n3KanjiCatalog.length)return;const e=new Map(r.n3KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N3"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),sa(n,s))}),r.n3KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(sa({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[],source:"n3-catalog"},n)),t.add(n.kanji))})}function sa(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),a=(t.examples||[]).map(l=>({...l,reading:H(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=a[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N3",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:H(s(n.onyomi)||e.onyomi||""),kunyomi:H(s(n.kunyomi)||e.kunyomi||""),hiragana:H((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n3Detail:t}}function Wm(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-grammar-${String(s+1).padStart(2,"0")}`),level:"N3",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Xm(e){return{version:Number(e?.version||1),level:"N3",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function cc(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Qm(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"Финальный тест JLPT N3",en:"JLPT N3 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||220),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||40),passXp:Number(e?.rewards?.passXp||110),passMoon:Number(e?.rewards?.passMoon||18)}}}function Vm(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"JLPT N2",en:"JLPT N2"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||380),lessonCount:Number(e?.lessonCount||38),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||120),readingCount:Number(e?.readingCount||46),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N2_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function Ym(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N2",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n2-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function Zm(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N2",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function ef(){if(!Array.isArray(r.n2KanjiCatalog)||!r.n2KanjiCatalog.length)return;const e=new Map(r.n2KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N2"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),ra(n,s))}),r.n2KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(ra({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[],source:"n2-catalog"},n)),t.add(n.kanji))})}function ra(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),a=(t.examples||[]).map(l=>({...l,reading:H(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=a[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N2",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:H(s(n.onyomi)||e.onyomi||""),kunyomi:H(s(n.kunyomi)||e.kunyomi||""),hiragana:H((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n2Detail:t}}function tf(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-grammar-${String(s+1).padStart(2,"0")}`),level:"N2",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function nf(e){return{version:Number(e?.version||1),level:"N2",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function dc(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function sf(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"Финальный тест JLPT N2",en:"JLPT N2 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||260),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||48),passXp:Number(e?.rewards?.passXp||130),passMoon:Number(e?.rewards?.passMoon||20)}}}function uc(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"JLPT N1",en:"JLPT N1"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||1047),lessonCount:Number(e?.lessonCount||53),kanjiPerLesson:Number(e?.kanjiPerLesson||20),grammarCount:Number(e?.grammarCount||142),readingCount:Number(e?.readingCount||8),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N1_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function pc(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N1",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n1-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function gc(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N1",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function mc(){if(!Array.isArray(r.n1KanjiCatalog)||!r.n1KanjiCatalog.length)return;const e=new Map(r.n1KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N1"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),aa(n,s))}),r.n1KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(aa({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N1",examples:[],source:"n1-catalog"},n)),t.add(n.kanji))})}function aa(e,t){const n=t.readings||{},s=l=>Array.isArray(l)?l.filter(Boolean).join(" / "):String(l||""),a=(t.examples||[]).map(l=>({...l,reading:H(l.reading||l.hiragana||l.kana||""),translation:l.translation_ru||l.translation||l.translation_en||""})),o=a[0]||{},c=Array.isArray(t.strokeOrder)?t.strokeOrder.map(l=>typeof l=="string"?l:l.description_ru||l.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N1",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:H(s(n.onyomi)||e.onyomi||""),kunyomi:H(s(n.kunyomi)||e.kunyomi||""),hiragana:H((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:c,meta:{...e.meta||{},...t.meta||{}},n1Detail:t}}function fc(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-grammar-${String(s+1).padStart(2,"0")}`),level:"N1",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function hc(e){return{version:Number(e?.version||1),level:"N1",lessonQuestionCount:Number(e?.lessonQuestionCount||10),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function ia(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function vc(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"Финальный тест JLPT N1",en:"JLPT N1 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||45),passingPercent:Number(e?.passingPercent||82),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||320),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||60),passXp:Number(e?.rewards?.passXp||160),passMoon:Number(e?.rewards?.passMoon||25)}}}function rf(e){return Array.isArray(e)?e.map(t=>({value:String(t?.value||t?.id||""),label:t?.label||t?.title||t?.text||{ru:String(t?.labelRu||t?.ru||t?.value||""),en:String(t?.labelEn||t?.en||t?.value||"")}})).filter(t=>t.value):[]}function af(e){return Array.isArray(e)?e.map(t=>({answer:Array.isArray(t?.answer)?t.answer.map(String).filter(Boolean):[],reading:Array.isArray(t?.reading)?t.reading.map(n=>H(n)):[]})):[]}function of(e,t){const n=Array.isArray(t)?t.flatMap(s=>Array.isArray(s?.answer)?s.answer.map((a,o)=>({kanji:String(a||""),reading:String(s?.reading?.[o]||"")})):[]):[];return[...Array.isArray(e)?e:[],...n].map(s=>({kanji:String(s?.kanji||""),reading:String(s?.reading||"")})).filter(s=>s.kanji).filter((s,a,o)=>o.findIndex(c=>c.kanji===s.kanji&&c.reading===s.reading)===a)}function lf(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[],n=t.find(a=>String(a?.kind||"").toLowerCase()==="sentences")||t[0]||null;return(Array.isArray(n?.items)?n.items:[]).map((a,o)=>({id:String(a.id||`${String(n?.id||"reading-n5-sentence")}-${o+1}`),level:String(a.jlpt||n?.level||"N5").toUpperCase(),kind:"cloze",sourceKind:"sentences",sourceId:String(n?.id||"reading-n5-sentences"),sourceTitle:n?.title||{ru:"Предложения",en:"Sentences"},title:{ru:"Предложение",en:"Sentence"},sentence:String(a.sentence||""),reading:H(a.reading||""),translationRu:String(a.translationRu||a.translation_ru||a.ru||""),translationEn:String(a.translationEn||a.translation_en||a.en||""),blanks:af(a.blanks),tiles:of(a.tiles,a.blanks),source:"reading"})).filter(a=>a.id)}function wc(e,t=[]){const n=Array.isArray(e?.achievements)&&e.achievements.length?e.achievements:t,s=Array.isArray(e?.categories)?e.categories.map(c=>({id:String(c.id),title:c.title||{ru:c.id,en:c.id},icon:c.icon||"moon"})):[],a=n.map(c=>Ii(c)),o=new Set(s.map(c=>c.id));return a.forEach(c=>{o.has(c.category)||(o.add(c.category),s.push({id:c.category,title:{ru:c.category,en:c.category},icon:c.icon||"moon"}))}),{categories:s,items:a}}function Ii(e){const t=Number(e.rewardXp??e.xp??0),n=Number(e.rewardFragments??e.coins??0);return{...e,id:String(e.id),category:e.category||e.kind||"learning",title:e.title||e.name||{ru:e.id,en:e.id},description:e.description||{ru:"",en:""},icon:e.icon||"moon",kind:e.kind||"learned",target:Number(e.target||1),rewardXp:t,rewardFragments:n,unlocked:!!e.unlocked,secret:!!e.secret}}function bc(){return[navigator.language,...navigator.languages||[]].filter(Boolean).map(t=>String(t).toLowerCase()).some(t=>t==="ru"||t.startsWith("ru-")||t==="be"||t.startsWith("be-"))?"ru":"en"}function rs(){const e=bc();return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),settings:{theme:"dark",themeManuallySelected:!1,sound:!0,uxSound:!0,uxVolume:.75,language:e,languageAutoDetected:!0,languageManuallySelected:!1,dailyGoal:10},xp:0,level:1,moonFragments:0,totalCorrect:0,totalWrong:0,correctCombo:0,bestCorrectCombo:0,appOpens:0,totalMoonFragmentsEarned:0,cards:{},seenCards:{},seenKanji:{},daily:{},favorites:{},transactions:[],streakHistory:[],streak:{current:0,best:0,lastStudyDate:null,pendingReward:null},visits:{firstVisitDate:null,lastVisitDate:null,lastDailyBonusDate:null,streak:0,bestStreak:0},lessonCompletions:{},achievements:{},dailyBonuses:{},dailyBonusPending:null,lastOpenedJlptLesson:null,lastOpenedJlptLessons:{},viewedReadingLevels:{},writingPractice:{completed:0,cards:{}},secrets:{evaClicks:0,nightVisit:!1},learningPath:_i(),jlptLessonStudy:Mi(),sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[],completed:{},attempts:0,recentIds:[],recentAnswers:[],custom:[],customSentences:[],customEditingId:null,customDraft:{jp:"",hiragana:"",ru:"",en:""},customMessage:"",customStatus:""},jlptLessonPractice:{activeIds:{},selected:{},checked:{},results:{},completed:{}},readingExercises:{},n5Course:Ei(),n4Course:Ki(),n3Course:Di(),n2Course:Oi(),n1Course:Fi(),unlockedJlptLevels:_e.slice(),unlockedBackgrounds:["bg_study_hub"],selectedEvaRoomBackground:"bg_study_hub",unlockedEvaSprites:["idle","default"],selectedEvaSprite:"idle",evaRoomDialogueProgress:{currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]},evaRoomQuiz:{answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]},evaAutonomy:_c(),evaRelationship:Gi(),shop:{owned:[],equipped:{}}}}function cf(){const e=rs();try{const t=EN();return t?kc(e,t):e}catch(t){return console.warn("Progress reset because stored JSON is invalid.",t),e}}function kc(e,t){return{...e,...t,version:3,settings:df(e.settings,t.settings||{}),cards:KN({...e.cards,...t.cards||{}}),seenCards:{...e.seenCards,...t.seenCards||{}},seenKanji:{...e.seenKanji,...t.seenKanji||{}},daily:{...e.daily,...t.daily||{}},favorites:{...e.favorites,...t.favorites||{}},transactions:Array.isArray(t.transactions)?t.transactions:e.transactions,streakHistory:Array.isArray(t.streakHistory)?t.streakHistory:e.streakHistory,streak:pf(e.streak,t.streak||{}),visits:{...e.visits,...t.visits||{}},lessonCompletions:{...e.lessonCompletions,...t.lessonCompletions||{}},achievements:{...e.achievements,...t.achievements||{}},dailyBonuses:{...e.dailyBonuses,...t.dailyBonuses||{}},dailyBonusPending:oa(t.dailyBonusPending||null),lastOpenedJlptLesson:De(t.lastOpenedJlptLesson||null),lastOpenedJlptLessons:BS(t.lastOpenedJlptLessons||{}),viewedReadingLevels:Vn(t.viewedReadingLevels||{}),appOpens:Number(t.appOpens||e.appOpens),totalMoonFragmentsEarned:Number(t.totalMoonFragmentsEarned||e.totalMoonFragmentsEarned),writingPractice:{...e.writingPractice,...t.writingPractice||{}},secrets:{...e.secrets,...t.secrets||{}},learningPath:xc(e.learningPath,t.learningPath||{}),jlptLessonStudy:Nc(e.jlptLessonStudy,t.jlptLessonStudy||{}),sentencePractice:Bi(e.sentencePractice,t.sentencePractice||{}),jlptLessonPractice:Rc(e.jlptLessonPractice,t.jlptLessonPractice||{}),readingExercises:{...e.readingExercises,...t.readingExercises||{}},n5Course:Ac(e.n5Course,t.n5Course||{}),n4Course:Cc(e.n4Course,t.n4Course||{}),n3Course:Lc(e.n3Course,t.n3Course||{}),n2Course:Tc(e.n2Course,t.n2Course||{}),n1Course:Ic(e.n1Course,t.n1Course||{}),unlockedJlptLevels:[...new Set([...Array.isArray(e.unlockedJlptLevels)?e.unlockedJlptLevels:[],...Array.isArray(t.unlockedJlptLevels)?t.unlockedJlptLevels:[],..._e])],unlockedBackgrounds:[...new Set([...e.unlockedBackgrounds||[],...t.unlockedBackgrounds||[]])],selectedEvaRoomBackground:t.selectedEvaRoomBackground||e.selectedEvaRoomBackground,unlockedEvaSprites:[...new Set([...e.unlockedEvaSprites||[],...t.unlockedEvaSprites||[],...(t.shop&&t.shop.owned||[]).filter(n=>String(n).startsWith("eva_sprite:")).map(n=>String(n).replace("eva_sprite:",""))])],selectedEvaSprite:t.selectedEvaSprite||e.selectedEvaSprite,evaRoomDialogueProgress:{...e.evaRoomDialogueProgress,...t.evaRoomDialogueProgress||{},rewardsClaimed:{...e.evaRoomDialogueProgress.rewardsClaimed,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.rewardsClaimed||{}},visited:{...e.evaRoomDialogueProgress.visited,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.visited||{}},lineHistory:Array.isArray(t.evaRoomDialogueProgress?.lineHistory)?t.evaRoomDialogueProgress.lineHistory:e.evaRoomDialogueProgress.lineHistory||[]},evaRoomQuiz:{...e.evaRoomQuiz,...t.evaRoomQuiz||{},rewarded:{...e.evaRoomQuiz.rewarded,...t.evaRoomQuiz&&t.evaRoomQuiz.rewarded||{}},history:Array.isArray(t.evaRoomQuiz?.history)?t.evaRoomQuiz.history.slice(0,40):e.evaRoomQuiz.history},evaAutonomy:Pc(e.evaAutonomy,t.evaAutonomy||{}),evaRelationship:Mc(e.evaRelationship,t.evaRelationship||{}),shop:{owned:[...new Set([...e.shop.owned||[],...t.shop&&t.shop.owned||[]])],equipped:{...e.shop.equipped,...t.shop&&t.shop.equipped||{}}}}}function df(e,t){const n={...e,...t||{}};return n.theme=uf(n.theme,e.theme||"dark"),n.themeManuallySelected=en(n.themeManuallySelected,e.themeManuallySelected===!0),n.themeManuallySelected||(n.theme="dark"),n.sound=en(n.sound,e.sound!==!1),n.uxSound=n.sound!==!1,n.languageAutoDetected=en(n.languageAutoDetected,e.languageAutoDetected!==!1),n.languageManuallySelected=en(n.languageManuallySelected,e.languageManuallySelected===!0),n}function uf(e,t="dark"){return e==="light"||e==="dark"?e:t}function pf(e,t){const n={...e,...t||{}};return n.current=Ri(n.current,e.current||0),n.best=Ri(n.best,e.best||0),n.lastStudyDate=n.lastStudyDate||null,n.pendingReward=yc(n.pendingReward),n}function yc(e){if(!e||typeof e!="object")return null;const t=Ri(e.milestone,0),n=typeof e.availableOn=="string"?e.availableOn:"";return!t||!n?null:{milestone:t,availableOn:n}}function oa(e){if(!e||typeof e!="object")return null;const t=typeof e.availableOn=="string"?e.availableOn:"";return t?{availableOn:t}:null}function en(e,t=!0){if(typeof e=="boolean")return e;if(typeof e=="number")return e!==0;if(typeof e=="string"){const n=e.trim().toLowerCase();if(["false","0","off","no","disabled"].includes(n))return!1;if(["true","1","on","yes","enabled"].includes(n))return!0}return t}function Ri(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function _i(){return{version:Gl,currentLevel:zl,currentNodeId:ke,completedNodes:{},unlockedNodes:{[ke]:!0},activeSession:null,resultHistory:{},lastUpdatedAt:null}}function Mi(){return{activeSessionKey:null,sessions:{},lastUpdatedAt:null}}function $c(){return{level:"",lessonId:"",currentIndex:0,answers:{},phase:"study",startedAt:null,updatedAt:null,completedAt:null,testOpenedAt:null}}function jc(e){const t=String(e||"").toLowerCase();return["study","test","done"].includes(t)?t:"study"}function Sc(e,t){const n=$c(),s=t&&typeof t=="object"?t:{},a={...e?.answers||n.answers,...s.answers||{}};return{...n,...e||{},...s,level:String(s.level||e?.level||n.level||"").toUpperCase(),lessonId:String(s.lessonId||e?.lessonId||n.lessonId||""),currentIndex:Math.max(0,Number(s.currentIndex??e?.currentIndex??n.currentIndex??0)),answers:a,phase:jc(s.phase||e?.phase||n.phase),startedAt:s.startedAt||e?.startedAt||n.startedAt||null,updatedAt:s.updatedAt||e?.updatedAt||n.updatedAt||null,completedAt:s.completedAt||e?.completedAt||n.completedAt||null,testOpenedAt:s.testOpenedAt||e?.testOpenedAt||n.testOpenedAt||null}}function Nc(e,t){const n=Mi(),s=t&&typeof t=="object"?t:{},a={},o=e?.sessions||{},c=s.sessions||{};return Object.keys(o).forEach(l=>{a[l]=Sc(o[l],c[l])}),Object.keys(c).forEach(l=>{a[l]||(a[l]=Sc(null,c[l]))}),{...n,...e||{},...s||{},sessions:a,activeSessionKey:s.activeSessionKey||e?.activeSessionKey||n.activeSessionKey||null,lastUpdatedAt:s.lastUpdatedAt||e?.lastUpdatedAt||n.lastUpdatedAt||null}}function xc(e,t){return{...e,...t||{},version:Gl,currentLevel:String(t?.currentLevel||e.currentLevel||zl).toUpperCase(),currentNodeId:String(t?.currentNodeId||e.currentNodeId||ke),completedNodes:{...e.completedNodes,...t?.completedNodes||{}},unlockedNodes:{...e.unlockedNodes,...t?.unlockedNodes||{}},activeSession:Pi(t?.activeSession||e.activeSession||null),resultHistory:{...e.resultHistory,...t?.resultHistory||{}},lastUpdatedAt:t?.lastUpdatedAt||e.lastUpdatedAt||null}}function Pi(e){return!e||typeof e!="object"?null:{nodeId:String(e.nodeId||""),mode:String(e.mode||Vt),stepIndex:Math.max(0,Number(e.stepIndex||0)),answers:{...e.answers||{}},mistakes:Array.isArray(e.mistakes)?e.mistakes.slice(0,80):[],reviewStepIds:Array.isArray(e.reviewStepIds)?e.reviewStepIds.map(String).filter(Boolean).slice(0,80):[],score:Number(e.score||0),startedAt:e.startedAt||new Date().toISOString(),updatedAt:e.updatedAt||new Date().toISOString()}}function Ei(){return{currentLessonId:"n5-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0,correctAnswers:0,incorrectAnswers:0,unansweredAnswers:0,totalQuestions:0,mistakeQuestionIds:[],bestScore:0,lastScore:0,passedAt:null,lastRewardXp:0,lastRewardMoon:0},customSentences:[]}}function Ac(e,t){return{...e,...t||{},currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Vn(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:yr(e.exerciseSrs,t?.exerciseSrs||{},"N5"),writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Ki(){return{opened:!1,currentLessonId:"n4-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Cc(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Vn(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:yr(e.exerciseSrs,t?.exerciseSrs||{},"N4"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Di(){return{opened:!1,currentLessonId:"n3-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Lc(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Vn(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:yr(e.exerciseSrs,t?.exerciseSrs||{},"N3"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Oi(){return{opened:!1,currentLessonId:"n2-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Tc(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Vn(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:yr(e.exerciseSrs,t?.exerciseSrs||{},"N2"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Fi(){return{opened:!1,currentLessonId:"bulk-n1-01",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Ic(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Vn(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:yr(e.exerciseSrs,t?.exerciseSrs||{},"N1"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Bi(e,t){return{...e,...t,selected:Array.isArray(t.selected)?t.selected:e.selected,tileKeys:Array.isArray(t.tileKeys)?t.tileKeys:e.tileKeys,recentIds:Array.isArray(t.recentIds)?t.recentIds:e.recentIds,recentAnswers:Array.isArray(t.recentAnswers)?t.recentAnswers:e.recentAnswers,completed:{...e.completed,...t.completed||{}},custom:Array.isArray(t.custom)?t.custom.slice(0,80):e.custom,customSentences:gf(t.customSentences,t.custom),customEditingId:typeof t.customEditingId=="string"?t.customEditingId:null,customDraft:la(t.customDraft||e.customDraft),customMessage:typeof t.customMessage=="string"?t.customMessage:e.customMessage,customStatus:typeof t.customStatus=="string"?t.customStatus:e.customStatus}}function la(e={}){return{jp:String(e.jp??e.sentence??""),hiragana:String(e.hiragana??e.reading??""),ru:String(e.ru??e.translationRu??""),en:String(e.en??e.translationEn??"")}}function gf(e,t){const n=[],s=new Set,a=o=>{if(!o)return;const c=vn(o.jp||Yu(o)),l=ks(c);if(!l||s.has(l))return;s.add(l);const d=String(o.id||"").startsWith("custom_")?String(o.id):`custom_${Ae(l).toString(36)}`;n.push({id:d,jp:c,hiragana:vn(o.hiragana||o.reading||""),ru:vn(o.ru||o.translationRu||""),en:vn(o.en||o.translationEn||""),source:"user"})};return(Array.isArray(e)?e:[]).forEach(a),(Array.isArray(t)?t:[]).forEach(a),n.slice(0,160)}function Rc(e,t){return{...e,...t,activeIds:{...e.activeIds,...t.activeIds||{}},selected:{...e.selected,...t.selected||{}},checked:{...e.checked,...t.checked||{}},results:{...e.results,...t.results||{}},completed:{...e.completed,...t.completed||{}}}}function Gi(){return{warmth:44,trust:40,discipline:35,curiosity:42,mood:"neutral",conversationCount:0,totalDialogueChoices:0,lastInteractionAt:null,lastInteractionDate:null,lastDecayDate:re(),lastKnown:{learned:0,mastered:0,reviews:0,lessons:0,streak:0,wrong:0,writing:0,sentence:0},history:[]}}function _c(){return{enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",currentLine:null,currentQuestion:null,currentDecoration:null,currentEffect:null,mood:"neutral",emotion:"calm",lastSpokeAt:null,nextSpeakAt:null,recentLineIds:[],lastRoomId:null,lastSprite:null}}function Mc(e,t){return{...e,...t,warmth:ce(Number(t.warmth??e.warmth),0,100),trust:ce(Number(t.trust??e.trust),0,100),discipline:ce(Number(t.discipline??e.discipline),0,100),curiosity:ce(Number(t.curiosity??e.curiosity),0,100),lastKnown:{...e.lastKnown,...t.lastKnown||{}},history:Array.isArray(t.history)?t.history.slice(0,40):e.history}}function Pc(e,t){return{...e,...t,enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,32):e.recentLineIds,currentLine:t.currentLine&&typeof t.currentLine=="object"?t.currentLine:e.currentLine,currentQuestion:t.currentQuestion&&typeof t.currentQuestion=="object"?t.currentQuestion:e.currentQuestion,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:e.currentDecoration,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion}}function Kt(){return{lastSeenDate:null,lastInteractionDate:null,lastRoute:null,recentLineIds:[],recentTopics:[],daysSinceReturn:0,lastPraiseAt:null,lastWarningAt:null,timesUserChoseTalkOverStudy:0,timesUserReturnedAfterGap:0,lastReturnCountedDate:null,preferredEvaRoomBackground:null,lastKnownMood:"neutral",recentProblemCluster:null}}function Dn(e,t={}){return{...e,...t,recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,30):e.recentLineIds,recentTopics:Array.isArray(t.recentTopics)?t.recentTopics.slice(0,20):e.recentTopics,daysSinceReturn:Number(t.daysSinceReturn||e.daysSinceReturn||0),timesUserChoseTalkOverStudy:Number(t.timesUserChoseTalkOverStudy||e.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(t.timesUserReturnedAfterGap||e.timesUserReturnedAfterGap||0),lastKnownMood:typeof t.lastKnownMood=="string"?t.lastKnownMood:e.lastKnownMood}}function jt(){return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),presenceState:"idle",mood:"neutral",emotion:"calm",currentPhrase:null,pendingQuestion:null,currentSkin:"idle",currentBackground:"bg_study_hub",currentDecoration:null,currentEffect:"none",activeSkin:"idle",activeBackground:"bg_study_hub",ownedSkins:["idle","default"],ownedBackgrounds:["bg_study_hub"],ownedEffects:[],ownedDecorations:[],lastEvent:null,lastQuestion:null,lastPhraseAt:0,lastEmotionChangeAt:0,lastQuestionAt:0,lastVisualChangeAt:0,lastPlayerActionAt:Date.now(),textRevealSkippedLineId:null,memory:Kt(),questionHistory:[],clickCount:0,eventHistory:[],recentEvents:[],cooldowns:{emotion:18e3,phrase:65e3,question:24e4,visual:72e4}}}function mf(){const e=jt();let t=null;try{const n=localStorage.getItem(B);t=n?JSON.parse(n):null}catch(n){console.warn("Eva state reset because stored JSON is invalid.",n)}r.evaRuntime=vf(e,t||hf()),ff(),On()}function ff(){if(!r.evaRuntime)return;r.evaRuntime.memory=Dn(Kt(),r.evaRuntime.memory||{});const e=r.evaRuntime.memory,t=re(),n=e.lastSeenDate||null,s=n?Math.max(0,xn(n,t)):0;e.daysSinceReturn=s,s>0&&e.lastReturnCountedDate!==t&&(e.timesUserReturnedAfterGap=Number(e.timesUserReturnedAfterGap||0)+1,e.lastReturnCountedDate=t),e.lastSeenDate=t,e.lastRoute=r.route,e.preferredEvaRoomBackground=r.progress?.selectedEvaRoomBackground||e.preferredEvaRoomBackground||"bg_study_hub",e.lastKnownMood=r.evaRuntime.mood||e.lastKnownMood||"neutral"}function hf(){const e=r.progress?.evaAutonomy||{};return{currentSkin:r.progress?.selectedEvaSprite||e.lastSprite||"idle",currentBackground:r.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",currentDecoration:r.customization?.selected?.decoration||r.customization?.selected?.frame||null,currentEffect:r.customization?.selected?.effect||"none",activeSkin:r.progress?.selectedEvaSprite||e.lastSprite||"idle",activeBackground:r.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",lastEvent:e.currentLine?.reason?{type:e.currentLine.reason,at:e.currentLine.at}:null}}function vf(e,t={}){return{...e,...t,version:3,updatedAt:new Date().toISOString(),presenceState:typeof t.presenceState=="string"?t.presenceState:e.presenceState,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion,currentPhrase:t.currentPhrase&&typeof t.currentPhrase=="object"?t.currentPhrase:e.currentPhrase,pendingQuestion:t.pendingQuestion&&typeof t.pendingQuestion=="object"?t.pendingQuestion:e.pendingQuestion,currentSkin:typeof t.currentSkin=="string"?t.currentSkin:e.currentSkin,currentBackground:typeof t.currentBackground=="string"?t.currentBackground:e.currentBackground,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:null,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,activeSkin:typeof t.activeSkin=="string"?t.activeSkin:t.currentSkin||e.activeSkin,activeBackground:typeof t.activeBackground=="string"?t.activeBackground:t.currentBackground||e.activeBackground,ownedSkins:Array.isArray(t.ownedSkins)?t.ownedSkins:e.ownedSkins,ownedBackgrounds:Array.isArray(t.ownedBackgrounds)?t.ownedBackgrounds:e.ownedBackgrounds,ownedEffects:Array.isArray(t.ownedEffects)?t.ownedEffects:e.ownedEffects,ownedDecorations:Array.isArray(t.ownedDecorations)?t.ownedDecorations:e.ownedDecorations,lastPhraseAt:Number(t.lastPhraseAt||e.lastPhraseAt||0),lastEmotionChangeAt:Number(t.lastEmotionChangeAt||e.lastEmotionChangeAt||0),lastQuestionAt:Number(t.lastQuestionAt||e.lastQuestionAt||0),lastVisualChangeAt:Number(t.lastVisualChangeAt||e.lastVisualChangeAt||0),lastPlayerActionAt:Number(t.lastPlayerActionAt||e.lastPlayerActionAt||Date.now()),textRevealSkippedLineId:typeof t.textRevealSkippedLineId=="string"?t.textRevealSkippedLineId:null,memory:Dn(e.memory||Kt(),t.memory||{}),questionHistory:Array.isArray(t.questionHistory)?t.questionHistory.slice(0,40):e.questionHistory,eventHistory:Array.isArray(t.eventHistory)?t.eventHistory.slice(0,80):e.eventHistory,recentEvents:Array.isArray(t.recentEvents)?t.recentEvents.slice(0,80):e.recentEvents,cooldowns:{...e.cooldowns,...t.cooldowns||{}},clickCount:Number(t.clickCount||e.clickCount||0)}}function zi(){if(!r.evaRuntime)return!1;Ec(),r.evaRuntime.updatedAt=new Date().toISOString(),vi=!1,Rn&&("cancelIdleCallback"in window?window.cancelIdleCallback(Rn):window.clearTimeout(Rn),Rn=0);try{return localStorage.setItem(B,JSON.stringify(r.evaRuntime)),!0}catch(e){return console.warn("Eva state could not be saved.",e),!1}}function On(e={}){if(!r.evaRuntime)return!1;if(e?.immediate)return zi();if(vi)return!0;vi=!0;const t=()=>{Rn=0,zi()};return"requestIdleCallback"in window?Rn=window.requestIdleCallback(t,{timeout:1200}):Rn=window.setTimeout(t,160),!0}function Ji(){Ui(),zi(),Am()}function Ec(){if(!r.evaRuntime||!r.progress)return;const e=r.progress.selectedEvaRoomBackground||r.customization?.selected?.background||"bg_study_hub",t=Ve().filter(n=>Ct(n.id));r.evaRuntime.ownedSkins=[...new Set(["idle","default",...r.progress.unlockedEvaSprites||[],...t.filter(n=>n.type==="outfit").map(n=>n.spriteId||n.id)].filter(Boolean))],r.evaRuntime.ownedBackgrounds=[...new Set(["bg_study_hub",...r.progress.unlockedBackgrounds||[],...t.filter(n=>n.type==="background").map(n=>n.id)].filter(Boolean))],r.evaRuntime.ownedEffects=[...new Set(t.filter(n=>n.type==="effect").map(n=>n.id))],r.evaRuntime.ownedDecorations=[...new Set(t.filter(n=>n.type==="decoration").map(n=>n.id))],r.evaRuntime.currentBackground=e,r.evaRuntime.activeSkin=r.evaRuntime.currentSkin||r.progress.selectedEvaSprite||"idle",r.evaRuntime.activeBackground=e}function Ui(){return r.progress?(r.progress.level=ti(r.progress.xp),r.progress.updatedAt=new Date().toISOString(),hi=!1,In&&("cancelIdleCallback"in window?window.cancelIdleCallback(In):window.clearTimeout(In),In=0),DN(r.progress)):!1}function j(e={}){if(!r.progress)return!1;if(e?.immediate)return Ui();if(hi)return!0;hi=!0;const t=()=>{In=0,Ui()};return"requestIdleCallback"in window?In=window.requestIdleCallback(t,{timeout:1200}):In=window.setTimeout(t,120),!0}function Kc(e,t,{timeout:n=0}={}){const s=()=>{try{const a=t?.();a&&typeof a.then=="function"&&a.catch(o=>console.warn(`[Flash Kanji] ${e} failed.`,o))}catch(a){console.warn(`[Flash Kanji] ${e} failed.`,a)}};requestAnimationFrame(()=>window.setTimeout(s,n))}function St(e,t){Kc(e,()=>{const n=t?.();n&&typeof n.then=="function"&&n.catch(s=>console.warn(`[Flash Kanji] ${e} failed.`,s)),j(),Dt()})}function wf(e){const t=e?.dataset?.action||"",n=bf(t,e);return n?Ni.has(n)?!1:(Ni.add(n),requestAnimationFrame(()=>window.setTimeout(()=>Ni.delete(n),0)),!0):!0}function bf(e,t){return e?e==="rate"?`rate:${r.activeCardId||""}:${t?.dataset?.rating||""}`:e==="jlpt-lesson-answer"?`jlpt:${t?.dataset?.level||""}:${t?.dataset?.lesson||t?.dataset?.lessonId||""}:${t?.dataset?.card||t?.dataset?.id||""}`:e==="reading-review-answer"?`reading-review:${r.activeExerciseReviewLevel||""}:${r.activeExerciseReviewId||""}:${t?.dataset?.question||""}`:/^n[1-5]-(answer|srs|check-input|grammar-complete|reading-complete|listening-complete)$/.test(e)?`${e}:${t?.dataset?.id||""}:${t?.dataset?.rating||t?.dataset?.value||t?.dataset?.question||""}`:"":""}function Hs(){r.cards.forEach(s=>M(s.id)),r.progress.level=ti(r.progress.xp),r.progress.totalMoonFragmentsEarned=Math.max(Number(r.progress.totalMoonFragmentsEarned||0),Number(r.progress.moonFragments||0),uS()),le(),Zs(),rr(),ko(),So(),Co(),typeof La=="function"&&La();const e=As(),t=[za(V(),"N5"),za(U(),"N4"),za(z(),"N3"),za(J(),"N2"),Ja(V(),"N5"),Ja(U(),"N4"),Ja(z(),"N3"),Ja(J(),"N2")].some(Boolean);[V(),U(),z(),J(),typeof Y=="function"?Y():null].filter(Boolean).forEach(s=>kf(s)),(t||e)&&j(),ca();const n=r.lessons.find(s=>Te(s));r.activeLessonId||(r.activeLessonId=n?.id||r.lessons[0]?.id||null)}function kf(e){e&&(e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={}),e.viewedLessons=Vn(e.viewedLessons||{}),Object.entries(e.srsKanji).forEach(([t,n])=>{e.studiedKanji[t]||(e.studiedKanji[t]=n)}),Object.entries(e.studiedKanji).forEach(([t,n])=>{e.srsKanji[t]||(e.srsKanji[t]=n)}))}function as(e,t,n=new Date().toISOString()){if(!e||!t)return"";e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={});const s=e.studiedKanji[t],a=e.srsKanji[t],o=s||a||n;return e.studiedKanji[t]=o,e.srsKanji[t]=a||o,o}function ca(){r.progress.learningPath=xc(_i(),r.progress.learningPath||{});const e=r.progress.learningPath,t=e.completedNodes,n=e.unlockedNodes;n[ke]=!0,(Object.keys(r.progress.seenKanji||{}).length>0||Object.keys(V().studiedKanji||{}).length>0||Object.keys(V().completedLessons||{}).length>0||Object.keys(r.progress.lessonCompletions||{}).length>0)&&!t[ke]&&(t[ke]=r.progress.visits?.firstVisitDate||new Date().toISOString()),qi().forEach((o,c)=>{V().completedLessons?.[o]&&!t[o]&&(t[o]=V().completedLessons[o]),n[o]=!0});const a=Dc();e.currentNodeId=a,n[a]=!0,e.activeSession?.nodeId&&t[e.activeSession.nodeId]&&(e.activeSession=null),e.lastUpdatedAt=new Date().toISOString()}function qi(){const e=(r.n5Textbook?.items||[]).map(t=>String(t.id||"")).filter(Boolean);return e.length?e:Yg.filter(t=>/^n5-lesson-\d+$/i.test(t))}function Dc(){const e=r.progress?.learningPath||_i(),t=[ke,...qi(),es];return t.find(n=>!e.completedNodes?.[n])||t[t.length-1]||ke}function Hi(){return r.n5Textbook?.items?.length?Promise.resolve(r.n5Textbook):Js||(Js=Qe(E.n5Lessons).then(e=>(r.n5Textbook=oc(e),ca(),(r.route==="learn"||r.route==="home")&&x(),r.n5Textbook)).catch(e=>{throw Js=null,e}),Js)}function yf(e){const t=String(e||"");if(!t)return Promise.resolve(null);if(r.learningPathLessonPayloads[t])return Promise.resolve(r.learningPathLessonPayloads[t]);const n=Zg[t];if(!n){const a=tr(t);return a&&(r.learningPathLessonPayloads[t]=a),Promise.resolve(a)}if(Yr.has(t))return Yr.get(t);const s=Qe(n).then(a=>(r.learningPathLessonPayloads[t]=a||tr(t),r.route==="learn"&&r.activeLearnNodeId===t&&x(),r.learningPathLessonPayloads[t])).catch(a=>{const o=tr(t);if(o)return r.learningPathLessonPayloads[t]=o,r.route==="learn"&&r.activeLearnNodeId===t&&x(),o;throw a}).finally(()=>{Yr.delete(t)});return Yr.set(t,s),s}function tn(){return ca(),r.progress.learningPath}function Wi(){const e=tn().activeSession;return!e?.nodeId||tn().completedNodes?.[e.nodeId]?null:e}function is(){const e=Wi();return e?.nodeId?e.nodeId:tn().currentNodeId||Dc()||ke}function Oc(e){const t=os(e);return t?f(t.title):$f(e)}function $f(e){const t=String(e||"");if(t===ke)return p()==="ru"?"Введение в маршрут":"Route introduction";if(t===es)return p()==="ru"?"Контрольная точка N5":"N5 checkpoint";const n=pt(t);if(n)return f(n.title);const s=t.match(/n5-lesson-(\d+)/i);return s?p()==="ru"?`N5 · Урок ${s[1]}`:`N5 · Lesson ${s[1]}`:t}function jf(e){const t=os(e);return t?f(t.summary):""}function oe(){return p()==="ru"?{route:"Маршрут обучения",intro:"Введение",checkpoint:"Контрольная точка",review:"Повторение",available:"доступно",current:"сейчас",completed:"завершено",locked:"закрыто",due:"нужно повторить",minutes:"мин",lessons:"уроки",start:"Начать учиться",resume:"Продолжить урок",next:"Следующий урок",reviewAction:"Повторить",reviewOld:"Повторить старое",continue:"Дальше",finish:"Завершить",backToMap:"К маршруту",openTextbook:"Открыть учебник",openCheckpoint:"К тесту",score:"Результат",mistakes:"Ошибки",retryMistakes:"Повторить ошибки",continuePath:"Продолжить путь",ready:"Готово",introTitle:"Как тут учиться",introSummary:"Кандзи идут по цепочке: знак -> смысл -> чтение -> пример -> повторение.",introBody:"Сначала берём один маленький блок, потом отправляем его в повторение. Не нужно держать всё в голове за раз.",introBridge:"Если что-то тяжело, это не провал. Значит, карточка просто раньше вернётся в повторение.",introQuestion:"Куда отправляются карточки после урока?",introQuestionHint:"Выбери правильный путь.",loading:"Подгружаю маршрут...",empty:"Маршрут скоро появится.",nextLesson:"Следующий шаг",lessonTrack:"Текущий уровень",reviewQueue:"К повторению",streak:"Стрик",level:"Уровень",xp:"XP",mapHint:"Сначала идём по текущему уровню. Остальные уровни остаются в учебниках.",step:"Шаг",finishHint:"После урока карточки попадут в повторение.",scoreHint:"Вернёмся к ошибкам или двинемся дальше."}:{route:"Learning path",intro:"Intro",checkpoint:"Checkpoint",review:"Review",available:"available",current:"current",completed:"done",locked:"locked",due:"review due",minutes:"min",lessons:"lessons",start:"Start learning",resume:"Resume lesson",next:"Next lesson",reviewAction:"Review",reviewOld:"Review old material",continue:"Next",finish:"Finish",backToMap:"Back to path",openTextbook:"Open textbook",openCheckpoint:"Open test",score:"Score",mistakes:"Ошибки",retryMistakes:"Retry mistakes",continuePath:"Continue path",ready:"Done",introTitle:"How this route works",introSummary:"Kanji move through a chain: sign -> meaning -> reading -> example -> review.",introBody:"Take one small block first, then send it into review. You do not need to hold everything at once.",introBridge:"If something feels hard, that is not failure. It only means the card should return sooner.",introQuestion:"Where do cards go after the lesson?",introQuestionHint:"Choose the correct path.",loading:"Loading the path...",empty:"The path will appear soon.",nextLesson:"Next step",lessonTrack:"Current level",reviewQueue:"Due now",streak:"Streak",level:"Level",xp:"XP",mapHint:"Stay on the current level here. The rest remains in textbooks.",step:"Шаг",finishHint:"After the lesson the cards move to review.",scoreHint:"Retry mistakes or keep moving."}}function Sf(){const e=oe();return{id:ke,type:"lesson",level:"INTRO",title:{ru:e.introTitle,en:e.introTitle},summary:{ru:e.introSummary,en:e.introSummary},durationMinutes:3}}function Nf(){const e=Ke();return oe(),{id:Zn,type:"review",level:"SRS",title:{ru:`Повторение: ${e}`,en:`Review: ${e}`},summary:{ru:e>0?"Карточки, которые уже нужно вернуть в память.":"Очередь пуста, можно идти дальше.",en:e>0?"Cards that should return now.":"Queue is empty, move on."},durationMinutes:Math.max(2,Math.min(12,e))}}function xf(){return{id:es,type:"checkpoint",level:"N5",title:{ru:"Контрольная точка N5",en:"N5 checkpoint"},summary:{ru:"Повторение блока и переход к финальному тесту уровня.",en:"Review the block and move into the level final test."},durationMinutes:12}}function Af(){return qi().map((e,t)=>({id:e,type:"lesson",level:"N5",title:{ru:`N5 · Урок ${t+1}`,en:`N5 · Lesson ${t+1}`},summary:t===0?{ru:"Первый интерактивный урок: 4 знака, чтения, примеры и мини-практика.",en:"First interactive lesson: 4 signs, readings, examples, and mini practice."}:{ru:"Откроем карточки урока прямо из учебника.",en:"Open this lesson directly from the textbook."},durationMinutes:t===0?12:10}))}function Fc(){const e=Sf(),t=Nf(),n=xf(),s=r.n5Textbook?.items?.length?r.n5Textbook.items.map((o,c)=>({id:o.id,type:"lesson",level:"N5",title:o.title,summary:o.goal||o.theme||{ru:"",en:""},durationMinutes:Number(o.durationMinutes||o.estimatedMinutes||10)})):Af(),a=[e];return Ke()>0&&a.push(t),[...a,...s,n]}function os(e){const t=String(e||"");return t&&Fc().find(n=>n.id===t)||null}function Bc(e){if(!e)return"locked";if(e.id===Zn)return Ke()>0?"review":"available";const t=tn();return t.completedNodes?.[e.id]?"completed":is()===e.id?"current":t.unlockedNodes?.[e.id]?e.type==="checkpoint"?"checkpoint":"available":"locked"}function Cf(e){const t=oe();return e==="completed"?t.completed:e==="current"?t.current:e==="available"?t.available:e==="review"?t.due:e==="checkpoint"?t.checkpoint:t.locked}function Gc(){const e=tn(),t=Ke(),n=Wi(),s=is(),a=os(s),o=Number(Jt().reviews||0)>=Number(r.progress.settings.dailyGoal||0);return!e.completedNodes?.[ke]&&!n?{kind:"node",label:oe().start,nodeId:ke}:n?.nodeId?{kind:"node",label:oe().resume,nodeId:n.nodeId}:t>0?{kind:"review",label:`${oe().reviewAction}: ${t}`,nodeId:Zn}:o&&a?{kind:"node",label:oe().next,nodeId:a.id}:a?{kind:"node",label:e.completedNodes?.[ke]?oe().resume:oe().start,nodeId:a.id}:{kind:"review",label:oe().reviewOld,nodeId:Zn}}function Lf(){const e=oe(),t=zS(),n=t?.level||Ht(),s=t?.lessonId||ml(n),a=Xn(n),o=ig(n);return{label:!!(t?.lessonId||a&&(Object.keys(a.completedLessons||{}).length>0||a.currentLessonId&&a.currentLessonId!==o))?e.resume:e.start,level:n,lessonId:s}}function Tf(){const e=qt(),t=Ke(),n=oe();return[{label:n.streak,value:r.progress.streak.current},{label:n.level,value:r.progress.level},{label:n.xp,value:`${e.current}/${e.next}`},{label:n.reviewQueue,value:t}]}function If(e){return`
      <article class="metric home-summary-card">
        <span>${i(e.label)}</span>
        <strong>${i(e.value)}</strong>
      </article>
    `}function Rf(){const e=p()==="ru",t=ho();return _e.map(n=>{const s=Mt(n),a=Za(n),o=Xn(n),c=n==="N5"?Gn():Object.keys(o?.completedLessons||{}).length,l=Math.max(Number(s?.lessonCount||0),a.length||0),d=it(n),u=sg(n),m=!u&&t===n,h=f(s?.displayTitle||s?.title||{ru:`Учебник ${n}`,en:`Textbook ${n}`}),v=l>0?`${c}/${l} ${e?"уроков":"lessons"}`:e?"Без уроков":"No lessons",w=u?e?"Пройдено":"Completed":m?`${v} · ${e?"сейчас":"now"}`:d?v:Ut(n);return{level:n,title:h,note:w,status:u?"done":m?"current":d?"open":"locked"}})}function _f(e){const t=`data-action="route" data-route="textbooks" data-subroute="${g(e.level)}"`;return`
      <button class="home-route-step is-${g(e.status)}" type="button" ${t} aria-label="${g((p()==="ru"?"Открыть учебник":"Open textbook")+` ${e.level} — ${e.title}`)}">
        <span class="home-route-step-icon home-route-step-icon--level" aria-hidden="true">${i(e.level)}</span>
        <strong>${i(e.title)}</strong>
        <small>${i(e.note)}</small>
      </button>
    `}function Mf(e){return`
      <button class="home-task-item" type="button" ${e.action==="route"?`data-action="route" data-route="${g(e.route||"")}"`:e.action==="home-lesson"?`data-action="home-lesson" data-level="${g(e.level||"")}" data-lesson-id="${g(e.lessonId||"")}"`:`data-action="${g(e.action)}"`}>
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.detail)}</p>
        </span>
        <span class="home-task-item-count" aria-hidden="true">${i(String(e.count??0))}</span>
      </button>
    `}function zc(){const e=is();return{title:Oc(e),summary:jf(e)}}function M(e){const t=String(e);r.progress.cards[t]||(r.progress.cards[t]={state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]});const n=gi(r.progress.cards[t]);return n.successRate=hg(n),Number.isFinite(Number(n.srsStep))?n.srsStep=ce(Math.trunc(Number(n.srsStep)),-1,63):n.srsStep=Qi(n),r.progress.cards[t]=n,n}function Ws(e,t="seen"){if(!r.progress||!e?.id)return!1;le();const n=new Date().toISOString();let s=!1;const a=String(e.id);return r.progress.seenCards[a]||(r.progress.seenCards[a]=n,s=!0),e.kanji&&!r.progress.seenKanji[e.kanji]&&(r.progress.seenKanji[e.kanji]={at:n,cardId:a,source:t,jlpt:e.jlpt||""},s=!0),s}function Xs(e,t="seen"){Ws(e,t)&&j()}const ct=[5/1440,1/24,12/24,1,2,4],Xi=1;function Qi(e){const t=Number(e?.intervalDays||0);if(!(t>0))return-1;for(let s=0;s<ct.length;s+=1)if(t<=ct[s]*1.08)return s;const n=ct[ct.length-1];return ct.length-1+Math.max(1,Math.round(Math.log2(t/n)))}function Pf(e){const t=Math.trunc(e);return t<0?0:t<ct.length?ct[t]||ct[0]:ct[ct.length-1]*2**(t-(ct.length-1))}function Ef(e,t,n=Xi){const s=Array.isArray(e)?e.slice():[],a=Array.isArray(t)?t.slice():[],o=[],c=Math.max(1,Math.trunc(Number(n)||Xi));let l=0,d=0,u=0;for(;l<s.length||d<a.length;){if(u>=c&&d<a.length){o.push(a[d++]),u=0;continue}if(l<s.length){o.push(s[l++]),u+=1;continue}if(d<a.length){o.push(a[d++]),u=0;continue}break}return o}function Kf(e,t){const n=Qi(e);return t==="again"?0:t==="hard"?n<1?1:n:t==="easy"?n<0?2:n+2:n<0?0:n+1}function Df(e){const t=Math.max(1,Math.round(e*24*60));if(t<60)return p()==="ru"?`${t} мин.`:`${t} min`;const n=Math.round(t/60);if(n<24)return p()==="ru"?`${n} ?.`:`${n} h`;const s=Math.round(n/24);return p()==="ru"?`${s} ??.`:`${s} d`}function da(e){const t=e.state==="Learning"?3:e.state==="Review"?2:e.state==="Mastered"?1:0,n=Number(e.lapses||0),s=Number(e.wrong||0),a=Number(e.correct||0);return t+n*4+s*2-a*.05}function Nt(e,t,n="jlpt_lesson"){if(!t)return!1;const a=Jc(e,t).reduce((o,c)=>Ws(c,n)||o,!1);return a&&j(),a}function Jc(e,t){const n=String(e||"").toUpperCase();return n==="N5"?on(t):n==="N4"?ur(t):n==="N3"?gr(t):n==="N2"?fr(t):(t?.kanji||[]).map(s=>r.cards.find(a=>a.kanji===s&&String(a.jlpt||"").toUpperCase()===n)).filter(Boolean)}function Of(e){const t=r.progress?.cards?.[String(e?.id||"")];return t?t.state&&t.state!=="New"?!0:!!(t.lastReviewedAt||t.lastReviewedAt||Number(t.reviewCount||0)>0||Number(t.correct||0)>0||Number(t.wrong||0)>0||Number(t.lapses||0)>0):!1}function Uc(){return le(),r.progress.evaRoomQuiz}function qc(){const e=[r.cards||[],typeof Lt=="function"?Lt():[],typeof Ge=="function"?Ge():[],typeof Je=="function"?Je():[],typeof qe=="function"?qe():[]];return Hc(e.flat().filter(Boolean))}function Ff(){if(!r.progress)return[];le();const e=new Set(Object.keys(r.progress.seenCards||{})),t=new Set(Object.keys(r.progress.seenKanji||{})),n=new Set(Object.keys(r.progress.lessonCompletions||{})),s=Bf(),a=qc().filter(o=>{if(!o?.id||!o.kanji||!Ie(o,"ru")||!Ie(o,"en"))return!1;const c=String(o.jlpt||"").toUpperCase();return e.has(String(o.id))||t.has(o.kanji)||Of(o)||n.has(o.lessonId)||s.has(`${c}:${o.kanji}`)||s.has(o.kanji)});return Hc(a)}function Bf(){const e=new Set,t=(n,s)=>{if(!s)return;const a=String(n||"").toUpperCase();e.add(String(s)),a&&e.add(`${a}:${s}`)};return Vi().forEach(n=>{const s=n.course();Object.keys(s.studiedKanji||{}).forEach(a=>t(n.level,a)),Object.keys(s.completedLessons||{}).forEach(a=>{(n.lessonById(a)?.kanji||[]).forEach(c=>t(n.level,c))})}),e}function Vi(){return[{level:"N5",course:V,lessonById:pt,markStudied:fs,markDifficult:cr},{level:"N4",course:U,lessonById:cn,markStudied:hs,markDifficult:pr},{level:"N3",course:z,lessonById:un,markStudied:vs,markDifficult:mr},{level:"N2",course:J,lessonById:gn,markStudied:ws,markDifficult:hr}]}function Hc(e){const t=new Set;return e.filter(n=>{const s=`${n.kanji}:${Ie(n,"ru")}:${Ie(n,"en")}`;return t.has(s)?!1:(t.add(s),!0)})}function Gf(e){!(e instanceof HTMLElement)||e.hasAttribute("disabled")||(e.classList.add("is-action-pressed"),window.requestAnimationFrame(()=>{window.setTimeout(()=>e.classList.remove("is-action-pressed"),120)}))}function zf(e){if(e.target.classList?.contains("detail-backdrop")){I("menu_close"),r.detailCardId=null,ie();return}if(e.target.classList?.contains("final-test-backdrop")){r.finalTestModal=null,r.finalTestBusy=!1,ie();return}if(e.target.classList?.contains("changelog-backdrop")){Li();return}const t=e.target.closest(".nav-popover, .bottom-nav");if(r.navMenu&&!t&&!e.target.closest("[data-action]")){r.navMenu=null,ie();return}const n=e.target.closest("[data-action]");if(!n)return;const s=n.dataset.action,a=n.dataset.id;if(Gf(n),!!wf(n)&&!(["eva-click","eva-autonomy-next","eva-question-answer"].includes(s)&&Date.now()-ec<280)){if(s&&s.endsWith("-complete-lesson")){const c=`${s.split("-")[0]}:${a||""}`;if(ae.has(c)){n&&(n.disabled=!0,n.textContent=p()==="ru"?"Урок завершён":"Lesson completed");return}}if(Yi(s),requestAnimationFrame(()=>window.setTimeout(()=>qf(s,n),0)),s==="route"){const o=n.dataset.route;if(n.closest(".bottom-nav")&&ma(o)){fh(o);return}r.navMenu=null,o==="writing"&&r.detailCardId&&(r.activeCardId=r.detailCardId),Be(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="nav-menu-route"){const o=n.dataset.route;r.navMenu=null,o==="writing"&&r.detailCardId&&(r.activeCardId=r.detailCardId),Be(o,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="share-page"&&lg(n.dataset.shareSection||r.route,FS(n)).catch(()=>F(p()==="ru"?"Не удалось поделиться":"Share failed")),s==="toggle-header-socials"&&gg(!bl()),s==="notification-center"){if(r.notificationPromptVisible){wg();return}(r.notificationPrompt?.docked||ci("header"))&&di("header");return}if(s==="repeat-onboarding"){no({force:!0});return}if(s==="onboarding-next"){id();return}if(s==="onboarding-prev"){od();return}if(s==="onboarding-continue"){ph();return}if(s==="onboarding-close"||s==="onboarding-skip"){Ys({completed:s==="onboarding-close"});return}if(s==="dismiss-mascot-speech"){fp(n.dataset.speechKey||"");return}if(s==="contact-email"&&(r.navMenu=null,r.contactModal=!0,ie()),s==="copy-contact-email"&&ug(Qt).then(o=>{F(o?p()==="ru"?"Email скопирован":"Email copied":p()==="ru"?"Не удалось скопировать email":"Could not copy email")}),s==="close-contact-modal"&&(r.contactModal=!1,ie()),s==="close-changelog"){Li();return}if(s==="close-pwa-install-help"&&(r.pwaInstallHelpVisible=!1,ie()),s==="close-nav-menu"&&(r.navMenu=null,ie()),s==="close-final-test-modal"&&(r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=null,ie()),s==="final-test-focus-missing"){const o=n.dataset.focus||r.finalTestModal?.focusSelector||null;r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=o,ie()}if(s==="final-test-force-submit"){const o=String(n.dataset.level||r.finalTestModal?.level||"N5").toUpperCase();o==="N4"?du(!0):o==="N3"?$u(!0):o==="N2"?Mu(!0):o==="N1"?Uu(!0):Yd(!0)}if(s==="final-test-next-level"){const o=Q(n.dataset.nextLevel||""),c=String(n.dataset.nextLesson||"");if(!o||!c)return;r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=null,ei(o,c);return}if(s==="scroll-page-edge"&&((n.dataset.direction||so())==="up"?ga():gh()),s==="theme"&&o0(),s==="language"&&l0(),s==="sound"&&pg(),s==="toggle-ux-sound"&&c0(),s==="export"&&OS(),s==="import"&&tc.click(),s==="reset"&&i0(),s==="share-achievement"&&ZS().catch(()=>F(A("shareFallback"))),s==="pwa-install"&&M0(),s==="pwa-later"&&xl(),s==="notification-allow"&&O0(),s==="notification-later"&&ui(),s==="mascot-click"&&Ij(n.dataset.character),s==="eva-click"&&kp(),s==="eva-dialogue-skip"&&Uf(n),s==="dictionary-favorites-tab"&&(r.filters.favorites=n.dataset.favorites||"all",r.dictionaryVisibleCount=Ks,ie()),s==="set-learn-jlpt"){r.activeLearnJlpt=String(n.dataset.jlpt||"all").toUpperCase();const o=fo();Md(o),r.activeCardId=null,ie()}if(s==="dictionary-load-more"&&(r.dictionaryVisibleCount+=Vg,ie()),s==="toggle-favorite"&&gS(a),s==="eva-room-choice"&&xv(n),s==="eva-question-answer"&&vv(n),s==="eva-room-reset"&&Cv(),s==="toggle-eva-autonomy"&&Kv(),s==="cycle-eva-autonomy"&&Dv(),s==="eva-autonomy-room-mode"&&Ov(),s==="eva-autonomy-outfit-mode"&&Fv(),s==="eva-autonomy-next"&&Rd(),s==="eva-autonomy-clear"&&Bv(),s==="eva-room-shop-open"&&(r.evaRoomShopOpen=!0,$e("shop_opened"),ie()),s==="eva-room-shop-close"&&(r.evaRoomShopOpen=!1,ie()),s==="eva-bg-buy"&&Lv(a),s==="eva-bg-select"&&Tv(a),s==="eva-sprite-buy"&&Iv(a),s==="eva-sprite-select"&&Rv(a),s==="shop-category"&&(r.shopFilters.category=n.dataset.category||"all",ie()),s==="shop-filter"&&(r.shopFilters.view=n.dataset.filter||"all",ie()),s==="shop-sort"&&(r.shopFilters.sort=n.dataset.sort||"featured",ie()),s==="shop-buy"&&Sa(a),s==="shop-select"&&Na(a),s==="shop-clear-effect"&&Id(a),s==="shop-clear-item"&&Pv(a),s==="clear-writing"&&Gj(),s==="undo-writing"&&zj(),s==="check-writing"&&Jj(!0),s==="replay-writing"&&Np(),s==="play-writing-step"&&xp(),s==="writing-step-prev"&&Ap(-1),s==="writing-step-next"&&Ap(1),s==="select-writing-step"&&Cp(Number(n.dataset.index||0),!0),s==="insert-sentence-tile"&&p$(Number(n.dataset.index)),s==="undo-sentence-tile"&&g$(),s==="clear-sentence"&&m$(),s==="check-sentence"&&f$(),s==="next-sentence"&&v$(),s==="reading-review-tile"&&Mw(Number(n.dataset.index)),s==="reading-review-undo"&&Pw(),s==="reading-review-clear"&&Ew(),s==="reading-review-check"&&Wd(),s==="reading-review-answer"&&_w(n),s==="toggle-reading-translation"&&Kw(),s==="add-custom-sentence"&&Vy(),s==="edit-custom-sentence"&&Zy(n.dataset.id),s==="delete-custom-sentence"&&e$(n.dataset.id),s==="cancel-custom-sentence-edit"&&t$(),s==="insert-jlpt-tile"&&MS(Number(n.dataset.index)),s==="undo-jlpt-tile"&&PS(),s==="clear-jlpt-practice"&&ES(),s==="check-jlpt-practice"&&KS(),s==="next-jlpt-practice"&&DS(),s==="n5-open-lesson"&&zw(a),s==="n5-overview"&&Jw(),s==="n5-review"&&Uw(n.dataset.mode||null),s==="n5-answer"&&Dw(n),s==="n5-check-input"&&Ow(a),s==="n5-srs"&&Qd(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n5-writing-done"&&Bw(a),s==="n5-complete-lesson"&&Gw(a),s==="jlpt-lesson-answer"&&Fw(n.dataset.level||"",n.dataset.lesson||n.dataset.lessonId||"",n.dataset.card||a,String(n.dataset.value||"")==="remember"),s==="n5-final-answer"&&Ww(n),s==="n5-final-submit"&&Yd(),s==="n5-final-reset"&&Xw(),s==="n4-open-lesson"&&kb(a),s==="n4-overview"&&yb(),s==="n4-review"&&$b(n.dataset.mode||null),s==="n4-kanji"&&jb(),s==="n4-grammar"&&Sb(),s==="n4-reading"&&Nb(),s==="n4-listening"&&xb(),s==="n4-final"&&Ab(),s==="n4-answer"&&gb(n),s==="n4-check-input"&&mb(a),s==="n4-srs"&&ou(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n4-writing-done"&&fb(a),s==="n4-complete-lesson"&&hb(a),s==="n4-grammar-complete"&&vb(a,n.dataset.value||""),s==="n4-reading-complete"&&wb(a,n.dataset.question||"",n.dataset.value||""),s==="n4-listening-complete"&&bb(a,n.dataset.question||"",n.dataset.value||""),s==="n4-final-answer"&&Tb(n),s==="n4-final-submit"&&du(),s==="n4-final-reset"&&Ib(),s==="n3-open-lesson"&&sk(a),s==="n3-overview"&&rk(),s==="n3-review"&&ak(n.dataset.mode||null),s==="n3-kanji"&&ik(),s==="n3-grammar"&&ok(),s==="n3-reading"&&lk(),s==="n3-listening"&&ck(),s==="n3-final"&&dk(),s==="n3-answer"&&Qb(n),s==="n3-check-input"&&Vb(a),s==="n3-srs"&&bu(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n3-writing-done"&&Yb(a),s==="n3-complete-lesson"&&Zb(a),s==="n3-grammar-complete"&&ek(a,n.dataset.value||""),s==="n3-reading-complete"&&tk(a,n.dataset.question||"",n.dataset.value||""),s==="n3-listening-complete"&&nk(a,n.dataset.question||"",n.dataset.value||""),s==="n3-final-answer"&&gk(n),s==="n3-final-submit"&&$u(),s==="n3-final-reset"&&mk(),s==="n2-open-lesson"&&Fk(a),s==="n2-overview"&&Bk(),s==="n2-review"&&Gk(n.dataset.mode||null),s==="n2-kanji"&&zk(),s==="n2-grammar"&&Jk(),s==="n2-reading"&&Uk(),s==="n2-listening"&&qk(),s==="n2-final"&&Hk(),s==="n2-answer"&&_k(n),s==="n2-check-input"&&Mk(a),s==="n2-srs"&&Iu(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n2-writing-done"&&Pk(a),s==="n2-complete-lesson"&&Ek(a),s==="n2-grammar-complete"&&Kk(a,n.dataset.value||""),s==="n2-reading-complete"&&Dk(a,n.dataset.question||"",n.dataset.value||""),s==="n2-listening-complete"&&Ok(a,n.dataset.question||"",n.dataset.value||""),s==="n2-final-answer"&&Qk(n),s==="n2-final-submit"&&Mu(),s==="n2-final-reset"&&Vk(),s==="n1-open-lesson"&&Sy(a),s==="n1-overview"&&Ny(),s==="n1-review"&&xy(n.dataset.mode||null),s==="n1-kanji"&&Ay(),s==="n1-grammar"&&Cy(),s==="n1-reading"&&Ly(),s==="n1-listening"&&Ty(),s==="n1-final"&&Iy(),s==="n1-answer"&&vy(n),s==="n1-check-input"&&wy(a),s==="n1-srs"&&Gu(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n1-writing-done"&&by(a),s==="n1-complete-lesson"&&ky(a),s==="n1-grammar-complete"&&yy(a,n.dataset.value||""),s==="n1-reading-complete"&&$y(a,n.dataset.question||"",n.dataset.value||""),s==="n1-listening-complete"&&jy(a,n.dataset.question||"",n.dataset.value||""),s==="n1-final-answer"&&My(n),s==="n1-final-submit"&&Uu(),s==="n1-final-reset"&&Py(),s==="review-exercise-next"){br(),r.pendingFocus="__scroll-top__",x();return}if(s==="play-kanji-audio"){const o=ne(a)||ne(r.activeCardId);o&&(n.dataset.ttsText||n.dataset.ttsKind?tg(o,{text:n.dataset.ttsText||"",kind:n.dataset.ttsKind||"cycle",label:n.dataset.ttsLabel||"",fallback:()=>eg(o)}):Zp(o))}if(s==="open-jlpt-lesson"){const o=String(n.dataset.jlpt||"").toUpperCase();if(jn(o)){if(!it(o)){r.activeTextbookLevel=o,r.activeJlptLesson=o,Be("textbooks",null,o),F(Ut(o));return}r.activeJlptLesson=o,Be("jlpt-lesson",null,o)}}if(s==="open-jlpt-lesson-start"&&ei(n.dataset.jlpt||Ht()),s==="social-link"&&Sn(`social_${String(n.dataset.network||"").toLowerCase()}_opened`,{network:n.dataset.network||"",section:r.route}),s==="play-audio"&&AS(n.dataset.audio,n.dataset.label),s==="close-reward"&&(r.rewardModal=r.rewardQueue.shift()||null,r.rewardModal&&$p(r.rewardModal),Dt()),s==="set-goal"&&(r.progress.settings.dailyGoal=Number(n.dataset.goal),j(),F(`${A("dailyGoal")}: ${r.progress.settings.dailyGoal}`),x()),s==="buy-shop"&&Sa(a),s==="start-due"&&(Be("textbooks"),Ke()||F(Re("eva","welcome"))),s==="home-lesson"){const o=Q(n.dataset.level||"")||Ht(),c=String(n.dataset.lessonId||"");ei(o,c)}if(s==="home-review"&&(Ke()?Be("review"):F(p()==="ru"?"Пока нет повторений.":"No reviews are due right now.")),s==="home-primary"&&Xv(),s==="learning-path-node"&&Pd(n.dataset.node||a),s==="learning-path-back"&&Fn(),s==="learning-path-choice"){const o=String(n.dataset.node||""),c=String(n.dataset.step||""),l=String(n.dataset.value||""),d=nr(o),u=d.steps.find(m=>m.id===c);if(!u||u.kind!=="quiz"||d.session.answers?.[c])return;d.session.answers[c]={selected:l,correct:l===u.answer,at:new Date().toISOString()},l===u.answer?d.session.score=Number(d.session.score||0)+1:d.session.mistakes=[...new Set([...d.session.mistakes||[],c])],d.session.updatedAt=new Date().toISOString(),j(),x()}if(s==="learning-path-step-next"){const o=String(n.dataset.node||r.activeLearnNodeId||""),c=nr(o);if(!c.steps.length)return;const l=c.steps[c.session.stepIndex];if(l?.kind==="quiz"&&!c.session.answers?.[l.id])return;c.session.stepIndex=Math.min(c.session.stepIndex+1,c.steps.length),c.session.updatedAt=new Date().toISOString(),j(),x()}if(s==="learning-path-retry"){const o=String(n.dataset.node||r.activeLearnNodeId||""),l=(nr(o).session.mistakes||[]).slice();tn().activeSession=Pi({nodeId:o,mode:"mistakes",stepIndex:0,answers:{},mistakes:[],reviewStepIds:l,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),j(),x()}if(s==="learning-path-continue"){const o=String(n.dataset.node||r.activeLearnNodeId||""),c=nr(o);ew(o,c.session,c.steps),Fn();return}if(s==="start-lesson"||s==="select-lesson"){const o=r.lessons.find(c=>c.id===a);if(!o||!Te(o)){F(`${A("unlockedAt")} ${Ya(o)}`);return}if(r.activeLessonId=a,r.activeCardId=null,r.revealed=!1,_t(),s==="start-lesson"){$e("lesson_start",{lessonId:a,jlpt:o.jlpt});const c=String(o.jlpt||"").toUpperCase();/^n[2-5]-lesson-\d+$/i.test(o.id)&&["N5","N4","N3","N2"].includes(c)?(Be("textbooks",null,c),r.activeTextbookSubroute=o.id,history.replaceState(null,"",`#textbooks/${encodeURIComponent(c)}/${encodeURIComponent(o.id)}`),x()):Fn(Tn,o.id)}else x()}if(s==="show-answer"&&(Xs(ne(r.activeCardId),"show_answer"),r.revealed=!0,_t(),xt()),s==="check-reading"){const o=document.getElementById(`readingCheck-${a||r.activeCardId}`);o&&(r.readingCheck.value=o.value,r.readingCheck.cardId=a||r.activeCardId),Bp()}if(s==="rate"&&Sj(n.dataset.rating),s==="open-card"&&(Xs(ne(a),"card_details"),r.detailCardId=a,x()),s==="open-kanji-page"&&Qf(a),s==="close-detail"&&(r.detailCardId=null,ie()),s==="study-card"){const o=ne(a);if(!o)return;Xs(o,"study_card"),r.activeLessonId=o.lessonId,r.activeCardId=o.id,r.revealed=!1,_t(o.id),r.detailCardId=null,Fn(Tn,o.lessonId)}}}function Jf(e){const t=e.target.closest?.('[data-action="eva-click"], [data-action="eva-autonomy-next"]');if(!t||t.disabled)return;const n=t.dataset.action;ec=Date.now(),e.preventDefault(),Yi(n),n==="eva-click"&&kp(),n==="eva-autonomy-next"&&Rd()}function Yi(e="activity"){r.evaRuntime&&(r.evaRuntime.lastPlayerActionAt=Date.now(),r.evaRuntime.memory=Dn(Kt(),r.evaRuntime.memory||{}),r.evaRuntime.memory.lastRoute=r.route,e.startsWith("eva")&&(r.evaRuntime.memory.lastInteractionDate=re()),["eva-autonomy-next","eva-question-answer"].includes(e)&&(r.evaRuntime.lastPlayerActionAt=Date.now()))}function Uf(e){if(!r.evaRuntime)return;const t=e?.dataset?.lineId||Z().currentLine?.id||"";!t||r.evaRuntime.textRevealSkippedLineId===t||(r.evaRuntime.textRevealSkippedLineId=t,On(),x())}function qf(e,t){if(!(!e||t?.disabled)&&!Hf(e,t)&&!["eva-room-choice","eva-bg-buy","eva-bg-select"].includes(e)){if(e==="eva-room-shop-open"){I("menu_open");return}if(e==="eva-room-shop-close"){I("menu_close");return}if(e==="route"){if(t?.closest(".bottom-nav")&&ma(t.dataset.route)){I(r.navMenu===t.dataset.route?"menu_close":"menu_open");return}I("tab_switch");return}if(e==="nav-menu-route"){I("tab_switch");return}if(e==="close-nav-menu"){I("menu_close");return}if(e==="toggle-header-socials"){I(bl()?"menu_close":"menu_open");return}if(e==="show-answer"||e==="open-card"){I("card_flip");return}if(["close-reward","close-detail","close-pwa-install-help","pwa-later","notification-later","dismiss-mascot-speech"].includes(e)){I("menu_close");return}if(e==="notification-center"){I("notification_soft");return}if(["start-lesson","select-lesson","next-sentence","study-card","rate","open-jlpt-lesson","n5-open-lesson","n5-overview","n5-review","n4-open-lesson","n4-overview","n4-review","n4-kanji","n4-grammar","n4-reading","n4-listening","n4-final","n3-open-lesson","n3-overview","n3-review","n3-kanji","n3-grammar","n3-reading","n3-listening","n3-final","n2-open-lesson","n2-overview","n2-review","n2-kanji","n2-grammar","n2-reading","n2-listening","n2-final","n1-open-lesson","n1-overview","n1-review","n1-kanji","n1-grammar","n1-reading","n1-listening","n1-final"].includes(e)){I("page_turn");return}if(["n5-answer","n5-check-input","n5-srs","n5-writing-done","n5-complete-lesson","n5-final-answer","n5-final-submit","n4-answer","n4-check-input","n4-srs","n4-writing-done","n4-complete-lesson","n4-grammar-complete","n4-reading-complete","n4-listening-complete","n4-final-answer","n4-final-submit","n3-answer","n3-check-input","n3-srs","n3-writing-done","n3-complete-lesson","n3-grammar-complete","n3-reading-complete","n3-listening-complete","n3-final-answer","n3-final-submit","n2-answer","n2-check-input","n2-srs","n2-writing-done","n2-complete-lesson","n2-grammar-complete","n2-reading-complete","n2-listening-complete","n2-final-answer","n2-final-submit","n1-answer","n1-check-input","n1-srs","n1-writing-done","n1-complete-lesson","n1-grammar-complete","n1-reading-complete","n1-listening-complete","n1-final-answer","n1-final-submit","jlpt-lesson-answer"].includes(e)){I("button_click");return}if(["pwa-install","notification-allow","notification-center","set-goal"].includes(e)){I("notification_soft");return}t?.matches("button, .btn, [role='button']")&&I("button_click"),e!=="toggle-header-socials"&&gg(!1)}}function Hf(e,t){return["learn","review"].includes(r.route)?new Set(["show-answer","rate","check-reading","play-kanji-audio","start-lesson","select-lesson","study-card"]).has(e)||!!t?.closest(".study-card, .study-layout"):!1}function Wc(e){Yi("input");const t=e.target.closest("[data-ux-volume]");if(t){m0(Number(t.value)/100);const l=document.querySelector("[data-ux-volume-label]");l&&(l.textContent=`${Math.round(ri()*100)}%`);return}const n=e.target.closest("[data-reading-input]");if(n){r.readingCheck={cardId:n.dataset.id||r.activeCardId,value:n.value,status:null,message:""};return}const s=e.target.closest("[data-sentence-draft]");if(s){const l=xe(),d=s.dataset.sentenceDraft;l.customDraft=la(l.customDraft||{}),d&&Object.prototype.hasOwnProperty.call(l.customDraft,d)&&(l.customDraft[d]=s.value,l.customMessage="",l.customStatus="",j());return}const a=e.target.closest("[data-filter]");if(!a)return;const o=a.dataset.filter,c=a.selectionStart;r.filters[o]=a.value,r.dictionaryVisibleCount=Ks,x(),requestAnimationFrame(()=>{const l=document.getElementById(a.id);l&&(l.focus(),typeof c=="number"&&"setSelectionRange"in l&&l.setSelectionRange(c,c))})}function Wf(e){if(dh(e)||Xf(e))return;if(e.key==="Escape"&&(r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible||r.changelogModal||r.navMenu)){r.detailCardId=null,r.rewardModal=null,r.finalTestModal=null,r.contactModal=!1,r.pwaInstallHelpVisible=!1,r.navMenu=null,r.changelogModal?Li():x();return}const t=e.target.closest?.("[data-reading-input]");!t||e.key!=="Enter"||(e.preventDefault(),r.readingCheck.value=t.value,r.readingCheck.cardId=t.dataset.id||r.activeCardId,Bp())}function Xf(e){return e.target?.closest?.("input, textarea, select, [contenteditable='true']")||e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||(Zr=`${Zr}${e.key.toLowerCase()}`.slice(-be.length),Zr!==be)?!1:(Zr="",Xc(5e3),!0)}function Xc(e=5e3){const t=Math.max(1,Math.min(999999,Math.floor(Number(e)||5e3)));return r.progress?(O(0,t,"cheat:moon_farm"),q(),j(),I("moon_fragment_gain"),F(p()==="ru"?`Чит активирован: +${t} Moon`:`Cheat activated: +${t} Moon`),x(),r.progress.moonFragments):0}function Fn(e=Ds,t=null,n=null){r.route="learn",r.activeLearnView=e,r.activeLearnNodeId=e===Vt&&String(t||"")||null,r.activeLearnLegacyLessonId=e===Tn&&String(t||"")||null;const s=e===Vt&&t?`#learn/lesson/${encodeURIComponent(String(t))}`:e===Tn&&t?`#learn/legacy/${encodeURIComponent(String(t))}`:"#learn";location.hash!==s&&history.replaceState(null,"",s),r.activeTextbookLevel=null,r.activeTextbookSubroute=null,r.kanjiPageId=null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=n,r.evaRoomShopOpen=!1,_t(),Ot(),ie()}function Be(e,t=null,n=null){if(e==="learn"){Fn(Ds,null,t);return}const s=r.route;if(r.route=Qg.includes(e)?e:"home",s!==r.route&&(s==="review"||r.route==="review")&&(r.reviewSession=null),r.route==="textbooks"?(r.activeTextbookLevel=n?String(n).toUpperCase():null,r.activeTextbookSubroute=null):r.route==="jlpt-lesson"?r.activeJlptLesson=n?String(n).toUpperCase():r.activeJlptLesson||Ml()||null:(r.activeTextbookLevel=null,r.activeTextbookSubroute=null),r.route!=="review"&&br(),r.route==="textbooks")Pt(Ng(r.activeTextbookLevel||"",r.activeTextbookSubroute||""));else{const a=r.route==="learn"?"#learn":r.route==="jlpt-lesson"&&r.activeJlptLesson?`#jlpt-lesson/${encodeURIComponent(r.activeJlptLesson)}`:`#${r.route}`;Pt(a)}r.route!=="kanji"&&(r.kanjiPageId=null),r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=t,r.route!=="eva-room"&&(r.evaRoomShopOpen=!1),_t(),Ot(),xt(),Us(r.route)&&Ti({route:r.route,delay:0}),r.route==="eva-room"&&$e("room_opened")}function Qf(e){const t=ne(e);if(!t)return;r.route="kanji",r.kanjiPageId=t.id,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.pendingFocus=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.evaRoomShopOpen=!1,_t();const n=`#kanji/${encodeURIComponent(t.id)}`;Pt(n),Ot(),xt()}function Qc(){const e=nm.begin(r.route);Xr=!0,Qr=null,tS();try{Ah();let t="";if(r.route==="home"&&(t=Lh()),r.route==="download"&&(t=$h()),r.route==="about"&&(t=Sh()),r.route==="learn"&&(t=Wv(),r.pendingFocus!=="lesson-tabs"&&requestAnimationFrame(cl)),r.route==="review"&&(t=Gy(),r.pendingFocus!=="sentence-practice"&&requestAnimationFrame(cl)),r.route==="dictionary"&&(t=P$()),r.route==="kanji"&&(t=F$()),r.route==="writing"&&(t=rj(),requestAnimationFrame(Dj)),r.route==="stats"&&(t=lj(),requestAnimationFrame(jp)),r.route==="achievements"&&(t=uj()),r.route==="eva-room"&&(t=Mh()),r.route==="jlpt-lesson"&&(t=sw()),r.route==="textbooks"&&(t=rw()),!e.isCurrent())return;Zt.innerHTML=`${t}${bh()}${Vf()}`,document.body.classList.toggle("modal-open",!!(r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible||r.changelogModal)),$j(),requestAnimationFrame(()=>{xh(),ro(),oh()})}catch(t){e.isCurrent()&&(console.error(`[Flash Kanji] route=${r.route} build=${G}`,t?.stack||t),Zt.innerHTML=Vc(t))}finally{Xr=!1}}function ie(){ts||(ts=requestAnimationFrame(()=>{ts=0,Qc()}))}function xt(){ts&&(cancelAnimationFrame(ts),ts=0),Qc()}function Qs(e,t){if(typeof window>"u")return;const n=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({left:Math.max(0,Number(e)||0),top:Math.min(Math.max(0,Number(t)||0),n),behavior:"auto"})}function Dt(){if(typeof window>"u"){xt();return}const e=window.scrollX,t=window.scrollY;xt(),Qs(e,t),requestAnimationFrame(()=>{Qs(e,t),requestAnimationFrame(()=>Qs(e,t))}),window.setTimeout(()=>Qs(e,t),120),window.setTimeout(()=>Qs(e,t),320)}function x(){ie()}function Vc(e){const t=e instanceof Error?e.message:String(e||"Unknown route error");return`<section class="page empty-state" data-route-error="${g(r.route)}"><h1>${i(p()==="ru"?"Не удалось открыть раздел":"Could not open this section")}</h1><p>${i(t)}</p><button class="btn primary" type="button" data-action="route" data-route="home">${i(p()==="ru"?"На главную":"Home")}</button></section>`}function Vf(){const e=`${Nh()}${ij()}${mj()}${y$()}${fj()}${hj()}${vj()}${wj()}${bj()}${mh()}`;return e?`<div class="modal-layer">${e}</div>`:""}function Yc(){return de?.isConnected?de:document.body?(de||(de=document.createElement("div"),de.className="flash-kanji-onboarding-root",de.setAttribute("role","presentation"),de.setAttribute("aria-hidden","false")),de.isConnected||document.body.appendChild(de),de):null}const Zi=[{target:null,title:{ru:"Добро пожаловать",en:"Welcome"},text:{ru:"Привет! Я Ева. Быстро покажу, где что находится и как пользоваться Flash Kanji.",en:"Hi! I am Eva. I will quickly show you where everything is and how Flash Kanji works."}},{target:"[data-tour='home-lesson']",title:{ru:"Учебники",en:"Textbooks"},text:{ru:"Это главный вход в Flash Kanji. Здесь открываются учебники N5-N1 и путь к урокам каждого уровня.",en:"This is the main entrance to Flash Kanji. Open N5-N1 textbooks here and continue into each level's lessons."}},{target:"[data-tour='srs-review']",title:{ru:"Повторение",en:"Review"},text:{ru:"Изученные карточки возвращаются в повторение, чтобы закрепляться в памяти.",en:"Learned cards come back here for spaced repetition so they stay in memory."}},{target:"[data-tour='dictionary']",title:{ru:"Словарь",en:"Dictionary"},text:{ru:"В словаре можно посмотреть значения, чтения, примеры и подробности по каждому кандзи.",en:"The dictionary lets you check meanings, readings, examples, and kanji details."}},{target:["[data-tour='eva-room']","[data-tour='profile-progress']","[data-tour='profile-progress-nav']"],title:{ru:"Комната Евы",en:"Eva room"},text:e=>e?.dataset?.tour==="eva-room"?{ru:"Это моя комната. Здесь можно поговорить со мной, менять облик и тратить Moon Fragments.",en:"This is my room. You can talk to me here, change the look, and spend Moon Fragments."}:{ru:"Если комнаты Евы на этой странице нет, посмотри на стрик и статистику.",en:"If Eva Room is not on this page, check the streak and progress stats instead."}}],ua={title:{ru:"Готово!",en:"All set!"},text:{ru:"Открой учебники и начни с N5. Я рядом.",en:"Open the textbooks and start with N5. I will be right here."},start:{ru:"Открыть учебники",en:"Open textbooks"},close:{ru:"Закрыть",en:"Close"}};function Zc(){try{return localStorage.getItem(Dl)==="true"}catch{return!1}}function Yf(){try{return localStorage.getItem(Fl)||""}catch{return""}}function pa(e){try{localStorage.setItem(Fl,e)}catch(t){console.warn("Could not save onboarding audience.",t)}}function Zf(e=r.progress){return e?Number(e.appOpens||0)>0||Object.keys(e.lessonCompletions||{}).length>0||Object.keys(e.cards||{}).length>0||Object.keys(e.seenKanji||{}).length>0||Object.keys(e.daily||{}).length>0||Object.keys(e.favorites||{}).length>0||Object.keys(e.transactions||{}).length>0||Number(e.totalMoonFragmentsEarned||0)>0||Number(e.secrets?.evaClicks||0)>0||(e.secrets?.nightVisit?1:0)>0||Number(e.visits?.streak||0)>0||Number(e.visits?.bestStreak||0)>0:!1}function eh(e=!1){const t=Yf();return t==="returning"||t==="completed"?t:Zc()?(pa("completed"),"completed"):e?(pa("returning"),"returning"):(pa("new"),"new")}function ed(){return!Zc()}function th(){try{localStorage.getItem(Ol)==="true"&&localStorage.removeItem(Ol)}catch(e){console.warn("Could not clear legacy onboarding state.",e)}}function nh(){try{localStorage.setItem(Dl,"true"),pa("completed")}catch(e){console.warn("Could not save onboarding completion.",e)}}function td(){return lt}function Vs(){return Zi.length}function eo(){return Zi[ce(yt,0,Vs()-1)]||Zi[0]}function sh(e=eo()){return e?.target?Array.isArray(e.target)?e.target:[e.target]:[]}function rh(e){if(!(e instanceof HTMLElement))return!1;const t=window.getComputedStyle(e);return t.display==="none"||t.visibility==="hidden"||Number(t.opacity||"1")<=0?!1:e.getClientRects().length>0}function nd(e=eo()){for(const t of sh(e)){const s=Array.from(document.querySelectorAll(t)).find(a=>rh(a));if(s)return s}return null}function sd(e,t=null){return typeof e=="function"?sd(e(t),t):f(e||{ru:"",en:""})}function ah(){return typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ih(){return!(lt||!r.progress||!r.i18n||!r.lessons.length||!document.body||document.visibilityState!=="visible"||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal||r.navMenu)}function to(e=!1,t=Wg){clearTimeout(ns),!(!e&&!ed())&&(ns=window.setTimeout(()=>{ns=0,no({force:e})},t))}function no(e={}){const t=!!e.force;let n=!1;if(lt){if(!t)return!0;Ys({completed:!1,silent:!0})}if(!t&&!ed())return!1;if(!ih())return to(t,Bl),!1;clearTimeout(ns);try{bi=document.activeElement instanceof HTMLElement?document.activeElement:null,lt=!0,ve="step",yt=0,document.body.classList.add("onboarding-open");const s=document.querySelector(".app-shell");if(s){s.setAttribute("aria-hidden","true");try{s.inert=!0}catch(a){console.warn("Could not make the app shell inert.",a)}}return Yc(),ls(),rd(),n=!0,window.addEventListener("scroll",nn,{passive:!0}),window.addEventListener("resize",nn),window.addEventListener("orientationchange",nn),nn(),ad(),!0}catch(s){return console.error("Flash Kanji onboarding failed to start.",s),Ys({completed:!1,silent:!0}),n||to(t,Bl),!1}}function Ys(e={}){const{completed:t=!0,silent:n=!1,routeTo:s=null}=e;clearTimeout(ns),ns=0,cancelAnimationFrame(Fs),Fs=0,window.removeEventListener("scroll",nn),window.removeEventListener("resize",nn),window.removeEventListener("orientationchange",nn),$t&&$t.classList.remove("is-onboarding-target"),$t=null,lt=!1,ve="step",yt=0,de&&(de.remove(),de=null,Fe=null,je=null),document.body.classList.remove("onboarding-open");const a=document.querySelector(".app-shell");if(a){a.removeAttribute("aria-hidden");try{a.inert=!1}catch(o){console.warn("Could not restore app shell interactivity.",o)}}t&&nh(),n||(s?Be(s):x()),bi?.focus&&requestAnimationFrame(()=>{try{bi.focus()}catch(o){console.warn("Could not restore onboarding focus.",o)}})}function ls(){if(!Yc())return;const e=ve==="final"?null:eo(),t=ve==="final"?null:nd(e),n=ve==="final"?ua.title:e.title,s=ve==="final"?ua.text:sd(e.text,t),a=ve==="final"?p()==="ru"?"Готово":"Done":`${yt+1} ${p()==="ru"?"из":"of"} ${Vs()}`,o=f(n),c=f(s),l=Ba("eva","calm","welcome"),d=Vs();de.classList.toggle("is-final",ve==="final"),de.classList.toggle("has-target",!!t),de.dataset.view=ve;const u=ve==="final"?`
        <button class="btn primary" type="button" data-action="onboarding-continue">${i(f(ua.start))}</button>
        <button class="btn ghost" type="button" data-action="onboarding-close">${i(f(ua.close))}</button>
      `:yt===0?`
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Начать":"Start")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `:`
          <button class="btn ghost" type="button" data-action="onboarding-prev">${i(p()==="ru"?"Назад":"Back")}</button>
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Далее":"Next")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `;de.innerHTML=`
      ${ve==="final"?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      ${ve==="final"||t?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      <div class="flash-kanji-onboarding-spotlight${t?"":" is-hidden"}" data-onboarding-spotlight aria-hidden="true"></div>
      <section class="flash-kanji-onboarding-dialog${ve==="final"?" is-final":""}" role="dialog" aria-modal="true" aria-labelledby="flashKanjiOnboardingTitle" aria-describedby="flashKanjiOnboardingDesc" tabindex="-1">
        <div class="flash-kanji-onboarding-head">
          <span class="pill">${i(a)}</span>
          <span class="pill">${i(o)}</span>
        </div>
        <div class="flash-kanji-onboarding-body">
          <img class="flash-kanji-onboarding-eva" src="${g(l)}" alt="${g(p()==="ru"?"Ева":"Eva")}" loading="eager" decoding="async" />
          <div class="flash-kanji-onboarding-copy">
            <h2 id="flashKanjiOnboardingTitle">${i(o)}</h2>
            <p id="flashKanjiOnboardingDesc">${i(c)}</p>
          </div>
        </div>
        <div class="actions flash-kanji-onboarding-actions">${u}</div>
      </section>
    `,Fe=Se("[data-onboarding-spotlight]",de),je=Se(".flash-kanji-onboarding-dialog",de),$t&&$t!==t&&$t.classList.remove("is-onboarding-target"),$t=t||null,$t&&$t.classList.add("is-onboarding-target"),je&&(je.dataset.totalSteps=String(d)),nn()}function nn(){lt&&(Fs||(Fs=requestAnimationFrame(()=>{Fs=0,rd()})))}function rd(){if(!lt||!de||!je)return;const e=ve==="final"?null:$t||nd();ah();const t=window.innerWidth,n=window.innerHeight;if(je.style.maxWidth=`${Math.min(Xg,Math.max(280,t-16))}px`,je.style.maxHeight=`${Math.max(180,n-24)}px`,je.style.left="50%",je.style.top="50%",je.style.transform="translate(-50%, -50%)",je.dataset.placement="center",e){const s=e.isConnected?e.getBoundingClientRect():null;!!s&&s.top>=8&&s.bottom<=n-8&&s.left>=8&&s.right<=t-8&&Fe?(Fe.hidden=!1,Fe.style.left=`${Math.round(s.left-12)}px`,Fe.style.top=`${Math.round(s.top-12)}px`,Fe.style.width=`${Math.round(s.width+12*2)}px`,Fe.style.height=`${Math.round(s.height+12*2)}px`,Fe.style.borderRadius=`${Math.max(6,Math.round(parseFloat(getComputedStyle(e).borderRadius||"8")||8))}px`):Fe&&(Fe.hidden=!0)}else Fe&&(Fe.hidden=!0);de.style.visibility="visible",ad()}function oh(){lt&&ls()}function ad(){if(!je)return;const e=je.querySelector('[data-action="onboarding-next"], [data-action="onboarding-continue"], [data-action="onboarding-start"], [data-action="onboarding-prev"]'),t=je.querySelectorAll("button"),n=e||t[0]||je;try{n.focus?.()}catch(s){console.warn("Could not focus onboarding control.",s)}}function lh(){return je?Array.from(je.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')).filter(e=>e instanceof HTMLElement):[]}function ch(e=1){const t=lh();if(!t.length)return;const n=document.activeElement,s=t.indexOf(n),a=s===-1?e>0?0:t.length-1:(s+e+t.length)%t.length;t[a]?.focus?.()}function dh(e){return lt?e.key==="Tab"?(e.preventDefault(),ch(e.shiftKey?-1:1),!0):e.key==="Escape"?(e.preventDefault(),Ys({completed:ve==="final"}),!0):e.key==="ArrowRight"?(e.preventDefault(),id(),!0):e.key==="ArrowLeft"?(e.preventDefault(),od(),!0):!1:!1}function id(){if(!lt)return;const e=Vs()-1;if(ve!=="final"){if(yt<e){yt+=1,ls();return}ve="final",ls()}}function od(){if(lt){if(ve==="final"){ve="step",yt=Vs()-1,ls();return}yt>0&&(yt-=1,ls())}}function uh(e=null){Ys({completed:!0,routeTo:e})}function ph(){uh("textbooks")}function ga(){if(typeof window>"u")return;const e=document.scrollingElement||document.documentElement;e&&(e.scrollTop=0),document.body&&(document.body.scrollTop=0),window.scrollTo({top:0,left:0,behavior:"auto"})}function Ot(){typeof window>"u"||requestAnimationFrame(()=>requestAnimationFrame(()=>ga()))}function gh(){if(typeof window>"u")return;const e=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({top:e,behavior:"auto"})}function ld(){return typeof window>"u"||!document.documentElement?!1:document.documentElement.scrollHeight>window.innerHeight+24}function so(){return ld()?window.scrollY>32?"up":"down":null}function mh(){const e=so()||"down",t=ld()?"":" hidden",n=p()==="ru",s=e==="up"?n?"Наверх":"Scroll to top":n?"Вниз":"Scroll to bottom",a=e==="up"?"↑":"↓";return`
      <button class="scroll-position-toggle scroll-position-toggle-${e}" type="button" data-action="scroll-page-edge" data-direction="${e}" aria-label="${g(s)}" title="${g(s)}"${t}>
        <span class="scroll-position-toggle-icon" aria-hidden="true">${i(a)}</span>
        <span class="scroll-position-toggle-label">${i(s)}</span>
      </button>
    `}function ro(){const e=Se('[data-action="scroll-page-edge"]');if(!e)return;const t=so();if(!t){e.hidden=!0;return}e.hidden=!1,e.dataset.direction=t,e.classList.toggle("scroll-position-toggle-up",t==="up"),e.classList.toggle("scroll-position-toggle-down",t==="down");const n=e.querySelector(".scroll-position-toggle-icon");n&&(n.textContent=t==="up"?"↑":"↓");const s=e.querySelector(".scroll-position-toggle-label");s&&(s.textContent=p()==="ru"?t==="up"?"Наверх":"Вниз":t==="up"?"Top":"Bottom");const a=p()==="ru"?t==="up"?"Подняться вверх":"Опуститься вниз":t==="up"?"Scroll to top":"Scroll to bottom";e.setAttribute("aria-label",a),e.setAttribute("title",a)}function ma(e){return e!=="review"&&cd(e).length>1}function fh(e){if(!ma(e)){Be(e);return}r.navMenu=r.navMenu===e?null:e,ie()}function cd(e){const t=p()==="ru";return{learn:[{action:"open-jlpt-lesson-start",jlpt:ho(),icon:"文",title:t?"Текущий урок":"Current lesson",text:t?"Открыть последний урок учебника.":"Open the latest lesson in the textbook."},{route:"review",focus:"review-card",icon:"↻",title:"SRS",text:t?"Перейти к повторениям.":"Go to review."},{route:"textbooks",focus:"textbook-grid",icon:"冊",title:t?"Учебники":"Textbooks",text:t?"Открыть страницы учебников JLPT.":"Open JLPT textbook pages."}],review:[{route:"review",focus:"review-card",icon:"↻",title:t?"Повторение":"Review cards",text:t?"Карточки повторения на сегодня.":"Today's review queue."},{route:"review",focus:"sentence-practice",icon:"文",title:t?"Практика предложений":"Sentence practice",text:t?"Вставь кандзи в пропуск.":"Fill kanji into blanks."}],stats:[{route:"stats",focus:"stats-top",icon:"в–Ґ",title:t?"Статистика":"Statistics",text:t?"Графики, XP и серия.":"Charts, XP, and streak."},{route:"achievements",focus:"achievements-top",icon:"月",title:t?"Достижения":"Achievements",text:t?"Галерея наград.":"Reward gallery."},{route:"stats",focus:"shop-panel",icon:"в—€",title:t?"Магазин":"Shop",text:t?"Moon Fragments и предметы.":"Moon Fragments and items."}],more:[{route:"writing",focus:"writing-canvas",icon:"筆",title:t?"Письмо":"Writing",text:t?"Практика написания.":"Writing practice."},{route:"stats",focus:"stats-top",icon:"в–Ґ",title:t?"Профиль":"Profile",text:t?"Статистика, награды и прогресс.":"Stats, achievements, and progress."},{route:"eva-room",focus:"eva-room",icon:"☾",title:t?"Комната Евы":"Eva room",text:t?"Диалоги и уютные фоны.":"Dialogue scenes and cozy rooms."},{route:"download",focus:"download-top",icon:"⇩",title:t?"Скачать":"Download",text:t?"APK для Android и PWA-установка.":"Android APK and PWA install."},{route:"about",focus:"about",icon:"ℹ",title:t?"О проекте":"About",text:t?"Что такое Flash Kanji.":"What Flash Kanji is."}]}[e]||[]}function ao(e){return e==="more"?p()==="ru"?"Ещё":"More":e==="about"?p()==="ru"?"О проекте":"About":e==="stats"?p()==="ru"?"Профиль":"Profile":e==="download"?p()==="ru"?"Скачать":"Download":e==="textbooks"||e==="learn"?p()==="ru"?"Учебники":"Textbooks":A(e)}function hh(){return["home","textbooks","review","dictionary","download","stats","about"]}function vh(e){return{home:"⌂",textbooks:"文",learn:"文",review:"↻",dictionary:"典",download:"⇩",stats:"▥",about:"ℹ"}[e]||"•"}function wh(e){return`
      <li class="site-footer-link-item">
        <button class="site-footer-link site-footer-link--nav" type="button" data-action="route" data-route="${g(e)}">
          <span class="site-footer-link-icon" aria-hidden="true">${i(vh(e))}</span>
          <span>${i(ao(e))}</span>
        </button>
      </li>
    `}function bh(){const e=p()==="ru",t=new Date().getFullYear(),n=e?"Спокойная лунная комната для кандзи, уроков и повторений.":"A calm moonlit room for kanji, lessons, and steady reviews.",s=e?"Навигация":"Navigation",a=e?"Соцсети":"Social";return`
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
                ${hh().map(o=>wh(o)).join("")}
              </ul>
            </section>
            <section class="site-footer-section">
              <h2>${i(a)}</h2>
              <div class="site-footer-socials" aria-label="${g(e?"Социальные ссылки":"Social links")}">
                <a class="btn ghost footer-social-link" href="${g(Xt.youtube)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${og("youtube")}</span>
                  <span>YouTube</span>
                </a>
                <a class="btn ghost footer-social-link" href="${g(Xt.instagram)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${og("instagram")}</span>
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
    `}function kh(){return p()==="ru"?{eyebrow:"Flash Kanji · Android",title:"Скачать Flash Kanji",accent:"и установить PWA",lead:"Та же оболочка Flash Kanji: JLPT-учебники, SRS-повторение, словарь и практика письма — на Android и в браузере.",note:"Официальная сборка Flash Kanji. Кнопка APK ведёт на файл в Google Drive, зеркало на сайте остаётся запасным вариантом.",apk:"Скачать APK",pwa:"Установить PWA",web:"Открыть веб-версию",meta:"Android 8.0+ · APK · бесплатно · 793 КБ",stepsTitle:"Как установить",stepsSubtitle:"Коротко и без лишних экранов.",infoTitle:"Что внутри",info:["JLPT N5–N1 учебники и маршрут уроков.","SRS-повторение и словарь кандзи.","Практика письма, импорт/экспорт прогресса и PWA-режим."],steps:[{icon:"1",title:"Скачайте APK",text:"Нажмите «Скачать APK» и дождитесь завершения загрузки."},{icon:"2",title:"Разрешите установку",text:"Если Android попросит, разрешите установку из этого источника."},{icon:"3",title:"Откройте Flash Kanji",text:"Запустите приложение и продолжайте учить кандзи где угодно."}],mirror:"Запасное зеркало APK",screenshotAlt:"Скриншот Flash Kanji на Android"}:{eyebrow:"Flash Kanji · Android",title:"Download Flash Kanji",accent:"and install the PWA",lead:"The same Flash Kanji shell: JLPT textbooks, SRS review, dictionary, and writing practice on Android and in the browser.",note:"Official Flash Kanji build. The APK button opens the Google Drive file; the site mirror is kept as a fallback.",apk:"Download APK",pwa:"Install PWA",web:"Open web version",meta:"Android 8.0+ · APK · free · 793 KB",stepsTitle:"How to install",stepsSubtitle:"Short and clean.",infoTitle:"What's inside",info:["JLPT N5–N1 textbooks and lesson route.","SRS review and kanji dictionary.","Writing practice, progress import/export, and PWA mode."],steps:[{icon:"1",title:"Download the APK",text:"Tap Download APK and wait for the file to finish."},{icon:"2",title:"Allow install",text:"If Android asks, allow installation from this source."},{icon:"3",title:"Open Flash Kanji",text:"Launch the app and keep studying kanji anywhere."}],mirror:"Fallback APK mirror",screenshotAlt:"Flash Kanji Android screenshot"}}function yh(e){return`
      <article class="home-task-item download-install-step">
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.text)}</p>
        </span>
      </article>
    `}function $h(){const e=kh();return`
      <section class="page home-shell download-page" data-section="download-page">
        <article class="home-hero-card download-hero-card" data-section="download-top" aria-labelledby="downloadTitle">
          <img class="home-hero-moon" src="assets/decor/elements/crescent-moon.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
          <div class="home-hero-copy download-hero-copy">
            <p class="eyebrow">${i(e.eyebrow)}</p>
            <h1 class="hero-title home-hero-title" id="downloadTitle">${i(e.title)}<br><em>${i(e.accent)}</em></h1>
            <p class="home-hero-note">${i(e.lead)}</p>
            <p class="hero-subtitle">${i(e.note)}</p>
            <div class="hero-actions home-hero-actions">
              <a class="btn primary home-primary-cta apk-download" href="${g(Gg)}" target="_blank" rel="noopener noreferrer">
                <span aria-hidden="true">⇩</span>
                <span>${i(e.apk)}</span>
              </a>
              <button class="btn ghost home-primary-cta" type="button" data-action="pwa-install">${i(e.pwa)}</button>
              <button class="btn ghost home-primary-cta" type="button" data-action="route" data-route="home">${i(e.web)}</button>
            </div>
            <p class="download-meta">${i(e.meta)}</p>
          </div>
          <figure class="download-app-preview">
            <img src="${g(Jg)}" alt="${g(e.screenshotAlt)}" loading="eager" decoding="async" />
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
                ${e.steps.map(yh).join("")}
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
              <a class="btn ghost" href="${g(zg)}" download="flash-kanji-android.apk">${i(e.mirror)}</a>
            </article>
          </aside>
        </section>
      </section>
    `}function jh(){return p()==="ru"?{eyebrow:"О проекте",title:"О Flash Kanji",lead:"О Flash Kanji — это образовательный проект для изучения японского языка через кандзи, чтение, примеры и визуальную память.",heroTitle:"Спокойное пространство, куда хочется возвращаться каждый день",heroLead:"Идея проекта простая: сделать обучение японскому не сухой таблицей символов, а живым пространством, где кандзи складываются в привычку.",paragraphs:["Здесь кандзи изучаются постепенно — от базовых уровней до более сложных, с примерами, чтениями, ассоциациями и практикой.","Flash Kanji создан для тех, кто хочет учить японский с нуля или системно прокачивать уже имеющиеся знания.","Проект помогает запоминать иероглифы, понимать их значения, видеть реальные примеры использования и выстраивать привычку регулярного обучения.","В центре Flash Kanji — атмосфера спокойного цифрового кабинета, где обучение похоже не на экзамен, а на личный путь.","Здесь есть карточки, уроки, словарь, повторение, практика написания и визуальные элементы, которые помогают удерживать внимание."],sectionTitle:"Как устроен Flash Kanji",highlightTitle:"Что помогает удерживать ритм",highlightPoints:["Учебники JLPT N5-N1 с постепенным входом в материал.","Карточки с кандзи, чтениями и примерами.","SRS-повторение, чтобы не терять выученное.","Практика письма и тестовые упражнения.","Персонаж-наставник Eva и спокойная визуальная среда."],closing:"Flash Kanji — изучай японский в своей лунной комнате.",textbooks:"К учебникам",review:"К повторению",home:"На главную",evaRoom:"Комната Евы"}:{eyebrow:"About",title:"About Flash Kanji",lead:"Flash Kanji is an educational project for learning Japanese through kanji, readings, examples, and visual memory.",heroTitle:"A quiet place you will want to return to every day",heroLead:"The idea is simple: make Japanese feel less like a dry table of symbols and more like a living space where kanji turn into habit.",paragraphs:["Kanji are introduced gradually, from the basic levels to more advanced ones, with examples, readings, associations, and practice.","Flash Kanji is for people starting Japanese from zero and for learners who want a steady system to grow existing knowledge.","The project helps you remember characters, understand what they mean, see real usage, and build a consistent study routine.","At the center of Flash Kanji is the atmosphere of a calm digital study room, where learning feels like a personal journey rather than an exam.","You get cards, lessons, a dictionary, review, writing practice, and visual elements that help keep attention in place."],sectionTitle:"How Flash Kanji is built",highlightTitle:"What keeps the rhythm going",highlightPoints:["JLPT N5-N1 textbooks with a gradual path into the material.","Cards with kanji, readings, and examples.","SRS review so learned items stay in memory.","Writing practice and test exercises.","Eva as a mentor and a calm visual study space."],closing:"Flash Kanji — study Japanese in your own moonlit room.",textbooks:"Textbooks",review:"Review",home:"Home",evaRoom:"Eva room"}}function Sh(){const e=jh();return`
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
    `}function Nh(){const e=cd(r.navMenu);if(!e.length)return"";const t=r.navMenu,n=t?ao(t):"";return`
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
    `}function xh(){if(!r.pendingFocus)return;const e=r.pendingFocus;if(r.pendingFocus=null,e==="__scroll-top__"){Ot();return}const t={"lesson-card":".study-card, .daily-lesson-card","lesson-tabs":".lesson-tabs","review-card":"[data-section='review-card']","sentence-practice":"[data-section='sentence-practice']","writing-demo":"[data-section='writing-demo']","writing-canvas":"[data-section='writing-canvas']","eva-room":".eva-room-entry, .eva-room-page, .eva-room-shell",about:".about-page","download-top":"[data-section='download-top']","stats-top":".metric-grid","achievements-top":".achievements-page .metric-grid","shop-panel":"[data-section='shop-panel']"},n=document.querySelector(t[e]||e);n&&(n.scrollIntoView({behavior:"smooth",block:"start"}),n.classList.add("is-focus-pulse"),window.setTimeout(()=>n.classList.remove("is-focus-pulse"),900))}function Ah(){Ai(".nav-btn").forEach(t=>{const n=t.dataset.route,s=n===r.route||n==="learn"&&r.route==="textbooks"||n==="stats"&&r.route==="achievements"||n==="dictionary"&&r.route==="kanji";t.classList.toggle("is-active",s),t.classList.toggle("has-menu",!!t.closest(".bottom-nav")&&ma(n)),t.setAttribute("aria-expanded",r.navMenu===n?"true":"false"),s?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current");const a=t.querySelector("small");a&&n&&(a.textContent=ao(n))});const e=Se('[data-action="language"]');e&&(e.textContent=p().toUpperCase()),vl(),g0(),wl(),Ch()}function Ch(){const e=Se("#sidebarProgressBar"),t=Se("#sidebarProgressLabel"),n=Se("#sidebarProgressPercent"),s=Se("#sidebarProgressNote"),a=Se("#sidebarUserAvatar"),o=Se("#sidebarUserTitle"),c=Se("#sidebarUserSubtitle"),l=qt(),d=zc(),u=Ke(),m=Math.max(1,Number(r.progress?.level||1)),h=Math.max(0,Math.min(100,Math.round(l.percent||0)));e&&(e.max=100,e.value=h),t&&(t.textContent=`${p()==="ru"?"Уровень":"Level"} ${m}`),n&&(n.textContent=`${h}%`),s&&(s.textContent=u>0?`${u} ${oe().reviewQueue} · ${d.title||oe().mapHint}`:`${d.title||oe().mapHint}${d.summary?` · ${d.summary}`:""}`),a&&(a.textContent=`N${m}`),o&&(o.textContent=(p()==="ru","Flash Kanji")),c&&(c.textContent=`${oe().level} ${m} · ${r.progress?.streak?.current||0} ${oe().streak}`)}function Lh(){r.n5Textbook?.items?.length||Hi();const e=Th(),t=Lf(),n=Ke(),s=zc(),a=Tf(),o=oe(),c=qt(),l=Math.max(0,Math.min(100,Math.round(c.percent||0))),d=p()==="ru",u=d?[{action:"home-review",icon:"↻",title:"Повторение",detail:n>0?`${n} карточек ждут тебя.`:"Очередь пуста, но тренировка всегда под рукой.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:r.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Комната Евы",detail:"Диалоги, фон и Moon Fragments.",count:r.progress.moonFragments}]:[{action:"home-review",icon:"↻",title:"Review",detail:n>0?`${n} cards are waiting.`:"The queue is empty, but practice is always ready.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:r.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Eva Room",detail:"Dialogue, backgrounds, and Moon Fragments.",count:r.progress.moonFragments}],m=vg();return`
      <section class="page home-shell">
        <article class="home-hero-card">
          <img class="home-hero-moon" src="assets/decor/elements/crescent-moon.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
          <div class="home-hero-copy">
            <p class="eyebrow">JLPT N5-N1 · ${i(d?"Учебники":"Textbooks")} · ${i(d?"Повторение":"Review")}</p>
            <h1 class="hero-title home-hero-title">${d?"Небольшой урок.<br><em>Большой шаг.</em>":"Small lesson.<br><em>Big step.</em>"}</h1>
            <p class="home-hero-note">${i(s.summary||(d?"Сегодня появится новый шаг вперед.":"Today brings a small but steady step forward."))}</p>
            <p class="hero-subtitle">${i(A("tagline"))}</p>
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
              <progress class="progress-line" max="100" value="${g(String(l))}">0%</progress>
              <b>${i(`${l}%`)}</b>
            </div>
          </div>
        </article>
        <section class="metric-grid home-metrics" aria-label="${g(o.route)}">
          ${a.map(If).join("")}
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
                ${Rf().map(_f).join("")}
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
                ${u.map(Mf).join("")}
              </div>
            </article>
            ${Kr()?"":`
              <article class="study-card home-install-card">
                <button class="btn ghost" type="button" data-action="pwa-install">${i(m.install)}</button>
                <p class="home-install-hint">${i(m.description)}${Ms()?` ${i(m.iosInstruction)}`:""}</p>
              </article>
            `}
          </div>
          <aside class="home-dashboard-side">
            ${Rh(e)}
          </aside>
        </section>
      </section>
    `}function Th(){Ih();const e=Z(),t=e.currentLine||r.evaRuntime?.currentPhrase||null,n=ja(),s=f(_s("eva").name||{ru:"Ева",en:"Eva"}),a=r.evaRuntime?.mood||e.mood||At().mood,o=r.evaRuntime?.emotion||e.emotion||t?.emotion||"calm",c=t?.state||r.evaRuntime?.presenceState||(n?"wait_choice":"speak"),l=ps(t?.sprite||r.evaRuntime?.currentSkin||io());return{line:t,question:n,speaker:s,mood:a,emotion:o,presenceState:c,sprite:l}}function Ih(){le();const e=Z();return e.currentLine?.text||r.evaRuntime?.currentPhrase?.text?e.currentLine||r.evaRuntime.currentPhrase:(_d("manual"),Z().currentLine||r.evaRuntime?.currentPhrase||null)}function Rh(e){const t=rn(),n=sn(),s=e.question?p()==="ru"?"Вопрос":"Question":p()==="ru"?"Диалог":"Dialogue",a=e.line||{text:{ru:"Я здесь.",en:"I'm here."}},o=a.id||"home_eva_line";return`
      <section class="home-eva-vn" role="region" aria-label="${g(p()==="ru"?"Диалог Евы":"Eva dialogue")}" data-home-eva-mode="${g(e.question?"question":"dialogue")}" data-eva-state="${g(e.presenceState)}" data-eva-mood="${g(e.mood)}" data-eva-emotion="${g(e.emotion)}">
        <div class="home-eva-copy">
          <div class="home-eva-meta">
            <strong>${i(e.speaker)}</strong>
            <span class="pill">${i(s)}</span>
          </div>
          ${pd(f(a.text||{ru:"Я здесь.",en:"I'm here."}),o)}
          ${e.question?`
            <div class="eva-question-box home-eva-question">
              <span class="pill">${i(n.question)}</span>
              <strong>${i(f(e.question.text))}</strong>
              <div class="eva-choice-grid">
                ${e.question.options.map(c=>`
                  <button class="btn ${c.id===e.question.options[0]?.id?"primary":"ghost"}" type="button" data-action="eva-question-answer" data-option="${g(c.id)}">
                    ${i(f(c.text))}
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
          <img class="${g(ud({line:e.line,isAutonomy:!0}))}" src="${g(e.sprite)}" alt="${g(e.speaker)}" loading="eager" decoding="async" onerror="this.src='assets/mascots/eva_normal.webp'" />
        </button>
      </section>
    `}function dd(e){return e.line?.state||r.evaRuntime?.presenceState||(e.isAutonomy?"speak":"wait_choice")}function ud(e){const t=["eva-vn-sprite"],n=dd(e);return["speak","soften","warning"].includes(n)&&t.push("is-speaking"),(["react","warning"].includes(n)||Date.now()-Number(r.evaRuntime?.lastVisualChangeAt||0)<1400)&&t.push("is-reacting"),n==="quiet"&&t.push("is-quiet"),t.join(" ")}function _h(e){const t=String(e||"").trim();return t?(t.match(/[^.!?гЂ'пјЃпјџ]+[.!?гЂ'пјЃпјџ]?/g)||[t]).map(s=>s.trim()).filter(Boolean):[]}function pd(e,t=""){const n=_h(e),a=`eva-dialogue-text ${r.evaRuntime?.textRevealSkippedLineId===t?"is-skipped":""}`,o=n.length?n.map((c,l)=>`<span class="eva-line-piece" style="--i:${l}">${i(c)}</span>`).join(" "):i(e);return`<p class="${a}" data-action="eva-dialogue-skip" data-line-id="${g(t)}">${o}</p>`}function Mh(){le(),Zs(),rr(),q();const e=Nv(),t=e.node,n=Ft()||e.bg||ds(t.background),s=e.sprite||e.spriteSrc||ps(e.spriteId||an(t.sprite)),a=rn(),o=sn(),c=Array.isArray(t.choices)?t.choices:[],l=dd(e),d=e.line?.id||t.id||"eva_dialogue";return`
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

        ${Xh()}
        ${qh(e)}
        <article class="eva-vn-scene ${e.isAutonomy?"is-autonomous":""} is-${g(l)}" data-eva-state="${g(l)}" data-eva-mood="${g(e.mood||At().mood)}" data-eva-emotion="${g(e.emotion||"calm")}" style="--eva-bg:url('${g(n.file)}')">
          <div class="eva-vn-bg" aria-hidden="true"></div>
          <button class="eva-sprite-button" type="button" data-action="eva-click" aria-label="${g(f(t.speaker||{ru:"Ева",en:"Eva"}))}">
            <img class="${g(ud(e))}" src="${g(s)}" alt="${g(f(t.speaker||{ru:"Ева",en:"Eva"}))}" onerror="this.src='assets/mascots/eva_normal.webp'" />
          </button>
          ${Eh(e)}
          <div class="eva-dialogue-box">
            <div class="eva-dialogue-meta">
              <strong>${i(f(t.speaker||{ru:"Ева",en:"Eva"}))}</strong>
              <span>${e.isAutonomy?`${i(o.badge)} · `:""}${i(f(n.title||{}))}</span>
            </div>
            ${pd(f(t.text||{}),d)}
            ${e.isAutonomy?Hh(a):`
              <div class="eva-choice-grid">
                ${c.map((u,m)=>`
                  <button class="btn ${m===0?"primary":"ghost"}" type="button" data-action="eva-room-choice" data-index="${m}">
                    ${i(f(u.text||{}))}
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

        ${r.evaRoomShopOpen?Ph():""}
      </section>
    `}function Ph(){const e=rn();return`
      <aside class="eva-shop-panel customization-shop-panel" role="dialog" aria-label="${g(e.shop)}">
        ${gd({closable:!0})}
      </aside>
    `}function Eh(e={}){const t=Kh(e);return t?`
      <div class="eva-room-decoration deco-${g(t.id)}" aria-label="${g(dt(t))}">
        <img src="${g(t.asset||t.preview)}" alt="" loading="lazy" />
      </div>
    `:""}function Kh(e={}){const t=e.decoration||Z().currentDecoration||r.customization?.selected?.decoration||r.customization?.selected?.frame,n=pe(t);return!n||n.type!=="decoration"||!Ct(n.id)?null:n}function gd(e={}){const t=cs(),n=Bh(),s=Ve().filter(a=>Ct(a.id)).length;return`
      <div class="custom-shop">
        <div class="custom-shop-hero">
          <div>
            <span class="pill">${i(t.subtitle)}</span>
            <h2>${i(t.title)}</h2>
            <p>${i(t.hint)}</p>
            <div class="custom-shop-stats">
              <span><b>${r.progress.moonFragments}</b> Moon</span>
              <span><b>${s}</b>/${Ve().length} ${i(t.ownedShort)}</span>
            </div>
          </div>
          ${e.closable?`<button class="icon-btn" type="button" data-action="eva-room-shop-close" aria-label="${g(rn().close)}">✕</button>`:""}
        </div>
        <div class="custom-shop-tabs" role="tablist" aria-label="${g(t.categories)}">
          ${Dh().map(a=>`
            <button class="${r.shopFilters.category===a.id?"is-active":""}" type="button" data-action="shop-category" data-category="${g(a.id)}">
              ${i(f({ru:a.title_ru,en:a.title_en}))}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls">
          ${Oh().map(a=>`
            <button class="${r.shopFilters.view===a.id?"is-active":""}" type="button" data-action="shop-filter" data-filter="${g(a.id)}">
              ${i(a.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls custom-shop-sort">
          ${Fh().map(a=>`
            <button class="${r.shopFilters.sort===a.id?"is-active":""}" type="button" data-action="shop-sort" data-sort="${g(a.id)}">
              ${i(a.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-grid">
          ${n.map(Gh).join("")||`<article class="empty-state"><h3>${i(t.empty)}</h3></article>`}
        </div>
        <div class="custom-shop-history">
          ${pp({limit:6})}
        </div>
      </div>
    `}function Dh(){return r.customizationCatalog?.categories?.length?r.customizationCatalog.categories:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}]}function Oh(){const e=p()==="ru";return[{id:"all",title:e?"Все":"All"},{id:"available",title:e?"Доступные":"Available"},{id:"owned",title:e?"Купленные":"Owned"},{id:"new",title:e?"Новые":"New"}]}function Fh(){const e=p()==="ru";return[{id:"featured",title:e?"Рекомендовано":"Featured"},{id:"price",title:e?"По цене":"By price"},{id:"rarity",title:e?"По редкости":"By rarity"}]}function Bh(){const e=r.shopFilters.category||"all",t=r.shopFilters.view||"all",n={common:1,rare:2,epic:3,legendary:4,mythic:5};let s=Ve().filter(a=>e==="all"||a.type===e);return t==="available"&&(s=s.filter(a=>Td(a)==="available")),t==="owned"&&(s=s.filter(a=>Ct(a.id))),t==="new"&&(s=s.filter(a=>!r.customization?.seen?.includes(a.id))),r.shopFilters.sort==="price"&&(s=[...s].sort((a,o)=>a.price-o.price)),r.shopFilters.sort==="rarity"&&(s=[...s].sort((a,o)=>(n[o.rarity]||0)-(n[a.rarity]||0)||a.price-o.price)),s}function Gh(e){const t=Td(e),n=cs(),s=n.status[t]||t,a=Ev(e),o=t==="available"?`<button class="btn primary" type="button" data-action="shop-buy" data-id="${g(e.id)}">${i(n.buy)}</button>`:t==="owned"?`<button class="btn" type="button" data-action="shop-select" data-id="${g(e.id)}">${i(n.select)}</button>`:t==="selected"?`<button class="btn warning" type="button" data-action="shop-clear-item" data-id="${g(e.id)}">${i(n.remove)}</button>`:`<button class="btn" type="button" disabled>${i(n.unavailable)}</button>`;return`
      <article class="custom-shop-card type-${g(e.type)} is-${g(t)} rarity-${g(e.rarity)}">
        <div class="custom-shop-preview">
          <img src="${g(e.preview||e.asset)}" alt="${g(dt(e))}" loading="lazy" onerror="this.closest('.custom-shop-card').classList.add('is-missing')" />
          <span class="rarity-badge">${i(Jh(e.rarity))}</span>
        </div>
        <div class="custom-shop-card-body">
          <div class="custom-shop-title-row">
            <strong>${i(dt(e))}</strong>
            <span class="status-badge">${i(s)}</span>
          </div>
          ${e.stars?`<div class="custom-shop-stars" aria-label="${g(`${e.stars} stars`)}">${i("★".repeat(Math.max(1,Math.min(5,Number(e.stars)||1))))}</div>`:""}
          <p>${i(zh(e))}</p>
          ${e.type==="outfit"&&md(e)?`<blockquote class="custom-shop-phrase">${i(md(e))}</blockquote>`:""}
          ${a?`<small class="custom-shop-unlock">${i(a)}</small>`:""}
          <div class="custom-shop-price">
            <span>${e.price?`${e.price} Moon`:n.free}</span>
            <small>${i(Uh(e.type))}</small>
          </div>
          ${o}
        </div>
      </article>
    `}function cs(){return p()==="ru"?{title:"Магазин кастомизации",subtitle:"Flash Kanji Custom",hint:"Фоны, образы Евы, декор, темы и эффекты за Moon Fragments.",categories:"Категории магазина",ownedShort:"куплено",buy:"Купить",select:"Выбрать",remove:"Убрать",selected:"Выбран",unavailable:"Недоступно",free:"Бесплатно",locked:"Предмет пока недоступен.",notEnough:"Не хватает Moon Fragments.",bought:"Куплено: {item}",selectedToast:"Выбрано: {item}",empty:"Нет предметов по этому фильтру.",status:{selected:"Выбран",owned:"Куплено",available:"Доступно",locked:"Закрыто"}}:{title:"Customization Shop",subtitle:"Flash Kanji Custom",hint:"Backgrounds, Eva outfits, room decor, themes, and effects for Moon Fragments.",categories:"Shop categories",ownedShort:"owned",buy:"Buy",select:"Select",remove:"Remove",selected:"Selected",unavailable:"Unavailable",free:"Free",locked:"This item is not available yet.",notEnough:"Not enough Moon Fragments.",bought:"Bought: {item}",selectedToast:"Selected: {item}",empty:"No items match this filter.",status:{selected:"Selected",owned:"Owned",available:"Available",locked:"Locked"}}}function dt(e){return p()==="en"?e.title_en||e.title_ru||e.id:e.title_ru||e.title_en||e.id}function zh(e){return p()==="en"?e.description_en||e.description_ru||"":e.description_ru||e.description_en||""}function md(e){return p()==="en"?e.phrase_en||e.phrase_ru||"":e.phrase_ru||e.phrase_en||""}function Jh(e){return{common:(p()==="ru","Common"),rare:(p()==="ru","Rare"),epic:(p()==="ru","Epic"),legendary:(p()==="ru","Legendary"),mythic:(p()==="ru","Mythic")}[e]||e}function Uh(e){const t=p()==="ru";return{background:t?"Фон":"Background",outfit:t?"Образ":"Outfit",decoration:t?"Декор":"Decoration",theme:t?"Тема":"Theme",effect:t?"Эффект":"Effect"}[e]||e}function qh(e){rn();const t=sn(),n=Z(),s=e.bg||Ft(),a=hd(e.spriteId||r.progress.selectedEvaSprite),o=pe(r.customization?.selected?.effect),c=pe(e.decoration||n.currentDecoration),l=Wh(e.mood||n.mood),d=Uc();return`
      <aside class="eva-autonomy-panel eva-live-status" data-eva-lines="${r.evaAutonomyLines.length}" data-eva-current="${g(n.currentLine?.id||"")}">
        <div>
          <span class="pill">${i(t.badge)}</span>
          <strong>${i(t.status)}</strong>
          <small>${i(t.hint)}</small>
        </div>
        <div class="eva-autonomy-meta">
          <span>${i(t.mood)}: ${i(l)}</span>
          <span>${i(t.quiz)}: ${i(d.correct||0)}/${i(d.answered||0)}</span>
          ${d.streak?`<span>${i(t.quizStreak)}: ${i(d.streak)}</span>`:""}
          <span>${i(f(s.title||{}))}</span>
          <span>${i(f(a?.title||{ru:"Ева",en:"Eva"}))}</span>
          ${c?`<span>${i(dt(c))}</span>`:""}
          ${o?`<span class="eva-active-effect-chip">${i(dt(o))}<button type="button" class="eva-active-effect-clear" data-action="shop-clear-effect" data-id="${g(o.id)}" aria-label="${g(p()==="ru"?"Убрать эффект":"Remove effect")}">✕</button></span>`:""}
        </div>
      </aside>
    `}function Hh(e){const t=sn(),n=ja();return n?.id?`
        <div class="eva-question-box">
          <span class="pill">${i(t.question)}</span>
          <strong>${i(f(n.text))}</strong>
          <div class="eva-choice-grid">
            ${n.options.map(s=>`
              <button class="btn ${s.id===n.options[0]?.id?"primary":"ghost"}" type="button" data-action="eva-question-answer" data-option="${g(s.id)}">
                ${i(f(s.text))}
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
    `}function sn(){return p()==="ru"?{badge:"Ева рядом",status:"Ева держит присутствие в комнате",hint:"Она помнит паузы, выбирает тон по контексту и реагирует открытыми образами без лишнего шума.",mood:"Настроение",quiz:"Вопросы",quizStreak:"Серия",question:"Вопрос Евы"}:{badge:"Eva nearby",status:"Eva keeps presence in the room",hint:"She remembers gaps, chooses tone from context, and reacts with unlocked looks without extra noise.",mood:"Mood",quiz:"Questions",quizStreak:"Streak",question:"Eva's question"}}function Wh(e){const n=p()==="ru"?{neutral:"Ровное настроение",focused:"Собрана",soft:"Мягче обычного",strict:"Строгая",tired:"Немного устала",happy:"Довольна прогрессом",serious:"Серьёзна",mystic:"Лунное настроение",cyber:"Анализирует",travel:"Вспоминает дороги",quiet:"Молчит рядом",curious:"Заинтересована",close:"Близость",proud:"Гордится тобой",worried:"Беспокоится",reserved:"Держит дистанцию"}:{neutral:"Steady mood",focused:"Focused",soft:"Softer than usual",strict:"Strict",tired:"A little tired",happy:"Pleased with progress",serious:"Serious",mystic:"Moonlit mood",cyber:"Analyzing",travel:"Thinking of old roads",quiet:"Quiet nearby",curious:"Interested",close:"Close",proud:"Proud of you",worried:"Worried",reserved:"Reserved"};return n[e]||n.neutral}function Xh(){const e=At(),t=rn(),n=t.moods[e.mood]||t.moods.neutral,s=[["warmth",t.warmth,e.warmth],["trust",t.trust,e.trust],["discipline",t.discipline,e.discipline],["curiosity",t.curiosity,e.curiosity]];return`
      <aside class="eva-relationship-panel" aria-label="${g(t.relationship)}">
        <div class="eva-relationship-head">
          <span>${i(t.relationship)}</span>
          <strong>${i(n)}</strong>
        </div>
        <div class="eva-relationship-grid">
          ${s.map(([a,o,c])=>`
            <div class="eva-relationship-stat eva-stat-${a}">
              <div><span>${i(o)}</span><strong>${Math.round(c)}</strong></div>
              <i><b style="width:${ce(c,0,100)}%"></b></i>
            </div>
          `).join("")}
        </div>
      </aside>
    `}function rn(){return p()==="ru"?{back:"На главную",shop:"Магазин Евы",close:"Закрыть",shopHint:"Покупай комнаты и образы Евы за Moon Fragments.",buy:"Купить",select:"Выбрать",selected:"Выбран",free:"Открыто",restart:"Начать диалог заново",study:"К уроку",review:"К повтору",notEnough:"Не хватает Moon Fragments.",bought:"Фон открыт.",selectedToast:"Фон выбран.",reward:"Ева дала Moon Fragments.",roomShopTitle:"Комнаты",spriteShopTitle:"Образы Евы",spriteBought:"Образ Евы открыт.",spriteSelected:"Образ Евы выбран.",autonomyBadge:"Ева рядом",autonomyShortOn:"Ева · авто",autonomyShortOff:"Ева · тихо",autonomyOn:"Ева рядом",autonomyOff:"Ева рядом",autonomyHint:"Ева сама выбирает реплики, настроение, комнату и образ без спойлеров FIS.",autonomySettingsHint:"Самостоятельные реплики Евы в комнате, без раскрытия сюжета.",enableAutonomy:"Ева рядом",disableAutonomy:"Ева рядом",changeFrequency:"Статус Евы",frequency:"Частота",frequencies:{quiet:"тихо",normal:"нормально",active:"часто"},roomMode:"Комната",outfitMode:"Образ",roomModeButton:"Комната Евы",outfitModeButton:"Образ Евы",auto:"авто",manual:"ручной",nextAutonomyLine:"Ещё мысль.",storyDialogue:"Вернуться к диалогу.",relationship:"Отношения с Евой",warmth:"Тепло",trust:"Доверие",discipline:"Дисциплина",curiosity:"Интерес",moreTalk:"Ещё реплика",anotherTalk:"Другая тема",moods:{neutral:"Ровное настроение",close:"Близость",proud:"Гордится тобой",curious:"Заинтересована",worried:"Беспокоится",reserved:"Держит дистанцию"}}:{back:"Home",shop:"Eva Shop",close:"Close",shopHint:"Buy rooms and Eva looks with Moon Fragments.",buy:"Buy",select:"Select",selected:"Selected",free:"Unlocked",restart:"Restart dialogue",study:"Study",review:"Review",notEnough:"Not enough Moon Fragments.",bought:"Background unlocked.",selectedToast:"Background selected.",reward:"Eva gave you Moon Fragments.",roomShopTitle:"Rooms",spriteShopTitle:"Eva Looks",spriteBought:"Eva look unlocked.",spriteSelected:"Eva look selected.",autonomyBadge:"Eva nearby",autonomyShortOn:"Eva · auto",autonomyShortOff:"Eva · quiet",autonomyOn:"Eva nearby",autonomyOff:"Eva nearby",autonomyHint:"Eva chooses lines, mood, room, and look by herself without FIS spoilers.",autonomySettingsHint:"Independent Eva lines in her room, without story spoilers.",enableAutonomy:"Eva nearby",disableAutonomy:"Eva nearby",changeFrequency:"Eva status",frequency:"Frequency",frequencies:{quiet:"quiet",normal:"normal",active:"active"},roomMode:"Room",outfitMode:"Look",roomModeButton:"Eva room",outfitModeButton:"Eva look",auto:"auto",manual:"manual",nextAutonomyLine:"Another thought.",storyDialogue:"Back to dialogue.",relationship:"Relationship with Eva",warmth:"Warmth",trust:"Trust",discipline:"Discipline",curiosity:"Interest",moreTalk:"Another line",anotherTalk:"Different topic",moods:{neutral:"Steady mood",close:"Close",proud:"Proud of you",curious:"Interested",worried:"Worried",reserved:"Reserved"}}}function le(){var t,n,s,a,o,c,l,d,u,m,h,v,w;(t=r.progress).seenCards||(t.seenCards={}),(n=r.progress).seenKanji||(n.seenKanji={}),(s=r.progress).unlockedBackgrounds||(s.unlockedBackgrounds=["bg_study_hub"]),r.progress.unlockedBackgrounds.includes("bg_study_hub")||r.progress.unlockedBackgrounds.unshift("bg_study_hub"),(a=r.progress).selectedEvaRoomBackground||(a.selectedEvaRoomBackground="bg_study_hub"),(o=r.progress).unlockedEvaSprites||(o.unlockedEvaSprites=["idle","default"]),["idle","default"].forEach($=>{r.progress.unlockedEvaSprites.includes($)||r.progress.unlockedEvaSprites.push($)}),(c=r.progress).selectedEvaSprite||(c.selectedEvaSprite="idle");const e=Pc(_c(),r.progress.evaAutonomy||{});if((l=r.progress).evaAutonomy||(l.evaAutonomy={}),Object.keys(r.progress.evaAutonomy).forEach($=>delete r.progress.evaAutonomy[$]),Object.assign(r.progress.evaAutonomy,e),r.evaRuntime||(r.evaRuntime=jt()),(d=r.progress).evaRoomDialogueProgress||(d.evaRoomDialogueProgress={currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]}),(u=r.progress.evaRoomDialogueProgress).currentNode||(u.currentNode="intro"),(m=r.progress.evaRoomDialogueProgress).rewardsClaimed||(m.rewardsClaimed={}),(h=r.progress.evaRoomDialogueProgress).visited||(h.visited={}),r.progress.evaRoomDialogueProgress.lineHistory=Array.isArray(r.progress.evaRoomDialogueProgress.lineHistory)?r.progress.evaRoomDialogueProgress.lineHistory.slice(-24):[],(v=r.progress).evaRoomQuiz||(v.evaRoomQuiz={answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]}),(w=r.progress.evaRoomQuiz).rewarded||(w.rewarded={}),r.progress.evaRoomQuiz.history=Array.isArray(r.progress.evaRoomQuiz.history)?r.progress.evaRoomQuiz.history.slice(0,40):[],!r.progress.evaRelationship)r.progress.evaRelationship=Gi();else{const $=Mc(Gi(),r.progress.evaRelationship);Object.keys(r.progress.evaRelationship).forEach(y=>delete r.progress.evaRelationship[y]),Object.assign(r.progress.evaRelationship,$)}}function At(){return le(),r.progress.evaRelationship}function Zs(){if(!r.progress||!r.cards.length)return!1;le();const e=r.progress.evaRelationship;let t=!1;const n=re(),s=e.lastDecayDate||n,a=Math.max(0,xn(s,n));if(a>0){const k=r.progress.streak?.lastStudyDate,K=k?xn(k,n):a+1;!k||K>1?(ye({warmth:-Math.min(10,a*1.2),trust:-Math.min(14,a*1.6),discipline:-Math.min(22,a*3.4)},"study_gap",{silent:!0}),t=!0):(r.progress.streak?.current||0)>0&&(ye({discipline:.8,trust:.4},"streak_kept",{silent:!0}),t=!0),e.lastDecayDate=n}const o=sl(),c={learned:o.learned,mastered:o.mastered,reviews:rl(),lessons:Object.keys(r.progress.lessonCompletions||{}).length,streak:Math.max(r.progress.streak?.current||0,r.progress.streak?.best||0),wrong:r.progress.totalWrong||0,writing:r.progress.writingPractice?.completed||0,sentence:Object.keys(r.progress.sentencePractice?.completed||{}).length},l=e.lastKnown||{},d=k=>Math.max(0,Number(c[k]||0)-Number(l[k]||0)),u={},m=d("reviews"),h=d("learned"),v=d("mastered"),w=d("lessons"),$=d("streak"),y=d("wrong"),S=d("writing"),b=d("sentence");return m&&(u.discipline=(u.discipline||0)+Math.min(18,m*.08),u.trust=(u.trust||0)+Math.min(10,m*.04)),h&&(u.trust=(u.trust||0)+Math.min(20,h*.5),u.curiosity=(u.curiosity||0)+Math.min(16,h*.35)),v&&(u.trust=(u.trust||0)+Math.min(16,v*1.2),u.warmth=(u.warmth||0)+Math.min(8,v*.5)),w&&(u.warmth=(u.warmth||0)+Math.min(12,w*2),u.discipline=(u.discipline||0)+Math.min(10,w*1.5)),$&&(u.discipline=(u.discipline||0)+Math.min(15,$*3),u.warmth=(u.warmth||0)+Math.min(8,$)),S&&(u.curiosity=(u.curiosity||0)+Math.min(10,S*.8)),b&&(u.trust=(u.trust||0)+Math.min(10,b*.8)),y&&(u.discipline=(u.discipline||0)-Math.min(6,y*.12)),Object.keys(u).length&&(ye(u,"learning_progress",{silent:!0}),t=!0),e.lastKnown=c,fd(),t}function ye(e={},t="relationship",n={}){le();const s=r.progress.evaRelationship;return["warmth","trust","discipline","curiosity"].forEach(a=>{typeof e[a]>"u"||(s[a]=pi(ce(Number(s[a]||0)+Number(e[a]||0),0,100),1))}),fd(),n.silent||(s.history.unshift({at:new Date().toISOString(),reason:t,delta:e}),s.history=s.history.slice(0,40)),s}function fd(){const e=r.progress.evaRelationship;return e.discipline<25?e.mood="worried":e.trust<30?e.mood="reserved":e.warmth>=76&&e.trust>=68?e.mood="close":(r.progress.streak?.current||0)>=7&&e.discipline>=58?e.mood="proud":e.curiosity>=68?e.mood="curious":e.mood="neutral",e.mood}function io(){const e=r.customization?.selected?.outfit||r.progress?.shop?.equipped?.outfit||null,n=pe(e)?.spriteId||r.progress?.selectedEvaSprite||"idle";return r.evaSprites?.[n]&&ha(n)?n:"idle"}function Qh(e){const t=String(e||"");return new Set(["normal","neutral","idle","default","welcome","happy","soft_smile","gentle_smile","sad","angry","shy","think","thinking","focus","observe","observation","explain","teach","ready","reading","serious","strict","determined","tired","surprised","cold","proud","approve","confirm","achievement","reward","review","correct","levelup","writing","calm","tea","speaking"]).has(t)}function an(e,t=null){const n=e&&e!=="relationship"?String(e):null,s=io(),a=Qh(n),o=n&&!a?n:s,c=r.evaRuntime?.mood||At().mood,l=t||(a?n:null)||r.evaRuntime?.emotion||{close:"shy",proud:"approve",curious:"thinking",worried:"sad",reserved:"idle",neutral:"idle"}[c]||"idle",d=tv(l),u=[...new Set([o,s].filter(Boolean))];return[...u.flatMap(v=>Vh(v,d)),...u,...d,"idle","default"].filter(Boolean).find(v=>r.evaSprites?.[v]&&(ha(v)||!o||ha(o)))||"idle"}function Vh(e,t=[]){const n=String(e||"");if(!n)return[];const s=t.map(o=>`${n}_${o}`).filter(o=>r.evaSprites?.[o]),a=Kn(n);return!a||a.defaultOwned||s.length<=1?s:Yh(s)}function Yh(e=[]){const t=[...new Set(e.filter(Boolean))];if(t.length<=1)return t;const n=$i%t.length;return[...t.slice(n),...t.slice(0,n)]}function Zh(){const e=io(),t=Kn(e);return!t||t.defaultOwned?!1:Object.keys(r.evaSprites||{}).some(n=>n.startsWith(`${e}_`))}function ev(){yi&&window.clearInterval(yi),yi=window.setInterval(()=>{const e=Math.floor(Date.now()/6e4);e!==$i&&($i=e,!(document.hidden||!Zh())&&(r.route==="home"||r.route==="eva-room")&&x())},3e4)}function tv(e){const t=String(e).toLowerCase(),n={normal:["soft_smile","neutral","observe","idle"],neutral:["neutral","idle","soft_smile"],idle:["neutral","idle"],welcome:["soft_smile","observe","neutral","idle"],happy:["happy","soft_smile","gentle_smile","encourage","approve","proud"],soft_smile:["soft_smile","gentle_smile","happy","shy","approve","neutral"],approve:["approve","confirm","correct","confident","ready","soft_smile"],correct:["correct","confirm","approve","confident","ready","soft_smile"],proud:["proud","confident","approve","determined","soft_smile"],achievement:["achievement","legendary","mythic","reward","proud","approve","ready"],levelup:["levelup","legendary","mythic","determined","proud","ready"],reward:["reward","blessing","soft_smile","happy","approve"],review:["review","reading","ready","explain","think","neutral"],explain:["explain","teach","review","think","reading"],think:["think","thinking","analyze","observe","reading","explain","serious"],thinking:["think","thinking","analyze","observe","reading","explain","serious"],observe:["observe","serious","think","neutral"],ready:["ready","determined","walk","neutral"],serious:["serious","strict","determined","neutral"],strict:["strict","command","angry","serious"],angry:["angry","strict","command","serious"],sad:["sad","tired","cold","serious","neutral"],tired:["tired","cold","neutral"],shy:["shy","soft_smile","gentle_smile","happy"],surprised:["surprised","think","observe"],writing:["writing","teach","explain","ready","think"],focus:["think","observe","ready","serious"],calm:["neutral","idle","soft_smile"]},s=nv(t);return[...new Set([...n[t]||[],t,s,"neutral","idle"].filter(Boolean))]}function nv(e){return{neutral:"idle",idle:"idle",normal:"idle",welcome:"happy",happy:"happy",soft_smile:"shy",thinking:"think",serious:"think",strict:"angry",sad:"sad",shy:"shy",surprised:"think",approve:"approve",explain:"review",ready:"review",tired:"idle",observe:"think",special:"levelup",proud:"proud",calm:"idle"}[e]||"idle"}function Z(){return le(),r.progress.evaAutonomy}function fa(){const e=Z();return e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",!0}function oo(){const e=r.evaBackgrounds?.length?r.evaBackgrounds:[{id:"bg_study_hub",title:{ru:"Учебная комната",en:"Study Hub"},file:"assets/bg/bg_study_hub.webp",price:0,defaultUnlocked:!0}],t=new Set(e.map(s=>s.id)),n=Ve().filter(s=>s.type==="background"&&!t.has(s.id)).map(s=>({id:s.id,title:{ru:s.title_ru,en:s.title_en},file:s.asset||s.preview,price:s.price,defaultUnlocked:s.defaultOwned}));return[...e,...n]}function ds(e){return oo().find(t=>t.id===e)||oo()[0]}function Ft(){le();const e=r.progress.selectedEvaRoomBackground||r.customization?.selected?.background;return ds(e)||ds("bg_study_hub")}function sv(e){const t=ds(e);return t?t.defaultUnlocked||t.price===0||r.progress.unlockedBackgrounds.includes(t.id):!1}function rv(){const e=Ve().filter(n=>n.type==="outfit").map(n=>({id:n.spriteId||n.id,shopId:n.id,title:{ru:n.title_ru,en:n.title_en},price:n.price,defaultUnlocked:n.defaultOwned})),t=[{id:"idle",title:{ru:"Ева: спокойная",en:"Eva: Calm"},price:0,defaultUnlocked:!0},{id:"default",title:{ru:"Ева: классика",en:"Eva: Classic"},price:0,defaultUnlocked:!0},{id:"think",title:{ru:"Ева: размышление",en:"Eva: Thinking"},price:25},{id:"happy",title:{ru:"Ева: тепло",en:"Eva: Warm"},price:35},{id:"approve",title:{ru:"Ева: наставник",en:"Eva: Mentor"},price:35},{id:"review",title:{ru:"Ева: повторение",en:"Eva: Review"},price:40},{id:"proud",title:{ru:"Ева: гордость",en:"Eva: Proud"},price:45},{id:"shy",title:{ru:"Ева: ближе",en:"Eva: Closer"},price:55},{id:"sad",title:{ru:"Ева: тревога",en:"Eva: Concerned"},price:30},{id:"reward",title:{ru:"Ева: награда",en:"Eva: Reward"},price:50},{id:"achievement",title:{ru:"Ева: достижение",en:"Eva: Achievement"},price:60},{id:"levelup",title:{ru:"Ева: уровень",en:"Eva: Level Up"},price:65}].filter(n=>r.evaSprites?.[n.id]&&!e.some(s=>s.id===n.id));return[...e,...t]}function hd(e){return rv().find(t=>t.id===e)}function ha(e){if(!e)return!1;const t=hd(e);return!!(t?.defaultUnlocked||t?.price===0||r.progress.unlockedEvaSprites?.includes(e)||r.progress.shop?.owned?.includes(`eva_sprite:${e}`))}function va(e){le();const t=r.evaRuntime?.mood||Bt(Ne()),n={close:["bg_cafe","bg_park","bg_eva_room","bg_study_hub"],proud:["bg_practice_room","bg_classroom","bg_moon_room","bg_study_hub"],curious:["bg_library","bg_cyber_room","bg_shrine","bg_study_hub"],worried:["bg_study_hub","bg_evening_street","bg_winter_city"],reserved:["bg_library","bg_silent_road","bg_study_hub"],focused:["bg_classroom","bg_practice_room","bg_study_hub"],soft:["bg_cafe","bg_park","bg_study_hub"],strict:["bg_classroom","bg_silent_road","bg_study_hub"],tired:["bg_cafe","bg_library","bg_study_hub"],happy:["bg_park","bg_cafe","bg_moon_room","bg_study_hub"],serious:["bg_silent_road","bg_library","bg_study_hub"],mystic:["bg_moon_room","bg_shrine","bg_study_hub"],cyber:["bg_cyber_room","bg_library","bg_study_hub"],travel:["bg_silent_road","bg_evening_street","bg_school_street","bg_study_hub"],quiet:["bg_library","bg_study_hub"],neutral:["bg_study_hub","bg_classroom","bg_library","bg_silent_road"]},s=[...e?.preferredBackgrounds||[],...n[t]||n.neutral],a=oo().filter(c=>sv(c.id));return s.map(c=>a.find(l=>l.id===c)).find(Boolean)||Oe(a)||Ft()}function wa(e){le();const t=r.evaRuntime?.mood||Bt(Ne()),n={close:["casual_fox","librarian_eva","shy","idle","approve"],proud:["academy_instructor","moon_priestess","study_session","approve","proud","review"],curious:["librarian_eva","cyber_eva","think","review","idle"],worried:["winter_traveler","fis_mentor","sad","idle","think"],reserved:["silent_road","fis_mentor","idle","default"],focused:["study_session","academy_instructor","review","approve","idle"],soft:["librarian_eva","casual_fox","shy","approve","idle"],strict:["academy_instructor","fis_mentor","angry","think","idle"],tired:["winter_traveler","idle","default"],happy:["happy","proud","approve","casual_fox"],serious:["fis_mentor","silent_road","think","idle"],mystic:["moon_priestess","shrine_maiden","achievement","reward"],cyber:["cyber_eva","think","review"],travel:["silent_road","winter_traveler","fis_mentor"],quiet:["fis_mentor","idle","default"],neutral:["fis_mentor","study_session","librarian_eva","idle","think","review","default"]};return[e?.sprite,...n[t]||n.neutral].filter(Boolean).find(a=>ha(a)&&r.evaSprites?.[a])||r.progress.selectedEvaSprite||"idle"}function av(e){return e==="generated_line"?iv():r.evaRoomDialogues.find(t=>t.id===e)||r.evaRoomDialogues[0]||{id:"intro",background:"bg_study_hub",sprite:"relationship",speaker:{ru:"Ева",en:"Eva"},text:{ru:"С возвращением.",en:"Welcome back."},choices:[]}}function iv(){le();const e=rn(),t=r.progress.evaRoomDialogueProgress.generatedLine||Ad("adaptive");return r.progress.evaRoomDialogueProgress.generatedLine=t,{id:"generated_line",background:t.background||Ft().id||"bg_study_hub",sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[{text:{ru:e.moreTalk,en:e.moreTalk},randomLine:t.category||"adaptive",relationshipDelta:{warmth:.6,curiosity:.4}},{text:{ru:e.anotherTalk,en:e.anotherTalk},next:"intro",relationshipDelta:{warmth:.2}},{text:{ru:e.study,en:e.study},next:"intro",route:"learn",relationshipDelta:{discipline:1.2,trust:.5}}]}}function ba(){return Array.isArray(r.evaRoomLines)?r.evaRoomLines:[]}function ov(e="auto"){const t=r.evaPresence?.categoryMap?.[e];return Array.isArray(t)?t:[]}function vd(e){return typeof e>"u"||e===null?[]:Array.isArray(e)?e.map(String):[String(e)]}function lv(e,t=Ne()){const n=e?.conditions||{},s=(o,c)=>{const l=vd(c);return!l.length||l.includes(String(o))},a=(o,c)=>{const l=vd(c);return!l.length||l.some(d=>String(o||"").includes(d)||d===String(o))};return!(!s(t.route,n.route)||!s(t.timeOfDay,n.timeOfDay)||!a(t.activeSkin,n.activeSkin)||!a(t.activeBackground,n.activeBackground)||typeof n.minGapDays<"u"&&Number(t.daysSinceReturn||0)<Number(n.minGapDays)||typeof n.maxGapDays<"u"&&Number(t.daysSinceReturn||0)>Number(n.maxGapDays)||typeof n.minDueReviews<"u"&&Number(t.dueReviews||0)<Number(n.minDueReviews)||typeof n.maxDueReviews<"u"&&Number(t.dueReviews||0)>Number(n.maxDueReviews)||typeof n.minStreak<"u"&&Number(t.streak||0)<Number(n.minStreak)||typeof n.maxStreak<"u"&&Number(t.streak||0)>Number(n.maxStreak)||typeof n.minTalkOverStudy<"u"&&Number(t.timesUserChoseTalkOverStudy||0)<Number(n.minTalkOverStudy))}function cv(e="auto",t=Ne()){return null}function ka(e,t="auto",n=Ne()){if(!r.evaRuntime||!e?.id)return;r.evaRuntime.memory=Dn(Kt(),r.evaRuntime.memory||{});const s=r.evaRuntime.memory;s.recentLineIds=[e.id,...(s.recentLineIds||[]).filter(o=>o!==e.id)].slice(0,30);const a=e.category||t;s.recentTopics=[a,...(s.recentTopics||[]).filter(o=>o!==a)].slice(0,20),s.lastRoute=n.route||r.route,s.lastInteractionDate=re(),s.lastKnownMood=r.evaRuntime.mood||At().mood,(["warning","answer_wrong","idle_timeout"].includes(t)||String(e.category||"").includes("warning"))&&(s.lastWarningAt=new Date().toISOString()),(["answer_correct","lesson_complete","level_up","streak_up"].includes(t)||String(e.category||"").includes("reward"))&&(s.lastPraiseAt=new Date().toISOString())}function wd(e){if(!r.evaRuntime)return;r.evaRuntime.memory=Dn(Kt(),r.evaRuntime.memory||{});const t=r.evaRuntime.memory;t.lastRoute=r.route,["timer","idle_timeout"].includes(e.type)||(t.lastInteractionDate=re()),e.type==="answer_wrong"&&(t.recentProblemCluster=e.payload?.cardId||"reading"),e.type==="room_opened"&&(t.preferredEvaRoomBackground=r.progress?.selectedEvaRoomBackground||t.preferredEvaRoomBackground)}function dv(){return{quiet:12e4,normal:Cn(45e3,12e4),active:45e3}}function uv(){ki&&window.clearInterval(ki),ki=window.setInterval(pv,5e3)}function us(){const e=Z(),t=dv()[e.frequency]||Cn(45e3,12e4);e.nextSpeakAt=Date.now()+t}function pv(){if(document.hidden||!r.progress||!r.evaRuntime)return!1;const e=Ne(),t=r.evaRuntime,n=Z(),s=Date.now();let a=!1;if(e.idleMs>9e4&&(!t.lastEvent||t.lastEvent.type!=="idle_timeout")&&s-Number(t.lastPhraseAt||0)>6e4)return $e("idle_timeout",{idleMs:e.idleMs}),!0;if(s-Number(t.lastEmotionChangeAt||0)>=Number(t.cooldowns?.emotion||18e3)){const o=Bt(e),c=ya(e,o);(o!==t.mood||c!==t.emotion)&&(t.mood=o,t.emotion=c,n.mood=o,n.emotion=c,t.lastEmotionChangeAt=s,t.cooldowns.emotion=Cn(15e3,3e4),a=!0)}return r.route==="eva-room"&&s>=Number(n.nextSpeakAt||0)&&(Math.random()<.14?(t.mood="quiet",t.emotion="observe",t.presenceState="quiet",n.mood="quiet",n.emotion="observe",us(),a=!0):er("timer",{context:e})&&(a=!0)),a&&(On(),j(),r.route==="eva-room"&&x()),a}function Ne(e={}){const t=r.progress?Jt():{},n=r.evaRuntime||jt(),s=Dn(Kt(),n.memory||{}),a=new Date().getHours();return Ec(),{route:r.route,hour:a,timeOfDay:a<5?"late_night":a<11?"morning":a<18?"day":a<23?"evening":"night",correctToday:Number(t.reviews||0)-Number(t.mistakes||0),mistakesToday:Number(t.mistakes||0),reviewsToday:Number(t.reviews||0),learnedToday:Number(t.learned||0),streak:Number(r.progress?.streak?.current||0),level:Number(r.progress?.level||1),moonFragments:Number(r.progress?.moonFragments||0),ownedSkins:n.ownedSkins||[],ownedBackgrounds:n.ownedBackgrounds||[],ownedEffects:n.ownedEffects||[],ownedDecorations:n.ownedDecorations||[],activeSkin:n.activeSkin||r.progress?.selectedEvaSprite||"idle",activeBackground:n.activeBackground||r.progress?.selectedEvaRoomBackground||"bg_study_hub",memory:s,daysSinceReturn:Number(s.daysSinceReturn||0),recentTopics:s.recentTopics||[],recentLineIds:s.recentLineIds||[],timesUserChoseTalkOverStudy:Number(s.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(s.timesUserReturnedAfterGap||0),idleMs:Date.now()-Number(n.lastPlayerActionAt||Date.now()),sessionMs:Date.now()-xi,lastEvent:n.lastEvent,dueReviews:r.progress?Ke():0,shopOpen:!!r.evaRoomShopOpen,...e}}function Bt(e=Ne()){const t=e.lastEvent?.type;return t==="level_up"||t==="lesson_complete"||t==="streak_up"?"happy":t==="item_bought"&&String(e.lastEvent?.payload?.itemId||"").includes("moon")?"mystic":e.shopOpen||t==="shop_opened"||t==="item_bought"?"curious":e.route==="learn"||e.route==="review"||e.dueReviews>0?"focused":e.mistakesToday>=4?e.correctToday>e.mistakesToday?"soft":"strict":e.hour>=23||e.hour<5?e.ownedEffects?.includes("effect_moon_particles")?"mystic":"quiet":e.sessionMs>35*60*1e3?"tired":e.activeSkin==="cyber_eva"||e.ownedSkins?.includes("cyber_eva")?"cyber":e.activeSkin==="silent_road"||e.ownedSkins?.includes("silent_road")?"travel":e.route==="eva-room"&&e.streak>=7?"soft":"neutral"}function ya(e=Ne(),t=Bt(e),n=e.lastEvent?.type||"auto"){if(n==="answer_correct")return Oe(["approve","happy","soft_smile"]);if(n==="answer_wrong")return Oe(["thinking","strict","serious"]);if(n==="lesson_complete")return"approve";if(n==="level_up")return"special";if(n==="item_bought"||n==="shop_opened")return"observe";if(n==="user_clicked_eva")return Oe(["curious","shy","observe"]);if(n==="idle_timeout")return"observe";const s={neutral:["idle","observe"],focused:["ready","explain","thinking"],soft:["soft_smile","approve"],strict:["strict","serious"],tired:["tired","idle"],happy:["happy","approve"],serious:["serious","thinking"],mystic:["special","observe"],cyber:["observe","thinking"],travel:["ready","observe"],quiet:["observe","idle"],curious:["thinking","surprised","observe"]};return Oe(s[t]||s.neutral)}function er(e="auto",t={}){if(!r.progress||!fa()||!t.force&&r.route!=="eva-room")return!1;const n=Z(),s=Date.now();if(!t.force&&n.currentLine?.text&&n.nextSpeakAt&&s<Number(n.nextSpeakAt))return!1;const a=t.context||Ne({lastEvent:{type:e,payload:t.eventPayload||{}}}),o=Bt(a),c=bd(e)||lo(e);if(!c)return!1;r.evaRuntime||(r.evaRuntime=jt()),r.evaRuntime.mood=o;const l=c.emotion||ya(a,o,e),d=va(c),u=an(wa(c),l),m=co(c),h=uo(c),v=Sd(a,c);return n.currentLine={id:c.id,category:c.category||"mood",text:c.text,sprite:u,background:d.id,decoration:m,effect:h,emotion:l,state:c.state||"speak",at:new Date().toISOString(),reason:e},n.currentQuestion=v,n.currentDecoration=m,n.currentEffect=h,n.mood=o,n.emotion=l,n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=u,n.recentLineIds=[c.id,...(n.recentLineIds||[]).filter(w=>w!==c.id)].slice(0,32),r.evaRuntime||(r.evaRuntime=jt()),Object.assign(r.evaRuntime,{mood:o,emotion:l,presenceState:c.state||"speak",currentPhrase:n.currentLine,pendingQuestion:v,currentSkin:u,currentBackground:d.id,currentDecoration:m,currentEffect:h,activeSkin:u,activeBackground:d.id,lastPhraseAt:s,lastEmotionChangeAt:s,lastQuestionAt:v?s:Number(r.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:s,textRevealSkippedLineId:null,cooldowns:{...r.evaRuntime.cooldowns,emotion:Cn(15e3,3e4),phrase:Cn(45e3,12e4),question:Cn(3*6e4,7*6e4),visual:Cn(10*6e4,15*6e4)}}),ka(c,e,a),po(u,d.file),us(),ye(c.relationshipDelta||{warmth:.1},`eva_autonomy:${c.id}`,{silent:!0}),On(),Wt(),!0}function bd(e){const t=cv(e,Ne({lastEvent:{type:e}}));if(t)return t;const s={answer_correct:[{ru:"Верно.",en:"Correct."},{ru:"Хорошо.",en:"Good."},{ru:"Да. Именно так.",en:"Yes. Exactly."},{ru:"Ты начинаешь видеть структуру.",en:"You are starting to see the structure."},{ru:"Неплохо. Продолжай.",en:"Not bad. Continue."}],answer_wrong:[{ru:"Не совсем.",en:"Not quite."},{ru:"Посмотри ещё раз.",en:"Look again."},{ru:"Не угадывай. Разбери.",en:"Do not guess. Break it down."},{ru:"Запомни не ответ, а причину.",en:"Remember the reason, not just the answer."},{ru:"Это место стоит повторить.",en:"This part is worth repeating."}],user_clicked_eva:[{ru:"Да?",en:"Yes?"},{ru:"Что-то нужно?",en:"Need something?"},{ru:"Я слушаю.",en:"I'm listening."},{ru:"Не отвлекайся слишком часто.",en:"Don't distract yourself too often."},{ru:"Если нужен совет — спроси.",en:"If you need advice, ask."}],idle_timeout:[{ru:"Ты всё ещё здесь?",en:"Still here?"},{ru:"Сделаем короткий шаг?",en:"One short step?"},{ru:"Я подожду.",en:"I'll wait."},{ru:"Не исчезай надолго.",en:"Don't vanish for too long."}],manual:[{ru:"Один шаг всё ещё шаг.",en:"One step is still a step."},{ru:"Я рядом. Продолжай.",en:"I'm nearby. Continue."},{ru:"Кандзи не убегут. Но лучше не заставлять их ждать.",en:"The kanji won't run. Better not keep them waiting."},{ru:"Сначала форма. Потом смысл.",en:"Shape first. Meaning after."}],lesson_complete:[{ru:"Урок закрыт. След оставлен.",en:"Lesson complete. A mark is left."},{ru:"Хорошая работа. Теперь закрепи.",en:"Good work. Now reinforce it."}],level_up:[{ru:"Уровень выше. Дорога стала длиннее, не легче.",en:"Level up. The road is longer, not easier."},{ru:"Ты стал крепче. Это заметно.",en:"You got steadier. It shows."}],item_bought:[{ru:"Новая вещь. Посмотрим, приживётся ли.",en:"A new item. We'll see if it settles in."},{ru:"Комната меняется. Ты тоже.",en:"The room changes. So do you."}],room_opened:[{ru:"Я здесь.",en:"I'm here."},{ru:"Ты снова здесь. Это говорит больше, чем обещание.",en:"You're here again. That says more than a promise."},{ru:"Продолжай. Я посмотрю.",en:"Continue. I'll watch."}]}[e]||[],a=new Set(Z().recentLineIds||[]),o=s.filter(l=>!a.has(`${e}_${Ae(`${l.ru||l.en}`)}`)),c=Oe(o.length?o:s);return c?{id:`${e}_${Ae(`${c.ru||c.en}`)}`,category:e,text:c,relationshipDelta:{}}:null}function kd(){const e=Z(),t=e.currentLine?.id;t&&(e.recentLineIds=[t,...(e.recentLineIds||[]).filter(n=>n!==t)].slice(0,32))}function gv(e="auto"){const t=At(),n=new Date().getHours(),s=Ke(),a=Jt(),o=[];return o.push(...ov(e)),(e==="return"||!t.lastInteractionDate&&r.progress.appOpens>1)&&o.push("fis_return","return"),e==="room_opened"&&o.push("fis_room","fis_observation","room"),(e==="shop_opened"||e==="item_bought"||e==="item_equipped")&&o.push("fis_room","fis_reward","reward"),e==="answer_correct"&&o.push("fis_focus","fis_short","study"),e==="answer_wrong"&&o.push("fis_guard","fis_focus","mood"),(e==="user_clicked_eva"||e==="eva_click")&&o.push("fis_observation","fis_short","mood"),e==="idle_timeout"&&o.push("fis_return","fis_short","return"),e==="user_answered_eva_question"&&o.push("fis_focus","fis_observation"),e==="lesson_start"&&o.push("fis_study","study","fis_focus"),(e==="lesson_complete"||e==="level_up"||e==="streak_up")&&o.push("fis_reward","reward","fis_streak"),(e==="writing_complete"||e==="sentence_complete"||e==="advanced_mode")&&o.push("fis_observation","fis_focus"),(n>=23||n<5)&&o.push("fis_night","night"),s>=8&&o.push("fis_review","review"),(a.reviews||0)===0&&o.push("fis_study","study"),(r.progress.streak?.current||0)>=3&&o.push("fis_streak","streak"),(r.progress.rewardHistory?.length||r.rewardModal)&&o.push("fis_reward","reward"),t.mood==="curious"&&o.push("fis_observation","fis_focus","fis_room","hint","room"),(t.mood==="worried"||t.mood==="reserved")&&o.push("fis_guard","fis_return","mood","return"),o.push("fis_observation","fis_road","fis_guard","fis_focus","fis_short","mood","study","short"),[...new Set(o)]}function lo(e="auto"){le(),Zs();const t=At(),n=Ne({lastEvent:{type:e}}),s=Z().currentLine?.id,a=new Set([s,...Z().recentLineIds||[],...r.evaRuntime?.memory?.recentLineIds||[]].filter(Boolean)),o=Array.isArray(r.evaAutonomyLines)?r.evaAutonomyLines:[],c=gv(e),l=(u,m=!1)=>o.filter(h=>{if(!(h.category===u||(h.tags||[]).includes(u))||!m&&a.has(h.id)||!Cd(h,t)||!lv(h,n))return!1;const w=Array.isArray(h.moods)?h.moods:[];return!w.length||w.includes(t.mood)});for(const u of c){const m=l(u);if(m.length)return Oe(m)}for(const u of c){const m=l(u,!0);if(m.length)return Oe(m)}const d=o.filter(u=>!a.has(u.id));return Oe(d.length?d:o)}function $e(e,t={}){if(!e)return;rr(),q();const n={type:$d(e),payload:t||{},at:Date.now()};yd(n),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...n,handledByFlashKanji:!0}}))}Object.assign(window,{dispatchEvaEvent:$e});function yd(e={}){if(!e.type||!r.progress)return;le(),r.evaRuntime||(r.evaRuntime=jt());const t={type:$d(e.type),payload:e.payload||{},at:e.at||Date.now()};r.evaRuntime.lastEvent=t,r.evaRuntime.eventHistory=[t,...r.evaRuntime.eventHistory||[]].slice(0,80),r.evaRuntime.recentEvents=[t,...r.evaRuntime.recentEvents||[]].slice(0,80),wd(t),["timer","idle_timeout"].includes(t.type)||(r.evaRuntime.lastPlayerActionAt=Date.now());const n=mv(t.type,t.payload);Object.keys(n).length&&ye(n,`eva_event:${t.type}`,{silent:!0});const s=Z();kd(),s.nextSpeakAt=0;const a=er(t.type,{force:!0,eventPayload:t.payload});On(),j(),a&&r.route==="eva-room"&&x()}function $d(e){const t=String(e||"");return t==="eva_click"?"user_clicked_eva":t}function mv(e,t={}){const s={...{room_opened:{warmth:.2,curiosity:.2},shop_opened:{curiosity:.4},item_bought:{warmth:.5,curiosity:.8},item_equipped:{curiosity:.3},eva_click:{warmth:.35,curiosity:.2},user_clicked_eva:{warmth:.35,curiosity:.2},answer_correct:{trust:.35,discipline:.2},answer_wrong:{discipline:-.45,trust:-.15,curiosity:.15},lesson_start:{discipline:.25},lesson_complete:{warmth:1.1,trust:1.2,discipline:1.1},level_up:{warmth:1,curiosity:.8},streak_up:{discipline:.8,trust:.4},writing_complete:{curiosity:.5,discipline:.3},sentence_complete:{trust:.45,curiosity:.3},advanced_mode:{curiosity:.5,discipline:.4}}[e]||{}};return e==="answer_wrong"&&t.comboLost&&(s.discipline=(s.discipline||0)-.25),s}function co(e){const t=r.evaRuntime?.mood||Bt(Ne()),n={close:["deco_tea_table","deco_lantern","deco_moon_frame"],proud:["deco_kanji_board","deco_bookshelf","deco_gold_accent"],curious:["deco_bookshelf","deco_kanji_board","deco_tea_table"],worried:["deco_lantern","deco_moon_frame"],reserved:["deco_lantern","deco_bookshelf"],focused:["deco_kanji_board","deco_bookshelf"],soft:["deco_tea_table","deco_lantern"],strict:["deco_kanji_board","deco_scroll"],tired:["deco_tea_table","deco_lantern"],happy:["deco_golden_accent","deco_moon_frame"],serious:["deco_scroll","deco_lantern"],mystic:["deco_moon_frame","deco_lantern"],cyber:["deco_kanji_board","deco_bookshelf"],travel:["deco_scroll","deco_lantern"],quiet:["deco_lantern","deco_bookshelf"],neutral:["deco_bookshelf","deco_tea_table","deco_lantern"]},s=[...e?.preferredDecorations||[],...n[t]||n.neutral];return jd("decoration",s)}function uo(e){const t=r.evaRuntime?.mood||Bt(Ne()),n={close:["effect_golden_glow","effect_sakura_particles"],proud:["effect_golden_glow","effect_moon_particles"],curious:["effect_cyber_hud","effect_sakura_particles"],worried:["effect_snow_particles","effect_dust_particles"],reserved:["effect_dust_particles","effect_snow_particles"],focused:["effect_lesson_shine","effect_golden_glow"],soft:["effect_sakura_particles","effect_golden_glow"],strict:["effect_level_frame","effect_dust_particles"],tired:["effect_snow_particles","effect_dust_particles"],happy:["effect_golden_glow","effect_moon_particles"],serious:["effect_dust_particles","effect_level_frame"],mystic:["effect_moon_particles","effect_golden_glow"],cyber:["effect_cyber_hud","effect_lesson_shine"],travel:["effect_dust_particles","effect_snow_particles"],quiet:["effect_moon_particles","effect_snow_particles"],neutral:["effect_golden_glow","effect_moon_particles"]},s=[...e?.preferredEffects||[],...n[t]||n.neutral];return jd("effect",s)||"none"}function jd(e,t=[]){const n=Ve().filter(a=>a.type===e&&Ct(a.id));return(t.map(a=>n.find(o=>o.id===a)).find(Boolean)||Oe(n))?.id||null}function Sd(e=Ne(),t=null){const n=Z();if(n.currentQuestion?.id)return n.currentQuestion;if(r.evaRuntime?.pendingQuestion?.id)return n.currentQuestion=r.evaRuntime.pendingQuestion,n.currentQuestion;const s=e.lastEvent?.type||"auto",a=["user_clicked_eva","room_opened","manual"].includes(s),o=Date.now(),c=Number(r.evaRuntime?.lastQuestionAt||r.evaRuntime?.lastQuestion?.at||0),l=Number(r.evaRuntime?.cooldowns?.question||Cn(3*6e4,7*6e4));if(!a&&o-c<l||!a&&Math.random()>.34)return null;const d=new Set(r.evaRuntime?.questionHistory?.slice(0,6).map(h=>h.id)),u=Nd(s).filter(h=>!d.has(h.id)),m=Oe(u.length?u:Nd(s));return m?{...m,at:new Date().toISOString()}:null}function Nd(e="auto"){const t=Ff();if(t.length<2)return[];const n=new Set((r.evaRuntime?.questionHistory||[]).slice(0,10).map(o=>o.cardId).filter(Boolean)),s=`${re()}:${e}:${r.progress?.totalCorrect||0}:${r.progress?.totalWrong||0}`;return[...t].sort((o,c)=>{const l=n.has(String(o.id))?1:0,d=n.has(String(c.id))?1:0;return l-d||Ae(`${s}:${o.id}`)-Ae(`${s}:${c.id}`)}).slice(0,18).map(o=>fv(o,t,e)).filter(Boolean)}function fv(e,t,n="auto"){const s=Ie(e,"ru"),a=Ie(e,"en");if(!s||!a)return null;const o=hv(e,t);if(!o.length)return null;const c=String(e.jlpt||"").toUpperCase(),l=c||(p()==="ru"?"твоих карточек":"your cards"),d=xd(e,e,!0),u=[d,...o.map(m=>xd(m,e,!1))].sort((m,h)=>Ae(`${n}:${e.id}:${m.id}`)-Ae(`${n}:${e.id}:${h.id}`));return{id:`kanji_meaning_${e.id}_${Ae(`${s}:${a}`)}`,kind:"kanji_meaning",cardId:String(e.id),kanji:e.kanji,jlpt:c,answerId:d.id,answerText:{ru:s,en:a},text:{ru:`Что значит кандзи ${e.kanji} из ${l}?`,en:`What does the ${l} kanji ${e.kanji} mean?`},options:u,at:new Date().toISOString()}}function hv(e,t){const n=$a(Ie(e,"ru")),s=$a(Ie(e,"en")),a=String(e.jlpt||"").toUpperCase(),c=[...t.filter(l=>{if(!l?.id||String(l.id)===String(e.id)||l.kanji===e.kanji)return!1;const d=$a(Ie(l,"ru")),u=$a(Ie(l,"en"));return!(!d||!u||d===n||u===s)})].sort((l,d)=>{const u=String(l.jlpt||"").toUpperCase()===a?0:1,m=String(d.jlpt||"").toUpperCase()===a?0:1;return u-m||Ae(`${e.id}:${l.id}`)-Ae(`${e.id}:${d.id}`)});return c.slice(0,Math.min(3,c.length))}function xd(e,t,n){const s=Ie(e,"ru"),a=Ie(e,"en"),o=Ie(t,"ru"),c=Ie(t,"en");return{id:`meaning_${Ae(`${t.id}:${e.id}:${s}:${a}`)}`,cardId:String(e.id),text:{ru:s,en:a},correct:n,delta:n?{trust:.7,discipline:.35,curiosity:.2}:{discipline:-.35,curiosity:.15},reply:n?{ru:`Верно. ${t.kanji}: ${o}.`,en:`Correct. ${t.kanji}: ${c}.`}:{ru:`Не совсем. ${t.kanji}: ${o}.`,en:`Not quite. ${t.kanji}: ${c}.`}}}function $a(e){return String(e||"").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US").replace(/[.,;:!?\s]+/g," ").trim()}function vv(e){le();const t=ja();t?.id&&wv(t.id,e.dataset.option)}function wv(e,t){le();const n=Z(),s=ja();if(!s?.id||s.id!==e)return;const a=s.options?.find(h=>h.id===t);if(!a)return;const c=s.options?.some(h=>h.correct||h.id===s.answerId)?!!(a.correct||a.id===s.answerId):null;r.evaRuntime||(r.evaRuntime=jt()),r.evaRuntime.pendingQuestion=null,n.currentQuestion=null,ye(a.delta||(c===!1?{discipline:-.2}:{warmth:.2}),`eva_question:${s.id}`),s.kind==="kanji_meaning"&&kv(s,a,c);const l={id:s.id,kind:s.kind||"dialogue",cardId:s.cardId||null,kanji:s.kanji||"",option:a.id,correct:c,at:new Date().toISOString()};r.evaRuntime.lastQuestion={...l,at:Date.now()},r.evaRuntime.lastQuestionAt=Date.now(),r.evaRuntime.pendingQuestion=null,r.evaRuntime.questionHistory=[l,...r.evaRuntime.questionHistory||[]].slice(0,40);const d=va({}),u=c===!1?"thinking":"approve",m=an(wa({sprite:u}),u);n.currentLine={id:`question_reply_${s.id}_${a.id}`,category:"question_reply",text:a.reply||bv(s,c),sprite:m,background:d.id,emotion:u,state:"react",at:new Date().toISOString(),reason:"question_answer"},r.evaRuntime.presenceState="react",r.evaRuntime.textRevealSkippedLineId=null,ka(n.currentLine,"question_answer",Ne({lastEvent:{type:"question_answer"}})),n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=m,us(),Sv(s,a,c),On(),j(),I(c===!1?"answer_wrong":c===!0?"answer_correct":"notification_soft"),x()}function ja(){const e=Z(),t=e.currentQuestion?.id?e.currentQuestion:r.evaRuntime?.pendingQuestion;return t?.id?(e.currentQuestion=t,r.evaRuntime||(r.evaRuntime=jt()),r.evaRuntime.pendingQuestion=t,t):null}function bv(e,t){return e.kind==="kanji_meaning"&&e.kanji&&e.answerText?t?{ru:`Верно. ${e.kanji}: ${e.answerText.ru||f(e.answerText)}.`,en:`Correct. ${e.kanji}: ${e.answerText.en||f(e.answerText)}.`}:{ru:`Не совсем. ${e.kanji}: ${e.answerText.ru||f(e.answerText)}.`,en:`Not quite. ${e.kanji}: ${e.answerText.en||f(e.answerText)}.`}:{ru:"Принято.",en:"Noted."}}function kv(e,t,n){const s=Uc(),a=yv(e);a&&Ws(a,"eva_room_quiz"),s.answered=Number(s.answered||0)+1,s.correct=Number(s.correct||0)+(n?1:0),s.wrong=Number(s.wrong||0)+(n?0:1),s.streak=n?Number(s.streak||0)+1:0,s.history=[{id:e.id,cardId:e.cardId||null,kanji:e.kanji||"",jlpt:e.jlpt||"",selected:t.id,correct:n,answer:f(e.answerText||{}),at:new Date().toISOString()},...s.history||[]].slice(0,40);const o=Jt();o.reviews=Number(o.reviews||0)+1,n?(r.progress.totalCorrect=Number(r.progress.totalCorrect||0)+1,a&&$v(a),a&&!s.rewarded[String(a.id)]&&(s.rewarded[String(a.id)]=new Date().toISOString(),O(2,s.streak>0&&s.streak%3===0?1:0,`eva_room_quiz:${a.id}`))):(r.progress.totalWrong=Number(r.progress.totalWrong||0)+1,o.mistakes=Number(o.mistakes||0)+1,a&&jv(a)),o.minutes=pi(Number(o.reviews||0)*.75+Number(o.learned||0)*1.25,1),r.progress.daily[re()]=o,he(),Qo(),q()}function yv(e){const t=String(e?.cardId||""),n=String(e?.kanji||""),s=String(e?.jlpt||"").toUpperCase();return(t?ne(t):null)||qc().find(a=>{if(!a)return!1;const o=t&&String(a.id)===t,c=n&&a.kanji===n,l=!s||String(a.jlpt||"").toUpperCase()===s;return o||c&&l})||(n?r.cards.find(a=>a.kanji===n):null)||null}function $v(e){const t=String(e?.jlpt||"").toUpperCase(),n=Vi().find(s=>s.level===t);n&&n.markStudied(e.kanji,e.id)}function jv(e){const t=String(e?.jlpt||"").toUpperCase(),n=Vi().find(s=>s.level===t);n&&n.markDifficult(e.kanji,e.id)}function Sv(e,t,n){if(!r.evaRuntime)return;const s={type:"user_answered_eva_question",payload:{questionId:e.id,answerId:t.id,cardId:e.cardId||null,kanji:e.kanji||"",correct:n},at:Date.now()};r.evaRuntime.lastEvent=s,r.evaRuntime.eventHistory=[s,...r.evaRuntime.eventHistory||[]].slice(0,80),r.evaRuntime.recentEvents=[s,...r.evaRuntime.recentEvents||[]].slice(0,80),wd(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}function Nv(){le(),fa()&&er("render");const e=Ld();let t=Z().currentLine;if(fa()&&!t?.text&&r.evaAutonomyLines.length){const a=lo("render_fallback")||r.evaAutonomyLines[0],o=va(a),c=Ne({lastEvent:{type:"render_fallback"}}),l=Bt(c),d=co(a),u=uo(a),m=a.emotion||ya(c,l,"render_fallback"),h=an(wa(a),m);t={id:a.id,category:a.category||"mood",text:a.text,sprite:h,background:o.id,decoration:d,effect:u,emotion:m,state:a.state||"observe",at:new Date().toISOString()},Z().currentLine=t,Z().currentDecoration=d,Z().currentEffect=u,Z().mood=l,Z().emotion=m,Z().lastSpokeAt=t.at,Z().lastRoomId=o.id,Z().lastSprite=h,r.evaRuntime.presenceState=t.state,r.evaRuntime.textRevealSkippedLineId=null,ka(a,"render_fallback",c),po(h,o.file),us(),j()}if(fa()&&t?.text){const a=ds(t.background)||Ft(),o=an(t.sprite||"relationship",t.emotion||Z().emotion);return{isAutonomy:!0,line:t,bg:a,spriteId:o,sprite:ps(o),decoration:t.decoration||Z().currentDecoration,effect:t.effect||Z().currentEffect,mood:Z().mood||At().mood,emotion:t.emotion||Z().emotion||"calm",node:{id:"eva_autonomy_line",background:a.id,sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[]}}}const n=ds(e.background)||Ft(),s=an(e.sprite,Z().emotion);return{isAutonomy:!1,line:null,bg:n,spriteId:s,sprite:ps(s),decoration:Z().currentDecoration,effect:Z().currentEffect,mood:At().mood,emotion:Z().emotion||"calm",node:e}}function Ad(e="adaptive"){le(),Zs();const t=At(),n=new Set(r.progress.evaRoomDialogueProgress.lineHistory||[]),s=ba().filter(d=>{const u=Array.isArray(d.tags)?d.tags:[];return!(e==="adaptive"||d.category===e||u.includes(e))||!Cd(d,t)?!1:!n.has(d.id)}),a=ba().filter(d=>e==="adaptive"||d.category===e||(d.tags||[]).includes(e)),o=s.length?s:a.length?a:ba(),c=Oe(o)||{id:"fallback",category:"adaptive",text:{ru:"Я рядом. Давай сделаем хотя бы один честный шаг.",en:"I'm here. Let's make one honest step."},sprite:"relationship",background:Ft().id},l=r.progress.evaRoomDialogueProgress.lineHistory||[];return r.progress.evaRoomDialogueProgress.lineHistory=[c.id,...l.filter(d=>d!==c.id)].slice(0,24),{id:c.id,category:c.category||e,text:c.text||{ru:String(c.ru||""),en:String(c.en||c.ru||"")},sprite:c.sprite||"relationship",background:c.background||Ft().id,relationshipDelta:c.relationshipDelta||{}}}function Cd(e,t){return[["minWarmth",t.warmth,(s,a)=>s>=a],["maxWarmth",t.warmth,(s,a)=>s<=a],["minTrust",t.trust,(s,a)=>s>=a],["maxTrust",t.trust,(s,a)=>s<=a],["minDiscipline",t.discipline,(s,a)=>s>=a],["maxDiscipline",t.discipline,(s,a)=>s<=a],["minCuriosity",t.curiosity,(s,a)=>s>=a],["maxCuriosity",t.curiosity,(s,a)=>s<=a]].every(([s,a,o])=>typeof e[s]>"u"||o(a,Number(e[s])))}function Ld(){le();const e=av(r.progress.evaRoomDialogueProgress.currentNode);return r.progress.evaRoomDialogueProgress.visited[e.id]=new Date().toISOString(),e}function ps(e){return r.evaSprites?.[e]||r.evaSprites?.default||"assets/mascots/eva_normal.webp"}function po(e,t=""){[ps(e),t].filter(Boolean).forEach(n=>{try{const s=new Image;s.src=n,s.decode&&s.decode().catch(()=>null)}catch(s){console.warn("Eva visual preload skipped.",s)}})}function xv(e){const n=Ld().choices?.[Number(e.dataset.index||0)];if(!n)return;le();const s=r.progress.evaRelationship;s.conversationCount=Number(s.conversationCount||0)+1,s.totalDialogueChoices=Number(s.totalDialogueChoices||0)+1,s.lastInteractionAt=new Date().toISOString(),s.lastInteractionDate=re(),Av(n),ye(n.relationshipDelta||{warmth:.4,curiosity:.2},"dialogue_choice");const a=Number(n.rewardMoonFragments||0),o=n.rewardOnceKey;if(a>0&&o&&!r.progress.evaRoomDialogueProgress.rewardsClaimed[o]&&(r.progress.evaRoomDialogueProgress.rewardsClaimed[o]=new Date().toISOString(),O(0,a,`eva_room:${o}`),F(rn().reward)),n.randomLine){const c=Ad(n.randomLine);ye(c.relationshipDelta||{},`eva_line:${c.id}`,{silent:!0}),r.progress.evaRoomDialogueProgress.generatedLine=c,r.progress.evaRoomDialogueProgress.currentNode="generated_line"}else r.progress.evaRoomDialogueProgress.generatedLine=null,r.progress.evaRoomDialogueProgress.currentNode=n.next||"intro";if(n.openShop&&(r.evaRoomShopOpen=!0),j(),n.route){Be(n.route);return}I(n.openShop?"menu_open":"page_turn"),x()}function Av(e={}){if(!r.evaRuntime)return;r.evaRuntime.memory=Dn(Kt(),r.evaRuntime.memory||{});const t=r.evaRuntime.memory,n=!!(e.randomLine&&!e.route),s=["learn","review"].includes(e.route);n&&(t.timesUserChoseTalkOverStudy=Number(t.timesUserChoseTalkOverStudy||0)+1),s&&(t.timesUserChoseTalkOverStudy=Math.max(0,Number(t.timesUserChoseTalkOverStudy||0)-1)),t.lastInteractionDate=re(),t.lastRoute=r.route}function Cv(){le(),r.progress.evaRoomDialogueProgress.currentNode="intro",r.progress.evaRoomDialogueProgress.generatedLine=null,r.evaRuntime&&(r.evaRuntime.presenceState="wait_choice",r.evaRuntime.textRevealSkippedLineId=null),j(),I("page_turn"),x()}function Lv(e){Sa(e)}function Tv(e){Na(e)}function Iv(e){const t=pe(e)||En(e)||Kn(e);t&&Sa(t.id)}function Rv(e){const t=pe(e)||En(e)||Kn(e);t&&Na(t.id)}function Ct(e){r.customization||ea();const t=pe(e)||En(e);return!!(t?.defaultOwned||t?.price===0||r.customization?.owned?.includes(t?.id||e))}function go(e){return e?e.type==="background"?"background":e.type==="outfit"?"outfit":e.type==="theme"?"theme":e.type==="effect"?"effect":e.type==="decoration"?"decoration":e.type:null}function _v(e){const t=go(e);return!!(t&&r.customization?.selected?.[t]===e.id)}function Td(e){return!e||!mo(e)?"locked":_v(e)?"selected":Ct(e.id)?"owned":"available"}function Mv(e={}){const t=[r.customization?.selected?.effect,e.effect,r.evaRuntime?.currentEffect,r.evaRuntime?.currentLine?.effect,r.progress?.evaAutonomy?.currentEffect,Z().currentEffect];for(const n of t){const s=Et(n);if(!s||s==="none")continue;const a=pe(s);if(a?.type==="effect"&&Ct(a.id))return a.id}return null}function Id(e=null){const t=Et(e||r.customization?.selected?.effect),n=pe(t);return!n||n.type!=="effect"||r.customization?.selected?.effect!==n.id?!1:(r.customization.selected.effect=null,r.progress?.evaAutonomy&&(r.progress.evaAutonomy.currentEffect=null),r.evaRuntime?.currentEffect===n.id&&(r.evaRuntime.currentEffect="none"),qs(),ss(),j(),Wt(),I("menu_close"),F(p()==="ru"?"Эффект убран.":"Effect removed."),x(),!0)}function Pv(e=null){const t=Et(e||r.customization?.selected?.effect||r.customization?.selected?.decoration||r.customization?.selected?.frame||r.customization?.selected?.outfit||r.customization?.selected?.background||r.customization?.selected?.theme),n=pe(t);if(!n)return!1;if(n.type==="effect")return Id(n.id);r.customization||ea();const s=go(n);if(!s)return!1;const a=Pn().selected;return s==="background"?r.customization.selected.background=a.background:s==="outfit"?r.customization.selected.outfit=a.outfit:s==="theme"?r.customization.selected.theme=a.theme:s==="decoration"&&(r.customization.selected.decoration=a.decoration,r.customization.selected.frame=a.frame),qs(),ss(),j(),Wt(),I("menu_close"),F(p()==="ru"?"Выбор сброшен.":"Selection cleared."),x(),!0}function Ev(e){if(!e?.unlockCondition||mo(e))return"";const t=e.unlockCondition,n=p()==="ru";if(t.type==="achievement"){const s=qn().find(o=>o.id===t.id),a=s?qo(s):t.id;return n?`Открывается за достижение: ${a}`:`Unlocks after achievement: ${a}`}return t.type==="level"?n?`Открывается на уровне ${t.value}`:`Unlocks at level ${t.value}`:t.type==="streak"?n?`Открывается за серию ${t.value} дн.`:`Unlocks at a ${t.value}-day streak`:""}function mo(e){if(!e?.unlockCondition)return!0;const t=e.unlockCondition;return t.type==="level"?r.progress.level>=Number(t.value||0):t.type==="streak"?r.progress.streak.current>=Number(t.value||0):t.type==="achievement"?!!r.progress.achievements?.[t.id]?.unlockedAt:!0}function Sa(e){const t=pe(e);if(t){if(!mo(t)){I("purchase_failed"),F(cs().locked);return}if(Ct(t.id)){Na(t.id);return}if(r.progress.moonFragments<t.price){I("purchase_failed"),F(cs().notEnough);return}r.progress.moonFragments-=t.price,r.customization.owned=[...new Set([...r.customization.owned||[],t.id])],r.customization.seen=[...new Set([...r.customization.seen||[],t.id])],r.progress.transactions.unshift({at:new Date().toISOString(),reason:`customization:${t.type}:${t.id}`,label:dt(t),xp:0,coins:-t.price,balance:r.progress.moonFragments}),r.progress.transactions=r.progress.transactions.slice(0,80),qs(),ss(),q(),j(),I("purchase_success"),I("item_unlock"),$e("item_bought",{itemId:t.id,type:t.type,title:dt(t),price:t.price}),F(cs().bought.replace("{item}",dt(t))),x()}}function Na(e){var s;const t=pe(e);if(!t||!Ct(t.id))return;const n=go(t);n&&(r.customization.selected[n]=t.id,n==="decoration"&&(r.customization.selected.frame=t.id),t.type==="outfit"&&t.spriteId&&(r.progress.selectedEvaSprite=t.spriteId,r.progress.evaAutonomy.currentLine=null),t.type==="background"&&(r.progress.selectedEvaRoomBackground=t.id,r.evaRuntime&&(r.evaRuntime.currentBackground=t.id,r.evaRuntime.activeBackground=t.id,(s=r.evaRuntime).memory||(s.memory=Kt()),r.evaRuntime.memory.preferredEvaRoomBackground=t.id),r.progress.evaAutonomy.currentLine=null),qs(),ss(),j(),Wt(),I("notification_soft"),$e("item_equipped",{itemId:t.id,type:t.type,title:dt(t)}),F(cs().selectedToast.replace("{item}",dt(t))),x())}function Kv(){const e=Z();e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",e.nextSpeakAt=0,er("toggle",{force:!0}),j(),I("notification_soft"),F(sn().status),x()}function Dv(){const e=Z();e.frequency="normal",us(),j(),I("notification_soft"),x()}function Ov(){const e=Z();e.roomMode="auto",e.currentLine=null,j(),I("notification_soft"),x()}function Fv(){const e=Z();e.outfitMode="auto",e.currentLine=null,j(),I("notification_soft"),x()}function Rd(){const e=Z();e.enabled=!0,kd(),e.currentQuestion=null,e.currentLine=null,e.nextSpeakAt=0,_d("manual"),j(),I("page_turn"),x()}function _d(e="manual"){const t=bd(e)||lo(e);if(!t)return!1;const n=Ne({lastEvent:{type:e}}),s=Bt(n),a=t.emotion||ya(n,s,e),o=va(t),c=an(wa(t),a),l=co(t),d=uo(t),u=Z(),m=Date.now(),h=Sd(n,t);return u.currentLine={id:t.id,category:t.category||e,text:t.text,sprite:c,background:o.id,decoration:l,effect:d,emotion:a,state:t.state||"speak",at:new Date(m).toISOString(),reason:e},u.currentDecoration=l,u.currentEffect=d,u.mood=s,u.emotion=a,u.lastSpokeAt=u.currentLine.at,u.lastRoomId=o.id,u.lastSprite=c,u.currentQuestion=h,u.recentLineIds=[t.id,...(u.recentLineIds||[]).filter(v=>v!==t.id)].slice(0,32),r.evaRuntime||(r.evaRuntime=jt()),Object.assign(r.evaRuntime,{mood:s,emotion:a,presenceState:t.state||"speak",currentPhrase:u.currentLine,pendingQuestion:h,currentSkin:c,currentBackground:o.id,currentDecoration:l,currentEffect:d,activeSkin:c,activeBackground:o.id,lastPhraseAt:m,lastEmotionChangeAt:m,lastQuestionAt:h?m:Number(r.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:m,textRevealSkippedLineId:null}),ka(t,e,n),po(c,o.file),us(),On(),Wt(),!0}function Bv(){Z().currentLine=null,j(),I("menu_close"),x()}function T(e,t,n,s){return`
      <article class="metric">
        <span>${i(e)}</span>
        <strong>${i(t)}</strong>
        <div class="meter"><i style="width:${ce(s,0,100)}%"></i></div>
        <p class="label">${i(n)}</p>
      </article>
    `}function Gv(e){const t=al(e.id),n=t.filter(d=>M(d.id).state!=="New").length,s=t.filter(d=>M(d.id).state==="Mastered").length,a=!Te(e),o=ng(e),c=a?"鎖":t[0]?.kanji||"文",l=R(s,t.length);return`
      <button class="lesson-tile ${a?"is-locked":""} ${ul(o)}" type="button" id="textbook-lesson-${g(e.id)}" data-action="start-lesson" data-id="${g(e.id)}">
        <span class="lesson-glyph">${i(c)}</span>
        <span>
          <span class="pill">${i(e.jlpt)}</span>
          ${LS(o)}
          <h3>${i(Pr(e))}</h3>
          <p>${i(v0(e))}</p>
          <span class="lesson-meta">
            <span class="pill">${n}/${t.length}</span>
            <span class="pill mastered">${s} ${i(A("mastered"))}</span>
            ${a?`<span class="pill danger-pill">${i(A("unlockedAt"))} ${Ya(e)}</span>`:""}
          </span>
          <span class="meter"><i style="width:${l}%"></i></span>
        </span>
      </button>
    `}function zv(e){const t=ng(e),n=e.id===r.activeLessonId,s=!Te(e);return`
      <button class="btn ${n?"primary":"ghost"} ${s?"is-disabled":""} ${ul(t)}" type="button" data-action="select-lesson" data-id="${g(e.id)}" title="${g(pl(t))}">
        <span>${i(e.jlpt)}</span>
        ${CS(t)}
      </button>
    `}function fo(){const e=String(r.activeLearnJlpt||"all").toUpperCase();return r.lessons.filter(t=>e==="ALL"||String(t.jlpt||"").toUpperCase()===e)}function Jv(){const e=fo();return e.find(t=>t.id===r.activeLessonId)||e.find(t=>Te(t))||e[0]||r.lessons.find(t=>t.id===r.activeLessonId)||r.lessons.find(t=>Te(t))||r.lessons[0]||null}function ho(){return Q(Jv()?.jlpt)||Ht()}function Md(e){if(!e.length)return r.activeLessonId=null,null;const t=e.find(a=>a.id===r.activeLessonId);if(t&&Te(t))return t;const s=e.find(a=>Te(a))||e[0];return r.activeLessonId=s?.id||null,s||null}function Uv(e){const t=e.length,n=e.filter(a=>Te(a)).length,s=["all",..._e];return`
      <div class="jlpt-filter-bar" role="tablist" aria-label="${g(p()==="ru"?"Фильтр уровней JLPT":"JLPT level filter")}">
        ${s.map(a=>{const o=String(r.activeLearnJlpt||"all").toLowerCase()===String(a).toLowerCase(),c=a==="all"?p()==="ru"?"Все":"All":a,l=a==="all"?t:r.lessons.filter(d=>d.jlpt===a).length;return`
            <button class="btn jlpt-filter-chip ${o?"primary":"ghost"}" type="button" role="tab" aria-selected="${o?"true":"false"}" data-action="set-learn-jlpt" data-jlpt="${g(a)}">
              <span>${i(c)}</span>
              <small>${l}</small>
            </button>
          `}).join("")}
      </div>
      <div class="learn-level-strip">
        <span class="pill">${i(p()==="ru"?"Уроки":"Lessons")}: ${t}</span>
        <span class="pill">${i(p()==="ru"?"Открыто":"Unlocked")}: ${n}</span>
        <button class="btn ghost learn-textbook-link" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Учебники Flash Kanji":"Flash Kanji textbooks")}</button>
      </div>
    `}function qv(e){if(!e)return"";const t=e.textbook||e;return`
      <article class="learn-level-panel">
        <div class="learn-level-cover">
          <img src="${g(t.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <span class="pill">${i(t.jlpt||"")}</span>
        </div>
        <div class="learn-level-copy">
          <h3>${i(f(t.displayTitle||t.title||{}))}</h3>
          <p>${i(f(t.description||{}))}</p>
          <div class="tag-row">
            <span class="pill">${i(t.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
            <span class="pill">${i(t.kanjiCount||0)} ${i(A("cardsToday"))}</span>
            <span class="pill">${i(f(t.recommendedCycle||{}))}</span>
          </div>
          <div class="actions">
            <a class="btn primary" href="${g(t.pdfUrl||t.pdfFile||"")}" download="${g((t.pdfFile||t.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(p()==="ru"?"Скачать PDF":"Download PDF")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
          </div>
        </div>
      </article>
    `}function Hv(e){const t=Mt(e?.jlpt);return`
      <article class="lesson-locked-panel">
        <span class="pill danger-pill">${i(p()==="ru"?"Закрытый уровень":"Level locked")}</span>
        <h2>${i(e?Pr(e):"")}</h2>
        <p>${i(p()==="ru"?`Откроется на уровне ${Ya(e)}.`:`Unlocks at level ${Ya(e)}.`)}</p>
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
    `}function Wv(){return r.activeLearnView===Tn?nw():r.activeLearnView===Vt?tw():Kd()}function Xv(){const e=Gc();if(e.kind==="review"){Be("review");return}if(r.route==="home"){ei(ho());return}Pd(e.nodeId)}function Pd(e){const t=os(e);if(!t){Fn();return}if(Bc(t)==="locked"){F(p()==="ru"?"Сначала закончи предыдущий шаг.":"Finish the previous step first.");return}if(t.id===Zn){Be("review");return}if(t.id===es){dr("final-test");return}if(t.type==="textbook"){dr(t.id);return}Fn(Vt,t.id)}function Ed(e){const t=String(e||"");return t&&(ne(t)||r.cards.find(n=>String(n.id)===t))||null}function Qv(){const e=oe();return[{id:"intro-1",kind:"info",eyebrow:e.intro,title:e.introTitle,text:e.introBody,note:e.finishHint},{id:"intro-2",kind:"info",eyebrow:e.route,title:e.nextLesson,text:e.introBridge,note:e.mapHint},{id:"intro-3",kind:"quiz",eyebrow:e.ready,title:e.introQuestion,text:e.introQuestionHint,answer:"review",options:[{value:"review",label:{ru:"В повторение",en:"Into review"}},{value:"memory",label:{ru:"В архив навсегда",en:"Into permanent archive"}},{value:"skip",label:{ru:"Никуда, пока не забудешь",en:"Nowhere, until you forget"}}]}]}function tr(e){const t=pt(e);if(!t)return null;const n=on(t);if(!n.length)return null;const s=Array.isArray(t.sentences)?t.sentences:[],a=n.map((o,c)=>{const l=gt(o)[0]||null,d=s[c%Math.max(s.length,1)]||s[0]||null,u=l?{jp:l.word||o.kanji,hiragana:l.reading||o.hiragana||"",translation:l.translation||(d?{ru:d.ru||"",en:d.en||""}:"")}:d?{jp:d.jp||o.kanji,hiragana:H(d.reading||d.hiragana||o.hiragana||""),translation:{ru:d.ru||"",en:d.en||""}}:{jp:o.kanji,hiragana:o.hiragana||"",translation:{ru:L(o),en:L(o)}};return{cardId:o.id,sentence:u}});return{id:t.id,title:t.title,summary:t.goal||t.theme||t.title,objectives:[t.goal,t.theme].filter(Boolean),kanjiIds:n.map(o=>o.id),kanjiBlocks:a,exercises:ir(t),source:"learning_path"}}function Vv(e){if(e===ke)return Qv();const t=r.learningPathLessonPayloads[e]||tr(e);if(!t)return[];const n=oe(),s=[],a=(t.objectives||[]).map(f).filter(Boolean).slice(0,3).join(" • ");return s.push({id:`${e}-overview`,kind:"info",eyebrow:"N5",title:f(t.title),text:f(t.summary),note:a||n.finishHint}),(t.kanjiBlocks||[]).forEach((o,c)=>{const l=Ed(o.cardId);if(!l)return;const d=o.sentence||null;s.push({id:`${e}-kanji-${c+1}`,kind:"kanji",eyebrow:l.jlpt||"N5",title:`${l.kanji} · ${L(l)}`,text:Cw(l,{word:d?.jp||l.kanji,reading:d?.hiragana||l.hiragana||""}),note:d?.translation?f(d.translation):"",cardId:l.id,card:l,sentence:d})}),(t.exercises||[]).forEach(o=>{const c=(o.options||[]).map(l=>({value:String(l.value??l.id??l.label??l),label:f(l.label||l.text||l)}));s.push({id:String(o.id||`${e}-quiz-${s.length}`),kind:"quiz",eyebrow:"N5",title:f(o.prompt),text:f(o.promptHint||{ru:"",en:""}),answer:String(o.answer??""),options:c})}),s}function Yv(e,t=null){const n=Vv(e);if(!t||t.mode!=="mistakes"||!t.reviewStepIds?.length)return n;const s=new Set(t.reviewStepIds),a=n.filter(o=>o.kind==="quiz"&&s.has(o.id));return a.length?a:n.filter(o=>o.kind==="quiz")}function Zv(e,t=Vt,n=[]){const s=tn(),a=s.activeSession,o=n.map(String).filter(Boolean);return a?.nodeId===e&&a.mode===t&&JSON.stringify(a.reviewStepIds||[])===JSON.stringify(o)?a:(s.activeSession=Pi({nodeId:e,mode:t,stepIndex:0,answers:{},mistakes:[],reviewStepIds:o,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),s.lastUpdatedAt=s.activeSession.updatedAt,j(),s.activeSession)}function nr(e){const t=Wi(),n=t?.nodeId===e?t:Zv(e),s=Yv(e,n),a=s.filter(l=>l.kind==="quiz"),o=Object.keys(n.answers||{}).length,c=Math.max(0,Number(n.stepIndex||0));return{session:n,steps:s,quizSteps:a,answeredCount:o,stepIndex:c,currentStep:s[c]||null,isResult:c>=s.length&&s.length>0}}function ew(e,t,n){var l;const s=tn(),a=new Date().toISOString(),o=n.filter(d=>d.kind==="quiz"),c=Array.isArray(t.mistakes)&&t.mistakes.length>0;if((l=s.completedNodes)[e]||(l[e]=a),s.resultHistory[e]={completedAt:a,score:Number(t.score||0),totalQuestions:o.length,mistakes:(t.mistakes||[]).slice(0,24)},s.activeSession=null,e===ke&&O(12,0,"learning_path:intro"),/^n5-lesson-\d+$/i.test(e)){const d=pt(e),u=r.learningPathLessonPayloads[e]||tr(e),m=[...new Set([...u?.kanjiIds||[],...(u?.kanjiBlocks||[]).map(v=>v.cardId),...on(d).map(v=>v.id)].map(String).filter(Boolean))],h=V();if(m.forEach(v=>{const w=Ed(v);if(!w)return;Ws(w,"learning_path"),as(h,w.kanji);const $=se(M(w.id));$.state==="New"&&(r.progress.cards[w.id]=ue($,c?"hard":"good"))}),d){ae.add(`n5:${d.id}`),h.completedLessons[d.id]=a,h.currentLessonId=Pe().find($=>$.order===d.order+1)?.id||d.id,r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.completedLessons=r.progress.n5Course.completedLessons||{},r.progress.n5Course.completedLessons[d.id]=a,j({immediate:!0}),Gn()>=10&&Object.keys(h.studiedKanji||{}).length>=80&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N5")||r.progress.unlockedJlptLevels.push("N5"),r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"));const v=r.n5Meta?.rewards?.lessonCompleteXp||45,w=r.n5Meta?.rewards?.lessonCompleteMoon||6;O(v,w,`learning_path:${e}`),Xe({title:`${Me().lessonComplete}: ${f(d.title)}`,message:Me().lessonCompleteText,xp:v,coins:w,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),I("lesson_complete"),$e("lesson_complete",{lessonId:e,jlpt:"N5"})}}ca(),he(),q(),j()}function Kd(){r.n5Textbook?.items?.length||Hi();const e=oe(),t=Fc(),n=Gc(),s=os(is()),a=qt();return`
      <section class="page learning-path-page">
        <div class="section-head">
          <div>
            <h1>${i(e.route)}</h1>
            <p>${i(s?f(s.summary)||e.mapHint:e.loading)}</p>
          </div>
          <button class="btn primary" type="button" data-action="home-primary">${i(n.label)}</button>
        </div>

        <article class="learning-path-hero">
          <div>
            <span class="pill">${i(e.lessonTrack)}</span>
            <h2>${i(Oc(is()))}</h2>
            <p>${i(e.mapHint)}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(oe().reviewQueue)} · ${i(Ke())}</span>
            <span class="pill">${i(oe().streak)} · ${i(r.progress.streak.current)}</span>
            <span class="pill">${i(oe().xp)} · ${i(a.current)}</span>
          </div>
        </article>

        <div class="learning-path-timeline">
          ${t.length?t.map((o,c)=>{const l=Bc(o),d=l==="locked",u=f(o.summary)||"",m=o.id===Zn?e.reviewAction:o.id===es?e.openCheckpoint:o.type==="textbook"?e.openTextbook:l==="current"?e.resume:e.continue;return`
              <button class="learning-path-node is-${g(l)} is-${g(o.type||"lesson")}" type="button" data-action="learning-path-node" data-node="${g(o.id)}" ${d?'disabled aria-disabled="true"':""}>
                <span class="learning-path-node-index">${c+1}</span>
                <div class="learning-path-node-copy">
                  <div class="learning-path-node-meta">
                    <span class="pill">${i(o.level||"N5")}</span>
                    <span class="pill">${i(Cf(l))}</span>
                  </div>
                  <h2>${i(f(o.title))}</h2>
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
    `}function tw(){const e=r.activeLearnNodeId||is(),t=os(e),n=oe();if(!t)return Kd();if(t.id!==ke&&t.type==="lesson"&&!r.n5Textbook?.items?.length)return Hi(),`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${i(f(t.title))}</h1>
                <p>${i(n.loading)}</p>
              </div>
              <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
            </div>
          </article>
        </section>
      `;t.type==="lesson"&&yf(e);const s=nr(e),{session:a,steps:o,quizSteps:c,currentStep:l,isResult:d}=s;if(!o.length)return`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${i(f(t.title))}</h1>
                <p>${i(f(t.summary)||n.mapHint)}</p>
              </div>
              <button class="btn ghost" type="button" data-action="learning-path-node" data-node="${g(t.id)}">${i(t.type==="textbook"?n.openTextbook:n.backToMap)}</button>
            </div>
          </article>
        </section>
      `;const u=o.length,m=u?R(Math.min(a.stepIndex,u),u):0,h=a.answers?.[l?.id||""]||null,v=h?.selected||"",w=!!h?.correct,$=c.length?Math.round(Number(a.score||0)/Math.max(c.length,1)*100):100;return d?`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${i(f(t.title))}</h1>
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
                <strong>${i(`${a.score}/${Math.max(c.length,1)}`)}</strong>
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
              <h1>${i(f(t.title))}</h1>
              <p>${i(f(t.summary)||n.mapHint)}</p>
            </div>
            <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
          </div>
          <div class="lesson-player-progress">
            <span>${i(n.step)} ${i(Math.min(a.stepIndex+1,u))}/${i(u)}</span>
            <strong>${i(l.eyebrow||t.level||"N5")}</strong>
            <div class="meter"><i style="width:${m}%"></i></div>
          </div>
          <div class="lesson-player-card">
            <span class="pill">${i(l.eyebrow||t.level||"N5")}</span>
            <h2>${i(l.title||"")}</h2>
            ${l.kind==="kanji"&&l.card?`
              <div class="lesson-player-kanji">
                <div class="lesson-player-glyph">${i(l.card.kanji)}</div>
                <div class="lesson-player-kanji-copy">
                  <p>${i(l.text||"")}</p>
                  <div class="tag-row">
                    <span class="pill">${i(L(l.card))}</span>
                    ${l.card.hiragana?`<span class="pill">${i(H(l.card.hiragana))}</span>`:""}
                    ${l.card.onyomi?`<span class="pill">${i(H(l.card.onyomi))}</span>`:""}
                  </div>
                  ${l.sentence?`
                    <div class="lesson-player-sentence">
                      <strong>${i(l.sentence.jp||"")}</strong>
                      <p>${i(l.sentence.hiragana||"")}</p>
                      <small>${i(f(l.sentence.translation||{}))}</small>
                    </div>
                  `:""}
                </div>
              </div>
            `:l.kind==="quiz"?`
              <p>${i(l.text||"")}</p>
              <div class="lesson-choice-grid">
                ${(l.options||[]).map(y=>{const S=v===y.value,b=y.value===l.answer;return`<button class="btn ${S?w?"success":"danger":h&&b?"ghost is-correct":"ghost"}" type="button" data-action="learning-path-choice" data-node="${g(e)}" data-step="${g(l.id)}" data-value="${g(y.value)}">${i(y.label)}</button>`}).join("")}
              </div>
              ${h?`<p class="lesson-player-feedback ${w?"is-good":"is-warning"}">${i(w?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Правильно":"Correct"}: ${(l.options||[]).find(y=>y.value===l.answer)?.label||l.answer}`)}</p>`:""}
            `:`
              <p>${i(l.text||"")}</p>
              ${l.note?`<small>${i(l.note)}</small>`:""}
            `}
          </div>
          <div class="lesson-player-actions">
            <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
            <button class="btn primary" type="button" data-action="learning-path-step-next" data-node="${g(e)}" ${l.kind==="quiz"&&!h?'disabled aria-disabled="true"':""}>${i(a.stepIndex+1>=u?n.finish:n.continue)}</button>
          </div>
        </article>
      </section>
    `}function nw(){const e=fo(),t=Md(e),n=!!(t&&Te(t)),s=n?nS(t.id):[];(!r.activeCardId||!s.some(c=>c.id===r.activeCardId))&&(r.activeCardId=s[0]?.id||null);const a=n&&r.activeCardId?ne(r.activeCardId):null,o=r.activeLearnJlpt!=="all"?Mt(r.activeLearnJlpt):null;return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(A("learn"))}</h1>
            <p>${i(t?Pr(t):"")}</p>
          </div>
          ${o?`<button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Учебники":"Textbooks")}</button>`:""}
        </div>
        ${Uv(e)}
        ${o?qv(o):""}
        <div class="actions lesson-tabs">
          ${e.map(zv).join("")}
        </div>
        <div class="study-layout">
          ${n?a?ap(a):M$(t):Hv(t)}
          ${n?Oo(a,s.length):Oo(null,0)}
        </div>
      </section>
    `}function sw(){const e=jn(r.activeJlptLesson)||jn(ne(r.activeCardId)?.jlpt)||r.jlptLessons[0];if(!e)return`
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">JLPT</span>
            <h2>${i(p()==="ru"?"JLPT-уроки ещё не загружены":"JLPT lessons are not loaded yet")}</h2>
            <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(A("learn"))}</button>
          </article>
        </section>
      `;r.activeJlptLesson=e.jlpt;const t=Mt(e.jlpt);if(!it(e.jlpt))return Dd(t||e);const n=ag(e.jlpt),s=n.filter(c=>M(c.id).state==="Mastered").length,a=n.filter(c=>M(c.id).state!=="New").length,o={...hl(),...fl()};return`
      <section class="page jlpt-lesson-page">
        <div class="section-head">
          <div>
            <h1>${i(f(e.title))}</h1>
            <p>${i(f(e.summary))}</p>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${g(e.jlpt)}">${i(p()==="ru"?"Страница учебника":"Textbook page")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
            ${Is("lesson",{level:e.jlpt,lessonId:e.id})}
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks" data-subroute="${g(e.jlpt)}">${i(o.back)}</button>
          </div>
        </div>
        <div class="actions jlpt-switcher">
          ${r.jlptLessons.map(c=>{const l=it(c.jlpt),d=c.jlpt===e.jlpt,u=g(Ut(c.jlpt));return l?`<button class="btn ${d?"primary":"ghost"}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(c.jlpt)}">${i(c.jlpt)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${u}">🔒 ${i(c.jlpt)}</button>`}).join("")}
        </div>
        ${t?`
          <article class="jlpt-textbook-hero">
            <img class="jlpt-textbook-cover" src="${g(t.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
            <div class="jlpt-textbook-body">
              <span class="pill">${i(t.jlpt)}</span>
              <h2>${i(f(t.displayTitle||t.title||{}))}</h2>
              <p>${i(f(t.description||{}))}</p>
              <div class="tag-row">
                <span class="pill">${i(t.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                <span class="pill">${i(t.kanjiCount||0)} ${i(A("cardsToday"))}</span>
                <span class="pill">${i(f(t.goal||{}))}</span>
                <span class="pill">${i(f(t.recommendedCycle||{}))}</span>
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
        ${Hu(e)}
        <div class="jlpt-section-grid">
          ${e.goals.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.goals)}</h3>
              <ul>${e.goals.map(c=>`<li>${i(f(c))}</li>`).join("")}</ul>
            </article>
          `:""}
          ${e.sections.map(c=>`
            <article class="jlpt-section-card">
              <h3>${i(f(c.title))}</h3>
              <p>${i(f(c.body))}</p>
              ${Array.isArray(c.points)&&c.points.length?`<ul>${c.points.map(l=>`<li>${i(f(l))}</li>`).join("")}</ul>`:""}
            </article>
          `).join("")}
          ${e.practice.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.practice)}</h3>
              <ul>${e.practice.map(c=>`<li>${i(f(c))}</li>`).join("")}</ul>
            </article>
          `:""}
          ${e.checkpoint.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.checkpoint)}</h3>
              <ul>${e.checkpoint.map(c=>`<li>${i(f(c))}</li>`).join("")}</ul>
            </article>
          `:""}
        </div>
      </section>
    `}function rw(){const e=r.jlptCatalog?.items||[],t=String(r.activeTextbookLevel||"").toUpperCase(),n=t?Mt(t):null;if(n)return r.activeTextbookLevel=n.jlpt,r.activeJlptLesson=n.jlpt,aw(n);const s=p()==="ru"?{title:"Учебники Flash Kanji",description:"Функциональные страницы учебников JLPT N5–N1 с переходом к урокам, повторению и материалам внутри уровня.",open:"Открыть страницу",pdf:"Скачать PDF",study:"К урокам"}:{title:"Flash Kanji Textbooks",description:"Functional JLPT N5-N1 textbook pages with lesson links, review entry points, and level materials.",open:"Open page",pdf:"Download PDF",study:"Go to lessons"};return`
      <section class="page textbooks-page">
        <div class="section-head">
          <div>
            <h1>${i(s.title)}</h1>
            <p>${i(s.description)}</p>
          </div>
          <div class="actions">
            ${Is("textbooks")}
            <button class="btn primary" type="button" data-action="open-jlpt-lesson-start" data-jlpt="${g(Ht())}">${i(s.study)}</button>
          </div>
        </div>
        <div class="textbook-grid" id="textbook-grid">
          ${e.map(a=>`
            <article class="textbook-card ${it(a.jlpt)?"is-unlocked":"is-locked"}" id="textbook-${g(a.jlpt)}">
              <div class="textbook-cover-wrap">
                <img class="textbook-cover" src="${g(a.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
                <span class="pill textbook-level">${i(a.jlpt)}</span>
              </div>
              <div class="textbook-body">
                <h2>${i(f(a.displayTitle||a.title||{}))}</h2>
                <p>${i(f(a.description||{}))}</p>
                ${it(a.jlpt)?"":`<p class="textbook-lock-note">${i(Ut(a.jlpt))}</p>`}
                <div class="textbook-meta">
                  <span class="pill">${i(a.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                  <span class="pill">${i(a.kanjiCount||0)} ${i(A("cardsToday"))}</span>
                  <span class="pill">${i(f(a.goal||{}))}</span>
                </div>
                <div class="textbook-actions">
                  <a class="btn primary" href="#textbooks/${g(a.jlpt)}">${i(s.open)}</a>
                  ${it(a.jlpt)?`<a class="btn ghost" href="${g(a.pdfUrl||a.pdfFile||"")}" download="${g((a.pdfFile||a.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(s.pdf)}</a>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g(Ut(a.jlpt))}">${i(p()==="ru"?"PDF закрыт":"PDF locked")}</button>`}
                  ${it(a.jlpt)?`<button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(a.jlpt)}">${i(s.study)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g(Ut(a.jlpt))}">${i(p()==="ru"?"Закрыто":"Locked")}</button>`}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Dd(e){const t=String(e?.jlpt||"").toUpperCase(),n=gl(t),s=n.map(o=>`<a class="pill" href="#textbooks/${g(o)}">${i(o)}</a>`).join(""),a=p()==="ru"?{title:"Учебник закрыт",back:"Все учебники",home:"Домой",hint:"Сначала заверши предыдущие уровни, чтобы открыть этот учебник."}:{title:"Textbook locked",back:"All textbooks",home:"Home",hint:"Finish the previous levels first to unlock this textbook."};return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(t||"JLPT")}</p>
            <h1>${i(f(e?.displayTitle||e?.title||{ru:a.title,en:a.title}))}</h1>
            <p>${i(Ut(t))}</p>
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
            <h2>${i(f(e?.displayTitle||e?.title||{ru:a.title,en:a.title}))}</h2>
            <p>${i(a.hint)}</p>
            ${s?`<div class="tag-row">${s}</div>`:""}
            <div class="actions">
              <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(a.back)}</button>
              ${n.length?`<a class="btn ghost" href="#textbooks/${g(n[n.length-1])}">${i(n[n.length-1])}</a>`:""}
            </div>
          </div>
        </article>
      </section>
    `}function aw(e){const t=String(e?.jlpt||"").toUpperCase();if(!it(t))return Dd(e);if(String(e?.jlpt||"").toUpperCase()==="N5"&&r.n5Textbook?.items?.length)return ow(e);if(String(e?.jlpt||"").toUpperCase()==="N4"&&r.n4Textbook?.items?.length)return Qw(e);if(String(e?.jlpt||"").toUpperCase()==="N3"&&r.n3Textbook?.items?.length)return Rb(e);if(String(e?.jlpt||"").toUpperCase()==="N2"&&r.n2Textbook?.items?.length)return fk(e);if(String(e?.jlpt||"").toUpperCase()==="N1")return r.n1Textbook?.items?.length?Yk(e):(fm().catch(()=>{}),Vr?Vc(Vr):iw(e,"N1"));r.activeTextbookLevel=e.jlpt,r.activeJlptLesson=e.jlpt;const n=(e.lessonIds||[]).map(v=>r.lessons.find(w=>w.id===v)).filter(Boolean),s=r.lessons.filter(v=>String(v.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()&&!n.includes(v)),a=[...n,...s].slice(0,Math.max(e.lessonCount||n.length,n.length)),o=r.activeTextbookSubroute?a.find(v=>v.id===r.activeTextbookSubroute)||jn(e.jlpt)||r.jlptLessons[0]:jn(e.jlpt)||r.jlptLessons[0];r.activeTextbookSubroute&&o?.id&&ot(t,o.id,"textbook_page");const c=p()==="ru"?{title:"Страница учебника",back:"Все учебники",pdf:"Скачать PDF",lessonPage:"Страница урока",openLesson:"Открыть урок",outline:"Что внутри",practice:"Практика",lessons:"Уроки учебника",previous:"Предыдущие уровни",next:"Следующие уровни"}:{title:"Textbook page",back:"All textbooks",pdf:"Download PDF",lessonPage:"Lesson page",openLesson:"Open lesson",outline:"Inside the textbook",practice:"Practice",lessons:"Textbook lessons",previous:"Previous levels",next:"Next levels"},l=ml(e.jlpt)||e.lessonIds?.[0]||a[0]?.id||"",d=f(e.recommendedCycle||{}),u=f(e.goal||{}),m=(e.previousLevels||[]).map(v=>`<a class="pill" href="#textbooks/${g(v)}">${i(v)}</a>`).join(""),h=(e.nextLevels||[]).map(v=>`<a class="pill" href="#textbooks/${g(v)}">${i(v)}</a>`).join("");return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(e.jlpt)} · ${i(c.title)}</p>
            <h1>${i(f(e.displayTitle||e.title||{}))}</h1>
            <p>${i(f(e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(c.back)}</button>
            <a class="btn primary" href="${g(e.pdfUrl||e.pdfFile||"")}" download="${g((e.pdfFile||e.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(c.pdf)}</a>
            <button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(e.jlpt)}">${i(c.lessonPage)}</button>
            ${Is("textbook",{level:e.jlpt})}
          </div>
        </div>

        <article class="jlpt-textbook-hero">
          <img class="jlpt-textbook-cover" src="${g(e.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <div class="jlpt-textbook-body">
            <span class="pill">${i(e.jlpt)}</span>
            <h2>${i(f(e.displayTitle||e.title||{}))}</h2>
            <p>${i(f(e.description||{}))}</p>
            <div class="tag-row">
              <span class="pill">${i(e.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
              <span class="pill">${i(e.kanjiCount||0)} ${i(A("cardsToday"))}</span>
              <span class="pill">${i(u)}</span>
              <span class="pill">${i(d)}</span>
            </div>
            <div class="textbook-route-links">
              ${m?`<div><strong>${i(c.previous)}</strong><div class="tag-row">${m}</div></div>`:""}
              ${h?`<div><strong>${i(c.next)}</strong><div class="tag-row">${h}</div></div>`:""}
            </div>
          </div>
        </article>

        <div class="metric-grid">
          ${T(e.jlpt,e.lessonCount||0,u,R(e.lessonCount||0,Math.max(1,r.jlptLessons.length)))}
          ${T(p()==="ru"?"Кандзи":"Kanji",e.kanjiCount||0,p()==="ru"?"в учебнике":"in textbook",R(e.kanjiCount||0,Math.max(1,r.cards.length)))}
          ${T(p()==="ru"?"Уроки":"Lessons",a.length,c.practice,R(a.length,Math.max(1,r.lessons.filter(v=>String(v.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()).length)))}
          ${T(p()==="ru"?"Переход":"Jump",r.activeTextbookLevel===e.jlpt?1:0,c.lessonPage,r.activeTextbookLevel===e.jlpt?100:0)}
        </div>

        ${ms(e.jlpt)}

        ${o?`
          <article class="jlpt-lesson-hero">
            <div>
              <span class="pill">${i(e.jlpt)}</span>
              <h2>${i(c.outline)}</h2>
              <p>${i(f(o.summary||{}))}</p>
            </div>
            <div class="mini-stat-row">
              ${T(p()==="ru"?"Грамматика":"Grammar",o.sections?.length||0,c.outline,R(o.sections?.length||0,4))}
              ${T(p()==="ru"?"Практика":"Practice",o.practice?.length||0,c.practice,R(o.practice?.length||0,4))}
            </div>
          </article>
          ${Hu(o)}
          <div class="jlpt-section-grid">
            ${o.goals?.length?`
              <article class="jlpt-section-card">
                <h3>${i(p()==="ru"?"Цели уровня":"Level goals")}</h3>
                <ul>${o.goals.map(v=>`<li>${i(f(v))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${o.sections?.map(v=>`
              <article class="jlpt-section-card">
                <h3>${i(f(v.title))}</h3>
                <p>${i(f(v.body))}</p>
                ${Array.isArray(v.points)&&v.points.length?`<ul>${v.points.map(w=>`<li>${i(f(w))}</li>`).join("")}</ul>`:""}
              </article>
            `).join("")}
            ${o.practice?.length?`
              <article class="jlpt-section-card">
                <h3>${i(c.practice)}</h3>
                <ul>${o.practice.map(v=>`<li>${i(f(v))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${o.checkpoint?.length?`
              <article class="jlpt-section-card">
                <h3>${i(p()==="ru"?"Чекпоинт":"Checkpoint")}</h3>
                <ul>${o.checkpoint.map(v=>`<li>${i(f(v))}</li>`).join("")}</ul>
              </article>
            `:""}
          </div>
        `:""}

        <div class="section-head">
          <div>
            <h2>${i(c.lessons)}</h2>
            <p>${i(p()==="ru"?"Карточки, входящие в этот учебник, и быстрые переходы в урок.":"Cards included in this textbook, with quick jumps into lessons.")}</p>
          </div>
          ${l?`<button class="btn primary" type="button" data-action="open-jlpt-lesson-start" data-jlpt="${g(e.jlpt)}">${i(c.openLesson)}</button>`:""}
        </div>
        <div class="lesson-grid">
          ${a.map(v=>Gv(v)).join("")||`<article class="empty-state"><h3>${i(p()==="ru"?"Уроки скоро появятся":"Lessons will appear soon")}</h3></article>`}
        </div>
      </section>
    `}function iw(e,t){const n=p()==="ru"?{eyebrow:`${t} · Flash Kanji`,title:`Готовлю интерактивный учебник ${t}`,text:"Подгружаю главы, карточки, грамматику и финальный тест. Сейчас откроется рабочая оболочка, не старый экран.",back:"Все учебники"}:{eyebrow:`${t} · Flash Kanji`,title:`Preparing the interactive ${t} textbook`,text:"Loading lessons, cards, grammar, and the final test. The full app shell will open in a moment.",back:"All textbooks"};return`
      <section class="page textbooks-page n5-course-page textbook-data-loading-page" aria-busy="true">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">${i(n.eyebrow)}</p>
            <h1>${i(n.title)}</h1>
            <p>${i(n.text)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.back)}</button>
            ${e?.pdfUrl||e?.pdfFile?`<a class="btn ghost" href="${g(e.pdfUrl||e.pdfFile)}" target="_blank" rel="noopener">${i(p()==="ru"?"PDF-учебник":"PDF textbook")}</a>`:""}
          </div>
        </div>
        <article class="n5-hero n1-hero">
          <div class="n5-hero-copy">
            <span class="pill">${i(t)} · ${i(p()==="ru"?"загрузка данных":"loading data")}</span>
            <h2>${i(f(e?.displayTitle||e?.title||{ru:t,en:t}))}</h2>
            <p>${i(f(e?.description||{}))}</p>
            <div class="achievement-progress" aria-hidden="true"><i style="width:60%"></i></div>
          </div>
          ${wn("eva","calm","loading","n5-hero-mascot")}
        </article>
      </section>
    `}function ow(e){r.activeTextbookLevel="N5",r.activeJlptLesson="N5",rr();const t=String(r.activeTextbookSubroute||"");if(t==="final-test")return kw();if(t==="review")return ww();const n=pt(t);return n?(V().currentLessonId=n.id,ot("N5",n.id,"n5_lesson_page"),Nt("N5",n,"n5_lesson_page"),hw(e,n)):lw(e)}function lw(e){const t=Lw(),n=Me(),s=Pe(),a=xw(),o=r.n5Meta||{},c=f(o.principle||{});return`
      <section class="page textbooks-page n5-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N5 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(f(o.description||e.description||{}))}</p>
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
            <p>${i(c)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#textbooks/N5/${g(a?.id||"n5-lesson-1")}" data-action="n5-open-lesson" data-id="${g(a?.id||"n5-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n5-review" data-mode="due">${i(n.review)}</button>
              <a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>
            </div>
          </div>
          ${wn("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${s.map(l=>cw(l)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(f((r.n5Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(l=>`<span class="pill">${i(n.day)} ${i(l.day)} · ${i(f(l.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${ms("N5")}
      </section>
    `}function cw(e){const t=wo(e.id),n=Me();let s=e.kanji.filter(a=>V().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#textbooks/N5/${g(e.id)}" data-action="n5-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(f(e.title))}</h3>
        <p>${i(f(e.goal))}</p>
        <div class="n5-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${R(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Tw(t))}</small>
      </a>
    `}function gs(){return r.progress.jlptLessonStudy=Nc(Mi(),r.progress.jlptLessonStudy||{}),r.progress.jlptLessonStudy}function dw(e,t){return`${String(e||"").toUpperCase()}:${String(t||"")}`}function ut(e,t,n="player"){return`jlpt-${String(e||"").toLowerCase()}-${n}-${String(t||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Bn(e,t,n){const s=gs(),a=dw(e,t?.id),o=$c();let c=s.sessions[a];c||(c={...o,level:String(e||"").toUpperCase(),lessonId:String(t?.id||""),startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()},s.sessions[a]=c),c.level=String(e||c.level||"").toUpperCase(),c.lessonId=String(t?.id||c.lessonId||""),c.answers||(c.answers={}),c.phase=jc(c.phase),c.startedAt||(c.startedAt=new Date().toISOString()),c.updatedAt||(c.updatedAt=new Date().toISOString());const l=Array.isArray(n)?n.length:0,d=l?n.findIndex(m=>!c.answers[m.id]):-1,u=Object.keys(c.answers||{}).length;return c.completedAt?(c.phase="done",c.currentIndex=l):d<0?(c.currentIndex=l,c.phase="test",c.testOpenedAt||(c.testOpenedAt=c.updatedAt||new Date().toISOString())):(c.currentIndex=d,c.phase!=="test"&&(c.phase="study")),s.activeSessionKey=a,s.lastUpdatedAt=new Date().toISOString(),{session:c,key:a,answeredCount:u,currentIndex:c.currentIndex,total:l}}function uw(e,t){return!e||!Array.isArray(t)||!t.length||e.session?.phase!=="study"?null:t[Math.min(Math.max(Number(e.currentIndex||0),0),t.length-1)]||null}function pw(e){const t=Array.isArray(e)?e:[];return t.length?`
      <ul class="example-list lesson-study-example-list">
        ${t.slice(0,2).map(Fa).join("")}
      </ul>
    `:""}function gw(e){const t=Ar(e),n=t.length>0;return`
      <details class="lesson-study-details">
        <summary>${i(p()==="ru"?"Показать подробнее":"Show details")}</summary>
        <div class="lesson-study-details-body">
          ${Jo(e)}
          ${n?`
            <div>
              <h3>${i(A("strokeOrder"))}</h3>
              <ol class="stroke-list lesson-study-strokes">${t.map(s=>`<li>${i(s)}</li>`).join("")}</ol>
            </div>
          `:""}
        </div>
      </details>
    `}function mw(e,t,n,s,a,o,c={}){if(!n)return"";const l=typeof c.examples=="function"?c.examples(n,t)||[]:[],d=typeof c.sentence=="function"?c.sentence(n,t):"",u=typeof c.extra=="function"?c.extra(n,t):"",m=c.answerAction||"jlpt-lesson-answer",h=String(e||n.jlpt||"").toUpperCase(),v=Number(s||0),w=M(n.id),$=t?.id||"";return`
      <article class="lesson-player-card lesson-study-card">
        <div class="lesson-player-kanji">
          <div class="lesson-player-glyph">${i(n.kanji)}</div>
          <div class="lesson-player-kanji-copy">
            <div class="tag-row compact-tags">
              <span class="pill">${i(o.step)} ${i(v+1)}</span>
              <span class="pill">${i(w.state)}</span>
              ${n.jlpt?`<span class="pill">${i(n.jlpt)}</span>`:""}
              ${n.strokes?`<span class="pill">${i(n.strokes)} ${i(A("strokes"))}</span>`:""}
              ${tp(n)}
            </div>
            <h2>${i(L(n))}</h2>
            <p class="label lesson-study-progress-label">${i(e||n.jlpt||"")} · ${i(p()==="ru"?`Кандзи ${Math.min(v+1,a)} из ${a}`:`Kanji ${Math.min(v+1,a)} of ${a}`)}</p>
            <dl class="n5-readings lesson-study-readings">
              ${sp(n,"onyomi",o.onyomi,n.onyomi)}
              ${sp(n,"kunyomi",o.kunyomi,n.kunyomi||n.hiragana)}
            </dl>
            ${pw(l)}
            ${d}
            ${u?`<div class="lesson-study-extra">${u}</div>`:""}
            ${gw(n)}
          </div>
        </div>
        <div class="lesson-choice-grid lesson-study-actions">
          <button class="btn success" type="button" data-action="${g(m)}" data-level="${g(h)}" data-lesson="${g($)}" data-card="${g(n.id)}" data-value="remember">${i(o.remember)}<small>${i(p()==="ru"?"в повторение":"to review")}</small></button>
          <button class="btn danger" type="button" data-action="${g(m)}" data-level="${g(h)}" data-lesson="${g($)}" data-card="${g(n.id)}" data-value="forget">${i(o.notRemember)}<small>${i(p()==="ru"?"ещё раз":"show again")}</small></button>
        </div>
      </article>
    `}function fw(e,t,n,s,a){return`
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
    `}function sr(e,t,n,s,a={}){const o=Bn(e,t,n),c=uw(o,n),l=Number(o.answeredCount||0),d=Number(o.total||0),u=a.playerId||ut(e,t?.id,"player"),m=d?R(l,d):0,h=c?`${p()==="ru"?"Кандзи":"Kanji"} ${Math.min(l+1,d)}/${d}`:o.session?.phase==="done"?p()==="ru"?"Урок завершён":"Lesson complete":p()==="ru"?"Тест открыт":"Test open",v=c?L(c):s.lessonComplete;return`
      <article class="study-card lesson-player lesson-study-player" id="${g(u)}">
        <div class="lesson-player-progress">
          <span>${i(h)}</span>
          <strong>${i(v)}</strong>
          <div class="meter"><i style="width:${m}%"></i></div>
        </div>
        ${c?mw(e,t,c,o.currentIndex,d,s,a):fw(e,t,s,d,l)}
      </article>
    `}function hw(e,t){const n=Me(),s=on(t),a=ir(t),o=wo(t.id),c=Bn("N5",t,s);let l=o==="completed";const d=`n5:${t.id}`;ae.has(d)&&(l=!0);const u=l,m=a.filter(D=>bo(D.id)?.correct).length,h=a.length>0&&m===a.length,v=s.filter(D=>V().studiedKanji[D.kanji]).length,w=t.kanji.length,$=v>=w,y=!l&&h&&$,S=t.kanji.filter(D=>V().difficultKanji[D]).join(" · "),b=Pe().find(D=>D.order===t.order+1),k=ut("N5",t.id,"player"),K=ut("N5",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N5 · ${i(n.lesson)} ${t.order}/10</p>
            <h1>${i(f(t.title))}</h1>
            <p>${i(f(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n5-overview">${i(n.backToN5)}</button>
            <button class="btn" type="button" data-action="n5-review" data-mode="difficult">${i(n.difficult)}</button>
            <a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(f(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
          </div>
          <div class="mini-stat-row">
            ${T(n.studiedKanji,`${Math.min(c.answeredCount,w)}/${w}`,n.kanji,R(c.answeredCount,w))}
            ${T(n.exercises,`${m}/${a.length}`,n.correct,R(m,a.length))}
          </div>
        </article>

        ${sr("N5",t,s,n,{playerId:k,answerAction:"jlpt-lesson-answer",examples:D=>gt(D),sentence:D=>vw(D,t)})}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(D=>`
              <article>
                <strong>${i(D.jp)}</strong>
                <span>${i(H(D.reading||""))}</span>
                <small>${i(f({ru:D.ru,en:D.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(K)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(D=>Od(D)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(D=>V().studiedKanji[D.kanji]).length}/8</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(S||n.none)}</span>
            </div>
            ${!l&&!y?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи (8/8) и упражнения урока.":"Complete all kanji (8/8) and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n5-complete-lesson" data-id="${g(t.id)}" ${u||!y?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n5-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#textbooks/N5/${g(b.id)}" data-action="n5-open-lesson" data-id="${g(b.id)}">${i(n.nextLesson)}</a>`:`<a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>`}
          </div>
        </section>
      </section>
    `}function vw(e,t){const n=t.sentences.find(s=>s.jp.includes(e.kanji))||t.sentences[0];return n?`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(H(n.reading||""))}</span>
        <small>${i(f({ru:n.ru,en:n.en}))}</small>
      </div>
    `:""}function Od(e){const t=Me(),n=bo(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&ln("N5",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(f(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(Zd(e.id))}" type="text" maxlength="2" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(f(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n5-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Fd(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(f(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Fd(e,n)}
      </article>
    `}function Fd(e,t){if(!t)return"";const n=Me(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function ww(e){const t=Me(),n=V().activeReviewMode||"due",s=qw(n);return`
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
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n5-review" data-mode="${g(a.id)}">${i(f(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>bw(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function bw(e,t){const n=Me(),s=M(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(An(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(L(e))}</h3>
        <p>${i(gt(e)[0]?.word||e.hiragana||"")} · ${i(gt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function kw(e){const t=Me(),n=r.n5FinalTest||{},s=Vd(),a=V().finalTest,o=Rt(a,s),c=o.answered,l=o.ready,d=r.finalTestBusy;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const h=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==h)&&(a.percent=h),a.completedAt||(a.completedAt=new Date().toISOString()),j()}const u=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,m=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N5 · Final</p>
            <h1>${i(f(n.title||{}))}</h1>
            <p>${i(f(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n5-overview">${i(t.backToN5)}</button>
            <button class="btn" type="button" data-action="n5-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${T(t.questions,`${c}/${s.length}`,t.finalTest,R(c,s.length))}
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
            ${vt("N5","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((h,v)=>yw(h,v)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n5-final-submit" ${d||u?"disabled":""}>${i(u?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${vt("N5","btn ghost")}
          <button class="btn ghost" type="button" data-action="n5-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function yw(e,t){const n=V().finalTest.answers?.[e.id],s=!!V().finalTest.completedAt,a=r.finalTestModal&&r.finalTestModal.level==="N5"&&r.finalTestModal.kind==="warning"?r.finalTestModal:null,o=!!(a&&Array.isArray(a.missingIds)&&a.missingIds.includes(e.id));return`
      <article id="${g(ys("n5",e.id))}" class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":o?"is-missing":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(c=>{const l=n===c.value;return`<button class="btn ${s&&c.value===e.answer?"success":l?"primary":"ghost"}" type="button" data-action="n5-final-answer" data-id="${g(e.id)}" data-value="${g(c.value)}">${i(c.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Me().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Me(){return p()==="ru"?{title:"JLPT N5",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",courseMap:"Полноценный интерактивный учебник N5",continue:"Продолжить",review:"Повторять N5",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",reviews:"Повторения",difficult:"Сложные",filterDifficult:"фильтр",srs:"Повторение",lessons:"уроков",lessonsTitle:"10 уроков по 8 кандзи",lessonsDescription:"Каждый урок ведёт от знака к слову, предложению, упражнению, письму и повторению.",reviewPlan:"План повторения на 30 дней",day:"день",lesson:"Урок",backToN5:"Рљ N5",lessonChain:"Кандзи -> слово -> предложение -> практика",lessonChainText:"Сначала узнаёшь знак, затем видишь чтение в слове, читаешь предложение, отвечаешь и отправляешь карточку в повторение.",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Читай вслух: так чтение перестаёт быть отдельной таблицей.",exercisesText:"Смешанная практика работает внутри урока и повторения.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока доступны в повторении.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда все 8 кандзи добавлены в повторение.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",remember:"Помню",notRemember:"Не помню",details:"Показать подробнее",completed:"Пройдено",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N5-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N5.",noReviewCards:"Сейчас нет карточек в этом фильтре.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N5",finalPassed:"N5 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N5",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",courseMap:"Full interactive N5 textbook",continue:"Continue",review:"Review N5",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",reviews:"Reviews",difficult:"Difficult",filterDifficult:"filter",srs:"Review",lessons:"lessons",lessonsTitle:"10 lessons, 8 kanji each",lessonsDescription:"Each lesson moves from sign to word, sentence, exercise, writing, and SRS.",reviewPlan:"30-day review plan",day:"day",lesson:"Lesson",backToN5:"To N5",lessonChain:"Kanji -> word -> sentence -> practice",lessonChainText:"First recognize the sign, then see the reading in a word, read a sentence, answer, and send the card to SRS.",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud so readings stop feeling like a separate table.",exercisesText:"Mixed practice works inside lessons and review.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N5 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when all 8 kanji are in review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N5 review",reviewDescription:"Review due cards, difficult kanji, or the full N5 set.",noReviewCards:"No cards in this filter right now.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N5",finalPassed:"N5 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Bd(){return p()==="ru"?{title:"Чтение и самопроверка",description:"Тексты из md-файла для чтения вслух и проверки понимания по вопросам ниже.",questions:"Проверочные вопросы",noQuestions:"В этом тексте пока нет вопросов.",texts:"текстов",genre:"Жанр",source:"Опора",goal:"Цель"}:{title:"Reading and self-check",description:"Texts from the md file for reading aloud and checking understanding with the questions below.",questions:"Check questions",noQuestions:"No questions are listed for this text.",texts:"texts",genre:"Genre",source:"Source",goal:"Goal"}}function Gd(e){return Q(e)||String(e||"").toUpperCase()}function zd(e){const t=Gd(e);return Array.isArray(r.jlptReadingByLevel?.[t])?r.jlptReadingByLevel[t]:[]}function vo(e){const t=r.jlptReadingTranslations?.[String(e?.id||"")]||{};return{title:{ru:String(t.titleRu||e?.title||"").trim(),en:String(t.titleEn||e?.title||"").trim()},translation:{ru:String(t.ru||"").trim(),en:String(t.en||"").trim()}}}function Jd(e){return H(wr(String(e?.text||"")).replace(/\s+/g," ").trim())}function $w(e){const t=Q(e);return t==="N5"?{maxBlanks:2,maxBlankChars:4}:t==="N4"?{maxBlanks:2,maxBlankChars:5}:t==="N3"?{maxBlanks:3,maxBlankChars:6}:t==="N2"?{maxBlanks:3,maxBlankChars:7}:{maxBlanks:4,maxBlankChars:8}}function jw(){const e=Array.isArray(r.cards)?r.cards:[];if(!e.length)return[];const t=[];return _e.forEach(n=>{zd(n).forEach((s,a)=>{const o=vo(s),c=Jd(s),l=Ko({id:`jlpt-md-${s.id}`,jlpt:n,sentence:s.text||"",reading:c,translationRu:o.translation.ru,translationEn:o.translation.en,source:"markdown",sourceId:String(s.id||""),genre:s.genre||"",goal:s.goal||""},e,$w(n));l&&(l.kind="cloze",l.tiles=hn(l,e),l.source="markdown",l.sourceId=String(s.id||""),l.sourceKind="markdown",l.sourceTitle=o.title,l.title=o.title,l.genre=s.genre||"",l.goal=s.goal||"",l.passageSource=s.source||"",l.questions=Array.isArray(s.questions)?s.questions:[],l.level=n,l.order=a+1,t.push(l))})}),t}function Sw(e){const t=vo(e),n=Jd(e),s=n?ip(n):"",a=f(t.translation);return`
      <details class="reading-translation-wrap jlpt-reading-translation">
        <summary class="btn ghost reading-translation-toggle" role="button">${i(Go())}</summary>
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
            <span>${i(Go())}</span>
            <strong>${i(a||(p()==="ru"?"Нет данных":"No data"))}</strong>
          </div>
        </div>
      </details>
    `}function ms(e){const t=zd(e);if(!t.length)return"";const n=Bd(),s=Gd(e),a=Rr(s,"textbook_reading_block"),o=As(s);return(a||o)&&j(),`
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
          ${t.map((c,l)=>Nw(c,s,l)).join("")}
        </div>
      </section>
    `}function Nw(e,t,n){const s=Bd(),a=vo(e),o=Array.isArray(e?.questions)?e.questions:[];return`
      <article class="jlpt-reading-card">
        <div class="jlpt-reading-card-head">
          <div class="tag-row compact-tags">
            <span class="pill">${i(t)}</span>
            <span class="pill">${i(n+1)}</span>
            ${e.genre?`<span class="pill">${i(e.genre)}</span>`:""}
          </div>
          <h3>${i(e.title||`${t}-${n+1}`)}</h3>
          ${a.title.ru||a.title.en?`<p class="jlpt-reading-meta">${i(f(a.title))}</p>`:""}
          ${e.goal?`<p class="jlpt-reading-meta">${i(s.goal)}: ${i(e.goal)}</p>`:""}
          ${e.source?`<p class="jlpt-reading-meta">${i(s.source)}: ${i(e.source)}</p>`:""}
        </div>
        <div class="jlpt-reading-text">${i(e.text||"")}</div>
        ${Sw(e)}
        <details class="jlpt-reading-questions">
          <summary>${i(s.questions)}${o.length?` · ${o.length}`:""}</summary>
          ${o.length?`<ol>${o.map(c=>`<li>${i(c)}</li>`).join("")}</ol>`:`<p>${i(s.noQuestions)}</p>`}
        </details>
      </article>
    `}function rr(){r.progress.n5Course=Ac(Ei(),r.progress.n5Course||{});const e=Pe();!pt(r.progress.n5Course.currentLessonId)&&e[0]&&(r.progress.n5Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n5Course.completedLessons[s.id]);return!r.progress.n5Course.currentLessonId&&n&&(r.progress.n5Course.currentLessonId=n.id),r.progress.n5Course}function V(){return rr()}function Pe(){return r.n5Textbook?.items||[]}function pt(e){const t=String(e||"");return t&&Pe().find(n=>n.id===t||n.id===`n5-${t}`||n.id.endsWith(`-${t}`))||null}function xw(){return pt(V().currentLessonId)||Pe().find(e=>!V().completedLessons[e.id])||Pe()[0]||null}function on(e){return(e?.kanji||[]).map(t=>Aw(t,e)).filter(Boolean)}function Lt(){const e=new Set;return Pe().flatMap(t=>on(t)).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Aw(e,t=null){const n=String(e||""),s=r.n5KanjiCatalog?.find(c=>c.kanji===n)||null,a=r.cards.find(c=>c.kanji===n&&String(c.jlpt||"").toUpperCase()==="N5")||r.cards.find(c=>c.kanji===n)||null,o=t?.id||s?.lessonId||null;return a&&s?ta({...a,lessonId:a.lessonId||o},s):a||(s?ta({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:o,jlpt:"N5",examples:[]},s):null)}function ar(e,t=[]){const n=(Array.isArray(t)?t:[]).slice(0,3).map(s=>({...s,reading:H(s.reading||s.hiragana||s.kana||e.hiragana||"")}));return n.length?n:[{word:e.kanji,reading:H(e.hiragana||""),romaji:e.romaji||"",translation:L(e)}]}function gt(e){return ar(e,e.examples)}function Cw(e,t){const n=t?.word||e.kanji,s=H(t?.reading||e.hiragana||"");return p()==="ru"?`Свяжи ${e.kanji} со значением «${L(e)}» и сразу проговори слово: ${n}${s?` (${s})`:""}.`:`Connect ${e.kanji} with "${L(e)}" and say the word right away: ${n}${s?` (${s})`:""}.`}function Lw(){const e=Lt(),t=V(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{M(s.id).state!=="New"&&n.add(s.kanji)}),{total:r.n5Meta?.kanjiCount||e.length||80,studied:n.size,completedLessons:Gn(),reviews:e.reduce((s,a)=>s+Number(M(a.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function wo(e){const t=V(),n=`n5:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":pt(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function Tw(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Gn(){return Pe().filter(t=>wo(t.id)==="completed").length}function ir(e){const t=on(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n5Exercises?.types||[]).map(y=>[y.type,y.title])),a=Object.fromEntries((r.n5Exercises?.types||[]).map(y=>[y.type,y])),o=y=>a[y]||{rewardXp:r.n5Meta?.rewards?.exerciseXp||7,rewardMoon:r.n5Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:L(l),kanji:l.kanji,cardId:l.id,options:Tt({value:l.id,label:L(l)},t.slice(1).map(y=>({value:y.id,label:L(y)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:L(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:Tt({value:d.kanji,label:d.kanji},t.filter(y=>y.id!==d.id).map(y=>({value:y.kanji,label:y.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=gt(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word,answer:m.reading,answerLabel:m.reading,kanji:u.kanji,cardId:u.id,options:Tt({value:m.reading,label:m.reading},t.flatMap(y=>gt(y).map(S=>({value:S.reading,label:S.reading}))).filter(y=>y.value!==m.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:f({ru:h.ru,en:h.en}),answerLabel:f({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:Tt({value:f({ru:h.ru,en:h.en}),label:f({ru:h.ru,en:h.en})},n.slice(1).map(y=>({value:f({ru:y.ru,en:y.en}),label:f({ru:y.ru,en:y.en})})),1),...o("sentence")});const v=t[3]||t[0],w=gt(v)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Insert the word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ce(w)}В»?`:`Which word matches "${Ce(w)}"?`,answer:w.word,answerLabel:w.word,kanji:v.kanji,cardId:v.id,options:Tt({value:w.word,label:w.word},t.flatMap(y=>gt(y).map(S=>({value:S.word,label:S.word}))).filter(y=>y.value!==w.word),2),...o("missing-word")});const $=t[4]||t[0];return c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${L($)}`:`Type the kanji for: ${L($)}`,answer:$.kanji,answerLabel:$.kanji,kanji:$.kanji,cardId:$.id,options:[],...o("active-recall")}),c.slice(0,r.n5Exercises?.lessonQuestionCount||6).map(y=>({...y,level:"N5",lessonId:e.id}))}function Tt(e,t,n=0){const s=new Set([String(e.value)]),a=[e];if(t.forEach(l=>{const d=String(l.value||"");!d||s.has(d)||a.length>=4||(s.add(d),a.push(l))}),Lt().forEach(l=>{if(a.length>=4)return;const d={value:l.id,label:l.kanji};s.has(String(d.value))||(s.add(String(d.value)),a.push(d))}),a.length<=1)return a;const c=n%a.length;return[...a.slice(c),...a.slice(0,c)]}function Ud(e){for(const t of Pe()){const n=ir(t).find(s=>s.id===e);if(n)return n}return null}function ln(e,t,n=""){return r.route==="review"&&r.activeExerciseReviewLevel===String(e||"").toUpperCase()&&String(r.activeExerciseReviewId||"")===String(t||"")&&(!n||String(r.activeExerciseReviewSource||"")===String(n||""))}function or(e,t,n){return ln(e,n)?r.reviewExerciseResults?.[String(n)]||null:t.exerciseResults?.[String(n)]||null}function Iw(e,t,n){const s=Q(t);if(!e||!s||!n)return null;e.exerciseSrs||(e.exerciseSrs={});const a=e.exerciseSrs[String(n.id)]||null;if(a)return Hn(a,{level:s,lessonId:n.lessonId||a.lessonId||"",exerciseId:n.id,cardId:n.cardId||a.cardId||"",kanji:n.kanji||a.kanji||"",type:n.type||a.type||"",title:n.title||a.title||null,prompt:n.prompt||a.prompt||"",answer:n.answer||a.answer||"",answerLabel:n.answerLabel||a.answerLabel||""});const o=Ns(s,n.lessonId||"",n.id,n);return e.exerciseSrs[String(n.id)]=o,o}function Rw(e,t,n,s){if(!e||!n)return;const a=Q(t);a&&(e.exerciseSrs||(e.exerciseSrs={}),e.exerciseSrs[String(n.id)]=Hn(s,{level:a,lessonId:n.lessonId||s?.lessonId||"",exerciseId:n.id,cardId:n.cardId||s?.cardId||"",kanji:n.kanji||s?.kanji||"",type:n.type||s?.type||"",title:n.title||s?.title||null,prompt:n.prompt||s?.prompt||"",answer:n.answer||s?.answer||"",answerLabel:n.answerLabel||s?.answerLabel||""}))}function lr(e,t,n,s,a,o={}){const c=Q(e);if(!c||!t||!n)return;const l=new Date().toISOString(),d=ln(c,n.id);if(d&&r.reviewExerciseResults?.[n.id])return;const u={selected:s,correct:a,checkedAt:l};d?(r.reviewExerciseResults||(r.reviewExerciseResults={}),r.reviewExerciseResults[n.id]=u,r.reviewQueueLastKind="exercise"):t.exerciseResults[n.id]=u;const m=se(Iw(t,c,n)||Ns(c,n.lessonId||"",n.id,n)),h=ue(m,a?"good":"again");if(Rw(t,c,n,h),zt(m,h,a?"good":"again"),he(),a){if(r.progress.totalCorrect+=1,!d&&!t.completedExercises[n.id]){t.completedExercises[n.id]=l,o.markCompleted?.(l),(o.markStudied||(()=>{}))();const w=Number(o.rewardXp||0),$=Number(o.rewardMoon||0);(w||$)&&O(w,$,o.rewardKey||`exercise:${n.id}`)}}else if(r.progress.totalWrong+=1,o.markWrong?.(),(o.markDifficult||(()=>{}))(),n.type==="reading"||n.type==="missing-word"){const w=n.answerLabel||n.answer;w&&o.markWordMistake?.(w)}d&&(r.pendingFocus="__scroll-top__"),x(),j(),St("textbook exercise post-render effects",()=>{I(a?"answer_correct":"answer_wrong"),q()})}function qd(e){const t=Q(e?.level||"");return t==="N5"?{xp:Number(r.n5Meta?.rewards?.exerciseXp||7),moon:Number(r.n5Meta?.rewards?.exerciseMoon||1)}:t==="N4"?{xp:Number(r.n4Meta?.rewards?.readingXp||r.n4Meta?.rewards?.exerciseXp||10),moon:Number(r.n4Meta?.rewards?.readingMoon||r.n4Meta?.rewards?.exerciseMoon||1)}:t==="N3"?{xp:Number(r.n3Meta?.rewards?.readingXp||r.n3Meta?.rewards?.exerciseXp||10),moon:Number(r.n3Meta?.rewards?.readingMoon||r.n3Meta?.rewards?.exerciseMoon||1)}:t==="N2"?{xp:Number(r.n2Meta?.rewards?.readingXp||r.n2Meta?.rewards?.exerciseXp||10),moon:Number(r.n2Meta?.rewards?.readingMoon||r.n2Meta?.rewards?.exerciseMoon||1)}:{xp:Number(r.n1Meta?.rewards?.readingXp||r.n1Meta?.rewards?.exerciseXp||10),moon:Number(r.n1Meta?.rewards?.readingMoon||r.n1Meta?.rewards?.exerciseMoon||1)}}function Hd(e,t,n,s={}){if(!e?.id)return;const a=new Date().toISOString(),o=ln(e.level,e.id,"reading"),c=se(yn(e)||kn(e));if(r.reviewExerciseResults||(r.reviewExerciseResults={}),e.kind==="cloze"){c.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():c.selectedIndices||[],c.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(S=>({kanji:String(S?.kanji||""),reading:String(S?.reading||"")})).filter(S=>S.kanji):c.selectedTiles||[],c.selectedText=String(t||""),c.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.slice():c.wrongIndexes||[],c.completed=!0,c.completedAt=a,c.correct=!!n,c.answers={cloze:{selected:String(t||""),correct:!!n,checkedAt:a}},Wn(e,c),r.reviewExerciseResults[e.id]=se(c),n?r.progress.totalCorrect+=1:r.progress.totalWrong+=1;const w=se(c),$=ue(w,n?"good":"again");$.selectedIndices=c.selectedIndices,$.selectedTiles=c.selectedTiles,$.selectedText=c.selectedText,$.wrongIndexes=c.wrongIndexes,$.completed=!0,$.completedAt=a,$.correct=!!n,$.answers=c.answers,Wn(e,$),r.reviewExerciseResults[e.id]=se($),zt(w,$,n?"good":"again"),he();const y=qd(e);n?O(y.xp,y.moon,`reading:${e.id}`):O(Math.max(1,Math.round(y.xp*.35)),0,`reading:${e.id}:again`),o&&(r.pendingFocus="__scroll-top__"),x(),j(),St("reading cloze post-render effects",()=>{I(n?"answer_correct":"answer_wrong"),q()});return}const l=e.question||e.questions?.[0]||null,d=String(s.questionKey||l?.id||e.id);if(c.answers||(c.answers={}),c.answers[d])return;if(c.answers[d]={selected:String(t||""),correct:!!n,checkedAt:a},c.completed=!!d&&Object.keys(c.answers).length>=Yo(),c.completedAt=c.completed?a:c.completedAt||null,c.correct=c.completed?Object.values(c.answers).every(w=>!!w?.correct):!1,c.selectedText=String(t||""),Wn(e,c),r.reviewExerciseResults[e.id]=se(c),n?r.progress.totalCorrect+=1:r.progress.totalWrong+=1,j(),!c.completed){x(),St("reading question post-render sound",()=>{I(n?"answer_correct":"answer_wrong")});return}const u=se(c),m=Object.values(c.answers).every(w=>!!w?.correct),h=ue(u,m?"good":"again");h.answers=c.answers,h.completed=!0,h.completedAt=a,h.correct=m,h.selectedText=String(t||""),h.wrongQuestions=Object.entries(c.answers).filter(([,w])=>!w?.correct).map(([w])=>w),Wn(e,h),r.reviewExerciseResults[e.id]=se(h),zt(u,h,m?"good":"again"),he();const v=qd(e);m?O(v.xp,v.moon,`reading:${e.id}`):O(Math.max(1,Math.round(v.xp*.25)),0,`reading:${e.id}:again`),o&&(r.pendingFocus="__scroll-top__"),x(),j(),St("reading exercise post-render effects",()=>{I(n?"answer_correct":"answer_wrong"),q()})}function _w(e){const t=$s();if(!t||t.source!=="reading"||!t.exercise)return;const n=t.exercise.question||t.exercise.questions?.[0]||null;if(!n)return;const s=String(e.dataset.value||""),a=s===String(n.answer||"");Hd(t.exercise,s,a,{questionKey:String(e.dataset.question||n.id||t.exercise.id)})}function Mw(e){const t=$s();if(!t||t.source!=="reading"||t.exercise?.kind!=="cloze")return;const n=t.exercise,s=se(yn(n)||kn(n));if(s.completed||s.selectedIndices?.includes(e))return;const a=Math.max(1,ft(n).length);if(s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():[],s.selectedIndices.length>=a){F(p()==="ru"?"Все пропуски уже заполнены.":"All blank slots are already filled.");return}if(s.selectedIndices.push(e),s.selectedTiles=s.selectedIndices.map(o=>n.tiles?.[o]).filter(Boolean),s.selectedText=s.selectedTiles.map(o=>o.kanji).join(""),Wn(n,s),r.activeExerciseReviewSelection=s.selectedIndices.slice(),r.reviewExerciseResults[n.id]=se(s),j(),s.selectedIndices.length>=a){Wd();return}x()}function Pw(){const e=$s();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=se(yn(t)||kn(t));n.completed||!n.selectedIndices?.length||(n.selectedIndices=n.selectedIndices.slice(0,-1),n.selectedTiles=n.selectedIndices.map(s=>t.tiles?.[s]).filter(Boolean),n.selectedText=n.selectedTiles.map(s=>s.kanji).join(""),r.activeExerciseReviewSelection=n.selectedIndices.slice(),r.reviewExerciseResults[t.id]=se(n),Wn(t,n),j(),x())}function Ew(){const e=$s();if(!e||e.source!=="reading"||!e.exercise)return;const t=e.exercise,n=se(yn(t)||kn(t));n.completed||(n.selectedIndices=[],n.selectedTiles=[],n.selectedText="",n.wrongIndexes=[],r.activeExerciseReviewSelection=[],r.reviewExerciseResults[t.id]=se(n),Wn(t,n),j(),x())}function Wd(){const e=$s();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=ft(t),s=se(yn(t)||kn(t)),a=Array.isArray(s.selectedIndices)?s.selectedIndices:[];if(a.length<n.length){F(p()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.");return}const o=a.map(d=>t.tiles?.[d]).filter(Boolean),c=o.length===n.length&&o.every((d,u)=>d?.kanji===n[u]?.kanji),l=o.map((d,u)=>d?.kanji===n[u]?.kanji?-1:u).filter(d=>d>=0);Hd(t,o.map(d=>d.kanji).join(""),c,{selectedIndices:a,selectedTiles:o,wrongIndexes:l})}function Kw(){r.activeExerciseReviewTranslationOpen=!r.activeExerciseReviewTranslationOpen,x()}function bo(e){return or("N5",V(),e)}function Dw(e){const t=Ud(e.dataset.id);if(!t)return;const n=e.dataset.value||"",s=n===t.answer;Xd(t,n,s)}function Ow(e){const t=Ud(e);if(!t)return;const n=document.getElementById(Zd(t.id)),s=n?String(n.value||"").trim():"";Xd(t,s,s===t.answer)}function Xd(e,t,n){const s=V();lr("N5",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n5Meta?.rewards?.exerciseXp||7),rewardMoon:Number(e.rewardMoon||r.n5Meta?.rewards?.exerciseMoon||1),rewardKey:`n5_exercise:${e.id}`,markStudied:()=>fs(e.kanji,e.cardId),markDifficult:()=>cr(e.kanji,e.cardId),markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Fw(e,t,n,s){var h;const a=Q(e)||String(e||"").toUpperCase(),o=a==="N5"?pt(t):a==="N4"?cn(t):a==="N3"?un(t):a==="N2"?gn(t):a==="N1"?zn(t):null;if(!o)return;const c=Jc(a,o),l=c.find(v=>String(v.id)===String(n))||ne(n);if(!l)return;const d=Bn(a,o,c);if(d.session.answers?.[l.id])return;const u=new Date().toISOString();d.session.answers[l.id]={remembered:!!s,rating:s?"good":"again",answeredAt:u};const m=c.findIndex(v=>String(v.id)===String(l.id));d.session.currentIndex=m>=0?m+1:Math.min(Number(d.session.currentIndex||0)+1,c.length),d.session.phase=d.session.currentIndex>=c.length?"test":"study",d.session.updatedAt=u,d.session.phase==="test"&&((h=d.session).testOpenedAt||(h.testOpenedAt=u)),r.pendingFocus=null,Dt(),j(),Kc(`${a} lesson SRS post-render commit`,()=>{const v=s?"good":"again";a==="N5"?Qd(l.id,v,"review"):a==="N4"?ou(l.id,v,"review"):a==="N3"?bu(l.id,v,"review"):a==="N2"?Iu(l.id,v,"review"):a==="N1"&&Gu(l.id,v,"review")})}function Qd(e,t,n="review"){const s=ne(e);if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,c=a?"hard":t,l=se(M(s.id)),d=ue(l,o,c);r.progress.cards[s.id]=d,zt(l,d,c),he(),fs(s.kanji,s.id),V().srsKanji[s.kanji]=new Date().toISOString(),a?(cr(s.kanji,s.id,!1),r.progress.totalCorrect+=1,O(r.n5Meta?.rewards?.hardXp||2,1,`n5_srs_lesson_hard:${s.id}`)):Ee(t)?(cr(s.kanji,s.id),r.progress.totalWrong+=1,O(r.n5Meta?.rewards?.hardXp||2,0,`n5_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,O(t==="easy"?r.n5Meta?.rewards?.knowXp||6:r.n5Meta?.rewards?.addToSrsXp||4,1,`n5_srs:${s.id}`)),Dt(),j(),St("N5 SRS post-render effects",()=>{I(Ee(t)?"answer_wrong":"answer_correct"),q()})}function Bw(e){const t=ne(e);if(!t)return;const n=V();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},fs(t.kanji,t.id),O(8,1,`n5_writing:${t.id}`)),q(),j(),x()}function Gw(e){const t=pt(e);if(!t)return;const n=V(),s=`n5:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){x();return}const a=on(t);if(a.filter(v=>n.studiedKanji[v.kanji]).length<t.kanji.length){const v=p()==="ru"?"Сначала изучите все кандзи урока (8/8).":"Study all kanji in the lesson first (8/8).";typeof F=="function"&&F(v);return}const c=ir(t);if(!(c.length>0&&c.every(v=>bo(v.id)?.correct))){const v=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof F=="function"&&F(v);return}ae.add(s),on(t).forEach(v=>{fs(v.kanji,v.id),n.srsKanji[v.kanji]=n.srsKanji[v.kanji]||new Date().toISOString();const w=M(v.id);w.state==="New"&&(r.progress.cards[v.id]=ue(se(w),"good"))}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=Pe().find(v=>v.order===t.order+1)?.id||t.id;const d=gs(),u=d.sessions[n5SessKey];if(u){const v=new Date().toISOString();u.phase="done",u.completedAt=v,u.updatedAt=v,u.currentIndex=a.length,d.activeSessionKey=n5SessKey,d.lastUpdatedAt=v}V(),r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.completedLessons=r.progress.n5Course.completedLessons||{},r.progress.n5Course.completedLessons[t.id]=new Date().toISOString(),j({immediate:!0}),Gn()>=10&&Object.keys(n.studiedKanji||{}).length>=80&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N5")||r.progress.unlockedJlptLevels.push("N5"),r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"));const m=r.n5Meta?.rewards?.lessonCompleteXp||45,h=r.n5Meta?.rewards?.lessonCompleteMoon||6;O(m,h,`n5_lesson:${t.id}`),Xe({title:`${Me().lessonComplete}: ${f(t.title)}`,message:Me().lessonCompleteText,xp:m,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),I("lesson_complete"),q(),j(),x()}function fs(e,t=null){if(!e)return;const n=V();as(n,e)}function cr(e,t=null,n=!0){if(e&&(V().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=M(t);s.state!=="New"&&(r.progress.cards[t]=ue(se(s),"again"))}}function zw(e){const t=pt(e);t&&(V().currentLessonId=t.id,ot("N5",t.id,"n5_lesson_open"),Nt("N5",t,"n5_lesson_open"),dr(t.id))}function Jw(){dr("")}function Uw(e=null){e&&(V().activeReviewMode=e),dr("review")}function dr(e){r.route="textbooks",r.activeTextbookLevel="N5",r.activeTextbookSubroute=e||null;const t=e?`#textbooks/N5/${encodeURIComponent(e)}`:"#textbooks/N5";Pt(t),j(),ie(),Ot()}function qw(e="due"){const t=Date.now(),n=V(),s=Lt();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=M(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Vd(){const e=Lt(),t=Pe(),n=r.n5FinalTest?.types||["meaning","reading","sentence","kanji","word","srs"],s=Math.min(r.n5FinalTest?.questionCount||24,Math.max(e.length,1)),a=[];for(let o=0;o<s;o+=1){const c=e[o*7%e.length]||e[o%e.length],l=n[o%n.length],d=t.find(u=>u.kanji.includes(c.kanji))||t[0];a.push(Hw(l,c,d,o))}return a.filter(Boolean)}function Hw(e,t,n,s){const o=gt(t)[0],c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:L(t),options:Tt({value:t.id,label:L(t)},Lt().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:L(l)})),s)};if(e==="reading")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word,answer:o.reading,answerLabel:o.reading,options:Tt({value:o.reading,label:o.reading},Lt().flatMap(l=>gt(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value!==o.reading),s)};if(e==="sentence"&&c){const l=f({ru:c.ru,en:c.en});return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:Tt({value:l,label:l},Pe().flatMap(d=>d.sentences||[]).map(d=>({value:f({ru:d.ru,en:d.en}),label:f({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word;return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ce(o),answer:l,answerLabel:l,options:Tt({value:l,label:l},Lt().flatMap(d=>gt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value!==l),s)}}return e==="srs"?{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${L(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${L(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n5-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:L(t),answer:t.kanji,answerLabel:t.kanji,options:Tt({value:t.kanji,label:t.kanji},Lt().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function Ww(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(V().finalTest.answers[t]=n,j(),x())}function Yd(e=!1){if(r.finalTestBusy)return;const t=V().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){x();return}r.finalTestBusy=!0;try{const n=Vd(),s=r.n5FinalTest||{},a=Me(),o=Rt(t,n),c=k$(s),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const k=o.firstMissingId?`#${ys("n5",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N5",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:k,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},r.pendingFocus=k,j();return}let u=0;const m=[],h=[];n.forEach(k=>{const K=String(t.answers?.[k.id]||"").trim();K===k.answer?(u+=1,fs(k.kanji,k.cardId)):(K||h.push(k),m.push({id:k.id,kanji:k.kanji,answer:k.answerLabel,selected:K}),cr(k.kanji,k.cardId))});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,$=!!t.passed,y=Math.max(0,m.length-h.length);let S=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=c,t.correctAnswers=u,t.incorrectAnswers=y,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(k=>k.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?$&&t.passedAt||d:t.passedAt||null,!w){const k=Number(s?.rewards?.completeXp||120),K=Number(s?.rewards?.completeMoon||20);S+=k,b+=K,O(k,K,"n5_final_complete")}if(t.passed&&!$){const k=Number(s?.rewards?.passXp||80),K=Number(s?.rewards?.passMoon||12);S+=k,b+=K,O(k,K,"n5_final_pass")}t.lastRewardXp=S,t.lastRewardMoon=b,V(),r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.finalTest=r.progress.n5Course.finalTest||{},Object.assign(r.progress.n5Course.finalTest,{percent:t.percent,score:t.score,completedAt:t.completedAt,passed:t.passed,totalQuestions:t.totalQuestions,correctAnswers:t.correctAnswers||t.score}),j({immediate:!0}),r.finalTestModal={kind:"result",level:"N5",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:y,unanswered:h.length,totalQuestions:n.length,rewardXp:S,rewardMoon:b,attempts:t.attempts,threshold:c,reviewAction:"n5-review",reviewAllAction:"n5-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},q(),j()}catch(n){console.error(n),F(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,x()}}function Xw(){V().finalTest=Ei().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,j(),x()}function Zd(e){return`n5-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Qw(e){r.activeTextbookLevel="N4",r.activeJlptLesson="N4";const t=ko();t.opened||(t.opened=!0,q(),j());const n=String(r.activeTextbookSubroute||"");if(n==="final-test")return lb();if(n==="review")return nb();if(n==="kanji")return rb();if(n==="grammar")return ab();if(n==="reading")return ib();if(n==="listening")return ob();const s=cn(n);return s?(U().currentLessonId=s.id,ot("N4",s.id,"n4_lesson_page"),Nt("N4",s,"n4_lesson_page"),Zw(e,s)):Vw(e)}function Vw(e){const t=ub(),n=we(),s=Ye(),a=db(),o=r.n4Meta||{},c=f(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N4 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(f(o.description||e.description||{}))}</p>
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
            <p>${i(c)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#jlpt/n4/${g(a?.id||"n4-lesson-1")}" data-action="n4-open-lesson" data-id="${g(a?.id||"n4-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n4-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n4-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n4-grammar">${i(n.grammarN4)}</button>
              <button class="btn ghost" type="button" data-action="n4-reading">${i(n.readingN4)}</button>
              <button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${wn("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${(o.n5Bridge||[]).map(l=>`<span class="pill">${i(l)}</span>`).join("")}
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
            ${s.map(l=>Yw(l)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(f((r.n4Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(l=>`<span class="pill">${i(n.day)} ${i(l.day)} · ${i(f(l.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${ms("N4")}
      </section>
    `}function Yw(e){const t=ru(e.id),n=we();let s=e.kanji.filter(a=>U().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n4/${g(e.id)}" data-action="n4-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(f(e.title))}</h3>
        <p>${i(f(e.goal))}</p>
        <div class="n5-kanji-strip n4-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${R(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(pb(t))}</small>
      </a>
    `}function Zw(e,t){const n=we(),s=ur(t),a=xa(t),o=ru(t.id),c=Bn("N4",t,s);let l=o==="completed";const d=`n4:${t.id}`;ae.has(d)&&(l=!0);const u=l,m=a.filter(D=>$o(D.id)?.correct).length,h=a.length>0&&m===a.length,v=s.filter(D=>U().studiedKanji[D.kanji]).length,w=t.kanji.length,$=v>=w,y=!l&&h&&$,S=t.kanji.filter(D=>U().difficultKanji[D]).join(" · "),b=Ye().find(D=>D.order===t.order+1),k=ut("N4",t.id,"player"),K=ut("N4",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n4-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · ${i(n.lesson)} ${t.order}/17</p>
            <h1>${i(f(t.title))}</h1>
            <p>${i(f(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${i(n.backToN4)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(f(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.duration)}: ${i(t.durationMinutes||30)} ${i(n.minutes)}</span>
              ${t.grammarFocus.map(D=>`<span class="pill">${i(D)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${T(n.studiedKanji,`${Math.min(c.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,R(c.answeredCount,t.kanji.length))}
            ${T(n.exercises,`${m}/${a.length}`,n.correct,R(m,a.length))}
          </div>
        </article>

        ${sr("N4",t,s,n,{playerId:k,answerAction:"jlpt-lesson-answer",examples:D=>Ze(D),sentence:D=>eb(D,t)})}

        ${tb(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(D=>`
              <article>
                <strong>${i(D.jp)}</strong>
                <span>${i(H(D.reading||""))}</span>
                <small>${i(f({ru:D.ru,en:D.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(K)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(D=>eu(D)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(D=>U().studiedKanji[D.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(S||n.none)}</span>
            </div>
            ${!l&&!y?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n4-complete-lesson" data-id="${g(t.id)}" ${u||!y?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#jlpt/n4/${g(b.id)}" data-action="n4-open-lesson" data-id="${g(b.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function eb(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(H(n.reading||""))}</span>
        <small>${i(f({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(we().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function tb(e){const t=we(),n=(e.grammarFocus||[]).map(s=>yo(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n4-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n4-section-grid">
          ${n.map(s=>`
            <article class="n4-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(f(s.title))}</h3>
              <p>${i(f(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(f({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n4-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(U().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function eu(e){const t=we(),n=$o(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&ln("N4",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(f(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(uu(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(f(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n4-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${tu(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(f(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${tu(e,n)}
      </article>
    `}function tu(e,t){if(!t)return"";const n=we(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function nb(e){const t=we(),n=U().activeReviewMode||"due",s=Cb(n);return`
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
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n4-review" data-mode="${g(a.id)}">${i(f(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>sb(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function sb(e,t){const n=we(),s=M(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(An(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(L(e))}</h3>
        <p>${i(Ze(e)[0]?.word||e.hiragana||"")} · ${i(Ze(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function rb(e){const t=we(),n=Ge();return`
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
              <div class="n5-kanji-topline"><span class="pill">${a+1}/170</span><span class="pill">${i(M(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(L(s))}</h3>
              <p>${i(Ze(s)[0]?.word||"")} · ${i(Ze(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n4-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function ab(e){const t=we();return`
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
          ${T(t.completedGrammar,`${Object.keys(U().completedGrammar||{}).length}/${r.n4Grammar.length}`,t.grammar,R(Object.keys(U().completedGrammar||{}).length,r.n4Grammar.length))}
          ${T(t.questions,r.n4Grammar.length,t.grammar,100)}
        </div>
        <div class="n4-section-grid">
          ${r.n4Grammar.map(n=>{const s=U().grammarResults?.[n.id];return`
              <article class="n4-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(f(n.title))}</h3>
                <p>${i(f(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(H(a.reading||""))}</span><small>${i(f({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(f(n.question))}</h4>`:""}
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
    `}function ib(e){const t=we(),n=Rr("N4","n4_reading_page"),s=As("N4");return(n||s)&&j(),`
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
          ${r.n4Reading.map(a=>nu(a,"reading")).join("")}
        </div>
      </section>
    `}function ob(e){const t=we();return`
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
          ${r.n4Listening.map(n=>nu(n,"listening")).join("")}
        </div>
      </section>
    `}function nu(e,t){const n=we(),s=t==="reading"?U().completedReading[e.id]:U().completedListening[e.id],a=t==="reading"?U().readingAnswers:U().listeningAnswers,o=t==="reading"?"n4-reading-complete":"n4-listening-complete";return`
      <article class="n4-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(f(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(c=>`<article><strong>${i(c)}</strong></article>`).join("")}</div>`:`<p class="n4-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((c,l)=>{const d=`${e.id}:${l}`,u=a?.[d],m=Array.isArray(c.options)?c.options:[];return`
            <div class="n4-question-block">
              <h3>${i(f(c.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(l)}" data-value="${g(h.value)}">${i(f(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function lb(e){const t=we(),n=r.n4FinalTest||{},s=cu(),a=U().finalTest,o=Rt(a,s),c=o.answered,l=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),j()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n4-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · Final</p>
            <h1>${i(f(n.title||{}))}</h1>
            <p>${i(f(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${i(t.backToN4)}</button>
            <button class="btn" type="button" data-action="n4-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${T(t.questions,`${c}/${s.length}`,t.finalTest,R(c,s.length))}
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
            ${vt("N4","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>cb(m,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n4-final-submit" ${r.finalTestBusy||d?"disabled":""}>${i(d?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${vt("N4","btn ghost")}
          <button class="btn ghost" type="button" data-action="n4-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function cb(e,t){const n=U().finalTest.answers?.[e.id],s=!!U().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n4-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(we().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function we(){return p()==="ru"?{title:"JLPT N4",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N4 после N5",continue:"Продолжить",review:"Повторять N4",openKanji:"Открыть список кандзи",grammarN4:"Грамматика N4",readingN4:"Чтение N4",listeningN4:"Аудирование N4",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"17 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, упражнение, письмо и повторение.",reviewPlan:"План повторения на 45 дней",day:"день",lesson:"Урок",backToN4:"К N4",n5Bridge:"N5 bridge",n5BridgeText:"Перед N4 полезно держать активной базу N5: она станет опорой для более длинных предложений.",reviewN5Base:"Повторить базу N5 перед N4",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> текст -> упражнение -> письмо -> повторение",lessonChainText:"N4 больше не живёт списком знаков: каждый знак сразу получает слово, грамматическую связку и контекст.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика держит смысл предложения.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции из примеров урока, чтобы кандзи сразу работали в предложении.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N4-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N4.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"170 кандзи N4",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"48 грамматических конструкций N4",grammarText:"Короткие рабочие карточки: функция, формула, пример и проверка понимания.",readingTitle:"Тексты для чтения N4",readingText:"Короткие тексты связывают кандзи, слова и грамматику в нормальный контекст.",listeningTitle:"Скрипты для аудирования N4",listeningText:"Диалоги можно читать вслух или использовать как основу для прослушивания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N4",finalPassed:"N4 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N4",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N4 textbook after N5",continue:"Continue",review:"Review N4",openKanji:"Open kanji list",grammarN4:"N4 grammar",readingN4:"N4 reading",listeningN4:"N4 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",reviews:"Reviews",difficult:"Difficult",srs:"Повторение",lessons:"lessons",lessonsTitle:"17 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, exercise, writing, and SRS.",reviewPlan:"45-day review plan",day:"day",lesson:"Lesson",backToN4:"To N4",n5Bridge:"N5 bridge",n5BridgeText:"Keep the N5 base active before N4; it supports longer sentences.",reviewN5Base:"Review N5 base before N4",lessonChain:"Kanji -> word -> grammar -> sentence -> text -> exercise -> writing -> SRS",lessonChainText:"N4 is not a bare list: each sign gets a word, grammar link, and context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries the sentence.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N4 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions from the lesson examples.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N4 review",reviewDescription:"Review due cards, difficult kanji, or the full N4 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"170 N4 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"48 N4 grammar constructions",grammarText:"Compact cards with function, formula, example, and check.",readingTitle:"N4 reading texts",readingText:"Short texts connect kanji, words, and grammar.",listeningTitle:"N4 listening scripts",listeningText:"Read dialogues aloud or use them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N4",finalPassed:"N4 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function ko(){r.progress.n4Course=Cc(Ki(),r.progress.n4Course||{});const e=Ye();!cn(r.progress.n4Course.currentLessonId)&&e[0]&&(r.progress.n4Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n4Course.completedLessons[s.id]);return!r.progress.n4Course.currentLessonId&&n&&(r.progress.n4Course.currentLessonId=n.id),r.progress.n4Course}function U(){return ko()}function Ye(){return r.n4Textbook?.items||[]}function cn(e){const t=String(e||"");return t&&Ye().find(n=>n.id===t||n.id===`n4-${t}`||n.id.endsWith(`-${t}`))||null}function db(){return cn(U().currentLessonId)||Ye().find(e=>!U().completedLessons[e.id])||Ye()[0]||null}function ur(e){return(e?.kanji||[]).map(t=>su(t)).filter(Boolean)}function Ge(){const e=new Set;return(r.n4KanjiCatalog||[]).map(t=>su(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function su(e){const t=String(e||""),n=r.n4KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N4")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?na(s,n):s||(n?na({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[]},n):null)}function yo(e){const t=String(e||"");return r.n4Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function Ze(e){return ar(e,e.examples)}function ub(){const e=Ge(),t=U(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{M(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of ae)if(a.startsWith("n4:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n4Meta?.kanjiCount||e.length||170,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,reviews:e.reduce((a,o)=>a+Number(M(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function ru(e){const t=U(),n=`n4:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":cn(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function pb(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function xa(e){const t=ur(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n4Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n4Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n4Meta?.rewards?.exerciseXp||9,rewardMoon:r.n4Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:L(l),kanji:l.kanji,cardId:l.id,options:ze({value:l.id,label:L(l)},t.slice(1).map(b=>({value:b.id,label:L(b)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:L(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:ze({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=Ze(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:ze({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>Ze(b).map(k=>({value:k.reading,label:k.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:f({ru:h.ru,en:h.en}),answerLabel:f({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:ze({value:f({ru:h.ru,en:h.en}),label:f({ru:h.ru,en:h.en})},n.slice(1).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),1),...o("sentence")});const v=t[3]||t[0],w=Ze(v)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ce(w)}В»?`:`Which word matches "${Ce(w)}"?`,answer:w.word||v.kanji,answerLabel:w.word||v.kanji,kanji:v.kanji,cardId:v.id,options:ze({value:w.word||v.kanji,label:w.word||v.kanji},t.flatMap(b=>Ze(b).map(k=>({value:k.word,label:k.word}))).filter(b=>b.value&&b.value!==w.word),2),...o("missing-word")});const $=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${L($)}`:`Type the kanji for: ${L($)}`,answer:$.kanji,answerLabel:$.kanji,kanji:$.kanji,cardId:$.id,options:[],...o("active-recall")});const y=yo(e.grammarFocus?.[0]);y&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:f(y.question||y.explanation),answer:y.answer,answerLabel:y.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:y.id,options:ze({value:y.answer,label:y.answer},y.options.filter(b=>b!==y.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const S=n[1]||n[0];return S&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:S.jp,answer:f({ru:S.ru,en:S.en}),answerLabel:f({ru:S.ru,en:S.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:ze({value:f({ru:S.ru,en:S.en}),label:f({ru:S.ru,en:S.en})},n.filter(b=>b.jp!==S.jp).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),c.slice(0,r.n4Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N4",lessonId:e.id}))}function ze(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||a.length>=4||(s.add(l),a.push(c))}),Ge().forEach(c=>{if(a.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),a.push(l))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function au(e){for(const t of Ye()){const n=xa(t).find(s=>s.id===e);if(n)return n}return null}function $o(e){return or("N4",U(),e)}function gb(e){const t=au(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;iu(t,s,a)}function mb(e){const t=au(e);if(!t)return;const n=document.getElementById(uu(t.id)),s=n?String(n.value||"").trim():"";iu(t,s,s===t.answer)}function iu(e,t,n){const s=U();lr("N4",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n4Meta?.rewards?.exerciseXp||9),rewardMoon:Number(e.rewardMoon||r.n4Meta?.rewards?.exerciseMoon||1),rewardKey:`n4_exercise:${e.id}`,markStudied:()=>hs(e.kanji,e.cardId),markDifficult:()=>pr(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function ou(e,t,n="review"){const s=ne(e)||Ge().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,c=a?"hard":t,l=se(M(s.id)),d=ue(l,o,c);r.progress.cards[s.id]=d,zt(l,d,c),he(),hs(s.kanji,s.id),U().srsKanji[s.kanji]=new Date().toISOString(),a?(pr(s.kanji,s.id,!1),r.progress.totalCorrect+=1,O(r.n4Meta?.rewards?.hardXp||2,1,`n4_srs_lesson_hard:${s.id}`)):Ee(t)?(pr(s.kanji,s.id),r.progress.totalWrong+=1,O(r.n4Meta?.rewards?.hardXp||2,0,`n4_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,O(t==="easy"?r.n4Meta?.rewards?.knowXp||7:r.n4Meta?.rewards?.addToSrsXp||5,1,`n4_srs:${s.id}`)),Dt(),j(),St("N4 SRS post-render effects",()=>{I(Ee(t)?"answer_wrong":"answer_correct"),q()})}function fb(e){const t=ne(e)||Ge().find(s=>String(s.id)===String(e));if(!t)return;const n=U();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},hs(t.kanji,t.id),O(9,1,`n4_writing:${t.id}`)),q(),j(),x()}function hb(e){const t=cn(e);if(!t)return;const n=U(),s=`n4:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){x();return}const a=ur(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof F=="function"&&F(w);return}const c=xa(t);if(!(c.length>0&&c.every(w=>$o(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof F=="function"&&F(w);return}ae.add(s),ur(t).forEach(w=>{hs(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const $=M(w.id);$.state==="New"&&(r.progress.cards[w.id]=ue(se($),"good"))}),(t.grammarFocus||[]).map(w=>yo(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=Ye().find(w=>w.order===t.order+1)?.id||t.id;const d=gs(),u=d.sessions[n4SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n4SessKey,d.lastUpdatedAt=w}U(),Object.keys(n.completedLessons||{}).length>=9&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"),r.progress.unlockedJlptLevels.includes("N3")||r.progress.unlockedJlptLevels.push("N3"));const h=r.n4Meta?.rewards?.lessonCompleteXp||65,v=r.n4Meta?.rewards?.lessonCompleteMoon||8;O(h,v,`n4_lesson:${t.id}`),Xe({title:`${we().lessonComplete}: ${f(t.title)}`,message:we().lessonCompleteText,xp:h,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),I("lesson_complete"),q(),j(),x()}function hs(e,t=null){if(!e)return;const n=U();as(n,e)}function pr(e,t=null,n=!0){if(e&&(U().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=M(t);s.state!=="New"&&(r.progress.cards[t]=ue(se(s),"again"))}}function vb(e,t=""){const n=r.n4Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=U();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),O(r.n4Meta?.rewards?.grammarXp||10,r.n4Meta?.rewards?.grammarMoon||1,`n4_grammar:${n.id}`),r.progress.totalCorrect+=1,I("answer_correct")):a||(r.progress.totalWrong+=1,I("answer_wrong")),he(),q(),j(),x()}function wb(e,t="0",n=""){lu("reading",e,t,n)}function bb(e,t="0",n=""){lu("listening",e,t,n)}function lu(e,t,n="0",s=""){const o=(e==="reading"?r.n4Reading:r.n4Listening).find(w=>w.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,m=U(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening;if(h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()},d&&!v[o.id]){v[o.id]=new Date().toISOString();const w=e==="reading"?r.n4Meta?.rewards?.readingXp||35:r.n4Meta?.rewards?.listeningXp||30,$=e==="reading"?r.n4Meta?.rewards?.readingMoon||4:r.n4Meta?.rewards?.listeningMoon||3;O(w,$,`n4_${e}:${o.id}`),r.progress.totalCorrect+=1,I("answer_correct")}else d||(r.progress.totalWrong+=1,I("answer_wrong"));he(),q(),j(),x()}function kb(e){const t=cn(e);t&&(U().currentLessonId=t.id,ot("N4",t.id,"n4_lesson_open"),Nt("N4",t,"n4_lesson_open"),dn(t.id))}function yb(){dn("")}function $b(e=null){e&&(U().activeReviewMode=e),dn("review")}function jb(){dn("kanji")}function Sb(){dn("grammar")}function Nb(){dn("reading")}function xb(){dn("listening")}function Ab(){dn("final-test")}function dn(e){r.route="textbooks",r.activeTextbookLevel="N4",r.activeTextbookSubroute=e||null,U().opened=!0;const t=e?`#jlpt/n4/${encodeURIComponent(e)}`:"#jlpt/n4";Pt(t),q(),j(),ie(),Ot()}function Cb(e="due"){const t=Date.now(),n=U(),s=Ge();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=M(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function cu(){const e=Ge();if(!e.length)return[];const t=r.n4FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n4FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],c=t[a%t.length],l=Ye().find(d=>d.kanji.includes(o.kanji))||Ye()[0];s.push(Lb(c,o,l,a))}return s.filter(Boolean)}function Lb(e,t,n,s){const o=Ze(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:L(t),options:ze({value:t.id,label:L(t)},Ge().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:L(l)})),s)};if(e==="reading")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:ze({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Ge().flatMap(l=>Ze(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=f({ru:c.ru,en:c.en});return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:ze({value:l,label:l},Ye().flatMap(d=>d.sentences||[]).map(d=>({value:f({ru:d.ru,en:d.en}),label:f({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ce(o),answer:l,answerLabel:l,options:ze({value:l,label:l},Ge().flatMap(d=>Ze(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=r.n4Grammar[s%Math.max(r.n4Grammar.length,1)];if(l)return{id:`n4-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${f(l.question||l.explanation)}`,answer:l.answer,answerLabel:l.answer,options:ze({value:l.answer,label:l.answer},l.options.filter(d=>d!==l.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=r.n4Reading[s%Math.max(r.n4Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n4-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||f(l.title)} ${f(d.prompt)}`,answer:d.answer,answerLabel:f((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:f(u.label||u)}))}}return e==="srs"?{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${L(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${L(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n4-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:L(t),answer:t.kanji,answerLabel:t.kanji,options:ze({value:t.kanji,label:t.kanji},Ge().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function Tb(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(U().finalTest.answers[t]=n,j(),x())}function du(e=!1){if(r.finalTestBusy)return;const t=U().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){x();return}r.finalTestBusy=!0;try{const n=cu(),s=r.n4FinalTest||{},a=we(),o=Rt(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const k=o.firstMissingId?`#${ys("n4",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N4",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:k,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},r.pendingFocus=k,j();return}let u=0;const m=[],h=[];n.forEach(k=>{const K=String(t.answers?.[k.id]||"").trim();if(K===k.answer){if(u+=1,k.kanji&&hs(k.kanji,k.cardId),k.grammarId){const D=U();D.completedGrammar[k.grammarId]=D.completedGrammar[k.grammarId]||d}}else K||h.push(k),m.push({id:k.id,kanji:k.kanji||"",answer:k.answerLabel,selected:K}),k.kanji&&pr(k.kanji,k.cardId)});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,$=!!t.passed,y=Math.max(0,m.length-h.length);let S=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=c,t.correctAnswers=u,t.incorrectAnswers=y,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(k=>k.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?$&&t.passedAt||d:t.passedAt||null,!w){const k=Number(s?.rewards?.completeXp||180),K=Number(s?.rewards?.completeMoon||35);S+=k,b+=K,O(k,K,"n4_final_complete")}if(t.passed&&!$){const k=Number(s?.rewards?.passXp||90),K=Number(s?.rewards?.passMoon||15);S+=k,b+=K,O(k,K,"n4_final_pass")}t.lastRewardXp=S,t.lastRewardMoon=b,U(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N4",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:y,unanswered:h.length,totalQuestions:n.length,rewardXp:S,rewardMoon:b,attempts:t.attempts,threshold:c,reviewAction:"n4-review",reviewAllAction:"n4-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},q(),j()}catch(n){console.error(n),F(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,x()}}function Ib(){U().finalTest=Ki().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,j(),x()}function uu(e){return`n4-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Rb(e){r.activeTextbookLevel="N3",r.activeJlptLesson="N3";const t=So();t.opened||(t.opened=!0,q(),j());const n=String(r.activeTextbookSubroute||"");if(n==="final-test")return Ub();if(n==="review")return Ob();if(n==="kanji")return Bb();if(n==="grammar")return Gb();if(n==="reading")return zb();if(n==="listening")return Jb();const s=un(n);return s?(z().currentLessonId=s.id,ot("N3",s.id,"n3_lesson_page"),Nt("N3",s,"n3_lesson_page"),Pb(e,s)):_b(e)}function _b(e){const t=Wb(),n=ge(),s=et(),a=Hb(),o=r.n3Meta||{},c=f(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N3 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(f(o.description||e.description||{}))}</p>
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
            <p>${i(c)}</p>
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
          ${wn("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${(o.n5Bridge||[]).map(l=>`<span class="pill">${i(l)}</span>`).join("")}
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
            ${s.map(l=>Mb(l)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(f((r.n3Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(l=>`<span class="pill">${i(n.day)} ${i(l.day)} · ${i(f(l.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${ms("N3")}
      </section>
    `}function Mb(e){const t=hu(e.id),n=ge();let s=e.kanji.filter(a=>z().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n3/${g(e.id)}" data-action="n3-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(f(e.title))}</h3>
        <p>${i(f(e.goal))}</p>
        <div class="n5-kanji-strip n3-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${R(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Xb(t))}</small>
      </a>
    `}function Pb(e,t){const n=ge(),s=gr(t),a=Aa(t),o=hu(t.id),c=Bn("N3",t,s);let l=o==="completed";const d=`n3:${t.id}`;ae.has(d)&&(l=!0);const u=l,m=a.filter(P=>xo(P.id)?.correct).length,h=a.length>0&&m===a.length,v=s.filter(P=>z().studiedKanji[P.kanji]).length,w=t.kanji.length,$=v>=w,y=!l&&h&&$,S=t.kanji.filter(P=>z().difficultKanji[P]).join(" · "),b=et().find(P=>P.order===t.order+1),k=pu(t),K=k?!!z().completedReading[k.id]:!1,D=ut("N3",t.id,"player"),Yn=ut("N3",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n3-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · ${i(n.lesson)} ${t.order}/37</p>
            <h1>${i(f(t.title))}</h1>
            <p>${i(f(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${i(n.backToN3)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(f(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.duration)}: ${i(t.durationMinutes||30)} ${i(n.minutes)}</span>
              ${t.grammarFocus.map(P=>`<span class="pill">${i(P)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${T(n.studiedKanji,`${Math.min(c.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,R(c.answeredCount,t.kanji.length))}
            ${T(n.exercises,`${m}/${a.length}`,n.correct,R(m,a.length))}
          </div>
        </article>

        ${sr("N3",t,s,n,{playerId:D,answerAction:"jlpt-lesson-answer",examples:P=>tt(P),sentence:P=>Kb(P,t)})}

        ${Db(t)}

        ${Eb(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(P=>`
              <article>
                <strong>${i(P.jp)}</strong>
                <span>${i(H(P.reading||""))}</span>
                <small>${i(f({ru:P.ru,en:P.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(Yn)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(P=>gu(P)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(P=>z().studiedKanji[P.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${k?`<span class="pill">${i(n.miniReadingTitle)}: ${i(K?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(S||n.none)}</span>
            </div>
            ${!l&&!y?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n3-complete-lesson" data-id="${g(t.id)}" ${u||!y?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#jlpt/n3/${g(b.id)}" data-action="n3-open-lesson" data-id="${g(b.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function pu(e){return e?.miniReadingId&&r.n3Reading.find(t=>t.id===e.miniReadingId)||null}function Eb(e){const t=ge(),n=pu(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${jo(n,"reading")}
      </section>
    `:""}function Kb(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(H(n.reading||""))}</span>
        <small>${i(f({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(ge().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Db(e){const t=ge(),n=(e.grammarFocus||[]).map(s=>No(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n3-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n3-section-grid">
          ${n.map(s=>`
            <article class="n3-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(f(s.title))}</h3>
              <p>${i(f(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(f({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n3-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(z().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function gu(e){const t=ge(),n=xo(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&ln("N3",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(f(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(ju(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(f(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n3-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${mu(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(f(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${mu(e,n)}
      </article>
    `}function mu(e,t){if(!t)return"";const n=ge(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Ob(e){const t=ge(),n=z().activeReviewMode||"due",s=uk(n);return`
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
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n3-review" data-mode="${g(a.id)}">${i(f(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>Fb(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Fb(e,t){const n=ge(),s=M(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(An(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(L(e))}</h3>
        <p>${i(tt(e)[0]?.word||e.hiragana||"")} · ${i(tt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Bb(e){const t=ge(),n=Je();return`
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
              <div class="n5-kanji-topline"><span class="pill">${a+1}/370</span><span class="pill">${i(M(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(L(s))}</h3>
              <p>${i(tt(s)[0]?.word||"")} · ${i(tt(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n3-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Gb(e){const t=ge();return`
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
          ${T(t.completedGrammar,`${Object.keys(z().completedGrammar||{}).length}/${r.n3Grammar.length}`,t.grammar,R(Object.keys(z().completedGrammar||{}).length,r.n3Grammar.length))}
          ${T(t.questions,r.n3Grammar.length,t.grammar,100)}
        </div>
        <div class="n3-section-grid">
          ${r.n3Grammar.map(n=>{const s=z().grammarResults?.[n.id];return`
              <article class="n3-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(f(n.title))}</h3>
                <p>${i(f(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(H(a.reading||""))}</span><small>${i(f({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(f(n.question))}</h4>`:""}
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
    `}function zb(e){const t=ge(),n=Rr("N3","n3_reading_page"),s=As("N3");return(n||s)&&j(),`
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
          ${r.n3Reading.map(a=>jo(a,"reading")).join("")}
        </div>
      </section>
    `}function Jb(e){const t=ge();return`
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
          ${r.n3Listening.map(n=>jo(n,"listening")).join("")}
        </div>
      </section>
    `}function jo(e,t){const n=ge(),s=t==="reading"?z().completedReading[e.id]:z().completedListening[e.id],a=t==="reading"?z().readingAnswers:z().listeningAnswers,o=t==="reading"?"n3-reading-complete":"n3-listening-complete";return`
      <article class="n3-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(f(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(c=>`<article><strong>${i(c)}</strong></article>`).join("")}</div>`:`<p class="n3-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((c,l)=>{const d=`${e.id}:${l}`,u=a?.[d],m=Array.isArray(c.options)?c.options:[];return`
            <div class="n3-question-block">
              <h3>${i(f(c.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(l)}" data-value="${g(h.value)}">${i(f(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function Ub(e){const t=ge(),n=r.n3FinalTest||{},s=yu(),a=z().finalTest,o=Rt(a,s),c=o.answered,l=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),j()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n3-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · Final</p>
            <h1>${i(f(n.title||{}))}</h1>
            <p>${i(f(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${i(t.backToN3)}</button>
            <button class="btn" type="button" data-action="n3-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${T(t.questions,`${c}/${s.length}`,t.finalTest,R(c,s.length))}
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
            ${vt("N3","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>qb(m,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n3-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${vt("N3","btn ghost")}
          <button class="btn ghost" type="button" data-action="n3-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function qb(e,t){const n=z().finalTest.answers?.[e.id],s=!!z().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n3-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(ge().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function ge(){return p()==="ru"?{title:"JLPT N3",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N3 как мост к среднему уровню",continue:"Продолжить",review:"Повторять N3",openKanji:"Открыть список кандзи",grammarN3:"Грамматика N3",readingN3:"Чтение N3",listeningN3:"Аудирование N3",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Listening",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"37 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, мини-текст, упражнения, письмо и повторение.",reviewPlan:"План повторения на 60 дней",day:"день",lesson:"Урок",backToN3:"К N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"Если база N5 и N4 дырявая, N3 будет ощущаться как стена. Сначала проверь частицы, базовые связки, условные формы и привычные повседневные конструкции.",reviewN5Base:"Повторить N5/N4 перед N3",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> абзац -> чтение -> вывод -> повторение",lessonChainText:"N3 больше не живёт списком знаков: каждый знак сразу входит в слово, грамматическую связку, мини-текст и повторение по смыслу.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, мини-чтение и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, кто, что, почему и к какому выводу ведёт короткий N3-текст.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N3-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N3.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"370 кандзи N3",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"80 грамматических конструкций N3",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном и разговорном контексте.",readingTitle:"Тексты для чтения N3",readingText:"Короткие тексты и lesson mini-readings связывают кандзи, слова, грамматику и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N3",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N3",finalPassed:"N3 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N3",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N3 textbook after N5",continue:"Continue",review:"Review N3",openKanji:"Open kanji list",grammarN3:"N3 grammar",readingN3:"N3 reading",listeningN3:"N3 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"Повторение",lessons:"lessons",lessonsTitle:"37 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, mini reading, exercises, writing, and SRS.",reviewPlan:"60-day review plan",day:"day",lesson:"Lesson",backToN3:"To N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"If the N5 and N4 base is shaky, N3 feels like a wall. Review particles, conditionals, and the everyday support grammar first.",reviewN5Base:"Review N5/N4 before N3",lessonChain:"Kanji -> word -> grammar -> sentence -> paragraph -> reading -> conclusion -> SRS",lessonChainText:"N3 is not a bare list: each sign gets a word, grammar link, mini text, and review context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, mini reading, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N3 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand who, what, why, and what conclusion the short N3 text points to.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N3 review",reviewDescription:"Review due cards, difficult kanji, or the full N3 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"370 N3 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"80 N3 grammar constructions",grammarText:"Compact cards with function, formula, example, and comprehension check.",readingTitle:"N3 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, and conclusions.",listeningTitle:"N3 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N3",finalPassed:"N3 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function So(){r.progress.n3Course=Lc(Di(),r.progress.n3Course||{});const e=et();!un(r.progress.n3Course.currentLessonId)&&e[0]&&(r.progress.n3Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n3Course.completedLessons[s.id]);return!r.progress.n3Course.currentLessonId&&n&&(r.progress.n3Course.currentLessonId=n.id),r.progress.n3Course}function z(){return So()}function et(){return r.n3Textbook?.items||[]}function un(e){const t=String(e||"");return t&&et().find(n=>n.id===t||n.id===`n3-${t}`||n.id.endsWith(`-${t}`))||null}function Hb(){return un(z().currentLessonId)||et().find(e=>!z().completedLessons[e.id])||et()[0]||null}function gr(e){return(e?.kanji||[]).map(t=>fu(t)).filter(Boolean)}function Je(){const e=new Set;return(r.n3KanjiCatalog||[]).map(t=>fu(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function fu(e){const t=String(e||""),n=r.n3KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N3")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?sa(s,n):s||(n?sa({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[]},n):null)}function No(e){const t=String(e||"");return r.n3Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function tt(e){return ar(e,e.examples)}function Wb(){const e=Je(),t=z(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{M(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of ae)if(a.startsWith("n3:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n3Meta?.kanjiCount||e.length||370,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,o)=>a+Number(M(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function hu(e){const t=z(),n=`n3:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":un(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function Xb(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Aa(e){const t=gr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n3Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n3Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n3Meta?.rewards?.exerciseXp||10,rewardMoon:r.n3Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:L(l),kanji:l.kanji,cardId:l.id,options:Ue({value:l.id,label:L(l)},t.slice(1).map(b=>({value:b.id,label:L(b)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:L(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:Ue({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=tt(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:Ue({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>tt(b).map(k=>({value:k.reading,label:k.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:f({ru:h.ru,en:h.en}),answerLabel:f({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:Ue({value:f({ru:h.ru,en:h.en}),label:f({ru:h.ru,en:h.en})},n.slice(1).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),1),...o("sentence")});const v=t[3]||t[0],w=tt(v)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ce(w)}В»?`:`Which word matches "${Ce(w)}"?`,answer:w.word||v.kanji,answerLabel:w.word||v.kanji,kanji:v.kanji,cardId:v.id,options:Ue({value:w.word||v.kanji,label:w.word||v.kanji},t.flatMap(b=>tt(b).map(k=>({value:k.word,label:k.word}))).filter(b=>b.value&&b.value!==w.word),2),...o("missing-word")});const $=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${L($)}`:`Type the kanji for: ${L($)}`,answer:$.kanji,answerLabel:$.kanji,kanji:$.kanji,cardId:$.id,options:[],...o("active-recall")});const y=No(e.grammarFocus?.[0]);y&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:f(y.question||y.explanation),answer:y.answer,answerLabel:y.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:y.id,options:Ue({value:y.answer,label:y.answer},y.options.filter(b=>b!==y.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const S=n[1]||n[0];return S&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:S.jp,answer:f({ru:S.ru,en:S.en}),answerLabel:f({ru:S.ru,en:S.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:Ue({value:f({ru:S.ru,en:S.en}),label:f({ru:S.ru,en:S.en})},n.filter(b=>b.jp!==S.jp).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),c.slice(0,r.n3Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N3",lessonId:e.id}))}function Ue(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||a.length>=4||(s.add(l),a.push(c))}),Je().forEach(c=>{if(a.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),a.push(l))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function vu(e){for(const t of et()){const n=Aa(t).find(s=>s.id===e);if(n)return n}return null}function xo(e){return or("N3",z(),e)}function Qb(e){const t=vu(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;wu(t,s,a)}function Vb(e){const t=vu(e);if(!t)return;const n=document.getElementById(ju(t.id)),s=n?String(n.value||"").trim():"";wu(t,s,s===t.answer)}function wu(e,t,n){const s=z();lr("N3",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n3Meta?.rewards?.exerciseXp||10),rewardMoon:Number(e.rewardMoon||r.n3Meta?.rewards?.exerciseMoon||1),rewardKey:`n3_exercise:${e.id}`,markStudied:()=>vs(e.kanji,e.cardId),markDifficult:()=>mr(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function bu(e,t,n="review"){const s=ne(e)||Je().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,c=a?"hard":t,l=se(M(s.id)),d=ue(l,o,c);r.progress.cards[s.id]=d,zt(l,d,c),he(),vs(s.kanji,s.id),z().srsKanji[s.kanji]=new Date().toISOString(),a?(mr(s.kanji,s.id,!1),r.progress.totalCorrect+=1,O(r.n3Meta?.rewards?.hardXp||2,1,`n3_srs_lesson_hard:${s.id}`)):Ee(t)?(mr(s.kanji,s.id),r.progress.totalWrong+=1,O(r.n3Meta?.rewards?.hardXp||2,0,`n3_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,O(t==="easy"?r.n3Meta?.rewards?.knowXp||8:r.n3Meta?.rewards?.addToSrsXp||6,1,`n3_srs:${s.id}`)),Dt(),j(),St("N3 SRS post-render effects",()=>{I(Ee(t)?"answer_wrong":"answer_correct"),q()})}function Yb(e){const t=ne(e)||Je().find(s=>String(s.id)===String(e));if(!t)return;const n=z();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},vs(t.kanji,t.id),O(9,1,`n3_writing:${t.id}`)),q(),j(),x()}function Zb(e){const t=un(e);if(!t)return;const n=z(),s=`n3:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){x();return}const a=gr(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof F=="function"&&F(w);return}const c=Aa(t);if(!(c.length>0&&c.every(w=>xo(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof F=="function"&&F(w);return}ae.add(s),gr(t).forEach(w=>{vs(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const $=M(w.id);$.state==="New"&&(r.progress.cards[w.id]=ue(se($),"good"))}),(t.grammarFocus||[]).map(w=>No(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=et().find(w=>w.order===t.order+1)?.id||t.id;const d=gs(),u=d.sessions[n3SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n3SessKey,d.lastUpdatedAt=w}z(),Object.keys(n.completedLessons||{}).length>=37&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],["N3","N2"].forEach(w=>{r.progress.unlockedJlptLevels.includes(w)||r.progress.unlockedJlptLevels.push(w)}));const h=r.n3Meta?.rewards?.lessonCompleteXp||75,v=r.n3Meta?.rewards?.lessonCompleteMoon||9;O(h,v,`n3_lesson:${t.id}`),Xe({title:`${ge().lessonComplete}: ${f(t.title)}`,message:ge().lessonCompleteText,xp:h,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),I("lesson_complete"),q(),j(),x()}function vs(e,t=null){if(!e)return;const n=z();as(n,e)}function mr(e,t=null,n=!0){if(e&&(z().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=M(t);s.state!=="New"&&(r.progress.cards[t]=ue(se(s),"again"))}}function ek(e,t=""){const n=r.n3Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=z();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),O(r.n3Meta?.rewards?.grammarXp||11,r.n3Meta?.rewards?.grammarMoon||1,`n3_grammar:${n.id}`),r.progress.totalCorrect+=1,I("answer_correct")):a||(r.progress.totalWrong+=1,I("answer_wrong")),he(),q(),j(),x()}function tk(e,t="0",n=""){ku("reading",e,t,n)}function nk(e,t="0",n=""){ku("listening",e,t,n)}function ku(e,t,n="0",s=""){const o=(e==="reading"?r.n3Reading:r.n3Listening).find(y=>y.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,m=z(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening,w=!!v[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const $=(o.questions||[]).every((y,S)=>h[`${o.id}:${S}`]?.correct);if(d?(r.progress.totalCorrect+=1,I("answer_correct")):(r.progress.totalWrong+=1,I("answer_wrong")),$&&!w){v[o.id]=new Date().toISOString();const y=e==="reading"?r.n3Meta?.rewards?.readingXp||38:r.n3Meta?.rewards?.listeningXp||34,S=e==="reading"?r.n3Meta?.rewards?.readingMoon||4:r.n3Meta?.rewards?.listeningMoon||4;O(y,S,`n3_${e}:${o.id}`)}he(),q(),j(),x()}function sk(e){const t=un(e);t&&(z().currentLessonId=t.id,ot("N3",t.id,"n3_lesson_open"),Nt("N3",t,"n3_lesson_open"),pn(t.id))}function rk(){pn("")}function ak(e=null){e&&(z().activeReviewMode=e),pn("review")}function ik(){pn("kanji")}function ok(){pn("grammar")}function lk(){pn("reading")}function ck(){pn("listening")}function dk(){pn("final-test")}function pn(e){r.route="textbooks",r.activeTextbookLevel="N3",r.activeTextbookSubroute=e||null,z().opened=!0;const t=e?`#jlpt/n3/${encodeURIComponent(e)}`:"#jlpt/n3";Pt(t),q(),j(),ie(),Ot()}function uk(e="due"){const t=Date.now(),n=z(),s=Je();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=M(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function yu(){const e=Je();if(!e.length)return[];const t=r.n3FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n3FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],c=t[a%t.length],l=et().find(d=>d.kanji.includes(o.kanji))||et()[0];s.push(pk(c,o,l,a))}return s.filter(Boolean)}function pk(e,t,n,s){const o=tt(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:L(t),options:Ue({value:t.id,label:L(t)},Je().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:L(l)})),s)};if(e==="reading")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:Ue({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Je().flatMap(l=>tt(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=f({ru:c.ru,en:c.en});return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:Ue({value:l,label:l},et().flatMap(d=>d.sentences||[]).map(d=>({value:f({ru:d.ru,en:d.en}),label:f({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ce(o),answer:l,answerLabel:l,options:Ue({value:l,label:l},Je().flatMap(d=>tt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=r.n3Grammar[s%Math.max(r.n3Grammar.length,1)];if(l)return{id:`n3-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${f(l.question||l.explanation)}`,answer:l.answer,answerLabel:l.answer,options:Ue({value:l.answer,label:l.answer},l.options.filter(d=>d!==l.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=r.n3Reading[s%Math.max(r.n3Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n3-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||f(l.title)} ${f(d.prompt)}`,answer:d.answer,answerLabel:f((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:f(u.label||u)}))}}return e==="srs"?{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${L(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${L(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n3-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:L(t),answer:t.kanji,answerLabel:t.kanji,options:Ue({value:t.kanji,label:t.kanji},Je().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function gk(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(z().finalTest.answers[t]=n,j(),x())}function $u(e=!1){if(r.finalTestBusy)return;const t=z().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){x();return}r.finalTestBusy=!0;try{const n=yu(),s=r.n3FinalTest||{},a=ge(),o=Rt(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const k=o.firstMissingId?`#${ys("n3",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N3",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:k,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},r.pendingFocus=k,j();return}let u=0;const m=[],h=[];n.forEach(k=>{const K=String(t.answers?.[k.id]||"").trim();if(K===k.answer){if(u+=1,k.kanji&&vs(k.kanji,k.cardId),k.grammarId){const D=z();D.completedGrammar[k.grammarId]=D.completedGrammar[k.grammarId]||d}}else K||h.push(k),m.push({id:k.id,kanji:k.kanji||"",answer:k.answerLabel,selected:K}),k.kanji&&mr(k.kanji,k.cardId)});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,$=!!t.passed,y=Math.max(0,m.length-h.length);let S=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=c,t.correctAnswers=u,t.incorrectAnswers=y,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(k=>k.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?$&&t.passedAt||d:t.passedAt||null,!w){const k=Number(s?.rewards?.completeXp||220),K=Number(s?.rewards?.completeMoon||40);S+=k,b+=K,O(k,K,"n3_final_complete")}if(t.passed&&!$){const k=Number(s?.rewards?.passXp||110),K=Number(s?.rewards?.passMoon||18);S+=k,b+=K,O(k,K,"n3_final_pass")}t.lastRewardXp=S,t.lastRewardMoon=b,z(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N3",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:y,unanswered:h.length,totalQuestions:n.length,rewardXp:S,rewardMoon:b,attempts:t.attempts,threshold:c,reviewAction:"n3-review",reviewAllAction:"n3-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},q(),j()}catch(n){console.error(n),F(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,x()}}function mk(){z().finalTest=Di().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,j(),x()}function ju(e){return`n3-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function fk(e){r.activeTextbookLevel="N2",r.activeJlptLesson="N2";const t=Co();t.opened||(t.opened=!0,q(),j());const n=String(r.activeTextbookSubroute||"");if(n==="final-test")return Ck();if(n==="review")return $k();if(n==="kanji")return Sk();if(n==="grammar")return Nk();if(n==="reading")return xk();if(n==="listening")return Ak();const s=gn(n);return s?(J().currentLessonId=s.id,ot("N2",s.id,"n2_lesson_page"),Nt("N2",s,"n2_lesson_page"),wk(e,s)):hk(e)}function hk(e){const t=Ik(),n=me(),s=nt(),a=Tk(),o=r.n2Meta||{},c=f(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N2 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(f(o.description||e.description||{}))}</p>
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
            <p>${i(c)}</p>
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
          ${wn("eva","happy","lessonComplete","n5-hero-mascot")}
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
            ${(o.n5Bridge||[]).map(l=>`<span class="pill">${i(l)}</span>`).join("")}
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
            ${s.map(l=>vk(l)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(f((r.n2Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(l=>`<span class="pill">${i(n.day)} ${i(l.day)} · ${i(f(l.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${ms("N2")}
      </section>
    `}function vk(e){const t=Cu(e.id),n=me();let s=e.kanji.filter(a=>J().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n2/${g(e.id)}" data-action="n2-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(f(e.title))}</h3>
        <p>${i(f(e.goal))}</p>
        <div class="n5-kanji-strip n2-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${R(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Rk(t))}</small>
      </a>
    `}function wk(e,t){const n=me(),s=fr(t),a=Ca(t),o=Cu(t.id),c=Bn("N2",t,s);let l=o==="completed";const d=`n2:${t.id}`;ae.has(d)&&(l=!0);const u=l,m=a.filter(P=>To(P.id)?.correct).length,h=a.length>0&&m===a.length,v=s.filter(P=>J().studiedKanji[P.kanji]).length,w=t.kanji.length,$=v>=w,y=!l&&h&&$,S=t.kanji.filter(P=>J().difficultKanji[P]).join(" · "),b=nt().find(P=>P.order===t.order+1),k=Su(t),K=k?!!J().completedReading[k.id]:!1,D=ut("N2",t.id,"player"),Yn=ut("N2",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n2-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · ${i(n.lesson)} ${t.order}/38</p>
            <h1>${i(f(t.title))}</h1>
            <p>${i(f(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${i(n.backToN2)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(f(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.duration)}: ${i(t.durationMinutes||30)} ${i(n.minutes)}</span>
              ${t.grammarFocus.map(P=>`<span class="pill">${i(P)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${T(n.studiedKanji,`${Math.min(c.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,R(c.answeredCount,t.kanji.length))}
            ${T(n.exercises,`${m}/${a.length}`,n.correct,R(m,a.length))}
          </div>
        </article>

        ${sr("N2",t,s,n,{playerId:D,answerAction:"jlpt-lesson-answer",examples:P=>st(P),sentence:P=>kk(P,t)})}

        ${yk(t)}

        ${bk(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(P=>`
              <article>
                <strong>${i(P.jp)}</strong>
                <span>${i(H(P.reading||""))}</span>
                <small>${i(f({ru:P.ru,en:P.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(Yn)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(P=>Nu(P)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(P=>J().studiedKanji[P.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${k?`<span class="pill">${i(n.miniReadingTitle)}: ${i(K?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(S||n.none)}</span>
            </div>
            ${!l&&!y?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n2-complete-lesson" data-id="${g(t.id)}" ${u||!y?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#jlpt/n2/${g(b.id)}" data-action="n2-open-lesson" data-id="${g(b.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function Su(e){return e?.miniReadingId&&r.n2Reading.find(t=>t.id===e.miniReadingId)||null}function bk(e){const t=me(),n=Su(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Ao(n,"reading")}
      </section>
    `:""}function kk(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(H(n.reading||""))}</span>
        <small>${i(f({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(me().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function yk(e){const t=me(),n=(e.grammarFocus||[]).map(s=>Lo(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n2-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n2-section-grid">
          ${n.map(s=>`
            <article class="n2-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(f(s.title))}</h3>
              <p>${i(f(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(f({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n2-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(J().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function Nu(e){const t=me(),n=To(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&ln("N2",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(f(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(Pu(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(f(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n2-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${xu(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(f(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${xu(e,n)}
      </article>
    `}function xu(e,t){if(!t)return"";const n=me(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function $k(e){const t=me(),n=J().activeReviewMode||"due",s=Wk(n);return`
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
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n2-review" data-mode="${g(a.id)}">${i(f(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>jk(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function jk(e,t){const n=me(),s=M(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(An(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(L(e))}</h3>
        <p>${i(st(e)[0]?.word||e.hiragana||"")} · ${i(st(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Sk(e){const t=me(),n=qe();return`
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
              <div class="n5-kanji-topline"><span class="pill">${a+1}/380</span><span class="pill">${i(M(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(L(s))}</h3>
              <p>${i(st(s)[0]?.word||"")} · ${i(st(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n2-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Nk(e){const t=me();return`
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
          ${T(t.completedGrammar,`${Object.keys(J().completedGrammar||{}).length}/${r.n2Grammar.length}`,t.grammar,R(Object.keys(J().completedGrammar||{}).length,r.n2Grammar.length))}
          ${T(t.questions,r.n2Grammar.length,t.grammar,100)}
        </div>
        <div class="n2-section-grid">
          ${r.n2Grammar.map(n=>{const s=J().grammarResults?.[n.id];return`
              <article class="n2-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(f(n.title))}</h3>
                <p>${i(f(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(H(a.reading||""))}</span><small>${i(f({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(f(n.question))}</h4>`:""}
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
    `}function xk(e){const t=me(),n=Rr("N2","n2_reading_page"),s=As("N2");return(n||s)&&j(),`
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
          ${r.n2Reading.map(a=>Ao(a,"reading")).join("")}
        </div>
      </section>
    `}function Ak(e){const t=me();return`
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
          ${r.n2Listening.map(n=>Ao(n,"listening")).join("")}
        </div>
      </section>
    `}function Ao(e,t){const n=me(),s=t==="reading"?J().completedReading[e.id]:J().completedListening[e.id],a=t==="reading"?J().readingAnswers:J().listeningAnswers,o=t==="reading"?"n2-reading-complete":"n2-listening-complete";return`
      <article class="n2-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(f(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(c=>`<article><strong>${i(c)}</strong></article>`).join("")}</div>`:`<p class="n2-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((c,l)=>{const d=`${e.id}:${l}`,u=a?.[d],m=Array.isArray(c.options)?c.options:[];return`
            <div class="n2-question-block">
              <h3>${i(f(c.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(l)}" data-value="${g(h.value)}">${i(f(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function Ck(e){const t=me(),n=r.n2FinalTest||{},s=_u(),a=J().finalTest,o=Rt(a,s),c=o.answered,l=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),j()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n2-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · Final</p>
            <h1>${i(f(n.title||{}))}</h1>
            <p>${i(f(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${i(t.backToN2)}</button>
            <button class="btn" type="button" data-action="n2-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${T(t.questions,`${c}/${s.length}`,t.finalTest,R(c,s.length))}
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
            ${vt("N2","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>Lk(m,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n2-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${vt("N2","btn ghost")}
          <button class="btn ghost" type="button" data-action="n2-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Lk(e,t){const n=J().finalTest.answers?.[e.id],s=!!J().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n2-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(me().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function me(){return p()==="ru"?{title:"JLPT N2",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N2: абзацы, аргументы, выводы и позиция автора",continue:"Продолжить",review:"Повторять N2",openKanji:"Открыть список кандзи",grammarN2:"Грамматика N2",readingN2:"Чтение N2",listeningN2:"Аудирование N2",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"38 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, абзац, авторскую позицию, вывод, письмо и повторение.",reviewPlan:"План повторения на 90 дней",day:"день",lesson:"Урок",backToN2:"К N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"Если база N5, N4 или N3 дырявая, N2 будет ощущаться как стена. Перед стартом проверь частицы, связки, условные формы, N3-грамматику и навык видеть причину, уступку и вывод в абзаце.",reviewN5Base:"Повторить N5/N4/N3 перед N2",lessonChain:"Кандзи -> слово -> грамматика -> абзац -> позиция автора -> вывод -> повторение",lessonChainText:"N2 больше не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, о чём текст, где причина, где уступка, что противопоставлено и к какому выводу ведёт короткий N2-абзац.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N2-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N2.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"380 кандзи N2",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"120 грамматических конструкций N2",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе и живом контексте.",readingTitle:"Тексты для чтения N2",readingText:"Короткие тексты и mini-readings уроков связывают кандзи, слова, грамматику, авторскую позицию и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N2",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N2",finalPassed:"N2 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N2",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N2 textbook: paragraphs, arguments, conclusions, and author stance",continue:"Continue",review:"Review N2",openKanji:"Open kanji list",grammarN2:"N2 grammar",readingN2:"N2 reading",listeningN2:"N2 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"38 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, paragraph logic, author stance, writing, and SRS.",reviewPlan:"90-day review plan",day:"day",lesson:"Lesson",backToN2:"To N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"If the N5, N4, or N3 base is shaky, N2 feels like a wall. Review particles, support grammar, N3 connectors, and the habit of spotting cause, concession, and conclusion in a paragraph.",reviewN5Base:"Review N5/N4/N3 before N2",lessonChain:"Kanji -> word -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N2 is not a bare list: each sign gets a word, a formal link, a mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N2 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N2 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N2 review",reviewDescription:"Review due cards, difficult kanji, or the full N2 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"380 N2 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"120 N2 grammar constructions",grammarText:"Compact cards with function, formula, example, and a comprehension check for practical written Japanese.",readingTitle:"N2 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N2 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N2",finalPassed:"N2 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Co(){r.progress.n2Course=Tc(Oi(),r.progress.n2Course||{});const e=nt();!gn(r.progress.n2Course.currentLessonId)&&e[0]&&(r.progress.n2Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n2Course.completedLessons[s.id]);return!r.progress.n2Course.currentLessonId&&n&&(r.progress.n2Course.currentLessonId=n.id),r.progress.n2Course}function J(){return Co()}function nt(){return r.n2Textbook?.items||[]}function gn(e){const t=String(e||"");return t&&nt().find(n=>n.id===t||n.id===`n2-${t}`||n.id.endsWith(`-${t}`))||null}function Tk(){return gn(J().currentLessonId)||nt().find(e=>!J().completedLessons[e.id])||nt()[0]||null}function fr(e){return(e?.kanji||[]).map(t=>Au(t)).filter(Boolean)}function qe(){const e=new Set;return(r.n2KanjiCatalog||[]).map(t=>Au(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Au(e){const t=String(e||""),n=r.n2KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N2")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?ra(s,n):s||(n?ra({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[]},n):null)}function Lo(e){const t=String(e||"");return r.n2Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function st(e){return ar(e,e.examples)}function Ik(){const e=qe(),t=J(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{M(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of ae)if(a.startsWith("n2:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n2Meta?.kanjiCount||e.length||380,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,o)=>a+Number(M(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Cu(e){const t=J(),n=`n2:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":gn(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function Rk(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Ca(e){const t=fr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n2Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n2Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n2Meta?.rewards?.exerciseXp||11,rewardMoon:r.n2Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:L(l),kanji:l.kanji,cardId:l.id,options:He({value:l.id,label:L(l)},t.slice(1).map(b=>({value:b.id,label:L(b)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:L(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:He({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=st(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:He({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>st(b).map(k=>({value:k.reading,label:k.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:f({ru:h.ru,en:h.en}),answerLabel:f({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:He({value:f({ru:h.ru,en:h.en}),label:f({ru:h.ru,en:h.en})},n.slice(1).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),1),...o("sentence")});const v=t[3]||t[0],w=st(v)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ce(w)}В»?`:`Which word matches "${Ce(w)}"?`,answer:w.word||v.kanji,answerLabel:w.word||v.kanji,kanji:v.kanji,cardId:v.id,options:He({value:w.word||v.kanji,label:w.word||v.kanji},t.flatMap(b=>st(b).map(k=>({value:k.word,label:k.word}))).filter(b=>b.value&&b.value!==w.word),2),...o("missing-word")});const $=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${L($)}`:`Type the kanji for: ${L($)}`,answer:$.kanji,answerLabel:$.kanji,kanji:$.kanji,cardId:$.id,options:[],...o("active-recall")});const y=Lo(e.grammarFocus?.[0]);y&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:f(y.question||y.explanation),answer:y.answer,answerLabel:y.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:y.id,options:He({value:y.answer,label:y.answer},y.options.filter(b=>b!==y.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const S=n[1]||n[0];return S&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:S.jp,answer:f({ru:S.ru,en:S.en}),answerLabel:f({ru:S.ru,en:S.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:He({value:f({ru:S.ru,en:S.en}),label:f({ru:S.ru,en:S.en})},n.filter(b=>b.jp!==S.jp).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),c.slice(0,r.n2Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N2",lessonId:e.id}))}function He(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||a.length>=4||(s.add(l),a.push(c))}),qe().forEach(c=>{if(a.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),a.push(l))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function Lu(e){for(const t of nt()){const n=Ca(t).find(s=>s.id===e);if(n)return n}return null}function To(e){return or("N2",J(),e)}function _k(e){const t=Lu(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Tu(t,s,a)}function Mk(e){const t=Lu(e);if(!t)return;const n=document.getElementById(Pu(t.id)),s=n?String(n.value||"").trim():"";Tu(t,s,s===t.answer)}function Tu(e,t,n){const s=J();lr("N2",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n2Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||r.n2Meta?.rewards?.exerciseMoon||1),rewardKey:`n2_exercise:${e.id}`,markStudied:()=>ws(e.kanji,e.cardId),markDifficult:()=>hr(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Iu(e,t,n="review"){const s=ne(e)||qe().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,c=a?"hard":t,l=se(M(s.id)),d=ue(l,o,c);r.progress.cards[s.id]=d,zt(l,d,c),he(),ws(s.kanji,s.id),J().srsKanji[s.kanji]=new Date().toISOString(),a?(hr(s.kanji,s.id,!1),r.progress.totalCorrect+=1,O(r.n2Meta?.rewards?.hardXp||2,1,`n2_srs_lesson_hard:${s.id}`)):Ee(t)?(hr(s.kanji,s.id),r.progress.totalWrong+=1,O(r.n2Meta?.rewards?.hardXp||2,0,`n2_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,O(t==="easy"?r.n2Meta?.rewards?.knowXp||9:r.n2Meta?.rewards?.addToSrsXp||7,1,`n2_srs:${s.id}`)),Dt(),j(),St("N2 SRS post-render effects",()=>{I(Ee(t)?"answer_wrong":"answer_correct"),q()})}function Pk(e){const t=ne(e)||qe().find(s=>String(s.id)===String(e));if(!t)return;const n=J();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},ws(t.kanji,t.id),O(9,1,`n2_writing:${t.id}`)),q(),j(),x()}function Ek(e){const t=gn(e);if(!t)return;const n=J(),s=`n2:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){x();return}const a=fr(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof F=="function"&&F(w);return}const c=Ca(t);if(!(c.length>0&&c.every(w=>To(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof F=="function"&&F(w);return}ae.add(s),fr(t).forEach(w=>{ws(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const $=M(w.id);$.state==="New"&&(r.progress.cards[w.id]=ue(se($),"good"))}),(t.grammarFocus||[]).map(w=>Lo(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=nt().find(w=>w.order===t.order+1)?.id||t.id;const d=gs(),u=d.sessions[n2SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n2SessKey,d.lastUpdatedAt=w}J(),Object.keys(n.completedLessons||{}).length>=38&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],["N2","N1"].forEach(w=>{r.progress.unlockedJlptLevels.includes(w)||r.progress.unlockedJlptLevels.push(w)}));const h=r.n2Meta?.rewards?.lessonCompleteXp||85,v=r.n2Meta?.rewards?.lessonCompleteMoon||10;O(h,v,`n2_lesson:${t.id}`),Xe({title:`${me().lessonComplete}: ${f(t.title)}`,message:me().lessonCompleteText,xp:h,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),I("lesson_complete"),q(),j(),x()}function ws(e,t=null){if(!e)return;const n=J();as(n,e)}function hr(e,t=null,n=!0){if(e&&(J().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=M(t);s.state!=="New"&&(r.progress.cards[t]=ue(se(s),"again"))}}function Kk(e,t=""){const n=r.n2Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=J();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),O(r.n2Meta?.rewards?.grammarXp||12,r.n2Meta?.rewards?.grammarMoon||1,`n2_grammar:${n.id}`),r.progress.totalCorrect+=1,I("answer_correct")):a||(r.progress.totalWrong+=1,I("answer_wrong")),he(),q(),j(),x()}function Dk(e,t="0",n=""){Ru("reading",e,t,n)}function Ok(e,t="0",n=""){Ru("listening",e,t,n)}function Ru(e,t,n="0",s=""){const o=(e==="reading"?r.n2Reading:r.n2Listening).find(y=>y.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,m=J(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening,w=!!v[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const $=(o.questions||[]).every((y,S)=>h[`${o.id}:${S}`]?.correct);if(d?(r.progress.totalCorrect+=1,I("answer_correct")):(r.progress.totalWrong+=1,I("answer_wrong")),$&&!w){v[o.id]=new Date().toISOString();const y=e==="reading"?r.n2Meta?.rewards?.readingXp||42:r.n2Meta?.rewards?.listeningXp||38,S=e==="reading"?r.n2Meta?.rewards?.readingMoon||4:r.n2Meta?.rewards?.listeningMoon||4;O(y,S,`n2_${e}:${o.id}`)}he(),q(),j(),x()}function Fk(e){const t=gn(e);t&&(J().currentLessonId=t.id,ot("N2",t.id,"n2_lesson_open"),Nt("N2",t,"n2_lesson_open"),mn(t.id))}function Bk(){mn("")}function Gk(e=null){e&&(J().activeReviewMode=e),mn("review")}function zk(){mn("kanji")}function Jk(){mn("grammar")}function Uk(){mn("reading")}function qk(){mn("listening")}function Hk(){mn("final-test")}function mn(e){r.route="textbooks",r.activeTextbookLevel="N2",r.activeTextbookSubroute=e||null,J().opened=!0;const t=e?`#jlpt/n2/${encodeURIComponent(e)}`:"#jlpt/n2";Pt(t),q(),j(),ie(),Ot()}function Wk(e="due"){const t=Date.now(),n=J(),s=qe();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=M(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function _u(){const e=qe();if(!e.length)return[];const t=r.n2FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n2FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],c=t[a%t.length],l=nt().find(d=>d.kanji.includes(o.kanji))||nt()[0];s.push(Xk(c,o,l,a))}return s.filter(Boolean)}function Xk(e,t,n,s){const o=st(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:L(t),options:He({value:t.id,label:L(t)},qe().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:L(l)})),s)};if(e==="reading")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:He({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},qe().flatMap(l=>st(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=f({ru:c.ru,en:c.en});return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:He({value:l,label:l},nt().flatMap(d=>d.sentences||[]).map(d=>({value:f({ru:d.ru,en:d.en}),label:f({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ce(o),answer:l,answerLabel:l,options:He({value:l,label:l},qe().flatMap(d=>st(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=r.n2Grammar[s%Math.max(r.n2Grammar.length,1)];if(l)return{id:`n2-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${f(l.question||l.explanation)}`,answer:l.answer,answerLabel:l.answer,options:He({value:l.answer,label:l.answer},l.options.filter(d=>d!==l.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=r.n2Reading[s%Math.max(r.n2Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n2-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||f(l.title)} ${f(d.prompt)}`,answer:d.answer,answerLabel:f((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:f(u.label||u)}))}}return e==="srs"?{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${L(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${L(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n2-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:L(t),answer:t.kanji,answerLabel:t.kanji,options:He({value:t.kanji,label:t.kanji},qe().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function Qk(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(J().finalTest.answers[t]=n,j(),x())}function Mu(e=!1){if(r.finalTestBusy)return;const t=J().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){x();return}r.finalTestBusy=!0;try{const n=_u(),s=r.n2FinalTest||{},a=me(),o=Rt(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const k=o.firstMissingId?`#${ys("n2",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N2",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:k,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},r.pendingFocus=k,j();return}let u=0;const m=[],h=[];n.forEach(k=>{const K=String(t.answers?.[k.id]||"").trim();if(K===k.answer){if(u+=1,k.kanji&&ws(k.kanji,k.cardId),k.grammarId){const D=J();D.completedGrammar[k.grammarId]=D.completedGrammar[k.grammarId]||d}}else K||h.push(k),m.push({id:k.id,kanji:k.kanji||"",answer:k.answerLabel,selected:K}),k.kanji&&hr(k.kanji,k.cardId)});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,$=!!t.passed,y=Math.max(0,m.length-h.length);let S=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=c,t.correctAnswers=u,t.incorrectAnswers=y,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(k=>k.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?$&&t.passedAt||d:t.passedAt||null,!w){const k=Number(s?.rewards?.completeXp||220),K=Number(s?.rewards?.completeMoon||40);S+=k,b+=K,O(k,K,"n2_final_complete")}if(t.passed&&!$){const k=Number(s?.rewards?.passXp||110),K=Number(s?.rewards?.passMoon||18);S+=k,b+=K,O(k,K,"n2_final_pass")}t.lastRewardXp=S,t.lastRewardMoon=b,J(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N2",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:y,unanswered:h.length,totalQuestions:n.length,rewardXp:S,rewardMoon:b,attempts:t.attempts,threshold:c,reviewAction:"n2-review",reviewAllAction:"n2-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},q(),j()}catch(n){console.error(n),F(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,x()}}function Vk(){J().finalTest=Oi().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,j(),x()}function Pu(e){return`n2-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Yk(e){r.activeTextbookLevel="N1",r.activeJlptLesson="N1";const t=La();t.opened||(t.opened=!0,q(),j());const n=String(r.activeTextbookSubroute||"");if(n==="final-test")return py();if(n==="review")return iy();if(n==="kanji")return ly();if(n==="grammar")return cy();if(n==="reading")return dy();if(n==="listening")return uy();const s=zn(n);return s?(Y().currentLessonId=s.id,ot("N1",s.id,"n1_lesson_page"),Nt("N1",s,"n1_lesson_page"),ty(e,s)):Zk(e)}function Zk(e){const t=fy(),n=fe(),s=rt(),a=my(),o=r.n1Meta||{},c=f(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n1-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N1 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(f(o.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <a class="btn ghost" href="${g(o.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N1_textbook_flashkanji_space.pdf" target="_blank" rel="noopener">${i(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero n1-hero">
          <div class="n5-hero-copy">
            <span class="pill">${i(o.kanjiCount||1047)} ${i(n.kanji)} · ${i(o.grammarCount||r.n1Grammar.length||142)} ${i(n.grammar)}</span>
            <h2>${i(n.courseMap)}</h2>
            <p>${i(c)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#jlpt/n1/${g(a?.id||"bulk-n1-01")}" data-action="n1-open-lesson" data-id="${g(a?.id||"bulk-n1-01")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n1-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n1-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n1-grammar">${i(n.grammarN1)}</button>
              <button class="btn ghost" type="button" data-action="n1-reading">${i(n.readingN1)}</button>
              <button class="btn ghost" type="button" data-action="n1-listening">${i(n.listeningN1)}</button>
              <button class="btn ghost" type="button" data-action="n1-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${wn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${T(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,R(t.studied,t.total))}
          ${T(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,R(t.completedLessons,s.length))}
          ${T(n.completedGrammar,`${t.completedGrammar}/${r.n1Meta?.grammarCount||r.n1Grammar.length}`,n.grammar,R(t.completedGrammar,r.n1Meta?.grammarCount||r.n1Grammar.length))}
          ${T(n.completedReading,`${t.completedReading}/${r.n1Meta?.readingCount||r.n1Reading.length}`,n.readingN1,R(t.completedReading,r.n1Meta?.readingCount||r.n1Reading.length))}
          ${T(n.completedListening,`${t.completedListening}/${r.n1Meta?.listeningCount||r.n1Listening.length}`,n.listeningN1,R(t.completedListening,r.n1Meta?.listeningCount||r.n1Listening.length))}
          ${T(n.reviews,t.reviews,n.srs,R(t.reviews,Math.max(t.total,1)))}
        </div>

        <section class="n5-panel n1-bridge">
          <div>
            <h2>${i(n.n5Bridge)}</h2>
            <p>${i(n.n5BridgeText)}</p>
          </div>
          <div class="n1-bridge-grid">
            ${(o.n5Bridge||[]).map(l=>`<span class="pill">${i(l)}</span>`).join("")}
          </div>
          <div class="textbook-actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${i(n.reviewN5Base)}</button>
          </div>
        </section>

        <section class="n5-panel">
          <div>
            <h2>${i(n.lessonsTitle)}</h2>
            <p>${i(n.lessonsDescription)}</p>
          </div>
          <div class="n5-lesson-grid">
            ${s.map(l=>ey(l)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(f((r.n1Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(l=>`<span class="pill">${i(n.day)} ${i(l.day)} · ${i(f(l.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${ms("N1")}
      </section>
    `}function ey(e){const t=Ou(e.id),n=fe();let s=e.kanji.filter(a=>Y().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n1/${g(e.id)}" data-action="n1-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(f(e.title))}</h3>
        <p>${i(f(e.goal))}</p>
        <div class="n5-kanji-strip n1-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${R(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(hy(t))}</small>
      </a>
    `}function ty(e,t){const n=fe(),s=Ta(t),a=Ia(t),o=Ou(t.id),c=Bn("N1",t,s);let l=o==="completed";const d=`n1:${t.id}`;ae.has(d)&&(l=!0);const u=l,m=a.filter(P=>_o(P.id)?.correct).length,h=a.length>0&&m===a.length,v=s.filter(P=>Y().studiedKanji[P.kanji]).length,w=t.kanji.length,$=v>=w,y=!l&&h&&$,S=t.kanji.filter(P=>Y().difficultKanji[P]).join(" · "),b=rt().find(P=>P.order===t.order+1),k=Eu(t),K=k?!!Y().completedReading[k.id]:!1,D=ut("N1",t.id,"player"),Yn=ut("N1",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n1-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N1 · ${i(n.lesson)} ${t.order}/53</p>
            <h1>${i(f(t.title))}</h1>
            <p>${i(f(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n1-overview">${i(n.backToN1)}</button>
            <button class="btn" type="button" data-action="n1-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n1-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(f(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.duration)}: ${i(t.durationMinutes||30)} ${i(n.minutes)}</span>
              ${t.grammarFocus.map(P=>`<span class="pill">${i(P)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${T(n.studiedKanji,`${Math.min(c.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,R(c.answeredCount,t.kanji.length))}
            ${T(n.exercises,`${m}/${a.length}`,n.correct,R(m,a.length))}
          </div>
        </article>

        ${sr("N1",t,s,n,{playerId:D,answerAction:"jlpt-lesson-answer",examples:P=>at(P),sentence:P=>sy(P,t)})}

        ${ry(t)}

        ${ny(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(P=>`
              <article>
                <strong>${i(P.jp)}</strong>
                <span>${i(H(P.reading||""))}</span>
                <small>${i(f({ru:P.ru,en:P.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(Yn)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(P=>ay(P)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${l?"is-complete":""}">
          <div>
            <h2>${i(l?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(l?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(P=>Y().studiedKanji[P.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${k?`<span class="pill">${i(n.miniReadingTitle)}: ${i(K?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(S||n.none)}</span>
            </div>
            ${!l&&!y?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n1-complete-lesson" data-id="${g(t.id)}" ${u||!y?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n1-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${b?`<a class="btn ghost" href="#jlpt/n1/${g(b.id)}" data-action="n1-open-lesson" data-id="${g(b.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n1-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function Eu(e){return e?.miniReadingId&&r.n1Reading.find(t=>t.id===e.miniReadingId)||null}function ny(e){const t=fe(),n=Eu(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Io(n,"reading")}
      </section>
    `:""}function sy(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(H(n.reading||""))}</span>
        <small>${i(f({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(fe().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function ry(e){const t=fe(),n=(e.grammarFocus||[]).map(s=>Ro(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n1-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n1-section-grid">
          ${n.map(s=>`
            <article class="n1-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(f(s.title))}</h3>
              <p>${i(f(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(f({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n1-grammar-complete" data-id="${g(s.id)}" data-value="${g(s.answer)}">${i(Y().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function ay(e){const t=fe(),n=_o(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&ln("N1",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(f(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(qu(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(f(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n1-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n1-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Ku(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(f(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(o=>{const c=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":c?"warning":"ghost"}" type="button" data-action="n1-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Ku(e,n)}
      </article>
    `}function Ku(e,t){if(!t)return"";const n=fe(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function iy(e){const t=fe(),n=Y().activeReviewMode||"due",s=Ry(n);return`
      <section class="page textbooks-page n5-course-page n1-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N1 · Повторение</p>
            <h1>${i(t.reviewTitle)}</h1>
            <p>${i(t.reviewDescription)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n1-overview">${i(t.backToN1)}</button>
            <button class="btn ghost" type="button" data-action="n1-final">${i(t.finalTest)}</button>
          </div>
        </div>
        <div class="jlpt-filter-bar" role="tablist" aria-label="N1 review modes">
          ${(r.n1Exercises?.reviewModes||[]).map(a=>`
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n1-review" data-mode="${g(a.id)}">${i(f(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>oy(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function oy(e,t){const n=fe(),s=M(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(An(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(L(e))}</h3>
        <p>${i(at(e)[0]?.word||e.hiragana||"")} · ${i(at(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n1-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n1-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function ly(e){const t=fe(),n=mt(),s=n.slice(0,160);return`
      <section class="page textbooks-page n5-course-page n1-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N1 · ${i(n.length||1047)}</p>
            <h1>${i(t.kanjiListTitle)}</h1>
            <p>${i(t.kanjiListText)}</p>
            <p class="muted">${i(t.kanjiListLimit.replace("{shown}",s.length).replace("{total}",n.length||1047))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n1-overview">${i(t.backToN1)}</button>
            <button class="btn" type="button" data-action="n1-review" data-mode="all">${i(t.reviewAll)}</button>
          </div>
        </div>
        <div class="n5-kanji-grid n1-kanji-catalog">
          ${s.map((a,o)=>`
            <article class="n5-kanji-card">
              <div class="n5-kanji-topline"><span class="pill">${o+1}/${n.length}</span><span class="pill">${i(M(a.id).state)}</span></div>
              <div class="n5-big-kanji">${i(a.kanji)}</div>
              <h3>${i(L(a))}</h3>
              <p>${i(at(a)[0]?.word||"")} · ${i(at(a)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n1-srs" data-id="${g(a.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function cy(e){const t=fe();return`
      <section class="page textbooks-page n5-course-page n1-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N1 · Grammar</p>
            <h1>${i(t.grammarTitle)}</h1>
            <p>${i(t.grammarText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n1-overview">${i(t.backToN1)}</button>
            <button class="btn ghost" type="button" data-action="n1-reading">${i(t.readingN1)}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${T(t.completedGrammar,`${Object.keys(Y().completedGrammar||{}).length}/${r.n1Grammar.length}`,t.grammar,R(Object.keys(Y().completedGrammar||{}).length,r.n1Grammar.length))}
          ${T(t.questions,r.n1Grammar.length,t.grammar,100)}
        </div>
        <div class="n1-section-grid">
          ${r.n1Grammar.map(n=>{const s=Y().grammarResults?.[n.id];return`
              <article class="n1-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(f(n.title))}</h3>
                <p>${i(f(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(H(a.reading||""))}</span><small>${i(f({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(f(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(n.options.length?n.options:[n.answer]).map(a=>`
                    <button class="btn ${s?.selected===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n1-grammar-complete" data-id="${g(n.id)}" data-value="${g(a)}">${i(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${n.answer}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function dy(e){const t=fe(),n=Rr("N1","n1_reading_page"),s=As("N1");return(n||s)&&j(),`
      <section class="page textbooks-page n5-course-page n1-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N1 · Reading</p>
            <h1>${i(t.readingTitle)}</h1>
            <p>${i(t.readingText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n1-overview">${i(t.backToN1)}</button>
            <button class="btn ghost" type="button" data-action="n1-listening">${i(t.listeningN1)}</button>
          </div>
        </div>
        <div class="n1-section-grid">
          ${r.n1Reading.map(a=>Io(a,"reading")).join("")}
        </div>
      </section>
    `}function uy(e){const t=fe();return`
      <section class="page textbooks-page n5-course-page n1-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N1 · Listening</p>
            <h1>${i(t.listeningTitle)}</h1>
            <p>${i(t.listeningText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n1-overview">${i(t.backToN1)}</button>
            <button class="btn ghost" type="button" data-action="n1-final">${i(t.finalTest)}</button>
          </div>
        </div>
        <div class="n1-section-grid">
          ${r.n1Listening.map(n=>Io(n,"listening")).join("")}
        </div>
      </section>
    `}function Io(e,t){const n=fe(),s=t==="reading"?Y().completedReading[e.id]:Y().completedListening[e.id],a=t==="reading"?Y().readingAnswers:Y().listeningAnswers,o=t==="reading"?"n1-reading-complete":"n1-listening-complete";return`
      <article class="n1-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(f(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(c=>`<article><strong>${i(c)}</strong></article>`).join("")}</div>`:`<p class="n1-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((c,l)=>{const d=`${e.id}:${l}`,u=a?.[d],m=Array.isArray(c.options)?c.options:[];return`
            <div class="n1-question-block">
              <h3>${i(f(c.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(l)}" data-value="${g(h.value)}">${i(f(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function py(e){const t=fe(),n=r.n1FinalTest||{},s=Ju(),a=Y().finalTest,o=Rt(a,s),c=o.answered,l=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),j()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n1-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N1 · Final</p>
            <h1>${i(f(n.title||{}))}</h1>
            <p>${i(f(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n1-overview">${i(t.backToN1)}</button>
            <button class="btn" type="button" data-action="n1-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${T(t.questions,`${c}/${s.length}`,t.finalTest,R(c,s.length))}
          ${T(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${T(t.mistakes,d?(a.mistakes||[]).length:0,t.difficult,d?R((a.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n1-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${vt("N1","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>gy(m,h)).join("")}
        </div>
        ${l?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n1-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${vt("N1","btn ghost")}
          <button class="btn ghost" type="button" data-action="n1-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function gy(e,t){const n=Y().finalTest.answers?.[e.id],s=!!Y().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n1-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(fe().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function fe(){return p()==="ru"?{title:"JLPT N1",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N1: редкие знаки, формальная лексика, плотные тексты и выводы",continue:"Продолжить",review:"Повторять N1",openKanji:"Открыть список кандзи",grammarN1:"Грамматика N1",readingN1:"Чтение N1",listeningN1:"Аудирование N1",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"SRS",lessons:"уроков",lessonsTitle:"53 урока: 52×20 кандзи и финальный урок на 7 знаков",lessonsDescription:"Каждый урок связывает кандзи, реальные слова, грамматику, мини-текст, позицию автора, письмо и повторение.",reviewPlan:"План повторения на 120 дней",day:"день",lesson:"Урок",backToN1:"К N1",n5Bridge:"База перед N1",n5BridgeText:"N1 стоит на N2: формальные связки, длинные фразы, авторская позиция, уступка, причина и вывод. Если проседает N2, лучше быстро освежить его перед рывком.",reviewN5Base:"Повторить N2 перед N1",lessonChain:"Кандзи -> слово -> чтение -> грамматика -> абзац -> позиция автора -> вывод -> SRS",lessonChainText:"N1 не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1–3 конструкции, которые связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми тему, причину, уступку, противопоставление и вывод внутри короткого N1-абзаца.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N1-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N1.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"1047 кандзи N1",kanjiListText:"Список из учебника: карточки можно быстро добавить в повторение или открыть для письма. На странице показывается облегчённая витрина, чтобы не перегружать DOM.",kanjiListLimit:"Показано {shown} из {total}; полный набор доступен по урокам, повторению и поиску приложения.",grammarTitle:"142 грамматические конструкции N1",grammarText:"Карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе.",readingTitle:"Тексты для чтения N1",readingText:"Короткие тексты и mini-readings связывают кандзи, слова, грамматику, авторскую позицию и выводы.",listeningTitle:"Скрипты для аудирования N1",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N1",finalPassed:"N1 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N1",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N1 textbook: rare kanji, formal vocabulary, dense texts, and conclusions",continue:"Continue",review:"Review N1",openKanji:"Open kanji list",grammarN1:"N1 grammar",readingN1:"N1 reading",listeningN1:"N1 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"53 lessons: 52×20 kanji and a final 7-kanji lesson",lessonsDescription:"Each lesson connects kanji, real words, grammar, mini reading, author stance, writing, and SRS.",reviewPlan:"120-day review plan",day:"day",lesson:"Lesson",backToN1:"To N1",n5Bridge:"Base before N1",n5BridgeText:"N1 stands on N2: formal links, long phrases, author stance, concession, cause, and conclusion.",reviewN5Base:"Review N2 before N1",lessonChain:"Kanji -> word -> reading -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N1 is not a bare list: every sign gets a word, formal link, mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N1 review and shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1–3 constructions that push kanji into viewpoint, cause, or conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N1 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N1 review",reviewDescription:"Review due cards, difficult kanji, or the full N1 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"1047 N1 kanji",kanjiListText:"Textbook list: quickly add cards to review or open writing practice. This page renders a light showcase to avoid overloading the DOM.",kanjiListLimit:"Showing {shown} of {total}; the full set is available through lessons, review, and app search.",grammarTitle:"142 N1 grammar constructions",grammarText:"Cards with function, formula, example, and a comprehension check for written arguments.",readingTitle:"N1 reading texts",readingText:"Short texts and mini-readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N1 listening scripts",listeningText:"Read scripts aloud, speak them with TTS, and use them for shadowing.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N1",finalPassed:"N1 passed",finalPassedText:"Excellent. You can send mistakes back to review separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked as difficult and raised in review."}}function La(){r.progress.n1Course=Ic(Fi(),r.progress.n1Course||{});const e=rt();!zn(r.progress.n1Course.currentLessonId)&&e[0]&&(r.progress.n1Course.currentLessonId=e[0].id);const n=e.find(s=>!r.progress.n1Course.completedLessons[s.id]);return!r.progress.n1Course.currentLessonId&&n&&(r.progress.n1Course.currentLessonId=n.id),r.progress.n1Course}function Y(){return La()}function rt(){return r.n1Textbook?.items||[]}function zn(e){const t=String(e||"");return t&&rt().find(n=>n.id===t||n.id===`n1-${t}`||n.id.endsWith(`-${t}`))||null}function my(){return zn(Y().currentLessonId)||rt().find(e=>!Y().completedLessons[e.id])||rt()[0]||null}function Ta(e){return(e?.kanji||[]).map(t=>Du(t)).filter(Boolean)}function mt(){const e=new Set;return(r.n1KanjiCatalog||[]).map(t=>Du(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Du(e){const t=String(e||""),n=r.n1KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N1")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?aa(s,n):s||(n?aa({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N1",examples:[]},n):null)}function Ro(e){const t=String(e||"");return r.n1Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function at(e){return ar(e,e.examples)}function fy(){const e=mt(),t=Y(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{M(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of ae)if(a.startsWith("n1:")){const o=a.slice(3);s[o]=s[o]||new Date().toISOString()}return{total:r.n1Meta?.kanjiCount||e.length||1047,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,o)=>a+Number(M(o.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Ou(e){const t=Y(),n=`n1:${e}`;return ae.has(n)||t.completedLessons[e]?"completed":zn(e)?.kanji?.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function hy(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Ia(e){const t=Ta(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n1Exercises?.types||[]).map(b=>[b.type,b.title])),a=Object.fromEntries((r.n1Exercises?.types||[]).map(b=>[b.type,b])),o=b=>a[b]||{rewardXp:r.n1Meta?.rewards?.exerciseXp||11,rewardMoon:r.n1Meta?.rewards?.exerciseMoon||1},c=[],l=t[0];c.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:l.kanji,answer:l.id,answerLabel:L(l),kanji:l.kanji,cardId:l.id,options:We({value:l.id,label:L(l)},t.slice(1).map(b=>({value:b.id,label:L(b)})),1),...o("meaning")});const d=t[1]||t[0];c.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:L(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:We({value:d.kanji,label:d.kanji},t.filter(b=>b.id!==d.id).map(b=>({value:b.kanji,label:b.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=at(u)[0];c.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:We({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(b=>at(b).map(k=>({value:k.reading,label:k.reading}))).filter(b=>b.value&&b.value!==m.reading),3),...o("reading")});const h=n[0];h&&c.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:f({ru:h.ru,en:h.en}),answerLabel:f({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:We({value:f({ru:h.ru,en:h.en}),label:f({ru:h.ru,en:h.en})},n.slice(1).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),1),...o("sentence")});const v=t[3]||t[0],w=at(v)[0];c.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:p()==="ru"?`Какое слово подходит к значению «${Ce(w)}В»?`:`Which word matches "${Ce(w)}"?`,answer:w.word||v.kanji,answerLabel:w.word||v.kanji,kanji:v.kanji,cardId:v.id,options:We({value:w.word||v.kanji,label:w.word||v.kanji},t.flatMap(b=>at(b).map(k=>({value:k.word,label:k.word}))).filter(b=>b.value&&b.value!==w.word),2),...o("missing-word")});const $=t[4]||t[0];c.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${L($)}`:`Type the kanji for: ${L($)}`,answer:$.kanji,answerLabel:$.kanji,kanji:$.kanji,cardId:$.id,options:[],...o("active-recall")});const y=Ro(e.grammarFocus?.[0]);y&&c.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:f(y.question||y.explanation),answer:y.answer,answerLabel:y.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:y.id,options:We({value:y.answer,label:y.answer},y.options.filter(b=>b!==y.answer).map(b=>({value:b,label:b})),1),...o("grammar-link")});const S=n[1]||n[0];return S&&c.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:S.jp,answer:f({ru:S.ru,en:S.en}),answerLabel:f({ru:S.ru,en:S.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:We({value:f({ru:S.ru,en:S.en}),label:f({ru:S.ru,en:S.en})},n.filter(b=>b.jp!==S.jp).map(b=>({value:f({ru:b.ru,en:b.en}),label:f({ru:b.ru,en:b.en})})),2),...o("mini-reading")}),c.slice(0,r.n1Exercises?.lessonQuestionCount||8).map(b=>({...b,level:"N1",lessonId:e.id}))}function We(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(c=>String(c.value||""));if(t.forEach(c=>{const l=String(c.value||"");!l||s.has(l)||a.length>=4||(s.add(l),a.push(c))}),mt().forEach(c=>{if(a.length>=4)return;const l={value:c.kanji,label:c.kanji};s.has(String(l.value))||(s.add(String(l.value)),a.push(l))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function Fu(e){for(const t of rt()){const n=Ia(t).find(s=>s.id===e);if(n)return n}return null}function _o(e){return or("N1",Y(),e)}function vy(e){const t=Fu(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Bu(t,s,a)}function wy(e){const t=Fu(e);if(!t)return;const n=document.getElementById(qu(t.id)),s=n?String(n.value||"").trim():"";Bu(t,s,s===t.answer)}function Bu(e,t,n){const s=Y();lr("N1",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n1Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||r.n1Meta?.rewards?.exerciseMoon||1),rewardKey:`n1_exercise:${e.id}`,markStudied:()=>vr(e.kanji,e.cardId),markDifficult:()=>Ra(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Gu(e,t,n="review"){const s=ne(e)||mt().find(u=>String(u.id)===String(e));if(!s)return;const a=n==="lesson"&&t==="again",o=a?"good":t,c=a?"hard":t,l=se(M(s.id)),d=ue(l,o,c);r.progress.cards[s.id]=d,zt(l,d,c),he(),vr(s.kanji,s.id),Y().srsKanji[s.kanji]=new Date().toISOString(),a?(Ra(s.kanji,s.id,!1),r.progress.totalCorrect+=1,O(r.n1Meta?.rewards?.hardXp||2,1,`n1_srs_lesson_hard:${s.id}`)):Ee(t)?(Ra(s.kanji,s.id),r.progress.totalWrong+=1,O(r.n1Meta?.rewards?.hardXp||2,0,`n1_srs_hard:${s.id}`)):(r.progress.totalCorrect+=1,O(t==="easy"?r.n1Meta?.rewards?.knowXp||9:r.n1Meta?.rewards?.addToSrsXp||7,1,`n1_srs:${s.id}`)),Dt(),j(),St("N1 SRS post-render effects",()=>{I(Ee(t)?"answer_wrong":"answer_correct"),q()})}function by(e){const t=ne(e)||mt().find(s=>String(s.id)===String(e));if(!t)return;const n=Y();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},vr(t.kanji,t.id),O(9,1,`n1_writing:${t.id}`)),q(),j(),x()}function ky(e){const t=zn(e);if(!t)return;const n=Y(),s=`n1:${t.id}`;if(ae.has(s)||n.completedLessons[t.id]){x();return}const a=Ta(t);if(a.filter(w=>n.studiedKanji[w.kanji]).length<t.kanji.length){const w=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof F=="function"&&F(w);return}const c=Ia(t);if(!(c.length>0&&c.every(w=>_o(w.id)?.correct))){const w=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof F=="function"&&F(w);return}ae.add(s),Ta(t).forEach(w=>{vr(w.kanji,w.id),n.srsKanji[w.kanji]=n.srsKanji[w.kanji]||new Date().toISOString();const $=M(w.id);$.state==="New"&&(r.progress.cards[w.id]=ue(se($),"good"))}),(t.grammarFocus||[]).map(w=>Ro(w)).filter(Boolean).forEach(w=>{n.completedGrammar[w.id]=n.completedGrammar[w.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=rt().find(w=>w.order===t.order+1)?.id||t.id;const d=gs(),u=d.sessions[n1SessKey];if(u){const w=new Date().toISOString();u.phase="done",u.completedAt=w,u.updatedAt=w,u.currentIndex=a.length,d.activeSessionKey=n1SessKey,d.lastUpdatedAt=w}Y(),Object.keys(n.completedLessons||{}).length>=53&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],["N1","N1"].forEach(w=>{r.progress.unlockedJlptLevels.includes(w)||r.progress.unlockedJlptLevels.push(w)}));const h=r.n1Meta?.rewards?.lessonCompleteXp||85,v=r.n1Meta?.rewards?.lessonCompleteMoon||10;O(h,v,`n1_lesson:${t.id}`),Xe({title:`${fe().lessonComplete}: ${f(t.title)}`,message:fe().lessonCompleteText,xp:h,coins:v,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),I("lesson_complete"),q(),j(),x()}function vr(e,t=null){if(!e)return;const n=Y();as(n,e)}function Ra(e,t=null,n=!0){if(e&&(Y().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=M(t);s.state!=="New"&&(r.progress.cards[t]=ue(se(s),"again"))}}function yy(e,t=""){const n=r.n1Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=t||n.answer,a=s===n.answer,o=Y();o.grammarResults[n.id]={selected:s,correct:a,checkedAt:new Date().toISOString()},a&&!o.completedGrammar[n.id]?(o.completedGrammar[n.id]=new Date().toISOString(),O(r.n1Meta?.rewards?.grammarXp||12,r.n1Meta?.rewards?.grammarMoon||1,`n1_grammar:${n.id}`),r.progress.totalCorrect+=1,I("answer_correct")):a||(r.progress.totalWrong+=1,I("answer_wrong")),he(),q(),j(),x()}function $y(e,t="0",n=""){zu("reading",e,t,n)}function jy(e,t="0",n=""){zu("listening",e,t,n)}function zu(e,t,n="0",s=""){const o=(e==="reading"?r.n1Reading:r.n1Listening).find(y=>y.id===t);if(!o)return;const c=Number(n||0),l=(o.questions||[])[c];if(!l)return;const d=s===l.answer,u=`${o.id}:${c}`,m=Y(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,v=e==="reading"?m.completedReading:m.completedListening,w=!!v[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const $=(o.questions||[]).every((y,S)=>h[`${o.id}:${S}`]?.correct);if(d?(r.progress.totalCorrect+=1,I("answer_correct")):(r.progress.totalWrong+=1,I("answer_wrong")),$&&!w){v[o.id]=new Date().toISOString();const y=e==="reading"?r.n1Meta?.rewards?.readingXp||55:r.n1Meta?.rewards?.listeningXp||50,S=e==="reading"?r.n1Meta?.rewards?.readingMoon||4:r.n1Meta?.rewards?.listeningMoon||4;O(y,S,`n1_${e}:${o.id}`)}he(),q(),j(),x()}function Sy(e){const t=zn(e);t&&(Y().currentLessonId=t.id,ot("N1",t.id,"n1_lesson_open"),Nt("N1",t,"n1_lesson_open"),fn(t.id))}function Ny(){fn("")}function xy(e=null){e&&(Y().activeReviewMode=e),fn("review")}function Ay(){fn("kanji")}function Cy(){fn("grammar")}function Ly(){fn("reading")}function Ty(){fn("listening")}function Iy(){fn("final-test")}function fn(e){r.route="textbooks",r.activeTextbookLevel="N1",r.activeTextbookSubroute=e||null,Y().opened=!0;const t=e?`#jlpt/n1/${encodeURIComponent(e)}`:"#jlpt/n1";Pt(t),q(),j(),ie(),Ot()}function Ry(e="due"){const t=Date.now(),n=Y(),s=mt();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=M(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Ju(){const e=mt();if(!e.length)return[];const t=r.n1FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n1FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],c=t[a%t.length],l=rt().find(d=>d.kanji.includes(o.kanji))||rt()[0];s.push(_y(c,o,l,a))}return s.filter(Boolean)}function _y(e,t,n,s){const o=at(t)[0]||{},c=(n?.sentences||[]).find(l=>l.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:L(t),options:We({value:t.id,label:L(t)},mt().filter(l=>l.id!==t.id).map(l=>({value:l.id,label:L(l)})),s)};if(e==="reading")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:We({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},mt().flatMap(l=>at(l).map(d=>({value:d.reading,label:d.reading}))).filter(l=>l.value&&l.value!==o.reading),s)};if(e==="sentence"&&c){const l=f({ru:c.ru,en:c.en});return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:c.jp,answer:l,answerLabel:l,options:We({value:l,label:l},rt().flatMap(d=>d.sentences||[]).map(d=>({value:f({ru:d.ru,en:d.en}),label:f({ru:d.ru,en:d.en})})).filter(d=>d.value!==l),s)}}if(e==="word"){const l=o.word||t.kanji;return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Ce(o),answer:l,answerLabel:l,options:We({value:l,label:l},mt().flatMap(d=>at(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==l),s)}}if(e==="grammar"){const l=r.n1Grammar[s%Math.max(r.n1Grammar.length,1)];if(l)return{id:`n1-final-${s}`,type:e,grammarId:l.id,prompt:`${l.pattern}: ${f(l.question||l.explanation)}`,answer:l.answer,answerLabel:l.answer,options:We({value:l.answer,label:l.answer},l.options.filter(d=>d!==l.answer).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const l=r.n1Reading[s%Math.max(r.n1Reading.length,1)],d=l?.questions?.[0];if(l&&d)return{id:`n1-final-${s}`,type:e,readingId:l.id,prompt:`${l.jp||f(l.title)} ${f(d.prompt)}`,answer:d.answer,answerLabel:f((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:f(u.label||u)}))}}return e==="srs"?{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${L(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${L(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n1-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:L(t),answer:t.kanji,answerLabel:t.kanji,options:We({value:t.kanji,label:t.kanji},mt().filter(l=>l.id!==t.id).map(l=>({value:l.kanji,label:l.kanji})),s)}}function My(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(Y().finalTest.answers[t]=n,j(),x())}function Uu(e=!1){if(r.finalTestBusy)return;const t=Y().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){x();return}r.finalTestBusy=!0;try{const n=Ju(),s=r.n1FinalTest||{},a=fe(),o=Rt(t,n),c=Number(s?.passingPercent??s?.passThreshold??80),l=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!l){const k=o.firstMissingId?`#${ys("n1",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N1",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:c,focusSelector:k,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:l},r.pendingFocus=k,j();return}let u=0;const m=[],h=[];n.forEach(k=>{const K=String(t.answers?.[k.id]||"").trim();if(K===k.answer){if(u+=1,k.kanji&&vr(k.kanji,k.cardId),k.grammarId){const D=Y();D.completedGrammar[k.grammarId]=D.completedGrammar[k.grammarId]||d}}else K||h.push(k),m.push({id:k.id,kanji:k.kanji||"",answer:k.answerLabel,selected:K}),k.kanji&&Ra(k.kanji,k.cardId)});const v=n.length?Math.round(u/n.length*100):0,w=!!t.completedAt,$=!!t.passed,y=Math.max(0,m.length-h.length);let S=0,b=0;if(t.answers=t.answers||{},t.score=u,t.percent=v,t.passed=v>=c,t.correctAnswers=u,t.incorrectAnswers=y,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(k=>k.id),t.completedAt=d,t.lastScore=v,t.bestScore=Math.max(Number(t.bestScore||0),v),t.passedAt=t.passed?$&&t.passedAt||d:t.passedAt||null,!w){const k=Number(s?.rewards?.completeXp||220),K=Number(s?.rewards?.completeMoon||40);S+=k,b+=K,O(k,K,"n1_final_complete")}if(t.passed&&!$){const k=Number(s?.rewards?.passXp||110),K=Number(s?.rewards?.passMoon||18);S+=k,b+=K,O(k,K,"n1_final_pass")}t.lastRewardXp=S,t.lastRewardMoon=b,Y(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N1",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:v,correct:u,incorrect:y,unanswered:h.length,totalQuestions:n.length,rewardXp:S,rewardMoon:b,attempts:t.attempts,threshold:c,reviewAction:"n1-review",reviewAllAction:"n1-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},q(),j()}catch(n){console.error(n),F(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,x()}}function Py(){Y().finalTest=Fi().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,j(),x()}function qu(e){return`n1-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Hu(e){const t=Ls(e.jlpt);if(!t)return"";const n={...hl(),...fl()};return`
      <div class="jlpt-practice-grid">
        ${Ey(t,n)}
        ${Ky(t,n)}
        ${Dy(t,n)}
        ${Fy(t,n)}
      </div>
    `}function Ey(e,t){return e.apps.length?`
      <article class="jlpt-practice-card">
        <h3>${i(t.apps)}</h3>
        <div class="jlpt-app-grid">
          ${e.apps.map(n=>`
            <div class="jlpt-app-chip">
              <strong>${i(n.name)}</strong>
              <span>${i(f(n.context))}</span>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function Ky(e,t){const n=Array.isArray(e.kana?.hiragana)?e.kana.hiragana:[],s=Array.isArray(e.kana?.katakana)?e.kana.katakana:[];return!n.length&&!s.length?"":`
      <article class="jlpt-practice-card">
        <h3>${i(t.kana)}</h3>
        <div class="kana-columns">
          ${Wu(t.hiragana,n)}
          ${Wu(t.katakana,s)}
        </div>
      </article>
    `}function Wu(e,t){return t.length?`
      <div class="kana-column">
        <strong>${i(e)}</strong>
        ${t.map(n=>`
          <span class="kana-chip">
            <b>${i(n.kana)}</b>
            <small>${i(n.romaji)} · ${i(f(n.note))}</small>
          </span>
        `).join("")}
      </div>
    `:""}function Dy(e,t){return e.kanjiFocus.length?`
      <article class="jlpt-practice-card jlpt-kanji-focus">
        <h3>${i(t.kanjiFocus)}</h3>
        <div class="jlpt-focus-grid">
          ${e.kanjiFocus.map(n=>`
            <div class="jlpt-focus-item">
              <span class="kanji-mini">${i(n.kanji)}</span>
              <div>
                <strong>${Oy(n)}</strong>
                <small>${i(n.romaji)} · ${i(f(n.meaning))}</small>
                <p>${i(f(n.appUse))}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function Oy(e){const t=Array.isArray(e.furigana)?e.furigana:[];return t.length?t.map(n=>n.rt?`<ruby>${i(n.text)}<rt>${i(n.rt)}</rt></ruby>`:i(n.text)).join(""):i(e.word||e.kanji||"")}function Fy(e,t){const n=Ts(e);if(!n)return"";const s=Qn(),a=s.selected[n.id]||[],o=!!s.checked[n.id],c=s.results[n.id]||null,l=a.map(m=>n.tiles[m]).filter(Boolean),d=o&&c?.correct,u=o&&c?c.wrongIndexes||[]:[];return`
      <article class="jlpt-practice-card jlpt-drill-card">
        <div class="section-head compact-head">
          <div>
            <h3>${i(t.sentenceDrill)}</h3>
            <p>${i(f(n.translation))}</p>
          </div>
          <span class="pill">${i(e.jlpt)}</span>
        </div>
        <div class="jlpt-sentence-line">${By(n,l,u)}</div>
        <p class="label">${i(H(n.reading))}</p>
        <div class="sentence-tiles jlpt-tiles">
          ${n.tiles.map((m,h)=>{const v=a.includes(h);return`
              <button class="sentence-tile ${v?"is-used":""}" type="button" data-action="insert-jlpt-tile" data-index="${h}" ${v||d?"disabled":""}>
                <small>${i(m.reading)}</small>
                <strong>${i(m.kanji)}</strong>
              </button>
            `}).join("")}
        </div>
        <p class="sentence-result ${o?d?"is-success":"is-error":""}">
          ${i(c?.message||t.fillBlanks)}
        </p>
        <div class="actions">
          <button class="btn primary" type="button" data-action="check-jlpt-practice" ${d?"disabled":""}>${i(t.check)}</button>
          <button class="btn" type="button" data-action="undo-jlpt-tile" ${!a.length||d?"disabled":""}>${i(t.undo)}</button>
          <button class="btn" type="button" data-action="clear-jlpt-practice" ${!a.length||d?"disabled":""}>${i(t.clear)}</button>
          <button class="btn" type="button" data-action="next-jlpt-practice">${i(t.next)}</button>
        </div>
      </article>
    `}function By(e,t,n){let s=0;return String(e.sentence||"").split("___").map((a,o,c)=>{if(o===c.length-1)return i(a);const d=(e.blanks[o]||{answer:[]}).answer.length||1,u=t.slice(s,s+d),m=u.some((v,w)=>n.includes(s+w));s+=d;const h=u.length?u.map(v=>`<span>${i(v.kanji)}</span>`).join(""):`<span>${i("в–Ў".repeat(d))}</span>`;return`${i(a)}<span class="sentence-blank ${m?"is-wrong":""}">${h}</span>`}).join("")}function Gy(){const e=kr(iS()),t=x$(e),n=e.length,s=t?.kind==="card"?t.card:t?.kind==="exercise"?ne(t.card?.id||t.cardId||t.progress?.cardId||""):null;S$(t);const a=t?t.kind==="card"?s?ap(s):js():_$(t):js();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(A("review"))}</h1>
            <p>${n} ${i(p()==="ru"?"в очереди":"in queue")}</p>
            <div class="mini-stat-row">
              ${T(p()==="ru"?"Сейчас":"Due now",Ke(),"due")}
              ${T(p()==="ru"?"В сессии":"Remaining",n,"session")}
              ${T(p()==="ru"?"Позже":"Learning later",oS(),"learning")}
              ${T(p()==="ru"?"Всего SRS":"Total SRS",lS(),"cards")}
            </div>
          </div>
          <div class="actions">
            ${Is("srs")}
          </div>
        </div>
        <div class="study-layout" data-section="review-card">
          ${a}
          ${Oo(s,n)}
        </div>
        ${zy()}
      </section>
    `}function zy(){try{return Jy()}catch(e){return console.warn("[Flash Kanji] sentence practice skipped after stale saved progress.",e),r.progress&&(r.progress.sentencePractice=Bi(rs().sentencePractice,{})),""}}function Jy(){const e=It(),t=Ma(e),n={...bs(),...Mo()},s=Uy(e,n);if(!e.length)return`
      <article class="sentence-practice empty-state" data-section="sentence-practice">
          <span class="kanji-char">文</span>
          <h2>${i(n.title)}</h2>
          <p>${i(n.noLearned)}</p>
          ${s}
          <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(A("learn"))}</button>
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
      `;const a=Eo(t,e);if(!a)return"";const{exercise:o,tiles:c,selectedTiles:l,answerFlat:d,wrongIndexes:u,complete:m,awarded:h}=a,v=new Set(r.progress.sentencePractice.selected),w=r.progress.sentencePractice.result||{};return`
      <article class="sentence-practice${r.progress.sentencePractice.checked?m?" is-success":" is-error":""}" data-section="sentence-practice" aria-live="polite">
        <div class="section-head sentence-head">
          <div>
            <h2>${i(n.title)}</h2>
            <p>${i(n.subtitle.replace("{learned}",e.length).replace("{total}",r.cards.length))}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(o.jlpt)}</span>
            ${o.source?`<span class="pill">${i(Hy(o.source,n))}</span>`:""}
            <span class="pill">${i(n.progress.replace("{done}",Object.keys(r.progress.sentencePractice.completed||{}).length).replace("{total}",t.length))}</span>
          </div>
        </div>
        ${s}
        <div class="sentence-card">
          <div class="sentence-line">${Qu(o,l,u)}</div>
          <p class="sentence-reading">${i(o.reading||"")}</p>
          <p class="sentence-translation">${i(Wy(o))}</p>
        </div>
        <div class="sentence-tiles">
          ${c.map((y,S)=>{const b=v.has(S),k=u.includes(r.progress.sentencePractice.selected.indexOf(S));return`
              <button class="sentence-tile ${b?"is-used":""} ${k?"is-wrong":""}" type="button" data-action="insert-sentence-tile" data-index="${S}" ${b||m?"disabled":""}>
                <span>${i(y.reading)}</span>
                <strong>${i(y.kanji)}</strong>
              </button>
            `}).join("")}
        </div>
        <div class="sentence-feedback">
          ${i(w.message||n.tip.replace("{count}",d.length))}
          ${m&&!h?`<small>${i(n.completedBefore)}</small>`:""}
        </div>
        <div class="actions sentence-actions">
          <button class="btn primary" type="button" data-action="check-sentence">${i(n.check)}</button>
          <button class="btn" type="button" data-action="undo-sentence-tile" ${!r.progress.sentencePractice.selected.length||m?"disabled":""}>${i(n.undo)}</button>
          <button class="btn" type="button" data-action="clear-sentence" ${!r.progress.sentencePractice.selected.length||m?"disabled":""}>${i(n.clear)}</button>
          <button class="btn ghost" type="button" data-action="next-sentence">${i(n.next)}</button>
        </div>
      </article>
    `}function Uy(e,t){const n=xe(),s=la(n.customDraft||{}),a=Array.isArray(n.customSentences)?n.customSentences:[],o=a.length,c=!!n.customEditingId,l=n.customStatus?` is-${n.customStatus}`:"";return`
      <details class="sentence-builder" ${c||n.customMessage?"open":""}>
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
          <button class="btn primary" type="button" data-action="add-custom-sentence">${i(c?t.updateCustom:t.addCustom)}</button>
          ${c?`<button class="btn ghost" type="button" data-action="cancel-custom-sentence-edit">${i(t.cancelEdit)}</button>`:""}
          <span class="sentence-builder-message${l}">${i(n.customMessage||t.customHelp.replace("{learned}",e.length))}</span>
        </div>
        ${qy(a,e,t)}
      </details>
    `}function qy(e,t,n){return e.length?`
      <div class="sentence-custom-list">
        ${e.map(s=>{const a=Po(s,t),o=!!(a&&hn(a,t).length>=Math.max(4,ft(a).length)),c=p()==="en"?s.en||s.ru:s.ru||s.en;return`
            <article class="sentence-custom-item">
              <div class="sentence-custom-copy">
                <div class="tag-row">
                  <span class="pill">${i(n.userSource)}</span>
                  <span class="pill ${o?"success":""}">${i(o?n.customReady:n.customLocked)}</span>
                </div>
                <strong>${i(s.jp)}</strong>
                ${s.hiragana?`<small>${i(s.hiragana)}</small>`:""}
                ${c?`<small>${i(c)}</small>`:""}
              </div>
              <div class="sentence-custom-actions">
                <button class="btn" type="button" data-action="edit-custom-sentence" data-id="${g(s.id)}">${i(n.editCustom)}</button>
                <button class="btn ghost" type="button" data-action="delete-custom-sentence" data-id="${g(s.id)}">${i(n.deleteCustom)}</button>
              </div>
            </article>
          `}).join("")}
      </div>
    `:`<p class="sentence-custom-empty">${i(n.customEmpty)}</p>`}function Hy(e,t){return e==="user"||e==="custom"?t.userSource||t.customSource:e==="dynamic"?t.dynamicSource:e}function bs(){return p()==="ru"?{title:"Практика предложений",subtitle:"Только из изученных кандзи: {learned}/{total}",progress:"{done}/{total} готово",noLearned:"Сначала изучи несколько кандзи в уроках или повторении. После этого появятся предложения.",notEnough:"Изучено {count} кандзи. Для упражнения нужно минимум 4 изученных кандзи, чтобы собрать варианты.",noExercise:"Изученные кандзи пока не складываются в доступные предложения. Продолжай уроки, и блок откроется.",tip:"Заполни {count} пропуск(а) плитками по порядку.",check:"Проверить",clear:"Очистить",next:"Следующее",undo:"Убрать",completedBefore:"Награда за это предложение уже получена.",fillAll:"Заполни все пропуски перед проверкой.",correct:"Верно. Предложение собрано правильно.",wrong:"Проверь красные места и попробуй ещё раз.",full:"Все пропуски уже заполнены.",inserted:"Плитка вставлена.",removed:"Последняя плитка убрана."}:{title:"Sentence practice",subtitle:"Only learned kanji: {learned}/{total}",progress:"{done}/{total} done",noLearned:"Study a few kanji first. Sentence practice will unlock after that.",notEnough:"{count} kanji learned. You need at least 4 learned kanji for tile choices.",noExercise:"Your learned kanji do not form an available sentence yet. Continue lessons to unlock this block.",tip:"Fill {count} blank slot(s) with tiles in order.",check:"Check",clear:"Clear",next:"Next",undo:"Undo",completedBefore:"Reward for this sentence was already claimed.",fillAll:"Fill every blank before checking.",correct:"Correct. The sentence is complete.",wrong:"Check the red slots and try again.",full:"All blank slots are already filled.",inserted:"Tile inserted.",removed:"Last tile removed."}}function Mo(){return p()==="ru"?{customTitle:"Своё предложение",customCount:"Своих: {count}",customSentence:"Японское предложение",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Чтение хираганой",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Перевод RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Добавить",customHelp:"Вставь фразу. Приложение спрячет только изученные кандзи: {learned}.",customAdded:"Предложение добавлено.",customNoSentence:"Вставь японское предложение.",customNoKnown:"В этом предложении нет изученных кандзи.",customNoTiles:"Нужно минимум 4 изученных кандзи для вариантов.",customDuplicate:"Такое предложение уже есть.",customUpdated:"Предложение обновлено.",customDeleted:"Предложение удалено.",customEmpty:"Свои предложения появятся здесь.",customReady:"Доступно",customLocked:"Позже",updateCustom:"Сохранить",cancelEdit:"Отмена",editCustom:"Редактировать",deleteCustom:"Удалить",customSource:"Своё",userSource:"USER",dynamicSource:"JSON"}:{customTitle:"Custom sentence",customCount:"Custom: {count}",customSentence:"Japanese sentence",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Hiragana reading",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Translation RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Add",customHelp:"Paste a phrase. The app will hide only learned kanji: {learned}.",customAdded:"Sentence added.",customNoSentence:"Paste a Japanese sentence.",customNoKnown:"No learned kanji found in this sentence.",customNoTiles:"You need at least 4 learned kanji for tile choices.",customDuplicate:"This sentence already exists.",customUpdated:"Sentence updated.",customDeleted:"Sentence deleted.",customEmpty:"Your sentences will appear here.",customReady:"Ready",customLocked:"Later",updateCustom:"Save",cancelEdit:"Cancel",editCustom:"Edit",deleteCustom:"Delete",customSource:"Custom",userSource:"USER",dynamicSource:"JSON"}}function Wy(e){return p()==="en"?e?.translationEn||e?.translationRu||"":e?.translationRu||e?.translationEn||""}function Xu(e=It()){const t=Xy(e),n=Qy(e),s=Array.isArray(r.sentenceExercises)?r.sentenceExercises:[],a=new Set;return[...t,...n,...s].filter(o=>!o?.id||a.has(o.id)?!1:(a.add(o.id),!0))}function Xy(e=It()){const t=xe();return(Array.isArray(t.customSentences)?t.customSentences:[]).map(s=>Po(s,e)).filter(Boolean)}function Po(e,t=It()){return e?.jp?Ko({id:e.id,jlpt:c$(e.jp,t),sentence:e.jp,reading:e.hiragana||wr(e.jp),translationRu:e.ru||"",translationEn:e.en||"",source:"user"},t,{maxBlanks:3,maxBlankChars:5}):null}function Qu(e,t,n){const s=e?.blanks||[],a=String(e?.sentence||"").split("___");let o=0;return a.map((c,l)=>{const d=s[l];if(!d)return i(c);const u=d.answer||[],m=u.map((h,v)=>{const w=o+v,$=t[w],y=n.includes(w);return`<span class="sentence-slot ${$?"is-filled":""} ${y?"is-wrong":""}">${$?i($.kanji):""}</span>`}).join("");return o+=u.length,`${i(c)}<span class="sentence-blank">${m}</span>`}).join("")}function Eo(e=Ma(),t=It()){const n=Jn(t),s=(Array.isArray(e)?e:[]).filter($=>$?.id),a=xe();new Set(s.map($=>$.id)).has(a.activeId)||_a(Do(s)?.id||null);const c=s.find($=>$.id===r.progress.sentencePractice.activeId)||s[0];if(!c)return null;const l=ft(c);(!Array.isArray(r.progress.sentencePractice.tileKeys)||!r.progress.sentencePractice.tileKeys.length)&&(r.progress.sentencePractice.tileKeys=hn(c,n).map(Ka));let d=(Array.isArray(r.progress.sentencePractice.tileKeys)?r.progress.sentencePractice.tileKeys:[]).map(u$).filter(Boolean);const u=()=>l.every($=>d.some(y=>y.kanji===$.kanji));(d.length<Math.max(4,l.length)||!u())&&(d=hn(c,n),r.progress.sentencePractice.tileKeys=d.map(Ka),r.progress.sentencePractice.selected=[],r.progress.sentencePractice.checked=!1,r.progress.sentencePractice.result=null);const m=Array.isArray(r.progress.sentencePractice.selected)?r.progress.sentencePractice.selected:[];r.progress.sentencePractice.selected=m.filter(($,y,S)=>Number.isInteger($)&&$>=0&&$<d.length&&S.indexOf($)===y).slice(0,l.length);const h=r.progress.sentencePractice.selected.map($=>d[$]).filter(Boolean),v=r.progress.sentencePractice.checked&&r.progress.sentencePractice.result?r.progress.sentencePractice.result.wrongIndexes:[],w=Array.isArray(v)?v.filter($=>Number.isInteger($)&&$>=0&&$<l.length):[];return{exercise:c,tiles:d,selectedTiles:h,answerFlat:l,wrongIndexes:w,complete:!!(r.progress.sentencePractice.checked&&r.progress.sentencePractice.result?.correct),awarded:!!r.progress.sentencePractice.completed?.[c.id]}}function xe(){return r.progress.sentencePractice=Bi(rs().sentencePractice,r.progress.sentencePractice||{}),r.progress.sentencePractice}function _a(e){r.progress.sentencePractice={...xe(),activeId:e,selected:[],checked:!1,result:null,tileKeys:[]};const t=Xu(It()).find(n=>n?.id===e);t&&ep(t)}function Jn(e){return(Array.isArray(e)?e:[]).filter(t=>t?.id&&t.kanji)}function It(){return Jn(r.cards).filter(e=>{const t=r.lessons.find(s=>s.id===e.lessonId);if(t&&!Te(t))return!1;const n=M(e.id);return n.state!=="New"||n.reviewCount>0||n.lastReviewedAt||r.progress.lessonCompletions[e.lessonId]})}function Ma(e=It()){const t=Jn(e),n=new Set(t.map(s=>s.kanji));return Xu(t).filter(s=>{if(!s?.id)return!1;const a=ft(s);return!a.length||a.some(o=>!n.has(o.kanji))?!1:hn(s,t).length>=Math.max(4,a.length)})}function ft(e){return(e?.blanks||[]).flatMap(t=>(t.answer||[]).map((n,s)=>({kanji:n,reading:t.reading?.[s]||""})))}function Vu(e){return ft(e).map(t=>t.kanji).join("")}function hn(e,t){if(!e?.id)return[];const n=Jn(t),s=ft(e),a=new Set(s.map(v=>v.kanji)),o=new Set(n.map(v=>v.kanji)),c=new Map;[...e.tiles||[],...s].forEach(v=>{v?.kanji&&v?.reading&&c.set(v.kanji,v.reading)});const l=s.map(v=>({kanji:v.kanji,reading:v.reading||c.get(v.kanji)||Gt(v.kanji)})),d=(e.tiles||[]).filter(v=>v?.kanji&&!a.has(v.kanji)&&o.has(v.kanji)).map(v=>({kanji:v.kanji,reading:v.reading||Gt(v.kanji)})).filter((v,w,$)=>$.findIndex(y=>y.kanji===v.kanji)===w),u=n.filter(v=>v.kanji&&!a.has(v.kanji)).map(v=>({kanji:v.kanji,reading:c.get(v.kanji)||Gt(v.kanji,v)})).filter((v,w,$)=>$.findIndex(y=>y.kanji===v.kanji)===w).sort((v,w)=>Ae(`${e.id}:${v.kanji}`)-Ae(`${e.id}:${w.kanji}`)),m=[...d,...u].filter(v=>!a.has(v.kanji)).filter((v,w,$)=>$.findIndex(y=>y.kanji===v.kanji)===w),h=Math.min(Math.max(6,l.length+2),l.length+m.length);return b$([...l,...m.slice(0,h-l.length)],e.id)}function Qy(e){const t=Jn(e);if(!t.length)return[];const n=new Set(t.map(c=>c.kanji)),s=new Set,a=[];return t.flatMap(c=>(c.examples||[]).map(l=>({...l,card:c}))).forEach((c,l)=>{const d=ks(c.word||"");if(!d||s.has(d)||!d$(d)||Zu(d).some($=>!n.has($)))return;s.add(d);const u=Un(c.reading||wr(d)),m=c.translation||d,h=[{sentence:`今日は${d}をアプリで見ます。`,reading:`きょうは ${u}を あぷりで みます。`,translationRu:`Сегодня я смотрю в приложении: ${m}.`,translationEn:`Today I check ${d} in an app.`},{sentence:`駅で${d}について話します。`,reading:`えきで ${u}について はなします。`,translationRu:`На станции говорю про: ${m}.`,translationEn:`At the station, I talk about ${d}.`},{sentence:`メモに${d}を書きます。`,reading:`めもに ${u}を かきます。`,translationRu:`Я записываю в заметку: ${m}.`,translationEn:`I write ${d} in a memo.`}],v=h[l%h.length],w=Ko({id:`sentence-json-${Ae(`${d}:${v.sentence}`).toString(36)}`,jlpt:c.card?.jlpt||"N5",sentence:v.sentence,reading:v.reading,translationRu:v.translationRu,translationEn:v.translationEn,source:"dynamic"},t,{maxBlanks:2,maxBlankChars:4});w&&a.push(w)}),a.slice(0,160)}function Vy(){const e=xe(),t={...bs(),...Mo()},n=la(Yy()||e.customDraft||{}),s=It(),a=vn(n.jp);if(!a){Pa(t.customNoSentence,"error");return}const o=e.customEditingId||null;if(n$(a,o)){Pa(t.customDuplicate,"error");return}const l=xe(),d={id:o||`custom_${Date.now().toString(36)}_${Ae(a).toString(36)}`,jp:a,hiragana:Un(vn(n.hiragana)||wr(a)),ru:vn(n.ru),en:vn(n.en),source:"user"},u=(l.customSentences||[]).findIndex(h=>h.id===d.id);u>=0?l.customSentences[u]=d:l.customSentences=[d,...l.customSentences||[]].slice(0,160),l.customDraft={jp:"",hiragana:"",ru:"",en:""},l.customEditingId=null,Pa(o?t.customUpdated:t.customAdded,"success",!1);const m=Po(d,s);m&&hn(m,s).length>=Math.max(4,ft(m).length)&&(_a(m.id),r.progress.sentencePractice.tileKeys=hn(m,s).map(Ka)),j(),x()}function Yy(){const e=document.querySelector(".sentence-builder");if(!e)return null;const t=n=>e.querySelector(`[data-sentence-draft="${n}"]`)?.value||"";return{jp:t("jp"),hiragana:t("hiragana"),ru:t("ru"),en:t("en")}}function Zy(e){const t=xe(),n=(t.customSentences||[]).find(s=>s.id===e);n&&(t.customEditingId=n.id,t.customDraft={jp:n.jp||"",hiragana:n.hiragana||"",ru:n.ru||"",en:n.en||""},t.customMessage="",t.customStatus="",j(),x())}function e$(e){const t=xe(),n={...bs(),...Mo()},s=(t.customSentences||[]).length;if(t.customSentences=(t.customSentences||[]).filter(a=>a.id!==e),t.customSentences.length!==s){if(t.customEditingId===e&&(t.customEditingId=null,t.customDraft={jp:"",hiragana:"",ru:"",en:""}),t.completed?.[e]&&delete t.completed[e],t.recentIds=(t.recentIds||[]).filter(a=>a!==e),t.activeId===e){const a=It(),o=Do(Ma(a));_a(o?.id||null)}Pa(n.customDeleted,"success",!1),j(),x()}}function t$(){const e=xe();e.customEditingId=null,e.customDraft={jp:"",hiragana:"",ru:"",en:""},e.customMessage="",e.customStatus="",j(),x()}function n$(e,t=null){const n=ks(e);return(xe().customSentences||[]).some(a=>a.id!==t&&ks(a.jp)===n)?!0:r.sentenceExercises.some(a=>ks(Yu(a))===n)}function Pa(e,t,n=!0){const s=xe();s.customMessage=e,s.customStatus=t,j(),n&&x()}function Ko(e,t,n={}){if(!e||typeof e!="object")return null;const s=Jn(t),a=ks(e.sentence||"");if(!a||!e.id||!s.length)return null;const o=s$(a,s).filter(m=>m.answer.length<=Number(n.maxBlankChars||5));if(!o.length)return null;const c=r$(o,a,n);if(!c.length)return null;let l="",d=0;const u=c.map(m=>(l+=a.slice(d,m.start)+"___",d=m.end,{answer:m.answer,reading:a$(m.text)}));return l+=a.slice(d),{id:e.id,kind:e.kind||"cloze",jlpt:e.jlpt||"N5",sentence:l,originalSentence:a,reading:Un(e.reading||wr(a)),translationRu:e.translationRu||"",translationEn:e.translationEn||"",blanks:u,tiles:u.flatMap(m=>m.answer.map((h,v)=>({kanji:h,reading:m.reading[v]||Gt(h)}))),source:e.source||"custom",createdAt:e.createdAt}}function s$(e,t){const n=new Map(Jn(t).map(o=>[o.kanji,o])),s=[];let a=null;return Array.from(e).forEach((o,c)=>{if(Ea(o)&&n.has(o)){a||(a={start:c,end:c,text:"",answer:[]}),a.end=c+1,a.text+=o,a.answer.push(o);return}a&&s.push(a),a=null}),a&&s.push(a),s}function r$(e,t,n={}){const s=Number(n.maxBlanks||2),a=Number(n.maxBlankChars||5),o=e.filter(m=>m.start>0&&m.end<t.length),c=e.filter(m=>m.start>0),l=(o.length?o:c.length?c:e).slice().sort((m,h)=>{const v=h.answer.length-m.answer.length;return v||Math.abs(m.start-t.length/2)-Math.abs(h.start-t.length/2)}),d=[];let u=0;return l.forEach(m=>{d.length>=s||u+m.answer.length>a||(d.push(m),u+=m.answer.length)}),d.sort((m,h)=>m.start-h.start)}function a$(e){const t=Array.from(e),n=i$(e);return n?o$(t,Un(n)):t.map(s=>Gt(s))}function i$(e){for(const t of r.cards)for(const n of t.examples||[])if(n.word===e&&n.reading)return n.reading;return""}function o$(e,t){const n=Array(e.length).fill("");let s=t;for(let a=e.length-1;a>0;a-=1){const c=l$(e[a]).sort((l,d)=>d.length-l.length).find(l=>l&&s.endsWith(l));c&&(n[a]=c,s=s.slice(0,-c.length))}return n[0]=s||Gt(e[0]),n.map((a,o)=>a||Gt(e[o]))}function l$(e){const t=r.cards.find(s=>s.kanji===e),n=[t?.hiragana,t?.onyomi,t?.kunyomi].flatMap(s=>String(s||"").split(/[\/,;гѓ»гЂЃ\s]+/)).map(s=>Un(s.trim())).filter(Boolean);return[...new Set(n)]}function wr(e){return Un(Array.from(e).map(t=>Ea(t)?Gt(t):t).join(""))}function c$(e,t){const n=["N5","N4","N3","N2","N1"],s=new Map(t.map(o=>[o.kanji,o]));return Zu(e).map(o=>s.get(o)?.jlpt).filter(Boolean).sort((o,c)=>n.indexOf(c)-n.indexOf(o))[0]||"N5"}function ks(e){return String(e||"").replace(/\s+/g,"").trim()}function vn(e){return String(e||"").replace(/\s+/g," ").trim()}function Yu(e){if(!e)return"";if(e.jp)return e.jp;if(e.originalSentence)return e.originalSentence;let t=0;return String(e.sentence||"").replace(/___/g,()=>(e.blanks?.[t++]?.answer||[]).join(""))}function d$(e){return Array.from(String(e||"")).some(Ea)}function Zu(e){return Array.from(String(e||"")).filter(Ea)}function Ea(e){return/[㐀-鿿]/u.test(e)}function Un(e){return String(e||"").replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-96))}function H(e){return Un(String(e||""))}function Gt(e,t=r.cards.find(n=>n.kanji===e)){const n=t?.onyomi||t?.kunyomi||t?.hiragana||"";return String(n).split("/")[0].trim()||"かな"}function Ka(e){return`${e.kanji}	${e.reading||""}`}function u$(e){const[t,n]=String(e||"").split("	");return t?{kanji:t,reading:n||Gt(t)}:null}function p$(e){const t=Eo();if(!t||!Number.isInteger(e))return;const n=bs(),s=r.progress.sentencePractice;if(!(s.result?.correct||s.selected.includes(e))){if(s.selected.length>=t.answerFlat.length){F(n.full);return}s.selected.push(e),s.checked=!1,s.result={correct:!1,message:n.inserted,wrongIndexes:[]},j(),x()}}function g$(){const e=xe();!e.selected.length||e.result?.correct||(e.selected.pop(),e.checked=!1,e.result={correct:!1,message:bs().removed,wrongIndexes:[]},j(),x())}function m$(){const e=xe();e.result?.correct||(e.selected=[],e.checked=!1,e.result=null,j(),x())}function f$(){const e=Eo();if(!e)return;const t=bs(),n=r.progress.sentencePractice;if(n.selected.length<e.answerFlat.length){n.checked=!0,n.result={correct:!1,message:t.fillAll,wrongIndexes:[]},j(),x();return}const s=e.answerFlat.map((o,c)=>e.selectedTiles[c]?.kanji===o.kanji?-1:c).filter(o=>o>=0),a=s.length===0;if(n.checked=!0,n.attempts=(n.attempts||0)+1,n.result={correct:a,wrongIndexes:s,message:a?t.correct:t.wrong},a)h$(e.exercise),ye({trust:.8,curiosity:.5,discipline:.4},"sentence_correct"),$e("sentence_complete",{exerciseId:e.exercise.id,source:e.exercise.source||"builtin"}),oi("ok");else{r.progress.totalWrong+=1,r.progress.correctCombo=0,ye({discipline:-.6,curiosity:.2},"sentence_wrong"),$e("answer_wrong",{exerciseId:e.exercise.id,mode:"sentence"});const o=Jt();o.mistakes+=1,r.progress.daily[re()]=o,oi("again")}j(),x()}function h$(e){const t=xe();if(t.completed[e.id])return;const n=r.rewards?.rewards||{},s=n.sentencePracticeXp||Kl.xp,a=n.sentencePracticeCoins||Kl.coins;t.completed[e.id]=new Date().toISOString(),r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo);const o=Jt();o.reviews+=1,o.minutes=pi((o.minutes||0)+.8,1),r.progress.daily[re()]=o,O(s,a,`sentence:${e.id}`),ye({trust:.8,curiosity:.7},"sentence_complete"),he(),Qo(),q()}function v$(){const e=It(),t=Ma(e);if(!t.length)return;const n=r.progress.sentencePractice?.activeId,s=t.find(o=>o?.id===n);s&&ep(s);const a=Do(t,{excludeCurrent:!0,preferUncompleted:!0});a?.id&&(_a(a.id),r.progress.sentencePractice.tileKeys=hn(a,e).map(Ka),j(),x())}function Do(e,t={}){const n=(Array.isArray(e)?e:[]).filter(y=>y?.id);if(!n.length)return null;const s=xe(),a=s.activeId,o=new Set(s.recentIds||[]),c=new Set(s.recentAnswers||[]),l=y=>!t.excludeCurrent||n.length===1||y.id!==a,d=y=>!t.preferUncompleted||!s.completed?.[y.id],u=y=>!c.has(Vu(y)),m=y=>!o.has(y.id),v=[n.filter(l).filter(d).filter(u).filter(m),n.filter(l).filter(d).filter(u),n.filter(l).filter(u).filter(m),n.filter(l).filter(m),n.filter(l),n].find(y=>y.length)||n,w=v.filter(w$),$=w.length?w:v;return $[Math.floor(Math.random()*$.length)]}function w$(e){return e?.source==="user"||e?.source==="custom"||e?.source==="dynamic"||String(e?.sentence||"").indexOf("___")>0}function ep(e){if(!e?.id)return;const t=xe(),n=Vu(e),s=Array.isArray(t.recentIds)?t.recentIds:[],a=Array.isArray(t.recentAnswers)?t.recentAnswers:[];t.recentIds=[e.id,...s.filter(o=>o!==e.id)].slice(0,14),t.recentAnswers=[n,...a.filter(o=>o!==n)].slice(0,8)}function Ae(e){return String(e).split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0)>>>0}function b$(e,t){return[...e].sort((n,s)=>Ae(`${t}:${n.kanji}:${n.reading}`)-Ae(`${t}:${s.kanji}:${s.reading}`))}function Rt(e,t=[]){const n=t.filter(a=>String(e?.answers?.[a.id]||"").trim()).length,s=t.filter(a=>!String(e?.answers?.[a.id]||"").trim());return{answered:n,missingCount:s.length,missingIds:s.map(a=>a.id),firstMissingId:s[0]?.id||null,totalQuestions:t.length,ready:t.length>0&&s.length===0}}function ys(e,t){const n=String(e||"n5").toLowerCase(),s=String(t||"").replace(/[^a-z0-9_-]+/gi,"-");return`${n}-final-question-${s}`}function k$(e){return Number(e?.passingPercent??e?.passThreshold??70)}function y$(){const e=r.finalTestModal;if(!e)return"";const t=e.kind==="warning",n=t?"thinking":e.passed?"proud":"sad",s=t?"":vt(e.level,"btn ghost");!t&&(!e.percent||e.percent===0)&&typeof e.correct=="number"&&e.totalQuestions>0&&(e.percent=Math.round(e.correct/e.totalQuestions*100));const a=t?[`<span>${i(p()==="ru"?"Вопросов":"Questions")} ${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Пропусков":"Missing")} ${e.missingCount}</span>`,`<span>${i(p()==="ru"?"Порог":"Pass")} ${e.threshold}%</span>`]:[`<span>${i(p()==="ru"?"Результат":"Score")} ${e.percent}%</span>`,`<span>${i(p()==="ru"?"Верно":"Correct")} ${e.correct}/${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Ошибки":"Errors")} ${e.incorrect}</span>`,`<span>${i(p()==="ru"?"Пропуски":"Missing")} ${e.unanswered}</span>`,`<span>+${e.rewardXp} XP</span>`,`<span>+${e.rewardMoon} ${i(A("coins"))}</span>`];return`
      <div class="reward-backdrop final-test-backdrop">
        <article class="reward-modal is-final-test ${t?"is-warning":"is-result"}" role="dialog" aria-modal="true">
          ${wn("eva",n,t?"review":"achievement","reward-mascot")}
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
    `}function tp(e){const t=NS(e);if(!t&&!jS(e))return"";const n=t?p()==="ru"?"Озвучить следующее чтение кандзи":"Speak the next kanji reading":p()==="ru"?"Проиграть озвучку кандзи":"Play kanji audio";return`
      <button class="audio-trigger" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" ${t?'data-tts-kind="cycle"':""} aria-label="${g(n)}" title="${g(t?"TTS":p()==="ru"?"Озвучка":"Audio")}">🔊</button>
    `}function Da(e){const t=Ir(e);return`
      <div class="reading-row reading-split">
        ${np(e,"onyomi",Xp("onyomi"),t.onyomi.kana,t.onyomi.romaji)}
        ${np(e,"kunyomi",Xp("kunyomi"),t.kunyomi.kana,t.kunyomi.romaji)}
      </div>
    `}function np(e,t,n,s,a){const o=rp(e,t,n);return`
      <div class="reading-box">
        <div class="reading-box-head">
          <span class="label">${i(n)}</span>
          ${o}
        </div>
        <strong>${i(H(s)||"—")}</strong>
        <small>${i(a||"—")}</small>
      </div>
    `}function sp(e,t,n,s){return`
          <div>
            <dt class="reading-def-head">
              <span>${i(n)}</span>
              ${rp(e,t,n)}
            </dt>
            <dd>${i(H(s||"—"))}</dd>
          </div>
        `}function rp(e,t,n){return Cs(e,t).length?`<button class="reading-tts-button" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-kind="${g(t)}" aria-label="${g(`${n} TTS`)}" title="TTS">🔊</button>`:""}function Oa(e,t="btn ghost"){const n=_S(e);if(!n)return"";const s=it(n.jlpt),a=p()==="ru"?"JLPT урок":"JLPT lesson";return s?`<button class="${t}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(n.jlpt)}">${i(n.jlpt)} · ${i(a)}</button>`:`<button class="${t} is-disabled" type="button" disabled aria-disabled="true" title="${g(Ut(n.jlpt))}">🔒 ${i(n.jlpt)}</button>`}function ap(e){if(!e?.id)return js();Xs(e,"study_card");const t=M(e.id),n=r.revealed;mS(e.id);const s=e.lessonTitle||kl(e.lessonId)||e.jlpt||"";return`
      <article class="study-card" data-review-card-id="${g(e.id)}">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(s)}</span>
            ${ai(t.state)}
          </div>
          ${tp(e)}
        </div>
        <div class="kanji-focus" aria-label="${g(e.kanji)}">${i(e.kanji)}</div>
        <h2>${i(n?L(e):A("question"))}</h2>
        <p class="label">${i(e.jlpt)} · ${e.strokes} ${i(A("strokes"))} · ${i(An(t.dueAt))}</p>
        ${n?j$(e):`
          ${$$(e)}
          <div class="actions">
            <button class="btn primary" type="button" data-action="show-answer">${i(A("showAnswer"))}</button>
            ${Oa(e)}
            <button class="btn" type="button" data-action="open-card" data-id="${g(e.id)}">⋯ ${i(A("details"))}</button>
          </div>
        `}
      </article>
    `}function $$(e){const t=r.readingCheck.cardId===e.id?r.readingCheck:{value:"",status:null,message:""},n=t.status?` is-${t.status}`:"",s=t.message||(p()==="ru"?"Напиши любое чтение этого кандзи хираганой или катаканой.":"Type any reading for this kanji in hiragana or katakana.");return`
      <section class="reading-check${n}" aria-live="polite">
        <label class="label" for="readingCheck-${g(e.id)}">${i(p()==="ru"?"Проверка чтения":"Reading check")}</label>
        <div class="reading-check-row">
          <input id="readingCheck-${g(e.id)}" data-reading-input data-id="${g(e.id)}" type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" value="${g(t.value)}" placeholder="${g(p()==="ru"?"Например: にち или ニチ":"Example: にち or ニチ")}" />
          <button class="btn ghost" type="button" data-action="check-reading" data-id="${g(e.id)}">${i(p()==="ru"?"Проверить":"Check")}</button>
        </div>
        <p>${i(s)}</p>
      </section>
    `}function Fa(e){return`
      <li class="example-item">
        <div class="example-main">
          <b>${i(e.word)}</b>
          <span>${i(H(e.reading))}</span>
          <span class="example-romaji">${i(e.romaji)}</span>
        </div>
        <small class="example-translation">${i(Ce(e))}</small>
      </li>
    `}function j$(e){return`
      <div class="answer-section">
        ${Da(e)}
        <strong>${i(A("examples"))}</strong>
        <ul class="example-list">
          ${e.examples.map(Fa).join("")}
        </ul>
        <strong>${i(A("apps"))}</strong>
        <p>${i(Er(e))}</p>
        <ul class="app-list">${e.apps.map(t=>`<li>${i(t)}</li>`).join("")}</ul>
        <div class="actions compact-actions">
          ${Oa(e)}
        </div>
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate" data-rating="forgot">${i(Ga().forgot)} <small>${i(Ga().forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate" data-rating="remember">${i(Ga().remember)} <small>${i(Nj(e))}</small></button>
        </div>
      </div>
    `}function Oo(e,t){const n=r.progress.correctCombo>=3?"leya":"eva",s=n==="leya"?"combo":"welcome",a=r.route==="review"?Math.max(r.reviewSession?.initialSize||t,1):Math.max(r.cards.length,1),o=!!e?.id;return`
      <aside data-study-side-host>
        ${kj(n,n==="leya"?"focus":"thinking",s)}
        <div class="mini-stat-row" style="margin-top:10px">
          ${T(A("review"),t,"queue",R(t,a))}
          ${T("Combo",r.progress.correctCombo,`${r.progress.bestCorrectCombo} best`,R(r.progress.correctCombo,10))}
        </div>
        ${o?`<article class="tool-panel profile-panel">
          <h3>${i(A("hint"))} · Leya</h3>
          <p>${i(Xa(e.id).hint)}</p>
          <h3>${i(A("mnemonic"))}</h3>
          <p>${i(Xa(e.id).mnemonic)}</p>
        </article>`:""}
      </aside>
    `}function br(){r.reviewExerciseResults={},r.activeExerciseReviewId=null,r.activeExerciseReviewLevel="",r.activeExerciseReviewSource="",r.activeExerciseReviewSelection=[],r.activeExerciseReviewChoice="",r.activeExerciseReviewTranslationOpen=!1}function S$(e){if(!e){r.activeCardId=null,br();return}if(r.reviewQueueLastKind=e.kind,e.kind==="card"){const t=ne(e.card?.id||e.cardId||e.progress?.cardId||"");if(!t?.id){r.activeCardId=null,br();return}r.activeCardId!==t.id&&(r.activeCardId=t.id,br());return}if(e.kind==="exercise"){const t=r.activeExerciseReviewId===e.exerciseId&&r.activeExerciseReviewLevel===e.level&&r.activeExerciseReviewSource===String(e.source||"textbook");r.activeCardId=null,r.activeExerciseReviewId=e.exerciseId,r.activeExerciseReviewLevel=e.level,r.activeExerciseReviewSource=String(e.source||"textbook"),t||(r.reviewExerciseResults={}),t||(r.activeExerciseReviewSelection=[],r.activeExerciseReviewChoice="",r.activeExerciseReviewTranslationOpen=!1)}}function Fo(e,t,n="",s=null,a=null,o="textbook"){const c=Q(e);if(!c||!t)return null;if(String(o||"textbook")==="reading"){const v=a||Mp(t,c);if(!v)return null;const w=Lr(s||{},v);return{kind:"exercise",source:"reading",key:`reading:${String(c)}:${t}`,level:c,exerciseId:t,lessonId:String(v.sourceId||n||w.lessonId||""),cardId:"",dueAt:w.dueAt?new Date(w.dueAt).getTime():0,progress:w,exercise:v,card:null}}const d=Hn(s||{},{level:c,lessonId:n,exerciseId:t,cardId:s?.cardId||"",kanji:s?.kanji||"",type:s?.type||"",title:s?.title||null,prompt:s?.prompt||"",answer:s?.answer||"",answerLabel:s?.answerLabel||""}),u=a||Xo(c,t,n||d.lessonId||"");if(!u)return null;const m=String(u.lessonId||d.lessonId||n||""),h=String(u.cardId||d.cardId||"");return{kind:"exercise",source:"textbook",key:`exercise:${c}:${t}`,level:c,exerciseId:t,lessonId:m,cardId:h,dueAt:d.dueAt?new Date(d.dueAt).getTime():0,progress:d,exercise:u,card:ne(h)||ne(d.cardId||"")}}function $s(){if(!r.activeExerciseReviewId||!r.activeExerciseReviewLevel)return null;const e=r.activeExerciseReviewLevel,t=r.activeExerciseReviewId;if(String(r.activeExerciseReviewSource||"textbook")==="reading"){const o=Mp(t,e),c=o?yn(o):r.progress.readingExercises?.[t]||null;return Fo(e,t,c?.lessonId||o?.sourceId||"",c,o,"reading")}const a=Aj(e)?.exerciseSrs?.[t]||null;return Fo(e,t,a?.lessonId||"",a,null,"textbook")}function Bo(e){return!e||e.kind!=="exercise"?null:Fo(e.level,e.exerciseId,e.lessonId||e.progress?.lessonId||"",e.progress,e.exercise||null,e.source||"textbook")}function N$(e){if(!e||typeof e!="object")return null;if(e.kind==="card"){const t=String(e.card?.id||e.cardId||e.progress?.cardId||""),n=ne(t);if(!n?.id)return null;const s=e.progress||M(n.id);return{...e,kind:"card",key:e.key||`card:${n.id}`,card:n,cardId:String(n.id),progress:s,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}}return e.kind==="exercise"?Bo(e):null}function kr(e){return(Array.isArray(e)?e:[]).map(N$).filter(Boolean)}function x$(e){const t=kr(e),n=$s();if(n&&r.reviewExerciseResults?.[n.exerciseId]||n&&!t.some(o=>o.kind==="exercise"&&o.exerciseId===n.exerciseId&&o.level===n.level))return n;const s=r.activeCardId?t.find(o=>o.kind==="card"&&o.card?.id===r.activeCardId):null;if(s)return s;const a=r.reviewQueueLastKind==="card"?"exercise":r.reviewQueueLastKind==="exercise"?"card":"";if(a){const o=t.find(c=>c.kind===a);if(o)return o}return t[0]||n||null}function A$(e,t){const n=Q(e);return n==="N5"?Od(t):n==="N4"?eu(t):n==="N3"?gu(t):n==="N2"?Nu(t):""}function C$(e){return p()==="ru"?e?.kind==="cloze"?"Предложение":"Вопрос":e?.kind==="cloze"?"Sentence":"Question"}function Go(){return p()==="ru"?"Перевод":"Translation"}function ip(e){const t=String(e||"").trim();return t?t.split(/([гЂ'пјЃпјџгЂЃ\n]+)/u).map(n=>{if(!n)return"";if(/^[гЂ'пјЃпјџгЂЃ\n]+$/u.test(n))return n===`
`?`
`:`${n} `;const s=Hp(n);return s?`${s} `:""}).join("").replace(/\s+\n/gu,`
`).replace(/[ \t]+/gu," ").replace(/\s+([гЂ'пјЃпјџгЂЃ])/gu,"$1 ").replace(/([гЂ'пјЃпјџгЂЃ])\s*$/gu,"$1").trim():""}function L$(e){const t=!!r.activeExerciseReviewTranslationOpen,n=e?.reading?H(e.reading):"",s=e?.reading?ip(e.reading):"",a=f({ru:e?.translationRu||e?.ru||"",en:e?.translationEn||e?.en||""});return`
      <div class="reading-translation-wrap">
        <button class="btn ghost reading-translation-toggle" type="button" data-action="toggle-reading-translation">${i(Go())}</button>
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
    `}function T$(e){return r.reviewExerciseResults?.[e.exerciseId]||yn(e.exercise)||null}function I$(e,t,n,s){const a=String(t?.id||n),o=s?.answers?.[a]||null,c=Array.isArray(t?.options)?t.options:[],l=c.find(u=>String(u.value||"")===String(t?.answer||"")),d=l?f(l.label||l):String(t?.answer||"");return`
      <div class="n4-question-block reading-question-block">
        <h3>${i(f(t?.prompt||e.exercise.question?.prompt||{}))}</h3>
        <div class="n5-option-grid">
          ${c.map(u=>{const m=o?.selected===u.value,h=o?.correct&&u.value===t.answer,v=o&&!o.correct&&u.value===t.answer;return`<button class="btn ${h||v?"success":m?"warning":"ghost"}" type="button" data-action="reading-review-answer" data-question="${g(a)}" data-value="${g(u.value)}" ${o||s?.completed?"disabled":""}>${i(f(u.label||u))}</button>`}).join("")}
        </div>
        ${o?`<p class="n5-feedback">${i(o.correct?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Неверно":"Wrong"} · ${d}`)}</p>`:""}
      </div>
    `}function R$(e){const t=Bo(e);if(!t||!t.exercise)return js();const n=T$(t),s=!!n?.completed,a=t.progress||yn(t.exercise),o=C$(t.exercise),c=f(t.exercise.sourceTitle||t.exercise.title||{}),l=ft(t.exercise),d=(t.exercise.kind==="question"?[t.exercise.question||t.exercise.questions?.[0]]:[]).filter(S=>S?.id),u=t.exercise.kind==="cloze"||!d.length&&l.length>0;if(!u&&!d.length)return js();const m=u?s?1:Array.isArray(a?.selectedIndices)?a.selectedIndices.length:0:Object.keys(n?.answers||{}).length,h=u?Math.max(1,l.length):Math.max(1,d.length),v=Array.isArray(a?.selectedIndices)?a.selectedIndices:Array.isArray(r.activeExerciseReviewSelection)?r.activeExerciseReviewSelection:[],w=v.map(S=>t.exercise.tiles?.[S]).filter(Boolean),$=Array.isArray(a?.wrongIndexes)?a.wrongIndexes:[],y=L$(t.exercise);return`
      <article class="study-card textbook-review-card reading-review-card ${s?n?.correct===!1?"is-wrong":"is-correct":""}" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(c||o)}</span>
          <span class="pill">${i(a.state)} · ${i(An(a.dueAt))}</span>
          <span class="pill">${i(m)}/${i(h)}</span>
        </div>
        ${y}
        ${u?`
          <div class="sentence-card reading-cloze-card">
            <div class="sentence-line">${Qu(t.exercise,w,$)}</div>
            <p class="sentence-reading">${i(t.exercise.reading||"")}</p>
            <p class="sentence-translation">${i(f({ru:t.exercise.translationRu||t.exercise.ru||"",en:t.exercise.translationEn||t.exercise.en||""}))}</p>
          </div>
          <div class="sentence-tiles">
            ${(t.exercise.tiles||[]).map((S,b)=>{const k=v.includes(b),K=$.includes(b);return`
                <button class="sentence-tile ${k?"is-used":""} ${K?"is-wrong":""}" type="button" data-action="reading-review-tile" data-index="${b}" ${k||s?"disabled":""}>
                  <span>${i(S.reading||"")}</span>
                  <strong>${i(S.kanji)}</strong>
                </button>
              `}).join("")}
          </div>
          <div class="sentence-feedback">
            ${i(n?.completed?n.correct?p()==="ru"?"Верно. Предложение собрано правильно.":"Correct. The sentence is complete.":p()==="ru"?"Проверь красные места и попробуй ещё раз.":"Check the red slots and try again.":p()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.")}
          </div>
          <div class="actions sentence-actions">
            <button class="btn primary" type="button" data-action="reading-review-check" ${s?"disabled":""}>${i(p()==="ru"?"Проверить":"Check")}</button>
            <button class="btn" type="button" data-action="reading-review-undo" ${!v.length||s?"disabled":""}>${i(p()==="ru"?"Убрать":"Undo")}</button>
            <button class="btn" type="button" data-action="reading-review-clear" ${!v.length||s?"disabled":""}>${i(p()==="ru"?"Очистить":"Clear")}</button>
          </div>
        `:d.map((S,b)=>I$(t,S,b,n)).join("")}
        ${s?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function _$(e){const t=Bo(e);if(!t||!t.exercise)return js();if(t.source==="reading")return R$(t);const n=!!r.reviewExerciseResults?.[t.exerciseId];return`
      <article class="study-card textbook-review-card" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(t.lessonId||t.progress.lessonId||"")}</span>
          <span class="pill">${i(t.progress.state)} · ${i(An(t.progress.dueAt))}</span>
        </div>
        ${A$(t.level,t.exercise)}
        ${n?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function M$(e){return`
      <article class="empty-state">
          <span class="kanji-char">⚠</span>
        <h2>${i(Re("eva","lessonComplete"))}</h2>
        <p>${i(e?Pr(e):"")}</p>
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="review">↻ ${i(A("review"))}</button>
          <button class="btn" type="button" data-action="route" data-route="dictionary">文 ${i(A("dictionary"))}</button>
        </div>
      </article>
    `}function js(){return`
      <article class="empty-state">
        <span class="kanji-char">休</span>
        <h2>${i(p()==="ru"?"Повторов сейчас нет":"No reviews right now")}</h2>
        <p>${i(Re("leya","welcome"))}</p>
        <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(A("learn"))}</button>
      </article>
    `}function P$(){const e=cS(),t=Math.max(Ks,Number(r.dictionaryVisibleCount||Ks)),n=e.slice(0,t),s=n.length<e.length,a=r.cards.filter(u=>!!r.progress.favorites[u.id]).length,o=["all",...new Set(r.cards.map(u=>u.jlpt))],c=["all",...new Set(r.cards.map(u=>Tr(u.id).radical).filter(Boolean))],l=p()==="ru"?`Показано ${n.length} из ${e.length}`:`Showing ${n.length} of ${e.length}`,d=p()==="ru"?"Показать ещё":"Show more";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(A("dictionary"))}</h1>
            <p>${i(l)} · ${e.length}/${r.cards.length}</p>
          </div>
        </div>
        ${E$(a)}
        <div class="filters">
          <div class="field">
            <label for="dictionarySearch">${i(A("search"))}</label>
            <input id="dictionarySearch" data-filter="query" type="search" value="${g(r.filters.query)}" placeholder="日, にち, sun" autocomplete="off" />
          </div>
          <div class="field">
            <label for="jlptFilter">JLPT</label>
            <select id="jlptFilter" data-filter="jlpt">
              ${o.map(u=>`<option value="${g(u)}" ${Fr(u,r.filters.jlpt)}>${i(u==="all"?A("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="strokeFilter">${i(A("strokes"))}</label>
            <select id="strokeFilter" data-filter="strokes">
              ${[["all",A("all")],["1-4","1-4"],["5-8","5-8"],["9-12","9-12"],["13+","13+"]].map(([u,m])=>`<option value="${u}" ${Fr(u,r.filters.strokes)}>${i(m)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="radicalFilter">${i(A("radical"))}</label>
            <select id="radicalFilter" data-filter="radical">
              ${c.map(u=>`<option value="${g(u)}" ${Fr(u,r.filters.radical)}>${i(u==="all"?A("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="favoriteFilter">${i(A("favorites"))}</label>
            <select id="favoriteFilter" data-filter="favorites">
              <option value="all" ${Fr("all",r.filters.favorites)}>${i(A("all"))}</option>
              <option value="yes" ${Fr("yes",r.filters.favorites)}>★</option>
            </select>
          </div>
        </div>
        <div class="dictionary-grid" style="margin-top:12px">${n.map(K$).join("")||O$()}</div>
        ${s?`
          <div class="dictionary-load-more">
            <span>${i(l)}</span>
            <button class="btn primary" type="button" data-action="dictionary-load-more">${i(d)}</button>
          </div>
        `:""}
      </section>
    `}function E$(e){const t=r.filters.favorites==="yes",n=p()==="ru"?"Все кандзи":"All kanji",s=p()==="ru"?"Избранные":"Favorites";return`
      <div class="dictionary-tabs" role="tablist" aria-label="${g(A("dictionary"))}">
        <button class="btn ${t?"":"is-active"}" type="button" role="tab" aria-selected="${t?"false":"true"}" data-action="dictionary-favorites-tab" data-favorites="all">
          ${i(n)}
          <span class="dictionary-tab-count">${r.cards.length}</span>
        </button>
        <button class="btn ${t?"is-active":""}" type="button" role="tab" aria-selected="${t?"true":"false"}" data-action="dictionary-favorites-tab" data-favorites="yes">
          ★ ${i(s)}
          <span class="dictionary-tab-count">${e}</span>
        </button>
      </div>
    `}function K$(e){const t=M(e.id),n=Tr(e.id),s=!!r.progress.favorites[e.id];return`
      <button class="kanji-tile" type="button" data-action="open-card" data-id="${g(e.id)}">
        ${D$(e)}
        <div class="tag-row">
          ${ai(t.state)}
          <span class="pill">${i(e.jlpt)}</span>
          <span class="pill">${e.strokes} ${i(A("strokes"))}</span>
          <span class="pill">${i(A("radical"))}: ${i(n.radical||"-")}</span>
          <span class="pill">${i(A("learnedStatus"))}: ${i(fg(t.state))}</span>
          <span class="pill">${s?"★":"☆"}</span>
        </div>
      </button>
    `}function D$(e){return`
      <span class="kanji-line">
        <span class="kanji-char">${i(e.kanji)}</span>
        <span>
          <h3>${i(L(e))}</h3>
          <p>${i(il(e))}</p>
          <span class="label">${i(kl(e.lessonId))}</span>
        </span>
      </span>
    `}function O$(){const e=r.filters.favorites==="yes",t=e?p()==="ru"?"В избранном пока пусто":"No favorites yet":p()==="ru"?"Ничего не найдено":"Nothing found",n=e?p()==="ru"?"Открой кандзи и нажми звездочку, чтобы он появился здесь.":"Open a kanji and tap the star to keep it here.":"";return`<article class="empty-state"><span class="kanji-char">無</span><h2>${i(t)}</h2>${n?`<p>${i(n)}</p>`:""}</article>`}function F$(){const e=ne(r.kanjiPageId||Il());if(!e)return`
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">無</span>
            <h1>${i(p()==="ru"?"Кандзи не найден":"Kanji not found")}</h1>
            <p>${i(p()==="ru"?"Открой словарь и выбери карточку заново.":"Open the dictionary and choose a card again.")}</p>
            <button class="btn primary" type="button" data-action="route" data-route="dictionary">⋯ ${i(A("dictionary"))}</button>
          </article>
        </section>
      `;const t=M(e.id),n=Tr(e.id),s=!!r.progress.favorites[e.id],a=nj(e,p()),o=B$(e),c=Vo(e);return`
      <section class="page kanji-page">
        <div class="section-head kanji-page-head">
          <div>
            <button class="btn ghost" type="button" data-action="route" data-route="dictionary">← ${i(A("dictionary"))}</button>
            <h1>${i(o?`${e.kanji} — ${G$(o)}`:e.kanji)}</h1>
            <p>${i(o?z$(o):L(e))}</p>
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="study-card" data-id="${g(e.id)}">▶ ${i(A("study"))}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${g(e.id)}">${s?"★":"☆"} ${i(A("favorites"))}</button>
          </div>
        </div>

        <article class="kanji-profile-card">
          <div class="kanji-profile-hero">
            <div class="kanji-profile-char" aria-label="${g(e.kanji)}">${i(e.kanji)}</div>
            <div class="kanji-profile-summary">
              <div class="tag-row">
                ${ai(t.state)}
                <span class="pill">${i(e.jlpt)}</span>
                <span class="pill">${e.strokes} ${i(A("strokes"))}</span>
                <span class="pill">${i(A("radical"))}: ${i(n.radical||"-")} ${i(f(n.radicalMeaning||{}))}</span>
                ${o?`<span class="pill">Grade ${i(o.kanjidic2.grade||"-")}</span><span class="pill">Freq ${i(o.kanjidic2.freq||"-")}</span>`:""}
              </div>
              <h2>${i(L(e))}</h2>
              <p>${i(Er(e))}</p>
              ${Da(e)}
              ${Jo(e)}
            </div>
          </div>
        </article>

        <div class="kanji-profile-grid">
          ${o?J$(o):""}
          ${o?U$(o):""}
          <article class="kanji-profile-card">
            <h2>${i(A("examples"))}</h2>
            <ul class="example-list">${e.examples.map(Fa).join("")||`<li>${i(p()==="ru"?"Примеры пока не добавлены.":"No examples yet.")}</li>`}</ul>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(p()==="ru"?"Предложения":"Sentences")}</h2>
            ${o?q$(o):V$(e)}
          </article>

          <article class="kanji-profile-card">
            <h2>${i(A("strokeOrder"))}</h2>
            <p class="label">${i(c?p()==="ru"?"Есть точные SVG-штрихи KanjiVG для практики.":"Precise KanjiVG SVG stroke data is available for practice.":p()==="ru"?"Точного SVG-пути пока нет, доступен полупрозрачный шаблон.":"Precise SVG paths are not available yet; template mode is available.")}</p>
            <ol class="stroke-list">${Ar(e).map(l=>`<li>${i(l)}</li>`).join("")}</ol>
            <div class="actions compact-actions">
              ${Oa(e)}
            </div>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(A("apps"))}</h2>
            <p>${i(Er(e))}</p>
            <ul class="app-list">${e.apps.map(l=>`<li>${i(l)}</li>`).join("")}</ul>
            ${o?W$(o):""}
            <h3>${i(p()==="ru"?"SEO-страница":"SEO page")}</h3>
            <p class="label">${i(p()==="ru"?"Статическая HTML-страница для поисковиков и превью.":"Static HTML page for search engines and link previews.")}</p>
            <a class="btn primary" href="${g(a)}" target="_blank" rel="noopener">в†— ${i(p()==="ru"?"Публичная страница":"Public page")}</a>
          </article>
          ${o?X$(o):""}
        </div>
      </section>
    `}function B$(e){return r.kanjiPageSources?.[e?.kanji]||null}function G$(e){return op(e.meanings)[0]||e.literal}function op(e){return e?e[p()]||e.ru||e.en||[]:[]}function Ss(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function z$(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{};return[t.why,t.firstSeen].filter(Boolean).join(" ")}function J$(e){const t=e.kanjidic2||{},n=t.codepoints?.unicode||`U+${t.codepoints?.ucs||""}`;return`
      <article class="kanji-profile-card kanji-facts-card">
        <h2>${i(p()==="ru"?"Факты KANJIDIC2":"KANJIDIC2 facts")}</h2>
        <dl class="kanji-fact-grid">
          <div><dt>${i(p()==="ru"?"Значения":"Meanings")}</dt><dd>${i(op(e.meanings).join(", "))}</dd></div>
          <div><dt>Onyomi</dt><dd>${i((e.readings?.onyomi||[]).join(" / "))}</dd></div>
          <div><dt>Kunyomi</dt><dd>${i((e.readings?.kunyomi||[]).join(" / "))}</dd></div>
          <div><dt>JLPT</dt><dd>${i(e.jlpt)} <small>${i(Ss(e.modernJlptNote||{}))}</small></dd></div>
          <div><dt>${i(A("strokes"))}</dt><dd>${i(t.strokeCount||"-")}</dd></div>
          <div><dt>${i(A("radical"))}</dt><dd>${i(`${t.radical||"-"} ${t.radicalLiteral||""} ${Ss(t.radicalName||{})}`)}</dd></div>
          <div><dt>Grade</dt><dd>${i(t.grade||"-")}</dd></div>
          <div><dt>Unicode</dt><dd>${i(n)}</dd></div>
          <div><dt>Freq</dt><dd>${i(t.freq||"-")}</dd></div>
          <div><dt>${i(p()==="ru"?"Варианты":"Variants")}</dt><dd>${i((e.variants||[]).join(" / ")||"-")}</dd></div>
        </dl>
        <p class="source-note">${i(t.source||"KANJIDIC2 / EDRDG")}</p>
      </article>
    `}function U$(e){return`
      <article class="kanji-profile-card">
        <h2>${i(p()==="ru"?"Полезные слова JMdict":"Useful JMdict words")}</h2>
        <ul class="kanji-word-list">
          ${(e.commonWords||[]).slice(0,10).map(t=>`
            <li>
              <a href="${g(Q$(t))}">
                <b>${zo(t.surface,e.literal)}</b>
                <span>${i(t.reading)} · ${i(Ss(t.gloss||{}))}</span>
                <small>${i(t.partOfSpeech||"")} · JMdict ${i(t.jmdictSeq||"")}</small>
              </a>
            </li>
          `).join("")}
        </ul>
      </article>
    `}function q$(e){return`
      <ul class="kanji-sentence-list">
        ${H$(e).map(n=>`
          <li>
            <strong>${zo(n.japanese,e.literal)}</strong>
            <small>${i(Ss(n.translation||{}))}</small>
            <span class="source-note">${i(`${n.sourceName||"Tatoeba"} #${n.sourceId}${n.author?` · ${n.author}`:""}${n.license?` · ${n.license}`:""}`)}</span>
          </li>
        `).join("")}
      </ul>
    `}function H$(e){const t=new Set,n=new Set((e.commonWords||[]).map(s=>s.surface));return(e.sentences||[]).filter(s=>{const a=s.japanese||"";if(!a.includes(e.literal)||t.has(a))return!1;t.add(a);const o=a.replace(/[\sгЂ'гЂЃпјЃпјџ!?гЂЊгЂЌгЂЋгЂЏпј€пј‰()гѓ»гЂњгѓј]/g,"").length;return!(o<3||o>44)}).sort((s,a)=>Number(lp(a.japanese,n))-Number(lp(s.japanese,n))).slice(0,8)}function lp(e,t){return[...t].some(n=>e.includes(n))}function W$(e){return`
      <h3>${i(p()==="ru"?"В интерфейсах":"In interfaces")}</h3>
      <div class="interface-mock-grid">
        ${(e.interfaceContexts||[]).slice(0,6).map(t=>`
          <article class="interface-mock-card ${g(t.type||"card")}">
            <span>${i(Ss(t.title||{}))}</span>
            <strong>${zo(t.japanese,e.literal)}</strong>
            <small>${i(Ss(t.translation||{}))}</small>
          </article>
        `).join("")}
      </div>
    `}function X$(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{},n=p()==="ru"?["Почему этот кандзи важен","Частая путаница","Где встретишь раньше всего","На что обратить внимание"]:["Why this kanji matters","Common confusion","Where you will meet it first","What to watch"],s=[t.why,t.confusion,t.firstSeen,t.focus];return`
      <article class="kanji-profile-card editorial-card">
        <h2>${i(p()==="ru"?"Заметки Flash Kanji":"Flash Kanji notes")}</h2>
        ${s.map((a,o)=>a?`<section><h3>${i(n[o])}</h3><p>${i(a)}</p></section>`:"").join("")}
      </article>
    `}function Q$(e){return`../word/${encodeURIComponent(e.surface||"")}/`}function zo(e,t){const n=String(t||""),s=String(e||"");return n?s.split(n).map(i).join(`<mark class="kanji-hit" data-kanji="${g(n)}">${i(n)}</mark>`):i(s)}function V$(e){const t=Y$(e);return t.length?`
      <ul class="kanji-sentence-list">
        ${t.map(n=>`
          <li>
            <strong>${tj(n)}</strong>
            <span>${i(Z$(n))}</span>
            <small>${i(ej(n))}</small>
          </li>
        `).join("")}
      </ul>
    `:`<p class="label">${i(p()==="ru"?"Подходящие предложения появятся, когда база практики содержит этот кандзи.":"Matching sentences will appear when the practice database contains this kanji.")}</p>`}function Y$(e){const t=e?.kanji||"";return t?(r.sentenceExercises||[]).filter(n=>{const s=cp(n),a=(n.blanks||[]).flatMap(o=>o.answer||[]).join("");return s.includes(t)||a.includes(t)}).slice(0,6):[]}function cp(e){return e?.sentence||e?.jp||""}function Z$(e){return e?.reading||e?.hiragana||""}function ej(e){return p()==="en"?e?.translationEn||e?.en||e?.translationRu||e?.ru||"":e?.translationRu||e?.ru||e?.translationEn||e?.en||""}function tj(e){let t=i(cp(e));return(e?.blanks||[]).map(s=>(s.answer||[]).join("")).forEach(s=>{t=t.replace("___",`<mark>${i(s)}</mark>`)}),t}function nj(e,t="ru"){return`../${t==="en"?"en":"ru"}/kanji/${sj(e)}/`}function sj(e){const t=String(e?.kanji||""),n=Array.from(t).map(o=>`u${o.codePointAt(0).toString(16).padStart(4,"0")}`).join("-"),a=(String(e?.romaji||e?.onyomi_romaji||e?.kunyomi_romaji||"kanji").toLowerCase().split(/[\/,;|()\s]+/).find(o=>/[a-z]/.test(o))||"kanji").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"kanji";return`${n||"kanji"}-${a}`}function rj(){const e=ne(r.activeCardId)||nl()[0]||r.cards[0];e&&(r.activeCardId=e.id,r.activeLessonId=e.lessonId,r.writingStep=ce(r.writingStep,0,Math.max(0,ht(e)-1)));const t=Vo(e),n=ht(e),s=p()==="ru"?"Шаг":"Step",a=p()==="ru"?"Получилось":"Got it",o=p()==="ru"?"Показать образец":"Show sample",c=t?p()==="ru"?"Точные SVG-штрихи KanjiVG":"Precise KanjiVG SVG strokes":p()==="ru"?"Fallback: шаблон без фейковых штрихов":"Fallback: template without fake strokes";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(A("writingPractice"))}</h1>
            <p>${i(e?`${e.kanji} · ${L(e)}`:"")}</p>
          </div>
        </div>
        <div class="writing-layout">
          <article class="writing-card" data-section="writing-demo">
            <div class="kanji-focus writing-focus">${i(e?.kanji||"文")}</div>
            ${e?Da(e):""}
            ${e?`<div class="actions"><button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 ${i(A("audio"))}</button></div>`:""}
            <div class="stroke-demo">
              <canvas id="strokeCanvas" width="520" height="280" aria-label="stroke order animation"></canvas>
            </div>
            <div class="writing-step-panel">
              <div class="writing-step-head">
                <span class="pill" id="writingStepCounter">${s} ${r.writingStep+1}/${n}</span>
                <span class="label">${i(Ar(e)[r.writingStep]||"")}</span>
                <span class="writing-mode-note">${i(c)}</span>
              </div>
              <div class="writing-step-actions">
                <button class="btn" type="button" data-action="writing-step-prev">←</button>
                <button class="btn primary" type="button" data-action="play-writing-step">${i(o)}</button>
                <button class="btn" type="button" data-action="writing-step-next">→</button>
              </div>
            </div>
            <div class="actions">
              <button class="btn primary" type="button" data-action="replay-writing">${i(A("replay"))}</button>
            </div>
          </article>
          <article class="writing-card">
            <h3>${i(A("strokeOrder"))}</h3>
            ${e?aj(e):""}
            <h3>${i(A("hint"))}</h3>
            <p>${i(Xa(e?.id).hint)}</p>
            <h3>${i(A("mnemonic"))}</h3>
            <p>${i(Xa(e?.id).mnemonic)}</p>
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
              <button class="btn" type="button" data-action="clear-writing">${i(A("clear"))}</button>
              <button class="btn" type="button" data-action="replay-writing">${i(A("replay"))}</button>
            </div>
            <div class="writing-feedback" id="writingFeedback">${i(p()==="ru"?"Напиши кандзи поверх образца и нажми «Получилось» для самопроверки.":"Write over the guide and tap 'Got it' for self-check.")}</div>
          </article>
        </div>
      </section>
    `}function aj(e){return`
      <ol class="stroke-list writing-guide-list">
        ${Ar(e).map((n,s)=>`
          <li class="${s===r.writingStep?"is-active":""}">
            <button type="button" data-action="select-writing-step" data-index="${s}">
              <b>${s+1}</b>
              <span>${i(n)}</span>
            </button>
          </li>
        `).join("")}
      </ol>
    `}function ij(){if(!r.detailCardId)return"";const e=ne(r.detailCardId);if(!e)return"";const t=M(e.id),n=Tr(e.id),s=!!r.progress.favorites[e.id];return`
      <div class="detail-backdrop">
        <article class="detail-sheet" role="dialog" aria-modal="true">
          <div class="detail-title">
            <span class="kanji-char">${i(e.kanji)}</span>
            <div>
              <span class="pill">${i(e.jlpt)}</span> ${ai(t.state)}
              <h2>${i(L(e))}</h2>
              <p>${i(il(e))} · ${e.strokes} ${i(A("strokes"))}</p>
              <p><span class="pill">${i(A("radical"))}: ${i(n.radical||"-")} ${i(f(n.radicalMeaning||{}))}</span></p>
            </div>
          </div>
          ${Da(e)}
          ${Jo(e)}
          <h3>${i(A("strokeOrder"))}</h3>
          <ol class="stroke-list">${e.stroke_order.map(a=>`<li>${i(a)}</li>`).join("")}</ol>
          <h3>${i(A("examples"))}</h3>
          <ul class="example-list">${e.examples.map(Fa).join("")}</ul>
          <h3>${i(A("apps"))}</h3>
          <p>${i(Er(e))}</p>
          <ul class="app-list">${e.apps.map(a=>`<li>${i(a)}</li>`).join("")}</ul>
          <div class="actions" style="margin-top:14px">
            <button class="btn primary" type="button" data-action="study-card" data-id="${g(e.id)}">▶ ${i(A("study"))}</button>
            <button class="btn" type="button" data-action="open-kanji-page" data-id="${g(e.id)}">↗ ${i(p()==="ru"?"Страница":"Page")}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${g(e.id)}">${s?"★":"☆"} ${i(A("favorites"))}</button>
            ${Oa(e)}
            <button class="btn" type="button" data-action="close-detail">OK</button>
          </div>
        </article>
      </div>
    `}function Jo(e){const t=ol(e),n=Cs(e);return`
      <section class="audio-panel">
        <h3>${i(A("audio"))}</h3>
        <div class="actions">
          ${t?`<button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 Kanji</button>`:""}
          ${oj(e,n)}
          ${!t&&!n.length?`<span class="label">${i(p()==="ru"?"Озвучка для этой карточки пока не найдена.":"Audio for this card is not available yet.")}</span>`:""}
        </div>
      </section>
    `}function oj(e,t=Cs(e)){return t.length?`
          <div class="reading-tts-list" aria-label="${g(p()==="ru"?"Системная озвучка чтений":"System reading TTS")}">
            ${t.map(n=>`
              <button class="btn ghost reading-tts-choice" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-text="${g(n.kana)}" data-tts-label="${g(Uo(n))}">
                <span>${i(Uo(n))}</span>
                ${i(n.kana)}
              </button>
            `).join("")}
          </div>
        `:""}function Uo(e){return e.kind==="onyomi"?Va("onyomi"):e.kind==="kunyomi"?Va("kunyomi"):e.label||"TTS"}function lj(){const e=sl(),t=Jt(),n=qt();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(A("stats"))}</h1>
            <p>${i(A("xp"))} · ${i(A("level"))} · ${i(A("coins"))}</p>
          </div>
          <div class="actions">
            ${Is("stats")}
            <button class="btn primary" type="button" data-action="route" data-route="achievements">в—ђ ${i(A("achievements"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${T(A("xp"),`${n.current}/${n.next}`,`${A("level")} ${r.progress.level}`,n.percent)}
          ${T(A("streak"),r.progress.streak.current,`${r.progress.streak.best} best`,R(r.progress.streak.current,30))}
          ${T(A("mastered"),e.mastered,`${e.total}`,R(e.mastered,e.total))}
          ${T(A("successRate"),`${Dp()}%`,`${rl()} reviews`,Dp())}
          ${T(A("errors"),t.mistakes||0,`${r.progress.totalWrong} total`,R(t.mistakes||0,Math.max(t.reviews||1,1)))}
        </div>
        <div class="stats-grid" style="margin-top:12px">
          <article class="chart-panel"><h3>${i(A("activity"))}</h3><div class="chart-box"><canvas id="activityChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(A("streak"))}</h3><div class="chart-box"><canvas id="streakChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(A("jlptProgress"))}</h3><div class="chart-box"><canvas id="jlptChart"></canvas></div></article>
          <article class="chart-panel"><h3>Повторение</h3><div class="chart-box"><canvas id="stateChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(A("errors"))}</h3><div class="chart-box"><canvas id="mistakeChart"></canvas></div></article>
          <article class="tool-panel">${dj()}</article>
          <article class="tool-panel" data-section="shop-panel">${pj()}</article>
          <article class="tool-panel">${pp()}</article>
          <article class="tool-panel">
            <h3>${i(A("settings"))}</h3>
            <div class="settings-list">
              <div class="settings-row">
                <span>
                  <strong>${i(sn().badge)}</strong>
                  <small>${i(sn().hint)}</small>
                </span>
                <span class="pill">${i(sn().status)}</span>
              </div>
              <div class="settings-row">
                <span>
                  <strong>${i(p()==="ru"?"Звуки интерфейса":"UX sounds")}</strong>
                  <small>${i(p()==="ru"?"Клики, ответы, награды и уведомления.":"Clicks, answers, rewards, and in-app notices.")}</small>
                </span>
                <button class="btn ${si()?"success":"ghost"}" type="button" data-action="toggle-ux-sound">${si()?"On":"Off"}</button>
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
                <input class="ux-volume-slider" type="range" min="0" max="100" step="5" value="${Math.round(ri()*100)}" data-ux-volume />
                <strong class="volume-value" data-ux-volume-label>${Math.round(ri()*100)}%</strong>
              </label>
            </div>
            <div class="actions">
              <button class="btn primary" type="button" data-action="export">⬇ ${i(A("export"))}</button>
              <button class="btn" type="button" data-action="import">⬆ ${i(A("import"))}</button>
              <button class="btn danger" type="button" data-action="reset">↺ ${i(A("reset"))}</button>
            </div>
          </article>
        </div>
      </section>
    `}function qn(){return r.achievements?.length?r.achievements:r.rewards?.achievements||[]}function cj(){return r.achievementCategories?.length?r.achievementCategories:[...new Set(qn().map(t=>t.category||"learning"))].map(t=>({id:t,title:{ru:t,en:t},icon:"moon"}))}function qo(e){return f(e.title||e.name||{ru:e.id,en:e.id})}function dp(e){return f(e.description||{})}function Ho(e){return{moon:"月",book:"ж›ё",memory:"記",flame:"зЃ«",star:"星",brush:"з­†",text:"文",lock:"йЌµ",eye:"眼"}[e]||"в—†"}function dj(){return`<h3>${i(A("achievements"))}</h3><div class="achievement-grid compact">${qn().slice(0,8).map(up).join("")}</div>`}function uj(){const e=qn(),t=Q0(),n=e.reduce((s,a)=>({xp:s.xp+(a.rewardXp||0),coins:s.coins+(a.rewardFragments||0)}),{xp:0,coins:0});return`
      <section class="page achievements-page">
        <div class="section-head">
          <div>
            <h1>${i(A("achievements"))}</h1>
            <p>${i(p()==="ru"?"Лунные цели, секреты Евы и Леи, награды за прогресс.":"Moon goals, Eva and Leya secrets, and progress rewards.")}</p>
          </div>
          <div class="actions">
            ${Is("achievements")}
            <button class="btn" type="button" data-action="route" data-route="stats">в–Ґ ${i(A("stats"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${T(A("achievements"),`${t}/${e.length}`,p()==="ru"?"открыто":"unlocked",R(t,e.length))}
          ${T("XP",n.xp,p()==="ru"?"в наградах":"in rewards",R(t,e.length))}
          ${T(A("coins"),n.coins,p()==="ru"?"в наградах":"in rewards",R(t,e.length))}
          ${T(p()==="ru"?"Секреты":"Secrets",`${e.filter(s=>s.secret&&Ps(s.id)).length}/${e.filter(s=>s.secret).length}`,"Eva · Leya",R(e.filter(s=>s.secret&&Ps(s.id)).length,Math.max(1,e.filter(s=>s.secret).length)))}
        </div>
        <div class="achievement-category-list">
          ${cj().map(s=>{const a=e.filter(c=>c.category===s.id);if(!a.length)return"";const o=a.filter(c=>Ps(c.id)).length;return`
              <section class="achievement-category">
                <div class="section-head compact-head">
                  <div>
                    <h2>${Ho(s.icon)} ${i(f(s.title))}</h2>
                    <p>${o}/${a.length}</p>
                  </div>
                  <span class="pill">${R(o,a.length)}%</span>
                </div>
                <div class="achievement-grid expanded">${a.map(c=>up(c,!0)).join("")}</div>
              </section>
            `}).join("")}
        </div>
      </section>
    `}function up(e,t=!1){const n=Ps(e.id),s=yp(e),a=Math.max(1,Number(e.target||1)),o=R(s,a),c=Math.min(s,a),l=e.secret&&!n&&!t?p()==="ru"?"Секретное достижение":"Secret achievement":qo(e),d=e.secret&&!n&&!t?p()==="ru"?"Откроется при необычном действии.":"Unlocked by an unusual action.":dp(e);return`
      <div class="achievement ${n?"is-unlocked":""} ${e.secret?"is-secret":""}">
        <span class="achievement-icon">${Ho(e.icon)}</span>
        <strong>${i(l)}</strong>
        <small>${i(d)}</small>
        <div class="achievement-progress" aria-label="${g(`${c}/${a}`)}"><i style="width:${o}%"></i></div>
        <small class="achievement-reward">+${e.rewardXp||0} XP · +${e.rewardFragments||0} ${i(A("coins"))}</small>
      </div>
    `}function pj(){return gd({closable:!1})}function pp(e={}){const t=e.limit||10,n=(r.progress.transactions||[]).slice(0,t);return`
      <h3>${i(A("transactions"))}</h3>
      <div class="transaction-list">
        ${n.map(s=>`
          <div class="transaction-row">
            <div>
              <strong>${i(gj(s))}</strong>
              <small>${i(h0(s.at))}</small>
            </div>
            <span>${Number(s.coins||0)>=0?"+":""}${Number(s.coins||0)} Moon · ${Number(s.xp||0)>=0?"+":""}${Number(s.xp||0)} XP</span>
          </div>
        `).join("")||`<p>${i(p()==="ru"?"Пока нет операций.":"No transactions yet.")}</p>`}
      </div>
    `}function gj(e){if(e.label)return e.label;const t=String(e.reason||""),n=t.match(/^customization:[^:]+:(.+)$/);if(n){const s=pe(n[1]);if(s)return dt(s)}return t.startsWith("achievement:")?p()==="ru"?"Достижение":"Achievement":t.startsWith("daily_bonus")?p()==="ru"?"Ежедневный бонус":"Daily bonus":t.startsWith("sentence")?p()==="ru"?"Практика предложений":"Sentence practice":t.startsWith("writing")?p()==="ru"?"Практика письма":"Writing practice":t.startsWith("lesson")?p()==="ru"?"Урок":"Lesson":t.startsWith("review")?p()==="ru"?"Повторение":"Review":t.startsWith("shop:")?p()==="ru"?"Магазин":"Shop":p()==="ru"?"Операция":"Transaction"}function mj(){if(!r.rewardModal)return"";const e=r.rewardModal,t=e.type==="level",n=e.type==="achievement",s=qt(),a=t?`${A("level")} ${r.progress.level} - ${s.current}/${s.next} XP - ${r.progress.moonFragments} ${A("coins")}`:e.message;return`
      <div class="reward-backdrop ${t?"is-level":""}">
        <article class="reward-modal ${t?"is-level":""} ${n?"is-achievement":""}">
          ${t?'<img class="reward-logo" src="assets/logo.webp" alt="Flash Kanji" />':""}
          ${n?`<div class="reward-achievement-icon">${Ho(e.icon)}</div>`:""}
          <div class="reward-modal-actions">
            ${t?`<button class="btn primary share-btn" type="button" data-action="share-achievement">${i(A("shareAchievement"))}</button>`:""}
            <button class="btn primary" type="button" data-action="close-reward">OK</button>
          </div>
          ${wn(e.mascot||"eva",e.mood||"happy",e.dialog||"achievement","reward-mascot")}
          <h2>${i(e.title)}</h2>
          <p>${i(a)}</p>
          <div class="reward-values">
            ${t?`<span>${i(A("level"))} ${r.progress.level}</span>`:""}
            ${e.xp?`<span>+${e.xp} XP</span>`:""}
            ${t?`<span>${s.current}/${s.next} XP</span>`:""}
            ${e.coins?`<span>+${e.coins} ${i(A("coins"))}</span>`:""}
            ${t?`<span>${r.progress.moonFragments} ${i(A("coins"))}</span>`:""}
          </div>
        </article>
      </div>
    `}function fj(){if(!r.contactModal)return"";const e=p()==="ru"?"Сообщить об ошибке":"Report a bug",t=p()==="ru"?"Если почтовое приложение не открывается, скопируй адрес и отправь сообщение вручную.":"If your mail app does not open, copy the address and send the message manually.",n=p()==="ru"?"Скопировать email":"Copy email",s=p()==="ru"?"Открыть почту":"Open email",a=p()==="ru"?"Закрыть":"Close",o=encodeURIComponent(Bg),c=encodeURIComponent(p()==="ru"?`Привет! Я нашел ошибку в Flash Kanji:

`:`Hi! I found an issue in Flash Kanji:

`),l=`mailto:${Qt}?subject=${o}&body=${c}`;return`
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
            <strong>${i(Qt)}</strong>
            <small>${i(p()==="ru"?"Для багов, багрепортов и ошибок интерфейса.":"For bugs, bug reports, and UI issues.")}</small>
          </div>
          <div class="actions contact-modal-actions">
            <button class="btn ghost" type="button" data-action="copy-contact-email">${i(n)}</button>
            <a class="btn primary" href="${g(l)}">${i(s)}</a>
            <button class="btn" type="button" data-action="close-contact-modal">${i(a)}</button>
          </div>
        </article>
      </div>
    `}function hj(){const e=r.changelogModal;if(!e?.entry)return"";const t=e.entry,n=p(),s=f(t.title||{})||(n==="ru"?"Что нового во Flash Kanji":"What’s new in Flash Kanji"),a=Array.isArray(t.items?.[n])&&t.items[n].length?t.items[n]:t.items?.ru||t.items?.en||[],o=n==="ru"?"Мы обновили учебники и ускорили учебные действия. Это окно появится только один раз для этой версии.":"Textbooks were updated and study actions are faster. This window appears only once for this version.",c=n==="ru"?"Понятно":"Got it";return`
      <div class="reward-backdrop changelog-backdrop">
        <article class="reward-modal changelog-modal" role="dialog" aria-modal="true" aria-labelledby="changelogTitle" aria-describedby="changelogDescription">
          <div class="changelog-kicker">Flash Kanji · ${i(t.version||e.version||"")}</div>
          <h2 id="changelogTitle">${i(s)}</h2>
          ${t.date?`<p class="changelog-date">${i(t.date)}</p>`:""}
          <p id="changelogDescription">${i(o)}</p>
          <ul class="changelog-list">
            ${a.map(l=>`<li>${i(l)}</li>`).join("")}
          </ul>
          <p class="changelog-storage-note">${i(n==="ru"?`Статус хранится локально: ${mi}, ${fi}.`:`Saved locally: ${mi}, ${fi}.`)}</p>
          <div class="actions changelog-actions">
            <button class="btn primary" type="button" data-action="close-changelog">${i(c)}</button>
          </div>
        </article>
      </div>
    `}function vj(){if(!r.pwaInstallHelpVisible)return"";const e=Ms(),t=p()==="ru"?"Как установить приложение":"How to install the app",n=p()==="ru"?"Кнопка открыла подсказку, потому что браузер ещё не показал системное окно установки.":"The button opened a quick guide because the browser has not yet shown the system install prompt.",s=p()==="ru"?"Понятно":"Got it",a=e?p()==="ru"?["Открой Flash Kanji в Safari.","Нажми “Поделиться”, затем “На экран Домой”.","Подтверди установку."]:["Open Flash Kanji in Safari.","Tap Share, then choose Add to Home Screen.","Confirm the install."]:p()==="ru"?["Открой меню браузера.","Найди пункт “Установить приложение” или “Установить Flash Kanji”.","Подтверди установку."]:["Open the browser menu.","Choose Install app or Install Flash Kanji.","Confirm the install."];return`
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
    `}function wj(){if(td()||r.pwaInstallHelpVisible||!Sl()||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal)return"";const e=vg(),t=!Yt&&Ms();return`
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
    `}function bj(){if(td()||!r.notificationPromptVisible||!ci("visible")||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal||r.pwaInstallHelpVisible||Sl())return"";const e=jg();return`
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
    `}function kj(e,t,n){const s=_s(e),a=Ba(e,t,n),o=hp(Re(e,n));return`
      <article class="sidekick mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(a)}" alt="${g(f(s.name))}" />
        <div><strong>${i(f(s.name))}</strong><p>${i(o)}</p></div>
      </article>
    `}function wn(e,t,n,s){const a=_s(e),o=Ba(e,t,n),c=hp(Re(e,n)),l=`${s||"mascot"}:${e}:${n}:${r.route}:${r.activeTextbookLevel||r.activeJlptLesson||""}`.toLowerCase();return mp(l)?`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(o)}" alt="${g(f(a.name))}" />
      </div>
    `:`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(o)}" alt="${g(f(a.name))}" />
        <div class="speech speech-dismissible" data-mascot-speech-key="${g(l)}" data-autohide-ms="7000">
          <button class="speech-close" type="button" data-action="dismiss-mascot-speech" data-speech-key="${g(l)}" aria-label="${g(p()==="ru"?"Закрыть облако":"Close speech bubble")}">✕</button>
          <span class="speech-text">${i(c)}</span>
        </div>
      </div>
    `}function gp(){try{const e=sessionStorage.getItem(Le);return e?JSON.parse(e)||{}:{}}catch{return{}}}function yj(e){try{sessionStorage.setItem(Le,JSON.stringify(e||{}))}catch{}}function mp(e){return e?!!gp()[e]:!1}function fp(e){if(!e)return;const t=gp();t[e]=Date.now(),yj(t);const n=Mn.get(e);n&&(clearTimeout(n),Mn.delete(e)),x()}function $j(){const e=new Set;Ai("[data-mascot-speech-key][data-autohide-ms]").forEach(t=>{const n=String(t.dataset.mascotSpeechKey||"");if(!n||mp(n)||(e.add(n),Mn.has(n)))return;const s=Number(t.dataset.autohideMs||0);if(!s)return;const a=window.setTimeout(()=>{Mn.delete(n),fp(n)},s);Mn.set(n,a)});for(const[t,n]of Mn)e.has(t)||(clearTimeout(n),Mn.delete(t))}function Ba(e,t="normal",n="welcome"){if(e==="eva")return ps(an(null,jj(t,n)));const s=_s(e);return s.sprites?.[t]||Object.values(s.sprites||{})[0]||""}function jj(e="normal",t="welcome"){const n=String(t||"").toLowerCase(),s=String(e||"").toLowerCase(),a={welcome:"welcome",correct:"approve",wrong:"sad",progress:"observe",streakloss:"sad",lessoncomplete:"proud",masterymilestone:"proud",achievement:"achievement",goal:"reward",combo:"proud",hint:"think",dailybonus:"reward"},o={normal:"welcome",calm:"neutral",happy:"happy",proud:"proud",thinking:"think",focus:"think",sad:"sad",angry:"strict",shy:"shy"},c=o[s]&&!["normal","calm"].includes(s)?o[s]:null;return c&&(!n||n==="welcome")?c:a[n]||o[s]||s||"neutral"}function hp(e){if(p()!=="ru")return e;const t="[А-Яа-яЁё]";return String(e||"").replace(new RegExp(`(^|\\s)(${t})\\s+(?=${t}{4,})`,"gu"),"$1$2 ")}function Sj(e){const t=ne(r.activeCardId);if(!t||!Ug[e])return;Ws(t,"srs_rating");const n=se(M(t.id)),s=ue(n,e);r.progress.cards[t.id]=s,zt(n,s,e),he();const a=Number(r.progress.correctCombo||0),o=Ee(e)?"again":"ok";Ee(e)?(r.progress.totalWrong+=1,r.progress.correctCombo=0,ye({discipline:-.8,trust:-.2},"answer_again"),$e("answer_wrong",{cardId:t.id,kanji:t.kanji,rating:e,comboLost:a>0}),F(Re("eva","wrong"))):(O(r.rewards.rewards.correctXp,r.rewards.rewards.correctCoins,"review_success"),r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo),ye({trust:.35,discipline:.25,curiosity:s.lastDecision==="Easy"?.2:0},`answer_${e}`),$e("answer_correct",{cardId:t.id,kanji:t.kanji,rating:e,combo:r.progress.correctCombo}),F(Re("eva","correct")),r.progress.correctCombo>0&&r.progress.correctCombo%5===0&&(O(r.rewards.rewards.comboXp,0,"combo_bonus"),Xe({title:"Combo",message:Re("leya","combo"),xp:r.rewards.rewards.comboXp,coins:0,mascot:"leya",mood:"proud",dialog:"combo"}))),r.reviewQueueLastKind="card",r.revealed=!1,r.activeCardId=null,_t(),r.pendingFocus=null,Dt(),j(),St("review card post-render effects",()=>{Yp(),oi(o),Zs(),Lj(t.lessonId),Qo(),q()})}function Ga(){return p()==="ru"?{forgot:"Не помню",remember:"Помню",forgotHint:"вернём быстро",rememberHint:"Повторение выберет срок"}:{forgot:"Forgot",remember:"Remember",forgotHint:"review soon",rememberHint:"review decides"}}function Nj(e){const t=Ga(),n=M(e.id),s=xj(n,"remember"),a=Kf(n,s);return`${t.rememberHint}: ${Df(Pf(a))}`}function xj(e,t){if(Ee(t))return"again";const n=e.state||"New",s=Number(e.reviewCount||0),a=Number(e.correct||0),o=Number(e.wrong||0),c=Number(e.lapses||0),l=Number(e.successRate||(s?a/Math.max(a+o,1)*100:0));return n==="New"?"good":n==="Learning"?l>=70||a>=2?"good":"hard":l>=88&&a>=5&&c<=1?"easy":l<70||c>Math.max(1,Math.floor(a/3))?"hard":"good"}function Ee(e){return e==="forgot"||e==="again"}function Ns(e="",t="",n="",s={}){return{level:String(e||"").toUpperCase(),lessonId:String(s.lessonId||t||""),exerciseId:String(s.exerciseId||n||""),cardId:String(s.cardId||""),kanji:String(s.kanji||""),type:String(s.type||""),title:s.title||null,prompt:String(s.prompt||""),answer:String(s.answer||""),answerLabel:String(s.answerLabel||""),state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]}}function Hn(e,t={}){const s={...Ns(t.level||"",t.lessonId||"",t.exerciseId||"",t),...gi(e||{})};return s.level=String(t.level||s.level||"").toUpperCase(),s.lessonId=String(t.lessonId||s.lessonId||""),s.exerciseId=String(t.exerciseId||s.exerciseId||""),s.cardId=String(t.cardId||s.cardId||""),s.kanji=String(t.kanji||s.kanji||""),s.type=String(t.type||s.type||""),s.title=t.title||s.title||null,s.prompt=String(t.prompt||s.prompt||""),s.answer=String(t.answer||s.answer||""),s.answerLabel=String(t.answerLabel||s.answerLabel||""),s.successRate=hg(s),Number.isFinite(Number(s.srsStep))?s.srsStep=ce(Math.trunc(Number(s.srsStep)),-1,63):s.srsStep=Qi(s),vp(s)?s:Ns(s.level,s.lessonId,s.exerciseId,s)}function vp(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.lastRating||Number(e.correct||0)>0||Number(e.wrong||0)>0||Array.isArray(e.history)&&e.history.length)}function yr(e,t,n){const s={...e||{}};return Object.entries(t||{}).forEach(([a,o])=>{s[a]=Hn(o,{level:n,exerciseId:a,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""})}),s}function Aj(e){const t=Q(e);return t==="N5"?V():t==="N4"?U():t==="N3"?z():t==="N2"?J():t==="N1"?Y():null}function Wo(e){const t=Q(e);return t==="N5"?Pe():t==="N4"?Ye():t==="N3"?et():t==="N2"?nt():t==="N1"?rt():[]}function Cj(e,t){const n=Q(e),s=String(t||"");return!n||!s?null:Wo(n).find(a=>a.id===s||a.id===`${n.toLowerCase()}-${s}`||a.id.endsWith(`-${s}`))||null}function wp(e){const t=Q(e);return t==="N5"?ir:t==="N4"?xa:t==="N3"?Aa:t==="N2"?Ca:t==="N1"?Ia:null}function Xo(e,t,n=""){const s=wp(e),a=Q(e),o=String(t||"");if(!s||!a||!o)return null;const c=Cj(a,n);if(c){const l=s(c).find(d=>String(d.id)===o);if(l)return l}for(const l of Wo(a)){const d=s(l).find(u=>String(u.id)===o);if(d)return d}return null}function za(e,t){const n=Q(t);if(!e||!n)return!1;e.exerciseSrs||(e.exerciseSrs={});const s=new Set([...Object.keys(e.viewedLessons||{}),...Object.keys(e.completedLessons||{})]),a=new Set([...Object.keys(e.completedExercises||{}),...Object.keys(e.exerciseResults||{})]);let o=!1;return a.forEach(c=>{if(e.exerciseSrs[c])return;const l=Xo(n,c);if(!l||!s.has(String(l.lessonId||"")))return;const d=Ns(n,l.lessonId||"",l.id,l),u=e.exerciseResults?.[c]||null,m=!!e.completedExercises?.[c],h=ue(se(d),m||u?.correct?"good":"again");h.level=n,h.lessonId=String(l.lessonId||h.lessonId||""),h.exerciseId=String(l.id||c||""),h.cardId=String(l.cardId||h.cardId||""),h.kanji=String(l.kanji||h.kanji||""),h.type=String(l.type||h.type||""),h.title=l.title||h.title||null,h.prompt=String(l.prompt||h.prompt||""),h.answer=String(l.answer||h.answer||""),h.answerLabel=String(l.answerLabel||h.answerLabel||""),e.exerciseSrs[c]=h,o=!0}),o}function Ja(e,t){const n=Q(t);if(!e||!n)return!1;const s=Wo(n),a=wp(n);if(!a?.length&&!a)return!1;e.exerciseSrs||(e.exerciseSrs={});const o=new Map;s.forEach(l=>{(a(l)||[]).forEach(d=>{d?.id&&o.set(String(d.id),{exercise:d,lesson:l})})});let c=!1;return Object.entries(e.exerciseSrs).forEach(([l,d])=>{const u=o.get(String(l));if(!u)return;const{exercise:m,lesson:h}=u,v=Hn(d,{level:n,lessonId:h.id,exerciseId:m.id,cardId:m.cardId||"",kanji:m.kanji||"",type:m.type||"",title:m.title||null,prompt:m.prompt||"",answer:m.answer||"",answerLabel:m.answerLabel||""});JSON.stringify(d)!==JSON.stringify(v)&&(e.exerciseSrs[l]=v,c=!0)}),c}function Lj(e){if(r.progress.lessonCompletions[e])return;const t=al(e);if(!(t.length>0&&t.every(o=>M(o.id).state!=="New")))return;const s=r.rewards.rewards.lessonCompleteXp,a=r.rewards.rewards.lessonCompleteCoins;r.progress.lessonCompletions[e]=new Date().toISOString(),I("lesson_complete"),O(s,a,"lesson_completion"),ye({warmth:2.4,trust:2,discipline:2.2,curiosity:.8},"lesson_completion"),$e("lesson_complete",{lessonId:e,xp:s,coins:a}),Xe({title:f({ru:"Урок завершён",en:"Lesson complete"}),message:Re("eva","lessonComplete"),xp:s,coins:a,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),di("lesson_complete")}function Qo(){const e=re(),t=Jt();if(t.goalClaimed||t.reviews<r.progress.settings.dailyGoal)return;t.goalClaimed=!0;const n=r.rewards.rewards.comboXp,s=r.rewards.rewards.streakCoins;O(n,s,"daily_goal"),Xe({title:A("dailyGoal"),message:Re("leya","goal"),xp:n,coins:s,mascot:"leya",mood:"happy",dialog:"goal"}),r.progress.daily[e]=t}function Tj(){const e=Ua(),t=re();e.firstVisitDate||(e.firstVisitDate=t),e.lastVisitDate=t,r.progress.appOpens=Number(r.progress.appOpens||0)+1;const n=new Date().getHours();(n>=22||n<5)&&(r.progress.secrets.nightVisit=!0),bp()}function bp(){const e=r.progress.streak,t=yc(e.pendingReward);if(!t||re()<t.availableOn)return!1;e.pendingReward=null;const n=r.rewards.rewards.streakCoins;return I("streak_reward"),O(0,n,`streak:${t.milestone}:claim`),Xe({title:p()==="ru"?"Награда за стрик":"Streak reward",message:p()==="ru"?`Бонус за серию ${t.milestone} дней готов.`:`Your ${t.milestone}-day streak bonus is ready.`,xp:0,coins:n,mascot:"eva",mood:"achievement",dialog:"achievement"}),q(),j(),!0}function Ij(e){if(e==="eva"){r.progress.secrets.evaClicks=Number(r.progress.secrets.evaClicks||0)+1,ye({warmth:.2,curiosity:.1},"eva_click"),F(Re("eva","welcome")),q(),j(),x();return}e==="leya"&&F(Re("leya","combo"))}function kp(){le(),r.progress.secrets.evaClicks=Number(r.progress.secrets.evaClicks||0)+1,r.evaRuntime||(r.evaRuntime=jt()),r.evaRuntime.clickCount=Number(r.evaRuntime.clickCount||0)+1,$e("user_clicked_eva",{clickCount:r.evaRuntime.clickCount}),q(),I("notification_soft"),j(),x()}function Rj(){if(X.completed)return;X.completed=!0,r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,X.cardId&&(r.progress.writingPractice.cards[X.cardId]=(r.progress.writingPractice.cards[X.cardId]||0)+1),ye({curiosity:1,discipline:.8,trust:.4},"writing_complete"),$e("writing_complete",{cardId:X.cardId});const e=q();j(),e&&x()}function _j(){const e=re();Ua();const t=Mj(),n=oa(r.progress.dailyBonusPending);n&&n.availableOn>e||(n&&n.availableOn<=e&&!t&&(r.progress.dailyBonusPending=null),r.progress.dailyBonusPending={availableOn:Sg(e,1)},j())}function Mj(){const e=re(),t=Ua(),n=oa(r.progress.dailyBonusPending);if(!n||re()<n.availableOn||r.progress.dailyBonuses[e]||t.lastDailyBonusDate===e)return!1;r.progress.dailyBonusPending=null;const s=t.lastDailyBonusDate||t.firstVisitDate||t.lastVisitDate;return Pj(s,e),t.lastVisitDate=e,t.lastDailyBonusDate=e,r.progress.dailyBonuses[e]=new Date().toISOString(),I("daily_bonus"),O(r.rewards.rewards.dailyBonusXp,r.rewards.rewards.dailyBonusCoins,"daily_bonus"),ye({warmth:1,discipline:.8},"daily_bonus"),Xe({title:A("dailyBonus"),message:Re("leya","welcome"),xp:r.rewards.rewards.dailyBonusXp,coins:r.rewards.rewards.dailyBonusCoins,mascot:"leya",mood:"calm",dialog:"welcome"}),q(),Al(),!0}function Ua(){var t;(t=r.progress).visits||(t.visits={});const e=r.progress.visits;return e.firstVisitDate||(e.firstVisitDate=null),e.lastVisitDate||(e.lastVisitDate=null),e.lastDailyBonusDate||(e.lastDailyBonusDate=null),e.streak=Number(e.streak||0),e.bestStreak=Number(e.bestStreak||0),e}function Pj(e,t){const n=Ua();n.streak=e&&xn(e,t)===1?n.streak+1:1,n.bestStreak=Math.max(n.bestStreak||0,n.streak);const s=r.progress.streak.lastStudyDate;s!==t&&(r.progress.streak.current=s&&xn(s,t)===1?r.progress.streak.current+1:1,r.progress.streak.lastStudyDate=t,r.progress.streak.best=Math.max(r.progress.streak.best||0,r.progress.streak.current),r.progress.streakHistory.push({date:t,value:r.progress.streak.current}),r.progress.streakHistory=r.progress.streakHistory.slice(-120))}function q(){if(!qn().length)return 0;let e=0;return qn().forEach(t=>{if(Ps(t.id)||!Ej(t))return;e+=1;const n=t.rewardXp||0,s=t.rewardFragments||0;r.progress.achievements[t.id]={unlockedAt:new Date().toISOString(),rewardXp:n,rewardFragments:s},Xe({type:"achievement",title:qo(t),message:dp(t),xp:n,coins:s,icon:t.icon,mascot:"eva",mood:"happy",dialog:"achievement"}),O(n,s,`achievement:${t.id}`)}),e}function Ej(e){return yp(e)>=Number(e.target||1)}function yp(e){if(e.kind==="lessonComplete")return Object.keys(r.progress.lessonCompletions).length;if(e.kind==="correct")return r.progress.totalCorrect;if(e.kind==="learned")return sl().learned;if(e.kind==="reviews")return rl();if(e.kind==="streak")return Math.max(r.progress.streak.current||0,r.progress.streak.best||0);if(e.kind==="level")return r.progress.level||1;if(e.kind==="moonFragments")return r.progress.totalMoonFragmentsEarned||0;if(e.kind==="writing")return r.progress.writingPractice?.completed||0;if(e.kind==="sentence")return Object.keys(r.progress.sentencePractice?.completed||{}).length;if(e.kind==="evaClicks")return r.progress.secrets?.evaClicks||0;if(e.kind==="nightVisit")return r.progress.secrets?.nightVisit?1:0;if(e.kind==="appOpens")return r.progress.appOpens||0;if(e.kind==="n5KanjiStudied")return Object.keys(V().studiedKanji||{}).length;if(e.kind==="n5LessonComplete"||e.kind==="n5LessonsComplete")return Gn();if(e.kind==="n5Writing")return Object.keys(V().writingPractice||{}).length;if(e.kind==="n5SrsAll")return Object.keys(V().srsKanji||{}).length;if(e.kind==="n5FinalPass")return V().finalTest?.passed?1:0;if(e.kind==="n4Opened")return U().opened?1:0;if(e.kind==="n4LessonComplete")return Object.keys(U().completedLessons||{}).length;if(e.kind==="n4LessonsComplete")return Object.keys(U().completedLessons||{}).length;if(e.kind==="n4SrsAll")return Object.keys(U().srsKanji||{}).length;if(e.kind==="n4GrammarComplete")return Object.keys(U().completedGrammar||{}).length;if(e.kind==="n4ReadingComplete")return Object.keys(U().completedReading||{}).length;if(e.kind==="n4ListeningComplete")return Object.keys(U().completedListening||{}).length;if(e.kind==="n4Writing")return Object.keys(U().writingPractice||{}).length;if(e.kind==="n4FinalPass")return U().finalTest?.passed?1:0;if(e.kind==="n3Opened")return z().opened?1:0;if(e.kind==="n3LessonComplete")return Object.keys(z().completedLessons||{}).length;if(e.kind==="n3LessonsComplete")return Object.keys(z().completedLessons||{}).length;if(e.kind==="n3SrsAll")return Object.keys(z().srsKanji||{}).length;if(e.kind==="n3GrammarComplete")return Object.keys(z().completedGrammar||{}).length;if(e.kind==="n3ReadingComplete")return Object.keys(z().completedReading||{}).length;if(e.kind==="n3ListeningComplete")return Object.keys(z().completedListening||{}).length;if(e.kind==="n3Writing")return Object.keys(z().writingPractice||{}).length;if(e.kind==="n3ComprehensionAnswers")return Object.values(z().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n3FinalPass")return z().finalTest?.passed?1:0;if(e.kind==="n2Opened")return J().opened?1:0;if(e.kind==="n2LessonComplete")return Object.keys(J().completedLessons||{}).length;if(e.kind==="n2LessonsComplete")return Object.keys(J().completedLessons||{}).length;if(e.kind==="n2SrsAll")return Object.keys(J().srsKanji||{}).length;if(e.kind==="n2GrammarComplete")return Object.keys(J().completedGrammar||{}).length;if(e.kind==="n2ReadingComplete")return Object.keys(J().completedReading||{}).length;if(e.kind==="n2ListeningComplete")return Object.keys(J().completedListening||{}).length;if(e.kind==="n2Writing")return Object.keys(J().writingPractice||{}).length;if(e.kind==="n2ComprehensionAnswers")return Object.values(J().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n2FinalPass")return J().finalTest?.passed?1:0;if(e.kind==="shopComplete"){const t=Ve().filter(n=>!n.defaultOwned&&n.price>0);return t.length&&t.every(n=>Ct(n.id))?1:0}if(e.kind==="jlpt"){const t=r.cards.filter(n=>n.jlpt===e.jlpt);return t.length>0&&t.every(n=>M(n.id).state==="Mastered")?1:0}return 0}function Xe(e){if(!r.rewardModal){r.rewardModal=e,$p(e);return}if(e.type==="level"){r.rewardQueue.unshift(e);return}r.rewardQueue.push(e)}function $p(e){if(N0(),e?.type==="achievement"){Mr()?I("achievement_unlock"):si()&&S0();return}if(e?.type==="level"){I("level_up");return}((e?.xp||0)>0||(e?.coins||0)>0)&&I("notification_reward")}function O(e,t,n="reward"){const s=r.progress.level||ti(r.progress.xp);r.progress.xp+=e,r.progress.moonFragments+=t;const a=Kj(n);if(!a&&e>0&&I("xp_gain"),!a&&t>0&&I("moon_fragment_gain"),t>0&&(r.progress.totalMoonFragmentsEarned=Number(r.progress.totalMoonFragmentsEarned||0)+t),r.progress.level=ti(r.progress.xp),(e||t)&&(r.progress.transactions.unshift({at:new Date().toISOString(),reason:n,xp:e,coins:t,balance:r.progress.moonFragments}),r.progress.transactions=r.progress.transactions.slice(0,80)),r.progress.level>s){I("level_up"),$e("level_up",{level:r.progress.level,xp:r.progress.xp,moonFragments:r.progress.moonFragments});const o=qt();Xe({type:"level",title:A("levelUp"),message:`${A("level")} ${r.progress.level} - ${o.current}/${o.next} XP - ${r.progress.moonFragments} ${A("coins")}`,xp:0,coins:0,mascot:r.progress.level%2===0?"leya":"eva",mood:"happy",dialog:"achievement",level:r.progress.level,totalXp:r.progress.xp,moonFragments:r.progress.moonFragments})}}function Kj(e){return["learn","review"].includes(r.route)&&["review_success","combo_bonus"].includes(e)}function zt(e,t,n){const s=Jt();s.reviews+=1,e.state==="New"&&t.state!=="New"&&(s.learned+=1),e.state!=="Mastered"&&t.state==="Mastered"&&(s.mastered+=1),Ee(n)&&(s.mistakes+=1),s.minutes=pi(s.reviews*.75+s.learned*1.25,1),r.progress.daily[re()]=s}function he(){bp();const e=re(),t=r.progress.streak.lastStudyDate;if(t===e)return;const n=!!(t&&xn(t,e)>1&&r.progress.streak.current>0);r.progress.streak.current=t&&xn(t,e)===1?r.progress.streak.current+1:1,r.progress.streak.lastStudyDate=e,r.progress.streak.best=Math.max(r.progress.streak.best,r.progress.streak.current),r.progress.streakHistory.push({date:e,value:r.progress.streak.current}),r.progress.streakHistory=r.progress.streakHistory.slice(-120),ye(n?{discipline:-3.5,trust:-1.4,warmth:-.8}:{discipline:1.4,trust:.8,warmth:.4},n?"streak_lost":"study_streak"),n&&F(Re("eva","streakLoss")),[1,7,30,100].includes(r.progress.streak.current)&&(r.progress.streak.pendingReward={milestone:r.progress.streak.current,availableOn:Sg(e,1)}),$e("streak_up",{streak:r.progress.streak.current,lost:n}),j()}function jp(){if(r.route!=="stats")return;if(!window.Chart){pm().then(()=>{r.route==="stats"&&jp()}).catch(a=>console.warn("Chart.js failed to load.",a));return}const e=W0(10),t=e.map(a=>a.slice(5)),n=k0(),s=y0(n);$r("activityChart",{type:"bar",data:{labels:t,datasets:[{label:A("learned"),data:e.map(a=>r.progress.daily[a]?.learned||0),backgroundColor:n.green},{label:A("review"),data:e.map(a=>r.progress.daily[a]?.reviews||0),backgroundColor:n.red}]},options:s}),$r("jlptChart",{type:"bar",data:{labels:Object.keys(Fp()),datasets:[{label:A("mastered"),data:Object.values(Fp()),backgroundColor:n.yellow}]},options:s}),$r("streakChart",{type:"line",data:{labels:t,datasets:[{label:A("streak"),data:e.map(a=>r.progress.streakHistory.find(o=>o.date===a)?.value||(r.progress.daily[a]?.reviews?1:0)),borderColor:n.blue,backgroundColor:n.blueSoft,fill:!0,tension:.35}]},options:s}),$r("stateChart",{type:"doughnut",data:{labels:Object.keys(Op()),datasets:[{data:Object.values(Op()),backgroundColor:[n.blue,n.yellow,n.green,n.pink],borderColor:n.line}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:n.text}}}}}),$r("mistakeChart",{type:"line",data:{labels:t,datasets:[{label:A("errors"),data:e.map(a=>r.progress.daily[a]?.mistakes||0),borderColor:n.danger,backgroundColor:n.dangerSoft,fill:!0,tension:.35}]},options:s})}function $r(e,t){const n=document.getElementById(e);n&&r.charts.push(new Chart(n,t))}function Dj(){const e=bn();e&&(r.activeCardId=e.id,r.activeLessonId=e.lessonId,r.writingStep=ce(r.writingStep,0,Math.max(0,ht(e)-1)),X.cardId!==String(e.id)&&Oj(e)),Fj(),Sr(),qa(),Cr(jr(!1)),window.setTimeout(Np,120)}function bn(){return ne(r.activeCardId)||nl()[0]||r.cards[0]||null}function Oj(e){X.cardId=String(e?.id||""),X.strokes=[],X.currentStroke=[],X.drawing=!1,X.activePointerId=null,X.completed=!1}function Fj(){const e=document.getElementById("practiceCanvas");if(!e)return;xs();const t=a=>{a.pointerType==="mouse"&&a.button!==0||(a.preventDefault(),e.setPointerCapture?.(a.pointerId),X.drawing=!0,X.activePointerId=a.pointerId,X.currentStroke=[Sp(e,a)],X.completed=!1,xs())},n=a=>{if(!X.drawing||a.pointerId!==X.activePointerId)return;a.preventDefault();const o=Sp(e,a),c=X.currentStroke[X.currentStroke.length-1];(!c||_p(c,o)>1.4)&&(X.currentStroke.push(o),xs())},s=a=>{if(!X.drawing||a.pointerId!==X.activePointerId)return;a.preventDefault();const o=Bj(X.currentStroke);o.length&&X.strokes.push(o),X.currentStroke=[],X.drawing=!1,X.activePointerId=null,xs(),Cr(jr(!1))};e.onpointerdown=t,e.onpointermove=n,e.onpointerup=s,e.onpointercancel=s,e.onpointerleave=s,e.oncontextmenu=a=>a.preventDefault()}function Sp(e,t){const n=e.getBoundingClientRect();return{x:ce((t.clientX-n.left)*(e.width/n.width),0,e.width),y:ce((t.clientY-n.top)*(e.height/n.height),0,e.height),pressure:t.pressure||.5,time:performance.now()}}function Bj(e){if(!e.length)return[];const t=[e[0]];return e.slice(1).forEach(n=>{_p(t[t.length-1],n)>=2.6&&t.push(n)}),t.length===1?[t[0],{...t[0],x:t[0].x+.1,y:t[0].y+.1}]:t}function xs(){const e=document.getElementById("practiceCanvas");if(!e)return;const t=e.getContext("2d"),n=bn();Rp(t,e),n&&Uj(t,e,n),X.strokes.forEach((s,a)=>Ip(t,s,{color:getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),width:13,shadow:a===X.strokes.length-1})),X.currentStroke.length&&Ip(t,X.currentStroke,{color:getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),width:13,shadow:!0})}function Gj(){X.strokes=[],X.currentStroke=[],X.drawing=!1,X.completed=!1,xs(),Cr(jr(!1))}function zj(){X.strokes.pop(),X.currentStroke=[],X.completed=!1,xs(),Cr(jr(!1))}function Jj(e=!1){const t=jr(!0);Cr(t),e&&(oi(t.success?"good":"again"),F(t.message),t.success&&Rj())}function jr(e){const t=document.getElementById("practiceCanvas"),n=bn(),s=ht(n);if(!t||!n)return{score:0,success:!1,expectedCount:s,message:""};const a=X.strokes;if(!a.length)return{score:0,success:!1,expectedCount:s,message:p()==="ru"?"Начни с первой черты.":"Start with the first stroke."};const o=ce(Math.round(Math.min(a.length,s)/s*100),0,100),c=e?100:o,l=!!(e&&a.length);let d=p()==="ru"?`Черты: ${a.length}/${s}. Самопроверка без распознавания.`:`Strokes: ${a.length}/${s}. Self-check without recognition.`;return!e&&a.length<s?d=p()==="ru"?`Черта ${a.length+1}/${s}: продолжай по образцу.`:`Stroke ${a.length+1}/${s}: keep following the guide.`:!e&&a.length>s?d=p()==="ru"?`Черты: ${a.length}/${s}. Если лишняя линия случайная, нажми «Отменить черту».`:`Strokes: ${a.length}/${s}. If one was accidental, tap "Undo stroke".`:e&&(d=Vo(n)?p()==="ru"?"Записано. Сравни с жёлтым порядком KanjiVG и двигайся дальше.":"Saved. Compare it with the yellow KanjiVG order and move on.":p()==="ru"?"Записано. Для этого кандзи пока есть только шаблон, без точной схемы штрихов.":"Saved. This kanji currently has a template only, without exact stroke paths."),{score:c,success:l,expectedCount:s,message:d}}function Np(){const e=document.getElementById("strokeCanvas"),t=bn();if(!e||!t)return;cancelAnimationFrame(X.demoAnimationId);const n=ht(t),s=460,a=performance.now(),o=c=>{const l=c-a,d=ce(Math.floor(l/s),0,n-1),u=ce((l-d*s)/s,0,1);r.writingStep=d,Sr(d,u),qa(),l<n*s?X.demoAnimationId=requestAnimationFrame(o):(r.writingStep=n-1,Sr(r.writingStep,1),qa())};X.demoAnimationId=requestAnimationFrame(o)}function xp(){const e=document.getElementById("strokeCanvas"),t=bn();if(!e||!t)return;cancelAnimationFrame(X.demoAnimationId);const n=performance.now(),s=520,a=ce(r.writingStep,0,Math.max(0,ht(t)-1)),o=c=>{const l=ce((c-n)/s,0,1);Sr(a,l),l<1&&(X.demoAnimationId=requestAnimationFrame(o))};X.demoAnimationId=requestAnimationFrame(o)}function Ap(e){Cp(r.writingStep+e,!1)}function Cp(e,t){const n=bn();n&&(r.writingStep=ce(e,0,Math.max(0,ht(n)-1)),qa(),t?xp():Sr(r.writingStep,1))}function qa(){const e=bn();if(!e)return;const t=Ar(e),n=p()==="ru"?"Шаг":"Step",s=document.getElementById("writingStepCounter");s&&(s.textContent=`${n} ${r.writingStep+1}/${ht(e)}`);const a=document.querySelector(".writing-step-head .label");a&&(a.textContent=t[r.writingStep]||""),Ai(".writing-guide-list li").forEach((o,c)=>o.classList.toggle("is-active",c===r.writingStep))}function Sr(e=r.writingStep,t=1){const n=document.getElementById("strokeCanvas"),s=bn();if(!n||!s)return;const a=n.getContext("2d");Rp(a,n);const o=Nr(s);if(!o){Tp(a,n,s,e);return}Lp(a,n,o,{activeIndex:e,progress:t,showFuture:!0,guideAlpha:1,showNumbers:!0})}function Uj(e,t,n){const s=Nr(n);if(!s){Tp(e,t,n,r.writingStep);return}Lp(e,t,s,{activeIndex:r.writingStep,progress:1,showFuture:!0,guideAlpha:.24,showNumbers:!1})}function Nr(e){if(!e?.kanji)return null;const t=r.kanjiStrokes?.[e.kanji];return t?.strokeOrder?.length?t:null}function Vo(e){return!!Nr(e)}function ht(e){const t=Nr(e);return Math.max(1,t?.strokeOrder?.length||Number(e?.strokes||1))}function xr(){const e=getComputedStyle(document.documentElement),t=n=>e.getPropertyValue(n).trim();return{paper:t("--writing-paper")||t("--surface")||"#ffffff",border:t("--writing-paper-border")||t("--line")||"#d0d5dd",grid:t("--writing-grid")||t("--line")||"#d0d5dd",gridStrong:t("--writing-grid-strong")||t("--line-strong")||"#98a2b3",ink:t("--writing-ink")||t("--text")||"#111014",guide:t("--writing-guide")||t("--muted")||"#5f6670",templateOpacity:Number(t("--writing-template-opacity")||"0.16")||.16}}function Lp(e,t,n,s={}){const a=ce(Number(s.activeIndex||0),0,Math.max(0,n.strokeOrder.length-1)),o=qj(n,t,s.padding||22),c=xr(),l=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim(),d=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),u=c.guide;n.strokeOrder.forEach((m,h)=>{const v=h<a,w=h===a;h>a&&!s.showFuture||(e.save(),e.translate(o.x,o.y),e.scale(o.scale,o.scale),e.lineCap="round",e.lineJoin="round",e.strokeStyle=w?d:v?l:u,e.lineWidth=(w?8:5.5)/o.scale,e.globalAlpha=Number(s.guideAlpha??1)*(w?1:v?.86:.24),w&&s.progress<1&&(e.globalAlpha*=.45+ce(s.progress,0,1)*.55),w&&(e.shadowColor="rgba(248, 216, 74, 0.34)",e.shadowBlur=13/o.scale),e.stroke(new Path2D(m.path)),e.restore(),s.showNumbers&&Wj(e,m,o,h+1,w))})}function qj(e,t,n=22){const s=Hj(e.viewBox),a=Math.min((t.width-n*2)/s.width,(t.height-n*2)/s.height),o=(t.width-s.width*a)/2-s.x*a,c=(t.height-s.height*a)/2-s.y*a;return{...s,scale:a,x:o,y:c}}function Hj(e){const t=String(e||"0 0 109 109").trim().split(/\s+/).map(Number),[n=0,s=0,a=109,o=109]=t;return{x:n,y:s,width:Math.max(1,a),height:Math.max(1,o)}}function Wj(e,t,n,s,a){const o=Xj(t.path);if(!o)return;const c=n.x+o.x*n.scale,l=n.y+o.y*n.scale;Qj(e,c,l,s,a)}function Xj(e){const t=String(e||"").match(/M\s*(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/i);return t?{x:Number(t[1]),y:Number(t[2])}:null}function Qj(e,t,n,s,a){e.save(),e.fillStyle=a?getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim():getComputedStyle(document.documentElement).getPropertyValue("--surface-2").trim(),e.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue("--line-strong").trim(),e.lineWidth=1,e.beginPath(),e.arc(t,n,a?13:10,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=a?"#111014":getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),e.font="800 12px system-ui",e.textAlign="center",e.textBaseline="middle",e.fillText(String(s),t,n+.5),e.restore()}function Tp(e,t,n,s=0){const a=xr(),o=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim();e.save(),e.globalAlpha=a.templateOpacity,e.fillStyle=a.ink,e.font=`900 ${Math.floor(t.height*.7)}px "Noto Sans JP", "Yu Gothic", serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(n?.kanji||"文",t.width/2,t.height/2+t.height*.04),e.globalAlpha=1,e.fillStyle=o,e.font="800 15px system-ui",e.textAlign="left",e.textBaseline="top";const c=p()==="ru"?`Шаг ${s+1}/${ht(n)} · точной схемы пока нет`:`Step ${s+1}/${ht(n)} · exact paths not available yet`;e.fillText(c,18,16),e.restore()}function Ip(e,t,n={}){const s=t.map(Zj).filter(Boolean);if(!e||!s.length)return;const a=xr();if(e.save(),e.strokeStyle=n.color||a.ink,e.lineWidth=n.width||12,e.lineCap="round",e.lineJoin="round",e.imageSmoothingEnabled=!0,n.shadow&&(e.shadowColor="rgba(255, 48, 92, 0.36)",e.shadowBlur=12),e.beginPath(),e.moveTo(s[0].x,s[0].y),s.length===1){e.arc(s[0].x,s[0].y,e.lineWidth/2,0,Math.PI*2),e.fillStyle=e.strokeStyle,e.fill(),e.restore();return}if(s.length===2)e.lineTo(s[1].x,s[1].y);else{for(let c=1;c<s.length-1;c+=1){const l=eS(s[c],s[c+1]);e.quadraticCurveTo(s[c].x,s[c].y,l.x,l.y)}const o=s[s.length-1];e.lineTo(o.x,o.y)}e.stroke(),e.restore()}function Rp(e,t){if(!e||!t)return;const n=xr();e.clearRect(0,0,t.width,t.height),e.fillStyle=n.paper,e.fillRect(0,0,t.width,t.height),Vj(e,t)}function Vj(e,t){const n=xr();e.save(),e.strokeStyle=n.grid,e.lineWidth=1,e.setLineDash([8,8]),e.beginPath(),e.moveTo(t.width/2,0),e.lineTo(t.width/2,t.height),e.moveTo(0,t.height/2),e.lineTo(t.width,t.height/2),e.moveTo(0,0),e.lineTo(t.width,t.height),e.moveTo(t.width,0),e.lineTo(0,t.height),e.stroke(),e.setLineDash([]),e.strokeStyle=n.gridStrong,e.strokeRect(.5,.5,t.width-1,t.height-1),e.restore()}function Ar(e){const t=Nr(e);if(t?.strokeOrder?.length)return t.strokeOrder.map((s,a)=>p()==="ru"?s.description_ru||`Штрих ${a+1} по данным KanjiVG`:s.description_en||`Stroke ${a+1} from KanjiVG data`);const n=Array.isArray(e?.stroke_order)?e.stroke_order:[];return Array.from({length:ht(e)},(s,a)=>n[a]||Yj(e,a))}function Yj(e,t){return p()!=="ru"?`Step ${t+1}: exact stroke paths are not available yet. Use the translucent ${e?.kanji||"kanji"} template.`:`Шаг ${t+1}: для этого кандзи пока нет точной схемы штрихов. Обводи полупрозрачный шаблон ${e?.kanji||""}.`}function Cr(e){const t=document.getElementById("writingStrokeCounter");t&&(t.textContent=`${X.strokes.length}/${e.expectedCount}`);const n=document.getElementById("writingScore");n&&(n.querySelector("span").textContent=`${e.score}%`,n.querySelector("i").style.width=`${e.score}%`);const s=document.getElementById("writingFeedback");s&&(s.textContent=e.message,s.classList.toggle("is-good",e.success),s.classList.toggle("is-warning",!e.success&&e.score>0))}function Zj(e){return e?Array.isArray(e)?{x:e[0],y:e[1]}:{x:e.x,y:e.y}:null}function eS(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function _p(e,t){return Math.hypot((e?.x||0)-(t?.x||0),(e?.y||0)-(t?.y||0))}function tS(){r.charts.forEach(e=>e.destroy()),r.charts=[]}function nS(e,t){const n=new Date;return r.cards.filter(s=>!e||s.lessonId===e).filter(s=>{const a=r.lessons.find(c=>c.id===s.lessonId);if(a&&!Te(a))return!1;const o=M(s.id);return o.state==="New"?!0:o.dueAt&&new Date(o.dueAt)<=n}).sort(Wa)}function sS(){const e=new Date;return tl().filter(t=>{const n=M(t.id);return n.state==="New"?!1:n.dueAt&&new Date(n.dueAt)<=e}).sort(Wa)}function rS(){const e=Date.now(),t=[];return[["N5",V()],["N4",U()],["N3",z()],["N2",J()]].forEach(([n,s])=>{Object.entries(s?.exerciseSrs||{}).forEach(([a,o])=>{const c=Hn(o,{level:n,exerciseId:a,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""});if(!c.dueAt||!vp(c))return;const l=Xo(n,a,c.lessonId||"");if(!l)return;const d=String(l?.lessonId||c.lessonId||"");if(!IS(n,d))return;const u=new Date(c.dueAt).getTime();!u||u>e||t.push({kind:"exercise",source:"textbook",key:`exercise:${String(n).toUpperCase()}:${a}`,level:String(n||"").toUpperCase(),exerciseId:a,lessonId:d,cardId:String(c.cardId||""),dueAt:u,progress:c})})}),t.sort(el)}function Ha(){const e=[];return r.n5Reading.forEach(t=>{t?.id&&e.push(t)}),[["N4",r.n4Reading],["N3",r.n3Reading],["N2",r.n2Reading],["N1",r.n1Reading]].forEach(([t,n])=>{(Array.isArray(n)?n:[]).forEach(s=>{(s.questions||[]).forEach((a,o)=>{const c={id:String(a.id||`${s.id}:${o}`),prompt:a.prompt||{ru:"",en:""},answer:String(a.answer||""),options:rf(a.options)};e.push({id:String(a.id||`${s.id}:${o}`),level:String(s.level||t||"").toUpperCase(),kind:"question",sourceKind:String(s.kind||"reading"),sourceId:String(s.id||""),sourceTitle:s.title||{ru:s.id||"",en:s.id||""},title:s.title||{ru:s.id||"",en:s.id||""},jp:String(s.jp||""),reading:String(s.reading||""),translationRu:String(s.ru||""),translationEn:String(s.en||""),passageSource:String(s.source||""),questionIndex:o,question:c,questions:[c]})})})}),[...e,...jw()]}function Mp(e,t=""){const n=String(e||""),s=String(t||"").toUpperCase();return Ha().find(a=>String(a.id||"")===n&&(!s||String(a.level||"").toUpperCase()===s))||Ha().find(a=>String(a.id||"")===n)||null}function Pp(e){const t=Array.isArray(e?.questions)?e.questions[0]||null:e?.question||null;return{level:String(e?.level||"").toUpperCase(),lessonId:String(e?.sourceId||""),exerciseId:String(e?.id||""),type:String(e?.kind||""),title:e?.sourceTitle||e?.title||null,prompt:String(e?.kind==="question"?f(t?.prompt||{}):e?.sentence||e?.jp||""),answer:String(e?.kind==="question"?t?.answer||"":ft(e).map(n=>n.kanji).join("")),answerLabel:String(e?.kind==="question"?t?.answer||"":ft(e).map(n=>n.kanji).join(""))}}function Yo(e){return 1}function kn(e){const t=Pp(e);return{...Ns(t.level,t.lessonId,t.exerciseId,t),sourceId:String(e?.sourceId||""),sourceKind:String(e?.sourceKind||""),sourceTitle:e?.sourceTitle||null,exerciseKind:String(e?.kind||""),questionCount:Yo(),answers:{},selectedIndices:[],selectedTiles:[],selectedText:"",wrongIndexes:[],wrongQuestions:[],completed:!1,completedAt:null}}function Lr(e,t){const n=kn(t),s=Hn({...n,...e||{}},Pp(t));return s.sourceId=String(t?.sourceId||s.sourceId||""),s.sourceKind=String(t?.sourceKind||s.sourceKind||""),s.sourceTitle=t?.sourceTitle||s.sourceTitle||null,s.exerciseKind=String(t?.kind||s.exerciseKind||""),s.questionCount=Yo(),s.answers=s.answers&&typeof s.answers=="object"&&!Array.isArray(s.answers)?{...s.answers}:{},s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.map(a=>Number(a)).filter(a=>Number.isInteger(a)&&a>=0):[],s.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(a=>({kanji:String(a?.kanji||""),reading:String(a?.reading||"")})).filter(a=>a.kanji):[],s.selectedText=String(s.selectedText||""),s.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.map(a=>Number(a)).filter(a=>Number.isInteger(a)&&a>=0):[],s.wrongQuestions=Array.isArray(s.wrongQuestions)?s.wrongQuestions.map(a=>String(a)).filter(Boolean):[],s.completed=!!s.completed,s.completedAt=s.completedAt||null,s}function yn(e){var s;if(!e?.id)return null;(s=r.progress).readingExercises||(s.readingExercises={});const t=r.progress.readingExercises[String(e.id)]||null;if(t){const a=Lr(t,e);return r.progress.readingExercises[String(e.id)]=a,a}const n=kn(e);return r.progress.readingExercises[String(e.id)]=n,n}function Wn(e,t){var s;if(!e?.id)return null;(s=r.progress).readingExercises||(s.readingExercises={});const n=Lr(t||{},e);return r.progress.readingExercises[String(e.id)]=n,n}function Ep(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.completedAt||e.completed||e.answers&&typeof e.answers=="object"&&Object.keys(e.answers).length||Array.isArray(e.selectedIndices)&&e.selectedIndices.length||Array.isArray(e.selectedTiles)&&e.selectedTiles.length||String(e.selectedText||"").trim())}function As(e=""){var a;if(!r.progress)return!1;const t=Q(e);(a=r.progress).readingExercises||(a.readingExercises={});const n=new Map(Ha().filter(o=>!t||Q(o.level)===t).map(o=>[String(o.id),o]));let s=!1;return Object.entries(r.progress.readingExercises).forEach(([o,c])=>{const l=n.get(String(o));if(!l)return;const d=Lr(c,l),u=Ep(d)?d:kn(l);JSON.stringify(c)!==JSON.stringify(u)&&(r.progress.readingExercises[String(o)]=u,s=!0)}),s}function aS(){const e=Date.now();return Ha().map(t=>{if(!RS(t.level))return null;const n=r.progress.readingExercises?.[String(t.id)]||null;if(!n)return null;const s=Lr(n,t);if(r.progress.readingExercises[String(t.id)]=s,!Ep(s))return null;const a=s.dueAt?new Date(s.dueAt).getTime():0;return!a||a>e?null:{kind:"exercise",source:"reading",key:`reading:${String(t.level||"").toUpperCase()}:${t.id}`,level:String(t.level||"").toUpperCase(),exerciseId:String(t.id||""),lessonId:String(t.sourceId||""),cardId:"",dueAt:a,progress:s,exercise:t,card:null}}).filter(Boolean).sort(el)}function Zo(){const e=sS().map(n=>{if(!n?.id)return null;const s=M(n.id);return{kind:"card",key:`card:${n.id}`,card:n,cardId:String(n.id),dueAt:s.dueAt?new Date(s.dueAt).getTime():0,progress:s}}).filter(Boolean),t=[...rS(),...aS()].sort(el);return kr(Ef(e,t,Xi))}function Kp(e=Zo()){const t=Object.freeze(kr(e).map(n=>n.key).filter(Boolean));r.reviewSession={keys:t,initialSize:t.length,startedAt:new Date().toISOString()}}function iS(){const e=Zo();if(r.route!=="review")return e;r.reviewSession||Kp(e);const t=new Map(e.map(a=>[a.key,a])),n=Array.isArray(r.reviewSession?.keys)?r.reviewSession.keys:[],s=n.map(a=>t.get(a)).filter(Boolean);return s.length!==n.length||!s.length&&e.length?(Kp(e),e):kr(s)}function oS(){const e=Date.now();return tl().filter(t=>{const n=M(t.id),s=n.dueAt?new Date(n.dueAt).getTime():0;return n.state==="Learning"&&s>e}).length}function lS(){return tl().filter(e=>M(e.id).state!=="New").length}function Ke(){if(Xr&&Qr!==null)return Qr;const e=Zo().length;return Xr&&(Qr=e),e}function el(e,t){if(e.dueAt!==t.dueAt)return e.dueAt-t.dueAt;const n=e.kind==="card"&&e.card?.id?M(e.card.id):e.progress,s=t.kind==="card"&&t.card?.id?M(t.card.id):t.progress,a=da(n),o=da(s);return a!==o?o-a:e.kind!==t.kind?e.kind==="card"?-1:1:e.kind==="card"&&t.kind==="card"?Number(e.card?.id||0)-Number(t.card?.id||0):String(e.key||"").localeCompare(String(t.key||""))}function tl(){const e=new Set,t=[];return _e.forEach(n=>{ag(n).forEach(s=>{const a=String(s?.id||"");!a||e.has(a)||(e.add(a),t.push(s))})}),t.sort(Wa)}function nl(){const e=H0();return r.cards.filter(t=>{const n=r.lessons.find(a=>a.id===t.lessonId);if(n&&!Te(n))return!1;const s=M(t.id);return s.state==="New"||s.dueAt&&new Date(s.dueAt)<=e}).sort(Wa)}function Wa(e,t){const n=M(e.id),s=M(t.id),a=n.dueAt?new Date(n.dueAt).getTime():0,o=s.dueAt?new Date(s.dueAt).getTime():0;if(a!==o)return a-o;if(a>0){const c=da(n),l=da(s);if(c!==l)return l-c}return Number(e.id)-Number(t.id)}function cS(){const e=r.filters.query.trim().toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return r.cards.filter(t=>{const n=Tr(t.id),s=[t.kanji,L(t),t.meaning_ru,t.hiragana,t.romaji,t.onyomi,t.onyomi_romaji,t.kunyomi,t.kunyomi_romaji,il(t),t.jlpt,kl(t.lessonId),Er(t),n.radical,f(n.radicalMeaning||{}),...t.apps,...t.examples.flatMap(a=>[a.word,a.reading,a.romaji,a.translation,Ce(a)])].join(" ").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return(!e||s.includes(e))&&(r.filters.jlpt==="all"||t.jlpt===r.filters.jlpt)&&(r.filters.radical==="all"||n.radical===r.filters.radical)&&(r.filters.favorites==="all"||!!r.progress.favorites[t.id])&&dS(t.strokes,r.filters.strokes)})}function dS(e,t){if(t==="all")return!0;if(t==="13+")return e>=13;const[n,s]=t.split("-").map(Number);return e>=n&&e<=s}function sl(){const e=r.cards.length,t=r.cards.filter(s=>M(s.id).state!=="New").length,n=r.cards.filter(s=>M(s.id).state==="Mastered").length;return{total:e,learned:t,mastered:n,todayCards:nl().length,completion:R(n,e)}}function rl(){return Object.values(r.progress.cards).reduce((e,t)=>e+(t.reviewCount||0),0)}function uS(){return(r.progress.transactions||[]).reduce((e,t)=>e+Math.max(0,Number(t.coins||0)),0)}function Dp(){const e=r.progress.totalCorrect+r.progress.totalWrong;return e?Math.round(r.progress.totalCorrect/e*100):0}function Op(){const e={New:0,Learning:0,Review:0,Mastered:0};return r.cards.forEach(t=>{e[M(t.id).state]+=1}),e}function Fp(){const e={};return r.cards.forEach(t=>{var n;e[n=t.jlpt]||(e[n]=0),M(t.id).state==="Mastered"&&(e[t.jlpt]+=1)}),e}function Jt(){const e=re();return r.progress.daily[e]||(r.progress.daily[e]={learned:0,reviews:0,mastered:0,mistakes:0,minutes:0,goalClaimed:!1}),r.progress.daily[e]}function al(e){return r.cards.filter(t=>t.lessonId===e)}function pS(){return r.cards.filter(e=>{const t=r.lessons.find(n=>n.id===e.lessonId);return(!t||Te(t))&&M(e.id).state==="New"})}function ne(e){return r.cards.find(t=>String(t.id)===String(e))}function Tr(e){return r.kanjiMeta[String(e)]||{}}function Xa(e){const t=r.kanjiHints[String(e)]||{};return{hint:f(t.hint||{})||Re("leya","hint"),mnemonic:f(t.mnemonic||{})||""}}function gS(e){e&&(r.progress.favorites[e]?delete r.progress.favorites[e]:r.progress.favorites[e]=new Date().toISOString(),j(),x())}function _t(e=null){r.readingCheck={cardId:e?String(e):null,value:"",status:null,message:""}}function mS(e){const t=String(e||"");r.readingCheck.cardId!==t&&_t(t)}function Bp(){const e=ne(r.readingCheck.cardId||r.activeCardId);if(!e)return;Xs(e,"reading_check"),Yp();const t=hS(r.readingCheck.value),n=fS(e),s=t.some(l=>n.normalized.has(l)),a=t.length>0,o=a&&s?"correct":"wrong",c=a?s?p()==="ru"?"Верно. Это чтение есть у карточки.":"Correct. This reading belongs to the card.":p()==="ru"?"Почти. Попробуй другое онъёми или кунъёми.":"Almost. Try another on'yomi or kun'yomi.":p()==="ru"?"Сначала напиши чтение хираганой или катаканой.":"Type a reading in hiragana or katakana first.";r.readingCheck={cardId:e.id,value:r.readingCheck.value,status:o,message:c},I(o==="correct"?"answer_correct":"answer_wrong"),xt(),requestAnimationFrame(()=>{const l=document.getElementById(`readingCheck-${e.id}`);l&&(l.focus(),"setSelectionRange"in l&&l.setSelectionRange(l.value.length,l.value.length))})}function fS(e){const t=Ir(e),n=[...$n(t.onyomi.kana),...$n(t.kunyomi.kana),...$n(e.hiragana)].filter(Boolean),s=n.filter((a,o)=>n.indexOf(a)===o);return{normalized:new Set(s.map(Gp).filter(Boolean))}}function hS(e){return String(e||"").split(/[\/,гЂЃпјЊ\s]+/u).map(Gp).filter(Boolean)}function Gp(e){const t=zp(String(e||"").normalize("NFKC")).replace(/[гѓ»пЅҐ.\-]/gu,"").replace(/\s+/gu,"");return vS(t).trim()}function zp(e){return[...String(e||"")].map(t=>{const n=t.charCodeAt(0);return n>=12449&&n<=12534?String.fromCharCode(n-96):t}).join("")}function vS(e){let t="";for(const n of String(e||"")){if(n==="ー"){t+=wS(t.slice(-1));continue}t+=n}return t}function wS(e){return"あかさたなはまやらわがざだばぱゃぁ".includes(e)?"あ":"いきしちにひみりぎ�?ぢびぴぃ".includes(e)?"い":"うくすつぬふむゆるぐずづぶぷゅぅ".includes(e)?"う":"えけせてねへめれげぜでべぺぇ".includes(e)?"え":"おこそとのほもよろをごぞどぼぽょぉ".includes(e)?"お":""}function Jp(e){if(!e)return null;const t=String(e.jlpt||"").toUpperCase();let n=null;return t==="N5"?n=r.n5KanjiCatalog:t==="N4"?n=r.n4KanjiCatalog:t==="N3"?n=r.n3KanjiCatalog:t==="N2"&&(n=r.n2KanjiCatalog),!n||!Array.isArray(n)?null:n.find(s=>s&&s.kanji===e.kanji)||null}const Up={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",ゐ:"i",ゑ:"e",を:"o",ん:"n",ゔ:"vu"},qp={きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ふぁ:"fa",ふぃ:"fi",ふぇ:"fe",ふぉ:"fo",しぇ:"she",じぇ:"je",ちぇ:"che",てぃ:"ti",でぃ:"di",とぅ:"tu",どぅ:"du",つぁ:"tsa",つぃ:"tsi",つぇ:"tse",つぉ:"tso",うぃ:"wi",うぇ:"we",うぉ:"wo",ゔぁ:"va",ゔぃ:"vi",ゔぇ:"ve",ゔぉ:"vo"};function Ir(e){const t=Jp(e);if(t&&t.readings){const a=t.readings,o=Qa(a.onyomi,a.onyomi_romaji||e?.onyomi_romaji,e?.onyomi),c=Qa(a.kunyomi,a.kunyomi_romaji||e?.kunyomi_romaji,e?.kunyomi);if(o.kana||c.kana)return{onyomi:o,kunyomi:c}}const n=Qa(e?.onyomi,e?.onyomi_romaji),s=Qa(e?.kunyomi,e?.kunyomi_romaji);return n.kana||s.kana||n.romaji||s.romaji?{onyomi:n,kunyomi:s}:{onyomi:{kana:"",romaji:""},kunyomi:{kana:"",romaji:""}}}function $n(e){return(Array.isArray(e)?e.join(" / "):String(e||"")).split(/[\/пјЏ,пјЊгЂЃгѓ»пЅҐ;пј›]+/u).map(n=>n.trim()).filter(Boolean)}function Qa(e,t="",n=""){const s=$n(e).length?$n(e):$n(n),a=$n(t),o=s.map((c,l)=>({kana:H(c),romaji:bS(c,a[l])})).filter(c=>c.kana||c.romaji);return{kana:o.map(c=>c.kana).filter(Boolean).join(" / "),romaji:o.map(c=>c.romaji).filter(Boolean).join(" / ")}}function bS(e,t){const n=Hp(e);return n?t&&Wp(t)===Wp(n)?t:n:t||""}function Hp(e){const t=[...kS(e)];let n="",s=!1;for(let a=0;a<t.length;a+=1){const o=t[a],c=t[a+1]||"";if(o==="っ"){s=!0;continue}if(o==="ー"){const u=yS(n);u&&(n+=u);continue}let l="";const d=o+c;if(qp[d])l=qp[d],a+=1;else if(Up[o])l=Up[o];else if(/[a-zA-Z0-9]/u.test(o))l=o.toLowerCase();else{s=!1;continue}if(s){const u=l.match(/^[bcdfghjklmnpqrstvwxyz]/u)?.[0]||"";u&&u!=="n"&&(n+=u),s=!1}n+=l}return n}function kS(e){return zp(String(e||"").normalize("NFKC")).replace(/[()\[\]{}]/gu,"").replace(/[.\-‐-―\s]/gu,"").trim()}function yS(e){return String(e||"").match(/[aeiou](?!.*[aeiou])/u)?.[0]||""}function Wp(e){return String(e||"").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/gu,"").replace(/[^a-z0-9]+/gu,"")}function Xp(e){return e==="onyomi"?p()==="ru"?"Онъёми":"On'yomi":p()==="ru"?"Кунъёми":"Kun'yomi"}function Va(e){return e==="onyomi"?p()==="ru"?"Он":"On":p()==="ru"?"Кун":"Kun"}function il(e){const t=Ir(e);return[`${Va("onyomi")}: ${t.onyomi.kana||"—"} (${t.onyomi.romaji||"—"})`,`${Va("kunyomi")}: ${t.kunyomi.kana||"—"} (${t.kunyomi.romaji||"—"})`].join(" Р'· ")}function ol(e){if(!e)return"";const t=e.audioSrc||e.audio||"";return Vp(t)||Qp(e)}function Qp(e){if(!e?.id||!e?.jlpt||!e?.lessonId)return"";const t=$S(e.romaji);return t?`./audio/kanji/${String(e.jlpt).toLowerCase()}/${e.lessonId}/${e.id}-${t}.mp3`:""}function Vp(e){return e?e.startsWith("./")||e.startsWith("http")?e:e.startsWith("/")?`.${e}`:`./${e}`:""}function $S(e){return String(e||"").split("/")[0].trim().toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function jS(e){return!!(ol(e)||ll(e))}function ll(e){if(!e)return"";const t=Ir(e);return t.onyomi.kana||t.kunyomi.kana||e.hiragana||e.kanji||""}function SS(e){const t=Ir(e);return{kanji:e?.kanji||"",onyomi:t.onyomi.kana,kunyomi:t.kunyomi.kana,hiragana:e?.hiragana||""}}function Cs(e,t=""){const n=zN(SS(e));return!t||t==="cycle"?n:n.filter(s=>s.kind===t)}function NS(e){return Cs(e).length>0}function xS(e){return $n(e)[0]||String(e||"").trim()}function cl(){if(r.route!=="learn"&&r.route!=="review")return;const e=560-(Date.now()-Os);if(e>0){window.setTimeout(cl,e);return}const t=ne(r.activeCardId);if(!t)return;const n=Cs(t).map(o=>`${o.kind}:${o.kana}`).join("|")||ll(t),s=Vp(t?.audioSrc||t?.audio||"");if(!n&&!s)return;const a=`${r.route}:${t.id}:${n||s}`;a!==ql&&(ql=a,Zp(t,{silent:!0}))}function Yp(){dl(),"speechSynthesis"in window&&window.speechSynthesis.cancel()}function dl(){kt&&(kt.pause(),kt.currentTime=0,kt=null)}function Zp(e,t={}){let n=null;const s=()=>(n||(n=eg(e,t)),n);return tg(e,{kind:"cycle",silent:t.silent,fallback:s})?Promise.resolve(!0):s()}function eg(e,t={}){const n=ol(e);return n?(dl(),kt=new Audio(n),kt.preload="auto",kt.onended=()=>{kt=null},kt.onerror=()=>{t.silent||console.warn("Kanji audio file could not be loaded.",{id:e?.id,audio:n})},kt.play().then(()=>!0).catch(s=>(t.silent||console.warn("Kanji audio playback was blocked or failed.",{id:e?.id,audio:n,error:s}),!1))):Promise.resolve(!1)}function tg(e,t={}){dl();let n=null;const s=typeof t.fallback=="function"?()=>(n||(n=t.fallback()),n):null,a=H(t.text||""),o=t.kind||"cycle",c=`${e?.id||e?.kanji||"kanji"}:${o}`,l=Cs(e);let d=null;if(!a){const v=JN(l,Hl.get(c)??-1,o);d=v.item,Hl.set(c,v.cursor)}const u=a||d?.kana||xS(ll(e));if(!UN(u,{onError:v=>{t.silent||console.warn("System kanji TTS failed; trying prepared audio fallback.",{id:e?.id,error:v}),s?.()}}))return s?.(),!s&&!t.silent&&console.warn("Kanji audio is not available for this card.",{id:e?.id,expected:Qp(e)}),!1;const h=t.label||(d?Uo(d):"TTS");return t.silent||F(`${e?.kanji||""} ${h}: ${u}`.trim()),!0}function AS(e,t){F(e?`${t}: ${e}`:`${t}: ${p()==="ru"?"аудио пока не добавлено":"audio not added yet"}`)}function Te(e){return!!e}function Ya(e){return r.rewards?.lessonUnlocks?.[e?.id]||1}function ng(e){if(!e||!Te(e))return"locked";const t=al(e.id);return t.length?!!r.progress.lessonCompletions?.[e.id]||t.every(a=>{const o=M(a.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"completed":t.some(a=>{const o=M(a.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"started":"new":"new"}function ul(e){return e==="completed"?"is-completed":e==="started"?"is-started":""}function pl(e){const t=p()==="ru";return e==="completed"?t?"Урок пройден":"Lesson completed":e==="started"?t?"Урок начат":"Lesson started":t?"Не начат":"Not started"}function CS(e){return e!=="completed"&&e!=="started"?"":`<span class="lesson-status-dot" aria-label="${g(pl(e))}"></span>`}function LS(e){return e!=="completed"&&e!=="started"?"":`<span class="pill lesson-status-pill ${ul(e)}">${i(pl(e))}</span>`}function jn(e){const t=String(e||"").toUpperCase();return r.jlptLessons.find(n=>n.jlpt===t)||null}function Mt(e){const t=String(e||"").toUpperCase();return r.jlptCatalog?.items?.find(n=>n.jlpt===t)||null}function Xn(e){const t=String(e||"").toUpperCase();return t==="N5"?V():t==="N4"?U():t==="N3"?z():t==="N2"?J():t==="N1"?Y():null}function TS(e,t,n="open"){const s=Q(e),a=String(t||"");if(!s||!a)return!1;const o=Xn(s);return!o||(o.viewedLessons||(o.viewedLessons={}),o.viewedLessons[a])?!1:(o.viewedLessons[a]=new Date().toISOString(),!0)}function IS(e,t){const n=Q(e),s=String(t||"");if(!n||!s)return!1;const a=Xn(n);return a?!!(a.viewedLessons?.[s]||a.completedLessons?.[s]):!1}function Rr(e,t="open"){var s;const n=Q(e);return!n||((s=r.progress).viewedReadingLevels||(s.viewedReadingLevels={}),r.progress.viewedReadingLevels[n])?!1:(r.progress.viewedReadingLevels[n]=new Date().toISOString(),!0)}function RS(e){const t=Q(e);return t?!!r.progress.viewedReadingLevels?.[t]:!1}function gl(e){const t=Mt(e);return Array.isArray(t?.previousLevels)?t.previousLevels.map(n=>String(n||"").toUpperCase()).filter(Boolean):[]}function sg(e){const t=String(e||"").toUpperCase(),n=Xn(e);if(!n)return!1;if(n.finalTest?.passed)return!0;const a=Mt(t)?.lessonCount||(t==="N5"?10:0);let o=0;if(t==="N5"){o=Gn();const c=Object.keys(n.studiedKanji||{}).length;if(o>=10&&c>=80||o>=a)return!0}else if(o=Object.keys(n.completedLessons||{}).length,o>=a)return!0;return!1}function it(e){const t=String(e||"").toUpperCase();if(_e.includes(t)||r.progress.unlockedJlptLevels&&r.progress.unlockedJlptLevels.includes(t))return!0;if(!Mt(t))return t==="N5";const s=gl(t);return s.length?s.every(a=>sg(a)):!0}function rg(e=[]){const t=e.filter(Boolean);if(!t.length)return"";if(t.length===1)return t[0];const n=p()==="ru"?"Рё":"and";return t.length===2?`${t[0]} ${n} ${t[1]}`:`${t.slice(0,-1).join(", ")} ${n} ${t[t.length-1]}`}function Ut(e){const t=gl(e);return t.length?p()==="ru"?`Откроется после завершения ${rg(t)}.`:`Unlocks after completing ${rg(t)}.`:p()==="ru"?"Откроется после учебника N5.":"Unlocks after the N5 textbook."}function Za(e){const t=Q(e);if(!t)return[];const n=Mt(t),s=r.lessons.filter(d=>String(d.jlpt||"").toUpperCase()===t),a=n?(n.lessonIds||[]).map(d=>r.lessons.find(u=>u.id===d)).filter(Boolean):s,o=new Set(a.map(d=>d.id)),c=s.filter(d=>!o.has(d.id)),l=Math.max(n?n.lessonCount||a.length:s.length,a.length);return[...a,...c].slice(0,l||s.length)}function ml(e){const t=Q(e);if(!t)return"";const n=Za(t);if(!n.length)return"";const s=GS(t);if(s?.lessonId&&ni(t,s.lessonId))return s.lessonId;const a=Xn(t)?.currentLessonId||"";if(a&&ni(t,a))return a;const o=t==="N5"?V().completedLessons||{}:t==="N4"?U().completedLessons||{}:t==="N3"?z().completedLessons||{}:t==="N2"?J().completedLessons||{}:r.progress.lessonCompletions||{},c=n.filter(l=>o[l.id]);return c.length?(c.sort((l,d)=>{const u=Date.parse(o[d.id]||"")||0,m=Date.parse(o[l.id]||"")||0;return u!==m?u-m:(d.order||0)-(l.order||0)}),c[0]?.id||n[0]?.id||""):n[0]?.id||""}function ei(e,t=""){const n=Q(e);if(!n||!jn(n))return;if(!it(n)){r.activeTextbookLevel=n,r.activeJlptLesson=n,Be("textbooks",null,n),F(Ut(n));return}const s=r.route,a=String(t||"")||ml(n),o=["N5","N4","N3","N2"].includes(n),c=a?`#textbooks/${encodeURIComponent(n)}/${encodeURIComponent(a)}`:`#textbooks/${encodeURIComponent(n)}`;r.route="textbooks",r.activeTextbookLevel=n,r.activeJlptLesson=n,r.activeTextbookSubroute=a||null,r.kanjiPageId=null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=!o&&a?`#textbook-lesson-${a}`:null,s!=="eva-room"&&(r.evaRoomShopOpen=!1),a&&ot(n,a,"open_jlpt"),_t(),Pt(c),ga(),x()}function _S(e){return e?jn(e.jlpt):null}function Ls(e){const t=String(e||"").toUpperCase();return r.jlptPracticeLessons.find(n=>n.jlpt===t)||null}function Qn(){return r.progress.jlptLessonPractice=Rc(rs().jlptLessonPractice,r.progress.jlptLessonPractice||{}),r.progress.jlptLessonPractice}function Ts(e){if(!e?.drills?.length)return null;const t=Qn(),n=t.activeIds[e.jlpt],s=e.drills.find(a=>a.id===n);return s||(t.activeIds[e.jlpt]=e.drills[0].id,e.drills[0])}function MS(e){const t=Ls(r.activeJlptLesson),n=Ts(t);if(!n||!n.tiles[e])return;const s=Qn(),a=s.selected[n.id]||[],o=n.blanks.flatMap(c=>c.answer||[]).length;a.includes(e)||a.length>=o||(s.selected[n.id]=[...a,e],s.checked[n.id]=!1,s.results[n.id]=null,j(),x())}function PS(){const e=Ts(Ls(r.activeJlptLesson));if(!e)return;const t=Qn();t.selected[e.id]=(t.selected[e.id]||[]).slice(0,-1),t.checked[e.id]=!1,t.results[e.id]=null,j(),x()}function ES(){const e=Ts(Ls(r.activeJlptLesson));if(!e)return;const t=Qn();t.selected[e.id]=[],t.checked[e.id]=!1,t.results[e.id]=null,j(),x()}function KS(){const e=Ts(Ls(r.activeJlptLesson));if(!e)return;const t={...hl(),...fl()},n=Qn(),s=n.selected[e.id]||[],a=e.blanks.flatMap(l=>l.answer||[]),o=a.reduce((l,d,u)=>{const m=e.tiles[s[u]];return(!m||m.kanji!==d)&&l.push(u),l},[]),c=s.length===a.length&&o.length===0;n.checked[e.id]=!0,n.results[e.id]={correct:c,wrongIndexes:o,message:c?t.correct:t.wrong},c&&!n.completed[e.id]?(n.completed[e.id]=new Date().toISOString(),O(8,1,`jlpt_practice:${e.id}`),I("answer_correct")):c||I("answer_wrong"),j(),x()}function DS(){var o,c,l,d,u,m;const e=Ls(r.activeJlptLesson),t=Ts(e);if(!e||!t)return;const n=e.drills.findIndex(h=>h.id===t.id),s=e.drills[(n+1)%e.drills.length],a=Qn();a.activeIds[e.jlpt]=s.id,(o=a.selected)[c=s.id]||(o[c]=[]),(l=a.checked)[d=s.id]||(l[d]=!1),(u=a.results)[m=s.id]||(u[m]=null),j(),x()}function ag(e){const t=String(e||"").toUpperCase();return t?r.cards.filter(n=>String(n.jlpt||"").toUpperCase()===t):[]}function fl(){return p()==="ru"?{courseText:"Стратегия уровня, чтения, лексика, приложения и интерактивная практика. Контент хранится в JSON, поэтому урок можно расширять без изменения логики.",apps:"Приложения и интерфейсы",kana:"Хирагана и катакана",hiragana:"Хирагана",katakana:"Катакана",kanjiFocus:"Кандзи с фуриганой",sentenceDrill:"Поставь кандзи в пропуск",fillBlanks:"Заполни пропуск плитками по порядку.",check:"Проверить",undo:"Убрать",clear:"Очистить",next:"Следующее",correct:"Верно. +8 XP и +1 Moon Fragment.",wrong:"Почти. Проверь порядок плиток и попробуй ещё раз."}:{courseText:"Level strategy, readings, vocabulary, apps, and interactive practice. Content lives in JSON, so lessons can grow without changing app logic.",apps:"Apps and interfaces",kana:"Hiragana and katakana",hiragana:"Hiragana",katakana:"Katakana",kanjiFocus:"Kanji with furigana",sentenceDrill:"Place kanji into the blank",fillBlanks:"Fill the blank with tiles in order.",check:"Check",undo:"Undo",clear:"Clear",next:"Next",correct:"Correct. +8 XP and +1 Moon Fragment.",wrong:"Almost. Check the tile order and try again."}}function hl(){return p()==="ru"?{back:"К учебнику",courseMap:"Полноценный JLPT-модуль",courseText:"Краткая стратегия уровня, чтения, лексика и практика. Данные хранятся в JSON, поэтому урок можно расширять без изменения логики.",available:"кандзи уровня",learned:"изучено",mastered:"освоено",goals:"Цели уровня",practice:"Практика",checkpoint:"Чекпоинт"}:{back:"Back to textbook",courseMap:"Full JLPT module",courseText:"Level strategy, readings, vocabulary, and practice. The content lives in JSON, so lessons can grow without changing app logic.",available:"level kanji",learned:"learned",mastered:"mastered",goals:"Level goals",practice:"Practice",checkpoint:"Checkpoint"}}function ti(e){const t=r.rewards?.levelCurve||{baseXp:100,growth:1.35};let n=1,s=e;for(;s>=_r(n,t)&&n<100;)s-=_r(n,t),n+=1;return n}function qt(){const e=r.rewards?.levelCurve||{baseXp:100,growth:1.35};let t=1,n=r.progress.xp;for(;n>=_r(t,e)&&t<100;)n-=_r(t,e),t+=1;const s=_r(t,e);return{current:n,next:s,toNext:Math.max(0,s-n),percent:R(n,s)}}function _r(e,t){return Math.round(t.baseXp*Math.pow(t.growth,e-1))}function OS(){const e={app:"Flash Kanji",exportedAt:new Date().toISOString(),progress:r.progress,customization:r.customization},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`flash-kanji-progress-${re()}.json`,document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(n),F(A("export"))}function Sn(e,t={}){try{return typeof window.ym!="function"?!1:(window.ym(bt,"reachGoal",e,t),!0)}catch(n){return console.warn("Metric goal failed.",n),!1}}function FS(e){return{level:e.dataset.shareLevel||e.dataset.level||"",lessonId:e.dataset.shareLessonId||e.dataset.lessonId||e.dataset.lesson||"",toastKey:e.dataset.shareToastKey||"",reward:e.dataset.shareReward&&r.rewardModal||null}}function Q(e){const t=String(e||"").toUpperCase();return _e.includes(t)?t:""}function De(e){if(!e||typeof e!="object")return null;const t=Q(e.level),n=String(e.lessonId||"");if(!t||!n)return null;const s=typeof e.updatedAt=="string"&&e.updatedAt?e.updatedAt:new Date().toISOString();return{level:t,lessonId:n,updatedAt:s,source:typeof e.source=="string"&&e.source?e.source:"open"}}function BS(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const a=Q(n),o=De({...typeof s=="object"&&s?s:{},level:a||n});a&&o&&(t[a]=o)}),t}function Vn(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const a=String(n||"").trim();if(a){if(typeof s=="string"&&s.trim()){t[a]=s.trim();return}if(s&&typeof s=="object"){const o=typeof s.viewedAt=="string"&&s.viewedAt?s.viewedAt:typeof s.updatedAt=="string"&&s.updatedAt?s.updatedAt:new Date().toISOString();t[a]=o;return}s&&(t[a]=new Date().toISOString())}}),t}function ni(e,t){const n=Q(e),s=String(t||"");return!n||!s?!1:Za(n).some(a=>a.id===s)}function ig(e){return Za(e)[0]?.id||""}function GS(e=""){const t=Q(e);if(t){const a=De(r.progress.lastOpenedJlptLessons?.[t]||null)||(De(r.progress.lastOpenedJlptLesson||null)?.level===t?De(r.progress.lastOpenedJlptLesson||null):null);return a&&ni(t,a.lessonId)?a:null}const n=[De(r.progress.lastOpenedJlptLesson||null),...Object.values(r.progress.lastOpenedJlptLessons||{}).map(a=>De(a)).filter(Boolean)].filter(Boolean);return n.sort((a,o)=>(Date.parse(o.updatedAt||"")||0)-(Date.parse(a.updatedAt||"")||0)),n.find(a=>ni(a.level,a.lessonId))||null}function zS(e=""){const t=Q(e);if(t)return De(r.progress.lastOpenedJlptLessons?.[t]||null)||(De(r.progress.lastOpenedJlptLesson||null)?.level===t?De(r.progress.lastOpenedJlptLesson||null):null);const n=[De(r.progress.lastOpenedJlptLesson||null),...Object.values(r.progress.lastOpenedJlptLessons||{}).map(s=>De(s)).filter(Boolean)].filter(Boolean);return n.sort((s,a)=>(Date.parse(a.updatedAt||"")||0)-(Date.parse(s.updatedAt||"")||0)),n[0]||null}function JS(e){const t=Q(e);if(!t)return"";const n=_e.indexOf(t);return n>=0&&n<_e.length-1?_e[n+1]:""}function ot(e,t,n="open"){var h;const s=Q(e),a=String(t||"");if(!s||!a)return null;const o={level:s,lessonId:a,updatedAt:new Date().toISOString(),source:n},c=De(r.progress.lastOpenedJlptLessons?.[s]||null),l=De(r.progress.lastOpenedJlptLesson||null);(h=r.progress).lastOpenedJlptLessons||(h.lastOpenedJlptLessons={}),r.progress.lastOpenedJlptLessons[s]=o,r.progress.lastOpenedJlptLesson=o;const d=TS(s,a,n),u=Xn(s);return u&&u.currentLessonId!==a&&(u.currentLessonId=a),(!c||c.lessonId!==a||c.level!==s||l?.lessonId!==a||l?.level!==s||d)&&j(),o}function vt(e,t="btn ghost"){const n=Q(e),s=JS(n);if(!n||!s)return"";const a=ig(s);if(!a)return"";const o=p()==="ru"?`Первый урок ${s}`:`${s} lesson 1`;return`<button class="${g(t)}" type="button" data-action="final-test-next-level" data-level="${g(n)}" data-next-level="${g(s)}" data-next-lesson="${g(a)}">${i(o)}</button>`}function Ht(){return Q(r.activeJlptLesson)||Q(r.activeTextbookLevel)||Q(r.jlptLessons.find(e=>it(e.jlpt))?.jlpt)||Q(r.jlptLessons[0]?.jlpt)||"N5"}function US(e,t={}){const n=String(e||r.route||"home").toLowerCase();return n==="textbooks"?"textbooks":n==="textbook"?`textbooks/${encodeURIComponent(Q(t.level||r.activeTextbookLevel||Ht())||Ht())}`:n==="lesson"?`jlpt-lesson/${encodeURIComponent(Q(t.level||r.activeJlptLesson||Ht())||Ht())}`:n==="srs"?"review":n==="stats"?"stats":n==="achievements"?"achievements":n==="achievement"?r.route||"home":n||"home"}function qS(e=r.route,t={}){const n=new URL(location.href);return n.search="",n.hash=US(e,t),n.href}function HS(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=Q(t.level||r.activeJlptLesson||r.activeTextbookLevel||""),a=p()==="ru",o={textbooks:a?"Учебники Flash Kanji":"Flash Kanji textbooks",textbook:a?"Учебник Flash Kanji":"Flash Kanji textbook",lesson:a?"Урок Flash Kanji":"Flash Kanji lesson",srs:a?"Повторение Flash Kanji":"Flash Kanji review",stats:a?"Статистика Flash Kanji":"Flash Kanji stats",achievements:a?"Достижения Flash Kanji":"Flash Kanji achievements",achievement:"Flash Kanji"},c=o[n]||o.achievement;return s&&["textbook","lesson"].includes(n)?`${c} ${s}`:c}function WS(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=Q(t.level||r.activeJlptLesson||r.activeTextbookLevel||""),a=s?Mt(s):null,o=t.lesson||(s?jn(s):null),c=p()==="ru";if(n==="textbooks")return c?"Функциональные учебники JLPT N5-N1 внутри Flash Kanji.":"Functional JLPT N5-N1 textbooks inside Flash Kanji.";if(n==="textbook"){const l=f(a?.displayTitle||a?.title||{}),d=Number(a?.lessonCount||0),u=Number(a?.kanjiCount||0);return c?`${l||"Учебник"}: ${d} уроков и ${u} кандзи.`:`${l||"Textbook"}: ${d} lessons and ${u} kanji.`}if(n==="lesson"){const l=f(o?.title||{}),d=f(o?.summary||{});return c?`${s?`${s} · `:""}${l||"Урок"} — ${d||"урок в Flash Kanji"}.`:`${s?`${s} · `:""}${l||"Lesson"} — ${d||"a Flash Kanji lesson"}.`}return n==="srs"?c?"Очередь повторений Flash Kanji.":"Flash Kanji review queue.":n==="stats"?c?"Моя статистика и прогресс во Flash Kanji.":"My Flash Kanji stats and progress.":n==="achievements"?c?"Достижения и секреты Flash Kanji.":"Flash Kanji achievements and secrets.":n==="achievement"?e0(t.reward||r.rewardModal||{}):"Flash Kanji."}function XS(){return p()==="ru"?"Поделиться":"Share"}function Is(e=r.route,t={}){const n=Q(t.level||""),s=String(t.lessonId||t.lesson?.id||""),a=t.label||XS();return`
      <button class="btn ghost share-btn" type="button" data-action="share-page" data-share-section="${g(e)}" ${n?`data-share-level="${g(n)}"`:""} ${s?`data-share-lesson-id="${g(s)}"`:""} ${t.toastKey?`data-share-toast-key="${g(t.toastKey)}"`:""}>
        <span class="btn-icon" aria-hidden="true">${QS()}</span>
        <span>${i(a)}</span>
      </button>
    `}function QS(){return`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M15 5h4v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M10 14 19 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M19 14v5H5V5h5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>
    `}function og(e){return e==="youtube"?`
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
    `}async function VS(e,t={}){const n=t.toastKey||"shareLinkCopied",s={title:e.title,text:e.text,url:e.url};if(e.files?.length&&navigator.canShare?.({files:e.files})&&(s.files=e.files),navigator.share)try{return await navigator.share(s),"share"}catch(o){if(o&&o.name==="AbortError")return"abort"}return await r0(e.text,e.url,n)?"copy":"failed"}async function YS(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=t.reward||r.rewardModal||null,a={section:n,title:HS(n,t),text:WS(n,t),url:qS(n,t),files:[]};if(n==="achievement"||s){const o=await t0(s||{});o&&typeof File<"u"&&(a.files=[new File([o],`flash-kanji-achievement-${r.progress.level}.png`,{type:"image/png"})])}return a}async function lg(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s={...t};s.level||(s.level=t.level||r.activeJlptLesson||r.activeTextbookLevel||""),Sn("share_opened",{section:n,level:Q(s.level)||""});const a=await YS(n,s),o=await VS(a,{toastKey:t.toastKey||"shareLinkCopied"});return o==="share"?(Sn("share_completed",{section:n,method:a.files?.length?"file":"web_share"}),!0):o==="copy"?(Sn("share_link_copied",{section:n}),Sn("share_completed",{section:n,method:"copy"}),!0):(o==="abort"||F(p()==="ru"?"Не удалось поделиться":"Share failed"),!1)}async function ZS(){await lg("achievement",{reward:r.rewardModal||{},toastKey:"shareCopied"})}function e0(e={}){const t=A("shareFallback"),n=e.level||r.progress.level,s=qt(),a=e.type==="level"?`${s.current}/${s.next}`:e.totalXp||r.progress.xp,o=e.type==="level"?r.progress.moonFragments:e.moonFragments||r.progress.moonFragments;return`${t}: ${A("level")} ${n}, ${a} XP, ${o} Moon Fragments.`}async function t0(e={}){const s=document.createElement("canvas");s.width=1200,s.height=630;const a=s.getContext("2d");if(!a)return null;n0(a,1200,630);const o=e.level||r.progress.level,c=qt(),l=e.type==="level"?`${c.current}/${c.next}`:e.totalXp||r.progress.xp,d=e.type==="level"?r.progress.moonFragments:e.moonFragments||r.progress.moonFragments,u=e.mascot||(r.progress.level%2===0?"leya":"eva"),m=Ba(u,e.mood||"happy",e.dialog||e.type||"achievement"),[h,v]=await Promise.all([cg("assets/logo.webp"),m?cg(m):Promise.resolve(null)]);return h&&dg(a,h,58,48,330,116),v&&dg(a,v,780,95,330,450),a.fillStyle="#f7f4ee",a.font="900 58px system-ui, sans-serif",a.fillText(A("levelUp"),64,230),a.font="900 110px 'Yu Mincho', serif",a.fillStyle="#ffe15a",a.fillText(`${A("level")} ${o}`,64,340),a.font="800 38px system-ui, sans-serif",a.fillStyle="#f7f4ee",a.fillText(`${l} XP`,70,425),a.fillText(`${d} Moon Fragments`,70,482),a.fillStyle="rgba(255,255,255,0.74)",a.font="700 28px system-ui, sans-serif",a.fillText("Flash Kanji | JLPT Japanese learning",70,558),a.strokeStyle="rgba(255, 225, 90, 0.7)",a.lineWidth=3,a.strokeRect(34,30,1132,570),s0(s)}function n0(e,t,n){const s=e.createLinearGradient(0,0,t,n);s.addColorStop(0,"#08080c"),s.addColorStop(.45,"#1c1018"),s.addColorStop(1,"#071a18"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255, 56, 92, 0.22)",e.beginPath(),e.moveTo(0,70),e.lineTo(720,0),e.lineTo(560,630),e.lineTo(0,630),e.closePath(),e.fill(),e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=1;for(let a=-t;a<t*2;a+=38)e.beginPath(),e.moveTo(a,0),e.lineTo(a+t,n),e.stroke()}function cg(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=new URL(e,location.href).href})}function dg(e,t,n,s,a,o){const c=Math.min(a/t.naturalWidth,o/t.naturalHeight),l=t.naturalWidth*c,d=t.naturalHeight*c;e.drawImage(t,n+(a-l)/2,s+(o-d)/2,l,d)}function s0(e){return new Promise(t=>e.toBlob(t,"image/png",.94))}async function r0(e,t,n="shareLinkCopied"){const s=await ug(`${e}
${t}`);return F(s?A(n):e),s}async function ug(e){if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",document.body.append(t),t.focus(),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{t.remove()}}async function a0(e){const t=e.target.files?.[0];if(t)try{const n=JSON.parse(await t.text());r.progress=kc(rs(),n.progress||n),Hs(),n.customization&&(r.customization={...Pn(),...n.customization,selected:{...Pn().selected,...n.customization.selected||{}}},ss()),ea(),Rs(),j(),Wt(),F(A("import")),x()}catch(n){console.error(n),F("Invalid JSON")}finally{e.target.value=""}}function i0(){if(!confirm(p()==="ru"?"Сбросить прогресс?":"Reset progress?"))return;const e=r.progress.settings;r.progress=rs(),r.progress.settings=e,r.finalTestModal=null,r.finalTestBusy=!1,Hs(),Rs(),j(),x()}function o0(){r.progress.settings.theme=r.progress.settings.theme==="dark"?"light":"dark",r.progress.settings.themeManuallySelected=!0,Wt(),j(),x()}function l0(){r.progress.settings.language=p()==="ru"?"en":"ru",r.progress.settings.languageAutoDetected=!1,r.progress.settings.languageManuallySelected=!0,j(),x()}function pg(){r.progress.settings.sound=!en(r.progress.settings.sound,!0),r.progress.settings.uxSound=r.progress.settings.sound,Rs(),vl(),j(),F(r.progress.settings.sound?"в™Є":"Г—")}function c0(){pg()}function Mr(){return window.FlashKanjiSound||null}function d0(){try{Mr()?.preloadSounds?.()}catch(e){console.warn("UX sounds preload failed.",e)}}function Rs(){const e=Mr();!e||!r.progress?.settings||(e.setSoundEnabled?.(en(r.progress?.settings?.sound,!0)),e.setSoundVolume?.(ri()))}function si(){return en(r.progress?.settings?.sound,!0)}function vl(){const e=Se('[data-action="sound"]');if(!e)return;const t=en(r.progress?.settings?.sound,!0),n=p()==="ru"?t?"Звук":"Звук выключен":t?"Sound":"Sound off";e.classList.toggle("is-muted",!t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",n),e.title=n,e.innerHTML=u0(t)}function u0(e){return e?`
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
      `}function p0(e){return e?`
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
      `}function g0(){const e=Se('[data-action="notification-center"]');if(!e)return;const t=r.notificationPrompt||Dr(),n=!!(t.docked||r.notificationPromptVisible||ci("header")),s=!!r.notificationPromptVisible,a=s?p()==="ru"?"Скрыть уведомление":"Hide notification":t.docked?p()==="ru"?"Открыть уведомление":"Open notification":p()==="ru"?"Уведомления":"Notifications";e.hidden=!n,e.classList.toggle("is-active",s),e.classList.toggle("has-prompt",!!(t.docked||s)),e.setAttribute("aria-pressed",String(s)),e.setAttribute("aria-label",a),e.title=a,e.innerHTML=p0(s)}function wl(){const e=Se('[data-action="toggle-header-socials"]');if(!e)return;const t=bl(),n=p()==="ru"?t?"Скрыть соцсети":"Открыть соцсети":t?"Hide social links":"Open social links";e.setAttribute("aria-expanded",String(t)),e.classList.toggle("is-active",t),e.setAttribute("aria-label",n),e.title=n}function gg(e){const t=document.querySelector(".app-header");t&&(t.classList.toggle("is-social-open",!!e),wl())}function bl(){return!!document.querySelector(".app-header")?.classList.contains("is-social-open")}function ri(){const e=Number(r.progress?.settings?.uxVolume);return Number.isFinite(e)?ce(e,0,1):.75}function m0(e){const t=ce(Number(e),0,1);r.progress.settings.uxVolume=t,Rs(),j()}function I(e){if(!si())return!1;const t=()=>{try{if(!!Mr()?.playSound?.(e)){Os=Date.now();return}$l(String(e))}catch(n){console.warn("UX sound failed.",n),$l(String(e))}};return typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>window.setTimeout(t,0)):window.setTimeout(t,0),!0}function Wt(){document.documentElement.dataset.theme=r.progress.settings.theme,document.documentElement.dataset.customTheme=r.customization?.selected?.theme||"theme_default_dark";const e=Ft();document.documentElement.dataset.customRoom=e?.id||"bg_study_hub",document.documentElement.style.setProperty("--app-room-bg",f0(e?.file||"assets/bg/bg_study_hub.webp"));const t=Mv();document.documentElement.dataset.customEffect=t||"none",document.querySelector('meta[name="theme-color"]')?.setAttribute("content",r.progress.settings.theme==="light"?"#f8f7f2":"#08080c")}function f0(e){const t=String(e).replace(/["\\\n\r]/g,"");return`url("${t.startsWith("assets/")?`../${t}`:t}")`}function A(e){return r.i18n?.ui?.[e]?.[p()]||r.i18n?.ui?.[e]?.ru||e}function p(){return r.progress?.settings?.language||"ru"}function f(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function h0(e){if(!e)return"";try{return new Intl.DateTimeFormat(p()==="ru"?"ru-RU":"en-US",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch{return String(e).slice(0,16)}}function Pr(e){return p()==="en"&&r.lessonTranslations[e.id]?.title_en||e.title}function v0(e){return p()==="en"&&r.lessonTranslations[e.id]?.summary_en||e.summary}function kl(e){const t=r.lessons.find(n=>n.id===e);return t?Pr(t):""}function L(e){return Ie(e,p())}function Ie(e,t=p()){if(!e)return"";const n=Jp(e);return n&&n.meaning?t==="en"?n.meaning.en||n.meaning.ru||e.meaning_en||r.kanjiTranslations[e.id]?.meaning_en||"":n.meaning.ru||e.meaning_ru||r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||"":t==="en"?r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||e.meaning_ru||"":e.meaning_ru||r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||""}function Er(e){return p()==="en"?r.kanjiTranslations[e.id]?.interface_use_en||e.interface_use_en||e.interface_use||"":e.interface_use||e.interface_use_en||""}function Ce(e){if(p()!=="en")return e.translation_ru||e.translation||"";if(e.translation_en)return e.translation_en;const t=r.vocabulary.find(n=>n.word===e.word||yl(n.romaji)===yl(e.romaji));return t?.translation_en?t.translation_en:Hg[yl(e.romaji)]||e.translation||""}function yl(e){return String(e||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function _s(e){return r.dialogues?.mascots?.[e]||{name:{ru:e,en:e},sprites:{},dialogs:{}}}function Re(e,t){const n=e==="eva"?w0(t):"";if(n)return n;const s=_s(e).dialogs?.[t]||_s(e).dialogs?.welcome||{},a=s[p()]||s.ru||[""];return Oe(a)}function w0(e="welcome"){const t=String(e||"welcome").toLowerCase();if(!["welcome","progress","hint","lessoncomplete","masterymilestone","achievement"].includes(t))return"";const n=b0(t),s=[...r.evaAutonomyLines||[],...ba()].filter(c=>{const l=f(c?.text||{});if(!l)return!1;const d=Array.isArray(c.tags)?c.tags:[];if(!(n.includes(c.category)||d.some(h=>n.includes(h))))return!1;const m=mg(l);return m.length>=12&&m.length<=132}),a=s.filter(c=>!ji.includes(c.id)),o=Oe(a.length?a:s);return o?(o.id&&(ji=[o.id,...ji.filter(c=>c!==o.id)].slice(0,18)),mg(f(o.text||{}))):""}function b0(e){return{welcome:["fis_study","fis_focus","fis_observation","fis_short","study","short","mood","room"],progress:["fis_reward","fis_streak","fis_review","reward","streak","review","progress"],hint:["fis_focus","fis_observation","hint","study"],lessoncomplete:["fis_reward","fis_streak","reward","study"],masterymilestone:["fis_reward","fis_streak","reward","progress"],achievement:["fis_reward","reward","achievement"]}[e]||["fis_study","study"]}function mg(e){const t=String(e||"").replace(/\s+/g," ").trim();if(t.length<=132)return t;const n=t.match(/[^.!?гЂ'пјЃпјџ]+[.!?гЂ'пјЃпјџ]?/g)||[t];let s="";for(const a of n){const o=`${s} ${a.trim()}`.trim();if(o.length>132)break;s=o}return s.length>=12?s:`${t.slice(0,124).trimEnd()}...`}function ai(e){const t=fg(e);return`<span class="pill ${t}">${i(qg[t]||"New")}</span>`}function fg(e){const t=String(e||"new").toLowerCase();return t==="new"||t==="learning"||t==="review"||t==="mastered"?t:t==="New".toLowerCase()?"new":t.includes("master")?"mastered":t.includes("learn")?"learning":t.includes("review")?"review":"new"}function hg(e){const t=(e.correct||0)+(e.wrong||0);return t?Math.round((e.correct||0)/t*100):0}function k0(){const e=getComputedStyle(document.documentElement);return{text:e.getPropertyValue("--text").trim(),muted:e.getPropertyValue("--muted").trim(),line:e.getPropertyValue("--line").trim(),red:e.getPropertyValue("--accent").trim(),yellow:e.getPropertyValue("--accent-2").trim(),green:e.getPropertyValue("--accent-3").trim(),blue:e.getPropertyValue("--accent-4").trim(),danger:e.getPropertyValue("--danger").trim(),pink:"#ff91d8",blueSoft:"rgba(67, 214, 255, 0.16)",dangerSoft:"rgba(255, 107, 95, 0.16)"}}function y0(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.text}}},scales:{x:{ticks:{color:e.muted},grid:{color:e.line}},y:{beginAtZero:!0,ticks:{color:e.muted,precision:0},grid:{color:e.line}}}}}function ii(){try{return qr||(qr=new(window.AudioContext||window.webkitAudioContext)),qr.state==="suspended"&&qr.resume().catch(()=>null),qr}catch(e){return console.warn("Audio context unavailable.",e),null}}function $0(e){const t=String(e||"").toLowerCase();return t.includes("wrong")||t.includes("failed")?{type:"triangle",frequencies:[180],duration:.22,peak:.12,interval:0}:t.includes("correct")||t.includes("success")?{type:"triangle",frequencies:[440,554.37],duration:.18,peak:.11,interval:.09}:t.includes("level")||t.includes("achievement")||t.includes("reward")||t.includes("xp")||t.includes("moon")||t.includes("unlock")?{type:"sine",frequencies:[523.25,659.25,783.99],duration:.26,peak:.1,interval:.08}:t.includes("close")?{type:"square",frequencies:[260],duration:.12,peak:.08,interval:0}:t.includes("open")||t.includes("button")||t.includes("click")||t.includes("tab")||t.includes("page")?{type:"sine",frequencies:[320],duration:.09,peak:.08,interval:0}:{type:"sine",frequencies:[360],duration:.16,peak:.08,interval:0}}function $l(e){const t=ii();if(!t)return!1;try{const n=$0(e),s=t.currentTime+.01;return n.frequencies.forEach((a,o)=>{const c=t.createOscillator(),l=t.createGain();c.type=n.type,c.frequency.value=a;const d=s+n.interval*o;l.gain.setValueAtTime(1e-4,d),l.gain.exponentialRampToValueAtTime(n.peak,d+.02),l.gain.exponentialRampToValueAtTime(1e-4,d+n.duration),c.connect(l).connect(t.destination),c.start(d),c.stop(d+n.duration+.02)}),Os=Date.now(),!0}catch(n){return console.warn("Fallback UX tone failed.",n),!1}}window.FlashKanjiUxToneFallback=$l;function j0(){const e=()=>{const t=ii();t?.state==="suspended"&&t.resume().catch(()=>null)};["pointerdown","touchstart","keydown","mousedown"].forEach(t=>{document.addEventListener(t,e,{once:!0,passive:!0,capture:!0})})}function oi(e){if(r.progress.settings.sound){if(Mr()){I(e==="again"?"answer_wrong":"answer_correct");return}try{const t=ii();if(!t)return;Os=Date.now();const n=t.createOscillator(),s=t.createGain(),a=t.currentTime;n.type="triangle",n.frequency.value=e==="again"?180:480,s.gain.setValueAtTime(1e-4,a),s.gain.exponentialRampToValueAtTime(.13,a+.015),s.gain.exponentialRampToValueAtTime(1e-4,a+.18),n.connect(s).connect(t.destination),n.start(a),n.stop(a+.2)}catch(t){console.warn("Audio unavailable.",t)}}}function S0(){if(r.progress.settings.sound)try{const e=ii();if(!e)return;Os=Date.now();const t=e.currentTime;[523.25,659.25,783.99].forEach((n,s)=>{const a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.value=n;const c=t+s*.08;o.gain.setValueAtTime(1e-4,c),o.gain.exponentialRampToValueAtTime(.12,c+.02),o.gain.exponentialRampToValueAtTime(1e-4,c+.24),a.connect(o).connect(e.destination),a.start(c),a.stop(c+.26)})}catch(e){console.warn("Achievement sound unavailable.",e)}}function N0(){const e=document.createElement("div");e.className="confetti",e.innerHTML=Array.from({length:34},(t,n)=>`<i style="--x:${Math.random()*100}vw;--d:${Math.random()*.8+.8}s;--r:${Math.random()*360}deg;--c:${n%4}"></i>`).join(""),document.body.append(e),window.setTimeout(()=>e.remove(),1800)}function F(e){const t=Se("#toast");t.textContent=e,t.hidden=!1,clearTimeout(Wl),Wl=window.setTimeout(()=>{t.hidden=!0},2400)}function x0(){return`
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
      </section>`}function A0(e){return`<section class="empty-state" style="margin-top:24px"><span class="kanji-char">警</span><h1>Data error</h1><p>${i(e.message)}</p></section>`}function C0(){try{[wt,Es,Ur,"flashKanji.lastForcedBuild"].forEach(t=>{try{localStorage.removeItem(t)}catch(n){console.warn(`Could not remove recovery key ${t}.`,n)}})}catch(e){console.warn("Could not clear Flash Kanji recovery markers during boot recovery.",e)}}async function L0(){if("caches"in window){const e=await caches.keys();await Promise.all(e.map(t=>caches.delete(t)))}if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(async t=>{try{await t.unregister()}catch(n){console.warn("Could not unregister service worker during boot recovery.",n)}}))}}async function T0(e){try{const t=Number(sessionStorage.getItem(Jr)||"0");if(t>=2)return!1;const n=t+1;sessionStorage.setItem(Jr,String(n)),console.warn(`[FlashKanji] Boot failed, attempting recovery stage ${n}.`,e),n>=2&&C0(),await L0();try{localStorage.removeItem(wt),localStorage.removeItem(Es),localStorage.removeItem(Ur),localStorage.removeItem("flashKanji.lastForcedBuild")}catch(a){console.warn("Boot recovery marker cleanup failed.",a)}const s=new URL(location.href);return s.searchParams.set("cachebust",Date.now().toString()),s.searchParams.set("bootRecovery",String(n)),location.replace(s.toString()),!0}catch(t){return console.warn("Boot recovery failed.",t),!1}}function I0(){if(!("serviceWorker"in navigator)||location.protocol==="file:")return;let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,location.reload())}),navigator.serviceWorker.addEventListener("message",n=>{if(n.data?.type==="FLASH_KANJI_CACHE_RESET_DONE")try{localStorage.setItem(Es,`${G}:done`)}catch(s){console.warn("Cannot save PWA cache reset marker.",s)}});const t=async()=>{try{const n=new URL("service-worker.js",document.baseURI),s=await navigator.serviceWorker.register(n.href);if(!s||typeof s.update!="function")return;R0(s),await s.update().catch(console.warn)}catch(n){console.warn(n)}};document.readyState==="loading"?window.addEventListener("load",()=>{t()},{once:!0}):t()}function R0(e){e&&e.addEventListener("updatefound",()=>{const t=e.installing;t&&t.addEventListener("statechange",()=>{(t.state==="installed"||t.state==="activated")&&e.update().catch(()=>null)})})}function li(){const e={declineCount:0,nextShowAt:0,neverShow:!1,installed:!1};try{const t=localStorage.getItem(C)||localStorage.getItem(N);if(!t)return e;const n=JSON.parse(t),s={...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,installed:!!n.installed};return localStorage.getItem(C)||localStorage.setItem(C,JSON.stringify(s)),s}catch(t){return console.warn("PWA install prompt state reset.",t),e}}function jl(){try{localStorage.setItem(C,JSON.stringify(r.pwaInstallPrompt))}catch(e){console.warn("Cannot save PWA install prompt state.",e)}}function _0(e){e.preventDefault(),Yt=e,r.progress&&r.i18n&&P0()}async function M0(){if(Sn("pwa_install_clicked",{available:!!Yt,ios:Ms()}),Kr()){Nl();return}if(!Yt){r.pwaInstallHelpVisible=!0,xt();return}const e=Yt;Yt=null;try{if(await e.prompt(),(await e.userChoice)?.outcome==="accepted"){Nl();return}xl()}catch(t){console.warn("PWA install prompt failed.",t),xl()}}function Kr(){return["standalone","fullscreen","minimal-ui"].some(t=>window.matchMedia?.(`(display-mode: ${t})`)?.matches)||Reflect.get(navigator,"standalone")===!0}function Sl(){const e=r.pwaInstallPrompt||li();if(Kr()||e.installed||e.neverShow||Date.now()<Number(e.nextShowAt||0))return!1;const t=r.progress?.visits?.firstVisitDate;return!t||xn(t,re())<1?!1:!!Yt||Ms()}function P0(){Sl()&&(Sn("pwa_prompt_shown",{source:Yt?"browser":"ios"}),I("notification_soft"),x())}function Nl(){r.pwaInstallPrompt={...li(),...r.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},r.pwaInstallHelpVisible=!1,jl(),Sn("pwa_installed",{platform:Ms()?"ios":"browser"}),kg(),r.progress&&r.i18n&&x()}function xl(){const e=r.pwaInstallPrompt||li(),t=Math.min(Number(e.declineCount||0)+1,5);r.pwaInstallPrompt={...e,declineCount:t,nextShowAt:E0(t),neverShow:t>=5,installed:!1},jl(),x()}function E0(e){const s={1:864e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||864e5)}function K0(){!Kr()||r.pwaInstallPrompt.installed||(r.pwaInstallPrompt={...r.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},jl())}function Ms(){const e=navigator.userAgent||"",t=/iphone|ipad|ipod/i.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=/safari/i.test(e)&&!/(crios|fxios|edgios|opios|chrome|android)/i.test(e);return t&&n}function vg(){return p()==="en"?{badge:"Offline PWA",title:"Install Flash Kanji on your home screen?",description:"Your progress, lessons and reviews will open like a real app.",iosInstruction:"Tap Share -> Add to Home Screen.",install:"Install app",later:"Later"}:{badge:"Offline PWA",title:"Установить Flash Kanji на главный экран?",description:"Так прогресс, уроки и повторения будут открываться как приложение.",iosInstruction:"Нажмите Поделиться → На экран Домой.",install:"установить приложение",later:"Позже"}}function Dr(){const e={declineCount:0,nextShowAt:0,neverShow:!1,permission:typeof Notification>"u"?"unsupported":Notification.permission,enabled:!1,acceptedAt:null,lastAskedAt:0,lastShown:{},periodicSync:!1,docked:!1};try{const t=localStorage.getItem(_);if(!t)return e;const n=JSON.parse(t);return{...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,enabled:!!n.enabled,lastShown:n.lastShown&&typeof n.lastShown=="object"?n.lastShown:{},docked:!!n.docked}}catch(t){return console.warn("Notification prompt state reset.",t),e}}function Nn(){try{localStorage.setItem(_,JSON.stringify(r.notificationPrompt))}catch(e){console.warn("Cannot save notification prompt state.",e)}}function Or(){clearTimeout(wi),wi=0}function D0(){Or(),r.notificationPromptVisible&&(wi=window.setTimeout(()=>{r.notificationPromptVisible&&wg()},5e3))}function wg(){Or(),!(!r.notificationPromptVisible&&r.notificationPrompt?.docked)&&(r.notificationPromptVisible=!1,r.notificationPrompt={...r.notificationPrompt,docked:!0},Nn(),x())}function bg(){return Kr()||!!r.pwaInstallPrompt?.installed}function ci(e="usage"){const t=r.notificationPrompt||Dr();return!(!("Notification"in window)||t.neverShow||t.enabled||!bg()||Notification.permission==="granted"||Notification.permission==="denied"||Date.now()<Number(t.nextShowAt||0)||e!=="lesson_complete"&&Date.now()-xi<2*60*1e3)}function di(e="usage"){return ci(e)?(r.notificationPromptVisible=!0,r.notificationPrompt={...r.notificationPrompt,docked:!1},Nn(),I("notification_soft"),D0(),x(),!0):("Notification"in window&&Notification.permission==="granted"&&yg(),!1)}function kg(){if(clearTimeout(Vl),!bg())return;const e=Math.max(0,2*60*1e3-(Date.now()-xi));Vl=window.setTimeout(()=>di("usage"),e)}async function O0(){if(r.notificationPromptVisible=!1,Or(),!("Notification"in window)){ui();return}try{const e=Notification.permission==="granted"?"granted":await Notification.requestPermission();if(r.notificationPrompt.permission=e,r.notificationPrompt.lastAskedAt=Date.now(),e==="granted"){yg(),F(jg().enabled),xt();return}ui()}catch(e){console.warn("Notification permission failed.",e),ui()}}function yg(){!("Notification"in window)||Notification.permission!=="granted"||(Or(),r.notificationPrompt={...Dr(),...r.notificationPrompt,permission:"granted",enabled:!0,neverShow:!0,docked:!1,acceptedAt:r.notificationPrompt.acceptedAt||new Date().toISOString(),nextShowAt:0},Nn(),Al())}function ui(){const e=r.notificationPrompt||Dr(),t=Math.min(Number(e.declineCount||0)+1,5);r.notificationPromptVisible=!1,Or(),r.notificationPrompt={...e,permission:"Notification"in window?Notification.permission:"unsupported",declineCount:t,nextShowAt:F0(t),neverShow:t>=5,enabled:!1,docked:!1,lastAskedAt:Date.now()},Nn(),xt()}function F0(e){const s={1:432e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||12*36e5)}function Al(){!("Notification"in window)||Notification.permission!=="granted"||(r.notificationPrompt.permission="granted",r.notificationPrompt.enabled=!0,Nn(),Si.forEach(e=>clearTimeout(e)),Si.clear(),[{type:"daily_bonus",hour:9,minute:0},{type:"lesson",hour:11,minute:30},{type:"review",hour:18,minute:0},{type:"streak",hour:20,minute:30}].forEach(e=>$g(e.type,B0(e.hour,e.minute))),U0())}function $g(e,t){const n=Math.max(1e3,Math.min(t.getTime()-Date.now(),2147483647)),s=window.setTimeout(async()=>{await G0(e),$g(e,q0(t,1))},n);Si.set(e,s)}function B0(e,t){const n=new Date;return n.setHours(e,t,0,0),n.getTime()<=Date.now()+60*1e3&&n.setDate(n.getDate()+1),n}async function G0(e){if(!z0(e))return!1;const t=J0(e);try{const n=await navigator.serviceWorker?.ready;return n?.showNotification?await n.showNotification(t.title,t.options):"Notification"in window&&Notification.permission==="granted"&&new Notification(t.title,t.options),I(e==="daily_bonus"?"notification_reward":"notification_reminder"),r.notificationPrompt.lastShown[e]=re(),Nn(),!0}catch(n){return console.warn("Notification show failed.",n),!1}}function z0(e){if(!("Notification"in window)||Notification.permission!=="granted"||r.notificationPrompt.lastShown?.[e]===re())return!1;if(e==="review")return Ke()>0;if(e==="daily_bonus"){const t=oa(r.progress.dailyBonusPending);return!!r.progress.visits?.firstVisitDate&&!!t&&t.availableOn<=re()&&!r.progress.dailyBonuses[re()]}return e==="lesson"?pS().length>0:e==="streak"?(r.progress.streak.current||r.progress.visits?.streak||0)>0:!0}function J0(e){const t=p()==="ru",n={review:{title:"Flash Kanji",body:t?"Ваши кандзи ждут повторения.":"Your kanji are waiting for review.",url:"./index.html#review"},streak:{title:t?"Лея рядом 🌙":"Leya is nearby рџЊ™",body:t?"Не потеряйте свою серию дней.":"Do not lose your daily streak.",url:"./index.html#home"},daily_bonus:{title:t?"Ежедневный бонус":"Daily Bonus",body:t?"Заберите XP и Moon Fragments.":"Claim XP and Moon Fragments.",url:"./index.html#home"},lesson:{title:t?"Новые знания ждут":"New knowledge awaits",body:t?"Продолжите изучение кандзи.":"Continue learning kanji.",url:"./index.html#textbooks"}},s=n[e]||n.review;return{title:s.title,options:{body:s.body,tag:`flash-kanji-${e}`,renotify:!1,icon:"./assets/icon-192.png",badge:"./assets/icon-192.png",data:{url:s.url,type:e}}}}async function U0(){try{const e=await navigator.serviceWorker?.ready;if(!e?.periodicSync)return;await e.periodicSync.register("flash-kanji-daily",{minInterval:24*60*60*1e3}),r.notificationPrompt.periodicSync=!0,Nn()}catch{r.notificationPrompt.periodicSync=!1,Nn()}}function jg(){return p()==="en"?{badge:"PWA reminders",title:"Allow Flash Kanji notifications?",description:"We will remind you about reviews, streaks and daily bonuses.",allow:"Allow",later:"Later",enabled:"Notifications enabled"}:{badge:"PWA напоминания",title:"Разрешить уведомления Flash Kanji?",description:"Мы напомним о повторениях, серии и ежедневном бонусе.",allow:"Разрешить",later:"Позже",enabled:"Уведомления включены"}}function se(e){return{...e,history:[...e.history||[]]}}function q0(e,t){return new Date(e.getTime()+t*24*60*60*1e3)}function H0(){const e=new Date;return e.setHours(23,59,59,999),e}function re(){return Cl(new Date)}function Cl(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Ll(e){const[t,n,s]=e.split("-").map(Number);return new Date(t,n-1,s)}function xn(e,t){return Math.round((Ll(t)-Ll(e))/864e5)}function Sg(e,t){const n=Ll(e);return n.setDate(n.getDate()+t),Cl(n)}function W0(e){return Array.from({length:e},(t,n)=>{const s=new Date;return s.setDate(s.getDate()-(e-1-n)),Cl(s)})}function An(e){if(!e)return p()==="ru"?"сейчас":"now";const t=new Date(e).getTime()-Date.now();if(t<=0)return p()==="ru"?"сейчас":"now";const n=Math.ceil(t/6e4);if(n<60)return p()==="ru"?`через ${n} мин.`:`in ${n} min`;const s=Math.ceil(n/60);if(s<24)return p()==="ru"?`через ${s} ч.`:`in ${s} h`;const a=Math.ceil(s/24);return p()==="ru"?`через ${a} дн.`:`in ${a} d`}function R(e,t){return t?ce(Math.round(e/t*100),0,100):0}function ce(e,t,n){return Math.max(t,Math.min(n,e))}function pi(e,t){const n=10**t;return Math.round(e*n)/n}function Oe(e){return e[Math.floor(Math.random()*e.length)]}function Cn(e,t){return Math.floor(Number(e)+Math.random()*(Number(t)-Number(e)))}function Fr(e,t){return String(e)===String(t)?"selected":""}function X0(){const e=decodeURIComponent(location.pathname||"/"),t=e.replace(/\/textbooks(?:\/[^/?#]*)*\/?$/i,"/")||"/";if(t!==e||/^\/?textbooks(?:\/|$)/i.test(e))return t.endsWith("/")?t:`${t}/`;if(/\/[^/]+\.html$/i.test(e)){const n=e.replace(/[^/]+\.html$/i,"")||"/";return n.endsWith("/")?n:`${n}/`}return e.endsWith("/")?e:`${e}/`}function Ng(e="",t=""){const n=String(e||"").trim().toUpperCase(),s=String(t||"").trim(),a=n?`#textbooks/${encodeURIComponent(n)}`:"#textbooks/";return s?`${a}/${encodeURIComponent(s)}`:a}function Pt(e=""){const t=String(e||"").trim(),n=t?t.startsWith("#")?t:`#${t.replace(/^#/,"")}`:"",s=`${X0()}${location.search||""}${n}`;`${location.pathname}${location.search||""}${location.hash||""}`!==s&&history.replaceState(null,"",s)}function xg(){return El(location.hash).raw}function Tl(){return El(location.hash).route}function Il(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^kanji\/([^/?]+)/);return t?t[1]:""}function Rl(){const e=xg(),t=e.match(/^textbooks\/([^/?#]+)/i)||e.match(/^jlpt\/([^/?#]+)/i);return t?String(t[1]||"").toUpperCase():""}function _l(){const e=xg(),t=e.match(/^textbooks\/[^/?#]+\/([^?#]+)/i)||e.match(/^jlpt\/[^/?#]+\/([^?#]+)/i);return t?String(t[1]||""):""}function Ag(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^learn(?:\/([^/?#]+))?/i),n=String(t?.[1]||"").toLowerCase();return n===Vt?Vt:n===Tn?Tn:Ds}function Cg(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^learn\/lesson\/([^/?#]+)/i);return t?String(t[1]||""):""}function Lg(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^learn\/legacy\/([^/?#]+)/i);return t?String(t[1]||""):""}function Ml(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^jlpt-lesson\/([^/?#]+)/i);return t?String(t[1]||"").toUpperCase():""}function Q0(){return qn().filter(e=>Ps(e.id)).length}function Ps(e){const t=r.progress?.achievements?.[e];return!!(t&&(t===!0||typeof t=="string"||t.unlockedAt||t.rewardXp!==void 0))}function i(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function g(e){return i(e)}})();
