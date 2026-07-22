(function(){const R=document.createElement("link").relList;if(R&&R.supports&&R.supports("modulepreload"))return;for(const q of document.querySelectorAll('link[rel="modulepreload"]'))te(q);new MutationObserver(q=>{for(const re of q)if(re.type==="childList")for(const K of re.addedNodes)K.tagName==="LINK"&&K.rel==="modulepreload"&&te(K)}).observe(document,{childList:!0,subtree:!0});function G(q){const re={};return q.integrity&&(re.integrity=q.integrity),q.referrerPolicy&&(re.referrerPolicy=q.referrerPolicy),q.crossOrigin==="use-credentials"?re.credentials="include":q.crossOrigin==="anonymous"?re.credentials="omit":re.credentials="same-origin",re}function te(q){if(q.ep)return;q.ep=!0;const re=G(q);fetch(q.href,re)}})();const vS="modulepreload",bS=function(M,R){return new URL(M,R).href},Bp={},Fp=function(R,G,te){let q=Promise.resolve();if(G&&G.length>0){const K=document.getElementsByTagName("link"),se=document.querySelector("meta[property=csp-nonce]"),$e=(se==null?void 0:se.nonce)||(se==null?void 0:se.getAttribute("nonce"));q=Promise.allSettled(G.map(le=>{if(le=bS(le,te),le in Bp)return;Bp[le]=!0;const Me=le.endsWith(".css"),Ts=Me?'[rel="stylesheet"]':"";if(!!te)for(let Jt=K.length-1;Jt>=0;Jt--){const Ut=K[Jt];if(Ut.href===le&&(!Me||Ut.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${le}"]${Ts}`))return;const vt=document.createElement("link");if(vt.rel=Me?"stylesheet":vS,Me||(vt.as="script"),vt.crossOrigin="",vt.href=le,$e&&vt.setAttribute("nonce",$e),document.head.appendChild(vt),Me)return new Promise((Jt,Ut)=>{vt.addEventListener("load",Jt),vt.addEventListener("error",()=>Ut(new Error(`Unable to preload CSS for ${le}`)))})}))}function re(K){const se=new Event("vite:preloadError",{cancelable:!0});if(se.payload=K,window.dispatchEvent(se),!se.defaultPrevented)throw K}return q.then(K=>{for(const se of K||[])se.status==="rejected"&&re(se.reason);return R().catch(re)})},Up=["home","learn","review","dictionary","about","kanji","stats","achievements","eva-room","jlpt-lesson","textbooks"];function hl(M){var re;let R=M.replace(/^#/,"");try{R=decodeURIComponent(R)}catch(K){R=""}const G=R.split("/").filter(Boolean),te=((re=G[0])==null?void 0:re.toLowerCase())||"home";return{route:te==="jlpt"&&/^n[1-5]$/i.test(G[1]||"")?"textbooks":Up.includes(te)?te:"home",raw:R,segments:G}}function kS(){let M=0,R=null;return{begin(G){R==null||R.abort(),R=new AbortController;const te=++M,q=R;return{route:G,token:te,signal:q.signal,isCurrent:()=>M===te&&!q.signal.aborted}},abort(){R==null||R.abort()}}}function $S(M){const R=()=>M(hl(window.location.hash));return window.addEventListener("hashchange",R),()=>window.removeEventListener("hashchange",R)}const Ir=[5,60,12*60,24*60,2*24*60,4*24*60],fl={again:"Again",forgot:"Again",hard:"Hard",good:"Good",remember:"Good",easy:"Easy"};function ra(M){var $e,le,Me;const R=M&&typeof M=="object"?M:{},G=jS(($e=R.state)!=null?$e:R.stage),te=SS((le=R.dueAt)!=null?le:R.nextReview),q=Sn((Me=R.reviewCount)!=null?Me:R.reviews,0),re=Sn(R.correct,0),K=Sn(R.wrong,0),se={...R,state:G,dueAt:te,reviewCount:q,intervalDays:Sn(R.intervalDays,0),easeFactor:Sn(R.easeFactor,2.5),srsStep:Sn(R.srsStep,G==="New"?-1:0),lapses:Sn(R.lapses,0),correct:re,wrong:K,successRate:Sn(R.successRate,re+K?Math.round(re/(re+K)*100):0),history:Array.isArray(R.history)?R.history.slice(-120):[]};return delete se.nextReview,delete se.reviews,delete se.stage,delete se.lastReview,se}function Ae(M,R,G=R,te=new Date){const q=ra(M),re=yS(q,R),K={...q,history:[...q.history]};let se=q.srsStep,$e=q.easeFactor;re==="again"?(se=0,$e=Math.max(1.3,$e-.2),K.state="Learning",K.wrong+=1,q.state!=="New"&&(K.lapses+=1)):re==="hard"?(se=Math.max(1,se),$e=Math.max(1.3,$e-.15),K.correct+=1):re==="easy"?(se=se<0?2:se+2,$e=Math.min(3.2,$e+.15),K.correct+=1):(se=se<0?0:se+1,K.correct+=1);const le=NS(se)/1440;return re!=="again"&&(K.state=le<1?"Learning":"Review"),K.correct>=8&&le>=30&&(K.state="Mastered"),K.srsStep=se,K.easeFactor=zp($e,2),K.intervalDays=zp(le,6),K.dueAt=new Date(te.getTime()+le*864e5).toISOString(),K.reviewCount+=1,K.successRate=Math.round(K.correct/Math.max(K.correct+K.wrong,1)*100),K.lastReviewedAt=te.toISOString(),K.lastRating=fl[G]||fl[re],K.lastDecision=fl[re],K.history=[...K.history,{at:te.toISOString(),rating:K.lastRating,decision:K.lastDecision,from:q.state,to:K.state,intervalDays:le,srsStep:se}].slice(-120),K}function yS(M,R){return R==="again"||R==="forgot"?"again":R!=="remember"?R:M.state==="New"?"good":M.state==="Learning"?M.successRate>=70||M.correct>=2?"good":"hard":M.successRate>=88&&M.correct>=5&&M.lapses<=1?"easy":M.successRate<70||M.lapses>Math.max(1,Math.floor(M.correct/3))?"hard":"good"}function jS(M){const R=String(M||"new").toLowerCase();return R.includes("master")?"Mastered":R.includes("learn")?"Learning":R.includes("review")?"Review":"New"}function SS(M){return typeof M!="string"||!Number.isFinite(Date.parse(M))?null:new Date(M).toISOString()}function Sn(M,R){const G=Number(M);return Number.isFinite(G)&&G>=0?G:R}function zp(M,R){const G=10**R;return Math.round(M*G)/G}function NS(M){return M<Ir.length?Ir[Math.max(0,M)]:Ir[Ir.length-1]*2**(M-(Ir.length-1))}const Gp="flashKanji.progress.v2",CS="flashKanji.progress.v1";function AS(M=localStorage){const R=M.getItem(Gp)||M.getItem(CS);if(!R)return null;try{const G=JSON.parse(R);if(!G||typeof G!="object")return null;const te=G;return te.progress&&typeof te.progress=="object"?te.progress:te}catch(G){return console.warn("Flash Kanji ignored damaged LocalStorage progress.",G),null}}function LS(M){return!M||typeof M!="object"?{}:Object.fromEntries(Object.entries(M).map(([R,G])=>[R,ra(G)]))}function IS(M,R=localStorage){try{return R.setItem(Gp,JSON.stringify(M)),!0}catch(G){return console.warn("Flash Kanji could not save LocalStorage progress.",G),!1}}const TS=/[\/／,、;；\s]+/u,RS=/[\u30a1-\u30f6]/g,xS=/[()[\]{}.\-‐-―]/gu;function _S(M){return String(M||"").normalize("NFKC").replace(RS,R=>String.fromCharCode(R.charCodeAt(0)-96))}function Hp(M){return(Array.isArray(M)?M.join(" / "):String(M||"")).split(TS).map(G=>_S(G).replace(xS,"").trim()).filter(Boolean)}function MS(M){if(!M)return[];const R=[...Jp("onyomi","On",M.onyomi),...Jp("kunyomi","Kun",M.kunyomi)],G=new Set,te=R.filter(K=>{const se=K.kana;return!se||G.has(se)?!1:(G.add(se),!0)});if(te.length)return te;const q=Hp(M.hiragana)[0];if(q)return[{kind:"hiragana",kana:q,label:"Kana"}];const re=String(M.kanji||"").trim();return re?[{kind:"kanji",kana:re,label:"Kanji"}]:[]}function PS(M,R=-1,G=""){const te=G&&G!=="cycle"?M.filter(re=>re.kind===G):M;if(!te.length)return{item:null,cursor:-1};const q=(Number(R)+1)%te.length;return{item:te[q],cursor:q}}function ES(M,R={}){var se,$e;const G=String(M||"").trim(),te=typeof window!="undefined"?window:void 0,q=R.synth||(te==null?void 0:te.speechSynthesis),re=R.Utterance||(te==null?void 0:te.SpeechSynthesisUtterance);if(!G||!q||!re)return!1;q.cancel();const K=new re(G);K.lang="ja-JP",K.rate=(se=R.rate)!=null?se:.92,K.voice=DS(q),K.onend=()=>{var le;return(le=R.onEnd)==null?void 0:le.call(R)},K.onerror=le=>{var Me;return(Me=R.onError)==null?void 0:Me.call(R,le)};try{return q.speak(K),!0}catch(le){return($e=R.onError)==null||$e.call(R,le),!1}}function Jp(M,R,G){return Hp(G).map(te=>({kind:M,kana:te,label:R}))}function DS(M){const R=typeof M.getVoices=="function"?M.getVoices():[];return R.find(G=>/^ja[-_]?JP$/iu.test(G.lang))||R.find(G=>/^ja/iu.test(G.lang))||null}(()=>{const M="flashKanji.pwaInstallPrompt.v2",R="flashKanji.pwaInstallPrompt.v1",G="flashKanji.notificationPrompt.v1",te="flashkanji_customization",q="flashkanji_eva_state_v2",K="local-1784703427632",$e=`flashKanji.hiddenMascotSpeeches:${K}`,le="moonfarm",Me="flashKanji.appBuild.v1",Ts="flashKanji.pwaCacheReset.v1",Tr="flashKanji.bootRecovery.v1",vt=109492033,Jt={instagram:"https://www.instagram.com/fallinginto_silence?igsh=MWpzYW1ncTB1a3FuNw==",youtube:"https://youtube.com/@fallingintosilence?si=cJ97__ndJ1aaaMae"},Ut="aleksey.lebedev606@gmail.com",Qp="Flash Kanji bug report",Rr="flashKanji.forcePwaCacheReset.v1",X={lessons:"data/lessons.json",dialogues:"data/dialogues.json",i18n:"data/i18n.json",rewards:"data/rewards.json",kanjiMeta:"data/kanji/meta.json",kanjiHints:"data/kanji/hints.json",kanjiTranslations:"data/kanji/translations.json",kanjiStrokes:"data/kanji/stroke-order-kanjivg.json",kanjiPageSources:"data/sources/kanji-page-sources.json",lessonTranslations:"data/lessons/translations.json",vocabulary:"data/vocabulary/index.json",sentences:"data/sentences/index.json",achievements:"data/achievements/index.json",jlptCatalog:"data/jlpt/index.json",jlptLessons:"data/jlpt-lessons.json",jlptPracticeLessons:"data/jlpt-practice-lessons.json",n5Meta:"data/jlpt/n5/meta.json",n5Lessons:"data/jlpt/n5/lessons.json",n5Kanji:"data/jlpt/n5/kanji.json",n5Exercises:"data/jlpt/n5/exercises.json",n5FinalTest:"data/jlpt/n5/final-test.json",n5Reading:"data/jlpt/n5/reading.json",n4Meta:"data/jlpt/n4/meta.json",n4Lessons:"data/jlpt/n4/lessons.json",n4Kanji:"data/jlpt/n4/kanji.json",n4Grammar:"data/jlpt/n4/grammar.json",n4Exercises:"data/jlpt/n4/exercises.json",n4Reading:"data/jlpt/n4/reading.json",n4Listening:"data/jlpt/n4/listening.json",n4FinalTest:"data/jlpt/n4/final-test.json",n3Meta:"data/jlpt/n3/meta.json",n3Lessons:"data/jlpt/n3/lessons.json",n3Kanji:"data/jlpt/n3/kanji.json",n3Grammar:"data/jlpt/n3/grammar.json",n3Exercises:"data/jlpt/n3/exercises.json",n3Reading:"data/jlpt/n3/reading.json",n3Listening:"data/jlpt/n3/listening.json",n3FinalTest:"data/jlpt/n3/final-test.json",n2Meta:"data/jlpt/n2/meta.json",n2Lessons:"data/jlpt/n2/lessons.json",n2Kanji:"data/jlpt/n2/kanji.json",n2Grammar:"data/jlpt/n2/grammar.json",n2Exercises:"data/jlpt/n2/exercises.json",n2Reading:"data/jlpt/n2/reading.json",n2Listening:"data/jlpt/n2/listening.json",n2FinalTest:"data/jlpt/n2/final-test.json",n1Meta:"data/jlpt/n1/meta.json",n1Reading:"data/jlpt/n1/reading.json",jlptReadingMarkdown:"data/jlpt/reading-texts_N5_N1.md",jlptReadingTranslations:"data/jlpt/reading-texts_N5_N1.translations.json",monetization:"data/monetization/catalog.json",customizationShop:"data/customization-shop.json",evaBackgrounds:"data/eva-backgrounds.json",evaSprites:"data/eva-sprites.json",evaRoomDialogues:"data/eva-room-dialogues.json",evaAutonomyLines:"data/eva-autonomy-lines.json",evaExpandedDialogues:"data/eva-expanded-dialogues.json",evaFisPersonality:"data/eva-fis-personality.json",evaPresence:"data/eva-presence.json"},Xp={forgot:"Forgot",remember:"Remember",again:"Again",hard:"Hard",good:"Good",easy:"Easy"},Wp={New:"New",Learning:"Learning",Review:"Review",Mastered:"Mastered",new:"New",learning:"Learning",review:"Review",mastered:"Mastered"},Oe=["N5","N4","N3","N2","N1"],we=new Set,qp={nihon:"Japan",kyou:"today",getsuyoubi:"Monday",ichigatsu:"January",nihonjin:"Japanese person",hitori:"one person",honya:"bookstore",ichinichi:"one day",ichiban:"number one, the best",nigatsu:"February",futari:"two people",jikan:"time, hour",nanji:"what time",kotoshi:"this year",rainen:"next year",kaimono:"shopping",kounyuu:"purchase",baiten:"kiosk, shop stall",hatsubai:"release, sale",shiyou:"use",tsukaikata:"how to use",soushin:"message sending",housou:"broadcast",sekai:"world",sedai:"generation",gyoukai:"industry",toukou:"post, publication",toushi:"investment",jouhou:"information",houkoku:"report",kakunin:"confirmation, check",shounin:"approval",kaigi:"meeting",giron:"discussion",kengen:"access rights, permission",chosakuken:"copyright",eikyou:"influence",hibiku:"to sound, to resonate"},wl={xp:12,coins:2},vl="flashKanjiOnboardingCompleted.v3",bl="flashKanjiOnboardingCompleted",kl="flashKanjiOnboardingAudience.v1",Vp=850,$l=450,Yp=420,Zp=[...Up],Rs=72,eg=96,yl=1,jl="N5",xs="map",Gt="lesson",Nn="legacy",Se="intro-kanji",Wn="review-due",qn="n5-checkpoint",tg=[Se,"n5-lesson-1","n5-lesson-2","n5-lesson-3","n5-lesson-4","n5-lesson-5","n5-lesson-6","n5-lesson-7","n5-lesson-8","n5-lesson-9","n5-lesson-10",qn],ng={"n5-lesson-1":"data/textbooks/n5/lesson-1.json"},sg=new Set(["lesson-1","lesson-2","bulk-n5-01"]),rg=7e3,Sl=8e3,ig=new Set(["dictionary","kanji","stats","jlpt-lesson","textbooks"]),i={route:ul(),lessons:[],cards:[],i18n:null,dialogues:null,rewards:null,kanjiMeta:{},kanjiHints:{},kanjiTranslations:{},kanjiStrokes:{},kanjiPageSources:{},lessonTranslations:{},vocabulary:[],sentenceExercises:[],achievements:[],achievementCategories:[],jlptCatalog:{version:1,generatedAt:null,items:[]},jlptLessons:[],jlptPracticeLessons:[],n5Meta:null,n5Textbook:null,n5KanjiCatalog:[],n5Exercises:null,n5FinalTest:null,n4Meta:null,n4Textbook:null,n4KanjiCatalog:[],n4Grammar:[],n4Exercises:null,n4Reading:[],n4Listening:[],n4FinalTest:null,n5Reading:[],n3Meta:null,n3Textbook:null,n3KanjiCatalog:[],n3Grammar:[],n3Exercises:null,n3Reading:[],n3Listening:[],n3FinalTest:null,n2Meta:null,n2Textbook:null,n2KanjiCatalog:[],n2Grammar:[],n2Exercises:null,n2Reading:[],n2Listening:[],n2FinalTest:null,n1Meta:null,n1Reading:[],jlptReadingMarkdown:"",jlptReadingByLevel:{N5:[],N4:[],N3:[],N2:[],N1:[]},jlptReadingTranslations:{},monetization:null,customizationCatalog:{categories:[],items:[]},customization:null,evaBackgrounds:[],evaSprites:{},evaRoomDialogues:[],evaRoomLines:[],evaAutonomyLines:[],evaFisPersonality:null,evaPresence:null,evaRuntime:null,evaRoomShopOpen:!1,progress:null,activeLessonId:null,activeJlptLesson:ml()||null,activeTextbookLevel:pl()||null,activeTextbookSubroute:gl()||null,activeLearnView:Dp(),activeLearnNodeId:Op()||null,activeLearnLegacyLessonId:Kp()||null,learningPathLessonPayloads:{},activeCardId:null,activeExerciseReviewId:null,activeExerciseReviewLevel:"",activeExerciseReviewSource:"",activeExerciseReviewSelection:[],activeExerciseReviewChoice:"",activeExerciseReviewTranslationOpen:!1,reviewQueueLastKind:"",reviewSession:null,kanjiPageId:dl(),revealed:!1,detailCardId:null,rewardModal:null,rewardQueue:[],finalTestModal:null,finalTestBusy:!1,contactModal:!1,pwaInstallHelpVisible:!1,charts:[],filters:{query:"",jlpt:"all",strokes:"all",radical:"all",favorites:"all"},dictionaryVisibleCount:Rs,shopFilters:{category:"all",view:"all",sort:"featured"},sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[]},readingExercises:{},reviewExerciseResults:{},readingCheck:{cardId:null,value:"",status:null,message:""},writingStep:0,activeLearnJlpt:"all",navMenu:null,pendingFocus:null,pwaInstallPrompt:Qi(),notificationPrompt:Cr(),notificationPromptVisible:!1,deferredDataLoaded:!1,deferredDataLoading:!1};ul()==="textbooks"&&zt(Pp(pl(),gl()));const ag=kS();let xr=null,bt=null,Nl="",Cl=new Map,_s=0,Al=0,Vn=0,Cn=0,ia=!1,An=0,aa=!1,Ln=0,_r=!1,Mr=!1,Pr=null,Ht=null,Ll=0,oa=0,Yn=0,Ms=0,Ps=null,he=null,Ge=null,Le=null,kt=-1,ct=!1,ye="step",$t=null,Il=null,og=null,lg=null,Er=null,Es=null;const Dr=new Map;let la=0,ca=0,ua=Math.floor(Date.now()/6e4),Tl=0,Or="",da=[];const pa=new Map,In=new Map,ga=Date.now();typeof history!="undefined"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const W={cardId:null,strokes:[],currentStroke:[],drawing:!1,activePointerId:null,completed:!1,demoAnimationId:0},Ie=(e,t=document)=>t.querySelector(e),ma=(e,t=document)=>Array.from(t.querySelectorAll(e)),Qt=Ie("#app"),Rl=Ie("#progressImport");document.addEventListener("click",zm),document.addEventListener("pointerdown",Jm),document.addEventListener("input",hc),document.addEventListener("change",hc),document.addEventListener("keydown",Qm),window.flashKanjiFarmMoon=(e=5e3)=>wc(e),window.startFlashKanjiOnboarding=Ka,Rl.addEventListener("change",wj),window.addEventListener("beforeinstallprompt",Gj),window.addEventListener("appinstalled",il),window.addEventListener("scroll",Fa,{passive:!0}),window.addEventListener("resize",Fa),window.addEventListener("eva:event",e=>{var t;(t=e.detail)!=null&&t.handledByFlashKanji||zc(e.detail||{})}),document.addEventListener("visibilitychange",()=>{document.hidden||Wi("usage"),!document.hidden&&i.route==="eva-room"&&Us("return")&&(C(),I()),document.hidden&&Aa()}),window.addEventListener("pagehide",Aa),window.addEventListener("beforeunload",Aa),$S(()=>{const e=ul(),t=dl(),n=e==="textbooks"?pl():null,s=e==="textbooks"?gl():null,r=e==="jlpt-lesson"?ml():null,a=e==="learn"?Dp():xs,l=e==="learn"?Op():null,c=e==="learn"?Kp():null;if(e!==i.route||e==="kanji"&&t!==i.kanjiPageId||e==="textbooks"&&n!==i.activeTextbookLevel||e==="textbooks"&&s!==i.activeTextbookSubroute||e==="jlpt-lesson"&&r!==i.activeJlptLesson||e==="learn"&&a!==i.activeLearnView||e==="learn"&&l!==i.activeLearnNodeId||e==="learn"&&c!==i.activeLearnLegacyLessonId){const u=i.route;i.route=e,u!==e&&(u==="review"||e==="review")&&(i.reviewSession=null),i.kanjiPageId=e==="kanji"?t:null,i.activeTextbookLevel=e==="textbooks"?n:null,i.activeTextbookSubroute=e==="textbooks"?s:null,i.activeJlptLesson=e==="jlpt-lesson"?r:i.activeJlptLesson,i.activeLearnView=e==="learn"?a:xs,i.activeLearnNodeId=e==="learn"?l:null,i.activeLearnLegacyLessonId=e==="learn"?c:null,i.detailCardId=null,i.revealed=!1,i.navMenu=null,i.pendingFocus=null,e!=="eva-room"&&(i.evaRoomShopOpen=!1),Lt(),Vr(),Qe(),mg(e)&&_l(),e==="eva-room"&&Ce("room_opened")}}),cg();async function cg(){if(!await wg()&&!await hg()){xl(!0),Qt.innerHTML.trim()?Qt.setAttribute("aria-busy","true"):Qt.innerHTML=Oj(),i.progress=dm(),Cs(),Vo(),Pj(),Yo(),Ft();try{const[e,t,n,s,r,a,l]=await Promise.all([Ml({initialOnly:!0}),ut(X.i18n),ut(X.dialogues),ut(X.rewards,dg),ut(X.achievements,()=>({achievements:[],categories:[]})),ut(X.jlptCatalog,()=>({version:1,generatedAt:null,items:[]})),ut(X.jlptLessons,()=>({items:[]}))]),c=zl(r,s.achievements||[]);i.lessons=e.lessons,i.cards=e.cards,i.i18n=t,i.dialogues=n,i.rewards=s,i.achievements=c.items,i.achievementCategories=c.categories,i.jlptCatalog=Rg(a),i.jlptLessons=Tg(l),i.rewards.achievements=i.achievements,Hr(),tf(),Kr(),hm(),Ft(),Wj();const u=Zm(i.progress);z$(),ef(u),G$(),V(),C(),I(),gg(),_l(),Jj(),Oa(),ch(),Yf(),Tp(),ol();try{sessionStorage.removeItem(Tr)}catch(p){console.warn("Could not clear boot recovery marker after successful startup.",p)}}catch(e){console.error(e),await zj(e)||(Qt.innerHTML=Kj(e))}finally{xl(!1)}}}function xl(e){const t=document.querySelector(".app-shell");t&&(e?t.setAttribute("data-booting","true"):t.removeAttribute("data-booting")),Qt&&Qt.setAttribute("aria-busy",e?"true":"false")}function ug(e,t){return document.getElementById(t)?Promise.resolve():new Promise((n,s)=>{const r=document.createElement("script");r.id=t,r.src=e,r.defer=!0,r.onload=()=>n(),r.onerror=()=>s(new Error(`Cannot load ${e}`)),document.head.appendChild(r)})}function dg(){return{version:1,dailyGoals:[10,20,50],levelCurve:{baseXp:100,growth:1.35},lessonUnlocks:{"lesson-1":1,"lesson-2":2,"lesson-3":3,"lesson-4":5,"lesson-5":8,"bulk-n5-01":3,"bulk-n5-02":4,"bulk-n5-03":4,"bulk-n5-04":5,"bulk-n4-01":5,"bulk-n4-02":6,"bulk-n4-03":6,"bulk-n4-04":7,"bulk-n4-05":7,"bulk-n4-06":8,"bulk-n4-07":8,"bulk-n4-08":9,"bulk-n3-01":9,"bulk-n3-02":10,"bulk-n3-03":10,"bulk-n3-04":11,"bulk-n3-05":11,"bulk-n3-06":12,"bulk-n3-07":12,"bulk-n3-08":13,"bulk-n3-09":13,"bulk-n3-10":14,"bulk-n3-11":14,"bulk-n3-12":15,"bulk-n3-13":15,"bulk-n3-14":16,"bulk-n3-15":16,"bulk-n3-16":17,"bulk-n3-17":17,"bulk-n3-18":18,"bulk-n3-19":18,"bulk-n2-01":19,"bulk-n2-02":19,"bulk-n2-03":20,"bulk-n2-04":20,"bulk-n2-05":21,"bulk-n2-06":21,"bulk-n2-07":22,"bulk-n2-08":22,"bulk-n2-09":23,"bulk-n2-10":23,"bulk-n2-11":24,"bulk-n2-12":24,"bulk-n2-13":25,"bulk-n2-14":25,"bulk-n2-15":26,"bulk-n2-16":26,"bulk-n2-17":27,"bulk-n2-18":27,"bulk-n2-19":28,"bulk-n1-01":28,"bulk-n1-02":29,"bulk-n1-03":29,"bulk-n1-04":30,"bulk-n1-05":30,"bulk-n1-06":31,"bulk-n1-07":31,"bulk-n1-08":32,"bulk-n1-09":32,"bulk-n1-10":33,"bulk-n1-11":33},rewards:{correctXp:10,lessonCompleteXp:50,comboXp:15,dailyBonusXp:20,sentencePracticeXp:12,correctCoins:1,lessonCompleteCoins:8,achievementCoins:20,dailyBonusCoins:5,sentencePracticeCoins:2,streakCoins:10},shop:[{id:"frame_moon",type:"profileFrame",name:{ru:"Лунная рамка",en:"Moon frame"},cost:80},{id:"theme_gold",type:"theme",name:{ru:"Золотой акцент",en:"Gold accent"},cost:120},{id:"background_midnight",type:"background",name:{ru:"Полуночный фон",en:"Midnight background"},cost:150}],achievements:[{id:"first_lesson",name:{ru:"Первый урок",en:"First lesson"},description:{ru:"Завершить первый урок.",en:"Complete the first lesson."},kind:"lessonComplete",target:1,xp:50,coins:20},{id:"hundred_correct",name:{ru:"100 правильных ответов",en:"100 correct answers"},description:{ru:"Достичь 100 правильных ответов.",en:"Reach 100 correct answers."},kind:"correct",target:100,xp:120,coins:40},{id:"ten_kanji_learned",name:{ru:"10 изученных кандзи",en:"10 kanji learned"},description:{ru:"Начать изучать 10 кандзи.",en:"Start learning 10 kanji."},kind:"learned",target:10,xp:80,coins:30},{id:"seven_day_streak",name:{ru:"7-дневная серия",en:"7-day streak"},description:{ru:"Поддерживать серию 7 дней.",en:"Keep a streak for 7 days."},kind:"streak",target:7,xp:100,coins:35},{id:"jlpt_n5_done",name:{ru:"JLPT N5 пройден",en:"JLPT N5 complete"},description:{ru:"Освоить все карточки N5.",en:"Master every N5 card."},kind:"jlpt",jlpt:"N5",target:1,xp:180,coins:60},{id:"hundred_reviews",name:{ru:"100 повторений",en:"100 reviews"},description:{ru:"Выполнить 100 повторений.",en:"Complete 100 reviews."},kind:"reviews",target:100,xp:150,coins:55}]}}function pg(){return window.Chart?Promise.resolve():(Il||(Il=ug("vendor/chart.umd.min.js","flash-kanji-chartjs")),Il)}function gg(){window.setTimeout(()=>{og||(og=Fp(()=>import("./soundManager-RDcKDE43.js"),[],import.meta.url).then(()=>{Cs(),yj()}).catch(e=>console.warn("UX sound module failed to load.",e))),lg||(lg=Fp(()=>import("./cyberHudEffect-qbror6FT.js"),[],import.meta.url).catch(e=>console.warn("Cyber HUD module failed to load.",e)))},450)}function mg(e=i.route){return ig.has(e)}function _l(){const e=()=>{fg().catch(t=>console.warn("Deferred app data failed to load.",t))};window.setTimeout(()=>{"requestIdleCallback"in window?window.requestIdleCallback(e,{timeout:1800}):e()},rg)}async function fg({renderAfter:e=!0}={}){if(!i.deferredDataLoaded)return Er||(i.deferredDataLoading=!0,Er=(async()=>{const[t,n,s]=await Promise.all([Ml(),bg([["kanjiMeta",X.kanjiMeta],["kanjiHints",X.kanjiHints],["kanjiTranslations",X.kanjiTranslations],["kanjiStrokes",X.kanjiStrokes],["kanjiPageSources",X.kanjiPageSources],["lessonTranslations",X.lessonTranslations],["vocabulary",X.vocabulary],["sentences",X.sentences],["jlptPracticeLessons",X.jlptPracticeLessons],["n5Meta",X.n5Meta],["n5Lessons",X.n5Lessons],["n5Kanji",X.n5Kanji],["n5Exercises",X.n5Exercises],["n5FinalTest",X.n5FinalTest],["n4Meta",X.n4Meta],["n4Lessons",X.n4Lessons],["n4Kanji",X.n4Kanji],["n4Grammar",X.n4Grammar],["n4Exercises",X.n4Exercises],["n4Reading",X.n4Reading],["n4Listening",X.n4Listening],["n4FinalTest",X.n4FinalTest],["n3Meta",X.n3Meta],["n3Lessons",X.n3Lessons],["n3Kanji",X.n3Kanji],["n3Grammar",X.n3Grammar],["n3Exercises",X.n3Exercises],["n3Reading",X.n3Reading],["n3Listening",X.n3Listening],["n3FinalTest",X.n3FinalTest],["n2Meta",X.n2Meta],["n2Lessons",X.n2Lessons],["n2Kanji",X.n2Kanji],["n2Grammar",X.n2Grammar],["n2Exercises",X.n2Exercises],["n2Reading",X.n2Reading],["n2Listening",X.n2Listening],["n2FinalTest",X.n2FinalTest],["n1Meta",X.n1Meta],["n1Reading",X.n1Reading],["jlptReadingTranslations",X.jlptReadingTranslations],["n5Reading",X.n5Reading],["monetization",X.monetization]]),kg(X.jlptReadingMarkdown)]),{kanjiMeta:r,kanjiHints:a,kanjiTranslations:l,kanjiStrokes:c,kanjiPageSources:u,lessonTranslations:p,vocabulary:d,sentences:g,jlptPracticeLessons:f,n5Meta:v,n5Lessons:b,n5Kanji:$,n5Exercises:S,n5FinalTest:j,n4Meta:k,n4Lessons:x,n4Kanji:T,n4Grammar:B,n4Exercises:L,n4Reading:y,n4Listening:N,n4FinalTest:H,n3Meta:me,n3Lessons:fe,n3Kanji:Qn,n3Grammar:Xn,n3Exercises:ie,n3Reading:jn,n3Listening:Yi,n3FinalTest:Zi,n2Meta:ea,n2Lessons:ta,n2Kanji:na,n2Grammar:sa,n2Exercises:cS,n2Reading:uS,n2Listening:dS,n2FinalTest:pS,n1Meta:gS,n1Reading:mS,jlptReadingTranslations:fS,n5Reading:hS,monetization:wS}=n;i.lessons=t.lessons,i.cards=t.cards,i.jlptPracticeLessons=xg(f),i.jlptReadingMarkdown=s||"",i.jlptReadingByLevel=$g(s||""),i.n5Meta=_g(v),i.n5Textbook=Dl(b),i.n5KanjiCatalog=Mg($),Pg(),i.n5Exercises=Eg(S),i.n5FinalTest=Dg(j),i.n5Reading=um(hS),i.n4Meta=Og(k),i.n4Textbook=Kg(x),i.n4KanjiCatalog=Bg(T),i.n4Grammar=zg(B),i.n4Exercises=Jg(L),i.n4Reading=Ol(y),i.n4Listening=Ol(N),i.n4FinalTest=Ug(H),Fg(),i.n3Meta=Gg(me),i.n3Textbook=Hg(fe),i.n3KanjiCatalog=Qg(Qn),i.n3Grammar=Wg(Xn),i.n3Exercises=qg(ie),i.n3Reading=Kl(jn),i.n3Listening=Kl(Yi),i.n3FinalTest=Vg(Zi),Xg(),i.n2Meta=Yg(ea),i.n2Textbook=Zg(ta),i.n2KanjiCatalog=em(na),i.n2Grammar=nm(sa),i.n2Exercises=sm(cS),i.n2Reading=Bl(uS),i.n2Listening=Bl(dS),i.n2FinalTest=rm(pS),tm(),i.n1Meta=im(gS),i.n1Reading=om(mS,"N1"),i.kanjiMeta=r.items||{},i.kanjiHints=a.items||{},i.kanjiTranslations=l.items||{},i.kanjiStrokes=Cg(c),i.kanjiPageSources=u.items||{},i.lessonTranslations=p.items||{},i.vocabulary=d.items||[],i.sentenceExercises=g.items||[],i.jlptReadingTranslations=Sg(fS),i.monetization=wS,i.deferredDataLoaded=!0,i.deferredDataLoading=!1,i.progress&&(Hr(),V(),C()),e&&I()})().finally(()=>{i.deferredDataLoading=!1}),Er)}async function hg(){try{const e=localStorage.getItem(Me);if(localStorage.setItem(Me,K),!e||e===K)return!1;if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistrations();await Promise.all(t.map(async n=>{await n.update().catch(()=>null)}))}return!1}catch(e){return console.warn("App cache version check failed.",e),!1}}async function wg(){try{const e=localStorage.getItem(Rr),t=localStorage.getItem("flashKanji.lastForcedBuild");return e==="done"&&t===K||(localStorage.setItem(Rr,"done"),localStorage.setItem("flashKanji.lastForcedBuild",K)),!1}catch(e){return console.warn("Force cache reset failed.",e),!1}}async function Ml({initialOnly:e=!1}={}){const t=await ut(X.lessons),n=Array.isArray(t==null?void 0:t.lessons)?t.lessons:[],s=e?vg(n):n,r=await Pl(s,async u=>{try{return{manifestLesson:u,payload:await ut(u.file)}}catch(p){return console.warn(`Skipping lesson data: ${(u==null?void 0:u.file)||"unknown lesson file"}`,p),null}},e?s.length:3),a=new Map(r.filter(Boolean).map(u=>[u.manifestLesson.id,u])),l=n.map(u=>{const p=a.get(u.id);if(!p)return{...u,file:u.file,items:[]};const{payload:d}=p;return{...u,...d.lesson,file:u.file,items:Array.isArray(d.items)?d.items.map(g=>Ng(g,d.lesson.id)):[]}}),c=l.flatMap(u=>u.items.map(p=>({...p,lessonTitle:u.title,lessonOrder:u.order})));return{lessons:l,cards:c}}function vg(e){return e.filter((t,n)=>sg.has(t.id)||n<2)}async function bg(e,t=3){const n=await Pl(e,async([s,r])=>[s,await ut(r)],t);return Object.fromEntries(n)}async function Pl(e,t,n=6){const s=[],r=Math.max(1,Number(n)||1);for(let a=0;a<e.length;a+=r){const l=e.slice(a,a+r);s.push(...await Promise.all(l.map(t))),a+r<e.length&&await new Promise(c=>window.setTimeout(c,0))}return s}async function ut(e,t=null){const n=El(e);let s=null;for(const r of n)try{const a=typeof AbortController!="undefined"?new AbortController:null,l=a?window.setTimeout(()=>a.abort(),Sl):0;try{const c=await fetch(r,{cache:"no-store",signal:a==null?void 0:a.signal});if(!c.ok){s=new Error(`Cannot load ${r}`);continue}const u=await c.text();try{return JSON.parse(u)}catch(p){s=p,console.warn(`Invalid JSON from ${r}. Trying fallback paths.`,p)}}finally{l&&window.clearTimeout(l)}}catch(a){s=a}return console.warn(`Falling back to empty data for ${e}.`,s),typeof t=="function"?t(s):t!==null?t:{version:1,languages:["ru","en"],ui:{},items:[],lessons:[],lesson:{},achievements:[],categories:[]}}async function kg(e,t=""){const n=El(e);let s=null;for(const r of n)try{const a=typeof AbortController!="undefined"?new AbortController:null,l=a?window.setTimeout(()=>a.abort(),Sl):0;try{const c=await fetch(r,{cache:"no-store",signal:a==null?void 0:a.signal});if(!c.ok){s=new Error(`Cannot load ${r}`);continue}return await c.text()}finally{l&&window.clearTimeout(l)}}catch(a){s=a}return console.warn(`Falling back to empty text for ${e}.`,s),typeof t=="function"?t(s):t}function $g(e){const t=Object.fromEntries(Oe.map(d=>[d,[]])),n=String(e||"").split(/\r?\n/);let s=null,r=null,a="idle",l=[],c=[];const u=()=>{!r||!s||(r.text=yg(l.join(`
`)),r.questions=c.map(d=>d.trim()).filter(Boolean),t[s].push(r),r=null,l=[],c=[],a="idle")},p=d=>{const g=String(d||"").trim().toLowerCase();return g==="жанр"||g==="genre"?"genre":g==="опора"||g==="source"||g==="basis"?"source":g==="цель"||g==="goal"?"goal":g};for(const d of n){const g=String(d!=null?d:""),f=g.trim(),v=f.match(/^#\s*JLPT\s*(N[1-5])\b/i);if(v){u(),s=v[1].toUpperCase();continue}const b=f.match(/^##\s*(N[1-5])\s*(.+)$/i);if(b){u(),s=b[1].toUpperCase(),r={id:`${s.toLowerCase()}-reading-${String((t[s]||[]).length+1).padStart(2,"0")}`,level:s,title:jg(b[2]),genre:"",source:"",goal:"",text:"",questions:[]},a="meta";continue}if(/^#{1,2}(?!#)\s+/.test(f)&&!v&&!b){u(),s=null;continue}if(!r)continue;if(/^###\s*Проверочные вопросы/i.test(f)){a="questions";continue}if(a==="code"){/^```/.test(f)?a="body":l.push(g);continue}if(/^```/.test(f)){a="code";continue}if(a==="questions"){const S=f.match(/^[-*]\s+(.*)$/),j=f.match(/^\d+\.\s+(.*)$/);if(S){c.push(S[1]);continue}if(j){c.push(j[1]);continue}if(!f||/^---+$/.test(f))continue;c.push(f);continue}const $=f.match(/^\*\*(Жанр|Опора|Цель|Genre|Source|Goal)\:\*\*\s*(.*)$/i);if($){const S=p($[1]);r[S]=$[2].trim()}}return u(),t}function yg(e){return String(e||"").replace(/^\s*\n+/,"").replace(/\n+\s*$/,"")}function jg(e){return String(e||"").replace(/^[\s\-–—::]+/u,"").trim()}function Sg(e){const t=e&&typeof e=="object"&&!Array.isArray(e)?e.items&&typeof e.items=="object"&&!Array.isArray(e.items)?e.items:e:{},n={};return Object.entries(t||{}).forEach(([s,r])=>{!s||!r||typeof r!="object"||(n[String(s)]={titleRu:String(r.titleRu||r.ruTitle||r.title_ru||"").trim(),titleEn:String(r.titleEn||r.enTitle||r.title_en||"").trim(),ru:String(r.ru||r.translationRu||r.translation_ru||"").trim(),en:String(r.en||r.translationEn||r.translation_en||"").trim()})}),n}function El(e){const t=String(e||"").trim();if(!t)return[t];if(/^https?:\/\//i.test(t)||t.startsWith("file:"))return[t];const n=t.replace(/^\.\/+/,"").replace(/^\.\.\/+/,"").replace(/^\/+/,""),s=[t,`./${n}`,`../${n}`,`index/${n}`,`/index/${n}`,`/${n}`];return[...new Set(s.filter(Boolean))]}function Ng(e,t){return{...e,id:String(e.id),lessonId:t,examples:Array.isArray(e.examples)?e.examples:[],apps:Array.isArray(e.apps)?e.apps:[],stroke_order:Array.isArray(e.stroke_order)?e.stroke_order:[]}}function Cg(e){const t=e!=null&&e.items&&typeof e.items=="object"?e.items:{};return Object.fromEntries(Object.entries(t).map(([n,s])=>{const r=Array.isArray(s==null?void 0:s.strokeOrder)?s.strokeOrder.filter(a=>typeof(a==null?void 0:a.path)=="string"&&a.path.trim()):[];return r.length?[n,{...s,kanji:s.kanji||n,strokes:Number(s.strokes||r.length),viewBox:s.viewBox||"0 0 109 109",strokeOrder:r}]:null}).filter(Boolean))}function Tn(){return{owned:[],selected:{background:"bg_study_hub",outfit:"outfit_default_assassin",theme:"theme_default_dark",decoration:null,frame:null,effect:null},seen:[],updatedAt:new Date().toISOString()}}function Ag(){try{const e=localStorage.getItem(te);if(!e)return Tn();const t=JSON.parse(e),n=Tn();return{owned:Array.isArray(t.owned)?t.owned.map(String):n.owned,selected:{...n.selected,...t&&t.selected||{}},seen:Array.isArray(t.seen)?t.seen.map(String):n.seen,updatedAt:t.updatedAt||n.updatedAt}}catch(e){return console.warn("Customization storage failed.",e),Tn()}}function Zn(){if(!i.customization)return!1;if(_r)return!0;_r=!0;const e=()=>{Ln=0,_r=!1,i.customization.updatedAt=new Date().toISOString();try{localStorage.setItem(te,JSON.stringify(i.customization))}catch(t){console.warn("Customization save failed.",t)}};return"requestIdleCallback"in window?Ln=window.requestIdleCallback(e,{timeout:1200}):Ln=window.setTimeout(e,160),!0}function Lg(){if(!i.customization)return!1;_r=!1,Ln&&("cancelIdleCallback"in window?window.cancelIdleCallback(Ln):window.clearTimeout(Ln),Ln=0),i.customization.updatedAt=new Date().toISOString();try{return localStorage.setItem(te,JSON.stringify(i.customization)),!0}catch(e){return console.warn("Customization save failed.",e),!1}}function Kr(){var s,r;const e=Ag(),t=new Set;(e.owned||[]).forEach(a=>{const l=ve(a)||Rn(a);l&&t.add(l.id)}),et().forEach(a=>{(a.defaultOwned||a.price===0)&&t.add(a.id)}),(i.progress.unlockedBackgrounds||[]).forEach(a=>{const l=ve(a)||Rn(a);l&&t.add(l.id)}),(i.progress.unlockedEvaSprites||[]).forEach(a=>{var c,u;const l=xn(a);l&&t.add(l.id),(u=(c=i.progress.shop)==null?void 0:c.owned)!=null&&u.includes(`eva_sprite:${a}`)&&l&&t.add(l.id)}),(((s=i.progress.shop)==null?void 0:s.owned)||[]).forEach(a=>{const l=String(a),c=ve(l)||Rn(l);if(c&&t.add(c.id),!c&&l.startsWith("eva_sprite:")){const u=xn(l.replace("eva_sprite:",""));u&&t.add(u.id)}});const n=Ig({...Tn().selected,...e.selected||{}});i.progress.selectedEvaRoomBackground&&(n.background=Rt(i.progress.selectedEvaRoomBackground)),i.progress.selectedEvaSprite&&(n.outfit=((r=xn(i.progress.selectedEvaSprite))==null?void 0:r.id)||n.outfit),t.has(n.background)||(n.background="bg_study_hub"),t.has(n.outfit)||(n.outfit="outfit_default_assassin"),t.has(n.theme)||(n.theme="theme_default_dark"),n.decoration&&!t.has(n.decoration)&&(n.decoration=null),n.effect&&!t.has(n.effect)&&(n.effect=null),i.customization={owned:[...t],selected:n,seen:[...new Set([...e.seen||[],...t])],updatedAt:e.updatedAt||new Date().toISOString()},Ds(),Zn()}function Ds(){var n;if(!i.customization||!i.progress)return;pe();const e=i.customization.selected||{};e.background&&(i.progress.selectedEvaRoomBackground=e.background);const t=ve(e.outfit);t!=null&&t.spriteId&&(i.progress.selectedEvaSprite=t.spriteId),i.progress.unlockedBackgrounds=[...new Set([...i.progress.unlockedBackgrounds||[],...i.customization.owned.filter(s=>{var r;return((r=ve(s))==null?void 0:r.type)==="background"})])],i.progress.unlockedEvaSprites=[...new Set([...i.progress.unlockedEvaSprites||[],...i.customization.owned.map(s=>ve(s)).filter(s=>(s==null?void 0:s.type)==="outfit"&&s.spriteId).map(s=>s.spriteId)])],(n=i.progress).shop||(n.shop={owned:[],equipped:{}}),i.progress.shop.owned=[...new Set([...i.progress.shop.owned||[],...i.customization.owned,...i.progress.unlockedEvaSprites.map(s=>`eva_sprite:${s}`)])],i.progress.shop.equipped={...i.progress.shop.equipped||{},background:e.background||null,outfit:e.outfit||null,theme:e.theme||null,decoration:e.decoration||e.frame||null,effect:e.effect||null}}function et(){var e;return((e=i.customizationCatalog)==null?void 0:e.items)||[]}function ve(e){return et().find(t=>t.id===e)||null}function Rn(e){const t=String(e||"");return t&&et().find(n=>Array.isArray(n.legacyIds)&&n.legacyIds.map(String).includes(t))||null}function Rt(e){const t=ve(e)||Rn(e);return(t==null?void 0:t.id)||e||null}function Ig(e={}){return{background:Rt(e.background),outfit:Rt(e.outfit),theme:Rt(e.theme),decoration:Rt(e.decoration||e.frame),effect:Rt(e.effect)}}function xn(e){const t=String(e||"");if(!t)return null;const n=`eva_sprite:${t}`;return et().find(s=>s.type!=="outfit"?!1:s.spriteId===t||s.legacySpriteId===t?!0:Array.isArray(s.legacyIds)&&s.legacyIds.map(String).includes(n))||null}function Tg(e){return(Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),title:n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},summary:n.summary||{ru:"",en:""},goals:Array.isArray(n.goals)?n.goals:[],sections:Array.isArray(n.sections)?n.sections:[],practice:Array.isArray(n.practice)?n.practice:[],checkpoint:Array.isArray(n.checkpoint)?n.checkpoint:[]})).filter(n=>n.jlpt)}function Rg(e){const t=Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e)?e:[];return{version:Number((e==null?void 0:e.version)||1),generatedAt:(e==null?void 0:e.generatedAt)||null,items:t.map(n=>{var s,r;return{...n,jlpt:String(n.jlpt||"").toUpperCase(),slug:String(n.slug||String(n.jlpt||"").toLowerCase()),title:n.title||{ru:((s=n.displayTitle)==null?void 0:s.ru)||n.jlpt||"JLPT",en:((r=n.displayTitle)==null?void 0:r.en)||n.jlpt||"JLPT"},displayTitle:n.displayTitle||n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},description:n.description||{ru:"",en:""},goal:n.goal||{ru:"",en:""},recommendedCycle:n.recommendedCycle||{ru:"",en:""},previousLevels:Array.isArray(n.previousLevels)?n.previousLevels:[],nextLevels:Array.isArray(n.nextLevels)?n.nextLevels:[],lessonIds:Array.isArray(n.lessonIds)?n.lessonIds:[],files:n.files||{},lessonCount:Number(n.lessonCount||0),kanjiCount:Number(n.kanjiCount||0),cardCount:Number(n.cardCount||0)}}).filter(n=>n.jlpt).sort((n,s)=>Oe.indexOf(n.jlpt)-Oe.indexOf(s.jlpt))}}function xg(e){return(Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),apps:Array.isArray(n.apps)?n.apps:[],kana:n.kana||{hiragana:[],katakana:[]},kanjiFocus:Array.isArray(n.kanjiFocus)?n.kanjiFocus:[],drills:Array.isArray(n.drills)?n.drills:[],sources:Array.isArray(n.sources)?n.sources:[]})).filter(n=>n.jlpt)}function _g(e){return{version:Number((e==null?void 0:e.version)||1),level:"N5",title:(e==null?void 0:e.title)||{ru:"JLPT N5",en:"JLPT N5"},description:(e==null?void 0:e.description)||{ru:"",en:""},principle:(e==null?void 0:e.principle)||{ru:"",en:""},kanjiCount:Number((e==null?void 0:e.kanjiCount)||80),lessonCount:Number((e==null?void 0:e.lessonCount)||10),kanjiPerLesson:Number((e==null?void 0:e.kanjiPerLesson)||8),pdfUrl:(e==null?void 0:e.pdfUrl)||"docs/flashkanji_N5_expanded_textbook.pdf",reviewPlan:Array.isArray(e==null?void 0:e.reviewPlan)?e.reviewPlan:[],rewards:{addToSrsXp:4,knowXp:6,hardXp:2,exerciseXp:7,exerciseMoon:1,lessonCompleteXp:45,lessonCompleteMoon:6,finalTestXp:120,finalTestMoon:20,...(e==null?void 0:e.rewards)||{}}}}function Dl(e){const t=Array.isArray(e==null?void 0:e.items)?e.items:[];return{version:Number((e==null?void 0:e.version)||1),level:"N5",textbook:(e==null?void 0:e.textbook)||{},items:t.map((n,s)=>({...n,id:String(n.id||`n5-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30]})).filter(n=>n.kanji.length)}}function Mg(e){return(Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),lessonId:n.lessonId||n.lesson_id||null,kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:[],jlpt:"N5"})).filter(n=>n.kanji)}function Pg(){if(!Array.isArray(i.n5KanjiCatalog)||!i.n5KanjiCatalog.length)return;const e=new Map(i.n5KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;i.cards=i.cards.map(n=>{const s=e.get(n.kanji);if(!s)return n;const r=String(n.jlpt||s.jlpt||"").toUpperCase();return r&&r!=="N5"?n:(t.add(s.kanji),Br(n,s))}),i.n5KanjiCatalog.forEach(n=>{t.has(n.kanji)||(i.cards.push(Br({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId||null,jlpt:"N5",examples:[],source:"n5-catalog"},n)),t.add(n.kanji))})}function Br(e,t){var c,u,p;const n=t.readings||{},s=d=>Array.isArray(d)?d.filter(Boolean).join(" / "):String(d||""),r=(t.examples||[]).map(d=>({...d,reading:ne(d.reading||d.hiragana||d.kana||""),translation:d.translation_ru||d.translation||""})),a=r[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(d=>d.description_ru||d.description_en||"").filter(Boolean):e.stroke_order;return{...e,jlpt:"N5",lessonId:e.lessonId||t.lessonId||null,meaning_ru:((c=t.meaning)==null?void 0:c.ru)||e.meaning_ru||"",meaning_en:((u=t.meaning)==null?void 0:u.en)||e.meaning_en||((p=t.meaning)==null?void 0:p.ru)||e.meaning_ru||"",onyomi:ne(s(n.onyomi)||e.onyomi||""),kunyomi:ne(s(n.kunyomi)||e.kunyomi||""),hiragana:ne((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||a.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||a.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n5Detail:t}}function Eg(e){return{version:Number((e==null?void 0:e.version)||1),level:"N5",types:Array.isArray(e==null?void 0:e.types)?e.types:[],lessonQuestionCount:Number((e==null?void 0:e.lessonQuestionCount)||6),reviewModes:Array.isArray(e==null?void 0:e.reviewModes)?e.reviewModes:[]}}function Dg(e){return{version:Number((e==null?void 0:e.version)||1),level:"N5",title:(e==null?void 0:e.title)||{ru:"Финальный тест JLPT N5",en:"JLPT N5 Final Test"},description:(e==null?void 0:e.description)||{ru:"",en:""},questionCount:Number((e==null?void 0:e.questionCount)||24),passingPercent:Number((e==null?void 0:e.passingPercent)||80),types:Array.isArray(e==null?void 0:e.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","srs"],rewards:{completeXp:120,completeMoon:20,passXp:80,passMoon:12,...(e==null?void 0:e.rewards)||{}}}}function Og(e){return{version:Number((e==null?void 0:e.version)||1),level:"N4",title:(e==null?void 0:e.title)||{ru:"JLPT N4",en:"JLPT N4"},description:(e==null?void 0:e.description)||{ru:"",en:""},principle:(e==null?void 0:e.principle)||{ru:"",en:""},kanjiCount:Number((e==null?void 0:e.kanjiCount)||170),lessonCount:Number((e==null?void 0:e.lessonCount)||17),kanjiPerLesson:Number((e==null?void 0:e.kanjiPerLesson)||10),grammarCount:Number((e==null?void 0:e.grammarCount)||48),readingCount:Number((e==null?void 0:e.readingCount)||0),listeningCount:Number((e==null?void 0:e.listeningCount)||0),pdfUrl:(e==null?void 0:e.pdfUrl)||"docs/flashkanji_N4_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e==null?void 0:e.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e==null?void 0:e.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:5,knowXp:7,hardXp:2,exerciseXp:9,exerciseMoon:1,grammarXp:10,grammarMoon:1,lessonCompleteXp:65,lessonCompleteMoon:8,readingXp:35,readingMoon:4,listeningXp:30,listeningMoon:3,finalTestXp:180,finalTestMoon:35,...(e==null?void 0:e.rewards)||{}}}}function Kg(e){const t=Array.isArray(e==null?void 0:e.items)?e.items:[];return{version:Number((e==null?void 0:e.version)||1),level:"N4",textbook:(e==null?void 0:e.textbook)||{},items:t.map((n,s)=>({...n,id:String(n.id||`n4-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45]})).filter(n=>n.kanji.length)}}function Bg(e){return(Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N4",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Fg(){if(!Array.isArray(i.n4KanjiCatalog)||!i.n4KanjiCatalog.length)return;const e=new Map(i.n4KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;i.cards=i.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N4"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Fr(n,s))}),i.n4KanjiCatalog.forEach(n=>{t.has(n.kanji)||(i.cards.push(Fr({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[],source:"n4-catalog"},n)),t.add(n.kanji))})}function Fr(e,t){var c,u,p;const n=t.readings||{},s=d=>Array.isArray(d)?d.filter(Boolean).join(" / "):String(d||""),r=(t.examples||[]).map(d=>({...d,reading:ne(d.reading||d.hiragana||d.kana||""),translation:d.translation_ru||d.translation||d.translation_en||""})),a=r[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(d=>typeof d=="string"?d:d.description_ru||d.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N4",lessonId:e.lessonId||t.lessonId||null,meaning_ru:((c=t.meaning)==null?void 0:c.ru)||e.meaning_ru||"",meaning_en:((u=t.meaning)==null?void 0:u.en)||e.meaning_en||((p=t.meaning)==null?void 0:p.ru)||e.meaning_ru||"",onyomi:ne(s(n.onyomi)||e.onyomi||""),kunyomi:ne(s(n.kunyomi)||e.kunyomi||""),hiragana:ne((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||a.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||a.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n4Detail:t}}function zg(e){return(Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-grammar-${String(s+1).padStart(2,"0")}`),level:"N4",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Jg(e){return{version:Number((e==null?void 0:e.version)||1),level:"N4",lessonQuestionCount:Number((e==null?void 0:e.lessonQuestionCount)||8),types:Array.isArray(e==null?void 0:e.types)?e.types:[],reviewModes:Array.isArray(e==null?void 0:e.reviewModes)?e.reviewModes:[]}}function Ol(e){return(Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Ug(e){var t,n,s,r,a,l;return{version:Number((e==null?void 0:e.version)||1),level:"N4",title:(e==null?void 0:e.title)||{ru:"Финальный тест JLPT N4",en:"JLPT N4 Final Test"},description:(e==null?void 0:e.description)||{ru:"",en:""},questionCount:Number((e==null?void 0:e.questionCount)||32),passingPercent:Number((e==null?void 0:e.passingPercent)||80),kanjiPool:Array.isArray(e==null?void 0:e.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e==null?void 0:e.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e==null?void 0:e.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e==null?void 0:e.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(((t=e==null?void 0:e.rewards)==null?void 0:t.xp)||((n=e==null?void 0:e.rewards)==null?void 0:n.completeXp)||180),completeMoon:Number(((s=e==null?void 0:e.rewards)==null?void 0:s.moon)||((r=e==null?void 0:e.rewards)==null?void 0:r.completeMoon)||35),passXp:Number(((a=e==null?void 0:e.rewards)==null?void 0:a.passXp)||90),passMoon:Number(((l=e==null?void 0:e.rewards)==null?void 0:l.passMoon)||15)}}}function Gg(e){return{version:Number((e==null?void 0:e.version)||1),level:"N3",title:(e==null?void 0:e.title)||{ru:"JLPT N3",en:"JLPT N3"},description:(e==null?void 0:e.description)||{ru:"",en:""},principle:(e==null?void 0:e.principle)||{ru:"",en:""},kanjiCount:Number((e==null?void 0:e.kanjiCount)||370),lessonCount:Number((e==null?void 0:e.lessonCount)||37),kanjiPerLesson:Number((e==null?void 0:e.kanjiPerLesson)||10),grammarCount:Number((e==null?void 0:e.grammarCount)||80),readingCount:Number((e==null?void 0:e.readingCount)||0),listeningCount:Number((e==null?void 0:e.listeningCount)||0),pdfUrl:(e==null?void 0:e.pdfUrl)||"docs/flashkanji_N3_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e==null?void 0:e.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e==null?void 0:e.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:6,knowXp:8,hardXp:2,exerciseXp:10,exerciseMoon:1,grammarXp:11,grammarMoon:1,lessonCompleteXp:75,lessonCompleteMoon:9,readingXp:38,readingMoon:4,listeningXp:34,listeningMoon:4,finalTestXp:220,finalTestMoon:40,...(e==null?void 0:e.rewards)||{}}}}function Hg(e){const t=Array.isArray(e==null?void 0:e.items)?e.items:[];return{version:Number((e==null?void 0:e.version)||1),level:"N3",textbook:(e==null?void 0:e.textbook)||{},items:t.map((n,s)=>({...n,id:String(n.id||`n3-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45,60]})).filter(n=>n.kanji.length)}}function Qg(e){return(Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N3",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Xg(){if(!Array.isArray(i.n3KanjiCatalog)||!i.n3KanjiCatalog.length)return;const e=new Map(i.n3KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;i.cards=i.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N3"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),zr(n,s))}),i.n3KanjiCatalog.forEach(n=>{t.has(n.kanji)||(i.cards.push(zr({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[],source:"n3-catalog"},n)),t.add(n.kanji))})}function zr(e,t){var c,u,p;const n=t.readings||{},s=d=>Array.isArray(d)?d.filter(Boolean).join(" / "):String(d||""),r=(t.examples||[]).map(d=>({...d,reading:ne(d.reading||d.hiragana||d.kana||""),translation:d.translation_ru||d.translation||d.translation_en||""})),a=r[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(d=>typeof d=="string"?d:d.description_ru||d.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N3",lessonId:e.lessonId||t.lessonId||null,meaning_ru:((c=t.meaning)==null?void 0:c.ru)||e.meaning_ru||"",meaning_en:((u=t.meaning)==null?void 0:u.en)||e.meaning_en||((p=t.meaning)==null?void 0:p.ru)||e.meaning_ru||"",onyomi:ne(s(n.onyomi)||e.onyomi||""),kunyomi:ne(s(n.kunyomi)||e.kunyomi||""),hiragana:ne((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||a.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||a.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n3Detail:t}}function Wg(e){return(Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-grammar-${String(s+1).padStart(2,"0")}`),level:"N3",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function qg(e){return{version:Number((e==null?void 0:e.version)||1),level:"N3",lessonQuestionCount:Number((e==null?void 0:e.lessonQuestionCount)||8),types:Array.isArray(e==null?void 0:e.types)?e.types:[],reviewModes:Array.isArray(e==null?void 0:e.reviewModes)?e.reviewModes:[]}}function Kl(e){return(Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Vg(e){var t,n,s,r,a,l;return{version:Number((e==null?void 0:e.version)||1),level:"N3",title:(e==null?void 0:e.title)||{ru:"Финальный тест JLPT N3",en:"JLPT N3 Final Test"},description:(e==null?void 0:e.description)||{ru:"",en:""},questionCount:Number((e==null?void 0:e.questionCount)||40),passingPercent:Number((e==null?void 0:e.passingPercent)||80),kanjiPool:Array.isArray(e==null?void 0:e.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e==null?void 0:e.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e==null?void 0:e.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e==null?void 0:e.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(((t=e==null?void 0:e.rewards)==null?void 0:t.xp)||((n=e==null?void 0:e.rewards)==null?void 0:n.completeXp)||220),completeMoon:Number(((s=e==null?void 0:e.rewards)==null?void 0:s.moon)||((r=e==null?void 0:e.rewards)==null?void 0:r.completeMoon)||40),passXp:Number(((a=e==null?void 0:e.rewards)==null?void 0:a.passXp)||110),passMoon:Number(((l=e==null?void 0:e.rewards)==null?void 0:l.passMoon)||18)}}}function Yg(e){return{version:Number((e==null?void 0:e.version)||1),level:"N2",title:(e==null?void 0:e.title)||{ru:"JLPT N2",en:"JLPT N2"},description:(e==null?void 0:e.description)||{ru:"",en:""},principle:(e==null?void 0:e.principle)||{ru:"",en:""},kanjiCount:Number((e==null?void 0:e.kanjiCount)||380),lessonCount:Number((e==null?void 0:e.lessonCount)||38),kanjiPerLesson:Number((e==null?void 0:e.kanjiPerLesson)||10),grammarCount:Number((e==null?void 0:e.grammarCount)||120),readingCount:Number((e==null?void 0:e.readingCount)||46),listeningCount:Number((e==null?void 0:e.listeningCount)||6),pdfUrl:(e==null?void 0:e.pdfUrl)||"docs/flashkanji_N2_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e==null?void 0:e.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e==null?void 0:e.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...(e==null?void 0:e.rewards)||{}}}}function Zg(e){const t=Array.isArray(e==null?void 0:e.items)?e.items:[];return{version:Number((e==null?void 0:e.version)||1),level:"N2",textbook:(e==null?void 0:e.textbook)||{},items:t.map((n,s)=>({...n,id:String(n.id||`n2-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function em(e){return(Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N2",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function tm(){if(!Array.isArray(i.n2KanjiCatalog)||!i.n2KanjiCatalog.length)return;const e=new Map(i.n2KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;i.cards=i.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N2"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Jr(n,s))}),i.n2KanjiCatalog.forEach(n=>{t.has(n.kanji)||(i.cards.push(Jr({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[],source:"n2-catalog"},n)),t.add(n.kanji))})}function Jr(e,t){var c,u,p;const n=t.readings||{},s=d=>Array.isArray(d)?d.filter(Boolean).join(" / "):String(d||""),r=(t.examples||[]).map(d=>({...d,reading:ne(d.reading||d.hiragana||d.kana||""),translation:d.translation_ru||d.translation||d.translation_en||""})),a=r[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(d=>typeof d=="string"?d:d.description_ru||d.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N2",lessonId:e.lessonId||t.lessonId||null,meaning_ru:((c=t.meaning)==null?void 0:c.ru)||e.meaning_ru||"",meaning_en:((u=t.meaning)==null?void 0:u.en)||e.meaning_en||((p=t.meaning)==null?void 0:p.ru)||e.meaning_ru||"",onyomi:ne(s(n.onyomi)||e.onyomi||""),kunyomi:ne(s(n.kunyomi)||e.kunyomi||""),hiragana:ne((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||a.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||a.romaji||e.romaji||"",examples:r.length?r:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n2Detail:t}}function nm(e){return(Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-grammar-${String(s+1).padStart(2,"0")}`),level:"N2",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function sm(e){return{version:Number((e==null?void 0:e.version)||1),level:"N2",lessonQuestionCount:Number((e==null?void 0:e.lessonQuestionCount)||8),types:Array.isArray(e==null?void 0:e.types)?e.types:[],reviewModes:Array.isArray(e==null?void 0:e.reviewModes)?e.reviewModes:[]}}function Bl(e){return(Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function rm(e){var t,n,s,r,a,l;return{version:Number((e==null?void 0:e.version)||1),level:"N2",title:(e==null?void 0:e.title)||{ru:"Финальный тест JLPT N2",en:"JLPT N2 Final Test"},description:(e==null?void 0:e.description)||{ru:"",en:""},questionCount:Number((e==null?void 0:e.questionCount)||40),passingPercent:Number((e==null?void 0:e.passingPercent)||80),kanjiPool:Array.isArray(e==null?void 0:e.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e==null?void 0:e.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e==null?void 0:e.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e==null?void 0:e.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(((t=e==null?void 0:e.rewards)==null?void 0:t.xp)||((n=e==null?void 0:e.rewards)==null?void 0:n.completeXp)||260),completeMoon:Number(((s=e==null?void 0:e.rewards)==null?void 0:s.moon)||((r=e==null?void 0:e.rewards)==null?void 0:r.completeMoon)||48),passXp:Number(((a=e==null?void 0:e.rewards)==null?void 0:a.passXp)||130),passMoon:Number(((l=e==null?void 0:e.rewards)==null?void 0:l.passMoon)||20)}}}function im(e){var t,n,s,r,a,l,c,u,p;return{version:Number((e==null?void 0:e.version)||1),level:"N1",title:(e==null?void 0:e.title)||{ru:"JLPT N1",en:"JLPT N1"},description:(e==null?void 0:e.description)||{ru:"",en:""},principle:(e==null?void 0:e.principle)||{ru:"",en:""},lessonCount:Number((e==null?void 0:e.lessonCount)||0),kanjiCount:Number((e==null?void 0:e.kanjiCount)||0),readingCount:Number((e==null?void 0:e.readingCount)||0),pdfUrl:(e==null?void 0:e.pdfUrl)||"docs/flashkanji_N1_textbook_flashkanji_space.pdf",rewards:{addToSrsXp:Number(((t=e==null?void 0:e.rewards)==null?void 0:t.addToSrsXp)||8),knowXp:Number(((n=e==null?void 0:e.rewards)==null?void 0:n.knowXp)||11),hardXp:Number(((s=e==null?void 0:e.rewards)==null?void 0:s.hardXp)||2),exerciseXp:Number(((r=e==null?void 0:e.rewards)==null?void 0:r.exerciseXp)||13),exerciseMoon:Number(((a=e==null?void 0:e.rewards)==null?void 0:a.exerciseMoon)||1),readingXp:Number(((l=e==null?void 0:e.rewards)==null?void 0:l.readingXp)||55),readingMoon:Number(((c=e==null?void 0:e.rewards)==null?void 0:c.readingMoon)||5),finalTestXp:Number(((u=e==null?void 0:e.rewards)==null?void 0:u.finalTestXp)||320),finalTestMoon:Number(((p=e==null?void 0:e.rewards)==null?void 0:p.finalTestMoon)||60)}}}function Fl(e){return Array.isArray(e)?e.map(t=>({value:String((t==null?void 0:t.value)||(t==null?void 0:t.id)||""),label:(t==null?void 0:t.label)||(t==null?void 0:t.title)||(t==null?void 0:t.text)||{ru:String((t==null?void 0:t.labelRu)||(t==null?void 0:t.ru)||(t==null?void 0:t.value)||""),en:String((t==null?void 0:t.labelEn)||(t==null?void 0:t.en)||(t==null?void 0:t.value)||"")}})).filter(t=>t.value):[]}function am(e,t,n){return{id:String((e==null?void 0:e.id)||`${t.id}-q${n+1}`),prompt:(e==null?void 0:e.prompt)||{ru:"",en:""},answer:String((e==null?void 0:e.answer)||""),options:Fl(e==null?void 0:e.options)}}function om(e,t=""){const n=Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e)?e:[],s=String(t||(e==null?void 0:e.level)||"").toUpperCase();return n.map((r,a)=>{const l=String(r.id||`${s.toLowerCase()||"reading"}-${a+1}`);return{...r,level:String(r.level||s||"").toUpperCase(),id:l,title:r.title||{ru:r.id||"",en:r.id||""},jp:String(r.jp||""),reading:String(r.reading||""),ru:String(r.ru||""),en:String(r.en||""),source:String(r.source||""),questions:Array.isArray(r.questions)?r.questions.map((c,u)=>am(c,{id:l},u)):[]}}).filter(r=>r.id)}function lm(e){return Array.isArray(e)?e.map(t=>({answer:Array.isArray(t==null?void 0:t.answer)?t.answer.map(String).filter(Boolean):[],reading:Array.isArray(t==null?void 0:t.reading)?t.reading.map(n=>ne(n)):[]})):[]}function cm(e,t){const n=Array.isArray(t)?t.flatMap(s=>Array.isArray(s==null?void 0:s.answer)?s.answer.map((r,a)=>{var l;return{kanji:String(r||""),reading:String(((l=s==null?void 0:s.reading)==null?void 0:l[a])||"")}}):[]):[];return[...Array.isArray(e)?e:[],...n].map(s=>({kanji:String((s==null?void 0:s.kanji)||""),reading:String((s==null?void 0:s.reading)||"")})).filter(s=>s.kanji).filter((s,r,a)=>a.findIndex(l=>l.kanji===s.kanji&&l.reading===s.reading)===r)}function um(e){const t=Array.isArray(e==null?void 0:e.items)?e.items:Array.isArray(e)?e:[],n=t.find(r=>String((r==null?void 0:r.kind)||"").toLowerCase()==="sentences")||t[0]||null;return(Array.isArray(n==null?void 0:n.items)?n.items:[]).map((r,a)=>({id:String(r.id||`${String((n==null?void 0:n.id)||"reading-n5-sentence")}-${a+1}`),level:String(r.jlpt||(n==null?void 0:n.level)||"N5").toUpperCase(),kind:"cloze",sourceKind:"sentences",sourceId:String((n==null?void 0:n.id)||"reading-n5-sentences"),sourceTitle:(n==null?void 0:n.title)||{ru:"Предложения",en:"Sentences"},title:{ru:"Предложение",en:"Sentence"},sentence:String(r.sentence||""),reading:ne(r.reading||""),translationRu:String(r.translationRu||r.translation_ru||r.ru||""),translationEn:String(r.translationEn||r.translation_en||r.en||""),blanks:lm(r.blanks),tiles:cm(r.tiles,r.blanks),source:"reading"})).filter(r=>r.id)}function zl(e,t=[]){const n=Array.isArray(e==null?void 0:e.achievements)&&e.achievements.length?e.achievements:t,s=Array.isArray(e==null?void 0:e.categories)?e.categories.map(l=>({id:String(l.id),title:l.title||{ru:l.id,en:l.id},icon:l.icon||"moon"})):[],r=n.map(l=>fa(l)),a=new Set(s.map(l=>l.id));return r.forEach(l=>{a.has(l.category)||(a.add(l.category),s.push({id:l.category,title:{ru:l.category,en:l.category},icon:l.icon||"moon"}))}),{categories:s,items:r}}function fa(e){var s,r,a,l;const t=Number((r=(s=e.rewardXp)!=null?s:e.xp)!=null?r:0),n=Number((l=(a=e.rewardFragments)!=null?a:e.coins)!=null?l:0);return{...e,id:String(e.id),category:e.category||e.kind||"learning",title:e.title||e.name||{ru:e.id,en:e.id},description:e.description||{ru:"",en:""},icon:e.icon||"moon",kind:e.kind||"learned",target:Number(e.target||1),rewardXp:t,rewardFragments:n,unlocked:!!e.unlocked,secret:!!e.secret}}function Jl(){return[navigator.language,...navigator.languages||[]].filter(Boolean).map(t=>String(t).toLowerCase()).some(t=>t==="ru"||t.startsWith("ru-")||t==="be"||t.startsWith("be-"))?"ru":"en"}function es(){const e=Jl();return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),settings:{theme:"dark",themeManuallySelected:!1,sound:!0,uxSound:!0,uxVolume:.75,language:e,languageAutoDetected:!0,languageManuallySelected:!1,dailyGoal:10},xp:0,level:1,moonFragments:0,totalCorrect:0,totalWrong:0,correctCombo:0,bestCorrectCombo:0,appOpens:0,totalMoonFragmentsEarned:0,cards:{},seenCards:{},seenKanji:{},daily:{},favorites:{},transactions:[],streakHistory:[],streak:{current:0,best:0,lastStudyDate:null,pendingReward:null},visits:{firstVisitDate:null,lastVisitDate:null,lastDailyBonusDate:null,streak:0,bestStreak:0},lessonCompletions:{},achievements:{},dailyBonuses:{},dailyBonusPending:null,lastOpenedJlptLesson:null,lastOpenedJlptLessons:{},viewedReadingLevels:{},writingPractice:{completed:0,cards:{}},secrets:{evaClicks:0,nightVisit:!1},learningPath:wa(),jlptLessonStudy:va(),sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[],completed:{},attempts:0,recentIds:[],recentAnswers:[],custom:[],customSentences:[],customEditingId:null,customDraft:{jp:"",hiragana:"",ru:"",en:""},customMessage:"",customStatus:""},jlptLessonPractice:{activeIds:{},selected:{},checked:{},results:{},completed:{}},readingExercises:{},n5Course:ka(),n4Course:$a(),n3Course:ya(),n2Course:ja(),unlockedJlptLevels:Oe.slice(),unlockedBackgrounds:["bg_study_hub"],selectedEvaRoomBackground:"bg_study_hub",unlockedEvaSprites:["idle","default"],selectedEvaSprite:"idle",evaRoomDialogueProgress:{currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]},evaRoomQuiz:{answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]},evaAutonomy:nc(),evaRelationship:Na(),shop:{owned:[],equipped:{}}}}function dm(){const e=es();try{const t=AS();return t?Ul(e,t):e}catch(t){return console.warn("Progress reset because stored JSON is invalid.",t),e}}function Ul(e,t){var n,s;return{...e,...t,version:3,settings:pm(e.settings,t.settings||{}),cards:LS({...e.cards,...t.cards||{}}),seenCards:{...e.seenCards,...t.seenCards||{}},seenKanji:{...e.seenKanji,...t.seenKanji||{}},daily:{...e.daily,...t.daily||{}},favorites:{...e.favorites,...t.favorites||{}},transactions:Array.isArray(t.transactions)?t.transactions:e.transactions,streakHistory:Array.isArray(t.streakHistory)?t.streakHistory:e.streakHistory,streak:mm(e.streak,t.streak||{}),visits:{...e.visits,...t.visits||{}},lessonCompletions:{...e.lessonCompletions,...t.lessonCompletions||{}},achievements:{...e.achievements,...t.achievements||{}},dailyBonuses:{...e.dailyBonuses,...t.dailyBonuses||{}},dailyBonusPending:Ur(t.dailyBonusPending||null),lastOpenedJlptLesson:ze(t.lastOpenedJlptLesson||null),lastOpenedJlptLessons:Zy(t.lastOpenedJlptLessons||{}),viewedReadingLevels:Ss(t.viewedReadingLevels||{}),appOpens:Number(t.appOpens||e.appOpens),totalMoonFragmentsEarned:Number(t.totalMoonFragmentsEarned||e.totalMoonFragmentsEarned),writingPractice:{...e.writingPractice,...t.writingPractice||{}},secrets:{...e.secrets,...t.secrets||{}},learningPath:ql(e.learningPath,t.learningPath||{}),jlptLessonStudy:Wl(e.jlptLessonStudy,t.jlptLessonStudy||{}),sentencePractice:Sa(e.sentencePractice,t.sentencePractice||{}),jlptLessonPractice:tc(e.jlptLessonPractice,t.jlptLessonPractice||{}),readingExercises:{...e.readingExercises,...t.readingExercises||{}},n5Course:Vl(e.n5Course,t.n5Course||{}),n4Course:Yl(e.n4Course,t.n4Course||{}),n3Course:Zl(e.n3Course,t.n3Course||{}),n2Course:ec(e.n2Course,t.n2Course||{}),unlockedJlptLevels:[...new Set([...Array.isArray(e.unlockedJlptLevels)?e.unlockedJlptLevels:[],...Array.isArray(t.unlockedJlptLevels)?t.unlockedJlptLevels:[],...Oe])],unlockedBackgrounds:[...new Set([...e.unlockedBackgrounds||[],...t.unlockedBackgrounds||[]])],selectedEvaRoomBackground:t.selectedEvaRoomBackground||e.selectedEvaRoomBackground,unlockedEvaSprites:[...new Set([...e.unlockedEvaSprites||[],...t.unlockedEvaSprites||[],...(t.shop&&t.shop.owned||[]).filter(r=>String(r).startsWith("eva_sprite:")).map(r=>String(r).replace("eva_sprite:",""))])],selectedEvaSprite:t.selectedEvaSprite||e.selectedEvaSprite,evaRoomDialogueProgress:{...e.evaRoomDialogueProgress,...t.evaRoomDialogueProgress||{},rewardsClaimed:{...e.evaRoomDialogueProgress.rewardsClaimed,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.rewardsClaimed||{}},visited:{...e.evaRoomDialogueProgress.visited,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.visited||{}},lineHistory:Array.isArray((n=t.evaRoomDialogueProgress)==null?void 0:n.lineHistory)?t.evaRoomDialogueProgress.lineHistory:e.evaRoomDialogueProgress.lineHistory||[]},evaRoomQuiz:{...e.evaRoomQuiz,...t.evaRoomQuiz||{},rewarded:{...e.evaRoomQuiz.rewarded,...t.evaRoomQuiz&&t.evaRoomQuiz.rewarded||{}},history:Array.isArray((s=t.evaRoomQuiz)==null?void 0:s.history)?t.evaRoomQuiz.history.slice(0,40):e.evaRoomQuiz.history},evaAutonomy:rc(e.evaAutonomy,t.evaAutonomy||{}),evaRelationship:sc(e.evaRelationship,t.evaRelationship||{}),shop:{owned:[...new Set([...e.shop.owned||[],...t.shop&&t.shop.owned||[]])],equipped:{...e.shop.equipped,...t.shop&&t.shop.equipped||{}}}}}function pm(e,t){const n={...e,...t||{}};return n.theme=gm(n.theme,e.theme||"dark"),n.themeManuallySelected=Xt(n.themeManuallySelected,e.themeManuallySelected===!0),n.themeManuallySelected||(n.theme="dark"),n.sound=Xt(n.sound,e.sound!==!1),n.uxSound=n.sound!==!1,n.languageAutoDetected=Xt(n.languageAutoDetected,e.languageAutoDetected!==!1),n.languageManuallySelected=Xt(n.languageManuallySelected,e.languageManuallySelected===!0),n}function gm(e,t="dark"){return e==="light"||e==="dark"?e:t}function mm(e,t){const n={...e,...t||{}};return n.current=ha(n.current,e.current||0),n.best=ha(n.best,e.best||0),n.lastStudyDate=n.lastStudyDate||null,n.pendingReward=Gl(n.pendingReward),n}function Gl(e){if(!e||typeof e!="object")return null;const t=ha(e.milestone,0),n=typeof e.availableOn=="string"?e.availableOn:"";return!t||!n?null:{milestone:t,availableOn:n}}function Ur(e){if(!e||typeof e!="object")return null;const t=typeof e.availableOn=="string"?e.availableOn:"";return t?{availableOn:t}:null}function Xt(e,t=!0){if(typeof e=="boolean")return e;if(typeof e=="number")return e!==0;if(typeof e=="string"){const n=e.trim().toLowerCase();if(["false","0","off","no","disabled"].includes(n))return!1;if(["true","1","on","yes","enabled"].includes(n))return!0}return t}function ha(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function wa(){return{version:yl,currentLevel:jl,currentNodeId:Se,completedNodes:{},unlockedNodes:{[Se]:!0},activeSession:null,resultHistory:{},lastUpdatedAt:null}}function va(){return{activeSessionKey:null,sessions:{},lastUpdatedAt:null}}function Hl(){return{level:"",lessonId:"",currentIndex:0,answers:{},phase:"study",startedAt:null,updatedAt:null,completedAt:null,testOpenedAt:null}}function Ql(e){const t=String(e||"").toLowerCase();return["study","test","done"].includes(t)?t:"study"}function Xl(e,t){var a,l,c;const n=Hl(),s=t&&typeof t=="object"?t:{},r={...(e==null?void 0:e.answers)||n.answers,...s.answers||{}};return{...n,...e||{},...s,level:String(s.level||(e==null?void 0:e.level)||n.level||"").toUpperCase(),lessonId:String(s.lessonId||(e==null?void 0:e.lessonId)||n.lessonId||""),currentIndex:Math.max(0,Number((c=(l=(a=s.currentIndex)!=null?a:e==null?void 0:e.currentIndex)!=null?l:n.currentIndex)!=null?c:0)),answers:r,phase:Ql(s.phase||(e==null?void 0:e.phase)||n.phase),startedAt:s.startedAt||(e==null?void 0:e.startedAt)||n.startedAt||null,updatedAt:s.updatedAt||(e==null?void 0:e.updatedAt)||n.updatedAt||null,completedAt:s.completedAt||(e==null?void 0:e.completedAt)||n.completedAt||null,testOpenedAt:s.testOpenedAt||(e==null?void 0:e.testOpenedAt)||n.testOpenedAt||null}}function Wl(e,t){const n=va(),s=t&&typeof t=="object"?t:{},r={},a=(e==null?void 0:e.sessions)||{},l=s.sessions||{};return Object.keys(a).forEach(c=>{r[c]=Xl(a[c],l[c])}),Object.keys(l).forEach(c=>{r[c]||(r[c]=Xl(null,l[c]))}),{...n,...e||{},...s||{},sessions:r,activeSessionKey:s.activeSessionKey||(e==null?void 0:e.activeSessionKey)||n.activeSessionKey||null,lastUpdatedAt:s.lastUpdatedAt||(e==null?void 0:e.lastUpdatedAt)||n.lastUpdatedAt||null}}function ql(e,t){return{...e,...t||{},version:yl,currentLevel:String((t==null?void 0:t.currentLevel)||e.currentLevel||jl).toUpperCase(),currentNodeId:String((t==null?void 0:t.currentNodeId)||e.currentNodeId||Se),completedNodes:{...e.completedNodes,...(t==null?void 0:t.completedNodes)||{}},unlockedNodes:{...e.unlockedNodes,...(t==null?void 0:t.unlockedNodes)||{}},activeSession:ba((t==null?void 0:t.activeSession)||e.activeSession||null),resultHistory:{...e.resultHistory,...(t==null?void 0:t.resultHistory)||{}},lastUpdatedAt:(t==null?void 0:t.lastUpdatedAt)||e.lastUpdatedAt||null}}function ba(e){return!e||typeof e!="object"?null:{nodeId:String(e.nodeId||""),mode:String(e.mode||Gt),stepIndex:Math.max(0,Number(e.stepIndex||0)),answers:{...e.answers||{}},mistakes:Array.isArray(e.mistakes)?e.mistakes.slice(0,80):[],reviewStepIds:Array.isArray(e.reviewStepIds)?e.reviewStepIds.map(String).filter(Boolean).slice(0,80):[],score:Number(e.score||0),startedAt:e.startedAt||new Date().toISOString(),updatedAt:e.updatedAt||new Date().toISOString()}}function ka(){return{currentLessonId:"n5-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0,correctAnswers:0,incorrectAnswers:0,unansweredAnswers:0,totalQuestions:0,mistakeQuestionIds:[],bestScore:0,lastScore:0,passedAt:null,lastRewardXp:0,lastRewardMoon:0},customSentences:[]}}function Vl(e,t){var n;return{...e,...t||{},currentLessonId:(t==null?void 0:t.currentLessonId)||e.currentLessonId,completedLessons:{...e.completedLessons,...(t==null?void 0:t.completedLessons)||{}},viewedLessons:Ss((t==null?void 0:t.viewedLessons)||{}),studiedKanji:{...e.studiedKanji,...(t==null?void 0:t.studiedKanji)||{}},srsKanji:{...e.srsKanji,...(t==null?void 0:t.srsKanji)||{}},difficultKanji:{...e.difficultKanji,...(t==null?void 0:t.difficultKanji)||{}},kanjiMistakes:{...e.kanjiMistakes,...(t==null?void 0:t.kanjiMistakes)||{}},wordMistakes:{...e.wordMistakes,...(t==null?void 0:t.wordMistakes)||{}},completedExercises:{...e.completedExercises,...(t==null?void 0:t.completedExercises)||{}},exerciseResults:{...e.exerciseResults,...(t==null?void 0:t.exerciseResults)||{}},exerciseSrs:Ai(e.exerciseSrs,(t==null?void 0:t.exerciseSrs)||{},"N5"),writingPractice:{...e.writingPractice,...(t==null?void 0:t.writingPractice)||{}},activeReviewMode:(t==null?void 0:t.activeReviewMode)||e.activeReviewMode,finalTest:{...e.finalTest,...(t==null?void 0:t.finalTest)||{},answers:{...e.finalTest.answers,...(t==null?void 0:t.finalTest)&&t.finalTest.answers||{}},mistakes:Array.isArray((n=t==null?void 0:t.finalTest)==null?void 0:n.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t==null?void 0:t.customSentences)?t.customSentences:e.customSentences}}function $a(){return{opened:!1,currentLessonId:"n4-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Yl(e,t){var n;return{...e,...t||{},opened:!!(t!=null&&t.opened||e.opened),currentLessonId:(t==null?void 0:t.currentLessonId)||e.currentLessonId,completedLessons:{...e.completedLessons,...(t==null?void 0:t.completedLessons)||{}},viewedLessons:Ss((t==null?void 0:t.viewedLessons)||{}),studiedKanji:{...e.studiedKanji,...(t==null?void 0:t.studiedKanji)||{}},srsKanji:{...e.srsKanji,...(t==null?void 0:t.srsKanji)||{}},difficultKanji:{...e.difficultKanji,...(t==null?void 0:t.difficultKanji)||{}},kanjiMistakes:{...e.kanjiMistakes,...(t==null?void 0:t.kanjiMistakes)||{}},wordMistakes:{...e.wordMistakes,...(t==null?void 0:t.wordMistakes)||{}},completedExercises:{...e.completedExercises,...(t==null?void 0:t.completedExercises)||{}},exerciseResults:{...e.exerciseResults,...(t==null?void 0:t.exerciseResults)||{}},exerciseSrs:Ai(e.exerciseSrs,(t==null?void 0:t.exerciseSrs)||{},"N4"),completedGrammar:{...e.completedGrammar,...(t==null?void 0:t.completedGrammar)||{}},grammarResults:{...e.grammarResults,...(t==null?void 0:t.grammarResults)||{}},completedReading:{...e.completedReading,...(t==null?void 0:t.completedReading)||{}},readingAnswers:{...e.readingAnswers,...(t==null?void 0:t.readingAnswers)||{}},completedListening:{...e.completedListening,...(t==null?void 0:t.completedListening)||{}},listeningAnswers:{...e.listeningAnswers,...(t==null?void 0:t.listeningAnswers)||{}},writingPractice:{...e.writingPractice,...(t==null?void 0:t.writingPractice)||{}},activeReviewMode:(t==null?void 0:t.activeReviewMode)||e.activeReviewMode,finalTest:{...e.finalTest,...(t==null?void 0:t.finalTest)||{},answers:{...e.finalTest.answers,...(t==null?void 0:t.finalTest)&&t.finalTest.answers||{}},mistakes:Array.isArray((n=t==null?void 0:t.finalTest)==null?void 0:n.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t==null?void 0:t.customSentences)?t.customSentences:e.customSentences}}function ya(){return{opened:!1,currentLessonId:"n3-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Zl(e,t){var n;return{...e,...t||{},opened:!!(t!=null&&t.opened||e.opened),currentLessonId:(t==null?void 0:t.currentLessonId)||e.currentLessonId,completedLessons:{...e.completedLessons,...(t==null?void 0:t.completedLessons)||{}},viewedLessons:Ss((t==null?void 0:t.viewedLessons)||{}),studiedKanji:{...e.studiedKanji,...(t==null?void 0:t.studiedKanji)||{}},srsKanji:{...e.srsKanji,...(t==null?void 0:t.srsKanji)||{}},difficultKanji:{...e.difficultKanji,...(t==null?void 0:t.difficultKanji)||{}},kanjiMistakes:{...e.kanjiMistakes,...(t==null?void 0:t.kanjiMistakes)||{}},wordMistakes:{...e.wordMistakes,...(t==null?void 0:t.wordMistakes)||{}},completedExercises:{...e.completedExercises,...(t==null?void 0:t.completedExercises)||{}},exerciseResults:{...e.exerciseResults,...(t==null?void 0:t.exerciseResults)||{}},exerciseSrs:Ai(e.exerciseSrs,(t==null?void 0:t.exerciseSrs)||{},"N3"),completedGrammar:{...e.completedGrammar,...(t==null?void 0:t.completedGrammar)||{}},grammarResults:{...e.grammarResults,...(t==null?void 0:t.grammarResults)||{}},completedReading:{...e.completedReading,...(t==null?void 0:t.completedReading)||{}},readingAnswers:{...e.readingAnswers,...(t==null?void 0:t.readingAnswers)||{}},completedListening:{...e.completedListening,...(t==null?void 0:t.completedListening)||{}},listeningAnswers:{...e.listeningAnswers,...(t==null?void 0:t.listeningAnswers)||{}},writingPractice:{...e.writingPractice,...(t==null?void 0:t.writingPractice)||{}},activeReviewMode:(t==null?void 0:t.activeReviewMode)||e.activeReviewMode,finalTest:{...e.finalTest,...(t==null?void 0:t.finalTest)||{},answers:{...e.finalTest.answers,...(t==null?void 0:t.finalTest)&&t.finalTest.answers||{}},mistakes:Array.isArray((n=t==null?void 0:t.finalTest)==null?void 0:n.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t==null?void 0:t.customSentences)?t.customSentences:e.customSentences}}function ja(){return{opened:!1,currentLessonId:"n2-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function ec(e,t){var n;return{...e,...t||{},opened:!!(t!=null&&t.opened||e.opened),currentLessonId:(t==null?void 0:t.currentLessonId)||e.currentLessonId,completedLessons:{...e.completedLessons,...(t==null?void 0:t.completedLessons)||{}},viewedLessons:Ss((t==null?void 0:t.viewedLessons)||{}),studiedKanji:{...e.studiedKanji,...(t==null?void 0:t.studiedKanji)||{}},srsKanji:{...e.srsKanji,...(t==null?void 0:t.srsKanji)||{}},difficultKanji:{...e.difficultKanji,...(t==null?void 0:t.difficultKanji)||{}},kanjiMistakes:{...e.kanjiMistakes,...(t==null?void 0:t.kanjiMistakes)||{}},wordMistakes:{...e.wordMistakes,...(t==null?void 0:t.wordMistakes)||{}},completedExercises:{...e.completedExercises,...(t==null?void 0:t.completedExercises)||{}},exerciseResults:{...e.exerciseResults,...(t==null?void 0:t.exerciseResults)||{}},exerciseSrs:Ai(e.exerciseSrs,(t==null?void 0:t.exerciseSrs)||{},"N2"),completedGrammar:{...e.completedGrammar,...(t==null?void 0:t.completedGrammar)||{}},grammarResults:{...e.grammarResults,...(t==null?void 0:t.grammarResults)||{}},completedReading:{...e.completedReading,...(t==null?void 0:t.completedReading)||{}},readingAnswers:{...e.readingAnswers,...(t==null?void 0:t.readingAnswers)||{}},completedListening:{...e.completedListening,...(t==null?void 0:t.completedListening)||{}},listeningAnswers:{...e.listeningAnswers,...(t==null?void 0:t.listeningAnswers)||{}},writingPractice:{...e.writingPractice,...(t==null?void 0:t.writingPractice)||{}},activeReviewMode:(t==null?void 0:t.activeReviewMode)||e.activeReviewMode,finalTest:{...e.finalTest,...(t==null?void 0:t.finalTest)||{},answers:{...e.finalTest.answers,...(t==null?void 0:t.finalTest)&&t.finalTest.answers||{}},mistakes:Array.isArray((n=t==null?void 0:t.finalTest)==null?void 0:n.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t==null?void 0:t.customSentences)?t.customSentences:e.customSentences}}function Sa(e,t){return{...e,...t,selected:Array.isArray(t.selected)?t.selected:e.selected,tileKeys:Array.isArray(t.tileKeys)?t.tileKeys:e.tileKeys,recentIds:Array.isArray(t.recentIds)?t.recentIds:e.recentIds,recentAnswers:Array.isArray(t.recentAnswers)?t.recentAnswers:e.recentAnswers,completed:{...e.completed,...t.completed||{}},custom:Array.isArray(t.custom)?t.custom.slice(0,80):e.custom,customSentences:fm(t.customSentences,t.custom),customEditingId:typeof t.customEditingId=="string"?t.customEditingId:null,customDraft:Gr(t.customDraft||e.customDraft),customMessage:typeof t.customMessage=="string"?t.customMessage:e.customMessage,customStatus:typeof t.customStatus=="string"?t.customStatus:e.customStatus}}function Gr(e={}){var t,n,s,r,a,l,c,u;return{jp:String((n=(t=e.jp)!=null?t:e.sentence)!=null?n:""),hiragana:String((r=(s=e.hiragana)!=null?s:e.reading)!=null?r:""),ru:String((l=(a=e.ru)!=null?a:e.translationRu)!=null?l:""),en:String((u=(c=e.en)!=null?c:e.translationEn)!=null?u:"")}}function fm(e,t){const n=[],s=new Set,r=a=>{if(!a)return;const l=dn(a.jp||ld(a)),c=ms(l);if(!c||s.has(c))return;s.add(c);const u=String(a.id||"").startsWith("custom_")?String(a.id):`custom_${xe(c).toString(36)}`;n.push({id:u,jp:l,hiragana:dn(a.hiragana||a.reading||""),ru:dn(a.ru||a.translationRu||""),en:dn(a.en||a.translationEn||""),source:"user"})};return(Array.isArray(e)?e:[]).forEach(r),(Array.isArray(t)?t:[]).forEach(r),n.slice(0,160)}function tc(e,t){return{...e,...t,activeIds:{...e.activeIds,...t.activeIds||{}},selected:{...e.selected,...t.selected||{}},checked:{...e.checked,...t.checked||{}},results:{...e.results,...t.results||{}},completed:{...e.completed,...t.completed||{}}}}function Na(){return{warmth:44,trust:40,discipline:35,curiosity:42,mood:"neutral",conversationCount:0,totalDialogueChoices:0,lastInteractionAt:null,lastInteractionDate:null,lastDecayDate:ce(),lastKnown:{learned:0,mastered:0,reviews:0,lessons:0,streak:0,wrong:0,writing:0,sentence:0},history:[]}}function nc(){return{enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",currentLine:null,currentQuestion:null,currentDecoration:null,currentEffect:null,mood:"neutral",emotion:"calm",lastSpokeAt:null,nextSpeakAt:null,recentLineIds:[],lastRoomId:null,lastSprite:null}}function sc(e,t){var n,s,r,a;return{...e,...t,warmth:ge(Number((n=t.warmth)!=null?n:e.warmth),0,100),trust:ge(Number((s=t.trust)!=null?s:e.trust),0,100),discipline:ge(Number((r=t.discipline)!=null?r:e.discipline),0,100),curiosity:ge(Number((a=t.curiosity)!=null?a:e.curiosity),0,100),lastKnown:{...e.lastKnown,...t.lastKnown||{}},history:Array.isArray(t.history)?t.history.slice(0,40):e.history}}function rc(e,t){return{...e,...t,enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,32):e.recentLineIds,currentLine:t.currentLine&&typeof t.currentLine=="object"?t.currentLine:e.currentLine,currentQuestion:t.currentQuestion&&typeof t.currentQuestion=="object"?t.currentQuestion:e.currentQuestion,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:e.currentDecoration,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion}}function xt(){return{lastSeenDate:null,lastInteractionDate:null,lastRoute:null,recentLineIds:[],recentTopics:[],daysSinceReturn:0,lastPraiseAt:null,lastWarningAt:null,timesUserChoseTalkOverStudy:0,timesUserReturnedAfterGap:0,lastReturnCountedDate:null,preferredEvaRoomBackground:null,lastKnownMood:"neutral",recentProblemCluster:null}}function _n(e,t={}){return{...e,...t,recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,30):e.recentLineIds,recentTopics:Array.isArray(t.recentTopics)?t.recentTopics.slice(0,20):e.recentTopics,daysSinceReturn:Number(t.daysSinceReturn||e.daysSinceReturn||0),timesUserChoseTalkOverStudy:Number(t.timesUserChoseTalkOverStudy||e.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(t.timesUserReturnedAfterGap||e.timesUserReturnedAfterGap||0),lastKnownMood:typeof t.lastKnownMood=="string"?t.lastKnownMood:e.lastKnownMood}}function yt(){return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),presenceState:"idle",mood:"neutral",emotion:"calm",currentPhrase:null,pendingQuestion:null,currentSkin:"idle",currentBackground:"bg_study_hub",currentDecoration:null,currentEffect:"none",activeSkin:"idle",activeBackground:"bg_study_hub",ownedSkins:["idle","default"],ownedBackgrounds:["bg_study_hub"],ownedEffects:[],ownedDecorations:[],lastEvent:null,lastQuestion:null,lastPhraseAt:0,lastEmotionChangeAt:0,lastQuestionAt:0,lastVisualChangeAt:0,lastPlayerActionAt:Date.now(),textRevealSkippedLineId:null,memory:xt(),questionHistory:[],clickCount:0,eventHistory:[],recentEvents:[],cooldowns:{emotion:18e3,phrase:65e3,question:24e4,visual:72e4}}}function hm(){const e=yt();let t=null;try{const n=localStorage.getItem(q);t=n?JSON.parse(n):null}catch(n){console.warn("Eva state reset because stored JSON is invalid.",n)}i.evaRuntime=bm(e,t||vm()),wm(),Mn()}function wm(){var r;if(!i.evaRuntime)return;i.evaRuntime.memory=_n(xt(),i.evaRuntime.memory||{});const e=i.evaRuntime.memory,t=ce(),n=e.lastSeenDate||null,s=n?Math.max(0,$n(n,t)):0;e.daysSinceReturn=s,s>0&&e.lastReturnCountedDate!==t&&(e.timesUserReturnedAfterGap=Number(e.timesUserReturnedAfterGap||0)+1,e.lastReturnCountedDate=t),e.lastSeenDate=t,e.lastRoute=i.route,e.preferredEvaRoomBackground=((r=i.progress)==null?void 0:r.selectedEvaRoomBackground)||e.preferredEvaRoomBackground||"bg_study_hub",e.lastKnownMood=i.evaRuntime.mood||e.lastKnownMood||"neutral"}function vm(){var t,n,s,r,a,l,c,u,p,d,g,f;const e=((t=i.progress)==null?void 0:t.evaAutonomy)||{};return{currentSkin:((n=i.progress)==null?void 0:n.selectedEvaSprite)||e.lastSprite||"idle",currentBackground:((s=i.progress)==null?void 0:s.selectedEvaRoomBackground)||e.lastRoomId||"bg_study_hub",currentDecoration:((a=(r=i.customization)==null?void 0:r.selected)==null?void 0:a.decoration)||((c=(l=i.customization)==null?void 0:l.selected)==null?void 0:c.frame)||null,currentEffect:((p=(u=i.customization)==null?void 0:u.selected)==null?void 0:p.effect)||"none",activeSkin:((d=i.progress)==null?void 0:d.selectedEvaSprite)||e.lastSprite||"idle",activeBackground:((g=i.progress)==null?void 0:g.selectedEvaRoomBackground)||e.lastRoomId||"bg_study_hub",lastEvent:(f=e.currentLine)!=null&&f.reason?{type:e.currentLine.reason,at:e.currentLine.at}:null}}function bm(e,t={}){return{...e,...t,version:3,updatedAt:new Date().toISOString(),presenceState:typeof t.presenceState=="string"?t.presenceState:e.presenceState,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion,currentPhrase:t.currentPhrase&&typeof t.currentPhrase=="object"?t.currentPhrase:e.currentPhrase,pendingQuestion:t.pendingQuestion&&typeof t.pendingQuestion=="object"?t.pendingQuestion:e.pendingQuestion,currentSkin:typeof t.currentSkin=="string"?t.currentSkin:e.currentSkin,currentBackground:typeof t.currentBackground=="string"?t.currentBackground:e.currentBackground,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:null,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,activeSkin:typeof t.activeSkin=="string"?t.activeSkin:t.currentSkin||e.activeSkin,activeBackground:typeof t.activeBackground=="string"?t.activeBackground:t.currentBackground||e.activeBackground,ownedSkins:Array.isArray(t.ownedSkins)?t.ownedSkins:e.ownedSkins,ownedBackgrounds:Array.isArray(t.ownedBackgrounds)?t.ownedBackgrounds:e.ownedBackgrounds,ownedEffects:Array.isArray(t.ownedEffects)?t.ownedEffects:e.ownedEffects,ownedDecorations:Array.isArray(t.ownedDecorations)?t.ownedDecorations:e.ownedDecorations,lastPhraseAt:Number(t.lastPhraseAt||e.lastPhraseAt||0),lastEmotionChangeAt:Number(t.lastEmotionChangeAt||e.lastEmotionChangeAt||0),lastQuestionAt:Number(t.lastQuestionAt||e.lastQuestionAt||0),lastVisualChangeAt:Number(t.lastVisualChangeAt||e.lastVisualChangeAt||0),lastPlayerActionAt:Number(t.lastPlayerActionAt||e.lastPlayerActionAt||Date.now()),textRevealSkippedLineId:typeof t.textRevealSkippedLineId=="string"?t.textRevealSkippedLineId:null,memory:_n(e.memory||xt(),t.memory||{}),questionHistory:Array.isArray(t.questionHistory)?t.questionHistory.slice(0,40):e.questionHistory,eventHistory:Array.isArray(t.eventHistory)?t.eventHistory.slice(0,80):e.eventHistory,recentEvents:Array.isArray(t.recentEvents)?t.recentEvents.slice(0,80):e.recentEvents,cooldowns:{...e.cooldowns,...t.cooldowns||{}},clickCount:Number(t.clickCount||e.clickCount||0)}}function Ca(){if(!i.evaRuntime)return!1;ic(),i.evaRuntime.updatedAt=new Date().toISOString(),aa=!1,An&&("cancelIdleCallback"in window?window.cancelIdleCallback(An):window.clearTimeout(An),An=0);try{return localStorage.setItem(q,JSON.stringify(i.evaRuntime)),!0}catch(e){return console.warn("Eva state could not be saved.",e),!1}}function Mn(e={}){if(!i.evaRuntime)return!1;if(e!=null&&e.immediate)return Ca();if(aa)return!0;aa=!0;const t=()=>{An=0,Ca()};return"requestIdleCallback"in window?An=window.requestIdleCallback(t,{timeout:1200}):An=window.setTimeout(t,160),!0}function Aa(){La(),Ca(),Lg()}function ic(){var n,s;if(!i.evaRuntime||!i.progress)return;const e=i.progress.selectedEvaRoomBackground||((s=(n=i.customization)==null?void 0:n.selected)==null?void 0:s.background)||"bg_study_hub",t=et().filter(r=>St(r.id));i.evaRuntime.ownedSkins=[...new Set(["idle","default",...i.progress.unlockedEvaSprites||[],...t.filter(r=>r.type==="outfit").map(r=>r.spriteId||r.id)].filter(Boolean))],i.evaRuntime.ownedBackgrounds=[...new Set(["bg_study_hub",...i.progress.unlockedBackgrounds||[],...t.filter(r=>r.type==="background").map(r=>r.id)].filter(Boolean))],i.evaRuntime.ownedEffects=[...new Set(t.filter(r=>r.type==="effect").map(r=>r.id))],i.evaRuntime.ownedDecorations=[...new Set(t.filter(r=>r.type==="decoration").map(r=>r.id))],i.evaRuntime.currentBackground=e,i.evaRuntime.activeSkin=i.evaRuntime.currentSkin||i.progress.selectedEvaSprite||"idle",i.evaRuntime.activeBackground=e}function La(){return i.progress?(i.progress.level=Fi(i.progress.xp),i.progress.updatedAt=new Date().toISOString(),ia=!1,Cn&&("cancelIdleCallback"in window?window.cancelIdleCallback(Cn):window.clearTimeout(Cn),Cn=0),IS(i.progress)):!1}function C(e={}){if(!i.progress)return!1;if(e!=null&&e.immediate)return La();if(ia)return!0;ia=!0;const t=()=>{Cn=0,La()};return"requestIdleCallback"in window?Cn=window.requestIdleCallback(t,{timeout:1200}):Cn=window.setTimeout(t,120),!0}function Hr(){var s;i.cards.forEach(r=>O(r.id)),i.progress.level=Fi(i.progress.xp),i.progress.totalMoonFragmentsEarned=Math.max(Number(i.progress.totalMoonFragmentsEarned||0),Number(i.progress.moonFragments||0),jy()),pe(),Js(),Ws(),no(),ao(),uo(),typeof ensureN1CourseProgress=="function"&&ensureN1CourseProgress();const e=wr(),t=[Li(Z(),"N5"),Li(J(),"N4"),Li(F(),"N3"),Li(z(),"N2"),Ii(Z(),"N5"),Ii(J(),"N4"),Ii(F(),"N3"),Ii(z(),"N2")].some(Boolean);[Z(),J(),F(),z(),typeof n1Course=="function"?n1Course():null].filter(Boolean).forEach(r=>km(r)),(t||e)&&C(),Qr();const n=i.lessons.find(r=>Pe(r));i.activeLessonId||(i.activeLessonId=(n==null?void 0:n.id)||((s=i.lessons[0])==null?void 0:s.id)||null)}function km(e){e&&(e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={}),e.viewedLessons=Ss(e.viewedLessons||{}),Object.entries(e.srsKanji).forEach(([t,n])=>{e.studiedKanji[t]||(e.studiedKanji[t]=n)}),Object.entries(e.studiedKanji).forEach(([t,n])=>{e.srsKanji[t]||(e.srsKanji[t]=n)}))}function Os(e,t,n=new Date().toISOString()){if(!e||!t)return"";e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={});const s=e.studiedKanji[t],r=e.srsKanji[t],a=s||r||n;return e.studiedKanji[t]=a,e.srsKanji[t]=r||a,a}function Qr(){var a,l;i.progress.learningPath=ql(wa(),i.progress.learningPath||{});const e=i.progress.learningPath,t=e.completedNodes,n=e.unlockedNodes;n[Se]=!0,(Object.keys(i.progress.seenKanji||{}).length>0||Object.keys(Z().studiedKanji||{}).length>0||Object.keys(Z().completedLessons||{}).length>0||Object.keys(i.progress.lessonCompletions||{}).length>0)&&!t[Se]&&(t[Se]=((a=i.progress.visits)==null?void 0:a.firstVisitDate)||new Date().toISOString()),Ia().forEach((c,u)=>{var p;(p=Z().completedLessons)!=null&&p[c]&&!t[c]&&(t[c]=Z().completedLessons[c]),n[c]=!0});const r=ac();e.currentNodeId=r,n[r]=!0,(l=e.activeSession)!=null&&l.nodeId&&t[e.activeSession.nodeId]&&(e.activeSession=null),e.lastUpdatedAt=new Date().toISOString()}function Ia(){var t;const e=(((t=i.n5Textbook)==null?void 0:t.items)||[]).map(n=>String(n.id||"")).filter(Boolean);return e.length?e:tg.filter(n=>/^n5-lesson-\d+$/i.test(n))}function ac(){var n;const e=((n=i.progress)==null?void 0:n.learningPath)||wa(),t=[Se,...Ia(),qn];return t.find(s=>{var r;return!((r=e.completedNodes)!=null&&r[s])})||t[t.length-1]||Se}function Ta(){var e,t;return(t=(e=i.n5Textbook)==null?void 0:e.items)!=null&&t.length?Promise.resolve(i.n5Textbook):Es||(Es=ut(X.n5Lessons).then(n=>(i.n5Textbook=Dl(n),Qr(),(i.route==="learn"||i.route==="home")&&I(),i.n5Textbook)).catch(n=>{throw Es=null,n}),Es)}function $m(e){const t=String(e||"");if(!t)return Promise.resolve(null);if(i.learningPathLessonPayloads[t])return Promise.resolve(i.learningPathLessonPayloads[t]);const n=ng[t];if(!n){const r=Gs(t);return r&&(i.learningPathLessonPayloads[t]=r),Promise.resolve(r)}if(Dr.has(t))return Dr.get(t);const s=ut(n).then(r=>(i.learningPathLessonPayloads[t]=r||Gs(t),i.route==="learn"&&i.activeLearnNodeId===t&&I(),i.learningPathLessonPayloads[t])).catch(r=>{const a=Gs(t);if(a)return i.learningPathLessonPayloads[t]=a,i.route==="learn"&&i.activeLearnNodeId===t&&I(),a;throw r}).finally(()=>{Dr.delete(t)});return Dr.set(t,s),s}function Wt(){return Qr(),i.progress.learningPath}function Ra(){var t;const e=Wt().activeSession;return!(e!=null&&e.nodeId)||(t=Wt().completedNodes)!=null&&t[e.nodeId]?null:e}function ts(){const e=Ra();return e!=null&&e.nodeId?e.nodeId:Wt().currentNodeId||ac()||Se}function oc(e){const t=ns(e);return t?w(t.title):ym(e)}function ym(e){const t=String(e||"");if(t===Se)return m()==="ru"?"Введение в маршрут":"Route introduction";if(t===qn)return m()==="ru"?"Контрольная точка N5":"N5 checkpoint";const n=mt(t);if(n)return w(n.title);const s=t.match(/n5-lesson-(\d+)/i);return s?m()==="ru"?`N5 · Урок ${s[1]}`:`N5 · Lesson ${s[1]}`:t}function jm(e){const t=ns(e);return t?w(t.summary):""}function ue(){return m()==="ru"?{route:"Маршрут обучения",intro:"Введение",checkpoint:"Контрольная точка",review:"Повторение",available:"доступно",current:"сейчас",completed:"завершено",locked:"закрыто",due:"нужно повторить",minutes:"мин",lessons:"уроки",start:"Начать учиться",resume:"Продолжить урок",next:"Следующий урок",reviewAction:"Повторить",reviewOld:"Повторить старое",continue:"Дальше",finish:"Завершить",backToMap:"К маршруту",openTextbook:"Открыть учебник",openCheckpoint:"К тесту",score:"Результат",mistakes:"Ошибки",retryMistakes:"Повторить ошибки",continuePath:"Продолжить путь",ready:"Готово",introTitle:"Как тут учиться",introSummary:"Кандзи идут по цепочке: знак -> смысл -> чтение -> пример -> повторение.",introBody:"Сначала берём один маленький блок, потом отправляем его в повторение. Не нужно держать всё в голове за раз.",introBridge:"Если что-то тяжело, это не провал. Значит, карточка просто раньше вернётся в повторение.",introQuestion:"Куда отправляются карточки после урока?",introQuestionHint:"Выбери правильный путь.",loading:"Подгружаю маршрут...",empty:"Маршрут скоро появится.",nextLesson:"Следующий шаг",lessonTrack:"Текущий уровень",reviewQueue:"К повторению",streak:"Стрик",level:"Уровень",xp:"XP",mapHint:"Сначала идём по текущему уровню. Остальные уровни остаются в учебниках.",step:"Шаг",finishHint:"После урока карточки попадут в повторение.",scoreHint:"Вернёмся к ошибкам или двинемся дальше."}:{route:"Learning path",intro:"Intro",checkpoint:"Checkpoint",review:"Review",available:"available",current:"current",completed:"done",locked:"locked",due:"review due",minutes:"min",lessons:"lessons",start:"Start learning",resume:"Resume lesson",next:"Next lesson",reviewAction:"Review",reviewOld:"Review old material",continue:"Next",finish:"Finish",backToMap:"Back to path",openTextbook:"Open textbook",openCheckpoint:"Open test",score:"Score",mistakes:"Ошибки",retryMistakes:"Retry mistakes",continuePath:"Continue path",ready:"Done",introTitle:"How this route works",introSummary:"Kanji move through a chain: sign -> meaning -> reading -> example -> review.",introBody:"Take one small block first, then send it into review. You do not need to hold everything at once.",introBridge:"If something feels hard, that is not failure. It only means the card should return sooner.",introQuestion:"Where do cards go after the lesson?",introQuestionHint:"Choose the correct path.",loading:"Loading the path...",empty:"The path will appear soon.",nextLesson:"Next step",lessonTrack:"Current level",reviewQueue:"Due now",streak:"Streak",level:"Level",xp:"XP",mapHint:"Stay on the current level here. The rest remains in textbooks.",step:"Шаг",finishHint:"After the lesson the cards move to review.",scoreHint:"Retry mistakes or keep moving."}}function Sm(){const e=ue();return{id:Se,type:"lesson",level:"INTRO",title:{ru:e.introTitle,en:e.introTitle},summary:{ru:e.introSummary,en:e.introSummary},durationMinutes:3}}function Nm(){const e=Fe();return ue(),{id:Wn,type:"review",level:"SRS",title:{ru:`Повторение: ${e}`,en:`Review: ${e}`},summary:{ru:e>0?"Карточки, которые уже нужно вернуть в память.":"Очередь пуста, можно идти дальше.",en:e>0?"Cards that should return now.":"Queue is empty, move on."},durationMinutes:Math.max(2,Math.min(12,e))}}function Cm(){return{id:qn,type:"checkpoint",level:"N5",title:{ru:"Контрольная точка N5",en:"N5 checkpoint"},summary:{ru:"Повторение блока и переход к финальному тесту уровня.",en:"Review the block and move into the level final test."},durationMinutes:12}}function Am(){return Ia().map((e,t)=>({id:e,type:"lesson",level:"N5",title:{ru:`N5 · Урок ${t+1}`,en:`N5 · Lesson ${t+1}`},summary:t===0?{ru:"Первый интерактивный урок: 4 знака, чтения, примеры и мини-практика.",en:"First interactive lesson: 4 signs, readings, examples, and mini practice."}:{ru:"Откроем карточки урока прямо из учебника.",en:"Open this lesson directly from the textbook."},durationMinutes:t===0?12:10}))}function lc(){var a,l;const e=Sm(),t=Nm(),n=Cm(),s=(l=(a=i.n5Textbook)==null?void 0:a.items)!=null&&l.length?i.n5Textbook.items.map((c,u)=>({id:c.id,type:"lesson",level:"N5",title:c.title,summary:c.goal||c.theme||{ru:"",en:""},durationMinutes:Number(c.durationMinutes||c.estimatedMinutes||10)})):Am(),r=[e];return Fe()>0&&r.push(t),[...r,...s,n]}function ns(e){const t=String(e||"");return t&&lc().find(n=>n.id===t)||null}function cc(e){var n,s;if(!e)return"locked";if(e.id===Wn)return Fe()>0?"review":"available";const t=Wt();return(n=t.completedNodes)!=null&&n[e.id]?"completed":ts()===e.id?"current":(s=t.unlockedNodes)!=null&&s[e.id]?e.type==="checkpoint"?"checkpoint":"available":"locked"}function Lm(e){const t=ue();return e==="completed"?t.completed:e==="current"?t.current:e==="available"?t.available:e==="review"?t.due:e==="checkpoint"?t.checkpoint:t.locked}function uc(){var l,c;const e=Wt(),t=Fe(),n=Ra(),s=ts(),r=ns(s),a=Number(Et().reviews||0)>=Number(i.progress.settings.dailyGoal||0);return!((l=e.completedNodes)!=null&&l[Se])&&!n?{kind:"node",label:ue().start,nodeId:Se}:n!=null&&n.nodeId?{kind:"node",label:ue().resume,nodeId:n.nodeId}:t>0?{kind:"review",label:`${ue().reviewAction}: ${t}`,nodeId:Wn}:a&&r?{kind:"node",label:ue().next,nodeId:r.id}:r?{kind:"node",label:(c=e.completedNodes)!=null&&c[Se]?ue().resume:ue().start,nodeId:r.id}:{kind:"review",label:ue().reviewOld,nodeId:Wn}}function Im(){const e=ue(),t=tj(),n=(t==null?void 0:t.level)||Bt(),s=(t==null?void 0:t.lessonId)||Xo(n),r=Un(n),a=hp(n);return{label:!!(t!=null&&t.lessonId||r&&(Object.keys(r.completedLessons||{}).length>0||r.currentLessonId&&r.currentLessonId!==a))?e.resume:e.start,level:n,lessonId:s}}function Tm(){const e=Ot(),t=Fe(),n=ue();return[{label:n.streak,value:i.progress.streak.current},{label:n.level,value:i.progress.level},{label:n.xp,value:`${e.current}/${e.next}`},{label:n.reviewQueue,value:t}]}function Rm(e){return`
      <article class="metric home-summary-card">
        <span>${o(e.label)}</span>
        <strong>${o(e.value)}</strong>
      </article>
    `}function xm(){const e=m()==="ru",t=Ya();return Oe.map(n=>{const s=It(n),r=Ki(n),a=Un(n),l=n==="N5"?En():Object.keys((a==null?void 0:a.completedLessons)||{}).length,c=Math.max(Number((s==null?void 0:s.lessonCount)||0),r.length||0),u=lt(n),p=gp(n),d=!p&&t===n,g=w((s==null?void 0:s.displayTitle)||(s==null?void 0:s.title)||{ru:`Учебник ${n}`,en:`Textbook ${n}`}),f=c>0?`${l}/${c} ${e?"уроков":"lessons"}`:e?"Без уроков":"No lessons",v=p?e?"Пройдено":"Completed":d?`${f} · ${e?"сейчас":"now"}`:u?f:Dt(n);return{level:n,title:g,note:v,status:p?"done":d?"current":u?"open":"locked"}})}function _m(e){const t=`data-action="route" data-route="textbooks" data-subroute="${h(e.level)}"`;return`
      <button class="home-route-step is-${h(e.status)}" type="button" ${t} aria-label="${h((m()==="ru"?"Открыть учебник":"Open textbook")+` ${e.level} — ${e.title}`)}">
        <span class="home-route-step-icon home-route-step-icon--level" aria-hidden="true">${o(e.level)}</span>
        <strong>${o(e.title)}</strong>
        <small>${o(e.note)}</small>
      </button>
    `}function Mm(e){var n;return`
      <button class="home-task-item" type="button" ${e.action==="route"?`data-action="route" data-route="${h(e.route||"")}"`:e.action==="home-lesson"?`data-action="home-lesson" data-level="${h(e.level||"")}" data-lesson-id="${h(e.lessonId||"")}"`:`data-action="${h(e.action)}"`}>
        <span class="home-task-item-icon" aria-hidden="true">${o(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${o(e.title)}</strong>
          <p>${o(e.detail)}</p>
        </span>
        <span class="home-task-item-count" aria-hidden="true">${o(String((n=e.count)!=null?n:0))}</span>
      </button>
    `}function dc(){const e=ts();return{title:oc(e),summary:jm(e)}}function O(e){const t=String(e);i.progress.cards[t]||(i.progress.cards[t]={state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]});const n=ra(i.progress.cards[t]);return n.successRate=Cp(n),Number.isFinite(Number(n.srsStep))?n.srsStep=ge(Math.trunc(Number(n.srsStep)),-1,63):n.srsStep=_a(n),i.progress.cards[t]=n,n}function Ks(e,t="seen"){if(!i.progress||!(e!=null&&e.id))return!1;pe();const n=new Date().toISOString();let s=!1;const r=String(e.id);return i.progress.seenCards[r]||(i.progress.seenCards[r]=n,s=!0),e.kanji&&!i.progress.seenKanji[e.kanji]&&(i.progress.seenKanji[e.kanji]={at:n,cardId:r,source:t,jlpt:e.jlpt||""},s=!0),s}function Bs(e,t="seen"){Ks(e,t)&&C()}const dt=[5/1440,1/24,12/24,1,2,4],xa=1;function _a(e){const t=Number((e==null?void 0:e.intervalDays)||0);if(!(t>0))return-1;for(let s=0;s<dt.length;s+=1)if(t<=dt[s]*1.08)return s;const n=dt[dt.length-1];return dt.length-1+Math.max(1,Math.round(Math.log2(t/n)))}function Pm(e){const t=Math.trunc(e);return t<0?0:t<dt.length?dt[t]||dt[0]:dt[dt.length-1]*2**(t-(dt.length-1))}function Em(e,t,n=xa){const s=Array.isArray(e)?e.slice():[],r=Array.isArray(t)?t.slice():[],a=[],l=Math.max(1,Math.trunc(Number(n)||xa));let c=0,u=0,p=0;for(;c<s.length||u<r.length;){if(p>=l&&u<r.length){a.push(r[u++]),p=0;continue}if(c<s.length){a.push(s[c++]),p+=1;continue}if(u<r.length){a.push(r[u++]),p=0;continue}break}return a}function Dm(e,t){const n=_a(e);return t==="again"?0:t==="hard"?n<1?1:n:t==="easy"?n<0?2:n+2:n<0?0:n+1}function Om(e){const t=Math.max(1,Math.round(e*24*60));if(t<60)return m()==="ru"?`${t} мин.`:`${t} min`;const n=Math.round(t/60);if(n<24)return m()==="ru"?`${n} ?.`:`${n} h`;const s=Math.round(n/24);return m()==="ru"?`${s} ??.`:`${s} d`}function Xr(e){const t=e.state==="Learning"?3:e.state==="Review"?2:e.state==="Mastered"?1:0,n=Number(e.lapses||0),s=Number(e.wrong||0),r=Number(e.correct||0);return t+n*4+s*2-r*.05}function qt(e,t,n="jlpt_lesson"){if(!t)return!1;const r=pc(e,t).reduce((a,l)=>Ks(l,n)||a,!1);return r&&C(),r}function pc(e,t){const n=String(e||"").toUpperCase();return n==="N5"?nn(t):n==="N4"?Zs(t):n==="N3"?tr(t):n==="N2"?sr(t):((t==null?void 0:t.kanji)||[]).map(s=>i.cards.find(r=>r.kanji===s&&String(r.jlpt||"").toUpperCase()===n)).filter(Boolean)}function Km(e){var n,s;const t=(s=(n=i.progress)==null?void 0:n.cards)==null?void 0:s[String((e==null?void 0:e.id)||"")];return t?t.state&&t.state!=="New"?!0:!!(t.lastReviewedAt||t.lastReviewedAt||Number(t.reviewCount||0)>0||Number(t.correct||0)>0||Number(t.wrong||0)>0||Number(t.lapses||0)>0):!1}function gc(){return pe(),i.progress.evaRoomQuiz}function mc(){const e=[i.cards||[],typeof Nt=="function"?Nt():[],typeof Xe=="function"?Xe():[],typeof qe=="function"?qe():[],typeof Ye=="function"?Ye():[]];return fc(e.flat().filter(Boolean))}function Bm(){if(!i.progress)return[];pe();const e=new Set(Object.keys(i.progress.seenCards||{})),t=new Set(Object.keys(i.progress.seenKanji||{})),n=new Set(Object.keys(i.progress.lessonCompletions||{})),s=Fm(),r=mc().filter(a=>{if(!(a!=null&&a.id)||!a.kanji||!Ee(a,"ru")||!Ee(a,"en"))return!1;const l=String(a.jlpt||"").toUpperCase();return e.has(String(a.id))||t.has(a.kanji)||Km(a)||n.has(a.lessonId)||s.has(`${l}:${a.kanji}`)||s.has(a.kanji)});return fc(r)}function Fm(){const e=new Set,t=(n,s)=>{if(!s)return;const r=String(n||"").toUpperCase();e.add(String(s)),r&&e.add(`${r}:${s}`)};return Ma().forEach(n=>{const s=n.course();Object.keys(s.studiedKanji||{}).forEach(r=>t(n.level,r)),Object.keys(s.completedLessons||{}).forEach(r=>{const a=n.lessonById(r);((a==null?void 0:a.kanji)||[]).forEach(l=>t(n.level,l))})}),e}function Ma(){return[{level:"N5",course:Z,lessonById:mt,markStudied:cs,markDifficult:Vs},{level:"N4",course:J,lessonById:sn,markStudied:us,markDifficult:er},{level:"N3",course:F,lessonById:an,markStudied:ds,markDifficult:nr},{level:"N2",course:z,lessonById:ln,markStudied:ps,markDifficult:rr}]}function fc(e){const t=new Set;return e.filter(n=>{const s=`${n.kanji}:${Ee(n,"ru")}:${Ee(n,"en")}`;return t.has(s)?!1:(t.add(s),!0)})}function zm(e){var a,l,c,u,p,d,g;if((a=e.target.classList)!=null&&a.contains("detail-backdrop")){_("menu_close"),i.detailCardId=null,de();return}if((l=e.target.classList)!=null&&l.contains("final-test-backdrop")){i.finalTestModal=null,i.finalTestBusy=!1,de();return}const t=e.target.closest(".nav-popover, .bottom-nav");if(i.navMenu&&!t&&!e.target.closest("[data-action]")){i.navMenu=null,de();return}const n=e.target.closest("[data-action]");if(!n)return;const s=n.dataset.action,r=n.dataset.id;if(!(["eva-click","eva-autonomy-next","eva-question-answer"].includes(s)&&Date.now()-Tl<280)){if(s&&s.endsWith("-complete-lesson")){const v=`${s.split("-")[0]}:${r||""}`;if(we.has(v)){n&&(n.disabled=!0,n.textContent=m()==="ru"?"Урок завершён":"Lesson completed");return}}if(Pa(s),requestAnimationFrame(()=>window.setTimeout(()=>Gm(s,n),0)),s==="route"){const f=n.dataset.route;if(n.closest(".bottom-nav")&&Yr(f)){hf(f);return}i.navMenu=null,f==="writing"&&i.detailCardId&&(i.activeCardId=i.detailCardId),He(f,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="nav-menu-route"){const f=n.dataset.route;i.navMenu=null,f==="writing"&&i.detailCardId&&(i.activeCardId=i.detailCardId),He(f,n.dataset.focus||null,n.dataset.subroute||null)}if(s==="share-page"&&vp(n.dataset.shareSection||i.route,Yy(n)).catch(()=>U(m()==="ru"?"Не удалось поделиться":"Share failed")),s==="toggle-header-socials"&&jp(!Zo()),s==="notification-center"){if(i.notificationPromptVisible){Lp();return}((c=i.notificationPrompt)!=null&&c.docked||Xi("header"))&&Wi("header");return}if(s==="repeat-onboarding"){Ka({force:!0});return}if(s==="onboarding-next"){Ac();return}if(s==="onboarding-prev"){Lc();return}if(s==="onboarding-continue"){gf();return}if(s==="onboarding-close"||s==="onboarding-skip"){zs({completed:s==="onboarding-close"});return}if(s==="dismiss-mascot-speech"){Nd(n.dataset.speechKey||"");return}if(s==="contact-email"&&(i.navMenu=null,i.contactModal=!0,de()),s==="copy-contact-email"&&$p(Ut).then(f=>{U(f?m()==="ru"?"Email скопирован":"Email copied":m()==="ru"?"Не удалось скопировать email":"Could not copy email")}),s==="close-contact-modal"&&(i.contactModal=!1,de()),s==="close-pwa-install-help"&&(i.pwaInstallHelpVisible=!1,de()),s==="close-nav-menu"&&(i.navMenu=null,de()),s==="close-final-test-modal"&&(i.finalTestModal=null,i.finalTestBusy=!1,i.pendingFocus=null,de()),s==="final-test-focus-missing"){const f=n.dataset.focus||((u=i.finalTestModal)==null?void 0:u.focusSelector)||null;i.finalTestModal=null,i.finalTestBusy=!1,i.pendingFocus=f,de()}if(s==="final-test-force-submit"){const f=String(n.dataset.level||((p=i.finalTestModal)==null?void 0:p.level)||"N5").toUpperCase();f==="N4"?Ru(!0):f==="N3"?Ju(!0):f==="N2"?td(!0):f==="N1"?submitN1FinalTest(!0):bu(!0)}if(s==="final-test-next-level"){const f=Y(n.dataset.nextLevel||""),v=String(n.dataset.nextLesson||"");if(!f||!v)return;i.finalTestModal=null,i.finalTestBusy=!1,i.pendingFocus=null,Bi(f,v);return}if(s==="scroll-page-edge"&&((n.dataset.direction||Ba())==="up"?Vr():mf()),s==="theme"&&bj(),s==="language"&&kj(),s==="sound"&&yp(),s==="toggle-ux-sound"&&$j(),s==="export"&&Vy(),s==="import"&&Rl.click(),s==="reset"&&vj(),s==="share-achievement"&&dj().catch(()=>U(A("shareFallback"))),s==="pwa-install"&&Hj(),s==="pwa-later"&&al(),s==="notification-allow"&&Vj(),s==="notification-later"&&qi(),s==="mascot-click"&&J$(n.dataset.character),s==="eva-click"&&Td(),s==="eva-dialogue-skip"&&Um(n),s==="dictionary-favorites-tab"&&(i.filters.favorites=n.dataset.favorites||"all",i.dictionaryVisibleCount=Rs,de()),s==="set-learn-jlpt"){i.activeLearnJlpt=String(n.dataset.jlpt||"all").toUpperCase();const f=Va();tu(f),i.activeCardId=null,de()}if(s==="dictionary-load-more"&&(i.dictionaryVisibleCount+=eg,de()),s==="toggle-favorite"&&Ny(r),s==="eva-room-choice"&&Sh(n),s==="eva-question-answer"&&fh(n),s==="eva-room-reset"&&Ch(),s==="toggle-eva-autonomy"&&Ph(),s==="cycle-eva-autonomy"&&Eh(),s==="eva-autonomy-room-mode"&&Dh(),s==="eva-autonomy-outfit-mode"&&Oh(),s==="eva-autonomy-next"&&Zc(),s==="eva-autonomy-clear"&&Kh(),s==="eva-room-shop-open"&&(i.evaRoomShopOpen=!0,Ce("shop_opened"),de()),s==="eva-room-shop-close"&&(i.evaRoomShopOpen=!1,de()),s==="eva-bg-buy"&&Ah(r),s==="eva-bg-select"&&Lh(r),s==="eva-sprite-buy"&&Ih(r),s==="eva-sprite-select"&&Th(r),s==="shop-category"&&(i.shopFilters.category=n.dataset.category||"all",de()),s==="shop-filter"&&(i.shopFilters.view=n.dataset.filter||"all",de()),s==="shop-sort"&&(i.shopFilters.sort=n.dataset.sort||"featured",de()),s==="shop-buy"&&li(r),s==="shop-select"&&ci(r),s==="shop-clear-effect"&&Yc(r),s==="shop-clear-item"&&_h(r),s==="clear-writing"&&ey(),s==="undo-writing"&&ty(),s==="check-writing"&&ny(!0),s==="replay-writing"&&Pd(),s==="play-writing-step"&&Ed(),s==="writing-step-prev"&&Dd(-1),s==="writing-step-next"&&Dd(1),s==="select-writing-step"&&Od(Number(n.dataset.index||0),!0),s==="insert-sentence-tile"&&Nk(Number(n.dataset.index)),s==="undo-sentence-tile"&&Ck(),s==="clear-sentence"&&Ak(),s==="check-sentence"&&Lk(),s==="next-sentence"&&Tk(),s==="reading-review-tile"&&Rw(Number(n.dataset.index)),s==="reading-review-undo"&&xw(),s==="reading-review-clear"&&_w(),s==="reading-review-check"&&fu(),s==="reading-review-answer"&&Tw(n),s==="toggle-reading-translation"&&Mw(),s==="add-custom-sentence"&&uk(),s==="edit-custom-sentence"&&pk(n.dataset.id),s==="delete-custom-sentence"&&gk(n.dataset.id),s==="cancel-custom-sentence-edit"&&mk(),s==="insert-jlpt-tile"&&Hy(Number(n.dataset.index)),s==="undo-jlpt-tile"&&Qy(),s==="clear-jlpt-practice"&&Xy(),s==="check-jlpt-practice"&&Wy(),s==="next-jlpt-practice"&&qy(),s==="n5-open-lesson"&&Bw(r),s==="n5-overview"&&Fw(),s==="n5-review"&&zw(n.dataset.mode||null),s==="n5-answer"&&Pw(n),s==="n5-check-input"&&Ew(r),s==="n5-srs"&&wu(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n5-writing-done"&&Ow(r),s==="n5-complete-lesson"&&Kw(r),s==="jlpt-lesson-answer"&&Dw(n.dataset.level||"",n.dataset.lesson||n.dataset.lessonId||"",n.dataset.card||r,String(n.dataset.value||"")==="remember"),s==="n5-final-answer"&&Gw(n),s==="n5-final-submit"&&bu(),s==="n5-final-reset"&&Hw(),s==="n4-open-lesson"&&wv(r),s==="n4-overview"&&vv(),s==="n4-review"&&bv(n.dataset.mode||null),s==="n4-kanji"&&kv(),s==="n4-grammar"&&$v(),s==="n4-reading"&&yv(),s==="n4-listening"&&jv(),s==="n4-final"&&Sv(),s==="n4-answer"&&uv(n),s==="n4-check-input"&&dv(r),s==="n4-srs"&&Lu(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n4-writing-done"&&pv(r),s==="n4-complete-lesson"&&gv(r),s==="n4-grammar-complete"&&mv(r,n.dataset.value||""),s==="n4-reading-complete"&&fv(r,n.dataset.question||"",n.dataset.value||""),s==="n4-listening-complete"&&hv(r,n.dataset.question||"",n.dataset.value||""),s==="n4-final-answer"&&Av(n),s==="n4-final-submit"&&Ru(),s==="n4-final-reset"&&Lv(),s==="n3-open-lesson"&&eb(r),s==="n3-overview"&&tb(),s==="n3-review"&&nb(n.dataset.mode||null),s==="n3-kanji"&&sb(),s==="n3-grammar"&&rb(),s==="n3-reading"&&ib(),s==="n3-listening"&&ab(),s==="n3-final"&&ob(),s==="n3-answer"&&Qv(n),s==="n3-check-input"&&Xv(r),s==="n3-srs"&&Bu(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n3-writing-done"&&Wv(r),s==="n3-complete-lesson"&&qv(r),s==="n3-grammar-complete"&&Vv(r,n.dataset.value||""),s==="n3-reading-complete"&&Yv(r,n.dataset.question||"",n.dataset.value||""),s==="n3-listening-complete"&&Zv(r,n.dataset.question||"",n.dataset.value||""),s==="n3-final-answer"&&ub(n),s==="n3-final-submit"&&Ju(),s==="n3-final-reset"&&db(),s==="n2-open-lesson"&&Db(r),s==="n2-overview"&&Ob(),s==="n2-review"&&Kb(n.dataset.mode||null),s==="n2-kanji"&&Bb(),s==="n2-grammar"&&Fb(),s==="n2-reading"&&zb(),s==="n2-listening"&&Jb(),s==="n2-final"&&Ub(),s==="n2-answer"&&Tb(n),s==="n2-check-input"&&Rb(r),s==="n2-srs"&&Yu(r,n.dataset.rating||"good",n.dataset.source||"review"),s==="n2-writing-done"&&xb(r),s==="n2-complete-lesson"&&_b(r),s==="n2-grammar-complete"&&Mb(r,n.dataset.value||""),s==="n2-reading-complete"&&Pb(r,n.dataset.question||"",n.dataset.value||""),s==="n2-listening-complete"&&Eb(r,n.dataset.question||"",n.dataset.value||""),s==="n2-final-answer"&&Qb(n),s==="n2-final-submit"&&td(),s==="n2-final-reset"&&Xb(),s==="review-exercise-next"){or(),i.pendingFocus="__scroll-top__",I();return}if(s==="play-kanji-audio"){const f=ae(r)||ae(i.activeCardId);f&&(n.dataset.ttsText||n.dataset.ttsKind?dp(f,{text:n.dataset.ttsText||"",kind:n.dataset.ttsKind||"cycle",label:n.dataset.ttsLabel||"",fallback:()=>up(f)}):cp(f))}if(s==="open-jlpt-lesson"){const f=String(n.dataset.jlpt||"").toUpperCase();if(vn(f)){if(!lt(f)){i.activeTextbookLevel=f,i.activeJlptLesson=f,He("textbooks",null,f),U(Dt(f));return}i.activeJlptLesson=f,He("jlpt-lesson",null,f)}}if(s==="open-jlpt-lesson-start"&&Bi(n.dataset.jlpt||Bt()),s==="social-link"&&bn(`social_${String(n.dataset.network||"").toLowerCase()}_opened`,{network:n.dataset.network||"",section:i.route}),s==="play-audio"&&Ky(n.dataset.audio,n.dataset.label),s==="close-reward"&&(i.rewardModal=i.rewardQueue.shift()||null,i.rewardModal&&xd(i.rewardModal),I()),s==="set-goal"&&(i.progress.settings.dailyGoal=Number(n.dataset.goal),C(),U(`${A("dailyGoal")}: ${i.progress.settings.dailyGoal}`),I()),s==="buy-shop"&&li(r),s==="start-due"&&(He("textbooks"),Fe()||U(De("eva","welcome"))),s==="home-lesson"){const f=Y(n.dataset.level||"")||Bt(),v=String(n.dataset.lessonId||"");Bi(f,v)}if(s==="home-review"&&(Fe()?He("review"):U(m()==="ru"?"Пока нет повторений.":"No reviews are due right now.")),s==="home-primary"&&Qh(),s==="learning-path-node"&&nu(n.dataset.node||r),s==="learning-path-back"&&Pn(),s==="learning-path-choice"){const f=String(n.dataset.node||""),v=String(n.dataset.step||""),b=String(n.dataset.value||""),$=Hs(f),S=$.steps.find(j=>j.id===v);if(!S||S.kind!=="quiz"||(d=$.session.answers)!=null&&d[v])return;$.session.answers[v]={selected:b,correct:b===S.answer,at:new Date().toISOString()},b===S.answer?$.session.score=Number($.session.score||0)+1:$.session.mistakes=[...new Set([...$.session.mistakes||[],v])],$.session.updatedAt=new Date().toISOString(),C(),I()}if(s==="learning-path-step-next"){const f=String(n.dataset.node||i.activeLearnNodeId||""),v=Hs(f);if(!v.steps.length)return;const b=v.steps[v.session.stepIndex];if((b==null?void 0:b.kind)==="quiz"&&!((g=v.session.answers)!=null&&g[b.id]))return;v.session.stepIndex=Math.min(v.session.stepIndex+1,v.steps.length),v.session.updatedAt=new Date().toISOString(),C(),I()}if(s==="learning-path-retry"){const f=String(n.dataset.node||i.activeLearnNodeId||""),b=(Hs(f).session.mistakes||[]).slice();Wt().activeSession=ba({nodeId:f,mode:"mistakes",stepIndex:0,answers:{},mistakes:[],reviewStepIds:b,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),C(),I()}if(s==="learning-path-continue"){const f=String(n.dataset.node||i.activeLearnNodeId||""),v=Hs(f);Yh(f,v.session,v.steps),Pn();return}if(s==="start-lesson"||s==="select-lesson"){const f=i.lessons.find(v=>v.id===r);if(!f||!Pe(f)){U(`${A("unlockedAt")} ${Di(f)}`);return}if(i.activeLessonId=r,i.activeCardId=null,i.revealed=!1,Lt(),s==="start-lesson"){Ce("lesson_start",{lessonId:r,jlpt:f.jlpt});const v=String(f.jlpt||"").toUpperCase();/^n[2-5]-lesson-\d+$/i.test(f.id)&&["N5","N4","N3","N2"].includes(v)?(He("textbooks",null,v),i.activeTextbookSubroute=f.id,history.replaceState(null,"",`#textbooks/${encodeURIComponent(v)}/${encodeURIComponent(f.id)}`),I()):Pn(Nn,f.id)}else I()}if(s==="show-answer"&&(Bs(ae(i.activeCardId),"show_answer"),i.revealed=!0,Lt(),Qe()),s==="check-reading"){const f=document.getElementById(`readingCheck-${r||i.activeCardId}`);f&&(i.readingCheck.value=f.value,i.readingCheck.cardId=r||i.activeCardId),Vd()}if(s==="rate"&&E$(n.dataset.rating),s==="open-card"&&(Bs(ae(r),"card_details"),i.detailCardId=r,I()),s==="open-kanji-page"&&Wm(r),s==="close-detail"&&(i.detailCardId=null,de()),s==="study-card"){const f=ae(r);if(!f)return;Bs(f,"study_card"),i.activeLessonId=f.lessonId,i.activeCardId=f.id,i.revealed=!1,Lt(f.id),i.detailCardId=null,Pn(Nn,f.lessonId)}}}function Jm(e){var s,r;const t=(r=(s=e.target).closest)==null?void 0:r.call(s,'[data-action="eva-click"], [data-action="eva-autonomy-next"]');if(!t||t.disabled)return;const n=t.dataset.action;Tl=Date.now(),e.preventDefault(),Pa(n),n==="eva-click"&&Td(),n==="eva-autonomy-next"&&Zc()}function Pa(e="activity"){i.evaRuntime&&(i.evaRuntime.lastPlayerActionAt=Date.now(),i.evaRuntime.memory=_n(xt(),i.evaRuntime.memory||{}),i.evaRuntime.memory.lastRoute=i.route,e.startsWith("eva")&&(i.evaRuntime.memory.lastInteractionDate=ce()),["eva-autonomy-next","eva-question-answer"].includes(e)&&(i.evaRuntime.lastPlayerActionAt=Date.now()))}function Um(e){var n,s;if(!i.evaRuntime)return;const t=((n=e==null?void 0:e.dataset)==null?void 0:n.lineId)||((s=ee().currentLine)==null?void 0:s.id)||"";!t||i.evaRuntime.textRevealSkippedLineId===t||(i.evaRuntime.textRevealSkippedLineId=t,Mn(),I())}function Gm(e,t){if(!(!e||t!=null&&t.disabled)&&!Hm(e,t)&&!["eva-room-choice","eva-bg-buy","eva-bg-select"].includes(e)){if(e==="eva-room-shop-open"){_("menu_open");return}if(e==="eva-room-shop-close"){_("menu_close");return}if(e==="route"){if(t!=null&&t.closest(".bottom-nav")&&Yr(t.dataset.route)){_(i.navMenu===t.dataset.route?"menu_close":"menu_open");return}_("tab_switch");return}if(e==="nav-menu-route"){_("tab_switch");return}if(e==="close-nav-menu"){_("menu_close");return}if(e==="toggle-header-socials"){_(Zo()?"menu_close":"menu_open");return}if(e==="show-answer"||e==="open-card"){_("card_flip");return}if(["close-reward","close-detail","close-pwa-install-help","pwa-later","notification-later","dismiss-mascot-speech"].includes(e)){_("menu_close");return}if(e==="notification-center"){_("notification_soft");return}if(["start-lesson","select-lesson","next-sentence","study-card","rate","open-jlpt-lesson","n5-open-lesson","n5-overview","n5-review","n4-open-lesson","n4-overview","n4-review","n4-kanji","n4-grammar","n4-reading","n4-listening","n4-final","n3-open-lesson","n3-overview","n3-review","n3-kanji","n3-grammar","n3-reading","n3-listening","n3-final","n2-open-lesson","n2-overview","n2-review","n2-kanji","n2-grammar","n2-reading","n2-listening","n2-final"].includes(e)){_("page_turn");return}if(["n5-answer","n5-check-input","n5-srs","n5-writing-done","n5-complete-lesson","n5-final-answer","n5-final-submit","n4-answer","n4-check-input","n4-srs","n4-writing-done","n4-complete-lesson","n4-grammar-complete","n4-reading-complete","n4-listening-complete","n4-final-answer","n4-final-submit","n3-answer","n3-check-input","n3-srs","n3-writing-done","n3-complete-lesson","n3-grammar-complete","n3-reading-complete","n3-listening-complete","n3-final-answer","n3-final-submit","n2-answer","n2-check-input","n2-srs","n2-writing-done","n2-complete-lesson","n2-grammar-complete","n2-reading-complete","n2-listening-complete","n2-final-answer","n2-final-submit","n1-answer","n1-check-input","n1-srs","n1-writing-done","n1-complete-lesson","n1-grammar-complete","n1-reading-complete","n1-listening-complete","n1-final-answer","n1-final-submit","jlpt-lesson-answer"].includes(e)){_("button_click");return}if(["pwa-install","notification-allow","notification-center","set-goal"].includes(e)){_("notification_soft");return}t!=null&&t.matches("button, .btn, [role='button']")&&_("button_click"),e!=="toggle-header-socials"&&jp(!1)}}function Hm(e,t){return["learn","review"].includes(i.route)?new Set(["show-answer","rate","check-reading","play-kanji-audio","start-lesson","select-lesson","study-card"]).has(e)||!!(t!=null&&t.closest(".study-card, .study-layout")):!1}function hc(e){Pa("input");const t=e.target.closest("[data-ux-volume]");if(t){Cj(Number(t.value)/100);const c=document.querySelector("[data-ux-volume-label]");c&&(c.textContent=`${Math.round(Ui()*100)}%`);return}const n=e.target.closest("[data-reading-input]");if(n){i.readingCheck={cardId:n.dataset.id||i.activeCardId,value:n.value,status:null,message:""};return}const s=e.target.closest("[data-sentence-draft]");if(s){const c=Re(),u=s.dataset.sentenceDraft;c.customDraft=Gr(c.customDraft||{}),u&&Object.prototype.hasOwnProperty.call(c.customDraft,u)&&(c.customDraft[u]=s.value,c.customMessage="",c.customStatus="",C());return}const r=e.target.closest("[data-filter]");if(!r)return;const a=r.dataset.filter,l=r.selectionStart;i.filters[a]=r.value,i.dictionaryVisibleCount=Rs,I(),requestAnimationFrame(()=>{const c=document.getElementById(r.id);c&&(c.focus(),typeof l=="number"&&"setSelectionRange"in c&&c.setSelectionRange(l,l))})}function Qm(e){var n,s;if(df(e)||Xm(e))return;if(e.key==="Escape"&&(i.detailCardId||i.rewardModal||i.finalTestModal||i.contactModal||i.pwaInstallHelpVisible||i.navMenu)){i.detailCardId=null,i.rewardModal=null,i.finalTestModal=null,i.contactModal=!1,i.pwaInstallHelpVisible=!1,i.navMenu=null,I();return}const t=(s=(n=e.target).closest)==null?void 0:s.call(n,"[data-reading-input]");!t||e.key!=="Enter"||(e.preventDefault(),i.readingCheck.value=t.value,i.readingCheck.cardId=t.dataset.id||i.activeCardId,Vd())}function Xm(e){var n;const t=e.target;return(n=t==null?void 0:t.closest)!=null&&n.call(t,"input, textarea, select, [contenteditable='true']")||e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||(Or=`${Or}${e.key.toLowerCase()}`.slice(-le.length),Or!==le)?!1:(Or="",wc(5e3),!0)}function wc(e=5e3){const t=Math.max(1,Math.min(999999,Math.floor(Number(e)||5e3)));return i.progress?(Q(0,t,"cheat:moon_farm"),V(),C(),_("moon_fragment_gain"),U(m()==="ru"?`Чит активирован: +${t} Moon`:`Cheat activated: +${t} Moon`),I(),i.progress.moonFragments):0}function Pn(e=xs,t=null,n=null){i.route="learn",i.activeLearnView=e,i.activeLearnNodeId=e===Gt&&String(t||"")||null,i.activeLearnLegacyLessonId=e===Nn&&String(t||"")||null;const s=e===Gt&&t?`#learn/lesson/${encodeURIComponent(String(t))}`:e===Nn&&t?`#learn/legacy/${encodeURIComponent(String(t))}`:"#learn";location.hash!==s&&history.replaceState(null,"",s),i.activeTextbookLevel=null,i.activeTextbookSubroute=null,i.kanjiPageId=null,i.detailCardId=null,i.revealed=!1,i.navMenu=null,i.finalTestModal=null,i.finalTestBusy=!1,i.contactModal=!1,i.pendingFocus=n,i.evaRoomShopOpen=!1,Lt(),Yt(),de()}function He(e,t=null,n=null){if(e==="learn"){Pn(xs,null,t);return}const s=i.route;if(i.route=Zp.includes(e)?e:"home",s!==i.route&&(s==="review"||i.route==="review")&&(i.reviewSession=null),i.route==="textbooks"?(i.activeTextbookLevel=n?String(n).toUpperCase():null,i.activeTextbookSubroute=null):i.route==="jlpt-lesson"?i.activeJlptLesson=n?String(n).toUpperCase():i.activeJlptLesson||ml()||null:(i.activeTextbookLevel=null,i.activeTextbookSubroute=null),i.route!=="review"&&or(),i.route==="textbooks")zt(Pp(i.activeTextbookLevel||"",i.activeTextbookSubroute||""));else{const r=i.route==="learn"?"#learn":i.route==="jlpt-lesson"&&i.activeJlptLesson?`#jlpt-lesson/${encodeURIComponent(i.activeJlptLesson)}`:`#${i.route}`;zt(r)}i.route!=="kanji"&&(i.kanjiPageId=null),i.detailCardId=null,i.revealed=!1,i.navMenu=null,i.finalTestModal=null,i.finalTestBusy=!1,i.contactModal=!1,i.pendingFocus=t,i.route!=="eva-room"&&(i.evaRoomShopOpen=!1),Lt(),Yt(),Qe(),i.route==="eva-room"&&Ce("room_opened")}function Wm(e){const t=ae(e);if(!t)return;i.route="kanji",i.kanjiPageId=t.id,i.detailCardId=null,i.revealed=!1,i.navMenu=null,i.pendingFocus=null,i.finalTestModal=null,i.finalTestBusy=!1,i.contactModal=!1,i.evaRoomShopOpen=!1,Lt();const n=`#kanji/${encodeURIComponent(t.id)}`;zt(n),Yt(),Qe()}function vc(){const e=ag.begin(i.route);Mr=!0,Pr=null,gy();try{Nf();let t="";if(i.route==="home"&&(t=Af()),i.route==="about"&&(t=yf()),i.route==="learn"&&(t=Hh(),i.pendingFocus!=="lesson-tabs"&&requestAnimationFrame(Jo)),i.route==="review"&&(t=tk(),i.pendingFocus!=="sentence-practice"&&requestAnimationFrame(Jo)),i.route==="dictionary"&&(t=Xk()),i.route==="kanji"&&(t=Zk()),i.route==="writing"&&(t=w$(),requestAnimationFrame(q$)),i.route==="stats"&&(t=$$(),requestAnimationFrame(_d)),i.route==="achievements"&&(t=S$()),i.route==="eva-room"&&(t=xf()),i.route==="jlpt-lesson"&&(t=tw()),i.route==="textbooks"&&(t=nw()),!e.isCurrent())return;Qt.innerHTML=`${t}${kf()}${Vm()}`,document.body.classList.toggle("modal-open",!!(i.detailCardId||i.rewardModal||i.finalTestModal||i.contactModal||i.pwaInstallHelpVisible)),M$(),requestAnimationFrame(()=>{Sf(),Fa(),lf()})}catch(t){e.isCurrent()&&(console.error(`[Flash Kanji] route=${i.route} build=${K}`,(t==null?void 0:t.stack)||t),Qt.innerHTML=qm(t))}finally{Mr=!1}}function de(){Vn||(Vn=requestAnimationFrame(()=>{Vn=0,vc()}))}function Qe(){Vn&&(cancelAnimationFrame(Vn),Vn=0),vc()}function I(){de()}function qm(e){const t=e instanceof Error?e.message:String(e||"Unknown route error");return`<section class="page empty-state" data-route-error="${h(i.route)}"><h1>${o(m()==="ru"?"Не удалось открыть раздел":"Could not open this section")}</h1><p>${o(t)}</p><button class="btn primary" type="button" data-action="route" data-route="home">${o(m()==="ru"?"На главную":"Home")}</button></section>`}function Vm(){const e=`${jf()}${b$()}${A$()}${Mk()}${L$()}${I$()}${T$()}${R$()}${ff()}`;return e?`<div class="modal-layer">${e}</div>`:""}function bc(){return he!=null&&he.isConnected?he:document.body?(he||(he=document.createElement("div"),he.className="flash-kanji-onboarding-root",he.setAttribute("role","presentation"),he.setAttribute("aria-hidden","false")),he.isConnected||document.body.appendChild(he),he):null}const Ea=[{target:null,title:{ru:"Добро пожаловать",en:"Welcome"},text:{ru:"Привет! Я Ева. Быстро покажу, где что находится и как пользоваться Flash Kanji.",en:"Hi! I am Eva. I will quickly show you where everything is and how Flash Kanji works."}},{target:"[data-tour='home-lesson']",title:{ru:"Учебники",en:"Textbooks"},text:{ru:"Это главный вход в Flash Kanji. Здесь открываются учебники N5-N1 и путь к урокам каждого уровня.",en:"This is the main entrance to Flash Kanji. Open N5-N1 textbooks here and continue into each level's lessons."}},{target:"[data-tour='srs-review']",title:{ru:"Повторение",en:"Review"},text:{ru:"Изученные карточки возвращаются в повторение, чтобы закрепляться в памяти.",en:"Learned cards come back here for spaced repetition so they stay in memory."}},{target:"[data-tour='dictionary']",title:{ru:"Словарь",en:"Dictionary"},text:{ru:"В словаре можно посмотреть значения, чтения, примеры и подробности по каждому кандзи.",en:"The dictionary lets you check meanings, readings, examples, and kanji details."}},{target:["[data-tour='eva-room']","[data-tour='profile-progress']","[data-tour='profile-progress-nav']"],title:{ru:"Комната Евы",en:"Eva room"},text:e=>{var t;return((t=e==null?void 0:e.dataset)==null?void 0:t.tour)==="eva-room"?{ru:"Это моя комната. Здесь можно поговорить со мной, менять облик и тратить Moon Fragments.",en:"This is my room. You can talk to me here, change the look, and spend Moon Fragments."}:{ru:"Если комнаты Евы на этой странице нет, посмотри на стрик и статистику.",en:"If Eva Room is not on this page, check the streak and progress stats instead."}}}],Wr={title:{ru:"Готово!",en:"All set!"},text:{ru:"Открой учебники и начни с N5. Я рядом.",en:"Open the textbooks and start with N5. I will be right here."},start:{ru:"Открыть учебники",en:"Open textbooks"},close:{ru:"Закрыть",en:"Close"}};function kc(){try{return localStorage.getItem(vl)==="true"}catch(e){return!1}}function Ym(){try{return localStorage.getItem(kl)||""}catch(e){return""}}function qr(e){try{localStorage.setItem(kl,e)}catch(t){console.warn("Could not save onboarding audience.",t)}}function Zm(e=i.progress){var t,n,s,r;return e?Number(e.appOpens||0)>0||Object.keys(e.lessonCompletions||{}).length>0||Object.keys(e.cards||{}).length>0||Object.keys(e.seenKanji||{}).length>0||Object.keys(e.daily||{}).length>0||Object.keys(e.favorites||{}).length>0||Object.keys(e.transactions||{}).length>0||Number(e.totalMoonFragmentsEarned||0)>0||Number(((t=e.secrets)==null?void 0:t.evaClicks)||0)>0||((n=e.secrets)!=null&&n.nightVisit?1:0)>0||Number(((s=e.visits)==null?void 0:s.streak)||0)>0||Number(((r=e.visits)==null?void 0:r.bestStreak)||0)>0:!1}function ef(e=!1){const t=Ym();return t==="returning"||t==="completed"?t:kc()?(qr("completed"),"completed"):e?(qr("returning"),"returning"):(qr("new"),"new")}function $c(){return!kc()}function tf(){try{localStorage.getItem(bl)==="true"&&localStorage.removeItem(bl)}catch(e){console.warn("Could not clear legacy onboarding state.",e)}}function nf(){try{localStorage.setItem(vl,"true"),qr("completed")}catch(e){console.warn("Could not save onboarding completion.",e)}}function yc(){return ct}function Fs(){return Ea.length}function Da(){return Ea[ge(kt,0,Fs()-1)]||Ea[0]}function sf(e=Da()){return e!=null&&e.target?Array.isArray(e.target)?e.target:[e.target]:[]}function rf(e){if(!(e instanceof HTMLElement))return!1;const t=window.getComputedStyle(e);return t.display==="none"||t.visibility==="hidden"||Number(t.opacity||"1")<=0?!1:e.getClientRects().length>0}function jc(e=Da()){for(const t of sf(e)){const s=Array.from(document.querySelectorAll(t)).find(r=>rf(r));if(s)return s}return null}function Sc(e,t=null){return typeof e=="function"?Sc(e(t),t):w(e||{ru:"",en:""})}function af(){return typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function of(){return!(ct||!i.progress||!i.i18n||!i.lessons.length||!document.body||document.visibilityState!=="visible"||i.detailCardId||i.rewardModal||i.finalTestModal||i.contactModal||i.navMenu)}function Oa(e=!1,t=Vp){clearTimeout(Yn),!(!e&&!$c())&&(Yn=window.setTimeout(()=>{Yn=0,Ka({force:e})},t))}function Ka(e={}){const t=!!e.force;let n=!1;if(ct){if(!t)return!0;zs({completed:!1,silent:!0})}if(!t&&!$c())return!1;if(!of())return Oa(t,$l),!1;clearTimeout(Yn);try{Ps=document.activeElement instanceof HTMLElement?document.activeElement:null,ct=!0,ye="step",kt=0,document.body.classList.add("onboarding-open");const s=document.querySelector(".app-shell");if(s){s.setAttribute("aria-hidden","true");try{s.inert=!0}catch(r){console.warn("Could not make the app shell inert.",r)}}return bc(),ss(),Nc(),n=!0,window.addEventListener("scroll",Vt,{passive:!0}),window.addEventListener("resize",Vt),window.addEventListener("orientationchange",Vt),Vt(),Cc(),!0}catch(s){return console.error("Flash Kanji onboarding failed to start.",s),zs({completed:!1,silent:!0}),n||Oa(t,$l),!1}}function zs(e={}){const{completed:t=!0,silent:n=!1,routeTo:s=null}=e;clearTimeout(Yn),Yn=0,cancelAnimationFrame(Ms),Ms=0,window.removeEventListener("scroll",Vt),window.removeEventListener("resize",Vt),window.removeEventListener("orientationchange",Vt),$t&&$t.classList.remove("is-onboarding-target"),$t=null,ct=!1,ye="step",kt=0,he&&(he.remove(),he=null,Ge=null,Le=null),document.body.classList.remove("onboarding-open");const r=document.querySelector(".app-shell");if(r){r.removeAttribute("aria-hidden");try{r.inert=!1}catch(a){console.warn("Could not restore app shell interactivity.",a)}}t&&nf(),n||(s?He(s):I()),Ps!=null&&Ps.focus&&requestAnimationFrame(()=>{try{Ps.focus()}catch(a){console.warn("Could not restore onboarding focus.",a)}})}function ss(){if(!bc())return;const e=ye==="final"?null:Da(),t=ye==="final"?null:jc(e),n=ye==="final"?Wr.title:e.title,s=ye==="final"?Wr.text:Sc(e.text,t),r=ye==="final"?m()==="ru"?"Готово":"Done":`${kt+1} ${m()==="ru"?"из":"of"} ${Fs()}`,a=w(n),l=w(s),c=Ni("eva","calm","welcome"),u=Fs();he.classList.toggle("is-final",ye==="final"),he.classList.toggle("has-target",!!t),he.dataset.view=ye;const p=ye==="final"?`
        <button class="btn primary" type="button" data-action="onboarding-continue">${o(w(Wr.start))}</button>
        <button class="btn ghost" type="button" data-action="onboarding-close">${o(w(Wr.close))}</button>
      `:kt===0?`
          <button class="btn primary" type="button" data-action="onboarding-next">${o(m()==="ru"?"Начать":"Start")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${o(m()==="ru"?"Пропустить":"Skip")}</button>
        `:`
          <button class="btn ghost" type="button" data-action="onboarding-prev">${o(m()==="ru"?"Назад":"Back")}</button>
          <button class="btn primary" type="button" data-action="onboarding-next">${o(m()==="ru"?"Далее":"Next")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${o(m()==="ru"?"Пропустить":"Skip")}</button>
        `;he.innerHTML=`
      ${ye==="final"?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      ${ye==="final"||t?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      <div class="flash-kanji-onboarding-spotlight${t?"":" is-hidden"}" data-onboarding-spotlight aria-hidden="true"></div>
      <section class="flash-kanji-onboarding-dialog${ye==="final"?" is-final":""}" role="dialog" aria-modal="true" aria-labelledby="flashKanjiOnboardingTitle" aria-describedby="flashKanjiOnboardingDesc" tabindex="-1">
        <div class="flash-kanji-onboarding-head">
          <span class="pill">${o(r)}</span>
          <span class="pill">${o(a)}</span>
        </div>
        <div class="flash-kanji-onboarding-body">
          <img class="flash-kanji-onboarding-eva" src="${h(c)}" alt="${h(m()==="ru"?"Ева":"Eva")}" loading="eager" decoding="async" />
          <div class="flash-kanji-onboarding-copy">
            <h2 id="flashKanjiOnboardingTitle">${o(a)}</h2>
            <p id="flashKanjiOnboardingDesc">${o(l)}</p>
          </div>
        </div>
        <div class="actions flash-kanji-onboarding-actions">${p}</div>
      </section>
    `,Ge=Ie("[data-onboarding-spotlight]",he),Le=Ie(".flash-kanji-onboarding-dialog",he),$t&&$t!==t&&$t.classList.remove("is-onboarding-target"),$t=t||null,$t&&$t.classList.add("is-onboarding-target"),Le&&(Le.dataset.totalSteps=String(u)),Vt()}function Vt(){ct&&(Ms||(Ms=requestAnimationFrame(()=>{Ms=0,Nc()})))}function Nc(){if(!ct||!he||!Le)return;const e=ye==="final"?null:$t||jc();af();const t=window.innerWidth,n=window.innerHeight;if(Le.style.maxWidth=`${Math.min(Yp,Math.max(280,t-16))}px`,Le.style.maxHeight=`${Math.max(180,n-24)}px`,Le.style.left="50%",Le.style.top="50%",Le.style.transform="translate(-50%, -50%)",Le.dataset.placement="center",e){const s=e.isConnected?e.getBoundingClientRect():null;!!s&&s.top>=8&&s.bottom<=n-8&&s.left>=8&&s.right<=t-8&&Ge?(Ge.hidden=!1,Ge.style.left=`${Math.round(s.left-12)}px`,Ge.style.top=`${Math.round(s.top-12)}px`,Ge.style.width=`${Math.round(s.width+12*2)}px`,Ge.style.height=`${Math.round(s.height+12*2)}px`,Ge.style.borderRadius=`${Math.max(6,Math.round(parseFloat(getComputedStyle(e).borderRadius||"8")||8))}px`):Ge&&(Ge.hidden=!0)}else Ge&&(Ge.hidden=!0);he.style.visibility="visible",Cc()}function lf(){ct&&ss()}function Cc(){var s;if(!Le)return;const e=Le.querySelector('[data-action="onboarding-next"], [data-action="onboarding-continue"], [data-action="onboarding-start"], [data-action="onboarding-prev"]'),t=Le.querySelectorAll("button"),n=e||t[0]||Le;try{(s=n.focus)==null||s.call(n)}catch(r){console.warn("Could not focus onboarding control.",r)}}function cf(){return Le?Array.from(Le.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')).filter(e=>e instanceof HTMLElement):[]}function uf(e=1){var a,l;const t=cf();if(!t.length)return;const n=document.activeElement,s=t.indexOf(n),r=s===-1?e>0?0:t.length-1:(s+e+t.length)%t.length;(l=(a=t[r])==null?void 0:a.focus)==null||l.call(a)}function df(e){return ct?e.key==="Tab"?(e.preventDefault(),uf(e.shiftKey?-1:1),!0):e.key==="Escape"?(e.preventDefault(),zs({completed:ye==="final"}),!0):e.key==="ArrowRight"?(e.preventDefault(),Ac(),!0):e.key==="ArrowLeft"?(e.preventDefault(),Lc(),!0):!1:!1}function Ac(){if(!ct)return;const e=Fs()-1;if(ye!=="final"){if(kt<e){kt+=1,ss();return}ye="final",ss()}}function Lc(){if(ct){if(ye==="final"){ye="step",kt=Fs()-1,ss();return}kt>0&&(kt-=1,ss())}}function pf(e=null){zs({completed:!0,routeTo:e})}function gf(){pf("textbooks")}function Vr(){if(typeof window=="undefined")return;const e=document.scrollingElement||document.documentElement;e&&(e.scrollTop=0),document.body&&(document.body.scrollTop=0),window.scrollTo({top:0,left:0,behavior:"auto"})}function Yt(){typeof window!="undefined"&&requestAnimationFrame(()=>requestAnimationFrame(()=>Vr()))}function mf(){if(typeof window=="undefined")return;const e=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({top:e,behavior:"auto"})}function Ic(){return typeof window=="undefined"||!document.documentElement?!1:document.documentElement.scrollHeight>window.innerHeight+24}function Ba(){return Ic()?window.scrollY>32?"up":"down":null}function ff(){const e=Ba()||"down",t=Ic()?"":" hidden",n=m()==="ru",s=e==="up"?n?"Наверх":"Scroll to top":n?"Вниз":"Scroll to bottom",r=e==="up"?"↑":"↓";return`
      <button class="scroll-position-toggle scroll-position-toggle-${e}" type="button" data-action="scroll-page-edge" data-direction="${e}" aria-label="${h(s)}" title="${h(s)}"${t}>
        <span class="scroll-position-toggle-icon" aria-hidden="true">${o(r)}</span>
        <span class="scroll-position-toggle-label">${o(s)}</span>
      </button>
    `}function Fa(){const e=Ie('[data-action="scroll-page-edge"]');if(!e)return;const t=Ba();if(!t){e.hidden=!0;return}e.hidden=!1,e.dataset.direction=t,e.classList.toggle("scroll-position-toggle-up",t==="up"),e.classList.toggle("scroll-position-toggle-down",t==="down");const n=e.querySelector(".scroll-position-toggle-icon");n&&(n.textContent=t==="up"?"↑":"↓");const s=e.querySelector(".scroll-position-toggle-label");s&&(s.textContent=m()==="ru"?t==="up"?"Наверх":"Вниз":t==="up"?"Top":"Bottom");const r=m()==="ru"?t==="up"?"Подняться вверх":"Опуститься вниз":t==="up"?"Scroll to top":"Scroll to bottom";e.setAttribute("aria-label",r),e.setAttribute("title",r)}function Yr(e){return e!=="review"&&Tc(e).length>1}function hf(e){if(!Yr(e)){He(e);return}i.navMenu=i.navMenu===e?null:e,de()}function Tc(e){const t=m()==="ru";return{learn:[{action:"open-jlpt-lesson-start",jlpt:Ya(),icon:"文",title:t?"Текущий урок":"Current lesson",text:t?"Открыть последний урок учебника.":"Open the latest lesson in the textbook."},{route:"review",focus:"review-card",icon:"↻",title:"SRS",text:t?"Перейти к повторениям.":"Go to review."},{route:"textbooks",focus:"textbook-grid",icon:"冊",title:t?"Учебники":"Textbooks",text:t?"Открыть страницы учебников JLPT.":"Open JLPT textbook pages."}],review:[{route:"review",focus:"review-card",icon:"↻",title:t?"Повторение":"Review cards",text:t?"Карточки повторения на сегодня.":"Today's review queue."},{route:"review",focus:"sentence-practice",icon:"文",title:t?"Практика предложений":"Sentence practice",text:t?"Вставь кандзи в пропуск.":"Fill kanji into blanks."}],stats:[{route:"stats",focus:"stats-top",icon:"в–Ґ",title:t?"Статистика":"Statistics",text:t?"Графики, XP и серия.":"Charts, XP, and streak."},{route:"achievements",focus:"achievements-top",icon:"月",title:t?"Достижения":"Achievements",text:t?"Галерея наград.":"Reward gallery."},{route:"stats",focus:"shop-panel",icon:"в—€",title:t?"Магазин":"Shop",text:t?"Moon Fragments и предметы.":"Moon Fragments and items."}],more:[{route:"writing",focus:"writing-canvas",icon:"筆",title:t?"Письмо":"Writing",text:t?"Практика написания.":"Writing practice."},{route:"stats",focus:"stats-top",icon:"в–Ґ",title:t?"Профиль":"Profile",text:t?"Статистика, награды и прогресс.":"Stats, achievements, and progress."},{route:"eva-room",focus:"eva-room",icon:"☾",title:t?"Комната Евы":"Eva room",text:t?"Диалоги и уютные фоны.":"Dialogue scenes and cozy rooms."},{route:"about",focus:"about",icon:"ℹ",title:t?"О проекте":"About",text:t?"Что такое Flash Kanji.":"What Flash Kanji is."}]}[e]||[]}function za(e){return e==="more"?m()==="ru"?"Ещё":"More":e==="about"?m()==="ru"?"О проекте":"About":e==="stats"?m()==="ru"?"Профиль":"Profile":e==="textbooks"||e==="learn"?m()==="ru"?"Учебники":"Textbooks":A(e)}function wf(){return["home","textbooks","review","dictionary","stats","about"]}function vf(e){return{home:"⌂",textbooks:"文",learn:"文",review:"↻",dictionary:"典",stats:"▥",about:"ℹ"}[e]||"•"}function bf(e){return`
      <li class="site-footer-link-item">
        <button class="site-footer-link site-footer-link--nav" type="button" data-action="route" data-route="${h(e)}">
          <span class="site-footer-link-icon" aria-hidden="true">${o(vf(e))}</span>
          <span>${o(za(e))}</span>
        </button>
      </li>
    `}function kf(){const e=m()==="ru",t=new Date().getFullYear(),n=e?"Спокойная лунная комната для кандзи, уроков и повторений.":"A calm moonlit room for kanji, lessons, and steady reviews.",s=e?"Навигация":"Navigation",r=e?"Соцсети":"Social";return`
      <footer class="seo-footer site-footer" aria-label="${h(e?"Подвал сайта":"Site footer")}">
        <div class="site-footer-grid">
          <section class="site-footer-brand" aria-label="${h(e?"О проекте":"About Flash Kanji")}">
            <span class="pill">Flash Kanji</span>
            <p class="site-footer-blurb">${o(n)}</p>
          </section>
          <div class="site-footer-columns">
            <section class="site-footer-section">
              <h2>${o(s)}</h2>
              <ul class="site-footer-nav" aria-label="${h(s)}">
                ${wf().map(a=>bf(a)).join("")}
              </ul>
            </section>
            <section class="site-footer-section">
              <h2>${o(r)}</h2>
              <div class="site-footer-socials" aria-label="${h(e?"Социальные ссылки":"Social links")}">
                <a class="btn ghost footer-social-link" href="${h(Jt.youtube)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${wp("youtube")}</span>
                  <span>YouTube</span>
                </a>
                <a class="btn ghost footer-social-link" href="${h(Jt.instagram)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${wp("instagram")}</span>
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
    `}function $f(){return m()==="ru"?{eyebrow:"О проекте",title:"О Flash Kanji",lead:"О Flash Kanji — это образовательный проект для изучения японского языка через кандзи, чтение, примеры и визуальную память.",heroTitle:"Спокойное пространство, куда хочется возвращаться каждый день",heroLead:"Идея проекта простая: сделать обучение японскому не сухой таблицей символов, а живым пространством, где кандзи складываются в привычку.",paragraphs:["Здесь кандзи изучаются постепенно — от базовых уровней до более сложных, с примерами, чтениями, ассоциациями и практикой.","Flash Kanji создан для тех, кто хочет учить японский с нуля или системно прокачивать уже имеющиеся знания.","Проект помогает запоминать иероглифы, понимать их значения, видеть реальные примеры использования и выстраивать привычку регулярного обучения.","В центре Flash Kanji — атмосфера спокойного цифрового кабинета, где обучение похоже не на экзамен, а на личный путь.","Здесь есть карточки, уроки, словарь, повторение, практика написания и визуальные элементы, которые помогают удерживать внимание."],sectionTitle:"Как устроен Flash Kanji",highlightTitle:"Что помогает удерживать ритм",highlightPoints:["Учебники JLPT N5-N1 с постепенным входом в материал.","Карточки с кандзи, чтениями и примерами.","SRS-повторение, чтобы не терять выученное.","Практика письма и тестовые упражнения.","Персонаж-наставник Eva и спокойная визуальная среда."],closing:"Flash Kanji — изучай японский в своей лунной комнате.",textbooks:"К учебникам",review:"К повторению",home:"На главную",evaRoom:"Комната Евы"}:{eyebrow:"About",title:"About Flash Kanji",lead:"Flash Kanji is an educational project for learning Japanese through kanji, readings, examples, and visual memory.",heroTitle:"A quiet place you will want to return to every day",heroLead:"The idea is simple: make Japanese feel less like a dry table of symbols and more like a living space where kanji turn into habit.",paragraphs:["Kanji are introduced gradually, from the basic levels to more advanced ones, with examples, readings, associations, and practice.","Flash Kanji is for people starting Japanese from zero and for learners who want a steady system to grow existing knowledge.","The project helps you remember characters, understand what they mean, see real usage, and build a consistent study routine.","At the center of Flash Kanji is the atmosphere of a calm digital study room, where learning feels like a personal journey rather than an exam.","You get cards, lessons, a dictionary, review, writing practice, and visual elements that help keep attention in place."],sectionTitle:"How Flash Kanji is built",highlightTitle:"What keeps the rhythm going",highlightPoints:["JLPT N5-N1 textbooks with a gradual path into the material.","Cards with kanji, readings, and examples.","SRS review so learned items stay in memory.","Writing practice and test exercises.","Eva as a mentor and a calm visual study space."],closing:"Flash Kanji — study Japanese in your own moonlit room.",textbooks:"Textbooks",review:"Review",home:"Home",evaRoom:"Eva room"}}function yf(){const e=$f();return`
      <section class="page about-page seo-textbook-shell">
        <div class="section-head about-head">
          <div>
            <p class="eyebrow">${o(e.eyebrow)}</p>
            <h1>${o(e.title)}</h1>
            <p>${o(e.lead)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="home">${o(e.home)}</button>
            <button class="btn primary" type="button" data-action="route" data-route="textbooks">${o(e.textbooks)}</button>
          </div>
        </div>

        <article class="seo-hero about-hero">
          <div class="about-hero-copy">
            <span class="pill">Flash Kanji</span>
            <h2>${o(e.heroTitle)}</h2>
            <p>${o(e.heroLead)}</p>
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
            <h2>${o(e.sectionTitle)}</h2>
            ${e.paragraphs.map(t=>`<p>${o(t)}</p>`).join("")}
          </article>
          <article class="seo-card about-card">
            <h2>${o(e.highlightTitle)}</h2>
            <ul>
              ${e.highlightPoints.map(t=>`<li>${o(t)}</li>`).join("")}
            </ul>
            <div class="seo-actions about-actions">
              <button class="btn primary" type="button" data-action="route" data-route="textbooks">${o(e.textbooks)}</button>
              <button class="btn ghost" type="button" data-action="route" data-route="review">${o(e.review)}</button>
              <button class="btn ghost" type="button" data-action="route" data-route="eva-room">${o(e.evaRoom)}</button>
            </div>
          </article>
        </div>

        <article class="seo-card about-claim">
          <p><strong>${o(e.closing)}</strong></p>
        </article>
      </section>
    `}function jf(){const e=Tc(i.navMenu);if(!e.length)return"";const t=i.navMenu,n=t?za(t):"";return`
      <aside class="nav-popover" role="menu" aria-label="${h(n)}">
        <div class="nav-popover-head">
          <strong>${o(n)}</strong>
          <button class="icon-btn nav-popover-close" type="button" data-action="close-nav-menu" aria-label="${h(m()==="ru"?"Закрыть меню":"Close menu")}">✕</button>
        </div>
        <div class="nav-popover-list">
          ${e.map(s=>`
            <button class="nav-popover-item" type="button" role="menuitem" ${s.action?`data-action="${h(s.action)}"${s.jlpt?` data-jlpt="${h(s.jlpt)}"`:""}`:`data-action="nav-menu-route" data-route="${h(s.route)}" data-focus="${h(s.focus)}"`}>
              <span>${o(s.icon)}</span>
              <b>${o(s.title)}</b>
              <small>${o(s.text)}</small>
            </button>
          `).join("")}
        </div>
      </aside>
    `}function Sf(){if(!i.pendingFocus)return;const e=i.pendingFocus;if(i.pendingFocus=null,e==="__scroll-top__"){Yt();return}const t={"lesson-card":".study-card, .daily-lesson-card","lesson-tabs":".lesson-tabs","review-card":"[data-section='review-card']","sentence-practice":"[data-section='sentence-practice']","writing-demo":"[data-section='writing-demo']","writing-canvas":"[data-section='writing-canvas']","eva-room":".eva-room-entry, .eva-room-page, .eva-room-shell",about:".about-page","stats-top":".metric-grid","achievements-top":".achievements-page .metric-grid","shop-panel":"[data-section='shop-panel']"},n=document.querySelector(t[e]||e);n&&(n.scrollIntoView({behavior:"smooth",block:"start"}),n.classList.add("is-focus-pulse"),window.setTimeout(()=>n.classList.remove("is-focus-pulse"),900))}function Nf(){ma(".nav-btn").forEach(t=>{const n=t.dataset.route,s=n===i.route||n==="learn"&&i.route==="textbooks"||n==="stats"&&i.route==="achievements"||n==="dictionary"&&i.route==="kanji";t.classList.toggle("is-active",s),t.classList.toggle("has-menu",!!t.closest(".bottom-nav")&&Yr(n)),t.setAttribute("aria-expanded",i.navMenu===n?"true":"false"),s?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current");const r=t.querySelector("small");r&&n&&(r.textContent=za(n))});const e=Ie('[data-action="language"]');e&&(e.textContent=m().toUpperCase()),Vo(),Nj(),Yo(),Cf()}function Cf(){var f,v,b;const e=Ie("#sidebarProgressBar"),t=Ie("#sidebarProgressLabel"),n=Ie("#sidebarProgressPercent"),s=Ie("#sidebarProgressNote"),r=Ie("#sidebarUserAvatar"),a=Ie("#sidebarUserTitle"),l=Ie("#sidebarUserSubtitle"),c=Ot(),u=dc(),p=Fe(),d=Math.max(1,Number(((f=i.progress)==null?void 0:f.level)||1)),g=Math.max(0,Math.min(100,Math.round(c.percent||0)));e&&(e.max=100,e.value=g),t&&(t.textContent=`${m()==="ru"?"Уровень":"Level"} ${d}`),n&&(n.textContent=`${g}%`),s&&(s.textContent=p>0?`${p} ${ue().reviewQueue} · ${u.title||ue().mapHint}`:`${u.title||ue().mapHint}${u.summary?` · ${u.summary}`:""}`),r&&(r.textContent=`N${d}`),a&&(a.textContent=(m()==="ru","Flash Kanji")),l&&(l.textContent=`${ue().level} ${d} · ${((b=(v=i.progress)==null?void 0:v.streak)==null?void 0:b.current)||0} ${ue().streak}`)}function Af(){var g,f;(f=(g=i.n5Textbook)==null?void 0:g.items)!=null&&f.length||Ta();const e=Lf(),t=Im(),n=Fe(),s=dc(),r=Tm(),a=ue(),l=Ot(),c=Math.max(0,Math.min(100,Math.round(l.percent||0))),u=m()==="ru",p=u?[{action:"home-review",icon:"↻",title:"Повторение",detail:n>0?`${n} карточек ждут тебя.`:"Очередь пуста, но тренировка всегда под рукой.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||a.mapHint,count:i.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Комната Евы",detail:"Диалоги, фон и Moon Fragments.",count:i.progress.moonFragments}]:[{action:"home-review",icon:"↻",title:"Review",detail:n>0?`${n} cards are waiting.`:"The queue is empty, but practice is always ready.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||a.mapHint,count:i.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Eva Room",detail:"Dialogue, backgrounds, and Moon Fragments.",count:i.progress.moonFragments}],d=Ap();return`
      <section class="page home-shell">
        <article class="home-hero-card">
          <img class="home-hero-moon" src="assets/decor/elements/crescent-moon.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
          <div class="home-hero-copy">
            <p class="eyebrow">JLPT N5-N1 · ${o(u?"Учебники":"Textbooks")} · ${o(u?"Повторение":"Review")}</p>
            <h1 class="hero-title home-hero-title">${u?"Небольшой урок.<br><em>Большой шаг.</em>":"Small lesson.<br><em>Big step.</em>"}</h1>
            <p class="home-hero-note">${o(s.summary||(u?"Сегодня появится новый шаг вперед.":"Today brings a small but steady step forward."))}</p>
            <p class="hero-subtitle">${o(A("tagline"))}</p>
            <div class="home-next-lesson">
              <span class="pill">${o(a.nextLesson)}</span>
              <strong>${o(s.title)}</strong>
              <p>${o(s.summary||a.mapHint)}</p>
            </div>
            <div class="hero-actions home-hero-actions">
              <button class="btn primary home-primary-cta" type="button" data-action="home-lesson" data-tour="home-lesson" data-level="${h(t.level)}" data-lesson-id="${h(t.lessonId||"")}">${o(t.label)}</button>
              ${n>0?`<button class="btn ghost home-primary-cta" type="button" data-action="home-review" data-tour="home-review">${o(u?`Повторить: ${n}`:`Review: ${n}`)}</button>`:""}
            </div>
            <div class="home-hero-progress" aria-label="${h(a.level)}">
              <progress class="progress-line" max="100" value="${h(String(c))}">0%</progress>
              <b>${o(`${c}%`)}</b>
            </div>
          </div>
        </article>
        <section class="metric-grid home-metrics" aria-label="${h(a.route)}">
          ${r.map(Rm).join("")}
        </section>
        <section class="home-dashboard">
          <div class="home-dashboard-main">
            <article class="study-card home-route-card">
              <div class="section-head">
                <div>
                  <span class="eyebrow accent">${o(u?"Маршрут N5":"N5 route")}</span>
                  <h2>${o(u?"Твой путь сегодня":"Your path today")}</h2>
                </div>
                <button class="text-button" type="button" data-action="route" data-route="textbooks">${o(u?"Все учебники →":"All textbooks →")}</button>
              </div>
              <div class="home-route-track">
                ${xm().map(_m).join("")}
              </div>
            </article>
            <article class="study-card home-task-card">
              <div class="section-head">
                <div>
                  <span class="eyebrow accent">${o(u?"На сегодня":"For today")}</span>
                  <h2>${o(u?"Короткие задачи":"Quick tasks")}</h2>
                </div>
              </div>
              <div class="home-task-list">
                ${p.map(Mm).join("")}
              </div>
            </article>
            ${Nr()?"":`
              <article class="study-card home-install-card">
                <button class="btn ghost" type="button" data-action="pwa-install">${o(d.install)}</button>
                <p class="home-install-hint">${o(d.description)}${Ls()?` ${o(d.iosInstruction)}`:""}</p>
              </article>
            `}
          </div>
          <aside class="home-dashboard-side">
            ${Tf(e)}
          </aside>
        </section>
      </section>
    `}function Lf(){var u,p,d,g,f;If();const e=ee(),t=e.currentLine||((u=i.evaRuntime)==null?void 0:u.currentPhrase)||null,n=oi(),s=w(As("eva").name||{ru:"Ева",en:"Eva"}),r=((p=i.evaRuntime)==null?void 0:p.mood)||e.mood||jt().mood,a=((d=i.evaRuntime)==null?void 0:d.emotion)||e.emotion||(t==null?void 0:t.emotion)||"calm",l=(t==null?void 0:t.state)||((g=i.evaRuntime)==null?void 0:g.presenceState)||(n?"wait_choice":"speak"),c=os((t==null?void 0:t.sprite)||((f=i.evaRuntime)==null?void 0:f.currentSkin)||Ja());return{line:t,question:n,speaker:s,mood:r,emotion:a,presenceState:l,sprite:c}}function If(){var t,n,s,r;pe();const e=ee();return(t=e.currentLine)!=null&&t.text||(s=(n=i.evaRuntime)==null?void 0:n.currentPhrase)!=null&&s.text?e.currentLine||i.evaRuntime.currentPhrase:(eu("manual"),ee().currentLine||((r=i.evaRuntime)==null?void 0:r.currentPhrase)||null)}function Tf(e){const t=en(),n=Zt(),s=e.question?m()==="ru"?"Вопрос":"Question":m()==="ru"?"Диалог":"Dialogue",r=e.line||{text:{ru:"Я здесь.",en:"I'm here."}},a=r.id||"home_eva_line";return`
      <section class="home-eva-vn" role="region" aria-label="${h(m()==="ru"?"Диалог Евы":"Eva dialogue")}" data-home-eva-mode="${h(e.question?"question":"dialogue")}" data-eva-state="${h(e.presenceState)}" data-eva-mood="${h(e.mood)}" data-eva-emotion="${h(e.emotion)}">
        <div class="home-eva-copy">
          <div class="home-eva-meta">
            <strong>${o(e.speaker)}</strong>
            <span class="pill">${o(s)}</span>
          </div>
          ${_c(w(r.text||{ru:"Я здесь.",en:"I'm here."}),a)}
          ${e.question?`
            <div class="eva-question-box home-eva-question">
              <span class="pill">${o(n.question)}</span>
              <strong>${o(w(e.question.text))}</strong>
              <div class="eva-choice-grid">
                ${e.question.options.map(l=>{var c;return`
                  <button class="btn ${l.id===((c=e.question.options[0])==null?void 0:c.id)?"primary":"ghost"}" type="button" data-action="eva-question-answer" data-option="${h(l.id)}">
                    ${o(w(l.text))}
                  </button>
                `}).join("")}
              </div>
            </div>
          `:`
            <div class="home-eva-actions">
              <button class="btn primary" type="button" data-action="eva-autonomy-next" aria-label="${h(t.nextAutonomyLine)}" title="${h(t.nextAutonomyLine)}">→</button>
            </div>
          `}
        </div>
        <button class="home-eva-avatar" type="button" data-action="eva-click" data-character="eva" aria-label="${h(e.speaker)}">
          <img class="${h(xc({line:e.line,isAutonomy:!0}))}" src="${h(e.sprite)}" alt="${h(e.speaker)}" loading="eager" decoding="async" onerror="this.src='assets/mascots/eva_normal.webp'" />
        </button>
      </section>
    `}function Rc(e){var t,n;return((t=e.line)==null?void 0:t.state)||((n=i.evaRuntime)==null?void 0:n.presenceState)||(e.isAutonomy?"speak":"wait_choice")}function xc(e){var s;const t=["eva-vn-sprite"],n=Rc(e);return["speak","soften","warning"].includes(n)&&t.push("is-speaking"),(["react","warning"].includes(n)||Date.now()-Number(((s=i.evaRuntime)==null?void 0:s.lastVisualChangeAt)||0)<1400)&&t.push("is-reacting"),n==="quiet"&&t.push("is-quiet"),t.join(" ")}function Rf(e){const t=String(e||"").trim();return t?(t.match(/[^.!?гЂ'пјЃпјџ]+[.!?гЂ'пјЃпјџ]?/g)||[t]).map(s=>s.trim()).filter(Boolean):[]}function _c(e,t=""){var l;const n=Rf(e),r=`eva-dialogue-text ${((l=i.evaRuntime)==null?void 0:l.textRevealSkippedLineId)===t?"is-skipped":""}`,a=n.length?n.map((c,u)=>`<span class="eva-line-piece" style="--i:${u}">${o(c)}</span>`).join(" "):o(e);return`<p class="${r}" data-action="eva-dialogue-skip" data-line-id="${h(t)}">${a}</p>`}function xf(){var p;pe(),Js(),Ws(),V();const e=jh(),t=e.node,n=_t()||e.bg||is(t.background),s=e.sprite||e.spriteSrc||os(e.spriteId||tn(t.sprite)),r=en(),a=Zt(),l=Array.isArray(t.choices)?t.choices:[],c=Rc(e),u=((p=e.line)==null?void 0:p.id)||t.id||"eva_dialogue";return`
      <section class="page eva-room-page">
        <div class="eva-room-toolbar">
          <button class="btn ghost" type="button" data-action="route" data-route="home">← ${o(r.back)}</button>
          <div class="eva-room-currency">
            <span>Moon</span>
            <strong>${i.progress.moonFragments}</strong>
            <small>Moon Fragments</small>
          </div>
          <span class="eva-room-live-pill">${o(a.badge)}</span>
          <button class="btn primary" type="button" data-action="eva-room-shop-open">Shop · ${o(r.shop)}</button>
        </div>

        ${Qf()}
        ${Uf(e)}
        <article class="eva-vn-scene ${e.isAutonomy?"is-autonomous":""} is-${h(c)}" data-eva-state="${h(c)}" data-eva-mood="${h(e.mood||jt().mood)}" data-eva-emotion="${h(e.emotion||"calm")}" style="--eva-bg:url('${h(n.file)}')">
          <div class="eva-vn-bg" aria-hidden="true"></div>
          <button class="eva-sprite-button" type="button" data-action="eva-click" aria-label="${h(w(t.speaker||{ru:"Ева",en:"Eva"}))}">
            <img class="${h(xc(e))}" src="${h(s)}" alt="${h(w(t.speaker||{ru:"Ева",en:"Eva"}))}" onerror="this.src='assets/mascots/eva_normal.webp'" />
          </button>
          ${Mf(e)}
          <div class="eva-dialogue-box">
            <div class="eva-dialogue-meta">
              <strong>${o(w(t.speaker||{ru:"Ева",en:"Eva"}))}</strong>
              <span>${e.isAutonomy?`${o(a.badge)} · `:""}${o(w(n.title||{}))}</span>
            </div>
            ${_c(w(t.text||{}),u)}
            ${e.isAutonomy?Gf(r):`
              <div class="eva-choice-grid">
                ${l.map((d,g)=>`
                  <button class="btn ${g===0?"primary":"ghost"}" type="button" data-action="eva-room-choice" data-index="${g}">
                    ${o(w(d.text||{}))}
                    ${d.rewardMoonFragments?`<small>+${d.rewardMoonFragments} Moon</small>`:""}
                  </button>
                `).join("")}
              </div>
            `}
          </div>
        </article>

        <div class="eva-room-footer-actions">
          <button class="btn" type="button" data-action="eva-room-reset">${o(r.restart)}</button>
          <button class="btn" type="button" data-action="route" data-route="textbooks">${o(r.study)}</button>
          <button class="btn" type="button" data-action="route" data-route="review">${o(r.review)}</button>
        </div>

        ${i.evaRoomShopOpen?_f():""}
      </section>
    `}function _f(){const e=en();return`
      <aside class="eva-shop-panel customization-shop-panel" role="dialog" aria-label="${h(e.shop)}">
        ${Mc({closable:!0})}
      </aside>
    `}function Mf(e={}){const t=Pf(e);return t?`
      <div class="eva-room-decoration deco-${h(t.id)}" aria-label="${h(pt(t))}">
        <img src="${h(t.asset||t.preview)}" alt="" loading="lazy" />
      </div>
    `:""}function Pf(e={}){var s,r,a,l;const t=e.decoration||ee().currentDecoration||((r=(s=i.customization)==null?void 0:s.selected)==null?void 0:r.decoration)||((l=(a=i.customization)==null?void 0:a.selected)==null?void 0:l.frame),n=ve(t);return!n||n.type!=="decoration"||!St(n.id)?null:n}function Mc(e={}){const t=rs(),n=Kf(),s=et().filter(r=>St(r.id)).length;return`
      <div class="custom-shop">
        <div class="custom-shop-hero">
          <div>
            <span class="pill">${o(t.subtitle)}</span>
            <h2>${o(t.title)}</h2>
            <p>${o(t.hint)}</p>
            <div class="custom-shop-stats">
              <span><b>${i.progress.moonFragments}</b> Moon</span>
              <span><b>${s}</b>/${et().length} ${o(t.ownedShort)}</span>
            </div>
          </div>
          ${e.closable?`<button class="icon-btn" type="button" data-action="eva-room-shop-close" aria-label="${h(en().close)}">✕</button>`:""}
        </div>
        <div class="custom-shop-tabs" role="tablist" aria-label="${h(t.categories)}">
          ${Ef().map(r=>`
            <button class="${i.shopFilters.category===r.id?"is-active":""}" type="button" data-action="shop-category" data-category="${h(r.id)}">
              ${o(w({ru:r.title_ru,en:r.title_en}))}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls">
          ${Df().map(r=>`
            <button class="${i.shopFilters.view===r.id?"is-active":""}" type="button" data-action="shop-filter" data-filter="${h(r.id)}">
              ${o(r.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls custom-shop-sort">
          ${Of().map(r=>`
            <button class="${i.shopFilters.sort===r.id?"is-active":""}" type="button" data-action="shop-sort" data-sort="${h(r.id)}">
              ${o(r.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-grid">
          ${n.map(Bf).join("")||`<article class="empty-state"><h3>${o(t.empty)}</h3></article>`}
        </div>
        <div class="custom-shop-history">
          ${yd({limit:6})}
        </div>
      </div>
    `}function Ef(){var e,t;return(t=(e=i.customizationCatalog)==null?void 0:e.categories)!=null&&t.length?i.customizationCatalog.categories:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}]}function Df(){const e=m()==="ru";return[{id:"all",title:e?"Все":"All"},{id:"available",title:e?"Доступные":"Available"},{id:"owned",title:e?"Купленные":"Owned"},{id:"new",title:e?"Новые":"New"}]}function Of(){const e=m()==="ru";return[{id:"featured",title:e?"Рекомендовано":"Featured"},{id:"price",title:e?"По цене":"By price"},{id:"rarity",title:e?"По редкости":"By rarity"}]}function Kf(){const e=i.shopFilters.category||"all",t=i.shopFilters.view||"all",n={common:1,rare:2,epic:3,legendary:4,mythic:5};let s=et().filter(r=>e==="all"||r.type===e);return t==="available"&&(s=s.filter(r=>Vc(r)==="available")),t==="owned"&&(s=s.filter(r=>St(r.id))),t==="new"&&(s=s.filter(r=>{var a,l;return!((l=(a=i.customization)==null?void 0:a.seen)!=null&&l.includes(r.id))})),i.shopFilters.sort==="price"&&(s=[...s].sort((r,a)=>r.price-a.price)),i.shopFilters.sort==="rarity"&&(s=[...s].sort((r,a)=>(n[a.rarity]||0)-(n[r.rarity]||0)||r.price-a.price)),s}function Bf(e){const t=Vc(e),n=rs(),s=n.status[t]||t,r=Mh(e),a=t==="available"?`<button class="btn primary" type="button" data-action="shop-buy" data-id="${h(e.id)}">${o(n.buy)}</button>`:t==="owned"?`<button class="btn" type="button" data-action="shop-select" data-id="${h(e.id)}">${o(n.select)}</button>`:t==="selected"?`<button class="btn warning" type="button" data-action="shop-clear-item" data-id="${h(e.id)}">${o(n.remove)}</button>`:`<button class="btn" type="button" disabled>${o(n.unavailable)}</button>`;return`
      <article class="custom-shop-card type-${h(e.type)} is-${h(t)} rarity-${h(e.rarity)}">
        <div class="custom-shop-preview">
          <img src="${h(e.preview||e.asset)}" alt="${h(pt(e))}" loading="lazy" onerror="this.closest('.custom-shop-card').classList.add('is-missing')" />
          <span class="rarity-badge">${o(zf(e.rarity))}</span>
        </div>
        <div class="custom-shop-card-body">
          <div class="custom-shop-title-row">
            <strong>${o(pt(e))}</strong>
            <span class="status-badge">${o(s)}</span>
          </div>
          ${e.stars?`<div class="custom-shop-stars" aria-label="${h(`${e.stars} stars`)}">${o("★".repeat(Math.max(1,Math.min(5,Number(e.stars)||1))))}</div>`:""}
          <p>${o(Ff(e))}</p>
          ${e.type==="outfit"&&Pc(e)?`<blockquote class="custom-shop-phrase">${o(Pc(e))}</blockquote>`:""}
          ${r?`<small class="custom-shop-unlock">${o(r)}</small>`:""}
          <div class="custom-shop-price">
            <span>${e.price?`${e.price} Moon`:n.free}</span>
            <small>${o(Jf(e.type))}</small>
          </div>
          ${a}
        </div>
      </article>
    `}function rs(){return m()==="ru"?{title:"Магазин кастомизации",subtitle:"Flash Kanji Custom",hint:"Фоны, образы Евы, декор, темы и эффекты за Moon Fragments.",categories:"Категории магазина",ownedShort:"куплено",buy:"Купить",select:"Выбрать",remove:"Убрать",selected:"Выбран",unavailable:"Недоступно",free:"Бесплатно",locked:"Предмет пока недоступен.",notEnough:"Не хватает Moon Fragments.",bought:"Куплено: {item}",selectedToast:"Выбрано: {item}",empty:"Нет предметов по этому фильтру.",status:{selected:"Выбран",owned:"Куплено",available:"Доступно",locked:"Закрыто"}}:{title:"Customization Shop",subtitle:"Flash Kanji Custom",hint:"Backgrounds, Eva outfits, room decor, themes, and effects for Moon Fragments.",categories:"Shop categories",ownedShort:"owned",buy:"Buy",select:"Select",remove:"Remove",selected:"Selected",unavailable:"Unavailable",free:"Free",locked:"This item is not available yet.",notEnough:"Not enough Moon Fragments.",bought:"Bought: {item}",selectedToast:"Selected: {item}",empty:"No items match this filter.",status:{selected:"Selected",owned:"Owned",available:"Available",locked:"Locked"}}}function pt(e){return m()==="en"?e.title_en||e.title_ru||e.id:e.title_ru||e.title_en||e.id}function Ff(e){return m()==="en"?e.description_en||e.description_ru||"":e.description_ru||e.description_en||""}function Pc(e){return m()==="en"?e.phrase_en||e.phrase_ru||"":e.phrase_ru||e.phrase_en||""}function zf(e){return{common:(m()==="ru","Common"),rare:(m()==="ru","Rare"),epic:(m()==="ru","Epic"),legendary:(m()==="ru","Legendary"),mythic:(m()==="ru","Mythic")}[e]||e}function Jf(e){const t=m()==="ru";return{background:t?"Фон":"Background",outfit:t?"Образ":"Outfit",decoration:t?"Декор":"Decoration",theme:t?"Тема":"Theme",effect:t?"Эффект":"Effect"}[e]||e}function Uf(e){var p,d,g;en();const t=Zt(),n=ee(),s=e.bg||_t(),r=Dc(e.spriteId||i.progress.selectedEvaSprite),a=ve((d=(p=i.customization)==null?void 0:p.selected)==null?void 0:d.effect),l=ve(e.decoration||n.currentDecoration),c=Hf(e.mood||n.mood),u=gc();return`
      <aside class="eva-autonomy-panel eva-live-status" data-eva-lines="${i.evaAutonomyLines.length}" data-eva-current="${h(((g=n.currentLine)==null?void 0:g.id)||"")}">
        <div>
          <span class="pill">${o(t.badge)}</span>
          <strong>${o(t.status)}</strong>
          <small>${o(t.hint)}</small>
        </div>
        <div class="eva-autonomy-meta">
          <span>${o(t.mood)}: ${o(c)}</span>
          <span>${o(t.quiz)}: ${o(u.correct||0)}/${o(u.answered||0)}</span>
          ${u.streak?`<span>${o(t.quizStreak)}: ${o(u.streak)}</span>`:""}
          <span>${o(w(s.title||{}))}</span>
          <span>${o(w((r==null?void 0:r.title)||{ru:"Ева",en:"Eva"}))}</span>
          ${l?`<span>${o(pt(l))}</span>`:""}
          ${a?`<span class="eva-active-effect-chip">${o(pt(a))}<button type="button" class="eva-active-effect-clear" data-action="shop-clear-effect" data-id="${h(a.id)}" aria-label="${h(m()==="ru"?"Убрать эффект":"Remove effect")}">✕</button></span>`:""}
        </div>
      </aside>
    `}function Gf(e){const t=Zt(),n=oi();return n!=null&&n.id?`
        <div class="eva-question-box">
          <span class="pill">${o(t.question)}</span>
          <strong>${o(w(n.text))}</strong>
          <div class="eva-choice-grid">
            ${n.options.map(s=>{var r;return`
              <button class="btn ${s.id===((r=n.options[0])==null?void 0:r.id)?"primary":"ghost"}" type="button" data-action="eva-question-answer" data-option="${h(s.id)}">
                ${o(w(s.text))}
              </button>
            `}).join("")}
          </div>
        </div>
      `:`
      <div class="eva-choice-grid">
        <button class="btn primary" type="button" data-action="eva-autonomy-next">${o(e.nextAutonomyLine)}</button>
        <button class="btn ghost" type="button" data-action="eva-room-reset">${o(e.storyDialogue)}</button>
        <button class="btn" type="button" data-action="route" data-route="textbooks">${o(e.study)}</button>
      </div>
    `}function Zt(){return m()==="ru"?{badge:"Ева рядом",status:"Ева держит присутствие в комнате",hint:"Она помнит паузы, выбирает тон по контексту и реагирует открытыми образами без лишнего шума.",mood:"Настроение",quiz:"Вопросы",quizStreak:"Серия",question:"Вопрос Евы"}:{badge:"Eva nearby",status:"Eva keeps presence in the room",hint:"She remembers gaps, chooses tone from context, and reacts with unlocked looks without extra noise.",mood:"Mood",quiz:"Questions",quizStreak:"Streak",question:"Eva's question"}}function Hf(e){const n=m()==="ru"?{neutral:"Ровное настроение",focused:"Собрана",soft:"Мягче обычного",strict:"Строгая",tired:"Немного устала",happy:"Довольна прогрессом",serious:"Серьёзна",mystic:"Лунное настроение",cyber:"Анализирует",travel:"Вспоминает дороги",quiet:"Молчит рядом",curious:"Заинтересована",close:"Близость",proud:"Гордится тобой",worried:"Беспокоится",reserved:"Держит дистанцию"}:{neutral:"Steady mood",focused:"Focused",soft:"Softer than usual",strict:"Strict",tired:"A little tired",happy:"Pleased with progress",serious:"Serious",mystic:"Moonlit mood",cyber:"Analyzing",travel:"Thinking of old roads",quiet:"Quiet nearby",curious:"Interested",close:"Close",proud:"Proud of you",worried:"Worried",reserved:"Reserved"};return n[e]||n.neutral}function Qf(){const e=jt(),t=en(),n=t.moods[e.mood]||t.moods.neutral,s=[["warmth",t.warmth,e.warmth],["trust",t.trust,e.trust],["discipline",t.discipline,e.discipline],["curiosity",t.curiosity,e.curiosity]];return`
      <aside class="eva-relationship-panel" aria-label="${h(t.relationship)}">
        <div class="eva-relationship-head">
          <span>${o(t.relationship)}</span>
          <strong>${o(n)}</strong>
        </div>
        <div class="eva-relationship-grid">
          ${s.map(([r,a,l])=>`
            <div class="eva-relationship-stat eva-stat-${r}">
              <div><span>${o(a)}</span><strong>${Math.round(l)}</strong></div>
              <i><b style="width:${ge(l,0,100)}%"></b></i>
            </div>
          `).join("")}
        </div>
      </aside>
    `}function en(){return m()==="ru"?{back:"На главную",shop:"Магазин Евы",close:"Закрыть",shopHint:"Покупай комнаты и образы Евы за Moon Fragments.",buy:"Купить",select:"Выбрать",selected:"Выбран",free:"Открыто",restart:"Начать диалог заново",study:"К уроку",review:"К повтору",notEnough:"Не хватает Moon Fragments.",bought:"Фон открыт.",selectedToast:"Фон выбран.",reward:"Ева дала Moon Fragments.",roomShopTitle:"Комнаты",spriteShopTitle:"Образы Евы",spriteBought:"Образ Евы открыт.",spriteSelected:"Образ Евы выбран.",autonomyBadge:"Ева рядом",autonomyShortOn:"Ева · авто",autonomyShortOff:"Ева · тихо",autonomyOn:"Ева рядом",autonomyOff:"Ева рядом",autonomyHint:"Ева сама выбирает реплики, настроение, комнату и образ без спойлеров FIS.",autonomySettingsHint:"Самостоятельные реплики Евы в комнате, без раскрытия сюжета.",enableAutonomy:"Ева рядом",disableAutonomy:"Ева рядом",changeFrequency:"Статус Евы",frequency:"Частота",frequencies:{quiet:"тихо",normal:"нормально",active:"часто"},roomMode:"Комната",outfitMode:"Образ",roomModeButton:"Комната Евы",outfitModeButton:"Образ Евы",auto:"авто",manual:"ручной",nextAutonomyLine:"Ещё мысль.",storyDialogue:"Вернуться к диалогу.",relationship:"Отношения с Евой",warmth:"Тепло",trust:"Доверие",discipline:"Дисциплина",curiosity:"Интерес",moreTalk:"Ещё реплика",anotherTalk:"Другая тема",moods:{neutral:"Ровное настроение",close:"Близость",proud:"Гордится тобой",curious:"Заинтересована",worried:"Беспокоится",reserved:"Держит дистанцию"}}:{back:"Home",shop:"Eva Shop",close:"Close",shopHint:"Buy rooms and Eva looks with Moon Fragments.",buy:"Buy",select:"Select",selected:"Selected",free:"Unlocked",restart:"Restart dialogue",study:"Study",review:"Review",notEnough:"Not enough Moon Fragments.",bought:"Background unlocked.",selectedToast:"Background selected.",reward:"Eva gave you Moon Fragments.",roomShopTitle:"Rooms",spriteShopTitle:"Eva Looks",spriteBought:"Eva look unlocked.",spriteSelected:"Eva look selected.",autonomyBadge:"Eva nearby",autonomyShortOn:"Eva · auto",autonomyShortOff:"Eva · quiet",autonomyOn:"Eva nearby",autonomyOff:"Eva nearby",autonomyHint:"Eva chooses lines, mood, room, and look by herself without FIS spoilers.",autonomySettingsHint:"Independent Eva lines in her room, without story spoilers.",enableAutonomy:"Eva nearby",disableAutonomy:"Eva nearby",changeFrequency:"Eva status",frequency:"Frequency",frequencies:{quiet:"quiet",normal:"normal",active:"active"},roomMode:"Room",outfitMode:"Look",roomModeButton:"Eva room",outfitModeButton:"Eva look",auto:"auto",manual:"manual",nextAutonomyLine:"Another thought.",storyDialogue:"Back to dialogue.",relationship:"Relationship with Eva",warmth:"Warmth",trust:"Trust",discipline:"Discipline",curiosity:"Interest",moreTalk:"Another line",anotherTalk:"Different topic",moods:{neutral:"Steady mood",close:"Close",proud:"Proud of you",curious:"Interested",worried:"Worried",reserved:"Reserved"}}}function pe(){var t,n,s,r,a,l,c,u,p,d,g,f,v;(t=i.progress).seenCards||(t.seenCards={}),(n=i.progress).seenKanji||(n.seenKanji={}),(s=i.progress).unlockedBackgrounds||(s.unlockedBackgrounds=["bg_study_hub"]),i.progress.unlockedBackgrounds.includes("bg_study_hub")||i.progress.unlockedBackgrounds.unshift("bg_study_hub"),(r=i.progress).selectedEvaRoomBackground||(r.selectedEvaRoomBackground="bg_study_hub"),(a=i.progress).unlockedEvaSprites||(a.unlockedEvaSprites=["idle","default"]),["idle","default"].forEach(b=>{i.progress.unlockedEvaSprites.includes(b)||i.progress.unlockedEvaSprites.push(b)}),(l=i.progress).selectedEvaSprite||(l.selectedEvaSprite="idle");const e=rc(nc(),i.progress.evaAutonomy||{});if((c=i.progress).evaAutonomy||(c.evaAutonomy={}),Object.keys(i.progress.evaAutonomy).forEach(b=>delete i.progress.evaAutonomy[b]),Object.assign(i.progress.evaAutonomy,e),i.evaRuntime||(i.evaRuntime=yt()),(u=i.progress).evaRoomDialogueProgress||(u.evaRoomDialogueProgress={currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]}),(p=i.progress.evaRoomDialogueProgress).currentNode||(p.currentNode="intro"),(d=i.progress.evaRoomDialogueProgress).rewardsClaimed||(d.rewardsClaimed={}),(g=i.progress.evaRoomDialogueProgress).visited||(g.visited={}),i.progress.evaRoomDialogueProgress.lineHistory=Array.isArray(i.progress.evaRoomDialogueProgress.lineHistory)?i.progress.evaRoomDialogueProgress.lineHistory.slice(-24):[],(f=i.progress).evaRoomQuiz||(f.evaRoomQuiz={answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]}),(v=i.progress.evaRoomQuiz).rewarded||(v.rewarded={}),i.progress.evaRoomQuiz.history=Array.isArray(i.progress.evaRoomQuiz.history)?i.progress.evaRoomQuiz.history.slice(0,40):[],!i.progress.evaRelationship)i.progress.evaRelationship=Na();else{const b=sc(Na(),i.progress.evaRelationship);Object.keys(i.progress.evaRelationship).forEach($=>delete i.progress.evaRelationship[$]),Object.assign(i.progress.evaRelationship,b)}}function jt(){return pe(),i.progress.evaRelationship}function Js(){var k,x,T,B,L,y;if(!i.progress||!i.cards.length)return!1;pe();const e=i.progress.evaRelationship;let t=!1;const n=ce(),s=e.lastDecayDate||n,r=Math.max(0,$n(s,n));if(r>0){const N=(k=i.progress.streak)==null?void 0:k.lastStudyDate,H=N?$n(N,n):r+1;!N||H>1?(Ne({warmth:-Math.min(10,r*1.2),trust:-Math.min(14,r*1.6),discipline:-Math.min(22,r*3.4)},"study_gap",{silent:!0}),t=!0):(((x=i.progress.streak)==null?void 0:x.current)||0)>0&&(Ne({discipline:.8,trust:.4},"streak_kept",{silent:!0}),t=!0),e.lastDecayDate=n}const a=Do(),l={learned:a.learned,mastered:a.mastered,reviews:Oo(),lessons:Object.keys(i.progress.lessonCompletions||{}).length,streak:Math.max(((T=i.progress.streak)==null?void 0:T.current)||0,((B=i.progress.streak)==null?void 0:B.best)||0),wrong:i.progress.totalWrong||0,writing:((L=i.progress.writingPractice)==null?void 0:L.completed)||0,sentence:Object.keys(((y=i.progress.sentencePractice)==null?void 0:y.completed)||{}).length},c=e.lastKnown||{},u=N=>Math.max(0,Number(l[N]||0)-Number(c[N]||0)),p={},d=u("reviews"),g=u("learned"),f=u("mastered"),v=u("lessons"),b=u("streak"),$=u("wrong"),S=u("writing"),j=u("sentence");return d&&(p.discipline=(p.discipline||0)+Math.min(18,d*.08),p.trust=(p.trust||0)+Math.min(10,d*.04)),g&&(p.trust=(p.trust||0)+Math.min(20,g*.5),p.curiosity=(p.curiosity||0)+Math.min(16,g*.35)),f&&(p.trust=(p.trust||0)+Math.min(16,f*1.2),p.warmth=(p.warmth||0)+Math.min(8,f*.5)),v&&(p.warmth=(p.warmth||0)+Math.min(12,v*2),p.discipline=(p.discipline||0)+Math.min(10,v*1.5)),b&&(p.discipline=(p.discipline||0)+Math.min(15,b*3),p.warmth=(p.warmth||0)+Math.min(8,b)),S&&(p.curiosity=(p.curiosity||0)+Math.min(10,S*.8)),j&&(p.trust=(p.trust||0)+Math.min(10,j*.8)),$&&(p.discipline=(p.discipline||0)-Math.min(6,$*.12)),Object.keys(p).length&&(Ne(p,"learning_progress",{silent:!0}),t=!0),e.lastKnown=l,Ec(),t}function Ne(e={},t="relationship",n={}){pe();const s=i.progress.evaRelationship;return["warmth","trust","discipline","curiosity"].forEach(r=>{typeof e[r]!="undefined"&&(s[r]=Vi(ge(Number(s[r]||0)+Number(e[r]||0),0,100),1))}),Ec(),n.silent||(s.history.unshift({at:new Date().toISOString(),reason:t,delta:e}),s.history=s.history.slice(0,40)),s}function Ec(){var t;const e=i.progress.evaRelationship;return e.discipline<25?e.mood="worried":e.trust<30?e.mood="reserved":e.warmth>=76&&e.trust>=68?e.mood="close":(((t=i.progress.streak)==null?void 0:t.current)||0)>=7&&e.discipline>=58?e.mood="proud":e.curiosity>=68?e.mood="curious":e.mood="neutral",e.mood}function Ja(){var s,r,a,l,c,u,p;const e=((r=(s=i.customization)==null?void 0:s.selected)==null?void 0:r.outfit)||((c=(l=(a=i.progress)==null?void 0:a.shop)==null?void 0:l.equipped)==null?void 0:c.outfit)||null,t=ve(e),n=(t==null?void 0:t.spriteId)||((u=i.progress)==null?void 0:u.selectedEvaSprite)||"idle";return(p=i.evaSprites)!=null&&p[n]&&ei(n)?n:"idle"}function Xf(e){const t=String(e||"");return new Set(["normal","neutral","idle","default","welcome","happy","soft_smile","gentle_smile","sad","angry","shy","think","thinking","focus","observe","observation","explain","teach","ready","reading","serious","strict","determined","tired","surprised","cold","proud","approve","confirm","achievement","reward","review","correct","levelup","writing","calm","tea","speaking"]).has(t)}function tn(e,t=null){var f,v;const n=e&&e!=="relationship"?String(e):null,s=Ja(),r=Xf(n),a=n&&!r?n:s,l=((f=i.evaRuntime)==null?void 0:f.mood)||jt().mood,c=t||(r?n:null)||((v=i.evaRuntime)==null?void 0:v.emotion)||{close:"shy",proud:"approve",curious:"thinking",worried:"sad",reserved:"idle",neutral:"idle"}[l]||"idle",u=Zf(c),p=[...new Set([a,s].filter(Boolean))];return[...p.flatMap(b=>Wf(b,u)),...p,...u,"idle","default"].filter(Boolean).find(b=>{var $;return(($=i.evaSprites)==null?void 0:$[b])&&(ei(b)||!a||ei(a))})||"idle"}function Wf(e,t=[]){const n=String(e||"");if(!n)return[];const s=t.map(a=>`${n}_${a}`).filter(a=>{var l;return(l=i.evaSprites)==null?void 0:l[a]}),r=xn(n);return!r||r.defaultOwned||s.length<=1?s:qf(s)}function qf(e=[]){const t=[...new Set(e.filter(Boolean))];if(t.length<=1)return t;const n=ua%t.length;return[...t.slice(n),...t.slice(0,n)]}function Vf(){const e=Ja(),t=xn(e);return!t||t.defaultOwned?!1:Object.keys(i.evaSprites||{}).some(n=>n.startsWith(`${e}_`))}function Yf(){ca&&window.clearInterval(ca),ca=window.setInterval(()=>{const e=Math.floor(Date.now()/6e4);e!==ua&&(ua=e,!(document.hidden||!Vf())&&(i.route==="home"||i.route==="eva-room")&&I())},3e4)}function Zf(e){const t=String(e).toLowerCase(),n={normal:["soft_smile","neutral","observe","idle"],neutral:["neutral","idle","soft_smile"],idle:["neutral","idle"],welcome:["soft_smile","observe","neutral","idle"],happy:["happy","soft_smile","gentle_smile","encourage","approve","proud"],soft_smile:["soft_smile","gentle_smile","happy","shy","approve","neutral"],approve:["approve","confirm","correct","confident","ready","soft_smile"],correct:["correct","confirm","approve","confident","ready","soft_smile"],proud:["proud","confident","approve","determined","soft_smile"],achievement:["achievement","legendary","mythic","reward","proud","approve","ready"],levelup:["levelup","legendary","mythic","determined","proud","ready"],reward:["reward","blessing","soft_smile","happy","approve"],review:["review","reading","ready","explain","think","neutral"],explain:["explain","teach","review","think","reading"],think:["think","thinking","analyze","observe","reading","explain","serious"],thinking:["think","thinking","analyze","observe","reading","explain","serious"],observe:["observe","serious","think","neutral"],ready:["ready","determined","walk","neutral"],serious:["serious","strict","determined","neutral"],strict:["strict","command","angry","serious"],angry:["angry","strict","command","serious"],sad:["sad","tired","cold","serious","neutral"],tired:["tired","cold","neutral"],shy:["shy","soft_smile","gentle_smile","happy"],surprised:["surprised","think","observe"],writing:["writing","teach","explain","ready","think"],focus:["think","observe","ready","serious"],calm:["neutral","idle","soft_smile"]},s=eh(t);return[...new Set([...n[t]||[],t,s,"neutral","idle"].filter(Boolean))]}function eh(e){return{neutral:"idle",idle:"idle",normal:"idle",welcome:"happy",happy:"happy",soft_smile:"shy",thinking:"think",serious:"think",strict:"angry",sad:"sad",shy:"shy",surprised:"think",approve:"approve",explain:"review",ready:"review",tired:"idle",observe:"think",special:"levelup",proud:"proud",calm:"idle"}[e]||"idle"}function ee(){return pe(),i.progress.evaAutonomy}function Zr(){const e=ee();return e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",!0}function Ua(){var s;const e=(s=i.evaBackgrounds)!=null&&s.length?i.evaBackgrounds:[{id:"bg_study_hub",title:{ru:"Учебная комната",en:"Study Hub"},file:"assets/bg/bg_study_hub.webp",price:0,defaultUnlocked:!0}],t=new Set(e.map(r=>r.id)),n=et().filter(r=>r.type==="background"&&!t.has(r.id)).map(r=>({id:r.id,title:{ru:r.title_ru,en:r.title_en},file:r.asset||r.preview,price:r.price,defaultUnlocked:r.defaultOwned}));return[...e,...n]}function is(e){return Ua().find(t=>t.id===e)||Ua()[0]}function _t(){var t,n;pe();const e=i.progress.selectedEvaRoomBackground||((n=(t=i.customization)==null?void 0:t.selected)==null?void 0:n.background);return is(e)||is("bg_study_hub")}function th(e){const t=is(e);return t?t.defaultUnlocked||t.price===0||i.progress.unlockedBackgrounds.includes(t.id):!1}function nh(){const e=et().filter(n=>n.type==="outfit").map(n=>({id:n.spriteId||n.id,shopId:n.id,title:{ru:n.title_ru,en:n.title_en},price:n.price,defaultUnlocked:n.defaultOwned})),t=[{id:"idle",title:{ru:"Ева: спокойная",en:"Eva: Calm"},price:0,defaultUnlocked:!0},{id:"default",title:{ru:"Ева: классика",en:"Eva: Classic"},price:0,defaultUnlocked:!0},{id:"think",title:{ru:"Ева: размышление",en:"Eva: Thinking"},price:25},{id:"happy",title:{ru:"Ева: тепло",en:"Eva: Warm"},price:35},{id:"approve",title:{ru:"Ева: наставник",en:"Eva: Mentor"},price:35},{id:"review",title:{ru:"Ева: повторение",en:"Eva: Review"},price:40},{id:"proud",title:{ru:"Ева: гордость",en:"Eva: Proud"},price:45},{id:"shy",title:{ru:"Ева: ближе",en:"Eva: Closer"},price:55},{id:"sad",title:{ru:"Ева: тревога",en:"Eva: Concerned"},price:30},{id:"reward",title:{ru:"Ева: награда",en:"Eva: Reward"},price:50},{id:"achievement",title:{ru:"Ева: достижение",en:"Eva: Achievement"},price:60},{id:"levelup",title:{ru:"Ева: уровень",en:"Eva: Level Up"},price:65}].filter(n=>{var s;return((s=i.evaSprites)==null?void 0:s[n.id])&&!e.some(r=>r.id===n.id)});return[...e,...t]}function Dc(e){return nh().find(t=>t.id===e)}function ei(e){var n,s,r;if(!e)return!1;const t=Dc(e);return!!(t!=null&&t.defaultUnlocked||(t==null?void 0:t.price)===0||(n=i.progress.unlockedEvaSprites)!=null&&n.includes(e)||(r=(s=i.progress.shop)==null?void 0:s.owned)!=null&&r.includes(`eva_sprite:${e}`))}function ti(e){var l;pe();const t=((l=i.evaRuntime)==null?void 0:l.mood)||Mt(Te()),n={close:["bg_cafe","bg_park","bg_eva_room","bg_study_hub"],proud:["bg_practice_room","bg_classroom","bg_moon_room","bg_study_hub"],curious:["bg_library","bg_cyber_room","bg_shrine","bg_study_hub"],worried:["bg_study_hub","bg_evening_street","bg_winter_city"],reserved:["bg_library","bg_silent_road","bg_study_hub"],focused:["bg_classroom","bg_practice_room","bg_study_hub"],soft:["bg_cafe","bg_park","bg_study_hub"],strict:["bg_classroom","bg_silent_road","bg_study_hub"],tired:["bg_cafe","bg_library","bg_study_hub"],happy:["bg_park","bg_cafe","bg_moon_room","bg_study_hub"],serious:["bg_silent_road","bg_library","bg_study_hub"],mystic:["bg_moon_room","bg_shrine","bg_study_hub"],cyber:["bg_cyber_room","bg_library","bg_study_hub"],travel:["bg_silent_road","bg_evening_street","bg_school_street","bg_study_hub"],quiet:["bg_library","bg_study_hub"],neutral:["bg_study_hub","bg_classroom","bg_library","bg_silent_road"]},s=[...(e==null?void 0:e.preferredBackgrounds)||[],...n[t]||n.neutral],r=Ua().filter(c=>th(c.id));return s.map(c=>r.find(u=>u.id===c)).find(Boolean)||Ue(r)||_t()}function ni(e){var r;pe();const t=((r=i.evaRuntime)==null?void 0:r.mood)||Mt(Te()),n={close:["casual_fox","librarian_eva","shy","idle","approve"],proud:["academy_instructor","moon_priestess","study_session","approve","proud","review"],curious:["librarian_eva","cyber_eva","think","review","idle"],worried:["winter_traveler","fis_mentor","sad","idle","think"],reserved:["silent_road","fis_mentor","idle","default"],focused:["study_session","academy_instructor","review","approve","idle"],soft:["librarian_eva","casual_fox","shy","approve","idle"],strict:["academy_instructor","fis_mentor","angry","think","idle"],tired:["winter_traveler","idle","default"],happy:["happy","proud","approve","casual_fox"],serious:["fis_mentor","silent_road","think","idle"],mystic:["moon_priestess","shrine_maiden","achievement","reward"],cyber:["cyber_eva","think","review"],travel:["silent_road","winter_traveler","fis_mentor"],quiet:["fis_mentor","idle","default"],neutral:["fis_mentor","study_session","librarian_eva","idle","think","review","default"]};return[e==null?void 0:e.sprite,...n[t]||n.neutral].filter(Boolean).find(a=>{var l;return ei(a)&&((l=i.evaSprites)==null?void 0:l[a])})||i.progress.selectedEvaSprite||"idle"}function sh(e){return e==="generated_line"?rh():i.evaRoomDialogues.find(t=>t.id===e)||i.evaRoomDialogues[0]||{id:"intro",background:"bg_study_hub",sprite:"relationship",speaker:{ru:"Ева",en:"Eva"},text:{ru:"С возвращением.",en:"Welcome back."},choices:[]}}function rh(){pe();const e=en(),t=i.progress.evaRoomDialogueProgress.generatedLine||Xc("adaptive");return i.progress.evaRoomDialogueProgress.generatedLine=t,{id:"generated_line",background:t.background||_t().id||"bg_study_hub",sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[{text:{ru:e.moreTalk,en:e.moreTalk},randomLine:t.category||"adaptive",relationshipDelta:{warmth:.6,curiosity:.4}},{text:{ru:e.anotherTalk,en:e.anotherTalk},next:"intro",relationshipDelta:{warmth:.2}},{text:{ru:e.study,en:e.study},next:"intro",route:"learn",relationshipDelta:{discipline:1.2,trust:.5}}]}}function si(){return Array.isArray(i.evaRoomLines)?i.evaRoomLines:[]}function ih(e="auto"){var n,s;const t=(s=(n=i.evaPresence)==null?void 0:n.categoryMap)==null?void 0:s[e];return Array.isArray(t)?t:[]}function Oc(e){return typeof e=="undefined"||e===null?[]:Array.isArray(e)?e.map(String):[String(e)]}function ah(e,t=Te()){const n=(e==null?void 0:e.conditions)||{},s=(a,l)=>{const c=Oc(l);return!c.length||c.includes(String(a))},r=(a,l)=>{const c=Oc(l);return!c.length||c.some(u=>String(a||"").includes(u)||u===String(a))};return!(!s(t.route,n.route)||!s(t.timeOfDay,n.timeOfDay)||!r(t.activeSkin,n.activeSkin)||!r(t.activeBackground,n.activeBackground)||typeof n.minGapDays!="undefined"&&Number(t.daysSinceReturn||0)<Number(n.minGapDays)||typeof n.maxGapDays!="undefined"&&Number(t.daysSinceReturn||0)>Number(n.maxGapDays)||typeof n.minDueReviews!="undefined"&&Number(t.dueReviews||0)<Number(n.minDueReviews)||typeof n.maxDueReviews!="undefined"&&Number(t.dueReviews||0)>Number(n.maxDueReviews)||typeof n.minStreak!="undefined"&&Number(t.streak||0)<Number(n.minStreak)||typeof n.maxStreak!="undefined"&&Number(t.streak||0)>Number(n.maxStreak)||typeof n.minTalkOverStudy!="undefined"&&Number(t.timesUserChoseTalkOverStudy||0)<Number(n.minTalkOverStudy))}function oh(e="auto",t=Te()){return null}function ri(e,t="auto",n=Te()){if(!i.evaRuntime||!(e!=null&&e.id))return;i.evaRuntime.memory=_n(xt(),i.evaRuntime.memory||{});const s=i.evaRuntime.memory;s.recentLineIds=[e.id,...(s.recentLineIds||[]).filter(a=>a!==e.id)].slice(0,30);const r=e.category||t;s.recentTopics=[r,...(s.recentTopics||[]).filter(a=>a!==r)].slice(0,20),s.lastRoute=n.route||i.route,s.lastInteractionDate=ce(),s.lastKnownMood=i.evaRuntime.mood||jt().mood,(["warning","answer_wrong","idle_timeout"].includes(t)||String(e.category||"").includes("warning"))&&(s.lastWarningAt=new Date().toISOString()),(["answer_correct","lesson_complete","level_up","streak_up"].includes(t)||String(e.category||"").includes("reward"))&&(s.lastPraiseAt=new Date().toISOString())}function Kc(e){var n,s;if(!i.evaRuntime)return;i.evaRuntime.memory=_n(xt(),i.evaRuntime.memory||{});const t=i.evaRuntime.memory;t.lastRoute=i.route,["timer","idle_timeout"].includes(e.type)||(t.lastInteractionDate=ce()),e.type==="answer_wrong"&&(t.recentProblemCluster=((n=e.payload)==null?void 0:n.cardId)||"reading"),e.type==="room_opened"&&(t.preferredEvaRoomBackground=((s=i.progress)==null?void 0:s.selectedEvaRoomBackground)||t.preferredEvaRoomBackground)}function lh(){return{quiet:12e4,normal:yn(45e3,12e4),active:45e3}}function ch(){la&&window.clearInterval(la),la=window.setInterval(uh,5e3)}function as(){const e=ee(),t=lh()[e.frequency]||yn(45e3,12e4);e.nextSpeakAt=Date.now()+t}function uh(){var a;if(document.hidden||!i.progress||!i.evaRuntime)return!1;const e=Te(),t=i.evaRuntime,n=ee(),s=Date.now();let r=!1;if(e.idleMs>9e4&&(!t.lastEvent||t.lastEvent.type!=="idle_timeout")&&s-Number(t.lastPhraseAt||0)>6e4)return Ce("idle_timeout",{idleMs:e.idleMs}),!0;if(s-Number(t.lastEmotionChangeAt||0)>=Number(((a=t.cooldowns)==null?void 0:a.emotion)||18e3)){const l=Mt(e),c=ii(e,l);(l!==t.mood||c!==t.emotion)&&(t.mood=l,t.emotion=c,n.mood=l,n.emotion=c,t.lastEmotionChangeAt=s,t.cooldowns.emotion=yn(15e3,3e4),r=!0)}return i.route==="eva-room"&&s>=Number(n.nextSpeakAt||0)&&(Math.random()<.14?(t.mood="quiet",t.emotion="observe",t.presenceState="quiet",n.mood="quiet",n.emotion="observe",as(),r=!0):Us("timer",{context:e})&&(r=!0)),r&&(Mn(),C(),i.route==="eva-room"&&I()),r}function Te(e={}){var a,l,c,u,p,d;const t=i.progress?Et():{},n=i.evaRuntime||yt(),s=_n(xt(),n.memory||{}),r=new Date().getHours();return ic(),{route:i.route,hour:r,timeOfDay:r<5?"late_night":r<11?"morning":r<18?"day":r<23?"evening":"night",correctToday:Number(t.reviews||0)-Number(t.mistakes||0),mistakesToday:Number(t.mistakes||0),reviewsToday:Number(t.reviews||0),learnedToday:Number(t.learned||0),streak:Number(((l=(a=i.progress)==null?void 0:a.streak)==null?void 0:l.current)||0),level:Number(((c=i.progress)==null?void 0:c.level)||1),moonFragments:Number(((u=i.progress)==null?void 0:u.moonFragments)||0),ownedSkins:n.ownedSkins||[],ownedBackgrounds:n.ownedBackgrounds||[],ownedEffects:n.ownedEffects||[],ownedDecorations:n.ownedDecorations||[],activeSkin:n.activeSkin||((p=i.progress)==null?void 0:p.selectedEvaSprite)||"idle",activeBackground:n.activeBackground||((d=i.progress)==null?void 0:d.selectedEvaRoomBackground)||"bg_study_hub",memory:s,daysSinceReturn:Number(s.daysSinceReturn||0),recentTopics:s.recentTopics||[],recentLineIds:s.recentLineIds||[],timesUserChoseTalkOverStudy:Number(s.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(s.timesUserReturnedAfterGap||0),idleMs:Date.now()-Number(n.lastPlayerActionAt||Date.now()),sessionMs:Date.now()-ga,lastEvent:n.lastEvent,dueReviews:i.progress?Fe():0,shopOpen:!!i.evaRoomShopOpen,...e}}function Mt(e=Te()){var n,s,r,a,l,c;const t=(n=e.lastEvent)==null?void 0:n.type;return t==="level_up"||t==="lesson_complete"||t==="streak_up"?"happy":t==="item_bought"&&String(((r=(s=e.lastEvent)==null?void 0:s.payload)==null?void 0:r.itemId)||"").includes("moon")?"mystic":e.shopOpen||t==="shop_opened"||t==="item_bought"?"curious":e.route==="learn"||e.route==="review"||e.dueReviews>0?"focused":e.mistakesToday>=4?e.correctToday>e.mistakesToday?"soft":"strict":e.hour>=23||e.hour<5?(a=e.ownedEffects)!=null&&a.includes("effect_moon_particles")?"mystic":"quiet":e.sessionMs>35*60*1e3?"tired":e.activeSkin==="cyber_eva"||(l=e.ownedSkins)!=null&&l.includes("cyber_eva")?"cyber":e.activeSkin==="silent_road"||(c=e.ownedSkins)!=null&&c.includes("silent_road")?"travel":e.route==="eva-room"&&e.streak>=7?"soft":"neutral"}function ii(e=Te(),t=Mt(e),n=(s=>(s=e.lastEvent)==null?void 0:s.type)()||"auto"){if(n==="answer_correct")return Ue(["approve","happy","soft_smile"]);if(n==="answer_wrong")return Ue(["thinking","strict","serious"]);if(n==="lesson_complete")return"approve";if(n==="level_up")return"special";if(n==="item_bought"||n==="shop_opened")return"observe";if(n==="user_clicked_eva")return Ue(["curious","shy","observe"]);if(n==="idle_timeout")return"observe";const r={neutral:["idle","observe"],focused:["ready","explain","thinking"],soft:["soft_smile","approve"],strict:["strict","serious"],tired:["tired","idle"],happy:["happy","approve"],serious:["serious","thinking"],mystic:["special","observe"],cyber:["observe","thinking"],travel:["ready","observe"],quiet:["observe","idle"],curious:["thinking","surprised","observe"]};return Ue(r[t]||r.neutral)}function Us(e="auto",t={}){var v;if(!i.progress||!Zr()||!t.force&&i.route!=="eva-room")return!1;const n=ee(),s=Date.now();if(!t.force&&((v=n.currentLine)!=null&&v.text)&&n.nextSpeakAt&&s<Number(n.nextSpeakAt))return!1;const r=t.context||Te({lastEvent:{type:e,payload:t.eventPayload||{}}}),a=Mt(r),l=Bc(e)||Ga(e);if(!l)return!1;i.evaRuntime||(i.evaRuntime=yt()),i.evaRuntime.mood=a;const c=l.emotion||ii(r,a,e),u=ti(l),p=tn(ni(l),c),d=Ha(l),g=Qa(l),f=Gc(r,l);return n.currentLine={id:l.id,category:l.category||"mood",text:l.text,sprite:p,background:u.id,decoration:d,effect:g,emotion:c,state:l.state||"speak",at:new Date().toISOString(),reason:e},n.currentQuestion=f,n.currentDecoration=d,n.currentEffect=g,n.mood=a,n.emotion=c,n.lastSpokeAt=n.currentLine.at,n.lastRoomId=u.id,n.lastSprite=p,n.recentLineIds=[l.id,...(n.recentLineIds||[]).filter(b=>b!==l.id)].slice(0,32),i.evaRuntime||(i.evaRuntime=yt()),Object.assign(i.evaRuntime,{mood:a,emotion:c,presenceState:l.state||"speak",currentPhrase:n.currentLine,pendingQuestion:f,currentSkin:p,currentBackground:u.id,currentDecoration:d,currentEffect:g,activeSkin:p,activeBackground:u.id,lastPhraseAt:s,lastEmotionChangeAt:s,lastQuestionAt:f?s:Number(i.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:s,textRevealSkippedLineId:null,cooldowns:{...i.evaRuntime.cooldowns,emotion:yn(15e3,3e4),phrase:yn(45e3,12e4),question:yn(3*6e4,7*6e4),visual:yn(10*6e4,15*6e4)}}),ri(l,e,r),Xa(p,u.file),as(),Ne(l.relationshipDelta||{warmth:.1},`eva_autonomy:${l.id}`,{silent:!0}),Mn(),Ft(),!0}function Bc(e){const t=oh(e,Te({lastEvent:{type:e}}));if(t)return t;const s={answer_correct:[{ru:"Верно.",en:"Correct."},{ru:"Хорошо.",en:"Good."},{ru:"Да. Именно так.",en:"Yes. Exactly."},{ru:"Ты начинаешь видеть структуру.",en:"You are starting to see the structure."},{ru:"Неплохо. Продолжай.",en:"Not bad. Continue."}],answer_wrong:[{ru:"Не совсем.",en:"Not quite."},{ru:"Посмотри ещё раз.",en:"Look again."},{ru:"Не угадывай. Разбери.",en:"Do not guess. Break it down."},{ru:"Запомни не ответ, а причину.",en:"Remember the reason, not just the answer."},{ru:"Это место стоит повторить.",en:"This part is worth repeating."}],user_clicked_eva:[{ru:"Да?",en:"Yes?"},{ru:"Что-то нужно?",en:"Need something?"},{ru:"Я слушаю.",en:"I'm listening."},{ru:"Не отвлекайся слишком часто.",en:"Don't distract yourself too often."},{ru:"Если нужен совет — спроси.",en:"If you need advice, ask."}],idle_timeout:[{ru:"Ты всё ещё здесь?",en:"Still here?"},{ru:"Сделаем короткий шаг?",en:"One short step?"},{ru:"Я подожду.",en:"I'll wait."},{ru:"Не исчезай надолго.",en:"Don't vanish for too long."}],manual:[{ru:"Один шаг всё ещё шаг.",en:"One step is still a step."},{ru:"Я рядом. Продолжай.",en:"I'm nearby. Continue."},{ru:"Кандзи не убегут. Но лучше не заставлять их ждать.",en:"The kanji won't run. Better not keep them waiting."},{ru:"Сначала форма. Потом смысл.",en:"Shape first. Meaning after."}],lesson_complete:[{ru:"Урок закрыт. След оставлен.",en:"Lesson complete. A mark is left."},{ru:"Хорошая работа. Теперь закрепи.",en:"Good work. Now reinforce it."}],level_up:[{ru:"Уровень выше. Дорога стала длиннее, не легче.",en:"Level up. The road is longer, not easier."},{ru:"Ты стал крепче. Это заметно.",en:"You got steadier. It shows."}],item_bought:[{ru:"Новая вещь. Посмотрим, приживётся ли.",en:"A new item. We'll see if it settles in."},{ru:"Комната меняется. Ты тоже.",en:"The room changes. So do you."}],room_opened:[{ru:"Я здесь.",en:"I'm here."},{ru:"Ты снова здесь. Это говорит больше, чем обещание.",en:"You're here again. That says more than a promise."},{ru:"Продолжай. Я посмотрю.",en:"Continue. I'll watch."}]}[e]||[],r=new Set(ee().recentLineIds||[]),a=s.filter(c=>!r.has(`${e}_${xe(`${c.ru||c.en}`)}`)),l=Ue(a.length?a:s);return l?{id:`${e}_${xe(`${l.ru||l.en}`)}`,category:e,text:l,relationshipDelta:{}}:null}function Fc(){var n;const e=ee(),t=(n=e.currentLine)==null?void 0:n.id;t&&(e.recentLineIds=[t,...(e.recentLineIds||[]).filter(s=>s!==t)].slice(0,32))}function dh(e="auto"){var l,c;const t=jt(),n=new Date().getHours(),s=Fe(),r=Et(),a=[];return a.push(...ih(e)),(e==="return"||!t.lastInteractionDate&&i.progress.appOpens>1)&&a.push("fis_return","return"),e==="room_opened"&&a.push("fis_room","fis_observation","room"),(e==="shop_opened"||e==="item_bought"||e==="item_equipped")&&a.push("fis_room","fis_reward","reward"),e==="answer_correct"&&a.push("fis_focus","fis_short","study"),e==="answer_wrong"&&a.push("fis_guard","fis_focus","mood"),(e==="user_clicked_eva"||e==="eva_click")&&a.push("fis_observation","fis_short","mood"),e==="idle_timeout"&&a.push("fis_return","fis_short","return"),e==="user_answered_eva_question"&&a.push("fis_focus","fis_observation"),e==="lesson_start"&&a.push("fis_study","study","fis_focus"),(e==="lesson_complete"||e==="level_up"||e==="streak_up")&&a.push("fis_reward","reward","fis_streak"),(e==="writing_complete"||e==="sentence_complete"||e==="advanced_mode")&&a.push("fis_observation","fis_focus"),(n>=23||n<5)&&a.push("fis_night","night"),s>=8&&a.push("fis_review","review"),(r.reviews||0)===0&&a.push("fis_study","study"),(((l=i.progress.streak)==null?void 0:l.current)||0)>=3&&a.push("fis_streak","streak"),((c=i.progress.rewardHistory)!=null&&c.length||i.rewardModal)&&a.push("fis_reward","reward"),t.mood==="curious"&&a.push("fis_observation","fis_focus","fis_room","hint","room"),(t.mood==="worried"||t.mood==="reserved")&&a.push("fis_guard","fis_return","mood","return"),a.push("fis_observation","fis_road","fis_guard","fis_focus","fis_short","mood","study","short"),[...new Set(a)]}function Ga(e="auto"){var p,d,g;pe(),Js();const t=jt(),n=Te({lastEvent:{type:e}}),s=(p=ee().currentLine)==null?void 0:p.id,r=new Set([s,...ee().recentLineIds||[],...((g=(d=i.evaRuntime)==null?void 0:d.memory)==null?void 0:g.recentLineIds)||[]].filter(Boolean)),a=Array.isArray(i.evaAutonomyLines)?i.evaAutonomyLines:[],l=dh(e),c=(f,v=!1)=>a.filter(b=>{if(!(b.category===f||(b.tags||[]).includes(f))||!v&&r.has(b.id)||!Wc(b,t)||!ah(b,n))return!1;const S=Array.isArray(b.moods)?b.moods:[];return!S.length||S.includes(t.mood)});for(const f of l){const v=c(f);if(v.length)return Ue(v)}for(const f of l){const v=c(f,!0);if(v.length)return Ue(v)}const u=a.filter(f=>!r.has(f.id));return Ue(u.length?u:a)}function Ce(e,t={}){if(!e)return;Ws(),V();const n={type:Jc(e),payload:t||{},at:Date.now()};zc(n),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...n,handledByFlashKanji:!0}}))}Object.assign(window,{dispatchEvaEvent:Ce});function zc(e={}){if(!e.type||!i.progress)return;pe(),i.evaRuntime||(i.evaRuntime=yt());const t={type:Jc(e.type),payload:e.payload||{},at:e.at||Date.now()};i.evaRuntime.lastEvent=t,i.evaRuntime.eventHistory=[t,...i.evaRuntime.eventHistory||[]].slice(0,80),i.evaRuntime.recentEvents=[t,...i.evaRuntime.recentEvents||[]].slice(0,80),Kc(t),["timer","idle_timeout"].includes(t.type)||(i.evaRuntime.lastPlayerActionAt=Date.now());const n=ph(t.type,t.payload);Object.keys(n).length&&Ne(n,`eva_event:${t.type}`,{silent:!0});const s=ee();Fc(),s.nextSpeakAt=0;const r=Us(t.type,{force:!0,eventPayload:t.payload});Mn(),C(),r&&i.route==="eva-room"&&I()}function Jc(e){const t=String(e||"");return t==="eva_click"?"user_clicked_eva":t}function ph(e,t={}){const s={...{room_opened:{warmth:.2,curiosity:.2},shop_opened:{curiosity:.4},item_bought:{warmth:.5,curiosity:.8},item_equipped:{curiosity:.3},eva_click:{warmth:.35,curiosity:.2},user_clicked_eva:{warmth:.35,curiosity:.2},answer_correct:{trust:.35,discipline:.2},answer_wrong:{discipline:-.45,trust:-.15,curiosity:.15},lesson_start:{discipline:.25},lesson_complete:{warmth:1.1,trust:1.2,discipline:1.1},level_up:{warmth:1,curiosity:.8},streak_up:{discipline:.8,trust:.4},writing_complete:{curiosity:.5,discipline:.3},sentence_complete:{trust:.45,curiosity:.3},advanced_mode:{curiosity:.5,discipline:.4}}[e]||{}};return e==="answer_wrong"&&t.comboLost&&(s.discipline=(s.discipline||0)-.25),s}function Ha(e){var r;const t=((r=i.evaRuntime)==null?void 0:r.mood)||Mt(Te()),n={close:["deco_tea_table","deco_lantern","deco_moon_frame"],proud:["deco_kanji_board","deco_bookshelf","deco_gold_accent"],curious:["deco_bookshelf","deco_kanji_board","deco_tea_table"],worried:["deco_lantern","deco_moon_frame"],reserved:["deco_lantern","deco_bookshelf"],focused:["deco_kanji_board","deco_bookshelf"],soft:["deco_tea_table","deco_lantern"],strict:["deco_kanji_board","deco_scroll"],tired:["deco_tea_table","deco_lantern"],happy:["deco_golden_accent","deco_moon_frame"],serious:["deco_scroll","deco_lantern"],mystic:["deco_moon_frame","deco_lantern"],cyber:["deco_kanji_board","deco_bookshelf"],travel:["deco_scroll","deco_lantern"],quiet:["deco_lantern","deco_bookshelf"],neutral:["deco_bookshelf","deco_tea_table","deco_lantern"]},s=[...(e==null?void 0:e.preferredDecorations)||[],...n[t]||n.neutral];return Uc("decoration",s)}function Qa(e){var r;const t=((r=i.evaRuntime)==null?void 0:r.mood)||Mt(Te()),n={close:["effect_golden_glow","effect_sakura_particles"],proud:["effect_golden_glow","effect_moon_particles"],curious:["effect_cyber_hud","effect_sakura_particles"],worried:["effect_snow_particles","effect_dust_particles"],reserved:["effect_dust_particles","effect_snow_particles"],focused:["effect_lesson_shine","effect_golden_glow"],soft:["effect_sakura_particles","effect_golden_glow"],strict:["effect_level_frame","effect_dust_particles"],tired:["effect_snow_particles","effect_dust_particles"],happy:["effect_golden_glow","effect_moon_particles"],serious:["effect_dust_particles","effect_level_frame"],mystic:["effect_moon_particles","effect_golden_glow"],cyber:["effect_cyber_hud","effect_lesson_shine"],travel:["effect_dust_particles","effect_snow_particles"],quiet:["effect_moon_particles","effect_snow_particles"],neutral:["effect_golden_glow","effect_moon_particles"]},s=[...(e==null?void 0:e.preferredEffects)||[],...n[t]||n.neutral];return Uc("effect",s)||"none"}function Uc(e,t=[]){const n=et().filter(r=>r.type===e&&St(r.id)),s=t.map(r=>n.find(a=>a.id===r)).find(Boolean)||Ue(n);return(s==null?void 0:s.id)||null}function Gc(e=Te(),t=null){var g,f,v,b,$,S,j,k,x,T,B;const n=ee();if((g=n.currentQuestion)!=null&&g.id)return n.currentQuestion;if((v=(f=i.evaRuntime)==null?void 0:f.pendingQuestion)!=null&&v.id)return n.currentQuestion=i.evaRuntime.pendingQuestion,n.currentQuestion;const s=((b=e.lastEvent)==null?void 0:b.type)||"auto",r=["user_clicked_eva","room_opened","manual"].includes(s),a=Date.now(),l=Number((($=i.evaRuntime)==null?void 0:$.lastQuestionAt)||((j=(S=i.evaRuntime)==null?void 0:S.lastQuestion)==null?void 0:j.at)||0),c=Number(((x=(k=i.evaRuntime)==null?void 0:k.cooldowns)==null?void 0:x.question)||yn(3*6e4,7*6e4));if(!r&&a-l<c||!r&&Math.random()>.34)return null;const u=new Set((B=(T=i.evaRuntime)==null?void 0:T.questionHistory)==null?void 0:B.slice(0,6).map(L=>L.id)),p=Hc(s).filter(L=>!u.has(L.id)),d=Ue(p.length?p:Hc(s));return d?{...d,at:new Date().toISOString()}:null}function Hc(e="auto"){var a,l,c;const t=Bm();if(t.length<2)return[];const n=new Set((((a=i.evaRuntime)==null?void 0:a.questionHistory)||[]).slice(0,10).map(u=>u.cardId).filter(Boolean)),s=`${ce()}:${e}:${((l=i.progress)==null?void 0:l.totalCorrect)||0}:${((c=i.progress)==null?void 0:c.totalWrong)||0}`;return[...t].sort((u,p)=>{const d=n.has(String(u.id))?1:0,g=n.has(String(p.id))?1:0;return d-g||xe(`${s}:${u.id}`)-xe(`${s}:${p.id}`)}).slice(0,18).map(u=>gh(u,t,e)).filter(Boolean)}function gh(e,t,n="auto"){const s=Ee(e,"ru"),r=Ee(e,"en");if(!s||!r)return null;const a=mh(e,t);if(!a.length)return null;const l=String(e.jlpt||"").toUpperCase(),c=l||(m()==="ru"?"твоих карточек":"your cards"),u=Qc(e,e,!0),p=[u,...a.map(d=>Qc(d,e,!1))].sort((d,g)=>xe(`${n}:${e.id}:${d.id}`)-xe(`${n}:${e.id}:${g.id}`));return{id:`kanji_meaning_${e.id}_${xe(`${s}:${r}`)}`,kind:"kanji_meaning",cardId:String(e.id),kanji:e.kanji,jlpt:l,answerId:u.id,answerText:{ru:s,en:r},text:{ru:`Что значит кандзи ${e.kanji} из ${c}?`,en:`What does the ${c} kanji ${e.kanji} mean?`},options:p,at:new Date().toISOString()}}function mh(e,t){const n=ai(Ee(e,"ru")),s=ai(Ee(e,"en")),r=String(e.jlpt||"").toUpperCase(),l=[...t.filter(c=>{if(!(c!=null&&c.id)||String(c.id)===String(e.id)||c.kanji===e.kanji)return!1;const u=ai(Ee(c,"ru")),p=ai(Ee(c,"en"));return!(!u||!p||u===n||p===s)})].sort((c,u)=>{const p=String(c.jlpt||"").toUpperCase()===r?0:1,d=String(u.jlpt||"").toUpperCase()===r?0:1;return p-d||xe(`${e.id}:${c.id}`)-xe(`${e.id}:${u.id}`)});return l.slice(0,Math.min(3,l.length))}function Qc(e,t,n){const s=Ee(e,"ru"),r=Ee(e,"en"),a=Ee(t,"ru"),l=Ee(t,"en");return{id:`meaning_${xe(`${t.id}:${e.id}:${s}:${r}`)}`,cardId:String(e.id),text:{ru:s,en:r},correct:n,delta:n?{trust:.7,discipline:.35,curiosity:.2}:{discipline:-.35,curiosity:.15},reply:n?{ru:`Верно. ${t.kanji}: ${a}.`,en:`Correct. ${t.kanji}: ${l}.`}:{ru:`Не совсем. ${t.kanji}: ${a}.`,en:`Not quite. ${t.kanji}: ${l}.`}}}function ai(e){return String(e||"").toLocaleLowerCase(m()==="ru"?"ru-RU":"en-US").replace(/[.,;:!?\s]+/g," ").trim()}function fh(e){pe();const t=oi();t!=null&&t.id&&hh(t.id,e.dataset.option)}function hh(e,t){var g,f;pe();const n=ee(),s=oi();if(!(s!=null&&s.id)||s.id!==e)return;const r=(g=s.options)==null?void 0:g.find(v=>v.id===t);if(!r)return;const l=((f=s.options)==null?void 0:f.some(v=>v.correct||v.id===s.answerId))?!!(r.correct||r.id===s.answerId):null;i.evaRuntime||(i.evaRuntime=yt()),i.evaRuntime.pendingQuestion=null,n.currentQuestion=null,Ne(r.delta||(l===!1?{discipline:-.2}:{warmth:.2}),`eva_question:${s.id}`),s.kind==="kanji_meaning"&&vh(s,r,l);const c={id:s.id,kind:s.kind||"dialogue",cardId:s.cardId||null,kanji:s.kanji||"",option:r.id,correct:l,at:new Date().toISOString()};i.evaRuntime.lastQuestion={...c,at:Date.now()},i.evaRuntime.lastQuestionAt=Date.now(),i.evaRuntime.pendingQuestion=null,i.evaRuntime.questionHistory=[c,...i.evaRuntime.questionHistory||[]].slice(0,40);const u=ti({}),p=l===!1?"thinking":"approve",d=tn(ni({sprite:p}),p);n.currentLine={id:`question_reply_${s.id}_${r.id}`,category:"question_reply",text:r.reply||wh(s,l),sprite:d,background:u.id,emotion:p,state:"react",at:new Date().toISOString(),reason:"question_answer"},i.evaRuntime.presenceState="react",i.evaRuntime.textRevealSkippedLineId=null,ri(n.currentLine,"question_answer",Te({lastEvent:{type:"question_answer"}})),n.lastSpokeAt=n.currentLine.at,n.lastRoomId=u.id,n.lastSprite=d,as(),yh(s,r,l),Mn(),C(),_(l===!1?"answer_wrong":l===!0?"answer_correct":"notification_soft"),I()}function oi(){var n,s;const e=ee(),t=(n=e.currentQuestion)!=null&&n.id?e.currentQuestion:(s=i.evaRuntime)==null?void 0:s.pendingQuestion;return t!=null&&t.id?(e.currentQuestion=t,i.evaRuntime||(i.evaRuntime=yt()),i.evaRuntime.pendingQuestion=t,t):null}function wh(e,t){return e.kind==="kanji_meaning"&&e.kanji&&e.answerText?t?{ru:`Верно. ${e.kanji}: ${e.answerText.ru||w(e.answerText)}.`,en:`Correct. ${e.kanji}: ${e.answerText.en||w(e.answerText)}.`}:{ru:`Не совсем. ${e.kanji}: ${e.answerText.ru||w(e.answerText)}.`,en:`Not quite. ${e.kanji}: ${e.answerText.en||w(e.answerText)}.`}:{ru:"Принято.",en:"Noted."}}function vh(e,t,n){const s=gc(),r=bh(e);r&&Ks(r,"eva_room_quiz"),s.answered=Number(s.answered||0)+1,s.correct=Number(s.correct||0)+(n?1:0),s.wrong=Number(s.wrong||0)+(n?0:1),s.streak=n?Number(s.streak||0)+1:0,s.history=[{id:e.id,cardId:e.cardId||null,kanji:e.kanji||"",jlpt:e.jlpt||"",selected:t.id,correct:n,answer:w(e.answerText||{}),at:new Date().toISOString()},...s.history||[]].slice(0,40);const a=Et();a.reviews=Number(a.reviews||0)+1,n?(i.progress.totalCorrect=Number(i.progress.totalCorrect||0)+1,r&&kh(r),r&&!s.rewarded[String(r.id)]&&(s.rewarded[String(r.id)]=new Date().toISOString(),Q(2,s.streak>0&&s.streak%3===0?1:0,`eva_room_quiz:${r.id}`))):(i.progress.totalWrong=Number(i.progress.totalWrong||0)+1,a.mistakes=Number(a.mistakes||0)+1,r&&$h(r)),a.minutes=Vi(Number(a.reviews||0)*.75+Number(a.learned||0)*1.25,1),i.progress.daily[ce()]=a,_e(),To(),V()}function bh(e){const t=String((e==null?void 0:e.cardId)||""),n=String((e==null?void 0:e.kanji)||""),s=String((e==null?void 0:e.jlpt)||"").toUpperCase();return(t?ae(t):null)||mc().find(r=>{if(!r)return!1;const a=t&&String(r.id)===t,l=n&&r.kanji===n,c=!s||String(r.jlpt||"").toUpperCase()===s;return a||l&&c})||(n?i.cards.find(r=>r.kanji===n):null)||null}function kh(e){const t=String((e==null?void 0:e.jlpt)||"").toUpperCase(),n=Ma().find(s=>s.level===t);n&&n.markStudied(e.kanji,e.id)}function $h(e){const t=String((e==null?void 0:e.jlpt)||"").toUpperCase(),n=Ma().find(s=>s.level===t);n&&n.markDifficult(e.kanji,e.id)}function yh(e,t,n){if(!i.evaRuntime)return;const s={type:"user_answered_eva_question",payload:{questionId:e.id,answerId:t.id,cardId:e.cardId||null,kanji:e.kanji||"",correct:n},at:Date.now()};i.evaRuntime.lastEvent=s,i.evaRuntime.eventHistory=[s,...i.evaRuntime.eventHistory||[]].slice(0,80),i.evaRuntime.recentEvents=[s,...i.evaRuntime.recentEvents||[]].slice(0,80),Kc(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}function jh(){pe(),Zr()&&Us("render");const e=qc();let t=ee().currentLine;if(Zr()&&!(t!=null&&t.text)&&i.evaAutonomyLines.length){const r=Ga("render_fallback")||i.evaAutonomyLines[0],a=ti(r),l=Te({lastEvent:{type:"render_fallback"}}),c=Mt(l),u=Ha(r),p=Qa(r),d=r.emotion||ii(l,c,"render_fallback"),g=tn(ni(r),d);t={id:r.id,category:r.category||"mood",text:r.text,sprite:g,background:a.id,decoration:u,effect:p,emotion:d,state:r.state||"observe",at:new Date().toISOString()},ee().currentLine=t,ee().currentDecoration=u,ee().currentEffect=p,ee().mood=c,ee().emotion=d,ee().lastSpokeAt=t.at,ee().lastRoomId=a.id,ee().lastSprite=g,i.evaRuntime.presenceState=t.state,i.evaRuntime.textRevealSkippedLineId=null,ri(r,"render_fallback",l),Xa(g,a.file),as(),C()}if(Zr()&&(t!=null&&t.text)){const r=is(t.background)||_t(),a=tn(t.sprite||"relationship",t.emotion||ee().emotion);return{isAutonomy:!0,line:t,bg:r,spriteId:a,sprite:os(a),decoration:t.decoration||ee().currentDecoration,effect:t.effect||ee().currentEffect,mood:ee().mood||jt().mood,emotion:t.emotion||ee().emotion||"calm",node:{id:"eva_autonomy_line",background:r.id,sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[]}}}const n=is(e.background)||_t(),s=tn(e.sprite,ee().emotion);return{isAutonomy:!1,line:null,bg:n,spriteId:s,sprite:os(s),decoration:ee().currentDecoration,effect:ee().currentEffect,mood:jt().mood,emotion:ee().emotion||"calm",node:e}}function Xc(e="adaptive"){pe(),Js();const t=jt(),n=new Set(i.progress.evaRoomDialogueProgress.lineHistory||[]),s=si().filter(u=>{const p=Array.isArray(u.tags)?u.tags:[];return!(e==="adaptive"||u.category===e||p.includes(e))||!Wc(u,t)?!1:!n.has(u.id)}),r=si().filter(u=>e==="adaptive"||u.category===e||(u.tags||[]).includes(e)),a=s.length?s:r.length?r:si(),l=Ue(a)||{id:"fallback",category:"adaptive",text:{ru:"Я рядом. Давай сделаем хотя бы один честный шаг.",en:"I'm here. Let's make one honest step."},sprite:"relationship",background:_t().id},c=i.progress.evaRoomDialogueProgress.lineHistory||[];return i.progress.evaRoomDialogueProgress.lineHistory=[l.id,...c.filter(u=>u!==l.id)].slice(0,24),{id:l.id,category:l.category||e,text:l.text||{ru:String(l.ru||""),en:String(l.en||l.ru||"")},sprite:l.sprite||"relationship",background:l.background||_t().id,relationshipDelta:l.relationshipDelta||{}}}function Wc(e,t){return[["minWarmth",t.warmth,(s,r)=>s>=r],["maxWarmth",t.warmth,(s,r)=>s<=r],["minTrust",t.trust,(s,r)=>s>=r],["maxTrust",t.trust,(s,r)=>s<=r],["minDiscipline",t.discipline,(s,r)=>s>=r],["maxDiscipline",t.discipline,(s,r)=>s<=r],["minCuriosity",t.curiosity,(s,r)=>s>=r],["maxCuriosity",t.curiosity,(s,r)=>s<=r]].every(([s,r,a])=>typeof e[s]=="undefined"||a(r,Number(e[s])))}function qc(){pe();const e=sh(i.progress.evaRoomDialogueProgress.currentNode);return i.progress.evaRoomDialogueProgress.visited[e.id]=new Date().toISOString(),e}function os(e){var t,n;return((t=i.evaSprites)==null?void 0:t[e])||((n=i.evaSprites)==null?void 0:n.default)||"assets/mascots/eva_normal.webp"}function Xa(e,t=""){[os(e),t].filter(Boolean).forEach(n=>{try{const s=new Image;s.src=n,s.decode&&s.decode().catch(()=>null)}catch(s){console.warn("Eva visual preload skipped.",s)}})}function Sh(e){var l;const n=(l=qc().choices)==null?void 0:l[Number(e.dataset.index||0)];if(!n)return;pe();const s=i.progress.evaRelationship;s.conversationCount=Number(s.conversationCount||0)+1,s.totalDialogueChoices=Number(s.totalDialogueChoices||0)+1,s.lastInteractionAt=new Date().toISOString(),s.lastInteractionDate=ce(),Nh(n),Ne(n.relationshipDelta||{warmth:.4,curiosity:.2},"dialogue_choice");const r=Number(n.rewardMoonFragments||0),a=n.rewardOnceKey;if(r>0&&a&&!i.progress.evaRoomDialogueProgress.rewardsClaimed[a]&&(i.progress.evaRoomDialogueProgress.rewardsClaimed[a]=new Date().toISOString(),Q(0,r,`eva_room:${a}`),U(en().reward)),n.randomLine){const c=Xc(n.randomLine);Ne(c.relationshipDelta||{},`eva_line:${c.id}`,{silent:!0}),i.progress.evaRoomDialogueProgress.generatedLine=c,i.progress.evaRoomDialogueProgress.currentNode="generated_line"}else i.progress.evaRoomDialogueProgress.generatedLine=null,i.progress.evaRoomDialogueProgress.currentNode=n.next||"intro";if(n.openShop&&(i.evaRoomShopOpen=!0),C(),n.route){He(n.route);return}_(n.openShop?"menu_open":"page_turn"),I()}function Nh(e={}){if(!i.evaRuntime)return;i.evaRuntime.memory=_n(xt(),i.evaRuntime.memory||{});const t=i.evaRuntime.memory,n=!!(e.randomLine&&!e.route),s=["learn","review"].includes(e.route);n&&(t.timesUserChoseTalkOverStudy=Number(t.timesUserChoseTalkOverStudy||0)+1),s&&(t.timesUserChoseTalkOverStudy=Math.max(0,Number(t.timesUserChoseTalkOverStudy||0)-1)),t.lastInteractionDate=ce(),t.lastRoute=i.route}function Ch(){pe(),i.progress.evaRoomDialogueProgress.currentNode="intro",i.progress.evaRoomDialogueProgress.generatedLine=null,i.evaRuntime&&(i.evaRuntime.presenceState="wait_choice",i.evaRuntime.textRevealSkippedLineId=null),C(),_("page_turn"),I()}function Ah(e){li(e)}function Lh(e){ci(e)}function Ih(e){const t=ve(e)||Rn(e)||xn(e);t&&li(t.id)}function Th(e){const t=ve(e)||Rn(e)||xn(e);t&&ci(t.id)}function St(e){var n,s;i.customization||Kr();const t=ve(e)||Rn(e);return!!(t!=null&&t.defaultOwned||(t==null?void 0:t.price)===0||(s=(n=i.customization)==null?void 0:n.owned)!=null&&s.includes((t==null?void 0:t.id)||e))}function Wa(e){return e?e.type==="background"?"background":e.type==="outfit"?"outfit":e.type==="theme"?"theme":e.type==="effect"?"effect":e.type==="decoration"?"decoration":e.type:null}function Rh(e){var n,s;const t=Wa(e);return!!(t&&((s=(n=i.customization)==null?void 0:n.selected)==null?void 0:s[t])===e.id)}function Vc(e){return!e||!qa(e)?"locked":Rh(e)?"selected":St(e.id)?"owned":"available"}function xh(e={}){var n,s,r,a,l,c,u;const t=[(s=(n=i.customization)==null?void 0:n.selected)==null?void 0:s.effect,e.effect,(r=i.evaRuntime)==null?void 0:r.currentEffect,(l=(a=i.evaRuntime)==null?void 0:a.currentLine)==null?void 0:l.effect,(u=(c=i.progress)==null?void 0:c.evaAutonomy)==null?void 0:u.currentEffect,ee().currentEffect];for(const p of t){const d=Rt(p);if(!d||d==="none")continue;const g=ve(d);if((g==null?void 0:g.type)==="effect"&&St(g.id))return g.id}return null}function Yc(e=null){var s,r,a,l,c,u;const t=Rt(e||((r=(s=i.customization)==null?void 0:s.selected)==null?void 0:r.effect)),n=ve(t);return!n||n.type!=="effect"||((l=(a=i.customization)==null?void 0:a.selected)==null?void 0:l.effect)!==n.id?!1:(i.customization.selected.effect=null,(c=i.progress)!=null&&c.evaAutonomy&&(i.progress.evaAutonomy.currentEffect=null),((u=i.evaRuntime)==null?void 0:u.currentEffect)===n.id&&(i.evaRuntime.currentEffect="none"),Ds(),Zn(),C(),Ft(),_("menu_close"),U(m()==="ru"?"Эффект убран.":"Effect removed."),I(),!0)}function _h(e=null){var a,l,c,u,p,d,g,f,v,b,$,S;const t=Rt(e||((l=(a=i.customization)==null?void 0:a.selected)==null?void 0:l.effect)||((u=(c=i.customization)==null?void 0:c.selected)==null?void 0:u.decoration)||((d=(p=i.customization)==null?void 0:p.selected)==null?void 0:d.frame)||((f=(g=i.customization)==null?void 0:g.selected)==null?void 0:f.outfit)||((b=(v=i.customization)==null?void 0:v.selected)==null?void 0:b.background)||((S=($=i.customization)==null?void 0:$.selected)==null?void 0:S.theme)),n=ve(t);if(!n)return!1;if(n.type==="effect")return Yc(n.id);i.customization||Kr();const s=Wa(n);if(!s)return!1;const r=Tn().selected;return s==="background"?i.customization.selected.background=r.background:s==="outfit"?i.customization.selected.outfit=r.outfit:s==="theme"?i.customization.selected.theme=r.theme:s==="decoration"&&(i.customization.selected.decoration=r.decoration,i.customization.selected.frame=r.frame),Ds(),Zn(),C(),Ft(),_("menu_close"),U(m()==="ru"?"Выбор сброшен.":"Selection cleared."),I(),!0}function Mh(e){if(!(e!=null&&e.unlockCondition)||qa(e))return"";const t=e.unlockCondition,n=m()==="ru";if(t.type==="achievement"){const s=Bn().find(a=>a.id===t.id),r=s?Co(s):t.id;return n?`Открывается за достижение: ${r}`:`Unlocks after achievement: ${r}`}return t.type==="level"?n?`Открывается на уровне ${t.value}`:`Unlocks at level ${t.value}`:t.type==="streak"?n?`Открывается за серию ${t.value} дн.`:`Unlocks at a ${t.value}-day streak`:""}function qa(e){var n,s;if(!(e!=null&&e.unlockCondition))return!0;const t=e.unlockCondition;return t.type==="level"?i.progress.level>=Number(t.value||0):t.type==="streak"?i.progress.streak.current>=Number(t.value||0):t.type==="achievement"?!!((s=(n=i.progress.achievements)==null?void 0:n[t.id])!=null&&s.unlockedAt):!0}function li(e){const t=ve(e);if(t){if(!qa(t)){_("purchase_failed"),U(rs().locked);return}if(St(t.id)){ci(t.id);return}if(i.progress.moonFragments<t.price){_("purchase_failed"),U(rs().notEnough);return}i.progress.moonFragments-=t.price,i.customization.owned=[...new Set([...i.customization.owned||[],t.id])],i.customization.seen=[...new Set([...i.customization.seen||[],t.id])],i.progress.transactions.unshift({at:new Date().toISOString(),reason:`customization:${t.type}:${t.id}`,label:pt(t),xp:0,coins:-t.price,balance:i.progress.moonFragments}),i.progress.transactions=i.progress.transactions.slice(0,80),Ds(),Zn(),V(),C(),_("purchase_success"),_("item_unlock"),Ce("item_bought",{itemId:t.id,type:t.type,title:pt(t),price:t.price}),U(rs().bought.replace("{item}",pt(t))),I()}}function ci(e){var s;const t=ve(e);if(!t||!St(t.id))return;const n=Wa(t);n&&(i.customization.selected[n]=t.id,n==="decoration"&&(i.customization.selected.frame=t.id),t.type==="outfit"&&t.spriteId&&(i.progress.selectedEvaSprite=t.spriteId,i.progress.evaAutonomy.currentLine=null),t.type==="background"&&(i.progress.selectedEvaRoomBackground=t.id,i.evaRuntime&&(i.evaRuntime.currentBackground=t.id,i.evaRuntime.activeBackground=t.id,(s=i.evaRuntime).memory||(s.memory=xt()),i.evaRuntime.memory.preferredEvaRoomBackground=t.id),i.progress.evaAutonomy.currentLine=null),Ds(),Zn(),C(),Ft(),_("notification_soft"),Ce("item_equipped",{itemId:t.id,type:t.type,title:pt(t)}),U(rs().selectedToast.replace("{item}",pt(t))),I())}function Ph(){const e=ee();e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",e.nextSpeakAt=0,Us("toggle",{force:!0}),C(),_("notification_soft"),U(Zt().status),I()}function Eh(){const e=ee();e.frequency="normal",as(),C(),_("notification_soft"),I()}function Dh(){const e=ee();e.roomMode="auto",e.currentLine=null,C(),_("notification_soft"),I()}function Oh(){const e=ee();e.outfitMode="auto",e.currentLine=null,C(),_("notification_soft"),I()}function Zc(){const e=ee();e.enabled=!0,Fc(),e.currentQuestion=null,e.currentLine=null,e.nextSpeakAt=0,eu("manual"),C(),_("page_turn"),I()}function eu(e="manual"){const t=Bc(e)||Ga(e);if(!t)return!1;const n=Te({lastEvent:{type:e}}),s=Mt(n),r=t.emotion||ii(n,s,e),a=ti(t),l=tn(ni(t),r),c=Ha(t),u=Qa(t),p=ee(),d=Date.now(),g=Gc(n,t);return p.currentLine={id:t.id,category:t.category||e,text:t.text,sprite:l,background:a.id,decoration:c,effect:u,emotion:r,state:t.state||"speak",at:new Date(d).toISOString(),reason:e},p.currentDecoration=c,p.currentEffect=u,p.mood=s,p.emotion=r,p.lastSpokeAt=p.currentLine.at,p.lastRoomId=a.id,p.lastSprite=l,p.currentQuestion=g,p.recentLineIds=[t.id,...(p.recentLineIds||[]).filter(f=>f!==t.id)].slice(0,32),i.evaRuntime||(i.evaRuntime=yt()),Object.assign(i.evaRuntime,{mood:s,emotion:r,presenceState:t.state||"speak",currentPhrase:p.currentLine,pendingQuestion:g,currentSkin:l,currentBackground:a.id,currentDecoration:c,currentEffect:u,activeSkin:l,activeBackground:a.id,lastPhraseAt:d,lastEmotionChangeAt:d,lastQuestionAt:g?d:Number(i.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:d,textRevealSkippedLineId:null}),ri(t,e,n),Xa(l,a.file),as(),Mn(),Ft(),!0}function Kh(){ee().currentLine=null,C(),_("menu_close"),I()}function E(e,t,n,s){return`
      <article class="metric">
        <span>${o(e)}</span>
        <strong>${o(t)}</strong>
        <div class="meter"><i style="width:${ge(s,0,100)}%"></i></div>
        <p class="label">${o(n)}</p>
      </article>
    `}function Bh(e){var u;const t=Ko(e.id),n=t.filter(p=>O(p.id).state!=="New").length,s=t.filter(p=>O(p.id).state==="Mastered").length,r=!Pe(e),a=pp(e),l=r?"鎖":((u=t[0])==null?void 0:u.kanji)||"文",c=D(s,t.length);return`
      <button class="lesson-tile ${r?"is-locked":""} ${Go(a)}" type="button" id="textbook-lesson-${h(e.id)}" data-action="start-lesson" data-id="${h(e.id)}">
        <span class="lesson-glyph">${o(l)}</span>
        <span>
          <span class="pill">${o(e.jlpt)}</span>
          ${Fy(a)}
          <h3>${o(yr(e))}</h3>
          <p>${o(Ij(e))}</p>
          <span class="lesson-meta">
            <span class="pill">${n}/${t.length}</span>
            <span class="pill mastered">${s} ${o(A("mastered"))}</span>
            ${r?`<span class="pill danger-pill">${o(A("unlockedAt"))} ${Di(e)}</span>`:""}
          </span>
          <span class="meter"><i style="width:${c}%"></i></span>
        </span>
      </button>
    `}function Fh(e){const t=pp(e),n=e.id===i.activeLessonId,s=!Pe(e);return`
      <button class="btn ${n?"primary":"ghost"} ${s?"is-disabled":""} ${Go(t)}" type="button" data-action="select-lesson" data-id="${h(e.id)}" title="${h(Ho(t))}">
        <span>${o(e.jlpt)}</span>
        ${By(t)}
      </button>
    `}function Va(){const e=String(i.activeLearnJlpt||"all").toUpperCase();return i.lessons.filter(t=>e==="ALL"||String(t.jlpt||"").toUpperCase()===e)}function zh(){const e=Va();return e.find(t=>t.id===i.activeLessonId)||e.find(t=>Pe(t))||e[0]||i.lessons.find(t=>t.id===i.activeLessonId)||i.lessons.find(t=>Pe(t))||i.lessons[0]||null}function Ya(){var e;return Y((e=zh())==null?void 0:e.jlpt)||Bt()}function tu(e){if(!e.length)return i.activeLessonId=null,null;const t=e.find(r=>r.id===i.activeLessonId);if(t&&Pe(t))return t;const s=e.find(r=>Pe(r))||e[0];return i.activeLessonId=(s==null?void 0:s.id)||null,s||null}function Jh(e){const t=e.length,n=e.filter(r=>Pe(r)).length,s=["all",...Oe];return`
      <div class="jlpt-filter-bar" role="tablist" aria-label="${h(m()==="ru"?"Фильтр уровней JLPT":"JLPT level filter")}">
        ${s.map(r=>{const a=String(i.activeLearnJlpt||"all").toLowerCase()===String(r).toLowerCase(),l=r==="all"?m()==="ru"?"Все":"All":r,c=r==="all"?t:i.lessons.filter(u=>u.jlpt===r).length;return`
            <button class="btn jlpt-filter-chip ${a?"primary":"ghost"}" type="button" role="tab" aria-selected="${a?"true":"false"}" data-action="set-learn-jlpt" data-jlpt="${h(r)}">
              <span>${o(l)}</span>
              <small>${c}</small>
            </button>
          `}).join("")}
      </div>
      <div class="learn-level-strip">
        <span class="pill">${o(m()==="ru"?"Уроки":"Lessons")}: ${t}</span>
        <span class="pill">${o(m()==="ru"?"Открыто":"Unlocked")}: ${n}</span>
        <button class="btn ghost learn-textbook-link" type="button" data-action="route" data-route="textbooks">${o(m()==="ru"?"Учебники Flash Kanji":"Flash Kanji textbooks")}</button>
      </div>
    `}function Uh(e){if(!e)return"";const t=e.textbook||e;return`
      <article class="learn-level-panel">
        <div class="learn-level-cover">
          <img src="${h(t.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <span class="pill">${o(t.jlpt||"")}</span>
        </div>
        <div class="learn-level-copy">
          <h3>${o(w(t.displayTitle||t.title||{}))}</h3>
          <p>${o(w(t.description||{}))}</p>
          <div class="tag-row">
            <span class="pill">${o(t.lessonCount||0)} ${o(m()==="ru"?"уроков":"lessons")}</span>
            <span class="pill">${o(t.kanjiCount||0)} ${o(A("cardsToday"))}</span>
            <span class="pill">${o(w(t.recommendedCycle||{}))}</span>
          </div>
          <div class="actions">
            <a class="btn primary" href="${h(t.pdfUrl||t.pdfFile||"")}" download="${h((t.pdfFile||t.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${o(m()==="ru"?"Скачать PDF":"Download PDF")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${o(m()==="ru"?"Все учебники":"All textbooks")}</button>
          </div>
        </div>
      </article>
    `}function Gh(e){const t=It(e==null?void 0:e.jlpt);return`
      <article class="lesson-locked-panel">
        <span class="pill danger-pill">${o(m()==="ru"?"Закрытый уровень":"Level locked")}</span>
        <h2>${o(e?yr(e):"")}</h2>
        <p>${o(m()==="ru"?`Откроется на уровне ${Di(e)}.`:`Unlocks at level ${Di(e)}.`)}</p>
        <div class="learn-level-lock-meta">
          <span class="pill">${o((e==null?void 0:e.jlpt)||"")}</span>
          <span class="pill">${o(m()==="ru"?"Закрыт":"Locked")}</span>
          <span class="pill">${o((t==null?void 0:t.lessonCount)||0)} ${o(m()==="ru"?"уроков в учебнике":"lessons in textbook")}</span>
        </div>
        <div class="actions">
          <button class="btn primary" type="button" data-action="route" data-route="textbooks">${o(m()==="ru"?"Просмотреть учебник":"View textbook")}</button>
          <button class="btn ghost" type="button" data-action="route" data-route="home">${o(m()==="ru"?"Домой":"Home")}</button>
        </div>
      </article>
    `}function Hh(){return i.activeLearnView===Nn?ew():i.activeLearnView===Gt?Zh():ru()}function Qh(){const e=uc();if(e.kind==="review"){He("review");return}if(i.route==="home"){Bi(Ya());return}nu(e.nodeId)}function nu(e){const t=ns(e);if(!t){Pn();return}if(cc(t)==="locked"){U(m()==="ru"?"Сначала закончи предыдущий шаг.":"Finish the previous step first.");return}if(t.id===Wn){He("review");return}if(t.id===qn){Ys("final-test");return}if(t.type==="textbook"){Ys(t.id);return}Pn(Gt,t.id)}function su(e){const t=String(e||"");return t&&(ae(t)||i.cards.find(n=>String(n.id)===t))||null}function Xh(){const e=ue();return[{id:"intro-1",kind:"info",eyebrow:e.intro,title:e.introTitle,text:e.introBody,note:e.finishHint},{id:"intro-2",kind:"info",eyebrow:e.route,title:e.nextLesson,text:e.introBridge,note:e.mapHint},{id:"intro-3",kind:"quiz",eyebrow:e.ready,title:e.introQuestion,text:e.introQuestionHint,answer:"review",options:[{value:"review",label:{ru:"В повторение",en:"Into review"}},{value:"memory",label:{ru:"В архив навсегда",en:"Into permanent archive"}},{value:"skip",label:{ru:"Никуда, пока не забудешь",en:"Nowhere, until you forget"}}]}]}function Gs(e){const t=mt(e);if(!t)return null;const n=nn(t);if(!n.length)return null;const s=Array.isArray(t.sentences)?t.sentences:[],r=n.map((a,l)=>{const c=ft(a)[0]||null,u=s[l%Math.max(s.length,1)]||s[0]||null,p=c?{jp:c.word||a.kanji,hiragana:c.reading||a.hiragana||"",translation:c.translation||(u?{ru:u.ru||"",en:u.en||""}:"")}:u?{jp:u.jp||a.kanji,hiragana:ne(u.reading||u.hiragana||a.hiragana||""),translation:{ru:u.ru||"",en:u.en||""}}:{jp:a.kanji,hiragana:a.hiragana||"",translation:{ru:P(a),en:P(a)}};return{cardId:a.id,sentence:p}});return{id:t.id,title:t.title,summary:t.goal||t.theme||t.title,objectives:[t.goal,t.theme].filter(Boolean),kanjiIds:n.map(a=>a.id),kanjiBlocks:r,exercises:qs(t),source:"learning_path"}}function Wh(e){if(e===Se)return Xh();const t=i.learningPathLessonPayloads[e]||Gs(e);if(!t)return[];const n=ue(),s=[],r=(t.objectives||[]).map(w).filter(Boolean).slice(0,3).join(" • ");return s.push({id:`${e}-overview`,kind:"info",eyebrow:"N5",title:w(t.title),text:w(t.summary),note:r||n.finishHint}),(t.kanjiBlocks||[]).forEach((a,l)=>{const c=su(a.cardId);if(!c)return;const u=a.sentence||null;s.push({id:`${e}-kanji-${l+1}`,kind:"kanji",eyebrow:c.jlpt||"N5",title:`${c.kanji} · ${P(c)}`,text:Nw(c,{word:(u==null?void 0:u.jp)||c.kanji,reading:(u==null?void 0:u.hiragana)||c.hiragana||""}),note:u!=null&&u.translation?w(u.translation):"",cardId:c.id,card:c,sentence:u})}),(t.exercises||[]).forEach(a=>{var c;const l=(a.options||[]).map(u=>{var p,d,g;return{value:String((g=(d=(p=u.value)!=null?p:u.id)!=null?d:u.label)!=null?g:u),label:w(u.label||u.text||u)}});s.push({id:String(a.id||`${e}-quiz-${s.length}`),kind:"quiz",eyebrow:"N5",title:w(a.prompt),text:w(a.promptHint||{ru:"",en:""}),answer:String((c=a.answer)!=null?c:""),options:l})}),s}function qh(e,t=null){var a;const n=Wh(e);if(!t||t.mode!=="mistakes"||!((a=t.reviewStepIds)!=null&&a.length))return n;const s=new Set(t.reviewStepIds),r=n.filter(l=>l.kind==="quiz"&&s.has(l.id));return r.length?r:n.filter(l=>l.kind==="quiz")}function Vh(e,t=Gt,n=[]){const s=Wt(),r=s.activeSession,a=n.map(String).filter(Boolean);return(r==null?void 0:r.nodeId)===e&&r.mode===t&&JSON.stringify(r.reviewStepIds||[])===JSON.stringify(a)?r:(s.activeSession=ba({nodeId:e,mode:t,stepIndex:0,answers:{},mistakes:[],reviewStepIds:a,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),s.lastUpdatedAt=s.activeSession.updatedAt,C(),s.activeSession)}function Hs(e){const t=Ra(),n=(t==null?void 0:t.nodeId)===e?t:Vh(e),s=qh(e,n),r=s.filter(c=>c.kind==="quiz"),a=Object.keys(n.answers||{}).length,l=Math.max(0,Number(n.stepIndex||0));return{session:n,steps:s,quizSteps:r,answeredCount:a,stepIndex:l,currentStep:s[l]||null,isResult:l>=s.length&&s.length>0}}function Yh(e,t,n){var c,u,p,d,g,f;const s=Wt(),r=new Date().toISOString(),a=n.filter(v=>v.kind==="quiz"),l=Array.isArray(t.mistakes)&&t.mistakes.length>0;if((c=s.completedNodes)[e]||(c[e]=r),s.resultHistory[e]={completedAt:r,score:Number(t.score||0),totalQuestions:a.length,mistakes:(t.mistakes||[]).slice(0,24)},s.activeSession=null,e===Se&&Q(12,0,"learning_path:intro"),/^n5-lesson-\d+$/i.test(e)){const v=mt(e),b=i.learningPathLessonPayloads[e]||Gs(e),$=[...new Set([...(b==null?void 0:b.kanjiIds)||[],...((b==null?void 0:b.kanjiBlocks)||[]).map(j=>j.cardId),...nn(v).map(j=>j.id)].map(String).filter(Boolean))],S=Z();if($.forEach(j=>{const k=su(j);if(!k)return;Ks(k,"learning_path"),Os(S,k.kanji);const x=oe(O(k.id));x.state==="New"&&(i.progress.cards[k.id]=Ae(x,l?"hard":"good"))}),v){we.add(`n5:${v.id}`),S.completedLessons[v.id]=r,S.currentLessonId=((u=Be().find(x=>x.order===v.order+1))==null?void 0:u.id)||v.id,i.progress.n5Course=i.progress.n5Course||{},i.progress.n5Course.completedLessons=i.progress.n5Course.completedLessons||{},i.progress.n5Course.completedLessons[v.id]=r,C({immediate:!0}),En()>=10&&Object.keys(S.studiedKanji||{}).length>=80&&(i.progress.unlockedJlptLevels=i.progress.unlockedJlptLevels||[],i.progress.unlockedJlptLevels.includes("N5")||i.progress.unlockedJlptLevels.push("N5"),i.progress.unlockedJlptLevels.includes("N4")||i.progress.unlockedJlptLevels.push("N4"));const j=((d=(p=i.n5Meta)==null?void 0:p.rewards)==null?void 0:d.lessonCompleteXp)||45,k=((f=(g=i.n5Meta)==null?void 0:g.rewards)==null?void 0:f.lessonCompleteMoon)||6;Q(j,k,`learning_path:${e}`),ot({title:`${Ke().lessonComplete}: ${w(v.title)}`,message:Ke().lessonCompleteText,xp:j,coins:k,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),_("lesson_complete"),Ce("lesson_complete",{lessonId:e,jlpt:"N5"})}}Qr(),_e(),V(),C()}function ru(){var a,l;(l=(a=i.n5Textbook)==null?void 0:a.items)!=null&&l.length||Ta();const e=ue(),t=lc(),n=uc(),s=ns(ts()),r=Ot();return`
      <section class="page learning-path-page">
        <div class="section-head">
          <div>
            <h1>${o(e.route)}</h1>
            <p>${o(s?w(s.summary)||e.mapHint:e.loading)}</p>
          </div>
          <button class="btn primary" type="button" data-action="home-primary">${o(n.label)}</button>
        </div>

        <article class="learning-path-hero">
          <div>
            <span class="pill">${o(e.lessonTrack)}</span>
            <h2>${o(oc(ts()))}</h2>
            <p>${o(e.mapHint)}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${o(ue().reviewQueue)} · ${o(Fe())}</span>
            <span class="pill">${o(ue().streak)} · ${o(i.progress.streak.current)}</span>
            <span class="pill">${o(ue().xp)} · ${o(r.current)}</span>
          </div>
        </article>

        <div class="learning-path-timeline">
          ${t.length?t.map((c,u)=>{const p=cc(c),d=p==="locked",g=w(c.summary)||"",f=c.id===Wn?e.reviewAction:c.id===qn?e.openCheckpoint:c.type==="textbook"?e.openTextbook:p==="current"?e.resume:e.continue;return`
              <button class="learning-path-node is-${h(p)} is-${h(c.type||"lesson")}" type="button" data-action="learning-path-node" data-node="${h(c.id)}" ${d?'disabled aria-disabled="true"':""}>
                <span class="learning-path-node-index">${u+1}</span>
                <div class="learning-path-node-copy">
                  <div class="learning-path-node-meta">
                    <span class="pill">${o(c.level||"N5")}</span>
                    <span class="pill">${o(Lm(p))}</span>
                  </div>
                  <h2>${o(w(c.title))}</h2>
                  <p>${o(g)}</p>
                  <div class="learning-path-node-foot">
                    <small>${o(c.durationMinutes||0)} ${o(e.minutes)}</small>
                    <strong>${o(f)}</strong>
                  </div>
                </div>
              </button>
            `}).join(""):`<article class="empty-state"><h2>${o(e.empty)}</h2></article>`}
        </div>
      </section>
    `}function Zh(){var $,S,j,k;const e=i.activeLearnNodeId||ts(),t=ns(e),n=ue();if(!t)return ru();if(t.id!==Se&&t.type==="lesson"&&!((S=($=i.n5Textbook)==null?void 0:$.items)!=null&&S.length))return Ta(),`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${o(w(t.title))}</h1>
                <p>${o(n.loading)}</p>
              </div>
              <button class="btn ghost" type="button" data-action="learning-path-back">${o(n.backToMap)}</button>
            </div>
          </article>
        </section>
      `;t.type==="lesson"&&$m(e);const s=Hs(e),{session:r,steps:a,quizSteps:l,currentStep:c,isResult:u}=s;if(!a.length)return`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${o(w(t.title))}</h1>
                <p>${o(w(t.summary)||n.mapHint)}</p>
              </div>
              <button class="btn ghost" type="button" data-action="learning-path-node" data-node="${h(t.id)}">${o(t.type==="textbook"?n.openTextbook:n.backToMap)}</button>
            </div>
          </article>
        </section>
      `;const p=a.length,d=p?D(Math.min(r.stepIndex,p),p):0,g=((j=r.answers)==null?void 0:j[(c==null?void 0:c.id)||""])||null,f=(g==null?void 0:g.selected)||"",v=!!(g!=null&&g.correct),b=l.length?Math.round(Number(r.score||0)/Math.max(l.length,1)*100):100;return u?`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${o(w(t.title))}</h1>
                <p>${o(n.scoreHint)}</p>
              </div>
              <button class="btn ghost" type="button" data-action="learning-path-back">${o(n.backToMap)}</button>
            </div>
            <div class="lesson-player-progress">
              <span>${o(n.score)}</span>
              <strong>${o(b)}%</strong>
              <div class="meter"><i style="width:${b}%"></i></div>
            </div>
            <div class="lesson-result-panel">
              <article class="home-summary-card">
                <span>${o(n.score)}</span>
                <strong>${o(`${r.score}/${Math.max(l.length,1)}`)}</strong>
              </article>
              <article class="home-summary-card">
                <span>${o(n.mistakes)}</span>
                <strong>${o(r.mistakes.length)}</strong>
              </article>
            </div>
            <div class="lesson-player-actions">
              ${r.mistakes.length?`<button class="btn ghost" type="button" data-action="learning-path-retry" data-node="${h(e)}">${o(n.retryMistakes)}</button>`:""}
              <button class="btn primary" type="button" data-action="learning-path-continue" data-node="${h(e)}">${o(n.continuePath)}</button>
            </div>
          </article>
        </section>
      `:`
      <section class="page learning-path-page">
        <article class="study-card lesson-player">
          <div class="section-head">
            <div>
              <h1>${o(w(t.title))}</h1>
              <p>${o(w(t.summary)||n.mapHint)}</p>
            </div>
            <button class="btn ghost" type="button" data-action="learning-path-back">${o(n.backToMap)}</button>
          </div>
          <div class="lesson-player-progress">
            <span>${o(n.step)} ${o(Math.min(r.stepIndex+1,p))}/${o(p)}</span>
            <strong>${o(c.eyebrow||t.level||"N5")}</strong>
            <div class="meter"><i style="width:${d}%"></i></div>
          </div>
          <div class="lesson-player-card">
            <span class="pill">${o(c.eyebrow||t.level||"N5")}</span>
            <h2>${o(c.title||"")}</h2>
            ${c.kind==="kanji"&&c.card?`
              <div class="lesson-player-kanji">
                <div class="lesson-player-glyph">${o(c.card.kanji)}</div>
                <div class="lesson-player-kanji-copy">
                  <p>${o(c.text||"")}</p>
                  <div class="tag-row">
                    <span class="pill">${o(P(c.card))}</span>
                    ${c.card.hiragana?`<span class="pill">${o(ne(c.card.hiragana))}</span>`:""}
                    ${c.card.onyomi?`<span class="pill">${o(ne(c.card.onyomi))}</span>`:""}
                  </div>
                  ${c.sentence?`
                    <div class="lesson-player-sentence">
                      <strong>${o(c.sentence.jp||"")}</strong>
                      <p>${o(c.sentence.hiragana||"")}</p>
                      <small>${o(w(c.sentence.translation||{}))}</small>
                    </div>
                  `:""}
                </div>
              </div>
            `:c.kind==="quiz"?`
              <p>${o(c.text||"")}</p>
              <div class="lesson-choice-grid">
                ${(c.options||[]).map(x=>{const T=f===x.value,B=x.value===c.answer;return`<button class="btn ${T?v?"success":"danger":g&&B?"ghost is-correct":"ghost"}" type="button" data-action="learning-path-choice" data-node="${h(e)}" data-step="${h(c.id)}" data-value="${h(x.value)}">${o(x.label)}</button>`}).join("")}
              </div>
              ${g?`<p class="lesson-player-feedback ${v?"is-good":"is-warning"}">${o(v?m()==="ru"?"Верно.":"Correct.":`${m()==="ru"?"Правильно":"Correct"}: ${((k=(c.options||[]).find(x=>x.value===c.answer))==null?void 0:k.label)||c.answer}`)}</p>`:""}
            `:`
              <p>${o(c.text||"")}</p>
              ${c.note?`<small>${o(c.note)}</small>`:""}
            `}
          </div>
          <div class="lesson-player-actions">
            <button class="btn ghost" type="button" data-action="learning-path-back">${o(n.backToMap)}</button>
            <button class="btn primary" type="button" data-action="learning-path-step-next" data-node="${h(e)}" ${c.kind==="quiz"&&!g?'disabled aria-disabled="true"':""}>${o(r.stepIndex+1>=p?n.finish:n.continue)}</button>
          </div>
        </article>
      </section>
    `}function ew(){var l;const e=Va(),t=tu(e),n=!!(t&&Pe(t)),s=n?my(t.id):[];(!i.activeCardId||!s.some(c=>c.id===i.activeCardId))&&(i.activeCardId=((l=s[0])==null?void 0:l.id)||null);const r=n&&i.activeCardId?ae(i.activeCardId):null,a=i.activeLearnJlpt!=="all"?It(i.activeLearnJlpt):null;return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${o(A("learn"))}</h1>
            <p>${o(t?yr(t):"")}</p>
          </div>
          ${a?`<button class="btn ghost" type="button" data-action="route" data-route="textbooks">${o(m()==="ru"?"Учебники":"Textbooks")}</button>`:""}
        </div>
        ${Jh(e)}
        ${a?Uh(a):""}
        <div class="actions lesson-tabs">
          ${e.map(Fh).join("")}
        </div>
        <div class="study-layout">
          ${n?r?fd(r):Qk(t):Gh(t)}
          ${n?bo(r,s.length):bo(null,0)}
        </div>
      </section>
    `}function tw(){var l;const e=vn(i.activeJlptLesson)||vn((l=ae(i.activeCardId))==null?void 0:l.jlpt)||i.jlptLessons[0];if(!e)return`
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">JLPT</span>
            <h2>${o(m()==="ru"?"JLPT-уроки ещё не загружены":"JLPT lessons are not loaded yet")}</h2>
            <button class="btn primary" type="button" data-action="route" data-route="textbooks">${o(A("learn"))}</button>
          </article>
        </section>
      `;i.activeJlptLesson=e.jlpt;const t=It(e.jlpt);if(!lt(e.jlpt))return iu(t||e);const n=fp(e.jlpt),s=n.filter(c=>O(c.id).state==="Mastered").length,r=n.filter(c=>O(c.id).state!=="New").length,a={...qo(),...Wo()};return`
      <section class="page jlpt-lesson-page">
        <div class="section-head">
          <div>
            <h1>${o(w(e.title))}</h1>
            <p>${o(w(e.summary))}</p>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${h(e.jlpt)}">${o(m()==="ru"?"Страница учебника":"Textbook page")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${o(m()==="ru"?"Все учебники":"All textbooks")}</button>
            ${Ns("lesson",{level:e.jlpt,lessonId:e.id})}
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks" data-subroute="${h(e.jlpt)}">${o(a.back)}</button>
          </div>
        </div>
        <div class="actions jlpt-switcher">
          ${i.jlptLessons.map(c=>{const u=lt(c.jlpt),p=c.jlpt===e.jlpt,d=h(Dt(c.jlpt));return u?`<button class="btn ${p?"primary":"ghost"}" type="button" data-action="open-jlpt-lesson" data-jlpt="${h(c.jlpt)}">${o(c.jlpt)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${d}">🔒 ${o(c.jlpt)}</button>`}).join("")}
        </div>
        ${t?`
          <article class="jlpt-textbook-hero">
            <img class="jlpt-textbook-cover" src="${h(t.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
            <div class="jlpt-textbook-body">
              <span class="pill">${o(t.jlpt)}</span>
              <h2>${o(w(t.displayTitle||t.title||{}))}</h2>
              <p>${o(w(t.description||{}))}</p>
              <div class="tag-row">
                <span class="pill">${o(t.lessonCount||0)} ${o(m()==="ru"?"уроков":"lessons")}</span>
                <span class="pill">${o(t.kanjiCount||0)} ${o(A("cardsToday"))}</span>
                <span class="pill">${o(w(t.goal||{}))}</span>
                <span class="pill">${o(w(t.recommendedCycle||{}))}</span>
              </div>
              <div class="actions">
                <a class="btn primary" href="${h(t.pdfUrl||t.pdfFile||"")}" download="${h((t.pdfFile||t.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${o(m()==="ru"?"Скачать PDF":"Download PDF")}</a>
                <button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${h(e.jlpt)}">${o(m()==="ru"?"К уроку":"Go to lesson")}</button>
              </div>
            </div>
          </article>
        `:""}
        <article class="jlpt-lesson-hero">
          <div>
            <span class="pill">${o(e.jlpt)}</span>
            <h2>${o(a.courseMap)}</h2>
            <p>${o(a.courseText)}</p>
          </div>
          <div class="mini-stat-row">
            ${E(a.available,n.length,e.jlpt,D(n.length,Math.max(i.cards.length,1)))}
            ${E(a.learned,r,`${s} ${a.mastered}`,D(r,Math.max(n.length,1)))}
          </div>
        </article>
        ${sd(e)}
        <div class="jlpt-section-grid">
          ${e.goals.length?`
            <article class="jlpt-section-card">
              <h3>${o(a.goals)}</h3>
              <ul>${e.goals.map(c=>`<li>${o(w(c))}</li>`).join("")}</ul>
            </article>
          `:""}
          ${e.sections.map(c=>`
            <article class="jlpt-section-card">
              <h3>${o(w(c.title))}</h3>
              <p>${o(w(c.body))}</p>
              ${Array.isArray(c.points)&&c.points.length?`<ul>${c.points.map(u=>`<li>${o(w(u))}</li>`).join("")}</ul>`:""}
            </article>
          `).join("")}
          ${e.practice.length?`
            <article class="jlpt-section-card">
              <h3>${o(a.practice)}</h3>
              <ul>${e.practice.map(c=>`<li>${o(w(c))}</li>`).join("")}</ul>
            </article>
          `:""}
          ${e.checkpoint.length?`
            <article class="jlpt-section-card">
              <h3>${o(a.checkpoint)}</h3>
              <ul>${e.checkpoint.map(c=>`<li>${o(w(c))}</li>`).join("")}</ul>
            </article>
          `:""}
        </div>
      </section>
    `}function nw(){var r;const e=((r=i.jlptCatalog)==null?void 0:r.items)||[],t=String(i.activeTextbookLevel||"").toUpperCase(),n=t?It(t):null;if(n)return i.activeTextbookLevel=n.jlpt,i.activeJlptLesson=n.jlpt,sw(n);const s=m()==="ru"?{title:"Учебники Flash Kanji",description:"Функциональные страницы учебников JLPT N5–N1 с переходом к урокам, повторению и материалам внутри уровня.",open:"Открыть страницу",pdf:"Скачать PDF",study:"К урокам"}:{title:"Flash Kanji Textbooks",description:"Functional JLPT N5-N1 textbook pages with lesson links, review entry points, and level materials.",open:"Open page",pdf:"Download PDF",study:"Go to lessons"};return`
      <section class="page textbooks-page">
        <div class="section-head">
          <div>
            <h1>${o(s.title)}</h1>
            <p>${o(s.description)}</p>
          </div>
          <div class="actions">
            ${Ns("textbooks")}
            <button class="btn primary" type="button" data-action="open-jlpt-lesson-start" data-jlpt="${h(Bt())}">${o(s.study)}</button>
          </div>
        </div>
        <div class="textbook-grid" id="textbook-grid">
          ${e.map(a=>`
            <article class="textbook-card ${lt(a.jlpt)?"is-unlocked":"is-locked"}" id="textbook-${h(a.jlpt)}">
              <div class="textbook-cover-wrap">
                <img class="textbook-cover" src="${h(a.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
                <span class="pill textbook-level">${o(a.jlpt)}</span>
              </div>
              <div class="textbook-body">
                <h2>${o(w(a.displayTitle||a.title||{}))}</h2>
                <p>${o(w(a.description||{}))}</p>
                ${lt(a.jlpt)?"":`<p class="textbook-lock-note">${o(Dt(a.jlpt))}</p>`}
                <div class="textbook-meta">
                  <span class="pill">${o(a.lessonCount||0)} ${o(m()==="ru"?"уроков":"lessons")}</span>
                  <span class="pill">${o(a.kanjiCount||0)} ${o(A("cardsToday"))}</span>
                  <span class="pill">${o(w(a.goal||{}))}</span>
                </div>
                <div class="textbook-actions">
                  <a class="btn primary" href="#textbooks/${h(a.jlpt)}">${o(s.open)}</a>
                  ${lt(a.jlpt)?`<a class="btn ghost" href="${h(a.pdfUrl||a.pdfFile||"")}" download="${h((a.pdfFile||a.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${o(s.pdf)}</a>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${h(Dt(a.jlpt))}">${o(m()==="ru"?"PDF закрыт":"PDF locked")}</button>`}
                  ${lt(a.jlpt)?`<button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${h(a.jlpt)}">${o(s.study)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${h(Dt(a.jlpt))}">${o(m()==="ru"?"Закрыто":"Locked")}</button>`}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function iu(e){const t=String((e==null?void 0:e.jlpt)||"").toUpperCase(),n=Qo(t),s=n.map(a=>`<a class="pill" href="#textbooks/${h(a)}">${o(a)}</a>`).join(""),r=m()==="ru"?{title:"Учебник закрыт",back:"Все учебники",home:"Домой",hint:"Сначала заверши предыдущие уровни, чтобы открыть этот учебник."}:{title:"Textbook locked",back:"All textbooks",home:"Home",hint:"Finish the previous levels first to unlock this textbook."};return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${o(t||"JLPT")}</p>
            <h1>${o(w((e==null?void 0:e.displayTitle)||(e==null?void 0:e.title)||{ru:r.title,en:r.title}))}</h1>
            <p>${o(Dt(t))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${o(r.back)}</button>
            <button class="btn ghost" type="button" data-action="route" data-route="home">${o(r.home)}</button>
          </div>
        </div>
        <article class="lesson-locked-panel textbook-locked-panel">
          <img class="jlpt-textbook-cover" src="${h((e==null?void 0:e.coverImage)||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <div class="jlpt-textbook-body">
            <span class="pill danger-pill">${o(t||"JLPT")}</span>
            <h2>${o(w((e==null?void 0:e.displayTitle)||(e==null?void 0:e.title)||{ru:r.title,en:r.title}))}</h2>
            <p>${o(r.hint)}</p>
            ${s?`<div class="tag-row">${s}</div>`:""}
            <div class="actions">
              <button class="btn primary" type="button" data-action="route" data-route="textbooks">${o(r.back)}</button>
              ${n.length?`<a class="btn ghost" href="#textbooks/${h(n[n.length-1])}">${o(n[n.length-1])}</a>`:""}
            </div>
          </div>
        </article>
      </section>
    `}function sw(e){var f,v,b,$,S,j,k,x,T,B,L,y,N,H,me,fe,Qn,Xn;const t=String((e==null?void 0:e.jlpt)||"").toUpperCase();if(!lt(t))return iu(e);if(String((e==null?void 0:e.jlpt)||"").toUpperCase()==="N5"&&((v=(f=i.n5Textbook)==null?void 0:f.items)!=null&&v.length))return rw(e);if(String((e==null?void 0:e.jlpt)||"").toUpperCase()==="N4"&&(($=(b=i.n4Textbook)==null?void 0:b.items)!=null&&$.length))return Qw(e);if(String((e==null?void 0:e.jlpt)||"").toUpperCase()==="N3"&&((j=(S=i.n3Textbook)==null?void 0:S.items)!=null&&j.length))return Iv(e);if(String((e==null?void 0:e.jlpt)||"").toUpperCase()==="N2"&&((x=(k=i.n2Textbook)==null?void 0:k.items)!=null&&x.length))return pb(e);i.activeTextbookLevel=e.jlpt,i.activeJlptLesson=e.jlpt;const n=(e.lessonIds||[]).map(ie=>i.lessons.find(jn=>jn.id===ie)).filter(Boolean),s=i.lessons.filter(ie=>String(ie.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()&&!n.includes(ie)),r=[...n,...s].slice(0,Math.max(e.lessonCount||n.length,n.length)),a=i.activeTextbookSubroute?r.find(ie=>ie.id===i.activeTextbookSubroute)||vn(e.jlpt)||i.jlptLessons[0]:vn(e.jlpt)||i.jlptLessons[0];i.activeTextbookSubroute&&(a!=null&&a.id)&&Tt(t,a.id,"textbook_page");const l=m()==="ru"?{title:"Страница учебника",back:"Все учебники",pdf:"Скачать PDF",lessonPage:"Страница урока",openLesson:"Открыть урок",outline:"Что внутри",practice:"Практика",lessons:"Уроки учебника",previous:"Предыдущие уровни",next:"Следующие уровни"}:{title:"Textbook page",back:"All textbooks",pdf:"Download PDF",lessonPage:"Lesson page",openLesson:"Open lesson",outline:"Inside the textbook",practice:"Practice",lessons:"Textbook lessons",previous:"Previous levels",next:"Next levels"},c=Xo(e.jlpt)||((T=e.lessonIds)==null?void 0:T[0])||((B=r[0])==null?void 0:B.id)||"",u=w(e.recommendedCycle||{}),p=w(e.goal||{}),d=(e.previousLevels||[]).map(ie=>`<a class="pill" href="#textbooks/${h(ie)}">${o(ie)}</a>`).join(""),g=(e.nextLevels||[]).map(ie=>`<a class="pill" href="#textbooks/${h(ie)}">${o(ie)}</a>`).join("");return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${o(e.jlpt)} · ${o(l.title)}</p>
            <h1>${o(w(e.displayTitle||e.title||{}))}</h1>
            <p>${o(w(e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${o(l.back)}</button>
            <a class="btn primary" href="${h(e.pdfUrl||e.pdfFile||"")}" download="${h((e.pdfFile||e.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${o(l.pdf)}</a>
            <button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${h(e.jlpt)}">${o(l.lessonPage)}</button>
            ${Ns("textbook",{level:e.jlpt})}
          </div>
        </div>

        <article class="jlpt-textbook-hero">
          <img class="jlpt-textbook-cover" src="${h(e.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <div class="jlpt-textbook-body">
            <span class="pill">${o(e.jlpt)}</span>
            <h2>${o(w(e.displayTitle||e.title||{}))}</h2>
            <p>${o(w(e.description||{}))}</p>
            <div class="tag-row">
              <span class="pill">${o(e.lessonCount||0)} ${o(m()==="ru"?"уроков":"lessons")}</span>
              <span class="pill">${o(e.kanjiCount||0)} ${o(A("cardsToday"))}</span>
              <span class="pill">${o(p)}</span>
              <span class="pill">${o(u)}</span>
            </div>
            <div class="textbook-route-links">
              ${d?`<div><strong>${o(l.previous)}</strong><div class="tag-row">${d}</div></div>`:""}
              ${g?`<div><strong>${o(l.next)}</strong><div class="tag-row">${g}</div></div>`:""}
            </div>
          </div>
        </article>

        <div class="metric-grid">
          ${E(e.jlpt,e.lessonCount||0,p,D(e.lessonCount||0,Math.max(1,i.jlptLessons.length)))}
          ${E(m()==="ru"?"Кандзи":"Kanji",e.kanjiCount||0,m()==="ru"?"в учебнике":"in textbook",D(e.kanjiCount||0,Math.max(1,i.cards.length)))}
          ${E(m()==="ru"?"Уроки":"Lessons",r.length,l.practice,D(r.length,Math.max(1,i.lessons.filter(ie=>String(ie.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()).length)))}
          ${E(m()==="ru"?"Переход":"Jump",i.activeTextbookLevel===e.jlpt?1:0,l.lessonPage,i.activeTextbookLevel===e.jlpt?100:0)}
        </div>

        ${Xs(e.jlpt)}

        ${a?`
          <article class="jlpt-lesson-hero">
            <div>
              <span class="pill">${o(e.jlpt)}</span>
              <h2>${o(l.outline)}</h2>
              <p>${o(w(a.summary||{}))}</p>
            </div>
            <div class="mini-stat-row">
              ${E(m()==="ru"?"Грамматика":"Grammar",((L=a.sections)==null?void 0:L.length)||0,l.outline,D(((y=a.sections)==null?void 0:y.length)||0,4))}
              ${E(m()==="ru"?"Практика":"Practice",((N=a.practice)==null?void 0:N.length)||0,l.practice,D(((H=a.practice)==null?void 0:H.length)||0,4))}
            </div>
          </article>
          ${sd(a)}
          <div class="jlpt-section-grid">
            ${(me=a.goals)!=null&&me.length?`
              <article class="jlpt-section-card">
                <h3>${o(m()==="ru"?"Цели уровня":"Level goals")}</h3>
                <ul>${a.goals.map(ie=>`<li>${o(w(ie))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${(fe=a.sections)==null?void 0:fe.map(ie=>`
              <article class="jlpt-section-card">
                <h3>${o(w(ie.title))}</h3>
                <p>${o(w(ie.body))}</p>
                ${Array.isArray(ie.points)&&ie.points.length?`<ul>${ie.points.map(jn=>`<li>${o(w(jn))}</li>`).join("")}</ul>`:""}
              </article>
            `).join("")}
            ${(Qn=a.practice)!=null&&Qn.length?`
              <article class="jlpt-section-card">
                <h3>${o(l.practice)}</h3>
                <ul>${a.practice.map(ie=>`<li>${o(w(ie))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${(Xn=a.checkpoint)!=null&&Xn.length?`
              <article class="jlpt-section-card">
                <h3>${o(m()==="ru"?"Чекпоинт":"Checkpoint")}</h3>
                <ul>${a.checkpoint.map(ie=>`<li>${o(w(ie))}</li>`).join("")}</ul>
              </article>
            `:""}
          </div>
        `:""}

        <div class="section-head">
          <div>
            <h2>${o(l.lessons)}</h2>
            <p>${o(m()==="ru"?"Карточки, входящие в этот учебник, и быстрые переходы в урок.":"Cards included in this textbook, with quick jumps into lessons.")}</p>
          </div>
          ${c?`<button class="btn primary" type="button" data-action="open-jlpt-lesson-start" data-jlpt="${h(e.jlpt)}">${o(l.openLesson)}</button>`:""}
        </div>
        <div class="lesson-grid">
          ${r.map(ie=>Bh(ie)).join("")||`<article class="empty-state"><h3>${o(m()==="ru"?"Уроки скоро появятся":"Lessons will appear soon")}</h3></article>`}
        </div>
      </section>
    `}function rw(e){i.activeTextbookLevel="N5",i.activeJlptLesson="N5",Ws();const t=String(i.activeTextbookSubroute||"");if(t==="final-test")return ww();if(t==="review")return fw();const n=mt(t);return n?(Z().currentLessonId=n.id,Tt("N5",n.id,"n5_lesson_page"),qt("N5",n,"n5_lesson_page"),gw(e,n)):iw(e)}function iw(e){var c;const t=Cw(),n=Ke(),s=Be(),r=jw(),a=i.n5Meta||{},l=w(a.principle||{});return`
      <section class="page textbooks-page n5-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N5 · Flash Kanji</p>
            <h1>${o(n.title)}</h1>
            <p>${o(w(a.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${o(n.allTextbooks)}</button>
            <a class="btn ghost" href="${h(a.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N5_expanded_textbook.pdf" target="_blank" rel="noopener">${o(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero">
          <div class="n5-hero-copy">
            <span class="pill">80 ${o(n.kanji)}</span>
            <h2>${o(n.courseMap)}</h2>
            <p>${o(l)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#textbooks/N5/${h((r==null?void 0:r.id)||"n5-lesson-1")}" data-action="n5-open-lesson" data-id="${h((r==null?void 0:r.id)||"n5-lesson-1")}">${o(n.continue)}</a>
              <button class="btn" type="button" data-action="n5-review" data-mode="due">${o(n.review)}</button>
              <a class="btn ghost" href="#textbooks/N5/final-test">${o(n.finalTest)}</a>
            </div>
          </div>
          ${vs("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${E(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,D(t.studied,t.total))}
          ${E(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,D(t.completedLessons,s.length))}
          ${E(n.reviews,t.reviews,n.srs,D(t.reviews,Math.max(t.total,1)))}
          ${E(n.difficult,t.difficult,n.filterDifficult,D(t.difficult,Math.max(t.total,1)))}
        </div>

        <section class="n5-panel">
          <div>
            <h2>${o(n.lessonsTitle)}</h2>
            <p>${o(n.lessonsDescription)}</p>
          </div>
          <div class="n5-lesson-grid">
            ${s.map(u=>aw(u)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${o(n.reviewPlan)}</h2>
            <p>${o(w((((c=i.n5Textbook)==null?void 0:c.textbook)||{}).recommendedCycle||a.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(a.reviewPlan||[]).map(u=>`<span class="pill">${o(n.day)} ${o(u.day)} · ${o(w(u.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${Xs("N5")}
      </section>
    `}function aw(e){const t=eo(e.id),n=Ke();let s=e.kanji.filter(r=>Z().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#textbooks/N5/${h(e.id)}" data-action="n5-open-lesson" data-id="${h(e.id)}">
        <span class="pill">${o(n.lesson)} ${e.order}</span>
        <h3>${o(w(e.title))}</h3>
        <p>${o(w(e.goal))}</p>
        <div class="n5-kanji-strip">${e.kanji.map(r=>`<b>${o(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${h(`${s}/${e.kanji.length}`)}"><i style="width:${D(s,e.kanji.length)}%"></i></div>
        <small>${o(s)}/${o(e.kanji.length)} · ${o(Aw(t))}</small>
      </a>
    `}function Qs(){return i.progress.jlptLessonStudy=Wl(va(),i.progress.jlptLessonStudy||{}),i.progress.jlptLessonStudy}function ow(e,t){return`${String(e||"").toUpperCase()}:${String(t||"")}`}function gt(e,t,n="player"){return`jlpt-${String(e||"").toLowerCase()}-${n}-${String(t||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function ls(e,t,n){const s=Qs(),r=ow(e,t==null?void 0:t.id),a=Hl();let l=s.sessions[r];l||(l={...a,level:String(e||"").toUpperCase(),lessonId:String((t==null?void 0:t.id)||""),startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()},s.sessions[r]=l),l.level=String(e||l.level||"").toUpperCase(),l.lessonId=String((t==null?void 0:t.id)||l.lessonId||""),l.answers||(l.answers={}),l.phase=Ql(l.phase),l.startedAt||(l.startedAt=new Date().toISOString()),l.updatedAt||(l.updatedAt=new Date().toISOString());const c=Array.isArray(n)?n.length:0,u=c?n.findIndex(d=>!l.answers[d.id]):-1,p=Object.keys(l.answers||{}).length;return l.completedAt?(l.phase="done",l.currentIndex=c):u<0?(l.currentIndex=c,l.phase="test",l.testOpenedAt||(l.testOpenedAt=l.updatedAt||new Date().toISOString())):(l.currentIndex=u,l.phase!=="test"&&(l.phase="study")),s.activeSessionKey=r,s.lastUpdatedAt=new Date().toISOString(),{session:l,key:r,answeredCount:p,currentIndex:l.currentIndex,total:c}}function lw(e,t){var n;return!e||!Array.isArray(t)||!t.length||((n=e.session)==null?void 0:n.phase)!=="study"?null:t[Math.min(Math.max(Number(e.currentIndex||0),0),t.length-1)]||null}function cw(e){const t=Array.isArray(e)?e:[];return t.length?`
      <ul class="example-list lesson-study-example-list">
        ${t.slice(0,2).map(Si).join("")}
      </ul>
    `:""}function uw(e){const t=mr(e),n=t.length>0;return`
      <details class="lesson-study-details">
        <summary>${o(m()==="ru"?"Показать подробнее":"Show details")}</summary>
        <div class="lesson-study-details-body">
          ${So(e)}
          ${n?`
            <div>
              <h3>${o(A("strokeOrder"))}</h3>
              <ol class="stroke-list lesson-study-strokes">${t.map(s=>`<li>${o(s)}</li>`).join("")}</ol>
            </div>
          `:""}
        </div>
      </details>
    `}function dw(e,t,n,s,r,a,l={}){if(!n)return"";const c=typeof l.examples=="function"?l.examples(n,t)||[]:[],u=typeof l.sentence=="function"?l.sentence(n,t):"",p=typeof l.extra=="function"?l.extra(n,t):"",d=l.answerAction||"jlpt-lesson-answer",g=String(e||n.jlpt||"").toUpperCase(),f=Number(s||0),v=O(n.id),b=(t==null?void 0:t.id)||"";return`
      <article class="lesson-player-card lesson-study-card">
        <div class="lesson-player-kanji">
          <div class="lesson-player-glyph">${o(n.kanji)}</div>
          <div class="lesson-player-kanji-copy">
            <div class="tag-row compact-tags">
              <span class="pill">${o(a.step)} ${o(f+1)}</span>
              <span class="pill">${o(v.state)}</span>
              ${n.jlpt?`<span class="pill">${o(n.jlpt)}</span>`:""}
              ${n.strokes?`<span class="pill">${o(n.strokes)} ${o(A("strokes"))}</span>`:""}
              ${dd(n)}
            </div>
            <h2>${o(P(n))}</h2>
            <p class="label lesson-study-progress-label">${o(e||n.jlpt||"")} · ${o(m()==="ru"?`Кандзи ${Math.min(f+1,r)} из ${r}`:`Kanji ${Math.min(f+1,r)} of ${r}`)}</p>
            <dl class="n5-readings lesson-study-readings">
              ${gd(n,"onyomi",a.onyomi,n.onyomi)}
              ${gd(n,"kunyomi",a.kunyomi,n.kunyomi||n.hiragana)}
            </dl>
            ${cw(c)}
            ${u}
            ${p?`<div class="lesson-study-extra">${p}</div>`:""}
            ${uw(n)}
          </div>
        </div>
        <div class="lesson-choice-grid lesson-study-actions">
          <button class="btn success" type="button" data-action="${h(d)}" data-level="${h(g)}" data-lesson="${h(b)}" data-card="${h(n.id)}" data-value="remember">${o(a.remember)}<small>${o(m()==="ru"?"в повторение":"to review")}</small></button>
          <button class="btn danger" type="button" data-action="${h(d)}" data-level="${h(g)}" data-lesson="${h(b)}" data-card="${h(n.id)}" data-value="forget">${o(a.notRemember)}<small>${o(m()==="ru"?"ещё раз":"show again")}</small></button>
        </div>
      </article>
    `}function pw(e,t,n,s,r){return`
      <article class="lesson-player-card lesson-study-complete">
        <div class="lesson-study-complete-copy">
          <span class="pill">${o(m()==="ru"?"Карточки пройдены":"Cards completed")}</span>
          <h2>${o(n.lessonComplete)}</h2>
          <p>${o(m()==="ru"?"Все карточки урока уже отвечены. Тест открыт ниже.":"All lesson cards are answered. The test is open below.")}</p>
          <div class="tag-row">
            <span class="pill">${o(m()==="ru"?`Кандзи ${r}/${s}`:`Kanji ${r}/${s}`)}</span>
            <span class="pill">${o(n.completed)}</span>
          </div>
        </div>
      </article>
    `}function ui(e,t,n,s,r={}){var v;const a=ls(e,t,n),l=lw(a,n),c=Number(a.answeredCount||0),u=Number(a.total||0),p=r.playerId||gt(e,t==null?void 0:t.id,"player"),d=u?D(c,u):0,g=l?`${m()==="ru"?"Кандзи":"Kanji"} ${Math.min(c+1,u)}/${u}`:((v=a.session)==null?void 0:v.phase)==="done"?m()==="ru"?"Урок завершён":"Lesson complete":m()==="ru"?"Тест открыт":"Test open",f=l?P(l):s.lessonComplete;return`
      <article class="study-card lesson-player lesson-study-player" id="${h(p)}">
        <div class="lesson-player-progress">
          <span>${o(g)}</span>
          <strong>${o(f)}</strong>
          <div class="meter"><i style="width:${d}%"></i></div>
        </div>
        ${l?dw(e,t,l,a.currentIndex,u,s,r):pw(e,t,s,u,c)}
      </article>
    `}function gw(e,t){const n=Ke(),s=nn(t),r=qs(t),a=eo(t.id),l=ls("N5",t,s);let c=a==="completed";const u=`n5:${t.id}`;we.has(u)&&(c=!0);const p=c,d=r.filter(T=>{var B;return(B=to(T.id))==null?void 0:B.correct}).length,g=r.length>0&&d===r.length,f=s.filter(T=>Z().studiedKanji[T.kanji]).length,v=t.kanji.length,b=f>=v,$=!c&&g&&b,S=t.kanji.filter(T=>Z().difficultKanji[T]).join(" · "),j=Be().find(T=>T.order===t.order+1),k=gt("N5",t.id,"player"),x=gt("N5",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N5 · ${o(n.lesson)} ${t.order}/10</p>
            <h1>${o(w(t.title))}</h1>
            <p>${o(w(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n5-overview">${o(n.backToN5)}</button>
            <button class="btn" type="button" data-action="n5-review" data-mode="difficult">${o(n.difficult)}</button>
            <a class="btn ghost" href="#textbooks/N5/final-test">${o(n.finalTest)}</a>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${o(w(t.theme))}</span>
            <h2>${o(n.lessonChain)}</h2>
            <p>${o(n.lessonChainText)}</p>
          </div>
          <div class="mini-stat-row">
            ${E(n.studiedKanji,`${Math.min(l.answeredCount,v)}/${v}`,n.kanji,D(l.answeredCount,v))}
            ${E(n.exercises,`${d}/${r.length}`,n.correct,D(d,r.length))}
          </div>
        </article>

        ${ui("N5",t,s,n,{playerId:k,answerAction:"jlpt-lesson-answer",examples:T=>ft(T),sentence:T=>mw(T,t)})}

        <section class="n5-panel">
          <div>
            <h2>${o(n.sentences)}</h2>
            <p>${o(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(T=>`
              <article>
                <strong>${o(T.jp)}</strong>
                <span>${o(ne(T.reading||""))}</span>
                <small>${o(w({ru:T.ru,en:T.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${h(x)}">
          <div>
            <h2>${o(n.exercises)}</h2>
            <p>${o(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(T=>au(T)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${o(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${o(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${o(n.studiedKanji)}: ${s.filter(T=>Z().studiedKanji[T.kanji]).length}/8</span>
              <span class="pill">${o(n.correct)}: ${d}/${r.length}</span>
              <span class="pill">${o(n.difficult)}: ${o(S||n.none)}</span>
            </div>
            ${!c&&!$?`<p class="n5-feedback">${o(m()==="ru"?"Завершите все кандзи (8/8) и упражнения урока.":"Complete all kanji (8/8) and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n5-complete-lesson" data-id="${h(t.id)}" ${p||!$?"disabled":""}>${o(p?m()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n5-review" data-mode="difficult">${o(n.repeatMistakes)}</button>
            ${j?`<a class="btn ghost" href="#textbooks/N5/${h(j.id)}" data-action="n5-open-lesson" data-id="${h(j.id)}">${o(n.nextLesson)}</a>`:`<a class="btn ghost" href="#textbooks/N5/final-test">${o(n.finalTest)}</a>`}
          </div>
        </section>
      </section>
    `}function mw(e,t){const n=t.sentences.find(s=>s.jp.includes(e.kanji))||t.sentences[0];return n?`
      <div class="n5-card-sentence">
        <strong>${o(n.jp)}</strong>
        <span>${o(ne(n.reading||""))}</span>
        <small>${o(w({ru:n.ru,en:n.en}))}</small>
      </div>
    `:""}function au(e){const t=Ke(),n=to(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=i.route==="review"&&Dn("N5",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${o(w(e.title))}</span>
          <h3>${o(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${h(ku(e.id))}" type="text" maxlength="2" autocomplete="off" value="${h((n==null?void 0:n.selected)||"")}" aria-label="${h(w(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n5-check-input" data-id="${h(e.id)}" ${r?"disabled":""}>${o(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n5-answer" data-id="${h(e.id)}" data-value="" ${r?"disabled":""}>${o(t.showAnswer)}</button>
          </div>
          ${ou(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${o(w(e.title))}</span>
        <h3>${o(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const l=(n==null?void 0:n.selected)===a.value;return`<button class="btn ${n&&a.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n5-answer" data-id="${h(e.id)}" data-value="${h(a.value)}" ${r?"disabled":""}>${o(a.label)}</button>`}).join("")}
        </div>
        ${ou(e,n)}
      </article>
    `}function ou(e,t){if(!t)return"";const n=Ke(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${o(s)}</p>`}function fw(e){var r;const t=Ke(),n=Z().activeReviewMode||"due",s=Jw(n);return`
      <section class="page textbooks-page n5-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N5 · Повторение</p>
            <h1>${o(t.reviewTitle)}</h1>
            <p>${o(t.reviewDescription)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n5-overview">${o(t.backToN5)}</button>
            <a class="btn ghost" href="#textbooks/N5/final-test">${o(t.finalTest)}</a>
          </div>
        </div>
        <div class="jlpt-filter-bar" role="tablist" aria-label="N5 review modes">
          ${(((r=i.n5Exercises)==null?void 0:r.reviewModes)||[]).map(a=>`
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n5-review" data-mode="${h(a.id)}">${o(w(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,l)=>hw(a,l)).join("")||`<article class="empty-state"><h3>${o(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function hw(e,t){var r,a;const n=Ke(),s=O(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${o(s.state)} · ${o(Hn(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${o(e.kanji)}</div>
        <h3>${o(P(e))}</h3>
        <p>${o(((r=ft(e)[0])==null?void 0:r.word)||e.hiragana||"")} · ${o(((a=ft(e)[0])==null?void 0:a.reading)||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n5-srs" data-id="${h(e.id)}" data-rating="easy">${o(n.know)}</button>
          <button class="btn warning" type="button" data-action="n5-srs" data-id="${h(e.id)}" data-rating="again">${o(n.hard)}</button>
        </div>
      </article>
    `}function ww(e){const t=Ke(),n=i.n5FinalTest||{},s=vu(),r=Z().finalTest,a=pn(r,s),l=a.answered,c=a.ready,u=i.finalTestBusy;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const g=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==g)&&(r.percent=g),r.completedAt||(r.completedAt=new Date().toISOString()),C()}const p=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,d=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N5 · Final</p>
            <h1>${o(w(n.title||{}))}</h1>
            <p>${o(w(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n5-overview">${o(t.backToN5)}</button>
            <button class="btn" type="button" data-action="n5-final-reset">${o(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${E(t.questions,`${l}/${s.length}`,t.finalTest,D(l,s.length))}
          ${E(t.score,p||d>0?`${d}%`:"—",`${n.passingPercent||80}%`,p||d>0?d:0)}
          ${E(t.mistakes,p?(r.mistakes||[]).length:0,t.difficult,p?D((r.mistakes||[]).length,s.length):0)}
        </div>

        ${p?`
          <section class="n5-result-panel ${r.passed?"is-complete":""}">
            <div>
              <h2>${o(r.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${o(r.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n5-review" data-mode="difficult">${o(t.repeatMistakes)}</button>
            ${Kt("N5","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((g,f)=>vw(g,f)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${o(m()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n5-final-submit" ${u||p?"disabled":""}>${o(p?m()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Kt("N5","btn ghost")}
          <button class="btn ghost" type="button" data-action="n5-review" data-mode="all">${o(t.reviewAll)}</button>
        </div>
      </section>
    `}function vw(e,t){var l;const n=(l=Z().finalTest.answers)==null?void 0:l[e.id],s=!!Z().finalTest.completedAt,r=i.finalTestModal&&i.finalTestModal.level==="N5"&&i.finalTestModal.kind==="warning"?i.finalTestModal:null,a=!!(r&&Array.isArray(r.missingIds)&&r.missingIds.includes(e.id));return`
      <article id="${h(ar("n5",e.id))}" class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":a?"is-missing":""}">
        <span class="pill">${t+1} · ${o(e.type)}</span>
        <h3>${o(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(c=>{const u=n===c.value;return`<button class="btn ${s&&c.value===e.answer?"success":u?"primary":"ghost"}" type="button" data-action="n5-final-answer" data-id="${h(e.id)}" data-value="${h(c.value)}">${o(c.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${o(Ke().wrongAnswer)}: ${o(e.answerLabel)}</p>`:""}
      </article>
    `}function Ke(){return m()==="ru"?{title:"JLPT N5",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",courseMap:"Полноценный интерактивный учебник N5",continue:"Продолжить",review:"Повторять N5",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",reviews:"Повторения",difficult:"Сложные",filterDifficult:"фильтр",srs:"Повторение",lessons:"уроков",lessonsTitle:"10 уроков по 8 кандзи",lessonsDescription:"Каждый урок ведёт от знака к слову, предложению, упражнению, письму и повторению.",reviewPlan:"План повторения на 30 дней",day:"день",lesson:"Урок",backToN5:"Рљ N5",lessonChain:"Кандзи -> слово -> предложение -> практика",lessonChainText:"Сначала узнаёшь знак, затем видишь чтение в слове, читаешь предложение, отвечаешь и отправляешь карточку в повторение.",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Читай вслух: так чтение перестаёт быть отдельной таблицей.",exercisesText:"Смешанная практика работает внутри урока и повторения.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока доступны в повторении.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда все 8 кандзи добавлены в повторение.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",remember:"Помню",notRemember:"Не помню",details:"Показать подробнее",completed:"Пройдено",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N5-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N5.",noReviewCards:"Сейчас нет карточек в этом фильтре.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N5",finalPassed:"N5 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N5",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",courseMap:"Full interactive N5 textbook",continue:"Continue",review:"Review N5",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",reviews:"Reviews",difficult:"Difficult",filterDifficult:"filter",srs:"Review",lessons:"lessons",lessonsTitle:"10 lessons, 8 kanji each",lessonsDescription:"Each lesson moves from sign to word, sentence, exercise, writing, and SRS.",reviewPlan:"30-day review plan",day:"day",lesson:"Lesson",backToN5:"To N5",lessonChain:"Kanji -> word -> sentence -> practice",lessonChainText:"First recognize the sign, then see the reading in a word, read a sentence, answer, and send the card to SRS.",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud so readings stop feeling like a separate table.",exercisesText:"Mixed practice works inside lessons and review.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N5 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when all 8 kanji are in review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N5 review",reviewDescription:"Review due cards, difficult kanji, or the full N5 set.",noReviewCards:"No cards in this filter right now.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N5",finalPassed:"N5 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function lu(){return m()==="ru"?{title:"Чтение и самопроверка",description:"Тексты из md-файла для чтения вслух и проверки понимания по вопросам ниже.",questions:"Проверочные вопросы",noQuestions:"В этом тексте пока нет вопросов.",texts:"текстов",genre:"Жанр",source:"Опора",goal:"Цель"}:{title:"Reading and self-check",description:"Texts from the md file for reading aloud and checking understanding with the questions below.",questions:"Check questions",noQuestions:"No questions are listed for this text.",texts:"texts",genre:"Genre",source:"Source",goal:"Goal"}}function cu(e){return Y(e)||String(e||"").toUpperCase()}function uu(e){var n;const t=cu(e);return Array.isArray((n=i.jlptReadingByLevel)==null?void 0:n[t])?i.jlptReadingByLevel[t]:[]}function Za(e){var n;const t=((n=i.jlptReadingTranslations)==null?void 0:n[String((e==null?void 0:e.id)||"")])||{};return{title:{ru:String(t.titleRu||(e==null?void 0:e.title)||"").trim(),en:String(t.titleEn||(e==null?void 0:e.title)||"").trim()},translation:{ru:String(t.ru||"").trim(),en:String(t.en||"").trim()}}}function du(e){return ne(ir(String((e==null?void 0:e.text)||"")).replace(/\s+/g," ").trim())}function bw(e){const t=Y(e);return t==="N5"?{maxBlanks:2,maxBlankChars:4}:t==="N4"?{maxBlanks:2,maxBlankChars:5}:t==="N3"?{maxBlanks:3,maxBlankChars:6}:t==="N2"?{maxBlanks:3,maxBlankChars:7}:{maxBlanks:4,maxBlankChars:8}}function kw(){const e=Array.isArray(i.cards)?i.cards:[];if(!e.length)return[];const t=[];return Oe.forEach(n=>{uu(n).forEach((s,r)=>{const a=Za(s),l=du(s),c=wo({id:`jlpt-md-${s.id}`,jlpt:n,sentence:s.text||"",reading:l,translationRu:a.translation.ru,translationEn:a.translation.en,source:"markdown",sourceId:String(s.id||""),genre:s.genre||"",goal:s.goal||""},e,bw(n));c&&(c.kind="cloze",c.tiles=un(c,e),c.source="markdown",c.sourceId=String(s.id||""),c.sourceKind="markdown",c.sourceTitle=a.title,c.title=a.title,c.genre=s.genre||"",c.goal=s.goal||"",c.passageSource=s.source||"",c.questions=Array.isArray(s.questions)?s.questions:[],c.level=n,c.order=r+1,t.push(c))})}),t}function $w(e){const t=Za(e),n=du(e),s=n?hd(n):"",r=w(t.translation);return`
      <details class="reading-translation-wrap jlpt-reading-translation">
        <summary class="btn ghost reading-translation-toggle" role="button">${o(yo())}</summary>
        <div class="reading-translation-panel">
          <div class="reading-translation-row">
            <span>${o(m()==="ru"?"Хирагана":"Hiragana")}</span>
            <strong>${o(n||(m()==="ru"?"Нет данных":"No data"))}</strong>
          </div>
          <div class="reading-translation-row">
            <span>Romaji</span>
            <strong>${o(s||(m()==="ru"?"Нет данных":"No data"))}</strong>
          </div>
          <div class="reading-translation-row">
            <span>${o(yo())}</span>
            <strong>${o(r||(m()==="ru"?"Нет данных":"No data"))}</strong>
          </div>
        </div>
      </details>
    `}function Xs(e){const t=uu(e);if(!t.length)return"";const n=lu(),s=cu(e),r=Oi(s,"textbook_reading_block"),a=wr(s);return(r||a)&&C(),`
      <section class="n5-panel jlpt-reading-panel">
        <div class="n5-panel-head jlpt-reading-head">
          <div>
            <p class="eyebrow">${o(s)} · ${o(n.title)}</p>
            <h2>${o(n.title)}</h2>
            <p>${o(n.description)}</p>
          </div>
          <span class="pill">${o(t.length)} ${o(n.texts)}</span>
        </div>
        <div class="jlpt-reading-grid">
          ${t.map((l,c)=>yw(l,s,c)).join("")}
        </div>
      </section>
    `}function yw(e,t,n){const s=lu(),r=Za(e),a=Array.isArray(e==null?void 0:e.questions)?e.questions:[];return`
      <article class="jlpt-reading-card">
        <div class="jlpt-reading-card-head">
          <div class="tag-row compact-tags">
            <span class="pill">${o(t)}</span>
            <span class="pill">${o(n+1)}</span>
            ${e.genre?`<span class="pill">${o(e.genre)}</span>`:""}
          </div>
          <h3>${o(e.title||`${t}-${n+1}`)}</h3>
          ${r.title.ru||r.title.en?`<p class="jlpt-reading-meta">${o(w(r.title))}</p>`:""}
          ${e.goal?`<p class="jlpt-reading-meta">${o(s.goal)}: ${o(e.goal)}</p>`:""}
          ${e.source?`<p class="jlpt-reading-meta">${o(s.source)}: ${o(e.source)}</p>`:""}
        </div>
        <div class="jlpt-reading-text">${o(e.text||"")}</div>
        ${$w(e)}
        <details class="jlpt-reading-questions">
          <summary>${o(s.questions)}${a.length?` · ${a.length}`:""}</summary>
          ${a.length?`<ol>${a.map(l=>`<li>${o(l)}</li>`).join("")}</ol>`:`<p>${o(s.noQuestions)}</p>`}
        </details>
      </article>
    `}function Ws(){i.progress.n5Course=Vl(ka(),i.progress.n5Course||{});const e=Be();!mt(i.progress.n5Course.currentLessonId)&&e[0]&&(i.progress.n5Course.currentLessonId=e[0].id);const n=e.find(s=>!i.progress.n5Course.completedLessons[s.id]);return!i.progress.n5Course.currentLessonId&&n&&(i.progress.n5Course.currentLessonId=n.id),i.progress.n5Course}function Z(){return Ws()}function Be(){var e;return((e=i.n5Textbook)==null?void 0:e.items)||[]}function mt(e){const t=String(e||"");return t&&Be().find(n=>n.id===t||n.id===`n5-${t}`||n.id.endsWith(`-${t}`))||null}function jw(){return mt(Z().currentLessonId)||Be().find(e=>!Z().completedLessons[e.id])||Be()[0]||null}function nn(e){return((e==null?void 0:e.kanji)||[]).map(t=>Sw(t,e)).filter(Boolean)}function Nt(){const e=new Set;return Be().flatMap(t=>nn(t)).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Sw(e,t=null){var l;const n=String(e||""),s=((l=i.n5KanjiCatalog)==null?void 0:l.find(c=>c.kanji===n))||null,r=i.cards.find(c=>c.kanji===n&&String(c.jlpt||"").toUpperCase()==="N5")||i.cards.find(c=>c.kanji===n)||null,a=(t==null?void 0:t.id)||(s==null?void 0:s.lessonId)||null;return r&&s?Br({...r,lessonId:r.lessonId||a},s):r||(s?Br({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:a,jlpt:"N5",examples:[]},s):null)}function di(e,t=[]){const n=(Array.isArray(t)?t:[]).slice(0,3).map(s=>({...s,reading:ne(s.reading||s.hiragana||s.kana||e.hiragana||"")}));return n.length?n:[{word:e.kanji,reading:ne(e.hiragana||""),romaji:e.romaji||"",translation:P(e)}]}function ft(e){return di(e,e.examples)}function Nw(e,t){const n=(t==null?void 0:t.word)||e.kanji,s=ne((t==null?void 0:t.reading)||e.hiragana||"");return m()==="ru"?`Свяжи ${e.kanji} со значением «${P(e)}» и сразу проговори слово: ${n}${s?` (${s})`:""}.`:`Connect ${e.kanji} with "${P(e)}" and say the word right away: ${n}${s?` (${s})`:""}.`}function Cw(){var s;const e=Nt(),t=Z(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(r=>{O(r.id).state!=="New"&&n.add(r.kanji)}),{total:((s=i.n5Meta)==null?void 0:s.kanjiCount)||e.length||80,studied:n.size,completedLessons:En(),reviews:e.reduce((r,a)=>r+Number(O(a.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function eo(e){var r;const t=Z(),n=`n5:${e}`;if(we.has(n)||t.completedLessons[e])return"completed";const s=mt(e);return(r=s==null?void 0:s.kanji)!=null&&r.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function Aw(e){return e==="completed"?m()==="ru"?"завершён":"completed":e==="started"?m()==="ru"?"начат":"started":m()==="ru"?"не начат":"new"}function En(){return Be().filter(t=>eo(t.id)==="completed").length}function qs(e){var $,S,j;const t=nn(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries(((($=i.n5Exercises)==null?void 0:$.types)||[]).map(k=>[k.type,k.title])),r=Object.fromEntries((((S=i.n5Exercises)==null?void 0:S.types)||[]).map(k=>[k.type,k])),a=k=>{var x,T,B,L;return r[k]||{rewardXp:((T=(x=i.n5Meta)==null?void 0:x.rewards)==null?void 0:T.exerciseXp)||7,rewardMoon:((L=(B=i.n5Meta)==null?void 0:B.rewards)==null?void 0:L.exerciseMoon)||1}},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:P(c),kanji:c.kanji,cardId:c.id,options:Ct({value:c.id,label:P(c)},t.slice(1).map(k=>({value:k.id,label:P(k)})),1),...a("meaning")});const u=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:P(u),answer:u.kanji,answerLabel:u.kanji,kanji:u.kanji,cardId:u.id,options:Ct({value:u.kanji,label:u.kanji},t.filter(k=>k.id!==u.id).map(k=>({value:k.kanji,label:k.kanji})),2),...a("kanji")});const p=t[2]||t[0],d=ft(p)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:d.word,answer:d.reading,answerLabel:d.reading,kanji:p.kanji,cardId:p.id,options:Ct({value:d.reading,label:d.reading},t.flatMap(k=>ft(k).map(x=>({value:x.reading,label:x.reading}))).filter(k=>k.value!==d.reading),3),...a("reading")});const g=n[0];g&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:g.jp,answer:w({ru:g.ru,en:g.en}),answerLabel:w({ru:g.ru,en:g.en}),kanji:t[0].kanji,cardId:t[0].id,options:Ct({value:w({ru:g.ru,en:g.en}),label:w({ru:g.ru,en:g.en})},n.slice(1).map(k=>({value:w({ru:k.ru,en:k.en}),label:w({ru:k.ru,en:k.en})})),1),...a("sentence")});const f=t[3]||t[0],v=ft(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Insert the word"},prompt:m()==="ru"?`Какое слово подходит к значению «${Je(v)}В»?`:`Which word matches "${Je(v)}"?`,answer:v.word,answerLabel:v.word,kanji:f.kanji,cardId:f.id,options:Ct({value:v.word,label:v.word},t.flatMap(k=>ft(k).map(x=>({value:x.word,label:x.word}))).filter(k=>k.value!==v.word),2),...a("missing-word")});const b=t[4]||t[0];return l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:m()==="ru"?`Введи кандзи для значения: ${P(b)}`:`Type the kanji for: ${P(b)}`,answer:b.kanji,answerLabel:b.kanji,kanji:b.kanji,cardId:b.id,options:[],...a("active-recall")}),l.slice(0,((j=i.n5Exercises)==null?void 0:j.lessonQuestionCount)||6).map(k=>({...k,level:"N5",lessonId:e.id}))}function Ct(e,t,n=0){const s=new Set([String(e.value)]),r=[e];if(t.forEach(c=>{const u=String(c.value||"");!u||s.has(u)||r.length>=4||(s.add(u),r.push(c))}),Nt().forEach(c=>{if(r.length>=4)return;const u={value:c.id,label:c.kanji};s.has(String(u.value))||(s.add(String(u.value)),r.push(u))}),r.length<=1)return r;const l=n%r.length;return[...r.slice(l),...r.slice(0,l)]}function pu(e){for(const t of Be()){const n=qs(t).find(s=>s.id===e);if(n)return n}return null}function Dn(e,t,n=""){return i.route==="review"&&i.activeExerciseReviewLevel===String(e||"").toUpperCase()&&String(i.activeExerciseReviewId||"")===String(t||"")&&(!n||String(i.activeExerciseReviewSource||"")===String(n||""))}function pi(e,t,n){var s,r;return Dn(e,n)?((s=i.reviewExerciseResults)==null?void 0:s[String(n)])||null:((r=t.exerciseResults)==null?void 0:r[String(n)])||null}function Lw(e,t,n){const s=Y(t);if(!e||!s||!n)return null;e.exerciseSrs||(e.exerciseSrs={});const r=e.exerciseSrs[String(n.id)]||null;if(r)return zn(r,{level:s,lessonId:n.lessonId||r.lessonId||"",exerciseId:n.id,cardId:n.cardId||r.cardId||"",kanji:n.kanji||r.kanji||"",type:n.type||r.type||"",title:n.title||r.title||null,prompt:n.prompt||r.prompt||"",answer:n.answer||r.answer||"",answerLabel:n.answerLabel||r.answerLabel||""});const a=bs(s,n.lessonId||"",n.id,n);return e.exerciseSrs[String(n.id)]=a,a}function Iw(e,t,n,s){if(!e||!n)return;const r=Y(t);r&&(e.exerciseSrs||(e.exerciseSrs={}),e.exerciseSrs[String(n.id)]=zn(s,{level:r,lessonId:n.lessonId||(s==null?void 0:s.lessonId)||"",exerciseId:n.id,cardId:n.cardId||(s==null?void 0:s.cardId)||"",kanji:n.kanji||(s==null?void 0:s.kanji)||"",type:n.type||(s==null?void 0:s.type)||"",title:n.title||(s==null?void 0:s.title)||null,prompt:n.prompt||(s==null?void 0:s.prompt)||"",answer:n.answer||(s==null?void 0:s.answer)||"",answerLabel:n.answerLabel||(s==null?void 0:s.answerLabel)||""}))}function gi(e,t,n,s,r,a={}){var f,v,b,$;const l=Y(e);if(!l||!t||!n)return;const c=new Date().toISOString(),u=Dn(l,n.id);if(u&&((f=i.reviewExerciseResults)!=null&&f[n.id]))return;const p={selected:s,correct:r,checkedAt:c};u?(i.reviewExerciseResults||(i.reviewExerciseResults={}),i.reviewExerciseResults[n.id]=p,i.reviewQueueLastKind="exercise"):t.exerciseResults[n.id]=p;const d=oe(Lw(t,l,n)||bs(l,n.lessonId||"",n.id,n)),g=Ae(d,r?"good":"again");if(Iw(t,l,n,g),gn(d,g,r?"good":"again"),_e(),r){if(i.progress.totalCorrect+=1,!u&&!t.completedExercises[n.id]){t.completedExercises[n.id]=c,(v=a.markCompleted)==null||v.call(a,c),(a.markStudied||(()=>{}))();const j=Number(a.rewardXp||0),k=Number(a.rewardMoon||0);(j||k)&&Q(j,k,a.rewardKey||`exercise:${n.id}`)}_("answer_correct")}else{if(i.progress.totalWrong+=1,(b=a.markWrong)==null||b.call(a),(a.markDifficult||(()=>{}))(),n.type==="reading"||n.type==="missing-word"){const j=n.answerLabel||n.answer;j&&(($=a.markWordMistake)==null||$.call(a,j))}_("answer_wrong")}V(),C(),u&&(i.pendingFocus="__scroll-top__"),I()}function gu(e){var n,s,r,a,l,c,u,p,d,g,f,v,b,$,S,j,k,x,T,B,L,y,N,H,me,fe,Qn,Xn,ie,jn,Yi,Zi,ea,ta,na,sa;const t=Y((e==null?void 0:e.level)||"");return t==="N5"?{xp:Number(((s=(n=i.n5Meta)==null?void 0:n.rewards)==null?void 0:s.exerciseXp)||7),moon:Number(((a=(r=i.n5Meta)==null?void 0:r.rewards)==null?void 0:a.exerciseMoon)||1)}:t==="N4"?{xp:Number(((c=(l=i.n4Meta)==null?void 0:l.rewards)==null?void 0:c.readingXp)||((p=(u=i.n4Meta)==null?void 0:u.rewards)==null?void 0:p.exerciseXp)||10),moon:Number(((g=(d=i.n4Meta)==null?void 0:d.rewards)==null?void 0:g.readingMoon)||((v=(f=i.n4Meta)==null?void 0:f.rewards)==null?void 0:v.exerciseMoon)||1)}:t==="N3"?{xp:Number((($=(b=i.n3Meta)==null?void 0:b.rewards)==null?void 0:$.readingXp)||((j=(S=i.n3Meta)==null?void 0:S.rewards)==null?void 0:j.exerciseXp)||10),moon:Number(((x=(k=i.n3Meta)==null?void 0:k.rewards)==null?void 0:x.readingMoon)||((B=(T=i.n3Meta)==null?void 0:T.rewards)==null?void 0:B.exerciseMoon)||1)}:t==="N2"?{xp:Number(((y=(L=i.n2Meta)==null?void 0:L.rewards)==null?void 0:y.readingXp)||((H=(N=i.n2Meta)==null?void 0:N.rewards)==null?void 0:H.exerciseXp)||10),moon:Number(((fe=(me=i.n2Meta)==null?void 0:me.rewards)==null?void 0:fe.readingMoon)||((Xn=(Qn=i.n2Meta)==null?void 0:Qn.rewards)==null?void 0:Xn.exerciseMoon)||1)}:{xp:Number(((jn=(ie=i.n1Meta)==null?void 0:ie.rewards)==null?void 0:jn.readingXp)||((Zi=(Yi=i.n1Meta)==null?void 0:Yi.rewards)==null?void 0:Zi.exerciseXp)||10),moon:Number(((ta=(ea=i.n1Meta)==null?void 0:ea.rewards)==null?void 0:ta.readingMoon)||((sa=(na=i.n1Meta)==null?void 0:na.rewards)==null?void 0:sa.exerciseMoon)||1)}}function mu(e,t,n,s={}){var v;if(!(e!=null&&e.id))return;const r=new Date().toISOString(),a=Dn(e.level,e.id,"reading"),l=oe(hn(e)||fn(e));if(i.reviewExerciseResults||(i.reviewExerciseResults={}),e.kind==="cloze"){l.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():l.selectedIndices||[],l.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(j=>({kanji:String((j==null?void 0:j.kanji)||""),reading:String((j==null?void 0:j.reading)||"")})).filter(j=>j.kanji):l.selectedTiles||[],l.selectedText=String(t||""),l.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.slice():l.wrongIndexes||[],l.completed=!0,l.completedAt=r,l.correct=!!n,l.answers={cloze:{selected:String(t||""),correct:!!n,checkedAt:r}},Jn(e,l),i.reviewExerciseResults[e.id]=oe(l),n?(i.progress.totalCorrect+=1,_("answer_correct")):(i.progress.totalWrong+=1,_("answer_wrong"));const b=oe(l),$=Ae(b,n?"good":"again");$.selectedIndices=l.selectedIndices,$.selectedTiles=l.selectedTiles,$.selectedText=l.selectedText,$.wrongIndexes=l.wrongIndexes,$.completed=!0,$.completedAt=r,$.correct=!!n,$.answers=l.answers,Jn(e,$),i.reviewExerciseResults[e.id]=oe($),gn(b,$,n?"good":"again"),_e();const S=gu(e);n?Q(S.xp,S.moon,`reading:${e.id}`):Q(Math.max(1,Math.round(S.xp*.35)),0,`reading:${e.id}:again`),V(),C(),a&&(i.pendingFocus="__scroll-top__"),I();return}const c=e.question||((v=e.questions)==null?void 0:v[0])||null,u=String(s.questionKey||(c==null?void 0:c.id)||e.id);if(l.answers||(l.answers={}),l.answers[u])return;if(l.answers[u]={selected:String(t||""),correct:!!n,checkedAt:r},l.completed=!!u&&Object.keys(l.answers).length>=xo(),l.completedAt=l.completed?r:l.completedAt||null,l.correct=l.completed?Object.values(l.answers).every(b=>!!(b!=null&&b.correct)):!1,l.selectedText=String(t||""),Jn(e,l),i.reviewExerciseResults[e.id]=oe(l),n?(i.progress.totalCorrect+=1,_("answer_correct")):(i.progress.totalWrong+=1,_("answer_wrong")),C(),!l.completed){I();return}const p=oe(l),d=Object.values(l.answers).every(b=>!!(b!=null&&b.correct)),g=Ae(p,d?"good":"again");g.answers=l.answers,g.completed=!0,g.completedAt=r,g.correct=d,g.selectedText=String(t||""),g.wrongQuestions=Object.entries(l.answers).filter(([,b])=>!(b!=null&&b.correct)).map(([b])=>b),Jn(e,g),i.reviewExerciseResults[e.id]=oe(g),gn(p,g,d?"good":"again"),_e();const f=gu(e);d?Q(f.xp,f.moon,`reading:${e.id}`):Q(Math.max(1,Math.round(f.xp*.25)),0,`reading:${e.id}:again`),V(),C(),a&&(i.pendingFocus="__scroll-top__"),I()}function Tw(e){var a;const t=fs();if(!t||t.source!=="reading"||!t.exercise)return;const n=t.exercise.question||((a=t.exercise.questions)==null?void 0:a[0])||null;if(!n)return;const s=String(e.dataset.value||""),r=s===String(n.answer||"");mu(t.exercise,s,r,{questionKey:String(e.dataset.question||n.id||t.exercise.id)})}function Rw(e){var a,l;const t=fs();if(!t||t.source!=="reading"||((a=t.exercise)==null?void 0:a.kind)!=="cloze")return;const n=t.exercise,s=oe(hn(n)||fn(n));if(s.completed||(l=s.selectedIndices)!=null&&l.includes(e))return;const r=Math.max(1,ht(n).length);if(s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():[],s.selectedIndices.length>=r){U(m()==="ru"?"Все пропуски уже заполнены.":"All blank slots are already filled.");return}if(s.selectedIndices.push(e),s.selectedTiles=s.selectedIndices.map(c=>{var u;return(u=n.tiles)==null?void 0:u[c]}).filter(Boolean),s.selectedText=s.selectedTiles.map(c=>c.kanji).join(""),Jn(n,s),i.activeExerciseReviewSelection=s.selectedIndices.slice(),i.reviewExerciseResults[n.id]=oe(s),C(),s.selectedIndices.length>=r){fu();return}I()}function xw(){var s,r;const e=fs();if(!e||e.source!=="reading"||((s=e.exercise)==null?void 0:s.kind)!=="cloze")return;const t=e.exercise,n=oe(hn(t)||fn(t));n.completed||!((r=n.selectedIndices)!=null&&r.length)||(n.selectedIndices=n.selectedIndices.slice(0,-1),n.selectedTiles=n.selectedIndices.map(a=>{var l;return(l=t.tiles)==null?void 0:l[a]}).filter(Boolean),n.selectedText=n.selectedTiles.map(a=>a.kanji).join(""),i.activeExerciseReviewSelection=n.selectedIndices.slice(),i.reviewExerciseResults[t.id]=oe(n),Jn(t,n),C(),I())}function _w(){const e=fs();if(!e||e.source!=="reading"||!e.exercise)return;const t=e.exercise,n=oe(hn(t)||fn(t));n.completed||(n.selectedIndices=[],n.selectedTiles=[],n.selectedText="",n.wrongIndexes=[],i.activeExerciseReviewSelection=[],i.reviewExerciseResults[t.id]=oe(n),Jn(t,n),C(),I())}function fu(){var u;const e=fs();if(!e||e.source!=="reading"||((u=e.exercise)==null?void 0:u.kind)!=="cloze")return;const t=e.exercise,n=ht(t),s=oe(hn(t)||fn(t)),r=Array.isArray(s.selectedIndices)?s.selectedIndices:[];if(r.length<n.length){U(m()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.");return}const a=r.map(p=>{var d;return(d=t.tiles)==null?void 0:d[p]}).filter(Boolean),l=a.length===n.length&&a.every((p,d)=>{var g;return(p==null?void 0:p.kanji)===((g=n[d])==null?void 0:g.kanji)}),c=a.map((p,d)=>{var g;return(p==null?void 0:p.kanji)===((g=n[d])==null?void 0:g.kanji)?-1:d}).filter(p=>p>=0);mu(t,a.map(p=>p.kanji).join(""),l,{selectedIndices:r,selectedTiles:a,wrongIndexes:c})}function Mw(){i.activeExerciseReviewTranslationOpen=!i.activeExerciseReviewTranslationOpen,I()}function to(e){return pi("N5",Z(),e)}function Pw(e){const t=pu(e.dataset.id);if(!t)return;const n=e.dataset.value||"",s=n===t.answer;hu(t,n,s)}function Ew(e){const t=pu(e);if(!t)return;const n=document.getElementById(ku(t.id)),s=n?String(n.value||"").trim():"";hu(t,s,s===t.answer)}function hu(e,t,n){var r,a,l,c;const s=Z();gi("N5",s,e,t,n,{rewardXp:Number(e.rewardXp||((a=(r=i.n5Meta)==null?void 0:r.rewards)==null?void 0:a.exerciseXp)||7),rewardMoon:Number(e.rewardMoon||((c=(l=i.n5Meta)==null?void 0:l.rewards)==null?void 0:c.exerciseMoon)||1),rewardKey:`n5_exercise:${e.id}`,markStudied:()=>cs(e.kanji,e.cardId),markDifficult:()=>Vs(e.kanji,e.cardId),markWordMistake:u=>{s.wordMistakes[u]=Number(s.wordMistakes[u]||0)+1}})}function Dw(e,t,n,s){var g,f;const r=Y(e)||String(e||"").toUpperCase(),a=r==="N5"?mt(t):r==="N4"?sn(t):r==="N3"?an(t):r==="N2"?ln(t):null;if(!a)return;const l=pc(r,a),c=l.find(v=>String(v.id)===String(n))||ae(n);if(!c)return;const u=ls(r,a,l);if((g=u.session.answers)!=null&&g[c.id])return;const p=new Date().toISOString();u.session.answers[c.id]={remembered:!!s,rating:s?"good":"again",answeredAt:p};const d=l.findIndex(v=>String(v.id)===String(c.id));if(u.session.currentIndex=d>=0?d+1:Math.min(Number(u.session.currentIndex||0)+1,l.length),u.session.phase=u.session.currentIndex>=l.length?"test":"study",u.session.updatedAt=p,u.session.phase==="test"?((f=u.session).testOpenedAt||(f.testOpenedAt=p),i.pendingFocus=gt(r,a.id,"test")):i.pendingFocus=gt(r,a.id,"player"),r==="N5"){wu(c.id,s?"good":"again","review");return}if(r==="N4"){Lu(c.id,s?"good":"again","review");return}if(r==="N3"){Bu(c.id,s?"good":"again","review");return}r==="N2"&&Yu(c.id,s?"good":"again","review")}function wu(e,t,n="review"){var p,d,g,f,v,b,$,S;const s=ae(e);if(!s)return;const r=n==="lesson"&&t==="again",a=r?"good":t,l=r?"hard":t,c=oe(O(s.id)),u=Ae(c,a,l);i.progress.cards[s.id]=u,gn(c,u,l),_e(),cs(s.kanji,s.id),Z().srsKanji[s.kanji]=new Date().toISOString(),r?(Vs(s.kanji,s.id,!1),i.progress.totalCorrect+=1,Q(((d=(p=i.n5Meta)==null?void 0:p.rewards)==null?void 0:d.hardXp)||2,1,`n5_srs_lesson_hard:${s.id}`),_("answer_correct")):Fn(t)?(Vs(s.kanji,s.id),i.progress.totalWrong+=1,Q(((f=(g=i.n5Meta)==null?void 0:g.rewards)==null?void 0:f.hardXp)||2,0,`n5_srs_hard:${s.id}`),_("answer_wrong")):(i.progress.totalCorrect+=1,Q(t==="easy"?((b=(v=i.n5Meta)==null?void 0:v.rewards)==null?void 0:b.knowXp)||6:((S=($=i.n5Meta)==null?void 0:$.rewards)==null?void 0:S.addToSrsXp)||4,1,`n5_srs:${s.id}`),_("answer_correct")),V(),C(),Qe()}function Ow(e){var s;const t=ae(e);if(!t)return;const n=Z();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),i.progress.writingPractice.completed=Number(i.progress.writingPractice.completed||0)+1,i.progress.writingPractice.cards[t.id]={completed:Number(((s=i.progress.writingPractice.cards[t.id])==null?void 0:s.completed)||0)+1,lastAt:new Date().toISOString()},cs(t.kanji,t.id),Q(8,1,`n5_writing:${t.id}`)),V(),C(),I()}function Kw(e){var f,v,b,$,S;const t=mt(e);if(!t)return;const n=Z(),s=`n5:${t.id}`;if(we.has(s)||n.completedLessons[t.id]){I();return}const r=nn(t);if(r.filter(j=>n.studiedKanji[j.kanji]).length<t.kanji.length){const j=m()==="ru"?"Сначала изучите все кандзи урока (8/8).":"Study all kanji in the lesson first (8/8).";typeof U=="function"&&U(j);return}const l=qs(t);if(!(l.length>0&&l.every(j=>{var k;return(k=to(j.id))==null?void 0:k.correct}))){const j=m()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof U=="function"&&U(j);return}we.add(s),nn(t).forEach(j=>{cs(j.kanji,j.id),n.srsKanji[j.kanji]=n.srsKanji[j.kanji]||new Date().toISOString();const k=O(j.id);k.state==="New"&&(i.progress.cards[j.id]=Ae(oe(k),"good"))}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=((f=Be().find(j=>j.order===t.order+1))==null?void 0:f.id)||t.id;const u=Qs(),p=u.sessions[n5SessKey];if(p){const j=new Date().toISOString();p.phase="done",p.completedAt=j,p.updatedAt=j,p.currentIndex=r.length,u.activeSessionKey=n5SessKey,u.lastUpdatedAt=j}Z(),i.progress.n5Course=i.progress.n5Course||{},i.progress.n5Course.completedLessons=i.progress.n5Course.completedLessons||{},i.progress.n5Course.completedLessons[t.id]=new Date().toISOString(),C({immediate:!0}),En()>=10&&Object.keys(n.studiedKanji||{}).length>=80&&(i.progress.unlockedJlptLevels=i.progress.unlockedJlptLevels||[],i.progress.unlockedJlptLevels.includes("N5")||i.progress.unlockedJlptLevels.push("N5"),i.progress.unlockedJlptLevels.includes("N4")||i.progress.unlockedJlptLevels.push("N4"));const d=((b=(v=i.n5Meta)==null?void 0:v.rewards)==null?void 0:b.lessonCompleteXp)||45,g=((S=($=i.n5Meta)==null?void 0:$.rewards)==null?void 0:S.lessonCompleteMoon)||6;Q(d,g,`n5_lesson:${t.id}`),ot({title:`${Ke().lessonComplete}: ${w(t.title)}`,message:Ke().lessonCompleteText,xp:d,coins:g,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),_("lesson_complete"),V(),C(),I()}function cs(e,t=null){if(!e)return;const n=Z();Os(n,e)}function Vs(e,t=null,n=!0){if(e&&(Z().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=O(t);s.state!=="New"&&(i.progress.cards[t]=Ae(oe(s),"again"))}}function Bw(e){const t=mt(e);t&&(Z().currentLessonId=t.id,Tt("N5",t.id,"n5_lesson_open"),qt("N5",t,"n5_lesson_open"),Ys(t.id))}function Fw(){Ys("")}function zw(e=null){e&&(Z().activeReviewMode=e),Ys("review")}function Ys(e){i.route="textbooks",i.activeTextbookLevel="N5",i.activeTextbookSubroute=e||null;const t=e?`#textbooks/N5/${encodeURIComponent(e)}`:"#textbooks/N5";zt(t),C(),de(),Yt()}function Jw(e="due"){const t=Date.now(),n=Z(),s=Nt();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const a=O(r.id);return a.state!=="New"&&(!a.dueAt||new Date(a.dueAt).getTime()<=t)})}function vu(){var a,l;const e=Nt(),t=Be(),n=((a=i.n5FinalTest)==null?void 0:a.types)||["meaning","reading","sentence","kanji","word","srs"],s=Math.min(((l=i.n5FinalTest)==null?void 0:l.questionCount)||24,Math.max(e.length,1)),r=[];for(let c=0;c<s;c+=1){const u=e[c*7%e.length]||e[c%e.length],p=n[c%n.length],d=t.find(g=>g.kanji.includes(u.kanji))||t[0];r.push(Uw(p,u,d,c))}return r.filter(Boolean)}function Uw(e,t,n,s){var c;const a=ft(t)[0],l=((n==null?void 0:n.sentences)||[]).find(u=>u.jp.includes(t.kanji))||((c=n==null?void 0:n.sentences)==null?void 0:c[0]);if(e==="meaning")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:P(t),options:Ct({value:t.id,label:P(t)},Nt().filter(u=>u.id!==t.id).map(u=>({value:u.id,label:P(u)})),s)};if(e==="reading")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:a.word,answer:a.reading,answerLabel:a.reading,options:Ct({value:a.reading,label:a.reading},Nt().flatMap(u=>ft(u).map(p=>({value:p.reading,label:p.reading}))).filter(u=>u.value!==a.reading),s)};if(e==="sentence"&&l){const u=w({ru:l.ru,en:l.en});return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:u,answerLabel:u,options:Ct({value:u,label:u},Be().flatMap(p=>p.sentences||[]).map(p=>({value:w({ru:p.ru,en:p.en}),label:w({ru:p.ru,en:p.en})})).filter(p=>p.value!==u),s)}}if(e==="word"){const u=a.word;return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Je(a),answer:u,answerLabel:u,options:Ct({value:u,label:u},Nt().flatMap(p=>ft(p).map(d=>({value:d.word,label:d.word}))).filter(p=>p.value!==u),s)}}return e==="srs"?{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:m()==="ru"?`Мини-повторение: ${t.kanji} — ${P(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${P(t)}. What do you press if you remember?`,answer:"remember",answerLabel:m()==="ru"?"Помню":"Remember",options:[{value:"again",label:m()==="ru"?"Сложно":"Hard"},{value:"remember",label:m()==="ru"?"Помню":"Remember"},{value:"skip",label:m()==="ru"?"Пропустить":"Skip"}]}:{id:`n5-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:P(t),answer:t.kanji,answerLabel:t.kanji,options:Ct({value:t.kanji,label:t.kanji},Nt().filter(u=>u.id!==t.id).map(u=>({value:u.kanji,label:u.kanji})),s)}}function Gw(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(Z().finalTest.answers[t]=n,C(),I())}function bu(e=!1){var n,s,r,a;if(i.finalTestBusy)return;const t=Z().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){I();return}i.finalTestBusy=!0;try{const l=vu(),c=i.n5FinalTest||{},u=Ke(),p=pn(t,l),d=_k(c),g=!!(c.allowIncompleteFinish||c.allowUnansweredFinish),f=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,p.missingCount&&!e&&!g){const L=p.firstMissingId?`#${ar("n5",p.firstMissingId)}`:null;i.finalTestModal={kind:"warning",level:"N5",title:m()==="ru"?"Ответь на все вопросы":"Answer all questions",message:m()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${p.missingCount}.`:`You left some questions unanswered. Missing: ${p.missingCount}.`,answered:p.answered,missingCount:p.missingCount,totalQuestions:p.totalQuestions,threshold:d,focusSelector:L,focusLabel:m()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:m()==="ru"?"Продолжить":"Continue",forceLabel:m()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:g},i.pendingFocus=L,C();return}let v=0;const b=[],$=[];l.forEach(L=>{var N;const y=String(((N=t.answers)==null?void 0:N[L.id])||"").trim();y===L.answer?(v+=1,cs(L.kanji,L.cardId)):(y||$.push(L),b.push({id:L.id,kanji:L.kanji,answer:L.answerLabel,selected:y}),Vs(L.kanji,L.cardId))});const S=l.length?Math.round(v/l.length*100):0,j=!!t.completedAt,k=!!t.passed,x=Math.max(0,b.length-$.length);let T=0,B=0;if(t.answers=t.answers||{},t.score=v,t.percent=S,t.passed=S>=d,t.correctAnswers=v,t.incorrectAnswers=x,t.unansweredAnswers=$.length,t.totalQuestions=l.length,t.mistakes=b,t.mistakeQuestionIds=b.map(L=>L.id),t.completedAt=f,t.lastScore=S,t.bestScore=Math.max(Number(t.bestScore||0),S),t.passedAt=t.passed?k&&t.passedAt||f:t.passedAt||null,!j){const L=Number(((n=c==null?void 0:c.rewards)==null?void 0:n.completeXp)||120),y=Number(((s=c==null?void 0:c.rewards)==null?void 0:s.completeMoon)||20);T+=L,B+=y,Q(L,y,"n5_final_complete")}if(t.passed&&!k){const L=Number(((r=c==null?void 0:c.rewards)==null?void 0:r.passXp)||80),y=Number(((a=c==null?void 0:c.rewards)==null?void 0:a.passMoon)||12);T+=L,B+=y,Q(L,y,"n5_final_pass")}t.lastRewardXp=T,t.lastRewardMoon=B,Z(),i.progress.n5Course=i.progress.n5Course||{},i.progress.n5Course.finalTest=i.progress.n5Course.finalTest||{},Object.assign(i.progress.n5Course.finalTest,{percent:t.percent,score:t.score,completedAt:t.completedAt,passed:t.passed,totalQuestions:t.totalQuestions,correctAnswers:t.correctAnswers||t.score}),C({immediate:!0}),i.finalTestModal={kind:"result",level:"N5",title:t.passed?u.finalPassed:u.finalNeedsReview,message:t.passed?u.finalPassedText:u.finalNeedsReviewText,passed:t.passed,percent:S,correct:v,incorrect:x,unanswered:$.length,totalQuestions:l.length,rewardXp:T,rewardMoon:B,attempts:t.attempts,threshold:d,reviewAction:"n5-review",reviewAllAction:"n5-review",closeLabel:(m()==="ru","OK"),repeatLabel:u.repeatMistakes,reviewAllLabel:u.reviewAll},V(),C()}catch(l){console.error(l),U(m()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{i.finalTestBusy=!1,I()}}function Hw(){Z().finalTest=ka().finalTest,i.finalTestModal=null,i.finalTestBusy=!1,C(),I()}function ku(e){return`n5-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Qw(e){i.activeTextbookLevel="N4",i.activeJlptLesson="N4";const t=no();t.opened||(t.opened=!0,V(),C());const n=String(i.activeTextbookSubroute||"");if(n==="final-test")return iv();if(n==="review")return Zw();if(n==="kanji")return tv();if(n==="grammar")return nv();if(n==="reading")return sv();if(n==="listening")return rv();const s=sn(n);return s?(J().currentLessonId=s.id,Tt("N4",s.id,"n4_lesson_page"),qt("N4",s,"n4_lesson_page"),qw(e,s)):Xw(e)}function Xw(e){var c,u,p;const t=lv(),n=je(),s=tt(),r=ov(),a=i.n4Meta||{},l=w(a.principle||{});return`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N4 · Flash Kanji</p>
            <h1>${o(n.title)}</h1>
            <p>${o(w(a.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${o(n.allTextbooks)}</button>
            <a class="btn ghost" href="${h(a.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N4_textbook_flashkanji_space.pdf" target="_blank" rel="noopener">${o(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero n4-hero">
          <div class="n5-hero-copy">
            <span class="pill">170 ${o(n.kanji)} · 48 ${o(n.grammar)}</span>
            <h2>${o(n.courseMap)}</h2>
            <p>${o(l)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#jlpt/n4/${h((r==null?void 0:r.id)||"n4-lesson-1")}" data-action="n4-open-lesson" data-id="${h((r==null?void 0:r.id)||"n4-lesson-1")}">${o(n.continue)}</a>
              <button class="btn" type="button" data-action="n4-review" data-mode="due">${o(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n4-kanji">${o(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n4-grammar">${o(n.grammarN4)}</button>
              <button class="btn ghost" type="button" data-action="n4-reading">${o(n.readingN4)}</button>
              <button class="btn ghost" type="button" data-action="n4-final">${o(n.finalTest)}</button>
            </div>
          </div>
          ${vs("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${E(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,D(t.studied,t.total))}
          ${E(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,D(t.completedLessons,s.length))}
          ${E(n.completedGrammar,`${t.completedGrammar}/${((c=i.n4Meta)==null?void 0:c.grammarCount)||i.n4Grammar.length}`,n.grammar,D(t.completedGrammar,((u=i.n4Meta)==null?void 0:u.grammarCount)||i.n4Grammar.length))}
          ${E(n.reviews,t.reviews,n.srs,D(t.reviews,Math.max(t.total,1)))}
        </div>

        <section class="n5-panel n4-bridge">
          <div>
            <h2>${o(n.n5Bridge)}</h2>
            <p>${o(n.n5BridgeText)}</p>
          </div>
          <div class="n4-bridge-grid">
            ${(a.n5Bridge||[]).map(d=>`<span class="pill">${o(d)}</span>`).join("")}
          </div>
          <div class="textbook-actions">
            <a class="btn ghost" href="#textbooks/N5">${o(n.reviewN5Base)}</a>
          </div>
        </section>

        <section class="n5-panel">
          <div>
            <h2>${o(n.lessonsTitle)}</h2>
            <p>${o(n.lessonsDescription)}</p>
          </div>
          <div class="n5-lesson-grid">
            ${s.map(d=>Ww(d)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${o(n.reviewPlan)}</h2>
            <p>${o(w((((p=i.n4Textbook)==null?void 0:p.textbook)||{}).recommendedCycle||a.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(a.reviewPlan||[]).map(d=>`<span class="pill">${o(n.day)} ${o(d.day)} · ${o(w(d.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${Xs("N4")}
      </section>
    `}function Ww(e){const t=Nu(e.id),n=je();let s=e.kanji.filter(r=>J().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n4/${h(e.id)}" data-action="n4-open-lesson" data-id="${h(e.id)}">
        <span class="pill">${o(n.lesson)} ${e.order}</span>
        <h3>${o(w(e.title))}</h3>
        <p>${o(w(e.goal))}</p>
        <div class="n5-kanji-strip n4-kanji-strip">${e.kanji.map(r=>`<b>${o(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${h(`${s}/${e.kanji.length}`)}"><i style="width:${D(s,e.kanji.length)}%"></i></div>
        <small>${o(s)}/${o(e.kanji.length)} · ${o(cv(t))}</small>
      </a>
    `}function qw(e,t){const n=je(),s=Zs(t),r=mi(t),a=Nu(t.id),l=ls("N4",t,s);let c=a==="completed";const u=`n4:${t.id}`;we.has(u)&&(c=!0);const p=c,d=r.filter(T=>{var B;return(B=ro(T.id))==null?void 0:B.correct}).length,g=r.length>0&&d===r.length,f=s.filter(T=>J().studiedKanji[T.kanji]).length,v=t.kanji.length,b=f>=v,$=!c&&g&&b,S=t.kanji.filter(T=>J().difficultKanji[T]).join(" · "),j=tt().find(T=>T.order===t.order+1),k=gt("N4",t.id,"player"),x=gt("N4",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n4-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · ${o(n.lesson)} ${t.order}/17</p>
            <h1>${o(w(t.title))}</h1>
            <p>${o(w(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${o(n.backToN4)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="difficult">${o(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n4-final">${o(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${o(w(t.theme))}</span>
            <h2>${o(n.lessonChain)}</h2>
            <p>${o(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${o(n.duration)}: ${o(t.durationMinutes||30)} ${o(n.minutes)}</span>
              ${t.grammarFocus.map(T=>`<span class="pill">${o(T)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${E(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,D(l.answeredCount,t.kanji.length))}
            ${E(n.exercises,`${d}/${r.length}`,n.correct,D(d,r.length))}
          </div>
        </article>

        ${ui("N4",t,s,n,{playerId:k,answerAction:"jlpt-lesson-answer",examples:T=>nt(T),sentence:T=>Vw(T,t)})}

        ${Yw(t)}

        <section class="n5-panel">
          <div>
            <h2>${o(n.sentences)}</h2>
            <p>${o(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(T=>`
              <article>
                <strong>${o(T.jp)}</strong>
                <span>${o(ne(T.reading||""))}</span>
                <small>${o(w({ru:T.ru,en:T.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${h(x)}">
          <div>
            <h2>${o(n.exercises)}</h2>
            <p>${o(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(T=>$u(T)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${o(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${o(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${o(n.studiedKanji)}: ${s.filter(T=>J().studiedKanji[T.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${o(n.correct)}: ${d}/${r.length}</span>
              <span class="pill">${o(n.difficult)}: ${o(S||n.none)}</span>
            </div>
            ${!c&&!$?`<p class="n5-feedback">${o(m()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n4-complete-lesson" data-id="${h(t.id)}" ${p||!$?"disabled":""}>${o(p?m()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="difficult">${o(n.repeatMistakes)}</button>
            ${j?`<a class="btn ghost" href="#jlpt/n4/${h(j.id)}" data-action="n4-open-lesson" data-id="${h(j.id)}">${o(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n4-final">${o(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function Vw(e,t){var r;const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||((r=t.grammarFocus)==null?void 0:r[0])||"";return`
      <div class="n5-card-sentence">
        <strong>${o(n.jp)}</strong>
        <span>${o(ne(n.reading||""))}</span>
        <small>${o(w({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${o(je().grammar)}: ${o(s)}</small>`:""}
      </div>
    `}function Yw(e){const t=je(),n=(e.grammarFocus||[]).map(s=>so(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n4-grammar-panel">
        <div>
          <h2>${o(t.miniGrammar)}</h2>
          <p>${o(t.miniGrammarText)}</p>
        </div>
        <div class="n4-section-grid">
          ${n.map(s=>{var r;return`
            <article class="n4-grammar-card">
              <span class="pill">${o(s.pattern)}</span>
              <h3>${o(w(s.title))}</h3>
              <p>${o(w(s.explanation))}</p>
              ${s.formula?`<code>${o(s.formula)}</code>`:""}
              ${(r=s.examples)!=null&&r[0]?`<div class="n5-card-sentence"><strong>${o(s.examples[0].jp)}</strong><span>${o(s.examples[0].reading||"")}</span><small>${o(w({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n4-grammar-complete" data-id="${h(s.id)}" data-value="${h(s.answer)}">${o(J().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `}).join("")}
        </div>
      </section>
    `:""}function $u(e){const t=je(),n=ro(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=i.route==="review"&&Dn("N4",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${o(w(e.title))}</span>
          <h3>${o(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${h(xu(e.id))}" type="text" maxlength="3" autocomplete="off" value="${h((n==null?void 0:n.selected)||"")}" aria-label="${h(w(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n4-check-input" data-id="${h(e.id)}" ${r?"disabled":""}>${o(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n4-answer" data-id="${h(e.id)}" data-value="" ${r?"disabled":""}>${o(t.showAnswer)}</button>
          </div>
          ${yu(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${o(w(e.title))}</span>
        <h3>${o(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const l=(n==null?void 0:n.selected)===a.value;return`<button class="btn ${n&&a.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n4-answer" data-id="${h(e.id)}" data-value="${h(a.value)}" ${r?"disabled":""}>${o(a.label)}</button>`}).join("")}
        </div>
        ${yu(e,n)}
      </article>
    `}function yu(e,t){if(!t)return"";const n=je(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${o(s)}</p>`}function Zw(e){var r;const t=je(),n=J().activeReviewMode||"due",s=Nv(n);return`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · Повторение</p>
            <h1>${o(t.reviewTitle)}</h1>
            <p>${o(t.reviewDescription)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${o(t.backToN4)}</button>
            <button class="btn ghost" type="button" data-action="n4-final">${o(t.finalTest)}</button>
          </div>
        </div>
        <div class="jlpt-filter-bar" role="tablist" aria-label="N4 review modes">
          ${(((r=i.n4Exercises)==null?void 0:r.reviewModes)||[]).map(a=>`
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n4-review" data-mode="${h(a.id)}">${o(w(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,l)=>ev(a,l)).join("")||`<article class="empty-state"><h3>${o(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function ev(e,t){var r,a;const n=je(),s=O(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${o(s.state)} · ${o(Hn(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${o(e.kanji)}</div>
        <h3>${o(P(e))}</h3>
        <p>${o(((r=nt(e)[0])==null?void 0:r.word)||e.hiragana||"")} · ${o(((a=nt(e)[0])==null?void 0:a.reading)||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n4-srs" data-id="${h(e.id)}" data-rating="easy">${o(n.know)}</button>
          <button class="btn warning" type="button" data-action="n4-srs" data-id="${h(e.id)}" data-rating="again">${o(n.hard)}</button>
        </div>
      </article>
    `}function tv(e){const t=je(),n=Xe();return`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · 170</p>
            <h1>${o(t.kanjiListTitle)}</h1>
            <p>${o(t.kanjiListText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${o(t.backToN4)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="all">${o(t.reviewAll)}</button>
          </div>
        </div>
        <div class="n5-kanji-grid n4-kanji-catalog">
          ${n.map((s,r)=>{var a,l;return`
            <article class="n5-kanji-card">
              <div class="n5-kanji-topline"><span class="pill">${r+1}/170</span><span class="pill">${o(O(s.id).state)}</span></div>
              <div class="n5-big-kanji">${o(s.kanji)}</div>
              <h3>${o(P(s))}</h3>
              <p>${o(((a=nt(s)[0])==null?void 0:a.word)||"")} · ${o(((l=nt(s)[0])==null?void 0:l.reading)||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n4-srs" data-id="${h(s.id)}" data-rating="good">${o(t.addToSrs)}</button>
              </div>
            </article>
          `}).join("")}
        </div>
      </section>
    `}function nv(e){const t=je();return`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · Grammar</p>
            <h1>${o(t.grammarTitle)}</h1>
            <p>${o(t.grammarText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${o(t.backToN4)}</button>
            <button class="btn ghost" type="button" data-action="n4-reading">${o(t.readingN4)}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${E(t.completedGrammar,`${Object.keys(J().completedGrammar||{}).length}/${i.n4Grammar.length}`,t.grammar,D(Object.keys(J().completedGrammar||{}).length,i.n4Grammar.length))}
          ${E(t.questions,i.n4Grammar.length,t.grammar,100)}
        </div>
        <div class="n4-section-grid">
          ${i.n4Grammar.map(n=>{var r;const s=(r=J().grammarResults)==null?void 0:r[n.id];return`
              <article class="n4-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${o(n.order)} · ${o(n.pattern)}</span>
                <h3>${o(w(n.title))}</h3>
                <p>${o(w(n.explanation))}</p>
                ${n.formula?`<code>${o(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${o(a.jp)}</strong><span>${o(ne(a.reading||""))}</span><small>${o(w({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${o(w(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(n.options.length?n.options:[n.answer]).map(a=>`
                    <button class="btn ${(s==null?void 0:s.selected)===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n4-grammar-complete" data-id="${h(n.id)}" data-value="${h(a)}">${o(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${o(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${n.answer}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function sv(e){const t=je(),n=Oi("N4","n4_reading_page"),s=wr("N4");return(n||s)&&C(),`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · Reading</p>
            <h1>${o(t.readingTitle)}</h1>
            <p>${o(t.readingText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${o(t.backToN4)}</button>
            <button class="btn ghost" type="button" data-action="n4-listening">${o(t.listeningN4)}</button>
          </div>
        </div>
        <div class="n4-section-grid">
          ${i.n4Reading.map(r=>ju(r,"reading")).join("")}
        </div>
      </section>
    `}function rv(e){const t=je();return`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · Listening</p>
            <h1>${o(t.listeningTitle)}</h1>
            <p>${o(t.listeningText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${o(t.backToN4)}</button>
            <button class="btn ghost" type="button" data-action="n4-final">${o(t.finalTest)}</button>
          </div>
        </div>
        <div class="n4-section-grid">
          ${i.n4Listening.map(n=>ju(n,"listening")).join("")}
        </div>
      </section>
    `}function ju(e,t){const n=je(),s=t==="reading"?J().completedReading[e.id]:J().completedListening[e.id],r=t==="reading"?J().readingAnswers:J().listeningAnswers,a=t==="reading"?"n4-reading-complete":"n4-listening-complete";return`
      <article class="n4-reading-card ${s?"is-correct":""}">
        <span class="pill">${o(w(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${o(l)}</strong></article>`).join("")}</div>`:`<p class="n4-jp-text">${o(e.jp||"")}</p>`}
        ${e.ru?`<p>${o(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const u=`${e.id}:${c}`,p=r==null?void 0:r[u],d=Array.isArray(l.options)?l.options:[];return`
            <div class="n4-question-block">
              <h3>${o(w(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${d.map(g=>`<button class="btn ${(p==null?void 0:p.selected)===g.value?p.correct?"success":"warning":"ghost"}" type="button" data-action="${h(a)}" data-id="${h(e.id)}" data-question="${h(c)}" data-value="${h(g.value)}">${o(w(g.label||g))}</button>`).join("")}
              </div>
              ${p?`<p class="n5-feedback">${o(p.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function iv(e){const t=je(),n=i.n4FinalTest||{},s=Tu(),r=J().finalTest,a=pn(r,s),l=a.answered,c=a.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const d=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==d)&&(r.percent=d),r.completedAt||(r.completedAt=new Date().toISOString()),C()}const u=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,p=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n4-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · Final</p>
            <h1>${o(w(n.title||{}))}</h1>
            <p>${o(w(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${o(t.backToN4)}</button>
            <button class="btn" type="button" data-action="n4-final-reset">${o(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${E(t.questions,`${l}/${s.length}`,t.finalTest,D(l,s.length))}
          ${E(t.score,u||p>0?`${p}%`:"—",`${n.passingPercent||80}%`,u||p>0?p:0)}
          ${E(t.mistakes,u?(r.mistakes||[]).length:0,t.difficult,u?D((r.mistakes||[]).length,s.length):0)}
        </div>

        ${u?`
          <section class="n5-result-panel ${r.passed?"is-complete":""}">
            <div>
              <h2>${o(r.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${o(r.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n4-review" data-mode="difficult">${o(t.repeatMistakes)}</button>
            ${Kt("N4","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((d,g)=>av(d,g)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${o(m()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n4-final-submit" ${i.finalTestBusy||u?"disabled":""}>${o(u?m()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Kt("N4","btn ghost")}
          <button class="btn ghost" type="button" data-action="n4-review" data-mode="all">${o(t.reviewAll)}</button>
        </div>
      </section>
    `}function av(e,t){var r;const n=(r=J().finalTest.answers)==null?void 0:r[e.id],s=!!J().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${o(e.type)}</span>
        <h3>${o(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const l=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":l?"primary":"ghost"}" type="button" data-action="n4-final-answer" data-id="${h(e.id)}" data-value="${h(a.value)}">${o(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${o(je().wrongAnswer)}: ${o(e.answerLabel)}</p>`:""}
      </article>
    `}function je(){return m()==="ru"?{title:"JLPT N4",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N4 после N5",continue:"Продолжить",review:"Повторять N4",openKanji:"Открыть список кандзи",grammarN4:"Грамматика N4",readingN4:"Чтение N4",listeningN4:"Аудирование N4",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"17 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, упражнение, письмо и повторение.",reviewPlan:"План повторения на 45 дней",day:"день",lesson:"Урок",backToN4:"К N4",n5Bridge:"N5 bridge",n5BridgeText:"Перед N4 полезно держать активной базу N5: она станет опорой для более длинных предложений.",reviewN5Base:"Повторить базу N5 перед N4",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> текст -> упражнение -> письмо -> повторение",lessonChainText:"N4 больше не живёт списком знаков: каждый знак сразу получает слово, грамматическую связку и контекст.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика держит смысл предложения.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции из примеров урока, чтобы кандзи сразу работали в предложении.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N4-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N4.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"170 кандзи N4",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"48 грамматических конструкций N4",grammarText:"Короткие рабочие карточки: функция, формула, пример и проверка понимания.",readingTitle:"Тексты для чтения N4",readingText:"Короткие тексты связывают кандзи, слова и грамматику в нормальный контекст.",listeningTitle:"Скрипты для аудирования N4",listeningText:"Диалоги можно читать вслух или использовать как основу для прослушивания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N4",finalPassed:"N4 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N4",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N4 textbook after N5",continue:"Continue",review:"Review N4",openKanji:"Open kanji list",grammarN4:"N4 grammar",readingN4:"N4 reading",listeningN4:"N4 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",reviews:"Reviews",difficult:"Difficult",srs:"Повторение",lessons:"lessons",lessonsTitle:"17 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, exercise, writing, and SRS.",reviewPlan:"45-day review plan",day:"day",lesson:"Lesson",backToN4:"To N4",n5Bridge:"N5 bridge",n5BridgeText:"Keep the N5 base active before N4; it supports longer sentences.",reviewN5Base:"Review N5 base before N4",lessonChain:"Kanji -> word -> grammar -> sentence -> text -> exercise -> writing -> SRS",lessonChainText:"N4 is not a bare list: each sign gets a word, grammar link, and context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries the sentence.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N4 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions from the lesson examples.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N4 review",reviewDescription:"Review due cards, difficult kanji, or the full N4 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"170 N4 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"48 N4 grammar constructions",grammarText:"Compact cards with function, formula, example, and check.",readingTitle:"N4 reading texts",readingText:"Short texts connect kanji, words, and grammar.",listeningTitle:"N4 listening scripts",listeningText:"Read dialogues aloud or use them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N4",finalPassed:"N4 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function no(){i.progress.n4Course=Yl($a(),i.progress.n4Course||{});const e=tt();!sn(i.progress.n4Course.currentLessonId)&&e[0]&&(i.progress.n4Course.currentLessonId=e[0].id);const n=e.find(s=>!i.progress.n4Course.completedLessons[s.id]);return!i.progress.n4Course.currentLessonId&&n&&(i.progress.n4Course.currentLessonId=n.id),i.progress.n4Course}function J(){return no()}function tt(){var e;return((e=i.n4Textbook)==null?void 0:e.items)||[]}function sn(e){const t=String(e||"");return t&&tt().find(n=>n.id===t||n.id===`n4-${t}`||n.id.endsWith(`-${t}`))||null}function ov(){return sn(J().currentLessonId)||tt().find(e=>!J().completedLessons[e.id])||tt()[0]||null}function Zs(e){return((e==null?void 0:e.kanji)||[]).map(t=>Su(t)).filter(Boolean)}function Xe(){const e=new Set;return(i.n4KanjiCatalog||[]).map(t=>Su(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Su(e){var r;const t=String(e||""),n=((r=i.n4KanjiCatalog)==null?void 0:r.find(a=>a.kanji===t))||null,s=i.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N4")||(n?i.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Fr(s,n):s||(n?Fr({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[]},n):null)}function so(e){const t=String(e||"");return i.n4Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function nt(e){return di(e,e.examples)}function lv(){var r;const e=Xe(),t=J(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{O(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of we)if(a.startsWith("n4:")){const l=a.slice(3);s[l]=s[l]||new Date().toISOString()}return{total:((r=i.n4Meta)==null?void 0:r.kanjiCount)||e.length||170,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,reviews:e.reduce((a,l)=>a+Number(O(l.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Nu(e){var r;const t=J(),n=`n4:${e}`;if(we.has(n)||t.completedLessons[e])return"completed";const s=sn(e);return(r=s==null?void 0:s.kanji)!=null&&r.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function cv(e){return e==="completed"?m()==="ru"?"завершён":"completed":e==="started"?m()==="ru"?"начат":"started":m()==="ru"?"не начат":"new"}function mi(e){var j,k,x,T,B,L;const t=Zs(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((((j=i.n4Exercises)==null?void 0:j.types)||[]).map(y=>[y.type,y.title])),r=Object.fromEntries((((k=i.n4Exercises)==null?void 0:k.types)||[]).map(y=>[y.type,y])),a=y=>{var N,H,me,fe;return r[y]||{rewardXp:((H=(N=i.n4Meta)==null?void 0:N.rewards)==null?void 0:H.exerciseXp)||9,rewardMoon:((fe=(me=i.n4Meta)==null?void 0:me.rewards)==null?void 0:fe.exerciseMoon)||1}},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:P(c),kanji:c.kanji,cardId:c.id,options:We({value:c.id,label:P(c)},t.slice(1).map(y=>({value:y.id,label:P(y)})),1),...a("meaning")});const u=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:P(u),answer:u.kanji,answerLabel:u.kanji,kanji:u.kanji,cardId:u.id,options:We({value:u.kanji,label:u.kanji},t.filter(y=>y.id!==u.id).map(y=>({value:y.kanji,label:y.kanji})),2),...a("kanji")});const p=t[2]||t[0],d=nt(p)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:d.word||p.kanji,answer:d.reading||p.hiragana||"",answerLabel:d.reading||p.hiragana||"",kanji:p.kanji,cardId:p.id,options:We({value:d.reading||p.hiragana||"",label:d.reading||p.hiragana||""},t.flatMap(y=>nt(y).map(N=>({value:N.reading,label:N.reading}))).filter(y=>y.value&&y.value!==d.reading),3),...a("reading")});const g=n[0];g&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:g.jp,answer:w({ru:g.ru,en:g.en}),answerLabel:w({ru:g.ru,en:g.en}),kanji:t[0].kanji,cardId:t[0].id,options:We({value:w({ru:g.ru,en:g.en}),label:w({ru:g.ru,en:g.en})},n.slice(1).map(y=>({value:w({ru:y.ru,en:y.en}),label:w({ru:y.ru,en:y.en})})),1),...a("sentence")});const f=t[3]||t[0],v=nt(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:m()==="ru"?`Какое слово подходит к значению «${Je(v)}В»?`:`Which word matches "${Je(v)}"?`,answer:v.word||f.kanji,answerLabel:v.word||f.kanji,kanji:f.kanji,cardId:f.id,options:We({value:v.word||f.kanji,label:v.word||f.kanji},t.flatMap(y=>nt(y).map(N=>({value:N.word,label:N.word}))).filter(y=>y.value&&y.value!==v.word),2),...a("missing-word")});const b=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:m()==="ru"?`Введи кандзи для значения: ${P(b)}`:`Type the kanji for: ${P(b)}`,answer:b.kanji,answerLabel:b.kanji,kanji:b.kanji,cardId:b.id,options:[],...a("active-recall")});const $=so((x=e.grammarFocus)==null?void 0:x[0]);$&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:w($.question||$.explanation),answer:$.answer,answerLabel:$.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:$.id,options:We({value:$.answer,label:$.answer},$.options.filter(y=>y!==$.answer).map(y=>({value:y,label:y})),1),...a("grammar-link")});const S=n[1]||n[0];return S&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:S.jp,answer:w({ru:S.ru,en:S.en}),answerLabel:w({ru:S.ru,en:S.en}),kanji:((T=t[1])==null?void 0:T.kanji)||t[0].kanji,cardId:((B=t[1])==null?void 0:B.id)||t[0].id,options:We({value:w({ru:S.ru,en:S.en}),label:w({ru:S.ru,en:S.en})},n.filter(y=>y.jp!==S.jp).map(y=>({value:w({ru:y.ru,en:y.en}),label:w({ru:y.ru,en:y.en})})),2),...a("mini-reading")}),l.slice(0,((L=i.n4Exercises)==null?void 0:L.lessonQuestionCount)||8).map(y=>({...y,level:"N4",lessonId:e.id}))}function We(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||r.length>=4||(s.add(c),r.push(l))}),Xe().forEach(l=>{if(r.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),r.push(c))}),r.length<=1)return r;const a=n%r.length;return[...r.slice(a),...r.slice(0,a)]}function Cu(e){for(const t of tt()){const n=mi(t).find(s=>s.id===e);if(n)return n}return null}function ro(e){return pi("N4",J(),e)}function uv(e){const t=Cu(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;Au(t,s,r)}function dv(e){const t=Cu(e);if(!t)return;const n=document.getElementById(xu(t.id)),s=n?String(n.value||"").trim():"";Au(t,s,s===t.answer)}function Au(e,t,n){var r,a,l,c;const s=J();gi("N4",s,e,t,n,{rewardXp:Number(e.rewardXp||((a=(r=i.n4Meta)==null?void 0:r.rewards)==null?void 0:a.exerciseXp)||9),rewardMoon:Number(e.rewardMoon||((c=(l=i.n4Meta)==null?void 0:l.rewards)==null?void 0:c.exerciseMoon)||1),rewardKey:`n4_exercise:${e.id}`,markStudied:()=>us(e.kanji,e.cardId),markDifficult:()=>er(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:u=>{s.wordMistakes[u]=Number(s.wordMistakes[u]||0)+1}})}function Lu(e,t,n="review"){var p,d,g,f,v,b,$,S;const s=ae(e)||Xe().find(j=>String(j.id)===String(e));if(!s)return;const r=n==="lesson"&&t==="again",a=r?"good":t,l=r?"hard":t,c=oe(O(s.id)),u=Ae(c,a,l);i.progress.cards[s.id]=u,gn(c,u,l),_e(),us(s.kanji,s.id),J().srsKanji[s.kanji]=new Date().toISOString(),r?(er(s.kanji,s.id,!1),i.progress.totalCorrect+=1,Q(((d=(p=i.n4Meta)==null?void 0:p.rewards)==null?void 0:d.hardXp)||2,1,`n4_srs_lesson_hard:${s.id}`),_("answer_correct")):Fn(t)?(er(s.kanji,s.id),i.progress.totalWrong+=1,Q(((f=(g=i.n4Meta)==null?void 0:g.rewards)==null?void 0:f.hardXp)||2,0,`n4_srs_hard:${s.id}`),_("answer_wrong")):(i.progress.totalCorrect+=1,Q(t==="easy"?((b=(v=i.n4Meta)==null?void 0:v.rewards)==null?void 0:b.knowXp)||7:((S=($=i.n4Meta)==null?void 0:$.rewards)==null?void 0:S.addToSrsXp)||5,1,`n4_srs:${s.id}`),_("answer_correct")),V(),C(),Qe()}function pv(e){var s;const t=ae(e)||Xe().find(r=>String(r.id)===String(e));if(!t)return;const n=J();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),i.progress.writingPractice.completed=Number(i.progress.writingPractice.completed||0)+1,i.progress.writingPractice.cards[t.id]={completed:Number(((s=i.progress.writingPractice.cards[t.id])==null?void 0:s.completed)||0)+1,lastAt:new Date().toISOString()},us(t.kanji,t.id),Q(9,1,`n4_writing:${t.id}`)),V(),C(),I()}function gv(e){var v,b,$,S,j;const t=sn(e);if(!t)return;const n=J(),s=`n4:${t.id}`;if(we.has(s)||n.completedLessons[t.id]){I();return}const r=Zs(t);if(r.filter(k=>n.studiedKanji[k.kanji]).length<t.kanji.length){const k=m()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof U=="function"&&U(k);return}const l=mi(t);if(!(l.length>0&&l.every(k=>{var x;return(x=ro(k.id))==null?void 0:x.correct}))){const k=m()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof U=="function"&&U(k);return}we.add(s),Zs(t).forEach(k=>{us(k.kanji,k.id),n.srsKanji[k.kanji]=n.srsKanji[k.kanji]||new Date().toISOString();const x=O(k.id);x.state==="New"&&(i.progress.cards[k.id]=Ae(oe(x),"good"))}),(t.grammarFocus||[]).map(k=>so(k)).filter(Boolean).forEach(k=>{n.completedGrammar[k.id]=n.completedGrammar[k.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=((v=tt().find(k=>k.order===t.order+1))==null?void 0:v.id)||t.id;const u=Qs(),p=u.sessions[n4SessKey];if(p){const k=new Date().toISOString();p.phase="done",p.completedAt=k,p.updatedAt=k,p.currentIndex=r.length,u.activeSessionKey=n4SessKey,u.lastUpdatedAt=k}J(),Object.keys(n.completedLessons||{}).length>=9&&(i.progress.unlockedJlptLevels=i.progress.unlockedJlptLevels||[],i.progress.unlockedJlptLevels.includes("N4")||i.progress.unlockedJlptLevels.push("N4"),i.progress.unlockedJlptLevels.includes("N3")||i.progress.unlockedJlptLevels.push("N3"));const g=(($=(b=i.n4Meta)==null?void 0:b.rewards)==null?void 0:$.lessonCompleteXp)||65,f=((j=(S=i.n4Meta)==null?void 0:S.rewards)==null?void 0:j.lessonCompleteMoon)||8;Q(g,f,`n4_lesson:${t.id}`),ot({title:`${je().lessonComplete}: ${w(t.title)}`,message:je().lessonCompleteText,xp:g,coins:f,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),_("lesson_complete"),V(),C(),I()}function us(e,t=null){if(!e)return;const n=J();Os(n,e)}function er(e,t=null,n=!0){if(e&&(J().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=O(t);s.state!=="New"&&(i.progress.cards[t]=Ae(oe(s),"again"))}}function mv(e,t=""){var l,c,u,p;const n=i.n4Grammar.find(d=>d.id===e||d.pattern===e);if(!n)return;const s=t||n.answer,r=s===n.answer,a=J();a.grammarResults[n.id]={selected:s,correct:r,checkedAt:new Date().toISOString()},r&&!a.completedGrammar[n.id]?(a.completedGrammar[n.id]=new Date().toISOString(),Q(((c=(l=i.n4Meta)==null?void 0:l.rewards)==null?void 0:c.grammarXp)||10,((p=(u=i.n4Meta)==null?void 0:u.rewards)==null?void 0:p.grammarMoon)||1,`n4_grammar:${n.id}`),i.progress.totalCorrect+=1,_("answer_correct")):r||(i.progress.totalWrong+=1,_("answer_wrong")),_e(),V(),C(),I()}function fv(e,t="0",n=""){Iu("reading",e,t,n)}function hv(e,t="0",n=""){Iu("listening",e,t,n)}function Iu(e,t,n="0",s=""){var v,b,$,S,j,k,x,T;const a=(e==="reading"?i.n4Reading:i.n4Listening).find(B=>B.id===t);if(!a)return;const l=Number(n||0),c=(a.questions||[])[l];if(!c)return;const u=s===c.answer,p=`${a.id}:${l}`,d=J(),g=e==="reading"?d.readingAnswers:d.listeningAnswers,f=e==="reading"?d.completedReading:d.completedListening;if(g[p]={selected:s,correct:u,checkedAt:new Date().toISOString()},u&&!f[a.id]){f[a.id]=new Date().toISOString();const B=e==="reading"?((b=(v=i.n4Meta)==null?void 0:v.rewards)==null?void 0:b.readingXp)||35:((S=($=i.n4Meta)==null?void 0:$.rewards)==null?void 0:S.listeningXp)||30,L=e==="reading"?((k=(j=i.n4Meta)==null?void 0:j.rewards)==null?void 0:k.readingMoon)||4:((T=(x=i.n4Meta)==null?void 0:x.rewards)==null?void 0:T.listeningMoon)||3;Q(B,L,`n4_${e}:${a.id}`),i.progress.totalCorrect+=1,_("answer_correct")}else u||(i.progress.totalWrong+=1,_("answer_wrong"));_e(),V(),C(),I()}function wv(e){const t=sn(e);t&&(J().currentLessonId=t.id,Tt("N4",t.id,"n4_lesson_open"),qt("N4",t,"n4_lesson_open"),rn(t.id))}function vv(){rn("")}function bv(e=null){e&&(J().activeReviewMode=e),rn("review")}function kv(){rn("kanji")}function $v(){rn("grammar")}function yv(){rn("reading")}function jv(){rn("listening")}function Sv(){rn("final-test")}function rn(e){i.route="textbooks",i.activeTextbookLevel="N4",i.activeTextbookSubroute=e||null,J().opened=!0;const t=e?`#jlpt/n4/${encodeURIComponent(e)}`:"#jlpt/n4";zt(t),V(),C(),de(),Yt()}function Nv(e="due"){const t=Date.now(),n=J(),s=Xe();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const a=O(r.id);return a.state!=="New"&&(!a.dueAt||new Date(a.dueAt).getTime()<=t)})}function Tu(){var r,a;const e=Xe();if(!e.length)return[];const t=((r=i.n4FinalTest)==null?void 0:r.types)||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(((a=i.n4FinalTest)==null?void 0:a.questionCount)||32,Math.max(e.length,1)),s=[];for(let l=0;l<n;l+=1){const c=e[l*11%e.length]||e[l%e.length],u=t[l%t.length],p=tt().find(d=>d.kanji.includes(c.kanji))||tt()[0];s.push(Cv(u,c,p,l))}return s.filter(Boolean)}function Cv(e,t,n,s){var c,u,p;const a=nt(t)[0]||{},l=((n==null?void 0:n.sentences)||[]).find(d=>d.jp.includes(t.kanji))||((c=n==null?void 0:n.sentences)==null?void 0:c[0]);if(e==="meaning")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:P(t),options:We({value:t.id,label:P(t)},Xe().filter(d=>d.id!==t.id).map(d=>({value:d.id,label:P(d)})),s)};if(e==="reading")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:a.word||t.kanji,answer:a.reading||t.hiragana||"",answerLabel:a.reading||t.hiragana||"",options:We({value:a.reading||t.hiragana||"",label:a.reading||t.hiragana||""},Xe().flatMap(d=>nt(d).map(g=>({value:g.reading,label:g.reading}))).filter(d=>d.value&&d.value!==a.reading),s)};if(e==="sentence"&&l){const d=w({ru:l.ru,en:l.en});return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:d,answerLabel:d,options:We({value:d,label:d},tt().flatMap(g=>g.sentences||[]).map(g=>({value:w({ru:g.ru,en:g.en}),label:w({ru:g.ru,en:g.en})})).filter(g=>g.value!==d),s)}}if(e==="word"){const d=a.word||t.kanji;return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Je(a),answer:d,answerLabel:d,options:We({value:d,label:d},Xe().flatMap(g=>nt(g).map(f=>({value:f.word,label:f.word}))).filter(g=>g.value&&g.value!==d),s)}}if(e==="grammar"){const d=i.n4Grammar[s%Math.max(i.n4Grammar.length,1)];if(d)return{id:`n4-final-${s}`,type:e,grammarId:d.id,prompt:`${d.pattern}: ${w(d.question||d.explanation)}`,answer:d.answer,answerLabel:d.answer,options:We({value:d.answer,label:d.answer},d.options.filter(g=>g!==d.answer).map(g=>({value:g,label:g})),s)}}if(e==="mini-reading"){const d=i.n4Reading[s%Math.max(i.n4Reading.length,1)],g=(u=d==null?void 0:d.questions)==null?void 0:u[0];if(d&&g)return{id:`n4-final-${s}`,type:e,readingId:d.id,prompt:`${d.jp||w(d.title)} ${w(g.prompt)}`,answer:g.answer,answerLabel:w(((p=(g.options||[]).find(f=>f.value===g.answer))==null?void 0:p.label)||g.answer),options:(g.options||[]).map(f=>({value:f.value,label:w(f.label||f)}))}}return e==="srs"?{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:m()==="ru"?`Мини-повторение: ${t.kanji} — ${P(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${P(t)}. What do you press if you remember?`,answer:"remember",answerLabel:m()==="ru"?"Помню":"Remember",options:[{value:"again",label:m()==="ru"?"Сложно":"Hard"},{value:"remember",label:m()==="ru"?"Помню":"Remember"},{value:"skip",label:m()==="ru"?"Пропустить":"Skip"}]}:{id:`n4-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:P(t),answer:t.kanji,answerLabel:t.kanji,options:We({value:t.kanji,label:t.kanji},Xe().filter(d=>d.id!==t.id).map(d=>({value:d.kanji,label:d.kanji})),s)}}function Av(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(J().finalTest.answers[t]=n,C(),I())}function Ru(e=!1){var n,s,r,a,l,c;if(i.finalTestBusy)return;const t=J().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){I();return}i.finalTestBusy=!0;try{const u=Tu(),p=i.n4FinalTest||{},d=je(),g=pn(t,u),f=Number((s=(n=p==null?void 0:p.passingPercent)!=null?n:p==null?void 0:p.passThreshold)!=null?s:80),v=!!(p.allowIncompleteFinish||p.allowUnansweredFinish),b=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,g.missingCount&&!e&&!v){const N=g.firstMissingId?`#${ar("n4",g.firstMissingId)}`:null;i.finalTestModal={kind:"warning",level:"N4",title:m()==="ru"?"Ответь на все вопросы":"Answer all questions",message:m()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${g.missingCount}.`:`You left some questions unanswered. Missing: ${g.missingCount}.`,answered:g.answered,missingCount:g.missingCount,totalQuestions:g.totalQuestions,threshold:f,focusSelector:N,focusLabel:m()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:m()==="ru"?"Продолжить":"Continue",forceLabel:m()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:v},i.pendingFocus=N,C();return}let $=0;const S=[],j=[];u.forEach(N=>{var me;const H=String(((me=t.answers)==null?void 0:me[N.id])||"").trim();if(H===N.answer){if($+=1,N.kanji&&us(N.kanji,N.cardId),N.grammarId){const fe=J();fe.completedGrammar[N.grammarId]=fe.completedGrammar[N.grammarId]||b}}else H||j.push(N),S.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:H}),N.kanji&&er(N.kanji,N.cardId)});const k=u.length?Math.round($/u.length*100):0,x=!!t.completedAt,T=!!t.passed,B=Math.max(0,S.length-j.length);let L=0,y=0;if(t.answers=t.answers||{},t.score=$,t.percent=k,t.passed=k>=f,t.correctAnswers=$,t.incorrectAnswers=B,t.unansweredAnswers=j.length,t.totalQuestions=u.length,t.mistakes=S,t.mistakeQuestionIds=S.map(N=>N.id),t.completedAt=b,t.lastScore=k,t.bestScore=Math.max(Number(t.bestScore||0),k),t.passedAt=t.passed?T&&t.passedAt||b:t.passedAt||null,!x){const N=Number(((r=p==null?void 0:p.rewards)==null?void 0:r.completeXp)||180),H=Number(((a=p==null?void 0:p.rewards)==null?void 0:a.completeMoon)||35);L+=N,y+=H,Q(N,H,"n4_final_complete")}if(t.passed&&!T){const N=Number(((l=p==null?void 0:p.rewards)==null?void 0:l.passXp)||90),H=Number(((c=p==null?void 0:p.rewards)==null?void 0:c.passMoon)||15);L+=N,y+=H,Q(N,H,"n4_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=y,J(),i.pendingFocus=null,i.finalTestModal={kind:"result",level:"N4",title:t.passed?d.finalPassed:d.finalNeedsReview,message:t.passed?d.finalPassedText:d.finalNeedsReviewText,passed:t.passed,percent:k,correct:$,incorrect:B,unanswered:j.length,totalQuestions:u.length,rewardXp:L,rewardMoon:y,attempts:t.attempts,threshold:f,reviewAction:"n4-review",reviewAllAction:"n4-review",closeLabel:(m()==="ru","OK"),repeatLabel:d.repeatMistakes,reviewAllLabel:d.reviewAll},V(),C()}catch(u){console.error(u),U(m()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{i.finalTestBusy=!1,I()}}function Lv(){J().finalTest=$a().finalTest,i.finalTestModal=null,i.finalTestBusy=!1,C(),I()}function xu(e){return`n4-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Iv(e){i.activeTextbookLevel="N3",i.activeJlptLesson="N3";const t=ao();t.opened||(t.opened=!0,V(),C());const n=String(i.activeTextbookSubroute||"");if(n==="final-test")return zv();if(n==="review")return Ev();if(n==="kanji")return Ov();if(n==="grammar")return Kv();if(n==="reading")return Bv();if(n==="listening")return Fv();const s=an(n);return s?(F().currentLessonId=s.id,Tt("N3",s.id,"n3_lesson_page"),qt("N3",s,"n3_lesson_page"),xv(e,s)):Tv(e)}function Tv(e){var c,u,p,d,g,f,v;const t=Gv(),n=be(),s=st(),r=Uv(),a=i.n3Meta||{},l=w(a.principle||{});return`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N3 · Flash Kanji</p>
            <h1>${o(n.title)}</h1>
            <p>${o(w(a.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${o(n.allTextbooks)}</button>
            <a class="btn ghost" href="${h(a.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N3_textbook_flashkanji_space.pdf" target="_blank" rel="noopener">${o(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero n3-hero">
          <div class="n5-hero-copy">
            <span class="pill">370 ${o(n.kanji)} · 80 ${o(n.grammar)}</span>
            <h2>${o(n.courseMap)}</h2>
            <p>${o(l)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#jlpt/n3/${h((r==null?void 0:r.id)||"n3-lesson-1")}" data-action="n3-open-lesson" data-id="${h((r==null?void 0:r.id)||"n3-lesson-1")}">${o(n.continue)}</a>
              <button class="btn" type="button" data-action="n3-review" data-mode="due">${o(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n3-kanji">${o(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n3-grammar">${o(n.grammarN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-reading">${o(n.readingN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-listening">${o(n.listeningN3)}</button>
              <button class="btn ghost" type="button" data-action="n3-final">${o(n.finalTest)}</button>
            </div>
          </div>
          ${vs("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${E(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,D(t.studied,t.total))}
          ${E(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,D(t.completedLessons,s.length))}
          ${E(n.completedGrammar,`${t.completedGrammar}/${((c=i.n3Meta)==null?void 0:c.grammarCount)||i.n3Grammar.length}`,n.grammar,D(t.completedGrammar,((u=i.n3Meta)==null?void 0:u.grammarCount)||i.n3Grammar.length))}
          ${E(n.completedReading,`${t.completedReading}/${((p=i.n3Meta)==null?void 0:p.readingCount)||i.n3Reading.length}`,n.readingN3,D(t.completedReading,((d=i.n3Meta)==null?void 0:d.readingCount)||i.n3Reading.length))}
          ${E(n.completedListening,`${t.completedListening}/${((g=i.n3Meta)==null?void 0:g.listeningCount)||i.n3Listening.length}`,n.listeningN3,D(t.completedListening,((f=i.n3Meta)==null?void 0:f.listeningCount)||i.n3Listening.length))}
          ${E(n.reviews,t.reviews,n.srs,D(t.reviews,Math.max(t.total,1)))}
        </div>

        <section class="n5-panel n3-bridge">
          <div>
            <h2>${o(n.n5Bridge)}</h2>
            <p>${o(n.n5BridgeText)}</p>
          </div>
          <div class="n3-bridge-grid">
            ${(a.n5Bridge||[]).map(b=>`<span class="pill">${o(b)}</span>`).join("")}
          </div>
          <div class="textbook-actions">
            <a class="btn ghost" href="#jlpt/n4">${o(n.reviewN5Base)}</a>
          </div>
        </section>

        <section class="n5-panel">
          <div>
            <h2>${o(n.lessonsTitle)}</h2>
            <p>${o(n.lessonsDescription)}</p>
          </div>
          <div class="n5-lesson-grid">
            ${s.map(b=>Rv(b)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${o(n.reviewPlan)}</h2>
            <p>${o(w((((v=i.n3Textbook)==null?void 0:v.textbook)||{}).recommendedCycle||a.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(a.reviewPlan||[]).map(b=>`<span class="pill">${o(n.day)} ${o(b.day)} · ${o(w(b.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${Xs("N3")}
      </section>
    `}function Rv(e){const t=Du(e.id),n=be();let s=e.kanji.filter(r=>F().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n3/${h(e.id)}" data-action="n3-open-lesson" data-id="${h(e.id)}">
        <span class="pill">${o(n.lesson)} ${e.order}</span>
        <h3>${o(w(e.title))}</h3>
        <p>${o(w(e.goal))}</p>
        <div class="n5-kanji-strip n3-kanji-strip">${e.kanji.map(r=>`<b>${o(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${h(`${s}/${e.kanji.length}`)}"><i style="width:${D(s,e.kanji.length)}%"></i></div>
        <small>${o(s)}/${o(e.kanji.length)} · ${o(Hv(t))}</small>
      </a>
    `}function xv(e,t){const n=be(),s=tr(t),r=fi(t),a=Du(t.id),l=ls("N3",t,s);let c=a==="completed";const u=`n3:${t.id}`;we.has(u)&&(c=!0);const p=c,d=r.filter(L=>{var y;return(y=lo(L.id))==null?void 0:y.correct}).length,g=r.length>0&&d===r.length,f=s.filter(L=>F().studiedKanji[L.kanji]).length,v=t.kanji.length,b=f>=v,$=!c&&g&&b,S=t.kanji.filter(L=>F().difficultKanji[L]).join(" · "),j=st().find(L=>L.order===t.order+1),k=_u(t),x=k?!!F().completedReading[k.id]:!1,T=gt("N3",t.id,"player"),B=gt("N3",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n3-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · ${o(n.lesson)} ${t.order}/37</p>
            <h1>${o(w(t.title))}</h1>
            <p>${o(w(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${o(n.backToN3)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="difficult">${o(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n3-final">${o(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${o(w(t.theme))}</span>
            <h2>${o(n.lessonChain)}</h2>
            <p>${o(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${o(n.duration)}: ${o(t.durationMinutes||30)} ${o(n.minutes)}</span>
              ${t.grammarFocus.map(L=>`<span class="pill">${o(L)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${E(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,D(l.answeredCount,t.kanji.length))}
            ${E(n.exercises,`${d}/${r.length}`,n.correct,D(d,r.length))}
          </div>
        </article>

        ${ui("N3",t,s,n,{playerId:T,answerAction:"jlpt-lesson-answer",examples:L=>rt(L),sentence:L=>Mv(L,t)})}

        ${Pv(t)}

        ${_v(t)}

        <section class="n5-panel">
          <div>
            <h2>${o(n.sentences)}</h2>
            <p>${o(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(L=>`
              <article>
                <strong>${o(L.jp)}</strong>
                <span>${o(ne(L.reading||""))}</span>
                <small>${o(w({ru:L.ru,en:L.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${h(B)}">
          <div>
            <h2>${o(n.exercises)}</h2>
            <p>${o(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(L=>Mu(L)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${o(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${o(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${o(n.studiedKanji)}: ${s.filter(L=>F().studiedKanji[L.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${o(n.correct)}: ${d}/${r.length}</span>
              ${k?`<span class="pill">${o(n.miniReadingTitle)}: ${o(x?n.completed:n.none)}</span>`:""}
              <span class="pill">${o(n.difficult)}: ${o(S||n.none)}</span>
            </div>
            ${!c&&!$?`<p class="n5-feedback">${o(m()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n3-complete-lesson" data-id="${h(t.id)}" ${p||!$?"disabled":""}>${o(p?m()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="difficult">${o(n.repeatMistakes)}</button>
            ${j?`<a class="btn ghost" href="#jlpt/n3/${h(j.id)}" data-action="n3-open-lesson" data-id="${h(j.id)}">${o(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n3-final">${o(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function _u(e){return e!=null&&e.miniReadingId&&i.n3Reading.find(t=>t.id===e.miniReadingId)||null}function _v(e){const t=be(),n=_u(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${o(t.miniReadingTitle)}</h2>
          <p>${o(t.miniReadingText)}</p>
        </div>
        ${io(n,"reading")}
      </section>
    `:""}function Mv(e,t){var r;const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||((r=t.grammarFocus)==null?void 0:r[0])||"";return`
      <div class="n5-card-sentence">
        <strong>${o(n.jp)}</strong>
        <span>${o(ne(n.reading||""))}</span>
        <small>${o(w({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${o(be().grammar)}: ${o(s)}</small>`:""}
      </div>
    `}function Pv(e){const t=be(),n=(e.grammarFocus||[]).map(s=>oo(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n3-grammar-panel">
        <div>
          <h2>${o(t.miniGrammar)}</h2>
          <p>${o(t.miniGrammarText)}</p>
        </div>
        <div class="n3-section-grid">
          ${n.map(s=>{var r;return`
            <article class="n3-grammar-card">
              <span class="pill">${o(s.pattern)}</span>
              <h3>${o(w(s.title))}</h3>
              <p>${o(w(s.explanation))}</p>
              ${s.formula?`<code>${o(s.formula)}</code>`:""}
              ${(r=s.examples)!=null&&r[0]?`<div class="n5-card-sentence"><strong>${o(s.examples[0].jp)}</strong><span>${o(s.examples[0].reading||"")}</span><small>${o(w({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n3-grammar-complete" data-id="${h(s.id)}" data-value="${h(s.answer)}">${o(F().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `}).join("")}
        </div>
      </section>
    `:""}function Mu(e){const t=be(),n=lo(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=i.route==="review"&&Dn("N3",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${o(w(e.title))}</span>
          <h3>${o(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${h(Uu(e.id))}" type="text" maxlength="3" autocomplete="off" value="${h((n==null?void 0:n.selected)||"")}" aria-label="${h(w(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n3-check-input" data-id="${h(e.id)}" ${r?"disabled":""}>${o(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n3-answer" data-id="${h(e.id)}" data-value="" ${r?"disabled":""}>${o(t.showAnswer)}</button>
          </div>
          ${Pu(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${o(w(e.title))}</span>
        <h3>${o(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const l=(n==null?void 0:n.selected)===a.value;return`<button class="btn ${n&&a.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n3-answer" data-id="${h(e.id)}" data-value="${h(a.value)}" ${r?"disabled":""}>${o(a.label)}</button>`}).join("")}
        </div>
        ${Pu(e,n)}
      </article>
    `}function Pu(e,t){if(!t)return"";const n=be(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${o(s)}</p>`}function Ev(e){var r;const t=be(),n=F().activeReviewMode||"due",s=lb(n);return`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · Повторение</p>
            <h1>${o(t.reviewTitle)}</h1>
            <p>${o(t.reviewDescription)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${o(t.backToN3)}</button>
            <button class="btn ghost" type="button" data-action="n3-final">${o(t.finalTest)}</button>
          </div>
        </div>
        <div class="jlpt-filter-bar" role="tablist" aria-label="N3 review modes">
          ${(((r=i.n3Exercises)==null?void 0:r.reviewModes)||[]).map(a=>`
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n3-review" data-mode="${h(a.id)}">${o(w(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,l)=>Dv(a,l)).join("")||`<article class="empty-state"><h3>${o(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Dv(e,t){var r,a;const n=be(),s=O(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${o(s.state)} · ${o(Hn(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${o(e.kanji)}</div>
        <h3>${o(P(e))}</h3>
        <p>${o(((r=rt(e)[0])==null?void 0:r.word)||e.hiragana||"")} · ${o(((a=rt(e)[0])==null?void 0:a.reading)||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n3-srs" data-id="${h(e.id)}" data-rating="easy">${o(n.know)}</button>
          <button class="btn warning" type="button" data-action="n3-srs" data-id="${h(e.id)}" data-rating="again">${o(n.hard)}</button>
        </div>
      </article>
    `}function Ov(e){const t=be(),n=qe();return`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · 370</p>
            <h1>${o(t.kanjiListTitle)}</h1>
            <p>${o(t.kanjiListText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${o(t.backToN3)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="all">${o(t.reviewAll)}</button>
          </div>
        </div>
        <div class="n5-kanji-grid n3-kanji-catalog">
          ${n.map((s,r)=>{var a,l;return`
            <article class="n5-kanji-card">
              <div class="n5-kanji-topline"><span class="pill">${r+1}/370</span><span class="pill">${o(O(s.id).state)}</span></div>
              <div class="n5-big-kanji">${o(s.kanji)}</div>
              <h3>${o(P(s))}</h3>
              <p>${o(((a=rt(s)[0])==null?void 0:a.word)||"")} · ${o(((l=rt(s)[0])==null?void 0:l.reading)||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n3-srs" data-id="${h(s.id)}" data-rating="good">${o(t.addToSrs)}</button>
              </div>
            </article>
          `}).join("")}
        </div>
      </section>
    `}function Kv(e){const t=be();return`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · Grammar</p>
            <h1>${o(t.grammarTitle)}</h1>
            <p>${o(t.grammarText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${o(t.backToN3)}</button>
            <button class="btn ghost" type="button" data-action="n3-reading">${o(t.readingN3)}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${E(t.completedGrammar,`${Object.keys(F().completedGrammar||{}).length}/${i.n3Grammar.length}`,t.grammar,D(Object.keys(F().completedGrammar||{}).length,i.n3Grammar.length))}
          ${E(t.questions,i.n3Grammar.length,t.grammar,100)}
        </div>
        <div class="n3-section-grid">
          ${i.n3Grammar.map(n=>{var r;const s=(r=F().grammarResults)==null?void 0:r[n.id];return`
              <article class="n3-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${o(n.order)} · ${o(n.pattern)}</span>
                <h3>${o(w(n.title))}</h3>
                <p>${o(w(n.explanation))}</p>
                ${n.formula?`<code>${o(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${o(a.jp)}</strong><span>${o(ne(a.reading||""))}</span><small>${o(w({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${o(w(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(n.options.length?n.options:[n.answer]).map(a=>`
                    <button class="btn ${(s==null?void 0:s.selected)===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n3-grammar-complete" data-id="${h(n.id)}" data-value="${h(a)}">${o(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${o(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${n.answer}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function Bv(e){const t=be(),n=Oi("N3","n3_reading_page"),s=wr("N3");return(n||s)&&C(),`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · Reading</p>
            <h1>${o(t.readingTitle)}</h1>
            <p>${o(t.readingText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${o(t.backToN3)}</button>
            <button class="btn ghost" type="button" data-action="n3-listening">${o(t.listeningN3)}</button>
          </div>
        </div>
        <div class="n3-section-grid">
          ${i.n3Reading.map(r=>io(r,"reading")).join("")}
        </div>
      </section>
    `}function Fv(e){const t=be();return`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · Listening</p>
            <h1>${o(t.listeningTitle)}</h1>
            <p>${o(t.listeningText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${o(t.backToN3)}</button>
            <button class="btn ghost" type="button" data-action="n3-final">${o(t.finalTest)}</button>
          </div>
        </div>
        <div class="n3-section-grid">
          ${i.n3Listening.map(n=>io(n,"listening")).join("")}
        </div>
      </section>
    `}function io(e,t){const n=be(),s=t==="reading"?F().completedReading[e.id]:F().completedListening[e.id],r=t==="reading"?F().readingAnswers:F().listeningAnswers,a=t==="reading"?"n3-reading-complete":"n3-listening-complete";return`
      <article class="n3-reading-card ${s?"is-correct":""}">
        <span class="pill">${o(w(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${o(l)}</strong></article>`).join("")}</div>`:`<p class="n3-jp-text">${o(e.jp||"")}</p>`}
        ${e.ru?`<p>${o(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const u=`${e.id}:${c}`,p=r==null?void 0:r[u],d=Array.isArray(l.options)?l.options:[];return`
            <div class="n3-question-block">
              <h3>${o(w(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${d.map(g=>`<button class="btn ${(p==null?void 0:p.selected)===g.value?p.correct?"success":"warning":"ghost"}" type="button" data-action="${h(a)}" data-id="${h(e.id)}" data-question="${h(c)}" data-value="${h(g.value)}">${o(w(g.label||g))}</button>`).join("")}
              </div>
              ${p?`<p class="n5-feedback">${o(p.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function zv(e){const t=be(),n=i.n3FinalTest||{},s=zu(),r=F().finalTest,a=pn(r,s),l=a.answered,c=a.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const d=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==d)&&(r.percent=d),r.completedAt||(r.completedAt=new Date().toISOString()),C()}const u=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,p=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n3-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · Final</p>
            <h1>${o(w(n.title||{}))}</h1>
            <p>${o(w(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${o(t.backToN3)}</button>
            <button class="btn" type="button" data-action="n3-final-reset">${o(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${E(t.questions,`${l}/${s.length}`,t.finalTest,D(l,s.length))}
          ${E(t.score,u||p>0?`${p}%`:"—",`${n.passingPercent||80}%`,u||p>0?p:0)}
          ${E(t.mistakes,u?(r.mistakes||[]).length:0,t.difficult,u?D((r.mistakes||[]).length,s.length):0)}
        </div>

        ${u?`
          <section class="n5-result-panel ${r.passed?"is-complete":""}">
            <div>
              <h2>${o(r.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${o(r.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n3-review" data-mode="difficult">${o(t.repeatMistakes)}</button>
            ${Kt("N3","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((d,g)=>Jv(d,g)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${o(m()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n3-final-submit" ${i.finalTestBusy?"disabled":""}>${o(t.submitFinal)}</button>
          ${Kt("N3","btn ghost")}
          <button class="btn ghost" type="button" data-action="n3-review" data-mode="all">${o(t.reviewAll)}</button>
        </div>
      </section>
    `}function Jv(e,t){var r;const n=(r=F().finalTest.answers)==null?void 0:r[e.id],s=!!F().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${o(e.type)}</span>
        <h3>${o(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const l=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":l?"primary":"ghost"}" type="button" data-action="n3-final-answer" data-id="${h(e.id)}" data-value="${h(a.value)}">${o(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${o(be().wrongAnswer)}: ${o(e.answerLabel)}</p>`:""}
      </article>
    `}function be(){return m()==="ru"?{title:"JLPT N3",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N3 как мост к среднему уровню",continue:"Продолжить",review:"Повторять N3",openKanji:"Открыть список кандзи",grammarN3:"Грамматика N3",readingN3:"Чтение N3",listeningN3:"Аудирование N3",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Listening",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"37 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, мини-текст, упражнения, письмо и повторение.",reviewPlan:"План повторения на 60 дней",day:"день",lesson:"Урок",backToN3:"К N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"Если база N5 и N4 дырявая, N3 будет ощущаться как стена. Сначала проверь частицы, базовые связки, условные формы и привычные повседневные конструкции.",reviewN5Base:"Повторить N5/N4 перед N3",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> абзац -> чтение -> вывод -> повторение",lessonChainText:"N3 больше не живёт списком знаков: каждый знак сразу входит в слово, грамматическую связку, мини-текст и повторение по смыслу.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, мини-чтение и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, кто, что, почему и к какому выводу ведёт короткий N3-текст.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N3-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N3.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"370 кандзи N3",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"80 грамматических конструкций N3",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном и разговорном контексте.",readingTitle:"Тексты для чтения N3",readingText:"Короткие тексты и lesson mini-readings связывают кандзи, слова, грамматику и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N3",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N3",finalPassed:"N3 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N3",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N3 textbook after N5",continue:"Continue",review:"Review N3",openKanji:"Open kanji list",grammarN3:"N3 grammar",readingN3:"N3 reading",listeningN3:"N3 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"Повторение",lessons:"lessons",lessonsTitle:"37 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, mini reading, exercises, writing, and SRS.",reviewPlan:"60-day review plan",day:"day",lesson:"Lesson",backToN3:"To N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"If the N5 and N4 base is shaky, N3 feels like a wall. Review particles, conditionals, and the everyday support grammar first.",reviewN5Base:"Review N5/N4 before N3",lessonChain:"Kanji -> word -> grammar -> sentence -> paragraph -> reading -> conclusion -> SRS",lessonChainText:"N3 is not a bare list: each sign gets a word, grammar link, mini text, and review context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, mini reading, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N3 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand who, what, why, and what conclusion the short N3 text points to.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N3 review",reviewDescription:"Review due cards, difficult kanji, or the full N3 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"370 N3 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"80 N3 grammar constructions",grammarText:"Compact cards with function, formula, example, and comprehension check.",readingTitle:"N3 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, and conclusions.",listeningTitle:"N3 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N3",finalPassed:"N3 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function ao(){i.progress.n3Course=Zl(ya(),i.progress.n3Course||{});const e=st();!an(i.progress.n3Course.currentLessonId)&&e[0]&&(i.progress.n3Course.currentLessonId=e[0].id);const n=e.find(s=>!i.progress.n3Course.completedLessons[s.id]);return!i.progress.n3Course.currentLessonId&&n&&(i.progress.n3Course.currentLessonId=n.id),i.progress.n3Course}function F(){return ao()}function st(){var e;return((e=i.n3Textbook)==null?void 0:e.items)||[]}function an(e){const t=String(e||"");return t&&st().find(n=>n.id===t||n.id===`n3-${t}`||n.id.endsWith(`-${t}`))||null}function Uv(){return an(F().currentLessonId)||st().find(e=>!F().completedLessons[e.id])||st()[0]||null}function tr(e){return((e==null?void 0:e.kanji)||[]).map(t=>Eu(t)).filter(Boolean)}function qe(){const e=new Set;return(i.n3KanjiCatalog||[]).map(t=>Eu(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Eu(e){var r;const t=String(e||""),n=((r=i.n3KanjiCatalog)==null?void 0:r.find(a=>a.kanji===t))||null,s=i.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N3")||(n?i.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?zr(s,n):s||(n?zr({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[]},n):null)}function oo(e){const t=String(e||"");return i.n3Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function rt(e){return di(e,e.examples)}function Gv(){var r;const e=qe(),t=F(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{O(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of we)if(a.startsWith("n3:")){const l=a.slice(3);s[l]=s[l]||new Date().toISOString()}return{total:((r=i.n3Meta)==null?void 0:r.kanjiCount)||e.length||370,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,l)=>a+Number(O(l.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Du(e){var r;const t=F(),n=`n3:${e}`;if(we.has(n)||t.completedLessons[e])return"completed";const s=an(e);return(r=s==null?void 0:s.kanji)!=null&&r.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function Hv(e){return e==="completed"?m()==="ru"?"завершён":"completed":e==="started"?m()==="ru"?"начат":"started":m()==="ru"?"не начат":"new"}function fi(e){var j,k,x,T,B,L;const t=tr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((((j=i.n3Exercises)==null?void 0:j.types)||[]).map(y=>[y.type,y.title])),r=Object.fromEntries((((k=i.n3Exercises)==null?void 0:k.types)||[]).map(y=>[y.type,y])),a=y=>{var N,H,me,fe;return r[y]||{rewardXp:((H=(N=i.n3Meta)==null?void 0:N.rewards)==null?void 0:H.exerciseXp)||10,rewardMoon:((fe=(me=i.n3Meta)==null?void 0:me.rewards)==null?void 0:fe.exerciseMoon)||1}},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:P(c),kanji:c.kanji,cardId:c.id,options:Ve({value:c.id,label:P(c)},t.slice(1).map(y=>({value:y.id,label:P(y)})),1),...a("meaning")});const u=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:P(u),answer:u.kanji,answerLabel:u.kanji,kanji:u.kanji,cardId:u.id,options:Ve({value:u.kanji,label:u.kanji},t.filter(y=>y.id!==u.id).map(y=>({value:y.kanji,label:y.kanji})),2),...a("kanji")});const p=t[2]||t[0],d=rt(p)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:d.word||p.kanji,answer:d.reading||p.hiragana||"",answerLabel:d.reading||p.hiragana||"",kanji:p.kanji,cardId:p.id,options:Ve({value:d.reading||p.hiragana||"",label:d.reading||p.hiragana||""},t.flatMap(y=>rt(y).map(N=>({value:N.reading,label:N.reading}))).filter(y=>y.value&&y.value!==d.reading),3),...a("reading")});const g=n[0];g&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:g.jp,answer:w({ru:g.ru,en:g.en}),answerLabel:w({ru:g.ru,en:g.en}),kanji:t[0].kanji,cardId:t[0].id,options:Ve({value:w({ru:g.ru,en:g.en}),label:w({ru:g.ru,en:g.en})},n.slice(1).map(y=>({value:w({ru:y.ru,en:y.en}),label:w({ru:y.ru,en:y.en})})),1),...a("sentence")});const f=t[3]||t[0],v=rt(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:m()==="ru"?`Какое слово подходит к значению «${Je(v)}В»?`:`Which word matches "${Je(v)}"?`,answer:v.word||f.kanji,answerLabel:v.word||f.kanji,kanji:f.kanji,cardId:f.id,options:Ve({value:v.word||f.kanji,label:v.word||f.kanji},t.flatMap(y=>rt(y).map(N=>({value:N.word,label:N.word}))).filter(y=>y.value&&y.value!==v.word),2),...a("missing-word")});const b=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:m()==="ru"?`Введи кандзи для значения: ${P(b)}`:`Type the kanji for: ${P(b)}`,answer:b.kanji,answerLabel:b.kanji,kanji:b.kanji,cardId:b.id,options:[],...a("active-recall")});const $=oo((x=e.grammarFocus)==null?void 0:x[0]);$&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:w($.question||$.explanation),answer:$.answer,answerLabel:$.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:$.id,options:Ve({value:$.answer,label:$.answer},$.options.filter(y=>y!==$.answer).map(y=>({value:y,label:y})),1),...a("grammar-link")});const S=n[1]||n[0];return S&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:S.jp,answer:w({ru:S.ru,en:S.en}),answerLabel:w({ru:S.ru,en:S.en}),kanji:((T=t[1])==null?void 0:T.kanji)||t[0].kanji,cardId:((B=t[1])==null?void 0:B.id)||t[0].id,options:Ve({value:w({ru:S.ru,en:S.en}),label:w({ru:S.ru,en:S.en})},n.filter(y=>y.jp!==S.jp).map(y=>({value:w({ru:y.ru,en:y.en}),label:w({ru:y.ru,en:y.en})})),2),...a("mini-reading")}),l.slice(0,((L=i.n3Exercises)==null?void 0:L.lessonQuestionCount)||8).map(y=>({...y,level:"N3",lessonId:e.id}))}function Ve(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||r.length>=4||(s.add(c),r.push(l))}),qe().forEach(l=>{if(r.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),r.push(c))}),r.length<=1)return r;const a=n%r.length;return[...r.slice(a),...r.slice(0,a)]}function Ou(e){for(const t of st()){const n=fi(t).find(s=>s.id===e);if(n)return n}return null}function lo(e){return pi("N3",F(),e)}function Qv(e){const t=Ou(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;Ku(t,s,r)}function Xv(e){const t=Ou(e);if(!t)return;const n=document.getElementById(Uu(t.id)),s=n?String(n.value||"").trim():"";Ku(t,s,s===t.answer)}function Ku(e,t,n){var r,a,l,c;const s=F();gi("N3",s,e,t,n,{rewardXp:Number(e.rewardXp||((a=(r=i.n3Meta)==null?void 0:r.rewards)==null?void 0:a.exerciseXp)||10),rewardMoon:Number(e.rewardMoon||((c=(l=i.n3Meta)==null?void 0:l.rewards)==null?void 0:c.exerciseMoon)||1),rewardKey:`n3_exercise:${e.id}`,markStudied:()=>ds(e.kanji,e.cardId),markDifficult:()=>nr(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:u=>{s.wordMistakes[u]=Number(s.wordMistakes[u]||0)+1}})}function Bu(e,t,n="review"){var p,d,g,f,v,b,$,S;const s=ae(e)||qe().find(j=>String(j.id)===String(e));if(!s)return;const r=n==="lesson"&&t==="again",a=r?"good":t,l=r?"hard":t,c=oe(O(s.id)),u=Ae(c,a,l);i.progress.cards[s.id]=u,gn(c,u,l),_e(),ds(s.kanji,s.id),F().srsKanji[s.kanji]=new Date().toISOString(),r?(nr(s.kanji,s.id,!1),i.progress.totalCorrect+=1,Q(((d=(p=i.n3Meta)==null?void 0:p.rewards)==null?void 0:d.hardXp)||2,1,`n3_srs_lesson_hard:${s.id}`),_("answer_correct")):Fn(t)?(nr(s.kanji,s.id),i.progress.totalWrong+=1,Q(((f=(g=i.n3Meta)==null?void 0:g.rewards)==null?void 0:f.hardXp)||2,0,`n3_srs_hard:${s.id}`),_("answer_wrong")):(i.progress.totalCorrect+=1,Q(t==="easy"?((b=(v=i.n3Meta)==null?void 0:v.rewards)==null?void 0:b.knowXp)||8:((S=($=i.n3Meta)==null?void 0:$.rewards)==null?void 0:S.addToSrsXp)||6,1,`n3_srs:${s.id}`),_("answer_correct")),V(),C(),Qe()}function Wv(e){var s;const t=ae(e)||qe().find(r=>String(r.id)===String(e));if(!t)return;const n=F();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),i.progress.writingPractice.completed=Number(i.progress.writingPractice.completed||0)+1,i.progress.writingPractice.cards[t.id]={completed:Number(((s=i.progress.writingPractice.cards[t.id])==null?void 0:s.completed)||0)+1,lastAt:new Date().toISOString()},ds(t.kanji,t.id),Q(9,1,`n3_writing:${t.id}`)),V(),C(),I()}function qv(e){var v,b,$,S,j;const t=an(e);if(!t)return;const n=F(),s=`n3:${t.id}`;if(we.has(s)||n.completedLessons[t.id]){I();return}const r=tr(t);if(r.filter(k=>n.studiedKanji[k.kanji]).length<t.kanji.length){const k=m()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof U=="function"&&U(k);return}const l=fi(t);if(!(l.length>0&&l.every(k=>{var x;return(x=lo(k.id))==null?void 0:x.correct}))){const k=m()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof U=="function"&&U(k);return}we.add(s),tr(t).forEach(k=>{ds(k.kanji,k.id),n.srsKanji[k.kanji]=n.srsKanji[k.kanji]||new Date().toISOString();const x=O(k.id);x.state==="New"&&(i.progress.cards[k.id]=Ae(oe(x),"good"))}),(t.grammarFocus||[]).map(k=>oo(k)).filter(Boolean).forEach(k=>{n.completedGrammar[k.id]=n.completedGrammar[k.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=((v=st().find(k=>k.order===t.order+1))==null?void 0:v.id)||t.id;const u=Qs(),p=u.sessions[n3SessKey];if(p){const k=new Date().toISOString();p.phase="done",p.completedAt=k,p.updatedAt=k,p.currentIndex=r.length,u.activeSessionKey=n3SessKey,u.lastUpdatedAt=k}F(),Object.keys(n.completedLessons||{}).length>=37&&(i.progress.unlockedJlptLevels=i.progress.unlockedJlptLevels||[],["N3","N2"].forEach(k=>{i.progress.unlockedJlptLevels.includes(k)||i.progress.unlockedJlptLevels.push(k)}));const g=(($=(b=i.n3Meta)==null?void 0:b.rewards)==null?void 0:$.lessonCompleteXp)||75,f=((j=(S=i.n3Meta)==null?void 0:S.rewards)==null?void 0:j.lessonCompleteMoon)||9;Q(g,f,`n3_lesson:${t.id}`),ot({title:`${be().lessonComplete}: ${w(t.title)}`,message:be().lessonCompleteText,xp:g,coins:f,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),_("lesson_complete"),V(),C(),I()}function ds(e,t=null){if(!e)return;const n=F();Os(n,e)}function nr(e,t=null,n=!0){if(e&&(F().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=O(t);s.state!=="New"&&(i.progress.cards[t]=Ae(oe(s),"again"))}}function Vv(e,t=""){var l,c,u,p;const n=i.n3Grammar.find(d=>d.id===e||d.pattern===e);if(!n)return;const s=t||n.answer,r=s===n.answer,a=F();a.grammarResults[n.id]={selected:s,correct:r,checkedAt:new Date().toISOString()},r&&!a.completedGrammar[n.id]?(a.completedGrammar[n.id]=new Date().toISOString(),Q(((c=(l=i.n3Meta)==null?void 0:l.rewards)==null?void 0:c.grammarXp)||11,((p=(u=i.n3Meta)==null?void 0:u.rewards)==null?void 0:p.grammarMoon)||1,`n3_grammar:${n.id}`),i.progress.totalCorrect+=1,_("answer_correct")):r||(i.progress.totalWrong+=1,_("answer_wrong")),_e(),V(),C(),I()}function Yv(e,t="0",n=""){Fu("reading",e,t,n)}function Zv(e,t="0",n=""){Fu("listening",e,t,n)}function Fu(e,t,n="0",s=""){var $,S,j,k,x,T,B,L;const a=(e==="reading"?i.n3Reading:i.n3Listening).find(y=>y.id===t);if(!a)return;const l=Number(n||0),c=(a.questions||[])[l];if(!c)return;const u=s===c.answer,p=`${a.id}:${l}`,d=F(),g=e==="reading"?d.readingAnswers:d.listeningAnswers,f=e==="reading"?d.completedReading:d.completedListening,v=!!f[a.id];g[p]={selected:s,correct:u,checkedAt:new Date().toISOString()};const b=(a.questions||[]).every((y,N)=>{var H;return(H=g[`${a.id}:${N}`])==null?void 0:H.correct});if(u?(i.progress.totalCorrect+=1,_("answer_correct")):(i.progress.totalWrong+=1,_("answer_wrong")),b&&!v){f[a.id]=new Date().toISOString();const y=e==="reading"?((S=($=i.n3Meta)==null?void 0:$.rewards)==null?void 0:S.readingXp)||38:((k=(j=i.n3Meta)==null?void 0:j.rewards)==null?void 0:k.listeningXp)||34,N=e==="reading"?((T=(x=i.n3Meta)==null?void 0:x.rewards)==null?void 0:T.readingMoon)||4:((L=(B=i.n3Meta)==null?void 0:B.rewards)==null?void 0:L.listeningMoon)||4;Q(y,N,`n3_${e}:${a.id}`)}_e(),V(),C(),I()}function eb(e){const t=an(e);t&&(F().currentLessonId=t.id,Tt("N3",t.id,"n3_lesson_open"),qt("N3",t,"n3_lesson_open"),on(t.id))}function tb(){on("")}function nb(e=null){e&&(F().activeReviewMode=e),on("review")}function sb(){on("kanji")}function rb(){on("grammar")}function ib(){on("reading")}function ab(){on("listening")}function ob(){on("final-test")}function on(e){i.route="textbooks",i.activeTextbookLevel="N3",i.activeTextbookSubroute=e||null,F().opened=!0;const t=e?`#jlpt/n3/${encodeURIComponent(e)}`:"#jlpt/n3";zt(t),V(),C(),de(),Yt()}function lb(e="due"){const t=Date.now(),n=F(),s=qe();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const a=O(r.id);return a.state!=="New"&&(!a.dueAt||new Date(a.dueAt).getTime()<=t)})}function zu(){var r,a;const e=qe();if(!e.length)return[];const t=((r=i.n3FinalTest)==null?void 0:r.types)||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(((a=i.n3FinalTest)==null?void 0:a.questionCount)||32,Math.max(e.length,1)),s=[];for(let l=0;l<n;l+=1){const c=e[l*11%e.length]||e[l%e.length],u=t[l%t.length],p=st().find(d=>d.kanji.includes(c.kanji))||st()[0];s.push(cb(u,c,p,l))}return s.filter(Boolean)}function cb(e,t,n,s){var c,u,p;const a=rt(t)[0]||{},l=((n==null?void 0:n.sentences)||[]).find(d=>d.jp.includes(t.kanji))||((c=n==null?void 0:n.sentences)==null?void 0:c[0]);if(e==="meaning")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:P(t),options:Ve({value:t.id,label:P(t)},qe().filter(d=>d.id!==t.id).map(d=>({value:d.id,label:P(d)})),s)};if(e==="reading")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:a.word||t.kanji,answer:a.reading||t.hiragana||"",answerLabel:a.reading||t.hiragana||"",options:Ve({value:a.reading||t.hiragana||"",label:a.reading||t.hiragana||""},qe().flatMap(d=>rt(d).map(g=>({value:g.reading,label:g.reading}))).filter(d=>d.value&&d.value!==a.reading),s)};if(e==="sentence"&&l){const d=w({ru:l.ru,en:l.en});return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:d,answerLabel:d,options:Ve({value:d,label:d},st().flatMap(g=>g.sentences||[]).map(g=>({value:w({ru:g.ru,en:g.en}),label:w({ru:g.ru,en:g.en})})).filter(g=>g.value!==d),s)}}if(e==="word"){const d=a.word||t.kanji;return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Je(a),answer:d,answerLabel:d,options:Ve({value:d,label:d},qe().flatMap(g=>rt(g).map(f=>({value:f.word,label:f.word}))).filter(g=>g.value&&g.value!==d),s)}}if(e==="grammar"){const d=i.n3Grammar[s%Math.max(i.n3Grammar.length,1)];if(d)return{id:`n3-final-${s}`,type:e,grammarId:d.id,prompt:`${d.pattern}: ${w(d.question||d.explanation)}`,answer:d.answer,answerLabel:d.answer,options:Ve({value:d.answer,label:d.answer},d.options.filter(g=>g!==d.answer).map(g=>({value:g,label:g})),s)}}if(e==="mini-reading"){const d=i.n3Reading[s%Math.max(i.n3Reading.length,1)],g=(u=d==null?void 0:d.questions)==null?void 0:u[0];if(d&&g)return{id:`n3-final-${s}`,type:e,readingId:d.id,prompt:`${d.jp||w(d.title)} ${w(g.prompt)}`,answer:g.answer,answerLabel:w(((p=(g.options||[]).find(f=>f.value===g.answer))==null?void 0:p.label)||g.answer),options:(g.options||[]).map(f=>({value:f.value,label:w(f.label||f)}))}}return e==="srs"?{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:m()==="ru"?`Мини-повторение: ${t.kanji} — ${P(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${P(t)}. What do you press if you remember?`,answer:"remember",answerLabel:m()==="ru"?"Помню":"Remember",options:[{value:"again",label:m()==="ru"?"Сложно":"Hard"},{value:"remember",label:m()==="ru"?"Помню":"Remember"},{value:"skip",label:m()==="ru"?"Пропустить":"Skip"}]}:{id:`n3-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:P(t),answer:t.kanji,answerLabel:t.kanji,options:Ve({value:t.kanji,label:t.kanji},qe().filter(d=>d.id!==t.id).map(d=>({value:d.kanji,label:d.kanji})),s)}}function ub(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(F().finalTest.answers[t]=n,C(),I())}function Ju(e=!1){var n,s,r,a,l,c;if(i.finalTestBusy)return;const t=F().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){I();return}i.finalTestBusy=!0;try{const u=zu(),p=i.n3FinalTest||{},d=be(),g=pn(t,u),f=Number((s=(n=p==null?void 0:p.passingPercent)!=null?n:p==null?void 0:p.passThreshold)!=null?s:80),v=!!(p.allowIncompleteFinish||p.allowUnansweredFinish),b=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,g.missingCount&&!e&&!v){const N=g.firstMissingId?`#${ar("n3",g.firstMissingId)}`:null;i.finalTestModal={kind:"warning",level:"N3",title:m()==="ru"?"Ответь на все вопросы":"Answer all questions",message:m()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${g.missingCount}.`:`You left some questions unanswered. Missing: ${g.missingCount}.`,answered:g.answered,missingCount:g.missingCount,totalQuestions:g.totalQuestions,threshold:f,focusSelector:N,focusLabel:m()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:m()==="ru"?"Продолжить":"Continue",forceLabel:m()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:v},i.pendingFocus=N,C();return}let $=0;const S=[],j=[];u.forEach(N=>{var me;const H=String(((me=t.answers)==null?void 0:me[N.id])||"").trim();if(H===N.answer){if($+=1,N.kanji&&ds(N.kanji,N.cardId),N.grammarId){const fe=F();fe.completedGrammar[N.grammarId]=fe.completedGrammar[N.grammarId]||b}}else H||j.push(N),S.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:H}),N.kanji&&nr(N.kanji,N.cardId)});const k=u.length?Math.round($/u.length*100):0,x=!!t.completedAt,T=!!t.passed,B=Math.max(0,S.length-j.length);let L=0,y=0;if(t.answers=t.answers||{},t.score=$,t.percent=k,t.passed=k>=f,t.correctAnswers=$,t.incorrectAnswers=B,t.unansweredAnswers=j.length,t.totalQuestions=u.length,t.mistakes=S,t.mistakeQuestionIds=S.map(N=>N.id),t.completedAt=b,t.lastScore=k,t.bestScore=Math.max(Number(t.bestScore||0),k),t.passedAt=t.passed?T&&t.passedAt||b:t.passedAt||null,!x){const N=Number(((r=p==null?void 0:p.rewards)==null?void 0:r.completeXp)||220),H=Number(((a=p==null?void 0:p.rewards)==null?void 0:a.completeMoon)||40);L+=N,y+=H,Q(N,H,"n3_final_complete")}if(t.passed&&!T){const N=Number(((l=p==null?void 0:p.rewards)==null?void 0:l.passXp)||110),H=Number(((c=p==null?void 0:p.rewards)==null?void 0:c.passMoon)||18);L+=N,y+=H,Q(N,H,"n3_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=y,F(),i.pendingFocus=null,i.finalTestModal={kind:"result",level:"N3",title:t.passed?d.finalPassed:d.finalNeedsReview,message:t.passed?d.finalPassedText:d.finalNeedsReviewText,passed:t.passed,percent:k,correct:$,incorrect:B,unanswered:j.length,totalQuestions:u.length,rewardXp:L,rewardMoon:y,attempts:t.attempts,threshold:f,reviewAction:"n3-review",reviewAllAction:"n3-review",closeLabel:(m()==="ru","OK"),repeatLabel:d.repeatMistakes,reviewAllLabel:d.reviewAll},V(),C()}catch(u){console.error(u),U(m()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{i.finalTestBusy=!1,I()}}function db(){F().finalTest=ya().finalTest,i.finalTestModal=null,i.finalTestBusy=!1,C(),I()}function Uu(e){return`n3-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function pb(e){i.activeTextbookLevel="N2",i.activeJlptLesson="N2";const t=uo();t.opened||(t.opened=!0,V(),C());const n=String(i.activeTextbookSubroute||"");if(n==="final-test")return Nb();if(n==="review")return bb();if(n==="kanji")return $b();if(n==="grammar")return yb();if(n==="reading")return jb();if(n==="listening")return Sb();const s=ln(n);return s?(z().currentLessonId=s.id,Tt("N2",s.id,"n2_lesson_page"),qt("N2",s,"n2_lesson_page"),fb(e,s)):gb(e)}function gb(e){var c,u,p,d,g,f,v;const t=Lb(),n=ke(),s=it(),r=Ab(),a=i.n2Meta||{},l=w(a.principle||{});return`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N2 · Flash Kanji</p>
            <h1>${o(n.title)}</h1>
            <p>${o(w(a.description||e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${o(n.allTextbooks)}</button>
            <a class="btn ghost" href="${h(a.pdfUrl||e.pdfUrl||e.pdfFile||"")}" download="flashkanji_N2_textbook_flashkanji_space.pdf" target="_blank" rel="noopener">${o(n.pdf)}</a>
          </div>
        </div>

        <article class="n5-hero n2-hero">
          <div class="n5-hero-copy">
            <span class="pill">${o(a.kanjiCount||380)} ${o(n.kanji)} · ${o(a.grammarCount||i.n2Grammar.length||120)} ${o(n.grammar)}</span>
            <h2>${o(n.courseMap)}</h2>
            <p>${o(l)}</p>
            <div class="textbook-actions">
              <a class="btn primary" href="#jlpt/n2/${h((r==null?void 0:r.id)||"n2-lesson-1")}" data-action="n2-open-lesson" data-id="${h((r==null?void 0:r.id)||"n2-lesson-1")}">${o(n.continue)}</a>
              <button class="btn" type="button" data-action="n2-review" data-mode="due">${o(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n2-kanji">${o(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n2-grammar">${o(n.grammarN2)}</button>
              <button class="btn ghost" type="button" data-action="n2-reading">${o(n.readingN2)}</button>
              <button class="btn ghost" type="button" data-action="n2-listening">${o(n.listeningN2)}</button>
              <button class="btn ghost" type="button" data-action="n2-final">${o(n.finalTest)}</button>
            </div>
          </div>
          ${vs("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${E(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,D(t.studied,t.total))}
          ${E(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,D(t.completedLessons,s.length))}
          ${E(n.completedGrammar,`${t.completedGrammar}/${((c=i.n2Meta)==null?void 0:c.grammarCount)||i.n2Grammar.length}`,n.grammar,D(t.completedGrammar,((u=i.n2Meta)==null?void 0:u.grammarCount)||i.n2Grammar.length))}
          ${E(n.completedReading,`${t.completedReading}/${((p=i.n2Meta)==null?void 0:p.readingCount)||i.n2Reading.length}`,n.readingN2,D(t.completedReading,((d=i.n2Meta)==null?void 0:d.readingCount)||i.n2Reading.length))}
          ${E(n.completedListening,`${t.completedListening}/${((g=i.n2Meta)==null?void 0:g.listeningCount)||i.n2Listening.length}`,n.listeningN2,D(t.completedListening,((f=i.n2Meta)==null?void 0:f.listeningCount)||i.n2Listening.length))}
          ${E(n.reviews,t.reviews,n.srs,D(t.reviews,Math.max(t.total,1)))}
        </div>

        <section class="n5-panel n2-bridge">
          <div>
            <h2>${o(n.n5Bridge)}</h2>
            <p>${o(n.n5BridgeText)}</p>
          </div>
          <div class="n2-bridge-grid">
            ${(a.n5Bridge||[]).map(b=>`<span class="pill">${o(b)}</span>`).join("")}
          </div>
          <div class="textbook-actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${o(n.reviewN5Base)}</button>
          </div>
        </section>

        <section class="n5-panel">
          <div>
            <h2>${o(n.lessonsTitle)}</h2>
            <p>${o(n.lessonsDescription)}</p>
          </div>
          <div class="n5-lesson-grid">
            ${s.map(b=>mb(b)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${o(n.reviewPlan)}</h2>
            <p>${o(w((((v=i.n2Textbook)==null?void 0:v.textbook)||{}).recommendedCycle||a.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(a.reviewPlan||[]).map(b=>`<span class="pill">${o(n.day)} ${o(b.day)} · ${o(w(b.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${Xs("N2")}
      </section>
    `}function mb(e){const t=Wu(e.id),n=ke();let s=e.kanji.filter(r=>z().studiedKanji[r]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n2/${h(e.id)}" data-action="n2-open-lesson" data-id="${h(e.id)}">
        <span class="pill">${o(n.lesson)} ${e.order}</span>
        <h3>${o(w(e.title))}</h3>
        <p>${o(w(e.goal))}</p>
        <div class="n5-kanji-strip n2-kanji-strip">${e.kanji.map(r=>`<b>${o(r)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${h(`${s}/${e.kanji.length}`)}"><i style="width:${D(s,e.kanji.length)}%"></i></div>
        <small>${o(s)}/${o(e.kanji.length)} · ${o(Ib(t))}</small>
      </a>
    `}function fb(e,t){const n=ke(),s=sr(t),r=hi(t),a=Wu(t.id),l=ls("N2",t,s);let c=a==="completed";const u=`n2:${t.id}`;we.has(u)&&(c=!0);const p=c,d=r.filter(L=>{var y;return(y=go(L.id))==null?void 0:y.correct}).length,g=r.length>0&&d===r.length,f=s.filter(L=>z().studiedKanji[L.kanji]).length,v=t.kanji.length,b=f>=v,$=!c&&g&&b,S=t.kanji.filter(L=>z().difficultKanji[L]).join(" · "),j=it().find(L=>L.order===t.order+1),k=Gu(t),x=k?!!z().completedReading[k.id]:!1,T=gt("N2",t.id,"player"),B=gt("N2",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n2-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · ${o(n.lesson)} ${t.order}/38</p>
            <h1>${o(w(t.title))}</h1>
            <p>${o(w(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${o(n.backToN2)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="difficult">${o(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n2-final">${o(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${o(w(t.theme))}</span>
            <h2>${o(n.lessonChain)}</h2>
            <p>${o(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${o(n.duration)}: ${o(t.durationMinutes||30)} ${o(n.minutes)}</span>
              ${t.grammarFocus.map(L=>`<span class="pill">${o(L)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${E(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,D(l.answeredCount,t.kanji.length))}
            ${E(n.exercises,`${d}/${r.length}`,n.correct,D(d,r.length))}
          </div>
        </article>

        ${ui("N2",t,s,n,{playerId:T,answerAction:"jlpt-lesson-answer",examples:L=>at(L),sentence:L=>wb(L,t)})}

        ${vb(t)}

        ${hb(t)}

        <section class="n5-panel">
          <div>
            <h2>${o(n.sentences)}</h2>
            <p>${o(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(L=>`
              <article>
                <strong>${o(L.jp)}</strong>
                <span>${o(ne(L.reading||""))}</span>
                <small>${o(w({ru:L.ru,en:L.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${h(B)}">
          <div>
            <h2>${o(n.exercises)}</h2>
            <p>${o(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${r.map(L=>Hu(L)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${o(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${o(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${o(n.studiedKanji)}: ${s.filter(L=>z().studiedKanji[L.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${o(n.correct)}: ${d}/${r.length}</span>
              ${k?`<span class="pill">${o(n.miniReadingTitle)}: ${o(x?n.completed:n.none)}</span>`:""}
              <span class="pill">${o(n.difficult)}: ${o(S||n.none)}</span>
            </div>
            ${!c&&!$?`<p class="n5-feedback">${o(m()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n2-complete-lesson" data-id="${h(t.id)}" ${p||!$?"disabled":""}>${o(p?m()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="difficult">${o(n.repeatMistakes)}</button>
            ${j?`<a class="btn ghost" href="#jlpt/n2/${h(j.id)}" data-action="n2-open-lesson" data-id="${h(j.id)}">${o(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n2-final">${o(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function Gu(e){return e!=null&&e.miniReadingId&&i.n2Reading.find(t=>t.id===e.miniReadingId)||null}function hb(e){const t=ke(),n=Gu(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${o(t.miniReadingTitle)}</h2>
          <p>${o(t.miniReadingText)}</p>
        </div>
        ${co(n,"reading")}
      </section>
    `:""}function wb(e,t){var r;const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[гЂњ~].*/,"")))||((r=t.grammarFocus)==null?void 0:r[0])||"";return`
      <div class="n5-card-sentence">
        <strong>${o(n.jp)}</strong>
        <span>${o(ne(n.reading||""))}</span>
        <small>${o(w({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${o(ke().grammar)}: ${o(s)}</small>`:""}
      </div>
    `}function vb(e){const t=ke(),n=(e.grammarFocus||[]).map(s=>po(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n2-grammar-panel">
        <div>
          <h2>${o(t.miniGrammar)}</h2>
          <p>${o(t.miniGrammarText)}</p>
        </div>
        <div class="n2-section-grid">
          ${n.map(s=>{var r;return`
            <article class="n2-grammar-card">
              <span class="pill">${o(s.pattern)}</span>
              <h3>${o(w(s.title))}</h3>
              <p>${o(w(s.explanation))}</p>
              ${s.formula?`<code>${o(s.formula)}</code>`:""}
              ${(r=s.examples)!=null&&r[0]?`<div class="n5-card-sentence"><strong>${o(s.examples[0].jp)}</strong><span>${o(s.examples[0].reading||"")}</span><small>${o(w({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n2-grammar-complete" data-id="${h(s.id)}" data-value="${h(s.answer)}">${o(z().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `}).join("")}
        </div>
      </section>
    `:""}function Hu(e){const t=ke(),n=go(e.id),s=n?n.correct?"is-correct":"is-wrong":"",r=i.route==="review"&&Dn("N2",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${o(w(e.title))}</span>
          <h3>${o(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${h(nd(e.id))}" type="text" maxlength="3" autocomplete="off" value="${h((n==null?void 0:n.selected)||"")}" aria-label="${h(w(e.title))}" ${r?"disabled":""} />
            <button class="btn primary" type="button" data-action="n2-check-input" data-id="${h(e.id)}" ${r?"disabled":""}>${o(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n2-answer" data-id="${h(e.id)}" data-value="" ${r?"disabled":""}>${o(t.showAnswer)}</button>
          </div>
          ${Qu(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${o(w(e.title))}</span>
        <h3>${o(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const l=(n==null?void 0:n.selected)===a.value;return`<button class="btn ${n&&a.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n2-answer" data-id="${h(e.id)}" data-value="${h(a.value)}" ${r?"disabled":""}>${o(a.label)}</button>`}).join("")}
        </div>
        ${Qu(e,n)}
      </article>
    `}function Qu(e,t){if(!t)return"";const n=ke(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${o(s)}</p>`}function bb(e){var r;const t=ke(),n=z().activeReviewMode||"due",s=Gb(n);return`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · Повторение</p>
            <h1>${o(t.reviewTitle)}</h1>
            <p>${o(t.reviewDescription)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${o(t.backToN2)}</button>
            <button class="btn ghost" type="button" data-action="n2-final">${o(t.finalTest)}</button>
          </div>
        </div>
        <div class="jlpt-filter-bar" role="tablist" aria-label="N2 review modes">
          ${(((r=i.n2Exercises)==null?void 0:r.reviewModes)||[]).map(a=>`
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n2-review" data-mode="${h(a.id)}">${o(w(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,l)=>kb(a,l)).join("")||`<article class="empty-state"><h3>${o(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function kb(e,t){var r,a;const n=ke(),s=O(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${o(s.state)} · ${o(Hn(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${o(e.kanji)}</div>
        <h3>${o(P(e))}</h3>
        <p>${o(((r=at(e)[0])==null?void 0:r.word)||e.hiragana||"")} · ${o(((a=at(e)[0])==null?void 0:a.reading)||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n2-srs" data-id="${h(e.id)}" data-rating="easy">${o(n.know)}</button>
          <button class="btn warning" type="button" data-action="n2-srs" data-id="${h(e.id)}" data-rating="again">${o(n.hard)}</button>
        </div>
      </article>
    `}function $b(e){const t=ke(),n=Ye();return`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · 380</p>
            <h1>${o(t.kanjiListTitle)}</h1>
            <p>${o(t.kanjiListText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${o(t.backToN2)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="all">${o(t.reviewAll)}</button>
          </div>
        </div>
        <div class="n5-kanji-grid n2-kanji-catalog">
          ${n.map((s,r)=>{var a,l;return`
            <article class="n5-kanji-card">
              <div class="n5-kanji-topline"><span class="pill">${r+1}/380</span><span class="pill">${o(O(s.id).state)}</span></div>
              <div class="n5-big-kanji">${o(s.kanji)}</div>
              <h3>${o(P(s))}</h3>
              <p>${o(((a=at(s)[0])==null?void 0:a.word)||"")} · ${o(((l=at(s)[0])==null?void 0:l.reading)||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n2-srs" data-id="${h(s.id)}" data-rating="good">${o(t.addToSrs)}</button>
              </div>
            </article>
          `}).join("")}
        </div>
      </section>
    `}function yb(e){const t=ke();return`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · Grammar</p>
            <h1>${o(t.grammarTitle)}</h1>
            <p>${o(t.grammarText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${o(t.backToN2)}</button>
            <button class="btn ghost" type="button" data-action="n2-reading">${o(t.readingN2)}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${E(t.completedGrammar,`${Object.keys(z().completedGrammar||{}).length}/${i.n2Grammar.length}`,t.grammar,D(Object.keys(z().completedGrammar||{}).length,i.n2Grammar.length))}
          ${E(t.questions,i.n2Grammar.length,t.grammar,100)}
        </div>
        <div class="n2-section-grid">
          ${i.n2Grammar.map(n=>{var r;const s=(r=z().grammarResults)==null?void 0:r[n.id];return`
              <article class="n2-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${o(n.order)} · ${o(n.pattern)}</span>
                <h3>${o(w(n.title))}</h3>
                <p>${o(w(n.explanation))}</p>
                ${n.formula?`<code>${o(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${o(a.jp)}</strong><span>${o(ne(a.reading||""))}</span><small>${o(w({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${o(w(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(n.options.length?n.options:[n.answer]).map(a=>`
                    <button class="btn ${(s==null?void 0:s.selected)===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n2-grammar-complete" data-id="${h(n.id)}" data-value="${h(a)}">${o(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${o(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${n.answer}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function jb(e){const t=ke(),n=Oi("N2","n2_reading_page"),s=wr("N2");return(n||s)&&C(),`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · Reading</p>
            <h1>${o(t.readingTitle)}</h1>
            <p>${o(t.readingText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${o(t.backToN2)}</button>
            <button class="btn ghost" type="button" data-action="n2-listening">${o(t.listeningN2)}</button>
          </div>
        </div>
        <div class="n2-section-grid">
          ${i.n2Reading.map(r=>co(r,"reading")).join("")}
        </div>
      </section>
    `}function Sb(e){const t=ke();return`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · Listening</p>
            <h1>${o(t.listeningTitle)}</h1>
            <p>${o(t.listeningText)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${o(t.backToN2)}</button>
            <button class="btn ghost" type="button" data-action="n2-final">${o(t.finalTest)}</button>
          </div>
        </div>
        <div class="n2-section-grid">
          ${i.n2Listening.map(n=>co(n,"listening")).join("")}
        </div>
      </section>
    `}function co(e,t){const n=ke(),s=t==="reading"?z().completedReading[e.id]:z().completedListening[e.id],r=t==="reading"?z().readingAnswers:z().listeningAnswers,a=t==="reading"?"n2-reading-complete":"n2-listening-complete";return`
      <article class="n2-reading-card ${s?"is-correct":""}">
        <span class="pill">${o(w(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${o(l)}</strong></article>`).join("")}</div>`:`<p class="n2-jp-text">${o(e.jp||"")}</p>`}
        ${e.ru?`<p>${o(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const u=`${e.id}:${c}`,p=r==null?void 0:r[u],d=Array.isArray(l.options)?l.options:[];return`
            <div class="n2-question-block">
              <h3>${o(w(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${d.map(g=>`<button class="btn ${(p==null?void 0:p.selected)===g.value?p.correct?"success":"warning":"ghost"}" type="button" data-action="${h(a)}" data-id="${h(e.id)}" data-question="${h(c)}" data-value="${h(g.value)}">${o(w(g.label||g))}</button>`).join("")}
              </div>
              ${p?`<p class="n5-feedback">${o(p.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function Nb(e){const t=ke(),n=i.n2FinalTest||{},s=ed(),r=z().finalTest,a=pn(r,s),l=a.answered,c=a.ready;if(r&&typeof r.score=="number"&&r.score>0&&r.totalQuestions>0){const d=Math.round(r.score/r.totalQuestions*100);(!r.percent||r.percent===0||r.percent!==d)&&(r.percent=d),r.completedAt||(r.completedAt=new Date().toISOString()),C()}const u=!!r.completedAt||typeof r.percent=="number"&&r.percent>0||typeof r.score=="number"&&r.score>0,p=typeof r.percent=="number"&&r.percent>0?r.percent:Number(r.score||0)&&r.totalQuestions?Math.round(r.score/r.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n2-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · Final</p>
            <h1>${o(w(n.title||{}))}</h1>
            <p>${o(w(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${o(t.backToN2)}</button>
            <button class="btn" type="button" data-action="n2-final-reset">${o(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${E(t.questions,`${l}/${s.length}`,t.finalTest,D(l,s.length))}
          ${E(t.score,u||p>0?`${p}%`:"—",`${n.passingPercent||80}%`,u||p>0?p:0)}
          ${E(t.mistakes,u?(r.mistakes||[]).length:0,t.difficult,u?D((r.mistakes||[]).length,s.length):0)}
        </div>

        ${u?`
          <section class="n5-result-panel ${r.passed?"is-complete":""}">
            <div>
              <h2>${o(r.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${o(r.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n2-review" data-mode="difficult">${o(t.repeatMistakes)}</button>
            ${Kt("N2","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((d,g)=>Cb(d,g)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${o(m()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n2-final-submit" ${i.finalTestBusy?"disabled":""}>${o(t.submitFinal)}</button>
          ${Kt("N2","btn ghost")}
          <button class="btn ghost" type="button" data-action="n2-review" data-mode="all">${o(t.reviewAll)}</button>
        </div>
      </section>
    `}function Cb(e,t){var r;const n=(r=z().finalTest.answers)==null?void 0:r[e.id],s=!!z().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${o(e.type)}</span>
        <h3>${o(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const l=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":l?"primary":"ghost"}" type="button" data-action="n2-final-answer" data-id="${h(e.id)}" data-value="${h(a.value)}">${o(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${o(ke().wrongAnswer)}: ${o(e.answerLabel)}</p>`:""}
      </article>
    `}function ke(){return m()==="ru"?{title:"JLPT N2",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"�?нтерактивный учебник N2: абзацы, аргументы, выводы и позиция автора",continue:"Продолжить",review:"Повторять N2",openKanji:"Открыть список кандзи",grammarN2:"Грамматика N2",readingN2:"Чтение N2",listeningN2:"Аудирование N2",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"38 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, абзац, авторскую позицию, вывод, письмо и повторение.",reviewPlan:"План повторения на 90 дней",day:"день",lesson:"Урок",backToN2:"К N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"Если база N5, N4 или N3 дырявая, N2 будет ощущаться как стена. Перед стартом проверь частицы, связки, условные формы, N3-грамматику и навык видеть причину, уступку и вывод в абзаце.",reviewN5Base:"Повторить N5/N4/N3 перед N2",lessonChain:"Кандзи -> слово -> грамматика -> абзац -> позиция автора -> вывод -> повторение",lessonChainText:"N2 больше не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, о чём текст, где причина, где уступка, что противопоставлено и к какому выводу ведёт короткий N2-абзац.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N2-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N2.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"380 кандзи N2",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"120 грамматических конструкций N2",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе и живом контексте.",readingTitle:"Тексты для чтения N2",readingText:"Короткие тексты и mini-readings уроков связывают кандзи, слова, грамматику, авторскую позицию и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N2",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N2",finalPassed:"N2 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N2",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N2 textbook: paragraphs, arguments, conclusions, and author stance",continue:"Continue",review:"Review N2",openKanji:"Open kanji list",grammarN2:"N2 grammar",readingN2:"N2 reading",listeningN2:"N2 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"38 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, paragraph logic, author stance, writing, and SRS.",reviewPlan:"90-day review plan",day:"day",lesson:"Lesson",backToN2:"To N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"If the N5, N4, or N3 base is shaky, N2 feels like a wall. Review particles, support grammar, N3 connectors, and the habit of spotting cause, concession, and conclusion in a paragraph.",reviewN5Base:"Review N5/N4/N3 before N2",lessonChain:"Kanji -> word -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N2 is not a bare list: each sign gets a word, a formal link, a mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N2 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Шаг",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N2 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N2 review",reviewDescription:"Review due cards, difficult kanji, or the full N2 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"380 N2 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"120 N2 grammar constructions",grammarText:"Compact cards with function, formula, example, and a comprehension check for practical written Japanese.",readingTitle:"N2 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N2 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Ошибки",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N2",finalPassed:"N2 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function uo(){i.progress.n2Course=ec(ja(),i.progress.n2Course||{});const e=it();!ln(i.progress.n2Course.currentLessonId)&&e[0]&&(i.progress.n2Course.currentLessonId=e[0].id);const n=e.find(s=>!i.progress.n2Course.completedLessons[s.id]);return!i.progress.n2Course.currentLessonId&&n&&(i.progress.n2Course.currentLessonId=n.id),i.progress.n2Course}function z(){return uo()}function it(){var e;return((e=i.n2Textbook)==null?void 0:e.items)||[]}function ln(e){const t=String(e||"");return t&&it().find(n=>n.id===t||n.id===`n2-${t}`||n.id.endsWith(`-${t}`))||null}function Ab(){return ln(z().currentLessonId)||it().find(e=>!z().completedLessons[e.id])||it()[0]||null}function sr(e){return((e==null?void 0:e.kanji)||[]).map(t=>Xu(t)).filter(Boolean)}function Ye(){const e=new Set;return(i.n2KanjiCatalog||[]).map(t=>Xu(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Xu(e){var r;const t=String(e||""),n=((r=i.n2KanjiCatalog)==null?void 0:r.find(a=>a.kanji===t))||null,s=i.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N2")||(n?i.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Jr(s,n):s||(n?Jr({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[]},n):null)}function po(e){const t=String(e||"");return i.n2Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function at(e){return di(e,e.examples)}function Lb(){var r;const e=Ye(),t=z(),n=new Set(Object.keys(t.studiedKanji||{}));e.forEach(a=>{O(a.id).state!=="New"&&n.add(a.kanji)});const s={...t.completedLessons||{}};for(const a of we)if(a.startsWith("n2:")){const l=a.slice(3);s[l]=s[l]||new Date().toISOString()}return{total:((r=i.n2Meta)==null?void 0:r.kanjiCount)||e.length||380,studied:n.size,completedLessons:Object.keys(s).length,completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((a,l)=>a+Number(O(l.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Wu(e){var r;const t=z(),n=`n2:${e}`;if(we.has(n)||t.completedLessons[e])return"completed";const s=ln(e);return(r=s==null?void 0:s.kanji)!=null&&r.some(a=>t.studiedKanji[a]||t.difficultKanji[a])?"started":"new"}function Ib(e){return e==="completed"?m()==="ru"?"завершён":"completed":e==="started"?m()==="ru"?"начат":"started":m()==="ru"?"не начат":"new"}function hi(e){var j,k,x,T,B,L;const t=sr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((((j=i.n2Exercises)==null?void 0:j.types)||[]).map(y=>[y.type,y.title])),r=Object.fromEntries((((k=i.n2Exercises)==null?void 0:k.types)||[]).map(y=>[y.type,y])),a=y=>{var N,H,me,fe;return r[y]||{rewardXp:((H=(N=i.n2Meta)==null?void 0:N.rewards)==null?void 0:H.exerciseXp)||11,rewardMoon:((fe=(me=i.n2Meta)==null?void 0:me.rewards)==null?void 0:fe.exerciseMoon)||1}},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:P(c),kanji:c.kanji,cardId:c.id,options:Ze({value:c.id,label:P(c)},t.slice(1).map(y=>({value:y.id,label:P(y)})),1),...a("meaning")});const u=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:P(u),answer:u.kanji,answerLabel:u.kanji,kanji:u.kanji,cardId:u.id,options:Ze({value:u.kanji,label:u.kanji},t.filter(y=>y.id!==u.id).map(y=>({value:y.kanji,label:y.kanji})),2),...a("kanji")});const p=t[2]||t[0],d=at(p)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:d.word||p.kanji,answer:d.reading||p.hiragana||"",answerLabel:d.reading||p.hiragana||"",kanji:p.kanji,cardId:p.id,options:Ze({value:d.reading||p.hiragana||"",label:d.reading||p.hiragana||""},t.flatMap(y=>at(y).map(N=>({value:N.reading,label:N.reading}))).filter(y=>y.value&&y.value!==d.reading),3),...a("reading")});const g=n[0];g&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:g.jp,answer:w({ru:g.ru,en:g.en}),answerLabel:w({ru:g.ru,en:g.en}),kanji:t[0].kanji,cardId:t[0].id,options:Ze({value:w({ru:g.ru,en:g.en}),label:w({ru:g.ru,en:g.en})},n.slice(1).map(y=>({value:w({ru:y.ru,en:y.en}),label:w({ru:y.ru,en:y.en})})),1),...a("sentence")});const f=t[3]||t[0],v=at(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:m()==="ru"?`Какое слово подходит к значению «${Je(v)}В»?`:`Which word matches "${Je(v)}"?`,answer:v.word||f.kanji,answerLabel:v.word||f.kanji,kanji:f.kanji,cardId:f.id,options:Ze({value:v.word||f.kanji,label:v.word||f.kanji},t.flatMap(y=>at(y).map(N=>({value:N.word,label:N.word}))).filter(y=>y.value&&y.value!==v.word),2),...a("missing-word")});const b=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:m()==="ru"?`Введи кандзи для значения: ${P(b)}`:`Type the kanji for: ${P(b)}`,answer:b.kanji,answerLabel:b.kanji,kanji:b.kanji,cardId:b.id,options:[],...a("active-recall")});const $=po((x=e.grammarFocus)==null?void 0:x[0]);$&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:w($.question||$.explanation),answer:$.answer,answerLabel:$.answer,kanji:t[0].kanji,cardId:t[0].id,grammarId:$.id,options:Ze({value:$.answer,label:$.answer},$.options.filter(y=>y!==$.answer).map(y=>({value:y,label:y})),1),...a("grammar-link")});const S=n[1]||n[0];return S&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:S.jp,answer:w({ru:S.ru,en:S.en}),answerLabel:w({ru:S.ru,en:S.en}),kanji:((T=t[1])==null?void 0:T.kanji)||t[0].kanji,cardId:((B=t[1])==null?void 0:B.id)||t[0].id,options:Ze({value:w({ru:S.ru,en:S.en}),label:w({ru:S.ru,en:S.en})},n.filter(y=>y.jp!==S.jp).map(y=>({value:w({ru:y.ru,en:y.en}),label:w({ru:y.ru,en:y.en})})),2),...a("mini-reading")}),l.slice(0,((L=i.n2Exercises)==null?void 0:L.lessonQuestionCount)||8).map(y=>({...y,level:"N2",lessonId:e.id}))}function Ze(e,t,n=0){const s=new Set([String(e.value)]),r=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||r.length>=4||(s.add(c),r.push(l))}),Ye().forEach(l=>{if(r.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),r.push(c))}),r.length<=1)return r;const a=n%r.length;return[...r.slice(a),...r.slice(0,a)]}function qu(e){for(const t of it()){const n=hi(t).find(s=>s.id===e);if(n)return n}return null}function go(e){return pi("N2",z(),e)}function Tb(e){const t=qu(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,r=s===t.answer;Vu(t,s,r)}function Rb(e){const t=qu(e);if(!t)return;const n=document.getElementById(nd(t.id)),s=n?String(n.value||"").trim():"";Vu(t,s,s===t.answer)}function Vu(e,t,n){var r,a,l,c;const s=z();gi("N2",s,e,t,n,{rewardXp:Number(e.rewardXp||((a=(r=i.n2Meta)==null?void 0:r.rewards)==null?void 0:a.exerciseXp)||11),rewardMoon:Number(e.rewardMoon||((c=(l=i.n2Meta)==null?void 0:l.rewards)==null?void 0:c.exerciseMoon)||1),rewardKey:`n2_exercise:${e.id}`,markStudied:()=>ps(e.kanji,e.cardId),markDifficult:()=>rr(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:u=>{s.wordMistakes[u]=Number(s.wordMistakes[u]||0)+1}})}function Yu(e,t,n="review"){var p,d,g,f,v,b,$,S;const s=ae(e)||Ye().find(j=>String(j.id)===String(e));if(!s)return;const r=n==="lesson"&&t==="again",a=r?"good":t,l=r?"hard":t,c=oe(O(s.id)),u=Ae(c,a,l);i.progress.cards[s.id]=u,gn(c,u,l),_e(),ps(s.kanji,s.id),z().srsKanji[s.kanji]=new Date().toISOString(),r?(rr(s.kanji,s.id,!1),i.progress.totalCorrect+=1,Q(((d=(p=i.n2Meta)==null?void 0:p.rewards)==null?void 0:d.hardXp)||2,1,`n2_srs_lesson_hard:${s.id}`),_("answer_correct")):Fn(t)?(rr(s.kanji,s.id),i.progress.totalWrong+=1,Q(((f=(g=i.n2Meta)==null?void 0:g.rewards)==null?void 0:f.hardXp)||2,0,`n2_srs_hard:${s.id}`),_("answer_wrong")):(i.progress.totalCorrect+=1,Q(t==="easy"?((b=(v=i.n2Meta)==null?void 0:v.rewards)==null?void 0:b.knowXp)||9:((S=($=i.n2Meta)==null?void 0:$.rewards)==null?void 0:S.addToSrsXp)||7,1,`n2_srs:${s.id}`),_("answer_correct")),V(),C(),Qe()}function xb(e){var s;const t=ae(e)||Ye().find(r=>String(r.id)===String(e));if(!t)return;const n=z();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),i.progress.writingPractice.completed=Number(i.progress.writingPractice.completed||0)+1,i.progress.writingPractice.cards[t.id]={completed:Number(((s=i.progress.writingPractice.cards[t.id])==null?void 0:s.completed)||0)+1,lastAt:new Date().toISOString()},ps(t.kanji,t.id),Q(9,1,`n2_writing:${t.id}`)),V(),C(),I()}function _b(e){var v,b,$,S,j;const t=ln(e);if(!t)return;const n=z(),s=`n2:${t.id}`;if(we.has(s)||n.completedLessons[t.id]){I();return}const r=sr(t);if(r.filter(k=>n.studiedKanji[k.kanji]).length<t.kanji.length){const k=m()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof U=="function"&&U(k);return}const l=hi(t);if(!(l.length>0&&l.every(k=>{var x;return(x=go(k.id))==null?void 0:x.correct}))){const k=m()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof U=="function"&&U(k);return}we.add(s),sr(t).forEach(k=>{ps(k.kanji,k.id),n.srsKanji[k.kanji]=n.srsKanji[k.kanji]||new Date().toISOString();const x=O(k.id);x.state==="New"&&(i.progress.cards[k.id]=Ae(oe(x),"good"))}),(t.grammarFocus||[]).map(k=>po(k)).filter(Boolean).forEach(k=>{n.completedGrammar[k.id]=n.completedGrammar[k.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=((v=it().find(k=>k.order===t.order+1))==null?void 0:v.id)||t.id;const u=Qs(),p=u.sessions[n2SessKey];if(p){const k=new Date().toISOString();p.phase="done",p.completedAt=k,p.updatedAt=k,p.currentIndex=r.length,u.activeSessionKey=n2SessKey,u.lastUpdatedAt=k}z(),Object.keys(n.completedLessons||{}).length>=38&&(i.progress.unlockedJlptLevels=i.progress.unlockedJlptLevels||[],["N2","N1"].forEach(k=>{i.progress.unlockedJlptLevels.includes(k)||i.progress.unlockedJlptLevels.push(k)}));const g=(($=(b=i.n2Meta)==null?void 0:b.rewards)==null?void 0:$.lessonCompleteXp)||85,f=((j=(S=i.n2Meta)==null?void 0:S.rewards)==null?void 0:j.lessonCompleteMoon)||10;Q(g,f,`n2_lesson:${t.id}`),ot({title:`${ke().lessonComplete}: ${w(t.title)}`,message:ke().lessonCompleteText,xp:g,coins:f,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),_("lesson_complete"),V(),C(),I()}function ps(e,t=null){if(!e)return;const n=z();Os(n,e)}function rr(e,t=null,n=!0){if(e&&(z().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=O(t);s.state!=="New"&&(i.progress.cards[t]=Ae(oe(s),"again"))}}function Mb(e,t=""){var l,c,u,p;const n=i.n2Grammar.find(d=>d.id===e||d.pattern===e);if(!n)return;const s=t||n.answer,r=s===n.answer,a=z();a.grammarResults[n.id]={selected:s,correct:r,checkedAt:new Date().toISOString()},r&&!a.completedGrammar[n.id]?(a.completedGrammar[n.id]=new Date().toISOString(),Q(((c=(l=i.n2Meta)==null?void 0:l.rewards)==null?void 0:c.grammarXp)||12,((p=(u=i.n2Meta)==null?void 0:u.rewards)==null?void 0:p.grammarMoon)||1,`n2_grammar:${n.id}`),i.progress.totalCorrect+=1,_("answer_correct")):r||(i.progress.totalWrong+=1,_("answer_wrong")),_e(),V(),C(),I()}function Pb(e,t="0",n=""){Zu("reading",e,t,n)}function Eb(e,t="0",n=""){Zu("listening",e,t,n)}function Zu(e,t,n="0",s=""){var $,S,j,k,x,T,B,L;const a=(e==="reading"?i.n2Reading:i.n2Listening).find(y=>y.id===t);if(!a)return;const l=Number(n||0),c=(a.questions||[])[l];if(!c)return;const u=s===c.answer,p=`${a.id}:${l}`,d=z(),g=e==="reading"?d.readingAnswers:d.listeningAnswers,f=e==="reading"?d.completedReading:d.completedListening,v=!!f[a.id];g[p]={selected:s,correct:u,checkedAt:new Date().toISOString()};const b=(a.questions||[]).every((y,N)=>{var H;return(H=g[`${a.id}:${N}`])==null?void 0:H.correct});if(u?(i.progress.totalCorrect+=1,_("answer_correct")):(i.progress.totalWrong+=1,_("answer_wrong")),b&&!v){f[a.id]=new Date().toISOString();const y=e==="reading"?((S=($=i.n2Meta)==null?void 0:$.rewards)==null?void 0:S.readingXp)||42:((k=(j=i.n2Meta)==null?void 0:j.rewards)==null?void 0:k.listeningXp)||38,N=e==="reading"?((T=(x=i.n2Meta)==null?void 0:x.rewards)==null?void 0:T.readingMoon)||4:((L=(B=i.n2Meta)==null?void 0:B.rewards)==null?void 0:L.listeningMoon)||4;Q(y,N,`n2_${e}:${a.id}`)}_e(),V(),C(),I()}function Db(e){const t=ln(e);t&&(z().currentLessonId=t.id,Tt("N2",t.id,"n2_lesson_open"),qt("N2",t,"n2_lesson_open"),cn(t.id))}function Ob(){cn("")}function Kb(e=null){e&&(z().activeReviewMode=e),cn("review")}function Bb(){cn("kanji")}function Fb(){cn("grammar")}function zb(){cn("reading")}function Jb(){cn("listening")}function Ub(){cn("final-test")}function cn(e){i.route="textbooks",i.activeTextbookLevel="N2",i.activeTextbookSubroute=e||null,z().opened=!0;const t=e?`#jlpt/n2/${encodeURIComponent(e)}`:"#jlpt/n2";zt(t),V(),C(),de(),Yt()}function Gb(e="due"){const t=Date.now(),n=z(),s=Ye();return e==="difficult"?s.filter(r=>n.difficultKanji[r.kanji]):e==="all"?s:s.filter(r=>{const a=O(r.id);return a.state!=="New"&&(!a.dueAt||new Date(a.dueAt).getTime()<=t)})}function ed(){var r,a;const e=Ye();if(!e.length)return[];const t=((r=i.n2FinalTest)==null?void 0:r.types)||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(((a=i.n2FinalTest)==null?void 0:a.questionCount)||32,Math.max(e.length,1)),s=[];for(let l=0;l<n;l+=1){const c=e[l*11%e.length]||e[l%e.length],u=t[l%t.length],p=it().find(d=>d.kanji.includes(c.kanji))||it()[0];s.push(Hb(u,c,p,l))}return s.filter(Boolean)}function Hb(e,t,n,s){var c,u,p;const a=at(t)[0]||{},l=((n==null?void 0:n.sentences)||[]).find(d=>d.jp.includes(t.kanji))||((c=n==null?void 0:n.sentences)==null?void 0:c[0]);if(e==="meaning")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:P(t),options:Ze({value:t.id,label:P(t)},Ye().filter(d=>d.id!==t.id).map(d=>({value:d.id,label:P(d)})),s)};if(e==="reading")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:a.word||t.kanji,answer:a.reading||t.hiragana||"",answerLabel:a.reading||t.hiragana||"",options:Ze({value:a.reading||t.hiragana||"",label:a.reading||t.hiragana||""},Ye().flatMap(d=>at(d).map(g=>({value:g.reading,label:g.reading}))).filter(d=>d.value&&d.value!==a.reading),s)};if(e==="sentence"&&l){const d=w({ru:l.ru,en:l.en});return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:d,answerLabel:d,options:Ze({value:d,label:d},it().flatMap(g=>g.sentences||[]).map(g=>({value:w({ru:g.ru,en:g.en}),label:w({ru:g.ru,en:g.en})})).filter(g=>g.value!==d),s)}}if(e==="word"){const d=a.word||t.kanji;return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:Je(a),answer:d,answerLabel:d,options:Ze({value:d,label:d},Ye().flatMap(g=>at(g).map(f=>({value:f.word,label:f.word}))).filter(g=>g.value&&g.value!==d),s)}}if(e==="grammar"){const d=i.n2Grammar[s%Math.max(i.n2Grammar.length,1)];if(d)return{id:`n2-final-${s}`,type:e,grammarId:d.id,prompt:`${d.pattern}: ${w(d.question||d.explanation)}`,answer:d.answer,answerLabel:d.answer,options:Ze({value:d.answer,label:d.answer},d.options.filter(g=>g!==d.answer).map(g=>({value:g,label:g})),s)}}if(e==="mini-reading"){const d=i.n2Reading[s%Math.max(i.n2Reading.length,1)],g=(u=d==null?void 0:d.questions)==null?void 0:u[0];if(d&&g)return{id:`n2-final-${s}`,type:e,readingId:d.id,prompt:`${d.jp||w(d.title)} ${w(g.prompt)}`,answer:g.answer,answerLabel:w(((p=(g.options||[]).find(f=>f.value===g.answer))==null?void 0:p.label)||g.answer),options:(g.options||[]).map(f=>({value:f.value,label:w(f.label||f)}))}}return e==="srs"?{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:m()==="ru"?`Мини-повторение: ${t.kanji} — ${P(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${P(t)}. What do you press if you remember?`,answer:"remember",answerLabel:m()==="ru"?"Помню":"Remember",options:[{value:"again",label:m()==="ru"?"Сложно":"Hard"},{value:"remember",label:m()==="ru"?"Помню":"Remember"},{value:"skip",label:m()==="ru"?"Пропустить":"Skip"}]}:{id:`n2-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:P(t),answer:t.kanji,answerLabel:t.kanji,options:Ze({value:t.kanji,label:t.kanji},Ye().filter(d=>d.id!==t.id).map(d=>({value:d.kanji,label:d.kanji})),s)}}function Qb(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(z().finalTest.answers[t]=n,C(),I())}function td(e=!1){var n,s,r,a,l,c;if(i.finalTestBusy)return;const t=z().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){I();return}i.finalTestBusy=!0;try{const u=ed(),p=i.n2FinalTest||{},d=ke(),g=pn(t,u),f=Number((s=(n=p==null?void 0:p.passingPercent)!=null?n:p==null?void 0:p.passThreshold)!=null?s:80),v=!!(p.allowIncompleteFinish||p.allowUnansweredFinish),b=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,g.missingCount&&!e&&!v){const N=g.firstMissingId?`#${ar("n2",g.firstMissingId)}`:null;i.finalTestModal={kind:"warning",level:"N2",title:m()==="ru"?"Ответь на все вопросы":"Answer all questions",message:m()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${g.missingCount}.`:`You left some questions unanswered. Missing: ${g.missingCount}.`,answered:g.answered,missingCount:g.missingCount,totalQuestions:g.totalQuestions,threshold:f,focusSelector:N,focusLabel:m()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:m()==="ru"?"Продолжить":"Continue",forceLabel:m()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:v},i.pendingFocus=N,C();return}let $=0;const S=[],j=[];u.forEach(N=>{var me;const H=String(((me=t.answers)==null?void 0:me[N.id])||"").trim();if(H===N.answer){if($+=1,N.kanji&&ps(N.kanji,N.cardId),N.grammarId){const fe=z();fe.completedGrammar[N.grammarId]=fe.completedGrammar[N.grammarId]||b}}else H||j.push(N),S.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:H}),N.kanji&&rr(N.kanji,N.cardId)});const k=u.length?Math.round($/u.length*100):0,x=!!t.completedAt,T=!!t.passed,B=Math.max(0,S.length-j.length);let L=0,y=0;if(t.answers=t.answers||{},t.score=$,t.percent=k,t.passed=k>=f,t.correctAnswers=$,t.incorrectAnswers=B,t.unansweredAnswers=j.length,t.totalQuestions=u.length,t.mistakes=S,t.mistakeQuestionIds=S.map(N=>N.id),t.completedAt=b,t.lastScore=k,t.bestScore=Math.max(Number(t.bestScore||0),k),t.passedAt=t.passed?T&&t.passedAt||b:t.passedAt||null,!x){const N=Number(((r=p==null?void 0:p.rewards)==null?void 0:r.completeXp)||220),H=Number(((a=p==null?void 0:p.rewards)==null?void 0:a.completeMoon)||40);L+=N,y+=H,Q(N,H,"n2_final_complete")}if(t.passed&&!T){const N=Number(((l=p==null?void 0:p.rewards)==null?void 0:l.passXp)||110),H=Number(((c=p==null?void 0:p.rewards)==null?void 0:c.passMoon)||18);L+=N,y+=H,Q(N,H,"n2_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=y,z(),i.pendingFocus=null,i.finalTestModal={kind:"result",level:"N2",title:t.passed?d.finalPassed:d.finalNeedsReview,message:t.passed?d.finalPassedText:d.finalNeedsReviewText,passed:t.passed,percent:k,correct:$,incorrect:B,unanswered:j.length,totalQuestions:u.length,rewardXp:L,rewardMoon:y,attempts:t.attempts,threshold:f,reviewAction:"n2-review",reviewAllAction:"n2-review",closeLabel:(m()==="ru","OK"),repeatLabel:d.repeatMistakes,reviewAllLabel:d.reviewAll},V(),C()}catch(u){console.error(u),U(m()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{i.finalTestBusy=!1,I()}}function Xb(){z().finalTest=ja().finalTest,i.finalTestModal=null,i.finalTestBusy=!1,C(),I()}function nd(e){return`n2-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function sd(e){const t=ys(e.jlpt);if(!t)return"";const n={...qo(),...Wo()};return`
      <div class="jlpt-practice-grid">
        ${Wb(t,n)}
        ${qb(t,n)}
        ${Vb(t,n)}
        ${Zb(t,n)}
      </div>
    `}function Wb(e,t){return e.apps.length?`
      <article class="jlpt-practice-card">
        <h3>${o(t.apps)}</h3>
        <div class="jlpt-app-grid">
          ${e.apps.map(n=>`
            <div class="jlpt-app-chip">
              <strong>${o(n.name)}</strong>
              <span>${o(w(n.context))}</span>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function qb(e,t){var r,a;const n=Array.isArray((r=e.kana)==null?void 0:r.hiragana)?e.kana.hiragana:[],s=Array.isArray((a=e.kana)==null?void 0:a.katakana)?e.kana.katakana:[];return!n.length&&!s.length?"":`
      <article class="jlpt-practice-card">
        <h3>${o(t.kana)}</h3>
        <div class="kana-columns">
          ${rd(t.hiragana,n)}
          ${rd(t.katakana,s)}
        </div>
      </article>
    `}function rd(e,t){return t.length?`
      <div class="kana-column">
        <strong>${o(e)}</strong>
        ${t.map(n=>`
          <span class="kana-chip">
            <b>${o(n.kana)}</b>
            <small>${o(n.romaji)} · ${o(w(n.note))}</small>
          </span>
        `).join("")}
      </div>
    `:""}function Vb(e,t){return e.kanjiFocus.length?`
      <article class="jlpt-practice-card jlpt-kanji-focus">
        <h3>${o(t.kanjiFocus)}</h3>
        <div class="jlpt-focus-grid">
          ${e.kanjiFocus.map(n=>`
            <div class="jlpt-focus-item">
              <span class="kanji-mini">${o(n.kanji)}</span>
              <div>
                <strong>${Yb(n)}</strong>
                <small>${o(n.romaji)} · ${o(w(n.meaning))}</small>
                <p>${o(w(n.appUse))}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function Yb(e){const t=Array.isArray(e.furigana)?e.furigana:[];return t.length?t.map(n=>n.rt?`<ruby>${o(n.text)}<rt>${o(n.rt)}</rt></ruby>`:o(n.text)).join(""):o(e.word||e.kanji||"")}function Zb(e,t){const n=js(e);if(!n)return"";const s=Gn(),r=s.selected[n.id]||[],a=!!s.checked[n.id],l=s.results[n.id]||null,c=r.map(d=>n.tiles[d]).filter(Boolean),u=a&&(l==null?void 0:l.correct),p=a&&l?l.wrongIndexes||[]:[];return`
      <article class="jlpt-practice-card jlpt-drill-card">
        <div class="section-head compact-head">
          <div>
            <h3>${o(t.sentenceDrill)}</h3>
            <p>${o(w(n.translation))}</p>
          </div>
          <span class="pill">${o(e.jlpt)}</span>
        </div>
        <div class="jlpt-sentence-line">${ek(n,c,p)}</div>
        <p class="label">${o(ne(n.reading))}</p>
        <div class="sentence-tiles jlpt-tiles">
          ${n.tiles.map((d,g)=>{const f=r.includes(g);return`
              <button class="sentence-tile ${f?"is-used":""}" type="button" data-action="insert-jlpt-tile" data-index="${g}" ${f||u?"disabled":""}>
                <small>${o(d.reading)}</small>
                <strong>${o(d.kanji)}</strong>
              </button>
            `}).join("")}
        </div>
        <p class="sentence-result ${a?u?"is-success":"is-error":""}">
          ${o((l==null?void 0:l.message)||t.fillBlanks)}
        </p>
        <div class="actions">
          <button class="btn primary" type="button" data-action="check-jlpt-practice" ${u?"disabled":""}>${o(t.check)}</button>
          <button class="btn" type="button" data-action="undo-jlpt-tile" ${!r.length||u?"disabled":""}>${o(t.undo)}</button>
          <button class="btn" type="button" data-action="clear-jlpt-practice" ${!r.length||u?"disabled":""}>${o(t.clear)}</button>
          <button class="btn" type="button" data-action="next-jlpt-practice">${o(t.next)}</button>
        </div>
      </article>
    `}function ek(e,t,n){let s=0;return String(e.sentence||"").split("___").map((r,a,l)=>{if(a===l.length-1)return o(r);const u=(e.blanks[a]||{answer:[]}).answer.length||1,p=t.slice(s,s+u),d=p.some((f,v)=>n.includes(s+v));s+=u;const g=p.length?p.map(f=>`<span>${o(f.kanji)}</span>`).join(""):`<span>${o("в–Ў".repeat(u))}</span>`;return`${o(r)}<span class="sentence-blank ${d?"is-wrong":""}">${g}</span>`}).join("")}function tk(){var a,l;const e=lr(vy()),t=Kk(e),n=e.length,s=(t==null?void 0:t.kind)==="card"?t.card:(t==null?void 0:t.kind)==="exercise"?ae(((a=t.card)==null?void 0:a.id)||t.cardId||((l=t.progress)==null?void 0:l.cardId)||""):null;Dk(t);const r=t?t.kind==="card"?s?fd(s):hs():Hk(t):hs();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${o(A("review"))}</h1>
            <p>${n} ${o(m()==="ru"?"в очереди":"in queue")}</p>
            <div class="mini-stat-row">
              ${E(m()==="ru"?"Сейчас":"Due now",Fe(),"due")}
              ${E(m()==="ru"?"В сессии":"Remaining",n,"session")}
              ${E(m()==="ru"?"Позже":"Learning later",by(),"learning")}
              ${E(m()==="ru"?"Всего SRS":"Total SRS",ky(),"cards")}
            </div>
          </div>
          <div class="actions">
            ${Ns("srs")}
          </div>
        </div>
        <div class="study-layout" data-section="review-card">
          ${r}
          ${bo(s,n)}
        </div>
        ${nk()}
      </section>
    `}function nk(){try{return sk()}catch(e){return console.warn("[Flash Kanji] sentence practice skipped after stale saved progress.",e),i.progress&&(i.progress.sentencePractice=Sa(es().sentencePractice,{})),""}}function sk(){const e=At(),t=vi(e),n={...gs(),...mo()},s=rk(e,n);if(!e.length)return`
      <article class="sentence-practice empty-state" data-section="sentence-practice">
          <span class="kanji-char">文</span>
          <h2>${o(n.title)}</h2>
          <p>${o(n.noLearned)}</p>
          ${s}
          <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${o(A("learn"))}</button>
        </article>
      `;if(e.length<4)return`
        <article class="sentence-practice empty-state" data-section="sentence-practice">
          <span class="kanji-char">文</span>
          <h2>${o(n.title)}</h2>
          <p>${o(n.notEnough.replace("{count}",e.length))}</p>
          ${s}
        </article>
      `;if(!t.length)return`
        <article class="sentence-practice empty-state" data-section="sentence-practice">
          <span class="kanji-char">文</span>
          <h2>${o(n.title)}</h2>
          <p>${o(n.noExercise)}</p>
          ${s}
        </article>
      `;const r=ho(t,e);if(!r)return"";const{exercise:a,tiles:l,selectedTiles:c,answerFlat:u,wrongIndexes:p,complete:d,awarded:g}=r,f=new Set(i.progress.sentencePractice.selected),v=i.progress.sentencePractice.result||{};return`
      <article class="sentence-practice${i.progress.sentencePractice.checked?d?" is-success":" is-error":""}" data-section="sentence-practice" aria-live="polite">
        <div class="section-head sentence-head">
          <div>
            <h2>${o(n.title)}</h2>
            <p>${o(n.subtitle.replace("{learned}",e.length).replace("{total}",i.cards.length))}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${o(a.jlpt)}</span>
            ${a.source?`<span class="pill">${o(ak(a.source,n))}</span>`:""}
            <span class="pill">${o(n.progress.replace("{done}",Object.keys(i.progress.sentencePractice.completed||{}).length).replace("{total}",t.length))}</span>
          </div>
        </div>
        ${s}
        <div class="sentence-card">
          <div class="sentence-line">${ad(a,c,p)}</div>
          <p class="sentence-reading">${o(a.reading||"")}</p>
          <p class="sentence-translation">${o(ok(a))}</p>
        </div>
        <div class="sentence-tiles">
          ${l.map(($,S)=>{const j=f.has(S),k=p.includes(i.progress.sentencePractice.selected.indexOf(S));return`
              <button class="sentence-tile ${j?"is-used":""} ${k?"is-wrong":""}" type="button" data-action="insert-sentence-tile" data-index="${S}" ${j||d?"disabled":""}>
                <span>${o($.reading)}</span>
                <strong>${o($.kanji)}</strong>
              </button>
            `}).join("")}
        </div>
        <div class="sentence-feedback">
          ${o(v.message||n.tip.replace("{count}",u.length))}
          ${d&&!g?`<small>${o(n.completedBefore)}</small>`:""}
        </div>
        <div class="actions sentence-actions">
          <button class="btn primary" type="button" data-action="check-sentence">${o(n.check)}</button>
          <button class="btn" type="button" data-action="undo-sentence-tile" ${!i.progress.sentencePractice.selected.length||d?"disabled":""}>${o(n.undo)}</button>
          <button class="btn" type="button" data-action="clear-sentence" ${!i.progress.sentencePractice.selected.length||d?"disabled":""}>${o(n.clear)}</button>
          <button class="btn ghost" type="button" data-action="next-sentence">${o(n.next)}</button>
        </div>
      </article>
    `}function rk(e,t){const n=Re(),s=Gr(n.customDraft||{}),r=Array.isArray(n.customSentences)?n.customSentences:[],a=r.length,l=!!n.customEditingId,c=n.customStatus?` is-${n.customStatus}`:"";return`
      <details class="sentence-builder" ${l||n.customMessage?"open":""}>
        <summary>
          <span>${o(t.customTitle)}</span>
          <small>${o(t.customCount.replace("{count}",a))}</small>
        </summary>
        <div class="sentence-builder-grid">
          <label class="field sentence-builder-wide">
            <span>${o(t.customSentence)}</span>
            <textarea data-sentence-draft="jp" rows="2" autocomplete="off" spellcheck="false" placeholder="${h(t.customSentencePlaceholder)}">${o(s.jp||"")}</textarea>
          </label>
          <label class="field sentence-builder-wide">
            <span>${o(t.customReading)}</span>
            <input data-sentence-draft="hiragana" type="text" autocomplete="off" spellcheck="false" value="${h(s.hiragana||"")}" placeholder="${h(t.customReadingPlaceholder)}" />
          </label>
          <label class="field">
            <span>${o(t.customTranslationRu)}</span>
            <input data-sentence-draft="ru" type="text" value="${h(s.ru||"")}" placeholder="${h(t.customTranslationRuPlaceholder)}" />
          </label>
          <label class="field">
            <span>${o(t.customTranslationEn)}</span>
            <input data-sentence-draft="en" type="text" value="${h(s.en||"")}" placeholder="${h(t.customTranslationEnPlaceholder)}" />
          </label>
        </div>
        <div class="sentence-builder-actions">
          <button class="btn primary" type="button" data-action="add-custom-sentence">${o(l?t.updateCustom:t.addCustom)}</button>
          ${l?`<button class="btn ghost" type="button" data-action="cancel-custom-sentence-edit">${o(t.cancelEdit)}</button>`:""}
          <span class="sentence-builder-message${c}">${o(n.customMessage||t.customHelp.replace("{learned}",e.length))}</span>
        </div>
        ${ik(r,e,t)}
      </details>
    `}function ik(e,t,n){return e.length?`
      <div class="sentence-custom-list">
        ${e.map(s=>{const r=fo(s,t),a=!!(r&&un(r,t).length>=Math.max(4,ht(r).length)),l=m()==="en"?s.en||s.ru:s.ru||s.en;return`
            <article class="sentence-custom-item">
              <div class="sentence-custom-copy">
                <div class="tag-row">
                  <span class="pill">${o(n.userSource)}</span>
                  <span class="pill ${a?"success":""}">${o(a?n.customReady:n.customLocked)}</span>
                </div>
                <strong>${o(s.jp)}</strong>
                ${s.hiragana?`<small>${o(s.hiragana)}</small>`:""}
                ${l?`<small>${o(l)}</small>`:""}
              </div>
              <div class="sentence-custom-actions">
                <button class="btn" type="button" data-action="edit-custom-sentence" data-id="${h(s.id)}">${o(n.editCustom)}</button>
                <button class="btn ghost" type="button" data-action="delete-custom-sentence" data-id="${h(s.id)}">${o(n.deleteCustom)}</button>
              </div>
            </article>
          `}).join("")}
      </div>
    `:`<p class="sentence-custom-empty">${o(n.customEmpty)}</p>`}function ak(e,t){return e==="user"||e==="custom"?t.userSource||t.customSource:e==="dynamic"?t.dynamicSource:e}function gs(){return m()==="ru"?{title:"Практика предложений",subtitle:"Только из изученных кандзи: {learned}/{total}",progress:"{done}/{total} готово",noLearned:"Сначала изучи несколько кандзи в уроках или повторении. После этого появятся предложения.",notEnough:"Изучено {count} кандзи. Для упражнения нужно минимум 4 изученных кандзи, чтобы собрать варианты.",noExercise:"Изученные кандзи пока не складываются в доступные предложения. Продолжай уроки, и блок откроется.",tip:"Заполни {count} пропуск(а) плитками по порядку.",check:"Проверить",clear:"Очистить",next:"Следующее",undo:"Убрать",completedBefore:"Награда за это предложение уже получена.",fillAll:"Заполни все пропуски перед проверкой.",correct:"Верно. Предложение собрано правильно.",wrong:"Проверь красные места и попробуй ещё раз.",full:"Все пропуски уже заполнены.",inserted:"Плитка вставлена.",removed:"Последняя плитка убрана."}:{title:"Sentence practice",subtitle:"Only learned kanji: {learned}/{total}",progress:"{done}/{total} done",noLearned:"Study a few kanji first. Sentence practice will unlock after that.",notEnough:"{count} kanji learned. You need at least 4 learned kanji for tile choices.",noExercise:"Your learned kanji do not form an available sentence yet. Continue lessons to unlock this block.",tip:"Fill {count} blank slot(s) with tiles in order.",check:"Check",clear:"Clear",next:"Next",undo:"Undo",completedBefore:"Reward for this sentence was already claimed.",fillAll:"Fill every blank before checking.",correct:"Correct. The sentence is complete.",wrong:"Check the red slots and try again.",full:"All blank slots are already filled.",inserted:"Tile inserted.",removed:"Last tile removed."}}function mo(){return m()==="ru"?{customTitle:"Своё предложение",customCount:"Своих: {count}",customSentence:"Японское предложение",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Чтение хираганой",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Перевод RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Добавить",customHelp:"Вставь фразу. Приложение спрячет только изученные кандзи: {learned}.",customAdded:"Предложение добавлено.",customNoSentence:"Вставь японское предложение.",customNoKnown:"В этом предложении нет изученных кандзи.",customNoTiles:"Нужно минимум 4 изученных кандзи для вариантов.",customDuplicate:"Такое предложение уже есть.",customUpdated:"Предложение обновлено.",customDeleted:"Предложение удалено.",customEmpty:"Свои предложения появятся здесь.",customReady:"Доступно",customLocked:"Позже",updateCustom:"Сохранить",cancelEdit:"Отмена",editCustom:"Редактировать",deleteCustom:"Удалить",customSource:"Своё",userSource:"USER",dynamicSource:"JSON"}:{customTitle:"Custom sentence",customCount:"Custom: {count}",customSentence:"Japanese sentence",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Hiragana reading",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Translation RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Add",customHelp:"Paste a phrase. The app will hide only learned kanji: {learned}.",customAdded:"Sentence added.",customNoSentence:"Paste a Japanese sentence.",customNoKnown:"No learned kanji found in this sentence.",customNoTiles:"You need at least 4 learned kanji for tile choices.",customDuplicate:"This sentence already exists.",customUpdated:"Sentence updated.",customDeleted:"Sentence deleted.",customEmpty:"Your sentences will appear here.",customReady:"Ready",customLocked:"Later",updateCustom:"Save",cancelEdit:"Cancel",editCustom:"Edit",deleteCustom:"Delete",customSource:"Custom",userSource:"USER",dynamicSource:"JSON"}}function ok(e){return m()==="en"?(e==null?void 0:e.translationEn)||(e==null?void 0:e.translationRu)||"":(e==null?void 0:e.translationRu)||(e==null?void 0:e.translationEn)||""}function id(e=At()){const t=lk(e),n=ck(e),s=Array.isArray(i.sentenceExercises)?i.sentenceExercises:[],r=new Set;return[...t,...n,...s].filter(a=>!(a!=null&&a.id)||r.has(a.id)?!1:(r.add(a.id),!0))}function lk(e=At()){const t=Re();return(Array.isArray(t.customSentences)?t.customSentences:[]).map(s=>fo(s,e)).filter(Boolean)}function fo(e,t=At()){return e!=null&&e.jp?wo({id:e.id,jlpt:yk(e.jp,t),sentence:e.jp,reading:e.hiragana||ir(e.jp),translationRu:e.ru||"",translationEn:e.en||"",source:"user"},t,{maxBlanks:3,maxBlankChars:5}):null}function ad(e,t,n){const s=(e==null?void 0:e.blanks)||[],r=String((e==null?void 0:e.sentence)||"").split("___");let a=0;return r.map((l,c)=>{const u=s[c];if(!u)return o(l);const p=u.answer||[],d=p.map((g,f)=>{const v=a+f,b=t[v],$=n.includes(v);return`<span class="sentence-slot ${b?"is-filled":""} ${$?"is-wrong":""}">${b?o(b.kanji):""}</span>`}).join("");return a+=p.length,`${o(l)}<span class="sentence-blank">${d}</span>`}).join("")}function ho(e=vi(),t=At()){var b,$,S;const n=On(t),s=(Array.isArray(e)?e:[]).filter(j=>j==null?void 0:j.id),r=Re();new Set(s.map(j=>j.id)).has(r.activeId)||wi(((b=vo(s))==null?void 0:b.id)||null);const l=s.find(j=>j.id===i.progress.sentencePractice.activeId)||s[0];if(!l)return null;const c=ht(l);(!Array.isArray(i.progress.sentencePractice.tileKeys)||!i.progress.sentencePractice.tileKeys.length)&&(i.progress.sentencePractice.tileKeys=un(l,n).map($i));let u=(Array.isArray(i.progress.sentencePractice.tileKeys)?i.progress.sentencePractice.tileKeys:[]).map(Sk).filter(Boolean);const p=()=>c.every(j=>u.some(k=>k.kanji===j.kanji));(u.length<Math.max(4,c.length)||!p())&&(u=un(l,n),i.progress.sentencePractice.tileKeys=u.map($i),i.progress.sentencePractice.selected=[],i.progress.sentencePractice.checked=!1,i.progress.sentencePractice.result=null);const d=Array.isArray(i.progress.sentencePractice.selected)?i.progress.sentencePractice.selected:[];i.progress.sentencePractice.selected=d.filter((j,k,x)=>Number.isInteger(j)&&j>=0&&j<u.length&&x.indexOf(j)===k).slice(0,c.length);const g=i.progress.sentencePractice.selected.map(j=>u[j]).filter(Boolean),f=i.progress.sentencePractice.checked&&i.progress.sentencePractice.result?i.progress.sentencePractice.result.wrongIndexes:[],v=Array.isArray(f)?f.filter(j=>Number.isInteger(j)&&j>=0&&j<c.length):[];return{exercise:l,tiles:u,selectedTiles:g,answerFlat:c,wrongIndexes:v,complete:!!(i.progress.sentencePractice.checked&&(($=i.progress.sentencePractice.result)!=null&&$.correct)),awarded:!!((S=i.progress.sentencePractice.completed)!=null&&S[l.id])}}function Re(){return i.progress.sentencePractice=Sa(es().sentencePractice,i.progress.sentencePractice||{}),i.progress.sentencePractice}function wi(e){i.progress.sentencePractice={...Re(),activeId:e,selected:[],checked:!1,result:null,tileKeys:[]};const t=id(At()).find(n=>(n==null?void 0:n.id)===e);t&&ud(t)}function On(e){return(Array.isArray(e)?e:[]).filter(t=>(t==null?void 0:t.id)&&t.kanji)}function At(){return On(i.cards).filter(e=>{const t=i.lessons.find(s=>s.id===e.lessonId);if(t&&!Pe(t))return!1;const n=O(e.id);return n.state!=="New"||n.reviewCount>0||n.lastReviewedAt||i.progress.lessonCompletions[e.lessonId]})}function vi(e=At()){const t=On(e),n=new Set(t.map(s=>s.kanji));return id(t).filter(s=>{if(!(s!=null&&s.id))return!1;const r=ht(s);return!r.length||r.some(a=>!n.has(a.kanji))?!1:un(s,t).length>=Math.max(4,r.length)})}function ht(e){return((e==null?void 0:e.blanks)||[]).flatMap(t=>(t.answer||[]).map((n,s)=>{var r;return{kanji:n,reading:((r=t.reading)==null?void 0:r[s])||""}}))}function od(e){return ht(e).map(t=>t.kanji).join("")}function un(e,t){if(!(e!=null&&e.id))return[];const n=On(t),s=ht(e),r=new Set(s.map(f=>f.kanji)),a=new Set(n.map(f=>f.kanji)),l=new Map;[...e.tiles||[],...s].forEach(f=>{f!=null&&f.kanji&&(f!=null&&f.reading)&&l.set(f.kanji,f.reading)});const c=s.map(f=>({kanji:f.kanji,reading:f.reading||l.get(f.kanji)||Pt(f.kanji)})),u=(e.tiles||[]).filter(f=>(f==null?void 0:f.kanji)&&!r.has(f.kanji)&&a.has(f.kanji)).map(f=>({kanji:f.kanji,reading:f.reading||Pt(f.kanji)})).filter((f,v,b)=>b.findIndex($=>$.kanji===f.kanji)===v),p=n.filter(f=>f.kanji&&!r.has(f.kanji)).map(f=>({kanji:f.kanji,reading:l.get(f.kanji)||Pt(f.kanji,f)})).filter((f,v,b)=>b.findIndex($=>$.kanji===f.kanji)===v).sort((f,v)=>xe(`${e.id}:${f.kanji}`)-xe(`${e.id}:${v.kanji}`)),d=[...u,...p].filter(f=>!r.has(f.kanji)).filter((f,v,b)=>b.findIndex($=>$.kanji===f.kanji)===v),g=Math.min(Math.max(6,c.length+2),c.length+d.length);return xk([...c,...d.slice(0,g-c.length)],e.id)}function ck(e){const t=On(e);if(!t.length)return[];const n=new Set(t.map(l=>l.kanji)),s=new Set,r=[];return t.flatMap(l=>(l.examples||[]).map(c=>({...c,card:l}))).forEach((l,c)=>{var b;const u=ms(l.word||"");if(!u||s.has(u)||!jk(u)||cd(u).some($=>!n.has($)))return;s.add(u);const p=Kn(l.reading||ir(u)),d=l.translation||u,g=[{sentence:`今日は${u}をアプリで見ます。`,reading:`きょうは ${p}を あぷりで みます。`,translationRu:`Сегодня я смотрю в приложении: ${d}.`,translationEn:`Today I check ${u} in an app.`},{sentence:`駅で${u}について話します。`,reading:`えきで ${p}について はなします。`,translationRu:`На станции говорю про: ${d}.`,translationEn:`At the station, I talk about ${u}.`},{sentence:`メモに${u}を書きます。`,reading:`めもに ${p}を かきます。`,translationRu:`Я записываю в заметку: ${d}.`,translationEn:`I write ${u} in a memo.`}],f=g[c%g.length],v=wo({id:`sentence-json-${xe(`${u}:${f.sentence}`).toString(36)}`,jlpt:((b=l.card)==null?void 0:b.jlpt)||"N5",sentence:f.sentence,reading:f.reading,translationRu:f.translationRu,translationEn:f.translationEn,source:"dynamic"},t,{maxBlanks:2,maxBlankChars:4});v&&r.push(v)}),r.slice(0,160)}function uk(){const e=Re(),t={...gs(),...mo()},n=Gr(dk()||e.customDraft||{}),s=At(),r=dn(n.jp);if(!r){bi(t.customNoSentence,"error");return}const a=e.customEditingId||null;if(fk(r,a)){bi(t.customDuplicate,"error");return}const c=Re(),u={id:a||`custom_${Date.now().toString(36)}_${xe(r).toString(36)}`,jp:r,hiragana:Kn(dn(n.hiragana)||ir(r)),ru:dn(n.ru),en:dn(n.en),source:"user"},p=(c.customSentences||[]).findIndex(g=>g.id===u.id);p>=0?c.customSentences[p]=u:c.customSentences=[u,...c.customSentences||[]].slice(0,160),c.customDraft={jp:"",hiragana:"",ru:"",en:""},c.customEditingId=null,bi(a?t.customUpdated:t.customAdded,"success",!1);const d=fo(u,s);d&&un(d,s).length>=Math.max(4,ht(d).length)&&(wi(d.id),i.progress.sentencePractice.tileKeys=un(d,s).map($i)),C(),I()}function dk(){const e=document.querySelector(".sentence-builder");if(!e)return null;const t=n=>{var s;return((s=e.querySelector(`[data-sentence-draft="${n}"]`))==null?void 0:s.value)||""};return{jp:t("jp"),hiragana:t("hiragana"),ru:t("ru"),en:t("en")}}function pk(e){const t=Re(),n=(t.customSentences||[]).find(s=>s.id===e);n&&(t.customEditingId=n.id,t.customDraft={jp:n.jp||"",hiragana:n.hiragana||"",ru:n.ru||"",en:n.en||""},t.customMessage="",t.customStatus="",C(),I())}function gk(e){var r;const t=Re(),n={...gs(),...mo()},s=(t.customSentences||[]).length;if(t.customSentences=(t.customSentences||[]).filter(a=>a.id!==e),t.customSentences.length!==s){if(t.customEditingId===e&&(t.customEditingId=null,t.customDraft={jp:"",hiragana:"",ru:"",en:""}),(r=t.completed)!=null&&r[e]&&delete t.completed[e],t.recentIds=(t.recentIds||[]).filter(a=>a!==e),t.activeId===e){const a=At(),l=vo(vi(a));wi((l==null?void 0:l.id)||null)}bi(n.customDeleted,"success",!1),C(),I()}}function mk(){const e=Re();e.customEditingId=null,e.customDraft={jp:"",hiragana:"",ru:"",en:""},e.customMessage="",e.customStatus="",C(),I()}function fk(e,t=null){const n=ms(e);return(Re().customSentences||[]).some(r=>r.id!==t&&ms(r.jp)===n)?!0:i.sentenceExercises.some(r=>ms(ld(r))===n)}function bi(e,t,n=!0){const s=Re();s.customMessage=e,s.customStatus=t,C(),n&&I()}function wo(e,t,n={}){if(!e||typeof e!="object")return null;const s=On(t),r=ms(e.sentence||"");if(!r||!e.id||!s.length)return null;const a=hk(r,s).filter(d=>d.answer.length<=Number(n.maxBlankChars||5));if(!a.length)return null;const l=wk(a,r,n);if(!l.length)return null;let c="",u=0;const p=l.map(d=>(c+=r.slice(u,d.start)+"___",u=d.end,{answer:d.answer,reading:vk(d.text)}));return c+=r.slice(u),{id:e.id,kind:e.kind||"cloze",jlpt:e.jlpt||"N5",sentence:c,originalSentence:r,reading:Kn(e.reading||ir(r)),translationRu:e.translationRu||"",translationEn:e.translationEn||"",blanks:p,tiles:p.flatMap(d=>d.answer.map((g,f)=>({kanji:g,reading:d.reading[f]||Pt(g)}))),source:e.source||"custom",createdAt:e.createdAt}}function hk(e,t){const n=new Map(On(t).map(a=>[a.kanji,a])),s=[];let r=null;return Array.from(e).forEach((a,l)=>{if(ki(a)&&n.has(a)){r||(r={start:l,end:l,text:"",answer:[]}),r.end=l+1,r.text+=a,r.answer.push(a);return}r&&s.push(r),r=null}),r&&s.push(r),s}function wk(e,t,n={}){const s=Number(n.maxBlanks||2),r=Number(n.maxBlankChars||5),a=e.filter(d=>d.start>0&&d.end<t.length),l=e.filter(d=>d.start>0),c=(a.length?a:l.length?l:e).slice().sort((d,g)=>{const f=g.answer.length-d.answer.length;return f||Math.abs(d.start-t.length/2)-Math.abs(g.start-t.length/2)}),u=[];let p=0;return c.forEach(d=>{u.length>=s||p+d.answer.length>r||(u.push(d),p+=d.answer.length)}),u.sort((d,g)=>d.start-g.start)}function vk(e){const t=Array.from(e),n=bk(e);return n?kk(t,Kn(n)):t.map(s=>Pt(s))}function bk(e){for(const t of i.cards)for(const n of t.examples||[])if(n.word===e&&n.reading)return n.reading;return""}function kk(e,t){const n=Array(e.length).fill("");let s=t;for(let r=e.length-1;r>0;r-=1){const l=$k(e[r]).sort((c,u)=>u.length-c.length).find(c=>c&&s.endsWith(c));l&&(n[r]=l,s=s.slice(0,-l.length))}return n[0]=s||Pt(e[0]),n.map((r,a)=>r||Pt(e[a]))}function $k(e){const t=i.cards.find(s=>s.kanji===e),n=[t==null?void 0:t.hiragana,t==null?void 0:t.onyomi,t==null?void 0:t.kunyomi].flatMap(s=>String(s||"").split(/[\/,;гѓ»гЂЃ\s]+/)).map(s=>Kn(s.trim())).filter(Boolean);return[...new Set(n)]}function ir(e){return Kn(Array.from(e).map(t=>ki(t)?Pt(t):t).join(""))}function yk(e,t){const n=["N5","N4","N3","N2","N1"],s=new Map(t.map(a=>[a.kanji,a]));return cd(e).map(a=>{var l;return(l=s.get(a))==null?void 0:l.jlpt}).filter(Boolean).sort((a,l)=>n.indexOf(l)-n.indexOf(a))[0]||"N5"}function ms(e){return String(e||"").replace(/\s+/g,"").trim()}function dn(e){return String(e||"").replace(/\s+/g," ").trim()}function ld(e){if(!e)return"";if(e.jp)return e.jp;if(e.originalSentence)return e.originalSentence;let t=0;return String(e.sentence||"").replace(/___/g,()=>{var s;const n=(s=e.blanks)==null?void 0:s[t++];return((n==null?void 0:n.answer)||[]).join("")})}function jk(e){return Array.from(String(e||"")).some(ki)}function cd(e){return Array.from(String(e||"")).filter(ki)}function ki(e){return/[㐀-鿿]/u.test(e)}function Kn(e){return String(e||"").replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-96))}function ne(e){return Kn(String(e||""))}function Pt(e,t=i.cards.find(n=>n.kanji===e)){const n=(t==null?void 0:t.onyomi)||(t==null?void 0:t.kunyomi)||(t==null?void 0:t.hiragana)||"";return String(n).split("/")[0].trim()||"かな"}function $i(e){return`${e.kanji}	${e.reading||""}`}function Sk(e){const[t,n]=String(e||"").split("	");return t?{kanji:t,reading:n||Pt(t)}:null}function Nk(e){var r;const t=ho();if(!t||!Number.isInteger(e))return;const n=gs(),s=i.progress.sentencePractice;if(!((r=s.result)!=null&&r.correct||s.selected.includes(e))){if(s.selected.length>=t.answerFlat.length){U(n.full);return}s.selected.push(e),s.checked=!1,s.result={correct:!1,message:n.inserted,wrongIndexes:[]},C(),I()}}function Ck(){var t;const e=Re();!e.selected.length||(t=e.result)!=null&&t.correct||(e.selected.pop(),e.checked=!1,e.result={correct:!1,message:gs().removed,wrongIndexes:[]},C(),I())}function Ak(){var t;const e=Re();(t=e.result)!=null&&t.correct||(e.selected=[],e.checked=!1,e.result=null,C(),I())}function Lk(){const e=ho();if(!e)return;const t=gs(),n=i.progress.sentencePractice;if(n.selected.length<e.answerFlat.length){n.checked=!0,n.result={correct:!1,message:t.fillAll,wrongIndexes:[]},C(),I();return}const s=e.answerFlat.map((a,l)=>{var c;return((c=e.selectedTiles[l])==null?void 0:c.kanji)===a.kanji?-1:l}).filter(a=>a>=0),r=s.length===0;if(n.checked=!0,n.attempts=(n.attempts||0)+1,n.result={correct:r,wrongIndexes:s,message:r?t.correct:t.wrong},r)Ik(e.exercise),Ne({trust:.8,curiosity:.5,discipline:.4},"sentence_correct"),Ce("sentence_complete",{exerciseId:e.exercise.id,source:e.exercise.source||"builtin"}),Sr("ok");else{i.progress.totalWrong+=1,i.progress.correctCombo=0,Ne({discipline:-.6,curiosity:.2},"sentence_wrong"),Ce("answer_wrong",{exerciseId:e.exercise.id,mode:"sentence"});const a=Et();a.mistakes+=1,i.progress.daily[ce()]=a,Sr("again")}C(),I()}function Ik(e){var l;const t=Re();if(t.completed[e.id])return;const n=((l=i.rewards)==null?void 0:l.rewards)||{},s=n.sentencePracticeXp||wl.xp,r=n.sentencePracticeCoins||wl.coins;t.completed[e.id]=new Date().toISOString(),i.progress.totalCorrect+=1,i.progress.correctCombo+=1,i.progress.bestCorrectCombo=Math.max(i.progress.bestCorrectCombo,i.progress.correctCombo);const a=Et();a.reviews+=1,a.minutes=Vi((a.minutes||0)+.8,1),i.progress.daily[ce()]=a,Q(s,r,`sentence:${e.id}`),Ne({trust:.8,curiosity:.7},"sentence_complete"),_e(),To(),V()}function Tk(){var a;const e=At(),t=vi(e);if(!t.length)return;const n=(a=i.progress.sentencePractice)==null?void 0:a.activeId,s=t.find(l=>(l==null?void 0:l.id)===n);s&&ud(s);const r=vo(t,{excludeCurrent:!0,preferUncompleted:!0});r!=null&&r.id&&(wi(r.id),i.progress.sentencePractice.tileKeys=un(r,e).map($i),C(),I())}function vo(e,t={}){const n=(Array.isArray(e)?e:[]).filter($=>$==null?void 0:$.id);if(!n.length)return null;const s=Re(),r=s.activeId,a=new Set(s.recentIds||[]),l=new Set(s.recentAnswers||[]),c=$=>!t.excludeCurrent||n.length===1||$.id!==r,u=$=>{var S;return!t.preferUncompleted||!((S=s.completed)!=null&&S[$.id])},p=$=>!l.has(od($)),d=$=>!a.has($.id),f=[n.filter(c).filter(u).filter(p).filter(d),n.filter(c).filter(u).filter(p),n.filter(c).filter(p).filter(d),n.filter(c).filter(d),n.filter(c),n].find($=>$.length)||n,v=f.filter(Rk),b=v.length?v:f;return b[Math.floor(Math.random()*b.length)]}function Rk(e){return(e==null?void 0:e.source)==="user"||(e==null?void 0:e.source)==="custom"||(e==null?void 0:e.source)==="dynamic"||String((e==null?void 0:e.sentence)||"").indexOf("___")>0}function ud(e){if(!(e!=null&&e.id))return;const t=Re(),n=od(e),s=Array.isArray(t.recentIds)?t.recentIds:[],r=Array.isArray(t.recentAnswers)?t.recentAnswers:[];t.recentIds=[e.id,...s.filter(a=>a!==e.id)].slice(0,14),t.recentAnswers=[n,...r.filter(a=>a!==n)].slice(0,8)}function xe(e){return String(e).split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0)>>>0}function xk(e,t){return[...e].sort((n,s)=>xe(`${t}:${n.kanji}:${n.reading}`)-xe(`${t}:${s.kanji}:${s.reading}`))}function pn(e,t=[]){var r;const n=t.filter(a=>{var l;return String(((l=e==null?void 0:e.answers)==null?void 0:l[a.id])||"").trim()}).length,s=t.filter(a=>{var l;return!String(((l=e==null?void 0:e.answers)==null?void 0:l[a.id])||"").trim()});return{answered:n,missingCount:s.length,missingIds:s.map(a=>a.id),firstMissingId:((r=s[0])==null?void 0:r.id)||null,totalQuestions:t.length,ready:t.length>0&&s.length===0}}function ar(e,t){const n=String(e||"n5").toLowerCase(),s=String(t||"").replace(/[^a-z0-9_-]+/gi,"-");return`${n}-final-question-${s}`}function _k(e){var t,n;return Number((n=(t=e==null?void 0:e.passingPercent)!=null?t:e==null?void 0:e.passThreshold)!=null?n:70)}function Mk(){const e=i.finalTestModal;if(!e)return"";const t=e.kind==="warning",n=t?"thinking":e.passed?"proud":"sad",s=t?"":Kt(e.level,"btn ghost");!t&&(!e.percent||e.percent===0)&&typeof e.correct=="number"&&e.totalQuestions>0&&(e.percent=Math.round(e.correct/e.totalQuestions*100));const r=t?[`<span>${o(m()==="ru"?"Вопросов":"Questions")} ${e.totalQuestions}</span>`,`<span>${o(m()==="ru"?"Пропусков":"Missing")} ${e.missingCount}</span>`,`<span>${o(m()==="ru"?"Порог":"Pass")} ${e.threshold}%</span>`]:[`<span>${o(m()==="ru"?"Результат":"Score")} ${e.percent}%</span>`,`<span>${o(m()==="ru"?"Верно":"Correct")} ${e.correct}/${e.totalQuestions}</span>`,`<span>${o(m()==="ru"?"Ошибки":"Errors")} ${e.incorrect}</span>`,`<span>${o(m()==="ru"?"Пропуски":"Missing")} ${e.unanswered}</span>`,`<span>+${e.rewardXp} XP</span>`,`<span>+${e.rewardMoon} ${o(A("coins"))}</span>`];return`
      <div class="reward-backdrop final-test-backdrop">
        <article class="reward-modal is-final-test ${t?"is-warning":"is-result"}" role="dialog" aria-modal="true">
          ${vs("eva",n,t?"review":"achievement","reward-mascot")}
          <h2>${o(e.title)}</h2>
          <p>${o(e.message)}</p>
          <div class="reward-values">
            ${r.join("")}
          </div>
          <div class="actions final-test-modal-actions">
            ${t?`<button class="btn primary" type="button" data-action="final-test-focus-missing" data-focus="${h(e.focusSelector||"")}">${o(e.focusLabel||(m()==="ru"?"К пропуску":"Go to missing"))}</button>`:""}
            ${t&&e.allowIncomplete?`<button class="btn ghost" type="button" data-action="final-test-force-submit" data-level="${h(e.level||"N5")}">${o(e.forceLabel||(m()==="ru"?"Завершить без ответов":"Finish anyway"))}</button>`:""}
            ${!t&&e.reviewAction?`<button class="btn ghost" type="button" data-action="${h(e.reviewAction)}" data-mode="difficult">${o(e.repeatLabel||(m()==="ru"?"Повторить ошибки":"Repeat mistakes"))}</button>`:""}
            ${!t&&e.reviewAllAction?`<button class="btn ghost" type="button" data-action="${h(e.reviewAllAction)}" data-mode="all">${o(e.reviewAllLabel||(m()==="ru"?"Повторить весь тест":"Review all"))}</button>`:""}
            ${s}
            <button class="btn primary" type="button" data-action="close-final-test-modal">${o(e.closeLabel||"OK")}</button>
          </div>
        </article>
      </div>
    `}function dd(e){const t=Dy(e);if(!t&&!Py(e))return"";const n=t?m()==="ru"?"Озвучить следующее чтение кандзи":"Speak the next kanji reading":m()==="ru"?"Проиграть озвучку кандзи":"Play kanji audio";return`
      <button class="audio-trigger" type="button" data-action="play-kanji-audio" data-id="${h(e.id)}" ${t?'data-tts-kind="cycle"':""} aria-label="${h(n)}" title="${h(t?"TTS":m()==="ru"?"Озвучка":"Audio")}">🔊</button>
    `}function yi(e){const t=br(e);return`
      <div class="reading-row reading-split">
        ${pd(e,"onyomi",ip("onyomi"),t.onyomi.kana,t.onyomi.romaji)}
        ${pd(e,"kunyomi",ip("kunyomi"),t.kunyomi.kana,t.kunyomi.romaji)}
      </div>
    `}function pd(e,t,n,s,r){const a=md(e,t,n);return`
      <div class="reading-box">
        <div class="reading-box-head">
          <span class="label">${o(n)}</span>
          ${a}
        </div>
        <strong>${o(ne(s)||"—")}</strong>
        <small>${o(r||"—")}</small>
      </div>
    `}function gd(e,t,n,s){return`
          <div>
            <dt class="reading-def-head">
              <span>${o(n)}</span>
              ${md(e,t,n)}
            </dt>
            <dd>${o(ne(s||"—"))}</dd>
          </div>
        `}function md(e,t,n){return $s(e,t).length?`<button class="reading-tts-button" type="button" data-action="play-kanji-audio" data-id="${h(e.id)}" data-tts-kind="${h(t)}" aria-label="${h(`${n} TTS`)}" title="TTS">🔊</button>`:""}function ji(e,t="btn ghost"){const n=Gy(e);if(!n)return"";const s=lt(n.jlpt),r=m()==="ru"?"JLPT урок":"JLPT lesson";return s?`<button class="${t}" type="button" data-action="open-jlpt-lesson" data-jlpt="${h(n.jlpt)}">${o(n.jlpt)} · ${o(r)}</button>`:`<button class="${t} is-disabled" type="button" disabled aria-disabled="true" title="${h(Dt(n.jlpt))}">🔒 ${o(n.jlpt)}</button>`}function fd(e){if(!(e!=null&&e.id))return hs();Bs(e,"study_card");const t=O(e.id),n=i.revealed;Cy(e.id);const s=e.lessonTitle||el(e.lessonId)||e.jlpt||"";return`
      <article class="study-card" data-review-card-id="${h(e.id)}">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${o(s)}</span>
            ${Gi(t.state)}
          </div>
          ${dd(e)}
        </div>
        <div class="kanji-focus" aria-label="${h(e.kanji)}">${o(e.kanji)}</div>
        <h2>${o(n?P(e):A("question"))}</h2>
        <p class="label">${o(e.jlpt)} · ${e.strokes} ${o(A("strokes"))} · ${o(Hn(t.dueAt))}</p>
        ${n?Ek(e):`
          ${Pk(e)}
          <div class="actions">
            <button class="btn primary" type="button" data-action="show-answer">${o(A("showAnswer"))}</button>
            ${ji(e)}
            <button class="btn" type="button" data-action="open-card" data-id="${h(e.id)}">⋯ ${o(A("details"))}</button>
          </div>
        `}
      </article>
    `}function Pk(e){const t=i.readingCheck.cardId===e.id?i.readingCheck:{value:"",status:null,message:""},n=t.status?` is-${t.status}`:"",s=t.message||(m()==="ru"?"Напиши любое чтение этого кандзи хираганой или катаканой.":"Type any reading for this kanji in hiragana or katakana.");return`
      <section class="reading-check${n}" aria-live="polite">
        <label class="label" for="readingCheck-${h(e.id)}">${o(m()==="ru"?"Проверка чтения":"Reading check")}</label>
        <div class="reading-check-row">
          <input id="readingCheck-${h(e.id)}" data-reading-input data-id="${h(e.id)}" type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" value="${h(t.value)}" placeholder="${h(m()==="ru"?"Например: にち или ニチ":"Example: にち or ニチ")}" />
          <button class="btn ghost" type="button" data-action="check-reading" data-id="${h(e.id)}">${o(m()==="ru"?"Проверить":"Check")}</button>
        </div>
        <p>${o(s)}</p>
      </section>
    `}function Si(e){return`
      <li class="example-item">
        <div class="example-main">
          <b>${o(e.word)}</b>
          <span>${o(ne(e.reading))}</span>
          <span class="example-romaji">${o(e.romaji)}</span>
        </div>
        <small class="example-translation">${o(Je(e))}</small>
      </li>
    `}function Ek(e){return`
      <div class="answer-section">
        ${yi(e)}
        <strong>${o(A("examples"))}</strong>
        <ul class="example-list">
          ${e.examples.map(Si).join("")}
        </ul>
        <strong>${o(A("apps"))}</strong>
        <p>${o(jr(e))}</p>
        <ul class="app-list">${e.apps.map(t=>`<li>${o(t)}</li>`).join("")}</ul>
        <div class="actions compact-actions">
          ${ji(e)}
        </div>
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate" data-rating="forgot">${o(Ci().forgot)} <small>${o(Ci().forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate" data-rating="remember">${o(Ci().remember)} <small>${o(D$(e))}</small></button>
        </div>
      </div>
    `}function bo(e,t){var l;const n=i.progress.correctCombo>=3?"leya":"eva",s=n==="leya"?"combo":"welcome",r=i.route==="review"?Math.max(((l=i.reviewSession)==null?void 0:l.initialSize)||t,1):Math.max(i.cards.length,1),a=!!(e!=null&&e.id);return`
      <aside data-study-side-host>
        ${x$(n,n==="leya"?"focus":"thinking",s)}
        <div class="mini-stat-row" style="margin-top:10px">
          ${E(A("review"),t,"queue",D(t,r))}
          ${E("Combo",i.progress.correctCombo,`${i.progress.bestCorrectCombo} best`,D(i.progress.correctCombo,10))}
        </div>
        ${a?`<article class="tool-panel profile-panel">
          <h3>${o(A("hint"))} · Leya</h3>
          <p>${o(Mi(e.id).hint)}</p>
          <h3>${o(A("mnemonic"))}</h3>
          <p>${o(Mi(e.id).mnemonic)}</p>
        </article>`:""}
      </aside>
    `}function or(){i.reviewExerciseResults={},i.activeExerciseReviewId=null,i.activeExerciseReviewLevel="",i.activeExerciseReviewSource="",i.activeExerciseReviewSelection=[],i.activeExerciseReviewChoice="",i.activeExerciseReviewTranslationOpen=!1}function Dk(e){var t,n;if(!e){i.activeCardId=null,or();return}if(i.reviewQueueLastKind=e.kind,e.kind==="card"){const s=ae(((t=e.card)==null?void 0:t.id)||e.cardId||((n=e.progress)==null?void 0:n.cardId)||"");if(!(s!=null&&s.id)){i.activeCardId=null,or();return}i.activeCardId!==s.id&&(i.activeCardId=s.id,or());return}if(e.kind==="exercise"){const s=i.activeExerciseReviewId===e.exerciseId&&i.activeExerciseReviewLevel===e.level&&i.activeExerciseReviewSource===String(e.source||"textbook");i.activeCardId=null,i.activeExerciseReviewId=e.exerciseId,i.activeExerciseReviewLevel=e.level,i.activeExerciseReviewSource=String(e.source||"textbook"),s||(i.reviewExerciseResults={}),s||(i.activeExerciseReviewSelection=[],i.activeExerciseReviewChoice="",i.activeExerciseReviewTranslationOpen=!1)}}function ko(e,t,n="",s=null,r=null,a="textbook"){const l=Y(e);if(!l||!t)return null;if(String(a||"textbook")==="reading"){const f=r||Ud(t,l);if(!f)return null;const v=hr(s||{},f);return{kind:"exercise",source:"reading",key:`reading:${String(l)}:${t}`,level:l,exerciseId:t,lessonId:String(f.sourceId||n||v.lessonId||""),cardId:"",dueAt:v.dueAt?new Date(v.dueAt).getTime():0,progress:v,exercise:f,card:null}}const u=zn(s||{},{level:l,lessonId:n,exerciseId:t,cardId:(s==null?void 0:s.cardId)||"",kanji:(s==null?void 0:s.kanji)||"",type:(s==null?void 0:s.type)||"",title:(s==null?void 0:s.title)||null,prompt:(s==null?void 0:s.prompt)||"",answer:(s==null?void 0:s.answer)||"",answerLabel:(s==null?void 0:s.answerLabel)||""}),p=r||Io(l,t,n||u.lessonId||"");if(!p)return null;const d=String(p.lessonId||u.lessonId||n||""),g=String(p.cardId||u.cardId||"");return{kind:"exercise",source:"textbook",key:`exercise:${l}:${t}`,level:l,exerciseId:t,lessonId:d,cardId:g,dueAt:u.dueAt?new Date(u.dueAt).getTime():0,progress:u,exercise:p,card:ae(g)||ae(u.cardId||"")}}function fs(){var a,l;if(!i.activeExerciseReviewId||!i.activeExerciseReviewLevel)return null;const e=i.activeExerciseReviewLevel,t=i.activeExerciseReviewId;if(String(i.activeExerciseReviewSource||"textbook")==="reading"){const c=Ud(t,e),u=c?hn(c):((a=i.progress.readingExercises)==null?void 0:a[t])||null;return ko(e,t,(u==null?void 0:u.lessonId)||(c==null?void 0:c.sourceId)||"",u,c,"reading")}const s=K$(e),r=((l=s==null?void 0:s.exerciseSrs)==null?void 0:l[t])||null;return ko(e,t,(r==null?void 0:r.lessonId)||"",r,null,"textbook")}function $o(e){var t;return!e||e.kind!=="exercise"?null:ko(e.level,e.exerciseId,e.lessonId||((t=e.progress)==null?void 0:t.lessonId)||"",e.progress,e.exercise||null,e.source||"textbook")}function Ok(e){var t,n;if(!e||typeof e!="object")return null;if(e.kind==="card"){const s=String(((t=e.card)==null?void 0:t.id)||e.cardId||((n=e.progress)==null?void 0:n.cardId)||""),r=ae(s);if(!(r!=null&&r.id))return null;const a=e.progress||O(r.id);return{...e,kind:"card",key:e.key||`card:${r.id}`,card:r,cardId:String(r.id),progress:a,dueAt:e.dueAt||(a.dueAt?new Date(a.dueAt).getTime():0)}}return e.kind==="exercise"?$o(e):null}function lr(e){return(Array.isArray(e)?e:[]).map(Ok).filter(Boolean)}function Kk(e){var a;const t=lr(e),n=fs();if(n&&((a=i.reviewExerciseResults)!=null&&a[n.exerciseId])||n&&!t.some(l=>l.kind==="exercise"&&l.exerciseId===n.exerciseId&&l.level===n.level))return n;const s=i.activeCardId?t.find(l=>{var c;return l.kind==="card"&&((c=l.card)==null?void 0:c.id)===i.activeCardId}):null;if(s)return s;const r=i.reviewQueueLastKind==="card"?"exercise":i.reviewQueueLastKind==="exercise"?"card":"";if(r){const l=t.find(c=>c.kind===r);if(l)return l}return t[0]||n||null}function Bk(e,t){const n=Y(e);return n==="N5"?au(t):n==="N4"?$u(t):n==="N3"?Mu(t):n==="N2"?Hu(t):""}function Fk(e){return m()==="ru"?(e==null?void 0:e.kind)==="cloze"?"Предложение":"Вопрос":(e==null?void 0:e.kind)==="cloze"?"Sentence":"Question"}function yo(){return m()==="ru"?"Перевод":"Translation"}function hd(e){const t=String(e||"").trim();return t?t.split(/([гЂ'пјЃпјџгЂЃ\n]+)/u).map(n=>{if(!n)return"";if(/^[гЂ'пјЃпјџгЂЃ\n]+$/u.test(n))return n===`
`?`
`:`${n} `;const s=sp(n);return s?`${s} `:""}).join("").replace(/\s+\n/gu,`
`).replace(/[ \t]+/gu," ").replace(/\s+([гЂ'пјЃпјџгЂЃ])/gu,"$1 ").replace(/([гЂ'пјЃпјџгЂЃ])\s*$/gu,"$1").trim():""}function zk(e){const t=!!i.activeExerciseReviewTranslationOpen,n=e!=null&&e.reading?ne(e.reading):"",s=e!=null&&e.reading?hd(e.reading):"",r=w({ru:(e==null?void 0:e.translationRu)||(e==null?void 0:e.ru)||"",en:(e==null?void 0:e.translationEn)||(e==null?void 0:e.en)||""});return`
      <div class="reading-translation-wrap">
        <button class="btn ghost reading-translation-toggle" type="button" data-action="toggle-reading-translation">${o(yo())}</button>
        ${t?`
          <div class="reading-translation-panel">
            <div class="reading-translation-row">
              <span>${o(m()==="ru"?"Хирагана":"Hiragana")}</span>
              <strong>${o(n||(m()==="ru"?"Нет данных":"No data"))}</strong>
            </div>
            <div class="reading-translation-row">
              <span>Romaji</span>
              <strong>${o(s||(m()==="ru"?"Нет данных":"No data"))}</strong>
            </div>
            <div class="reading-translation-row">
              <span>${o(m()==="ru"?"Перевод":"Translation")}</span>
              <strong>${o(r||(m()==="ru"?"Нет данных":"No data"))}</strong>
            </div>
          </div>
        `:""}
      </div>
    `}function Jk(e){var t;return((t=i.reviewExerciseResults)==null?void 0:t[e.exerciseId])||hn(e.exercise)||null}function Uk(e,t,n,s){var p,d;const r=String((t==null?void 0:t.id)||n),a=((p=s==null?void 0:s.answers)==null?void 0:p[r])||null,l=Array.isArray(t==null?void 0:t.options)?t.options:[],c=l.find(g=>String(g.value||"")===String((t==null?void 0:t.answer)||"")),u=c?w(c.label||c):String((t==null?void 0:t.answer)||"");return`
      <div class="n4-question-block reading-question-block">
        <h3>${o(w((t==null?void 0:t.prompt)||((d=e.exercise.question)==null?void 0:d.prompt)||{}))}</h3>
        <div class="n5-option-grid">
          ${l.map(g=>{const f=(a==null?void 0:a.selected)===g.value,v=(a==null?void 0:a.correct)&&g.value===t.answer,b=a&&!a.correct&&g.value===t.answer;return`<button class="btn ${v||b?"success":f?"warning":"ghost"}" type="button" data-action="reading-review-answer" data-question="${h(r)}" data-value="${h(g.value)}" ${a||s!=null&&s.completed?"disabled":""}>${o(w(g.label||g))}</button>`}).join("")}
        </div>
        ${a?`<p class="n5-feedback">${o(a.correct?m()==="ru"?"Верно.":"Correct.":`${m()==="ru"?"Неверно":"Wrong"} · ${u}`)}</p>`:""}
      </div>
    `}function Gk(e){var S;const t=$o(e);if(!t||!t.exercise)return hs();const n=Jk(t),s=!!(n!=null&&n.completed),r=t.progress||hn(t.exercise),a=Fk(t.exercise),l=w(t.exercise.sourceTitle||t.exercise.title||{}),c=ht(t.exercise),u=(t.exercise.kind==="question"?[t.exercise.question||((S=t.exercise.questions)==null?void 0:S[0])]:[]).filter(j=>j==null?void 0:j.id),p=t.exercise.kind==="cloze"||!u.length&&c.length>0;if(!p&&!u.length)return hs();const d=p?s?1:Array.isArray(r==null?void 0:r.selectedIndices)?r.selectedIndices.length:0:Object.keys((n==null?void 0:n.answers)||{}).length,g=p?Math.max(1,c.length):Math.max(1,u.length),f=Array.isArray(r==null?void 0:r.selectedIndices)?r.selectedIndices:Array.isArray(i.activeExerciseReviewSelection)?i.activeExerciseReviewSelection:[],v=f.map(j=>{var k;return(k=t.exercise.tiles)==null?void 0:k[j]}).filter(Boolean),b=Array.isArray(r==null?void 0:r.wrongIndexes)?r.wrongIndexes:[],$=zk(t.exercise);return`
      <article class="study-card textbook-review-card reading-review-card ${s?(n==null?void 0:n.correct)===!1?"is-wrong":"is-correct":""}" data-review-exercise-id="${h(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${o(t.level)}</span>
          <span class="pill">${o(l||a)}</span>
          <span class="pill">${o(r.state)} · ${o(Hn(r.dueAt))}</span>
          <span class="pill">${o(d)}/${o(g)}</span>
        </div>
        ${$}
        ${p?`
          <div class="sentence-card reading-cloze-card">
            <div class="sentence-line">${ad(t.exercise,v,b)}</div>
            <p class="sentence-reading">${o(t.exercise.reading||"")}</p>
            <p class="sentence-translation">${o(w({ru:t.exercise.translationRu||t.exercise.ru||"",en:t.exercise.translationEn||t.exercise.en||""}))}</p>
          </div>
          <div class="sentence-tiles">
            ${(t.exercise.tiles||[]).map((j,k)=>{const x=f.includes(k),T=b.includes(k);return`
                <button class="sentence-tile ${x?"is-used":""} ${T?"is-wrong":""}" type="button" data-action="reading-review-tile" data-index="${k}" ${x||s?"disabled":""}>
                  <span>${o(j.reading||"")}</span>
                  <strong>${o(j.kanji)}</strong>
                </button>
              `}).join("")}
          </div>
          <div class="sentence-feedback">
            ${o(n!=null&&n.completed?n.correct?m()==="ru"?"Верно. Предложение собрано правильно.":"Correct. The sentence is complete.":m()==="ru"?"Проверь красные места и попробуй ещё раз.":"Check the red slots and try again.":m()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.")}
          </div>
          <div class="actions sentence-actions">
            <button class="btn primary" type="button" data-action="reading-review-check" ${s?"disabled":""}>${o(m()==="ru"?"Проверить":"Check")}</button>
            <button class="btn" type="button" data-action="reading-review-undo" ${!f.length||s?"disabled":""}>${o(m()==="ru"?"Убрать":"Undo")}</button>
            <button class="btn" type="button" data-action="reading-review-clear" ${!f.length||s?"disabled":""}>${o(m()==="ru"?"Очистить":"Clear")}</button>
          </div>
        `:u.map((j,k)=>Uk(t,j,k,n)).join("")}
        ${s?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${o(m()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function Hk(e){var s;const t=$o(e);if(!t||!t.exercise)return hs();if(t.source==="reading")return Gk(t);const n=!!((s=i.reviewExerciseResults)!=null&&s[t.exerciseId]);return`
      <article class="study-card textbook-review-card" data-review-exercise-id="${h(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${o(t.level)}</span>
          <span class="pill">${o(t.lessonId||t.progress.lessonId||"")}</span>
          <span class="pill">${o(t.progress.state)} · ${o(Hn(t.progress.dueAt))}</span>
        </div>
        ${Bk(t.level,t.exercise)}
        ${n?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${o(m()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function Qk(e){return`
      <article class="empty-state">
          <span class="kanji-char">⚠</span>
        <h2>${o(De("eva","lessonComplete"))}</h2>
        <p>${o(e?yr(e):"")}</p>
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="review">↻ ${o(A("review"))}</button>
          <button class="btn" type="button" data-action="route" data-route="dictionary">文 ${o(A("dictionary"))}</button>
        </div>
      </article>
    `}function hs(){return`
      <article class="empty-state">
        <span class="kanji-char">休</span>
        <h2>${o(m()==="ru"?"Повторов сейчас нет":"No reviews right now")}</h2>
        <p>${o(De("leya","welcome"))}</p>
        <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${o(A("learn"))}</button>
      </article>
    `}function Xk(){const e=$y(),t=Math.max(Rs,Number(i.dictionaryVisibleCount||Rs)),n=e.slice(0,t),s=n.length<e.length,r=i.cards.filter(p=>!!i.progress.favorites[p.id]).length,a=["all",...new Set(i.cards.map(p=>p.jlpt))],l=["all",...new Set(i.cards.map(p=>vr(p.id).radical).filter(Boolean))],c=m()==="ru"?`Показано ${n.length} из ${e.length}`:`Showing ${n.length} of ${e.length}`,u=m()==="ru"?"Показать ещё":"Show more";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${o(A("dictionary"))}</h1>
            <p>${o(c)} · ${e.length}/${i.cards.length}</p>
          </div>
        </div>
        ${Wk(r)}
        <div class="filters">
          <div class="field">
            <label for="dictionarySearch">${o(A("search"))}</label>
            <input id="dictionarySearch" data-filter="query" type="search" value="${h(i.filters.query)}" placeholder="日, にち, sun" autocomplete="off" />
          </div>
          <div class="field">
            <label for="jlptFilter">JLPT</label>
            <select id="jlptFilter" data-filter="jlpt">
              ${a.map(p=>`<option value="${h(p)}" ${Lr(p,i.filters.jlpt)}>${o(p==="all"?A("all"):p)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="strokeFilter">${o(A("strokes"))}</label>
            <select id="strokeFilter" data-filter="strokes">
              ${[["all",A("all")],["1-4","1-4"],["5-8","5-8"],["9-12","9-12"],["13+","13+"]].map(([p,d])=>`<option value="${p}" ${Lr(p,i.filters.strokes)}>${o(d)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="radicalFilter">${o(A("radical"))}</label>
            <select id="radicalFilter" data-filter="radical">
              ${l.map(p=>`<option value="${h(p)}" ${Lr(p,i.filters.radical)}>${o(p==="all"?A("all"):p)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="favoriteFilter">${o(A("favorites"))}</label>
            <select id="favoriteFilter" data-filter="favorites">
              <option value="all" ${Lr("all",i.filters.favorites)}>${o(A("all"))}</option>
              <option value="yes" ${Lr("yes",i.filters.favorites)}>★</option>
            </select>
          </div>
        </div>
        <div class="dictionary-grid" style="margin-top:12px">${n.map(qk).join("")||Yk()}</div>
        ${s?`
          <div class="dictionary-load-more">
            <span>${o(c)}</span>
            <button class="btn primary" type="button" data-action="dictionary-load-more">${o(u)}</button>
          </div>
        `:""}
      </section>
    `}function Wk(e){const t=i.filters.favorites==="yes",n=m()==="ru"?"Все кандзи":"All kanji",s=m()==="ru"?"Избранные":"Favorites";return`
      <div class="dictionary-tabs" role="tablist" aria-label="${h(A("dictionary"))}">
        <button class="btn ${t?"":"is-active"}" type="button" role="tab" aria-selected="${t?"false":"true"}" data-action="dictionary-favorites-tab" data-favorites="all">
          ${o(n)}
          <span class="dictionary-tab-count">${i.cards.length}</span>
        </button>
        <button class="btn ${t?"is-active":""}" type="button" role="tab" aria-selected="${t?"true":"false"}" data-action="dictionary-favorites-tab" data-favorites="yes">
          ★ ${o(s)}
          <span class="dictionary-tab-count">${e}</span>
        </button>
      </div>
    `}function qk(e){const t=O(e.id),n=vr(e.id),s=!!i.progress.favorites[e.id];return`
      <button class="kanji-tile" type="button" data-action="open-card" data-id="${h(e.id)}">
        ${Vk(e)}
        <div class="tag-row">
          ${Gi(t.state)}
          <span class="pill">${o(e.jlpt)}</span>
          <span class="pill">${e.strokes} ${o(A("strokes"))}</span>
          <span class="pill">${o(A("radical"))}: ${o(n.radical||"-")}</span>
          <span class="pill">${o(A("learnedStatus"))}: ${o(Np(t.state))}</span>
          <span class="pill">${s?"★":"☆"}</span>
        </div>
      </button>
    `}function Vk(e){return`
      <span class="kanji-line">
        <span class="kanji-char">${o(e.kanji)}</span>
        <span>
          <h3>${o(P(e))}</h3>
          <p>${o(Bo(e))}</p>
          <span class="label">${o(el(e.lessonId))}</span>
        </span>
      </span>
    `}function Yk(){const e=i.filters.favorites==="yes",t=e?m()==="ru"?"В избранном пока пусто":"No favorites yet":m()==="ru"?"Ничего не найдено":"Nothing found",n=e?m()==="ru"?"Открой кандзи и нажми звездочку, чтобы он появился здесь.":"Open a kanji and tap the star to keep it here.":"";return`<article class="empty-state"><span class="kanji-char">無</span><h2>${o(t)}</h2>${n?`<p>${o(n)}</p>`:""}</article>`}function Zk(){const e=ae(i.kanjiPageId||dl());if(!e)return`
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">無</span>
            <h1>${o(m()==="ru"?"Кандзи не найден":"Kanji not found")}</h1>
            <p>${o(m()==="ru"?"Открой словарь и выбери карточку заново.":"Open the dictionary and choose a card again.")}</p>
            <button class="btn primary" type="button" data-action="route" data-route="dictionary">⋯ ${o(A("dictionary"))}</button>
          </article>
        </section>
      `;const t=O(e.id),n=vr(e.id),s=!!i.progress.favorites[e.id],r=f$(e,m()),a=e$(e),l=Ro(e);return`
      <section class="page kanji-page">
        <div class="section-head kanji-page-head">
          <div>
            <button class="btn ghost" type="button" data-action="route" data-route="dictionary">← ${o(A("dictionary"))}</button>
            <h1>${o(a?`${e.kanji} — ${t$(a)}`:e.kanji)}</h1>
            <p>${o(a?n$(a):P(e))}</p>
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="study-card" data-id="${h(e.id)}">▶ ${o(A("study"))}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${h(e.id)}">${s?"★":"☆"} ${o(A("favorites"))}</button>
          </div>
        </div>

        <article class="kanji-profile-card">
          <div class="kanji-profile-hero">
            <div class="kanji-profile-char" aria-label="${h(e.kanji)}">${o(e.kanji)}</div>
            <div class="kanji-profile-summary">
              <div class="tag-row">
                ${Gi(t.state)}
                <span class="pill">${o(e.jlpt)}</span>
                <span class="pill">${e.strokes} ${o(A("strokes"))}</span>
                <span class="pill">${o(A("radical"))}: ${o(n.radical||"-")} ${o(w(n.radicalMeaning||{}))}</span>
                ${a?`<span class="pill">Grade ${o(a.kanjidic2.grade||"-")}</span><span class="pill">Freq ${o(a.kanjidic2.freq||"-")}</span>`:""}
              </div>
              <h2>${o(P(e))}</h2>
              <p>${o(jr(e))}</p>
              ${yi(e)}
              ${So(e)}
            </div>
          </div>
        </article>

        <div class="kanji-profile-grid">
          ${a?s$(a):""}
          ${a?r$(a):""}
          <article class="kanji-profile-card">
            <h2>${o(A("examples"))}</h2>
            <ul class="example-list">${e.examples.map(Si).join("")||`<li>${o(m()==="ru"?"Примеры пока не добавлены.":"No examples yet.")}</li>`}</ul>
          </article>

          <article class="kanji-profile-card">
            <h2>${o(m()==="ru"?"Предложения":"Sentences")}</h2>
            ${a?i$(a):u$(e)}
          </article>

          <article class="kanji-profile-card">
            <h2>${o(A("strokeOrder"))}</h2>
            <p class="label">${o(l?m()==="ru"?"Есть точные SVG-штрихи KanjiVG для практики.":"Precise KanjiVG SVG stroke data is available for practice.":m()==="ru"?"Точного SVG-пути пока нет, доступен полупрозрачный шаблон.":"Precise SVG paths are not available yet; template mode is available.")}</p>
            <ol class="stroke-list">${mr(e).map(c=>`<li>${o(c)}</li>`).join("")}</ol>
            <div class="actions compact-actions">
              ${ji(e)}
            </div>
          </article>

          <article class="kanji-profile-card">
            <h2>${o(A("apps"))}</h2>
            <p>${o(jr(e))}</p>
            <ul class="app-list">${e.apps.map(c=>`<li>${o(c)}</li>`).join("")}</ul>
            ${a?o$(a):""}
            <h3>${o(m()==="ru"?"SEO-страница":"SEO page")}</h3>
            <p class="label">${o(m()==="ru"?"Статическая HTML-страница для поисковиков и превью.":"Static HTML page for search engines and link previews.")}</p>
            <a class="btn primary" href="${h(r)}" target="_blank" rel="noopener">в†— ${o(m()==="ru"?"Публичная страница":"Public page")}</a>
          </article>
          ${a?l$(a):""}
        </div>
      </section>
    `}function e$(e){var t;return((t=i.kanjiPageSources)==null?void 0:t[e==null?void 0:e.kanji])||null}function t$(e){return wd(e.meanings)[0]||e.literal}function wd(e){return e?e[m()]||e.ru||e.en||[]:[]}function ws(e){return!e||typeof e!="object"?String(e||""):e[m()]||e.ru||e.en||""}function n$(e){var n,s,r;const t=((n=e.editorial)==null?void 0:n[m()])||((s=e.editorial)==null?void 0:s.ru)||((r=e.editorial)==null?void 0:r.en)||{};return[t.why,t.firstSeen].filter(Boolean).join(" ")}function s$(e){var s,r,a,l;const t=e.kanjidic2||{},n=((s=t.codepoints)==null?void 0:s.unicode)||`U+${((r=t.codepoints)==null?void 0:r.ucs)||""}`;return`
      <article class="kanji-profile-card kanji-facts-card">
        <h2>${o(m()==="ru"?"Факты KANJIDIC2":"KANJIDIC2 facts")}</h2>
        <dl class="kanji-fact-grid">
          <div><dt>${o(m()==="ru"?"Значения":"Meanings")}</dt><dd>${o(wd(e.meanings).join(", "))}</dd></div>
          <div><dt>Onyomi</dt><dd>${o((((a=e.readings)==null?void 0:a.onyomi)||[]).join(" / "))}</dd></div>
          <div><dt>Kunyomi</dt><dd>${o((((l=e.readings)==null?void 0:l.kunyomi)||[]).join(" / "))}</dd></div>
          <div><dt>JLPT</dt><dd>${o(e.jlpt)} <small>${o(ws(e.modernJlptNote||{}))}</small></dd></div>
          <div><dt>${o(A("strokes"))}</dt><dd>${o(t.strokeCount||"-")}</dd></div>
          <div><dt>${o(A("radical"))}</dt><dd>${o(`${t.radical||"-"} ${t.radicalLiteral||""} ${ws(t.radicalName||{})}`)}</dd></div>
          <div><dt>Grade</dt><dd>${o(t.grade||"-")}</dd></div>
          <div><dt>Unicode</dt><dd>${o(n)}</dd></div>
          <div><dt>Freq</dt><dd>${o(t.freq||"-")}</dd></div>
          <div><dt>${o(m()==="ru"?"Варианты":"Variants")}</dt><dd>${o((e.variants||[]).join(" / ")||"-")}</dd></div>
        </dl>
        <p class="source-note">${o(t.source||"KANJIDIC2 / EDRDG")}</p>
      </article>
    `}function r$(e){return`
      <article class="kanji-profile-card">
        <h2>${o(m()==="ru"?"Полезные слова JMdict":"Useful JMdict words")}</h2>
        <ul class="kanji-word-list">
          ${(e.commonWords||[]).slice(0,10).map(t=>`
            <li>
              <a href="${h(c$(t))}">
                <b>${jo(t.surface,e.literal)}</b>
                <span>${o(t.reading)} · ${o(ws(t.gloss||{}))}</span>
                <small>${o(t.partOfSpeech||"")} · JMdict ${o(t.jmdictSeq||"")}</small>
              </a>
            </li>
          `).join("")}
        </ul>
      </article>
    `}function i$(e){return`
      <ul class="kanji-sentence-list">
        ${a$(e).map(n=>`
          <li>
            <strong>${jo(n.japanese,e.literal)}</strong>
            <small>${o(ws(n.translation||{}))}</small>
            <span class="source-note">${o(`${n.sourceName||"Tatoeba"} #${n.sourceId}${n.author?` · ${n.author}`:""}${n.license?` · ${n.license}`:""}`)}</span>
          </li>
        `).join("")}
      </ul>
    `}function a$(e){const t=new Set,n=new Set((e.commonWords||[]).map(s=>s.surface));return(e.sentences||[]).filter(s=>{const r=s.japanese||"";if(!r.includes(e.literal)||t.has(r))return!1;t.add(r);const a=r.replace(/[\sгЂ'гЂЃпјЃпјџ!?гЂЊгЂЌгЂЋгЂЏпј€пј‰()гѓ»гЂњгѓј]/g,"").length;return!(a<3||a>44)}).sort((s,r)=>Number(vd(r.japanese,n))-Number(vd(s.japanese,n))).slice(0,8)}function vd(e,t){return[...t].some(n=>e.includes(n))}function o$(e){return`
      <h3>${o(m()==="ru"?"В интерфейсах":"In interfaces")}</h3>
      <div class="interface-mock-grid">
        ${(e.interfaceContexts||[]).slice(0,6).map(t=>`
          <article class="interface-mock-card ${h(t.type||"card")}">
            <span>${o(ws(t.title||{}))}</span>
            <strong>${jo(t.japanese,e.literal)}</strong>
            <small>${o(ws(t.translation||{}))}</small>
          </article>
        `).join("")}
      </div>
    `}function l$(e){var r,a,l;const t=((r=e.editorial)==null?void 0:r[m()])||((a=e.editorial)==null?void 0:a.ru)||((l=e.editorial)==null?void 0:l.en)||{},n=m()==="ru"?["Почему этот кандзи важен","Частая путаница","Где встретишь раньше всего","На что обратить внимание"]:["Why this kanji matters","Common confusion","Where you will meet it first","What to watch"],s=[t.why,t.confusion,t.firstSeen,t.focus];return`
      <article class="kanji-profile-card editorial-card">
        <h2>${o(m()==="ru"?"Заметки Flash Kanji":"Flash Kanji notes")}</h2>
        ${s.map((c,u)=>c?`<section><h3>${o(n[u])}</h3><p>${o(c)}</p></section>`:"").join("")}
      </article>
    `}function c$(e){return`../word/${encodeURIComponent(e.surface||"")}/`}function jo(e,t){const n=String(t||""),s=String(e||"");return n?s.split(n).map(o).join(`<mark class="kanji-hit" data-kanji="${h(n)}">${o(n)}</mark>`):o(s)}function u$(e){const t=d$(e);return t.length?`
      <ul class="kanji-sentence-list">
        ${t.map(n=>`
          <li>
            <strong>${m$(n)}</strong>
            <span>${o(p$(n))}</span>
            <small>${o(g$(n))}</small>
          </li>
        `).join("")}
      </ul>
    `:`<p class="label">${o(m()==="ru"?"Подходящие предложения появятся, когда база практики содержит этот кандзи.":"Matching sentences will appear when the practice database contains this kanji.")}</p>`}function d$(e){const t=(e==null?void 0:e.kanji)||"";return t?(i.sentenceExercises||[]).filter(n=>{const s=bd(n),r=(n.blanks||[]).flatMap(a=>a.answer||[]).join("");return s.includes(t)||r.includes(t)}).slice(0,6):[]}function bd(e){return(e==null?void 0:e.sentence)||(e==null?void 0:e.jp)||""}function p$(e){return(e==null?void 0:e.reading)||(e==null?void 0:e.hiragana)||""}function g$(e){return m()==="en"?(e==null?void 0:e.translationEn)||(e==null?void 0:e.en)||(e==null?void 0:e.translationRu)||(e==null?void 0:e.ru)||"":(e==null?void 0:e.translationRu)||(e==null?void 0:e.ru)||(e==null?void 0:e.translationEn)||(e==null?void 0:e.en)||""}function m$(e){let t=o(bd(e));return((e==null?void 0:e.blanks)||[]).map(s=>(s.answer||[]).join("")).forEach(s=>{t=t.replace("___",`<mark>${o(s)}</mark>`)}),t}function f$(e,t="ru"){return`../${t==="en"?"en":"ru"}/kanji/${h$(e)}/`}function h$(e){const t=String((e==null?void 0:e.kanji)||""),n=Array.from(t).map(a=>`u${a.codePointAt(0).toString(16).padStart(4,"0")}`).join("-"),r=(String((e==null?void 0:e.romaji)||(e==null?void 0:e.onyomi_romaji)||(e==null?void 0:e.kunyomi_romaji)||"kanji").toLowerCase().split(/[\/,;|()\s]+/).find(a=>/[a-z]/.test(a))||"kanji").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"kanji";return`${n||"kanji"}-${r}`}function w$(){const e=ae(i.activeCardId)||Eo()[0]||i.cards[0];e&&(i.activeCardId=e.id,i.activeLessonId=e.lessonId,i.writingStep=ge(i.writingStep,0,Math.max(0,wt(e)-1)));const t=Ro(e),n=wt(e),s=m()==="ru"?"Шаг":"Step",r=m()==="ru"?"Получилось":"Got it",a=m()==="ru"?"Показать образец":"Show sample",l=t?m()==="ru"?"Точные SVG-штрихи KanjiVG":"Precise KanjiVG SVG strokes":m()==="ru"?"Fallback: шаблон без фейковых штрихов":"Fallback: template without fake strokes";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${o(A("writingPractice"))}</h1>
            <p>${o(e?`${e.kanji} · ${P(e)}`:"")}</p>
          </div>
        </div>
        <div class="writing-layout">
          <article class="writing-card" data-section="writing-demo">
            <div class="kanji-focus writing-focus">${o((e==null?void 0:e.kanji)||"文")}</div>
            ${e?yi(e):""}
            ${e?`<div class="actions"><button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${h(e.id)}">🔊 ${o(A("audio"))}</button></div>`:""}
            <div class="stroke-demo">
              <canvas id="strokeCanvas" width="520" height="280" aria-label="stroke order animation"></canvas>
            </div>
            <div class="writing-step-panel">
              <div class="writing-step-head">
                <span class="pill" id="writingStepCounter">${s} ${i.writingStep+1}/${n}</span>
                <span class="label">${o(mr(e)[i.writingStep]||"")}</span>
                <span class="writing-mode-note">${o(l)}</span>
              </div>
              <div class="writing-step-actions">
                <button class="btn" type="button" data-action="writing-step-prev">←</button>
                <button class="btn primary" type="button" data-action="play-writing-step">${o(a)}</button>
                <button class="btn" type="button" data-action="writing-step-next">→</button>
              </div>
            </div>
            <div class="actions">
              <button class="btn primary" type="button" data-action="replay-writing">${o(A("replay"))}</button>
            </div>
          </article>
          <article class="writing-card">
            <h3>${o(A("strokeOrder"))}</h3>
            ${e?v$(e):""}
            <h3>${o(A("hint"))}</h3>
            <p>${o(Mi(e==null?void 0:e.id).hint)}</p>
            <h3>${o(A("mnemonic"))}</h3>
            <p>${o(Mi(e==null?void 0:e.id).mnemonic)}</p>
          </article>
          <article class="writing-card writing-practice" data-section="writing-canvas">
            <h3>${o(m()==="ru"?"Поле письма":"Writing area")}</h3>
            <div class="writing-practice-head">
              <span class="pill" id="writingStrokeCounter">0/${n}</span>
            </div>
            <div class="writing-score" id="writingScore">
              <span>0%</span>
              <i style="width:0%"></i>
            </div>
            <canvas id="practiceCanvas" width="520" height="360" aria-label="writing canvas"></canvas>
            <div class="actions writing-practice-actions">
              <button class="btn primary" type="button" data-action="check-writing">${o(r)}</button>
              <button class="btn" type="button" data-action="undo-writing">${o(m()==="ru"?"Отменить черту":"Undo stroke")}</button>
              <button class="btn" type="button" data-action="clear-writing">${o(A("clear"))}</button>
              <button class="btn" type="button" data-action="replay-writing">${o(A("replay"))}</button>
            </div>
            <div class="writing-feedback" id="writingFeedback">${o(m()==="ru"?"Напиши кандзи поверх образца и нажми «Получилось» для самопроверки.":"Write over the guide and tap 'Got it' for self-check.")}</div>
          </article>
        </div>
      </section>
    `}function v$(e){return`
      <ol class="stroke-list writing-guide-list">
        ${mr(e).map((n,s)=>`
          <li class="${s===i.writingStep?"is-active":""}">
            <button type="button" data-action="select-writing-step" data-index="${s}">
              <b>${s+1}</b>
              <span>${o(n)}</span>
            </button>
          </li>
        `).join("")}
      </ol>
    `}function b$(){if(!i.detailCardId)return"";const e=ae(i.detailCardId);if(!e)return"";const t=O(e.id),n=vr(e.id),s=!!i.progress.favorites[e.id];return`
      <div class="detail-backdrop">
        <article class="detail-sheet" role="dialog" aria-modal="true">
          <div class="detail-title">
            <span class="kanji-char">${o(e.kanji)}</span>
            <div>
              <span class="pill">${o(e.jlpt)}</span> ${Gi(t.state)}
              <h2>${o(P(e))}</h2>
              <p>${o(Bo(e))} · ${e.strokes} ${o(A("strokes"))}</p>
              <p><span class="pill">${o(A("radical"))}: ${o(n.radical||"-")} ${o(w(n.radicalMeaning||{}))}</span></p>
            </div>
          </div>
          ${yi(e)}
          ${So(e)}
          <h3>${o(A("strokeOrder"))}</h3>
          <ol class="stroke-list">${e.stroke_order.map(r=>`<li>${o(r)}</li>`).join("")}</ol>
          <h3>${o(A("examples"))}</h3>
          <ul class="example-list">${e.examples.map(Si).join("")}</ul>
          <h3>${o(A("apps"))}</h3>
          <p>${o(jr(e))}</p>
          <ul class="app-list">${e.apps.map(r=>`<li>${o(r)}</li>`).join("")}</ul>
          <div class="actions" style="margin-top:14px">
            <button class="btn primary" type="button" data-action="study-card" data-id="${h(e.id)}">▶ ${o(A("study"))}</button>
            <button class="btn" type="button" data-action="open-kanji-page" data-id="${h(e.id)}">↗ ${o(m()==="ru"?"Страница":"Page")}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${h(e.id)}">${s?"★":"☆"} ${o(A("favorites"))}</button>
            ${ji(e)}
            <button class="btn" type="button" data-action="close-detail">OK</button>
          </div>
        </article>
      </div>
    `}function So(e){const t=Fo(e),n=$s(e);return`
      <section class="audio-panel">
        <h3>${o(A("audio"))}</h3>
        <div class="actions">
          ${t?`<button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${h(e.id)}">🔊 Kanji</button>`:""}
          ${k$(e,n)}
          ${!t&&!n.length?`<span class="label">${o(m()==="ru"?"Озвучка для этой карточки пока не найдена.":"Audio for this card is not available yet.")}</span>`:""}
        </div>
      </section>
    `}function k$(e,t=$s(e)){return t.length?`
          <div class="reading-tts-list" aria-label="${h(m()==="ru"?"Системная озвучка чтений":"System reading TTS")}">
            ${t.map(n=>`
              <button class="btn ghost reading-tts-choice" type="button" data-action="play-kanji-audio" data-id="${h(e.id)}" data-tts-text="${h(n.kana)}" data-tts-label="${h(No(n))}">
                <span>${o(No(n))}</span>
                ${o(n.kana)}
              </button>
            `).join("")}
          </div>
        `:""}function No(e){return e.kind==="onyomi"?Ei("onyomi"):e.kind==="kunyomi"?Ei("kunyomi"):e.label||"TTS"}function $$(){const e=Do(),t=Et(),n=Ot();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${o(A("stats"))}</h1>
            <p>${o(A("xp"))} · ${o(A("level"))} · ${o(A("coins"))}</p>
          </div>
          <div class="actions">
            ${Ns("stats")}
            <button class="btn primary" type="button" data-action="route" data-route="achievements">в—ђ ${o(A("achievements"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${E(A("xp"),`${n.current}/${n.next}`,`${A("level")} ${i.progress.level}`,n.percent)}
          ${E(A("streak"),i.progress.streak.current,`${i.progress.streak.best} best`,D(i.progress.streak.current,30))}
          ${E(A("mastered"),e.mastered,`${e.total}`,D(e.mastered,e.total))}
          ${E(A("successRate"),`${Xd()}%`,`${Oo()} reviews`,Xd())}
          ${E(A("errors"),t.mistakes||0,`${i.progress.totalWrong} total`,D(t.mistakes||0,Math.max(t.reviews||1,1)))}
        </div>
        <div class="stats-grid" style="margin-top:12px">
          <article class="chart-panel"><h3>${o(A("activity"))}</h3><div class="chart-box"><canvas id="activityChart"></canvas></div></article>
          <article class="chart-panel"><h3>${o(A("streak"))}</h3><div class="chart-box"><canvas id="streakChart"></canvas></div></article>
          <article class="chart-panel"><h3>${o(A("jlptProgress"))}</h3><div class="chart-box"><canvas id="jlptChart"></canvas></div></article>
          <article class="chart-panel"><h3>Повторение</h3><div class="chart-box"><canvas id="stateChart"></canvas></div></article>
          <article class="chart-panel"><h3>${o(A("errors"))}</h3><div class="chart-box"><canvas id="mistakeChart"></canvas></div></article>
          <article class="tool-panel">${j$()}</article>
          <article class="tool-panel" data-section="shop-panel">${N$()}</article>
          <article class="tool-panel">${yd()}</article>
          <article class="tool-panel">
            <h3>${o(A("settings"))}</h3>
            <div class="settings-list">
              <div class="settings-row">
                <span>
                  <strong>${o(Zt().badge)}</strong>
                  <small>${o(Zt().hint)}</small>
                </span>
                <span class="pill">${o(Zt().status)}</span>
              </div>
              <div class="settings-row">
                <span>
                  <strong>${o(m()==="ru"?"Звуки интерфейса":"UX sounds")}</strong>
                  <small>${o(m()==="ru"?"Клики, ответы, награды и уведомления.":"Clicks, answers, rewards, and in-app notices.")}</small>
                </span>
                <button class="btn ${Ji()?"success":"ghost"}" type="button" data-action="toggle-ux-sound">${Ji()?"On":"Off"}</button>
              </div>
              <div class="settings-row">
                <span>
                  <strong>${o(m()==="ru"?"Экскурсия":"Onboarding")}</strong>
                  <small>${o(m()==="ru"?"Повторить первое знакомство СЃ Flash Kanji.":"Replay the first-time tour.")}</small>
                </span>
                <button class="btn ghost" type="button" data-action="repeat-onboarding">${o(m()==="ru"?"Повторить":"Repeat tour")}</button>
              </div>
              <label class="settings-row settings-row-range">
                <span>
                  <strong>${o(m()==="ru"?"Громкость UX":"UX volume")}</strong>
                  <small>${o(m()==="ru"?"Не влияет на озвучку кандзи и музыку.":"Does not affect kanji voice or music.")}</small>
                </span>
                <input class="ux-volume-slider" type="range" min="0" max="100" step="5" value="${Math.round(Ui()*100)}" data-ux-volume />
                <strong class="volume-value" data-ux-volume-label>${Math.round(Ui()*100)}%</strong>
              </label>
            </div>
            <div class="actions">
              <button class="btn primary" type="button" data-action="export">⬇ ${o(A("export"))}</button>
              <button class="btn" type="button" data-action="import">⬆ ${o(A("import"))}</button>
              <button class="btn danger" type="button" data-action="reset">↺ ${o(A("reset"))}</button>
            </div>
          </article>
        </div>
      </section>
    `}function Bn(){var e,t;return(e=i.achievements)!=null&&e.length?i.achievements:((t=i.rewards)==null?void 0:t.achievements)||[]}function y$(){var t;return(t=i.achievementCategories)!=null&&t.length?i.achievementCategories:[...new Set(Bn().map(n=>n.category||"learning"))].map(n=>({id:n,title:{ru:n,en:n},icon:"moon"}))}function Co(e){return w(e.title||e.name||{ru:e.id,en:e.id})}function kd(e){return w(e.description||{})}function Ao(e){return{moon:"月",book:"ж›ё",memory:"記",flame:"зЃ«",star:"星",brush:"з­†",text:"文",lock:"йЌµ",eye:"眼"}[e]||"в—†"}function j$(){return`<h3>${o(A("achievements"))}</h3><div class="achievement-grid compact">${Bn().slice(0,8).map($d).join("")}</div>`}function S$(){const e=Bn(),t=lS(),n=e.reduce((s,r)=>({xp:s.xp+(r.rewardXp||0),coins:s.coins+(r.rewardFragments||0)}),{xp:0,coins:0});return`
      <section class="page achievements-page">
        <div class="section-head">
          <div>
            <h1>${o(A("achievements"))}</h1>
            <p>${o(m()==="ru"?"Лунные цели, секреты Евы и Леи, награды за прогресс.":"Moon goals, Eva and Leya secrets, and progress rewards.")}</p>
          </div>
          <div class="actions">
            ${Ns("achievements")}
            <button class="btn" type="button" data-action="route" data-route="stats">в–Ґ ${o(A("stats"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${E(A("achievements"),`${t}/${e.length}`,m()==="ru"?"открыто":"unlocked",D(t,e.length))}
          ${E("XP",n.xp,m()==="ru"?"в наградах":"in rewards",D(t,e.length))}
          ${E(A("coins"),n.coins,m()==="ru"?"в наградах":"in rewards",D(t,e.length))}
          ${E(m()==="ru"?"Секреты":"Secrets",`${e.filter(s=>s.secret&&Is(s.id)).length}/${e.filter(s=>s.secret).length}`,"Eva · Leya",D(e.filter(s=>s.secret&&Is(s.id)).length,Math.max(1,e.filter(s=>s.secret).length)))}
        </div>
        <div class="achievement-category-list">
          ${y$().map(s=>{const r=e.filter(l=>l.category===s.id);if(!r.length)return"";const a=r.filter(l=>Is(l.id)).length;return`
              <section class="achievement-category">
                <div class="section-head compact-head">
                  <div>
                    <h2>${Ao(s.icon)} ${o(w(s.title))}</h2>
                    <p>${a}/${r.length}</p>
                  </div>
                  <span class="pill">${D(a,r.length)}%</span>
                </div>
                <div class="achievement-grid expanded">${r.map(l=>$d(l,!0)).join("")}</div>
              </section>
            `}).join("")}
        </div>
      </section>
    `}function $d(e,t=!1){const n=Is(e.id),s=Rd(e),r=Math.max(1,Number(e.target||1)),a=D(s,r),l=Math.min(s,r),c=e.secret&&!n&&!t?m()==="ru"?"Секретное достижение":"Secret achievement":Co(e),u=e.secret&&!n&&!t?m()==="ru"?"Откроется при необычном действии.":"Unlocked by an unusual action.":kd(e);return`
      <div class="achievement ${n?"is-unlocked":""} ${e.secret?"is-secret":""}">
        <span class="achievement-icon">${Ao(e.icon)}</span>
        <strong>${o(c)}</strong>
        <small>${o(u)}</small>
        <div class="achievement-progress" aria-label="${h(`${l}/${r}`)}"><i style="width:${a}%"></i></div>
        <small class="achievement-reward">+${e.rewardXp||0} XP · +${e.rewardFragments||0} ${o(A("coins"))}</small>
      </div>
    `}function N$(){return Mc({closable:!1})}function yd(e={}){const t=e.limit||10,n=(i.progress.transactions||[]).slice(0,t);return`
      <h3>${o(A("transactions"))}</h3>
      <div class="transaction-list">
        ${n.map(s=>`
          <div class="transaction-row">
            <div>
              <strong>${o(C$(s))}</strong>
              <small>${o(Lj(s.at))}</small>
            </div>
            <span>${Number(s.coins||0)>=0?"+":""}${Number(s.coins||0)} Moon · ${Number(s.xp||0)>=0?"+":""}${Number(s.xp||0)} XP</span>
          </div>
        `).join("")||`<p>${o(m()==="ru"?"Пока нет операций.":"No transactions yet.")}</p>`}
      </div>
    `}function C$(e){if(e.label)return e.label;const t=String(e.reason||""),n=t.match(/^customization:[^:]+:(.+)$/);if(n){const s=ve(n[1]);if(s)return pt(s)}return t.startsWith("achievement:")?m()==="ru"?"Достижение":"Achievement":t.startsWith("daily_bonus")?m()==="ru"?"Ежедневный бонус":"Daily bonus":t.startsWith("sentence")?m()==="ru"?"Практика предложений":"Sentence practice":t.startsWith("writing")?m()==="ru"?"Практика письма":"Writing practice":t.startsWith("lesson")?m()==="ru"?"Урок":"Lesson":t.startsWith("review")?m()==="ru"?"Повторение":"Review":t.startsWith("shop:")?m()==="ru"?"Магазин":"Shop":m()==="ru"?"Операция":"Transaction"}function A$(){if(!i.rewardModal)return"";const e=i.rewardModal,t=e.type==="level",n=e.type==="achievement",s=Ot(),r=t?`${A("level")} ${i.progress.level} - ${s.current}/${s.next} XP - ${i.progress.moonFragments} ${A("coins")}`:e.message;return`
      <div class="reward-backdrop ${t?"is-level":""}">
        <article class="reward-modal ${t?"is-level":""} ${n?"is-achievement":""}">
          ${t?'<img class="reward-logo" src="assets/logo.webp" alt="Flash Kanji" />':""}
          ${n?`<div class="reward-achievement-icon">${Ao(e.icon)}</div>`:""}
          <div class="reward-modal-actions">
            ${t?`<button class="btn primary share-btn" type="button" data-action="share-achievement">${o(A("shareAchievement"))}</button>`:""}
            <button class="btn primary" type="button" data-action="close-reward">OK</button>
          </div>
          ${vs(e.mascot||"eva",e.mood||"happy",e.dialog||"achievement","reward-mascot")}
          <h2>${o(e.title)}</h2>
          <p>${o(r)}</p>
          <div class="reward-values">
            ${t?`<span>${o(A("level"))} ${i.progress.level}</span>`:""}
            ${e.xp?`<span>+${e.xp} XP</span>`:""}
            ${t?`<span>${s.current}/${s.next} XP</span>`:""}
            ${e.coins?`<span>+${e.coins} ${o(A("coins"))}</span>`:""}
            ${t?`<span>${i.progress.moonFragments} ${o(A("coins"))}</span>`:""}
          </div>
        </article>
      </div>
    `}function L$(){if(!i.contactModal)return"";const e=m()==="ru"?"Сообщить об ошибке":"Report a bug",t=m()==="ru"?"Если почтовое приложение не открывается, скопируй адрес и отправь сообщение вручную.":"If your mail app does not open, copy the address and send the message manually.",n=m()==="ru"?"Скопировать email":"Copy email",s=m()==="ru"?"Открыть почту":"Open email",r=m()==="ru"?"Закрыть":"Close",a=encodeURIComponent(Qp),l=encodeURIComponent(m()==="ru"?`Привет! Я нашел ошибку в Flash Kanji:

`:`Hi! I found an issue in Flash Kanji:

`),c=`mailto:${Ut}?subject=${a}&body=${l}`;return`
      <div class="reward-backdrop contact-backdrop">
        <article class="reward-modal contact-modal" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle" aria-describedby="contactModalDesc">
          <div class="contact-modal-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <rect x="3" y="5" width="18" height="14" rx="3" ry="3" fill="none" stroke="currentColor" stroke-width="2" />
              <path d="M4 7.5 12 13l8-5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </svg>
          </div>
          <h2 id="contactModalTitle">${o(e)}</h2>
          <p id="contactModalDesc">${o(t)}</p>
          <div class="contact-email-block">
            <strong>${o(Ut)}</strong>
            <small>${o(m()==="ru"?"Для багов, багрепортов и ошибок интерфейса.":"For bugs, bug reports, and UI issues.")}</small>
          </div>
          <div class="actions contact-modal-actions">
            <button class="btn ghost" type="button" data-action="copy-contact-email">${o(n)}</button>
            <a class="btn primary" href="${h(c)}">${o(s)}</a>
            <button class="btn" type="button" data-action="close-contact-modal">${o(r)}</button>
          </div>
        </article>
      </div>
    `}function I$(){if(!i.pwaInstallHelpVisible)return"";const e=Ls(),t=m()==="ru"?"Как установить приложение":"How to install the app",n=m()==="ru"?"Кнопка открыла подсказку, потому что браузер ещё не показал системное окно установки.":"The button opened a quick guide because the browser has not yet shown the system install prompt.",s=m()==="ru"?"Понятно":"Got it",r=e?m()==="ru"?["Открой Flash Kanji в Safari.","Нажми “Поделиться”, затем “На экран Домой”.","Подтверди установку."]:["Open Flash Kanji in Safari.","Tap Share, then choose Add to Home Screen.","Confirm the install."]:m()==="ru"?["Открой меню браузера.","Найди пункт “Установить приложение” или “Установить Flash Kanji”.","Подтверди установку."]:["Open the browser menu.","Choose Install app or Install Flash Kanji.","Confirm the install."];return`
      <div class="reward-backdrop contact-backdrop pwa-install-help-backdrop">
        <article class="reward-modal contact-modal pwa-install-help-modal" role="dialog" aria-modal="true" aria-labelledby="pwaInstallHelpTitle">
          <div class="contact-modal-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M12 4v9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
              <path d="M8.5 9.5 12 13l3.5-3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              <path d="M5 16.5h14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
            </svg>
          </div>
          <h2 id="pwaInstallHelpTitle">${o(t)}</h2>
          <p>${o(n)}</p>
          <ul class="pwa-install-help-list">
            ${r.map(a=>`<li>${o(a)}</li>`).join("")}
          </ul>
          <div class="actions contact-modal-actions">
            <button class="btn primary" type="button" data-action="close-pwa-install-help">${o(s)}</button>
          </div>
        </article>
      </div>
    `}function T$(){if(yc()||i.pwaInstallHelpVisible||!rl()||i.detailCardId||i.rewardModal||i.finalTestModal||i.contactModal)return"";const e=Ap(),t=!Ht&&Ls();return`
      <aside class="pwa-install-banner" role="dialog" aria-modal="false" aria-label="${h(e.title)}">
        <div class="pwa-install-logo"><img src="assets/logo.webp" alt="Flash Kanji" /></div>
        <div class="pwa-install-copy">
          <span class="pill">${o(e.badge)}</span>
          <h2>${o(e.title)}</h2>
          <p>${o(e.description)}</p>
          ${t?`<p class="pwa-install-instruction">${o(e.iosInstruction)}</p>`:""}
        </div>
        <div class="pwa-install-actions">
          <button class="btn primary" type="button" data-action="pwa-install">${o(e.install)}</button>
          <button class="btn ghost" type="button" data-action="pwa-later">${o(e.later)}</button>
        </div>
      </aside>
    `}function R$(){if(yc()||!i.notificationPromptVisible||!Xi("visible")||i.detailCardId||i.rewardModal||i.finalTestModal||i.contactModal||i.pwaInstallHelpVisible||rl())return"";const e=_p();return`
      <aside class="pwa-install-banner notification-permission-banner" role="dialog" aria-modal="false" aria-label="${h(e.title)}">
        <div class="pwa-install-logo notification-bell">月</div>
        <div class="pwa-install-copy">
          <span class="pill">${o(e.badge)}</span>
          <h2>${o(e.title)}</h2>
          <p>${o(e.description)}</p>
        </div>
        <div class="pwa-install-actions">
          <button class="btn primary" type="button" data-action="notification-allow">${o(e.allow)}</button>
          <button class="btn ghost" type="button" data-action="notification-later">${o(e.later)}</button>
        </div>
      </aside>
    `}function x$(e,t,n){const s=As(e),r=Ni(e,t,n),a=Cd(De(e,n));return`
      <article class="sidekick mascot-${e} mood-${t}" data-action="mascot-click" data-character="${h(e)}">
        <img src="${h(r)}" alt="${h(w(s.name))}" />
        <div><strong>${o(w(s.name))}</strong><p>${o(a)}</p></div>
      </article>
    `}function vs(e,t,n,s){const r=As(e),a=Ni(e,t,n),l=Cd(De(e,n)),c=`${s||"mascot"}:${e}:${n}:${i.route}:${i.activeTextbookLevel||i.activeJlptLesson||""}`.toLowerCase();return Sd(c)?`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${h(e)}">
        <img src="${h(a)}" alt="${h(w(r.name))}" />
      </div>
    `:`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${h(e)}">
        <img src="${h(a)}" alt="${h(w(r.name))}" />
        <div class="speech speech-dismissible" data-mascot-speech-key="${h(c)}" data-autohide-ms="7000">
          <button class="speech-close" type="button" data-action="dismiss-mascot-speech" data-speech-key="${h(c)}" aria-label="${h(m()==="ru"?"Закрыть облако":"Close speech bubble")}">✕</button>
          <span class="speech-text">${o(l)}</span>
        </div>
      </div>
    `}function jd(){try{const e=sessionStorage.getItem($e);return e?JSON.parse(e)||{}:{}}catch(e){return{}}}function _$(e){try{sessionStorage.setItem($e,JSON.stringify(e||{}))}catch(t){}}function Sd(e){return e?!!jd()[e]:!1}function Nd(e){if(!e)return;const t=jd();t[e]=Date.now(),_$(t);const n=In.get(e);n&&(clearTimeout(n),In.delete(e)),I()}function M$(){const e=new Set;ma("[data-mascot-speech-key][data-autohide-ms]").forEach(t=>{const n=String(t.dataset.mascotSpeechKey||"");if(!n||Sd(n)||(e.add(n),In.has(n)))return;const s=Number(t.dataset.autohideMs||0);if(!s)return;const r=window.setTimeout(()=>{In.delete(n),Nd(n)},s);In.set(n,r)});for(const[t,n]of In)e.has(t)||(clearTimeout(n),In.delete(t))}function Ni(e,t="normal",n="welcome"){var r;if(e==="eva")return os(tn(null,P$(t,n)));const s=As(e);return((r=s.sprites)==null?void 0:r[t])||Object.values(s.sprites||{})[0]||""}function P$(e="normal",t="welcome"){const n=String(t||"").toLowerCase(),s=String(e||"").toLowerCase(),r={welcome:"welcome",correct:"approve",wrong:"sad",progress:"observe",streakloss:"sad",lessoncomplete:"proud",masterymilestone:"proud",achievement:"achievement",goal:"reward",combo:"proud",hint:"think",dailybonus:"reward"},a={normal:"welcome",calm:"neutral",happy:"happy",proud:"proud",thinking:"think",focus:"think",sad:"sad",angry:"strict",shy:"shy"},l=a[s]&&!["normal","calm"].includes(s)?a[s]:null;return l&&(!n||n==="welcome")?l:r[n]||a[s]||s||"neutral"}function Cd(e){if(m()!=="ru")return e;const t="[А-Яа-яЁё]";return String(e||"").replace(new RegExp(`(^|\\s)(${t})\\s+(?=${t}{4,})`,"gu"),"$1$2 ")}function E$(e){const t=ae(i.activeCardId);if(!t||!Xp[e])return;Ks(t,"srs_rating"),lp();const n=oe(O(t.id)),s=Ae(n,e);i.progress.cards[t.id]=s,gn(n,s,e),_e();const r=Number(i.progress.correctCombo||0);Fn(e)?(i.progress.totalWrong+=1,i.progress.correctCombo=0,Ne({discipline:-.8,trust:-.2},"answer_again"),Ce("answer_wrong",{cardId:t.id,kanji:t.kanji,rating:e,comboLost:r>0}),Sr("again"),U(De("eva","wrong"))):(Q(i.rewards.rewards.correctXp,i.rewards.rewards.correctCoins,"review_success"),i.progress.totalCorrect+=1,i.progress.correctCombo+=1,i.progress.bestCorrectCombo=Math.max(i.progress.bestCorrectCombo,i.progress.correctCombo),Ne({trust:.35,discipline:.25,curiosity:s.lastDecision==="Easy"?.2:0},`answer_${e}`),Ce("answer_correct",{cardId:t.id,kanji:t.kanji,rating:e,combo:i.progress.correctCombo}),Sr("ok"),U(De("eva","correct")),i.progress.correctCombo>0&&i.progress.correctCombo%5===0&&(Q(i.rewards.rewards.comboXp,0,"combo_bonus"),ot({title:"Combo",message:De("leya","combo"),xp:i.rewards.rewards.comboXp,coins:0,mascot:"leya",mood:"proud",dialog:"combo"}))),Js(),F$(t.lessonId),To(),V(),i.reviewQueueLastKind="card",C(),i.revealed=!1,i.activeCardId=null,Lt(),i.pendingFocus="__scroll-top__",Qe()}function Ci(){return m()==="ru"?{forgot:"Не помню",remember:"Помню",forgotHint:"вернём быстро",rememberHint:"Повторение выберет срок"}:{forgot:"Forgot",remember:"Remember",forgotHint:"review soon",rememberHint:"review decides"}}function D$(e){const t=Ci(),n=O(e.id),s=O$(n,"remember"),r=Dm(n,s);return`${t.rememberHint}: ${Om(Pm(r))}`}function O$(e,t){if(Fn(t))return"again";const n=e.state||"New",s=Number(e.reviewCount||0),r=Number(e.correct||0),a=Number(e.wrong||0),l=Number(e.lapses||0),c=Number(e.successRate||(s?r/Math.max(r+a,1)*100:0));return n==="New"?"good":n==="Learning"?c>=70||r>=2?"good":"hard":c>=88&&r>=5&&l<=1?"easy":c<70||l>Math.max(1,Math.floor(r/3))?"hard":"good"}function Fn(e){return e==="forgot"||e==="again"}function bs(e="",t="",n="",s={}){return{level:String(e||"").toUpperCase(),lessonId:String(s.lessonId||t||""),exerciseId:String(s.exerciseId||n||""),cardId:String(s.cardId||""),kanji:String(s.kanji||""),type:String(s.type||""),title:s.title||null,prompt:String(s.prompt||""),answer:String(s.answer||""),answerLabel:String(s.answerLabel||""),state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]}}function zn(e,t={}){const s={...bs(t.level||"",t.lessonId||"",t.exerciseId||"",t),...ra(e||{})};return s.level=String(t.level||s.level||"").toUpperCase(),s.lessonId=String(t.lessonId||s.lessonId||""),s.exerciseId=String(t.exerciseId||s.exerciseId||""),s.cardId=String(t.cardId||s.cardId||""),s.kanji=String(t.kanji||s.kanji||""),s.type=String(t.type||s.type||""),s.title=t.title||s.title||null,s.prompt=String(t.prompt||s.prompt||""),s.answer=String(t.answer||s.answer||""),s.answerLabel=String(t.answerLabel||s.answerLabel||""),s.successRate=Cp(s),Number.isFinite(Number(s.srsStep))?s.srsStep=ge(Math.trunc(Number(s.srsStep)),-1,63):s.srsStep=_a(s),Ad(s)?s:bs(s.level,s.lessonId,s.exerciseId,s)}function Ad(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.lastRating||Number(e.correct||0)>0||Number(e.wrong||0)>0||Array.isArray(e.history)&&e.history.length)}function Ai(e,t,n){const s={...e||{}};return Object.entries(t||{}).forEach(([r,a])=>{s[r]=zn(a,{level:n,exerciseId:r,lessonId:(a==null?void 0:a.lessonId)||"",cardId:(a==null?void 0:a.cardId)||"",kanji:(a==null?void 0:a.kanji)||"",type:(a==null?void 0:a.type)||"",title:(a==null?void 0:a.title)||null,prompt:(a==null?void 0:a.prompt)||"",answer:(a==null?void 0:a.answer)||"",answerLabel:(a==null?void 0:a.answerLabel)||""})}),s}function K$(e){const t=Y(e);return t==="N5"?Z():t==="N4"?J():t==="N3"?F():t==="N2"?z():null}function Lo(e){const t=Y(e);return t==="N5"?Be():t==="N4"?tt():t==="N3"?st():t==="N2"?it():[]}function B$(e,t){const n=Y(e),s=String(t||"");return!n||!s?null:Lo(n).find(r=>r.id===s||r.id===`${n.toLowerCase()}-${s}`||r.id.endsWith(`-${s}`))||null}function Ld(e){const t=Y(e);return t==="N5"?qs:t==="N4"?mi:t==="N3"?fi:t==="N2"?hi:null}function Io(e,t,n=""){const s=Ld(e),r=Y(e),a=String(t||"");if(!s||!r||!a)return null;const l=B$(r,n);if(l){const c=s(l).find(u=>String(u.id)===a);if(c)return c}for(const c of Lo(r)){const u=s(c).find(p=>String(p.id)===a);if(u)return u}return null}function Li(e,t){const n=Y(t);if(!e||!n)return!1;e.exerciseSrs||(e.exerciseSrs={});const s=new Set([...Object.keys(e.viewedLessons||{}),...Object.keys(e.completedLessons||{})]),r=new Set([...Object.keys(e.completedExercises||{}),...Object.keys(e.exerciseResults||{})]);let a=!1;return r.forEach(l=>{var f,v;if(e.exerciseSrs[l])return;const c=Io(n,l);if(!c||!s.has(String(c.lessonId||"")))return;const u=bs(n,c.lessonId||"",c.id,c),p=((f=e.exerciseResults)==null?void 0:f[l])||null,d=!!((v=e.completedExercises)!=null&&v[l]),g=Ae(oe(u),d||p!=null&&p.correct?"good":"again");g.level=n,g.lessonId=String(c.lessonId||g.lessonId||""),g.exerciseId=String(c.id||l||""),g.cardId=String(c.cardId||g.cardId||""),g.kanji=String(c.kanji||g.kanji||""),g.type=String(c.type||g.type||""),g.title=c.title||g.title||null,g.prompt=String(c.prompt||g.prompt||""),g.answer=String(c.answer||g.answer||""),g.answerLabel=String(c.answerLabel||g.answerLabel||""),e.exerciseSrs[l]=g,a=!0}),a}function Ii(e,t){const n=Y(t);if(!e||!n)return!1;const s=Lo(n),r=Ld(n);if(!(r!=null&&r.length)&&!r)return!1;e.exerciseSrs||(e.exerciseSrs={});const a=new Map;s.forEach(c=>{(r(c)||[]).forEach(u=>{u!=null&&u.id&&a.set(String(u.id),{exercise:u,lesson:c})})});let l=!1;return Object.entries(e.exerciseSrs).forEach(([c,u])=>{const p=a.get(String(c));if(!p)return;const{exercise:d,lesson:g}=p,f=zn(u,{level:n,lessonId:g.id,exerciseId:d.id,cardId:d.cardId||"",kanji:d.kanji||"",type:d.type||"",title:d.title||null,prompt:d.prompt||"",answer:d.answer||"",answerLabel:d.answerLabel||""});JSON.stringify(u)!==JSON.stringify(f)&&(e.exerciseSrs[c]=f,l=!0)}),l}function F$(e){if(i.progress.lessonCompletions[e])return;const t=Ko(e);if(!(t.length>0&&t.every(a=>O(a.id).state!=="New")))return;const s=i.rewards.rewards.lessonCompleteXp,r=i.rewards.rewards.lessonCompleteCoins;i.progress.lessonCompletions[e]=new Date().toISOString(),_("lesson_complete"),Q(s,r,"lesson_completion"),Ne({warmth:2.4,trust:2,discipline:2.2,curiosity:.8},"lesson_completion"),Ce("lesson_complete",{lessonId:e,xp:s,coins:r}),ot({title:w({ru:"Урок завершён",en:"Lesson complete"}),message:De("eva","lessonComplete"),xp:s,coins:r,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),Wi("lesson_complete")}function To(){const e=ce(),t=Et();if(t.goalClaimed||t.reviews<i.progress.settings.dailyGoal)return;t.goalClaimed=!0;const n=i.rewards.rewards.comboXp,s=i.rewards.rewards.streakCoins;Q(n,s,"daily_goal"),ot({title:A("dailyGoal"),message:De("leya","goal"),xp:n,coins:s,mascot:"leya",mood:"happy",dialog:"goal"}),i.progress.daily[e]=t}function z$(){const e=Ti(),t=ce();e.firstVisitDate||(e.firstVisitDate=t),e.lastVisitDate=t,i.progress.appOpens=Number(i.progress.appOpens||0)+1;const n=new Date().getHours();(n>=22||n<5)&&(i.progress.secrets.nightVisit=!0),Id()}function Id(){const e=i.progress.streak,t=Gl(e.pendingReward);if(!t||ce()<t.availableOn)return!1;e.pendingReward=null;const n=i.rewards.rewards.streakCoins;return _("streak_reward"),Q(0,n,`streak:${t.milestone}:claim`),ot({title:m()==="ru"?"Награда за стрик":"Streak reward",message:m()==="ru"?`Бонус за серию ${t.milestone} дней готов.`:`Your ${t.milestone}-day streak bonus is ready.`,xp:0,coins:n,mascot:"eva",mood:"achievement",dialog:"achievement"}),V(),C(),!0}function J$(e){if(e==="eva"){i.progress.secrets.evaClicks=Number(i.progress.secrets.evaClicks||0)+1,Ne({warmth:.2,curiosity:.1},"eva_click"),U(De("eva","welcome")),V(),C(),I();return}e==="leya"&&U(De("leya","combo"))}function Td(){pe(),i.progress.secrets.evaClicks=Number(i.progress.secrets.evaClicks||0)+1,i.evaRuntime||(i.evaRuntime=yt()),i.evaRuntime.clickCount=Number(i.evaRuntime.clickCount||0)+1,Ce("user_clicked_eva",{clickCount:i.evaRuntime.clickCount}),V(),_("notification_soft"),C(),I()}function U$(){if(W.completed)return;W.completed=!0,i.progress.writingPractice.completed=Number(i.progress.writingPractice.completed||0)+1,W.cardId&&(i.progress.writingPractice.cards[W.cardId]=(i.progress.writingPractice.cards[W.cardId]||0)+1),Ne({curiosity:1,discipline:.8,trust:.4},"writing_complete"),Ce("writing_complete",{cardId:W.cardId});const e=V();C(),e&&I()}function G$(){const e=ce();Ti();const t=H$(),n=Ur(i.progress.dailyBonusPending);n&&n.availableOn>e||(n&&n.availableOn<=e&&!t&&(i.progress.dailyBonusPending=null),i.progress.dailyBonusPending={availableOn:Mp(e,1)},C())}function H$(){const e=ce(),t=Ti(),n=Ur(i.progress.dailyBonusPending);if(!n||ce()<n.availableOn||i.progress.dailyBonuses[e]||t.lastDailyBonusDate===e)return!1;i.progress.dailyBonusPending=null;const s=t.lastDailyBonusDate||t.firstVisitDate||t.lastVisitDate;return Q$(s,e),t.lastVisitDate=e,t.lastDailyBonusDate=e,i.progress.dailyBonuses[e]=new Date().toISOString(),_("daily_bonus"),Q(i.rewards.rewards.dailyBonusXp,i.rewards.rewards.dailyBonusCoins,"daily_bonus"),Ne({warmth:1,discipline:.8},"daily_bonus"),ot({title:A("dailyBonus"),message:De("leya","welcome"),xp:i.rewards.rewards.dailyBonusXp,coins:i.rewards.rewards.dailyBonusCoins,mascot:"leya",mood:"calm",dialog:"welcome"}),V(),ol(),!0}function Ti(){var t;(t=i.progress).visits||(t.visits={});const e=i.progress.visits;return e.firstVisitDate||(e.firstVisitDate=null),e.lastVisitDate||(e.lastVisitDate=null),e.lastDailyBonusDate||(e.lastDailyBonusDate=null),e.streak=Number(e.streak||0),e.bestStreak=Number(e.bestStreak||0),e}function Q$(e,t){const n=Ti();n.streak=e&&$n(e,t)===1?n.streak+1:1,n.bestStreak=Math.max(n.bestStreak||0,n.streak);const s=i.progress.streak.lastStudyDate;s!==t&&(i.progress.streak.current=s&&$n(s,t)===1?i.progress.streak.current+1:1,i.progress.streak.lastStudyDate=t,i.progress.streak.best=Math.max(i.progress.streak.best||0,i.progress.streak.current),i.progress.streakHistory.push({date:t,value:i.progress.streak.current}),i.progress.streakHistory=i.progress.streakHistory.slice(-120))}function V(){if(!Bn().length)return 0;let e=0;return Bn().forEach(t=>{if(Is(t.id)||!X$(t))return;e+=1;const n=t.rewardXp||0,s=t.rewardFragments||0;i.progress.achievements[t.id]={unlockedAt:new Date().toISOString(),rewardXp:n,rewardFragments:s},ot({type:"achievement",title:Co(t),message:kd(t),xp:n,coins:s,icon:t.icon,mascot:"eva",mood:"happy",dialog:"achievement"}),Q(n,s,`achievement:${t.id}`)}),e}function X$(e){return Rd(e)>=Number(e.target||1)}function Rd(e){var t,n,s,r,a,l,c,u;if(e.kind==="lessonComplete")return Object.keys(i.progress.lessonCompletions).length;if(e.kind==="correct")return i.progress.totalCorrect;if(e.kind==="learned")return Do().learned;if(e.kind==="reviews")return Oo();if(e.kind==="streak")return Math.max(i.progress.streak.current||0,i.progress.streak.best||0);if(e.kind==="level")return i.progress.level||1;if(e.kind==="moonFragments")return i.progress.totalMoonFragmentsEarned||0;if(e.kind==="writing")return((t=i.progress.writingPractice)==null?void 0:t.completed)||0;if(e.kind==="sentence")return Object.keys(((n=i.progress.sentencePractice)==null?void 0:n.completed)||{}).length;if(e.kind==="evaClicks")return((s=i.progress.secrets)==null?void 0:s.evaClicks)||0;if(e.kind==="nightVisit")return(r=i.progress.secrets)!=null&&r.nightVisit?1:0;if(e.kind==="appOpens")return i.progress.appOpens||0;if(e.kind==="n5KanjiStudied")return Object.keys(Z().studiedKanji||{}).length;if(e.kind==="n5LessonComplete"||e.kind==="n5LessonsComplete")return En();if(e.kind==="n5Writing")return Object.keys(Z().writingPractice||{}).length;if(e.kind==="n5SrsAll")return Object.keys(Z().srsKanji||{}).length;if(e.kind==="n5FinalPass")return(a=Z().finalTest)!=null&&a.passed?1:0;if(e.kind==="n4Opened")return J().opened?1:0;if(e.kind==="n4LessonComplete")return Object.keys(J().completedLessons||{}).length;if(e.kind==="n4LessonsComplete")return Object.keys(J().completedLessons||{}).length;if(e.kind==="n4SrsAll")return Object.keys(J().srsKanji||{}).length;if(e.kind==="n4GrammarComplete")return Object.keys(J().completedGrammar||{}).length;if(e.kind==="n4ReadingComplete")return Object.keys(J().completedReading||{}).length;if(e.kind==="n4ListeningComplete")return Object.keys(J().completedListening||{}).length;if(e.kind==="n4Writing")return Object.keys(J().writingPractice||{}).length;if(e.kind==="n4FinalPass")return(l=J().finalTest)!=null&&l.passed?1:0;if(e.kind==="n3Opened")return F().opened?1:0;if(e.kind==="n3LessonComplete")return Object.keys(F().completedLessons||{}).length;if(e.kind==="n3LessonsComplete")return Object.keys(F().completedLessons||{}).length;if(e.kind==="n3SrsAll")return Object.keys(F().srsKanji||{}).length;if(e.kind==="n3GrammarComplete")return Object.keys(F().completedGrammar||{}).length;if(e.kind==="n3ReadingComplete")return Object.keys(F().completedReading||{}).length;if(e.kind==="n3ListeningComplete")return Object.keys(F().completedListening||{}).length;if(e.kind==="n3Writing")return Object.keys(F().writingPractice||{}).length;if(e.kind==="n3ComprehensionAnswers")return Object.values(F().readingAnswers||{}).filter(p=>p&&p.correct).length;if(e.kind==="n3FinalPass")return(c=F().finalTest)!=null&&c.passed?1:0;if(e.kind==="n2Opened")return z().opened?1:0;if(e.kind==="n2LessonComplete")return Object.keys(z().completedLessons||{}).length;if(e.kind==="n2LessonsComplete")return Object.keys(z().completedLessons||{}).length;if(e.kind==="n2SrsAll")return Object.keys(z().srsKanji||{}).length;if(e.kind==="n2GrammarComplete")return Object.keys(z().completedGrammar||{}).length;if(e.kind==="n2ReadingComplete")return Object.keys(z().completedReading||{}).length;if(e.kind==="n2ListeningComplete")return Object.keys(z().completedListening||{}).length;if(e.kind==="n2Writing")return Object.keys(z().writingPractice||{}).length;if(e.kind==="n2ComprehensionAnswers")return Object.values(z().readingAnswers||{}).filter(p=>p&&p.correct).length;if(e.kind==="n2FinalPass")return(u=z().finalTest)!=null&&u.passed?1:0;if(e.kind==="shopComplete"){const p=et().filter(d=>!d.defaultOwned&&d.price>0);return p.length&&p.every(d=>St(d.id))?1:0}if(e.kind==="jlpt"){const p=i.cards.filter(d=>d.jlpt===e.jlpt);return p.length>0&&p.every(d=>O(d.id).state==="Mastered")?1:0}return 0}function ot(e){if(!i.rewardModal){i.rewardModal=e,xd(e);return}if(e.type==="level"){i.rewardQueue.unshift(e);return}i.rewardQueue.push(e)}function xd(e){if(Dj(),(e==null?void 0:e.type)==="achievement"){$r()?_("achievement_unlock"):Ji()&&Ej();return}if((e==null?void 0:e.type)==="level"){_("level_up");return}(((e==null?void 0:e.xp)||0)>0||((e==null?void 0:e.coins)||0)>0)&&_("notification_reward")}function Q(e,t,n="reward"){const s=i.progress.level||Fi(i.progress.xp);i.progress.xp+=e,i.progress.moonFragments+=t;const r=W$(n);if(!r&&e>0&&_("xp_gain"),!r&&t>0&&_("moon_fragment_gain"),t>0&&(i.progress.totalMoonFragmentsEarned=Number(i.progress.totalMoonFragmentsEarned||0)+t),i.progress.level=Fi(i.progress.xp),(e||t)&&(i.progress.transactions.unshift({at:new Date().toISOString(),reason:n,xp:e,coins:t,balance:i.progress.moonFragments}),i.progress.transactions=i.progress.transactions.slice(0,80)),i.progress.level>s){_("level_up"),Ce("level_up",{level:i.progress.level,xp:i.progress.xp,moonFragments:i.progress.moonFragments});const a=Ot();ot({type:"level",title:A("levelUp"),message:`${A("level")} ${i.progress.level} - ${a.current}/${a.next} XP - ${i.progress.moonFragments} ${A("coins")}`,xp:0,coins:0,mascot:i.progress.level%2===0?"leya":"eva",mood:"happy",dialog:"achievement",level:i.progress.level,totalXp:i.progress.xp,moonFragments:i.progress.moonFragments})}}function W$(e){return["learn","review"].includes(i.route)&&["review_success","combo_bonus"].includes(e)}function gn(e,t,n){const s=Et();s.reviews+=1,e.state==="New"&&t.state!=="New"&&(s.learned+=1),e.state!=="Mastered"&&t.state==="Mastered"&&(s.mastered+=1),Fn(n)&&(s.mistakes+=1),s.minutes=Vi(s.reviews*.75+s.learned*1.25,1),i.progress.daily[ce()]=s}function _e(){Id();const e=ce(),t=i.progress.streak.lastStudyDate;if(t===e)return;const n=!!(t&&$n(t,e)>1&&i.progress.streak.current>0);i.progress.streak.current=t&&$n(t,e)===1?i.progress.streak.current+1:1,i.progress.streak.lastStudyDate=e,i.progress.streak.best=Math.max(i.progress.streak.best,i.progress.streak.current),i.progress.streakHistory.push({date:e,value:i.progress.streak.current}),i.progress.streakHistory=i.progress.streakHistory.slice(-120),Ne(n?{discipline:-3.5,trust:-1.4,warmth:-.8}:{discipline:1.4,trust:.8,warmth:.4},n?"streak_lost":"study_streak"),n&&U(De("eva","streakLoss")),[1,7,30,100].includes(i.progress.streak.current)&&(i.progress.streak.pendingReward={milestone:i.progress.streak.current,availableOn:Mp(e,1)}),Ce("streak_up",{streak:i.progress.streak.current,lost:n}),C()}function _d(){if(i.route!=="stats")return;if(!window.Chart){pg().then(()=>{i.route==="stats"&&_d()}).catch(r=>console.warn("Chart.js failed to load.",r));return}const e=aS(10),t=e.map(r=>r.slice(5)),n=xj(),s=_j(n);cr("activityChart",{type:"bar",data:{labels:t,datasets:[{label:A("learned"),data:e.map(r=>{var a;return((a=i.progress.daily[r])==null?void 0:a.learned)||0}),backgroundColor:n.green},{label:A("review"),data:e.map(r=>{var a;return((a=i.progress.daily[r])==null?void 0:a.reviews)||0}),backgroundColor:n.red}]},options:s}),cr("jlptChart",{type:"bar",data:{labels:Object.keys(qd()),datasets:[{label:A("mastered"),data:Object.values(qd()),backgroundColor:n.yellow}]},options:s}),cr("streakChart",{type:"line",data:{labels:t,datasets:[{label:A("streak"),data:e.map(r=>{var a,l;return((a=i.progress.streakHistory.find(c=>c.date===r))==null?void 0:a.value)||((l=i.progress.daily[r])!=null&&l.reviews?1:0)}),borderColor:n.blue,backgroundColor:n.blueSoft,fill:!0,tension:.35}]},options:s}),cr("stateChart",{type:"doughnut",data:{labels:Object.keys(Wd()),datasets:[{data:Object.values(Wd()),backgroundColor:[n.blue,n.yellow,n.green,n.pink],borderColor:n.line}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:n.text}}}}}),cr("mistakeChart",{type:"line",data:{labels:t,datasets:[{label:A("errors"),data:e.map(r=>{var a;return((a=i.progress.daily[r])==null?void 0:a.mistakes)||0}),borderColor:n.danger,backgroundColor:n.dangerSoft,fill:!0,tension:.35}]},options:s})}function cr(e,t){const n=document.getElementById(e);n&&i.charts.push(new Chart(n,t))}function q$(){const e=mn();e&&(i.activeCardId=e.id,i.activeLessonId=e.lessonId,i.writingStep=ge(i.writingStep,0,Math.max(0,wt(e)-1)),W.cardId!==String(e.id)&&V$(e)),Y$(),dr(),Ri(),fr(ur(!1)),window.setTimeout(Pd,120)}function mn(){return ae(i.activeCardId)||Eo()[0]||i.cards[0]||null}function V$(e){W.cardId=String((e==null?void 0:e.id)||""),W.strokes=[],W.currentStroke=[],W.drawing=!1,W.activePointerId=null,W.completed=!1}function Y$(){const e=document.getElementById("practiceCanvas");if(!e)return;ks();const t=r=>{var a;r.pointerType==="mouse"&&r.button!==0||(r.preventDefault(),(a=e.setPointerCapture)==null||a.call(e,r.pointerId),W.drawing=!0,W.activePointerId=r.pointerId,W.currentStroke=[Md(e,r)],W.completed=!1,ks())},n=r=>{if(!W.drawing||r.pointerId!==W.activePointerId)return;r.preventDefault();const a=Md(e,r),l=W.currentStroke[W.currentStroke.length-1];(!l||Jd(l,a)>1.4)&&(W.currentStroke.push(a),ks())},s=r=>{if(!W.drawing||r.pointerId!==W.activePointerId)return;r.preventDefault();const a=Z$(W.currentStroke);a.length&&W.strokes.push(a),W.currentStroke=[],W.drawing=!1,W.activePointerId=null,ks(),fr(ur(!1))};e.onpointerdown=t,e.onpointermove=n,e.onpointerup=s,e.onpointercancel=s,e.onpointerleave=s,e.oncontextmenu=r=>r.preventDefault()}function Md(e,t){const n=e.getBoundingClientRect();return{x:ge((t.clientX-n.left)*(e.width/n.width),0,e.width),y:ge((t.clientY-n.top)*(e.height/n.height),0,e.height),pressure:t.pressure||.5,time:performance.now()}}function Z$(e){if(!e.length)return[];const t=[e[0]];return e.slice(1).forEach(n=>{Jd(t[t.length-1],n)>=2.6&&t.push(n)}),t.length===1?[t[0],{...t[0],x:t[0].x+.1,y:t[0].y+.1}]:t}function ks(){const e=document.getElementById("practiceCanvas");if(!e)return;const t=e.getContext("2d"),n=mn();zd(t,e),n&&sy(t,e,n),W.strokes.forEach((s,r)=>Fd(t,s,{color:getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),width:13,shadow:r===W.strokes.length-1})),W.currentStroke.length&&Fd(t,W.currentStroke,{color:getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),width:13,shadow:!0})}function ey(){W.strokes=[],W.currentStroke=[],W.drawing=!1,W.completed=!1,ks(),fr(ur(!1))}function ty(){W.strokes.pop(),W.currentStroke=[],W.completed=!1,ks(),fr(ur(!1))}function ny(e=!1){const t=ur(!0);fr(t),e&&(Sr(t.success?"good":"again"),U(t.message),t.success&&U$())}function ur(e){const t=document.getElementById("practiceCanvas"),n=mn(),s=wt(n);if(!t||!n)return{score:0,success:!1,expectedCount:s,message:""};const r=W.strokes;if(!r.length)return{score:0,success:!1,expectedCount:s,message:m()==="ru"?"Начни с первой черты.":"Start with the first stroke."};const a=ge(Math.round(Math.min(r.length,s)/s*100),0,100),l=e?100:a,c=!!(e&&r.length);let u=m()==="ru"?`Черты: ${r.length}/${s}. Самопроверка без распознавания.`:`Strokes: ${r.length}/${s}. Self-check without recognition.`;return!e&&r.length<s?u=m()==="ru"?`Черта ${r.length+1}/${s}: продолжай по образцу.`:`Stroke ${r.length+1}/${s}: keep following the guide.`:!e&&r.length>s?u=m()==="ru"?`Черты: ${r.length}/${s}. Если лишняя линия случайная, нажми «Отменить черту».`:`Strokes: ${r.length}/${s}. If one was accidental, tap "Undo stroke".`:e&&(u=Ro(n)?m()==="ru"?"Записано. Сравни с жёлтым порядком KanjiVG и двигайся дальше.":"Saved. Compare it with the yellow KanjiVG order and move on.":m()==="ru"?"Записано. Для этого кандзи пока есть только шаблон, без точной схемы штрихов.":"Saved. This kanji currently has a template only, without exact stroke paths."),{score:l,success:c,expectedCount:s,message:u}}function Pd(){const e=document.getElementById("strokeCanvas"),t=mn();if(!e||!t)return;cancelAnimationFrame(W.demoAnimationId);const n=wt(t),s=460,r=performance.now(),a=l=>{const c=l-r,u=ge(Math.floor(c/s),0,n-1),p=ge((c-u*s)/s,0,1);i.writingStep=u,dr(u,p),Ri(),c<n*s?W.demoAnimationId=requestAnimationFrame(a):(i.writingStep=n-1,dr(i.writingStep,1),Ri())};W.demoAnimationId=requestAnimationFrame(a)}function Ed(){const e=document.getElementById("strokeCanvas"),t=mn();if(!e||!t)return;cancelAnimationFrame(W.demoAnimationId);const n=performance.now(),s=520,r=ge(i.writingStep,0,Math.max(0,wt(t)-1)),a=l=>{const c=ge((l-n)/s,0,1);dr(r,c),c<1&&(W.demoAnimationId=requestAnimationFrame(a))};W.demoAnimationId=requestAnimationFrame(a)}function Dd(e){Od(i.writingStep+e,!1)}function Od(e,t){const n=mn();n&&(i.writingStep=ge(e,0,Math.max(0,wt(n)-1)),Ri(),t?Ed():dr(i.writingStep,1))}function Ri(){const e=mn();if(!e)return;const t=mr(e),n=m()==="ru"?"Шаг":"Step",s=document.getElementById("writingStepCounter");s&&(s.textContent=`${n} ${i.writingStep+1}/${wt(e)}`);const r=document.querySelector(".writing-step-head .label");r&&(r.textContent=t[i.writingStep]||""),ma(".writing-guide-list li").forEach((a,l)=>a.classList.toggle("is-active",l===i.writingStep))}function dr(e=i.writingStep,t=1){const n=document.getElementById("strokeCanvas"),s=mn();if(!n||!s)return;const r=n.getContext("2d");zd(r,n);const a=pr(s);if(!a){Bd(r,n,s,e);return}Kd(r,n,a,{activeIndex:e,progress:t,showFuture:!0,guideAlpha:1,showNumbers:!0})}function sy(e,t,n){const s=pr(n);if(!s){Bd(e,t,n,i.writingStep);return}Kd(e,t,s,{activeIndex:i.writingStep,progress:1,showFuture:!0,guideAlpha:.24,showNumbers:!1})}function pr(e){var n,s;if(!(e!=null&&e.kanji))return null;const t=(n=i.kanjiStrokes)==null?void 0:n[e.kanji];return(s=t==null?void 0:t.strokeOrder)!=null&&s.length?t:null}function Ro(e){return!!pr(e)}function wt(e){var n;const t=pr(e);return Math.max(1,((n=t==null?void 0:t.strokeOrder)==null?void 0:n.length)||Number((e==null?void 0:e.strokes)||1))}function gr(){const e=getComputedStyle(document.documentElement),t=n=>e.getPropertyValue(n).trim();return{paper:t("--writing-paper")||t("--surface")||"#ffffff",border:t("--writing-paper-border")||t("--line")||"#d0d5dd",grid:t("--writing-grid")||t("--line")||"#d0d5dd",gridStrong:t("--writing-grid-strong")||t("--line-strong")||"#98a2b3",ink:t("--writing-ink")||t("--text")||"#111014",guide:t("--writing-guide")||t("--muted")||"#5f6670",templateOpacity:Number(t("--writing-template-opacity")||"0.16")||.16}}function Kd(e,t,n,s={}){const r=ge(Number(s.activeIndex||0),0,Math.max(0,n.strokeOrder.length-1)),a=ry(n,t,s.padding||22),l=gr(),c=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim(),u=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),p=l.guide;n.strokeOrder.forEach((d,g)=>{var $;const f=g<r,v=g===r;g>r&&!s.showFuture||(e.save(),e.translate(a.x,a.y),e.scale(a.scale,a.scale),e.lineCap="round",e.lineJoin="round",e.strokeStyle=v?u:f?c:p,e.lineWidth=(v?8:5.5)/a.scale,e.globalAlpha=Number(($=s.guideAlpha)!=null?$:1)*(v?1:f?.86:.24),v&&s.progress<1&&(e.globalAlpha*=.45+ge(s.progress,0,1)*.55),v&&(e.shadowColor="rgba(248, 216, 74, 0.34)",e.shadowBlur=13/a.scale),e.stroke(new Path2D(d.path)),e.restore(),s.showNumbers&&ay(e,d,a,g+1,v))})}function ry(e,t,n=22){const s=iy(e.viewBox),r=Math.min((t.width-n*2)/s.width,(t.height-n*2)/s.height),a=(t.width-s.width*r)/2-s.x*r,l=(t.height-s.height*r)/2-s.y*r;return{...s,scale:r,x:a,y:l}}function iy(e){const t=String(e||"0 0 109 109").trim().split(/\s+/).map(Number),[n=0,s=0,r=109,a=109]=t;return{x:n,y:s,width:Math.max(1,r),height:Math.max(1,a)}}function ay(e,t,n,s,r){const a=oy(t.path);if(!a)return;const l=n.x+a.x*n.scale,c=n.y+a.y*n.scale;ly(e,l,c,s,r)}function oy(e){const t=String(e||"").match(/M\s*(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/i);return t?{x:Number(t[1]),y:Number(t[2])}:null}function ly(e,t,n,s,r){e.save(),e.fillStyle=r?getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim():getComputedStyle(document.documentElement).getPropertyValue("--surface-2").trim(),e.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue("--line-strong").trim(),e.lineWidth=1,e.beginPath(),e.arc(t,n,r?13:10,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=r?"#111014":getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),e.font="800 12px system-ui",e.textAlign="center",e.textBaseline="middle",e.fillText(String(s),t,n+.5),e.restore()}function Bd(e,t,n,s=0){const r=gr(),a=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim();e.save(),e.globalAlpha=r.templateOpacity,e.fillStyle=r.ink,e.font=`900 ${Math.floor(t.height*.7)}px "Noto Sans JP", "Yu Gothic", serif`,e.textAlign="center",e.textBaseline="middle",e.fillText((n==null?void 0:n.kanji)||"文",t.width/2,t.height/2+t.height*.04),e.globalAlpha=1,e.fillStyle=a,e.font="800 15px system-ui",e.textAlign="left",e.textBaseline="top";const l=m()==="ru"?`Шаг ${s+1}/${wt(n)} · точной схемы пока нет`:`Step ${s+1}/${wt(n)} · exact paths not available yet`;e.fillText(l,18,16),e.restore()}function Fd(e,t,n={}){const s=t.map(dy).filter(Boolean);if(!e||!s.length)return;const r=gr();if(e.save(),e.strokeStyle=n.color||r.ink,e.lineWidth=n.width||12,e.lineCap="round",e.lineJoin="round",e.imageSmoothingEnabled=!0,n.shadow&&(e.shadowColor="rgba(255, 48, 92, 0.36)",e.shadowBlur=12),e.beginPath(),e.moveTo(s[0].x,s[0].y),s.length===1){e.arc(s[0].x,s[0].y,e.lineWidth/2,0,Math.PI*2),e.fillStyle=e.strokeStyle,e.fill(),e.restore();return}if(s.length===2)e.lineTo(s[1].x,s[1].y);else{for(let l=1;l<s.length-1;l+=1){const c=py(s[l],s[l+1]);e.quadraticCurveTo(s[l].x,s[l].y,c.x,c.y)}const a=s[s.length-1];e.lineTo(a.x,a.y)}e.stroke(),e.restore()}function zd(e,t){if(!e||!t)return;const n=gr();e.clearRect(0,0,t.width,t.height),e.fillStyle=n.paper,e.fillRect(0,0,t.width,t.height),cy(e,t)}function cy(e,t){const n=gr();e.save(),e.strokeStyle=n.grid,e.lineWidth=1,e.setLineDash([8,8]),e.beginPath(),e.moveTo(t.width/2,0),e.lineTo(t.width/2,t.height),e.moveTo(0,t.height/2),e.lineTo(t.width,t.height/2),e.moveTo(0,0),e.lineTo(t.width,t.height),e.moveTo(t.width,0),e.lineTo(0,t.height),e.stroke(),e.setLineDash([]),e.strokeStyle=n.gridStrong,e.strokeRect(.5,.5,t.width-1,t.height-1),e.restore()}function mr(e){var s;const t=pr(e);if((s=t==null?void 0:t.strokeOrder)!=null&&s.length)return t.strokeOrder.map((r,a)=>m()==="ru"?r.description_ru||`Штрих ${a+1} по данным KanjiVG`:r.description_en||`Stroke ${a+1} from KanjiVG data`);const n=Array.isArray(e==null?void 0:e.stroke_order)?e.stroke_order:[];return Array.from({length:wt(e)},(r,a)=>n[a]||uy(e,a))}function uy(e,t){return m()!=="ru"?`Step ${t+1}: exact stroke paths are not available yet. Use the translucent ${(e==null?void 0:e.kanji)||"kanji"} template.`:`Шаг ${t+1}: для этого кандзи пока нет точной схемы штрихов. Обводи полупрозрачный шаблон ${(e==null?void 0:e.kanji)||""}.`}function fr(e){const t=document.getElementById("writingStrokeCounter");t&&(t.textContent=`${W.strokes.length}/${e.expectedCount}`);const n=document.getElementById("writingScore");n&&(n.querySelector("span").textContent=`${e.score}%`,n.querySelector("i").style.width=`${e.score}%`);const s=document.getElementById("writingFeedback");s&&(s.textContent=e.message,s.classList.toggle("is-good",e.success),s.classList.toggle("is-warning",!e.success&&e.score>0))}function dy(e){return e?Array.isArray(e)?{x:e[0],y:e[1]}:{x:e.x,y:e.y}:null}function py(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function Jd(e,t){return Math.hypot(((e==null?void 0:e.x)||0)-((t==null?void 0:t.x)||0),((e==null?void 0:e.y)||0)-((t==null?void 0:t.y)||0))}function gy(){i.charts.forEach(e=>e.destroy()),i.charts=[]}function my(e,t){const n=new Date;return i.cards.filter(s=>!e||s.lessonId===e).filter(s=>{const r=i.lessons.find(l=>l.id===s.lessonId);if(r&&!Pe(r))return!1;const a=O(s.id);return a.state==="New"?!0:a.dueAt&&new Date(a.dueAt)<=n}).sort(_i)}function fy(){const e=new Date;return Po().filter(t=>{const n=O(t.id);return n.state==="New"?!1:n.dueAt&&new Date(n.dueAt)<=e}).sort(_i)}function hy(){const e=Date.now(),t=[];return[["N5",Z()],["N4",J()],["N3",F()],["N2",z()]].forEach(([n,s])=>{Object.entries((s==null?void 0:s.exerciseSrs)||{}).forEach(([r,a])=>{const l=zn(a,{level:n,exerciseId:r,lessonId:(a==null?void 0:a.lessonId)||"",cardId:(a==null?void 0:a.cardId)||"",kanji:(a==null?void 0:a.kanji)||"",type:(a==null?void 0:a.type)||"",title:(a==null?void 0:a.title)||null,prompt:(a==null?void 0:a.prompt)||"",answer:(a==null?void 0:a.answer)||"",answerLabel:(a==null?void 0:a.answerLabel)||""});if(!l.dueAt||!Ad(l))return;const c=Io(n,r,l.lessonId||"");if(!c)return;const u=String((c==null?void 0:c.lessonId)||l.lessonId||"");if(!Jy(n,u))return;const p=new Date(l.dueAt).getTime();!p||p>e||t.push({kind:"exercise",source:"textbook",key:`exercise:${String(n).toUpperCase()}:${r}`,level:String(n||"").toUpperCase(),exerciseId:r,lessonId:u,cardId:String(l.cardId||""),dueAt:p,progress:l})})}),t.sort(Mo)}function xi(){const e=[];return i.n5Reading.forEach(t=>{t!=null&&t.id&&e.push(t)}),[["N4",i.n4Reading],["N3",i.n3Reading],["N2",i.n2Reading],["N1",i.n1Reading]].forEach(([t,n])=>{(Array.isArray(n)?n:[]).forEach(s=>{(s.questions||[]).forEach((r,a)=>{const l={id:String(r.id||`${s.id}:${a}`),prompt:r.prompt||{ru:"",en:""},answer:String(r.answer||""),options:Fl(r.options)};e.push({id:String(r.id||`${s.id}:${a}`),level:String(s.level||t||"").toUpperCase(),kind:"question",sourceKind:String(s.kind||"reading"),sourceId:String(s.id||""),sourceTitle:s.title||{ru:s.id||"",en:s.id||""},title:s.title||{ru:s.id||"",en:s.id||""},jp:String(s.jp||""),reading:String(s.reading||""),translationRu:String(s.ru||""),translationEn:String(s.en||""),passageSource:String(s.source||""),questionIndex:a,question:l,questions:[l]})})})}),[...e,...kw()]}function Ud(e,t=""){const n=String(e||""),s=String(t||"").toUpperCase();return xi().find(r=>String(r.id||"")===n&&(!s||String(r.level||"").toUpperCase()===s))||xi().find(r=>String(r.id||"")===n)||null}function Gd(e){const t=Array.isArray(e==null?void 0:e.questions)?e.questions[0]||null:(e==null?void 0:e.question)||null;return{level:String((e==null?void 0:e.level)||"").toUpperCase(),lessonId:String((e==null?void 0:e.sourceId)||""),exerciseId:String((e==null?void 0:e.id)||""),type:String((e==null?void 0:e.kind)||""),title:(e==null?void 0:e.sourceTitle)||(e==null?void 0:e.title)||null,prompt:String((e==null?void 0:e.kind)==="question"?w((t==null?void 0:t.prompt)||{}):(e==null?void 0:e.sentence)||(e==null?void 0:e.jp)||""),answer:String((e==null?void 0:e.kind)==="question"?(t==null?void 0:t.answer)||"":ht(e).map(n=>n.kanji).join("")),answerLabel:String((e==null?void 0:e.kind)==="question"?(t==null?void 0:t.answer)||"":ht(e).map(n=>n.kanji).join(""))}}function xo(e){return 1}function fn(e){const t=Gd(e);return{...bs(t.level,t.lessonId,t.exerciseId,t),sourceId:String((e==null?void 0:e.sourceId)||""),sourceKind:String((e==null?void 0:e.sourceKind)||""),sourceTitle:(e==null?void 0:e.sourceTitle)||null,exerciseKind:String((e==null?void 0:e.kind)||""),questionCount:xo(),answers:{},selectedIndices:[],selectedTiles:[],selectedText:"",wrongIndexes:[],wrongQuestions:[],completed:!1,completedAt:null}}function hr(e,t){const n=fn(t),s=zn({...n,...e||{}},Gd(t));return s.sourceId=String((t==null?void 0:t.sourceId)||s.sourceId||""),s.sourceKind=String((t==null?void 0:t.sourceKind)||s.sourceKind||""),s.sourceTitle=(t==null?void 0:t.sourceTitle)||s.sourceTitle||null,s.exerciseKind=String((t==null?void 0:t.kind)||s.exerciseKind||""),s.questionCount=xo(),s.answers=s.answers&&typeof s.answers=="object"&&!Array.isArray(s.answers)?{...s.answers}:{},s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.map(r=>Number(r)).filter(r=>Number.isInteger(r)&&r>=0):[],s.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(r=>({kanji:String((r==null?void 0:r.kanji)||""),reading:String((r==null?void 0:r.reading)||"")})).filter(r=>r.kanji):[],s.selectedText=String(s.selectedText||""),s.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.map(r=>Number(r)).filter(r=>Number.isInteger(r)&&r>=0):[],s.wrongQuestions=Array.isArray(s.wrongQuestions)?s.wrongQuestions.map(r=>String(r)).filter(Boolean):[],s.completed=!!s.completed,s.completedAt=s.completedAt||null,s}function hn(e){var s;if(!(e!=null&&e.id))return null;(s=i.progress).readingExercises||(s.readingExercises={});const t=i.progress.readingExercises[String(e.id)]||null;if(t){const r=hr(t,e);return i.progress.readingExercises[String(e.id)]=r,r}const n=fn(e);return i.progress.readingExercises[String(e.id)]=n,n}function Jn(e,t){var s;if(!(e!=null&&e.id))return null;(s=i.progress).readingExercises||(s.readingExercises={});const n=hr(t||{},e);return i.progress.readingExercises[String(e.id)]=n,n}function Hd(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.completedAt||e.completed||e.answers&&typeof e.answers=="object"&&Object.keys(e.answers).length||Array.isArray(e.selectedIndices)&&e.selectedIndices.length||Array.isArray(e.selectedTiles)&&e.selectedTiles.length||String(e.selectedText||"").trim())}function wr(e=""){var r;if(!i.progress)return!1;const t=Y(e);(r=i.progress).readingExercises||(r.readingExercises={});const n=new Map(xi().filter(a=>!t||Y(a.level)===t).map(a=>[String(a.id),a]));let s=!1;return Object.entries(i.progress.readingExercises).forEach(([a,l])=>{const c=n.get(String(a));if(!c)return;const u=hr(l,c),p=Hd(u)?u:fn(c);JSON.stringify(l)!==JSON.stringify(p)&&(i.progress.readingExercises[String(a)]=p,s=!0)}),s}function wy(){const e=Date.now();return xi().map(t=>{var a;if(!Uy(t.level))return null;const n=((a=i.progress.readingExercises)==null?void 0:a[String(t.id)])||null;if(!n)return null;const s=hr(n,t);if(i.progress.readingExercises[String(t.id)]=s,!Hd(s))return null;const r=s.dueAt?new Date(s.dueAt).getTime():0;return!r||r>e?null:{kind:"exercise",source:"reading",key:`reading:${String(t.level||"").toUpperCase()}:${t.id}`,level:String(t.level||"").toUpperCase(),exerciseId:String(t.id||""),lessonId:String(t.sourceId||""),cardId:"",dueAt:r,progress:s,exercise:t,card:null}}).filter(Boolean).sort(Mo)}function _o(){const e=fy().map(n=>{if(!(n!=null&&n.id))return null;const s=O(n.id);return{kind:"card",key:`card:${n.id}`,card:n,cardId:String(n.id),dueAt:s.dueAt?new Date(s.dueAt).getTime():0,progress:s}}).filter(Boolean),t=[...hy(),...wy()].sort(Mo);return lr(Em(e,t,xa))}function Qd(e=_o()){const t=Object.freeze(lr(e).map(n=>n.key).filter(Boolean));i.reviewSession={keys:t,initialSize:t.length,startedAt:new Date().toISOString()}}function vy(){var r;const e=_o();if(i.route!=="review")return e;i.reviewSession||Qd(e);const t=new Map(e.map(a=>[a.key,a])),n=Array.isArray((r=i.reviewSession)==null?void 0:r.keys)?i.reviewSession.keys:[],s=n.map(a=>t.get(a)).filter(Boolean);return s.length!==n.length||!s.length&&e.length?(Qd(e),e):lr(s)}function by(){const e=Date.now();return Po().filter(t=>{const n=O(t.id),s=n.dueAt?new Date(n.dueAt).getTime():0;return n.state==="Learning"&&s>e}).length}function ky(){return Po().filter(e=>O(e.id).state!=="New").length}function Fe(){if(Mr&&Pr!==null)return Pr;const e=_o().length;return Mr&&(Pr=e),e}function Mo(e,t){var l,c,u,p;if(e.dueAt!==t.dueAt)return e.dueAt-t.dueAt;const n=e.kind==="card"&&((l=e.card)!=null&&l.id)?O(e.card.id):e.progress,s=t.kind==="card"&&((c=t.card)!=null&&c.id)?O(t.card.id):t.progress,r=Xr(n),a=Xr(s);return r!==a?a-r:e.kind!==t.kind?e.kind==="card"?-1:1:e.kind==="card"&&t.kind==="card"?Number(((u=e.card)==null?void 0:u.id)||0)-Number(((p=t.card)==null?void 0:p.id)||0):String(e.key||"").localeCompare(String(t.key||""))}function Po(){const e=new Set,t=[];return Oe.forEach(n=>{fp(n).forEach(s=>{const r=String((s==null?void 0:s.id)||"");!r||e.has(r)||(e.add(r),t.push(s))})}),t.sort(_i)}function Eo(){const e=iS();return i.cards.filter(t=>{const n=i.lessons.find(r=>r.id===t.lessonId);if(n&&!Pe(n))return!1;const s=O(t.id);return s.state==="New"||s.dueAt&&new Date(s.dueAt)<=e}).sort(_i)}function _i(e,t){const n=O(e.id),s=O(t.id),r=n.dueAt?new Date(n.dueAt).getTime():0,a=s.dueAt?new Date(s.dueAt).getTime():0;if(r!==a)return r-a;if(r>0){const l=Xr(n),c=Xr(s);if(l!==c)return c-l}return Number(e.id)-Number(t.id)}function $y(){const e=i.filters.query.trim().toLocaleLowerCase(m()==="ru"?"ru-RU":"en-US");return i.cards.filter(t=>{const n=vr(t.id),s=[t.kanji,P(t),t.meaning_ru,t.hiragana,t.romaji,t.onyomi,t.onyomi_romaji,t.kunyomi,t.kunyomi_romaji,Bo(t),t.jlpt,el(t.lessonId),jr(t),n.radical,w(n.radicalMeaning||{}),...t.apps,...t.examples.flatMap(r=>[r.word,r.reading,r.romaji,r.translation,Je(r)])].join(" ").toLocaleLowerCase(m()==="ru"?"ru-RU":"en-US");return(!e||s.includes(e))&&(i.filters.jlpt==="all"||t.jlpt===i.filters.jlpt)&&(i.filters.radical==="all"||n.radical===i.filters.radical)&&(i.filters.favorites==="all"||!!i.progress.favorites[t.id])&&yy(t.strokes,i.filters.strokes)})}function yy(e,t){if(t==="all")return!0;if(t==="13+")return e>=13;const[n,s]=t.split("-").map(Number);return e>=n&&e<=s}function Do(){const e=i.cards.length,t=i.cards.filter(s=>O(s.id).state!=="New").length,n=i.cards.filter(s=>O(s.id).state==="Mastered").length;return{total:e,learned:t,mastered:n,todayCards:Eo().length,completion:D(n,e)}}function Oo(){return Object.values(i.progress.cards).reduce((e,t)=>e+(t.reviewCount||0),0)}function jy(){return(i.progress.transactions||[]).reduce((e,t)=>e+Math.max(0,Number(t.coins||0)),0)}function Xd(){const e=i.progress.totalCorrect+i.progress.totalWrong;return e?Math.round(i.progress.totalCorrect/e*100):0}function Wd(){const e={New:0,Learning:0,Review:0,Mastered:0};return i.cards.forEach(t=>{e[O(t.id).state]+=1}),e}function qd(){const e={};return i.cards.forEach(t=>{var n;e[n=t.jlpt]||(e[n]=0),O(t.id).state==="Mastered"&&(e[t.jlpt]+=1)}),e}function Et(){const e=ce();return i.progress.daily[e]||(i.progress.daily[e]={learned:0,reviews:0,mastered:0,mistakes:0,minutes:0,goalClaimed:!1}),i.progress.daily[e]}function Ko(e){return i.cards.filter(t=>t.lessonId===e)}function Sy(){return i.cards.filter(e=>{const t=i.lessons.find(n=>n.id===e.lessonId);return(!t||Pe(t))&&O(e.id).state==="New"})}function ae(e){return i.cards.find(t=>String(t.id)===String(e))}function vr(e){return i.kanjiMeta[String(e)]||{}}function Mi(e){const t=i.kanjiHints[String(e)]||{};return{hint:w(t.hint||{})||De("leya","hint"),mnemonic:w(t.mnemonic||{})||""}}function Ny(e){e&&(i.progress.favorites[e]?delete i.progress.favorites[e]:i.progress.favorites[e]=new Date().toISOString(),C(),I())}function Lt(e=null){i.readingCheck={cardId:e?String(e):null,value:"",status:null,message:""}}function Cy(e){const t=String(e||"");i.readingCheck.cardId!==t&&Lt(t)}function Vd(){const e=ae(i.readingCheck.cardId||i.activeCardId);if(!e)return;Bs(e,"reading_check"),lp();const t=Ly(i.readingCheck.value),n=Ay(e),s=t.some(c=>n.normalized.has(c)),r=t.length>0,a=r&&s?"correct":"wrong",l=r?s?m()==="ru"?"Верно. Это чтение есть у карточки.":"Correct. This reading belongs to the card.":m()==="ru"?"Почти. Попробуй другое онъёми или кунъёми.":"Almost. Try another on'yomi or kun'yomi.":m()==="ru"?"Сначала напиши чтение хираганой или катаканой.":"Type a reading in hiragana or katakana first.";i.readingCheck={cardId:e.id,value:i.readingCheck.value,status:a,message:l},_(a==="correct"?"answer_correct":"answer_wrong"),Qe(),requestAnimationFrame(()=>{const c=document.getElementById(`readingCheck-${e.id}`);c&&(c.focus(),"setSelectionRange"in c&&c.setSelectionRange(c.value.length,c.value.length))})}function Ay(e){const t=br(e),n=[...wn(t.onyomi.kana),...wn(t.kunyomi.kana),...wn(e.hiragana)].filter(Boolean),s=n.filter((r,a)=>n.indexOf(r)===a);return{normalized:new Set(s.map(Yd).filter(Boolean))}}function Ly(e){return String(e||"").split(/[\/,гЂЃпјЊ\s]+/u).map(Yd).filter(Boolean)}function Yd(e){const t=Zd(String(e||"").normalize("NFKC")).replace(/[гѓ»пЅҐ.\-]/gu,"").replace(/\s+/gu,"");return Iy(t).trim()}function Zd(e){return[...String(e||"")].map(t=>{const n=t.charCodeAt(0);return n>=12449&&n<=12534?String.fromCharCode(n-96):t}).join("")}function Iy(e){let t="";for(const n of String(e||"")){if(n==="ー"){t+=Ty(t.slice(-1));continue}t+=n}return t}function Ty(e){return"あかさたなはまやらわがざだばぱゃぁ".includes(e)?"あ":"いきしちにひみりぎ�?ぢびぴぃ".includes(e)?"い":"うくすつぬふむゆるぐずづぶぷゅぅ".includes(e)?"う":"えけせてねへめれげぜでべぺぇ".includes(e)?"え":"おこそとのほもよろをごぞどぼぽょぉ".includes(e)?"お":""}function ep(e){if(!e)return null;const t=String(e.jlpt||"").toUpperCase();let n=null;return t==="N5"?n=i.n5KanjiCatalog:t==="N4"?n=i.n4KanjiCatalog:t==="N3"?n=i.n3KanjiCatalog:t==="N2"&&(n=i.n2KanjiCatalog),!n||!Array.isArray(n)?null:n.find(s=>s&&s.kanji===e.kanji)||null}const tp={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",ゐ:"i",ゑ:"e",を:"o",ん:"n",ゔ:"vu"},np={きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ふぁ:"fa",ふぃ:"fi",ふぇ:"fe",ふぉ:"fo",しぇ:"she",じぇ:"je",ちぇ:"che",てぃ:"ti",でぃ:"di",とぅ:"tu",どぅ:"du",つぁ:"tsa",つぃ:"tsi",つぇ:"tse",つぉ:"tso",うぃ:"wi",うぇ:"we",うぉ:"wo",ゔぁ:"va",ゔぃ:"vi",ゔぇ:"ve",ゔぉ:"vo"};function br(e){const t=ep(e);if(t&&t.readings){const r=t.readings,a=Pi(r.onyomi,r.onyomi_romaji||(e==null?void 0:e.onyomi_romaji),e==null?void 0:e.onyomi),l=Pi(r.kunyomi,r.kunyomi_romaji||(e==null?void 0:e.kunyomi_romaji),e==null?void 0:e.kunyomi);if(a.kana||l.kana)return{onyomi:a,kunyomi:l}}const n=Pi(e==null?void 0:e.onyomi,e==null?void 0:e.onyomi_romaji),s=Pi(e==null?void 0:e.kunyomi,e==null?void 0:e.kunyomi_romaji);return n.kana||s.kana||n.romaji||s.romaji?{onyomi:n,kunyomi:s}:{onyomi:{kana:"",romaji:""},kunyomi:{kana:"",romaji:""}}}function wn(e){return(Array.isArray(e)?e.join(" / "):String(e||"")).split(/[\/пјЏ,пјЊгЂЃгѓ»пЅҐ;пј›]+/u).map(n=>n.trim()).filter(Boolean)}function Pi(e,t="",n=""){const s=wn(e).length?wn(e):wn(n),r=wn(t),a=s.map((l,c)=>({kana:ne(l),romaji:Ry(l,r[c])})).filter(l=>l.kana||l.romaji);return{kana:a.map(l=>l.kana).filter(Boolean).join(" / "),romaji:a.map(l=>l.romaji).filter(Boolean).join(" / ")}}function Ry(e,t){const n=sp(e);return n?t&&rp(t)===rp(n)?t:n:t||""}function sp(e){var r;const t=[...xy(e)];let n="",s=!1;for(let a=0;a<t.length;a+=1){const l=t[a],c=t[a+1]||"";if(l==="っ"){s=!0;continue}if(l==="ー"){const d=_y(n);d&&(n+=d);continue}let u="";const p=l+c;if(np[p])u=np[p],a+=1;else if(tp[l])u=tp[l];else if(/[a-zA-Z0-9]/u.test(l))u=l.toLowerCase();else{s=!1;continue}if(s){const d=((r=u.match(/^[bcdfghjklmnpqrstvwxyz]/u))==null?void 0:r[0])||"";d&&d!=="n"&&(n+=d),s=!1}n+=u}return n}function xy(e){return Zd(String(e||"").normalize("NFKC")).replace(/[()\[\]{}]/gu,"").replace(/[.\-‐-―\s]/gu,"").trim()}function _y(e){const t=String(e||"").match(/[aeiou](?!.*[aeiou])/u);return(t==null?void 0:t[0])||""}function rp(e){return String(e||"").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/gu,"").replace(/[^a-z0-9]+/gu,"")}function ip(e){return e==="onyomi"?m()==="ru"?"Онъёми":"On'yomi":m()==="ru"?"Кунъёми":"Kun'yomi"}function Ei(e){return e==="onyomi"?m()==="ru"?"Он":"On":m()==="ru"?"Кун":"Kun"}function Bo(e){const t=br(e);return[`${Ei("onyomi")}: ${t.onyomi.kana||"—"} (${t.onyomi.romaji||"—"})`,`${Ei("kunyomi")}: ${t.kunyomi.kana||"—"} (${t.kunyomi.romaji||"—"})`].join(" Р'· ")}function Fo(e){if(!e)return"";const t=e.audioSrc||e.audio||"";return op(t)||ap(e)}function ap(e){if(!(e!=null&&e.id)||!(e!=null&&e.jlpt)||!(e!=null&&e.lessonId))return"";const t=My(e.romaji);return t?`./audio/kanji/${String(e.jlpt).toLowerCase()}/${e.lessonId}/${e.id}-${t}.mp3`:""}function op(e){return e?e.startsWith("./")||e.startsWith("http")?e:e.startsWith("/")?`.${e}`:`./${e}`:""}function My(e){return String(e||"").split("/")[0].trim().toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function Py(e){return!!(Fo(e)||zo(e))}function zo(e){if(!e)return"";const t=br(e);return t.onyomi.kana||t.kunyomi.kana||e.hiragana||e.kanji||""}function Ey(e){const t=br(e);return{kanji:(e==null?void 0:e.kanji)||"",onyomi:t.onyomi.kana,kunyomi:t.kunyomi.kana,hiragana:(e==null?void 0:e.hiragana)||""}}function $s(e,t=""){const n=MS(Ey(e));return!t||t==="cycle"?n:n.filter(s=>s.kind===t)}function Dy(e){return $s(e).length>0}function Oy(e){return wn(e)[0]||String(e||"").trim()}function Jo(){if(i.route!=="learn"&&i.route!=="review")return;const e=560-(Date.now()-_s);if(e>0){window.setTimeout(Jo,e);return}const t=ae(i.activeCardId);if(!t)return;const n=$s(t).map(a=>`${a.kind}:${a.kana}`).join("|")||zo(t),s=op((t==null?void 0:t.audioSrc)||(t==null?void 0:t.audio)||"");if(!n&&!s)return;const r=`${i.route}:${t.id}:${n||s}`;r!==Nl&&(Nl=r,cp(t,{silent:!0}))}function lp(){Uo(),"speechSynthesis"in window&&window.speechSynthesis.cancel()}function Uo(){bt&&(bt.pause(),bt.currentTime=0,bt=null)}function cp(e,t={}){let n=null;const s=()=>(n||(n=up(e,t)),n);return dp(e,{kind:"cycle",silent:t.silent,fallback:s})?Promise.resolve(!0):s()}function up(e,t={}){const n=Fo(e);return n?(Uo(),bt=new Audio(n),bt.preload="auto",bt.onended=()=>{bt=null},bt.onerror=()=>{t.silent||console.warn("Kanji audio file could not be loaded.",{id:e==null?void 0:e.id,audio:n})},bt.play().then(()=>!0).catch(s=>(t.silent||console.warn("Kanji audio playback was blocked or failed.",{id:e==null?void 0:e.id,audio:n,error:s}),!1))):Promise.resolve(!1)}function dp(e,t={}){var f;Uo();let n=null;const s=typeof t.fallback=="function"?()=>(n||(n=t.fallback()),n):null,r=ne(t.text||""),a=t.kind||"cycle",l=`${(e==null?void 0:e.id)||(e==null?void 0:e.kanji)||"kanji"}:${a}`,c=$s(e);let u=null;if(!r){const v=PS(c,(f=Cl.get(l))!=null?f:-1,a);u=v.item,Cl.set(l,v.cursor)}const p=r||(u==null?void 0:u.kana)||Oy(zo(e));if(!ES(p,{onError:v=>{t.silent||console.warn("System kanji TTS failed; trying prepared audio fallback.",{id:e==null?void 0:e.id,error:v}),s==null||s()}}))return s==null||s(),!s&&!t.silent&&console.warn("Kanji audio is not available for this card.",{id:e==null?void 0:e.id,expected:ap(e)}),!1;const g=t.label||(u?No(u):"TTS");return t.silent||U(`${(e==null?void 0:e.kanji)||""} ${g}: ${p}`.trim()),!0}function Ky(e,t){U(e?`${t}: ${e}`:`${t}: ${m()==="ru"?"аудио пока не добавлено":"audio not added yet"}`)}function Pe(e){return!!e}function Di(e){var t,n;return((n=(t=i.rewards)==null?void 0:t.lessonUnlocks)==null?void 0:n[e==null?void 0:e.id])||1}function pp(e){var r;if(!e||!Pe(e))return"locked";const t=Ko(e.id);return t.length?!!((r=i.progress.lessonCompletions)!=null&&r[e.id])||t.every(a=>{const l=O(a.id);return l.state!=="New"||l.reviewCount>0||l.lastReviewedAt})?"completed":t.some(a=>{const l=O(a.id);return l.state!=="New"||l.reviewCount>0||l.lastReviewedAt})?"started":"new":"new"}function Go(e){return e==="completed"?"is-completed":e==="started"?"is-started":""}function Ho(e){const t=m()==="ru";return e==="completed"?t?"Урок пройден":"Lesson completed":e==="started"?t?"Урок начат":"Lesson started":t?"Не начат":"Not started"}function By(e){return e!=="completed"&&e!=="started"?"":`<span class="lesson-status-dot" aria-label="${h(Ho(e))}"></span>`}function Fy(e){return e!=="completed"&&e!=="started"?"":`<span class="pill lesson-status-pill ${Go(e)}">${o(Ho(e))}</span>`}function vn(e){const t=String(e||"").toUpperCase();return i.jlptLessons.find(n=>n.jlpt===t)||null}function It(e){var n,s;const t=String(e||"").toUpperCase();return((s=(n=i.jlptCatalog)==null?void 0:n.items)==null?void 0:s.find(r=>r.jlpt===t))||null}function Un(e){const t=String(e||"").toUpperCase();return t==="N5"?Z():t==="N4"?J():t==="N3"?F():t==="N2"?z():null}function zy(e,t,n="open"){const s=Y(e),r=String(t||"");if(!s||!r)return!1;const a=Un(s);return!a||(a.viewedLessons||(a.viewedLessons={}),a.viewedLessons[r])?!1:(a.viewedLessons[r]=new Date().toISOString(),!0)}function Jy(e,t){var a,l;const n=Y(e),s=String(t||"");if(!n||!s)return!1;const r=Un(n);return r?!!((a=r.viewedLessons)!=null&&a[s]||(l=r.completedLessons)!=null&&l[s]):!1}function Oi(e,t="open"){var s;const n=Y(e);return!n||((s=i.progress).viewedReadingLevels||(s.viewedReadingLevels={}),i.progress.viewedReadingLevels[n])?!1:(i.progress.viewedReadingLevels[n]=new Date().toISOString(),!0)}function Uy(e){var n;const t=Y(e);return t?!!((n=i.progress.viewedReadingLevels)!=null&&n[t]):!1}function Qo(e){const t=It(e);return Array.isArray(t==null?void 0:t.previousLevels)?t.previousLevels.map(n=>String(n||"").toUpperCase()).filter(Boolean):[]}function gp(e){var l;const t=String(e||"").toUpperCase(),n=Un(e);if(!n)return!1;if((l=n.finalTest)!=null&&l.passed)return!0;const s=It(t),r=(s==null?void 0:s.lessonCount)||(t==="N5"?10:0);let a=0;if(t==="N5"){a=En();const c=Object.keys(n.studiedKanji||{}).length;if(a>=10&&c>=80||a>=r)return!0}else if(a=Object.keys(n.completedLessons||{}).length,a>=r)return!0;return!1}function lt(e){const t=String(e||"").toUpperCase();if(Oe.includes(t)||i.progress.unlockedJlptLevels&&i.progress.unlockedJlptLevels.includes(t))return!0;if(!It(t))return t==="N5";const s=Qo(t);return s.length?s.every(r=>gp(r)):!0}function mp(e=[]){const t=e.filter(Boolean);if(!t.length)return"";if(t.length===1)return t[0];const n=m()==="ru"?"Рё":"and";return t.length===2?`${t[0]} ${n} ${t[1]}`:`${t.slice(0,-1).join(", ")} ${n} ${t[t.length-1]}`}function Dt(e){const t=Qo(e);return t.length?m()==="ru"?`Откроется после завершения ${mp(t)}.`:`Unlocks after completing ${mp(t)}.`:m()==="ru"?"Откроется после учебника N5.":"Unlocks after the N5 textbook."}function Ki(e){const t=Y(e);if(!t)return[];const n=It(t),s=i.lessons.filter(u=>String(u.jlpt||"").toUpperCase()===t),r=n?(n.lessonIds||[]).map(u=>i.lessons.find(p=>p.id===u)).filter(Boolean):s,a=new Set(r.map(u=>u.id)),l=s.filter(u=>!a.has(u.id)),c=Math.max(n?n.lessonCount||r.length:s.length,r.length);return[...r,...l].slice(0,c||s.length)}function Xo(e){var c,u,p,d;const t=Y(e);if(!t)return"";const n=Ki(t);if(!n.length)return"";const s=ej(t);if(s!=null&&s.lessonId&&zi(t,s.lessonId))return s.lessonId;const r=((c=Un(t))==null?void 0:c.currentLessonId)||"";if(r&&zi(t,r))return r;const a=t==="N5"?Z().completedLessons||{}:t==="N4"?J().completedLessons||{}:t==="N3"?F().completedLessons||{}:t==="N2"?z().completedLessons||{}:i.progress.lessonCompletions||{},l=n.filter(g=>a[g.id]);return l.length?(l.sort((g,f)=>{const v=Date.parse(a[f.id]||"")||0,b=Date.parse(a[g.id]||"")||0;return v!==b?v-b:(f.order||0)-(g.order||0)}),((p=l[0])==null?void 0:p.id)||((d=n[0])==null?void 0:d.id)||""):((u=n[0])==null?void 0:u.id)||""}function Bi(e,t=""){const n=Y(e);if(!n||!vn(n))return;if(!lt(n)){i.activeTextbookLevel=n,i.activeJlptLesson=n,He("textbooks",null,n),U(Dt(n));return}const s=i.route,r=String(t||"")||Xo(n),a=["N5","N4","N3","N2"].includes(n),l=r?`#textbooks/${encodeURIComponent(n)}/${encodeURIComponent(r)}`:`#textbooks/${encodeURIComponent(n)}`;i.route="textbooks",i.activeTextbookLevel=n,i.activeJlptLesson=n,i.activeTextbookSubroute=r||null,i.kanjiPageId=null,i.detailCardId=null,i.revealed=!1,i.navMenu=null,i.finalTestModal=null,i.finalTestBusy=!1,i.contactModal=!1,i.pendingFocus=!a&&r?`#textbook-lesson-${r}`:null,s!=="eva-room"&&(i.evaRoomShopOpen=!1),r&&Tt(n,r,"open_jlpt"),Lt(),zt(l),Vr(),I()}function Gy(e){return e?vn(e.jlpt):null}function ys(e){const t=String(e||"").toUpperCase();return i.jlptPracticeLessons.find(n=>n.jlpt===t)||null}function Gn(){return i.progress.jlptLessonPractice=tc(es().jlptLessonPractice,i.progress.jlptLessonPractice||{}),i.progress.jlptLessonPractice}function js(e){var r;if(!((r=e==null?void 0:e.drills)!=null&&r.length))return null;const t=Gn(),n=t.activeIds[e.jlpt],s=e.drills.find(a=>a.id===n);return s||(t.activeIds[e.jlpt]=e.drills[0].id,e.drills[0])}function Hy(e){const t=ys(i.activeJlptLesson),n=js(t);if(!n||!n.tiles[e])return;const s=Gn(),r=s.selected[n.id]||[],a=n.blanks.flatMap(l=>l.answer||[]).length;r.includes(e)||r.length>=a||(s.selected[n.id]=[...r,e],s.checked[n.id]=!1,s.results[n.id]=null,C(),I())}function Qy(){const e=js(ys(i.activeJlptLesson));if(!e)return;const t=Gn();t.selected[e.id]=(t.selected[e.id]||[]).slice(0,-1),t.checked[e.id]=!1,t.results[e.id]=null,C(),I()}function Xy(){const e=js(ys(i.activeJlptLesson));if(!e)return;const t=Gn();t.selected[e.id]=[],t.checked[e.id]=!1,t.results[e.id]=null,C(),I()}function Wy(){const e=js(ys(i.activeJlptLesson));if(!e)return;const t={...qo(),...Wo()},n=Gn(),s=n.selected[e.id]||[],r=e.blanks.flatMap(c=>c.answer||[]),a=r.reduce((c,u,p)=>{const d=e.tiles[s[p]];return(!d||d.kanji!==u)&&c.push(p),c},[]),l=s.length===r.length&&a.length===0;n.checked[e.id]=!0,n.results[e.id]={correct:l,wrongIndexes:a,message:l?t.correct:t.wrong},l&&!n.completed[e.id]?(n.completed[e.id]=new Date().toISOString(),Q(8,1,`jlpt_practice:${e.id}`),_("answer_correct")):l||_("answer_wrong"),C(),I()}function qy(){var a,l,c,u,p,d;const e=ys(i.activeJlptLesson),t=js(e);if(!e||!t)return;const n=e.drills.findIndex(g=>g.id===t.id),s=e.drills[(n+1)%e.drills.length],r=Gn();r.activeIds[e.jlpt]=s.id,(a=r.selected)[l=s.id]||(a[l]=[]),(c=r.checked)[u=s.id]||(c[u]=!1),(p=r.results)[d=s.id]||(p[d]=null),C(),I()}function fp(e){const t=String(e||"").toUpperCase();return t?i.cards.filter(n=>String(n.jlpt||"").toUpperCase()===t):[]}function Wo(){return m()==="ru"?{courseText:"Стратегия уровня, чтения, лексика, приложения и интерактивная практика. Контент хранится в JSON, поэтому урок можно расширять без изменения логики.",apps:"Приложения и интерфейсы",kana:"Хирагана и катакана",hiragana:"Хирагана",katakana:"Катакана",kanjiFocus:"Кандзи с фуриганой",sentenceDrill:"Поставь кандзи в пропуск",fillBlanks:"Заполни пропуск плитками по порядку.",check:"Проверить",undo:"Убрать",clear:"Очистить",next:"Следующее",correct:"Верно. +8 XP и +1 Moon Fragment.",wrong:"Почти. Проверь порядок плиток и попробуй ещё раз."}:{courseText:"Level strategy, readings, vocabulary, apps, and interactive practice. Content lives in JSON, so lessons can grow without changing app logic.",apps:"Apps and interfaces",kana:"Hiragana and katakana",hiragana:"Hiragana",katakana:"Katakana",kanjiFocus:"Kanji with furigana",sentenceDrill:"Place kanji into the blank",fillBlanks:"Fill the blank with tiles in order.",check:"Check",undo:"Undo",clear:"Clear",next:"Next",correct:"Correct. +8 XP and +1 Moon Fragment.",wrong:"Almost. Check the tile order and try again."}}function qo(){return m()==="ru"?{back:"К учебнику",courseMap:"Полноценный JLPT-модуль",courseText:"Краткая стратегия уровня, чтения, лексика и практика. Данные хранятся в JSON, поэтому урок можно расширять без изменения логики.",available:"кандзи уровня",learned:"изучено",mastered:"освоено",goals:"Цели уровня",practice:"Практика",checkpoint:"Чекпоинт"}:{back:"Back to textbook",courseMap:"Full JLPT module",courseText:"Level strategy, readings, vocabulary, and practice. The content lives in JSON, so lessons can grow without changing app logic.",available:"level kanji",learned:"learned",mastered:"mastered",goals:"Level goals",practice:"Practice",checkpoint:"Checkpoint"}}function Fi(e){var r;const t=((r=i.rewards)==null?void 0:r.levelCurve)||{baseXp:100,growth:1.35};let n=1,s=e;for(;s>=kr(n,t)&&n<100;)s-=kr(n,t),n+=1;return n}function Ot(){var r;const e=((r=i.rewards)==null?void 0:r.levelCurve)||{baseXp:100,growth:1.35};let t=1,n=i.progress.xp;for(;n>=kr(t,e)&&t<100;)n-=kr(t,e),t+=1;const s=kr(t,e);return{current:n,next:s,toNext:Math.max(0,s-n),percent:D(n,s)}}function kr(e,t){return Math.round(t.baseXp*Math.pow(t.growth,e-1))}function Vy(){const e={app:"Flash Kanji",exportedAt:new Date().toISOString(),progress:i.progress,customization:i.customization},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`flash-kanji-progress-${ce()}.json`,document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(n),U(A("export"))}function bn(e,t={}){try{return typeof window.ym!="function"?!1:(window.ym(vt,"reachGoal",e,t),!0)}catch(n){return console.warn("Metric goal failed.",n),!1}}function Yy(e){return{level:e.dataset.shareLevel||e.dataset.level||"",lessonId:e.dataset.shareLessonId||e.dataset.lessonId||e.dataset.lesson||"",toastKey:e.dataset.shareToastKey||"",reward:e.dataset.shareReward&&i.rewardModal||null}}function Y(e){const t=String(e||"").toUpperCase();return Oe.includes(t)?t:""}function ze(e){if(!e||typeof e!="object")return null;const t=Y(e.level),n=String(e.lessonId||"");if(!t||!n)return null;const s=typeof e.updatedAt=="string"&&e.updatedAt?e.updatedAt:new Date().toISOString();return{level:t,lessonId:n,updatedAt:s,source:typeof e.source=="string"&&e.source?e.source:"open"}}function Zy(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const r=Y(n),a=ze({...typeof s=="object"&&s?s:{},level:r||n});r&&a&&(t[r]=a)}),t}function Ss(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const r=String(n||"").trim();if(r){if(typeof s=="string"&&s.trim()){t[r]=s.trim();return}if(s&&typeof s=="object"){const a=typeof s.viewedAt=="string"&&s.viewedAt?s.viewedAt:typeof s.updatedAt=="string"&&s.updatedAt?s.updatedAt:new Date().toISOString();t[r]=a;return}s&&(t[r]=new Date().toISOString())}}),t}function zi(e,t){const n=Y(e),s=String(t||"");return!n||!s?!1:Ki(n).some(r=>r.id===s)}function hp(e){var t;return((t=Ki(e)[0])==null?void 0:t.id)||""}function ej(e=""){var r,a;const t=Y(e);if(t){const l=ze(((r=i.progress.lastOpenedJlptLessons)==null?void 0:r[t])||null)||(((a=ze(i.progress.lastOpenedJlptLesson||null))==null?void 0:a.level)===t?ze(i.progress.lastOpenedJlptLesson||null):null);return l&&zi(t,l.lessonId)?l:null}const n=[ze(i.progress.lastOpenedJlptLesson||null),...Object.values(i.progress.lastOpenedJlptLessons||{}).map(l=>ze(l)).filter(Boolean)].filter(Boolean);return n.sort((l,c)=>(Date.parse(c.updatedAt||"")||0)-(Date.parse(l.updatedAt||"")||0)),n.find(l=>zi(l.level,l.lessonId))||null}function tj(e=""){var s,r;const t=Y(e);if(t)return ze(((s=i.progress.lastOpenedJlptLessons)==null?void 0:s[t])||null)||(((r=ze(i.progress.lastOpenedJlptLesson||null))==null?void 0:r.level)===t?ze(i.progress.lastOpenedJlptLesson||null):null);const n=[ze(i.progress.lastOpenedJlptLesson||null),...Object.values(i.progress.lastOpenedJlptLessons||{}).map(a=>ze(a)).filter(Boolean)].filter(Boolean);return n.sort((a,l)=>(Date.parse(l.updatedAt||"")||0)-(Date.parse(a.updatedAt||"")||0)),n[0]||null}function nj(e){const t=Y(e);if(!t)return"";const n=Oe.indexOf(t);return n>=0&&n<Oe.length-1?Oe[n+1]:""}function Tt(e,t,n="open"){var g,f;const s=Y(e),r=String(t||"");if(!s||!r)return null;const a={level:s,lessonId:r,updatedAt:new Date().toISOString(),source:n},l=ze(((g=i.progress.lastOpenedJlptLessons)==null?void 0:g[s])||null),c=ze(i.progress.lastOpenedJlptLesson||null);(f=i.progress).lastOpenedJlptLessons||(f.lastOpenedJlptLessons={}),i.progress.lastOpenedJlptLessons[s]=a,i.progress.lastOpenedJlptLesson=a;const u=zy(s,r,n),p=Un(s);return p&&p.currentLessonId!==r&&(p.currentLessonId=r),(!l||l.lessonId!==r||l.level!==s||(c==null?void 0:c.lessonId)!==r||(c==null?void 0:c.level)!==s||u)&&C(),a}function Kt(e,t="btn ghost"){const n=Y(e),s=nj(n);if(!n||!s)return"";const r=hp(s);if(!r)return"";const a=m()==="ru"?`Первый урок ${s}`:`${s} lesson 1`;return`<button class="${h(t)}" type="button" data-action="final-test-next-level" data-level="${h(n)}" data-next-level="${h(s)}" data-next-lesson="${h(r)}">${o(a)}</button>`}function Bt(){var e,t;return Y(i.activeJlptLesson)||Y(i.activeTextbookLevel)||Y((e=i.jlptLessons.find(n=>lt(n.jlpt)))==null?void 0:e.jlpt)||Y((t=i.jlptLessons[0])==null?void 0:t.jlpt)||"N5"}function sj(e,t={}){const n=String(e||i.route||"home").toLowerCase();return n==="textbooks"?"textbooks":n==="textbook"?`textbooks/${encodeURIComponent(Y(t.level||i.activeTextbookLevel||Bt())||Bt())}`:n==="lesson"?`jlpt-lesson/${encodeURIComponent(Y(t.level||i.activeJlptLesson||Bt())||Bt())}`:n==="srs"?"review":n==="stats"?"stats":n==="achievements"?"achievements":n==="achievement"?i.route||"home":n||"home"}function rj(e=i.route,t={}){const n=new URL(location.href);return n.search="",n.hash=sj(e,t),n.href}function ij(e=i.route,t={}){const n=String(e||i.route||"home").toLowerCase(),s=Y(t.level||i.activeJlptLesson||i.activeTextbookLevel||""),r=m()==="ru",a={textbooks:r?"Учебники Flash Kanji":"Flash Kanji textbooks",textbook:r?"Учебник Flash Kanji":"Flash Kanji textbook",lesson:r?"Урок Flash Kanji":"Flash Kanji lesson",srs:r?"Повторение Flash Kanji":"Flash Kanji review",stats:r?"Статистика Flash Kanji":"Flash Kanji stats",achievements:r?"Достижения Flash Kanji":"Flash Kanji achievements",achievement:"Flash Kanji"},l=a[n]||a.achievement;return s&&["textbook","lesson"].includes(n)?`${l} ${s}`:l}function aj(e=i.route,t={}){const n=String(e||i.route||"home").toLowerCase(),s=Y(t.level||i.activeJlptLesson||i.activeTextbookLevel||""),r=s?It(s):null,a=t.lesson||(s?vn(s):null),l=m()==="ru";if(n==="textbooks")return l?"Функциональные учебники JLPT N5-N1 внутри Flash Kanji.":"Functional JLPT N5-N1 textbooks inside Flash Kanji.";if(n==="textbook"){const c=w((r==null?void 0:r.displayTitle)||(r==null?void 0:r.title)||{}),u=Number((r==null?void 0:r.lessonCount)||0),p=Number((r==null?void 0:r.kanjiCount)||0);return l?`${c||"Учебник"}: ${u} уроков и ${p} кандзи.`:`${c||"Textbook"}: ${u} lessons and ${p} kanji.`}if(n==="lesson"){const c=w((a==null?void 0:a.title)||{}),u=w((a==null?void 0:a.summary)||{});return l?`${s?`${s} · `:""}${c||"Урок"} — ${u||"урок в Flash Kanji"}.`:`${s?`${s} · `:""}${c||"Lesson"} — ${u||"a Flash Kanji lesson"}.`}return n==="srs"?l?"Очередь повторений Flash Kanji.":"Flash Kanji review queue.":n==="stats"?l?"Моя статистика и прогресс во Flash Kanji.":"My Flash Kanji stats and progress.":n==="achievements"?l?"Достижения и секреты Flash Kanji.":"Flash Kanji achievements and secrets.":n==="achievement"?pj(t.reward||i.rewardModal||{}):"Flash Kanji."}function oj(){return m()==="ru"?"Поделиться":"Share"}function Ns(e=i.route,t={}){var a;const n=Y(t.level||""),s=String(t.lessonId||((a=t.lesson)==null?void 0:a.id)||""),r=t.label||oj();return`
      <button class="btn ghost share-btn" type="button" data-action="share-page" data-share-section="${h(e)}" ${n?`data-share-level="${h(n)}"`:""} ${s?`data-share-lesson-id="${h(s)}"`:""} ${t.toastKey?`data-share-toast-key="${h(t.toastKey)}"`:""}>
        <span class="btn-icon" aria-hidden="true">${lj()}</span>
        <span>${o(r)}</span>
      </button>
    `}function lj(){return`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M15 5h4v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M10 14 19 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M19 14v5H5V5h5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>
    `}function wp(e){return e==="youtube"?`
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
    `}async function cj(e,t={}){var a,l;const n=t.toastKey||"shareLinkCopied",s={title:e.title,text:e.text,url:e.url};if((a=e.files)!=null&&a.length&&((l=navigator.canShare)!=null&&l.call(navigator,{files:e.files}))&&(s.files=e.files),navigator.share)try{return await navigator.share(s),"share"}catch(c){if(c&&c.name==="AbortError")return"abort"}return await hj(e.text,e.url,n)?"copy":"failed"}async function uj(e=i.route,t={}){const n=String(e||i.route||"home").toLowerCase(),s=t.reward||i.rewardModal||null,r={section:n,title:ij(n,t),text:aj(n,t),url:rj(n,t),files:[]};if(n==="achievement"||s){const a=await gj(s||{});a&&typeof File!="undefined"&&(r.files=[new File([a],`flash-kanji-achievement-${i.progress.level}.png`,{type:"image/png"})])}return r}async function vp(e=i.route,t={}){var l;const n=String(e||i.route||"home").toLowerCase(),s={...t};s.level||(s.level=t.level||i.activeJlptLesson||i.activeTextbookLevel||""),bn("share_opened",{section:n,level:Y(s.level)||""});const r=await uj(n,s),a=await cj(r,{toastKey:t.toastKey||"shareLinkCopied"});return a==="share"?(bn("share_completed",{section:n,method:(l=r.files)!=null&&l.length?"file":"web_share"}),!0):a==="copy"?(bn("share_link_copied",{section:n}),bn("share_completed",{section:n,method:"copy"}),!0):(a==="abort"||U(m()==="ru"?"Не удалось поделиться":"Share failed"),!1)}async function dj(){await vp("achievement",{reward:i.rewardModal||{},toastKey:"shareCopied"})}function pj(e={}){const t=A("shareFallback"),n=e.level||i.progress.level,s=Ot(),r=e.type==="level"?`${s.current}/${s.next}`:e.totalXp||i.progress.xp,a=e.type==="level"?i.progress.moonFragments:e.moonFragments||i.progress.moonFragments;return`${t}: ${A("level")} ${n}, ${r} XP, ${a} Moon Fragments.`}async function gj(e={}){const s=document.createElement("canvas");s.width=1200,s.height=630;const r=s.getContext("2d");if(!r)return null;mj(r,1200,630);const a=e.level||i.progress.level,l=Ot(),c=e.type==="level"?`${l.current}/${l.next}`:e.totalXp||i.progress.xp,u=e.type==="level"?i.progress.moonFragments:e.moonFragments||i.progress.moonFragments,p=e.mascot||(i.progress.level%2===0?"leya":"eva"),d=Ni(p,e.mood||"happy",e.dialog||e.type||"achievement"),[g,f]=await Promise.all([bp("assets/logo.webp"),d?bp(d):Promise.resolve(null)]);return g&&kp(r,g,58,48,330,116),f&&kp(r,f,780,95,330,450),r.fillStyle="#f7f4ee",r.font="900 58px system-ui, sans-serif",r.fillText(A("levelUp"),64,230),r.font="900 110px 'Yu Mincho', serif",r.fillStyle="#ffe15a",r.fillText(`${A("level")} ${a}`,64,340),r.font="800 38px system-ui, sans-serif",r.fillStyle="#f7f4ee",r.fillText(`${c} XP`,70,425),r.fillText(`${u} Moon Fragments`,70,482),r.fillStyle="rgba(255,255,255,0.74)",r.font="700 28px system-ui, sans-serif",r.fillText("Flash Kanji | JLPT Japanese learning",70,558),r.strokeStyle="rgba(255, 225, 90, 0.7)",r.lineWidth=3,r.strokeRect(34,30,1132,570),fj(s)}function mj(e,t,n){const s=e.createLinearGradient(0,0,t,n);s.addColorStop(0,"#08080c"),s.addColorStop(.45,"#1c1018"),s.addColorStop(1,"#071a18"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255, 56, 92, 0.22)",e.beginPath(),e.moveTo(0,70),e.lineTo(720,0),e.lineTo(560,630),e.lineTo(0,630),e.closePath(),e.fill(),e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=1;for(let r=-t;r<t*2;r+=38)e.beginPath(),e.moveTo(r,0),e.lineTo(r+t,n),e.stroke()}function bp(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=new URL(e,location.href).href})}function kp(e,t,n,s,r,a){const l=Math.min(r/t.naturalWidth,a/t.naturalHeight),c=t.naturalWidth*l,u=t.naturalHeight*l;e.drawImage(t,n+(r-c)/2,s+(a-u)/2,c,u)}function fj(e){return new Promise(t=>e.toBlob(t,"image/png",.94))}async function hj(e,t,n="shareLinkCopied"){const s=await $p(`${e}
${t}`);return U(s?A(n):e),s}async function $p(e){var n;if((n=navigator.clipboard)!=null&&n.writeText)try{return await navigator.clipboard.writeText(e),!0}catch(s){}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",document.body.append(t),t.focus(),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch(s){return!1}finally{t.remove()}}async function wj(e){var n;const t=(n=e.target.files)==null?void 0:n[0];if(t)try{const s=JSON.parse(await t.text());i.progress=Ul(es(),s.progress||s),Hr(),s.customization&&(i.customization={...Tn(),...s.customization,selected:{...Tn().selected,...s.customization.selected||{}}},Zn()),Kr(),Cs(),C(),Ft(),U(A("import")),I()}catch(s){console.error(s),U("Invalid JSON")}finally{e.target.value=""}}function vj(){if(!confirm(m()==="ru"?"Сбросить прогресс?":"Reset progress?"))return;const e=i.progress.settings;i.progress=es(),i.progress.settings=e,i.finalTestModal=null,i.finalTestBusy=!1,Hr(),Cs(),C(),I()}function bj(){i.progress.settings.theme=i.progress.settings.theme==="dark"?"light":"dark",i.progress.settings.themeManuallySelected=!0,Ft(),C(),I()}function kj(){i.progress.settings.language=m()==="ru"?"en":"ru",i.progress.settings.languageAutoDetected=!1,i.progress.settings.languageManuallySelected=!0,C(),I()}function yp(){i.progress.settings.sound=!Xt(i.progress.settings.sound,!0),i.progress.settings.uxSound=i.progress.settings.sound,Cs(),Vo(),C(),U(i.progress.settings.sound?"в™Є":"Г—")}function $j(){yp()}function $r(){return window.FlashKanjiSound||null}function yj(){var e,t;try{(t=(e=$r())==null?void 0:e.preloadSounds)==null||t.call(e)}catch(n){console.warn("UX sounds preload failed.",n)}}function Cs(){var t,n,s,r,a;const e=$r();!e||!((t=i.progress)!=null&&t.settings)||((r=e.setSoundEnabled)==null||r.call(e,Xt((s=(n=i.progress)==null?void 0:n.settings)==null?void 0:s.sound,!0)),(a=e.setSoundVolume)==null||a.call(e,Ui()))}function Ji(){var e,t;return Xt((t=(e=i.progress)==null?void 0:e.settings)==null?void 0:t.sound,!0)}function Vo(){var s,r;const e=Ie('[data-action="sound"]');if(!e)return;const t=Xt((r=(s=i.progress)==null?void 0:s.settings)==null?void 0:r.sound,!0),n=m()==="ru"?t?"Звук":"Звук выключен":t?"Sound":"Sound off";e.classList.toggle("is-muted",!t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",n),e.title=n,e.innerHTML=jj(t)}function jj(e){return e?`
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
      `}function Sj(e){return e?`
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
      `}function Nj(){const e=Ie('[data-action="notification-center"]');if(!e)return;const t=i.notificationPrompt||Cr(),n=!!(t.docked||i.notificationPromptVisible||Xi("header")),s=!!i.notificationPromptVisible,r=s?m()==="ru"?"Скрыть уведомление":"Hide notification":t.docked?m()==="ru"?"Открыть уведомление":"Open notification":m()==="ru"?"Уведомления":"Notifications";e.hidden=!n,e.classList.toggle("is-active",s),e.classList.toggle("has-prompt",!!(t.docked||s)),e.setAttribute("aria-pressed",String(s)),e.setAttribute("aria-label",r),e.title=r,e.innerHTML=Sj(s)}function Yo(){const e=Ie('[data-action="toggle-header-socials"]');if(!e)return;const t=Zo(),n=m()==="ru"?t?"Скрыть соцсети":"Открыть соцсети":t?"Hide social links":"Open social links";e.setAttribute("aria-expanded",String(t)),e.classList.toggle("is-active",t),e.setAttribute("aria-label",n),e.title=n}function jp(e){const t=document.querySelector(".app-header");t&&(t.classList.toggle("is-social-open",!!e),Yo())}function Zo(){var e;return!!((e=document.querySelector(".app-header"))!=null&&e.classList.contains("is-social-open"))}function Ui(){var t,n;const e=Number((n=(t=i.progress)==null?void 0:t.settings)==null?void 0:n.uxVolume);return Number.isFinite(e)?ge(e,0,1):.75}function Cj(e){const t=ge(Number(e),0,1);i.progress.settings.uxVolume=t,Cs(),C()}function _(e){if(!Ji())return!1;const t=()=>{var n,s;try{if(!!((s=(n=$r())==null?void 0:n.playSound)!=null&&s.call(n,e))){_s=Date.now();return}nl(String(e))}catch(r){console.warn("UX sound failed.",r),nl(String(e))}};return typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>window.setTimeout(t,0)):window.setTimeout(t,0),!0}function Ft(){var n,s,r;document.documentElement.dataset.theme=i.progress.settings.theme,document.documentElement.dataset.customTheme=((s=(n=i.customization)==null?void 0:n.selected)==null?void 0:s.theme)||"theme_default_dark";const e=_t();document.documentElement.dataset.customRoom=(e==null?void 0:e.id)||"bg_study_hub",document.documentElement.style.setProperty("--app-room-bg",Aj((e==null?void 0:e.file)||"assets/bg/bg_study_hub.webp"));const t=xh();document.documentElement.dataset.customEffect=t||"none",(r=document.querySelector('meta[name="theme-color"]'))==null||r.setAttribute("content",i.progress.settings.theme==="light"?"#f8f7f2":"#08080c")}function Aj(e){const t=String(e).replace(/["\\\n\r]/g,"");return`url("${t.startsWith("assets/")?`../${t}`:t}")`}function A(e){var t,n,s,r,a,l;return((s=(n=(t=i.i18n)==null?void 0:t.ui)==null?void 0:n[e])==null?void 0:s[m()])||((l=(a=(r=i.i18n)==null?void 0:r.ui)==null?void 0:a[e])==null?void 0:l.ru)||e}function m(){var e,t;return((t=(e=i.progress)==null?void 0:e.settings)==null?void 0:t.language)||"ru"}function w(e){return!e||typeof e!="object"?String(e||""):e[m()]||e.ru||e.en||""}function Lj(e){if(!e)return"";try{return new Intl.DateTimeFormat(m()==="ru"?"ru-RU":"en-US",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch(t){return String(e).slice(0,16)}}function yr(e){var t;return m()==="en"&&((t=i.lessonTranslations[e.id])==null?void 0:t.title_en)||e.title}function Ij(e){var t;return m()==="en"&&((t=i.lessonTranslations[e.id])==null?void 0:t.summary_en)||e.summary}function el(e){const t=i.lessons.find(n=>n.id===e);return t?yr(t):""}function P(e){return Ee(e,m())}function Ee(e,t=m()){var s,r,a,l;if(!e)return"";const n=ep(e);return n&&n.meaning?t==="en"?n.meaning.en||n.meaning.ru||e.meaning_en||((s=i.kanjiTranslations[e.id])==null?void 0:s.meaning_en)||"":n.meaning.ru||e.meaning_ru||((r=i.kanjiTranslations[e.id])==null?void 0:r.meaning_en)||e.meaning_en||"":t==="en"?((a=i.kanjiTranslations[e.id])==null?void 0:a.meaning_en)||e.meaning_en||e.meaning_ru||"":e.meaning_ru||((l=i.kanjiTranslations[e.id])==null?void 0:l.meaning_en)||e.meaning_en||""}function jr(e){var t;return m()==="en"?((t=i.kanjiTranslations[e.id])==null?void 0:t.interface_use_en)||e.interface_use_en||e.interface_use||"":e.interface_use||e.interface_use_en||""}function Je(e){if(m()!=="en")return e.translation_ru||e.translation||"";if(e.translation_en)return e.translation_en;const t=i.vocabulary.find(n=>n.word===e.word||tl(n.romaji)===tl(e.romaji));return t!=null&&t.translation_en?t.translation_en:qp[tl(e.romaji)]||e.translation||""}function tl(e){return String(e||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function As(e){var t,n;return((n=(t=i.dialogues)==null?void 0:t.mascots)==null?void 0:n[e])||{name:{ru:e,en:e},sprites:{},dialogs:{}}}function De(e,t){var a,l;const n=e==="eva"?Tj(t):"";if(n)return n;const s=((a=As(e).dialogs)==null?void 0:a[t])||((l=As(e).dialogs)==null?void 0:l.welcome)||{},r=s[m()]||s.ru||[""];return Ue(r)}function Tj(e="welcome"){const t=String(e||"welcome").toLowerCase();if(!["welcome","progress","hint","lessoncomplete","masterymilestone","achievement"].includes(t))return"";const n=Rj(t),s=[...i.evaAutonomyLines||[],...si()].filter(l=>{const c=w((l==null?void 0:l.text)||{});if(!c)return!1;const u=Array.isArray(l.tags)?l.tags:[];if(!(n.includes(l.category)||u.some(g=>n.includes(g))))return!1;const d=Sp(c);return d.length>=12&&d.length<=132}),r=s.filter(l=>!da.includes(l.id)),a=Ue(r.length?r:s);return a?(a.id&&(da=[a.id,...da.filter(l=>l!==a.id)].slice(0,18)),Sp(w(a.text||{}))):""}function Rj(e){return{welcome:["fis_study","fis_focus","fis_observation","fis_short","study","short","mood","room"],progress:["fis_reward","fis_streak","fis_review","reward","streak","review","progress"],hint:["fis_focus","fis_observation","hint","study"],lessoncomplete:["fis_reward","fis_streak","reward","study"],masterymilestone:["fis_reward","fis_streak","reward","progress"],achievement:["fis_reward","reward","achievement"]}[e]||["fis_study","study"]}function Sp(e){const t=String(e||"").replace(/\s+/g," ").trim();if(t.length<=132)return t;const n=t.match(/[^.!?гЂ'пјЃпјџ]+[.!?гЂ'пјЃпјџ]?/g)||[t];let s="";for(const r of n){const a=`${s} ${r.trim()}`.trim();if(a.length>132)break;s=a}return s.length>=12?s:`${t.slice(0,124).trimEnd()}...`}function Gi(e){const t=Np(e);return`<span class="pill ${t}">${o(Wp[t]||"New")}</span>`}function Np(e){const t=String(e||"new").toLowerCase();return t==="new"||t==="learning"||t==="review"||t==="mastered"?t:t==="New".toLowerCase()?"new":t.includes("master")?"mastered":t.includes("learn")?"learning":t.includes("review")?"review":"new"}function Cp(e){const t=(e.correct||0)+(e.wrong||0);return t?Math.round((e.correct||0)/t*100):0}function xj(){const e=getComputedStyle(document.documentElement);return{text:e.getPropertyValue("--text").trim(),muted:e.getPropertyValue("--muted").trim(),line:e.getPropertyValue("--line").trim(),red:e.getPropertyValue("--accent").trim(),yellow:e.getPropertyValue("--accent-2").trim(),green:e.getPropertyValue("--accent-3").trim(),blue:e.getPropertyValue("--accent-4").trim(),danger:e.getPropertyValue("--danger").trim(),pink:"#ff91d8",blueSoft:"rgba(67, 214, 255, 0.16)",dangerSoft:"rgba(255, 107, 95, 0.16)"}}function _j(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.text}}},scales:{x:{ticks:{color:e.muted},grid:{color:e.line}},y:{beginAtZero:!0,ticks:{color:e.muted,precision:0},grid:{color:e.line}}}}}function Hi(){try{return xr||(xr=new(window.AudioContext||window.webkitAudioContext)),xr.state==="suspended"&&xr.resume().catch(()=>null),xr}catch(e){return console.warn("Audio context unavailable.",e),null}}function Mj(e){const t=String(e||"").toLowerCase();return t.includes("wrong")||t.includes("failed")?{type:"triangle",frequencies:[180],duration:.22,peak:.12,interval:0}:t.includes("correct")||t.includes("success")?{type:"triangle",frequencies:[440,554.37],duration:.18,peak:.11,interval:.09}:t.includes("level")||t.includes("achievement")||t.includes("reward")||t.includes("xp")||t.includes("moon")||t.includes("unlock")?{type:"sine",frequencies:[523.25,659.25,783.99],duration:.26,peak:.1,interval:.08}:t.includes("close")?{type:"square",frequencies:[260],duration:.12,peak:.08,interval:0}:t.includes("open")||t.includes("button")||t.includes("click")||t.includes("tab")||t.includes("page")?{type:"sine",frequencies:[320],duration:.09,peak:.08,interval:0}:{type:"sine",frequencies:[360],duration:.16,peak:.08,interval:0}}function nl(e){const t=Hi();if(!t)return!1;try{const n=Mj(e),s=t.currentTime+.01;return n.frequencies.forEach((r,a)=>{const l=t.createOscillator(),c=t.createGain();l.type=n.type,l.frequency.value=r;const u=s+n.interval*a;c.gain.setValueAtTime(1e-4,u),c.gain.exponentialRampToValueAtTime(n.peak,u+.02),c.gain.exponentialRampToValueAtTime(1e-4,u+n.duration),l.connect(c).connect(t.destination),l.start(u),l.stop(u+n.duration+.02)}),_s=Date.now(),!0}catch(n){return console.warn("Fallback UX tone failed.",n),!1}}window.FlashKanjiUxToneFallback=nl;function Pj(){const e=()=>{const t=Hi();(t==null?void 0:t.state)==="suspended"&&t.resume().catch(()=>null)};["pointerdown","touchstart","keydown","mousedown"].forEach(t=>{document.addEventListener(t,e,{once:!0,passive:!0,capture:!0})})}function Sr(e){if(i.progress.settings.sound){if($r()){_(e==="again"?"answer_wrong":"answer_correct");return}try{const t=Hi();if(!t)return;_s=Date.now();const n=t.createOscillator(),s=t.createGain(),r=t.currentTime;n.type="triangle",n.frequency.value=e==="again"?180:480,s.gain.setValueAtTime(1e-4,r),s.gain.exponentialRampToValueAtTime(.13,r+.015),s.gain.exponentialRampToValueAtTime(1e-4,r+.18),n.connect(s).connect(t.destination),n.start(r),n.stop(r+.2)}catch(t){console.warn("Audio unavailable.",t)}}}function Ej(){if(i.progress.settings.sound)try{const e=Hi();if(!e)return;_s=Date.now();const t=e.currentTime;[523.25,659.25,783.99].forEach((n,s)=>{const r=e.createOscillator(),a=e.createGain();r.type="sine",r.frequency.value=n;const l=t+s*.08;a.gain.setValueAtTime(1e-4,l),a.gain.exponentialRampToValueAtTime(.12,l+.02),a.gain.exponentialRampToValueAtTime(1e-4,l+.24),r.connect(a).connect(e.destination),r.start(l),r.stop(l+.26)})}catch(e){console.warn("Achievement sound unavailable.",e)}}function Dj(){const e=document.createElement("div");e.className="confetti",e.innerHTML=Array.from({length:34},(t,n)=>`<i style="--x:${Math.random()*100}vw;--d:${Math.random()*.8+.8}s;--r:${Math.random()*360}deg;--c:${n%4}"></i>`).join(""),document.body.append(e),window.setTimeout(()=>e.remove(),1800)}function U(e){const t=Ie("#toast");t.textContent=e,t.hidden=!1,clearTimeout(Al),Al=window.setTimeout(()=>{t.hidden=!0},2400)}function Oj(){return`
      <section class="boot-screen loading" aria-label="Flash Kanji loading">
        <div class="boot-panel">
          <div class="boot-panel-brand">
            <img class="boot-brand-logo" src="assets/brand/flash-kanji-logo.webp" alt="Flash Kanji" loading="eager" decoding="async" />
            <div>
              <p class="eyebrow">JLPT N5-N1 · ${o(m()==="ru"?"Учебники":"Textbooks")} · ${o(m()==="ru"?"Повторение":"Review")}</p>
              <h1 class="hero-title">Flash Kanji</h1>
            </div>
          </div>
          <p class="hero-subtitle">${o(m()==="ru"?"Кандзи через учебники и SRS-повторение.":"Kanji through textbooks and SRS review.")}</p>
          <div class="hero-actions" aria-hidden="true">
            <button class="btn primary" type="button" disabled>冊 ${o(m()==="ru"?"Учебники":"Textbooks")}</button>
            <button class="btn" type="button" disabled>文 ${o(m()==="ru"?"Словарь":"Dictionary")}</button>
            <button class="btn ghost" type="button" disabled>↻ ${o(m()==="ru"?"Повторение":"Review")}</button>
          </div>
          <div class="boot-status" role="status">${o(m()==="ru"?"Загрузка Flash Kanji...":"Loading Flash Kanji...")}</div>
        </div>
      </section>`}function Kj(e){return`<section class="empty-state" style="margin-top:24px"><span class="kanji-char">警</span><h1>Data error</h1><p>${o(e.message)}</p></section>`}function Bj(){try{[Me,Ts,Rr,"flashKanji.lastForcedBuild"].forEach(t=>{try{localStorage.removeItem(t)}catch(n){console.warn(`Could not remove recovery key ${t}.`,n)}})}catch(e){console.warn("Could not clear Flash Kanji recovery markers during boot recovery.",e)}}async function Fj(){if("caches"in window){const e=await caches.keys();await Promise.all(e.map(t=>caches.delete(t)))}if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(async t=>{try{await t.unregister()}catch(n){console.warn("Could not unregister service worker during boot recovery.",n)}}))}}async function zj(e){try{const t=Number(sessionStorage.getItem(Tr)||"0");if(t>=2)return!1;const n=t+1;sessionStorage.setItem(Tr,String(n)),console.warn(`[FlashKanji] Boot failed, attempting recovery stage ${n}.`,e),n>=2&&Bj(),await Fj();try{localStorage.removeItem(Me),localStorage.removeItem(Ts),localStorage.removeItem(Rr),localStorage.removeItem("flashKanji.lastForcedBuild")}catch(r){console.warn("Boot recovery marker cleanup failed.",r)}const s=new URL(location.href);return s.searchParams.set("cachebust",Date.now().toString()),s.searchParams.set("bootRecovery",String(n)),location.replace(s.toString()),!0}catch(t){return console.warn("Boot recovery failed.",t),!1}}function Jj(){if(!("serviceWorker"in navigator)||location.protocol==="file:")return;let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,location.reload())}),navigator.serviceWorker.addEventListener("message",n=>{var s;if(((s=n.data)==null?void 0:s.type)==="FLASH_KANJI_CACHE_RESET_DONE")try{localStorage.setItem(Ts,`${K}:done`)}catch(r){console.warn("Cannot save PWA cache reset marker.",r)}});const t=async()=>{try{const n=new URL("service-worker.js",document.baseURI),s=await navigator.serviceWorker.register(n.href);Uj(s),await s.update().catch(console.warn)}catch(n){console.warn(n)}};document.readyState==="loading"?window.addEventListener("load",()=>{t()},{once:!0}):t()}function Uj(e){e&&e.addEventListener("updatefound",()=>{const t=e.installing;t&&t.addEventListener("statechange",()=>{(t.state==="installed"||t.state==="activated")&&e.update().catch(()=>null)})})}function Qi(){const e={declineCount:0,nextShowAt:0,neverShow:!1,installed:!1};try{const t=localStorage.getItem(M)||localStorage.getItem(R);if(!t)return e;const n=JSON.parse(t),s={...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,installed:!!n.installed};return localStorage.getItem(M)||localStorage.setItem(M,JSON.stringify(s)),s}catch(t){return console.warn("PWA install prompt state reset.",t),e}}function sl(){try{localStorage.setItem(M,JSON.stringify(i.pwaInstallPrompt))}catch(e){console.warn("Cannot save PWA install prompt state.",e)}}function Gj(e){e.preventDefault(),Ht=e,i.progress&&i.i18n&&Qj()}async function Hj(){if(bn("pwa_install_clicked",{available:!!Ht,ios:Ls()}),Nr()){il();return}if(!Ht){i.pwaInstallHelpVisible=!0,Qe();return}const e=Ht;Ht=null;try{await e.prompt();const t=await e.userChoice;if((t==null?void 0:t.outcome)==="accepted"){il();return}al()}catch(t){console.warn("PWA install prompt failed.",t),al()}}function Nr(){return["standalone","fullscreen","minimal-ui"].some(t=>{var n,s;return(s=(n=window.matchMedia)==null?void 0:n.call(window,`(display-mode: ${t})`))==null?void 0:s.matches})||Reflect.get(navigator,"standalone")===!0}function rl(){var n,s;const e=i.pwaInstallPrompt||Qi();if(Nr()||e.installed||e.neverShow||Date.now()<Number(e.nextShowAt||0))return!1;const t=(s=(n=i.progress)==null?void 0:n.visits)==null?void 0:s.firstVisitDate;return!t||$n(t,ce())<1?!1:!!Ht||Ls()}function Qj(){rl()&&(bn("pwa_prompt_shown",{source:Ht?"browser":"ios"}),_("notification_soft"),I())}function il(){i.pwaInstallPrompt={...Qi(),...i.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},i.pwaInstallHelpVisible=!1,sl(),bn("pwa_installed",{platform:Ls()?"ios":"browser"}),Tp(),i.progress&&i.i18n&&I()}function al(){const e=i.pwaInstallPrompt||Qi(),t=Math.min(Number(e.declineCount||0)+1,5);i.pwaInstallPrompt={...e,declineCount:t,nextShowAt:Xj(t),neverShow:t>=5,installed:!1},sl(),I()}function Xj(e){const s={1:864e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||864e5)}function Wj(){!Nr()||i.pwaInstallPrompt.installed||(i.pwaInstallPrompt={...i.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},sl())}function Ls(){const e=navigator.userAgent||"",t=/iphone|ipad|ipod/i.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=/safari/i.test(e)&&!/(crios|fxios|edgios|opios|chrome|android)/i.test(e);return t&&n}function Ap(){return m()==="en"?{badge:"Offline PWA",title:"Install Flash Kanji on your home screen?",description:"Your progress, lessons and reviews will open like a real app.",iosInstruction:"Tap Share -> Add to Home Screen.",install:"Install app",later:"Later"}:{badge:"Offline PWA",title:"Установить Flash Kanji на главный экран?",description:"Так прогресс, уроки и повторения будут открываться как приложение.",iosInstruction:"Нажмите Поделиться → На экран Домой.",install:"установить приложение",later:"Позже"}}function Cr(){const e={declineCount:0,nextShowAt:0,neverShow:!1,permission:typeof Notification=="undefined"?"unsupported":Notification.permission,enabled:!1,acceptedAt:null,lastAskedAt:0,lastShown:{},periodicSync:!1,docked:!1};try{const t=localStorage.getItem(G);if(!t)return e;const n=JSON.parse(t);return{...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,enabled:!!n.enabled,lastShown:n.lastShown&&typeof n.lastShown=="object"?n.lastShown:{},docked:!!n.docked}}catch(t){return console.warn("Notification prompt state reset.",t),e}}function kn(){try{localStorage.setItem(G,JSON.stringify(i.notificationPrompt))}catch(e){console.warn("Cannot save notification prompt state.",e)}}function Ar(){clearTimeout(oa),oa=0}function qj(){Ar(),i.notificationPromptVisible&&(oa=window.setTimeout(()=>{i.notificationPromptVisible&&Lp()},5e3))}function Lp(){var e;Ar(),!(!i.notificationPromptVisible&&((e=i.notificationPrompt)!=null&&e.docked))&&(i.notificationPromptVisible=!1,i.notificationPrompt={...i.notificationPrompt,docked:!0},kn(),I())}function Ip(){var e;return Nr()||!!((e=i.pwaInstallPrompt)!=null&&e.installed)}function Xi(e="usage"){const t=i.notificationPrompt||Cr();return!(!("Notification"in window)||t.neverShow||t.enabled||!Ip()||Notification.permission==="granted"||Notification.permission==="denied"||Date.now()<Number(t.nextShowAt||0)||e!=="lesson_complete"&&Date.now()-ga<2*60*1e3)}function Wi(e="usage"){return Xi(e)?(i.notificationPromptVisible=!0,i.notificationPrompt={...i.notificationPrompt,docked:!1},kn(),_("notification_soft"),qj(),I(),!0):("Notification"in window&&Notification.permission==="granted"&&Rp(),!1)}function Tp(){if(clearTimeout(Ll),!Ip())return;const e=Math.max(0,2*60*1e3-(Date.now()-ga));Ll=window.setTimeout(()=>Wi("usage"),e)}async function Vj(){if(i.notificationPromptVisible=!1,Ar(),!("Notification"in window)){qi();return}try{const e=Notification.permission==="granted"?"granted":await Notification.requestPermission();if(i.notificationPrompt.permission=e,i.notificationPrompt.lastAskedAt=Date.now(),e==="granted"){Rp(),U(_p().enabled),Qe();return}qi()}catch(e){console.warn("Notification permission failed.",e),qi()}}function Rp(){!("Notification"in window)||Notification.permission!=="granted"||(Ar(),i.notificationPrompt={...Cr(),...i.notificationPrompt,permission:"granted",enabled:!0,neverShow:!0,docked:!1,acceptedAt:i.notificationPrompt.acceptedAt||new Date().toISOString(),nextShowAt:0},kn(),ol())}function qi(){const e=i.notificationPrompt||Cr(),t=Math.min(Number(e.declineCount||0)+1,5);i.notificationPromptVisible=!1,Ar(),i.notificationPrompt={...e,permission:"Notification"in window?Notification.permission:"unsupported",declineCount:t,nextShowAt:Yj(t),neverShow:t>=5,enabled:!1,docked:!1,lastAskedAt:Date.now()},kn(),Qe()}function Yj(e){const s={1:432e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||12*36e5)}function ol(){!("Notification"in window)||Notification.permission!=="granted"||(i.notificationPrompt.permission="granted",i.notificationPrompt.enabled=!0,kn(),pa.forEach(e=>clearTimeout(e)),pa.clear(),[{type:"daily_bonus",hour:9,minute:0},{type:"lesson",hour:11,minute:30},{type:"review",hour:18,minute:0},{type:"streak",hour:20,minute:30}].forEach(e=>xp(e.type,Zj(e.hour,e.minute))),sS())}function xp(e,t){const n=Math.max(1e3,Math.min(t.getTime()-Date.now(),2147483647)),s=window.setTimeout(async()=>{await eS(e),xp(e,rS(t,1))},n);pa.set(e,s)}function Zj(e,t){const n=new Date;return n.setHours(e,t,0,0),n.getTime()<=Date.now()+60*1e3&&n.setDate(n.getDate()+1),n}async function eS(e){var n;if(!tS(e))return!1;const t=nS(e);try{const s=await((n=navigator.serviceWorker)==null?void 0:n.ready);return s!=null&&s.showNotification?await s.showNotification(t.title,t.options):"Notification"in window&&Notification.permission==="granted"&&new Notification(t.title,t.options),_(e==="daily_bonus"?"notification_reward":"notification_reminder"),i.notificationPrompt.lastShown[e]=ce(),kn(),!0}catch(s){return console.warn("Notification show failed.",s),!1}}function tS(e){var t,n,s;if(!("Notification"in window)||Notification.permission!=="granted"||((t=i.notificationPrompt.lastShown)==null?void 0:t[e])===ce())return!1;if(e==="review")return Fe()>0;if(e==="daily_bonus"){const r=Ur(i.progress.dailyBonusPending);return!!((n=i.progress.visits)!=null&&n.firstVisitDate)&&!!r&&r.availableOn<=ce()&&!i.progress.dailyBonuses[ce()]}return e==="lesson"?Sy().length>0:e==="streak"?(i.progress.streak.current||((s=i.progress.visits)==null?void 0:s.streak)||0)>0:!0}function nS(e){const t=m()==="ru",n={review:{title:"Flash Kanji",body:t?"Ваши кандзи ждут повторения.":"Your kanji are waiting for review.",url:"./index.html#review"},streak:{title:t?"Лея рядом 🌙":"Leya is nearby рџЊ™",body:t?"Не потеряйте свою серию дней.":"Do not lose your daily streak.",url:"./index.html#home"},daily_bonus:{title:t?"Ежедневный бонус":"Daily Bonus",body:t?"Заберите XP и Moon Fragments.":"Claim XP and Moon Fragments.",url:"./index.html#home"},lesson:{title:t?"Новые знания ждут":"New knowledge awaits",body:t?"Продолжите изучение кандзи.":"Continue learning kanji.",url:"./index.html#textbooks"}},s=n[e]||n.review;return{title:s.title,options:{body:s.body,tag:`flash-kanji-${e}`,renotify:!1,icon:"./assets/icon-192.png",badge:"./assets/icon-192.png",data:{url:s.url,type:e}}}}async function sS(){var e;try{const t=await((e=navigator.serviceWorker)==null?void 0:e.ready);if(!(t!=null&&t.periodicSync))return;await t.periodicSync.register("flash-kanji-daily",{minInterval:24*60*60*1e3}),i.notificationPrompt.periodicSync=!0,kn()}catch(t){i.notificationPrompt.periodicSync=!1,kn()}}function _p(){return m()==="en"?{badge:"PWA reminders",title:"Allow Flash Kanji notifications?",description:"We will remind you about reviews, streaks and daily bonuses.",allow:"Allow",later:"Later",enabled:"Notifications enabled"}:{badge:"PWA напоминания",title:"Разрешить уведомления Flash Kanji?",description:"Мы напомним о повторениях, серии и ежедневном бонусе.",allow:"Разрешить",later:"Позже",enabled:"Уведомления включены"}}function oe(e){return{...e,history:[...e.history||[]]}}function rS(e,t){return new Date(e.getTime()+t*24*60*60*1e3)}function iS(){const e=new Date;return e.setHours(23,59,59,999),e}function ce(){return ll(new Date)}function ll(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function cl(e){const[t,n,s]=e.split("-").map(Number);return new Date(t,n-1,s)}function $n(e,t){return Math.round((cl(t)-cl(e))/864e5)}function Mp(e,t){const n=cl(e);return n.setDate(n.getDate()+t),ll(n)}function aS(e){return Array.from({length:e},(t,n)=>{const s=new Date;return s.setDate(s.getDate()-(e-1-n)),ll(s)})}function Hn(e){if(!e)return m()==="ru"?"сейчас":"now";const t=new Date(e).getTime()-Date.now();if(t<=0)return m()==="ru"?"сейчас":"now";const n=Math.ceil(t/6e4);if(n<60)return m()==="ru"?`через ${n} мин.`:`in ${n} min`;const s=Math.ceil(n/60);if(s<24)return m()==="ru"?`через ${s} ч.`:`in ${s} h`;const r=Math.ceil(s/24);return m()==="ru"?`через ${r} дн.`:`in ${r} d`}function D(e,t){return t?ge(Math.round(e/t*100),0,100):0}function ge(e,t,n){return Math.max(t,Math.min(n,e))}function Vi(e,t){const n=10**t;return Math.round(e*n)/n}function Ue(e){return e[Math.floor(Math.random()*e.length)]}function yn(e,t){return Math.floor(Number(e)+Math.random()*(Number(t)-Number(e)))}function Lr(e,t){return String(e)===String(t)?"selected":""}function oS(){const e=decodeURIComponent(location.pathname||"/"),t=e.replace(/\/textbooks(?:\/[^/?#]*)*\/?$/i,"/")||"/";if(t!==e||/^\/?textbooks(?:\/|$)/i.test(e))return t.endsWith("/")?t:`${t}/`;if(/\/[^/]+\.html$/i.test(e)){const n=e.replace(/[^/]+\.html$/i,"")||"/";return n.endsWith("/")?n:`${n}/`}return e.endsWith("/")?e:`${e}/`}function Pp(e="",t=""){const n=String(e||"").trim().toUpperCase(),s=String(t||"").trim(),r=n?`#textbooks/${encodeURIComponent(n)}`:"#textbooks/";return s?`${r}/${encodeURIComponent(s)}`:r}function zt(e=""){const t=String(e||"").trim(),n=t?t.startsWith("#")?t:`#${t.replace(/^#/,"")}`:"",s=`${oS()}${location.search||""}${n}`;`${location.pathname}${location.search||""}${location.hash||""}`!==s&&history.replaceState(null,"",s)}function Ep(){return hl(location.hash).raw}function ul(){return hl(location.hash).route}function dl(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^kanji\/([^/?]+)/);return t?t[1]:""}function pl(){const e=Ep(),t=e.match(/^textbooks\/([^/?#]+)/i)||e.match(/^jlpt\/([^/?#]+)/i);return t?String(t[1]||"").toUpperCase():""}function gl(){const e=Ep(),t=e.match(/^textbooks\/[^/?#]+\/([^?#]+)/i)||e.match(/^jlpt\/[^/?#]+\/([^?#]+)/i);return t?String(t[1]||""):""}function Dp(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^learn(?:\/([^/?#]+))?/i),n=String((t==null?void 0:t[1])||"").toLowerCase();return n===Gt?Gt:n===Nn?Nn:xs}function Op(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^learn\/lesson\/([^/?#]+)/i);return t?String(t[1]||""):""}function Kp(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^learn\/legacy\/([^/?#]+)/i);return t?String(t[1]||""):""}function ml(){const t=decodeURIComponent(location.hash.replace("#","")).match(/^jlpt-lesson\/([^/?#]+)/i);return t?String(t[1]||"").toUpperCase():""}function lS(){return Bn().filter(e=>Is(e.id)).length}function Is(e){var n,s;const t=(s=(n=i.progress)==null?void 0:n.achievements)==null?void 0:s[e];return!!(t&&(t===!0||typeof t=="string"||t.unlockedAt||t.rewardXp!==void 0))}function o(e){return String(e!=null?e:"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function h(e){return o(e)}})();
