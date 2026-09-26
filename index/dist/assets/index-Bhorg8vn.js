(function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))$(y);new MutationObserver(y=>{for(const A of y)if(A.type==="childList")for(const I of A.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&$(I)}).observe(document,{childList:!0,subtree:!0});function j(y){const A={};return y.integrity&&(A.integrity=y.integrity),y.referrerPolicy&&(A.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?A.credentials="include":y.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function $(y){if(y.ep)return;y.ep=!0;const A=j(y);fetch(y.href,A)}})();const N1="modulepreload",L1=function(w,v){return new URL(w,v).href},Vh={},Wh=function(v,j,$){let y=Promise.resolve();if(j&&j.length>0){const I=document.getElementsByTagName("link"),R=document.querySelector("meta[property=csp-nonce]"),O=R?.nonce||R?.getAttribute("nonce");y=Promise.allSettled(j.map(ae=>{if(ae=L1(ae,$),ae in Vh)return;Vh[ae]=!0;const _e=ae.endsWith(".css"),_t=_e?'[rel="stylesheet"]':"";if(!!$)for(let St=I.length-1;St>=0;St--){const er=I[St];if(er.href===ae&&(!_e||er.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${ae}"]${_t}`))return;const ct=document.createElement("link");if(ct.rel=_e?"stylesheet":N1,_e||(ct.as="script"),ct.crossOrigin="",ct.href=ae,O&&ct.setAttribute("nonce",O),document.head.appendChild(ct),_e)return new Promise((St,er)=>{ct.addEventListener("load",St),ct.addEventListener("error",()=>er(new Error(`Unable to preload CSS for ${ae}`)))})}))}function A(I){const R=new Event("vite:preloadError",{cancelable:!0});if(R.payload=I,window.dispatchEvent(R),!R.defaultPrevented)throw I}return y.then(I=>{for(const R of I||[])R.status==="rejected"&&A(R.reason);return v().catch(A)})},A1="ru",I1={ru:{code:"ru",urlSegment:"ru",hreflang:"ru",nativeName:"Русский",englishName:"Russian",direction:"ltr",intlLocale:"ru-RU",fallbackLocale:"en",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.92,tts:{preferredLang:"ru-RU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},en:{code:"en",urlSegment:"en",hreflang:"en",nativeName:"English",englishName:"English",direction:"ltr",intlLocale:"en-US",fallbackLocale:"ru",publicationStatus:"published",uiStatus:"ready",contentStatus:"ready",seoStatus:"indexable",translationCompleteness:.88,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},es:{code:"es",urlSegment:"es",hreflang:"es",nativeName:"Español",englishName:"Spanish",direction:"ltr",intlLocale:"es-ES",fallbackLocale:"en",publicationStatus:"pilot",uiStatus:"pilot",contentStatus:"pilot",seoStatus:"noindex",translationCompleteness:.08,tts:{preferredLang:"es-ES",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"pt-BR":{code:"pt-BR",urlSegment:"pt-br",hreflang:"pt-BR",nativeName:"Português do Brasil",englishName:"Brazilian Portuguese",direction:"ltr",intlLocale:"pt-BR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pt-BR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},de:{code:"de",urlSegment:"de",hreflang:"de",nativeName:"Deutsch",englishName:"German",direction:"ltr",intlLocale:"de-DE",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"de-DE",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},fr:{code:"fr",urlSegment:"fr",hreflang:"fr",nativeName:"Français",englishName:"French",direction:"ltr",intlLocale:"fr-FR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"fr-FR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},it:{code:"it",urlSegment:"it",hreflang:"it",nativeName:"Italiano",englishName:"Italian",direction:"ltr",intlLocale:"it-IT",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"it-IT",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},pl:{code:"pl",urlSegment:"pl",hreflang:"pl",nativeName:"Polski",englishName:"Polish",direction:"ltr",intlLocale:"pl-PL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"pl-PL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},uk:{code:"uk",urlSegment:"uk",hreflang:"uk",nativeName:"Українська",englishName:"Ukrainian",direction:"ltr",intlLocale:"uk-UA",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"uk-UA",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},tr:{code:"tr",urlSegment:"tr",hreflang:"tr",nativeName:"Türkçe",englishName:"Turkish",direction:"ltr",intlLocale:"tr-TR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"tr-TR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hans":{code:"zh-Hans",urlSegment:"zh-cn",hreflang:"zh-Hans",nativeName:"简体中文",englishName:"Simplified Chinese",direction:"ltr",intlLocale:"zh-Hans-CN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-CN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"zh-Hant":{code:"zh-Hant",urlSegment:"zh-tw",hreflang:"zh-Hant",nativeName:"繁體中文",englishName:"Traditional Chinese",direction:"ltr",intlLocale:"zh-Hant-TW",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"zh-TW",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ko:{code:"ko",urlSegment:"ko",hreflang:"ko",nativeName:"한국어",englishName:"Korean",direction:"ltr",intlLocale:"ko-KR",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ko-KR",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},vi:{code:"vi",urlSegment:"vi",hreflang:"vi",nativeName:"Tiếng Việt",englishName:"Vietnamese",direction:"ltr",intlLocale:"vi-VN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"vi-VN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},id:{code:"id",urlSegment:"id",hreflang:"id",nativeName:"Bahasa Indonesia",englishName:"Indonesian",direction:"ltr",intlLocale:"id-ID",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"id-ID",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},th:{code:"th",urlSegment:"th",hreflang:"th",nativeName:"ไทย",englishName:"Thai",direction:"ltr",intlLocale:"th-TH",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"th-TH",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hi:{code:"hi",urlSegment:"hi",hreflang:"hi",nativeName:"हिन्दी",englishName:"Hindi",direction:"ltr",intlLocale:"hi-IN",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hi-IN",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ar:{code:"ar",urlSegment:"ar",hreflang:"ar",nativeName:"العربية",englishName:"Arabic",direction:"rtl",intlLocale:"ar",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ar",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Tahoma, Arial, system-ui, sans-serif"},ja:{code:"ja",urlSegment:"ja",hreflang:"ja",nativeName:"日本語",englishName:"Japanese interface",direction:"ltr",intlLocale:"ja-JP",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"source",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ja-JP",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"'Noto Sans JP', Inter, system-ui, sans-serif"},nl:{code:"nl",urlSegment:"nl",hreflang:"nl",nativeName:"Nederlands",englishName:"Dutch",direction:"ltr",intlLocale:"nl-NL",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"nl-NL",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},cs:{code:"cs",urlSegment:"cs",hreflang:"cs",nativeName:"Čeština",englishName:"Czech",direction:"ltr",intlLocale:"cs-CZ",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"cs-CZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},ro:{code:"ro",urlSegment:"ro",hreflang:"ro",nativeName:"Română",englishName:"Romanian",direction:"ltr",intlLocale:"ro-RO",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"ro-RO",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},hu:{code:"hu",urlSegment:"hu",hreflang:"hu",nativeName:"Magyar",englishName:"Hungarian",direction:"ltr",intlLocale:"hu-HU",fallbackLocale:"en",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"hu-HU",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},be:{code:"be",urlSegment:"be",hreflang:"be",nativeName:"Беларуская",englishName:"Belarusian",direction:"ltr",intlLocale:"be-BY",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"be-BY",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},kk:{code:"kk",urlSegment:"kk",hreflang:"kk",nativeName:"Қазақша",englishName:"Kazakh",direction:"ltr",intlLocale:"kk-KZ",fallbackLocale:"ru",publicationStatus:"planned",uiStatus:"planned",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"kk-KZ",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},"en-XA":{code:"en-XA",urlSegment:"en-xa",hreflang:"en-XA",nativeName:"[!! English pseudo !!]",englishName:"Pseudo locale",direction:"ltr",intlLocale:"en-US",fallbackLocale:"en",publicationStatus:"internal",uiStatus:"pseudo",contentStatus:"planned",seoStatus:"planned",translationCompleteness:0,tts:{preferredLang:"en-US",japaneseVoiceLang:"ja-JP"},formatting:{numberingSystem:"latn",calendar:"gregory"},fontStack:"Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"}},Zd={defaultLocale:A1,locales:I1},T1=["home","learn","review","dictionary","download","about","kanji","writing","stats","achievements","eva-room","jlpt-lesson","textbooks"],Xd="not-found",Gr=Zd.defaultLocale,R1=new Set(["home","review","dictionary","download","about","writing","stats","achievements","eva-room"]),dv=/^n[1-5]$/i,_1=/^(?:hiragana|katakana)$/i,P1=/^[A-Za-z0-9_-]+$/,E1=/^[\p{Letter}\p{Number}_-]+$/u,M1=/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/,K1=/^[a-z]{2}(?:-[a-z0-9]{2,8})?$/i,D1=new Map(Object.entries(Zd.locales).map(([w,v])=>[String(v.urlSegment).toLowerCase(),w]));function Ie(w,v,j,$,y={},A=Gr,I={}){return{status:"valid",source:w,route:v,locale:A,params:y,raw:j,segments:$,...I}}function ve(w,v,j,$=[],y=Gr,A){return{status:"not-found",source:w,route:Xd,locale:y,params:{},raw:j,segments:$,reason:v,canonicalPath:A}}function uv(w){return!!(w&&T1.includes(w))}function zd(w){const v=String(w||"").trim().toUpperCase();return dv.test(v)?v:""}function pv(w){const v=String(w||"").trim().toLowerCase();return _1.test(v)?v:""}function gv(w){try{return{ok:!0,value:decodeURIComponent(w)}}catch{return{ok:!1}}}function eu(w){return w.replace(/^\/+|\/+$/g,"").split("/").filter(Boolean)}function He(w,v,j=eu(v)){return ve("hash",w,v,j)}function Ud(w){return P1.test(w)}function F1(w){return E1.test(w)}function bs(w){const v=String(w||"").replace(/^#/,"").trim(),j=gv(v);if(!j.ok)return He("invalid-parameter",v,[]);const $=j.value.replace(/^\/+|\/+$/g,""),y=eu($),A=(y[0]||"home").toLowerCase();if(!y.length)return Ie("hash","home",$,y);if(A==="jlpt"){if(y.length<2||y.length>3)return He("unknown-route",$,y);const I=zd(y[1]);if(!I)return He("invalid-parameter",$,y);const R=y[2]||"";return R&&!Ud(R)?He("invalid-parameter",$,y):Ie("hash","textbooks",$,y,{level:I,subroute:R,legacyRoute:"jlpt"})}if(A==="textbooks"){if(y.length>3)return He("unknown-route",$,y);if(y.length===1)return Ie("hash","textbooks",$,y);const I=zd(y[1]),R=pv(y[1]);if(!I&&!R)return He("invalid-parameter",$,y);const O=y[2]||"";return O&&!Ud(O)?He("invalid-parameter",$,y):Ie("hash","textbooks",$,y,R?{course:R,subroute:O}:{level:I,subroute:O})}if(A==="jlpt-lesson"){if(y.length!==2)return He("unknown-route",$,y);const I=zd(y[1]);return I?Ie("hash","jlpt-lesson",$,y,{level:I}):He("invalid-parameter",$,y)}if(A==="kanji"){if(y.length!==2)return He("unknown-route",$,y);const I=y[1];return F1(I)?Ie("hash","kanji",$,y,{cardId:I}):He("invalid-parameter",$,y)}if(A==="learn"){if(y.length===1)return Ie("hash","learn",$,y,{view:"map"});if(y.length!==3)return He("unknown-route",$,y);const I=y[1].toLowerCase(),R=y[2];return!["lesson","legacy"].includes(I)||!Ud(R)?He("invalid-parameter",$,y):Ie("hash","learn",$,y,{view:I,targetId:R})}return R1.has(A)?y.length!==1?He("unknown-route",$,y):Ie("hash",A,$,y):(uv(A),He("unknown-route",$,y))}function O1(w){return String(w||"/").split(/[?#]/,1)[0]||"/"}function B1(w){const v=O1(w),j=gv(v);if(!j.ok)return{ok:!1,raw:v};const $=j.value.replace(/\/{2,}/g,"/"),y=$.startsWith("/")?$:`/${$}`,A=y===""?"/":y;return{ok:!0,path:A,segments:eu(A)}}function z1(w){return D1.get(w.toLowerCase())||null}function Zs(w,v="/"){return`/${Zd.locales[w].urlSegment}${v.startsWith("/")?v:`/${v}`}`}function mv(w){const v=B1(w);if(!v.ok)return ve("pathname","invalid-parameter",v.raw,[],null);const{path:j,segments:$}=v,y=j;if(j==="/"||/^\/index\.html$/i.test(j))return Ie("pathname","home",y,$,{},Gr,{kind:"app-shell",canonicalPath:"/"});if(/^\/index(?:\/dist)?(?:\/index\.html)?\/?$/i.test(j))return Ie("pathname","home",y,$,{},Gr,{kind:"legacy-index",canonicalPath:"/"});if(/^\/download\/?$/i.test(j))return Ie("pathname","download",y,$,{},Gr,{kind:"download",canonicalPath:"/download/"});if(!$.length)return Ie("pathname","home",y,$,{},Gr,{kind:"app-shell",canonicalPath:"/"});const A=z1($[0]);if(!A){const R=K1.test($[0])?"unknown-locale":"unknown-route";return ve("pathname",R,y,$,null)}if($.length===1)return Ie("pathname","home",y,$,{},A,{kind:"localized-home",canonicalPath:Zs(A,"/")});const I=$[1].toLowerCase();if(I==="download"&&$.length===2)return Ie("pathname","download",y,$,{},A,{kind:"download",canonicalPath:Zs(A,"/download/")});if(I==="textbooks"){if($.length===2)return Ie("pathname","textbooks",y,$,{},A,{kind:"textbooks",canonicalPath:Zs(A,"/textbooks/")});if($.length===3){const R=$[2].toLowerCase(),O=pv(R);return O?Ie("pathname","textbooks",y,$,{course:O},A,{kind:"kana-course",canonicalPath:Zs(A,`/textbooks/${O}/`)}):dv.test(R)?Ie("pathname","textbooks",y,$,{level:R.toUpperCase()},A,{kind:"textbook-level",canonicalPath:Zs(A,`/textbooks/${R}/`)}):ve("pathname","invalid-parameter",y,$,A)}return ve("pathname","unknown-route",y,$,A)}if(I==="kanji"){if($.length===2)return Ie("pathname","dictionary",y,$,{},A,{kind:"kanji-hub",canonicalPath:Zs(A,"/kanji/")});if($.length===3){const R=$[2].toLowerCase();return M1.test(R)?Ie("pathname","kanji",y,$,{slug:R},A,{kind:"kanji-page",canonicalPath:Zs(A,`/kanji/${R}/`)}):ve("pathname","invalid-parameter",y,$,A)}return ve("pathname","unknown-route",y,$,A)}return ve("pathname","unknown-route",y,$,A)}function Xh(w){const v=mv(w);return v.status==="valid"&&(v.kind==="app-shell"||v.kind==="legacy-index")}function U1(w){const v=()=>w(bs(window.location.hash));return window.addEventListener("hashchange",v),()=>window.removeEventListener("hashchange",v)}function J1(){let w=0,v=null;return{begin(j){v?.abort(),v=new AbortController;const $=++w,y=v;return{route:j,token:$,signal:y.signal,isCurrent:()=>w===$&&!y.signal.aborted}},abort(){v?.abort()}}}const ri=[5,60,12*60,24*60,2*24*60,4*24*60],Jd={again:"Again",forgot:"Again",hard:"Hard",good:"Good",remember:"Good",easy:"Easy"};function ot(w){const v=w&&typeof w=="object"?w:{},j=V1(v.state??v.stage),$=W1(v.dueAt??v.nextReview),y=ws(v.reviewCount??v.reviews,0),A=ws(v.correct,0),I=ws(v.wrong,0),R={...v,state:j,dueAt:$,reviewCount:y,intervalDays:ws(v.intervalDays,0),easeFactor:ws(v.easeFactor,2.5),srsStep:ws(v.srsStep,j==="New"?-1:0),lapses:ws(v.lapses,0),correct:A,wrong:I,successRate:ws(v.successRate,A+I?Math.round(A/(A+I)*100):0),history:Array.isArray(v.history)?v.history.slice(-120):[]};return delete R.nextReview,delete R.reviews,delete R.stage,delete R.lastReview,R}function $e(w,v,j=v,$=new Date){const y=ot(w),A=H1(y,v),I={...y,history:[...y.history]};let R=y.srsStep,O=y.easeFactor;A==="again"?(R=0,O=Math.max(1.3,O-.2),I.state="Learning",I.wrong+=1,y.state!=="New"&&(I.lapses+=1)):A==="hard"?(R=Math.max(1,R),O=Math.max(1.3,O-.15),I.correct+=1):A==="easy"?(R=R<0?2:R+2,O=Math.min(3.2,O+.15),I.correct+=1):(R=R<0?0:R+1,I.correct+=1);const ae=X1(R)/1440;return A!=="again"&&(I.state=ae<1?"Learning":"Review"),I.correct>=8&&ae>=30&&(I.state="Mastered"),I.srsStep=R,I.easeFactor=Zh(O,2),I.intervalDays=Zh(ae,6),I.dueAt=new Date($.getTime()+ae*864e5).toISOString(),I.reviewCount+=1,I.successRate=Math.round(I.correct/Math.max(I.correct+I.wrong,1)*100),I.lastReviewedAt=$.toISOString(),I.lastRating=Jd[j]||Jd[A],I.lastDecision=Jd[A],I.history=[...I.history,{at:$.toISOString(),rating:I.lastRating,decision:I.lastDecision,from:y.state,to:I.state,intervalDays:ae,srsStep:R}].slice(-120),I}const Qh=Object.freeze({cards:4,exercises:1});function Qd(w,v=Date.now()){const j=new Map;for(const $ of w){if(!$.cardId||$.state==="New")continue;const y=$.dueAt?Date.parse($.dueAt):Number.NaN;Number.isFinite(y)&&y<=v&&!j.has($.cardId)&&j.set($.cardId,$)}return[...j.values()].sort(($,y)=>Date.parse($.dueAt||"")-Date.parse(y.dueAt||""))}function Yh(w,v=Date.now()){const j=Qd(w,v);let $=0,y=0;const A=Object.freeze(j.filter(O=>O.kind==="exercise"?y++<Qh.exercises:$++<Qh.cards).map(O=>Object.freeze({...O}))),I=new Set(A.map(O=>O.cardId)),R=new Set;return{initial:A,totalDue:j.length,complete(O){I.has(O)&&R.add(O)},get remaining(){return A.filter(O=>!R.has(O.cardId))},get remainingCount(){return A.length-R.size}}}function Gd(w,v,j=new Date){let $=0;for(const y of new Set(v.filter(Boolean))){const A=w[y];A&&(A.state!=="New"||A.reviewCount>0||A.dueAt||A.history?.length)||(w[y]={...ot(A),state:"Learning",srsStep:0,intervalDays:5/1440,dueAt:new Date(j.getTime()+5*6e4).toISOString(),enrolledAt:j.toISOString()},$+=1)}return $}function G1(w,v){let j=0;for(const $ of v){const y=w[$.id];if(y&&(y.state!=="New"||y.reviewCount||y.dueAt||y.history?.length))continue;const A=$.aliases.map(I=>w[I]).filter(I=>I&&I.state!=="New");A.sort((I,R)=>(Date.parse(String(R.lastReviewedAt||""))||0)-(Date.parse(String(I.lastReviewedAt||""))||0)||R.reviewCount-I.reviewCount),A[0]&&(w[$.id]={...A[0],history:[...A[0].history]},j+=1)}return j}function q1(w,v){return Object.entries(w).reduce((j,[$,y])=>{const A=v.get($);return A&&A!==$&&w[A]?.state!=="New"&&w[A]?j:j+(Number(y.reviewCount)||0)},0)}function H1(w,v){return v==="again"||v==="forgot"?"again":v!=="remember"?v:w.state==="New"?"good":w.state==="Learning"?w.successRate>=70||w.correct>=2?"good":"hard":w.successRate>=88&&w.correct>=5&&w.lapses<=1?"easy":w.successRate<70||w.lapses>Math.max(1,Math.floor(w.correct/3))?"hard":"good"}function V1(w){const v=String(w||"new").toLowerCase();return v.includes("master")?"Mastered":v.includes("learn")?"Learning":v.includes("review")?"Review":"New"}function W1(w){return typeof w!="string"||!Number.isFinite(Date.parse(w))?null:new Date(w).toISOString()}function ws(w,v){const j=Number(w);return Number.isFinite(j)&&j>=0?j:v}function Zh(w,v){const j=10**v;return Math.round(w*j)/j}function X1(w){return w<ri.length?ri[Math.max(0,w)]:ri[ri.length-1]*2**(w-(ri.length-1))}const fv="flashKanji.progress.v2",Q1="flashKanji.progress.v1";function Y1(w=localStorage){const v=w.getItem(fv)||w.getItem(Q1);if(!v)return null;try{const j=JSON.parse(v);if(!j||typeof j!="object")return null;const $=j;return $.progress&&typeof $.progress=="object"?$.progress:$}catch(j){return console.warn("Flash Kanji ignored damaged LocalStorage progress.",j),null}}function Z1(w){return!w||typeof w!="object"?{}:Object.fromEntries(Object.entries(w).map(([v,j])=>[v,ot(j)]))}function eI(w,v=localStorage){try{return v.setItem(fv,JSON.stringify(w)),!0}catch(j){return console.warn("Flash Kanji could not save LocalStorage progress.",j),!1}}function ev(){const w=new Map;return{get(v,j){const $=w.get(v);if($)return $;const y=j().catch(A=>{throw w.get(v)===y&&w.delete(v),A});return w.set(v,y),y},delete(v){w.delete(v)}}}function tI(w,v){if(!w.length||w.some(y=>!v.has(y.kanji)))return!1;const j=new Set(w.map(y=>y.kanji));return v.size-j.size+w.length>=Math.max(4,w.length)}const nI=/[\/／,、;；\s]+/u,sI=/[\u30a1-\u30f6]/g,rI=/[()[\]{}.\-‐-―]/gu;function aI(w){return String(w||"").normalize("NFKC").replace(sI,v=>String.fromCharCode(v.charCodeAt(0)-96))}function hv(w){return(Array.isArray(w)?w.join(" / "):String(w||"")).split(nI).map(j=>aI(j).replace(rI,"").trim()).filter(Boolean)}function iI(w){if(!w)return[];const v=[...nv("onyomi","On",w.onyomi),...nv("kunyomi","Kun",w.kunyomi)],j=new Set,$=v.filter(I=>{const R=I.kana;return!R||j.has(R)?!1:(j.add(R),!0)});if($.length)return $;const y=hv(w.hiragana)[0];if(y)return[{kind:"hiragana",kana:y,label:"Kana"}];const A=String(w.kanji||"").trim();return A?[{kind:"kanji",kana:A,label:"Kanji"}]:[]}function oI(w,v=-1,j=""){const $=j&&j!=="cycle"?w.filter(A=>A.kind===j):w;if(!$.length)return{item:null,cursor:-1};const y=(Number(v)+1)%$.length;return{item:$[y],cursor:y}}function tv(w,v={}){const j=String(w||"").trim(),$=typeof window<"u"?window:void 0,y=v.synth||$?.speechSynthesis,A=v.Utterance||$?.SpeechSynthesisUtterance;if(!j||!y||!A)return!1;y.cancel();const I=new A(j);I.lang="ja-JP",I.rate=v.rate??.92,I.voice=lI(y),I.onstart=()=>v.onStart?.(),I.onend=()=>v.onEnd?.(),I.onerror=R=>v.onError?.(R);try{return y.speak(I),!0}catch(R){return v.onError?.(R),!1}}function nv(w,v,j){return hv(j).map($=>({kind:w,kana:$,label:v}))}function lI(w){const v=typeof w.getVoices=="function"?w.getVoices():[];return v.find(j=>/^ja[-_]?JP$/iu.test(j.lang))||v.find(j=>/^ja/iu.test(j.lang))||null}const vv=["hiragana","katakana"];function we(w){return vv.includes(String(w||"").toLowerCase())}function Yd(w){return String(w??"").normalize("NFKC").trim().replace(/\s+/gu," ").toLowerCase()}function cI(w,v){const j=Yd(w);return j?(Array.isArray(v)?v:[]).some(y=>Yd(y)===j):!1}function dI(){return{schema_version:1,content_version:"2026-08-kana-v1",settings:{showRomaji:!0},courses:{}}}function qd(w){const v=dI();if(!w||typeof w!="object")return v;const j=w,$=j.settings&&typeof j.settings=="object"?j.settings:{},y=j.courses&&typeof j.courses=="object"?j.courses:{},A={};for(const I of vv){const R=y[I]&&typeof y[I]=="object"?y[I]:{},O=R.review&&typeof R.review=="object"?R.review:{};A[I]={currentRoute:typeof R.currentRoute=="string"?R.currentRoute:"",lessons:li(R.lessons,mI),practices:li(R.practices,fI),finalTest:gI(R.finalTest),review:Object.fromEntries(Object.entries(O).map(([ae,_e])=>[ae,ot(_e)])),writing:R.writing&&typeof R.writing=="object"?{...R.writing}:{},updatedAt:typeof R.updatedAt=="string"?R.updatedAt:null}}return{...v,...j,schema_version:1,content_version:"2026-08-kana-v1",settings:{...v.settings,showRomaji:typeof $.showRomaji=="boolean"?$.showRomaji:v.settings.showRomaji},courses:A}}function uI(w,v){var j;return(j=w.courses)[v]||(j[v]={currentRoute:"",lessons:{},practices:{},finalTest:wv(),review:{},writing:{},updatedAt:null}),w.courses[v]}function wv(){return{sections:{},completed:!1,passed:!1,latestScore:0,bestScore:0,score:0,total:0,updatedAt:null}}function pI(w,v,j=new Date){const $={},y={};let A=0;const I=w.items.length;for(const R of w.items){const O=String(v[R.number]??"");$[R.number]=O;const ae=cI(O,R.accepted_answers);y[R.number]=ae,ae&&(A+=1)}return{answers:$,correct:y,score:A,total:I,completed:I>0,passed:I>0&&A/I>=.8,updatedAt:j.toISOString()}}function Hd(w,v){const j=w.map(R=>v[R.id]).filter(Boolean),$=w.reduce((R,O)=>R+O.items.length,0),y=j.reduce((R,O)=>R+Number(O.score||0),0),A=j.reduce((R,O)=>R+Number(O.total||0),0),I=j.reduce((R,O)=>R+Math.max(Number(O.score||0),0),0);return{latestScore:y,bestScore:I,completed:$>0&&A>=$,passed:$>0&&y/$>=.8}}function sv(w,v,j=new Date){return $e(w,v,v,j)}function gI(w){const v=w&&typeof w=="object"?w:{},j=Xo(v),$=li(v.sections,Xo);return{...wv(),sections:$,completed:!!(v.completed||j.completed),passed:!!(v.passed||j.passed),latestScore:Number(v.latestScore||j.score||0),bestScore:Number(v.bestScore||j.score||0),score:Number(v.score||v.latestScore||j.score||0),total:Number(v.total||j.total||0),updatedAt:typeof v.updatedAt=="string"?v.updatedAt:j.updatedAt}}function Xo(w){const v=w&&typeof w=="object"?w:{};return{answers:v.answers&&typeof v.answers=="object"?{...v.answers}:{},correct:v.correct&&typeof v.correct=="object"?{...v.correct}:{},score:Number(v.score||0),total:Number(v.total||0),completed:!!v.completed,passed:!!v.passed,updatedAt:typeof v.updatedAt=="string"?v.updatedAt:null}}function mI(w){const v=w&&typeof w=="object"?w:{};return{exercises:li(v.exercises,Xo),completed:!!v.completed,passed:!!v.passed,latestScore:Number(v.latestScore||0),bestScore:Number(v.bestScore||0),updatedAt:typeof v.updatedAt=="string"?v.updatedAt:null}}function fI(w){const v=w&&typeof w=="object"?w:{};return{exercises:li(v.exercises,Xo),completed:!!v.completed,passed:!!v.passed,latestScore:Number(v.latestScore||0),bestScore:Number(v.bestScore||0),updatedAt:typeof v.updatedAt=="string"?v.updatedAt:null}}function li(w,v){return!w||typeof w!="object"?{}:Object.fromEntries(Object.entries(w).map(([j,$])=>[j,v($)]))}const bv=109492033,hI=["learning_start","lesson_open","lesson_complete","review_open","review_session_complete","kanji_open","writing_complete","final_test_start","final_test_complete","final_test_pass","progress_export","apk_download","pwa_install_click","pwa_installed","share_opened","share_completed","share_link_copied"],vI={home:"/app/home",review:"/app/review",dictionary:"/app/dictionary",download:"/app/download",about:"/app/about",writing:"/app/writing",stats:"/app/stats",achievements:"/app/achievements","eva-room":"/app/eva-room"},wI={ru:{home:"Flash Kanji — Главная",learn:"Flash Kanji — Маршрут обучения",review:"Flash Kanji — Повторение",dictionary:"Flash Kanji — Словарь кандзи",download:"Flash Kanji — Скачать приложение",about:"Flash Kanji — О проекте",writing:"Flash Kanji — Практика письма",stats:"Flash Kanji — Статистика",achievements:"Flash Kanji — Достижения","eva-room":"Flash Kanji — Eva Room","not-found":"Flash Kanji — Страница не найдена"},en:{home:"Flash Kanji — Home",learn:"Flash Kanji — Learning path",review:"Flash Kanji — Review",dictionary:"Flash Kanji — Kanji dictionary",download:"Flash Kanji — Download app",about:"Flash Kanji — About",writing:"Flash Kanji — Writing practice",stats:"Flash Kanji — Stats",achievements:"Flash Kanji — Achievements","eva-room":"Flash Kanji — Eva Room","not-found":"Flash Kanji — Not Found"}},bI=/^[\p{Letter}\p{Number}_-]{1,96}$/u,kI=/^[a-z][a-z0-9_]{1,64}$/,yI=/^[a-z][a-z0-9_-]{0,48}$/i,$I=/^N[1-5]$/i,rv=new Set;let oi="";function kv(w,v={}){if(!w||w.status==="not-found")return"/app/not-found";const j=w.params||{},$=String(w.route||v.route||"home");if($==="learn"){const y=Zt(j.view||v.activeLearnView||"map").toLowerCase(),A=Zt(j.targetId||v.activeLearnNodeId||v.activeLearnLegacyLessonId);return y==="lesson"&&A?`/app/learn/lesson/${A}`:y==="legacy"&&A?`/app/learn/legacy/${A}`:"/app/learn"}if($==="textbooks"){const y=ci(j.level||v.activeTextbookLevel),A=Zt(j.subroute||v.activeTextbookSubroute);return y?A?`/app/textbooks/${y}/${A}`:`/app/textbooks/${y}`:"/app/textbooks"}if($==="kanji"){const y=Zt(j.cardId||v.kanjiPageId||j.slug);return y?`/app/kanji/${y}`:"/app/kanji"}if($==="jlpt-lesson"){const y=ci(j.level||v.activeJlptLesson);return y?`/app/jlpt-lesson/${y}`:"/app/jlpt-lesson"}return vI[$]||"/app/not-found"}function yv(w,v={}){const j=NI(v),$=wI[j];if(!w||w.status==="not-found")return $["not-found"];const y=w.params||{},A=String(w.route||v.route||"home");if(A==="learn"){const I=Zt(y.view||v.activeLearnView||"map").toLowerCase(),R=Zt(y.targetId||v.activeLearnNodeId||v.activeLearnLegacyLessonId);return I==="lesson"&&R?j==="ru"?`Flash Kanji — Урок маршрута ${R}`:`Flash Kanji — Path lesson ${R}`:I==="legacy"&&R?j==="ru"?`Flash Kanji — Урок ${R}`:`Flash Kanji — Lesson ${R}`:$.learn}if(A==="textbooks"){const I=ci(y.level||v.activeTextbookLevel).toUpperCase(),R=Zt(y.subroute||v.activeTextbookSubroute);return I?R?["final","final-test"].includes(R)?j==="ru"?`Flash Kanji — JLPT ${I} · Финальный тест`:`Flash Kanji — JLPT ${I} · Final test`:j==="ru"?`Flash Kanji — JLPT ${I} · Урок ${av(R)}`:`Flash Kanji — JLPT ${I} · Lesson ${av(R)}`:j==="ru"?`Flash Kanji — Учебник JLPT ${I}`:`Flash Kanji — JLPT ${I} textbook`:j==="ru"?"Flash Kanji — Учебники":"Flash Kanji — Textbooks"}if(A==="kanji"){const I=Zt(y.cardId||v.kanjiPageId||y.slug),R=AI(v,I)||I;return j==="ru"?`Flash Kanji — Кандзи ${R}`:`Flash Kanji — Kanji ${R}`}if(A==="jlpt-lesson"){const I=ci(y.level||v.activeJlptLesson).toUpperCase();return I?j==="ru"?`Flash Kanji — JLPT ${I}`:`Flash Kanji — JLPT ${I}`:$.learn}return $[A]||$["not-found"]}function jI(w,v={}){const j=kv(w,v),$=yv(w,v);return oi=j,typeof window<"u"&&(window.__FLASH_KANJI_METRIKA_INITIAL_PATH=j),yn("prime",{virtualPath:j,title:$}),{sent:!1,virtualPath:j,title:$,reason:"duplicate"}}function SI(w,v={}){const j=kv(w,v),$=yv(w,v);if(j===oi)return yn("skip-pageview-duplicate",{virtualPath:j,title:$,previousVirtualPath:oi}),{sent:!1,virtualPath:j,title:$,reason:"duplicate"};const y=oi||void 0;try{return typeof window>"u"?{sent:!1,virtualPath:j,title:$,referer:y,reason:"no-window"}:typeof window.ym!="function"?(yn("skip-pageview-missing-ym",{virtualPath:j,title:$,previousVirtualPath:y}),{sent:!1,virtualPath:j,title:$,referer:y,reason:"missing-ym"}):(window.ym(bv,"hit",j,{title:$,...y?{referer:y}:{}}),oi=j,yn("pageview",{virtualPath:j,title:$,previousVirtualPath:y}),{sent:!0,virtualPath:j,title:$,referer:y})}catch(A){return yn("pageview-error",{virtualPath:j,title:$,previousVirtualPath:y,error:A instanceof Error?A.message:String(A)}),{sent:!1,virtualPath:j,title:$,referer:y,reason:"error"}}}function CI(w,v={},j={}){const $=xI(w);if(!$)return yn("skip-goal-invalid",{goal:w}),!1;const y=j.dedupeKey?`${$}:${j.dedupeKey}`:"";if(y&&rv.has(y))return yn("skip-goal-duplicate",{goal:$,params:qo(v),dedupeKey:y}),!1;try{if(typeof window>"u")return!1;if(typeof window.ym!="function")return yn("skip-goal-missing-ym",{goal:$,params:qo(v)}),!1;const A=qo(v);return window.ym(bv,"reachGoal",$,A),y&&rv.add(y),yn("goal",{goal:$,params:A}),!0}catch(A){return yn("goal-error",{goal:$,params:qo(v),error:A instanceof Error?A.message:String(A)}),!1}}function xI(w){const v=String(w||"").trim().toLowerCase();return kI.test(v)&&(hI.includes(v)||/^social_[a-z0-9_]+_opened$/.test(v))?v:""}function qo(w){const v={},j=Zt(w.route).toLowerCase(),$=ci(w.level).toUpperCase(),y=Zt(w.lessonId),A=Zt(w.cardId),I=LI(w.source);return j&&(v.route=j),$&&(v.level=$),y&&(v.lessonId=y),A&&(v.cardId=A),I&&(v.source=I),v}function NI(w){return String(w.progress?.settings?.language||"ru").toLowerCase()==="en"?"en":"ru"}function ci(w){const v=String(w||"").trim().toUpperCase();return $I.test(v)?v.toLowerCase():""}function Zt(w){const v=String(w||"").trim();return bI.test(v)?encodeURIComponent(v):""}function LI(w){const v=String(w||"").trim();return yI.test(v)?v.toLowerCase():""}function av(w){const v=w.match(/-(\d+)$/);return v?.[1]?String(Number(v[1])):w}function AI(w,v){if(!v||!Array.isArray(w.cards))return"";const j=II(v),$=w.cards.find(y=>String(y.id||"")===j||String(y.slug||"")===j);return String($?.kanji||"").trim()}function II(w){try{return decodeURIComponent(w)}catch{return w}}function yn(w,v){TI()&&console.debug(`[Flash Kanji Metrika] ${w}`,v)}function TI(){if(typeof window>"u")return!1;try{if(new URLSearchParams(window.location.search||"").get("debugMetrika")==="1")return!0;const v=String(window.location.hash||"").split("?",2)[1]||"";return new URLSearchParams(v).get("debugMetrika")==="1"}catch{return!1}}const Qo="flashKanji.hasVisited",Yo="flashKanji.changelog.lastSeenVersion",$v=new Set;function RI(w){if(!w||typeof w!="object")return null;const v=w,j=String(v.currentVersion||"").trim();if(!j)return null;const $=Array.isArray(v.entries)?v.entries.map(EI).filter(y=>!!y):[];return $.length?{currentVersion:j,entries:$}:null}function _I(w,v,j,$={}){const y=w?.currentVersion||"",A=w?.entries.find(O=>O.version===y)||w?.entries[0]||null;return!w||!y||!A||$v.has(y)?{currentVersion:y,shouldShow:!1,shouldMarkHandled:!1,entry:null}:iv(j,Yo)===y?{currentVersion:y,shouldShow:!1,shouldMarkHandled:!1,entry:null}:!($.hadPriorVisit||iv(j,Qo)==="true"||$.useProgressSignals!==!1&&PI(v))?{currentVersion:y,shouldShow:!1,shouldMarkHandled:!0,entry:null}:{currentVersion:y,shouldShow:!0,shouldMarkHandled:!1,entry:A}}function Vd(w,v){const j=String(w||"").trim();j&&($v.add(j),ov(v,Qo,"true"),ov(v,Yo,j))}function PI(w){if(!w||typeof w!="object")return!1;const v=w;return!!(ii(v.appOpens)>0||ai(v.lessonCompletions)>0||ai(v.cards)>0||ai(v.seenKanji)>0||ai(v.daily)>0||ai(v.favorites)>0||DI(v.transactions)>0||ii(v.totalMoonFragmentsEarned)>0||ii(v.secrets?.evaClicks)>0||v.secrets?.nightVisit||ii(v.visits?.streak)>0||ii(v.visits?.bestStreak)>0)}function EI(w){if(!w||typeof w!="object")return null;const v=w,j=String(v.version||"").trim();return j?{version:j,date:String(v.date||"").trim(),title:MI(v.title),items:KI(v.items)}:null}function MI(w){const v=w&&typeof w=="object"?w:{};return{ru:String(v.ru||v.en||"").trim(),en:String(v.en||v.ru||"").trim()}}function KI(w){const v=w&&typeof w=="object"?w:{},j=Array.isArray(v.ru)?v.ru.map(y=>String(y||"").trim()).filter(Boolean):[],$=Array.isArray(v.en)?v.en.map(y=>String(y||"").trim()).filter(Boolean):[];return{ru:j.length?j:$,en:$.length?$:j}}function iv(w,v){try{return w?.getItem(v)||""}catch{return""}}function ov(w,v,j){try{w?.setItem(v,j)}catch{}}function ai(w){return w&&typeof w=="object"&&!Array.isArray(w)?Object.keys(w).length:0}function DI(w){return Array.isArray(w)?w.length:0}function ii(w){const v=Number(w||0);return Number.isFinite(v)?v:0}const FI="bg_study_hub",Ho="outfit_fis_mentor";function di(w,v=0){const j=Number(w),$=Number(v),y=Number.isFinite(j)?j:Number.isFinite($)?$:0;return Math.max(0,Math.floor(y))}function Ve(w){const v=[],j=$=>{const y=String($??"").trim();y&&v.push(y)};return Array.isArray(w)||w instanceof Set?w.forEach(j):typeof w=="string"?w.split(",").forEach(j):w&&typeof w=="object"&&Object.entries(w).forEach(([$,y])=>{y!==!1&&y!==null&&y!==void 0&&j($)}),[...new Set(v)]}function lt(w){return String(w??"").trim()}function OI(w){return(Array.isArray(w)?w:[]).filter(v=>String(v?.type||"")==="background"&&lt(v?.id))}function BI(w){return(Array.isArray(w)?w:[]).filter(v=>String(v?.type||"")==="outfit"&&lt(v?.id))}function Zo(w){return!!w?.defaultOwned||di(w?.price)===0}function lv(w){const v=lt(w.fallbackId)||FI,j=OI(w.catalogItems),$=new Map(j.map(I=>[lt(I.id),I])),y=new Set(Ve(w.owned));j.forEach(I=>{const R=lt(I.id);Zo(I)&&y.add(R)});const A=I=>{const R=lt(I);if(!R)return null;const O=$.get(R);return O&&(y.has(R)||Zo(O))?R:null};return A(w.customizationSelected)||A(w.progressEquipped)||A(w.progressSelected)||A(v)||v}function cv(w){const v=lt(w.fallbackId)||Ho,j=BI(w.catalogItems),$=new Map(j.map(R=>[lt(R.id),R])),y=new Set(Ve(w.owned));j.forEach(R=>{const O=lt(R.id),ae=lt(R.spriteId);Zo(R)&&y.add(O),ae&&y.has(ae)&&y.add(O)});const A=R=>{const O=lt(R);if(!O)return null;const ae=$.get(O);if(ae)return ae;const _e=O.startsWith("eva_sprite:")?O:`eva_sprite:${O}`;return j.find(_t=>{const en=lt(_t.spriteId),ct=lt(_t.legacySpriteId),St=Ve(_t.legacyIds);return en===O||ct===O||St.includes(O)||St.includes(_e)})||null},I=R=>{const O=A(R);if(!O)return null;const ae=lt(O.id);return y.has(ae)||Zo(O)?ae:null};return I(w.customizationSelected)||I(w.progressEquipped)||I(w.progressSelected)||I(v)||v}function Wd(w){const v=["background","outfit","theme","decoration","frame","effect"],j=w&&typeof w=="object"?w:{};return Object.fromEntries(v.map($=>{const y=j[$],A=y==null?null:String(y).trim();return[$,A||null]}))}function zI(w){const v=String(w.itemId??"").trim(),j=di(w.price),$=di(w.balance),y=Ve(w.owned);return v?y.includes(v)?{status:"already-owned",balance:$,owned:y,itemId:v,price:j}:$<j?{status:"insufficient-funds",balance:$,owned:y,itemId:v,price:j}:{status:"purchased",balance:$-j,owned:[...y,v],itemId:v,price:j}:{status:"invalid-item",balance:$,owned:y,itemId:v,price:j}}function Vo(w){return String(w?.value??"").trim()}function UI(w,v=Math.random){const j=[...w];for(let $=j.length-1;$>0;$-=1){const y=Number(v()),A=Number.isFinite(y)?Math.min(Math.max(y,0),.999999999):0,I=Math.floor(A*($+1));[j[$],j[I]]=[j[I],j[$]]}return j}function JI(w,v){if(!Array.isArray(v)||v.length!==w.length)return null;const j=new Map(w.map(A=>[Vo(A),A])),$=[],y=new Set;for(const A of v){const I=String(A??"").trim(),R=j.get(I);if(!R||y.has(I))return null;y.add(I),$.push(R)}return $.length===w.length?$:null}function GI(w,v,j=Math.random){const $=w.filter(I=>Vo(I)),y=JI($,v);if(y)return{options:y,order:y.map(Vo)};const A=UI($,j);return{options:A,order:A.map(Vo)}}function qI(w){const v=String(w||"").toLowerCase();return v==="test"||v==="done"?v:"study"}function HI(w){const v=new Set,j=[];for(const $ of Array.isArray(w)?w:[]){const y=String($?.id??"").trim();!y||v.has(y)||(v.add(y),j.push(y))}return j}function Wo(w){const v=HI(w.cards),j=w.session?.answers&&typeof w.session.answers=="object"?w.session.answers:{},$=v.filter(O=>!!j[O]),y=v.length,A=$.length;if(!y)return{status:"incomplete",phase:"study",total:0,expectedCardIds:v,answeredExpectedCardIds:$,answeredCount:0,currentIndex:0,currentCardId:null};if(w.confirmedCompleted&&w.session?.completedAt)return{status:"done",phase:"done",total:y,expectedCardIds:v,answeredExpectedCardIds:v,answeredCount:y,currentIndex:y,currentCardId:null};const I=v.findIndex(O=>!j[O]);if(I<0&&A===y)return{status:"test-ready",phase:"test",total:y,expectedCardIds:v,answeredExpectedCardIds:$,answeredCount:A,currentIndex:y,currentCardId:null};const R=I>=0?I:Math.min(Math.max(Number(w.session?.currentIndex??0)||0,0),y-1);return{status:"study",phase:(qI(w.session?.phase)==="done","study"),total:y,expectedCardIds:v,answeredExpectedCardIds:$,answeredCount:A,currentIndex:R,currentCardId:v[R]||null}}function VI(w){const v=new Set,j=[];for(const $ of Array.isArray(w)?w:[]){const y=String($?.id??"").trim();!y||v.has(y)||(v.add(y),j.push(y))}return j}function WI(w,v,j){const $=v[w];return $&&typeof $=="object"&&$.correct?!0:!!j[w]}function XI(w){const v=Wo({cards:w.cards,session:w.session,confirmedCompleted:w.confirmedCompleted}),j=Array.isArray(w.cards)?w.cards:[],$=v.status==="done"||v.status==="test-ready",y=v.total>0&&j.length>=v.total&&j.every(en=>!!w.isCardStudied?.(en)),A=$||y,I=VI(w.exercises),R=w.exerciseResults&&typeof w.exerciseResults=="object"?w.exerciseResults:{},O=w.completedExercises&&typeof w.completedExercises=="object"?w.completedExercises:{},ae=I.filter(en=>WI(en,R,O)).length,_e=I.length>0&&ae===I.length,_t=!!w.confirmedCompleted||A&&_e;return{study:v,cardStudyComplete:A,exerciseComplete:_e,correctExerciseCount:ae,totalExercises:I.length,complete:_t,canMigrateCompletion:!w.confirmedCompleted&&A&&_e}}(()=>{const w="flashKanji.pwaInstallPrompt.v2",v="flashKanji.pwaInstallPrompt.v1",j="flashKanji.notificationPrompt.v1",$="flashkanji_customization",y="flashkanji_eva_state_v2",I="local-1790423983246",O=`flashKanji.hiddenMascotSpeeches:${I}`,ae="moonfarm",_e="flashKanji.appBuild.v1",_t="flashKanji.pwaCacheReset.v1",en="flashKanji.bootRecovery.v1",ct={instagram:"https://www.instagram.com/fallinginto_silence?igsh=MWpzYW1ncTB1a3FuNw==",youtube:"https://youtube.com/@fallingintosilence?si=cJ97__ndJ1aaaMae"},St="aleksey.lebedev606@gmail.com",er="Flash Kanji bug report",jv="https://drive.google.com/uc?export=download&id=1lIwF4vLq2DNAQ_Hufkmve7-m3bLWpvua",Sv="downloads/flash-kanji-android.apk",Cv="assets/download/android-app-screenshot.png",ui="flashKanji.forcePwaCacheReset.v1",B={lessons:"data/lessons.json",dialogues:"data/dialogues.json",i18n:"data/i18n.json",rewards:"data/rewards.json",kanjiMeta:"data/kanji/meta.json",kanjiHints:"data/kanji/hints.json",kanjiTranslations:"data/kanji/translations.json",kanjiStrokes:"data/kanji/stroke-order-kanjivg.json",kanjiPageSources:"data/sources/kanji-page-sources.json",lessonTranslations:"data/lessons/translations.json",vocabulary:"data/vocabulary/index.json",sentences:"data/sentences/index.json",achievements:"data/achievements/index.json",jlptCatalog:"data/jlpt/index.json",jlptLessons:"data/jlpt-lessons.json",jlptPracticeLessons:"data/jlpt-practice-lessons.json",n5Meta:"data/jlpt/n5/meta.json",n5Lessons:"data/jlpt/n5/lessons.json",n5Kanji:"data/jlpt/n5/kanji.json",n5Exercises:"data/jlpt/n5/exercises.json",n5FinalTest:"data/jlpt/n5/final-test.json",n5Reading:"data/jlpt/n5/reading.json",n4Meta:"data/jlpt/n4/meta.json",n4Lessons:"data/jlpt/n4/lessons.json",n4Kanji:"data/jlpt/n4/kanji.json",n4Grammar:"data/jlpt/n4/grammar.json",n4Exercises:"data/jlpt/n4/exercises.json",n4Reading:"data/jlpt/n4/reading.json",n4Listening:"data/jlpt/n4/listening.json",n4FinalTest:"data/jlpt/n4/final-test.json",n3Meta:"data/jlpt/n3/meta.json",n3Lessons:"data/jlpt/n3/lessons.json",n3Kanji:"data/jlpt/n3/kanji.json",n3Grammar:"data/jlpt/n3/grammar.json",n3Exercises:"data/jlpt/n3/exercises.json",n3Reading:"data/jlpt/n3/reading.json",n3Listening:"data/jlpt/n3/listening.json",n3FinalTest:"data/jlpt/n3/final-test.json",n2Meta:"data/jlpt/n2/meta.json",n2Lessons:"data/jlpt/n2/lessons.json",n2Kanji:"data/jlpt/n2/kanji.json",n2Grammar:"data/jlpt/n2/grammar.json",n2Exercises:"data/jlpt/n2/exercises.json",n2Reading:"data/jlpt/n2/reading.json",n2Listening:"data/jlpt/n2/listening.json",n2FinalTest:"data/jlpt/n2/final-test.json",n1Meta:"data/jlpt/n1/meta.json",n1Lessons:"data/jlpt/n1/lessons.json",n1Kanji:"data/jlpt/n1/kanji.json",n1Grammar:"data/jlpt/n1/grammar.json",n1Exercises:"data/jlpt/n1/exercises.json",n1Reading:"data/jlpt/n1/reading.json",n1Listening:"data/jlpt/n1/listening.json",n1FinalTest:"data/jlpt/n1/final-test.json",jlptReadingMarkdown:"data/jlpt/reading-texts_N5_N1.md",jlptReadingTranslations:"data/jlpt/reading-texts_N5_N1.translations.json",kanaCatalog:"data/kana/index.json",monetization:"data/monetization/catalog.json",customizationShop:"data/customization-shop.json",evaBackgrounds:"data/eva-backgrounds.json",evaSprites:"data/eva-sprites.json",evaRoomDialogues:"data/eva-room-dialogues.json",evaAutonomyLines:"data/eva-autonomy-lines.json",evaExpandedDialogues:"data/eva-expanded-dialogues.json",evaFisPersonality:"data/eva-fis-personality.json",evaPresence:"data/eva-presence.json",changelog:"data/changelog.json"},xv={forgot:"Forgot",remember:"Remember",again:"Again",hard:"Hard",good:"Good",easy:"Easy"},Nv={New:"New",Learning:"Learning",Review:"Review",Mastered:"Mastered",new:"New",learning:"Learning",review:"Review",mastered:"Mastered"},be=["N5","N4","N3","N2","N1"],je=new Set,Lv={nihon:"Japan",kyou:"today",getsuyoubi:"Monday",ichigatsu:"January",nihonjin:"Japanese person",hitori:"one person",honya:"bookstore",ichinichi:"one day",ichiban:"number one, the best",nigatsu:"February",futari:"two people",jikan:"time, hour",nanji:"what time",kotoshi:"this year",rainen:"next year",kaimono:"shopping",kounyuu:"purchase",baiten:"kiosk, shop stall",hatsubai:"release, sale",shiyou:"use",tsukaikata:"how to use",soushin:"message sending",housou:"broadcast",sekai:"world",sedai:"generation",gyoukai:"industry",toukou:"post, publication",toushi:"investment",jouhou:"information",houkoku:"report",kakunin:"confirmation, check",shounin:"approval",kaigi:"meeting",giron:"discussion",kengen:"access rights, permission",chosakuken:"copyright",eikyou:"influence",hibiku:"to sound, to resonate"},tu={xp:12,coins:2},nu="flashKanjiOnboardingCompleted.v3",su="flashKanjiOnboardingCompleted",ru="flashKanjiOnboardingAudience.v1",Av=850,au=450,Iv=420,qr=72,Tv=96,iu=1,ou="N5",$n="map",tn="lesson",jn="legacy",Pe="intro-kanji",tr="review-due",nr="n5-checkpoint",Rv=[Pe,"n5-lesson-1","n5-lesson-2","n5-lesson-3","n5-lesson-4","n5-lesson-5","n5-lesson-6","n5-lesson-7","n5-lesson-8","n5-lesson-9","n5-lesson-10",nr],_v={"n5-lesson-1":"data/textbooks/n5/lesson-1.json"},Pv=new Set(["lesson-1","lesson-2","bulk-n5-01"]),lu=7e3,cu=8e3,Ev=new Set(["dictionary","kanji","stats","jlpt-lesson","textbooks"]),le=Xs(),r={route:le.route,routeMatch:le,routeNotFound:le.status==="not-found"?le:null,lessons:[],cards:[],i18n:null,dialogues:null,rewards:null,kanjiMeta:{},kanjiHints:{},kanjiTranslations:{},kanjiStrokes:{},kanjiPageSources:{},lessonTranslations:{},vocabulary:[],sentenceExercises:[],achievements:[],achievementCategories:[],jlptCatalog:{version:1,generatedAt:null,items:[]},jlptLessons:[],jlptPracticeLessons:[],n5Meta:null,n5Textbook:null,n5KanjiCatalog:[],n5Exercises:null,n5FinalTest:null,n4Meta:null,n4Textbook:null,n4KanjiCatalog:[],n4Grammar:[],n4Exercises:null,n4Reading:[],n4Listening:[],n4FinalTest:null,n5Reading:[],n3Meta:null,n3Textbook:null,n3KanjiCatalog:[],n3Grammar:[],n3Exercises:null,n3Reading:[],n3Listening:[],n3FinalTest:null,n2Meta:null,n2Textbook:null,n2KanjiCatalog:[],n2Grammar:[],n2Exercises:null,n2Reading:[],n2Listening:[],n2FinalTest:null,n1Meta:null,n1Textbook:null,n1KanjiCatalog:[],n1Grammar:[],n1Exercises:null,n1Reading:[],n1Listening:[],n1FinalTest:null,jlptCourseDataStatus:{N5:"idle",N4:"idle",N3:"idle",N2:"idle",N1:"idle"},jlptCourseDataErrors:{N5:null,N4:null,N3:null,N2:null,N1:null},jlptReadingMarkdown:"",jlptReadingByLevel:{N5:[],N4:[],N3:[],N2:[],N1:[]},jlptReadingTranslations:{},kanaCatalog:{schema_version:1,content_version:"",courses:[]},kanaCourses:{},kanaCourseLoading:{},kanaCourseErrors:{},kanaExerciseDrafts:{},kanaLessonCharacterIndex:{},monetization:null,customizationCatalog:{categories:[],items:[]},customization:null,evaBackgrounds:[],evaSprites:{},evaRoomDialogues:[],evaRoomLines:[],evaAutonomyLines:[],evaFisPersonality:null,evaPresence:null,evaRuntime:null,evaRoomShopOpen:!1,progress:null,activeLessonId:null,activeJlptLesson:le.status==="valid"&&le.params.level||null,activeTextbookLevel:le.status==="valid"&&le.route==="textbooks"&&(le.params.level||le.params.course)||null,activeTextbookSubroute:le.status==="valid"&&le.route==="textbooks"&&le.params.subroute||null,activeLearnView:le.status==="valid"&&le.route==="learn"&&le.params.view||$n,activeLearnNodeId:le.status==="valid"&&le.route==="learn"&&le.params.view===tn&&le.params.targetId||null,activeLearnLegacyLessonId:le.status==="valid"&&le.route==="learn"&&le.params.view===jn&&le.params.targetId||null,learningPathLessonPayloads:{},activeCardId:null,activeExerciseReviewId:null,activeExerciseReviewLevel:"",activeExerciseReviewSource:"",activeExerciseReviewSelection:[],activeExerciseReviewChoice:"",activeExerciseReviewTranslationOpen:!1,answerOptionOrders:{},reviewQueueLastKind:"",reviewSession:null,kanjiPageId:le.status==="valid"&&le.route==="kanji"&&le.params.cardId||null,revealed:!1,detailCardId:null,rewardModal:null,rewardQueue:[],finalTestModal:null,finalTestBusy:!1,contactModal:!1,pwaInstallHelpVisible:!1,charts:[],filters:{query:"",jlpt:"all",strokes:"all",radical:"all",favorites:"all"},dictionaryVisibleCount:qr,shopFilters:{category:"all",view:"all",sort:"featured"},sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[]},readingExercises:{},reviewExerciseResults:{},readingCheck:{cardId:null,value:"",status:null,message:""},writingStep:0,activeLearnJlpt:"all",navMenu:null,pendingFocus:null,pwaInstallPrompt:Bo(),notificationPrompt:ti(),notificationPromptVisible:!1,changelog:null,changelogModal:null,bootAncillaryLoaded:!1,deferredDataLoaded:!1,deferredDataLoading:!1};r.route==="textbooks"&&!r.routeNotFound&&jt(Gh(GA(),qA()));const Mv=J1();let pi=null,nn=null,gi=0,Pt="idle",du="",uu=new Map,Hr=0,pu=0,Sn=0,ks=0,el=!1,ys=0,tl=!1,$s=0,mi=!1,Kn=0,Vr=null,fi=!1,hi=0,gu=!1,sn=!1,Wr=null,vi=null,wi=null,bi=null,Me=null;const mu=ev(),Kv=ev();let ki=null,Dn=null,yi=null,Et=null,sr=null,$i=!1;const fu=new WeakMap;let hu=new Map;const vu=new WeakSet,wu=new WeakSet,bu=new Map,ku=new Map,nl=new WeakMap;let js=null,yu=0,ji=!1,sl={scrollX:0,scrollY:0,at:Date.now()},rl={scrollX:0,scrollY:0,at:Date.now()},Si=null,$u=0,Ci=0,ju=!1,Cn=null,al=0;const il=new Set;let rr=0,Xr=0,ol=null,Se=null,dt=null,Ke=null,rn=-1,Mt=!1,Te="step",an=null,Su=null,Dv=null,xi=0,ar=0,Fv=null,Qr=null,Yr=0,Cu=0,ll=null,cl=null,Ss=null;const Ni=new Map;let Zr=null;const Li=new Map;let dl=0,ul=0,pl=Math.floor(Date.now()/6e4),xu=0,Ai="",gl=[];const ml=new Map,Cs=new Map,fl=new Set,hl=Date.now();typeof history<"u"&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const Y={cardId:null,strokes:[],currentStroke:[],drawing:!1,activePointerId:null,completed:!1,demoAnimationId:0},De=(e,t=document)=>t.querySelector(e),vl=(e,t=document)=>Array.from(t.querySelectorAll(e)),Fn=De("#app"),Ov=document.title||"Flash Kanji",Nu=De("#progressImport"),se=Object.freeze({TOP:"top",PRESERVE:"preserve"});document.addEventListener("pointerdown",bl,{passive:!0,capture:!0}),document.addEventListener("click",bl,{passive:!0,capture:!0}),document.addEventListener("keydown",bl,{passive:!0,capture:!0}),document.addEventListener("click",Ab),document.addEventListener("pointerdown",Ib),document.addEventListener("input",Fp),document.addEventListener("change",Fp),document.addEventListener("keydown",Pb),window.flashKanjiFarmMoon=(e=5e3)=>Op(e),window.startFlashKanjiOnboarding=rc,Nu.addEventListener("change",ZL),window.addEventListener("beforeinstallprompt",NA),window.addEventListener("appinstalled",Kd),window.addEventListener("scroll",Hw,{passive:!0}),window.addEventListener("scroll",ic,{passive:!0}),window.addEventListener("resize",ic),window.addEventListener("eva:event",e=>{e.detail?.handledByFlashKanji||vg(e.detail||{})}),document.addEventListener("visibilitychange",()=>{document.hidden||Uo("usage"),!document.hidden&&r.route==="eva-room"&&ca("return")&&(T(),P()),document.hidden&&Ul()}),window.addEventListener("pagehide",Ul),window.addEventListener("beforeunload",Ul),U1(()=>{const e=Ur(Xs()),t=e.route,n=e.status==="valid"?e.params:{},s=t==="kanji"&&n.cardId||null,a=t==="textbooks"&&(n.level||n.course)||null,o=t==="textbooks"&&n.subroute||null,l=t==="jlpt-lesson"&&n.level||null,c=t==="learn"&&n.view||$n,d=t==="learn"&&c===tn&&n.targetId||null,u=t==="learn"&&c===jn&&n.targetId||null,m=qh(r.routeNotFound),h=e.status==="not-found"?qh(e):"";if(t!==r.route||t==="kanji"&&s!==r.kanjiPageId||t==="textbooks"&&a!==r.activeTextbookLevel||t==="textbooks"&&o!==r.activeTextbookSubroute||t==="jlpt-lesson"&&l!==r.activeJlptLesson||t==="learn"&&c!==r.activeLearnView||t==="learn"&&d!==r.activeLearnNodeId||t==="learn"&&u!==r.activeLearnLegacyLessonId||m!==h){const f=r.route;r.routeMatch=e,r.routeNotFound=e.status==="not-found"?e:null,r.route=t,r.route!=="home"&&rg(),f!==t&&(f==="review"||t==="review")&&(r.reviewSession=null),r.kanjiPageId=t==="kanji"?s:null,r.activeTextbookLevel=t==="textbooks"?a:null,r.activeTextbookSubroute=t==="textbooks"?o:null,r.activeJlptLesson=t==="jlpt-lesson"?l:n.level||r.activeJlptLesson,r.activeLearnView=t==="learn"?c:$n,r.activeLearnNodeId=t==="learn"?d:null,r.activeLearnLegacyLessonId=t==="learn"?u:null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.pendingFocus=null,t!=="eva-room"&&(r.evaRoomShopOpen=!1),kt(),_s(),We(),xs(t)&&Ri({route:t,delay:yl(t)}),t==="eva-room"&&ke("room_opened")}}),Bv();async function Bv(){if(!await rw()&&!await sw()){Lu(!0),Fn.innerHTML.trim()?Fn.setAttribute("aria-busy","true"):Fn.innerHTML=Pd(),r.progress=Iw(),Fr(),Nd(),wA(),Ld(),kn();try{const[e,t,n]=await Promise.all([jl({initialOnly:!0}),Ue(B.i18n),Ue(B.rewards,Gv)]);r.lessons=e.lessons,r.cards=e.cards,r.i18n=t,r.rewards=n;const s=tc(r.progress);fi=s,lr(),qb(),Ns(),zw(),kn(),TA(),vN(),Gb(s),kN(),Qs(Ur(Xs())),T(),P(),Au(()=>{Ii({hadPriorVisit:s}).catch(a=>console.warn("Boot ancillary data failed to load.",a))},{timeout:1500}),(r.route==="review"||Tu())&&kl(),Hv(),Ri({route:r.route,delay:yl(r.route)}),CA(),sc(),oy(),Xk(),Fh(),Fd();try{sessionStorage.removeItem(en)}catch(a){console.warn("Could not clear boot recovery marker after successful startup.",a)}}catch(e){console.error(e),await SA(e)||(Fn.innerHTML=yA(e))}finally{Lu(!1)}}}async function Ii({hadPriorVisit:e=!1}={}){if(!r.bootAncillaryLoaded)return Vr||(Vr=(async()=>{const[t,n,s,a,o,l,c,d]=await Promise.all([Ue(B.dialogues),Ue(B.achievements,()=>({achievements:[],categories:[]})),Ue(B.jlptCatalog,()=>({version:1,generatedAt:null,items:[]})),Ue(B.jlptLessons,()=>({items:[]})),Ue(B.kanaCatalog,()=>({schema_version:1,content_version:"",courses:[]})),Ue(B.customizationShop,()=>({version:1,currency:"Moon Fragments",categories:[],items:[]})),Ue(B.evaSprites,()=>({})),Ue(B.changelog,()=>null)]),u=pp(n,r.rewards?.achievements||[]);r.dialogues=t,r.achievements=u.items,r.achievementCategories=u.categories,r.jlptCatalog=jw(s),r.jlptLessons=$w(a),r.kanaCatalog=Sw(o),await Promise.all(["hiragana","katakana"].filter(h=>{const f=r.progress.kanaCourses?.courses?.[h];return Object.keys(f?.lessons||{}).length||Object.keys(f?.review||{}).length}).map(h=>$h(h))),r.customizationCatalog=hw(l),r.evaSprites=c&&typeof c=="object"&&!Array.isArray(c)?c:{},r.bootAncillaryLoaded=!0,Ns(),Jl(),kn(),r.rewards&&(r.rewards.achievements=r.achievements);const m=zv(d,e);Qs(Ur(Xs())),P(),m&&Uv()})().finally(()=>{Vr=null}),Vr)}function Lu(e){const t=document.querySelector(".app-shell");t&&(e?t.setAttribute("data-booting","true"):t.removeAttribute("data-booting")),Fn&&Fn.setAttribute("aria-busy",e?"true":"false")}function zv(e,t=!1){fi=!!t,r.changelogModal=null;const n=RI(e);if(!n)return!1;r.changelog=n;const s=_I(n,r.progress,Ti(),{hadPriorVisit:fi,useProgressSignals:!1});return s.shouldMarkHandled?(Vd(s.currentVersion,Ti()),!1):!s.shouldShow||!s.entry?!1:r.route!=="home"?(Vd(s.currentVersion,Ti()),!1):(r.changelogModal={version:s.currentVersion,entry:s.entry},!0)}function Ti(){try{return window.localStorage}catch{return null}}function Uv(){hi&&window.clearTimeout(hi),hi=window.setTimeout(()=>{hi=0;const e=document.querySelector('[data-action="close-changelog"]');e instanceof HTMLElement&&e.focus({preventScroll:!0})},0)}function wl(){const e=r.changelogModal?.version||r.changelog?.currentVersion||"";Vd(e,Ti()),r.changelogModal=null,P()}function Jv(e,t){return document.getElementById(t)?Promise.resolve():new Promise((n,s)=>{const a=document.createElement("script");a.id=t,a.src=e,a.defer=!0,a.onload=()=>n(),a.onerror=()=>s(new Error(`Cannot load ${e}`)),document.head.appendChild(a)})}function Au(e,{timeout:t=1800}={}){if("requestIdleCallback"in window){window.requestIdleCallback(e,{timeout:t});return}window.setTimeout(e,0)}function Gv(){return{version:1,dailyGoals:[10,20,50],levelCurve:{baseXp:100,growth:1.35},lessonUnlocks:{"lesson-1":1,"lesson-2":2,"lesson-3":3,"lesson-4":5,"lesson-5":8,"bulk-n5-01":3,"bulk-n5-02":4,"bulk-n5-03":4,"bulk-n5-04":5,"bulk-n4-01":5,"bulk-n4-02":6,"bulk-n4-03":6,"bulk-n4-04":7,"bulk-n4-05":7,"bulk-n4-06":8,"bulk-n4-07":8,"bulk-n4-08":9,"bulk-n3-01":9,"bulk-n3-02":10,"bulk-n3-03":10,"bulk-n3-04":11,"bulk-n3-05":11,"bulk-n3-06":12,"bulk-n3-07":12,"bulk-n3-08":13,"bulk-n3-09":13,"bulk-n3-10":14,"bulk-n3-11":14,"bulk-n3-12":15,"bulk-n3-13":15,"bulk-n3-14":16,"bulk-n3-15":16,"bulk-n3-16":17,"bulk-n3-17":17,"bulk-n3-18":18,"bulk-n3-19":18,"bulk-n2-01":19,"bulk-n2-02":19,"bulk-n2-03":20,"bulk-n2-04":20,"bulk-n2-05":21,"bulk-n2-06":21,"bulk-n2-07":22,"bulk-n2-08":22,"bulk-n2-09":23,"bulk-n2-10":23,"bulk-n2-11":24,"bulk-n2-12":24,"bulk-n2-13":25,"bulk-n2-14":25,"bulk-n2-15":26,"bulk-n2-16":26,"bulk-n2-17":27,"bulk-n2-18":27,"bulk-n2-19":28,"bulk-n1-01":28,"bulk-n1-02":29,"bulk-n1-03":29,"bulk-n1-04":30,"bulk-n1-05":30,"bulk-n1-06":31,"bulk-n1-07":31,"bulk-n1-08":32,"bulk-n1-09":32,"bulk-n1-10":33,"bulk-n1-11":33},rewards:{correctXp:10,lessonCompleteXp:50,comboXp:15,dailyBonusXp:20,sentencePracticeXp:12,correctCoins:1,lessonCompleteCoins:8,achievementCoins:20,dailyBonusCoins:5,sentencePracticeCoins:2,streakCoins:10},shop:[{id:"frame_moon",type:"profileFrame",name:{ru:"Лунная рамка",en:"Moon frame"},cost:80},{id:"theme_gold",type:"theme",name:{ru:"Золотой акцент",en:"Gold accent"},cost:120},{id:"background_midnight",type:"background",name:{ru:"Полуночный фон",en:"Midnight background"},cost:150}],achievements:[{id:"first_lesson",name:{ru:"Первый урок",en:"First lesson"},description:{ru:"Завершить первый урок.",en:"Complete the first lesson."},kind:"lessonComplete",target:1,xp:50,coins:20},{id:"hundred_correct",name:{ru:"100 правильных ответов",en:"100 correct answers"},description:{ru:"Достичь 100 правильных ответов.",en:"Reach 100 correct answers."},kind:"correct",target:100,xp:120,coins:40},{id:"ten_kanji_learned",name:{ru:"10 изученных кандзи",en:"10 kanji learned"},description:{ru:"Начать изучать 10 кандзи.",en:"Start learning 10 kanji."},kind:"learned",target:10,xp:80,coins:30},{id:"seven_day_streak",name:{ru:"7-дневная серия",en:"7-day streak"},description:{ru:"Поддерживать серию 7 дней.",en:"Keep a streak for 7 days."},kind:"streak",target:7,xp:100,coins:35},{id:"jlpt_n5_done",name:{ru:"JLPT N5 пройден",en:"JLPT N5 complete"},description:{ru:"Освоить все карточки N5.",en:"Master every N5 card."},kind:"jlpt",jlpt:"N5",target:1,xp:180,coins:60},{id:"hundred_reviews",name:{ru:"100 повторений",en:"100 reviews"},description:{ru:"Выполнить 100 повторений.",en:"Complete 100 reviews."},kind:"reviews",target:100,xp:150,coins:55}]}}function qv(){return window.Chart?Promise.resolve():(Su||(Su=Jv("vendor/chart.umd.min.js","flash-kanji-chartjs")),Su)}function Hv(){window.setTimeout(()=>{Dv||(Dv=Wh(()=>import("./soundManager-BXlc-2Gj.js"),[],import.meta.url).then(()=>{Fr(),rA()}).catch(e=>console.warn("UX sound module failed to load.",e))),Fv||(Fv=Wh(()=>import("./cyberHudEffect-hOJcGtOP.js"),[],import.meta.url).catch(e=>console.warn("Cyber HUD module failed to load.",e)))},450)}function bl(){Kn=Date.now()}async function Vv({minQuietMs:e=450,maxDelayMs:t=1200}={}){if(!Kn)return;const n=Date.now();for(;Date.now()-Kn<e&&Date.now()-n<t;){const s=Math.min(160,Math.max(16,e-(Date.now()-Kn)));await new Promise(a=>window.setTimeout(a,s))}await Iu()}async function Wv(e){const t=Date.now();for(;Date.now()-t<3200;){const n=String(r.route||""),s=e===n||xs(n),a=Kn&&Date.now()-Kn<650;if(s&&!a)break;await new Promise(o=>window.setTimeout(o,s?80:220))}await Iu()}function Iu(){return document.visibilityState==="hidden"?new Promise(e=>window.setTimeout(e,32)):new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e)))}function xs(e=r.route){return e==="textbooks"&&!F(r.activeTextbookLevel)?!1:Ev.has(e)}function Tu(){return!!(r.progress&&(Object.values(r.progress.cards||{}).some(e=>e.state!=="New")||be.some(e=>{const t=r.progress[`${e.toLowerCase()}Course`];return Object.keys(t?.completedLessons||{}).length||Object.keys(t?.exerciseSrs||{}).length})||Object.keys(r.progress.readingExercises||{}).length||["hiragana","katakana"].some(e=>{const t=r.progress.kanaCourses?.courses?.[e];return Object.keys(t?.review||{}).length||Object.keys(t?.lessons||{}).length})))}async function kl(){if(!$i)return sr||(sr=(async()=>{if(Tu()){if(!r.deferredDataLoaded){const t=await jl();r.deferredDataLoaded||(r.lessons=t.lessons,r.cards=t.cards,xl(),Nl(),Ll(),Al(),Il())}await Ii({hadPriorVisit:fi});const e=be.filter(t=>{const n=r.progress[`${t.toLowerCase()}Course`];return Object.keys(n?.completedLessons||{}).length||Object.keys(n?.exerciseSrs||{}).length});await Promise.all(e.map(t=>Mi(t,{renderAfter:!1}))),Object.keys(r.progress.readingExercises||{}).length&&await Ru({renderAfter:!1,route:"review"}),lr()}$i=!0,Me=null,(r.route==="review"||r.route==="home")&&P()})().catch(e=>{sr=null,console.warn("Review content failed to load.",e)}),sr)}function yl(e=r.route){return xs(e)?Kn&&Date.now()-Kn<1200?650:0:lu}function Ri({route:e=r.route,delay:t=lu,force:n=!1}={}){if(r.deferredDataLoaded||r.deferredDataLoading||Qr||!n&&!xs(e))return;Yr&&(window.clearTimeout(Yr),Yr=0);const s=++Cu,a=()=>{s===Cu&&(!n&&!xs(r.route)||Ru({route:e}).catch(o=>console.warn("Deferred app data failed to load.",o)))};Yr=window.setTimeout(()=>{Yr=0,Au(a,{timeout:1800})},Math.max(0,Number(t)||0))}async function Ru({renderAfter:e=!0,route:t=r.route}={}){const n=String(t||r.route||"");if(!r.deferredDataLoaded)return Qr||(r.deferredDataLoading=!0,Qr=(async()=>{const[s,a,o]=await Promise.all([jl(),ow([["kanjiMeta",B.kanjiMeta],["kanjiHints",B.kanjiHints],["kanjiTranslations",B.kanjiTranslations],["kanjiStrokes",B.kanjiStrokes],["kanjiPageSources",B.kanjiPageSources],["lessonTranslations",B.lessonTranslations],["vocabulary",B.vocabulary],["sentences",B.sentences],["jlptPracticeLessons",B.jlptPracticeLessons],["n5Meta",B.n5Meta],["n5Lessons",B.n5Lessons],["n5Kanji",B.n5Kanji],["n5Exercises",B.n5Exercises],["n5FinalTest",B.n5FinalTest],["n4Meta",B.n4Meta],["n4Lessons",B.n4Lessons],["n4Kanji",B.n4Kanji],["n4Grammar",B.n4Grammar],["n4Exercises",B.n4Exercises],["n4Reading",B.n4Reading],["n4Listening",B.n4Listening],["n4FinalTest",B.n4FinalTest],["n3Meta",B.n3Meta],["n3Lessons",B.n3Lessons],["n3Kanji",B.n3Kanji],["n3Grammar",B.n3Grammar],["n3Exercises",B.n3Exercises],["n3Reading",B.n3Reading],["n3Listening",B.n3Listening],["n3FinalTest",B.n3FinalTest],["n2Meta",B.n2Meta],["n2Lessons",B.n2Lessons],["n2Kanji",B.n2Kanji],["n2Grammar",B.n2Grammar],["n2Exercises",B.n2Exercises],["n2Reading",B.n2Reading],["n2Listening",B.n2Listening],["n2FinalTest",B.n2FinalTest],["n1Meta",B.n1Meta],["n1Lessons",B.n1Lessons],["n1Kanji",B.n1Kanji],["n1Grammar",B.n1Grammar],["n1Exercises",B.n1Exercises],["n1Reading",B.n1Reading],["n1Listening",B.n1Listening],["n1FinalTest",B.n1FinalTest],["jlptReadingTranslations",B.jlptReadingTranslations],["n5Reading",B.n5Reading],["monetization",B.monetization]]),cw(B.jlptReadingMarkdown)]);await Vv(),await Wv(n);const{kanjiMeta:l,kanjiHints:c,kanjiTranslations:d,kanjiStrokes:u,kanjiPageSources:m,lessonTranslations:h,vocabulary:f,sentences:S,jlptPracticeLessons:C,n5Meta:x,n5Lessons:L,n5Kanji:k,n5Exercises:N,n5FinalTest:z,n4Meta:q,n4Lessons:Ys,n4Kanji:U,n4Grammar:WA,n4Exercises:XA,n4Reading:QA,n4Listening:YA,n4FinalTest:ZA,n3Meta:e1,n3Lessons:t1,n3Kanji:n1,n3Grammar:s1,n3Exercises:r1,n3Reading:a1,n3Listening:i1,n3FinalTest:o1,n2Meta:l1,n2Lessons:c1,n2Kanji:d1,n2Grammar:u1,n2Exercises:p1,n2Reading:g1,n2Listening:m1,n2FinalTest:f1,n1Meta:h1,n1Lessons:v1,n1Kanji:w1,n1Grammar:b1,n1Exercises:k1,n1Reading:y1,n1Listening:$1,n1FinalTest:j1,jlptReadingTranslations:S1,n5Reading:C1,monetization:x1}=a;r.lessons=s.lessons,r.cards=s.cards,r.jlptPracticeLessons=Cw(C),r.jlptReadingMarkdown=o||"",r.jlptReadingByLevel=dw(o||""),r.n5Meta=Du(x),r.n5Textbook=Cl(L),r.n5KanjiCatalog=Fu(k),xl(),r.n5Exercises=Ou(N),r.n5FinalTest=Bu(z),r.n5Reading=Aw(C1),r.n4Meta=zu(q),r.n4Textbook=Uu(Ys),r.n4KanjiCatalog=Ju(U),r.n4Grammar=Gu(WA),r.n4Exercises=qu(XA),r.n4Reading=Fi(QA),r.n4Listening=Fi(YA),r.n4FinalTest=Hu(ZA),Nl(),r.n3Meta=Vu(e1),r.n3Textbook=Wu(t1),r.n3KanjiCatalog=Xu(n1),r.n3Grammar=Qu(s1),r.n3Exercises=Yu(r1),r.n3Reading=Bi(a1),r.n3Listening=Bi(i1),r.n3FinalTest=Zu(o1),Ll(),r.n2Meta=ep(l1),r.n2Textbook=tp(c1),r.n2KanjiCatalog=np(d1),r.n2Grammar=sp(u1),r.n2Exercises=rp(p1),r.n2Reading=Ui(g1),r.n2Listening=Ui(m1),r.n2FinalTest=ap(f1),Al(),r.n1Meta=ip(h1),r.n1Textbook=op(v1),r.n1KanjiCatalog=lp(w1),r.n1Grammar=cp(b1),r.n1Exercises=dp(k1),r.n1Reading=Gi(y1),r.n1Listening=Gi($1),r.n1FinalTest=up(j1),Il(),Qv(),r.kanjiMeta=l.items||{},r.kanjiHints=c.items||{},r.kanjiTranslations=d.items||{},r.kanjiStrokes=fw(u),r.kanjiPageSources=m.items||{},r.lessonTranslations=h.items||{},r.vocabulary=f.items||[],r.sentenceExercises=S.items||[],r.jlptReadingTranslations=gw(S1),r.monetization=x1,r.deferredDataLoaded=!0,r.deferredDataLoading=!1,r.progress&&(lr(),T());const Hh=String(r.route||"");(n===Hh||xs(Hh))&&(Qs(Ur(Xs())),e&&P())})().finally(()=>{r.deferredDataLoading=!1}),Qr)}function _u(e){const t=F(e),n=t.toLowerCase();if(!t)return[];const s=[["meta",B[`${n}Meta`]],["lessons",B[`${n}Lessons`]],["kanji",B[`${n}Kanji`]],["exercises",B[`${n}Exercises`]]];return t!=="N5"?s.push(["grammar",B[`${n}Grammar`]],["reading",B[`${n}Reading`]],["listening",B[`${n}Listening`]],["finalTest",B[`${n}FinalTest`]]):s.push(["finalTest",B.n5FinalTest]),s.filter(([,a])=>!!a)}function xn(e,t,n=null){const s=F(e);s&&(r.jlptCourseDataStatus[s]=t,r.jlptCourseDataErrors[s]=n||null,s==="N1"&&(cl=n||null))}function _i(e){const t=F(e);if(!t)return"error";if(r.jlptCourseDataStatus[t]!=="ready"&&Pi(t))try{$l(t),xn(t,"ready")}catch(n){xn(t,"incomplete",n)}return r.jlptCourseDataStatus[t]==="ready"&&!Pi(t)&&xn(t,"incomplete",new Error(Ei())),r.jlptCourseDataStatus[t]||"idle"}function Pi(e){const t=F(e);if(!t)return!1;const n=$t(t),s=Pu(t),a=Eu(t);return n.length>0&&s.length>0&&!!a}function Pu(e){const t=F(e);return t==="N5"?Gt():t==="N4"?tt():t==="N3"?nt():t==="N2"?st():t==="N1"?Lt():[]}function Eu(e){const t=F(e);return t==="N5"?r.n5Exercises:t==="N4"?r.n4Exercises:t==="N3"?r.n3Exercises:t==="N2"?r.n2Exercises:t==="N1"?r.n1Exercises:null}function Xv(e,t={}){const n=F(e);n==="N5"&&(r.n5Meta=Du(t.meta),r.n5Textbook=Cl(t.lessons),r.n5KanjiCatalog=Fu(t.kanji),xl(),r.n5Exercises=Ou(t.exercises),t.finalTest&&(r.n5FinalTest=Bu(t.finalTest))),n==="N4"&&(r.n4Meta=zu(t.meta),r.n4Textbook=Uu(t.lessons),r.n4KanjiCatalog=Ju(t.kanji),r.n4Grammar=Gu(t.grammar),r.n4Exercises=qu(t.exercises),r.n4Reading=Fi(t.reading),r.n4Listening=Fi(t.listening),r.n4FinalTest=Hu(t.finalTest),Nl()),n==="N3"&&(r.n3Meta=Vu(t.meta),r.n3Textbook=Wu(t.lessons),r.n3KanjiCatalog=Xu(t.kanji),r.n3Grammar=Qu(t.grammar),r.n3Exercises=Yu(t.exercises),r.n3Reading=Bi(t.reading),r.n3Listening=Bi(t.listening),r.n3FinalTest=Zu(t.finalTest),Ll()),n==="N2"&&(r.n2Meta=ep(t.meta),r.n2Textbook=tp(t.lessons),r.n2KanjiCatalog=np(t.kanji),r.n2Grammar=sp(t.grammar),r.n2Exercises=rp(t.exercises),r.n2Reading=Ui(t.reading),r.n2Listening=Ui(t.listening),r.n2FinalTest=ap(t.finalTest),Al()),n==="N1"&&(r.n1Meta=ip(t.meta),r.n1Textbook=op(t.lessons),r.n1KanjiCatalog=lp(t.kanji),r.n1Grammar=cp(t.grammar),r.n1Exercises=dp(t.exercises),r.n1Reading=Gi(t.reading),r.n1Listening=Gi(t.listening),r.n1FinalTest=up(t.finalTest),Il())}function Ei(){return p()==="ru"?"Не удалось загрузить карточки урока. Проверьте подключение и попробуйте ещё раз.":"Could not load lesson cards. Check your connection and try again."}function $l(e){const t=F(e),n=$t(t),s=Pu(t),a=Eu(t);if(!t||!n.length||!s.length||!a)throw new Error(Ei());if(t!=="N5")return!0;const o=[],l=new Map(r.n5KanjiCatalog.map(u=>[u.kanji,u])),c=new Set;r.n5KanjiCatalog.forEach(u=>{u.id&&c.add(u.id)}),n.length!==10&&o.push(`N5 lessons expected 10, got ${n.length}`),r.n5KanjiCatalog.length!==80&&o.push(`N5 kanji expected 80, got ${r.n5KanjiCatalog.length}`),c.size!==r.n5KanjiCatalog.length&&o.push("N5 card identifiers are not unique.");const d=new Set;if(n.forEach(u=>{d.has(u.id)&&o.push(`Duplicate N5 lesson id: ${u.id}`),d.add(u.id),(u.kanji||[]).length!==8&&o.push(`${u.id} expected 8 kanji, got ${(u.kanji||[]).length}`),(u.kanji||[]).map(f=>l.get(f)).filter(Boolean).length!==(u.kanji||[]).length&&o.push(`${u.id} has unresolved kanji references.`);const h=gn(u);h.length!==(u.kanji||[]).length&&o.push(`${u.id} cards expected ${u.kanji.length}, got ${h.length}`),Fs(u).length||o.push(`${u.id} has no exercises.`)}),o.length)throw new Error(`${Ei()} ${o[0]}`);return!0}function Qv(){be.forEach(e=>{try{Pi(e)&&($l(e),xn(e,"ready"))}catch(t){xn(e,"incomplete",t)}})}function Yv(e){const t=F(e);if(!t||!r.progress)return!1;const n=Xn(),s=Xt(t);let a=!1;return $t(t).forEach(o=>{const l=Ye(t,o.id),c=n.sessions[l];if(!c)return;const d=Wo({cards:Ql(t,o),session:c,confirmedCompleted:!!(s?.completedLessons?.[o.id]||je.has(`${t.toLowerCase()}:${o.id}`))});(c.phase==="test"||c.phase==="done")&&d.status==="incomplete"&&(c.phase="study",c.currentIndex=0,c.completedAt=null,a=!0),d.status==="study"&&c.currentIndex!==d.currentIndex&&(c.currentIndex=d.currentIndex,a=!0),d.status==="study"&&c.phase!=="study"&&(c.phase="study",a=!0)}),a&&(n.lastUpdatedAt=new Date().toISOString()),a}function Zv(e){const t=F(e);if(!t||!r.progress)return!1;const n=Ks(t);if(!n)return!1;const s=n.course();if(!K$(t,s))return!1;let a=!1;n.lessons().forEach(l=>{Gg(t,l)&&(a=!0)});const o=n.lessonById(s.currentLessonId);if(o&&pn(t,s,o)){const c=n.lessons().find(d=>!pn(t,s,d))?.id||o.id;s.currentLessonId!==c&&(s.currentLessonId=c,a=!0)}return a}function ew(){if(!r.progress)return!1;let e=!1;return be.forEach(t=>{const n=Ks(t);if(!n||!n.lessons().length)return;const s=n.course();if(!Qn(n.level,s.currentLessonId).some(d=>!!s.completedLessons?.[d]))return;const c=n.lessons().find(d=>!pn(n.level,s,d))?.id||jc(n,{id:s.currentLessonId},s.currentLessonId)||s.currentLessonId;c&&s.currentLessonId!==c&&(s.currentLessonId=c,e=!0)}),e}async function Mi(e,{renderAfter:t=!0,force:n=!1}={}){const s=F(e);if(!s)return null;if(!n&&_i(s)==="ready")return $t(s);if(!n&&Ni.has(s))return Ni.get(s);n&&_u(s).forEach(([,o])=>mu.delete(o)),xn(s,"loading");const a=lw(_u(s),s==="N5"?4:3).then(o=>{if(Xv(s,o),$l(s),xn(s,"ready"),r.progress){lr({level:s});const l=Yv(s),c=Zv(s);(l||c)&&T()}return Qs(Ur(Xs())),t&&P(),$t(s)}).catch(o=>{throw xn(s,"error",o),console.warn(`${s} textbook data failed to load.`,o),t&&r.route==="textbooks"&&r.activeTextbookLevel===s&&P(),o}).finally(()=>{Ni.delete(s)});return Ni.set(s,a),t&&r.route==="textbooks"&&r.activeTextbookLevel===s&&P(),a}function tw(e){const t=F(e);t&&(xn(t,"loading"),P(),Mi(t,{renderAfter:!0,force:!0}).catch(()=>{}))}async function nw({renderAfter:e=!0}={}){return ll=Mi("N1",{renderAfter:e}).finally(()=>{ll=null}),ll}async function sw(){try{const e=localStorage.getItem(_e);if(localStorage.setItem(_e,I),!e||e===I)return!1;if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistrations();await Promise.all(t.map(async n=>{await n.update().catch(()=>null)}))}return!1}catch(e){return console.warn("App cache version check failed.",e),!1}}async function rw(){try{const e=localStorage.getItem(ui),t=localStorage.getItem("flashKanji.lastForcedBuild");return e==="done"&&t===I||(localStorage.setItem(ui,"done"),localStorage.setItem("flashKanji.lastForcedBuild",I)),!1}catch(e){return console.warn("Force cache reset failed.",e),!1}}async function jl({initialOnly:e=!1}={}){return Kv.get(e?"startup":"all",()=>aw({initialOnly:e}))}async function aw({initialOnly:e=!1}={}){const t=await Ue(B.lessons),n=Array.isArray(t?.lessons)?t.lessons:[],s=e?iw(n):n,a=await Sl(s,async d=>{try{return{manifestLesson:d,payload:await Ue(d.file)}}catch(u){return console.warn(`Skipping lesson data: ${d?.file||"unknown lesson file"}`,u),null}},e?s.length:3),o=new Map(a.filter(Boolean).map(d=>[d.manifestLesson.id,d])),l=n.map(d=>{const u=o.get(d.id);if(!u)return{...d,file:d.file,items:[]};const{payload:m}=u;return{...d,...m.lesson,file:d.file,items:Array.isArray(m.items)?m.items.map(h=>mw(h,m.lesson.id)):[]}}),c=l.flatMap(d=>d.items.map(u=>({...u,lessonTitle:d.title,lessonOrder:d.order})));return{lessons:l,cards:c}}function iw(e){return e.filter((t,n)=>Pv.has(t.id)||n<2)}async function ow(e,t=3){const n=await Sl(e,async([s,a])=>[s,await Ue(a)],t);return Object.fromEntries(n)}async function lw(e,t=3){const n=await Sl(e,async([s,a])=>[s,await Ku(a)],t);return Object.fromEntries(n)}async function Sl(e,t,n=6){const s=[],a=Math.max(1,Number(n)||1);for(let o=0;o<e.length;o+=a){const l=e.slice(o,o+a);s.push(...await Promise.all(l.map(t))),o+a<e.length&&await new Promise(c=>window.setTimeout(c,0))}return s}async function Ue(e,t=null){let n=null;try{return await Ku(e)}catch(s){n=s}return console.warn(`Falling back to empty data for ${e}.`,n),typeof t=="function"?t(n):t!==null?t:{version:1,languages:["ru","en"],ui:{},items:[],lessons:[],lesson:{},achievements:[],categories:[]}}async function cw(e,t=""){const n=Mu(e);let s=null;for(const a of n)try{const o=typeof AbortController<"u"?new AbortController:null,l=o?window.setTimeout(()=>o.abort(),cu):0;try{const c=await fetch(a,{signal:o?.signal});if(!c.ok){s=new Error(`Cannot load ${a}`);continue}return await c.text()}finally{l&&window.clearTimeout(l)}}catch(o){s=o}return console.warn(`Falling back to empty text for ${e}.`,s),typeof t=="function"?t(s):t}function dw(e){const t=Object.fromEntries(be.map(m=>[m,[]])),n=String(e||"").split(/\r?\n/);let s=null,a=null,o="idle",l=[],c=[];const d=()=>{!a||!s||(a.text=uw(l.join(`
`)),a.questions=c.map(m=>m.trim()).filter(Boolean),t[s].push(a),a=null,l=[],c=[],o="idle")},u=m=>{const h=String(m||"").trim().toLowerCase();return h==="жанр"||h==="genre"?"genre":h==="опора"||h==="source"||h==="basis"?"source":h==="цель"||h==="goal"?"goal":h};for(const m of n){const h=String(m??""),f=h.trim(),S=f.match(/^#\s*JLPT\s*(N[1-5])\b/i);if(S){d(),s=S[1].toUpperCase();continue}const C=f.match(/^##\s*(N[1-5])\s*(.+)$/i);if(C){d(),s=C[1].toUpperCase(),a={id:`${s.toLowerCase()}-reading-${String((t[s]||[]).length+1).padStart(2,"0")}`,level:s,title:pw(C[2]),genre:"",source:"",goal:"",text:"",questions:[]},o="meta";continue}if(/^#{1,2}(?!#)\s+/.test(f)&&!S&&!C){d(),s=null;continue}if(!a)continue;if(/^###\s*Проверочные вопросы/i.test(f)){o="questions";continue}if(o==="code"){/^```/.test(f)?o="body":l.push(h);continue}if(/^```/.test(f)){o="code";continue}if(o==="questions"){const L=f.match(/^[-*]\s+(.*)$/),k=f.match(/^\d+\.\s+(.*)$/);if(L){c.push(L[1]);continue}if(k){c.push(k[1]);continue}if(!f||/^---+$/.test(f))continue;c.push(f);continue}const x=f.match(/^\*\*(Жанр|Опора|Цель|Genre|Source|Goal)\:\*\*\s*(.*)$/i);if(x){const L=u(x[1]);a[L]=x[2].trim()}}return d(),t}function uw(e){return String(e||"").replace(/^\s*\n+/,"").replace(/\n+\s*$/,"")}function pw(e){return String(e||"").replace(/^[\s\-–—::]+/u,"").trim()}function gw(e){const t=e&&typeof e=="object"&&!Array.isArray(e)?e.items&&typeof e.items=="object"&&!Array.isArray(e.items)?e.items:e:{},n={};return Object.entries(t||{}).forEach(([s,a])=>{!s||!a||typeof a!="object"||(n[String(s)]={titleRu:String(a.titleRu||a.ruTitle||a.title_ru||"").trim(),titleEn:String(a.titleEn||a.enTitle||a.title_en||"").trim(),ru:String(a.ru||a.translationRu||a.translation_ru||"").trim(),en:String(a.en||a.translationEn||a.translation_en||"").trim()})}),n}function Mu(e){const t=String(e||"").trim();if(!t)return[t];if(/^https?:\/\//i.test(t)||t.startsWith("file:"))return[t];const n=t.replace(/^\.\/+/,"").replace(/^\.\.\/+/,"").replace(/^\/+/,""),s=[t,`./${n}`,`../${n}`,`index/${n}`,`/index/${n}`,`/${n}`];return[...new Set(s.filter(Boolean))]}function mw(e,t){return{...e,id:String(e.id),lessonId:t,examples:Array.isArray(e.examples)?e.examples:[],apps:Array.isArray(e.apps)?e.apps:[],stroke_order:Array.isArray(e.stroke_order)?e.stroke_order:[]}}function fw(e){const t=e?.items&&typeof e.items=="object"?e.items:{};return Object.fromEntries(Object.entries(t).map(([n,s])=>{const a=Array.isArray(s?.strokeOrder)?s.strokeOrder.filter(o=>typeof o?.path=="string"&&o.path.trim()):[];return a.length?[n,{...s,kanji:s.kanji||n,strokes:Number(s.strokes||a.length),viewBox:s.viewBox||"0 0 109 109",strokeOrder:a}]:null}).filter(Boolean))}function hw(e){const t=Array.isArray(e?.categories)?e.categories:[],n=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),currency:e?.currency||"Moon Fragments",categories:t.length?t:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}],items:n.map(s=>{const a=di(s.price);return{...s,id:String(s.id||""),type:String(s.type||"effect"),price:a,asset:String(s.asset||""),preview:String(s.preview||s.asset||""),rarity:String(s.rarity||"common").toLowerCase(),defaultOwned:!!(s.defaultOwned||a===0),unlockCondition:s.unlockCondition||null}}).filter(s=>s.id)}}async function Ku(e){return mu.get(e,()=>vw(e))}async function vw(e){const t=Mu(e);let n=null;for(const s of t)try{const a=typeof AbortController<"u"?new AbortController:null,o=a?window.setTimeout(()=>a.abort(),cu):0;try{const l=await fetch(s,{signal:a?.signal});if(!l.ok){n=new Error(`Cannot load ${s}: HTTP ${l.status}`);continue}const c=await l.text();try{return JSON.parse(c)}catch(d){n=d}}finally{o&&window.clearTimeout(o)}}catch(a){n=a}throw n||new Error(`Cannot load ${e}`)}function On(){return{owned:[],selected:{background:"bg_study_hub",outfit:Ho,theme:"theme_default_dark",decoration:null,frame:null,effect:null},seen:[],updatedAt:new Date().toISOString()}}function ww(){try{const e=localStorage.getItem($);if(!e)return On();const t=JSON.parse(e);if(!t||typeof t!="object")return On();const n=On(),s=t.selected||t.equipped||{},a=Object.entries(Wd(s)).filter(([,o])=>!!o);return{owned:Ve(t.owned||t.ownedItems||t.inventory||n.owned),selected:{...n.selected,...Object.fromEntries(a)},seen:Ve(t.seen||n.seen),updatedAt:t.updatedAt||n.updatedAt}}catch(e){return console.warn("Customization storage failed.",e),On()}}function bw(){try{const e=localStorage.getItem($);if(!e)return null;const t=JSON.parse(e);return!t||typeof t!="object"?null:t.selected?.background||t.equipped?.background||null}catch{return null}}function ir(){if(!r.customization)return!1;if(mi)return!0;mi=!0;const e=()=>{$s=0,mi=!1,r.customization.updatedAt=new Date().toISOString();try{localStorage.setItem($,JSON.stringify(r.customization))}catch(t){console.warn("Customization save failed.",t)}};return"requestIdleCallback"in window?$s=window.requestIdleCallback(e,{timeout:1200}):$s=window.setTimeout(e,160),!0}function kw(){if(!r.customization)return!1;mi=!1,$s&&("cancelIdleCallback"in window?window.cancelIdleCallback($s):window.clearTimeout($s),$s=0),r.customization.updatedAt=new Date().toISOString();try{return localStorage.setItem($,JSON.stringify(r.customization)),!0}catch(e){return console.warn("Customization save failed.",e),!1}}function Ns(){const e=bw(),t=ww(),n=Fe().length>0,s=new Set,a=Ve(r.progress.shop?.owned||[]);Ve(t.owned).forEach(l=>{const c=Ce(l)||Bn(l);c?s.add(c.id):n||s.add(l)}),Fe().forEach(l=>{(l.defaultOwned||l.price===0)&&s.add(l.id)}),Ve(r.progress.unlockedBackgrounds||[]).forEach(l=>{const c=Ce(l)||Bn(l);c?s.add(c.id):n||s.add(l)}),Ve(r.progress.unlockedEvaSprites||[]).forEach(l=>{const c=Nn(l);c&&s.add(c.id),a.includes(`eva_sprite:${l}`)&&c&&s.add(c.id)}),a.forEach(l=>{const c=String(l),d=Ce(c)||Bn(c);if(d?s.add(d.id):n||s.add(c),!d&&c.startsWith("eva_sprite:")){const u=Nn(c.replace("eva_sprite:",""));u&&s.add(u.id)}});const o=yw({...On().selected,...Wd(r.progress.shop?.equipped||{}),...t.selected||{}});o.background=lv({catalogItems:Fe(),owned:[...s],customizationSelected:e,progressEquipped:r.progress.shop?.equipped?.background,progressSelected:r.progress.selectedEvaRoomBackground}),o.outfit=cv({catalogItems:Fe(),owned:[...s],customizationSelected:o.outfit,progressEquipped:r.progress.shop?.equipped?.outfit,progressSelected:r.progress.selectedEvaSprite,fallbackId:Ho}),n||(o.background=e||t.selected?.background||r.progress.shop?.equipped?.background||r.progress.selectedEvaRoomBackground||o.background||"bg_study_hub"),n&&!s.has(o.background)&&(o.background="bg_study_hub"),n&&!s.has(o.outfit)&&(o.outfit=cv({catalogItems:Fe(),owned:[...s],progressEquipped:r.progress.shop?.equipped?.outfit,progressSelected:r.progress.selectedEvaSprite,fallbackId:Ho})),n&&!s.has(o.theme)&&(o.theme="theme_default_dark"),n&&o.decoration&&!s.has(o.decoration)&&(o.decoration=null),n&&o.effect&&!s.has(o.effect)&&(o.effect=null),r.customization={owned:[...s],selected:o,seen:[...new Set([...Ve(t.seen||[]),...s])],updatedAt:t.updatedAt||new Date().toISOString()},ea(),n&&ir()}function ea(){var n;if(!r.customization||!r.progress)return;me();const e=r.customization.selected||{};e.background&&(r.progress.selectedEvaRoomBackground=e.background);const t=Ce(e.outfit);t?.spriteId&&(r.progress.selectedEvaSprite=t.spriteId),r.progress.unlockedBackgrounds=[...new Set([...Ve(r.progress.unlockedBackgrounds||[]),...r.customization.owned.filter(s=>Ce(s)?.type==="background")])],r.progress.unlockedEvaSprites=[...new Set([...Ve(r.progress.unlockedEvaSprites||[]),...r.customization.owned.map(s=>Ce(s)).filter(s=>s?.type==="outfit"&&s.spriteId).map(s=>s.spriteId)])],(n=r.progress).shop||(n.shop={owned:[],equipped:{}}),r.progress.shop.owned=[...new Set([...Ve(r.progress.shop.owned||[]),...r.customization.owned,...r.progress.unlockedEvaSprites.map(s=>`eva_sprite:${s}`)])],r.progress.shop.equipped={...r.progress.shop.equipped||{},background:e.background||null,outfit:e.outfit||null,theme:e.theme||null,decoration:e.decoration||e.frame||null,effect:e.effect||null}}function Fe(){return r.customizationCatalog?.items||[]}function Ce(e){return Fe().find(t=>t.id===e)||null}function Bn(e){const t=String(e||"");return t&&Fe().find(n=>Array.isArray(n.legacyIds)&&n.legacyIds.map(String).includes(t))||null}function zn(e){return(Ce(e)||Bn(e))?.id||e||null}function yw(e={}){return{background:zn(e.background),outfit:zn(e.outfit),theme:zn(e.theme),decoration:zn(e.decoration||e.frame),effect:zn(e.effect)}}function Nn(e){const t=String(e||"");if(!t)return null;const n=`eva_sprite:${t}`;return Fe().find(s=>s.type!=="outfit"?!1:s.spriteId===t||s.spriteId&&t.startsWith(`${s.spriteId}_`)||s.legacySpriteId===t||s.legacySpriteId&&t.startsWith(`${s.legacySpriteId}_`)?!0:Array.isArray(s.legacyIds)&&s.legacyIds.map(String).includes(n))||null}function $w(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),title:n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},summary:n.summary||{ru:"",en:""},goals:Array.isArray(n.goals)?n.goals:[],sections:Array.isArray(n.sections)?n.sections:[],practice:Array.isArray(n.practice)?n.practice:[],checkpoint:Array.isArray(n.checkpoint)?n.checkpoint:[]})).filter(n=>n.jlpt)}function jw(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[];return{version:Number(e?.version||1),generatedAt:e?.generatedAt||null,items:t.map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),slug:String(n.slug||String(n.jlpt||"").toLowerCase()),title:n.title||{ru:n.displayTitle?.ru||n.jlpt||"JLPT",en:n.displayTitle?.en||n.jlpt||"JLPT"},displayTitle:n.displayTitle||n.title||{ru:n.jlpt||"JLPT",en:n.jlpt||"JLPT"},description:n.description||{ru:"",en:""},goal:n.goal||{ru:"",en:""},recommendedCycle:n.recommendedCycle||{ru:"",en:""},previousLevels:Array.isArray(n.previousLevels)?n.previousLevels:[],nextLevels:Array.isArray(n.nextLevels)?n.nextLevels:[],lessonIds:Array.isArray(n.lessonIds)?n.lessonIds:[],files:n.files||{},lessonCount:Number(n.lessonCount||0),kanjiCount:Number(n.kanjiCount||0),cardCount:Number(n.cardCount||0)})).filter(n=>n.jlpt).sort((n,s)=>be.indexOf(n.jlpt)-be.indexOf(s.jlpt))}}function Sw(e){const t=Array.isArray(e?.courses)?e.courses:[];return{schema_version:Number(e?.schema_version||1),content_version:String(e?.content_version||""),courses:t.map(n=>({...n,slug:String(n.slug||"").toLowerCase(),title:String(n.title||""),native_title:String(n.native_title||""),description:String(n.description||""),course_file:String(n.course_file||""),pdf_url:String(n.pdf_url||""),lesson_count:Number(n.lesson_count||0),base_character_count:Number(n.base_character_count||0),task_count:Number(n.task_count||0)})).filter(n=>we(n.slug))}}function Cw(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,jlpt:String(n.jlpt||"").toUpperCase(),apps:Array.isArray(n.apps)?n.apps:[],kana:n.kana||{hiragana:[],katakana:[]},kanjiFocus:Array.isArray(n.kanjiFocus)?n.kanjiFocus:[],drills:Array.isArray(n.drills)?n.drills:[],sources:Array.isArray(n.sources)?n.sources:[]})).filter(n=>n.jlpt)}function Du(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"JLPT N5",en:"JLPT N5"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||80),lessonCount:Number(e?.lessonCount||10),kanjiPerLesson:Number(e?.kanjiPerLesson||8),pdfUrl:e?.pdfUrl||"docs/flashkanji_N5_expanded_textbook.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],rewards:{addToSrsXp:4,knowXp:6,hardXp:2,exerciseXp:7,exerciseMoon:1,lessonCompleteXp:45,lessonCompleteMoon:6,finalTestXp:120,finalTestMoon:20,...e?.rewards||{}}}}function Cl(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N5",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n5-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30]})).filter(n=>n.kanji.length)}}function Fu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),lessonId:n.lessonId||n.lesson_id||null,kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:[],jlpt:"N5"})).filter(n=>n.kanji)}function xl(){if(!Array.isArray(r.n5KanjiCatalog)||!r.n5KanjiCatalog.length)return;const e=new Map(r.n5KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);if(!s)return n;const a=String(n.jlpt||s.jlpt||"").toUpperCase();return a&&a!=="N5"?n:(t.add(s.kanji),Ki(n,s))}),r.n5KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(Ki({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId||null,jlpt:"N5",examples:[],source:"n5-catalog"},n)),t.add(n.kanji))})}function Ki(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:ee(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,jlpt:"N5",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:ee(s(n.onyomi)||e.onyomi||""),kunyomi:ee(s(n.kunyomi)||e.kunyomi||""),hiragana:ee((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n5Detail:t}}function Ou(e){return{version:Number(e?.version||1),level:"N5",types:Array.isArray(e?.types)?e.types:[],lessonQuestionCount:Number(e?.lessonQuestionCount||6),reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Bu(e){return{version:Number(e?.version||1),level:"N5",title:e?.title||{ru:"Финальный тест JLPT N5",en:"JLPT N5 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||24),passingPercent:Number(e?.passingPercent||80),types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","srs"],rewards:{completeXp:120,completeMoon:20,passXp:80,passMoon:12,...e?.rewards||{}}}}function zu(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"JLPT N4",en:"JLPT N4"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||170),lessonCount:Number(e?.lessonCount||17),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||48),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N4_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:5,knowXp:7,hardXp:2,exerciseXp:9,exerciseMoon:1,grammarXp:10,grammarMoon:1,lessonCompleteXp:65,lessonCompleteMoon:8,readingXp:35,readingMoon:4,listeningXp:30,listeningMoon:3,finalTestXp:180,finalTestMoon:35,...e?.rewards||{}}}}function Uu(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N4",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n4-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45]})).filter(n=>n.kanji.length)}}function Ju(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N4",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Nl(){if(!Array.isArray(r.n4KanjiCatalog)||!r.n4KanjiCatalog.length)return;const e=new Map(r.n4KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N4"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Di(n,s))}),r.n4KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(Di({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[],source:"n4-catalog"},n)),t.add(n.kanji))})}function Di(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:ee(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N4",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:ee(s(n.onyomi)||e.onyomi||""),kunyomi:ee(s(n.kunyomi)||e.kunyomi||""),hiragana:ee((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n4Detail:t}}function Gu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-grammar-${String(s+1).padStart(2,"0")}`),level:"N4",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function qu(e){return{version:Number(e?.version||1),level:"N4",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Fi(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n4-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Hu(e){return{version:Number(e?.version||1),level:"N4",title:e?.title||{ru:"Финальный тест JLPT N4",en:"JLPT N4 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||32),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||180),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||35),passXp:Number(e?.rewards?.passXp||90),passMoon:Number(e?.rewards?.passMoon||15)}}}function Vu(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"JLPT N3",en:"JLPT N3"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||370),lessonCount:Number(e?.lessonCount||37),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||80),readingCount:Number(e?.readingCount||0),listeningCount:Number(e?.listeningCount||0),pdfUrl:e?.pdfUrl||"docs/flashkanji_N3_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:6,knowXp:8,hardXp:2,exerciseXp:10,exerciseMoon:1,grammarXp:11,grammarMoon:1,lessonCompleteXp:75,lessonCompleteMoon:9,readingXp:38,readingMoon:4,listeningXp:34,listeningMoon:4,finalTestXp:220,finalTestMoon:40,...e?.rewards||{}}}}function Wu(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N3",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n3-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,45,60]})).filter(n=>n.kanji.length)}}function Xu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N3",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Ll(){if(!Array.isArray(r.n3KanjiCatalog)||!r.n3KanjiCatalog.length)return;const e=new Map(r.n3KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N3"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Oi(n,s))}),r.n3KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(Oi({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[],source:"n3-catalog"},n)),t.add(n.kanji))})}function Oi(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:ee(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N3",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:ee(s(n.onyomi)||e.onyomi||""),kunyomi:ee(s(n.kunyomi)||e.kunyomi||""),hiragana:ee((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n3Detail:t}}function Qu(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-grammar-${String(s+1).padStart(2,"0")}`),level:"N3",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function Yu(e){return{version:Number(e?.version||1),level:"N3",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Bi(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n3-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function Zu(e){return{version:Number(e?.version||1),level:"N3",title:e?.title||{ru:"Финальный тест JLPT N3",en:"JLPT N3 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||220),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||40),passXp:Number(e?.rewards?.passXp||110),passMoon:Number(e?.rewards?.passMoon||18)}}}function ep(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"JLPT N2",en:"JLPT N2"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||380),lessonCount:Number(e?.lessonCount||38),kanjiPerLesson:Number(e?.kanjiPerLesson||10),grammarCount:Number(e?.grammarCount||120),readingCount:Number(e?.readingCount||46),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N2_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function tp(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N2",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n2-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function np(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N2",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Al(){if(!Array.isArray(r.n2KanjiCatalog)||!r.n2KanjiCatalog.length)return;const e=new Map(r.n2KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N2"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),zi(n,s))}),r.n2KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(zi({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[],source:"n2-catalog"},n)),t.add(n.kanji))})}function zi(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:ee(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N2",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:ee(s(n.onyomi)||e.onyomi||""),kunyomi:ee(s(n.kunyomi)||e.kunyomi||""),hiragana:ee((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n2Detail:t}}function sp(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-grammar-${String(s+1).padStart(2,"0")}`),level:"N2",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function rp(e){return{version:Number(e?.version||1),level:"N2",lessonQuestionCount:Number(e?.lessonQuestionCount||8),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Ui(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n2-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function ap(e){return{version:Number(e?.version||1),level:"N2",title:e?.title||{ru:"Финальный тест JLPT N2",en:"JLPT N2 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||40),passingPercent:Number(e?.passingPercent||80),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||260),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||48),passXp:Number(e?.rewards?.passXp||130),passMoon:Number(e?.rewards?.passMoon||20)}}}function ip(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"JLPT N1",en:"JLPT N1"},description:e?.description||{ru:"",en:""},principle:e?.principle||{ru:"",en:""},kanjiCount:Number(e?.kanjiCount||1047),lessonCount:Number(e?.lessonCount||53),kanjiPerLesson:Number(e?.kanjiPerLesson||20),grammarCount:Number(e?.grammarCount||142),readingCount:Number(e?.readingCount||8),listeningCount:Number(e?.listeningCount||6),pdfUrl:e?.pdfUrl||"docs/flashkanji_N1_textbook_flashkanji_space.pdf",reviewPlan:Array.isArray(e?.reviewPlan)?e.reviewPlan:[],n5Bridge:Array.isArray(e?.n5Bridge)?e.n5Bridge.map(String).filter(Boolean):[],rewards:{addToSrsXp:7,knowXp:9,hardXp:2,exerciseXp:11,exerciseMoon:1,grammarXp:12,grammarMoon:1,lessonCompleteXp:85,lessonCompleteMoon:10,readingXp:42,readingMoon:4,listeningXp:38,listeningMoon:4,finalTestXp:260,finalTestMoon:48,...e?.rewards||{}}}}function op(e){const t=Array.isArray(e?.items)?e.items:[];return{version:Number(e?.version||1),level:"N1",textbook:e?.textbook||{},items:t.map((n,s)=>({...n,id:String(n.id||`n1-lesson-${s+1}`),order:Number(n.order||s+1),title:n.title||{ru:`Урок ${s+1}`,en:`Lesson ${s+1}`},theme:n.theme||n.title||{ru:"",en:""},kanji:Array.isArray(n.kanji)?n.kanji.map(String).filter(Boolean):[],goal:n.goal||{ru:"",en:""},durationMinutes:Number(n.durationMinutes||30),grammarFocus:Array.isArray(n.grammarFocus)?n.grammarFocus.map(String).filter(Boolean):[],sentences:Array.isArray(n.sentences)?n.sentences:[],writing:Array.isArray(n.writing)?n.writing.map(String).filter(Boolean):[],reviewAfterDays:Array.isArray(n.reviewAfterDays)?n.reviewAfterDays.map(Number).filter(Boolean):[1,3,7,14,30,60,90]})).filter(n=>n.kanji.length)}}function lp(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map(n=>({...n,id:String(n.id||n.courseCardId||n.kanji||""),courseCardId:String(n.courseCardId||n.id||n.kanji||""),kanji:String(n.kanji||""),meaning:n.meaning||{ru:n.meaning_ru||"",en:n.meaning_en||n.meaning_ru||""},readings:n.readings||{},examples:Array.isArray(n.examples)?n.examples:Array.isArray(n.words)?n.words:[],jlpt:"N1",lessonId:n.lessonId||n.lesson_id||null})).filter(n=>n.kanji)}function Il(){if(!Array.isArray(r.n1KanjiCatalog)||!r.n1KanjiCatalog.length)return;Ss=null;const e=new Map(r.n1KanjiCatalog.map(n=>[n.kanji,n])),t=new Set;r.cards=r.cards.map(n=>{const s=e.get(n.kanji);return!s||!(String(n.jlpt||s.jlpt||"").toUpperCase()==="N1"||String(n.id)===s.courseCardId||String(n.id)===s.id)?n:(t.add(s.kanji),Ji(n,s))}),r.n1KanjiCatalog.forEach(n=>{t.has(n.kanji)||(r.cards.push(Ji({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N1",examples:[],source:"n1-catalog"},n)),t.add(n.kanji))}),Ss=null}function Ji(e,t){const n=t.readings||{},s=c=>Array.isArray(c)?c.filter(Boolean).join(" / "):String(c||""),a=(t.examples||[]).map(c=>({...c,reading:ee(c.reading||c.hiragana||c.kana||""),translation:c.translation_ru||c.translation||c.translation_en||""})),o=a[0]||{},l=Array.isArray(t.strokeOrder)?t.strokeOrder.map(c=>typeof c=="string"?c:c.description_ru||c.description_en||"").filter(Boolean):e.stroke_order;return{...e,id:String(e.id||t.courseCardId||t.id),jlpt:"N1",lessonId:e.lessonId||t.lessonId||null,meaning_ru:t.meaning?.ru||e.meaning_ru||"",meaning_en:t.meaning?.en||e.meaning_en||t.meaning?.ru||e.meaning_ru||"",onyomi:ee(s(n.onyomi)||e.onyomi||""),kunyomi:ee(s(n.kunyomi)||e.kunyomi||""),hiragana:ee((Array.isArray(n.hiragana)?n.hiragana[0]:n.hiragana)||o.reading||e.hiragana||""),romaji:(Array.isArray(n.romaji)?n.romaji[0]:n.romaji)||o.romaji||e.romaji||"",examples:a.length?a:e.examples,apps:Array.isArray(t.apps)&&t.apps.length?t.apps:e.apps,interface_use:t.interfaceUse||e.interface_use||"",interface_use_en:t.interfaceUseEn||t.interfaceUse||e.interface_use_en||e.interface_use||"",strokes:Number(t.strokes||e.strokes||0),stroke_order:l,meta:{...e.meta||{},...t.meta||{}},n1Detail:t}}function cp(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-grammar-${String(s+1).padStart(2,"0")}`),level:"N1",order:Number(n.order||s+1),pattern:String(n.pattern||n.id||""),title:n.title||{ru:n.pattern||"",en:n.pattern||""},explanation:n.explanation||{ru:"",en:""},formula:String(n.formula||""),examples:Array.isArray(n.examples)?n.examples:[],question:n.question||{ru:"",en:""},answer:String(n.answer||""),options:Array.isArray(n.options)?n.options.map(String).filter(Boolean):[]})).filter(n=>n.pattern)}function dp(e){return{version:Number(e?.version||1),level:"N1",lessonQuestionCount:Number(e?.lessonQuestionCount||10),types:Array.isArray(e?.types)?e.types:[],reviewModes:Array.isArray(e?.reviewModes)?e.reviewModes:[]}}function Gi(e){return(Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[]).map((n,s)=>({...n,id:String(n.id||`n1-item-${s+1}`),title:n.title||{ru:n.id||"",en:n.id||""},questions:Array.isArray(n.questions)?n.questions:n.question?[{prompt:n.question,answer:n.answer,options:Array.isArray(n.options)?n.options:[]}]:[]})).filter(n=>n.id)}function up(e){return{version:Number(e?.version||1),level:"N1",title:e?.title||{ru:"Финальный тест JLPT N1",en:"JLPT N1 Final Test"},description:e?.description||{ru:"",en:""},questionCount:Number(e?.questionCount||45),passingPercent:Number(e?.passingPercent||82),kanjiPool:Array.isArray(e?.kanjiPool)?e.kanjiPool.map(String).filter(Boolean):[],grammarPool:Array.isArray(e?.grammarPool)?e.grammarPool.map(String).filter(Boolean):[],readingPool:Array.isArray(e?.readingPool)?e.readingPool.map(String).filter(Boolean):[],types:Array.isArray(e?.types)&&e.types.length?e.types:["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],rewards:{completeXp:Number(e?.rewards?.xp||e?.rewards?.completeXp||320),completeMoon:Number(e?.rewards?.moon||e?.rewards?.completeMoon||60),passXp:Number(e?.rewards?.passXp||160),passMoon:Number(e?.rewards?.passMoon||25)}}}function xw(e){return Array.isArray(e)?e.map(t=>({value:String(t?.value||t?.id||""),label:t?.label||t?.title||t?.text||{ru:String(t?.labelRu||t?.ru||t?.value||""),en:String(t?.labelEn||t?.en||t?.value||"")}})).filter(t=>t.value):[]}function Nw(e){return Array.isArray(e)?e.map(t=>({answer:Array.isArray(t?.answer)?t.answer.map(String).filter(Boolean):[],reading:Array.isArray(t?.reading)?t.reading.map(n=>ee(n)):[]})):[]}function Lw(e,t){const n=Array.isArray(t)?t.flatMap(s=>Array.isArray(s?.answer)?s.answer.map((a,o)=>({kanji:String(a||""),reading:String(s?.reading?.[o]||"")})):[]):[];return[...Array.isArray(e)?e:[],...n].map(s=>({kanji:String(s?.kanji||""),reading:String(s?.reading||"")})).filter(s=>s.kanji).filter((s,a,o)=>o.findIndex(l=>l.kanji===s.kanji&&l.reading===s.reading)===a)}function Aw(e){const t=Array.isArray(e?.items)?e.items:Array.isArray(e)?e:[],n=t.find(a=>String(a?.kind||"").toLowerCase()==="sentences")||t[0]||null;return(Array.isArray(n?.items)?n.items:[]).map((a,o)=>({id:String(a.id||`${String(n?.id||"reading-n5-sentence")}-${o+1}`),level:String(a.jlpt||n?.level||"N5").toUpperCase(),kind:"cloze",sourceKind:"sentences",sourceId:String(n?.id||"reading-n5-sentences"),sourceTitle:n?.title||{ru:"Предложения",en:"Sentences"},title:{ru:"Предложение",en:"Sentence"},sentence:String(a.sentence||""),reading:ee(a.reading||""),translationRu:String(a.translationRu||a.translation_ru||a.ru||""),translationEn:String(a.translationEn||a.translation_en||a.en||""),blanks:Nw(a.blanks),tiles:Lw(a.tiles,a.blanks),source:"reading"})).filter(a=>a.id)}function pp(e,t=[]){const n=Array.isArray(e?.achievements)&&e.achievements.length?e.achievements:t,s=Array.isArray(e?.categories)?e.categories.map(l=>({id:String(l.id),title:l.title||{ru:l.id,en:l.id},icon:l.icon||"moon"})):[],a=n.map(l=>Tl(l)),o=new Set(s.map(l=>l.id));return a.forEach(l=>{o.has(l.category)||(o.add(l.category),s.push({id:l.category,title:{ru:l.category,en:l.category},icon:l.icon||"moon"}))}),{categories:s,items:a}}function Tl(e){const t=Number(e.rewardXp??e.xp??0),n=Number(e.rewardFragments??e.coins??0);return{...e,id:String(e.id),category:e.category||e.kind||"learning",title:e.title||e.name||{ru:e.id,en:e.id},description:e.description||{ru:"",en:""},icon:e.icon||"moon",kind:e.kind||"learned",target:Number(e.target||1),rewardXp:t,rewardFragments:n,unlocked:!!e.unlocked,secret:!!e.secret}}function gp(){return[navigator.language,...navigator.languages||[]].filter(Boolean).map(t=>String(t).toLowerCase()).some(t=>t==="ru"||t.startsWith("ru-")||t==="be"||t.startsWith("be-"))?"ru":"en"}function or(){const e=gp();return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),settings:{theme:"dark",themeManuallySelected:!1,sound:!0,uxSound:!0,uxVolume:.75,language:e,languageAutoDetected:!0,languageManuallySelected:!1,dailyGoal:10},xp:0,level:1,moonFragments:0,totalCorrect:0,totalWrong:0,correctCombo:0,bestCorrectCombo:0,appOpens:0,totalMoonFragmentsEarned:0,cards:{},seenCards:{},seenKanji:{},daily:{},favorites:{},transactions:[],streakHistory:[],streak:{current:0,best:0,lastStudyDate:null,pendingReward:null},visits:{firstVisitDate:null,lastVisitDate:null,lastDailyBonusDate:null,streak:0,bestStreak:0},lessonCompletions:{},achievements:{},dailyBonuses:{},dailyBonusPending:null,lastOpenedJlptLesson:null,lastOpenedJlptLessons:{},viewedReadingLevels:{},writingPractice:{completed:0,cards:{}},secrets:{evaClicks:0,nightVisit:!1},learningPath:_l(),jlptLessonStudy:Pl(),sentencePractice:{activeId:null,selected:[],checked:!1,result:null,tileKeys:[],completed:{},attempts:0,recentIds:[],recentAnswers:[],custom:[],customSentences:[],customEditingId:null,customDraft:{jp:"",hiragana:"",ru:"",en:""},customMessage:"",customStatus:""},jlptLessonPractice:{activeIds:{},selected:{},checked:{},results:{},completed:{}},readingExercises:{},n5Course:Ml(),n4Course:Kl(),n3Course:Dl(),n2Course:Fl(),n1Course:Ol(),kanaCourses:qd(null),unlockedJlptLevels:be.slice(),unlockedBackgrounds:["bg_study_hub"],selectedEvaRoomBackground:"bg_study_hub",unlockedEvaSprites:["idle","default"],selectedEvaSprite:"idle",evaRoomDialogueProgress:{currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]},evaRoomQuiz:{answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]},evaAutonomy:yp(),evaRelationship:Bl(),shop:{owned:[],equipped:{}}}}function Iw(){const e=or();try{const t=Y1();return t?mp(e,t):e}catch(t){return console.warn("Progress reset because stored JSON is invalid.",t),e}}function mp(e,t){return{...e,...t,version:3,settings:Tw(e.settings,t.settings||{}),cards:Z1({...e.cards,...t.cards||{}}),seenCards:{...e.seenCards,...t.seenCards||{}},seenKanji:{...e.seenKanji,...t.seenKanji||{}},daily:{...e.daily,...t.daily||{}},favorites:{...e.favorites,...t.favorites||{}},transactions:Array.isArray(t.transactions)?t.transactions:e.transactions,streakHistory:Array.isArray(t.streakHistory)?t.streakHistory:e.streakHistory,streak:_w(e.streak,t.streak||{}),visits:{...e.visits,...t.visits||{}},lessonCompletions:{...e.lessonCompletions,...t.lessonCompletions||{}},achievements:{...e.achievements,...t.achievements||{}},dailyBonuses:{...e.dailyBonuses,...t.dailyBonuses||{}},dailyBonusPending:qi(t.dailyBonusPending||null),lastOpenedJlptLesson:at(t.lastOpenedJlptLesson||null),lastOpenedJlptLessons:RL(t.lastOpenedJlptLessons||{}),viewedReadingLevels:Ws(t.viewedReadingLevels||{}),appOpens:Number(t.appOpens||e.appOpens),moonFragments:di(t.moonFragments,e.moonFragments),totalMoonFragmentsEarned:Number(t.totalMoonFragmentsEarned||e.totalMoonFragmentsEarned),writingPractice:{...e.writingPractice,...t.writingPractice||{}},secrets:{...e.secrets,...t.secrets||{}},learningPath:Ew(e.learningPath,t.learningPath||{}),jlptLessonStudy:Pw(e.jlptLessonStudy,t.jlptLessonStudy||{}),sentencePractice:bp(e.sentencePractice,t.sentencePractice||{}),jlptLessonPractice:kp(e.jlptLessonPractice,t.jlptLessonPractice||{}),readingExercises:{...e.readingExercises,...t.readingExercises||{}},n5Course:Mw(e.n5Course,t.n5Course||{}),n4Course:Kw(e.n4Course,t.n4Course||{}),n3Course:Dw(e.n3Course,t.n3Course||{}),n2Course:Fw(e.n2Course,t.n2Course||{}),n1Course:Ow(e.n1Course,t.n1Course||{}),kanaCourses:qd(t.kanaCourses||e.kanaCourses),unlockedJlptLevels:[...new Set([...Array.isArray(e.unlockedJlptLevels)?e.unlockedJlptLevels:[],...Array.isArray(t.unlockedJlptLevels)?t.unlockedJlptLevels:[],...be])],unlockedBackgrounds:[...new Set([...e.unlockedBackgrounds||[],...t.unlockedBackgrounds||[]])],selectedEvaRoomBackground:t.selectedEvaRoomBackground||e.selectedEvaRoomBackground,unlockedEvaSprites:[...new Set([...e.unlockedEvaSprites||[],...t.unlockedEvaSprites||[],...(t.shop&&t.shop.owned||[]).filter(n=>String(n).startsWith("eva_sprite:")).map(n=>String(n).replace("eva_sprite:",""))])],selectedEvaSprite:t.selectedEvaSprite||e.selectedEvaSprite,evaRoomDialogueProgress:{...e.evaRoomDialogueProgress,...t.evaRoomDialogueProgress||{},rewardsClaimed:{...e.evaRoomDialogueProgress.rewardsClaimed,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.rewardsClaimed||{}},visited:{...e.evaRoomDialogueProgress.visited,...t.evaRoomDialogueProgress&&t.evaRoomDialogueProgress.visited||{}},lineHistory:Array.isArray(t.evaRoomDialogueProgress?.lineHistory)?t.evaRoomDialogueProgress.lineHistory:e.evaRoomDialogueProgress.lineHistory||[]},evaRoomQuiz:{...e.evaRoomQuiz,...t.evaRoomQuiz||{},rewarded:{...e.evaRoomQuiz.rewarded,...t.evaRoomQuiz&&t.evaRoomQuiz.rewarded||{}},history:Array.isArray(t.evaRoomQuiz?.history)?t.evaRoomQuiz.history.slice(0,40):e.evaRoomQuiz.history},evaAutonomy:jp(e.evaAutonomy,t.evaAutonomy||{}),evaRelationship:$p(e.evaRelationship,t.evaRelationship||{}),shop:{owned:[...new Set([...Ve(e.shop.owned||[]),...Ve(t.shop?.owned||t.ownedItems||[])])],equipped:{...e.shop.equipped,...Wd(t.shop?.equipped||t.equippedItems||{})}}}}function Tw(e,t){const n={...e,...t||{}};return n.theme=Rw(n.theme,e.theme||"dark"),n.themeManuallySelected=Un(n.themeManuallySelected,e.themeManuallySelected===!0),n.themeManuallySelected||(n.theme="dark"),n.sound=Un(n.sound,e.sound!==!1),n.uxSound=n.sound!==!1,n.languageAutoDetected=Un(n.languageAutoDetected,e.languageAutoDetected!==!1),n.languageManuallySelected=Un(n.languageManuallySelected,e.languageManuallySelected===!0),n}function Rw(e,t="dark"){return e==="light"||e==="dark"?e:t}function _w(e,t){const n={...e,...t||{}};return n.current=Rl(n.current,e.current||0),n.best=Rl(n.best,e.best||0),n.lastStudyDate=n.lastStudyDate||null,n.pendingReward=fp(n.pendingReward),n}function fp(e){if(!e||typeof e!="object")return null;const t=Rl(e.milestone,0),n=typeof e.availableOn=="string"?e.availableOn:"";return!t||!n?null:{milestone:t,availableOn:n}}function qi(e){if(!e||typeof e!="object")return null;const t=typeof e.availableOn=="string"?e.availableOn:"";return t?{availableOn:t}:null}function Un(e,t=!0){if(typeof e=="boolean")return e;if(typeof e=="number")return e!==0;if(typeof e=="string"){const n=e.trim().toLowerCase();if(["false","0","off","no","disabled"].includes(n))return!1;if(["true","1","on","yes","enabled"].includes(n))return!0}return t}function Rl(e,t=0){const n=Number(e);return Number.isFinite(n)?n:t}function _l(){return{version:iu,currentLevel:ou,currentNodeId:Pe,completedNodes:{},unlockedNodes:{[Pe]:!0},activeSession:null,resultHistory:{},lastUpdatedAt:null}}function Pl(){return{activeSessionKey:null,sessions:{},lastUpdatedAt:null}}function hp(){return{level:"",lessonId:"",currentIndex:0,answers:{},phase:"study",startedAt:null,updatedAt:null,completedAt:null,testOpenedAt:null}}function vp(e){const t=String(e||"").toLowerCase();return["study","test","done"].includes(t)?t:"study"}function wp(e,t){const n=hp(),s=t&&typeof t=="object"?t:{},a={...e?.answers||n.answers,...s.answers||{}};return{...n,...e||{},...s,level:String(s.level||e?.level||n.level||"").toUpperCase(),lessonId:String(s.lessonId||e?.lessonId||n.lessonId||""),currentIndex:Math.max(0,Number(s.currentIndex??e?.currentIndex??n.currentIndex??0)),answers:a,phase:vp(s.phase||e?.phase||n.phase),startedAt:s.startedAt||e?.startedAt||n.startedAt||null,updatedAt:s.updatedAt||e?.updatedAt||n.updatedAt||null,completedAt:s.completedAt||e?.completedAt||n.completedAt||null,testOpenedAt:s.testOpenedAt||e?.testOpenedAt||n.testOpenedAt||null}}function Pw(e,t){const n=Pl(),s=t&&typeof t=="object"?t:{},a={},o=e?.sessions||{},l=s.sessions||{};return Object.keys(o).forEach(c=>{a[c]=wp(o[c],l[c])}),Object.keys(l).forEach(c=>{a[c]||(a[c]=wp(null,l[c]))}),{...n,...e||{},...s||{},sessions:a,activeSessionKey:s.activeSessionKey||e?.activeSessionKey||n.activeSessionKey||null,lastUpdatedAt:s.lastUpdatedAt||e?.lastUpdatedAt||n.lastUpdatedAt||null}}function Ew(e,t){return{...e,...t||{},version:iu,currentLevel:String(t?.currentLevel||e.currentLevel||ou).toUpperCase(),currentNodeId:String(t?.currentNodeId||e.currentNodeId||Pe),completedNodes:{...e.completedNodes,...t?.completedNodes||{}},unlockedNodes:{...e.unlockedNodes,...t?.unlockedNodes||{}},activeSession:El(t?.activeSession||e.activeSession||null),resultHistory:{...e.resultHistory,...t?.resultHistory||{}},lastUpdatedAt:t?.lastUpdatedAt||e.lastUpdatedAt||null}}function El(e){return!e||typeof e!="object"?null:{nodeId:String(e.nodeId||""),mode:String(e.mode||tn),stepIndex:Math.max(0,Number(e.stepIndex||0)),answers:{...e.answers||{}},mistakes:Array.isArray(e.mistakes)?e.mistakes.slice(0,80):[],reviewStepIds:Array.isArray(e.reviewStepIds)?e.reviewStepIds.map(String).filter(Boolean).slice(0,80):[],score:Number(e.score||0),startedAt:e.startedAt||new Date().toISOString(),updatedAt:e.updatedAt||new Date().toISOString()}}function Ml(){return{currentLessonId:"n5-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0,correctAnswers:0,incorrectAnswers:0,unansweredAnswers:0,totalQuestions:0,mistakeQuestionIds:[],bestScore:0,lastScore:0,passedAt:null,lastRewardXp:0,lastRewardMoon:0},customSentences:[]}}function Mw(e,t){return{...e,...t||{},currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Ws(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Ra(e.exerciseSrs,t?.exerciseSrs||{},"N5"),writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Kl(){return{opened:!1,currentLessonId:"n4-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Kw(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Ws(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Ra(e.exerciseSrs,t?.exerciseSrs||{},"N4"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Dl(){return{opened:!1,currentLessonId:"n3-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Dw(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Ws(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Ra(e.exerciseSrs,t?.exerciseSrs||{},"N3"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Fl(){return{opened:!1,currentLessonId:"n2-lesson-1",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Fw(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Ws(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Ra(e.exerciseSrs,t?.exerciseSrs||{},"N2"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function Ol(){return{opened:!1,currentLessonId:"bulk-n1-01",completedLessons:{},viewedLessons:{},studiedKanji:{},srsKanji:{},difficultKanji:{},kanjiMistakes:{},wordMistakes:{},completedExercises:{},exerciseResults:{},exerciseSrs:{},completedGrammar:{},grammarResults:{},completedReading:{},readingAnswers:{},completedListening:{},listeningAnswers:{},writingPractice:{},activeReviewMode:"due",finalTest:{answers:{},completedAt:null,score:0,percent:0,passed:!1,mistakes:[],attempts:0},customSentences:[]}}function Ow(e,t){return{...e,...t||{},opened:!!(t?.opened||e.opened),currentLessonId:t?.currentLessonId||e.currentLessonId,completedLessons:{...e.completedLessons,...t?.completedLessons||{}},viewedLessons:Ws(t?.viewedLessons||{}),studiedKanji:{...e.studiedKanji,...t?.studiedKanji||{}},srsKanji:{...e.srsKanji,...t?.srsKanji||{}},difficultKanji:{...e.difficultKanji,...t?.difficultKanji||{}},kanjiMistakes:{...e.kanjiMistakes,...t?.kanjiMistakes||{}},wordMistakes:{...e.wordMistakes,...t?.wordMistakes||{}},completedExercises:{...e.completedExercises,...t?.completedExercises||{}},exerciseResults:{...e.exerciseResults,...t?.exerciseResults||{}},exerciseSrs:Ra(e.exerciseSrs,t?.exerciseSrs||{},"N1"),completedGrammar:{...e.completedGrammar,...t?.completedGrammar||{}},grammarResults:{...e.grammarResults,...t?.grammarResults||{}},completedReading:{...e.completedReading,...t?.completedReading||{}},readingAnswers:{...e.readingAnswers,...t?.readingAnswers||{}},completedListening:{...e.completedListening,...t?.completedListening||{}},listeningAnswers:{...e.listeningAnswers,...t?.listeningAnswers||{}},writingPractice:{...e.writingPractice,...t?.writingPractice||{}},activeReviewMode:t?.activeReviewMode||e.activeReviewMode,finalTest:{...e.finalTest,...t?.finalTest||{},answers:{...e.finalTest.answers,...t?.finalTest&&t.finalTest.answers||{}},mistakes:Array.isArray(t?.finalTest?.mistakes)?t.finalTest.mistakes:e.finalTest.mistakes},customSentences:Array.isArray(t?.customSentences)?t.customSentences:e.customSentences}}function bp(e,t){return{...e,...t,selected:Array.isArray(t.selected)?t.selected:e.selected,tileKeys:Array.isArray(t.tileKeys)?t.tileKeys:e.tileKeys,recentIds:Array.isArray(t.recentIds)?t.recentIds:e.recentIds,recentAnswers:Array.isArray(t.recentAnswers)?t.recentAnswers:e.recentAnswers,completed:{...e.completed,...t.completed||{}},custom:Array.isArray(t.custom)?t.custom.slice(0,80):e.custom,customSentences:Bw(t.customSentences,t.custom),customEditingId:typeof t.customEditingId=="string"?t.customEditingId:null,customDraft:Hi(t.customDraft||e.customDraft),customMessage:typeof t.customMessage=="string"?t.customMessage:e.customMessage,customStatus:typeof t.customStatus=="string"?t.customStatus:e.customStatus}}function Hi(e={}){return{jp:String(e.jp??e.sentence??""),hiragana:String(e.hiragana??e.reading??""),ru:String(e.ru??e.translationRu??""),en:String(e.en??e.translationEn??"")}}function Bw(e,t){const n=[],s=new Set,a=o=>{if(!o)return;const l=is(o.jp||lf(o)),c=Nr(l);if(!c||s.has(c))return;s.add(c);const d=String(o.id||"").startsWith("custom_")?String(o.id):`custom_${Je(c).toString(36)}`;n.push({id:d,jp:l,hiragana:is(o.hiragana||o.reading||""),ru:is(o.ru||o.translationRu||""),en:is(o.en||o.translationEn||""),source:"user"})};return(Array.isArray(e)?e:[]).forEach(a),(Array.isArray(t)?t:[]).forEach(a),n.slice(0,160)}function kp(e,t){return{...e,...t,activeIds:{...e.activeIds,...t.activeIds||{}},selected:{...e.selected,...t.selected||{}},checked:{...e.checked,...t.checked||{}},results:{...e.results,...t.results||{}},completed:{...e.completed,...t.completed||{}}}}function Bl(){return{warmth:44,trust:40,discipline:35,curiosity:42,mood:"neutral",conversationCount:0,totalDialogueChoices:0,lastInteractionAt:null,lastInteractionDate:null,lastDecayDate:ce(),lastKnown:{learned:0,mastered:0,reviews:0,lessons:0,streak:0,wrong:0,writing:0,sentence:0},history:[]}}function yp(){return{enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",currentLine:null,currentQuestion:null,currentDecoration:null,currentEffect:null,mood:"neutral",emotion:"calm",lastSpokeAt:null,nextSpeakAt:null,recentLineIds:[],lastRoomId:null,lastSprite:null}}function $p(e,t){return{...e,...t,warmth:de(Number(t.warmth??e.warmth),0,100),trust:de(Number(t.trust??e.trust),0,100),discipline:de(Number(t.discipline??e.discipline),0,100),curiosity:de(Number(t.curiosity??e.curiosity),0,100),lastKnown:{...e.lastKnown,...t.lastKnown||{}},history:Array.isArray(t.history)?t.history.slice(0,40):e.history}}function jp(e,t){return{...e,...t,enabled:!0,frequency:"normal",roomMode:"auto",outfitMode:"auto",recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,32):e.recentLineIds,currentLine:t.currentLine&&typeof t.currentLine=="object"?t.currentLine:e.currentLine,currentQuestion:t.currentQuestion&&typeof t.currentQuestion=="object"?t.currentQuestion:e.currentQuestion,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:e.currentDecoration,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion}}function on(){return{lastSeenDate:null,lastInteractionDate:null,lastRoute:null,recentLineIds:[],recentTopics:[],daysSinceReturn:0,lastPraiseAt:null,lastWarningAt:null,timesUserChoseTalkOverStudy:0,timesUserReturnedAfterGap:0,lastReturnCountedDate:null,preferredEvaRoomBackground:null,lastKnownMood:"neutral",recentProblemCluster:null}}function Ls(e,t={}){return{...e,...t,recentLineIds:Array.isArray(t.recentLineIds)?t.recentLineIds.slice(0,30):e.recentLineIds,recentTopics:Array.isArray(t.recentTopics)?t.recentTopics.slice(0,20):e.recentTopics,daysSinceReturn:Number(t.daysSinceReturn||e.daysSinceReturn||0),timesUserChoseTalkOverStudy:Number(t.timesUserChoseTalkOverStudy||e.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(t.timesUserReturnedAfterGap||e.timesUserReturnedAfterGap||0),lastKnownMood:typeof t.lastKnownMood=="string"?t.lastKnownMood:e.lastKnownMood}}function ln(){return{version:3,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),presenceState:"idle",mood:"neutral",emotion:"calm",currentPhrase:null,pendingQuestion:null,currentSkin:"idle",currentBackground:"bg_study_hub",currentDecoration:null,currentEffect:"none",activeSkin:"idle",activeBackground:"bg_study_hub",ownedSkins:["idle","default"],ownedBackgrounds:["bg_study_hub"],ownedEffects:[],ownedDecorations:[],lastEvent:null,lastQuestion:null,lastPhraseAt:0,lastEmotionChangeAt:0,lastQuestionAt:0,lastVisualChangeAt:0,lastPlayerActionAt:Date.now(),textRevealSkippedLineId:null,memory:on(),questionHistory:[],clickCount:0,eventHistory:[],recentEvents:[],cooldowns:{emotion:18e3,phrase:65e3,question:24e4,visual:72e4}}}function zw(){const e=ln();let t=null;try{const n=localStorage.getItem(y);t=n?JSON.parse(n):null}catch(n){console.warn("Eva state reset because stored JSON is invalid.",n)}r.evaRuntime=Gw(e,t||Jw()),Uw(),As()}function Uw(){if(!r.evaRuntime)return;r.evaRuntime.memory=Ls(on(),r.evaRuntime.memory||{});const e=r.evaRuntime.memory,t=ce(),n=e.lastSeenDate||null,s=n?Math.max(0,hs(n,t)):0;e.daysSinceReturn=s,s>0&&e.lastReturnCountedDate!==t&&(e.timesUserReturnedAfterGap=Number(e.timesUserReturnedAfterGap||0)+1,e.lastReturnCountedDate=t),e.lastSeenDate=t,e.lastRoute=r.route,e.preferredEvaRoomBackground=r.progress?.selectedEvaRoomBackground||e.preferredEvaRoomBackground||"bg_study_hub",e.lastKnownMood=r.evaRuntime.mood||e.lastKnownMood||"neutral"}function Jw(){const e=r.progress?.evaAutonomy||{};return{currentSkin:r.progress?.selectedEvaSprite||e.lastSprite||"idle",currentBackground:r.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",currentDecoration:r.customization?.selected?.decoration||r.customization?.selected?.frame||null,currentEffect:r.customization?.selected?.effect||"none",activeSkin:r.progress?.selectedEvaSprite||e.lastSprite||"idle",activeBackground:r.progress?.selectedEvaRoomBackground||e.lastRoomId||"bg_study_hub",lastEvent:e.currentLine?.reason?{type:e.currentLine.reason,at:e.currentLine.at}:null}}function Gw(e,t={}){return{...e,...t,version:3,updatedAt:new Date().toISOString(),presenceState:typeof t.presenceState=="string"?t.presenceState:e.presenceState,mood:typeof t.mood=="string"?t.mood:e.mood,emotion:typeof t.emotion=="string"?t.emotion:e.emotion,currentPhrase:t.currentPhrase&&typeof t.currentPhrase=="object"?t.currentPhrase:e.currentPhrase,pendingQuestion:t.pendingQuestion&&typeof t.pendingQuestion=="object"?t.pendingQuestion:e.pendingQuestion,currentSkin:typeof t.currentSkin=="string"?t.currentSkin:e.currentSkin,currentBackground:typeof t.currentBackground=="string"?t.currentBackground:e.currentBackground,currentDecoration:typeof t.currentDecoration=="string"?t.currentDecoration:null,currentEffect:typeof t.currentEffect=="string"?t.currentEffect:e.currentEffect,activeSkin:typeof t.activeSkin=="string"?t.activeSkin:t.currentSkin||e.activeSkin,activeBackground:typeof t.activeBackground=="string"?t.activeBackground:t.currentBackground||e.activeBackground,ownedSkins:Array.isArray(t.ownedSkins)?t.ownedSkins:e.ownedSkins,ownedBackgrounds:Array.isArray(t.ownedBackgrounds)?t.ownedBackgrounds:e.ownedBackgrounds,ownedEffects:Array.isArray(t.ownedEffects)?t.ownedEffects:e.ownedEffects,ownedDecorations:Array.isArray(t.ownedDecorations)?t.ownedDecorations:e.ownedDecorations,lastPhraseAt:Number(t.lastPhraseAt||e.lastPhraseAt||0),lastEmotionChangeAt:Number(t.lastEmotionChangeAt||e.lastEmotionChangeAt||0),lastQuestionAt:Number(t.lastQuestionAt||e.lastQuestionAt||0),lastVisualChangeAt:Number(t.lastVisualChangeAt||e.lastVisualChangeAt||0),lastPlayerActionAt:Number(t.lastPlayerActionAt||e.lastPlayerActionAt||Date.now()),textRevealSkippedLineId:typeof t.textRevealSkippedLineId=="string"?t.textRevealSkippedLineId:null,memory:Ls(e.memory||on(),t.memory||{}),questionHistory:Array.isArray(t.questionHistory)?t.questionHistory.slice(0,40):e.questionHistory,eventHistory:Array.isArray(t.eventHistory)?t.eventHistory.slice(0,80):e.eventHistory,recentEvents:Array.isArray(t.recentEvents)?t.recentEvents.slice(0,80):e.recentEvents,cooldowns:{...e.cooldowns,...t.cooldowns||{}},clickCount:Number(t.clickCount||e.clickCount||0)}}function zl(){if(!r.evaRuntime)return!1;Jl(),r.evaRuntime.updatedAt=new Date().toISOString(),tl=!1,ys&&("cancelIdleCallback"in window?window.cancelIdleCallback(ys):window.clearTimeout(ys),ys=0);try{return localStorage.setItem(y,JSON.stringify(r.evaRuntime)),!0}catch(e){return console.warn("Eva state could not be saved.",e),!1}}function As(e={}){if(!r.evaRuntime)return!1;if(e?.immediate)return zl();if(tl)return!0;tl=!0;const t=()=>{ys=0,zl()};return"requestIdleCallback"in window?ys=window.requestIdleCallback(t,{timeout:1200}):ys=window.setTimeout(t,160),!0}function Ul(){Gl(),zl(),kw()}function Jl(){if(!r.evaRuntime||!r.progress)return;const e=r.customization?.selected?.background||r.progress.shop?.equipped?.background||r.progress.selectedEvaRoomBackground||"bg_study_hub",t=Fe().filter(s=>Bt(s.id));r.evaRuntime.ownedSkins=[...new Set(["idle","default",...r.progress.unlockedEvaSprites||[],...t.filter(s=>s.type==="outfit").map(s=>s.spriteId||s.id)].filter(Boolean))],r.evaRuntime.ownedBackgrounds=[...new Set(["bg_study_hub",...r.progress.unlockedBackgrounds||[],...t.filter(s=>s.type==="background").map(s=>s.id)].filter(Boolean))],r.evaRuntime.ownedEffects=[...new Set(t.filter(s=>s.type==="effect").map(s=>s.id))],r.evaRuntime.ownedDecorations=[...new Set(t.filter(s=>s.type==="decoration").map(s=>s.id))];const n=Ps();r.evaRuntime.currentBackground=e,r.evaRuntime.currentSkin=n,r.evaRuntime.activeSkin=n,r.evaRuntime.activeBackground=e}function Gl(){return r.progress?(ew(),r.progress.level=Eo(r.progress.xp),r.progress.updatedAt=new Date().toISOString(),el=!1,ks&&("cancelIdleCallback"in window?window.cancelIdleCallback(ks):window.clearTimeout(ks),ks=0),eI(r.progress)):!1}function T(e={}){if(!r.progress)return!1;if((r.route!=="review"||!r.reviewSession)&&(Me=null),e?.immediate)return Gl();if(el)return!0;el=!0;const t=()=>{ks=0,Gl()};return"requestIdleCallback"in window?ks=window.requestIdleCallback(t,{timeout:1200}):ks=window.setTimeout(t,120),!0}function ta(e,t,{timeout:n=0,afterPaint:s=!1}={}){const a=()=>{try{const l=t?.();l&&typeof l.then=="function"&&l.catch(c=>console.warn(`[Flash Kanji] ${e} failed.`,c))}catch(l){console.warn(`[Flash Kanji] ${e} failed.`,l)}},o=()=>window.setTimeout(a,n);requestAnimationFrame(s?()=>requestAnimationFrame(o):o)}function qw(){xp(),ji=!0,We(),_s(),Ft(),window.setTimeout(_s,120),window.setTimeout(_s,320)}function he(){return typeof window>"u"?{scrollX:0,scrollY:0}:{scrollX:window.scrollX,scrollY:window.scrollY}}function Sp(){return{...he(),at:Date.now()}}function Hw(){if(typeof window>"u")return;const e=Sp(),t=rl;$u=e.at,t&&(Math.abs(Number(e.scrollY||0)-Number(t.scrollY||0))>4||Math.abs(Number(e.scrollX||0)-Number(t.scrollX||0))>4)&&(Si=t),rl=e,Ci&&window.clearTimeout(Ci),Ci=window.setTimeout(()=>{sl=Sp(),rl=sl,Si=null,ju=!0,Ci=0},30)}function Cp(){const e=he(),t=Si||sl||e,n=Date.now()-$u<90,s=Math.abs(Number(e.scrollY||0)-Number(t.scrollY||0))>4||Math.abs(Number(e.scrollX||0)-Number(t.scrollX||0))>4;return(ju||Si)&&n&&s?t:e}function Vw(){return Cn||(Cn=Cp()),Cn}function Ww(){const e=Cn||Cp();return Cn=null,e}function ue({scrollPolicy:e=se.PRESERVE,viewportSnapshot:t=null}={}){if(e===se.TOP){r.pendingFocus="__scroll-top__",qw();return}Ob(t||he())}function xp(){if(typeof document>"u")return;const e=document.activeElement;e&&typeof e.blur=="function"&&e.blur()}function Kt(e,t,n={}){ta(e,()=>{const s=t?.();s&&typeof s.then=="function"&&s.catch(a=>console.warn(`[Flash Kanji] ${e} failed.`,a)),T(),ue({scrollPolicy:n.scrollPolicy||(n.scrollTop?se.TOP:se.PRESERVE),viewportSnapshot:n.viewportSnapshot||null})})}function Xw(e){const t=e?.dataset?.action||"",n=Qw(t,e);return n?fl.has(n)?!1:(fl.add(n),requestAnimationFrame(()=>window.setTimeout(()=>fl.delete(n),0)),!0):!0}function Qw(e,t){return e?e==="rate"?`rate:${r.activeCardId||""}:${t?.dataset?.rating||""}`:e==="rate-kana-review"?`rate-kana:${t?.dataset?.course||""}:${t?.dataset?.card||""}:${t?.dataset?.rating||""}`:e==="kana-lesson-card"?`kana-lesson-card:${t?.dataset?.course||""}:${t?.dataset?.lesson||""}:${t?.dataset?.kana||""}:${t?.dataset?.rating||""}`:e==="jlpt-lesson-answer"?`jlpt:${t?.dataset?.level||""}:${t?.dataset?.lesson||t?.dataset?.lessonId||""}:${t?.dataset?.card||t?.dataset?.id||""}`:e==="reading-review-answer"?`reading-review:${r.activeExerciseReviewLevel||""}:${r.activeExerciseReviewId||""}:${t?.dataset?.question||""}`:/^n[1-5]-(answer|srs|check-input|grammar-complete|reading-complete|listening-complete)$/.test(e)?`${e}:${t?.dataset?.id||""}:${t?.dataset?.rating||t?.dataset?.value||t?.dataset?.question||""}`:"":""}function lr({level:e=""}={}){Me=null,Object.keys(r.progress.cards||{}).forEach(l=>J(l)),r.progress.level=Eo(r.progress.xp),r.progress.totalMoonFragmentsEarned=Math.max(Number(r.progress.totalMoonFragmentsEarned||0),Number(r.progress.moonFragments||0),YN()),me(),pr(),fa(),xc(),Ic(),Pc(),typeof mo=="function"&&mo();const t=F(e)?[F(e)]:be,n=Pr(e);let s=!1;for(const l of t){const c=sd(l);mN(c,l)&&(s=!0),fN(c,l)&&(s=!0),Yw(c)}const a=zg(t);(s||n||a)&&T(),Vi();const o=r.lessons.find(l=>Ge(l));r.activeLessonId||(r.activeLessonId=o?.id||r.lessons[0]?.id||null)}function Yw(e){e&&(e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={}),e.viewedLessons=Ws(e.viewedLessons||{}),Object.entries(e.srsKanji).forEach(([t,n])=>{e.studiedKanji[t]||(e.studiedKanji[t]=n)}),Object.entries(e.studiedKanji).forEach(([t,n])=>{e.srsKanji[t]||(e.srsKanji[t]=n)}))}function cr(e,t,n=new Date().toISOString()){if(!e||!t)return"";e.studiedKanji||(e.studiedKanji={}),e.srsKanji||(e.srsKanji={});const s=e.studiedKanji[t],a=e.srsKanji[t],o=s||a||n;return e.studiedKanji[t]=o,e.srsKanji[t]=a||o,o}function Vi(){var o;(o=r.progress).learningPath||(o.learningPath=_l());const e=r.progress.learningPath,t=e.completedNodes,n=e.unlockedNodes;n[Pe]=!0,(Object.keys(r.progress.seenKanji||{}).length>0||Object.keys(re().studiedKanji||{}).length>0||Object.keys(re().completedLessons||{}).length>0||Object.keys(r.progress.lessonCompletions||{}).length>0)&&!t[Pe]&&(t[Pe]=r.progress.visits?.firstVisitDate||new Date().toISOString()),ql().forEach((l,c)=>{re().completedLessons?.[l]&&!t[l]&&(t[l]=re().completedLessons[l]),n[l]=!0});const a=Np();e.currentNodeId=a,n[a]=!0,e.activeSession?.nodeId&&t[e.activeSession.nodeId]&&(e.activeSession=null)}function ql(){const e=(r.n5Textbook?.items||[]).map(t=>String(t.id||"")).filter(Boolean);return e.length?e:Rv.filter(t=>/^n5-lesson-\d+$/i.test(t))}function Np(){const e=r.progress?.learningPath||_l(),t=[Pe,...ql(),nr];return t.find(n=>!e.completedNodes?.[n])||t[t.length-1]||Pe}function Hl(){return r.n5Textbook?.items?.length?Promise.resolve(r.n5Textbook):Zr||(Zr=Ue(B.n5Lessons).then(e=>(r.n5Textbook=Cl(e),Vi(),(r.route==="learn"||r.route==="home")&&P(),r.n5Textbook)).catch(e=>{throw Zr=null,e}),Zr)}function Zw(e){const t=String(e||"");if(!t)return Promise.resolve(null);if(r.learningPathLessonPayloads[t])return Promise.resolve(r.learningPathLessonPayloads[t]);const n=_v[t];if(!n){const a=da(t);return a&&(r.learningPathLessonPayloads[t]=a),Promise.resolve(a)}if(Li.has(t))return Li.get(t);const s=Ue(n).then(a=>(r.learningPathLessonPayloads[t]=a||da(t),r.route==="learn"&&r.activeLearnNodeId===t&&P(),r.learningPathLessonPayloads[t])).catch(a=>{const o=da(t);if(o)return r.learningPathLessonPayloads[t]=o,r.route==="learn"&&r.activeLearnNodeId===t&&P(),o;throw a}).finally(()=>{Li.delete(t)});return Li.set(t,s),s}function Jn(){return Vi(),r.progress.learningPath}function Vl(){const e=Jn().activeSession;return!e?.nodeId||Jn().completedNodes?.[e.nodeId]?null:e}function dr(){const e=Vl();return e?.nodeId?e.nodeId:Jn().currentNodeId||Np()||Pe}function Lp(e){const t=Is(e);return t?b(t.title):eb(e)}function eb(e){const t=String(e||"");if(t===Pe)return p()==="ru"?"Введение в маршрут":"Route introduction";if(t===nr)return p()==="ru"?"Контрольная точка N5":"N5 checkpoint";const n=Jt(t);if(n)return b(n.title);const s=t.match(/n5-lesson-(\d+)/i);return s?p()==="ru"?`N5 · Урок ${s[1]}`:`N5 · Lesson ${s[1]}`:t}function tb(e){const t=Is(e);return t?b(t.summary):""}function ge(){return p()==="ru"?{route:"Маршрут обучения",intro:"Введение",checkpoint:"Контрольная точка",review:"Повторение",available:"доступно",current:"сейчас",completed:"завершено",locked:"закрыто",due:"нужно повторить",minutes:"мин",lessons:"уроки",start:"Начать учиться",resume:"Продолжить урок",next:"Следующий урок",reviewAction:"Повторить",reviewOld:"Повторить старое",continue:"Дальше",finish:"Завершить",backToMap:"К маршруту",openTextbook:"Открыть учебник",openCheckpoint:"К тесту",score:"Результат",mistakes:"Ошибки",retryMistakes:"Повторить ошибки",continuePath:"Продолжить путь",ready:"Готово",introTitle:"Как тут учиться",introSummary:"Кандзи идут по цепочке: знак -> смысл -> чтение -> пример -> повторение.",introBody:"Сначала берём один маленький блок, потом отправляем его в повторение. Не нужно держать всё в голове за раз.",introBridge:"Если что-то тяжело, это не провал. Значит, карточка просто раньше вернётся в повторение.",introQuestion:"Куда отправляются карточки после урока?",introQuestionHint:"Выбери правильный путь.",loading:"Подгружаю маршрут...",empty:"Маршрут скоро появится.",nextLesson:"Следующий шаг",lessonTrack:"Текущий уровень",reviewQueue:"К повторению",streak:"Стрик",level:"Уровень",xp:"XP",mapHint:"Сначала идём по текущему уровню. Остальные уровни остаются в учебниках.",step:"Шаг",finishHint:"После урока карточки попадут в повторение.",scoreHint:"Вернёмся к ошибкам или двинемся дальше."}:{route:"Learning path",intro:"Intro",checkpoint:"Checkpoint",review:"Review",available:"available",current:"current",completed:"done",locked:"locked",due:"review due",minutes:"min",lessons:"lessons",start:"Start learning",resume:"Resume lesson",next:"Next lesson",reviewAction:"Review",reviewOld:"Review old material",continue:"Next",finish:"Finish",backToMap:"Back to path",openTextbook:"Open textbook",openCheckpoint:"Open test",score:"Score",mistakes:"Mistakes",retryMistakes:"Retry mistakes",continuePath:"Continue path",ready:"Done",introTitle:"How this route works",introSummary:"Kanji move through a chain: sign -> meaning -> reading -> example -> review.",introBody:"Take one small block first, then send it into review. You do not need to hold everything at once.",introBridge:"If something feels hard, that is not failure. It only means the card should return sooner.",introQuestion:"Where do cards go after the lesson?",introQuestionHint:"Choose the correct path.",loading:"Loading the path...",empty:"The path will appear soon.",nextLesson:"Next step",lessonTrack:"Current level",reviewQueue:"Due now",streak:"Streak",level:"Level",xp:"XP",mapHint:"Stay on the current level here. The rest remains in textbooks.",step:"Step",finishHint:"After the lesson the cards move to review.",scoreHint:"Retry mistakes or keep moving."}}function nb(){const e=ge();return{id:Pe,type:"lesson",level:"INTRO",title:{ru:e.introTitle,en:e.introTitle},summary:{ru:e.introSummary,en:e.introSummary},durationMinutes:3}}function sb(){const e=Xe();return ge(),{id:tr,type:"review",level:"SRS",title:{ru:`Повторение: ${e}`,en:`Review: ${e}`},summary:{ru:e>0?"Карточки, которые уже нужно вернуть в память.":"Очередь пуста, можно идти дальше.",en:e>0?"Cards that should return now.":"Queue is empty, move on."},durationMinutes:Math.max(2,Math.min(12,e))}}function rb(){return{id:nr,type:"checkpoint",level:"N5",title:{ru:"Контрольная точка N5",en:"N5 checkpoint"},summary:{ru:"Повторение блока и переход к финальному тесту уровня.",en:"Review the block and move into the level final test."},durationMinutes:12}}function ab(){const e=Number(r.n5Meta?.kanjiPerLesson||r.n5Meta?.cardsPerLesson||8);return ql().map((t,n)=>({id:t,type:"lesson",level:"N5",title:{ru:`N5 · Урок ${n+1}`,en:`N5 · Lesson ${n+1}`},summary:n===0?{ru:`Первый интерактивный урок: ${e} знаков, чтения, примеры и мини-практика.`,en:`First interactive lesson: ${e} signs, readings, examples, and mini practice.`}:{ru:"Откроем карточки урока прямо из учебника.",en:"Open this lesson directly from the textbook."},durationMinutes:n===0?12:10}))}function Ap(){const e=nb(),t=sb(),n=rb(),s=r.n5Textbook?.items?.length?r.n5Textbook.items.map((o,l)=>({id:o.id,type:"lesson",level:"N5",title:o.title,summary:o.goal||o.theme||{ru:"",en:""},durationMinutes:Number(o.durationMinutes||o.estimatedMinutes||10)})):ab(),a=[e];return Xe()>0&&a.push(t),[...a,...s,n]}function Is(e){const t=String(e||"");return t&&Ap().find(n=>n.id===t)||null}function Ip(e){if(!e)return"locked";if(e.id===tr)return Xe()>0?"review":"available";const t=Jn();return t.completedNodes?.[e.id]?"completed":dr()===e.id?"current":t.unlockedNodes?.[e.id]?e.type==="checkpoint"?"checkpoint":"available":"locked"}function ib(e){const t=ge();return e==="completed"?t.completed:e==="current"?t.current:e==="available"?t.available:e==="review"?t.due:e==="checkpoint"?t.checkpoint:t.locked}function Tp(){const e=Jn(),t=Xe(),n=Vl(),s=dr(),a=Is(s),o=Number(_n().reviews||0)>=Number(r.progress.settings.dailyGoal||0);return!e.completedNodes?.[Pe]&&!n?{kind:"node",label:ge().start,nodeId:Pe}:n?.nodeId?{kind:"node",label:ge().resume,nodeId:n.nodeId}:t>0?{kind:"review",label:`${ge().reviewAction}: ${t}`,nodeId:tr}:o&&a?{kind:"node",label:ge().next,nodeId:a.id}:a?{kind:"node",label:e.completedNodes?.[Pe]?ge().resume:ge().start,nodeId:a.id}:{kind:"review",label:ge().reviewOld,nodeId:tr}}function ob(){const e=ge(),t=KL(),n=t?.level||bn(),s=t?.lessonId||Sd(n),a=Xt(n),o=Ch(n);return{label:!!(t?.lessonId||a&&(Object.keys(a.completedLessons||{}).length>0||a.currentLessonId&&a.currentLessonId!==o))?e.resume:e.start,level:n,lessonId:s}}function Rp(){return p()==="ru"?{sectionEyebrow:"Японские азбуки",sectionTitle:"Начни с каны",sectionHint:"Хирагана и катакана идут рядом с JLPT, но прогресс и статистика хранятся отдельно.",start:"Начать",continue:"Продолжить",review:"Повторить",lessons:"уроков",passed:"пройдено",due:"к повторению",mastered:"освоено",characters:"знаков",active:"выбранный курс",hiragana:"Хирагана",katakana:"Катакана"}:{sectionEyebrow:"Japanese syllabaries",sectionTitle:"Start with kana",sectionHint:"Hiragana and katakana live next to JLPT, while progress and stats stay separate.",start:"Start",continue:"Continue",review:"Review",lessons:"lessons",passed:"passed",due:"due",mastered:"mastered",characters:"characters",active:"selected course",hiragana:"Hiragana",katakana:"Katakana"}}function lb(e){return e?!!(e.currentRoute||Object.keys(e.lessons||{}).length||Object.keys(e.practices||{}).length||Object.keys(e.review||{}).length||Object.keys(e.writing||{}).length||e.finalTest?.completed):!1}function cb(e){if(!we(e))return 0;const t=Date.now(),n=zt(e),s=Object.entries(n).filter(([a])=>{const o=fr(a,e);return o?.slug===e&&ga(e,o.kana)}).map(([a,o])=>({cardId:a,...o}));return Qd(s,t).length}function db(e){if(!we(e))return 0;const t=zt(e);return(vn(e)?.base_characters||[]).filter(n=>t[In(e,n.kana)]?.state==="Mastered").length}function ub(e){if(!we(e))return 0;const t=zt(e);return(vn(e)?.base_characters||[]).filter(n=>{const s=t[In(e,n.kana)];return s&&(s.state!=="New"||Number(s.reviewCount||0)>0)}).length}function pb(){const e=Rp();return(r.kanaCatalog?.courses||[]).map(t=>{const n=String(t.slug||"").toLowerCase(),s=vn(n),a=yt(n),o=s?.lessons?.[0]?.id||"lesson-1",l=a.currentRoute||o,c=Math.max(Number(s?.lessons?.length||0),Number(t.lesson_count||0)),d=s?.lessons?.length?s.lessons.filter(L=>po(n,L).passed).length:Object.values(a.lessons||{}).filter(L=>L?.passed).length,u=Math.max(Number(s?.base_characters?.length||0),Number(t.base_character_count||0)),m=ub(n),h=cb(n),f=E(d,Math.max(1,c)),S=E(m,Math.max(1,u)),C=lb(a),x=n==="katakana"?e.katakana:e.hiragana;return{slug:n,title:x,subtitle:t.title||x,nativeTitle:t.native_title||(n==="katakana"?"カタカナ":"ひらがな"),description:t.description||"",currentRoute:l,started:C,dueCount:h,completedLessons:d,totalLessons:c,totalCharacters:u,masteredCount:db(n),progressPercent:Math.max(f,S),updatedAt:a.updatedAt||null}}).filter(t=>we(t.slug))}function gb(e){const t=e.filter(n=>n.started||n.updatedAt);return t.length&&t.sort((n,s)=>(Date.parse(s.updatedAt||"")||0)-(Date.parse(n.updatedAt||"")||0))[0]?.slug||""}function mb(e,t,n){const s=e.slug===t,a=e.started?n.continue:n.start,o=`#textbooks/${g(e.slug)}/${g(e.currentRoute||"lesson-1")}`,l=e.totalLessons>0?`${e.completedLessons}/${e.totalLessons} ${n.lessons}`:`0 ${n.lessons}`,c=e.totalCharacters>0?`${e.masteredCount}/${e.totalCharacters} ${n.mastered}`:`${e.masteredCount} ${n.mastered}`;return`
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
    `}function fb(){const e=pb();if(!e.length)return"";const t=Rp(),n=gb(e);return`
      <article class="study-card home-kana-section" data-section="home-kana-courses">
        <div class="section-head">
          <div>
            <span class="eyebrow accent">${i(t.sectionEyebrow)}</span>
            <h2>${i(t.sectionTitle)}</h2>
            <p>${i(t.sectionHint)}</p>
          </div>
        </div>
        <div class="home-kana-grid">
          ${e.map(s=>mb(s,n,t)).join("")}
        </div>
      </article>
    `}function hb(){const e=Mn(),t=Xe(),n=ge();return[{label:n.streak,value:r.progress.streak.current},{label:n.level,value:r.progress.level},{label:n.xp,value:`${e.current}/${e.next}`},{label:n.reviewQueue,value:t}]}function vb(e){return`
      <article class="metric home-summary-card">
        <span>${i(e.label)}</span>
        <strong>${i(e.value)}</strong>
      </article>
    `}function wb(){const e=p()==="ru",t=hc();return be.map(n=>{const s=It(n),a=$t(n),o=Xt(n),l=_p(n,a),c=Math.max(Number(s?.lessonCount||0),a.length||0),d=Tt(n),u=bb(n,a,s,o,l),m=!u&&t===n,h=b(s?.displayTitle||s?.title||{ru:`Учебник ${n}`,en:`Textbook ${n}`}),f=c>0?`${l}/${c} ${e?"уроков":"lessons"}`:e?"Без уроков":"No lessons",S=u?e?"Пройдено":"Completed":m?`${f} · ${e?"сейчас":"now"}`:d?f:En(n);return{level:n,title:h,note:S,status:u?"done":m?"current":d?"open":"locked"}})}function _p(e,t=$t(e)){const n=Xt(e),s=n?.completedLessons||{};if(!n||!s||typeof s!="object")return 0;const a=new Set;return t.forEach(o=>{o?.id&&Qn(e,o).some(l=>!!s[l])&&a.add(o.id)}),a.size?a.size:Object.values(s).filter(Boolean).length}function bb(e,t=$t(e),n=It(e),s=Xt(e),a=_p(e,t)){if(!s)return!1;if(s.finalTest?.passed)return!0;const o=Math.max(Number(n?.lessonCount||0),t.length||0);return o>0&&a>=o}function kb(e){const t=`data-action="route" data-route="textbooks" data-subroute="${g(e.level)}"`;return`
      <button class="home-route-step is-${g(e.status)}" type="button" ${t} aria-label="${g((p()==="ru"?"Открыть учебник":"Open textbook")+` ${e.level} — ${e.title}`)}">
        <span class="home-route-step-icon home-route-step-icon--level" aria-hidden="true">${i(e.level)}</span>
        <strong>${i(e.title)}</strong>
        <small>${i(e.note)}</small>
      </button>
    `}function yb(e){return`
      <button class="home-task-item" type="button" ${e.action==="route"?`data-action="route" data-route="${g(e.route||"")}"`:e.action==="home-lesson"?`data-action="home-lesson" data-level="${g(e.level||"")}" data-lesson-id="${g(e.lessonId||"")}"`:`data-action="${g(e.action)}"`}>
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.detail)}</p>
        </span>
        <span class="home-task-item-count" aria-hidden="true">${i(String(e.count??0))}</span>
      </button>
    `}function Pp(){const e=dr();return{title:Lp(e),summary:tb(e)}}function J(e){const t=String(e);if(r.progress.cards[t]||(r.progress.cards[t]={state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]}),vu.has(r.progress.cards[t]))return r.progress.cards[t];const n=ot(r.progress.cards[t]);return n.successRate=Eh(n),Number.isFinite(Number(n.srsStep))?n.srsStep=de(Math.trunc(Number(n.srsStep)),-1,63):n.srsStep=Xl(n),r.progress.cards[t]=n,vu.add(n),n}function na(e,t="seen"){if(!r.progress||!e?.id)return!1;me();const n=new Date().toISOString();let s=!1;const a=String(e.id);return r.progress.seenCards[a]||(r.progress.seenCards[a]=n,s=!0),e.kanji&&!r.progress.seenKanji[e.kanji]&&(r.progress.seenKanji[e.kanji]={at:n,cardId:a,source:t,jlpt:e.jlpt||""},s=!0),s}function sa(e,t="seen"){na(e,t)&&T()}const Dt=[5/1440,1/24,12/24,1,2,4],Wl=1;function Xl(e){const t=Number(e?.intervalDays||0);if(!(t>0))return-1;for(let s=0;s<Dt.length;s+=1)if(t<=Dt[s]*1.08)return s;const n=Dt[Dt.length-1];return Dt.length-1+Math.max(1,Math.round(Math.log2(t/n)))}function $b(e){const t=Math.trunc(e);return t<0?0:t<Dt.length?Dt[t]||Dt[0]:Dt[Dt.length-1]*2**(t-(Dt.length-1))}function jb(e,t,n=Wl){const s=Array.isArray(e)?e.slice():[],a=Array.isArray(t)?t.slice():[],o=[],l=Math.max(1,Math.trunc(Number(n)||Wl));let c=0,d=0,u=0;for(;c<s.length||d<a.length;){if(u>=l&&d<a.length){o.push(a[d++]),u=0;continue}if(c<s.length){o.push(s[c++]),u+=1;continue}if(d<a.length){o.push(a[d++]),u=0;continue}break}return o}function Sb(e,t){const n=Xl(e);return t==="again"?0:t==="hard"?n<1?1:n:t==="easy"?n<0?2:n+2:n<0?0:n+1}function Cb(e){const t=Math.max(1,Math.round(e*24*60));if(t<60)return p()==="ru"?`${t} мин.`:`${t} min`;const n=Math.round(t/60);if(n<24)return p()==="ru"?`${n} ?.`:`${n} h`;const s=Math.round(n/24);return p()==="ru"?`${s} ??.`:`${s} d`}function Wi(e){const t=e.state==="Learning"?3:e.state==="Review"?2:e.state==="Mastered"?1:0,n=Number(e.lapses||0),s=Number(e.wrong||0),a=Number(e.correct||0);return t+n*4+s*2-a*.05}function cn(e,t,n="jlpt_lesson"){if(!t)return!1;const a=Ql(e,t).reduce((o,l)=>na(l,n)||o,!1);return a&&T(),a}function Ql(e,t){const n=String(e||"").toUpperCase();return n==="N5"?gn(t):n==="N4"?kr(t):n==="N3"?$r(t):n==="N2"?Sr(t):(t?.kanji||[]).map(s=>r.cards.find(a=>a.kanji===s&&String(a.jlpt||"").toUpperCase()===n)).filter(Boolean)}function Ep(e){const t=r.progress?.cards?.[String(e?.id||"")];return t?t.state&&t.state!=="New"?!0:!!(t.lastReviewedAt||t.lastReviewedAt||Number(t.reviewCount||0)>0||Number(t.correct||0)>0||Number(t.wrong||0)>0||Number(t.lapses||0)>0):!1}function Mp(){return me(),r.progress.evaRoomQuiz}function Kp(){const e=[r.cards||[],typeof Gt=="function"?Gt():[],typeof tt=="function"?tt():[],typeof nt=="function"?nt():[],typeof st=="function"?st():[]];return Dp(e.flat().filter(Boolean))}function xb(){if(!r.progress)return[];me();const e=new Set(Object.keys(r.progress.seenCards||{})),t=new Set(Object.keys(r.progress.seenKanji||{})),n=new Set(Object.keys(r.progress.lessonCompletions||{})),s=Nb(),a=Kp().filter(o=>{if(!o?.id||!o.kanji||!Qe(o,"ru")||!Qe(o,"en"))return!1;const l=String(o.jlpt||"").toUpperCase();return e.has(String(o.id))||t.has(o.kanji)||Ep(o)||n.has(o.lessonId)||s.has(`${l}:${o.kanji}`)||s.has(o.kanji)});return Dp(a)}function Nb(){const e=new Set,t=(n,s)=>{if(!s)return;const a=String(n||"").toUpperCase();e.add(String(s)),a&&e.add(`${a}:${s}`)};return Yl().forEach(n=>{const s=n.course();Object.keys(s.studiedKanji||{}).forEach(a=>t(n.level,a)),Object.keys(s.completedLessons||{}).forEach(a=>{(n.lessonById(a)?.kanji||[]).forEach(l=>t(n.level,l))})}),e}function Yl(){return[{level:"N5",course:re,lessonById:Jt,markStudied:br,markDifficult:ka},{level:"N4",course:Q,lessonById:Zn,markStudied:yr,markDifficult:ja},{level:"N3",course:W,lessonById:ts,markStudied:jr,markDifficult:Ca},{level:"N2",course:X,lessonById:ss,markStudied:Cr,markDifficult:Na}]}function Dp(e){const t=new Set;return e.filter(n=>{const s=`${n.kanji}:${Qe(n,"ru")}:${Qe(n,"en")}`;return t.has(s)?!1:(t.add(s),!0)})}function Lb(e){!(e instanceof HTMLElement)||e.hasAttribute("disabled")||(e.classList.add("is-action-pressed"),window.requestAnimationFrame(()=>{window.setTimeout(()=>e.classList.remove("is-action-pressed"),120)}))}function Ab(e){if(e.target.classList?.contains("detail-backdrop")){D("menu_close"),r.detailCardId=null,pe();return}if(e.target.classList?.contains("final-test-backdrop")){r.finalTestModal=null,r.finalTestBusy=!1,pe();return}if(e.target.classList?.contains("changelog-backdrop")){wl();return}const t=e.target.closest(".nav-popover, .bottom-nav");if(r.navMenu&&!t&&!e.target.closest("[data-action]")){r.navMenu=null,pe();return}const n=e.target.closest("[data-action]");if(!n)return;const s=n.dataset.action;if(s==="review-next-batch"){r.reviewSession=null,Me=null,r.activeCardId=null,os(),Xf(),ue({scrollPolicy:se.TOP});return}const a=n.dataset.id;if(Lb(n),!!Xw(n)&&!(["eva-click","eva-autonomy-next","eva-question-answer"].includes(s)&&Date.now()-xu<280)){if(s&&s.endsWith("-complete-lesson")){const l=`${s.split("-")[0]}:${a||""}`;if(je.has(l)){n&&(n.disabled=!0,n.textContent=p()==="ru"?"Урок завершён":"Lesson completed");return}}if(Zl(s),requestAnimationFrame(()=>window.setTimeout(()=>Rb(s,n),0)),s==="route"){const o=n.dataset.route;if(n.closest(".bottom-nav")&&Zi(o)){ik(o);return}r.navMenu=null,o==="writing"&&r.detailCardId&&(r.activeCardId=r.detailCardId),Gn(o,n.dataset.focus||null,n.dataset.subroute||null,{afterFeedback:!0})}if(s==="nav-menu-route"){const o=n.dataset.route;r.navMenu=null,o==="writing"&&r.detailCardId&&(r.activeCardId=r.detailCardId),Gn(o,n.dataset.focus||null,n.dataset.subroute||null,{afterFeedback:!0})}if(s==="share-page"&&Nh(n.dataset.shareSection||r.route,TL(n)).catch(()=>G(p()==="ru"?"Не удалось поделиться":"Share failed")),s==="toggle-header-socials"&&Rh(!Ad()),s==="notification-center"){if(r.notificationPromptVisible){Kh();return}(r.notificationPrompt?.docked||zo("header"))&&Uo("header");return}if(s==="repeat-onboarding"){rc({force:!0});return}if(s==="onboarding-next"){eg();return}if(s==="onboarding-prev"){tg();return}if(s==="onboarding-continue"){sk();return}if(s==="onboarding-close"||s==="onboarding-skip"){la({completed:s==="onboarding-close"});return}if(s==="dismiss-mascot-speech"){xf(n.dataset.speechKey||"");return}if(s==="contact-email"&&(r.navMenu=null,r.contactModal=!0,pe()),s==="copy-contact-email"&&Ih(St).then(o=>{G(o?p()==="ru"?"Email скопирован":"Email copied":p()==="ru"?"Не удалось скопировать email":"Could not copy email")}),s==="close-contact-modal"&&(r.contactModal=!1,pe()),s==="close-changelog"){wl();return}if(s==="close-pwa-install-help"&&(r.pwaInstallHelpVisible=!1,pe()),s==="close-nav-menu"&&(r.navMenu=null,pe()),s==="close-final-test-modal"&&(r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=null,pe()),s==="final-test-focus-missing"){const o=n.dataset.focus||r.finalTestModal?.focusSelector||null;r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=o,pe()}if(s==="final-test-force-submit"){const o=String(n.dataset.level||r.finalTestModal?.level||"N5").toUpperCase();o==="N4"?bm(!0):o==="N3"?Tm(!0):o==="N2"?Um(!0):o==="N1"?ef(!0):om(!0)}if(s==="final-test-next-level"){const o=F(n.dataset.nextLevel||""),l=String(n.dataset.nextLesson||"");if(!o||!l)return;r.finalTestModal=null,r.finalTestBusy=!1,r.pendingFocus=null,ra(o,l);return}if(s==="scroll-page-edge"&&((n.dataset.direction||ac())==="up"?_s():rk()),s==="theme"&&tA(),s==="language"&&nA(),s==="sound"&&Th(),s==="toggle-ux-sound"&&sA(),s==="export"&&IL(),s==="apk-download"&&fe("apk_download",{route:"download",source:n.dataset.source||"primary"}),s==="import"&&Nu.click(),s==="reset"&&eA(),s==="share-achievement"&&HL().catch(()=>G(_("shareFallback"))),s==="pwa-install"&&LA(),s==="pwa-later"&&Dd(),s==="notification-allow"&&_A(),s==="notification-later"&&Jo(),s==="mascot-click"&&wN(n.dataset.character),s==="eva-click"&&_f(),s==="eva-dialogue-skip"&&Tb(n),s==="dictionary-favorites-tab"&&(r.filters.favorites=n.dataset.favorites||"all",r.dictionaryVisibleCount=qr,pe()),s==="set-learn-jlpt"){r.activeLearnJlpt=String(n.dataset.jlpt||"all").toUpperCase();const o=fc();Ig(o),r.activeCardId=null,pe()}if(s==="dictionary-load-more"&&(r.dictionaryVisibleCount+=Tv,pe()),s==="toggle-favorite"&&nL(a),s==="eva-room-choice"&&$y(n),s==="eva-question-answer"&&gy(n),s==="eva-room-reset"&&Sy(),s==="toggle-eva-autonomy"&&_y(),s==="cycle-eva-autonomy"&&Py(),s==="eva-autonomy-room-mode"&&Ey(),s==="eva-autonomy-outfit-mode"&&My(),s==="eva-autonomy-next"&&Lg(),s==="eva-autonomy-clear"&&Ky(),s==="eva-room-shop-open"&&(r.evaRoomShopOpen=!0,ke("shop_opened"),pe()),s==="eva-room-shop-close"&&(r.evaRoomShopOpen=!1,pe()),s==="eva-bg-buy"&&Cy(a),s==="eva-bg-select"&&xy(a),s==="eva-sprite-buy"&&Ny(a),s==="eva-sprite-select"&&Ly(a),s==="shop-category"&&(r.shopFilters.category=n.dataset.category||"all",pe()),s==="shop-filter"&&(r.shopFilters.view=n.dataset.filter||"all",pe()),s==="shop-sort"&&(r.shopFilters.sort=n.dataset.sort||"featured",pe()),s==="shop-buy"&&co(a),s==="shop-select"&&uo(a),s==="shop-clear-effect"&&Ng(a),s==="shop-clear-item"&&Ty(a),s==="clear-writing"&&AN(),s==="undo-writing"&&IN(),s==="check-writing"&&TN(!0),s==="replay-writing"&&Df(),s==="play-writing-step"&&Ff(),s==="writing-step-prev"&&Of(-1),s==="writing-step-next"&&Of(1),s==="select-writing-step"&&Bf(Number(n.dataset.index||0),!0),s==="insert-sentence-tile"&&WC(Number(n.dataset.index)),s==="undo-sentence-tile"&&XC(),s==="clear-sentence"&&QC(),s==="check-sentence"&&YC(),s==="next-sentence"&&ex(),s==="reading-review-tile"&&gj(Number(n.dataset.index)),s==="reading-review-undo"&&mj(),s==="reading-review-clear"&&fj(),s==="reading-review-check"&&sm(),s==="reading-review-answer"&&pj(n),s==="toggle-reading-translation"&&hj(),s==="add-custom-sentence"&&PC(),s==="edit-custom-sentence"&&MC(n.dataset.id),s==="delete-custom-sentence"&&KC(n.dataset.id),s==="cancel-custom-sentence-edit"&&DC(),s==="insert-jlpt-tile"&&CL(Number(n.dataset.index)),s==="undo-jlpt-tile"&&xL(),s==="clear-jlpt-practice"&&NL(),s==="check-jlpt-practice"&&LL(),s==="next-jlpt-practice"&&AL(),s==="kana-submit-exercise"&&j$(n),s==="kana-writing-done"&&S$(n.dataset.course||"",n.dataset.lesson||""),s==="kana-srs"&&N$(n.dataset.course||"",n.dataset.card||"",n.dataset.rating||"remember"),s==="kana-lesson-card"&&x$(n.dataset.course||"",n.dataset.lesson||"",n.dataset.kana||"",n.dataset.rating||"remember"),s==="kana-lesson-card-reset"&&C$(n.dataset.course||"",n.dataset.lesson||""),s==="kana-toggle-romaji"&&L$(),s==="play-kana-tts"&&A$(n.dataset.text||""),s==="kana-download-pdf"&&fe("kana_pdf_download",{course:n.dataset.course||""}),s==="retry-jlpt-course-data"&&tw(n.dataset.level||r.activeTextbookLevel||""),s==="n5-open-lesson"&&$j(a),s==="n5-overview"&&jj(),s==="n5-review"&&Sj(n.dataset.mode||null),s==="n5-answer"&&vj(n),s==="n5-check-input"&&wj(a),s==="n5-srs"&&am(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n5-writing-done"&&kj(a),s==="n5-complete-lesson"&&yj(a),s==="jlpt-lesson-answer"&&bj(n.dataset.level||"",n.dataset.lesson||n.dataset.lessonId||"",n.dataset.card||a,String(n.dataset.value||"")==="remember"),s==="n5-final-answer"&&Nj(n),s==="n5-final-submit"&&om(),s==="n5-final-reset"&&Lj(),s==="n4-open-lesson"&&eS(a),s==="n4-overview"&&tS(),s==="n4-review"&&nS(n.dataset.mode||null),s==="n4-kanji"&&sS(),s==="n4-grammar"&&rS(),s==="n4-reading"&&aS(),s==="n4-listening"&&iS(),s==="n4-final"&&oS(),s==="n4-answer"&&Hj(n),s==="n4-check-input"&&Vj(a),s==="n4-srs"&&hm(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n4-writing-done"&&Wj(a),s==="n4-complete-lesson"&&Xj(a),s==="n4-grammar-complete"&&Qj(a,n.dataset.value||""),s==="n4-reading-complete"&&Yj(a,n.dataset.question||"",n.dataset.value||""),s==="n4-listening-complete"&&Zj(a,n.dataset.question||"",n.dataset.value||""),s==="n4-final-answer"&&dS(n),s==="n4-final-submit"&&bm(),s==="n4-final-reset"&&uS(),s==="n3-open-lesson"&&DS(a),s==="n3-overview"&&FS(),s==="n3-review"&&OS(n.dataset.mode||null),s==="n3-kanji"&&BS(),s==="n3-grammar"&&zS(),s==="n3-reading"&&US(),s==="n3-listening"&&JS(),s==="n3-final"&&GS(),s==="n3-answer"&&TS(n),s==="n3-check-input"&&RS(a),s==="n3-srs"&&Lm(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n3-writing-done"&&_S(a),s==="n3-complete-lesson"&&PS(a),s==="n3-grammar-complete"&&ES(a,n.dataset.value||""),s==="n3-reading-complete"&&MS(a,n.dataset.question||"",n.dataset.value||""),s==="n3-listening-complete"&&KS(a,n.dataset.question||"",n.dataset.value||""),s==="n3-final-answer"&&VS(n),s==="n3-final-submit"&&Tm(),s==="n3-final-reset"&&WS(),s==="n2-open-lesson"&&$0(a),s==="n2-overview"&&j0(),s==="n2-review"&&S0(n.dataset.mode||null),s==="n2-kanji"&&C0(),s==="n2-grammar"&&x0(),s==="n2-reading"&&N0(),s==="n2-listening"&&L0(),s==="n2-final"&&A0(),s==="n2-answer"&&f0(n),s==="n2-check-input"&&h0(a),s==="n2-srs"&&Om(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n2-writing-done"&&v0(a),s==="n2-complete-lesson"&&w0(a),s==="n2-grammar-complete"&&b0(a,n.dataset.value||""),s==="n2-reading-complete"&&k0(a,n.dataset.question||"",n.dataset.value||""),s==="n2-listening-complete"&&y0(a,n.dataset.question||"",n.dataset.value||""),s==="n2-final-answer"&&R0(n),s==="n2-final-submit"&&Um(),s==="n2-final-reset"&&_0(),s==="n1-open-lesson"&&oC(a),s==="n1-overview"&&lC(),s==="n1-review"&&cC(n.dataset.mode||null),s==="n1-kanji"&&dC(),s==="n1-grammar"&&uC(),s==="n1-reading"&&pC(),s==="n1-listening"&&gC(),s==="n1-final"&&mC(),s==="n1-answer"&&eC(n),s==="n1-check-input"&&tC(a),s==="n1-srs"&&Qm(a,n.dataset.rating||"good",n.dataset.source||"review"),s==="n1-writing-done"&&nC(a),s==="n1-complete-lesson"&&sC(a),s==="n1-grammar-complete"&&rC(a,n.dataset.value||""),s==="n1-reading-complete"&&aC(a,n.dataset.question||"",n.dataset.value||""),s==="n1-listening-complete"&&iC(a,n.dataset.question||"",n.dataset.value||""),s==="n1-final-answer"&&vC(n),s==="n1-final-submit"&&ef(),s==="n1-final-reset"&&wC(),s==="review-exercise-next"){const o=he();os(),ue({scrollPolicy:se.TOP,viewportSnapshot:o});return}if(s==="play-kanji-audio"){const o=oe(a)||oe(r.activeCardId);o&&(n.dataset.ttsText||n.dataset.ttsKind?kh(o,{text:n.dataset.ttsText||"",kind:n.dataset.ttsKind||"cycle",label:n.dataset.ttsLabel||"",fallback:(l={})=>bh(o,l)}):wh(o))}if(s==="open-jlpt-lesson"){const o=String(n.dataset.jlpt||"").toUpperCase();if(Pn(o)){if(wn("jlpt-level",{level:o}),!Tt(o)){r.activeTextbookLevel=o,r.activeJlptLesson=o,Gn("textbooks",null,o),G(En(o));return}r.activeJlptLesson=o,Gn("jlpt-lesson",null,o)}}if(s==="open-jlpt-lesson-start"&&(wn("jlpt-start",{level:n.dataset.jlpt||bn()}),ra(n.dataset.jlpt||bn())),s==="social-link"&&fe(`social_${String(n.dataset.network||"").toLowerCase()}_opened`,{route:r.route,source:n.dataset.network||"social"}),s==="play-audio"&&hL(n.dataset.audio,n.dataset.label),s==="close-reward"){const o=he();r.rewardModal=r.rewardQueue.shift()||null,r.rewardModal&&Ef(r.rewardModal),ue({scrollPolicy:se.PRESERVE,viewportSnapshot:o})}if(s==="set-goal"&&(r.progress.settings.dailyGoal=Number(n.dataset.goal),T(),G(`${_("dailyGoal")}: ${r.progress.settings.dailyGoal}`),P()),s==="buy-shop"&&co(a),s==="start-due"&&(Gn("textbooks"),ta("start-due-toast",()=>{Xe()||G(ze("eva","welcome"))})),s==="home-lesson"){const o=F(n.dataset.level||"")||bn(),l=String(n.dataset.lessonId||"");ra(o,l)}if(s==="home-review"&&Gn("review"),s==="home-primary"&&(wn("home-primary"),ta("home-primary-navigation",Gy)),s==="learning-path-node"&&(wn("learning-path",{lessonId:n.dataset.node||a}),ta("learning-path-node-navigation",()=>Tg(n.dataset.node||a))),s==="learning-path-back"&&Ts(),s==="learning-path-choice"){const o=String(n.dataset.node||""),l=String(n.dataset.step||""),c=String(n.dataset.value||""),d=ua(o),u=d.steps.find(m=>m.id===l);if(!u||u.kind!=="quiz"||d.session.answers?.[l])return;d.session.answers[l]={selected:c,correct:c===u.answer,at:new Date().toISOString()},c===u.answer?d.session.score=Number(d.session.score||0)+1:d.session.mistakes=[...new Set([...d.session.mistakes||[],l])],d.session.updatedAt=new Date().toISOString(),T(),P()}if(s==="learning-path-step-next"){const o=String(n.dataset.node||r.activeLearnNodeId||""),l=ua(o);if(!l.steps.length)return;const c=l.steps[l.session.stepIndex];if(c?.kind==="quiz"&&!l.session.answers?.[c.id])return;l.session.stepIndex=Math.min(l.session.stepIndex+1,l.steps.length),l.session.updatedAt=new Date().toISOString(),T(),P()}if(s==="learning-path-retry"){const o=String(n.dataset.node||r.activeLearnNodeId||""),c=(ua(o).session.mistakes||[]).slice();Jn().activeSession=El({nodeId:o,mode:"mistakes",stepIndex:0,answers:{},mistakes:[],reviewStepIds:c,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),T(),P()}if(s==="learning-path-continue"){const o=String(n.dataset.node||r.activeLearnNodeId||""),l=ua(o);Xy(o,l.session,l.steps),Ts();return}if(s==="start-lesson"||s==="select-lesson"){const o=r.lessons.find(l=>l.id===a);if(!o||!Ge(o)){G(`${_("unlockedAt")} ${_o(o)}`);return}if(r.activeLessonId=a,r.activeCardId=null,r.revealed=!1,kt(),s==="start-lesson"){wn("legacy-lesson",{level:o.jlpt||"",lessonId:a}),ke("lesson_start",{lessonId:a,jlpt:o.jlpt});const l=String(o.jlpt||"").toUpperCase();/^n[2-5]-lesson-\d+$/i.test(o.id)&&["N5","N4","N3","N2"].includes(l)?ra(l,o.id):Ts(jn,o.id)}else P()}if(s==="show-answer"&&(sa(oe(r.activeCardId),"show_answer"),r.revealed=!0,kt(),We()),s==="check-reading"){const o=document.getElementById(`readingCheck-${a||r.activeCardId}`);o&&(r.readingCheck.value=o.value,r.readingCheck.cardId=a||r.activeCardId),oh()}if(s==="rate"&&cN(n.dataset.rating),s==="rate-kana-review"&&Af(n.dataset.course||"",n.dataset.card||"",n.dataset.rating||"remember"),s==="open-card"&&(sa(oe(a),"card_details"),r.detailCardId=a,P()),s==="open-kanji-page"&&Mb(a),s==="close-detail"&&(r.detailCardId=null,pe()),s==="study-card"){const o=oe(a);if(!o)return;sa(o,"study_card"),r.activeLessonId=o.lessonId,r.activeCardId=o.id,r.revealed=!1,kt(o.id),r.detailCardId=null,Ts(jn,o.lessonId)}}}function Ib(e){const t=e.target.closest?.('[data-action="eva-click"], [data-action="eva-autonomy-next"]');if(!t||t.disabled)return;const n=t.dataset.action;xu=Date.now(),e.preventDefault(),Zl(n),n==="eva-click"&&_f(),n==="eva-autonomy-next"&&Lg()}function Zl(e="activity"){r.evaRuntime&&(r.evaRuntime.lastPlayerActionAt=Date.now(),r.evaRuntime.memory=Ls(on(),r.evaRuntime.memory||{}),r.evaRuntime.memory.lastRoute=r.route,e.startsWith("eva")&&(r.evaRuntime.memory.lastInteractionDate=ce()),["eva-autonomy-next","eva-question-answer"].includes(e)&&(r.evaRuntime.lastPlayerActionAt=Date.now()))}function Tb(e){if(!r.evaRuntime)return;const t=e?.dataset?.lineId||te().currentLine?.id||"";!t||r.evaRuntime.textRevealSkippedLineId===t||(r.evaRuntime.textRevealSkippedLineId=t,As(),P())}function Rb(e,t){if(!(!e||t?.disabled)&&!_b(e,t)&&!["eva-room-choice","eva-bg-buy","eva-bg-select"].includes(e)){if(e==="eva-room-shop-open"){D("menu_open");return}if(e==="eva-room-shop-close"){D("menu_close");return}if(e==="route"){if(t?.closest(".bottom-nav")&&Zi(t.dataset.route)){D(r.navMenu===t.dataset.route?"menu_close":"menu_open");return}D("tab_switch");return}if(e==="nav-menu-route"){D("tab_switch");return}if(e==="close-nav-menu"){D("menu_close");return}if(e==="toggle-header-socials"){D(Ad()?"menu_close":"menu_open");return}if(e==="show-answer"||e==="open-card"){D("card_flip");return}if(["close-reward","close-detail","close-pwa-install-help","pwa-later","notification-later","dismiss-mascot-speech"].includes(e)){D("menu_close");return}if(e==="notification-center"){D("notification_soft");return}if(["start-lesson","select-lesson","next-sentence","study-card","rate","open-jlpt-lesson","n5-open-lesson","n5-overview","n5-review","n4-open-lesson","n4-overview","n4-review","n4-kanji","n4-grammar","n4-reading","n4-listening","n4-final","n3-open-lesson","n3-overview","n3-review","n3-kanji","n3-grammar","n3-reading","n3-listening","n3-final","n2-open-lesson","n2-overview","n2-review","n2-kanji","n2-grammar","n2-reading","n2-listening","n2-final","n1-open-lesson","n1-overview","n1-review","n1-kanji","n1-grammar","n1-reading","n1-listening","n1-final"].includes(e)){D("page_turn");return}if(["n5-answer","n5-check-input","n5-srs","n5-writing-done","n5-complete-lesson","n5-final-answer","n5-final-submit","n4-answer","n4-check-input","n4-srs","n4-writing-done","n4-complete-lesson","n4-grammar-complete","n4-reading-complete","n4-listening-complete","n4-final-answer","n4-final-submit","n3-answer","n3-check-input","n3-srs","n3-writing-done","n3-complete-lesson","n3-grammar-complete","n3-reading-complete","n3-listening-complete","n3-final-answer","n3-final-submit","n2-answer","n2-check-input","n2-srs","n2-writing-done","n2-complete-lesson","n2-grammar-complete","n2-reading-complete","n2-listening-complete","n2-final-answer","n2-final-submit","n1-answer","n1-check-input","n1-srs","n1-writing-done","n1-complete-lesson","n1-grammar-complete","n1-reading-complete","n1-listening-complete","n1-final-answer","n1-final-submit","jlpt-lesson-answer"].includes(e)){D("button_click");return}if(["pwa-install","notification-allow","notification-center","set-goal"].includes(e)){D("notification_soft");return}t?.matches("button, .btn, [role='button']")&&D("button_click"),e!=="toggle-header-socials"&&Rh(!1)}}function _b(e,t){return["learn","review"].includes(r.route)?new Set(["show-answer","rate","check-reading","play-kanji-audio","start-lesson","select-lesson","study-card"]).has(e)||!!t?.closest(".study-card, .study-layout"):!1}function Fp(e){var d;Zl("input");const t=e.target.closest("[data-ux-volume]");if(t){lA(Number(t.value)/100);const u=document.querySelector("[data-ux-volume-label]");u&&(u.textContent=`${Math.round(Fo()*100)}%`);return}const n=e.target.closest("[data-reading-input]");if(n){r.readingCheck={cardId:n.dataset.id||r.activeCardId,value:n.value,status:null,message:""};return}const s=e.target.closest("[data-sentence-draft]");if(s){const u=Ee(),m=s.dataset.sentenceDraft;u.customDraft=Hi(u.customDraft||{}),m&&Object.prototype.hasOwnProperty.call(u.customDraft,m)&&(u.customDraft[m]=s.value,u.customMessage="",u.customStatus="",T());return}const a=e.target.closest("[data-kana-exercise-form] input");if(a){const u=a.closest("[data-kana-exercise-form]"),m=yc(u?.dataset.course||"",u?.dataset.owner||"",u?.dataset.ownerType||"",u?.dataset.exercise||""),h=String(a.name||"").replace(/^kana-/,"");m&&h&&((d=r.kanaExerciseDrafts)[m]||(d[m]={}),r.kanaExerciseDrafts[m][h]=a.value);return}const o=e.target.closest("[data-filter]");if(!o)return;const l=o.dataset.filter,c=o.selectionStart;r.filters[l]=o.value,r.dictionaryVisibleCount=qr,P(),requestAnimationFrame(()=>{const u=document.getElementById(o.id);u&&(u.focus(),typeof c=="number"&&"setSelectionRange"in u&&u.setSelectionRange(c,c))})}function Pb(e){if(tk(e)||Eb(e))return;if(e.key==="Escape"&&(r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible||r.changelogModal||r.navMenu)){r.detailCardId=null,r.rewardModal=null,r.finalTestModal=null,r.contactModal=!1,r.pwaInstallHelpVisible=!1,r.navMenu=null,r.changelogModal?wl():P();return}const t=e.target.closest?.("[data-reading-input]");!t||e.key!=="Enter"||(e.preventDefault(),r.readingCheck.value=t.value,r.readingCheck.cardId=t.dataset.id||r.activeCardId,oh())}function Eb(e){return e.target?.closest?.("input, textarea, select, [contenteditable='true']")||e.ctrlKey||e.metaKey||e.altKey||e.key.length!==1||(Ai=`${Ai}${e.key.toLowerCase()}`.slice(-ae.length),Ai!==ae)?!1:(Ai="",Op(5e3),!0)}function Op(e=5e3){const t=Math.max(1,Math.min(999999,Math.floor(Number(e)||5e3)));return r.progress?(H(0,t,"cheat:moon_farm"),Z(),T(),D("moon_fragment_gain"),G(p()==="ru"?`Чит активирован: +${t} Moon`:`Cheat activated: +${t} Moon`),P(),r.progress.moonFragments):0}function Ts(e=$n,t=null,n=null){r.route="learn",r.activeLearnView=e,r.activeLearnNodeId=e===tn&&String(t||"")||null,r.activeLearnLegacyLessonId=e===jn&&String(t||"")||null;const s=e===tn&&t?`#learn/lesson/${encodeURIComponent(String(t))}`:e===jn&&t?`#learn/legacy/${encodeURIComponent(String(t))}`:"#learn";location.hash!==s&&history.replaceState(null,"",s),r.activeTextbookLevel=null,r.activeTextbookSubroute=null,r.kanjiPageId=null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=n,r.evaRoomShopOpen=!1,kt(),Ft(),pe()}function Gn(e,t=null,n=null,s={}){const a=++xi,o=()=>{a===xi&&aa(e,t,n)};if(s?.afterFeedback){Sn&&(cancelAnimationFrame(Sn),Sn=0),requestAnimationFrame(()=>window.setTimeout(o,0));return}o()}function ra(e,t=""){++xi===xi&&jL(e,t)}function aa(e,t=null,n=null){if(e==="learn"){Ts($n,null,t);return}if(!uv(e)){const a=String(e||"");Qs(ve("hash","unknown-route",a,a?[a]:[])),jt(a?`#${encodeURIComponent(a)}`:"#not-found"),r.pendingFocus=t,r.navMenu=null,kt(),Ft(),We();return}const s=r.route;if(r.route=e,r.route!=="home"&&rg(),r.routeMatch=null,r.routeNotFound=null,s!==r.route&&(s==="review"||r.route==="review")&&(r.reviewSession=null),r.route==="textbooks"){const a=n?String(n):"",o=F(a),l=we(a)?a.toLowerCase():"",c=o||l;if(a&&!c){Qs(ve("hash","invalid-parameter",`textbooks/${a}`,["textbooks",a])),jt(`#textbooks/${encodeURIComponent(a)}`),r.pendingFocus=t,We();return}r.activeTextbookLevel=c||null,r.activeTextbookSubroute=null}else if(r.route==="jlpt-lesson"){const a=n?String(n).toUpperCase():r.activeJlptLesson||HA()||"";if(a&&!F(a)){Qs(ve("hash","invalid-parameter",`jlpt-lesson/${a}`,["jlpt-lesson",a])),jt(`#jlpt-lesson/${encodeURIComponent(a)}`),r.pendingFocus=t,We();return}r.activeJlptLesson=a||null}else r.activeTextbookLevel=null,r.activeTextbookSubroute=null;if(r.route!=="review"&&os(),r.route==="textbooks")jt(Gh(r.activeTextbookLevel||"",r.activeTextbookSubroute||""));else{const a=r.route==="learn"?"#learn":r.route==="jlpt-lesson"&&r.activeJlptLesson?`#jlpt-lesson/${encodeURIComponent(r.activeJlptLesson)}`:`#${r.route}`;jt(a)}r.route!=="kanji"&&(r.kanjiPageId=null),r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=t,r.route!=="eva-room"&&(r.evaRoomShopOpen=!1),kt(),Ft(),We(),xs(r.route)&&Ri({route:r.route,delay:yl(r.route)}),r.route==="eva-room"&&ke("room_opened")}function Mb(e){const t=oe(e);if(!t)return;r.route="kanji",r.kanjiPageId=t.id,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.pendingFocus=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.evaRoomShopOpen=!1,kt();const n=`#kanji/${encodeURIComponent(t.id)}`;jt(n),Ft(),We()}function Kb(){return r.routeMatch||Ur(Xs())}function Db(){const e=Kb();if(!gu){jI(e,r),gu=!0,Bp(e);return}SI(e,r).sent&&Bp(e)}function Bp(e){if(!e||e.status!=="valid")return;const t=e.params||{};if(e.route==="review"){fe("review_open",{route:"review"});return}if(e.route==="kanji"){fe("kanji_open",{route:"kanji",cardId:t.cardId||r.kanjiPageId||t.slug||""});return}if(e.route==="jlpt-lesson"){fe("lesson_open",{route:"jlpt-lesson",level:t.level||r.activeJlptLesson||"",source:"jlpt-lesson"});return}if(e.route==="learn"&&t.targetId){fe("lesson_open",{route:"learn",lessonId:t.targetId,source:t.view||"learn"});return}if(e.route==="textbooks"&&t.level){const n=String(t.subroute||"");if(["final","final-test"].includes(n.toLowerCase())){fe("final_test_start",{route:"textbooks",level:t.level,source:"route"});return}Fb(n)&&fe("lesson_open",{route:"textbooks",level:t.level,lessonId:n,source:"textbook"})}if(e.route==="textbooks"&&t.course){const n=String(t.subroute||"");n?n==="final"||n==="final-test"?fe("kana_final_test_start",{route:"textbooks",course:t.course}):/^lesson-\d+$/i.test(n)&&fe("kana_lesson_open",{route:"textbooks",course:t.course,lessonId:n}):fe("kana_course_open",{route:"textbooks",course:t.course})}}function Fb(e){const t=String(e||"").trim().toLowerCase();return t?!new Set(["review","final","final-test","kanji","grammar","reading","listening"]).has(t):!1}function zp(){const e=Mv.begin(r.route);cancelAnimationFrame(Y.demoAnimationId),Y.demoAnimationId=0,sn=!0,Up(),zN();try{wk(),zb(),Db();let t="";if(r.route===Xd&&(t=ia(r.routeNotFound)),r.route==="home"&&(t=yk()),r.route==="download"&&(t=gk()),r.route==="about"&&(t=fk()),r.route==="learn"&&(t=Jy(),r.pendingFocus!=="lesson-tabs"&&requestAnimationFrame(wd)),r.route==="review"&&(t=CC(),r.pendingFocus!=="sentence-practice"&&requestAnimationFrame(wd)),r.route==="dictionary"&&(t=yx()),r.route==="kanji"&&(t=xx()),r.route==="writing"&&(t=Ux(),requestAnimationFrame(CN)),r.route==="stats"&&(t=Hx(),requestAnimationFrame(Mf)),r.route==="achievements"&&(t=Xx()),r.route==="eva-room"&&(t=Nk()),r.route==="jlpt-lesson"&&(t=Zy()),r.route==="textbooks"&&(t=e$()),t||(t=ia(ve("hash","unknown-route",String(r.route||""),r.route?[String(r.route)]:[]))),!e.isCurrent())return;Fn.innerHTML=`${t}${dk()}${Ub()}`,document.body.classList.toggle("modal-open",!!(r.detailCardId||Lf()||r.finalTestModal||r.contactModal||r.pwaInstallHelpVisible||r.changelogModal)),oN(),requestAnimationFrame(()=>{vk(),ic(),Yb()})}catch(t){e.isCurrent()&&(console.error(`[Flash Kanji] route=${r.route} build=${I}`,t?.stack||t),Fn.innerHTML=Xi(t))}finally{sn=!1,Up()}}function Up(){Wr=null,vi=null,wi=null,bi=null}function pe(){Sn||(Sn=requestAnimationFrame(()=>{Sn=0,zp()}))}function We(){Sn&&(cancelAnimationFrame(Sn),Sn=0),zp()}function Rs(e,t){if(typeof window>"u")return;const n=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({left:Math.max(0,Number(e)||0),top:Math.min(Math.max(0,Number(t)||0),n),behavior:"auto"})}function Ob(e=null){if(typeof window>"u"){We();return}ji=!0;const t=e||he(),n=Number(t?.scrollX||0),s=Number(t?.scrollY||0);xp(),We(),Rs(n,s),requestAnimationFrame(()=>{Rs(n,s),requestAnimationFrame(()=>Rs(n,s))}),window.setTimeout(()=>Rs(n,s),120),window.setTimeout(()=>Rs(n,s),320),window.setTimeout(()=>Rs(n,s),640),window.setTimeout(()=>Rs(n,s),840)}function P(){pe()}function Xi(e){const t=e instanceof Error?e.message:String(e||"Unknown route error");return`<section class="page empty-state" data-route-error="${g(r.route)}"><h1>${i(p()==="ru"?"Не удалось открыть раздел":"Could not open this section")}</h1><p>${i(t)}</p><button class="btn primary" type="button" data-action="route" data-route="home">${i(p()==="ru"?"На главную":"Home")}</button></section>`}function ia(e=r.routeNotFound){Bb();const t=p()==="ru",n=e?.reason||"unknown-route",s={"unknown-locale":t?"Язык из адреса не зарегистрирован для Flash Kanji.":"The URL locale is not registered in Flash Kanji.","unknown-route":t?"Такого раздела или шаблона URL нет в реестре маршрутов.":"This section or URL pattern is not registered.","invalid-parameter":t?"Параметр в адресе имеет неверный формат.":"A URL parameter has an invalid format.","entity-not-found":t?"Адрес похож на правильный, но такой страницы или сущности нет в данных.":"The URL shape is known, but the referenced page or entity does not exist."},a=e?.raw||location.pathname||location.hash||"";return`
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
    `}function Bb(){document.title=(p()==="ru","404 — Flash Kanji"),Jp("robots","noindex, follow"),Gp("/404.html")}function zb(){r.route!==Xd&&(document.title=Ov,Jp("robots","index, follow"),Gp("/"))}function Jp(e,t){let n=document.querySelector(`meta[name="${e}"]`);n||(n=document.createElement("meta"),n.setAttribute("name",e),document.head.append(n)),n.setAttribute("content",t)}function Gp(e){let t=document.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.setAttribute("rel","canonical"),document.head.append(t)),t.setAttribute("href",new URL(e,location.origin).href)}function Ub(){const e=`${hk()}${Gx()}${Zx()}${rx()}${eN()}${tN()}${nN()}${sN()}${rN()}${ak()}`;return e?`<div class="modal-layer">${e}</div>`:""}function qp(){return Se?.isConnected?Se:document.body?(Se||(Se=document.createElement("div"),Se.className="flash-kanji-onboarding-root",Se.setAttribute("role","presentation"),Se.setAttribute("aria-hidden","false")),Se.isConnected||document.body.appendChild(Se),Se):null}const ec=[{target:null,title:{ru:"Добро пожаловать",en:"Welcome"},text:{ru:"Привет! Я Ева. Быстро покажу, где что находится и как пользоваться Flash Kanji.",en:"Hi! I am Eva. I will quickly show you where everything is and how Flash Kanji works."}},{target:"[data-tour='home-lesson']",title:{ru:"Учебники",en:"Textbooks"},text:{ru:"Это главный вход в Flash Kanji. Здесь открываются учебники N5-N1 и путь к урокам каждого уровня.",en:"This is the main entrance to Flash Kanji. Open N5-N1 textbooks here and continue into each level's lessons."}},{target:"[data-tour='srs-review']",title:{ru:"Повторение",en:"Review"},text:{ru:"Изученные карточки возвращаются в повторение, чтобы закрепляться в памяти.",en:"Learned cards come back here for spaced repetition so they stay in memory."}},{target:"[data-tour='dictionary']",title:{ru:"Словарь",en:"Dictionary"},text:{ru:"В словаре можно посмотреть значения, чтения, примеры и подробности по каждому кандзи.",en:"The dictionary lets you check meanings, readings, examples, and kanji details."}},{target:["[data-tour='eva-room']","[data-tour='profile-progress']","[data-tour='profile-progress-nav']"],title:{ru:"Комната Евы",en:"Eva room"},text:e=>e?.dataset?.tour==="eva-room"?{ru:"Это моя комната. Здесь можно поговорить со мной, менять облик и тратить Moon Fragments.",en:"This is my room. You can talk to me here, change the look, and spend Moon Fragments."}:{ru:"Если комнаты Евы на этой странице нет, посмотри на стрик и статистику.",en:"If Eva Room is not on this page, check the streak and progress stats instead."}}],Qi={title:{ru:"Готово!",en:"All set!"},text:{ru:"Открой учебники и начни с N5. Я рядом.",en:"Open the textbooks and start with N5. I will be right here."},start:{ru:"Открыть учебники",en:"Open textbooks"},close:{ru:"Закрыть",en:"Close"}};function Hp(){try{return localStorage.getItem(nu)==="true"}catch{return!1}}function Jb(){try{return localStorage.getItem(ru)||""}catch{return""}}function Yi(e){try{localStorage.setItem(ru,e)}catch(t){console.warn("Could not save onboarding audience.",t)}}function tc(e=r.progress){return e?Number(e.appOpens||0)>0||Object.keys(e.lessonCompletions||{}).length>0||Object.keys(e.cards||{}).length>0||Object.keys(e.seenKanji||{}).length>0||Object.keys(e.daily||{}).length>0||Object.keys(e.favorites||{}).length>0||Object.keys(e.transactions||{}).length>0||Number(e.totalMoonFragmentsEarned||0)>0||Number(e.secrets?.evaClicks||0)>0||(e.secrets?.nightVisit?1:0)>0||Number(e.visits?.streak||0)>0||Number(e.visits?.bestStreak||0)>0:!1}function Gb(e=!1){const t=Jb();return t==="returning"||t==="completed"?t:Hp()?(Yi("completed"),"completed"):e?(Yi("returning"),"returning"):(Yi("new"),"new")}function Vp(){return!Hp()}function qb(){try{localStorage.getItem(su)==="true"&&localStorage.removeItem(su)}catch(e){console.warn("Could not clear legacy onboarding state.",e)}}function Hb(){try{localStorage.setItem(nu,"true"),Yi("completed")}catch(e){console.warn("Could not save onboarding completion.",e)}}function Wp(){return Mt}function oa(){return ec.length}function nc(){return ec[de(rn,0,oa()-1)]||ec[0]}function Vb(e=nc()){return e?.target?Array.isArray(e.target)?e.target:[e.target]:[]}function Wb(e){if(!(e instanceof HTMLElement))return!1;const t=window.getComputedStyle(e);return t.display==="none"||t.visibility==="hidden"||Number(t.opacity||"1")<=0?!1:e.getClientRects().length>0}function Xp(e=nc()){for(const t of Vb(e)){const s=Array.from(document.querySelectorAll(t)).find(a=>Wb(a));if(s)return s}return null}function Qp(e,t=null){return typeof e=="function"?Qp(e(t),t):b(e||{ru:"",en:""})}function Xb(){return typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Qb(){return!(Mt||!r.progress||!r.i18n||!r.lessons.length||!document.body||document.visibilityState!=="visible"||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal||r.navMenu)}function sc(e=!1,t=Av){clearTimeout(rr),!(!e&&!Vp())&&(rr=window.setTimeout(()=>{rr=0,rc({force:e})},t))}function rc(e={}){const t=!!e.force;let n=!1;if(Mt){if(!t)return!0;la({completed:!1,silent:!0})}if(!t&&!Vp())return!1;if(!Qb())return sc(t,au),!1;clearTimeout(rr);try{ol=document.activeElement instanceof HTMLElement?document.activeElement:null,Mt=!0,Te="step",rn=0,document.body.classList.add("onboarding-open");const s=document.querySelector(".app-shell");if(s){s.setAttribute("aria-hidden","true");try{s.inert=!0}catch(a){console.warn("Could not make the app shell inert.",a)}}return qp(),ur(),Yp(),n=!0,window.addEventListener("scroll",qn,{passive:!0}),window.addEventListener("resize",qn),window.addEventListener("orientationchange",qn),qn(),Zp(),!0}catch(s){return console.error("Flash Kanji onboarding failed to start.",s),la({completed:!1,silent:!0}),n||sc(t,au),!1}}function la(e={}){const{completed:t=!0,silent:n=!1,routeTo:s=null}=e;clearTimeout(rr),rr=0,cancelAnimationFrame(Xr),Xr=0,window.removeEventListener("scroll",qn),window.removeEventListener("resize",qn),window.removeEventListener("orientationchange",qn),an&&an.classList.remove("is-onboarding-target"),an=null,Mt=!1,Te="step",rn=0,Se&&(Se.remove(),Se=null,dt=null,Ke=null),document.body.classList.remove("onboarding-open");const a=document.querySelector(".app-shell");if(a){a.removeAttribute("aria-hidden");try{a.inert=!1}catch(o){console.warn("Could not restore app shell interactivity.",o)}}t&&Hb(),n||(s?aa(s):P()),ol?.focus&&requestAnimationFrame(()=>{try{ol.focus()}catch(o){console.warn("Could not restore onboarding focus.",o)}})}function ur(){if(!qp())return;const e=Te==="final"?null:nc(),t=Te==="final"?null:Xp(e),n=Te==="final"?Qi.title:e.title,s=Te==="final"?Qi.text:Qp(e.text,t),a=Te==="final"?p()==="ru"?"Готово":"Done":`${rn+1} ${p()==="ru"?"из":"of"} ${oa()}`,o=b(n),l=b(s),c=So("eva","calm","welcome"),d=oa();Se.classList.toggle("is-final",Te==="final"),Se.classList.toggle("has-target",!!t),Se.dataset.view=Te;const u=Te==="final"?`
        <button class="btn primary" type="button" data-action="onboarding-continue">${i(b(Qi.start))}</button>
        <button class="btn ghost" type="button" data-action="onboarding-close">${i(b(Qi.close))}</button>
      `:rn===0?`
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Начать":"Start")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `:`
          <button class="btn ghost" type="button" data-action="onboarding-prev">${i(p()==="ru"?"Назад":"Back")}</button>
          <button class="btn primary" type="button" data-action="onboarding-next">${i(p()==="ru"?"Далее":"Next")}</button>
          <button class="btn ghost" type="button" data-action="onboarding-skip">${i(p()==="ru"?"Пропустить":"Skip")}</button>
        `;Se.innerHTML=`
      ${Te==="final"?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      ${Te==="final"||t?"":'<div class="flash-kanji-onboarding-scrim" aria-hidden="true"></div>'}
      <div class="flash-kanji-onboarding-spotlight${t?"":" is-hidden"}" data-onboarding-spotlight aria-hidden="true"></div>
      <section class="flash-kanji-onboarding-dialog${Te==="final"?" is-final":""}" role="dialog" aria-modal="true" aria-labelledby="flashKanjiOnboardingTitle" aria-describedby="flashKanjiOnboardingDesc" tabindex="-1">
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
    `,dt=De("[data-onboarding-spotlight]",Se),Ke=De(".flash-kanji-onboarding-dialog",Se),an&&an!==t&&an.classList.remove("is-onboarding-target"),an=t||null,an&&an.classList.add("is-onboarding-target"),Ke&&(Ke.dataset.totalSteps=String(d)),qn()}function qn(){Mt&&(Xr||(Xr=requestAnimationFrame(()=>{Xr=0,Yp()})))}function Yp(){if(!Mt||!Se||!Ke)return;const e=Te==="final"?null:an||Xp();Xb();const t=window.innerWidth,n=window.innerHeight;if(Ke.style.maxWidth=`${Math.min(Iv,Math.max(280,t-16))}px`,Ke.style.maxHeight=`${Math.max(180,n-24)}px`,Ke.style.left="50%",Ke.style.top="50%",Ke.style.transform="translate(-50%, -50%)",Ke.dataset.placement="center",e){const s=e.isConnected?e.getBoundingClientRect():null;!!s&&s.top>=8&&s.bottom<=n-8&&s.left>=8&&s.right<=t-8&&dt?(dt.hidden=!1,dt.style.left=`${Math.round(s.left-12)}px`,dt.style.top=`${Math.round(s.top-12)}px`,dt.style.width=`${Math.round(s.width+12*2)}px`,dt.style.height=`${Math.round(s.height+12*2)}px`,dt.style.borderRadius=`${Math.max(6,Math.round(parseFloat(getComputedStyle(e).borderRadius||"8")||8))}px`):dt&&(dt.hidden=!0)}else dt&&(dt.hidden=!0);Se.style.visibility="visible",Zp()}function Yb(){Mt&&ur()}function Zp(){if(!Ke)return;const e=Ke.querySelector('[data-action="onboarding-next"], [data-action="onboarding-continue"], [data-action="onboarding-start"], [data-action="onboarding-prev"]'),t=Ke.querySelectorAll("button"),n=e||t[0]||Ke;try{n.focus?.()}catch(s){console.warn("Could not focus onboarding control.",s)}}function Zb(){return Ke?Array.from(Ke.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')).filter(e=>e instanceof HTMLElement):[]}function ek(e=1){const t=Zb();if(!t.length)return;const n=document.activeElement,s=t.indexOf(n),a=s===-1?e>0?0:t.length-1:(s+e+t.length)%t.length;t[a]?.focus?.()}function tk(e){return Mt?e.key==="Tab"?(e.preventDefault(),ek(e.shiftKey?-1:1),!0):e.key==="Escape"?(e.preventDefault(),la({completed:Te==="final"}),!0):e.key==="ArrowRight"?(e.preventDefault(),eg(),!0):e.key==="ArrowLeft"?(e.preventDefault(),tg(),!0):!1:!1}function eg(){if(!Mt)return;const e=oa()-1;if(Te!=="final"){if(rn<e){rn+=1,ur();return}Te="final",ur()}}function tg(){if(Mt){if(Te==="final"){Te="step",rn=oa()-1,ur();return}rn>0&&(rn-=1,ur())}}function nk(e=null){la({completed:!0,routeTo:e})}function sk(){nk("textbooks")}function _s(){if(typeof window>"u")return;const e=document.scrollingElement||document.documentElement;e&&(e.scrollTop=0),document.body&&(document.body.scrollTop=0),window.scrollTo({top:0,left:0,behavior:"auto"})}function Ft(){typeof window>"u"||requestAnimationFrame(()=>requestAnimationFrame(()=>_s()))}function rk(){if(typeof window>"u")return;const e=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);window.scrollTo({top:e,behavior:"auto"})}function ng(){return typeof window>"u"||!document.documentElement?!1:document.documentElement.scrollHeight>window.innerHeight+24}function ac(){return ng()?window.scrollY>32?"up":"down":null}function ak(){const e=ac()||"down",t=ng()?"":" hidden",n=p()==="ru",s=e==="up"?n?"Наверх":"Scroll to top":n?"Вниз":"Scroll to bottom",a=e==="up"?"↑":"↓";return`
      <button class="scroll-position-toggle scroll-position-toggle-${e}" type="button" data-action="scroll-page-edge" data-direction="${e}" aria-label="${g(s)}" title="${g(s)}"${t}>
        <span class="scroll-position-toggle-icon" aria-hidden="true">${i(a)}</span>
        <span class="scroll-position-toggle-label">${i(s)}</span>
      </button>
    `}function ic(){const e=De('[data-action="scroll-page-edge"]');if(!e)return;const t=ac();if(!t){e.hidden=!0;return}e.hidden=!1,e.dataset.direction=t,e.classList.toggle("scroll-position-toggle-up",t==="up"),e.classList.toggle("scroll-position-toggle-down",t==="down");const n=e.querySelector(".scroll-position-toggle-icon");n&&(n.textContent=t==="up"?"↑":"↓");const s=e.querySelector(".scroll-position-toggle-label");s&&(s.textContent=p()==="ru"?t==="up"?"Наверх":"Вниз":t==="up"?"Top":"Bottom");const a=p()==="ru"?t==="up"?"Подняться вверх":"Опуститься вниз":t==="up"?"Scroll to top":"Scroll to bottom";e.setAttribute("aria-label",a),e.setAttribute("title",a)}function Zi(e){return e!=="review"&&sg(e).length>1}function ik(e){if(!Zi(e)){aa(e);return}r.navMenu=r.navMenu===e?null:e,pe()}function sg(e){const t=p()==="ru";return{learn:[{action:"open-jlpt-lesson-start",jlpt:hc(),icon:"文",title:t?"Текущий урок":"Current lesson",text:t?"Открыть последний урок учебника.":"Open the latest lesson in the textbook."},{route:"review",focus:"review-card",icon:"↻",title:"SRS",text:t?"Перейти к повторениям.":"Go to review."},{route:"textbooks",focus:"textbook-grid",icon:"冊",title:t?"Учебники":"Textbooks",text:t?"Открыть страницы учебников JLPT.":"Open JLPT textbook pages."}],review:[{route:"review",focus:"review-card",icon:"↻",title:t?"Повторение":"Review cards",text:t?"Карточки повторения на сегодня.":"Today's review queue."},{route:"review",focus:"sentence-practice",icon:"文",title:t?"Практика предложений":"Sentence practice",text:t?"Вставь кандзи в пропуск.":"Fill kanji into blanks."}],stats:[{route:"stats",focus:"stats-top",icon:"▥",title:t?"Статистика":"Statistics",text:t?"Графики, XP и серия.":"Charts, XP, and streak."},{route:"achievements",focus:"achievements-top",icon:"月",title:t?"Достижения":"Achievements",text:t?"Галерея наград.":"Reward gallery."},{route:"stats",focus:"shop-panel",icon:"◈",title:t?"Магазин":"Shop",text:t?"Moon Fragments и предметы.":"Moon Fragments and items."}],more:[{route:"writing",focus:"writing-canvas",icon:"筆",title:t?"Письмо":"Writing",text:t?"Практика написания.":"Writing practice."},{route:"stats",focus:"stats-top",icon:"▥",title:t?"Профиль":"Profile",text:t?"Статистика, награды и прогресс.":"Stats, achievements, and progress."},{route:"eva-room",focus:"eva-room",icon:"☾",title:t?"Комната Евы":"Eva room",text:t?"Диалоги и уютные фоны.":"Dialogue scenes and cozy rooms."},{route:"download",focus:"download-top",icon:"⇩",title:t?"Скачать":"Download",text:t?"APK для Android и PWA-установка.":"Android APK and PWA install."},{route:"about",focus:"about",icon:"ℹ",title:t?"О проекте":"About",text:t?"Что такое Flash Kanji.":"What Flash Kanji is."}]}[e]||[]}function oc(e){return e==="more"?p()==="ru"?"Ещё":"More":e==="about"?p()==="ru"?"О проекте":"About":e==="stats"?p()==="ru"?"Профиль":"Profile":e==="download"?p()==="ru"?"Скачать":"Download":e==="textbooks"||e==="learn"?p()==="ru"?"Учебники":"Textbooks":_(e)}function ok(){return["home","textbooks","review","dictionary","download","stats","about"]}function lk(e){return{home:"⌂",textbooks:"文",learn:"文",review:"↻",dictionary:"典",download:"⇩",stats:"▥",about:"ℹ"}[e]||"•"}function ck(e){return`
      <li class="site-footer-link-item">
        <button class="site-footer-link site-footer-link--nav" type="button" data-action="route" data-route="${g(e)}">
          <span class="site-footer-link-icon" aria-hidden="true">${i(lk(e))}</span>
          <span>${i(oc(e))}</span>
        </button>
      </li>
    `}function dk(){const e=p()==="ru",t=new Date().getFullYear(),n=e?"Спокойная лунная комната для кандзи, уроков и повторений.":"A calm moonlit room for kanji, lessons, and steady reviews.",s=e?"Навигация":"Navigation",a=e?"Соцсети":"Social";return`
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
                ${ok().map(o=>ck(o)).join("")}
              </ul>
            </section>
            <section class="site-footer-section">
              <h2>${i(a)}</h2>
              <div class="site-footer-socials" aria-label="${g(e?"Социальные ссылки":"Social links")}">
                <a class="btn ghost footer-social-link" href="${g(ct.youtube)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${xh("youtube")}</span>
                  <span>YouTube</span>
                </a>
                <a class="btn ghost footer-social-link" href="${g(ct.instagram)}" target="_blank" rel="noopener noreferrer">
                  <span class="btn-icon" aria-hidden="true">${xh("instagram")}</span>
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
    `}function uk(){return p()==="ru"?{eyebrow:"Flash Kanji · Android",title:"Скачать Flash Kanji",accent:"и установить PWA",lead:"Та же оболочка Flash Kanji: JLPT-учебники, SRS-повторение, словарь и практика письма — на Android и в браузере.",note:"Официальная сборка Flash Kanji. Кнопка APK ведёт на файл в Google Drive, зеркало на сайте остаётся запасным вариантом.",apk:"Скачать APK",pwa:"Установить PWA",web:"Открыть веб-версию",meta:"Android 8.0+ · APK · бесплатно · 793 КБ",stepsTitle:"Как установить",stepsSubtitle:"Коротко и без лишних экранов.",infoTitle:"Что внутри",info:["JLPT N5–N1 учебники и маршрут уроков.","SRS-повторение и словарь кандзи.","Практика письма, импорт/экспорт прогресса и PWA-режим."],steps:[{icon:"1",title:"Скачайте APK",text:"Нажмите «Скачать APK» и дождитесь завершения загрузки."},{icon:"2",title:"Разрешите установку",text:"Если Android попросит, разрешите установку из этого источника."},{icon:"3",title:"Откройте Flash Kanji",text:"Запустите приложение и продолжайте учить кандзи где угодно."}],mirror:"Запасное зеркало APK",screenshotAlt:"Скриншот Flash Kanji на Android"}:{eyebrow:"Flash Kanji · Android",title:"Download Flash Kanji",accent:"and install the PWA",lead:"The same Flash Kanji shell: JLPT textbooks, SRS review, dictionary, and writing practice on Android and in the browser.",note:"Official Flash Kanji build. The APK button opens the Google Drive file; the site mirror is kept as a fallback.",apk:"Download APK",pwa:"Install PWA",web:"Open web version",meta:"Android 8.0+ · APK · free · 793 KB",stepsTitle:"How to install",stepsSubtitle:"Short and clean.",infoTitle:"What's inside",info:["JLPT N5–N1 textbooks and lesson route.","SRS review and kanji dictionary.","Writing practice, progress import/export, and PWA mode."],steps:[{icon:"1",title:"Download the APK",text:"Tap Download APK and wait for the file to finish."},{icon:"2",title:"Allow install",text:"If Android asks, allow installation from this source."},{icon:"3",title:"Open Flash Kanji",text:"Launch the app and keep studying kanji anywhere."}],mirror:"Fallback APK mirror",screenshotAlt:"Flash Kanji Android screenshot"}}function pk(e){return`
      <article class="home-task-item download-install-step">
        <span class="home-task-item-icon" aria-hidden="true">${i(e.icon)}</span>
        <span class="home-task-item-copy">
          <strong>${i(e.title)}</strong>
          <p>${i(e.text)}</p>
        </span>
      </article>
    `}function gk(){const e=uk();return`
      <section class="page home-shell download-page" data-section="download-page">
        <article class="home-hero-card download-hero-card" data-section="download-top" aria-labelledby="downloadTitle">
          <img class="home-hero-moon" src="assets/decor/elements/crescent-moon.webp" alt="" aria-hidden="true" loading="eager" decoding="async" />
          <div class="home-hero-copy download-hero-copy">
            <p class="eyebrow">${i(e.eyebrow)}</p>
            <h1 class="hero-title home-hero-title" id="downloadTitle">${i(e.title)}<br><em>${i(e.accent)}</em></h1>
            <p class="home-hero-note">${i(e.lead)}</p>
            <p class="hero-subtitle">${i(e.note)}</p>
            <div class="hero-actions home-hero-actions">
              <a class="btn primary home-primary-cta apk-download" href="${g(jv)}" target="_blank" rel="noopener noreferrer" data-action="apk-download" data-source="google-drive">
                <span aria-hidden="true">⇩</span>
                <span>${i(e.apk)}</span>
              </a>
              <button class="btn ghost home-primary-cta" type="button" data-action="pwa-install">${i(e.pwa)}</button>
              <button class="btn ghost home-primary-cta" type="button" data-action="route" data-route="home">${i(e.web)}</button>
            </div>
            <p class="download-meta">${i(e.meta)}</p>
          </div>
          <figure class="download-app-preview">
            <img src="${g(Cv)}" alt="${g(e.screenshotAlt)}" loading="eager" decoding="async" />
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
                ${e.steps.map(pk).join("")}
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
              <a class="btn ghost" href="${g(Sv)}" download="flash-kanji-android.apk" data-action="apk-download" data-source="mirror">${i(e.mirror)}</a>
            </article>
          </aside>
        </section>
      </section>
    `}function mk(){return p()==="ru"?{eyebrow:"О проекте",title:"О Flash Kanji",lead:"О Flash Kanji — это образовательный проект для изучения японского языка через кандзи, чтение, примеры и визуальную память.",heroTitle:"Спокойное пространство, куда хочется возвращаться каждый день",heroLead:"Идея проекта простая: сделать обучение японскому не сухой таблицей символов, а живым пространством, где кандзи складываются в привычку.",paragraphs:["Здесь кандзи изучаются постепенно — от базовых уровней до более сложных, с примерами, чтениями, ассоциациями и практикой.","Flash Kanji создан для тех, кто хочет учить японский с нуля или системно прокачивать уже имеющиеся знания.","Проект помогает запоминать иероглифы, понимать их значения, видеть реальные примеры использования и выстраивать привычку регулярного обучения.","В центре Flash Kanji — атмосфера спокойного цифрового кабинета, где обучение похоже не на экзамен, а на личный путь.","Здесь есть карточки, уроки, словарь, повторение, практика написания и визуальные элементы, которые помогают удерживать внимание."],sectionTitle:"Как устроен Flash Kanji",highlightTitle:"Что помогает удерживать ритм",highlightPoints:["Учебники JLPT N5-N1 с постепенным входом в материал.","Карточки с кандзи, чтениями и примерами.","SRS-повторение, чтобы не терять выученное.","Практика письма и тестовые упражнения.","Персонаж-наставник Eva и спокойная визуальная среда."],closing:"Flash Kanji — изучай японский в своей лунной комнате.",textbooks:"К учебникам",review:"К повторению",home:"На главную",evaRoom:"Комната Евы"}:{eyebrow:"About",title:"About Flash Kanji",lead:"Flash Kanji is an educational project for learning Japanese through kanji, readings, examples, and visual memory.",heroTitle:"A quiet place you will want to return to every day",heroLead:"The idea is simple: make Japanese feel less like a dry table of symbols and more like a living space where kanji turn into habit.",paragraphs:["Kanji are introduced gradually, from the basic levels to more advanced ones, with examples, readings, associations, and practice.","Flash Kanji is for people starting Japanese from zero and for learners who want a steady system to grow existing knowledge.","The project helps you remember characters, understand what they mean, see real usage, and build a consistent study routine.","At the center of Flash Kanji is the atmosphere of a calm digital study room, where learning feels like a personal journey rather than an exam.","You get cards, lessons, a dictionary, review, writing practice, and visual elements that help keep attention in place."],sectionTitle:"How Flash Kanji is built",highlightTitle:"What keeps the rhythm going",highlightPoints:["JLPT N5-N1 textbooks with a gradual path into the material.","Cards with kanji, readings, and examples.","SRS review so learned items stay in memory.","Writing practice and test exercises.","Eva as a mentor and a calm visual study space."],closing:"Flash Kanji — study Japanese in your own moonlit room.",textbooks:"Textbooks",review:"Review",home:"Home",evaRoom:"Eva room"}}function fk(){const e=mk();return`
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
    `}function hk(){const e=sg(r.navMenu);if(!e.length)return"";const t=r.navMenu,n=t?oc(t):"";return`
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
    `}function vk(){if(!r.pendingFocus)return;if(ji){ji=!1,r.pendingFocus=null;return}const e=r.pendingFocus;if(r.pendingFocus=null,e==="__scroll-top__"){Ft();return}const t={"lesson-card":".study-card, .daily-lesson-card","kana-character-card":"[data-section='kana-character-study-card']","lesson-tabs":".lesson-tabs","review-card":"[data-section='review-card']","sentence-practice":"[data-section='sentence-practice']","writing-demo":"[data-section='writing-demo']","writing-canvas":"[data-section='writing-canvas']","eva-room":".eva-room-entry, .eva-room-page, .eva-room-shell",about:".about-page","download-top":"[data-section='download-top']","stats-top":".metric-grid","achievements-top":".achievements-page .metric-grid","shop-panel":"[data-section='shop-panel']"},n=document.querySelector(t[e]||e);n&&(n.scrollIntoView({behavior:"auto",block:"start"}),n.classList.add("is-focus-pulse"),window.setTimeout(()=>n.classList.remove("is-focus-pulse"),900))}function wk(){vl(".nav-btn").forEach(t=>{const n=t.dataset.route,s=n===r.route||n==="learn"&&r.route==="textbooks"||n==="stats"&&r.route==="achievements"||n==="dictionary"&&r.route==="kanji";t.classList.toggle("is-active",s),t.classList.toggle("has-menu",!!t.closest(".bottom-nav")&&Zi(n)),t.setAttribute("aria-expanded",r.navMenu===n?"true":"false"),s?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current");const a=t.querySelector("small");a&&n&&(a.textContent=oc(n))});const e=De('[data-action="language"]');e&&(e.textContent=p().toUpperCase()),bk(),Nd(),oA(),Ld(),kk()}function bk(){const e=p()==="ru",t={sidebar:e?"Основная навигация Flash Kanji":"Flash Kanji main navigation",sidebarNav:e?"Разделы Flash Kanji":"Flash Kanji sections",learning:e?"Обучение":"Learning",project:e?"Проект":"Project",progress:e?"Прогресс Flash Kanji":"Flash Kanji progress",profile:e?"Профиль Flash Kanji":"Flash Kanji profile",home:e?"На главную":"Go home",socialLinks:e?"Социальные ссылки":"Social links",reportBug:e?"Сообщить об ошибке":"Report a bug",theme:e?"Сменить тему":"Toggle theme",themeTitle:e?"Тема":"Theme",language:e?"Сменить язык":"Change language",languageTitle:e?"Язык":"Language",exportProgress:e?"Экспорт прогресса":"Export progress",exportTitle:e?"Экспорт":"Export",importProgress:e?"Импорт прогресса":"Import progress",importTitle:e?"Импорт":"Import",openProfile:e?"Открыть профиль":"Open profile",profileTitle:e?"Профиль":"Profile"},n=(s,a,o=a)=>{document.querySelectorAll(s).forEach(l=>{l.setAttribute("aria-label",a),l.setAttribute("title",o)})};document.querySelector(".app-sidebar")?.setAttribute("aria-label",t.sidebar),document.querySelector(".sidebar-nav")?.setAttribute("aria-label",t.sidebarNav),document.querySelector(".sidebar-progress")?.setAttribute("aria-label",t.progress),document.querySelector(".sidebar-user")?.setAttribute("aria-label",t.profile),document.querySelector("#headerSocialActions")?.setAttribute("aria-label",t.socialLinks),document.querySelectorAll("[data-nav-caption]").forEach(s=>{s.textContent=s.getAttribute("data-nav-caption")==="project"?t.project:t.learning}),n('.brand-mark[data-action="route"][data-route="home"]',t.home),n('[data-action="contact-email"]',t.reportBug),n('[data-action="theme"]',t.theme,t.themeTitle),n('[data-action="language"]',t.language,t.languageTitle),n('.icon-btn[data-action="export"]',t.exportProgress,t.exportTitle),n('.icon-btn[data-action="import"]',t.importProgress,t.importTitle),n('.sidebar-user-open[data-action="route"][data-route="stats"]',t.openProfile,t.profileTitle)}function kk(){const e=De("#sidebarProgressBar"),t=De("#sidebarProgressLabel"),n=De("#sidebarProgressPercent"),s=De("#sidebarProgressNote"),a=De("#sidebarUserAvatar"),o=De("#sidebarUserTitle"),l=De("#sidebarUserSubtitle"),c=Mn(),d=Pp(),u=Xe(),m=Math.max(1,Number(r.progress?.level||1)),h=Math.max(0,Math.min(100,Math.round(c.percent||0)));e&&(e.max=100,e.value=h),t&&(t.textContent=`${p()==="ru"?"Уровень":"Level"} ${m}`),n&&(n.textContent=`${h}%`),s&&(s.textContent=u>0?`${u} ${ge().reviewQueue} · ${d.title||ge().mapHint}`:`${d.title||ge().mapHint}${d.summary?` · ${d.summary}`:""}`),a&&(a.textContent=`Lv ${m}`),o&&(o.textContent=(p()==="ru","Flash Kanji")),l&&(l.textContent=`${ge().level} ${m} · ${r.progress?.streak?.current||0} ${ge().streak}`)}function yk(){r.n5Textbook?.items?.length||Hl();const e=$k(),t=ob(),n=Xe(),s=Pp(),a=hb(),o=ge(),l=Mn(),c=Math.max(0,Math.min(100,Math.round(l.percent||0))),d=p()==="ru",u=d?[{action:"home-review",icon:"↻",title:"Повторение",detail:n>0?`${n} карточек ждут тебя.`:"Очередь пуста, но тренировка всегда под рукой.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:r.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Комната Евы",detail:"Диалоги, фон и Moon Fragments.",count:r.progress.moonFragments}]:[{action:"home-review",icon:"↻",title:"Review",detail:n>0?`${n} cards are waiting.`:"The queue is empty, but practice is always ready.",count:n},{action:"home-lesson",icon:"文",title:t.label,detail:s.title||o.mapHint,count:r.progress.level,level:t.level,lessonId:t.lessonId||""},{action:"route",route:"eva-room",icon:"☾",title:"Eva Room",detail:"Dialogue, backgrounds, and Moon Fragments.",count:r.progress.moonFragments}],m=Mh();return`
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
          ${a.map(vb).join("")}
        </section>
        <section class="home-dashboard">
          <div class="home-dashboard-main">
            ${fb()}
            <article class="study-card home-route-card">
              <div class="section-head">
                <div>
                  <span class="eyebrow accent">${i(d?"Маршрут N5":"N5 route")}</span>
                  <h2>${i(d?"Твой путь сегодня":"Your path today")}</h2>
                </div>
                <button class="text-button" type="button" data-action="route" data-route="textbooks">${i(d?"Все учебники →":"All textbooks →")}</button>
              </div>
              <div class="home-route-track">
                ${wb().map(kb).join("")}
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
                ${u.map(yb).join("")}
              </div>
            </article>
            ${ei()?"":`
              <article class="study-card home-install-card">
                <button class="btn ghost" type="button" data-action="pwa-install">${i(m.install)}</button>
                <p class="home-install-hint">${i(m.description)}${zr()?` ${i(m.iosInstruction)}`:""}</p>
              </article>
            `}
          </div>
          <aside class="home-dashboard-side">
            ${Ck(e)}
          </aside>
        </section>
      </section>
    `}function $k(){jk();const e=te(),t=e.currentLine||r.evaRuntime?.currentPhrase||null,n=lo(),s=b(Or("eva").name||{ru:"Ева",en:"Eva"}),a=r.evaRuntime?.mood||e.mood||dn().mood,o=r.evaRuntime?.emotion||e.emotion||t?.emotion||"calm",l=t?.state||r.evaRuntime?.presenceState||(n?"wait_choice":"speak"),c=Es(Ln(t?.sprite||r.evaRuntime?.currentSkin||Ps(),o));return{line:t,question:n,speaker:s,mood:a,emotion:o,presenceState:l,sprite:c}}function jk(){me();const e=te();return e.currentLine?.text||r.evaRuntime?.currentPhrase?.text?e.currentLine||r.evaRuntime.currentPhrase:(Array.isArray(r.evaAutonomyLines)&&r.evaAutonomyLines.length&&Sk(),{id:"home_eva_idle_fallback",category:"idle",text:{ru:"Я рядом. Начнём с одного спокойного шага.",en:"I'm here. Let's start with one calm step."},sprite:Ps(),emotion:"calm",state:"speak"})}function Sk(){ar||(ar=window.setTimeout(()=>{ar=0,!(r.route!=="home"||te().currentLine?.text||r.evaRuntime?.currentPhrase?.text)&&Ag("auto",{allowQuestion:!1})&&P()},260))}function rg(){ar&&(window.clearTimeout(ar),ar=0)}function Ck(e){const t=Wn(),n=Vn(),s=e.question?p()==="ru"?"Вопрос":"Question":p()==="ru"?"Диалог":"Dialogue",a=e.line||{text:{ru:"Я здесь.",en:"I'm here."}},o=a.id||"home_eva_line";return`
      <section class="home-eva-vn" role="region" aria-label="${g(p()==="ru"?"Диалог Евы":"Eva dialogue")}" data-home-eva-mode="${g(e.question?"question":"dialogue")}" data-eva-state="${g(e.presenceState)}" data-eva-mood="${g(e.mood)}" data-eva-emotion="${g(e.emotion)}">
        <div class="home-eva-copy">
          <div class="home-eva-meta">
            <strong>${i(e.speaker)}</strong>
            <span class="pill">${i(s)}</span>
          </div>
          ${og(b(a.text||{ru:"Я здесь.",en:"I'm here."}),o)}
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
          <img class="${g(ig({line:e.line,isAutonomy:!0}))}" src="${g(e.sprite)}" alt="${g(e.speaker)}" loading="eager" decoding="async" onerror="this.src='assets/mascots/eva_normal.webp'" />
        </button>
      </section>
    `}function ag(e){return e.line?.state||r.evaRuntime?.presenceState||(e.isAutonomy?"speak":"wait_choice")}function ig(e){const t=["eva-vn-sprite"],n=ag(e);return["speak","soften","warning"].includes(n)&&t.push("is-speaking"),(["react","warning"].includes(n)||Date.now()-Number(r.evaRuntime?.lastVisualChangeAt||0)<1400)&&t.push("is-reacting"),n==="quiet"&&t.push("is-quiet"),t.join(" ")}function xk(e){const t=String(e||"").trim();return t?(t.match(/[^.!?。！？]+[.!?。！？]?/g)||[t]).map(s=>s.trim()).filter(Boolean):[]}function og(e,t=""){const n=xk(e),a=`eva-dialogue-text ${r.evaRuntime?.textRevealSkippedLineId===t?"is-skipped":""}`,o=n.length?n.map((l,c)=>`<span class="eva-line-piece" style="--i:${c}">${i(l)}</span>`).join(" "):i(e);return`<p class="${a}" data-action="eva-dialogue-skip" data-line-id="${g(t)}">${o}</p>`}function Nk(){me(),pr(),fa(),Z();const e=yy(),t=e.node,n=un()||e.bg||gr(t.background),s=e.sprite||e.spriteSrc||Es(e.spriteId||Ln(t.sprite)),a=Wn(),o=Vn(),l=Array.isArray(t.choices)?t.choices:[],c=ag(e),d=e.line?.id||t.id||"eva_dialogue";return`
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

        ${Uk()}
        ${Ok(e)}
        <article class="eva-vn-scene ${e.isAutonomy?"is-autonomous":""} is-${g(c)}" data-eva-state="${g(c)}" data-eva-mood="${g(e.mood||dn().mood)}" data-eva-emotion="${g(e.emotion||"calm")}" style="--eva-bg:${g(Id(n.file))}; --eva-bg-fallback:${g(Id("assets/bg/bg_study_hub.webp"))}">
          <div class="eva-vn-bg" aria-hidden="true"></div>
          <button class="eva-sprite-button" type="button" data-action="eva-click" aria-label="${g(b(t.speaker||{ru:"Ева",en:"Eva"}))}">
            <img class="${g(ig(e))}" src="${g(s)}" alt="${g(b(t.speaker||{ru:"Ева",en:"Eva"}))}" onerror="this.src='assets/mascots/eva_normal.webp'" />
          </button>
          ${Ak(e)}
          <div class="eva-dialogue-box">
            <div class="eva-dialogue-meta">
              <strong>${i(b(t.speaker||{ru:"Ева",en:"Eva"}))}</strong>
              <span>${e.isAutonomy?`${i(o.badge)} · `:""}${i(b(n.title||{}))}</span>
            </div>
            ${og(b(t.text||{}),d)}
            ${e.isAutonomy?Bk(a):`
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

        ${r.evaRoomShopOpen?Lk():""}
      </section>
    `}function Lk(){const e=Wn();return`
      <aside class="eva-shop-panel customization-shop-panel" role="dialog" aria-label="${g(e.shop)}">
        ${lg({closable:!0})}
      </aside>
    `}function Ak(e={}){const t=Ik(e);return t?`
      <div class="eva-room-decoration deco-${g(t.id)}" aria-label="${g(Ot(t))}">
        <img src="${g(t.asset||t.preview)}" alt="" loading="lazy" />
      </div>
    `:""}function Ik(e={}){const t=e.decoration||te().currentDecoration||r.customization?.selected?.decoration||r.customization?.selected?.frame,n=Ce(t);return!n||n.type!=="decoration"||!Bt(n.id)?null:n}function lg(e={}){const t=Hn(),n=Pk(),s=Fe().filter(a=>Bt(a.id)).length;return`
      <div class="custom-shop">
        <div class="custom-shop-hero">
          <div>
            <span class="pill">${i(t.subtitle)}</span>
            <h2>${i(t.title)}</h2>
            <p>${i(t.hint)}</p>
            <div class="custom-shop-stats">
              <span><b>${r.progress.moonFragments}</b> Moon</span>
              <span><b>${s}</b>/${Fe().length} ${i(t.ownedShort)}</span>
            </div>
          </div>
          ${e.closable?`<button class="icon-btn" type="button" data-action="eva-room-shop-close" aria-label="${g(Wn().close)}">✕</button>`:""}
        </div>
        <div class="custom-shop-tabs" role="tablist" aria-label="${g(t.categories)}">
          ${Tk().map(a=>`
            <button class="${r.shopFilters.category===a.id?"is-active":""}" type="button" data-action="shop-category" data-category="${g(a.id)}">
              ${i(b({ru:a.title_ru,en:a.title_en}))}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls">
          ${Rk().map(a=>`
            <button class="${r.shopFilters.view===a.id?"is-active":""}" type="button" data-action="shop-filter" data-filter="${g(a.id)}">
              ${i(a.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-controls custom-shop-sort">
          ${_k().map(a=>`
            <button class="${r.shopFilters.sort===a.id?"is-active":""}" type="button" data-action="shop-sort" data-sort="${g(a.id)}">
              ${i(a.title)}
            </button>
          `).join("")}
        </div>
        <div class="custom-shop-grid">
          ${n.map(Ek).join("")||`<article class="empty-state"><h3>${i(t.empty)}</h3></article>`}
        </div>
        <div class="custom-shop-history">
          ${jf({limit:6})}
        </div>
      </div>
    `}function Tk(){return r.customizationCatalog?.categories?.length?r.customizationCatalog.categories:[{id:"all",title_ru:"Все",title_en:"All"},{id:"background",title_ru:"Фоны",title_en:"Backgrounds"},{id:"outfit",title_ru:"Образы",title_en:"Outfits"},{id:"decoration",title_ru:"Декор",title_en:"Decorations"},{id:"theme",title_ru:"Темы",title_en:"Themes"},{id:"effect",title_ru:"Эффекты",title_en:"Effects"}]}function Rk(){const e=p()==="ru";return[{id:"all",title:e?"Все":"All"},{id:"available",title:e?"Доступные":"Available"},{id:"owned",title:e?"Купленные":"Owned"},{id:"new",title:e?"Новые":"New"}]}function _k(){const e=p()==="ru";return[{id:"featured",title:e?"Рекомендовано":"Featured"},{id:"price",title:e?"По цене":"By price"},{id:"rarity",title:e?"По редкости":"By rarity"}]}function Pk(){const e=r.shopFilters.category||"all",t=r.shopFilters.view||"all",n={common:1,rare:2,epic:3,legendary:4,mythic:5};let s=Fe().filter(a=>e==="all"||a.type===e);return t==="available"&&(s=s.filter(a=>xg(a)==="available")),t==="owned"&&(s=s.filter(a=>Bt(a.id))),t==="new"&&(s=s.filter(a=>!r.customization?.seen?.includes(a.id))),r.shopFilters.sort==="price"&&(s=[...s].sort((a,o)=>a.price-o.price)),r.shopFilters.sort==="rarity"&&(s=[...s].sort((a,o)=>(n[o.rarity]||0)-(n[a.rarity]||0)||a.price-o.price)),s}function Ek(e){const t=xg(e),n=Hn(),s=n.status[t]||t,a=Ry(e),o=t==="available"?`<button class="btn primary" type="button" data-action="shop-buy" data-id="${g(e.id)}">${i(n.buy)}</button>`:t==="owned"?`<button class="btn" type="button" data-action="shop-select" data-id="${g(e.id)}">${i(n.select)}</button>`:t==="selected"?`<button class="btn warning" type="button" data-action="shop-clear-item" data-id="${g(e.id)}">${i(n.remove)}</button>`:`<button class="btn" type="button" disabled>${i(n.unavailable)}</button>`;return`
      <article class="custom-shop-card type-${g(e.type)} is-${g(t)} rarity-${g(e.rarity)}" data-item-id="${g(e.id)}" data-shop-status="${g(t)}">
        <div class="custom-shop-preview">
          <img src="${g(Kk(e))}" alt="${g(Ot(e))}" loading="lazy" onerror="this.onerror=null;this.src='assets/logo.webp';this.closest('.custom-shop-card').classList.add('is-missing')" />
          <span class="rarity-badge">${i(Dk(e.rarity))}</span>
        </div>
        <div class="custom-shop-card-body">
          <div class="custom-shop-title-row">
            <strong>${i(Ot(e))}</strong>
            <span class="status-badge">${i(s)}</span>
          </div>
          ${e.stars?`<div class="custom-shop-stars" aria-label="${g(`${e.stars} stars`)}">${i("★".repeat(Math.max(1,Math.min(5,Number(e.stars)||1))))}</div>`:""}
          <p>${i(Mk(e))}</p>
          ${e.type==="outfit"&&cg(e)?`<blockquote class="custom-shop-phrase">${i(cg(e))}</blockquote>`:""}
          ${a?`<small class="custom-shop-unlock">${i(a)}</small>`:""}
          <div class="custom-shop-price">
            <span>${e.price?`${e.price} Moon`:n.free}</span>
            <small>${i(Fk(e.type))}</small>
          </div>
          ${o}
        </div>
      </article>
    `}function Hn(){return p()==="ru"?{title:"Магазин кастомизации",subtitle:"Flash Kanji Custom",hint:"Фоны, образы Евы, декор, темы и эффекты за Moon Fragments.",categories:"Категории магазина",ownedShort:"куплено",buy:"Купить",select:"Выбрать",remove:"Убрать",selected:"Выбран",unavailable:"Недоступно",free:"Бесплатно",locked:"Предмет пока недоступен.",notEnough:"Не хватает Moon Fragments.",bought:"Куплено: {item}",selectedToast:"Выбрано: {item}",empty:"Нет предметов по этому фильтру.",status:{selected:"Выбран",owned:"Куплено",available:"Доступно",locked:"Закрыто"}}:{title:"Customization Shop",subtitle:"Flash Kanji Custom",hint:"Backgrounds, Eva outfits, room decor, themes, and effects for Moon Fragments.",categories:"Shop categories",ownedShort:"owned",buy:"Buy",select:"Select",remove:"Remove",selected:"Selected",unavailable:"Unavailable",free:"Free",locked:"This item is not available yet.",notEnough:"Not enough Moon Fragments.",bought:"Bought: {item}",selectedToast:"Selected: {item}",empty:"No items match this filter.",status:{selected:"Selected",owned:"Owned",available:"Available",locked:"Locked"}}}function Ot(e){return p()==="en"?e.title_en||e.title_ru||e.id:e.title_ru||e.title_en||e.id}function Mk(e){return p()==="en"?e.description_en||e.description_ru||"":e.description_ru||e.description_en||""}function Kk(e){return e?.preview||e?.asset||"assets/logo.webp"}function cg(e){return p()==="en"?e.phrase_en||e.phrase_ru||"":e.phrase_ru||e.phrase_en||""}function Dk(e){return{common:(p()==="ru","Common"),rare:(p()==="ru","Rare"),epic:(p()==="ru","Epic"),legendary:(p()==="ru","Legendary"),mythic:(p()==="ru","Mythic")}[e]||e}function Fk(e){const t=p()==="ru";return{background:t?"Фон":"Background",outfit:t?"Образ":"Outfit",decoration:t?"Декор":"Decoration",theme:t?"Тема":"Theme",effect:t?"Эффект":"Effect"}[e]||e}function Ok(e){Wn();const t=Vn(),n=te(),s=e.bg||un(),a=pg(e.spriteId||r.progress.selectedEvaSprite),o=Ce(r.customization?.selected?.effect),l=Ce(e.decoration||n.currentDecoration),c=zk(e.mood||n.mood),d=Mp();return`
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
          ${l?`<span>${i(Ot(l))}</span>`:""}
          ${o?`<span class="eva-active-effect-chip">${i(Ot(o))}<button type="button" class="eva-active-effect-clear" data-action="shop-clear-effect" data-id="${g(o.id)}" aria-label="${g(p()==="ru"?"Убрать эффект":"Remove effect")}">✕</button></span>`:""}
        </div>
      </aside>
    `}function Bk(e){const t=Vn(),n=lo();return n?.id?`
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
    `}function Vn(){return p()==="ru"?{badge:"Ева рядом",status:"Ева держит присутствие в комнате",hint:"Она помнит паузы, выбирает тон по контексту и реагирует открытыми образами без лишнего шума.",mood:"Настроение",quiz:"Вопросы",quizStreak:"Серия",question:"Вопрос Евы"}:{badge:"Eva nearby",status:"Eva keeps presence in the room",hint:"She remembers gaps, chooses tone from context, and reacts with unlocked looks without extra noise.",mood:"Mood",quiz:"Questions",quizStreak:"Streak",question:"Eva's question"}}function zk(e){const n=p()==="ru"?{neutral:"Ровное настроение",focused:"Собрана",soft:"Мягче обычного",strict:"Строгая",tired:"Немного устала",happy:"Довольна прогрессом",serious:"Серьёзна",mystic:"Лунное настроение",cyber:"Анализирует",travel:"Вспоминает дороги",quiet:"Молчит рядом",curious:"Заинтересована",close:"Близость",proud:"Гордится тобой",worried:"Беспокоится",reserved:"Держит дистанцию"}:{neutral:"Steady mood",focused:"Focused",soft:"Softer than usual",strict:"Strict",tired:"A little tired",happy:"Pleased with progress",serious:"Serious",mystic:"Moonlit mood",cyber:"Analyzing",travel:"Thinking of old roads",quiet:"Quiet nearby",curious:"Interested",close:"Close",proud:"Proud of you",worried:"Worried",reserved:"Reserved"};return n[e]||n.neutral}function Uk(){const e=dn(),t=Wn(),n=t.moods[e.mood]||t.moods.neutral,s=[["warmth",t.warmth,e.warmth],["trust",t.trust,e.trust],["discipline",t.discipline,e.discipline],["curiosity",t.curiosity,e.curiosity]];return`
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
    `}function Wn(){return p()==="ru"?{back:"На главную",shop:"Магазин Евы",close:"Закрыть",shopHint:"Покупай комнаты и образы Евы за Moon Fragments.",buy:"Купить",select:"Выбрать",selected:"Выбран",free:"Открыто",restart:"Начать диалог заново",study:"К уроку",review:"К повтору",notEnough:"Не хватает Moon Fragments.",bought:"Фон открыт.",selectedToast:"Фон выбран.",reward:"Ева дала Moon Fragments.",roomShopTitle:"Комнаты",spriteShopTitle:"Образы Евы",spriteBought:"Образ Евы открыт.",spriteSelected:"Образ Евы выбран.",autonomyBadge:"Ева рядом",autonomyShortOn:"Ева · авто",autonomyShortOff:"Ева · тихо",autonomyOn:"Ева рядом",autonomyOff:"Ева рядом",autonomyHint:"Ева сама выбирает реплики, настроение, комнату и образ без спойлеров FIS.",autonomySettingsHint:"Самостоятельные реплики Евы в комнате, без раскрытия сюжета.",enableAutonomy:"Ева рядом",disableAutonomy:"Ева рядом",changeFrequency:"Статус Евы",frequency:"Частота",frequencies:{quiet:"тихо",normal:"нормально",active:"часто"},roomMode:"Комната",outfitMode:"Образ",roomModeButton:"Комната Евы",outfitModeButton:"Образ Евы",auto:"авто",manual:"ручной",nextAutonomyLine:"Ещё мысль.",storyDialogue:"Вернуться к диалогу.",relationship:"Отношения с Евой",warmth:"Тепло",trust:"Доверие",discipline:"Дисциплина",curiosity:"Интерес",moreTalk:"Ещё реплика",anotherTalk:"Другая тема",moods:{neutral:"Ровное настроение",close:"Близость",proud:"Гордится тобой",curious:"Заинтересована",worried:"Беспокоится",reserved:"Держит дистанцию"}}:{back:"Home",shop:"Eva Shop",close:"Close",shopHint:"Buy rooms and Eva looks with Moon Fragments.",buy:"Buy",select:"Select",selected:"Selected",free:"Unlocked",restart:"Restart dialogue",study:"Study",review:"Review",notEnough:"Not enough Moon Fragments.",bought:"Background unlocked.",selectedToast:"Background selected.",reward:"Eva gave you Moon Fragments.",roomShopTitle:"Rooms",spriteShopTitle:"Eva Looks",spriteBought:"Eva look unlocked.",spriteSelected:"Eva look selected.",autonomyBadge:"Eva nearby",autonomyShortOn:"Eva · auto",autonomyShortOff:"Eva · quiet",autonomyOn:"Eva nearby",autonomyOff:"Eva nearby",autonomyHint:"Eva chooses lines, mood, room, and look by herself without FIS spoilers.",autonomySettingsHint:"Independent Eva lines in her room, without story spoilers.",enableAutonomy:"Eva nearby",disableAutonomy:"Eva nearby",changeFrequency:"Eva status",frequency:"Frequency",frequencies:{quiet:"quiet",normal:"normal",active:"active"},roomMode:"Room",outfitMode:"Look",roomModeButton:"Eva room",outfitModeButton:"Eva look",auto:"auto",manual:"manual",nextAutonomyLine:"Another thought.",storyDialogue:"Back to dialogue.",relationship:"Relationship with Eva",warmth:"Warmth",trust:"Trust",discipline:"Discipline",curiosity:"Interest",moreTalk:"Another line",anotherTalk:"Different topic",moods:{neutral:"Steady mood",close:"Close",proud:"Proud of you",curious:"Interested",worried:"Worried",reserved:"Reserved"}}}function me(){var t,n,s,a,o,l,c,d,u,m,h,f,S;(t=r.progress).seenCards||(t.seenCards={}),(n=r.progress).seenKanji||(n.seenKanji={}),(s=r.progress).unlockedBackgrounds||(s.unlockedBackgrounds=["bg_study_hub"]),r.progress.unlockedBackgrounds.includes("bg_study_hub")||r.progress.unlockedBackgrounds.unshift("bg_study_hub"),(a=r.progress).selectedEvaRoomBackground||(a.selectedEvaRoomBackground="bg_study_hub"),(o=r.progress).unlockedEvaSprites||(o.unlockedEvaSprites=["idle","default"]),["idle","default"].forEach(C=>{r.progress.unlockedEvaSprites.includes(C)||r.progress.unlockedEvaSprites.push(C)}),(l=r.progress).selectedEvaSprite||(l.selectedEvaSprite="idle");const e=jp(yp(),r.progress.evaAutonomy||{});if((c=r.progress).evaAutonomy||(c.evaAutonomy={}),Object.keys(r.progress.evaAutonomy).forEach(C=>delete r.progress.evaAutonomy[C]),Object.assign(r.progress.evaAutonomy,e),r.evaRuntime||(r.evaRuntime=ln()),(d=r.progress).evaRoomDialogueProgress||(d.evaRoomDialogueProgress={currentNode:"intro",rewardsClaimed:{},visited:{},lineHistory:[]}),(u=r.progress.evaRoomDialogueProgress).currentNode||(u.currentNode="intro"),(m=r.progress.evaRoomDialogueProgress).rewardsClaimed||(m.rewardsClaimed={}),(h=r.progress.evaRoomDialogueProgress).visited||(h.visited={}),r.progress.evaRoomDialogueProgress.lineHistory=Array.isArray(r.progress.evaRoomDialogueProgress.lineHistory)?r.progress.evaRoomDialogueProgress.lineHistory.slice(-24):[],(f=r.progress).evaRoomQuiz||(f.evaRoomQuiz={answered:0,correct:0,wrong:0,streak:0,rewarded:{},history:[]}),(S=r.progress.evaRoomQuiz).rewarded||(S.rewarded={}),r.progress.evaRoomQuiz.history=Array.isArray(r.progress.evaRoomQuiz.history)?r.progress.evaRoomQuiz.history.slice(0,40):[],!r.progress.evaRelationship)r.progress.evaRelationship=Bl();else{const C=$p(Bl(),r.progress.evaRelationship);Object.keys(r.progress.evaRelationship).forEach(x=>delete r.progress.evaRelationship[x]),Object.assign(r.progress.evaRelationship,C)}}function dn(){return me(),r.progress.evaRelationship}function pr(){if(!r.progress||!r.cards.length)return!1;me();const e=r.progress.evaRelationship;let t=!1;const n=ce(),s=e.lastDecayDate||n,a=Math.max(0,hs(s,n));if(a>0){const N=r.progress.streak?.lastStudyDate,z=N?hs(N,n):a+1;!N||z>1?(xe({warmth:-Math.min(10,a*1.2),trust:-Math.min(14,a*1.6),discipline:-Math.min(22,a*3.4)},"study_gap",{silent:!0}),t=!0):(r.progress.streak?.current||0)>0&&(xe({discipline:.8,trust:.4},"streak_kept",{silent:!0}),t=!0),e.lastDecayDate=n}const o=pd(),l={learned:o.learned,mastered:o.mastered,reviews:gd(),lessons:Object.keys(r.progress.lessonCompletions||{}).length,streak:Math.max(r.progress.streak?.current||0,r.progress.streak?.best||0),wrong:r.progress.totalWrong||0,writing:r.progress.writingPractice?.completed||0,sentence:Object.keys(r.progress.sentencePractice?.completed||{}).length},c=e.lastKnown||{},d=N=>Math.max(0,Number(l[N]||0)-Number(c[N]||0)),u={},m=d("reviews"),h=d("learned"),f=d("mastered"),S=d("lessons"),C=d("streak"),x=d("wrong"),L=d("writing"),k=d("sentence");return m&&(u.discipline=(u.discipline||0)+Math.min(18,m*.08),u.trust=(u.trust||0)+Math.min(10,m*.04)),h&&(u.trust=(u.trust||0)+Math.min(20,h*.5),u.curiosity=(u.curiosity||0)+Math.min(16,h*.35)),f&&(u.trust=(u.trust||0)+Math.min(16,f*1.2),u.warmth=(u.warmth||0)+Math.min(8,f*.5)),S&&(u.warmth=(u.warmth||0)+Math.min(12,S*2),u.discipline=(u.discipline||0)+Math.min(10,S*1.5)),C&&(u.discipline=(u.discipline||0)+Math.min(15,C*3),u.warmth=(u.warmth||0)+Math.min(8,C)),L&&(u.curiosity=(u.curiosity||0)+Math.min(10,L*.8)),k&&(u.trust=(u.trust||0)+Math.min(10,k*.8)),x&&(u.discipline=(u.discipline||0)-Math.min(6,x*.12)),Object.keys(u).length&&(xe(u,"learning_progress",{silent:!0}),t=!0),e.lastKnown=l,dg(),t}function xe(e={},t="relationship",n={}){me();const s=r.progress.evaRelationship;return["warmth","trust","discipline","curiosity"].forEach(a=>{typeof e[a]>"u"||(s[a]=Go(de(Number(s[a]||0)+Number(e[a]||0),0,100),1))}),dg(),n.silent||(s.history.unshift({at:new Date().toISOString(),reason:t,delta:e}),s.history=s.history.slice(0,40)),s}function dg(){const e=r.progress.evaRelationship;return e.discipline<25?e.mood="worried":e.trust<30?e.mood="reserved":e.warmth>=76&&e.trust>=68?e.mood="close":(r.progress.streak?.current||0)>=7&&e.discipline>=58?e.mood="proud":e.curiosity>=68?e.mood="curious":e.mood="neutral",e.mood}function Ps(){const e=r.customization?.selected?.outfit||r.progress?.shop?.equipped?.outfit||null,n=(Ce(e)||Bn(e)||Nn(e))?.spriteId||r.progress?.selectedEvaSprite||"idle";return r.evaSprites?.[n]&&ug(n)?n:"idle"}function Jk(e){const t=String(e||""),n=Nn(t),s=n?.spriteId||n?.legacySpriteId||"";return!t||!s?"":t===s||t.startsWith(`${s}_`)?s:""}function Gk(e){const t=String(e||"");if(!t)return t;const n=Ps(),s=Jk(t);return s&&n&&s!==n?n:t}function ug(e){const t=String(e||"");if(!t)return!1;if(lc(t))return!0;const n=Nn(t);return n?!!(n.defaultOwned||Bt(n.id)):!1}function qk(e){const t=String(e||"");return new Set(["normal","neutral","idle","default","welcome","happy","soft_smile","gentle_smile","sad","angry","shy","think","thinking","focus","observe","observation","explain","teach","ready","reading","serious","strict","determined","tired","surprised","cold","proud","approve","confirm","achievement","reward","review","correct","levelup","writing","calm","tea","speaking"]).has(t)}function Ln(e,t=null){const n=e&&e!=="relationship"?String(e):null,s=Ps(),a=Gk(n),o=qk(a),l=a&&!o?a:s,c=r.evaRuntime?.mood||dn().mood,d=t||(o?a:null)||r.evaRuntime?.emotion||{close:"shy",proud:"approve",curious:"thinking",worried:"sad",reserved:"idle",neutral:"idle"}[c]||"idle",u=Qk(d),m=[...new Set([l,s].filter(Boolean))];return[...m.flatMap(S=>Hk(S,u)),...m,...u,"idle","default"].filter(Boolean).find(S=>r.evaSprites?.[S]&&(lc(S)||!l||ug(l)))||"idle"}function Hk(e,t=[]){const n=String(e||"");if(!n)return[];const s=t.map(o=>`${n}_${o}`).filter(o=>r.evaSprites?.[o]),a=Nn(n);return!a||a.defaultOwned||s.length<=1?s:Vk(s)}function Vk(e=[]){const t=[...new Set(e.filter(Boolean))];if(t.length<=1)return t;const n=pl%t.length;return[...t.slice(n),...t.slice(0,n)]}function Wk(){const e=Ps(),t=Nn(e);return!t||t.defaultOwned?!1:Object.keys(r.evaSprites||{}).some(n=>n.startsWith(`${e}_`))}function Xk(){ul&&window.clearInterval(ul),ul=window.setInterval(()=>{const e=Math.floor(Date.now()/6e4);e!==pl&&(pl=e,!(document.hidden||!Wk())&&(r.route==="home"||r.route==="eva-room")&&P())},3e4)}function Qk(e){const t=String(e).toLowerCase(),n={normal:["soft_smile","neutral","observe","idle"],neutral:["neutral","idle","soft_smile"],idle:["neutral","idle"],welcome:["soft_smile","observe","neutral","idle"],happy:["happy","soft_smile","gentle_smile","encourage","approve","proud"],soft_smile:["soft_smile","gentle_smile","happy","shy","approve","neutral"],approve:["approve","confirm","correct","confident","ready","soft_smile"],correct:["correct","confirm","approve","confident","ready","soft_smile"],proud:["proud","confident","approve","determined","soft_smile"],achievement:["achievement","legendary","mythic","reward","proud","approve","ready"],levelup:["levelup","legendary","mythic","determined","proud","ready"],reward:["reward","blessing","soft_smile","happy","approve"],review:["review","reading","ready","explain","think","neutral"],explain:["explain","teach","review","think","reading"],think:["think","thinking","analyze","observe","reading","explain","serious"],thinking:["think","thinking","analyze","observe","reading","explain","serious"],observe:["observe","serious","think","neutral"],ready:["ready","determined","walk","neutral"],serious:["serious","strict","determined","neutral"],strict:["strict","command","angry","serious"],angry:["angry","strict","command","serious"],sad:["sad","tired","cold","serious","neutral"],tired:["tired","cold","neutral"],shy:["shy","soft_smile","gentle_smile","happy"],surprised:["surprised","think","observe"],writing:["writing","teach","explain","ready","think"],focus:["think","observe","ready","serious"],calm:["neutral","idle","soft_smile"]},s=Yk(t);return[...new Set([...n[t]||[],t,s,"neutral","idle"].filter(Boolean))]}function Yk(e){return{neutral:"idle",idle:"idle",normal:"idle",welcome:"happy",happy:"happy",soft_smile:"shy",thinking:"think",serious:"think",strict:"angry",sad:"sad",shy:"shy",surprised:"think",approve:"approve",explain:"review",ready:"review",tired:"idle",observe:"think",special:"levelup",proud:"proud",calm:"idle"}[e]||"idle"}function te(){return me(),r.progress.evaAutonomy}function eo(){const e=te();return e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",!0}function to(){const e=Fe().filter(t=>t.type==="background").map(t=>({id:t.id,title:{ru:t.title_ru,en:t.title_en},file:t.asset||t.preview,price:t.price,defaultUnlocked:t.defaultOwned}));return e.length?e:r.evaBackgrounds?.length?r.evaBackgrounds:[{id:"bg_study_hub",title:{ru:"Учебная комната",en:"Study Hub"},file:"assets/bg/bg_study_hub.webp",price:0,defaultUnlocked:!0}]}function gr(e){return to().find(t=>t.id===e)||to()[0]}function un(){me();const e=lv({catalogItems:Fe(),owned:r.customization?.owned||r.progress.unlockedBackgrounds||[],customizationSelected:r.customization?.selected?.background,progressEquipped:r.progress?.shop?.equipped?.background,progressSelected:r.progress.selectedEvaRoomBackground});return gr(e)||gr("bg_study_hub")}function Zk(e){const t=gr(e);return t?t.defaultUnlocked||t.price===0||r.progress.unlockedBackgrounds.includes(t.id):!1}function ey(){const e=Fe().filter(n=>n.type==="outfit").map(n=>({id:n.spriteId||n.id,shopId:n.id,title:{ru:n.title_ru,en:n.title_en},price:n.price,defaultUnlocked:n.defaultOwned})),t=[{id:"idle",title:{ru:"Ева: спокойная",en:"Eva: Calm"},price:0,defaultUnlocked:!0},{id:"default",title:{ru:"Ева: классика",en:"Eva: Classic"},price:0,defaultUnlocked:!0},{id:"think",title:{ru:"Ева: размышление",en:"Eva: Thinking"},price:25},{id:"happy",title:{ru:"Ева: тепло",en:"Eva: Warm"},price:35},{id:"approve",title:{ru:"Ева: наставник",en:"Eva: Mentor"},price:35},{id:"review",title:{ru:"Ева: повторение",en:"Eva: Review"},price:40},{id:"proud",title:{ru:"Ева: гордость",en:"Eva: Proud"},price:45},{id:"shy",title:{ru:"Ева: ближе",en:"Eva: Closer"},price:55},{id:"sad",title:{ru:"Ева: тревога",en:"Eva: Concerned"},price:30},{id:"reward",title:{ru:"Ева: награда",en:"Eva: Reward"},price:50},{id:"achievement",title:{ru:"Ева: достижение",en:"Eva: Achievement"},price:60},{id:"levelup",title:{ru:"Ева: уровень",en:"Eva: Level Up"},price:65}].filter(n=>r.evaSprites?.[n.id]&&!e.some(s=>s.id===n.id));return[...e,...t]}function pg(e){return ey().find(t=>t.id===e)}function lc(e){if(!e)return!1;const t=pg(e);return!!(t?.defaultUnlocked||t?.price===0||r.progress.unlockedEvaSprites?.includes(e)||r.progress.shop?.owned?.includes(`eva_sprite:${e}`))}function no(e){me();const t=r.evaRuntime?.mood||An(Oe()),n={close:["bg_cafe","bg_park","bg_eva_room","bg_study_hub"],proud:["bg_practice_room","bg_classroom","bg_moon_room","bg_study_hub"],curious:["bg_library","bg_cyber_room","bg_shrine","bg_study_hub"],worried:["bg_study_hub","bg_evening_street","bg_winter_city"],reserved:["bg_library","bg_silent_road","bg_study_hub"],focused:["bg_classroom","bg_practice_room","bg_study_hub"],soft:["bg_cafe","bg_park","bg_study_hub"],strict:["bg_classroom","bg_silent_road","bg_study_hub"],tired:["bg_cafe","bg_library","bg_study_hub"],happy:["bg_park","bg_cafe","bg_moon_room","bg_study_hub"],serious:["bg_silent_road","bg_library","bg_study_hub"],mystic:["bg_moon_room","bg_shrine","bg_study_hub"],cyber:["bg_cyber_room","bg_library","bg_study_hub"],travel:["bg_silent_road","bg_evening_street","bg_school_street","bg_study_hub"],quiet:["bg_library","bg_study_hub"],neutral:["bg_study_hub","bg_classroom","bg_library","bg_silent_road"]},s=[...e?.preferredBackgrounds||[],...n[t]||n.neutral],a=to().filter(l=>Zk(l.id));return s.map(l=>a.find(c=>c.id===l)).find(Boolean)||it(a)||un()}function so(e){me();const t=r.evaRuntime?.mood||An(Oe()),n=Ps(),s={close:["casual_fox","librarian_eva","shy","idle","approve"],proud:["academy_instructor","moon_priestess","study_session","approve","proud","review"],curious:["librarian_eva","cyber_eva","think","review","idle"],worried:["winter_traveler","fis_mentor","sad","idle","think"],reserved:["silent_road","fis_mentor","idle","default"],focused:["study_session","academy_instructor","review","approve","idle"],soft:["librarian_eva","casual_fox","shy","approve","idle"],strict:["academy_instructor","fis_mentor","angry","think","idle"],tired:["winter_traveler","idle","default"],happy:["happy","proud","approve","casual_fox"],serious:["fis_mentor","silent_road","think","idle"],mystic:["moon_priestess","shrine_maiden","achievement","reward"],cyber:["cyber_eva","think","review"],travel:["silent_road","winter_traveler","fis_mentor"],quiet:["fis_mentor","idle","default"],neutral:["fis_mentor","study_session","librarian_eva","idle","think","review","default"]};return[n,e?.sprite,...s[t]||s.neutral].filter(Boolean).find(o=>lc(o)&&r.evaSprites?.[o])||r.progress.selectedEvaSprite||"idle"}function ty(e){return e==="generated_line"?ny():r.evaRoomDialogues.find(t=>t.id===e)||r.evaRoomDialogues[0]||{id:"intro",background:"bg_study_hub",sprite:"relationship",speaker:{ru:"Ева",en:"Eva"},text:{ru:"С возвращением.",en:"Welcome back."},choices:[]}}function ny(){me();const e=Wn(),t=r.progress.evaRoomDialogueProgress.generatedLine||jg("adaptive");return r.progress.evaRoomDialogueProgress.generatedLine=t,{id:"generated_line",background:t.background||un().id||"bg_study_hub",sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[{text:{ru:e.moreTalk,en:e.moreTalk},randomLine:t.category||"adaptive",relationshipDelta:{warmth:.6,curiosity:.4}},{text:{ru:e.anotherTalk,en:e.anotherTalk},next:"intro",relationshipDelta:{warmth:.2}},{text:{ru:e.study,en:e.study},next:"intro",route:"learn",relationshipDelta:{discipline:1.2,trust:.5}}]}}function ro(){return Array.isArray(r.evaRoomLines)?r.evaRoomLines:[]}function sy(e="auto"){const t=r.evaPresence?.categoryMap?.[e];return Array.isArray(t)?t:[]}function gg(e){return typeof e>"u"||e===null?[]:Array.isArray(e)?e.map(String):[String(e)]}function ry(e,t=Oe()){const n=e?.conditions||{},s=(o,l)=>{const c=gg(l);return!c.length||c.includes(String(o))},a=(o,l)=>{const c=gg(l);return!c.length||c.some(d=>String(o||"").includes(d)||d===String(o))};return!(!s(t.route,n.route)||!s(t.timeOfDay,n.timeOfDay)||!a(t.activeSkin,n.activeSkin)||!a(t.activeBackground,n.activeBackground)||typeof n.minGapDays<"u"&&Number(t.daysSinceReturn||0)<Number(n.minGapDays)||typeof n.maxGapDays<"u"&&Number(t.daysSinceReturn||0)>Number(n.maxGapDays)||typeof n.minDueReviews<"u"&&Number(t.dueReviews||0)<Number(n.minDueReviews)||typeof n.maxDueReviews<"u"&&Number(t.dueReviews||0)>Number(n.maxDueReviews)||typeof n.minStreak<"u"&&Number(t.streak||0)<Number(n.minStreak)||typeof n.maxStreak<"u"&&Number(t.streak||0)>Number(n.maxStreak)||typeof n.minTalkOverStudy<"u"&&Number(t.timesUserChoseTalkOverStudy||0)<Number(n.minTalkOverStudy))}function ay(e="auto",t=Oe()){return null}function ao(e,t="auto",n=Oe()){if(!r.evaRuntime||!e?.id)return;r.evaRuntime.memory=Ls(on(),r.evaRuntime.memory||{});const s=r.evaRuntime.memory;s.recentLineIds=[e.id,...(s.recentLineIds||[]).filter(o=>o!==e.id)].slice(0,30);const a=e.category||t;s.recentTopics=[a,...(s.recentTopics||[]).filter(o=>o!==a)].slice(0,20),s.lastRoute=n.route||r.route,s.lastInteractionDate=ce(),s.lastKnownMood=r.evaRuntime.mood||dn().mood,(["warning","answer_wrong","idle_timeout"].includes(t)||String(e.category||"").includes("warning"))&&(s.lastWarningAt=new Date().toISOString()),(["answer_correct","lesson_complete","level_up","streak_up"].includes(t)||String(e.category||"").includes("reward"))&&(s.lastPraiseAt=new Date().toISOString())}function mg(e){if(!r.evaRuntime)return;r.evaRuntime.memory=Ls(on(),r.evaRuntime.memory||{});const t=r.evaRuntime.memory;t.lastRoute=r.route,["timer","idle_timeout"].includes(e.type)||(t.lastInteractionDate=ce()),e.type==="answer_wrong"&&(t.recentProblemCluster=e.payload?.cardId||"reading"),e.type==="room_opened"&&(t.preferredEvaRoomBackground=r.progress?.selectedEvaRoomBackground||t.preferredEvaRoomBackground)}function iy(){return{quiet:12e4,normal:vs(45e3,12e4),active:45e3}}function oy(){dl&&window.clearInterval(dl),dl=window.setInterval(ly,5e3)}function mr(){const e=te(),t=iy()[e.frequency]||vs(45e3,12e4);e.nextSpeakAt=Date.now()+t}function ly(){if(document.hidden||!r.progress||!r.evaRuntime)return!1;const e=Oe(),t=r.evaRuntime,n=te(),s=Date.now();let a=!1;if(e.idleMs>9e4&&(!t.lastEvent||t.lastEvent.type!=="idle_timeout")&&s-Number(t.lastPhraseAt||0)>6e4)return ke("idle_timeout",{idleMs:e.idleMs}),!0;if(s-Number(t.lastEmotionChangeAt||0)>=Number(t.cooldowns?.emotion||18e3)){const o=An(e),l=io(e,o);(o!==t.mood||l!==t.emotion)&&(t.mood=o,t.emotion=l,n.mood=o,n.emotion=l,t.lastEmotionChangeAt=s,t.cooldowns.emotion=vs(15e3,3e4),a=!0)}return r.route==="eva-room"&&s>=Number(n.nextSpeakAt||0)&&(Math.random()<.14?(t.mood="quiet",t.emotion="observe",t.presenceState="quiet",n.mood="quiet",n.emotion="observe",mr(),a=!0):ca("timer",{context:e})&&(a=!0)),a&&(As(),r.route==="eva-room"&&(T(),P())),a}function Oe(e={}){const t=r.progress?_n():{},n=r.evaRuntime||ln(),s=Ls(on(),n.memory||{}),a=new Date().getHours();return Jl(),{route:r.route,hour:a,timeOfDay:a<5?"late_night":a<11?"morning":a<18?"day":a<23?"evening":"night",correctToday:Number(t.reviews||0)-Number(t.mistakes||0),mistakesToday:Number(t.mistakes||0),reviewsToday:Number(t.reviews||0),learnedToday:Number(t.learned||0),streak:Number(r.progress?.streak?.current||0),level:Number(r.progress?.level||1),moonFragments:Number(r.progress?.moonFragments||0),ownedSkins:n.ownedSkins||[],ownedBackgrounds:n.ownedBackgrounds||[],ownedEffects:n.ownedEffects||[],ownedDecorations:n.ownedDecorations||[],activeSkin:n.activeSkin||r.progress?.selectedEvaSprite||"idle",activeBackground:n.activeBackground||r.progress?.selectedEvaRoomBackground||"bg_study_hub",memory:s,daysSinceReturn:Number(s.daysSinceReturn||0),recentTopics:s.recentTopics||[],recentLineIds:s.recentLineIds||[],timesUserChoseTalkOverStudy:Number(s.timesUserChoseTalkOverStudy||0),timesUserReturnedAfterGap:Number(s.timesUserReturnedAfterGap||0),idleMs:Date.now()-Number(n.lastPlayerActionAt||Date.now()),sessionMs:Date.now()-hl,lastEvent:n.lastEvent,dueReviews:r.progress?Xe():0,shopOpen:!!r.evaRoomShopOpen,...e}}function An(e=Oe()){const t=e.lastEvent?.type;return t==="level_up"||t==="lesson_complete"||t==="streak_up"?"happy":t==="item_bought"&&String(e.lastEvent?.payload?.itemId||"").includes("moon")?"mystic":e.shopOpen||t==="shop_opened"||t==="item_bought"?"curious":e.route==="learn"||e.route==="review"||e.dueReviews>0?"focused":e.mistakesToday>=4?e.correctToday>e.mistakesToday?"soft":"strict":e.hour>=23||e.hour<5?e.ownedEffects?.includes("effect_moon_particles")?"mystic":"quiet":e.sessionMs>35*60*1e3?"tired":e.activeSkin==="cyber_eva"||e.ownedSkins?.includes("cyber_eva")?"cyber":e.activeSkin==="silent_road"||e.ownedSkins?.includes("silent_road")?"travel":e.route==="eva-room"&&e.streak>=7?"soft":"neutral"}function io(e=Oe(),t=An(e),n=e.lastEvent?.type||"auto"){if(n==="answer_correct")return it(["approve","happy","soft_smile"]);if(n==="answer_wrong")return it(["thinking","strict","serious"]);if(n==="lesson_complete")return"approve";if(n==="level_up")return"special";if(n==="item_bought"||n==="shop_opened")return"observe";if(n==="user_clicked_eva")return it(["curious","shy","observe"]);if(n==="idle_timeout")return"observe";const s={neutral:["idle","observe"],focused:["ready","explain","thinking"],soft:["soft_smile","approve"],strict:["strict","serious"],tired:["tired","idle"],happy:["happy","approve"],serious:["serious","thinking"],mystic:["special","observe"],cyber:["observe","thinking"],travel:["ready","observe"],quiet:["observe","idle"],curious:["thinking","surprised","observe"]};return it(s[t]||s.neutral)}function ca(e="auto",t={}){if(!r.progress||!eo()||!t.force&&r.route!=="eva-room")return!1;const n=te(),s=Date.now();if(!t.force&&n.currentLine?.text&&n.nextSpeakAt&&s<Number(n.nextSpeakAt))return!1;const a=t.context||Oe({lastEvent:{type:e,payload:t.eventPayload||{}}}),o=An(a),l=fg(e)||cc(e);if(!l)return!1;r.evaRuntime||(r.evaRuntime=ln()),r.evaRuntime.mood=o;const c=l.emotion||io(a,o,e),d=no(l),u=Ln(so(l),c),m=dc(l),h=uc(l),f=kg(a,l);return n.currentLine={id:l.id,category:l.category||"mood",text:l.text,sprite:u,background:d.id,decoration:m,effect:h,emotion:c,state:l.state||"speak",at:new Date().toISOString(),reason:e},n.currentQuestion=f,n.currentDecoration=m,n.currentEffect=h,n.mood=o,n.emotion=c,n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=u,n.recentLineIds=[l.id,...(n.recentLineIds||[]).filter(S=>S!==l.id)].slice(0,32),r.evaRuntime||(r.evaRuntime=ln()),Object.assign(r.evaRuntime,{mood:o,emotion:c,presenceState:l.state||"speak",currentPhrase:n.currentLine,pendingQuestion:f,currentSkin:u,currentBackground:d.id,currentDecoration:m,currentEffect:h,activeSkin:u,activeBackground:d.id,lastPhraseAt:s,lastEmotionChangeAt:s,lastQuestionAt:f?s:Number(r.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:s,textRevealSkippedLineId:null,cooldowns:{...r.evaRuntime.cooldowns,emotion:vs(15e3,3e4),phrase:vs(45e3,12e4),question:vs(3*6e4,7*6e4),visual:vs(10*6e4,15*6e4)}}),ao(l,e,a),pc(u,d.file),mr(),xe(l.relationshipDelta||{warmth:.1},`eva_autonomy:${l.id}`,{silent:!0}),As(),kn(),!0}function fg(e){const t=ay(e,Oe({lastEvent:{type:e}}));if(t)return t;const s={answer_correct:[{ru:"Верно.",en:"Correct."},{ru:"Хорошо.",en:"Good."},{ru:"Да. Именно так.",en:"Yes. Exactly."},{ru:"Ты начинаешь видеть структуру.",en:"You are starting to see the structure."},{ru:"Неплохо. Продолжай.",en:"Not bad. Continue."}],answer_wrong:[{ru:"Не совсем.",en:"Not quite."},{ru:"Посмотри ещё раз.",en:"Look again."},{ru:"Не угадывай. Разбери.",en:"Do not guess. Break it down."},{ru:"Запомни не ответ, а причину.",en:"Remember the reason, not just the answer."},{ru:"Это место стоит повторить.",en:"This part is worth repeating."}],user_clicked_eva:[{ru:"Да?",en:"Yes?"},{ru:"Что-то нужно?",en:"Need something?"},{ru:"Я слушаю.",en:"I'm listening."},{ru:"Не отвлекайся слишком часто.",en:"Don't distract yourself too often."},{ru:"Если нужен совет — спроси.",en:"If you need advice, ask."}],idle_timeout:[{ru:"Ты всё ещё здесь?",en:"Still here?"},{ru:"Сделаем короткий шаг?",en:"One short step?"},{ru:"Я подожду.",en:"I'll wait."},{ru:"Не исчезай надолго.",en:"Don't vanish for too long."}],manual:[{ru:"Один шаг всё ещё шаг.",en:"One step is still a step."},{ru:"Я рядом. Продолжай.",en:"I'm nearby. Continue."},{ru:"Кандзи не убегут. Но лучше не заставлять их ждать.",en:"The kanji won't run. Better not keep them waiting."},{ru:"Сначала форма. Потом смысл.",en:"Shape first. Meaning after."}],lesson_complete:[{ru:"Урок закрыт. След оставлен.",en:"Lesson complete. A mark is left."},{ru:"Хорошая работа. Теперь закрепи.",en:"Good work. Now reinforce it."}],level_up:[{ru:"Уровень выше. Дорога стала длиннее, не легче.",en:"Level up. The road is longer, not easier."},{ru:"Ты стал крепче. Это заметно.",en:"You got steadier. It shows."}],item_bought:[{ru:"Новая вещь. Посмотрим, приживётся ли.",en:"A new item. We'll see if it settles in."},{ru:"Комната меняется. Ты тоже.",en:"The room changes. So do you."}],room_opened:[{ru:"Я здесь.",en:"I'm here."},{ru:"Ты снова здесь. Это говорит больше, чем обещание.",en:"You're here again. That says more than a promise."},{ru:"Продолжай. Я посмотрю.",en:"Continue. I'll watch."}]}[e]||[],a=new Set(te().recentLineIds||[]),o=s.filter(c=>!a.has(`${e}_${Je(`${c.ru||c.en}`)}`)),l=it(o.length?o:s);return l?{id:`${e}_${Je(`${l.ru||l.en}`)}`,category:e,text:l,relationshipDelta:{}}:null}function hg(){const e=te(),t=e.currentLine?.id;t&&(e.recentLineIds=[t,...(e.recentLineIds||[]).filter(n=>n!==t)].slice(0,32))}function cy(e="auto"){const t=dn(),n=new Date().getHours(),s=Xe(),a=_n(),o=[];return o.push(...sy(e)),(e==="return"||!t.lastInteractionDate&&r.progress.appOpens>1)&&o.push("fis_return","return"),e==="room_opened"&&o.push("fis_room","fis_observation","room"),(e==="shop_opened"||e==="item_bought"||e==="item_equipped")&&o.push("fis_room","fis_reward","reward"),e==="answer_correct"&&o.push("fis_focus","fis_short","study"),e==="answer_wrong"&&o.push("fis_guard","fis_focus","mood"),(e==="user_clicked_eva"||e==="eva_click")&&o.push("fis_observation","fis_short","mood"),e==="idle_timeout"&&o.push("fis_return","fis_short","return"),e==="user_answered_eva_question"&&o.push("fis_focus","fis_observation"),e==="lesson_start"&&o.push("fis_study","study","fis_focus"),(e==="lesson_complete"||e==="level_up"||e==="streak_up")&&o.push("fis_reward","reward","fis_streak"),(e==="writing_complete"||e==="sentence_complete"||e==="advanced_mode")&&o.push("fis_observation","fis_focus"),(n>=23||n<5)&&o.push("fis_night","night"),s>=8&&o.push("fis_review","review"),(a.reviews||0)===0&&o.push("fis_study","study"),(r.progress.streak?.current||0)>=3&&o.push("fis_streak","streak"),(r.progress.rewardHistory?.length||r.rewardModal)&&o.push("fis_reward","reward"),t.mood==="curious"&&o.push("fis_observation","fis_focus","fis_room","hint","room"),(t.mood==="worried"||t.mood==="reserved")&&o.push("fis_guard","fis_return","mood","return"),o.push("fis_observation","fis_road","fis_guard","fis_focus","fis_short","mood","study","short"),[...new Set(o)]}function cc(e="auto"){me(),pr();const t=dn(),n=Oe({lastEvent:{type:e}}),s=te().currentLine?.id,a=new Set([s,...te().recentLineIds||[],...r.evaRuntime?.memory?.recentLineIds||[]].filter(Boolean)),o=Array.isArray(r.evaAutonomyLines)?r.evaAutonomyLines:[],l=cy(e),c=(u,m=!1)=>o.filter(h=>{if(!(h.category===u||(h.tags||[]).includes(u))||!m&&a.has(h.id)||!Sg(h,t)||!ry(h,n))return!1;const S=Array.isArray(h.moods)?h.moods:[];return!S.length||S.includes(t.mood)});for(const u of l){const m=c(u);if(m.length)return it(m)}for(const u of l){const m=c(u,!0);if(m.length)return it(m)}const d=o.filter(u=>!a.has(u.id));return it(d.length?d:o)}function ke(e,t={},n={}){if(!e)return;fa(),n.skipAchievements||Z({silent:!0});const s={type:wg(e),payload:t||{},at:Date.now()};vg(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}Object.assign(window,{dispatchEvaEvent:ke});function vg(e={}){if(!e.type||!r.progress)return;me(),r.evaRuntime||(r.evaRuntime=ln());const t={type:wg(e.type),payload:e.payload||{},at:e.at||Date.now()};r.evaRuntime.lastEvent=t,r.evaRuntime.eventHistory=[t,...r.evaRuntime.eventHistory||[]].slice(0,80),r.evaRuntime.recentEvents=[t,...r.evaRuntime.recentEvents||[]].slice(0,80),mg(t),["timer","idle_timeout"].includes(t.type)||(r.evaRuntime.lastPlayerActionAt=Date.now());const n=dy(t.type,t.payload);Object.keys(n).length&&xe(n,`eva_event:${t.type}`,{silent:!0});const s=te();hg(),s.nextSpeakAt=0;const a=ca(t.type,{force:!0,eventPayload:t.payload});As(),T(),a&&r.route==="eva-room"&&P()}function wg(e){const t=String(e||"");return t==="eva_click"?"user_clicked_eva":t}function dy(e,t={}){const s={...{room_opened:{warmth:.2,curiosity:.2},shop_opened:{curiosity:.4},item_bought:{warmth:.5,curiosity:.8},item_equipped:{curiosity:.3},eva_click:{warmth:.35,curiosity:.2},user_clicked_eva:{warmth:.35,curiosity:.2},answer_correct:{trust:.35,discipline:.2},answer_wrong:{discipline:-.45,trust:-.15,curiosity:.15},lesson_start:{discipline:.25},lesson_complete:{warmth:1.1,trust:1.2,discipline:1.1},level_up:{warmth:1,curiosity:.8},streak_up:{discipline:.8,trust:.4},writing_complete:{curiosity:.5,discipline:.3},sentence_complete:{trust:.45,curiosity:.3},advanced_mode:{curiosity:.5,discipline:.4}}[e]||{}};return e==="answer_wrong"&&t.comboLost&&(s.discipline=(s.discipline||0)-.25),s}function dc(e){const t=r.evaRuntime?.mood||An(Oe()),n={close:["deco_tea_table","deco_lantern","deco_moon_frame"],proud:["deco_kanji_board","deco_bookshelf","deco_gold_accent"],curious:["deco_bookshelf","deco_kanji_board","deco_tea_table"],worried:["deco_lantern","deco_moon_frame"],reserved:["deco_lantern","deco_bookshelf"],focused:["deco_kanji_board","deco_bookshelf"],soft:["deco_tea_table","deco_lantern"],strict:["deco_kanji_board","deco_scroll"],tired:["deco_tea_table","deco_lantern"],happy:["deco_golden_accent","deco_moon_frame"],serious:["deco_scroll","deco_lantern"],mystic:["deco_moon_frame","deco_lantern"],cyber:["deco_kanji_board","deco_bookshelf"],travel:["deco_scroll","deco_lantern"],quiet:["deco_lantern","deco_bookshelf"],neutral:["deco_bookshelf","deco_tea_table","deco_lantern"]},s=[...e?.preferredDecorations||[],...n[t]||n.neutral];return bg("decoration",s)}function uc(e){const t=r.evaRuntime?.mood||An(Oe()),n={close:["effect_golden_glow","effect_sakura_particles"],proud:["effect_golden_glow","effect_moon_particles"],curious:["effect_cyber_hud","effect_sakura_particles"],worried:["effect_snow_particles","effect_dust_particles"],reserved:["effect_dust_particles","effect_snow_particles"],focused:["effect_lesson_shine","effect_golden_glow"],soft:["effect_sakura_particles","effect_golden_glow"],strict:["effect_level_frame","effect_dust_particles"],tired:["effect_snow_particles","effect_dust_particles"],happy:["effect_golden_glow","effect_moon_particles"],serious:["effect_dust_particles","effect_level_frame"],mystic:["effect_moon_particles","effect_golden_glow"],cyber:["effect_cyber_hud","effect_lesson_shine"],travel:["effect_dust_particles","effect_snow_particles"],quiet:["effect_moon_particles","effect_snow_particles"],neutral:["effect_golden_glow","effect_moon_particles"]},s=[...e?.preferredEffects||[],...n[t]||n.neutral];return bg("effect",s)||"none"}function bg(e,t=[]){const n=Fe().filter(a=>a.type===e&&Bt(a.id));return(t.map(a=>n.find(o=>o.id===a)).find(Boolean)||it(n))?.id||null}function kg(e=Oe(),t=null){const n=te();if(n.currentQuestion?.id)return n.currentQuestion;if(r.evaRuntime?.pendingQuestion?.id)return n.currentQuestion=r.evaRuntime.pendingQuestion,n.currentQuestion;const s=e.lastEvent?.type||"auto",a=["user_clicked_eva","room_opened","manual"].includes(s),o=Date.now(),l=Number(r.evaRuntime?.lastQuestionAt||r.evaRuntime?.lastQuestion?.at||0),c=Number(r.evaRuntime?.cooldowns?.question||vs(3*6e4,7*6e4));if(!a&&o-l<c||!a&&Math.random()>.34)return null;const d=new Set(r.evaRuntime?.questionHistory?.slice(0,6).map(h=>h.id)),u=yg(s).filter(h=>!d.has(h.id)),m=it(u.length?u:yg(s));return m?{...m,at:new Date().toISOString()}:null}function yg(e="auto"){const t=xb();if(t.length<2)return[];const n=new Set((r.evaRuntime?.questionHistory||[]).slice(0,10).map(o=>o.cardId).filter(Boolean)),s=`${ce()}:${e}:${r.progress?.totalCorrect||0}:${r.progress?.totalWrong||0}`;return[...t].sort((o,l)=>{const c=n.has(String(o.id))?1:0,d=n.has(String(l.id))?1:0;return c-d||Je(`${s}:${o.id}`)-Je(`${s}:${l.id}`)}).slice(0,18).map(o=>uy(o,t,e)).filter(Boolean)}function uy(e,t,n="auto"){const s=Qe(e,"ru"),a=Qe(e,"en");if(!s||!a)return null;const o=py(e,t);if(!o.length)return null;const l=String(e.jlpt||"").toUpperCase(),c=l||(p()==="ru"?"твоих карточек":"your cards"),d=$g(e,e,!0),u=[d,...o.map(m=>$g(m,e,!1))].sort((m,h)=>Je(`${n}:${e.id}:${m.id}`)-Je(`${n}:${e.id}:${h.id}`));return{id:`kanji_meaning_${e.id}_${Je(`${s}:${a}`)}`,kind:"kanji_meaning",cardId:String(e.id),kanji:e.kanji,jlpt:l,answerId:d.id,answerText:{ru:s,en:a},text:{ru:`Что значит кандзи ${e.kanji} из ${c}?`,en:`What does the ${c} kanji ${e.kanji} mean?`},options:u,at:new Date().toISOString()}}function py(e,t){const n=oo(Qe(e,"ru")),s=oo(Qe(e,"en")),a=String(e.jlpt||"").toUpperCase(),l=[...t.filter(c=>{if(!c?.id||String(c.id)===String(e.id)||c.kanji===e.kanji)return!1;const d=oo(Qe(c,"ru")),u=oo(Qe(c,"en"));return!(!d||!u||d===n||u===s)})].sort((c,d)=>{const u=String(c.jlpt||"").toUpperCase()===a?0:1,m=String(d.jlpt||"").toUpperCase()===a?0:1;return u-m||Je(`${e.id}:${c.id}`)-Je(`${e.id}:${d.id}`)});return l.slice(0,Math.min(3,l.length))}function $g(e,t,n){const s=Qe(e,"ru"),a=Qe(e,"en"),o=Qe(t,"ru"),l=Qe(t,"en");return{id:`meaning_${Je(`${t.id}:${e.id}:${s}:${a}`)}`,cardId:String(e.id),text:{ru:s,en:a},correct:n,delta:n?{trust:.7,discipline:.35,curiosity:.2}:{discipline:-.35,curiosity:.15},reply:n?{ru:`Верно. ${t.kanji}: ${o}.`,en:`Correct. ${t.kanji}: ${l}.`}:{ru:`Не совсем. ${t.kanji}: ${o}.`,en:`Not quite. ${t.kanji}: ${l}.`}}}function oo(e){return String(e||"").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US").replace(/[.,;:!?\s]+/g," ").trim()}function gy(e){me();const t=lo();t?.id&&my(t.id,e.dataset.option)}function my(e,t){me();const n=te(),s=lo();if(!s?.id||s.id!==e)return;const a=s.options?.find(h=>h.id===t);if(!a)return;const l=s.options?.some(h=>h.correct||h.id===s.answerId)?!!(a.correct||a.id===s.answerId):null;r.evaRuntime||(r.evaRuntime=ln()),r.evaRuntime.pendingQuestion=null,n.currentQuestion=null,xe(a.delta||(l===!1?{discipline:-.2}:{warmth:.2}),`eva_question:${s.id}`),s.kind==="kanji_meaning"&&hy(s,a,l);const c={id:s.id,kind:s.kind||"dialogue",cardId:s.cardId||null,kanji:s.kanji||"",option:a.id,correct:l,at:new Date().toISOString()};r.evaRuntime.lastQuestion={...c,at:Date.now()},r.evaRuntime.lastQuestionAt=Date.now(),r.evaRuntime.pendingQuestion=null,r.evaRuntime.questionHistory=[c,...r.evaRuntime.questionHistory||[]].slice(0,40);const d=no({}),u=l===!1?"thinking":"approve",m=Ln(so({sprite:u}),u);n.currentLine={id:`question_reply_${s.id}_${a.id}`,category:"question_reply",text:a.reply||fy(s,l),sprite:m,background:d.id,emotion:u,state:"react",at:new Date().toISOString(),reason:"question_answer"},r.evaRuntime.presenceState="react",r.evaRuntime.textRevealSkippedLineId=null,ao(n.currentLine,"question_answer",Oe({lastEvent:{type:"question_answer"}})),n.lastSpokeAt=n.currentLine.at,n.lastRoomId=d.id,n.lastSprite=m,mr(),ky(s,a,l),As(),T(),D(l===!1?"answer_wrong":l===!0?"answer_correct":"notification_soft"),P()}function lo(){const e=te(),t=e.currentQuestion?.id?e.currentQuestion:r.evaRuntime?.pendingQuestion;return t?.id?(e.currentQuestion=t,r.evaRuntime||(r.evaRuntime=ln()),r.evaRuntime.pendingQuestion=t,t):null}function fy(e,t){return e.kind==="kanji_meaning"&&e.kanji&&e.answerText?t?{ru:`Верно. ${e.kanji}: ${e.answerText.ru||b(e.answerText)}.`,en:`Correct. ${e.kanji}: ${e.answerText.en||b(e.answerText)}.`}:{ru:`Не совсем. ${e.kanji}: ${e.answerText.ru||b(e.answerText)}.`,en:`Not quite. ${e.kanji}: ${e.answerText.en||b(e.answerText)}.`}:{ru:"Принято.",en:"Noted."}}function hy(e,t,n){const s=Mp(),a=vy(e);a&&na(a,"eva_room_quiz"),s.answered=Number(s.answered||0)+1,s.correct=Number(s.correct||0)+(n?1:0),s.wrong=Number(s.wrong||0)+(n?0:1),s.streak=n?Number(s.streak||0)+1:0,s.history=[{id:e.id,cardId:e.cardId||null,kanji:e.kanji||"",jlpt:e.jlpt||"",selected:t.id,correct:n,answer:b(e.answerText||{}),at:new Date().toISOString()},...s.history||[]].slice(0,40);const o=_n();o.reviews=Number(o.reviews||0)+1,n?(r.progress.totalCorrect=Number(r.progress.totalCorrect||0)+1,a&&wy(a),a&&!s.rewarded[String(a.id)]&&(s.rewarded[String(a.id)]=new Date().toISOString(),H(2,s.streak>0&&s.streak%3===0?1:0,`eva_room_quiz:${a.id}`))):(r.progress.totalWrong=Number(r.progress.totalWrong||0)+1,o.mistakes=Number(o.mistakes||0)+1,a&&by(a)),o.minutes=Go(Number(o.reviews||0)*.75+Number(o.learned||0)*1.25,1),r.progress.daily[ce()]=o,ye(),rd({silent:!0}),Z()}function vy(e){const t=String(e?.cardId||""),n=String(e?.kanji||""),s=String(e?.jlpt||"").toUpperCase();return(t?oe(t):null)||Kp().find(a=>{if(!a)return!1;const o=t&&String(a.id)===t,l=n&&a.kanji===n,c=!s||String(a.jlpt||"").toUpperCase()===s;return o||l&&c})||(n?r.cards.find(a=>a.kanji===n):null)||null}function wy(e){const t=String(e?.jlpt||"").toUpperCase(),n=Yl().find(s=>s.level===t);n&&n.markStudied(e.kanji,e.id)}function by(e){const t=String(e?.jlpt||"").toUpperCase(),n=Yl().find(s=>s.level===t);n&&n.markDifficult(e.kanji,e.id)}function ky(e,t,n){if(!r.evaRuntime)return;const s={type:"user_answered_eva_question",payload:{questionId:e.id,answerId:t.id,cardId:e.cardId||null,kanji:e.kanji||"",correct:n},at:Date.now()};r.evaRuntime.lastEvent=s,r.evaRuntime.eventHistory=[s,...r.evaRuntime.eventHistory||[]].slice(0,80),r.evaRuntime.recentEvents=[s,...r.evaRuntime.recentEvents||[]].slice(0,80),mg(s),window.dispatchEvent(new CustomEvent("eva:event",{detail:{...s,handledByFlashKanji:!0}}))}function yy(){me(),eo()&&ca("render");const e=Cg();let t=te().currentLine;if(eo()&&!t?.text&&r.evaAutonomyLines.length){const a=cc("render_fallback")||r.evaAutonomyLines[0],o=no(a),l=Oe({lastEvent:{type:"render_fallback"}}),c=An(l),d=dc(a),u=uc(a),m=a.emotion||io(l,c,"render_fallback"),h=Ln(so(a),m);Es(h),t={id:a.id,category:a.category||"mood",text:a.text,sprite:h,background:o.id,decoration:d,effect:u,emotion:m,state:a.state||"observe",at:new Date().toISOString()},te().currentLine=t,te().currentDecoration=d,te().currentEffect=u,te().mood=c,te().emotion=m,te().lastSpokeAt=t.at,te().lastRoomId=o.id,te().lastSprite=h,r.evaRuntime.presenceState=t.state,r.evaRuntime.textRevealSkippedLineId=null,ao(a,"render_fallback",l),pc(h,o.file),mr(),T()}if(eo()&&t?.text){const a=gr(t.background)||un(),o=Ln(t.sprite||"relationship",t.emotion||te().emotion);return{isAutonomy:!0,line:t,bg:a,spriteId:o,sprite:Es(o),decoration:t.decoration||te().currentDecoration,effect:t.effect||te().currentEffect,mood:te().mood||dn().mood,emotion:t.emotion||te().emotion||"calm",node:{id:"eva_autonomy_line",background:a.id,sprite:t.sprite||"relationship",speaker:{ru:"Ева",en:"Eva"},text:t.text,choices:[]}}}const n=gr(e.background)||un(),s=Ln(e.sprite,te().emotion);return{isAutonomy:!1,line:null,bg:n,spriteId:s,sprite:Es(s),decoration:te().currentDecoration,effect:te().currentEffect,mood:dn().mood,emotion:te().emotion||"calm",node:e}}function jg(e="adaptive"){me(),pr();const t=dn(),n=new Set(r.progress.evaRoomDialogueProgress.lineHistory||[]),s=ro().filter(d=>{const u=Array.isArray(d.tags)?d.tags:[];return!(e==="adaptive"||d.category===e||u.includes(e))||!Sg(d,t)?!1:!n.has(d.id)}),a=ro().filter(d=>e==="adaptive"||d.category===e||(d.tags||[]).includes(e)),o=s.length?s:a.length?a:ro(),l=it(o)||{id:"fallback",category:"adaptive",text:{ru:"Я рядом. Давай сделаем хотя бы один честный шаг.",en:"I'm here. Let's make one honest step."},sprite:"relationship",background:un().id},c=r.progress.evaRoomDialogueProgress.lineHistory||[];return r.progress.evaRoomDialogueProgress.lineHistory=[l.id,...c.filter(d=>d!==l.id)].slice(0,24),{id:l.id,category:l.category||e,text:l.text||{ru:String(l.ru||""),en:String(l.en||l.ru||"")},sprite:l.sprite||"relationship",background:l.background||un().id,relationshipDelta:l.relationshipDelta||{}}}function Sg(e,t){return[["minWarmth",t.warmth,(s,a)=>s>=a],["maxWarmth",t.warmth,(s,a)=>s<=a],["minTrust",t.trust,(s,a)=>s>=a],["maxTrust",t.trust,(s,a)=>s<=a],["minDiscipline",t.discipline,(s,a)=>s>=a],["maxDiscipline",t.discipline,(s,a)=>s<=a],["minCuriosity",t.curiosity,(s,a)=>s>=a],["maxCuriosity",t.curiosity,(s,a)=>s<=a]].every(([s,a,o])=>typeof e[s]>"u"||o(a,Number(e[s])))}function Cg(){me();const e=ty(r.progress.evaRoomDialogueProgress.currentNode);return r.progress.evaRoomDialogueProgress.visited[e.id]=new Date().toISOString(),e}function Es(e){return r.evaSprites?.[e]||r.evaSprites?.default||"assets/mascots/eva_normal.webp"}function pc(e,t=""){[Es(e),t].filter(Boolean).forEach(n=>{try{const s=new Image;s.src=n,s.decode&&s.decode().catch(()=>null)}catch(s){console.warn("Eva visual preload skipped.",s)}})}function $y(e){const n=Cg().choices?.[Number(e.dataset.index||0)];if(!n)return;me();const s=r.progress.evaRelationship;s.conversationCount=Number(s.conversationCount||0)+1,s.totalDialogueChoices=Number(s.totalDialogueChoices||0)+1,s.lastInteractionAt=new Date().toISOString(),s.lastInteractionDate=ce(),jy(n),xe(n.relationshipDelta||{warmth:.4,curiosity:.2},"dialogue_choice");const a=Number(n.rewardMoonFragments||0),o=n.rewardOnceKey;if(a>0&&o&&!r.progress.evaRoomDialogueProgress.rewardsClaimed[o]&&(r.progress.evaRoomDialogueProgress.rewardsClaimed[o]=new Date().toISOString(),H(0,a,`eva_room:${o}`),G(Wn().reward)),n.randomLine){const l=jg(n.randomLine);xe(l.relationshipDelta||{},`eva_line:${l.id}`,{silent:!0}),r.progress.evaRoomDialogueProgress.generatedLine=l,r.progress.evaRoomDialogueProgress.currentNode="generated_line"}else r.progress.evaRoomDialogueProgress.generatedLine=null,r.progress.evaRoomDialogueProgress.currentNode=n.next||"intro";if(n.openShop&&(r.evaRoomShopOpen=!0),T(),n.route){aa(n.route);return}D(n.openShop?"menu_open":"page_turn"),P()}function jy(e={}){if(!r.evaRuntime)return;r.evaRuntime.memory=Ls(on(),r.evaRuntime.memory||{});const t=r.evaRuntime.memory,n=!!(e.randomLine&&!e.route),s=["learn","review"].includes(e.route);n&&(t.timesUserChoseTalkOverStudy=Number(t.timesUserChoseTalkOverStudy||0)+1),s&&(t.timesUserChoseTalkOverStudy=Math.max(0,Number(t.timesUserChoseTalkOverStudy||0)-1)),t.lastInteractionDate=ce(),t.lastRoute=r.route}function Sy(){me(),r.progress.evaRoomDialogueProgress.currentNode="intro",r.progress.evaRoomDialogueProgress.generatedLine=null,r.evaRuntime&&(r.evaRuntime.presenceState="wait_choice",r.evaRuntime.textRevealSkippedLineId=null),T(),D("page_turn"),P()}function Cy(e){co(e)}function xy(e){uo(e)}function Ny(e){const t=Ce(e)||Bn(e)||Nn(e);t&&co(t.id)}function Ly(e){const t=Ce(e)||Bn(e)||Nn(e);t&&uo(t.id)}function Bt(e){r.customization||Ns();const t=Ce(e)||Bn(e);return!!(t?.defaultOwned||t?.price===0||r.customization?.owned?.includes(t?.id||e))}function gc(e){return e?e.type==="background"?"background":e.type==="outfit"?"outfit":e.type==="theme"?"theme":e.type==="effect"?"effect":e.type==="decoration"?"decoration":e.type:null}function Ay(e){const t=gc(e);return!!(t&&r.customization?.selected?.[t]===e.id)}function xg(e){return!e||!mc(e)?"locked":Ay(e)?"selected":Bt(e.id)?"owned":"available"}function Iy(e={}){const t=[r.customization?.selected?.effect,e.effect,r.evaRuntime?.currentEffect,r.evaRuntime?.currentLine?.effect,r.progress?.evaAutonomy?.currentEffect,te().currentEffect];for(const n of t){const s=zn(n);if(!s||s==="none")continue;const a=Ce(s);if(a?.type==="effect"&&Bt(a.id))return a.id}return null}function Ng(e=null){const t=zn(e||r.customization?.selected?.effect),n=Ce(t);return!n||n.type!=="effect"||r.customization?.selected?.effect!==n.id?!1:(r.customization.selected.effect=null,r.progress?.evaAutonomy&&(r.progress.evaAutonomy.currentEffect=null),r.evaRuntime?.currentEffect===n.id&&(r.evaRuntime.currentEffect="none"),ea(),ir(),T(),kn(),D("menu_close"),G(p()==="ru"?"Эффект убран.":"Effect removed."),P(),!0)}function Ty(e=null){const t=zn(e||r.customization?.selected?.effect||r.customization?.selected?.decoration||r.customization?.selected?.frame||r.customization?.selected?.outfit||r.customization?.selected?.background||r.customization?.selected?.theme),n=Ce(t);if(!n)return!1;if(n.type==="effect")return Ng(n.id);r.customization||Ns();const s=gc(n);if(!s)return!1;const a=On().selected;return s==="background"?r.customization.selected.background=a.background:s==="outfit"?r.customization.selected.outfit=a.outfit:s==="theme"?r.customization.selected.theme=a.theme:s==="decoration"&&(r.customization.selected.decoration=a.decoration,r.customization.selected.frame=a.frame),ea(),ir(),T(),kn(),D("menu_close"),G(p()==="ru"?"Выбор сброшен.":"Selection cleared."),P(),!0}function Ry(e){if(!e?.unlockCondition||mc(e))return"";const t=e.unlockCondition,n=p()==="ru";if(t.type==="achievement"){const s=Gs().find(o=>o.id===t.id),a=s?td(s):t.id;return n?`Открывается за достижение: ${a}`:`Unlocks after achievement: ${a}`}return t.type==="level"?n?`Открывается на уровне ${t.value}`:`Unlocks at level ${t.value}`:t.type==="streak"?n?`Открывается за серию ${t.value} дн.`:`Unlocks at a ${t.value}-day streak`:""}function mc(e){if(!e?.unlockCondition)return!0;const t=e.unlockCondition;return t.type==="level"?r.progress.level>=Number(t.value||0):t.type==="streak"?r.progress.streak.current>=Number(t.value||0):t.type==="achievement"?!!r.progress.achievements?.[t.id]?.unlockedAt:!0}function co(e){const t=Ce(e);if(!t||(r.customization||Ns(),il.has(t.id)))return;if(!mc(t)){D("purchase_failed"),G(Hn().locked);return}if(il.add(t.id),window.setTimeout(()=>il.delete(t.id),0),Bt(t.id)){uo(t.id);return}const n=zI({balance:r.progress.moonFragments,owned:r.customization?.owned||[],itemId:t.id,price:t.price});if(r.progress.moonFragments=n.balance,n.status==="insufficient-funds"){D("purchase_failed"),G(Hn().notEnough),T(),P();return}if(n.status!=="purchased"){D("purchase_failed"),G(Hn().unavailable),T(),P();return}r.customization.owned=n.owned,r.customization.seen=[...new Set([...r.customization.seen||[],t.id])],r.progress.transactions.unshift({at:new Date().toISOString(),reason:`customization:${t.type}:${t.id}`,label:Ot(t),xp:0,coins:-n.price,balance:r.progress.moonFragments}),r.progress.transactions=r.progress.transactions.slice(0,80),ea(),ir(),T(),D("purchase_success"),D("item_unlock"),ke("item_bought",{itemId:t.id,type:t.type,title:Ot(t),price:t.price},{skipAchievements:!0}),G(Hn().bought.replace("{item}",Ot(t))),P()}function uo(e){var s,a,o;const t=Ce(e);if(r.customization||Ns(),!t||!Bt(t.id))return;const n=gc(t);if(n){if(r.customization.selected[n]=t.id,n==="decoration"&&(r.customization.selected.frame=t.id),t.type==="outfit"&&t.spriteId){r.progress.selectedEvaSprite=t.spriteId,(s=r.progress).evaAutonomy||(s.evaAutonomy={}),r.progress.evaAutonomy.currentLine=null;const l=te();l.currentLine=null,l.lastSprite=t.spriteId,r.evaRuntime&&(r.evaRuntime.currentSkin=t.spriteId,r.evaRuntime.activeSkin=t.spriteId,r.evaRuntime.currentPhrase=null,(a=r.evaRuntime).memory||(a.memory=on()),r.evaRuntime.memory.preferredEvaOutfit=t.id)}t.type==="background"&&(r.progress.selectedEvaRoomBackground=t.id,r.evaRuntime&&(r.evaRuntime.currentBackground=t.id,r.evaRuntime.activeBackground=t.id,(o=r.evaRuntime).memory||(o.memory=on()),r.evaRuntime.memory.preferredEvaRoomBackground=t.id),r.progress.evaAutonomy.currentLine=null),ea(),ir(),T(),kn(),D("notification_soft"),ke("item_equipped",{itemId:t.id,type:t.type,title:Ot(t)},{skipAchievements:!0}),G(Hn().selectedToast.replace("{item}",Ot(t))),P()}}function _y(){const e=te();e.enabled=!0,e.frequency="normal",e.roomMode="auto",e.outfitMode="auto",e.nextSpeakAt=0,ca("toggle",{force:!0}),T(),D("notification_soft"),G(Vn().status),P()}function Py(){const e=te();e.frequency="normal",mr(),T(),D("notification_soft"),P()}function Ey(){const e=te();e.roomMode="auto",e.currentLine=null,T(),D("notification_soft"),P()}function My(){const e=te();e.outfitMode="auto",e.currentLine=null,T(),D("notification_soft"),P()}function Lg(){const e=te();e.enabled=!0,hg(),e.currentQuestion=null,e.currentLine=null,e.nextSpeakAt=0,Ag("manual"),T(),D("page_turn"),P()}function Ag(e="manual",t={}){const n=fg(e)||cc(e);if(!n)return!1;const s=Oe({lastEvent:{type:e}}),a=An(s),o=n.emotion||io(s,a,e),l=no(n),c=Ln(so(n),o),d=dc(n),u=uc(n),m=te(),h=Date.now(),f=t.allowQuestion===!1?null:kg(s,n);return m.currentLine={id:n.id,category:n.category||e,text:n.text,sprite:c,background:l.id,decoration:d,effect:u,emotion:o,state:n.state||"speak",at:new Date(h).toISOString(),reason:e},m.currentDecoration=d,m.currentEffect=u,m.mood=a,m.emotion=o,m.lastSpokeAt=m.currentLine.at,m.lastRoomId=l.id,m.lastSprite=c,m.currentQuestion=f,m.recentLineIds=[n.id,...(m.recentLineIds||[]).filter(S=>S!==n.id)].slice(0,32),r.evaRuntime||(r.evaRuntime=ln()),Object.assign(r.evaRuntime,{mood:a,emotion:o,presenceState:n.state||"speak",currentPhrase:m.currentLine,pendingQuestion:f,currentSkin:c,currentBackground:l.id,currentDecoration:d,currentEffect:u,activeSkin:c,activeBackground:l.id,lastPhraseAt:h,lastEmotionChangeAt:h,lastQuestionAt:f?h:Number(r.evaRuntime.lastQuestionAt||0),lastVisualChangeAt:h,textRevealSkippedLineId:null}),ao(n,e,s),pc(c,l.file),mr(),As(),kn(),!0}function Ky(){te().currentLine=null,T(),D("menu_close"),P()}function M(e,t,n,s){return`
      <article class="metric">
        <span>${i(e)}</span>
        <strong>${i(t)}</strong>
        <div class="meter"><i style="width:${de(s,0,100)}%"></i></div>
        <p class="label">${i(n)}</p>
      </article>
    `}function Dy(e){const t=md(e.id),n=t.filter(d=>J(d.id).state!=="New").length,s=t.filter(d=>J(d.id).state==="Mastered").length,a=!Ge(e),o=yh(e),l=a?"鎖":t[0]?.kanji||"文",c=E(s,t.length);return`
      <button class="lesson-tile ${a?"is-locked":""} ${yd(o)}" type="button" id="textbook-lesson-${g(e.id)}" data-action="start-lesson" data-id="${g(e.id)}">
        <span class="lesson-glyph">${i(l)}</span>
        <span>
          <span class="pill">${i(e.jlpt)}</span>
          ${wL(o)}
          <h3>${i(Xa(e))}</h3>
          <p>${i(pA(e))}</p>
          <span class="lesson-meta">
            <span class="pill">${n}/${t.length}</span>
            <span class="pill mastered">${s} ${i(_("mastered"))}</span>
            ${a?`<span class="pill danger-pill">${i(_("unlockedAt"))} ${_o(e)}</span>`:""}
          </span>
          <span class="meter"><i style="width:${c}%"></i></span>
        </span>
      </button>
    `}function Fy(e){const t=yh(e),n=e.id===r.activeLessonId,s=!Ge(e);return`
      <button class="btn ${n?"primary":"ghost"} ${s?"is-disabled":""} ${yd(t)}" type="button" data-action="select-lesson" data-id="${g(e.id)}" title="${g($d(t))}">
        <span>${i(e.jlpt)}</span>
        ${vL(t)}
      </button>
    `}function fc(){const e=String(r.activeLearnJlpt||"all").toUpperCase();return r.lessons.filter(t=>e==="ALL"||String(t.jlpt||"").toUpperCase()===e)}function Oy(){const e=fc();return e.find(t=>t.id===r.activeLessonId)||e.find(t=>Ge(t))||e[0]||r.lessons.find(t=>t.id===r.activeLessonId)||r.lessons.find(t=>Ge(t))||r.lessons[0]||null}function hc(){return F(Oy()?.jlpt)||bn()}function Ig(e){if(!e.length)return r.activeLessonId=null,null;const t=e.find(a=>a.id===r.activeLessonId);if(t&&Ge(t))return t;const s=e.find(a=>Ge(a))||e[0];return r.activeLessonId=s?.id||null,s||null}function By(e){const t=e.length,n=e.filter(a=>Ge(a)).length,s=["all",...be];return`
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
    `}function zy(e){if(!e)return"";const t=e.textbook||e;return`
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
    `}function Uy(e){const t=It(e?.jlpt);return`
      <article class="lesson-locked-panel">
        <span class="pill danger-pill">${i(p()==="ru"?"Закрытый уровень":"Level locked")}</span>
        <h2>${i(e?Xa(e):"")}</h2>
        <p>${i(p()==="ru"?`Откроется на уровне ${_o(e)}.`:`Unlocks at level ${_o(e)}.`)}</p>
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
    `}function Jy(){return r.activeLearnView===jn?Yy():r.activeLearnView===tn?Qy():_g()}function Gy(){const e=Tp();if(e.kind==="review"){Gn("review");return}if(r.route==="home"){ra(hc());return}Tg(e.nodeId)}function Tg(e){const t=Is(e);if(!t){Ts();return}if(Ip(t)==="locked"){G(p()==="ru"?"Сначала закончи предыдущий шаг.":"Finish the previous step first.");return}if(t.id===tr){Gn("review");return}if(t.id===nr){ya("final-test");return}if(t.type==="textbook"){ya(t.id);return}Ts(tn,t.id)}function Rg(e){const t=String(e||"");return t&&(oe(t)||r.cards.find(n=>String(n.id)===t))||null}function qy(){const e=ge();return[{id:"intro-1",kind:"info",eyebrow:e.intro,title:e.introTitle,text:e.introBody,note:e.finishHint},{id:"intro-2",kind:"info",eyebrow:e.route,title:e.nextLesson,text:e.introBridge,note:e.mapHint},{id:"intro-3",kind:"quiz",eyebrow:e.ready,title:e.introQuestion,text:e.introQuestionHint,answer:"review",options:[{value:"review",label:{ru:"В повторение",en:"Into review"}},{value:"memory",label:{ru:"В архив навсегда",en:"Into permanent archive"}},{value:"skip",label:{ru:"Никуда, пока не забудешь",en:"Nowhere, until you forget"}}]}]}function da(e){const t=Jt(e);if(!t)return null;const n=gn(t);if(!n.length)return null;const s=Array.isArray(t.sentences)?t.sentences:[],a=n.map((o,l)=>{const c=qt(o)[0]||null,d=s[l%Math.max(s.length,1)]||s[0]||null,u=c?{jp:c.word||o.kanji,hiragana:c.reading||o.hiragana||"",translation:c.translation||(d?{ru:d.ru||"",en:d.en||""}:"")}:d?{jp:d.jp||o.kanji,hiragana:ee(d.reading||d.hiragana||o.hiragana||""),translation:{ru:d.ru||"",en:d.en||""}}:{jp:o.kanji,hiragana:o.hiragana||"",translation:{ru:K(o),en:K(o)}};return{cardId:o.id,sentence:u}});return{id:t.id,title:t.title,summary:t.goal||t.theme||t.title,objectives:[t.goal,t.theme].filter(Boolean),kanjiIds:n.map(o=>o.id),kanjiBlocks:a,exercises:Fs(t),source:"learning_path"}}function Hy(e){if(e===Pe)return qy();const t=r.learningPathLessonPayloads[e]||da(e);if(!t)return[];const n=ge(),s=[],a=(t.objectives||[]).map(b).filter(Boolean).slice(0,3).join(" • ");return s.push({id:`${e}-overview`,kind:"info",eyebrow:"N5",title:b(t.title),text:b(t.summary),note:a||n.finishHint}),(t.kanjiBlocks||[]).forEach((o,l)=>{const c=Rg(o.cardId);if(!c)return;const d=o.sentence||null;s.push({id:`${e}-kanji-${l+1}`,kind:"kanji",eyebrow:c.jlpt||"N5",title:`${c.kanji} · ${K(c)}`,text:rj(c,{word:d?.jp||c.kanji,reading:d?.hiragana||c.hiragana||""}),note:d?.translation?b(d.translation):"",cardId:c.id,card:c,sentence:d})}),(t.exercises||[]).forEach(o=>{const l=(o.options||[]).map(c=>({value:String(c.value??c.id??c.label??c),label:b(c.label||c.text||c)}));s.push({id:String(o.id||`${e}-quiz-${s.length}`),kind:"quiz",eyebrow:"N5",title:b(o.prompt),text:b(o.promptHint||{ru:"",en:""}),answer:String(o.answer??""),options:l})}),s}function Vy(e,t=null){const n=Hy(e);if(!t||t.mode!=="mistakes"||!t.reviewStepIds?.length)return n;const s=new Set(t.reviewStepIds),a=n.filter(o=>o.kind==="quiz"&&s.has(o.id));return a.length?a:n.filter(o=>o.kind==="quiz")}function Wy(e,t=tn,n=[]){const s=Jn(),a=s.activeSession,o=n.map(String).filter(Boolean);return a?.nodeId===e&&a.mode===t&&JSON.stringify(a.reviewStepIds||[])===JSON.stringify(o)?a:(s.activeSession=El({nodeId:e,mode:t,stepIndex:0,answers:{},mistakes:[],reviewStepIds:o,score:0,startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),s.lastUpdatedAt=s.activeSession.updatedAt,T(),s.activeSession)}function ua(e){const t=Vl(),n=t?.nodeId===e?t:Wy(e),s=Vy(e,n),a=s.filter(c=>c.kind==="quiz"),o=Object.keys(n.answers||{}).length,l=Math.max(0,Number(n.stepIndex||0));return{session:n,steps:s,quizSteps:a,answeredCount:o,stepIndex:l,currentStep:s[l]||null,isResult:l>=s.length&&s.length>0}}function Xy(e,t,n){var c;const s=Jn(),a=new Date().toISOString(),o=n.filter(d=>d.kind==="quiz"),l=Array.isArray(t.mistakes)&&t.mistakes.length>0;if((c=s.completedNodes)[e]||(c[e]=a),s.resultHistory[e]={completedAt:a,score:Number(t.score||0),totalQuestions:o.length,mistakes:(t.mistakes||[]).slice(0,24)},s.activeSession=null,e===Pe&&H(12,0,"learning_path:intro"),/^n5-lesson-\d+$/i.test(e)){const d=Jt(e),u=r.learningPathLessonPayloads[e]||da(e),m=[...new Set([...u?.kanjiIds||[],...(u?.kanjiBlocks||[]).map(f=>f.cardId),...gn(d).map(f=>f.id)].map(String).filter(Boolean))],h=re();if(m.forEach(f=>{const S=Rg(f);if(!S)return;na(S,"learning_path"),cr(h,S.kanji);const C=ie(J(S.id));C.state==="New"&&(r.progress.cards[S.id]=$e(C,l?"hard":"good"))}),d){je.add(`n5:${d.id}`),h.completedLessons[d.id]=a,h.currentLessonId=et().find(C=>C.order===d.order+1)?.id||d.id,r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.completedLessons=r.progress.n5Course.completedLessons||{},r.progress.n5Course.completedLessons[d.id]=a,T({immediate:!0}),go()>=10&&Object.keys(h.studiedKanji||{}).length>=80&&(r.progress.unlockedJlptLevels=r.progress.unlockedJlptLevels||[],r.progress.unlockedJlptLevels.includes("N5")||r.progress.unlockedJlptLevels.push("N5"),r.progress.unlockedJlptLevels.includes("N4")||r.progress.unlockedJlptLevels.push("N4"));const f=r.n5Meta?.rewards?.lessonCompleteXp||45,S=r.n5Meta?.rewards?.lessonCompleteMoon||6;H(f,S,`learning_path:${e}`),bt({title:`${Ze().lessonComplete}: ${b(d.title)}`,message:Ze().lessonCompleteText,xp:f,coins:S,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),ke("lesson_complete",{lessonId:e,jlpt:"N5"})}}Vi(),ye(),Z(),T()}function _g(){r.n5Textbook?.items?.length||Hl();const e=ge(),t=Ap(),n=Tp(),s=Is(dr()),a=Mn();return`
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
            <h2>${i(Lp(dr()))}</h2>
            <p>${i(e.mapHint)}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(ge().reviewQueue)} · ${i(Xe())}</span>
            <span class="pill">${i(ge().streak)} · ${i(r.progress.streak.current)}</span>
            <span class="pill">${i(ge().xp)} · ${i(a.current)}</span>
          </div>
        </article>

        <div class="learning-path-timeline">
          ${t.length?t.map((o,l)=>{const c=Ip(o),d=c==="locked",u=b(o.summary)||"",m=o.id===tr?e.reviewAction:o.id===nr?e.openCheckpoint:o.type==="textbook"?e.openTextbook:c==="current"?e.resume:e.continue;return`
              <button class="learning-path-node is-${g(c)} is-${g(o.type||"lesson")}" type="button" data-action="learning-path-node" data-node="${g(o.id)}" ${d?'disabled aria-disabled="true"':""}>
                <span class="learning-path-node-index">${l+1}</span>
                <div class="learning-path-node-copy">
                  <div class="learning-path-node-meta">
                    <span class="pill">${i(o.level||"N5")}</span>
                    <span class="pill">${i(ib(c))}</span>
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
    `}function Qy(){const e=r.activeLearnNodeId||dr(),t=Is(e),n=ge();if(!t)return _g();if(t.id!==Pe&&t.type==="lesson"&&!r.n5Textbook?.items?.length)return Hl(),`
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
      `;t.type==="lesson"&&Zw(e);const s=ua(e),{session:a,steps:o,quizSteps:l,currentStep:c,isResult:d}=s;if(!o.length)return`
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
    `}function Yy(){const e=fc(),t=Ig(e),n=!!(t&&Ge(t)),s=n?UN(t.id):[];(!r.activeCardId||!s.some(l=>l.id===r.activeCardId))&&(r.activeCardId=s[0]?.id||null);const a=n&&r.activeCardId?oe(r.activeCardId):null,o=r.activeLearnJlpt!=="all"?It(r.activeLearnJlpt):null;return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("learn"))}</h1>
            <p>${i(t?Xa(t):"")}</p>
          </div>
          ${o?`<button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Учебники":"Textbooks")}</button>`:""}
        </div>
        ${By(e)}
        ${o?zy(o):""}
        <div class="actions lesson-tabs">
          ${e.map(Fy).join("")}
        </div>
        <div class="study-layout">
          ${n?a?ff(a):bx(t):Uy(t)}
          ${n?qc(a,s.length):qc(null,0)}
        </div>
      </section>
    `}function Zy(){const e=Pn(r.activeJlptLesson)||Pn(oe(r.activeCardId)?.jlpt)||r.jlptLessons[0];if(!e)return`
        <section class="page">
          <article class="empty-state">
            <span class="kanji-char">JLPT</span>
            <h2>${i(p()==="ru"?"JLPT-уроки ещё не загружены":"JLPT lessons are not loaded yet")}</h2>
            <button class="btn primary" type="button" data-action="route" data-route="textbooks">${i(_("learn"))}</button>
          </article>
        </section>
      `;r.activeJlptLesson=e.jlpt;const t=It(e.jlpt);if(!Tt(e.jlpt))return Pg(t||e);const n=Sh(e.jlpt),s=n.filter(l=>J(l.id).state==="Mastered").length,a=n.filter(l=>J(l.id).state!=="New").length,o={...xd(),...Cd()};return`
      <section class="page jlpt-lesson-page">
        <div class="section-head">
          <div>
            <h1>${i(b(e.title))}</h1>
            <p>${i(b(e.summary))}</p>
          </div>
          <div class="actions">
            <a class="btn ghost" href="#textbooks/${g(e.jlpt)}">${i(p()==="ru"?"Страница учебника":"Textbook page")}</a>
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks">${i(p()==="ru"?"Все учебники":"All textbooks")}</button>
            ${gs("lesson",{level:e.jlpt,lessonId:e.id})}
            <button class="btn ghost" type="button" data-action="route" data-route="textbooks" data-subroute="${g(e.jlpt)}">${i(o.back)}</button>
          </div>
        </div>
        <div class="actions jlpt-switcher">
          ${r.jlptLessons.map(l=>{const c=Tt(l.jlpt),d=l.jlpt===e.jlpt,u=g(En(l.jlpt));return c?`<button class="btn ${d?"primary":"ghost"}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(l.jlpt)}">${i(l.jlpt)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${u}">🔒 ${i(l.jlpt)}</button>`}).join("")}
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
        ${nf(e)}
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
    `}function e$(){const e=r.jlptCatalog?.items||[],t=String(r.activeTextbookLevel||"");if(we(t))return s$(t);const n=t.toUpperCase(),s=n?It(n):null;if(s)return r.activeTextbookLevel=s.jlpt,r.activeJlptLesson=s.jlpt,t$(s);if(n&&!r.bootAncillaryLoaded)return Ii({hadPriorVisit:tc(r.progress)}).catch(l=>console.warn("Boot ancillary data failed to load.",l)),vc({title:{ru:n,en:n}},n);const a=p()==="ru"?{title:"Учебники Flash Kanji",description:"Выберите азбуку для старта с нуля или продолжайте учебники JLPT N5–N1.",open:"Открыть страницу",pdf:"Скачать PDF",study:"К урокам",kanaBadge:"Курс на русском",kanaMeta:"знаков",kanaTasks:"заданий"}:{title:"Flash Kanji Textbooks",description:"Choose a kana course from zero or continue JLPT N5-N1 textbooks.",open:"Open page",pdf:"Download PDF",study:"Go to lessons",kanaBadge:"Russian course",kanaMeta:"characters",kanaTasks:"tasks"},o=(r.kanaCatalog?.courses||[]).map(l=>`
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
            ${gs("textbooks")}
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
                ${Tt(l.jlpt)?"":`<p class="textbook-lock-note">${i(En(l.jlpt))}</p>`}
                <div class="textbook-meta">
                  <span class="pill">${i(l.lessonCount||0)} ${i(p()==="ru"?"уроков":"lessons")}</span>
                  <span class="pill">${i(l.kanjiCount||0)} ${i(_("cardsToday"))}</span>
                  <span class="pill">${i(b(l.goal||{}))}</span>
                </div>
                <div class="textbook-actions">
                  <a class="btn primary" href="#textbooks/${g(l.jlpt)}">${i(a.open)}</a>
                  ${Tt(l.jlpt)?`<a class="btn ghost" href="${g(l.pdfUrl||l.pdfFile||"")}" download="${g((l.pdfFile||l.pdfUrl||"flashkanji-textbook.pdf").split("/").pop()||"flashkanji-textbook.pdf")}" target="_blank" rel="noopener">${i(a.pdf)}</a>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g(En(l.jlpt))}">${i(p()==="ru"?"PDF закрыт":"PDF locked")}</button>`}
                  ${Tt(l.jlpt)?`<button class="btn ghost" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(l.jlpt)}">${i(a.study)}</button>`:`<button class="btn ghost is-disabled" type="button" disabled aria-disabled="true" title="${g(En(l.jlpt))}">${i(p()==="ru"?"Закрыто":"Locked")}</button>`}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}function Pg(e){const t=String(e?.jlpt||"").toUpperCase(),n=jd(t),s=n.map(o=>`<a class="pill" href="#textbooks/${g(o)}">${i(o)}</a>`).join(""),a=p()==="ru"?{title:"Учебник закрыт",back:"Все учебники",home:"Домой",hint:"Сначала заверши предыдущие уровни, чтобы открыть этот учебник."}:{title:"Textbook locked",back:"All textbooks",home:"Home",hint:"Finish the previous levels first to unlock this textbook."};return`
      <section class="page textbooks-page textbook-detail-page">
        <div class="section-head">
          <div>
            <p class="eyebrow">${i(t||"JLPT")}</p>
            <h1>${i(b(e?.displayTitle||e?.title||{ru:a.title,en:a.title}))}</h1>
            <p>${i(En(t))}</p>
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
    `}function t$(e){const t=String(e?.jlpt||"").toUpperCase();if(!Tt(t))return Pg(e);if(be.includes(t)&&!Pi(t))return _i(t)==="error"||_i(t)==="incomplete"?n$(e,t,r.jlptCourseDataErrors[t]):(Mi(t).catch(()=>{}),vc(e,t));if(String(e?.jlpt||"").toUpperCase()==="N5"&&r.n5Textbook?.items?.length)return I$(e);if(String(e?.jlpt||"").toUpperCase()==="N4"&&r.n4Textbook?.items?.length)return Aj(e);if(String(e?.jlpt||"").toUpperCase()==="N3"&&r.n3Textbook?.items?.length)return pS(e);if(String(e?.jlpt||"").toUpperCase()==="N2"&&r.n2Textbook?.items?.length)return XS(e);if(String(e?.jlpt||"").toUpperCase()==="N1")return r.n1Textbook?.items?.length?P0(e):(nw().catch(()=>{}),cl?Xi(cl):vc(e,"N1"));r.activeTextbookLevel=e.jlpt,r.activeJlptLesson=e.jlpt;const n=(e.lessonIds||[]).map(f=>r.lessons.find(S=>S.id===f)).filter(Boolean),s=r.lessons.filter(f=>String(f.jlpt||"").toUpperCase()===String(e.jlpt||"").toUpperCase()&&!n.includes(f)),a=[...n,...s].slice(0,Math.max(e.lessonCount||n.length,n.length)),o=r.activeTextbookSubroute?a.find(f=>f.id===r.activeTextbookSubroute)||Pn(e.jlpt)||r.jlptLessons[0]:Pn(e.jlpt)||r.jlptLessons[0];r.activeTextbookSubroute&&o?.id&&Rt(t,o.id,"textbook_page");const l=p()==="ru"?{title:"Страница учебника",back:"Все учебники",pdf:"Скачать PDF",lessonPage:"Страница урока",openLesson:"Открыть урок",outline:"Что внутри",practice:"Практика",lessons:"Уроки учебника",previous:"Предыдущие уровни",next:"Следующие уровни"}:{title:"Textbook page",back:"All textbooks",pdf:"Download PDF",lessonPage:"Lesson page",openLesson:"Open lesson",outline:"Inside the textbook",practice:"Practice",lessons:"Textbook lessons",previous:"Previous levels",next:"Next levels"},c=Sd(e.jlpt)||e.lessonIds?.[0]||a[0]?.id||"",d=b(e.recommendedCycle||{}),u=b(e.goal||{}),m=(e.previousLevels||[]).map(f=>`<a class="pill" href="#textbooks/${g(f)}">${i(f)}</a>`).join(""),h=(e.nextLevels||[]).map(f=>`<a class="pill" href="#textbooks/${g(f)}">${i(f)}</a>`).join("");return`
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
            ${gs("textbook",{level:e.jlpt})}
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
          ${nf(o)}
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
          ${a.map(f=>Dy(f)).join("")||`<article class="empty-state"><h3>${i(p()==="ru"?"Уроки скоро появятся":"Lessons will appear soon")}</h3></article>`}
        </div>
      </section>
    `}function vc(e,t){const n=p()==="ru"?{eyebrow:`${t} · Flash Kanji`,title:"Загружаем урок…",text:`Подгружаю карточки и упражнения ${t}. Адрес сохранён — после загрузки откроется нужный урок.`,back:"Все учебники"}:{eyebrow:`${t} · Flash Kanji`,title:"Loading lesson…",text:`Loading ${t} cards and exercises. The URL is preserved and the requested lesson will open next.`,back:"All textbooks"};return`
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
    `}function n$(e,t,n=null){const s=p()==="ru"?{eyebrow:`${t} · Flash Kanji`,title:"Не удалось загрузить карточки урока",text:"Проверьте подключение и попробуйте ещё раз. Прогресс, XP и Moon Fragments не изменились.",retry:"Повторить",back:"К списку уроков"}:{eyebrow:`${t} · Flash Kanji`,title:"Could not load lesson cards",text:"Check your connection and try again. Progress, XP, and Moon Fragments were not changed.",retry:"Retry",back:"Lesson list"},a=n instanceof Error?n.message:String(n||"");return`
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
    `}function Eg(){return p()==="ru"?{allTextbooks:"Все учебники",start:"Начать курс",continue:"Продолжить",downloadPdf:"Скачать PDF",reference:"Справочник",lessons:"Уроки",practice:"Практикум чтения",final:"Итоговая контрольная",review:"Повторение",sources:"Источники",russianCourse:"Курс на русском",showRomaji:"Показывать ромадзи",hideRomaji:"Скрыть ромадзи",check:"Проверить",score:"Результат",passed:"зачёт",notPassed:"повторить",correct:"верно",wrong:"ошибка",writeDone:"Пропись выполнена",markWriting:"Я написал(а) от руки",manualWriting:"Ручная пропись",noAutoWriting:"Почерк не оценивается автоматически: отметьте шаг, когда написали знаки от руки.",noCourse:"Курс не найден",loading:"Загружаю курс",offlineHint:"Если вы уже открывали этот урок, service worker отдаст его из кэша. Иначе появится понятный offline fallback.",remember:"Помню",forgot:"Не помню",noReview:"Повторений пока нет. Пройдите урок или откройте знаки курса.",sourcePdf:"Оригинальный PDF",taskCount:"заданий",characters:"знаков",lessonsCount:"уроков",lesson:"урок",lessonProgress:"Прогресс урока",newSigns:"Новые знаки",newSignsHint:"Сначала узнаём форму и чтение каждого нового знака.",characterCard:"Карточка знака",characterCardHint:"Идём как в кандзи-уроке: один знак, быстрое решение, следующая карточка.",cardComplete:"Все знаки урока открыты",cardCompleteHint:"Теперь можно закрепить их в упражнениях, прописи и общем повторении.",backToFirstCard:"Повторить карточки",cardProgress:"Карточка",exampleWord:"Пример слова",readWrite:"Как читать и писать",readWriteHint:"Произнесите знак, посмотрите количество штрихов и переходите к ручной прописи.",reading:"Чтение",strokes:"Штрихи",tts:"Звук",strokeOrder:"Stroke-order",explanation:"Объяснение",explanationHint:"Ключевые правила урока вынесены в отдельные карточки.",examples:"Примеры",examplesHint:"Короткие слова и записи для чтения.",example:"Пример",meaning:"Значение",practiceBlock:"Практика",practiceHint:"Выполняйте задания небольшими блоками и проверяйте ответы сразу.",selfCheck:"Проверь себя",selfCheckHint:"Завершите ручную часть и отметьте пропись после тренировки."}:{allTextbooks:"All textbooks",start:"Start course",continue:"Continue",downloadPdf:"Download PDF",reference:"Reference",lessons:"Lessons",practice:"Reading practice",final:"Final test",review:"Review",sources:"Sources",russianCourse:"Russian course",showRomaji:"Show romaji",hideRomaji:"Hide romaji",check:"Check",score:"Score",passed:"passed",notPassed:"retry",correct:"correct",wrong:"wrong",writeDone:"Writing done",markWriting:"I wrote it by hand",manualWriting:"Manual writing",noAutoWriting:"Handwriting is not graded automatically: mark this step after writing the signs by hand.",noCourse:"Course not found",loading:"Loading course",offlineHint:"If you opened this lesson before, the service worker can serve it from cache. Otherwise a clear offline fallback appears.",remember:"Remember",forgot:"Forgot",noReview:"No kana reviews yet. Finish a lesson or open course signs first.",sourcePdf:"Original PDF",taskCount:"tasks",characters:"characters",lessonsCount:"lessons",lesson:"lesson",lessonProgress:"Lesson progress",newSigns:"New signs",newSignsHint:"Start by recognizing the shape and reading of each new sign.",characterCard:"Character card",characterCardHint:"Use the kanji lesson rhythm: one sign, one decision, then the next card.",cardComplete:"All lesson signs are introduced",cardCompleteHint:"Now reinforce them with exercises, handwriting, and shared review.",backToFirstCard:"Repeat cards",cardProgress:"Card",exampleWord:"Example word",readWrite:"How to read and write",readWriteHint:"Play the sound, check the stroke count, then move to handwriting practice.",reading:"Reading",strokes:"Strokes",tts:"Sound",strokeOrder:"Stroke order",explanation:"Explanation",explanationHint:"The key lesson notes are separated into contrast cards.",examples:"Examples",examplesHint:"Short words and spellings for reading practice.",example:"Example",meaning:"Meaning",practiceBlock:"Practice",practiceHint:"Complete the exercises in compact blocks and check immediately.",selfCheck:"Check yourself",selfCheckHint:"Finish the handwriting step after practicing by hand."}}function s$(e){const t=String(e||"").toLowerCase(),n=Ja(t),s=Eg();if(!n&&!r.bootAncillaryLoaded)return Ii({hadPriorVisit:tc(r.progress)}).catch(l=>console.warn("Boot ancillary data failed to load.",l)),Mg({title:t,pdf_url:""},s);if(!n)return Xi(new Error(s.noCourse));const a=vn(t);if(!a)return $h(t).then(()=>P()).catch(()=>P()),r.kanaCourseErrors[t]?Xi(r.kanaCourseErrors[t]):Mg(n,s);const o=String(r.activeTextbookSubroute||"").toLowerCase();if(o==="reference")return h$(a,s);if(o==="sources")return v$(a,s);if(o==="review")return w$(a,s);if(o==="final"||o==="final-test")return f$(a,s);if(/^practice-\d+$/i.test(o)){const l=a.reading_practice?.find(c=>c.id===o);return l?m$(a,l,s):ia(ve("hash","entity-not-found",`textbooks/${t}/${o}`,["textbooks",t,o]))}if(/^lesson-\d+$/i.test(o)){const l=a.lessons?.find(c=>c.id===o);return l?o$(a,l,s):ia(ve("hash","entity-not-found",`textbooks/${t}/${o}`,["textbooks",t,o]))}return r$(a,s)}function Mg(e,t){return`
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
    `}function r$(e,t){const n=yt(e.slug),s=e.lessons?.[0]?.id||"",a=n.currentRoute||s;Po(e.slug,a);const o=e.lessons.filter(l=>po(e.slug,l).passed).length;return`
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
          ${M(t.review,Og(e,"due").length,t.characters,E(Og(e,"due").length,Math.max(1,e.base_characters.length)))}
        </div>
        <div class="actions kana-course-tabs">
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/reference">${i(t.reference)}</a>
          <button class="btn ghost" type="button" data-action="route" data-route="review">${i(t.review)}</button>
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/final">${i(t.final)}</a>
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/sources">${i(t.sources)}</a>
          <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(ps().settings.showRomaji?t.hideRomaji:t.showRomaji)}</button>
        </div>
        <div class="section-head">
          <div>
            <h2>${i(t.lessons)}</h2>
            <p>${i(p()==="ru"?"Курсы азбук независимы: хирагана не блокирует катакану и наоборот.":"Kana courses are independent: hiragana does not lock katakana and vice versa.")}</p>
          </div>
        </div>
        <div class="lesson-grid kana-lesson-grid">
          ${e.lessons.map(l=>a$(e,l,t)).join("")}
        </div>
        <div class="section-head">
          <div>
            <h2>${i(t.practice)}</h2>
            <p>${i(p()==="ru"?"Пять блоков чтения из PDF без обязательного ромадзи.":"Five PDF reading practice blocks without mandatory romaji.")}</p>
          </div>
        </div>
        <div class="lesson-grid kana-practice-grid">
          ${e.reading_practice.map(l=>i$(e,l,t)).join("")}
        </div>
      </section>
    `}function a$(e,t,n){const s=po(e.slug,t),a=s.passed?n.passed:s.completed?n.notPassed:n.start,o=s.completed?Math.round(s.latestScore/Math.max(1,kc(t.exercises))*100):0;return`
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
      `}function i$(e,t,n){const s=yt(e.slug).practices[t.id],a=kc(t.exercises),o=Number(s?.latestScore||0);return`
        <article class="lesson-card kana-lesson-card">
          <div class="lesson-card-main">
            <span class="pill">${i(n.practice)} ${i(t.order)}</span>
            <h3>${i(t.title)}</h3>
            <p>${i((t.body||[]).slice(0,2).join(" "))}</p>
            <div class="progress mini"><span style="width:${E(o,Math.max(1,a))}%"></span></div>
          </div>
          <a class="btn ghost" href="#textbooks/${g(e.slug)}/${g(t.id)}">${i(n.practice)}</a>
        </article>
      `}function o$(e,t,n){const s=yt(e.slug);Po(e.slug,t.id);const a=po(e.slug,t),o=kc(t.exercises),l=l$(t),c=!!s.writing?.[t.id];return`
      <section class="page textbooks-page n5-course-page n5-lesson-page kana-course-page kana-lesson-page">
        <div class="kana-lesson-shell">
          ${c$(e,t,n,l,a,o)}
          ${u$(e,t,n,l)}
          ${p$(l.explanations,n)}
          ${g$(l.examples,n)}
          <section class="kana-lesson-step kana-practice-step" aria-labelledby="kanaPracticeTitle">
            <div class="kana-step-heading">
              <span class="pill">05</span>
              <h2 id="kanaPracticeTitle">${i(n.practiceBlock)}</h2>
              <p>${i(n.practiceHint)}</p>
            </div>
            <div class="kana-practice-stack">
              ${t.exercises.map(d=>bc(e.slug,t.id,"lesson",d,n)).join("")}
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
    `}function l$(e){const t=(e.body||[]).map(d=>String(d||"").trim()).filter(Boolean),n=[],s=[],a={title:"",headers:[],rows:[]};let o=0;const l=d=>/^(Цель раздела|Знаки урока|Произношение|Типичная ошибка|Слова для чтения|Пример и узнавание|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(d),c=d=>/^(Слова для чтения|Пример и узнавание)$/i.test(d);for(;o<t.length;){const d=t[o];if(/^\d+$/.test(d)){o+=1;continue}if(/^Цель раздела$/i.test(d)){for(o+=1;o<t.length&&!/^Знаки урока$/i.test(t[o]);)/^\d+$/.test(t[o])||n.push(t[o]),o+=1;continue}if(/^Знаки урока$/i.test(d)){for(o+=1;o<t.length&&!/^(Произношение|Типичная ошибка|Слова для чтения|Пример и узнавание|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(t[o]);)o+=1;continue}if(c(d)){a.title=d;const u=t.slice(o+1).filter(h=>!/^\d+$/.test(h));a.headers=u.slice(0,3);const m=u.slice(3);for(let h=0;h+2<m.length;h+=3)a.rows.push(m.slice(h,h+3));break}if(l(d)){const u=d,m=[];for(o+=1;o<t.length&&!l(t[o]);)/^\d+$/.test(t[o])||m.push(t[o]),o+=1;m.length&&s.push({title:u,body:m});continue}o+=1}return{goal:n,explanations:s,examples:a}}function c$(e,t,n,s,a,o){const l=Number(a?.latestScore||0),c=E(l,Math.max(1,o)),d=s.goal.length?s.goal.join(" "):(t.body||[]).slice(0,2).join(" ");return`
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
              <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(ps().settings.showRomaji?n.hideRomaji:n.showRomaji)}</button>
              ${gs("textbook",{level:e.slug,subroute:t.id})}
            </div>
          </div>
        </article>
      `}function wc(e,t){return`${String(e||"").toLowerCase()}:${String(t||"")}`}function Kg(e,t){const n=wc(e,t?.id||""),s=t?.focus_characters?.length||0,a=Number(r.kanaLessonCharacterIndex[n]||0);return de(Number.isFinite(a)?a:0,0,s)}function d$(e,t){const n=Array.isArray(e?.rows)?e.rows:[],s=String(t||""),a=n.find(o=>String(o?.[0]||"").includes(s))||n[0]||null;return a?{word:String(a[0]||""),reading:String(a[1]||""),meaning:String(a[2]||"")}:null}function u$(e,t,n,s){const a=t.focus_characters||[];if(!a.length)return"";const o=Kg(e.slug,t),l=o>=a.length,c=a[Math.min(o,a.length-1)],d=`${Math.min(o+1,a.length)} / ${a.length}`,u=E(Math.min(o,a.length),Math.max(1,a.length));if(l)return`
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
      `;const m=zt(e.slug),h=In(e.slug,c.kana),f=ot(m[h]||null),S=d$(s.examples,c.kana),C=ps().settings.showRomaji,x=Tr();return`
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
                ${Br(f.state)}
                <span class="pill">${i(n.cardProgress)} ${i(d)}</span>
              </div>
              <button class="audio-trigger" type="button" data-action="play-kana-tts" data-text="${g(c.kana)}" aria-label="${g(n.tts)}">🔊</button>
            </div>
            <div class="kanji-focus kana-lesson-focus" lang="ja" aria-label="${g(c.kana)}">${i(c.kana)}</div>
            <h3>${i(n.reading)}: ${i(C&&c.romaji?c.romaji:c.kana)}</h3>
            <p class="label">${i(e.title)} · ${i(c.strokes?`${c.strokes} ${n.strokes.toLowerCase()}`:n.characters)} · ${i(Yt(f.dueAt))}</p>
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
      `}function p$(e,t){return e.length?`
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
      `:""}function g$(e,t){if(!e?.rows?.length)return"";const n=e.headers.length===3?e.headers:[t.example,t.reading,t.meaning];return`
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
      `}function m$(e,t,n){return Po(e.slug,t.id),`
      <section class="page textbooks-page n5-course-page kana-course-page kana-practice-page">
        ${pa(e,t.title,n,t.id)}
        <article class="jlpt-lesson-hero">
          <div>
            <span class="pill">${i(n.practice)} ${i(t.order)}</span>
            <h2>${i(t.title)}</h2>
            ${Dg(t.body)}
          </div>
        </article>
        ${t.exercises.map(s=>bc(e.slug,t.id,"practice",s,n)).join("")}
      </section>
    `}function f$(e,t){return Po(e.slug,"final"),`
      <section class="page textbooks-page n5-course-page n5-final-page kana-course-page kana-final-page">
        ${pa(e,t.final,t)}
        <article class="jlpt-lesson-hero">
          <div>
            <span class="pill">${i(t.final)}</span>
            <h2>${i(e.final_test.title)}</h2>
            <p>${i((e.final_test.body||[]).slice(0,4).join(" "))}</p>
          </div>
        </article>
        ${(e.final_test.sections||[]).map(n=>bc(e.slug,"final","final",n,t)).join("")}
      </section>
    `}function h$(e,t){return`
      <section class="page textbooks-page n5-course-page kana-course-page">
        ${pa(e,t.reference,t)}
        <article class="jlpt-section-card">
          <h2>${i(e.reference.title)}</h2>
          ${Dg(e.reference.body)}
        </article>
        <div class="kana-table-grid">
          ${e.base_characters.map(n=>b$(n)).join("")}
        </div>
      </section>
    `}function v$(e,t){return`
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
    `}function w$(e,t){return`
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
            <button class="btn ghost" type="button" data-action="kana-toggle-romaji">${i(ps().settings.showRomaji?n.hideRomaji:n.showRomaji)}</button>
            ${gs("textbook",{level:e.slug})}
          </div>
        </div>
      `}function Dg(e=[]){const t=[];for(const n of e.slice(0,40))/^(Цель раздела|Знаки урока|Произношение|Типичная ошибка|Слова|Пример|Модельные|Набор|Три служебных|Одна мора|Пауза|Гласный|Средняя точка)/i.test(n)?t.push(`<h3>${i(n)}</h3>`):t.push(`<p>${i(n)}</p>`);return t.join("")}function b$(e){return`
        <button class="kana-char-chip" type="button" data-action="play-kana-tts" data-text="${g(e.kana)}">
          <span lang="ja">${i(e.kana)}</span>
          ${ps().settings.showRomaji&&e.romaji?`<small>${i(e.romaji)}</small>`:""}
        </button>
      `}function bc(e,t,n,s,a){const o=y$(e,t,n,s.id),l=r.kanaExerciseDrafts[yc(e,t,n,s.id)]||{};return`
        <form class="jlpt-section-card kana-exercise-card" data-kana-exercise-form data-course="${g(e)}" data-owner="${g(t)}" data-owner-type="${g(n)}" data-exercise="${g(s.id)}">
          <h3>${i(s.label)}</h3>
          <p>${i(s.instruction||"")}</p>
          <div class="kana-exercise-items">
            ${s.items.map(c=>k$(c,o,a,l)).join("")}
          </div>
          ${o?.completed?`<p class="exercise-feedback ${o.passed?"is-correct":"is-wrong"}" aria-live="polite">${i(a.score)}: ${i(o.score)}/${i(o.total)} · ${i(o.passed?a.passed:a.notPassed)}</p>`:""}
          <button class="btn primary" type="button" data-action="kana-submit-exercise">${i(a.check)}</button>
        </form>
      `}function k$(e,t,n,s={}){const a=Object.prototype.hasOwnProperty.call(s,e.number)?s[e.number]:t?.answers?.[e.number]||"",o=t?.completed?t.correct?.[e.number]:null;return`
        <label class="kana-answer-row ${o===!0?"is-correct":o===!1?"is-wrong":""}">
          <span>${i(e.number)}. ${i(e.prompt)}</span>
          <input type="text" name="kana-${g(e.number)}" value="${g(a)}" autocomplete="off" inputmode="text" />
          ${o===null?"":`<small>${i(o?n.correct:`${n.wrong}: ${e.solution||e.accepted_answers?.[0]||""}`)}</small>`}
        </label>
      `}function kc(e=[]){return(e||[]).reduce((t,n)=>t+(n.items||[]).length,0)}function po(e,t){const n=yt(e).lessons[t.id];return n||{completed:!1,passed:!1,latestScore:0,bestScore:0,exercises:{},updatedAt:null}}function y$(e,t,n,s){const a=yt(e);return n==="lesson"?a.lessons?.[t]?.exercises?.[s]||null:n==="practice"?a.practices?.[t]?.exercises?.[s]||null:n==="final"&&(a.finalTest?.[s]||a.finalTest?.sections?.[s])||null}function In(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim(),a=Array.from(s)[0]?.codePointAt(0);return!we(n)||!Number.isInteger(a)?"":`kana:${n}:${a.toString(16).toUpperCase()}`}function fr(e,t=""){const n=String(e||"").trim(),s=n.match(/^kana:(hiragana|katakana):([0-9a-f]+)$/i);if(s){const l=Number.parseInt(s[2],16);return!Number.isInteger(l)||l<=0||l>1114111?null:{slug:s[1].toLowerCase(),kana:String.fromCodePoint(l),id:In(s[1],String.fromCodePoint(l))}}const a=n.match(/^(hiragana|katakana):(.+)$/i);if(a){const l=a[1].toLowerCase(),c=a[2].trim();return{slug:l,kana:c,id:In(l,c)}}const o=String(t||"").toLowerCase();return we(o)&&n?{slug:o,kana:n,id:In(o,n)}:null}function zt(e){const t=String(e||"").toLowerCase();if(!we(t))return{};const n=yt(t),s=n.review&&typeof n.review=="object"?n.review:{};if(wu.has(s))return s;const a={};let o=!1;Object.entries(s).forEach(([d,u])=>{const m=fr(d,t),h=m?.slug===t?m.id:"",f=ot(u);if(!h){a[d]=f;return}const S=a[h];(!S||Number(f.reviewCount||0)>Number(S.reviewCount||0)||(Date.parse(String(f.lastReviewedAt||""))||0)>(Date.parse(String(S.lastReviewedAt||""))||0))&&(a[h]=f),h!==d&&(o=!0)});const l=Object.keys(s).sort().join("|"),c=Object.keys(a).sort().join("|");return n.review=a,wu.add(a),(o||l!==c)&&T(),n.review}function ga(e,t){const n=vn(e),s=String(t||"");if(!n)return null;if(!nl.has(n)){const a=new Map;for(const o of[...n.base_characters||[],...(n.lessons||[]).flatMap(l=>l.focus_characters||[])])a.has(o.kana)||a.set(o.kana,o);nl.set(n,a)}return nl.get(n).get(s)||null}function Fg(e){const t=vn(e)||Ja(e);return t?.title?t.title:String(e||"").toLowerCase()==="katakana"?p()==="ru"?"Катакана":"Katakana":p()==="ru"?"Хирагана":"Hiragana"}function Og(e,t="due"){const n=zt(e.slug),s=Date.now();return(e.base_characters||[]).map(a=>{const o=In(e.slug,a.kana),l=n[o]||null;return{...a,id:o,progress:l}}).filter(a=>t==="all"?!0:Yh(a.progress?[{cardId:a.id,...a.progress}]:[],s).initial.length>0)}function $$(e,t,n,s){return e?n==="lesson"?e.lessons?.find(o=>o.id===t)?.exercises?.find(o=>o.id===s)||null:n==="practice"?e.reading_practice?.find(o=>o.id===t)?.exercises?.find(o=>o.id===s)||null:n==="final"&&e.final_test?.sections?.find(a=>a.id===s)||null:null}function yc(e,t,n,s){const a=[e,n,t,s].map(o=>String(o||"").trim());return a.every(Boolean)?a.join(":"):""}function j$(e){var C;const t=e.closest?.("[data-kana-exercise-form]");if(!t)return;const n=String(t.dataset.course||"").toLowerCase(),s=String(t.dataset.owner||""),a=String(t.dataset.ownerType||""),o=String(t.dataset.exercise||"");if(!we(n))return;const l=vn(n),c=$$(l,s,a,o);if(!l||!c)return;const d=he(),u={},m=yc(n,s,a,o),h=new FormData(t);c.items.forEach(x=>{const L=h.get(`kana-${x.number}`);u[x.number]=Yd(typeof L=="string"?L:"")});const f=pI(c,u),S=yt(n);if(S.currentRoute=s,S.updatedAt=f.updatedAt,a==="lesson"){const x=l.lessons.find(N=>N.id===s),L=S.lessons[s]||{exercises:{},completed:!1,passed:!1,latestScore:0,bestScore:0,updatedAt:null};L.exercises[o]=f;const k=Hd(x?.exercises||[],L.exercises);Object.assign(L,k,{bestScore:Math.max(Number(L.bestScore||0),k.latestScore),updatedAt:f.updatedAt}),S.lessons[s]=L,L.passed&&Bg(l,x?.focus_characters||[])}if(a==="practice"){const x=l.reading_practice.find(N=>N.id===s),L=S.practices[s]||{exercises:{},completed:!1,passed:!1,latestScore:0,bestScore:0,updatedAt:null};L.exercises[o]=f;const k=Hd(x?.exercises||[],L.exercises);Object.assign(L,k,{bestScore:Math.max(Number(L.bestScore||0),k.latestScore),updatedAt:f.updatedAt}),S.practices[s]=L}if(a==="final"){S.finalTest||(S.finalTest={}),(C=S.finalTest).sections||(C.sections={}),S.finalTest.sections[o]=f;const x=Hd(l.final_test?.sections||[],S.finalTest.sections);Object.assign(S.finalTest,x,{bestScore:Math.max(Number(S.finalTest.bestScore||0),x.latestScore),updatedAt:f.updatedAt})}m&&delete r.kanaExerciseDrafts[m],D(f.passed?"answer_correct":"answer_wrong"),T(),ue({scrollPolicy:se.PRESERVE,viewportSnapshot:d})}function S$(e,t){const n=String(e||"").toLowerCase();if(!we(n)||!t)return;const s=he(),a=yt(n);a.writing[t]=new Date().toISOString(),a.currentRoute=t,a.updatedAt=a.writing[t],T(),G(Eg().writeDone),ue({scrollPolicy:se.PRESERVE,viewportSnapshot:s})}function C$(e,t){const n=String(e||"").toLowerCase(),s=wc(n,t);!we(n)||!t||(r.kanaLessonCharacterIndex[s]=0,r.pendingFocus="kana-character-card",We())}function x$(e,t,n,s){const a=String(e||"").toLowerCase();if(!we(a)||!t||!n)return;const o=he(),l=vn(a),c=l?.lessons?.find(k=>k.id===t)||null;if(!l||!c)return;const d=In(a,n);if(!d)return;const u=yt(a),m=zt(a),h=ie(ot(m[d]||null)),f=Be(s)?"forgot":"remember",S=sv(h,f);m[d]=S,u.review=m,u.currentRoute=t,u.updatedAt=new Date().toISOString(),Vt(h,S,f),ye({skipAchievements:!0}),f==="forgot"?(r.progress.totalWrong+=1,r.progress.correctCombo=0,ke("answer_wrong",{cardId:d,kana:n,rating:f},{skipAchievements:!0})):(r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo),ke("answer_correct",{cardId:d,kana:n,rating:f,combo:r.progress.correctCombo},{skipAchievements:!0}));const C=wc(a,t),x=c.focus_characters.findIndex(k=>k.kana===n),L=Kg(a,c);r.kanaLessonCharacterIndex[C]=Math.min((x>=0?x:L)+1,c.focus_characters.length),r.pendingFocus="kana-character-card",D(f==="forgot"?"answer_wrong":"answer_correct"),T(),ue({scrollPolicy:se.PRESERVE,viewportSnapshot:o})}function N$(e,t,n){Af(e,t,n)}function Bg(e,t=[]){const n=zt(e.slug);return Gd(n,t.filter(s=>ga(e.slug,s.kana)).map(s=>In(e.slug,s.kana)))}function zg(e=be){const t=fu.get(r.progress)||new Map;fu.set(r.progress,t);const n=(o,l)=>{const c=t.get(o);return c&&l.every((d,u)=>d===c[u])?!1:(t.set(o,l),!0)},s=new Map;for(const o of[...r.n5KanjiCatalog,...r.n4KanjiCatalog,...r.n3KanjiCatalog,...r.n2KanjiCatalog,...r.n1KanjiCatalog])s.set(o.kanji,[String(o.id),String(o.courseCardId)]);let a=0;if(n("aliases-v1",[r.cards,r.n5KanjiCatalog,r.n4KanjiCatalog,r.n3KanjiCatalog,r.n2KanjiCatalog,r.n1KanjiCatalog])){const o=r.cards.map(l=>({id:String(l.id),aliases:[l.kanji,`kanji:${l.id}`,`card:${l.id}`,...s.get(l.kanji)||[]]}));hu=new Map(o.flatMap(l=>l.aliases.map(c=>[c,l.id]))),a=G1(r.progress.cards,o)}for(const o of e){const l=Ks(o),c=l.course(),d=Object.keys(c.completedLessons||{}).filter(u=>c.completedLessons[u]).sort().join("|");if(n(`jlpt-enrollment-v1:${o}`,[r.cards,l.lessons(),d]))for(const u of l.lessons())pn(o,c,u)&&(a+=Gd(r.progress.cards,l.cardsForLesson(u).map(m=>String(m.id))))}for(const o of["hiragana","katakana"]){const l=vn(o);if(!l)continue;const c=yt(o),d=Object.keys(c.lessons).filter(u=>c.lessons[u]?.passed).sort().join("|");if(n(`kana-enrollment-v1:${o}`,[l,d]))for(const u of l.lessons||[])c.lessons[u.id]?.passed&&(a+=Bg(l,u.focus_characters||[]))}return a&&(Me=null),a>0}function L$(){const e=he(),t=ps();t.settings.showRomaji=!t.settings.showRomaji,T(),ue({scrollPolicy:se.PRESERVE,viewportSnapshot:e})}function A$(e){const t=String(e||"").trim();t&&(To(),tv(t)||G(p()==="ru"?"Системная озвучка недоступна.":"System speech is not available."))}function I$(e){r.activeTextbookLevel="N5",r.activeJlptLesson="N5",fa();const t=String(r.activeTextbookSubroute||"");if(t==="final-test"||t==="final")return W$();if(t==="review")return H$();const n=Jt(t);return n?(re().currentLessonId=n.id,Rt("N5",n.id,"n5_lesson_page"),cn("N5",n,"n5_lesson_page"),G$(e,n)):T$(e)}function T$(e){const t=aj(),n=Ze(),s=et(),a=tj(),o=r.n5Meta||{},l=b(o.principle||{});return`
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
            ${s.map(c=>R$(c)).join("")}
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
    `}function R$(e){const t=Yg(e.id),n=Ze();let s=e.kanji.filter(a=>re().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#textbooks/N5/${g(e.id)}" data-action="n5-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(b(e.title))}</h3>
        <p>${i(b(e.goal))}</p>
        <div class="n5-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(ij(t))}</small>
      </a>
    `}function Xn(){var e;return(e=r.progress).jlptLessonStudy||(e.jlptLessonStudy=Pl()),r.progress.jlptLessonStudy}function Ye(e,t){return`${String(e||"").toUpperCase()}:${String(t||"")}`}function Ut(e,t,n="player"){return`jlpt-${String(e||"").toLowerCase()}-${n}-${String(t||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function $c(e,t){const n=F(e),s=String(t||"");if(!n||!s)return!1;const a=Xt(n),o=pn(n,a,s),l=Qn(n,s).some(c=>je.has(`${n.toLowerCase()}:${c}`));return!!(o||l)}function Ms(e,t,n){const s=Xn(),a=Ye(e,t?.id),o=hp();let l=s.sessions[a];l||(l={...o,level:String(e||"").toUpperCase(),lessonId:String(t?.id||""),startedAt:new Date().toISOString(),updatedAt:new Date().toISOString()},s.sessions[a]=l),l.level=String(e||l.level||"").toUpperCase(),l.lessonId=String(t?.id||l.lessonId||""),l.answers||(l.answers={}),l.phase=vp(l.phase),l.startedAt||(l.startedAt=new Date().toISOString()),l.updatedAt||(l.updatedAt=new Date().toISOString());let c=$c(e,t?.id);!c&&Gg(e,t)&&(c=!0,T());const d=Wo({cards:n,session:l,confirmedCompleted:c});return l.currentIndex=d.currentIndex,l.phase=d.phase,d.status!=="done"&&!c&&(l.completedAt=null),d.status==="test-ready"&&(l.testOpenedAt||(l.testOpenedAt=l.updatedAt||new Date().toISOString())),d.status==="incomplete"&&(l.testOpenedAt=null),s.activeSessionKey=a,s.lastUpdatedAt=new Date().toISOString(),{session:l,key:a,status:d.status,expectedCardIds:d.expectedCardIds,answeredExpectedCardIds:d.answeredExpectedCardIds,answeredCount:d.answeredCount,currentIndex:d.currentIndex,total:d.total}}function _$(e,t){return!e||!Array.isArray(t)||!t.length||e.session?.phase!=="study"?null:t[Math.min(Math.max(Number(e.currentIndex||0),0),t.length-1)]||null}function Ks(e){const t=F(e);return t==="N5"?{level:t,course:re,lessons:et,lessonById:Jt,cardsForLesson:gn,buildExercises:Fs}:t==="N4"?{level:t,course:Q,lessons:ut,lessonById:Zn,cardsForLesson:kr,buildExercises:$a}:t==="N3"?{level:t,course:W,lessons:gt,lessonById:ts,cardsForLesson:$r,buildExercises:Sa}:t==="N2"?{level:t,course:X,lessons:ft,lessonById:ss,cardsForLesson:Sr,buildExercises:xa}:t==="N1"?{level:t,course:ne,lessons:vt,lessonById:Os,cardsForLesson:La,buildExercises:Aa}:null}function P$(e){const t=F(e);return t?`${t.toLowerCase()}Course`:""}function Qn(e,t){const n=F(e),s=String(typeof t=="object"&&t?t.id:t||"").trim(),a=new Set(s?[s]:[]),o=String(n||"").toLowerCase();if(o){const l=s.match(/^lesson-(\d+)$/i);l&&a.add(`${o}-lesson-${l[1]}`);const c=s.match(new RegExp(`^${o}-lesson-(\\d+)$`,"i"));c&&a.add(`lesson-${c[1]}`)}return[...a].filter(Boolean)}function pn(e,t,n){const s=t?.completedLessons||{};return Qn(e,n).some(a=>!!s[a])}function E$(e,t){if(!e||!t)return null;const n=e.lessons(),s=n.find(o=>Number(o.order||0)===Number(t.order||0)+1);if(s)return s;const a=n.findIndex(o=>o.id===t.id);return a>=0&&n[a+1]||null}function jc(e,t,n=""){if(!e||!t)return"";const s=e.lessons(),a=[...new Set([n,...Qn(e.level,t)].map(String).filter(Boolean))];for(const o of a){const l=o.match(/^(.*?)(\d+)$/);if(!l)continue;const c=Number(l[2])+1;if(s.length&&c>s.length)continue;const d=`${l[1]}${c}`,u=e.lessonById(d);return u&&u.id!==t.id?u.id:d}return""}function M$(e,t,n){if(!e||!t||!n)return;const s=e.lessons(),a=e.lessonById(t.currentLessonId);if(!(a?pn(e.level,t,a)||pn(e.level,t,t.currentLessonId):!t.currentLessonId||t.currentLessonId===n.id||pn(e.level,t,t.currentLessonId)))return;const l=s.find(c=>!pn(e.level,t,c));t.currentLessonId=l?.id||jc(e,n,t.currentLessonId)||a?.id||n.id}function K$(e,t){const n=F(e);if(!n||!t)return!1;if([t.completedLessons,t.studiedKanji,t.srsKanji,t.difficultKanji,t.exerciseResults,t.completedExercises].some(o=>o&&typeof o=="object"&&Object.keys(o).length>0))return!0;const a=`${n}:`;return Object.keys(r.progress?.jlptLessonStudy?.sessions||{}).some(o=>o.startsWith(a))}function Ug(e,t){const n=F(e);return`${String(n||e||"").toLowerCase()}:${String(t||"")}`}function Jg(e,t){const n=Ks(e);if(!n)return null;const s=typeof t=="object"&&t?t:n.lessonById(t);if(!s)return null;const a=n.course(),o=n.cardsForLesson(s),l=n.buildExercises(s),c=r.progress?.jlptLessonStudy?.sessions?.[Ye(n.level,s.id)]||null,d=$c(n.level,s.id);return{...XI({cards:o,session:c,confirmedCompleted:d,exercises:l,exerciseResults:a.exerciseResults||{},completedExercises:a.completedExercises||{},isCardStudied:u=>!!(a.studiedKanji?.[u.kanji]||a.difficultKanji?.[u.kanji]||Ep(u))}),level:n.level,lesson:s,course:a,cards:o,exercises:l}}function D$(e,t,n,s){const a=F(e);if(!a||!t)return!1;const o=Xn(),l=Ye(a,t),c=o.sessions[l];return c?(c.phase="done",c.completedAt=s,c.updatedAt=s,c.currentIndex=Math.max(0,Number(n||0)),o.activeSessionKey=l,o.lastUpdatedAt=s,!0):!1}function F$(e,t,n,s,a=new Date().toISOString()){const o=Ks(e);if(!o||!t||!n)return!1;Gd(r.progress.cards,(s||o.cardsForLesson(t)).map(k=>String(k.id)))&&(Me=null);const l=P$(o.level),c=l&&r.progress?.[l]||n;l&&r.progress&&!r.progress[l]&&(r.progress[l]=c),c.completedLessons||(c.completedLessons={});const d=Qn(o.level,t),u=d.some(k=>!!c.completedLessons[k]),m=d.map(k=>c.completedLessons[k]).find(Boolean)||a;d.forEach(k=>{c.completedLessons[k]=m}),n!==c&&(n.completedLessons||(n.completedLessons={}),d.forEach(k=>{n.completedLessons[k]=m})),d.forEach(k=>je.add(Ug(o.level,k))),D$(o.level,t.id,s?.length||0,m);const h=E$(o,t),f=o.lessonById(c.currentLessonId),S=h?.id||jc(o,t,c.currentLessonId)||t.id,C=Qn(o.level,c.currentLessonId),x=C.some(k=>d.includes(k)),L=C.some(k=>!!c.completedLessons[k]);return(!c.currentLessonId||c.currentLessonId===t.id||f?.id===t.id||x||L)&&(c.currentLessonId=S),M$(o,c,t),n!==c&&(n.currentLessonId=c.currentLessonId),vr(o.level),!u}function Gg(e,t){const n=Jg(e,t);if(!n)return!1;const s=pn(n.level,n.course,n.lesson),a=Qn(n.level,n.lesson).some(l=>je.has(Ug(n.level,l))),o=!!(n.cardStudyComplete&&n.exerciseComplete);return s||!(n.canMigrateCompletion||o||a)?!1:F$(n.level,n.lesson,n.course,n.cards)}function hr(e,t){const n=Jg(e,t);return n?n.complete?"completed":n.study.answeredCount>0||n.cardStudyComplete||n.correctExerciseCount>0||(n.lesson.kanji||[]).some(a=>n.course.studiedKanji?.[a]||n.course.difficultKanji?.[a])?"started":"new":"new"}function Ds(e){const t=Ks(e);return t?t.lessons().filter(n=>hr(t.level,n.id)==="completed").length:0}function vr(e){var o;const t=F(e),n={N5:"N4",N4:"N3",N3:"N2",N2:"N1"}[t],a=Ks(t)?.lessons()||[];return!t||!n||!a.length||Ds(t)<a.length?!1:((o=r.progress).unlockedJlptLevels||(o.unlockedJlptLevels=[]),[t,n].forEach(l=>{r.progress.unlockedJlptLevels.includes(l)||r.progress.unlockedJlptLevels.push(l)}),!0)}function O$(e){const t=Array.isArray(e)?e:[];return t.length?`
      <ul class="example-list lesson-study-example-list">
        ${t.slice(0,2).map(jo).join("")}
      </ul>
    `:""}function B$(e){const t=Da(e),n=t.length>0;return`
      <details class="lesson-study-details">
        <summary>${i(p()==="ru"?"Показать подробнее":"Show details")}</summary>
        <div class="lesson-study-details-body">
          ${Zc(e)}
          ${n?`
            <div>
              <h3>${i(_("strokeOrder"))}</h3>
              <ol class="stroke-list lesson-study-strokes">${t.map(s=>`<li>${i(s)}</li>`).join("")}</ol>
            </div>
          `:""}
        </div>
      </details>
    `}function z$(e,t,n,s,a,o,l={}){if(!n)return"";const c=typeof l.examples=="function"?l.examples(n,t)||[]:[],d=typeof l.sentence=="function"?l.sentence(n,t):"",u=typeof l.extra=="function"?l.extra(n,t):"",m=l.answerAction||"jlpt-lesson-answer",h=String(e||n.jlpt||"").toUpperCase(),f=Number(s||0),S=J(n.id),C=t?.id||"";return`
      <article class="lesson-player-card lesson-study-card">
        <div class="lesson-player-kanji">
          <div class="lesson-player-glyph">${i(n.kanji)}</div>
          <div class="lesson-player-kanji-copy">
            <div class="tag-row compact-tags">
              <span class="pill">${i(o.step)} ${i(f+1)}</span>
              <span class="pill">${i(S.state)}</span>
              ${n.jlpt?`<span class="pill">${i(n.jlpt)}</span>`:""}
              ${n.strokes?`<span class="pill">${i(n.strokes)} ${i(_("strokes"))}</span>`:""}
              ${uf(n)}
            </div>
            <h2>${i(K(n))}</h2>
            <p class="label lesson-study-progress-label">${i(e||n.jlpt||"")} · ${i(p()==="ru"?`Кандзи ${Math.min(f+1,a)} из ${a}`:`Kanji ${Math.min(f+1,a)} of ${a}`)}</p>
            <dl class="n5-readings lesson-study-readings">
              ${gf(n,"onyomi",o.onyomi,n.onyomi)}
              ${gf(n,"kunyomi",o.kunyomi,n.kunyomi||n.hiragana)}
            </dl>
            ${O$(c)}
            ${d}
            ${u?`<div class="lesson-study-extra">${u}</div>`:""}
            ${B$(n)}
          </div>
        </div>
        <div class="lesson-choice-grid lesson-study-actions">
          <button class="btn success" type="button" data-action="${g(m)}" data-level="${g(h)}" data-lesson="${g(C)}" data-card="${g(n.id)}" data-value="remember">${i(o.remember)}<small>${i(p()==="ru"?"в повторение":"to review")}</small></button>
          <button class="btn danger" type="button" data-action="${g(m)}" data-level="${g(h)}" data-lesson="${g(C)}" data-card="${g(n.id)}" data-value="forget">${i(o.notRemember)}<small>${i(p()==="ru"?"ещё раз":"show again")}</small></button>
        </div>
      </article>
    `}function U$(e,t,n,s,a,o="test-ready"){const l=o==="done";return`
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
    `}function J$(e,t,n){return`
      <article class="lesson-player-card lesson-study-complete lesson-study-unavailable">
        <div class="lesson-study-complete-copy">
          <span class="pill danger-pill">${i(e||"")} · ${i(p()==="ru"?"карточки недоступны":"cards unavailable")}</span>
          <h2>${i(p()==="ru"?"Не удалось загрузить карточки урока":"Could not load lesson cards")}</h2>
          <p>${i(Ei())}</p>
          <div class="actions">
            <button class="btn primary" type="button" data-action="retry-jlpt-course-data" data-level="${g(e)}">${i(p()==="ru"?"Повторить":"Retry")}</button>
            <a class="btn ghost" href="#textbooks/${g(e)}">${i(p()==="ru"?"К списку уроков":"Lesson list")}</a>
          </div>
        </div>
      </article>
    `}function ma(e,t,n,s,a={}){const o=Ms(e,t,n),l=_$(o,n),c=Number(o.answeredCount||0),d=Number(o.total||0),u=a.playerId||Ut(e,t?.id,"player"),m=d?E(c,d):0,h=l?`${p()==="ru"?"Кандзи":"Kanji"} ${Math.min(c+1,d)}/${d}`:o.session?.phase==="done"?p()==="ru"?"Урок завершён":"Lesson complete":o.status==="incomplete"?p()==="ru"?"Карточки не загружены":"Cards not loaded":p()==="ru"?"Карточки изучены":"Cards studied",f=l?K(l):o.status==="done"?s.lessonComplete:h;return`
      <article class="study-card lesson-player lesson-study-player" id="${g(u)}">
        <div class="lesson-player-progress">
          <span>${i(h)}</span>
          <strong>${i(f)}</strong>
          <div class="meter"><i style="width:${m}%"></i></div>
        </div>
        ${l?z$(e,t,l,o.currentIndex,d,s,a):o.status==="incomplete"?J$(e):U$(e,t,s,d,c,o.status)}
      </article>
    `}function G$(e,t){const n=Ze(),s=gn(t),a=Fs(t),o=Yg(t.id),l=Ms("N5",t,s);let c=o==="completed";const d=`n5:${t.id}`;je.has(d)&&(c=!0);const u=c,m=a.filter(q=>Cc(q.id)?.correct).length,h=a.length>0&&m===a.length,f=s.filter(q=>re().studiedKanji[q.kanji]).length,S=t.kanji.length,C=f>=S,x=!c&&h&&C,L=t.kanji.filter(q=>re().difficultKanji[q]).join(" · "),k=et().find(q=>q.order===t.order+1),N=Ut("N5",t.id,"player"),z=Ut("N5",t.id,"test");return`
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

        ${ma("N5",t,s,n,{playerId:N,answerAction:"jlpt-lesson-answer",examples:q=>qt(q),sentence:q=>q$(q,t)})}

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
            ${a.map(q=>qg(q)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(q=>re().studiedKanji[q.kanji]).length}/8</span>
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
    `}function q$(e,t){const n=t.sentences.find(s=>s.jp.includes(e.kanji))||t.sentences[0];return n?`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(ee(n.reading||""))}</span>
        <small>${i(b({ru:n.ru,en:n.en}))}</small>
      </div>
    `:""}function qg(e){const t=Ze(),n=Cc(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&Yn("N5",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(b(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(lm(e.id))}" type="text" maxlength="2" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(b(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n5-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Hg(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(b(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${va("N5",e).map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n5-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Hg(e,n)}
      </article>
    `}function Hg(e,t){if(!t)return"";const n=Ze(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function H$(e){const t=Ze(),n=re().activeReviewMode||"due",s=Cj(n);return`
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
          ${s.map((a,o)=>V$(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function V$(e,t){const n=Ze(),s=J(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Yt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(qt(e)[0]?.word||e.hiragana||"")} · ${i(qt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n5-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function W$(e){const t=Ze(),n=r.n5FinalTest||{},s=im(),a=re().finalTest,o=hn(a,s),l=o.answered,c=o.ready,d=r.finalTestBusy;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const h=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==h)&&(a.percent=h),a.completedAt||(a.completedAt=new Date().toISOString()),T()}const u=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,m=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
            ${Qt("N5","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((h,f)=>X$(h,f)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n5-final-submit" ${d||u?"disabled":""}>${i(u?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Qt("N5","btn ghost")}
          <button class="btn ghost" type="button" data-action="n5-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function X$(e,t){const n=re().finalTest.answers?.[e.id],s=!!re().finalTest.completedAt,a=r.finalTestModal&&r.finalTestModal.level==="N5"&&r.finalTestModal.kind==="warning"?r.finalTestModal:null,o=!!(a&&Array.isArray(a.missingIds)&&a.missingIds.includes(e.id));return`
      <article id="${g(Lr("n5",e.id))}" class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":o?"is-missing":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(l=>{const c=n===l.value;return`<button class="btn ${s&&l.value===e.answer?"success":c?"primary":"ghost"}" type="button" data-action="n5-final-answer" data-id="${g(e.id)}" data-value="${g(l.value)}">${i(l.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Ze().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Ze(){return p()==="ru"?{title:"JLPT N5",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",courseMap:"Полноценный интерактивный учебник N5",continue:"Продолжить",review:"Повторять N5",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",reviews:"Повторения",difficult:"Сложные",filterDifficult:"фильтр",srs:"Повторение",lessons:"уроков",lessonsTitle:"10 уроков по 8 кандзи",lessonsDescription:"Каждый урок ведёт от знака к слову, предложению, упражнению, письму и повторению.",reviewPlan:"План повторения на 30 дней",day:"день",lesson:"Урок",backToN5:"К N5",lessonChain:"Кандзи -> слово -> предложение -> практика",lessonChainText:"Сначала узнаёшь знак, затем видишь чтение в слове, читаешь предложение, отвечаешь и отправляешь карточку в повторение.",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Читай вслух: так чтение перестаёт быть отдельной таблицей.",exercisesText:"Смешанная практика работает внутри урока и повторения.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока доступны в повторении.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда все 8 кандзи добавлены в повторение.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",remember:"Помню",notRemember:"Не помню",details:"Показать подробнее",completed:"Пройдено",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N5-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N5.",noReviewCards:"Сейчас нет карточек в этом фильтре.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N5",finalPassed:"N5 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N5",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",courseMap:"Full interactive N5 textbook",continue:"Continue",review:"Review N5",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",reviews:"Reviews",difficult:"Difficult",filterDifficult:"filter",srs:"Review",lessons:"lessons",lessonsTitle:"10 lessons, 8 kanji each",lessonsDescription:"Each lesson moves from sign to word, sentence, exercise, writing, and SRS.",reviewPlan:"30-day review plan",day:"day",lesson:"Lesson",backToN5:"To N5",lessonChain:"Kanji -> word -> sentence -> practice",lessonChainText:"First recognize the sign, then see the reading in a word, read a sentence, answer, and send the card to SRS.",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud so readings stop feeling like a separate table.",exercisesText:"Mixed practice works inside lessons and review.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N5 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when all 8 kanji are in review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N5 review",reviewDescription:"Review due cards, difficult kanji, or the full N5 set.",noReviewCards:"No cards in this filter right now.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N5",finalPassed:"N5 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Vg(){return p()==="ru"?{title:"Чтение и самопроверка",description:"Тексты из md-файла для чтения вслух и проверки понимания по вопросам ниже.",questions:"Проверочные вопросы",noQuestions:"В этом тексте пока нет вопросов.",texts:"текстов",genre:"Жанр",source:"Опора",goal:"Цель"}:{title:"Reading and self-check",description:"Texts from the md file for reading aloud and checking understanding with the questions below.",questions:"Check questions",noQuestions:"No questions are listed for this text.",texts:"texts",genre:"Genre",source:"Source",goal:"Goal"}}function Wg(e){return F(e)||String(e||"").toUpperCase()}function Xg(e){const t=Wg(e);return Array.isArray(r.jlptReadingByLevel?.[t])?r.jlptReadingByLevel[t]:[]}function Sc(e){const t=r.jlptReadingTranslations?.[String(e?.id||"")]||{};return{title:{ru:String(t.titleRu||e?.title||"").trim(),en:String(t.titleEn||e?.title||"").trim()},translation:{ru:String(t.ru||"").trim(),en:String(t.en||"").trim()}}}function Qg(e){return ee(Ta(String(e?.text||"")).replace(/\s+/g," ").trim())}function Q$(e){const t=F(e);return t==="N5"?{maxBlanks:2,maxBlankChars:4}:t==="N4"?{maxBlanks:2,maxBlankChars:5}:t==="N3"?{maxBlanks:3,maxBlankChars:6}:t==="N2"?{maxBlanks:3,maxBlankChars:7}:{maxBlanks:4,maxBlankChars:8}}function Y$(){const e=Array.isArray(r.cards)?r.cards:[];if(!e.length)return[];const t=[];return be.forEach(n=>{Xg(n).forEach((s,a)=>{const o=Sc(s),l=Qg(s),c=Jc({id:`jlpt-md-${s.id}`,jlpt:n,sentence:s.text||"",reading:l,translationRu:o.translation.ru,translationEn:o.translation.en,source:"markdown",sourceId:String(s.id||""),genre:s.genre||"",goal:s.goal||""},e,Q$(n));c&&(c.kind="cloze",c.tiles=zs(c,e),c.source="markdown",c.sourceId=String(s.id||""),c.sourceKind="markdown",c.sourceTitle=o.title,c.title=o.title,c.genre=s.genre||"",c.goal=s.goal||"",c.passageSource=s.source||"",c.questions=Array.isArray(s.questions)?s.questions:[],c.level=n,c.order=a+1,t.push(c))})}),t}function Z$(e){const t=Sc(e),n=Qg(e),s=n?hf(n):"",a=b(t.translation);return`
      <details class="reading-translation-wrap jlpt-reading-translation">
        <summary class="btn ghost reading-translation-toggle" role="button">${i(Qc())}</summary>
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
            <span>${i(Qc())}</span>
            <strong>${i(a||(p()==="ru"?"Нет данных":"No data"))}</strong>
          </div>
        </div>
      </details>
    `}function wr(e){const t=Xg(e);if(!t.length)return"";const n=Vg(),s=Wg(e),a=Ga(s,"textbook_reading_block"),o=Pr(s);return(a||o)&&T(),`
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
          ${t.map((l,c)=>ej(l,s,c)).join("")}
        </div>
      </section>
    `}function ej(e,t,n){const s=Vg(),a=Sc(e),o=Array.isArray(e?.questions)?e.questions:[];return`
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
        ${Z$(e)}
        <details class="jlpt-reading-questions">
          <summary>${i(s.questions)}${o.length?` · ${o.length}`:""}</summary>
          ${o.length?`<ol>${o.map(l=>`<li>${i(l)}</li>`).join("")}</ol>`:`<p>${i(s.noQuestions)}</p>`}
        </details>
      </article>
    `}function fa(){var s;(s=r.progress).n5Course||(s.n5Course=Ml());const e=et();!Jt(r.progress.n5Course.currentLessonId)&&e[0]&&(r.progress.n5Course.currentLessonId=e[0].id);const n=e.find(a=>!r.progress.n5Course.completedLessons[a.id]);return!r.progress.n5Course.currentLessonId&&n&&(r.progress.n5Course.currentLessonId=n.id),r.progress.n5Course}function re(){return r.progress.n5Course||fa()}function et(){return r.n5Textbook?.items||[]}function Jt(e){const t=String(e||"");return t&&et().find(n=>n.id===t||n.id===`n5-${t}`||n.id.endsWith(`-${t}`))||null}function tj(){return Jt(re().currentLessonId)||et().find(e=>!re().completedLessons[e.id])||et()[0]||null}function gn(e){return(e?.kanji||[]).map(t=>sj(t,e)).filter(Boolean)}function Gt(){return qa("N5",nj)}function nj(){const e=new Set;return et().flatMap(t=>gn(t)).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function sj(e,t=null){const n=String(e||""),s=r.n5KanjiCatalog?.find(l=>l.kanji===n)||null,a=r.cards.find(l=>l.kanji===n&&String(l.jlpt||"").toUpperCase()==="N5")||r.cards.find(l=>l.kanji===n)||null,o=t?.id||s?.lessonId||null;return a&&s?Ki({...a,lessonId:a.lessonId||o},s):a||(s?Ki({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:o,jlpt:"N5",examples:[]},s):null)}function ha(e,t=[]){const n=(Array.isArray(t)?t:[]).slice(0,3).map(s=>({...s,reading:ee(s.reading||s.hiragana||s.kana||e.hiragana||"")}));return n.length?n:[{word:e.kanji,reading:ee(e.hiragana||""),romaji:e.romaji||"",translation:K(e)}]}function qt(e){return ha(e,e.examples)}function rj(e,t){const n=t?.word||e.kanji,s=ee(t?.reading||e.hiragana||"");return p()==="ru"?`Свяжи ${e.kanji} со значением «${K(e)}» и сразу проговори слово: ${n}${s?` (${s})`:""}.`:`Connect ${e.kanji} with "${K(e)}" and say the word right away: ${n}${s?` (${s})`:""}.`}function aj(){const e=Gt(),t=re(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{J(s.id).state!=="New"&&n.add(s.kanji)}),{total:r.n5Meta?.kanjiCount||e.length||80,studied:n.size,completedLessons:go(),reviews:e.reduce((s,a)=>s+Number(J(a.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Yg(e){return hr("N5",e)}function ij(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function go(){return Ds("N5")}function Fs(e){const t=gn(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n5Exercises?.types||[]).map(x=>[x.type,x.title])),a=Object.fromEntries((r.n5Exercises?.types||[]).map(x=>[x.type,x])),o=x=>a[x]||{rewardXp:r.n5Meta?.rewards?.exerciseXp||7,rewardMoon:r.n5Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:mn({value:c.id,label:K(c)},t.slice(1).map(x=>({value:x.id,label:K(x)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:mn({value:d.kanji,label:d.kanji},t.filter(x=>x.id!==d.id).map(x=>({value:x.kanji,label:x.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=qt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word,answer:m.reading,answerLabel:m.reading,kanji:u.kanji,cardId:u.id,options:mn({value:m.reading,label:m.reading},t.flatMap(x=>qt(x).map(L=>({value:L.reading,label:L.reading}))).filter(x=>x.value!==m.reading),3),...o("reading")});const h=n[0];h&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:b({ru:h.ru,en:h.en}),answerLabel:b({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:mn({value:b({ru:h.ru,en:h.en}),label:b({ru:h.ru,en:h.en})},n.slice(1).map(x=>({value:b({ru:x.ru,en:x.en}),label:b({ru:x.ru,en:x.en})})),1),...o("sentence")});const f=t[3]||t[0],S=qt(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Insert the word"},prompt:Ya(S),answer:S.word,answerLabel:S.word,kanji:f.kanji,cardId:f.id,options:mn({value:S.word,label:S.word},t.flatMap(x=>qt(x).map(L=>({value:L.word,label:L.word}))).filter(x=>x.value!==S.word),2),...o("missing-word")});const C=t[4]||t[0];return l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(C)}`:`Type the kanji for: ${K(C)}`,answer:C.kanji,answerLabel:C.kanji,kanji:C.kanji,cardId:C.id,options:[],...o("active-recall")}),l.slice(0,r.n5Exercises?.lessonQuestionCount||6).map(x=>({...x,level:"N5",lessonId:e.id}))}function mn(e,t,n=0){const s=new Set([String(e.value)]),a=[e];if(t.forEach(c=>{const d=String(c.value||"");!d||s.has(d)||a.length>=4||(s.add(d),a.push(c))}),Gt().forEach(c=>{if(a.length>=4)return;const d={value:c.id,label:c.kanji};s.has(String(d.value))||(s.add(String(d.value)),a.push(d))}),a.length<=1)return a;const l=n%a.length;return[...a.slice(l),...a.slice(0,l)]}function oj(){return r.route==="review"?`review:${r.reviewSession?.startedAt||"active"}`:`route:${r.route}:${r.activeTextbookLevel||""}:${r.activeTextbookSubroute||""}`}function lj(...e){return[oj(),...e].map(t=>String(t??"").trim().replace(/\s+/g," ")).join(":")}function Zg(e,...t){const n=Array.isArray(e)?e:[];if(n.length<=1)return n;r.answerOptionOrders||(r.answerOptionOrders={});const s=lj(...t),a=GI(n,r.answerOptionOrders[s]);return r.answerOptionOrders[s]=a.order,a.options}function va(e,t){return Zg(t?.options||[],"textbook",e,t?.lessonId||"",t?.id||"")}function cj(e,t,n=0){return Zg(t?.options||[],"reading",e?.level||"",e?.exerciseId||"",t?.id||n)}function em(e){for(const t of et()){const n=Fs(t).find(s=>s.id===e);if(n)return n}return null}function Yn(e,t,n=""){return r.route==="review"&&r.activeExerciseReviewLevel===String(e||"").toUpperCase()&&String(r.activeExerciseReviewId||"")===String(t||"")&&(!n||String(r.activeExerciseReviewSource||"")===String(n||""))}function wa(e,t,n){return Yn(e,n)?r.reviewExerciseResults?.[String(n)]||null:t.exerciseResults?.[String(n)]||null}function dj(e,t,n){const s=F(t);if(!e||!s||!n)return null;e.exerciseSrs||(e.exerciseSrs={});const a=e.exerciseSrs[String(n.id)]||null;if(a)return qs(a,{level:s,lessonId:n.lessonId||a.lessonId||"",exerciseId:n.id,cardId:n.cardId||a.cardId||"",kanji:n.kanji||a.kanji||"",type:n.type||a.type||"",title:n.title||a.title||null,prompt:n.prompt||a.prompt||"",answer:n.answer||a.answer||"",answerLabel:n.answerLabel||a.answerLabel||""});const o=Rr(s,n.lessonId||"",n.id,n);return e.exerciseSrs[String(n.id)]=o,o}function uj(e,t,n,s){if(!e||!n)return;const a=F(t);a&&(e.exerciseSrs||(e.exerciseSrs={}),e.exerciseSrs[String(n.id)]=qs(s,{level:a,lessonId:n.lessonId||s?.lessonId||"",exerciseId:n.id,cardId:n.cardId||s?.cardId||"",kanji:n.kanji||s?.kanji||"",type:n.type||s?.type||"",title:n.title||s?.title||null,prompt:n.prompt||s?.prompt||"",answer:n.answer||s?.answer||"",answerLabel:n.answerLabel||s?.answerLabel||""}))}function ba(e,t,n,s,a,o={}){const l=F(e);if(!l||!t||!n)return;const c=new Date().toISOString(),d=Yn(l,n.id),u=he(),m=d?se.TOP:se.PRESERVE,h=!!o.quietReward;if(d&&r.reviewExerciseResults?.[n.id])return;const f={selected:s,correct:a,checkedAt:c};d?(r.reviewExerciseResults||(r.reviewExerciseResults={}),r.reviewExerciseResults[n.id]=f,r.reviewQueueLastKind="exercise"):t.exerciseResults[n.id]=f;const S=ie(dj(t,l,n)||Rr(l,n.lessonId||"",n.id,n)),C=$e(S,a?"good":"again");if(uj(t,l,n,C),Vt(S,C,a?"good":"again"),ye(),a){if(r.progress.totalCorrect+=1,!d&&!t.completedExercises[n.id]){t.completedExercises[n.id]=c,o.markCompleted?.(c),(o.markStudied||(()=>{}))();const L=Number(o.rewardXp||0),k=Number(o.rewardMoon||0);(L||k)&&H(L,k,o.rewardKey||`exercise:${n.id}`,{silent:h})}}else if(r.progress.totalWrong+=1,o.markWrong?.(),(o.markDifficult||(()=>{}))(),n.type==="reading"||n.type==="missing-word"){const L=n.answerLabel||n.answer;L&&o.markWordMistake?.(L)}ue({scrollPolicy:m,viewportSnapshot:u}),T(),Kt("textbook exercise post-render effects",()=>{D(a?"answer_correct":"answer_wrong"),Z({silent:h})},{scrollPolicy:m,viewportSnapshot:u})}function tm(e){const t=F(e?.level||"");return t==="N5"?{xp:Number(r.n5Meta?.rewards?.exerciseXp||7),moon:Number(r.n5Meta?.rewards?.exerciseMoon||1)}:t==="N4"?{xp:Number(r.n4Meta?.rewards?.readingXp||r.n4Meta?.rewards?.exerciseXp||10),moon:Number(r.n4Meta?.rewards?.readingMoon||r.n4Meta?.rewards?.exerciseMoon||1)}:t==="N3"?{xp:Number(r.n3Meta?.rewards?.readingXp||r.n3Meta?.rewards?.exerciseXp||10),moon:Number(r.n3Meta?.rewards?.readingMoon||r.n3Meta?.rewards?.exerciseMoon||1)}:t==="N2"?{xp:Number(r.n2Meta?.rewards?.readingXp||r.n2Meta?.rewards?.exerciseXp||10),moon:Number(r.n2Meta?.rewards?.readingMoon||r.n2Meta?.rewards?.exerciseMoon||1)}:{xp:Number(r.n1Meta?.rewards?.readingXp||r.n1Meta?.rewards?.exerciseXp||10),moon:Number(r.n1Meta?.rewards?.readingMoon||r.n1Meta?.rewards?.exerciseMoon||1)}}function nm(e,t,n,s={}){if(!e?.id)return;const a=new Date().toISOString(),o=Yn(e.level,e.id,"reading"),l=he(),c=o?se.TOP:se.PRESERVE,d=!!s.quietReward,u=ie(ds(e)||cs(e));if(r.reviewExerciseResults||(r.reviewExerciseResults={}),e.kind==="cloze"){u.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():u.selectedIndices||[],u.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(z=>({kanji:String(z?.kanji||""),reading:String(z?.reading||"")})).filter(z=>z.kanji):u.selectedTiles||[],u.selectedText=String(t||""),u.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.slice():u.wrongIndexes||[],u.completed=!0,u.completedAt=a,u.correct=!!n,u.answers={cloze:{selected:String(t||""),correct:!!n,checkedAt:a}},Hs(e,u),r.reviewExerciseResults[e.id]=ie(u),n?r.progress.totalCorrect+=1:r.progress.totalWrong+=1;const L=ie(u),k=$e(L,n?"good":"again");k.selectedIndices=u.selectedIndices,k.selectedTiles=u.selectedTiles,k.selectedText=u.selectedText,k.wrongIndexes=u.wrongIndexes,k.completed=!0,k.completedAt=a,k.correct=!!n,k.answers=u.answers,Hs(e,k),r.reviewExerciseResults[e.id]=ie(k),Vt(L,k,n?"good":"again"),ye();const N=tm(e);n?H(N.xp,N.moon,`reading:${e.id}`,{silent:d}):H(Math.max(1,Math.round(N.xp*.35)),0,`reading:${e.id}:again`,{silent:d}),o&&Mo("reading-cloze"),ue({scrollPolicy:c,viewportSnapshot:l}),T(),Kt("reading cloze post-render effects",()=>{D(n?"answer_correct":"answer_wrong"),Z({silent:d})},{scrollPolicy:c,viewportSnapshot:l});return}const m=e.question||e.questions?.[0]||null,h=String(s.questionKey||m?.id||e.id);if(u.answers||(u.answers={}),u.answers[h])return;if(u.answers[h]={selected:String(t||""),correct:!!n,checkedAt:a},u.completed=!!h&&Object.keys(u.answers).length>=od(),u.completedAt=u.completed?a:u.completedAt||null,u.correct=u.completed?Object.values(u.answers).every(L=>!!L?.correct):!1,u.selectedText=String(t||""),Hs(e,u),r.reviewExerciseResults[e.id]=ie(u),n?r.progress.totalCorrect+=1:r.progress.totalWrong+=1,T(),!u.completed){ue({scrollPolicy:c,viewportSnapshot:l}),Kt("reading question post-render sound",()=>{D(n?"answer_correct":"answer_wrong")},{scrollPolicy:c,viewportSnapshot:l});return}const f=ie(u),S=Object.values(u.answers).every(L=>!!L?.correct),C=$e(f,S?"good":"again");C.answers=u.answers,C.completed=!0,C.completedAt=a,C.correct=S,C.selectedText=String(t||""),C.wrongQuestions=Object.entries(u.answers).filter(([,L])=>!L?.correct).map(([L])=>L),Hs(e,C),r.reviewExerciseResults[e.id]=ie(C),Vt(f,C,S?"good":"again"),ye();const x=tm(e);S?H(x.xp,x.moon,`reading:${e.id}`,{silent:d}):H(Math.max(1,Math.round(x.xp*.25)),0,`reading:${e.id}:again`,{silent:d}),o&&Mo("reading-exercise"),ue({scrollPolicy:c,viewportSnapshot:l}),T(),Kt("reading exercise post-render effects",()=>{D(n?"answer_correct":"answer_wrong"),Z({silent:d})},{scrollPolicy:c,viewportSnapshot:l})}function pj(e){const t=Ar();if(!t||t.source!=="reading"||!t.exercise)return;const n=t.exercise.question||t.exercise.questions?.[0]||null;if(!n)return;const s=String(e.dataset.value||""),a=s===String(n.answer||"");nm(t.exercise,s,a,{questionKey:String(e.dataset.question||n.id||t.exercise.id),quietReward:!0})}function gj(e){const t=Ar();if(!t||t.source!=="reading"||t.exercise?.kind!=="cloze")return;const n=t.exercise,s=ie(ds(n)||cs(n));if(s.completed||s.selectedIndices?.includes(e))return;const a=Math.max(1,Ht(n).length);if(s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.slice():[],s.selectedIndices.length>=a){G(p()==="ru"?"Все пропуски уже заполнены.":"All blank slots are already filled.");return}if(s.selectedIndices.push(e),s.selectedTiles=s.selectedIndices.map(o=>n.tiles?.[o]).filter(Boolean),s.selectedText=s.selectedTiles.map(o=>o.kanji).join(""),Hs(n,s),r.activeExerciseReviewSelection=s.selectedIndices.slice(),r.reviewExerciseResults[n.id]=ie(s),T(),s.selectedIndices.length>=a){sm();return}P()}function mj(){const e=Ar();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=ie(ds(t)||cs(t));n.completed||!n.selectedIndices?.length||(n.selectedIndices=n.selectedIndices.slice(0,-1),n.selectedTiles=n.selectedIndices.map(s=>t.tiles?.[s]).filter(Boolean),n.selectedText=n.selectedTiles.map(s=>s.kanji).join(""),r.activeExerciseReviewSelection=n.selectedIndices.slice(),r.reviewExerciseResults[t.id]=ie(n),Hs(t,n),T(),P())}function fj(){const e=Ar();if(!e||e.source!=="reading"||!e.exercise)return;const t=e.exercise,n=ie(ds(t)||cs(t));n.completed||(n.selectedIndices=[],n.selectedTiles=[],n.selectedText="",n.wrongIndexes=[],r.activeExerciseReviewSelection=[],r.reviewExerciseResults[t.id]=ie(n),Hs(t,n),T(),P())}function sm(){const e=Ar();if(!e||e.source!=="reading"||e.exercise?.kind!=="cloze")return;const t=e.exercise,n=Ht(t),s=ie(ds(t)||cs(t)),a=Array.isArray(s.selectedIndices)?s.selectedIndices:[];if(a.length<n.length){G(p()==="ru"?"Заполни все пропуски перед проверкой.":"Fill every blank before checking.");return}const o=a.map(d=>t.tiles?.[d]).filter(Boolean),l=o.length===n.length&&o.every((d,u)=>d?.kanji===n[u]?.kanji),c=o.map((d,u)=>d?.kanji===n[u]?.kanji?-1:u).filter(d=>d>=0);nm(t,o.map(d=>d.kanji).join(""),l,{selectedIndices:a,selectedTiles:o,wrongIndexes:c,quietReward:!0})}function hj(){r.activeExerciseReviewTranslationOpen=!r.activeExerciseReviewTranslationOpen,P()}function Cc(e){return wa("N5",re(),e)}function vj(e){const t=em(e.dataset.id);if(!t)return;const n=e.dataset.value||"",s=n===t.answer;rm(t,n,s)}function wj(e){const t=em(e);if(!t)return;const n=document.getElementById(lm(t.id)),s=n?String(n.value||"").trim():"";rm(t,s,s===t.answer)}function rm(e,t,n){const s=re();ba("N5",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n5Meta?.rewards?.exerciseXp||7),rewardMoon:Number(e.rewardMoon||r.n5Meta?.rewards?.exerciseMoon||1),rewardKey:`n5_exercise:${e.id}`,quietReward:!0,markStudied:()=>br(e.kanji,e.cardId),markDifficult:()=>ka(e.kanji,e.cardId),markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function bj(e,t,n,s){var f;const a=he(),o=F(e)||String(e||"").toUpperCase(),l=o==="N5"?Jt(t):o==="N4"?Zn(t):o==="N3"?ts(t):o==="N2"?ss(t):o==="N1"?Os(t):null;if(!l)return;const c=Ql(o,l),d=c.find(S=>String(S.id)===String(n))||oe(n);if(!d)return;const u=Ms(o,l,c);if(u.session.answers?.[d.id])return;const m=new Date().toISOString();u.session.answers[d.id]={remembered:!!s,rating:s?"good":"again",answeredAt:m};const h=Wo({cards:c,session:u.session,confirmedCompleted:$c(o,l.id)});u.session.currentIndex=h.currentIndex,u.session.phase=h.phase,u.session.updatedAt=m,h.status==="test-ready"&&((f=u.session).testOpenedAt||(f.testOpenedAt=m)),r.pendingFocus=null,ue({scrollPolicy:se.PRESERVE,viewportSnapshot:a}),T(),ta(`${o} lesson SRS post-render commit`,()=>{const S=s?"good":"again";o==="N5"?am(d.id,S,"review",{scrollPolicy:se.PRESERVE,viewportSnapshot:a,quietReward:!0}):o==="N4"?hm(d.id,S,"review",{scrollPolicy:se.PRESERVE,viewportSnapshot:a,quietReward:!0}):o==="N3"?Lm(d.id,S,"review",{scrollPolicy:se.PRESERVE,viewportSnapshot:a,quietReward:!0}):o==="N2"?Om(d.id,S,"review",{scrollPolicy:se.PRESERVE,viewportSnapshot:a,quietReward:!0}):o==="N1"&&Qm(d.id,S,"review",{scrollPolicy:se.PRESERVE,viewportSnapshot:a,quietReward:!0})})}function am(e,t,n="review",s={}){const a=oe(e);if(!a)return;const o=s.scrollPolicy||(n==="review"?se.TOP:se.PRESERVE),l=s.viewportSnapshot||he(),c=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,m=d?"hard":t,h=ie(J(a.id)),f=$e(h,u,m);r.progress.cards[a.id]=f,Vt(h,f,m),ye(),br(a.kanji,a.id),re().srsKanji[a.kanji]=new Date().toISOString(),d?(ka(a.kanji,a.id,!1),r.progress.totalCorrect+=1,H(r.n5Meta?.rewards?.hardXp||2,1,`n5_srs_lesson_hard:${a.id}`,{silent:c})):Be(t)?(ka(a.kanji,a.id),r.progress.totalWrong+=1,H(r.n5Meta?.rewards?.hardXp||2,0,`n5_srs_hard:${a.id}`,{silent:c})):(r.progress.totalCorrect+=1,H(t==="easy"?r.n5Meta?.rewards?.knowXp||6:r.n5Meta?.rewards?.addToSrsXp||4,1,`n5_srs:${a.id}`,{silent:c})),ue({scrollPolicy:o,viewportSnapshot:l}),T(),Kt("N5 SRS post-render effects",()=>{D(Be(t)?"answer_wrong":"answer_correct"),Z({silent:c})},{scrollPolicy:o,viewportSnapshot:l})}function kj(e){const t=oe(e);if(!t)return;const n=he(),s=re();s.writingPractice[t.kanji]||(s.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},br(t.kanji,t.id),H(8,1,`n5_writing:${t.id}`)),Z(),T(),ue({scrollPolicy:se.PRESERVE,viewportSnapshot:n})}function yj(e){const t=Jt(e);if(!t)return;const n=re(),s=`n5:${t.id}`;if(je.has(s)||n.completedLessons[t.id]){P();return}const a=gn(t);if(a.filter(f=>n.studiedKanji[f.kanji]).length<t.kanji.length){const f=p()==="ru"?"Сначала изучите все кандзи урока (8/8).":"Study all kanji in the lesson first (8/8).";typeof G=="function"&&G(f);return}const l=Fs(t);if(!(l.length>0&&l.every(f=>Cc(f.id)?.correct))){const f=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof G=="function"&&G(f);return}je.add(s),gn(t).forEach(f=>{br(f.kanji,f.id),n.srsKanji[f.kanji]=n.srsKanji[f.kanji]||new Date().toISOString();const S=J(f.id);S.state==="New"&&(r.progress.cards[f.id]=$e(ie(S),"good"))}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=et().find(f=>f.order===t.order+1)?.id||t.id;const d=Xn(),u=d.sessions[Ye("N5",t.id)];if(u){const f=new Date().toISOString();u.phase="done",u.completedAt=f,u.updatedAt=f,u.currentIndex=a.length,d.activeSessionKey=Ye("N5",t.id),d.lastUpdatedAt=f}re(),r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.completedLessons=r.progress.n5Course.completedLessons||{},r.progress.n5Course.completedLessons[t.id]=new Date().toISOString(),T({immediate:!0}),vr("N5");const m=r.n5Meta?.rewards?.lessonCompleteXp||45,h=r.n5Meta?.rewards?.lessonCompleteMoon||6;H(m,h,`n5_lesson:${t.id}`),Dr("N5",t.id),bt({title:`${Ze().lessonComplete}: ${b(t.title)}`,message:Ze().lessonCompleteText,xp:m,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Z(),T(),P()}function br(e,t=null){if(!e)return;const n=re();cr(n,e)}function ka(e,t=null,n=!0){if(e&&(re().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=J(t);s.state!=="New"&&(r.progress.cards[t]=$e(ie(s),"again"))}}function $j(e){const t=Jt(e);t&&(wn("textbook-lesson",{level:"N5",lessonId:t.id}),re().currentLessonId=t.id,Rt("N5",t.id,"n5_lesson_open"),cn("N5",t,"n5_lesson_open"),ya(t.id))}function jj(){ya("")}function Sj(e=null){e&&(re().activeReviewMode=e),ya("review")}function ya(e){r.route="textbooks",r.activeTextbookLevel="N5",r.activeTextbookSubroute=e||null;const t=e?`#textbooks/N5/${encodeURIComponent(e)}`:"#textbooks/N5";jt(t),T(),pe(),Ft()}function Cj(e="due"){const t=Date.now(),n=re(),s=Gt();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=J(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function im(){const e=Gt(),t=et(),n=r.n5FinalTest?.types||["meaning","reading","sentence","kanji","word","srs"],s=Math.min(r.n5FinalTest?.questionCount||24,Math.max(e.length,1)),a=[];for(let o=0;o<s;o+=1){const l=e[o*7%e.length]||e[o%e.length],c=n[o%n.length],d=t.find(u=>u.kanji.includes(l.kanji))||t[0];a.push(xj(c,l,d,o))}return a.filter(Boolean)}function xj(e,t,n,s){const o=qt(t)[0],l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:mn({value:t.id,label:K(t)},Gt().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word,answer:o.reading,answerLabel:o.reading,options:mn({value:o.reading,label:o.reading},Gt().flatMap(c=>qt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value!==o.reading),s)};if(e==="sentence"&&l){const c=b({ru:l.ru,en:l.en});return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:mn({value:c,label:c},et().flatMap(d=>d.sentences||[]).map(d=>({value:b({ru:d.ru,en:d.en}),label:b({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word;return{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:ms(o),answer:c,answerLabel:c,options:mn({value:c,label:c},Gt().flatMap(d=>qt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value!==c),s)}}return e==="srs"?{id:`n5-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n5-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:mn({value:t.kanji,label:t.kanji},Gt().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function Nj(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(re().finalTest.answers[t]=n,T(),P())}function om(e=!1){if(r.finalTestBusy)return;const t=re().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}r.finalTestBusy=!0;try{const n=im(),s=r.n5FinalTest||{},a=Ze(),o=hn(t,n),l=sx(s),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const N=o.firstMissingId?`#${Lr("n5",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N5",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=N,T();return}let u=0;const m=[],h=[];n.forEach(N=>{const z=String(t.answers?.[N.id]||"").trim();z===N.answer?(u+=1,br(N.kanji,N.cardId)):(z||h.push(N),m.push({id:N.id,kanji:N.kanji,answer:N.answerLabel,selected:z}),ka(N.kanji,N.cardId))});const f=n.length?Math.round(u/n.length*100):0,S=!!t.completedAt,C=!!t.passed,x=Math.max(0,m.length-h.length);let L=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=f,t.passed=f>=l,t.correctAnswers=u,t.incorrectAnswers=x,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(N=>N.id),t.completedAt=d,t.lastScore=f,t.bestScore=Math.max(Number(t.bestScore||0),f),t.passedAt=t.passed?C&&t.passedAt||d:t.passedAt||null,!S){const N=Number(s?.rewards?.completeXp||120),z=Number(s?.rewards?.completeMoon||20);L+=N,k+=z,H(N,z,"n5_final_complete")}if(t.passed&&!C){const N=Number(s?.rewards?.passXp||80),z=Number(s?.rewards?.passMoon||12);L+=N,k+=z,H(N,z,"n5_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=k,Va("N5",t),re(),r.progress.n5Course=r.progress.n5Course||{},r.progress.n5Course.finalTest=r.progress.n5Course.finalTest||{},Object.assign(r.progress.n5Course.finalTest,{percent:t.percent,score:t.score,completedAt:t.completedAt,passed:t.passed,totalQuestions:t.totalQuestions,correctAnswers:t.correctAnswers||t.score}),T({immediate:!0}),r.finalTestModal={kind:"result",level:"N5",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:f,correct:u,incorrect:x,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n5-review",reviewAllAction:"n5-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},Z(),T()}catch(n){console.error(n),G(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,P()}}function Lj(){re().finalTest=Ml().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,T(),P()}function lm(e){return`n5-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function Aj(e){r.activeTextbookLevel="N4",r.activeJlptLesson="N4";const t=xc();t.opened||(t.opened=!0,Z({silent:!0}),T());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return Bj();if(n==="review")return Ej();if(n==="kanji")return Kj();if(n==="grammar")return Dj();if(n==="reading")return Fj();if(n==="listening")return Oj();const s=Zn(n);return s?(Q().currentLessonId=s.id,Rt("N4",s.id,"n4_lesson_page"),cn("N4",s,"n4_lesson_page"),Rj(e,s)):Ij(e)}function Ij(e){const t=Gj(),n=Re(),s=ut(),a=Uj(),o=r.n4Meta||{},l=b(o.principle||{});return`
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
            ${s.map(c=>Tj(c)).join("")}
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
    `}function Tj(e){const t=gm(e.id),n=Re();let s=e.kanji.filter(a=>Q().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#textbooks/N4/${g(e.id)}" data-action="n4-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(b(e.title))}</h3>
        <p>${i(b(e.goal))}</p>
        <div class="n5-kanji-strip n4-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(qj(t))}</small>
      </a>
    `}function Rj(e,t){const n=Re(),s=kr(t),a=$a(t),o=gm(t.id),l=Ms("N4",t,s);let c=o==="completed";const d=`n4:${t.id}`;je.has(d)&&(c=!0);const u=c,m=a.filter(q=>Lc(q.id)?.correct).length,h=a.length>0&&m===a.length,f=s.filter(q=>Q().studiedKanji[q.kanji]).length,S=t.kanji.length,C=f>=S,x=!c&&h&&C,L=t.kanji.filter(q=>Q().difficultKanji[q]).join(" · "),k=ut().find(q=>q.order===t.order+1),N=Ut("N4",t.id,"player"),z=Ut("N4",t.id,"test");return`
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

        ${ma("N4",t,s,n,{playerId:N,answerAction:"jlpt-lesson-answer",examples:q=>Ct(q),sentence:q=>_j(q,t)})}

        ${Pj(t)}

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
            ${a.map(q=>cm(q)).join("")}
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
    `}function _j(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(ee(n.reading||""))}</span>
        <small>${i(b({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Re().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function Pj(e){const t=Re(),n=(e.grammarFocus||[]).map(s=>Nc(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n4-grammar-complete" data-id="${g(s.id)}" data-value="${g(V(s))}">${i(Q().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function cm(e){const t=Re(),n=Lc(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&Yn("N4",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(b(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(km(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(b(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n4-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${dm(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(b(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
            ${va("N4",e).map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n4-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${dm(e,n)}
      </article>
    `}function dm(e,t){if(!t)return"";const n=Re(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function Ej(e){const t=Re(),n=Q().activeReviewMode||"due",s=lS(n);return`
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
          ${s.map((a,o)=>Mj(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function Mj(e,t){const n=Re(),s=J(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Yt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(Ct(e)[0]?.word||e.hiragana||"")} · ${i(Ct(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n4-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function Kj(e){const t=Re(),n=tt();return`
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
    `}function Dj(e){const t=Re();return`
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
                  ${(qe(n).length?qe(n):[V(n)]).map(a=>`
                    <button class="btn ${s?.selected===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n4-grammar-complete" data-id="${g(n.id)}" data-value="${g(a)}">${i(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${V(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function Fj(e){const t=Re(),n=Ga("N4","n4_reading_page"),s=Pr("N4");return(n||s)&&T(),`
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
          ${r.n4Reading.map(a=>um(a,"reading")).join("")}
        </div>
      </section>
    `}function Oj(e){const t=Re();return`
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
          ${r.n4Listening.map(n=>um(n,"listening")).join("")}
        </div>
      </section>
    `}function um(e,t){const n=Re(),s=t==="reading"?Q().completedReading[e.id]:Q().completedListening[e.id],a=t==="reading"?Q().readingAnswers:Q().listeningAnswers,o=t==="reading"?"n4-reading-complete":"n4-listening-complete";return`
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
    `}function Bj(e){const t=Re(),n=r.n4FinalTest||{},s=wm(),a=Q().finalTest,o=hn(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),T()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
            ${Qt("N4","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>zj(m,h)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n4-final-submit" ${r.finalTestBusy||d?"disabled":""}>${i(d?p()==="ru"?"Тест завершён":"Test completed":t.submitFinal)}</button>
          ${Qt("N4","btn ghost")}
          <button class="btn ghost" type="button" data-action="n4-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function zj(e,t){const n=Q().finalTest.answers?.[e.id],s=!!Q().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n4-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Re().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Re(){return p()==="ru"?{title:"JLPT N4",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N4 после N5",continue:"Продолжить",review:"Повторять N4",openKanji:"Открыть список кандзи",grammarN4:"Грамматика N4",readingN4:"Чтение N4",listeningN4:"Аудирование N4",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"17 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, упражнение, письмо и повторение.",reviewPlan:"План повторения на 45 дней",day:"день",lesson:"Урок",backToN4:"К N4",n5Bridge:"N5 bridge",n5BridgeText:"Перед N4 полезно держать активной базу N5: она станет опорой для более длинных предложений.",reviewN5Base:"Повторить базу N5 перед N4",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> текст -> упражнение -> письмо -> повторение",lessonChainText:"N4 больше не живёт списком знаков: каждый знак сразу получает слово, грамматическую связку и контекст.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика держит смысл предложения.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции из примеров урока, чтобы кандзи сразу работали в предложении.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N4-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N4.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"170 кандзи N4",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"48 грамматических конструкций N4",grammarText:"Короткие рабочие карточки: функция, формула, пример и проверка понимания.",readingTitle:"Тексты для чтения N4",readingText:"Короткие тексты связывают кандзи, слова и грамматику в нормальный контекст.",listeningTitle:"Скрипты для аудирования N4",listeningText:"Диалоги можно читать вслух или использовать как основу для прослушивания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N4",finalPassed:"N4 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N4",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N4 textbook after N5",continue:"Continue",review:"Review N4",openKanji:"Open kanji list",grammarN4:"N4 grammar",readingN4:"N4 reading",listeningN4:"N4 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"17 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, exercise, writing, and SRS.",reviewPlan:"45-day review plan",day:"day",lesson:"Lesson",backToN4:"To N4",n5Bridge:"N5 bridge",n5BridgeText:"Keep the N5 base active before N4; it supports longer sentences.",reviewN5Base:"Review N5 base before N4",lessonChain:"Kanji -> word -> grammar -> sentence -> text -> exercise -> writing -> SRS",lessonChainText:"N4 is not a bare list: each sign gets a word, grammar link, and context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries the sentence.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N4 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions from the lesson examples.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N4 review",reviewDescription:"Review due cards, difficult kanji, or the full N4 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"170 N4 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"48 N4 grammar constructions",grammarText:"Compact cards with function, formula, example, and check.",readingTitle:"N4 reading texts",readingText:"Short texts connect kanji, words, and grammar.",listeningTitle:"N4 listening scripts",listeningText:"Read dialogues aloud or use them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N4",finalPassed:"N4 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function xc(){var s;(s=r.progress).n4Course||(s.n4Course=Kl());const e=ut();!Zn(r.progress.n4Course.currentLessonId)&&e[0]&&(r.progress.n4Course.currentLessonId=e[0].id);const n=e.find(a=>!r.progress.n4Course.completedLessons[a.id]);return!r.progress.n4Course.currentLessonId&&n&&(r.progress.n4Course.currentLessonId=n.id),r.progress.n4Course}function Q(){return r.progress.n4Course||xc()}function ut(){return r.n4Textbook?.items||[]}function Zn(e){const t=String(e||"");return t&&ut().find(n=>n.id===t||n.id===`n4-${t}`||n.id.endsWith(`-${t}`))||null}function Uj(){return Zn(Q().currentLessonId)||ut().find(e=>!Q().completedLessons[e.id])||ut()[0]||null}function kr(e){return(e?.kanji||[]).map(t=>pm(t)).filter(Boolean)}function tt(){return qa("N4",Jj)}function Jj(){const e=new Set;return(r.n4KanjiCatalog||[]).map(t=>pm(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function pm(e){const t=String(e||""),n=r.n4KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N4")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Di(s,n):s||(n?Di({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N4",examples:[]},n):null)}function Nc(e){const t=String(e||"");return r.n4Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function Ct(e){return ha(e,e.examples)}function Gj(){const e=tt(),t=Q(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{J(s.id).state!=="New"&&n.add(s.kanji)}),{total:r.n4Meta?.kanjiCount||e.length||170,studied:n.size,completedLessons:Ds("N4"),completedGrammar:Object.keys(t.completedGrammar||{}).length,reviews:e.reduce((s,a)=>s+Number(J(a.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function gm(e){return hr("N4",e)}function qj(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function $a(e){const t=kr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n4Exercises?.types||[]).map(k=>[k.type,k.title])),a=Object.fromEntries((r.n4Exercises?.types||[]).map(k=>[k.type,k])),o=k=>a[k]||{rewardXp:r.n4Meta?.rewards?.exerciseXp||9,rewardMoon:r.n4Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:pt({value:c.id,label:K(c)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:pt({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=Ct(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:pt({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(k=>Ct(k).map(N=>({value:N.reading,label:N.reading}))).filter(k=>k.value&&k.value!==m.reading),3),...o("reading")});const h=n[0];h&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:b({ru:h.ru,en:h.en}),answerLabel:b({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:pt({value:b({ru:h.ru,en:h.en}),label:b({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:b({ru:k.ru,en:k.en}),label:b({ru:k.ru,en:k.en})})),1),...o("sentence")});const f=t[3]||t[0],S=Ct(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:Ya(S),answer:S.word||f.kanji,answerLabel:S.word||f.kanji,kanji:f.kanji,cardId:f.id,options:pt({value:S.word||f.kanji,label:S.word||f.kanji},t.flatMap(k=>Ct(k).map(N=>({value:N.word,label:N.word}))).filter(k=>k.value&&k.value!==S.word),2),...o("missing-word")});const C=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(C)}`:`Type the kanji for: ${K(C)}`,answer:C.kanji,answerLabel:C.kanji,kanji:C.kanji,cardId:C.id,options:[],...o("active-recall")});const x=Nc(e.grammarFocus?.[0]);x&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:b(x.question||x.explanation),answer:V(x),answerLabel:V(x),kanji:t[0].kanji,cardId:t[0].id,grammarId:x.id,options:pt({value:V(x),label:V(x)},qe(x).filter(k=>k!==V(x)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:b({ru:L.ru,en:L.en}),answerLabel:b({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:pt({value:b({ru:L.ru,en:L.en}),label:b({ru:L.ru,en:L.en})},n.filter(k=>k.jp!==L.jp).map(k=>({value:b({ru:k.ru,en:k.en}),label:b({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),l.slice(0,r.n4Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N4",lessonId:e.id}))}function pt(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),tt().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function mm(e){for(const t of ut()){const n=$a(t).find(s=>s.id===e);if(n)return n}return null}function Lc(e){return wa("N4",Q(),e)}function Hj(e){const t=mm(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;fm(t,s,a)}function Vj(e){const t=mm(e);if(!t)return;const n=document.getElementById(km(t.id)),s=n?String(n.value||"").trim():"";fm(t,s,s===t.answer)}function fm(e,t,n){const s=Q();ba("N4",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n4Meta?.rewards?.exerciseXp||9),rewardMoon:Number(e.rewardMoon||r.n4Meta?.rewards?.exerciseMoon||1),rewardKey:`n4_exercise:${e.id}`,quietReward:!0,markStudied:()=>yr(e.kanji,e.cardId),markDifficult:()=>ja(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function hm(e,t,n="review",s={}){const a=oe(e)||tt().find(S=>String(S.id)===String(e));if(!a)return;const o=s.scrollPolicy||(n==="review"?se.TOP:se.PRESERVE),l=s.viewportSnapshot||he(),c=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,m=d?"hard":t,h=ie(J(a.id)),f=$e(h,u,m);r.progress.cards[a.id]=f,Vt(h,f,m),ye(),yr(a.kanji,a.id),Q().srsKanji[a.kanji]=new Date().toISOString(),d?(ja(a.kanji,a.id,!1),r.progress.totalCorrect+=1,H(r.n4Meta?.rewards?.hardXp||2,1,`n4_srs_lesson_hard:${a.id}`,{silent:c})):Be(t)?(ja(a.kanji,a.id),r.progress.totalWrong+=1,H(r.n4Meta?.rewards?.hardXp||2,0,`n4_srs_hard:${a.id}`,{silent:c})):(r.progress.totalCorrect+=1,H(t==="easy"?r.n4Meta?.rewards?.knowXp||7:r.n4Meta?.rewards?.addToSrsXp||5,1,`n4_srs:${a.id}`,{silent:c})),ue({scrollPolicy:o,viewportSnapshot:l}),T(),Kt("N4 SRS post-render effects",()=>{D(Be(t)?"answer_wrong":"answer_correct"),Z({silent:c})},{scrollPolicy:o,viewportSnapshot:l})}function Wj(e){const t=oe(e)||tt().find(s=>String(s.id)===String(e));if(!t)return;const n=Q();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},yr(t.kanji,t.id),H(9,1,`n4_writing:${t.id}`)),Z(),T(),P()}function Xj(e){const t=Zn(e);if(!t)return;const n=Q(),s=`n4:${t.id}`;if(je.has(s)||n.completedLessons[t.id]){P();return}const a=kr(t);if(a.filter(f=>n.studiedKanji[f.kanji]).length<t.kanji.length){const f=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof G=="function"&&G(f);return}const l=$a(t);if(!(l.length>0&&l.every(f=>Lc(f.id)?.correct))){const f=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof G=="function"&&G(f);return}je.add(s),kr(t).forEach(f=>{yr(f.kanji,f.id),n.srsKanji[f.kanji]=n.srsKanji[f.kanji]||new Date().toISOString();const S=J(f.id);S.state==="New"&&(r.progress.cards[f.id]=$e(ie(S),"good"))}),(t.grammarFocus||[]).map(f=>Nc(f)).filter(Boolean).forEach(f=>{n.completedGrammar[f.id]=n.completedGrammar[f.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=ut().find(f=>f.order===t.order+1)?.id||t.id;const d=Xn(),u=d.sessions[Ye("N4",t.id)];if(u){const f=new Date().toISOString();u.phase="done",u.completedAt=f,u.updatedAt=f,u.currentIndex=a.length,d.activeSessionKey=Ye("N4",t.id),d.lastUpdatedAt=f}Q(),vr("N4");const m=r.n4Meta?.rewards?.lessonCompleteXp||65,h=r.n4Meta?.rewards?.lessonCompleteMoon||8;H(m,h,`n4_lesson:${t.id}`),Dr("N4",t.id),bt({title:`${Re().lessonComplete}: ${b(t.title)}`,message:Re().lessonCompleteText,xp:m,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Z(),T(),P()}function yr(e,t=null){if(!e)return;const n=Q();cr(n,e)}function ja(e,t=null,n=!0){if(e&&(Q().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=J(t);s.state!=="New"&&(r.progress.cards[t]=$e(ie(s),"again"))}}function Qj(e,t=""){const n=r.n4Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=V(n),a=t||s,o=a===s,l=Q();l.grammarResults[n.id]={selected:a,correct:o,checkedAt:new Date().toISOString()},o&&!l.completedGrammar[n.id]?(l.completedGrammar[n.id]=new Date().toISOString(),H(r.n4Meta?.rewards?.grammarXp||10,r.n4Meta?.rewards?.grammarMoon||1,`n4_grammar:${n.id}`),r.progress.totalCorrect+=1,D("answer_correct")):o||(r.progress.totalWrong+=1,D("answer_wrong")),ye(),Z(),T(),P()}function Yj(e,t="0",n=""){vm("reading",e,t,n)}function Zj(e,t="0",n=""){vm("listening",e,t,n)}function vm(e,t,n="0",s=""){const o=(e==="reading"?r.n4Reading:r.n4Listening).find(S=>S.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=Q(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,f=e==="reading"?m.completedReading:m.completedListening;if(h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()},d&&!f[o.id]){f[o.id]=new Date().toISOString();const S=e==="reading"?r.n4Meta?.rewards?.readingXp||35:r.n4Meta?.rewards?.listeningXp||30,C=e==="reading"?r.n4Meta?.rewards?.readingMoon||4:r.n4Meta?.rewards?.listeningMoon||3;H(S,C,`n4_${e}:${o.id}`),r.progress.totalCorrect+=1,D("answer_correct")}else d||(r.progress.totalWrong+=1,D("answer_wrong"));ye(),Z(),T(),P()}function eS(e){const t=Zn(e);t&&(wn("textbook-lesson",{level:"N4",lessonId:t.id}),Q().currentLessonId=t.id,Rt("N4",t.id,"n4_lesson_open"),cn("N4",t,"n4_lesson_open"),es(t.id))}function tS(){es("")}function nS(e=null){e&&(Q().activeReviewMode=e),es("review")}function sS(){es("kanji")}function rS(){es("grammar")}function aS(){es("reading")}function iS(){es("listening")}function oS(){es("final-test")}function es(e){r.route="textbooks",r.activeTextbookLevel="N4",r.activeTextbookSubroute=e||null,Q().opened=!0;const t=e?`#textbooks/N4/${encodeURIComponent(e)}`:"#textbooks/N4";jt(t),Z(),T(),pe(),Ft()}function lS(e="due"){const t=Date.now(),n=Q(),s=tt();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=J(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function wm(){const e=tt();if(!e.length)return[];const t=r.n4FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n4FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=ut().find(d=>d.kanji.includes(o.kanji))||ut()[0];s.push(cS(l,o,c,a))}return s.filter(Boolean)}function cS(e,t,n,s){const o=Ct(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:pt({value:t.id,label:K(t)},tt().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:pt({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},tt().flatMap(c=>Ct(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=b({ru:l.ru,en:l.en});return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:pt({value:c,label:c},ut().flatMap(d=>d.sentences||[]).map(d=>({value:b({ru:d.ru,en:d.en}),label:b({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:ms(o),answer:c,answerLabel:c,options:pt({value:c,label:c},tt().flatMap(d=>Ct(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n4Grammar[s%Math.max(r.n4Grammar.length,1)];if(c)return{id:`n4-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${b(c.question||c.explanation)}`,answer:V(c),answerLabel:V(c),options:pt({value:V(c),label:V(c)},qe(c).filter(d=>d!==V(c)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n4Reading[s%Math.max(r.n4Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n4-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||b(c.title)} ${b(d.prompt)}`,answer:d.answer,answerLabel:b((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:b(u.label||u)}))}}return e==="srs"?{id:`n4-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n4-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:pt({value:t.kanji,label:t.kanji},tt().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function dS(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(Q().finalTest.answers[t]=n,T(),P())}function bm(e=!1){if(r.finalTestBusy)return;const t=Q().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}r.finalTestBusy=!0;try{const n=wm(),s=r.n4FinalTest||{},a=Re(),o=hn(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const N=o.firstMissingId?`#${Lr("n4",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N4",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=N,T();return}let u=0;const m=[],h=[];n.forEach(N=>{const z=String(t.answers?.[N.id]||"").trim();if(z===N.answer){if(u+=1,N.kanji&&yr(N.kanji,N.cardId),N.grammarId){const q=Q();q.completedGrammar[N.grammarId]=q.completedGrammar[N.grammarId]||d}}else z||h.push(N),m.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:z}),N.kanji&&ja(N.kanji,N.cardId)});const f=n.length?Math.round(u/n.length*100):0,S=!!t.completedAt,C=!!t.passed,x=Math.max(0,m.length-h.length);let L=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=f,t.passed=f>=l,t.correctAnswers=u,t.incorrectAnswers=x,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(N=>N.id),t.completedAt=d,t.lastScore=f,t.bestScore=Math.max(Number(t.bestScore||0),f),t.passedAt=t.passed?C&&t.passedAt||d:t.passedAt||null,!S){const N=Number(s?.rewards?.completeXp||180),z=Number(s?.rewards?.completeMoon||35);L+=N,k+=z,H(N,z,"n4_final_complete")}if(t.passed&&!C){const N=Number(s?.rewards?.passXp||90),z=Number(s?.rewards?.passMoon||15);L+=N,k+=z,H(N,z,"n4_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=k,Va("N4",t),Q(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N4",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:f,correct:u,incorrect:x,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n4-review",reviewAllAction:"n4-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},Z(),T()}catch(n){console.error(n),G(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,P()}}function uS(){Q().finalTest=Kl().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,T(),P()}function km(e){return`n4-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function pS(e){r.activeTextbookLevel="N3",r.activeJlptLesson="N3";const t=Ic();t.opened||(t.opened=!0,Z({silent:!0}),T());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return CS();if(n==="review")return bS();if(n==="kanji")return yS();if(n==="grammar")return $S();if(n==="reading")return jS();if(n==="listening")return SS();const s=ts(n);return s?(W().currentLessonId=s.id,Rt("N3",s.id,"n3_lesson_page"),cn("N3",s,"n3_lesson_page"),fS(e,s)):gS(e)}function gS(e){const t=AS(),n=Ne(),s=gt(),a=NS(),o=r.n3Meta||{},l=b(o.principle||{});return`
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
            ${s.map(c=>mS(c)).join("")}
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
    `}function mS(e){const t=Cm(e.id),n=Ne();let s=e.kanji.filter(a=>W().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n3/${g(e.id)}" data-action="n3-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(b(e.title))}</h3>
        <p>${i(b(e.goal))}</p>
        <div class="n5-kanji-strip n3-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(IS(t))}</small>
      </a>
    `}function fS(e,t){const n=Ne(),s=$r(t),a=Sa(t),o=Cm(t.id),l=Ms("N3",t,s);let c=o==="completed";const d=`n3:${t.id}`;je.has(d)&&(c=!0);const u=c,m=a.filter(U=>Rc(U.id)?.correct).length,h=a.length>0&&m===a.length,f=s.filter(U=>W().studiedKanji[U.kanji]).length,S=t.kanji.length,C=f>=S,x=!c&&h&&C,L=t.kanji.filter(U=>W().difficultKanji[U]).join(" · "),k=gt().find(U=>U.order===t.order+1),N=ym(t),z=N?!!W().completedReading[N.id]:!1,q=Ut("N3",t.id,"player"),Ys=Ut("N3",t.id,"test");return`
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

        ${ma("N3",t,s,n,{playerId:q,answerAction:"jlpt-lesson-answer",examples:U=>xt(U),sentence:U=>vS(U,t)})}

        ${wS(t)}

        ${hS(t)}

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
            ${a.map(U=>$m(U)).join("")}
          </div>
        </section>

        <section class="n5-result-panel ${c?"is-complete":""}">
          <div>
            <h2>${i(c?n.lessonComplete:n.lessonResult)}</h2>
            <p>${i(c?n.lessonCompleteText:n.lessonResultText)}</p>
            <div class="tag-row">
              <span class="pill">${i(n.studiedKanji)}: ${s.filter(U=>W().studiedKanji[U.kanji]).length}/${t.kanji.length}</span>
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
    `}function ym(e){return e?.miniReadingId&&r.n3Reading.find(t=>t.id===e.miniReadingId)||null}function hS(e){const t=Ne(),n=ym(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Ac(n,"reading")}
      </section>
    `:""}function vS(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(ee(n.reading||""))}</span>
        <small>${i(b({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Ne().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function wS(e){const t=Ne(),n=(e.grammarFocus||[]).map(s=>Tc(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n3-grammar-complete" data-id="${g(s.id)}" data-value="${g(V(s))}">${i(W().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function $m(e){const t=Ne(),n=Rc(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&Yn("N3",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(b(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(Rm(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(b(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n3-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${jm(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(b(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
            ${va("N3",e).map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n3-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${jm(e,n)}
      </article>
    `}function jm(e,t){if(!t)return"";const n=Ne(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function bS(e){const t=Ne(),n=W().activeReviewMode||"due",s=qS(n);return`
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
          ${s.map((a,o)=>kS(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function kS(e,t){const n=Ne(),s=J(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Yt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(xt(e)[0]?.word||e.hiragana||"")} · ${i(xt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n3-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function yS(e){const t=Ne(),n=nt();return`
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
    `}function $S(e){const t=Ne();return`
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
          ${M(t.completedGrammar,`${Object.keys(W().completedGrammar||{}).length}/${r.n3Grammar.length}`,t.grammar,E(Object.keys(W().completedGrammar||{}).length,r.n3Grammar.length))}
          ${M(t.questions,r.n3Grammar.length,t.grammar,100)}
        </div>
        <div class="n3-section-grid">
          ${r.n3Grammar.map(n=>{const s=W().grammarResults?.[n.id];return`
              <article class="n3-grammar-card ${s?s.correct?"is-correct":"is-wrong":""}">
                <span class="pill">${i(n.order)} · ${i(n.pattern)}</span>
                <h3>${i(b(n.title))}</h3>
                <p>${i(b(n.explanation))}</p>
                ${n.formula?`<code>${i(n.formula)}</code>`:""}
                ${(n.examples||[]).slice(0,2).map(a=>`<div class="n5-card-sentence"><strong>${i(a.jp)}</strong><span>${i(ee(a.reading||""))}</span><small>${i(b({ru:a.ru,en:a.en}))}</small></div>`).join("")}
                ${n.question?`<h4>${i(b(n.question))}</h4>`:""}
                <div class="n5-option-grid">
                  ${(qe(n).length?qe(n):[V(n)]).map(a=>`
                    <button class="btn ${s?.selected===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n3-grammar-complete" data-id="${g(n.id)}" data-value="${g(a)}">${i(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${V(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function jS(e){const t=Ne(),n=Ga("N3","n3_reading_page"),s=Pr("N3");return(n||s)&&T(),`
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
          ${r.n3Reading.map(a=>Ac(a,"reading")).join("")}
        </div>
      </section>
    `}function SS(e){const t=Ne();return`
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
          ${r.n3Listening.map(n=>Ac(n,"listening")).join("")}
        </div>
      </section>
    `}function Ac(e,t){const n=Ne(),s=t==="reading"?W().completedReading[e.id]:W().completedListening[e.id],a=t==="reading"?W().readingAnswers:W().listeningAnswers,o=t==="reading"?"n3-reading-complete":"n3-listening-complete";return`
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
    `}function CS(e){const t=Ne(),n=r.n3FinalTest||{},s=Im(),a=W().finalTest,o=hn(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),T()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
            ${Qt("N3","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>xS(m,h)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n3-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Qt("N3","btn ghost")}
          <button class="btn ghost" type="button" data-action="n3-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function xS(e,t){const n=W().finalTest.answers?.[e.id],s=!!W().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n3-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Ne().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Ne(){return p()==="ru"?{title:"JLPT N3",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N3 как мост к среднему уровню",continue:"Продолжить",review:"Повторять N3",openKanji:"Открыть список кандзи",grammarN3:"Грамматика N3",readingN3:"Чтение N3",listeningN3:"Аудирование N3",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Listening",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"37 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, предложение, мини-текст, упражнения, письмо и повторение.",reviewPlan:"План повторения на 60 дней",day:"день",lesson:"Урок",backToN3:"К N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"Если база N5 и N4 дырявая, N3 будет ощущаться как стена. Сначала проверь частицы, базовые связки, условные формы и привычные повседневные конструкции.",reviewN5Base:"Повторить N5/N4 перед N3",lessonChain:"Кандзи -> слово -> грамматика -> предложение -> абзац -> чтение -> вывод -> повторение",lessonChainText:"N3 больше не живёт списком знаков: каждый знак сразу входит в слово, грамматическую связку, мини-текст и повторение по смыслу.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, мини-чтение и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, кто, что, почему и к какому выводу ведёт короткий N3-текст.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N3-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N3.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"370 кандзи N3",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"80 грамматических конструкций N3",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном и разговорном контексте.",readingTitle:"Тексты для чтения N3",readingText:"Короткие тексты и lesson mini-readings связывают кандзи, слова, грамматику и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N3",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N3",finalPassed:"N3 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N3",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N3 textbook after N5",continue:"Continue",review:"Review N3",openKanji:"Open kanji list",grammarN3:"N3 grammar",readingN3:"N3 reading",listeningN3:"N3 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"37 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, sentence, mini reading, exercises, writing, and SRS.",reviewPlan:"60-day review plan",day:"day",lesson:"Lesson",backToN3:"To N3",n5Bridge:"N5/N4 bridge",n5BridgeText:"If the N5 and N4 base is shaky, N3 feels like a wall. Review particles, conditionals, and the everyday support grammar first.",reviewN5Base:"Review N5/N4 before N3",lessonChain:"Kanji -> word -> grammar -> sentence -> paragraph -> reading -> conclusion -> SRS",lessonChainText:"N3 is not a bare list: each sign gets a word, grammar link, mini text, and review context.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, mini reading, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N3 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",remember:"Remember",notRemember:"Don't remember",details:"Show more",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand who, what, why, and what conclusion the short N3 text points to.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N3 review",reviewDescription:"Review due cards, difficult kanji, or the full N3 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"370 N3 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"80 N3 grammar constructions",grammarText:"Compact cards with function, formula, example, and comprehension check.",readingTitle:"N3 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, and conclusions.",listeningTitle:"N3 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N3",finalPassed:"N3 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Ic(){var s;(s=r.progress).n3Course||(s.n3Course=Dl());const e=gt();!ts(r.progress.n3Course.currentLessonId)&&e[0]&&(r.progress.n3Course.currentLessonId=e[0].id);const n=e.find(a=>!r.progress.n3Course.completedLessons[a.id]);return!r.progress.n3Course.currentLessonId&&n&&(r.progress.n3Course.currentLessonId=n.id),r.progress.n3Course}function W(){return r.progress.n3Course||Ic()}function gt(){return r.n3Textbook?.items||[]}function ts(e){const t=String(e||"");return t&&gt().find(n=>n.id===t||n.id===`n3-${t}`||n.id.endsWith(`-${t}`))||null}function NS(){return ts(W().currentLessonId)||gt().find(e=>!W().completedLessons[e.id])||gt()[0]||null}function $r(e){return(e?.kanji||[]).map(t=>Sm(t)).filter(Boolean)}function nt(){return qa("N3",LS)}function LS(){const e=new Set;return(r.n3KanjiCatalog||[]).map(t=>Sm(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Sm(e){const t=String(e||""),n=r.n3KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N3")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?Oi(s,n):s||(n?Oi({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N3",examples:[]},n):null)}function Tc(e){const t=String(e||"");return r.n3Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function xt(e){return ha(e,e.examples)}function AS(){const e=nt(),t=W(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{J(s.id).state!=="New"&&n.add(s.kanji)}),{total:r.n3Meta?.kanjiCount||e.length||370,studied:n.size,completedLessons:Ds("N3"),completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((s,a)=>s+Number(J(a.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Cm(e){return hr("N3",e)}function IS(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Sa(e){const t=$r(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n3Exercises?.types||[]).map(k=>[k.type,k.title])),a=Object.fromEntries((r.n3Exercises?.types||[]).map(k=>[k.type,k])),o=k=>a[k]||{rewardXp:r.n3Meta?.rewards?.exerciseXp||10,rewardMoon:r.n3Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:mt({value:c.id,label:K(c)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:mt({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=xt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:mt({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(k=>xt(k).map(N=>({value:N.reading,label:N.reading}))).filter(k=>k.value&&k.value!==m.reading),3),...o("reading")});const h=n[0];h&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:b({ru:h.ru,en:h.en}),answerLabel:b({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:mt({value:b({ru:h.ru,en:h.en}),label:b({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:b({ru:k.ru,en:k.en}),label:b({ru:k.ru,en:k.en})})),1),...o("sentence")});const f=t[3]||t[0],S=xt(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:Ya(S),answer:S.word||f.kanji,answerLabel:S.word||f.kanji,kanji:f.kanji,cardId:f.id,options:mt({value:S.word||f.kanji,label:S.word||f.kanji},t.flatMap(k=>xt(k).map(N=>({value:N.word,label:N.word}))).filter(k=>k.value&&k.value!==S.word),2),...o("missing-word")});const C=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(C)}`:`Type the kanji for: ${K(C)}`,answer:C.kanji,answerLabel:C.kanji,kanji:C.kanji,cardId:C.id,options:[],...o("active-recall")});const x=Tc(e.grammarFocus?.[0]);x&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:b(x.question||x.explanation),answer:V(x),answerLabel:V(x),kanji:t[0].kanji,cardId:t[0].id,grammarId:x.id,options:mt({value:V(x),label:V(x)},qe(x).filter(k=>k!==V(x)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:b({ru:L.ru,en:L.en}),answerLabel:b({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:mt({value:b({ru:L.ru,en:L.en}),label:b({ru:L.ru,en:L.en})},n.filter(k=>k.jp!==L.jp).map(k=>({value:b({ru:k.ru,en:k.en}),label:b({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),l.slice(0,r.n3Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N3",lessonId:e.id}))}function mt(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),nt().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function xm(e){for(const t of gt()){const n=Sa(t).find(s=>s.id===e);if(n)return n}return null}function Rc(e){return wa("N3",W(),e)}function TS(e){const t=xm(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Nm(t,s,a)}function RS(e){const t=xm(e);if(!t)return;const n=document.getElementById(Rm(t.id)),s=n?String(n.value||"").trim():"";Nm(t,s,s===t.answer)}function Nm(e,t,n){const s=W();ba("N3",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n3Meta?.rewards?.exerciseXp||10),rewardMoon:Number(e.rewardMoon||r.n3Meta?.rewards?.exerciseMoon||1),rewardKey:`n3_exercise:${e.id}`,quietReward:!0,markStudied:()=>jr(e.kanji,e.cardId),markDifficult:()=>Ca(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Lm(e,t,n="review",s={}){const a=oe(e)||nt().find(S=>String(S.id)===String(e));if(!a)return;const o=s.scrollPolicy||(n==="review"?se.TOP:se.PRESERVE),l=s.viewportSnapshot||he(),c=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,m=d?"hard":t,h=ie(J(a.id)),f=$e(h,u,m);r.progress.cards[a.id]=f,Vt(h,f,m),ye(),jr(a.kanji,a.id),W().srsKanji[a.kanji]=new Date().toISOString(),d?(Ca(a.kanji,a.id,!1),r.progress.totalCorrect+=1,H(r.n3Meta?.rewards?.hardXp||2,1,`n3_srs_lesson_hard:${a.id}`,{silent:c})):Be(t)?(Ca(a.kanji,a.id),r.progress.totalWrong+=1,H(r.n3Meta?.rewards?.hardXp||2,0,`n3_srs_hard:${a.id}`,{silent:c})):(r.progress.totalCorrect+=1,H(t==="easy"?r.n3Meta?.rewards?.knowXp||8:r.n3Meta?.rewards?.addToSrsXp||6,1,`n3_srs:${a.id}`,{silent:c})),ue({scrollPolicy:o,viewportSnapshot:l}),T(),Kt("N3 SRS post-render effects",()=>{D(Be(t)?"answer_wrong":"answer_correct"),Z({silent:c})},{scrollPolicy:o,viewportSnapshot:l})}function _S(e){const t=oe(e)||nt().find(s=>String(s.id)===String(e));if(!t)return;const n=W();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},jr(t.kanji,t.id),H(9,1,`n3_writing:${t.id}`)),Z(),T(),P()}function PS(e){const t=ts(e);if(!t)return;const n=W(),s=`n3:${t.id}`;if(je.has(s)||n.completedLessons[t.id]){P();return}const a=$r(t);if(a.filter(f=>n.studiedKanji[f.kanji]).length<t.kanji.length){const f=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof G=="function"&&G(f);return}const l=Sa(t);if(!(l.length>0&&l.every(f=>Rc(f.id)?.correct))){const f=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof G=="function"&&G(f);return}je.add(s),$r(t).forEach(f=>{jr(f.kanji,f.id),n.srsKanji[f.kanji]=n.srsKanji[f.kanji]||new Date().toISOString();const S=J(f.id);S.state==="New"&&(r.progress.cards[f.id]=$e(ie(S),"good"))}),(t.grammarFocus||[]).map(f=>Tc(f)).filter(Boolean).forEach(f=>{n.completedGrammar[f.id]=n.completedGrammar[f.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=gt().find(f=>f.order===t.order+1)?.id||t.id;const d=Xn(),u=d.sessions[Ye("N3",t.id)];if(u){const f=new Date().toISOString();u.phase="done",u.completedAt=f,u.updatedAt=f,u.currentIndex=a.length,d.activeSessionKey=Ye("N3",t.id),d.lastUpdatedAt=f}W(),vr("N3");const m=r.n3Meta?.rewards?.lessonCompleteXp||75,h=r.n3Meta?.rewards?.lessonCompleteMoon||9;H(m,h,`n3_lesson:${t.id}`),Dr("N3",t.id),bt({title:`${Ne().lessonComplete}: ${b(t.title)}`,message:Ne().lessonCompleteText,xp:m,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Z(),T(),P()}function jr(e,t=null){if(!e)return;const n=W();cr(n,e)}function Ca(e,t=null,n=!0){if(e&&(W().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=J(t);s.state!=="New"&&(r.progress.cards[t]=$e(ie(s),"again"))}}function ES(e,t=""){const n=r.n3Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=V(n),a=t||s,o=a===s,l=W();l.grammarResults[n.id]={selected:a,correct:o,checkedAt:new Date().toISOString()},o&&!l.completedGrammar[n.id]?(l.completedGrammar[n.id]=new Date().toISOString(),H(r.n3Meta?.rewards?.grammarXp||11,r.n3Meta?.rewards?.grammarMoon||1,`n3_grammar:${n.id}`),r.progress.totalCorrect+=1,D("answer_correct")):o||(r.progress.totalWrong+=1,D("answer_wrong")),ye(),Z(),T(),P()}function MS(e,t="0",n=""){Am("reading",e,t,n)}function KS(e,t="0",n=""){Am("listening",e,t,n)}function Am(e,t,n="0",s=""){const o=(e==="reading"?r.n3Reading:r.n3Listening).find(x=>x.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=W(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,f=e==="reading"?m.completedReading:m.completedListening,S=!!f[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const C=(o.questions||[]).every((x,L)=>h[`${o.id}:${L}`]?.correct);if(d?(r.progress.totalCorrect+=1,D("answer_correct")):(r.progress.totalWrong+=1,D("answer_wrong")),C&&!S){f[o.id]=new Date().toISOString();const x=e==="reading"?r.n3Meta?.rewards?.readingXp||38:r.n3Meta?.rewards?.listeningXp||34,L=e==="reading"?r.n3Meta?.rewards?.readingMoon||4:r.n3Meta?.rewards?.listeningMoon||4;H(x,L,`n3_${e}:${o.id}`)}ye(),Z(),T(),P()}function DS(e){const t=ts(e);t&&(wn("textbook-lesson",{level:"N3",lessonId:t.id}),W().currentLessonId=t.id,Rt("N3",t.id,"n3_lesson_open"),cn("N3",t,"n3_lesson_open"),ns(t.id))}function FS(){ns("")}function OS(e=null){e&&(W().activeReviewMode=e),ns("review")}function BS(){ns("kanji")}function zS(){ns("grammar")}function US(){ns("reading")}function JS(){ns("listening")}function GS(){ns("final-test")}function ns(e){r.route="textbooks",r.activeTextbookLevel="N3",r.activeTextbookSubroute=e||null,W().opened=!0;const t=e?`#jlpt/n3/${encodeURIComponent(e)}`:"#jlpt/n3";jt(t),Z(),T(),pe(),Ft()}function qS(e="due"){const t=Date.now(),n=W(),s=nt();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=J(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Im(){const e=nt();if(!e.length)return[];const t=r.n3FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n3FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=gt().find(d=>d.kanji.includes(o.kanji))||gt()[0];s.push(HS(l,o,c,a))}return s.filter(Boolean)}function HS(e,t,n,s){const o=xt(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:mt({value:t.id,label:K(t)},nt().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:mt({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},nt().flatMap(c=>xt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=b({ru:l.ru,en:l.en});return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:mt({value:c,label:c},gt().flatMap(d=>d.sentences||[]).map(d=>({value:b({ru:d.ru,en:d.en}),label:b({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:ms(o),answer:c,answerLabel:c,options:mt({value:c,label:c},nt().flatMap(d=>xt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n3Grammar[s%Math.max(r.n3Grammar.length,1)];if(c)return{id:`n3-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${b(c.question||c.explanation)}`,answer:V(c),answerLabel:V(c),options:mt({value:V(c),label:V(c)},qe(c).filter(d=>d!==V(c)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n3Reading[s%Math.max(r.n3Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n3-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||b(c.title)} ${b(d.prompt)}`,answer:d.answer,answerLabel:b((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:b(u.label||u)}))}}return e==="srs"?{id:`n3-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n3-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:mt({value:t.kanji,label:t.kanji},nt().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function VS(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(W().finalTest.answers[t]=n,T(),P())}function Tm(e=!1){if(r.finalTestBusy)return;const t=W().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}r.finalTestBusy=!0;try{const n=Im(),s=r.n3FinalTest||{},a=Ne(),o=hn(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const N=o.firstMissingId?`#${Lr("n3",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N3",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=N,T();return}let u=0;const m=[],h=[];n.forEach(N=>{const z=String(t.answers?.[N.id]||"").trim();if(z===N.answer){if(u+=1,N.kanji&&jr(N.kanji,N.cardId),N.grammarId){const q=W();q.completedGrammar[N.grammarId]=q.completedGrammar[N.grammarId]||d}}else z||h.push(N),m.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:z}),N.kanji&&Ca(N.kanji,N.cardId)});const f=n.length?Math.round(u/n.length*100):0,S=!!t.completedAt,C=!!t.passed,x=Math.max(0,m.length-h.length);let L=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=f,t.passed=f>=l,t.correctAnswers=u,t.incorrectAnswers=x,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(N=>N.id),t.completedAt=d,t.lastScore=f,t.bestScore=Math.max(Number(t.bestScore||0),f),t.passedAt=t.passed?C&&t.passedAt||d:t.passedAt||null,!S){const N=Number(s?.rewards?.completeXp||220),z=Number(s?.rewards?.completeMoon||40);L+=N,k+=z,H(N,z,"n3_final_complete")}if(t.passed&&!C){const N=Number(s?.rewards?.passXp||110),z=Number(s?.rewards?.passMoon||18);L+=N,k+=z,H(N,z,"n3_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=k,Va("N3",t),W(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N3",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:f,correct:u,incorrect:x,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n3-review",reviewAllAction:"n3-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},Z(),T()}catch(n){console.error(n),G(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,P()}}function WS(){W().finalTest=Dl().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,T(),P()}function Rm(e){return`n3-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function XS(e){r.activeTextbookLevel="N2",r.activeJlptLesson="N2";const t=Pc();t.opened||(t.opened=!0,Z({silent:!0}),T());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return c0();if(n==="review")return s0();if(n==="kanji")return a0();if(n==="grammar")return i0();if(n==="reading")return o0();if(n==="listening")return l0();const s=ss(n);return s?(X().currentLessonId=s.id,Rt("N2",s.id,"n2_lesson_page"),cn("N2",s,"n2_lesson_page"),ZS(e,s)):QS(e)}function QS(e){const t=g0(),n=Le(),s=ft(),a=u0(),o=r.n2Meta||{},l=b(o.principle||{});return`
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
            ${s.map(c=>YS(c)).join("")}
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
    `}function YS(e){const t=Km(e.id),n=Le();let s=e.kanji.filter(a=>X().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n2/${g(e.id)}" data-action="n2-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(b(e.title))}</h3>
        <p>${i(b(e.goal))}</p>
        <div class="n5-kanji-strip n2-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(m0(t))}</small>
      </a>
    `}function ZS(e,t){const n=Le(),s=Sr(t),a=xa(t),o=Km(t.id),l=Ms("N2",t,s);let c=o==="completed";const d=`n2:${t.id}`;je.has(d)&&(c=!0);const u=c,m=a.filter(U=>Mc(U.id)?.correct).length,h=a.length>0&&m===a.length,f=s.filter(U=>X().studiedKanji[U.kanji]).length,S=t.kanji.length,C=f>=S,x=!c&&h&&C,L=t.kanji.filter(U=>X().difficultKanji[U]).join(" · "),k=ft().find(U=>U.order===t.order+1),N=_m(t),z=N?!!X().completedReading[N.id]:!1,q=Ut("N2",t.id,"player"),Ys=Ut("N2",t.id,"test");return`
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

        ${ma("N2",t,s,n,{playerId:q,answerAction:"jlpt-lesson-answer",examples:U=>Nt(U),sentence:U=>t0(U,t)})}

        ${n0(t)}

        ${e0(t)}

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
            ${a.map(U=>Pm(U)).join("")}
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
    `}function _m(e){return e?.miniReadingId&&r.n2Reading.find(t=>t.id===e.miniReadingId)||null}function e0(e){const t=Le(),n=_m(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${_c(n,"reading")}
      </section>
    `:""}function t0(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(ee(n.reading||""))}</span>
        <small>${i(b({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Le().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function n0(e){const t=Le(),n=(e.grammarFocus||[]).map(s=>Ec(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n2-grammar-complete" data-id="${g(s.id)}" data-value="${g(V(s))}">${i(X().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function Pm(e){const t=Le(),n=Mc(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&Yn("N2",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(b(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(Jm(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(b(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n2-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${Em(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(b(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
            ${va("N2",e).map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n2-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${Em(e,n)}
      </article>
    `}function Em(e,t){if(!t)return"";const n=Le(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function s0(e){const t=Le(),n=X().activeReviewMode||"due",s=I0(n);return`
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
          ${s.map((a,o)=>r0(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function r0(e,t){const n=Le(),s=J(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Yt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(Nt(e)[0]?.word||e.hiragana||"")} · ${i(Nt(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n2-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function a0(e){const t=Le(),n=st();return`
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
    `}function i0(e){const t=Le();return`
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
                  ${(qe(n).length?qe(n):[V(n)]).map(a=>`
                    <button class="btn ${s?.selected===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n2-grammar-complete" data-id="${g(n.id)}" data-value="${g(a)}">${i(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${V(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function o0(e){const t=Le(),n=Ga("N2","n2_reading_page"),s=Pr("N2");return(n||s)&&T(),`
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
          ${r.n2Reading.map(a=>_c(a,"reading")).join("")}
        </div>
      </section>
    `}function l0(e){const t=Le();return`
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
          ${r.n2Listening.map(n=>_c(n,"listening")).join("")}
        </div>
      </section>
    `}function _c(e,t){const n=Le(),s=t==="reading"?X().completedReading[e.id]:X().completedListening[e.id],a=t==="reading"?X().readingAnswers:X().listeningAnswers,o=t==="reading"?"n2-reading-complete":"n2-listening-complete";return`
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
    `}function c0(e){const t=Le(),n=r.n2FinalTest||{},s=zm(),a=X().finalTest,o=hn(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),T()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
            ${Qt("N2","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>d0(m,h)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n2-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Qt("N2","btn ghost")}
          <button class="btn ghost" type="button" data-action="n2-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function d0(e,t){const n=X().finalTest.answers?.[e.id],s=!!X().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n2-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Le().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Le(){return p()==="ru"?{title:"JLPT N2",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N2: абзацы, аргументы, выводы и позиция автора",continue:"Продолжить",review:"Повторять N2",openKanji:"Открыть список кандзи",grammarN2:"Грамматика N2",readingN2:"Чтение N2",listeningN2:"Аудирование N2",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"Повторение",lessons:"уроков",lessonsTitle:"38 уроков примерно по 10 кандзи",lessonsDescription:"Каждый урок связывает кандзи, слово, грамматику, абзац, авторскую позицию, вывод, письмо и повторение.",reviewPlan:"План повторения на 90 дней",day:"день",lesson:"Урок",backToN2:"К N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"Если база N5, N4 или N3 дырявая, N2 будет ощущаться как стена. Перед стартом проверь частицы, связки, условные формы, N3-грамматику и навык видеть причину, уступку и вывод в абзаце.",reviewN5Base:"Повторить N5/N4/N3 перед N2",lessonChain:"Кандзи -> слово -> грамматика -> абзац -> позиция автора -> вывод -> повторение",lessonChainText:"N2 больше не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1-3 конструкции, которые сразу связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми, о чём текст, где причина, где уступка, что противопоставлено и к какому выводу ведёт короткий N2-абзац.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N2-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N2.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"380 кандзи N2",kanjiListText:"Полный список из учебника: можно быстро добавить знаки в повторение или открыть письмо.",grammarTitle:"120 грамматических конструкций N2",grammarText:"Рабочие карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе и живом контексте.",readingTitle:"Тексты для чтения N2",readingText:"Короткие тексты и mini-readings уроков связывают кандзи, слова, грамматику, авторскую позицию и выводы в живой контекст.",listeningTitle:"Скрипты для аудирования N2",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing и проверки понимания.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N2",finalPassed:"N2 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N2",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N2 textbook: paragraphs, arguments, conclusions, and author stance",continue:"Continue",review:"Review N2",openKanji:"Open kanji list",grammarN2:"N2 grammar",readingN2:"N2 reading",listeningN2:"N2 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"38 lessons, about 10 kanji each",lessonsDescription:"Each lesson connects kanji, word, grammar, paragraph logic, author stance, writing, and SRS.",reviewPlan:"90-day review plan",day:"day",lesson:"Lesson",backToN2:"To N2",n5Bridge:"N5/N4/N3 bridge",n5BridgeText:"If the N5, N4, or N3 base is shaky, N2 feels like a wall. Review particles, support grammar, N3 connectors, and the habit of spotting cause, concession, and conclusion in a paragraph.",reviewN5Base:"Review N5/N4/N3 before N2",lessonChain:"Kanji -> word -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N2 is not a bare list: each sign gets a word, a formal link, a mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N2 review and the shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1-3 constructions that push kanji into viewpoint, cause, and conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N2 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N2 review",reviewDescription:"Review due cards, difficult kanji, or the full N2 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"380 N2 kanji",kanjiListText:"Full textbook list with quick SRS and writing actions.",grammarTitle:"120 N2 grammar constructions",grammarText:"Compact cards with function, formula, example, and a comprehension check for practical written Japanese.",readingTitle:"N2 reading texts",readingText:"Short texts and lesson mini readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N2 listening scripts",listeningText:"Read dialogues aloud, use TTS, or shadow them as listening scripts.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N2",finalPassed:"N2 passed",finalPassedText:"Great. You can send mistakes back to SRS separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked difficult and raised in SRS."}}function Pc(){var s;(s=r.progress).n2Course||(s.n2Course=Fl());const e=ft();!ss(r.progress.n2Course.currentLessonId)&&e[0]&&(r.progress.n2Course.currentLessonId=e[0].id);const n=e.find(a=>!r.progress.n2Course.completedLessons[a.id]);return!r.progress.n2Course.currentLessonId&&n&&(r.progress.n2Course.currentLessonId=n.id),r.progress.n2Course}function X(){return r.progress.n2Course||Pc()}function ft(){return r.n2Textbook?.items||[]}function ss(e){const t=String(e||"");return t&&ft().find(n=>n.id===t||n.id===`n2-${t}`||n.id.endsWith(`-${t}`))||null}function u0(){return ss(X().currentLessonId)||ft().find(e=>!X().completedLessons[e.id])||ft()[0]||null}function Sr(e){return(e?.kanji||[]).map(t=>Mm(t)).filter(Boolean)}function st(){return qa("N2",p0)}function p0(){const e=new Set;return(r.n2KanjiCatalog||[]).map(t=>Mm(t.kanji)).filter(Boolean).filter(t=>e.has(t.kanji)?!1:(e.add(t.kanji),!0))}function Mm(e){const t=String(e||""),n=r.n2KanjiCatalog?.find(a=>a.kanji===t)||null,s=r.cards.find(a=>a.kanji===t&&String(a.jlpt||"").toUpperCase()==="N2")||(n?r.cards.find(a=>String(a.id)===String(n.courseCardId||n.id)):null)||null;return s&&n?zi(s,n):s||(n?zi({id:n.courseCardId||n.id,kanji:n.kanji,lessonId:n.lessonId,jlpt:"N2",examples:[]},n):null)}function Ec(e){const t=String(e||"");return r.n2Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function Nt(e){return ha(e,e.examples)}function g0(){const e=st(),t=X(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{J(s.id).state!=="New"&&n.add(s.kanji)}),{total:r.n2Meta?.kanjiCount||e.length||380,studied:n.size,completedLessons:Ds("N2"),completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((s,a)=>s+Number(J(a.id).reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Km(e){return hr("N2",e)}function m0(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function xa(e){const t=Sr(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n2Exercises?.types||[]).map(k=>[k.type,k.title])),a=Object.fromEntries((r.n2Exercises?.types||[]).map(k=>[k.type,k])),o=k=>a[k]||{rewardXp:r.n2Meta?.rewards?.exerciseXp||11,rewardMoon:r.n2Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:ht({value:c.id,label:K(c)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:ht({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=Nt(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:ht({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(k=>Nt(k).map(N=>({value:N.reading,label:N.reading}))).filter(k=>k.value&&k.value!==m.reading),3),...o("reading")});const h=n[0];h&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:b({ru:h.ru,en:h.en}),answerLabel:b({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:ht({value:b({ru:h.ru,en:h.en}),label:b({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:b({ru:k.ru,en:k.en}),label:b({ru:k.ru,en:k.en})})),1),...o("sentence")});const f=t[3]||t[0],S=Nt(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:Ya(S),answer:S.word||f.kanji,answerLabel:S.word||f.kanji,kanji:f.kanji,cardId:f.id,options:ht({value:S.word||f.kanji,label:S.word||f.kanji},t.flatMap(k=>Nt(k).map(N=>({value:N.word,label:N.word}))).filter(k=>k.value&&k.value!==S.word),2),...o("missing-word")});const C=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(C)}`:`Type the kanji for: ${K(C)}`,answer:C.kanji,answerLabel:C.kanji,kanji:C.kanji,cardId:C.id,options:[],...o("active-recall")});const x=Ec(e.grammarFocus?.[0]);x&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:b(x.question||x.explanation),answer:V(x),answerLabel:V(x),kanji:t[0].kanji,cardId:t[0].id,grammarId:x.id,options:ht({value:V(x),label:V(x)},qe(x).filter(k=>k!==V(x)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:b({ru:L.ru,en:L.en}),answerLabel:b({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:ht({value:b({ru:L.ru,en:L.en}),label:b({ru:L.ru,en:L.en})},n.filter(k=>k.jp!==L.jp).map(k=>({value:b({ru:k.ru,en:k.en}),label:b({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),l.slice(0,r.n2Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N2",lessonId:e.id}))}function ht(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),st().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function Dm(e){for(const t of ft()){const n=xa(t).find(s=>s.id===e);if(n)return n}return null}function Mc(e){return wa("N2",X(),e)}function f0(e){const t=Dm(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Fm(t,s,a)}function h0(e){const t=Dm(e);if(!t)return;const n=document.getElementById(Jm(t.id)),s=n?String(n.value||"").trim():"";Fm(t,s,s===t.answer)}function Fm(e,t,n){const s=X();ba("N2",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n2Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||r.n2Meta?.rewards?.exerciseMoon||1),rewardKey:`n2_exercise:${e.id}`,quietReward:!0,markStudied:()=>Cr(e.kanji,e.cardId),markDifficult:()=>Na(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Om(e,t,n="review",s={}){const a=oe(e)||st().find(S=>String(S.id)===String(e));if(!a)return;const o=s.scrollPolicy||(n==="review"?se.TOP:se.PRESERVE),l=s.viewportSnapshot||he(),c=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,m=d?"hard":t,h=ie(J(a.id)),f=$e(h,u,m);r.progress.cards[a.id]=f,Vt(h,f,m),ye(),Cr(a.kanji,a.id),X().srsKanji[a.kanji]=new Date().toISOString(),d?(Na(a.kanji,a.id,!1),r.progress.totalCorrect+=1,H(r.n2Meta?.rewards?.hardXp||2,1,`n2_srs_lesson_hard:${a.id}`,{silent:c})):Be(t)?(Na(a.kanji,a.id),r.progress.totalWrong+=1,H(r.n2Meta?.rewards?.hardXp||2,0,`n2_srs_hard:${a.id}`,{silent:c})):(r.progress.totalCorrect+=1,H(t==="easy"?r.n2Meta?.rewards?.knowXp||9:r.n2Meta?.rewards?.addToSrsXp||7,1,`n2_srs:${a.id}`,{silent:c})),ue({scrollPolicy:o,viewportSnapshot:l}),T(),Kt("N2 SRS post-render effects",()=>{D(Be(t)?"answer_wrong":"answer_correct"),Z({silent:c})},{scrollPolicy:o,viewportSnapshot:l})}function v0(e){const t=oe(e)||st().find(s=>String(s.id)===String(e));if(!t)return;const n=X();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Cr(t.kanji,t.id),H(9,1,`n2_writing:${t.id}`)),Z(),T(),P()}function w0(e){const t=ss(e);if(!t)return;const n=X(),s=`n2:${t.id}`;if(je.has(s)||n.completedLessons[t.id]){P();return}const a=Sr(t);if(a.filter(f=>n.studiedKanji[f.kanji]).length<t.kanji.length){const f=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof G=="function"&&G(f);return}const l=xa(t);if(!(l.length>0&&l.every(f=>Mc(f.id)?.correct))){const f=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof G=="function"&&G(f);return}je.add(s),Sr(t).forEach(f=>{Cr(f.kanji,f.id),n.srsKanji[f.kanji]=n.srsKanji[f.kanji]||new Date().toISOString();const S=J(f.id);S.state==="New"&&(r.progress.cards[f.id]=$e(ie(S),"good"))}),(t.grammarFocus||[]).map(f=>Ec(f)).filter(Boolean).forEach(f=>{n.completedGrammar[f.id]=n.completedGrammar[f.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=ft().find(f=>f.order===t.order+1)?.id||t.id;const d=Xn(),u=d.sessions[Ye("N2",t.id)];if(u){const f=new Date().toISOString();u.phase="done",u.completedAt=f,u.updatedAt=f,u.currentIndex=a.length,d.activeSessionKey=Ye("N2",t.id),d.lastUpdatedAt=f}X(),vr("N2");const m=r.n2Meta?.rewards?.lessonCompleteXp||85,h=r.n2Meta?.rewards?.lessonCompleteMoon||10;H(m,h,`n2_lesson:${t.id}`),Dr("N2",t.id),bt({title:`${Le().lessonComplete}: ${b(t.title)}`,message:Le().lessonCompleteText,xp:m,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Z(),T(),P()}function Cr(e,t=null){if(!e)return;const n=X();cr(n,e)}function Na(e,t=null,n=!0){if(e&&(X().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=J(t);s.state!=="New"&&(r.progress.cards[t]=$e(ie(s),"again"))}}function b0(e,t=""){const n=r.n2Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=V(n),a=t||s,o=a===s,l=X();l.grammarResults[n.id]={selected:a,correct:o,checkedAt:new Date().toISOString()},o&&!l.completedGrammar[n.id]?(l.completedGrammar[n.id]=new Date().toISOString(),H(r.n2Meta?.rewards?.grammarXp||12,r.n2Meta?.rewards?.grammarMoon||1,`n2_grammar:${n.id}`),r.progress.totalCorrect+=1,D("answer_correct")):o||(r.progress.totalWrong+=1,D("answer_wrong")),ye(),Z(),T(),P()}function k0(e,t="0",n=""){Bm("reading",e,t,n)}function y0(e,t="0",n=""){Bm("listening",e,t,n)}function Bm(e,t,n="0",s=""){const o=(e==="reading"?r.n2Reading:r.n2Listening).find(x=>x.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=X(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,f=e==="reading"?m.completedReading:m.completedListening,S=!!f[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const C=(o.questions||[]).every((x,L)=>h[`${o.id}:${L}`]?.correct);if(d?(r.progress.totalCorrect+=1,D("answer_correct")):(r.progress.totalWrong+=1,D("answer_wrong")),C&&!S){f[o.id]=new Date().toISOString();const x=e==="reading"?r.n2Meta?.rewards?.readingXp||42:r.n2Meta?.rewards?.listeningXp||38,L=e==="reading"?r.n2Meta?.rewards?.readingMoon||4:r.n2Meta?.rewards?.listeningMoon||4;H(x,L,`n2_${e}:${o.id}`)}ye(),Z(),T(),P()}function $0(e){const t=ss(e);t&&(wn("textbook-lesson",{level:"N2",lessonId:t.id}),X().currentLessonId=t.id,Rt("N2",t.id,"n2_lesson_open"),cn("N2",t,"n2_lesson_open"),rs(t.id))}function j0(){rs("")}function S0(e=null){e&&(X().activeReviewMode=e),rs("review")}function C0(){rs("kanji")}function x0(){rs("grammar")}function N0(){rs("reading")}function L0(){rs("listening")}function A0(){rs("final-test")}function rs(e){r.route="textbooks",r.activeTextbookLevel="N2",r.activeTextbookSubroute=e||null,X().opened=!0;const t=e?`#jlpt/n2/${encodeURIComponent(e)}`:"#jlpt/n2";jt(t),Z(),T(),pe(),Ft()}function I0(e="due"){const t=Date.now(),n=X(),s=st();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=J(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function zm(){const e=st();if(!e.length)return[];const t=r.n2FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n2FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=ft().find(d=>d.kanji.includes(o.kanji))||ft()[0];s.push(T0(l,o,c,a))}return s.filter(Boolean)}function T0(e,t,n,s){const o=Nt(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:ht({value:t.id,label:K(t)},st().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:ht({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},st().flatMap(c=>Nt(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=b({ru:l.ru,en:l.en});return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:ht({value:c,label:c},ft().flatMap(d=>d.sentences||[]).map(d=>({value:b({ru:d.ru,en:d.en}),label:b({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:ms(o),answer:c,answerLabel:c,options:ht({value:c,label:c},st().flatMap(d=>Nt(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n2Grammar[s%Math.max(r.n2Grammar.length,1)];if(c)return{id:`n2-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${b(c.question||c.explanation)}`,answer:V(c),answerLabel:V(c),options:ht({value:V(c),label:V(c)},qe(c).filter(d=>d!==V(c)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n2Reading[s%Math.max(r.n2Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n2-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||b(c.title)} ${b(d.prompt)}`,answer:d.answer,answerLabel:b((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:b(u.label||u)}))}}return e==="srs"?{id:`n2-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n2-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:ht({value:t.kanji,label:t.kanji},st().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function R0(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(X().finalTest.answers[t]=n,T(),P())}function Um(e=!1){if(r.finalTestBusy)return;const t=X().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}r.finalTestBusy=!0;try{const n=zm(),s=r.n2FinalTest||{},a=Le(),o=hn(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const N=o.firstMissingId?`#${Lr("n2",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N2",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=N,T();return}let u=0;const m=[],h=[];n.forEach(N=>{const z=String(t.answers?.[N.id]||"").trim();if(z===N.answer){if(u+=1,N.kanji&&Cr(N.kanji,N.cardId),N.grammarId){const q=X();q.completedGrammar[N.grammarId]=q.completedGrammar[N.grammarId]||d}}else z||h.push(N),m.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:z}),N.kanji&&Na(N.kanji,N.cardId)});const f=n.length?Math.round(u/n.length*100):0,S=!!t.completedAt,C=!!t.passed,x=Math.max(0,m.length-h.length);let L=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=f,t.passed=f>=l,t.correctAnswers=u,t.incorrectAnswers=x,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(N=>N.id),t.completedAt=d,t.lastScore=f,t.bestScore=Math.max(Number(t.bestScore||0),f),t.passedAt=t.passed?C&&t.passedAt||d:t.passedAt||null,!S){const N=Number(s?.rewards?.completeXp||220),z=Number(s?.rewards?.completeMoon||40);L+=N,k+=z,H(N,z,"n2_final_complete")}if(t.passed&&!C){const N=Number(s?.rewards?.passXp||110),z=Number(s?.rewards?.passMoon||18);L+=N,k+=z,H(N,z,"n2_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=k,Va("N2",t),X(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N2",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:f,correct:u,incorrect:x,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n2-review",reviewAllAction:"n2-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},Z(),T()}catch(n){console.error(n),G(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,P()}}function _0(){X().finalTest=Fl().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,T(),P()}function Jm(e){return`n2-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function P0(e){r.activeTextbookLevel="N1",r.activeJlptLesson="N1";const t=mo();t.opened||(t.opened=!0,Z({silent:!0}),T());const n=String(r.activeTextbookSubroute||"");if(n==="final-test"||n==="final")return V0();if(n==="review")return z0();if(n==="kanji")return J0();if(n==="grammar")return G0();if(n==="reading")return q0();if(n==="listening")return H0();const s=Os(n);return s?(ne().currentLessonId=s.id,Rt("N1",s.id,"n1_lesson_page"),cn("N1",s,"n1_lesson_page"),K0(e,s)):E0(e)}function E0(e){const t=Y0(),n=Ae(),s=vt(),a=X0(),o=r.n1Meta||{},l=b(o.principle||{});return`
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
            ${s.map(c=>M0(c)).join("")}
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
    `}function M0(e){const t=Vm(e.id),n=Ae();let s=e.kanji.filter(a=>ne().studiedKanji[a]).length;return t==="completed"&&(s=e.kanji.length),`
      <a class="n5-lesson-tile ${t}" href="#jlpt/n1/${g(e.id)}" data-action="n1-open-lesson" data-id="${g(e.id)}">
        <span class="pill">${i(n.lesson)} ${e.order}</span>
        <h3>${i(b(e.title))}</h3>
        <p>${i(b(e.goal))}</p>
        <div class="n5-kanji-strip n1-kanji-strip">${e.kanji.map(a=>`<b>${i(a)}</b>`).join("")}</div>
        <div class="achievement-progress" aria-label="${g(`${s}/${e.kanji.length}`)}"><i style="width:${E(s,e.kanji.length)}%"></i></div>
        <small>${i(s)}/${i(e.kanji.length)} · ${i(Z0(t))}</small>
      </a>
    `}function K0(e,t){const n=Ae(),s=La(t),a=Aa(t),o=Vm(t.id),l=Ms("N1",t,s);let c=o==="completed";const d=`n1:${t.id}`;je.has(d)&&(c=!0);const u=c,m=a.filter(U=>Oc(U.id)?.correct).length,h=a.length>0&&m===a.length,f=s.filter(U=>ne().studiedKanji[U.kanji]).length,S=t.kanji.length,C=f>=S,x=!c&&h&&C,L=t.kanji.filter(U=>ne().difficultKanji[U]).join(" · "),k=vt().find(U=>U.order===t.order+1),N=Gm(t),z=N?!!ne().completedReading[N.id]:!1,q=Ut("N1",t.id,"player"),Ys=Ut("N1",t.id,"test");return`
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

        ${ma("N1",t,s,n,{playerId:q,answerAction:"jlpt-lesson-answer",examples:U=>At(U),sentence:U=>F0(U,t)})}

        ${O0(t)}

        ${D0(t)}

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
            ${a.map(U=>B0(U)).join("")}
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
    `}function Gm(e){return e?.miniReadingId&&r.n1Reading.find(t=>t.id===e.miniReadingId)||null}function D0(e){const t=Ae(),n=Gm(e);return n?`
      <section class="n5-panel">
        <div>
          <h2>${i(t.miniReadingTitle)}</h2>
          <p>${i(t.miniReadingText)}</p>
        </div>
        ${Kc(n,"reading")}
      </section>
    `:""}function F0(e,t){const n=t.sentences.find(a=>a.jp.includes(e.kanji))||t.sentences[0];if(!n)return"";const s=(t.grammarFocus||[]).find(a=>n.jp.includes(String(a).replace(/[“~〜].*/,"")))||t.grammarFocus?.[0]||"";return`
      <div class="n5-card-sentence">
        <strong>${i(n.jp)}</strong>
        <span>${i(ee(n.reading||""))}</span>
        <small>${i(b({ru:n.ru,en:n.en}))}</small>
        ${s?`<small>${i(Ae().grammar)}: ${i(s)}</small>`:""}
      </div>
    `}function O0(e){const t=Ae(),n=(e.grammarFocus||[]).map(s=>Fc(s)).filter(Boolean).slice(0,3);return n.length?`
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
              <button class="btn ghost" type="button" data-action="n1-grammar-complete" data-id="${g(s.id)}" data-value="${g(V(s))}">${i(ne().completedGrammar[s.id]?t.completed:t.markGrammar)}</button>
            </article>
          `).join("")}
        </div>
      </section>
    `:""}function B0(e){const t=Ae(),n=Oc(e.id),s=n?n.correct?"is-correct":"is-wrong":"",a=r.route==="review"&&Yn("N1",e.id)&&!!n;return e.type==="active-recall"?`
        <article class="n5-exercise-card ${s}">
          <span class="pill">${i(b(e.title))}</span>
          <h3>${i(e.prompt)}</h3>
          <div class="n5-input-row">
            <input id="${g(tf(e.id))}" type="text" maxlength="3" autocomplete="off" value="${g(n?.selected||"")}" aria-label="${g(b(e.title))}" ${a?"disabled":""} />
            <button class="btn primary" type="button" data-action="n1-check-input" data-id="${g(e.id)}" ${a?"disabled":""}>${i(t.check)}</button>
            <button class="btn ghost" type="button" data-action="n1-answer" data-id="${g(e.id)}" data-value="" ${a?"disabled":""}>${i(t.showAnswer)}</button>
          </div>
          ${qm(e,n)}
        </article>
      `:`
      <article class="n5-exercise-card ${s}">
        <span class="pill">${i(b(e.title))}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
            ${va("N1",e).map(o=>{const l=n?.selected===o.value;return`<button class="btn ${n&&o.value===e.answer?"success":l?"warning":"ghost"}" type="button" data-action="n1-answer" data-id="${g(e.id)}" data-value="${g(o.value)}" ${a?"disabled":""}>${i(o.label)}</button>`}).join("")}
        </div>
        ${qm(e,n)}
      </article>
    `}function qm(e,t){if(!t)return"";const n=Ae(),s=t.correct?n.correctAnswer:`${n.wrongAnswer}: ${e.answerLabel||e.answer}`;return`<p class="n5-feedback">${i(s)}</p>`}function z0(e){const t=Ae(),n=ne().activeReviewMode||"due",s=fC(n);return`
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
          ${s.map((a,o)=>U0(a,o)).join("")||`<article class="empty-state"><h3>${i(t.noReviewCards)}</h3></article>`}
        </div>
      </section>
    `}function U0(e,t){const n=Ae(),s=J(e.id);return`
      <article class="n5-kanji-card n5-review-card">
        <div class="n5-kanji-topline">
          <span class="pill">${t+1}</span>
          <span class="pill">${i(s.state)} · ${i(Yt(s.dueAt))}</span>
        </div>
        <div class="n5-big-kanji">${i(e.kanji)}</div>
        <h3>${i(K(e))}</h3>
        <p>${i(At(e)[0]?.word||e.hiragana||"")} · ${i(At(e)[0]?.reading||e.romaji||"")}</p>
        <div class="textbook-actions">
          <button class="btn success" type="button" data-action="n1-srs" data-id="${g(e.id)}" data-rating="easy">${i(n.know)}</button>
          <button class="btn warning" type="button" data-action="n1-srs" data-id="${g(e.id)}" data-rating="again">${i(n.hard)}</button>
        </div>
      </article>
    `}function J0(e){const t=Ae(),n=Lt(),s=n.slice(0,160);return`
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
    `}function G0(e){const t=Ae();return`
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
                  ${(qe(n).length?qe(n):[V(n)]).map(a=>`
                    <button class="btn ${s?.selected===a?s.correct?"success":"warning":"ghost"}" type="button" data-action="n1-grammar-complete" data-id="${g(n.id)}" data-value="${g(a)}">${i(a)}</button>
                  `).join("")}
                </div>
                ${s?`<p class="n5-feedback">${i(s.correct?t.correctAnswer:`${t.wrongAnswer}: ${V(n)}`)}</p>`:""}
              </article>
            `}).join("")}
        </div>
      </section>
    `}function q0(e){const t=Ae(),n=Ga("N1","n1_reading_page"),s=Pr("N1");return(n||s)&&T(),`
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
          ${r.n1Reading.map(a=>Kc(a,"reading")).join("")}
        </div>
      </section>
    `}function H0(e){const t=Ae();return`
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
          ${r.n1Listening.map(n=>Kc(n,"listening")).join("")}
        </div>
      </section>
    `}function Kc(e,t){const n=Ae(),s=t==="reading"?ne().completedReading[e.id]:ne().completedListening[e.id],a=t==="reading"?ne().readingAnswers:ne().listeningAnswers,o=t==="reading"?"n1-reading-complete":"n1-listening-complete";return`
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
    `}function V0(e){const t=Ae(),n=r.n1FinalTest||{},s=Zm(),a=ne().finalTest,o=hn(a,s),l=o.answered,c=o.ready;if(a&&typeof a.score=="number"&&a.score>0&&a.totalQuestions>0){const m=Math.round(a.score/a.totalQuestions*100);(!a.percent||a.percent===0||a.percent!==m)&&(a.percent=m),a.completedAt||(a.completedAt=new Date().toISOString()),T()}const d=!!a.completedAt||typeof a.percent=="number"&&a.percent>0||typeof a.score=="number"&&a.score>0,u=typeof a.percent=="number"&&a.percent>0?a.percent:Number(a.score||0)&&a.totalQuestions?Math.round(a.score/a.totalQuestions*100):0;return`
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
            ${Qt("N1","btn primary")}
          </section>
        `:""}

        <div class="n5-exercise-list">
          ${s.map((m,h)=>W0(m,h)).join("")}
        </div>
        ${c?"":`<p class="n5-feedback">${i(p()==="ru"?"Ответь на все вопросы перед завершением теста.":"Answer all questions before finishing the test.")}</p>`}
        <div class="n5-final-actions">
          <button class="btn primary" type="button" data-action="n1-final-submit" ${r.finalTestBusy?"disabled":""}>${i(t.submitFinal)}</button>
          ${Qt("N1","btn ghost")}
          <button class="btn ghost" type="button" data-action="n1-review" data-mode="all">${i(t.reviewAll)}</button>
        </div>
      </section>
    `}function W0(e,t){const n=ne().finalTest.answers?.[e.id],s=!!ne().finalTest.completedAt;return`
      <article class="n5-exercise-card ${s?n===e.answer?"is-correct":"is-wrong":""}">
        <span class="pill">${t+1} · ${i(e.type)}</span>
        <h3>${i(e.prompt)}</h3>
        <div class="n5-option-grid">
          ${e.options.map(a=>{const o=n===a.value;return`<button class="btn ${s&&a.value===e.answer?"success":o?"primary":"ghost"}" type="button" data-action="n1-final-answer" data-id="${g(e.id)}" data-value="${g(a.value)}">${i(a.label)}</button>`}).join("")}
        </div>
        ${s&&n!==e.answer?`<p class="n5-feedback">${i(Ae().wrongAnswer)}: ${i(e.answerLabel)}</p>`:""}
      </article>
    `}function Ae(){return p()==="ru"?{title:"JLPT N1",allTextbooks:"Все учебники",pdf:"PDF-учебник",kanji:"кандзи",grammar:"грамматика",courseMap:"Интерактивный учебник N1: редкие знаки, формальная лексика, плотные тексты и выводы",continue:"Продолжить",review:"Повторять N1",openKanji:"Открыть список кандзи",grammarN1:"Грамматика N1",readingN1:"Чтение N1",listeningN1:"Аудирование N1",finalTest:"Финальный тест",studiedKanji:"Изучено",completedLessons:"Уроки",completedGrammar:"Грамматика",completedReading:"Чтение",completedListening:"Аудирование",reviews:"Повторения",difficult:"Сложные",srs:"SRS",lessons:"уроков",lessonsTitle:"53 урока: 52×20 кандзи и финальный урок на 7 знаков",lessonsDescription:"Каждый урок связывает кандзи, реальные слова, грамматику, мини-текст, позицию автора, письмо и повторение.",reviewPlan:"План повторения на 120 дней",day:"день",lesson:"Урок",backToN1:"К N1",n5Bridge:"База перед N1",n5BridgeText:"N1 стоит на N2: формальные связки, длинные фразы, авторская позиция, уступка, причина и вывод. Если проседает N2, лучше быстро освежить его перед рывком.",reviewN5Base:"Повторить N2 перед N1",lessonChain:"Кандзи -> слово -> чтение -> грамматика -> абзац -> позиция автора -> вывод -> SRS",lessonChainText:"N1 не живёт списком знаков: каждый знак сразу входит в слово, формальную связку, мини-абзац и логику аргумента.",duration:"Длительность",minutes:"мин",exercises:"Упражнения",correct:"верно",sentences:"Примеры предложений",sentencesText:"Прочитай вслух и отметь, где грамматика удерживает смысл и связь между словами.",exercisesText:"Смешанные задания проверяют кандзи, слова, чтение, перевод, грамматику, структуру абзаца, позицию автора и активное вспоминание.",lessonComplete:"Урок завершён",lessonCompleteText:"Кандзи урока добавлены в повторение.",lessonResult:"Итог урока",lessonResultText:"Заверши урок, когда карточки и упражнения готовы к повторению.",completeLesson:"Завершить урок",refreshLesson:"Обновить итог",repeatMistakes:"Повторить ошибки",nextLesson:"Следующий урок",none:"нет",step:"Шаг",onyomi:"онъёми",kunyomi:"кунъёми",addToSrs:"В повторение",know:"Знаю",hard:"Сложно",writingPractice:"Практика письма",markWritten:"Написано",written:"Письмо засчитано",miniGrammar:"Мини-грамматика урока",miniGrammarText:"1–3 конструкции, которые связывают кандзи с точкой зрения, причиной или выводом.",miniReadingTitle:"Мини-reading урока",miniReadingText:"Пойми тему, причину, уступку, противопоставление и вывод внутри короткого N1-абзаца.",markGrammar:"Засчитать конструкцию",completed:"Пройдено",check:"Проверить",showAnswer:"Сложно: показать ответ",correctAnswer:"Верно. XP и Moon Fragment начислены.",wrongAnswer:"Пока нет",reviewTitle:"N1-повторение",reviewDescription:"Повтори due-карточки, сложные кандзи или весь набор N1.",noReviewCards:"Сейчас нет карточек в этом фильтре.",kanjiListTitle:"1047 кандзи N1",kanjiListText:"Список из учебника: карточки можно быстро добавить в повторение или открыть для письма. На странице показывается облегчённая витрина, чтобы не перегружать DOM.",kanjiListLimit:"Показано {shown} из {total}; полный набор доступен по урокам, повторению и поиску приложения.",grammarTitle:"142 грамматические конструкции N1",grammarText:"Карточки с функцией, формулой, примером и проверкой понимания в письменном аргументе.",readingTitle:"Тексты для чтения N1",readingText:"Короткие тексты и mini-readings связывают кандзи, слова, грамматику, авторскую позицию и выводы.",listeningTitle:"Скрипты для аудирования N1",listeningText:"Скрипты можно читать вслух, озвучивать через TTS и использовать для shadowing.",questions:"Вопросы",score:"Результат",mistakes:"Ошибки",resetTest:"Сбросить тест",submitFinal:"Завершить тест",reviewAll:"Повторить весь N1",finalPassed:"N1 пройден",finalPassedText:"Отлично. Ошибки можно отдельно вернуть в повторение.",finalNeedsReview:"Нужно повторить",finalNeedsReviewText:"Ошибки помечены как сложные и подняты в повторение."}:{title:"JLPT N1",allTextbooks:"All textbooks",pdf:"PDF textbook",kanji:"kanji",grammar:"grammar",courseMap:"Interactive N1 textbook: rare kanji, formal vocabulary, dense texts, and conclusions",continue:"Continue",review:"Review N1",openKanji:"Open kanji list",grammarN1:"N1 grammar",readingN1:"N1 reading",listeningN1:"N1 listening",finalTest:"Final test",studiedKanji:"Studied",completedLessons:"Lessons",completedGrammar:"Grammar",completedReading:"Reading",completedListening:"Listening",reviews:"Reviews",difficult:"Difficult",srs:"SRS",lessons:"lessons",lessonsTitle:"53 lessons: 52×20 kanji and a final 7-kanji lesson",lessonsDescription:"Each lesson connects kanji, real words, grammar, mini reading, author stance, writing, and SRS.",reviewPlan:"120-day review plan",day:"day",lesson:"Lesson",backToN1:"To N1",n5Bridge:"Base before N1",n5BridgeText:"N1 stands on N2: formal links, long phrases, author stance, concession, cause, and conclusion.",reviewN5Base:"Review N2 before N1",lessonChain:"Kanji -> word -> reading -> grammar -> paragraph -> author stance -> conclusion -> SRS",lessonChainText:"N1 is not a bare list: every sign gets a word, formal link, mini paragraph, and argument flow.",duration:"Duration",minutes:"min",exercises:"Exercises",correct:"correct",sentences:"Example sentences",sentencesText:"Read aloud and notice where grammar carries meaning and argument flow.",exercisesText:"Mixed tasks check kanji, words, reading, translation, grammar, paragraph structure, author stance, and active recall.",lessonComplete:"Lesson complete",lessonCompleteText:"Lesson kanji are available in N1 review and shared SRS.",lessonResult:"Lesson result",lessonResultText:"Complete the lesson when cards and exercises are ready for review.",completeLesson:"Complete lesson",refreshLesson:"Refresh result",repeatMistakes:"Repeat mistakes",nextLesson:"Next lesson",none:"none",step:"Step",onyomi:"onyomi",kunyomi:"kunyomi",addToSrs:"Send to review",know:"I know",hard:"Hard",writingPractice:"Writing practice",markWritten:"Written",written:"Writing counted",miniGrammar:"Lesson mini grammar",miniGrammarText:"1–3 constructions that push kanji into viewpoint, cause, or conclusion.",miniReadingTitle:"Lesson mini reading",miniReadingText:"Understand the topic, cause, concession, contrast, and conclusion inside the short N1 paragraph.",markGrammar:"Mark construction",completed:"Completed",check:"Check",showAnswer:"Hard: show answer",correctAnswer:"Correct. XP and Moon Fragment awarded.",wrongAnswer:"Not yet",reviewTitle:"N1 review",reviewDescription:"Review due cards, difficult kanji, or the full N1 set.",noReviewCards:"No cards in this filter right now.",kanjiListTitle:"1047 N1 kanji",kanjiListText:"Textbook list: quickly add cards to review or open writing practice. This page renders a light showcase to avoid overloading the DOM.",kanjiListLimit:"Showing {shown} of {total}; the full set is available through lessons, review, and app search.",grammarTitle:"142 N1 grammar constructions",grammarText:"Cards with function, formula, example, and a comprehension check for written arguments.",readingTitle:"N1 reading texts",readingText:"Short texts and mini-readings connect kanji, words, grammar, author stance, and conclusions.",listeningTitle:"N1 listening scripts",listeningText:"Read scripts aloud, speak them with TTS, and use them for shadowing.",questions:"Questions",score:"Score",mistakes:"Mistakes",resetTest:"Reset test",submitFinal:"Finish test",reviewAll:"Review all N1",finalPassed:"N1 passed",finalPassedText:"Excellent. You can send mistakes back to review separately.",finalNeedsReview:"Review needed",finalNeedsReviewText:"Mistakes were marked as difficult and raised in review."}}function mo(){var s;(s=r.progress).n1Course||(s.n1Course=Ol());const e=vt();!Os(r.progress.n1Course.currentLessonId)&&e[0]&&(r.progress.n1Course.currentLessonId=e[0].id);const n=e.find(a=>!r.progress.n1Course.completedLessons[a.id]);return!r.progress.n1Course.currentLessonId&&n&&(r.progress.n1Course.currentLessonId=n.id),r.progress.n1Course}function ne(){return r.progress.n1Course||mo()}function vt(){return r.n1Textbook?.items||[]}function Os(e){const t=String(e||"");return t&&vt().find(n=>n.id===t||n.id===`n1-${t}`||n.id.endsWith(`-${t}`))||null}function X0(){return Os(ne().currentLessonId)||vt().find(e=>!ne().completedLessons[e.id])||vt()[0]||null}function La(e){const t=Dc();return(e?.kanji||[]).map(n=>Hm(n,t)).filter(Boolean)}function Lt(){return qa("N1",Q0)}function Q0(){const e=Dc(),t=new Set;return(r.n1KanjiCatalog||[]).map(n=>Hm(n.kanji,e)).filter(Boolean).filter(n=>t.has(n.kanji)?!1:(t.add(n.kanji),!0))}function Dc(){if(Ss?.catalog===r.n1KanjiCatalog&&Ss?.cards===r.cards)return Ss;const e=new Map;(r.n1KanjiCatalog||[]).forEach(s=>{s?.kanji&&e.set(s.kanji,s)});const t=new Map,n=new Map;return r.cards.forEach(s=>{if(s?.id&&n.set(String(s.id),s),!s?.kanji)return;const a=String(s.jlpt||"").toUpperCase();(a==="N1"||e.has(s.kanji))&&(!t.has(s.kanji)||a==="N1")&&t.set(s.kanji,s)}),Ss={catalog:r.n1KanjiCatalog,cards:r.cards,detailsByKanji:e,cardsByKanji:t,cardsById:n},Ss}function Hm(e,t=Dc()){const n=String(e||""),s=t.detailsByKanji.get(n)||null,a=t.cardsByKanji.get(n)||(s?t.cardsById.get(String(s.courseCardId||s.id)):null)||null;return a&&s?Ji(a,s):a||(s?Ji({id:s.courseCardId||s.id,kanji:s.kanji,lessonId:s.lessonId,jlpt:"N1",examples:[]},s):null)}function Fc(e){const t=String(e||"");return r.n1Grammar.find(n=>n.pattern===t||n.id===t||n.pattern.includes(t)||t.includes(n.pattern))||null}function At(e){return ha(e,e.examples)}function Y0(){const e=Lt(),t=ne(),n=new Set(Object.keys(t.studiedKanji||{}));return e.forEach(s=>{const a=r.progress.cards?.[String(s.id)];a&&ot(a).state!=="New"&&n.add(s.kanji)}),{total:r.n1Meta?.kanjiCount||e.length||1047,studied:n.size,completedLessons:Ds("N1"),completedGrammar:Object.keys(t.completedGrammar||{}).length,completedReading:Object.keys(t.completedReading||{}).length,completedListening:Object.keys(t.completedListening||{}).length,reviews:e.reduce((s,a)=>s+Number(r.progress.cards?.[String(a.id)]?.reviewCount||0),0),difficult:Object.keys(t.difficultKanji||{}).length}}function Vm(e){return hr("N1",e)}function Z0(e){return e==="completed"?p()==="ru"?"завершён":"completed":e==="started"?p()==="ru"?"начат":"started":p()==="ru"?"не начат":"new"}function Aa(e){const t=La(e);if(!t.length)return[];const n=e.sentences||[],s=Object.fromEntries((r.n1Exercises?.types||[]).map(k=>[k.type,k.title])),a=Object.fromEntries((r.n1Exercises?.types||[]).map(k=>[k.type,k])),o=k=>a[k]||{rewardXp:r.n1Meta?.rewards?.exerciseXp||11,rewardMoon:r.n1Meta?.rewards?.exerciseMoon||1},l=[],c=t[0];l.push({id:`${e.id}-meaning-0`,type:"meaning",title:s.meaning||{ru:"Узнавание значения",en:"Meaning recognition"},prompt:c.kanji,answer:c.id,answerLabel:K(c),kanji:c.kanji,cardId:c.id,options:wt({value:c.id,label:K(c)},t.slice(1).map(k=>({value:k.id,label:K(k)})),1),...o("meaning")});const d=t[1]||t[0];l.push({id:`${e.id}-kanji-1`,type:"kanji",title:s.kanji||{ru:"Кандзи по значению",en:"Kanji from meaning"},prompt:K(d),answer:d.kanji,answerLabel:d.kanji,kanji:d.kanji,cardId:d.id,options:wt({value:d.kanji,label:d.kanji},t.filter(k=>k.id!==d.id).map(k=>({value:k.kanji,label:k.kanji})),2),...o("kanji")});const u=t[2]||t[0],m=At(u)[0];l.push({id:`${e.id}-reading-2`,type:"reading",title:s.reading||{ru:"Чтение слова",en:"Word reading"},prompt:m.word||u.kanji,answer:m.reading||u.hiragana||"",answerLabel:m.reading||u.hiragana||"",kanji:u.kanji,cardId:u.id,options:wt({value:m.reading||u.hiragana||"",label:m.reading||u.hiragana||""},t.flatMap(k=>At(k).map(N=>({value:N.reading,label:N.reading}))).filter(k=>k.value&&k.value!==m.reading),3),...o("reading")});const h=n[0];h&&l.push({id:`${e.id}-sentence-3`,type:"sentence",title:s.sentence||{ru:"Перевод предложения",en:"Sentence translation"},prompt:h.jp,answer:b({ru:h.ru,en:h.en}),answerLabel:b({ru:h.ru,en:h.en}),kanji:t[0].kanji,cardId:t[0].id,options:wt({value:b({ru:h.ru,en:h.en}),label:b({ru:h.ru,en:h.en})},n.slice(1).map(k=>({value:b({ru:k.ru,en:k.en}),label:b({ru:k.ru,en:k.en})})),1),...o("sentence")});const f=t[3]||t[0],S=At(f)[0];l.push({id:`${e.id}-word-4`,type:"missing-word",title:s["missing-word"]||{ru:"Вставь слово",en:"Missing word"},prompt:Ya(S),answer:S.word||f.kanji,answerLabel:S.word||f.kanji,kanji:f.kanji,cardId:f.id,options:wt({value:S.word||f.kanji,label:S.word||f.kanji},t.flatMap(k=>At(k).map(N=>({value:N.word,label:N.word}))).filter(k=>k.value&&k.value!==S.word),2),...o("missing-word")});const C=t[4]||t[0];l.push({id:`${e.id}-active-5`,type:"active-recall",title:s["active-recall"]||{ru:"Активное вспоминание",en:"Active recall"},prompt:p()==="ru"?`Введи кандзи для значения: ${K(C)}`:`Type the kanji for: ${K(C)}`,answer:C.kanji,answerLabel:C.kanji,kanji:C.kanji,cardId:C.id,options:[],...o("active-recall")});const x=Fc(e.grammarFocus?.[0]);x&&l.push({id:`${e.id}-grammar-6`,type:"grammar-link",title:s["grammar-link"]||{ru:"Грамматическая связка",en:"Grammar link"},prompt:b(x.question||x.explanation),answer:V(x),answerLabel:V(x),kanji:t[0].kanji,cardId:t[0].id,grammarId:x.id,options:wt({value:V(x),label:V(x)},qe(x).filter(k=>k!==V(x)).map(k=>({value:k,label:k})),1),...o("grammar-link")});const L=n[1]||n[0];return L&&l.push({id:`${e.id}-mini-reading-7`,type:"mini-reading",title:s["mini-reading"]||{ru:"Мини-чтение",en:"Mini reading"},prompt:L.jp,answer:b({ru:L.ru,en:L.en}),answerLabel:b({ru:L.ru,en:L.en}),kanji:t[1]?.kanji||t[0].kanji,cardId:t[1]?.id||t[0].id,options:wt({value:b({ru:L.ru,en:L.en}),label:b({ru:L.ru,en:L.en})},n.filter(k=>k.jp!==L.jp).map(k=>({value:b({ru:k.ru,en:k.en}),label:b({ru:k.ru,en:k.en})})),2),...o("mini-reading")}),l.slice(0,r.n1Exercises?.lessonQuestionCount||8).map(k=>({...k,level:"N1",lessonId:e.id}))}function wt(e,t,n=0){const s=new Set([String(e.value)]),a=[e].filter(l=>String(l.value||""));if(t.forEach(l=>{const c=String(l.value||"");!c||s.has(c)||a.length>=4||(s.add(c),a.push(l))}),Lt().forEach(l=>{if(a.length>=4)return;const c={value:l.kanji,label:l.kanji};s.has(String(c.value))||(s.add(String(c.value)),a.push(c))}),a.length<=1)return a;const o=n%a.length;return[...a.slice(o),...a.slice(0,o)]}function Wm(e){for(const t of vt()){const n=Aa(t).find(s=>s.id===e);if(n)return n}return null}function Oc(e){return wa("N1",ne(),e)}function eC(e){const t=Wm(e.dataset.id);if(!t)return;const s=e.dataset.value||""||t.answer,a=s===t.answer;Xm(t,s,a)}function tC(e){const t=Wm(e);if(!t)return;const n=document.getElementById(tf(t.id)),s=n?String(n.value||"").trim():"";Xm(t,s,s===t.answer)}function Xm(e,t,n){const s=ne();ba("N1",s,e,t,n,{rewardXp:Number(e.rewardXp||r.n1Meta?.rewards?.exerciseXp||11),rewardMoon:Number(e.rewardMoon||r.n1Meta?.rewards?.exerciseMoon||1),rewardKey:`n1_exercise:${e.id}`,quietReward:!0,markStudied:()=>Ia(e.kanji,e.cardId),markDifficult:()=>fo(e.kanji,e.cardId),markCompleted:()=>{e.grammarId&&(s.completedGrammar[e.grammarId]=s.completedGrammar[e.grammarId]||new Date().toISOString())},markWrong:()=>{s.kanjiMistakes[e.kanji]=Number(s.kanjiMistakes[e.kanji]||0)+1},markWordMistake:a=>{s.wordMistakes[a]=Number(s.wordMistakes[a]||0)+1}})}function Qm(e,t,n="review",s={}){const a=oe(e)||Lt().find(S=>String(S.id)===String(e));if(!a)return;const o=s.scrollPolicy||(n==="review"?se.TOP:se.PRESERVE),l=s.viewportSnapshot||he(),c=!!s.quietReward,d=n==="lesson"&&t==="again",u=d?"good":t,m=d?"hard":t,h=ie(J(a.id)),f=$e(h,u,m);r.progress.cards[a.id]=f,Vt(h,f,m),ye(),Ia(a.kanji,a.id),ne().srsKanji[a.kanji]=new Date().toISOString(),d?(fo(a.kanji,a.id,!1),r.progress.totalCorrect+=1,H(r.n1Meta?.rewards?.hardXp||2,1,`n1_srs_lesson_hard:${a.id}`,{silent:c})):Be(t)?(fo(a.kanji,a.id),r.progress.totalWrong+=1,H(r.n1Meta?.rewards?.hardXp||2,0,`n1_srs_hard:${a.id}`,{silent:c})):(r.progress.totalCorrect+=1,H(t==="easy"?r.n1Meta?.rewards?.knowXp||9:r.n1Meta?.rewards?.addToSrsXp||7,1,`n1_srs:${a.id}`,{silent:c})),ue({scrollPolicy:o,viewportSnapshot:l}),T(),Kt("N1 SRS post-render effects",()=>{D(Be(t)?"answer_wrong":"answer_correct"),Z({silent:c})},{scrollPolicy:o,viewportSnapshot:l})}function nC(e){const t=oe(e)||Lt().find(s=>String(s.id)===String(e));if(!t)return;const n=ne();n.writingPractice[t.kanji]||(n.writingPractice[t.kanji]=new Date().toISOString(),r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,r.progress.writingPractice.cards[t.id]={completed:Number(r.progress.writingPractice.cards[t.id]?.completed||0)+1,lastAt:new Date().toISOString()},Ia(t.kanji,t.id),H(9,1,`n1_writing:${t.id}`)),Z(),T(),P()}function sC(e){const t=Os(e);if(!t)return;const n=ne(),s=`n1:${t.id}`;if(je.has(s)||n.completedLessons[t.id]){P();return}const a=La(t);if(a.filter(f=>n.studiedKanji[f.kanji]).length<t.kanji.length){const f=p()==="ru"?"Сначала изучите все кандзи урока.":"Study all kanji in the lesson first.";typeof G=="function"&&G(f);return}const l=Aa(t);if(!(l.length>0&&l.every(f=>Oc(f.id)?.correct))){const f=p()==="ru"?"Сначала выполните все упражнения правильно.":"Complete all exercises correctly first.";typeof G=="function"&&G(f);return}je.add(s),La(t).forEach(f=>{Ia(f.kanji,f.id),n.srsKanji[f.kanji]=n.srsKanji[f.kanji]||new Date().toISOString();const S=J(f.id);S.state==="New"&&(r.progress.cards[f.id]=$e(ie(S),"good"))}),(t.grammarFocus||[]).map(f=>Fc(f)).filter(Boolean).forEach(f=>{n.completedGrammar[f.id]=n.completedGrammar[f.id]||new Date().toISOString()}),n.completedLessons[t.id]=new Date().toISOString(),n.currentLessonId=vt().find(f=>f.order===t.order+1)?.id||t.id;const d=Xn(),u=d.sessions[Ye("N1",t.id)];if(u){const f=new Date().toISOString();u.phase="done",u.completedAt=f,u.updatedAt=f,u.currentIndex=a.length,d.activeSessionKey=Ye("N1",t.id),d.lastUpdatedAt=f}ne(),vr("N1");const m=r.n1Meta?.rewards?.lessonCompleteXp||85,h=r.n1Meta?.rewards?.lessonCompleteMoon||10;H(m,h,`n1_lesson:${t.id}`),Dr("N1",t.id),bt({title:`${Ae().lessonComplete}: ${b(t.title)}`,message:Ae().lessonCompleteText,xp:m,coins:h,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),D("lesson_complete"),Z(),T(),P()}function Ia(e,t=null){if(!e)return;const n=ne();cr(n,e)}function fo(e,t=null,n=!0){if(e&&(ne().difficultKanji[e]=new Date().toISOString(),n&&t)){const s=J(t);s.state!=="New"&&(r.progress.cards[t]=$e(ie(s),"again"))}}function rC(e,t=""){const n=r.n1Grammar.find(c=>c.id===e||c.pattern===e);if(!n)return;const s=V(n),a=t||s,o=a===s,l=ne();l.grammarResults[n.id]={selected:a,correct:o,checkedAt:new Date().toISOString()},o&&!l.completedGrammar[n.id]?(l.completedGrammar[n.id]=new Date().toISOString(),H(r.n1Meta?.rewards?.grammarXp||12,r.n1Meta?.rewards?.grammarMoon||1,`n1_grammar:${n.id}`),r.progress.totalCorrect+=1,D("answer_correct")):o||(r.progress.totalWrong+=1,D("answer_wrong")),ye(),Z(),T(),P()}function aC(e,t="0",n=""){Ym("reading",e,t,n)}function iC(e,t="0",n=""){Ym("listening",e,t,n)}function Ym(e,t,n="0",s=""){const o=(e==="reading"?r.n1Reading:r.n1Listening).find(x=>x.id===t);if(!o)return;const l=Number(n||0),c=(o.questions||[])[l];if(!c)return;const d=s===c.answer,u=`${o.id}:${l}`,m=ne(),h=e==="reading"?m.readingAnswers:m.listeningAnswers,f=e==="reading"?m.completedReading:m.completedListening,S=!!f[o.id];h[u]={selected:s,correct:d,checkedAt:new Date().toISOString()};const C=(o.questions||[]).every((x,L)=>h[`${o.id}:${L}`]?.correct);if(d?(r.progress.totalCorrect+=1,D("answer_correct")):(r.progress.totalWrong+=1,D("answer_wrong")),C&&!S){f[o.id]=new Date().toISOString();const x=e==="reading"?r.n1Meta?.rewards?.readingXp||55:r.n1Meta?.rewards?.listeningXp||50,L=e==="reading"?r.n1Meta?.rewards?.readingMoon||4:r.n1Meta?.rewards?.listeningMoon||4;H(x,L,`n1_${e}:${o.id}`)}ye(),Z(),T(),P()}function oC(e){const t=Os(e);t&&(wn("textbook-lesson",{level:"N1",lessonId:t.id}),ne().currentLessonId=t.id,Rt("N1",t.id,"n1_lesson_open"),cn("N1",t,"n1_lesson_open"),as(t.id))}function lC(){as("")}function cC(e=null){e&&(ne().activeReviewMode=e),as("review")}function dC(){as("kanji")}function uC(){as("grammar")}function pC(){as("reading")}function gC(){as("listening")}function mC(){as("final-test")}function as(e){r.route="textbooks",r.activeTextbookLevel="N1",r.activeTextbookSubroute=e||null,ne().opened=!0;const t=e?`#jlpt/n1/${encodeURIComponent(e)}`:"#jlpt/n1";jt(t),Z(),T(),pe(),Ft()}function fC(e="due"){const t=Date.now(),n=ne(),s=Lt();return e==="difficult"?s.filter(a=>n.difficultKanji[a.kanji]):e==="all"?s:s.filter(a=>{const o=J(a.id);return o.state!=="New"&&(!o.dueAt||new Date(o.dueAt).getTime()<=t)})}function Zm(){const e=Lt();if(!e.length)return[];const t=r.n1FinalTest?.types||["meaning","reading","sentence","kanji","word","grammar","mini-reading","srs"],n=Math.min(r.n1FinalTest?.questionCount||32,Math.max(e.length,1)),s=[];for(let a=0;a<n;a+=1){const o=e[a*11%e.length]||e[a%e.length],l=t[a%t.length],c=vt().find(d=>d.kanji.includes(o.kanji))||vt()[0];s.push(hC(l,o,c,a))}return s.filter(Boolean)}function hC(e,t,n,s){const o=At(t)[0]||{},l=(n?.sentences||[]).find(c=>c.jp.includes(t.kanji))||n?.sentences?.[0];if(e==="meaning")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:t.kanji,answer:t.id,answerLabel:K(t),options:wt({value:t.id,label:K(t)},Lt().filter(c=>c.id!==t.id).map(c=>({value:c.id,label:K(c)})),s)};if(e==="reading")return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:o.word||t.kanji,answer:o.reading||t.hiragana||"",answerLabel:o.reading||t.hiragana||"",options:wt({value:o.reading||t.hiragana||"",label:o.reading||t.hiragana||""},Lt().flatMap(c=>At(c).map(d=>({value:d.reading,label:d.reading}))).filter(c=>c.value&&c.value!==o.reading),s)};if(e==="sentence"&&l){const c=b({ru:l.ru,en:l.en});return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:l.jp,answer:c,answerLabel:c,options:wt({value:c,label:c},vt().flatMap(d=>d.sentences||[]).map(d=>({value:b({ru:d.ru,en:d.en}),label:b({ru:d.ru,en:d.en})})).filter(d=>d.value!==c),s)}}if(e==="word"){const c=o.word||t.kanji;return{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:ms(o),answer:c,answerLabel:c,options:wt({value:c,label:c},Lt().flatMap(d=>At(d).map(u=>({value:u.word,label:u.word}))).filter(d=>d.value&&d.value!==c),s)}}if(e==="grammar"){const c=r.n1Grammar[s%Math.max(r.n1Grammar.length,1)];if(c)return{id:`n1-final-${s}`,type:e,grammarId:c.id,prompt:`${c.pattern}: ${b(c.question||c.explanation)}`,answer:V(c),answerLabel:V(c),options:wt({value:V(c),label:V(c)},qe(c).filter(d=>d!==V(c)).map(d=>({value:d,label:d})),s)}}if(e==="mini-reading"){const c=r.n1Reading[s%Math.max(r.n1Reading.length,1)],d=c?.questions?.[0];if(c&&d)return{id:`n1-final-${s}`,type:e,readingId:c.id,prompt:`${c.jp||b(c.title)} ${b(d.prompt)}`,answer:d.answer,answerLabel:b((d.options||[]).find(u=>u.value===d.answer)?.label||d.answer),options:(d.options||[]).map(u=>({value:u.value,label:b(u.label||u)}))}}return e==="srs"?{id:`n1-final-${s}`,type:e,cardId:t.id,kanji:t.kanji,prompt:p()==="ru"?`Мини-повторение: ${t.kanji} — ${K(t)}. Что нажмёшь, если помнишь?`:`Mini review: ${t.kanji} — ${K(t)}. What do you press if you remember?`,answer:"remember",answerLabel:p()==="ru"?"Помню":"Remember",options:[{value:"again",label:p()==="ru"?"Сложно":"Hard"},{value:"remember",label:p()==="ru"?"Помню":"Remember"},{value:"skip",label:p()==="ru"?"Пропустить":"Skip"}]}:{id:`n1-final-${s}`,type:"kanji",cardId:t.id,kanji:t.kanji,prompt:K(t),answer:t.kanji,answerLabel:t.kanji,options:wt({value:t.kanji,label:t.kanji},Lt().filter(c=>c.id!==t.id).map(c=>({value:c.kanji,label:c.kanji})),s)}}function vC(e){const t=e.dataset.id,n=e.dataset.value||"";t&&(ne().finalTest.answers[t]=n,T(),P())}function ef(e=!1){if(r.finalTestBusy)return;const t=ne().finalTest;if(t.completedAt||typeof t.percent=="number"&&t.percent>0){P();return}r.finalTestBusy=!0;try{const n=Zm(),s=r.n1FinalTest||{},a=Ae(),o=hn(t,n),l=Number(s?.passingPercent??s?.passThreshold??80),c=!!(s.allowIncompleteFinish||s.allowUnansweredFinish),d=new Date().toISOString();if(t.attempts=Number(t.attempts||0)+1,o.missingCount&&!e&&!c){const N=o.firstMissingId?`#${Lr("n1",o.firstMissingId)}`:null;r.finalTestModal={kind:"warning",level:"N1",title:p()==="ru"?"Ответь на все вопросы":"Answer all questions",message:p()==="ru"?`Вы ответили не на все вопросы. Пропусков: ${o.missingCount}.`:`You left some questions unanswered. Missing: ${o.missingCount}.`,answered:o.answered,missingCount:o.missingCount,totalQuestions:o.totalQuestions,threshold:l,focusSelector:N,focusLabel:p()==="ru"?"К первому пропуску":"Jump to first missing",closeLabel:p()==="ru"?"Продолжить":"Continue",forceLabel:p()==="ru"?"Завершить без ответов":"Finish anyway",allowIncomplete:c},r.pendingFocus=N,T();return}let u=0;const m=[],h=[];n.forEach(N=>{const z=String(t.answers?.[N.id]||"").trim();if(z===N.answer){if(u+=1,N.kanji&&Ia(N.kanji,N.cardId),N.grammarId){const q=ne();q.completedGrammar[N.grammarId]=q.completedGrammar[N.grammarId]||d}}else z||h.push(N),m.push({id:N.id,kanji:N.kanji||"",answer:N.answerLabel,selected:z}),N.kanji&&fo(N.kanji,N.cardId)});const f=n.length?Math.round(u/n.length*100):0,S=!!t.completedAt,C=!!t.passed,x=Math.max(0,m.length-h.length);let L=0,k=0;if(t.answers=t.answers||{},t.score=u,t.percent=f,t.passed=f>=l,t.correctAnswers=u,t.incorrectAnswers=x,t.unansweredAnswers=h.length,t.totalQuestions=n.length,t.mistakes=m,t.mistakeQuestionIds=m.map(N=>N.id),t.completedAt=d,t.lastScore=f,t.bestScore=Math.max(Number(t.bestScore||0),f),t.passedAt=t.passed?C&&t.passedAt||d:t.passedAt||null,!S){const N=Number(s?.rewards?.completeXp||220),z=Number(s?.rewards?.completeMoon||40);L+=N,k+=z,H(N,z,"n1_final_complete")}if(t.passed&&!C){const N=Number(s?.rewards?.passXp||110),z=Number(s?.rewards?.passMoon||18);L+=N,k+=z,H(N,z,"n1_final_pass")}t.lastRewardXp=L,t.lastRewardMoon=k,Va("N1",t),ne(),r.pendingFocus=null,r.finalTestModal={kind:"result",level:"N1",title:t.passed?a.finalPassed:a.finalNeedsReview,message:t.passed?a.finalPassedText:a.finalNeedsReviewText,passed:t.passed,percent:f,correct:u,incorrect:x,unanswered:h.length,totalQuestions:n.length,rewardXp:L,rewardMoon:k,attempts:t.attempts,threshold:l,reviewAction:"n1-review",reviewAllAction:"n1-review",closeLabel:(p()==="ru","OK"),repeatLabel:a.repeatMistakes,reviewAllLabel:a.reviewAll},Z(),T()}catch(n){console.error(n),G(p()==="ru"?"Не удалось завершить тест.":"Could not finish the test.")}finally{r.finalTestBusy=!1,P()}}function wC(){ne().finalTest=Ol().finalTest,r.finalTestModal=null,r.finalTestBusy=!1,T(),P()}function tf(e){return`n1-input-${String(e||"").replace(/[^a-z0-9_-]+/gi,"-")}`}function nf(e){const t=Mr(e.jlpt);if(!t)return"";const n={...xd(),...Cd()};return`
      <div class="jlpt-practice-grid">
        ${bC(t,n)}
        ${kC(t,n)}
        ${yC(t,n)}
        ${jC(t,n)}
      </div>
    `}function bC(e,t){return e.apps.length?`
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
    `:""}function kC(e,t){const n=Array.isArray(e.kana?.hiragana)?e.kana.hiragana:[],s=Array.isArray(e.kana?.katakana)?e.kana.katakana:[];return!n.length&&!s.length?"":`
      <article class="jlpt-practice-card">
        <h3>${i(t.kana)}</h3>
        <div class="kana-columns">
          ${sf(t.hiragana,n)}
          ${sf(t.katakana,s)}
        </div>
      </article>
    `}function sf(e,t){return t.length?`
      <div class="kana-column">
        <strong>${i(e)}</strong>
        ${t.map(n=>`
          <span class="kana-chip">
            <b>${i(n.kana)}</b>
            <small>${i(n.romaji)} · ${i(b(n.note))}</small>
          </span>
        `).join("")}
      </div>
    `:""}function yC(e,t){return e.kanjiFocus.length?`
      <article class="jlpt-practice-card jlpt-kanji-focus">
        <h3>${i(t.kanjiFocus)}</h3>
        <div class="jlpt-focus-grid">
          ${e.kanjiFocus.map(n=>`
            <div class="jlpt-focus-item">
              <span class="kanji-mini">${i(n.kanji)}</span>
              <div>
                <strong>${$C(n)}</strong>
                <small>${i(n.romaji)} · ${i(b(n.meaning))}</small>
                <p>${i(b(n.appUse))}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    `:""}function $C(e){const t=Array.isArray(e.furigana)?e.furigana:[];return t.length?t.map(n=>n.rt?`<ruby>${i(n.text)}<rt>${i(n.rt)}</rt></ruby>`:i(n.text)).join(""):i(e.word||e.kanji||"")}function jC(e,t){const n=Kr(e);if(!n)return"";const s=Vs(),a=s.selected[n.id]||[],o=!!s.checked[n.id],l=s.results[n.id]||null,c=a.map(m=>n.tiles[m]).filter(Boolean),d=o&&l?.correct,u=o&&l?l.wrongIndexes||[]:[];return`
      <article class="jlpt-practice-card jlpt-drill-card">
        <div class="section-head compact-head">
          <div>
            <h3>${i(t.sentenceDrill)}</h3>
            <p>${i(b(n.translation))}</p>
          </div>
          <span class="pill">${i(e.jlpt)}</span>
        </div>
        <div class="jlpt-sentence-line">${SC(n,c,u)}</div>
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
    `}function SC(e,t,n){let s=0;return String(e.sentence||"").split("___").map((a,o,l)=>{if(o===l.length-1)return i(a);const d=(e.blanks[o]||{answer:[]}).answer.length||1,u=t.slice(s,s+d),m=u.some((f,S)=>n.includes(s+S));s+=d;const h=u.length?u.map(f=>`<span>${i(f.kanji)}</span>`).join(""):`<span>${i("□".repeat(d))}</span>`;return`${i(a)}<span class="sentence-blank ${m?"is-wrong":""}">${h}</span>`}).join("")}function CC(){if(!$i)return kl(),Pd();const e=Xc(WN()),t=ux(e),n=e.length,s=t?.kind==="card"?t.card:t?.kind==="exercise"?oe(t.card?.id||t.cardId||t.progress?.cardId||""):null;cx(t);const a=t?t.kind==="card"?s?ff(s):Js():t.kind==="kana"?ix(t,n):wx(t):Js();return`
      <section class="page" data-review-session-size="${r.reviewSession?.initialSize||0}" data-review-total-due="${Xe()}">
        <div class="section-head">
          <div>
            <h1>${i(_("review"))}</h1>
            <p>${n} ${i(p()==="ru"?"в очереди":"in queue")}</p>
            <div class="mini-stat-row">
              ${M(p()==="ru"?"Сейчас":"Due now",Xe(),"due")}
              ${M(p()==="ru"?"В сессии":"Remaining",n,"session")}
              ${M(p()==="ru"?"Позже":"Learning later",eh(),"learning")}
              ${M(p()==="ru"?"Всего SRS":"Total SRS",nh(),"cards")}
            </div>
          </div>
          <div class="actions">
            ${gs("srs")}
          </div>
        </div>
        <div class="study-layout" data-section="review-card">
          ${a}
          ${qc(s,n)}
        </div>
        ${xC()}
      </section>
    `}function xC(){try{return NC()}catch(e){return console.warn("[Flash Kanji] sentence practice skipped after stale saved progress.",e),r.progress&&(r.progress.sentencePractice=bp(or().sentencePractice,{})),""}}function NC(){const e=fn(),t=vo(e),n={...xr(),...Bc()},s=LC(e,n);if(!e.length)return`
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
      `;const a=Uc(t,e);if(!a)return"";const{exercise:o,tiles:l,selectedTiles:c,answerFlat:d,wrongIndexes:u,complete:m,awarded:h}=a,f=new Set(r.progress.sentencePractice.selected),S=r.progress.sentencePractice.result||{};return`
      <article class="sentence-practice${r.progress.sentencePractice.checked?m?" is-success":" is-error":""}" data-section="sentence-practice" aria-live="polite">
        <div class="section-head sentence-head">
          <div>
            <h2>${i(n.title)}</h2>
            <p>${i(n.subtitle.replace("{learned}",e.length).replace("{total}",r.cards.length))}</p>
          </div>
          <div class="tag-row">
            <span class="pill">${i(o.jlpt)}</span>
            ${o.source?`<span class="pill">${i(IC(o.source,n))}</span>`:""}
            <span class="pill">${i(n.progress.replace("{done}",Object.keys(r.progress.sentencePractice.completed||{}).length).replace("{total}",t.length))}</span>
          </div>
        </div>
        ${s}
        <div class="sentence-card">
          <div class="sentence-line">${af(o,c,u)}</div>
          <p class="sentence-reading">${i(o.reading||"")}</p>
          <p class="sentence-translation">${i(TC(o))}</p>
        </div>
        <div class="sentence-tiles">
          ${l.map((x,L)=>{const k=f.has(L),N=u.includes(r.progress.sentencePractice.selected.indexOf(L));return`
              <button class="sentence-tile ${k?"is-used":""} ${N?"is-wrong":""}" type="button" data-action="insert-sentence-tile" data-index="${L}" ${k||m?"disabled":""}>
                <span>${i(x.reading)}</span>
                <strong>${i(x.kanji)}</strong>
              </button>
            `}).join("")}
        </div>
        <div class="sentence-feedback">
          ${i(S.message||n.tip.replace("{count}",d.length))}
          ${m&&!h?`<small>${i(n.completedBefore)}</small>`:""}
        </div>
        <div class="actions sentence-actions">
          <button class="btn primary" type="button" data-action="check-sentence">${i(n.check)}</button>
          <button class="btn" type="button" data-action="undo-sentence-tile" ${!r.progress.sentencePractice.selected.length||m?"disabled":""}>${i(n.undo)}</button>
          <button class="btn" type="button" data-action="clear-sentence" ${!r.progress.sentencePractice.selected.length||m?"disabled":""}>${i(n.clear)}</button>
          <button class="btn ghost" type="button" data-action="next-sentence">${i(n.next)}</button>
        </div>
      </article>
    `}function LC(e,t){const n=Ee(),s=Hi(n.customDraft||{}),a=Array.isArray(n.customSentences)?n.customSentences:[],o=a.length,l=!!n.customEditingId,c=n.customStatus?` is-${n.customStatus}`:"";return`
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
        ${AC(a,e,t)}
      </details>
    `}function AC(e,t,n){return e.length?`
      <div class="sentence-custom-list">
        ${e.map(s=>{const a=zc(s,t),o=!!(a&&zs(a,t).length>=Math.max(4,Ht(a).length)),l=p()==="en"?s.en||s.ru:s.ru||s.en;return`
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
    `:`<p class="sentence-custom-empty">${i(n.customEmpty)}</p>`}function IC(e,t){return e==="user"||e==="custom"?t.userSource||t.customSource:e==="dynamic"?t.dynamicSource:e}function xr(){return p()==="ru"?{title:"Практика предложений",subtitle:"Только из изученных кандзи: {learned}/{total}",progress:"{done}/{total} готово",noLearned:"Сначала изучи несколько кандзи в уроках или повторении. После этого появятся предложения.",notEnough:"Изучено {count} кандзи. Для упражнения нужно минимум 4 изученных кандзи, чтобы собрать варианты.",noExercise:"Изученные кандзи пока не складываются в доступные предложения. Продолжай уроки, и блок откроется.",tip:"Заполни {count} пропуск(а) плитками по порядку.",check:"Проверить",clear:"Очистить",next:"Следующее",undo:"Убрать",completedBefore:"Награда за это предложение уже получена.",fillAll:"Заполни все пропуски перед проверкой.",correct:"Верно. Предложение собрано правильно.",wrong:"Проверь красные места и попробуй ещё раз.",full:"Все пропуски уже заполнены.",inserted:"Плитка вставлена.",removed:"Последняя плитка убрана."}:{title:"Sentence practice",subtitle:"Only learned kanji: {learned}/{total}",progress:"{done}/{total} done",noLearned:"Study a few kanji first. Sentence practice will unlock after that.",notEnough:"{count} kanji learned. You need at least 4 learned kanji for tile choices.",noExercise:"Your learned kanji do not form an available sentence yet. Continue lessons to unlock this block.",tip:"Fill {count} blank slot(s) with tiles in order.",check:"Check",clear:"Clear",next:"Next",undo:"Undo",completedBefore:"Reward for this sentence was already claimed.",fillAll:"Fill every blank before checking.",correct:"Correct. The sentence is complete.",wrong:"Check the red slots and try again.",full:"All blank slots are already filled.",inserted:"Tile inserted.",removed:"Last tile removed."}}function Bc(){return p()==="ru"?{customTitle:"Своё предложение",customCount:"Своих: {count}",customSentence:"Японское предложение",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Чтение хираганой",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Перевод RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Добавить",customHelp:"Вставь фразу. Приложение спрячет только изученные кандзи: {learned}.",customAdded:"Предложение добавлено.",customNoSentence:"Вставь японское предложение.",customNoKnown:"В этом предложении нет изученных кандзи.",customNoTiles:"Нужно минимум 4 изученных кандзи для вариантов.",customDuplicate:"Такое предложение уже есть.",customUpdated:"Предложение обновлено.",customDeleted:"Предложение удалено.",customEmpty:"Свои предложения появятся здесь.",customReady:"Доступно",customLocked:"Позже",updateCustom:"Сохранить",cancelEdit:"Отмена",editCustom:"Редактировать",deleteCustom:"Удалить",customSource:"Своё",userSource:"USER",dynamicSource:"JSON"}:{customTitle:"Custom sentence",customCount:"Custom: {count}",customSentence:"Japanese sentence",customSentencePlaceholder:"私は日本語を勉強します。",customReading:"Hiragana reading",customReadingPlaceholder:"わたしは にほんごを べんきょうします。",customTranslationRu:"Translation RU",customTranslationRuPlaceholder:"Я изучаю японский.",customTranslationEn:"Translation EN",customTranslationEnPlaceholder:"I study Japanese.",addCustom:"Add",customHelp:"Paste a phrase. The app will hide only learned kanji: {learned}.",customAdded:"Sentence added.",customNoSentence:"Paste a Japanese sentence.",customNoKnown:"No learned kanji found in this sentence.",customNoTiles:"You need at least 4 learned kanji for tile choices.",customDuplicate:"This sentence already exists.",customUpdated:"Sentence updated.",customDeleted:"Sentence deleted.",customEmpty:"Your sentences will appear here.",customReady:"Ready",customLocked:"Later",updateCustom:"Save",cancelEdit:"Cancel",editCustom:"Edit",deleteCustom:"Delete",customSource:"Custom",userSource:"USER",dynamicSource:"JSON"}}function TC(e){return p()==="en"?e?.translationEn||e?.translationRu||"":e?.translationRu||e?.translationEn||""}function rf(e=fn()){const t=Ee().customSentences||[];if(Dn?.cards===r.cards&&Dn.builtIn===r.sentenceExercises&&Dn.learned.length===e.length&&Dn.learned.every((c,d)=>c===e[d])&&Dn.custom.length===t.length&&Dn.custom.every((c,d)=>c===t[d]))return Dn.items;const n=RC(e),s=_C(e),a=Array.isArray(r.sentenceExercises)?r.sentenceExercises:[],o=new Set,l=[...n,...s,...a].filter(c=>!c?.id||o.has(c.id)?!1:(o.add(c.id),!0));return Dn={cards:r.cards,builtIn:r.sentenceExercises,learned:[...e],custom:[...t],items:l},l}function RC(e=fn()){const t=Ee();return(Array.isArray(t.customSentences)?t.customSentences:[]).map(s=>zc(s,e)).filter(Boolean)}function zc(e,t=fn()){return e?.jp?Jc({id:e.id,jlpt:qC(e.jp,t),sentence:e.jp,reading:e.hiragana||Ta(e.jp),translationRu:e.ru||"",translationEn:e.en||"",source:"user"},t,{maxBlanks:3,maxBlankChars:5}):null}function af(e,t,n){const s=e?.blanks||[],a=String(e?.sentence||"").split("___");let o=0;return a.map((l,c)=>{const d=s[c];if(!d)return i(l);const u=d.answer||[],m=u.map((h,f)=>{const S=o+f,C=t[S],x=n.includes(S);return`<span class="sentence-slot ${C?"is-filled":""} ${x?"is-wrong":""}">${C?i(C.kanji):""}</span>`}).join("");return o+=u.length,`${i(l)}<span class="sentence-blank">${m}</span>`}).join("")}function Uc(e=vo(),t=fn()){const n=Bs(t),s=(Array.isArray(e)?e:[]).filter(C=>C?.id),a=Ee();new Set(s.map(C=>C.id)).has(a.activeId)||ho(Gc(s)?.id||null);const l=s.find(C=>C.id===r.progress.sentencePractice.activeId)||s[0];if(!l)return null;const c=Ht(l);(!Array.isArray(r.progress.sentencePractice.tileKeys)||!r.progress.sentencePractice.tileKeys.length)&&(r.progress.sentencePractice.tileKeys=zs(l,n).map(ko));let d=(Array.isArray(r.progress.sentencePractice.tileKeys)?r.progress.sentencePractice.tileKeys:[]).map(VC).filter(Boolean);const u=()=>c.every(C=>d.some(x=>x.kanji===C.kanji));(d.length<Math.max(4,c.length)||!u())&&(d=zs(l,n),r.progress.sentencePractice.tileKeys=d.map(ko),r.progress.sentencePractice.selected=[],r.progress.sentencePractice.checked=!1,r.progress.sentencePractice.result=null);const m=Array.isArray(r.progress.sentencePractice.selected)?r.progress.sentencePractice.selected:[];r.progress.sentencePractice.selected=m.filter((C,x,L)=>Number.isInteger(C)&&C>=0&&C<d.length&&L.indexOf(C)===x).slice(0,c.length);const h=r.progress.sentencePractice.selected.map(C=>d[C]).filter(Boolean),f=r.progress.sentencePractice.checked&&r.progress.sentencePractice.result?r.progress.sentencePractice.result.wrongIndexes:[],S=Array.isArray(f)?f.filter(C=>Number.isInteger(C)&&C>=0&&C<c.length):[];return{exercise:l,tiles:d,selectedTiles:h,answerFlat:c,wrongIndexes:S,complete:!!(r.progress.sentencePractice.checked&&r.progress.sentencePractice.result?.correct),awarded:!!r.progress.sentencePractice.completed?.[l.id]}}function Ee(){var e;return(e=r.progress).sentencePractice||(e.sentencePractice=or().sentencePractice),r.progress.sentencePractice}function ho(e){r.progress.sentencePractice={...Ee(),activeId:e,selected:[],checked:!1,result:null,tileKeys:[]};const t=rf(fn()).find(n=>n?.id===e);t&&df(t)}function Bs(e){return(Array.isArray(e)?e:[]).filter(t=>t?.id&&t.kanji)}function fn(){return Bs(r.cards).filter(e=>{const t=r.lessons.find(s=>s.id===e.lessonId);if(t&&!Ge(t))return!1;const n=J(e.id);return n.state!=="New"||n.reviewCount>0||n.lastReviewedAt||r.progress.lessonCompletions[e.lessonId]})}function vo(e=fn()){const t=Bs(e),n=new Set(t.map(s=>s.kanji));return rf(t).filter(s=>{if(!s?.id)return!1;const a=Ht(s);return tI(a,n)})}function Ht(e){return(e?.blanks||[]).flatMap(t=>(t.answer||[]).map((n,s)=>({kanji:n,reading:t.reading?.[s]||""})))}function of(e){return Ht(e).map(t=>t.kanji).join("")}function zs(e,t){if(!e?.id)return[];const n=Bs(t),s=Ht(e),a=new Set(s.map(C=>C.kanji)),o=new Set(n.map(C=>C.kanji)),l=new Map;[...e.tiles||[],...s].forEach(C=>{C?.kanji&&C?.reading&&l.set(C.kanji,C.reading)});const c=s.map(C=>({kanji:C.kanji,reading:C.reading||l.get(C.kanji)||Tn(C.kanji)})),d=(e.tiles||[]).filter(C=>C?.kanji&&!a.has(C.kanji)&&o.has(C.kanji)).map(C=>({kanji:C.kanji,reading:C.reading||Tn(C.kanji)})).filter((C,x,L)=>L.findIndex(k=>k.kanji===C.kanji)===x),u=new Set,m=n.filter(C=>!C.kanji||a.has(C.kanji)||u.has(C.kanji)?!1:(u.add(C.kanji),!0)).map(C=>({card:C,hash:Je(`${e.id}:${C.kanji}`)})).sort((C,x)=>C.hash-x.hash).map(({card:C})=>({kanji:C.kanji,reading:l.get(C.kanji)||Tn(C.kanji,C)})),h=new Set(a),f=[...d,...m].filter(C=>h.has(C.kanji)?!1:(h.add(C.kanji),!0)),S=Math.min(Math.max(6,c.length+2),c.length+f.length);return nx([...c,...f.slice(0,S-c.length)],e.id)}function _C(e){const t=Bs(e);if(!t.length)return[];const n=new Set(t.map(l=>l.kanji)),s=new Set,a=[],o=t.flatMap(l=>(l.examples||[]).map(c=>({...c,card:l})));for(const[l,c]of o.entries()){if(a.length>=160)break;const d=Nr(c.word||"");if(!d||s.has(d)||!HC(d)||cf(d).some(C=>!n.has(C)))continue;s.add(d);const u=Us(c.reading||Ta(d)),m=c.translation||d,h=[{sentence:`今日は${d}をアプリで見ます。`,reading:`きょうは ${u}を あぷりで みます。`,translationRu:`Сегодня я смотрю в приложении: ${m}.`,translationEn:`Today I check ${d} in an app.`},{sentence:`駅で${d}について話します。`,reading:`えきで ${u}について はなします。`,translationRu:`На станции говорю про: ${m}.`,translationEn:`At the station, I talk about ${d}.`},{sentence:`メモに${d}を書きます。`,reading:`めもに ${u}を かきます。`,translationRu:`Я записываю в заметку: ${m}.`,translationEn:`I write ${d} in a memo.`}],f=h[l%h.length],S=Jc({id:`sentence-json-${Je(`${d}:${f.sentence}`).toString(36)}`,jlpt:c.card?.jlpt||"N5",sentence:f.sentence,reading:f.reading,translationRu:f.translationRu,translationEn:f.translationEn,source:"dynamic"},t,{maxBlanks:2,maxBlankChars:4});S&&a.push(S)}return a.slice(0,160)}function PC(){const e=Ee(),t={...xr(),...Bc()},n=Hi(EC()||e.customDraft||{}),s=fn(),a=is(n.jp);if(!a){wo(t.customNoSentence,"error");return}const o=e.customEditingId||null;if(FC(a,o)){wo(t.customDuplicate,"error");return}const c=Ee(),d={id:o||`custom_${Date.now().toString(36)}_${Je(a).toString(36)}`,jp:a,hiragana:Us(is(n.hiragana)||Ta(a)),ru:is(n.ru),en:is(n.en),source:"user"},u=(c.customSentences||[]).findIndex(h=>h.id===d.id);u>=0?c.customSentences[u]=d:c.customSentences=[d,...c.customSentences||[]].slice(0,160),c.customDraft={jp:"",hiragana:"",ru:"",en:""},c.customEditingId=null,wo(o?t.customUpdated:t.customAdded,"success",!1);const m=zc(d,s);m&&zs(m,s).length>=Math.max(4,Ht(m).length)&&(ho(m.id),r.progress.sentencePractice.tileKeys=zs(m,s).map(ko)),T(),P()}function EC(){const e=document.querySelector(".sentence-builder");if(!e)return null;const t=n=>e.querySelector(`[data-sentence-draft="${n}"]`)?.value||"";return{jp:t("jp"),hiragana:t("hiragana"),ru:t("ru"),en:t("en")}}function MC(e){const t=Ee(),n=(t.customSentences||[]).find(s=>s.id===e);n&&(t.customEditingId=n.id,t.customDraft={jp:n.jp||"",hiragana:n.hiragana||"",ru:n.ru||"",en:n.en||""},t.customMessage="",t.customStatus="",T(),P())}function KC(e){const t=Ee(),n={...xr(),...Bc()},s=(t.customSentences||[]).length;if(t.customSentences=(t.customSentences||[]).filter(a=>a.id!==e),t.customSentences.length!==s){if(t.customEditingId===e&&(t.customEditingId=null,t.customDraft={jp:"",hiragana:"",ru:"",en:""}),t.completed?.[e]&&delete t.completed[e],t.recentIds=(t.recentIds||[]).filter(a=>a!==e),t.activeId===e){const a=fn(),o=Gc(vo(a));ho(o?.id||null)}wo(n.customDeleted,"success",!1),T(),P()}}function DC(){const e=Ee();e.customEditingId=null,e.customDraft={jp:"",hiragana:"",ru:"",en:""},e.customMessage="",e.customStatus="",T(),P()}function FC(e,t=null){const n=Nr(e);return(Ee().customSentences||[]).some(a=>a.id!==t&&Nr(a.jp)===n)?!0:r.sentenceExercises.some(a=>Nr(lf(a))===n)}function wo(e,t,n=!0){const s=Ee();s.customMessage=e,s.customStatus=t,T(),n&&P()}function Jc(e,t,n={}){if(!e||typeof e!="object")return null;const s=Bs(t),a=Nr(e.sentence||"");if(!a||!e.id||!s.length)return null;const o=OC(a,s).filter(m=>m.answer.length<=Number(n.maxBlankChars||5));if(!o.length)return null;const l=BC(o,a,n);if(!l.length)return null;let c="",d=0;const u=l.map(m=>(c+=a.slice(d,m.start)+"___",d=m.end,{answer:m.answer,reading:zC(m.text)}));return c+=a.slice(d),{id:e.id,kind:e.kind||"cloze",jlpt:e.jlpt||"N5",sentence:c,originalSentence:a,reading:Us(e.reading||Ta(a)),translationRu:e.translationRu||"",translationEn:e.translationEn||"",blanks:u,tiles:u.flatMap(m=>m.answer.map((h,f)=>({kanji:h,reading:m.reading[f]||Tn(h)}))),source:e.source||"custom",createdAt:e.createdAt}}function OC(e,t){const n=new Map(Bs(t).map(o=>[o.kanji,o])),s=[];let a=null;return Array.from(e).forEach((o,l)=>{if(bo(o)&&n.has(o)){a||(a={start:l,end:l,text:"",answer:[]}),a.end=l+1,a.text+=o,a.answer.push(o);return}a&&s.push(a),a=null}),a&&s.push(a),s}function BC(e,t,n={}){const s=Number(n.maxBlanks||2),a=Number(n.maxBlankChars||5),o=e.filter(m=>m.start>0&&m.end<t.length),l=e.filter(m=>m.start>0),c=(o.length?o:l.length?l:e).slice().sort((m,h)=>{const f=h.answer.length-m.answer.length;return f||Math.abs(m.start-t.length/2)-Math.abs(h.start-t.length/2)}),d=[];let u=0;return c.forEach(m=>{d.length>=s||u+m.answer.length>a||(d.push(m),u+=m.answer.length)}),d.sort((m,h)=>m.start-h.start)}function zC(e){const t=Array.from(e),n=UC(e);return n?JC(t,Us(n)):t.map(s=>Tn(s))}function UC(e){if(yi?.cards!==r.cards||yi?.length!==r.cards.length){const t=new Map;for(const n of r.cards)for(const s of n.examples||[])s.reading&&!t.has(s.word)&&t.set(s.word,s.reading);yi={cards:r.cards,length:r.cards.length,byWord:t}}return yi.byWord.get(e)||""}function JC(e,t){const n=Array(e.length).fill("");let s=t;for(let a=e.length-1;a>0;a-=1){const l=GC(e[a]).sort((c,d)=>d.length-c.length).find(c=>c&&s.endsWith(c));l&&(n[a]=l,s=s.slice(0,-l.length))}return n[0]=s||Tn(e[0]),n.map((a,o)=>a||Tn(e[o]))}function GC(e){const t=r.cards.find(s=>s.kanji===e),n=[t?.hiragana,t?.onyomi,t?.kunyomi].flatMap(s=>String(s||"").split(/[\/,;・、\s]+/u)).map(s=>Us(s.trim())).filter(Boolean);return[...new Set(n)]}function Ta(e){return Us(Array.from(e).map(t=>bo(t)?Tn(t):t).join(""))}function qC(e,t){const n=["N5","N4","N3","N2","N1"],s=new Map(t.map(o=>[o.kanji,o]));return cf(e).map(o=>s.get(o)?.jlpt).filter(Boolean).sort((o,l)=>n.indexOf(l)-n.indexOf(o))[0]||"N5"}function Nr(e){return String(e||"").replace(/\s+/g,"").trim()}function is(e){return String(e||"").replace(/\s+/g," ").trim()}function lf(e){if(!e)return"";if(e.jp)return e.jp;if(e.originalSentence)return e.originalSentence;let t=0;return String(e.sentence||"").replace(/___/g,()=>(e.blanks?.[t++]?.answer||[]).join(""))}function HC(e){return Array.from(String(e||"")).some(bo)}function cf(e){return Array.from(String(e||"")).filter(bo)}function bo(e){return/[㐀-鿿]/u.test(e)}function Us(e){return String(e||"").replace(/[ァ-ヶ]/g,t=>String.fromCharCode(t.charCodeAt(0)-96))}function ee(e){return Us(String(e||""))}function Tn(e,t=r.cards.find(n=>n.kanji===e)){const n=t?.onyomi||t?.kunyomi||t?.hiragana||"";return String(n).split("/")[0].trim()||"かな"}function ko(e){return`${e.kanji}	${e.reading||""}`}function VC(e){const[t,n]=String(e||"").split("	");return t?{kanji:t,reading:n||Tn(t)}:null}function WC(e){const t=Uc();if(!t||!Number.isInteger(e))return;const n=xr(),s=r.progress.sentencePractice;if(s.result?.correct||s.selected.includes(e))return;if(s.selected.length>=t.answerFlat.length){G(n.full);return}Vw();const a=he();s.selected.push(e),s.checked=!1,s.result={correct:!1,message:n.inserted,wrongIndexes:[]},T(),ue({scrollPolicy:se.PRESERVE,viewportSnapshot:a})}function XC(){const e=Ee();if(!e.selected.length||e.result?.correct)return;const t=Cn||he();e.selected.pop(),e.checked=!1,e.result={correct:!1,message:xr().removed,wrongIndexes:[]},T(),ue({scrollPolicy:se.PRESERVE,viewportSnapshot:t})}function QC(){const e=Ee();if(e.result?.correct)return;const t=Cn||he();Cn=null,e.selected=[],e.checked=!1,e.result=null,T(),ue({scrollPolicy:se.PRESERVE,viewportSnapshot:t})}function YC(){const e=Uc();if(!e)return;const t=xr(),n=Ww(),s=r.progress.sentencePractice;if(s.selected.length<e.answerFlat.length){s.checked=!0,s.result={correct:!1,message:t.fillAll,wrongIndexes:[]},T(),ue({scrollPolicy:se.PRESERVE,viewportSnapshot:n});return}const a=e.answerFlat.map((l,c)=>e.selectedTiles[c]?.kanji===l.kanji?-1:c).filter(l=>l>=0),o=a.length===0;if(s.checked=!0,s.attempts=(s.attempts||0)+1,s.result={correct:o,wrongIndexes:a,message:o?t.correct:t.wrong},o)ZC(e.exercise,{quietReward:!0}),xe({trust:.8,curiosity:.5,discipline:.4},"sentence_correct"),ke("sentence_complete",{exerciseId:e.exercise.id,source:e.exercise.source||"builtin"}),Za("ok");else{r.progress.totalWrong+=1,r.progress.correctCombo=0,xe({discipline:-.6,curiosity:.2},"sentence_wrong"),ke("answer_wrong",{exerciseId:e.exercise.id,mode:"sentence"});const l=_n();l.mistakes+=1,r.progress.daily[ce()]=l,Za("again")}T(),ue({scrollPolicy:se.PRESERVE,viewportSnapshot:n})}function ZC(e,t={}){const n=Ee();if(n.completed[e.id])return;const s=!!t.quietReward,a=r.rewards?.rewards||{},o=a.sentencePracticeXp||tu.xp,l=a.sentencePracticeCoins||tu.coins;n.completed[e.id]=new Date().toISOString(),r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo);const c=_n();c.reviews+=1,c.minutes=Go((c.minutes||0)+.8,1),r.progress.daily[ce()]=c,H(o,l,`sentence:${e.id}`,{silent:s}),xe({trust:.8,curiosity:.7},"sentence_complete"),ye(),rd({silent:!0}),Z({silent:s})}function ex(){const e=fn(),t=vo(e);if(!t.length)return;Cn=null;const n=r.progress.sentencePractice?.activeId,s=t.find(o=>o?.id===n);s&&df(s);const a=Gc(t,{excludeCurrent:!0,preferUncompleted:!0});a?.id&&(ho(a.id),r.progress.sentencePractice.tileKeys=zs(a,e).map(ko),T(),P())}function Gc(e,t={}){const n=(Array.isArray(e)?e:[]).filter(x=>x?.id);if(!n.length)return null;const s=Ee(),a=s.activeId,o=new Set(s.recentIds||[]),l=new Set(s.recentAnswers||[]),c=x=>!t.excludeCurrent||n.length===1||x.id!==a,d=x=>!t.preferUncompleted||!s.completed?.[x.id],u=x=>!l.has(of(x)),m=x=>!o.has(x.id),f=[n.filter(c).filter(d).filter(u).filter(m),n.filter(c).filter(d).filter(u),n.filter(c).filter(u).filter(m),n.filter(c).filter(m),n.filter(c),n].find(x=>x.length)||n,S=f.filter(tx),C=S.length?S:f;return C[Math.floor(Math.random()*C.length)]}function tx(e){return e?.source==="user"||e?.source==="custom"||e?.source==="dynamic"||String(e?.sentence||"").indexOf("___")>0}function df(e){if(!e?.id)return;const t=Ee(),n=of(e),s=Array.isArray(t.recentIds)?t.recentIds:[],a=Array.isArray(t.recentAnswers)?t.recentAnswers:[];t.recentIds=[e.id,...s.filter(o=>o!==e.id)].slice(0,14),t.recentAnswers=[n,...a.filter(o=>o!==n)].slice(0,8)}function Je(e){return String(e).split("").reduce((t,n)=>(t<<5)-t+n.charCodeAt(0)|0,0)>>>0}function nx(e,t){return[...e].sort((n,s)=>Je(`${t}:${n.kanji}:${n.reading}`)-Je(`${t}:${s.kanji}:${s.reading}`))}function hn(e,t=[]){const n=t.filter(a=>String(e?.answers?.[a.id]||"").trim()).length,s=t.filter(a=>!String(e?.answers?.[a.id]||"").trim());return{answered:n,missingCount:s.length,missingIds:s.map(a=>a.id),firstMissingId:s[0]?.id||null,totalQuestions:t.length,ready:t.length>0&&s.length===0}}function Lr(e,t){const n=String(e||"n5").toLowerCase(),s=String(t||"").replace(/[^a-z0-9_-]+/gi,"-");return`${n}-final-question-${s}`}function sx(e){return Number(e?.passingPercent??e?.passThreshold??70)}function rx(){const e=r.finalTestModal;if(!e)return"";const t=e.kind==="warning",n=t?"thinking":e.passed?"proud":"sad",s=t?"":Qt(e.level,"btn ghost");!t&&(!e.percent||e.percent===0)&&typeof e.correct=="number"&&e.totalQuestions>0&&(e.percent=Math.round(e.correct/e.totalQuestions*100));const a=t?[`<span>${i(p()==="ru"?"Вопросов":"Questions")} ${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Пропусков":"Missing")} ${e.missingCount}</span>`,`<span>${i(p()==="ru"?"Порог":"Pass")} ${e.threshold}%</span>`]:[`<span>${i(p()==="ru"?"Результат":"Score")} ${e.percent}%</span>`,`<span>${i(p()==="ru"?"Верно":"Correct")} ${e.correct}/${e.totalQuestions}</span>`,`<span>${i(p()==="ru"?"Ошибки":"Errors")} ${e.incorrect}</span>`,`<span>${i(p()==="ru"?"Пропуски":"Missing")} ${e.unanswered}</span>`,`<span>+${e.rewardXp} XP</span>`,`<span>+${e.rewardMoon} ${i(_("coins"))}</span>`];return`
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
    `}function uf(e){const t=mL(e);if(!t&&!pL(e))return"";const n=t?p()==="ru"?"Озвучить следующее чтение кандзи":"Speak the next kanji reading":p()==="ru"?"Проиграть озвучку кандзи":"Play kanji audio";return`
      <button class="audio-trigger" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" ${t?'data-tts-kind="cycle"':""} aria-label="${g(n)}" title="${g(t?"TTS":p()==="ru"?"Озвучка":"Audio")}">🔊</button>
    `}function yo(e){const t=Ua(e);return`
      <div class="reading-row reading-split">
        ${pf(e,"onyomi",fh("onyomi"),t.onyomi.kana,t.onyomi.romaji)}
        ${pf(e,"kunyomi",fh("kunyomi"),t.kunyomi.kana,t.kunyomi.romaji)}
      </div>
    `}function pf(e,t,n,s,a){const o=mf(e,t,n);return`
      <div class="reading-box">
        <div class="reading-box-head">
          <span class="label">${i(n)}</span>
          ${o}
        </div>
        <strong>${i(ee(s)||"—")}</strong>
        <small>${i(a||"—")}</small>
      </div>
    `}function gf(e,t,n,s){return`
          <div>
            <dt class="reading-def-head">
              <span>${i(n)}</span>
              ${mf(e,t,n)}
            </dt>
            <dd>${i(ee(s||"—"))}</dd>
          </div>
        `}function mf(e,t,n){return Er(e,t).length?`<button class="reading-tts-button" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-kind="${g(t)}" aria-label="${g(`${n} TTS`)}" title="TTS">🔊</button>`:""}function $o(e,t="btn ghost"){const n=SL(e);if(!n)return"";const s=Tt(n.jlpt),a=p()==="ru"?"JLPT урок":"JLPT lesson";return s?`<button class="${t}" type="button" data-action="open-jlpt-lesson" data-jlpt="${g(n.jlpt)}">${i(n.jlpt)} · ${i(a)}</button>`:`<button class="${t} is-disabled" type="button" disabled aria-disabled="true" title="${g(En(n.jlpt))}">🔒 ${i(n.jlpt)}</button>`}function ff(e){if(!e?.id)return Js();sa(e,"study_card");const t=J(e.id),n=r.revealed;sL(e.id);const s=e.lessonTitle||Td(e.lessonId)||e.jlpt||"";return`
      <article class="study-card" data-review-card-id="${g(e.id)}">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(s)}</span>
            ${Br(t.state)}
          </div>
          ${uf(e)}
        </div>
        <div class="kanji-focus" aria-label="${g(e.kanji)}">${i(e.kanji)}</div>
        <h2>${i(n?K(e):_("question"))}</h2>
        <p class="label">${i(e.jlpt)} · ${e.strokes} ${i(_("strokes"))} · ${i(Yt(t.dueAt))}</p>
        ${n?lx(e):`
          ${ox(e)}
          <div class="actions">
            <button class="btn primary" type="button" data-action="show-answer">${i(_("showAnswer"))}</button>
            ${$o(e)}
            <button class="btn" type="button" data-action="open-card" data-id="${g(e.id)}">⋯ ${i(_("details"))}</button>
          </div>
        `}
      </article>
    `}function ax(e){const t=Math.max(Number(r.reviewSession?.initialSize||e||0),e||0,1),n=de(t-Math.max(Number(e||0),0),0,t),s=Math.min(n+1,t);return p()==="ru"?`Осталось: ${e} · ${s} / ${t}`:`Remaining: ${e} · ${s} / ${t}`}function ix(e,t){const n=Vc(e);if(!n)return Js();const s=n.progress||ot(null),a=Tr(),o=Fg(n.courseSlug),l=ps().settings.showRomaji;return`
      <article class="study-card kana-srs-card" data-review-card-id="${g(n.cardId)}" data-review-kind="kana">
        <div class="study-topline">
          <div class="tag-row compact-tags">
            <span class="pill">${i(o)}</span>
            ${Br(s.state)}
            <span class="pill">${i(ax(t))}</span>
          </div>
          <button class="audio-trigger" type="button" data-action="play-kana-tts" data-text="${g(n.kana)}" aria-label="${g(p()==="ru"?"Озвучить знак":"Speak kana")}">🔊</button>
        </div>
        <div class="kanji-focus kana-srs-focus" lang="ja" aria-label="${g(n.kana)}">${i(n.kana)}</div>
        <h2>${i(l&&n.romaji?n.romaji:p()==="ru"?"Вспомни чтение":"Recall the reading")}</h2>
        <p class="label">${i(o)} · ${i(n.strokes?`${n.strokes} ${_("strokes")}`:p()==="ru"?"знак каны":"kana card")} · ${i(Yt(s.dueAt))}</p>
        ${l&&n.romaji?`<p class="kana-srs-reading"><span lang="ja">${i(n.kana)}</span> · ${i(n.romaji)}</p>`:""}
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate-kana-review" data-course="${g(n.courseSlug)}" data-card="${g(n.cardId)}" data-rating="forgot">${i(a.forgot)} <small>${i(a.forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate-kana-review" data-course="${g(n.courseSlug)}" data-card="${g(n.cardId)}" data-rating="remember">${i(a.remember)} <small>${i(a.rememberHint)}</small></button>
        </div>
      </article>
    `}function ox(e){const t=r.readingCheck.cardId===e.id?r.readingCheck:{value:"",status:null,message:""},n=t.status?` is-${t.status}`:"",s=t.message||(p()==="ru"?"Напиши любое чтение этого кандзи хираганой или катаканой.":"Type any reading for this kanji in hiragana or katakana.");return`
      <section class="reading-check${n}" aria-live="polite">
        <label class="label" for="readingCheck-${g(e.id)}">${i(p()==="ru"?"Проверка чтения":"Reading check")}</label>
        <div class="reading-check-row">
          <input id="readingCheck-${g(e.id)}" data-reading-input data-id="${g(e.id)}" type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" value="${g(t.value)}" placeholder="${g(p()==="ru"?"Например: にち или ニチ":"Example: にち or ニチ")}" />
          <button class="btn ghost" type="button" data-action="check-reading" data-id="${g(e.id)}">${i(p()==="ru"?"Проверить":"Check")}</button>
        </div>
        <p>${i(s)}</p>
      </section>
    `}function jo(e){return`
      <li class="example-item">
        <div class="example-main">
          <b>${i(e.word)}</b>
          <span>${i(ee(e.reading))}</span>
          <span class="example-romaji">${i(e.romaji)}</span>
        </div>
        <small class="example-translation">${i(ms(e))}</small>
      </li>
    `}function lx(e){return`
      <div class="answer-section">
        ${yo(e)}
        <strong>${i(_("examples"))}</strong>
        <ul class="example-list">
          ${e.examples.map(jo).join("")}
        </ul>
        <strong>${i(_("apps"))}</strong>
        <p>${i(Qa(e))}</p>
        <ul class="app-list">${e.apps.map(t=>`<li>${i(t)}</li>`).join("")}</ul>
        <div class="actions compact-actions">
          ${$o(e)}
        </div>
        <div class="rating-grid srs-binary-grid">
          <button class="btn danger" type="button" data-action="rate" data-rating="forgot">${i(Tr().forgot)} <small>${i(Tr().forgotHint)}</small></button>
          <button class="btn success" type="button" data-action="rate" data-rating="remember">${i(Tr().remember)} <small>${i(dN(e))}</small></button>
        </div>
      </div>
    `}function qc(e,t){const n=r.progress.correctCombo>=3?"leya":"eva",s=n==="leya"?"combo":"welcome",a=r.route==="review"?Math.max(r.reviewSession?.initialSize||t,1):Math.max(r.cards.length,1),o=!!e?.id;return`
      <aside data-study-side-host>
        ${aN(n,n==="leya"?"focus":"thinking",s)}
        <div class="mini-stat-row" style="margin-top:10px">
          ${M(_("review"),t,"queue",E(t,a))}
          ${M("Combo",r.progress.correctCombo,`${r.progress.bestCorrectCombo} best`,E(r.progress.correctCombo,10))}
        </div>
        ${o?`<article class="tool-panel profile-panel">
          <h3>${i(_("hint"))} · Leya</h3>
          <p>${i(Lo(e.id).hint)}</p>
          <h3>${i(_("mnemonic"))}</h3>
          <p>${i(Lo(e.id).mnemonic)}</p>
        </article>`:""}
      </aside>
    `}function os(){r.reviewExerciseResults={},r.activeExerciseReviewId=null,r.activeExerciseReviewLevel="",r.activeExerciseReviewSource="",r.activeExerciseReviewSelection=[],r.activeExerciseReviewChoice="",r.activeExerciseReviewTranslationOpen=!1}function cx(e){if(!e){r.activeCardId=null,os();return}if(r.reviewQueueLastKind=e.kind,e.kind==="card"){const t=oe(e.card?.id||e.cardId||e.progress?.cardId||"");if(!t?.id){r.activeCardId=null,os();return}r.activeCardId!==t.id&&(r.activeCardId=t.id,os());return}if(e.kind==="kana"){r.activeCardId=null,os(),r.revealed=!1,kt();return}if(e.kind==="exercise"){const t=r.activeExerciseReviewId===e.exerciseId&&r.activeExerciseReviewLevel===e.level&&r.activeExerciseReviewSource===String(e.source||"textbook");r.activeCardId=null,r.activeExerciseReviewId=e.exerciseId,r.activeExerciseReviewLevel=e.level,r.activeExerciseReviewSource=String(e.source||"textbook"),t||(r.reviewExerciseResults={}),t||(r.activeExerciseReviewSelection=[],r.activeExerciseReviewChoice="",r.activeExerciseReviewTranslationOpen=!1)}}function Hc(e,t,n="",s=null,a=null,o="textbook"){const l=F(e);if(!l||!t)return null;if(String(o||"textbook")==="reading"){const f=a||Hf(t,l);if(!f)return null;const S=Oa(s||{},f);return{kind:"exercise",source:"reading",key:`reading:${String(l)}:${t}`,level:l,exerciseId:t,lessonId:String(f.sourceId||n||S.lessonId||""),cardId:"",dueAt:S.dueAt?new Date(S.dueAt).getTime():0,progress:S,exercise:f,card:null}}const d=qs(s||{},{level:l,lessonId:n,exerciseId:t,cardId:s?.cardId||"",kanji:s?.kanji||"",type:s?.type||"",title:s?.title||null,prompt:s?.prompt||"",answer:s?.answer||"",answerLabel:s?.answerLabel||""}),u=a||Co(l,t,n||d.lessonId||"");if(!u)return null;const m=String(u.lessonId||d.lessonId||n||""),h=String(u.cardId||d.cardId||"");return{kind:"exercise",source:"textbook",key:`exercise:${l}:${t}`,level:l,exerciseId:t,lessonId:m,cardId:h,dueAt:d.dueAt?new Date(d.dueAt).getTime():0,progress:d,exercise:u,card:oe(h)||oe(d.cardId||"")}}function Ar(){if(!r.activeExerciseReviewId||!r.activeExerciseReviewLevel)return null;const e=r.activeExerciseReviewLevel,t=r.activeExerciseReviewId;if(String(r.activeExerciseReviewSource||"textbook")==="reading"){const o=Hf(t,e),l=o?ds(o):r.progress.readingExercises?.[t]||null;return Hc(e,t,l?.lessonId||o?.sourceId||"",l,o,"reading")}const a=sd(e)?.exerciseSrs?.[t]||null;return Hc(e,t,a?.lessonId||"",a,null,"textbook")}function Vc(e){if(!e||e.kind!=="kana")return null;const t=fr(e.cardId||e.key||"",e.courseSlug||"");if(!t?.id||!we(t.slug))return null;const n=zt(t.slug),s=ot(e.progress||n[t.id]||null),a=e.character||ga(t.slug,t.kana);return a?{...e,kind:"kana",key:t.id,courseSlug:t.slug,cardId:t.id,kana:t.kana,romaji:String(a.romaji||e.romaji||""),strokes:Number(a.strokes||e.strokes||0),progress:s,character:a,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}:null}function Wc(e){return!e||e.kind!=="exercise"?null:Hc(e.level,e.exerciseId,e.lessonId||e.progress?.lessonId||"",e.progress,e.exercise||null,e.source||"textbook")}function dx(e){if(!e||typeof e!="object")return null;if(e.kind==="card"){const t=String(e.card?.id||e.cardId||e.progress?.cardId||""),n=oe(t);if(!n?.id)return null;const s=e.progress||J(n.id);return{...e,kind:"card",key:e.key||`card:${n.id}`,card:n,cardId:String(n.id),progress:s,dueAt:e.dueAt||(s.dueAt?new Date(s.dueAt).getTime():0)}}return e.kind==="kana"?Vc(e):e.kind==="exercise"?Wc(e):null}function Xc(e){return(Array.isArray(e)?e:[]).map(dx).filter(Boolean)}function ux(e){const t=Xc(e),n=Ar();if(n&&r.reviewExerciseResults?.[n.exerciseId]||n&&!t.some(l=>l.kind==="exercise"&&l.exerciseId===n.exerciseId&&l.level===n.level))return n;const s=r.activeCardId?t.find(l=>l.kind==="card"&&l.card?.id===r.activeCardId):null;if(s)return s;const a=["card","kana"],o=a.includes(r.reviewQueueLastKind)?["exercise"]:r.reviewQueueLastKind==="exercise"?a:[];if(o.length){const l=t.find(c=>o.includes(c.kind));if(l)return l}return t[0]||n||null}function px(e,t){const n=F(e);return n==="N5"?qg(t):n==="N4"?cm(t):n==="N3"?$m(t):n==="N2"?Pm(t):""}function gx(e){return p()==="ru"?e?.kind==="cloze"?"Предложение":"Вопрос":e?.kind==="cloze"?"Sentence":"Question"}function Qc(){return p()==="ru"?"Перевод":"Translation"}function hf(e){const t=String(e||"").trim();return t?t.split(/([。！？、\n]+)/u).map(n=>{if(!n)return"";if(/^[。！？、\n]+$/u.test(n))return n===`
`?`
`:`${n} `;const s=gh(n);return s?`${s} `:""}).join("").replace(/\s+\n/gu,`
`).replace(/[ \t]+/gu," ").replace(/\s+([。！？、])/gu,"$1 ").replace(/([。！？、])\s*$/gu,"$1").trim():""}function mx(e){const t=!!r.activeExerciseReviewTranslationOpen,n=e?.reading?ee(e.reading):"",s=e?.reading?hf(e.reading):"",a=b({ru:e?.translationRu||e?.ru||"",en:e?.translationEn||e?.en||""});return`
      <div class="reading-translation-wrap">
        <button class="btn ghost reading-translation-toggle" type="button" data-action="toggle-reading-translation">${i(Qc())}</button>
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
    `}function fx(e){return r.reviewExerciseResults?.[e.exerciseId]||ds(e.exercise)||null}function hx(e,t,n,s){const a=String(t?.id||n),o=s?.answers?.[a]||null,l=cj(e,t,n),c=l.find(u=>String(u.value||"")===String(t?.answer||"")),d=c?b(c.label||c):String(t?.answer||"");return`
      <div class="n4-question-block reading-question-block">
        <h3>${i(b(t?.prompt||e.exercise.question?.prompt||{}))}</h3>
        <div class="n5-option-grid">
          ${l.map(u=>{const m=o?.selected===u.value,h=o?.correct&&u.value===t.answer,f=o&&!o.correct&&u.value===t.answer;return`<button class="btn ${h||f?"success":m?"warning":"ghost"}" type="button" data-action="reading-review-answer" data-question="${g(a)}" data-value="${g(u.value)}" ${o||s?.completed?"disabled":""}>${i(b(u.label||u))}</button>`}).join("")}
        </div>
        ${o?`<p class="n5-feedback">${i(o.correct?p()==="ru"?"Верно.":"Correct.":`${p()==="ru"?"Неверно":"Wrong"} · ${d}`)}</p>`:""}
      </div>
    `}function vx(e){const t=Wc(e);if(!t||!t.exercise)return Js();const n=fx(t),s=!!n?.completed,a=t.progress||ds(t.exercise),o=gx(t.exercise),l=b(t.exercise.sourceTitle||t.exercise.title||{}),c=Ht(t.exercise),d=(t.exercise.kind==="question"?[t.exercise.question||t.exercise.questions?.[0]]:[]).filter(L=>L?.id),u=t.exercise.kind==="cloze"||!d.length&&c.length>0;if(!u&&!d.length)return Js();const m=u?s?1:Array.isArray(a?.selectedIndices)?a.selectedIndices.length:0:Object.keys(n?.answers||{}).length,h=u?Math.max(1,c.length):Math.max(1,d.length),f=Array.isArray(a?.selectedIndices)?a.selectedIndices:Array.isArray(r.activeExerciseReviewSelection)?r.activeExerciseReviewSelection:[],S=f.map(L=>t.exercise.tiles?.[L]).filter(Boolean),C=Array.isArray(a?.wrongIndexes)?a.wrongIndexes:[],x=mx(t.exercise);return`
      <article class="study-card textbook-review-card reading-review-card ${s?n?.correct===!1?"is-wrong":"is-correct":""}" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(l||o)}</span>
          <span class="pill">${i(a.state)} · ${i(Yt(a.dueAt))}</span>
          <span class="pill">${i(m)}/${i(h)}</span>
        </div>
        ${x}
        ${u?`
          <div class="sentence-card reading-cloze-card">
            <div class="sentence-line">${af(t.exercise,S,C)}</div>
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
        `:d.map((L,k)=>hx(t,L,k,n)).join("")}
        ${s?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function wx(e){const t=Wc(e);if(!t||!t.exercise)return Js();if(t.source==="reading")return vx(t);const n=!!r.reviewExerciseResults?.[t.exerciseId];return`
      <article class="study-card textbook-review-card" data-review-exercise-id="${g(t.exerciseId)}">
        <div class="n5-kanji-topline">
          <span class="pill">${i(t.level)}</span>
          <span class="pill">${i(t.lessonId||t.progress.lessonId||"")}</span>
          <span class="pill">${i(t.progress.state)} · ${i(Yt(t.progress.dueAt))}</span>
        </div>
        ${px(t.level,t.exercise)}
        ${n?`<div class="actions review-exercise-actions"><button class="btn primary" type="button" data-action="review-exercise-next">${i(p()==="ru"?"Следующее":"Next")}</button></div>`:""}
      </article>
    `}function bx(e){return`
      <article class="empty-state">
          <span class="kanji-char">⚠</span>
        <h2>${i(ze("eva","lessonComplete"))}</h2>
        <p>${i(e?Xa(e):"")}</p>
        <div class="actions" style="justify-content:center">
          <button class="btn primary" type="button" data-action="route" data-route="review">↻ ${i(_("review"))}</button>
          <button class="btn" type="button" data-action="route" data-route="dictionary">文 ${i(_("dictionary"))}</button>
        </div>
      </article>
    `}function kx(){const e=r.reviewSession?.results||{},t=Number(e.remember||0),n=Number(e.forgot||0),s=t+n,a=Xe(),o=(Array.isArray(e.items)?e.items:[]).filter(l=>l?.dueAt).sort((l,c)=>(Date.parse(l.dueAt)||0)-(Date.parse(c.dueAt)||0)).slice(0,4);return`
      <article class="empty-state review-complete-card">
        <span class="kanji-char">済</span>
        <h2>${i(p()==="ru"?"Повторение завершено":"Review complete")}</h2>
        <p>${i(p()==="ru"?"Карточки закрыты. Вот короткий итог с ближайшими возвращениями.":"Cards are done. Here is a short summary and the nearest returns.")}</p>
        <div class="mini-stat-row">
          ${M(p()==="ru"?"Помню":"Remember",t,`${s}`,E(t,Math.max(1,s)))}
          ${M(p()==="ru"?"Не помню":"Forgot",n,`${s}`,E(n,Math.max(1,s)))}
        </div>
        ${o.length?`<ul class="review-upcoming-list">
          ${o.map(l=>`<li><strong>${i(l.label||l.kind||"")}</strong><span>${i(l.course||"")}</span><small>${i(Yt(l.dueAt))}</small></li>`).join("")}
        </ul>`:""}
        <div class="actions" style="justify-content:center">
          ${a?`<button class="btn primary" type="button" data-action="review-next-batch">${i(p()==="ru"?`Следующая короткая сессия · ещё ${a}`:`Next short session · ${a} still due`)}</button>`:""}
          <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(_("learn"))}</button>
          <button class="btn ghost" type="button" data-action="route" data-route="dictionary">典 ${i(_("dictionary"))}</button>
        </div>
      </article>
    `}function Js(){const e=r.reviewSession?.results||{},t=Number(e.remember||0)+Number(e.forgot||0);return r.route==="review"&&Number(r.reviewSession?.initialSize||0)>0&&t>0?kx():`
      <article class="empty-state">
        <span class="kanji-char">休</span>
        <h2>${i(p()==="ru"?"Повторов сейчас нет":"No reviews right now")}</h2>
        <p>${i(ze("leya","welcome"))}</p>
        <button class="btn primary" type="button" data-action="route" data-route="textbooks">▶ ${i(_("learn"))}</button>
      </article>
    `}function yx(){const e=XN(),t=Math.max(qr,Number(r.dictionaryVisibleCount||qr)),n=e.slice(0,t),s=n.length<e.length,a=r.cards.filter(u=>!!r.progress.favorites[u.id]).length,o=["all",...new Set(r.cards.map(u=>u.jlpt))],l=["all",...new Set(r.cards.map(u=>za(u.id).radical).filter(Boolean))],c=p()==="ru"?`Показано ${n.length} из ${e.length}`:`Showing ${n.length} of ${e.length}`,d=p()==="ru"?"Показать ещё":"Show more";return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("dictionary"))}</h1>
            <p>${i(c)} · ${e.length}/${r.cards.length}</p>
          </div>
        </div>
        ${$x(a)}
        <div class="filters">
          <div class="field">
            <label for="dictionarySearch">${i(_("search"))}</label>
            <input id="dictionarySearch" data-filter="query" type="search" value="${g(r.filters.query)}" placeholder="日, にち, sun" autocomplete="off" />
          </div>
          <div class="field">
            <label for="jlptFilter">JLPT</label>
            <select id="jlptFilter" data-filter="jlpt">
              ${o.map(u=>`<option value="${g(u)}" ${si(u,r.filters.jlpt)}>${i(u==="all"?_("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="strokeFilter">${i(_("strokes"))}</label>
            <select id="strokeFilter" data-filter="strokes">
              ${[["all",_("all")],["1-4","1-4"],["5-8","5-8"],["9-12","9-12"],["13+","13+"]].map(([u,m])=>`<option value="${u}" ${si(u,r.filters.strokes)}>${i(m)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="radicalFilter">${i(_("radical"))}</label>
            <select id="radicalFilter" data-filter="radical">
              ${l.map(u=>`<option value="${g(u)}" ${si(u,r.filters.radical)}>${i(u==="all"?_("all"):u)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="favoriteFilter">${i(_("favorites"))}</label>
            <select id="favoriteFilter" data-filter="favorites">
              <option value="all" ${si("all",r.filters.favorites)}>${i(_("all"))}</option>
              <option value="yes" ${si("yes",r.filters.favorites)}>★</option>
            </select>
          </div>
        </div>
        <div class="dictionary-grid" style="margin-top:12px">${n.map(jx).join("")||Cx()}</div>
        ${s?`
          <div class="dictionary-load-more">
            <span>${i(c)}</span>
            <button class="btn primary" type="button" data-action="dictionary-load-more">${i(d)}</button>
          </div>
        `:""}
      </section>
    `}function $x(e){const t=r.filters.favorites==="yes",n=p()==="ru"?"Все кандзи":"All kanji",s=p()==="ru"?"Избранные":"Favorites";return`
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
    `}function jx(e){const t=J(e.id),n=za(e.id),s=!!r.progress.favorites[e.id];return`
      <button class="kanji-tile" type="button" data-action="open-card" data-id="${g(e.id)}">
        ${Sx(e)}
        <div class="tag-row">
          ${Br(t.state)}
          <span class="pill">${i(e.jlpt)}</span>
          <span class="pill">${e.strokes} ${i(_("strokes"))}</span>
          <span class="pill">${i(_("radical"))}: ${i(n.radical||"-")}</span>
          <span class="pill">${i(_("learnedStatus"))}: ${i(Ph(t.state))}</span>
          <span class="pill">${s?"★":"☆"}</span>
        </div>
      </button>
    `}function Sx(e){return`
      <span class="kanji-line">
        <span class="kanji-char">${i(e.kanji)}</span>
        <span>
          <h3>${i(K(e))}</h3>
          <p>${i(fd(e))}</p>
          <span class="label">${i(Td(e.lessonId))}</span>
        </span>
      </span>
    `}function Cx(){const e=r.filters.favorites==="yes",t=e?p()==="ru"?"В избранном пока пусто":"No favorites yet":p()==="ru"?"Ничего не найдено":"Nothing found",n=e?p()==="ru"?"Открой кандзи и нажми звездочку, чтобы он появился здесь.":"Open a kanji and tap the star to keep it here.":"";return`<article class="empty-state"><span class="kanji-char">無</span><h2>${i(t)}</h2>${n?`<p>${i(n)}</p>`:""}</article>`}function xx(){const e=r.kanjiPageId||JA(),t=oe(e);if(!t)return r.deferredDataLoaded?ia(ve("hash","entity-not-found",UA(),bs(location.hash).segments)):(Ri({route:"kanji",delay:0,force:!0}),Pd());const n=J(t.id),s=za(t.id),a=!!r.progress.favorites[t.id],o=zx(t,p()),l=Nx(t),c=ad(t);return`
      <section class="page kanji-page">
        <div class="section-head kanji-page-head">
          <div>
            <button class="btn ghost" type="button" data-action="route" data-route="dictionary">← ${i(_("dictionary"))}</button>
            <h1>${i(l?`${t.kanji} — ${Lx(l)}`:t.kanji)}</h1>
            <p>${i(l?Ax(l):K(t))}</p>
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
                ${Br(n.state)}
                <span class="pill">${i(t.jlpt)}</span>
                <span class="pill">${t.strokes} ${i(_("strokes"))}</span>
                <span class="pill">${i(_("radical"))}: ${i(s.radical||"-")} ${i(b(s.radicalMeaning||{}))}</span>
                ${l?`<span class="pill">Grade ${i(l.kanjidic2.grade||"-")}</span><span class="pill">Freq ${i(l.kanjidic2.freq||"-")}</span>`:""}
              </div>
              <h2>${i(K(t))}</h2>
              <p>${i(Qa(t))}</p>
              ${yo(t)}
              ${Zc(t)}
            </div>
          </div>
        </article>

        <div class="kanji-profile-grid">
          ${l?Ix(l):""}
          ${l?Tx(l):""}
          <article class="kanji-profile-card">
            <h2>${i(_("examples"))}</h2>
            <ul class="example-list">${t.examples.map(jo).join("")||`<li>${i(p()==="ru"?"Примеры пока не добавлены.":"No examples yet.")}</li>`}</ul>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(p()==="ru"?"Предложения":"Sentences")}</h2>
            ${l?Rx(l):Kx(t)}
          </article>

          <article class="kanji-profile-card">
            <h2>${i(_("strokeOrder"))}</h2>
            <p class="label">${i(c?p()==="ru"?"Есть точные SVG-штрихи KanjiVG для практики.":"Precise KanjiVG SVG stroke data is available for practice.":p()==="ru"?"Точного SVG-пути пока нет, доступен полупрозрачный шаблон.":"Precise SVG paths are not available yet; template mode is available.")}</p>
            <ol class="stroke-list">${Da(t).map(d=>`<li>${i(d)}</li>`).join("")}</ol>
            <div class="actions compact-actions">
              ${$o(t)}
            </div>
          </article>

          <article class="kanji-profile-card">
            <h2>${i(_("apps"))}</h2>
            <p>${i(Qa(t))}</p>
            <ul class="app-list">${t.apps.map(d=>`<li>${i(d)}</li>`).join("")}</ul>
            ${l?Px(l):""}
            <h3>${i(p()==="ru"?"SEO-страница":"SEO page")}</h3>
            <p class="label">${i(p()==="ru"?"Статическая HTML-страница для поисковиков и превью.":"Static HTML page for search engines and link previews.")}</p>
            <a class="btn primary" href="${g(o)}" target="_blank" rel="noopener">в†— ${i(p()==="ru"?"Публичная страница":"Public page")}</a>
          </article>
          ${l?Ex(l):""}
        </div>
      </section>
    `}function Nx(e){return r.kanjiPageSources?.[e?.kanji]||null}function Lx(e){return vf(e.meanings)[0]||e.literal}function vf(e){return e?e[p()]||e.ru||e.en||[]:[]}function Ir(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function Ax(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{};return[t.why,t.firstSeen].filter(Boolean).join(" ")}function Ix(e){const t=e.kanjidic2||{},n=t.codepoints?.unicode||`U+${t.codepoints?.ucs||""}`;return`
      <article class="kanji-profile-card kanji-facts-card">
        <h2>${i(p()==="ru"?"Факты KANJIDIC2":"KANJIDIC2 facts")}</h2>
        <dl class="kanji-fact-grid">
          <div><dt>${i(p()==="ru"?"Значения":"Meanings")}</dt><dd>${i(vf(e.meanings).join(", "))}</dd></div>
          <div><dt>Onyomi</dt><dd>${i((e.readings?.onyomi||[]).join(" / "))}</dd></div>
          <div><dt>Kunyomi</dt><dd>${i((e.readings?.kunyomi||[]).join(" / "))}</dd></div>
          <div><dt>JLPT</dt><dd>${i(e.jlpt)} <small>${i(Ir(e.modernJlptNote||{}))}</small></dd></div>
          <div><dt>${i(_("strokes"))}</dt><dd>${i(t.strokeCount||"-")}</dd></div>
          <div><dt>${i(_("radical"))}</dt><dd>${i(`${t.radical||"-"} ${t.radicalLiteral||""} ${Ir(t.radicalName||{})}`)}</dd></div>
          <div><dt>Grade</dt><dd>${i(t.grade||"-")}</dd></div>
          <div><dt>Unicode</dt><dd>${i(n)}</dd></div>
          <div><dt>Freq</dt><dd>${i(t.freq||"-")}</dd></div>
          <div><dt>${i(p()==="ru"?"Варианты":"Variants")}</dt><dd>${i((e.variants||[]).join(" / ")||"-")}</dd></div>
        </dl>
        <p class="source-note">${i(t.source||"KANJIDIC2 / EDRDG")}</p>
      </article>
    `}function Tx(e){return`
      <article class="kanji-profile-card">
        <h2>${i(p()==="ru"?"Полезные слова JMdict":"Useful JMdict words")}</h2>
        <ul class="kanji-word-list">
          ${(e.commonWords||[]).slice(0,10).map(t=>`
            <li>
              <a href="${g(Mx(t))}">
                <b>${Yc(t.surface,e.literal)}</b>
                <span>${i(t.reading)} · ${i(Ir(t.gloss||{}))}</span>
                <small>${i(t.partOfSpeech||"")} · JMdict ${i(t.jmdictSeq||"")}</small>
              </a>
            </li>
          `).join("")}
        </ul>
      </article>
    `}function Rx(e){return`
      <ul class="kanji-sentence-list">
        ${_x(e).map(n=>`
          <li>
            <strong>${Yc(n.japanese,e.literal)}</strong>
            <small>${i(Ir(n.translation||{}))}</small>
            <span class="source-note">${i(`${n.sourceName||"Tatoeba"} #${n.sourceId}${n.author?` · ${n.author}`:""}${n.license?` · ${n.license}`:""}`)}</span>
          </li>
        `).join("")}
      </ul>
    `}function _x(e){const t=new Set,n=new Set((e.commonWords||[]).map(s=>s.surface));return(e.sentences||[]).filter(s=>{const a=s.japanese||"";if(!a.includes(e.literal)||t.has(a))return!1;t.add(a);const o=a.replace(/[\s。、！？!?「」『』（）()・ー]/gu,"").length;return!(o<3||o>44)}).sort((s,a)=>Number(wf(a.japanese,n))-Number(wf(s.japanese,n))).slice(0,8)}function wf(e,t){return[...t].some(n=>e.includes(n))}function Px(e){return`
      <h3>${i(p()==="ru"?"В интерфейсах":"In interfaces")}</h3>
      <div class="interface-mock-grid">
        ${(e.interfaceContexts||[]).slice(0,6).map(t=>`
          <article class="interface-mock-card ${g(t.type||"card")}">
            <span>${i(Ir(t.title||{}))}</span>
            <strong>${Yc(t.japanese,e.literal)}</strong>
            <small>${i(Ir(t.translation||{}))}</small>
          </article>
        `).join("")}
      </div>
    `}function Ex(e){const t=e.editorial?.[p()]||e.editorial?.ru||e.editorial?.en||{},n=p()==="ru"?["Почему этот кандзи важен","Частая путаница","Где встретишь раньше всего","На что обратить внимание"]:["Why this kanji matters","Common confusion","Where you will meet it first","What to watch"],s=[t.why,t.confusion,t.firstSeen,t.focus];return`
      <article class="kanji-profile-card editorial-card">
        <h2>${i(p()==="ru"?"Заметки Flash Kanji":"Flash Kanji notes")}</h2>
        ${s.map((a,o)=>a?`<section><h3>${i(n[o])}</h3><p>${i(a)}</p></section>`:"").join("")}
      </article>
    `}function Mx(e){return`../word/${encodeURIComponent(e.surface||"")}/`}function Yc(e,t){const n=String(t||""),s=String(e||"");return n?s.split(n).map(i).join(`<mark class="kanji-hit" data-kanji="${g(n)}">${i(n)}</mark>`):i(s)}function Kx(e){const t=Dx(e);return t.length?`
      <ul class="kanji-sentence-list">
        ${t.map(n=>`
          <li>
            <strong>${Bx(n)}</strong>
            <span>${i(Fx(n))}</span>
            <small>${i(Ox(n))}</small>
          </li>
        `).join("")}
      </ul>
    `:`<p class="label">${i(p()==="ru"?"Подходящие предложения появятся, когда база практики содержит этот кандзи.":"Matching sentences will appear when the practice database contains this kanji.")}</p>`}function Dx(e){const t=e?.kanji||"";return t?(r.sentenceExercises||[]).filter(n=>{const s=bf(n),a=(n.blanks||[]).flatMap(o=>o.answer||[]).join("");return s.includes(t)||a.includes(t)}).slice(0,6):[]}function bf(e){return e?.sentence||e?.jp||""}function Fx(e){return e?.reading||e?.hiragana||""}function Ox(e){return p()==="en"?e?.translationEn||e?.en||e?.translationRu||e?.ru||"":e?.translationRu||e?.ru||e?.translationEn||e?.en||""}function Bx(e){let t=i(bf(e));return(e?.blanks||[]).map(s=>(s.answer||[]).join("")).forEach(s=>{t=t.replace("___",`<mark>${i(s)}</mark>`)}),t}function zx(e,t="ru"){return`../${t==="en"?"en":"ru"}/kanji/${kf(e)}/`}function kf(e){const t=String(e?.kanji||""),n=Array.from(t).map(o=>`u${o.codePointAt(0).toString(16).padStart(4,"0")}`).join("-"),a=(String(e?.romaji||e?.onyomi_romaji||e?.kunyomi_romaji||"kanji").toLowerCase().split(/[\/,;|()\s]+/).find(o=>/[a-z]/.test(o))||"kanji").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"kanji";return`${n||"kanji"}-${a}`}function Ux(){const e=oe(r.activeCardId)||sh()[0]||r.cards[0];e&&(r.activeCardId=e.id,r.activeLessonId=e.lessonId,r.writingStep=de(r.writingStep,0,Math.max(0,Wt(e)-1)));const t=ad(e),n=Wt(e),s=p()==="ru"?"Шаг":"Step",a=p()==="ru"?"Получилось":"Got it",o=p()==="ru"?"Показать образец":"Show sample",l=t?p()==="ru"?"Точные SVG-штрихи KanjiVG":"Precise KanjiVG SVG strokes":p()==="ru"?"Fallback: шаблон без фейковых штрихов":"Fallback: template without fake strokes";return`
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
            ${e?yo(e):""}
            ${e?`<div class="actions"><button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 ${i(_("audio"))}</button></div>`:""}
            <div class="stroke-demo">
              <canvas id="strokeCanvas" width="520" height="280" aria-label="stroke order animation"></canvas>
            </div>
            <div class="writing-step-panel">
              <div class="writing-step-head">
                <span class="pill" id="writingStepCounter">${s} ${r.writingStep+1}/${n}</span>
                <span class="label">${i(Da(e)[r.writingStep]||"")}</span>
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
            ${e?Jx(e):""}
            <h3>${i(_("hint"))}</h3>
            <p>${i(Lo(e?.id).hint)}</p>
            <h3>${i(_("mnemonic"))}</h3>
            <p>${i(Lo(e?.id).mnemonic)}</p>
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
    `}function Jx(e){return`
      <ol class="stroke-list writing-guide-list">
        ${Da(e).map((n,s)=>`
          <li class="${s===r.writingStep?"is-active":""}">
            <button type="button" data-action="select-writing-step" data-index="${s}">
              <b>${s+1}</b>
              <span>${i(n)}</span>
            </button>
          </li>
        `).join("")}
      </ol>
    `}function Gx(){if(!r.detailCardId)return"";const e=oe(r.detailCardId);if(!e)return"";const t=J(e.id),n=za(e.id),s=!!r.progress.favorites[e.id];return`
      <div class="detail-backdrop">
        <article class="detail-sheet" role="dialog" aria-modal="true">
          <div class="detail-title">
            <span class="kanji-char">${i(e.kanji)}</span>
            <div>
              <span class="pill">${i(e.jlpt)}</span> ${Br(t.state)}
              <h2>${i(K(e))}</h2>
              <p>${i(fd(e))} · ${e.strokes} ${i(_("strokes"))}</p>
              <p><span class="pill">${i(_("radical"))}: ${i(n.radical||"-")} ${i(b(n.radicalMeaning||{}))}</span></p>
            </div>
          </div>
          ${yo(e)}
          ${Zc(e)}
          <h3>${i(_("strokeOrder"))}</h3>
          <ol class="stroke-list">${e.stroke_order.map(a=>`<li>${i(a)}</li>`).join("")}</ol>
          <h3>${i(_("examples"))}</h3>
          <ul class="example-list">${e.examples.map(jo).join("")}</ul>
          <h3>${i(_("apps"))}</h3>
          <p>${i(Qa(e))}</p>
          <ul class="app-list">${e.apps.map(a=>`<li>${i(a)}</li>`).join("")}</ul>
          <div class="actions" style="margin-top:14px">
            <button class="btn primary" type="button" data-action="study-card" data-id="${g(e.id)}">▶ ${i(_("study"))}</button>
            <button class="btn" type="button" data-action="open-kanji-page" data-id="${g(e.id)}">↗ ${i(p()==="ru"?"Страница":"Page")}</button>
            <button class="btn" type="button" data-action="toggle-favorite" data-id="${g(e.id)}">${s?"★":"☆"} ${i(_("favorites"))}</button>
            ${$o(e)}
            <button class="btn" type="button" data-action="close-detail">OK</button>
          </div>
        </article>
      </div>
    `}function Zc(e){const t=hd(e),n=Er(e);return`
      <section class="audio-panel">
        <h3>${i(_("audio"))}</h3>
        <div class="actions">
          ${t?`<button class="btn ghost" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}">🔊 Kanji</button>`:""}
          ${qx(e,n)}
          ${!t&&!n.length?`<span class="label">${i(p()==="ru"?"Озвучка для этой карточки пока не найдена.":"Audio for this card is not available yet.")}</span>`:""}
        </div>
      </section>
    `}function qx(e,t=Er(e)){return t.length?`
          <div class="reading-tts-list" aria-label="${g(p()==="ru"?"Системная озвучка чтений":"System reading TTS")}">
            ${t.map(n=>`
              <button class="btn ghost reading-tts-choice" type="button" data-action="play-kanji-audio" data-id="${g(e.id)}" data-tts-text="${g(n.kana)}" data-tts-label="${g(ed(n))}">
                <span>${i(ed(n))}</span>
                ${i(n.kana)}
              </button>
            `).join("")}
          </div>
        `:""}function ed(e){return e.kind==="onyomi"?Io("onyomi"):e.kind==="kunyomi"?Io("kunyomi"):e.label||"TTS"}function Hx(){const e=pd(),t=_n(),n=Mn();return`
      <section class="page">
        <div class="section-head">
          <div>
            <h1>${i(_("stats"))}</h1>
            <p>${i(_("xp"))} · ${i(_("level"))} · ${i(_("coins"))}</p>
          </div>
          <div class="actions">
            ${gs("stats")}
            <button class="btn primary" type="button" data-action="route" data-route="achievements">✦ ${i(_("achievements"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${M(_("xp"),`${n.current}/${n.next}`,`${_("level")} ${r.progress.level}`,n.percent)}
          ${M(_("streak"),r.progress.streak.current,`${r.progress.streak.best} best`,E(r.progress.streak.current,30))}
          ${M(_("mastered"),e.mastered,`${e.total}`,E(e.mastered,e.total))}
          ${M(_("successRate"),`${rh()}%`,`${gd()} reviews`,rh())}
          ${M(_("errors"),t.mistakes||0,`${r.progress.totalWrong} total`,E(t.mistakes||0,Math.max(t.reviews||1,1)))}
        </div>
        <div class="stats-grid" style="margin-top:12px">
          <article class="chart-panel"><h3>${i(_("activity"))}</h3><div class="chart-box"><canvas id="activityChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("streak"))}</h3><div class="chart-box"><canvas id="streakChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("jlptProgress"))}</h3><div class="chart-box"><canvas id="jlptChart"></canvas></div></article>
          <article class="chart-panel"><h3>Повторение</h3><div class="chart-box"><canvas id="stateChart"></canvas></div></article>
          <article class="chart-panel"><h3>${i(_("errors"))}</h3><div class="chart-box"><canvas id="mistakeChart"></canvas></div></article>
          <article class="tool-panel">${Wx()}</article>
          ${r.bootAncillaryLoaded?`<article class="tool-panel" data-section="shop-panel">${Qx()}</article>`:`<article class="tool-panel" data-section="shop-panel-loading"><h3>${i(Hn().title)}</h3><p>${i(p()==="ru"?"Загружаю каталог кастомизации…":"Loading customization catalog…")}</p></article>`}
          <article class="tool-panel">${jf()}</article>
          <article class="tool-panel">
            <h3>${i(_("settings"))}</h3>
            <div class="settings-list">
              <div class="settings-row">
                <span>
                  <strong>${i(Vn().badge)}</strong>
                  <small>${i(Vn().hint)}</small>
                </span>
                <span class="pill">${i(Vn().status)}</span>
              </div>
              <div class="settings-row">
                <span>
                  <strong>${i(p()==="ru"?"Звуки интерфейса":"UX sounds")}</strong>
                  <small>${i(p()==="ru"?"Клики, ответы, награды и уведомления.":"Clicks, answers, rewards, and in-app notices.")}</small>
                </span>
                <button class="btn ${Do()?"success":"ghost"}" type="button" data-action="toggle-ux-sound">${Do()?"On":"Off"}</button>
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
                <input class="ux-volume-slider" type="range" min="0" max="100" step="5" value="${Math.round(Fo()*100)}" data-ux-volume />
                <strong class="volume-value" data-ux-volume-label>${Math.round(Fo()*100)}%</strong>
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
    `}function Gs(){return r.achievements?.length?r.achievements:r.rewards?.achievements||[]}function Vx(){return r.achievementCategories?.length?r.achievementCategories:[...new Set(Gs().map(t=>t.category||"learning"))].map(t=>({id:t,title:{ru:t,en:t},icon:"moon"}))}function td(e){return b(e.title||e.name||{ru:e.id,en:e.id})}function yf(e){return b(e.description||{})}function nd(e){return{moon:"月",book:"文",memory:"記",flame:"火",star:"星",brush:"筆",text:"文",lock:"鍵",eye:"眼"}[e]||"✦"}function Wx(){return`<h3>${i(_("achievements"))}</h3><div class="achievement-grid compact">${Gs().slice(0,8).map($f).join("")}</div>`}function Xx(){const e=Gs(),t=VA(),n=e.reduce((s,a)=>({xp:s.xp+(a.rewardXp||0),coins:s.coins+(a.rewardFragments||0)}),{xp:0,coins:0});return`
      <section class="page achievements-page">
        <div class="section-head">
          <div>
            <h1>${i(_("achievements"))}</h1>
            <p>${i(p()==="ru"?"Лунные цели, секреты Евы и Леи, награды за прогресс.":"Moon goals, Eva and Leya secrets, and progress rewards.")}</p>
          </div>
          <div class="actions">
            ${gs("achievements")}
            <button class="btn" type="button" data-action="route" data-route="stats">▥ ${i(_("stats"))}</button>
          </div>
        </div>
        <div class="metric-grid">
          ${M(_("achievements"),`${t}/${e.length}`,p()==="ru"?"открыто":"unlocked",E(t,e.length))}
          ${M("XP",n.xp,p()==="ru"?"в наградах":"in rewards",E(t,e.length))}
          ${M(_("coins"),n.coins,p()==="ru"?"в наградах":"in rewards",E(t,e.length))}
          ${M(p()==="ru"?"Секреты":"Secrets",`${e.filter(s=>s.secret&&Jr(s.id)).length}/${e.filter(s=>s.secret).length}`,"Eva · Leya",E(e.filter(s=>s.secret&&Jr(s.id)).length,Math.max(1,e.filter(s=>s.secret).length)))}
        </div>
        <div class="achievement-category-list">
          ${Vx().map(s=>{const a=e.filter(l=>l.category===s.id);if(!a.length)return"";const o=a.filter(l=>Jr(l.id)).length;return`
              <section class="achievement-category">
                <div class="section-head compact-head">
                  <div>
                    <h2>${nd(s.icon)} ${i(b(s.title))}</h2>
                    <p>${o}/${a.length}</p>
                  </div>
                  <span class="pill">${E(o,a.length)}%</span>
                </div>
                <div class="achievement-grid expanded">${a.map(l=>$f(l,!0)).join("")}</div>
              </section>
            `}).join("")}
        </div>
      </section>
    `}function $f(e,t=!1){const n=Jr(e.id),s=Pf(e),a=Math.max(1,Number(e.target||1)),o=E(s,a),l=Math.min(s,a),c=e.secret&&!n&&!t?p()==="ru"?"Секретное достижение":"Secret achievement":td(e),d=e.secret&&!n&&!t?p()==="ru"?"Откроется при необычном действии.":"Unlocked by an unusual action.":yf(e);return`
      <div class="achievement ${n?"is-unlocked":""} ${e.secret?"is-secret":""}">
        <span class="achievement-icon">${nd(e.icon)}</span>
        <strong>${i(c)}</strong>
        <small>${i(d)}</small>
        <div class="achievement-progress" aria-label="${g(`${l}/${a}`)}"><i style="width:${o}%"></i></div>
        <small class="achievement-reward">+${e.rewardXp||0} XP · +${e.rewardFragments||0} ${i(_("coins"))}</small>
      </div>
    `}function Qx(){return lg({closable:!1})}function jf(e={}){const t=e.limit||10,n=(r.progress.transactions||[]).slice(0,t);return`
      <h3>${i(_("transactions"))}</h3>
      <div class="transaction-list">
        ${n.map(s=>`
          <div class="transaction-row">
            <div>
              <strong>${i(Yx(s))}</strong>
              <small>${i(uA(s.at))}</small>
            </div>
            <span>${Number(s.coins||0)>=0?"+":""}${Number(s.coins||0)} Moon · ${Number(s.xp||0)>=0?"+":""}${Number(s.xp||0)} XP</span>
          </div>
        `).join("")||`<p>${i(p()==="ru"?"Пока нет операций.":"No transactions yet.")}</p>`}
      </div>
    `}function Yx(e){if(e.label)return e.label;const t=String(e.reason||""),n=t.match(/^customization:[^:]+:(.+)$/);if(n){const s=Ce(n[1]);if(s)return Ot(s)}return t.startsWith("achievement:")?p()==="ru"?"Достижение":"Achievement":t.startsWith("daily_bonus")?p()==="ru"?"Ежедневный бонус":"Daily bonus":t.startsWith("sentence")?p()==="ru"?"Практика предложений":"Sentence practice":t.startsWith("writing")?p()==="ru"?"Практика письма":"Writing practice":t.startsWith("lesson")?p()==="ru"?"Урок":"Lesson":t.startsWith("review")?p()==="ru"?"Повторение":"Review":t.startsWith("shop:")?p()==="ru"?"Магазин":"Shop":p()==="ru"?"Операция":"Transaction"}function Zx(){if(!Lf())return"";const e=r.rewardModal,t=e.type==="level",n=e.type==="achievement",s=Mn(),a=t?`${_("level")} ${r.progress.level} - ${s.current}/${s.next} XP - ${r.progress.moonFragments} ${_("coins")}`:e.message;return`
      <div class="reward-backdrop ${t?"is-level":""}">
        <article class="reward-modal ${t?"is-level":""} ${n?"is-achievement":""}">
          ${t?'<img class="reward-logo" src="assets/logo.webp" alt="Flash Kanji" />':""}
          ${n?`<div class="reward-achievement-icon">${nd(e.icon)}</div>`:""}
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
    `}function eN(){if(!r.contactModal)return"";const e=p()==="ru"?"Сообщить об ошибке":"Report a bug",t=p()==="ru"?"Если почтовое приложение не открывается, скопируй адрес и отправь сообщение вручную.":"If your mail app does not open, copy the address and send the message manually.",n=p()==="ru"?"Скопировать email":"Copy email",s=p()==="ru"?"Открыть почту":"Open email",a=p()==="ru"?"Закрыть":"Close",o=encodeURIComponent(er),l=encodeURIComponent(p()==="ru"?`Привет! Я нашел ошибку в Flash Kanji:

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
    `}function tN(){const e=r.changelogModal;if(!e?.entry)return"";const t=e.entry,n=p(),s=b(t.title||{})||(n==="ru"?"Что нового во Flash Kanji":"What’s new in Flash Kanji"),a=Array.isArray(t.items?.[n])&&t.items[n].length?t.items[n]:t.items?.ru||t.items?.en||[],o=n==="ru"?"Мы обновили учебники и ускорили учебные действия. Это окно появится только один раз для этой версии.":"Textbooks were updated and study actions are faster. This window appears only once for this version.",l=n==="ru"?"Понятно":"Got it";return`
      <div class="reward-backdrop changelog-backdrop">
        <article class="reward-modal changelog-modal" role="dialog" aria-modal="true" aria-labelledby="changelogTitle" aria-describedby="changelogDescription">
          <div class="changelog-kicker">Flash Kanji · ${i(t.version||e.version||"")}</div>
          <h2 id="changelogTitle">${i(s)}</h2>
          ${t.date?`<p class="changelog-date">${i(t.date)}</p>`:""}
          <p id="changelogDescription">${i(o)}</p>
          <ul class="changelog-list">
            ${a.map(c=>`<li>${i(c)}</li>`).join("")}
          </ul>
          <p class="changelog-storage-note">${i(n==="ru"?`Статус хранится локально: ${Qo}, ${Yo}.`:`Saved locally: ${Qo}, ${Yo}.`)}</p>
          <div class="actions changelog-actions">
            <button class="btn primary" type="button" data-action="close-changelog">${i(l)}</button>
          </div>
        </article>
      </div>
    `}function nN(){if(!r.pwaInstallHelpVisible)return"";const e=zr(),t=p()==="ru"?"Как установить приложение":"How to install the app",n=p()==="ru"?"Кнопка открыла подсказку, потому что браузер ещё не показал системное окно установки.":"The button opened a quick guide because the browser has not yet shown the system install prompt.",s=p()==="ru"?"Понятно":"Got it",a=e?p()==="ru"?["Открой Flash Kanji в Safari.","Нажми “Поделиться”, затем “На экран Домой”.","Подтверди установку."]:["Open Flash Kanji in Safari.","Tap Share, then choose Add to Home Screen.","Confirm the install."]:p()==="ru"?["Открой меню браузера.","Найди пункт “Установить приложение” или “Установить Flash Kanji”.","Подтверди установку."]:["Open the browser menu.","Choose Install app or Install Flash Kanji.","Confirm the install."];return`
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
    `}function sN(){if(Wp()||r.pwaInstallHelpVisible||!Md()||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal)return"";const e=Mh(),t=!js&&zr();return`
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
    `}function rN(){if(Wp()||!r.notificationPromptVisible||!zo("visible")||r.detailCardId||r.rewardModal||r.finalTestModal||r.contactModal||r.changelogModal||r.pwaInstallHelpVisible||Md())return"";const e=zh();return`
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
    `}function aN(e,t,n){const s=Or(e),a=So(e,t,n),o=Nf(ze(e,n));return`
      <article class="sidekick mascot-${e} mood-${t}" data-action="mascot-click" data-character="${g(e)}">
        <img src="${g(a)}" alt="${g(b(s.name))}" />
        <div><strong>${i(b(s.name))}</strong><p>${i(o)}</p></div>
      </article>
    `}function Rn(e,t,n,s){const a=Or(e),o=So(e,t,n),l=Nf(ze(e,n)),c=`${s||"mascot"}:${e}:${n}:${r.route}:${r.activeTextbookLevel||r.activeJlptLesson||""}`.toLowerCase();return Cf(c)?`
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
    `}function Sf(){try{const e=sessionStorage.getItem(O);return e?JSON.parse(e)||{}:{}}catch{return{}}}function iN(e){try{sessionStorage.setItem(O,JSON.stringify(e||{}))}catch{}}function Cf(e){return e?!!Sf()[e]:!1}function xf(e){if(!e)return;const t=Sf();t[e]=Date.now(),iN(t);const n=Cs.get(e);n&&(clearTimeout(n),Cs.delete(e)),P()}function oN(){const e=new Set;vl("[data-mascot-speech-key][data-autohide-ms]").forEach(t=>{const n=String(t.dataset.mascotSpeechKey||"");if(!n||Cf(n)||(e.add(n),Cs.has(n)))return;const s=Number(t.dataset.autohideMs||0);if(!s)return;const a=window.setTimeout(()=>{Cs.delete(n),xf(n)},s);Cs.set(n,a)});for(const[t,n]of Cs)e.has(t)||(clearTimeout(n),Cs.delete(t))}function So(e,t="normal",n="welcome"){if(e==="eva")return Es(Ln(null,lN(t,n)));const s=Or(e);return s.sprites?.[t]||Object.values(s.sprites||{})[0]||""}function lN(e="normal",t="welcome"){const n=String(t||"").toLowerCase(),s=String(e||"").toLowerCase(),a={welcome:"welcome",correct:"approve",wrong:"sad",progress:"observe",streakloss:"sad",lessoncomplete:"proud",masterymilestone:"proud",achievement:"achievement",goal:"reward",combo:"proud",hint:"think",dailybonus:"reward"},o={normal:"welcome",calm:"neutral",happy:"happy",proud:"proud",thinking:"think",focus:"think",sad:"sad",angry:"strict",shy:"shy"},l=o[s]&&!["normal","calm"].includes(s)?o[s]:null;return l&&(!n||n==="welcome")?l:a[n]||o[s]||s||"neutral"}function Nf(e){if(p()!=="ru")return e;const t="[А-Яа-яЁё]";return String(e||"").replace(new RegExp(`(^|\\s)(${t})\\s+(?=${t}{4,})`,"gu"),"$1$2 ")}function cN(e){const t=oe(r.activeCardId);if(!t||!xv[e])return;const n=he();na(t,"srs_rating");const s=ie(J(t.id)),a=$e(s,e);r.progress.cards[t.id]=a,Vt(s,a,e),ye();const o=Number(r.progress.correctCombo||0),l=Be(e)?"again":"ok";Be(e)?(r.progress.totalWrong+=1,r.progress.correctCombo=0,xe({discipline:-.8,trust:-.2},"answer_again"),ke("answer_wrong",{cardId:t.id,kanji:t.kanji,rating:e,comboLost:o>0}),G(ze("eva","wrong"))):(H(r.rewards.rewards.correctXp,r.rewards.rewards.correctCoins,"review_success"),r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo),xe({trust:.35,discipline:.25,curiosity:a.lastDecision==="Easy"?.2:0},`answer_${e}`),ke("answer_correct",{cardId:t.id,kanji:t.kanji,rating:e,combo:r.progress.correctCombo}),G(ze("eva","correct")),r.progress.correctCombo>0&&r.progress.correctCombo%5===0&&(H(r.rewards.rewards.comboXp,0,"combo_bonus"),bt({title:"Combo",message:ze("leya","combo"),xp:r.rewards.rewards.comboXp,coins:0,mascot:"leya",mood:"proud",dialog:"combo"}))),r.reviewQueueLastKind="card",Zf("kanji",e,{label:t.kanji,level:t.jlpt,dueAt:a.dueAt,state:a.state,cardId:t.id}),Qf(`card:${t.id}`),r.revealed=!1,r.activeCardId=null,kt(),Mo("card"),ue({scrollPolicy:se.TOP,viewportSnapshot:n}),T(),Kt("review card post-render effects",()=>{To(),Za(l),pr(),hN(t.lessonId),rd({silent:!0}),Z()},{scrollPolicy:se.TOP,viewportSnapshot:n})}function Lf(){return!!(r.rewardModal&&r.route!=="review")}function Af(e,t,n){const s=fr(t,e);if(!s?.id||!we(s.slug))return;const a=he(),o=yt(s.slug),l=zt(s.slug),c=ie(ot(l[s.id]||null)),d=Be(n)?"forgot":"remember",u=sv(c,d);l[s.id]=u,o.review=l,o.currentRoute="review",o.updatedAt=new Date().toISOString(),Vt(c,u,d),ye({skipAchievements:!0});const m=Number(r.progress.correctCombo||0),h=d==="forgot"?"again":"ok";d==="forgot"?(r.progress.totalWrong+=1,r.progress.correctCombo=0,xe({discipline:-.5,trust:-.1},"kana_answer_again"),ke("answer_wrong",{cardId:s.id,kana:s.kana,rating:d,comboLost:m>0},{skipAchievements:!0}),G(ze("eva","wrong"))):(r.progress.totalCorrect+=1,r.progress.correctCombo+=1,r.progress.bestCorrectCombo=Math.max(r.progress.bestCorrectCombo,r.progress.correctCombo),xe({trust:.25,discipline:.2,curiosity:.1},"kana_answer_remember"),ke("answer_correct",{cardId:s.id,kana:s.kana,rating:d,combo:r.progress.correctCombo},{skipAchievements:!0}),G(ze("eva","correct"))),r.reviewQueueLastKind="kana",Zf("kana",d,{label:s.kana,course:Fg(s.slug),dueAt:u.dueAt,state:u.state,cardId:s.id}),Qf(s.id),r.revealed=!1,r.activeCardId=null,os(),kt(),Mo("kana"),ue({scrollPolicy:se.TOP,viewportSnapshot:a}),T(),Kt("kana review post-render effects",()=>{To(),Za(h),pr()},{scrollPolicy:se.TOP,viewportSnapshot:a})}function Tr(){return p()==="ru"?{forgot:"Не помню",remember:"Помню",forgotHint:"вернём быстро",rememberHint:"Повторение выберет срок"}:{forgot:"Forgot",remember:"Remember",forgotHint:"review soon",rememberHint:"review decides"}}function dN(e){const t=Tr(),n=J(e.id),s=uN(n,"remember"),a=Sb(n,s);return`${t.rememberHint}: ${Cb($b(a))}`}function uN(e,t){if(Be(t))return"again";const n=e.state||"New",s=Number(e.reviewCount||0),a=Number(e.correct||0),o=Number(e.wrong||0),l=Number(e.lapses||0),c=Number(e.successRate||(s?a/Math.max(a+o,1)*100:0));return n==="New"?"good":n==="Learning"?c>=70||a>=2?"good":"hard":c>=88&&a>=5&&l<=1?"easy":c<70||l>Math.max(1,Math.floor(a/3))?"hard":"good"}function Be(e){return e==="forgot"||e==="again"}function Rr(e="",t="",n="",s={}){return{level:String(e||"").toUpperCase(),lessonId:String(s.lessonId||t||""),exerciseId:String(s.exerciseId||n||""),cardId:String(s.cardId||""),kanji:String(s.kanji||""),type:String(s.type||""),title:s.title||null,prompt:String(s.prompt||""),answer:String(s.answer||""),answerLabel:String(s.answerLabel||""),state:"New",intervalDays:0,srsStep:-1,easeFactor:2.5,dueAt:null,lastReviewedAt:null,lastRating:null,reviewCount:0,lapses:0,correct:0,wrong:0,successRate:0,history:[]}}function qs(e,t={}){const s={...Rr(t.level||"",t.lessonId||"",t.exerciseId||"",t),...ot(e||{})};return s.level=String(t.level||s.level||"").toUpperCase(),s.lessonId=String(t.lessonId||s.lessonId||""),s.exerciseId=String(t.exerciseId||s.exerciseId||""),s.cardId=String(t.cardId||s.cardId||""),s.kanji=String(t.kanji||s.kanji||""),s.type=String(t.type||s.type||""),s.title=t.title||s.title||null,s.prompt=String(t.prompt||s.prompt||""),s.answer=String(t.answer||s.answer||""),s.answerLabel=String(t.answerLabel||s.answerLabel||""),s.successRate=Eh(s),Number.isFinite(Number(s.srsStep))?s.srsStep=de(Math.trunc(Number(s.srsStep)),-1,63):s.srsStep=Xl(s),If(s)?s:Rr(s.level,s.lessonId,s.exerciseId,s)}function If(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.lastRating||Number(e.correct||0)>0||Number(e.wrong||0)>0||Array.isArray(e.history)&&e.history.length)}function Ra(e,t,n){const s={...e||{}};return Object.entries(t||{}).forEach(([a,o])=>{s[a]=qs(o,{level:n,exerciseId:a,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""})}),s}function sd(e){const t=F(e);return t==="N5"?re():t==="N4"?Q():t==="N3"?W():t==="N2"?X():t==="N1"?ne():null}function Tf(e){const t=F(e);return t==="N5"?et():t==="N4"?ut():t==="N3"?gt():t==="N2"?ft():t==="N1"?vt():[]}function pN(e,t){const n=F(e),s=String(t||"");return!n||!s?null:Tf(n).find(a=>a.id===s||a.id===`${n.toLowerCase()}-${s}`||a.id.endsWith(`-${s}`))||null}function gN(e){const t=F(e);return t==="N5"?Fs:t==="N4"?$a:t==="N3"?Sa:t==="N2"?xa:t==="N1"?Aa:null}function Co(e,t,n=""){const s=gN(e),a=F(e),o=String(t||"");if(!s||!a||!o)return null;const l=Tf(a),c=n?pN(a,n):l.find(m=>o.startsWith(`${m.id}-`)),d=`${a}:${p()}`;let u=bu.get(d);(!u||u.lessons!==l||u.cards!==r.cards)&&(u={lessons:l,cards:r.cards,byLesson:new Map},bu.set(d,u));for(const m of c?[c]:l){u.byLesson.has(m.id)||u.byLesson.set(m.id,new Map(s(m).map(f=>[String(f.id),{...f,lessonId:m.id}])));const h=u.byLesson.get(m.id).get(o);if(h)return h}return null}function mN(e,t){const n=F(t);if(!e||!n)return!1;e.exerciseSrs||(e.exerciseSrs={});const s=new Set([...Object.keys(e.viewedLessons||{}),...Object.keys(e.completedLessons||{})]),a=new Set([...Object.keys(e.completedExercises||{}),...Object.keys(e.exerciseResults||{})]);let o=!1;return a.forEach(l=>{if(e.exerciseSrs[l])return;const c=Co(n,l);if(!c||!s.has(String(c.lessonId||"")))return;const d=Rr(n,c.lessonId||"",c.id,c),u=e.exerciseResults?.[l]||null,m=!!e.completedExercises?.[l],h=$e(ie(d),m||u?.correct?"good":"again");h.level=n,h.lessonId=String(c.lessonId||h.lessonId||""),h.exerciseId=String(c.id||l||""),h.cardId=String(c.cardId||h.cardId||""),h.kanji=String(c.kanji||h.kanji||""),h.type=String(c.type||h.type||""),h.title=c.title||h.title||null,h.prompt=String(c.prompt||h.prompt||""),h.answer=String(c.answer||h.answer||""),h.answerLabel=String(c.answerLabel||h.answerLabel||""),e.exerciseSrs[l]=h,o=!0}),o}function fN(e,t){const n=F(t);if(!e||!n)return!1;e.exerciseSrs||(e.exerciseSrs={});const s=Object.entries(e.exerciseSrs);if(!s.length)return!1;let a=!1;return s.forEach(([o,l])=>{const c=Co(n,o,l?.lessonId||"");if(!c)return;const d=qs(l,{level:n,lessonId:c.lessonId,exerciseId:c.id,cardId:c.cardId||"",kanji:c.kanji||"",type:c.type||"",title:c.title||null,prompt:c.prompt||"",answer:c.answer||"",answerLabel:c.answerLabel||""});JSON.stringify(l)!==JSON.stringify(d)&&(e.exerciseSrs[o]=d,a=!0)}),a}function hN(e){if(r.progress.lessonCompletions[e])return;const t=md(e);if(!(t.length>0&&t.every(o=>J(o.id).state!=="New")))return;const s=r.rewards.rewards.lessonCompleteXp,a=r.rewards.rewards.lessonCompleteCoins;r.progress.lessonCompletions[e]=new Date().toISOString(),Dr("",e,"legacy-srs"),D("lesson_complete"),H(s,a,"lesson_completion"),xe({warmth:2.4,trust:2,discipline:2.2,curiosity:.8},"lesson_completion"),ke("lesson_complete",{lessonId:e,xp:s,coins:a}),bt({title:b({ru:"Урок завершён",en:"Lesson complete"}),message:ze("eva","lessonComplete"),xp:s,coins:a,mascot:"eva",mood:"happy",dialog:"lessonComplete"}),Uo("lesson_complete")}function rd(e={}){const t=ce(),n=_n();if(n.goalClaimed||n.reviews<r.progress.settings.dailyGoal)return;n.goalClaimed=!0;const s=r.rewards.rewards.comboXp,a=r.rewards.rewards.streakCoins;H(s,a,"daily_goal"),e.silent||bt({title:_("dailyGoal"),message:ze("leya","goal"),xp:s,coins:a,mascot:"leya",mood:"happy",dialog:"goal"}),r.progress.daily[t]=n}function vN(){const e=xo(),t=ce();e.firstVisitDate||(e.firstVisitDate=t),e.lastVisitDate=t,r.progress.appOpens=Number(r.progress.appOpens||0)+1;const n=new Date().getHours();(n>=22||n<5)&&(r.progress.secrets.nightVisit=!0),Rf()}function Rf(){const e=r.progress.streak,t=fp(e.pendingReward);if(!t||ce()<t.availableOn)return!1;e.pendingReward=null;const n=r.rewards.rewards.streakCoins;return D("streak_reward"),H(0,n,`streak:${t.milestone}:claim`),bt({title:p()==="ru"?"Награда за стрик":"Streak reward",message:p()==="ru"?`Бонус за серию ${t.milestone} дней готов.`:`Your ${t.milestone}-day streak bonus is ready.`,xp:0,coins:n,mascot:"eva",mood:"achievement",dialog:"achievement"}),Z(),T(),!0}function wN(e){if(e==="eva"){r.progress.secrets.evaClicks=Number(r.progress.secrets.evaClicks||0)+1,xe({warmth:.2,curiosity:.1},"eva_click"),G(ze("eva","welcome")),Z(),T(),P();return}e==="leya"&&G(ze("leya","combo"))}function _f(){me(),r.progress.secrets.evaClicks=Number(r.progress.secrets.evaClicks||0)+1,r.evaRuntime||(r.evaRuntime=ln()),r.evaRuntime.clickCount=Number(r.evaRuntime.clickCount||0)+1,ke("user_clicked_eva",{clickCount:r.evaRuntime.clickCount}),Z(),D("notification_soft"),T(),P()}function bN(){if(Y.completed)return;Y.completed=!0,r.progress.writingPractice.completed=Number(r.progress.writingPractice.completed||0)+1,Y.cardId&&(r.progress.writingPractice.cards[Y.cardId]=(r.progress.writingPractice.cards[Y.cardId]||0)+1),xe({curiosity:1,discipline:.8,trust:.4},"writing_complete"),ke("writing_complete",{cardId:Y.cardId}),fe("writing_complete",{route:"writing",cardId:Y.cardId||"",source:"practice"});const e=Z();T(),e&&P()}function kN(){const e=ce();xo();const t=yN(),n=qi(r.progress.dailyBonusPending);n&&n.availableOn>e||(n&&n.availableOn<=e&&!t&&(r.progress.dailyBonusPending=null),r.progress.dailyBonusPending={availableOn:Jh(e,1)},T())}function yN(){const e=ce(),t=xo(),n=qi(r.progress.dailyBonusPending);if(!n||ce()<n.availableOn||r.progress.dailyBonuses[e]||t.lastDailyBonusDate===e)return!1;r.progress.dailyBonusPending=null;const s=t.lastDailyBonusDate||t.firstVisitDate||t.lastVisitDate;return $N(s,e),t.lastVisitDate=e,t.lastDailyBonusDate=e,r.progress.dailyBonuses[e]=new Date().toISOString(),D("daily_bonus"),H(r.rewards.rewards.dailyBonusXp,r.rewards.rewards.dailyBonusCoins,"daily_bonus"),xe({warmth:1,discipline:.8},"daily_bonus"),bt({title:_("dailyBonus"),message:ze("leya","welcome"),xp:r.rewards.rewards.dailyBonusXp,coins:r.rewards.rewards.dailyBonusCoins,mascot:"leya",mood:"calm",dialog:"welcome"}),Z(),Fd(),!0}function xo(){var t;(t=r.progress).visits||(t.visits={});const e=r.progress.visits;return e.firstVisitDate||(e.firstVisitDate=null),e.lastVisitDate||(e.lastVisitDate=null),e.lastDailyBonusDate||(e.lastDailyBonusDate=null),e.streak=Number(e.streak||0),e.bestStreak=Number(e.bestStreak||0),e}function $N(e,t){const n=xo();n.streak=e&&hs(e,t)===1?n.streak+1:1,n.bestStreak=Math.max(n.bestStreak||0,n.streak);const s=r.progress.streak.lastStudyDate;s!==t&&(r.progress.streak.current=s&&hs(s,t)===1?r.progress.streak.current+1:1,r.progress.streak.lastStudyDate=t,r.progress.streak.best=Math.max(r.progress.streak.best||0,r.progress.streak.current),r.progress.streakHistory.push({date:t,value:r.progress.streak.current}),r.progress.streakHistory=r.progress.streakHistory.slice(-120))}function Z(e={}){if(!Gs().length)return 0;const t=!!e.silent;let n=0;return Gs().forEach(s=>{if(Jr(s.id)||!jN(s))return;n+=1;const a=s.rewardXp||0,o=s.rewardFragments||0;r.progress.achievements[s.id]={unlockedAt:new Date().toISOString(),rewardXp:a,rewardFragments:o},t||bt({type:"achievement",title:td(s),message:yf(s),xp:a,coins:o,icon:s.icon,mascot:"eva",mood:"happy",dialog:"achievement"}),H(a,o,`achievement:${s.id}`,{silent:t})}),n}function jN(e){return Pf(e)>=Number(e.target||1)}function Pf(e){if(e.kind==="lessonComplete")return Object.keys(r.progress.lessonCompletions).length;if(e.kind==="correct")return r.progress.totalCorrect;if(e.kind==="learned")return pd().learned;if(e.kind==="reviews")return gd();if(e.kind==="streak")return Math.max(r.progress.streak.current||0,r.progress.streak.best||0);if(e.kind==="level")return r.progress.level||1;if(e.kind==="moonFragments")return r.progress.totalMoonFragmentsEarned||0;if(e.kind==="writing")return r.progress.writingPractice?.completed||0;if(e.kind==="sentence")return Object.keys(r.progress.sentencePractice?.completed||{}).length;if(e.kind==="evaClicks")return r.progress.secrets?.evaClicks||0;if(e.kind==="nightVisit")return r.progress.secrets?.nightVisit?1:0;if(e.kind==="appOpens")return r.progress.appOpens||0;if(e.kind==="n5KanjiStudied")return Object.keys(re().studiedKanji||{}).length;if(e.kind==="n5LessonComplete"||e.kind==="n5LessonsComplete")return go();if(e.kind==="n5Writing")return Object.keys(re().writingPractice||{}).length;if(e.kind==="n5SrsAll")return Object.keys(re().srsKanji||{}).length;if(e.kind==="n5FinalPass")return re().finalTest?.passed?1:0;if(e.kind==="n4Opened")return Q().opened?1:0;if(e.kind==="n4LessonComplete")return Object.keys(Q().completedLessons||{}).length;if(e.kind==="n4LessonsComplete")return Object.keys(Q().completedLessons||{}).length;if(e.kind==="n4SrsAll")return Object.keys(Q().srsKanji||{}).length;if(e.kind==="n4GrammarComplete")return Object.keys(Q().completedGrammar||{}).length;if(e.kind==="n4ReadingComplete")return Object.keys(Q().completedReading||{}).length;if(e.kind==="n4ListeningComplete")return Object.keys(Q().completedListening||{}).length;if(e.kind==="n4Writing")return Object.keys(Q().writingPractice||{}).length;if(e.kind==="n4FinalPass")return Q().finalTest?.passed?1:0;if(e.kind==="n3Opened")return W().opened?1:0;if(e.kind==="n3LessonComplete")return Object.keys(W().completedLessons||{}).length;if(e.kind==="n3LessonsComplete")return Object.keys(W().completedLessons||{}).length;if(e.kind==="n3SrsAll")return Object.keys(W().srsKanji||{}).length;if(e.kind==="n3GrammarComplete")return Object.keys(W().completedGrammar||{}).length;if(e.kind==="n3ReadingComplete")return Object.keys(W().completedReading||{}).length;if(e.kind==="n3ListeningComplete")return Object.keys(W().completedListening||{}).length;if(e.kind==="n3Writing")return Object.keys(W().writingPractice||{}).length;if(e.kind==="n3ComprehensionAnswers")return Object.values(W().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n3FinalPass")return W().finalTest?.passed?1:0;if(e.kind==="n2Opened")return X().opened?1:0;if(e.kind==="n2LessonComplete")return Object.keys(X().completedLessons||{}).length;if(e.kind==="n2LessonsComplete")return Object.keys(X().completedLessons||{}).length;if(e.kind==="n2SrsAll")return Object.keys(X().srsKanji||{}).length;if(e.kind==="n2GrammarComplete")return Object.keys(X().completedGrammar||{}).length;if(e.kind==="n2ReadingComplete")return Object.keys(X().completedReading||{}).length;if(e.kind==="n2ListeningComplete")return Object.keys(X().completedListening||{}).length;if(e.kind==="n2Writing")return Object.keys(X().writingPractice||{}).length;if(e.kind==="n2ComprehensionAnswers")return Object.values(X().readingAnswers||{}).filter(t=>t&&t.correct).length;if(e.kind==="n2FinalPass")return X().finalTest?.passed?1:0;if(e.kind==="shopComplete"){const t=Fe().filter(n=>!n.defaultOwned&&n.price>0);return t.length&&t.every(n=>Bt(n.id))?1:0}if(e.kind==="jlpt"){const t=r.cards.filter(n=>n.jlpt===e.jlpt);return t.length>0&&t.every(n=>J(n.id).state==="Mastered")?1:0}return 0}function bt(e){if(!(e?.type==="achievement"&&Yf())){if(!r.rewardModal){r.rewardModal=e,Ef(e);return}if(e.type==="level"){r.rewardQueue.unshift(e);return}r.rewardQueue.push(e)}}function Ef(e){if(kA(),e?.type==="achievement"){Wa()?D("achievement_unlock"):Do()&&bA();return}if(e?.type==="level"){D("level_up");return}((e?.xp||0)>0||(e?.coins||0)>0)&&D("notification_reward")}function H(e,t,n="reward",s={}){const a=!!s.silent,o=r.progress.level||Eo(r.progress.xp);r.progress.xp+=e,r.progress.moonFragments+=t;const l=SN(n);if(!a&&!l&&e>0&&D("xp_gain"),!a&&!l&&t>0&&D("moon_fragment_gain"),t>0&&(r.progress.totalMoonFragmentsEarned=Number(r.progress.totalMoonFragmentsEarned||0)+t),r.progress.level=Eo(r.progress.xp),(e||t)&&(r.progress.transactions.unshift({at:new Date().toISOString(),reason:n,xp:e,coins:t,balance:r.progress.moonFragments}),r.progress.transactions=r.progress.transactions.slice(0,80)),r.progress.level>o){if(a)return;D("level_up"),ke("level_up",{level:r.progress.level,xp:r.progress.xp,moonFragments:r.progress.moonFragments});const c=Mn();bt({type:"level",title:_("levelUp"),message:`${_("level")} ${r.progress.level} - ${c.current}/${c.next} XP - ${r.progress.moonFragments} ${_("coins")}`,xp:0,coins:0,mascot:r.progress.level%2===0?"leya":"eva",mood:"happy",dialog:"achievement",level:r.progress.level,totalXp:r.progress.xp,moonFragments:r.progress.moonFragments})}}function SN(e){return["learn","review"].includes(r.route)&&["review_success","combo_bonus"].includes(e)}function Vt(e,t,n){const s=_n();s.reviews+=1,e.state==="New"&&t.state!=="New"&&(s.learned+=1),e.state!=="Mastered"&&t.state==="Mastered"&&(s.mastered+=1),Be(n)&&(s.mistakes+=1),s.minutes=Go(s.reviews*.75+s.learned*1.25,1),r.progress.daily[ce()]=s}function ye(e={}){Rf();const t=ce(),n=r.progress.streak.lastStudyDate;if(n===t)return;const s=!!(n&&hs(n,t)>1&&r.progress.streak.current>0);r.progress.streak.current=n&&hs(n,t)===1?r.progress.streak.current+1:1,r.progress.streak.lastStudyDate=t,r.progress.streak.best=Math.max(r.progress.streak.best,r.progress.streak.current),r.progress.streakHistory.push({date:t,value:r.progress.streak.current}),r.progress.streakHistory=r.progress.streakHistory.slice(-120),xe(s?{discipline:-3.5,trust:-1.4,warmth:-.8}:{discipline:1.4,trust:.8,warmth:.4},s?"streak_lost":"study_streak"),s&&G(ze("eva","streakLoss")),[1,7,30,100].includes(r.progress.streak.current)&&(r.progress.streak.pendingReward={milestone:r.progress.streak.current,availableOn:Jh(t,1)}),ke("streak_up",{streak:r.progress.streak.current,lost:s},{skipAchievements:!!e.skipAchievements}),T()}function Mf(){if(r.route!=="stats")return;if(!window.Chart){qv().then(()=>{r.route==="stats"&&Mf()}).catch(a=>console.warn("Chart.js failed to load.",a));return}const e=BA(10),t=e.map(a=>a.slice(5)),n=fA(),s=hA(n);_a("activityChart",{type:"bar",data:{labels:t,datasets:[{label:_("learned"),data:e.map(a=>r.progress.daily[a]?.learned||0),backgroundColor:n.green},{label:_("review"),data:e.map(a=>r.progress.daily[a]?.reviews||0),backgroundColor:n.red}]},options:s}),_a("jlptChart",{type:"bar",data:{labels:Object.keys(ih()),datasets:[{label:_("mastered"),data:Object.values(ih()),backgroundColor:n.yellow}]},options:s}),_a("streakChart",{type:"line",data:{labels:t,datasets:[{label:_("streak"),data:e.map(a=>r.progress.streakHistory.find(o=>o.date===a)?.value||(r.progress.daily[a]?.reviews?1:0)),borderColor:n.blue,backgroundColor:n.blueSoft,fill:!0,tension:.35}]},options:s}),_a("stateChart",{type:"doughnut",data:{labels:Object.keys(ah()),datasets:[{data:Object.values(ah()),backgroundColor:[n.blue,n.yellow,n.green,n.pink],borderColor:n.line}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:n.text}}}}}),_a("mistakeChart",{type:"line",data:{labels:t,datasets:[{label:_("errors"),data:e.map(a=>r.progress.daily[a]?.mistakes||0),borderColor:n.danger,backgroundColor:n.dangerSoft,fill:!0,tension:.35}]},options:s})}function _a(e,t){const n=document.getElementById(e);n&&r.charts.push(new Chart(n,t))}function CN(){const e=ls();e&&(r.activeCardId=e.id,r.activeLessonId=e.lessonId,r.writingStep=de(r.writingStep,0,Math.max(0,Wt(e)-1)),Y.cardId!==String(e.id)&&xN(e)),NN(),Ea(),No(),Fa(Pa(!1)),window.setTimeout(Df,120)}function ls(){return oe(r.activeCardId)||sh()[0]||r.cards[0]||null}function xN(e){Y.cardId=String(e?.id||""),Y.strokes=[],Y.currentStroke=[],Y.drawing=!1,Y.activePointerId=null,Y.completed=!1}function NN(){const e=document.getElementById("practiceCanvas");if(!e)return;_r();const t=a=>{a.pointerType==="mouse"&&a.button!==0||(a.preventDefault(),e.setPointerCapture?.(a.pointerId),Y.drawing=!0,Y.activePointerId=a.pointerId,Y.currentStroke=[Kf(e,a)],Y.completed=!1,_r())},n=a=>{if(!Y.drawing||a.pointerId!==Y.activePointerId)return;a.preventDefault();const o=Kf(e,a),l=Y.currentStroke[Y.currentStroke.length-1];(!l||qf(l,o)>1.4)&&(Y.currentStroke.push(o),_r())},s=a=>{if(!Y.drawing||a.pointerId!==Y.activePointerId)return;a.preventDefault();const o=LN(Y.currentStroke);o.length&&Y.strokes.push(o),Y.currentStroke=[],Y.drawing=!1,Y.activePointerId=null,_r(),Fa(Pa(!1))};e.onpointerdown=t,e.onpointermove=n,e.onpointerup=s,e.onpointercancel=s,e.onpointerleave=s,e.oncontextmenu=a=>a.preventDefault()}function Kf(e,t){const n=e.getBoundingClientRect();return{x:de((t.clientX-n.left)*(e.width/n.width),0,e.width),y:de((t.clientY-n.top)*(e.height/n.height),0,e.height),pressure:t.pressure||.5,time:performance.now()}}function LN(e){if(!e.length)return[];const t=[e[0]];return e.slice(1).forEach(n=>{qf(t[t.length-1],n)>=2.6&&t.push(n)}),t.length===1?[t[0],{...t[0],x:t[0].x+.1,y:t[0].y+.1}]:t}function _r(){const e=document.getElementById("practiceCanvas");if(!e)return;const t=e.getContext("2d"),n=ls();Gf(t,e),n&&RN(t,e,n),Y.strokes.forEach((s,a)=>Jf(t,s,{color:getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),width:13,shadow:a===Y.strokes.length-1})),Y.currentStroke.length&&Jf(t,Y.currentStroke,{color:getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),width:13,shadow:!0})}function AN(){Y.strokes=[],Y.currentStroke=[],Y.drawing=!1,Y.completed=!1,_r(),Fa(Pa(!1))}function IN(){Y.strokes.pop(),Y.currentStroke=[],Y.completed=!1,_r(),Fa(Pa(!1))}function TN(e=!1){const t=Pa(!0);Fa(t),e&&(Za(t.success?"good":"again"),G(t.message),t.success&&bN())}function Pa(e){const t=document.getElementById("practiceCanvas"),n=ls(),s=Wt(n);if(!t||!n)return{score:0,success:!1,expectedCount:s,message:""};const a=Y.strokes;if(!a.length)return{score:0,success:!1,expectedCount:s,message:p()==="ru"?"Начни с первой черты.":"Start with the first stroke."};const o=de(Math.round(Math.min(a.length,s)/s*100),0,100),l=e?100:o,c=!!(e&&a.length);let d=p()==="ru"?`Черты: ${a.length}/${s}. Самопроверка без распознавания.`:`Strokes: ${a.length}/${s}. Self-check without recognition.`;return!e&&a.length<s?d=p()==="ru"?`Черта ${a.length+1}/${s}: продолжай по образцу.`:`Stroke ${a.length+1}/${s}: keep following the guide.`:!e&&a.length>s?d=p()==="ru"?`Черты: ${a.length}/${s}. Если лишняя линия случайная, нажми «Отменить черту».`:`Strokes: ${a.length}/${s}. If one was accidental, tap "Undo stroke".`:e&&(d=ad(n)?p()==="ru"?"Записано. Сравни с жёлтым порядком KanjiVG и двигайся дальше.":"Saved. Compare it with the yellow KanjiVG order and move on.":p()==="ru"?"Записано. Для этого кандзи пока есть только шаблон, без точной схемы штрихов.":"Saved. This kanji currently has a template only, without exact stroke paths."),{score:l,success:c,expectedCount:s,message:d}}function Df(){const e=document.getElementById("strokeCanvas"),t=ls();if(!e||!t)return;cancelAnimationFrame(Y.demoAnimationId);const n=Wt(t),s=460,a=performance.now(),o=l=>{const c=l-a,d=de(Math.floor(c/s),0,n-1),u=de((c-d*s)/s,0,1);r.writingStep=d,Ea(d,u),No(),c<n*s?Y.demoAnimationId=requestAnimationFrame(o):(r.writingStep=n-1,Ea(r.writingStep,1),No())};Y.demoAnimationId=requestAnimationFrame(o)}function Ff(){const e=document.getElementById("strokeCanvas"),t=ls();if(!e||!t)return;cancelAnimationFrame(Y.demoAnimationId);const n=performance.now(),s=520,a=de(r.writingStep,0,Math.max(0,Wt(t)-1)),o=l=>{const c=de((l-n)/s,0,1);Ea(a,c),c<1&&(Y.demoAnimationId=requestAnimationFrame(o))};Y.demoAnimationId=requestAnimationFrame(o)}function Of(e){Bf(r.writingStep+e,!1)}function Bf(e,t){const n=ls();n&&(r.writingStep=de(e,0,Math.max(0,Wt(n)-1)),No(),t?Ff():Ea(r.writingStep,1))}function No(){const e=ls();if(!e)return;const t=Da(e),n=p()==="ru"?"Шаг":"Step",s=document.getElementById("writingStepCounter");s&&(s.textContent=`${n} ${r.writingStep+1}/${Wt(e)}`);const a=document.querySelector(".writing-step-head .label");a&&(a.textContent=t[r.writingStep]||""),vl(".writing-guide-list li").forEach((o,l)=>o.classList.toggle("is-active",l===r.writingStep))}function Ea(e=r.writingStep,t=1){const n=document.getElementById("strokeCanvas"),s=ls();if(!n||!s)return;const a=n.getContext("2d");Gf(a,n);const o=Ma(s);if(!o){Uf(a,n,s,e);return}zf(a,n,o,{activeIndex:e,progress:t,showFuture:!0,guideAlpha:1,showNumbers:!0})}function RN(e,t,n){const s=Ma(n);if(!s){Uf(e,t,n,r.writingStep);return}zf(e,t,s,{activeIndex:r.writingStep,progress:1,showFuture:!0,guideAlpha:.24,showNumbers:!1})}function Ma(e){if(!e?.kanji)return null;const t=r.kanjiStrokes?.[e.kanji];return t?.strokeOrder?.length?t:null}function ad(e){return!!Ma(e)}function Wt(e){const t=Ma(e);return Math.max(1,t?.strokeOrder?.length||Number(e?.strokes||1))}function Ka(){const e=getComputedStyle(document.documentElement),t=n=>e.getPropertyValue(n).trim();return{paper:t("--writing-paper")||t("--surface")||"#ffffff",border:t("--writing-paper-border")||t("--line")||"#d0d5dd",grid:t("--writing-grid")||t("--line")||"#d0d5dd",gridStrong:t("--writing-grid-strong")||t("--line-strong")||"#98a2b3",ink:t("--writing-ink")||t("--text")||"#111014",guide:t("--writing-guide")||t("--muted")||"#5f6670",templateOpacity:Number(t("--writing-template-opacity")||"0.16")||.16}}function zf(e,t,n,s={}){const a=de(Number(s.activeIndex||0),0,Math.max(0,n.strokeOrder.length-1)),o=_N(n,t,s.padding||22),l=Ka(),c=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim(),d=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim(),u=l.guide;n.strokeOrder.forEach((m,h)=>{const f=h<a,S=h===a;h>a&&!s.showFuture||(e.save(),e.translate(o.x,o.y),e.scale(o.scale,o.scale),e.lineCap="round",e.lineJoin="round",e.strokeStyle=S?d:f?c:u,e.lineWidth=(S?8:5.5)/o.scale,e.globalAlpha=Number(s.guideAlpha??1)*(S?1:f?.86:.24),S&&s.progress<1&&(e.globalAlpha*=.45+de(s.progress,0,1)*.55),S&&(e.shadowColor="rgba(248, 216, 74, 0.34)",e.shadowBlur=13/o.scale),e.stroke(new Path2D(m.path)),e.restore(),s.showNumbers&&EN(e,m,o,h+1,S))})}function _N(e,t,n=22){const s=PN(e.viewBox),a=Math.min((t.width-n*2)/s.width,(t.height-n*2)/s.height),o=(t.width-s.width*a)/2-s.x*a,l=(t.height-s.height*a)/2-s.y*a;return{...s,scale:a,x:o,y:l}}function PN(e){const t=String(e||"0 0 109 109").trim().split(/\s+/).map(Number),[n=0,s=0,a=109,o=109]=t;return{x:n,y:s,width:Math.max(1,a),height:Math.max(1,o)}}function EN(e,t,n,s,a){const o=MN(t.path);if(!o)return;const l=n.x+o.x*n.scale,c=n.y+o.y*n.scale;KN(e,l,c,s,a)}function MN(e){const t=String(e||"").match(/M\s*(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/i);return t?{x:Number(t[1]),y:Number(t[2])}:null}function KN(e,t,n,s,a){e.save(),e.fillStyle=a?getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim():getComputedStyle(document.documentElement).getPropertyValue("--surface-2").trim(),e.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue("--line-strong").trim(),e.lineWidth=1,e.beginPath(),e.arc(t,n,a?13:10,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle=a?"#111014":getComputedStyle(document.documentElement).getPropertyValue("--text").trim(),e.font="800 12px system-ui",e.textAlign="center",e.textBaseline="middle",e.fillText(String(s),t,n+.5),e.restore()}function Uf(e,t,n,s=0){const a=Ka(),o=getComputedStyle(document.documentElement).getPropertyValue("--accent-2").trim();e.save(),e.globalAlpha=a.templateOpacity,e.fillStyle=a.ink,e.font=`900 ${Math.floor(t.height*.7)}px "Noto Sans JP", "Yu Gothic", serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(n?.kanji||"文",t.width/2,t.height/2+t.height*.04),e.globalAlpha=1,e.fillStyle=o,e.font="800 15px system-ui",e.textAlign="left",e.textBaseline="top";const l=p()==="ru"?`Шаг ${s+1}/${Wt(n)} · точной схемы пока нет`:`Step ${s+1}/${Wt(n)} · exact paths not available yet`;e.fillText(l,18,16),e.restore()}function Jf(e,t,n={}){const s=t.map(ON).filter(Boolean);if(!e||!s.length)return;const a=Ka();if(e.save(),e.strokeStyle=n.color||a.ink,e.lineWidth=n.width||12,e.lineCap="round",e.lineJoin="round",e.imageSmoothingEnabled=!0,n.shadow&&(e.shadowColor="rgba(255, 48, 92, 0.36)",e.shadowBlur=12),e.beginPath(),e.moveTo(s[0].x,s[0].y),s.length===1){e.arc(s[0].x,s[0].y,e.lineWidth/2,0,Math.PI*2),e.fillStyle=e.strokeStyle,e.fill(),e.restore();return}if(s.length===2)e.lineTo(s[1].x,s[1].y);else{for(let l=1;l<s.length-1;l+=1){const c=BN(s[l],s[l+1]);e.quadraticCurveTo(s[l].x,s[l].y,c.x,c.y)}const o=s[s.length-1];e.lineTo(o.x,o.y)}e.stroke(),e.restore()}function Gf(e,t){if(!e||!t)return;const n=Ka();e.clearRect(0,0,t.width,t.height),e.fillStyle=n.paper,e.fillRect(0,0,t.width,t.height),DN(e,t)}function DN(e,t){const n=Ka();e.save(),e.strokeStyle=n.grid,e.lineWidth=1,e.setLineDash([8,8]),e.beginPath(),e.moveTo(t.width/2,0),e.lineTo(t.width/2,t.height),e.moveTo(0,t.height/2),e.lineTo(t.width,t.height/2),e.moveTo(0,0),e.lineTo(t.width,t.height),e.moveTo(t.width,0),e.lineTo(0,t.height),e.stroke(),e.setLineDash([]),e.strokeStyle=n.gridStrong,e.strokeRect(.5,.5,t.width-1,t.height-1),e.restore()}function Da(e){const t=Ma(e);if(t?.strokeOrder?.length)return t.strokeOrder.map((s,a)=>p()==="ru"?s.description_ru||`Штрих ${a+1} по данным KanjiVG`:s.description_en||`Stroke ${a+1} from KanjiVG data`);const n=Array.isArray(e?.stroke_order)?e.stroke_order:[];return Array.from({length:Wt(e)},(s,a)=>n[a]||FN(e,a))}function FN(e,t){return p()!=="ru"?`Step ${t+1}: exact stroke paths are not available yet. Use the translucent ${e?.kanji||"kanji"} template.`:`Шаг ${t+1}: для этого кандзи пока нет точной схемы штрихов. Обводи полупрозрачный шаблон ${e?.kanji||""}.`}function Fa(e){const t=document.getElementById("writingStrokeCounter");t&&(t.textContent=`${Y.strokes.length}/${e.expectedCount}`);const n=document.getElementById("writingScore");n&&(n.querySelector("span").textContent=`${e.score}%`,n.querySelector("i").style.width=`${e.score}%`);const s=document.getElementById("writingFeedback");s&&(s.textContent=e.message,s.classList.toggle("is-good",e.success),s.classList.toggle("is-warning",!e.success&&e.score>0))}function ON(e){return e?Array.isArray(e)?{x:e[0],y:e[1]}:{x:e.x,y:e.y}:null}function BN(e,t){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function qf(e,t){return Math.hypot((e?.x||0)-(t?.x||0),(e?.y||0)-(t?.y||0))}function zN(){r.charts.forEach(e=>e.destroy()),r.charts=[]}function UN(e,t){const n=new Date;return r.cards.filter(s=>!e||s.lessonId===e).filter(s=>{const a=r.lessons.find(l=>l.id===s.lessonId);if(a&&!Ge(a))return!1;const o=J(s.id);return o.state==="New"?!0:o.dueAt&&new Date(o.dueAt)<=n}).sort(ud)}function JN(){const e=new Date;return dd().filter(t=>{const n=r.progress.cards[String(t.id)];return!n||n.state==="New"?!1:n.dueAt&&new Date(n.dueAt)<=e}).sort(ud)}function GN(){const e=Date.now(),t=[];return be.forEach(n=>{const s=sd(n);Object.entries(s?.exerciseSrs||{}).forEach(([a,o])=>{const l=qs(o,{level:n,exerciseId:a,lessonId:o?.lessonId||"",cardId:o?.cardId||"",kanji:o?.kanji||"",type:o?.type||"",title:o?.title||null,prompt:o?.prompt||"",answer:o?.answer||"",answerLabel:o?.answerLabel||""});if(!cd(l,e)||!If(l))return;const c=Co(n,a,l.lessonId||"");if(!c)return;const d=String(c?.lessonId||l.lessonId||"");if(!kL(n,d))return;const u=new Date(l.dueAt).getTime();!u||u>e||t.push({kind:"exercise",source:"textbook",key:`exercise:${String(n).toUpperCase()}:${a}`,level:String(n||"").toUpperCase(),exerciseId:a,lessonId:d,cardId:String(l.cardId||""),dueAt:u,progress:l})})}),t.sort(Ba)}function id(){const e=[r.cards,r.n5Reading,r.n4Reading,r.n3Reading,r.n2Reading,r.n1Reading,r.jlptReadingByLevel,r.jlptReadingTranslations,r.kanjiTranslations,p()];if(ki&&e.every((s,a)=>s===ki.sources[a]))return ki.items;const t=[];r.n5Reading.forEach(s=>{s?.id&&t.push(s)}),[["N4",r.n4Reading],["N3",r.n3Reading],["N2",r.n2Reading],["N1",r.n1Reading]].forEach(([s,a])=>{(Array.isArray(a)?a:[]).forEach(o=>{(o.questions||[]).forEach((l,c)=>{const d={id:String(l.id||`${o.id}:${c}`),prompt:l.prompt||{ru:"",en:""},answer:String(l.answer||""),options:xw(l.options)};t.push({id:String(l.id||`${o.id}:${c}`),level:String(o.level||s||"").toUpperCase(),kind:"question",sourceKind:String(o.kind||"reading"),sourceId:String(o.id||""),sourceTitle:o.title||{ru:o.id||"",en:o.id||""},title:o.title||{ru:o.id||"",en:o.id||""},jp:String(o.jp||""),reading:String(o.reading||""),translationRu:String(o.ru||""),translationEn:String(o.en||""),passageSource:String(o.source||""),questionIndex:c,question:d,questions:[d]})})})});const n=[...t,...Y$()];return ki={sources:e,items:n},n}function Hf(e,t=""){const n=String(e||""),s=String(t||"").toUpperCase(),a=id();return a.find(o=>String(o.id||"")===n&&(!s||String(o.level||"").toUpperCase()===s))||a.find(o=>String(o.id||"")===n)||null}function Vf(e){const t=Array.isArray(e?.questions)?e.questions[0]||null:e?.question||null;return{level:String(e?.level||"").toUpperCase(),lessonId:String(e?.sourceId||""),exerciseId:String(e?.id||""),type:String(e?.kind||""),title:e?.sourceTitle||e?.title||null,prompt:String(e?.kind==="question"?b(t?.prompt||{}):e?.sentence||e?.jp||""),answer:String(e?.kind==="question"?t?.answer||"":Ht(e).map(n=>n.kanji).join("")),answerLabel:String(e?.kind==="question"?t?.answer||"":Ht(e).map(n=>n.kanji).join(""))}}function od(e){return 1}function cs(e){const t=Vf(e);return{...Rr(t.level,t.lessonId,t.exerciseId,t),sourceId:String(e?.sourceId||""),sourceKind:String(e?.sourceKind||""),sourceTitle:e?.sourceTitle||null,exerciseKind:String(e?.kind||""),questionCount:od(),answers:{},selectedIndices:[],selectedTiles:[],selectedText:"",wrongIndexes:[],wrongQuestions:[],completed:!1,completedAt:null}}function Oa(e,t){const n=cs(t),s=qs({...n,...e||{}},Vf(t));return s.sourceId=String(t?.sourceId||s.sourceId||""),s.sourceKind=String(t?.sourceKind||s.sourceKind||""),s.sourceTitle=t?.sourceTitle||s.sourceTitle||null,s.exerciseKind=String(t?.kind||s.exerciseKind||""),s.questionCount=od(),s.answers=s.answers&&typeof s.answers=="object"&&!Array.isArray(s.answers)?{...s.answers}:{},s.selectedIndices=Array.isArray(s.selectedIndices)?s.selectedIndices.map(a=>Number(a)).filter(a=>Number.isInteger(a)&&a>=0):[],s.selectedTiles=Array.isArray(s.selectedTiles)?s.selectedTiles.map(a=>({kanji:String(a?.kanji||""),reading:String(a?.reading||"")})).filter(a=>a.kanji):[],s.selectedText=String(s.selectedText||""),s.wrongIndexes=Array.isArray(s.wrongIndexes)?s.wrongIndexes.map(a=>Number(a)).filter(a=>Number.isInteger(a)&&a>=0):[],s.wrongQuestions=Array.isArray(s.wrongQuestions)?s.wrongQuestions.map(a=>String(a)).filter(Boolean):[],s.completed=!!s.completed,s.completedAt=s.completedAt||null,s}function ds(e){var s;if(!e?.id)return null;(s=r.progress).readingExercises||(s.readingExercises={});const t=r.progress.readingExercises[String(e.id)]||null;if(t){const a=Oa(t,e);return r.progress.readingExercises[String(e.id)]=a,a}const n=cs(e);return r.progress.readingExercises[String(e.id)]=n,n}function Hs(e,t){var s;if(!e?.id)return null;(s=r.progress).readingExercises||(s.readingExercises={});const n=Oa(t||{},e);return r.progress.readingExercises[String(e.id)]=n,n}function Wf(e){return!e||typeof e!="object"?!1:!!(Number(e.reviewCount||0)>0||e.lastReviewedAt||e.completedAt||e.completed||e.answers&&typeof e.answers=="object"&&Object.keys(e.answers).length||Array.isArray(e.selectedIndices)&&e.selectedIndices.length||Array.isArray(e.selectedTiles)&&e.selectedTiles.length||String(e.selectedText||"").trim())}function Pr(e=""){var a;if(!r.progress)return!1;const t=F(e);if((a=r.progress).readingExercises||(a.readingExercises={}),!Object.keys(r.progress.readingExercises).length)return!1;const n=new Map(id().filter(o=>!t||F(o.level)===t).map(o=>[String(o.id),o]));let s=!1;return Object.entries(r.progress.readingExercises).forEach(([o,l])=>{const c=n.get(String(o));if(!c)return;const d=Oa(l,c),u=Wf(d)?d:cs(c);JSON.stringify(l)!==JSON.stringify(u)&&(r.progress.readingExercises[String(o)]=u,s=!0)}),s}function qN(){const e=Date.now();return Object.values(r.progress.readingExercises||{}).some(t=>cd(t,e))?id().map(t=>{if(!yL(t.level))return null;const n=r.progress.readingExercises?.[String(t.id)]||null;if(!n)return null;const s=Oa(n,t);if(r.progress.readingExercises[String(t.id)]=s,!Wf(s)||!cd(s,e))return null;const a=s.dueAt?new Date(s.dueAt).getTime():0;return!a||a>e?null:{kind:"exercise",source:"reading",key:`reading:${String(t.level||"").toUpperCase()}:${t.id}`,level:String(t.level||"").toUpperCase(),exerciseId:String(t.id||""),lessonId:String(t.sourceId||""),cardId:"",dueAt:a,progress:s,exercise:t,card:null}}).filter(Boolean).sort(Ba):[]}function HN(){const e=Date.now();return["hiragana","katakana"].flatMap(t=>{if(!we(t))return[];const n=zt(t),s=Object.entries(n).map(([a,o])=>({cardId:a,...ot(o)}));return Qd(s,e).map(a=>{const o=fr(a.cardId,t);if(!o?.id||o.slug!==t)return null;const l=ga(t,o.kana);return Vc({kind:"kana",key:o.id,courseSlug:t,cardId:o.id,kana:o.kana,romaji:l?.romaji||"",strokes:l?.strokes||0,character:l,progress:a,dueAt:a.dueAt?Date.parse(a.dueAt):0})}).filter(Boolean)}).sort(Ba)}function VN(){const t=[...JN().map(s=>{if(!s?.id)return null;const a=J(s.id);return{kind:"card",key:`card:${s.id}`,card:s,cardId:String(s.id),dueAt:a.dueAt?new Date(a.dueAt).getTime():0,progress:a}}).filter(Boolean),...HN()].sort(Ba),n=[...GN(),...qN()].sort(Ba);return Xc(jb(t,n,Wl))}function ld(){if(!Me||Me.progress!==r.progress||r.route!=="review"&&Date.now()>=Me.expiresAt){const e=VN();Me={progress:r.progress,items:new Map(e.map(t=>[t.key,t])),expiresAt:Date.now()+3e4}}return[...Me.items.values()]}function Xf(e=ld()){const t=Yh(e.map(n=>({cardId:n.key,state:n.progress.state,dueAt:new Date(n.dueAt).toISOString(),kind:n.kind,item:n})));r.reviewSession={session:t,initialSize:t.initial.length,startedAt:new Date().toISOString(),learningLater:eh(),totalCards:nh(),results:{remember:0,forgot:0,items:[]}}}function Qf(e){if(r.route!=="review"||!r.reviewSession)return!1;const t=String(e||"").trim();if(!t)return!1;const n=r.reviewSession.session,s=n.remainingCount;return n.complete(t),Me?.items.delete(t),Wr=null,n.remainingCount<s}function Yf(){return r.route!=="review"?!1:r.reviewSession?r.reviewSession.session.remainingCount>0:!!(r.activeCardId||r.activeExerciseReviewId)}function WN(){return r.route!=="review"?ld():(r.reviewSession||Xf(),r.reviewSession.session.remaining.map(e=>e.item))}function Zf(e,t,n={}){if(r.route!=="review"||!r.reviewSession)return;const s=Be(t)?"forgot":"remember",a=r.reviewSession.results||{remember:0,forgot:0,items:[]};a.remember=Number(a.remember||0),a.forgot=Number(a.forgot||0),a[s]+=1,a.items=Array.isArray(a.items)?a.items:[],a.items.push({kind:e,rating:s,label:String(n.label||n.kana||n.kanji||n.cardId||""),course:String(n.course||n.level||""),dueAt:n.dueAt||null,state:n.state||null}),r.reviewSession.results=a}function eh(){if(r.route==="review"&&r.reviewSession)return r.reviewSession.learningLater+r.reviewSession.results.items.filter(a=>a.state==="Learning").length;if(sn&&vi!==null)return vi;const e=Date.now(),t=dd().filter(a=>{const o=J(a.id),l=o.dueAt?new Date(o.dueAt).getTime():0;return o.state==="Learning"&&l>e}).length,n=th().filter(a=>{const o=a.dueAt?new Date(a.dueAt).getTime():0;return a.state==="Learning"&&o>e}).length,s=t+n;return sn&&(vi=s),s}function th(){return["hiragana","katakana"].flatMap(e=>we(e)?Object.entries(zt(e)).filter(([t])=>{const n=fr(t,e);return n?.slug===e&&ga(e,n.kana)}).map(([,t])=>t):[])}function nh(){if(r.route==="review"&&r.reviewSession)return r.reviewSession.totalCards;if(sn&&wi!==null)return wi;const e=dd().filter(t=>J(t.id).state!=="New").length+th().filter(t=>t.state!=="New").length;return sn&&(wi=e),e}function Xe(){if(sn&&Wr!==null)return Wr;(!Me||Me.progress!==r.progress||r.route!=="review"&&Date.now()>=Me.expiresAt)&&ld();const e=Me.items.size;return sn&&(Wr=e),e}function cd(e,t=Date.now()){if(!e||typeof e!="object"||e.state==="New")return!1;const n=e.dueAt?new Date(e.dueAt).getTime():0;return!!(n&&n<=t)}function Ba(e,t){if(e.dueAt!==t.dueAt)return e.dueAt-t.dueAt;const n=e.kind==="card"&&e.card?.id?J(e.card.id):e.progress,s=t.kind==="card"&&t.card?.id?J(t.card.id):t.progress,a=Wi(n),o=Wi(s);if(a!==o)return o-a;if(e.kind!==t.kind){const l=e.kind==="card"||e.kind==="kana",c=t.kind==="card"||t.kind==="kana";return l!==c?l?-1:1:String(e.kind||"").localeCompare(String(t.kind||""))}return e.kind==="card"&&t.kind==="card"?Number(e.card?.id||0)-Number(t.card?.id||0):String(e.key||"").localeCompare(String(t.key||""))}function dd(){if(sn&&bi)return bi;const e=new Set,t=[];be.forEach(s=>{Sh(s).forEach(a=>{const o=String(a?.id||"");!o||e.has(o)||(e.add(o),t.push(a))})});const n=t;return sn&&(bi=n),n}function sh(){const e=Uh();return r.cards.filter(t=>{const n=r.lessons.find(a=>a.id===t.lessonId);if(n&&!Ge(n))return!1;const s=J(t.id);return s.state==="New"||s.dueAt&&new Date(s.dueAt)<=e}).sort(ud)}function ud(e,t){const n=J(e.id),s=J(t.id),a=n.dueAt?new Date(n.dueAt).getTime():0,o=s.dueAt?new Date(s.dueAt).getTime():0;if(a!==o)return a-o;if(a>0){const l=Wi(n),c=Wi(s);if(l!==c)return c-l}return Number(e.id)-Number(t.id)}function XN(){const e=r.filters.query.trim().toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return r.cards.filter(t=>{const n=za(t.id),s=[t.kanji,K(t),t.meaning_ru,t.hiragana,t.romaji,t.onyomi,t.onyomi_romaji,t.kunyomi,t.kunyomi_romaji,fd(t),t.jlpt,Td(t.lessonId),Qa(t),n.radical,b(n.radicalMeaning||{}),...t.apps,...t.examples.flatMap(a=>[a.word,a.reading,a.romaji,a.translation,ms(a)])].join(" ").toLocaleLowerCase(p()==="ru"?"ru-RU":"en-US");return(!e||s.includes(e))&&(r.filters.jlpt==="all"||t.jlpt===r.filters.jlpt)&&(r.filters.radical==="all"||n.radical===r.filters.radical)&&(r.filters.favorites==="all"||!!r.progress.favorites[t.id])&&QN(t.strokes,r.filters.strokes)})}function QN(e,t){if(t==="all")return!0;if(t==="13+")return e>=13;const[n,s]=t.split("-").map(Number);return e>=n&&e<=s}function pd(){const e=r.cards.length;let t=0,n=0,s=0;const a=Uh(),o=new Map(r.lessons.map(l=>[l.id,l]));for(const l of r.cards){const c=J(l.id);c.state!=="New"&&t++,c.state==="Mastered"&&n++;const d=o.get(l.lessonId);d&&!Ge(d)||(c.state==="New"||c.dueAt&&new Date(c.dueAt)<=a)&&s++}return{total:e,learned:t,mastered:n,todayCards:s,completion:E(n,e)}}function gd(){return q1(r.progress.cards,hu)}function YN(){return(r.progress.transactions||[]).reduce((e,t)=>e+Math.max(0,Number(t.coins||0)),0)}function rh(){const e=r.progress.totalCorrect+r.progress.totalWrong;return e?Math.round(r.progress.totalCorrect/e*100):0}function ah(){const e={New:0,Learning:0,Review:0,Mastered:0};return r.cards.forEach(t=>{e[J(t.id).state]+=1}),e}function ih(){const e={};return r.cards.forEach(t=>{var n;e[n=t.jlpt]||(e[n]=0),J(t.id).state==="Mastered"&&(e[t.jlpt]+=1)}),e}function _n(){const e=ce();return r.progress.daily[e]||(r.progress.daily[e]={learned:0,reviews:0,mastered:0,mistakes:0,minutes:0,goalClaimed:!1}),r.progress.daily[e]}function md(e){return r.cards.filter(t=>t.lessonId===e)}function ZN(){return r.cards.filter(e=>{const t=r.lessons.find(n=>n.id===e.lessonId);return(!t||Ge(t))&&J(e.id).state==="New"})}function oe(e){const t=String(e||"");if(!t)return null;if(!Et||Et.source!==r.cards||Et.size!==r.cards.length){const n=new Map;for(const s of r.cards)for(const a of[String(s.id),String(s.kanji||"")])n.has(a)||n.set(a,s);Et={source:r.cards,size:r.cards.length,index:n,slugs:null}}if(Et.index.has(t))return Et.index.get(t);if(!/^u[0-9a-f]+-/i.test(t))return null;if(!Et.slugs){Et.slugs=new Map;for(const n of r.cards){const s=kf(n);Et.slugs.has(s)||Et.slugs.set(s,n)}}return Et.slugs.get(t)||null}function eL(e){return oe(e)}function tL(e){const t=String(e||"").trim();return t?/^\d+$/.test(t)||/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(t)?!0:/^u[0-9a-f]{4,6}(?:-u[0-9a-f]{4,6})*-[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(t):!1}function za(e){return r.kanjiMeta[String(e)]||{}}function Lo(e){const t=r.kanjiHints[String(e)]||{};return{hint:b(t.hint||{})||ze("leya","hint"),mnemonic:b(t.mnemonic||{})||""}}function nL(e){e&&(r.progress.favorites[e]?delete r.progress.favorites[e]:r.progress.favorites[e]=new Date().toISOString(),T(),P())}function kt(e=null){r.readingCheck={cardId:e?String(e):null,value:"",status:null,message:""}}function sL(e){const t=String(e||"");r.readingCheck.cardId!==t&&kt(t)}function oh(){const e=oe(r.readingCheck.cardId||r.activeCardId);if(!e)return;sa(e,"reading_check"),To();const t=aL(r.readingCheck.value),n=rL(e),s=t.some(c=>n.normalized.has(c)),a=t.length>0,o=a&&s?"correct":"wrong",l=a?s?p()==="ru"?"Верно. Это чтение есть у карточки.":"Correct. This reading belongs to the card.":p()==="ru"?"Почти. Попробуй другое онъёми или кунъёми.":"Almost. Try another on'yomi or kun'yomi.":p()==="ru"?"Сначала напиши чтение хираганой или катаканой.":"Type a reading in hiragana or katakana first.";r.readingCheck={cardId:e.id,value:r.readingCheck.value,status:o,message:l},D(o==="correct"?"answer_correct":"answer_wrong"),We(),requestAnimationFrame(()=>{const c=document.getElementById(`readingCheck-${e.id}`);c&&(c.focus(),"setSelectionRange"in c&&c.setSelectionRange(c.value.length,c.value.length))})}function rL(e){const t=Ua(e),n=[...us(t.onyomi.kana),...us(t.kunyomi.kana),...us(e.hiragana)].filter(Boolean),s=n.filter((a,o)=>n.indexOf(a)===o);return{normalized:new Set(s.map(lh).filter(Boolean))}}function aL(e){return String(e||"").split(/[\/,、，\s]+/u).map(lh).filter(Boolean)}function lh(e){const t=ch(String(e||"").normalize("NFKC")).replace(/[・･.\-]/gu,"").replace(/\s+/gu,"");return iL(t).trim()}function ch(e){return[...String(e||"")].map(t=>{const n=t.charCodeAt(0);return n>=12449&&n<=12534?String.fromCharCode(n-96):t}).join("")}function iL(e){let t="";for(const n of String(e||"")){if(n==="ー"){t+=oL(t.slice(-1));continue}t+=n}return t}function oL(e){return"あかさたなはまやらわがざだばぱゃぁ".includes(e)?"あ":"いきしちにひみりぎじぢびぴぃ".includes(e)?"い":"うくすつぬふむゆるぐずづぶぷゅぅ".includes(e)?"う":"えけせてねへめれげぜでべぺぇ".includes(e)?"え":"おこそとのほもよろをごぞどぼぽょぉ".includes(e)?"お":""}function dh(e){if(!e)return null;const t=String(e.jlpt||"").toUpperCase();let n=null;return t==="N5"?n=r.n5KanjiCatalog:t==="N4"?n=r.n4KanjiCatalog:t==="N3"?n=r.n3KanjiCatalog:t==="N2"&&(n=r.n2KanjiCatalog),!n||!Array.isArray(n)?null:n.find(s=>s&&s.kanji===e.kanji)||null}const uh={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",ゐ:"i",ゑ:"e",を:"o",ん:"n",ゔ:"vu"},ph={きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ふぁ:"fa",ふぃ:"fi",ふぇ:"fe",ふぉ:"fo",しぇ:"she",じぇ:"je",ちぇ:"che",てぃ:"ti",でぃ:"di",とぅ:"tu",どぅ:"du",つぁ:"tsa",つぃ:"tsi",つぇ:"tse",つぉ:"tso",うぃ:"wi",うぇ:"we",うぉ:"wo",ゔぁ:"va",ゔぃ:"vi",ゔぇ:"ve",ゔぉ:"vo"};function Ua(e){const t=dh(e);if(t&&t.readings){const a=t.readings,o=Ao(a.onyomi,a.onyomi_romaji||e?.onyomi_romaji,e?.onyomi),l=Ao(a.kunyomi,a.kunyomi_romaji||e?.kunyomi_romaji,e?.kunyomi);if(o.kana||l.kana)return{onyomi:o,kunyomi:l}}const n=Ao(e?.onyomi,e?.onyomi_romaji),s=Ao(e?.kunyomi,e?.kunyomi_romaji);return n.kana||s.kana||n.romaji||s.romaji?{onyomi:n,kunyomi:s}:{onyomi:{kana:"",romaji:""},kunyomi:{kana:"",romaji:""}}}function us(e){return(Array.isArray(e)?e.join(" / "):String(e||"")).split(/[\/／,，、・･;；]+/u).map(n=>n.trim()).filter(Boolean)}function Ao(e,t="",n=""){const s=us(e).length?us(e):us(n),a=us(t),o=s.map((l,c)=>({kana:ee(l),romaji:lL(l,a[c])})).filter(l=>l.kana||l.romaji);return{kana:o.map(l=>l.kana).filter(Boolean).join(" / "),romaji:o.map(l=>l.romaji).filter(Boolean).join(" / ")}}function lL(e,t){const n=gh(e);return n?t&&mh(t)===mh(n)?t:n:t||""}function gh(e){const t=[...cL(e)];let n="",s=!1;for(let a=0;a<t.length;a+=1){const o=t[a],l=t[a+1]||"";if(o==="っ"){s=!0;continue}if(o==="ー"){const u=dL(n);u&&(n+=u);continue}let c="";const d=o+l;if(ph[d])c=ph[d],a+=1;else if(uh[o])c=uh[o];else if(/[a-zA-Z0-9]/u.test(o))c=o.toLowerCase();else{s=!1;continue}if(s){const u=c.match(/^[bcdfghjklmnpqrstvwxyz]/u)?.[0]||"";u&&u!=="n"&&(n+=u),s=!1}n+=c}return n}function cL(e){return ch(String(e||"").normalize("NFKC")).replace(/[()\[\]{}]/gu,"").replace(/[.\-‐-―\s]/gu,"").trim()}function dL(e){return String(e||"").match(/[aeiou](?!.*[aeiou])/u)?.[0]||""}function mh(e){return String(e||"").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/gu,"").replace(/[^a-z0-9]+/gu,"")}function fh(e){return e==="onyomi"?p()==="ru"?"Онъёми":"On'yomi":p()==="ru"?"Кунъёми":"Kun'yomi"}function Io(e){return e==="onyomi"?p()==="ru"?"Он":"On":p()==="ru"?"Кун":"Kun"}function fd(e){const t=Ua(e);return[`${Io("onyomi")}: ${t.onyomi.kana||"—"} (${t.onyomi.romaji||"—"})`,`${Io("kunyomi")}: ${t.kunyomi.kana||"—"} (${t.kunyomi.romaji||"—"})`].join(" · ")}function hd(e){if(!e)return"";const t=e.audioSrc||e.audio||"";return vh(t)||hh(e)}function hh(e){if(!e?.id||!e?.jlpt||!e?.lessonId)return"";const t=uL(e.romaji);return t?`./audio/kanji/${String(e.jlpt).toLowerCase()}/${e.lessonId}/${e.id}-${t}.mp3`:""}function vh(e){return e?e.startsWith("./")||e.startsWith("http")?e:e.startsWith("/")?`.${e}`:`./${e}`:""}function uL(e){return String(e||"").split("/")[0].trim().toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function pL(e){return!!(hd(e)||vd(e))}function vd(e){if(!e)return"";const t=Ua(e);return t.onyomi.kana||t.kunyomi.kana||e.hiragana||e.kanji||""}function gL(e){const t=Ua(e);return{kanji:e?.kanji||"",onyomi:t.onyomi.kana,kunyomi:t.kunyomi.kana,hiragana:e?.hiragana||""}}function Er(e,t=""){const n=iI(gL(e));return!t||t==="cycle"?n:n.filter(s=>s.kind===t)}function mL(e){return Er(e).length>0}function fL(e){return us(e)[0]||String(e||"").trim()}function wd(){if(r.route!=="learn"&&r.route!=="review")return;const e=560-(Date.now()-Hr);if(e>0){window.setTimeout(wd,e);return}const t=oe(r.activeCardId);if(!t)return;const n=Er(t).map(o=>`${o.kind}:${o.kana}`).join("|")||vd(t),s=vh(t?.audioSrc||t?.audio||"");if(!n&&!s)return;const a=`${r.route}:${t.id}:${n||s}`;a!==du&&(du=a,wh(t,{silent:!0}))}function To(){gi+=1,Pt="idle",Ro(),kd()}function bd(){return gi+=1,gi}function rt(e){return e===gi}function kd(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}function Ro(){nn&&(nn.pause(),nn.currentTime=0,nn=null)}function wh(e,t={}){const n=bd();let s=null;const a=()=>rt(n)?(s||(s=bh(e,{...t,requestId:n})),s):Promise.resolve(!1);return kh(e,{kind:"cycle",silent:t.silent,fallback:a,requestId:n})?Promise.resolve(!0):a()}function bh(e,t={}){const n=t.requestId||bd();if(!rt(n))return Promise.resolve(!1);const s=hd(e);if(!s||(kd(),Ro(),!rt(n)))return Promise.resolve(!1);Pt="audio";const a=new Audio(s);return nn=a,a.preload="auto",a.onended=()=>{nn===a&&(nn=null,rt(n)&&(Pt="idle"))},a.onerror=()=>{rt(n)&&(t.silent||console.warn("Kanji audio file could not be loaded.",{id:e?.id,audio:s}))},a.play().then(()=>rt(n)&&nn===a).catch(o=>(rt(n)&&(nn===a&&(nn=null,Pt="idle"),t.silent||console.warn("Kanji audio playback was blocked or failed.",{id:e?.id,audio:s,error:o})),!1))}function kh(e,t={}){const n=t.requestId||bd();Ro(),Pt="tts-pending";let s=null;const a=typeof t.fallback=="function"?()=>rt(n)?(s||(s=t.fallback({...t,requestId:n})),s):Promise.resolve(!1):null,o=ee(t.text||""),l=t.kind||"cycle",c=`${e?.id||e?.kanji||"kanji"}:${l}`,d=Er(e);let u=null;if(!o){const C=oI(d,uu.get(c)??-1,l);u=C.item,uu.set(c,C.cursor)}const m=o||u?.kana||fL(vd(e));let h=!1;if(!tv(m,{onStart:()=>{if(!rt(n)||Pt==="audio"){kd();return}h=!0,Pt="tts",Ro()},onEnd:()=>{rt(n)&&Pt==="tts"&&(Pt="idle")},onError:C=>{!rt(n)||h||Pt==="audio"||(t.silent||console.warn("System kanji TTS failed; trying prepared audio fallback.",{id:e?.id,error:C}),a?.())}}))return rt(n)&&a?.(),!a&&rt(n)&&(Pt="idle"),!a&&!t.silent&&console.warn("Kanji audio is not available for this card.",{id:e?.id,expected:hh(e)}),!1;if(!rt(n))return!1;const S=t.label||(u?ed(u):"TTS");return t.silent||G(`${e?.kanji||""} ${S}: ${m}`.trim()),!0}function hL(e,t){G(e?`${t}: ${e}`:`${t}: ${p()==="ru"?"аудио пока не добавлено":"audio not added yet"}`)}function Ge(e){return!!e}function _o(e){return r.rewards?.lessonUnlocks?.[e?.id]||1}function yh(e){if(!e||!Ge(e))return"locked";const t=md(e.id);return t.length?!!r.progress.lessonCompletions?.[e.id]||t.every(a=>{const o=J(a.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"completed":t.some(a=>{const o=J(a.id);return o.state!=="New"||o.reviewCount>0||o.lastReviewedAt})?"started":"new":"new"}function yd(e){return e==="completed"?"is-completed":e==="started"?"is-started":""}function $d(e){const t=p()==="ru";return e==="completed"?t?"Урок пройден":"Lesson completed":e==="started"?t?"Урок начат":"Lesson started":t?"Не начат":"Not started"}function vL(e){return e!=="completed"&&e!=="started"?"":`<span class="lesson-status-dot" aria-label="${g($d(e))}"></span>`}function wL(e){return e!=="completed"&&e!=="started"?"":`<span class="pill lesson-status-pill ${yd(e)}">${i($d(e))}</span>`}function Pn(e){const t=String(e||"").toUpperCase();return r.jlptLessons.find(n=>n.jlpt===t)||null}function It(e){const t=String(e||"").toUpperCase();return r.jlptCatalog?.items?.find(n=>n.jlpt===t)||null}function Ja(e){const t=String(e||"").toLowerCase();return r.kanaCatalog?.courses?.find(n=>n.slug===t)||null}function vn(e){const t=String(e||"").toLowerCase();return r.kanaCourses?.[t]||null}function ps(){var e;return(e=r.progress).kanaCourses||(e.kanaCourses=qd(null)),r.progress.kanaCourses}function yt(e){return uI(ps(),e)}function Po(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim();if(!we(n)||!s)return;const a=yt(n),o=new Date().toISOString();let l=!1;a.currentRoute!==s&&(a.currentRoute=s,l=!0),a.updatedAt||(a.updatedAt=o,l=!0),l&&T()}function $h(e){const t=String(e||"").toLowerCase(),n=Ja(t);if(!n||!we(t))return Promise.resolve(null);if(r.kanaCourses[t])return Promise.resolve(r.kanaCourses[t]);if(r.kanaCourseLoading[t])return r.kanaCourseLoading[t];r.kanaCourseErrors[t]=null;const s=Ue(n.course_file).then(a=>(r.kanaCourses[t]=a,r.kanaCourseLoading[t]=null,Me=null,zg()&&T(),a)).catch(a=>{throw r.kanaCourseLoading[t]=null,r.kanaCourseErrors[t]=a,a});return r.kanaCourseLoading[t]=s,s}function Xt(e){const t=String(e||"").toUpperCase();return t==="N5"?re():t==="N4"?Q():t==="N3"?W():t==="N2"?X():t==="N1"?ne():null}function bL(e,t,n="open"){const s=F(e),a=String(t||"");if(!s||!a)return!1;const o=Xt(s);return!o||(o.viewedLessons||(o.viewedLessons={}),o.viewedLessons[a])?!1:(o.viewedLessons[a]=new Date().toISOString(),!0)}function kL(e,t){const n=F(e),s=String(t||"");if(!n||!s)return!1;const a=Xt(n);return a?!!(a.viewedLessons?.[s]||a.completedLessons?.[s]):!1}function Ga(e,t="open"){var s;const n=F(e);return!n||((s=r.progress).viewedReadingLevels||(s.viewedReadingLevels={}),r.progress.viewedReadingLevels[n])?!1:(r.progress.viewedReadingLevels[n]=new Date().toISOString(),!0)}function yL(e){const t=F(e);return t?!!r.progress.viewedReadingLevels?.[t]:!1}function jd(e){const t=It(e);return Array.isArray(t?.previousLevels)?t.previousLevels.map(n=>String(n||"").toUpperCase()).filter(Boolean):[]}function $L(e){const t=String(e||"").toUpperCase(),n=Xt(e);if(!n)return!1;if(n.finalTest?.passed)return!0;const s=It(t),a=$t(t),o=Math.max(Number(s?.lessonCount||0),a.length||0),l=Ds(t);return o>0&&l>=o}function Tt(e){const t=String(e||"").toUpperCase();if(be.includes(t)||r.progress.unlockedJlptLevels&&r.progress.unlockedJlptLevels.includes(t))return!0;if(!It(t))return t==="N5";const s=jd(t);return s.length?s.every(a=>$L(a)):!0}function jh(e=[]){const t=e.filter(Boolean);if(!t.length)return"";if(t.length===1)return t[0];const n=p()==="ru"?"Рё":"and";return t.length===2?`${t[0]} ${n} ${t[1]}`:`${t.slice(0,-1).join(", ")} ${n} ${t[t.length-1]}`}function En(e){const t=jd(e);return t.length?p()==="ru"?`Откроется после завершения ${jh(t)}.`:`Unlocks after completing ${jh(t)}.`:p()==="ru"?"Откроется после учебника N5.":"Unlocks after the N5 textbook."}function $t(e){const t=F(e);if(!t)return[];if(t==="N5"&&r.n5Textbook?.items?.length)return r.n5Textbook.items;if(t==="N4"&&r.n4Textbook?.items?.length)return r.n4Textbook.items;if(t==="N3"&&r.n3Textbook?.items?.length)return r.n3Textbook.items;if(t==="N2"&&r.n2Textbook?.items?.length)return r.n2Textbook.items;if(t==="N1"&&r.n1Textbook?.items?.length)return r.n1Textbook.items;const n=It(t),s=r.lessons.filter(d=>String(d.jlpt||"").toUpperCase()===t),a=n?(n.lessonIds||[]).map(d=>r.lessons.find(u=>u.id===d)).filter(Boolean):s,o=new Set(a.map(d=>d.id)),l=s.filter(d=>!o.has(d.id)),c=Math.max(n?n.lessonCount||a.length:s.length,a.length);return[...a,...l].slice(0,c||s.length)}function Sd(e){const t=F(e);if(!t)return"";const n=$t(t);if(!n.length)return"";const s=ML(t);if(s?.lessonId&&Ko(t,s.lessonId))return s.lessonId;const a=Xt(t)?.currentLessonId||"";if(a&&Ko(t,a))return a;const o=t==="N5"?re().completedLessons||{}:t==="N4"?Q().completedLessons||{}:t==="N3"?W().completedLessons||{}:t==="N2"?X().completedLessons||{}:r.progress.lessonCompletions||{},l=n.filter(c=>o[c.id]);return l.length?(l.sort((c,d)=>{const u=Date.parse(o[d.id]||"")||0,m=Date.parse(o[c.id]||"")||0;return u!==m?u-m:(d.order||0)-(c.order||0)}),l[0]?.id||n[0]?.id||""):n[0]?.id||""}function jL(e,t=""){const n=F(e);if(!n||!Pn(n))return;if(!Tt(n)){r.activeTextbookLevel=n,r.activeJlptLesson=n,aa("textbooks",null,n),G(En(n));return}const s=r.route,a=String(t||"")||Sd(n),o=["N5","N4","N3","N2"].includes(n),l=a?`#textbooks/${encodeURIComponent(n)}/${encodeURIComponent(a)}`:`#textbooks/${encodeURIComponent(n)}`;r.route="textbooks",r.activeTextbookLevel=n,r.activeJlptLesson=n,r.activeTextbookSubroute=a||null,r.kanjiPageId=null,r.detailCardId=null,r.revealed=!1,r.navMenu=null,r.finalTestModal=null,r.finalTestBusy=!1,r.contactModal=!1,r.pendingFocus=!o&&a?`#textbook-lesson-${a}`:null,s!=="eva-room"&&(r.evaRoomShopOpen=!1),a&&Rt(n,a,"open_jlpt"),kt(),jt(l),_s(),P()}function SL(e){return e?Pn(e.jlpt):null}function Mr(e){const t=String(e||"").toUpperCase();return r.jlptPracticeLessons.find(n=>n.jlpt===t)||null}function Vs(){return r.progress.jlptLessonPractice=kp(or().jlptLessonPractice,r.progress.jlptLessonPractice||{}),r.progress.jlptLessonPractice}function Kr(e){if(!e?.drills?.length)return null;const t=Vs(),n=t.activeIds[e.jlpt],s=e.drills.find(a=>a.id===n);return s||(t.activeIds[e.jlpt]=e.drills[0].id,e.drills[0])}function CL(e){const t=Mr(r.activeJlptLesson),n=Kr(t);if(!n||!n.tiles[e])return;const s=Vs(),a=s.selected[n.id]||[],o=n.blanks.flatMap(l=>l.answer||[]).length;a.includes(e)||a.length>=o||(s.selected[n.id]=[...a,e],s.checked[n.id]=!1,s.results[n.id]=null,T(),P())}function xL(){const e=Kr(Mr(r.activeJlptLesson));if(!e)return;const t=Vs();t.selected[e.id]=(t.selected[e.id]||[]).slice(0,-1),t.checked[e.id]=!1,t.results[e.id]=null,T(),P()}function NL(){const e=Kr(Mr(r.activeJlptLesson));if(!e)return;const t=Vs();t.selected[e.id]=[],t.checked[e.id]=!1,t.results[e.id]=null,T(),P()}function LL(){const e=Kr(Mr(r.activeJlptLesson));if(!e)return;const t={...xd(),...Cd()},n=Vs(),s=n.selected[e.id]||[],a=e.blanks.flatMap(c=>c.answer||[]),o=a.reduce((c,d,u)=>{const m=e.tiles[s[u]];return(!m||m.kanji!==d)&&c.push(u),c},[]),l=s.length===a.length&&o.length===0;n.checked[e.id]=!0,n.results[e.id]={correct:l,wrongIndexes:o,message:l?t.correct:t.wrong},l&&!n.completed[e.id]?(n.completed[e.id]=new Date().toISOString(),H(8,1,`jlpt_practice:${e.id}`),D("answer_correct")):l||D("answer_wrong"),T(),P()}function AL(){var o,l,c,d,u,m;const e=Mr(r.activeJlptLesson),t=Kr(e);if(!e||!t)return;const n=e.drills.findIndex(h=>h.id===t.id),s=e.drills[(n+1)%e.drills.length],a=Vs();a.activeIds[e.jlpt]=s.id,(o=a.selected)[l=s.id]||(o[l]=[]),(c=a.checked)[d=s.id]||(c[d]=!1),(u=a.results)[m=s.id]||(u[m]=null),T(),P()}function Sh(e){const t=String(e||"").toUpperCase();return t?r.cards.filter(n=>String(n.jlpt||"").toUpperCase()===t):[]}function qa(e,t){const n=e.toLowerCase(),s=[r.cards,r[`${n}KanjiCatalog`],r[`${n}Textbook`]],a=ku.get(e);if(a&&s.every((l,c)=>l===a.sources[c]))return a.items;const o=t();return ku.set(e,{sources:s,items:o}),o}function Cd(){return p()==="ru"?{courseText:"Стратегия уровня, чтения, лексика, приложения и интерактивная практика. Контент хранится в JSON, поэтому урок можно расширять без изменения логики.",apps:"Приложения и интерфейсы",kana:"Хирагана и катакана",hiragana:"Хирагана",katakana:"Катакана",kanjiFocus:"Кандзи с фуриганой",sentenceDrill:"Поставь кандзи в пропуск",fillBlanks:"Заполни пропуск плитками по порядку.",check:"Проверить",undo:"Убрать",clear:"Очистить",next:"Следующее",correct:"Верно. +8 XP и +1 Moon Fragment.",wrong:"Почти. Проверь порядок плиток и попробуй ещё раз."}:{courseText:"Level strategy, readings, vocabulary, apps, and interactive practice. Content lives in JSON, so lessons can grow without changing app logic.",apps:"Apps and interfaces",kana:"Hiragana and katakana",hiragana:"Hiragana",katakana:"Katakana",kanjiFocus:"Kanji with furigana",sentenceDrill:"Place kanji into the blank",fillBlanks:"Fill the blank with tiles in order.",check:"Check",undo:"Undo",clear:"Clear",next:"Next",correct:"Correct. +8 XP and +1 Moon Fragment.",wrong:"Almost. Check the tile order and try again."}}function xd(){return p()==="ru"?{back:"К учебнику",courseMap:"Полноценный JLPT-модуль",courseText:"Краткая стратегия уровня, чтения, лексика и практика. Данные хранятся в JSON, поэтому урок можно расширять без изменения логики.",available:"кандзи уровня",learned:"изучено",mastered:"освоено",goals:"Цели уровня",practice:"Практика",checkpoint:"Чекпоинт"}:{back:"Back to textbook",courseMap:"Full JLPT module",courseText:"Level strategy, readings, vocabulary, and practice. The content lives in JSON, so lessons can grow without changing app logic.",available:"level kanji",learned:"learned",mastered:"mastered",goals:"Level goals",practice:"Practice",checkpoint:"Checkpoint"}}function Eo(e){const t=r.rewards?.levelCurve||{baseXp:100,growth:1.35};let n=1,s=e;for(;s>=Ha(n,t)&&n<100;)s-=Ha(n,t),n+=1;return n}function Mn(){const e=r.rewards?.levelCurve||{baseXp:100,growth:1.35};let t=1,n=r.progress.xp;for(;n>=Ha(t,e)&&t<100;)n-=Ha(t,e),t+=1;const s=Ha(t,e);return{current:n,next:s,toNext:Math.max(0,s-n),percent:E(n,s)}}function Ha(e,t){return Math.round(t.baseXp*Math.pow(t.growth,e-1))}function IL(){const e={app:"Flash Kanji",exportedAt:new Date().toISOString(),progress:r.progress,customization:r.customization},t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`flash-kanji-progress-${ce()}.json`,document.body.append(s),s.click(),s.remove(),URL.revokeObjectURL(n),fe("progress_export",{route:r.route,source:"manual"}),G(_("export"))}function fe(e,t={},n={}){return CI(e,t,n)}function wn(e="learn",t={}){fe("learning_start",{route:r.route,source:e,...t},{dedupeKey:"learning_start"})}function Dr(e,t,n="textbook"){const s=F(e),a=String(t||"");fe("lesson_complete",{route:r.route,level:s,lessonId:a,source:n},{dedupeKey:`${s||"legacy"}:${a}`})}function Mo(e="review"){if(r.route!=="review"||Yf())return;const t=r.reviewSession?.startedAt||"current";fe("review_session_complete",{route:"review",source:e},{dedupeKey:t})}function Va(e,t,n="final-test"){const s=F(e);fe("final_test_complete",{route:"textbooks",level:s,source:n},{dedupeKey:`${s}:${t?.completedAt||"complete"}`}),t?.passed&&fe("final_test_pass",{route:"textbooks",level:s,source:n},{dedupeKey:`${s}:${t?.passedAt||t?.completedAt||"pass"}`})}function TL(e){return{level:e.dataset.shareLevel||e.dataset.level||"",lessonId:e.dataset.shareLessonId||e.dataset.lessonId||e.dataset.lesson||"",toastKey:e.dataset.shareToastKey||"",reward:e.dataset.shareReward&&r.rewardModal||null}}function F(e){const t=String(e||"").toUpperCase();return be.includes(t)?t:""}function at(e){if(!e||typeof e!="object")return null;const t=F(e.level),n=String(e.lessonId||"");if(!t||!n)return null;const s=typeof e.updatedAt=="string"&&e.updatedAt?e.updatedAt:new Date().toISOString();return{level:t,lessonId:n,updatedAt:s,source:typeof e.source=="string"&&e.source?e.source:"open"}}function RL(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const a=F(n),o=at({...typeof s=="object"&&s?s:{},level:a||n});a&&o&&(t[a]=o)}),t}function Ws(e={}){const t={};return Object.entries(e||{}).forEach(([n,s])=>{const a=String(n||"").trim();if(a){if(typeof s=="string"&&s.trim()){t[a]=s.trim();return}if(s&&typeof s=="object"){const o=typeof s.viewedAt=="string"&&s.viewedAt?s.viewedAt:typeof s.updatedAt=="string"&&s.updatedAt?s.updatedAt:new Date().toISOString();t[a]=o;return}s&&(t[a]=new Date().toISOString())}}),t}function Ko(e,t){const n=F(e),s=String(t||"");return!n||!s?!1:$t(n).some(a=>a.id===s)}function _L(e,t){const n=F(e),s=String(t||"");if(!n||!s)return!!n;const a=new Set(["review","final","final-test"]),o=new Set(["kanji","grammar","reading","listening"]);return a.has(s)||n!=="N5"&&o.has(s)?!0:$t(n).some(l=>l.id===s)}function PL(e,t){const n=F(e),s=String(t||"");if(!n||!s)return!1;const a=_i(n);return a==="ready"||a==="error"||a==="incomplete"?!1:/^[A-Za-z0-9_-]+$/.test(s)}function EL(e,t){const n=String(e||"").toLowerCase(),s=String(t||"").trim().toLowerCase();if(!we(n))return!1;if(!s)return!0;const a=vn(n);if(a)return["review","final","final-test","reference","sources"].includes(s)||a.lessons?.some(c=>c.id===s)||a.reading_practice?.some(c=>c.id===s);const o=Ja(n),l=Number(o?.lesson_count||(n==="hiragana"?10:11));if(/^lesson-\d+$/i.test(s)){const c=Number(s.replace(/\D+/g,""));return c>=1&&c<=l}return/^practice-[1-5]$/i.test(s)?!0:["review","final","final-test","reference","sources"].includes(s)}function Ch(e){return $t(e)[0]?.id||""}function ML(e=""){const t=F(e);if(t){const a=at(r.progress.lastOpenedJlptLessons?.[t]||null)||(at(r.progress.lastOpenedJlptLesson||null)?.level===t?at(r.progress.lastOpenedJlptLesson||null):null);return a&&Ko(t,a.lessonId)?a:null}const n=[at(r.progress.lastOpenedJlptLesson||null),...Object.values(r.progress.lastOpenedJlptLessons||{}).map(a=>at(a)).filter(Boolean)].filter(Boolean);return n.sort((a,o)=>(Date.parse(o.updatedAt||"")||0)-(Date.parse(a.updatedAt||"")||0)),n.find(a=>Ko(a.level,a.lessonId))||null}function KL(e=""){const t=F(e);if(t)return at(r.progress.lastOpenedJlptLessons?.[t]||null)||(at(r.progress.lastOpenedJlptLesson||null)?.level===t?at(r.progress.lastOpenedJlptLesson||null):null);const n=[at(r.progress.lastOpenedJlptLesson||null),...Object.values(r.progress.lastOpenedJlptLessons||{}).map(s=>at(s)).filter(Boolean)].filter(Boolean);return n.sort((s,a)=>(Date.parse(a.updatedAt||"")||0)-(Date.parse(s.updatedAt||"")||0)),n[0]||null}function DL(e){const t=F(e);if(!t)return"";const n=be.indexOf(t);return n>=0&&n<be.length-1?be[n+1]:""}function Rt(e,t,n="open"){var h;const s=F(e),a=String(t||"");if(!s||!a)return null;const o={level:s,lessonId:a,updatedAt:new Date().toISOString(),source:n},l=at(r.progress.lastOpenedJlptLessons?.[s]||null),c=at(r.progress.lastOpenedJlptLesson||null);(h=r.progress).lastOpenedJlptLessons||(h.lastOpenedJlptLessons={}),r.progress.lastOpenedJlptLessons[s]=o,r.progress.lastOpenedJlptLesson=o;const d=bL(s,a,n),u=Xt(s);return u&&u.currentLessonId!==a&&(u.currentLessonId=a),(!l||l.lessonId!==a||l.level!==s||c?.lessonId!==a||c?.level!==s||d)&&T(),o}function Qt(e,t="btn ghost"){const n=F(e),s=DL(n);if(!n||!s)return"";const a=Ch(s);if(!a)return"";const o=p()==="ru"?`Первый урок ${s}`:`${s} lesson 1`;return`<button class="${g(t)}" type="button" data-action="final-test-next-level" data-level="${g(n)}" data-next-level="${g(s)}" data-next-lesson="${g(a)}">${i(o)}</button>`}function bn(){return F(r.activeJlptLesson)||F(r.activeTextbookLevel)||F(r.jlptLessons.find(e=>Tt(e.jlpt))?.jlpt)||F(r.jlptLessons[0]?.jlpt)||"N5"}function FL(e,t={}){const n=String(e||r.route||"home").toLowerCase();return n==="textbooks"?"textbooks":n==="textbook"?`textbooks/${encodeURIComponent(F(t.level||r.activeTextbookLevel||bn())||bn())}`:n==="lesson"?`jlpt-lesson/${encodeURIComponent(F(t.level||r.activeJlptLesson||bn())||bn())}`:n==="srs"?"review":n==="stats"?"stats":n==="achievements"?"achievements":n==="achievement"?r.route||"home":n||"home"}function OL(e=r.route,t={}){const n=new URL(location.href);return n.search="",n.hash=FL(e,t),n.href}function BL(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=F(t.level||r.activeJlptLesson||r.activeTextbookLevel||""),a=p()==="ru",o={textbooks:a?"Учебники Flash Kanji":"Flash Kanji textbooks",textbook:a?"Учебник Flash Kanji":"Flash Kanji textbook",lesson:a?"Урок Flash Kanji":"Flash Kanji lesson",srs:a?"Повторение Flash Kanji":"Flash Kanji review",stats:a?"Статистика Flash Kanji":"Flash Kanji stats",achievements:a?"Достижения Flash Kanji":"Flash Kanji achievements",achievement:"Flash Kanji"},l=o[n]||o.achievement;return s&&["textbook","lesson"].includes(n)?`${l} ${s}`:l}function zL(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=F(t.level||r.activeJlptLesson||r.activeTextbookLevel||""),a=s?It(s):null,o=t.lesson||(s?Pn(s):null),l=p()==="ru";if(n==="textbooks")return l?"Функциональные учебники JLPT N5-N1 внутри Flash Kanji.":"Functional JLPT N5-N1 textbooks inside Flash Kanji.";if(n==="textbook"){const c=b(a?.displayTitle||a?.title||{}),d=Number(a?.lessonCount||0),u=Number(a?.kanjiCount||0);return l?`${c||"Учебник"}: ${d} уроков и ${u} кандзи.`:`${c||"Textbook"}: ${d} lessons and ${u} kanji.`}if(n==="lesson"){const c=b(o?.title||{}),d=b(o?.summary||{});return l?`${s?`${s} · `:""}${c||"Урок"} — ${d||"урок в Flash Kanji"}.`:`${s?`${s} · `:""}${c||"Lesson"} — ${d||"a Flash Kanji lesson"}.`}return n==="srs"?l?"Очередь повторений Flash Kanji.":"Flash Kanji review queue.":n==="stats"?l?"Моя статистика и прогресс во Flash Kanji.":"My Flash Kanji stats and progress.":n==="achievements"?l?"Достижения и секреты Flash Kanji.":"Flash Kanji achievements and secrets.":n==="achievement"?VL(t.reward||r.rewardModal||{}):"Flash Kanji."}function UL(){return p()==="ru"?"Поделиться":"Share"}function gs(e=r.route,t={}){const n=F(t.level||""),s=String(t.lessonId||t.lesson?.id||""),a=t.label||UL();return`
      <button class="btn ghost share-btn" type="button" data-action="share-page" data-share-section="${g(e)}" ${n?`data-share-level="${g(n)}"`:""} ${s?`data-share-lesson-id="${g(s)}"`:""} ${t.toastKey?`data-share-toast-key="${g(t.toastKey)}"`:""}>
        <span class="btn-icon" aria-hidden="true">${JL()}</span>
        <span>${i(a)}</span>
      </button>
    `}function JL(){return`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M15 5h4v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M10 14 19 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <path d="M19 14v5H5V5h5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>
    `}function xh(e){return e==="youtube"?`
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
    `}async function GL(e,t={}){const n=t.toastKey||"shareLinkCopied",s={title:e.title,text:e.text,url:e.url};if(e.files?.length&&navigator.canShare?.({files:e.files})&&(s.files=e.files),navigator.share)try{return await navigator.share(s),"share"}catch(o){if(o&&o.name==="AbortError")return"abort"}return await YL(e.text,e.url,n)?"copy":"failed"}async function qL(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s=t.reward||r.rewardModal||null,a={section:n,title:BL(n,t),text:zL(n,t),url:OL(n,t),files:[]};if(n==="achievement"||s){const o=await WL(s||{});o&&typeof File<"u"&&(a.files=[new File([o],`flash-kanji-achievement-${r.progress.level}.png`,{type:"image/png"})])}return a}async function Nh(e=r.route,t={}){const n=String(e||r.route||"home").toLowerCase(),s={...t};s.level||(s.level=t.level||r.activeJlptLesson||r.activeTextbookLevel||""),fe("share_opened",{route:n,level:F(s.level)||"",source:"share"});const a=await qL(n,s),o=await GL(a,{toastKey:t.toastKey||"shareLinkCopied"});return o==="share"?(fe("share_completed",{route:n,source:a.files?.length?"file":"web-share"}),!0):o==="copy"?(fe("share_link_copied",{route:n,source:"copy"}),fe("share_completed",{route:n,source:"copy"}),!0):(o==="abort"||G(p()==="ru"?"Не удалось поделиться":"Share failed"),!1)}async function HL(){await Nh("achievement",{reward:r.rewardModal||{},toastKey:"shareCopied"})}function VL(e={}){const t=_("shareFallback"),n=e.level||r.progress.level,s=Mn(),a=e.type==="level"?`${s.current}/${s.next}`:e.totalXp||r.progress.xp,o=e.type==="level"?r.progress.moonFragments:e.moonFragments||r.progress.moonFragments;return`${t}: ${_("level")} ${n}, ${a} XP, ${o} Moon Fragments.`}async function WL(e={}){const s=document.createElement("canvas");s.width=1200,s.height=630;const a=s.getContext("2d");if(!a)return null;XL(a,1200,630);const o=e.level||r.progress.level,l=Mn(),c=e.type==="level"?`${l.current}/${l.next}`:e.totalXp||r.progress.xp,d=e.type==="level"?r.progress.moonFragments:e.moonFragments||r.progress.moonFragments,u=e.mascot||(r.progress.level%2===0?"leya":"eva"),m=So(u,e.mood||"happy",e.dialog||e.type||"achievement"),[h,f]=await Promise.all([Lh("assets/logo.webp"),m?Lh(m):Promise.resolve(null)]);return h&&Ah(a,h,58,48,330,116),f&&Ah(a,f,780,95,330,450),a.fillStyle="#f7f4ee",a.font="900 58px system-ui, sans-serif",a.fillText(_("levelUp"),64,230),a.font="900 110px 'Yu Mincho', serif",a.fillStyle="#ffe15a",a.fillText(`${_("level")} ${o}`,64,340),a.font="800 38px system-ui, sans-serif",a.fillStyle="#f7f4ee",a.fillText(`${c} XP`,70,425),a.fillText(`${d} Moon Fragments`,70,482),a.fillStyle="rgba(255,255,255,0.74)",a.font="700 28px system-ui, sans-serif",a.fillText("Flash Kanji | JLPT Japanese learning",70,558),a.strokeStyle="rgba(255, 225, 90, 0.7)",a.lineWidth=3,a.strokeRect(34,30,1132,570),QL(s)}function XL(e,t,n){const s=e.createLinearGradient(0,0,t,n);s.addColorStop(0,"#08080c"),s.addColorStop(.45,"#1c1018"),s.addColorStop(1,"#071a18"),e.fillStyle=s,e.fillRect(0,0,t,n),e.fillStyle="rgba(255, 56, 92, 0.22)",e.beginPath(),e.moveTo(0,70),e.lineTo(720,0),e.lineTo(560,630),e.lineTo(0,630),e.closePath(),e.fill(),e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=1;for(let a=-t;a<t*2;a+=38)e.beginPath(),e.moveTo(a,0),e.lineTo(a+t,n),e.stroke()}function Lh(e){return new Promise(t=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>t(null),n.src=new URL(e,location.href).href})}function Ah(e,t,n,s,a,o){const l=Math.min(a/t.naturalWidth,o/t.naturalHeight),c=t.naturalWidth*l,d=t.naturalHeight*l;e.drawImage(t,n+(a-c)/2,s+(o-d)/2,c,d)}function QL(e){return new Promise(t=>e.toBlob(t,"image/png",.94))}async function YL(e,t,n="shareLinkCopied"){const s=await Ih(`${e}
${t}`);return G(s?_(n):e),s}async function Ih(e){if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",document.body.append(t),t.focus(),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{t.remove()}}async function ZL(e){const t=e.target.files?.[0];if(t)try{const n=JSON.parse(await t.text());r.progress=mp(or(),n.progress||n),$i=!1,sr=null,r.reviewSession=null,lr(),kl(),n.customization&&(r.customization={...On(),...n.customization,selected:{...On().selected,...n.customization.selected||{}}},ir()),Ns(),Fr(),T(),kn(),G(_("import")),P()}catch(n){console.error(n),G("Invalid JSON")}finally{e.target.value=""}}function eA(){if(!confirm(p()==="ru"?"Сбросить прогресс?":"Reset progress?"))return;const e=r.progress.settings;r.progress=or(),r.progress.settings=e,r.finalTestModal=null,r.finalTestBusy=!1,lr(),Fr(),T(),P()}function tA(){r.progress.settings.theme=r.progress.settings.theme==="dark"?"light":"dark",r.progress.settings.themeManuallySelected=!0,kn(),T(),P()}function nA(){r.progress.settings.language=p()==="ru"?"en":"ru",r.progress.settings.languageAutoDetected=!1,r.progress.settings.languageManuallySelected=!0,T(),P()}function Th(){r.progress.settings.sound=!Un(r.progress.settings.sound,!0),r.progress.settings.uxSound=r.progress.settings.sound,Fr(),Nd(),T(),G(r.progress.settings.sound?"♪":"×")}function sA(){Th()}function Wa(){return window.FlashKanjiSound||null}function rA(){try{Wa()?.preloadSounds?.()}catch(e){console.warn("UX sounds preload failed.",e)}}function Fr(){const e=Wa();!e||!r.progress?.settings||(e.setSoundEnabled?.(Un(r.progress?.settings?.sound,!0)),e.setSoundVolume?.(Fo()))}function Do(){return Un(r.progress?.settings?.sound,!0)}function Nd(){const e=De('[data-action="sound"]');if(!e)return;const t=Un(r.progress?.settings?.sound,!0),n=p()==="ru"?t?"Звук":"Звук выключен":t?"Sound":"Sound off";e.classList.toggle("is-muted",!t),e.setAttribute("aria-pressed",String(t)),e.setAttribute("aria-label",n),e.title=n,e.innerHTML=aA(t)}function aA(e){return e?`
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
      `}function iA(e){return e?`
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
      `}function oA(){const e=De('[data-action="notification-center"]');if(!e)return;const t=r.notificationPrompt||ti(),n=!!(t.docked||r.notificationPromptVisible||zo("header")),s=!!r.notificationPromptVisible,a=s?p()==="ru"?"Скрыть уведомление":"Hide notification":t.docked?p()==="ru"?"Открыть уведомление":"Open notification":p()==="ru"?"Уведомления":"Notifications";e.hidden=!n,e.classList.toggle("is-active",s),e.classList.toggle("has-prompt",!!(t.docked||s)),e.setAttribute("aria-pressed",String(s)),e.setAttribute("aria-label",a),e.title=a,e.innerHTML=iA(s)}function Ld(){const e=De('[data-action="toggle-header-socials"]');if(!e)return;const t=Ad(),n=p()==="ru"?t?"Скрыть соцсети":"Открыть соцсети":t?"Hide social links":"Open social links";e.setAttribute("aria-expanded",String(t)),e.classList.toggle("is-active",t),e.setAttribute("aria-label",n),e.title=n}function Rh(e){const t=document.querySelector(".app-header");t&&(t.classList.toggle("is-social-open",!!e),Ld())}function Ad(){return!!document.querySelector(".app-header")?.classList.contains("is-social-open")}function Fo(){const e=Number(r.progress?.settings?.uxVolume);return Number.isFinite(e)?de(e,0,1):.75}function lA(e){const t=de(Number(e),0,1);r.progress.settings.uxVolume=t,Fr(),T()}function D(e){if(!Do())return!1;const t=()=>{try{if(!!Wa()?.playSound?.(e)){Hr=Date.now();return}_d(String(e))}catch(n){console.warn("UX sound failed.",n),_d(String(e))}};return typeof requestAnimationFrame=="function"?requestAnimationFrame(()=>window.setTimeout(t,0)):window.setTimeout(t,0),!0}function kn(){document.documentElement.dataset.theme=r.progress.settings.theme,document.documentElement.dataset.customTheme=r.customization?.selected?.theme||"theme_default_dark";const e=un();document.documentElement.dataset.customRoom=e?.id||"bg_study_hub",document.documentElement.style.setProperty("--app-room-bg",Id(e?.file||"assets/bg/bg_study_hub.webp"));const t=Iy();document.documentElement.dataset.customEffect=t||"none",document.querySelector('meta[name="theme-color"]')?.setAttribute("content",r.progress.settings.theme==="light"?"#f8f7f2":"#08080c"),dA()}function cA(){return["localhost","127.0.0.1","::1",""].includes(window.location.hostname)}function dA(){cA()&&(window.FLASH_KANJI_EVA_ROOM_DEBUG={getBackground:()=>{const e=un();return{selectedCustomization:r.customization?.selected?.background||null,selectedProgress:r.progress?.selectedEvaRoomBackground||null,equippedProgress:r.progress?.shop?.equipped?.background||null,currentId:e?.id||null,currentFile:e?.file||null,appRoomCss:document.documentElement.style.getPropertyValue("--app-room-bg"),sceneCss:document.querySelector(".eva-vn-scene")?.style.getPropertyValue("--eva-bg")||"",customRoomDataset:document.documentElement.dataset.customRoom||"",backgrounds:to().map(t=>({id:t.id,file:t.file,defaultUnlocked:!!t.defaultUnlocked}))}}})}function Id(e){const t=String(e||"assets/bg/bg_study_hub.webp").replace(/["\\\n\r]/g,"");return`url("${t.startsWith("assets/")?`../${t}`:t}")`}function _(e){return r.i18n?.ui?.[e]?.[p()]||r.i18n?.ui?.[e]?.ru||e}function p(){return r.progress?.settings?.language||"ru"}function b(e){return!e||typeof e!="object"?String(e||""):e[p()]||e.ru||e.en||""}function uA(e){if(!e)return"";try{return new Intl.DateTimeFormat(p()==="ru"?"ru-RU":"en-US",{day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch{return String(e).slice(0,16)}}function Xa(e){return p()==="en"&&r.lessonTranslations[e.id]?.title_en||e.title}function pA(e){return p()==="en"&&r.lessonTranslations[e.id]?.summary_en||e.summary}function Td(e){const t=r.lessons.find(n=>n.id===e);return t?Xa(t):""}function K(e){return Qe(e,p())}function Qe(e,t=p()){if(!e)return"";const n=dh(e);return n&&n.meaning?t==="en"?n.meaning.en||n.meaning.ru||e.meaning_en||r.kanjiTranslations[e.id]?.meaning_en||"":n.meaning.ru||e.meaning_ru||r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||"":t==="en"?r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||e.meaning_ru||"":e.meaning_ru||r.kanjiTranslations[e.id]?.meaning_en||e.meaning_en||""}function Qa(e){return p()==="en"?r.kanjiTranslations[e.id]?.interface_use_en||e.interface_use_en||e.interface_use||"":e.interface_use||e.interface_use_en||""}function ms(e){if(p()!=="en")return e.translation_ru||e.translation||"";if(e.translation_en)return e.translation_en;const t=r.vocabulary.find(n=>n.word===e.word||Rd(n.romaji)===Rd(e.romaji));return t?.translation_en?t.translation_en:Lv[Rd(e.romaji)]||e.translation||""}function Ya(e){const t=ms(e);return p()==="ru"?`Какое слово подходит к значению «${t}»?`:`Which word matches "${t}"?`}function V(e){return e?p()==="en"?String(e.answerEn||e.answer_en||e.answer||""):String(e.answer||e.answerRu||""):""}function qe(e){if(!e)return[];const t=p()==="en"&&Array.isArray(e.optionsEn)&&e.optionsEn.length?e.optionsEn:e.options;return Array.isArray(t)?t.map(String).filter(Boolean):[]}function Rd(e){return String(e||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"")}function Or(e){return r.dialogues?.mascots?.[e]||{name:{ru:e,en:e},sprites:{},dialogs:{}}}function ze(e,t){const n=e==="eva"?gA(t):"";if(n)return n;const s=Or(e).dialogs?.[t]||Or(e).dialogs?.welcome||{},a=s[p()]||s.ru||[""];return it(a)}function gA(e="welcome"){const t=String(e||"welcome").toLowerCase();if(!["welcome","progress","hint","lessoncomplete","masterymilestone","achievement"].includes(t))return"";const n=mA(t),s=[...r.evaAutonomyLines||[],...ro()].filter(l=>{const c=b(l?.text||{});if(!c)return!1;const d=Array.isArray(l.tags)?l.tags:[];if(!(n.includes(l.category)||d.some(h=>n.includes(h))))return!1;const m=_h(c);return m.length>=12&&m.length<=132}),a=s.filter(l=>!gl.includes(l.id)),o=it(a.length?a:s);return o?(o.id&&(gl=[o.id,...gl.filter(l=>l!==o.id)].slice(0,18)),_h(b(o.text||{}))):""}function mA(e){return{welcome:["fis_study","fis_focus","fis_observation","fis_short","study","short","mood","room"],progress:["fis_reward","fis_streak","fis_review","reward","streak","review","progress"],hint:["fis_focus","fis_observation","hint","study"],lessoncomplete:["fis_reward","fis_streak","reward","study"],masterymilestone:["fis_reward","fis_streak","reward","progress"],achievement:["fis_reward","reward","achievement"]}[e]||["fis_study","study"]}function _h(e){const t=String(e||"").replace(/\s+/g," ").trim();if(t.length<=132)return t;const n=t.match(/[^.!?。！？]+[.!?。！？]?/g)||[t];let s="";for(const a of n){const o=`${s} ${a.trim()}`.trim();if(o.length>132)break;s=o}return s.length>=12?s:`${t.slice(0,124).trimEnd()}...`}function Br(e){const t=Ph(e);return`<span class="pill ${t}">${i(Nv[t]||"New")}</span>`}function Ph(e){const t=String(e||"new").toLowerCase();return t==="new"||t==="learning"||t==="review"||t==="mastered"?t:t==="New".toLowerCase()?"new":t.includes("master")?"mastered":t.includes("learn")?"learning":t.includes("review")?"review":"new"}function Eh(e){const t=(e.correct||0)+(e.wrong||0);return t?Math.round((e.correct||0)/t*100):0}function fA(){const e=getComputedStyle(document.documentElement);return{text:e.getPropertyValue("--text").trim(),muted:e.getPropertyValue("--muted").trim(),line:e.getPropertyValue("--line").trim(),red:e.getPropertyValue("--accent").trim(),yellow:e.getPropertyValue("--accent-2").trim(),green:e.getPropertyValue("--accent-3").trim(),blue:e.getPropertyValue("--accent-4").trim(),danger:e.getPropertyValue("--danger").trim(),pink:"#ff91d8",blueSoft:"rgba(67, 214, 255, 0.16)",dangerSoft:"rgba(255, 107, 95, 0.16)"}}function hA(e){return{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:e.text}}},scales:{x:{ticks:{color:e.muted},grid:{color:e.line}},y:{beginAtZero:!0,ticks:{color:e.muted,precision:0},grid:{color:e.line}}}}}function Oo(){try{return pi||(pi=new(window.AudioContext||window.webkitAudioContext)),pi.state==="suspended"&&pi.resume().catch(()=>null),pi}catch(e){return console.warn("Audio context unavailable.",e),null}}function vA(e){const t=String(e||"").toLowerCase();return t.includes("wrong")||t.includes("failed")?{type:"triangle",frequencies:[180],duration:.22,peak:.12,interval:0}:t.includes("correct")||t.includes("success")?{type:"triangle",frequencies:[440,554.37],duration:.18,peak:.11,interval:.09}:t.includes("level")||t.includes("achievement")||t.includes("reward")||t.includes("xp")||t.includes("moon")||t.includes("unlock")?{type:"sine",frequencies:[523.25,659.25,783.99],duration:.26,peak:.1,interval:.08}:t.includes("close")?{type:"square",frequencies:[260],duration:.12,peak:.08,interval:0}:t.includes("open")||t.includes("button")||t.includes("click")||t.includes("tab")||t.includes("page")?{type:"sine",frequencies:[320],duration:.09,peak:.08,interval:0}:{type:"sine",frequencies:[360],duration:.16,peak:.08,interval:0}}function _d(e){const t=Oo();if(!t)return!1;try{const n=vA(e),s=t.currentTime+.01;return n.frequencies.forEach((a,o)=>{const l=t.createOscillator(),c=t.createGain();l.type=n.type,l.frequency.value=a;const d=s+n.interval*o;c.gain.setValueAtTime(1e-4,d),c.gain.exponentialRampToValueAtTime(n.peak,d+.02),c.gain.exponentialRampToValueAtTime(1e-4,d+n.duration),l.connect(c).connect(t.destination),l.start(d),l.stop(d+n.duration+.02)}),Hr=Date.now(),!0}catch(n){return console.warn("Fallback UX tone failed.",n),!1}}window.FlashKanjiUxToneFallback=_d;function wA(){const e=()=>{const t=Oo();t?.state==="suspended"&&t.resume().catch(()=>null)};["pointerdown","touchstart","keydown","mousedown"].forEach(t=>{document.addEventListener(t,e,{once:!0,passive:!0,capture:!0})})}function Za(e){if(r.progress.settings.sound){if(Wa()){D(e==="again"?"answer_wrong":"answer_correct");return}try{const t=Oo();if(!t)return;Hr=Date.now();const n=t.createOscillator(),s=t.createGain(),a=t.currentTime;n.type="triangle",n.frequency.value=e==="again"?180:480,s.gain.setValueAtTime(1e-4,a),s.gain.exponentialRampToValueAtTime(.13,a+.015),s.gain.exponentialRampToValueAtTime(1e-4,a+.18),n.connect(s).connect(t.destination),n.start(a),n.stop(a+.2)}catch(t){console.warn("Audio unavailable.",t)}}}function bA(){if(r.progress.settings.sound)try{const e=Oo();if(!e)return;Hr=Date.now();const t=e.currentTime;[523.25,659.25,783.99].forEach((n,s)=>{const a=e.createOscillator(),o=e.createGain();a.type="sine",a.frequency.value=n;const l=t+s*.08;o.gain.setValueAtTime(1e-4,l),o.gain.exponentialRampToValueAtTime(.12,l+.02),o.gain.exponentialRampToValueAtTime(1e-4,l+.24),a.connect(o).connect(e.destination),a.start(l),a.stop(l+.26)})}catch(e){console.warn("Achievement sound unavailable.",e)}}function kA(){const e=document.createElement("div");e.className="confetti",e.innerHTML=Array.from({length:34},(t,n)=>`<i style="--x:${Math.random()*100}vw;--d:${Math.random()*.8+.8}s;--r:${Math.random()*360}deg;--c:${n%4}"></i>`).join(""),document.body.append(e),window.setTimeout(()=>e.remove(),1800)}function G(e){const t=De("#toast");t.textContent=e,t.hidden=!1,clearTimeout(pu),pu=window.setTimeout(()=>{t.hidden=!0},2400)}function Pd(){return`
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
      </section>`}function yA(e){return`<section class="empty-state" style="margin-top:24px"><span class="kanji-char">警</span><h1>Data error</h1><p>${i(e.message)}</p></section>`}function $A(){try{[_e,_t,ui,"flashKanji.lastForcedBuild"].forEach(t=>{try{localStorage.removeItem(t)}catch(n){console.warn(`Could not remove recovery key ${t}.`,n)}})}catch(e){console.warn("Could not clear Flash Kanji recovery markers during boot recovery.",e)}}async function jA(){if("caches"in window){const e=await caches.keys();await Promise.all(e.map(t=>caches.delete(t)))}if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(async t=>{try{await t.unregister()}catch(n){console.warn("Could not unregister service worker during boot recovery.",n)}}))}}async function SA(e){try{const t=Number(sessionStorage.getItem(en)||"0");if(t>=2)return!1;const n=t+1;sessionStorage.setItem(en,String(n)),console.warn(`[FlashKanji] Boot failed, attempting recovery stage ${n}.`,e),n>=2&&$A(),await jA();try{localStorage.removeItem(_e),localStorage.removeItem(_t),localStorage.removeItem(ui),localStorage.removeItem("flashKanji.lastForcedBuild")}catch(a){console.warn("Boot recovery marker cleanup failed.",a)}const s=new URL(location.href);return s.searchParams.set("cachebust",Date.now().toString()),s.searchParams.set("bootRecovery",String(n)),location.replace(s.toString()),!0}catch(t){return console.warn("Boot recovery failed.",t),!1}}function CA(){if(!("serviceWorker"in navigator)||location.protocol==="file:")return;let e=!1,t=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!t){t=!0;return}e||(e=!0,location.reload())}),navigator.serviceWorker.addEventListener("message",s=>{if(s.data?.type==="FLASH_KANJI_CACHE_RESET_DONE")try{localStorage.setItem(_t,`${I}:done`)}catch(a){console.warn("Cannot save PWA cache reset marker.",a)}});const n=async()=>{try{const s=new URL("service-worker.js",document.baseURI),a=await navigator.serviceWorker.register(s.href);if(!a||typeof a.update!="function")return;xA(a),await a.update().catch(console.warn)}catch(s){console.warn(s)}};document.readyState==="loading"?window.addEventListener("load",()=>{n()},{once:!0}):n()}function xA(e){e&&e.addEventListener("updatefound",()=>{const t=e.installing;t&&t.addEventListener("statechange",()=>{(t.state==="installed"||t.state==="activated")&&e.update().catch(()=>null)})})}function Bo(){const e={declineCount:0,nextShowAt:0,neverShow:!1,installed:!1};try{const t=localStorage.getItem(w)||localStorage.getItem(v);if(!t)return e;const n=JSON.parse(t),s={...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,installed:!!n.installed};return localStorage.getItem(w)||localStorage.setItem(w,JSON.stringify(s)),s}catch(t){return console.warn("PWA install prompt state reset.",t),e}}function Ed(){try{localStorage.setItem(w,JSON.stringify(r.pwaInstallPrompt))}catch(e){console.warn("Cannot save PWA install prompt state.",e)}}function NA(e){e.preventDefault(),js=e,r.progress&&r.i18n&&AA()}async function LA(){if(fe("pwa_install_click",{route:r.route,source:js?"browser":zr()?"ios":"help"}),ei()){Kd();return}if(!js){r.pwaInstallHelpVisible=!0,We();return}const e=js;js=null;try{if(await e.prompt(),(await e.userChoice)?.outcome==="accepted"){Kd();return}Dd()}catch(t){console.warn("PWA install prompt failed.",t),Dd()}}function ei(){return["standalone","fullscreen","minimal-ui"].some(t=>window.matchMedia?.(`(display-mode: ${t})`)?.matches)||Reflect.get(navigator,"standalone")===!0}function Md(){const e=r.pwaInstallPrompt||Bo();if(ei()||e.installed||e.neverShow||Date.now()<Number(e.nextShowAt||0))return!1;const t=r.progress?.visits?.firstVisitDate;return!t||hs(t,ce())<1?!1:!!js||zr()}function AA(){Md()&&(D("notification_soft"),P())}function Kd(){r.pwaInstallPrompt={...Bo(),...r.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},r.pwaInstallHelpVisible=!1,Ed(),fe("pwa_installed",{route:r.route,source:zr()?"ios":"browser"},{dedupeKey:"appinstalled"}),Fh(),r.progress&&r.i18n&&P()}function Dd(){const e=r.pwaInstallPrompt||Bo(),t=Math.min(Number(e.declineCount||0)+1,5);r.pwaInstallPrompt={...e,declineCount:t,nextShowAt:IA(t),neverShow:t>=5,installed:!1},Ed(),P()}function IA(e){const s={1:864e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||864e5)}function TA(){!ei()||r.pwaInstallPrompt.installed||(r.pwaInstallPrompt={...r.pwaInstallPrompt,installed:!0,neverShow:!0,nextShowAt:0},Ed())}function zr(){const e=navigator.userAgent||"",t=/iphone|ipad|ipod/i.test(e)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,n=/safari/i.test(e)&&!/(crios|fxios|edgios|opios|chrome|android)/i.test(e);return t&&n}function Mh(){return p()==="en"?{badge:"Offline PWA",title:"Install Flash Kanji on your home screen?",description:"Your progress, lessons and reviews will open like a real app.",iosInstruction:"Tap Share -> Add to Home Screen.",install:"Install app",later:"Later"}:{badge:"Offline PWA",title:"Установить Flash Kanji на главный экран?",description:"Так прогресс, уроки и повторения будут открываться как приложение.",iosInstruction:"Нажмите Поделиться → На экран Домой.",install:"установить приложение",later:"Позже"}}function ti(){const e={declineCount:0,nextShowAt:0,neverShow:!1,permission:typeof Notification>"u"?"unsupported":Notification.permission,enabled:!1,acceptedAt:null,lastAskedAt:0,lastShown:{},periodicSync:!1,docked:!1};try{const t=localStorage.getItem(j);if(!t)return e;const n=JSON.parse(t);return{...e,...n,declineCount:Number(n.declineCount||0),nextShowAt:Number(n.nextShowAt||0),neverShow:!!n.neverShow,enabled:!!n.enabled,lastShown:n.lastShown&&typeof n.lastShown=="object"?n.lastShown:{},docked:!!n.docked}}catch(t){return console.warn("Notification prompt state reset.",t),e}}function fs(){try{localStorage.setItem(j,JSON.stringify(r.notificationPrompt))}catch(e){console.warn("Cannot save notification prompt state.",e)}}function ni(){clearTimeout(al),al=0}function RA(){ni(),r.notificationPromptVisible&&(al=window.setTimeout(()=>{r.notificationPromptVisible&&Kh()},5e3))}function Kh(){ni(),!(!r.notificationPromptVisible&&r.notificationPrompt?.docked)&&(r.notificationPromptVisible=!1,r.notificationPrompt={...r.notificationPrompt,docked:!0},fs(),P())}function Dh(){return ei()||!!r.pwaInstallPrompt?.installed}function zo(e="usage"){const t=r.notificationPrompt||ti();return!(!("Notification"in window)||t.neverShow||t.enabled||!Dh()||Notification.permission==="granted"||Notification.permission==="denied"||Date.now()<Number(t.nextShowAt||0)||e!=="lesson_complete"&&Date.now()-hl<2*60*1e3)}function Uo(e="usage"){return zo(e)?(r.notificationPromptVisible=!0,r.notificationPrompt={...r.notificationPrompt,docked:!1},fs(),D("notification_soft"),RA(),P(),!0):("Notification"in window&&Notification.permission==="granted"&&Oh(),!1)}function Fh(){if(clearTimeout(yu),!Dh())return;const e=Math.max(0,2*60*1e3-(Date.now()-hl));yu=window.setTimeout(()=>Uo("usage"),e)}async function _A(){if(r.notificationPromptVisible=!1,ni(),!("Notification"in window)){Jo();return}try{const e=Notification.permission==="granted"?"granted":await Notification.requestPermission();if(r.notificationPrompt.permission=e,r.notificationPrompt.lastAskedAt=Date.now(),e==="granted"){Oh(),G(zh().enabled),We();return}Jo()}catch(e){console.warn("Notification permission failed.",e),Jo()}}function Oh(){!("Notification"in window)||Notification.permission!=="granted"||(ni(),r.notificationPrompt={...ti(),...r.notificationPrompt,permission:"granted",enabled:!0,neverShow:!0,docked:!1,acceptedAt:r.notificationPrompt.acceptedAt||new Date().toISOString(),nextShowAt:0},fs(),Fd())}function Jo(){const e=r.notificationPrompt||ti(),t=Math.min(Number(e.declineCount||0)+1,5);r.notificationPromptVisible=!1,ni(),r.notificationPrompt={...e,permission:"Notification"in window?Notification.permission:"unsupported",declineCount:t,nextShowAt:PA(t),neverShow:t>=5,enabled:!1,docked:!1,lastAskedAt:Date.now()},fs(),We()}function PA(e){const s={1:432e5,2:1728e5,3:6048e5,4:2592e6};return e>=5?0:Date.now()+(s[e]||12*36e5)}function Fd(){!("Notification"in window)||Notification.permission!=="granted"||(r.notificationPrompt.permission="granted",r.notificationPrompt.enabled=!0,fs(),ml.forEach(e=>clearTimeout(e)),ml.clear(),[{type:"daily_bonus",hour:9,minute:0},{type:"lesson",hour:11,minute:30},{type:"review",hour:18,minute:0},{type:"streak",hour:20,minute:30}].forEach(e=>Bh(e.type,EA(e.hour,e.minute))),FA())}function Bh(e,t){const n=Math.max(1e3,Math.min(t.getTime()-Date.now(),2147483647)),s=window.setTimeout(async()=>{await MA(e),Bh(e,OA(t,1))},n);ml.set(e,s)}function EA(e,t){const n=new Date;return n.setHours(e,t,0,0),n.getTime()<=Date.now()+60*1e3&&n.setDate(n.getDate()+1),n}async function MA(e){if(!KA(e))return!1;const t=DA(e);try{const n=await navigator.serviceWorker?.ready;return n?.showNotification?await n.showNotification(t.title,t.options):"Notification"in window&&Notification.permission==="granted"&&new Notification(t.title,t.options),D(e==="daily_bonus"?"notification_reward":"notification_reminder"),r.notificationPrompt.lastShown[e]=ce(),fs(),!0}catch(n){return console.warn("Notification show failed.",n),!1}}function KA(e){if(!("Notification"in window)||Notification.permission!=="granted"||r.notificationPrompt.lastShown?.[e]===ce())return!1;if(e==="review")return Xe()>0;if(e==="daily_bonus"){const t=qi(r.progress.dailyBonusPending);return!!r.progress.visits?.firstVisitDate&&!!t&&t.availableOn<=ce()&&!r.progress.dailyBonuses[ce()]}return e==="lesson"?ZN().length>0:e==="streak"?(r.progress.streak.current||r.progress.visits?.streak||0)>0:!0}function DA(e){const t=p()==="ru",n={review:{title:"Flash Kanji",body:t?"Ваши кандзи ждут повторения.":"Your kanji are waiting for review.",url:"./index.html#review"},streak:{title:t?"Лея рядом 🌙":"Leya is nearby рџЊ™",body:t?"Не потеряйте свою серию дней.":"Do not lose your daily streak.",url:"./index.html#home"},daily_bonus:{title:t?"Ежедневный бонус":"Daily Bonus",body:t?"Заберите XP и Moon Fragments.":"Claim XP and Moon Fragments.",url:"./index.html#home"},lesson:{title:t?"Новые знания ждут":"New knowledge awaits",body:t?"Продолжите изучение кандзи.":"Continue learning kanji.",url:"./index.html#textbooks"}},s=n[e]||n.review;return{title:s.title,options:{body:s.body,tag:`flash-kanji-${e}`,renotify:!1,icon:"./assets/icon-192.png",badge:"./assets/icon-192.png",data:{url:s.url,type:e}}}}async function FA(){try{const e=await navigator.serviceWorker?.ready;if(!e?.periodicSync)return;await e.periodicSync.register("flash-kanji-daily",{minInterval:24*60*60*1e3}),r.notificationPrompt.periodicSync=!0,fs()}catch{r.notificationPrompt.periodicSync=!1,fs()}}function zh(){return p()==="en"?{badge:"PWA reminders",title:"Allow Flash Kanji notifications?",description:"We will remind you about reviews, streaks and daily bonuses.",allow:"Allow",later:"Later",enabled:"Notifications enabled"}:{badge:"PWA напоминания",title:"Разрешить уведомления Flash Kanji?",description:"Мы напомним о повторениях, серии и ежедневном бонусе.",allow:"Разрешить",later:"Позже",enabled:"Уведомления включены"}}function ie(e){return{...e,history:[...e.history||[]]}}function OA(e,t){return new Date(e.getTime()+t*24*60*60*1e3)}function Uh(){const e=new Date;return e.setHours(23,59,59,999),e}function ce(){return Od(new Date)}function Od(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Bd(e){const[t,n,s]=e.split("-").map(Number);return new Date(t,n-1,s)}function hs(e,t){return Math.round((Bd(t)-Bd(e))/864e5)}function Jh(e,t){const n=Bd(e);return n.setDate(n.getDate()+t),Od(n)}function BA(e){return Array.from({length:e},(t,n)=>{const s=new Date;return s.setDate(s.getDate()-(e-1-n)),Od(s)})}function Yt(e){if(!e)return p()==="ru"?"сейчас":"now";const t=new Date(e).getTime()-Date.now();if(t<=0)return p()==="ru"?"сейчас":"now";const n=Math.ceil(t/6e4);if(n<60)return p()==="ru"?`через ${n} мин.`:`in ${n} min`;const s=Math.ceil(n/60);if(s<24)return p()==="ru"?`через ${s} ч.`:`in ${s} h`;const a=Math.ceil(s/24);return p()==="ru"?`через ${a} дн.`:`in ${a} d`}function E(e,t){return t?de(Math.round(e/t*100),0,100):0}function de(e,t,n){return Math.max(t,Math.min(n,e))}function Go(e,t){const n=10**t;return Math.round(e*n)/n}function it(e){return e[Math.floor(Math.random()*e.length)]}function vs(e,t){return Math.floor(Number(e)+Math.random()*(Number(t)-Number(e)))}function si(e,t){return String(e)===String(t)?"selected":""}function zA(){let e="/";try{e=decodeURIComponent(location.pathname||"/")}catch{return"/"}if(!Xh(e))return"/";const t=e.replace(/\/textbooks(?:\/[^/?#]*)*\/?$/i,"/")||"/";if(t!==e||/^\/?textbooks(?:\/|$)/i.test(e))return t.endsWith("/")?t:`${t}/`;if(/\/[^/]+\.html$/i.test(e)){const n=e.replace(/[^/]+\.html$/i,"")||"/";return n.endsWith("/")?n:`${n}/`}return e.endsWith("/")?e:`${e}/`}function Gh(e="",t=""){const n=String(e||"").trim(),s=we(n)?n.toLowerCase():n.toUpperCase(),a=String(t||"").trim(),o=s?`#textbooks/${encodeURIComponent(s)}`:"#textbooks/";return a?`${o}/${encodeURIComponent(a)}`:o}function jt(e=""){const t=String(e||"").trim(),n=t?t.startsWith("#")?t:`#${t.replace(/^#/,"")}`:"",s=`${zA()}${location.search||""}${n}`;`${location.pathname}${location.search||""}${location.hash||""}`!==s&&history.replaceState(null,"",s)}function Xs(){const e=mv(location.pathname||"/");return e.status==="valid"&&e.kind==="download"&&!location.hash||e.status==="valid"&&["textbooks","textbook-level","kana-course"].includes(e.kind||"")&&!location.hash?e:Xh(location.pathname||"/")?bs(location.hash):e.status==="not-found"?e:ve("pathname","entity-not-found",e.raw,e.segments,e.locale,e.canonicalPath)}function qh(e){return!e||e.status!=="not-found"?"":`${e.source}:${e.reason}:${e.raw}:${e.canonicalPath||""}`}function Qs(e){const t=e.route,n=e.status==="valid"?e.params:{};r.routeMatch=e,r.routeNotFound=e.status==="not-found"?e:null,r.route=t,r.kanjiPageId=t==="kanji"&&n.cardId||null,r.activeTextbookLevel=t==="textbooks"&&(n.level||n.course)||null,r.activeTextbookSubroute=t==="textbooks"&&n.subroute||null,r.activeJlptLesson=t==="jlpt-lesson"?n.level||null:t==="textbooks"&&n.level||r.activeJlptLesson,r.activeLearnView=t==="learn"&&n.view||$n,r.activeLearnNodeId=t==="learn"&&r.activeLearnView===tn&&n.targetId||null,r.activeLearnLegacyLessonId=t==="learn"&&r.activeLearnView===jn&&n.targetId||null}function Ur(e){if(e.status==="not-found"||e.source==="pathname")return e;const t=e.params||{};if(e.route==="kanji"&&!eL(t.cardId))return!r.deferredDataLoaded&&tL(t.cardId)?e:ve("hash","entity-not-found",e.raw,e.segments,e.locale);if(e.route==="textbooks"){const n=t.level||t.course||"",s=t.subroute||"";if(n&&we(n))return Ja(n)?s&&!EL(n,s)?ve("hash","entity-not-found",e.raw,e.segments,e.locale):e:r.bootAncillaryLoaded?ve("hash","entity-not-found",e.raw,e.segments,e.locale):e;if(n&&!It(n))return!r.bootAncillaryLoaded&&F(n)?e:ve("hash","entity-not-found",e.raw,e.segments,e.locale);if(n&&s&&!_L(n,s))return PL(n,s)?e:ve("hash","entity-not-found",e.raw,e.segments,e.locale)}return e.route==="jlpt-lesson"&&!Pn(t.level)?!r.bootAncillaryLoaded&&F(t.level)?e:ve("hash","entity-not-found",e.raw,e.segments,e.locale):e.route==="learn"&&(t.view===tn&&!Is(t.targetId)||t.view===jn&&!r.lessons.some(n=>n.id===t.targetId))?ve("hash","entity-not-found",e.raw,e.segments,e.locale):e}function UA(){return bs(location.hash).raw}function JA(){const e=bs(location.hash);return e.status==="valid"&&e.route==="kanji"&&e.params.cardId||""}function GA(){const e=bs(location.hash);return e.status==="valid"&&e.route==="textbooks"&&(e.params.level||e.params.course)||""}function qA(){const e=bs(location.hash);return e.status==="valid"&&e.route==="textbooks"&&e.params.subroute||""}function HA(){const e=bs(location.hash);return e.status==="valid"&&e.route==="jlpt-lesson"&&e.params.level||""}function VA(){return Gs().filter(e=>Jr(e.id)).length}function Jr(e){const t=r.progress?.achievements?.[e];return!!(t&&(t===!0||typeof t=="string"||t.unlockedAt||t.rewardXp!==void 0))}function i(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[t])}function g(e){return i(e)}})();
