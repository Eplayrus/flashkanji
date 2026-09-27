(function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))$(y);new MutationObserver(y=>{for(const A of y)if(A.type==="childList")for(const I of A.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&$(I)}).observe(document,{childList:!0,subtree:!0});function j(y){const A={};return y.integrity&&(A.integrity=y.integrity),y.referrerPolicy&&(A.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?A.credentials="include":y.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function $(y){if(y.ep)return;y.ep=!0;const A=j(y);fetch(y.href,A)}})();const j1="modulepreload",S1=function(w,v){return new URL(w,v).href},Qh={},Yh=function(v,j,$){let y=Promise.resolve();if(j&&j.length>0){const I=document.getElementsByTagName("link"),R=document.querySelector("meta[property=csp-nonce]"),B=R?.nonce||R?.getAttribute("nonce");y=Promise.allSettled(j.map(ae=>{if(ae=S1(ae,$),ae in Qh)return;Qh[ae]=!0;const Re=ae.endsWith(".css"),_t=Re?'[rel="stylesheet"]':"";if(!!$)for(let St=I.length-1;St>=0;St--){const er=I[St];if(er.href===ae&&(!Re||er.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${ae}"]${_t}`))return;const ct=document.createElement("link");if(ct.rel=Re?"stylesheet":j1,Re||(ct.as="script"),ct.crossOrigin="",ct.href=ae,B&&ct.setAttribute("nonce",B),document.head.appendChild(ct),Re)return new Promise((St,er)=>{ct.addEventListener("load",St),ct.addEventListener("error",()=>er(new Error(`Unable to preload CSS for ${ae}`)))})}))}function A(I){const R=new Event("vite:preloadError",{cancelable:!0});if(R.payload=I,window.dispatchEvent(R),!R.defaultPrevented)throw I}return y.then(I=>{for(const R of I||[])R.status==="rejected"&&A(R.reason);return v().catch(A)})},C1="ru",x1={ru:{code:"ru",urlSegment:"ru",hreflang:"ru",nativeName:"Русский",englishName:"Russian",direction:"ltr",intlLocale:"ru-RU",fallbackLocale:"en",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.92,tts:{preferredLang:"ru-RU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},en:{code:"en",urlSegment:"en",hreflang:"en",nativeName:"English",englishName:"English",direction:"ltr",intlLocale:"en-US",fallbackLocale:"ru",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.88,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},es:{code:"es",urlSegment:"es",hreflang:"es",nativeName:"Español",englishName:"Spanish",direction:"ltr",intlLocale:"es-ES",fallbackLocale:"en",publicationStatus:"pilot",uiStatus:"pilot",contentStatus:"pilot",seoStatus:"noindex",translationCompleteness:.08,tts:{preferredLang:"es-ES",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"pt-BR":{code:"pt-BR",urlSegment:"pt-br",hreflang:"pt-BR",nativeName:"Português do Brasil",englishName:"Brazilian Portuguese",direction:"ltr",intlLocale:"pt-BR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pt-BR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},de:{code:"de",urlSegment:"de",hreflang:"de",nativeName:"Deutsch",englishName:"German",direction:"ltr",intlLocale:"de-DE",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"de-DE",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},fr:{code:"fr",urlSegment:"fr",hreflang:"fr",nativeName:"Français",englishName:"French",direction:"ltr",intlLocale:"fr-FR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"fr-FR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},it:{code:"it",urlSegment:"it",hreflang:"it",nativeName:"Italiano",englishName:"Italian",direction:"ltr",intlLocale:"it-IT",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"it-IT",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},pl:{code:"pl",urlSegment:"pl",hreflang:"pl",nativeName:"Polski",englishName:"Polish",direction:"ltr",intlLocale:"pl-PL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pl-PL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},uk:{code:"uk",urlSegment:"uk",hreflang:"uk",nativeName:"Українська",englishName:"Ukrainian",direction:"ltr",intlLocale:"uk-UA",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"uk-UA",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},tr:{code:"tr",urlSegment:"tr",hreflang:"tr",nativeName:"Türkçe",englishName:"Turkish",direction:"ltr",intlLocale:"tr-TR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"tr-TR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hans":{code:"zh-Hans",urlSegment:"zh-cn",hreflang:"zh-Hans",nativeName:"简体中文",englishName:"Simplified Chinese",direction:"ltr",intlLocale:"zh-Hans-CN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-CN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hant":{code:"zh-Hant",urlSegment:"zh-tw",hreflang:"zh-Hant",nativeName:"繁體中文",englishName:"Traditional Chinese",direction:"ltr",intlLocale:"zh-Hant-TW",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-TW",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ko:{code:"ko",urlSegment:"ko",hreflang:"ko",nativeName:"한국어",englishName:"Korean",direction:"ltr",intlLocale:"ko-KR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ko-KR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},vi:{code:"vi",urlSegment:"vi",hreflang:"vi",nativeName:"Tiếng Việt",englishName:"Vietnamese",direction:"ltr",intlLocale:"vi-VN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"vi-VN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},id:{code:"id",urlSegment:"id",hreflang:"id",nativeName:"Bahasa Indonesia",englishName:"Indonesian",direction:"ltr",intlLocale:"id-ID",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"id-ID",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},th:{code:"th",urlSegment:"th",hreflang:"th",nativeName:"ไทย",englishName:"Thai",direction:"ltr",intlLocale:"th-TH",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"th-TH",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hi:{code:"hi",urlSegment:"hi",hreflang:"hi",nativeName:"हिन्दी",englishName:"Hindi",direction:"ltr",intlLocale:"hi-IN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hi-IN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ar:{code:"ar",urlSegment:"ar",hreflang:"ar",nativeName:"العربية",englishName:"Arabic",direction:"rtl",intlLocale:"ar",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ar",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Tahoma, Arial, system-ui, sans-serif"},ja:{code:"ja",urlSegment:"ja",hreflang:"ja",nativeName:"日本語",englishName:"Japanese interface",direction:"ltr",intlLocale:"ja-JP",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"source",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ja-JP",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"'Noto Sans JP', Inter, system-ui, sans-serif"},nl:{code:"nl",urlSegment:"nl",hreflang:"nl",nativeName:"Nederlands",englishName:"Dutch",direction:"ltr",intlLocale:"nl-NL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"nl-NL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},cs:{code:"cs",urlSegment:"cs",hreflang:"cs",nativeName:"Čeština",englishName:"Czech",direction:"ltr",intlLocale:"cs-CZ",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"cs-CZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ro:{code:"ro",urlSegment:"ro",hreflang:"ro",nativeName:"Română",englishName:"Romanian",direction:"ltr",intlLocale:"ro-RO",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ro-RO",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hu:{code:"hu",urlSegment:"hu",hreflang:"hu",nativeName:"Magyar",englishName:"Hungarian",direction:"ltr",intlLocale:"hu-HU",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hu-HU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},be:{code:"be",urlSegment:"be",hreflang:"be",nativeName:"Беларуская",englishName:"Belarusian",direction:"ltr",intlLocale:"be-BY",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"be-BY",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},kk:{code:"kk",urlSegment:"kk",hreflang:"kk",nativeName:"Қазақша",englishName:"Kazakh",direction:"ltr",intlLocale:"kk-KZ",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"kk-KZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"en-XA":{code:"en-XA",urlSegment:"en-xa",hreflang:"en-XA",nativeName:"[!! English pseudo !!]",englishName:"Pseudo locale",direction:"ltr",intlLocale:"en-US",fallbackLocale:"en",publicationStatus:"internal",uiStatus:"pseudo",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"}},nu={defaultLocale:C1,locales:x1},N1=["home","learn","review","dictionary","download","about","kanji","writing","stats","achievements","eva-room","jlpt-lesson","textbooks"],Zd="not-found",Jr=nu.defaultLocale,L1=new Set(["home","review","dictionary","download","about","writing","stats","achievements","eva-room"]),gv=/^n[1-5]$/i,A1=/^(?:hiragana|katakana)$/i,I1=/^[A-Za-z0-9_-]+$/,T1=/^[\p{Letter}\p{Number}_-]+$/u,R1=/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/,_1=/^[a-z]{2}(?:-[a-z0-9]{2,8})?$/i,P1=new Map(Object.entries(nu.locales).map(([w,v])=>[String(v.urlSegment).toLowerCase(),w]));function Ae(w,v,j,$,y={},A=Jr,I={}){return{status:"valid",source:w,route:v,locale:A,params:y,raw:j,segments:$,...I}}function he(w,v,j,$=[],y=Jr,A){return{status:"not-found",source:w,route:Zd,locale:y,params:{},raw:j,segments:$,reason:v,canonicalPath:A}}function mv(w){return!!(w&&N1.includes(w))}function Gd(w){const v=String(w||"").trim().toUpperCase();return gv.test(v)?v:""}function fv(w){const v=String(w||"").trim().toLowerCase();return A1.test(v)?v:""}function hv(w){try{return{ok:!0,value:decodeURIComponent(w)}}catch{return{ok:!1}}}function su(w){return w.replace(/^\/+|\/+$/g,"").split("/").filter(Boolean)}function We(w,v,j=su(v)){return he("hash",w,v,j)}function qd(w){return I1.test(w)}function E1(w){return T1.test(w)}function ws(w){const v=String(w||"").replace(/^#/,"").trim(),j=hv(v);if(!j.ok)return We("invalid-parameter",v,[]);const $=j.value.replace(/^\/+|\/+$/g,""),y=su($),A=(y[0]||"home").toLowerCase();if(!y.length)return Ae("hash","home",$,y);if(A==="jlpt"){if(y.length<2||y.length>3)return We("unknown-route",$,y);const I=Gd(y[1]);if(!I)return We("invalid-parameter",$,y);const R=y[2]||"";return R&&!qd(R)?We("invalid-parameter",$,y):Ae("hash","textbooks",$,y,{level:I,subroute:R,legacyRoute:"jlpt"})}if(A==="textbooks"){if(y.length>3)return We("unknown-route",$,y);if(y.length===1)return Ae("hash","textbooks",$,y);const I=Gd(y[1]),R=fv(y[1]);if(!I&&!R)return We("invalid-parameter",$,y);const B=y[2]||"";return B&&!qd(B)?We("invalid-parameter",$,y):Ae("hash","textbooks",$,y,R?{course:R,subroute:B}:{level:I,subroute:B})}if(A==="jlpt-lesson"){if(y.length!==2)return We("unknown-route",$,y);const I=Gd(y[1]);return I?Ae("hash","jlpt-lesson",$,y,{level:I}):We("invalid-parameter",$,y)}if(A==="kanji"){if(y.length!==2)return We("unknown-route",$,y);const I=y[1];return E1(I)?Ae("hash","kanji",$,y,{cardId:I}):We("invalid-parameter",$,y)}if(A==="learn"){if(y.length===1)return Ae("hash","learn",$,y,{view:"map"});if(y.length!==3)return We("unknown-route",$,y);const I=y[1].toLowerCase(),R=y[2];return!["lesson","legacy"].includes(I)||!qd(R)?We("invalid-parameter",$,y):Ae("hash","learn",$,y,{view:I,targetId:R})}return L1.has(A)?y.length!==1?We("unknown-route",$,y):Ae("hash",A,$,y):(mv(A),We("unknown-route",$,y))}function M1(w){return String(w||"/").split(/[?#]/,1)[0]||"/"}function K1(w){const v=M1(w),j=hv(v);if(!j.ok)return{ok:!1,raw:v};const $=j.value.replace(/\/{2,}/g,"/"),y=$.startsWith("/")?$:`/${$}`,A=y===""?"/":y;return{ok:!0,path:A,segments:su(A)}}function D1(w){return P1.get(w.toLowerCase())||null}function Zs(w,v="/"){return`/${nu.locales[w].urlSegment}${v.startsWith("/")?v:`/${v}`}`}function vv(w){const v=K1(w);if(!v.ok)return he("pathname","invalid-parameter",v.raw,[],null);const{path:j,segments:$}=v,y=j;if(j==="/"||/^\/index\.html$/i.test(j))return Ae("pathname","home",y,$,{},Jr,{kind:"app-shell",canonicalPath:"/"});if(/^\/index(?:\/dist)?(?:\/index\.html)?\/?$/i.test(j))return Ae("pathname","home",y,$,{},Jr,{kind:"legacy-index",canonicalPath:"/"});if(/^\/download\/?$/i.test(j))return Ae("pathname","download",y,$,{},Jr,{kind:"download",canonicalPath:"/download/"});if(!$.length)return Ae("pathname","home",y,$,{},Jr,{kind:"app-shell",canonicalPath:"/"});const A=D1($[0]);if(!A){const R=_1.test($[0])?"unknown-locale":"unknown-route";return he("pathname",R,y,$,null)}if($.length===1)return Ae("pathname","home",y,$,{},A,{kind:"localized-home",canonicalPath:Zs(A,"/")});const I=$[1].toLowerCase();if(I==="download"&&$.length===2)return Ae("pathname","download",y,$,{},A,{kind:"download",canonicalPath:Zs(A,"/download/")});if(I==="textbooks"){if($.length===2)return Ae("pathname","textbooks",y,$,{},A,{kind:"textbooks",canonicalPath:Zs(A,"/textbooks/")});if($.length===3){const R=$[2].toLowerCase(),B=fv(R);return B?Ae("pathname","textbooks",y,$,{course:B},A,{kind:"kana-course",canonicalPath:Zs(A,`/textbooks/${B}/`)}):gv.test(R)?Ae("pathname","textbooks",y,$,{level:R.toUpperCase()},A,{kind:"textbook-level",canonicalPath:Zs(A,`/textbooks/${R}/`)}):he("pathname","invalid-parameter",y,$,A)}return he("pathname","unknown-route",y,$,A)}if(I==="kanji"){if($.length===2)return Ae("pathname","dictionary",y,$,{},A,{kind:"kanji-hub",canonicalPath:Zs(A,"/kanji/")});if($.length===3){const R=$[2].toLowerCase();return R1.test(R)?Ae("pathname","kanji",y,$,{slug:R},A,{kind:"kanji-page",canonicalPath:Zs(A,`/kanji/${R}/`)}):he("pathname","invalid-parameter",y,$,A)}return he("pathname","unknown-route",y,$,A)}return he("pathname","unknown-route",y,$,A)}function Zh(w){const v=vv(w);return v.status==="valid"&&(v.kind==="app-shell"||v.kind==="legacy-index")}function F1(w){const v=()=>w(ws(window.location.hash));return window.addEventListener("hashchange",v),()=>window.removeEventListener("hashchange",v)}function O1(){let w=0,v=null;return{begin(j){v?.abort(),v=new AbortController;const $=++w,y=v;return{route:j,token:$,signal:y.signal,isCurrent:()=>w===$&&!y.signal.aborted}},abort(){v?.abort()}}}const ai=[5,60,12*60,24*60,2*24*60,4*24*60],Hd={again:"Again",forgot:"Again",hard:"Hard",good:"Good",remember:"Good",easy:"Easy"};function ot(w){const v=w&&typeof w=="object"?w:{},j=J1(v.state??v.stage),$=G1(v.dueAt??v.nextReview),y=vs(v.reviewCount??v.reviews,0),A=vs(v.correct,0),I=vs(v.wrong,0),R={...v,state:j,dueAt:$,reviewCount:y,intervalDays:vs(v.intervalDays,0),easeFactor:vs(v.easeFactor,2.5),srsStep:vs(v.srsStep,j==="New"?-1:0),lapses:vs(v.lapses,0),correct:A,wrong:I,successRate:vs(v.successRate,A+I?Math.round(A/(A+I)*100):0),history:Array.isArray(v.history)?v.history.slice(-120):[]};return delete R.nextReview,delete R.reviews,delete R.stage,delete R.lastReview,R}function ke(w,v,j=v,$=new Date){const y=ot(w),A=U1(y,v),I={...y,history:[...y.history]};let R=y.srsStep,B=y.easeFactor;A==="again"?(R=0,B=Math.max(1.3,B-.2),I.state="Learning",I.wrong+=1,y.state!=="New"&&(I.lapses+=1)):A==="hard"?(R=Math.max(1,R),B=Math.max(1.3,B-.15),I.correct+=1):A==="easy"?(R=R<0?2:R+2,B=Math.min(3.2,B+.15),I.correct+=1):(R=R<0?0:R+1,I.correct+=1);const ae=q1(R)/1440;return A!=="again"&&(I.state=ae<1?"Learning":"Review"),I.correct>=8&&ae>=30&&(I.state="Mastered"),I.srsStep=R,I.easeFactor=nv(B,2),I.intervalDays=nv(ae,6),I.dueAt=new Date($.getTime()+ae*864e5).toISOString(),I.reviewCount+=1,I.successRate=Math.round(I.correct/Math.max(I.correct+I.wrong,1)*100),I.lastReviewedAt=$.toISOString(),I.lastRating=Hd[j]||Hd[A],I.lastDecision=Hd[A],I.history=[...I.history,{at:$.toISOString(),rating:I.lastRating,decision:I.lastDecision,from:y.state,to:I.state,intervalDays:ae,srsStep:R}].slice(-120),I}const ev=Object.freeze({cards:4,exercises:1});function eu(w,v=Date.now()){const j=new Map;for(const $ of w){if(!$.cardId||$.state==="New")continue;const y=$.dueAt?Date.parse($.dueAt):Number.NaN;Number.isFinite(y)&&y<=v&&!j.has($.cardId)&&j.set($.cardId,$)}return[...j.values()].sort(($,y)=>Date.parse($.dueAt||"")-Date.parse(y.dueAt||""))}function tv(w,v=Date.now()){const j=eu(w,v);let $=0,y=0;const A=Object.freeze(j.filter(B=>B.kind==="exercise"?y++<ev.exercises:$++<ev.cards).map(B=>Object.freeze({...B}))),I=new Set(A.map(B=>B.cardId)),R=new Set;return{initial:A,totalDue:j.length,complete(B){I.has(B)&&R.add(B)},get remaining(){return A.filter(B=>!R.has(B.cardId))},get remainingCount(){return A.length-R.size}}}function Wd(w,v,j=new Date){let $=0;for(const y of new Set(v.filter(Boolean))){const A=w[y];A&&(A.state!=="New"||A.reviewCount>0||A.dueAt||A.history?.length)||(w[y]={...ot(A),state:"Learning",srsStep:0,intervalDays:5/1440,dueAt:new Date(j.getTime()+5*6e4).toISOString(),enrolledAt:j.toISOString()},$+=1)}return $}function B1(w,v){let j=0;for(const $ of v){const y=w[$.id];if(y&&(y.state!=="New"||y.reviewCount||y.dueAt||y.history?.length))continue;const A=$.aliases.map(I=>w[I]).filter(I=>I&&I.state!=="New");A.sort((I,R)=>(Date.parse(String(R.lastReviewedAt||""))||0)-(Date.parse(String(I.lastReviewedAt||""))||0)||R.reviewCount-I.reviewCount),A[0]&&(w[$.id]={...A[0],history:[...A[0].history]},j+=1)}return j}function z1(w,v){return Object.entries(w).reduce((j,[$,y])=>{const A=v.get($);return A&&A!==$&&w[A]?.state!=="New"&&w[A]?j:j+(Number(y.reviewCount)||0)},0)}function U1(w,v){return v==="again"||v==="forgot"?"again":v!=="remember"?v:w.state==="New"?"good":w.state==="Learning"?w.successRate>=70||w.correct>=2?"good":"hard":w.successRate>=88&&w.correct>=5&&w.lapses<=1?"easy":w.successRate<70||w.lapses>Math.max(1,Math.floor(w.correct/3))?"hard":"good"}function J1(w){const v=String(w||"new").toLowerCase();return v.includes("master")?"Mastered":v.includes("learn")?"Learning":v.includes("review")?"Review":"New"}function G1(w){return typeof w!="string"||!Number.isFinite(Date.parse(w))?null:new Date(w).toISOString()}function vs(w,v){const j=Number(w);return Number.isFinite(j)&&j>=0?j:v}function nv(w,v){const j=10**v;return Math.round(w*j)/j}function q1(w){return w<ai.length?ai[Math.max(0,w)]:ai[ai.length-1]*2**(w-(ai.length-1))}const wv="flashKanji.progress.v2",H1="flashKanji.progress.v1";function W1(w=localStorage){const v=w.getItem(wv)||w.getItem(H1);if(!v)return null;try{const j=JSON.parse(v);if(!j||typeof j!="object")return null;const $=j;return $.progress&&typeof $.progress=="object"?$.progress:$}catch(j){return console.warn("Flash Kanji ignored damaged LocalStorage progress.",j),null}}function V1(w){return!w||typeof w!="object"?{}:Object.fromEntries(Object.entries(w).map(([v,j])=>[v,ot(j)]))}function X1(w,v=localStorage){try{return v.setItem(wv,JSON.stringify(w)),!0}catch(j){return console.warn("Flash Kanji could not save LocalStorage progress.",j),!1}}function sv(){const w=new Map;return{get(v,j){const $=w.get(v);if($)return $;const y=j().catch(A=>{throw w.get(v)===y&&w.delete(v),A});return w.set(v,y),y},delete(v){w.delete(v)}}}function Q1(w,v){if(!w.length||w.some(y=>!v.has(y.kanji)))return!1;const j=new Set(w.map(y=>y.kanji));return v.size-j.size+w.length>=Math.max(4,w.length)}const Y1=/[\/／,、;；\s]+/u,Z1=/[\u30a1-\u30f6]/g,eI=/[()[\]{}.\-‐-―]/gu;function tI(w){return String(w||"").normalize("NFKC").replace(Z1,v=>String.fromCharCode(v.charCodeAt(0)-96))}function bv(w){return(Array.isArray(w)?w.join(" / "):String(w||"")).split(Y1).map(j=>tI(j).replace(eI,"").trim()).filter(Boolean)}function nI(w){if(!w)return[];const v=[...av("onyomi","On",w.onyomi),...av("kunyomi","Kun",w.kunyomi)],j=new Set,$=v.filter(I=>{const R=I.kana;return!R||j.has(R)?!1:(j.add(R),!0)});if($.length)return $;const y=bv(w.hiragana)[0];if(y)return[{kind:"hiragana",kana:y,label:"Kana"}];const A=String(w.kanji||"").trim();return A?[{kind:"kanji",kana:A,label:"Kanji"}]:[]}function sI(w,v=-1,j=""){const $=j&&j!=="cycle"?w.filter(A=>A.kind===j):w;if(!$.length)return{item:null,cursor:-1};const y=(Number(v)+1)%$.length;return{item:$[y],cursor:y}}function rv(w,v={}){const j=String(w||"").trim(),$=typeof window<"u"?window:void 0,y=v.synth||$?.speechSynthesis,A=v.Utterance||$?.SpeechSynthesisUtterance;if(!j||!y||!A)return!1;y.cancel();const I=new A(j);I.lang="ja-JP",I.rate=v.rate??.92,I.voice=rI(y),I.onstart=()=>v.onStart?.(),I.onend=()=>v.onEnd?.(),I.onerror=R=>v.onError?.(R);try{return y.speak(I),!0}catch(R){return v.onError?.(R),!1}}function av(w,v,j){return bv(j).map($=>({kind:w,kana:$,label:v}))}function rI(w){const v=typeof w.getVoices=="function"?w.getVoices():[];return v.find(j=>/^ja[-_]?JP$/iu.test(j.lang))||v.find(j=>/^ja/iu.test(j.lang))||null}const kv=["hiragana","katakana"];function ve(w){return kv.includes(String(w||"").toLowerCase())}function tu(w){return String(w??"").normalize("NFKC").trim().replace(/\s+/gu," ").toLowerCase()}function aI(w,v){const j=tu(w);return j?(Array.isArray(v)?v:[]).some(y=>tu(y)===j):!1}function iI(){return{schema_version:1,content_version:"2026-08-kana-v1",settings:{showRomaji:!0},courses:{}}}function Vd(w){const v=iI();if(!w||typeof w!="object")return v;const j=w,$=j.settings&&typeof j.settings=="object"?j.settings:{},y=j.courses&&typeof j.courses=="object"?j.courses:{},A={};for(const I of kv){const R=y[I]&&typeof y[I]=="object"?y[I]:{},B=R.review&&typeof R.review=="object"?R.review:{};A[I]={currentRoute:typeof R.currentRoute=="string"?R.currentRoute:"",lessons:ci(R.lessons,dI),practices:ci(R.practices,uI),finalTest:cI(R.finalTest),review:Object.fromEntries(Object.entries(B).map(([ae,Re])=>[ae,ot(Re)])),writing:R.writing&&typeof R.writing=="object"?{...R.writing}:{},updatedAt:typeof R.updatedAt=="string"?R.updatedAt:null}}return{...v,...j,schema_version:1,content_version:"2026-08-kana-v1",settings:{...v.settings,showRomaji:typeof $.showRomaji=="boolean"?$.showRomaji:v.settings.showRomaji},courses:A}}function oI(w,v){var j;return(j=w.courses)[v]||(j[v]={currentRoute:"",lessons:{},practices:{},finalTest:yv(),review:{},writing:{},updatedAt:null}),w.courses[v]}function yv(){return{sections:{},completed:!1,passed:!1,latestScore:0,bestScore:0,score:0,total:0,updatedAt:null}}function lI(w,v,j=new Date){const $={},y={};let A=0;const I=w.items.length;for(const R of w.items){const B=String(v[R.number]??"");$[R.number]=B;const ae=aI(B,R.accepted_answers);y[R.number]=ae,ae&&(A+=1)}return{answers:$,correct:y,score:A,total:I,completed:I>0,passed:I>0&&A/I>=.8,updatedAt:j.toISOString()}}function Xd(w,v){const j=w.map(R=>v[R.id]).filter(Boolean),$=w.reduce((R,B)=>R+B.items.length,0),y=j.reduce((R,B)=>R+Number(B.score||0),0),A=j.reduce((R,B)=>R+Number(B.total||0),0),I=j.reduce((R,B)=>R+Math.max(Number(B.score||0),0),0);return{latestScore:y,bestScore:I,completed:$>0&&A>=$,passed:$>0&&y/$>=.8}}function iv(w,v,j=new Date){return ke(w,v,v,j)}function cI(w){const v=w&&typeof w=="object"?w:{},j=Vo(v),$=ci(v.sections,Vo);return{...yv(),sections:$,completed:!!(v.completed||j.completed),passed:!!(v.passed||j.passed),latestScore:Number(v.latestScore||j.score||0),bestScore:Number(v.bestScore||j.score||0),score:Number(v.score||v.latestScore||j.score||0),total:Number(v.total||j.total||0),updatedAt:typeof v.updatedAt=="string"?v.updatedAt:j.updatedAt}}function Vo(w){const v=w&&typeof w=="object"?w:{};return{answers:v.answers&&typeof v.answers=="object"?{...v.answers}:{},correct:v.correct&&typeof v.correct=="object"?{...v.correct}:{},score:Number(v.score||0),total:Number(v.total||0),completed:!!v.completed,passed:!!v.passed,updatedAt:typeof v.updatedAt=="string"?v.updatedAt:null}}function dI(w){const v=w&&typeof w=="object"?w:{};return{exercises:ci(v.exercises,Vo),completed:!!v.completed,passed:!!v.passed,latestScore:Number(v.latestScore||0),bestScore:Number(v.bestScore||0),updatedAt:typeof v.updatedAt=="string"?v.updatedAt:null}}function uI(w){const v=w&&typeof w=="object"?w:{};return{exercises:ci(v.exercises,Vo),completed:!!v.completed,passed:!!v.passed,latestScore:Number(v.latestScore||0),bestScore:Number(v.bestScore||0),updatedAt:typeof v.updatedAt=="string"?v.updatedAt:null}}function ci(w,v){return!w||typeof w!="object"?{}:Object.fromEntries(Object.entries(w).map(([j,$])=>[j,v($)]))}const $v=109492033,pI=["learning_start","lesson_open","lesson_complete","review_open","review_session_complete","kanji_open","writing_complete","final_test_start","final_test_complete","final_test_pass","progress_export","apk_download","pwa_install_click","pwa_installed","share_opened","share_completed","share_link_copied"],gI={home:"/app/home",review:"/app/review",dictionary:"/app/dictionary",download:"/app/download",about:"/app/about",writing:"/app/writing",stats:"/app/stats",achievements:"/app/achievements","eva-room":"/app/eva-room"},mI={ru:{home:"Flash Kanji — Главная",learn:"Flash Kanji — Маршрут обучения",review:"Flash Kanji — Повторение",dictionary:"Flash Kanji — Словарь кандзи",download:"Flash Kanji — Скачать приложение",about:"Flash Kanji — О проекте",writing:"Flash Kanji — Практика письма",stats:"Flash Kanji — Статистика",achievements:"Flash Kanji — Достижения","eva-room":"Flash Kanji — Eva Room","not-found":"Flash Kanji — Страница не найдена"},en:{home:"Flash Kanji — Home",learn:"Flash Kanji — Learning path",review:"Flash Kanji — Review",dictionary:"Flash Kanji — Kanji dictionary",download:"Flash Kanji — Download app",about:"Flash Kanji — About",writing:"Flash Kanji — Writing practice",stats:"Flash Kanji — Stats",achievements:"Flash Kanji — Achievements","eva-room":"Flash Kanji — Eva Room","not-found":"Flash Kanji — Not Found"}},fI=/^[\p{Letter}\p{Number}_-]{1,96}$/u,hI=/^[a-z][a-z0-9_]{1,64}$/,vI=/^[a-z][a-z0-9_-]{0,48}$/i,wI=/^N[1-5]$/i,ov=new Set;let li="";function jv(w,v={}){if(!w||w.status==="not-found")return"/app/not-found";const j=w.params||{},$=String(w.route||v.route||"home");if($==="learn"){const y=tn(j.view||v.activeLearnView||"map").toLowerCase(),A=tn(j.targetId||v.activeLearnNodeId||v.activeLearnLegacyLessonId);return y==="lesson"&&A?`/app/learn/lesson/${A}`:y==="legacy"&&A?`/app/learn/legacy/${A}`:"/app/learn"}if($==="textbooks"){const y=di(j.level||v.activeTextbookLevel),A=tn(j.subroute||v.activeTextbookSubroute);return y?A?`/app/textbooks/${y}/${A}`:`/app/textbooks/${y}`:"/app/textbooks"}if($==="kanji"){const y=tn(j.cardId||v.kanjiPageId||j.slug);return y?`/app/kanji/${y}`:"/app/kanji"}if($==="jlpt-lesson"){const y=di(j.level||v.activeJlptLesson);return y?`/app/jlpt-lesson/${y}`:"/app/jlpt-lesson"}return gI[$]||"/app/not-found"}function Sv(w,v={}){const j=jI(v),$=mI[j];if(!w||w.status==="not-found")return $["not-found"];const y=w.params||{},A=String(w.route||v.route||"home");if(A==="learn"){const I=tn(y.view||v.activeLearnView||"map").toLowerCase(),R=tn(y.targetId||v.activeLearnNodeId||v.activeLearnLegacyLessonId);return I==="lesson"&&R?j==="ru"?`Flash Kanji — Урок маршрута ${R}`:`Flash Kanji — Path lesson ${R}`:I==="legacy"&&R?j==="ru"?`Flash Kanji — Урок ${R}`:`Flash Kanji — Lesson ${R}`:$.learn}if(A==="textbooks"){const I=di(y.level||v.activeTextbookLevel).toUpperCase(),R=tn(y.subroute||v.activeTextbookSubroute);return I?R?["final","final-test"].includes(R)?j==="ru"?`Flash Kanji — JLPT ${I} · Финальный тест`:`Flash Kanji — JLPT ${I} · Final test`:j==="ru"?`Flash Kanji — JLPT ${I} · Урок ${lv(R)}`:`Flash Kanji — JLPT ${I} · Lesson ${lv(R)}`:j==="ru"?`Flash Kanji — Учебник JLPT ${I}`:`Flash Kanji — JLPT ${I} textbook`:j==="ru"?"Flash Kanji — Учебники":"Flash Kanji — Textbooks"}if(A==="kanji"){const I=tn(y.cardId||v.kanjiPageId||y.slug),R=CI(v,I)||I;return j==="ru"?`Flash Kanji — Кандзи ${R}`:`Flash Kanji — Kanji ${R}`}if(A==="jlpt-lesson"){const I=di(y.level||v.activeJlptLesson).toUpperCase();return I?j==="ru"?`Flash Kanji — JLPT ${I}`:`Flash Kanji — JLPT ${I}`:$.learn}return $[A]||$["not-found"]}function bI(w,v={}){const j=jv(w,v),$=Sv(w,v);return li=j,typeof window<"u"&&(window.__FLASH_KANJI_METRIKA_INITIAL_PATH=j),yn("prime",{virtualPath:j,title:$}),{sent:!1,virtualPath:j,title:$,reason:"duplicate"}}function kI(w,v={}){const j=jv(w,v),$=Sv(w,v);if(j===li)return yn("skip-pageview-duplicate",{virtualPath:j,title:$,previousVirtualPath:li}),{sent:!1,virtualPath:j,title:$,reason:"duplicate"};const y=li||void 0;try{return typeof window>"u"?{sent:!1,virtualPath:j,title:$,referer:y,reason:"no-window"}:typeof window.ym!="function"?(yn("skip-pageview-missing-ym",{virtualPath:j,title:$,previousVirtualPath:y}),{sent:!1,virtualPath:j,title:$,referer:y,reason:"missing-ym"}):(window.ym($v,"hit",j,{title:$,...y?{referer:y}:{}}),li=j,yn("pageview",{virtualPath:j,title:$,previousVirtualPath:y}),{sent:!0,virtualPath:j,title:$,referer:y})}catch(A){return yn("pageview-error",{virtualPath:j,title:$,previousVirtualPath:y,error:A instanceof Error?A.message:String(A)}),{sent:!1,virtualPath:j,title:$,referer:y,reason:"error"}}}function yI(w,v={},j={}){const $=$I(w);if(!$)return yn("skip-goal-invalid",{goal:w}),!1;const y=j.dedupeKey?`${$}:${j.dedupeKey}`:"";if(y&&ov.has(y))return yn("skip-goal-duplicate",{goal:$,params:Go(v),dedupeKey:y}),!1;try{if(typeof window>"u")return!1;if(typeof window.ym!="function")return yn("skip-goal-missing-ym",{goal:$,params:Go(v)}),!1;const A=Go(v);return window.ym($v,"reachGoal",$,A),y&&ov.add(y),yn("goal",{goal:$,params:A}),!0}catch(A){return yn("goal-error",{goal:$,params:Go(v),error:A instanceof Error?A.message:String(A)}),!1}}function $I(w){const v=String(w||"").trim().toLowerCase();return hI.test(v)&&(pI.includes(v)||/^social_[a-z0-9_]+_opened$/.test(v))?v:""}function Go(w){const v={},j=tn(w.route).toLowerCase(),$=di(w.level).toUpperCase(),y=tn(w.lessonId),A=tn(w.cardId),I=SI(w.source);return j&&(v.route=j),$&&(v.level=$),y&&(v.lessonId=y),A&&(v.cardId=A),I&&(v.source=I),v}function jI(w){return String(w.progress?.settings?.language||"ru").toLowerCase()==="en"?"en":"ru"}function di(w){const v=String(w||"").trim().toUpperCase();return wI.test(v)?v.toLowerCase():""}function tn(w){const v=String(w||"").trim();return fI.test(v)?encodeURIComponent(v):""}function SI(w){const v=String(w||"").trim();return vI.test(v)?v.toLowerCase():""}function lv(w){const v=w.match(/-(\d+)$/);return v?.[1]?String(Number(v[1])):w}function CI(w,v){if(!v||!Array.isArray(w.cards))return"";const j=xI(v),$=w.cards.find(y=>String(y.id||"")===j||String(y.slug||"")===j);return String($?.kanji||"").trim()}function xI(w){try{return decodeURIComponent(w)}catch{return w}}function yn(w,v){NI()&&console.debug(`[Flash Kanji Metrika] ${w}`,v)}function NI(){if(typeof window>"u")return!1;try{if(new URLSearchParams(window.location.search||"").get("debugMetrika")==="1")return!0;const v=String(window.location.hash||"").split("?",2)[1]||"";return new URLSearchParams(v).get("debugMetrika")==="1"}catch{return!1}}const Xo="flashKanji.hasVisited",Qo="flashKanji.changelog.lastSeenVersion",Cv=new Set;function LI(w){if(!w||typeof w!="object")return null;const v=w,j=String(v.currentVersion||"").trim();if(!j)return null;const $=Array.isArray(v.entries)?v.entries.map(TI).filter(y=>!!y):[];return $.length?{currentVersion:j,entries:$}:null}function AI(w,v,j,$={}){const y=w?.currentVersion||"",A=w?.entries.find(B=>B.version===y)||w?.entries[0]||null;return!w||!y||!A||Cv.has(y)?{currentVersion:y,shouldShow:!1,shouldMarkHandled:!1,entry:null}:cv(j,Qo)===y?{currentVersion:y,shouldShow:!1,shouldMarkHandled:!1,entry:null}:!($.hadPriorVisit||cv(j,Xo)==="true"||$.useProgressSignals!==!1&&II(v))?{currentVersion:y,shouldShow:!1,shouldMarkHandled:!0,entry:null}:{currentVersion:y,shouldShow:!0,shouldMarkHandled:!1,entry:A}}function Qd(w,v){const j=String(w||"").trim();j&&(Cv.add(j),dv(v,Xo,"true"),dv(v,Qo,j))}function II(w){if(!w||typeof w!="object")return!1;const v=w;return!!(oi(v.appOpens)>0||ii(v.lessonCompletions)>0||ii(v.cards)>0||ii(v.seenKanji)>0||ii(v.daily)>0||ii(v.favorites)>0||PI(v.transactions)>0||oi(v.totalMoonFragmentsEarned)>0||oi(v.secrets?.evaClicks)>0||v.secrets?.nightVisit||oi(v.visits?.streak)>0||oi(v.visits?.bestStreak)>0)}function TI(w){if(!w||typeof w!="object")return null;const v=w,j=String(v.version||"").trim();return j?{version:j,date:String(v.date||"").trim(),title:RI(v.title),items:_I(v.items)}:null}function RI(w){const v=w&&typeof w=="object"?w:{};return{ru:String(v.ru||v.en||"").trim(),en:String(v.en||v.ru||"").trim()}}function _I(w){const v=w&&typeof w=="object"?w:{},j=Array.isArray(v.ru)?v.ru.map(y=>String(y||"").trim()).filter(Boolean):[],$=Array.isArray(v.en)?v.en.map(y=>String(y||"").trim()).filter(Boolean):[];return{ru:j.length?j:$,en:$.length?$:j}}function cv(w,v){try{return w?.getItem(v)||""}catch{return""}}function dv(w,v,j){try{w?.setItem(v,j)}catch{}}function ii(w){return w&&typeof w=="object"&&!Array.isArray(w)?Object.keys(w).length:0}function PI(w){return Array.isArray(w)?w.length:0}function oi(w){const v=Number(w||0);return Number.isFinite(v)?v:0}const EI="bg_study_hub",qo="outfit_fis_mentor";function ui(w,v=0){const j=Number(w),$=Number(v),y=Number.isFinite(j)?j:Number.isFinite($)?$:0;return Math.max(0,Math.floor(y))}function Ve(w){const v=[],j=$=>{const y=String($??"").trim();y&&v.push(y)};return Array.isArray(w)||w instanceof Set?w.forEach(j):typeof w=="string"?w.split(",").forEach(j):w&&typeof w=="object"&&Object.entries(w).forEach(([$,y])=>{y!==!1&&y!==null&&y!==void 0&&j($)}),[...new Set(v)]}function lt(w){return String(w??"").trim()}function MI(w){return(Array.isArray(w)?w:[]).filter(v=>String(v?.type||"")==="background"&&lt(v?.id))}function KI(w){return(Array.isArray(w)?w:[]).filter(v=>String(v?.type||"")==="outfit"&&lt(v?.id))}function Yo(w){return!!w?.defaultOwned||ui(w?.price)===0}function uv(w){const v=lt(w.fallbackId)||EI,j=MI(w.catalogItems),$=new Map(j.map(I=>[lt(I.id),I])),y=new Set(Ve(w.owned));j.forEach(I=>{const R=lt(I.id);Yo(I)&&y.add(R)});const A=I=>{const R=lt(I);if(!R)return null;const B=$.get(R);return B&&(y.has(R)||Yo(B))?R:null};return A(w.customizationSelected)||A(w.progressEquipped)||A(w.progressSelected)||A(v)||v}function pv(w){const v=lt(w.fallbackId)||qo,j=KI(w.catalogItems),$=new Map(j.map(R=>[lt(R.id),R])),y=new Set(Ve(w.owned));j.forEach(R=>{const B=lt(R.id),ae=lt(R.spriteId);Yo(R)&&y.add(B),ae&&y.has(ae)&&y.add(B)});const A=R=>{const B=lt(R);if(!B)return null;const ae=$.get(B);if(ae)return ae;const Re=B.startsWith("eva_sprite:")?B:`eva_sprite:${B}`;return j.find(_t=>{const nn=lt(_t.spriteId),ct=lt(_t.legacySpriteId),St=Ve(_t.legacyIds);return nn===B||ct===B||St.includes(B)||St.includes(Re)})||null},I=R=>{const B=A(R);if(!B)return null;const ae=lt(B.id);return y.has(ae)||Yo(B)?ae:null};return I(w.customizationSelected)||I(w.progressEquipped)||I(w.progressSelected)||I(v)||v}function Yd(w){const v=["background","outfit","theme","decoration","frame","effect"],j=w&&typeof w=="object"?w:{};return Object.fromEntries(v.map($=>{const y=j[$],A=y==null?null:String(y).trim();return[$,A||null]}))}function DI(w){const v=String(w.itemId??"").trim(),j=ui(w.price),$=ui(w.balance),y=Ve(w.owned);return v?y.includes(v)?{status:"already-owned",balance:$,owned:y,itemId:v,price:j}:$<j?{status:"insufficient-funds",balance:$,owned:y,itemId:v,price:j}:{status:"purchased",balance:$-j,owned:[...y,v],itemId:v,price:j}:{status:"invalid-item",balance:$,owned:y,itemId:v,price:j}}function Ho(w){return String(w?.value??"").trim()}function FI(w,v=Math.random){const j=[...w];for(let $=j.length-1;$>0;$-=1){const y=Number(v()),A=Number.isFinite(y)?Math.min(Math.max(y,0),.999999999):0,I=Math.floor(A*($+1));[j[$],j[I]]=[j[I],j[$]]}return j}function OI(w,v){if(!Array.isArray(v)||v.length!==w.length)return null;const j=new Map(w.map(A=>[Ho(A),A])),$=[],y=new Set;for(const A of v){const I=String(A??"").trim(),R=j.get(I);if(!R||y.has(I))return null;y.add(I),$.push(R)}return $.length===w.length?$:null}function BI(w,v,j=Math.random){const $=w.filter(I=>Ho(I)),y=OI($,v);if(y)return{options:y,order:y.map(Ho)};const A=FI($,j);return{options:A,order:A.map(Ho)}}function zI(w){const v=String(w||"").toLowerCase();return v==="test"||v==="done"?v:"study"}function UI(w){const v=new Set,j=[];for(const $ of Array.isArray(w)?w:[]){const y=String($?.id??"").trim();!y||v.has(y)||(v.add(y),j.push(y))}return j}function Wo(w){const v=UI(w.cards),j=w.session?.answers&&typeof w.session.answers=="object"?w.session.answers:{},$=v.filter(B=>!!j[B]),y=v.length,A=$.length;if(!y)return{status:"incomplete",phase:"study",total:0,expectedCardIds:v,answeredExpectedCardIds:$,answeredCount:0,currentIndex:0,currentCardId:null};if(w.confirmedCompleted&&w.session?.completedAt)return{status:"done",phase:"done",total:y,expectedCardIds:v,answeredExpectedCardIds:v,answeredCount:y,currentIndex:y,currentCardId:null};const I=v.findIndex(B=>!j[B]);if(I<0&&A===y)return{status:"test-ready",phase:"test",total:y,expectedCardIds:v,answeredExpectedCardIds:$,answeredCount:A,currentIndex:y,currentCardId:null};const R=I>=0?I:Math.min(Math.max(Number(w.session?.currentIndex??0)||0,0),y-1);return{status:"study",phase:(zI(w.session?.phase)==="done","study"),total:y,expectedCardIds:v,answeredExpectedCardIds:$,answeredCount:A,currentIndex:R,currentCardId:v[R]||null}}function JI(w){const v=new Set,j=[];for(const $ of Array.isArray(w)?w:[]){const y=String($?.id??"").trim();!y||v.has(y)||(v.add(y),j.push(y))}return j}function GI(w,v,j){const $=v[w];return $&&typeof $=="object"&&$.correct?!0:!!j[w]}function qI(w){const v=Wo({cards:w.cards,session:w.session,confirmedCompleted:w.confirmedCompleted}),j=Array.isArray(w.cards)?w.cards:[],$=v.status==="done"||v.status==="test-ready",y=v.total>0&&j.length>=v.total&&j.every(nn=>!!w.isCardStudied?.(nn)),A=$||y,I=JI(w.exercises),R=w.exerciseResults&&typeof w.exerciseResults=="object"?w.exerciseResults:{},B=w.completedExercises&&typeof w.completedExercises=="object"?w.completedExercises:{},ae=I.filter(nn=>GI(nn,R,B)).length,Re=I.length>0&&ae===I.length,_t=!!w.confirmedCompleted||A&&Re;return{study:v,cardStudyComplete:A,exerciseComplete:Re,correctExerciseCount:ae,totalExercises:I.length,complete:_t,canMigrateCompletion:!w.confirmedCompleted&&A&&Re}}(()=>{const w="flashKanji.pwaInstallPrompt.v2",v="flashKanji.pwaInstallPrompt.v1",j="flashKanji.notificationPrompt.v1",$="flashkanji_customization",y="flashkanji_eva_state_v2",I="local-1790527881488",B=`flashKanji.hiddenMascotSpeeches:${I}`,ae="moonfarm",Re="flashKanji.appBuild.v1",_t="flashKanji.pwaCacheReset.v1",nn="flashKanji.bootRecovery.v1",ct={instagram:"https://www.instagram.com/fallinginto_silence?igsh=MWpzYW1ncTB1a3FuNw==",youtube:"https://youtube.com/@fallingintosilence?si=cJ97__ndJ1aaaMae"},St="aleksey.lebedev606@gmail.com",er="Flash Kanji bug report",xv="https://drive.google.com/uc?export=download&id=1lIwF4vLq2DNAQ_Hufkmve7-m3bLWpvua",Nv="downloads/flash-kanji-android.apk",Lv="assets/download/android-app-screenshot.png",pi="flashKanji.forcePwaCacheReset.v1",O={lessons:"data/lessons.json",dialogues:"data/dialogues.json",i18n:"data/i18n.json",rewards:"data/rewards.json",kanjiMeta:"data/kanji/meta.json",kanjiHints:"data/kanji/hints.json",kanjiTranslations:"data/kanji/translations.json",kanjiStrokes:"data/kanji/stroke-order-kanjivg.json",kanjiPageSources:"data/sources/kanji-page-sources.json",lessonTranslations:"data/lessons/translations.json",vocabulary:"data/vocabulary/index.json",sentences:"data/sentences/index.json",achievements:"data/achievements/index.json",jlptCatalog:"data/jlpt/index.json",jlptLessons:"data/jlpt-lessons.json",jlptPracticeLessons:"data/jlpt-practice-lessons.json",n5Meta:"data/jlpt/n5/meta.json",n5Lessons:"data/jlpt/n5/lessons.json",n5Kanji:"data/jlpt/n5/kanji.json",n5Exercises:"data/jlpt/n5/exercises.json",n5FinalTest:"data/jlpt/n5/final-test.json",n5Reading:"data/jlpt/n5/reading.json",n4Meta:"data/jlpt/n4/meta.json",n4Lessons:"data/jlpt/n4/lessons.json",n4Kanji:"data/jlpt/n4/kanji.json",n4Grammar:"data/jlpt/n4/grammar.json",n4Exercises:"data/jlpt/n4/exercises.json",n4Reading:"data/jlpt/n4/reading.json",n4Listening:"data/jlpt/n4/listening.json",n4FinalTest:"data/jlpt/n4/final-test.json",n3Meta:"data/jlpt/n3/meta.json",n3Lessons:"data/jlpt/n3/lessons.json",n3Kanji:"data/jlpt/n3/kanji.json",n3Grammar:"data/jlpt/n3/grammar.json",n3Exercises:"data/jlpt/n3/exercises.json",n3Reading:"data/jlpt/n3/reading.json",n3Listening:"data/jlpt/n3/listening.json",n3FinalTest:"data/jlpt/n3/final-test.json",n2Meta:"data/jlpt/n2/meta.json",n2Lessons:"data/jlpt/n2/lessons.json",n2Kanji:"data/jlpt/n2/kanji.json",n2Grammar:"data/jlpt/n2/grammar.json",n2Exercises:"data/jlpt/n2/exercises.json",n2Reading:"data/jlpt/n2/reading.json",n2Listening:"data/jlpt/n2/listening.json",n2FinalTest:"data/jlpt/n2/final-test.json",n1Meta:"data/jlpt/n1/meta.json",n1Lessons:"data/jlpt/n1/lessons.json",n1Kanji:"data/jlpt/n1/kanji.json",n1Grammar:"data/jlpt/n1/grammar.json",n1Exercises:"data/jlpt/n1/exercises.json",n1Reading:"data/jlpt/n1/reading.json",n1Listening:"data/jlpt/n1/listening.json",n1FinalTest:"data/jlpt/n1/final-test.json",jlptReadingMarkdown:"data/jlpt/reading-texts_N5_N1.md",jlptReadingTranslations:"data/jlpt/reading-texts_N5_N1.translations.json",kanaCatalog:"data/kana/index.json",monetization:"data/monetization/catalog.json",customizationShop:"data/customization-shop.json",evaBackgrounds:"data/eva-backgrounds.json",evaSprites:"data/eva-sprites.json",evaRoomDialogues:"data/eva-room-dialogues.json",evaAutonomyLines:"data/eva-autonomy-lines.json",evaExpandedDialogues:"data/eva-expanded-dialogues.json",evaFisPersonality:"data/eva-fis-personality.json",evaPresence:"data/eva-presence.json",changelog:"data/changelog.json"},Av={forgot:"Forgot",remember:"Remember",again:"Again",hard:"Hard",good:"Good",easy:"Easy"},Iv={New:"New",Learning:"Learning",Review:"Review",Mastered:"Mastered",new:"New",learning:"Learning",review:"Review",mastered:"Mastered"},fe=["N5","N4","N3","N2","N1"],ye=new Set,Tv={nihon:"Japan",kyou:"today",getsuyoubi:"Monday",ichigatsu:"January",nihonjin:"Japanese person",hitori:"one person",honya:"bookstore",ichinichi:"one day",ichiban:"number one, the best",nigatsu:"February",futari:"two people",jikan:"time, hour",nanji:"what time",kotoshi:"this year",rainen:"next year",kaimono:"shopping",kounyuu:"purchase",baiten:"kiosk, shop stall",hatsubai:"release, sale",shiyou:"use",tsukaikata:"how to use",soushin:"message sending",housou:"broadcast",sekai:"world",sedai:"generation",gyoukai:"industry",toukou:"post, publication",toushi:"investment",jouhou:"information",houkoku:"report",kakunin:"confirmation, check",shounin:"approval",kaigi:"meeting",giron:"discussion",kengen:"access rights, permission",chosakuken:"copyright",eikyou:"influence",hibiku:"to sound, to resonate"},ru={xp:12,coins:2},au="flashKanjiOnboardingCompleted.v3",iu="flashKanjiOnboardingCompleted",ou="flashKanjiOnboardingAudience.v1",Rv=850,lu=450,_v=420,Gr=72,Pv=96,cu=1,du="N5",$n="map",sn="lesson",jn="legacy",_e="intro-kanji",tr="review-due",nr="n5-checkpoint",Ev=[_e,"n5-lesson-1","n5-lesson-2","n5-lesson-3","n5-lesson-4","n5-lesson-5","n5-lesson-6","n5-lesson-7","n5-lesson-8","n5-lesson-9","n5-lesson-10",nr],Mv={"n5-lesson-1":"data/textbooks/n5/lesson-1.json"},Kv=new Set(["lesson-1","lesson-2","bulk-n5-01"]),uu=7e3,pu=8e3,Dv=new Set(["dictionary","kanji","stats","jlpt-lesson","textbooks"]),le=Xs(),r={route:le.route,routeMatch:le,routeNotFound:le.status==="not-found"?le:null,lessons:[],cards:[],i18n:null,dialogues:null,rewards:null,kanjiMeta:{},kanjiHints:{},kanjiTranslations:{},kanjiStrokes:{},kanjiPageSources:{},lessonTranslations:{},vocabulary:[],sentenceExercises:[],achievements:[],achievementCategories:[],jlptCatalog:{version:1,generatedAt:null,items:[]},jlptLessons:[],jlptPracticeLessons:[],n5Meta:null,n5Textbook:null,n5KanjiCatalog:[],n5Exercises:null,n5FinalTest:null,n4Meta:null,n4Textbook:null,n4KanjiCatalog:[],n4Grammar:[],n4Exercises:null,n4Reading:[],n4Listening:[],n4FinalTest:null,n5Reading:[],n3Meta:null,n3Textbook:null,n3KanjiCatalog:[],n3Grammar:[],n3Exercises:null,n3Reading:[],n3Listening:[],n3FinalTest:null,n2Meta:null,n2Textbook:null,n2KanjiCatalog:[],n2Grammar:[],n2Exercises:null,n2Reading:[],n2Listening:[],n2FinalTest:null,n1Meta:null,n1Textbook:null,n1KanjiCatalog:[],n1Grammar:[],n1Exercises:null,n1Reading:[],n1Listening:[],n1FinalTest:null,jlptCourseDataStatus:{N5:"idle",N4:"idle",N3:"idle",N2:"idle",N1:"idle"},jlptCourseDataErrors:{N5:null,N4:null,N3:null,N2:null,N1:null},jlptReadingMarkdown:"",jlptReadingByLevel:{N5:[],N4:[],N3:[],N2:[],N1:[]},jlptReadingTranslations:{},kanaCatalog:{schema_version:1,content_version:"",courses:[]},kanaCourses:{},kanaCourseLoading:{},kanaCourseErrors:{},kanaExerciseDrafts:{},kanaLessonCharacterIndex:{},monetization:null,customizationCatalog:{categories:[],items:[]},customization:null,evaBackgrounds:[],evaSprites:{},evaRoomDialogues:[],evaRoomLines:[],evaAutonomyLines:[],evaFisPersonality:null,evaPresence:null,evaRuntime:null,evaRoomShopOpen:!1,progress:null,activeLessonId:null,activeJlptLesson:le.status==="valid"&&le.params.level||null,activeTextbookLevel:le.status==="valid"&&le.route==="textbooks"&&(le.params.level||le.params.course)||null,activeTextbookSubroute:le.status==="valid"&&le.route==="textbooks"&&le.params.subroute||null,activeLearnView:le.status==="valid"&&le.route==="learn"&&le.params.view||$n,activeLearnNodeId:le.status==="valid"&&le.route==="learn"&&le.params.view===sn&&le.params.targetId||null,activeLearnLegacyLessonId:le.status==="valid"&&le.route==="learn"&&le.params.view===jn&&le.params.targetId||null,learningPathLessonPayloads:{},activeCardId:null,activeExerciseReviewId:null,activeExerciseReviewLevel:"",activeExerciseReviewSource:"",activeExerciseReviewSelection:[],activeExerciseReviewChoice:"",activeExerciseReviewTranslationOpen:!1,answerOptionOrders:{},reviewQueueLastKind:"",reviewSession:null,kanjiPageId:le.status==="valid"&&le.route==="kanji"&&le.params.cardId||null,revealed:!1,detailCardId:null,rewardModal:null,rewardQueue:[],finalTestModal:null,finalTestBusy:!1,contactModal:!1,pwaInstallHelpVisible:!1,charts:[],filters:{query:"",jlpt:"all",strokes:"all",radical:"all",favorites:"all"},dictionaryVisibleCount:Gr,shopFilters:{category:"all",view:"all",sort:"featured"},sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[]},readingExercises:{},reviewExerciseResults:{},readingCheck:{cardId:null,value:"",status:null,message:""},writingStep:0,activeLearnJlpt:"all",navMenu:null,pendingFocus:null,pwaInstallPrompt:Oo(),notificationPrompt:ni(),notificationPromptVisible:!1,changelog:null,changelogModal:null,bootAncillaryLoaded:!1,deferredDataLoaded:!1,deferredDataLoading:!1};r.route==="textbooks"&&!r.routeNotFound&&jt(Wh(BA(),zA()));const Fv=O1();let gi=null,rn=null,mi=0,Pt="idle",gu="",mu=new Map,qr=0,fu=0,Sn=0,bs=0,Zo=!1,ks=0,el=!1,ys=0,fi=!1,Dn=0,Hr=null,tl=!1,hi=0,hu=!1,an=!1,Wr=null,vi=null,wi=null,bi=null,Pe=null,vu=0;const wu=sv(),Ov=sv();let ki=null,Fn=null,yi=null,Et=null,sr=null,$i=!1;const bu=new WeakMap;let ku=new Map;const yu=new WeakSet,$u=new WeakSet,ju=new Map,Su=new Map,nl=new WeakMap;let $s=null,Cu=0,ji=!1,sl=0;const rl=new Set;let rr=0,Vr=0,al=null,$e=null,dt=null,Fe=null,on=-1,Mt=!1,Ie="step",ln=null,xu=null,Bv=null,Si=0,ar=0,zv=null,Xr=null,Qr=0,Nu=0,il=null,ol=null,js=null;const Ci=new Map;let Yr=null;const xi=new Map;let ll=0,cl=0,dl=Math.floor(Date.now()/6e4),Lu=0,Ni="",ul=[];const pl=new Map,Ss=new Map,gl=new Set,ml=Date.now();typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const Y={cardId:null,strokes:[],currentStroke:[],drawing:!1,activePointerId:null,completed:!1,demoAnimationId:0},Oe=(e,t=document)=>t.querySelector(e),fl=(e,t=document)=>Array.from(t.querySelectorAll(e)),Cn=Oe("#app"),Uv=document.title||"Flash Kanji",Au=Oe("#progressImport"),re=Object.freeze({TOP:"top",PRESERVE:"preserve"});document.addEventListener("pointerdown",wl,{passive:!0,capture:!0}),document.addEventListener("click",wl,{passive:!0,capture:!0}),document.addEventListener("keydown",wl,{passive:!0,capture:!0}),document.addEventListener("click",Nb),document.addEventListener("pointerdown",Lb),document.addEventListener("input",Up),document.addEventListener("change",Up),document.addEventListener("keydown",Rb),window.flashKanjiFarmMoon=(e=5e3)=>Jp(e),window.startFlashKanjiOnboarding=rc,Au.addEventListener("change",VL),window.addEventListener("beforeinstallprompt",jA),window.addEventListener("appinstalled",Od),window.addEventListener("scroll",ic,{passive:!0}),window.addEventListener("resize",ic),window.addEventListener("eva:event",e=>{e.detail?.handledByFlashKanji||yg(e.detail||{})}),document.addEventListener("visibilitychange",()=>{!document.hidden&&r.progress&&eh(),document.hidden||zo("usage"),!document.hidden&&r.route==="eva-room"&&ca("return")&&(T(),P()),document.hidden&&zl()}),window.addEventListener("pagehide",zl),window.addEventListener("beforeunload",zl),F1(()=>{const e=zr(Xs()),t=e.route,n=e.status==="valid"?e.params:{},s=t==="kanji"&&n.cardId||null,a=t==="textbooks"&&(n.level||n.course)||null,o=t==="textbooks"&&n.subroute||null,l=t==="jlpt-lesson"&&n.level||null,c=t==="learn"&&n.view||$n,d=t==="learn"&&c===sn&&n.targetId||null,u=t==="learn"&&c===jn&&n.targetId||null,m=Vh(r.routeNotFound),h=e.status==="not-found"?Vh(e):"";if(t!==r.route||t==="kanji"&&s!==r.kanjiPageId||t==="textbooks"&&a!==r.activeTextbookLevel||t==="textbooks"&&o!==r.activeTextbookSubroute||t==="jlpt-lesson"&&l!==r.activeJlptLesson||t==="learn"&&c!==r.activeLearnView||t==="learn"&&d!==r.activeLearnNodeId||t==="learn"&&u!==r.activeLearnLegacyLessonId||m!==h){const f=r.route;r.routeMatch=e,r.routeNotFound=e.status==="not-found"?e:null,r.route=t,r.route!=="home"&&lg(),f!==t&&(f==="review"||t==="review")&&(r.reviewSession=null),r.kanjiPageId=t==="kanji"?s:null,r.activeTextbookLevel=t==="textbooks"?a:null,r.activeTextbookSubroute=t==="textbooks"?o:null,r.activeJlptLesson=t==="jlpt-lesson"?l:n.level||r.activeJlptLesson,r.activeLearnView=t==="learn"?c:$n,r.activeLearnNodeId=t==="learn"?d:null,r.activeLearnLegacyLessonId=t==="learn"?u:null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.pendingFocus=null,t!=="eva-room"&&(r.evaRoomShopOpen=!1),kt(),Rs(),Xe(),Cs(t)&&Ii({route:t,delay:kl(t)}),t==="eva-room"&&we("room_opened")}}),Jv();async function Jv(){if(!await cw()&&!await lw()){Tu(!0),Cn.innerHTML.trim()?Cn.setAttribute("aria-busy","true"):Cn.innerHTML=Kd(),r.progress=Tw(),Dr(),Id(),mA(),Td(),kn();try{const[e,t,n]=await Promise.all([$l({initialOnly:!0}),Ee(O.i18n),Ee(O.rewards,Wv)]);r.lessons=e.lessons,r.cards=e.cards,r.i18n=t,r.rewards=n;const s=tc(r.progress);tl=s,lr(),Jb(),xs(),Uw(),kn(),NA(),gN(),Ub(s),hN(),Qs(zr(Xs())),T(),P(),Ru(()=>{hl({hadPriorVisit:s}).catch(a=>console.warn("Boot ancillary data failed to load.",a))},{timeout:1500}),(r.route==="review"||Pu())&&bl(),Xv(),Ii({route:r.route,delay:kl(r.route)}),yA(),sc(),ry(),Hk(),zh(),zd();try{sessionStorage.removeItem(nn)}catch(a){console.warn("Could not clear boot recovery marker after successful startup.",a)}}catch(e){console.error(e),await kA(e)||(Cn.innerHTML=vA(e))}finally{Tu(!1)}}}let Li=null;function Iu(){return Li||(Li=(async()=>{const[e,t,n]=await Promise.all([Ee(O.jlptCatalog,()=>({version:1,generatedAt:null,items:[]})),Ee(O.jlptLessons,()=>({items:[]})),Ee(O.kanaCatalog,()=>({schema_version:1,content_version:"",courses:[]}))]);r.jlptCatalog=Cw(e),r.jlptLessons=Sw(t),r.kanaCatalog=xw(n),await Promise.all(["hiragana","katakana"].filter(s=>{const a=r.progress.kanaCourses?.courses?.[s];return Object.keys(a?.lessons||{}).length||Object.keys(a?.review||{}).length}).map(s=>Ch(s)))})().catch(e=>{throw Li=null,e})),Li}async function hl({hadPriorVisit:e=!1}={}){if(!r.bootAncillaryLoaded)return Hr||(Hr=(async()=>{const[t,n,s,a,o]=await Promise.all([Ee(O.dialogues),Ee(O.achievements,()=>({achievements:[],categories:[]})),Ee(O.customizationShop,()=>({version:1,currency:"Moon Fragments",categories:[],items:[]})),Ee(O.evaSprites,()=>({})),Ee(O.changelog,()=>null),Iu()]),l=wp(n,r.rewards?.achievements||[]);r.dialogues=t,r.achievements=l.items,r.achievementCategories=l.categories,r.customizationCatalog=ww(s),r.evaSprites=a&&typeof a=="object"&&!Array.isArray(a)?a:{},r.bootAncillaryLoaded=!0,xs(),Ul(),kn(),r.rewards&&(r.rewards.achievements=r.achievements);const c=Gv(o,e);Qs(zr(Xs())),P(),c&&qv()})().finally(()=>{Hr=null}),Hr)}function Tu(e){const t=document.querySelector(".app-shell");t&&(e?t.setAttribute("data-booting","true"):t.removeAttribute("data-booting")),Cn&&Cn.setAttribute("aria-busy",e?"true":"false")}function Gv(e,t=!1){tl=!!t,r.changelogModal=null;const n=LI(e);if(!n)return!1;r.changelog=n;const s=AI(n,r.progress,Ai(),{hadPriorVisit:tl,useProgressSignals:!1});return s.shouldMarkHandled?(Qd(s.currentVersion,Ai()),!1):!s.shouldShow||!s.entry?!1:r.route!=="home"?(Qd(s.currentVersion,Ai()),!1):(r.changelogModal={version:s.currentVersion,entry:s.entry},!0)}function Ai(){try{return window.localStorage}catch{return null}}function qv(){hi&&window.clearTimeout(hi),hi=window.setTimeout(()=>{hi=0;const e=document.querySelector('[data-action="close-changelog"]');e instanceof HTMLElement&&e.focus({preventScroll:!0})},0)}function vl(){const e=r.changelogModal?.version||r.changelog?.currentVersion||"";Qd(e,Ai()),r.changelogModal=null,P()}function Hv(e,t){return document.getElementById(t)?Promise.resolve():new Promise((n,s)=>{const a=document.createElement("script");a.id=t,a.src=e,a.defer=!0,a.onload=()=>n(),a.onerror=()=>s(new Error(`Cannot load ${e}`)),document.head.appendChild(a)})}function Ru(e,{timeout:t=1800}={}){if("requestIdleCallback"in window){window.requestIdleCallback(e,{timeout:t});return}window.setTimeout(e,0)}function Wv(){return{version:1,dailyGoals:[10,20,50],levelCurve:{baseXp:100,growth:1.35},lessonUnlocks:{"lesson-1":1,"lesson-2":2,"lesson-3":3,"lesson-4":5,"lesson-5":8,"bulk-n5-01":3,"bulk-n5-02":4,"bulk-n5-03":4,"bulk-n5-04":5,"bulk-n4-01":5,"bulk-n4-02":6,"bulk-n4-03":6,"bulk-n4-04":7,"bulk-n4-05":7,"bulk-n4-06":8,"bulk-n4-07":8,"bulk-n4-08":9,"bulk-n3-01":9,"bulk-n3-02":10,"bulk-n3-03":10,"bulk-n3-04":11,"bulk-n3-05":11,"bulk-n3-06":12,"bulk-n3-07":12,"bulk-n3-08":13,"bulk-n3-09":13,"bulk-n3-10":14,"bulk-n3-11":14,"bulk-n3-12":15,"bulk-n3-13":15,"bulk-n3-14":16,"bulk-n3-15":16,"bulk-n3-16":17,"bulk-n3-17":17,"bulk-n3-18":18,"bulk-n3-19":18,"bulk-n2-01":19,"bulk-n2-02":19,"bulk-n2-03":20,"bulk-n2-04":20,"bulk-n2-05":21,"bulk-n2-06":21,"bulk-n2-07":22,"bulk-n2-08":22,"bulk-n2-09":23,"bulk-n2-10":23,"bulk-n2-11":24,"bulk-n2-12":24,"bulk-n2-13":25,"bulk-n2-14":25,"bulk-n2-15":26,"bulk-n2-16":26,"bulk-n2-17":27,"bulk-n2-18":27,"bulk-n2-19":28,"bulk-n1-01":28,"bulk-n1-02":29,"bulk-n1-03":29,"bulk-n1-04":30,"bulk-n1-05":30,"bulk-n1-06":31,"bulk-n1-07":31,"bulk-n1-08":32,"bulk-n1-09":32,"bulk-n1-10":33,"bulk-n1-11":33},rewards:{correctXp:10,lessonCompleteXp:50,comboXp:15,dailyBonusXp:20,sentencePracticeXp:12,correctCoins:1,lessonCompleteCoins:8,achievementCoins:20,dailyBonusCoins:5,sentencePracticeCoins:2,streakCoins:10},shop:[{id:"frame_moon",type:"profileFrame",name:{ru:"Лунная рамка",en:"Moon frame"},cost:80},{id:"theme_gold",type:"theme",name:{ru:"Золотой акцент",en:"Gold accent"},cost:120},{id:"background_midnight",type:"background",name:{ru:"Полуночный фон",en:"Midnight background"},cost:150}],achievements:[{id:"first_lesson",name:{ru:"Первый урок",en:"First lesson"},description:{ru:"Завершить первый урок.",en:"Complete the first lesson."},kind:"lessonComplete",target:1,xp:50,coins:20},{id:"hundred_correct",name:{ru:"100 правильных ответов",en:"100 correct answers"},description:{ru:"Достичь 100 правильных ответов.",en:"Reach 100 correct answers."},kind:"correct",target:100,xp:120,coins:40},{id:"ten_kanji_learned",name:{ru:"10 изученных кандзи",en:"10 kanji learned"},description:{ru:"Начать изучать 10 кандзи.",en:"Start learning 10 kanji."},kind:"learned",target:10,xp:80,coins:30},{id:"seven_day_streak",name:{ru:"7-дневная серия",en:"7-day streak"},description:{ru:"Поддерживать серию 7 дней.",en:"Keep a streak for 7 days."},kind:"streak",target:7,xp:100,coins:35},{id:"jlpt_n5_done",name:{ru:"JLPT N5 пройден",en:"JLPT N5 complete"},description:{ru:"Освоить все карточки N5.",en:"Master every N5 card."},kind:"jlpt",jlpt:"N5",target:1,xp:180,coins:60},{id:"hundred_reviews",name:{ru:"100 повторений",en:"100 reviews"},description:{ru:"Выполнить 100 повторений.",en:"Complete 100 reviews."},kind:"reviews",target:100,xp:150,coins:55}]}}function Vv(){return window.Chart?Promise.resolve():(xu||(xu=Hv("vendor/chart.umd.min.js","flash-kanji-chartjs")),xu)}function Xv(){window.setTimeout(()=>{Bv||(Bv=Yh(()=>import("./soundManager-BXlc-2Gj.js"),[],import.meta.url).then(()=>{Dr(),eA()}).catch(e=>console.warn("UX sound module failed to load.",e))),zv||(zv=Yh(()=>import("./cyberHudEffect-hOJcGtOP.js"),[],import.meta.url).catch(e=>console.warn("Cyber HUD module failed to load.",e)))},450)}function wl(){Dn=Date.now()}async function Qv({minQuietMs:e=450,maxDelayMs:t=1200}={}){if(!Dn)return;const n=Date.now();for(;Date.now()-Dn<e&&Date.now()-n<t;){const s=Math.min(160,Math.max(16,e-(Date.now()-Dn)));await new Promise(a=>window.setTimeout(a,s))}await _u()}async function Yv(e){const t=Date.now();for(;Date.now()-t<3200;){const n=String(r.route||""),s=e===n||Cs(n),a=Dn&&Date.now()-Dn<650;if(s&&!a)break;await new Promise(o=>window.setTimeout(o,s?80:220))}await _u()}function _u(){return document.visibilityState==="hidden"?new Promise(e=>window.setTimeout(e,32)):new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e)))}function Cs(e=r.route){return e==="textbooks"&&!F(r.activeTextbookLevel)?!1:Dv.has(e)}function Pu(){return!!(r.progress&&(Object.values(r.progress.cards||{}).some(e=>e.state!=="New")||fe.some(e=>{const t=r.progress[`${e.toLowerCase()}Course`];return Object.keys(t?.completedLessons||{}).length||Object.keys(t?.exerciseSrs||{}).length})||Object.keys(r.progress.readingExercises||{}).length||["hiragana","katakana"].some(e=>{const t=r.progress.kanaCourses?.courses?.[e];return Object.keys(t?.review||{}).length||Object.keys(t?.lessons||{}).length})))}async function bl(){if(!$i)return sr||(sr=(async()=>{if(Pu()){if(!r.deferredDataLoaded){const t=await $l();r.deferredDataLoaded||(r.lessons=t.lessons,r.cards=t.cards,Cl(),xl(),Nl(),Ll(),Al())}await Iu();const e=fe.filter(t=>{const n=r.progress[`${t.toLowerCase()}Course`];return Object.keys(n?.completedLessons||{}).length||Object.keys(n?.exerciseSrs||{}).length});await Promise.all(e.map(t=>Pi(t,{renderAfter:!1}))),Object.keys(r.progress.readingExercises||{}).length&&await Zv(),lr()}$i=!0,Pe=null,(r.route==="review"||r.route==="home")&&P()})().catch(e=>{sr=null,console.warn("Review content failed to load.",e)}),sr)}async function Zv(){const e=Object.entries(r.progress.readingExercises||{}),t=new Set(e.map(([,n])=>F(n.level)).filter(Boolean));if(e.some(([,n])=>!F(n.level))&&fe.forEach(n=>t.add(n)),await Promise.all([...t].map(async n=>{const s=`${n.toLowerCase()}Reading`,a=await Ee(O[s]);r[s]=n==="N5"?vp(a):ea(a)})),e.some(([n])=>n.startsWith("jlpt-md-"))){const[n,s]=await Promise.all([Du(O.jlptReadingMarkdown),Ee(O.jlptReadingTranslations)]);r.jlptReadingMarkdown=n,r.jlptReadingByLevel=Fu(n),r.jlptReadingTranslations=Ou(s)}}function kl(e=r.route){return Cs(e)?Dn&&Date.now()-Dn<1200?650:0:uu}function Ii({route:e=r.route,delay:t=uu,force:n=!1}={}){if(r.deferredDataLoaded||r.deferredDataLoading||Xr||!n&&!Cs(e))return;Qr&&(window.clearTimeout(Qr),Qr=0);const s=++Nu,a=()=>{s===Nu&&(!n&&!Cs(r.route)||ew({route:e}).catch(o=>console.warn("Deferred app data failed to load.",o)))};Qr=window.setTimeout(()=>{Qr=0,Ru(a,{timeout:1800})},Math.max(0,Number(t)||0))}async function ew({renderAfter:e=!0,route:t=r.route}={}){const n=String(t||r.route||"");if(!r.deferredDataLoaded)return Xr||(r.deferredDataLoading=!0,Xr=(async()=>{const[s,a,o]=await Promise.all([$l(),pw([["kanjiMeta",O.kanjiMeta],["kanjiHints",O.kanjiHints],["kanjiTranslations",O.kanjiTranslations],["kanjiStrokes",O.kanjiStrokes],["kanjiPageSources",O.kanjiPageSources],["lessonTranslations",O.lessonTranslations],["vocabulary",O.vocabulary],["sentences",O.sentences],["jlptPracticeLessons",O.jlptPracticeLessons],["n5Meta",O.n5Meta],["n5Lessons",O.n5Lessons],["n5Kanji",O.n5Kanji],["n5Exercises",O.n5Exercises],["n5FinalTest",O.n5FinalTest],["n4Meta",O.n4Meta],["n4Lessons",O.n4Lessons],["n4Kanji",O.n4Kanji],["n4Grammar",O.n4Grammar],["n4Exercises",O.n4Exercises],["n4Reading",O.n4Reading],["n4Listening",O.n4Listening],["n4FinalTest",O.n4FinalTest],["n3Meta",O.n3Meta],["n3Lessons",O.n3Lessons],["n3Kanji",O.n3Kanji],["n3Grammar",O.n3Grammar],["n3Exercises",O.n3Exercises],["n3Reading",O.n3Reading],["n3Listening",O.n3Listening],["n3FinalTest",O.n3FinalTest],["n2Meta",O.n2Meta],["n2Lessons",O.n2Lessons],["n2Kanji",O.n2Kanji],["n2Grammar",O.n2Grammar],["n2Exercises",O.n2Exercises],["n2Reading",O.n2Reading],["n2Listening",O.n2Listening],["n2FinalTest",O.n2FinalTest],["n1Meta",O.n1Meta],["n1Lessons",O.n1Lessons],["n1Kanji",O.n1Kanji],["n1Grammar",O.n1Grammar],["n1Exercises",O.n1Exercises],["n1Reading",O.n1Reading],["n1Listening",O.n1Listening],["n1FinalTest",O.n1FinalTest],["jlptReadingTranslations",O.jlptReadingTranslations],["n5Reading",O.n5Reading],["monetization",O.monetization]]),Du(O.jlptReadingMarkdown)]);await Qv(),await Yv(n);const{kanjiMeta:l,kanjiHints:c,kanjiTranslations:d,kanjiStrokes:u,kanjiPageSources:m,lessonTranslations:h,vocabulary:f,sentences:S,jlptPracticeLessons:C,n5Meta:x,n5Lessons:L,n5Kanji:k,n5Exercises:N,n5FinalTest:z,n4Meta:q,n4Lessons:Ys,n4Kanji:U,n4Grammar:GA,n4Exercises:qA,n4Reading:HA,n4Listening:WA,n4FinalTest:VA,n3Meta:XA,n3Lessons:QA,n3Kanji:YA,n3Grammar:ZA,n3Exercises:e1,n3Reading:t1,n3Listening:n1,n3FinalTest:s1,n2Meta:r1,n2Lessons:a1,n2Kanji:i1,n2Grammar:o1,n2Exercises:l1,n2Reading:c1,n2Listening:d1,n2FinalTest:u1,n1Meta:p1,n1Lessons:g1,n1Kanji:m1,n1Grammar:f1,n1Exercises:h1,n1Reading:v1,n1Listening:w1,n1FinalTest:b1,jlptReadingTranslations:k1,n5Reading:y1,monetization:$1}=a;r.lessons=s.lessons,r.cards=s.cards,r.jlptPracticeLessons=Nw(C),r.jlptReadingMarkdown=o||"",r.jlptReadingByLevel=Fu(o||""),r.n5Meta=Uu(x),r.n5Textbook=Sl(L),r.n5KanjiCatalog=Ju(k),Cl(),r.n5Exercises=Gu(N),r.n5FinalTest=qu(z),r.n5Reading=vp(y1),r.n4Meta=Hu(q),r.n4Textbook=Wu(Ys),r.n4KanjiCatalog=Vu(U),r.n4Grammar=Xu(GA),r.n4Exercises=Qu(qA),r.n4Reading=ea(HA),r.n4Listening=ea(WA),r.n4FinalTest=Yu(VA),xl(),r.n3Meta=Zu(XA),r.n3Textbook=ep(QA),r.n3KanjiCatalog=tp(YA),r.n3Grammar=np(ZA),r.n3Exercises=sp(e1),r.n3Reading=Di(t1),r.n3Listening=Di(n1),r.n3FinalTest=rp(s1),Nl(),r.n2Meta=ap(r1),r.n2Textbook=ip(a1),r.n2KanjiCatalog=op(i1),r.n2Grammar=lp(o1),r.n2Exercises=cp(l1),r.n2Reading=Oi(c1),r.n2Listening=Oi(d1),r.n2FinalTest=dp(u1),Ll(),r.n1Meta=up(p1),r.n1Textbook=pp(g1),r.n1KanjiCatalog=gp(m1),r.n1Grammar=mp(f1),r.n1Exercises=fp(h1),r.n1Reading=zi(v1),r.n1Listening=zi(w1),r.n1FinalTest=hp(b1),Al(),nw(),r.kanjiMeta=l.items||{},r.kanjiHints=c.items||{},r.kanjiTranslations=d.items||{},r.kanjiStrokes=vw(u),r.kanjiPageSources=m.items||{},r.lessonTranslations=h.items||{},r.vocabulary=f.items||[],r.sentenceExercises=S.items||[],r.jlptReadingTranslations=Ou(k1),r.monetization=$1,r.deferredDataLoaded=!0,r.deferredDataLoading=!1,r.progress&&(lr(),T());const Xh=String(r.route||"");(n===Xh||Cs(Xh))&&(Qs(zr(Xs())),e&&P())})().finally(()=>{r.deferredDataLoading=!1}),Xr)}function Eu(e){const t=F(e),n=t.toLowerCase();if(!t)return[];const s=[["meta",O[`${n}Meta`]],["lessons",O[`${n}Lessons`]],["kanji",O[`${n}Kanji`]],["exercises",O[`${n}Exercises`]]];return t!=="N5"?s.push(["grammar",O[`${n}Grammar`]],["reading",O[`${n}Reading`]],["listening",O[`${n}Listening`]],["finalTest",O[`${n}FinalTest`]]):s.push(["finalTest",O.n5FinalTest]),s.filter(([,a])=>!!a)}function xn(e,t,n=null){const s=F(e);s&&(r.jlptCourseDataStatus[s]=t,r.jlptCourseDataErrors[s]=n||null,s==="N1"&&(ol=n||null))}function Ti(e){const t=F(e);if(!t)return"error";if(r.jlptCourseDataStatus[t]!=="ready"&&Ri(t))try{yl(t),xn(t,"ready")}catch(n){xn(t,"incomplete",n)}return r.jlptCourseDataStatus[t]==="ready"&&!Ri(t)&&xn(t,"incomplete",new Error(_i())),r.jlptCourseDataStatus[t]||"idle"}function Ri(e){const t=F(e);if(!t)return!1;const n=$t(t),s=Mu(t),a=Ku(t);return n.length>0&&s.length>0&&!!a}function Mu(e){const t=F(e);return t==="N5"?Ht():t==="N4"?nt():t==="N3"?st():t==="N2"?rt():t==="N1"?Lt():[]}function Ku(e){const t=F(e);return t==="N5"?r.n5Exercises:t==="N4"?r.n4Exercises:t==="N3"?r.n3Exercises:t==="N2"?r.n2Exercises:t==="N1"?r.n1Exercises:null}function tw(e,t={}){const n=F(e);n==="N5"&&(r.n5Meta=Uu(t.meta),r.n5Textbook=Sl(t.lessons),r.n5KanjiCatalog=Ju(t.kanji),Cl(),r.n5Exercises=Gu(t.exercises),t.finalTest&&(r.n5FinalTest=qu(t.finalTest))),n==="N4"&&(r.n4Meta=Hu(t.meta),r.n4Textbook=Wu(t.lessons),r.n4KanjiCatalog=Vu(t.kanji),r.n4Grammar=Xu(t.grammar),r.n4Exercises=Qu(t.exercises),r.n4Reading=ea(t.reading),r.n4Listening=ea(t.listening),r.n4FinalTest=Yu(t.finalTest),xl()),n==="N3"&&(r.n3Meta=Zu(t.meta),r.n3Textbook=ep(t.lessons),r.n3KanjiCatalog=tp(t.kanji),r.n3Grammar=np(t.grammar),r.n3Exercises=sp(t.exercises),r.n3Reading=Di(t.reading),r.n3Listening=Di(t.listening),r.n3FinalTest=rp(t.finalTest),Nl()),n==="N2"&&(r.n2Meta=ap(t.meta),r.n2Textbook=ip(t.lessons),r.n2KanjiCatalog=op(t.kanji),r.n2Grammar=lp(t.grammar),r.n2Exercises=cp(t.exercises),r.n2Reading=Oi(t.reading),r.n2Listening=Oi(t.listening),r.n2FinalTest=dp(t.finalTest),Ll()),n==="N1"&&(r.n1Meta=up(t.meta),r.n1Textbook=pp(t.lessons),r.n1KanjiCatalog=gp(t.kanji),r.n1Grammar=mp(t.grammar),r.n1Exercises=fp(t.exercises),r.n1Reading=zi(t.reading),r.n1Listening=zi(t.listening),r.n1FinalTest=hp(t.finalTest),Al())}function _i(){return p()==="ru"?"Не удалось загрузить карточки урока. Проверьте подключение и попробуйте ещё раз.":"Could not load lesson cards. Check your connection and try again."}function yl(e){const t=F(e),n=$t(t),s=Mu(t),a=Ku(t);if(!t||!n.length||!s.length||!a)throw new Error(_i());if(t!=="N5")return!0;const o=[],l=new Map(r.n5KanjiCatalog.map(u=>[u.kanji,u])),c=new Set;r.n5KanjiCatalog.forEach(u=>{u.id&&c.add(u.id)}),n.length!==10&&o.push(`N5 lessons expected 10, got ${n.length}`),r.n5KanjiCatalog.length!==80&&o.push(`N5 kanji expected 80, got ${r.n5KanjiCatalog.length}`),c.size!==r.n5KanjiCatalog.length&&o.push("N5 card identifiers are not unique.");const d=new Set;if(n.forEach(u=>{d.has(u.id)&&o.push(`Duplicate N5 lesson id: ${u.id}`),d.add(u.id),(u.kanji||[]).length!==8&&o.push(`${u.id} expected 8 kanji, got ${(u.kanji||[]).length}`),(u.kanji||[]).map(f=>l.get(f)).filter(Boolean).length!==(u.kanji||[]).length&&o.push(`${u.id} has unresolved kanji references.`);const h=gn(u);h.length!==(u.kanji||[]).length&&o.push(`${u.id} cards expected ${u.kanji.length}, got ${h.length}`),Ds(u).length||o.push(`${u.id} has no exercises.`)}),o.length)throw new Error(`${_i()} ${o[0]}`);return!0}function nw(){fe.forEach(e=>{try{Ri(e)&&(yl(e),xn(e,"ready"))}catch(t){xn(e,"incomplete",t)}})}function sw(e){const t=F(e);if(!t||!r.progress)return!1;const n=Xn(),s=Yt(t);let a=!1;return $t(t).forEach(o=>{const l=Ze(t,o.id),c=n.sessions[l];if(!c)return;const d=Wo({cards:Xl(t,o),session:c,confirmedCompleted:!!(s?.completedLessons?.[o.id]||ye.has(`${t.toLowerCase()}:${o.id}`))});(c.phase==="test"||c.phase==="done")&&d.status==="incomplete"&&(c.phase="study",c.currentIndex=0,c.completedAt=null,a=!0),d.status==="study"&&c.currentIndex!==d.currentIndex&&(c.currentIndex=d.currentIndex,a=!0),d.status==="study"&&c.phase!=="study"&&(c.phase="study",a=!0)}),a&&(n.lastUpdatedAt=new Date().toISOString()),a}function rw(e){const t=F(e);if(!t||!r.progress)return!1;const n=Ms(t);if(!n)return!1;const s=n.course();if(!P$(t,s))return!1;let a=!1;n.lessons().forEach(l=>{Wg(t,l)&&(a=!0)});const o=n.lessonById(s.currentLessonId);if(o&&pn(t,s,o)){const c=n.lessons().find(d=>!pn(t,s,d))?.id||o.id;s.currentLessonId!==c&&(s.currentLessonId=c,a=!0)}return a}function aw(){if(!r.progress)return!1;let e=!1;return fe.forEach(t=>{const n=Ms(t);if(!n||!n.lessons().length)return;const s=n.course();if(!Qn(n.level,s.currentLessonId).some(d=>!!s.completedLessons?.[d]))return;const c=n.lessons().find(d=>!pn(n.level,s,d))?.id||Sc(n,{id:s.currentLessonId},s.currentLessonId)||s.currentLessonId;c&&s.currentLessonId!==c&&(s.currentLessonId=c,e=!0)}),e}async function Pi(e,{renderAfter:t=!0,force:n=!1}={}){const s=F(e);if(!s)return null;if(!n&&Ti(s)==="ready")return $t(s);if(!n&&Ci.has(s))return Ci.get(s);n&&Eu(s).forEach(([,o])=>wu.delete(o)),xn(s,"loading");const a=gw(Eu(s),s==="N5"?4:3).then(o=>{if(tw(s,o),yl(s),xn(s,"ready"),r.progress){lr({level:s});const l=sw(s),c=rw(s);(l||c)&&T()}return Qs(zr(Xs())),t&&P(),$t(s)}).catch(o=>{throw xn(s,"error",o),console.warn(`${s} textbook data failed to load.`,o),t&&r.route==="textbooks"&&r.activeTextbookLevel===s&&P(),o}).finally(()=>{Ci.delete(s)});return Ci.set(s,a),t&&r.route==="textbooks"&&r.activeTextbookLevel===s&&P(),a}function iw(e){const t=F(e);t&&(xn(t,"loading"),P(),Pi(t,{renderAfter:!0,force:!0}).catch(()=>{}))}async function ow({renderAfter:e=!0}={}){return il=Pi("N1",{renderAfter:e}).finally(()=>{il=null}),il}async function lw(){try{const e=localStorage.getItem(Re);if(localStorage.setItem(Re,I),!e||e===I)return!1;if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistrations();await Promise.all(t.map(async n=>{await n.update().catch(()=>null)}))}return!1}catch(e){return console.warn("App cache version check failed.",e),!1}}async function cw(){try{const e=localStorage.getItem(pi),t=localStorage.getItem("flashKanji.lastForcedBuild");return e==="done"&&t===I||(localStorage.setItem(pi,"done"),localStorage.setItem("flashKanji.lastForcedBuild",I)),!1}catch(e){return console.warn("Force cache reset failed.",e),!1}}async function $l({initialOnly:e=!1}={}){return Ov.get(e?"startup":"all",()=>dw({initialOnly:e}))}async function dw({initialOnly:e=!1}={}){const t=await Ee(O.lessons),n=Array.isArray(t?.lessons)?t.lessons:[],s=e?uw(n):n,a=await jl(s,async d=>{try{return{manifestLesson:d,payload:await Ee(d.file)}}catch(u){return console.warn(`Skipping lesson data: ${d?.file||"unknown lesson file"}`,u),null}},e?s.length:3),o=new Map(a.filter(Boolean).map(d=>[d.manifestLesson.id,d])),l=n.map(d=>{const u=o.get(d.id);if(!u)return{...d,file:d.file,items:[]};const{payload:m}=u;return{...d,...m.lesson,file:d.file,items:Array.isArray(m.items)?m.items.map(h=>hw(h,m.lesson.id)):[]}}),c=l.flatMap(d=>d.items.map(u=>({...u,lessonTitle:d.title,lessonOrder:d.order})));return{lessons:l,cards:c}}function uw(e){return e.filter((t,n)=>Kv.has(t.id)||n<2)}async function pw(e,t=3){const n=await jl(e,async([s,a])=>[s,await Ee(a)],t);return Object.fromEntries(n)}async function gw(e,t=3){const n=await jl(e,async([s,a])=>[s,await zu(a)],t);return Object.fromEntries(n)}async function jl(e,t,n=6){const s=[],a=Math.max(1,Number(n)||1);for(let o=0;o<e.length;o+=a){const l=e.slice(o,o+a);s.push(...await Promise.all(l.map(t))),o+a<e.length&&await new Promise(c=>window.setTimeout(c,0))}return s}async function Ee(e,t=null){let n=null;try{return await zu(e)}catch(s){n=s}return console.warn(`Falling back to empty data for ${e}.`,n),typeof t=="function"?t(n):t!==null?t:{version:1,languages:["ru","en"],ui:{},items:[],lessons:[],lesson:{},achievements:[],categories:[]}}async function Du(e,t=""){const n=Bu(e);let s=null;for(const a of n)try{const o=typeof AbortController<"u"?new AbortController:null,l=o?window.setTimeout(()=>o.abort(),pu):0;try{const c=await fetch(a,{signal:o?.signal});if(!c.ok){s=new Error(`Cannot load ${a}`);continue}return await c.text()}finally{l&&window.clearTimeout(l)}}catch(o){s=o}return console.warn(`Falling back to empty text for ${e}.`,s),typeof t=="function"?t(s):t}function Fu(e){const t=Object.fromEntries(fe.map(m=>[m,[]])),n=String(e||"").split(/\r?\n/);let s=null,a=null,o="idle",l=[],c=[];const d=()=>{!a||!s||(a.text=mw(l.join(`
`)),a.questions=c.map(m=>m.trim()).filter(Boolean),t[s].push(a),a=null,l=[],c=[],o="idle")},u=m=>{const h=String(m||"").trim().toLowerCase();return h==="жанр"||h==="genre"?"genre":h==="опора"||h==="source"||h==="basis"?"source":h==="цель"||h==="goal"?"goal":h};for(const m of n){const h=String(m??""),f=h.trim(),S=f.match(/^#\s*JLPT\s*(N[1-5])\b/i);if(S){d(),s=S[1].toUpperCase();continue}const C=f.match(/^##\s*(N[1-5])\s*(.+)$/i);if(C){d(),s=C[1].toUpperCase(),a={id:`${s.toLowerCase()}-reading-${String((t[s]||[]).length+1).padStart(2,"0")}`,level:s,title:fw(C[2]),genre:"",source:"",goal:"",text:"",questions:[]},o="meta";continue}if(/^#{1,2}(?!#)\s+/.test(f)&&!S&&!C){d(),s=null;continue}if(!a)continue;if(/^###\s*Проверочные вопросы/i.test(f)){o="questions";continue}if(o==="code"){/^```/.test(f)?o="body":l.push(h);continue}if(/^```/.test(f)){o="code";continue}if(o==="questions"){const L=f.match(/^[-*]\s+(.*)$/),k=f.match(/^\d+\.\s+(.*)$/);if(L){c.push(L[1]);continue}if(k){c.push(k[1]);continue}if(!f||/^---+$/.test(f))continue;c.push(f);continue}const x=f.match(/^\*\*(Жанр|Опора|Цель|Genre|Source|Goal)\:\*\*\s*(.*)$/i);if(x){const L=u(x[1]);a[L]=x[2].trim()}}return d(),t}function mw(e){return String(e||"").replace(/^\s*\n+/,"").replace(/\n+\s*$/,"")}function fw(e){return String(e||"").replace(/^[\s\-–—::]+/u,"").trim()}function Ou(e){const t=e&&typeof e=="object"&&!Array.isArray(e)?e.items&&typeof e.items=="object"&&!Array.isArray(e.items)?e.items:e:{},n={};return Object.entries(t||{}).forEach(([s,a])=>{!s||!a||typeof a!="object"||(n[String(s)]={titleRu:String(a.titleRu||a.ruTitle||a.title_ru||"").trim(),titleEn:String(a.titleEn||a.enTitle||a.title_en||"").trim(),ru:String(a.ru||a.translationRu||a.translation_ru||"").trim(),en:String(a.en||a.translationEn||a.translation_en||"").trim()})}),n}function Bu(e){const t=String(e||"").trim();if(!t)return[t];if(/^https?:\/\//i.test(t)||t.startsWith("file:"))return[t];const n=t.replace(/^\.\/+/,"").replace(/^\.\.\/+/,"").replace(/^\/+/,""),s=[t,`./${n}`,`../${n}`,`index/${n}`,`/index/${n}`,`/${n}`];return[...new Set(s.filter(Boolean))]}function hw(e,t){return{...e,id:String(e.id),lessonId:t,examples:Array.isArray(e.examples)?e.examples:[],apps:Array.isArray(e.apps)?e.apps:[],stroke_order:Array.isArray(e.stroke_order)?e.stroke_order:[]}}function vw(e){const t=e?.items&&typeof e.items=="object"?e.items:{};return Object.fromEntries(Object.entries(t).map(([n,s])=>{const a=Array.isArray(s?.strokeOrder)?s.strokeOrder.filter(o=>typeof o?.path=="string"&&o.path.trim()):[];return a.length?[n,{...s,kanji:s.kanji||n,strokes:Number(s.strokes||a.length),viewBox:s.viewBox||"0 0 109 109",strokeOrder:a}]:null}).filter(Boolean))}function ww(e){const t=Array.isArray(e?.categories)?e.categories:[],n=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),currency:e?.currency||"Moon Fragments",categories:t.length?t:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}],items:n.map(s=>{const a=ui(s.price);return{...s,id:String(s.id||""),type:String(s.type||"effect"),price:a,asset:String(s.asset||""),preview:String(s.preview||s.asset||""),rarity:String(s.rarity||"common").toLowerCase(),defaultOwned:!!(s.defaultOwned||a===0),unlockCondition:s.unlockCondition||null}}).filter(s=>s.id)}}async function zu(e){return wu.get(e,()=>bw(e))}async function bw(e){const t=Bu(e);let n=null;for(const s of t)try{const a=typeof AbortController<"u"?new AbortController:null,o=a?window.setTimeout(()=>a.abort(),pu):0;try{const l=await fetch(s,{signal:a?.signal});if(!l.ok){n=new Error(`Cannot load ${s}: HTTP ${l.status}`);continue}const c=await l.text();try{return JSON.parse(c)}catch(d){n=d}}finally{o&&window.clearTimeout(o)}}catch(a){n=a}throw n||new Error(`Cannot load ${e}`)}function On(){return{owned:[],selected:{background:"bg_study_hub",outfit:qo,theme:"theme_default_dark",decoration:null,frame:null,effect:null},seen:[],updatedAt:new Date().toISOString()}}function kw(){try{const e=localStorage.getItem($);if(!e)return On();const t=JSON.parse(e);if(!t||typeof t!="object")return On();const n=On(),s=t.selected||t.equipped||{},a=Object.entries(Yd(s)).filter(([,o])=>!!o);return{owned:Ve(t.owned||t.ownedItems||t.inventory||n.owned),selected:{...n.selected,...Object.fromEntries(a)},seen:Ve(t.seen||n.seen),updatedAt:t.updatedAt||n.updatedAt}}catch(e){return console.warn("Customization storage failed.",e),On()}}function yw(){try{const e=localStorage.getItem($);if(!e)return null;const t=JSON.parse(e);return!t||typeof t!="object"?null:t.selected?.background||t.equipped?.background||null}catch{return null}}function ir(){if(!r.customization)return!1;if(fi)return!0;fi=!0;const e=()=>{ys=0,fi=!1,r.customization.updatedAt=new Date().toISOString();try{localStorage.setItem($,JSON.stringify(r.customization))}catch(t){console.warn("Customization save failed.",t)}};return"requestIdleCallback"in window?ys=window.requestIdleCallback(e,{timeout:1200}):ys=window.setTimeout(e,160),!0}function $w(){if(!r.customization)return!1;fi=!1,ys&&("cancelIdleCallback"in window?window.cancelIdleCallback(ys):window.clearTimeout(ys),ys=0),r.customization.updatedAt=new Date().toISOString();try{return localStorage.setItem($,JSON.stringify(r.customization)),!0}catch(e){return console.warn("Customization save failed.",e),!1}}function xs(){const e=yw(),t=kw(),n=Be().length>0,s=new Set,a=Ve(r.progress.shop?.owned||[]);Ve(t.owned).forEach(l=>{const c=Se(l)||Bn(l);c?s.add(c.id):n||s.add(l)}),Be().forEach(l=>{(l.defaultOwned||l.price===0)&&s.add(l.id)}),Ve(r.progress.unlockedBackgrounds||[]).forEach(l=>{const c=Se(l)||Bn(l);c?s.add(c.id):n||s.add(l)}),Ve(r.progress.unlockedEvaSprites||[]).forEach(l=>{const c=Nn(l);c&&s.add(c.id),a.includes(`eva_sprite:${l}`)&&c&&s.add(c.id)}),a.forEach(l=>{const c=String(l),d=Se(c)||Bn(c);if(d?s.add(d.id):n||s.add(c),!d&&c.startsWith("eva_sprite:")){const u=Nn(c.replace("eva_sprite:",""));u&&s.add(u.id)}});const o=jw({...On().selected,...Yd(r.progress.shop?.equipped||{}),...t.selected||{}});o.background=uv({catalogItems:Be(),owned:[...s],customizationSelected:e,progressEquipped:r.progress.shop?.equipped?.background,progressSelected:r.progress.selectedEvaRoomBackground}),o.outfit=pv({catalogItems:Be(),owned:[...s],customizationSelected:o.outfit,progressEquipped:r.progress.shop?.equipped?.outfit,progressSelected:r.progress.selectedEvaSprite,fallbackId:qo}),n||(o.background=e||t.selected?.background||r.progress.shop?.equipped?.background||r.progress.selectedEvaRoomBackground||o.background||"bg_study_hub"),n&&!s.has(o.background)&&(o.background="bg_study_hub"),n&&!s.has(o.outfit)&&(o.outfit=pv({catalogItems:Be(),owned:[...s],progressEquipped:r.progress.shop?.equipped?.outfit,progressSelected:r.progress.selectedEvaSprite,fallbackId:qo})),n&&!s.has(o.theme)&&(o.theme="theme_default_dark"),n&&o.decoration&&!s.has(o.decoration)&&(o.decoration=null),n&&o.effect&&!s.has(o.effect)&&(o.effect=null),r.customization={owned:[...s],selected:o,seen:[...new Set([...Ve(t.seen||[]),...s])],updatedAt:t.updatedAt||new Date().toISOString()},Zr(),n&&ir()}function Zr(){var n;if(!r.customization||!r.progress)return;ge();const e=r.customization.selected||{};e.background&&(r.progress.selectedEvaRoomBackground=e.background);const t=Se(e.outfit);t?.spriteId&&(r.progress.selectedEvaSprite=t.spriteId),r.progress.unlockedBackgrounds=[...new Set([...Ve(r.progress.unlockedBackgrounds||[]),...r.customization.owned.filter(s=>Se(s)?.type==="background")])],r.progress.unlockedEvaSprites=[...new Set([...Ve(r.progress.unlockedEvaSprites||[]),...r.customization.owned.map(s=>Se(s)).filter(s=>s?.type==="outfit"&&s.spriteId).map(s=>s.spriteId)])],(n=r.progress).shop||(n.shop={owned:[],equipped:{}}),r.progress.shop.owned=[...new Set([...Ve(r.progress.shop.owned||[]),...r.customization.owned,...r.progress.unlockedEvaSprites.map(s=>`eva_sprite:${s}`)])],r.progress.shop.equipped={...r.progress.shop.equipped||{},background:e.background||null,outfit:e.outfit||null,theme:e.theme||null,decoration:e.decoration||e.frame||null,effect:e.effect||null}}function Be(){return r.customizationCatalog?.items||[]}function Se(e){return Be().find(t=>t.id===e)||null}function Bn(e){const t=String(e||"");return t&&Be().find(n=>Array.isArray(n.legacyIds)&&n.legacyIds.map(String).includes(t))||null}function zn(e){return(Se(e)||Bn(e))?.id||e||null}function jw(e={}){return{background:zn(e.background),outfit:zn(e.outfit),theme:zn(e.theme),decoration:zn(e.decoration||e.frame),effect:zn(e.effect)}}function Nn(e){const t=String(e||"");if(!t)return null;const n=`eva_sprite:${t}`;return Be().find(s=>s.type!=="outfit"?!1:s.spriteId===t||s.spriteId&&t.startsWith(`${s.spriteId}_`)||s.legacySpriteId===t||s.legacySpriteId&&t.startsWith(`${s.legacySpriteId}_`)?!0:Array.isArray(s.legacyIds)&&s.legacyIds.map(String).includes(n))||null}function Sw(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),title:n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},summary:n.summary||{ru:"",en:""},goals:Array.isArray(n.goals)?n.goals:[],sections:Array.isArray(n.sections)?n.sections:[],practice:Array.isArray(n.practice)?n.practice:[],checkpoint:Array.isArray(n.checkpoint)?n.checkpoint:[]})).filter(n=>n.jlpt)}function Cw(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[];return{version:Number(e?.version||1),generatedAt:e?.generatedAt||null,items:t.map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),slug:String(n.slug||String(n.jlpt||"").toLowerCase()),title:n.title||{ru:n.displayTitle?.ru||n.jlpt||"JLPT",en:n.displayTitle?.en||n.jlpt||"JLPT"},displayTitle:n.displayTitle||n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},description:n.description||{ru:"",en:""},goal:n.goal||{ru:"",en:""},recommendedCycle:n.recommendedCycle||{ru:"",en:""},previousLevels:Array.isArray(n.previousLevels)?n.previousLevels:[],nextLevels:Array.isArray(n.nextLevels)?n.nextLevels:[],lessonIds:Array.isArray(n.lessonIds)?n.lessonIds:[],files:n.files||{},lessonCount:Number(n.lessonCount||0),kanjiCount:Number(n.kanjiCount||0),cardCount:Number(n.cardCount||0)})).filter(n=>n.jlpt).sort((n,s)=>fe.indexOf(n.jlpt)-fe.indexOf(s.jlpt))}}function xw(e){const t=Array.isArray(e?.courses)?e.courses:[];return{schema_version:Number(e?.schema_version||1),content_version:String(e?.content_version||""),courses:t.map(n=>({...n,slug:String(n.slug||"").toLowerCase(),title:String(n.title||""),native_title:String(n.native_title||""),description:String(n.description||""),course_file:String(n.course_file||""),pdf_url:String(n.pdf_url||""),lesson_count:Number(n.lesson_count||0),base_character_count:Number(n.base_character_count||0),task_count:Number(n.task_count||0)})).filter(n=>ve(n.slug))}}function Nw(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),apps:Array.isArray(n.apps)?n.apps:[],kana:n.kana||{hiragana:[],katakana:[]},kanjiFocus:Array.isArray(n.kanjiFocus)?n.kanjiFocus:[],drills:Array.isArray(n.drills)?n.drills:[],sources:Array.isArray(n.sources)?n.sources:[]})).filter(n=>n.jlpt)}function Uu(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"JLPT N5",en:"JLPT N5"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||80),lessonCount:Number(e?.lessonCount||10),kanjiPerLesson:Number(e?.kanjiPerLesson||8),pdfUrl:e?.pdfUrl||"docs/flashkanji_N5_expanded_textbook.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],rewards:{addToSrsXp:4,knowXp:6,hardXp:2,exerciseXp:7,exerciseMoon:1,lessonCompleteXp:45,lessonCompleteMoon:6,finalTestXp:120,finalTestMoon:20,...e?.rewards||{}}}}function Sl(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N5",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n5-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30]})).filter(n=>n.kanji.length)}}function Ju(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),lessonId:n.lessonId||n.lesson_id||null,kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:[],jlpt:"N5"})).filter(n=>n.kanji)}function Cl(){if(!Array.isArray(r.n5KanjiCatalog)||!r.n5KanjiCatalog.length)return;const e=new Map(r.n5KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);if(!s)return n;const a=String(n.jlpt||s.jlpt||"").toUpperCase();return a&&a!=="N5"?n:(t.add(s.kanji),Ei(n,s))}),r.n5KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(Ei({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId||null,jlpt:"N5",examples:[],source:"n5-catalog"},n)),t.add(n.kanji))})}function Ei(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:ee(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,jlpt:"N5",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:ee(s(n.onyomi)||e.onyomi||""),kunyomi:ee(s(n.kunyomi)||e.kunyomi||""),hiragana:ee((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n5Detail:t}}function Gu(e){return{version:Number(e?.version||1),level:"N5",types:Array.isArray(e?.types)?e.types:[],lessonQuestionCount:Number(e?.lessonQuestionCount||6),reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function qu(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"Финальный тест JLPT N5",en:"JLPT N5 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||24),passingPercent:Number(e?.passingPercent||80),types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","srs"],rewards:{completeXp:120,completeMoon:20,passXp:80,passMoon:12,...e?.rewards||{}}}}function Hu(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"JLPT N4",en:"JLPT N4"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||170),lessonCount:Number(e?.lessonCount||17),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||48),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N4_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:5,knowXp:7,hardXp:2,exerciseXp:9,exerciseMoon:1,grammarXp:10,grammarMoon:1,lessonCompleteXp:65,lessonCompleteMoon:8,readingXp:35,readingMoon:4,listeningXp:30,listeningMoon:3,finalTestXp:180,finalTestMoon:35,...e?.rewards||{}}}}function Wu(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N4",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n4-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45]})).filter(n=>n.kanji.length)}}function Vu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N4",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function xl(){if(!Array.isArray(r.n4KanjiCatalog)||!r.n4KanjiCatalog.length)return;const e=new Map(r.n4KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N4"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Mi(n,s))}),r.n4KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(Mi({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[],source:"n4-catalog"},n)),t.add(n.kanji))})}function Mi(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:ee(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N4",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:ee(s(n.onyomi)||e.onyomi||""),kunyomi:ee(s(n.kunyomi)||e.kunyomi||""),hiragana:ee((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n4Detail:t}}function Xu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-grammar-${String(s+1).padStart(2,"0")}`),level:"N4",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Qu(e){return{version:Number(e?.version||1),level:"N4",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function ea(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Yu(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"Финальный тест JLPT N4",en:"JLPT N4 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||32),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||180),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||35),passXp:Number(e?.rewards?.passXp||90),passMoon:Number(e?.rewards?.passMoon||15)}}}function Zu(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"JLPT N3",en:"JLPT N3"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||370),lessonCount:Number(e?.lessonCount||37),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||80),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N3_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:6,knowXp:8,hardXp:2,exerciseXp:10,exerciseMoon:1,grammarXp:11,grammarMoon:1,lessonCompleteXp:75,lessonCompleteMoon:9,readingXp:38,readingMoon:4,listeningXp:34,listeningMoon:4,finalTestXp:220,finalTestMoon:40,...e?.rewards||{}}}}function ep(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N3",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n3-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45,60]})).filter(n=>n.kanji.length)}}function tp(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N3",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Nl(){if(!Array.isArray(r.n3KanjiCatalog)||!r.n3KanjiCatalog.length)return;const e=new Map(r.n3KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N3"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Ki(n,s))}),r.n3KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(Ki({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[],source:"n3-catalog"},n)),t.add(n.kanji))})}function Ki(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:ee(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N3",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:ee(s(n.onyomi)||e.onyomi||""),kunyomi:ee(s(n.kunyomi)||e.kunyomi||""),hiragana:ee((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n3Detail:t}}function np(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-grammar-${String(s+1).padStart(2,"0")}`),level:"N3",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function sp(e){return{version:Number(e?.version||1),level:"N3",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Di(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function rp(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"Финальный тест JLPT N3",en:"JLPT N3 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||220),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||40),passXp:Number(e?.rewards?.passXp||110),passMoon:Number(e?.rewards?.passMoon||18)}}}function ap(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"JLPT N2",en:"JLPT N2"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||380),lessonCount:Number(e?.lessonCount||38),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||120),readingCount:Number(e?.readingCount||46),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N2_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function ip(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N2",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n2-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function op(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N2",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Ll(){if(!Array.isArray(r.n2KanjiCatalog)||!r.n2KanjiCatalog.length)return;const e=new Map(r.n2KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N2"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Fi(n,s))}),r.n2KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(Fi({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[],source:"n2-catalog"},n)),t.add(n.kanji))})}function Fi(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:ee(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N2",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:ee(s(n.onyomi)||e.onyomi||""),kunyomi:ee(s(n.kunyomi)||e.kunyomi||""),hiragana:ee((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n2Detail:t}}function lp(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-grammar-${String(s+1).padStart(2,"0")}`),level:"N2",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function cp(e){return{version:Number(e?.version||1),level:"N2",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Oi(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function dp(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"Финальный тест JLPT N2",en:"JLPT N2 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||260),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||48),passXp:Number(e?.rewards?.passXp||130),passMoon:Number(e?.rewards?.passMoon||20)}}}function up(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"JLPT N1",en:"JLPT N1"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||1047),lessonCount:Number(e?.lessonCount||53),kanjiPerLesson:Number(e?.kanjiPerLesson||20),grammarCount:Number(e?.grammarCount||142),readingCount:Number(e?.readingCount||8),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N1_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function pp(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N1",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n1-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function gp(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N1",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Al(){if(!Array.isArray(r.n1KanjiCatalog)||!r.n1KanjiCatalog.length)return;js=null;const e=new Map(r.n1KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N1"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Bi(n,s))}),r.n1KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(Bi({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N1",examples:[],source:"n1-catalog"},n)),t.add(n.kanji))}),js=null}function Bi(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:ee(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N1",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:ee(s(n.onyomi)||e.onyomi||""),kunyomi:ee(s(n.kunyomi)||e.kunyomi||""),hiragana:ee((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n1Detail:t}}function mp(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-grammar-${String(s+1).padStart(2,"0")}`),level:"N1",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function fp(e){return{version:Number(e?.version||1),level:"N1",lessonQuestionCount:Number(e?.lessonQuestionCount||10),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function zi(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function hp(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"Финальный тест JLPT N1",en:"JLPT N1 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||45),passingPercent:Number(e?.passingPercent||82),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||320),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||60),passXp:Number(e?.rewards?.passXp||160),passMoon:Number(e?.rewards?.passMoon||25)}}}function Lw(e){return Array.isArray(e)?e.map(t=>({value:String(t?.value||t?.id||""),label:t?.label||t?.title||t?.text||{ru:String(t?.labelRu||t?.ru||t?.value||""),en:String(t?.labelEn||t?.en||t?.value||"")}})).filter(t=>t.value):[]}function Aw(e){return Array.isArray(e)?e.map(t=>({answer:Array.isArray(t?.answer)?t.answer.map(String).filter(Boolean):[],reading:Array.isArray(t?.reading)?t.reading.map(n=>ee(n)):[]})):[]}function Iw(e,t){const n=Array.isArray(t)?t.flatMap(s=>Array.isArray(s?.answer)?s.answer.map((a,o)=>({kanji:String(a||""),reading:String(s?.reading?.[o]||"")})):[]):[];return[...Array.isArray(e)?e:[],...n].map(s=>({kanji:String(s?.kanji||""),reading:String(s?.reading||"")})).filter(s=>s.kanji).filter((s,a,o)=>o.findIndex(l=>l.kanji===s.kanji&&l.reading===s.reading)===a)}function vp(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[],n=t.find(a=>String(a?.kind||"").toLowerCase()==="sentences")||t[0]||null;return(Array.isArray(n?.items)?n.items:[]).map((a,o)=>({id:String(a.id||`${String(n?.id||"reading-n5-sentence")}-${o+1}`),level:String(a.jlpt||n?.level||"N5").toUpperCase(),kind:"cloze",sourceKind:"sentences",sourceId:String(n?.id||"reading-n5-sentences"),sourceTitle:n?.title||{ru:"Предложения",en:"Sentences"},title:{ru:"Предложение",en:"Sentence"},sentence:String(a.sentence||""),reading:ee(a.reading||""),translationRu:String(a.translationRu||a.translation_ru||a.ru||""),translationEn:String(a.translationEn||a.translation_en||a.en||""),blanks:Aw(a.blanks),tiles:Iw(a.tiles,a.blanks),source:"reading"})).filter(a=>a.id)}function wp(e,t=[]){const n=Array.isArray(e?.achievements)&&e.achievements.length?e.achievements:t,s=Array.isArray(e?.categories)?e.categories.map(l=>({id:String(l.id),title:l.title||{ru:l.id,en:l.id},icon:l.icon||"moon"})):[],a=n.map(l=>Il(l)),o=new Set(s.map(l=>l.id));return a.forEach(l=>{o.has(l.category)||(o.add(l.category),s.push({id:l.category,title:{ru:l.category,en:l.category},icon:l.icon||"moon"}))}),{categories:s,items:a}}function Il(e){const t=Number(e.rewardXp??e.xp??0),n=Number(e.rewardFragments??e.coins??0);return{...e,id:String(e.id),category:e.category||e.kind||"learning",title:e.title||e.name||{ru:e.id,en:e.id},description:e.description||{ru:"",en:""},icon:e.icon||"moon",kind:e.kind||"learned",target:Number(e.target||1),rewardXp:t,rewardFragments:n,unlocked:!!e.unlocked,secret:!!e.secret}}function bp(){return[navigator.language,...navigator.languages||[]].filter(Boolean).map(t=>String(t).toLowerCase()).some(t=>t==="ru"||t.startsWith("ru-")||t==="be"||t.startsWith("be-"))?"ru":"en"}function or(){const e=bp();return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),settings:{theme:"dark",themeManuallySelected:!1,sound:!0,uxSound:!0,uxVolume:.75,language:e,languageAutoDetected:!0,languageManuallySelected:!1,dailyGoal:10},xp:0,level:1,moonFragments:0,totalCorrect:0,totalWrong:0,correctCombo:0,bestCorrectCombo:0,appOpens:0,totalMoonFragmentsEarned:0,cards:{},seenCards:{},seenKanji:{},daily:{},favorites:{},transactions:[],streakHistory:[],streak:{current:0,best:0,lastStudyDate:null,pendingReward:null},visits:{firstVisitDate:null,lastVisitDate:null,lastDailyBonusDate:null,streak:0,bestStreak:0},lessonCompletions:{},achievements:{},dailyBonuses:{},dailyBonusPending:null,lastOpenedJlptLesson:null,lastOpenedJlptLessons:{},viewedReadingLevels:{},writingPractice:{completed:0,cards:{}},secrets:{evaClicks:0,nightVisit:!1},learningPath:Rl(),jlptLessonStudy:_l(),sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[],completed:{},attempts:0,recentIds:[],recentAnswers:[],custom:[],customSentences:[],customEditingId:null,customDraft:{jp:"",hiragana:"",ru:"",en:""},customMessage:"",customStatus:""},jlptLessonPractice:{activeIds:{},selected:{},checked:{},results:{},completed:{}},readingExercises:{},n5Course:El(),n4Course:Ml(),n3Course:Kl(),n2Course:Dl(),n1Course:Fl(),kanaCourses:Vd(null),unlockedJlptLevels:fe.slice(),unlockedBackgrounds:["bg_study_hub"],selectedEvaRoomBackground:"bg_study_hub",unlockedEvaSprites:["idle","default"],selectedEvaSprite:"idle",evaRoomDialogueProgress:{currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]},evaRoomQuiz:{answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]},evaAutonomy:Np(),evaRelationship:Ol(),shop:{owned:[],equipped:{}}}}function Tw(){const e=or();try{const t=W1();return t?kp(e,t):e}catch(t){return console.warn("Progress reset because stored JSON is invalid.",t),e}}function kp(e,t){return{...e,...t,version:3,settings:Rw(e.settings,t.settings||{}),cards:V1({...e.cards,...t.cards||{}}),seenCards:{...e.seenCards,...t.seenCards||{}},seenKanji:{...e.seenKanji,...t.seenKanji||{}},daily:{...e.daily,...t.daily||{}},favorites:{...e.favorites,...t.favorites||{}},transactions:Array.isArray(t.transactions)?t.transactions:e.transactions,streakHistory:Array.isArray(t.streakHistory)?t.streakHistory:e.streakHistory,streak:Pw(e.streak,t.streak||{}),visits:{...e.visits,...t.visits||{}},lessonCompletions:{...e.lessonCompletions,...t.lessonCompletions||{}},achievements:{...e.achievements,...t.achievements||{}},dailyBonuses:{...e.dailyBonuses,...t.dailyBonuses||{}},dailyBonusPending:Ui(t.dailyBonusPending||null),lastOpenedJlptLesson:it(t.lastOpenedJlptLesson||null),lastOpenedJlptLessons:LL(t.lastOpenedJlptLessons||{}),viewedReadingLevels:Vs(t.viewedReadingLevels||{}),appOpens:Number(t.appOpens||e.appOpens),moonFragments:ui(t.moonFragments,e.moonFragments),totalMoonFragmentsEarned:Number(t.totalMoonFragmentsEarned||e.totalMoonFragmentsEarned),writingPractice:{...e.writingPractice,...t.writingPractice||{}},secrets:{...e.secrets,...t.secrets||{}},learningPath:Mw(e.learningPath,t.learningPath||{}),jlptLessonStudy:Ew(e.jlptLessonStudy,t.jlptLessonStudy||{}),sentencePractice:Cp(e.sentencePractice,t.sentencePractice||{}),jlptLessonPractice:xp(e.jlptLessonPractice,t.jlptLessonPractice||{}),readingExercises:{...e.readingExercises,...t.readingExercises||{}},n5Course:Kw(e.n5Course,t.n5Course||{}),n4Course:Dw(e.n4Course,t.n4Course||{}),n3Course:Fw(e.n3Course,t.n3Course||{}),n2Course:Ow(e.n2Course,t.n2Course||{}),n1Course:Bw(e.n1Course,t.n1Course||{}),kanaCourses:Vd(t.kanaCourses||e.kanaCourses),unlockedJlptLevels:[...new Set([...Array.isArray(e.unlockedJlptLevels)?e.unlockedJlptLevels:[],...Array.isArray(t.unlockedJlptLevels)?t.unlockedJlptLevels:[],...fe])],unlockedBackgrounds:[...new Set([...e.unlockedBackgrounds||[],...t.unlockedBackgrounds||[]])],selectedEvaRoomBackground:t.selectedEvaRoomBackground||e.selectedEvaRoomBackground,unlockedEvaSprites:[...new Set([...e.unlockedEvaSprites||[],...t.unlockedEvaSprites||[],...(t.shop&&t.shop.owned||[]).filter(n=>String(n).startsWith("eva_sprite:")).map(n=>String(n).replace("eva_sprite:",""))])],selectedEvaSprite:t.selectedEvaSprite||e.selectedEvaSprite,evaRoomDialogueProgress:{...e.evaRoomDialogueProgress,...t.evaRoomDialogueProgress||{},rewardsClaimed:{...e.evaRoomDialogueProgress.rewardsClaimed,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.rewardsClaimed||{}},visited:{...e.evaRoomDialogueProgress.visited,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.visited||{}},lineHistory:Array.isArray(t.evaRoomDialogueProgress?.lineHistory)?t.evaRoomDialogueProgress.lineHistory:e.evaRoomDialogueProgress.lineHistory||[]},evaRoomQuiz:{...e.evaRoomQuiz,...t.evaRoomQuiz||{},rewarded:{...e.evaRoomQuiz.rewarded,...t.evaRoomQuiz&&t.evaRoomQuiz.rewarded||{}},history:Array.isArray(t.evaRoomQuiz?.history)?t.evaRoomQuiz.history.slice(0,40):e.evaRoomQuiz.history},evaAutonomy:Ap(e.evaAutonomy,t.evaAutonomy||{}),evaRelationship:Lp(e.evaRelationship,t.evaRelationship||{}),shop:{owned:[...new Set([...Ve(e.shop.owned||[]),...Ve(t.shop?.owned||t.ownedItems||[])])],equipped:{...e.shop.equipped,...Yd(t.shop?.equipped||t.equippedItems||{})}}}}function Rw(e,t){const n={...e,...t||{}};return n.theme=_w(n.theme,e.theme||"dark"),n.themeManuallySelected=Un(n.themeManuallySelected,e.themeManuallySelected===!0),n.themeManuallySelected||(n.theme="dark"),n.sound=Un(n.sound,e.sound!==!1),n.uxSound=n.sound!==!1,n.languageAutoDetected=Un(n.languageAutoDetected,e.languageAutoDetected!==!1),n.languageManuallySelected=Un(n.languageManuallySelected,e.languageManuallySelected===!0),n}function _w(e,t="dark"){return e==="light"||e==="dark"?e:t}function Pw(e,t){const n={...e,...t||{}};return n.current=Tl(n.current,e.current||0),n.best=Tl(n.best,e.best||0),n.lastStudyDate=n.lastStudyDate||null,n.pendingReward=yp(n.pendingReward),n}function yp(e){if(!e||typeof e!="object")return null;const t=Tl(e.milestone,0),n=typeof e.availableOn=="string"?e.availableOn:"";return!t||!n?null:{milestone:t,availableOn:n}}function Ui(e){if(!e||typeof e!="object")return null;const t=typeof e.availableOn=="string"?e.availableOn:"";return t?{availableOn:t}:null}function Un(e,t=!0){if(typeof e=="boolean")return e;if(typeof e=="number")return e!==0;if(typeof e=="string"){const n=e.trim().toLowerCase();if(["false","0","off","no","disabled"].includes(n))return!1;if(["true","1","on","yes","enabled"].includes(n))return!0}return t}function Tl(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function Rl(){return{version:cu,currentLevel:du,currentNodeId:_e,completedNodes:{},unlockedNodes:{[_e]:!0},activeSession:null,resultHistory:{},lastUpdatedAt:null}}function _l(){return{activeSessionKey:null,sessions:{},lastUpdatedAt:null}}function $p(){return{level:"",lessonId:"",currentIndex:0,answers:{},phase:"study",startedAt:null,updatedAt:null,completedAt:null,testOpenedAt:null}}function jp(e){const t=String(e||"").toLowerCase();return["study","test","done"].includes(t)?t:"study"}function Sp(e,t){const n=$p(),s=t&&typeof t=="object"?t:{},a={...e?.answers||n.answers,...s.answers||{}};return{...n,...e||{},...s,level:String(s.level||e?.level||n.level||"").toUpperCase(),lessonId:String(s.lessonId||e?.lessonId||n.lessonId||""),currentIndex:Math.max(0,Number(s.currentIndex??e?.currentIndex??n.currentIndex??0)),answers:a,phase:jp(s.phase||e?.phase||n.phase),startedAt:s.startedAt||e?.startedAt||n.startedAt||null,updatedAt:s.updatedAt||e?.updatedAt||n.updatedAt||null,completedAt:s.completedAt||e?.completedAt||n.completedAt||null,testOpenedAt:s.testOpenedAt||e?.testOpenedAt||n.testOpenedAt||null}}function Ew(e,t){const n=_l(),s=t&&typeof t=="object"?t:{},a={},o=e?.sessions||{},l=s.sessions||{};return Object.keys(o).forEach(c=>{a[c]=Sp(o[c],l[c])}),Object.keys(l).forEach(c=>{a[c]||(a[c]=Sp(null,l[c]))}),{...n,...e||{},...s||{},sessions:a,activeSessionKey:s.activeSessionKey||e?.activeSessionKey||n.activeSessionKey||null,lastUpdatedAt:s.lastUpdatedAt||e?.lastUpdatedAt||n.lastUpdatedAt||null}}function Mw(e,t){return{...e,...t||{},version:cu,currentLevel:String(t?.currentLevel||e.currentLevel||du).toUpperCase(),currentNodeId:String(t?.currentNodeId||e.currentNodeId||_e),completedNodes:{...e.completedNodes,...t?.completedNodes||{}},unlockedNodes:{...e.unlockedNodes,...t?.unlockedNodes||{}},activeSession:Pl(t?.activeSession||e.activeSession||null),resultHistory:{...e.resultHistory,...t?.resultHistory||{}},lastUpdatedAt:t?.lastUpdatedAt||e.lastUpdatedAt||null}}function Pl(e){return!e||typeof e!="object"?null:{nodeId:String(e.nodeId||""),mode:String(e.mode||sn),stepIndex:Math.max(0,Number(e.stepIndex||0)),answers:{...e.answers||{}},mistakes:Array.isArray(e.mistakes)?e.mistakes.slice(0,80):[],reviewStepIds:Array.isArray(e.reviewStepIds)?e.reviewStepIds.map(String).filter(Boolean).slice(0,80):[],score:Number(e.score||0),startedAt:e.startedAt||new Date().toISOString(),updatedAt:e.updatedAt||new Date().toISOString()}}function El(){return{currentLessonId:"n5-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0,correctAnswers:0,incorrectAnswers:0,unansweredAnswers:0,totalQuestions:0,mistakeQuestionIds:[],bestScore:0,lastScore:0,passedAt:null,lastRewardXp:0,lastRewardMoon:0},customSentences:[]}}function Kw(e,t){return{...e,...t||{},currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Vs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:_a(e.exerciseSrs,t?.exerciseSrs||{},"N5"),writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Ml(){return{opened:!1,currentLessonId:"n4-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Dw(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Vs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:_a(e.exerciseSrs,t?.exerciseSrs||{},"N4"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Kl(){return{opened:!1,currentLessonId:"n3-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Fw(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Vs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:_a(e.exerciseSrs,t?.exerciseSrs||{},"N3"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Dl(){return{opened:!1,currentLessonId:"n2-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Ow(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Vs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:_a(e.exerciseSrs,t?.exerciseSrs||{},"N2"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Fl(){return{opened:!1,currentLessonId:"bulk-n1-01",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Bw(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Vs(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:_a(e.exerciseSrs,t?.exerciseSrs||{},"N1"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Cp(e,t){return{...e,...t,selected:Array.isArray(t.selected)?t.selected:e.selected,tileKeys:Array.isArray(t.tileKeys)?t.tileKeys:e.tileKeys,recentIds:Array.isArray(t.recentIds)?t.recentIds:e.recentIds,recentAnswers:Array.isArray(t.recentAnswers)?t.recentAnswers:e.recentAnswers,completed:{...e.completed,...t.completed||{}},custom:Array.isArray(t.custom)?t.custom.slice(0,80):e.custom,customSentences:zw(t.customSentences,t.custom),customEditingId:typeof t.customEditingId=="string"?t.customEditingId:null,customDraft:Ji(t.customDraft||e.customDraft),customMessage:typeof t.customMessage=="string"?t.customMessage:e.customMessage,customStatus:typeof t.customStatus=="string"?t.customStatus:e.customStatus}}function Ji(e={}){return{jp:String(e.jp??e.sentence??""),hiragana:String(e.hiragana??e.reading??""),ru:String(e.ru??e.translationRu??""),en:String(e.en??e.translationEn??"")}}function zw(e,t){const n=[],s=new Set,a=o=>{if(!o)return;const l=is(o.jp||pf(o)),c=Nr(l);if(!c||s.has(c))return;s.add(c);const d=String(o.id||"").startsWith("custom_")?String(o.id):`custom_${Je(c).toString(36)}`;n.push({id:d,jp:l,hiragana:is(o.hiragana||o.reading||""),ru:is(o.ru||o.translationRu||""),en:is(o.en||o.translationEn||""),source:"user"})};return(Array.isArray(e)?e:[]).forEach(a),(Array.isArray(t)?t:[]).forEach(a),n.slice(0,160)}function xp(e,t){return{...e,...t,activeIds:{...e.activeIds,...t.activeIds||{}},selected:{...e.selected,...t.selected||{}},checked:{...e.checked,...t.checked||{}},results:{...e.results,...t.results||{}},completed:{...e.completed,...t.completed||{}}}}function Ol(){return{warmth:44,trust:40,discipline:35,curiosity:42,mood:"neutral",conversationCount:0,totalDialogueChoices:0,lastInteractionAt:null,lastInteractionDate:null,lastDecayDate:ce(),lastKnown:{learned:0,mastered:0,reviews:0,lessons:0,streak:0,wrong:0,writing:0,sentence:0},history:[]}}function Np(){return{enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",currentLine:null,currentQuestion:null,currentDecoration:null,currentEffect:null,mood:"neutral",emotion:"calm",lastSpokeAt:null,nextSpeakAt:null,recentLineIds:[],lastRoomId:null,lastSprite:null}}function Lp(e,t){return{...e,...t,warmth:de(Number(t.warmth??e.warmth),0,100),trust:de(Number(t.trust??e.trust),0,100),discipline:de(Number(t.discipline??e.discipline),0,100),curiosity:de(Number(t.curiosity??e.curiosity),0,100),lastKnown:{...e.lastKnown,...t.lastKnown||{}},history:Array.isArray(t.history)?t.history.slice(0,40):e.history}}function Ap(e,t){return{...e,...t,enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,32):e.recentLineIds,currentLine:t.currentLine&&typeof t.currentLine=="object"?t.currentLine:e.currentLine,currentQuestion:t.currentQuestion&&typeof t.currentQuestion=="object"?t.currentQuestion:e.currentQuestion,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:e.currentDecoration,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion}}function Kt(){return{lastSeenDate:null,lastInteractionDate:null,lastRoute:null,recentLineIds:[],recentTopics:[],daysSinceReturn:0,lastPraiseAt:null,lastWarningAt:null,timesUserChoseTalkOverStudy:0,timesUserReturnedAfterGap:0,lastReturnCountedDate:null,preferredEvaRoomBackground:null,lastKnownMood:"neutral",recentProblemCluster:null}}function Ns(e,t={}){return{...e,...t,recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,30):e.recentLineIds,recentTopics:Array.isArray(t.recentTopics)?t.recentTopics.slice(0,20):e.recentTopics,daysSinceReturn:Number(t.daysSinceReturn||e.daysSinceReturn||0),timesUserChoseTalkOverStudy:Number(t.timesUserChoseTalkOverStudy||e.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(t.timesUserReturnedAfterGap||e.timesUserReturnedAfterGap||0),lastKnownMood:typeof t.lastKnownMood=="string"?t.lastKnownMood:e.lastKnownMood}}function cn(){return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),presenceState:"idle",mood:"neutral",emotion:"calm",currentPhrase:null,pendingQuestion:null,currentSkin:"idle",currentBackground:"bg_study_hub",currentDecoration:null,currentEffect:"none",activeSkin:"idle",activeBackground:"bg_study_hub",ownedSkins:["idle","default"],ownedBackgrounds:["bg_study_hub"],ownedEffects:[],ownedDecorations:[],lastEvent:null,lastQuestion:null,lastPhraseAt:0,lastEmotionChangeAt:0,lastQuestionAt:0,lastVisualChangeAt:0,lastPlayerActionAt:Date.now(),textRevealSkippedLineId:null,memory:Kt(),questionHistory:[],clickCount:0,eventHistory:[],recentEvents:[],cooldowns:{emotion:18e3,phrase:65e3,question:24e4,visual:72e4}}}function Uw(){const e=cn();let t=null;try{const n=localStorage.getItem(y);t=n?JSON.parse(n):null}catch(n){console.warn("Eva state reset because stored JSON is invalid.",n)}r.evaRuntime=qw(e,t||Gw()),Jw(),Ls()}function Jw(){if(!r.evaRuntime)return;r.evaRuntime.memory=Ns(Kt(),r.evaRuntime.memory||{});const e=r.evaRuntime.memory,t=ce(),n=e.lastSeenDate||null,s=n?Math.max(0,fs(n,t)):0;e.daysSinceReturn=s,s>0&&e.lastReturnCountedDate!==t&&(e.timesUserReturnedAfterGap=Number(e.timesUserReturnedAfterGap||0)+1,e.lastReturnCountedDate=t),e.lastSeenDate=t,e.lastRoute=r.route,e.preferredEvaRoomBackground=r.progress?.selectedEvaRoomBackground||e.preferredEvaRoomBackground||"bg_study_hub",e.lastKnownMood=r.evaRuntime.mood||e.lastKnownMood||"neutral"}function Gw(){const e=r.progress?.evaAutonomy||{};return{currentSkin:r.progress?.selectedEvaSprite||e.lastSprite||"idle",currentBackground:r.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",currentDecoration:r.customization?.selected?.decoration||r.customization?.selected?.frame||null,currentEffect:r.customization?.selected?.effect||"none",activeSkin:r.progress?.selectedEvaSprite||e.lastSprite||"idle",activeBackground:r.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",lastEvent:e.currentLine?.reason?{type:e.currentLine.reason,at:e.currentLine.at}:null}}function qw(e,t={}){return{...e,...t,version:3,updatedAt:new Date().toISOString(),presenceState:typeof t.presenceState=="string"?t.presenceState:e.presenceState,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion,currentPhrase:t.currentPhrase&&typeof t.currentPhrase=="object"?t.currentPhrase:e.currentPhrase,pendingQuestion:t.pendingQuestion&&typeof t.pendingQuestion=="object"?t.pendingQuestion:e.pendingQuestion,currentSkin:typeof t.currentSkin=="string"?t.currentSkin:e.currentSkin,currentBackground:typeof t.currentBackground=="string"?t.currentBackground:e.currentBackground,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:null,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,activeSkin:typeof t.activeSkin=="string"?t.activeSkin:t.currentSkin||e.activeSkin,activeBackground:typeof t.activeBackground=="string"?t.activeBackground:t.currentBackground||e.activeBackground,ownedSkins:Array.isArray(t.ownedSkins)?t.ownedSkins:e.ownedSkins,ownedBackgrounds:Array.isArray(t.ownedBackgrounds)?t.ownedBackgrounds:e.ownedBackgrounds,ownedEffects:Array.isArray(t.ownedEffects)?t.ownedEffects:e.ownedEffects,ownedDecorations:Array.isArray(t.ownedDecorations)?t.ownedDecorations:e.ownedDecorations,lastPhraseAt:Number(t.lastPhraseAt||e.lastPhraseAt||0),lastEmotionChangeAt:Number(t.lastEmotionChangeAt||e.lastEmotionChangeAt||0),lastQuestionAt:Number(t.lastQuestionAt||e.lastQuestionAt||0),lastVisualChangeAt:Number(t.lastVisualChangeAt||e.lastVisualChangeAt||0),lastPlayerActionAt:Number(t.lastPlayerActionAt||e.lastPlayerActionAt||Date.now()),textRevealSkippedLineId:typeof t.textRevealSkippedLineId=="string"?t.textRevealSkippedLineId:null,memory:Ns(e.memory||Kt(),t.memory||{}),questionHistory:Array.isArray(t.questionHistory)?t.questionHistory.slice(0,40):e.questionHistory,eventHistory:Array.isArray(t.eventHistory)?t.eventHistory.slice(0,80):e.eventHistory,recentEvents:Array.isArray(t.recentEvents)?t.recentEvents.slice(0,80):e.recentEvents,cooldowns:{...e.cooldowns,...t.cooldowns||{}},clickCount:Number(t.clickCount||e.clickCount||0)}}function Bl(){if(!r.evaRuntime)return!1;Ul(),r.evaRuntime.updatedAt=new Date().toISOString(),el=!1,ks&&("cancelIdleCallback"in window?window.cancelIdleCallback(ks):window.clearTimeout(ks),ks=0);try{return localStorage.setItem(y,JSON.stringify(r.evaRuntime)),!0}catch(e){return console.warn("Eva state could not be saved.",e),!1}}function Ls(e={}){if(!r.evaRuntime)return!1;if(e?.immediate)return Bl();if(el)return!0;el=!0;const t=()=>{ks=0,Bl()};return"requestIdleCallback"in window?ks=window.requestIdleCallback(t,{timeout:1200}):ks=window.setTimeout(t,160),!0}function zl(){Jl(),Bl(),$w()}function Ul(){if(!r.evaRuntime||!r.progress)return;const e=r.customization?.selected?.background||r.progress.shop?.equipped?.background||r.progress.selectedEvaRoomBackground||"bg_study_hub",t=Be().filter(s=>Ut(s.id));r.evaRuntime.ownedSkins=[...new Set(["idle","default",...r.progress.unlockedEvaSprites||[],...t.filter(s=>s.type==="outfit").map(s=>s.spriteId||s.id)].filter(Boolean))],r.evaRuntime.ownedBackgrounds=[...new Set(["bg_study_hub",...r.progress.unlockedBackgrounds||[],...t.filter(s=>s.type==="background").map(s=>s.id)].filter(Boolean))],r.evaRuntime.ownedEffects=[...new Set(t.filter(s=>s.type==="effect").map(s=>s.id))],r.evaRuntime.ownedDecorations=[...new Set(t.filter(s=>s.type==="decoration").map(s=>s.id))];const n=_s();r.evaRuntime.currentBackground=e,r.evaRuntime.currentSkin=n,r.evaRuntime.activeSkin=n,r.evaRuntime.activeBackground=e}function Jl(){return r.progress?(aw(),r.progress.level=Po(r.progress.xp),r.progress.updatedAt=new Date().toISOString(),Zo=!1,bs&&("cancelIdleCallback"in window?window.cancelIdleCallback(bs):window.clearTimeout(bs),bs=0),X1(r.progress)):!1}function T(e={}){if(!r.progress)return!1;if((r.route!=="review"||!r.reviewSession)&&(Pe=null),cd(),e?.immediate)return Jl();if(Zo)return!0;Zo=!0;const t=()=>{bs=0,Jl()};return"requestIdleCallback"in window?bs=window.requestIdleCallback(t,{timeout:1200}):bs=window.setTimeout(t,120),!0}function ta(e,t,{timeout:n=0,afterPaint:s=!1}={}){const a=()=>{try{const l=t?.();l&&typeof l.then=="function"&&l.catch(c=>console.warn(`[Flash Kanji] ${e} failed.`,c))}catch(l){console.warn(`[Flash Kanji] ${e} failed.`,l)}},o=()=>window.setTimeout(a,n);requestAnimationFrame(s?()=>requestAnimationFrame(o):o)}function Hw(){Ip(),ji=!0,Xe(),Rs(),Ot(),window.setTimeout(Rs,120),window.setTimeout(Rs,320)}function Me(){return typeof window>"u"?{scrollX:0,scrollY:0}:{scrollX:window.scrollX,scrollY:window.scrollY}}function je({scrollPolicy:e=re.PRESERVE,viewportSnapshot:t=null}={}){if(e===re.TOP){r.pendingFocus="__scroll-top__",Hw();return}Db(t||Me())}function Ip(){if(typeof document>"u")return;const e=document.activeElement;e&&typeof e.blur=="function"&&e.blur()}function Dt(e,t,n={}){ta(e,()=>{const s=t?.();s&&typeof s.then=="function"&&s.catch(a=>console.warn(`[Flash Kanji] ${e} failed.`,a)),T(),je({scrollPolicy:n.scrollPolicy||(n.scrollTop?re.TOP:re.PRESERVE),viewportSnapshot:n.viewportSnapshot||null})})}function Ww(e){const t=e?.dataset?.action||"",n=Vw(t,e);return n?gl.has(n)?!1:(gl.add(n),requestAnimationFrame(()=>window.setTimeout(()=>gl.delete(n),0)),!0):!0}function Vw(e,t){return e?e==="rate"?`rate:${r.activeCardId||""}:${t?.dataset?.rating||""}`:e==="rate-kana-review"?`rate-kana:${t?.dataset?.course||""}:${t?.dataset?.card||""}:${t?.dataset?.rating||""}`:e==="kana-lesson-card"?`kana-lesson-card:${t?.dataset?.course||""}:${t?.dataset?.lesson||""}:${t?.dataset?.kana||""}:${t?.dataset?.rating||""}`:e==="jlpt-lesson-answer"?`jlpt:${t?.dataset?.level||""}:${t?.dataset?.lesson||t?.dataset?.lessonId||""}:${t?.dataset?.card||t?.dataset?.id||""}`:e==="reading-review-answer"?`reading-review:${r.activeExerciseReviewLevel||""}:${r.activeExerciseReviewId||""}:${t?.dataset?.question||""}`:/^n[1-5]-(answer|srs|check-input|grammar-complete|reading-complete|listening-complete)$/.test(e)?`${e}:${t?.dataset?.id||""}:${t?.dataset?.rating||t?.dataset?.value||t?.dataset?.question||""}`:"":""}function lr({level:e=""}={}){Pe=null,Object.keys(r.progress.cards||{}).forEach(l=>J(l)),r.progress.level=Po(r.progress.xp),r.progress.totalMoonFragmentsEarned=Math.max(Number(r.progress.totalMoonFragmentsEarned||0),Number(r.progress.moonFragments||0),WN()),ge(),pr(),fa(),Nc(),Tc(),Ec(),typeof po=="function"&&po();const t=F(e)?[F(e)]:fe,n=_r(e);let s=!1;for(const l of t){const c=jo(l);dN(c,l)&&(s=!0),uN(c,l)&&(s=!0),Xw(c)}const a=Gg(t);(s||n||a)&&T(),Gi();const o=r.lessons.find(l=>Ge(l));r.activeLessonId||(r.activeLessonId=o?.id||r.lessons[0]?.id||null)}function Xw(e){e&&(e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={}),e.viewedLessons=Vs(e.viewedLessons||{}),Object.entries(e.srsKanji).forEach(([t,n])=>{e.studiedKanji[t]||(e.studiedKanji[t]=n)}),Object.entries(e.studiedKanji).forEach(([t,n])=>{e.srsKanji[t]||(e.srsKanji[t]=n)}))}function cr(e,t,n=new Date().toISOString()){if(!e||!t)return"";e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={});const s=e.studiedKanji[t],a=e.srsKanji[t],o=s||a||n;return e.studiedKanji[t]=o,e.srsKanji[t]=a||o,o}function Gi(){var o;(o=r.progress).learningPath||(o.learningPath=Rl());const e=r.progress.learningPath,t=e.completedNodes,n=e.unlockedNodes;n[_e]=!0,(Object.keys(r.progress.seenKanji||{}).length>0||Object.keys(se().studiedKanji||{}).length>0||Object.keys(se().completedLessons||{}).length>0||Object.keys(r.progress.lessonCompletions||{}).length>0)&&!t[_e]&&(t[_e]=r.progress.visits?.firstVisitDate||new Date().toISOString()),Gl().forEach((l,c)=>{se().completedLessons?.[l]&&!t[l]&&(t[l]=se().completedLessons[l]),n[l]=!0});const a=Tp();e.currentNodeId=a,n[a]=!0,e.activeSession?.nodeId&&t[e.activeSession.nodeId]&&(e.activeSession=null)}function Gl(){const e=(r.n5Textbook?.items||[]).map(t=>String(t.id||"")).filter(Boolean);return e.length?e:Ev.filter(t=>/^n5-lesson-\d+$/i.test(t))}function Tp(){const e=r.progress?.learningPath||Rl(),t=[_e,...Gl(),nr];return t.find(n=>!e.completedNodes?.[n])||t[t.length-1]||_e}function ql(){return r.n5Textbook?.items?.length?Promise.resolve(r.n5Textbook):Yr||(Yr=Ee(O.n5Lessons).then(e=>(r.n5Textbook=Sl(e),Gi(),(r.route==="learn"||r.route==="home")&&P(),r.n5Textbook)).catch(e=>{throw Yr=null,e}),Yr)}function Qw(e){const t=String(e||"");if(!t)return Promise.resolve(null);if(r.learningPathLessonPayloads[t])return Promise.resolve(r.learningPathLessonPayloads[t]);const n=Mv[t];if(!n){const a=da(t);return a&&(r.learningPathLessonPayloads[t]=a),Promise.resolve(a)}if(xi.has(t))return xi.get(t);const s=Ee(n).then(a=>(r.learningPathLessonPayloads[t]=a||da(t),r.route==="learn"&&r.activeLearnNodeId===t&&P(),r.learningPathLessonPayloads[t])).catch(a=>{const o=da(t);if(o)return r.learningPathLessonPayloads[t]=o,r.route==="learn"&&r.activeLearnNodeId===t&&P(),o;throw a}).finally(()=>{xi.delete(t)});return xi.set(t,s),s}function Jn(){return Gi(),r.progress.learningPath}function Hl(){const e=Jn().activeSession;return!e?.nodeId||Jn().completedNodes?.[e.nodeId]?null:e}function dr(){const e=Hl();return e?.nodeId?e.nodeId:Jn().currentNodeId||Tp()||_e}function Rp(e){const t=As(e);return t?b(t.title):Yw(e)}function Yw(e){const t=String(e||"");if(t===_e)return p()==="ru"?"Введение в маршрут":"Route introduction";if(t===nr)return p()==="ru"?"Контрольная точка N5":"N5 checkpoint";const n=qt(t);if(n)return b(n.title);const s=t.match(/n5-lesson-(\d+)/i);return s?p()==="ru"?`N5 · Урок ${s[1]}`:`N5 · Lesson ${s[1]}`:t}function Zw(e){const t=As(e);return t?b(t.summary):""}function pe(){return p()==="ru"?{route:"Маршрут обучения",intro:"Введение",checkpoint:"Контрольная точка",review:"Повторение",available:"доступно",current:"сейчас",completed:"завершено",locked:"закрыто",due:"нужно повторить",minutes:"мин",lessons:"уроки",start:"Начать учиться",resume:"Продолжить урок",next:"Следующий урок",reviewAction:"Повторить",reviewOld:"Повторить старое",continue:"Дальше",finish:"Завершить",backToMap:"К маршруту",openTextbook:"Открыть учебник",openCheckpoint:"К тесту",score:"Результат",mistakes:"Ошибки",retryMistakes:"Повторить ошибки",continuePath:"Продолжить путь",ready:"Готово",introTitle:"Как тут учиться",introSummary:"Кандзи идут по цепочке: знак -> смысл -> чтение -> пример -> повторение.",introBody:"Сначала берём один маленький блок, потом отправляем его в повторение. Не нужно держать всё в голове за раз.",introBridge:"Если что-то тяжело, это не провал. Значит, карточка просто раньше вернётся в повторение.",introQuestion:"Куда отправляются карточки после урока?",introQuestionHint:"Выбери правильный путь.",loading:"Подгружаю маршрут...",empty:"Маршрут скоро появится.",nextLesson:"Следующий шаг",lessonTrack:"Текущий уровень",reviewQueue:"К повторению",streak:"Стрик",level:"Уровень",xp:"XP",mapHint:"Сначала идём по текущему уровню. Остальные уровни остаются в учебниках.",step:"Шаг",finishHint:"После урока карточки попадут в повторение.",scoreHint:"Вернёмся к ошибкам или двинемся дальше."}:{route:"Learning path",intro:"Intro",checkpoint:"Checkpoint",review:"Review",available:"available",current:"current",completed:"done",locked:"locked",due:"review due",minutes:"min",lessons:"lessons",start:"Start learning",resume:"Resume lesson",next:"Next lesson",reviewAction:"Review",reviewOld:"Review old material",continue:"Next",finish:"Finish",backToMap:"Back to path",openTextbook:"Open textbook",openCheckpoint:"Open test",score:"Score",mistakes:"Mistakes",retryMistakes:"Retry mistakes",continuePath:"Continue path",ready:"Done",introTitle:"How this route works",introSummary:"Kanji move through a chain: sign -> meaning -> reading -> example -> review.",introBody:"Take one small block first, then send it into review. You do not need to hold everything at once.",introBridge:"If something feels hard, that is not failure. It only means the card should return sooner.",introQuestion:"Where do cards go after the lesson?",introQuestionHint:"Choose the correct path.",loading:"Loading the path...",empty:"The path will appear soon.",nextLesson:"Next step",lessonTrack:"Current level",reviewQueue:"Due now",streak:"Streak",level:"Level",xp:"XP",mapHint:"Stay on the current level here. The rest remains in textbooks.",step:"Step",finishHint:"After the lesson the cards move to review.",scoreHint:"Retry mistakes or keep moving."}}function eb(){const e=pe();return{id:_e,type:"lesson",level:"INTRO",title:{ru:e.introTitle,en:e.introTitle},summary:{ru:e.introSummary,en:e.introSummary},durationMinutes:3}}function tb(){const e=Qe();return pe(),{id:tr,type:"review",level:"SRS",title:{ru:`Повторение: ${e}`,en:`Review: ${e}`},summary:{ru:e>0?"Карточки, которые уже нужно вернуть в память.":"Очередь пуста, можно идти дальше.",en:e>0?"Cards that should return now.":"Queue is empty, move on."},durationMinutes:Math.max(2,Math.min(12,e))}}function nb(){return{id:nr,type:"checkpoint",level:"N5",title:{ru:"Контрольная точка N5",en:"N5 checkpoint"},summary:{ru:"Повторение блока и переход к финальному тесту уровня.",en:"Review the block and move into the level final test."},durationMinutes:12}}function sb(){const e=Number(r.n5Meta?.kanjiPerLesson||r.n5Meta?.cardsPerLesson||8);return Gl().map((t,n)=>({id:t,type:"lesson",level:"N5",title:{ru:`N5 · Урок ${n+1}`,en:`N5 · Lesson ${n+1}`},summary:n===0?{ru:`Первый интерактивный урок: ${e} знаков, чтения, примеры и мини-практика.`,en:`First interactive lesson: ${e} signs, readings, examples, and mini practice.`}:{ru:"Откроем карточки урока прямо из учебника.",en:"Open this lesson directly from the textbook."},durationMinutes:n===0?12:10}))}function _p(){const e=eb(),t=tb(),n=nb(),s=r.n5Textbook?.items?.length?r.n5Textbook.items.map((o,l)=>({id:o.id,type:"lesson",level:"N5",title:o.title,summary:o.goal||o.theme||{ru:"",en:""},durationMinutes:Number(o.durationMinutes||o.estimatedMinutes||10)})):sb(),a=[e];return Qe()>0&&a.push(t),[...a,...s,n]}function As(e){const t=String(e||"");return t&&_p().find(n=>n.id===t)||null}function Pp(e){if(!e)return"locked";if(e.id===tr)return Qe()>0?"review":"available";const t=Jn();return t.completedNodes?.[e.id]?"completed":dr()===e.id?"current":t.unlockedNodes?.[e.id]?e.type==="checkpoint"?"checkpoint":"available":"locked"}function rb(e){const t=pe();return e==="completed"?t.completed:e==="current"?t.current:e==="available"?t.available:e==="review"?t.due:e==="checkpoint"?t.checkpoint:t.locked}function Ep(){const e=Jn(),t=Qe(),n=Hl(),s=dr(),a=As(s),o=Number(Pn().reviews||0)>=Number(r.progress.settings.dailyGoal||0);return!e.completedNodes?.[_e]&&!n?{kind:"node",label:pe().start,nodeId:_e}:n?.nodeId?{kind:"node",label:pe().resume,nodeId:n.nodeId}:t>0?{kind:"review",label:`${pe().reviewAction}: ${t}`,nodeId:tr}:o&&a?{kind:"node",label:pe().next,nodeId:a.id}:a?{kind:"node",label:e.completedNodes?.[_e]?pe().resume:pe().start,nodeId:a.id}:{kind:"review",label:pe().reviewOld,nodeId:tr}}function ab(){const e=pe(),t=_L(),n=t?.level||bn(),s=t?.lessonId||Nd(n),a=Yt(n),o=Lh(n);return{label:!!(t?.lessonId||a&&(Object.keys(a.completedLessons||{}).length>0||a.currentLessonId&&a.currentLessonId!==o))?e.resume:e.start,level:n,lessonId:s}}function Mp(){return p()==="ru"?{sectionEyebrow:"Японские азбуки",sectionTitle:"Начни с каны",sectionHint:"Хирагана и катакана идут рядом с JLPT, но прогресс и статистика хранятся отдельно.",start:"Начать",continue:"Продолжить",review:"Повторить",lessons:"уроков",passed:"пройдено",due:"к повторению",mastered:"освоено",characters:"знаков",active:"выбранный курс",hiragana:"Хирагана",katakana:"Катакана"}:{sectionEyebrow:"Japanese syllabaries",sectionTitle:"Start with kana",sectionHint:"Hiragana and katakana live next to JLPT, while progress and stats stay separate.",start:"Start",continue:"Continue",review:"Review",lessons:"lessons",passed:"passed",due:"due",mastered:"mastered",characters:"characters",active:"selected course",hiragana:"Hiragana",katakana:"Katakana"}}function ib(e){return e?!!(e.currentRoute||Object.keys(e.lessons||{}).length||Object.keys(e.practices||{}).length||Object.keys(e.review||{}).length||Object.keys(e.writing||{}).length||e.finalTest?.completed):!1}function ob(e){if(!ve(e))return 0;const t=Date.now(),n=Jt(e),s=Object.entries(n).filter(([a])=>{const o=fr(a,e);return o?.slug===e&&ga(e,o.kana)}).map(([a,o])=>({cardId:a,...o}));return eu(s,t).length}function lb(e){if(!ve(e))return 0;const t=Jt(e);return(vn(e)?.base_characters||[]).filter(n=>t[In(e,n.kana)]?.state==="Mastered").length}function cb(e){if(!ve(e))return 0;const t=Jt(e);return(vn(e)?.base_characters||[]).filter(n=>{const s=t[In(e,n.kana)];return s&&(s.state!=="New"||Number(s.reviewCount||0)>0)}).length}function db(){const e=Mp();return(r.kanaCatalog?.courses||[]).map(t=>{const n=String(t.slug||"").toLowerCase(),s=vn(n),a=yt(n),o=s?.lessons?.[0]?.id||"lesson-1",l=a.currentRoute||o,c=Math.max(Number(s?.lessons?.length||0),Number(t.lesson_count||0)),d=s?.lessons?.length?s.lessons.filter(L=>co(n,L).passed).length:Object.values(a.lessons||{}).filter(L=>L?.passed).length,u=Math.max(Number(s?.base_characters?.length||0),Number(t.base_character_count||0)),m=cb(n),h=ob(n),f=E(d,Math.max(1,c)),S=E(m,Math.max(1,u)),C=ib(a),x=n==="katakana"?e.katakana:e.hiragana;return{slug:n,title:x,subtitle:t.title||x,nativeTitle:t.native_title||(n==="katakana"?"カタカナ":"ひらがな"),description:t.description||"",currentRoute:l,started:C,dueCount:h,completedLessons:d,totalLessons:c,totalCharacters:u,masteredCount:lb(n),progressPercent:Math.max(f,S),updatedAt:a.updatedAt||null}}).filter(t=>ve(t.slug))}function ub(e){const t=e.filter(n=>n.started||n.updatedAt);return t.length&&t.sort((n,s)=>(Date.parse(s.updatedAt||"")||0)-(Date.parse(n.updatedAt||"")||0))[0]?.slug||""}function pb(e,t,n){const s=e.slug===t,a=e.started?n.continue:n.start,o=`#textbooks/${g(e.slug)}/${g(e.currentRoute||"lesson-1")}`,l=e.totalLessons>0?`${e.completedLessons}/${e.totalLessons} ${n.lessons}`:`0 ${n.lessons}`,c=e.totalCharacters>0?`${e.masteredCount}/${e.totalCharacters} ${n.mastered}`:`${e.masteredCount} ${n.mastered}`;return`
      <article class="home-kana-card${s?" is-active":""}" data-kana-course="${g(e.slug)}">
        <div class="home-kana-card-top">
          <span class="home-kana-symbol" lang="ja" aria-hidden="true">${i(e.nativeTitle)}</span>
          <div>
            <div class="tag-row compact-tags">
              ${s?`<span class="pill">${i(n.active)}</span>`:""}
              <span class="pill">${i(`${e.dueCount} ${n.due}`)}</span>
            </div>
            <h3>${i(e.title)}</h3>
            <p>${i(e.subtitle)}</p>
          </div>
        </div>
        <div class="home-kana-stats">
          <span>${i(l)}</span>
          <span>${i(c)}</span>
          <strong>${i(`${e.progressPercent}%`)}</strong>
        </div>
        <div class="progress mini" aria-hidden="true"><span style="width:${e.progressPercent}%"></span></div>
        <div class="home-kana-actions">
          ${e.dueCount>0?`<button class="btn primary" type="button" data-action="home-review">${i(n.review)} · ${i(e.dueCount)}</button><a class="btn ghost" href="${o}">${i(a)}</a>`:`<a class="btn primary" href="${o}">${i(a)}</a><button class="btn ghost" type="button" disabled aria-disabled="true">${i(n.review)} · 0</button>`}
        </div>
      </article>
    `}function gb(){const e=db();if(!e.length)return"";const t=Mp(),n=ub(e);return`
      <article class="study-card home-kana-section" data-section="home-kana-courses">
        <div class="section-head">
          <div>
            <span class="eyebrow accent">${i(t.sectionEyebrow)}</span>
            <h2>${i(t.sectionTitle)}</h2>
            <p>${i(t.sectionHint)}</p>
          </div>
        </div>
        <div class="home-kana-grid">
          ${e.map(s=>pb(s,n,t)).join("")}
        </div>
      </article>
    `}function mb(){const e=Kn(),t=Qe(),n=pe();return[{label:n.streak,value:r.progress.streak.current},{label:n.level,value:r.progress.level},{label:n.xp,value:`${e.current}/${e.next}`},{label:n.reviewQueue,value:t}]}function fb(e){return`
      <article class="metric home-summary-card">
        <span>${i(e.label)}</span>
        <strong>${i(e.value)}</strong>
      </article>
    `}function hb(){const e=p()==="ru",t=vc();return fe.map(n=>{const s=It(n),a=$t(n),o=Yt(n),l=Kp(n,a),c=Math.max(Number(s?.lessonCount||0),a.length||0),d=Tt(n),u=vb(n,a,s,o,l),m=!u&&t===n,h=b(s?.displayTitle||s?.title||{ru:`Учебник ${n}`,en:`Textbook ${n}`}),f=c>0?`${l}/${c} ${e?"уроков":"lessons"}`:e?"Без уроков":"No lessons",S=u?e?"Пройдено":"Completed":m?`${f} · ${e?"сейчас":"now"}`:d?f:Mn(n);return{level:n,title:h,note:S,status:u?"done":m?"current":d?"open":"locked"}})}function Kp(e,t=$t(e)){const n=Yt(e),s=n?.completedLessons||{};if(!n||!s||typeof s!="object")return 0;const a=new Set;return t.forEach(o=>{o?.id&&Qn(e,o).some(l=>!!s[l])&&a.add(o.id)}),a.size?a.size:Object.values(s).filter(Boolean).length}function vb(e,t=$t(e),n=It(e),s=Yt(e),a=Kp(e,t)){if(!s)return!1;if(s.finalTest?.passed)return!0;const o=Math.max(Number(n?.lessonCount||0),t.length||0);return o>0&&a>=o}function wb(e){const t=`data-action="route" data-route="textbooks" data-subroute="${g(e.level)}"`;return`
      <button class="home-route-step is-${g(e.status)}" type="button" ${t} aria-label="${g((p()==="ru"?"Открыть учебник":"Open textbook")+` ${e.level} — ${e.title}`)}">
        <span class="home-route-step-icon home-route-step-icon--level" aria-hidden="true">${i(e.level)}</span>
        <strong>${i(e.title)}</strong>
        <small>${i(e.note)}</small>
      </button>
    `}function bb(e){return`
      <button class="home-task-item" type="button" ${e.action==="route"?`data-action="route" data-route="${g(e.route||"")}"`:e.action==="home-lesson"?`data-action="home-lesson" data-level="${g(e.level||"")}" data-lesson-id="${g(e.lessonId||"")}"`:`data-action="${g(e.action)}"`}>
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.detail)}</p>
        </span>
        <span class="home-task-item-count" aria-hidden="true">${i(String(e.count??0))}</span>
      </button>
    `}function Dp(){const e=dr();return{title:Rp(e),summary:Zw(e)}}function J(e){const t=String(e);if(r.progress.cards[t]||(r.progress.cards[t]={state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]}),yu.has(r.progress.cards[t]))return r.progress.cards[t];const n=ot(r.progress.cards[t]);return n.successRate=Dh(n),Number.isFinite(Number(n.srsStep))?n.srsStep=de(Math.trunc(Number(n.srsStep)),-1,63):n.srsStep=Vl(n),r.progress.cards[t]=n,yu.add(n),n}function na(e,t="seen"){if(!r.progress||!e?.id)return!1;ge();const n=new Date().toISOString();let s=!1;const a=String(e.id);return r.progress.seenCards[a]||(r.progress.seenCards[a]=n,s=!0),e.kanji&&!r.progress.seenKanji[e.kanji]&&(r.progress.seenKanji[e.kanji]={at:n,cardId:a,source:t,jlpt:e.jlpt||""},s=!0),s}function sa(e,t="seen"){na(e,t)&&T()}const Ft=[5/1440,1/24,12/24,1,2,4],Wl=1;function Vl(e){const t=Number(e?.intervalDays||0);if(!(t>0))return-1;for(let s=0;s<Ft.length;s+=1)if(t<=Ft[s]*1.08)return s;const n=Ft[Ft.length-1];return Ft.length-1+Math.max(1,Math.round(Math.log2(t/n)))}function kb(e){const t=Math.trunc(e);return t<0?0:t<Ft.length?Ft[t]||Ft[0]:Ft[Ft.length-1]*2**(t-(Ft.length-1))}function yb(e,t,n=Wl){const s=Array.isArray(e)?e.slice():[],a=Array.isArray(t)?t.slice():[],o=[],l=Math.max(1,Math.trunc(Number(n)||Wl));let c=0,d=0,u=0;for(;c<s.length||d<a.length;){if(u>=l&&d<a.length){o.push(a[d++]),u=0;continue}if(c<s.length){o.push(s[c++]),u+=1;continue}if(d<a.length){o.push(a[d++]),u=0;continue}break}return o}function $b(e,t){const n=Vl(e);return t==="again"?0:t==="hard"?n<1?1:n:t==="easy"?n<0?2:n+2:n<0?0:n+1}function jb(e){const t=Math.max(1,Math.round(e*24*60));if(t<60)return p()==="ru"?`${t} мин.`:`${t} min`;const n=Math.round(t/60);if(n<24)return p()==="ru"?`${n} ?.`:`${n} h`;const s=Math.round(n/24);return p()==="ru"?`${s} ??.`:`${s} d`}function qi(e){const t=e.state==="Learning"?3:e.state==="Review"?2:e.state==="Mastered"?1:0,n=Number(e.lapses||0),s=Number(e.wrong||0),a=Number(e.correct||0);return t+n*4+s*2-a*.05}function dn(e,t,n="jlpt_lesson"){if(!t)return!1;const a=Xl(e,t).reduce((o,l)=>na(l,n)||o,!1);return a&&T(),a}function Xl(e,t){const n=String(e||"").toUpperCase();return n==="N5"?gn(t):n==="N4"?kr(t):n==="N3"?$r(t):n==="N2"?Sr(t):(t?.kanji||[]).map(s=>r.cards.find(a=>a.kanji===s&&String(a.jlpt||"").toUpperCase()===n)).filter(Boolean)}function Fp(e){const t=r.progress?.cards?.[String(e?.id||"")];return t?t.state&&t.state!=="New"?!0:!!(t.lastReviewedAt||t.lastReviewedAt||Number(t.reviewCount||0)>0||Number(t.correct||0)>0||Number(t.wrong||0)>0||Number(t.lapses||0)>0):!1}function Op(){return ge(),r.progress.evaRoomQuiz}function Bp(){const e=[r.cards||[],typeof Ht=="function"?Ht():[],typeof nt=="function"?nt():[],typeof st=="function"?st():[],typeof rt=="function"?rt():[]];return zp(e.flat().filter(Boolean))}function Sb(){if(!r.progress)return[];ge();const e=new Set(Object.keys(r.progress.seenCards||{})),t=new Set(Object.keys(r.progress.seenKanji||{})),n=new Set(Object.keys(r.progress.lessonCompletions||{})),s=Cb(),a=Bp().filter(o=>{if(!o?.id||!o.kanji||!Ye(o,"ru")||!Ye(o,"en"))return!1;const l=String(o.jlpt||"").toUpperCase();return e.has(String(o.id))||t.has(o.kanji)||Fp(o)||n.has(o.lessonId)||s.has(`${l}:${o.kanji}`)||s.has(o.kanji)});return zp(a)}function Cb(){const e=new Set,t=(n,s)=>{if(!s)return;const a=String(n||"").toUpperCase();e.add(String(s)),a&&e.add(`${a}:${s}`)};return Ql().forEach(n=>{const s=n.course();Object.keys(s.studiedKanji||{}).forEach(a=>t(n.level,a)),Object.keys(s.completedLessons||{}).forEach(a=>{(n.lessonById(a)?.kanji||[]).forEach(l=>t(n.level,l))})}),e}function Ql(){return[{level:"N5",course:se,lessonById:qt,markStudied:br,markDifficult:ka},{level:"N4",course:Q,lessonById:Zn,markStudied:yr,markDifficult:ja},{level:"N3",course:V,lessonById:ts,markStudied:jr,markDifficult:Ca},{level:"N2",course:X,lessonById:ss,markStudied:Cr,markDifficult:Na}]}function zp(e){const t=new Set;return e.filter(n=>{const s=`${n.kanji}:${Ye(n,"ru")}:${Ye(n,"en")}`;return t.has(s)?!1:(t.add(s),!0)})}function xb(e){!(e instanceof HTMLElement)||e.hasAttribute("disabled")||(e.classList.add("is-action-pressed"),window.requestAnimationFrame(()=>{window.setTimeout(()=>e.classList.remove("is-action-pressed"),120)}))}function Nb(e){if(e.target.classList?.contains("detail-backdrop")){D("menu_close"),r.detailCardId=null,ue();return}if(e.target.classList?.contains("final-test-backdrop")){r.finalTestModal=null,r.finalTestBusy=!1,ue();return}if(e.target.classList?.contains("changelog-backdrop")){vl();return}const t=e.target.closest(".nav-popover, .bottom-nav");if(r.navMenu&&!t&&!e.target.closest("[data-action]")){r.navMenu=null,ue();return}const n=e.target.closest("[data-action]");if(!n)return;const s=n.dataset.action;if(s==="review-next-batch"){r.reviewSession=null,Pe=null,r.activeCardId=null,os(),th(),je({scrollPolicy:re.TOP});return}const a=n.dataset.id;if(xb(n),!!Ww(n)&&!(["eva-click","eva-autonomy-next","eva-question-answer"].includes(s)&&Date.now()-Lu<280)){if(s&&s.endsWith("-complete-lesson")){const l=`${s.split("-")[0]}:${a||""}`;if(ye.has(l)){n&&(n.disabled=!0,n.textContent=p()==="ru"?"Урок завершён":"Lesson completed");return}}if(Yl(s),requestAnimationFrame(()=>window.setTimeout(()=>Ib(s,n),0)),s==="route"){const o=n.dataset.route;if(n.closest(".bottom-nav")&&Xi(o)){rk(o);return}r.navMenu=null,o==="writing"&&r.detailCardId&&(r.activeCardId=r.detailCardId),Gn(o,n.dataset.focus||null,n.dataset.subroute||null,{afterFeedback:!0})}if(s==="nav-menu-route"){const o=n.dataset.route;r.navMenu=null,o==="writing"&&r.detailCardId&&(r.activeCardId=r.detailCardId),Gn(o,n.dataset.focus||null,n.dataset.subroute||null,{afterFeedback:!0})}if(s==="share-page"&&Ih(n.dataset.shareSection||r.route,NL(n)).catch(()=>G(p()==="ru"?"Не удалось поделиться":"Share failed")),s==="toggle-header-socials"&&Eh(!Rd()),s==="notification-center"){if(r.notificationPromptVisible){Oh();return}(r.notificationPrompt?.docked||Bo("header"))&&zo("header");return}if(s==="repeat-onboarding"){rc({force:!0});return}if(s==="onboarding-next"){sg();return}if(s==="onboarding-prev"){rg();return}if(s==="onboarding-continue"){tk();return}if(s==="onboarding-close"||s==="onboarding-skip"){la({completed:s==="onboarding-close"});return}if(s==="dismiss-mascot-speech"){If(n.dataset.speechKey||"");return}if(s==="contact-email"&&(r.navMenu=null,r.contactModal=!0,ue()),s==="copy-contact-email"&&_h(St).then(o=>{G(o?p()==="ru"?"Email скопирован":"Email copied":p()==="ru"?"Не удалось скопировать email":"Could not copy email")}),s==="close-contact-modal"&&(r.contactModal=!1,ue()),s==="close-changelog"){vl();return}if(s==="close-pwa-install-help"&&(r.pwaInstallHelpVisible=!1,ue()),s==="close-nav-menu"&&(r.navMenu=null,ue()),s==="close-final-test-modal"&&(r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=null,ue()),s==="final-test-focus-missing"){const o=n.dataset.focus||r.finalTestModal?.focusSelector||null;r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=o,ue()}if(s==="final-test-force-submit"){const o=String(n.dataset.level||r.finalTestModal?.level||"N5").toUpperCase();o==="N4"?$m(!0):o==="N3"?Pm(!0):o==="N2"?qm(!0):o==="N1"?sf(!0):dm(!0)}if(s==="final-test-next-level"){const o=F(n.dataset.nextLevel||""),l=String(n.dataset.nextLesson||"");if(!o||!l)return;r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=null,ra(o,l);return}if(s==="scroll-page-edge"&&((n.dataset.direction||ac())==="up"?Rs():nk()),s==="theme"&&QL(),s==="language"&&YL(),s==="sound"&&Ph(),s==="toggle-ux-sound"&&ZL(),s==="export"&&xL(),s==="apk-download"&&me("apk_download",{route:"download",source:n.dataset.source||"primary"}),s==="import"&&Au.click(),s==="reset"&&XL(),s==="share-achievement"&&UL().catch(()=>G(_("shareFallback"))),s==="pwa-install"&&SA(),s==="pwa-later"&&Bd(),s==="notification-allow"&&AA(),s==="notification-later"&&Uo(),s==="mascot-click"&&mN(n.dataset.character),s==="eva-click"&&Kf(),s==="eva-dialogue-skip"&&Ab(n),s==="dictionary-favorites-tab"&&(r.filters.favorites=n.dataset.favorites||"all",r.dictionaryVisibleCount=Gr,ue()),s==="set-learn-jlpt"){r.activeLearnJlpt=String(n.dataset.jlpt||"all").toUpperCase();const o=hc();_g(o),r.activeCardId=null,ue()}if(s==="dictionary-load-more"&&(r.dictionaryVisibleCount+=Pv,ue()),s==="toggle-favorite"&&YN(a),s==="eva-room-choice"&&by(n),s==="eva-question-answer"&&dy(n),s==="eva-room-reset"&&yy(),s==="toggle-eva-autonomy"&&Iy(),s==="cycle-eva-autonomy"&&Ty(),s==="eva-autonomy-room-mode"&&Ry(),s==="eva-autonomy-outfit-mode"&&_y(),s==="eva-autonomy-next"&&Tg(),s==="eva-autonomy-clear"&&Py(),s==="eva-room-shop-open"&&(r.evaRoomShopOpen=!0,we("shop_opened"),ue()),s==="eva-room-shop-close"&&(r.evaRoomShopOpen=!1,ue()),s==="eva-bg-buy"&&$y(a),s==="eva-bg-select"&&jy(a),s==="eva-sprite-buy"&&Sy(a),s==="eva-sprite-select"&&Cy(a),s==="shop-category"&&(r.shopFilters.category=n.dataset.category||"all",ue()),s==="shop-filter"&&(r.shopFilters.view=n.dataset.filter||"all",ue()),s==="shop-sort"&&(r.shopFilters.sort=n.dataset.sort||"featured",ue()),s==="shop-buy"&&oo(a),s==="shop-select"&&lo(a),s==="shop-clear-effect"&&Ig(a),s==="shop-clear-item"&&Ly(a),s==="clear-writing"&&CN(),s==="undo-writing"&&xN(),s==="check-writing"&&NN(!0),s==="replay-writing"&&zf(),s==="play-writing-step"&&Uf(),s==="writing-step-prev"&&Jf(-1),s==="writing-step-next"&&Jf(1),s==="select-writing-step"&&Gf(Number(n.dataset.index||0),!0),s==="insert-sentence-tile"&&GC(Number(n.dataset.index)),s==="undo-sentence-tile"&&qC(),s==="clear-sentence"&&HC(),s==="check-sentence"&&WC(),s==="next-sentence"&&XC(),s==="reading-review-tile"&&dj(Number(n.dataset.index)),s==="reading-review-undo"&&uj(),s==="reading-review-clear"&&pj(),s==="reading-review-check"&&im(),s==="reading-review-answer"&&cj(n),s==="toggle-reading-translation"&&gj(),s==="add-custom-sentence"&&IC(),s==="edit-custom-sentence"&&RC(n.dataset.id),s==="delete-custom-sentence"&&_C(n.dataset.id),s==="cancel-custom-sentence-edit"&&PC(),s==="insert-jlpt-tile"&&yL(Number(n.dataset.index)),s==="undo-jlpt-tile"&&$L(),s==="clear-jlpt-practice"&&jL(),s==="check-jlpt-practice"&&SL(),s==="next-jlpt-practice"&&CL(),s==="kana-submit-exercise"&&k$(n),s==="kana-writing-done"&&y$(n.dataset.course||"",n.dataset.lesson||""),s==="kana-srs"&&S$(n.dataset.course||"",n.dataset.card||"",n.dataset.rating||"remember"),s==="kana-lesson-card"&&j$(n.dataset.course||"",n.dataset.lesson||"",n.dataset.kana||"",n.dataset.rating||"remember"),s==="kana-lesson-card-reset"&&$$(n.dataset.course||"",n.dataset.lesson||""),s==="kana-toggle-romaji"&&C$(),s==="play-kana-tts"&&x$(n.dataset.text||""),s==="kana-download-pdf"&&me("kana_pdf_download",{course:n.dataset.course||""}),s==="retry-jlpt-course-data"&&iw(n.dataset.level||r.activeTextbookLevel||""),s==="n5-open-lesson"&&bj(a),s==="n5-overview"&&kj(),s==="n5-review"&&yj(n.dataset.mode||null),s==="n5-answer"&&mj(n),s==="n5-check-input"&&fj(a),s==="n5-srs"&&lm(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n5-writing-done"&&vj(a),s==="n5-complete-lesson"&&wj(a),s==="jlpt-lesson-answer"&&hj(n.dataset.level||"",n.dataset.lesson||n.dataset.lessonId||"",n.dataset.card||a,String(n.dataset.value||"")==="remember"),s==="n5-final-answer"&&Sj(n),s==="n5-final-submit"&&dm(),s==="n5-final-reset"&&Cj(),s==="n4-open-lesson"&&Qj(a),s==="n4-overview"&&Yj(),s==="n4-review"&&Zj(n.dataset.mode||null),s==="n4-kanji"&&eS(),s==="n4-grammar"&&tS(),s==="n4-reading"&&nS(),s==="n4-listening"&&sS(),s==="n4-final"&&rS(),s==="n4-answer"&&Jj(n),s==="n4-check-input"&&Gj(a),s==="n4-srs"&&bm(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n4-writing-done"&&qj(a),s==="n4-complete-lesson"&&Hj(a),s==="n4-grammar-complete"&&Wj(a,n.dataset.value||""),s==="n4-reading-complete"&&Vj(a,n.dataset.question||"",n.dataset.value||""),s==="n4-listening-complete"&&Xj(a,n.dataset.question||"",n.dataset.value||""),s==="n4-final-answer"&&oS(n),s==="n4-final-submit"&&$m(),s==="n4-final-reset"&&lS(),s==="n3-open-lesson"&&ES(a),s==="n3-overview"&&MS(),s==="n3-review"&&KS(n.dataset.mode||null),s==="n3-kanji"&&DS(),s==="n3-grammar"&&FS(),s==="n3-reading"&&OS(),s==="n3-listening"&&BS(),s==="n3-final"&&zS(),s==="n3-answer"&&LS(n),s==="n3-check-input"&&AS(a),s==="n3-srs"&&Tm(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n3-writing-done"&&IS(a),s==="n3-complete-lesson"&&TS(a),s==="n3-grammar-complete"&&RS(a,n.dataset.value||""),s==="n3-reading-complete"&&_S(a,n.dataset.question||"",n.dataset.value||""),s==="n3-listening-complete"&&PS(a,n.dataset.question||"",n.dataset.value||""),s==="n3-final-answer"&&GS(n),s==="n3-final-submit"&&Pm(),s==="n3-final-reset"&&qS(),s==="n2-open-lesson"&&b0(a),s==="n2-overview"&&k0(),s==="n2-review"&&y0(n.dataset.mode||null),s==="n2-kanji"&&$0(),s==="n2-grammar"&&j0(),s==="n2-reading"&&S0(),s==="n2-listening"&&C0(),s==="n2-final"&&x0(),s==="n2-answer"&&p0(n),s==="n2-check-input"&&g0(a),s==="n2-srs"&&Um(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n2-writing-done"&&m0(a),s==="n2-complete-lesson"&&f0(a),s==="n2-grammar-complete"&&h0(a,n.dataset.value||""),s==="n2-reading-complete"&&v0(a,n.dataset.question||"",n.dataset.value||""),s==="n2-listening-complete"&&w0(a,n.dataset.question||"",n.dataset.value||""),s==="n2-final-answer"&&A0(n),s==="n2-final-submit"&&qm(),s==="n2-final-reset"&&I0(),s==="n1-open-lesson"&&rC(a),s==="n1-overview"&&aC(),s==="n1-review"&&iC(n.dataset.mode||null),s==="n1-kanji"&&oC(),s==="n1-grammar"&&lC(),s==="n1-reading"&&cC(),s==="n1-listening"&&dC(),s==="n1-final"&&uC(),s==="n1-answer"&&Q0(n),s==="n1-check-input"&&Y0(a),s==="n1-srs"&&ef(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n1-writing-done"&&Z0(a),s==="n1-complete-lesson"&&eC(a),s==="n1-grammar-complete"&&tC(a,n.dataset.value||""),s==="n1-reading-complete"&&nC(a,n.dataset.question||"",n.dataset.value||""),s==="n1-listening-complete"&&sC(a,n.dataset.question||"",n.dataset.value||""),s==="n1-final-answer"&&mC(n),s==="n1-final-submit"&&sf(),s==="n1-final-reset"&&fC(),s==="review-exercise-next"){const o=Us(),l=o&&r.reviewExerciseResults?.[o.exerciseId];if(!o||!l||o.source==="reading"&&!l.completed)return;const c=o.source==="reading"?_n(o.exercise):jo(o.level).exerciseSrs[o.exerciseId];dd(o.key)&&ud("exercise",l.correct?"remember":"forgot",{label:o.exerciseId,level:o.level,dueAt:c?.dueAt,state:c?.state}),os(),je({scrollPolicy:re.TOP});return}if(s==="play-kanji-audio"){const o=oe(a)||oe(r.activeCardId);o&&(n.dataset.ttsText||n.dataset.ttsKind?jh(o,{text:n.dataset.ttsText||"",kind:n.dataset.ttsKind||"cycle",label:n.dataset.ttsLabel||"",fallback:(l={})=>$h(o,l)}):yh(o))}if(s==="open-jlpt-lesson"){const o=String(n.dataset.jlpt||"").toUpperCase();if(En(o)){if(wn("jlpt-level",{level:o}),!Tt(o)){r.activeTextbookLevel=o,r.activeJlptLesson=o,Gn("textbooks",null,o),G(Mn(o));return}r.activeJlptLesson=o,Gn("jlpt-lesson",null,o)}}if(s==="open-jlpt-lesson-start"&&(wn("jlpt-start",{level:n.dataset.jlpt||bn()}),ra(n.dataset.jlpt||bn())),s==="social-link"&&me(`social_${String(n.dataset.network||"").toLowerCase()}_opened`,{route:r.route,source:n.dataset.network||"social"}),s==="play-audio"&&pL(n.dataset.audio,n.dataset.label),s==="close-reward"){const o=Me();r.rewardModal=r.rewardQueue.shift()||null,r.rewardModal&&Ff(r.rewardModal),je({scrollPolicy:re.PRESERVE,viewportSnapshot:o})}if(s==="set-goal"&&(r.progress.settings.dailyGoal=Number(n.dataset.goal),T(),G(`${_("dailyGoal")}: ${r.progress.settings.dailyGoal}`),P()),s==="buy-shop"&&oo(a),s==="start-due"&&(Gn("textbooks"),ta("start-due-toast",()=>{Qe()||G(Ue("eva","welcome"))})),s==="home-lesson"){const o=F(n.dataset.level||"")||bn(),l=String(n.dataset.lessonId||"");ra(o,l)}if(s==="home-review"&&Gn("review"),s==="home-primary"&&(wn("home-primary"),ta("home-primary-navigation",zy)),s==="learning-path-node"&&(wn("learning-path",{lessonId:n.dataset.node||a}),ta("learning-path-node-navigation",()=>Pg(n.dataset.node||a))),s==="learning-path-back"&&Is(),s==="learning-path-choice"){const o=String(n.dataset.node||""),l=String(n.dataset.step||""),c=String(n.dataset.value||""),d=ua(o),u=d.steps.find(m=>m.id===l);if(!u||u.kind!=="quiz"||d.session.answers?.[l])return;d.session.answers[l]={selected:c,correct:c===u.answer,at:new Date().toISOString()},c===u.answer?d.session.score=Number(d.session.score||0)+1:d.session.mistakes=[...new Set([...d.session.mistakes||[],l])],d.session.updatedAt=new Date().toISOString(),T(),P()}if(s==="learning-path-step-next"){const o=String(n.dataset.node||r.activeLearnNodeId||""),l=ua(o);if(!l.steps.length)return;const c=l.steps[l.session.stepIndex];if(c?.kind==="quiz"&&!l.session.answers?.[c.id])return;l.session.stepIndex=Math.min(l.session.stepIndex+1,l.steps.length),l.session.updatedAt=new Date().toISOString(),T(),P()}if(s==="learning-path-retry"){const o=String(n.dataset.node||r.activeLearnNodeId||""),c=(ua(o).session.mistakes||[]).slice();Jn().activeSession=Pl({nodeId:o,mode:"mistakes",stepIndex:0,answers:{},mistakes:[],reviewStepIds:c,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),T(),P()}if(s==="learning-path-continue"){const o=String(n.dataset.node||r.activeLearnNodeId||""),l=ua(o);Hy(o,l.session,l.steps),Is();return}if(s==="start-lesson"||s==="select-lesson"){const o=r.lessons.find(l=>l.id===a);if(!o||!Ge(o)){G(`${_("unlockedAt")} ${Ro(o)}`);return}if(r.activeLessonId=a,r.activeCardId=null,r.revealed=!1,kt(),s==="start-lesson"){wn("legacy-lesson",{level:o.jlpt||"",lessonId:a}),we("lesson_start",{lessonId:a,jlpt:o.jlpt});const l=String(o.jlpt||"").toUpperCase();/^n[2-5]-lesson-\d+$/i.test(o.id)&&["N5","N4","N3","N2"].includes(l)?ra(l,o.id):Is(jn,o.id)}else P()}if(s==="show-answer"&&(sa(oe(r.activeCardId),"show_answer"),r.revealed=!0,kt(),Xe()),s==="check-reading"){const o=document.getElementById(`readingCheck-${a||r.activeCardId}`);o&&(r.readingCheck.value=o.value,r.readingCheck.cardId=a||r.activeCardId),dh()}if(s==="rate"&&aN(n.dataset.rating),s==="rate-kana-review"&&_f(n.dataset.course||"",n.dataset.card||"",n.dataset.rating||"remember"),s==="open-card"&&(sa(oe(a),"card_details"),r.detailCardId=a,P()),s==="open-kanji-page"&&Pb(a),s==="close-detail"&&(r.detailCardId=null,ue()),s==="study-card"){const o=oe(a);if(!o)return;sa(o,"study_card"),r.activeLessonId=o.lessonId,r.activeCardId=o.id,r.revealed=!1,kt(o.id),r.detailCardId=null,Is(jn,o.lessonId)}}}function Lb(e){const t=e.target.closest?.('[data-action="eva-click"], [data-action="eva-autonomy-next"]');if(!t||t.disabled)return;const n=t.dataset.action;Lu=Date.now(),e.preventDefault(),Yl(n),n==="eva-click"&&Kf(),n==="eva-autonomy-next"&&Tg()}function Yl(e="activity"){r.evaRuntime&&(r.evaRuntime.lastPlayerActionAt=Date.now(),r.evaRuntime.memory=Ns(Kt(),r.evaRuntime.memory||{}),r.evaRuntime.memory.lastRoute=r.route,e.startsWith("eva")&&(r.evaRuntime.memory.lastInteractionDate=ce()),["eva-autonomy-next","eva-question-answer"].includes(e)&&(r.evaRuntime.lastPlayerActionAt=Date.now()))}function Ab(e){if(!r.evaRuntime)return;const t=e?.dataset?.lineId||te().currentLine?.id||"";!t||r.evaRuntime.textRevealSkippedLineId===t||(r.evaRuntime.textRevealSkippedLineId=t,Ls(),P())}function Ib(e,t){if(!(!e||t?.disabled)&&!Tb(e,t)&&!["eva-room-choice","eva-bg-buy","eva-bg-select"].includes(e)){if(e==="eva-room-shop-open"){D("menu_open");return}if(e==="eva-room-shop-close"){D("menu_close");return}if(e==="route"){if(t?.closest(".bottom-nav")&&Xi(t.dataset.route)){D(r.navMenu===t.dataset.route?"menu_close":"menu_open");return}D("tab_switch");return}if(e==="nav-menu-route"){D("tab_switch");return}if(e==="close-nav-menu"){D("menu_close");return}if(e==="toggle-header-socials"){D(Rd()?"menu_close":"menu_open");return}if(e==="show-answer"||e==="open-card"){D("card_flip");return}if(["close-reward","close-detail","close-pwa-install-help","pwa-later","notification-later","dismiss-mascot-speech"].includes(e)){D("menu_close");return}if(e==="notification-center"){D("notification_soft");return}if(["start-lesson","select-lesson","next-sentence","study-card","rate","open-jlpt-lesson","n5-open-lesson","n5-overview","n5-review","n4-open-lesson","n4-overview","n4-review","n4-kanji","n4-grammar","n4-reading","n4-listening","n4-final","n3-open-lesson","n3-overview","n3-review","n3-kanji","n3-grammar","n3-reading","n3-listening","n3-final","n2-open-lesson","n2-overview","n2-review","n2-kanji","n2-grammar","n2-reading","n2-listening","n2-final","n1-open-lesson","n1-overview","n1-review","n1-kanji","n1-grammar","n1-reading","n1-listening","n1-final"].includes(e)){D("page_turn");return}if(["n5-answer","n5-check-input","n5-srs","n5-writing-done","n5-complete-lesson","n5-final-answer","n5-final-submit","n4-answer","n4-check-input","n4-srs","n4-writing-done","n4-complete-lesson","n4-grammar-complete","n4-reading-complete","n4-listening-complete","n4-final-answer","n4-final-submit","n3-answer","n3-check-input","n3-srs","n3-writing-done","n3-complete-lesson","n3-grammar-complete","n3-reading-complete","n3-listening-complete","n3-final-answer","n3-final-submit","n2-answer","n2-check-input","n2-srs","n2-writing-done","n2-complete-lesson","n2-grammar-complete","n2-reading-complete","n2-listening-complete","n2-final-answer","n2-final-submit","n1-answer","n1-check-input","n1-srs","n1-writing-done","n1-complete-lesson","n1-grammar-complete","n1-reading-complete","n1-listening-complete","n1-final-answer","n1-final-submit","jlpt-lesson-answer"].includes(e)){D("button_click");return}if(["pwa-install","notification-allow","notification-center","set-goal"].includes(e)){D("notification_soft");return}t?.matches("button, .btn, [role='button']")&&D("button_click"),e!=="toggle-header-socials"&&Eh(!1)}}function Tb(e,t){return["learn","review"].includes(r.route)?new Set(["show-answer","rate","check-reading","play-kanji-audio","start-lesson","select-lesson","study-card"]).has(e)||!!t?.closest(".study-card, .study-layout"):!1}function Up(e){var d;Yl("input");const t=e.target.closest("[data-ux-volume]");if(t){rA(Number(t.value)/100);const u=document.querySelector("[data-ux-volume-label]");u&&(u.textContent=`${Math.round(Do()*100)}%`);return}const n=e.target.closest("[data-reading-input]");if(n){r.readingCheck={cardId:n.dataset.id||r.activeCardId,value:n.value,status:null,message:""};return}const s=e.target.closest("[data-sentence-draft]");if(s){const u=De(),m=s.dataset.sentenceDraft;u.customDraft=Ji(u.customDraft||{}),m&&Object.prototype.hasOwnProperty.call(u.customDraft,m)&&(u.customDraft[m]=s.value,u.customMessage="",u.customStatus="",T());return}const a=e.target.closest("[data-kana-exercise-form] input");if(a){const u=a.closest("[data-kana-exercise-form]"),m=$c(u?.dataset.course||"",u?.dataset.owner||"",u?.dataset.ownerType||"",u?.dataset.exercise||""),h=String(a.name||"").replace(/^kana-/,"");m&&h&&((d=r.kanaExerciseDrafts)[m]||(d[m]={}),r.kanaExerciseDrafts[m][h]=a.value);return}const o=e.target.closest("[data-filter]");if(!o)return;const l=o.dataset.filter,c=o.selectionStart;r.filters[l]=o.value,r.dictionaryVisibleCount=Gr,P(),requestAnimationFrame(()=>{const u=document.getElementById(o.id);u&&(u.focus(),typeof c=="number"&&"setSelectionRange"in u&&u.setSelectionRange(c,c))})}function Rb(e){if(Zb(e)||_b(e))return;if(e.key==="Escape"&&(r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible||r.changelogModal||r.navMenu)){r.detailCardId=null,r.rewardModal=null,r.finalTestModal=null,r.contactModal=!1,r.pwaInstallHelpVisible=!1,r.navMenu=null,r.changelogModal?vl():P();return}const t=e.target.closest?.("[data-reading-input]");!t||e.key!=="Enter"||(e.preventDefault(),r.readingCheck.value=t.value,r.readingCheck.cardId=t.dataset.id||r.activeCardId,dh())}function _b(e){return e.target?.closest?.("input, textarea, select, [contenteditable='true']")||e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||(Ni=`${Ni}${e.key.toLowerCase()}`.slice(-ae.length),Ni!==ae)?!1:(Ni="",Jp(5e3),!0)}function Jp(e=5e3){const t=Math.max(1,Math.min(999999,Math.floor(Number(e)||5e3)));return r.progress?(H(0,t,"cheat:moon_farm"),Z(),T(),D("moon_fragment_gain"),G(p()==="ru"?`Чит активирован: +${t} Moon`:`Cheat activated: +${t} Moon`),P(),r.progress.moonFragments):0}function Is(e=$n,t=null,n=null){r.route="learn",r.activeLearnView=e,r.activeLearnNodeId=e===sn&&String(t||"")||null,r.activeLearnLegacyLessonId=e===jn&&String(t||"")||null;const s=e===sn&&t?`#learn/lesson/${encodeURIComponent(String(t))}`:e===jn&&t?`#learn/legacy/${encodeURIComponent(String(t))}`:"#learn";location.hash!==s&&history.replaceState(null,"",s),r.activeTextbookLevel=null,r.activeTextbookSubroute=null,r.kanjiPageId=null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=n,r.evaRoomShopOpen=!1,kt(),Ot(),ue()}function Gn(e,t=null,n=null,s={}){const a=++Si,o=()=>{a===Si&&aa(e,t,n)};if(s?.afterFeedback){Sn&&(cancelAnimationFrame(Sn),Sn=0),requestAnimationFrame(()=>window.setTimeout(o,0));return}o()}function ra(e,t=""){++Si===Si&&bL(e,t)}function aa(e,t=null,n=null){if(e==="learn"){Is($n,null,t);return}if(!mv(e)){const a=String(e||"");Qs(he("hash","unknown-route",a,a?[a]:[])),jt(a?`#${encodeURIComponent(a)}`:"#not-found"),r.pendingFocus=t,r.navMenu=null,kt(),Ot(),Xe();return}const s=r.route;if(r.route=e,r.route!=="home"&&lg(),r.routeMatch=null,r.routeNotFound=null,s!==r.route&&(s==="review"||r.route==="review")&&(r.reviewSession=null),r.route==="textbooks"){const a=n?String(n):"",o=F(a),l=ve(a)?a.toLowerCase():"",c=o||l;if(a&&!c){Qs(he("hash","invalid-parameter",`textbooks/${a}`,["textbooks",a])),jt(`#textbooks/${encodeURIComponent(a)}`),r.pendingFocus=t,Xe();return}r.activeTextbookLevel=c||null,r.activeTextbookSubroute=null}else if(r.route==="jlpt-lesson"){const a=n?String(n).toUpperCase():r.activeJlptLesson||UA()||"";if(a&&!F(a)){Qs(he("hash","invalid-parameter",`jlpt-lesson/${a}`,["jlpt-lesson",a])),jt(`#jlpt-lesson/${encodeURIComponent(a)}`),r.pendingFocus=t,Xe();return}r.activeJlptLesson=a||null}else r.activeTextbookLevel=null,r.activeTextbookSubroute=null;if(r.route!=="review"&&os(),r.route==="textbooks")jt(Wh(r.activeTextbookLevel||"",r.activeTextbookSubroute||""));else{const a=r.route==="learn"?"#learn":r.route==="jlpt-lesson"&&r.activeJlptLesson?`#jlpt-lesson/${encodeURIComponent(r.activeJlptLesson)}`:`#${r.route}`;jt(a)}r.route!=="kanji"&&(r.kanjiPageId=null),r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=t,r.route!=="eva-room"&&(r.evaRoomShopOpen=!1),kt(),Ot(),Xe(),Cs(r.route)&&Ii({route:r.route,delay:kl(r.route)}),r.route==="eva-room"&&we("room_opened")}function Pb(e){const t=oe(e);if(!t)return;r.route="kanji",r.kanjiPageId=t.id,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.pendingFocus=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.evaRoomShopOpen=!1,kt();const n=`#kanji/${encodeURIComponent(t.id)}`;jt(n),Ot(),Xe()}function Eb(){return r.routeMatch||zr(Xs())}function Mb(){const e=Eb();if(!hu){bI(e,r),hu=!0,Gp(e);return}kI(e,r).sent&&Gp(e)}function Gp(e){if(!e||e.status!=="valid")return;const t=e.params||{};if(e.route==="review"){me("review_open",{route:"review"});return}if(e.route==="kanji"){me("kanji_open",{route:"kanji",cardId:t.cardId||r.kanjiPageId||t.slug||""});return}if(e.route==="jlpt-lesson"){me("lesson_open",{route:"jlpt-lesson",level:t.level||r.activeJlptLesson||"",source:"jlpt-lesson"});return}if(e.route==="learn"&&t.targetId){me("lesson_open",{route:"learn",lessonId:t.targetId,source:t.view||"learn"});return}if(e.route==="textbooks"&&t.level){const n=String(t.subroute||"");if(["final","final-test"].includes(n.toLowerCase())){me("final_test_start",{route:"textbooks",level:t.level,source:"route"});return}Kb(n)&&me("lesson_open",{route:"textbooks",level:t.level,lessonId:n,source:"textbook"})}if(e.route==="textbooks"&&t.course){const n=String(t.subroute||"");n?n==="final"||n==="final-test"?me("kana_final_test_start",{route:"textbooks",course:t.course}):/^lesson-\d+$/i.test(n)&&me("kana_lesson_open",{route:"textbooks",course:t.course,lessonId:n}):me("kana_course_open",{route:"textbooks",course:t.course})}}function Kb(e){const t=String(e||"").trim().toLowerCase();return t?!new Set(["review","final","final-test","kanji","grammar","reading","listening"]).has(t):!1}function qp(){const e=Fv.begin(r.route);cancelAnimationFrame(Y.demoAnimationId),Y.demoAnimationId=0,an=!0,Zl(),DN();try{og(),Ob(),Mb();let t="";if(r.route===Zd&&(t=ia(r.routeNotFound)),r.route==="home"&&(t=wk()),r.route==="download"&&(t=uk()),r.route==="about"&&(t=gk()),r.route==="learn"&&(t=By(),r.pendingFocus!=="lesson-tabs"&&requestAnimationFrame(yd)),r.route==="review"&&(t=$C(),r.pendingFocus!=="sentence-practice"&&requestAnimationFrame(yd)),r.route==="dictionary"&&(t=vx()),r.route==="kanji"&&(t=$x()),r.route==="writing"&&(t=Fx(),requestAnimationFrame(yN)),r.route==="stats"&&(t=Ux(),requestAnimationFrame(Of)),r.route==="achievements"&&(t=qx()),r.route==="eva-room"&&(t=Sk()),r.route==="jlpt-lesson"&&(t=Xy()),r.route==="textbooks"&&(t=Qy()),t||(t=ia(he("hash","unknown-route",String(r.route||""),r.route?[String(r.route)]:[]))),!e.isCurrent())return;Cn.innerHTML=`${t}${lk()}${Bb()}`,document.body.classList.toggle("modal-open",!!(r.detailCardId||Rf()||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible||r.changelogModal)),sN(),requestAnimationFrame(()=>{fk(),ic(),Xb()})}catch(t){e.isCurrent()&&(console.error(`[Flash Kanji] route=${r.route} build=${I}`,t?.stack||t),Cn.innerHTML=Hi(t))}finally{an=!1,Zl()}}function Zl(){Wr=null,vi=null,wi=null,bi=null}function ue(){Sn||(Sn=requestAnimationFrame(()=>{Sn=0,qp()}))}function Xe(){Sn&&(cancelAnimationFrame(Sn),Sn=0),qp()}function Ts(e,t){if(typeof window>"u")return;const n=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({left:Math.max(0,Number(e)||0),top:Math.min(Math.max(0,Number(t)||0),n),behavior:"auto"})}function Db(e=null){if(typeof window>"u"){Xe();return}ji=!0;const t=e||Me(),n=Number(t?.scrollX||0),s=Number(t?.scrollY||0);Ip(),Xe(),Ts(n,s),requestAnimationFrame(()=>{Ts(n,s),requestAnimationFrame(()=>Ts(n,s))}),window.setTimeout(()=>Ts(n,s),120),window.setTimeout(()=>Ts(n,s),320),window.setTimeout(()=>Ts(n,s),640),window.setTimeout(()=>Ts(n,s),840)}function P(){ue()}function Hi(e){const t=e instanceof Error?e.message:String(e||"Unknown route error");return`<section class="page empty-state" data-route-error="${g(r.route)}"><h1>${i(p()==="ru"?"Не удалось открыть раздел":"Could not open this section")}</h1><p>${i(t)}</p><button class="btn primary" type="button" data-action="route" data-route="home">${i(p()==="ru"?"На главную":"Home")}</button></section>`}function ia(e=r.routeNotFound){Fb();const t=p()==="ru",n=e?.reason||"unknown-route",s={"unknown-locale":t?"Язык из адреса не зарегистрирован для Flash Kanji.":"The URL locale is not registered in Flash Kanji.","unknown-route":t?"Такого раздела или шаблона URL нет в реестре маршрутов.":"This section or URL pattern is not registered.","invalid-parameter":t?"Параметр в адресе имеет неверный формат.":"A URL parameter has an invalid format.","entity-not-found":t?"Адрес похож на правильный, но такой страницы или сущности нет в данных.":"The URL shape is known, but the referenced page or entity does not exist."},a=e?.raw||location.pathname||location.hash||"";return`
      <section class="page empty-state not-found-page" data-route-error="not-found" data-route-not-found="${g(n)}">
        <span class="kanji-char" aria-hidden="true">無</span>
        <p class="eyebrow">404 · Flash Kanji</p>
        <h1>${i(t?"Страница не найдена":"Page not found")}</h1>
        <p>${i(s[n]||s["unknown-route"])}</p>
        <p class="label"><code>${i(a)}</code></p>
        <div class="actions">
          <button class="btn primary" type="button" data-action="route" data-route="home">${i(t?"На главную":"Home")}</button>
          <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(t?"К учебникам":"Textbooks")}</button>
          <button class="btn ghost" type="button" data-action="route" data-route="dictionary">${i(t?"В словарь":"Dictionary")}</button>
        </div>
      </section>
    `}function Fb(){document.title=(p()==="ru","404 — Flash Kanji"),Hp("robots","noindex, follow"),Wp("/404.html")}function Ob(){r.route!==Zd&&(document.title=Uv,Hp("robots","index, follow"),Wp("/"))}function Hp(e,t){let n=document.querySelector(`meta[name="${e}"]`);n||(n=document.createElement("meta"),n.setAttribute("name",e),document.head.append(n)),n.setAttribute("content",t)}function Wp(e){let t=document.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.setAttribute("rel","canonical"),document.head.append(t)),t.setAttribute("href",new URL(e,location.origin).href)}function Bb(){const e=`${mk()}${Bx()}${Vx()}${ex()}${Xx()}${Qx()}${Yx()}${Zx()}${eN()}${sk()}`;return e?`<div class="modal-layer">${e}</div>`:""}function Vp(){return $e?.isConnected?$e:document.body?($e||($e=document.createElement("div"),$e.className="flash-kanji-onboarding-root",$e.setAttribute("role","presentation"),$e.setAttribute("aria-hidden","false")),$e.isConnected||document.body.appendChild($e),$e):null}const ec=[{target:null,title:{ru:"Добро пожаловать",en:"Welcome"},text:{ru:"Привет! Я Ева. Быстро покажу, где что находится и как пользоваться Flash Kanji.",en:"Hi! I am Eva. I will quickly show you where everything is and how Flash Kanji works."}},{target:"[data-tour='home-lesson']",title:{ru:"Учебники",en:"Textbooks"},text:{ru:"Это главный вход в Flash Kanji. Здесь открываются учебники N5-N1 и путь к урокам каждого уровня.",en:"This is the main entrance to Flash Kanji. Open N5-N1 textbooks here and continue into each level's lessons."}},{target:"[data-tour='srs-review']",title:{ru:"Повторение",en:"Review"},text:{ru:"Изученные карточки возвращаются в повторение, чтобы закрепляться в памяти.",en:"Learned cards come back here for spaced repetition so they stay in memory."}},{target:"[data-tour='dictionary']",title:{ru:"Словарь",en:"Dictionary"},text:{ru:"В словаре можно посмотреть значения, чтения, примеры и подробности по каждому кандзи.",en:"The dictionary lets you check meanings, readings, examples, and kanji details."}},{target:["[data-tour='eva-room']","[data-tour='profile-progress']","[data-tour='profile-progress-nav']"],title:{ru:"Комната Евы",en:"Eva room"},text:e=>e?.dataset?.tour==="eva-room"?{ru:"Это моя комната. Здесь можно поговорить со мной, менять облик и тратить Moon Fragments.",en:"This is my room. You can talk to me here, change the look, and spend Moon Fragments."}:{ru:"Если комнаты Евы на этой странице нет, посмотри на стрик и статистику.",en:"If Eva Room is not on this page, check the streak and progress stats instead."}}],Wi={title:{ru:"Готово!",en:"All set!"},text:{ru:"Открой учебники и начни с N5. Я рядом.",en:"Open the textbooks and start with N5. I will be right here."},start:{ru:"Открыть учебники",en:"Open textbooks"},close:{ru:"Закрыть",en:"Close"}};function Xp(){try{return localStorage.getItem(au)==="true"}catch{return!1}}function zb(){try{return localStorage.getItem(ou)||""}catch{return""}}function Vi(e){try{localStorage.setItem(ou,e)}catch(t){console.warn("Could not save onboarding audience.",t)}}function tc(e=r.progress){return e?Number(e.appOpens||0)>0||Object.keys(e.lessonCompletions||{}).length>0||Object.keys(e.cards||{}).length>0||Object.keys(e.seenKanji||{}).length>0||Object.keys(e.daily||{}).length>0||Object.keys(e.favorites||{}).length>0||Object.keys(e.transactions||{}).length>0||Number(e.totalMoonFragmentsEarned||0)>0||Number(e.secrets?.evaClicks||0)>0||(e.secrets?.nightVisit?1:0)>0||Number(e.visits?.streak||0)>0||Number(e.visits?.bestStreak||0)>0:!1}function Ub(e=!1){const t=zb();return t==="returning"||t==="completed"?t:Xp()?(Vi("completed"),"completed"):e?(Vi("returning"),"returning"):(Vi("new"),"new")}function Qp(){return!Xp()}function Jb(){try{localStorage.getItem(iu)==="true"&&localStorage.removeItem(iu)}catch(e){console.warn("Could not clear legacy onboarding state.",e)}}function Gb(){try{localStorage.setItem(au,"true"),Vi("completed")}catch(e){console.warn("Could not save onboarding completion.",e)}}function Yp(){return Mt}function oa(){return ec.length}function nc(){return ec[de(on,0,oa()-1)]||ec[0]}function qb(e=nc()){return e?.target?Array.isArray(e.target)?e.target:[e.target]:[]}function Hb(e){if(!(e instanceof HTMLElement))return!1;const t=window.getComputedStyle(e);return t.display==="none"||t.visibility==="hidden"||Number(t.opacity||"1")<=0?!1:e.getClientRects().length>0}function Zp(e=nc()){for(const t of qb(e)){const s=Array.from(document.querySelectorAll(t)).find(a=>Hb(a));if(s)return s}return null}function eg(e,t=null){return typeof e=="function"?eg(e(t),t):b(e||{ru:"",en:""})}function Wb(){return typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Vb(){return!(Mt||!r.progress||!r.i18n||!r.lessons.length||!document.body||document.visibilityState!=="visible"||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal||r.navMenu)}function sc(e=!1,t=Rv){clearTimeout(rr),!(!e&&!Qp())&&(rr=window.setTimeout(()=>{rr=0,rc({force:e})},t))}function rc(e={}){const t=!!e.force;let n=!1;if(Mt){if(!t)return!0;la({completed:!1,silent:!0})}if(!t&&!Qp())return!1;if(!Vb())return sc(t,lu),!1;clearTimeout(rr);try{al=document.activeElement instanceof HTMLElement?document.activeElement:null,Mt=!0,Ie="step",on=0,document.body.classList.add("onboarding-open");const s=document.querySelector(".app-shell");if(s){s.setAttribute("aria-hidden","true");try{s.inert=!0}catch(a){console.warn("Could not make the app shell inert.",a)}}return Vp(),ur(),tg(),n=!0,window.addEventListener("scroll",qn,{passive:!0}),window.addEventListener("resize",qn),window.addEventListener("orientationchange",qn),qn(),ng(),!0}catch(s){return console.error("Flash Kanji onboarding failed to start.",s),la({completed:!1,silent:!0}),n||sc(t,lu),!1}}function la(e={}){const{completed:t=!0,silent:n=!1,routeTo:s=null}=e;clearTimeout(rr),rr=0,cancelAnimationFrame(Vr),Vr=0,window.removeEventListener("scroll",qn),window.removeEventListener("resize",qn),window.removeEventListener("orientationchange",qn),ln&&ln.classList.remove("is-onboarding-target"),ln=null,Mt=!1,Ie="step",on=0,$e&&($e.remove(),$e=null,dt=null,Fe=null),document.body.classList.remove("onboarding-open");const a=document.querySelector(".app-shell");if(a){a.removeAttribute("aria-hidden");try{a.inert=!1}catch(o){console.warn("Could not restore app shell interactivity.",o)}}t&&Gb(),n||(s?aa(s):P()),al?.focus&&requestAnimationFrame(()=>{try{al.focus()}catch(o){console.warn("Could not restore onboarding focus.",o)}})}function ur(){if(!Vp())return;const e=Ie==="final"?null:nc(),t=Ie==="final"?null:Zp(e),n=Ie==="final"?Wi.title:e.title,s=Ie==="final"?Wi.text:eg(e.text,t),a=Ie==="final"?p()==="ru"?"Готово":"Done":`${on+1} ${p()==="ru"?"из":"of"} ${oa()}`,o=b(n),l=b(s),c=$o("eva","calm","welcome"),d=oa();$e.classList.toggle("is-final",Ie==="final"),$e.classList.toggle("has-target",!!t),$e.dataset.view=Ie;const u=Ie==="final"?`
        <button class="btn primary" type="button" data-action="onboarding-continue">${i(b(Wi.start))}</button>
        <button class="btn ghost" type="button" data-action="onboarding-close">${i(b(Wi.close))}</button>
      `:on===0?`
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Начать":"Start")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `:`
          <button class="btn ghost" type="button" data-action="onboarding-prev">${i(p()==="ru"?"Назад":"Back")}</button>
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Далее":"Next")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `;$e.innerHTML=`
      ${Ie==="final"?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      ${Ie==="final"||t?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      <div class="flash-kanji-onboarding-spotlight${t?"":" is-hidden"}" data-onboarding-spotlight aria-hidden="true"></div>
      <section class="flash-kanji-onboarding-dialog${Ie==="final"?" is-final":""}" role="dialog" aria-modal="true" aria-labelledby="flashKanjiOnboardingTitle" aria-describedby="flashKanjiOnboardingDesc" tabindex="-1">
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
    `,dt=Oe("[data-onboarding-spotlight]",$e),Fe=Oe(".flash-kanji-onboarding-dialog",$e),ln&&ln!==t&&ln.classList.remove("is-onboarding-target"),ln=t||null,ln&&ln.classList.add("is-onboarding-target"),Fe&&(Fe.dataset.totalSteps=String(d)),qn()}function qn(){Mt&&(Vr||(Vr=requestAnimationFrame(()=>{Vr=0,tg()})))}function tg(){if(!Mt||!$e||!Fe)return;const e=Ie==="final"?null:ln||Zp();Wb();const t=window.innerWidth,n=window.innerHeight;if(Fe.style.maxWidth=`${Math.min(_v,Math.max(280,t-16))}px`,Fe.style.maxHeight=`${Math.max(180,n-24)}px`,Fe.style.left="50%",Fe.style.top="50%",Fe.style.transform="translate(-50%, -50%)",Fe.dataset.placement="center",e){const s=e.isConnected?e.getBoundingClientRect():null;!!s&&s.top>=8&&s.bottom<=n-8&&s.left>=8&&s.right<=t-8&&dt?(dt.hidden=!1,dt.style.left=`${Math.round(s.left-12)}px`,dt.style.top=`${Math.round(s.top-12)}px`,dt.style.width=`${Math.round(s.width+12*2)}px`,dt.style.height=`${Math.round(s.height+12*2)}px`,dt.style.borderRadius=`${Math.max(6,Math.round(parseFloat(getComputedStyle(e).borderRadius||"8")||8))}px`):dt&&(dt.hidden=!0)}else dt&&(dt.hidden=!0);$e.style.visibility="visible",ng()}function Xb(){Mt&&ur()}function ng(){if(!Fe)return;const e=Fe.querySelector('[data-action="onboarding-next"], [data-action="onboarding-continue"], [data-action="onboarding-start"], [data-action="onboarding-prev"]'),t=Fe.querySelectorAll("button"),n=e||t[0]||Fe;try{n.focus?.()}catch(s){console.warn("Could not focus onboarding control.",s)}}function Qb(){return Fe?Array.from(Fe.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')).filter(e=>e instanceof HTMLElement):[]}function Yb(e=1){const t=Qb();if(!t.length)return;const n=document.activeElement,s=t.indexOf(n),a=s===-1?e>0?0:t.length-1:(s+e+t.length)%t.length;t[a]?.focus?.()}function Zb(e){return Mt?e.key==="Tab"?(e.preventDefault(),Yb(e.shiftKey?-1:1),!0):e.key==="Escape"?(e.preventDefault(),la({completed:Ie==="final"}),!0):e.key==="ArrowRight"?(e.preventDefault(),sg(),!0):e.key==="ArrowLeft"?(e.preventDefault(),rg(),!0):!1:!1}function sg(){if(!Mt)return;const e=oa()-1;if(Ie!=="final"){if(on<e){on+=1,ur();return}Ie="final",ur()}}function rg(){if(Mt){if(Ie==="final"){Ie="step",on=oa()-1,ur();return}on>0&&(on-=1,ur())}}function ek(e=null){la({completed:!0,routeTo:e})}function tk(){ek("textbooks")}function Rs(){if(typeof window>"u")return;const e=document.scrollingElement||document.documentElement;e&&(e.scrollTop=0),document.body&&(document.body.scrollTop=0),window.scrollTo({top:0,left:0,behavior:"auto"})}function Ot(){typeof window>"u"||requestAnimationFrame(()=>requestAnimationFrame(()=>Rs()))}function nk(){if(typeof window>"u")return;const e=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({top:e,behavior:"auto"})}function ag(){return typeof window>"u"||!document.documentElement?!1:document.documentElement.scrollHeight>window.innerHeight+24}function ac(){return ag()?window.scrollY>32?"up":"down":null}function sk(){const e=ac()||"down",t=ag()?"":" hidden",n=p()==="ru",s=e==="up"?n?"Наверх":"Scroll to top":n?"Вниз":"Scroll to bottom",a=e==="up"?"↑":"↓";return`
      <button class="scroll-position-toggle scroll-position-toggle-${e}" type="button" data-action="scroll-page-edge" data-direction="${e}" aria-label="${g(s)}" title="${g(s)}"${t}>
        <span class="scroll-position-toggle-icon" aria-hidden="true">${i(a)}</span>
        <span class="scroll-position-toggle-label">${i(s)}</span>
      </button>
    `}function ic(){const e=Oe('[data-action="scroll-page-edge"]');if(!e)return;const t=ac();if(!t){e.hidden=!0;return}e.hidden=!1,e.dataset.direction=t,e.classList.toggle("scroll-position-toggle-up",t==="up"),e.classList.toggle("scroll-position-toggle-down",t==="down");const n=e.querySelector(".scroll-position-toggle-icon");n&&(n.textContent=t==="up"?"↑":"↓");const s=e.querySelector(".scroll-position-toggle-label");s&&(s.textContent=p()==="ru"?t==="up"?"Наверх":"Вниз":t==="up"?"Top":"Bottom");const a=p()==="ru"?t==="up"?"Подняться вверх":"Опуститься вниз":t==="up"?"Scroll to top":"Scroll to bottom";e.setAttribute("aria-label",a),e.setAttribute("title",a)}function Xi(e){return e!=="review"&&ig(e).length>1}function rk(e){if(!Xi(e)){aa(e);return}r.navMenu=r.navMenu===e?null:e,ue()}function ig(e){const t=p()==="ru";return{learn:[{action:"open-jlpt-lesson-start",jlpt:vc(),icon:"文",title:t?"Текущий урок":"Current lesson",text:t?"Открыть последний урок учебника.":"Open the latest lesson in the textbook."},{route:"review",focus:"review-card",icon:"↻",title:"SRS",text:t?"Перейти к повторениям.":"Go to review."},{route:"textbooks",focus:"textbook-grid",icon:"冊",title:t?"Учебники":"Textbooks",text:t?"Открыть страницы учебников JLPT.":"Open JLPT textbook pages."}],review:[{route:"review",focus:"review-card",icon:"↻",title:t?"Повторение":"Review cards",text:t?"Карточки повторения на сегодня.":"Today's review queue."},{route:"review",focus:"sentence-practice",icon:"文",title:t?"Практика предложений":"Sentence practice",text:t?"Вставь кандзи в пропуск.":"Fill kanji into blanks."}],stats:[{route:"stats",focus:"stats-top",icon:"▥",title:t?"Статистика":"Statistics",text:t?"Графики, XP и серия.":"Charts, XP, and streak."},{route:"achievements",focus:"achievements-top",icon:"月",title:t?"Достижения":"Achievements",text:t?"Галерея наград.":"Reward gallery."},{route:"stats",focus:"shop-panel",icon:"◈",title:t?"Магазин":"Shop",text:t?"Moon Fragments и предметы.":"Moon Fragments and items."}],more:[{route:"writing",focus:"writing-canvas",icon:"筆",title:t?"Письмо":"Writing",text:t?"Практика написания.":"Writing practice."},{route:"stats",focus:"stats-top",icon:"▥",title:t?"Профиль":"Profile",text:t?"Статистика, награды и прогресс.":"Stats, achievements, and progress."},{route:"eva-room",focus:"eva-room",icon:"☾",title:t?"Комната Евы":"Eva room",text:t?"Диалоги и уютные фоны.":"Dialogue scenes and cozy rooms."},{route:"download",focus:"download-top",icon:"⇩",title:t?"Скачать":"Download",text:t?"APK для Android и PWA-установка.":"Android APK and PWA install."},{route:"about",focus:"about",icon:"ℹ",title:t?"О проекте":"About",text:t?"Что такое Flash Kanji.":"What Flash Kanji is."}]}[e]||[]}function oc(e){return e==="more"?p()==="ru"?"Ещё":"More":e==="about"?p()==="ru"?"О проекте":"About":e==="stats"?p()==="ru"?"Профиль":"Profile":e==="download"?p()==="ru"?"Скачать":"Download":e==="textbooks"||e==="learn"?p()==="ru"?"Учебники":"Textbooks":_(e)}function ak(){return["home","textbooks","review","dictionary","download","stats","about"]}function ik(e){return{home:"⌂",textbooks:"文",learn:"文",review:"↻",dictionary:"典",download:"⇩",stats:"▥",about:"ℹ"}[e]||"•"}function ok(e){return`
      <li class="site-footer-link-item">
        <button class="site-footer-link site-footer-link--nav" type="button" data-action="route" data-route="${g(e)}">
          <span class="site-footer-link-icon" aria-hidden="true">${i(ik(e))}</span>
          <span>${i(oc(e))}</span>
        </button>
      </li>
    `}function lk(){const e=p()==="ru",t=new Date().getFullYear(),n=e?"Спокойная лунная комната для кандзи, уроков и повторений.":"A calm moonlit room for kanji, lessons, and steady reviews.",s=e?"Навигация":"Navigation",a=e?"Соцсети":"Social";return`
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
                ${ak().map(o=>ok(o)).join("")}
              </ul>
            </section>
            <section class="site-footer-section">
              <h2>${i(a)}</h2>
              <div class="site-footer-socials" aria-label="${g(e?"Социальные ссылки":"Social links")}">
                <a class="btn ghost footer-social-link" href="${g(ct.youtube)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${Ah("youtube")}</span>
                  <span>YouTube</span>
                </a>
                <a class="btn ghost footer-social-link" href="${g(ct.instagram)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${Ah("instagram")}</span>
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
    `}function ck(){return p()==="ru"?{eyebrow:"Flash Kanji · Android",title:"Скачать Flash Kanji",accent:"и установить PWA",lead:"Та же оболочка Flash Kanji: JLPT-учебники, SRS-повторение, словарь и практика письма — на Android и в браузере.",note:"Официальная сборка Flash Kanji. Кнопка APK ведёт на файл в Google Drive, зеркало на сайте остаётся запасным вариантом.",apk:"Скачать APK",pwa:"Установить PWA",web:"Открыть веб-версию",meta:"Android 8.0+ · APK · бесплатно · 793 КБ",stepsTitle:"Как установить",stepsSubtitle:"Коротко и без лишних экранов.",infoTitle:"Что внутри",info:["JLPT N5–N1 учебники и маршрут уроков.","SRS-повторение и словарь кандзи.","Практика письма, импорт/экспорт прогресса и PWA-режим."],steps:[{icon:"1",title:"Скачайте APK",text:"Нажмите «Скачать APK» и дождитесь завершения загрузки."},{icon:"2",title:"Разрешите установку",text:"Если Android попросит, разрешите установку из этого источника."},{icon:"3",title:"Откройте Flash Kanji",text:"Запустите приложение и продолжайте учить кандзи где угодно."}],mirror:"Запасное зеркало APK",screenshotAlt:"Скриншот Flash Kanji на Android"}:{eyebrow:"Flash Kanji · Android",title:"Download Flash Kanji",accent:"and install the PWA",lead:"The same Flash Kanji shell: JLPT textbooks, SRS review, dictionary, and writing practice on Android and in the browser.",note:"Official Flash Kanji build. The APK button opens the Google Drive file; the site mirror is kept as a fallback.",apk:"Download APK",pwa:"Install PWA",web:"Open web version",meta:"Android 8.0+ · APK · free · 793 KB",stepsTitle:"How to install",stepsSubtitle:"Short and clean.",infoTitle:"What's inside",info:["JLPT N5–N1 textbooks and lesson route.","SRS review and kanji dictionary.","Writing practice, progress import/export, and PWA mode."],steps:[{icon:"1",title:"Download the APK",text:"Tap Download APK and wait for the file to finish."},{icon:"2",title:"Allow install",text:"If Android asks, allow installation from this source."},{icon:"3",title:"Open Flash Kanji",text:"Launch the app and keep studying kanji anywhere."}],mirror:"Fallback APK mirror",screenshotAlt:"Flash Kanji Android screenshot"}}function dk(e){return`
      <article class="home-task-item download-install-step">
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.text)}</p>
        </span>
      </article>
    `}function uk(){const e=ck();return`
      <section class="page home-shell download-page" data-section="download-page">
        <article class="home-hero-card download-hero-card" data-section="download-top" aria-labelledby="downloadTitle">
          <img class="home-hero-moon" src="assets/decor/elements/crescent-moon.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
          <div class="home-hero-copy download-hero-copy">
            <p class="eyebrow">${i(e.eyebrow)}</p>
            <h1 class="hero-title home-hero-title" id="downloadTitle">${i(e.title)}<br><em>${i(e.accent)}</em></h1>
            <p class="home-hero-note">${i(e.lead)}</p>
            <p class="hero-subtitle">${i(e.note)}</p>
            <div class="hero-actions home-hero-actions">
              <a class="btn primary home-primary-cta apk-download" href="${g(xv)}" target="_blank" rel="noopener noreferrer" data-action="apk-download" data-source="google-drive">
                <span aria-hidden="true">⇩</span>
                <span>${i(e.apk)}</span>
              </a>
              <button class="btn ghost home-primary-cta" type="button" data-action="pwa-install">${i(e.pwa)}</button>
              <button class="btn ghost home-primary-cta" type="button" data-action="route" data-route="home">${i(e.web)}</button>
            </div>
            <p class="download-meta">${i(e.meta)}</p>
          </div>
          <figure class="download-app-preview">
            <img src="${g(Lv)}" alt="${g(e.screenshotAlt)}" loading="eager" decoding="async" />
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
                ${e.steps.map(dk).join("")}
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
              <a class="btn ghost" href="${g(Nv)}" download="flash-kanji-android.apk" data-action="apk-download" data-source="mirror">${i(e.mirror)}</a>
            </article>
          </aside>
        </section>
      </section>
    `}function pk(){return p()==="ru"?{eyebrow:"О проекте",title:"О Flash Kanji",lead:"О Flash Kanji — это образовательный проект для изучения японского языка через кандзи, чтение, примеры и визуальную память.",heroTitle:"Спокойное пространство, куда хочется возвращаться каждый день",heroLead:"Идея проекта простая: сделать обучение японскому не сухой таблицей символов, а живым пространством, где кандзи складываются в привычку.",paragraphs:["Здесь кандзи изучаются постепенно — от базовых уровней до более сложных, с примерами, чтениями, ассоциациями и практикой.","Flash Kanji создан для тех, кто хочет учить японский с нуля или системно прокачивать уже имеющиеся знания.","Проект помогает запоминать иероглифы, понимать их значения, видеть реальные примеры использования и выстраивать привычку регулярного обучения.","В центре Flash Kanji — атмосфера спокойного цифрового кабинета, где обучение похоже не на экзамен, а на личный путь.","Здесь есть карточки, уроки, словарь, повторение, практика написания и визуальные элементы, которые помогают удерживать внимание."],sectionTitle:"Как устроен Flash Kanji",highlightTitle:"Что помогает удерживать ритм",highlightPoints:["Учебники JLPT N5-N1 с постепенным входом в материал.","Карточки с кандзи, чтениями и примерами.","SRS-повторение, чтобы не терять выученное.","Практика письма и тестовые упражнения.","Персонаж-наставник Eva и спокойная визуальная среда."],closing:"Flash Kanji — изучай японский в своей лунной комнате.",textbooks:"К учебникам",review:"К повторению",home:"На главную",evaRoom:"Комната Евы"}:{eyebrow:"About",title:"About Flash Kanji",lead:"Flash Kanji is an educational project for learning Japanese through kanji, readings, examples, and visual memory.",heroTitle:"A quiet place you will want to return to every day",heroLead:"The idea is simple: make Japanese feel less like a dry table of symbols and more like a living space where kanji turn into habit.",paragraphs:["Kanji are introduced gradually, from the basic levels to more advanced ones, with examples, readings, associations, and practice.","Flash Kanji is for people starting Japanese from zero and for learners who want a steady system to grow existing knowledge.","The project helps you remember characters, understand what they mean, see real usage, and build a consistent study routine.","At the center of Flash Kanji is the atmosphere of a calm digital study room, where learning feels like a personal journey rather than an exam.","You get cards, lessons, a dictionary, review, writing practice, and visual elements that help keep attention in place."],sectionTitle:"How Flash Kanji is built",highlightTitle:"What keeps the rhythm going",highlightPoints:["JLPT N5-N1 textbooks with a gradual path into the material.","Cards with kanji, readings, and examples.","SRS review so learned items stay in memory.","Writing practice and test exercises.","Eva as a mentor and a calm visual study space."],closing:"Flash Kanji — study Japanese in your own moonlit room.",textbooks:"Textbooks",review:"Review",home:"Home",evaRoom:"Eva room"}}function gk(){const e=pk();return`
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
    `}function mk(){const e=ig(r.navMenu);if(!e.length)return"";const t=r.navMenu,n=t?oc(t):"";return`
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
    `}function fk(){if(!r.pendingFocus)return;if(ji){ji=!1,r.pendingFocus=null;return}const e=r.pendingFocus;if(r.pendingFocus=null,e==="__scroll-top__"){Ot();return}const t={"lesson-card":".study-card, .daily-lesson-card","kana-character-card":"[data-section='kana-character-study-card']","lesson-tabs":".lesson-tabs","review-card":"[data-section='review-card']","sentence-practice":"[data-section='sentence-practice']","writing-demo":"[data-section='writing-demo']","writing-canvas":"[data-section='writing-canvas']","eva-room":".eva-room-entry, .eva-room-page, .eva-room-shell",about:".about-page","download-top":"[data-section='download-top']","stats-top":".metric-grid","achievements-top":".achievements-page .metric-grid","shop-panel":"[data-section='shop-panel']"},n=document.querySelector(t[e]||e);n&&(n.scrollIntoView({behavior:"auto",block:"start"}),n.classList.add("is-focus-pulse"),window.setTimeout(()=>n.classList.remove("is-focus-pulse"),900))}function og(){fl(".nav-btn").forEach(t=>{const n=t.dataset.route,s=n===r.route||n==="learn"&&r.route==="textbooks"||n==="stats"&&r.route==="achievements"||n==="dictionary"&&r.route==="kanji";t.classList.toggle("is-active",s),t.classList.toggle("has-menu",!!t.closest(".bottom-nav")&&Xi(n)),t.setAttribute("aria-expanded",r.navMenu===n?"true":"false"),s?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current");const a=t.querySelector("small");a&&n&&(a.textContent=oc(n))});const e=Oe('[data-action="language"]');e&&(e.textContent=p().toUpperCase()),hk(),Id(),sA(),Td(),vk()}function hk(){const e=p()==="ru",t={sidebar:e?"Основная навигация Flash Kanji":"Flash Kanji main navigation",sidebarNav:e?"Разделы Flash Kanji":"Flash Kanji sections",learning:e?"Обучение":"Learning",project:e?"Проект":"Project",progress:e?"Прогресс Flash Kanji":"Flash Kanji progress",profile:e?"Профиль Flash Kanji":"Flash Kanji profile",home:e?"На главную":"Go home",socialLinks:e?"Социальные ссылки":"Social links",reportBug:e?"Сообщить об ошибке":"Report a bug",theme:e?"Сменить тему":"Toggle theme",themeTitle:e?"Тема":"Theme",language:e?"Сменить язык":"Change language",languageTitle:e?"Язык":"Language",exportProgress:e?"Экспорт прогресса":"Export progress",exportTitle:e?"Экспорт":"Export",importProgress:e?"Импорт прогресса":"Import progress",importTitle:e?"Импорт":"Import",openProfile:e?"Открыть профиль":"Open profile",profileTitle:e?"Профиль":"Profile"},n=(s,a,o=a)=>{document.querySelectorAll(s).forEach(l=>{l.setAttribute("aria-label",a),l.setAttribute("title",o)})};document.querySelector(".app-sidebar")?.setAttribute("aria-label",t.sidebar),document.querySelector(".sidebar-nav")?.setAttribute("aria-label",t.sidebarNav),document.querySelector(".sidebar-progress")?.setAttribute("aria-label",t.progress),document.querySelector(".sidebar-user")?.setAttribute("aria-label",t.profile),document.querySelector("#headerSocialActions")?.setAttribute("aria-label",t.socialLinks),document.querySelectorAll("[data-nav-caption]").forEach(s=>{s.textContent=s.getAttribute("data-nav-caption")==="project"?t.project:t.learning}),n('.brand-mark[data-action="route"][data-route="home"]',t.home),n('[data-action="contact-email"]',t.reportBug),n('[data-action="theme"]',t.theme,t.themeTitle),n('[data-action="language"]',t.language,t.languageTitle),n('.icon-btn[data-action="export"]',t.exportProgress,t.exportTitle),n('.icon-btn[data-action="import"]',t.importProgress,t.importTitle),n('.sidebar-user-open[data-action="route"][data-route="stats"]',t.openProfile,t.profileTitle)}function vk(){const e=Oe("#sidebarProgressBar"),t=Oe("#sidebarProgressLabel"),n=Oe("#sidebarProgressPercent"),s=Oe("#sidebarProgressNote"),a=Oe("#sidebarUserAvatar"),o=Oe("#sidebarUserTitle"),l=Oe("#sidebarUserSubtitle"),c=Kn(),d=Dp(),u=Qe(),m=Math.max(1,Number(r.progress?.level||1)),h=Math.max(0,Math.min(100,Math.round(c.percent||0)));e&&(e.max=100,e.value=h),t&&(t.textContent=`${p()==="ru"?"Уровень":"Level"} ${m}`),n&&(n.textContent=`${h}%`),s&&(s.textContent=u>0?`${u} ${pe().reviewQueue} · ${d.title||pe().mapHint}`:`${d.title||pe().mapHint}${d.summary?` · ${d.summary}`:""}`),a&&(a.textContent=`Lv ${m}`),o&&(o.textContent=(p()==="ru","Flash Kanji")),l&&(l.textContent=`${pe().level} ${m} · ${r.progress?.streak?.current||0} ${pe().streak}`)}function wk(){r.n5Textbook?.items?.length||ql();const e=bk(),t=ab(),n=Qe(),s=Dp(),a=mb(),o=pe(),l=Kn(),c=Math.max(0,Math.min(100,Math.round(l.percent||0))),d=p()==="ru",u=d?[{action:"home-review",icon:"↻",title:"Повторение",detail:n>0?`${n} карточек ждут тебя.`:"Очередь пуста, но тренировка всегда под рукой.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:r.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Комната Евы",detail:"Диалоги, фон и Moon Fragments.",count:r.progress.moonFragments}]:[{action:"home-review",icon:"↻",title:"Review",detail:n>0?`${n} cards are waiting.`:"The queue is empty, but practice is always ready.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:r.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Eva Room",detail:"Dialogue, backgrounds, and Moon Fragments.",count:r.progress.moonFragments}],m=Fh();return`
      <section class="page home-shell">
        <article class="home-hero-card">
          <img class="home-hero-moon" src="assets/decor/elements/crescent-moon.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
          <div class="home-hero-copy">
            <p class="eyebrow">JLPT N5-N1 · ${i(d?"Учебники":"Textbooks")} · ${i(d?"Повторение":"Review")}</p>
            <h1 class="hero-title home-hero-title">${d?"Небольшой урок.<br><em>Большой шаг.</em>":"Small lesson.<br><em>Big step.</em>"}</h1>
            <p class="home-hero-note">${i(s.summary||(d?"Сегодня появится новый шаг вперед.":"Today brings a small but steady step forward."))}</p>
            <p class="hero-subtitle">${i(_("tagline"))}</p>
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
          ${a.map(fb).join("")}
        </section>
        <section class="home-dashboard">
          <div class="home-dashboard-main">
            ${gb()}
            <article class="study-card home-route-card">
              <div class="section-head">
                <div>
                  <span class="eyebrow accent">${i(d?"Маршрут N5":"N5 route")}</span>
                  <h2>${i(d?"Твой путь сегодня":"Your path today")}</h2>
                </div>
                <button class="text-button" type="button" data-action="route" data-route="textbooks">${i(d?"Все учебники →":"All textbooks →")}</button>
              </div>
              <div class="home-route-track">
                ${hb().map(wb).join("")}
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
                ${u.map(bb).join("")}
              </div>
            </article>
            ${ti()?"":`
              <article class="study-card home-install-card">
                <button class="btn ghost" type="button" data-action="pwa-install">${i(m.install)}</button>
                <p class="home-install-hint">${i(m.description)}${Br()?` ${i(m.iosInstruction)}`:""}</p>
              </article>
            `}
          </div>
          <aside class="home-dashboard-side">
            ${$k(e)}
          </aside>
        </section>
      </section>
    `}function bk(){kk();const e=te(),t=e.currentLine||r.evaRuntime?.currentPhrase||null,n=ao(),s=b(Fr("eva").name||{ru:"Ева",en:"Eva"}),a=r.evaRuntime?.mood||e.mood||zt().mood,o=r.evaRuntime?.emotion||e.emotion||t?.emotion||"calm",l=t?.state||r.evaRuntime?.presenceState||(n?"wait_choice":"speak"),c=Ps(Ln(t?.sprite||r.evaRuntime?.currentSkin||_s(),o));return{line:t,question:n,speaker:s,mood:a,emotion:o,presenceState:l,sprite:c}}function kk(){ge();const e=te();return e.currentLine?.text||r.evaRuntime?.currentPhrase?.text?e.currentLine||r.evaRuntime.currentPhrase:(Array.isArray(r.evaAutonomyLines)&&r.evaAutonomyLines.length&&yk(),{id:"home_eva_idle_fallback",category:"idle",text:{ru:"Я рядом. Начнём с одного спокойного шага.",en:"I'm here. Let's start with one calm step."},sprite:_s(),emotion:"calm",state:"speak"})}function yk(){ar||(ar=window.setTimeout(()=>{ar=0,!(r.route!=="home"||te().currentLine?.text||r.evaRuntime?.currentPhrase?.text)&&Rg("auto",{allowQuestion:!1})&&P()},260))}function lg(){ar&&(window.clearTimeout(ar),ar=0)}function $k(e){const t=Vn(),n=Wn(),s=e.question?p()==="ru"?"Вопрос":"Question":p()==="ru"?"Диалог":"Dialogue",a=e.line||{text:{ru:"Я здесь.",en:"I'm here."}},o=a.id||"home_eva_line";return`
      <section class="home-eva-vn" role="region" aria-label="${g(p()==="ru"?"Диалог Евы":"Eva dialogue")}" data-home-eva-mode="${g(e.question?"question":"dialogue")}" data-eva-state="${g(e.presenceState)}" data-eva-mood="${g(e.mood)}" data-eva-emotion="${g(e.emotion)}">
        <div class="home-eva-copy">
          <div class="home-eva-meta">
            <strong>${i(e.speaker)}</strong>
            <span class="pill">${i(s)}</span>
          </div>
          ${ug(b(a.text||{ru:"Я здесь.",en:"I'm here."}),o)}
          ${e.question?`
            <div class="eva-question-box home-eva-question">
              <span class="pill">${i(n.question)}</span>
              <strong>${i(b(e.question.text))}</strong>
              <div class="eva-choice-grid">
                ${e.question.options.map(l=>`
                  <button class="btn ${l.id===e.question.options[0]?.id?"primary":"ghost"}" type="button" data-action="eva-question-answer" data-option="${g(l.id)}">
                    ${i(b(l.text))}
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
          <img class="${g(dg({line:e.line,isAutonomy:!0}))}" src="${g(e.sprite)}" alt="${g(e.speaker)}" loading="eager" decoding="async" onerror="this.src='assets/mascots/eva_normal.webp'" />
        </button>
      </section>
    `}function cg(e){return e.line?.state||r.evaRuntime?.presenceState||(e.isAutonomy?"speak":"wait_choice")}function dg(e){const t=["eva-vn-sprite"],n=cg(e);return["speak","soften","warning"].includes(n)&&t.push("is-speaking"),(["react","warning"].includes(n)||Date.now()-Number(r.evaRuntime?.lastVisualChangeAt||0)<1400)&&t.push("is-reacting"),n==="quiet"&&t.push("is-quiet"),t.join(" ")}function jk(e){const t=String(e||"").trim();return t?(t.match(/[^.!?。！？]+[.!?。！？]?/g)||[t]).map(s=>s.trim()).filter(Boolean):[]}function ug(e,t=""){const n=jk(e),a=`eva-dialogue-text ${r.evaRuntime?.textRevealSkippedLineId===t?"is-skipped":""}`,o=n.length?n.map((l,c)=>`<span class="eva-line-piece" style="--i:${c}">${i(l)}</span>`).join(" "):i(e);return`<p class="${a}" data-action="eva-dialogue-skip" data-line-id="${g(t)}">${o}</p>`}function Sk(){ge(),pr(),fa(),Z();const e=wy(),t=e.node,n=un()||e.bg||gr(t.background),s=e.sprite||e.spriteSrc||Ps(e.spriteId||Ln(t.sprite)),a=Vn(),o=Wn(),l=Array.isArray(t.choices)?t.choices:[],c=cg(e),d=e.line?.id||t.id||"eva_dialogue";return`
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

        ${Ok()}
        ${Kk(e)}
        <article class="eva-vn-scene ${e.isAutonomy?"is-autonomous":""} is-${g(c)}" data-eva-state="${g(c)}" data-eva-mood="${g(e.mood||zt().mood)}" data-eva-emotion="${g(e.emotion||"calm")}" style="--eva-bg:${g(_d(n.file))}; --eva-bg-fallback:${g(_d("assets/bg/bg_study_hub.webp"))}">
          <div class="eva-vn-bg" aria-hidden="true"></div>
          <button class="eva-sprite-button" type="button" data-action="eva-click" aria-label="${g(b(t.speaker||{ru:"Ева",en:"Eva"}))}">
            <img class="${g(dg(e))}" src="${g(s)}" alt="${g(b(t.speaker||{ru:"Ева",en:"Eva"}))}" onerror="this.src='assets/mascots/eva_normal.webp'" />
          </button>
          ${xk(e)}
          <div class="eva-dialogue-box">
            <div class="eva-dialogue-meta">
              <strong>${i(b(t.speaker||{ru:"Ева",en:"Eva"}))}</strong>
              <span>${e.isAutonomy?`${i(o.badge)} · `:""}${i(b(n.title||{}))}</span>
            </div>
            ${ug(b(t.text||{}),d)}
            ${e.isAutonomy?Dk(a):`
              <div class="eva-choice-grid">
                ${l.map((u,m)=>`
                  <button class="btn ${m===0?"primary":"ghost"}" type="button" data-action="eva-room-choice" data-index="${m}">
                    ${i(b(u.text||{}))}
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

        ${r.evaRoomShopOpen?Ck():""}
      </section>
    `}function Ck(){const e=Vn();return`
      <aside class="eva-shop-panel customization-shop-panel" role="dialog" aria-label="${g(e.shop)}">
        ${pg({closable:!0})}
      </aside>
    `}function xk(e={}){const t=Nk(e);return t?`
      <div class="eva-room-decoration deco-${g(t.id)}" aria-label="${g(Bt(t))}">
        <img src="${g(t.asset||t.preview)}" alt="" loading="lazy" />
      </div>
    `:""}function Nk(e={}){const t=e.decoration||te().currentDecoration||r.customization?.selected?.decoration||r.customization?.selected?.frame,n=Se(t);return!n||n.type!=="decoration"||!Ut(n.id)?null:n}function pg(e={}){const t=Hn(),n=Tk(),s=Be().filter(a=>Ut(a.id)).length;return`
      <div class="custom-shop">
        <div class="custom-shop-hero">
          <div>
            <span class="pill">${i(t.subtitle)}</span>
            <h2>${i(t.title)}</h2>
            <p>${i(t.hint)}</p>
            <div class="custom-shop-stats">
              <span><b>${r.progress.moonFragments}</b> Moon</span>
              <span><b>${s}</b>/${Be().length} ${i(t.ownedShort)}</span>
            </div>
          </div>
          ${e.closable?`<button class="icon-btn" type="button" data-action="eva-room-shop-close" aria-label="${g(Vn().close)}">✕</button>`:""}
        </div>
        <div class="custom-shop-tabs" role="tablist" aria-label="${g(t.categories)}">
          ${Lk().map(a=>`
            <button class="${r.shopFilters.category===a.id?"is-active":""}" type="button" data-action="shop-category" data-category="${g(a.id)}">
              ${i(b({ru:a.title_ru,en:a.title_en}))}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls">
          ${Ak().map(a=>`
            <button class="${r.shopFilters.view===a.id?"is-active":""}" type="button" data-action="shop-filter" data-filter="${g(a.id)}">
              ${i(a.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls custom-shop-sort">
          ${Ik().map(a=>`
            <button class="${r.shopFilters.sort===a.id?"is-active":""}" type="button" data-action="shop-sort" data-sort="${g(a.id)}">
              ${i(a.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-grid">
          ${n.map(Rk).join("")||`<article class="empty-state"><h3>${i(t.empty)}</h3></article>`}
        </div>
        <div class="custom-shop-history">
          ${Nf({limit:6})}
        </div>
      </div>
    `}function Lk(){return r.customizationCatalog?.categories?.length?r.customizationCatalog.categories:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}]}function Ak(){const e=p()==="ru";return[{id:"all",title:e?"Все":"All"},{id:"available",title:e?"Доступные":"Available"},{id:"owned",title:e?"Купленные":"Owned"},{id:"new",title:e?"Новые":"New"}]}function Ik(){const e=p()==="ru";return[{id:"featured",title:e?"Рекомендовано":"Featured"},{id:"price",title:e?"По цене":"By price"},{id:"rarity",title:e?"По редкости":"By rarity"}]}function Tk(){const e=r.shopFilters.category||"all",t=r.shopFilters.view||"all",n={common:1,rare:2,epic:3,legendary:4,mythic:5};let s=Be().filter(a=>e==="all"||a.type===e);return t==="available"&&(s=s.filter(a=>Ag(a)==="available")),t==="owned"&&(s=s.filter(a=>Ut(a.id))),t==="new"&&(s=s.filter(a=>!r.customization?.seen?.includes(a.id))),r.shopFilters.sort==="price"&&(s=[...s].sort((a,o)=>a.price-o.price)),r.shopFilters.sort==="rarity"&&(s=[...s].sort((a,o)=>(n[o.rarity]||0)-(n[a.rarity]||0)||a.price-o.price)),s}function Rk(e){const t=Ag(e),n=Hn(),s=n.status[t]||t,a=Ay(e),o=t==="available"?`<button class="btn primary" type="button" data-action="shop-buy" data-id="${g(e.id)}">${i(n.buy)}</button>`:t==="owned"?`<button class="btn" type="button" data-action="shop-select" data-id="${g(e.id)}">${i(n.select)}</button>`:t==="selected"?`<button class="btn warning" type="button" data-action="shop-clear-item" data-id="${g(e.id)}">${i(n.remove)}</button>`:`<button class="btn" type="button" disabled>${i(n.unavailable)}</button>`;return`
      <article class="custom-shop-card type-${g(e.type)} is-${g(t)} rarity-${g(e.rarity)}" data-item-id="${g(e.id)}" data-shop-status="${g(t)}">
        <div class="custom-shop-preview">
          <img src="${g(Pk(e))}" alt="${g(Bt(e))}" loading="lazy" onerror="this.onerror=null;this.src='assets/logo.webp';this.closest('.custom-shop-card').classList.add('is-missing')" />
          <span class="rarity-badge">${i(Ek(e.rarity))}</span>
        </div>
        <div class="custom-shop-card-body">
          <div class="custom-shop-title-row">
            <strong>${i(Bt(e))}</strong>
            <span class="status-badge">${i(s)}</span>
          </div>
          ${e.stars?`<div class="custom-shop-stars" aria-label="${g(`${e.stars} stars`)}">${i("★".repeat(Math.max(1,Math.min(5,Number(e.stars)||1))))}</div>`:""}
          <p>${i(_k(e))}</p>
          ${e.type==="outfit"&&gg(e)?`<blockquote class="custom-shop-phrase">${i(gg(e))}</blockquote>`:""}
          ${a?`<small class="custom-shop-unlock">${i(a)}</small>`:""}
          <div class="custom-shop-price">
            <span>${e.price?`${e.price} Moon`:n.free}</span>
            <small>${i(Mk(e.type))}</small>
          </div>
          ${o}
        </div>
      </article>
    `}function Hn(){return p()==="ru"?{title:"Магазин кастомизации",subtitle:"Flash Kanji Custom",hint:"Фоны, образы Евы, декор, темы и эффекты за Moon Fragments.",categories:"Категории магазина",ownedShort:"куплено",buy:"Купить",select:"Выбрать",remove:"Убрать",selected:"Выбран",unavailable:"Недоступно",free:"Бесплатно",locked:"Предмет пока недоступен.",notEnough:"Не хватает Moon Fragments.",bought:"Куплено: {item}",selectedToast:"Выбрано: {item}",empty:"Нет предметов по этому фильтру.",status:{selected:"Выбран",owned:"Куплено",available:"Доступно",locked:"Закрыто"}}:{title:"Customization Shop",subtitle:"Flash Kanji Custom",hint:"Backgrounds, Eva outfits, room decor, themes, and effects for Moon Fragments.",categories:"Shop categories",ownedShort:"owned",buy:"Buy",select:"Select",remove:"Remove",selected:"Selected",unavailable:"Unavailable",free:"Free",locked:"This item is not available yet.",notEnough:"Not enough Moon Fragments.",bought:"Bought: {item}",selectedToast:"Selected: {item}",empty:"No items match this filter.",status:{selected:"Selected",owned:"Owned",available:"Available",locked:"Locked"}}}function Bt(e){return p()==="en"?e.title_en||e.title_ru||e.id:e.title_ru||e.title_en||e.id}function _k(e){return p()==="en"?e.description_en||e.description_ru||"":e.description_ru||e.description_en||""}function Pk(e){return e?.preview||e?.asset||"assets/logo.webp"}function gg(e){return p()==="en"?e.phrase_en||e.phrase_ru||"":e.phrase_ru||e.phrase_en||""}function Ek(e){return{common:(p()==="ru","Common"),rare:(p()==="ru","Rare"),epic:(p()==="ru","Epic"),legendary:(p()==="ru","Legendary"),mythic:(p()==="ru","Mythic")}[e]||e}function Mk(e){const t=p()==="ru";return{background:t?"Фон":"Background",outfit:t?"Образ":"Outfit",decoration:t?"Декор":"Decoration",theme:t?"Тема":"Theme",effect:t?"Эффект":"Effect"}[e]||e}function Kk(e){Vn();const t=Wn(),n=te(),s=e.bg||un(),a=hg(e.spriteId||r.progress.selectedEvaSprite),o=Se(r.customization?.selected?.effect),l=Se(e.decoration||n.currentDecoration),c=Fk(e.mood||n.mood),d=Op();return`
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
          <span>${i(b(s.title||{}))}</span>
          <span>${i(b(a?.title||{ru:"Ева",en:"Eva"}))}</span>
          ${l?`<span>${i(Bt(l))}</span>`:""}
          ${o?`<span class="eva-active-effect-chip">${i(Bt(o))}<button type="button" class="eva-active-effect-clear" data-action="shop-clear-effect" data-id="${g(o.id)}" aria-label="${g(p()==="ru"?"Убрать эффект":"Remove effect")}">✕</button></span>`:""}
        </div>
      </aside>
    `}function Dk(e){const t=Wn(),n=ao();return n?.id?`
        <div class="eva-question-box">
          <span class="pill">${i(t.question)}</span>
          <strong>${i(b(n.text))}</strong>
          <div class="eva-choice-grid">
            ${n.options.map(s=>`
              <button class="btn ${s.id===n.options[0]?.id?"primary":"ghost"}" type="button" data-action="eva-question-answer" data-option="${g(s.id)}">
                ${i(b(s.text))}
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
    `}function Wn(){return p()==="ru"?{badge:"Ева рядом",status:"Ева держит присутствие в комнате",hint:"Она помнит паузы, выбирает тон по контексту и реагирует открытыми образами без лишнего шума.",mood:"Настроение",quiz:"Вопросы",quizStreak:"Серия",question:"Вопрос Евы"}:{badge:"Eva nearby",status:"Eva keeps presence in the room",hint:"She remembers gaps, chooses tone from context, and reacts with unlocked looks without extra noise.",mood:"Mood",quiz:"Questions",quizStreak:"Streak",question:"Eva's question"}}function Fk(e){const n=p()==="ru"?{neutral:"Ровное настроение",focused:"Собрана",soft:"Мягче обычного",strict:"Строгая",tired:"Немного устала",happy:"Довольна прогрессом",serious:"Серьёзна",mystic:"Лунное настроение",cyber:"Анализирует",travel:"Вспоминает дороги",quiet:"Молчит рядом",curious:"Заинтересована",close:"Близость",proud:"Гордится тобой",worried:"Беспокоится",reserved:"Держит дистанцию"}:{neutral:"Steady mood",focused:"Focused",soft:"Softer than usual",strict:"Strict",tired:"A little tired",happy:"Pleased with progress",serious:"Serious",mystic:"Moonlit mood",cyber:"Analyzing",travel:"Thinking of old roads",quiet:"Quiet nearby",curious:"Interested",close:"Close",proud:"Proud of you",worried:"Worried",reserved:"Reserved"};return n[e]||n.neutral}function Ok(){const e=zt(),t=Vn(),n=t.moods[e.mood]||t.moods.neutral,s=[["warmth",t.warmth,e.warmth],["trust",t.trust,e.trust],["discipline",t.discipline,e.discipline],["curiosity",t.curiosity,e.curiosity]];return`
      <aside class="eva-relationship-panel" aria-label="${g(t.relationship)}">
        <div class="eva-relationship-head">
          <span>${i(t.relationship)}</span>
          <strong>${i(n)}</strong>
        </div>
        <div class="eva-relationship-grid">
          ${s.map(([a,o,l])=>`
            <div class="eva-relationship-stat eva-stat-${a}">
              <div><span>${i(o)}</span><strong>${Math.round(l)}</strong></div>
              <i><b style="width:${de(l,0,100)}%"></b></i>
            </div>
          `).join("")}
        </div>
      </aside>
    `}function Vn(){return p()==="ru"?{back:"На главную",shop:"Магазин Евы",close:"Закрыть",shopHint:"Покупай комнаты и образы Евы за Moon Fragments.",buy:"Купить",select:"Выбрать",selected:"Выбран",free:"Открыто",restart:"Начать диалог заново",study:"К уроку",review:"К повтору",notEnough:"Не хватает Moon Fragments.",bought:"Фон открыт.",selectedToast:"Фон выбран.",reward:"Ева дала Moon Fragments.",roomShopTitle:"Комнаты",spriteShopTitle:"Образы Евы",spriteBought:"Образ Евы открыт.",spriteSelected:"Образ Евы выбран.",autonomyBadge:"Ева рядом",autonomyShortOn:"Ева · авто",autonomyShortOff:"Ева · тихо",autonomyOn:"Ева рядом",autonomyOff:"Ева рядом",autonomyHint:"Ева сама выбирает реплики, настроение, комнату и образ без спойлеров FIS.",autonomySettingsHint:"Самостоятельные реплики Евы в комнате, без раскрытия сюжета.",enableAutonomy:"Ева рядом",disableAutonomy:"Ева рядом",changeFrequency:"Статус Евы",frequency:"Частота",frequencies:{quiet:"тихо",normal:"нормально",active:"часто"},roomMode:"Комната",outfitMode:"Образ",roomModeButton:"Комната Евы",outfitModeButton:"Образ Евы",auto:"авто",manual:"ручной",nextAutonomyLine:"Ещё мысль.",storyDialogue:"Вернуться к диалогу.",relationship:"Отношения с Евой",warmth:"Тепло",trust:"Доверие",discipline:"Дисциплина",curiosity:"Интерес",moreTalk:"Ещё реплика",anotherTalk:"Другая тема",moods:{neutral:"Ровное настроение",close:"Близость",proud:"Гордится тобой",curious:"Заинтересована",worried:"Беспокоится",reserved:"Держит дистанцию"}}:{back:"Home",shop:"Eva Shop",close:"Close",shopHint:"Buy rooms and Eva looks with Moon Fragments.",buy:"Buy",select:"Select",selected:"Selected",free:"Unlocked",restart:"Restart dialogue",study:"Study",review:"Review",notEnough:"Not enough Moon Fragments.",bought:"Background unlocked.",selectedToast:"Background selected.",reward:"Eva gave you Moon Fragments.",roomShopTitle:"Rooms",spriteShopTitle:"Eva Looks",spriteBought:"Eva look unlocked.",spriteSelected:"Eva look selected.",autonomyBadge:"Eva nearby",autonomyShortOn:"Eva · auto",autonomyShortOff:"Eva · quiet",autonomyOn:"Eva nearby",autonomyOff:"Eva nearby",autonomyHint:"Eva chooses lines, mood, room, and look by herself without FIS spoilers.",autonomySettingsHint:"Independent Eva lines in her room, without story spoilers.",enableAutonomy:"Eva nearby",disableAutonomy:"Eva nearby",changeFrequency:"Eva status",frequency:"Frequency",frequencies:{quiet:"quiet",normal:"normal",active:"active"},roomMode:"Room",outfitMode:"Look",roomModeButton:"Eva room",outfitModeButton:"Eva look",auto:"auto",manual:"manual",nextAutonomyLine:"Another thought.",storyDialogue:"Back to dialogue.",relationship:"Relationship with Eva",warmth:"Warmth",trust:"Trust",discipline:"Discipline",curiosity:"Interest",moreTalk:"Another line",anotherTalk:"Different topic",moods:{neutral:"Steady mood",close:"Close",proud:"Proud of you",curious:"Interested",worried:"Worried",reserved:"Reserved"}}}function ge(){var t,n,s,a,o,l,c,d,u,m,h,f,S;(t=r.progress).seenCards||(t.seenCards={}),(n=r.progress).seenKanji||(n.seenKanji={}),(s=r.progress).unlockedBackgrounds||(s.unlockedBackgrounds=["bg_study_hub"]),r.progress.unlockedBackgrounds.includes("bg_study_hub")||r.progress.unlockedBackgrounds.unshift("bg_study_hub"),(a=r.progress).selectedEvaRoomBackground||(a.selectedEvaRoomBackground="bg_study_hub"),(o=r.progress).unlockedEvaSprites||(o.unlockedEvaSprites=["idle","default"]),["idle","default"].forEach(C=>{r.progress.unlockedEvaSprites.includes(C)||r.progress.unlockedEvaSprites.push(C)}),(l=r.progress).selectedEvaSprite||(l.selectedEvaSprite="idle");const e=Ap(Np(),r.progress.evaAutonomy||{});if((c=r.progress).evaAutonomy||(c.evaAutonomy={}),Object.keys(r.progress.evaAutonomy).forEach(C=>delete r.progress.evaAutonomy[C]),Object.assign(r.progress.evaAutonomy,e),r.evaRuntime||(r.evaRuntime=cn()),(d=r.progress).evaRoomDialogueProgress||(d.evaRoomDialogueProgress={currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]}),(u=r.progress.evaRoomDialogueProgress).currentNode||(u.currentNode="intro"),(m=r.progress.evaRoomDialogueProgress).rewardsClaimed||(m.rewardsClaimed={}),(h=r.progress.evaRoomDialogueProgress).visited||(h.visited={}),r.progress.evaRoomDialogueProgress.lineHistory=Array.isArray(r.progress.evaRoomDialogueProgress.lineHistory)?r.progress.evaRoomDialogueProgress.lineHistory.slice(-24):[],(f=r.progress).evaRoomQuiz||(f.evaRoomQuiz={answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]}),(S=r.progress.evaRoomQuiz).rewarded||(S.rewarded={}),r.progress.evaRoomQuiz.history=Array.isArray(r.progress.evaRoomQuiz.history)?r.progress.evaRoomQuiz.history.slice(0,40):[],!r.progress.evaRelationship)r.progress.evaRelationship=Ol();else{const C=Lp(Ol(),r.progress.evaRelationship);Object.keys(r.progress.evaRelationship).forEach(x=>delete r.progress.evaRelationship[x]),Object.assign(r.progress.evaRelationship,C)}}function zt(){return ge(),r.progress.evaRelationship}function pr(){if(!r.progress||!r.cards.length)return!1;ge();const e=r.progress.evaRelationship;let t=!1;const n=ce(),s=e.lastDecayDate||n,a=Math.max(0,fs(s,n));if(a>0){const N=r.progress.streak?.lastStudyDate,z=N?fs(N,n):a+1;!N||z>1?(Ce({warmth:-Math.min(10,a*1.2),trust:-Math.min(14,a*1.6),discipline:-Math.min(22,a*3.4)},"study_gap",{silent:!0}),t=!0):(r.progress.streak?.current||0)>0&&(Ce({discipline:.8,trust:.4},"streak_kept",{silent:!0}),t=!0),e.lastDecayDate=n}const o=fd(),l={learned:o.learned,mastered:o.mastered,reviews:hd(),lessons:Object.keys(r.progress.lessonCompletions||{}).length,streak:Math.max(r.progress.streak?.current||0,r.progress.streak?.best||0),wrong:r.progress.totalWrong||0,writing:r.progress.writingPractice?.completed||0,sentence:Object.keys(r.progress.sentencePractice?.completed||{}).length},c=e.lastKnown||{},d=N=>Math.max(0,Number(l[N]||0)-Number(c[N]||0)),u={},m=d("reviews"),h=d("learned"),f=d("mastered"),S=d("lessons"),C=d("streak"),x=d("wrong"),L=d("writing"),k=d("sentence");return m&&(u.discipline=(u.discipline||0)+Math.min(18,m*.08),u.trust=(u.trust||0)+Math.min(10,m*.04)),h&&(u.trust=(u.trust||0)+Math.min(20,h*.5),u.curiosity=(u.curiosity||0)+Math.min(16,h*.35)),f&&(u.trust=(u.trust||0)+Math.min(16,f*1.2),u.warmth=(u.warmth||0)+Math.min(8,f*.5)),S&&(u.warmth=(u.warmth||0)+Math.min(12,S*2),u.discipline=(u.discipline||0)+Math.min(10,S*1.5)),C&&(u.discipline=(u.discipline||0)+Math.min(15,C*3),u.warmth=(u.warmth||0)+Math.min(8,C)),L&&(u.curiosity=(u.curiosity||0)+Math.min(10,L*.8)),k&&(u.trust=(u.trust||0)+Math.min(10,k*.8)),x&&(u.discipline=(u.discipline||0)-Math.min(6,x*.12)),Object.keys(u).length&&(Ce(u,"learning_progress",{silent:!0}),t=!0),e.lastKnown=l,mg(),t}function Ce(e={},t="relationship",n={}){ge();const s=r.progress.evaRelationship;return["warmth","trust","discipline","curiosity"].forEach(a=>{typeof e[a]>"u"||(s[a]=Jo(de(Number(s[a]||0)+Number(e[a]||0),0,100),1))}),mg(),n.silent||(s.history.unshift({at:new Date().toISOString(),reason:t,delta:e}),s.history=s.history.slice(0,40)),s}function mg(){const e=r.progress.evaRelationship;return e.discipline<25?e.mood="worried":e.trust<30?e.mood="reserved":e.warmth>=76&&e.trust>=68?e.mood="close":(r.progress.streak?.current||0)>=7&&e.discipline>=58?e.mood="proud":e.curiosity>=68?e.mood="curious":e.mood="neutral",e.mood}function _s(){const e=r.customization?.selected?.outfit||r.progress?.shop?.equipped?.outfit||null,n=(Se(e)||Bn(e)||Nn(e))?.spriteId||r.progress?.selectedEvaSprite||"idle";return r.evaSprites?.[n]&&fg(n)?n:"idle"}function Bk(e){const t=String(e||""),n=Nn(t),s=n?.spriteId||n?.legacySpriteId||"";return!t||!s?"":t===s||t.startsWith(`${s}_`)?s:""}function zk(e){const t=String(e||"");if(!t)return t;const n=_s(),s=Bk(t);return s&&n&&s!==n?n:t}function fg(e){const t=String(e||"");if(!t)return!1;if(lc(t))return!0;const n=Nn(t);return n?!!(n.defaultOwned||Ut(n.id)):!1}function Uk(e){const t=String(e||"");return new Set(["normal","neutral","idle","default","welcome","happy","soft_smile","gentle_smile","sad","angry","shy","think","thinking","focus","observe","observation","explain","teach","ready","reading","serious","strict","determined","tired","surprised","cold","proud","approve","confirm","achievement","reward","review","correct","levelup","writing","calm","tea","speaking"]).has(t)}function Ln(e,t=null){const n=e&&e!=="relationship"?String(e):null,s=_s(),a=zk(n),o=Uk(a),l=a&&!o?a:s,c=r.evaRuntime?.mood||zt().mood,d=t||(o?a:null)||r.evaRuntime?.emotion||{close:"shy",proud:"approve",curious:"thinking",worried:"sad",reserved:"idle",neutral:"idle"}[c]||"idle",u=Wk(d),m=[...new Set([l,s].filter(Boolean))];return[...m.flatMap(S=>Jk(S,u)),...m,...u,"idle","default"].filter(Boolean).find(S=>r.evaSprites?.[S]&&(lc(S)||!l||fg(l)))||"idle"}function Jk(e,t=[]){const n=String(e||"");if(!n)return[];const s=t.map(o=>`${n}_${o}`).filter(o=>r.evaSprites?.[o]),a=Nn(n);return!a||a.defaultOwned||s.length<=1?s:Gk(s)}function Gk(e=[]){const t=[...new Set(e.filter(Boolean))];if(t.length<=1)return t;const n=dl%t.length;return[...t.slice(n),...t.slice(0,n)]}function qk(){const e=_s(),t=Nn(e);return!t||t.defaultOwned?!1:Object.keys(r.evaSprites||{}).some(n=>n.startsWith(`${e}_`))}function Hk(){cl&&window.clearInterval(cl),cl=window.setInterval(()=>{const e=Math.floor(Date.now()/6e4);e!==dl&&(dl=e,!(document.hidden||!qk())&&(r.route==="home"||r.route==="eva-room")&&P())},3e4)}function Wk(e){const t=String(e).toLowerCase(),n={normal:["soft_smile","neutral","observe","idle"],neutral:["neutral","idle","soft_smile"],idle:["neutral","idle"],welcome:["soft_smile","observe","neutral","idle"],happy:["happy","soft_smile","gentle_smile","encourage","approve","proud"],soft_smile:["soft_smile","gentle_smile","happy","shy","approve","neutral"],approve:["approve","confirm","correct","confident","ready","soft_smile"],correct:["correct","confirm","approve","confident","ready","soft_smile"],proud:["proud","confident","approve","determined","soft_smile"],achievement:["achievement","legendary","mythic","reward","proud","approve","ready"],levelup:["levelup","legendary","mythic","determined","proud","ready"],reward:["reward","blessing","soft_smile","happy","approve"],review:["review","reading","ready","explain","think","neutral"],explain:["explain","teach","review","think","reading"],think:["think","thinking","analyze","observe","reading","explain","serious"],thinking:["think","thinking","analyze","observe","reading","explain","serious"],observe:["observe","serious","think","neutral"],ready:["ready","determined","walk","neutral"],serious:["serious","strict","determined","neutral"],strict:["strict","command","angry","serious"],angry:["angry","strict","command","serious"],sad:["sad","tired","cold","serious","neutral"],tired:["tired","cold","neutral"],shy:["shy","soft_smile","gentle_smile","happy"],surprised:["surprised","think","observe"],writing:["writing","teach","explain","ready","think"],focus:["think","observe","ready","serious"],calm:["neutral","idle","soft_smile"]},s=Vk(t);return[...new Set([...n[t]||[],t,s,"neutral","idle"].filter(Boolean))]}function Vk(e){return{neutral:"idle",idle:"idle",normal:"idle",welcome:"happy",happy:"happy",soft_smile:"shy",thinking:"think",serious:"think",strict:"angry",sad:"sad",shy:"shy",surprised:"think",approve:"approve",explain:"review",ready:"review",tired:"idle",observe:"think",special:"levelup",proud:"proud",calm:"idle"}[e]||"idle"}function te(){return ge(),r.progress.evaAutonomy}function Qi(){const e=te();return e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",!0}function Yi(){const e=Be().filter(t=>t.type==="background").map(t=>({id:t.id,title:{ru:t.title_ru,en:t.title_en},file:t.asset||t.preview,price:t.price,defaultUnlocked:t.defaultOwned}));return e.length?e:r.evaBackgrounds?.length?r.evaBackgrounds:[{id:"bg_study_hub",title:{ru:"Учебная комната",en:"Study Hub"},file:"assets/bg/bg_study_hub.webp",price:0,defaultUnlocked:!0}]}function gr(e){return Yi().find(t=>t.id===e)||Yi()[0]}function un(){ge();const e=uv({catalogItems:Be(),owned:r.customization?.owned||r.progress.unlockedBackgrounds||[],customizationSelected:r.customization?.selected?.background,progressEquipped:r.progress?.shop?.equipped?.background,progressSelected:r.progress.selectedEvaRoomBackground});return gr(e)||gr("bg_study_hub")}function Xk(e){const t=gr(e);return t?t.defaultUnlocked||t.price===0||r.progress.unlockedBackgrounds.includes(t.id):!1}function Qk(){const e=Be().filter(n=>n.type==="outfit").map(n=>({id:n.spriteId||n.id,shopId:n.id,title:{ru:n.title_ru,en:n.title_en},price:n.price,defaultUnlocked:n.defaultOwned})),t=[{id:"idle",title:{ru:"Ева: спокойная",en:"Eva: Calm"},price:0,defaultUnlocked:!0},{id:"default",title:{ru:"Ева: классика",en:"Eva: Classic"},price:0,defaultUnlocked:!0},{id:"think",title:{ru:"Ева: размышление",en:"Eva: Thinking"},price:25},{id:"happy",title:{ru:"Ева: тепло",en:"Eva: Warm"},price:35},{id:"approve",title:{ru:"Ева: наставник",en:"Eva: Mentor"},price:35},{id:"review",title:{ru:"Ева: повторение",en:"Eva: Review"},price:40},{id:"proud",title:{ru:"Ева: гордость",en:"Eva: Proud"},price:45},{id:"shy",title:{ru:"Ева: ближе",en:"Eva: Closer"},price:55},{id:"sad",title:{ru:"Ева: тревога",en:"Eva: Concerned"},price:30},{id:"reward",title:{ru:"Ева: награда",en:"Eva: Reward"},price:50},{id:"achievement",title:{ru:"Ева: достижение",en:"Eva: Achievement"},price:60},{id:"levelup",title:{ru:"Ева: уровень",en:"Eva: Level Up"},price:65}].filter(n=>r.evaSprites?.[n.id]&&!e.some(s=>s.id===n.id));return[...e,...t]}function hg(e){return Qk().find(t=>t.id===e)}function lc(e){if(!e)return!1;const t=hg(e);return!!(t?.defaultUnlocked||t?.price===0||r.progress.unlockedEvaSprites?.includes(e)||r.progress.shop?.owned?.includes(`eva_sprite:${e}`))}function Zi(e){ge();const t=r.evaRuntime?.mood||An(Ke()),n={close:["bg_cafe","bg_park","bg_eva_room","bg_study_hub"],proud:["bg_practice_room","bg_classroom","bg_moon_room","bg_study_hub"],curious:["bg_library","bg_cyber_room","bg_shrine","bg_study_hub"],worried:["bg_study_hub","bg_evening_street","bg_winter_city"],reserved:["bg_library","bg_silent_road","bg_study_hub"],focused:["bg_classroom","bg_practice_room","bg_study_hub"],soft:["bg_cafe","bg_park","bg_study_hub"],strict:["bg_classroom","bg_silent_road","bg_study_hub"],tired:["bg_cafe","bg_library","bg_study_hub"],happy:["bg_park","bg_cafe","bg_moon_room","bg_study_hub"],serious:["bg_silent_road","bg_library","bg_study_hub"],mystic:["bg_moon_room","bg_shrine","bg_study_hub"],cyber:["bg_cyber_room","bg_library","bg_study_hub"],travel:["bg_silent_road","bg_evening_street","bg_school_street","bg_study_hub"],quiet:["bg_library","bg_study_hub"],neutral:["bg_study_hub","bg_classroom","bg_library","bg_silent_road"]},s=[...e?.preferredBackgrounds||[],...n[t]||n.neutral],a=Yi().filter(l=>Xk(l.id));return s.map(l=>a.find(c=>c.id===l)).find(Boolean)||He(a)||un()}function eo(e){ge();const t=r.evaRuntime?.mood||An(Ke()),n=_s(),s={close:["casual_fox","librarian_eva","shy","idle","approve"],proud:["academy_instructor","moon_priestess","study_session","approve","proud","review"],curious:["librarian_eva","cyber_eva","think","review","idle"],worried:["winter_traveler","fis_mentor","sad","idle","think"],reserved:["silent_road","fis_mentor","idle","default"],focused:["study_session","academy_instructor","review","approve","idle"],soft:["librarian_eva","casual_fox","shy","approve","idle"],strict:["academy_instructor","fis_mentor","angry","think","idle"],tired:["winter_traveler","idle","default"],happy:["happy","proud","approve","casual_fox"],serious:["fis_mentor","silent_road","think","idle"],mystic:["moon_priestess","shrine_maiden","achievement","reward"],cyber:["cyber_eva","think","review"],travel:["silent_road","winter_traveler","fis_mentor"],quiet:["fis_mentor","idle","default"],neutral:["fis_mentor","study_session","librarian_eva","idle","think","review","default"]};return[n,e?.sprite,...s[t]||s.neutral].filter(Boolean).find(o=>lc(o)&&r.evaSprites?.[o])||r.progress.selectedEvaSprite||"idle"}function Yk(e){return e==="generated_line"?Zk():r.evaRoomDialogues.find(t=>t.id===e)||r.evaRoomDialogues[0]||{id:"intro",background:"bg_study_hub",sprite:"relationship",speaker:{ru:"Ева",en:"Eva"},text:{ru:"С возвращением.",en:"Welcome back."},choices:[]}}function Zk(){ge();const e=Vn(),t=r.progress.evaRoomDialogueProgress.generatedLine||Ng("adaptive");return r.progress.evaRoomDialogueProgress.generatedLine=t,{id:"generated_line",background:t.background||un().id||"bg_study_hub",sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[{text:{ru:e.moreTalk,en:e.moreTalk},randomLine:t.category||"adaptive",relationshipDelta:{warmth:.6,curiosity:.4}},{text:{ru:e.anotherTalk,en:e.anotherTalk},next:"intro",relationshipDelta:{warmth:.2}},{text:{ru:e.study,en:e.study},next:"intro",route:"learn",relationshipDelta:{discipline:1.2,trust:.5}}]}}function to(){return Array.isArray(r.evaRoomLines)?r.evaRoomLines:[]}function ey(e="auto"){const t=r.evaPresence?.categoryMap?.[e];return Array.isArray(t)?t:[]}function vg(e){return typeof e>"u"||e===null?[]:Array.isArray(e)?e.map(String):[String(e)]}function cc(e,t=Ke()){const n=e?.conditions||{},s=(o,l)=>{const c=vg(l);return!c.length||c.includes(String(o))},a=(o,l)=>{const c=vg(l);return!c.length||c.some(d=>String(o||"").includes(d)||d===String(o))};return!(!s(t.route,n.route)||!s(t.timeOfDay,n.timeOfDay)||!a(t.activeSkin,n.activeSkin)||!a(t.activeBackground,n.activeBackground)||typeof n.minGapDays<"u"&&Number(t.daysSinceReturn||0)<Number(n.minGapDays)||typeof n.maxGapDays<"u"&&Number(t.daysSinceReturn||0)>Number(n.maxGapDays)||typeof n.minDueReviews<"u"&&Number(t.dueReviews||0)<Number(n.minDueReviews)||typeof n.maxDueReviews<"u"&&Number(t.dueReviews||0)>Number(n.maxDueReviews)||typeof n.minStreak<"u"&&Number(t.streak||0)<Number(n.minStreak)||typeof n.maxStreak<"u"&&Number(t.streak||0)>Number(n.maxStreak)||typeof n.minTalkOverStudy<"u"&&Number(t.timesUserChoseTalkOverStudy||0)<Number(n.minTalkOverStudy))}function ty(e=[],t="auto",n=Ke()){const s=zt(),a=r.evaRuntime?.memory||Kt(),o=new Set([...te().recentLineIds||[],...a.recentLineIds||[],te().currentLine?.id].filter(Boolean)),l=e.filter(d=>{if(!d||!b(d.text)||o.has(d.id)||!io(d,s)||!cc(d,n))return!1;const u=Array.isArray(d.moods)?d.moods:[];return!u.length||u.includes(s.mood)||u.includes(n.mood)});if(l.length){const d=l.map(m=>({line:m,score:Object.keys(m.conditions||{}).length+(m.state==="return_after_gap"?2:0)})),u=Math.max(...d.map(m=>m.score));return He(d.filter(m=>m.score===u).map(m=>m.line))}const c=e.filter(d=>!d||!b(d.text)||!io(d,s)?!1:cc(d,n));return He(c.length?c:e)}function ny(e="auto",t=Ke()){const n=r.evaPresence;if(!n)return null;const s=[];["room_opened","return","render","render_fallback"].includes(e)&&s.push(...n.entryStates||[]),s.push(...n.eventLines?.[e]||[]);const a=ty(s,e,t);return a?{...a,category:a.category||e,text:a.text,relationshipDelta:a.relationshipDelta||{}}:null}function no(e,t="auto",n=Ke()){if(!r.evaRuntime||!e?.id)return;r.evaRuntime.memory=Ns(Kt(),r.evaRuntime.memory||{});const s=r.evaRuntime.memory;s.recentLineIds=[e.id,...(s.recentLineIds||[]).filter(o=>o!==e.id)].slice(0,30);const a=e.category||t;s.recentTopics=[a,...(s.recentTopics||[]).filter(o=>o!==a)].slice(0,20),s.lastRoute=n.route||r.route,s.lastInteractionDate=ce(),s.lastKnownMood=r.evaRuntime.mood||zt().mood,(["warning","answer_wrong","idle_timeout"].includes(t)||String(e.category||"").includes("warning"))&&(s.lastWarningAt=new Date().toISOString()),(["answer_correct","lesson_complete","level_up","streak_up"].includes(t)||String(e.category||"").includes("reward"))&&(s.lastPraiseAt=new Date().toISOString())}function wg(e){if(!r.evaRuntime)return;r.evaRuntime.memory=Ns(Kt(),r.evaRuntime.memory||{});const t=r.evaRuntime.memory;t.lastRoute=r.route,["timer","idle_timeout"].includes(e.type)||(t.lastInteractionDate=ce()),e.type==="answer_wrong"&&(t.recentProblemCluster=e.payload?.cardId||"reading"),e.type==="room_opened"&&(t.preferredEvaRoomBackground=r.progress?.selectedEvaRoomBackground||t.preferredEvaRoomBackground)}function sy(){return{quiet:12e4,normal:hs(45e3,12e4),active:45e3}}function ry(){ll&&window.clearInterval(ll),ll=window.setInterval(ay,5e3)}function mr(){const e=te(),t=sy()[e.frequency]||hs(45e3,12e4);e.nextSpeakAt=Date.now()+t}function ay(){if(document.hidden||!r.progress||!r.evaRuntime)return!1;const e=Ke(),t=r.evaRuntime,n=te(),s=Date.now();let a=!1;if(e.idleMs>9e4&&(!t.lastEvent||t.lastEvent.type!=="idle_timeout")&&s-Number(t.lastPhraseAt||0)>6e4)return we("idle_timeout",{idleMs:e.idleMs}),!0;if(s-Number(t.lastEmotionChangeAt||0)>=Number(t.cooldowns?.emotion||18e3)){const o=An(e),l=so(e,o);(o!==t.mood||l!==t.emotion)&&(t.mood=o,t.emotion=l,n.mood=o,n.emotion=l,t.lastEmotionChangeAt=s,t.cooldowns.emotion=hs(15e3,3e4),a=!0)}return r.route==="eva-room"&&s>=Number(n.nextSpeakAt||0)&&(Math.random()<.14?(t.mood="quiet",t.emotion="observe",t.presenceState="quiet",n.mood="quiet",n.emotion="observe",mr(),a=!0):ca("timer",{context:e})&&(a=!0)),a&&(Ls(),r.route==="eva-room"&&(T(),P())),a}function Ke(e={}){const t=r.progress?Pn():{},n=r.evaRuntime||cn(),s=Ns(Kt(),n.memory||{}),a=new Date().getHours();return Ul(),{route:r.route,hour:a,timeOfDay:a<5?"late_night":a<11?"morning":a<18?"day":a<23?"evening":"night",correctToday:Number(t.reviews||0)-Number(t.mistakes||0),mistakesToday:Number(t.mistakes||0),reviewsToday:Number(t.reviews||0),learnedToday:Number(t.learned||0),streak:Number(r.progress?.streak?.current||0),level:Number(r.progress?.level||1),moonFragments:Number(r.progress?.moonFragments||0),ownedSkins:n.ownedSkins||[],ownedBackgrounds:n.ownedBackgrounds||[],ownedEffects:n.ownedEffects||[],ownedDecorations:n.ownedDecorations||[],activeSkin:n.activeSkin||r.progress?.selectedEvaSprite||"idle",activeBackground:n.activeBackground||r.progress?.selectedEvaRoomBackground||"bg_study_hub",memory:s,daysSinceReturn:Number(s.daysSinceReturn||0),recentTopics:s.recentTopics||[],recentLineIds:s.recentLineIds||[],timesUserChoseTalkOverStudy:Number(s.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(s.timesUserReturnedAfterGap||0),idleMs:Date.now()-Number(n.lastPlayerActionAt||Date.now()),sessionMs:Date.now()-ml,lastEvent:n.lastEvent,dueReviews:r.progress?Qe():0,shopOpen:!!r.evaRoomShopOpen,...e}}function An(e=Ke()){const t=e.lastEvent?.type;return t==="level_up"||t==="lesson_complete"||t==="streak_up"?"happy":t==="item_bought"&&String(e.lastEvent?.payload?.itemId||"").includes("moon")?"mystic":e.shopOpen||t==="shop_opened"||t==="item_bought"?"curious":e.route==="learn"||e.route==="review"||e.dueReviews>0?"focused":e.mistakesToday>=4?e.correctToday>e.mistakesToday?"soft":"strict":e.hour>=23||e.hour<5?e.ownedEffects?.includes("effect_moon_particles")?"mystic":"quiet":e.sessionMs>35*60*1e3?"tired":e.activeSkin==="cyber_eva"||e.ownedSkins?.includes("cyber_eva")?"cyber":e.activeSkin==="silent_road"||e.ownedSkins?.includes("silent_road")?"travel":e.route==="eva-room"&&e.streak>=7?"soft":"neutral"}function so(e=Ke(),t=An(e),n=e.lastEvent?.type||"auto"){if(n==="answer_correct")return He(["approve","happy","soft_smile"]);if(n==="answer_wrong")return He(["thinking","strict","serious"]);if(n==="lesson_complete")return"approve";if(n==="level_up")return"special";if(n==="item_bought"||n==="shop_opened")return"observe";if(n==="user_clicked_eva")return He(["curious","shy","observe"]);if(n==="idle_timeout")return"observe";const s={neutral:["idle","observe"],focused:["ready","explain","thinking"],soft:["soft_smile","approve"],strict:["strict","serious"],tired:["tired","idle"],happy:["happy","approve"],serious:["serious","thinking"],mystic:["special","observe"],cyber:["observe","thinking"],travel:["ready","observe"],quiet:["observe","idle"],curious:["thinking","surprised","observe"]};return He(s[t]||s.neutral)}function ca(e="auto",t={}){if(!r.progress||!Qi()||!t.force&&r.route!=="eva-room")return!1;const n=te(),s=Date.now();if(!t.force&&n.currentLine?.text&&n.nextSpeakAt&&s<Number(n.nextSpeakAt))return!1;const a=t.context||Ke({lastEvent:{type:e,payload:t.eventPayload||{}}}),o=An(a),l=bg(e)||dc(e);if(!l)return!1;r.evaRuntime||(r.evaRuntime=cn()),r.evaRuntime.mood=o;const c=l.emotion||so(a,o,e),d=Zi(l),u=Ln(eo(l),c),m=uc(l),h=pc(l),f=Sg(a,l);return n.currentLine={id:l.id,category:l.category||"mood",text:l.text,sprite:u,background:d.id,decoration:m,effect:h,emotion:c,state:l.state||"speak",at:new Date().toISOString(),reason:e},n.currentQuestion=f,n.currentDecoration=m,n.currentEffect=h,n.mood=o,n.emotion=c,n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=u,n.recentLineIds=[l.id,...(n.recentLineIds||[]).filter(S=>S!==l.id)].slice(0,32),r.evaRuntime||(r.evaRuntime=cn()),Object.assign(r.evaRuntime,{mood:o,emotion:c,presenceState:l.state||"speak",currentPhrase:n.currentLine,pendingQuestion:f,currentSkin:u,currentBackground:d.id,currentDecoration:m,currentEffect:h,activeSkin:u,activeBackground:d.id,lastPhraseAt:s,lastEmotionChangeAt:s,lastQuestionAt:f?s:Number(r.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:s,textRevealSkippedLineId:null,cooldowns:{...r.evaRuntime.cooldowns,emotion:hs(15e3,3e4),phrase:hs(45e3,12e4),question:hs(3*6e4,7*6e4),visual:hs(10*6e4,15*6e4)}}),no(l,e,a),gc(u,d.file),mr(),Ce(l.relationshipDelta||{warmth:.1},`eva_autonomy:${l.id}`,{silent:!0}),Ls(),kn(),!0}function bg(e){const t=ny(e,Ke({lastEvent:{type:e}}));if(t)return t;const s={answer_correct:[{ru:"Верно.",en:"Correct."},{ru:"Хорошо.",en:"Good."},{ru:"Да. Именно так.",en:"Yes. Exactly."},{ru:"Ты начинаешь видеть структуру.",en:"You are starting to see the structure."},{ru:"Неплохо. Продолжай.",en:"Not bad. Continue."}],answer_wrong:[{ru:"Не совсем.",en:"Not quite."},{ru:"Посмотри ещё раз.",en:"Look again."},{ru:"Не угадывай. Разбери.",en:"Do not guess. Break it down."},{ru:"Запомни не ответ, а причину.",en:"Remember the reason, not just the answer."},{ru:"Это место стоит повторить.",en:"This part is worth repeating."}],user_clicked_eva:[{ru:"Да?",en:"Yes?"},{ru:"Что-то нужно?",en:"Need something?"},{ru:"Я слушаю.",en:"I'm listening."},{ru:"Не отвлекайся слишком часто.",en:"Don't distract yourself too often."},{ru:"Если нужен совет — спроси.",en:"If you need advice, ask."}],idle_timeout:[{ru:"Ты всё ещё здесь?",en:"Still here?"},{ru:"Сделаем короткий шаг?",en:"One short step?"},{ru:"Я подожду.",en:"I'll wait."},{ru:"Не исчезай надолго.",en:"Don't vanish for too long."}],manual:[{ru:"Один шаг всё ещё шаг.",en:"One step is still a step."},{ru:"Я рядом. Продолжай.",en:"I'm nearby. Continue."},{ru:"Кандзи не убегут. Но лучше не заставлять их ждать.",en:"The kanji won't run. Better not keep them waiting."},{ru:"Сначала форма. Потом смысл.",en:"Shape first. Meaning after."}],lesson_complete:[{ru:"Урок закрыт. След оставлен.",en:"Lesson complete. A mark is left."},{ru:"Хорошая работа. Теперь закрепи.",en:"Good work. Now reinforce it."}],level_up:[{ru:"Уровень выше. Дорога стала длиннее, не легче.",en:"Level up. The road is longer, not easier."},{ru:"Ты стал крепче. Это заметно.",en:"You got steadier. It shows."}],item_bought:[{ru:"Новая вещь. Посмотрим, приживётся ли.",en:"A new item. We'll see if it settles in."},{ru:"Комната меняется. Ты тоже.",en:"The room changes. So do you."}],room_opened:[{ru:"Я здесь.",en:"I'm here."},{ru:"Ты снова здесь. Это говорит больше, чем обещание.",en:"You're here again. That says more than a promise."},{ru:"Продолжай. Я посмотрю.",en:"Continue. I'll watch."}]}[e]||[],a=new Set(te().recentLineIds||[]),o=s.filter(c=>!a.has(`${e}_${Je(`${c.ru||c.en}`)}`)),l=He(o.length?o:s);return l?{id:`${e}_${Je(`${l.ru||l.en}`)}`,category:e,text:l,relationshipDelta:{}}:null}function kg(){const e=te(),t=e.currentLine?.id;t&&(e.recentLineIds=[t,...(e.recentLineIds||[]).filter(n=>n!==t)].slice(0,32))}function iy(e="auto"){const t=zt(),n=new Date().getHours(),s=Qe(),a=Pn(),o=[];return o.push(...ey(e)),(e==="return"||!t.lastInteractionDate&&r.progress.appOpens>1)&&o.push("fis_return","return"),e==="room_opened"&&o.push("fis_room","fis_observation","room"),(e==="shop_opened"||e==="item_bought"||e==="item_equipped")&&o.push("fis_room","fis_reward","reward"),e==="answer_correct"&&o.push("fis_focus","fis_short","study"),e==="answer_wrong"&&o.push("fis_guard","fis_focus","mood"),(e==="user_clicked_eva"||e==="eva_click")&&o.push("fis_observation","fis_short","mood"),e==="idle_timeout"&&o.push("fis_return","fis_short","return"),e==="user_answered_eva_question"&&o.push("fis_focus","fis_observation"),e==="lesson_start"&&o.push("fis_study","study","fis_focus"),(e==="lesson_complete"||e==="level_up"||e==="streak_up")&&o.push("fis_reward","reward","fis_streak"),(e==="writing_complete"||e==="sentence_complete"||e==="advanced_mode")&&o.push("fis_observation","fis_focus"),(n>=23||n<5)&&o.push("fis_night","night"),s>=8&&o.push("fis_review","review"),(a.reviews||0)===0&&o.push("fis_study","study"),(r.progress.streak?.current||0)>=3&&o.push("fis_streak","streak"),(r.progress.rewardHistory?.length||r.rewardModal)&&o.push("fis_reward","reward"),t.mood==="curious"&&o.push("fis_observation","fis_focus","fis_room","hint","room"),(t.mood==="worried"||t.mood==="reserved")&&o.push("fis_guard","fis_return","mood","return"),o.push("fis_observation","fis_road","fis_guard","fis_focus","fis_short","mood","study","short"),[...new Set(o)]}function dc(e="auto"){ge(),pr();const t=zt(),n=Ke({lastEvent:{type:e}}),s=te().currentLine?.id,a=new Set([s,...te().recentLineIds||[],...r.evaRuntime?.memory?.recentLineIds||[]].filter(Boolean)),o=Array.isArray(r.evaAutonomyLines)?r.evaAutonomyLines:[],l=iy(e),c=(u,m=!1)=>o.filter(h=>{if(!(h.category===u||(h.tags||[]).includes(u))||!m&&a.has(h.id)||!io(h,t)||!cc(h,n))return!1;const S=Array.isArray(h.moods)?h.moods:[];return!S.length||S.includes(t.mood)});for(const u of l){const m=c(u);if(m.length)return He(m)}for(const u of l){const m=c(u,!0);if(m.length)return He(m)}const d=o.filter(u=>!a.has(u.id));return He(d.length?d:o)}function we(e,t={},n={}){if(!e)return;fa(),n.skipAchievements||Z({silent:!0});const s={type:$g(e),payload:t||{},at:Date.now()};yg(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}Object.assign(window,{dispatchEvaEvent:we});function yg(e={}){if(!e.type||!r.progress)return;ge(),r.evaRuntime||(r.evaRuntime=cn());const t={type:$g(e.type),payload:e.payload||{},at:e.at||Date.now()};r.evaRuntime.lastEvent=t,r.evaRuntime.eventHistory=[t,...r.evaRuntime.eventHistory||[]].slice(0,80),r.evaRuntime.recentEvents=[t,...r.evaRuntime.recentEvents||[]].slice(0,80),wg(t),["timer","idle_timeout"].includes(t.type)||(r.evaRuntime.lastPlayerActionAt=Date.now());const n=oy(t.type,t.payload);Object.keys(n).length&&Ce(n,`eva_event:${t.type}`,{silent:!0});const s=te();kg(),s.nextSpeakAt=0;const a=ca(t.type,{force:!0,eventPayload:t.payload});Ls(),T(),a&&r.route==="eva-room"&&P()}function $g(e){const t=String(e||"");return t==="eva_click"?"user_clicked_eva":t}function oy(e,t={}){const s={...{room_opened:{warmth:.2,curiosity:.2},shop_opened:{curiosity:.4},item_bought:{warmth:.5,curiosity:.8},item_equipped:{curiosity:.3},eva_click:{warmth:.35,curiosity:.2},user_clicked_eva:{warmth:.35,curiosity:.2},answer_correct:{trust:.35,discipline:.2},answer_wrong:{discipline:-.45,trust:-.15,curiosity:.15},lesson_start:{discipline:.25},lesson_complete:{warmth:1.1,trust:1.2,discipline:1.1},level_up:{warmth:1,curiosity:.8},streak_up:{discipline:.8,trust:.4},writing_complete:{curiosity:.5,discipline:.3},sentence_complete:{trust:.45,curiosity:.3},advanced_mode:{curiosity:.5,discipline:.4}}[e]||{}};return e==="answer_wrong"&&t.comboLost&&(s.discipline=(s.discipline||0)-.25),s}function uc(e){const t=r.evaRuntime?.mood||An(Ke()),n={close:["deco_tea_table","deco_lantern","deco_moon_frame"],proud:["deco_kanji_board","deco_bookshelf","deco_gold_accent"],curious:["deco_bookshelf","deco_kanji_board","deco_tea_table"],worried:["deco_lantern","deco_moon_frame"],reserved:["deco_lantern","deco_bookshelf"],focused:["deco_kanji_board","deco_bookshelf"],soft:["deco_tea_table","deco_lantern"],strict:["deco_kanji_board","deco_scroll"],tired:["deco_tea_table","deco_lantern"],happy:["deco_golden_accent","deco_moon_frame"],serious:["deco_scroll","deco_lantern"],mystic:["deco_moon_frame","deco_lantern"],cyber:["deco_kanji_board","deco_bookshelf"],travel:["deco_scroll","deco_lantern"],quiet:["deco_lantern","deco_bookshelf"],neutral:["deco_bookshelf","deco_tea_table","deco_lantern"]},s=[...e?.preferredDecorations||[],...n[t]||n.neutral];return jg("decoration",s)}function pc(e){const t=r.evaRuntime?.mood||An(Ke()),n={close:["effect_golden_glow","effect_sakura_particles"],proud:["effect_golden_glow","effect_moon_particles"],curious:["effect_cyber_hud","effect_sakura_particles"],worried:["effect_snow_particles","effect_dust_particles"],reserved:["effect_dust_particles","effect_snow_particles"],focused:["effect_lesson_shine","effect_golden_glow"],soft:["effect_sakura_particles","effect_golden_glow"],strict:["effect_level_frame","effect_dust_particles"],tired:["effect_snow_particles","effect_dust_particles"],happy:["effect_golden_glow","effect_moon_particles"],serious:["effect_dust_particles","effect_level_frame"],mystic:["effect_moon_particles","effect_golden_glow"],cyber:["effect_cyber_hud","effect_lesson_shine"],travel:["effect_dust_particles","effect_snow_particles"],quiet:["effect_moon_particles","effect_snow_particles"],neutral:["effect_golden_glow","effect_moon_particles"]},s=[...e?.preferredEffects||[],...n[t]||n.neutral];return jg("effect",s)||"none"}function jg(e,t=[]){const n=Be().filter(a=>a.type===e&&Ut(a.id));return(t.map(a=>n.find(o=>o.id===a)).find(Boolean)||He(n))?.id||null}function Sg(e=Ke(),t=null){const n=te();if(n.currentQuestion?.id)return n.currentQuestion;if(r.evaRuntime?.pendingQuestion?.id)return n.currentQuestion=r.evaRuntime.pendingQuestion,n.currentQuestion;const s=e.lastEvent?.type||"auto",a=["user_clicked_eva","room_opened","manual"].includes(s),o=Date.now(),l=Number(r.evaRuntime?.lastQuestionAt||r.evaRuntime?.lastQuestion?.at||0),c=Number(r.evaRuntime?.cooldowns?.question||hs(3*6e4,7*6e4));if(!a&&o-l<c||!a&&Math.random()>.34)return null;const d=new Set(r.evaRuntime?.questionHistory?.slice(0,6).map(h=>h.id)),u=Cg(s).filter(h=>!d.has(h.id)),m=He(u.length?u:Cg(s));return m?{...m,at:new Date().toISOString()}:null}function Cg(e="auto"){const t=Sb();if(t.length<2)return[];const n=new Set((r.evaRuntime?.questionHistory||[]).slice(0,10).map(o=>o.cardId).filter(Boolean)),s=`${ce()}:${e}:${r.progress?.totalCorrect||0}:${r.progress?.totalWrong||0}`;return[...t].sort((o,l)=>{const c=n.has(String(o.id))?1:0,d=n.has(String(l.id))?1:0;return c-d||Je(`${s}:${o.id}`)-Je(`${s}:${l.id}`)}).slice(0,18).map(o=>ly(o,t,e)).filter(Boolean)}function ly(e,t,n="auto"){const s=Ye(e,"ru"),a=Ye(e,"en");if(!s||!a)return null;const o=cy(e,t);if(!o.length)return null;const l=String(e.jlpt||"").toUpperCase(),c=l||(p()==="ru"?"твоих карточек":"your cards"),d=xg(e,e,!0),u=[d,...o.map(m=>xg(m,e,!1))].sort((m,h)=>Je(`${n}:${e.id}:${m.id}`)-Je(`${n}:${e.id}:${h.id}`));return{id:`kanji_meaning_${e.id}_${Je(`${s}:${a}`)}`,kind:"kanji_meaning",cardId:String(e.id),kanji:e.kanji,jlpt:l,answerId:d.id,answerText:{ru:s,en:a},text:{ru:`Что значит кандзи ${e.kanji} из ${c}?`,en:`What does the ${c} kanji ${e.kanji} mean?`},options:u,at:new Date().toISOString()}}function cy(e,t){const n=ro(Ye(e,"ru")),s=ro(Ye(e,"en")),a=String(e.jlpt||"").toUpperCase(),l=[...t.filter(c=>{if(!c?.id||String(c.id)===String(e.id)||c.kanji===e.kanji)return!1;const d=ro(Ye(c,"ru")),u=ro(Ye(c,"en"));return!(!d||!u||d===n||u===s)})].sort((c,d)=>{const u=String(c.jlpt||"").toUpperCase()===a?0:1,m=String(d.jlpt||"").toUpperCase()===a?0:1;return u-m||Je(`${e.id}:${c.id}`)-Je(`${e.id}:${d.id}`)});return l.slice(0,Math.min(3,l.length))}function xg(e,t,n){const s=Ye(e,"ru"),a=Ye(e,"en"),o=Ye(t,"ru"),l=Ye(t,"en");return{id:`meaning_${Je(`${t.id}:${e.id}:${s}:${a}`)}`,cardId:String(e.id),text:{ru:s,en:a},correct:n,delta:n?{trust:.7,discipline:.35,curiosity:.2}:{discipline:-.35,curiosity:.15},reply:n?{ru:`Верно. ${t.kanji}: ${o}.`,en:`Correct. ${t.kanji}: ${l}.`}:{ru:`Не совсем. ${t.kanji}: ${o}.`,en:`Not quite. ${t.kanji}: ${l}.`}}}function ro(e){return String(e||"").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US").replace(/[.,;:!?\s]+/g," ").trim()}function dy(e){ge();const t=ao();t?.id&&uy(t.id,e.dataset.option)}function uy(e,t){ge();const n=te(),s=ao();if(!s?.id||s.id!==e)return;const a=s.options?.find(h=>h.id===t);if(!a)return;const l=s.options?.some(h=>h.correct||h.id===s.answerId)?!!(a.correct||a.id===s.answerId):null;r.evaRuntime||(r.evaRuntime=cn()),r.evaRuntime.pendingQuestion=null,n.currentQuestion=null,Ce(a.delta||(l===!1?{discipline:-.2}:{warmth:.2}),`eva_question:${s.id}`),s.kind==="kanji_meaning"&&gy(s,a,l);const c={id:s.id,kind:s.kind||"dialogue",cardId:s.cardId||null,kanji:s.kanji||"",option:a.id,correct:l,at:new Date().toISOString()};r.evaRuntime.lastQuestion={...c,at:Date.now()},r.evaRuntime.lastQuestionAt=Date.now(),r.evaRuntime.pendingQuestion=null,r.evaRuntime.questionHistory=[c,...r.evaRuntime.questionHistory||[]].slice(0,40);const d=Zi({}),u=l===!1?"thinking":"approve",m=Ln(eo({sprite:u}),u);n.currentLine={id:`question_reply_${s.id}_${a.id}`,category:"question_reply",text:a.reply||py(s,l),sprite:m,background:d.id,emotion:u,state:"react",at:new Date().toISOString(),reason:"question_answer"},r.evaRuntime.presenceState="react",r.evaRuntime.textRevealSkippedLineId=null,no(n.currentLine,"question_answer",Ke({lastEvent:{type:"question_answer"}})),n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=m,mr(),vy(s,a,l),Ls(),T(),D(l===!1?"answer_wrong":l===!0?"answer_correct":"notification_soft"),P()}function ao(){const e=te(),t=e.currentQuestion?.id?e.currentQuestion:r.evaRuntime?.pendingQuestion;return t?.id?(e.currentQuestion=t,r.evaRuntime||(r.evaRuntime=cn()),r.evaRuntime.pendingQuestion=t,t):null}function py(e,t){return e.kind==="kanji_meaning"&&e.kanji&&e.answerText?t?{ru:`Верно. ${e.kanji}: ${e.answerText.ru||b(e.answerText)}.`,en:`Correct. ${e.kanji}: ${e.answerText.en||b(e.answerText)}.`}:{ru:`Не совсем. ${e.kanji}: ${e.answerText.ru||b(e.answerText)}.`,en:`Not quite. ${e.kanji}: ${e.answerText.en||b(e.answerText)}.`}:{ru:"Принято.",en:"Noted."}}function gy(e,t,n){const s=Op(),a=my(e);a&&na(a,"eva_room_quiz"),s.answered=Number(s.answered||0)+1,s.correct=Number(s.correct||0)+(n?1:0),s.wrong=Number(s.wrong||0)+(n?0:1),s.streak=n?Number(s.streak||0)+1:0,s.history=[{id:e.id,cardId:e.cardId||null,kanji:e.kanji||"",jlpt:e.jlpt||"",selected:t.id,correct:n,answer:b(e.answerText||{}),at:new Date().toISOString()},...s.history||[]].slice(0,40);const o=Pn();o.reviews=Number(o.reviews||0)+1,n?(r.progress.totalCorrect=Number(r.progress.totalCorrect||0)+1,a&&fy(a),a&&!s.rewarded[String(a.id)]&&(s.rewarded[String(a.id)]=new Date().toISOString(),H(2,s.streak>0&&s.streak%3===0?1:0,`eva_room_quiz:${a.id}`))):(r.progress.totalWrong=Number(r.progress.totalWrong||0)+1,o.mistakes=Number(o.mistakes||0)+1,a&&hy(a)),o.minutes=Jo(Number(o.reviews||0)*.75+Number(o.learned||0)*1.25,1),r.progress.daily[ce()]=o,be(),rd({silent:!0}),Z()}function my(e){const t=String(e?.cardId||""),n=String(e?.kanji||""),s=String(e?.jlpt||"").toUpperCase();return(t?oe(t):null)||Bp().find(a=>{if(!a)return!1;const o=t&&String(a.id)===t,l=n&&a.kanji===n,c=!s||String(a.jlpt||"").toUpperCase()===s;return o||l&&c})||(n?r.cards.find(a=>a.kanji===n):null)||null}function fy(e){const t=String(e?.jlpt||"").toUpperCase(),n=Ql().find(s=>s.level===t);n&&n.markStudied(e.kanji,e.id)}function hy(e){const t=String(e?.jlpt||"").toUpperCase(),n=Ql().find(s=>s.level===t);n&&n.markDifficult(e.kanji,e.id)}function vy(e,t,n){if(!r.evaRuntime)return;const s={type:"user_answered_eva_question",payload:{questionId:e.id,answerId:t.id,cardId:e.cardId||null,kanji:e.kanji||"",correct:n},at:Date.now()};r.evaRuntime.lastEvent=s,r.evaRuntime.eventHistory=[s,...r.evaRuntime.eventHistory||[]].slice(0,80),r.evaRuntime.recentEvents=[s,...r.evaRuntime.recentEvents||[]].slice(0,80),wg(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}function wy(){ge(),Qi()&&ca("render");const e=Lg();let t=te().currentLine;if(Qi()&&!t?.text&&r.evaAutonomyLines.length){const a=dc("render_fallback")||r.evaAutonomyLines[0],o=Zi(a),l=Ke({lastEvent:{type:"render_fallback"}}),c=An(l),d=uc(a),u=pc(a),m=a.emotion||so(l,c,"render_fallback"),h=Ln(eo(a),m);Ps(h),t={id:a.id,category:a.category||"mood",text:a.text,sprite:h,background:o.id,decoration:d,effect:u,emotion:m,state:a.state||"observe",at:new Date().toISOString()},te().currentLine=t,te().currentDecoration=d,te().currentEffect=u,te().mood=c,te().emotion=m,te().lastSpokeAt=t.at,te().lastRoomId=o.id,te().lastSprite=h,r.evaRuntime.presenceState=t.state,r.evaRuntime.textRevealSkippedLineId=null,no(a,"render_fallback",l),gc(h,o.file),mr(),T()}if(Qi()&&t?.text){const a=gr(t.background)||un(),o=Ln(t.sprite||"relationship",t.emotion||te().emotion);return{isAutonomy:!0,line:t,bg:a,spriteId:o,sprite:Ps(o),decoration:t.decoration||te().currentDecoration,effect:t.effect||te().currentEffect,mood:te().mood||zt().mood,emotion:t.emotion||te().emotion||"calm",node:{id:"eva_autonomy_line",background:a.id,sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[]}}}const n=gr(e.background)||un(),s=Ln(e.sprite,te().emotion);return{isAutonomy:!1,line:null,bg:n,spriteId:s,sprite:Ps(s),decoration:te().currentDecoration,effect:te().currentEffect,mood:zt().mood,emotion:te().emotion||"calm",node:e}}function Ng(e="adaptive"){ge(),pr();const t=zt(),n=new Set(r.progress.evaRoomDialogueProgress.lineHistory||[]),s=to().filter(d=>{const u=Array.isArray(d.tags)?d.tags:[];return!(e==="adaptive"||d.category===e||u.includes(e))||!io(d,t)?!1:!n.has(d.id)}),a=to().filter(d=>e==="adaptive"||d.category===e||(d.tags||[]).includes(e)),o=s.length?s:a.length?a:to(),l=He(o)||{id:"fallback",category:"adaptive",text:{ru:"Я рядом. Давай сделаем хотя бы один честный шаг.",en:"I'm here. Let's make one honest step."},sprite:"relationship",background:un().id},c=r.progress.evaRoomDialogueProgress.lineHistory||[];return r.progress.evaRoomDialogueProgress.lineHistory=[l.id,...c.filter(d=>d!==l.id)].slice(0,24),{id:l.id,category:l.category||e,text:l.text||{ru:String(l.ru||""),en:String(l.en||l.ru||"")},sprite:l.sprite||"relationship",background:l.background||un().id,relationshipDelta:l.relationshipDelta||{}}}function io(e,t){return[["minWarmth",t.warmth,(s,a)=>s>=a],["maxWarmth",t.warmth,(s,a)=>s<=a],["minTrust",t.trust,(s,a)=>s>=a],["maxTrust",t.trust,(s,a)=>s<=a],["minDiscipline",t.discipline,(s,a)=>s>=a],["maxDiscipline",t.discipline,(s,a)=>s<=a],["minCuriosity",t.curiosity,(s,a)=>s>=a],["maxCuriosity",t.curiosity,(s,a)=>s<=a]].every(([s,a,o])=>typeof e[s]>"u"||o(a,Number(e[s])))}function Lg(){ge();const e=Yk(r.progress.evaRoomDialogueProgress.currentNode);return r.progress.evaRoomDialogueProgress.visited[e.id]=new Date().toISOString(),e}function Ps(e){return r.evaSprites?.[e]||r.evaSprites?.default||"assets/mascots/eva_normal.webp"}function gc(e,t=""){[Ps(e),t].filter(Boolean).forEach(n=>{try{const s=new Image;s.src=n,s.decode&&s.decode().catch(()=>null)}catch(s){console.warn("Eva visual preload skipped.",s)}})}function by(e){const n=Lg().choices?.[Number(e.dataset.index||0)];if(!n)return;ge();const s=r.progress.evaRelationship;s.conversationCount=Number(s.conversationCount||0)+1,s.totalDialogueChoices=Number(s.totalDialogueChoices||0)+1,s.lastInteractionAt=new Date().toISOString(),s.lastInteractionDate=ce(),ky(n),Ce(n.relationshipDelta||{warmth:.4,curiosity:.2},"dialogue_choice");const a=Number(n.rewardMoonFragments||0),o=n.rewardOnceKey;if(a>0&&o&&!r.progress.evaRoomDialogueProgress.rewardsClaimed[o]&&(r.progress.evaRoomDialogueProgress.rewardsClaimed[o]=new Date().toISOString(),H(0,a,`eva_room:${o}`),G(Vn().reward)),n.randomLine){const l=Ng(n.randomLine);Ce(l.relationshipDelta||{},`eva_line:${l.id}`,{silent:!0}),r.progress.evaRoomDialogueProgress.generatedLine=l,r.progress.evaRoomDialogueProgress.currentNode="generated_line"}else r.progress.evaRoomDialogueProgress.generatedLine=null,r.progress.evaRoomDialogueProgress.currentNode=n.next||"intro";if(n.openShop&&(r.evaRoomShopOpen=!0),T(),n.route){aa(n.route);return}D(n.openShop?"menu_open":"page_turn"),P()}function ky(e={}){if(!r.evaRuntime)return;r.evaRuntime.memory=Ns(Kt(),r.evaRuntime.memory||{});const t=r.evaRuntime.memory,n=!!(e.randomLine&&!e.route),s=["learn","review"].includes(e.route);n&&(t.timesUserChoseTalkOverStudy=Number(t.timesUserChoseTalkOverStudy||0)+1),s&&(t.timesUserChoseTalkOverStudy=Math.max(0,Number(t.timesUserChoseTalkOverStudy||0)-1)),t.lastInteractionDate=ce(),t.lastRoute=r.route}function yy(){ge(),r.progress.evaRoomDialogueProgress.currentNode="intro",r.progress.evaRoomDialogueProgress.generatedLine=null,r.evaRuntime&&(r.evaRuntime.presenceState="wait_choice",r.evaRuntime.textRevealSkippedLineId=null),T(),D("page_turn"),P()}function $y(e){oo(e)}function jy(e){lo(e)}function Sy(e){const t=Se(e)||Bn(e)||Nn(e);t&&oo(t.id)}function Cy(e){const t=Se(e)||Bn(e)||Nn(e);t&&lo(t.id)}function Ut(e){r.customization||xs();const t=Se(e)||Bn(e);return!!(t?.defaultOwned||t?.price===0||r.customization?.owned?.includes(t?.id||e))}function mc(e){return e?e.type==="background"?"background":e.type==="outfit"?"outfit":e.type==="theme"?"theme":e.type==="effect"?"effect":e.type==="decoration"?"decoration":e.type:null}function xy(e){const t=mc(e);return!!(t&&r.customization?.selected?.[t]===e.id)}function Ag(e){return!e||!fc(e)?"locked":xy(e)?"selected":Ut(e.id)?"owned":"available"}function Ny(e={}){const t=[r.customization?.selected?.effect,e.effect,r.evaRuntime?.currentEffect,r.evaRuntime?.currentLine?.effect,r.progress?.evaAutonomy?.currentEffect,te().currentEffect];for(const n of t){const s=zn(n);if(!s||s==="none")continue;const a=Se(s);if(a?.type==="effect"&&Ut(a.id))return a.id}return null}function Ig(e=null){const t=zn(e||r.customization?.selected?.effect),n=Se(t);return!n||n.type!=="effect"||r.customization?.selected?.effect!==n.id?!1:(r.customization.selected.effect=null,r.progress?.evaAutonomy&&(r.progress.evaAutonomy.currentEffect=null),r.evaRuntime?.currentEffect===n.id&&(r.evaRuntime.currentEffect="none"),Zr(),ir(),T(),kn(),D("menu_close"),G(p()==="ru"?"Эффект убран.":"Effect removed."),P(),!0)}function Ly(e=null){const t=zn(e||r.customization?.selected?.effect||r.customization?.selected?.decoration||r.customization?.selected?.frame||r.customization?.selected?.outfit||r.customization?.selected?.background||r.customization?.selected?.theme),n=Se(t);if(!n)return!1;if(n.type==="effect")return Ig(n.id);r.customization||xs();const s=mc(n);if(!s)return!1;const a=On().selected;return s==="background"?r.customization.selected.background=a.background:s==="outfit"?r.customization.selected.outfit=a.outfit:s==="theme"?r.customization.selected.theme=a.theme:s==="decoration"&&(r.customization.selected.decoration=a.decoration,r.customization.selected.frame=a.frame),Zr(),ir(),T(),kn(),D("menu_close"),G(p()==="ru"?"Выбор сброшен.":"Selection cleared."),P(),!0}function Ay(e){if(!e?.unlockCondition||fc(e))return"";const t=e.unlockCondition,n=p()==="ru";if(t.type==="achievement"){const s=Gs().find(o=>o.id===t.id),a=s?nd(s):t.id;return n?`Открывается за достижение: ${a}`:`Unlocks after achievement: ${a}`}return t.type==="level"?n?`Открывается на уровне ${t.value}`:`Unlocks at level ${t.value}`:t.type==="streak"?n?`Открывается за серию ${t.value} дн.`:`Unlocks at a ${t.value}-day streak`:""}function fc(e){if(!e?.unlockCondition)return!0;const t=e.unlockCondition;return t.type==="level"?r.progress.level>=Number(t.value||0):t.type==="streak"?r.progress.streak.current>=Number(t.value||0):t.type==="achievement"?!!r.progress.achievements?.[t.id]?.unlockedAt:!0}function oo(e){const t=Se(e);if(!t||(r.customization||xs(),rl.has(t.id)))return;if(!fc(t)){D("purchase_failed"),G(Hn().locked);return}if(rl.add(t.id),window.setTimeout(()=>rl.delete(t.id),0),Ut(t.id)){lo(t.id);return}const n=DI({balance:r.progress.moonFragments,owned:r.customization?.owned||[],itemId:t.id,price:t.price});if(r.progress.moonFragments=n.balance,n.status==="insufficient-funds"){D("purchase_failed"),G(Hn().notEnough),T(),P();return}if(n.status!=="purchased"){D("purchase_failed"),G(Hn().unavailable),T(),P();return}r.customization.owned=n.owned,r.customization.seen=[...new Set([...r.customization.seen||[],t.id])],r.progress.transactions.unshift({at:new Date().toISOString(),reason:`customization:${t.type}:${t.id}`,label:Bt(t),xp:0,coins:-n.price,balance:r.progress.moonFragments}),r.progress.transactions=r.progress.transactions.slice(0,80),Zr(),ir(),T(),D("purchase_success"),D("item_unlock"),we("item_bought",{itemId:t.id,type:t.type,title:Bt(t),price:t.price},{skipAchievements:!0}),G(Hn().bought.replace("{item}",Bt(t))),P()}function lo(e){var s,a,o;const t=Se(e);if(r.customization||xs(),!t||!Ut(t.id))return;const n=mc(t);if(n){if(r.customization.selected[n]=t.id,n==="decoration"&&(r.customization.selected.frame=t.id),t.type==="outfit"&&t.spriteId){r.progress.selectedEvaSprite=t.spriteId,(s=r.progress).evaAutonomy||(s.evaAutonomy={}),r.progress.evaAutonomy.currentLine=null;const l=te();l.currentLine=null,l.lastSprite=t.spriteId,r.evaRuntime&&(r.evaRuntime.currentSkin=t.spriteId,r.evaRuntime.activeSkin=t.spriteId,r.evaRuntime.currentPhrase=null,(a=r.evaRuntime).memory||(a.memory=Kt()),r.evaRuntime.memory.preferredEvaOutfit=t.id)}t.type==="background"&&(r.progress.selectedEvaRoomBackground=t.id,r.evaRuntime&&(r.evaRuntime.currentBackground=t.id,r.evaRuntime.activeBackground=t.id,(o=r.evaRuntime).memory||(o.memory=Kt()),r.evaRuntime.memory.preferredEvaRoomBackground=t.id),r.progress.evaAutonomy.currentLine=null),Zr(),ir(),T(),kn(),D("notification_soft"),we("item_equipped",{itemId:t.id,type:t.type,title:Bt(t)},{skipAchievements:!0}),G(Hn().selectedToast.replace("{item}",Bt(t))),P()}}function Iy(){const e=te();e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",e.nextSpeakAt=0,ca("toggle",{force:!0}),T(),D("notification_soft"),G(Wn().status),P()}function Ty(){const e=te();e.frequency="normal",mr(),T(),D("notification_soft"),P()}function Ry(){const e=te();e.roomMode="auto",e.currentLine=null,T(),D("notification_soft"),P()}function _y(){const e=te();e.outfitMode="auto",e.currentLine=null,T(),D("notification_soft"),P()}function Tg(){const e=te();e.enabled=!0,kg(),e.currentQuestion=null,e.currentLine=null,e.nextSpeakAt=0,Rg("manual"),T(),D("page_turn"),P()}function Rg(e="manual",t={}){const n=bg(e)||dc(e);if(!n)return!1;const s=Ke({lastEvent:{type:e}}),a=An(s),o=n.emotion||so(s,a,e),l=Zi(n),c=Ln(eo(n),o),d=uc(n),u=pc(n),m=te(),h=Date.now(),f=t.allowQuestion===!1?null:Sg(s,n);return m.currentLine={id:n.id,category:n.category||e,text:n.text,sprite:c,background:l.id,decoration:d,effect:u,emotion:o,state:n.state||"speak",at:new Date(h).toISOString(),reason:e},m.currentDecoration=d,m.currentEffect=u,m.mood=a,m.emotion=o,m.lastSpokeAt=m.currentLine.at,m.lastRoomId=l.id,m.lastSprite=c,m.currentQuestion=f,m.recentLineIds=[n.id,...(m.recentLineIds||[]).filter(S=>S!==n.id)].slice(0,32),r.evaRuntime||(r.evaRuntime=cn()),Object.assign(r.evaRuntime,{mood:a,emotion:o,presenceState:n.state||"speak",currentPhrase:m.currentLine,pendingQuestion:f,currentSkin:c,currentBackground:l.id,currentDecoration:d,currentEffect:u,activeSkin:c,activeBackground:l.id,lastPhraseAt:h,lastEmotionChangeAt:h,lastQuestionAt:f?h:Number(r.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:h,textRevealSkippedLineId:null}),no(n,e,s),gc(c,l.file),mr(),Ls(),kn(),!0}function Py(){te().currentLine=null,T(),D("menu_close"),P()}function M(e,t,n,s){return`
      <article class="metric">
        <span>${i(e)}</span>
        <strong>${i(t)}</strong>
        <div class="meter"><i style="width:${de(s,0,100)}%"></i></div>
        <p class="label">${i(n)}</p>
      </article>
    `}function Ey(e){const t=vd(e.id),n=t.filter(d=>J(d.id).state!=="New").length,s=t.filter(d=>J(d.id).state==="Mastered").length,a=!Ge(e),o=Sh(e),l=a?"鎖":t[0]?.kanji||"文",c=E(s,t.length);return`
      <button class="lesson-tile ${a?"is-locked":""} ${Sd(o)}" type="button" id="textbook-lesson-${g(e.id)}" data-action="start-lesson" data-id="${g(e.id)}">
        <span class="lesson-glyph">${i(l)}</span>
        <span>
          <span class="pill">${i(e.jlpt)}</span>
          ${mL(o)}
          <h3>${i(Qa(e))}</h3>
          <p>${i(lA(e))}</p>
          <span class="lesson-meta">
            <span class="pill">${n}/${t.length}</span>
            <span class="pill mastered">${s} ${i(_("mastered"))}</span>
            ${a?`<span class="pill danger-pill">${i(_("unlockedAt"))} ${Ro(e)}</span>`:""}
          </span>
          <span class="meter"><i style="width:${c}%"></i></span>
        </span>
      </button>
    `}function My(e){const t=Sh(e),n=e.id===r.activeLessonId,s=!Ge(e);return`
      <button class="btn ${n?"primary":"ghost"} ${s?"is-disabled":""} ${Sd(t)}" type="button" data-action="select-lesson" data-id="${g(e.id)}" title="${g(Cd(t))}">
        <span>${i(e.jlpt)}</span>
        ${gL(t)}
      </button>
    `}function hc(){const e=String(r.activeLearnJlpt||"all").toUpperCase();return r.lessons.filter(t=>e==="ALL"||String(t.jlpt||"").toUpperCase()===e)}function Ky(){const e=hc();return e.find(t=>t.id===r.activeLessonId)||e.find(t=>Ge(t))||e[0]||r.lessons.find(t=>t.id===r.activeLessonId)||r.lessons.find(t=>Ge(t))||r.lessons[0]||null}function vc(){return F(Ky()?.jlpt)||bn()}function _g(e){if(!e.length)return r.activeLessonId=null,null;const t=e.find(a=>a.id===r.activeLessonId);if(t&&Ge(t))return t;const s=e.find(a=>Ge(a))||e[0];return r.activeLessonId=s?.id||null,s||null}function Dy(e){const t=e.length,n=e.filter(a=>Ge(a)).length,s=["all",...fe];return`
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
    `}function Fy(e){if(!e)return"";const t=e.textbook||e;return`
      <article class="learn-level-panel">
        <div class="learn-level-cover">
          <img src="${g(t.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <span class="pill">${i(t.jlpt||"")}</span>
        </div>
        <div class="learn-level-copy">
          <h3>${i(b(t.displayTitle||t.title||{}))}</h3>
          <p>${i(b(t.description||{}))}</p>
          <div class="tag-row">
            <span class="pill">${i(t.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
            <span class="pill">${i(t.kanjiCount||0)} ${i(_("cardsToday"))}</span>
            <span class="pill">${i(b(t.recommendedCycle||{}))}</span>
          </div>
          <div class="actions">
            <a class="btn primary" href="${g(t.pdfUrl||t.pdfFile||"")}" download="${g((t.pdfFile||t.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(p()==="ru"?"Скачать PDF":"Download PDF")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
          </div>
        </div>
      </article>
    `}function Oy(e){const t=It(e?.jlpt);return`
      <article class="lesson-locked-panel">
        <span class="pill danger-pill">${i(p()==="ru"?"Закрытый уровень":"Level locked")}</span>
        <h2>${i(e?Qa(e):"")}</h2>
        <p>${i(p()==="ru"?`Откроется на уровне ${Ro(e)}.`:`Unlocks at level ${Ro(e)}.`)}</p>
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
    `}function By(){return r.activeLearnView===jn?Vy():r.activeLearnView===sn?Wy():Mg()}function zy(){const e=Ep();if(e.kind==="review"){Gn("review");return}if(r.route==="home"){ra(vc());return}Pg(e.nodeId)}function Pg(e){const t=As(e);if(!t){Is();return}if(Pp(t)==="locked"){G(p()==="ru"?"Сначала закончи предыдущий шаг.":"Finish the previous step first.");return}if(t.id===tr){Gn("review");return}if(t.id===nr){ya("final-test");return}if(t.type==="textbook"){ya(t.id);return}Is(sn,t.id)}function Eg(e){const t=String(e||"");return t&&(oe(t)||r.cards.find(n=>String(n.id)===t))||null}function Uy(){const e=pe();return[{id:"intro-1",kind:"info",eyebrow:e.intro,title:e.introTitle,text:e.introBody,note:e.finishHint},{id:"intro-2",kind:"info",eyebrow:e.route,title:e.nextLesson,text:e.introBridge,note:e.mapHint},{id:"intro-3",kind:"quiz",eyebrow:e.ready,title:e.introQuestion,text:e.introQuestionHint,answer:"review",options:[{value:"review",label:{ru:"В повторение",en:"Into review"}},{value:"memory",label:{ru:"В архив навсегда",en:"Into permanent archive"}},{value:"skip",label:{ru:"Никуда, пока не забудешь",en:"Nowhere, until you forget"}}]}]}function da(e){const t=qt(e);if(!t)return null;const n=gn(t);if(!n.length)return null;const s=Array.isArray(t.sentences)?t.sentences:[],a=n.map((o,l)=>{const c=Wt(o)[0]||null,d=s[l%Math.max(s.length,1)]||s[0]||null,u=c?{jp:c.word||o.kanji,hiragana:c.reading||o.hiragana||"",translation:c.translation||(d?{ru:d.ru||"",en:d.en||""}:"")}:d?{jp:d.jp||o.kanji,hiragana:ee(d.reading||d.hiragana||o.hiragana||""),translation:{ru:d.ru||"",en:d.en||""}}:{jp:o.kanji,hiragana:o.hiragana||"",translation:{ru:K(o),en:K(o)}};return{cardId:o.id,sentence:u}});return{id:t.id,title:t.title,summary:t.goal||t.theme||t.title,objectives:[t.goal,t.theme].filter(Boolean),kanjiIds:n.map(o=>o.id),kanjiBlocks:a,exercises:Ds(t),source:"learning_path"}}function Jy(e){if(e===_e)return Uy();const t=r.learningPathLessonPayloads[e]||da(e);if(!t)return[];const n=pe(),s=[],a=(t.objectives||[]).map(b).filter(Boolean).slice(0,3).join(" • ");return s.push({id:`${e}-overview`,kind:"info",eyebrow:"N5",title:b(t.title),text:b(t.summary),note:a||n.finishHint}),(t.kanjiBlocks||[]).forEach((o,l)=>{const c=Eg(o.cardId);if(!c)return;const d=o.sentence||null;s.push({id:`${e}-kanji-${l+1}`,kind:"kanji",eyebrow:c.jlpt||"N5",title:`${c.kanji} · ${K(c)}`,text:tj(c,{word:d?.jp||c.kanji,reading:d?.hiragana||c.hiragana||""}),note:d?.translation?b(d.translation):"",cardId:c.id,card:c,sentence:d})}),(t.exercises||[]).forEach(o=>{const l=(o.options||[]).map(c=>({value:String(c.value??c.id??c.label??c),label:b(c.label||c.text||c)}));s.push({id:String(o.id||`${e}-quiz-${s.length}`),kind:"quiz",eyebrow:"N5",title:b(o.prompt),text:b(o.promptHint||{ru:"",en:""}),answer:String(o.answer??""),options:l})}),s}function Gy(e,t=null){const n=Jy(e);if(!t||t.mode!=="mistakes"||!t.reviewStepIds?.length)return n;const s=new Set(t.reviewStepIds),a=n.filter(o=>o.kind==="quiz"&&s.has(o.id));return a.length?a:n.filter(o=>o.kind==="quiz")}function qy(e,t=sn,n=[]){const s=Jn(),a=s.activeSession,o=n.map(String).filter(Boolean);return a?.nodeId===e&&a.mode===t&&JSON.stringify(a.reviewStepIds||[])===JSON.stringify(o)?a:(s.activeSession=Pl({nodeId:e,mode:t,stepIndex:0,answers:{},mistakes:[],reviewStepIds:o,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),s.lastUpdatedAt=s.activeSession.updatedAt,T(),s.activeSession)}function ua(e){const t=Hl(),n=t?.nodeId===e?t:qy(e),s=Gy(e,n),a=s.filter(c=>c.kind==="quiz"),o=Object.keys(n.answers||{}).length,l=Math.max(0,Number(n.stepIndex||0));return{session:n,steps:s,quizSteps:a,answeredCount:o,stepIndex:l,currentStep:s[l]||null,isResult:l>=s.length&&s.length>0}}function Hy(e,t,n){var c;const s=Jn(),a=new Date().toISOString(),o=n.filter(d=>d.kind==="quiz"),l=Array.isArray(t.mistakes)&&t.mistakes.length>0;if((c=s.completedNodes)[e]||(c[e]=a),s.resultHistory[e]={completedAt:a,score:Number(t.score||0),totalQuestions:o.length,mistakes:(t.mistakes||[]).slice(0,24)},s.activeSession=null,e===_e&&H(12,0,"learning_path:intro"),/^n5-lesson-\d+$/i.test(e)){const d=qt(e),u=r.learningPathLessonPayloads[e]||da(e),m=[...new Set([...u?.kanjiIds||[],...(u?.kanjiBlocks||[]).map(f=>f.cardId),...gn(d).map(f=>f.id)].map(String).filter(Boolean))],h=se();if(m.forEach(f=>{const S=Eg(f);if(!S)return;na(S,"learning_path"),cr(h,S.kanji);const C=ie(J(S.id));C.state==="New"&&(r.progress.cards[S.id]=ke(C,l?"hard":"good"))}),d){ye.add(`n5:${d.id}`),h.completedLessons[d.id]=a,h.currentLessonId=tt().find(C=>C.order===d.order+1)?.id||d.id,r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.completedLessons=r.progress.n5Course.completedLessons||{},r.progress.n5Course.completedLessons[d.id]=a,T({immediate:!0}),uo()>=10&&Object.keys(h.studiedKanji||{}).length>=80&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N5")||r.progress.unlockedJlptLevels.push("N5"),r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"));const f=r.n5Meta?.rewards?.lessonCompleteXp||45,S=r.n5Meta?.rewards?.lessonCompleteMoon||6;H(f,S,`learning_path:${e}`),bt({title:`${et().lessonComplete}: ${b(d.title)}`,message:et().lessonCompleteText,xp:f,coins:S,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),we("lesson_complete",{lessonId:e,jlpt:"N5"})}}Gi(),be(),Z(),T()}function Mg(){r.n5Textbook?.items?.length||ql();const e=pe(),t=_p(),n=Ep(),s=As(dr()),a=Kn();return`
      <section class="page learning-path-page">
        <div class="section-head">
          <div>
            <h1>${i(e.route)}</h1>
            <p>${i(s?b(s.summary)||e.mapHint:e.loading)}</p>
          </div>
          <button class="btn primary" type="button" data-action="home-primary">${i(n.label)}</button>
        </div>

        <article class="learning-path-hero">
          <div>
            <span class="pill">${i(e.lessonTrack)}</span>
            <h2>${i(Rp(dr()))}</h2>
            <p>${i(e.mapHint)}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(pe().reviewQueue)} · ${i(Qe())}</span>
            <span class="pill">${i(pe().streak)} · ${i(r.progress.streak.current)}</span>
            <span class="pill">${i(pe().xp)} · ${i(a.current)}</span>
          </div>
        </article>

        <div class="learning-path-timeline">
          ${t.length?t.map((o,l)=>{const c=Pp(o),d=c==="locked",u=b(o.summary)||"",m=o.id===tr?e.reviewAction:o.id===nr?e.openCheckpoint:o.type==="textbook"?e.openTextbook:c==="current"?e.resume:e.continue;return`
              <button class="learning-path-node is-${g(c)} is-${g(o.type||"lesson")}" type="button" data-action="learning-path-node" data-node="${g(o.id)}" ${d?'disabled aria-disabled="true"':""}>
                <span class="learning-path-node-index">${l+1}</span>
                <div class="learning-path-node-copy">
                  <div class="learning-path-node-meta">
                    <span class="pill">${i(o.level||"N5")}</span>
                    <span class="pill">${i(rb(c))}</span>
                  </div>
                  <h2>${i(b(o.title))}</h2>
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
    `}function Wy(){const e=r.activeLearnNodeId||dr(),t=As(e),n=pe();if(!t)return Mg();if(t.id!==_e&&t.type==="lesson"&&!r.n5Textbook?.items?.length)return ql(),`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${i(b(t.title))}</h1>
                <p>${i(n.loading)}</p>
              </div>
              <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
            </div>
          </article>
        </section>
      `;t.type==="lesson"&&Qw(e);const s=ua(e),{session:a,steps:o,quizSteps:l,currentStep:c,isResult:d}=s;if(!o.length)return`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${i(b(t.title))}</h1>
                <p>${i(b(t.summary)||n.mapHint)}</p>
              </div>
              <button class="btn ghost" type="button" data-action="learning-path-node" data-node="${g(t.id)}">${i(t.type==="textbook"?n.openTextbook:n.backToMap)}</button>
            </div>
          </article>
        </section>
      `;const u=o.length,m=u?E(Math.min(a.stepIndex,u),u):0,h=a.answers?.[c?.id||""]||null,f=h?.selected||"",S=!!h?.correct,C=l.length?Math.round(Number(a.score||0)/Math.max(l.length,1)*100):100;return d?`
        <section class="page learning-path-page">
          <article class="study-card lesson-player">
            <div class="section-head">
              <div>
                <h1>${i(b(t.title))}</h1>
                <p>${i(n.scoreHint)}</p>
              </div>
              <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
            </div>
            <div class="lesson-player-progress">
              <span>${i(n.score)}</span>
              <strong>${i(C)}%</strong>
              <div class="meter"><i style="width:${C}%"></i></div>
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
              <h1>${i(b(t.title))}</h1>
              <p>${i(b(t.summary)||n.mapHint)}</p>
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
                    <span class="pill">${i(K(c.card))}</span>
                    ${c.card.hiragana?`<span class="pill">${i(ee(c.card.hiragana))}</span>`:""}
                    ${c.card.onyomi?`<span class="pill">${i(ee(c.card.onyomi))}</span>`:""}
                  </div>
                  ${c.sentence?`
                    <div class="lesson-player-sentence">
                      <strong>${i(c.sentence.jp||"")}</strong>
                      <p>${i(c.sentence.hiragana||"")}</p>
                      <small>${i(b(c.sentence.translation||{}))}</small>
                    </div>
                  `:""}
                </div>
              </div>
            `:c.kind==="quiz"?`
              <p>${i(c.text||"")}</p>
              <div class="lesson-choice-grid">
                ${(c.options||[]).map(x=>{const L=f===x.value,k=x.value===c.answer;return`<button class="btn ${L?S?"success":"danger":h&&k?"ghost is-correct":"ghost"}" type="button" data-action="learning-path-choice" data-node="${g(e)}" data-step="${g(c.id)}" data-value="${g(x.value)}">${i(x.label)}</button>`}).join("")}
              </div>
              ${h?`<p class="lesson-player-feedback ${S?"is-good":"is-warning"}">${i(S?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Правильно":"Correct"}: ${(c.options||[]).find(x=>x.value===c.answer)?.label||c.answer}`)}</p>`:""}
            `:`
              <p>${i(c.text||"")}</p>
              ${c.note?`<small>${i(c.note)}</small>`:""}
            `}
          </div>
          <div class="lesson-player-actions">
            <button class="btn ghost" type="button" data-action="learning-path-back">${i(n.backToMap)}</button>
            <button class="btn primary" type="button" data-action="learning-path-step-next" data-node="${g(e)}" ${c.kind==="quiz"&&!h?'disabled aria-disabled="true"':""}>${i(a.stepIndex+1>=u?n.finish:n.continue)}</button>
          </div>
        </article>
      </section>
    `}function Vy(){const e=hc(),t=_g(e),n=!!(t&&Ge(t)),s=n?FN(t.id):[];(!r.activeCardId||!s.some(l=>l.id===r.activeCardId))&&(r.activeCardId=s[0]?.id||null);const a=n&&r.activeCardId?oe(r.activeCardId):null,o=r.activeLearnJlpt!=="all"?It(r.activeLearnJlpt):null;return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("learn"))}</h1>
            <p>${i(t?Qa(t):"")}</p>
          </div>
          ${o?`<button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Учебники":"Textbooks")}</button>`:""}
        </div>
        ${Dy(e)}
        ${o?Fy(o):""}
        <div class="actions lesson-tabs">
          ${e.map(My).join("")}
        </div>
        <div class="study-layout">
          ${n?a?bf(a):fx(t):Oy(t)}
          ${n?Hc(a,s.length):Hc(null,0)}
        </div>
      </section>
    `}function Xy(){const e=En(r.activeJlptLesson)||En(oe(r.activeCardId)?.jlpt)||r.jlptLessons[0];if(!e)return`
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">JLPT</span>
            <h2>${i(p()==="ru"?"JLPT-уроки ещё не загружены":"JLPT lessons are not loaded yet")}</h2>
            <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(_("learn"))}</button>
          </article>
        </section>
      `;r.activeJlptLesson=e.jlpt;const t=It(e.jlpt);if(!Tt(e.jlpt))return Kg(t||e);const n=Nh(e.jlpt),s=n.filter(l=>J(l.id).state==="Mastered").length,a=n.filter(l=>J(l.id).state!=="New").length,o={...Ad(),...Ld()};return`
      <section class="page jlpt-lesson-page">
        <div class="section-head">
          <div>
            <h1>${i(b(e.title))}</h1>
            <p>${i(b(e.summary))}</p>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${g(e.jlpt)}">${i(p()==="ru"?"Страница учебника":"Textbook page")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
            ${ps("lesson",{level:e.jlpt,lessonId:e.id})}
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks" data-subroute="${g(e.jlpt)}">${i(o.back)}</button>
          </div>
        </div>
        <div class="actions jlpt-switcher">
          ${r.jlptLessons.map(l=>{const c=Tt(l.jlpt),d=l.jlpt===e.jlpt,u=g(Mn(l.jlpt));return c?`<button class="btn ${d?"primary":"ghost"}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(l.jlpt)}">${i(l.jlpt)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${u}">🔒 ${i(l.jlpt)}</button>`}).join("")}
        </div>
        ${t?`
          <article class="jlpt-textbook-hero">
            <img class="jlpt-textbook-cover" src="${g(t.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
            <div class="jlpt-textbook-body">
              <span class="pill">${i(t.jlpt)}</span>
              <h2>${i(b(t.displayTitle||t.title||{}))}</h2>
              <p>${i(b(t.description||{}))}</p>
              <div class="tag-row">
                <span class="pill">${i(t.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                <span class="pill">${i(t.kanjiCount||0)} ${i(_("cardsToday"))}</span>
                <span class="pill">${i(b(t.goal||{}))}</span>
                <span class="pill">${i(b(t.recommendedCycle||{}))}</span>
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
            ${M(o.available,n.length,e.jlpt,E(n.length,Math.max(r.cards.length,1)))}
            ${M(o.learned,a,`${s} ${o.mastered}`,E(a,Math.max(n.length,1)))}
          </div>
        </article>
        ${af(e)}
        <div class="jlpt-section-grid">
          ${e.goals.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.goals)}</h3>
              <ul>${e.goals.map(l=>`<li>${i(b(l))}</li>`).join("")}</ul>
            </article>
          `:""}
          ${e.sections.map(l=>`
            <article class="jlpt-section-card">
              <h3>${i(b(l.title))}</h3>
              <p>${i(b(l.body))}</p>
              ${Array.isArray(l.points)&&l.points.length?`<ul>${l.points.map(c=>`<li>${i(b(c))}</li>`).join("")}</ul>`:""}
            </article>
          `).join("")}
          ${e.practice.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.practice)}</h3>
              <ul>${e.practice.map(l=>`<li>${i(b(l))}</li>`).join("")}</ul>
            </article>
          `:""}
          ${e.checkpoint.length?`
            <article class="jlpt-section-card">
              <h3>${i(o.checkpoint)}</h3>
              <ul>${e.checkpoint.map(l=>`<li>${i(b(l))}</li>`).join("")}</ul>
            </article>
          `:""}
        </div>
      </section>
    `}function Qy(){const e=r.jlptCatalog?.items||[],t=String(r.activeTextbookLevel||"");if(ve(t))return e$(t);const n=t.toUpperCase(),s=n?It(n):null;if(s)return r.activeTextbookLevel=s.jlpt,r.activeJlptLesson=s.jlpt,Yy(s);if(n&&!r.bootAncillaryLoaded)return hl({hadPriorVisit:tc(r.progress)}).catch(l=>console.warn("Boot ancillary data failed to load.",l)),wc({title:{ru:n,en:n}},n);const a=p()==="ru"?{title:"Учебники Flash Kanji",description:"Выберите азбуку для старта с нуля или продолжайте учебники JLPT N5–N1.",open:"Открыть страницу",pdf:"Скачать PDF",study:"К урокам",kanaBadge:"Курс на русском",kanaMeta:"знаков",kanaTasks:"заданий"}:{title:"Flash Kanji Textbooks",description:"Choose a kana course from zero or continue JLPT N5-N1 textbooks.",open:"Open page",pdf:"Download PDF",study:"Go to lessons",kanaBadge:"Russian course",kanaMeta:"characters",kanaTasks:"tasks"},o=(r.kanaCatalog?.courses||[]).map(l=>`
            <article class="textbook-card kana-textbook-card is-unlocked" id="textbook-${g(l.slug)}">
              <div class="textbook-cover-wrap kana-cover-wrap">
                <div class="kana-cover-symbol" aria-hidden="true">${i(l.native_title)}</div>
                <span class="pill textbook-level">${i(a.kanaBadge)}</span>
              </div>
              <div class="textbook-body">
                <h2>${i(l.title)}</h2>
                <p>${i(l.description)}</p>
                <div class="textbook-meta">
                  <span class="pill">${i(l.lesson_count)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                  <span class="pill">${i(l.base_character_count)} ${i(a.kanaMeta)}</span>
                  <span class="pill">${i(l.task_count)} ${i(a.kanaTasks)}</span>
                </div>
                <div class="textbook-actions">
                  <a class="btn primary" href="#textbooks/${g(l.slug)}">${i(a.open)}</a>
                  <a class="btn ghost" href="${g(l.pdf_url)}" download="${g((l.pdf_url||"").split("/").pop()||`${l.slug}.pdf`)}" target="_blank" rel="noopener" data-action="kana-download-pdf" data-course="${g(l.slug)}">${i(a.pdf)}</a>
                </div>
              </div>
            </article>
          `).join("");return`
      <section class="page textbooks-page">
        <div class="section-head">
          <div>
            <h1>${i(a.title)}</h1>
            <p>${i(a.description)}</p>
          </div>
          <div class="actions">
            ${ps("textbooks")}
            <button class="btn primary" type="button" data-action="open-jlpt-lesson-start" data-jlpt="${g(bn())}">${i(a.study)}</button>
          </div>
        </div>
        <div class="textbook-grid" id="textbook-grid">
          ${o}
          ${e.map(l=>`
            <article class="textbook-card ${Tt(l.jlpt)?"is-unlocked":"is-locked"}" id="textbook-${g(l.jlpt)}">
              <div class="textbook-cover-wrap">
                <img class="textbook-cover" src="${g(l.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
                <span class="pill textbook-level">${i(l.jlpt)}</span>
              </div>
              <div class="textbook-body">
                <h2>${i(b(l.displayTitle||l.title||{}))}</h2>
                <p>${i(b(l.description||{}))}</p>
                ${Tt(l.jlpt)?"":`<p class="textbook-lock-note">${i(Mn(l.jlpt))}</p>`}
                <div class="textbook-meta">
                  <span class="pill">${i(l.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                  <span class="pill">${i(l.kanjiCount||0)} ${i(_("cardsToday"))}</span>
                  <span class="pill">${i(b(l.goal||{}))}</span>
                </div>
                <div class="textbook-actions">
                  <a class="btn primary" href="#textbooks/${g(l.jlpt)}">${i(a.open)}</a>
                  ${Tt(l.jlpt)?`<a class="btn ghost" href="${g(l.pdfUrl||l.pdfFile||"")}" download="${g((l.pdfFile||l.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(a.pdf)}</a>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g(Mn(l.jlpt))}">${i(p()==="ru"?"PDF закрыт":"PDF locked")}</button>`}
                  ${Tt(l.jlpt)?`<button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(l.jlpt)}">${i(a.study)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g(Mn(l.jlpt))}">${i(p()==="ru"?"Закрыто":"Locked")}</button>`}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Kg(e){const t=String(e?.jlpt||"").toUpperCase(),n=xd(t),s=n.map(o=>`<a class="pill" href="#textbooks/${g(o)}">${i(o)}</a>`).join(""),a=p()==="ru"?{title:"Учебник закрыт",back:"Все учебники",home:"Домой",hint:"Сначала заверши предыдущие уровни, чтобы открыть этот учебник."}:{title:"Textbook locked",back:"All textbooks",home:"Home",hint:"Finish the previous levels first to unlock this textbook."};return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(t||"JLPT")}</p>
            <h1>${i(b(e?.displayTitle||e?.title||{ru:a.title,en:a.title}))}</h1>
            <p>${i(Mn(t))}</p>
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
            <h2>${i(b(e?.displayTitle||e?.title||{ru:a.title,en:a.title}))}</h2>
            <p>${i(a.hint)}</p>
            ${s?`<div class="tag-row">${s}</div>`:""}
            <div class="actions">
              <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(a.back)}</button>
              ${n.length?`<a class="btn ghost" href="#textbooks/${g(n[n.length-1])}">${i(n[n.length-1])}</a>`:""}
            </div>
          </div>
        </article>
      </section>
    `}function Yy(e){const t=String(e?.jlpt||"").toUpperCase();if(!Tt(t))return Kg(e);if(fe.includes(t)&&!Ri(t))return Ti(t)==="error"||Ti(t)==="incomplete"?Zy(e,t,r.jlptCourseDataErrors[t]):(Pi(t).catch(()=>{}),wc(e,t));if(String(e?.jlpt||"").toUpperCase()==="N5"&&r.n5Textbook?.items?.length)return N$(e);if(String(e?.jlpt||"").toUpperCase()==="N4"&&r.n4Textbook?.items?.length)return xj(e);if(String(e?.jlpt||"").toUpperCase()==="N3"&&r.n3Textbook?.items?.length)return cS(e);if(String(e?.jlpt||"").toUpperCase()==="N2"&&r.n2Textbook?.items?.length)return HS(e);if(String(e?.jlpt||"").toUpperCase()==="N1")return r.n1Textbook?.items?.length?T0(e):(ow().catch(()=>{}),ol?Hi(ol):wc(e,"N1"));r.activeTextbookLevel=e.jlpt,r.activeJlptLesson=e.jlpt;const n=(e.lessonIds||[]).map(f=>r.lessons.find(S=>S.id===f)).filter(Boolean),s=r.lessons.filter(f=>String(f.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()&&!n.includes(f)),a=[...n,...s].slice(0,Math.max(e.lessonCount||n.length,n.length)),o=r.activeTextbookSubroute?a.find(f=>f.id===r.activeTextbookSubroute)||En(e.jlpt)||r.jlptLessons[0]:En(e.jlpt)||r.jlptLessons[0];r.activeTextbookSubroute&&o?.id&&Rt(t,o.id,"textbook_page");const l=p()==="ru"?{title:"Страница учебника",back:"Все учебники",pdf:"Скачать PDF",lessonPage:"Страница урока",openLesson:"Открыть урок",outline:"Что внутри",practice:"Практика",lessons:"Уроки учебника",previous:"Предыдущие уровни",next:"Следующие уровни"}:{title:"Textbook page",back:"All textbooks",pdf:"Download PDF",lessonPage:"Lesson page",openLesson:"Open lesson",outline:"Inside the textbook",practice:"Practice",lessons:"Textbook lessons",previous:"Previous levels",next:"Next levels"},c=Nd(e.jlpt)||e.lessonIds?.[0]||a[0]?.id||"",d=b(e.recommendedCycle||{}),u=b(e.goal||{}),m=(e.previousLevels||[]).map(f=>`<a class="pill" href="#textbooks/${g(f)}">${i(f)}</a>`).join(""),h=(e.nextLevels||[]).map(f=>`<a class="pill" href="#textbooks/${g(f)}">${i(f)}</a>`).join("");return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(e.jlpt)} · ${i(l.title)}</p>
            <h1>${i(b(e.displayTitle||e.title||{}))}</h1>
            <p>${i(b(e.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(l.back)}</button>
            <a class="btn primary" href="${g(e.pdfUrl||e.pdfFile||"")}" download="${g((e.pdfFile||e.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(l.pdf)}</a>
            <button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(e.jlpt)}">${i(l.lessonPage)}</button>
            ${ps("textbook",{level:e.jlpt})}
          </div>
        </div>

        <article class="jlpt-textbook-hero">
          <img class="jlpt-textbook-cover" src="${g(e.coverImage||"assets/bg/bg_classroom.webp")}" alt="" loading="lazy" />
          <div class="jlpt-textbook-body">
            <span class="pill">${i(e.jlpt)}</span>
            <h2>${i(b(e.displayTitle||e.title||{}))}</h2>
            <p>${i(b(e.description||{}))}</p>
            <div class="tag-row">
              <span class="pill">${i(e.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
              <span class="pill">${i(e.kanjiCount||0)} ${i(_("cardsToday"))}</span>
              <span class="pill">${i(u)}</span>
              <span class="pill">${i(d)}</span>
            </div>
            <div class="textbook-route-links">
              ${m?`<div><strong>${i(l.previous)}</strong><div class="tag-row">${m}</div></div>`:""}
              ${h?`<div><strong>${i(l.next)}</strong><div class="tag-row">${h}</div></div>`:""}
            </div>
          </div>
        </article>

        <div class="metric-grid">
          ${M(e.jlpt,e.lessonCount||0,u,E(e.lessonCount||0,Math.max(1,r.jlptLessons.length)))}
          ${M(p()==="ru"?"Кандзи":"Kanji",e.kanjiCount||0,p()==="ru"?"в учебнике":"in textbook",E(e.kanjiCount||0,Math.max(1,r.cards.length)))}
          ${M(p()==="ru"?"Уроки":"Lessons",a.length,l.practice,E(a.length,Math.max(1,r.lessons.filter(f=>String(f.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()).length)))}
          ${M(p()==="ru"?"Переход":"Jump",r.activeTextbookLevel===e.jlpt?1:0,l.lessonPage,r.activeTextbookLevel===e.jlpt?100:0)}
        </div>

        ${wr(e.jlpt)}

        ${o?`
          <article class="jlpt-lesson-hero">
            <div>
              <span class="pill">${i(e.jlpt)}</span>
              <h2>${i(l.outline)}</h2>
              <p>${i(b(o.summary||{}))}</p>
            </div>
            <div class="mini-stat-row">
              ${M(p()==="ru"?"Грамматика":"Grammar",o.sections?.length||0,l.outline,E(o.sections?.length||0,4))}
              ${M(p()==="ru"?"Практика":"Practice",o.practice?.length||0,l.practice,E(o.practice?.length||0,4))}
            </div>
          </article>
          ${af(o)}
          <div class="jlpt-section-grid">
            ${o.goals?.length?`
              <article class="jlpt-section-card">
                <h3>${i(p()==="ru"?"Цели уровня":"Level goals")}</h3>
                <ul>${o.goals.map(f=>`<li>${i(b(f))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${o.sections?.map(f=>`
              <article class="jlpt-section-card">
                <h3>${i(b(f.title))}</h3>
                <p>${i(b(f.body))}</p>
                ${Array.isArray(f.points)&&f.points.length?`<ul>${f.points.map(S=>`<li>${i(b(S))}</li>`).join("")}</ul>`:""}
              </article>
            `).join("")}
            ${o.practice?.length?`
              <article class="jlpt-section-card">
                <h3>${i(l.practice)}</h3>
                <ul>${o.practice.map(f=>`<li>${i(b(f))}</li>`).join("")}</ul>
              </article>
            `:""}
            ${o.checkpoint?.length?`
              <article class="jlpt-section-card">
                <h3>${i(p()==="ru"?"Чекпоинт":"Checkpoint")}</h3>
                <ul>${o.checkpoint.map(f=>`<li>${i(b(f))}</li>`).join("")}</ul>
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
          ${a.map(f=>Ey(f)).join("")||`<article class="empty-state"><h3>${i(p()==="ru"?"Уроки скоро появятся":"Lessons will appear soon")}</h3></article>`}
        </div>
      </section>
    `}function wc(e,t){const n=p()==="ru"?{eyebrow:`${t} · Flash Kanji`,title:"Загружаем урок…",text:`Подгружаю карточки и упражнения ${t}. Адрес сохранён — после загрузки откроется нужный урок.`,back:"Все учебники"}:{eyebrow:`${t} · Flash Kanji`,title:"Loading lesson…",text:`Loading ${t} cards and exercises. The URL is preserved and the requested lesson will open next.`,back:"All textbooks"};return`
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
            <h2>${i(b(e?.displayTitle||e?.title||{ru:t,en:t}))}</h2>
            <p>${i(b(e?.description||{}))}</p>
            <div class="achievement-progress" aria-hidden="true"><i style="width:60%"></i></div>
          </div>
          ${Rn("eva","calm","loading","n5-hero-mascot")}
        </article>
      </section>
    `}function Zy(e,t,n=null){const s=p()==="ru"?{eyebrow:`${t} · Flash Kanji`,title:"Не удалось загрузить карточки урока",text:"Проверьте подключение и попробуйте ещё раз. Прогресс, XP и Moon Fragments не изменились.",retry:"Повторить",back:"К списку уроков"}:{eyebrow:`${t} · Flash Kanji`,title:"Could not load lesson cards",text:"Check your connection and try again. Progress, XP, and Moon Fragments were not changed.",retry:"Retry",back:"Lesson list"},a=n instanceof Error?n.message:String(n||"");return`
      <section class="page textbooks-page n5-course-page textbook-data-error-page" data-course-data-error="${g(t)}">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">${i(s.eyebrow)}</p>
            <h1>${i(s.title)}</h1>
            <p>${i(s.text)}</p>
            ${a?`<p class="label">${i(a)}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="retry-jlpt-course-data" data-level="${g(t)}">${i(s.retry)}</button>
            <a class="btn ghost" href="#textbooks/${g(t)}">${i(s.back)}</a>
          </div>
        </div>
        <article class="n5-hero n1-hero">
          <div class="n5-hero-copy">
            <span class="pill danger-pill">${i(t)} · ${i(p()==="ru"?"данные недоступны":"data unavailable")}</span>
            <h2>${i(b(e?.displayTitle||e?.title||{ru:t,en:t}))}</h2>
            <p>${i(b(e?.description||{}))}</p>
          </div>
          ${Rn("eva","concerned","error","n5-hero-mascot")}
        </article>
      </section>
    `}function Dg(){return p()==="ru"?{allTextbooks:"Все учебники",start:"Начать курс",continue:"Продолжить",downloadPdf:"Скачать PDF",reference:"Справочник",lessons:"Уроки",practice:"Практикум чтения",final:"Итоговая контрольная",review:"Повторение",sources:"Источники",russianCourse:"Курс на русском",showRomaji:"Показывать ромадзи",hideRomaji:"Скрыть ромадзи",check:"Проверить",score:"Результат",passed:"зачёт",notPassed:"повторить",correct:"верно",wrong:"ошибка",writeDone:"Пропись выполнена",markWriting:"Я написал(а) от руки",manualWriting:"Ручная пропись",noAutoWriting:"Почерк не оценивается автоматически: отметьте шаг, когда написали знаки от руки.",noCourse:"Курс не найден",loading:"Загружаю курс",offlineHint:"Если вы уже открывали этот урок, service worker отдаст его из кэша. Иначе появится понятный offline fallback.",remember:"Помню",forgot:"Не помню",noReview:"Повторений пока нет. Пройдите урок или откройте знаки курса.",sourcePdf:"Оригинальный PDF",taskCount:"заданий",characters:"знаков",lessonsCount:"уроков",lesson:"урок",lessonProgress:"Прогресс урока",newSigns:"Новые знаки",newSignsHint:"Сначала узнаём форму и чтение каждого нового знака.",characterCard:"Карточка знака",characterCardHint:"Идём как в кандзи-уроке: один знак, быстрое решение, следующая карточка.",cardComplete:"Все знаки урока открыты",cardCompleteHint:"Теперь можно закрепить их в упражнениях, прописи и общем повторении.",backToFirstCard:"Повторить карточки",cardProgress:"Карточка",exampleWord:"Пример слова",readWrite:"Как читать и писать",readWriteHint:"Произнесите знак, посмотрите количество штрихов и переходите к ручной прописи.",reading:"Чтение",strokes:"Штрихи",tts:"Звук",strokeOrder:"Stroke-order",explanation:"Объяснение",explanationHint:"Ключевые правила урока вынесены в отдельные карточки.",examples:"Примеры",examplesHint:"Короткие слова и записи для чтения.",example:"Пример",meaning:"Значение",practiceBlock:"Практика",practiceHint:"Выполняйте задания небольшими блоками и проверяйте ответы сразу.",selfCheck:"Проверь себя",selfCheckHint:"Завершите ручную часть и отметьте пропись после тренировки."}:{allTextbooks:"All textbooks",start:"Start course",continue:"Continue",downloadPdf:"Download PDF",reference:"Reference",lessons:"Lessons",practice:"Reading practice",final:"Final test",review:"Review",sources:"Sources",russianCourse:"Russian course",showRomaji:"Show romaji",hideRomaji:"Hide romaji",check:"Check",score:"Score",passed:"passed",notPassed:"retry",correct:"correct",wrong:"wrong",writeDone:"Writing done",markWriting:"I wrote it by hand",manualWriting:"Manual writing",noAutoWriting:"Handwriting is not graded automatically: mark this step after writing the signs by hand.",noCourse:"Course not found",loading:"Loading course",offlineHint:"If you opened this lesson before, the service worker can serve it from cache. Otherwise a clear offline fallback appears.",remember:"Remember",forgot:"Forgot",noReview:"No kana reviews yet. Finish a lesson or open course signs first.",sourcePdf:"Original PDF",taskCount:"tasks",characters:"characters",lessonsCount:"lessons",lesson:"lesson",lessonProgress:"Lesson progress",newSigns:"New signs",newSignsHint:"Start by recognizing the shape and reading of each new sign.",characterCard:"Character card",characterCardHint:"Use the kanji lesson rhythm: one sign, one decision, then the next card.",cardComplete:"All lesson signs are introduced",cardCompleteHint:"Now reinforce them with exercises, handwriting, and shared review.",backToFirstCard:"Repeat cards",cardProgress:"Card",exampleWord:"Example word",readWrite:"How to read and write",readWriteHint:"Play the sound, check the stroke count, then move to handwriting practice.",reading:"Reading",strokes:"Strokes",tts:"Sound",strokeOrder:"Stroke order",explanation:"Explanation",explanationHint:"The key lesson notes are separated into contrast cards.",examples:"Examples",examplesHint:"Short words and spellings for reading practice.",example:"Example",meaning:"Meaning",practiceBlock:"Practice",practiceHint:"Complete the exercises in compact blocks and check immediately.",selfCheck:"Check yourself",selfCheckHint:"Finish the handwriting step after practicing by hand."}}function e$(e){const t=String(e||"").toLowerCase(),n=Ga(t),s=Dg();if(!n&&!r.bootAncillaryLoaded)return hl({hadPriorVisit:tc(r.progress)}).catch(l=>console.warn("Boot ancillary data failed to load.",l)),Fg({title:t,pdf_url:""},s);if(!n)return Hi(new Error(s.noCourse));const a=vn(t);if(!a)return Ch(t).then(()=>P()).catch(()=>P()),r.kanaCourseErrors[t]?Hi(r.kanaCourseErrors[t]):Fg(n,s);const o=String(r.activeTextbookSubroute||"").toLowerCase();if(o==="reference")return g$(a,s);if(o==="sources")return m$(a,s);if(o==="review")return f$(a,s);if(o==="final"||o==="final-test")return p$(a,s);if(/^practice-\d+$/i.test(o)){const l=a.reading_practice?.find(c=>c.id===o);return l?u$(a,l,s):ia(he("hash","entity-not-found",`textbooks/${t}/${o}`,["textbooks",t,o]))}if(/^lesson-\d+$/i.test(o)){const l=a.lessons?.find(c=>c.id===o);return l?r$(a,l,s):ia(he("hash","entity-not-found",`textbooks/${t}/${o}`,["textbooks",t,o]))}return t$(a,s)}function Fg(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page" aria-busy="true">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">${i(t.russianCourse)}</p>
            <h1>${i(t.loading)}: ${i(e.title)}</h1>
            <p>${i(t.offlineHint)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(t.allTextbooks)}</button>
            <a class="btn ghost" href="${g(e.pdf_url)}" download="${g((e.pdf_url||"").split("/").pop()||"kana.pdf")}" target="_blank" rel="noopener">${i(t.downloadPdf)}</a>
          </div>
        </div>
      </section>
    `}function t$(e,t){const n=yt(e.slug),s=e.lessons?.[0]?.id||"",a=n.currentRoute||s;_o(e.slug,a);const o=e.lessons.filter(l=>co(e.slug,l).passed).length;return`
      <section class="page textbooks-page n5-course-page kana-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">Flash Kanji · ${i(t.russianCourse)}</p>
            <h1>${i(e.title)} <span lang="ja">${i(e.native_title)}</span></h1>
            <p>${i(e.description)}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(t.allTextbooks)}</button>
            <a class="btn primary" href="#textbooks/${g(e.slug)}/${g(a)}">${i(n.currentRoute?t.continue:t.start)}</a>
            <a class="btn ghost" href="${g(e.source.pdf_file)}" download="${g((e.source.pdf_file||"").split("/").pop()||`${e.slug}.pdf`)}" target="_blank" rel="noopener" data-action="kana-download-pdf" data-course="${g(e.slug)}">${i(t.downloadPdf)}</a>
          </div>
        </div>
        <article class="jlpt-textbook-hero kana-course-hero">
          <div class="kana-hero-symbol" aria-hidden="true">${i(e.native_title)}</div>
          <div class="jlpt-textbook-body">
            <span class="pill">${i(t.russianCourse)}</span>
            <h2>${i(e.title)}</h2>
            <p>${i(e.reference?.body?.slice(0,3).join(" ")||e.description)}</p>
            <div class="tag-row">
              <span class="pill">${i(e.stats.lesson_count)} ${i(t.lessonsCount)}</span>
              <span class="pill">${i(e.stats.base_character_count)} ${i(t.characters)}</span>
              <span class="pill">${i(e.stats.task_count)} ${i(t.taskCount)}</span>
            </div>
          </div>
        </article>
        <div class="metric-grid">
          ${M(t.lessons,o,`${e.lessons.length}`,E(o,Math.max(1,e.lessons.length)))}
          ${M(t.practice,e.reading_practice.length,t.russianCourse,100)}
          ${M(t.final,n.finalTest?.score||0,`${n.finalTest?.total||0}`,E(n.finalTest?.score||0,Math.max(1,n.finalTest?.total||1)))}
          ${M(t.review,Ug(e,"due").length,t.characters,E(Ug(e,"due").length,Math.max(1,e.base_characters.length)))}
        </div>
        <div class="actions kana-course-tabs">
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/reference">${i(t.reference)}</a>
          <button class="btn ghost" type="button" data-action="route" data-route="review">${i(t.review)}</button>
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/final">${i(t.final)}</a>
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/sources">${i(t.sources)}</a>
          <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(us().settings.showRomaji?t.hideRomaji:t.showRomaji)}</button>
        </div>
        <div class="section-head">
          <div>
            <h2>${i(t.lessons)}</h2>
            <p>${i(p()==="ru"?"Курсы азбук независимы: хирагана не блокирует катакану и наоборот.":"Kana courses are independent: hiragana does not lock katakana and vice versa.")}</p>
          </div>
        </div>
        <div class="lesson-grid kana-lesson-grid">
          ${e.lessons.map(l=>n$(e,l,t)).join("")}
        </div>
        <div class="section-head">
          <div>
            <h2>${i(t.practice)}</h2>
            <p>${i(p()==="ru"?"Пять блоков чтения из PDF без обязательного ромадзи.":"Five PDF reading practice blocks without mandatory romaji.")}</p>
          </div>
        </div>
        <div class="lesson-grid kana-practice-grid">
          ${e.reading_practice.map(l=>s$(e,l,t)).join("")}
        </div>
      </section>
    `}function n$(e,t,n){const s=co(e.slug,t),a=s.passed?n.passed:s.completed?n.notPassed:n.start,o=s.completed?Math.round(s.latestScore/Math.max(1,yc(t.exercises))*100):0;return`
        <article class="lesson-card kana-lesson-card">
          <div class="lesson-card-main">
            <span class="pill">#${i(t.order)}</span>
            <h3>${i(t.title)}</h3>
            <p class="kana-character-row" lang="ja">${t.focus_characters.slice(0,16).map(l=>`<span>${i(l.kana)}</span>`).join("")}</p>
            <div class="progress mini"><span style="width:${E(o,100)}%"></span></div>
            <p>${i(a)} · ${i(o)}%</p>
          </div>
          <a class="btn primary" href="#textbooks/${g(e.slug)}/${g(t.id)}">${i(s.completed?n.continue:n.start)}</a>
        </article>
      `}function s$(e,t,n){const s=yt(e.slug).practices[t.id],a=yc(t.exercises),o=Number(s?.latestScore||0);return`
        <article class="lesson-card kana-lesson-card">
          <div class="lesson-card-main">
            <span class="pill">${i(n.practice)} ${i(t.order)}</span>
            <h3>${i(t.title)}</h3>
            <p>${i((t.body||[]).slice(0,2).join(" "))}</p>
            <div class="progress mini"><span style="width:${E(o,Math.max(1,a))}%"></span></div>
          </div>
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/${g(t.id)}">${i(n.practice)}</a>
        </article>
      `}function r$(e,t,n){const s=yt(e.slug);_o(e.slug,t.id);const a=co(e.slug,t),o=yc(t.exercises),l=a$(t),c=!!s.writing?.[t.id];return`
      <section class="page textbooks-page n5-course-page n5-lesson-page kana-course-page kana-lesson-page">
        <div class="kana-lesson-shell">
          ${i$(e,t,n,l,a,o)}
          ${l$(e,t,n,l)}
          ${c$(l.explanations,n)}
          ${d$(l.examples,n)}
          <section class="kana-lesson-step kana-practice-step" aria-labelledby="kanaPracticeTitle">
            <div class="kana-step-heading">
              <span class="pill">05</span>
              <h2 id="kanaPracticeTitle">${i(n.practiceBlock)}</h2>
              <p>${i(n.practiceHint)}</p>
            </div>
            <div class="kana-practice-stack">
              ${t.exercises.map(d=>kc(e.slug,t.id,"lesson",d,n)).join("")}
            </div>
          </section>
          <section class="kana-lesson-step kana-self-check-step" aria-labelledby="kanaSelfCheckTitle">
            <div class="kana-step-heading">
              <span class="pill">06</span>
              <h2 id="kanaSelfCheckTitle">${i(n.selfCheck)}</h2>
              <p>${i(n.selfCheckHint)}</p>
            </div>
            <article class="jlpt-section-card kana-writing-card" id="kana-writing-practice">
              <h3>${i(n.manualWriting)}</h3>
              <p>${i(t.writing?.prompt||n.noAutoWriting)}</p>
              <p class="muted">${i(n.noAutoWriting)}</p>
              <button class="btn ${c?"ghost":"primary"}" type="button" data-action="kana-writing-done" data-course="${g(e.slug)}" data-lesson="${g(t.id)}">${i(c?n.writeDone:n.markWriting)}</button>
            </article>
          </section>
        </div>
      </section>
    `}function a$(e){const t=(e.body||[]).map(d=>String(d||"").trim()).filter(Boolean),n=[],s=[],a={title:"",headers:[],rows:[]};let o=0;const l=d=>/^(Цель раздела|Знаки урока|Произношение|Типичная ошибка|Слова для чтения|Пример и узнавание|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(d),c=d=>/^(Слова для чтения|Пример и узнавание)$/i.test(d);for(;o<t.length;){const d=t[o];if(/^\d+$/.test(d)){o+=1;continue}if(/^Цель раздела$/i.test(d)){for(o+=1;o<t.length&&!/^Знаки урока$/i.test(t[o]);)/^\d+$/.test(t[o])||n.push(t[o]),o+=1;continue}if(/^Знаки урока$/i.test(d)){for(o+=1;o<t.length&&!/^(Произношение|Типичная ошибка|Слова для чтения|Пример и узнавание|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(t[o]);)o+=1;continue}if(c(d)){a.title=d;const u=t.slice(o+1).filter(h=>!/^\d+$/.test(h));a.headers=u.slice(0,3);const m=u.slice(3);for(let h=0;h+2<m.length;h+=3)a.rows.push(m.slice(h,h+3));break}if(l(d)){const u=d,m=[];for(o+=1;o<t.length&&!l(t[o]);)/^\d+$/.test(t[o])||m.push(t[o]),o+=1;m.length&&s.push({title:u,body:m});continue}o+=1}return{goal:n,explanations:s,examples:a}}function i$(e,t,n,s,a,o){const l=Number(a?.latestScore||0),c=E(l,Math.max(1,o)),d=s.goal.length?s.goal.join(" "):(t.body||[]).slice(0,2).join(" ");return`
        <article class="kana-lesson-hero-card" aria-labelledby="kanaLessonTitle">
          <div class="kana-lesson-hero-copy">
            <p class="eyebrow">Flash Kanji · ${i(e.title)} · ${i(n.lesson)} ${i(t.order||"")}</p>
            <h1 id="kanaLessonTitle">${i(t.title)} <span lang="ja">${i(e.native_title)}</span></h1>
            <p>${i(d)}</p>
            <div class="kana-lesson-progress-row">
              <span>${i(n.lessonProgress)}: ${i(l)}/${i(o)}</span>
              <div class="achievement-progress" aria-hidden="true"><i style="width:${c}%"></i></div>
            </div>
          </div>
          <div class="kana-lesson-hero-aside" aria-label="${g(n.newSigns)}">
            <span class="pill">${i(n.newSigns)} · ${i(t.focus_characters.length)}</span>
            <div class="kana-hero-signs" lang="ja">
              ${t.focus_characters.map(u=>`<span>${i(u.kana)}</span>`).join("")}
            </div>
            <div class="actions">
              <a class="btn ghost" href="#textbooks/${g(e.slug)}">${i(e.title)}</a>
              <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
              <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(us().settings.showRomaji?n.hideRomaji:n.showRomaji)}</button>
              ${ps("textbook",{level:e.slug,subroute:t.id})}
            </div>
          </div>
        </article>
      `}function bc(e,t){return`${String(e||"").toLowerCase()}:${String(t||"")}`}function Og(e,t){const n=bc(e,t?.id||""),s=t?.focus_characters?.length||0,a=Number(r.kanaLessonCharacterIndex[n]||0);return de(Number.isFinite(a)?a:0,0,s)}function o$(e,t){const n=Array.isArray(e?.rows)?e.rows:[],s=String(t||""),a=n.find(o=>String(o?.[0]||"").includes(s))||n[0]||null;return a?{word:String(a[0]||""),reading:String(a[1]||""),meaning:String(a[2]||"")}:null}function l$(e,t,n,s){const a=t.focus_characters||[];if(!a.length)return"";const o=Og(e.slug,t),l=o>=a.length,c=a[Math.min(o,a.length-1)],d=`${Math.min(o+1,a.length)} / ${a.length}`,u=E(Math.min(o,a.length),Math.max(1,a.length));if(l)return`
        <section class="kana-lesson-step kana-character-flow" data-section="kana-character-study-card" aria-labelledby="kanaCharacterFlowTitle">
          <div class="kana-step-heading">
            <span class="pill">01</span>
            <h2 id="kanaCharacterFlowTitle">${i(n.characterCard)}</h2>
            <p>${i(n.characterCardHint)}</p>
          </div>
          <article class="study-card kana-character-study-card is-complete" data-kana-character-card>
            <div class="study-topline">
              <div class="tag-row compact-tags">
                <span class="pill">${i(e.title)}</span>
                <span class="pill">${i(n.cardProgress)} ${i(`${a.length} / ${a.length}`)}</span>
              </div>
            </div>
            <h3>${i(n.cardComplete)}</h3>
            <p>${i(n.cardCompleteHint)}</p>
            <div class="kana-card-strip" lang="ja" aria-label="${g(n.newSigns)}">
              ${a.map(L=>`<span class="is-done">${i(L.kana)}</span>`).join("")}
            </div>
            <div class="actions">
              <button class="btn ghost" type="button" data-action="kana-lesson-card-reset" data-course="${g(e.slug)}" data-lesson="${g(t.id)}">${i(n.backToFirstCard)}</button>
              <a class="btn primary" href="#kanaPracticeTitle">${i(n.practiceBlock)}</a>
            </div>
          </article>
        </section>
      `;const m=Jt(e.slug),h=In(e.slug,c.kana),f=ot(m[h]||null),S=o$(s.examples,c.kana),C=us().settings.showRomaji,x=Ir();return`
        <section class="kana-lesson-step kana-character-flow" data-section="kana-character-study-card" aria-labelledby="kanaCharacterFlowTitle">
          <div class="kana-step-heading">
            <span class="pill">01</span>
            <h2 id="kanaCharacterFlowTitle">${i(n.characterCard)}</h2>
            <p>${i(n.characterCardHint)}</p>
          </div>
          <article class="study-card kana-character-study-card" data-kana-character-card data-kana-card-id="${g(h)}">
            <div class="study-topline">
              <div class="tag-row compact-tags">
                <span class="pill">${i(e.title)}</span>
                ${Or(f.state)}
                <span class="pill">${i(n.cardProgress)} ${i(d)}</span>
              </div>
              <button class="audio-trigger" type="button" data-action="play-kana-tts" data-text="${g(c.kana)}" aria-label="${g(n.tts)}">🔊</button>
            </div>
            <div class="kanji-focus kana-lesson-focus" lang="ja" aria-label="${g(c.kana)}">${i(c.kana)}</div>
            <h3>${i(n.reading)}: ${i(C&&c.romaji?c.romaji:c.kana)}</h3>
            <p class="label">${i(e.title)} · ${i(c.strokes?`${c.strokes} ${n.strokes.toLowerCase()}`:n.characters)} · ${i(en(f.dueAt))}</p>
            <div class="kana-character-details">
              <div>
                <span>${i(n.reading)}</span>
                <strong>${i(c.romaji||"—")}</strong>
              </div>
              <div>
                <span>${i(n.strokes)}</span>
                <strong>${i(c.strokes||"—")}</strong>
              </div>
              <div>
                <span>${i(n.strokeOrder)}</span>
                <a href="#kana-writing-practice">${i(n.manualWriting)}</a>
              </div>
            </div>
            ${S?`
              <div class="lesson-player-sentence kana-character-example">
                <small>${i(n.exampleWord)}</small>
                <strong lang="ja">${i(S.word)}</strong>
                <p>${i(S.reading)} · ${i(S.meaning)}</p>
              </div>
            `:""}
            <div class="kana-card-strip" lang="ja" aria-label="${g(n.newSigns)}">
              ${a.map((L,k)=>`<span class="${k<o?"is-done":k===o?"is-current":""}">${i(L.kana)}</span>`).join("")}
            </div>
            <div class="progress mini" aria-hidden="true"><span style="width:${u}%"></span></div>
            <div class="rating-grid srs-binary-grid">
              <button class="btn danger" type="button" data-action="kana-lesson-card" data-course="${g(e.slug)}" data-lesson="${g(t.id)}" data-kana="${g(c.kana)}" data-rating="forgot">${i(x.forgot)} <small>${i(x.forgotHint)}</small></button>
              <button class="btn success" type="button" data-action="kana-lesson-card" data-course="${g(e.slug)}" data-lesson="${g(t.id)}" data-kana="${g(c.kana)}" data-rating="remember">${i(x.remember)} <small>${i(x.rememberHint)}</small></button>
            </div>
          </article>
        </section>
      `}function c$(e,t){return e.length?`
        <section class="kana-lesson-step" aria-labelledby="kanaExplanationTitle">
          <div class="kana-step-heading">
            <span class="pill">03</span>
            <h2 id="kanaExplanationTitle">${i(t.explanation)}</h2>
            <p>${i(t.explanationHint)}</p>
          </div>
          <div class="kana-explanation-grid">
            ${e.map(n=>`
              <article class="jlpt-section-card kana-explanation-card">
                <h3>${i(n.title)}</h3>
                ${n.body.map(s=>`<p>${i(s)}</p>`).join("")}
              </article>
            `).join("")}
          </div>
        </section>
      `:""}function d$(e,t){if(!e?.rows?.length)return"";const n=e.headers.length===3?e.headers:[t.example,t.reading,t.meaning];return`
        <section class="kana-lesson-step" aria-labelledby="kanaExamplesTitle">
          <div class="kana-step-heading">
            <span class="pill">04</span>
            <h2 id="kanaExamplesTitle">${i(t.examples)}</h2>
            <p>${i(e.title||t.examplesHint)}</p>
          </div>
          <div class="kana-examples-table-wrap">
            <table class="kana-examples-table">
              <thead>
                <tr>${n.map(s=>`<th scope="col">${i(s)}</th>`).join("")}</tr>
              </thead>
              <tbody>
                ${e.rows.map(s=>`
                  <tr>
                    ${s.map((a,o)=>`<td data-label="${g(n[o]||"")}"${o===0?' lang="ja"':""}>${i(a)}</td>`).join("")}
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </section>
      `}function u$(e,t,n){return _o(e.slug,t.id),`
      <section class="page textbooks-page n5-course-page kana-course-page kana-practice-page">
        ${pa(e,t.title,n,t.id)}
        <article class="jlpt-lesson-hero">
          <div>
            <span class="pill">${i(n.practice)} ${i(t.order)}</span>
            <h2>${i(t.title)}</h2>
            ${Bg(t.body)}
          </div>
        </article>
        ${t.exercises.map(s=>kc(e.slug,t.id,"practice",s,n)).join("")}
      </section>
    `}function p$(e,t){return _o(e.slug,"final"),`
      <section class="page textbooks-page n5-course-page n5-final-page kana-course-page kana-final-page">
        ${pa(e,t.final,t)}
        <article class="jlpt-lesson-hero">
          <div>
            <span class="pill">${i(t.final)}</span>
            <h2>${i(e.final_test.title)}</h2>
            <p>${i((e.final_test.body||[]).slice(0,4).join(" "))}</p>
          </div>
        </article>
        ${(e.final_test.sections||[]).map(n=>kc(e.slug,"final","final",n,t)).join("")}
      </section>
    `}function g$(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page">
        ${pa(e,t.reference,t)}
        <article class="jlpt-section-card">
          <h2>${i(e.reference.title)}</h2>
          ${Bg(e.reference.body)}
        </article>
        <div class="kana-table-grid">
          ${e.base_characters.map(n=>h$(n)).join("")}
        </div>
      </section>
    `}function m$(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page">
        ${pa(e,t.sources,t)}
        <article class="jlpt-section-card">
          <h2>${i(t.sourcePdf)}</h2>
          <p>SHA-256: <code>${i(e.source.sha256)}</code></p>
          <p>${i(e.source.publisher)} · ${i(e.source.revision)} · ${i(e.source.site)}</p>
          <a class="btn primary" href="${g(e.source.pdf_file)}" download="${g((e.source.pdf_file||"").split("/").pop()||`${e.slug}.pdf`)}" target="_blank" rel="noopener">${i(t.downloadPdf)}</a>
        </article>
        <article class="jlpt-section-card">
          <h2>${i(t.sources)}</h2>
          <ul>${(e.sources||[]).map(n=>`<li>${i(n)}</li>`).join("")}</ul>
        </article>
      </section>
    `}function f$(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page kana-review-page">
        ${pa(e,t.review,t)}
        <article class="empty-state kana-review-entry">
          <span class="kanji-char" lang="ja">${i(e.native_title)}</span>
          <h2>${i(p()==="ru"?"Повторение теперь общее":"Review is unified now")}</h2>
          <p>${i(p()==="ru"?"Хирагана, катакана и кандзи идут через один экран SRS Flash Kanji: одна карточка за раз, общие кнопки «Не помню» и «Помню», раздельная статистика по ID.":"Hiragana, katakana and kanji now use the same Flash Kanji SRS screen: one card at a time, shared Forgot/Remember actions, independent card IDs.")}</p>
          <div class="actions">
            <button class="btn primary" type="button" data-action="route" data-route="review">${i(t.review)}</button>
            <a class="btn ghost" href="#textbooks/${g(e.slug)}">${i(e.title)}</a>
          </div>
        </article>
      </section>
    `}function pa(e,t,n,s){return`
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">Flash Kanji · ${i(e.title)}</p>
            <h1>${i(t)} <span lang="ja">${i(e.native_title)}</span></h1>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${g(e.slug)}">${i(e.title)}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(n.allTextbooks)}</button>
            <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(us().settings.showRomaji?n.hideRomaji:n.showRomaji)}</button>
            ${ps("textbook",{level:e.slug})}
          </div>
        </div>
      `}function Bg(e=[]){const t=[];for(const n of e.slice(0,40))/^(Цель раздела|Знаки урока|Произношение|Типичная ошибка|Слова|Пример|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(n)?t.push(`<h3>${i(n)}</h3>`):t.push(`<p>${i(n)}</p>`);return t.join("")}function h$(e){return`
        <button class="kana-char-chip" type="button" data-action="play-kana-tts" data-text="${g(e.kana)}">
          <span lang="ja">${i(e.kana)}</span>
          ${us().settings.showRomaji&&e.romaji?`<small>${i(e.romaji)}</small>`:""}
        </button>
      `}function kc(e,t,n,s,a){const o=w$(e,t,n,s.id),l=r.kanaExerciseDrafts[$c(e,t,n,s.id)]||{};return`
        <form class="jlpt-section-card kana-exercise-card" data-kana-exercise-form data-course="${g(e)}" data-owner="${g(t)}" data-owner-type="${g(n)}" data-exercise="${g(s.id)}">
          <h3>${i(s.label)}</h3>
          <p>${i(s.instruction||"")}</p>
          <div class="kana-exercise-items">
            ${s.items.map(c=>v$(c,o,a,l)).join("")}
          </div>
          ${o?.completed?`<p class="exercise-feedback ${o.passed?"is-correct":"is-wrong"}" aria-live="polite">${i(a.score)}: ${i(o.score)}/${i(o.total)} · ${i(o.passed?a.passed:a.notPassed)}</p>`:""}
          <button class="btn primary" type="button" data-action="kana-submit-exercise">${i(a.check)}</button>
        </form>
      `}function v$(e,t,n,s={}){const a=Object.prototype.hasOwnProperty.call(s,e.number)?s[e.number]:t?.answers?.[e.number]||"",o=t?.completed?t.correct?.[e.number]:null;return`
        <label class="kana-answer-row ${o===!0?"is-correct":o===!1?"is-wrong":""}">
          <span>${i(e.number)}. ${i(e.prompt)}</span>
          <input type="text" name="kana-${g(e.number)}" value="${g(a)}" autocomplete="off" inputmode="text" />
          ${o===null?"":`<small>${i(o?n.correct:`${n.wrong}: ${e.solution||e.accepted_answers?.[0]||""}`)}</small>`}
        </label>
      `}function yc(e=[]){return(e||[]).reduce((t,n)=>t+(n.items||[]).length,0)}function co(e,t){const n=yt(e).lessons[t.id];return n||{completed:!1,passed:!1,latestScore:0,bestScore:0,exercises:{},updatedAt:null}}function w$(e,t,n,s){const a=yt(e);return n==="lesson"?a.lessons?.[t]?.exercises?.[s]||null:n==="practice"?a.practices?.[t]?.exercises?.[s]||null:n==="final"&&(a.finalTest?.[s]||a.finalTest?.sections?.[s])||null}function In(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim(),a=Array.from(s)[0]?.codePointAt(0);return!ve(n)||!Number.isInteger(a)?"":`kana:${n}:${a.toString(16).toUpperCase()}`}function fr(e,t=""){const n=String(e||"").trim(),s=n.match(/^kana:(hiragana|katakana):([0-9a-f]+)$/i);if(s){const l=Number.parseInt(s[2],16);return!Number.isInteger(l)||l<=0||l>1114111?null:{slug:s[1].toLowerCase(),kana:String.fromCodePoint(l),id:In(s[1],String.fromCodePoint(l))}}const a=n.match(/^(hiragana|katakana):(.+)$/i);if(a){const l=a[1].toLowerCase(),c=a[2].trim();return{slug:l,kana:c,id:In(l,c)}}const o=String(t||"").toLowerCase();return ve(o)&&n?{slug:o,kana:n,id:In(o,n)}:null}function Jt(e){const t=String(e||"").toLowerCase();if(!ve(t))return{};const n=yt(t),s=n.review&&typeof n.review=="object"?n.review:{};if($u.has(s))return s;const a={};let o=!1;Object.entries(s).forEach(([d,u])=>{const m=fr(d,t),h=m?.slug===t?m.id:"",f=ot(u);if(!h){a[d]=f;return}const S=a[h];(!S||Number(f.reviewCount||0)>Number(S.reviewCount||0)||(Date.parse(String(f.lastReviewedAt||""))||0)>(Date.parse(String(S.lastReviewedAt||""))||0))&&(a[h]=f),h!==d&&(o=!0)});const l=Object.keys(s).sort().join("|"),c=Object.keys(a).sort().join("|");return n.review=a,$u.add(a),(o||l!==c)&&T(),n.review}function ga(e,t){const n=vn(e),s=String(t||"");if(!n)return null;if(!nl.has(n)){const a=new Map;for(const o of[...n.base_characters||[],...(n.lessons||[]).flatMap(l=>l.focus_characters||[])])a.has(o.kana)||a.set(o.kana,o);nl.set(n,a)}return nl.get(n).get(s)||null}function zg(e){const t=vn(e)||Ga(e);return t?.title?t.title:String(e||"").toLowerCase()==="katakana"?p()==="ru"?"Катакана":"Katakana":p()==="ru"?"Хирагана":"Hiragana"}function Ug(e,t="due"){const n=Jt(e.slug),s=Date.now();return(e.base_characters||[]).map(a=>{const o=In(e.slug,a.kana),l=n[o]||null;return{...a,id:o,progress:l}}).filter(a=>t==="all"?!0:tv(a.progress?[{cardId:a.id,...a.progress}]:[],s).initial.length>0)}function b$(e,t,n,s){return e?n==="lesson"?e.lessons?.find(o=>o.id===t)?.exercises?.find(o=>o.id===s)||null:n==="practice"?e.reading_practice?.find(o=>o.id===t)?.exercises?.find(o=>o.id===s)||null:n==="final"&&e.final_test?.sections?.find(a=>a.id===s)||null:null}function $c(e,t,n,s){const a=[e,n,t,s].map(o=>String(o||"").trim());return a.every(Boolean)?a.join(":"):""}function k$(e){var C;const t=e.closest?.("[data-kana-exercise-form]");if(!t)return;const n=String(t.dataset.course||"").toLowerCase(),s=String(t.dataset.owner||""),a=String(t.dataset.ownerType||""),o=String(t.dataset.exercise||"");if(!ve(n))return;const l=vn(n),c=b$(l,s,a,o);if(!l||!c)return;const d=Me(),u={},m=$c(n,s,a,o),h=new FormData(t);c.items.forEach(x=>{const L=h.get(`kana-${x.number}`);u[x.number]=tu(typeof L=="string"?L:"")});const f=lI(c,u),S=yt(n);if(S.currentRoute=s,S.updatedAt=f.updatedAt,a==="lesson"){const x=l.lessons.find(N=>N.id===s),L=S.lessons[s]||{exercises:{},completed:!1,passed:!1,latestScore:0,bestScore:0,updatedAt:null};L.exercises[o]=f;const k=Xd(x?.exercises||[],L.exercises);Object.assign(L,k,{bestScore:Math.max(Number(L.bestScore||0),k.latestScore),updatedAt:f.updatedAt}),S.lessons[s]=L,L.passed&&Jg(l,x?.focus_characters||[])}if(a==="practice"){const x=l.reading_practice.find(N=>N.id===s),L=S.practices[s]||{exercises:{},completed:!1,passed:!1,latestScore:0,bestScore:0,updatedAt:null};L.exercises[o]=f;const k=Xd(x?.exercises||[],L.exercises);Object.assign(L,k,{bestScore:Math.max(Number(L.bestScore||0),k.latestScore),updatedAt:f.updatedAt}),S.practices[s]=L}if(a==="final"){S.finalTest||(S.finalTest={}),(C=S.finalTest).sections||(C.sections={}),S.finalTest.sections[o]=f;const x=Xd(l.final_test?.sections||[],S.finalTest.sections);Object.assign(S.finalTest,x,{bestScore:Math.max(Number(S.finalTest.bestScore||0),x.latestScore),updatedAt:f.updatedAt})}m&&delete r.kanaExerciseDrafts[m],D(f.passed?"answer_correct":"answer_wrong"),T(),je({scrollPolicy:re.PRESERVE,viewportSnapshot:d})}function y$(e,t){const n=String(e||"").toLowerCase();if(!ve(n)||!t)return;const s=Me(),a=yt(n);a.writing[t]=new Date().toISOString(),a.currentRoute=t,a.updatedAt=a.writing[t],T(),G(Dg().writeDone),je({scrollPolicy:re.PRESERVE,viewportSnapshot:s})}function $$(e,t){const n=String(e||"").toLowerCase(),s=bc(n,t);!ve(n)||!t||(r.kanaLessonCharacterIndex[s]=0,r.pendingFocus="kana-character-card",Xe())}function j$(e,t,n,s){const a=String(e||"").toLowerCase();if(!ve(a)||!t||!n)return;const o=Me(),l=vn(a),c=l?.lessons?.find(k=>k.id===t)||null;if(!l||!c)return;const d=In(a,n);if(!d)return;const u=yt(a),m=Jt(a),h=ie(ot(m[d]||null)),f=ze(s)?"forgot":"remember",S=iv(h,f);m[d]=S,u.review=m,u.currentRoute=t,u.updatedAt=new Date().toISOString(),Xt(h,S,f),be({skipAchievements:!0}),f==="forgot"?(r.progress.totalWrong+=1,r.progress.correctCombo=0,we("answer_wrong",{cardId:d,kana:n,rating:f},{skipAchievements:!0})):(r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo),we("answer_correct",{cardId:d,kana:n,rating:f,combo:r.progress.correctCombo},{skipAchievements:!0}));const C=bc(a,t),x=c.focus_characters.findIndex(k=>k.kana===n),L=Og(a,c);r.kanaLessonCharacterIndex[C]=Math.min((x>=0?x:L)+1,c.focus_characters.length),r.pendingFocus="kana-character-card",D(f==="forgot"?"answer_wrong":"answer_correct"),T(),je({scrollPolicy:re.PRESERVE,viewportSnapshot:o})}function S$(e,t,n){_f(e,t,n)}function Jg(e,t=[]){const n=Jt(e.slug);return Wd(n,t.filter(s=>ga(e.slug,s.kana)).map(s=>In(e.slug,s.kana)))}function Gg(e=fe){const t=bu.get(r.progress)||new Map;bu.set(r.progress,t);const n=(o,l)=>{const c=t.get(o);return c&&l.every((d,u)=>d===c[u])?!1:(t.set(o,l),!0)},s=new Map;for(const o of[...r.n5KanjiCatalog,...r.n4KanjiCatalog,...r.n3KanjiCatalog,...r.n2KanjiCatalog,...r.n1KanjiCatalog])s.set(o.kanji,[String(o.id),String(o.courseCardId)]);let a=0;if(n("aliases-v1",[r.cards,r.n5KanjiCatalog,r.n4KanjiCatalog,r.n3KanjiCatalog,r.n2KanjiCatalog,r.n1KanjiCatalog])){const o=r.cards.map(l=>({id:String(l.id),aliases:[l.kanji,`kanji:${l.id}`,`card:${l.id}`,...s.get(l.kanji)||[]]}));ku=new Map(o.flatMap(l=>l.aliases.map(c=>[c,l.id]))),a=B1(r.progress.cards,o)}for(const o of e){const l=Ms(o),c=l.course(),d=Object.keys(c.completedLessons||{}).filter(u=>c.completedLessons[u]).sort().join("|");if(n(`jlpt-enrollment-v1:${o}`,[r.cards,l.lessons(),d]))for(const u of l.lessons())pn(o,c,u)&&(a+=Wd(r.progress.cards,l.cardsForLesson(u).map(m=>String(m.id))))}for(const o of["hiragana","katakana"]){const l=vn(o);if(!l)continue;const c=yt(o),d=Object.keys(c.lessons).filter(u=>c.lessons[u]?.passed).sort().join("|");if(n(`kana-enrollment-v1:${o}`,[l,d]))for(const u of l.lessons||[])c.lessons[u.id]?.passed&&(a+=Jg(l,u.focus_characters||[]))}return a&&(Pe=null),a>0}function C$(){const e=Me(),t=us();t.settings.showRomaji=!t.settings.showRomaji,T(),je({scrollPolicy:re.PRESERVE,viewportSnapshot:e})}function x$(e){const t=String(e||"").trim();t&&(Io(),rv(t)||G(p()==="ru"?"Системная озвучка недоступна.":"System speech is not available."))}function N$(e){r.activeTextbookLevel="N5",r.activeJlptLesson="N5",fa();const t=String(r.activeTextbookSubroute||"");if(t==="final-test"||t==="final")return q$();if(t==="review")return J$();const n=qt(t);return n?(se().currentLessonId=n.id,Rt("N5",n.id,"n5_lesson_page"),dn("N5",n,"n5_lesson_page"),z$(e,n)):L$(e)}function L$(e){const t=nj(),n=et(),s=tt(),a=Y$(),o=r.n5Meta||{},l=b(o.principle||{});return`
      <section class="page textbooks-page n5-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N5 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(b(o.description||e.description||{}))}</p>
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
          ${Rn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${M(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,E(t.studied,t.total))}
          ${M(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,E(t.completedLessons,s.length))}
          ${M(n.reviews,t.reviews,n.srs,E(t.reviews,Math.max(t.total,1)))}
          ${M(n.difficult,t.difficult,n.filterDifficult,E(t.difficult,Math.max(t.total,1)))}
        </div>

        <section class="n5-panel">
          <div>
            <h2>${i(n.lessonsTitle)}</h2>
            <p>${i(n.lessonsDescription)}</p>
          </div>
          <div class="n5-lesson-grid">
            ${s.map(c=>A$(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(b((r.n5Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(b(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${wr("N5")}
      </section>
    `}function A$(e){const t=tm(e.id),n=et();let s=e.kanji.filter(a=>se().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#textbooks/N5/${g(e.id)}" data-action="n5-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(b(e.title))}</h3>
        <p>${i(b(e.goal))}</p>
        <div class="n5-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(sj(t))}</small>
      </a>
    `}function Xn(){var e;return(e=r.progress).jlptLessonStudy||(e.jlptLessonStudy=_l()),r.progress.jlptLessonStudy}function Ze(e,t){return`${String(e||"").toUpperCase()}:${String(t||"")}`}function Gt(e,t,n="player"){return`jlpt-${String(e||"").toLowerCase()}-${n}-${String(t||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function jc(e,t){const n=F(e),s=String(t||"");if(!n||!s)return!1;const a=Yt(n),o=pn(n,a,s),l=Qn(n,s).some(c=>ye.has(`${n.toLowerCase()}:${c}`));return!!(o||l)}function Es(e,t,n){const s=Xn(),a=Ze(e,t?.id),o=$p();let l=s.sessions[a];l||(l={...o,level:String(e||"").toUpperCase(),lessonId:String(t?.id||""),startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()},s.sessions[a]=l),l.level=String(e||l.level||"").toUpperCase(),l.lessonId=String(t?.id||l.lessonId||""),l.answers||(l.answers={}),l.phase=jp(l.phase),l.startedAt||(l.startedAt=new Date().toISOString()),l.updatedAt||(l.updatedAt=new Date().toISOString());let c=jc(e,t?.id);!c&&Wg(e,t)&&(c=!0,T());const d=Wo({cards:n,session:l,confirmedCompleted:c});return l.currentIndex=d.currentIndex,l.phase=d.phase,d.status!=="done"&&!c&&(l.completedAt=null),d.status==="test-ready"&&(l.testOpenedAt||(l.testOpenedAt=l.updatedAt||new Date().toISOString())),d.status==="incomplete"&&(l.testOpenedAt=null),s.activeSessionKey=a,s.lastUpdatedAt=new Date().toISOString(),{session:l,key:a,status:d.status,expectedCardIds:d.expectedCardIds,answeredExpectedCardIds:d.answeredExpectedCardIds,answeredCount:d.answeredCount,currentIndex:d.currentIndex,total:d.total}}function I$(e,t){return!e||!Array.isArray(t)||!t.length||e.session?.phase!=="study"?null:t[Math.min(Math.max(Number(e.currentIndex||0),0),t.length-1)]||null}function Ms(e){const t=F(e);return t==="N5"?{level:t,course:se,lessons:tt,lessonById:qt,cardsForLesson:gn,buildExercises:Ds}:t==="N4"?{level:t,course:Q,lessons:ut,lessonById:Zn,cardsForLesson:kr,buildExercises:$a}:t==="N3"?{level:t,course:V,lessons:gt,lessonById:ts,cardsForLesson:$r,buildExercises:Sa}:t==="N2"?{level:t,course:X,lessons:ft,lessonById:ss,cardsForLesson:Sr,buildExercises:xa}:t==="N1"?{level:t,course:ne,lessons:vt,lessonById:Fs,cardsForLesson:La,buildExercises:Aa}:null}function T$(e){const t=F(e);return t?`${t.toLowerCase()}Course`:""}function Qn(e,t){const n=F(e),s=String(typeof t=="object"&&t?t.id:t||"").trim(),a=new Set(s?[s]:[]),o=String(n||"").toLowerCase();if(o){const l=s.match(/^lesson-(\d+)$/i);l&&a.add(`${o}-lesson-${l[1]}`);const c=s.match(new RegExp(`^${o}-lesson-(\\d+)$`,"i"));c&&a.add(`lesson-${c[1]}`)}return[...a].filter(Boolean)}function pn(e,t,n){const s=t?.completedLessons||{};return Qn(e,n).some(a=>!!s[a])}function R$(e,t){if(!e||!t)return null;const n=e.lessons(),s=n.find(o=>Number(o.order||0)===Number(t.order||0)+1);if(s)return s;const a=n.findIndex(o=>o.id===t.id);return a>=0&&n[a+1]||null}function Sc(e,t,n=""){if(!e||!t)return"";const s=e.lessons(),a=[...new Set([n,...Qn(e.level,t)].map(String).filter(Boolean))];for(const o of a){const l=o.match(/^(.*?)(\d+)$/);if(!l)continue;const c=Number(l[2])+1;if(s.length&&c>s.length)continue;const d=`${l[1]}${c}`,u=e.lessonById(d);return u&&u.id!==t.id?u.id:d}return""}function _$(e,t,n){if(!e||!t||!n)return;const s=e.lessons(),a=e.lessonById(t.currentLessonId);if(!(a?pn(e.level,t,a)||pn(e.level,t,t.currentLessonId):!t.currentLessonId||t.currentLessonId===n.id||pn(e.level,t,t.currentLessonId)))return;const l=s.find(c=>!pn(e.level,t,c));t.currentLessonId=l?.id||Sc(e,n,t.currentLessonId)||a?.id||n.id}function P$(e,t){const n=F(e);if(!n||!t)return!1;if([t.completedLessons,t.studiedKanji,t.srsKanji,t.difficultKanji,t.exerciseResults,t.completedExercises].some(o=>o&&typeof o=="object"&&Object.keys(o).length>0))return!0;const a=`${n}:`;return Object.keys(r.progress?.jlptLessonStudy?.sessions||{}).some(o=>o.startsWith(a))}function qg(e,t){const n=F(e);return`${String(n||e||"").toLowerCase()}:${String(t||"")}`}function Hg(e,t){const n=Ms(e);if(!n)return null;const s=typeof t=="object"&&t?t:n.lessonById(t);if(!s)return null;const a=n.course(),o=n.cardsForLesson(s),l=n.buildExercises(s),c=r.progress?.jlptLessonStudy?.sessions?.[Ze(n.level,s.id)]||null,d=jc(n.level,s.id);return{...qI({cards:o,session:c,confirmedCompleted:d,exercises:l,exerciseResults:a.exerciseResults||{},completedExercises:a.completedExercises||{},isCardStudied:u=>!!(a.studiedKanji?.[u.kanji]||a.difficultKanji?.[u.kanji]||Fp(u))}),level:n.level,lesson:s,course:a,cards:o,exercises:l}}function E$(e,t,n,s){const a=F(e);if(!a||!t)return!1;const o=Xn(),l=Ze(a,t),c=o.sessions[l];return c?(c.phase="done",c.completedAt=s,c.updatedAt=s,c.currentIndex=Math.max(0,Number(n||0)),o.activeSessionKey=l,o.lastUpdatedAt=s,!0):!1}function M$(e,t,n,s,a=new Date().toISOString()){const o=Ms(e);if(!o||!t||!n)return!1;Wd(r.progress.cards,(s||o.cardsForLesson(t)).map(k=>String(k.id)))&&(Pe=null);const l=T$(o.level),c=l&&r.progress?.[l]||n;l&&r.progress&&!r.progress[l]&&(r.progress[l]=c),c.completedLessons||(c.completedLessons={});const d=Qn(o.level,t),u=d.some(k=>!!c.completedLessons[k]),m=d.map(k=>c.completedLessons[k]).find(Boolean)||a;d.forEach(k=>{c.completedLessons[k]=m}),n!==c&&(n.completedLessons||(n.completedLessons={}),d.forEach(k=>{n.completedLessons[k]=m})),d.forEach(k=>ye.add(qg(o.level,k))),E$(o.level,t.id,s?.length||0,m);const h=R$(o,t),f=o.lessonById(c.currentLessonId),S=h?.id||Sc(o,t,c.currentLessonId)||t.id,C=Qn(o.level,c.currentLessonId),x=C.some(k=>d.includes(k)),L=C.some(k=>!!c.completedLessons[k]);return(!c.currentLessonId||c.currentLessonId===t.id||f?.id===t.id||x||L)&&(c.currentLessonId=S),_$(o,c,t),n!==c&&(n.currentLessonId=c.currentLessonId),vr(o.level),!u}function Wg(e,t){const n=Hg(e,t);if(!n)return!1;const s=pn(n.level,n.course,n.lesson),a=Qn(n.level,n.lesson).some(l=>ye.has(qg(n.level,l))),o=!!(n.cardStudyComplete&&n.exerciseComplete);return s||!(n.canMigrateCompletion||o||a)?!1:M$(n.level,n.lesson,n.course,n.cards)}function hr(e,t){const n=Hg(e,t);return n?n.complete?"completed":n.study.answeredCount>0||n.cardStudyComplete||n.correctExerciseCount>0||(n.lesson.kanji||[]).some(a=>n.course.studiedKanji?.[a]||n.course.difficultKanji?.[a])?"started":"new":"new"}function Ks(e){const t=Ms(e);return t?t.lessons().filter(n=>hr(t.level,n.id)==="completed").length:0}function vr(e){var o;const t=F(e),n={N5:"N4",N4:"N3",N3:"N2",N2:"N1"}[t],a=Ms(t)?.lessons()||[];return!t||!n||!a.length||Ks(t)<a.length?!1:((o=r.progress).unlockedJlptLevels||(o.unlockedJlptLevels=[]),[t,n].forEach(l=>{r.progress.unlockedJlptLevels.includes(l)||r.progress.unlockedJlptLevels.push(l)}),!0)}function K$(e){const t=Array.isArray(e)?e:[];return t.length?`
      <ul class="example-list lesson-study-example-list">
        ${t.slice(0,2).map(yo).join("")}
      </ul>
    `:""}function D$(e){const t=Fa(e),n=t.length>0;return`
      <details class="lesson-study-details">
        <summary>${i(p()==="ru"?"Показать подробнее":"Show details")}</summary>
        <div class="lesson-study-details-body">
          ${ed(e)}
          ${n?`
            <div>
              <h3>${i(_("strokeOrder"))}</h3>
              <ol class="stroke-list lesson-study-strokes">${t.map(s=>`<li>${i(s)}</li>`).join("")}</ol>
            </div>
          `:""}
        </div>
      </details>
    `}function F$(e,t,n,s,a,o,l={}){if(!n)return"";const c=typeof l.examples=="function"?l.examples(n,t)||[]:[],d=typeof l.sentence=="function"?l.sentence(n,t):"",u=typeof l.extra=="function"?l.extra(n,t):"",m=l.answerAction||"jlpt-lesson-answer",h=String(e||n.jlpt||"").toUpperCase(),f=Number(s||0),S=J(n.id),C=t?.id||"";return`
      <article class="lesson-player-card lesson-study-card">
        <div class="lesson-player-kanji">
          <div class="lesson-player-glyph">${i(n.kanji)}</div>
          <div class="lesson-player-kanji-copy">
            <div class="tag-row compact-tags">
              <span class="pill">${i(o.step)} ${i(f+1)}</span>
              <span class="pill">${i(S.state)}</span>
              ${n.jlpt?`<span class="pill">${i(n.jlpt)}</span>`:""}
              ${n.strokes?`<span class="pill">${i(n.strokes)} ${i(_("strokes"))}</span>`:""}
              ${ff(n)}
            </div>
            <h2>${i(K(n))}</h2>
            <p class="label lesson-study-progress-label">${i(e||n.jlpt||"")} · ${i(p()==="ru"?`Кандзи ${Math.min(f+1,a)} из ${a}`:`Kanji ${Math.min(f+1,a)} of ${a}`)}</p>
            <dl class="n5-readings lesson-study-readings">
              ${vf(n,"onyomi",o.onyomi,n.onyomi)}
              ${vf(n,"kunyomi",o.kunyomi,n.kunyomi||n.hiragana)}
            </dl>
            ${K$(c)}
            ${d}
            ${u?`<div class="lesson-study-extra">${u}</div>`:""}
            ${D$(n)}
          </div>
        </div>
        <div class="lesson-choice-grid lesson-study-actions">
          <button class="btn success" type="button" data-action="${g(m)}" data-level="${g(h)}" data-lesson="${g(C)}" data-card="${g(n.id)}" data-value="remember">${i(o.remember)}<small>${i(p()==="ru"?"в повторение":"to review")}</small></button>
          <button class="btn danger" type="button" data-action="${g(m)}" data-level="${g(h)}" data-lesson="${g(C)}" data-card="${g(n.id)}" data-value="forget">${i(o.notRemember)}<small>${i(p()==="ru"?"ещё раз":"show again")}</small></button>
        </div>
      </article>
    `}function O$(e,t,n,s,a,o="test-ready"){const l=o==="done";return`
      <article class="lesson-player-card lesson-study-complete">
        <div class="lesson-study-complete-copy">
          <span class="pill">${i(l?n.completed:p()==="ru"?"Карточки изучены":"Cards studied")}</span>
          <h2>${i(l?n.lessonComplete:p()==="ru"?"Карточки изучены. Перейдите к упражнениям":"Cards studied. Continue to the exercises")}</h2>
          <p>${i(l?p()==="ru"?"Урок завершён штатно, прогресс сохранён.":"The lesson is completed and progress is saved.":p()==="ru"?"Все карточки урока отвечены. Выполните упражнения ниже, чтобы завершить урок.":"All lesson cards are answered. Complete the exercises below to finish the lesson.")}</p>
          <div class="tag-row">
            <span class="pill">${i(p()==="ru"?`Кандзи ${a}/${s}`:`Kanji ${a}/${s}`)}</span>
            <span class="pill">${i(l?n.completed:p()==="ru"?"упражнения ниже":"exercises below")}</span>
          </div>
        </div>
      </article>
    `}function B$(e,t,n){return`
      <article class="lesson-player-card lesson-study-complete lesson-study-unavailable">
        <div class="lesson-study-complete-copy">
          <span class="pill danger-pill">${i(e||"")} · ${i(p()==="ru"?"карточки недоступны":"cards unavailable")}</span>
          <h2>${i(p()==="ru"?"Не удалось загрузить карточки урока":"Could not load lesson cards")}</h2>
          <p>${i(_i())}</p>
          <div class="actions">
            <button class="btn primary" type="button" data-action="retry-jlpt-course-data" data-level="${g(e)}">${i(p()==="ru"?"Повторить":"Retry")}</button>
            <a class="btn ghost" href="#textbooks/${g(e)}">${i(p()==="ru"?"К списку уроков":"Lesson list")}</a>
          </div>
        </div>
      </article>
    `}function ma(e,t,n,s,a={}){const o=Es(e,t,n),l=I$(o,n),c=Number(o.answeredCount||0),d=Number(o.total||0),u=a.playerId||Gt(e,t?.id,"player"),m=d?E(c,d):0,h=l?`${p()==="ru"?"Кандзи":"Kanji"} ${Math.min(c+1,d)}/${d}`:o.session?.phase==="done"?p()==="ru"?"Урок завершён":"Lesson complete":o.status==="incomplete"?p()==="ru"?"Карточки не загружены":"Cards not loaded":p()==="ru"?"Карточки изучены":"Cards studied",f=l?K(l):o.status==="done"?s.lessonComplete:h;return`
      <article class="study-card lesson-player lesson-study-player" id="${g(u)}">
        <div class="lesson-player-progress">
          <span>${i(h)}</span>
          <strong>${i(f)}</strong>
          <div class="meter"><i style="width:${m}%"></i></div>
        </div>
        ${l?F$(e,t,l,o.currentIndex,d,s,a):o.status==="incomplete"?B$(e):O$(e,t,s,d,c,o.status)}
      </article>
    `}function z$(e,t){const n=et(),s=gn(t),a=Ds(t),o=tm(t.id),l=Es("N5",t,s);let c=o==="completed";const d=`n5:${t.id}`;ye.has(d)&&(c=!0);const u=c,m=a.filter(q=>xc(q.id)?.correct).length,h=a.length>0&&m===a.length,f=s.filter(q=>se().studiedKanji[q.kanji]).length,S=t.kanji.length,C=f>=S,x=!c&&h&&C,L=t.kanji.filter(q=>se().difficultKanji[q]).join(" · "),k=tt().find(q=>q.order===t.order+1),N=Gt("N5",t.id,"player"),z=Gt("N5",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N5 · ${i(n.lesson)} ${t.order}/10</p>
            <h1>${i(b(t.title))}</h1>
            <p>${i(b(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n5-overview">${i(n.backToN5)}</button>
            <button class="btn" type="button" data-action="n5-review" data-mode="difficult">${i(n.difficult)}</button>
            <a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(b(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
          </div>
          <div class="mini-stat-row">
            ${M(n.studiedKanji,`${Math.min(l.answeredCount,S)}/${S}`,n.kanji,E(l.answeredCount,S))}
            ${M(n.exercises,`${m}/${a.length}`,n.correct,E(m,a.length))}
          </div>
        </article>

        ${ma("N5",t,s,n,{playerId:N,answerAction:"jlpt-lesson-answer",examples:q=>Wt(q),sentence:q=>U$(q,t)})}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(q=>`
              <article>
                <strong>${i(q.jp)}</strong>
                <span>${i(ee(q.reading||""))}</span>
                <small>${i(b({ru:q.ru,en:q.en}))}</small>
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
            ${a.map(q=>Vg(q)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(q=>se().studiedKanji[q.kanji]).length}/8</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
            </div>
            ${!c&&!x?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи (8/8) и упражнения урока.":"Complete all kanji (8/8) and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n5-complete-lesson" data-id="${g(t.id)}" ${u||!x?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n5-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#textbooks/N5/${g(k.id)}" data-action="n5-open-lesson" data-id="${g(k.id)}">${i(n.nextLesson)}</a>`:`<a class="btn ghost" href="#textbooks/N5/final-test">${i(n.finalTest)}</a>`}
          </div>
        </section>
      </section>
    `}function U$(e,t){const n=t.sentences.find(s=>s.jp.includes(e.kanji))||t.sentences[0];return n?`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(ee(n.reading||""))}</span>
        <small>${i(b({ru:n.ru,en:n.en}))}</small>
      </div>
    `:""}function Vg(e){const t=et(),n=xc(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&Yn("N5",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(b(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(um(e.id))}" type="text" maxlength="2" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(b(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n5-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Xg(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(b(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${va("N5",e).map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Xg(e,n)}
      </article>
    `}function Xg(e,t){if(!t)return"";const n=et(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function J$(e){const t=et(),n=se().activeReviewMode||"due",s=$j(n);return`
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
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n5-review" data-mode="${g(a.id)}">${i(b(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>G$(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function G$(e,t){const n=et(),s=J(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(en(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(Wt(e)[0]?.word||e.hiragana||"")} · ${i(Wt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function q$(e){const t=et(),n=r.n5FinalTest||{},s=cm(),a=se().finalTest,o=hn(a,s),l=o.answered,c=o.ready,d=r.finalTestBusy;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const h=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==h)&&(a.percent=h),a.completedAt||(a.completedAt=new Date().toISOString()),T()}const u=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,m=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N5 · Final</p>
            <h1>${i(b(n.title||{}))}</h1>
            <p>${i(b(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n5-overview">${i(t.backToN5)}</button>
            <button class="btn" type="button" data-action="n5-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${M(t.questions,`${l}/${s.length}`,t.finalTest,E(l,s.length))}
          ${M(t.score,u||m>0?`${m}%`:"—",`${n.passingPercent||80}%`,u||m>0?m:0)}
          ${M(t.mistakes,u?(a.mistakes||[]).length:0,t.difficult,u?E((a.mistakes||[]).length,s.length):0)}
        </div>

        ${u?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n5-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${Zt("N5","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((h,f)=>H$(h,f)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n5-final-submit" ${d||u?"disabled":""}>${i(u?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Zt("N5","btn ghost")}
          <button class="btn ghost" type="button" data-action="n5-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function H$(e,t){const n=se().finalTest.answers?.[e.id],s=!!se().finalTest.completedAt,a=r.finalTestModal&&r.finalTestModal.level==="N5"&&r.finalTestModal.kind==="warning"?r.finalTestModal:null,o=!!(a&&Array.isArray(a.missingIds)&&a.missingIds.includes(e.id));return`
      <article id="${g(Lr("n5",e.id))}" class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":o?"is-missing":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(l=>{const c=n===l.value;return`<button class="btn ${s&&l.value===e.answer?"success":c?"primary":"ghost"}" type="button" data-action="n5-final-answer" data-id="${g(e.id)}" data-value="${g(l.value)}">${i(l.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(et().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function et(){return p()==="ru"?{title:"JLPT N5",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",courseMap:"Полноценный интерактивный учебник N5",continue:"Продолжить",review:"Повторять N5",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",reviews:"Повторения",difficult:"Сложные",filterDifficult:"фильтр",srs:"Повторение",lessons:"уроков",lessonsTitle:"10 уроков по 8 кандзи",lessonsDescription:"Каждый урок ведёт от знака к слову, предложению, упражнению, письму и повторению.",reviewPlan:"План повторения на 30 дней",day:"день",lesson:"Урок",backToN5:"К N5",lessonChain:"Кандзи -> слово -> предложение -> практика",lessonChainText:"Сначала узнаёшь знак, затем видишь чтение в слове, читаешь предложение, отвечаешь и отправляешь карточку в повторение.",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Читай вслух: так чтение перестаёт быть отдельной таблицей.",exercisesText:"Смешанная практика работает внутри урока и повторения.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока доступны в повторении.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда все 8 кандзи добавлены в повторение.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",remember:"Помню",notRemember:"Не помню",details:"Показать подробнее",completed:"Пройдено",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N5-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N5.",noReviewCards:"Сейчас нет карточек в этом фильтре.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N5",finalPassed:"N5 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N5",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",courseMap:"Full interactive N5 textbook",continue:"Continue",review:"Review N5",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",reviews:"Reviews",difficult:"Difficult",filterDifficult:"filter",srs:"Review",lessons:"lessons",lessonsTitle:"10 lessons, 8 kanji each",lessonsDescription:"Each lesson moves from sign to word, sentence, exercise, writing, and SRS.",reviewPlan:"30-day review plan",day:"day",lesson:"Lesson",backToN5:"To N5",lessonChain:"Kanji -> word -> sentence -> practice",lessonChainText:"First recognize the sign, then see the reading in a word, read a sentence, answer, and send the card to SRS.",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud so readings stop feeling like a separate table.",exercisesText:"Mixed practice works inside lessons and review.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N5 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when all 8 kanji are in review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N5 review",reviewDescription:"Review due cards, difficult kanji, or the full N5 set.",noReviewCards:"No cards in this filter right now.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N5",finalPassed:"N5 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Qg(){return p()==="ru"?{title:"Чтение и самопроверка",description:"Тексты из md-файла для чтения вслух и проверки понимания по вопросам ниже.",questions:"Проверочные вопросы",noQuestions:"В этом тексте пока нет вопросов.",texts:"текстов",genre:"Жанр",source:"Опора",goal:"Цель"}:{title:"Reading and self-check",description:"Texts from the md file for reading aloud and checking understanding with the questions below.",questions:"Check questions",noQuestions:"No questions are listed for this text.",texts:"texts",genre:"Genre",source:"Source",goal:"Goal"}}function Yg(e){return F(e)||String(e||"").toUpperCase()}function Zg(e){const t=Yg(e);return Array.isArray(r.jlptReadingByLevel?.[t])?r.jlptReadingByLevel[t]:[]}function Cc(e){const t=r.jlptReadingTranslations?.[String(e?.id||"")]||{};return{title:{ru:String(t.titleRu||e?.title||"").trim(),en:String(t.titleEn||e?.title||"").trim()},translation:{ru:String(t.ru||"").trim(),en:String(t.en||"").trim()}}}function em(e){return ee(Ta(String(e?.text||"")).replace(/\s+/g," ").trim())}function W$(e){const t=F(e);return t==="N5"?{maxBlanks:2,maxBlankChars:4}:t==="N4"?{maxBlanks:2,maxBlankChars:5}:t==="N3"?{maxBlanks:3,maxBlankChars:6}:t==="N2"?{maxBlanks:3,maxBlankChars:7}:{maxBlanks:4,maxBlankChars:8}}function V$(){const e=Array.isArray(r.cards)?r.cards:[];if(!e.length)return[];const t=[];return fe.forEach(n=>{Zg(n).forEach((s,a)=>{const o=Cc(s),l=em(s),c=Gc({id:`jlpt-md-${s.id}`,jlpt:n,sentence:s.text||"",reading:l,translationRu:o.translation.ru,translationEn:o.translation.en,source:"markdown",sourceId:String(s.id||""),genre:s.genre||"",goal:s.goal||""},e,W$(n));c&&(c.kind="cloze",c.tiles=Bs(c,e),c.source="markdown",c.sourceId=String(s.id||""),c.sourceKind="markdown",c.sourceTitle=o.title,c.title=o.title,c.genre=s.genre||"",c.goal=s.goal||"",c.passageSource=s.source||"",c.questions=Array.isArray(s.questions)?s.questions:[],c.level=n,c.order=a+1,t.push(c))})}),t}function X$(e){const t=Cc(e),n=em(e),s=n?kf(n):"",a=b(t.translation);return`
      <details class="reading-translation-wrap jlpt-reading-translation">
        <summary class="btn ghost reading-translation-toggle" role="button">${i(Yc())}</summary>
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
            <span>${i(Yc())}</span>
            <strong>${i(a||(p()==="ru"?"Нет данных":"No data"))}</strong>
          </div>
        </div>
      </details>
    `}function wr(e){const t=Zg(e);if(!t.length)return"";const n=Qg(),s=Yg(e),a=qa(s,"textbook_reading_block"),o=_r(s);return(a||o)&&T(),`
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
          ${t.map((l,c)=>Q$(l,s,c)).join("")}
        </div>
      </section>
    `}function Q$(e,t,n){const s=Qg(),a=Cc(e),o=Array.isArray(e?.questions)?e.questions:[];return`
      <article class="jlpt-reading-card">
        <div class="jlpt-reading-card-head">
          <div class="tag-row compact-tags">
            <span class="pill">${i(t)}</span>
            <span class="pill">${i(n+1)}</span>
            ${e.genre?`<span class="pill">${i(e.genre)}</span>`:""}
          </div>
          <h3>${i(e.title||`${t}-${n+1}`)}</h3>
          ${a.title.ru||a.title.en?`<p class="jlpt-reading-meta">${i(b(a.title))}</p>`:""}
          ${e.goal?`<p class="jlpt-reading-meta">${i(s.goal)}: ${i(e.goal)}</p>`:""}
          ${e.source?`<p class="jlpt-reading-meta">${i(s.source)}: ${i(e.source)}</p>`:""}
        </div>
        <div class="jlpt-reading-text">${i(e.text||"")}</div>
        ${X$(e)}
        <details class="jlpt-reading-questions">
          <summary>${i(s.questions)}${o.length?` · ${o.length}`:""}</summary>
          ${o.length?`<ol>${o.map(l=>`<li>${i(l)}</li>`).join("")}</ol>`:`<p>${i(s.noQuestions)}</p>`}
        </details>
      </article>
    `}function fa(){var s;(s=r.progress).n5Course||(s.n5Course=El());const e=tt();!qt(r.progress.n5Course.currentLessonId)&&e[0]&&(r.progress.n5Course.currentLessonId=e[0].id);const n=e.find(a=>!r.progress.n5Course.completedLessons[a.id]);return!r.progress.n5Course.currentLessonId&&n&&(r.progress.n5Course.currentLessonId=n.id),r.progress.n5Course}function se(){return r.progress.n5Course||fa()}function tt(){return r.n5Textbook?.items||[]}function qt(e){const t=String(e||"");return t&&tt().find(n=>n.id===t||n.id===`n5-${t}`||n.id.endsWith(`-${t}`))||null}function Y$(){return qt(se().currentLessonId)||tt().find(e=>!se().completedLessons[e.id])||tt()[0]||null}function gn(e){return(e?.kanji||[]).map(t=>ej(t,e)).filter(Boolean)}function Ht(){return Ha("N5",Z$)}function Z$(){const e=new Set;return tt().flatMap(t=>gn(t)).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function ej(e,t=null){const n=String(e||""),s=r.n5KanjiCatalog?.find(l=>l.kanji===n)||null,a=r.cards.find(l=>l.kanji===n&&String(l.jlpt||"").toUpperCase()==="N5")||r.cards.find(l=>l.kanji===n)||null,o=t?.id||s?.lessonId||null;return a&&s?Ei({...a,lessonId:a.lessonId||o},s):a||(s?Ei({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:o,jlpt:"N5",examples:[]},s):null)}function ha(e,t=[]){const n=(Array.isArray(t)?t:[]).slice(0,3).map(s=>({...s,reading:ee(s.reading||s.hiragana||s.kana||e.hiragana||"")}));return n.length?n:[{word:e.kanji,reading:ee(e.hiragana||""),romaji:e.romaji||"",translation:K(e)}]}function Wt(e){return ha(e,e.examples)}function tj(e,t){const n=t?.word||e.kanji,s=ee(t?.reading||e.hiragana||"");return p()==="ru"?`Свяжи ${e.kanji} со значением «${K(e)}» и сразу проговори слово: ${n}${s?` (${s})`:""}.`:`Connect ${e.kanji} with "${K(e)}" and say the word right away: ${n}${s?` (${s})`:""}.`}function nj(){const e=Ht(),t=se(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{J(s.id).state!=="New"&&n.add(s.kanji)}),{total:r.n5Meta?.kanjiCount||e.length||80,studied:n.size,completedLessons:uo(),reviews:e.reduce((s,a)=>s+Number(J(a.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function tm(e){return hr("N5",e)}function sj(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function uo(){return Ks("N5")}function Ds(e){const t=gn(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n5Exercises?.types||[]).map(x=>[x.type,x.title])),a=Object.fromEntries((r.n5Exercises?.types||[]).map(x=>[x.type,x])),o=x=>a[x]||{rewardXp:r.n5Meta?.rewards?.exerciseXp||7,rewardMoon:r.n5Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:mn({value:c.id,label:K(c)},t.slice(1).map(x=>({value:x.id,label:K(x)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:mn({value:d.kanji,label:d.kanji},t.filter(x=>x.id!==d.id).map(x=>({value:x.kanji,label:x.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=Wt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word,answer:m.reading,answerLabel:m.reading,kanji:u.kanji,cardId:u.id,options:mn({value:m.reading,label:m.reading},t.flatMap(x=>Wt(x).map(L=>({value:L.reading,label:L.reading}))).filter(x=>x.value!==m.reading),3),...o("reading")});const h=n[0];h&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:b({ru:h.ru,en:h.en}),answerLabel:b({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:mn({value:b({ru:h.ru,en:h.en}),label:b({ru:h.ru,en:h.en})},n.slice(1).map(x=>({value:b({ru:x.ru,en:x.en}),label:b({ru:x.ru,en:x.en})})),1),...o("sentence")});const f=t[3]||t[0],S=Wt(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Insert the word"},prompt:Za(S),answer:S.word,answerLabel:S.word,kanji:f.kanji,cardId:f.id,options:mn({value:S.word,label:S.word},t.flatMap(x=>Wt(x).map(L=>({value:L.word,label:L.word}))).filter(x=>x.value!==S.word),2),...o("missing-word")});const C=t[4]||t[0];return l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(C)}`:`Type the kanji for: ${K(C)}`,answer:C.kanji,answerLabel:C.kanji,kanji:C.kanji,cardId:C.id,options:[],...o("active-recall")}),l.slice(0,r.n5Exercises?.lessonQuestionCount||6).map(x=>({...x,level:"N5",lessonId:e.id}))}function mn(e,t,n=0){const s=new Set([String(e.value)]),a=[e];if(t.forEach(c=>{const d=String(c.value||"");!d||s.has(d)||a.length>=4||(s.add(d),a.push(c))}),Ht().forEach(c=>{if(a.length>=4)return;const d={value:c.id,label:c.kanji};s.has(String(d.value))||(s.add(String(d.value)),a.push(d))}),a.length<=1)return a;const l=n%a.length;return[...a.slice(l),...a.slice(0,l)]}function rj(){return r.route==="review"?`review:${r.reviewSession?.startedAt||"active"}`:`route:${r.route}:${r.activeTextbookLevel||""}:${r.activeTextbookSubroute||""}`}function aj(...e){return[rj(),...e].map(t=>String(t??"").trim().replace(/\s+/g," ")).join(":")}function nm(e,...t){const n=Array.isArray(e)?e:[];if(n.length<=1)return n;r.answerOptionOrders||(r.answerOptionOrders={});const s=aj(...t),a=BI(n,r.answerOptionOrders[s]);return r.answerOptionOrders[s]=a.order,a.options}function va(e,t){return nm(t?.options||[],"textbook",e,t?.lessonId||"",t?.id||"")}function ij(e,t,n=0){return nm(t?.options||[],"reading",e?.level||"",e?.exerciseId||"",t?.id||n)}function sm(e){for(const t of tt()){const n=Ds(t).find(s=>s.id===e);if(n)return n}return null}function Yn(e,t,n=""){return r.route==="review"&&r.activeExerciseReviewLevel===String(e||"").toUpperCase()&&String(r.activeExerciseReviewId||"")===String(t||"")&&(!n||String(r.activeExerciseReviewSource||"")===String(n||""))}function wa(e,t,n){return Yn(e,n)?r.reviewExerciseResults?.[String(n)]||null:t.exerciseResults?.[String(n)]||null}function oj(e,t,n){const s=F(t);if(!e||!s||!n)return null;e.exerciseSrs||(e.exerciseSrs={});const a=e.exerciseSrs[String(n.id)]||null;if(a)return qs(a,{level:s,lessonId:n.lessonId||a.lessonId||"",exerciseId:n.id,cardId:n.cardId||a.cardId||"",kanji:n.kanji||a.kanji||"",type:n.type||a.type||"",title:n.title||a.title||null,prompt:n.prompt||a.prompt||"",answer:n.answer||a.answer||"",answerLabel:n.answerLabel||a.answerLabel||""});const o=Tr(s,n.lessonId||"",n.id,n);return e.exerciseSrs[String(n.id)]=o,o}function lj(e,t,n,s){if(!e||!n)return;const a=F(t);a&&(e.exerciseSrs||(e.exerciseSrs={}),e.exerciseSrs[String(n.id)]=qs(s,{level:a,lessonId:n.lessonId||s?.lessonId||"",exerciseId:n.id,cardId:n.cardId||s?.cardId||"",kanji:n.kanji||s?.kanji||"",type:n.type||s?.type||"",title:n.title||s?.title||null,prompt:n.prompt||s?.prompt||"",answer:n.answer||s?.answer||"",answerLabel:n.answerLabel||s?.answerLabel||""}))}function ba(e,t,n,s,a,o={}){const l=F(e);if(!l||!t||!n)return;const c=new Date().toISOString(),d=Yn(l,n.id),u=Me(),m=d?re.TOP:re.PRESERVE,h=!!o.quietReward;if(d&&r.reviewExerciseResults?.[n.id])return;const f={selected:s,correct:a,checkedAt:c};d?(r.reviewExerciseResults||(r.reviewExerciseResults={}),r.reviewExerciseResults[n.id]=f,r.reviewQueueLastKind="exercise"):t.exerciseResults[n.id]=f;const S=ie(oj(t,l,n)||Tr(l,n.lessonId||"",n.id,n)),C=ke(S,a?"good":"again");if(lj(t,l,n,C),Xt(S,C,a?"good":"again"),be(),a){if(r.progress.totalCorrect+=1,!d&&!t.completedExercises[n.id]){t.completedExercises[n.id]=c,o.markCompleted?.(c),(o.markStudied||(()=>{}))();const L=Number(o.rewardXp||0),k=Number(o.rewardMoon||0);(L||k)&&H(L,k,o.rewardKey||`exercise:${n.id}`,{silent:h})}}else if(r.progress.totalWrong+=1,o.markWrong?.(),(o.markDifficult||(()=>{}))(),n.type==="reading"||n.type==="missing-word"){const L=n.answerLabel||n.answer;L&&o.markWordMistake?.(L)}je({scrollPolicy:m,viewportSnapshot:u}),T(),Dt("textbook exercise post-render effects",()=>{D(a?"answer_correct":"answer_wrong"),Z({silent:h})},{scrollPolicy:m,viewportSnapshot:u})}function rm(e){const t=F(e?.level||"");return t==="N5"?{xp:Number(r.n5Meta?.rewards?.exerciseXp||7),moon:Number(r.n5Meta?.rewards?.exerciseMoon||1)}:t==="N4"?{xp:Number(r.n4Meta?.rewards?.readingXp||r.n4Meta?.rewards?.exerciseXp||10),moon:Number(r.n4Meta?.rewards?.readingMoon||r.n4Meta?.rewards?.exerciseMoon||1)}:t==="N3"?{xp:Number(r.n3Meta?.rewards?.readingXp||r.n3Meta?.rewards?.exerciseXp||10),moon:Number(r.n3Meta?.rewards?.readingMoon||r.n3Meta?.rewards?.exerciseMoon||1)}:t==="N2"?{xp:Number(r.n2Meta?.rewards?.readingXp||r.n2Meta?.rewards?.exerciseXp||10),moon:Number(r.n2Meta?.rewards?.readingMoon||r.n2Meta?.rewards?.exerciseMoon||1)}:{xp:Number(r.n1Meta?.rewards?.readingXp||r.n1Meta?.rewards?.exerciseXp||10),moon:Number(r.n1Meta?.rewards?.readingMoon||r.n1Meta?.rewards?.exerciseMoon||1)}}function am(e,t,n,s={}){if(!e?.id)return;const a=new Date().toISOString(),o=Yn(e.level,e.id,"reading");if(o&&r.reviewExerciseResults?.[e.id]?.completed)return;const l=Me(),c=o?re.TOP:re.PRESERVE,d=!!s.quietReward,u=ie(_n(e)||cs(e));if(r.reviewExerciseResults||(r.reviewExerciseResults={}),e.kind==="cloze"){u.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():u.selectedIndices||[],u.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(z=>({kanji:String(z?.kanji||""),reading:String(z?.reading||"")})).filter(z=>z.kanji):u.selectedTiles||[],u.selectedText=String(t||""),u.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.slice():u.wrongIndexes||[],u.completed=!0,u.completedAt=a,u.correct=!!n,u.answers={cloze:{selected:String(t||""),correct:!!n,checkedAt:a}},Hs(e,u),r.reviewExerciseResults[e.id]=ie(u),n?r.progress.totalCorrect+=1:r.progress.totalWrong+=1;const L=ie(u),k=ke(L,n?"good":"again");k.selectedIndices=u.selectedIndices,k.selectedTiles=u.selectedTiles,k.selectedText=u.selectedText,k.wrongIndexes=u.wrongIndexes,k.completed=!0,k.completedAt=a,k.correct=!!n,k.answers=u.answers,Hs(e,k),r.reviewExerciseResults[e.id]=ie(k),Xt(L,k,n?"good":"again"),be();const N=rm(e);n?H(N.xp,N.moon,`reading:${e.id}`,{silent:d}):H(Math.max(1,Math.round(N.xp*.35)),0,`reading:${e.id}:again`,{silent:d}),o&&Eo("reading-cloze"),je({scrollPolicy:c,viewportSnapshot:l}),T(),Dt("reading cloze post-render effects",()=>{D(n?"answer_correct":"answer_wrong"),Z({silent:d})},{scrollPolicy:c,viewportSnapshot:l});return}const m=e.question||e.questions?.[0]||null,h=String(s.questionKey||m?.id||e.id);if(u.answers||(u.answers={}),u.answers[h])return;if(u.answers[h]={selected:String(t||""),correct:!!n,checkedAt:a},u.completed=!!h&&Object.keys(u.answers).length>=od(),u.completedAt=u.completed?a:u.completedAt||null,u.correct=u.completed?Object.values(u.answers).every(L=>!!L?.correct):!1,u.selectedText=String(t||""),Hs(e,u),r.reviewExerciseResults[e.id]=ie(u),n?r.progress.totalCorrect+=1:r.progress.totalWrong+=1,T(),!u.completed){je({scrollPolicy:c,viewportSnapshot:l}),Dt("reading question post-render sound",()=>{D(n?"answer_correct":"answer_wrong")},{scrollPolicy:c,viewportSnapshot:l});return}const f=ie(u),S=Object.values(u.answers).every(L=>!!L?.correct),C=ke(f,S?"good":"again");C.answers=u.answers,C.completed=!0,C.completedAt=a,C.correct=S,C.selectedText=String(t||""),C.wrongQuestions=Object.entries(u.answers).filter(([,L])=>!L?.correct).map(([L])=>L),Hs(e,C),r.reviewExerciseResults[e.id]=ie(C),Xt(f,C,S?"good":"again"),be();const x=rm(e);S?H(x.xp,x.moon,`reading:${e.id}`,{silent:d}):H(Math.max(1,Math.round(x.xp*.25)),0,`reading:${e.id}:again`,{silent:d}),o&&Eo("reading-exercise"),je({scrollPolicy:c,viewportSnapshot:l}),T(),Dt("reading exercise post-render effects",()=>{D(n?"answer_correct":"answer_wrong"),Z({silent:d})},{scrollPolicy:c,viewportSnapshot:l})}function cj(e){const t=Us();if(!t||t.source!=="reading"||!t.exercise)return;const n=t.exercise.question||t.exercise.questions?.[0]||null;if(!n)return;const s=String(e.dataset.value||""),a=s===String(n.answer||"");am(t.exercise,s,a,{questionKey:String(e.dataset.question||n.id||t.exercise.id),quietReward:!0})}function dj(e){const t=Us();if(!t||t.source!=="reading"||t.exercise?.kind!=="cloze")return;const n=t.exercise,s=ie(_n(n)||cs(n));if(s.completed||s.selectedIndices?.includes(e))return;const a=Math.max(1,Vt(n).length);if(s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():[],s.selectedIndices.length>=a){G(p()==="ru"?"Все пропуски уже заполнены.":"All blank slots are already filled.");return}if(s.selectedIndices.push(e),s.selectedTiles=s.selectedIndices.map(o=>n.tiles?.[o]).filter(Boolean),s.selectedText=s.selectedTiles.map(o=>o.kanji).join(""),Hs(n,s),r.activeExerciseReviewSelection=s.selectedIndices.slice(),r.reviewExerciseResults[n.id]=ie(s),T(),s.selectedIndices.length>=a){im();return}P()}function uj(){const e=Us();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=ie(_n(t)||cs(t));n.completed||!n.selectedIndices?.length||(n.selectedIndices=n.selectedIndices.slice(0,-1),n.selectedTiles=n.selectedIndices.map(s=>t.tiles?.[s]).filter(Boolean),n.selectedText=n.selectedTiles.map(s=>s.kanji).join(""),r.activeExerciseReviewSelection=n.selectedIndices.slice(),r.reviewExerciseResults[t.id]=ie(n),Hs(t,n),T(),P())}function pj(){const e=Us();if(!e||e.source!=="reading"||!e.exercise)return;const t=e.exercise,n=ie(_n(t)||cs(t));n.completed||(n.selectedIndices=[],n.selectedTiles=[],n.selectedText="",n.wrongIndexes=[],r.activeExerciseReviewSelection=[],r.reviewExerciseResults[t.id]=ie(n),Hs(t,n),T(),P())}function im(){const e=Us();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=Vt(t),s=ie(_n(t)||cs(t)),a=Array.isArray(s.selectedIndices)?s.selectedIndices:[];if(a.length<n.length){G(p()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.");return}const o=a.map(d=>t.tiles?.[d]).filter(Boolean),l=o.length===n.length&&o.every((d,u)=>d?.kanji===n[u]?.kanji),c=o.map((d,u)=>d?.kanji===n[u]?.kanji?-1:u).filter(d=>d>=0);am(t,o.map(d=>d.kanji).join(""),l,{selectedIndices:a,selectedTiles:o,wrongIndexes:c,quietReward:!0})}function gj(){r.activeExerciseReviewTranslationOpen=!r.activeExerciseReviewTranslationOpen,P()}function xc(e){return wa("N5",se(),e)}function mj(e){const t=sm(e.dataset.id);if(!t)return;const n=e.dataset.value||"",s=n===t.answer;om(t,n,s)}function fj(e){const t=sm(e);if(!t)return;const n=document.getElementById(um(t.id)),s=n?String(n.value||"").trim():"";om(t,s,s===t.answer)}function om(e,t,n){const s=se();ba("N5",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n5Meta?.rewards?.exerciseXp||7),rewardMoon:Number(e.rewardMoon||r.n5Meta?.rewards?.exerciseMoon||1),rewardKey:`n5_exercise:${e.id}`,quietReward:!0,markStudied:()=>br(e.kanji,e.cardId),markDifficult:()=>ka(e.kanji,e.cardId),markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function hj(e,t,n,s){var f;const a=Me(),o=F(e)||String(e||"").toUpperCase(),l=o==="N5"?qt(t):o==="N4"?Zn(t):o==="N3"?ts(t):o==="N2"?ss(t):o==="N1"?Fs(t):null;if(!l)return;const c=Xl(o,l),d=c.find(S=>String(S.id)===String(n))||oe(n);if(!d)return;const u=Es(o,l,c);if(u.session.answers?.[d.id])return;const m=new Date().toISOString();u.session.answers[d.id]={remembered:!!s,rating:s?"good":"again",answeredAt:m};const h=Wo({cards:c,session:u.session,confirmedCompleted:jc(o,l.id)});u.session.currentIndex=h.currentIndex,u.session.phase=h.phase,u.session.updatedAt=m,h.status==="test-ready"&&((f=u.session).testOpenedAt||(f.testOpenedAt=m)),r.pendingFocus=null,je({scrollPolicy:re.PRESERVE,viewportSnapshot:a}),T(),ta(`${o} lesson SRS post-render commit`,()=>{const S=s?"good":"again";o==="N5"?lm(d.id,S,"review",{scrollPolicy:re.PRESERVE,viewportSnapshot:a,quietReward:!0}):o==="N4"?bm(d.id,S,"review",{scrollPolicy:re.PRESERVE,viewportSnapshot:a,quietReward:!0}):o==="N3"?Tm(d.id,S,"review",{scrollPolicy:re.PRESERVE,viewportSnapshot:a,quietReward:!0}):o==="N2"?Um(d.id,S,"review",{scrollPolicy:re.PRESERVE,viewportSnapshot:a,quietReward:!0}):o==="N1"&&ef(d.id,S,"review",{scrollPolicy:re.PRESERVE,viewportSnapshot:a,quietReward:!0})})}function lm(e,t,n="review",s={}){const a=oe(e);if(!a)return;const o=s.scrollPolicy||(n==="review"?re.TOP:re.PRESERVE),l=s.viewportSnapshot||Me(),c=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,m=d?"hard":t,h=ie(J(a.id)),f=ke(h,u,m);r.progress.cards[a.id]=f,Xt(h,f,m),be(),br(a.kanji,a.id),se().srsKanji[a.kanji]=new Date().toISOString(),d?(ka(a.kanji,a.id,!1),r.progress.totalCorrect+=1,H(r.n5Meta?.rewards?.hardXp||2,1,`n5_srs_lesson_hard:${a.id}`,{silent:c})):ze(t)?(ka(a.kanji,a.id),r.progress.totalWrong+=1,H(r.n5Meta?.rewards?.hardXp||2,0,`n5_srs_hard:${a.id}`,{silent:c})):(r.progress.totalCorrect+=1,H(t==="easy"?r.n5Meta?.rewards?.knowXp||6:r.n5Meta?.rewards?.addToSrsXp||4,1,`n5_srs:${a.id}`,{silent:c})),je({scrollPolicy:o,viewportSnapshot:l}),T(),Dt("N5 SRS post-render effects",()=>{D(ze(t)?"answer_wrong":"answer_correct"),Z({silent:c})},{scrollPolicy:o,viewportSnapshot:l})}function vj(e){const t=oe(e);if(!t)return;const n=Me(),s=se();s.writingPractice[t.kanji]||(s.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},br(t.kanji,t.id),H(8,1,`n5_writing:${t.id}`)),Z(),T(),je({scrollPolicy:re.PRESERVE,viewportSnapshot:n})}function wj(e){const t=qt(e);if(!t)return;const n=se(),s=`n5:${t.id}`;if(ye.has(s)||n.completedLessons[t.id]){P();return}const a=gn(t);if(a.filter(f=>n.studiedKanji[f.kanji]).length<t.kanji.length){const f=p()==="ru"?"Сначала изучите все кандзи урока (8/8).":"Study all kanji in the lesson first (8/8).";typeof G=="function"&&G(f);return}const l=Ds(t);if(!(l.length>0&&l.every(f=>xc(f.id)?.correct))){const f=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof G=="function"&&G(f);return}ye.add(s),gn(t).forEach(f=>{br(f.kanji,f.id),n.srsKanji[f.kanji]=n.srsKanji[f.kanji]||new Date().toISOString();const S=J(f.id);S.state==="New"&&(r.progress.cards[f.id]=ke(ie(S),"good"))}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=tt().find(f=>f.order===t.order+1)?.id||t.id;const d=Xn(),u=d.sessions[Ze("N5",t.id)];if(u){const f=new Date().toISOString();u.phase="done",u.completedAt=f,u.updatedAt=f,u.currentIndex=a.length,d.activeSessionKey=Ze("N5",t.id),d.lastUpdatedAt=f}se(),r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.completedLessons=r.progress.n5Course.completedLessons||{},r.progress.n5Course.completedLessons[t.id]=new Date().toISOString(),T({immediate:!0}),vr("N5");const m=r.n5Meta?.rewards?.lessonCompleteXp||45,h=r.n5Meta?.rewards?.lessonCompleteMoon||6;H(m,h,`n5_lesson:${t.id}`),Kr("N5",t.id),bt({title:`${et().lessonComplete}: ${b(t.title)}`,message:et().lessonCompleteText,xp:m,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Z(),T(),P()}function br(e,t=null){if(!e)return;const n=se();cr(n,e)}function ka(e,t=null,n=!0){if(e&&(se().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=J(t);s.state!=="New"&&(r.progress.cards[t]=ke(ie(s),"again"))}}function bj(e){const t=qt(e);t&&(wn("textbook-lesson",{level:"N5",lessonId:t.id}),se().currentLessonId=t.id,Rt("N5",t.id,"n5_lesson_open"),dn("N5",t,"n5_lesson_open"),ya(t.id))}function kj(){ya("")}function yj(e=null){e&&(se().activeReviewMode=e),ya("review")}function ya(e){r.route="textbooks",r.activeTextbookLevel="N5",r.activeTextbookSubroute=e||null;const t=e?`#textbooks/N5/${encodeURIComponent(e)}`:"#textbooks/N5";jt(t),T(),ue(),Ot()}function $j(e="due"){const t=Date.now(),n=se(),s=Ht();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=J(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function cm(){const e=Ht(),t=tt(),n=r.n5FinalTest?.types||["meaning","reading","sentence","kanji","word","srs"],s=Math.min(r.n5FinalTest?.questionCount||24,Math.max(e.length,1)),a=[];for(let o=0;o<s;o+=1){const l=e[o*7%e.length]||e[o%e.length],c=n[o%n.length],d=t.find(u=>u.kanji.includes(l.kanji))||t[0];a.push(jj(c,l,d,o))}return a.filter(Boolean)}function jj(e,t,n,s){const o=Wt(t)[0],l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:mn({value:t.id,label:K(t)},Ht().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word,answer:o.reading,answerLabel:o.reading,options:mn({value:o.reading,label:o.reading},Ht().flatMap(c=>Wt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value!==o.reading),s)};if(e==="sentence"&&l){const c=b({ru:l.ru,en:l.en});return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:mn({value:c,label:c},tt().flatMap(d=>d.sentences||[]).map(d=>({value:b({ru:d.ru,en:d.en}),label:b({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word;return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:gs(o),answer:c,answerLabel:c,options:mn({value:c,label:c},Ht().flatMap(d=>Wt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value!==c),s)}}return e==="srs"?{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n5-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:mn({value:t.kanji,label:t.kanji},Ht().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function Sj(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(se().finalTest.answers[t]=n,T(),P())}function dm(e=!1){if(r.finalTestBusy)return;const t=se().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}r.finalTestBusy=!0;try{const n=cm(),s=r.n5FinalTest||{},a=et(),o=hn(t,n),l=ZC(s),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const N=o.firstMissingId?`#${Lr("n5",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N5",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=N,T();return}let u=0;const m=[],h=[];n.forEach(N=>{const z=String(t.answers?.[N.id]||"").trim();z===N.answer?(u+=1,br(N.kanji,N.cardId)):(z||h.push(N),m.push({id:N.id,kanji:N.kanji,answer:N.answerLabel,selected:z}),ka(N.kanji,N.cardId))});const f=n.length?Math.round(u/n.length*100):0,S=!!t.completedAt,C=!!t.passed,x=Math.max(0,m.length-h.length);let L=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=f,t.passed=f>=l,t.correctAnswers=u,t.incorrectAnswers=x,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(N=>N.id),t.completedAt=d,t.lastScore=f,t.bestScore=Math.max(Number(t.bestScore||0),f),t.passedAt=t.passed?C&&t.passedAt||d:t.passedAt||null,!S){const N=Number(s?.rewards?.completeXp||120),z=Number(s?.rewards?.completeMoon||20);L+=N,k+=z,H(N,z,"n5_final_complete")}if(t.passed&&!C){const N=Number(s?.rewards?.passXp||80),z=Number(s?.rewards?.passMoon||12);L+=N,k+=z,H(N,z,"n5_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=k,Va("N5",t),se(),r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.finalTest=r.progress.n5Course.finalTest||{},Object.assign(r.progress.n5Course.finalTest,{percent:t.percent,score:t.score,completedAt:t.completedAt,passed:t.passed,totalQuestions:t.totalQuestions,correctAnswers:t.correctAnswers||t.score}),T({immediate:!0}),r.finalTestModal={kind:"result",level:"N5",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:f,correct:u,incorrect:x,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n5-review",reviewAllAction:"n5-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},Z(),T()}catch(n){console.error(n),G(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,P()}}function Cj(){se().finalTest=El().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,T(),P()}function um(e){return`n5-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function xj(e){r.activeTextbookLevel="N4",r.activeJlptLesson="N4";const t=Nc();t.opened||(t.opened=!0,Z({silent:!0}),T());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return Dj();if(n==="review")return Rj();if(n==="kanji")return Pj();if(n==="grammar")return Ej();if(n==="reading")return Mj();if(n==="listening")return Kj();const s=Zn(n);return s?(Q().currentLessonId=s.id,Rt("N4",s.id,"n4_lesson_page"),dn("N4",s,"n4_lesson_page"),Aj(e,s)):Nj(e)}function Nj(e){const t=zj(),n=Te(),s=ut(),a=Oj(),o=r.n4Meta||{},l=b(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n4-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N4 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(b(o.description||e.description||{}))}</p>
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
            <a class="btn primary" href="#textbooks/N4/${g(a?.id||"n4-lesson-1")}" data-action="n4-open-lesson" data-id="${g(a?.id||"n4-lesson-1")}">${i(n.continue)}</a>
              <button class="btn" type="button" data-action="n4-review" data-mode="due">${i(n.review)}</button>
              <button class="btn ghost" type="button" data-action="n4-kanji">${i(n.openKanji)}</button>
              <button class="btn ghost" type="button" data-action="n4-grammar">${i(n.grammarN4)}</button>
              <button class="btn ghost" type="button" data-action="n4-reading">${i(n.readingN4)}</button>
              <button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>
            </div>
          </div>
          ${Rn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${M(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,E(t.studied,t.total))}
          ${M(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,E(t.completedLessons,s.length))}
          ${M(n.completedGrammar,`${t.completedGrammar}/${r.n4Meta?.grammarCount||r.n4Grammar.length}`,n.grammar,E(t.completedGrammar,r.n4Meta?.grammarCount||r.n4Grammar.length))}
          ${M(n.reviews,t.reviews,n.srs,E(t.reviews,Math.max(t.total,1)))}
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
            ${s.map(c=>Lj(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(b((r.n4Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(b(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${wr("N4")}
      </section>
    `}function Lj(e){const t=hm(e.id),n=Te();let s=e.kanji.filter(a=>Q().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#textbooks/N4/${g(e.id)}" data-action="n4-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(b(e.title))}</h3>
        <p>${i(b(e.goal))}</p>
        <div class="n5-kanji-strip n4-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Uj(t))}</small>
      </a>
    `}function Aj(e,t){const n=Te(),s=kr(t),a=$a(t),o=hm(t.id),l=Es("N4",t,s);let c=o==="completed";const d=`n4:${t.id}`;ye.has(d)&&(c=!0);const u=c,m=a.filter(q=>Ac(q.id)?.correct).length,h=a.length>0&&m===a.length,f=s.filter(q=>Q().studiedKanji[q.kanji]).length,S=t.kanji.length,C=f>=S,x=!c&&h&&C,L=t.kanji.filter(q=>Q().difficultKanji[q]).join(" · "),k=ut().find(q=>q.order===t.order+1),N=Gt("N4",t.id,"player"),z=Gt("N4",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n4-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · ${i(n.lesson)} ${t.order}/17</p>
            <h1>${i(b(t.title))}</h1>
            <p>${i(b(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${i(n.backToN4)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(b(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.duration)}: ${i(t.durationMinutes||30)} ${i(n.minutes)}</span>
              ${t.grammarFocus.map(q=>`<span class="pill">${i(q)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${M(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,E(l.answeredCount,t.kanji.length))}
            ${M(n.exercises,`${m}/${a.length}`,n.correct,E(m,a.length))}
          </div>
        </article>

        ${ma("N4",t,s,n,{playerId:N,answerAction:"jlpt-lesson-answer",examples:q=>Ct(q),sentence:q=>Ij(q,t)})}

        ${Tj(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(q=>`
              <article>
                <strong>${i(q.jp)}</strong>
                <span>${i(ee(q.reading||""))}</span>
                <small>${i(b({ru:q.ru,en:q.en}))}</small>
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
            ${a.map(q=>pm(q)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(q=>Q().studiedKanji[q.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
            </div>
            ${!c&&!x?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n4-complete-lesson" data-id="${g(t.id)}" ${u||!x?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n4-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#textbooks/N4/${g(k.id)}" data-action="n4-open-lesson" data-id="${g(k.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n4-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function Ij(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(ee(n.reading||""))}</span>
        <small>${i(b({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Te().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Tj(e){const t=Te(),n=(e.grammarFocus||[]).map(s=>Lc(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n4-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n4-section-grid">
          ${n.map(s=>`
            <article class="n4-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(b(s.title))}</h3>
              <p>${i(b(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(b({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n4-grammar-complete" data-id="${g(s.id)}" data-value="${g(W(s))}">${i(Q().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function pm(e){const t=Te(),n=Ac(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&Yn("N4",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(b(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(jm(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(b(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n4-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${gm(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(b(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
            ${va("N4",e).map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${gm(e,n)}
      </article>
    `}function gm(e,t){if(!t)return"";const n=Te(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Rj(e){const t=Te(),n=Q().activeReviewMode||"due",s=aS(n);return`
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
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n4-review" data-mode="${g(a.id)}">${i(b(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>_j(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function _j(e,t){const n=Te(),s=J(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(en(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(Ct(e)[0]?.word||e.hiragana||"")} · ${i(Ct(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Pj(e){const t=Te(),n=nt();return`
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
              <div class="n5-kanji-topline"><span class="pill">${a+1}/170</span><span class="pill">${i(J(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(K(s))}</h3>
              <p>${i(Ct(s)[0]?.word||"")} · ${i(Ct(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n4-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Ej(e){const t=Te();return`
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
          ${M(t.completedGrammar,`${Object.keys(Q().completedGrammar||{}).length}/${r.n4Grammar.length}`,t.grammar,E(Object.keys(Q().completedGrammar||{}).length,r.n4Grammar.length))}
          ${M(t.questions,r.n4Grammar.length,t.grammar,100)}
        </div>
        <div class="n4-section-grid">
          ${r.n4Grammar.map(n=>{const s=Q().grammarResults?.[n.id];return`
              <article class="n4-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(b(n.title))}</h3>
                <p>${i(b(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(ee(a.reading||""))}</span><small>${i(b({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(b(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(qe(n).length?qe(n):[W(n)]).map(a=>`
                    <button class="btn ${s?.selected===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n4-grammar-complete" data-id="${g(n.id)}" data-value="${g(a)}">${i(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${W(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function Mj(e){const t=Te(),n=qa("N4","n4_reading_page"),s=_r("N4");return(n||s)&&T(),`
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
          ${r.n4Reading.map(a=>mm(a,"reading")).join("")}
        </div>
      </section>
    `}function Kj(e){const t=Te();return`
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
          ${r.n4Listening.map(n=>mm(n,"listening")).join("")}
        </div>
      </section>
    `}function mm(e,t){const n=Te(),s=t==="reading"?Q().completedReading[e.id]:Q().completedListening[e.id],a=t==="reading"?Q().readingAnswers:Q().listeningAnswers,o=t==="reading"?"n4-reading-complete":"n4-listening-complete";return`
      <article class="n4-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(b(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n4-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=a?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n4-question-block">
              <h3>${i(b(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(h.value)}">${i(b(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function Dj(e){const t=Te(),n=r.n4FinalTest||{},s=ym(),a=Q().finalTest,o=hn(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),T()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n4-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N4 · Final</p>
            <h1>${i(b(n.title||{}))}</h1>
            <p>${i(b(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n4-overview">${i(t.backToN4)}</button>
            <button class="btn" type="button" data-action="n4-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${M(t.questions,`${l}/${s.length}`,t.finalTest,E(l,s.length))}
          ${M(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${M(t.mistakes,d?(a.mistakes||[]).length:0,t.difficult,d?E((a.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n4-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${Zt("N4","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>Fj(m,h)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n4-final-submit" ${r.finalTestBusy||d?"disabled":""}>${i(d?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Zt("N4","btn ghost")}
          <button class="btn ghost" type="button" data-action="n4-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function Fj(e,t){const n=Q().finalTest.answers?.[e.id],s=!!Q().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n4-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Te().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Te(){return p()==="ru"?{title:"JLPT N4",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N4 после N5",continue:"Продолжить",review:"Повторять N4",openKanji:"Открыть список кандзи",grammarN4:"Грамматика N4",readingN4:"Чтение N4",listeningN4:"Аудирование N4",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"17 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, упражнение, письмо и повторение.",reviewPlan:"План повторения на 45 дней",day:"день",lesson:"Урок",backToN4:"К N4",n5Bridge:"N5 bridge",n5BridgeText:"Перед N4 полезно держать активной базу N5: она станет опорой для более длинных предложений.",reviewN5Base:"Повторить базу N5 перед N4",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> текст -> упражнение -> письмо -> повторение",lessonChainText:"N4 больше не живёт списком знаков: каждый знак сразу получает слово, грамматическую связку и контекст.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика держит смысл предложения.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции из примеров урока, чтобы кандзи сразу работали в предложении.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N4-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N4.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"170 кандзи N4",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"48 грамматических конструкций N4",grammarText:"Короткие рабочие карточки: функция, формула, пример и проверка понимания.",readingTitle:"Тексты для чтения N4",readingText:"Короткие тексты связывают кандзи, слова и грамматику в нормальный контекст.",listeningTitle:"Скрипты для аудирования N4",listeningText:"Диалоги можно читать вслух или использовать как основу для прослушивания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N4",finalPassed:"N4 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N4",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N4 textbook after N5",continue:"Continue",review:"Review N4",openKanji:"Open kanji list",grammarN4:"N4 grammar",readingN4:"N4 reading",listeningN4:"N4 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"17 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, exercise, writing, and SRS.",reviewPlan:"45-day review plan",day:"day",lesson:"Lesson",backToN4:"To N4",n5Bridge:"N5 bridge",n5BridgeText:"Keep the N5 base active before N4; it supports longer sentences.",reviewN5Base:"Review N5 base before N4",lessonChain:"Kanji -> word -> grammar -> sentence -> text -> exercise -> writing -> SRS",lessonChainText:"N4 is not a bare list: each sign gets a word, grammar link, and context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries the sentence.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N4 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions from the lesson examples.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N4 review",reviewDescription:"Review due cards, difficult kanji, or the full N4 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"170 N4 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"48 N4 grammar constructions",grammarText:"Compact cards with function, formula, example, and check.",readingTitle:"N4 reading texts",readingText:"Short texts connect kanji, words, and grammar.",listeningTitle:"N4 listening scripts",listeningText:"Read dialogues aloud or use them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N4",finalPassed:"N4 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Nc(){var s;(s=r.progress).n4Course||(s.n4Course=Ml());const e=ut();!Zn(r.progress.n4Course.currentLessonId)&&e[0]&&(r.progress.n4Course.currentLessonId=e[0].id);const n=e.find(a=>!r.progress.n4Course.completedLessons[a.id]);return!r.progress.n4Course.currentLessonId&&n&&(r.progress.n4Course.currentLessonId=n.id),r.progress.n4Course}function Q(){return r.progress.n4Course||Nc()}function ut(){return r.n4Textbook?.items||[]}function Zn(e){const t=String(e||"");return t&&ut().find(n=>n.id===t||n.id===`n4-${t}`||n.id.endsWith(`-${t}`))||null}function Oj(){return Zn(Q().currentLessonId)||ut().find(e=>!Q().completedLessons[e.id])||ut()[0]||null}function kr(e){return(e?.kanji||[]).map(t=>fm(t)).filter(Boolean)}function nt(){return Ha("N4",Bj)}function Bj(){const e=new Set;return(r.n4KanjiCatalog||[]).map(t=>fm(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function fm(e){const t=String(e||""),n=r.n4KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N4")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Mi(s,n):s||(n?Mi({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[]},n):null)}function Lc(e){const t=String(e||"");return r.n4Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function Ct(e){return ha(e,e.examples)}function zj(){const e=nt(),t=Q(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{J(s.id).state!=="New"&&n.add(s.kanji)}),{total:r.n4Meta?.kanjiCount||e.length||170,studied:n.size,completedLessons:Ks("N4"),completedGrammar:Object.keys(t.completedGrammar||{}).length,reviews:e.reduce((s,a)=>s+Number(J(a.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function hm(e){return hr("N4",e)}function Uj(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function $a(e){const t=kr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n4Exercises?.types||[]).map(k=>[k.type,k.title])),a=Object.fromEntries((r.n4Exercises?.types||[]).map(k=>[k.type,k])),o=k=>a[k]||{rewardXp:r.n4Meta?.rewards?.exerciseXp||9,rewardMoon:r.n4Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:pt({value:c.id,label:K(c)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:pt({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=Ct(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:pt({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(k=>Ct(k).map(N=>({value:N.reading,label:N.reading}))).filter(k=>k.value&&k.value!==m.reading),3),...o("reading")});const h=n[0];h&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:b({ru:h.ru,en:h.en}),answerLabel:b({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:pt({value:b({ru:h.ru,en:h.en}),label:b({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:b({ru:k.ru,en:k.en}),label:b({ru:k.ru,en:k.en})})),1),...o("sentence")});const f=t[3]||t[0],S=Ct(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:Za(S),answer:S.word||f.kanji,answerLabel:S.word||f.kanji,kanji:f.kanji,cardId:f.id,options:pt({value:S.word||f.kanji,label:S.word||f.kanji},t.flatMap(k=>Ct(k).map(N=>({value:N.word,label:N.word}))).filter(k=>k.value&&k.value!==S.word),2),...o("missing-word")});const C=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(C)}`:`Type the kanji for: ${K(C)}`,answer:C.kanji,answerLabel:C.kanji,kanji:C.kanji,cardId:C.id,options:[],...o("active-recall")});const x=Lc(e.grammarFocus?.[0]);x&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:b(x.question||x.explanation),answer:W(x),answerLabel:W(x),kanji:t[0].kanji,cardId:t[0].id,grammarId:x.id,options:pt({value:W(x),label:W(x)},qe(x).filter(k=>k!==W(x)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:b({ru:L.ru,en:L.en}),answerLabel:b({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:pt({value:b({ru:L.ru,en:L.en}),label:b({ru:L.ru,en:L.en})},n.filter(k=>k.jp!==L.jp).map(k=>({value:b({ru:k.ru,en:k.en}),label:b({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),l.slice(0,r.n4Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N4",lessonId:e.id}))}function pt(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),nt().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function vm(e){for(const t of ut()){const n=$a(t).find(s=>s.id===e);if(n)return n}return null}function Ac(e){return wa("N4",Q(),e)}function Jj(e){const t=vm(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;wm(t,s,a)}function Gj(e){const t=vm(e);if(!t)return;const n=document.getElementById(jm(t.id)),s=n?String(n.value||"").trim():"";wm(t,s,s===t.answer)}function wm(e,t,n){const s=Q();ba("N4",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n4Meta?.rewards?.exerciseXp||9),rewardMoon:Number(e.rewardMoon||r.n4Meta?.rewards?.exerciseMoon||1),rewardKey:`n4_exercise:${e.id}`,quietReward:!0,markStudied:()=>yr(e.kanji,e.cardId),markDifficult:()=>ja(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function bm(e,t,n="review",s={}){const a=oe(e)||nt().find(S=>String(S.id)===String(e));if(!a)return;const o=s.scrollPolicy||(n==="review"?re.TOP:re.PRESERVE),l=s.viewportSnapshot||Me(),c=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,m=d?"hard":t,h=ie(J(a.id)),f=ke(h,u,m);r.progress.cards[a.id]=f,Xt(h,f,m),be(),yr(a.kanji,a.id),Q().srsKanji[a.kanji]=new Date().toISOString(),d?(ja(a.kanji,a.id,!1),r.progress.totalCorrect+=1,H(r.n4Meta?.rewards?.hardXp||2,1,`n4_srs_lesson_hard:${a.id}`,{silent:c})):ze(t)?(ja(a.kanji,a.id),r.progress.totalWrong+=1,H(r.n4Meta?.rewards?.hardXp||2,0,`n4_srs_hard:${a.id}`,{silent:c})):(r.progress.totalCorrect+=1,H(t==="easy"?r.n4Meta?.rewards?.knowXp||7:r.n4Meta?.rewards?.addToSrsXp||5,1,`n4_srs:${a.id}`,{silent:c})),je({scrollPolicy:o,viewportSnapshot:l}),T(),Dt("N4 SRS post-render effects",()=>{D(ze(t)?"answer_wrong":"answer_correct"),Z({silent:c})},{scrollPolicy:o,viewportSnapshot:l})}function qj(e){const t=oe(e)||nt().find(s=>String(s.id)===String(e));if(!t)return;const n=Q();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},yr(t.kanji,t.id),H(9,1,`n4_writing:${t.id}`)),Z(),T(),P()}function Hj(e){const t=Zn(e);if(!t)return;const n=Q(),s=`n4:${t.id}`;if(ye.has(s)||n.completedLessons[t.id]){P();return}const a=kr(t);if(a.filter(f=>n.studiedKanji[f.kanji]).length<t.kanji.length){const f=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof G=="function"&&G(f);return}const l=$a(t);if(!(l.length>0&&l.every(f=>Ac(f.id)?.correct))){const f=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof G=="function"&&G(f);return}ye.add(s),kr(t).forEach(f=>{yr(f.kanji,f.id),n.srsKanji[f.kanji]=n.srsKanji[f.kanji]||new Date().toISOString();const S=J(f.id);S.state==="New"&&(r.progress.cards[f.id]=ke(ie(S),"good"))}),(t.grammarFocus||[]).map(f=>Lc(f)).filter(Boolean).forEach(f=>{n.completedGrammar[f.id]=n.completedGrammar[f.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=ut().find(f=>f.order===t.order+1)?.id||t.id;const d=Xn(),u=d.sessions[Ze("N4",t.id)];if(u){const f=new Date().toISOString();u.phase="done",u.completedAt=f,u.updatedAt=f,u.currentIndex=a.length,d.activeSessionKey=Ze("N4",t.id),d.lastUpdatedAt=f}Q(),vr("N4");const m=r.n4Meta?.rewards?.lessonCompleteXp||65,h=r.n4Meta?.rewards?.lessonCompleteMoon||8;H(m,h,`n4_lesson:${t.id}`),Kr("N4",t.id),bt({title:`${Te().lessonComplete}: ${b(t.title)}`,message:Te().lessonCompleteText,xp:m,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Z(),T(),P()}function yr(e,t=null){if(!e)return;const n=Q();cr(n,e)}function ja(e,t=null,n=!0){if(e&&(Q().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=J(t);s.state!=="New"&&(r.progress.cards[t]=ke(ie(s),"again"))}}function Wj(e,t=""){const n=r.n4Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=W(n),a=t||s,o=a===s,l=Q();l.grammarResults[n.id]={selected:a,correct:o,checkedAt:new Date().toISOString()},o&&!l.completedGrammar[n.id]?(l.completedGrammar[n.id]=new Date().toISOString(),H(r.n4Meta?.rewards?.grammarXp||10,r.n4Meta?.rewards?.grammarMoon||1,`n4_grammar:${n.id}`),r.progress.totalCorrect+=1,D("answer_correct")):o||(r.progress.totalWrong+=1,D("answer_wrong")),be(),Z(),T(),P()}function Vj(e,t="0",n=""){km("reading",e,t,n)}function Xj(e,t="0",n=""){km("listening",e,t,n)}function km(e,t,n="0",s=""){const o=(e==="reading"?r.n4Reading:r.n4Listening).find(S=>S.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=Q(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,f=e==="reading"?m.completedReading:m.completedListening;if(h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()},d&&!f[o.id]){f[o.id]=new Date().toISOString();const S=e==="reading"?r.n4Meta?.rewards?.readingXp||35:r.n4Meta?.rewards?.listeningXp||30,C=e==="reading"?r.n4Meta?.rewards?.readingMoon||4:r.n4Meta?.rewards?.listeningMoon||3;H(S,C,`n4_${e}:${o.id}`),r.progress.totalCorrect+=1,D("answer_correct")}else d||(r.progress.totalWrong+=1,D("answer_wrong"));be(),Z(),T(),P()}function Qj(e){const t=Zn(e);t&&(wn("textbook-lesson",{level:"N4",lessonId:t.id}),Q().currentLessonId=t.id,Rt("N4",t.id,"n4_lesson_open"),dn("N4",t,"n4_lesson_open"),es(t.id))}function Yj(){es("")}function Zj(e=null){e&&(Q().activeReviewMode=e),es("review")}function eS(){es("kanji")}function tS(){es("grammar")}function nS(){es("reading")}function sS(){es("listening")}function rS(){es("final-test")}function es(e){r.route="textbooks",r.activeTextbookLevel="N4",r.activeTextbookSubroute=e||null,Q().opened=!0;const t=e?`#textbooks/N4/${encodeURIComponent(e)}`:"#textbooks/N4";jt(t),Z(),T(),ue(),Ot()}function aS(e="due"){const t=Date.now(),n=Q(),s=nt();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=J(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function ym(){const e=nt();if(!e.length)return[];const t=r.n4FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n4FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=ut().find(d=>d.kanji.includes(o.kanji))||ut()[0];s.push(iS(l,o,c,a))}return s.filter(Boolean)}function iS(e,t,n,s){const o=Ct(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:pt({value:t.id,label:K(t)},nt().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:pt({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},nt().flatMap(c=>Ct(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=b({ru:l.ru,en:l.en});return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:pt({value:c,label:c},ut().flatMap(d=>d.sentences||[]).map(d=>({value:b({ru:d.ru,en:d.en}),label:b({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:gs(o),answer:c,answerLabel:c,options:pt({value:c,label:c},nt().flatMap(d=>Ct(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n4Grammar[s%Math.max(r.n4Grammar.length,1)];if(c)return{id:`n4-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${b(c.question||c.explanation)}`,answer:W(c),answerLabel:W(c),options:pt({value:W(c),label:W(c)},qe(c).filter(d=>d!==W(c)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n4Reading[s%Math.max(r.n4Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n4-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||b(c.title)} ${b(d.prompt)}`,answer:d.answer,answerLabel:b((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:b(u.label||u)}))}}return e==="srs"?{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n4-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:pt({value:t.kanji,label:t.kanji},nt().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function oS(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(Q().finalTest.answers[t]=n,T(),P())}function $m(e=!1){if(r.finalTestBusy)return;const t=Q().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}r.finalTestBusy=!0;try{const n=ym(),s=r.n4FinalTest||{},a=Te(),o=hn(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const N=o.firstMissingId?`#${Lr("n4",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N4",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=N,T();return}let u=0;const m=[],h=[];n.forEach(N=>{const z=String(t.answers?.[N.id]||"").trim();if(z===N.answer){if(u+=1,N.kanji&&yr(N.kanji,N.cardId),N.grammarId){const q=Q();q.completedGrammar[N.grammarId]=q.completedGrammar[N.grammarId]||d}}else z||h.push(N),m.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:z}),N.kanji&&ja(N.kanji,N.cardId)});const f=n.length?Math.round(u/n.length*100):0,S=!!t.completedAt,C=!!t.passed,x=Math.max(0,m.length-h.length);let L=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=f,t.passed=f>=l,t.correctAnswers=u,t.incorrectAnswers=x,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(N=>N.id),t.completedAt=d,t.lastScore=f,t.bestScore=Math.max(Number(t.bestScore||0),f),t.passedAt=t.passed?C&&t.passedAt||d:t.passedAt||null,!S){const N=Number(s?.rewards?.completeXp||180),z=Number(s?.rewards?.completeMoon||35);L+=N,k+=z,H(N,z,"n4_final_complete")}if(t.passed&&!C){const N=Number(s?.rewards?.passXp||90),z=Number(s?.rewards?.passMoon||15);L+=N,k+=z,H(N,z,"n4_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=k,Va("N4",t),Q(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N4",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:f,correct:u,incorrect:x,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n4-review",reviewAllAction:"n4-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},Z(),T()}catch(n){console.error(n),G(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,P()}}function lS(){Q().finalTest=Ml().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,T(),P()}function jm(e){return`n4-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function cS(e){r.activeTextbookLevel="N3",r.activeJlptLesson="N3";const t=Tc();t.opened||(t.opened=!0,Z({silent:!0}),T());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return $S();if(n==="review")return hS();if(n==="kanji")return wS();if(n==="grammar")return bS();if(n==="reading")return kS();if(n==="listening")return yS();const s=ts(n);return s?(V().currentLessonId=s.id,Rt("N3",s.id,"n3_lesson_page"),dn("N3",s,"n3_lesson_page"),pS(e,s)):dS(e)}function dS(e){const t=xS(),n=xe(),s=gt(),a=SS(),o=r.n3Meta||{},l=b(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n3-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N3 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(b(o.description||e.description||{}))}</p>
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
          ${Rn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${M(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,E(t.studied,t.total))}
          ${M(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,E(t.completedLessons,s.length))}
          ${M(n.completedGrammar,`${t.completedGrammar}/${r.n3Meta?.grammarCount||r.n3Grammar.length}`,n.grammar,E(t.completedGrammar,r.n3Meta?.grammarCount||r.n3Grammar.length))}
          ${M(n.completedReading,`${t.completedReading}/${r.n3Meta?.readingCount||r.n3Reading.length}`,n.readingN3,E(t.completedReading,r.n3Meta?.readingCount||r.n3Reading.length))}
          ${M(n.completedListening,`${t.completedListening}/${r.n3Meta?.listeningCount||r.n3Listening.length}`,n.listeningN3,E(t.completedListening,r.n3Meta?.listeningCount||r.n3Listening.length))}
          ${M(n.reviews,t.reviews,n.srs,E(t.reviews,Math.max(t.total,1)))}
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
            ${s.map(c=>uS(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(b((r.n3Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(b(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${wr("N3")}
      </section>
    `}function uS(e){const t=Lm(e.id),n=xe();let s=e.kanji.filter(a=>V().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n3/${g(e.id)}" data-action="n3-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(b(e.title))}</h3>
        <p>${i(b(e.goal))}</p>
        <div class="n5-kanji-strip n3-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(NS(t))}</small>
      </a>
    `}function pS(e,t){const n=xe(),s=$r(t),a=Sa(t),o=Lm(t.id),l=Es("N3",t,s);let c=o==="completed";const d=`n3:${t.id}`;ye.has(d)&&(c=!0);const u=c,m=a.filter(U=>_c(U.id)?.correct).length,h=a.length>0&&m===a.length,f=s.filter(U=>V().studiedKanji[U.kanji]).length,S=t.kanji.length,C=f>=S,x=!c&&h&&C,L=t.kanji.filter(U=>V().difficultKanji[U]).join(" · "),k=gt().find(U=>U.order===t.order+1),N=Sm(t),z=N?!!V().completedReading[N.id]:!1,q=Gt("N3",t.id,"player"),Ys=Gt("N3",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n3-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · ${i(n.lesson)} ${t.order}/37</p>
            <h1>${i(b(t.title))}</h1>
            <p>${i(b(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${i(n.backToN3)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(b(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.duration)}: ${i(t.durationMinutes||30)} ${i(n.minutes)}</span>
              ${t.grammarFocus.map(U=>`<span class="pill">${i(U)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${M(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,E(l.answeredCount,t.kanji.length))}
            ${M(n.exercises,`${m}/${a.length}`,n.correct,E(m,a.length))}
          </div>
        </article>

        ${ma("N3",t,s,n,{playerId:q,answerAction:"jlpt-lesson-answer",examples:U=>xt(U),sentence:U=>mS(U,t)})}

        ${fS(t)}

        ${gS(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(U=>`
              <article>
                <strong>${i(U.jp)}</strong>
                <span>${i(ee(U.reading||""))}</span>
                <small>${i(b({ru:U.ru,en:U.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(Ys)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(U=>Cm(U)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(U=>V().studiedKanji[U.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${N?`<span class="pill">${i(n.miniReadingTitle)}: ${i(z?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
            </div>
            ${!c&&!x?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n3-complete-lesson" data-id="${g(t.id)}" ${u||!x?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n3-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#jlpt/n3/${g(k.id)}" data-action="n3-open-lesson" data-id="${g(k.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n3-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function Sm(e){return e?.miniReadingId&&r.n3Reading.find(t=>t.id===e.miniReadingId)||null}function gS(e){const t=xe(),n=Sm(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Ic(n,"reading")}
      </section>
    `:""}function mS(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(ee(n.reading||""))}</span>
        <small>${i(b({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(xe().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function fS(e){const t=xe(),n=(e.grammarFocus||[]).map(s=>Rc(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n3-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n3-section-grid">
          ${n.map(s=>`
            <article class="n3-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(b(s.title))}</h3>
              <p>${i(b(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(b({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n3-grammar-complete" data-id="${g(s.id)}" data-value="${g(W(s))}">${i(V().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function Cm(e){const t=xe(),n=_c(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&Yn("N3",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(b(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(Em(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(b(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n3-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${xm(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(b(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
            ${va("N3",e).map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${xm(e,n)}
      </article>
    `}function xm(e,t){if(!t)return"";const n=xe(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function hS(e){const t=xe(),n=V().activeReviewMode||"due",s=US(n);return`
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
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n3-review" data-mode="${g(a.id)}">${i(b(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>vS(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function vS(e,t){const n=xe(),s=J(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(en(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(xt(e)[0]?.word||e.hiragana||"")} · ${i(xt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function wS(e){const t=xe(),n=st();return`
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
              <div class="n5-kanji-topline"><span class="pill">${a+1}/370</span><span class="pill">${i(J(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(K(s))}</h3>
              <p>${i(xt(s)[0]?.word||"")} · ${i(xt(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n3-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function bS(e){const t=xe();return`
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
          ${M(t.completedGrammar,`${Object.keys(V().completedGrammar||{}).length}/${r.n3Grammar.length}`,t.grammar,E(Object.keys(V().completedGrammar||{}).length,r.n3Grammar.length))}
          ${M(t.questions,r.n3Grammar.length,t.grammar,100)}
        </div>
        <div class="n3-section-grid">
          ${r.n3Grammar.map(n=>{const s=V().grammarResults?.[n.id];return`
              <article class="n3-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(b(n.title))}</h3>
                <p>${i(b(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(ee(a.reading||""))}</span><small>${i(b({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(b(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(qe(n).length?qe(n):[W(n)]).map(a=>`
                    <button class="btn ${s?.selected===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n3-grammar-complete" data-id="${g(n.id)}" data-value="${g(a)}">${i(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${W(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function kS(e){const t=xe(),n=qa("N3","n3_reading_page"),s=_r("N3");return(n||s)&&T(),`
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
          ${r.n3Reading.map(a=>Ic(a,"reading")).join("")}
        </div>
      </section>
    `}function yS(e){const t=xe();return`
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
          ${r.n3Listening.map(n=>Ic(n,"listening")).join("")}
        </div>
      </section>
    `}function Ic(e,t){const n=xe(),s=t==="reading"?V().completedReading[e.id]:V().completedListening[e.id],a=t==="reading"?V().readingAnswers:V().listeningAnswers,o=t==="reading"?"n3-reading-complete":"n3-listening-complete";return`
      <article class="n3-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(b(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n3-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=a?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n3-question-block">
              <h3>${i(b(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(h.value)}">${i(b(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function $S(e){const t=xe(),n=r.n3FinalTest||{},s=_m(),a=V().finalTest,o=hn(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),T()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n3-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N3 · Final</p>
            <h1>${i(b(n.title||{}))}</h1>
            <p>${i(b(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n3-overview">${i(t.backToN3)}</button>
            <button class="btn" type="button" data-action="n3-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${M(t.questions,`${l}/${s.length}`,t.finalTest,E(l,s.length))}
          ${M(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${M(t.mistakes,d?(a.mistakes||[]).length:0,t.difficult,d?E((a.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n3-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${Zt("N3","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>jS(m,h)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n3-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Zt("N3","btn ghost")}
          <button class="btn ghost" type="button" data-action="n3-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function jS(e,t){const n=V().finalTest.answers?.[e.id],s=!!V().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n3-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(xe().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function xe(){return p()==="ru"?{title:"JLPT N3",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N3 как мост к среднему уровню",continue:"Продолжить",review:"Повторять N3",openKanji:"Открыть список кандзи",grammarN3:"Грамматика N3",readingN3:"Чтение N3",listeningN3:"Аудирование N3",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Listening",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"37 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, мини-текст, упражнения, письмо и повторение.",reviewPlan:"План повторения на 60 дней",day:"день",lesson:"Урок",backToN3:"К N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"Если база N5 и N4 дырявая, N3 будет ощущаться как стена. Сначала проверь частицы, базовые связки, условные формы и привычные повседневные конструкции.",reviewN5Base:"Повторить N5/N4 перед N3",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> абзац -> чтение -> вывод -> повторение",lessonChainText:"N3 больше не живёт списком знаков: каждый знак сразу входит в слово, грамматическую связку, мини-текст и повторение по смыслу.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, мини-чтение и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, кто, что, почему и к какому выводу ведёт короткий N3-текст.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N3-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N3.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"370 кандзи N3",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"80 грамматических конструкций N3",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном и разговорном контексте.",readingTitle:"Тексты для чтения N3",readingText:"Короткие тексты и lesson mini-readings связывают кандзи, слова, грамматику и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N3",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N3",finalPassed:"N3 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N3",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N3 textbook after N5",continue:"Continue",review:"Review N3",openKanji:"Open kanji list",grammarN3:"N3 grammar",readingN3:"N3 reading",listeningN3:"N3 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"37 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, mini reading, exercises, writing, and SRS.",reviewPlan:"60-day review plan",day:"day",lesson:"Lesson",backToN3:"To N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"If the N5 and N4 base is shaky, N3 feels like a wall. Review particles, conditionals, and the everyday support grammar first.",reviewN5Base:"Review N5/N4 before N3",lessonChain:"Kanji -> word -> grammar -> sentence -> paragraph -> reading -> conclusion -> SRS",lessonChainText:"N3 is not a bare list: each sign gets a word, grammar link, mini text, and review context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, mini reading, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N3 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand who, what, why, and what conclusion the short N3 text points to.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N3 review",reviewDescription:"Review due cards, difficult kanji, or the full N3 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"370 N3 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"80 N3 grammar constructions",grammarText:"Compact cards with function, formula, example, and comprehension check.",readingTitle:"N3 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, and conclusions.",listeningTitle:"N3 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N3",finalPassed:"N3 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Tc(){var s;(s=r.progress).n3Course||(s.n3Course=Kl());const e=gt();!ts(r.progress.n3Course.currentLessonId)&&e[0]&&(r.progress.n3Course.currentLessonId=e[0].id);const n=e.find(a=>!r.progress.n3Course.completedLessons[a.id]);return!r.progress.n3Course.currentLessonId&&n&&(r.progress.n3Course.currentLessonId=n.id),r.progress.n3Course}function V(){return r.progress.n3Course||Tc()}function gt(){return r.n3Textbook?.items||[]}function ts(e){const t=String(e||"");return t&&gt().find(n=>n.id===t||n.id===`n3-${t}`||n.id.endsWith(`-${t}`))||null}function SS(){return ts(V().currentLessonId)||gt().find(e=>!V().completedLessons[e.id])||gt()[0]||null}function $r(e){return(e?.kanji||[]).map(t=>Nm(t)).filter(Boolean)}function st(){return Ha("N3",CS)}function CS(){const e=new Set;return(r.n3KanjiCatalog||[]).map(t=>Nm(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Nm(e){const t=String(e||""),n=r.n3KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N3")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Ki(s,n):s||(n?Ki({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[]},n):null)}function Rc(e){const t=String(e||"");return r.n3Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function xt(e){return ha(e,e.examples)}function xS(){const e=st(),t=V(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{J(s.id).state!=="New"&&n.add(s.kanji)}),{total:r.n3Meta?.kanjiCount||e.length||370,studied:n.size,completedLessons:Ks("N3"),completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((s,a)=>s+Number(J(a.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Lm(e){return hr("N3",e)}function NS(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Sa(e){const t=$r(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n3Exercises?.types||[]).map(k=>[k.type,k.title])),a=Object.fromEntries((r.n3Exercises?.types||[]).map(k=>[k.type,k])),o=k=>a[k]||{rewardXp:r.n3Meta?.rewards?.exerciseXp||10,rewardMoon:r.n3Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:mt({value:c.id,label:K(c)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:mt({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=xt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:mt({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(k=>xt(k).map(N=>({value:N.reading,label:N.reading}))).filter(k=>k.value&&k.value!==m.reading),3),...o("reading")});const h=n[0];h&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:b({ru:h.ru,en:h.en}),answerLabel:b({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:mt({value:b({ru:h.ru,en:h.en}),label:b({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:b({ru:k.ru,en:k.en}),label:b({ru:k.ru,en:k.en})})),1),...o("sentence")});const f=t[3]||t[0],S=xt(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:Za(S),answer:S.word||f.kanji,answerLabel:S.word||f.kanji,kanji:f.kanji,cardId:f.id,options:mt({value:S.word||f.kanji,label:S.word||f.kanji},t.flatMap(k=>xt(k).map(N=>({value:N.word,label:N.word}))).filter(k=>k.value&&k.value!==S.word),2),...o("missing-word")});const C=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(C)}`:`Type the kanji for: ${K(C)}`,answer:C.kanji,answerLabel:C.kanji,kanji:C.kanji,cardId:C.id,options:[],...o("active-recall")});const x=Rc(e.grammarFocus?.[0]);x&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:b(x.question||x.explanation),answer:W(x),answerLabel:W(x),kanji:t[0].kanji,cardId:t[0].id,grammarId:x.id,options:mt({value:W(x),label:W(x)},qe(x).filter(k=>k!==W(x)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:b({ru:L.ru,en:L.en}),answerLabel:b({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:mt({value:b({ru:L.ru,en:L.en}),label:b({ru:L.ru,en:L.en})},n.filter(k=>k.jp!==L.jp).map(k=>({value:b({ru:k.ru,en:k.en}),label:b({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),l.slice(0,r.n3Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N3",lessonId:e.id}))}function mt(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),st().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function Am(e){for(const t of gt()){const n=Sa(t).find(s=>s.id===e);if(n)return n}return null}function _c(e){return wa("N3",V(),e)}function LS(e){const t=Am(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Im(t,s,a)}function AS(e){const t=Am(e);if(!t)return;const n=document.getElementById(Em(t.id)),s=n?String(n.value||"").trim():"";Im(t,s,s===t.answer)}function Im(e,t,n){const s=V();ba("N3",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n3Meta?.rewards?.exerciseXp||10),rewardMoon:Number(e.rewardMoon||r.n3Meta?.rewards?.exerciseMoon||1),rewardKey:`n3_exercise:${e.id}`,quietReward:!0,markStudied:()=>jr(e.kanji,e.cardId),markDifficult:()=>Ca(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Tm(e,t,n="review",s={}){const a=oe(e)||st().find(S=>String(S.id)===String(e));if(!a)return;const o=s.scrollPolicy||(n==="review"?re.TOP:re.PRESERVE),l=s.viewportSnapshot||Me(),c=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,m=d?"hard":t,h=ie(J(a.id)),f=ke(h,u,m);r.progress.cards[a.id]=f,Xt(h,f,m),be(),jr(a.kanji,a.id),V().srsKanji[a.kanji]=new Date().toISOString(),d?(Ca(a.kanji,a.id,!1),r.progress.totalCorrect+=1,H(r.n3Meta?.rewards?.hardXp||2,1,`n3_srs_lesson_hard:${a.id}`,{silent:c})):ze(t)?(Ca(a.kanji,a.id),r.progress.totalWrong+=1,H(r.n3Meta?.rewards?.hardXp||2,0,`n3_srs_hard:${a.id}`,{silent:c})):(r.progress.totalCorrect+=1,H(t==="easy"?r.n3Meta?.rewards?.knowXp||8:r.n3Meta?.rewards?.addToSrsXp||6,1,`n3_srs:${a.id}`,{silent:c})),je({scrollPolicy:o,viewportSnapshot:l}),T(),Dt("N3 SRS post-render effects",()=>{D(ze(t)?"answer_wrong":"answer_correct"),Z({silent:c})},{scrollPolicy:o,viewportSnapshot:l})}function IS(e){const t=oe(e)||st().find(s=>String(s.id)===String(e));if(!t)return;const n=V();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},jr(t.kanji,t.id),H(9,1,`n3_writing:${t.id}`)),Z(),T(),P()}function TS(e){const t=ts(e);if(!t)return;const n=V(),s=`n3:${t.id}`;if(ye.has(s)||n.completedLessons[t.id]){P();return}const a=$r(t);if(a.filter(f=>n.studiedKanji[f.kanji]).length<t.kanji.length){const f=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof G=="function"&&G(f);return}const l=Sa(t);if(!(l.length>0&&l.every(f=>_c(f.id)?.correct))){const f=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof G=="function"&&G(f);return}ye.add(s),$r(t).forEach(f=>{jr(f.kanji,f.id),n.srsKanji[f.kanji]=n.srsKanji[f.kanji]||new Date().toISOString();const S=J(f.id);S.state==="New"&&(r.progress.cards[f.id]=ke(ie(S),"good"))}),(t.grammarFocus||[]).map(f=>Rc(f)).filter(Boolean).forEach(f=>{n.completedGrammar[f.id]=n.completedGrammar[f.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=gt().find(f=>f.order===t.order+1)?.id||t.id;const d=Xn(),u=d.sessions[Ze("N3",t.id)];if(u){const f=new Date().toISOString();u.phase="done",u.completedAt=f,u.updatedAt=f,u.currentIndex=a.length,d.activeSessionKey=Ze("N3",t.id),d.lastUpdatedAt=f}V(),vr("N3");const m=r.n3Meta?.rewards?.lessonCompleteXp||75,h=r.n3Meta?.rewards?.lessonCompleteMoon||9;H(m,h,`n3_lesson:${t.id}`),Kr("N3",t.id),bt({title:`${xe().lessonComplete}: ${b(t.title)}`,message:xe().lessonCompleteText,xp:m,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Z(),T(),P()}function jr(e,t=null){if(!e)return;const n=V();cr(n,e)}function Ca(e,t=null,n=!0){if(e&&(V().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=J(t);s.state!=="New"&&(r.progress.cards[t]=ke(ie(s),"again"))}}function RS(e,t=""){const n=r.n3Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=W(n),a=t||s,o=a===s,l=V();l.grammarResults[n.id]={selected:a,correct:o,checkedAt:new Date().toISOString()},o&&!l.completedGrammar[n.id]?(l.completedGrammar[n.id]=new Date().toISOString(),H(r.n3Meta?.rewards?.grammarXp||11,r.n3Meta?.rewards?.grammarMoon||1,`n3_grammar:${n.id}`),r.progress.totalCorrect+=1,D("answer_correct")):o||(r.progress.totalWrong+=1,D("answer_wrong")),be(),Z(),T(),P()}function _S(e,t="0",n=""){Rm("reading",e,t,n)}function PS(e,t="0",n=""){Rm("listening",e,t,n)}function Rm(e,t,n="0",s=""){const o=(e==="reading"?r.n3Reading:r.n3Listening).find(x=>x.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=V(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,f=e==="reading"?m.completedReading:m.completedListening,S=!!f[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const C=(o.questions||[]).every((x,L)=>h[`${o.id}:${L}`]?.correct);if(d?(r.progress.totalCorrect+=1,D("answer_correct")):(r.progress.totalWrong+=1,D("answer_wrong")),C&&!S){f[o.id]=new Date().toISOString();const x=e==="reading"?r.n3Meta?.rewards?.readingXp||38:r.n3Meta?.rewards?.listeningXp||34,L=e==="reading"?r.n3Meta?.rewards?.readingMoon||4:r.n3Meta?.rewards?.listeningMoon||4;H(x,L,`n3_${e}:${o.id}`)}be(),Z(),T(),P()}function ES(e){const t=ts(e);t&&(wn("textbook-lesson",{level:"N3",lessonId:t.id}),V().currentLessonId=t.id,Rt("N3",t.id,"n3_lesson_open"),dn("N3",t,"n3_lesson_open"),ns(t.id))}function MS(){ns("")}function KS(e=null){e&&(V().activeReviewMode=e),ns("review")}function DS(){ns("kanji")}function FS(){ns("grammar")}function OS(){ns("reading")}function BS(){ns("listening")}function zS(){ns("final-test")}function ns(e){r.route="textbooks",r.activeTextbookLevel="N3",r.activeTextbookSubroute=e||null,V().opened=!0;const t=e?`#jlpt/n3/${encodeURIComponent(e)}`:"#jlpt/n3";jt(t),Z(),T(),ue(),Ot()}function US(e="due"){const t=Date.now(),n=V(),s=st();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=J(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function _m(){const e=st();if(!e.length)return[];const t=r.n3FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n3FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=gt().find(d=>d.kanji.includes(o.kanji))||gt()[0];s.push(JS(l,o,c,a))}return s.filter(Boolean)}function JS(e,t,n,s){const o=xt(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:mt({value:t.id,label:K(t)},st().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:mt({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},st().flatMap(c=>xt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=b({ru:l.ru,en:l.en});return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:mt({value:c,label:c},gt().flatMap(d=>d.sentences||[]).map(d=>({value:b({ru:d.ru,en:d.en}),label:b({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:gs(o),answer:c,answerLabel:c,options:mt({value:c,label:c},st().flatMap(d=>xt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n3Grammar[s%Math.max(r.n3Grammar.length,1)];if(c)return{id:`n3-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${b(c.question||c.explanation)}`,answer:W(c),answerLabel:W(c),options:mt({value:W(c),label:W(c)},qe(c).filter(d=>d!==W(c)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n3Reading[s%Math.max(r.n3Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n3-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||b(c.title)} ${b(d.prompt)}`,answer:d.answer,answerLabel:b((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:b(u.label||u)}))}}return e==="srs"?{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n3-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:mt({value:t.kanji,label:t.kanji},st().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function GS(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(V().finalTest.answers[t]=n,T(),P())}function Pm(e=!1){if(r.finalTestBusy)return;const t=V().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}r.finalTestBusy=!0;try{const n=_m(),s=r.n3FinalTest||{},a=xe(),o=hn(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const N=o.firstMissingId?`#${Lr("n3",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N3",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=N,T();return}let u=0;const m=[],h=[];n.forEach(N=>{const z=String(t.answers?.[N.id]||"").trim();if(z===N.answer){if(u+=1,N.kanji&&jr(N.kanji,N.cardId),N.grammarId){const q=V();q.completedGrammar[N.grammarId]=q.completedGrammar[N.grammarId]||d}}else z||h.push(N),m.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:z}),N.kanji&&Ca(N.kanji,N.cardId)});const f=n.length?Math.round(u/n.length*100):0,S=!!t.completedAt,C=!!t.passed,x=Math.max(0,m.length-h.length);let L=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=f,t.passed=f>=l,t.correctAnswers=u,t.incorrectAnswers=x,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(N=>N.id),t.completedAt=d,t.lastScore=f,t.bestScore=Math.max(Number(t.bestScore||0),f),t.passedAt=t.passed?C&&t.passedAt||d:t.passedAt||null,!S){const N=Number(s?.rewards?.completeXp||220),z=Number(s?.rewards?.completeMoon||40);L+=N,k+=z,H(N,z,"n3_final_complete")}if(t.passed&&!C){const N=Number(s?.rewards?.passXp||110),z=Number(s?.rewards?.passMoon||18);L+=N,k+=z,H(N,z,"n3_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=k,Va("N3",t),V(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N3",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:f,correct:u,incorrect:x,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n3-review",reviewAllAction:"n3-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},Z(),T()}catch(n){console.error(n),G(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,P()}}function qS(){V().finalTest=Kl().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,T(),P()}function Em(e){return`n3-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function HS(e){r.activeTextbookLevel="N2",r.activeJlptLesson="N2";const t=Ec();t.opened||(t.opened=!0,Z({silent:!0}),T());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return i0();if(n==="review")return e0();if(n==="kanji")return n0();if(n==="grammar")return s0();if(n==="reading")return r0();if(n==="listening")return a0();const s=ss(n);return s?(X().currentLessonId=s.id,Rt("N2",s.id,"n2_lesson_page"),dn("N2",s,"n2_lesson_page"),XS(e,s)):WS(e)}function WS(e){const t=d0(),n=Ne(),s=ft(),a=l0(),o=r.n2Meta||{},l=b(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n2-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N2 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(b(o.description||e.description||{}))}</p>
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
          ${Rn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${M(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,E(t.studied,t.total))}
          ${M(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,E(t.completedLessons,s.length))}
          ${M(n.completedGrammar,`${t.completedGrammar}/${r.n2Meta?.grammarCount||r.n2Grammar.length}`,n.grammar,E(t.completedGrammar,r.n2Meta?.grammarCount||r.n2Grammar.length))}
          ${M(n.completedReading,`${t.completedReading}/${r.n2Meta?.readingCount||r.n2Reading.length}`,n.readingN2,E(t.completedReading,r.n2Meta?.readingCount||r.n2Reading.length))}
          ${M(n.completedListening,`${t.completedListening}/${r.n2Meta?.listeningCount||r.n2Listening.length}`,n.listeningN2,E(t.completedListening,r.n2Meta?.listeningCount||r.n2Listening.length))}
          ${M(n.reviews,t.reviews,n.srs,E(t.reviews,Math.max(t.total,1)))}
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
            ${s.map(c=>VS(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(b((r.n2Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(b(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${wr("N2")}
      </section>
    `}function VS(e){const t=Om(e.id),n=Ne();let s=e.kanji.filter(a=>X().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n2/${g(e.id)}" data-action="n2-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(b(e.title))}</h3>
        <p>${i(b(e.goal))}</p>
        <div class="n5-kanji-strip n2-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(u0(t))}</small>
      </a>
    `}function XS(e,t){const n=Ne(),s=Sr(t),a=xa(t),o=Om(t.id),l=Es("N2",t,s);let c=o==="completed";const d=`n2:${t.id}`;ye.has(d)&&(c=!0);const u=c,m=a.filter(U=>Kc(U.id)?.correct).length,h=a.length>0&&m===a.length,f=s.filter(U=>X().studiedKanji[U.kanji]).length,S=t.kanji.length,C=f>=S,x=!c&&h&&C,L=t.kanji.filter(U=>X().difficultKanji[U]).join(" · "),k=ft().find(U=>U.order===t.order+1),N=Mm(t),z=N?!!X().completedReading[N.id]:!1,q=Gt("N2",t.id,"player"),Ys=Gt("N2",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n2-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · ${i(n.lesson)} ${t.order}/38</p>
            <h1>${i(b(t.title))}</h1>
            <p>${i(b(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${i(n.backToN2)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(b(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.duration)}: ${i(t.durationMinutes||30)} ${i(n.minutes)}</span>
              ${t.grammarFocus.map(U=>`<span class="pill">${i(U)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${M(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,E(l.answeredCount,t.kanji.length))}
            ${M(n.exercises,`${m}/${a.length}`,n.correct,E(m,a.length))}
          </div>
        </article>

        ${ma("N2",t,s,n,{playerId:q,answerAction:"jlpt-lesson-answer",examples:U=>Nt(U),sentence:U=>YS(U,t)})}

        ${ZS(t)}

        ${QS(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(U=>`
              <article>
                <strong>${i(U.jp)}</strong>
                <span>${i(ee(U.reading||""))}</span>
                <small>${i(b({ru:U.ru,en:U.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(Ys)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(U=>Km(U)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(U=>X().studiedKanji[U.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${N?`<span class="pill">${i(n.miniReadingTitle)}: ${i(z?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
            </div>
            ${!c&&!x?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n2-complete-lesson" data-id="${g(t.id)}" ${u||!x?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n2-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#jlpt/n2/${g(k.id)}" data-action="n2-open-lesson" data-id="${g(k.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n2-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function Mm(e){return e?.miniReadingId&&r.n2Reading.find(t=>t.id===e.miniReadingId)||null}function QS(e){const t=Ne(),n=Mm(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Pc(n,"reading")}
      </section>
    `:""}function YS(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(ee(n.reading||""))}</span>
        <small>${i(b({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Ne().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function ZS(e){const t=Ne(),n=(e.grammarFocus||[]).map(s=>Mc(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n2-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n2-section-grid">
          ${n.map(s=>`
            <article class="n2-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(b(s.title))}</h3>
              <p>${i(b(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(b({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n2-grammar-complete" data-id="${g(s.id)}" data-value="${g(W(s))}">${i(X().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function Km(e){const t=Ne(),n=Kc(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&Yn("N2",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(b(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(Hm(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(b(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n2-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Dm(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(b(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
            ${va("N2",e).map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Dm(e,n)}
      </article>
    `}function Dm(e,t){if(!t)return"";const n=Ne(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function e0(e){const t=Ne(),n=X().activeReviewMode||"due",s=N0(n);return`
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
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n2-review" data-mode="${g(a.id)}">${i(b(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>t0(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function t0(e,t){const n=Ne(),s=J(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(en(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(Nt(e)[0]?.word||e.hiragana||"")} · ${i(Nt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function n0(e){const t=Ne(),n=rt();return`
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
              <div class="n5-kanji-topline"><span class="pill">${a+1}/380</span><span class="pill">${i(J(s.id).state)}</span></div>
              <div class="n5-big-kanji">${i(s.kanji)}</div>
              <h3>${i(K(s))}</h3>
              <p>${i(Nt(s)[0]?.word||"")} · ${i(Nt(s)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n2-srs" data-id="${g(s.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function s0(e){const t=Ne();return`
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
          ${M(t.completedGrammar,`${Object.keys(X().completedGrammar||{}).length}/${r.n2Grammar.length}`,t.grammar,E(Object.keys(X().completedGrammar||{}).length,r.n2Grammar.length))}
          ${M(t.questions,r.n2Grammar.length,t.grammar,100)}
        </div>
        <div class="n2-section-grid">
          ${r.n2Grammar.map(n=>{const s=X().grammarResults?.[n.id];return`
              <article class="n2-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(b(n.title))}</h3>
                <p>${i(b(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(ee(a.reading||""))}</span><small>${i(b({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(b(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(qe(n).length?qe(n):[W(n)]).map(a=>`
                    <button class="btn ${s?.selected===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n2-grammar-complete" data-id="${g(n.id)}" data-value="${g(a)}">${i(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${W(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function r0(e){const t=Ne(),n=qa("N2","n2_reading_page"),s=_r("N2");return(n||s)&&T(),`
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
          ${r.n2Reading.map(a=>Pc(a,"reading")).join("")}
        </div>
      </section>
    `}function a0(e){const t=Ne();return`
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
          ${r.n2Listening.map(n=>Pc(n,"listening")).join("")}
        </div>
      </section>
    `}function Pc(e,t){const n=Ne(),s=t==="reading"?X().completedReading[e.id]:X().completedListening[e.id],a=t==="reading"?X().readingAnswers:X().listeningAnswers,o=t==="reading"?"n2-reading-complete":"n2-listening-complete";return`
      <article class="n2-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(b(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n2-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=a?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n2-question-block">
              <h3>${i(b(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(h.value)}">${i(b(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function i0(e){const t=Ne(),n=r.n2FinalTest||{},s=Gm(),a=X().finalTest,o=hn(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),T()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n2-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N2 · Final</p>
            <h1>${i(b(n.title||{}))}</h1>
            <p>${i(b(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n2-overview">${i(t.backToN2)}</button>
            <button class="btn" type="button" data-action="n2-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${M(t.questions,`${l}/${s.length}`,t.finalTest,E(l,s.length))}
          ${M(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${M(t.mistakes,d?(a.mistakes||[]).length:0,t.difficult,d?E((a.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n2-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${Zt("N2","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>o0(m,h)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n2-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Zt("N2","btn ghost")}
          <button class="btn ghost" type="button" data-action="n2-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function o0(e,t){const n=X().finalTest.answers?.[e.id],s=!!X().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n2-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Ne().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Ne(){return p()==="ru"?{title:"JLPT N2",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N2: абзацы, аргументы, выводы и позиция автора",continue:"Продолжить",review:"Повторять N2",openKanji:"Открыть список кандзи",grammarN2:"Грамматика N2",readingN2:"Чтение N2",listeningN2:"Аудирование N2",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"38 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, абзац, авторскую позицию, вывод, письмо и повторение.",reviewPlan:"План повторения на 90 дней",day:"день",lesson:"Урок",backToN2:"К N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"Если база N5, N4 или N3 дырявая, N2 будет ощущаться как стена. Перед стартом проверь частицы, связки, условные формы, N3-грамматику и навык видеть причину, уступку и вывод в абзаце.",reviewN5Base:"Повторить N5/N4/N3 перед N2",lessonChain:"Кандзи -> слово -> грамматика -> абзац -> позиция автора -> вывод -> повторение",lessonChainText:"N2 больше не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, о чём текст, где причина, где уступка, что противопоставлено и к какому выводу ведёт короткий N2-абзац.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N2-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N2.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"380 кандзи N2",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"120 грамматических конструкций N2",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе и живом контексте.",readingTitle:"Тексты для чтения N2",readingText:"Короткие тексты и mini-readings уроков связывают кандзи, слова, грамматику, авторскую позицию и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N2",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N2",finalPassed:"N2 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N2",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N2 textbook: paragraphs, arguments, conclusions, and author stance",continue:"Continue",review:"Review N2",openKanji:"Open kanji list",grammarN2:"N2 grammar",readingN2:"N2 reading",listeningN2:"N2 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"38 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, paragraph logic, author stance, writing, and SRS.",reviewPlan:"90-day review plan",day:"day",lesson:"Lesson",backToN2:"To N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"If the N5, N4, or N3 base is shaky, N2 feels like a wall. Review particles, support grammar, N3 connectors, and the habit of spotting cause, concession, and conclusion in a paragraph.",reviewN5Base:"Review N5/N4/N3 before N2",lessonChain:"Kanji -> word -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N2 is not a bare list: each sign gets a word, a formal link, a mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N2 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N2 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N2 review",reviewDescription:"Review due cards, difficult kanji, or the full N2 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"380 N2 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"120 N2 grammar constructions",grammarText:"Compact cards with function, formula, example, and a comprehension check for practical written Japanese.",readingTitle:"N2 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N2 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N2",finalPassed:"N2 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Ec(){var s;(s=r.progress).n2Course||(s.n2Course=Dl());const e=ft();!ss(r.progress.n2Course.currentLessonId)&&e[0]&&(r.progress.n2Course.currentLessonId=e[0].id);const n=e.find(a=>!r.progress.n2Course.completedLessons[a.id]);return!r.progress.n2Course.currentLessonId&&n&&(r.progress.n2Course.currentLessonId=n.id),r.progress.n2Course}function X(){return r.progress.n2Course||Ec()}function ft(){return r.n2Textbook?.items||[]}function ss(e){const t=String(e||"");return t&&ft().find(n=>n.id===t||n.id===`n2-${t}`||n.id.endsWith(`-${t}`))||null}function l0(){return ss(X().currentLessonId)||ft().find(e=>!X().completedLessons[e.id])||ft()[0]||null}function Sr(e){return(e?.kanji||[]).map(t=>Fm(t)).filter(Boolean)}function rt(){return Ha("N2",c0)}function c0(){const e=new Set;return(r.n2KanjiCatalog||[]).map(t=>Fm(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Fm(e){const t=String(e||""),n=r.n2KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N2")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Fi(s,n):s||(n?Fi({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[]},n):null)}function Mc(e){const t=String(e||"");return r.n2Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function Nt(e){return ha(e,e.examples)}function d0(){const e=rt(),t=X(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{J(s.id).state!=="New"&&n.add(s.kanji)}),{total:r.n2Meta?.kanjiCount||e.length||380,studied:n.size,completedLessons:Ks("N2"),completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((s,a)=>s+Number(J(a.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Om(e){return hr("N2",e)}function u0(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function xa(e){const t=Sr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n2Exercises?.types||[]).map(k=>[k.type,k.title])),a=Object.fromEntries((r.n2Exercises?.types||[]).map(k=>[k.type,k])),o=k=>a[k]||{rewardXp:r.n2Meta?.rewards?.exerciseXp||11,rewardMoon:r.n2Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:ht({value:c.id,label:K(c)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:ht({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=Nt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:ht({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(k=>Nt(k).map(N=>({value:N.reading,label:N.reading}))).filter(k=>k.value&&k.value!==m.reading),3),...o("reading")});const h=n[0];h&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:b({ru:h.ru,en:h.en}),answerLabel:b({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:ht({value:b({ru:h.ru,en:h.en}),label:b({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:b({ru:k.ru,en:k.en}),label:b({ru:k.ru,en:k.en})})),1),...o("sentence")});const f=t[3]||t[0],S=Nt(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:Za(S),answer:S.word||f.kanji,answerLabel:S.word||f.kanji,kanji:f.kanji,cardId:f.id,options:ht({value:S.word||f.kanji,label:S.word||f.kanji},t.flatMap(k=>Nt(k).map(N=>({value:N.word,label:N.word}))).filter(k=>k.value&&k.value!==S.word),2),...o("missing-word")});const C=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(C)}`:`Type the kanji for: ${K(C)}`,answer:C.kanji,answerLabel:C.kanji,kanji:C.kanji,cardId:C.id,options:[],...o("active-recall")});const x=Mc(e.grammarFocus?.[0]);x&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:b(x.question||x.explanation),answer:W(x),answerLabel:W(x),kanji:t[0].kanji,cardId:t[0].id,grammarId:x.id,options:ht({value:W(x),label:W(x)},qe(x).filter(k=>k!==W(x)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:b({ru:L.ru,en:L.en}),answerLabel:b({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:ht({value:b({ru:L.ru,en:L.en}),label:b({ru:L.ru,en:L.en})},n.filter(k=>k.jp!==L.jp).map(k=>({value:b({ru:k.ru,en:k.en}),label:b({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),l.slice(0,r.n2Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N2",lessonId:e.id}))}function ht(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),rt().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function Bm(e){for(const t of ft()){const n=xa(t).find(s=>s.id===e);if(n)return n}return null}function Kc(e){return wa("N2",X(),e)}function p0(e){const t=Bm(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;zm(t,s,a)}function g0(e){const t=Bm(e);if(!t)return;const n=document.getElementById(Hm(t.id)),s=n?String(n.value||"").trim():"";zm(t,s,s===t.answer)}function zm(e,t,n){const s=X();ba("N2",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n2Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||r.n2Meta?.rewards?.exerciseMoon||1),rewardKey:`n2_exercise:${e.id}`,quietReward:!0,markStudied:()=>Cr(e.kanji,e.cardId),markDifficult:()=>Na(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Um(e,t,n="review",s={}){const a=oe(e)||rt().find(S=>String(S.id)===String(e));if(!a)return;const o=s.scrollPolicy||(n==="review"?re.TOP:re.PRESERVE),l=s.viewportSnapshot||Me(),c=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,m=d?"hard":t,h=ie(J(a.id)),f=ke(h,u,m);r.progress.cards[a.id]=f,Xt(h,f,m),be(),Cr(a.kanji,a.id),X().srsKanji[a.kanji]=new Date().toISOString(),d?(Na(a.kanji,a.id,!1),r.progress.totalCorrect+=1,H(r.n2Meta?.rewards?.hardXp||2,1,`n2_srs_lesson_hard:${a.id}`,{silent:c})):ze(t)?(Na(a.kanji,a.id),r.progress.totalWrong+=1,H(r.n2Meta?.rewards?.hardXp||2,0,`n2_srs_hard:${a.id}`,{silent:c})):(r.progress.totalCorrect+=1,H(t==="easy"?r.n2Meta?.rewards?.knowXp||9:r.n2Meta?.rewards?.addToSrsXp||7,1,`n2_srs:${a.id}`,{silent:c})),je({scrollPolicy:o,viewportSnapshot:l}),T(),Dt("N2 SRS post-render effects",()=>{D(ze(t)?"answer_wrong":"answer_correct"),Z({silent:c})},{scrollPolicy:o,viewportSnapshot:l})}function m0(e){const t=oe(e)||rt().find(s=>String(s.id)===String(e));if(!t)return;const n=X();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Cr(t.kanji,t.id),H(9,1,`n2_writing:${t.id}`)),Z(),T(),P()}function f0(e){const t=ss(e);if(!t)return;const n=X(),s=`n2:${t.id}`;if(ye.has(s)||n.completedLessons[t.id]){P();return}const a=Sr(t);if(a.filter(f=>n.studiedKanji[f.kanji]).length<t.kanji.length){const f=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof G=="function"&&G(f);return}const l=xa(t);if(!(l.length>0&&l.every(f=>Kc(f.id)?.correct))){const f=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof G=="function"&&G(f);return}ye.add(s),Sr(t).forEach(f=>{Cr(f.kanji,f.id),n.srsKanji[f.kanji]=n.srsKanji[f.kanji]||new Date().toISOString();const S=J(f.id);S.state==="New"&&(r.progress.cards[f.id]=ke(ie(S),"good"))}),(t.grammarFocus||[]).map(f=>Mc(f)).filter(Boolean).forEach(f=>{n.completedGrammar[f.id]=n.completedGrammar[f.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=ft().find(f=>f.order===t.order+1)?.id||t.id;const d=Xn(),u=d.sessions[Ze("N2",t.id)];if(u){const f=new Date().toISOString();u.phase="done",u.completedAt=f,u.updatedAt=f,u.currentIndex=a.length,d.activeSessionKey=Ze("N2",t.id),d.lastUpdatedAt=f}X(),vr("N2");const m=r.n2Meta?.rewards?.lessonCompleteXp||85,h=r.n2Meta?.rewards?.lessonCompleteMoon||10;H(m,h,`n2_lesson:${t.id}`),Kr("N2",t.id),bt({title:`${Ne().lessonComplete}: ${b(t.title)}`,message:Ne().lessonCompleteText,xp:m,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Z(),T(),P()}function Cr(e,t=null){if(!e)return;const n=X();cr(n,e)}function Na(e,t=null,n=!0){if(e&&(X().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=J(t);s.state!=="New"&&(r.progress.cards[t]=ke(ie(s),"again"))}}function h0(e,t=""){const n=r.n2Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=W(n),a=t||s,o=a===s,l=X();l.grammarResults[n.id]={selected:a,correct:o,checkedAt:new Date().toISOString()},o&&!l.completedGrammar[n.id]?(l.completedGrammar[n.id]=new Date().toISOString(),H(r.n2Meta?.rewards?.grammarXp||12,r.n2Meta?.rewards?.grammarMoon||1,`n2_grammar:${n.id}`),r.progress.totalCorrect+=1,D("answer_correct")):o||(r.progress.totalWrong+=1,D("answer_wrong")),be(),Z(),T(),P()}function v0(e,t="0",n=""){Jm("reading",e,t,n)}function w0(e,t="0",n=""){Jm("listening",e,t,n)}function Jm(e,t,n="0",s=""){const o=(e==="reading"?r.n2Reading:r.n2Listening).find(x=>x.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=X(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,f=e==="reading"?m.completedReading:m.completedListening,S=!!f[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const C=(o.questions||[]).every((x,L)=>h[`${o.id}:${L}`]?.correct);if(d?(r.progress.totalCorrect+=1,D("answer_correct")):(r.progress.totalWrong+=1,D("answer_wrong")),C&&!S){f[o.id]=new Date().toISOString();const x=e==="reading"?r.n2Meta?.rewards?.readingXp||42:r.n2Meta?.rewards?.listeningXp||38,L=e==="reading"?r.n2Meta?.rewards?.readingMoon||4:r.n2Meta?.rewards?.listeningMoon||4;H(x,L,`n2_${e}:${o.id}`)}be(),Z(),T(),P()}function b0(e){const t=ss(e);t&&(wn("textbook-lesson",{level:"N2",lessonId:t.id}),X().currentLessonId=t.id,Rt("N2",t.id,"n2_lesson_open"),dn("N2",t,"n2_lesson_open"),rs(t.id))}function k0(){rs("")}function y0(e=null){e&&(X().activeReviewMode=e),rs("review")}function $0(){rs("kanji")}function j0(){rs("grammar")}function S0(){rs("reading")}function C0(){rs("listening")}function x0(){rs("final-test")}function rs(e){r.route="textbooks",r.activeTextbookLevel="N2",r.activeTextbookSubroute=e||null,X().opened=!0;const t=e?`#jlpt/n2/${encodeURIComponent(e)}`:"#jlpt/n2";jt(t),Z(),T(),ue(),Ot()}function N0(e="due"){const t=Date.now(),n=X(),s=rt();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=J(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Gm(){const e=rt();if(!e.length)return[];const t=r.n2FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n2FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=ft().find(d=>d.kanji.includes(o.kanji))||ft()[0];s.push(L0(l,o,c,a))}return s.filter(Boolean)}function L0(e,t,n,s){const o=Nt(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:ht({value:t.id,label:K(t)},rt().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:ht({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},rt().flatMap(c=>Nt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=b({ru:l.ru,en:l.en});return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:ht({value:c,label:c},ft().flatMap(d=>d.sentences||[]).map(d=>({value:b({ru:d.ru,en:d.en}),label:b({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:gs(o),answer:c,answerLabel:c,options:ht({value:c,label:c},rt().flatMap(d=>Nt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n2Grammar[s%Math.max(r.n2Grammar.length,1)];if(c)return{id:`n2-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${b(c.question||c.explanation)}`,answer:W(c),answerLabel:W(c),options:ht({value:W(c),label:W(c)},qe(c).filter(d=>d!==W(c)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n2Reading[s%Math.max(r.n2Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n2-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||b(c.title)} ${b(d.prompt)}`,answer:d.answer,answerLabel:b((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:b(u.label||u)}))}}return e==="srs"?{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n2-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:ht({value:t.kanji,label:t.kanji},rt().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function A0(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(X().finalTest.answers[t]=n,T(),P())}function qm(e=!1){if(r.finalTestBusy)return;const t=X().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}r.finalTestBusy=!0;try{const n=Gm(),s=r.n2FinalTest||{},a=Ne(),o=hn(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const N=o.firstMissingId?`#${Lr("n2",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N2",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=N,T();return}let u=0;const m=[],h=[];n.forEach(N=>{const z=String(t.answers?.[N.id]||"").trim();if(z===N.answer){if(u+=1,N.kanji&&Cr(N.kanji,N.cardId),N.grammarId){const q=X();q.completedGrammar[N.grammarId]=q.completedGrammar[N.grammarId]||d}}else z||h.push(N),m.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:z}),N.kanji&&Na(N.kanji,N.cardId)});const f=n.length?Math.round(u/n.length*100):0,S=!!t.completedAt,C=!!t.passed,x=Math.max(0,m.length-h.length);let L=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=f,t.passed=f>=l,t.correctAnswers=u,t.incorrectAnswers=x,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(N=>N.id),t.completedAt=d,t.lastScore=f,t.bestScore=Math.max(Number(t.bestScore||0),f),t.passedAt=t.passed?C&&t.passedAt||d:t.passedAt||null,!S){const N=Number(s?.rewards?.completeXp||220),z=Number(s?.rewards?.completeMoon||40);L+=N,k+=z,H(N,z,"n2_final_complete")}if(t.passed&&!C){const N=Number(s?.rewards?.passXp||110),z=Number(s?.rewards?.passMoon||18);L+=N,k+=z,H(N,z,"n2_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=k,Va("N2",t),X(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N2",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:f,correct:u,incorrect:x,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n2-review",reviewAllAction:"n2-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},Z(),T()}catch(n){console.error(n),G(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,P()}}function I0(){X().finalTest=Dl().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,T(),P()}function Hm(e){return`n2-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function T0(e){r.activeTextbookLevel="N1",r.activeJlptLesson="N1";const t=po();t.opened||(t.opened=!0,Z({silent:!0}),T());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return G0();if(n==="review")return F0();if(n==="kanji")return B0();if(n==="grammar")return z0();if(n==="reading")return U0();if(n==="listening")return J0();const s=Fs(n);return s?(ne().currentLessonId=s.id,Rt("N1",s.id,"n1_lesson_page"),dn("N1",s,"n1_lesson_page"),P0(e,s)):R0(e)}function R0(e){const t=V0(),n=Le(),s=vt(),a=H0(),o=r.n1Meta||{},l=b(o.principle||{});return`
      <section class="page textbooks-page n5-course-page n1-course-page">
        <div class="section-head n5-course-head">
          <div>
            <p class="eyebrow">JLPT N1 · Flash Kanji</p>
            <h1>${i(n.title)}</h1>
            <p>${i(b(o.description||e.description||{}))}</p>
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
            <p>${i(l)}</p>
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
          ${Rn("eva","happy","lessonComplete","n5-hero-mascot")}
        </article>

        <div class="metric-grid">
          ${M(n.studiedKanji,`${t.studied}/${t.total}`,n.kanji,E(t.studied,t.total))}
          ${M(n.completedLessons,`${t.completedLessons}/${s.length}`,n.lessons,E(t.completedLessons,s.length))}
          ${M(n.completedGrammar,`${t.completedGrammar}/${r.n1Meta?.grammarCount||r.n1Grammar.length}`,n.grammar,E(t.completedGrammar,r.n1Meta?.grammarCount||r.n1Grammar.length))}
          ${M(n.completedReading,`${t.completedReading}/${r.n1Meta?.readingCount||r.n1Reading.length}`,n.readingN1,E(t.completedReading,r.n1Meta?.readingCount||r.n1Reading.length))}
          ${M(n.completedListening,`${t.completedListening}/${r.n1Meta?.listeningCount||r.n1Listening.length}`,n.listeningN1,E(t.completedListening,r.n1Meta?.listeningCount||r.n1Listening.length))}
          ${M(n.reviews,t.reviews,n.srs,E(t.reviews,Math.max(t.total,1)))}
        </div>

        <section class="n5-panel n1-bridge">
          <div>
            <h2>${i(n.n5Bridge)}</h2>
            <p>${i(n.n5BridgeText)}</p>
          </div>
          <div class="n1-bridge-grid">
            ${(o.n5Bridge||[]).map(c=>`<span class="pill">${i(c)}</span>`).join("")}
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
            ${s.map(c=>_0(c)).join("")}
          </div>
        </section>

        <section class="n5-panel n5-review-plan">
          <div>
            <h2>${i(n.reviewPlan)}</h2>
            <p>${i(b((r.n1Textbook?.textbook||{}).recommendedCycle||o.recommendedCycle||{}))}</p>
          </div>
          <div class="n5-plan-row">
            ${(o.reviewPlan||[]).map(c=>`<span class="pill">${i(n.day)} ${i(c.day)} · ${i(b(c.label||{}))}</span>`).join("")}
          </div>
        </section>

        ${wr("N1")}
      </section>
    `}function _0(e){const t=Qm(e.id),n=Le();let s=e.kanji.filter(a=>ne().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n1/${g(e.id)}" data-action="n1-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(b(e.title))}</h3>
        <p>${i(b(e.goal))}</p>
        <div class="n5-kanji-strip n1-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(X0(t))}</small>
      </a>
    `}function P0(e,t){const n=Le(),s=La(t),a=Aa(t),o=Qm(t.id),l=Es("N1",t,s);let c=o==="completed";const d=`n1:${t.id}`;ye.has(d)&&(c=!0);const u=c,m=a.filter(U=>Bc(U.id)?.correct).length,h=a.length>0&&m===a.length,f=s.filter(U=>ne().studiedKanji[U.kanji]).length,S=t.kanji.length,C=f>=S,x=!c&&h&&C,L=t.kanji.filter(U=>ne().difficultKanji[U]).join(" · "),k=vt().find(U=>U.order===t.order+1),N=Wm(t),z=N?!!ne().completedReading[N.id]:!1,q=Gt("N1",t.id,"player"),Ys=Gt("N1",t.id,"test");return`
      <section class="page textbooks-page n5-course-page n1-course-page n5-lesson-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N1 · ${i(n.lesson)} ${t.order}/53</p>
            <h1>${i(b(t.title))}</h1>
            <p>${i(b(t.goal))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n1-overview">${i(n.backToN1)}</button>
            <button class="btn" type="button" data-action="n1-review" data-mode="difficult">${i(n.difficult)}</button>
            <button class="btn ghost" type="button" data-action="n1-final">${i(n.finalTest)}</button>
          </div>
        </div>

        <article class="n5-lesson-summary">
          <div>
            <span class="pill">${i(b(t.theme))}</span>
            <h2>${i(n.lessonChain)}</h2>
            <p>${i(n.lessonChainText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.duration)}: ${i(t.durationMinutes||30)} ${i(n.minutes)}</span>
              ${t.grammarFocus.map(U=>`<span class="pill">${i(U)}</span>`).join("")}
            </div>
          </div>
          <div class="mini-stat-row">
            ${M(n.studiedKanji,`${Math.min(l.answeredCount,t.kanji.length)}/${t.kanji.length}`,n.kanji,E(l.answeredCount,t.kanji.length))}
            ${M(n.exercises,`${m}/${a.length}`,n.correct,E(m,a.length))}
          </div>
        </article>

        ${ma("N1",t,s,n,{playerId:q,answerAction:"jlpt-lesson-answer",examples:U=>At(U),sentence:U=>M0(U,t)})}

        ${K0(t)}

        ${E0(t)}

        <section class="n5-panel">
          <div>
            <h2>${i(n.sentences)}</h2>
            <p>${i(n.sentencesText)}</p>
          </div>
          <div class="n5-sentence-list">
            ${t.sentences.map(U=>`
              <article>
                <strong>${i(U.jp)}</strong>
                <span>${i(ee(U.reading||""))}</span>
                <small>${i(b({ru:U.ru,en:U.en}))}</small>
              </article>
            `).join("")}
          </div>
        </section>

        <section class="n5-panel" id="${g(Ys)}">
          <div>
            <h2>${i(n.exercises)}</h2>
            <p>${i(n.exercisesText)}</p>
          </div>
          <div class="n5-exercise-list">
            ${a.map(U=>D0(U)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(U=>ne().studiedKanji[U.kanji]).length}/${t.kanji.length}</span>
              <span class="pill">${i(n.correct)}: ${m}/${a.length}</span>
              ${N?`<span class="pill">${i(n.miniReadingTitle)}: ${i(z?n.completed:n.none)}</span>`:""}
              <span class="pill">${i(n.difficult)}: ${i(L||n.none)}</span>
            </div>
            ${!c&&!x?`<p class="n5-feedback">${i(p()==="ru"?"Завершите все кандзи и упражнения урока.":"Complete all kanji and exercises in the lesson.")}</p>`:""}
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="n1-complete-lesson" data-id="${g(t.id)}" ${u||!x?"disabled":""}>${i(u?p()==="ru"?"Урок завершён":"Lesson completed":n.completeLesson)}</button>
            <button class="btn" type="button" data-action="n1-review" data-mode="difficult">${i(n.repeatMistakes)}</button>
            ${k?`<a class="btn ghost" href="#jlpt/n1/${g(k.id)}" data-action="n1-open-lesson" data-id="${g(k.id)}">${i(n.nextLesson)}</a>`:`<button class="btn ghost" type="button" data-action="n1-final">${i(n.finalTest)}</button>`}
          </div>
        </section>
      </section>
    `}function Wm(e){return e?.miniReadingId&&r.n1Reading.find(t=>t.id===e.miniReadingId)||null}function E0(e){const t=Le(),n=Wm(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Dc(n,"reading")}
      </section>
    `:""}function M0(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(ee(n.reading||""))}</span>
        <small>${i(b({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Le().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function K0(e){const t=Le(),n=(e.grammarFocus||[]).map(s=>Oc(s)).filter(Boolean).slice(0,3);return n.length?`
      <section class="n5-panel n1-grammar-panel">
        <div>
          <h2>${i(t.miniGrammar)}</h2>
          <p>${i(t.miniGrammarText)}</p>
        </div>
        <div class="n1-section-grid">
          ${n.map(s=>`
            <article class="n1-grammar-card">
              <span class="pill">${i(s.pattern)}</span>
              <h3>${i(b(s.title))}</h3>
              <p>${i(b(s.explanation))}</p>
              ${s.formula?`<code>${i(s.formula)}</code>`:""}
              ${s.examples?.[0]?`<div class="n5-card-sentence"><strong>${i(s.examples[0].jp)}</strong><span>${i(s.examples[0].reading||"")}</span><small>${i(b({ru:s.examples[0].ru,en:s.examples[0].en}))}</small></div>`:""}
              <button class="btn ghost" type="button" data-action="n1-grammar-complete" data-id="${g(s.id)}" data-value="${g(W(s))}">${i(ne().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function D0(e){const t=Le(),n=Bc(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&Yn("N1",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(b(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(rf(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(b(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n1-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n1-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Vm(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(b(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
            ${va("N1",e).map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n1-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Vm(e,n)}
      </article>
    `}function Vm(e,t){if(!t)return"";const n=Le(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function F0(e){const t=Le(),n=ne().activeReviewMode||"due",s=pC(n);return`
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
            <button class="btn ${n===a.id?"primary":"ghost"}" type="button" data-action="n1-review" data-mode="${g(a.id)}">${i(b(a.title))}</button>
          `).join("")}
        </div>
        <div class="n5-kanji-grid">
          ${s.map((a,o)=>O0(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function O0(e,t){const n=Le(),s=J(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(en(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(At(e)[0]?.word||e.hiragana||"")} · ${i(At(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n1-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n1-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function B0(e){const t=Le(),n=Lt(),s=n.slice(0,160);return`
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
              <div class="n5-kanji-topline"><span class="pill">${o+1}/${n.length}</span><span class="pill">${i(J(a.id).state)}</span></div>
              <div class="n5-big-kanji">${i(a.kanji)}</div>
              <h3>${i(K(a))}</h3>
              <p>${i(At(a)[0]?.word||"")} · ${i(At(a)[0]?.reading||"")}</p>
              <div class="textbook-actions">
                <button class="btn primary" type="button" data-action="n1-srs" data-id="${g(a.id)}" data-rating="good">${i(t.addToSrs)}</button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function z0(e){const t=Le();return`
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
          ${M(t.completedGrammar,`${Object.keys(ne().completedGrammar||{}).length}/${r.n1Grammar.length}`,t.grammar,E(Object.keys(ne().completedGrammar||{}).length,r.n1Grammar.length))}
          ${M(t.questions,r.n1Grammar.length,t.grammar,100)}
        </div>
        <div class="n1-section-grid">
          ${r.n1Grammar.map(n=>{const s=ne().grammarResults?.[n.id];return`
              <article class="n1-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(b(n.title))}</h3>
                <p>${i(b(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(ee(a.reading||""))}</span><small>${i(b({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(b(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(qe(n).length?qe(n):[W(n)]).map(a=>`
                    <button class="btn ${s?.selected===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n1-grammar-complete" data-id="${g(n.id)}" data-value="${g(a)}">${i(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${W(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function U0(e){const t=Le(),n=qa("N1","n1_reading_page"),s=_r("N1");return(n||s)&&T(),`
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
          ${r.n1Reading.map(a=>Dc(a,"reading")).join("")}
        </div>
      </section>
    `}function J0(e){const t=Le();return`
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
          ${r.n1Listening.map(n=>Dc(n,"listening")).join("")}
        </div>
      </section>
    `}function Dc(e,t){const n=Le(),s=t==="reading"?ne().completedReading[e.id]:ne().completedListening[e.id],a=t==="reading"?ne().readingAnswers:ne().listeningAnswers,o=t==="reading"?"n1-reading-complete":"n1-listening-complete";return`
      <article class="n1-reading-card ${s?"is-correct":""}">
        <span class="pill">${i(b(e.title))}</span>
        ${Array.isArray(e.dialogue)?`<div class="n5-sentence-list">${e.dialogue.map(l=>`<article><strong>${i(l)}</strong></article>`).join("")}</div>`:`<p class="n1-jp-text">${i(e.jp||"")}</p>`}
        ${e.ru?`<p>${i(e.ru)}</p>`:""}
        ${(e.questions||[]).map((l,c)=>{const d=`${e.id}:${c}`,u=a?.[d],m=Array.isArray(l.options)?l.options:[];return`
            <div class="n1-question-block">
              <h3>${i(b(l.prompt||e.question||{}))}</h3>
              <div class="n5-option-grid">
                ${m.map(h=>`<button class="btn ${u?.selected===h.value?u.correct?"success":"warning":"ghost"}" type="button" data-action="${g(o)}" data-id="${g(e.id)}" data-question="${g(c)}" data-value="${g(h.value)}">${i(b(h.label||h))}</button>`).join("")}
              </div>
              ${u?`<p class="n5-feedback">${i(u.correct?n.correctAnswer:n.wrongAnswer)}</p>`:""}
            </div>
          `}).join("")}
      </article>
    `}function G0(e){const t=Le(),n=r.n1FinalTest||{},s=nf(),a=ne().finalTest,o=hn(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),T()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
      <section class="page textbooks-page n5-course-page n1-course-page n5-final-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">JLPT N1 · Final</p>
            <h1>${i(b(n.title||{}))}</h1>
            <p>${i(b(n.description||{}))}</p>
          </div>
          <div class="actions">
            <button class="btn ghost" type="button" data-action="n1-overview">${i(t.backToN1)}</button>
            <button class="btn" type="button" data-action="n1-final-reset">${i(t.resetTest)}</button>
          </div>
        </div>

        <div class="metric-grid">
          ${M(t.questions,`${l}/${s.length}`,t.finalTest,E(l,s.length))}
          ${M(t.score,d||u>0?`${u}%`:"—",`${n.passingPercent||80}%`,d||u>0?u:0)}
          ${M(t.mistakes,d?(a.mistakes||[]).length:0,t.difficult,d?E((a.mistakes||[]).length,s.length):0)}
        </div>

        ${d?`
          <section class="n5-result-panel ${a.passed?"is-complete":""}">
            <div>
              <h2>${i(a.passed?t.finalPassed:t.finalNeedsReview)}</h2>
              <p>${i(a.passed?t.finalPassedText:t.finalNeedsReviewText)}</p>
            </div>
            <button class="btn primary" type="button" data-action="n1-review" data-mode="difficult">${i(t.repeatMistakes)}</button>
            ${Zt("N1","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>q0(m,h)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n1-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Zt("N1","btn ghost")}
          <button class="btn ghost" type="button" data-action="n1-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function q0(e,t){const n=ne().finalTest.answers?.[e.id],s=!!ne().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n1-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Le().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Le(){return p()==="ru"?{title:"JLPT N1",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N1: редкие знаки, формальная лексика, плотные тексты и выводы",continue:"Продолжить",review:"Повторять N1",openKanji:"Открыть список кандзи",grammarN1:"Грамматика N1",readingN1:"Чтение N1",listeningN1:"Аудирование N1",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"SRS",lessons:"уроков",lessonsTitle:"53 урока: 52×20 кандзи и финальный урок на 7 знаков",lessonsDescription:"Каждый урок связывает кандзи, реальные слова, грамматику, мини-текст, позицию автора, письмо и повторение.",reviewPlan:"План повторения на 120 дней",day:"день",lesson:"Урок",backToN1:"К N1",n5Bridge:"База перед N1",n5BridgeText:"N1 стоит на N2: формальные связки, длинные фразы, авторская позиция, уступка, причина и вывод. Если проседает N2, лучше быстро освежить его перед рывком.",reviewN5Base:"Повторить N2 перед N1",lessonChain:"Кандзи -> слово -> чтение -> грамматика -> абзац -> позиция автора -> вывод -> SRS",lessonChainText:"N1 не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1–3 конструкции, которые связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми тему, причину, уступку, противопоставление и вывод внутри короткого N1-абзаца.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N1-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N1.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"1047 кандзи N1",kanjiListText:"Список из учебника: карточки можно быстро добавить в повторение или открыть для письма. На странице показывается облегчённая витрина, чтобы не перегружать DOM.",kanjiListLimit:"Показано {shown} из {total}; полный набор доступен по урокам, повторению и поиску приложения.",grammarTitle:"142 грамматические конструкции N1",grammarText:"Карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе.",readingTitle:"Тексты для чтения N1",readingText:"Короткие тексты и mini-readings связывают кандзи, слова, грамматику, авторскую позицию и выводы.",listeningTitle:"Скрипты для аудирования N1",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N1",finalPassed:"N1 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N1",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N1 textbook: rare kanji, formal vocabulary, dense texts, and conclusions",continue:"Continue",review:"Review N1",openKanji:"Open kanji list",grammarN1:"N1 grammar",readingN1:"N1 reading",listeningN1:"N1 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"53 lessons: 52×20 kanji and a final 7-kanji lesson",lessonsDescription:"Each lesson connects kanji, real words, grammar, mini reading, author stance, writing, and SRS.",reviewPlan:"120-day review plan",day:"day",lesson:"Lesson",backToN1:"To N1",n5Bridge:"Base before N1",n5BridgeText:"N1 stands on N2: formal links, long phrases, author stance, concession, cause, and conclusion.",reviewN5Base:"Review N2 before N1",lessonChain:"Kanji -> word -> reading -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N1 is not a bare list: every sign gets a word, formal link, mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N1 review and shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1–3 constructions that push kanji into viewpoint, cause, or conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N1 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N1 review",reviewDescription:"Review due cards, difficult kanji, or the full N1 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"1047 N1 kanji",kanjiListText:"Textbook list: quickly add cards to review or open writing practice. This page renders a light showcase to avoid overloading the DOM.",kanjiListLimit:"Showing {shown} of {total}; the full set is available through lessons, review, and app search.",grammarTitle:"142 N1 grammar constructions",grammarText:"Cards with function, formula, example, and a comprehension check for written arguments.",readingTitle:"N1 reading texts",readingText:"Short texts and mini-readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N1 listening scripts",listeningText:"Read scripts aloud, speak them with TTS, and use them for shadowing.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N1",finalPassed:"N1 passed",finalPassedText:"Excellent. You can send mistakes back to review separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked as difficult and raised in review."}}function po(){var s;(s=r.progress).n1Course||(s.n1Course=Fl());const e=vt();!Fs(r.progress.n1Course.currentLessonId)&&e[0]&&(r.progress.n1Course.currentLessonId=e[0].id);const n=e.find(a=>!r.progress.n1Course.completedLessons[a.id]);return!r.progress.n1Course.currentLessonId&&n&&(r.progress.n1Course.currentLessonId=n.id),r.progress.n1Course}function ne(){return r.progress.n1Course||po()}function vt(){return r.n1Textbook?.items||[]}function Fs(e){const t=String(e||"");return t&&vt().find(n=>n.id===t||n.id===`n1-${t}`||n.id.endsWith(`-${t}`))||null}function H0(){return Fs(ne().currentLessonId)||vt().find(e=>!ne().completedLessons[e.id])||vt()[0]||null}function La(e){const t=Fc();return(e?.kanji||[]).map(n=>Xm(n,t)).filter(Boolean)}function Lt(){return Ha("N1",W0)}function W0(){const e=Fc(),t=new Set;return(r.n1KanjiCatalog||[]).map(n=>Xm(n.kanji,e)).filter(Boolean).filter(n=>t.has(n.kanji)?!1:(t.add(n.kanji),!0))}function Fc(){if(js?.catalog===r.n1KanjiCatalog&&js?.cards===r.cards)return js;const e=new Map;(r.n1KanjiCatalog||[]).forEach(s=>{s?.kanji&&e.set(s.kanji,s)});const t=new Map,n=new Map;return r.cards.forEach(s=>{if(s?.id&&n.set(String(s.id),s),!s?.kanji)return;const a=String(s.jlpt||"").toUpperCase();(a==="N1"||e.has(s.kanji))&&(!t.has(s.kanji)||a==="N1")&&t.set(s.kanji,s)}),js={catalog:r.n1KanjiCatalog,cards:r.cards,detailsByKanji:e,cardsByKanji:t,cardsById:n},js}function Xm(e,t=Fc()){const n=String(e||""),s=t.detailsByKanji.get(n)||null,a=t.cardsByKanji.get(n)||(s?t.cardsById.get(String(s.courseCardId||s.id)):null)||null;return a&&s?Bi(a,s):a||(s?Bi({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:s.lessonId,jlpt:"N1",examples:[]},s):null)}function Oc(e){const t=String(e||"");return r.n1Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function At(e){return ha(e,e.examples)}function V0(){const e=Lt(),t=ne(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{const a=r.progress.cards?.[String(s.id)];a&&ot(a).state!=="New"&&n.add(s.kanji)}),{total:r.n1Meta?.kanjiCount||e.length||1047,studied:n.size,completedLessons:Ks("N1"),completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((s,a)=>s+Number(r.progress.cards?.[String(a.id)]?.reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Qm(e){return hr("N1",e)}function X0(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Aa(e){const t=La(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n1Exercises?.types||[]).map(k=>[k.type,k.title])),a=Object.fromEntries((r.n1Exercises?.types||[]).map(k=>[k.type,k])),o=k=>a[k]||{rewardXp:r.n1Meta?.rewards?.exerciseXp||11,rewardMoon:r.n1Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:wt({value:c.id,label:K(c)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:wt({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=At(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:wt({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(k=>At(k).map(N=>({value:N.reading,label:N.reading}))).filter(k=>k.value&&k.value!==m.reading),3),...o("reading")});const h=n[0];h&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:b({ru:h.ru,en:h.en}),answerLabel:b({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:wt({value:b({ru:h.ru,en:h.en}),label:b({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:b({ru:k.ru,en:k.en}),label:b({ru:k.ru,en:k.en})})),1),...o("sentence")});const f=t[3]||t[0],S=At(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:Za(S),answer:S.word||f.kanji,answerLabel:S.word||f.kanji,kanji:f.kanji,cardId:f.id,options:wt({value:S.word||f.kanji,label:S.word||f.kanji},t.flatMap(k=>At(k).map(N=>({value:N.word,label:N.word}))).filter(k=>k.value&&k.value!==S.word),2),...o("missing-word")});const C=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(C)}`:`Type the kanji for: ${K(C)}`,answer:C.kanji,answerLabel:C.kanji,kanji:C.kanji,cardId:C.id,options:[],...o("active-recall")});const x=Oc(e.grammarFocus?.[0]);x&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:b(x.question||x.explanation),answer:W(x),answerLabel:W(x),kanji:t[0].kanji,cardId:t[0].id,grammarId:x.id,options:wt({value:W(x),label:W(x)},qe(x).filter(k=>k!==W(x)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:b({ru:L.ru,en:L.en}),answerLabel:b({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:wt({value:b({ru:L.ru,en:L.en}),label:b({ru:L.ru,en:L.en})},n.filter(k=>k.jp!==L.jp).map(k=>({value:b({ru:k.ru,en:k.en}),label:b({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),l.slice(0,r.n1Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N1",lessonId:e.id}))}function wt(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),Lt().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function Ym(e){for(const t of vt()){const n=Aa(t).find(s=>s.id===e);if(n)return n}return null}function Bc(e){return wa("N1",ne(),e)}function Q0(e){const t=Ym(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Zm(t,s,a)}function Y0(e){const t=Ym(e);if(!t)return;const n=document.getElementById(rf(t.id)),s=n?String(n.value||"").trim():"";Zm(t,s,s===t.answer)}function Zm(e,t,n){const s=ne();ba("N1",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n1Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||r.n1Meta?.rewards?.exerciseMoon||1),rewardKey:`n1_exercise:${e.id}`,quietReward:!0,markStudied:()=>Ia(e.kanji,e.cardId),markDifficult:()=>go(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function ef(e,t,n="review",s={}){const a=oe(e)||Lt().find(S=>String(S.id)===String(e));if(!a)return;const o=s.scrollPolicy||(n==="review"?re.TOP:re.PRESERVE),l=s.viewportSnapshot||Me(),c=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,m=d?"hard":t,h=ie(J(a.id)),f=ke(h,u,m);r.progress.cards[a.id]=f,Xt(h,f,m),be(),Ia(a.kanji,a.id),ne().srsKanji[a.kanji]=new Date().toISOString(),d?(go(a.kanji,a.id,!1),r.progress.totalCorrect+=1,H(r.n1Meta?.rewards?.hardXp||2,1,`n1_srs_lesson_hard:${a.id}`,{silent:c})):ze(t)?(go(a.kanji,a.id),r.progress.totalWrong+=1,H(r.n1Meta?.rewards?.hardXp||2,0,`n1_srs_hard:${a.id}`,{silent:c})):(r.progress.totalCorrect+=1,H(t==="easy"?r.n1Meta?.rewards?.knowXp||9:r.n1Meta?.rewards?.addToSrsXp||7,1,`n1_srs:${a.id}`,{silent:c})),je({scrollPolicy:o,viewportSnapshot:l}),T(),Dt("N1 SRS post-render effects",()=>{D(ze(t)?"answer_wrong":"answer_correct"),Z({silent:c})},{scrollPolicy:o,viewportSnapshot:l})}function Z0(e){const t=oe(e)||Lt().find(s=>String(s.id)===String(e));if(!t)return;const n=ne();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Ia(t.kanji,t.id),H(9,1,`n1_writing:${t.id}`)),Z(),T(),P()}function eC(e){const t=Fs(e);if(!t)return;const n=ne(),s=`n1:${t.id}`;if(ye.has(s)||n.completedLessons[t.id]){P();return}const a=La(t);if(a.filter(f=>n.studiedKanji[f.kanji]).length<t.kanji.length){const f=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof G=="function"&&G(f);return}const l=Aa(t);if(!(l.length>0&&l.every(f=>Bc(f.id)?.correct))){const f=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof G=="function"&&G(f);return}ye.add(s),La(t).forEach(f=>{Ia(f.kanji,f.id),n.srsKanji[f.kanji]=n.srsKanji[f.kanji]||new Date().toISOString();const S=J(f.id);S.state==="New"&&(r.progress.cards[f.id]=ke(ie(S),"good"))}),(t.grammarFocus||[]).map(f=>Oc(f)).filter(Boolean).forEach(f=>{n.completedGrammar[f.id]=n.completedGrammar[f.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=vt().find(f=>f.order===t.order+1)?.id||t.id;const d=Xn(),u=d.sessions[Ze("N1",t.id)];if(u){const f=new Date().toISOString();u.phase="done",u.completedAt=f,u.updatedAt=f,u.currentIndex=a.length,d.activeSessionKey=Ze("N1",t.id),d.lastUpdatedAt=f}ne(),vr("N1");const m=r.n1Meta?.rewards?.lessonCompleteXp||85,h=r.n1Meta?.rewards?.lessonCompleteMoon||10;H(m,h,`n1_lesson:${t.id}`),Kr("N1",t.id),bt({title:`${Le().lessonComplete}: ${b(t.title)}`,message:Le().lessonCompleteText,xp:m,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Z(),T(),P()}function Ia(e,t=null){if(!e)return;const n=ne();cr(n,e)}function go(e,t=null,n=!0){if(e&&(ne().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=J(t);s.state!=="New"&&(r.progress.cards[t]=ke(ie(s),"again"))}}function tC(e,t=""){const n=r.n1Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=W(n),a=t||s,o=a===s,l=ne();l.grammarResults[n.id]={selected:a,correct:o,checkedAt:new Date().toISOString()},o&&!l.completedGrammar[n.id]?(l.completedGrammar[n.id]=new Date().toISOString(),H(r.n1Meta?.rewards?.grammarXp||12,r.n1Meta?.rewards?.grammarMoon||1,`n1_grammar:${n.id}`),r.progress.totalCorrect+=1,D("answer_correct")):o||(r.progress.totalWrong+=1,D("answer_wrong")),be(),Z(),T(),P()}function nC(e,t="0",n=""){tf("reading",e,t,n)}function sC(e,t="0",n=""){tf("listening",e,t,n)}function tf(e,t,n="0",s=""){const o=(e==="reading"?r.n1Reading:r.n1Listening).find(x=>x.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=ne(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,f=e==="reading"?m.completedReading:m.completedListening,S=!!f[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const C=(o.questions||[]).every((x,L)=>h[`${o.id}:${L}`]?.correct);if(d?(r.progress.totalCorrect+=1,D("answer_correct")):(r.progress.totalWrong+=1,D("answer_wrong")),C&&!S){f[o.id]=new Date().toISOString();const x=e==="reading"?r.n1Meta?.rewards?.readingXp||55:r.n1Meta?.rewards?.listeningXp||50,L=e==="reading"?r.n1Meta?.rewards?.readingMoon||4:r.n1Meta?.rewards?.listeningMoon||4;H(x,L,`n1_${e}:${o.id}`)}be(),Z(),T(),P()}function rC(e){const t=Fs(e);t&&(wn("textbook-lesson",{level:"N1",lessonId:t.id}),ne().currentLessonId=t.id,Rt("N1",t.id,"n1_lesson_open"),dn("N1",t,"n1_lesson_open"),as(t.id))}function aC(){as("")}function iC(e=null){e&&(ne().activeReviewMode=e),as("review")}function oC(){as("kanji")}function lC(){as("grammar")}function cC(){as("reading")}function dC(){as("listening")}function uC(){as("final-test")}function as(e){r.route="textbooks",r.activeTextbookLevel="N1",r.activeTextbookSubroute=e||null,ne().opened=!0;const t=e?`#jlpt/n1/${encodeURIComponent(e)}`:"#jlpt/n1";jt(t),Z(),T(),ue(),Ot()}function pC(e="due"){const t=Date.now(),n=ne(),s=Lt();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=J(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function nf(){const e=Lt();if(!e.length)return[];const t=r.n1FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n1FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=vt().find(d=>d.kanji.includes(o.kanji))||vt()[0];s.push(gC(l,o,c,a))}return s.filter(Boolean)}function gC(e,t,n,s){const o=At(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:wt({value:t.id,label:K(t)},Lt().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:wt({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Lt().flatMap(c=>At(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=b({ru:l.ru,en:l.en});return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:wt({value:c,label:c},vt().flatMap(d=>d.sentences||[]).map(d=>({value:b({ru:d.ru,en:d.en}),label:b({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:gs(o),answer:c,answerLabel:c,options:wt({value:c,label:c},Lt().flatMap(d=>At(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n1Grammar[s%Math.max(r.n1Grammar.length,1)];if(c)return{id:`n1-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${b(c.question||c.explanation)}`,answer:W(c),answerLabel:W(c),options:wt({value:W(c),label:W(c)},qe(c).filter(d=>d!==W(c)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n1Reading[s%Math.max(r.n1Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n1-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||b(c.title)} ${b(d.prompt)}`,answer:d.answer,answerLabel:b((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:b(u.label||u)}))}}return e==="srs"?{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n1-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:wt({value:t.kanji,label:t.kanji},Lt().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function mC(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(ne().finalTest.answers[t]=n,T(),P())}function sf(e=!1){if(r.finalTestBusy)return;const t=ne().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}r.finalTestBusy=!0;try{const n=nf(),s=r.n1FinalTest||{},a=Le(),o=hn(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const N=o.firstMissingId?`#${Lr("n1",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N1",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=N,T();return}let u=0;const m=[],h=[];n.forEach(N=>{const z=String(t.answers?.[N.id]||"").trim();if(z===N.answer){if(u+=1,N.kanji&&Ia(N.kanji,N.cardId),N.grammarId){const q=ne();q.completedGrammar[N.grammarId]=q.completedGrammar[N.grammarId]||d}}else z||h.push(N),m.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:z}),N.kanji&&go(N.kanji,N.cardId)});const f=n.length?Math.round(u/n.length*100):0,S=!!t.completedAt,C=!!t.passed,x=Math.max(0,m.length-h.length);let L=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=f,t.passed=f>=l,t.correctAnswers=u,t.incorrectAnswers=x,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(N=>N.id),t.completedAt=d,t.lastScore=f,t.bestScore=Math.max(Number(t.bestScore||0),f),t.passedAt=t.passed?C&&t.passedAt||d:t.passedAt||null,!S){const N=Number(s?.rewards?.completeXp||220),z=Number(s?.rewards?.completeMoon||40);L+=N,k+=z,H(N,z,"n1_final_complete")}if(t.passed&&!C){const N=Number(s?.rewards?.passXp||110),z=Number(s?.rewards?.passMoon||18);L+=N,k+=z,H(N,z,"n1_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=k,Va("N1",t),ne(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N1",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:f,correct:u,incorrect:x,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n1-review",reviewAllAction:"n1-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},Z(),T()}catch(n){console.error(n),G(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,P()}}function fC(){ne().finalTest=Fl().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,T(),P()}function rf(e){return`n1-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function af(e){const t=Er(e.jlpt);if(!t)return"";const n={...Ad(),...Ld()};return`
      <div class="jlpt-practice-grid">
        ${hC(t,n)}
        ${vC(t,n)}
        ${wC(t,n)}
        ${kC(t,n)}
      </div>
    `}function hC(e,t){return e.apps.length?`
      <article class="jlpt-practice-card">
        <h3>${i(t.apps)}</h3>
        <div class="jlpt-app-grid">
          ${e.apps.map(n=>`
            <div class="jlpt-app-chip">
              <strong>${i(n.name)}</strong>
              <span>${i(b(n.context))}</span>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function vC(e,t){const n=Array.isArray(e.kana?.hiragana)?e.kana.hiragana:[],s=Array.isArray(e.kana?.katakana)?e.kana.katakana:[];return!n.length&&!s.length?"":`
      <article class="jlpt-practice-card">
        <h3>${i(t.kana)}</h3>
        <div class="kana-columns">
          ${of(t.hiragana,n)}
          ${of(t.katakana,s)}
        </div>
      </article>
    `}function of(e,t){return t.length?`
      <div class="kana-column">
        <strong>${i(e)}</strong>
        ${t.map(n=>`
          <span class="kana-chip">
            <b>${i(n.kana)}</b>
            <small>${i(n.romaji)} · ${i(b(n.note))}</small>
          </span>
        `).join("")}
      </div>
    `:""}function wC(e,t){return e.kanjiFocus.length?`
      <article class="jlpt-practice-card jlpt-kanji-focus">
        <h3>${i(t.kanjiFocus)}</h3>
        <div class="jlpt-focus-grid">
          ${e.kanjiFocus.map(n=>`
            <div class="jlpt-focus-item">
              <span class="kanji-mini">${i(n.kanji)}</span>
              <div>
                <strong>${bC(n)}</strong>
                <small>${i(n.romaji)} · ${i(b(n.meaning))}</small>
                <p>${i(b(n.appUse))}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function bC(e){const t=Array.isArray(e.furigana)?e.furigana:[];return t.length?t.map(n=>n.rt?`<ruby>${i(n.text)}<rt>${i(n.rt)}</rt></ruby>`:i(n.text)).join(""):i(e.word||e.kanji||"")}function kC(e,t){const n=Mr(e);if(!n)return"";const s=Ws(),a=s.selected[n.id]||[],o=!!s.checked[n.id],l=s.results[n.id]||null,c=a.map(m=>n.tiles[m]).filter(Boolean),d=o&&l?.correct,u=o&&l?l.wrongIndexes||[]:[];return`
      <article class="jlpt-practice-card jlpt-drill-card">
        <div class="section-head compact-head">
          <div>
            <h3>${i(t.sentenceDrill)}</h3>
            <p>${i(b(n.translation))}</p>
          </div>
          <span class="pill">${i(e.jlpt)}</span>
        </div>
        <div class="jlpt-sentence-line">${yC(n,c,u)}</div>
        <p class="label">${i(ee(n.reading))}</p>
        <div class="sentence-tiles jlpt-tiles">
          ${n.tiles.map((m,h)=>{const f=a.includes(h);return`
              <button class="sentence-tile ${f?"is-used":""}" type="button" data-action="insert-jlpt-tile" data-index="${h}" ${f||d?"disabled":""}>
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
    `}function yC(e,t,n){let s=0;return String(e.sentence||"").split("___").map((a,o,l)=>{if(o===l.length-1)return i(a);const d=(e.blanks[o]||{answer:[]}).answer.length||1,u=t.slice(s,s+d),m=u.some((f,S)=>n.includes(s+S));s+=d;const h=u.length?u.map(f=>`<span>${i(f.kanji)}</span>`).join(""):`<span>${i("□".repeat(d))}</span>`;return`${i(a)}<span class="sentence-blank ${m?"is-wrong":""}">${h}</span>`}).join("")}function $C(){if(!$i)return bl(),Kd();const e=Qc(GN()),t=ox(e),n=e.length,s=t?.kind==="card"?t.card:t?.kind==="exercise"?oe(t.card?.id||t.cardId||t.progress?.cardId||""):null;ax(t);const a=t?t.kind==="card"?s?bf(s):Js():t.kind==="kana"?nx(t,n):mx(t):Js();return`
      <section class="page" data-review-session-size="${r.reviewSession?.initialSize||0}" data-review-total-due="${Qe()}">
        <div class="section-head">
          <div>
            <h1>${i(_("review"))}</h1>
            <p>${n} ${i(p()==="ru"?"в очереди":"in queue")}</p>
            <div class="mini-stat-row">
              ${M(p()==="ru"?"Сейчас":"Due now",Qe(),"due")}
              ${M(p()==="ru"?"В сессии":"Remaining",n,"session")}
              ${M(p()==="ru"?"Позже":"Learning later",sh(),"learning")}
              ${M(p()==="ru"?"Всего SRS":"Total SRS",ah(),"cards")}
            </div>
          </div>
          <div class="actions">
            ${ps("srs")}
          </div>
        </div>
        <div class="study-layout" data-section="review-card">
          ${a}
          ${Hc(s,n)}
        </div>
        ${jC()}
      </section>
    `}function jC(){try{return lf()}catch(e){return console.warn("[Flash Kanji] sentence practice skipped after stale saved progress.",e),r.progress&&(r.progress.sentencePractice=Cp(or().sentencePractice,{})),""}}function lf(){const e=fn(),t=fo(e),n={...xr(),...zc()},s=SC(e,n);if(!e.length)return`
      <article class="sentence-practice empty-state" data-section="sentence-practice">
          <span class="kanji-char">文</span>
          <h2>${i(n.title)}</h2>
          <p>${i(n.noLearned)}</p>
          ${s}
          <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(_("learn"))}</button>
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
      `;const a=Jc(t,e);if(!a)return"";const{exercise:o,tiles:l,selectedTiles:c,answerFlat:d,wrongIndexes:u,complete:m}=a,h=new Set(r.progress.sentencePractice.selected),f=r.progress.sentencePractice.result||{};return`
      <article class="sentence-practice${r.progress.sentencePractice.checked?m?" is-success":" is-error":""}" data-section="sentence-practice" aria-live="polite">
        <div class="section-head sentence-head">
          <div>
            <h2>${i(n.title)}</h2>
            <p>${i(n.subtitle.replace("{learned}",e.length).replace("{total}",r.cards.length))}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(o.jlpt)}</span>
            ${o.source?`<span class="pill">${i(xC(o.source,n))}</span>`:""}
            <span class="pill">${i(n.progress.replace("{done}",Object.keys(r.progress.sentencePractice.completed||{}).length).replace("{total}",t.length))}</span>
          </div>
        </div>
        ${s}
        <div class="sentence-card">
          <div class="sentence-line">${df(o,c,u)}</div>
          <p class="sentence-reading">${i(o.reading||"")}</p>
          <p class="sentence-translation">${i(NC(o))}</p>
        </div>
        <div class="sentence-tiles">
          ${l.map((C,x)=>{const L=h.has(x),k=u.includes(r.progress.sentencePractice.selected.indexOf(x));return`
              <button class="sentence-tile ${L?"is-used":""} ${k?"is-wrong":""}" type="button" data-action="insert-sentence-tile" data-index="${x}" ${L||m?"disabled":""}>
                <span>${i(C.reading)}</span>
                <strong>${i(C.kanji)}</strong>
              </button>
            `}).join("")}
        </div>
        <div class="sentence-feedback sentence-feedback-stable">
          <span class="sentence-feedback-text">${i(f.message||n.tip.replace("{count}",d.length))}</span>
          ${[n.tip.replace("{count}",d.length),n.fillAll,n.correct,n.wrong,n.inserted,n.removed].map(C=>`<span class="sentence-feedback-size" aria-hidden="true">${i(C)}</span>`).join("")}
        </div>
        <div class="actions sentence-actions">
          <button class="btn primary" type="button" data-action="check-sentence" ${r.progress.sentencePractice.checked?"disabled":""}>${i(n.check)}</button>
          <button class="btn" type="button" data-action="undo-sentence-tile" ${!r.progress.sentencePractice.selected.length||m?"disabled":""}>${i(n.undo)}</button>
          <button class="btn" type="button" data-action="clear-sentence" ${!r.progress.sentencePractice.selected.length||m?"disabled":""}>${i(n.clear)}</button>
          <button class="btn ghost" type="button" data-action="next-sentence">${i(n.next)}</button>
        </div>
      </article>
    `}function SC(e,t){const n=De(),s=Ji(n.customDraft||{}),a=Array.isArray(n.customSentences)?n.customSentences:[],o=a.length,l=!!n.customEditingId,c=n.customStatus?` is-${n.customStatus}`:"";return`
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
        ${CC(a,e,t)}
      </details>
    `}function CC(e,t,n){return e.length?`
      <div class="sentence-custom-list">
        ${e.map(s=>{const a=Uc(s,t),o=!!(a&&Bs(a,t).length>=Math.max(4,Vt(a).length)),l=p()==="en"?s.en||s.ru:s.ru||s.en;return`
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
    `:`<p class="sentence-custom-empty">${i(n.customEmpty)}</p>`}function xC(e,t){return e==="user"||e==="custom"?t.userSource||t.customSource:e==="dynamic"?t.dynamicSource:e}function xr(){return p()==="ru"?{title:"Практика предложений",subtitle:"Только из изученных кандзи: {learned}/{total}",progress:"{done}/{total} готово",noLearned:"Сначала изучи несколько кандзи в уроках или повторении. После этого появятся предложения.",notEnough:"Изучено {count} кандзи. Для упражнения нужно минимум 4 изученных кандзи, чтобы собрать варианты.",noExercise:"Изученные кандзи пока не складываются в доступные предложения. Продолжай уроки, и блок откроется.",tip:"Заполни {count} пропуск(а) плитками по порядку.",check:"Проверить",clear:"Очистить",next:"Следующее",undo:"Убрать",completedBefore:"Награда за это предложение уже получена.",fillAll:"Заполни все пропуски перед проверкой.",correct:"Верно. Предложение собрано правильно.",wrong:"Проверь красные места и попробуй ещё раз.",full:"Все пропуски уже заполнены.",inserted:"Плитка вставлена.",removed:"Последняя плитка убрана."}:{title:"Sentence practice",subtitle:"Only learned kanji: {learned}/{total}",progress:"{done}/{total} done",noLearned:"Study a few kanji first. Sentence practice will unlock after that.",notEnough:"{count} kanji learned. You need at least 4 learned kanji for tile choices.",noExercise:"Your learned kanji do not form an available sentence yet. Continue lessons to unlock this block.",tip:"Fill {count} blank slot(s) with tiles in order.",check:"Check",clear:"Clear",next:"Next",undo:"Undo",completedBefore:"Reward for this sentence was already claimed.",fillAll:"Fill every blank before checking.",correct:"Correct. The sentence is complete.",wrong:"Check the red slots and try again.",full:"All blank slots are already filled.",inserted:"Tile inserted.",removed:"Last tile removed."}}function zc(){return p()==="ru"?{customTitle:"Своё предложение",customCount:"Своих: {count}",customSentence:"Японское предложение",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Чтение хираганой",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Перевод RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Добавить",customHelp:"Вставь фразу. Приложение спрячет только изученные кандзи: {learned}.",customAdded:"Предложение добавлено.",customNoSentence:"Вставь японское предложение.",customNoKnown:"В этом предложении нет изученных кандзи.",customNoTiles:"Нужно минимум 4 изученных кандзи для вариантов.",customDuplicate:"Такое предложение уже есть.",customUpdated:"Предложение обновлено.",customDeleted:"Предложение удалено.",customEmpty:"Свои предложения появятся здесь.",customReady:"Доступно",customLocked:"Позже",updateCustom:"Сохранить",cancelEdit:"Отмена",editCustom:"Редактировать",deleteCustom:"Удалить",customSource:"Своё",userSource:"USER",dynamicSource:"JSON"}:{customTitle:"Custom sentence",customCount:"Custom: {count}",customSentence:"Japanese sentence",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Hiragana reading",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Translation RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Add",customHelp:"Paste a phrase. The app will hide only learned kanji: {learned}.",customAdded:"Sentence added.",customNoSentence:"Paste a Japanese sentence.",customNoKnown:"No learned kanji found in this sentence.",customNoTiles:"You need at least 4 learned kanji for tile choices.",customDuplicate:"This sentence already exists.",customUpdated:"Sentence updated.",customDeleted:"Sentence deleted.",customEmpty:"Your sentences will appear here.",customReady:"Ready",customLocked:"Later",updateCustom:"Save",cancelEdit:"Cancel",editCustom:"Edit",deleteCustom:"Delete",customSource:"Custom",userSource:"USER",dynamicSource:"JSON"}}function NC(e){return p()==="en"?e?.translationEn||e?.translationRu||"":e?.translationRu||e?.translationEn||""}function cf(e=fn()){const t=De().customSentences||[];if(Fn?.cards===r.cards&&Fn.builtIn===r.sentenceExercises&&Fn.learned.length===e.length&&Fn.learned.every((c,d)=>c===e[d])&&Fn.custom.length===t.length&&Fn.custom.every((c,d)=>c===t[d]))return Fn.items;const n=LC(e),s=AC(e),a=Array.isArray(r.sentenceExercises)?r.sentenceExercises:[],o=new Set,l=[...n,...s,...a].filter(c=>!c?.id||o.has(c.id)?!1:(o.add(c.id),!0));return Fn={cards:r.cards,builtIn:r.sentenceExercises,learned:[...e],custom:[...t],items:l},l}function LC(e=fn()){const t=De();return(Array.isArray(t.customSentences)?t.customSentences:[]).map(s=>Uc(s,e)).filter(Boolean)}function Uc(e,t=fn()){return e?.jp?Gc({id:e.id,jlpt:zC(e.jp,t),sentence:e.jp,reading:e.hiragana||Ta(e.jp),translationRu:e.ru||"",translationEn:e.en||"",source:"user"},t,{maxBlanks:3,maxBlankChars:5}):null}function df(e,t,n){const s=e?.blanks||[],a=String(e?.sentence||"").split("___");let o=0;return a.map((l,c)=>{const d=s[c];if(!d)return i(l);const u=d.answer||[],m=u.map((h,f)=>{const S=o+f,C=t[S],x=n.includes(S);return`<span class="sentence-slot ${C?"is-filled":""} ${x?"is-wrong":""}">${C?i(C.kanji):""}</span>`}).join("");return o+=u.length,`${i(l)}<span class="sentence-blank">${m}</span>`}).join("")}function Jc(e=fo(),t=fn()){const n=Os(t),s=(Array.isArray(e)?e:[]).filter(C=>C?.id),a=De();new Set(s.map(C=>C.id)).has(a.activeId)||mo(qc(s)?.id||null);const l=s.find(C=>C.id===r.progress.sentencePractice.activeId)||s[0];if(!l)return null;const c=Vt(l);(!Array.isArray(r.progress.sentencePractice.tileKeys)||!r.progress.sentencePractice.tileKeys.length)&&(r.progress.sentencePractice.tileKeys=Bs(l,n).map(wo));let d=(Array.isArray(r.progress.sentencePractice.tileKeys)?r.progress.sentencePractice.tileKeys:[]).map(JC).filter(Boolean);const u=()=>c.every(C=>d.some(x=>x.kanji===C.kanji));(d.length<Math.max(4,c.length)||!u())&&(d=Bs(l,n),r.progress.sentencePractice.tileKeys=d.map(wo),r.progress.sentencePractice.selected=[],r.progress.sentencePractice.checked=!1,r.progress.sentencePractice.result=null);const m=Array.isArray(r.progress.sentencePractice.selected)?r.progress.sentencePractice.selected:[];r.progress.sentencePractice.selected=m.filter((C,x,L)=>Number.isInteger(C)&&C>=0&&C<d.length&&L.indexOf(C)===x).slice(0,c.length);const h=r.progress.sentencePractice.selected.map(C=>d[C]).filter(Boolean),f=r.progress.sentencePractice.checked&&r.progress.sentencePractice.result?r.progress.sentencePractice.result.wrongIndexes:[],S=Array.isArray(f)?f.filter(C=>Number.isInteger(C)&&C>=0&&C<c.length):[];return{exercise:l,tiles:d,selectedTiles:h,answerFlat:c,wrongIndexes:S,complete:!!(r.progress.sentencePractice.checked&&r.progress.sentencePractice.result?.correct),awarded:!!r.progress.sentencePractice.completed?.[l.id]}}function De(){var e;return(e=r.progress).sentencePractice||(e.sentencePractice=or().sentencePractice),r.progress.sentencePractice}function mo(e){r.progress.sentencePractice={...De(),activeId:e,selected:[],checked:!1,result:null,tileKeys:[]};const t=cf(fn()).find(n=>n?.id===e);t&&mf(t)}function Os(e){return(Array.isArray(e)?e:[]).filter(t=>t?.id&&t.kanji)}function fn(){return Os(r.cards).filter(e=>{const t=r.lessons.find(s=>s.id===e.lessonId);if(t&&!Ge(t))return!1;const n=J(e.id);return n.state!=="New"||n.reviewCount>0||n.lastReviewedAt||r.progress.lessonCompletions[e.lessonId]})}function fo(e=fn()){const t=Os(e),n=new Set(t.map(s=>s.kanji));return cf(t).filter(s=>{if(!s?.id)return!1;const a=Vt(s);return Q1(a,n)})}function Vt(e){return(e?.blanks||[]).flatMap(t=>(t.answer||[]).map((n,s)=>({kanji:n,reading:t.reading?.[s]||""})))}function uf(e){return Vt(e).map(t=>t.kanji).join("")}function Bs(e,t){if(!e?.id)return[];const n=Os(t),s=Vt(e),a=new Set(s.map(C=>C.kanji)),o=new Set(n.map(C=>C.kanji)),l=new Map;[...e.tiles||[],...s].forEach(C=>{C?.kanji&&C?.reading&&l.set(C.kanji,C.reading)});const c=s.map(C=>({kanji:C.kanji,reading:C.reading||l.get(C.kanji)||Tn(C.kanji)})),d=(e.tiles||[]).filter(C=>C?.kanji&&!a.has(C.kanji)&&o.has(C.kanji)).map(C=>({kanji:C.kanji,reading:C.reading||Tn(C.kanji)})).filter((C,x,L)=>L.findIndex(k=>k.kanji===C.kanji)===x),u=new Set,m=n.filter(C=>!C.kanji||a.has(C.kanji)||u.has(C.kanji)?!1:(u.add(C.kanji),!0)).map(C=>({card:C,hash:Je(`${e.id}:${C.kanji}`)})).sort((C,x)=>C.hash-x.hash).map(({card:C})=>({kanji:C.kanji,reading:l.get(C.kanji)||Tn(C.kanji,C)})),h=new Set(a),f=[...d,...m].filter(C=>h.has(C.kanji)?!1:(h.add(C.kanji),!0)),S=Math.min(Math.max(6,c.length+2),c.length+f.length);return YC([...c,...f.slice(0,S-c.length)],e.id)}function AC(e){const t=Os(e);if(!t.length)return[];const n=new Set(t.map(l=>l.kanji)),s=new Set,a=[],o=t.flatMap(l=>(l.examples||[]).map(c=>({...c,card:l})));for(const[l,c]of o.entries()){if(a.length>=160)break;const d=Nr(c.word||"");if(!d||s.has(d)||!UC(d)||gf(d).some(C=>!n.has(C)))continue;s.add(d);const u=zs(c.reading||Ta(d)),m=c.translation||d,h=[{sentence:`今日は${d}をアプリで見ます。`,reading:`きょうは ${u}を あぷりで みます。`,translationRu:`Сегодня я смотрю в приложении: ${m}.`,translationEn:`Today I check ${d} in an app.`},{sentence:`駅で${d}について話します。`,reading:`えきで ${u}について はなします。`,translationRu:`На станции говорю про: ${m}.`,translationEn:`At the station, I talk about ${d}.`},{sentence:`メモに${d}を書きます。`,reading:`めもに ${u}を かきます。`,translationRu:`Я записываю в заметку: ${m}.`,translationEn:`I write ${d} in a memo.`}],f=h[l%h.length],S=Gc({id:`sentence-json-${Je(`${d}:${f.sentence}`).toString(36)}`,jlpt:c.card?.jlpt||"N5",sentence:f.sentence,reading:f.reading,translationRu:f.translationRu,translationEn:f.translationEn,source:"dynamic"},t,{maxBlanks:2,maxBlankChars:4});S&&a.push(S)}return a.slice(0,160)}function IC(){const e=De(),t={...xr(),...zc()},n=Ji(TC()||e.customDraft||{}),s=fn(),a=is(n.jp);if(!a){ho(t.customNoSentence,"error");return}const o=e.customEditingId||null;if(EC(a,o)){ho(t.customDuplicate,"error");return}const c=De(),d={id:o||`custom_${Date.now().toString(36)}_${Je(a).toString(36)}`,jp:a,hiragana:zs(is(n.hiragana)||Ta(a)),ru:is(n.ru),en:is(n.en),source:"user"},u=(c.customSentences||[]).findIndex(h=>h.id===d.id);u>=0?c.customSentences[u]=d:c.customSentences=[d,...c.customSentences||[]].slice(0,160),c.customDraft={jp:"",hiragana:"",ru:"",en:""},c.customEditingId=null,ho(o?t.customUpdated:t.customAdded,"success",!1);const m=Uc(d,s);m&&Bs(m,s).length>=Math.max(4,Vt(m).length)&&(mo(m.id),r.progress.sentencePractice.tileKeys=Bs(m,s).map(wo)),T(),P()}function TC(){const e=document.querySelector(".sentence-builder");if(!e)return null;const t=n=>e.querySelector(`[data-sentence-draft="${n}"]`)?.value||"";return{jp:t("jp"),hiragana:t("hiragana"),ru:t("ru"),en:t("en")}}function RC(e){const t=De(),n=(t.customSentences||[]).find(s=>s.id===e);n&&(t.customEditingId=n.id,t.customDraft={jp:n.jp||"",hiragana:n.hiragana||"",ru:n.ru||"",en:n.en||""},t.customMessage="",t.customStatus="",T(),P())}function _C(e){const t=De(),n={...xr(),...zc()},s=(t.customSentences||[]).length;if(t.customSentences=(t.customSentences||[]).filter(a=>a.id!==e),t.customSentences.length!==s){if(t.customEditingId===e&&(t.customEditingId=null,t.customDraft={jp:"",hiragana:"",ru:"",en:""}),t.completed?.[e]&&delete t.completed[e],t.recentIds=(t.recentIds||[]).filter(a=>a!==e),t.activeId===e){const a=fn(),o=qc(fo(a));mo(o?.id||null)}ho(n.customDeleted,"success",!1),T(),P()}}function PC(){const e=De();e.customEditingId=null,e.customDraft={jp:"",hiragana:"",ru:"",en:""},e.customMessage="",e.customStatus="",T(),P()}function EC(e,t=null){const n=Nr(e);return(De().customSentences||[]).some(a=>a.id!==t&&Nr(a.jp)===n)?!0:r.sentenceExercises.some(a=>Nr(pf(a))===n)}function ho(e,t,n=!0){const s=De();s.customMessage=e,s.customStatus=t,T(),n&&P()}function Gc(e,t,n={}){if(!e||typeof e!="object")return null;const s=Os(t),a=Nr(e.sentence||"");if(!a||!e.id||!s.length)return null;const o=MC(a,s).filter(m=>m.answer.length<=Number(n.maxBlankChars||5));if(!o.length)return null;const l=KC(o,a,n);if(!l.length)return null;let c="",d=0;const u=l.map(m=>(c+=a.slice(d,m.start)+"___",d=m.end,{answer:m.answer,reading:DC(m.text)}));return c+=a.slice(d),{id:e.id,kind:e.kind||"cloze",jlpt:e.jlpt||"N5",sentence:c,originalSentence:a,reading:zs(e.reading||Ta(a)),translationRu:e.translationRu||"",translationEn:e.translationEn||"",blanks:u,tiles:u.flatMap(m=>m.answer.map((h,f)=>({kanji:h,reading:m.reading[f]||Tn(h)}))),source:e.source||"custom",createdAt:e.createdAt}}function MC(e,t){const n=new Map(Os(t).map(o=>[o.kanji,o])),s=[];let a=null;return Array.from(e).forEach((o,l)=>{if(vo(o)&&n.has(o)){a||(a={start:l,end:l,text:"",answer:[]}),a.end=l+1,a.text+=o,a.answer.push(o);return}a&&s.push(a),a=null}),a&&s.push(a),s}function KC(e,t,n={}){const s=Number(n.maxBlanks||2),a=Number(n.maxBlankChars||5),o=e.filter(m=>m.start>0&&m.end<t.length),l=e.filter(m=>m.start>0),c=(o.length?o:l.length?l:e).slice().sort((m,h)=>{const f=h.answer.length-m.answer.length;return f||Math.abs(m.start-t.length/2)-Math.abs(h.start-t.length/2)}),d=[];let u=0;return c.forEach(m=>{d.length>=s||u+m.answer.length>a||(d.push(m),u+=m.answer.length)}),d.sort((m,h)=>m.start-h.start)}function DC(e){const t=Array.from(e),n=FC(e);return n?OC(t,zs(n)):t.map(s=>Tn(s))}function FC(e){if(yi?.cards!==r.cards||yi?.length!==r.cards.length){const t=new Map;for(const n of r.cards)for(const s of n.examples||[])s.reading&&!t.has(s.word)&&t.set(s.word,s.reading);yi={cards:r.cards,length:r.cards.length,byWord:t}}return yi.byWord.get(e)||""}function OC(e,t){const n=Array(e.length).fill("");let s=t;for(let a=e.length-1;a>0;a-=1){const l=BC(e[a]).sort((c,d)=>d.length-c.length).find(c=>c&&s.endsWith(c));l&&(n[a]=l,s=s.slice(0,-l.length))}return n[0]=s||Tn(e[0]),n.map((a,o)=>a||Tn(e[o]))}function BC(e){const t=r.cards.find(s=>s.kanji===e),n=[t?.hiragana,t?.onyomi,t?.kunyomi].flatMap(s=>String(s||"").split(/[\/,;・、\s]+/u)).map(s=>zs(s.trim())).filter(Boolean);return[...new Set(n)]}function Ta(e){return zs(Array.from(e).map(t=>vo(t)?Tn(t):t).join(""))}function zC(e,t){const n=["N5","N4","N3","N2","N1"],s=new Map(t.map(o=>[o.kanji,o]));return gf(e).map(o=>s.get(o)?.jlpt).filter(Boolean).sort((o,l)=>n.indexOf(l)-n.indexOf(o))[0]||"N5"}function Nr(e){return String(e||"").replace(/\s+/g,"").trim()}function is(e){return String(e||"").replace(/\s+/g," ").trim()}function pf(e){if(!e)return"";if(e.jp)return e.jp;if(e.originalSentence)return e.originalSentence;let t=0;return String(e.sentence||"").replace(/___/g,()=>(e.blanks?.[t++]?.answer||[]).join(""))}function UC(e){return Array.from(String(e||"")).some(vo)}function gf(e){return Array.from(String(e||"")).filter(vo)}function vo(e){return/[㐀-鿿]/u.test(e)}function zs(e){return String(e||"").replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-96))}function ee(e){return zs(String(e||""))}function Tn(e,t=r.cards.find(n=>n.kanji===e)){const n=t?.onyomi||t?.kunyomi||t?.hiragana||"";return String(n).split("/")[0].trim()||"かな"}function wo(e){return`${e.kanji}	${e.reading||""}`}function JC(e){const[t,n]=String(e||"").split("	");return t?{kanji:t,reading:n||Tn(t)}:null}function Ra(){const e=Cn.querySelector('.sentence-practice[data-section="sentence-practice"]');if(!e)return;const t=document.createElement("template");t.innerHTML=lf();const n=t.content.firstElementChild;if(!n)return;e.className=n.className;for(const a of[".sentence-line",".sentence-feedback-text",".sentence-head .tag-row"]){const o=e.querySelector(a),l=n.querySelector(a);o&&l&&(o.innerHTML=l.innerHTML)}const s=n.querySelectorAll(".sentence-tiles button, .sentence-actions button");e.querySelectorAll(".sentence-tiles button, .sentence-actions button").forEach((a,o)=>{s[o]&&(a.className=s[o].className,a.disabled=s[o].disabled)})}function GC(e){const t=Jc();if(!t||!Number.isInteger(e))return;const n=xr(),s=r.progress.sentencePractice;if(!(s.result?.correct||s.selected.includes(e))){if(s.selected.length>=t.answerFlat.length){G(n.full);return}s.selected.push(e),s.checked=!1,s.result={correct:!1,message:n.inserted,wrongIndexes:[]},T(),Ra()}}function qC(){const e=De();!e.selected.length||e.result?.correct||(e.selected.pop(),e.checked=!1,e.result={correct:!1,message:xr().removed,wrongIndexes:[]},T(),Ra())}function HC(){const e=De();e.result?.correct||(e.selected=[],e.checked=!1,e.result=null,T(),Ra())}function WC(){const e=Jc();if(!e)return;const t=xr(),n=r.progress.sentencePractice;if(n.checked)return;if(n.selected.length<e.answerFlat.length){n.checked=!0,n.result={correct:!1,message:t.fillAll,wrongIndexes:[]},T(),Ra();return}const s=e.answerFlat.map((o,l)=>e.selectedTiles[l]?.kanji===o.kanji?-1:l).filter(o=>o>=0),a=s.length===0;if(n.checked=!0,n.attempts=(n.attempts||0)+1,n.result={correct:a,wrongIndexes:s,message:a?t.correct:t.wrong},a)VC(e.exercise,{quietReward:!0}),Ce({trust:.8,curiosity:.5,discipline:.4},"sentence_correct"),we("sentence_complete",{exerciseId:e.exercise.id,source:e.exercise.source||"builtin"}),ei("ok");else{r.progress.totalWrong+=1,r.progress.correctCombo=0,Ce({discipline:-.6,curiosity:.2},"sentence_wrong"),we("answer_wrong",{exerciseId:e.exercise.id,mode:"sentence"});const o=Pn();o.mistakes+=1,r.progress.daily[ce()]=o,ei("again")}T(),Ra(),og()}function VC(e,t={}){const n=De();if(n.completed[e.id])return;const s=!!t.quietReward,a=r.rewards?.rewards||{},o=a.sentencePracticeXp||ru.xp,l=a.sentencePracticeCoins||ru.coins;n.completed[e.id]=new Date().toISOString(),r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo);const c=Pn();c.reviews+=1,c.minutes=Jo((c.minutes||0)+.8,1),r.progress.daily[ce()]=c,H(o,l,`sentence:${e.id}`,{silent:s}),Ce({trust:.8,curiosity:.7},"sentence_complete"),be(),rd({silent:!0}),Z({silent:s})}function XC(){const e=fn(),t=fo(e);if(!t.length)return;const n=r.progress.sentencePractice?.activeId,s=t.find(o=>o?.id===n);s&&mf(s);const a=qc(t,{excludeCurrent:!0,preferUncompleted:!0});a?.id&&(mo(a.id),r.progress.sentencePractice.tileKeys=Bs(a,e).map(wo),T(),P())}function qc(e,t={}){const n=(Array.isArray(e)?e:[]).filter(x=>x?.id);if(!n.length)return null;const s=De(),a=s.activeId,o=new Set(s.recentIds||[]),l=new Set(s.recentAnswers||[]),c=x=>!t.excludeCurrent||n.length===1||x.id!==a,d=x=>!t.preferUncompleted||!s.completed?.[x.id],u=x=>!l.has(uf(x)),m=x=>!o.has(x.id),f=[n.filter(c).filter(d).filter(u).filter(m),n.filter(c).filter(d).filter(u),n.filter(c).filter(u).filter(m),n.filter(c).filter(m),n.filter(c),n].find(x=>x.length)||n,S=f.filter(QC),C=S.length?S:f;return C[Math.floor(Math.random()*C.length)]}function QC(e){return e?.source==="user"||e?.source==="custom"||e?.source==="dynamic"||String(e?.sentence||"").indexOf("___")>0}function mf(e){if(!e?.id)return;const t=De(),n=uf(e),s=Array.isArray(t.recentIds)?t.recentIds:[],a=Array.isArray(t.recentAnswers)?t.recentAnswers:[];t.recentIds=[e.id,...s.filter(o=>o!==e.id)].slice(0,14),t.recentAnswers=[n,...a.filter(o=>o!==n)].slice(0,8)}function Je(e){return String(e).split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0)>>>0}function YC(e,t){return[...e].sort((n,s)=>Je(`${t}:${n.kanji}:${n.reading}`)-Je(`${t}:${s.kanji}:${s.reading}`))}function hn(e,t=[]){const n=t.filter(a=>String(e?.answers?.[a.id]||"").trim()).length,s=t.filter(a=>!String(e?.answers?.[a.id]||"").trim());return{answered:n,missingCount:s.length,missingIds:s.map(a=>a.id),firstMissingId:s[0]?.id||null,totalQuestions:t.length,ready:t.length>0&&s.length===0}}function Lr(e,t){const n=String(e||"n5").toLowerCase(),s=String(t||"").replace(/[^a-z0-9_-]+/gi,"-");return`${n}-final-question-${s}`}function ZC(e){return Number(e?.passingPercent??e?.passThreshold??70)}function ex(){const e=r.finalTestModal;if(!e)return"";const t=e.kind==="warning",n=t?"thinking":e.passed?"proud":"sad",s=t?"":Zt(e.level,"btn ghost");!t&&(!e.percent||e.percent===0)&&typeof e.correct=="number"&&e.totalQuestions>0&&(e.percent=Math.round(e.correct/e.totalQuestions*100));const a=t?[`<span>${i(p()==="ru"?"Вопросов":"Questions")} ${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Пропусков":"Missing")} ${e.missingCount}</span>`,`<span>${i(p()==="ru"?"Порог":"Pass")} ${e.threshold}%</span>`]:[`<span>${i(p()==="ru"?"Результат":"Score")} ${e.percent}%</span>`,`<span>${i(p()==="ru"?"Верно":"Correct")} ${e.correct}/${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Ошибки":"Errors")} ${e.incorrect}</span>`,`<span>${i(p()==="ru"?"Пропуски":"Missing")} ${e.unanswered}</span>`,`<span>+${e.rewardXp} XP</span>`,`<span>+${e.rewardMoon} ${i(_("coins"))}</span>`];return`
      <div class="reward-backdrop final-test-backdrop">
        <article class="reward-modal is-final-test ${t?"is-warning":"is-result"}" role="dialog" aria-modal="true">
          ${Rn("eva",n,t?"review":"achievement","reward-mascot")}
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
    `}function ff(e){const t=dL(e);if(!t&&!lL(e))return"";const n=t?p()==="ru"?"Озвучить следующее чтение кандзи":"Speak the next kanji reading":p()==="ru"?"Проиграть озвучку кандзи":"Play kanji audio";return`
      <button class="audio-trigger" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" ${t?'data-tts-kind="cycle"':""} aria-label="${g(n)}" title="${g(t?"TTS":p()==="ru"?"Озвучка":"Audio")}">🔊</button>
    `}function bo(e){const t=Ja(e);return`
      <div class="reading-row reading-split">
        ${hf(e,"onyomi",wh("onyomi"),t.onyomi.kana,t.onyomi.romaji)}
        ${hf(e,"kunyomi",wh("kunyomi"),t.kunyomi.kana,t.kunyomi.romaji)}
      </div>
    `}function hf(e,t,n,s,a){const o=wf(e,t,n);return`
      <div class="reading-box">
        <div class="reading-box-head">
          <span class="label">${i(n)}</span>
          ${o}
        </div>
        <strong>${i(ee(s)||"—")}</strong>
        <small>${i(a||"—")}</small>
      </div>
    `}function vf(e,t,n,s){return`
          <div>
            <dt class="reading-def-head">
              <span>${i(n)}</span>
              ${wf(e,t,n)}
            </dt>
            <dd>${i(ee(s||"—"))}</dd>
          </div>
        `}function wf(e,t,n){return Pr(e,t).length?`<button class="reading-tts-button" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-kind="${g(t)}" aria-label="${g(`${n} TTS`)}" title="TTS">🔊</button>`:""}function ko(e,t="btn ghost"){const n=kL(e);if(!n)return"";const s=Tt(n.jlpt),a=p()==="ru"?"JLPT урок":"JLPT lesson";return s?`<button class="${t}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(n.jlpt)}">${i(n.jlpt)} · ${i(a)}</button>`:`<button class="${t} is-disabled" type="button" disabled aria-disabled="true" title="${g(Mn(n.jlpt))}">🔒 ${i(n.jlpt)}</button>`}function bf(e){if(!e?.id)return Js();sa(e,"study_card");const t=J(e.id),n=r.revealed;ZN(e.id);const s=e.lessonTitle||Pd(e.lessonId)||e.jlpt||"";return`
      <article class="study-card" data-review-card-id="${g(e.id)}">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(s)}</span>
            ${Or(t.state)}
          </div>
          ${ff(e)}
        </div>
        <div class="kanji-focus" aria-label="${g(e.kanji)}">${i(e.kanji)}</div>
        <h2>${i(n?K(e):_("question"))}</h2>
        <p class="label">${i(e.jlpt)} · ${e.strokes} ${i(_("strokes"))} · ${i(en(t.dueAt))}</p>
        ${n?rx(e):`
          ${sx(e)}
          <div class="actions">
            <button class="btn primary" type="button" data-action="show-answer">${i(_("showAnswer"))}</button>
            ${ko(e)}
            <button class="btn" type="button" data-action="open-card" data-id="${g(e.id)}">⋯ ${i(_("details"))}</button>
          </div>
        `}
      </article>
    `}function tx(e){const t=Math.max(Number(r.reviewSession?.initialSize||e||0),e||0,1),n=de(t-Math.max(Number(e||0),0),0,t),s=Math.min(n+1,t);return p()==="ru"?`Осталось: ${e} · ${s} / ${t}`:`Remaining: ${e} · ${s} / ${t}`}function nx(e,t){const n=Vc(e);if(!n)return Js();const s=n.progress||ot(null),a=Ir(),o=zg(n.courseSlug),l=us().settings.showRomaji;return`
      <article class="study-card kana-srs-card" data-review-card-id="${g(n.cardId)}" data-review-kind="kana">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(o)}</span>
            ${Or(s.state)}
            <span class="pill">${i(tx(t))}</span>
          </div>
          <button class="audio-trigger" type="button" data-action="play-kana-tts" data-text="${g(n.kana)}" aria-label="${g(p()==="ru"?"Озвучить знак":"Speak kana")}">🔊</button>
        </div>
        <div class="kanji-focus kana-srs-focus" lang="ja" aria-label="${g(n.kana)}">${i(n.kana)}</div>
        <h2>${i(l&&n.romaji?n.romaji:p()==="ru"?"Вспомни чтение":"Recall the reading")}</h2>
        <p class="label">${i(o)} · ${i(n.strokes?`${n.strokes} ${_("strokes")}`:p()==="ru"?"знак каны":"kana card")} · ${i(en(s.dueAt))}</p>
        ${l&&n.romaji?`<p class="kana-srs-reading"><span lang="ja">${i(n.kana)}</span> · ${i(n.romaji)}</p>`:""}
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate-kana-review" data-course="${g(n.courseSlug)}" data-card="${g(n.cardId)}" data-rating="forgot">${i(a.forgot)} <small>${i(a.forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate-kana-review" data-course="${g(n.courseSlug)}" data-card="${g(n.cardId)}" data-rating="remember">${i(a.remember)} <small>${i(a.rememberHint)}</small></button>
        </div>
      </article>
    `}function sx(e){const t=r.readingCheck.cardId===e.id?r.readingCheck:{value:"",status:null,message:""},n=t.status?` is-${t.status}`:"",s=t.message||(p()==="ru"?"Напиши любое чтение этого кандзи хираганой или катаканой.":"Type any reading for this kanji in hiragana or katakana.");return`
      <section class="reading-check${n}" aria-live="polite">
        <label class="label" for="readingCheck-${g(e.id)}">${i(p()==="ru"?"Проверка чтения":"Reading check")}</label>
        <div class="reading-check-row">
          <input id="readingCheck-${g(e.id)}" data-reading-input data-id="${g(e.id)}" type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" value="${g(t.value)}" placeholder="${g(p()==="ru"?"Например: にち или ニチ":"Example: にち or ニチ")}" />
          <button class="btn ghost" type="button" data-action="check-reading" data-id="${g(e.id)}">${i(p()==="ru"?"Проверить":"Check")}</button>
        </div>
        <p>${i(s)}</p>
      </section>
    `}function yo(e){return`
      <li class="example-item">
        <div class="example-main">
          <b>${i(e.word)}</b>
          <span>${i(ee(e.reading))}</span>
          <span class="example-romaji">${i(e.romaji)}</span>
        </div>
        <small class="example-translation">${i(gs(e))}</small>
      </li>
    `}function rx(e){return`
      <div class="answer-section">
        ${bo(e)}
        <strong>${i(_("examples"))}</strong>
        <ul class="example-list">
          ${e.examples.map(yo).join("")}
        </ul>
        <strong>${i(_("apps"))}</strong>
        <p>${i(Ya(e))}</p>
        <ul class="app-list">${e.apps.map(t=>`<li>${i(t)}</li>`).join("")}</ul>
        <div class="actions compact-actions">
          ${ko(e)}
        </div>
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate" data-rating="forgot">${i(Ir().forgot)} <small>${i(Ir().forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate" data-rating="remember">${i(Ir().remember)} <small>${i(iN(e))}</small></button>
        </div>
      </div>
    `}function Hc(e,t){const n=r.progress.correctCombo>=3?"leya":"eva",s=n==="leya"?"combo":"welcome",a=r.route==="review"?Math.max(r.reviewSession?.initialSize||t,1):Math.max(r.cards.length,1),o=!!e?.id;return`
      <aside data-study-side-host>
        ${tN(n,n==="leya"?"focus":"thinking",s)}
        <div class="mini-stat-row" style="margin-top:10px">
          ${M(_("review"),t,"queue",E(t,a))}
          ${M("Combo",r.progress.correctCombo,`${r.progress.bestCorrectCombo} best`,E(r.progress.correctCombo,10))}
        </div>
        ${o?`<article class="tool-panel profile-panel">
          <h3>${i(_("hint"))} · Leya</h3>
          <p>${i(No(e.id).hint)}</p>
          <h3>${i(_("mnemonic"))}</h3>
          <p>${i(No(e.id).mnemonic)}</p>
        </article>`:""}
      </aside>
    `}function os(){r.reviewExerciseResults={},r.activeExerciseReviewId=null,r.activeExerciseReviewLevel="",r.activeExerciseReviewSource="",r.activeExerciseReviewSelection=[],r.activeExerciseReviewChoice="",r.activeExerciseReviewTranslationOpen=!1}function ax(e){if(!e){r.activeCardId=null,os();return}if(r.reviewQueueLastKind=e.kind,e.kind==="card"){const t=oe(e.card?.id||e.cardId||e.progress?.cardId||"");if(!t?.id){r.activeCardId=null,os();return}r.activeCardId!==t.id&&(r.activeCardId=t.id,os());return}if(e.kind==="kana"){r.activeCardId=null,os(),r.revealed=!1,kt();return}if(e.kind==="exercise"){const t=r.activeExerciseReviewId===e.exerciseId&&r.activeExerciseReviewLevel===e.level&&r.activeExerciseReviewSource===String(e.source||"textbook");r.activeCardId=null,r.activeExerciseReviewId=e.exerciseId,r.activeExerciseReviewLevel=e.level,r.activeExerciseReviewSource=String(e.source||"textbook"),t||(r.reviewExerciseResults={}),t||(r.activeExerciseReviewSelection=[],r.activeExerciseReviewChoice="",r.activeExerciseReviewTranslationOpen=!1)}}function Wc(e,t,n="",s=null,a=null,o="textbook"){const l=F(e);if(!l||!t)return null;if(String(o||"textbook")==="reading"){const f=a||Qf(t,l);if(!f)return null;const S=Ba(s||{},f);return{kind:"exercise",source:"reading",key:`reading:${String(l)}:${t}`,level:l,exerciseId:t,lessonId:String(f.sourceId||n||S.lessonId||""),cardId:"",dueAt:S.dueAt?new Date(S.dueAt).getTime():0,progress:S,exercise:f,card:null}}const d=qs(s||{},{level:l,lessonId:n,exerciseId:t,cardId:s?.cardId||"",kanji:s?.kanji||"",type:s?.type||"",title:s?.title||null,prompt:s?.prompt||"",answer:s?.answer||"",answerLabel:s?.answerLabel||""}),u=a||So(l,t,n||d.lessonId||"");if(!u)return null;const m=String(u.lessonId||d.lessonId||n||""),h=String(u.cardId||d.cardId||"");return{kind:"exercise",source:"textbook",key:`exercise:${l}:${t}`,level:l,exerciseId:t,lessonId:m,cardId:h,dueAt:d.dueAt?new Date(d.dueAt).getTime():0,progress:d,exercise:u,card:oe(h)||oe(d.cardId||"")}}function Us(){if(!r.activeExerciseReviewId||!r.activeExerciseReviewLevel)return null;const e=r.activeExerciseReviewLevel,t=r.activeExerciseReviewId;if(String(r.activeExerciseReviewSource||"textbook")==="reading"){const o=Qf(t,e),l=o?_n(o):r.progress.readingExercises?.[t]||null;return Wc(e,t,l?.lessonId||o?.sourceId||"",l,o,"reading")}const a=jo(e)?.exerciseSrs?.[t]||null;return Wc(e,t,a?.lessonId||"",a,null,"textbook")}function Vc(e){if(!e||e.kind!=="kana")return null;const t=fr(e.cardId||e.key||"",e.courseSlug||"");if(!t?.id||!ve(t.slug))return null;const n=Jt(t.slug),s=ot(e.progress||n[t.id]||null),a=e.character||ga(t.slug,t.kana);return a?{...e,kind:"kana",key:t.id,courseSlug:t.slug,cardId:t.id,kana:t.kana,romaji:String(a.romaji||e.romaji||""),strokes:Number(a.strokes||e.strokes||0),progress:s,character:a,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}:null}function Xc(e){return!e||e.kind!=="exercise"?null:Wc(e.level,e.exerciseId,e.lessonId||e.progress?.lessonId||"",e.progress,e.exercise||null,e.source||"textbook")}function ix(e){if(!e||typeof e!="object")return null;if(e.kind==="card"){const t=String(e.card?.id||e.cardId||e.progress?.cardId||""),n=oe(t);if(!n?.id)return null;const s=e.progress||J(n.id);return{...e,kind:"card",key:e.key||`card:${n.id}`,card:n,cardId:String(n.id),progress:s,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}}return e.kind==="kana"?Vc(e):e.kind==="exercise"?Xc(e):null}function Qc(e){return(Array.isArray(e)?e:[]).map(ix).filter(Boolean)}function ox(e){const t=Qc(e),n=Us();if(n&&r.reviewExerciseResults?.[n.exerciseId]||n&&!t.some(l=>l.kind==="exercise"&&l.exerciseId===n.exerciseId&&l.level===n.level))return n;const s=r.activeCardId?t.find(l=>l.kind==="card"&&l.card?.id===r.activeCardId):null;if(s)return s;const a=["card","kana"],o=a.includes(r.reviewQueueLastKind)?["exercise"]:r.reviewQueueLastKind==="exercise"?a:[];if(o.length){const l=t.find(c=>o.includes(c.kind));if(l)return l}return t[0]||n||null}function lx(e,t){const n=F(e);return n==="N5"?Vg(t):n==="N4"?pm(t):n==="N3"?Cm(t):n==="N2"?Km(t):""}function cx(e){return p()==="ru"?e?.kind==="cloze"?"Предложение":"Вопрос":e?.kind==="cloze"?"Sentence":"Question"}function Yc(){return p()==="ru"?"Перевод":"Translation"}function kf(e){const t=String(e||"").trim();return t?t.split(/([。！？、\n]+)/u).map(n=>{if(!n)return"";if(/^[。！？、\n]+$/u.test(n))return n===`
`?`
`:`${n} `;const s=hh(n);return s?`${s} `:""}).join("").replace(/\s+\n/gu,`
`).replace(/[ \t]+/gu," ").replace(/\s+([。！？、])/gu,"$1 ").replace(/([。！？、])\s*$/gu,"$1").trim():""}function dx(e){const t=!!r.activeExerciseReviewTranslationOpen,n=e?.reading?ee(e.reading):"",s=e?.reading?kf(e.reading):"",a=b({ru:e?.translationRu||e?.ru||"",en:e?.translationEn||e?.en||""});return`
      <div class="reading-translation-wrap">
        <button class="btn ghost reading-translation-toggle" type="button" data-action="toggle-reading-translation">${i(Yc())}</button>
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
    `}function ux(e){return r.reviewExerciseResults?.[e.exerciseId]||_n(e.exercise)||null}function px(e,t,n,s){const a=String(t?.id||n),o=s?.answers?.[a]||null,l=ij(e,t,n),c=l.find(u=>String(u.value||"")===String(t?.answer||"")),d=c?b(c.label||c):String(t?.answer||"");return`
      <div class="n4-question-block reading-question-block">
        <h3>${i(b(t?.prompt||e.exercise.question?.prompt||{}))}</h3>
        <div class="n5-option-grid">
          ${l.map(u=>{const m=o?.selected===u.value,h=o?.correct&&u.value===t.answer,f=o&&!o.correct&&u.value===t.answer;return`<button class="btn ${h||f?"success":m?"warning":"ghost"}" type="button" data-action="reading-review-answer" data-question="${g(a)}" data-value="${g(u.value)}" ${o||s?.completed?"disabled":""}>${i(b(u.label||u))}</button>`}).join("")}
        </div>
        ${o?`<p class="n5-feedback">${i(o.correct?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Неверно":"Wrong"} · ${d}`)}</p>`:""}
      </div>
    `}function gx(e){const t=Xc(e);if(!t||!t.exercise)return Js();const n=ux(t),s=!!n?.completed,a=t.progress||_n(t.exercise),o=cx(t.exercise),l=b(t.exercise.sourceTitle||t.exercise.title||{}),c=Vt(t.exercise),d=(t.exercise.kind==="question"?[t.exercise.question||t.exercise.questions?.[0]]:[]).filter(L=>L?.id),u=t.exercise.kind==="cloze"||!d.length&&c.length>0;if(!u&&!d.length)return Js();const m=u?s?1:Array.isArray(a?.selectedIndices)?a.selectedIndices.length:0:Object.keys(n?.answers||{}).length,h=u?Math.max(1,c.length):Math.max(1,d.length),f=Array.isArray(a?.selectedIndices)?a.selectedIndices:Array.isArray(r.activeExerciseReviewSelection)?r.activeExerciseReviewSelection:[],S=f.map(L=>t.exercise.tiles?.[L]).filter(Boolean),C=Array.isArray(a?.wrongIndexes)?a.wrongIndexes:[],x=dx(t.exercise);return`
      <article class="study-card textbook-review-card reading-review-card ${s?n?.correct===!1?"is-wrong":"is-correct":""}" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(l||o)}</span>
          <span class="pill">${i(a.state)} · ${i(en(a.dueAt))}</span>
          <span class="pill">${i(m)}/${i(h)}</span>
        </div>
        ${x}
        ${u?`
          <div class="sentence-card reading-cloze-card">
            <div class="sentence-line">${df(t.exercise,S,C)}</div>
            <p class="sentence-reading">${i(t.exercise.reading||"")}</p>
            <p class="sentence-translation">${i(b({ru:t.exercise.translationRu||t.exercise.ru||"",en:t.exercise.translationEn||t.exercise.en||""}))}</p>
          </div>
          <div class="sentence-tiles">
            ${(t.exercise.tiles||[]).map((L,k)=>{const N=f.includes(k),z=C.includes(k);return`
                <button class="sentence-tile ${N?"is-used":""} ${z?"is-wrong":""}" type="button" data-action="reading-review-tile" data-index="${k}" ${N||s?"disabled":""}>
                  <span>${i(L.reading||"")}</span>
                  <strong>${i(L.kanji)}</strong>
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
        `:d.map((L,k)=>px(t,L,k,n)).join("")}
        ${s?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function mx(e){const t=Xc(e);if(!t||!t.exercise)return Js();if(t.source==="reading")return gx(t);const n=!!r.reviewExerciseResults?.[t.exerciseId];return`
      <article class="study-card textbook-review-card" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(t.lessonId||t.progress.lessonId||"")}</span>
          <span class="pill">${i(t.progress.state)} · ${i(en(t.progress.dueAt))}</span>
        </div>
        ${lx(t.level,t.exercise)}
        ${n?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function fx(e){return`
      <article class="empty-state">
          <span class="kanji-char">⚠</span>
        <h2>${i(Ue("eva","lessonComplete"))}</h2>
        <p>${i(e?Qa(e):"")}</p>
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="review">↻ ${i(_("review"))}</button>
          <button class="btn" type="button" data-action="route" data-route="dictionary">文 ${i(_("dictionary"))}</button>
        </div>
      </article>
    `}function hx(){const e=r.reviewSession?.results||{},t=Number(e.remember||0),n=Number(e.forgot||0),s=t+n,a=Qe(),o=(Array.isArray(e.items)?e.items:[]).filter(l=>l?.dueAt).sort((l,c)=>(Date.parse(l.dueAt)||0)-(Date.parse(c.dueAt)||0)).slice(0,4);return`
      <article class="empty-state review-complete-card">
        <span class="kanji-char">済</span>
        <h2>${i(p()==="ru"?"Повторение завершено":"Review complete")}</h2>
        <p>${i(p()==="ru"?"Карточки закрыты. Вот короткий итог с ближайшими возвращениями.":"Cards are done. Here is a short summary and the nearest returns.")}</p>
        <div class="mini-stat-row">
          ${M(p()==="ru"?"Помню":"Remember",t,`${s}`,E(t,Math.max(1,s)))}
          ${M(p()==="ru"?"Не помню":"Forgot",n,`${s}`,E(n,Math.max(1,s)))}
        </div>
        ${o.length?`<ul class="review-upcoming-list">
          ${o.map(l=>`<li><strong>${i(l.label||l.kind||"")}</strong><span>${i(l.course||"")}</span><small>${i(en(l.dueAt))}</small></li>`).join("")}
        </ul>`:""}
        <div class="actions" style="justify-content:center">
          ${a?`<button class="btn primary" type="button" data-action="review-next-batch">${i(p()==="ru"?`Следующая короткая сессия · ещё ${a}`:`Next short session · ${a} still due`)}</button>`:""}
          <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(_("learn"))}</button>
          <button class="btn ghost" type="button" data-action="route" data-route="dictionary">典 ${i(_("dictionary"))}</button>
        </div>
      </article>
    `}function Js(){const e=r.reviewSession?.results||{},t=Number(e.remember||0)+Number(e.forgot||0);return r.route==="review"&&Number(r.reviewSession?.initialSize||0)>0&&t>0?hx():`
      <article class="empty-state">
        <span class="kanji-char">休</span>
        <h2>${i(p()==="ru"?"Повторов сейчас нет":"No reviews right now")}</h2>
        <p>${i(Ue("leya","welcome"))}</p>
        <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(_("learn"))}</button>
      </article>
    `}function vx(){const e=qN(),t=Math.max(Gr,Number(r.dictionaryVisibleCount||Gr)),n=e.slice(0,t),s=n.length<e.length,a=r.cards.filter(u=>!!r.progress.favorites[u.id]).length,o=["all",...new Set(r.cards.map(u=>u.jlpt))],l=["all",...new Set(r.cards.map(u=>Ua(u.id).radical).filter(Boolean))],c=p()==="ru"?`Показано ${n.length} из ${e.length}`:`Showing ${n.length} of ${e.length}`,d=p()==="ru"?"Показать ещё":"Show more";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("dictionary"))}</h1>
            <p>${i(c)} · ${e.length}/${r.cards.length}</p>
          </div>
        </div>
        ${wx(a)}
        <div class="filters">
          <div class="field">
            <label for="dictionarySearch">${i(_("search"))}</label>
            <input id="dictionarySearch" data-filter="query" type="search" value="${g(r.filters.query)}" placeholder="日, にち, sun" autocomplete="off" />
          </div>
          <div class="field">
            <label for="jlptFilter">JLPT</label>
            <select id="jlptFilter" data-filter="jlpt">
              ${o.map(u=>`<option value="${g(u)}" ${ri(u,r.filters.jlpt)}>${i(u==="all"?_("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="strokeFilter">${i(_("strokes"))}</label>
            <select id="strokeFilter" data-filter="strokes">
              ${[["all",_("all")],["1-4","1-4"],["5-8","5-8"],["9-12","9-12"],["13+","13+"]].map(([u,m])=>`<option value="${u}" ${ri(u,r.filters.strokes)}>${i(m)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="radicalFilter">${i(_("radical"))}</label>
            <select id="radicalFilter" data-filter="radical">
              ${l.map(u=>`<option value="${g(u)}" ${ri(u,r.filters.radical)}>${i(u==="all"?_("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="favoriteFilter">${i(_("favorites"))}</label>
            <select id="favoriteFilter" data-filter="favorites">
              <option value="all" ${ri("all",r.filters.favorites)}>${i(_("all"))}</option>
              <option value="yes" ${ri("yes",r.filters.favorites)}>★</option>
            </select>
          </div>
        </div>
        <div class="dictionary-grid" style="margin-top:12px">${n.map(bx).join("")||yx()}</div>
        ${s?`
          <div class="dictionary-load-more">
            <span>${i(c)}</span>
            <button class="btn primary" type="button" data-action="dictionary-load-more">${i(d)}</button>
          </div>
        `:""}
      </section>
    `}function wx(e){const t=r.filters.favorites==="yes",n=p()==="ru"?"Все кандзи":"All kanji",s=p()==="ru"?"Избранные":"Favorites";return`
      <div class="dictionary-tabs" role="tablist" aria-label="${g(_("dictionary"))}">
        <button class="btn ${t?"":"is-active"}" type="button" role="tab" aria-selected="${t?"false":"true"}" data-action="dictionary-favorites-tab" data-favorites="all">
          ${i(n)}
          <span class="dictionary-tab-count">${r.cards.length}</span>
        </button>
        <button class="btn ${t?"is-active":""}" type="button" role="tab" aria-selected="${t?"true":"false"}" data-action="dictionary-favorites-tab" data-favorites="yes">
          ★ ${i(s)}
          <span class="dictionary-tab-count">${e}</span>
        </button>
      </div>
    `}function bx(e){const t=J(e.id),n=Ua(e.id),s=!!r.progress.favorites[e.id];return`
      <button class="kanji-tile" type="button" data-action="open-card" data-id="${g(e.id)}">
        ${kx(e)}
        <div class="tag-row">
          ${Or(t.state)}
          <span class="pill">${i(e.jlpt)}</span>
          <span class="pill">${e.strokes} ${i(_("strokes"))}</span>
          <span class="pill">${i(_("radical"))}: ${i(n.radical||"-")}</span>
          <span class="pill">${i(_("learnedStatus"))}: ${i(Kh(t.state))}</span>
          <span class="pill">${s?"★":"☆"}</span>
        </div>
      </button>
    `}function kx(e){return`
      <span class="kanji-line">
        <span class="kanji-char">${i(e.kanji)}</span>
        <span>
          <h3>${i(K(e))}</h3>
          <p>${i(wd(e))}</p>
          <span class="label">${i(Pd(e.lessonId))}</span>
        </span>
      </span>
    `}function yx(){const e=r.filters.favorites==="yes",t=e?p()==="ru"?"В избранном пока пусто":"No favorites yet":p()==="ru"?"Ничего не найдено":"Nothing found",n=e?p()==="ru"?"Открой кандзи и нажми звездочку, чтобы он появился здесь.":"Open a kanji and tap the star to keep it here.":"";return`<article class="empty-state"><span class="kanji-char">無</span><h2>${i(t)}</h2>${n?`<p>${i(n)}</p>`:""}</article>`}function $x(){const e=r.kanjiPageId||OA(),t=oe(e);if(!t)return r.deferredDataLoaded?ia(he("hash","entity-not-found",FA(),ws(location.hash).segments)):(Ii({route:"kanji",delay:0,force:!0}),Kd());const n=J(t.id),s=Ua(t.id),a=!!r.progress.favorites[t.id],o=Dx(t,p()),l=jx(t),c=ad(t);return`
      <section class="page kanji-page">
        <div class="section-head kanji-page-head">
          <div>
            <button class="btn ghost" type="button" data-action="route" data-route="dictionary">← ${i(_("dictionary"))}</button>
            <h1>${i(l?`${t.kanji} — ${Sx(l)}`:t.kanji)}</h1>
            <p>${i(l?Cx(l):K(t))}</p>
          </div>
          <div class="actions">
            <button class="btn primary" type="button" data-action="study-card" data-id="${g(t.id)}">▶ ${i(_("study"))}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${g(t.id)}">${a?"★":"☆"} ${i(_("favorites"))}</button>
          </div>
        </div>

        <article class="kanji-profile-card">
          <div class="kanji-profile-hero">
            <div class="kanji-profile-char" aria-label="${g(t.kanji)}">${i(t.kanji)}</div>
            <div class="kanji-profile-summary">
              <div class="tag-row">
                ${Or(n.state)}
                <span class="pill">${i(t.jlpt)}</span>
                <span class="pill">${t.strokes} ${i(_("strokes"))}</span>
                <span class="pill">${i(_("radical"))}: ${i(s.radical||"-")} ${i(b(s.radicalMeaning||{}))}</span>
                ${l?`<span class="pill">Grade ${i(l.kanjidic2.grade||"-")}</span><span class="pill">Freq ${i(l.kanjidic2.freq||"-")}</span>`:""}
              </div>
              <h2>${i(K(t))}</h2>
              <p>${i(Ya(t))}</p>
              ${bo(t)}
              ${ed(t)}
            </div>
          </div>
        </article>

        <div class="kanji-profile-grid">
          ${l?xx(l):""}
          ${l?Nx(l):""}
          <article class="kanji-profile-card">
            <h2>${i(_("examples"))}</h2>
            <ul class="example-list">${t.examples.map(yo).join("")||`<li>${i(p()==="ru"?"Примеры пока не добавлены.":"No examples yet.")}</li>`}</ul>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(p()==="ru"?"Предложения":"Sentences")}</h2>
            ${l?Lx(l):_x(t)}
          </article>

          <article class="kanji-profile-card">
            <h2>${i(_("strokeOrder"))}</h2>
            <p class="label">${i(c?p()==="ru"?"Есть точные SVG-штрихи KanjiVG для практики.":"Precise KanjiVG SVG stroke data is available for practice.":p()==="ru"?"Точного SVG-пути пока нет, доступен полупрозрачный шаблон.":"Precise SVG paths are not available yet; template mode is available.")}</p>
            <ol class="stroke-list">${Fa(t).map(d=>`<li>${i(d)}</li>`).join("")}</ol>
            <div class="actions compact-actions">
              ${ko(t)}
            </div>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(_("apps"))}</h2>
            <p>${i(Ya(t))}</p>
            <ul class="app-list">${t.apps.map(d=>`<li>${i(d)}</li>`).join("")}</ul>
            ${l?Ix(l):""}
            <h3>${i(p()==="ru"?"SEO-страница":"SEO page")}</h3>
            <p class="label">${i(p()==="ru"?"Статическая HTML-страница для поисковиков и превью.":"Static HTML page for search engines and link previews.")}</p>
            <a class="btn primary" href="${g(o)}" target="_blank" rel="noopener">в†— ${i(p()==="ru"?"Публичная страница":"Public page")}</a>
          </article>
          ${l?Tx(l):""}
        </div>
      </section>
    `}function jx(e){return r.kanjiPageSources?.[e?.kanji]||null}function Sx(e){return yf(e.meanings)[0]||e.literal}function yf(e){return e?e[p()]||e.ru||e.en||[]:[]}function Ar(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function Cx(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{};return[t.why,t.firstSeen].filter(Boolean).join(" ")}function xx(e){const t=e.kanjidic2||{},n=t.codepoints?.unicode||`U+${t.codepoints?.ucs||""}`;return`
      <article class="kanji-profile-card kanji-facts-card">
        <h2>${i(p()==="ru"?"Факты KANJIDIC2":"KANJIDIC2 facts")}</h2>
        <dl class="kanji-fact-grid">
          <div><dt>${i(p()==="ru"?"Значения":"Meanings")}</dt><dd>${i(yf(e.meanings).join(", "))}</dd></div>
          <div><dt>Onyomi</dt><dd>${i((e.readings?.onyomi||[]).join(" / "))}</dd></div>
          <div><dt>Kunyomi</dt><dd>${i((e.readings?.kunyomi||[]).join(" / "))}</dd></div>
          <div><dt>JLPT</dt><dd>${i(e.jlpt)} <small>${i(Ar(e.modernJlptNote||{}))}</small></dd></div>
          <div><dt>${i(_("strokes"))}</dt><dd>${i(t.strokeCount||"-")}</dd></div>
          <div><dt>${i(_("radical"))}</dt><dd>${i(`${t.radical||"-"} ${t.radicalLiteral||""} ${Ar(t.radicalName||{})}`)}</dd></div>
          <div><dt>Grade</dt><dd>${i(t.grade||"-")}</dd></div>
          <div><dt>Unicode</dt><dd>${i(n)}</dd></div>
          <div><dt>Freq</dt><dd>${i(t.freq||"-")}</dd></div>
          <div><dt>${i(p()==="ru"?"Варианты":"Variants")}</dt><dd>${i((e.variants||[]).join(" / ")||"-")}</dd></div>
        </dl>
        <p class="source-note">${i(t.source||"KANJIDIC2 / EDRDG")}</p>
      </article>
    `}function Nx(e){return`
      <article class="kanji-profile-card">
        <h2>${i(p()==="ru"?"Полезные слова JMdict":"Useful JMdict words")}</h2>
        <ul class="kanji-word-list">
          ${(e.commonWords||[]).slice(0,10).map(t=>`
            <li>
              <a href="${g(Rx(t))}">
                <b>${Zc(t.surface,e.literal)}</b>
                <span>${i(t.reading)} · ${i(Ar(t.gloss||{}))}</span>
                <small>${i(t.partOfSpeech||"")} · JMdict ${i(t.jmdictSeq||"")}</small>
              </a>
            </li>
          `).join("")}
        </ul>
      </article>
    `}function Lx(e){return`
      <ul class="kanji-sentence-list">
        ${Ax(e).map(n=>`
          <li>
            <strong>${Zc(n.japanese,e.literal)}</strong>
            <small>${i(Ar(n.translation||{}))}</small>
            <span class="source-note">${i(`${n.sourceName||"Tatoeba"} #${n.sourceId}${n.author?` · ${n.author}`:""}${n.license?` · ${n.license}`:""}`)}</span>
          </li>
        `).join("")}
      </ul>
    `}function Ax(e){const t=new Set,n=new Set((e.commonWords||[]).map(s=>s.surface));return(e.sentences||[]).filter(s=>{const a=s.japanese||"";if(!a.includes(e.literal)||t.has(a))return!1;t.add(a);const o=a.replace(/[\s。、！？!?「」『』（）()・ー]/gu,"").length;return!(o<3||o>44)}).sort((s,a)=>Number($f(a.japanese,n))-Number($f(s.japanese,n))).slice(0,8)}function $f(e,t){return[...t].some(n=>e.includes(n))}function Ix(e){return`
      <h3>${i(p()==="ru"?"В интерфейсах":"In interfaces")}</h3>
      <div class="interface-mock-grid">
        ${(e.interfaceContexts||[]).slice(0,6).map(t=>`
          <article class="interface-mock-card ${g(t.type||"card")}">
            <span>${i(Ar(t.title||{}))}</span>
            <strong>${Zc(t.japanese,e.literal)}</strong>
            <small>${i(Ar(t.translation||{}))}</small>
          </article>
        `).join("")}
      </div>
    `}function Tx(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{},n=p()==="ru"?["Почему этот кандзи важен","Частая путаница","Где встретишь раньше всего","На что обратить внимание"]:["Why this kanji matters","Common confusion","Where you will meet it first","What to watch"],s=[t.why,t.confusion,t.firstSeen,t.focus];return`
      <article class="kanji-profile-card editorial-card">
        <h2>${i(p()==="ru"?"Заметки Flash Kanji":"Flash Kanji notes")}</h2>
        ${s.map((a,o)=>a?`<section><h3>${i(n[o])}</h3><p>${i(a)}</p></section>`:"").join("")}
      </article>
    `}function Rx(e){return`../word/${encodeURIComponent(e.surface||"")}/`}function Zc(e,t){const n=String(t||""),s=String(e||"");return n?s.split(n).map(i).join(`<mark class="kanji-hit" data-kanji="${g(n)}">${i(n)}</mark>`):i(s)}function _x(e){const t=Px(e);return t.length?`
      <ul class="kanji-sentence-list">
        ${t.map(n=>`
          <li>
            <strong>${Kx(n)}</strong>
            <span>${i(Ex(n))}</span>
            <small>${i(Mx(n))}</small>
          </li>
        `).join("")}
      </ul>
    `:`<p class="label">${i(p()==="ru"?"Подходящие предложения появятся, когда база практики содержит этот кандзи.":"Matching sentences will appear when the practice database contains this kanji.")}</p>`}function Px(e){const t=e?.kanji||"";return t?(r.sentenceExercises||[]).filter(n=>{const s=jf(n),a=(n.blanks||[]).flatMap(o=>o.answer||[]).join("");return s.includes(t)||a.includes(t)}).slice(0,6):[]}function jf(e){return e?.sentence||e?.jp||""}function Ex(e){return e?.reading||e?.hiragana||""}function Mx(e){return p()==="en"?e?.translationEn||e?.en||e?.translationRu||e?.ru||"":e?.translationRu||e?.ru||e?.translationEn||e?.en||""}function Kx(e){let t=i(jf(e));return(e?.blanks||[]).map(s=>(s.answer||[]).join("")).forEach(s=>{t=t.replace("___",`<mark>${i(s)}</mark>`)}),t}function Dx(e,t="ru"){return`../${t==="en"?"en":"ru"}/kanji/${Sf(e)}/`}function Sf(e){const t=String(e?.kanji||""),n=Array.from(t).map(o=>`u${o.codePointAt(0).toString(16).padStart(4,"0")}`).join("-"),a=(String(e?.romaji||e?.onyomi_romaji||e?.kunyomi_romaji||"kanji").toLowerCase().split(/[\/,;|()\s]+/).find(o=>/[a-z]/.test(o))||"kanji").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"kanji";return`${n||"kanji"}-${a}`}function Fx(){const e=oe(r.activeCardId)||ih()[0]||r.cards[0];e&&(r.activeCardId=e.id,r.activeLessonId=e.lessonId,r.writingStep=de(r.writingStep,0,Math.max(0,Qt(e)-1)));const t=ad(e),n=Qt(e),s=p()==="ru"?"Шаг":"Step",a=p()==="ru"?"Получилось":"Got it",o=p()==="ru"?"Показать образец":"Show sample",l=t?p()==="ru"?"Точные SVG-штрихи KanjiVG":"Precise KanjiVG SVG strokes":p()==="ru"?"Fallback: шаблон без фейковых штрихов":"Fallback: template without fake strokes";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("writingPractice"))}</h1>
            <p>${i(e?`${e.kanji} · ${K(e)}`:"")}</p>
          </div>
        </div>
        <div class="writing-layout">
          <article class="writing-card" data-section="writing-demo">
            <div class="kanji-focus writing-focus">${i(e?.kanji||"文")}</div>
            ${e?bo(e):""}
            ${e?`<div class="actions"><button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 ${i(_("audio"))}</button></div>`:""}
            <div class="stroke-demo">
              <canvas id="strokeCanvas" width="520" height="280" aria-label="stroke order animation"></canvas>
            </div>
            <div class="writing-step-panel">
              <div class="writing-step-head">
                <span class="pill" id="writingStepCounter">${s} ${r.writingStep+1}/${n}</span>
                <span class="label">${i(Fa(e)[r.writingStep]||"")}</span>
                <span class="writing-mode-note">${i(l)}</span>
              </div>
              <div class="writing-step-actions">
                <button class="btn" type="button" data-action="writing-step-prev">←</button>
                <button class="btn primary" type="button" data-action="play-writing-step">${i(o)}</button>
                <button class="btn" type="button" data-action="writing-step-next">→</button>
              </div>
            </div>
            <div class="actions">
              <button class="btn primary" type="button" data-action="replay-writing">${i(_("replay"))}</button>
            </div>
          </article>
          <article class="writing-card">
            <h3>${i(_("strokeOrder"))}</h3>
            ${e?Ox(e):""}
            <h3>${i(_("hint"))}</h3>
            <p>${i(No(e?.id).hint)}</p>
            <h3>${i(_("mnemonic"))}</h3>
            <p>${i(No(e?.id).mnemonic)}</p>
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
              <button class="btn" type="button" data-action="clear-writing">${i(_("clear"))}</button>
              <button class="btn" type="button" data-action="replay-writing">${i(_("replay"))}</button>
            </div>
            <div class="writing-feedback" id="writingFeedback">${i(p()==="ru"?"Напиши кандзи поверх образца и нажми «Получилось» для самопроверки.":"Write over the guide and tap 'Got it' for self-check.")}</div>
          </article>
        </div>
      </section>
    `}function Ox(e){return`
      <ol class="stroke-list writing-guide-list">
        ${Fa(e).map((n,s)=>`
          <li class="${s===r.writingStep?"is-active":""}">
            <button type="button" data-action="select-writing-step" data-index="${s}">
              <b>${s+1}</b>
              <span>${i(n)}</span>
            </button>
          </li>
        `).join("")}
      </ol>
    `}function Bx(){if(!r.detailCardId)return"";const e=oe(r.detailCardId);if(!e)return"";const t=J(e.id),n=Ua(e.id),s=!!r.progress.favorites[e.id];return`
      <div class="detail-backdrop">
        <article class="detail-sheet" role="dialog" aria-modal="true">
          <div class="detail-title">
            <span class="kanji-char">${i(e.kanji)}</span>
            <div>
              <span class="pill">${i(e.jlpt)}</span> ${Or(t.state)}
              <h2>${i(K(e))}</h2>
              <p>${i(wd(e))} · ${e.strokes} ${i(_("strokes"))}</p>
              <p><span class="pill">${i(_("radical"))}: ${i(n.radical||"-")} ${i(b(n.radicalMeaning||{}))}</span></p>
            </div>
          </div>
          ${bo(e)}
          ${ed(e)}
          <h3>${i(_("strokeOrder"))}</h3>
          <ol class="stroke-list">${e.stroke_order.map(a=>`<li>${i(a)}</li>`).join("")}</ol>
          <h3>${i(_("examples"))}</h3>
          <ul class="example-list">${e.examples.map(yo).join("")}</ul>
          <h3>${i(_("apps"))}</h3>
          <p>${i(Ya(e))}</p>
          <ul class="app-list">${e.apps.map(a=>`<li>${i(a)}</li>`).join("")}</ul>
          <div class="actions" style="margin-top:14px">
            <button class="btn primary" type="button" data-action="study-card" data-id="${g(e.id)}">▶ ${i(_("study"))}</button>
            <button class="btn" type="button" data-action="open-kanji-page" data-id="${g(e.id)}">↗ ${i(p()==="ru"?"Страница":"Page")}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${g(e.id)}">${s?"★":"☆"} ${i(_("favorites"))}</button>
            ${ko(e)}
            <button class="btn" type="button" data-action="close-detail">OK</button>
          </div>
        </article>
      </div>
    `}function ed(e){const t=bd(e),n=Pr(e);return`
      <section class="audio-panel">
        <h3>${i(_("audio"))}</h3>
        <div class="actions">
          ${t?`<button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 Kanji</button>`:""}
          ${zx(e,n)}
          ${!t&&!n.length?`<span class="label">${i(p()==="ru"?"Озвучка для этой карточки пока не найдена.":"Audio for this card is not available yet.")}</span>`:""}
        </div>
      </section>
    `}function zx(e,t=Pr(e)){return t.length?`
          <div class="reading-tts-list" aria-label="${g(p()==="ru"?"Системная озвучка чтений":"System reading TTS")}">
            ${t.map(n=>`
              <button class="btn ghost reading-tts-choice" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-text="${g(n.kana)}" data-tts-label="${g(td(n))}">
                <span>${i(td(n))}</span>
                ${i(n.kana)}
              </button>
            `).join("")}
          </div>
        `:""}function td(e){return e.kind==="onyomi"?Ao("onyomi"):e.kind==="kunyomi"?Ao("kunyomi"):e.label||"TTS"}function Ux(){const e=fd(),t=Pn(),n=Kn();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("stats"))}</h1>
            <p>${i(_("xp"))} · ${i(_("level"))} · ${i(_("coins"))}</p>
          </div>
          <div class="actions">
            ${ps("stats")}
            <button class="btn primary" type="button" data-action="route" data-route="achievements">✦ ${i(_("achievements"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${M(_("xp"),`${n.current}/${n.next}`,`${_("level")} ${r.progress.level}`,n.percent)}
          ${M(_("streak"),r.progress.streak.current,`${r.progress.streak.best} best`,E(r.progress.streak.current,30))}
          ${M(_("mastered"),e.mastered,`${e.total}`,E(e.mastered,e.total))}
          ${M(_("successRate"),`${oh()}%`,`${hd()} reviews`,oh())}
          ${M(_("errors"),t.mistakes||0,`${r.progress.totalWrong} total`,E(t.mistakes||0,Math.max(t.reviews||1,1)))}
        </div>
        <div class="stats-grid" style="margin-top:12px">
          <article class="chart-panel"><h3>${i(_("activity"))}</h3><div class="chart-box"><canvas id="activityChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("streak"))}</h3><div class="chart-box"><canvas id="streakChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("jlptProgress"))}</h3><div class="chart-box"><canvas id="jlptChart"></canvas></div></article>
          <article class="chart-panel"><h3>Повторение</h3><div class="chart-box"><canvas id="stateChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("errors"))}</h3><div class="chart-box"><canvas id="mistakeChart"></canvas></div></article>
          <article class="tool-panel">${Gx()}</article>
          ${r.bootAncillaryLoaded?`<article class="tool-panel" data-section="shop-panel">${Hx()}</article>`:`<article class="tool-panel" data-section="shop-panel-loading"><h3>${i(Hn().title)}</h3><p>${i(p()==="ru"?"Загружаю каталог кастомизации…":"Loading customization catalog…")}</p></article>`}
          <article class="tool-panel">${Nf()}</article>
          <article class="tool-panel">
            <h3>${i(_("settings"))}</h3>
            <div class="settings-list">
              <div class="settings-row">
                <span>
                  <strong>${i(Wn().badge)}</strong>
                  <small>${i(Wn().hint)}</small>
                </span>
                <span class="pill">${i(Wn().status)}</span>
              </div>
              <div class="settings-row">
                <span>
                  <strong>${i(p()==="ru"?"Звуки интерфейса":"UX sounds")}</strong>
                  <small>${i(p()==="ru"?"Клики, ответы, награды и уведомления.":"Clicks, answers, rewards, and in-app notices.")}</small>
                </span>
                <button class="btn ${Ko()?"success":"ghost"}" type="button" data-action="toggle-ux-sound">${Ko()?"On":"Off"}</button>
              </div>
              <div class="settings-row">
                <span>
                  <strong>${i(p()==="ru"?"Экскурсия":"Onboarding")}</strong>
                  <small>${i(p()==="ru"?"Повторить первое знакомство с Flash Kanji.":"Replay the first-time tour.")}</small>
                </span>
                <button class="btn ghost" type="button" data-action="repeat-onboarding">${i(p()==="ru"?"Повторить":"Repeat tour")}</button>
              </div>
              <label class="settings-row settings-row-range">
                <span>
                  <strong>${i(p()==="ru"?"Громкость UX":"UX volume")}</strong>
                  <small>${i(p()==="ru"?"Не влияет на озвучку кандзи и музыку.":"Does not affect kanji voice or music.")}</small>
                </span>
                <input class="ux-volume-slider" type="range" min="0" max="100" step="5" value="${Math.round(Do()*100)}" data-ux-volume />
                <strong class="volume-value" data-ux-volume-label>${Math.round(Do()*100)}%</strong>
              </label>
            </div>
            <div class="actions">
              <button class="btn primary" type="button" data-action="export">⬇ ${i(_("export"))}</button>
              <button class="btn" type="button" data-action="import">⬆ ${i(_("import"))}</button>
              <button class="btn danger" type="button" data-action="reset">↺ ${i(_("reset"))}</button>
            </div>
          </article>
        </div>
      </section>
    `}function Gs(){return r.achievements?.length?r.achievements:r.rewards?.achievements||[]}function Jx(){return r.achievementCategories?.length?r.achievementCategories:[...new Set(Gs().map(t=>t.category||"learning"))].map(t=>({id:t,title:{ru:t,en:t},icon:"moon"}))}function nd(e){return b(e.title||e.name||{ru:e.id,en:e.id})}function Cf(e){return b(e.description||{})}function sd(e){return{moon:"月",book:"文",memory:"記",flame:"火",star:"星",brush:"筆",text:"文",lock:"鍵",eye:"眼"}[e]||"✦"}function Gx(){return`<h3>${i(_("achievements"))}</h3><div class="achievement-grid compact">${Gs().slice(0,8).map(xf).join("")}</div>`}function qx(){const e=Gs(),t=JA(),n=e.reduce((s,a)=>({xp:s.xp+(a.rewardXp||0),coins:s.coins+(a.rewardFragments||0)}),{xp:0,coins:0});return`
      <section class="page achievements-page">
        <div class="section-head">
          <div>
            <h1>${i(_("achievements"))}</h1>
            <p>${i(p()==="ru"?"Лунные цели, секреты Евы и Леи, награды за прогресс.":"Moon goals, Eva and Leya secrets, and progress rewards.")}</p>
          </div>
          <div class="actions">
            ${ps("achievements")}
            <button class="btn" type="button" data-action="route" data-route="stats">▥ ${i(_("stats"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${M(_("achievements"),`${t}/${e.length}`,p()==="ru"?"открыто":"unlocked",E(t,e.length))}
          ${M("XP",n.xp,p()==="ru"?"в наградах":"in rewards",E(t,e.length))}
          ${M(_("coins"),n.coins,p()==="ru"?"в наградах":"in rewards",E(t,e.length))}
          ${M(p()==="ru"?"Секреты":"Secrets",`${e.filter(s=>s.secret&&Ur(s.id)).length}/${e.filter(s=>s.secret).length}`,"Eva · Leya",E(e.filter(s=>s.secret&&Ur(s.id)).length,Math.max(1,e.filter(s=>s.secret).length)))}
        </div>
        <div class="achievement-category-list">
          ${Jx().map(s=>{const a=e.filter(l=>l.category===s.id);if(!a.length)return"";const o=a.filter(l=>Ur(l.id)).length;return`
              <section class="achievement-category">
                <div class="section-head compact-head">
                  <div>
                    <h2>${sd(s.icon)} ${i(b(s.title))}</h2>
                    <p>${o}/${a.length}</p>
                  </div>
                  <span class="pill">${E(o,a.length)}%</span>
                </div>
                <div class="achievement-grid expanded">${a.map(l=>xf(l,!0)).join("")}</div>
              </section>
            `}).join("")}
        </div>
      </section>
    `}function xf(e,t=!1){const n=Ur(e.id),s=Df(e),a=Math.max(1,Number(e.target||1)),o=E(s,a),l=Math.min(s,a),c=e.secret&&!n&&!t?p()==="ru"?"Секретное достижение":"Secret achievement":nd(e),d=e.secret&&!n&&!t?p()==="ru"?"Откроется при необычном действии.":"Unlocked by an unusual action.":Cf(e);return`
      <div class="achievement ${n?"is-unlocked":""} ${e.secret?"is-secret":""}">
        <span class="achievement-icon">${sd(e.icon)}</span>
        <strong>${i(c)}</strong>
        <small>${i(d)}</small>
        <div class="achievement-progress" aria-label="${g(`${l}/${a}`)}"><i style="width:${o}%"></i></div>
        <small class="achievement-reward">+${e.rewardXp||0} XP · +${e.rewardFragments||0} ${i(_("coins"))}</small>
      </div>
    `}function Hx(){return pg({closable:!1})}function Nf(e={}){const t=e.limit||10,n=(r.progress.transactions||[]).slice(0,t);return`
      <h3>${i(_("transactions"))}</h3>
      <div class="transaction-list">
        ${n.map(s=>`
          <div class="transaction-row">
            <div>
              <strong>${i(Wx(s))}</strong>
              <small>${i(oA(s.at))}</small>
            </div>
            <span>${Number(s.coins||0)>=0?"+":""}${Number(s.coins||0)} Moon · ${Number(s.xp||0)>=0?"+":""}${Number(s.xp||0)} XP</span>
          </div>
        `).join("")||`<p>${i(p()==="ru"?"Пока нет операций.":"No transactions yet.")}</p>`}
      </div>
    `}function Wx(e){if(e.label)return e.label;const t=String(e.reason||""),n=t.match(/^customization:[^:]+:(.+)$/);if(n){const s=Se(n[1]);if(s)return Bt(s)}return t.startsWith("achievement:")?p()==="ru"?"Достижение":"Achievement":t.startsWith("daily_bonus")?p()==="ru"?"Ежедневный бонус":"Daily bonus":t.startsWith("sentence")?p()==="ru"?"Практика предложений":"Sentence practice":t.startsWith("writing")?p()==="ru"?"Практика письма":"Writing practice":t.startsWith("lesson")?p()==="ru"?"Урок":"Lesson":t.startsWith("review")?p()==="ru"?"Повторение":"Review":t.startsWith("shop:")?p()==="ru"?"Магазин":"Shop":p()==="ru"?"Операция":"Transaction"}function Vx(){if(!Rf())return"";const e=r.rewardModal,t=e.type==="level",n=e.type==="achievement",s=Kn(),a=t?`${_("level")} ${r.progress.level} - ${s.current}/${s.next} XP - ${r.progress.moonFragments} ${_("coins")}`:e.message;return`
      <div class="reward-backdrop ${t?"is-level":""}">
        <article class="reward-modal ${t?"is-level":""} ${n?"is-achievement":""}">
          ${t?'<img class="reward-logo" src="assets/logo.webp" alt="Flash Kanji" />':""}
          ${n?`<div class="reward-achievement-icon">${sd(e.icon)}</div>`:""}
          <div class="reward-modal-actions">
            ${t?`<button class="btn primary share-btn" type="button" data-action="share-achievement">${i(_("shareAchievement"))}</button>`:""}
            <button class="btn primary" type="button" data-action="close-reward">OK</button>
          </div>
          ${Rn(e.mascot||"eva",e.mood||"happy",e.dialog||"achievement","reward-mascot")}
          <h2>${i(e.title)}</h2>
          <p>${i(a)}</p>
          <div class="reward-values">
            ${t?`<span>${i(_("level"))} ${r.progress.level}</span>`:""}
            ${e.xp?`<span>+${e.xp} XP</span>`:""}
            ${t?`<span>${s.current}/${s.next} XP</span>`:""}
            ${e.coins?`<span>+${e.coins} ${i(_("coins"))}</span>`:""}
            ${t?`<span>${r.progress.moonFragments} ${i(_("coins"))}</span>`:""}
          </div>
        </article>
      </div>
    `}function Xx(){if(!r.contactModal)return"";const e=p()==="ru"?"Сообщить об ошибке":"Report a bug",t=p()==="ru"?"Если почтовое приложение не открывается, скопируй адрес и отправь сообщение вручную.":"If your mail app does not open, copy the address and send the message manually.",n=p()==="ru"?"Скопировать email":"Copy email",s=p()==="ru"?"Открыть почту":"Open email",a=p()==="ru"?"Закрыть":"Close",o=encodeURIComponent(er),l=encodeURIComponent(p()==="ru"?`Привет! Я нашел ошибку в Flash Kanji:

`:`Hi! I found an issue in Flash Kanji:

`),c=`mailto:${St}?subject=${o}&body=${l}`;return`
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
            <strong>${i(St)}</strong>
            <small>${i(p()==="ru"?"Для багов, багрепортов и ошибок интерфейса.":"For bugs, bug reports, and UI issues.")}</small>
          </div>
          <div class="actions contact-modal-actions">
            <button class="btn ghost" type="button" data-action="copy-contact-email">${i(n)}</button>
            <a class="btn primary" href="${g(c)}">${i(s)}</a>
            <button class="btn" type="button" data-action="close-contact-modal">${i(a)}</button>
          </div>
        </article>
      </div>
    `}function Qx(){const e=r.changelogModal;if(!e?.entry)return"";const t=e.entry,n=p(),s=b(t.title||{})||(n==="ru"?"Что нового во Flash Kanji":"What’s new in Flash Kanji"),a=Array.isArray(t.items?.[n])&&t.items[n].length?t.items[n]:t.items?.ru||t.items?.en||[],o=n==="ru"?"Мы обновили учебники и ускорили учебные действия. Это окно появится только один раз для этой версии.":"Textbooks were updated and study actions are faster. This window appears only once for this version.",l=n==="ru"?"Понятно":"Got it";return`
      <div class="reward-backdrop changelog-backdrop">
        <article class="reward-modal changelog-modal" role="dialog" aria-modal="true" aria-labelledby="changelogTitle" aria-describedby="changelogDescription">
          <div class="changelog-kicker">Flash Kanji · ${i(t.version||e.version||"")}</div>
          <h2 id="changelogTitle">${i(s)}</h2>
          ${t.date?`<p class="changelog-date">${i(t.date)}</p>`:""}
          <p id="changelogDescription">${i(o)}</p>
          <ul class="changelog-list">
            ${a.map(c=>`<li>${i(c)}</li>`).join("")}
          </ul>
          <p class="changelog-storage-note">${i(n==="ru"?`Статус хранится локально: ${Xo}, ${Qo}.`:`Saved locally: ${Xo}, ${Qo}.`)}</p>
          <div class="actions changelog-actions">
            <button class="btn primary" type="button" data-action="close-changelog">${i(l)}</button>
          </div>
        </article>
      </div>
    `}function Yx(){if(!r.pwaInstallHelpVisible)return"";const e=Br(),t=p()==="ru"?"Как установить приложение":"How to install the app",n=p()==="ru"?"Кнопка открыла подсказку, потому что браузер ещё не показал системное окно установки.":"The button opened a quick guide because the browser has not yet shown the system install prompt.",s=p()==="ru"?"Понятно":"Got it",a=e?p()==="ru"?["Открой Flash Kanji в Safari.","Нажми “Поделиться”, затем “На экран Домой”.","Подтверди установку."]:["Open Flash Kanji in Safari.","Tap Share, then choose Add to Home Screen.","Confirm the install."]:p()==="ru"?["Открой меню браузера.","Найди пункт “Установить приложение” или “Установить Flash Kanji”.","Подтверди установку."]:["Open the browser menu.","Choose Install app or Install Flash Kanji.","Confirm the install."];return`
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
    `}function Zx(){if(Yp()||r.pwaInstallHelpVisible||!Fd()||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal)return"";const e=Fh(),t=!$s&&Br();return`
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
    `}function eN(){if(Yp()||!r.notificationPromptVisible||!Bo("visible")||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal||r.pwaInstallHelpVisible||Fd())return"";const e=Gh();return`
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
    `}function tN(e,t,n){const s=Fr(e),a=$o(e,t,n),o=Tf(Ue(e,n));return`
      <article class="sidekick mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(a)}" alt="${g(b(s.name))}" />
        <div><strong>${i(b(s.name))}</strong><p>${i(o)}</p></div>
      </article>
    `}function Rn(e,t,n,s){const a=Fr(e),o=$o(e,t,n),l=Tf(Ue(e,n)),c=`${s||"mascot"}:${e}:${n}:${r.route}:${r.activeTextbookLevel||r.activeJlptLesson||""}`.toLowerCase();return Af(c)?`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(o)}" alt="${g(b(a.name))}" />
      </div>
    `:`
      <div class="${s} mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(o)}" alt="${g(b(a.name))}" />
        <div class="speech speech-dismissible" data-mascot-speech-key="${g(c)}" data-autohide-ms="7000">
          <button class="speech-close" type="button" data-action="dismiss-mascot-speech" data-speech-key="${g(c)}" aria-label="${g(p()==="ru"?"Закрыть облако":"Close speech bubble")}">✕</button>
          <span class="speech-text">${i(l)}</span>
        </div>
      </div>
    `}function Lf(){try{const e=sessionStorage.getItem(B);return e?JSON.parse(e)||{}:{}}catch{return{}}}function nN(e){try{sessionStorage.setItem(B,JSON.stringify(e||{}))}catch{}}function Af(e){return e?!!Lf()[e]:!1}function If(e){if(!e)return;const t=Lf();t[e]=Date.now(),nN(t);const n=Ss.get(e);n&&(clearTimeout(n),Ss.delete(e)),P()}function sN(){const e=new Set;fl("[data-mascot-speech-key][data-autohide-ms]").forEach(t=>{const n=String(t.dataset.mascotSpeechKey||"");if(!n||Af(n)||(e.add(n),Ss.has(n)))return;const s=Number(t.dataset.autohideMs||0);if(!s)return;const a=window.setTimeout(()=>{Ss.delete(n),If(n)},s);Ss.set(n,a)});for(const[t,n]of Ss)e.has(t)||(clearTimeout(n),Ss.delete(t))}function $o(e,t="normal",n="welcome"){if(e==="eva")return Ps(Ln(null,rN(t,n)));const s=Fr(e);return s.sprites?.[t]||Object.values(s.sprites||{})[0]||""}function rN(e="normal",t="welcome"){const n=String(t||"").toLowerCase(),s=String(e||"").toLowerCase(),a={welcome:"welcome",correct:"approve",wrong:"sad",progress:"observe",streakloss:"sad",lessoncomplete:"proud",masterymilestone:"proud",achievement:"achievement",goal:"reward",combo:"proud",hint:"think",dailybonus:"reward"},o={normal:"welcome",calm:"neutral",happy:"happy",proud:"proud",thinking:"think",focus:"think",sad:"sad",angry:"strict",shy:"shy"},l=o[s]&&!["normal","calm"].includes(s)?o[s]:null;return l&&(!n||n==="welcome")?l:a[n]||o[s]||s||"neutral"}function Tf(e){if(p()!=="ru")return e;const t="[А-Яа-яЁё]";return String(e||"").replace(new RegExp(`(^|\\s)(${t})\\s+(?=${t}{4,})`,"gu"),"$1$2 ")}function aN(e){const t=oe(r.activeCardId);if(!t||!Av[e])return;const n=Me();na(t,"srs_rating");const s=ie(J(t.id)),a=ke(s,e);r.progress.cards[t.id]=a,Xt(s,a,e),be();const o=Number(r.progress.correctCombo||0),l=ze(e)?"again":"ok";ze(e)?(r.progress.totalWrong+=1,r.progress.correctCombo=0,Ce({discipline:-.8,trust:-.2},"answer_again"),we("answer_wrong",{cardId:t.id,kanji:t.kanji,rating:e,comboLost:o>0}),G(Ue("eva","wrong"))):(H(r.rewards.rewards.correctXp,r.rewards.rewards.correctCoins,"review_success"),r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo),Ce({trust:.35,discipline:.25,curiosity:a.lastDecision==="Easy"?.2:0},`answer_${e}`),we("answer_correct",{cardId:t.id,kanji:t.kanji,rating:e,combo:r.progress.correctCombo}),G(Ue("eva","correct")),r.progress.correctCombo>0&&r.progress.correctCombo%5===0&&(H(r.rewards.rewards.comboXp,0,"combo_bonus"),bt({title:"Combo",message:Ue("leya","combo"),xp:r.rewards.rewards.comboXp,coins:0,mascot:"leya",mood:"proud",dialog:"combo"}))),r.reviewQueueLastKind="card",ud("kanji",e,{label:t.kanji,level:t.jlpt,dueAt:a.dueAt,state:a.state,cardId:t.id}),dd(`card:${t.id}`),r.revealed=!1,r.activeCardId=null,kt(),Eo("card"),je({scrollPolicy:re.TOP,viewportSnapshot:n}),T(),Dt("review card post-render effects",()=>{Io(),ei(l),pr(),pN(t.lessonId),rd({silent:!0}),Z()},{scrollPolicy:re.TOP,viewportSnapshot:n})}function Rf(){return!!(r.rewardModal&&r.route!=="review")}function _f(e,t,n){const s=fr(t,e);if(!s?.id||!ve(s.slug))return;const a=Me(),o=yt(s.slug),l=Jt(s.slug),c=ie(ot(l[s.id]||null)),d=ze(n)?"forgot":"remember",u=iv(c,d);l[s.id]=u,o.review=l,o.currentRoute="review",o.updatedAt=new Date().toISOString(),Xt(c,u,d),be({skipAchievements:!0});const m=Number(r.progress.correctCombo||0),h=d==="forgot"?"again":"ok";d==="forgot"?(r.progress.totalWrong+=1,r.progress.correctCombo=0,Ce({discipline:-.5,trust:-.1},"kana_answer_again"),we("answer_wrong",{cardId:s.id,kana:s.kana,rating:d,comboLost:m>0},{skipAchievements:!0}),G(Ue("eva","wrong"))):(r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo),Ce({trust:.25,discipline:.2,curiosity:.1},"kana_answer_remember"),we("answer_correct",{cardId:s.id,kana:s.kana,rating:d,combo:r.progress.correctCombo},{skipAchievements:!0}),G(Ue("eva","correct"))),r.reviewQueueLastKind="kana",ud("kana",d,{label:s.kana,course:zg(s.slug),dueAt:u.dueAt,state:u.state,cardId:s.id}),dd(s.id),r.revealed=!1,r.activeCardId=null,os(),kt(),Eo("kana"),je({scrollPolicy:re.TOP,viewportSnapshot:a}),T(),Dt("kana review post-render effects",()=>{Io(),ei(h),pr()},{scrollPolicy:re.TOP,viewportSnapshot:a})}function Ir(){return p()==="ru"?{forgot:"Не помню",remember:"Помню",forgotHint:"вернём быстро",rememberHint:"Повторение выберет срок"}:{forgot:"Forgot",remember:"Remember",forgotHint:"review soon",rememberHint:"review decides"}}function iN(e){const t=Ir(),n=J(e.id),s=oN(n,"remember"),a=$b(n,s);return`${t.rememberHint}: ${jb(kb(a))}`}function oN(e,t){if(ze(t))return"again";const n=e.state||"New",s=Number(e.reviewCount||0),a=Number(e.correct||0),o=Number(e.wrong||0),l=Number(e.lapses||0),c=Number(e.successRate||(s?a/Math.max(a+o,1)*100:0));return n==="New"?"good":n==="Learning"?c>=70||a>=2?"good":"hard":c>=88&&a>=5&&l<=1?"easy":c<70||l>Math.max(1,Math.floor(a/3))?"hard":"good"}function ze(e){return e==="forgot"||e==="again"}function Tr(e="",t="",n="",s={}){return{level:String(e||"").toUpperCase(),lessonId:String(s.lessonId||t||""),exerciseId:String(s.exerciseId||n||""),cardId:String(s.cardId||""),kanji:String(s.kanji||""),type:String(s.type||""),title:s.title||null,prompt:String(s.prompt||""),answer:String(s.answer||""),answerLabel:String(s.answerLabel||""),state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]}}function qs(e,t={}){const s={...Tr(t.level||"",t.lessonId||"",t.exerciseId||"",t),...ot(e||{})};return s.level=String(t.level||s.level||"").toUpperCase(),s.lessonId=String(t.lessonId||s.lessonId||""),s.exerciseId=String(t.exerciseId||s.exerciseId||""),s.cardId=String(t.cardId||s.cardId||""),s.kanji=String(t.kanji||s.kanji||""),s.type=String(t.type||s.type||""),s.title=t.title||s.title||null,s.prompt=String(t.prompt||s.prompt||""),s.answer=String(t.answer||s.answer||""),s.answerLabel=String(t.answerLabel||s.answerLabel||""),s.successRate=Dh(s),Number.isFinite(Number(s.srsStep))?s.srsStep=de(Math.trunc(Number(s.srsStep)),-1,63):s.srsStep=Vl(s),Pf(s)?s:Tr(s.level,s.lessonId,s.exerciseId,s)}function Pf(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.lastRating||Number(e.correct||0)>0||Number(e.wrong||0)>0||Array.isArray(e.history)&&e.history.length)}function _a(e,t,n){const s={...e||{}};return Object.entries(t||{}).forEach(([a,o])=>{s[a]=qs(o,{level:n,exerciseId:a,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""})}),s}function jo(e){const t=F(e);return t==="N5"?se():t==="N4"?Q():t==="N3"?V():t==="N2"?X():t==="N1"?ne():null}function Ef(e){const t=F(e);return t==="N5"?tt():t==="N4"?ut():t==="N3"?gt():t==="N2"?ft():t==="N1"?vt():[]}function lN(e,t){const n=F(e),s=String(t||"");return!n||!s?null:Ef(n).find(a=>a.id===s||a.id===`${n.toLowerCase()}-${s}`||a.id.endsWith(`-${s}`))||null}function cN(e){const t=F(e);return t==="N5"?Ds:t==="N4"?$a:t==="N3"?Sa:t==="N2"?xa:t==="N1"?Aa:null}function So(e,t,n=""){const s=cN(e),a=F(e),o=String(t||"");if(!s||!a||!o)return null;const l=Ef(a),c=n?lN(a,n):l.find(m=>o.startsWith(`${m.id}-`)),d=`${a}:${p()}`;let u=ju.get(d);(!u||u.lessons!==l||u.cards!==r.cards)&&(u={lessons:l,cards:r.cards,byLesson:new Map},ju.set(d,u));for(const m of c?[c]:l){u.byLesson.has(m.id)||u.byLesson.set(m.id,new Map(s(m).map(f=>[String(f.id),{...f,lessonId:m.id}])));const h=u.byLesson.get(m.id).get(o);if(h)return h}return null}function dN(e,t){const n=F(t);if(!e||!n)return!1;e.exerciseSrs||(e.exerciseSrs={});const s=new Set([...Object.keys(e.viewedLessons||{}),...Object.keys(e.completedLessons||{})]),a=new Set([...Object.keys(e.completedExercises||{}),...Object.keys(e.exerciseResults||{})]);let o=!1;return a.forEach(l=>{if(e.exerciseSrs[l])return;const c=So(n,l);if(!c||!s.has(String(c.lessonId||"")))return;const d=Tr(n,c.lessonId||"",c.id,c),u=e.exerciseResults?.[l]||null,m=!!e.completedExercises?.[l],h=ke(ie(d),m||u?.correct?"good":"again");h.level=n,h.lessonId=String(c.lessonId||h.lessonId||""),h.exerciseId=String(c.id||l||""),h.cardId=String(c.cardId||h.cardId||""),h.kanji=String(c.kanji||h.kanji||""),h.type=String(c.type||h.type||""),h.title=c.title||h.title||null,h.prompt=String(c.prompt||h.prompt||""),h.answer=String(c.answer||h.answer||""),h.answerLabel=String(c.answerLabel||h.answerLabel||""),e.exerciseSrs[l]=h,o=!0}),o}function uN(e,t){const n=F(t);if(!e||!n)return!1;e.exerciseSrs||(e.exerciseSrs={});const s=Object.entries(e.exerciseSrs);if(!s.length)return!1;let a=!1;return s.forEach(([o,l])=>{const c=So(n,o,l?.lessonId||"");if(!c)return;const d=qs(l,{level:n,lessonId:c.lessonId,exerciseId:c.id,cardId:c.cardId||"",kanji:c.kanji||"",type:c.type||"",title:c.title||null,prompt:c.prompt||"",answer:c.answer||"",answerLabel:c.answerLabel||""});JSON.stringify(l)!==JSON.stringify(d)&&(e.exerciseSrs[o]=d,a=!0)}),a}function pN(e){if(r.progress.lessonCompletions[e])return;const t=vd(e);if(!(t.length>0&&t.every(o=>J(o.id).state!=="New")))return;const s=r.rewards.rewards.lessonCompleteXp,a=r.rewards.rewards.lessonCompleteCoins;r.progress.lessonCompletions[e]=new Date().toISOString(),Kr("",e,"legacy-srs"),D("lesson_complete"),H(s,a,"lesson_completion"),Ce({warmth:2.4,trust:2,discipline:2.2,curiosity:.8},"lesson_completion"),we("lesson_complete",{lessonId:e,xp:s,coins:a}),bt({title:b({ru:"Урок завершён",en:"Lesson complete"}),message:Ue("eva","lessonComplete"),xp:s,coins:a,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),zo("lesson_complete")}function rd(e={}){const t=ce(),n=Pn();if(n.goalClaimed||n.reviews<r.progress.settings.dailyGoal)return;n.goalClaimed=!0;const s=r.rewards.rewards.comboXp,a=r.rewards.rewards.streakCoins;H(s,a,"daily_goal"),e.silent||bt({title:_("dailyGoal"),message:Ue("leya","goal"),xp:s,coins:a,mascot:"leya",mood:"happy",dialog:"goal"}),r.progress.daily[t]=n}function gN(){const e=Co(),t=ce();e.firstVisitDate||(e.firstVisitDate=t),e.lastVisitDate=t,r.progress.appOpens=Number(r.progress.appOpens||0)+1;const n=new Date().getHours();(n>=22||n<5)&&(r.progress.secrets.nightVisit=!0),Mf()}function Mf(){const e=r.progress.streak,t=yp(e.pendingReward);if(!t||ce()<t.availableOn)return!1;e.pendingReward=null;const n=r.rewards.rewards.streakCoins;return D("streak_reward"),H(0,n,`streak:${t.milestone}:claim`),bt({title:p()==="ru"?"Награда за стрик":"Streak reward",message:p()==="ru"?`Бонус за серию ${t.milestone} дней готов.`:`Your ${t.milestone}-day streak bonus is ready.`,xp:0,coins:n,mascot:"eva",mood:"achievement",dialog:"achievement"}),Z(),T(),!0}function mN(e){if(e==="eva"){r.progress.secrets.evaClicks=Number(r.progress.secrets.evaClicks||0)+1,Ce({warmth:.2,curiosity:.1},"eva_click"),G(Ue("eva","welcome")),Z(),T(),P();return}e==="leya"&&G(Ue("leya","combo"))}function Kf(){ge(),r.progress.secrets.evaClicks=Number(r.progress.secrets.evaClicks||0)+1,r.evaRuntime||(r.evaRuntime=cn()),r.evaRuntime.clickCount=Number(r.evaRuntime.clickCount||0)+1,we("user_clicked_eva",{clickCount:r.evaRuntime.clickCount}),Z(),D("notification_soft"),T(),P()}function fN(){if(Y.completed)return;Y.completed=!0,r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,Y.cardId&&(r.progress.writingPractice.cards[Y.cardId]=(r.progress.writingPractice.cards[Y.cardId]||0)+1),Ce({curiosity:1,discipline:.8,trust:.4},"writing_complete"),we("writing_complete",{cardId:Y.cardId}),me("writing_complete",{route:"writing",cardId:Y.cardId||"",source:"practice"});const e=Z();T(),e&&P()}function hN(){const e=ce();Co();const t=vN(),n=Ui(r.progress.dailyBonusPending);n&&n.availableOn>e||(n&&n.availableOn<=e&&!t&&(r.progress.dailyBonusPending=null),r.progress.dailyBonusPending={availableOn:Hh(e,1)},T())}function vN(){const e=ce(),t=Co(),n=Ui(r.progress.dailyBonusPending);if(!n||ce()<n.availableOn||r.progress.dailyBonuses[e]||t.lastDailyBonusDate===e)return!1;r.progress.dailyBonusPending=null;const s=t.lastDailyBonusDate||t.firstVisitDate||t.lastVisitDate;return wN(s,e),t.lastVisitDate=e,t.lastDailyBonusDate=e,r.progress.dailyBonuses[e]=new Date().toISOString(),D("daily_bonus"),H(r.rewards.rewards.dailyBonusXp,r.rewards.rewards.dailyBonusCoins,"daily_bonus"),Ce({warmth:1,discipline:.8},"daily_bonus"),bt({title:_("dailyBonus"),message:Ue("leya","welcome"),xp:r.rewards.rewards.dailyBonusXp,coins:r.rewards.rewards.dailyBonusCoins,mascot:"leya",mood:"calm",dialog:"welcome"}),Z(),zd(),!0}function Co(){var t;(t=r.progress).visits||(t.visits={});const e=r.progress.visits;return e.firstVisitDate||(e.firstVisitDate=null),e.lastVisitDate||(e.lastVisitDate=null),e.lastDailyBonusDate||(e.lastDailyBonusDate=null),e.streak=Number(e.streak||0),e.bestStreak=Number(e.bestStreak||0),e}function wN(e,t){const n=Co();n.streak=e&&fs(e,t)===1?n.streak+1:1,n.bestStreak=Math.max(n.bestStreak||0,n.streak);const s=r.progress.streak.lastStudyDate;s!==t&&(r.progress.streak.current=s&&fs(s,t)===1?r.progress.streak.current+1:1,r.progress.streak.lastStudyDate=t,r.progress.streak.best=Math.max(r.progress.streak.best||0,r.progress.streak.current),r.progress.streakHistory.push({date:t,value:r.progress.streak.current}),r.progress.streakHistory=r.progress.streakHistory.slice(-120))}function Z(e={}){if(!Gs().length)return 0;const t=!!e.silent;let n=0;return Gs().forEach(s=>{if(Ur(s.id)||!bN(s))return;n+=1;const a=s.rewardXp||0,o=s.rewardFragments||0;r.progress.achievements[s.id]={unlockedAt:new Date().toISOString(),rewardXp:a,rewardFragments:o},t||bt({type:"achievement",title:nd(s),message:Cf(s),xp:a,coins:o,icon:s.icon,mascot:"eva",mood:"happy",dialog:"achievement"}),H(a,o,`achievement:${s.id}`,{silent:t})}),n}function bN(e){return Df(e)>=Number(e.target||1)}function Df(e){if(e.kind==="lessonComplete")return Object.keys(r.progress.lessonCompletions).length;if(e.kind==="correct")return r.progress.totalCorrect;if(e.kind==="learned")return fd().learned;if(e.kind==="reviews")return hd();if(e.kind==="streak")return Math.max(r.progress.streak.current||0,r.progress.streak.best||0);if(e.kind==="level")return r.progress.level||1;if(e.kind==="moonFragments")return r.progress.totalMoonFragmentsEarned||0;if(e.kind==="writing")return r.progress.writingPractice?.completed||0;if(e.kind==="sentence")return Object.keys(r.progress.sentencePractice?.completed||{}).length;if(e.kind==="evaClicks")return r.progress.secrets?.evaClicks||0;if(e.kind==="nightVisit")return r.progress.secrets?.nightVisit?1:0;if(e.kind==="appOpens")return r.progress.appOpens||0;if(e.kind==="n5KanjiStudied")return Object.keys(se().studiedKanji||{}).length;if(e.kind==="n5LessonComplete"||e.kind==="n5LessonsComplete")return uo();if(e.kind==="n5Writing")return Object.keys(se().writingPractice||{}).length;if(e.kind==="n5SrsAll")return Object.keys(se().srsKanji||{}).length;if(e.kind==="n5FinalPass")return se().finalTest?.passed?1:0;if(e.kind==="n4Opened")return Q().opened?1:0;if(e.kind==="n4LessonComplete")return Object.keys(Q().completedLessons||{}).length;if(e.kind==="n4LessonsComplete")return Object.keys(Q().completedLessons||{}).length;if(e.kind==="n4SrsAll")return Object.keys(Q().srsKanji||{}).length;if(e.kind==="n4GrammarComplete")return Object.keys(Q().completedGrammar||{}).length;if(e.kind==="n4ReadingComplete")return Object.keys(Q().completedReading||{}).length;if(e.kind==="n4ListeningComplete")return Object.keys(Q().completedListening||{}).length;if(e.kind==="n4Writing")return Object.keys(Q().writingPractice||{}).length;if(e.kind==="n4FinalPass")return Q().finalTest?.passed?1:0;if(e.kind==="n3Opened")return V().opened?1:0;if(e.kind==="n3LessonComplete")return Object.keys(V().completedLessons||{}).length;if(e.kind==="n3LessonsComplete")return Object.keys(V().completedLessons||{}).length;if(e.kind==="n3SrsAll")return Object.keys(V().srsKanji||{}).length;if(e.kind==="n3GrammarComplete")return Object.keys(V().completedGrammar||{}).length;if(e.kind==="n3ReadingComplete")return Object.keys(V().completedReading||{}).length;if(e.kind==="n3ListeningComplete")return Object.keys(V().completedListening||{}).length;if(e.kind==="n3Writing")return Object.keys(V().writingPractice||{}).length;if(e.kind==="n3ComprehensionAnswers")return Object.values(V().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n3FinalPass")return V().finalTest?.passed?1:0;if(e.kind==="n2Opened")return X().opened?1:0;if(e.kind==="n2LessonComplete")return Object.keys(X().completedLessons||{}).length;if(e.kind==="n2LessonsComplete")return Object.keys(X().completedLessons||{}).length;if(e.kind==="n2SrsAll")return Object.keys(X().srsKanji||{}).length;if(e.kind==="n2GrammarComplete")return Object.keys(X().completedGrammar||{}).length;if(e.kind==="n2ReadingComplete")return Object.keys(X().completedReading||{}).length;if(e.kind==="n2ListeningComplete")return Object.keys(X().completedListening||{}).length;if(e.kind==="n2Writing")return Object.keys(X().writingPractice||{}).length;if(e.kind==="n2ComprehensionAnswers")return Object.values(X().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n2FinalPass")return X().finalTest?.passed?1:0;if(e.kind==="shopComplete"){const t=Be().filter(n=>!n.defaultOwned&&n.price>0);return t.length&&t.every(n=>Ut(n.id))?1:0}if(e.kind==="jlpt"){const t=r.cards.filter(n=>n.jlpt===e.jlpt);return t.length>0&&t.every(n=>J(n.id).state==="Mastered")?1:0}return 0}function bt(e){if(!(e?.type==="achievement"&&nh())){if(!r.rewardModal){r.rewardModal=e,Ff(e);return}if(e.type==="level"){r.rewardQueue.unshift(e);return}r.rewardQueue.push(e)}}function Ff(e){if(hA(),e?.type==="achievement"){Xa()?D("achievement_unlock"):Ko()&&fA();return}if(e?.type==="level"){D("level_up");return}((e?.xp||0)>0||(e?.coins||0)>0)&&D("notification_reward")}function H(e,t,n="reward",s={}){const a=!!s.silent,o=r.progress.level||Po(r.progress.xp);r.progress.xp+=e,r.progress.moonFragments+=t;const l=kN(n);if(!a&&!l&&e>0&&D("xp_gain"),!a&&!l&&t>0&&D("moon_fragment_gain"),t>0&&(r.progress.totalMoonFragmentsEarned=Number(r.progress.totalMoonFragmentsEarned||0)+t),r.progress.level=Po(r.progress.xp),(e||t)&&(r.progress.transactions.unshift({at:new Date().toISOString(),reason:n,xp:e,coins:t,balance:r.progress.moonFragments}),r.progress.transactions=r.progress.transactions.slice(0,80)),r.progress.level>o){if(a)return;D("level_up"),we("level_up",{level:r.progress.level,xp:r.progress.xp,moonFragments:r.progress.moonFragments});const c=Kn();bt({type:"level",title:_("levelUp"),message:`${_("level")} ${r.progress.level} - ${c.current}/${c.next} XP - ${r.progress.moonFragments} ${_("coins")}`,xp:0,coins:0,mascot:r.progress.level%2===0?"leya":"eva",mood:"happy",dialog:"achievement",level:r.progress.level,totalXp:r.progress.xp,moonFragments:r.progress.moonFragments})}}function kN(e){return["learn","review"].includes(r.route)&&["review_success","combo_bonus"].includes(e)}function Xt(e,t,n){const s=Pn();s.reviews+=1,e.state==="New"&&t.state!=="New"&&(s.learned+=1),e.state!=="Mastered"&&t.state==="Mastered"&&(s.mastered+=1),ze(n)&&(s.mistakes+=1),s.minutes=Jo(s.reviews*.75+s.learned*1.25,1),r.progress.daily[ce()]=s}function be(e={}){Mf();const t=ce(),n=r.progress.streak.lastStudyDate;if(n===t)return;const s=!!(n&&fs(n,t)>1&&r.progress.streak.current>0);r.progress.streak.current=n&&fs(n,t)===1?r.progress.streak.current+1:1,r.progress.streak.lastStudyDate=t,r.progress.streak.best=Math.max(r.progress.streak.best,r.progress.streak.current),r.progress.streakHistory.push({date:t,value:r.progress.streak.current}),r.progress.streakHistory=r.progress.streakHistory.slice(-120),Ce(s?{discipline:-3.5,trust:-1.4,warmth:-.8}:{discipline:1.4,trust:.8,warmth:.4},s?"streak_lost":"study_streak"),s&&G(Ue("eva","streakLoss")),[1,7,30,100].includes(r.progress.streak.current)&&(r.progress.streak.pendingReward={milestone:r.progress.streak.current,availableOn:Hh(t,1)}),we("streak_up",{streak:r.progress.streak.current,lost:s},{skipAchievements:!!e.skipAchievements}),T()}function Of(){if(r.route!=="stats")return;if(!window.Chart){Vv().then(()=>{r.route==="stats"&&Of()}).catch(a=>console.warn("Chart.js failed to load.",a));return}const e=KA(10),t=e.map(a=>a.slice(5)),n=uA(),s=pA(n);Pa("activityChart",{type:"bar",data:{labels:t,datasets:[{label:_("learned"),data:e.map(a=>r.progress.daily[a]?.learned||0),backgroundColor:n.green},{label:_("review"),data:e.map(a=>r.progress.daily[a]?.reviews||0),backgroundColor:n.red}]},options:s}),Pa("jlptChart",{type:"bar",data:{labels:Object.keys(ch()),datasets:[{label:_("mastered"),data:Object.values(ch()),backgroundColor:n.yellow}]},options:s}),Pa("streakChart",{type:"line",data:{labels:t,datasets:[{label:_("streak"),data:e.map(a=>r.progress.streakHistory.find(o=>o.date===a)?.value||(r.progress.daily[a]?.reviews?1:0)),borderColor:n.blue,backgroundColor:n.blueSoft,fill:!0,tension:.35}]},options:s}),Pa("stateChart",{type:"doughnut",data:{labels:Object.keys(lh()),datasets:[{data:Object.values(lh()),backgroundColor:[n.blue,n.yellow,n.green,n.pink],borderColor:n.line}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:n.text}}}}}),Pa("mistakeChart",{type:"line",data:{labels:t,datasets:[{label:_("errors"),data:e.map(a=>r.progress.daily[a]?.mistakes||0),borderColor:n.danger,backgroundColor:n.dangerSoft,fill:!0,tension:.35}]},options:s})}function Pa(e,t){const n=document.getElementById(e);n&&r.charts.push(new Chart(n,t))}function yN(){const e=ls();e&&(r.activeCardId=e.id,r.activeLessonId=e.lessonId,r.writingStep=de(r.writingStep,0,Math.max(0,Qt(e)-1)),Y.cardId!==String(e.id)&&$N(e)),jN(),Ma(),xo(),Oa(Ea(!1)),window.setTimeout(zf,120)}function ls(){return oe(r.activeCardId)||ih()[0]||r.cards[0]||null}function $N(e){Y.cardId=String(e?.id||""),Y.strokes=[],Y.currentStroke=[],Y.drawing=!1,Y.activePointerId=null,Y.completed=!1}function jN(){const e=document.getElementById("practiceCanvas");if(!e)return;Rr();const t=a=>{a.pointerType==="mouse"&&a.button!==0||(a.preventDefault(),e.setPointerCapture?.(a.pointerId),Y.drawing=!0,Y.activePointerId=a.pointerId,Y.currentStroke=[Bf(e,a)],Y.completed=!1,Rr())},n=a=>{if(!Y.drawing||a.pointerId!==Y.activePointerId)return;a.preventDefault();const o=Bf(e,a),l=Y.currentStroke[Y.currentStroke.length-1];(!l||Xf(l,o)>1.4)&&(Y.currentStroke.push(o),Rr())},s=a=>{if(!Y.drawing||a.pointerId!==Y.activePointerId)return;a.preventDefault();const o=SN(Y.currentStroke);o.length&&Y.strokes.push(o),Y.currentStroke=[],Y.drawing=!1,Y.activePointerId=null,Rr(),Oa(Ea(!1))};e.onpointerdown=t,e.onpointermove=n,e.onpointerup=s,e.onpointercancel=s,e.onpointerleave=s,e.oncontextmenu=a=>a.preventDefault()}function Bf(e,t){const n=e.getBoundingClientRect();return{x:de((t.clientX-n.left)*(e.width/n.width),0,e.width),y:de((t.clientY-n.top)*(e.height/n.height),0,e.height),pressure:t.pressure||.5,time:performance.now()}}function SN(e){if(!e.length)return[];const t=[e[0]];return e.slice(1).forEach(n=>{Xf(t[t.length-1],n)>=2.6&&t.push(n)}),t.length===1?[t[0],{...t[0],x:t[0].x+.1,y:t[0].y+.1}]:t}function Rr(){const e=document.getElementById("practiceCanvas");if(!e)return;const t=e.getContext("2d"),n=ls();Vf(t,e),n&&LN(t,e,n),Y.strokes.forEach((s,a)=>Wf(t,s,{color:getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),width:13,shadow:a===Y.strokes.length-1})),Y.currentStroke.length&&Wf(t,Y.currentStroke,{color:getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),width:13,shadow:!0})}function CN(){Y.strokes=[],Y.currentStroke=[],Y.drawing=!1,Y.completed=!1,Rr(),Oa(Ea(!1))}function xN(){Y.strokes.pop(),Y.currentStroke=[],Y.completed=!1,Rr(),Oa(Ea(!1))}function NN(e=!1){const t=Ea(!0);Oa(t),e&&(ei(t.success?"good":"again"),G(t.message),t.success&&fN())}function Ea(e){const t=document.getElementById("practiceCanvas"),n=ls(),s=Qt(n);if(!t||!n)return{score:0,success:!1,expectedCount:s,message:""};const a=Y.strokes;if(!a.length)return{score:0,success:!1,expectedCount:s,message:p()==="ru"?"Начни с первой черты.":"Start with the first stroke."};const o=de(Math.round(Math.min(a.length,s)/s*100),0,100),l=e?100:o,c=!!(e&&a.length);let d=p()==="ru"?`Черты: ${a.length}/${s}. Самопроверка без распознавания.`:`Strokes: ${a.length}/${s}. Self-check without recognition.`;return!e&&a.length<s?d=p()==="ru"?`Черта ${a.length+1}/${s}: продолжай по образцу.`:`Stroke ${a.length+1}/${s}: keep following the guide.`:!e&&a.length>s?d=p()==="ru"?`Черты: ${a.length}/${s}. Если лишняя линия случайная, нажми «Отменить черту».`:`Strokes: ${a.length}/${s}. If one was accidental, tap "Undo stroke".`:e&&(d=ad(n)?p()==="ru"?"Записано. Сравни с жёлтым порядком KanjiVG и двигайся дальше.":"Saved. Compare it with the yellow KanjiVG order and move on.":p()==="ru"?"Записано. Для этого кандзи пока есть только шаблон, без точной схемы штрихов.":"Saved. This kanji currently has a template only, without exact stroke paths."),{score:l,success:c,expectedCount:s,message:d}}function zf(){const e=document.getElementById("strokeCanvas"),t=ls();if(!e||!t)return;cancelAnimationFrame(Y.demoAnimationId);const n=Qt(t),s=460,a=performance.now(),o=l=>{const c=l-a,d=de(Math.floor(c/s),0,n-1),u=de((c-d*s)/s,0,1);r.writingStep=d,Ma(d,u),xo(),c<n*s?Y.demoAnimationId=requestAnimationFrame(o):(r.writingStep=n-1,Ma(r.writingStep,1),xo())};Y.demoAnimationId=requestAnimationFrame(o)}function Uf(){const e=document.getElementById("strokeCanvas"),t=ls();if(!e||!t)return;cancelAnimationFrame(Y.demoAnimationId);const n=performance.now(),s=520,a=de(r.writingStep,0,Math.max(0,Qt(t)-1)),o=l=>{const c=de((l-n)/s,0,1);Ma(a,c),c<1&&(Y.demoAnimationId=requestAnimationFrame(o))};Y.demoAnimationId=requestAnimationFrame(o)}function Jf(e){Gf(r.writingStep+e,!1)}function Gf(e,t){const n=ls();n&&(r.writingStep=de(e,0,Math.max(0,Qt(n)-1)),xo(),t?Uf():Ma(r.writingStep,1))}function xo(){const e=ls();if(!e)return;const t=Fa(e),n=p()==="ru"?"Шаг":"Step",s=document.getElementById("writingStepCounter");s&&(s.textContent=`${n} ${r.writingStep+1}/${Qt(e)}`);const a=document.querySelector(".writing-step-head .label");a&&(a.textContent=t[r.writingStep]||""),fl(".writing-guide-list li").forEach((o,l)=>o.classList.toggle("is-active",l===r.writingStep))}function Ma(e=r.writingStep,t=1){const n=document.getElementById("strokeCanvas"),s=ls();if(!n||!s)return;const a=n.getContext("2d");Vf(a,n);const o=Ka(s);if(!o){Hf(a,n,s,e);return}qf(a,n,o,{activeIndex:e,progress:t,showFuture:!0,guideAlpha:1,showNumbers:!0})}function LN(e,t,n){const s=Ka(n);if(!s){Hf(e,t,n,r.writingStep);return}qf(e,t,s,{activeIndex:r.writingStep,progress:1,showFuture:!0,guideAlpha:.24,showNumbers:!1})}function Ka(e){if(!e?.kanji)return null;const t=r.kanjiStrokes?.[e.kanji];return t?.strokeOrder?.length?t:null}function ad(e){return!!Ka(e)}function Qt(e){const t=Ka(e);return Math.max(1,t?.strokeOrder?.length||Number(e?.strokes||1))}function Da(){const e=getComputedStyle(document.documentElement),t=n=>e.getPropertyValue(n).trim();return{paper:t("--writing-paper")||t("--surface")||"#ffffff",border:t("--writing-paper-border")||t("--line")||"#d0d5dd",grid:t("--writing-grid")||t("--line")||"#d0d5dd",gridStrong:t("--writing-grid-strong")||t("--line-strong")||"#98a2b3",ink:t("--writing-ink")||t("--text")||"#111014",guide:t("--writing-guide")||t("--muted")||"#5f6670",templateOpacity:Number(t("--writing-template-opacity")||"0.16")||.16}}function qf(e,t,n,s={}){const a=de(Number(s.activeIndex||0),0,Math.max(0,n.strokeOrder.length-1)),o=AN(n,t,s.padding||22),l=Da(),c=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim(),d=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),u=l.guide;n.strokeOrder.forEach((m,h)=>{const f=h<a,S=h===a;h>a&&!s.showFuture||(e.save(),e.translate(o.x,o.y),e.scale(o.scale,o.scale),e.lineCap="round",e.lineJoin="round",e.strokeStyle=S?d:f?c:u,e.lineWidth=(S?8:5.5)/o.scale,e.globalAlpha=Number(s.guideAlpha??1)*(S?1:f?.86:.24),S&&s.progress<1&&(e.globalAlpha*=.45+de(s.progress,0,1)*.55),S&&(e.shadowColor="rgba(248, 216, 74, 0.34)",e.shadowBlur=13/o.scale),e.stroke(new Path2D(m.path)),e.restore(),s.showNumbers&&TN(e,m,o,h+1,S))})}function AN(e,t,n=22){const s=IN(e.viewBox),a=Math.min((t.width-n*2)/s.width,(t.height-n*2)/s.height),o=(t.width-s.width*a)/2-s.x*a,l=(t.height-s.height*a)/2-s.y*a;return{...s,scale:a,x:o,y:l}}function IN(e){const t=String(e||"0 0 109 109").trim().split(/\s+/).map(Number),[n=0,s=0,a=109,o=109]=t;return{x:n,y:s,width:Math.max(1,a),height:Math.max(1,o)}}function TN(e,t,n,s,a){const o=RN(t.path);if(!o)return;const l=n.x+o.x*n.scale,c=n.y+o.y*n.scale;_N(e,l,c,s,a)}function RN(e){const t=String(e||"").match(/M\s*(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/i);return t?{x:Number(t[1]),y:Number(t[2])}:null}function _N(e,t,n,s,a){e.save(),e.fillStyle=a?getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim():getComputedStyle(document.documentElement).getPropertyValue("--surface-2").trim(),e.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue("--line-strong").trim(),e.lineWidth=1,e.beginPath(),e.arc(t,n,a?13:10,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=a?"#111014":getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),e.font="800 12px system-ui",e.textAlign="center",e.textBaseline="middle",e.fillText(String(s),t,n+.5),e.restore()}function Hf(e,t,n,s=0){const a=Da(),o=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim();e.save(),e.globalAlpha=a.templateOpacity,e.fillStyle=a.ink,e.font=`900 ${Math.floor(t.height*.7)}px "Noto Sans JP", "Yu Gothic", serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(n?.kanji||"文",t.width/2,t.height/2+t.height*.04),e.globalAlpha=1,e.fillStyle=o,e.font="800 15px system-ui",e.textAlign="left",e.textBaseline="top";const l=p()==="ru"?`Шаг ${s+1}/${Qt(n)} · точной схемы пока нет`:`Step ${s+1}/${Qt(n)} · exact paths not available yet`;e.fillText(l,18,16),e.restore()}function Wf(e,t,n={}){const s=t.map(MN).filter(Boolean);if(!e||!s.length)return;const a=Da();if(e.save(),e.strokeStyle=n.color||a.ink,e.lineWidth=n.width||12,e.lineCap="round",e.lineJoin="round",e.imageSmoothingEnabled=!0,n.shadow&&(e.shadowColor="rgba(255, 48, 92, 0.36)",e.shadowBlur=12),e.beginPath(),e.moveTo(s[0].x,s[0].y),s.length===1){e.arc(s[0].x,s[0].y,e.lineWidth/2,0,Math.PI*2),e.fillStyle=e.strokeStyle,e.fill(),e.restore();return}if(s.length===2)e.lineTo(s[1].x,s[1].y);else{for(let l=1;l<s.length-1;l+=1){const c=KN(s[l],s[l+1]);e.quadraticCurveTo(s[l].x,s[l].y,c.x,c.y)}const o=s[s.length-1];e.lineTo(o.x,o.y)}e.stroke(),e.restore()}function Vf(e,t){if(!e||!t)return;const n=Da();e.clearRect(0,0,t.width,t.height),e.fillStyle=n.paper,e.fillRect(0,0,t.width,t.height),PN(e,t)}function PN(e,t){const n=Da();e.save(),e.strokeStyle=n.grid,e.lineWidth=1,e.setLineDash([8,8]),e.beginPath(),e.moveTo(t.width/2,0),e.lineTo(t.width/2,t.height),e.moveTo(0,t.height/2),e.lineTo(t.width,t.height/2),e.moveTo(0,0),e.lineTo(t.width,t.height),e.moveTo(t.width,0),e.lineTo(0,t.height),e.stroke(),e.setLineDash([]),e.strokeStyle=n.gridStrong,e.strokeRect(.5,.5,t.width-1,t.height-1),e.restore()}function Fa(e){const t=Ka(e);if(t?.strokeOrder?.length)return t.strokeOrder.map((s,a)=>p()==="ru"?s.description_ru||`Штрих ${a+1} по данным KanjiVG`:s.description_en||`Stroke ${a+1} from KanjiVG data`);const n=Array.isArray(e?.stroke_order)?e.stroke_order:[];return Array.from({length:Qt(e)},(s,a)=>n[a]||EN(e,a))}function EN(e,t){return p()!=="ru"?`Step ${t+1}: exact stroke paths are not available yet. Use the translucent ${e?.kanji||"kanji"} template.`:`Шаг ${t+1}: для этого кандзи пока нет точной схемы штрихов. Обводи полупрозрачный шаблон ${e?.kanji||""}.`}function Oa(e){const t=document.getElementById("writingStrokeCounter");t&&(t.textContent=`${Y.strokes.length}/${e.expectedCount}`);const n=document.getElementById("writingScore");n&&(n.querySelector("span").textContent=`${e.score}%`,n.querySelector("i").style.width=`${e.score}%`);const s=document.getElementById("writingFeedback");s&&(s.textContent=e.message,s.classList.toggle("is-good",e.success),s.classList.toggle("is-warning",!e.success&&e.score>0))}function MN(e){return e?Array.isArray(e)?{x:e[0],y:e[1]}:{x:e.x,y:e.y}:null}function KN(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function Xf(e,t){return Math.hypot((e?.x||0)-(t?.x||0),(e?.y||0)-(t?.y||0))}function DN(){r.charts.forEach(e=>e.destroy()),r.charts=[]}function FN(e,t){const n=new Date;return r.cards.filter(s=>!e||s.lessonId===e).filter(s=>{const a=r.lessons.find(l=>l.id===s.lessonId);if(a&&!Ge(a))return!1;const o=J(s.id);return o.state==="New"?!0:o.dueAt&&new Date(o.dueAt)<=n}).sort(md)}function ON(){const e=new Date;return gd().filter(t=>{const n=r.progress.cards[String(t.id)];return!n||n.state==="New"?!1:n.dueAt&&new Date(n.dueAt)<=e}).sort(md)}function BN(){const e=Date.now(),t=[];return fe.forEach(n=>{const s=jo(n);Object.entries(s?.exerciseSrs||{}).forEach(([a,o])=>{const l=qs(o,{level:n,exerciseId:a,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""});if(!pd(l,e)||!Pf(l))return;const c=So(n,a,l.lessonId||"");if(!c)return;const d=String(c?.lessonId||l.lessonId||"");if(!hL(n,d))return;const u=new Date(l.dueAt).getTime();!u||u>e||t.push({kind:"exercise",source:"textbook",key:`exercise:${String(n).toUpperCase()}:${a}`,level:String(n||"").toUpperCase(),exerciseId:a,lessonId:d,cardId:String(l.cardId||""),dueAt:u,progress:l})})}),t.sort(za)}function id(){const e=[r.cards,r.n5Reading,r.n4Reading,r.n3Reading,r.n2Reading,r.n1Reading,r.jlptReadingByLevel,r.jlptReadingTranslations,r.kanjiTranslations,p()];if(ki&&e.every((s,a)=>s===ki.sources[a]))return ki.items;const t=[];r.n5Reading.forEach(s=>{s?.id&&t.push(s)}),[["N4",r.n4Reading],["N3",r.n3Reading],["N2",r.n2Reading],["N1",r.n1Reading]].forEach(([s,a])=>{(Array.isArray(a)?a:[]).forEach(o=>{(o.questions||[]).forEach((l,c)=>{const d={id:String(l.id||`${o.id}:${c}`),prompt:l.prompt||{ru:"",en:""},answer:String(l.answer||""),options:Lw(l.options)};t.push({id:String(l.id||`${o.id}:${c}`),level:String(o.level||s||"").toUpperCase(),kind:"question",sourceKind:String(o.kind||"reading"),sourceId:String(o.id||""),sourceTitle:o.title||{ru:o.id||"",en:o.id||""},title:o.title||{ru:o.id||"",en:o.id||""},jp:String(o.jp||""),reading:String(o.reading||""),translationRu:String(o.ru||""),translationEn:String(o.en||""),passageSource:String(o.source||""),questionIndex:c,question:d,questions:[d]})})})});const n=[...t,...V$()];return ki={sources:e,items:n},n}function Qf(e,t=""){const n=String(e||""),s=String(t||"").toUpperCase(),a=id();return a.find(o=>String(o.id||"")===n&&(!s||String(o.level||"").toUpperCase()===s))||a.find(o=>String(o.id||"")===n)||null}function Yf(e){const t=Array.isArray(e?.questions)?e.questions[0]||null:e?.question||null;return{level:String(e?.level||"").toUpperCase(),lessonId:String(e?.sourceId||""),exerciseId:String(e?.id||""),type:String(e?.kind||""),title:e?.sourceTitle||e?.title||null,prompt:String(e?.kind==="question"?b(t?.prompt||{}):e?.sentence||e?.jp||""),answer:String(e?.kind==="question"?t?.answer||"":Vt(e).map(n=>n.kanji).join("")),answerLabel:String(e?.kind==="question"?t?.answer||"":Vt(e).map(n=>n.kanji).join(""))}}function od(e){return 1}function cs(e){const t=Yf(e);return{...Tr(t.level,t.lessonId,t.exerciseId,t),sourceId:String(e?.sourceId||""),sourceKind:String(e?.sourceKind||""),sourceTitle:e?.sourceTitle||null,exerciseKind:String(e?.kind||""),questionCount:od(),answers:{},selectedIndices:[],selectedTiles:[],selectedText:"",wrongIndexes:[],wrongQuestions:[],completed:!1,completedAt:null}}function Ba(e,t){const n=cs(t),s=qs({...n,...e||{}},Yf(t));return s.sourceId=String(t?.sourceId||s.sourceId||""),s.sourceKind=String(t?.sourceKind||s.sourceKind||""),s.sourceTitle=t?.sourceTitle||s.sourceTitle||null,s.exerciseKind=String(t?.kind||s.exerciseKind||""),s.questionCount=od(),s.answers=s.answers&&typeof s.answers=="object"&&!Array.isArray(s.answers)?{...s.answers}:{},s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.map(a=>Number(a)).filter(a=>Number.isInteger(a)&&a>=0):[],s.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(a=>({kanji:String(a?.kanji||""),reading:String(a?.reading||"")})).filter(a=>a.kanji):[],s.selectedText=String(s.selectedText||""),s.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.map(a=>Number(a)).filter(a=>Number.isInteger(a)&&a>=0):[],s.wrongQuestions=Array.isArray(s.wrongQuestions)?s.wrongQuestions.map(a=>String(a)).filter(Boolean):[],s.completed=!!s.completed,s.completedAt=s.completedAt||null,s}function _n(e){var s;if(!e?.id)return null;(s=r.progress).readingExercises||(s.readingExercises={});const t=r.progress.readingExercises[String(e.id)]||null;if(t){const a=Ba(t,e);return r.progress.readingExercises[String(e.id)]=a,a}const n=cs(e);return r.progress.readingExercises[String(e.id)]=n,n}function Hs(e,t){var s;if(!e?.id)return null;(s=r.progress).readingExercises||(s.readingExercises={});const n=Ba(t||{},e);return r.progress.readingExercises[String(e.id)]=n,n}function Zf(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.completedAt||e.completed||e.answers&&typeof e.answers=="object"&&Object.keys(e.answers).length||Array.isArray(e.selectedIndices)&&e.selectedIndices.length||Array.isArray(e.selectedTiles)&&e.selectedTiles.length||String(e.selectedText||"").trim())}function _r(e=""){var a;if(!r.progress)return!1;const t=F(e);if((a=r.progress).readingExercises||(a.readingExercises={}),!Object.keys(r.progress.readingExercises).length)return!1;const n=new Map(id().filter(o=>!t||F(o.level)===t).map(o=>[String(o.id),o]));let s=!1;return Object.entries(r.progress.readingExercises).forEach(([o,l])=>{const c=n.get(String(o));if(!c)return;const d=Ba(l,c),u=Zf(d)?d:cs(c);JSON.stringify(l)!==JSON.stringify(u)&&(r.progress.readingExercises[String(o)]=u,s=!0)}),s}function zN(){const e=Date.now();return Object.values(r.progress.readingExercises||{}).some(t=>pd(t,e))?id().map(t=>{if(!vL(t.level))return null;const n=r.progress.readingExercises?.[String(t.id)]||null;if(!n)return null;const s=Ba(n,t);if(r.progress.readingExercises[String(t.id)]=s,!Zf(s)||!pd(s,e))return null;const a=s.dueAt?new Date(s.dueAt).getTime():0;return!a||a>e?null:{kind:"exercise",source:"reading",key:`reading:${String(t.level||"").toUpperCase()}:${t.id}`,level:String(t.level||"").toUpperCase(),exerciseId:String(t.id||""),lessonId:String(t.sourceId||""),cardId:"",dueAt:a,progress:s,exercise:t,card:null}}).filter(Boolean).sort(za):[]}function UN(){const e=Date.now();return["hiragana","katakana"].flatMap(t=>{if(!ve(t))return[];const n=Jt(t),s=Object.entries(n).map(([a,o])=>({cardId:a,...ot(o)}));return eu(s,e).map(a=>{const o=fr(a.cardId,t);if(!o?.id||o.slug!==t)return null;const l=ga(t,o.kana);return Vc({kind:"kana",key:o.id,courseSlug:t,cardId:o.id,kana:o.kana,romaji:l?.romaji||"",strokes:l?.strokes||0,character:l,progress:a,dueAt:a.dueAt?Date.parse(a.dueAt):0})}).filter(Boolean)}).sort(za)}function JN(){const t=[...ON().map(s=>{if(!s?.id)return null;const a=J(s.id);return{kind:"card",key:`card:${s.id}`,card:s,cardId:String(s.id),dueAt:a.dueAt?new Date(a.dueAt).getTime():0,progress:a}}).filter(Boolean),...UN()].sort(za),n=[...BN(),...zN()].sort(za);return Qc(yb(t,n,Wl))}function ld(){if(!Pe||Pe.progress!==r.progress||r.route!=="review"&&Date.now()>=Pe.expiresAt){const e=JN();Pe={progress:r.progress,items:new Map(e.map(t=>[t.key,t])),expiresAt:Date.now()+3e4},cd()}return[...Pe.items.values()]}function cd(){if(window.clearTimeout(vu),!r.progress)return;const e=[r.progress.cards,r.progress.readingExercises,...fe.map(s=>r.progress[`${s.toLowerCase()}Course`]?.exerciseSrs),...["hiragana","katakana"].map(s=>r.progress.kanaCourses?.courses?.[s]?.review)],t=Date.now();let n=1/0;for(const s of e)for(const a of Object.values(s||{})){const o=Date.parse(a?.dueAt||"");a?.state!=="New"&&o>t&&(n=Math.min(n,o))}Number.isFinite(n)&&(vu=window.setTimeout(eh,Math.min(2147483647,n-t)))}function eh(){Pe=null,Zl(),cd(),(r.route==="home"||r.route==="review")&&P()}function th(e=ld()){const t=tv(e.map(n=>({cardId:n.key,state:n.progress.state,dueAt:new Date(n.dueAt).toISOString(),kind:n.kind,item:n})));r.reviewSession={session:t,initialSize:t.initial.length,startedAt:new Date().toISOString(),learningLater:sh(),totalCards:ah(),results:{remember:0,forgot:0,items:[]}}}function dd(e){if(r.route!=="review"||!r.reviewSession)return!1;const t=String(e||"").trim();if(!t)return!1;const n=r.reviewSession.session,s=n.remainingCount;return n.complete(t),Pe?.items.delete(t),Wr=null,n.remainingCount<s}function nh(){return r.route!=="review"?!1:r.reviewSession?r.reviewSession.session.remainingCount>0:!!(r.activeCardId||r.activeExerciseReviewId)}function GN(){return r.route!=="review"?ld():(r.reviewSession||th(),r.reviewSession.session.remaining.map(e=>e.item))}function ud(e,t,n={}){if(r.route!=="review"||!r.reviewSession)return;const s=ze(t)?"forgot":"remember",a=r.reviewSession.results||{remember:0,forgot:0,items:[]};a.remember=Number(a.remember||0),a.forgot=Number(a.forgot||0),a[s]+=1,a.items=Array.isArray(a.items)?a.items:[],a.items.push({kind:e,rating:s,label:String(n.label||n.kana||n.kanji||n.cardId||""),course:String(n.course||n.level||""),dueAt:n.dueAt||null,state:n.state||null}),r.reviewSession.results=a}function sh(){if(r.route==="review"&&r.reviewSession)return r.reviewSession.learningLater+r.reviewSession.results.items.filter(a=>a.state==="Learning").length;if(an&&vi!==null)return vi;const e=Date.now(),t=gd().filter(a=>{const o=J(a.id),l=o.dueAt?new Date(o.dueAt).getTime():0;return o.state==="Learning"&&l>e}).length,n=rh().filter(a=>{const o=a.dueAt?new Date(a.dueAt).getTime():0;return a.state==="Learning"&&o>e}).length,s=t+n;return an&&(vi=s),s}function rh(){return["hiragana","katakana"].flatMap(e=>ve(e)?Object.entries(Jt(e)).filter(([t])=>{const n=fr(t,e);return n?.slug===e&&ga(e,n.kana)}).map(([,t])=>t):[])}function ah(){if(r.route==="review"&&r.reviewSession)return r.reviewSession.totalCards;if(an&&wi!==null)return wi;const e=gd().filter(t=>J(t.id).state!=="New").length+rh().filter(t=>t.state!=="New").length;return an&&(wi=e),e}function Qe(){if(an&&Wr!==null)return Wr;(!Pe||Pe.progress!==r.progress||r.route!=="review"&&Date.now()>=Pe.expiresAt)&&ld();const e=Pe.items.size;return an&&(Wr=e),e}function pd(e,t=Date.now()){if(!e||typeof e!="object"||e.state==="New")return!1;const n=e.dueAt?new Date(e.dueAt).getTime():0;return!!(n&&n<=t)}function za(e,t){if(e.dueAt!==t.dueAt)return e.dueAt-t.dueAt;const n=e.kind==="card"&&e.card?.id?J(e.card.id):e.progress,s=t.kind==="card"&&t.card?.id?J(t.card.id):t.progress,a=qi(n),o=qi(s);if(a!==o)return o-a;if(e.kind!==t.kind){const l=e.kind==="card"||e.kind==="kana",c=t.kind==="card"||t.kind==="kana";return l!==c?l?-1:1:String(e.kind||"").localeCompare(String(t.kind||""))}return e.kind==="card"&&t.kind==="card"?Number(e.card?.id||0)-Number(t.card?.id||0):String(e.key||"").localeCompare(String(t.key||""))}function gd(){if(an&&bi)return bi;const e=new Set,t=[];fe.forEach(s=>{Nh(s).forEach(a=>{const o=String(a?.id||"");!o||e.has(o)||(e.add(o),t.push(a))})});const n=t;return an&&(bi=n),n}function ih(){const e=qh();return r.cards.filter(t=>{const n=r.lessons.find(a=>a.id===t.lessonId);if(n&&!Ge(n))return!1;const s=J(t.id);return s.state==="New"||s.dueAt&&new Date(s.dueAt)<=e}).sort(md)}function md(e,t){const n=J(e.id),s=J(t.id),a=n.dueAt?new Date(n.dueAt).getTime():0,o=s.dueAt?new Date(s.dueAt).getTime():0;if(a!==o)return a-o;if(a>0){const l=qi(n),c=qi(s);if(l!==c)return c-l}return Number(e.id)-Number(t.id)}function qN(){const e=r.filters.query.trim().toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return r.cards.filter(t=>{const n=Ua(t.id),s=[t.kanji,K(t),t.meaning_ru,t.hiragana,t.romaji,t.onyomi,t.onyomi_romaji,t.kunyomi,t.kunyomi_romaji,wd(t),t.jlpt,Pd(t.lessonId),Ya(t),n.radical,b(n.radicalMeaning||{}),...t.apps,...t.examples.flatMap(a=>[a.word,a.reading,a.romaji,a.translation,gs(a)])].join(" ").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return(!e||s.includes(e))&&(r.filters.jlpt==="all"||t.jlpt===r.filters.jlpt)&&(r.filters.radical==="all"||n.radical===r.filters.radical)&&(r.filters.favorites==="all"||!!r.progress.favorites[t.id])&&HN(t.strokes,r.filters.strokes)})}function HN(e,t){if(t==="all")return!0;if(t==="13+")return e>=13;const[n,s]=t.split("-").map(Number);return e>=n&&e<=s}function fd(){const e=r.cards.length;let t=0,n=0,s=0;const a=qh(),o=new Map(r.lessons.map(l=>[l.id,l]));for(const l of r.cards){const c=J(l.id);c.state!=="New"&&t++,c.state==="Mastered"&&n++;const d=o.get(l.lessonId);d&&!Ge(d)||(c.state==="New"||c.dueAt&&new Date(c.dueAt)<=a)&&s++}return{total:e,learned:t,mastered:n,todayCards:s,completion:E(n,e)}}function hd(){return z1(r.progress.cards,ku)}function WN(){return(r.progress.transactions||[]).reduce((e,t)=>e+Math.max(0,Number(t.coins||0)),0)}function oh(){const e=r.progress.totalCorrect+r.progress.totalWrong;return e?Math.round(r.progress.totalCorrect/e*100):0}function lh(){const e={New:0,Learning:0,Review:0,Mastered:0};return r.cards.forEach(t=>{e[J(t.id).state]+=1}),e}function ch(){const e={};return r.cards.forEach(t=>{var n;e[n=t.jlpt]||(e[n]=0),J(t.id).state==="Mastered"&&(e[t.jlpt]+=1)}),e}function Pn(){const e=ce();return r.progress.daily[e]||(r.progress.daily[e]={learned:0,reviews:0,mastered:0,mistakes:0,minutes:0,goalClaimed:!1}),r.progress.daily[e]}function vd(e){return r.cards.filter(t=>t.lessonId===e)}function VN(){return r.cards.filter(e=>{const t=r.lessons.find(n=>n.id===e.lessonId);return(!t||Ge(t))&&J(e.id).state==="New"})}function oe(e){const t=String(e||"");if(!t)return null;if(!Et||Et.source!==r.cards||Et.size!==r.cards.length){const n=new Map;for(const s of r.cards)for(const a of[String(s.id),String(s.kanji||"")])n.has(a)||n.set(a,s);Et={source:r.cards,size:r.cards.length,index:n,slugs:null}}if(Et.index.has(t))return Et.index.get(t);if(!/^u[0-9a-f]+-/i.test(t))return null;if(!Et.slugs){Et.slugs=new Map;for(const n of r.cards){const s=Sf(n);Et.slugs.has(s)||Et.slugs.set(s,n)}}return Et.slugs.get(t)||null}function XN(e){return oe(e)}function QN(e){const t=String(e||"").trim();return t?/^\d+$/.test(t)||/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(t)?!0:/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(t):!1}function Ua(e){return r.kanjiMeta[String(e)]||{}}function No(e){const t=r.kanjiHints[String(e)]||{};return{hint:b(t.hint||{})||Ue("leya","hint"),mnemonic:b(t.mnemonic||{})||""}}function YN(e){e&&(r.progress.favorites[e]?delete r.progress.favorites[e]:r.progress.favorites[e]=new Date().toISOString(),T(),P())}function kt(e=null){r.readingCheck={cardId:e?String(e):null,value:"",status:null,message:""}}function ZN(e){const t=String(e||"");r.readingCheck.cardId!==t&&kt(t)}function dh(){const e=oe(r.readingCheck.cardId||r.activeCardId);if(!e)return;sa(e,"reading_check"),Io();const t=tL(r.readingCheck.value),n=eL(e),s=t.some(c=>n.normalized.has(c)),a=t.length>0,o=a&&s?"correct":"wrong",l=a?s?p()==="ru"?"Верно. Это чтение есть у карточки.":"Correct. This reading belongs to the card.":p()==="ru"?"Почти. Попробуй другое онъёми или кунъёми.":"Almost. Try another on'yomi or kun'yomi.":p()==="ru"?"Сначала напиши чтение хираганой или катаканой.":"Type a reading in hiragana or katakana first.";r.readingCheck={cardId:e.id,value:r.readingCheck.value,status:o,message:l},D(o==="correct"?"answer_correct":"answer_wrong"),Xe(),requestAnimationFrame(()=>{const c=document.getElementById(`readingCheck-${e.id}`);c&&(c.focus(),"setSelectionRange"in c&&c.setSelectionRange(c.value.length,c.value.length))})}function eL(e){const t=Ja(e),n=[...ds(t.onyomi.kana),...ds(t.kunyomi.kana),...ds(e.hiragana)].filter(Boolean),s=n.filter((a,o)=>n.indexOf(a)===o);return{normalized:new Set(s.map(uh).filter(Boolean))}}function tL(e){return String(e||"").split(/[\/,、，\s]+/u).map(uh).filter(Boolean)}function uh(e){const t=ph(String(e||"").normalize("NFKC")).replace(/[・･.\-]/gu,"").replace(/\s+/gu,"");return nL(t).trim()}function ph(e){return[...String(e||"")].map(t=>{const n=t.charCodeAt(0);return n>=12449&&n<=12534?String.fromCharCode(n-96):t}).join("")}function nL(e){let t="";for(const n of String(e||"")){if(n==="ー"){t+=sL(t.slice(-1));continue}t+=n}return t}function sL(e){return"あかさたなはまやらわがざだばぱゃぁ".includes(e)?"あ":"いきしちにひみりぎじぢびぴぃ".includes(e)?"い":"うくすつぬふむゆるぐずづぶぷゅぅ".includes(e)?"う":"えけせてねへめれげぜでべぺぇ".includes(e)?"え":"おこそとのほもよろをごぞどぼぽょぉ".includes(e)?"お":""}function gh(e){if(!e)return null;const t=String(e.jlpt||"").toUpperCase();let n=null;return t==="N5"?n=r.n5KanjiCatalog:t==="N4"?n=r.n4KanjiCatalog:t==="N3"?n=r.n3KanjiCatalog:t==="N2"&&(n=r.n2KanjiCatalog),!n||!Array.isArray(n)?null:n.find(s=>s&&s.kanji===e.kanji)||null}const mh={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",ゐ:"i",ゑ:"e",を:"o",ん:"n",ゔ:"vu"},fh={きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ふぁ:"fa",ふぃ:"fi",ふぇ:"fe",ふぉ:"fo",しぇ:"she",じぇ:"je",ちぇ:"che",てぃ:"ti",でぃ:"di",とぅ:"tu",どぅ:"du",つぁ:"tsa",つぃ:"tsi",つぇ:"tse",つぉ:"tso",うぃ:"wi",うぇ:"we",うぉ:"wo",ゔぁ:"va",ゔぃ:"vi",ゔぇ:"ve",ゔぉ:"vo"};function Ja(e){const t=gh(e);if(t&&t.readings){const a=t.readings,o=Lo(a.onyomi,a.onyomi_romaji||e?.onyomi_romaji,e?.onyomi),l=Lo(a.kunyomi,a.kunyomi_romaji||e?.kunyomi_romaji,e?.kunyomi);if(o.kana||l.kana)return{onyomi:o,kunyomi:l}}const n=Lo(e?.onyomi,e?.onyomi_romaji),s=Lo(e?.kunyomi,e?.kunyomi_romaji);return n.kana||s.kana||n.romaji||s.romaji?{onyomi:n,kunyomi:s}:{onyomi:{kana:"",romaji:""},kunyomi:{kana:"",romaji:""}}}function ds(e){return(Array.isArray(e)?e.join(" / "):String(e||"")).split(/[\/／,，、・･;；]+/u).map(n=>n.trim()).filter(Boolean)}function Lo(e,t="",n=""){const s=ds(e).length?ds(e):ds(n),a=ds(t),o=s.map((l,c)=>({kana:ee(l),romaji:rL(l,a[c])})).filter(l=>l.kana||l.romaji);return{kana:o.map(l=>l.kana).filter(Boolean).join(" / "),romaji:o.map(l=>l.romaji).filter(Boolean).join(" / ")}}function rL(e,t){const n=hh(e);return n?t&&vh(t)===vh(n)?t:n:t||""}function hh(e){const t=[...aL(e)];let n="",s=!1;for(let a=0;a<t.length;a+=1){const o=t[a],l=t[a+1]||"";if(o==="っ"){s=!0;continue}if(o==="ー"){const u=iL(n);u&&(n+=u);continue}let c="";const d=o+l;if(fh[d])c=fh[d],a+=1;else if(mh[o])c=mh[o];else if(/[a-zA-Z0-9]/u.test(o))c=o.toLowerCase();else{s=!1;continue}if(s){const u=c.match(/^[bcdfghjklmnpqrstvwxyz]/u)?.[0]||"";u&&u!=="n"&&(n+=u),s=!1}n+=c}return n}function aL(e){return ph(String(e||"").normalize("NFKC")).replace(/[()\[\]{}]/gu,"").replace(/[.\-‐-―\s]/gu,"").trim()}function iL(e){return String(e||"").match(/[aeiou](?!.*[aeiou])/u)?.[0]||""}function vh(e){return String(e||"").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/gu,"").replace(/[^a-z0-9]+/gu,"")}function wh(e){return e==="onyomi"?p()==="ru"?"Онъёми":"On'yomi":p()==="ru"?"Кунъёми":"Kun'yomi"}function Ao(e){return e==="onyomi"?p()==="ru"?"Он":"On":p()==="ru"?"Кун":"Kun"}function wd(e){const t=Ja(e);return[`${Ao("onyomi")}: ${t.onyomi.kana||"—"} (${t.onyomi.romaji||"—"})`,`${Ao("kunyomi")}: ${t.kunyomi.kana||"—"} (${t.kunyomi.romaji||"—"})`].join(" · ")}function bd(e){if(!e)return"";const t=e.audioSrc||e.audio||"";return kh(t)||bh(e)}function bh(e){if(!e?.id||!e?.jlpt||!e?.lessonId)return"";const t=oL(e.romaji);return t?`./audio/kanji/${String(e.jlpt).toLowerCase()}/${e.lessonId}/${e.id}-${t}.mp3`:""}function kh(e){return e?e.startsWith("./")||e.startsWith("http")?e:e.startsWith("/")?`.${e}`:`./${e}`:""}function oL(e){return String(e||"").split("/")[0].trim().toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function lL(e){return!!(bd(e)||kd(e))}function kd(e){if(!e)return"";const t=Ja(e);return t.onyomi.kana||t.kunyomi.kana||e.hiragana||e.kanji||""}function cL(e){const t=Ja(e);return{kanji:e?.kanji||"",onyomi:t.onyomi.kana,kunyomi:t.kunyomi.kana,hiragana:e?.hiragana||""}}function Pr(e,t=""){const n=nI(cL(e));return!t||t==="cycle"?n:n.filter(s=>s.kind===t)}function dL(e){return Pr(e).length>0}function uL(e){return ds(e)[0]||String(e||"").trim()}function yd(){if(r.route!=="learn"&&r.route!=="review")return;const e=560-(Date.now()-qr);if(e>0){window.setTimeout(yd,e);return}const t=oe(r.activeCardId);if(!t)return;const n=Pr(t).map(o=>`${o.kind}:${o.kana}`).join("|")||kd(t),s=kh(t?.audioSrc||t?.audio||"");if(!n&&!s)return;const a=`${r.route}:${t.id}:${n||s}`;a!==gu&&(gu=a,yh(t,{silent:!0}))}function Io(){mi+=1,Pt="idle",To(),jd()}function $d(){return mi+=1,mi}function at(e){return e===mi}function jd(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}function To(){rn&&(rn.pause(),rn.currentTime=0,rn=null)}function yh(e,t={}){const n=$d();let s=null;const a=()=>at(n)?(s||(s=$h(e,{...t,requestId:n})),s):Promise.resolve(!1);return jh(e,{kind:"cycle",silent:t.silent,fallback:a,requestId:n})?Promise.resolve(!0):a()}function $h(e,t={}){const n=t.requestId||$d();if(!at(n))return Promise.resolve(!1);const s=bd(e);if(!s||(jd(),To(),!at(n)))return Promise.resolve(!1);Pt="audio";const a=new Audio(s);return rn=a,a.preload="auto",a.onended=()=>{rn===a&&(rn=null,at(n)&&(Pt="idle"))},a.onerror=()=>{at(n)&&(t.silent||console.warn("Kanji audio file could not be loaded.",{id:e?.id,audio:s}))},a.play().then(()=>at(n)&&rn===a).catch(o=>(at(n)&&(rn===a&&(rn=null,Pt="idle"),t.silent||console.warn("Kanji audio playback was blocked or failed.",{id:e?.id,audio:s,error:o})),!1))}function jh(e,t={}){const n=t.requestId||$d();To(),Pt="tts-pending";let s=null;const a=typeof t.fallback=="function"?()=>at(n)?(s||(s=t.fallback({...t,requestId:n})),s):Promise.resolve(!1):null,o=ee(t.text||""),l=t.kind||"cycle",c=`${e?.id||e?.kanji||"kanji"}:${l}`,d=Pr(e);let u=null;if(!o){const C=sI(d,mu.get(c)??-1,l);u=C.item,mu.set(c,C.cursor)}const m=o||u?.kana||uL(kd(e));let h=!1;if(!rv(m,{onStart:()=>{if(!at(n)||Pt==="audio"){jd();return}h=!0,Pt="tts",To()},onEnd:()=>{at(n)&&Pt==="tts"&&(Pt="idle")},onError:C=>{!at(n)||h||Pt==="audio"||(t.silent||console.warn("System kanji TTS failed; trying prepared audio fallback.",{id:e?.id,error:C}),a?.())}}))return at(n)&&a?.(),!a&&at(n)&&(Pt="idle"),!a&&!t.silent&&console.warn("Kanji audio is not available for this card.",{id:e?.id,expected:bh(e)}),!1;if(!at(n))return!1;const S=t.label||(u?td(u):"TTS");return t.silent||G(`${e?.kanji||""} ${S}: ${m}`.trim()),!0}function pL(e,t){G(e?`${t}: ${e}`:`${t}: ${p()==="ru"?"аудио пока не добавлено":"audio not added yet"}`)}function Ge(e){return!!e}function Ro(e){return r.rewards?.lessonUnlocks?.[e?.id]||1}function Sh(e){if(!e||!Ge(e))return"locked";const t=vd(e.id);return t.length?!!r.progress.lessonCompletions?.[e.id]||t.every(a=>{const o=J(a.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"completed":t.some(a=>{const o=J(a.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"started":"new":"new"}function Sd(e){return e==="completed"?"is-completed":e==="started"?"is-started":""}function Cd(e){const t=p()==="ru";return e==="completed"?t?"Урок пройден":"Lesson completed":e==="started"?t?"Урок начат":"Lesson started":t?"Не начат":"Not started"}function gL(e){return e!=="completed"&&e!=="started"?"":`<span class="lesson-status-dot" aria-label="${g(Cd(e))}"></span>`}function mL(e){return e!=="completed"&&e!=="started"?"":`<span class="pill lesson-status-pill ${Sd(e)}">${i(Cd(e))}</span>`}function En(e){const t=String(e||"").toUpperCase();return r.jlptLessons.find(n=>n.jlpt===t)||null}function It(e){const t=String(e||"").toUpperCase();return r.jlptCatalog?.items?.find(n=>n.jlpt===t)||null}function Ga(e){const t=String(e||"").toLowerCase();return r.kanaCatalog?.courses?.find(n=>n.slug===t)||null}function vn(e){const t=String(e||"").toLowerCase();return r.kanaCourses?.[t]||null}function us(){var e;return(e=r.progress).kanaCourses||(e.kanaCourses=Vd(null)),r.progress.kanaCourses}function yt(e){return oI(us(),e)}function _o(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim();if(!ve(n)||!s)return;const a=yt(n),o=new Date().toISOString();let l=!1;a.currentRoute!==s&&(a.currentRoute=s,l=!0),a.updatedAt||(a.updatedAt=o,l=!0),l&&T()}function Ch(e){const t=String(e||"").toLowerCase(),n=Ga(t);if(!n||!ve(t))return Promise.resolve(null);if(r.kanaCourses[t])return Promise.resolve(r.kanaCourses[t]);if(r.kanaCourseLoading[t])return r.kanaCourseLoading[t];r.kanaCourseErrors[t]=null;const s=Ee(n.course_file).then(a=>(r.kanaCourses[t]=a,r.kanaCourseLoading[t]=null,Pe=null,Gg()&&T(),a)).catch(a=>{throw r.kanaCourseLoading[t]=null,r.kanaCourseErrors[t]=a,a});return r.kanaCourseLoading[t]=s,s}function Yt(e){const t=String(e||"").toUpperCase();return t==="N5"?se():t==="N4"?Q():t==="N3"?V():t==="N2"?X():t==="N1"?ne():null}function fL(e,t,n="open"){const s=F(e),a=String(t||"");if(!s||!a)return!1;const o=Yt(s);return!o||(o.viewedLessons||(o.viewedLessons={}),o.viewedLessons[a])?!1:(o.viewedLessons[a]=new Date().toISOString(),!0)}function hL(e,t){const n=F(e),s=String(t||"");if(!n||!s)return!1;const a=Yt(n);return a?!!(a.viewedLessons?.[s]||a.completedLessons?.[s]):!1}function qa(e,t="open"){var s;const n=F(e);return!n||((s=r.progress).viewedReadingLevels||(s.viewedReadingLevels={}),r.progress.viewedReadingLevels[n])?!1:(r.progress.viewedReadingLevels[n]=new Date().toISOString(),!0)}function vL(e){const t=F(e);return t?!!r.progress.viewedReadingLevels?.[t]:!1}function xd(e){const t=It(e);return Array.isArray(t?.previousLevels)?t.previousLevels.map(n=>String(n||"").toUpperCase()).filter(Boolean):[]}function wL(e){const t=String(e||"").toUpperCase(),n=Yt(e);if(!n)return!1;if(n.finalTest?.passed)return!0;const s=It(t),a=$t(t),o=Math.max(Number(s?.lessonCount||0),a.length||0),l=Ks(t);return o>0&&l>=o}function Tt(e){const t=String(e||"").toUpperCase();if(fe.includes(t)||r.progress.unlockedJlptLevels&&r.progress.unlockedJlptLevels.includes(t))return!0;if(!It(t))return t==="N5";const s=xd(t);return s.length?s.every(a=>wL(a)):!0}function xh(e=[]){const t=e.filter(Boolean);if(!t.length)return"";if(t.length===1)return t[0];const n=p()==="ru"?"Рё":"and";return t.length===2?`${t[0]} ${n} ${t[1]}`:`${t.slice(0,-1).join(", ")} ${n} ${t[t.length-1]}`}function Mn(e){const t=xd(e);return t.length?p()==="ru"?`Откроется после завершения ${xh(t)}.`:`Unlocks after completing ${xh(t)}.`:p()==="ru"?"Откроется после учебника N5.":"Unlocks after the N5 textbook."}function $t(e){const t=F(e);if(!t)return[];if(t==="N5"&&r.n5Textbook?.items?.length)return r.n5Textbook.items;if(t==="N4"&&r.n4Textbook?.items?.length)return r.n4Textbook.items;if(t==="N3"&&r.n3Textbook?.items?.length)return r.n3Textbook.items;if(t==="N2"&&r.n2Textbook?.items?.length)return r.n2Textbook.items;if(t==="N1"&&r.n1Textbook?.items?.length)return r.n1Textbook.items;const n=It(t),s=r.lessons.filter(d=>String(d.jlpt||"").toUpperCase()===t),a=n?(n.lessonIds||[]).map(d=>r.lessons.find(u=>u.id===d)).filter(Boolean):s,o=new Set(a.map(d=>d.id)),l=s.filter(d=>!o.has(d.id)),c=Math.max(n?n.lessonCount||a.length:s.length,a.length);return[...a,...l].slice(0,c||s.length)}function Nd(e){const t=F(e);if(!t)return"";const n=$t(t);if(!n.length)return"";const s=RL(t);if(s?.lessonId&&Mo(t,s.lessonId))return s.lessonId;const a=Yt(t)?.currentLessonId||"";if(a&&Mo(t,a))return a;const o=t==="N5"?se().completedLessons||{}:t==="N4"?Q().completedLessons||{}:t==="N3"?V().completedLessons||{}:t==="N2"?X().completedLessons||{}:r.progress.lessonCompletions||{},l=n.filter(c=>o[c.id]);return l.length?(l.sort((c,d)=>{const u=Date.parse(o[d.id]||"")||0,m=Date.parse(o[c.id]||"")||0;return u!==m?u-m:(d.order||0)-(c.order||0)}),l[0]?.id||n[0]?.id||""):n[0]?.id||""}function bL(e,t=""){const n=F(e);if(!n||!En(n))return;if(!Tt(n)){r.activeTextbookLevel=n,r.activeJlptLesson=n,aa("textbooks",null,n),G(Mn(n));return}const s=r.route,a=String(t||"")||Nd(n),o=["N5","N4","N3","N2"].includes(n),l=a?`#textbooks/${encodeURIComponent(n)}/${encodeURIComponent(a)}`:`#textbooks/${encodeURIComponent(n)}`;r.route="textbooks",r.activeTextbookLevel=n,r.activeJlptLesson=n,r.activeTextbookSubroute=a||null,r.kanjiPageId=null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=!o&&a?`#textbook-lesson-${a}`:null,s!=="eva-room"&&(r.evaRoomShopOpen=!1),a&&Rt(n,a,"open_jlpt"),kt(),jt(l),Rs(),P()}function kL(e){return e?En(e.jlpt):null}function Er(e){const t=String(e||"").toUpperCase();return r.jlptPracticeLessons.find(n=>n.jlpt===t)||null}function Ws(){return r.progress.jlptLessonPractice=xp(or().jlptLessonPractice,r.progress.jlptLessonPractice||{}),r.progress.jlptLessonPractice}function Mr(e){if(!e?.drills?.length)return null;const t=Ws(),n=t.activeIds[e.jlpt],s=e.drills.find(a=>a.id===n);return s||(t.activeIds[e.jlpt]=e.drills[0].id,e.drills[0])}function yL(e){const t=Er(r.activeJlptLesson),n=Mr(t);if(!n||!n.tiles[e])return;const s=Ws(),a=s.selected[n.id]||[],o=n.blanks.flatMap(l=>l.answer||[]).length;a.includes(e)||a.length>=o||(s.selected[n.id]=[...a,e],s.checked[n.id]=!1,s.results[n.id]=null,T(),P())}function $L(){const e=Mr(Er(r.activeJlptLesson));if(!e)return;const t=Ws();t.selected[e.id]=(t.selected[e.id]||[]).slice(0,-1),t.checked[e.id]=!1,t.results[e.id]=null,T(),P()}function jL(){const e=Mr(Er(r.activeJlptLesson));if(!e)return;const t=Ws();t.selected[e.id]=[],t.checked[e.id]=!1,t.results[e.id]=null,T(),P()}function SL(){const e=Mr(Er(r.activeJlptLesson));if(!e)return;const t={...Ad(),...Ld()},n=Ws(),s=n.selected[e.id]||[],a=e.blanks.flatMap(c=>c.answer||[]),o=a.reduce((c,d,u)=>{const m=e.tiles[s[u]];return(!m||m.kanji!==d)&&c.push(u),c},[]),l=s.length===a.length&&o.length===0;n.checked[e.id]=!0,n.results[e.id]={correct:l,wrongIndexes:o,message:l?t.correct:t.wrong},l&&!n.completed[e.id]?(n.completed[e.id]=new Date().toISOString(),H(8,1,`jlpt_practice:${e.id}`),D("answer_correct")):l||D("answer_wrong"),T(),P()}function CL(){var o,l,c,d,u,m;const e=Er(r.activeJlptLesson),t=Mr(e);if(!e||!t)return;const n=e.drills.findIndex(h=>h.id===t.id),s=e.drills[(n+1)%e.drills.length],a=Ws();a.activeIds[e.jlpt]=s.id,(o=a.selected)[l=s.id]||(o[l]=[]),(c=a.checked)[d=s.id]||(c[d]=!1),(u=a.results)[m=s.id]||(u[m]=null),T(),P()}function Nh(e){const t=String(e||"").toUpperCase();return t?r.cards.filter(n=>String(n.jlpt||"").toUpperCase()===t):[]}function Ha(e,t){const n=e.toLowerCase(),s=[r.cards,r[`${n}KanjiCatalog`],r[`${n}Textbook`]],a=Su.get(e);if(a&&s.every((l,c)=>l===a.sources[c]))return a.items;const o=t();return Su.set(e,{sources:s,items:o}),o}function Ld(){return p()==="ru"?{courseText:"Стратегия уровня, чтения, лексика, приложения и интерактивная практика. Контент хранится в JSON, поэтому урок можно расширять без изменения логики.",apps:"Приложения и интерфейсы",kana:"Хирагана и катакана",hiragana:"Хирагана",katakana:"Катакана",kanjiFocus:"Кандзи с фуриганой",sentenceDrill:"Поставь кандзи в пропуск",fillBlanks:"Заполни пропуск плитками по порядку.",check:"Проверить",undo:"Убрать",clear:"Очистить",next:"Следующее",correct:"Верно. +8 XP и +1 Moon Fragment.",wrong:"Почти. Проверь порядок плиток и попробуй ещё раз."}:{courseText:"Level strategy, readings, vocabulary, apps, and interactive practice. Content lives in JSON, so lessons can grow without changing app logic.",apps:"Apps and interfaces",kana:"Hiragana and katakana",hiragana:"Hiragana",katakana:"Katakana",kanjiFocus:"Kanji with furigana",sentenceDrill:"Place kanji into the blank",fillBlanks:"Fill the blank with tiles in order.",check:"Check",undo:"Undo",clear:"Clear",next:"Next",correct:"Correct. +8 XP and +1 Moon Fragment.",wrong:"Almost. Check the tile order and try again."}}function Ad(){return p()==="ru"?{back:"К учебнику",courseMap:"Полноценный JLPT-модуль",courseText:"Краткая стратегия уровня, чтения, лексика и практика. Данные хранятся в JSON, поэтому урок можно расширять без изменения логики.",available:"кандзи уровня",learned:"изучено",mastered:"освоено",goals:"Цели уровня",practice:"Практика",checkpoint:"Чекпоинт"}:{back:"Back to textbook",courseMap:"Full JLPT module",courseText:"Level strategy, readings, vocabulary, and practice. The content lives in JSON, so lessons can grow without changing app logic.",available:"level kanji",learned:"learned",mastered:"mastered",goals:"Level goals",practice:"Practice",checkpoint:"Checkpoint"}}function Po(e){const t=r.rewards?.levelCurve||{baseXp:100,growth:1.35};let n=1,s=e;for(;s>=Wa(n,t)&&n<100;)s-=Wa(n,t),n+=1;return n}function Kn(){const e=r.rewards?.levelCurve||{baseXp:100,growth:1.35};let t=1,n=r.progress.xp;for(;n>=Wa(t,e)&&t<100;)n-=Wa(t,e),t+=1;const s=Wa(t,e);return{current:n,next:s,toNext:Math.max(0,s-n),percent:E(n,s)}}function Wa(e,t){return Math.round(t.baseXp*Math.pow(t.growth,e-1))}function xL(){const e={app:"Flash Kanji",exportedAt:new Date().toISOString(),progress:r.progress,customization:r.customization},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`flash-kanji-progress-${ce()}.json`,document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(n),me("progress_export",{route:r.route,source:"manual"}),G(_("export"))}function me(e,t={},n={}){return yI(e,t,n)}function wn(e="learn",t={}){me("learning_start",{route:r.route,source:e,...t},{dedupeKey:"learning_start"})}function Kr(e,t,n="textbook"){const s=F(e),a=String(t||"");me("lesson_complete",{route:r.route,level:s,lessonId:a,source:n},{dedupeKey:`${s||"legacy"}:${a}`})}function Eo(e="review"){if(r.route!=="review"||nh())return;const t=r.reviewSession?.startedAt||"current";me("review_session_complete",{route:"review",source:e},{dedupeKey:t})}function Va(e,t,n="final-test"){const s=F(e);me("final_test_complete",{route:"textbooks",level:s,source:n},{dedupeKey:`${s}:${t?.completedAt||"complete"}`}),t?.passed&&me("final_test_pass",{route:"textbooks",level:s,source:n},{dedupeKey:`${s}:${t?.passedAt||t?.completedAt||"pass"}`})}function NL(e){return{level:e.dataset.shareLevel||e.dataset.level||"",lessonId:e.dataset.shareLessonId||e.dataset.lessonId||e.dataset.lesson||"",toastKey:e.dataset.shareToastKey||"",reward:e.dataset.shareReward&&r.rewardModal||null}}function F(e){const t=String(e||"").toUpperCase();return fe.includes(t)?t:""}function it(e){if(!e||typeof e!="object")return null;const t=F(e.level),n=String(e.lessonId||"");if(!t||!n)return null;const s=typeof e.updatedAt=="string"&&e.updatedAt?e.updatedAt:new Date().toISOString();return{level:t,lessonId:n,updatedAt:s,source:typeof e.source=="string"&&e.source?e.source:"open"}}function LL(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const a=F(n),o=it({...typeof s=="object"&&s?s:{},level:a||n});a&&o&&(t[a]=o)}),t}function Vs(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const a=String(n||"").trim();if(a){if(typeof s=="string"&&s.trim()){t[a]=s.trim();return}if(s&&typeof s=="object"){const o=typeof s.viewedAt=="string"&&s.viewedAt?s.viewedAt:typeof s.updatedAt=="string"&&s.updatedAt?s.updatedAt:new Date().toISOString();t[a]=o;return}s&&(t[a]=new Date().toISOString())}}),t}function Mo(e,t){const n=F(e),s=String(t||"");return!n||!s?!1:$t(n).some(a=>a.id===s)}function AL(e,t){const n=F(e),s=String(t||"");if(!n||!s)return!!n;const a=new Set(["review","final","final-test"]),o=new Set(["kanji","grammar","reading","listening"]);return a.has(s)||n!=="N5"&&o.has(s)?!0:$t(n).some(l=>l.id===s)}function IL(e,t){const n=F(e),s=String(t||"");if(!n||!s)return!1;const a=Ti(n);return a==="ready"||a==="error"||a==="incomplete"?!1:/^[A-Za-z0-9_-]+$/.test(s)}function TL(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim().toLowerCase();if(!ve(n))return!1;if(!s)return!0;const a=vn(n);if(a)return["review","final","final-test","reference","sources"].includes(s)||a.lessons?.some(c=>c.id===s)||a.reading_practice?.some(c=>c.id===s);const o=Ga(n),l=Number(o?.lesson_count||(n==="hiragana"?10:11));if(/^lesson-\d+$/i.test(s)){const c=Number(s.replace(/\D+/g,""));return c>=1&&c<=l}return/^practice-[1-5]$/i.test(s)?!0:["review","final","final-test","reference","sources"].includes(s)}function Lh(e){return $t(e)[0]?.id||""}function RL(e=""){const t=F(e);if(t){const a=it(r.progress.lastOpenedJlptLessons?.[t]||null)||(it(r.progress.lastOpenedJlptLesson||null)?.level===t?it(r.progress.lastOpenedJlptLesson||null):null);return a&&Mo(t,a.lessonId)?a:null}const n=[it(r.progress.lastOpenedJlptLesson||null),...Object.values(r.progress.lastOpenedJlptLessons||{}).map(a=>it(a)).filter(Boolean)].filter(Boolean);return n.sort((a,o)=>(Date.parse(o.updatedAt||"")||0)-(Date.parse(a.updatedAt||"")||0)),n.find(a=>Mo(a.level,a.lessonId))||null}function _L(e=""){const t=F(e);if(t)return it(r.progress.lastOpenedJlptLessons?.[t]||null)||(it(r.progress.lastOpenedJlptLesson||null)?.level===t?it(r.progress.lastOpenedJlptLesson||null):null);const n=[it(r.progress.lastOpenedJlptLesson||null),...Object.values(r.progress.lastOpenedJlptLessons||{}).map(s=>it(s)).filter(Boolean)].filter(Boolean);return n.sort((s,a)=>(Date.parse(a.updatedAt||"")||0)-(Date.parse(s.updatedAt||"")||0)),n[0]||null}function PL(e){const t=F(e);if(!t)return"";const n=fe.indexOf(t);return n>=0&&n<fe.length-1?fe[n+1]:""}function Rt(e,t,n="open"){var h;const s=F(e),a=String(t||"");if(!s||!a)return null;const o={level:s,lessonId:a,updatedAt:new Date().toISOString(),source:n},l=it(r.progress.lastOpenedJlptLessons?.[s]||null),c=it(r.progress.lastOpenedJlptLesson||null);(h=r.progress).lastOpenedJlptLessons||(h.lastOpenedJlptLessons={}),r.progress.lastOpenedJlptLessons[s]=o,r.progress.lastOpenedJlptLesson=o;const d=fL(s,a,n),u=Yt(s);return u&&u.currentLessonId!==a&&(u.currentLessonId=a),(!l||l.lessonId!==a||l.level!==s||c?.lessonId!==a||c?.level!==s||d)&&T(),o}function Zt(e,t="btn ghost"){const n=F(e),s=PL(n);if(!n||!s)return"";const a=Lh(s);if(!a)return"";const o=p()==="ru"?`Первый урок ${s}`:`${s} lesson 1`;return`<button class="${g(t)}" type="button" data-action="final-test-next-level" data-level="${g(n)}" data-next-level="${g(s)}" data-next-lesson="${g(a)}">${i(o)}</button>`}function bn(){return F(r.activeJlptLesson)||F(r.activeTextbookLevel)||F(r.jlptLessons.find(e=>Tt(e.jlpt))?.jlpt)||F(r.jlptLessons[0]?.jlpt)||"N5"}function EL(e,t={}){const n=String(e||r.route||"home").toLowerCase();return n==="textbooks"?"textbooks":n==="textbook"?`textbooks/${encodeURIComponent(F(t.level||r.activeTextbookLevel||bn())||bn())}`:n==="lesson"?`jlpt-lesson/${encodeURIComponent(F(t.level||r.activeJlptLesson||bn())||bn())}`:n==="srs"?"review":n==="stats"?"stats":n==="achievements"?"achievements":n==="achievement"?r.route||"home":n||"home"}function ML(e=r.route,t={}){const n=new URL(location.href);return n.search="",n.hash=EL(e,t),n.href}function KL(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=F(t.level||r.activeJlptLesson||r.activeTextbookLevel||""),a=p()==="ru",o={textbooks:a?"Учебники Flash Kanji":"Flash Kanji textbooks",textbook:a?"Учебник Flash Kanji":"Flash Kanji textbook",lesson:a?"Урок Flash Kanji":"Flash Kanji lesson",srs:a?"Повторение Flash Kanji":"Flash Kanji review",stats:a?"Статистика Flash Kanji":"Flash Kanji stats",achievements:a?"Достижения Flash Kanji":"Flash Kanji achievements",achievement:"Flash Kanji"},l=o[n]||o.achievement;return s&&["textbook","lesson"].includes(n)?`${l} ${s}`:l}function DL(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=F(t.level||r.activeJlptLesson||r.activeTextbookLevel||""),a=s?It(s):null,o=t.lesson||(s?En(s):null),l=p()==="ru";if(n==="textbooks")return l?"Функциональные учебники JLPT N5-N1 внутри Flash Kanji.":"Functional JLPT N5-N1 textbooks inside Flash Kanji.";if(n==="textbook"){const c=b(a?.displayTitle||a?.title||{}),d=Number(a?.lessonCount||0),u=Number(a?.kanjiCount||0);return l?`${c||"Учебник"}: ${d} уроков и ${u} кандзи.`:`${c||"Textbook"}: ${d} lessons and ${u} kanji.`}if(n==="lesson"){const c=b(o?.title||{}),d=b(o?.summary||{});return l?`${s?`${s} · `:""}${c||"Урок"} — ${d||"урок в Flash Kanji"}.`:`${s?`${s} · `:""}${c||"Lesson"} — ${d||"a Flash Kanji lesson"}.`}return n==="srs"?l?"Очередь повторений Flash Kanji.":"Flash Kanji review queue.":n==="stats"?l?"Моя статистика и прогресс во Flash Kanji.":"My Flash Kanji stats and progress.":n==="achievements"?l?"Достижения и секреты Flash Kanji.":"Flash Kanji achievements and secrets.":n==="achievement"?JL(t.reward||r.rewardModal||{}):"Flash Kanji."}function FL(){return p()==="ru"?"Поделиться":"Share"}function ps(e=r.route,t={}){const n=F(t.level||""),s=String(t.lessonId||t.lesson?.id||""),a=t.label||FL();return`
      <button class="btn ghost share-btn" type="button" data-action="share-page" data-share-section="${g(e)}" ${n?`data-share-level="${g(n)}"`:""} ${s?`data-share-lesson-id="${g(s)}"`:""} ${t.toastKey?`data-share-toast-key="${g(t.toastKey)}"`:""}>
        <span class="btn-icon" aria-hidden="true">${OL()}</span>
        <span>${i(a)}</span>
      </button>
    `}function OL(){return`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M15 5h4v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M10 14 19 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M19 14v5H5V5h5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>
    `}function Ah(e){return e==="youtube"?`
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
    `}async function BL(e,t={}){const n=t.toastKey||"shareLinkCopied",s={title:e.title,text:e.text,url:e.url};if(e.files?.length&&navigator.canShare?.({files:e.files})&&(s.files=e.files),navigator.share)try{return await navigator.share(s),"share"}catch(o){if(o&&o.name==="AbortError")return"abort"}return await WL(e.text,e.url,n)?"copy":"failed"}async function zL(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=t.reward||r.rewardModal||null,a={section:n,title:KL(n,t),text:DL(n,t),url:ML(n,t),files:[]};if(n==="achievement"||s){const o=await GL(s||{});o&&typeof File<"u"&&(a.files=[new File([o],`flash-kanji-achievement-${r.progress.level}.png`,{type:"image/png"})])}return a}async function Ih(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s={...t};s.level||(s.level=t.level||r.activeJlptLesson||r.activeTextbookLevel||""),me("share_opened",{route:n,level:F(s.level)||"",source:"share"});const a=await zL(n,s),o=await BL(a,{toastKey:t.toastKey||"shareLinkCopied"});return o==="share"?(me("share_completed",{route:n,source:a.files?.length?"file":"web-share"}),!0):o==="copy"?(me("share_link_copied",{route:n,source:"copy"}),me("share_completed",{route:n,source:"copy"}),!0):(o==="abort"||G(p()==="ru"?"Не удалось поделиться":"Share failed"),!1)}async function UL(){await Ih("achievement",{reward:r.rewardModal||{},toastKey:"shareCopied"})}function JL(e={}){const t=_("shareFallback"),n=e.level||r.progress.level,s=Kn(),a=e.type==="level"?`${s.current}/${s.next}`:e.totalXp||r.progress.xp,o=e.type==="level"?r.progress.moonFragments:e.moonFragments||r.progress.moonFragments;return`${t}: ${_("level")} ${n}, ${a} XP, ${o} Moon Fragments.`}async function GL(e={}){const s=document.createElement("canvas");s.width=1200,s.height=630;const a=s.getContext("2d");if(!a)return null;qL(a,1200,630);const o=e.level||r.progress.level,l=Kn(),c=e.type==="level"?`${l.current}/${l.next}`:e.totalXp||r.progress.xp,d=e.type==="level"?r.progress.moonFragments:e.moonFragments||r.progress.moonFragments,u=e.mascot||(r.progress.level%2===0?"leya":"eva"),m=$o(u,e.mood||"happy",e.dialog||e.type||"achievement"),[h,f]=await Promise.all([Th("assets/logo.webp"),m?Th(m):Promise.resolve(null)]);return h&&Rh(a,h,58,48,330,116),f&&Rh(a,f,780,95,330,450),a.fillStyle="#f7f4ee",a.font="900 58px system-ui, sans-serif",a.fillText(_("levelUp"),64,230),a.font="900 110px 'Yu Mincho', serif",a.fillStyle="#ffe15a",a.fillText(`${_("level")} ${o}`,64,340),a.font="800 38px system-ui, sans-serif",a.fillStyle="#f7f4ee",a.fillText(`${c} XP`,70,425),a.fillText(`${d} Moon Fragments`,70,482),a.fillStyle="rgba(255,255,255,0.74)",a.font="700 28px system-ui, sans-serif",a.fillText("Flash Kanji | JLPT Japanese learning",70,558),a.strokeStyle="rgba(255, 225, 90, 0.7)",a.lineWidth=3,a.strokeRect(34,30,1132,570),HL(s)}function qL(e,t,n){const s=e.createLinearGradient(0,0,t,n);s.addColorStop(0,"#08080c"),s.addColorStop(.45,"#1c1018"),s.addColorStop(1,"#071a18"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255, 56, 92, 0.22)",e.beginPath(),e.moveTo(0,70),e.lineTo(720,0),e.lineTo(560,630),e.lineTo(0,630),e.closePath(),e.fill(),e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=1;for(let a=-t;a<t*2;a+=38)e.beginPath(),e.moveTo(a,0),e.lineTo(a+t,n),e.stroke()}function Th(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=new URL(e,location.href).href})}function Rh(e,t,n,s,a,o){const l=Math.min(a/t.naturalWidth,o/t.naturalHeight),c=t.naturalWidth*l,d=t.naturalHeight*l;e.drawImage(t,n+(a-c)/2,s+(o-d)/2,c,d)}function HL(e){return new Promise(t=>e.toBlob(t,"image/png",.94))}async function WL(e,t,n="shareLinkCopied"){const s=await _h(`${e}
${t}`);return G(s?_(n):e),s}async function _h(e){if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",document.body.append(t),t.focus(),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{t.remove()}}async function VL(e){const t=e.target.files?.[0];if(t)try{const n=JSON.parse(await t.text());r.progress=kp(or(),n.progress||n),$i=!1,sr=null,r.reviewSession=null,lr(),bl(),n.customization&&(r.customization={...On(),...n.customization,selected:{...On().selected,...n.customization.selected||{}}},ir()),xs(),Dr(),T(),kn(),G(_("import")),P()}catch(n){console.error(n),G("Invalid JSON")}finally{e.target.value=""}}function XL(){if(!confirm(p()==="ru"?"Сбросить прогресс?":"Reset progress?"))return;const e=r.progress.settings;r.progress=or(),r.progress.settings=e,r.finalTestModal=null,r.finalTestBusy=!1,lr(),Dr(),T(),P()}function QL(){r.progress.settings.theme=r.progress.settings.theme==="dark"?"light":"dark",r.progress.settings.themeManuallySelected=!0,kn(),T(),P()}function YL(){r.progress.settings.language=p()==="ru"?"en":"ru",r.progress.settings.languageAutoDetected=!1,r.progress.settings.languageManuallySelected=!0,T(),P()}function Ph(){r.progress.settings.sound=!Un(r.progress.settings.sound,!0),r.progress.settings.uxSound=r.progress.settings.sound,Dr(),Id(),T(),G(r.progress.settings.sound?"♪":"×")}function ZL(){Ph()}function Xa(){return window.FlashKanjiSound||null}function eA(){try{Xa()?.preloadSounds?.()}catch(e){console.warn("UX sounds preload failed.",e)}}function Dr(){const e=Xa();!e||!r.progress?.settings||(e.setSoundEnabled?.(Un(r.progress?.settings?.sound,!0)),e.setSoundVolume?.(Do()))}function Ko(){return Un(r.progress?.settings?.sound,!0)}function Id(){const e=Oe('[data-action="sound"]');if(!e)return;const t=Un(r.progress?.settings?.sound,!0),n=p()==="ru"?t?"Звук":"Звук выключен":t?"Sound":"Sound off";e.classList.toggle("is-muted",!t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",n),e.title=n,e.innerHTML=tA(t)}function tA(e){return e?`
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
      `}function nA(e){return e?`
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
      `}function sA(){const e=Oe('[data-action="notification-center"]');if(!e)return;const t=r.notificationPrompt||ni(),n=!!(t.docked||r.notificationPromptVisible||Bo("header")),s=!!r.notificationPromptVisible,a=s?p()==="ru"?"Скрыть уведомление":"Hide notification":t.docked?p()==="ru"?"Открыть уведомление":"Open notification":p()==="ru"?"Уведомления":"Notifications";e.hidden=!n,e.classList.toggle("is-active",s),e.classList.toggle("has-prompt",!!(t.docked||s)),e.setAttribute("aria-pressed",String(s)),e.setAttribute("aria-label",a),e.title=a,e.innerHTML=nA(s)}function Td(){const e=Oe('[data-action="toggle-header-socials"]');if(!e)return;const t=Rd(),n=p()==="ru"?t?"Скрыть соцсети":"Открыть соцсети":t?"Hide social links":"Open social links";e.setAttribute("aria-expanded",String(t)),e.classList.toggle("is-active",t),e.setAttribute("aria-label",n),e.title=n}function Eh(e){const t=document.querySelector(".app-header");t&&(t.classList.toggle("is-social-open",!!e),Td())}function Rd(){return!!document.querySelector(".app-header")?.classList.contains("is-social-open")}function Do(){const e=Number(r.progress?.settings?.uxVolume);return Number.isFinite(e)?de(e,0,1):.75}function rA(e){const t=de(Number(e),0,1);r.progress.settings.uxVolume=t,Dr(),T()}function D(e){if(!Ko())return!1;const t=()=>{try{if(!!Xa()?.playSound?.(e)){qr=Date.now();return}Md(String(e))}catch(n){console.warn("UX sound failed.",n),Md(String(e))}};return typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>window.setTimeout(t,0)):window.setTimeout(t,0),!0}function kn(){document.documentElement.dataset.theme=r.progress.settings.theme,document.documentElement.dataset.customTheme=r.customization?.selected?.theme||"theme_default_dark";const e=un();document.documentElement.dataset.customRoom=e?.id||"bg_study_hub",document.documentElement.style.setProperty("--app-room-bg",_d(e?.file||"assets/bg/bg_study_hub.webp"));const t=Ny();document.documentElement.dataset.customEffect=t||"none",document.querySelector('meta[name="theme-color"]')?.setAttribute("content",r.progress.settings.theme==="light"?"#f8f7f2":"#08080c"),iA()}function aA(){return["localhost","127.0.0.1","::1",""].includes(window.location.hostname)}function iA(){aA()&&(window.FLASH_KANJI_EVA_ROOM_DEBUG={getBackground:()=>{const e=un();return{selectedCustomization:r.customization?.selected?.background||null,selectedProgress:r.progress?.selectedEvaRoomBackground||null,equippedProgress:r.progress?.shop?.equipped?.background||null,currentId:e?.id||null,currentFile:e?.file||null,appRoomCss:document.documentElement.style.getPropertyValue("--app-room-bg"),sceneCss:document.querySelector(".eva-vn-scene")?.style.getPropertyValue("--eva-bg")||"",customRoomDataset:document.documentElement.dataset.customRoom||"",backgrounds:Yi().map(t=>({id:t.id,file:t.file,defaultUnlocked:!!t.defaultUnlocked}))}}})}function _d(e){const t=String(e||"assets/bg/bg_study_hub.webp").replace(/["\\\n\r]/g,"");return`url("${t.startsWith("assets/")?`../${t}`:t}")`}function _(e){return r.i18n?.ui?.[e]?.[p()]||r.i18n?.ui?.[e]?.ru||e}function p(){return r.progress?.settings?.language||"ru"}function b(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function oA(e){if(!e)return"";try{return new Intl.DateTimeFormat(p()==="ru"?"ru-RU":"en-US",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch{return String(e).slice(0,16)}}function Qa(e){return p()==="en"&&r.lessonTranslations[e.id]?.title_en||e.title}function lA(e){return p()==="en"&&r.lessonTranslations[e.id]?.summary_en||e.summary}function Pd(e){const t=r.lessons.find(n=>n.id===e);return t?Qa(t):""}function K(e){return Ye(e,p())}function Ye(e,t=p()){if(!e)return"";const n=gh(e);return n&&n.meaning?t==="en"?n.meaning.en||n.meaning.ru||e.meaning_en||r.kanjiTranslations[e.id]?.meaning_en||"":n.meaning.ru||e.meaning_ru||r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||"":t==="en"?r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||e.meaning_ru||"":e.meaning_ru||r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||""}function Ya(e){return p()==="en"?r.kanjiTranslations[e.id]?.interface_use_en||e.interface_use_en||e.interface_use||"":e.interface_use||e.interface_use_en||""}function gs(e){if(p()!=="en")return e.translation_ru||e.translation||"";if(e.translation_en)return e.translation_en;const t=r.vocabulary.find(n=>n.word===e.word||Ed(n.romaji)===Ed(e.romaji));return t?.translation_en?t.translation_en:Tv[Ed(e.romaji)]||e.translation||""}function Za(e){const t=gs(e);return p()==="ru"?`Какое слово подходит к значению «${t}»?`:`Which word matches "${t}"?`}function W(e){return e?p()==="en"?String(e.answerEn||e.answer_en||e.answer||""):String(e.answer||e.answerRu||""):""}function qe(e){if(!e)return[];const t=p()==="en"&&Array.isArray(e.optionsEn)&&e.optionsEn.length?e.optionsEn:e.options;return Array.isArray(t)?t.map(String).filter(Boolean):[]}function Ed(e){return String(e||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function Fr(e){return r.dialogues?.mascots?.[e]||{name:{ru:e,en:e},sprites:{},dialogs:{}}}function Ue(e,t){const n=e==="eva"?cA(t):"";if(n)return n;const s=Fr(e).dialogs?.[t]||Fr(e).dialogs?.welcome||{},a=s[p()]||s.ru||[""];return He(a)}function cA(e="welcome"){const t=String(e||"welcome").toLowerCase();if(!["welcome","progress","hint","lessoncomplete","masterymilestone","achievement"].includes(t))return"";const n=dA(t),s=[...r.evaAutonomyLines||[],...to()].filter(l=>{const c=b(l?.text||{});if(!c)return!1;const d=Array.isArray(l.tags)?l.tags:[];if(!(n.includes(l.category)||d.some(h=>n.includes(h))))return!1;const m=Mh(c);return m.length>=12&&m.length<=132}),a=s.filter(l=>!ul.includes(l.id)),o=He(a.length?a:s);return o?(o.id&&(ul=[o.id,...ul.filter(l=>l!==o.id)].slice(0,18)),Mh(b(o.text||{}))):""}function dA(e){return{welcome:["fis_study","fis_focus","fis_observation","fis_short","study","short","mood","room"],progress:["fis_reward","fis_streak","fis_review","reward","streak","review","progress"],hint:["fis_focus","fis_observation","hint","study"],lessoncomplete:["fis_reward","fis_streak","reward","study"],masterymilestone:["fis_reward","fis_streak","reward","progress"],achievement:["fis_reward","reward","achievement"]}[e]||["fis_study","study"]}function Mh(e){const t=String(e||"").replace(/\s+/g," ").trim();if(t.length<=132)return t;const n=t.match(/[^.!?。！？]+[.!?。！？]?/g)||[t];let s="";for(const a of n){const o=`${s} ${a.trim()}`.trim();if(o.length>132)break;s=o}return s.length>=12?s:`${t.slice(0,124).trimEnd()}...`}function Or(e){const t=Kh(e);return`<span class="pill ${t}">${i(Iv[t]||"New")}</span>`}function Kh(e){const t=String(e||"new").toLowerCase();return t==="new"||t==="learning"||t==="review"||t==="mastered"?t:t==="New".toLowerCase()?"new":t.includes("master")?"mastered":t.includes("learn")?"learning":t.includes("review")?"review":"new"}function Dh(e){const t=(e.correct||0)+(e.wrong||0);return t?Math.round((e.correct||0)/t*100):0}function uA(){const e=getComputedStyle(document.documentElement);return{text:e.getPropertyValue("--text").trim(),muted:e.getPropertyValue("--muted").trim(),line:e.getPropertyValue("--line").trim(),red:e.getPropertyValue("--accent").trim(),yellow:e.getPropertyValue("--accent-2").trim(),green:e.getPropertyValue("--accent-3").trim(),blue:e.getPropertyValue("--accent-4").trim(),danger:e.getPropertyValue("--danger").trim(),pink:"#ff91d8",blueSoft:"rgba(67, 214, 255, 0.16)",dangerSoft:"rgba(255, 107, 95, 0.16)"}}function pA(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.text}}},scales:{x:{ticks:{color:e.muted},grid:{color:e.line}},y:{beginAtZero:!0,ticks:{color:e.muted,precision:0},grid:{color:e.line}}}}}function Fo(){try{return gi||(gi=new(window.AudioContext||window.webkitAudioContext)),gi.state==="suspended"&&gi.resume().catch(()=>null),gi}catch(e){return console.warn("Audio context unavailable.",e),null}}function gA(e){const t=String(e||"").toLowerCase();return t.includes("wrong")||t.includes("failed")?{type:"triangle",frequencies:[180],duration:.22,peak:.12,interval:0}:t.includes("correct")||t.includes("success")?{type:"triangle",frequencies:[440,554.37],duration:.18,peak:.11,interval:.09}:t.includes("level")||t.includes("achievement")||t.includes("reward")||t.includes("xp")||t.includes("moon")||t.includes("unlock")?{type:"sine",frequencies:[523.25,659.25,783.99],duration:.26,peak:.1,interval:.08}:t.includes("close")?{type:"square",frequencies:[260],duration:.12,peak:.08,interval:0}:t.includes("open")||t.includes("button")||t.includes("click")||t.includes("tab")||t.includes("page")?{type:"sine",frequencies:[320],duration:.09,peak:.08,interval:0}:{type:"sine",frequencies:[360],duration:.16,peak:.08,interval:0}}function Md(e){const t=Fo();if(!t)return!1;try{const n=gA(e),s=t.currentTime+.01;return n.frequencies.forEach((a,o)=>{const l=t.createOscillator(),c=t.createGain();l.type=n.type,l.frequency.value=a;const d=s+n.interval*o;c.gain.setValueAtTime(1e-4,d),c.gain.exponentialRampToValueAtTime(n.peak,d+.02),c.gain.exponentialRampToValueAtTime(1e-4,d+n.duration),l.connect(c).connect(t.destination),l.start(d),l.stop(d+n.duration+.02)}),qr=Date.now(),!0}catch(n){return console.warn("Fallback UX tone failed.",n),!1}}window.FlashKanjiUxToneFallback=Md;function mA(){const e=()=>{const t=Fo();t?.state==="suspended"&&t.resume().catch(()=>null)};["pointerdown","touchstart","keydown","mousedown"].forEach(t=>{document.addEventListener(t,e,{once:!0,passive:!0,capture:!0})})}function ei(e){if(r.progress.settings.sound){if(Xa()){D(e==="again"?"answer_wrong":"answer_correct");return}try{const t=Fo();if(!t)return;qr=Date.now();const n=t.createOscillator(),s=t.createGain(),a=t.currentTime;n.type="triangle",n.frequency.value=e==="again"?180:480,s.gain.setValueAtTime(1e-4,a),s.gain.exponentialRampToValueAtTime(.13,a+.015),s.gain.exponentialRampToValueAtTime(1e-4,a+.18),n.connect(s).connect(t.destination),n.start(a),n.stop(a+.2)}catch(t){console.warn("Audio unavailable.",t)}}}function fA(){if(r.progress.settings.sound)try{const e=Fo();if(!e)return;qr=Date.now();const t=e.currentTime;[523.25,659.25,783.99].forEach((n,s)=>{const a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.value=n;const l=t+s*.08;o.gain.setValueAtTime(1e-4,l),o.gain.exponentialRampToValueAtTime(.12,l+.02),o.gain.exponentialRampToValueAtTime(1e-4,l+.24),a.connect(o).connect(e.destination),a.start(l),a.stop(l+.26)})}catch(e){console.warn("Achievement sound unavailable.",e)}}function hA(){const e=document.createElement("div");e.className="confetti",e.innerHTML=Array.from({length:34},(t,n)=>`<i style="--x:${Math.random()*100}vw;--d:${Math.random()*.8+.8}s;--r:${Math.random()*360}deg;--c:${n%4}"></i>`).join(""),document.body.append(e),window.setTimeout(()=>e.remove(),1800)}function G(e){const t=Oe("#toast");t.textContent=e,t.hidden=!1,clearTimeout(fu),fu=window.setTimeout(()=>{t.hidden=!0},2400)}function Kd(){return`
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
      </section>`}function vA(e){return`<section class="empty-state" style="margin-top:24px"><span class="kanji-char">警</span><h1>Data error</h1><p>${i(e.message)}</p></section>`}function wA(){try{[Re,_t,pi,"flashKanji.lastForcedBuild"].forEach(t=>{try{localStorage.removeItem(t)}catch(n){console.warn(`Could not remove recovery key ${t}.`,n)}})}catch(e){console.warn("Could not clear Flash Kanji recovery markers during boot recovery.",e)}}async function bA(){if("caches"in window){const e=await caches.keys();await Promise.all(e.map(t=>caches.delete(t)))}if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(async t=>{try{await t.unregister()}catch(n){console.warn("Could not unregister service worker during boot recovery.",n)}}))}}async function kA(e){try{const t=Number(sessionStorage.getItem(nn)||"0");if(t>=2)return!1;const n=t+1;sessionStorage.setItem(nn,String(n)),console.warn(`[FlashKanji] Boot failed, attempting recovery stage ${n}.`,e),n>=2&&wA(),await bA();try{localStorage.removeItem(Re),localStorage.removeItem(_t),localStorage.removeItem(pi),localStorage.removeItem("flashKanji.lastForcedBuild")}catch(a){console.warn("Boot recovery marker cleanup failed.",a)}const s=new URL(location.href);return s.searchParams.set("cachebust",Date.now().toString()),s.searchParams.set("bootRecovery",String(n)),location.replace(s.toString()),!0}catch(t){return console.warn("Boot recovery failed.",t),!1}}function yA(){if(!("serviceWorker"in navigator)||location.protocol==="file:")return;let e=!1,t=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;return}e||(e=!0,location.reload())}),navigator.serviceWorker.addEventListener("message",s=>{if(s.data?.type==="FLASH_KANJI_CACHE_RESET_DONE")try{localStorage.setItem(_t,`${I}:done`)}catch(a){console.warn("Cannot save PWA cache reset marker.",a)}});const n=async()=>{try{const s=new URL("service-worker.js",document.baseURI),a=await navigator.serviceWorker.register(s.href);if(!a||typeof a.update!="function")return;$A(a),await a.update().catch(console.warn)}catch(s){console.warn(s)}};document.readyState==="loading"?window.addEventListener("load",()=>{n()},{once:!0}):n()}function $A(e){e&&e.addEventListener("updatefound",()=>{const t=e.installing;t&&t.addEventListener("statechange",()=>{(t.state==="installed"||t.state==="activated")&&e.update().catch(()=>null)})})}function Oo(){const e={declineCount:0,nextShowAt:0,neverShow:!1,installed:!1};try{const t=localStorage.getItem(w)||localStorage.getItem(v);if(!t)return e;const n=JSON.parse(t),s={...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,installed:!!n.installed};return localStorage.getItem(w)||localStorage.setItem(w,JSON.stringify(s)),s}catch(t){return console.warn("PWA install prompt state reset.",t),e}}function Dd(){try{localStorage.setItem(w,JSON.stringify(r.pwaInstallPrompt))}catch(e){console.warn("Cannot save PWA install prompt state.",e)}}function jA(e){e.preventDefault(),$s=e,r.progress&&r.i18n&&CA()}async function SA(){if(me("pwa_install_click",{route:r.route,source:$s?"browser":Br()?"ios":"help"}),ti()){Od();return}if(!$s){r.pwaInstallHelpVisible=!0,Xe();return}const e=$s;$s=null;try{if(await e.prompt(),(await e.userChoice)?.outcome==="accepted"){Od();return}Bd()}catch(t){console.warn("PWA install prompt failed.",t),Bd()}}function ti(){return["standalone","fullscreen","minimal-ui"].some(t=>window.matchMedia?.(`(display-mode: ${t})`)?.matches)||Reflect.get(navigator,"standalone")===!0}function Fd(){const e=r.pwaInstallPrompt||Oo();if(ti()||e.installed||e.neverShow||Date.now()<Number(e.nextShowAt||0))return!1;const t=r.progress?.visits?.firstVisitDate;return!t||fs(t,ce())<1?!1:!!$s||Br()}function CA(){Fd()&&(D("notification_soft"),P())}function Od(){r.pwaInstallPrompt={...Oo(),...r.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},r.pwaInstallHelpVisible=!1,Dd(),me("pwa_installed",{route:r.route,source:Br()?"ios":"browser"},{dedupeKey:"appinstalled"}),zh(),r.progress&&r.i18n&&P()}function Bd(){const e=r.pwaInstallPrompt||Oo(),t=Math.min(Number(e.declineCount||0)+1,5);r.pwaInstallPrompt={...e,declineCount:t,nextShowAt:xA(t),neverShow:t>=5,installed:!1},Dd(),P()}function xA(e){const s={1:864e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||864e5)}function NA(){!ti()||r.pwaInstallPrompt.installed||(r.pwaInstallPrompt={...r.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},Dd())}function Br(){const e=navigator.userAgent||"",t=/iphone|ipad|ipod/i.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=/safari/i.test(e)&&!/(crios|fxios|edgios|opios|chrome|android)/i.test(e);return t&&n}function Fh(){return p()==="en"?{badge:"Offline PWA",title:"Install Flash Kanji on your home screen?",description:"Your progress, lessons and reviews will open like a real app.",iosInstruction:"Tap Share -> Add to Home Screen.",install:"Install app",later:"Later"}:{badge:"Offline PWA",title:"Установить Flash Kanji на главный экран?",description:"Так прогресс, уроки и повторения будут открываться как приложение.",iosInstruction:"Нажмите Поделиться → На экран Домой.",install:"установить приложение",later:"Позже"}}function ni(){const e={declineCount:0,nextShowAt:0,neverShow:!1,permission:typeof Notification>"u"?"unsupported":Notification.permission,enabled:!1,acceptedAt:null,lastAskedAt:0,lastShown:{},periodicSync:!1,docked:!1};try{const t=localStorage.getItem(j);if(!t)return e;const n=JSON.parse(t);return{...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,enabled:!!n.enabled,lastShown:n.lastShown&&typeof n.lastShown=="object"?n.lastShown:{},docked:!!n.docked}}catch(t){return console.warn("Notification prompt state reset.",t),e}}function ms(){try{localStorage.setItem(j,JSON.stringify(r.notificationPrompt))}catch(e){console.warn("Cannot save notification prompt state.",e)}}function si(){clearTimeout(sl),sl=0}function LA(){si(),r.notificationPromptVisible&&(sl=window.setTimeout(()=>{r.notificationPromptVisible&&Oh()},5e3))}function Oh(){si(),!(!r.notificationPromptVisible&&r.notificationPrompt?.docked)&&(r.notificationPromptVisible=!1,r.notificationPrompt={...r.notificationPrompt,docked:!0},ms(),P())}function Bh(){return ti()||!!r.pwaInstallPrompt?.installed}function Bo(e="usage"){const t=r.notificationPrompt||ni();return!(!("Notification"in window)||t.neverShow||t.enabled||!Bh()||Notification.permission==="granted"||Notification.permission==="denied"||Date.now()<Number(t.nextShowAt||0)||e!=="lesson_complete"&&Date.now()-ml<2*60*1e3)}function zo(e="usage"){return Bo(e)?(r.notificationPromptVisible=!0,r.notificationPrompt={...r.notificationPrompt,docked:!1},ms(),D("notification_soft"),LA(),P(),!0):("Notification"in window&&Notification.permission==="granted"&&Uh(),!1)}function zh(){if(clearTimeout(Cu),!Bh())return;const e=Math.max(0,2*60*1e3-(Date.now()-ml));Cu=window.setTimeout(()=>zo("usage"),e)}async function AA(){if(r.notificationPromptVisible=!1,si(),!("Notification"in window)){Uo();return}try{const e=Notification.permission==="granted"?"granted":await Notification.requestPermission();if(r.notificationPrompt.permission=e,r.notificationPrompt.lastAskedAt=Date.now(),e==="granted"){Uh(),G(Gh().enabled),Xe();return}Uo()}catch(e){console.warn("Notification permission failed.",e),Uo()}}function Uh(){!("Notification"in window)||Notification.permission!=="granted"||(si(),r.notificationPrompt={...ni(),...r.notificationPrompt,permission:"granted",enabled:!0,neverShow:!0,docked:!1,acceptedAt:r.notificationPrompt.acceptedAt||new Date().toISOString(),nextShowAt:0},ms(),zd())}function Uo(){const e=r.notificationPrompt||ni(),t=Math.min(Number(e.declineCount||0)+1,5);r.notificationPromptVisible=!1,si(),r.notificationPrompt={...e,permission:"Notification"in window?Notification.permission:"unsupported",declineCount:t,nextShowAt:IA(t),neverShow:t>=5,enabled:!1,docked:!1,lastAskedAt:Date.now()},ms(),Xe()}function IA(e){const s={1:432e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||12*36e5)}function zd(){!("Notification"in window)||Notification.permission!=="granted"||(r.notificationPrompt.permission="granted",r.notificationPrompt.enabled=!0,ms(),pl.forEach(e=>clearTimeout(e)),pl.clear(),[{type:"daily_bonus",hour:9,minute:0},{type:"lesson",hour:11,minute:30},{type:"review",hour:18,minute:0},{type:"streak",hour:20,minute:30}].forEach(e=>Jh(e.type,TA(e.hour,e.minute))),EA())}function Jh(e,t){const n=Math.max(1e3,Math.min(t.getTime()-Date.now(),2147483647)),s=window.setTimeout(async()=>{await RA(e),Jh(e,MA(t,1))},n);pl.set(e,s)}function TA(e,t){const n=new Date;return n.setHours(e,t,0,0),n.getTime()<=Date.now()+60*1e3&&n.setDate(n.getDate()+1),n}async function RA(e){if(!_A(e))return!1;const t=PA(e);try{const n=await navigator.serviceWorker?.ready;return n?.showNotification?await n.showNotification(t.title,t.options):"Notification"in window&&Notification.permission==="granted"&&new Notification(t.title,t.options),D(e==="daily_bonus"?"notification_reward":"notification_reminder"),r.notificationPrompt.lastShown[e]=ce(),ms(),!0}catch(n){return console.warn("Notification show failed.",n),!1}}function _A(e){if(!("Notification"in window)||Notification.permission!=="granted"||r.notificationPrompt.lastShown?.[e]===ce())return!1;if(e==="review")return Qe()>0;if(e==="daily_bonus"){const t=Ui(r.progress.dailyBonusPending);return!!r.progress.visits?.firstVisitDate&&!!t&&t.availableOn<=ce()&&!r.progress.dailyBonuses[ce()]}return e==="lesson"?VN().length>0:e==="streak"?(r.progress.streak.current||r.progress.visits?.streak||0)>0:!0}function PA(e){const t=p()==="ru",n={review:{title:"Flash Kanji",body:t?"Ваши кандзи ждут повторения.":"Your kanji are waiting for review.",url:"./index.html#review"},streak:{title:t?"Лея рядом 🌙":"Leya is nearby рџЊ™",body:t?"Не потеряйте свою серию дней.":"Do not lose your daily streak.",url:"./index.html#home"},daily_bonus:{title:t?"Ежедневный бонус":"Daily Bonus",body:t?"Заберите XP и Moon Fragments.":"Claim XP and Moon Fragments.",url:"./index.html#home"},lesson:{title:t?"Новые знания ждут":"New knowledge awaits",body:t?"Продолжите изучение кандзи.":"Continue learning kanji.",url:"./index.html#textbooks"}},s=n[e]||n.review;return{title:s.title,options:{body:s.body,tag:`flash-kanji-${e}`,renotify:!1,icon:"./assets/icon-192.png",badge:"./assets/icon-192.png",data:{url:s.url,type:e}}}}async function EA(){try{const e=await navigator.serviceWorker?.ready;if(!e?.periodicSync)return;await e.periodicSync.register("flash-kanji-daily",{minInterval:24*60*60*1e3}),r.notificationPrompt.periodicSync=!0,ms()}catch{r.notificationPrompt.periodicSync=!1,ms()}}function Gh(){return p()==="en"?{badge:"PWA reminders",title:"Allow Flash Kanji notifications?",description:"We will remind you about reviews, streaks and daily bonuses.",allow:"Allow",later:"Later",enabled:"Notifications enabled"}:{badge:"PWA напоминания",title:"Разрешить уведомления Flash Kanji?",description:"Мы напомним о повторениях, серии и ежедневном бонусе.",allow:"Разрешить",later:"Позже",enabled:"Уведомления включены"}}function ie(e){return{...e,history:[...e.history||[]]}}function MA(e,t){return new Date(e.getTime()+t*24*60*60*1e3)}function qh(){const e=new Date;return e.setHours(23,59,59,999),e}function ce(){return Ud(new Date)}function Ud(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Jd(e){const[t,n,s]=e.split("-").map(Number);return new Date(t,n-1,s)}function fs(e,t){return Math.round((Jd(t)-Jd(e))/864e5)}function Hh(e,t){const n=Jd(e);return n.setDate(n.getDate()+t),Ud(n)}function KA(e){return Array.from({length:e},(t,n)=>{const s=new Date;return s.setDate(s.getDate()-(e-1-n)),Ud(s)})}function en(e){if(!e)return p()==="ru"?"сейчас":"now";const t=new Date(e).getTime()-Date.now();if(t<=0)return p()==="ru"?"сейчас":"now";const n=Math.ceil(t/6e4);if(n<60)return p()==="ru"?`через ${n} мин.`:`in ${n} min`;const s=Math.ceil(n/60);if(s<24)return p()==="ru"?`через ${s} ч.`:`in ${s} h`;const a=Math.ceil(s/24);return p()==="ru"?`через ${a} дн.`:`in ${a} d`}function E(e,t){return t?de(Math.round(e/t*100),0,100):0}function de(e,t,n){return Math.max(t,Math.min(n,e))}function Jo(e,t){const n=10**t;return Math.round(e*n)/n}function He(e){return e[Math.floor(Math.random()*e.length)]}function hs(e,t){return Math.floor(Number(e)+Math.random()*(Number(t)-Number(e)))}function ri(e,t){return String(e)===String(t)?"selected":""}function DA(){let e="/";try{e=decodeURIComponent(location.pathname||"/")}catch{return"/"}if(!Zh(e))return"/";const t=e.replace(/\/textbooks(?:\/[^/?#]*)*\/?$/i,"/")||"/";if(t!==e||/^\/?textbooks(?:\/|$)/i.test(e))return t.endsWith("/")?t:`${t}/`;if(/\/[^/]+\.html$/i.test(e)){const n=e.replace(/[^/]+\.html$/i,"")||"/";return n.endsWith("/")?n:`${n}/`}return e.endsWith("/")?e:`${e}/`}function Wh(e="",t=""){const n=String(e||"").trim(),s=ve(n)?n.toLowerCase():n.toUpperCase(),a=String(t||"").trim(),o=s?`#textbooks/${encodeURIComponent(s)}`:"#textbooks/";return a?`${o}/${encodeURIComponent(a)}`:o}function jt(e=""){const t=String(e||"").trim(),n=t?t.startsWith("#")?t:`#${t.replace(/^#/,"")}`:"",s=`${DA()}${location.search||""}${n}`;`${location.pathname}${location.search||""}${location.hash||""}`!==s&&history.replaceState(null,"",s)}function Xs(){const e=vv(location.pathname||"/");return e.status==="valid"&&e.kind==="download"&&!location.hash||e.status==="valid"&&["textbooks","textbook-level","kana-course"].includes(e.kind||"")&&!location.hash?e:Zh(location.pathname||"/")?ws(location.hash):e.status==="not-found"?e:he("pathname","entity-not-found",e.raw,e.segments,e.locale,e.canonicalPath)}function Vh(e){return!e||e.status!=="not-found"?"":`${e.source}:${e.reason}:${e.raw}:${e.canonicalPath||""}`}function Qs(e){const t=e.route,n=e.status==="valid"?e.params:{};r.routeMatch=e,r.routeNotFound=e.status==="not-found"?e:null,r.route=t,r.kanjiPageId=t==="kanji"&&n.cardId||null,r.activeTextbookLevel=t==="textbooks"&&(n.level||n.course)||null,r.activeTextbookSubroute=t==="textbooks"&&n.subroute||null,r.activeJlptLesson=t==="jlpt-lesson"?n.level||null:t==="textbooks"&&n.level||r.activeJlptLesson,r.activeLearnView=t==="learn"&&n.view||$n,r.activeLearnNodeId=t==="learn"&&r.activeLearnView===sn&&n.targetId||null,r.activeLearnLegacyLessonId=t==="learn"&&r.activeLearnView===jn&&n.targetId||null}function zr(e){if(e.status==="not-found"||e.source==="pathname")return e;const t=e.params||{};if(e.route==="kanji"&&!XN(t.cardId))return!r.deferredDataLoaded&&QN(t.cardId)?e:he("hash","entity-not-found",e.raw,e.segments,e.locale);if(e.route==="textbooks"){const n=t.level||t.course||"",s=t.subroute||"";if(n&&ve(n))return Ga(n)?s&&!TL(n,s)?he("hash","entity-not-found",e.raw,e.segments,e.locale):e:r.bootAncillaryLoaded?he("hash","entity-not-found",e.raw,e.segments,e.locale):e;if(n&&!It(n))return!r.bootAncillaryLoaded&&F(n)?e:he("hash","entity-not-found",e.raw,e.segments,e.locale);if(n&&s&&!AL(n,s))return IL(n,s)?e:he("hash","entity-not-found",e.raw,e.segments,e.locale)}return e.route==="jlpt-lesson"&&!En(t.level)?!r.bootAncillaryLoaded&&F(t.level)?e:he("hash","entity-not-found",e.raw,e.segments,e.locale):e.route==="learn"&&(t.view===sn&&!As(t.targetId)||t.view===jn&&!r.lessons.some(n=>n.id===t.targetId))?he("hash","entity-not-found",e.raw,e.segments,e.locale):e}function FA(){return ws(location.hash).raw}function OA(){const e=ws(location.hash);return e.status==="valid"&&e.route==="kanji"&&e.params.cardId||""}function BA(){const e=ws(location.hash);return e.status==="valid"&&e.route==="textbooks"&&(e.params.level||e.params.course)||""}function zA(){const e=ws(location.hash);return e.status==="valid"&&e.route==="textbooks"&&e.params.subroute||""}function UA(){const e=ws(location.hash);return e.status==="valid"&&e.route==="jlpt-lesson"&&e.params.level||""}function JA(){return Gs().filter(e=>Ur(e.id)).length}function Ur(e){const t=r.progress?.achievements?.[e];return!!(t&&(t===!0||typeof t=="string"||t.unlockedAt||t.rewardXp!==void 0))}function i(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function g(e){return i(e)}})();
